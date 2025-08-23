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
 * QuestionnaireEnableBehaviorEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/questionnaire-enable-behavior
 * CodeSystem.name: QuestionnaireEnableBehavior
 * CodeSystem.description: Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
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
 * FHIR CodeSystem: QuestionnaireEnableBehaviorEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem QuestionnaireEnableBehavior](http://hl7.org/fhir/questionnaire-enable-behavior)
 */
export class QuestionnaireEnableBehaviorEnum implements IFhirCodeEnum {
  public static readonly ALL = new FhirCodeDefinition(
    'ALL',
    'all',
    'http://hl7.org/fhir/questionnaire-enable-behavior',
    'All',
    'Enable the question when all the enableWhen criteria are satisfied.',
  );
  public static readonly ANY = new FhirCodeDefinition(
    'ANY',
    'any',
    'http://hl7.org/fhir/questionnaire-enable-behavior',
    'Any',
    'Enable the question when any of the enableWhen criteria are satisfied.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      QuestionnaireEnableBehaviorEnum.ALL,
      QuestionnaireEnableBehaviorEnum.ANY,
      QuestionnaireEnableBehaviorEnum.NULL
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
    } else if (QuestionnaireEnableBehaviorEnum.ALL.code === code) {
      return QuestionnaireEnableBehaviorEnum.ALL;
    } else if (QuestionnaireEnableBehaviorEnum.ANY.code === code) {
      return QuestionnaireEnableBehaviorEnum.ANY;
    } else if (QuestionnaireEnableBehaviorEnum.NULL.code === code) {
      return QuestionnaireEnableBehaviorEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown QuestionnaireEnableBehaviorEnum 'code' value '${code}'`);
    }
  }
}
