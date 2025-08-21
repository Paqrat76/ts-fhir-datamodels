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
 * ActionConditionKindEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/action-condition-kind
 * CodeSystem.name: ActionConditionKind
 * CodeSystem.description: Defines the kinds of conditions that can appear on actions.
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
 * FHIR CodeSystem: ActionConditionKindEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ActionConditionKind](http://hl7.org/fhir/action-condition-kind)
 */
export class ActionConditionKindEnum implements IFhirCodeEnum {
  public static readonly APPLICABILITY = new FhirCodeDefinition(
    'APPLICABILITY',
    'applicability',
    'http://hl7.org/fhir/action-condition-kind',
    'Applicability',
    'The condition describes whether or not a given action is applicable.',
  );
  public static readonly START = new FhirCodeDefinition(
    'START',
    'start',
    'http://hl7.org/fhir/action-condition-kind',
    'Start',
    'The condition is a starting condition for the action.',
  );
  public static readonly STOP = new FhirCodeDefinition(
    'STOP',
    'stop',
    'http://hl7.org/fhir/action-condition-kind',
    'Stop',
    'The condition is a stop, or exit condition for the action.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ActionConditionKindEnum.APPLICABILITY,
      ActionConditionKindEnum.START,
      ActionConditionKindEnum.STOP,
      ActionConditionKindEnum.NULL
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
    } else if (ActionConditionKindEnum.APPLICABILITY.code === code) {
      return ActionConditionKindEnum.APPLICABILITY;
    } else if (ActionConditionKindEnum.START.code === code) {
      return ActionConditionKindEnum.START;
    } else if (ActionConditionKindEnum.STOP.code === code) {
      return ActionConditionKindEnum.STOP;
    } else if (ActionConditionKindEnum.NULL.code === code) {
      return ActionConditionKindEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ActionConditionKindEnum 'code' value '${code}'`);
    }
  }
}
