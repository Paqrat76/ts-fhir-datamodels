/*
 * Copyright (c) 2025. Joe Paquette
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import { strict as assert } from 'node:assert';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { camelCase, upperFirst } from 'lodash';
import * as Handlebars from 'handlebars';
import {
  fixDescriptiveString,
  fixPrimitiveElementType,
  getConstructorNulls,
  getFieldName,
  getNumberOfReqdFields,
  getRequiredConstructorParams,
  HbsElementDefinition,
  HbsElementDefinitionType,
  HbsStructureDefinition,
  isArrayCardinality,
  isRequired,
  StructureDefinitionRootElement,
} from './utils-hbs';
import { ElementDefinition, ElementDefinitionType, StructureDefinition } from '../fhir-artifact-interfaces';
import { FhirPackage, GeneratedContent } from '../ts-datamodel-generator-helpers';
//import { DATA_TYPE_MAPPINGS, FhirDataType } from '@paq-ts-fhir/fhir-core';
import { DATA_TYPE_MAPPINGS, FhirDataType } from '../utils';

const classTemplate = readFileSync(resolve(__dirname, 'fhir-complex-datatype.hbs'), 'utf8');
const constructorRequiredPartial = readFileSync(resolve(__dirname, 'partials', 'constructor-required.hbs'), 'utf8');
const privateFieldDeclarationPartial = readFileSync(
  resolve(__dirname, 'partials', 'private-field-declaration.hbs'),
  'utf8',
);

Handlebars.registerHelper('constructorNulls', getConstructorNulls);
Handlebars.registerHelper('requiredConstructorParams', getRequiredConstructorParams);
Handlebars.registerHelper('camelCase', function (source: string): string {
  return camelCase(source);
});
Handlebars.registerHelper('upperFirst', function (source: string): string {
  return upperFirst(source);
});

Handlebars.registerPartial('constructorRequiredPartial', constructorRequiredPartial);
Handlebars.registerPartial('privateFieldDeclarationPartial', privateFieldDeclarationPartial);

const classGenerator = Handlebars.compile(classTemplate);

/**
 * Generates a complex type module based on the provided structure definition and associated FHIR package.
 *
 * @param {StructureDefinition} structureDef - The structure definition object that describes the FHIR resource or complex type.
 * @param {Map<string, string>} codeSystemEnumMap - A map where the key represents the path from the source
 *    StructureDefinition and the value is the generated enum name associated with the code system.
 * @param {FhirPackage} fhirPackage - The FHIR package containing the resources and dependencies needed for generation.
 * @returns {GeneratedContent} The generated content including the filename, file extension, type, and file contents.
 */
export function generateComplexType(
  structureDef: StructureDefinition,
  codeSystemEnumMap: Map<string, string>,
  fhirPackage: FhirPackage,
): GeneratedContent {
  const sdHbs: HbsStructureDefinition = getSdHbsProperties(structureDef, codeSystemEnumMap, fhirPackage);

  const classCode: string = classGenerator({ sdHbs });

  return {
    fhirPackage: fhirPackage,
    filename: sdHbs.name,
    fileExtension: 'ts',
    fhirType: 'ComplexType',
    fileContents: classCode,
  } as GeneratedContent;
}

/**
 * Determines and returns the FHIR type definition for a given element.
 *
 * @param {ElementDefinition} element - The element definition for which the FHIR type needs to be determined. The `type` property of this element must be defined.
 * @param {Map<string, string>} codeSystemEnumMap - A map of element paths to corresponding code system enumeration names, if applicable.
 * @returns {HbsElementDefinitionType} The resolved type information for the FHIR element.type.
 */
function getFhirType(element: ElementDefinition, codeSystemEnumMap: Map<string, string>): HbsElementDefinitionType {
  assert(element.type, `ElementDefinition.type is expected to exist for ElementDefinition ${element.path}`);
  const elementTypes: ElementDefinitionType[] = fixPrimitiveElementType(element.type);

  if (elementTypes.length === 1) {
    const typeCode = elementTypes[0]?.code as FhirDataType;
    //const isPrimitive = /^[a-z].*$/.test(typeCode);
    let dataType = DATA_TYPE_MAPPINGS.get(typeCode);
    assert(dataType, `Unsupported FHIR type: ${typeCode} for ElementDefinition ${element.path}`);

    let codeSystemEnumName: string | undefined = undefined;
    if (codeSystemEnumMap.has(element.path)) {
      assert(
        dataType === 'CodeType',
        `Invalid source FHIR type (${dataType}) for ElementDefinition ${element.path}; Expected 'CodeType'`,
      );
      codeSystemEnumName = codeSystemEnumMap.get(element.path);
      // This CodeSystem is represented by a generated enum; therefore, its data type must be EnumCodeType
      dataType = 'EnumCodeType';
    }

    const typeTargetProfile = elementTypes[0]?.targetProfile;

    return {
      fhirDataType: typeCode,
      // isPrimitive: isPrimitive,
      code: dataType,
      choiceTypes: undefined,
      codeSystemName: codeSystemEnumName?.replace('Enum', ''),
      codeSystemEnumName: codeSystemEnumName,
      targetProfile: typeTargetProfile,
    } as HbsElementDefinitionType;
  } else {
    // ElementDefinition is for an element having a choice (polymorphic) type
    const choiceTypes: string[] = elementTypes.map((edType: ElementDefinitionType) => {
      return edType.code;
    });

    return {
      fhirDataType: 'CHOICE',
      // isPrimitive: false,
      code: 'DataType',
      choiceTypes: choiceTypes,
      codeSystemName: undefined,
      codeSystemEnumName: undefined,
      targetProfile: undefined,
    } as HbsElementDefinitionType;
  }
}

/**
 * Processes a FHIR StructureDefinition to extract and map its element definitions into a more standardized format.
 *
 * @param {StructureDefinition} structureDef - The StructureDefinition object containing element definitions from the FHIR specification.
 * @param {Map<string, string>} codeSystemEnumMap - A mapping of CodeSystem paths to their enumerated values.
 * @returns {HbsElementDefinition[]} An array of HbsElementDefinition element definitions derived from the input StructureDefinition.
 */
function getElementDefinitions(
  structureDef: StructureDefinition,
  codeSystemEnumMap: Map<string, string>,
): HbsElementDefinition[] {
  const elementDefinitions: ElementDefinition[] = structureDef.snapshot?.element ?? [];
  // Filter out the root ElementDefinition and all elements based on Element (i.e., id, extension)
  const elements = elementDefinitions.filter(
    (element: ElementDefinition) => element.path.split('.').length > 1 && !element.base?.path.startsWith('Element'),
  );
  assert(
    elements.length > 0,
    `StructureDefinition.snapshot.element is expected to have at least one element in ${structureDef.url}`,
  );

  return elements.map((element: ElementDefinition): HbsElementDefinition => {
    const min = element.min ?? 0;
    const max = element.max ?? '1';
    const isRequiredElement = isRequired(element);
    const isArrayElement = isArrayCardinality(element);
    const type: HbsElementDefinitionType = getFhirType(element, codeSystemEnumMap);
    const isChoiceType = type.fhirDataType === 'CHOICE';
    const isPrimitive = isChoiceType ? false : /^[a-z].*$/.test(type.fhirDataType);

    return {
      path: element.path,
      fieldName: getFieldName(element.path),
      short: fixDescriptiveString(element.short),
      definition: fixDescriptiveString(element.definition),
      comment: fixDescriptiveString(element.comment),
      requirements: fixDescriptiveString(element.requirements),
      min: min,
      max: max,
      cardinality: `${String(min)}..${max}`,
      isRequired: isRequiredElement,
      isArray: isArrayElement,
      isOptionalItem: !isRequiredElement && !isArrayElement,
      isOptionalList: !isRequiredElement && isArrayElement,
      isRequiredItem: isRequiredElement && !isArrayElement,
      isRequiredList: isRequiredElement && isArrayElement,
      // type: getFhirType(element, codeSystemEnumMap),
      type: type,
      isPrimitive: isPrimitive,
      // isChoiceType: element.type && element.type.length > 1,
      isChoiceType: isChoiceType,
      isModifier: element.isModifier ?? false,
      isModifierReason: fixDescriptiveString(element.isModifierReason),
      isSummary: element.isSummary ?? false,
    } as HbsElementDefinition;
  });
}

/**
 * Converts a given FHIR StructureDefinition into a Handlebars-compatible structure definition.
 *
 * @param {StructureDefinition} structureDef - The StructureDefinition object to be transformed.
 * @param {Map<string, string>} codeSystemEnumMap - A mapping of CodeSystem paths to their enumerated values.
 * @param {FhirPackage} fhirPackage - The FHIR package containing related metadata such as version information.
 * @returns {HbsStructureDefinition} A structure definition formatted for Handlebars template processing.
 */
function getSdHbsProperties(
  structureDef: StructureDefinition,
  codeSystemEnumMap: Map<string, string>,
  fhirPackage: FhirPackage,
): HbsStructureDefinition {
  const rootElement = {
    short: fixDescriptiveString(structureDef.snapshot?.element[0]?.short),
    definition: fixDescriptiveString(structureDef.snapshot?.element[0]?.definition),
    comment: fixDescriptiveString(structureDef.snapshot?.element[0]?.comment),
    requirements: fixDescriptiveString(structureDef.snapshot?.element[0]?.requirements),
  } as StructureDefinitionRootElement;

  const numReqdFields = getNumberOfReqdFields(structureDef);

  const elementDefinitions: HbsElementDefinition[] = getElementDefinitions(structureDef, codeSystemEnumMap);
  const hasCodeSystemEnums = elementDefinitions.some(
    (ed: HbsElementDefinition) => ed.type.codeSystemEnumName !== undefined,
  );

  const sdHbsProperties = {
    url: structureDef.url,
    name: structureDef.name,
    type: structureDef.type,
    description: fixDescriptiveString(structureDef.description) ?? 'description not provided',
    purpose: structureDef.purpose,
    fhirVersion: structureDef.fhirVersion ?? fhirPackage.pkgVersion,
    rootElement: rootElement,
    numRequiredFields: numReqdFields,
    hasRequiredFields: numReqdFields > 0,
    hasCodeSystemEnums: hasCodeSystemEnums,
    requiredConstructor: numReqdFields > 0 || hasCodeSystemEnums,
    elementDefinitions: elementDefinitions,
    fhirCoreImports: [] as string[],
    generatedImports: [] as string[] | undefined,
  } as HbsStructureDefinition;

  sdHbsProperties.fhirCoreImports = getFhirCoreImports(sdHbsProperties);
  sdHbsProperties.generatedImports = getGeneratedImports(sdHbsProperties);

  return sdHbsProperties;
}

/**
 * Generates and returns a sorted array of FHIR core import statements required for a given StructureDefinition.
 *
 * @param {HbsStructureDefinition} sdHbsProperties - The StructureDefinition properties for which the imports are calculated. Includes details like required fields and element definitions.
 * @returns {string[]} A sorted array of unique import strings needed for the specified StructureDefinition.
 */
function getFhirCoreImports(sdHbsProperties: HbsStructureDefinition): string[] {
  const importsSet = new Set<string>();

  // Core imports for all complex types
  importsSet.add('DataType');
  importsSet.add('IBase');
  importsSet.add('INSTANCE_EMPTY_ERROR_MSG');
  importsSet.add('JSON');
  importsSet.add('isDefined');
  importsSet.add('isElementEmpty');
  importsSet.add('isEmpty');
  importsSet.add('processElementJson');

  if (sdHbsProperties.hasRequiredFields) {
    importsSet.add('FhirError');
    importsSet.add('REQUIRED_PROPERTIES_DO_NOT_EXIST');
    importsSet.add('REQUIRED_PROPERTIES_REQD_IN_JSON');
  }

  sdHbsProperties.elementDefinitions.forEach((ed: HbsElementDefinition) => {
    if (ed.type.choiceTypes && ed.type.choiceTypes.length > 0) {
      importsSet.add('ChoiceDataTypesMeta');
      importsSet.add('ChoiceDataTypes');
    }

    if (ed.isPrimitive) {
      importsSet.add(ed.type.code);
      if (ed.type.code === 'EnumCodeType') {
        importsSet.add('CodeType');
        if (ed.isRequired) {
          importsSet.add('constructorCodeValueAsEnumCodeType');
        }
      } else if (ed.isRequired) {
        importsSet.add('PrimitiveType');
      }
      importsSet.add('parseFhirPrimitiveData');
      const capPrimitiveType: Capitalize<string> = upperFirst(ed.type.fhirDataType);
      importsSet.add(`fhir${capPrimitiveType}`);
      importsSet.add(`fhir${capPrimitiveType}Schema`);
    }

    if (ed.isArray) {
      importsSet.add('copyListValues');
      if (ed.isRequired) {
        importsSet.add('isDefinedList');
      }
    }
  });

  return Array.from(importsSet).sort();
}

/**
 * Generates a sorted list of imports based on the provided HBS structure definition.
 * The method extracts unique type codes and code system enum names if they meet certain conditions
 * and returns them as an alphabetically sorted array.
 *
 * @param {HbsStructureDefinition} sdHbsProperties - The structure definition containing element definitions
 * to process for generating imports.
 * @returns {string[] | undefined} An alphabetically sorted array of unique import strings if any are generated,
 * or undefined if no imports are required.
 */
function getGeneratedImports(sdHbsProperties: HbsStructureDefinition): string[] | undefined {
  const importsSet = new Set<string>();

  sdHbsProperties.elementDefinitions.forEach((ed: HbsElementDefinition) => {
    if (!ed.isPrimitive && ed.type.code !== 'DataType' && ed.type.code !== 'CHOICE') {
      importsSet.add(ed.type.code);
    }
    if (ed.type.codeSystemEnumName) {
      importsSet.add(ed.type.codeSystemEnumName);
    }
  });

  return importsSet.size === 0 ? undefined : Array.from(importsSet).sort();
}
