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
 * ActionRequiredBehaviorEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/action-required-behavior
 * CodeSystem.name: ActionRequiredBehavior
 * CodeSystem.description: Defines expectations around whether an action or action group is required.
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
 * FHIR CodeSystem: ActionRequiredBehaviorEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ActionRequiredBehavior](http://hl7.org/fhir/action-required-behavior)
 */
export class ActionRequiredBehaviorEnum implements IFhirCodeEnum {
  public static readonly MUST = new FhirCodeDefinition(
    'MUST',
    'must',
    'http://hl7.org/fhir/action-required-behavior',
    'Must',
    'An action with this behavior must be included in the actions processed by the end user; the end user SHALL NOT choose not to include this action.',
  );
  public static readonly COULD = new FhirCodeDefinition(
    'COULD',
    'could',
    'http://hl7.org/fhir/action-required-behavior',
    'Could',
    'An action with this behavior may be included in the set of actions processed by the end user.',
  );
  public static readonly MUST_UNLESS_DOCUMENTED = new FhirCodeDefinition(
    'MUST_UNLESS_DOCUMENTED',
    'must-unless-documented',
    'http://hl7.org/fhir/action-required-behavior',
    'Must Unless Documented',
    'An action with this behavior must be included in the set of actions processed by the end user, unless the end user provides documentation as to why the action was not included.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ActionRequiredBehaviorEnum.MUST,
      ActionRequiredBehaviorEnum.COULD,
      ActionRequiredBehaviorEnum.MUST_UNLESS_DOCUMENTED,
      ActionRequiredBehaviorEnum.NULL
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
    } else if (ActionRequiredBehaviorEnum.MUST.code === code) {
      return ActionRequiredBehaviorEnum.MUST;
    } else if (ActionRequiredBehaviorEnum.COULD.code === code) {
      return ActionRequiredBehaviorEnum.COULD;
    } else if (ActionRequiredBehaviorEnum.MUST_UNLESS_DOCUMENTED.code === code) {
      return ActionRequiredBehaviorEnum.MUST_UNLESS_DOCUMENTED;
    } else if (ActionRequiredBehaviorEnum.NULL.code === code) {
      return ActionRequiredBehaviorEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ActionRequiredBehaviorEnum 'code' value '${code}'`);
    }
  }
}
