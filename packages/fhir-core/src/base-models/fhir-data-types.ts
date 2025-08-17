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

import { upperFirst } from '../utility/common-util';

/**
 * FHIR open data types
 *
 * @remarks
 * Some elements do not have a specified type. The type is represented by the wildcard symbol "*".
 * In these cases, the element type may be one of these.
 * Open types are used in the following places: ElementDefinition, Extension, Parameters, Task, and Transport (R5).
 *
 * NOTE: This set of data types is a subset of DATA_TYPES.
 *
 * @internal
 * @see [Open Type Element](https://hl7.org/fhir/datatypes.html#open)
 */
export const OPEN_DATA_TYPES = [
  // Primitive Types
  'base64Binary',
  'boolean',
  'canonical',
  'code',
  'date',
  'dateTime',
  'decimal',
  'id',
  'instant',
  'integer',
  'integer64', // added in FHIR R5
  'markdown',
  'oid',
  'positiveInt',
  'string',
  'time',
  'unsignedInt',
  'uri',
  'url',
  'uuid',
  // Datatypes
  'Address',
  'Age',
  'Annotation',
  'Attachment',
  'CodeableConcept',
  'CodeableReference', // added in FHIR R5
  'Coding',
  'ContactPoint',
  'Count',
  'Distance',
  'Duration',
  'HumanName',
  'Identifier',
  'Money',
  'Period',
  'Quantity',
  'Range',
  'Ratio',
  'RatioRange', // added in FHIR R5
  'Reference',
  'SampledData',
  'Signature',
  'Timing',
  // Metadata Types
  'Availability', // added in FHIR R5
  'ContactDetail',
  'Contributor', // removed in R5
  'DataRequirement',
  'Expression',
  'ExtendedContactDetail', // added in FHIR R5
  'ParameterDefinition',
  'RelatedArtifact',
  'TriggerDefinition',
  'UsageContext',
  // Special Types
  'Dosage',
  'Meta',
] as const;

/**
 * FHIR open data types key names (i.e., valueString, valuePeriod, etc.)
 *
 * @internal
 * @see [Open Type Element](https://hl7.org/fhir/R5/datatypes.html#open)
 */
export const OPEN_DATA_TYPE_KEY_NAMES = OPEN_DATA_TYPES.map((odt) => `value${upperFirst(odt)}`);

/**
 * Non-open data types that are valid data types
 *
 * @internal
 */
const NON_OPEN_DATA_TYPES = [
  'MonetaryComponent',
  'Narrative',
  'RelativeTime', // added in FHIR R6
  'VirtualServiceDetail',
  'xhtml',
] as const;

/**
 * Non-open data types that are valid data types representing structural data types
 *
 * @internal
 */
const SPECIAL_DATA_TYPES = ['Element', 'ElementDefinition', 'BackboneElement', 'BackboneType', 'Resource'] as const;

/**
 * Non-open data types that are still under development
 *
 * @remarks
 * FHIR R4 - These types are still undergoing development and review by the appropriate Workgroups.
 * At this time, these are considered only as a draft design not suitable for production implementation.
 * They are included here because certain resources use these data types.
 *
 * @internal
 */
const UNDER_DEVELOPMENT_DATA_TYPES = [
  'MarketingStatus', // R4, R4B, R5, R6 / Resources: MedicinalProductPackaged
  'Population', // R4, R4B: Resources / MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductUndesirableEffect
  'ProdCharacteristic', // R4, R4B / Resources: DeviceDefinition, MedicinalProductManufactured, MedicinalProductPackaged
  'ProductShelfLife', // R4, R4B, R5, R6 / Resources: DeviceDefinition, MedicinalProductPackaged
  'SubstanceAmount', // R4 / Resources: SubstancePolymer
] as const;

/**
 * FHIR data types
 *
 * @remarks
 * All defined FHIR data types for complex and primitive data types.
 *
 * @internal
 * @see [DataTypes](https://hl7.org/fhir/datatypes.html)
 */
export const DATA_TYPES = [
  ...OPEN_DATA_TYPES,
  ...NON_OPEN_DATA_TYPES,
  ...SPECIAL_DATA_TYPES,
  ...UNDER_DEVELOPMENT_DATA_TYPES,
] as const;

/**
 * FHIR data types key names (i.e., valueString, valuePeriod, etc.)
 *
 * @internal
 * @see [Datatypes](https://hl7.org/fhir/datatypes.html)
 */
export const DATA_TYPE_KEY_NAMES = DATA_TYPES.map((dt) => `value${upperFirst(dt)}`);

/**
 * FhirDataType
 *
 * @remarks
 * Type definition based on DATA_TYPES array.
 *
 * @internal
 */
export type FhirDataType = (typeof DATA_TYPES)[number];

/**
 * A constant that holds the mappings of FHIR data model types.
 * This object maps specific FHIR data type names to their corresponding FHIR data model representations.
 *
 * @internal
 */
export const DATA_TYPE_MAPPINGS: ReadonlyMap<FhirDataType, string> = getDataTypeMappings();

/**
 * Generates a mapping of data type names where the key is the original data type
 * and the value is a formatted version of the data type string.
 *
 * @returns {Map<FhirDataType, string>} A map where each key is a data type and the value
 * is its corresponding transformed representation.
 *
 * @internal
 */
function getDataTypeMappings(): ReadonlyMap<FhirDataType, string> {
  const map = new Map<FhirDataType, string>();
  DATA_TYPES.forEach((dt: string): void => {
    // Primitive data type names begin with lowercase letters.
    // Primitive data models names begin with uppercase letters and end with 'Type'.
    const value: string = /^[a-z].*$/.test(dt as FhirDataType) ? `${upperFirst(dt)}Type` : dt;
    map.set(dt as FhirDataType, value);
  });
  return new Map<FhirDataType, string>(map);
}
