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
 * ActionSelectionBehaviorEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/action-selection-behavior
 * CodeSystem.name: ActionSelectionBehavior
 * CodeSystem.description: Defines selection behavior of a group.
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
 * FHIR CodeSystem: ActionSelectionBehaviorEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ActionSelectionBehavior](http://hl7.org/fhir/action-selection-behavior)
 */
export class ActionSelectionBehaviorEnum implements IFhirCodeEnum {
  public static readonly ANY = new FhirCodeDefinition(
    'ANY',
    'any',
    'http://hl7.org/fhir/action-selection-behavior',
    'Any',
    'Any number of the actions in the group may be chosen, from zero to all.',
  );
  public static readonly ALL = new FhirCodeDefinition(
    'ALL',
    'all',
    'http://hl7.org/fhir/action-selection-behavior',
    'All',
    'All the actions in the group must be selected as a single unit.',
  );
  public static readonly ALL_OR_NONE = new FhirCodeDefinition(
    'ALL_OR_NONE',
    'all-or-none',
    'http://hl7.org/fhir/action-selection-behavior',
    'All Or None',
    'All the actions in the group are meant to be chosen as a single unit: either all must be selected by the end user, or none may be selected.',
  );
  public static readonly EXACTLY_ONE = new FhirCodeDefinition(
    'EXACTLY_ONE',
    'exactly-one',
    'http://hl7.org/fhir/action-selection-behavior',
    'Exactly One',
    'The end user must choose one and only one of the selectable actions in the group. The user SHALL NOT choose none of the actions in the group.',
  );
  public static readonly AT_MOST_ONE = new FhirCodeDefinition(
    'AT_MOST_ONE',
    'at-most-one',
    'http://hl7.org/fhir/action-selection-behavior',
    'At Most One',
    'The end user may choose zero or at most one of the actions in the group.',
  );
  public static readonly ONE_OR_MORE = new FhirCodeDefinition(
    'ONE_OR_MORE',
    'one-or-more',
    'http://hl7.org/fhir/action-selection-behavior',
    'One Or More',
    'The end user must choose a minimum of one, and as many additional as desired.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ActionSelectionBehaviorEnum.ANY,
      ActionSelectionBehaviorEnum.ALL,
      ActionSelectionBehaviorEnum.ALL_OR_NONE,
      ActionSelectionBehaviorEnum.EXACTLY_ONE,
      ActionSelectionBehaviorEnum.AT_MOST_ONE,
      ActionSelectionBehaviorEnum.ONE_OR_MORE,
      ActionSelectionBehaviorEnum.NULL
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
    } else if (ActionSelectionBehaviorEnum.ANY.code === code) {
      return ActionSelectionBehaviorEnum.ANY;
    } else if (ActionSelectionBehaviorEnum.ALL.code === code) {
      return ActionSelectionBehaviorEnum.ALL;
    } else if (ActionSelectionBehaviorEnum.ALL_OR_NONE.code === code) {
      return ActionSelectionBehaviorEnum.ALL_OR_NONE;
    } else if (ActionSelectionBehaviorEnum.EXACTLY_ONE.code === code) {
      return ActionSelectionBehaviorEnum.EXACTLY_ONE;
    } else if (ActionSelectionBehaviorEnum.AT_MOST_ONE.code === code) {
      return ActionSelectionBehaviorEnum.AT_MOST_ONE;
    } else if (ActionSelectionBehaviorEnum.ONE_OR_MORE.code === code) {
      return ActionSelectionBehaviorEnum.ONE_OR_MORE;
    } else if (ActionSelectionBehaviorEnum.NULL.code === code) {
      return ActionSelectionBehaviorEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ActionSelectionBehaviorEnum 'code' value '${code}'`);
    }
  }
}
