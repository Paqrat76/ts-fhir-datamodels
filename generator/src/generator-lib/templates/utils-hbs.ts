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
import { camelCase, cloneDeep, isEmpty, isNil, upperFirst } from 'lodash';
import {
  extractNameFromUrl,
  fixFhirHyperLinks,
  getPrimitiveJsonType,
  isPrimitiveDataType,
  stripLineBreaks,
  substituteUnicodeCharacters,
  TS_RESERVED_WORDS_SET,
} from '../utils';
import { ElementDefinition, ElementDefinitionType, StructureDefinition } from '../fhir-artifact-interfaces';
import { DATA_TYPE_MAPPINGS, DATA_TYPES } from '../fhir-data-type';
import { FhirPackage } from '../ts-datamodel-generator-helpers';

interface StructureDefinitionRootElement {
  short?: string;
  definition?: string;
  comment?: string;
  requirements?: string;
}

export interface HbsElementComponentRoot extends StructureDefinitionRootElement {
  path: string;
  componentName: string;
  componentLevel: number;
  typeCode: string;
}

export interface HbsElementDefinitionType {
  fhirDataType: string;
  code: string;
  primitiveJsonType?: 'boolean' | 'number' | 'string';
  choiceTypes?: string[];
  choiceDataTypes?: string[];
  codeSystemName?: string;
  codeSystemEnumName?: string;
  targetProfile?: string[];
  targetResource?: string[];
}

export interface HbsElementDefinition {
  path: string;
  fieldName: string;
  fieldIdentifierName: string;
  short?: string;
  definition?: string;
  comment?: string;
  requirements?: string;
  min: number;
  max: `${number}` | '*';
  cardinality: string;
  isRequired: boolean;
  isArray: boolean;
  isOptionalItem: boolean;
  isOptionalList: boolean;
  isRequiredItem: boolean;
  isRequiredList: boolean;
  type: HbsElementDefinitionType;
  isBackboneType: boolean;
  isChoiceType: boolean; // NOTE: FHIR "open" data types are treated as "choice" data types in ElementDefinition.type
  isComplexType: boolean;
  isEnumCodeType: boolean;
  isPrimitiveType: boolean;
  isReferenceType: boolean;
  isResourceType: boolean;
  isModifier: boolean;
  isModifierReason?: string;
  isSummary: boolean;
}

export interface HbsElementComponent {
  parentUrl: string;
  parentName: string;
  parentType: string;
  parentKind: string;
  parentFieldName: string;
  componentName: string;
  baseDefinitionType: string;
  isComponentResource: boolean;
  isComponentDomainResource: boolean;
  isComponentBackboneElement: boolean;
  isComponentBackboneType: boolean;
  isComponentDataType: boolean;
  isComponentElement: boolean;
  hasParsableDataType: boolean;
  // StructureDefinitionRootElement for parent component; HbsElementComponentRoot for child components
  rootElement: StructureDefinitionRootElement | HbsElementComponentRoot;
  numRequiredFields: number;
  hasRequiredFields: boolean;
  hasResourceFields: boolean;
  hasPrimitiveFields: boolean;
  hasOnlyOnePrimitiveField: boolean; // Refer to the comment block in the body of getNumberOfPrimitiveFields()
  hasChoiceFields: boolean;
  hasCodeSystemEnums: boolean;
  requiredConstructor: boolean;
  elementDefinitions: HbsElementDefinition[];
  fhirCoreImports: string[];
  generatedImports: string[];
}

export interface HbsStructureDefinition {
  url: string;
  name: string;
  type: string;
  kind: string;
  baseDefinitionType: string;
  description: string;
  purpose?: string;
  fhirVersion: string;
  parentComponent: HbsElementComponent;
  hasChildComponents: boolean;
  childComponents?: HbsElementComponent[];
  fhirCoreImports: string[];
  generatedImports: string[];
}

/**
 * Generates an HBS-compatible representation of a StructureDefinition, including its related properties,
 * child components, and necessary import information.
 *
 * @param {StructureDefinition} structureDef - The StructureDefinition that serves as the input for generating properties.
 * @param {Map<string, string>} codeSystemEnumMap - A map linking code systems to their corresponding enumerated values.
 * @param {FhirPackage} fhirPackage - The FHIR package containing version and other metadata information.
 * @returns {HbsStructureDefinition} An object representing the HBS structure, including its base properties, child components, and import information.
 */
export function getSdHbsProperties(
  structureDef: StructureDefinition,
  codeSystemEnumMap: Map<string, string>,
  fhirPackage: FhirPackage,
): HbsStructureDefinition {
  const baseDefinitionType = getBaseDefinitionType(structureDef);
  const parentComponent = getParentElementComponent(structureDef, codeSystemEnumMap);

  const hbsElementComponentRoots = getHbsElementComponentRoots(structureDef);

  let childComponents: HbsElementComponent[] | undefined = undefined;
  if (hbsElementComponentRoots.length > 0) {
    childComponents = getChildElementComponents(structureDef, codeSystemEnumMap, hbsElementComponentRoots);
  }

  const sdHbsProperties = {
    url: structureDef.url,
    name: structureDef.name,
    type: structureDef.type,
    kind: structureDef.kind,
    baseDefinitionType: baseDefinitionType,
    description: fixDescriptiveString(structureDef.description) ?? 'description not provided',
    purpose: fixDescriptiveString(structureDef.purpose),
    fhirVersion: structureDef.fhirVersion ?? fhirPackage.pkgVersion,
    parentComponent: parentComponent,
    hasChildComponents: !isEmpty(childComponents),
    childComponents: childComponents,
    fhirCoreImports: [] as string[],
    generatedImports: [] as string[],
  } as HbsStructureDefinition;

  let fhirCoreImportsSet = new Set(parentComponent.fhirCoreImports);
  let generatedImportsSet = new Set<string>(parentComponent.generatedImports);

  if (childComponents && childComponents.length > 0) {
    let childCoreImportsSet = new Set<string>();
    let childGeneratedImportsSet = new Set<string>();

    childComponents.forEach((childComponent: HbsElementComponent) => {
      if (childComponent.fhirCoreImports.length > 0) {
        if (childCoreImportsSet.size === 0) {
          childCoreImportsSet = new Set(childComponent.fhirCoreImports);
        } else {
          childCoreImportsSet = new Set([...childComponent.fhirCoreImports, ...childCoreImportsSet]);
        }
      }
      if (childComponent.generatedImports.length > 0) {
        if (childGeneratedImportsSet.size === 0) {
          childGeneratedImportsSet = new Set(childComponent.generatedImports);
        } else {
          childGeneratedImportsSet = new Set([...childComponent.generatedImports, ...childGeneratedImportsSet]);
        }
      }
    });

    if (childCoreImportsSet.size > 0) {
      fhirCoreImportsSet = new Set([...fhirCoreImportsSet, ...childCoreImportsSet]);
    }
    if (childGeneratedImportsSet.size > 0) {
      if (generatedImportsSet.size > 0) {
        generatedImportsSet = new Set([...generatedImportsSet, ...childGeneratedImportsSet]);
      } else {
        generatedImportsSet = childGeneratedImportsSet;
      }
    }
  }

  sdHbsProperties.fhirCoreImports = Array.from(fhirCoreImportsSet).sort();
  sdHbsProperties.generatedImports = Array.from(generatedImportsSet).sort();

  return sdHbsProperties;
}

/**
 * Derives and returns an HbsElementDefinition object based on the provided ElementDefinition
 * and a mapping of code systems.
 *
 * @param {ElementDefinition} element - The definition of the FHIR ElementDefinition.
 * @param {Map<string, string>} codeSystemEnumMap - A mapping of code systems to corresponding enumerations
 *                                                  used in the FHIR model.
 * @returns {HbsElementDefinition} A comprehensive representation of the element
 */
function getHbsElementDefinition(
  element: ElementDefinition,
  codeSystemEnumMap: Map<string, string>,
): HbsElementDefinition {
  const nameResults = getFieldNames(element);
  assert(nameResults, 'nameResults must be non-empty');

  const min = element.min ?? 0;
  const max = element.max ?? '1';
  const isRequiredElement = isRequired(element);
  const isArrayElement = isArrayCardinality(element);

  const type: HbsElementDefinitionType = getFhirType(element, codeSystemEnumMap);
  const isChoice = type.fhirDataType === 'CHOICE';

  const isBackboneType = isChoice ? false : type.fhirDataType === 'BackboneElement';
  const isEnumCodeType = isChoice ? false : type.code === 'EnumCodeType';
  const isPrimitiveType = isChoice || isBackboneType || isEnumCodeType ? false : isPrimitiveDataType(type.fhirDataType);
  const isReferenceType = isChoice ? false : type.code === 'Reference';
  const isResourceType = isChoice ? false : type.code === 'Resource';
  const isComplexType = !(
    isChoice ||
    isBackboneType ||
    isEnumCodeType ||
    isPrimitiveType ||
    isReferenceType ||
    isResourceType
  );

  return {
    path: element.path,
    fieldName: nameResults.fieldName,
    fieldIdentifierName: nameResults.fieldIdentifierName,
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
    type: type,
    isBackboneType: isBackboneType,
    isChoiceType: isChoice,
    isComplexType: isComplexType,
    isEnumCodeType: isEnumCodeType,
    isPrimitiveType: isPrimitiveType,
    isReferenceType: isReferenceType,
    isResourceType: isResourceType,
    isModifier: element.isModifier ?? false,
    isModifierReason: fixDescriptiveString(element.isModifierReason),
    isSummary: element.isSummary ?? false,
  } as HbsElementDefinition;
}

/**
 * Generates a parent element component for the given StructureDefinition, including its metadata
 * and element definitions.
 *
 * @param {StructureDefinition} structureDef - The FHIR StructureDefinition object containing the metadata
 * and element definitions required to build the component.
 * @param {Map<string, string>} codeSystemEnumMap - A mapping of code systems to their corresponding
 * enumerated values used to resolve specific details of the structure definition's elements.
 * @returns {HbsElementComponent} The constructed parent element component
 * with all relevant metadata, required fields, references, and element definitions.
 */
function getParentElementComponent(
  structureDef: StructureDefinition,
  codeSystemEnumMap: Map<string, string>,
): HbsElementComponent {
  const baseDefinitionType = getBaseDefinitionType(structureDef);

  const rootElement = {
    short: fixDescriptiveString(structureDef.snapshot?.element[0]?.short),
    definition: fixDescriptiveString(structureDef.snapshot?.element[0]?.definition),
    comment: fixDescriptiveString(structureDef.snapshot?.element[0]?.comment),
    requirements: fixDescriptiveString(structureDef.snapshot?.element[0]?.requirements),
  } as StructureDefinitionRootElement;

  const parentElementDefinitions: HbsElementDefinition[] = getParentElementDefinitions(structureDef, codeSystemEnumMap);

  const hasParsableTypes = hasParsableDataType(baseDefinitionType, parentElementDefinitions);
  const hasResourceFields = parentElementDefinitions.some((ed: HbsElementDefinition) => ed.isResourceType);
  const numReqdFields = getNumberOfReqdFields(parentElementDefinitions);
  const numPrimitiveFields = getNumberOfPrimitiveFields(parentElementDefinitions);
  const hasChoiceFields = parentElementDefinitions.some((ed: HbsElementDefinition) => ed.isChoiceType);
  const hasCodeSystemEnums = parentElementDefinitions.some(
    (ed: HbsElementDefinition) => ed.type.codeSystemEnumName !== undefined,
  );

  const parentElementComponent = {
    parentUrl: structureDef.url,
    parentName: structureDef.name,
    parentType: structureDef.type,
    parentKind: structureDef.kind,
    parentFieldName: structureDef.name,
    componentName: structureDef.type,
    baseDefinitionType: baseDefinitionType,
    isComponentResource: baseDefinitionType === 'Resource',
    isComponentDomainResource: baseDefinitionType === 'DomainResource',
    isComponentBackboneElement: false,
    isComponentBackboneType: baseDefinitionType === 'BackboneType',
    isComponentDataType: baseDefinitionType === 'DataType',
    isComponentElement: false,
    hasParsableDataType: hasParsableTypes,
    rootElement: rootElement,
    numRequiredFields: numReqdFields,
    hasRequiredFields: numReqdFields > 0,
    hasResourceFields: hasResourceFields,
    hasPrimitiveFields: numPrimitiveFields > 0,
    hasOnlyOnePrimitiveField: numPrimitiveFields === 1,
    hasChoiceFields: hasChoiceFields,
    hasCodeSystemEnums: hasCodeSystemEnums,
    requiredConstructor: numReqdFields > 0 || hasCodeSystemEnums,
    elementDefinitions: parentElementDefinitions,
    fhirCoreImports: [] as string[],
    generatedImports: [] as string[],
  } as HbsElementComponent;

  parentElementComponent.fhirCoreImports = getFhirCoreImports(parentElementComponent);
  parentElementComponent.generatedImports = getGeneratedImports(parentElementComponent);

  return parentElementComponent;
}

/**
 * Extracts and maps parent element definitions from the snapshot of a given structure definition.
 *
 * @param {StructureDefinition} structureDef - The structure definition containing the snapshot and element definitions.
 * @param {Map<string, string>} codeSystemEnumMap - A map of code system enums used to determine the FHIR types.
 * @returns {HbsElementDefinition[]} An array of parent element definitions mapped to `HbsElementDefinition` objects.
 */
function getParentElementDefinitions(
  structureDef: StructureDefinition,
  codeSystemEnumMap: Map<string, string>,
): HbsElementDefinition[] {
  const elementDefinitions: ElementDefinition[] = structureDef.snapshot?.element ?? [];
  // Filter out the root ElementDefinition and all elements based on Element (i.e., id, extension) and 0..0 cardinality
  const parentElements = elementDefinitions.filter(
    (element: ElementDefinition) =>
      element.path.split('.').length === 2 &&
      element.base &&
      !(
        element.base.path.startsWith('Element.') ||
        element.base.path.startsWith('BackboneType.') ||
        element.base.path.startsWith('BackboneElement.') ||
        element.base.path.startsWith('Resource.') ||
        element.base.path.startsWith('DomainResource.')
      ) &&
      !is0to0Cardinality(element),
  );
  assert(
    parentElements.length > 0,
    `StructureDefinition.snapshot.element is expected to have at least one element in ${structureDef.name}`,
  );

  return parentElements.map((element: ElementDefinition): HbsElementDefinition => {
    return getHbsElementDefinition(element, codeSystemEnumMap);
  });
}

/**
 * Extracts and constructs an array of HbsElementComponentRoot objects from the provided StructureDefinition.
 *
 * @param {StructureDefinition} structureDef - The structure definition containing element information, including paths, types, and definitions.
 * @returns {HbsElementComponentRoot[]} An array of component roots representing the filtered and transformed elements with valid types and cardinalities.
 */
function getHbsElementComponentRoots(structureDef: StructureDefinition): HbsElementComponentRoot[] {
  const elementDefinitions: ElementDefinition[] = structureDef.snapshot?.element ?? [];
  const componentRootElements = elementDefinitions.filter(
    (element: ElementDefinition) =>
      element.path.split('.').length >= 2 &&
      element.type &&
      element.type.length === 1 &&
      (element.type[0]?.code === 'Element' ||
        element.type[0]?.code === 'BackboneType' ||
        element.type[0]?.code === 'BackboneElement') &&
      !is0to0Cardinality(element),
  );

  if (componentRootElements.length === 0) {
    return [] as HbsElementComponentRoot[];
  }

  const hbsElementComponentRoots = [] as HbsElementComponentRoot[];
  componentRootElements.forEach((element: ElementDefinition) => {
    const hbsElementComponentRoot = {
      path: element.path,
      componentName: `${upperFirst(camelCase(element.path))}Component`,
      componentLevel: element.path.split('.').length,
      short: fixDescriptiveString(element.short),
      definition: fixDescriptiveString(element.definition),
      comment: fixDescriptiveString(element.comment),
      requirements: fixDescriptiveString(element.requirements),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      typeCode: element.type![0]!.code,
    } as HbsElementComponentRoot;
    hbsElementComponentRoots.push(hbsElementComponentRoot);
  });

  return hbsElementComponentRoots;
}

/**
 * Generates an array of child element components based on the provided structure definition, code system enum map,
 * and HBS element component roots.
 *
 * @param {StructureDefinition} structureDef - The structure definition used for generating child components.
 * @param {Map<string, string>} codeSystemEnumMap - A map of code systems to their respective enum names.
 * @param {HbsElementComponentRoot[]} hbsElementComponentRoots - Array of root HBS element components.
 * @returns {HbsElementComponent[]} An array of HBS element components derived from the given inputs.
 */
function getChildElementComponents(
  structureDef: StructureDefinition,
  codeSystemEnumMap: Map<string, string>,
  hbsElementComponentRoots: HbsElementComponentRoot[],
): HbsElementComponent[] {
  assert(hbsElementComponentRoots.length > 0, 'hbsElementComponentRoots must be non-empty');

  const hbsElementComponents = [] as HbsElementComponent[];
  hbsElementComponentRoots.forEach((hbsElementComponentRoot: HbsElementComponentRoot) => {
    const componentDefinitionType = upperFirst(camelCase(hbsElementComponentRoot.typeCode));
    const componentElementDefinitions: HbsElementDefinition[] = getChildComponentElementDefinitions(
      hbsElementComponentRoot,
      structureDef,
      codeSystemEnumMap,
    );

    const hasParsableTypes = hasParsableDataType(componentDefinitionType, componentElementDefinitions);
    const hasResourceFields = componentElementDefinitions.some((ed: HbsElementDefinition) => ed.isResourceType);
    const numReqdFields = getNumberOfReqdFields(componentElementDefinitions);
    const numPrimitiveFields = getNumberOfPrimitiveFields(componentElementDefinitions);
    const hasChoiceFields = componentElementDefinitions.some((ed: HbsElementDefinition) => ed.isChoiceType);
    const hasCodeSystemEnums = componentElementDefinitions.some(
      (ed: HbsElementDefinition) => ed.type.codeSystemEnumName !== undefined,
    );

    const elementComponent = {
      parentUrl: structureDef.url,
      parentName: structureDef.name,
      parentType: structureDef.type,
      parentKind: structureDef.kind,
      parentFieldName: hbsElementComponentRoot.path,
      componentName: hbsElementComponentRoot.componentName,
      baseDefinitionType: componentDefinitionType,
      isComponentResource: false,
      isComponentDomainResource: false,
      isComponentBackboneElement: componentDefinitionType === 'BackboneElement',
      isComponentBackboneType: componentDefinitionType === 'BackboneType',
      isComponentDataType: false,
      isComponentElement: componentDefinitionType === 'Element',
      hasParsableDataType: hasParsableTypes,
      rootElement: hbsElementComponentRoot,
      numRequiredFields: numReqdFields,
      hasRequiredFields: numReqdFields > 0,
      hasResourceFields: hasResourceFields,
      hasPrimitiveFields: numPrimitiveFields > 0,
      hasOnlyOnePrimitiveField: numPrimitiveFields === 1,
      hasChoiceFields: hasChoiceFields,
      hasCodeSystemEnums: hasCodeSystemEnums,
      requiredConstructor: numReqdFields > 0 || hasCodeSystemEnums,
      elementDefinitions: componentElementDefinitions,
      fhirCoreImports: [] as string[],
      generatedImports: [] as string[],
    } as HbsElementComponent;

    elementComponent.fhirCoreImports = getFhirCoreImports(elementComponent);
    elementComponent.generatedImports = getGeneratedImports(elementComponent);

    hbsElementComponents.push(elementComponent);
  });

  return hbsElementComponents;
}

/**
 * Extracts and processes a list of child component element definitions from a given structure definition
 * using the root element path and a map of codes representing the code systems.
 *
 * @param {HbsElementComponentRoot} hbsElementComponentRoot - The root component element containing path and base context.
 * @param {StructureDefinition} structureDef - The structure definition from which elements will be extracted.
 * @param {Map<string, string>} codeSystemEnumMap - A map of code systems for handling type definitions and enumerations.
 *
 * @returns {HbsElementDefinition[]} An array of processed element definitions, transformed for use in Handlebars template processing.
 */
function getChildComponentElementDefinitions(
  hbsElementComponentRoot: HbsElementComponentRoot,
  structureDef: StructureDefinition,
  codeSystemEnumMap: Map<string, string>,
): HbsElementDefinition[] {
  const elementDefinitions: ElementDefinition[] = structureDef.snapshot?.element ?? [];
  const componentElementDefinitions = elementDefinitions.filter(
    (element: ElementDefinition) =>
      element.path !== hbsElementComponentRoot.path &&
      element.path.split('.').length === hbsElementComponentRoot.componentLevel + 1 &&
      element.path.startsWith(`${hbsElementComponentRoot.path}.`) &&
      element.base &&
      !(
        element.base.path.startsWith('Element.') ||
        element.base.path.startsWith('BackboneType.') ||
        element.base.path.startsWith('BackboneElement.')
      ) &&
      !is0to0Cardinality(element),
  );
  assert(componentElementDefinitions.length > 0, 'componentElementDefinitions must be non-empty');

  return componentElementDefinitions.map((element: ElementDefinition): HbsElementDefinition => {
    return getHbsElementDefinition(element, codeSystemEnumMap);
  });
}

/**
 * Determines and returns the FHIR type definition for a given element.
 *
 * @param {ElementDefinition} element - The element definition for which the FHIR type needs to be determined. The `type` property of this element must be defined.
 * @param {Map<string, string>} codeSystemEnumMap - A map of element paths to corresponding code system enumeration names, if applicable.
 * @returns {HbsElementDefinitionType} The resolved type information for the FHIR element.type.
 */
function getFhirType(element: ElementDefinition, codeSystemEnumMap: Map<string, string>): HbsElementDefinitionType {
  if (!element.type && element.contentReference) {
    // ElementDefinition is for an element having a "component"/child class that is shared in other "component"/child classes
    return {
      fhirDataType: 'BackboneElement',
      code: `${upperFirst(camelCase(element.contentReference.substring(1)))}Component`,
    } as HbsElementDefinitionType;
  }

  assert(element.type, `ElementDefinition.type is expected to exist for ElementDefinition ${element.path}`);
  const elementTypes: ElementDefinitionType[] = fixPrimitiveElementType(element.type);

  if (elementTypes.length === 1) {
    let dataType: string | undefined;
    let primitiveJsonType: 'boolean' | 'number' | 'string' | undefined;
    let codeSystemEnumName: string | undefined;
    let typeTargetProfile: string[] | undefined;
    let targetResource: string[] | undefined;

    const typeCode = elementTypes[0]?.code;
    assert(typeCode, 'elementTypes[0]?.code must exist');
    if (typeCode === 'Element' || typeCode === 'BackboneElement') {
      dataType = `${upperFirst(camelCase(element.path))}Component`;
    } else {
      dataType = DATA_TYPE_MAPPINGS.get(typeCode);
      assert(dataType, `Unsupported FHIR type: ${typeCode} for ElementDefinition ${element.path}`);

      primitiveJsonType = getPrimitiveJsonType(typeCode);

      if (dataType === 'CodeType' && codeSystemEnumMap.has(element.path)) {
        codeSystemEnumName = codeSystemEnumMap.get(element.path);
        // This CodeSystem is represented by a generated enum; therefore, its data type must be EnumCodeType
        dataType = 'EnumCodeType';
      }

      typeTargetProfile = elementTypes[0]?.targetProfile;
      targetResource = typeTargetProfile?.map((targetUrl: string) => {
        return extractNameFromUrl(targetUrl);
      });
    }

    return {
      fhirDataType: typeCode,
      code: dataType,
      primitiveJsonType: primitiveJsonType,
      codeSystemName: codeSystemEnumName?.replace('Enum', ''),
      codeSystemEnumName: codeSystemEnumName,
      targetProfile: typeTargetProfile,
      targetResource: targetResource,
    } as HbsElementDefinitionType;
  } else {
    // ElementDefinition is for an element having a choice (polymorphic) type
    const choiceTypes: string[] = [];
    const choiceDataTypes: string[] = [];

    elementTypes.forEach((edType: ElementDefinitionType) => {
      choiceTypes.push(edType.code);
      const dataType = DATA_TYPE_MAPPINGS.get(edType.code);
      assert(dataType, `Unsupported FHIR type: ${edType.code} for ElementDefinition ${element.path}`);
      choiceDataTypes.push(dataType);
    });

    return {
      fhirDataType: 'CHOICE',
      code: 'DataType',
      choiceTypes: choiceTypes,
      choiceDataTypes: choiceDataTypes,
    } as HbsElementDefinitionType;
  }
}

/**
 * Generates and returns an array of unique FHIR core imports based on the specified component properties.
 *
 * @param {HbsElementComponent} componentProperties - The properties of the component containing metadata
 *                                                    for generating appropriate FHIR core imports.
 * @returns {string[]} An array of sorted, unique strings representing the necessary FHIR core imports.
 */
function getFhirCoreImports(componentProperties: HbsElementComponent): string[] {
  const BASE_DEFINITION_TYPES = new Set(['DataType', 'BackboneElement', 'BackboneType', 'Element']);

  const importsSet = new Set<string>();

  // Core imports for all data models
  importsSet.add('IBase');
  importsSet.add('INSTANCE_EMPTY_ERROR_MSG');
  importsSet.add('JSON');
  importsSet.add('isDefined');
  importsSet.add('isElementEmpty');
  importsSet.add('isEmpty');
  importsSet.add('assertFhirType');
  importsSet.add('FhirDataTypeParser');

  if (BASE_DEFINITION_TYPES.has(componentProperties.baseDefinitionType)) {
    importsSet.add(componentProperties.baseDefinitionType);
  }

  componentProperties.elementDefinitions.forEach((ed: HbsElementDefinition) => {
    if (ed.isBackboneType) {
      if (ed.isArray) {
        importsSet.add('setFhirBackboneElementListJson');
      } else {
        importsSet.add('setFhirBackboneElementJson');
      }
    }

    if (ed.isRequired) {
      importsSet.add('FhirError');
      importsSet.add('REQUIRED_PROPERTIES_DO_NOT_EXIST');
      importsSet.add('REQUIRED_PROPERTIES_REQD_IN_JSON');
      if (ed.isArray) {
        importsSet.add('isDefinedList');
        importsSet.add('assertIsDefinedList');
      } else {
        importsSet.add('isDefined');
        importsSet.add('assertIsDefined');
      }
    }

    if (ed.type.choiceDataTypes && ed.type.choiceDataTypes.length > 0) {
      importsSet.add('DataType');
      importsSet.add('ChoiceDataTypesMeta');
      importsSet.add('ChoiceDataTypes');
      importsSet.add('InvalidTypeError');
      importsSet.add('setPolymorphicValueJson');
      importsSet.add('assertIsDefined');
      ed.type.choiceDataTypes.forEach((choiceType: string) => {
        if (choiceType.endsWith('Type')) {
          importsSet.add(choiceType);
        }
      });
    }

    if (ed.isEnumCodeType) {
      importsSet.add('fhirCode');
      importsSet.add('fhirCodeSchema');
      importsSet.add('CodeType');
      importsSet.add('EnumCodeType');
      importsSet.add('assertEnumCodeType');
      importsSet.add('parseCodeType');
      importsSet.add('getPrimitiveTypeJson');
      importsSet.add('setFhirPrimitiveJson');
      importsSet.add('parseFhirPrimitiveData');
      if (ed.isRequired) {
        if (ed.isArray) {
          importsSet.add('constructorCodeValueAsEnumCodeTypeList');
        } else {
          importsSet.add('constructorCodeValueAsEnumCodeType');
        }
      }
    }

    if (ed.isPrimitiveType) {
      importsSet.add(ed.type.code);
      importsSet.add('getPrimitiveTypeJson');
      importsSet.add('setFhirPrimitiveJson');
      importsSet.add('parseFhirPrimitiveData');
      importsSet.add(`parse${ed.type.code}`);
      const capPrimitiveType = upperFirst(ed.type.fhirDataType);
      importsSet.add(`fhir${capPrimitiveType}`);
      importsSet.add(`fhir${capPrimitiveType}Schema`);
      if (ed.isRequired) {
        importsSet.add('PrimitiveType');
      }
    }

    if ((ed.isComplexType || ed.isReferenceType) && !ed.isArray) {
      importsSet.add('setFhirComplexJson');
    }

    if (ed.isArray) {
      importsSet.add('copyListValues');
      importsSet.add('isDefinedList');
      importsSet.add('assertFhirTypeList');
      if (ed.isPrimitiveType) {
        importsSet.add('PrimitiveTypeJson');
        importsSet.add('setFhirPrimitiveListJson');
        importsSet.add('getPrimitiveTypeListJson');
      }
      if (ed.isEnumCodeType) {
        importsSet.add('assertEnumCodeTypeList');
        importsSet.add('PrimitiveTypeJson');
        importsSet.add('setFhirPrimitiveListJson');
        importsSet.add('getPrimitiveTypeListJson');
      }
      if (ed.isComplexType || ed.isReferenceType) {
        importsSet.add('setFhirComplexListJson');
      }
    }
  });

  return Array.from(importsSet).sort();
}

/**
 * Generates and returns a list of import statements required for a component based on its properties and element definitions.
 *
 * @param {HbsElementComponent} componentProperties - The properties of the component, which include base definitions,
 *                                                    resource flags, and element definitions.
 * @returns {string[]} An array of unique and sorted import statements necessary for the component.
 */
function getGeneratedImports(componentProperties: HbsElementComponent): string[] {
  const EXCLUDED_TYPES = new Set(['Element', 'BackboneElement', 'BackboneType']);
  const BASE_RESOURCE_TYPES = new Set(['Resource', 'DomainResource']);

  const importsSet = new Set<string>();

  importsSet.add('PARSABLE_DATATYPE_MAP');

  if (BASE_RESOURCE_TYPES.has(componentProperties.baseDefinitionType)) {
    importsSet.add(componentProperties.baseDefinitionType);
  }

  if (componentProperties.isComponentResource || componentProperties.isComponentDomainResource) {
    importsSet.add('FhirResourceParser');
    importsSet.add('FhirResourceType');
  }

  componentProperties.elementDefinitions.forEach((ed: HbsElementDefinition) => {
    if (ed.type.choiceDataTypes && ed.type.choiceDataTypes.length > 0) {
      ed.type.choiceDataTypes.forEach((choiceType: string) => {
        if (!choiceType.endsWith('Type')) {
          importsSet.add(choiceType);
        }
      });
    }

    if (ed.isComplexType || ed.isReferenceType) {
      if (DATA_TYPE_MAPPINGS.has(ed.type.code)) {
        importsSet.add(ed.type.code);
      }
    }

    if (ed.isReferenceType) {
      importsSet.add('ReferenceTargets');
    }

    if (ed.isResourceType) {
      importsSet.add('assertFhirResourceType');
      importsSet.add('setFhirResourceJson');
    }

    if (ed.type.codeSystemEnumName) {
      importsSet.add(ed.type.codeSystemEnumName);
    }
  });

  // Remove excluded types
  EXCLUDED_TYPES.forEach((type) => importsSet.delete(type));

  return Array.from(importsSet).sort();
}

//region Handlebars Helper Functions

/**
 * Constructs a string representation of required constructor parameters based on the provided element definitions.
 *
 * @param {HbsElementDefinition[]} elementDefinitions - An array of element definitions that describe the fields.
 * @returns {string} A comma-separated string of required constructor parameter definitions, or an empty string if no parameters are required.
 */
export function getRequiredConstructorParams(elementDefinitions: HbsElementDefinition[]): string {
  const requiredElementDefinitions = elementDefinitions.filter((ed) => ed.isRequired);
  if (requiredElementDefinitions.length === 0) {
    return '';
  }

  const requiredConstructorParams = [] as string[];
  requiredElementDefinitions.forEach((ed) => {
    const fieldIdentifierName = ed.fieldIdentifierName;
    const fieldDataType = ed.isArray
      ? ed.type.code === 'EnumCodeType'
        ? `${ed.type.code}[] | CodeType[]`
        : `${ed.type.code}[]`
      : ed.type.code === 'EnumCodeType'
        ? `${ed.type.code} | CodeType`
        : ed.type.code;
    const primitiveDataType = ` | fhir${upperFirst(ed.type.fhirDataType)}`;
    const primitiveType = ed.isPrimitiveType ? (ed.isArray ? `${primitiveDataType}[]` : primitiveDataType) : undefined;
    const paramStr = `${fieldIdentifierName}: ${fieldDataType}${primitiveType ?? ''} | null = null`;
    requiredConstructorParams.push(paramStr);
  });

  return requiredConstructorParams.join(', ');
}

//endregion

//region Common Utilities
/**
 * Processes a given string to remove line breaks, substitute Unicode characters, fix FHIR hyperlinks,
 * and escape single quotes, returning the modified string.
 *
 * @param {string | undefined} sourceStr - The input string to process. Can be undefined.
 * @returns {string | undefined} The processed string with modifications applied, or undefined if the input was undefined.
 */
export function fixDescriptiveString(sourceStr: string | undefined): string | undefined {
  if (sourceStr === undefined) {
    return undefined;
  }
  return fixFhirHyperLinks(substituteUnicodeCharacters(stripLineBreaks(sourceStr))).replace(/'/g, `\\'`);
}

/**
 * Calculates the number of required fields within a given list of `HbsElementDefinition` objects.
 *
 * @param {HbsElementDefinition[]} hbsEd - An array of `HbsElementDefinition` objects to be checked for required fields.
 * @returns {number} The count of required fields within the provided array.
 */
export function getNumberOfReqdFields(hbsEd: HbsElementDefinition[]): number {
  let numReqdFields = 0;
  hbsEd.forEach((ed) => {
    if (ed.isRequired) {
      numReqdFields++;
    }
  });
  return numReqdFields;
}

/**
 * Calculates the number of primitive and enum code fields in a provided array of HbsElementDefinition objects.
 *
 * @param {HbsElementDefinition[]} hbsEd - An array of HbsElementDefinition objects to evaluate.
 * @returns {number} The count of fields that are classified as primitive or enum code types.
 */
export function getNumberOfPrimitiveFields(hbsEd: HbsElementDefinition[]): number {
  let numPrivateFields = 0;
  hbsEd.forEach((ed: HbsElementDefinition) => {
    // Used in HbsElementComponent.hasPrimitiveFields and HbsElementComponent.hasOnlyOnePrimitiveField
    // where these values are used in "Public Static Parse Method Partial Template" managing the
    // `primitiveJsonType` variable in the `parse()` method. The EnumCodeType value is parsed as
    // a primitive 'code' data type; therefore, for this use case, EnumCodeType must be counted as
    // a primitive data type.
    if (ed.isPrimitiveType || ed.isEnumCodeType) {
      numPrivateFields++;
    }
  });
  return numPrivateFields;
}

/**
 * Determines whether a given component definition type or HbsElementDefinition array
 * contains parsable data types based on specific conditions.
 *
 * @param {string} componentDefinitionType - The type of the component definition (e.g., 'BackboneElement', 'BackboneType', 'Element').
 * @param {HbsElementDefinition[]} hbsEd - An array of HbsElementDefinition objects to check for specific types.
 * @returns {boolean} - Returns true if the component definition type or the HbsElementDefinition array
 *                     contains parsable types, otherwise false.
 */
export function hasParsableDataType(componentDefinitionType: string, hbsEd: HbsElementDefinition[]): boolean {
  const hasParsableBase =
    componentDefinitionType === 'DataType' ||
    componentDefinitionType === 'BackboneElement' ||
    componentDefinitionType === 'BackboneType' ||
    componentDefinitionType === 'Element';
  const hasParsableTypes = hbsEd.some((ed) => ed.isChoiceType || ed.isComplexType || ed.isReferenceType);
  return hasParsableBase || hasParsableTypes;
}

/**
 * Determines if an element is required based on its definition.
 *
 * @param {ElementDefinition} element - The element definition object containing properties such as `min` and `max`.
 * @returns {boolean} Returns true if the element is required; otherwise, false.
 */
export function isRequired(element: ElementDefinition): boolean {
  return isNil(element.min) ? false : element.min > 0;
}

/**
 * Determines whether the cardinality of the provided element indicates an array.
 * This is based on the `max` property of the element, checking if it allows multiple entries.
 *
 * @param {ElementDefinition} element - The element definition to check for array cardinality.
 * @returns {boolean} - Returns true if the element has array cardinality, false otherwise.
 */
export function isArrayCardinality(element: ElementDefinition): boolean {
  let isArrayCard = !!(
    element.max &&
    (element.max === '*' || (!isNaN(parseInt(element.max, 10)) && parseInt(element.max, 10) > 1))
  );
  if (typeof element.base !== 'undefined') {
    isArrayCard = isArrayCardinality(element.base);
  }
  return isArrayCard;
}

/**
 * Determines whether the given element has a cardinality of 0..0,
 * which means it is not expected to have any occurrences.
 *
 * @param {ElementDefinition} element - The element definition to check, typically containing `min` and `max` properties.
 * @returns {boolean} Returns true if the element's cardinality is 0..0; otherwise, false.
 */
export function is0to0Cardinality(element: ElementDefinition): boolean {
  return !isNil(element.min) && element.min === 0 && !isEmpty(element.max) && element.max === '0';
}

/**
 * Modifies an `ElementDefinitionType` to fix specific primitive type inconsistencies
 * observed in certain FHIR StructureDefinitions. For instances where
 * FHIRPath's `System.String` is used in the `code`, it changes it to the primitive `string`.
 *
 * @param {ElementDefinitionType[]} type - The element definition type object that potentially contains
 *        a type code needing correction.
 * @returns {ElementDefinitionType[]} The updated element definition type object with corrected type code if applicable.
 */
export function fixPrimitiveElementType(type: ElementDefinitionType[]): ElementDefinitionType[] {
  // In various FHIR StructureDefinitions, a 'string' data type is defined as an Extension:
  //   "type": [{
  //     "extension": [{
  //       "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
  //       "valueUrl": "string"
  //     }],
  //     "code": "http://hl7.org/fhirpath/System.String"
  //   }],
  // In this case, change the code to the primitive 'string'.
  // This is typically but not exclusively used for ElementDefinition.id data types.
  // NOTE: https://hl7.org/fhir/r4/fhirpath.html#types
  // - Except for 'System.String', these FHIRPath types are used in
  //   some of the primitive data type StructureDefinitions. There is no need to
  //   deal with those since primitive "data models" are not generated code.
  const clonedType: ElementDefinitionType[] = cloneDeep(type);
  return clonedType.map((edt: ElementDefinitionType) => {
    if (
      edt.extension &&
      edt.extension.length === 1 &&
      edt.extension[0]?.url === 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type' &&
      edt.extension[0].valueUrl &&
      DATA_TYPES.includes(edt.extension[0].valueUrl)
    ) {
      edt.code = edt.extension[0].valueUrl;
    } else if (edt.code === 'http://hl7.org/fhirpath/System.String') {
      edt.code = 'string';
    }
    return edt;
  });
}

/**
 * Extracts field names and their corresponding identifier names from an element definition.
 *
 * @param {ElementDefinition} element - The element definition object containing a `path` property.
 * @returns {{ fieldName: string; fieldIdentifierName: string } | undefined} An object containing the extracted field name and field identifier name,
 * or `undefined` if the path contains only a single part.
 */
export function getFieldNames(
  element: ElementDefinition,
): { fieldName: string; fieldIdentifierName: string } | undefined {
  const pathParts = element.path.split('.');
  if (pathParts.length === 1) {
    return undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  let fieldName = pathParts[pathParts.length - 1]!;
  if (fieldName.endsWith('[x]') || fieldName.endsWith('[X]')) {
    fieldName = fieldName.substring(0, fieldName.length - 3);
  }
  let fieldIdentifierName = TS_RESERVED_WORDS_SET.has(fieldName) ? `${fieldName}_` : fieldName;

  // Anomalies in FHIR specifications where the field name duplicates a generated field method name
  // Override these name anomalies
  if (element.path === 'ClaimResponse.addItem') {
    fieldIdentifierName = `addItem_`;
  }
  if (element.path === 'ExplanationOfBenefit.addItem') {
    fieldIdentifierName = `addItem_`;
  }

  return { fieldName, fieldIdentifierName };
}

/**
 * Determines the base definition type for a given StructureDefinition.
 *
 * @param {StructureDefinition} structureDef - The StructureDefinition object for which the base definition type is calculated. It is expected to have a `kind` property with a value of either "complex-type" or "resource" and a `baseDefinition` property that defines the base definition.
 * @returns {string} The resolved base definition type. For example, it could be "DataType", "BackboneType", "Resource", or "DomainResource" depending on the provided `structureDef`.
 */
export function getBaseDefinitionType(structureDef: StructureDefinition): string {
  assert(
    ['complex-type', 'resource'].includes(structureDef.kind),
    `StructureDefinition.kind is expected to be one of [complex-type, resource]; Unexpected StructureDefinition.kind: ${structureDef.kind}`,
  );
  assert(structureDef.baseDefinition, 'StructureDefinition.baseDefinition is expected to be defined');
  const baseDefinitionParts: string[] = structureDef.baseDefinition.split('/');
  assert(baseDefinitionParts.length > 0, 'StructureDefinition.baseDefinition is expected to have at least one part');
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const baseDefinition = baseDefinitionParts.slice(-1)[0]!;

  let baseDefinitionType: string;
  if (structureDef.kind === 'complex-type') {
    if (baseDefinition === 'Element') {
      baseDefinitionType = 'DataType';
    } else if (baseDefinition === 'BackboneElement') {
      // BackboneElement used in R4 and R4B FHIR releases
      // For purposes of consistency in the data models, we use BackboneType for these.
      // The result (adding the 'modifierExtension' field) is the same.
      baseDefinitionType = 'BackboneType';
    } else if (baseDefinition === 'BackboneType') {
      // R5 and the following FHIR releases
      baseDefinitionType = 'BackboneType';
    } else {
      // Some complex types extend other complex types such as Quantity so set to 'DataType'
      baseDefinitionType = 'DataType';
    }
  } else {
    // Should be either Resource or DomainResource
    assert(
      baseDefinition === 'Resource' || baseDefinition === 'DomainResource',
      `baseDefinition is expected to be one of [Resource, DomainResource]; Unexpected baseDefinition: ${baseDefinition}`,
    );
    baseDefinitionType = baseDefinition;
  }

  return baseDefinitionType;
}

//endregion
