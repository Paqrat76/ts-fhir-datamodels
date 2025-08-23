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
 * ActionGroupingBehaviorEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/action-grouping-behavior
 * CodeSystem.name: ActionGroupingBehavior
 * CodeSystem.description: Defines organization behavior of a group.
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
 * FHIR CodeSystem: ActionGroupingBehaviorEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ActionGroupingBehavior](http://hl7.org/fhir/action-grouping-behavior)
 */
export class ActionGroupingBehaviorEnum implements IFhirCodeEnum {
  public static readonly VISUAL_GROUP = new FhirCodeDefinition(
    'VISUAL_GROUP',
    'visual-group',
    'http://hl7.org/fhir/action-grouping-behavior',
    'Visual Group',
    'Any group marked with this behavior should be displayed as a visual group to the end user.',
  );
  public static readonly LOGICAL_GROUP = new FhirCodeDefinition(
    'LOGICAL_GROUP',
    'logical-group',
    'http://hl7.org/fhir/action-grouping-behavior',
    'Logical Group',
    'A group with this behavior logically groups its sub-elements, and may be shown as a visual group to the end user, but it is not required to do so.',
  );
  public static readonly SENTENCE_GROUP = new FhirCodeDefinition(
    'SENTENCE_GROUP',
    'sentence-group',
    'http://hl7.org/fhir/action-grouping-behavior',
    'Sentence Group',
    'A group of related alternative actions is a sentence group if the target referenced by the action is the same in all the actions and each action simply constitutes a different variation on how to specify the details for the target. For example, two actions that could be in a SentenceGroup are "aspirin, 500 mg, 2 times per day" and "aspirin, 300 mg, 3 times per day". In both cases, aspirin is the target referenced by the action, and the two actions represent different options for how aspirin might be ordered for the patient. Note that a SentenceGroup would almost always have an associated selection behavior of "AtMostOne", unless it\'s a required action, in which case, it would be "ExactlyOne".',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ActionGroupingBehaviorEnum.VISUAL_GROUP,
      ActionGroupingBehaviorEnum.LOGICAL_GROUP,
      ActionGroupingBehaviorEnum.SENTENCE_GROUP,
      ActionGroupingBehaviorEnum.NULL
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
    } else if (ActionGroupingBehaviorEnum.VISUAL_GROUP.code === code) {
      return ActionGroupingBehaviorEnum.VISUAL_GROUP;
    } else if (ActionGroupingBehaviorEnum.LOGICAL_GROUP.code === code) {
      return ActionGroupingBehaviorEnum.LOGICAL_GROUP;
    } else if (ActionGroupingBehaviorEnum.SENTENCE_GROUP.code === code) {
      return ActionGroupingBehaviorEnum.SENTENCE_GROUP;
    } else if (ActionGroupingBehaviorEnum.NULL.code === code) {
      return ActionGroupingBehaviorEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ActionGroupingBehaviorEnum 'code' value '${code}'`);
    }
  }
}
