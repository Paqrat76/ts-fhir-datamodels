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

import { upperFirst } from 'lodash';
import { NON_OPEN_DATA_TYPES, OPEN_DATA_TYPES } from '@paq-ts-fhir/fhir-core';
import { isPrimitiveDataType } from './utils';

/**
 * Non-open data types that are valid data types representing structural data types
 */
const SPECIAL_DATA_TYPES = ['Element', 'ElementDefinition', 'BackboneElement', 'BackboneType', 'Resource'] as const;

/**
 * Non-open data types that are still under development
 *
 * @remarks
 * FHIR R4 - These types are still undergoing development and review by the appropriate Workgroups.
 * At this time, these are considered only as a draft design not suitable for production implementation.
 * They are included here because certain resources use these data types.
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
 * @category Base Models
 * @see [DataTypes](https://hl7.org/fhir/datatypes.html)
 */
export const DATA_TYPES = [
  ...OPEN_DATA_TYPES,
  ...NON_OPEN_DATA_TYPES,
  ...SPECIAL_DATA_TYPES,
  ...UNDER_DEVELOPMENT_DATA_TYPES,
] as const;

/**
 * FhirDataType
 *
 * @remarks
 * Type definition based on DATA_TYPES array.
 *
 * @category Base Models
 */
export type FhirDataType = (typeof DATA_TYPES)[number];

/**
 * A constant that holds the mappings of FHIR data types.
 * This object maps specific FHIR data type names to their corresponding FHIR data type representations.
 *
 * @category Base Models
 */
export const DATA_TYPE_MAPPINGS: Map<FhirDataType, string> = getDataTypeMappings();

/**
 * Generates a mapping of data type names where the key is the original data type
 * and the value is a formatted version of the data type string.
 *
 * @returns {Map<FhirDataType, string>} A map where each key is a data type and the value
 * is its corresponding transformed representation.
 */
function getDataTypeMappings(): Map<FhirDataType, string> {
  const map = new Map<FhirDataType, string>();
  DATA_TYPES.forEach((dt: FhirDataType): void => {
    const value = isPrimitiveDataType(dt) ? `${upperFirst(dt)}Type` : dt;
    map.set(dt, value);
  });
  return map;
}
