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
 * MedicationdispenseStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/CodeSystem/medicationdispense-status
 * CodeSystem.name: MedicationdispenseStatus
 * CodeSystem.description: Medication Dispense Status Codes
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
 * FHIR CodeSystem: MedicationdispenseStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MedicationdispenseStatus](http://hl7.org/fhir/CodeSystem/medicationdispense-status)
 */
export class MedicationdispenseStatusEnum implements IFhirCodeEnum {
  public static readonly PREPARATION = new FhirCodeDefinition(
    'PREPARATION',
    'preparation',
    'http://hl7.org/fhir/CodeSystem/medicationdispense-status',
    'Preparation',
    'The core event has not started yet, but some staging activities have begun (e.g. initial compounding or packaging of medication). Preparation stages may be tracked for billing purposes.',
  );
  public static readonly IN_PROGRESS = new FhirCodeDefinition(
    'IN_PROGRESS',
    'in-progress',
    'http://hl7.org/fhir/CodeSystem/medicationdispense-status',
    'In Progress',
    'The dispensed product is ready for pickup.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/CodeSystem/medicationdispense-status',
    'Cancelled',
    'The dispensed product was not and will never be picked up by the patient.',
  );
  public static readonly ON_HOLD = new FhirCodeDefinition(
    'ON_HOLD',
    'on-hold',
    'http://hl7.org/fhir/CodeSystem/medicationdispense-status',
    'On Hold',
    'The dispense process is paused while waiting for an external event to reactivate the dispense.  For example, new stock has arrived or the prescriber has called.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/CodeSystem/medicationdispense-status',
    'Completed',
    'The dispensed product has been picked up.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/CodeSystem/medicationdispense-status',
    'Entered in Error',
    'The dispense was entered in error and therefore nullified.',
  );
  public static readonly STOPPED = new FhirCodeDefinition(
    'STOPPED',
    'stopped',
    'http://hl7.org/fhir/CodeSystem/medicationdispense-status',
    'Stopped',
    'Actions implied by the dispense have been permanently halted, before all of them occurred.',
  );
  public static readonly DECLINED = new FhirCodeDefinition(
    'DECLINED',
    'declined',
    'http://hl7.org/fhir/CodeSystem/medicationdispense-status',
    'Declined',
    'The dispense was declined and not performed.',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/CodeSystem/medicationdispense-status',
    'Unknown',
    'The authoring system does not know which of the status values applies for this medication dispense.  Note: this concept is not to be used for other - one of the listed statuses is presumed to apply, it\'s just now known which one.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MedicationdispenseStatusEnum.PREPARATION,
      MedicationdispenseStatusEnum.IN_PROGRESS,
      MedicationdispenseStatusEnum.CANCELLED,
      MedicationdispenseStatusEnum.ON_HOLD,
      MedicationdispenseStatusEnum.COMPLETED,
      MedicationdispenseStatusEnum.ENTERED_IN_ERROR,
      MedicationdispenseStatusEnum.STOPPED,
      MedicationdispenseStatusEnum.DECLINED,
      MedicationdispenseStatusEnum.UNKNOWN,
      MedicationdispenseStatusEnum.NULL
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
    } else if (MedicationdispenseStatusEnum.PREPARATION.code === code) {
      return MedicationdispenseStatusEnum.PREPARATION;
    } else if (MedicationdispenseStatusEnum.IN_PROGRESS.code === code) {
      return MedicationdispenseStatusEnum.IN_PROGRESS;
    } else if (MedicationdispenseStatusEnum.CANCELLED.code === code) {
      return MedicationdispenseStatusEnum.CANCELLED;
    } else if (MedicationdispenseStatusEnum.ON_HOLD.code === code) {
      return MedicationdispenseStatusEnum.ON_HOLD;
    } else if (MedicationdispenseStatusEnum.COMPLETED.code === code) {
      return MedicationdispenseStatusEnum.COMPLETED;
    } else if (MedicationdispenseStatusEnum.ENTERED_IN_ERROR.code === code) {
      return MedicationdispenseStatusEnum.ENTERED_IN_ERROR;
    } else if (MedicationdispenseStatusEnum.STOPPED.code === code) {
      return MedicationdispenseStatusEnum.STOPPED;
    } else if (MedicationdispenseStatusEnum.DECLINED.code === code) {
      return MedicationdispenseStatusEnum.DECLINED;
    } else if (MedicationdispenseStatusEnum.UNKNOWN.code === code) {
      return MedicationdispenseStatusEnum.UNKNOWN;
    } else if (MedicationdispenseStatusEnum.NULL.code === code) {
      return MedicationdispenseStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MedicationdispenseStatusEnum 'code' value '${code}'`);
    }
  }
}
