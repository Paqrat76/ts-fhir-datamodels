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
 * EventStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/event-status
 * CodeSystem.name: EventStatus
 * CodeSystem.description: Codes identifying the lifecycle stage of an event.
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
 * FHIR CodeSystem: EventStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem EventStatus](http://hl7.org/fhir/event-status)
 */
export class EventStatusEnum implements IFhirCodeEnum {
  public static readonly PREPARATION = new FhirCodeDefinition(
    'PREPARATION',
    'preparation',
    'http://hl7.org/fhir/event-status',
    'Preparation',
    'The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.',
  );
  public static readonly IN_PROGRESS = new FhirCodeDefinition(
    'IN_PROGRESS',
    'in-progress',
    'http://hl7.org/fhir/event-status',
    'In Progress',
    'The event is currently occurring.',
  );
  public static readonly NOT_DONE = new FhirCodeDefinition(
    'NOT_DONE',
    'not-done',
    'http://hl7.org/fhir/event-status',
    'Not Done',
    'The event was terminated prior to any activity beyond preparation.  I.e. The \'main\' activity has not yet begun.  The boundary between preparatory and the \'main\' activity is context-specific.',
  );
  public static readonly ON_HOLD = new FhirCodeDefinition(
    'ON_HOLD',
    'on-hold',
    'http://hl7.org/fhir/event-status',
    'On Hold',
    'The event has been temporarily stopped but is expected to resume in the future.',
  );
  public static readonly STOPPED = new FhirCodeDefinition(
    'STOPPED',
    'stopped',
    'http://hl7.org/fhir/event-status',
    'Stopped',
    'The event was terminated prior to the full completion of the intended activity but after at least some of the \'main\' activity (beyond preparation) has occurred.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/event-status',
    'Completed',
    'The event has now concluded.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/event-status',
    'Entered in Error',
    'This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/event-status',
    'Unknown',
    'The authoring/source system does not know which of the status values currently applies for this event.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      EventStatusEnum.PREPARATION,
      EventStatusEnum.IN_PROGRESS,
      EventStatusEnum.NOT_DONE,
      EventStatusEnum.ON_HOLD,
      EventStatusEnum.STOPPED,
      EventStatusEnum.COMPLETED,
      EventStatusEnum.ENTERED_IN_ERROR,
      EventStatusEnum.UNKNOWN,
      EventStatusEnum.NULL
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
    } else if (EventStatusEnum.PREPARATION.code === code) {
      return EventStatusEnum.PREPARATION;
    } else if (EventStatusEnum.IN_PROGRESS.code === code) {
      return EventStatusEnum.IN_PROGRESS;
    } else if (EventStatusEnum.NOT_DONE.code === code) {
      return EventStatusEnum.NOT_DONE;
    } else if (EventStatusEnum.ON_HOLD.code === code) {
      return EventStatusEnum.ON_HOLD;
    } else if (EventStatusEnum.STOPPED.code === code) {
      return EventStatusEnum.STOPPED;
    } else if (EventStatusEnum.COMPLETED.code === code) {
      return EventStatusEnum.COMPLETED;
    } else if (EventStatusEnum.ENTERED_IN_ERROR.code === code) {
      return EventStatusEnum.ENTERED_IN_ERROR;
    } else if (EventStatusEnum.UNKNOWN.code === code) {
      return EventStatusEnum.UNKNOWN;
    } else if (EventStatusEnum.NULL.code === code) {
      return EventStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown EventStatusEnum 'code' value '${code}'`);
    }
  }
}
