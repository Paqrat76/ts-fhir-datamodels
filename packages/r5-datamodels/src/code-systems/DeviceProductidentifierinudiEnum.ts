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
 * DeviceProductidentifierinudiEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/device-productidentifierinudi
 * CodeSystem.name: DeviceProductidentifierinudi
 * CodeSystem.description: The production identifier(s) that are expected to appear in the UDI carrier.
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
 * FHIR CodeSystem: DeviceProductidentifierinudiEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem DeviceProductidentifierinudi](http://hl7.org/fhir/device-productidentifierinudi)
 */
export class DeviceProductidentifierinudiEnum implements IFhirCodeEnum {
  public static readonly LOT_NUMBER = new FhirCodeDefinition(
    'LOT_NUMBER',
    'lot-number',
    'http://hl7.org/fhir/device-productidentifierinudi',
    'Lot Number',
    'The label includes the lot number.',
  );
  public static readonly MANUFACTURED_DATE = new FhirCodeDefinition(
    'MANUFACTURED_DATE',
    'manufactured-date',
    'http://hl7.org/fhir/device-productidentifierinudi',
    'Manufactured date',
    'The label includes the manufacture date.',
  );
  public static readonly SERIAL_NUMBER = new FhirCodeDefinition(
    'SERIAL_NUMBER',
    'serial-number',
    'http://hl7.org/fhir/device-productidentifierinudi',
    'Serial Number',
    'The label includes the serial number.',
  );
  public static readonly EXPIRATION_DATE = new FhirCodeDefinition(
    'EXPIRATION_DATE',
    'expiration-date',
    'http://hl7.org/fhir/device-productidentifierinudi',
    'Expiration date',
    'The label includes the expiration date.',
  );
  public static readonly BIOLOGICAL_SOURCE = new FhirCodeDefinition(
    'BIOLOGICAL_SOURCE',
    'biological-source',
    'http://hl7.org/fhir/device-productidentifierinudi',
    'Biological source',
    'The label includes the biological source identifier.',
  );
  public static readonly SOFTWARE_VERSION = new FhirCodeDefinition(
    'SOFTWARE_VERSION',
    'software-version',
    'http://hl7.org/fhir/device-productidentifierinudi',
    'Software Version',
    'The label includes the software version.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      DeviceProductidentifierinudiEnum.LOT_NUMBER,
      DeviceProductidentifierinudiEnum.MANUFACTURED_DATE,
      DeviceProductidentifierinudiEnum.SERIAL_NUMBER,
      DeviceProductidentifierinudiEnum.EXPIRATION_DATE,
      DeviceProductidentifierinudiEnum.BIOLOGICAL_SOURCE,
      DeviceProductidentifierinudiEnum.SOFTWARE_VERSION,
      DeviceProductidentifierinudiEnum.NULL
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
    } else if (DeviceProductidentifierinudiEnum.LOT_NUMBER.code === code) {
      return DeviceProductidentifierinudiEnum.LOT_NUMBER;
    } else if (DeviceProductidentifierinudiEnum.MANUFACTURED_DATE.code === code) {
      return DeviceProductidentifierinudiEnum.MANUFACTURED_DATE;
    } else if (DeviceProductidentifierinudiEnum.SERIAL_NUMBER.code === code) {
      return DeviceProductidentifierinudiEnum.SERIAL_NUMBER;
    } else if (DeviceProductidentifierinudiEnum.EXPIRATION_DATE.code === code) {
      return DeviceProductidentifierinudiEnum.EXPIRATION_DATE;
    } else if (DeviceProductidentifierinudiEnum.BIOLOGICAL_SOURCE.code === code) {
      return DeviceProductidentifierinudiEnum.BIOLOGICAL_SOURCE;
    } else if (DeviceProductidentifierinudiEnum.SOFTWARE_VERSION.code === code) {
      return DeviceProductidentifierinudiEnum.SOFTWARE_VERSION;
    } else if (DeviceProductidentifierinudiEnum.NULL.code === code) {
      return DeviceProductidentifierinudiEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown DeviceProductidentifierinudiEnum 'code' value '${code}'`);
    }
  }
}
