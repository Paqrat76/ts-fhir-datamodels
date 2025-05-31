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

// import { strict as assert } from 'node:assert';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { camelCase, upperFirst } from 'lodash';
import * as Handlebars from 'handlebars';
import { getRequiredConstructorParams, getSdHbsProperties, HbsStructureDefinition } from './utils-hbs';
import { StructureDefinition } from '../fhir-artifact-interfaces';
import { FhirPackage, GeneratedContent } from '../ts-datamodel-generator-helpers';

const classTemplate = readFileSync(resolve(__dirname, 'fhir-complex-datatype.hbs'), 'utf8');
const constructorRequiredPartial = readFileSync(resolve(__dirname, 'partials', 'constructor-required.hbs'), 'utf8');
const privateFieldDeclarationPartial = readFileSync(
  resolve(__dirname, 'partials', 'private-field-declaration.hbs'),
  'utf8',
);
const publicBaseMethodsPartial = readFileSync(resolve(__dirname, 'partials', 'public-base-methods.hbs'), 'utf8');
const publicFieldMethodsPartial = readFileSync(resolve(__dirname, 'partials', 'public-field-methods.hbs'), 'utf8');
const publicFieldMethodsChoicePartial = readFileSync(
  resolve(__dirname, 'partials', 'public-field-methods-choice.hbs'),
  'utf8',
);
const publicFieldMethodsComplexPartial = readFileSync(
  resolve(__dirname, 'partials', 'public-field-methods-complex.hbs'),
  'utf8',
);
const publicFieldMethodsEnumCodePartial = readFileSync(
  resolve(__dirname, 'partials', 'public-field-methods-enumcode.hbs'),
  'utf8',
);
const publicFieldMethodsPrimitivePartial = readFileSync(
  resolve(__dirname, 'partials', 'public-field-methods-primitive.hbs'),
  'utf8',
);
const publicFieldMethodsReferencePartial = readFileSync(
  resolve(__dirname, 'partials', 'public-field-methods-reference.hbs'),
  'utf8',
);
const publicStaticParseMethodPartial = readFileSync(
  resolve(__dirname, 'partials', 'public-static-parse-method.hbs'),
  'utf8',
);
const publicToJSONMethodPartial = readFileSync(resolve(__dirname, 'partials', 'public-toJSON-method.hbs'), 'utf8');
const fhirComplexComponentPartial = readFileSync(resolve(__dirname, 'partials', 'fhir-complex-component.hbs'), 'utf8');

Handlebars.registerHelper('requiredConstructorParams', getRequiredConstructorParams);
Handlebars.registerHelper('camelCase', function (source: string): string {
  return camelCase(source);
});
Handlebars.registerHelper('upperFirst', function (source: string): string {
  return upperFirst(source);
});

Handlebars.registerPartial('constructorRequiredPartial', constructorRequiredPartial);
Handlebars.registerPartial('privateFieldDeclarationPartial', privateFieldDeclarationPartial);
Handlebars.registerPartial('publicBaseMethodsPartial', publicBaseMethodsPartial);
Handlebars.registerPartial('publicFieldMethodsPartial', publicFieldMethodsPartial);
Handlebars.registerPartial('publicFieldMethodsChoicePartial', publicFieldMethodsChoicePartial);
Handlebars.registerPartial('publicFieldMethodsComplexPartial', publicFieldMethodsComplexPartial);
Handlebars.registerPartial('publicFieldMethodsEnumCodePartial', publicFieldMethodsEnumCodePartial);
Handlebars.registerPartial('publicFieldMethodsPrimitivePartial', publicFieldMethodsPrimitivePartial);
Handlebars.registerPartial('publicFieldMethodsReferencePartial', publicFieldMethodsReferencePartial);
Handlebars.registerPartial('publicStaticParseMethodPartial', publicStaticParseMethodPartial);
Handlebars.registerPartial('publicToJSONMethodPartial', publicToJSONMethodPartial);
Handlebars.registerPartial('fhirComplexComponentPartial', fhirComplexComponentPartial);

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

// /**
//  * Determines and returns the FHIR type definition for a given element.
//  *
//  * @param {ElementDefinition} element - The element definition for which the FHIR type needs to be determined. The `type` property of this element must be defined.
//  * @param {Map<string, string>} codeSystemEnumMap - A map of element paths to corresponding code system enumeration names, if applicable.
//  * @returns {HbsElementDefinitionType} The resolved type information for the FHIR element.type.
//  */
// function getFhirType(element: ElementDefinition, codeSystemEnumMap: Map<string, string>): HbsElementDefinitionType {
//   assert(element.type, `ElementDefinition.type is expected to exist for ElementDefinition ${element.path}`);
//   const elementTypes: ElementDefinitionType[] = fixPrimitiveElementType(element.type);
//
//   if (elementTypes.length === 1) {
//     let dataType: string | undefined;
//     let primitiveJsonType: 'boolean' | 'number' | 'string' | undefined;
//     let codeSystemEnumName: string | undefined;
//     let typeTargetProfile: string[] | undefined;
//     let targetResource: string[] | undefined;
//
//     const typeCode = elementTypes[0]?.code as FhirDataType;
//     if (typeCode === 'Element') {
//       dataType = `${upperFirst(camelCase(element.path))}Component`;
//     } else {
//       dataType = DATA_TYPE_MAPPINGS.get(typeCode);
//       assert(dataType, `Unsupported FHIR type: ${typeCode} for ElementDefinition ${element.path}`);
//
//       primitiveJsonType = getPrimitiveJsonType(typeCode);
//
//       if (codeSystemEnumMap.has(element.path)) {
//         assert(
//           dataType === 'CodeType',
//           `Invalid source FHIR type (${dataType}) for ElementDefinition ${element.path}; Expected 'CodeType'`,
//         );
//         codeSystemEnumName = codeSystemEnumMap.get(element.path);
//         // This CodeSystem is represented by a generated enum; therefore, its data type must be EnumCodeType
//         dataType = 'EnumCodeType';
//       }
//
//       typeTargetProfile = elementTypes[0]?.targetProfile;
//       targetResource = typeTargetProfile?.map((targetUrl: string) => {
//         return extractNameFromUrl(targetUrl);
//       });
//     }
//
//     return {
//       fhirDataType: typeCode,
//       code: dataType,
//       primitiveJsonType: primitiveJsonType,
//       choiceTypes: undefined,
//       choiceDataTypes: undefined,
//       codeSystemName: codeSystemEnumName?.replace('Enum', ''),
//       codeSystemEnumName: codeSystemEnumName,
//       targetProfile: typeTargetProfile,
//       targetResource: targetResource,
//     } as HbsElementDefinitionType;
//   } else {
//     // ElementDefinition is for an element having a choice (polymorphic) type
//     const choiceTypes: string[] = [];
//     const choiceDataTypes: string[] = [];
//
//     elementTypes.forEach((edType: ElementDefinitionType) => {
//       choiceTypes.push(edType.code);
//       const dataType = DATA_TYPE_MAPPINGS.get(edType.code as FhirDataType);
//       assert(dataType, `Unsupported FHIR type: ${edType.code} for ElementDefinition ${element.path}`);
//       choiceDataTypes.push(dataType);
//     });
//
//     return {
//       fhirDataType: 'CHOICE',
//       code: 'DataType',
//       primitiveJsonType: undefined,
//       choiceTypes: choiceTypes,
//       choiceDataTypes: choiceDataTypes,
//       codeSystemName: undefined,
//       codeSystemEnumName: undefined,
//       targetProfile: undefined,
//       targetResource: undefined,
//     } as HbsElementDefinitionType;
//   }
// }

// /**
//  * Processes a FHIR StructureDefinition to extract and map its element definitions into a more standardized format.
//  *
//  * @param {StructureDefinition} structureDef - The StructureDefinition object containing element definitions from the FHIR specification.
//  * @param {Map<string, string>} codeSystemEnumMap - A mapping of CodeSystem paths to their enumerated values.
//  * @returns {HbsElementDefinition[]} An array of HbsElementDefinition element definitions derived from the input StructureDefinition.
//  */
// function getParentElementDefinitions(
//   structureDef: StructureDefinition,
//   codeSystemEnumMap: Map<string, string>,
// ): HbsElementDefinition[] {
//   const elementDefinitions: ElementDefinition[] = structureDef.snapshot?.element ?? [];
//   // Filter out the root ElementDefinition and all elements based on Element (i.e., id, extension) and 0..0 cardinality
//   const parentElements = elementDefinitions.filter(
//     (element: ElementDefinition) =>
//       element.path.split('.').length === 2 &&
//       element.base &&
//       !(
//         element.base.path.startsWith('Element') ||
//         element.base.path.startsWith('BackboneType') ||
//         element.base.path.startsWith('BackboneElement')
//       ) &&
//       !is0to0Cardinality(element),
//   );
//   assert(
//     parentElements.length > 0,
//     `StructureDefinition.snapshot.element is expected to have at least one element in ${structureDef.name}`,
//   );
//
//   return parentElements.map((element: ElementDefinition): HbsElementDefinition => {
//     const min = element.min ?? 0;
//     const max = element.max ?? '1';
//     const isRequiredElement = isRequired(element);
//     const isArrayElement = isArrayCardinality(element);
//
//     const type: HbsElementDefinitionType = getFhirType(element, codeSystemEnumMap);
//     const isChoice = type.fhirDataType === 'CHOICE';
//
//     const isEnumCodeType = type.code === 'EnumCodeType';
//     const isReferenceType = type.code === 'Reference';
//     const isPrimitiveType = isChoice ? false : isPrimitiveDataType(type.fhirDataType as FhirDataType);
//     const isComplexType = !(isChoice || isPrimitiveType || isEnumCodeType);
//     // These control Handlebars template processing for the public-field-methods.hbs
//     const isEnumCodeMethods = isChoice ? false : type.code === 'EnumCodeType';
//     const isReferenceMethods = isChoice ? false : type.code === 'Reference';
//     const isPrimitiveMethods =
//       isChoice || isEnumCodeType ? false : isPrimitiveDataType(type.fhirDataType as FhirDataType);
//     const isComplexMethods = !(isChoice || isPrimitiveMethods || isEnumCodeType || isReferenceMethods);
//
//     return {
//       path: element.path,
//       fieldName: getFieldName(element.path),
//       short: fixDescriptiveString(element.short),
//       definition: fixDescriptiveString(element.definition),
//       comment: fixDescriptiveString(element.comment),
//       requirements: fixDescriptiveString(element.requirements),
//       min: min,
//       max: max,
//       cardinality: `${String(min)}..${max}`,
//       isRequired: isRequiredElement,
//       isArray: isArrayElement,
//       isOptionalItem: !isRequiredElement && !isArrayElement,
//       isOptionalList: !isRequiredElement && isArrayElement,
//       isRequiredItem: isRequiredElement && !isArrayElement,
//       isRequiredList: isRequiredElement && isArrayElement,
//       type: type,
//       isPrimitiveType: isPrimitiveType,
//       isChoiceType: isChoice,
//       isComplexType: isComplexType,
//       isEnumCodeType: isEnumCodeType,
//       isReferenceType: isReferenceType,
//       isPrimitiveMethods: isPrimitiveMethods,
//       isChoiceMethods: isChoice,
//       isComplexMethods: isComplexMethods,
//       isEnumCodeMethods: isEnumCodeMethods,
//       isReferenceMethods: isReferenceMethods,
//       isModifier: element.isModifier ?? false,
//       isModifierReason: fixDescriptiveString(element.isModifierReason),
//       isSummary: element.isSummary ?? false,
//     } as HbsElementDefinition;
//   });
// }

// /**
//  * Converts a given FHIR StructureDefinition into a Handlebars-compatible structure definition.
//  *
//  * @param {StructureDefinition} structureDef - The StructureDefinition object to be transformed.
//  * @param {Map<string, string>} codeSystemEnumMap - A mapping of CodeSystem paths to their enumerated values.
//  * @param {FhirPackage} fhirPackage - The FHIR package containing related metadata such as version information.
//  * @returns {HbsStructureDefinition} A structure definition formatted for Handlebars template processing.
//  */
// function getSdHbsProperties(
//   structureDef: StructureDefinition,
//   codeSystemEnumMap: Map<string, string>,
//   fhirPackage: FhirPackage,
// ): HbsStructureDefinition {
//   const baseDefinitionType = getBaseDefinitionType(structureDef);
//
//   const rootElement = {
//     short: fixDescriptiveString(structureDef.snapshot?.element[0]?.short),
//     definition: fixDescriptiveString(structureDef.snapshot?.element[0]?.definition),
//     comment: fixDescriptiveString(structureDef.snapshot?.element[0]?.comment),
//     requirements: fixDescriptiveString(structureDef.snapshot?.element[0]?.requirements),
//   } as StructureDefinitionRootElement;
//
//   const parentElementDefinitions: HbsElementDefinition[] = getParentElementDefinitions(structureDef, codeSystemEnumMap);
//
//   const numReqdFields = getNumberOfReqdFields(parentElementDefinitions);
//   const numPrivateFields = getNumberOfPrivateFields(parentElementDefinitions);
//   const hasChoiceFields = parentElementDefinitions.some((ed: HbsElementDefinition) => ed.isChoiceType);
//   const hasCodeSystemEnums = parentElementDefinitions.some(
//     (ed: HbsElementDefinition) => ed.type.codeSystemEnumName !== undefined,
//   );
//
//   const sdHbsProperties = {
//     url: structureDef.url,
//     name: structureDef.name,
//     type: structureDef.type,
//     baseDefinitionType: baseDefinitionType,
//     description: fixDescriptiveString(structureDef.description) ?? 'description not provided',
//     purpose: fixDescriptiveString(structureDef.purpose),
//     fhirVersion: structureDef.fhirVersion ?? fhirPackage.pkgVersion,
//     rootElement: rootElement,
//     numRequiredFields: numReqdFields,
//     hasRequiredFields: numReqdFields > 0,
//     hasPrimitiveFields: numPrivateFields > 0,
//     hasOnlyOnePrimitiveField: numPrivateFields === 1,
//     hasChoiceFields: hasChoiceFields,
//     hasCodeSystemEnums: hasCodeSystemEnums,
//     requiredConstructor: numReqdFields > 0 || hasCodeSystemEnums,
//     parentElementDefinitions: parentElementDefinitions,
//     hasComponents: false,
//     components: undefined,
//     fhirCoreImports: [] as string[],
//     generatedImports: [] as string[] | undefined,
//   } as HbsStructureDefinition;
//
//   sdHbsProperties.fhirCoreImports = getFhirCoreImports(sdHbsProperties);
//   sdHbsProperties.generatedImports = getGeneratedImports(sdHbsProperties);
//
//   return sdHbsProperties;
// }

// /**
//  * Generates and returns a sorted array of FHIR core import statements required for a given StructureDefinition.
//  *
//  * @param {HbsStructureDefinition} sdHbsProperties - The StructureDefinition properties for which the imports are calculated. Includes details like required fields and element definitions.
//  * @returns {string[]} A sorted array of unique import strings needed for the specified StructureDefinition.
//  */
// function getFhirCoreImports(sdHbsProperties: HbsStructureDefinition): string[] {
//   const importsSet = new Set<string>();
//
//   // Core imports for all complex types
//   importsSet.add('IBase');
//   importsSet.add('INSTANCE_EMPTY_ERROR_MSG');
//   importsSet.add('JSON');
//   importsSet.add('isDefined');
//   importsSet.add('isElementEmpty');
//   importsSet.add('isEmpty');
//   importsSet.add('processElementJson');
//   importsSet.add('assertFhirType');
//
//   if (['DataType', 'BackboneType'].includes(sdHbsProperties.baseDefinitionType)) {
//     importsSet.add(sdHbsProperties.baseDefinitionType);
//   }
//
//   if (sdHbsProperties.hasRequiredFields) {
//     importsSet.add('assertIsDefined');
//     importsSet.add('FhirError');
//     importsSet.add('REQUIRED_PROPERTIES_DO_NOT_EXIST');
//     importsSet.add('REQUIRED_PROPERTIES_REQD_IN_JSON');
//   }
//
//   sdHbsProperties.parentElementDefinitions.forEach((ed: HbsElementDefinition) => {
//     if (ed.type.choiceDataTypes && ed.type.choiceDataTypes.length > 0) {
//       importsSet.add('DataType');
//       importsSet.add('ChoiceDataTypesMeta');
//       importsSet.add('ChoiceDataTypes');
//       importsSet.add('InvalidTypeError');
//       importsSet.add('setPolymorphicValueJson');
//       importsSet.add('parsePolymorphicDataType');
//       importsSet.add('assertIsDefined');
//       ed.type.choiceDataTypes.forEach((choiceType: string) => {
//         if (choiceType.endsWith('Type')) {
//           importsSet.add(choiceType);
//         }
//       });
//     }
//
//     if (ed.isReferenceMethods) {
//       importsSet.add('ReferenceTargets');
//     }
//
//     if (ed.isEnumCodeMethods) {
//       importsSet.add('fhirCode');
//       importsSet.add('fhirCodeSchema');
//       importsSet.add('CodeType');
//       importsSet.add('EnumCodeType');
//       importsSet.add('assertEnumCodeType');
//       importsSet.add('parseCodeType');
//       if (ed.isRequired) {
//         importsSet.add('constructorCodeValueAsEnumCodeType');
//       }
//     }
//
//     if (ed.isPrimitiveMethods) {
//       importsSet.add(ed.type.code);
//       importsSet.add('getPrimitiveTypeJson');
//       importsSet.add('setFhirPrimitiveJson');
//       importsSet.add('parseFhirPrimitiveData');
//       importsSet.add(`parse${ed.type.code}`);
//       const capPrimitiveType: Capitalize<string> = upperFirst(ed.type.fhirDataType);
//       importsSet.add(`fhir${capPrimitiveType}`);
//       importsSet.add(`fhir${capPrimitiveType}Schema`);
//       if (ed.isRequired) {
//         importsSet.add('PrimitiveType');
//       }
//     }
//
//     if ((ed.isComplexMethods || ed.isReferenceMethods) && !ed.isArray) {
//       importsSet.add('setFhirComplexJson');
//     }
//
//     if (ed.isArray) {
//       importsSet.add('copyListValues');
//       importsSet.add('isDefinedList');
//       importsSet.add('assertFhirTypeList');
//       if (ed.isPrimitiveMethods) {
//         importsSet.add('PrimitiveTypeJson');
//         importsSet.add('setFhirPrimitiveListJson');
//         importsSet.add('getPrimitiveTypeListJson');
//       }
//       if (ed.isComplexMethods || ed.isReferenceMethods) {
//         importsSet.add('setFhirComplexListJson');
//       }
//       if (ed.isRequired) {
//         importsSet.add('isDefinedList');
//         importsSet.add('assertIsDefinedList');
//       }
//     }
//   });
//
//   return Array.from(importsSet).sort();
// }

// /**
//  * Generates a sorted list of imports based on the provided HBS structure definition.
//  * The method extracts unique type codes and code system enum names if they meet certain conditions
//  * and returns them as an alphabetically sorted array.
//  *
//  * @param {HbsStructureDefinition} sdHbsProperties - The structure definition containing element definitions
//  * to process for generating imports.
//  * @returns {string[] | undefined} An alphabetically sorted array of unique import strings if any are generated,
//  * or undefined if no imports are required.
//  */
// function getGeneratedImports(sdHbsProperties: HbsStructureDefinition): string[] | undefined {
//   const importsSet = new Set<string>();
//
//   if (['Resource', 'DomainResource'].includes(sdHbsProperties.baseDefinitionType)) {
//     importsSet.add(sdHbsProperties.baseDefinitionType);
//   }
//
//   sdHbsProperties.parentElementDefinitions.forEach((ed: HbsElementDefinition) => {
//     if (ed.type.choiceDataTypes && ed.type.choiceDataTypes.length > 0) {
//       ed.type.choiceDataTypes.forEach((choiceType: string) => {
//         if (!choiceType.endsWith('Type')) {
//           importsSet.add(choiceType);
//         }
//       });
//     }
//
//     if (ed.isComplexMethods || ed.isReferenceMethods) {
//       importsSet.add(ed.type.code);
//     }
//
//     if (ed.type.codeSystemEnumName) {
//       importsSet.add(ed.type.codeSystemEnumName);
//     }
//   });
//
//   return importsSet.size === 0 ? undefined : Array.from(importsSet).sort();
// }
