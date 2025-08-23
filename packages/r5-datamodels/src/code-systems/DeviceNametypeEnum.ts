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
 * DeviceNametypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/device-nametype
 * CodeSystem.name: DeviceNametype
 * CodeSystem.description: The type of name the device is referred by.
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
 * FHIR CodeSystem: DeviceNametypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem DeviceNametype](http://hl7.org/fhir/device-nametype)
 */
export class DeviceNametypeEnum implements IFhirCodeEnum {
  public static readonly REGISTERED_NAME = new FhirCodeDefinition(
    'REGISTERED_NAME',
    'registered-name',
    'http://hl7.org/fhir/device-nametype',
    'Registered name',
    'The term assigned to a medical device by the entity who registers or submits information about it to a jurisdiction or its databases. This may be considered the manufacturer assigned name (e.g., brand name assigned by the labeler or manufacturer in US, or device name assigned by the manufacturer in EU) and may also be synonymous with proprietary name or trade name of the device.',
  );
  public static readonly USER_FRIENDLY_NAME = new FhirCodeDefinition(
    'USER_FRIENDLY_NAME',
    'user-friendly-name',
    'http://hl7.org/fhir/device-nametype',
    'User Friendly name',
    'The term that generically describes the device by a name as assigned by the manufacturer that is recognized by lay person.  This common or generic name may be printed on the package it came in or some combination of that name with the model number, serial number, or other attribute that makes the name easy to understand for the user of that device. It is often exposed in communicating devices transport protocols. It is provided to help users identify the device when reported in discovery operations.',
  );
  public static readonly PATIENT_REPORTED_NAME = new FhirCodeDefinition(
    'PATIENT_REPORTED_NAME',
    'patient-reported-name',
    'http://hl7.org/fhir/device-nametype',
    'Patient Reported name',
    'the term used by the patient associated with the device when describing the device, for example \'knee implant\', when documented as a self-reported device.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      DeviceNametypeEnum.REGISTERED_NAME,
      DeviceNametypeEnum.USER_FRIENDLY_NAME,
      DeviceNametypeEnum.PATIENT_REPORTED_NAME,
      DeviceNametypeEnum.NULL
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
    } else if (DeviceNametypeEnum.REGISTERED_NAME.code === code) {
      return DeviceNametypeEnum.REGISTERED_NAME;
    } else if (DeviceNametypeEnum.USER_FRIENDLY_NAME.code === code) {
      return DeviceNametypeEnum.USER_FRIENDLY_NAME;
    } else if (DeviceNametypeEnum.PATIENT_REPORTED_NAME.code === code) {
      return DeviceNametypeEnum.PATIENT_REPORTED_NAME;
    } else if (DeviceNametypeEnum.NULL.code === code) {
      return DeviceNametypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown DeviceNametypeEnum 'code' value '${code}'`);
    }
  }
}
