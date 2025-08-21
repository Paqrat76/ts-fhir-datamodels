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
 * MedicationAdminStatusEnum Module
 *
 * CodeSystem.url: http://terminology.hl7.org/CodeSystem/medication-admin-status
 * CodeSystem.name: MedicationAdminStatus
 * CodeSystem.description: MedicationAdministration Status Codes
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
 * FHIR CodeSystem: MedicationAdminStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MedicationAdminStatus](http://terminology.hl7.org/CodeSystem/medication-admin-status)
 */
export class MedicationAdminStatusEnum implements IFhirCodeEnum {
  public static readonly IN_PROGRESS = new FhirCodeDefinition(
    'IN_PROGRESS',
    'in-progress',
    'http://terminology.hl7.org/CodeSystem/medication-admin-status',
    'In Progress',
    'The administration has started but has not yet completed.',
  );
  public static readonly NOT_DONE = new FhirCodeDefinition(
    'NOT_DONE',
    'not-done',
    'http://terminology.hl7.org/CodeSystem/medication-admin-status',
    'Not Done',
    'The administration was terminated prior to any impact on the subject (though preparatory actions may have been taken)',
  );
  public static readonly ON_HOLD = new FhirCodeDefinition(
    'ON_HOLD',
    'on-hold',
    'http://terminology.hl7.org/CodeSystem/medication-admin-status',
    'On Hold',
    'Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called \'suspended\'.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://terminology.hl7.org/CodeSystem/medication-admin-status',
    'Completed',
    'All actions that are implied by the administration have occurred.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://terminology.hl7.org/CodeSystem/medication-admin-status',
    'Entered in Error',
    'The administration was entered in error and therefore nullified.',
  );
  public static readonly STOPPED = new FhirCodeDefinition(
    'STOPPED',
    'stopped',
    'http://terminology.hl7.org/CodeSystem/medication-admin-status',
    'Stopped',
    'Actions implied by the administration have been permanently halted, before all of them occurred.',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://terminology.hl7.org/CodeSystem/medication-admin-status',
    'Unknown',
    'The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for \'other\' - one of the listed statuses is presumed to apply, it\'s just not known which one.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MedicationAdminStatusEnum.IN_PROGRESS,
      MedicationAdminStatusEnum.NOT_DONE,
      MedicationAdminStatusEnum.ON_HOLD,
      MedicationAdminStatusEnum.COMPLETED,
      MedicationAdminStatusEnum.ENTERED_IN_ERROR,
      MedicationAdminStatusEnum.STOPPED,
      MedicationAdminStatusEnum.UNKNOWN,
      MedicationAdminStatusEnum.NULL
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
    } else if (MedicationAdminStatusEnum.IN_PROGRESS.code === code) {
      return MedicationAdminStatusEnum.IN_PROGRESS;
    } else if (MedicationAdminStatusEnum.NOT_DONE.code === code) {
      return MedicationAdminStatusEnum.NOT_DONE;
    } else if (MedicationAdminStatusEnum.ON_HOLD.code === code) {
      return MedicationAdminStatusEnum.ON_HOLD;
    } else if (MedicationAdminStatusEnum.COMPLETED.code === code) {
      return MedicationAdminStatusEnum.COMPLETED;
    } else if (MedicationAdminStatusEnum.ENTERED_IN_ERROR.code === code) {
      return MedicationAdminStatusEnum.ENTERED_IN_ERROR;
    } else if (MedicationAdminStatusEnum.STOPPED.code === code) {
      return MedicationAdminStatusEnum.STOPPED;
    } else if (MedicationAdminStatusEnum.UNKNOWN.code === code) {
      return MedicationAdminStatusEnum.UNKNOWN;
    } else if (MedicationAdminStatusEnum.NULL.code === code) {
      return MedicationAdminStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MedicationAdminStatusEnum 'code' value '${code}'`);
    }
  }
}
