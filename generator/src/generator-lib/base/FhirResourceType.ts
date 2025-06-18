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

import { RESOURCE_TYPES } from '../resources';

/**
 * FhirResourceType
 *
 * @remarks
 * Type definition based on the generated RESOURCE_TYPES array.
 *
 * @category Type Guards/Assertions
 */
export type FhirResourceType = (typeof RESOURCE_TYPES)[number];

/**
 * Determines if a given string is a valid FHIR resource type.
 *
 * @param {string} value - The string to check against the predefined list of FHIR resource types.
 * @returns A boolean indicating whether the string is a valid FHIR resource type.
 *
 * @category Type Guards/Assertions
 */
export function isFhirResourceType(value: string): value is FhirResourceType {
  return RESOURCE_TYPES.includes(value as FhirResourceType);
}
