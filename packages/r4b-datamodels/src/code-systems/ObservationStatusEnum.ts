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
 * ObservationStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/observation-status
 * CodeSystem.name: ObservationStatus
 * CodeSystem.description: Codes providing the status of an observation.
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
 * FHIR CodeSystem: ObservationStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ObservationStatus](http://hl7.org/fhir/observation-status)
 */
export class ObservationStatusEnum implements IFhirCodeEnum {
  public static readonly REGISTERED = new FhirCodeDefinition(
    'REGISTERED',
    'registered',
    'http://hl7.org/fhir/observation-status',
    'Registered',
    'The existence of the observation is registered, but there is no result yet available.',
  );
  public static readonly PRELIMINARY = new FhirCodeDefinition(
    'PRELIMINARY',
    'preliminary',
    'http://hl7.org/fhir/observation-status',
    'Preliminary',
    'This is an initial or interim observation: data may be incomplete or unverified.',
  );
  public static readonly FINAL = new FhirCodeDefinition(
    'FINAL',
    'final',
    'http://hl7.org/fhir/observation-status',
    'Final',
    'The observation is complete and there are no further actions needed. Additional information such "released", "signed", etc would be represented using [Provenance](https://hl7.org/fhir/provenance.html) which provides not only the act but also the actors and dates and other related data. These act states would be associated with an observation status of `preliminary` until they are all completed and then a status of `final` would be applied.',
  );
  public static readonly AMENDED = new FhirCodeDefinition(
    'AMENDED',
    'amended',
    'http://hl7.org/fhir/observation-status',
    'Amended',
    'Subsequent to being Final, the observation has been modified subsequent.  This includes updates/new information and corrections.',
  );
  public static readonly CORRECTED = new FhirCodeDefinition(
    'CORRECTED',
    'corrected',
    'http://hl7.org/fhir/observation-status',
    'Corrected',
    'Subsequent to being Final, the observation has been modified to correct an error in the test result.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/observation-status',
    'Cancelled',
    'The observation is unavailable because the measurement was not started or not completed (also sometimes called "aborted").',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/observation-status',
    'Entered in Error',
    'The observation has been withdrawn following previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/observation-status',
    'Unknown',
    'The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ObservationStatusEnum.REGISTERED,
      ObservationStatusEnum.PRELIMINARY,
      ObservationStatusEnum.FINAL,
      ObservationStatusEnum.AMENDED,
      ObservationStatusEnum.CORRECTED,
      ObservationStatusEnum.CANCELLED,
      ObservationStatusEnum.ENTERED_IN_ERROR,
      ObservationStatusEnum.UNKNOWN,
      ObservationStatusEnum.NULL
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
    } else if (ObservationStatusEnum.REGISTERED.code === code) {
      return ObservationStatusEnum.REGISTERED;
    } else if (ObservationStatusEnum.PRELIMINARY.code === code) {
      return ObservationStatusEnum.PRELIMINARY;
    } else if (ObservationStatusEnum.FINAL.code === code) {
      return ObservationStatusEnum.FINAL;
    } else if (ObservationStatusEnum.AMENDED.code === code) {
      return ObservationStatusEnum.AMENDED;
    } else if (ObservationStatusEnum.CORRECTED.code === code) {
      return ObservationStatusEnum.CORRECTED;
    } else if (ObservationStatusEnum.CANCELLED.code === code) {
      return ObservationStatusEnum.CANCELLED;
    } else if (ObservationStatusEnum.ENTERED_IN_ERROR.code === code) {
      return ObservationStatusEnum.ENTERED_IN_ERROR;
    } else if (ObservationStatusEnum.UNKNOWN.code === code) {
      return ObservationStatusEnum.UNKNOWN;
    } else if (ObservationStatusEnum.NULL.code === code) {
      return ObservationStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ObservationStatusEnum 'code' value '${code}'`);
    }
  }
}
