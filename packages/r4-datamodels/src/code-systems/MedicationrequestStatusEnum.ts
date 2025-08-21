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
 * MedicationrequestStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/CodeSystem/medicationrequest-status
 * CodeSystem.name: MedicationrequestStatus
 * CodeSystem.description: MedicationRequest Status Codes
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
 * FHIR CodeSystem: MedicationrequestStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MedicationrequestStatus](http://hl7.org/fhir/CodeSystem/medicationrequest-status)
 */
export class MedicationrequestStatusEnum implements IFhirCodeEnum {
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-status',
    'Active',
    'The prescription is \'actionable\', but not all actions that are implied by it have occurred yet.',
  );
  public static readonly ON_HOLD = new FhirCodeDefinition(
    'ON_HOLD',
    'on-hold',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-status',
    'On Hold',
    'Actions implied by the prescription are to be temporarily halted, but are expected to continue later.  May also be called \'suspended\'.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-status',
    'Cancelled',
    'The prescription has been withdrawn before any administrations have occurred',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-status',
    'Completed',
    'All actions that are implied by the prescription have occurred.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-status',
    'Entered in Error',
    'Some of the actions that are implied by the medication request may have occurred.  For example, the medication may have been dispensed and the patient may have taken some of the medication.  Clinical decision support systems should take this status into account',
  );
  public static readonly STOPPED = new FhirCodeDefinition(
    'STOPPED',
    'stopped',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-status',
    'Stopped',
    'Actions implied by the prescription are to be permanently halted, before all of the administrations occurred. This should not be used if the original order was entered in error',
  );
  public static readonly DRAFT = new FhirCodeDefinition(
    'DRAFT',
    'draft',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-status',
    'Draft',
    'The prescription is not yet \'actionable\', e.g. it is a work in progress, requires sign-off, verification or needs to be run through decision support process.',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-status',
    'Unknown',
    'The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for \'other\' - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MedicationrequestStatusEnum.ACTIVE,
      MedicationrequestStatusEnum.ON_HOLD,
      MedicationrequestStatusEnum.CANCELLED,
      MedicationrequestStatusEnum.COMPLETED,
      MedicationrequestStatusEnum.ENTERED_IN_ERROR,
      MedicationrequestStatusEnum.STOPPED,
      MedicationrequestStatusEnum.DRAFT,
      MedicationrequestStatusEnum.UNKNOWN,
      MedicationrequestStatusEnum.NULL
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
    } else if (MedicationrequestStatusEnum.ACTIVE.code === code) {
      return MedicationrequestStatusEnum.ACTIVE;
    } else if (MedicationrequestStatusEnum.ON_HOLD.code === code) {
      return MedicationrequestStatusEnum.ON_HOLD;
    } else if (MedicationrequestStatusEnum.CANCELLED.code === code) {
      return MedicationrequestStatusEnum.CANCELLED;
    } else if (MedicationrequestStatusEnum.COMPLETED.code === code) {
      return MedicationrequestStatusEnum.COMPLETED;
    } else if (MedicationrequestStatusEnum.ENTERED_IN_ERROR.code === code) {
      return MedicationrequestStatusEnum.ENTERED_IN_ERROR;
    } else if (MedicationrequestStatusEnum.STOPPED.code === code) {
      return MedicationrequestStatusEnum.STOPPED;
    } else if (MedicationrequestStatusEnum.DRAFT.code === code) {
      return MedicationrequestStatusEnum.DRAFT;
    } else if (MedicationrequestStatusEnum.UNKNOWN.code === code) {
      return MedicationrequestStatusEnum.UNKNOWN;
    } else if (MedicationrequestStatusEnum.NULL.code === code) {
      return MedicationrequestStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MedicationrequestStatusEnum 'code' value '${code}'`);
    }
  }
}
