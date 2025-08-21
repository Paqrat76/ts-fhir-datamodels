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
 * RequestStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/request-status
 * CodeSystem.name: RequestStatus
 * CodeSystem.description: Codes identifying the lifecycle stage of a request.
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
 * FHIR CodeSystem: RequestStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem RequestStatus](http://hl7.org/fhir/request-status)
 */
export class RequestStatusEnum implements IFhirCodeEnum {
  public static readonly DRAFT = new FhirCodeDefinition(
    'DRAFT',
    'draft',
    'http://hl7.org/fhir/request-status',
    'Draft',
    'The request has been created but is not yet complete or ready for action.',
  );
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/request-status',
    'Active',
    'The request is in force and ready to be acted upon.',
  );
  public static readonly ON_HOLD = new FhirCodeDefinition(
    'ON_HOLD',
    'on-hold',
    'http://hl7.org/fhir/request-status',
    'On Hold',
    'The request (and any implicit authorization to act) has been temporarily withdrawn but is expected to resume in the future.',
  );
  public static readonly REVOKED = new FhirCodeDefinition(
    'REVOKED',
    'revoked',
    'http://hl7.org/fhir/request-status',
    'Revoked',
    'The request (and any implicit authorization to act) has been terminated prior to the known full completion of the intended actions.  No further activity should occur.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/request-status',
    'Completed',
    'The activity described by the request has been fully performed.  No further activity will occur.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/request-status',
    'Entered in Error',
    'This request should never have existed and should be considered \'void\'.  (It is possible that real-world decisions were based on it.  If real-world activity has occurred, the status should be "revoked" rather than "entered-in-error".).',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/request-status',
    'Unknown',
    'The authoring/source system does not know which of the status values currently applies for this request.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      RequestStatusEnum.DRAFT,
      RequestStatusEnum.ACTIVE,
      RequestStatusEnum.ON_HOLD,
      RequestStatusEnum.REVOKED,
      RequestStatusEnum.COMPLETED,
      RequestStatusEnum.ENTERED_IN_ERROR,
      RequestStatusEnum.UNKNOWN,
      RequestStatusEnum.NULL
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
    } else if (RequestStatusEnum.DRAFT.code === code) {
      return RequestStatusEnum.DRAFT;
    } else if (RequestStatusEnum.ACTIVE.code === code) {
      return RequestStatusEnum.ACTIVE;
    } else if (RequestStatusEnum.ON_HOLD.code === code) {
      return RequestStatusEnum.ON_HOLD;
    } else if (RequestStatusEnum.REVOKED.code === code) {
      return RequestStatusEnum.REVOKED;
    } else if (RequestStatusEnum.COMPLETED.code === code) {
      return RequestStatusEnum.COMPLETED;
    } else if (RequestStatusEnum.ENTERED_IN_ERROR.code === code) {
      return RequestStatusEnum.ENTERED_IN_ERROR;
    } else if (RequestStatusEnum.UNKNOWN.code === code) {
      return RequestStatusEnum.UNKNOWN;
    } else if (RequestStatusEnum.NULL.code === code) {
      return RequestStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown RequestStatusEnum 'code' value '${code}'`);
    }
  }
}
