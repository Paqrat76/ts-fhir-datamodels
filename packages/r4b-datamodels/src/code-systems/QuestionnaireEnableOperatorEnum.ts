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
 * QuestionnaireEnableOperatorEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/questionnaire-enable-operator
 * CodeSystem.name: QuestionnaireEnableOperator
 * CodeSystem.description: The criteria by which a question is enabled.
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
 * FHIR CodeSystem: QuestionnaireEnableOperatorEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem QuestionnaireEnableOperator](http://hl7.org/fhir/questionnaire-enable-operator)
 */
export class QuestionnaireEnableOperatorEnum implements IFhirCodeEnum {
  public static readonly EXISTS = new FhirCodeDefinition(
    'EXISTS',
    'exists',
    'http://hl7.org/fhir/questionnaire-enable-operator',
    'Exists',
    'True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).',
  );
  public static readonly EQUAL_TO = new FhirCodeDefinition(
    'EQUAL_TO',
    '=',
    'http://hl7.org/fhir/questionnaire-enable-operator',
    'Equals',
    'True if whether at least one answer has a value that is equal to the enableWhen answer.',
  );
  public static readonly NOT_EQUAL_TO = new FhirCodeDefinition(
    'NOT_EQUAL_TO',
    '!=',
    'http://hl7.org/fhir/questionnaire-enable-operator',
    'Not Equals',
    'True if whether at least no answer has a value that is equal to the enableWhen answer.',
  );
  public static readonly GREATER_THAN = new FhirCodeDefinition(
    'GREATER_THAN',
    '>',
    'http://hl7.org/fhir/questionnaire-enable-operator',
    'Greater Than',
    'True if whether at least no answer has a value that is greater than the enableWhen answer.',
  );
  public static readonly LESS_THAN = new FhirCodeDefinition(
    'LESS_THAN',
    '<',
    'http://hl7.org/fhir/questionnaire-enable-operator',
    'Less Than',
    'True if whether at least no answer has a value that is less than the enableWhen answer.',
  );
  public static readonly GREATER_THAN_OR_EQUAL_TO = new FhirCodeDefinition(
    'GREATER_THAN_OR_EQUAL_TO',
    '>=',
    'http://hl7.org/fhir/questionnaire-enable-operator',
    'Greater or Equals',
    'True if whether at least no answer has a value that is greater or equal to the enableWhen answer.',
  );
  public static readonly LESS_THAN_OR_EQUAL_TO = new FhirCodeDefinition(
    'LESS_THAN_OR_EQUAL_TO',
    '<=',
    'http://hl7.org/fhir/questionnaire-enable-operator',
    'Less or Equals',
    'True if whether at least no answer has a value that is less or equal to the enableWhen answer.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      QuestionnaireEnableOperatorEnum.EXISTS,
      QuestionnaireEnableOperatorEnum.EQUAL_TO,
      QuestionnaireEnableOperatorEnum.NOT_EQUAL_TO,
      QuestionnaireEnableOperatorEnum.GREATER_THAN,
      QuestionnaireEnableOperatorEnum.LESS_THAN,
      QuestionnaireEnableOperatorEnum.GREATER_THAN_OR_EQUAL_TO,
      QuestionnaireEnableOperatorEnum.LESS_THAN_OR_EQUAL_TO,
      QuestionnaireEnableOperatorEnum.NULL
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
    } else if (QuestionnaireEnableOperatorEnum.EXISTS.code === code) {
      return QuestionnaireEnableOperatorEnum.EXISTS;
    } else if (QuestionnaireEnableOperatorEnum.EQUAL_TO.code === code) {
      return QuestionnaireEnableOperatorEnum.EQUAL_TO;
    } else if (QuestionnaireEnableOperatorEnum.NOT_EQUAL_TO.code === code) {
      return QuestionnaireEnableOperatorEnum.NOT_EQUAL_TO;
    } else if (QuestionnaireEnableOperatorEnum.GREATER_THAN.code === code) {
      return QuestionnaireEnableOperatorEnum.GREATER_THAN;
    } else if (QuestionnaireEnableOperatorEnum.LESS_THAN.code === code) {
      return QuestionnaireEnableOperatorEnum.LESS_THAN;
    } else if (QuestionnaireEnableOperatorEnum.GREATER_THAN_OR_EQUAL_TO.code === code) {
      return QuestionnaireEnableOperatorEnum.GREATER_THAN_OR_EQUAL_TO;
    } else if (QuestionnaireEnableOperatorEnum.LESS_THAN_OR_EQUAL_TO.code === code) {
      return QuestionnaireEnableOperatorEnum.LESS_THAN_OR_EQUAL_TO;
    } else if (QuestionnaireEnableOperatorEnum.NULL.code === code) {
      return QuestionnaireEnableOperatorEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown QuestionnaireEnableOperatorEnum 'code' value '${code}'`);
    }
  }
}
