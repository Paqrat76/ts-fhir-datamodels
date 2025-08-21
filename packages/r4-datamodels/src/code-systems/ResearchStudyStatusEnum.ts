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
 * ResearchStudyStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/research-study-status
 * CodeSystem.name: ResearchStudyStatus
 * CodeSystem.description: Codes that convey the current status of the research study.
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
 * FHIR CodeSystem: ResearchStudyStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ResearchStudyStatus](http://hl7.org/fhir/research-study-status)
 */
export class ResearchStudyStatusEnum implements IFhirCodeEnum {
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/research-study-status',
    'Active',
    'Study is opened for accrual.',
  );
  public static readonly ADMINISTRATIVELY_COMPLETED = new FhirCodeDefinition(
    'ADMINISTRATIVELY_COMPLETED',
    'administratively-completed',
    'http://hl7.org/fhir/research-study-status',
    'Administratively Completed',
    'Study is completed prematurely and will not resume; patients are no longer examined nor treated.',
  );
  public static readonly APPROVED = new FhirCodeDefinition(
    'APPROVED',
    'approved',
    'http://hl7.org/fhir/research-study-status',
    'Approved',
    'Protocol is approved by the review board.',
  );
  public static readonly CLOSED_TO_ACCRUAL = new FhirCodeDefinition(
    'CLOSED_TO_ACCRUAL',
    'closed-to-accrual',
    'http://hl7.org/fhir/research-study-status',
    'Closed to Accrual',
    'Study is closed for accrual; patients can be examined and treated.',
  );
  public static readonly CLOSED_TO_ACCRUAL_AND_INTERVENTION = new FhirCodeDefinition(
    'CLOSED_TO_ACCRUAL_AND_INTERVENTION',
    'closed-to-accrual-and-intervention',
    'http://hl7.org/fhir/research-study-status',
    'Closed to Accrual and Intervention',
    'Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment or intervention but are still being followed according to the primary objective of the study.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/research-study-status',
    'Completed',
    'Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment or intervention but are still being followed according to the primary objective of the study.',
  );
  public static readonly DISAPPROVED = new FhirCodeDefinition(
    'DISAPPROVED',
    'disapproved',
    'http://hl7.org/fhir/research-study-status',
    'Disapproved',
    'Protocol was disapproved by the review board.',
  );
  public static readonly IN_REVIEW = new FhirCodeDefinition(
    'IN_REVIEW',
    'in-review',
    'http://hl7.org/fhir/research-study-status',
    'In Review',
    'Protocol is submitted to the review board for approval.',
  );
  public static readonly TEMPORARILY_CLOSED_TO_ACCRUAL = new FhirCodeDefinition(
    'TEMPORARILY_CLOSED_TO_ACCRUAL',
    'temporarily-closed-to-accrual',
    'http://hl7.org/fhir/research-study-status',
    'Temporarily Closed to Accrual',
    'Study is temporarily closed for accrual; can be potentially resumed in the future; patients can be examined and treated.',
  );
  public static readonly TEMPORARILY_CLOSED_TO_ACCRUAL_AND_INTERVENTION = new FhirCodeDefinition(
    'TEMPORARILY_CLOSED_TO_ACCRUAL_AND_INTERVENTION',
    'temporarily-closed-to-accrual-and-intervention',
    'http://hl7.org/fhir/research-study-status',
    'Temporarily Closed to Accrual and Intervention',
    'Study is temporarily closed for accrual and intervention and potentially can be resumed in the future.',
  );
  public static readonly WITHDRAWN = new FhirCodeDefinition(
    'WITHDRAWN',
    'withdrawn',
    'http://hl7.org/fhir/research-study-status',
    'Withdrawn',
    'Protocol was withdrawn by the lead organization.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ResearchStudyStatusEnum.ACTIVE,
      ResearchStudyStatusEnum.ADMINISTRATIVELY_COMPLETED,
      ResearchStudyStatusEnum.APPROVED,
      ResearchStudyStatusEnum.CLOSED_TO_ACCRUAL,
      ResearchStudyStatusEnum.CLOSED_TO_ACCRUAL_AND_INTERVENTION,
      ResearchStudyStatusEnum.COMPLETED,
      ResearchStudyStatusEnum.DISAPPROVED,
      ResearchStudyStatusEnum.IN_REVIEW,
      ResearchStudyStatusEnum.TEMPORARILY_CLOSED_TO_ACCRUAL,
      ResearchStudyStatusEnum.TEMPORARILY_CLOSED_TO_ACCRUAL_AND_INTERVENTION,
      ResearchStudyStatusEnum.WITHDRAWN,
      ResearchStudyStatusEnum.NULL
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
    } else if (ResearchStudyStatusEnum.ACTIVE.code === code) {
      return ResearchStudyStatusEnum.ACTIVE;
    } else if (ResearchStudyStatusEnum.ADMINISTRATIVELY_COMPLETED.code === code) {
      return ResearchStudyStatusEnum.ADMINISTRATIVELY_COMPLETED;
    } else if (ResearchStudyStatusEnum.APPROVED.code === code) {
      return ResearchStudyStatusEnum.APPROVED;
    } else if (ResearchStudyStatusEnum.CLOSED_TO_ACCRUAL.code === code) {
      return ResearchStudyStatusEnum.CLOSED_TO_ACCRUAL;
    } else if (ResearchStudyStatusEnum.CLOSED_TO_ACCRUAL_AND_INTERVENTION.code === code) {
      return ResearchStudyStatusEnum.CLOSED_TO_ACCRUAL_AND_INTERVENTION;
    } else if (ResearchStudyStatusEnum.COMPLETED.code === code) {
      return ResearchStudyStatusEnum.COMPLETED;
    } else if (ResearchStudyStatusEnum.DISAPPROVED.code === code) {
      return ResearchStudyStatusEnum.DISAPPROVED;
    } else if (ResearchStudyStatusEnum.IN_REVIEW.code === code) {
      return ResearchStudyStatusEnum.IN_REVIEW;
    } else if (ResearchStudyStatusEnum.TEMPORARILY_CLOSED_TO_ACCRUAL.code === code) {
      return ResearchStudyStatusEnum.TEMPORARILY_CLOSED_TO_ACCRUAL;
    } else if (ResearchStudyStatusEnum.TEMPORARILY_CLOSED_TO_ACCRUAL_AND_INTERVENTION.code === code) {
      return ResearchStudyStatusEnum.TEMPORARILY_CLOSED_TO_ACCRUAL_AND_INTERVENTION;
    } else if (ResearchStudyStatusEnum.WITHDRAWN.code === code) {
      return ResearchStudyStatusEnum.WITHDRAWN;
    } else if (ResearchStudyStatusEnum.NULL.code === code) {
      return ResearchStudyStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ResearchStudyStatusEnum 'code' value '${code}'`);
    }
  }
}
