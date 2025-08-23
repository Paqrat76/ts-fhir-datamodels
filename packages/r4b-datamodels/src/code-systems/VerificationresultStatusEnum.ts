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
 * VerificationresultStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/verificationresult-status
 * CodeSystem.name: VerificationresultStatus
 * CodeSystem.description: The validation status of the target
 * CodeSystem.version: 4.3.0
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
 * FHIR CodeSystem: VerificationresultStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem VerificationresultStatus](http://hl7.org/fhir/verificationresult-status)
 */
export class VerificationresultStatusEnum implements IFhirCodeEnum {
  public static readonly ATTESTED = new FhirCodeDefinition(
    'ATTESTED',
    'attested',
    'http://hl7.org/fhir/verificationresult-status',
    'Attested',
    '***TODO***',
  );
  public static readonly VALIDATED = new FhirCodeDefinition(
    'VALIDATED',
    'validated',
    'http://hl7.org/fhir/verificationresult-status',
    'Validated',
    '***TODO***',
  );
  public static readonly IN_PROCESS = new FhirCodeDefinition(
    'IN_PROCESS',
    'in-process',
    'http://hl7.org/fhir/verificationresult-status',
    'In process',
    '***TODO***',
  );
  public static readonly REQ_REVALID = new FhirCodeDefinition(
    'REQ_REVALID',
    'req-revalid',
    'http://hl7.org/fhir/verificationresult-status',
    'Requires revalidation',
    '***TODO***',
  );
  public static readonly VAL_FAIL = new FhirCodeDefinition(
    'VAL_FAIL',
    'val-fail',
    'http://hl7.org/fhir/verificationresult-status',
    'Validation failed',
    '***TODO***',
  );
  public static readonly REVAL_FAIL = new FhirCodeDefinition(
    'REVAL_FAIL',
    'reval-fail',
    'http://hl7.org/fhir/verificationresult-status',
    'Re-Validation failed',
    '***TODO***',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      VerificationresultStatusEnum.ATTESTED,
      VerificationresultStatusEnum.VALIDATED,
      VerificationresultStatusEnum.IN_PROCESS,
      VerificationresultStatusEnum.REQ_REVALID,
      VerificationresultStatusEnum.VAL_FAIL,
      VerificationresultStatusEnum.REVAL_FAIL,
      VerificationresultStatusEnum.NULL
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
    } else if (VerificationresultStatusEnum.ATTESTED.code === code) {
      return VerificationresultStatusEnum.ATTESTED;
    } else if (VerificationresultStatusEnum.VALIDATED.code === code) {
      return VerificationresultStatusEnum.VALIDATED;
    } else if (VerificationresultStatusEnum.IN_PROCESS.code === code) {
      return VerificationresultStatusEnum.IN_PROCESS;
    } else if (VerificationresultStatusEnum.REQ_REVALID.code === code) {
      return VerificationresultStatusEnum.REQ_REVALID;
    } else if (VerificationresultStatusEnum.VAL_FAIL.code === code) {
      return VerificationresultStatusEnum.VAL_FAIL;
    } else if (VerificationresultStatusEnum.REVAL_FAIL.code === code) {
      return VerificationresultStatusEnum.REVAL_FAIL;
    } else if (VerificationresultStatusEnum.NULL.code === code) {
      return VerificationresultStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown VerificationresultStatusEnum 'code' value '${code}'`);
    }
  }
}
