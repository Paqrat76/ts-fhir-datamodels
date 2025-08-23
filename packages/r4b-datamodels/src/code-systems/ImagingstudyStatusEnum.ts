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
 * ImagingstudyStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/imagingstudy-status
 * CodeSystem.name: ImagingstudyStatus
 * CodeSystem.description: The status of the ImagingStudy.
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
 * FHIR CodeSystem: ImagingstudyStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ImagingstudyStatus](http://hl7.org/fhir/imagingstudy-status)
 */
export class ImagingstudyStatusEnum implements IFhirCodeEnum {
  public static readonly REGISTERED = new FhirCodeDefinition(
    'REGISTERED',
    'registered',
    'http://hl7.org/fhir/imagingstudy-status',
    'Registered',
    'The existence of the imaging study is registered, but there is nothing yet available.',
  );
  public static readonly AVAILABLE = new FhirCodeDefinition(
    'AVAILABLE',
    'available',
    'http://hl7.org/fhir/imagingstudy-status',
    'Available',
    'At least one instance has been associated with this imaging study.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/imagingstudy-status',
    'Cancelled',
    'The imaging study is unavailable because the imaging study was not started or not completed (also sometimes called "aborted").',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/imagingstudy-status',
    'Entered in Error',
    'The imaging study has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/imagingstudy-status',
    'Unknown',
    'The system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it\'s just not known which one.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ImagingstudyStatusEnum.REGISTERED,
      ImagingstudyStatusEnum.AVAILABLE,
      ImagingstudyStatusEnum.CANCELLED,
      ImagingstudyStatusEnum.ENTERED_IN_ERROR,
      ImagingstudyStatusEnum.UNKNOWN,
      ImagingstudyStatusEnum.NULL
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
    } else if (ImagingstudyStatusEnum.REGISTERED.code === code) {
      return ImagingstudyStatusEnum.REGISTERED;
    } else if (ImagingstudyStatusEnum.AVAILABLE.code === code) {
      return ImagingstudyStatusEnum.AVAILABLE;
    } else if (ImagingstudyStatusEnum.CANCELLED.code === code) {
      return ImagingstudyStatusEnum.CANCELLED;
    } else if (ImagingstudyStatusEnum.ENTERED_IN_ERROR.code === code) {
      return ImagingstudyStatusEnum.ENTERED_IN_ERROR;
    } else if (ImagingstudyStatusEnum.UNKNOWN.code === code) {
      return ImagingstudyStatusEnum.UNKNOWN;
    } else if (ImagingstudyStatusEnum.NULL.code === code) {
      return ImagingstudyStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ImagingstudyStatusEnum 'code' value '${code}'`);
    }
  }
}
