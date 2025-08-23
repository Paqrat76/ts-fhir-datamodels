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
 * QuestionnaireDisabledDisplayEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/questionnaire-disabled-display
 * CodeSystem.name: QuestionnaireDisabledDisplay
 * CodeSystem.description: QuestionnaireItemDisabledDisplay
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
 * FHIR CodeSystem: QuestionnaireDisabledDisplayEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem QuestionnaireDisabledDisplay](http://hl7.org/fhir/questionnaire-disabled-display)
 */
export class QuestionnaireDisabledDisplayEnum implements IFhirCodeEnum {
  public static readonly HIDDEN = new FhirCodeDefinition(
    'HIDDEN',
    'hidden',
    'http://hl7.org/fhir/questionnaire-disabled-display',
    'Hidden',
    'The item (and its children) should not be visible to the user at all.',
  );
  public static readonly PROTECTED = new FhirCodeDefinition(
    'PROTECTED',
    'protected',
    'http://hl7.org/fhir/questionnaire-disabled-display',
    'Protected',
    'The item (and possibly its children) should not be selectable or editable but should still be visible - to allow the user to see what questions *could* have been completed had other answers caused the item to be enabled.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      QuestionnaireDisabledDisplayEnum.HIDDEN,
      QuestionnaireDisabledDisplayEnum.PROTECTED,
      QuestionnaireDisabledDisplayEnum.NULL
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
    } else if (QuestionnaireDisabledDisplayEnum.HIDDEN.code === code) {
      return QuestionnaireDisabledDisplayEnum.HIDDEN;
    } else if (QuestionnaireDisabledDisplayEnum.PROTECTED.code === code) {
      return QuestionnaireDisabledDisplayEnum.PROTECTED;
    } else if (QuestionnaireDisabledDisplayEnum.NULL.code === code) {
      return QuestionnaireDisabledDisplayEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown QuestionnaireDisabledDisplayEnum 'code' value '${code}'`);
    }
  }
}
