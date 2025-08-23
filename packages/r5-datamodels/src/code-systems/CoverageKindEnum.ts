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
 * CoverageKindEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/coverage-kind
 * CodeSystem.name: CoverageKind
 * CodeSystem.description: The nature of the Coverage details which convey who is paying potentially for health services.
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
 * FHIR CodeSystem: CoverageKindEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem CoverageKind](http://hl7.org/fhir/coverage-kind)
 */
export class CoverageKindEnum implements IFhirCodeEnum {
  public static readonly INSURANCE = new FhirCodeDefinition(
    'INSURANCE',
    'insurance',
    'http://hl7.org/fhir/coverage-kind',
    'Insurance',
    'The Coverage provides the identifiers and card-level details of an insurance policy.',
  );
  public static readonly SELF_PAY = new FhirCodeDefinition(
    'SELF_PAY',
    'self-pay',
    'http://hl7.org/fhir/coverage-kind',
    'Self-pay',
    'One or more persons and/or organizations are paying for the services rendered.',
  );
  public static readonly OTHER = new FhirCodeDefinition(
    'OTHER',
    'other',
    'http://hl7.org/fhir/coverage-kind',
    'Other',
    'Some other organization is paying for the service.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      CoverageKindEnum.INSURANCE,
      CoverageKindEnum.SELF_PAY,
      CoverageKindEnum.OTHER,
      CoverageKindEnum.NULL
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
    } else if (CoverageKindEnum.INSURANCE.code === code) {
      return CoverageKindEnum.INSURANCE;
    } else if (CoverageKindEnum.SELF_PAY.code === code) {
      return CoverageKindEnum.SELF_PAY;
    } else if (CoverageKindEnum.OTHER.code === code) {
      return CoverageKindEnum.OTHER;
    } else if (CoverageKindEnum.NULL.code === code) {
      return CoverageKindEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown CoverageKindEnum 'code' value '${code}'`);
    }
  }
}
