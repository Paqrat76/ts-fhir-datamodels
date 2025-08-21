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
 * StatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/CodeSystem/status
 * CodeSystem.name: Status
 * CodeSystem.description: The validation status of the target
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
 * FHIR CodeSystem: StatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem Status](http://hl7.org/fhir/CodeSystem/status)
 */
export class StatusEnum implements IFhirCodeEnum {
  public static readonly ATTESTED = new FhirCodeDefinition(
    'ATTESTED',
    'attested',
    'http://hl7.org/fhir/CodeSystem/status',
    'Attested',
    '***TODO***',
  );
  public static readonly VALIDATED = new FhirCodeDefinition(
    'VALIDATED',
    'validated',
    'http://hl7.org/fhir/CodeSystem/status',
    'Validated',
    '***TODO***',
  );
  public static readonly IN_PROCESS = new FhirCodeDefinition(
    'IN_PROCESS',
    'in-process',
    'http://hl7.org/fhir/CodeSystem/status',
    'In process',
    '***TODO***',
  );
  public static readonly REQ_REVALID = new FhirCodeDefinition(
    'REQ_REVALID',
    'req-revalid',
    'http://hl7.org/fhir/CodeSystem/status',
    'Requires revalidation',
    '***TODO***',
  );
  public static readonly VAL_FAIL = new FhirCodeDefinition(
    'VAL_FAIL',
    'val-fail',
    'http://hl7.org/fhir/CodeSystem/status',
    'Validation failed',
    '***TODO***',
  );
  public static readonly REVAL_FAIL = new FhirCodeDefinition(
    'REVAL_FAIL',
    'reval-fail',
    'http://hl7.org/fhir/CodeSystem/status',
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
      StatusEnum.ATTESTED,
      StatusEnum.VALIDATED,
      StatusEnum.IN_PROCESS,
      StatusEnum.REQ_REVALID,
      StatusEnum.VAL_FAIL,
      StatusEnum.REVAL_FAIL,
      StatusEnum.NULL
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
    } else if (StatusEnum.ATTESTED.code === code) {
      return StatusEnum.ATTESTED;
    } else if (StatusEnum.VALIDATED.code === code) {
      return StatusEnum.VALIDATED;
    } else if (StatusEnum.IN_PROCESS.code === code) {
      return StatusEnum.IN_PROCESS;
    } else if (StatusEnum.REQ_REVALID.code === code) {
      return StatusEnum.REQ_REVALID;
    } else if (StatusEnum.VAL_FAIL.code === code) {
      return StatusEnum.VAL_FAIL;
    } else if (StatusEnum.REVAL_FAIL.code === code) {
      return StatusEnum.REVAL_FAIL;
    } else if (StatusEnum.NULL.code === code) {
      return StatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown StatusEnum 'code' value '${code}'`);
    }
  }
}
