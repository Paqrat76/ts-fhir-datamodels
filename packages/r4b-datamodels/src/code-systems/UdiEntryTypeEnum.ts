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
 * UdiEntryTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/udi-entry-type
 * CodeSystem.name: UdiEntryType
 * CodeSystem.description: Codes to identify how UDI data was entered.
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
 * FHIR CodeSystem: UdiEntryTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem UdiEntryType](http://hl7.org/fhir/udi-entry-type)
 */
export class UdiEntryTypeEnum implements IFhirCodeEnum {
  public static readonly BARCODE = new FhirCodeDefinition(
    'BARCODE',
    'barcode',
    'http://hl7.org/fhir/udi-entry-type',
    'Barcode',
    'a barcodescanner captured the data from the device label.',
  );
  public static readonly RFID = new FhirCodeDefinition(
    'RFID',
    'rfid',
    'http://hl7.org/fhir/udi-entry-type',
    'RFID',
    'An RFID chip reader captured the data from the device label.',
  );
  public static readonly MANUAL = new FhirCodeDefinition(
    'MANUAL',
    'manual',
    'http://hl7.org/fhir/udi-entry-type',
    'Manual',
    'The data was read from the label by a person and manually entered. (e.g.  via a keyboard).',
  );
  public static readonly CARD = new FhirCodeDefinition(
    'CARD',
    'card',
    'http://hl7.org/fhir/udi-entry-type',
    'Card',
    'The data originated from a patient\'s implant card and was read by an operator.',
  );
  public static readonly SELF_REPORTED = new FhirCodeDefinition(
    'SELF_REPORTED',
    'self-reported',
    'http://hl7.org/fhir/udi-entry-type',
    'Self Reported',
    'The data originated from a patient source and was not directly scanned or read from a label or card.',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/udi-entry-type',
    'Unknown',
    'The method of data capture has not been determined.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      UdiEntryTypeEnum.BARCODE,
      UdiEntryTypeEnum.RFID,
      UdiEntryTypeEnum.MANUAL,
      UdiEntryTypeEnum.CARD,
      UdiEntryTypeEnum.SELF_REPORTED,
      UdiEntryTypeEnum.UNKNOWN,
      UdiEntryTypeEnum.NULL
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
    } else if (UdiEntryTypeEnum.BARCODE.code === code) {
      return UdiEntryTypeEnum.BARCODE;
    } else if (UdiEntryTypeEnum.RFID.code === code) {
      return UdiEntryTypeEnum.RFID;
    } else if (UdiEntryTypeEnum.MANUAL.code === code) {
      return UdiEntryTypeEnum.MANUAL;
    } else if (UdiEntryTypeEnum.CARD.code === code) {
      return UdiEntryTypeEnum.CARD;
    } else if (UdiEntryTypeEnum.SELF_REPORTED.code === code) {
      return UdiEntryTypeEnum.SELF_REPORTED;
    } else if (UdiEntryTypeEnum.UNKNOWN.code === code) {
      return UdiEntryTypeEnum.UNKNOWN;
    } else if (UdiEntryTypeEnum.NULL.code === code) {
      return UdiEntryTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown UdiEntryTypeEnum 'code' value '${code}'`);
    }
  }
}
