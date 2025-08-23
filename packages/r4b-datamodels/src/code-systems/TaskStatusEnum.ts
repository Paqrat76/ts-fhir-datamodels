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
 * TaskStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/task-status
 * CodeSystem.name: TaskStatus
 * CodeSystem.description: The current status of the task.
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
 * FHIR CodeSystem: TaskStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem TaskStatus](http://hl7.org/fhir/task-status)
 */
export class TaskStatusEnum implements IFhirCodeEnum {
  public static readonly DRAFT = new FhirCodeDefinition(
    'DRAFT',
    'draft',
    'http://hl7.org/fhir/task-status',
    'Draft',
    'The task is not yet ready to be acted upon.',
  );
  public static readonly REQUESTED = new FhirCodeDefinition(
    'REQUESTED',
    'requested',
    'http://hl7.org/fhir/task-status',
    'Requested',
    'The task is ready to be acted upon and action is sought.',
  );
  public static readonly RECEIVED = new FhirCodeDefinition(
    'RECEIVED',
    'received',
    'http://hl7.org/fhir/task-status',
    'Received',
    'A potential performer has claimed ownership of the task and is evaluating whether to perform it.',
  );
  public static readonly ACCEPTED = new FhirCodeDefinition(
    'ACCEPTED',
    'accepted',
    'http://hl7.org/fhir/task-status',
    'Accepted',
    'The potential performer has agreed to execute the task but has not yet started work.',
  );
  public static readonly REJECTED = new FhirCodeDefinition(
    'REJECTED',
    'rejected',
    'http://hl7.org/fhir/task-status',
    'Rejected',
    'The potential performer who claimed ownership of the task has decided not to execute it prior to performing any action.',
  );
  public static readonly READY = new FhirCodeDefinition(
    'READY',
    'ready',
    'http://hl7.org/fhir/task-status',
    'Ready',
    'The task is ready to be performed, but no action has yet been taken.  Used in place of requested/received/accepted/rejected when request assignment and acceptance is a given.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/task-status',
    'Cancelled',
    'The task was not completed.',
  );
  public static readonly IN_PROGRESS = new FhirCodeDefinition(
    'IN_PROGRESS',
    'in-progress',
    'http://hl7.org/fhir/task-status',
    'In Progress',
    'The task has been started but is not yet complete.',
  );
  public static readonly ON_HOLD = new FhirCodeDefinition(
    'ON_HOLD',
    'on-hold',
    'http://hl7.org/fhir/task-status',
    'On Hold',
    'The task has been started but work has been paused.',
  );
  public static readonly FAILED = new FhirCodeDefinition(
    'FAILED',
    'failed',
    'http://hl7.org/fhir/task-status',
    'Failed',
    'The task was attempted but could not be completed due to some error.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/task-status',
    'Completed',
    'The task has been completed.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/task-status',
    'Entered in Error',
    'The task should never have existed and is retained only because of the possibility it may have used.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      TaskStatusEnum.DRAFT,
      TaskStatusEnum.REQUESTED,
      TaskStatusEnum.RECEIVED,
      TaskStatusEnum.ACCEPTED,
      TaskStatusEnum.REJECTED,
      TaskStatusEnum.READY,
      TaskStatusEnum.CANCELLED,
      TaskStatusEnum.IN_PROGRESS,
      TaskStatusEnum.ON_HOLD,
      TaskStatusEnum.FAILED,
      TaskStatusEnum.COMPLETED,
      TaskStatusEnum.ENTERED_IN_ERROR,
      TaskStatusEnum.NULL
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
    } else if (TaskStatusEnum.DRAFT.code === code) {
      return TaskStatusEnum.DRAFT;
    } else if (TaskStatusEnum.REQUESTED.code === code) {
      return TaskStatusEnum.REQUESTED;
    } else if (TaskStatusEnum.RECEIVED.code === code) {
      return TaskStatusEnum.RECEIVED;
    } else if (TaskStatusEnum.ACCEPTED.code === code) {
      return TaskStatusEnum.ACCEPTED;
    } else if (TaskStatusEnum.REJECTED.code === code) {
      return TaskStatusEnum.REJECTED;
    } else if (TaskStatusEnum.READY.code === code) {
      return TaskStatusEnum.READY;
    } else if (TaskStatusEnum.CANCELLED.code === code) {
      return TaskStatusEnum.CANCELLED;
    } else if (TaskStatusEnum.IN_PROGRESS.code === code) {
      return TaskStatusEnum.IN_PROGRESS;
    } else if (TaskStatusEnum.ON_HOLD.code === code) {
      return TaskStatusEnum.ON_HOLD;
    } else if (TaskStatusEnum.FAILED.code === code) {
      return TaskStatusEnum.FAILED;
    } else if (TaskStatusEnum.COMPLETED.code === code) {
      return TaskStatusEnum.COMPLETED;
    } else if (TaskStatusEnum.ENTERED_IN_ERROR.code === code) {
      return TaskStatusEnum.ENTERED_IN_ERROR;
    } else if (TaskStatusEnum.NULL.code === code) {
      return TaskStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown TaskStatusEnum 'code' value '${code}'`);
    }
  }
}
