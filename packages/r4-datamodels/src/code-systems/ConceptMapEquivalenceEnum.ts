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
 * ConceptMapEquivalenceEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/concept-map-equivalence
 * CodeSystem.name: ConceptMapEquivalence
 * CodeSystem.description: The degree of equivalence between concepts.
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
 * FHIR CodeSystem: ConceptMapEquivalenceEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ConceptMapEquivalence](http://hl7.org/fhir/concept-map-equivalence)
 */
export class ConceptMapEquivalenceEnum implements IFhirCodeEnum {
  public static readonly RELATEDTO = new FhirCodeDefinition(
    'RELATEDTO',
    'relatedto',
    'http://hl7.org/fhir/concept-map-equivalence',
    'Related To',
    'The concepts are related to each other, and have at least some overlap in meaning, but the exact relationship is not known.',
  );
  public static readonly EQUIVALENT = new FhirCodeDefinition(
    'EQUIVALENT',
    'equivalent',
    'http://hl7.org/fhir/concept-map-equivalence',
    'Equivalent',
    'The definitions of the concepts mean the same thing (including when structural implications of meaning are considered) (i.e. extensionally identical).',
  );
  public static readonly EQUAL = new FhirCodeDefinition(
    'EQUAL',
    'equal',
    'http://hl7.org/fhir/concept-map-equivalence',
    'Equal',
    'The definitions of the concepts are exactly the same (i.e. only grammatical differences) and structural implications of meaning are identical or irrelevant (i.e. intentionally identical).',
  );
  public static readonly WIDER = new FhirCodeDefinition(
    'WIDER',
    'wider',
    'http://hl7.org/fhir/concept-map-equivalence',
    'Wider',
    'The target mapping is wider in meaning than the source concept.',
  );
  public static readonly SUBSUMES = new FhirCodeDefinition(
    'SUBSUMES',
    'subsumes',
    'http://hl7.org/fhir/concept-map-equivalence',
    'Subsumes',
    'The target mapping subsumes the meaning of the source concept (e.g. the source is-a target).',
  );
  public static readonly NARROWER = new FhirCodeDefinition(
    'NARROWER',
    'narrower',
    'http://hl7.org/fhir/concept-map-equivalence',
    'Narrower',
    'The target mapping is narrower in meaning than the source concept. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.',
  );
  public static readonly SPECIALIZES = new FhirCodeDefinition(
    'SPECIALIZES',
    'specializes',
    'http://hl7.org/fhir/concept-map-equivalence',
    'Specializes',
    'The target mapping specializes the meaning of the source concept (e.g. the target is-a source).',
  );
  public static readonly INEXACT = new FhirCodeDefinition(
    'INEXACT',
    'inexact',
    'http://hl7.org/fhir/concept-map-equivalence',
    'Inexact',
    'The target mapping overlaps with the source concept, but both source and target cover additional meaning, or the definitions are imprecise and it is uncertain whether they have the same boundaries to their meaning. The sense in which the mapping is inexact SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.',
  );
  public static readonly UNMATCHED = new FhirCodeDefinition(
    'UNMATCHED',
    'unmatched',
    'http://hl7.org/fhir/concept-map-equivalence',
    'Unmatched',
    'There is no match for this concept in the target code system.',
  );
  public static readonly DISJOINT = new FhirCodeDefinition(
    'DISJOINT',
    'disjoint',
    'http://hl7.org/fhir/concept-map-equivalence',
    'Disjoint',
    'This is an explicit assertion that there is no mapping between the source and target concept.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ConceptMapEquivalenceEnum.RELATEDTO,
      ConceptMapEquivalenceEnum.EQUIVALENT,
      ConceptMapEquivalenceEnum.EQUAL,
      ConceptMapEquivalenceEnum.WIDER,
      ConceptMapEquivalenceEnum.SUBSUMES,
      ConceptMapEquivalenceEnum.NARROWER,
      ConceptMapEquivalenceEnum.SPECIALIZES,
      ConceptMapEquivalenceEnum.INEXACT,
      ConceptMapEquivalenceEnum.UNMATCHED,
      ConceptMapEquivalenceEnum.DISJOINT,
      ConceptMapEquivalenceEnum.NULL
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
    } else if (ConceptMapEquivalenceEnum.RELATEDTO.code === code) {
      return ConceptMapEquivalenceEnum.RELATEDTO;
    } else if (ConceptMapEquivalenceEnum.EQUIVALENT.code === code) {
      return ConceptMapEquivalenceEnum.EQUIVALENT;
    } else if (ConceptMapEquivalenceEnum.EQUAL.code === code) {
      return ConceptMapEquivalenceEnum.EQUAL;
    } else if (ConceptMapEquivalenceEnum.WIDER.code === code) {
      return ConceptMapEquivalenceEnum.WIDER;
    } else if (ConceptMapEquivalenceEnum.SUBSUMES.code === code) {
      return ConceptMapEquivalenceEnum.SUBSUMES;
    } else if (ConceptMapEquivalenceEnum.NARROWER.code === code) {
      return ConceptMapEquivalenceEnum.NARROWER;
    } else if (ConceptMapEquivalenceEnum.SPECIALIZES.code === code) {
      return ConceptMapEquivalenceEnum.SPECIALIZES;
    } else if (ConceptMapEquivalenceEnum.INEXACT.code === code) {
      return ConceptMapEquivalenceEnum.INEXACT;
    } else if (ConceptMapEquivalenceEnum.UNMATCHED.code === code) {
      return ConceptMapEquivalenceEnum.UNMATCHED;
    } else if (ConceptMapEquivalenceEnum.DISJOINT.code === code) {
      return ConceptMapEquivalenceEnum.DISJOINT;
    } else if (ConceptMapEquivalenceEnum.NULL.code === code) {
      return ConceptMapEquivalenceEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ConceptMapEquivalenceEnum 'code' value '${code}'`);
    }
  }
}
