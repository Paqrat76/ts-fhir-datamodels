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
import { cloneDeep, isEmpty, isNil, upperFirst } from 'lodash';
import { stripLineBreaks, substituteUnicodeCharacters } from '../utils';
import { ElementDefinition, ElementDefinitionType } from '../fhir-artifact-interfaces';
import { DATA_TYPES, FhirDataType } from '../FhirDataType';

export interface StructureDefinitionRootElement {
  short: string | undefined;
  definition: string | undefined;
  comment: string | undefined;
  requirements: string | undefined;
}

export interface HbsElementDefinitionType {
  fhirDataType: string;
  code: string;
  primitiveJsonType: 'boolean' | 'number' | 'string' | undefined;
  choiceTypes: string[] | undefined;
  choiceDataTypes: string[] | undefined;
  codeSystemName: string | undefined;
  codeSystemEnumName: string | undefined;
  targetProfile: string[] | undefined;
  targetResource: string[] | undefined;
}

export interface HbsElementDefinition {
  path: string;
  fieldName: string;
  short: string | undefined;
  definition: string | undefined;
  comment: string | undefined;
  requirements: string | undefined;
  min: number;
  max: string;
  cardinality: string;
  isRequired: boolean;
  isArray: boolean;
  isOptionalItem: boolean;
  isOptionalList: boolean;
  isRequiredItem: boolean;
  isRequiredList: boolean;
  type: HbsElementDefinitionType;
  isPrimitiveType: boolean;
  isChoiceType: boolean;
  isComplexType: boolean;
  isEnumCodeType: boolean;
  isReferenceType: boolean;
  isPrimitiveMethods: boolean;
  isChoiceMethods: boolean;
  isComplexMethods: boolean;
  isEnumCodeMethods: boolean;
  isReferenceMethods: boolean;
  isModifier: boolean;
  isModifierReason: string | undefined;
  isSummary: boolean;
}

export interface HbsStructureDefinition {
  url: string;
  name: string;
  type: string;
  description: string;
  purpose: string | undefined;
  fhirVersion: string;
  rootElement: StructureDefinitionRootElement;
  numRequiredFields: number;
  hasRequiredFields: boolean;
  hasPrimitiveFields: boolean;
  hasOnlyOnePrimitiveField: boolean;
  hasChoiceFields: boolean;
  hasCodeSystemEnums: boolean;
  requiredConstructor: boolean;
  elementDefinitions: HbsElementDefinition[];
  fhirCoreImports: string[];
  generatedImports: string[] | undefined;
}

/**
 * Processes a given string by performing specific transformations like removing line breaks,
 * substituting Unicode characters, and escaping single quotes. If the input is undefined, it returns undefined.
 *
 * @param {string | undefined} sourceStr - The input string to be processed. It can be a string or undefined.
 * @returns {string | undefined} - The transformed string with the applied changes, or undefined if the input is undefined.
 */
export function fixDescriptiveString(sourceStr: string | undefined): string | undefined {
  return sourceStr ? substituteUnicodeCharacters(stripLineBreaks(sourceStr)).replace(/'/g, `\\'`) : undefined;
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
 * Calculates and returns the number of private fields from a given array of HbsElementDefinition objects.
 *
 * @param {HbsElementDefinition[]} hbsEd - An array of `HbsElementDefinition` objects to be checked for private fields.
 * @returns {number} The total number of private fields within the provided array.
 */
export function getNumberOfPrivateFields(hbsEd: HbsElementDefinition[]): number {
  let numPrivateFields = 0;
  hbsEd.forEach((ed: HbsElementDefinition) => {
    if (ed.isPrimitiveType) {
      numPrivateFields++;
    }
  });
  return numPrivateFields;
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
 * Generates a string representing `numReqdFields` number of nulls, separated by commas, for use in constructors
 * or similar contexts.
 *
 * @param {number} numReqdFields - The number of nulls to include in the resulting string. Must be a non-negative integer.
 * @returns {string} A comma-separated string of nulls. Returns an empty string if `numReqdFields` is 0.
 */
export function getConstructorNulls(numReqdFields: number): string {
  assert(numReqdFields >= 0, 'numReqdFields must be a non-negative integer');
  if (numReqdFields === 0) {
    return '';
  }
  const arr: string[] = new Array<string>(numReqdFields);
  return arr.fill('null').join(', ');
}

/**
 * Extracts and returns the field name from a given element path.
 *
 * @param {string} elementPath - The complete path of the element as a string.
 * @returns {string} The extracted field name from the given element path.
 */
export function getFieldName(elementPath: string): string {
  const pathParts = elementPath.split('.');
  if (pathParts.length === 1) {
    return '';
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  let fieldName = pathParts[pathParts.length - 1]!;
  if (fieldName.endsWith('[x]') || fieldName.endsWith('[X]')) {
    fieldName = fieldName.substring(0, fieldName.length - 3);
  }
  return fieldName;
}

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
    const fieldName = ed.fieldName;
    const fieldDataType = ed.isArray
      ? ed.type.code === 'EnumCodeType'
        ? `${ed.type.code}[] | CodeType[]`
        : `${ed.type.code}[]`
      : ed.type.code === 'EnumCodeType'
        ? `${ed.type.code} | CodeType`
        : ed.type.code;
    const primitiveDataType = ` | fhir${upperFirst(ed.type.fhirDataType)}`;
    const primitiveType = ed.isPrimitiveType ? (ed.isArray ? `${primitiveDataType}[]` : primitiveDataType) : undefined;
    const paramStr = `${fieldName}: ${fieldDataType}${primitiveType ?? ''} | null`;
    requiredConstructorParams.push(paramStr);
  });

  return requiredConstructorParams.join(', ');
}
