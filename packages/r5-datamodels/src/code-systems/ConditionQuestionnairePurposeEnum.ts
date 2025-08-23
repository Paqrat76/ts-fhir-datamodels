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
 * ConditionQuestionnairePurposeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/condition-questionnaire-purpose
 * CodeSystem.name: ConditionQuestionnairePurpose
 * CodeSystem.description: The use of a questionnaire.
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
 * FHIR CodeSystem: ConditionQuestionnairePurposeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ConditionQuestionnairePurpose](http://hl7.org/fhir/condition-questionnaire-purpose)
 */
export class ConditionQuestionnairePurposeEnum implements IFhirCodeEnum {
  public static readonly PREADMIT = new FhirCodeDefinition(
    'PREADMIT',
    'preadmit',
    'http://hl7.org/fhir/condition-questionnaire-purpose',
    'Pre-admit',
    'A pre-admit questionnaire.',
  );
  public static readonly DIFF_DIAGNOSIS = new FhirCodeDefinition(
    'DIFF_DIAGNOSIS',
    'diff-diagnosis',
    'http://hl7.org/fhir/condition-questionnaire-purpose',
    'Diff Diagnosis',
    'A questionnaire that helps with diferential diagnosis.',
  );
  public static readonly OUTCOME = new FhirCodeDefinition(
    'OUTCOME',
    'outcome',
    'http://hl7.org/fhir/condition-questionnaire-purpose',
    'Outcome',
    'A questionnaire to check on outcomes for the patient.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ConditionQuestionnairePurposeEnum.PREADMIT,
      ConditionQuestionnairePurposeEnum.DIFF_DIAGNOSIS,
      ConditionQuestionnairePurposeEnum.OUTCOME,
      ConditionQuestionnairePurposeEnum.NULL
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
    } else if (ConditionQuestionnairePurposeEnum.PREADMIT.code === code) {
      return ConditionQuestionnairePurposeEnum.PREADMIT;
    } else if (ConditionQuestionnairePurposeEnum.DIFF_DIAGNOSIS.code === code) {
      return ConditionQuestionnairePurposeEnum.DIFF_DIAGNOSIS;
    } else if (ConditionQuestionnairePurposeEnum.OUTCOME.code === code) {
      return ConditionQuestionnairePurposeEnum.OUTCOME;
    } else if (ConditionQuestionnairePurposeEnum.NULL.code === code) {
      return ConditionQuestionnairePurposeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ConditionQuestionnairePurposeEnum 'code' value '${code}'`);
    }
  }
}
