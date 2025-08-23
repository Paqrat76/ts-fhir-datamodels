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
 * QuestionnaireAnswerConstraintEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/questionnaire-answer-constraint
 * CodeSystem.name: QuestionnaireAnswerConstraint
 * CodeSystem.description: Codes that describe the types of constraints possible on a question item that has a list of permitted answers
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
 * FHIR CodeSystem: QuestionnaireAnswerConstraintEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem QuestionnaireAnswerConstraint](http://hl7.org/fhir/questionnaire-answer-constraint)
 */
export class QuestionnaireAnswerConstraintEnum implements IFhirCodeEnum {
  public static readonly OPTIONS_ONLY = new FhirCodeDefinition(
    'OPTIONS_ONLY',
    'optionsOnly',
    'http://hl7.org/fhir/questionnaire-answer-constraint',
    'Options only',
    'Only values listed as answerOption or in the expansion of the answerValueSet are permitted',
  );
  public static readonly OPTIONS_OR_TYPE = new FhirCodeDefinition(
    'OPTIONS_OR_TYPE',
    'optionsOrType',
    'http://hl7.org/fhir/questionnaire-answer-constraint',
    'Options or \'type\'',
    'In addition to the values listed as answerOption or in the expansion of the answerValueSet, any other values that correspond to the specified item.type are permitted',
  );
  public static readonly OPTIONS_OR_STRING = new FhirCodeDefinition(
    'OPTIONS_OR_STRING',
    'optionsOrString',
    'http://hl7.org/fhir/questionnaire-answer-constraint',
    'Options or string',
    'In addition to the values listed as answerOption or in the expansion of the answerValueSet, free-text strings are permitted.  Answers will have a type of \'string\'.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      QuestionnaireAnswerConstraintEnum.OPTIONS_ONLY,
      QuestionnaireAnswerConstraintEnum.OPTIONS_OR_TYPE,
      QuestionnaireAnswerConstraintEnum.OPTIONS_OR_STRING,
      QuestionnaireAnswerConstraintEnum.NULL
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
    } else if (QuestionnaireAnswerConstraintEnum.OPTIONS_ONLY.code === code) {
      return QuestionnaireAnswerConstraintEnum.OPTIONS_ONLY;
    } else if (QuestionnaireAnswerConstraintEnum.OPTIONS_OR_TYPE.code === code) {
      return QuestionnaireAnswerConstraintEnum.OPTIONS_OR_TYPE;
    } else if (QuestionnaireAnswerConstraintEnum.OPTIONS_OR_STRING.code === code) {
      return QuestionnaireAnswerConstraintEnum.OPTIONS_OR_STRING;
    } else if (QuestionnaireAnswerConstraintEnum.NULL.code === code) {
      return QuestionnaireAnswerConstraintEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown QuestionnaireAnswerConstraintEnum 'code' value '${code}'`);
    }
  }
}
