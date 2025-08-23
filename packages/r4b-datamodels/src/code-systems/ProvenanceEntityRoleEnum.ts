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
 * ProvenanceEntityRoleEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/provenance-entity-role
 * CodeSystem.name: ProvenanceEntityRole
 * CodeSystem.description: How an entity was used in an activity.
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
 * FHIR CodeSystem: ProvenanceEntityRoleEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ProvenanceEntityRole](http://hl7.org/fhir/provenance-entity-role)
 */
export class ProvenanceEntityRoleEnum implements IFhirCodeEnum {
  public static readonly DERIVATION = new FhirCodeDefinition(
    'DERIVATION',
    'derivation',
    'http://hl7.org/fhir/provenance-entity-role',
    'Derivation',
    'A transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity.',
  );
  public static readonly REVISION = new FhirCodeDefinition(
    'REVISION',
    'revision',
    'http://hl7.org/fhir/provenance-entity-role',
    'Revision',
    'A derivation for which the resulting entity is a revised version of some original.',
  );
  public static readonly QUOTATION = new FhirCodeDefinition(
    'QUOTATION',
    'quotation',
    'http://hl7.org/fhir/provenance-entity-role',
    'Quotation',
    'The repeat of (some or all of) an entity, such as text or image, by someone who might or might not be its original author.',
  );
  public static readonly SOURCE = new FhirCodeDefinition(
    'SOURCE',
    'source',
    'http://hl7.org/fhir/provenance-entity-role',
    'Source',
    'A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic\'s study, without benefit from hindsight.',
  );
  public static readonly REMOVAL = new FhirCodeDefinition(
    'REMOVAL',
    'removal',
    'http://hl7.org/fhir/provenance-entity-role',
    'Removal',
    'A derivation for which the entity is removed from accessibility usually through the use of the Delete operation.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ProvenanceEntityRoleEnum.DERIVATION,
      ProvenanceEntityRoleEnum.REVISION,
      ProvenanceEntityRoleEnum.QUOTATION,
      ProvenanceEntityRoleEnum.SOURCE,
      ProvenanceEntityRoleEnum.REMOVAL,
      ProvenanceEntityRoleEnum.NULL
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
    } else if (ProvenanceEntityRoleEnum.DERIVATION.code === code) {
      return ProvenanceEntityRoleEnum.DERIVATION;
    } else if (ProvenanceEntityRoleEnum.REVISION.code === code) {
      return ProvenanceEntityRoleEnum.REVISION;
    } else if (ProvenanceEntityRoleEnum.QUOTATION.code === code) {
      return ProvenanceEntityRoleEnum.QUOTATION;
    } else if (ProvenanceEntityRoleEnum.SOURCE.code === code) {
      return ProvenanceEntityRoleEnum.SOURCE;
    } else if (ProvenanceEntityRoleEnum.REMOVAL.code === code) {
      return ProvenanceEntityRoleEnum.REMOVAL;
    } else if (ProvenanceEntityRoleEnum.NULL.code === code) {
      return ProvenanceEntityRoleEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ProvenanceEntityRoleEnum 'code' value '${code}'`);
    }
  }
}
