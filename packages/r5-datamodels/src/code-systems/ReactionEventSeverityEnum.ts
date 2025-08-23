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
 * ReactionEventSeverityEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/reaction-event-severity
 * CodeSystem.name: ReactionEventSeverity
 * CodeSystem.description: Clinical assessment of the severity of a reaction event as a whole, potentially considering multiple different manifestations.
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
 * FHIR CodeSystem: ReactionEventSeverityEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ReactionEventSeverity](http://hl7.org/fhir/reaction-event-severity)
 */
export class ReactionEventSeverityEnum implements IFhirCodeEnum {
  public static readonly MILD = new FhirCodeDefinition(
    'MILD',
    'mild',
    'http://hl7.org/fhir/reaction-event-severity',
    'Mild',
    'Causes mild physiological effects.',
  );
  public static readonly MODERATE = new FhirCodeDefinition(
    'MODERATE',
    'moderate',
    'http://hl7.org/fhir/reaction-event-severity',
    'Moderate',
    'Causes moderate physiological effects.',
  );
  public static readonly SEVERE = new FhirCodeDefinition(
    'SEVERE',
    'severe',
    'http://hl7.org/fhir/reaction-event-severity',
    'Severe',
    'Causes severe physiological effects.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ReactionEventSeverityEnum.MILD,
      ReactionEventSeverityEnum.MODERATE,
      ReactionEventSeverityEnum.SEVERE,
      ReactionEventSeverityEnum.NULL
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
    } else if (ReactionEventSeverityEnum.MILD.code === code) {
      return ReactionEventSeverityEnum.MILD;
    } else if (ReactionEventSeverityEnum.MODERATE.code === code) {
      return ReactionEventSeverityEnum.MODERATE;
    } else if (ReactionEventSeverityEnum.SEVERE.code === code) {
      return ReactionEventSeverityEnum.SEVERE;
    } else if (ReactionEventSeverityEnum.NULL.code === code) {
      return ReactionEventSeverityEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ReactionEventSeverityEnum 'code' value '${code}'`);
    }
  }
}
