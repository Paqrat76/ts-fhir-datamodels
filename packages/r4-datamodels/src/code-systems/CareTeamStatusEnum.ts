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
 * CareTeamStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/care-team-status
 * CodeSystem.name: CareTeamStatus
 * CodeSystem.description: Indicates the status of the care team.
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
 * FHIR CodeSystem: CareTeamStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem CareTeamStatus](http://hl7.org/fhir/care-team-status)
 */
export class CareTeamStatusEnum implements IFhirCodeEnum {
  public static readonly PROPOSED = new FhirCodeDefinition(
    'PROPOSED',
    'proposed',
    'http://hl7.org/fhir/care-team-status',
    'Proposed',
    'The care team has been drafted and proposed, but not yet participating in the coordination and delivery of patient care.',
  );
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/care-team-status',
    'Active',
    'The care team is currently participating in the coordination and delivery of care.',
  );
  public static readonly SUSPENDED = new FhirCodeDefinition(
    'SUSPENDED',
    'suspended',
    'http://hl7.org/fhir/care-team-status',
    'Suspended',
    'The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.',
  );
  public static readonly INACTIVE = new FhirCodeDefinition(
    'INACTIVE',
    'inactive',
    'http://hl7.org/fhir/care-team-status',
    'Inactive',
    'The care team was, but is no longer, participating in the coordination and delivery of care.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/care-team-status',
    'Entered in Error',
    'The care team should have never existed.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      CareTeamStatusEnum.PROPOSED,
      CareTeamStatusEnum.ACTIVE,
      CareTeamStatusEnum.SUSPENDED,
      CareTeamStatusEnum.INACTIVE,
      CareTeamStatusEnum.ENTERED_IN_ERROR,
      CareTeamStatusEnum.NULL
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
    } else if (CareTeamStatusEnum.PROPOSED.code === code) {
      return CareTeamStatusEnum.PROPOSED;
    } else if (CareTeamStatusEnum.ACTIVE.code === code) {
      return CareTeamStatusEnum.ACTIVE;
    } else if (CareTeamStatusEnum.SUSPENDED.code === code) {
      return CareTeamStatusEnum.SUSPENDED;
    } else if (CareTeamStatusEnum.INACTIVE.code === code) {
      return CareTeamStatusEnum.INACTIVE;
    } else if (CareTeamStatusEnum.ENTERED_IN_ERROR.code === code) {
      return CareTeamStatusEnum.ENTERED_IN_ERROR;
    } else if (CareTeamStatusEnum.NULL.code === code) {
      return CareTeamStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown CareTeamStatusEnum 'code' value '${code}'`);
    }
  }
}
