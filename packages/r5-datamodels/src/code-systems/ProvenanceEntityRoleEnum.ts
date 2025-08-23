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
 * FHIR CodeSystem: ProvenanceEntityRoleEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ProvenanceEntityRole](http://hl7.org/fhir/provenance-entity-role)
 */
export class ProvenanceEntityRoleEnum implements IFhirCodeEnum {
  public static readonly REVISION = new FhirCodeDefinition(
    'REVISION',
    'revision',
    'http://hl7.org/fhir/provenance-entity-role',
    'Revision',
    'An entity that is used by the activity to produce a new version of that entity.',
  );
  public static readonly QUOTATION = new FhirCodeDefinition(
    'QUOTATION',
    'quotation',
    'http://hl7.org/fhir/provenance-entity-role',
    'Quotation',
    'An entity that is copied in full or part by an agent that is not the author of the entity.',
  );
  public static readonly SOURCE = new FhirCodeDefinition(
    'SOURCE',
    'source',
    'http://hl7.org/fhir/provenance-entity-role',
    'Source',
    'An entity that is used as input to the activity that produced the target.',
  );
  public static readonly INSTANTIATES = new FhirCodeDefinition(
    'INSTANTIATES',
    'instantiates',
    'http://hl7.org/fhir/provenance-entity-role',
    'Instantiates',
    'The record resulting from this event adheres to the protocol, guideline, order set or other definition represented by this entity.',
  );
  public static readonly REMOVAL = new FhirCodeDefinition(
    'REMOVAL',
    'removal',
    'http://hl7.org/fhir/provenance-entity-role',
    'Removal',
    'An entity that is removed from accessibility, usually through the DELETE operator.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ProvenanceEntityRoleEnum.REVISION,
      ProvenanceEntityRoleEnum.QUOTATION,
      ProvenanceEntityRoleEnum.SOURCE,
      ProvenanceEntityRoleEnum.INSTANTIATES,
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
    } else if (ProvenanceEntityRoleEnum.REVISION.code === code) {
      return ProvenanceEntityRoleEnum.REVISION;
    } else if (ProvenanceEntityRoleEnum.QUOTATION.code === code) {
      return ProvenanceEntityRoleEnum.QUOTATION;
    } else if (ProvenanceEntityRoleEnum.SOURCE.code === code) {
      return ProvenanceEntityRoleEnum.SOURCE;
    } else if (ProvenanceEntityRoleEnum.INSTANTIATES.code === code) {
      return ProvenanceEntityRoleEnum.INSTANTIATES;
    } else if (ProvenanceEntityRoleEnum.REMOVAL.code === code) {
      return ProvenanceEntityRoleEnum.REMOVAL;
    } else if (ProvenanceEntityRoleEnum.NULL.code === code) {
      return ProvenanceEntityRoleEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ProvenanceEntityRoleEnum 'code' value '${code}'`);
    }
  }
}
