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
 * FHIR CodeSystem: DeviceNametypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem DeviceNametype](http://hl7.org/fhir/device-nametype)
 */
export class DeviceNametypeEnum implements IFhirCodeEnum {
  public static readonly UDI_LABEL_NAME = new FhirCodeDefinition(
    'UDI_LABEL_NAME',
    'udi-label-name',
    'http://hl7.org/fhir/device-nametype',
    'UDI Label name',
    'UDI Label name.',
  );
  public static readonly USER_FRIENDLY_NAME = new FhirCodeDefinition(
    'USER_FRIENDLY_NAME',
    'user-friendly-name',
    'http://hl7.org/fhir/device-nametype',
    'User Friendly name',
    'User Friendly name.',
  );
  public static readonly PATIENT_REPORTED_NAME = new FhirCodeDefinition(
    'PATIENT_REPORTED_NAME',
    'patient-reported-name',
    'http://hl7.org/fhir/device-nametype',
    'Patient Reported name',
    'Patient Reported name.',
  );
  public static readonly MANUFACTURER_NAME = new FhirCodeDefinition(
    'MANUFACTURER_NAME',
    'manufacturer-name',
    'http://hl7.org/fhir/device-nametype',
    'Manufacturer name',
    'Manufacturer name.',
  );
  public static readonly MODEL_NAME = new FhirCodeDefinition(
    'MODEL_NAME',
    'model-name',
    'http://hl7.org/fhir/device-nametype',
    'Model name',
    'Model name.',
  );
  public static readonly OTHER = new FhirCodeDefinition(
    'OTHER',
    'other',
    'http://hl7.org/fhir/device-nametype',
    'other',
    'other.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      DeviceNametypeEnum.UDI_LABEL_NAME,
      DeviceNametypeEnum.USER_FRIENDLY_NAME,
      DeviceNametypeEnum.PATIENT_REPORTED_NAME,
      DeviceNametypeEnum.MANUFACTURER_NAME,
      DeviceNametypeEnum.MODEL_NAME,
      DeviceNametypeEnum.OTHER,
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
    } else if (DeviceNametypeEnum.UDI_LABEL_NAME.code === code) {
      return DeviceNametypeEnum.UDI_LABEL_NAME;
    } else if (DeviceNametypeEnum.USER_FRIENDLY_NAME.code === code) {
      return DeviceNametypeEnum.USER_FRIENDLY_NAME;
    } else if (DeviceNametypeEnum.PATIENT_REPORTED_NAME.code === code) {
      return DeviceNametypeEnum.PATIENT_REPORTED_NAME;
    } else if (DeviceNametypeEnum.MANUFACTURER_NAME.code === code) {
      return DeviceNametypeEnum.MANUFACTURER_NAME;
    } else if (DeviceNametypeEnum.MODEL_NAME.code === code) {
      return DeviceNametypeEnum.MODEL_NAME;
    } else if (DeviceNametypeEnum.OTHER.code === code) {
      return DeviceNametypeEnum.OTHER;
    } else if (DeviceNametypeEnum.NULL.code === code) {
      return DeviceNametypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown DeviceNametypeEnum 'code' value '${code}'`);
    }
  }
}
