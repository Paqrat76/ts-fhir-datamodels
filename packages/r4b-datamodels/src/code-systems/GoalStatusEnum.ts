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
 * GoalStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/goal-status
 * CodeSystem.name: GoalStatus
 * CodeSystem.description: Codes that reflect the current state of a goal and whether the goal is still being targeted.
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
 * FHIR CodeSystem: GoalStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem GoalStatus](http://hl7.org/fhir/goal-status)
 */
export class GoalStatusEnum implements IFhirCodeEnum {
  public static readonly PROPOSED = new FhirCodeDefinition(
    'PROPOSED',
    'proposed',
    'http://hl7.org/fhir/goal-status',
    'Proposed',
    'A goal is proposed for this patient.',
  );
  public static readonly PLANNED = new FhirCodeDefinition(
    'PLANNED',
    'planned',
    'http://hl7.org/fhir/goal-status',
    'Planned',
    'A goal is planned for this patient.',
  );
  public static readonly ACCEPTED = new FhirCodeDefinition(
    'ACCEPTED',
    'accepted',
    'http://hl7.org/fhir/goal-status',
    'Accepted',
    'A proposed goal was accepted or acknowledged.',
  );
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/goal-status',
    'Active',
    'The goal is being sought actively.',
  );
  public static readonly ON_HOLD = new FhirCodeDefinition(
    'ON_HOLD',
    'on-hold',
    'http://hl7.org/fhir/goal-status',
    'On Hold',
    'The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/goal-status',
    'Completed',
    'The goal is no longer being sought.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/goal-status',
    'Cancelled',
    'The goal has been abandoned.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/goal-status',
    'Entered in Error',
    'The goal was entered in error and voided.',
  );
  public static readonly REJECTED = new FhirCodeDefinition(
    'REJECTED',
    'rejected',
    'http://hl7.org/fhir/goal-status',
    'Rejected',
    'A proposed goal was rejected.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      GoalStatusEnum.PROPOSED,
      GoalStatusEnum.PLANNED,
      GoalStatusEnum.ACCEPTED,
      GoalStatusEnum.ACTIVE,
      GoalStatusEnum.ON_HOLD,
      GoalStatusEnum.COMPLETED,
      GoalStatusEnum.CANCELLED,
      GoalStatusEnum.ENTERED_IN_ERROR,
      GoalStatusEnum.REJECTED,
      GoalStatusEnum.NULL
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
    } else if (GoalStatusEnum.PROPOSED.code === code) {
      return GoalStatusEnum.PROPOSED;
    } else if (GoalStatusEnum.PLANNED.code === code) {
      return GoalStatusEnum.PLANNED;
    } else if (GoalStatusEnum.ACCEPTED.code === code) {
      return GoalStatusEnum.ACCEPTED;
    } else if (GoalStatusEnum.ACTIVE.code === code) {
      return GoalStatusEnum.ACTIVE;
    } else if (GoalStatusEnum.ON_HOLD.code === code) {
      return GoalStatusEnum.ON_HOLD;
    } else if (GoalStatusEnum.COMPLETED.code === code) {
      return GoalStatusEnum.COMPLETED;
    } else if (GoalStatusEnum.CANCELLED.code === code) {
      return GoalStatusEnum.CANCELLED;
    } else if (GoalStatusEnum.ENTERED_IN_ERROR.code === code) {
      return GoalStatusEnum.ENTERED_IN_ERROR;
    } else if (GoalStatusEnum.REJECTED.code === code) {
      return GoalStatusEnum.REJECTED;
    } else if (GoalStatusEnum.NULL.code === code) {
      return GoalStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown GoalStatusEnum 'code' value '${code}'`);
    }
  }
}
