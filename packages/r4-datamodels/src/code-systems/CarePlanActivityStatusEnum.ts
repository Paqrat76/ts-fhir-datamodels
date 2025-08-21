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
 * CarePlanActivityStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/care-plan-activity-status
 * CodeSystem.name: CarePlanActivityStatus
 * CodeSystem.description: Codes that reflect the current state of a care plan activity within its overall life cycle.
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
 * FHIR CodeSystem: CarePlanActivityStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem CarePlanActivityStatus](http://hl7.org/fhir/care-plan-activity-status)
 */
export class CarePlanActivityStatusEnum implements IFhirCodeEnum {
  public static readonly NOT_STARTED = new FhirCodeDefinition(
    'NOT_STARTED',
    'not-started',
    'http://hl7.org/fhir/care-plan-activity-status',
    'Not Started',
    'Care plan activity is planned but no action has yet been taken.',
  );
  public static readonly SCHEDULED = new FhirCodeDefinition(
    'SCHEDULED',
    'scheduled',
    'http://hl7.org/fhir/care-plan-activity-status',
    'Scheduled',
    'Appointment or other booking has occurred but activity has not yet begun.',
  );
  public static readonly IN_PROGRESS = new FhirCodeDefinition(
    'IN_PROGRESS',
    'in-progress',
    'http://hl7.org/fhir/care-plan-activity-status',
    'In Progress',
    'Care plan activity has been started but is not yet complete.',
  );
  public static readonly ON_HOLD = new FhirCodeDefinition(
    'ON_HOLD',
    'on-hold',
    'http://hl7.org/fhir/care-plan-activity-status',
    'On Hold',
    'Care plan activity was started but has temporarily ceased with an expectation of resumption at a future time.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/care-plan-activity-status',
    'Completed',
    'Care plan activity has been completed (more or less) as planned.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/care-plan-activity-status',
    'Cancelled',
    'The planned care plan activity has been withdrawn.',
  );
  public static readonly STOPPED = new FhirCodeDefinition(
    'STOPPED',
    'stopped',
    'http://hl7.org/fhir/care-plan-activity-status',
    'Stopped',
    'The planned care plan activity has been ended prior to completion after the activity was started.',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/care-plan-activity-status',
    'Unknown',
    'The current state of the care plan activity is not known.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which one.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/care-plan-activity-status',
    'Entered in Error',
    'Care plan activity was entered in error and voided.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      CarePlanActivityStatusEnum.NOT_STARTED,
      CarePlanActivityStatusEnum.SCHEDULED,
      CarePlanActivityStatusEnum.IN_PROGRESS,
      CarePlanActivityStatusEnum.ON_HOLD,
      CarePlanActivityStatusEnum.COMPLETED,
      CarePlanActivityStatusEnum.CANCELLED,
      CarePlanActivityStatusEnum.STOPPED,
      CarePlanActivityStatusEnum.UNKNOWN,
      CarePlanActivityStatusEnum.ENTERED_IN_ERROR,
      CarePlanActivityStatusEnum.NULL
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
    } else if (CarePlanActivityStatusEnum.NOT_STARTED.code === code) {
      return CarePlanActivityStatusEnum.NOT_STARTED;
    } else if (CarePlanActivityStatusEnum.SCHEDULED.code === code) {
      return CarePlanActivityStatusEnum.SCHEDULED;
    } else if (CarePlanActivityStatusEnum.IN_PROGRESS.code === code) {
      return CarePlanActivityStatusEnum.IN_PROGRESS;
    } else if (CarePlanActivityStatusEnum.ON_HOLD.code === code) {
      return CarePlanActivityStatusEnum.ON_HOLD;
    } else if (CarePlanActivityStatusEnum.COMPLETED.code === code) {
      return CarePlanActivityStatusEnum.COMPLETED;
    } else if (CarePlanActivityStatusEnum.CANCELLED.code === code) {
      return CarePlanActivityStatusEnum.CANCELLED;
    } else if (CarePlanActivityStatusEnum.STOPPED.code === code) {
      return CarePlanActivityStatusEnum.STOPPED;
    } else if (CarePlanActivityStatusEnum.UNKNOWN.code === code) {
      return CarePlanActivityStatusEnum.UNKNOWN;
    } else if (CarePlanActivityStatusEnum.ENTERED_IN_ERROR.code === code) {
      return CarePlanActivityStatusEnum.ENTERED_IN_ERROR;
    } else if (CarePlanActivityStatusEnum.NULL.code === code) {
      return CarePlanActivityStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown CarePlanActivityStatusEnum 'code' value '${code}'`);
    }
  }
}
