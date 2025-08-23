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
 * AppointmentstatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/appointmentstatus
 * CodeSystem.name: Appointmentstatus
 * CodeSystem.description: The free/busy status of an appointment.
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
 * FHIR CodeSystem: AppointmentstatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem Appointmentstatus](http://hl7.org/fhir/appointmentstatus)
 */
export class AppointmentstatusEnum implements IFhirCodeEnum {
  public static readonly PROPOSED = new FhirCodeDefinition(
    'PROPOSED',
    'proposed',
    'http://hl7.org/fhir/appointmentstatus',
    'Proposed',
    'None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time might not be set yet.',
  );
  public static readonly PENDING = new FhirCodeDefinition(
    'PENDING',
    'pending',
    'http://hl7.org/fhir/appointmentstatus',
    'Pending',
    'Some or all of the participant(s) have not finalized their acceptance of the appointment request.',
  );
  public static readonly BOOKED = new FhirCodeDefinition(
    'BOOKED',
    'booked',
    'http://hl7.org/fhir/appointmentstatus',
    'Booked',
    'All participant(s) have been considered and the appointment is confirmed to go ahead at the date/times specified.',
  );
  public static readonly ARRIVED = new FhirCodeDefinition(
    'ARRIVED',
    'arrived',
    'http://hl7.org/fhir/appointmentstatus',
    'Arrived',
    'The patient/patients has/have arrived and is/are waiting to be seen.',
  );
  public static readonly FULFILLED = new FhirCodeDefinition(
    'FULFILLED',
    'fulfilled',
    'http://hl7.org/fhir/appointmentstatus',
    'Fulfilled',
    'The planning stages of the appointment are now complete, the encounter resource will exist and will track further status changes. Note that an encounter may exist before the appointment status is fulfilled for many reasons.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/appointmentstatus',
    'Cancelled',
    'The appointment has been cancelled.',
  );
  public static readonly NOSHOW = new FhirCodeDefinition(
    'NOSHOW',
    'noshow',
    'http://hl7.org/fhir/appointmentstatus',
    'No Show',
    'Some or all of the participant(s) have not/did not appear for the appointment (usually the patient).',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/appointmentstatus',
    'Entered in error',
    'This instance should not have been part of this patient\'s medical record.',
  );
  public static readonly CHECKED_IN = new FhirCodeDefinition(
    'CHECKED_IN',
    'checked-in',
    'http://hl7.org/fhir/appointmentstatus',
    'Checked In',
    'When checked in, all pre-encounter administrative work is complete, and the encounter may begin. (where multiple patients are involved, they are all present).',
  );
  public static readonly WAITLIST = new FhirCodeDefinition(
    'WAITLIST',
    'waitlist',
    'http://hl7.org/fhir/appointmentstatus',
    'Waitlisted',
    'The appointment has been placed on a waitlist, to be scheduled/confirmed in the future when a slot/service is available. A specific time might or might not be pre-allocated.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      AppointmentstatusEnum.PROPOSED,
      AppointmentstatusEnum.PENDING,
      AppointmentstatusEnum.BOOKED,
      AppointmentstatusEnum.ARRIVED,
      AppointmentstatusEnum.FULFILLED,
      AppointmentstatusEnum.CANCELLED,
      AppointmentstatusEnum.NOSHOW,
      AppointmentstatusEnum.ENTERED_IN_ERROR,
      AppointmentstatusEnum.CHECKED_IN,
      AppointmentstatusEnum.WAITLIST,
      AppointmentstatusEnum.NULL
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
    } else if (AppointmentstatusEnum.PROPOSED.code === code) {
      return AppointmentstatusEnum.PROPOSED;
    } else if (AppointmentstatusEnum.PENDING.code === code) {
      return AppointmentstatusEnum.PENDING;
    } else if (AppointmentstatusEnum.BOOKED.code === code) {
      return AppointmentstatusEnum.BOOKED;
    } else if (AppointmentstatusEnum.ARRIVED.code === code) {
      return AppointmentstatusEnum.ARRIVED;
    } else if (AppointmentstatusEnum.FULFILLED.code === code) {
      return AppointmentstatusEnum.FULFILLED;
    } else if (AppointmentstatusEnum.CANCELLED.code === code) {
      return AppointmentstatusEnum.CANCELLED;
    } else if (AppointmentstatusEnum.NOSHOW.code === code) {
      return AppointmentstatusEnum.NOSHOW;
    } else if (AppointmentstatusEnum.ENTERED_IN_ERROR.code === code) {
      return AppointmentstatusEnum.ENTERED_IN_ERROR;
    } else if (AppointmentstatusEnum.CHECKED_IN.code === code) {
      return AppointmentstatusEnum.CHECKED_IN;
    } else if (AppointmentstatusEnum.WAITLIST.code === code) {
      return AppointmentstatusEnum.WAITLIST;
    } else if (AppointmentstatusEnum.NULL.code === code) {
      return AppointmentstatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown AppointmentstatusEnum 'code' value '${code}'`);
    }
  }
}
