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
 * MedicationStatementStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/CodeSystem/medication-statement-status
 * CodeSystem.name: MedicationStatementStatus
 * CodeSystem.description: "description not provided"
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
 * FHIR CodeSystem: MedicationStatementStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MedicationStatementStatus](http://hl7.org/fhir/CodeSystem/medication-statement-status)
 */
export class MedicationStatementStatusEnum implements IFhirCodeEnum {
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/CodeSystem/medication-statement-status',
    'Active',
    'The medication is still being taken.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/CodeSystem/medication-statement-status',
    'Completed',
    'The medication is no longer being taken.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/CodeSystem/medication-statement-status',
    'Entered in Error',
    'Some of the actions that are implied by the medication statement may have occurred.  For example, the patient may have taken some of the medication.  Clinical decision support systems should take this status into account.',
  );
  public static readonly INTENDED = new FhirCodeDefinition(
    'INTENDED',
    'intended',
    'http://hl7.org/fhir/CodeSystem/medication-statement-status',
    'Intended',
    'The medication may be taken at some time in the future.',
  );
  public static readonly STOPPED = new FhirCodeDefinition(
    'STOPPED',
    'stopped',
    'http://hl7.org/fhir/CodeSystem/medication-statement-status',
    'Stopped',
    'Actions implied by the statement have been permanently halted, before all of them occurred. This should not be used if the statement was entered in error.',
  );
  public static readonly ON_HOLD = new FhirCodeDefinition(
    'ON_HOLD',
    'on-hold',
    'http://hl7.org/fhir/CodeSystem/medication-statement-status',
    'On Hold',
    'Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called \'suspended\'.',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/CodeSystem/medication-statement-status',
    'Unknown',
    'The state of the medication use is not currently known.',
  );
  public static readonly NOT_TAKEN = new FhirCodeDefinition(
    'NOT_TAKEN',
    'not-taken',
    'http://hl7.org/fhir/CodeSystem/medication-statement-status',
    'Not Taken',
    'The medication was not consumed by the patient',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MedicationStatementStatusEnum.ACTIVE,
      MedicationStatementStatusEnum.COMPLETED,
      MedicationStatementStatusEnum.ENTERED_IN_ERROR,
      MedicationStatementStatusEnum.INTENDED,
      MedicationStatementStatusEnum.STOPPED,
      MedicationStatementStatusEnum.ON_HOLD,
      MedicationStatementStatusEnum.UNKNOWN,
      MedicationStatementStatusEnum.NOT_TAKEN,
      MedicationStatementStatusEnum.NULL
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
    } else if (MedicationStatementStatusEnum.ACTIVE.code === code) {
      return MedicationStatementStatusEnum.ACTIVE;
    } else if (MedicationStatementStatusEnum.COMPLETED.code === code) {
      return MedicationStatementStatusEnum.COMPLETED;
    } else if (MedicationStatementStatusEnum.ENTERED_IN_ERROR.code === code) {
      return MedicationStatementStatusEnum.ENTERED_IN_ERROR;
    } else if (MedicationStatementStatusEnum.INTENDED.code === code) {
      return MedicationStatementStatusEnum.INTENDED;
    } else if (MedicationStatementStatusEnum.STOPPED.code === code) {
      return MedicationStatementStatusEnum.STOPPED;
    } else if (MedicationStatementStatusEnum.ON_HOLD.code === code) {
      return MedicationStatementStatusEnum.ON_HOLD;
    } else if (MedicationStatementStatusEnum.UNKNOWN.code === code) {
      return MedicationStatementStatusEnum.UNKNOWN;
    } else if (MedicationStatementStatusEnum.NOT_TAKEN.code === code) {
      return MedicationStatementStatusEnum.NOT_TAKEN;
    } else if (MedicationStatementStatusEnum.NULL.code === code) {
      return MedicationStatementStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MedicationStatementStatusEnum 'code' value '${code}'`);
    }
  }
}
