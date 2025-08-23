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
 * EncounterLocationStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/encounter-location-status
 * CodeSystem.name: EncounterLocationStatus
 * CodeSystem.description: The status of the location.
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
 * FHIR CodeSystem: EncounterLocationStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem EncounterLocationStatus](http://hl7.org/fhir/encounter-location-status)
 */
export class EncounterLocationStatusEnum implements IFhirCodeEnum {
  public static readonly PLANNED = new FhirCodeDefinition(
    'PLANNED',
    'planned',
    'http://hl7.org/fhir/encounter-location-status',
    'Planned',
    'The patient is planned to be moved to this location at some point in the future.',
  );
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/encounter-location-status',
    'Active',
    'The patient is currently at this location, or was between the period specified. A system may update these records when the patient leaves the location to either reserved, or completed.',
  );
  public static readonly RESERVED = new FhirCodeDefinition(
    'RESERVED',
    'reserved',
    'http://hl7.org/fhir/encounter-location-status',
    'Reserved',
    'This location is held empty for this patient.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/encounter-location-status',
    'Completed',
    'The patient was at this location during the period specified. Not to be used when the patient is currently at the location.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      EncounterLocationStatusEnum.PLANNED,
      EncounterLocationStatusEnum.ACTIVE,
      EncounterLocationStatusEnum.RESERVED,
      EncounterLocationStatusEnum.COMPLETED,
      EncounterLocationStatusEnum.NULL
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
    } else if (EncounterLocationStatusEnum.PLANNED.code === code) {
      return EncounterLocationStatusEnum.PLANNED;
    } else if (EncounterLocationStatusEnum.ACTIVE.code === code) {
      return EncounterLocationStatusEnum.ACTIVE;
    } else if (EncounterLocationStatusEnum.RESERVED.code === code) {
      return EncounterLocationStatusEnum.RESERVED;
    } else if (EncounterLocationStatusEnum.COMPLETED.code === code) {
      return EncounterLocationStatusEnum.COMPLETED;
    } else if (EncounterLocationStatusEnum.NULL.code === code) {
      return EncounterLocationStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown EncounterLocationStatusEnum 'code' value '${code}'`);
    }
  }
}
