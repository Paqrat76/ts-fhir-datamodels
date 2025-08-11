// noinspection JSValidateJSDoc

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
import { camelCase, cloneDeep, isEmpty, isNil, snakeCase, upperFirst } from 'lodash';
import { ElementDefinition, ElementDefinitionType, StructureDefinition } from '../fhir-artifact-interfaces';
import { DATA_TYPE_MAPPINGS, DATA_TYPES, FhirDataType } from '../fhir-data-type';
import { FhirPackage } from '../ts-datamodel-generator-helpers';

export interface HbsElementComponentRoot {
  path: string;
  componentName: string;
  componentLevel: number;
  typeCode: string;
  short?: string;
  definition?: string;
  comment?: string;
  requirements?: string;
}

export interface HbsElementDefinitionType {
  fhirDataType: string;
  code: string;
  primitiveJsonType?: 'boolean' | 'number' | 'string';
  choiceTypes?: string[];
  choiceDataTypes?: string[];
  codeSystemName?: string;
  codeSystemEnumName?: string;
  isDupeCodeSystemName: boolean;
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
  parentIstanbulIgnore?: boolean;
  componentName: string;
  baseDefinitionType: string;
  isBaseDefinitionElement: boolean;
  isComponentResource: boolean;
  isComponentDomainResource: boolean;
  isComponentBackboneElement: boolean;
  isComponentBackboneType: boolean;
  isComponentDataType: boolean;
  isComponentElement: boolean;
  hasParsableDataType: boolean;
  hasParsableResource: boolean;
  rootElement: HbsElementComponentRoot;
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
  isExtension: boolean;
  baseDefinitionType: string;
  description: string;
  purpose?: string;
  fhirVersion: string;
  parentComponent: HbsElementComponent;
  hasChildComponents: boolean;
  childComponents?: HbsElementComponent[];
  hasSymbolMetadata: boolean;
  istanbulIgnore: boolean;
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
  codeSystemEnumMap: ReadonlyMap<string, string>,
  fhirPackage: FhirPackage,
): HbsStructureDefinition {
  const baseDefinitionType = getBaseDefinitionType(structureDef);
  const parentComponent = getParentElementComponent(structureDef, codeSystemEnumMap);

  const hbsElementComponentRoots = getHbsElementComponentRoots(structureDef);

  let hasChildChoiceFields = false;
  let childComponents: HbsElementComponent[] | undefined = undefined;
  if (hbsElementComponentRoots.length > 0) {
    childComponents = getChildElementComponents(structureDef, codeSystemEnumMap, hbsElementComponentRoots);
    hasChildChoiceFields = childComponents.some((component: HbsElementComponent) => component.hasChoiceFields);
  }

  const hasSymbolMetadata = parentComponent.hasChoiceFields || hasChildChoiceFields;

  // All complex data type models are collected in a single file to mitigate circular references.
  // Jest coverage exclusions are only at the file level. Functional testing requirements for complex types
  // are limited to only the `Timing` complex type. Selected complex types in the @paq-ts-fhir/fhir-core library
  // already fully tested, so 'Timing' was selected due to its unique definition. The `istanbulIgnore` and
  // `parentIstanbulIgnore` boolean values are used by the templates to insert "/* istanbul ignore next */" above
  // the class declaration to exclude these types from functional testing. It will only be set to `true` if and
  // only if the FhirPackage has its `isFunctionalTest` element set to true.
  let istanbulIgnore = false;
  if (fhirPackage.isFunctionalTest && structureDef.kind === 'complex-type' && structureDef.type !== 'Timing') {
    istanbulIgnore = true;
    parentComponent.parentIstanbulIgnore = true;
    if (childComponents) {
      childComponents.forEach((component: HbsElementComponent) => (component.parentIstanbulIgnore = true));
    }
  }

  const sdHbsProperties = {
    url: structureDef.url,
    name: structureDef.name,
    type: structureDef.type,
    kind: structureDef.kind,
    isExtension: structureDef.type === 'Extension',
    baseDefinitionType: baseDefinitionType,
    description: fixDescriptiveString(structureDef.description) ?? 'description not provided',
    purpose: fixDescriptiveString(structureDef.purpose),
    fhirVersion: structureDef.fhirVersion ?? fhirPackage.pkgVersion,
    parentComponent: parentComponent,
    hasChildComponents: !isEmpty(childComponents),
    childComponents: childComponents,
    hasSymbolMetadata: hasSymbolMetadata,
    istanbulIgnore: istanbulIgnore,
    fhirCoreImports: [] as string[],
    generatedImports: [] as string[],
  } as HbsStructureDefinition;

  let fhirCoreImportsSet = new Set<string>(parentComponent.fhirCoreImports);
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

  const complexTypeImports = Array.from(generatedImportsSet).filter(
    (generatedImport: string) => !generatedImport.startsWith('import'),
  );
  // Remove the individual complex type values from generatedImportsSet
  const generatedImports = Array.from(generatedImportsSet);
  generatedImports.forEach((generatedImport: string) => {
    if (complexTypeImports.includes(generatedImport)) {
      generatedImportsSet.delete(generatedImport);
    }
  });
  // Add the single import statement for complex data types into generatedImportsSet
  const complexTypeImportStatement = `import { ${complexTypeImports.sort().join(', ')} } from '../complex-types/complex-datatypes'`;
  generatedImportsSet.add(complexTypeImportStatement);

  if (structureDef.kind === 'resource') {
    const generatedImports = Array.from(generatedImportsSet);
    generatedImports.forEach((generatedImport: string) => {
      if (generatedImport.includes('../resources/')) {
        generatedImportsSet.delete(generatedImport);
        generatedImportsSet.add(generatedImport.replace('../resources/', './'));
      }
    });
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
  codeSystemEnumMap: ReadonlyMap<string, string>,
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
  const isPrimitiveType =
    isChoice || isBackboneType || isEnumCodeType ? false : isPrimitiveDataType(type.fhirDataType as FhirDataType);
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
  codeSystemEnumMap: ReadonlyMap<string, string>,
): HbsElementComponent {
  const baseDefinitionType = getBaseDefinitionType(structureDef);

  const rootElement = {
    path: structureDef.type,
    componentName: structureDef.type,
    componentLevel: 1,
    typeCode: structureDef.type,
    short: fixDescriptiveString(structureDef.snapshot?.element[0]?.short),
    definition: fixDescriptiveString(structureDef.snapshot?.element[0]?.definition),
    comment: fixDescriptiveString(structureDef.snapshot?.element[0]?.comment),
    requirements: fixDescriptiveString(structureDef.snapshot?.element[0]?.requirements),
  } as HbsElementComponentRoot;

  const parentElementDefinitions: HbsElementDefinition[] = getParentElementDefinitions(structureDef, codeSystemEnumMap);

  const hasParsableTypes = hasParsableDataType(baseDefinitionType, parentElementDefinitions);
  const hasParsableResources = hasParsableResource(baseDefinitionType, parentElementDefinitions);
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
    parentIstanbulIgnore: false,
    componentName: structureDef.type,
    baseDefinitionType: baseDefinitionType,
    isBaseDefinitionElement: false,
    isComponentResource: baseDefinitionType === 'Resource',
    isComponentDomainResource: baseDefinitionType === 'DomainResource',
    isComponentBackboneElement: false,
    isComponentBackboneType: baseDefinitionType === 'BackboneType',
    isComponentDataType: baseDefinitionType === 'DataType',
    isComponentElement: false,
    hasParsableDataType: hasParsableTypes,
    hasParsableResource: hasParsableResources,
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
  codeSystemEnumMap: ReadonlyMap<string, string>,
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

  const parentHbsElementDefinitions: HbsElementDefinition[] = parentElements.map(
    (element: ElementDefinition): HbsElementDefinition => {
      return getHbsElementDefinition(element, codeSystemEnumMap);
    },
  );
  fixDuplicateCodeSystemEnums(parentHbsElementDefinitions);

  return parentHbsElementDefinitions;
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      typeCode: element.type![0]!.code,
      short: fixDescriptiveString(element.short),
      definition: fixDescriptiveString(element.definition),
      comment: fixDescriptiveString(element.comment),
      requirements: fixDescriptiveString(element.requirements),
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
  codeSystemEnumMap: ReadonlyMap<string, string>,
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
    const hasParsableResources = hasParsableResource(componentDefinitionType, componentElementDefinitions);
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
      parentIstanbulIgnore: false,
      componentName: hbsElementComponentRoot.componentName,
      baseDefinitionType: componentDefinitionType === 'Element' ? 'DataType' : componentDefinitionType,
      isBaseDefinitionElement: componentDefinitionType === 'Element',
      isComponentResource: false,
      isComponentDomainResource: false,
      isComponentBackboneElement: componentDefinitionType === 'BackboneElement',
      isComponentBackboneType: componentDefinitionType === 'BackboneType',
      isComponentDataType: false,
      isComponentElement: componentDefinitionType === 'Element',
      hasParsableDataType: hasParsableTypes,
      hasParsableResource: hasParsableResources,
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
  codeSystemEnumMap: ReadonlyMap<string, string>,
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

  const childHbsElementDefinitions: HbsElementDefinition[] = componentElementDefinitions.map(
    (element: ElementDefinition): HbsElementDefinition => {
      return getHbsElementDefinition(element, codeSystemEnumMap);
    },
  );
  fixDuplicateCodeSystemEnums(childHbsElementDefinitions);

  return childHbsElementDefinitions;
}

/**
 * Determines and returns the FHIR type definition for a given element.
 *
 * @param {ElementDefinition} element - The element definition for which the FHIR type needs to be determined. The `type` property of this element must be defined.
 * @param {Map<string, string>} codeSystemEnumMap - A map of element paths to corresponding code system enumeration names, if applicable.
 * @returns {HbsElementDefinitionType} The resolved type information for the FHIR element.type.
 */
function getFhirType(
  element: ElementDefinition,
  codeSystemEnumMap: ReadonlyMap<string, string>,
): HbsElementDefinitionType {
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
      dataType = DATA_TYPE_MAPPINGS.get(typeCode as FhirDataType);
      assert(dataType, `Unsupported FHIR type: ${typeCode} for ElementDefinition ${element.path}`);

      primitiveJsonType = getPrimitiveJsonType(typeCode as FhirDataType);

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
      isDupeCodeSystemName: false, // Default to false; override if necessary in fixDuplicateCodeSystemEnums()
      targetProfile: typeTargetProfile,
      targetResource: targetResource,
    } as HbsElementDefinitionType;
  } else {
    // ElementDefinition is for an element having a choice (polymorphic) type
    const choiceTypes: string[] = [];
    const choiceDataTypes: string[] = [];

    elementTypes.forEach((edType: ElementDefinitionType) => {
      choiceTypes.push(edType.code);
      const dataType = DATA_TYPE_MAPPINGS.get(edType.code as FhirDataType);
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
 * Identifies and fixes duplicate code system names within the provided HbsElementDefinition objects.
 * It marks all but the first occurrence of a duplicate HbsElementDefinitionType.codeSystemName as a duplicate
 * by setting the isDupeCodeSystemName property to true.
 *
 * @param {HbsElementDefinition[]} hbsElementDefinitions - An array of HbsElementDefinition objects to process.
 * Each element may contain a type with a codeSystemName field that is checked for duplicates.
 */
function fixDuplicateCodeSystemEnums(hbsElementDefinitions: HbsElementDefinition[]): void {
  // There are rare cases where more than one field has an EnumCodeType using the same Enum class resulting in
  // duplicate declarations. To prevent this, we can look for duplicate HbsElementDefinitionType.codeSystemName
  // values and set all except the first isDupeCodeSystemName to true. Refer to constructor-required.hbs and
  // private-field-declaration.hbs for how the HbsElementDefinitionType.codeSystemName is used.
  hbsElementDefinitions.forEach((hbsElementDefinition: HbsElementDefinition) => {
    const duplicateEnumCodeTypes = hbsElementDefinitions.filter(
      (ed: HbsElementDefinition) =>
        ed.type.codeSystemName !== undefined && ed.type.codeSystemName === hbsElementDefinition.type.codeSystemName,
    );
    if (duplicateEnumCodeTypes.length > 1) {
      // Keep duplicateEnumCodeTypes[0].type.isDupeCodeSystemName as false and set the
      // remaining duplicateEnumCodeTypes[i].type.isDupeCodeSystemNames to true
      for (let i = 1; i < duplicateEnumCodeTypes.length; i++) {
        if (duplicateEnumCodeTypes[i]?.type.codeSystemName) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          duplicateEnumCodeTypes[i]!.type.isDupeCodeSystemName = true;
        }
      }
    }
  });
}

/**
 * Generates and returns an array of unique FHIR core imports based on the specified component properties.
 *
 * @param {HbsElementComponent} componentProperties - The properties of the component containing metadata
 *                                                    for generating appropriate FHIR core imports.
 * @returns {string[]} An array of sorted, unique strings representing the necessary FHIR core imports.
 */
function getFhirCoreImports(componentProperties: HbsElementComponent): string[] {
  const BASE_DEFINITION_TYPES = new Set<string>([
    'BackboneElement',
    'BackboneType',
    'DataType',
    'DomainResource',
    'Element',
    'Resource',
  ]);

  const importsSet = new Set<string>();
  // Core imports for all data models
  importsSet.add('JSON');
  importsSet.add('assertFhirType');
  importsSet.add('isDefined');
  importsSet.add('isElementEmpty');

  if (componentProperties.parentType === 'Extension') {
    importsSet.add('Extension as CoreExtension');
  } else {
    // Extension does not implement static parse()
    importsSet.add('INSTANCE_EMPTY_ERROR_MSG');
    importsSet.add('isEmpty');
    importsSet.add('FhirParser');
  }

  if (componentProperties.isComponentDataType) {
    const dataTypeInterface = getComplexTypeImplements(
      componentProperties.parentType,
      componentProperties.baseDefinitionType,
    );
    importsSet.add(dataTypeInterface);
  }

  if (BASE_DEFINITION_TYPES.has(componentProperties.baseDefinitionType)) {
    importsSet.add(componentProperties.baseDefinitionType);
    if (componentProperties.baseDefinitionType !== 'DataType') {
      importsSet.add(`I${componentProperties.baseDefinitionType}`);
    }
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
      if (componentProperties.parentType !== 'Extension') {
        importsSet.add('REQUIRED_PROPERTIES_REQD_IN_JSON');
      }
      if (ed.isArray) {
        importsSet.add('isDefinedList');
        importsSet.add('assertIsDefinedList');
      } else {
        importsSet.add('isDefined');
        importsSet.add('assertIsDefined');
      }
    }

    if (ed.type.choiceDataTypes && ed.type.choiceDataTypes.length > 0) {
      importsSet.add('IDataType');
      importsSet.add('ChoiceDataTypesMeta');
      importsSet.add('ChoiceDataTypes');
      importsSet.add('InvalidTypeError');
      importsSet.add('setPolymorphicValueJson');
      importsSet.add('assertIsDefined');
      ed.type.choiceDataTypes.forEach((choiceType: string) => {
        // Add choice primitive data types
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
      if (componentProperties.parentType !== 'Extension') {
        importsSet.add('getPrimitiveTypeJson');
      }
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
      if (componentProperties.parentType !== 'Extension') {
        importsSet.add('getPrimitiveTypeJson');
      }
      importsSet.add('setFhirPrimitiveJson');
      importsSet.add('parseFhirPrimitiveData');
      const capPrimitiveType = upperFirst(ed.type.fhirDataType);
      importsSet.add(`fhir${capPrimitiveType}`);
      importsSet.add(`fhir${capPrimitiveType}Schema`);
      if (ed.isRequired) {
        importsSet.add('PrimitiveType');
      }
    }

    if (ed.isReferenceType) {
      importsSet.add('ReferenceTargets');
    }

    if ((ed.isComplexType || ed.isReferenceType) && !ed.isArray) {
      importsSet.add('setFhirComplexJson');
    }

    if (ed.isResourceType) {
      importsSet.add('IResource');
      importsSet.add('assertFhirResourceType');
      importsSet.add('setFhirResourceJson');
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
  const importsSet = new Set<string>();

  if (componentProperties.parentType !== 'Extension') {
    // importsSet.add(`import { PARSABLE_DATATYPE_MAP } from '../complex-types/complex-datatypes'`);
    importsSet.add(`PARSABLE_DATATYPE_MAP`);
    importsSet.add(`import { PARSABLE_RESOURCE_MAP } from '../resources/parsable-resource-map'`);
  }

  componentProperties.elementDefinitions.forEach((ed: HbsElementDefinition) => {
    if (ed.type.choiceDataTypes && ed.type.choiceDataTypes.length > 0) {
      ed.type.choiceDataTypes.forEach((choiceType: string) => {
        if (!choiceType.endsWith('Type')) {
          // Ignore primitive types; they are handled in getFhirCoreImports()
          // importsSet.add(`import { ${choiceType} } from '../complex-types/${choiceType}'`);
          importsSet.add(choiceType);
        }
      });
    }

    if ((ed.isComplexType || ed.isReferenceType) && !ed.type.code.endsWith('Component')) {
      //importsSet.add(`import { ${ed.type.code} } from '../complex-types/${ed.type.code}'`);
      importsSet.add(ed.type.code);
    }

    if (ed.isResourceType) {
      if (ed.type.code !== 'Resource') {
        importsSet.add(`import { ${ed.type.code} } from '../resources/${ed.type.code}'`);
      }
    }

    if (ed.type.codeSystemEnumName) {
      importsSet.add(`import { ${ed.type.codeSystemEnumName} } from '../code-systems/${ed.type.codeSystemEnumName}'`);
    }
  });

  return importsSet.size > 0 ? Array.from(importsSet).sort() : ([] as string[]);
}

//region Handlebars Helper Functions

/**
 * Constructs a string representation of required constructor parameters based on the provided element definitions.
 *
 * @param {HbsElementDefinition[]} elementDefinitions - An array of element definitions that describe the fields.
 * @returns {string} A comma-separated string of required constructor parameter definitions, or an empty string if no parameters are required.
 */
export function getRequiredConstructorParams(elementDefinitions: HbsElementDefinition[]): string {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (elementDefinitions === null || elementDefinitions === undefined || elementDefinitions.length === 0) {
    return '';
  }
  const requiredElementDefinitions = elementDefinitions.filter((ed) => ed.isRequired);
  if (requiredElementDefinitions.length === 0) {
    return '';
  }

  const requiredConstructorParams = [] as string[];
  requiredElementDefinitions.forEach((ed) => {
    const fieldIdentifierName = ed.fieldIdentifierName;
    let fieldDataType: string;
    if (ed.type.code === 'EnumCodeType') {
      fieldDataType = ed.isArray
        ? `${ed.type.code}[] | CodeType[] | fhir${upperFirst(ed.type.fhirDataType)}[]`
        : `${ed.type.code} | CodeType | fhir${upperFirst(ed.type.fhirDataType)}`;
    } else if (ed.type.code === 'DataType') {
      fieldDataType = ed.isArray ? `IDataType[]` : `IDataType`;
    } else {
      fieldDataType = ed.isArray ? `${ed.type.code}[]` : ed.type.code;
    }

    const primitiveDataType = ` | fhir${upperFirst(ed.type.fhirDataType)}`;
    const primitiveType = ed.isPrimitiveType ? (ed.isArray ? `${primitiveDataType}[]` : primitiveDataType) : undefined;

    const paramStr = `${fieldIdentifierName}: ${fieldDataType}${primitiveType ?? ''} | null = null`;
    requiredConstructorParams.push(paramStr);
  });

  return requiredConstructorParams.join(', ');
}

/**
 * Determines and returns the implemented interface for a given complex type based on the structure definition provided.
 *
 * @param {string} sdType - The structure definition `type` that describes the type of the complex structure.
 * @param {string} baseDefinitionType - The structure definition `baseDefinition` type that describes
 *                                      the baseDefinition of the complex structure.
 * @returns {string} The name of the interface that the complex type implements.
 */
export function getComplexTypeImplements(sdType: string, baseDefinitionType: string): string {
  if (baseDefinitionType === 'BackboneElement' || baseDefinitionType === 'BackboneType') {
    return `I${baseDefinitionType}`;
  }

  switch (sdType) {
    case 'Element':
      return 'IDataType';
    default:
      return 'IDataType';
  }
}

/**
 * Retrieves the data type of a field based on the provided type code.
 * Converts specific type codes (e.g., 'Resource') to their corresponding data type strings.
 *
 * @param {string} typeCode - The type code representing a specific field.
 * @returns {string} The corresponding data type of the field. Returns 'IResource' if the type code is 'Resource',
 *                   otherwise returns the provided type code.
 */
export function getFieldDataType(typeCode: string): string {
  if (typeCode === 'Resource') {
    return 'IResource';
  } else {
    return typeCode;
  }
}

/**
 * Retrieves a string representing static parse keywords based on the provided flags
 * indicating whether the resource is a resource or a domain resource.
 *
 * @param {boolean} isComponentResource - Determines if the resource is a component resource.
 * @param {boolean} isComponentDomainResource - Determines if the resource is a component domain resource.
 * @returns {string} Returns 'static override' if either `isComponentResource` or `isComponentDomainResource` is true, otherwise returns 'static'.
 */
export function getStaticParseKeywords(isComponentResource: boolean, isComponentDomainResource: boolean): string {
  if (isComponentResource || isComponentDomainResource) {
    return 'static override';
  } else {
    return 'static';
  }
}

/**
 * Determines the appropriate cast interface string based on the element definition's type.
 *
 * @param {HbsElementDefinition} elementDefinition - The definition of the element used to determine its cast type.
 * @returns {string} The cast interface as a string, such as ' as IDataType', ' as IResource', or an empty string if no cast is needed.
 */
export function getCastInterface(elementDefinition: HbsElementDefinition): string {
  if (elementDefinition.isChoiceType) {
    return ' as IDataType';
  } else if (elementDefinition.isResourceType) {
    return ' as IResource';
  } else {
    return '';
  }
}

//endregion

//region Common Utilities

// noinspection SpellCheckingInspection
/**
 * UnicodeSubstitutions is a collection of objects that map specific Unicode characters
 * to their corresponding regex patterns and replacement values. This object can be used
 * to replace or normalize Unicode characters with standardized equivalents in strings.
 *
 * @remarks
 * Some of these punctuation Unicode characters exist in various FHIR definition
 * strings (e.g., descriptions, comments, etc.) and so must be replaced with
 * appropriate ASCII substitutions to prevent various rendering issues in generated
 * code.
 *
 * Each property is a constant variable name representing a specific Unicode character,
 * containing the following keys:
 * - `unicodeRegex`: A regular expression matching the Unicode character(s) to be replaced.
 * - `replacement`: The string value to substitute for the matched Unicode character(s).
 *
 * Example use cases include text normalization, sanitization of strings, and ensuring
 * consistent representation of typographical or special characters.
 */
const UnicodeSubstitutions = {
  HYPHEN: { unicodeRegex: /\u2010/g, replacement: `-` },
  NON_BREAKING_HYPHEN: { unicodeRegex: /\u2011/g, replacement: `-` },
  FIGURE_DASH: { unicodeRegex: /\u2012/g, replacement: `-` },
  EN_DASH: { unicodeRegex: /\u2013/g, replacement: `-` },
  EM_DASH: { unicodeRegex: /\u2014/g, replacement: `-` },
  HORIZONTAL_BAR: { unicodeRegex: /\u2015/g, replacement: `-` },
  DOUBLE_VERTICAL_LINE: { unicodeRegex: /\u2016/g, replacement: `||` },
  LEFT_SINGLE_QUOTATION_MARK: { unicodeRegex: /\u2018/g, replacement: `'` },
  RIGHT_SINGLE_QUOTATION_MARK: { unicodeRegex: /\u2019/g, replacement: `'` },
  SINGLE_HIGH_REVERSED9_QUOTATION_MARK: { unicodeRegex: /\u201A/g, replacement: `'` },
  LEFT_DOUBLE_QUOTATION_MARK: { unicodeRegex: /\u201C/g, replacement: `"` },
  RIGHT_DOUBLE_QUOTATION_MARK: { unicodeRegex: /\u201D/g, replacement: `"` },
  DOUBLE_HIGH_REVERSED9_QUOTATION_MARK: { unicodeRegex: /\u201F/g, replacement: `"` },
  BULLET: { unicodeRegex: /\u2022/g, replacement: `*` },
  TRIANGULAR_BULLET: { unicodeRegex: /\u2013/g, replacement: `*` },
  HYPHEN_BULLET: { unicodeRegex: /\u2043/g, replacement: `-` },
  ONE_DOT_LEADER: { unicodeRegex: /\u2024/g, replacement: `.` },
  TWO_DOT_LEADER: { unicodeRegex: /\u2025/g, replacement: `..` },
  HORIZONTAL_ELLIPSIS: { unicodeRegex: /\u2026/g, replacement: `...` },
  PRIME: { unicodeRegex: /\u2032/g, replacement: `'` },
  DOUBLE_PRIME: { unicodeRegex: /\u2033/g, replacement: `''` },
  TRIPLE_PRIME: { unicodeRegex: /\u2034/g, replacement: `'''` },
  QUADRUPLE_PRIME: { unicodeRegex: /\u2057/g, replacement: `''''` },
  REVERSED_PRIME: { unicodeRegex: /\u2035/g, replacement: `'` },
  REVERSED_DOUBLE_PRIME: { unicodeRegex: /\u2036/g, replacement: `''` },
  REVERSED_TRIPLE_PRIME: { unicodeRegex: /\u2037/g, replacement: `'''` },
  DOUBLE_EXCLAMATION_MARK: { unicodeRegex: /\u203C/g, replacement: `!!` },
  INTERROBANG: { unicodeRegex: /\u203D/g, replacement: `?` },
  DOUBLE_QUESTION_MARK: { unicodeRegex: /\u2047/g, replacement: `??` },
  EXCLAMATION_QUESTION_MARK: { unicodeRegex: /\u2048/g, replacement: `!?` },
  LOW_ASTERISK: { unicodeRegex: /\u204E/g, replacement: `*` },
  REVERSED_SEMICOLON: { unicodeRegex: /\u204F/g, replacement: `;` },
  SWUNG_DASH: { unicodeRegex: /\u2053/g, replacement: `-` },
  FLOWER_PUNCTUATION_MARK: { unicodeRegex: /\u2055/g, replacement: `*` },
  COPYRIGHT_SIGN: { unicodeRegex: /\u00A9/g, replacement: `(C)` },
  REGISTERED_SIGN: { unicodeRegex: /\u00AE/g, replacement: `(R)` },
  TRADEMARK_SIGN: { unicodeRegex: /\u2122/g, replacement: `(TM)` },
  COMPARATOR_LESS_THAN: { unicodeRegex: /\u003C/g, replacement: `<` },
  COMPARATOR_EQUAL_TO: { unicodeRegex: /\u003D/g, replacement: `=` },
  COMPARATOR_GREATER_THAN: { unicodeRegex: /\u003E/g, replacement: `>` },
  COMPARATOR_GREATER_THAN_OR_EQUAL_TO: { unicodeRegex: /\u003E=/g, replacement: `>=` },
  COMPARATOR_LESS_THAN_OR_EQUAL_TO: { unicodeRegex: /\u003C=/g, replacement: `<=` },
  COMPARATOR_NOT_EQUAL_TO: { unicodeRegex: /\u003D\u003D/g, replacement: `!=` },
  COMPARATOR_NOT_EQUAL_TO_OR_GREATER_THAN: { unicodeRegex: /\u003E\u003D/g, replacement: `>=` },
  COMPARATOR_NOT_EQUAL_TO_OR_LESS_THAN: { unicodeRegex: /\u003C\u003D/g, replacement: `<=` },
  // ESLint: no-irregular-whitespace; selected values from https://eslint.org/docs/latest/rules/no-irregular-whitespace
  NBSP: { unicodeRegex: /\u00A0/g, replacement: ` ` },
  OGSP: { unicodeRegex: /\u1680/g, replacement: ` ` },
  MVS: { unicodeRegex: /\u180E/g, replacement: ` ` },
  BOM: { unicodeRegex: /\ufeff/g, replacement: ` ` },
  NQSP: { unicodeRegex: /\u2000/g, replacement: ` ` },
  MQSP: { unicodeRegex: /\u2001/g, replacement: ` ` },
  ENSP: { unicodeRegex: /\u2002/g, replacement: ` ` },
  EMSP: { unicodeRegex: /\u2003/g, replacement: ` ` },
  FSP: { unicodeRegex: /\u2007/g, replacement: ` ` },
  PUNCSP: { unicodeRegex: /\u2008/g, replacement: ` ` },
  THSP: { unicodeRegex: /\u2009/g, replacement: ` ` },
  HSP: { unicodeRegex: /\u200A/g, replacement: ` ` },
  ZWSP: { unicodeRegex: /\u200B/g, replacement: ` ` },
  LSEP: { unicodeRegex: /\u2028/g, replacement: ` ` },
  PSEP: { unicodeRegex: /\u2029/g, replacement: ` ` },
  NNBSP: { unicodeRegex: /\u202F/g, replacement: ` ` },
  MMSP: { unicodeRegex: /\u205f/g, replacement: ` ` },
  IDSP: { unicodeRegex: /\u3000/g, replacement: ` ` },
};

/**
 * A constant array containing all reserved keywords in TypeScript.
 *
 * @remarks
 * These keywords have a predefined meaning in TypeScript and cannot be used as identifiers such as variable names, function names, or any other custom identifiers.
 * Attempting to use these words as identifiers will result in a syntax error.
 *
 * The list includes:
 * - Control flow keywords (e.g., `if`, `else`, `while`, `for`, `break`, `continue`, `switch`, `case`, `throw`, `try`, `catch`, `finally`)
 * - Variable declarations and type-related keywords (e.g., `let`, `const`, `var`, `type`, `interface`, `enum`, `class`, `implements`, `extends`)
 * - Function-related keywords (e.g., `function`, `return`, `async`, `await`)
 * - Visibility and property modifiers (e.g., `private`, `protected`, `public`, `readonly`, `static`, `declare`, `override`)
 * - Operators and expressions (e.g., `instanceof`, `typeof`, `keyof`, `new`, `delete`, `yield`, `in`, `as`, `is`, `infer`, `unique`, `from`)
 * - Values (e.g., `true`, `false`, `null`, `undefined`, `void`, `never`, `unknown`)
 * - Modules and import/export statements (e.g., `module`, `namespace`, `import`, `export`, `require`, `default`, `of`, `get`, `set`)
 * - Other reserved words (e.g., `asserts`, `abstract`, `debugger`, `with`, `super`, `this`, `package`)
 *
 * This array is declared as a constant (`as const`), meaning its content is treated as a read-only tuple of string literals.
 *
 * @privateRemarks
 * This list was constructed by WebStorm AI Assistant
 * AI Assistant message: "list of quoted typescript reserved keywords separated by commas"
 */
const TS_RESERVED_WORDS = [
  'abstract',
  'as',
  'asserts',
  'async',
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'declare',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'from',
  'function',
  'get',
  'if',
  'implements',
  'import',
  'in',
  'infer',
  'instanceof',
  'interface',
  'is',
  'keyof',
  'let',
  'module',
  'namespace',
  'never',
  'new',
  'null',
  'of',
  'override',
  'package',
  'private',
  'protected',
  'public',
  'readonly',
  'require',
  'return',
  'set',
  'static',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'type',
  'typeof',
  'undefined',
  'unique',
  'unknown',
  'var',
  'void',
  'while',
  'with',
  'yield',
] as const;

/**
 * A Set that contains all TypeScript reserved words.
 *
 * This variable holds a collection of reserved keywords in TypeScript,
 * which typically cannot be used as identifiers such as variable names,
 * function names, etc.
 *
 * This data is commonly used to validate or restrict the usage of
 * certain words in TypeScript code to ensure compatibility and prevent
 * conflicts with the language's syntax and reserved identifiers.
 *
 * @type {ReadonlySet<string>}
 */
export const TS_RESERVED_WORDS_SET: ReadonlySet<string> = new Set<string>(TS_RESERVED_WORDS);

/**
 * Replaces all Unicode characters in the provided string with their defined substitutions.
 * Required to prevent various rendering issues in generated code by substituting
 * selected Unicode characters with appropriate ASCII characters.
 *
 * This function processes the input string by iterating through all substitution
 * patterns defined in the `UnicodeSubstitutions` object. For each substitution pattern,
 * it replaces occurrences of Unicode characters matching a specific regex with their
 * corresponding replacement string. The resulting string is then returned.
 *
 * @param {string} source - The input string contains Unicode characters to be replaced.
 * @returns {string} The processed string with all applicable substitutions applied.
 */
export function substituteUnicodeCharacters(source: string): string {
  let returnString = source;
  Object.values(UnicodeSubstitutions).forEach((substitution) => {
    returnString = returnString.replace(substitution.unicodeRegex, substitution.replacement);
  });
  return returnString;
}

/**
 * Converts a given string to PascalCase format.
 *
 * @param {string} name - The input string to be converted to PascalCase.
 * @returns {string} The string converted to PascalCase format.
 */
export function makePascalCase(name: string): string {
  return upperFirst(camelCase(name));
}

/**
 * Converts a given string to upper snake case format.
 *
 * @param {string} name - The input string to be converted.
 * @returns {string} The converted string in upper snake case format.
 */
export function makeUpperSnakeCase(name: string): string {
  return snakeCase(name).toUpperCase();
}

/**
 * Removes all line breaks (carriage return and newline characters) from the input string
 * and replaces them with a single space. If the input is null or undefined, it returns an empty string.
 *
 * @param {string | undefined | null} str - The input string from which line breaks are to be removed.
 * @returns {string} A new string with all line breaks replaced by a single space, or an empty string if the input is null or undefined.
 */
export function stripLineBreaks(str: string | undefined | null): string {
  const tempValue = str ?? '';
  const regex = /[\r\n]+/g;
  return tempValue.replace(regex, ' ');
}

/**
 * Corrects FHIR hyperlinks in the given string by replacing local HTML paths
 * with absolute URLs pointing to the HL7 FHIR documentation.
 *
 * @example
 * ```ts
 * const sourceLink = '[Duration](datatypes.html#Duration)';
 * const fixedLink = fixFhirHyperLinks(sourceLink);
 * // fixedLink: '[Duration](https://hl7.org/fhir/datatypes.html#Duration)'
 * ```
 *
 * @param {string} str - The input string containing the hyperlinks to be fixed.
 * @returns {string} The updated string with fixed FHIR hyperlinks.
 */
export function fixFhirHyperLinks(str: string): string {
  // NOTE: TypeDocs will issue a `[warning]` for hyperlink strings containing invalid content.
  //       If this occurs, we might need to update the allowable characters (`[...]`) below to include new characters
  const regex = /([-A-Za-z0-9]+\.html[-#A-Za-z0-9.]*\))/gi;
  return str.replace(regex, `https://hl7.org/fhir/$1`);
}

/**
 * Extracts and returns the name from the given URL string.
 * The name is typically derived from the last segment of the URL path.
 *
 * @param {string} url - The URL from which the name is extracted. It must be a valid string containing path segments.
 * @returns {string} Returns the extracted name in PascalCase format.
 */
export function extractNameFromUrl(url: string): string {
  assert(url, `Invalid url (${url})`);
  const urlParts = url.split('/');
  assert(urlParts.length > 1, `Invalid url (${url})`);

  const urlName = urlParts[urlParts.length - 1];
  assert(urlName, `Invalid url (${url})`);

  return makePascalCase(urlName);
}

/**
 * Checks if the given FhirDataType is a primitive type based on its naming convention.
 * A type is considered primitive if it starts with a lowercase letter.
 *
 * @param {FhirDataType} type - The name of the FhirDataType to check.
 * @returns {boolean} Returns true if the FhirDataType is a primitive type, otherwise false.
 */
export function isPrimitiveDataType(type: FhirDataType): boolean {
  return /^[a-z].*$/.test(type);
}

/**
 * Determines the primitive JSON type corresponding to a given FHIR data type.
 *
 * @param {FhirDataType} type - The FHIR data type to be mapped to a JSON primitive type.
 * @returns {'boolean' | 'number' | 'string' | undefined} The JSON primitive type ('boolean', 'number', or 'string') that corresponds to the given FHIR data type, or undefined if no match is found.
 */
export function getPrimitiveJsonType(type: FhirDataType): 'boolean' | 'number' | 'string' | undefined {
  let primitiveJsonType: 'boolean' | 'number' | 'string' | undefined = undefined;
  if (type === 'boolean') {
    primitiveJsonType = 'boolean';
  } else if (
    type === 'decimal' ||
    type === 'integer' ||
    type === 'integer64' ||
    type === 'positiveInt' ||
    type === 'unsignedInt'
  ) {
    primitiveJsonType = 'number';
  } else if (isPrimitiveDataType(type)) {
    primitiveJsonType = 'string';
  }
  return primitiveJsonType;
}

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
 * Determines whether a given component definition type or HbsElementDefinition array
 * contains parsable data types based on specific conditions.
 *
 * @param {string} componentDefinitionType - The type of the component definition (e.g., 'DomainResource', 'Resource').
 * @param {HbsElementDefinition[]} hbsEd - An array of HbsElementDefinition objects to check for resource type.
 * @returns {boolean} Returns true if a parsable resource exists, otherwise false.
 */
export function hasParsableResource(componentDefinitionType: string, hbsEd: HbsElementDefinition[]): boolean {
  const hasParsableBase = componentDefinitionType === 'DomainResource' || componentDefinitionType === 'Resource';
  const hasParsableResources = hbsEd.some((ed) => ed.isResourceType);
  return hasParsableBase || hasParsableResources;
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
      DATA_TYPES.includes(edt.extension[0].valueUrl as FhirDataType)
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
  assert(baseDefinitionParts.length > 1, 'StructureDefinition.baseDefinition is expected to have at least two parts');
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
