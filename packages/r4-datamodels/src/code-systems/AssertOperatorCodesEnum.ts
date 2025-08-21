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
 * AssertOperatorCodesEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/assert-operator-codes
 * CodeSystem.name: AssertOperatorCodes
 * CodeSystem.description: The type of operator to use for assertion.
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
 * FHIR CodeSystem: AssertOperatorCodesEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem AssertOperatorCodes](http://hl7.org/fhir/assert-operator-codes)
 */
export class AssertOperatorCodesEnum implements IFhirCodeEnum {
  public static readonly EQUALS = new FhirCodeDefinition(
    'EQUALS',
    'equals',
    'http://hl7.org/fhir/assert-operator-codes',
    'equals',
    'Default value. Equals comparison.',
  );
  public static readonly NOT_EQUALS = new FhirCodeDefinition(
    'NOT_EQUALS',
    'notEquals',
    'http://hl7.org/fhir/assert-operator-codes',
    'notEquals',
    'Not equals comparison.',
  );
  public static readonly IN = new FhirCodeDefinition(
    'IN',
    'in',
    'http://hl7.org/fhir/assert-operator-codes',
    'in',
    'Compare value within a known set of values.',
  );
  public static readonly NOT_IN = new FhirCodeDefinition(
    'NOT_IN',
    'notIn',
    'http://hl7.org/fhir/assert-operator-codes',
    'notIn',
    'Compare value not within a known set of values.',
  );
  public static readonly GREATER_THAN = new FhirCodeDefinition(
    'GREATER_THAN',
    'greaterThan',
    'http://hl7.org/fhir/assert-operator-codes',
    'greaterThan',
    'Compare value to be greater than a known value.',
  );
  public static readonly LESS_THAN = new FhirCodeDefinition(
    'LESS_THAN',
    'lessThan',
    'http://hl7.org/fhir/assert-operator-codes',
    'lessThan',
    'Compare value to be less than a known value.',
  );
  public static readonly EMPTY = new FhirCodeDefinition(
    'EMPTY',
    'empty',
    'http://hl7.org/fhir/assert-operator-codes',
    'empty',
    'Compare value is empty.',
  );
  public static readonly NOT_EMPTY = new FhirCodeDefinition(
    'NOT_EMPTY',
    'notEmpty',
    'http://hl7.org/fhir/assert-operator-codes',
    'notEmpty',
    'Compare value is not empty.',
  );
  public static readonly CONTAINS = new FhirCodeDefinition(
    'CONTAINS',
    'contains',
    'http://hl7.org/fhir/assert-operator-codes',
    'contains',
    'Compare value string contains a known value.',
  );
  public static readonly NOT_CONTAINS = new FhirCodeDefinition(
    'NOT_CONTAINS',
    'notContains',
    'http://hl7.org/fhir/assert-operator-codes',
    'notContains',
    'Compare value string does not contain a known value.',
  );
  public static readonly EVAL = new FhirCodeDefinition(
    'EVAL',
    'eval',
    'http://hl7.org/fhir/assert-operator-codes',
    'evaluate',
    'Evaluate the FHIRPath expression as a boolean condition.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      AssertOperatorCodesEnum.EQUALS,
      AssertOperatorCodesEnum.NOT_EQUALS,
      AssertOperatorCodesEnum.IN,
      AssertOperatorCodesEnum.NOT_IN,
      AssertOperatorCodesEnum.GREATER_THAN,
      AssertOperatorCodesEnum.LESS_THAN,
      AssertOperatorCodesEnum.EMPTY,
      AssertOperatorCodesEnum.NOT_EMPTY,
      AssertOperatorCodesEnum.CONTAINS,
      AssertOperatorCodesEnum.NOT_CONTAINS,
      AssertOperatorCodesEnum.EVAL,
      AssertOperatorCodesEnum.NULL
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
    } else if (AssertOperatorCodesEnum.EQUALS.code === code) {
      return AssertOperatorCodesEnum.EQUALS;
    } else if (AssertOperatorCodesEnum.NOT_EQUALS.code === code) {
      return AssertOperatorCodesEnum.NOT_EQUALS;
    } else if (AssertOperatorCodesEnum.IN.code === code) {
      return AssertOperatorCodesEnum.IN;
    } else if (AssertOperatorCodesEnum.NOT_IN.code === code) {
      return AssertOperatorCodesEnum.NOT_IN;
    } else if (AssertOperatorCodesEnum.GREATER_THAN.code === code) {
      return AssertOperatorCodesEnum.GREATER_THAN;
    } else if (AssertOperatorCodesEnum.LESS_THAN.code === code) {
      return AssertOperatorCodesEnum.LESS_THAN;
    } else if (AssertOperatorCodesEnum.EMPTY.code === code) {
      return AssertOperatorCodesEnum.EMPTY;
    } else if (AssertOperatorCodesEnum.NOT_EMPTY.code === code) {
      return AssertOperatorCodesEnum.NOT_EMPTY;
    } else if (AssertOperatorCodesEnum.CONTAINS.code === code) {
      return AssertOperatorCodesEnum.CONTAINS;
    } else if (AssertOperatorCodesEnum.NOT_CONTAINS.code === code) {
      return AssertOperatorCodesEnum.NOT_CONTAINS;
    } else if (AssertOperatorCodesEnum.EVAL.code === code) {
      return AssertOperatorCodesEnum.EVAL;
    } else if (AssertOperatorCodesEnum.NULL.code === code) {
      return AssertOperatorCodesEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown AssertOperatorCodesEnum 'code' value '${code}'`);
    }
  }
}
