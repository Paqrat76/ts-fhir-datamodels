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
 * QuestionnaireAnswersStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/questionnaire-answers-status
 * CodeSystem.name: QuestionnaireAnswersStatus
 * CodeSystem.description: Lifecycle status of the questionnaire response.
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
 * FHIR CodeSystem: QuestionnaireAnswersStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem QuestionnaireAnswersStatus](http://hl7.org/fhir/questionnaire-answers-status)
 */
export class QuestionnaireAnswersStatusEnum implements IFhirCodeEnum {
  public static readonly IN_PROGRESS = new FhirCodeDefinition(
    'IN_PROGRESS',
    'in-progress',
    'http://hl7.org/fhir/questionnaire-answers-status',
    'In Progress',
    'This QuestionnaireResponse has been partially filled out with answers but changes or additions are still expected to be made to it.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/questionnaire-answers-status',
    'Completed',
    'This QuestionnaireResponse has been filled out with answers and the current content is regarded as definitive.',
  );
  public static readonly AMENDED = new FhirCodeDefinition(
    'AMENDED',
    'amended',
    'http://hl7.org/fhir/questionnaire-answers-status',
    'Amended',
    'This QuestionnaireResponse has been filled out with answers, then marked as complete, yet changes or additions have been made to it afterwards.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/questionnaire-answers-status',
    'Entered in Error',
    'This QuestionnaireResponse was entered in error and voided.',
  );
  public static readonly STOPPED = new FhirCodeDefinition(
    'STOPPED',
    'stopped',
    'http://hl7.org/fhir/questionnaire-answers-status',
    'Stopped',
    'This QuestionnaireResponse has been partially filled out with answers but has been abandoned. No subsequent changes can be made.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      QuestionnaireAnswersStatusEnum.IN_PROGRESS,
      QuestionnaireAnswersStatusEnum.COMPLETED,
      QuestionnaireAnswersStatusEnum.AMENDED,
      QuestionnaireAnswersStatusEnum.ENTERED_IN_ERROR,
      QuestionnaireAnswersStatusEnum.STOPPED,
      QuestionnaireAnswersStatusEnum.NULL
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
    } else if (QuestionnaireAnswersStatusEnum.IN_PROGRESS.code === code) {
      return QuestionnaireAnswersStatusEnum.IN_PROGRESS;
    } else if (QuestionnaireAnswersStatusEnum.COMPLETED.code === code) {
      return QuestionnaireAnswersStatusEnum.COMPLETED;
    } else if (QuestionnaireAnswersStatusEnum.AMENDED.code === code) {
      return QuestionnaireAnswersStatusEnum.AMENDED;
    } else if (QuestionnaireAnswersStatusEnum.ENTERED_IN_ERROR.code === code) {
      return QuestionnaireAnswersStatusEnum.ENTERED_IN_ERROR;
    } else if (QuestionnaireAnswersStatusEnum.STOPPED.code === code) {
      return QuestionnaireAnswersStatusEnum.STOPPED;
    } else if (QuestionnaireAnswersStatusEnum.NULL.code === code) {
      return QuestionnaireAnswersStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown QuestionnaireAnswersStatusEnum 'code' value '${code}'`);
    }
  }
}
