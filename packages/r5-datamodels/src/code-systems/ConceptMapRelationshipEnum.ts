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
 * ConceptMapRelationshipEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/concept-map-relationship
 * CodeSystem.name: ConceptMapRelationship
 * CodeSystem.description: The relationship between concepts.
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
 * FHIR CodeSystem: ConceptMapRelationshipEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ConceptMapRelationship](http://hl7.org/fhir/concept-map-relationship)
 */
export class ConceptMapRelationshipEnum implements IFhirCodeEnum {
  public static readonly RELATED_TO = new FhirCodeDefinition(
    'RELATED_TO',
    'related-to',
    'http://hl7.org/fhir/concept-map-relationship',
    'Related To',
    'The concepts are related to each other, but the exact relationship is not known.',
  );
  public static readonly EQUIVALENT = new FhirCodeDefinition(
    'EQUIVALENT',
    'equivalent',
    'http://hl7.org/fhir/concept-map-relationship',
    'Equivalent',
    'The definitions of the concepts mean the same thing.',
  );
  public static readonly SOURCE_IS_NARROWER_THAN_TARGET = new FhirCodeDefinition(
    'SOURCE_IS_NARROWER_THAN_TARGET',
    'source-is-narrower-than-target',
    'http://hl7.org/fhir/concept-map-relationship',
    'Source Is Narrower Than Target',
    'The source concept is narrower in meaning than the target concept.',
  );
  public static readonly SOURCE_IS_BROADER_THAN_TARGET = new FhirCodeDefinition(
    'SOURCE_IS_BROADER_THAN_TARGET',
    'source-is-broader-than-target',
    'http://hl7.org/fhir/concept-map-relationship',
    'Source Is Broader Than Target',
    'The source concept is broader in meaning than the target concept.',
  );
  public static readonly NOT_RELATED_TO = new FhirCodeDefinition(
    'NOT_RELATED_TO',
    'not-related-to',
    'http://hl7.org/fhir/concept-map-relationship',
    'Not Related To',
    'This is an explicit assertion that the target concept is not related to the source concept.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ConceptMapRelationshipEnum.RELATED_TO,
      ConceptMapRelationshipEnum.EQUIVALENT,
      ConceptMapRelationshipEnum.SOURCE_IS_NARROWER_THAN_TARGET,
      ConceptMapRelationshipEnum.SOURCE_IS_BROADER_THAN_TARGET,
      ConceptMapRelationshipEnum.NOT_RELATED_TO,
      ConceptMapRelationshipEnum.NULL
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
    } else if (ConceptMapRelationshipEnum.RELATED_TO.code === code) {
      return ConceptMapRelationshipEnum.RELATED_TO;
    } else if (ConceptMapRelationshipEnum.EQUIVALENT.code === code) {
      return ConceptMapRelationshipEnum.EQUIVALENT;
    } else if (ConceptMapRelationshipEnum.SOURCE_IS_NARROWER_THAN_TARGET.code === code) {
      return ConceptMapRelationshipEnum.SOURCE_IS_NARROWER_THAN_TARGET;
    } else if (ConceptMapRelationshipEnum.SOURCE_IS_BROADER_THAN_TARGET.code === code) {
      return ConceptMapRelationshipEnum.SOURCE_IS_BROADER_THAN_TARGET;
    } else if (ConceptMapRelationshipEnum.NOT_RELATED_TO.code === code) {
      return ConceptMapRelationshipEnum.NOT_RELATED_TO;
    } else if (ConceptMapRelationshipEnum.NULL.code === code) {
      return ConceptMapRelationshipEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ConceptMapRelationshipEnum 'code' value '${code}'`);
    }
  }
}
