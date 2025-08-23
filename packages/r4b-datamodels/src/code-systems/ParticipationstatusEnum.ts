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
 * ParticipationstatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/participationstatus
 * CodeSystem.name: Participationstatus
 * CodeSystem.description: The Participation status of an appointment.
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
 * FHIR CodeSystem: ParticipationstatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem Participationstatus](http://hl7.org/fhir/participationstatus)
 */
export class ParticipationstatusEnum implements IFhirCodeEnum {
  public static readonly ACCEPTED = new FhirCodeDefinition(
    'ACCEPTED',
    'accepted',
    'http://hl7.org/fhir/participationstatus',
    'Accepted',
    'The participant has accepted the appointment.',
  );
  public static readonly DECLINED = new FhirCodeDefinition(
    'DECLINED',
    'declined',
    'http://hl7.org/fhir/participationstatus',
    'Declined',
    'The participant has declined the appointment and will not participate in the appointment.',
  );
  public static readonly TENTATIVE = new FhirCodeDefinition(
    'TENTATIVE',
    'tentative',
    'http://hl7.org/fhir/participationstatus',
    'Tentative',
    'The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.',
  );
  public static readonly NEEDS_ACTION = new FhirCodeDefinition(
    'NEEDS_ACTION',
    'needs-action',
    'http://hl7.org/fhir/participationstatus',
    'Needs Action',
    'The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ParticipationstatusEnum.ACCEPTED,
      ParticipationstatusEnum.DECLINED,
      ParticipationstatusEnum.TENTATIVE,
      ParticipationstatusEnum.NEEDS_ACTION,
      ParticipationstatusEnum.NULL
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
    } else if (ParticipationstatusEnum.ACCEPTED.code === code) {
      return ParticipationstatusEnum.ACCEPTED;
    } else if (ParticipationstatusEnum.DECLINED.code === code) {
      return ParticipationstatusEnum.DECLINED;
    } else if (ParticipationstatusEnum.TENTATIVE.code === code) {
      return ParticipationstatusEnum.TENTATIVE;
    } else if (ParticipationstatusEnum.NEEDS_ACTION.code === code) {
      return ParticipationstatusEnum.NEEDS_ACTION;
    } else if (ParticipationstatusEnum.NULL.code === code) {
      return ParticipationstatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ParticipationstatusEnum 'code' value '${code}'`);
    }
  }
}
