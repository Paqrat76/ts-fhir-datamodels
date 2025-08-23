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
 * SubscriptiontopicCrBehaviorEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/subscriptiontopic-cr-behavior
 * CodeSystem.name: SubscriptiontopicCrBehavior
 * CodeSystem.description: Behavior a server can exhibit when a criteria state does not exist (e.g., state prior to a create or after a delete).
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
 * FHIR CodeSystem: SubscriptiontopicCrBehaviorEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem SubscriptiontopicCrBehavior](http://hl7.org/fhir/subscriptiontopic-cr-behavior)
 */
export class SubscriptiontopicCrBehaviorEnum implements IFhirCodeEnum {
  public static readonly TEST_PASSES = new FhirCodeDefinition(
    'TEST_PASSES',
    'test-passes',
    'http://hl7.org/fhir/subscriptiontopic-cr-behavior',
    'test passes',
    'The requested conditional statement will pass if a matching state does not exist (e.g., previous state during create).',
  );
  public static readonly TEST_FAILS = new FhirCodeDefinition(
    'TEST_FAILS',
    'test-fails',
    'http://hl7.org/fhir/subscriptiontopic-cr-behavior',
    'test fails',
    'The requested conditional statement will fail if a matching state does not exist (e.g., previous state during create).',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      SubscriptiontopicCrBehaviorEnum.TEST_PASSES,
      SubscriptiontopicCrBehaviorEnum.TEST_FAILS,
      SubscriptiontopicCrBehaviorEnum.NULL
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
    } else if (SubscriptiontopicCrBehaviorEnum.TEST_PASSES.code === code) {
      return SubscriptiontopicCrBehaviorEnum.TEST_PASSES;
    } else if (SubscriptiontopicCrBehaviorEnum.TEST_FAILS.code === code) {
      return SubscriptiontopicCrBehaviorEnum.TEST_FAILS;
    } else if (SubscriptiontopicCrBehaviorEnum.NULL.code === code) {
      return SubscriptiontopicCrBehaviorEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown SubscriptiontopicCrBehaviorEnum 'code' value '${code}'`);
    }
  }
}
