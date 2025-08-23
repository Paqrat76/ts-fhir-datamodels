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
 * EncounterStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/encounter-status
 * CodeSystem.name: EncounterStatus
 * CodeSystem.description: Current state of the encounter.
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
 * FHIR CodeSystem: EncounterStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem EncounterStatus](http://hl7.org/fhir/encounter-status)
 */
export class EncounterStatusEnum implements IFhirCodeEnum {
  public static readonly PLANNED = new FhirCodeDefinition(
    'PLANNED',
    'planned',
    'http://hl7.org/fhir/encounter-status',
    'Planned',
    'The Encounter has not yet started.',
  );
  public static readonly IN_PROGRESS = new FhirCodeDefinition(
    'IN_PROGRESS',
    'in-progress',
    'http://hl7.org/fhir/encounter-status',
    'In Progress',
    'The Encounter has begun and the patient is present / the practitioner and the patient are meeting.',
  );
  public static readonly ON_HOLD = new FhirCodeDefinition(
    'ON_HOLD',
    'on-hold',
    'http://hl7.org/fhir/encounter-status',
    'On Hold',
    'The Encounter has begun, but is currently on hold, e.g. because the patient is temporarily on leave.',
  );
  public static readonly DISCHARGED = new FhirCodeDefinition(
    'DISCHARGED',
    'discharged',
    'http://hl7.org/fhir/encounter-status',
    'Discharged',
    'The Encounter has been clinically completed, the patient has been discharged from the facility or the visit has ended, and the patient may have departed (refer to subjectStatus). While the encounter is in this status, administrative activities are usually performed, collating all required documentation and charge information before being released for billing, at which point the status will move to completed.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/encounter-status',
    'Completed',
    'The Encounter has ended.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/encounter-status',
    'Cancelled',
    'The Encounter has ended before it has begun.',
  );
  public static readonly DISCONTINUED = new FhirCodeDefinition(
    'DISCONTINUED',
    'discontinued',
    'http://hl7.org/fhir/encounter-status',
    'Discontinued',
    'The Encounter has started, but was not able to be completed. Further action may need to be performed, such as rescheduling appointments related to this encounter.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/encounter-status',
    'Entered in Error',
    'This instance should not have been part of this patient\'s medical record.',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/encounter-status',
    'Unknown',
    'The encounter status is unknown. Note that "unknown" is a value of last resort and every attempt should be made to provide a meaningful value other than "unknown".',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      EncounterStatusEnum.PLANNED,
      EncounterStatusEnum.IN_PROGRESS,
      EncounterStatusEnum.ON_HOLD,
      EncounterStatusEnum.DISCHARGED,
      EncounterStatusEnum.COMPLETED,
      EncounterStatusEnum.CANCELLED,
      EncounterStatusEnum.DISCONTINUED,
      EncounterStatusEnum.ENTERED_IN_ERROR,
      EncounterStatusEnum.UNKNOWN,
      EncounterStatusEnum.NULL
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
    } else if (EncounterStatusEnum.PLANNED.code === code) {
      return EncounterStatusEnum.PLANNED;
    } else if (EncounterStatusEnum.IN_PROGRESS.code === code) {
      return EncounterStatusEnum.IN_PROGRESS;
    } else if (EncounterStatusEnum.ON_HOLD.code === code) {
      return EncounterStatusEnum.ON_HOLD;
    } else if (EncounterStatusEnum.DISCHARGED.code === code) {
      return EncounterStatusEnum.DISCHARGED;
    } else if (EncounterStatusEnum.COMPLETED.code === code) {
      return EncounterStatusEnum.COMPLETED;
    } else if (EncounterStatusEnum.CANCELLED.code === code) {
      return EncounterStatusEnum.CANCELLED;
    } else if (EncounterStatusEnum.DISCONTINUED.code === code) {
      return EncounterStatusEnum.DISCONTINUED;
    } else if (EncounterStatusEnum.ENTERED_IN_ERROR.code === code) {
      return EncounterStatusEnum.ENTERED_IN_ERROR;
    } else if (EncounterStatusEnum.UNKNOWN.code === code) {
      return EncounterStatusEnum.UNKNOWN;
    } else if (EncounterStatusEnum.NULL.code === code) {
      return EncounterStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown EncounterStatusEnum 'code' value '${code}'`);
    }
  }
}
