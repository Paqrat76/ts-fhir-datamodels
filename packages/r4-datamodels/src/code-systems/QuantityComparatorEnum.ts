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

/**
 * This file is generated from a FHIR CodeSystem definition.
 * DO NOT make any modifications!
 *
 * QuantityComparatorEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/quantity-comparator
 * CodeSystem.name: QuantityComparator
 * CodeSystem.description: How the Quantity should be understood and represented.
 * CodeSystem.version: 4.0.1
 * CodeSystem.caseSensitive: true
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  fhirCode,
  FhirCodeDefinition,
  IFhirCodeDefinition,
  IFhirCodeEnum,
  InvalidCodeError,
} from '@paq-ts-fhir/fhir-core';

/**
 * FHIR CodeSystem: QuantityComparatorEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem QuantityComparator](http://hl7.org/fhir/quantity-comparator)
 */
export class QuantityComparatorEnum implements IFhirCodeEnum {
  public static readonly LESS_THAN = new FhirCodeDefinition(
    'LESS_THAN',
    '<',
    'http://hl7.org/fhir/quantity-comparator',
    'Less than',
    'The actual value is less than the given value.',
  );
  public static readonly LESS_THAN_OR_EQUAL_TO = new FhirCodeDefinition(
    'LESS_THAN_OR_EQUAL_TO',
    '<=',
    'http://hl7.org/fhir/quantity-comparator',
    'Less or Equal to',
    'The actual value is less than or equal to the given value.',
  );
  public static readonly GREATER_THAN_OR_EQUAL_TO = new FhirCodeDefinition(
    'GREATER_THAN_OR_EQUAL_TO',
    '>=',
    'http://hl7.org/fhir/quantity-comparator',
    'Greater or Equal to',
    'The actual value is greater than or equal to the given value.',
  );
  public static readonly GREATER_THAN = new FhirCodeDefinition(
    'GREATER_THAN',
    '>',
    'http://hl7.org/fhir/quantity-comparator',
    'Greater than',
    'The actual value is greater than the given value.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      QuantityComparatorEnum.LESS_THAN,
      QuantityComparatorEnum.LESS_THAN_OR_EQUAL_TO,
      QuantityComparatorEnum.GREATER_THAN_OR_EQUAL_TO,
      QuantityComparatorEnum.GREATER_THAN,
      QuantityComparatorEnum.NULL
    ];
  }

  /**
   * Converts a given FHIR code into its corresponding FHIR code definition.
   *
   * @param {fhirCode | undefined} code - The FHIR code to be converted. If undefined, an error will be thrown.
   * @returns {IFhirCodeDefinition} The FHIR code definition corresponding to the provided code.
   * @throws {@link InvalidCodeError} for undefined or invalid code value
   */
  fromCode(code: fhirCode | undefined): IFhirCodeDefinition {
    if (code === undefined) {
      throw new InvalidCodeError(`The provided 'code' value is undefined`);
    } else if (QuantityComparatorEnum.LESS_THAN.code === code) {
      return QuantityComparatorEnum.LESS_THAN;
    } else if (QuantityComparatorEnum.LESS_THAN_OR_EQUAL_TO.code === code) {
      return QuantityComparatorEnum.LESS_THAN_OR_EQUAL_TO;
    } else if (QuantityComparatorEnum.GREATER_THAN_OR_EQUAL_TO.code === code) {
      return QuantityComparatorEnum.GREATER_THAN_OR_EQUAL_TO;
    } else if (QuantityComparatorEnum.GREATER_THAN.code === code) {
      return QuantityComparatorEnum.GREATER_THAN;
    } else if (QuantityComparatorEnum.NULL.code === code) {
      return QuantityComparatorEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown QuantityComparatorEnum 'code' value '${code}'`);
    }
  }
}
