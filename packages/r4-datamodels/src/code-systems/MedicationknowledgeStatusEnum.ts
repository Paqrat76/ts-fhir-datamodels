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
 * MedicationknowledgeStatusEnum Module
 *
 * CodeSystem.url: http://terminology.hl7.org/CodeSystem/medicationknowledge-status
 * CodeSystem.name: MedicationknowledgeStatus
 * CodeSystem.description: MedicationKnowledge Status Codes
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
 * FHIR CodeSystem: MedicationknowledgeStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MedicationknowledgeStatus](http://terminology.hl7.org/CodeSystem/medicationknowledge-status)
 */
export class MedicationknowledgeStatusEnum implements IFhirCodeEnum {
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://terminology.hl7.org/CodeSystem/medicationknowledge-status',
    'Active',
    'The medication is available for use.',
  );
  public static readonly INACTIVE = new FhirCodeDefinition(
    'INACTIVE',
    'inactive',
    'http://terminology.hl7.org/CodeSystem/medicationknowledge-status',
    'Inactive',
    'The medication is not available for use.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://terminology.hl7.org/CodeSystem/medicationknowledge-status',
    'Entered in Error',
    'The medication was entered in error.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MedicationknowledgeStatusEnum.ACTIVE,
      MedicationknowledgeStatusEnum.INACTIVE,
      MedicationknowledgeStatusEnum.ENTERED_IN_ERROR,
      MedicationknowledgeStatusEnum.NULL
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
    } else if (MedicationknowledgeStatusEnum.ACTIVE.code === code) {
      return MedicationknowledgeStatusEnum.ACTIVE;
    } else if (MedicationknowledgeStatusEnum.INACTIVE.code === code) {
      return MedicationknowledgeStatusEnum.INACTIVE;
    } else if (MedicationknowledgeStatusEnum.ENTERED_IN_ERROR.code === code) {
      return MedicationknowledgeStatusEnum.ENTERED_IN_ERROR;
    } else if (MedicationknowledgeStatusEnum.NULL.code === code) {
      return MedicationknowledgeStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MedicationknowledgeStatusEnum 'code' value '${code}'`);
    }
  }
}
