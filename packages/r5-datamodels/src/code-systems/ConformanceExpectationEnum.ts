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
 * ConformanceExpectationEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/conformance-expectation
 * CodeSystem.name: ConformanceExpectation
 * CodeSystem.description: ConformanceExpectation
 * CodeSystem.version: 5.0.0
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
 * FHIR CodeSystem: ConformanceExpectationEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ConformanceExpectation](http://hl7.org/fhir/conformance-expectation)
 */
export class ConformanceExpectationEnum implements IFhirCodeEnum {
  public static readonly SHALL = new FhirCodeDefinition(
    'SHALL',
    'SHALL',
    'http://hl7.org/fhir/conformance-expectation',
    'SHALL',
    'Support for the specified capability is required to be considered conformant.',
  );
  public static readonly SHOULD = new FhirCodeDefinition(
    'SHOULD',
    'SHOULD',
    'http://hl7.org/fhir/conformance-expectation',
    'SHOULD',
    'Support for the specified capability is strongly encouraged, and failure to support it should only occur after careful consideration.',
  );
  public static readonly MAY = new FhirCodeDefinition(
    'MAY',
    'MAY',
    'http://hl7.org/fhir/conformance-expectation',
    'MAY',
    'Support for the specified capability is not necessary to be considered conformant, and the requirement should be considered strictly optional.',
  );
  public static readonly SHOULD_NOT = new FhirCodeDefinition(
    'SHOULD_NOT',
    'SHOULD-NOT',
    'http://hl7.org/fhir/conformance-expectation',
    'SHOULD-NOT',
    'Support for the specified capability is strongly discouraged and should occur only after careful consideration.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ConformanceExpectationEnum.SHALL,
      ConformanceExpectationEnum.SHOULD,
      ConformanceExpectationEnum.MAY,
      ConformanceExpectationEnum.SHOULD_NOT,
      ConformanceExpectationEnum.NULL
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
    } else if (ConformanceExpectationEnum.SHALL.code === code) {
      return ConformanceExpectationEnum.SHALL;
    } else if (ConformanceExpectationEnum.SHOULD.code === code) {
      return ConformanceExpectationEnum.SHOULD;
    } else if (ConformanceExpectationEnum.MAY.code === code) {
      return ConformanceExpectationEnum.MAY;
    } else if (ConformanceExpectationEnum.SHOULD_NOT.code === code) {
      return ConformanceExpectationEnum.SHOULD_NOT;
    } else if (ConformanceExpectationEnum.NULL.code === code) {
      return ConformanceExpectationEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ConformanceExpectationEnum 'code' value '${code}'`);
    }
  }
}
