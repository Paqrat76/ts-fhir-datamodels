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
 * ActionParticipantTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/action-participant-type
 * CodeSystem.name: ActionParticipantType
 * CodeSystem.description: The type of participant for the action.
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
 * FHIR CodeSystem: ActionParticipantTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ActionParticipantType](http://hl7.org/fhir/action-participant-type)
 */
export class ActionParticipantTypeEnum implements IFhirCodeEnum {
  public static readonly PATIENT = new FhirCodeDefinition(
    'PATIENT',
    'patient',
    'http://hl7.org/fhir/action-participant-type',
    'Patient',
    'The participant is the patient under evaluation.',
  );
  public static readonly PRACTITIONER = new FhirCodeDefinition(
    'PRACTITIONER',
    'practitioner',
    'http://hl7.org/fhir/action-participant-type',
    'Practitioner',
    'The participant is a practitioner involved in the patient\'s care.',
  );
  public static readonly RELATED_PERSON = new FhirCodeDefinition(
    'RELATED_PERSON',
    'related-person',
    'http://hl7.org/fhir/action-participant-type',
    'Related Person',
    'The participant is a person related to the patient.',
  );
  public static readonly DEVICE = new FhirCodeDefinition(
    'DEVICE',
    'device',
    'http://hl7.org/fhir/action-participant-type',
    'Device',
    'The participant is a system or device used in the care of the patient.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ActionParticipantTypeEnum.PATIENT,
      ActionParticipantTypeEnum.PRACTITIONER,
      ActionParticipantTypeEnum.RELATED_PERSON,
      ActionParticipantTypeEnum.DEVICE,
      ActionParticipantTypeEnum.NULL
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
    } else if (ActionParticipantTypeEnum.PATIENT.code === code) {
      return ActionParticipantTypeEnum.PATIENT;
    } else if (ActionParticipantTypeEnum.PRACTITIONER.code === code) {
      return ActionParticipantTypeEnum.PRACTITIONER;
    } else if (ActionParticipantTypeEnum.RELATED_PERSON.code === code) {
      return ActionParticipantTypeEnum.RELATED_PERSON;
    } else if (ActionParticipantTypeEnum.DEVICE.code === code) {
      return ActionParticipantTypeEnum.DEVICE;
    } else if (ActionParticipantTypeEnum.NULL.code === code) {
      return ActionParticipantTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ActionParticipantTypeEnum 'code' value '${code}'`);
    }
  }
}
