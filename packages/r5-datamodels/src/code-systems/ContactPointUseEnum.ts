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
 * ContactPointUseEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/contact-point-use
 * CodeSystem.name: ContactPointUse
 * CodeSystem.description: Use of contact point.
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
 * FHIR CodeSystem: ContactPointUseEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ContactPointUse](http://hl7.org/fhir/contact-point-use)
 */
export class ContactPointUseEnum implements IFhirCodeEnum {
  public static readonly HOME = new FhirCodeDefinition(
    'HOME',
    'home',
    'http://hl7.org/fhir/contact-point-use',
    'Home',
    'A communication contact point at a home; attempted contacts for business purposes might intrude privacy and chances are one will contact family or other household members instead of the person one wishes to call. Typically used with urgent cases, or if no other contacts are available.',
  );
  public static readonly WORK = new FhirCodeDefinition(
    'WORK',
    'work',
    'http://hl7.org/fhir/contact-point-use',
    'Work',
    'An office contact point. First choice for business related contacts during business hours.',
  );
  public static readonly TEMP = new FhirCodeDefinition(
    'TEMP',
    'temp',
    'http://hl7.org/fhir/contact-point-use',
    'Temp',
    'A temporary contact point. The period can provide more detailed information.',
  );
  public static readonly OLD = new FhirCodeDefinition(
    'OLD',
    'old',
    'http://hl7.org/fhir/contact-point-use',
    'Old',
    'This contact point is no longer in use (or was never correct, but retained for records).',
  );
  public static readonly MOBILE = new FhirCodeDefinition(
    'MOBILE',
    'mobile',
    'http://hl7.org/fhir/contact-point-use',
    'Mobile',
    'A telecommunication device that moves and stays with its owner. May have characteristics of all other use codes, suitable for urgent matters, not the first choice for routine business.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ContactPointUseEnum.HOME,
      ContactPointUseEnum.WORK,
      ContactPointUseEnum.TEMP,
      ContactPointUseEnum.OLD,
      ContactPointUseEnum.MOBILE,
      ContactPointUseEnum.NULL
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
    } else if (ContactPointUseEnum.HOME.code === code) {
      return ContactPointUseEnum.HOME;
    } else if (ContactPointUseEnum.WORK.code === code) {
      return ContactPointUseEnum.WORK;
    } else if (ContactPointUseEnum.TEMP.code === code) {
      return ContactPointUseEnum.TEMP;
    } else if (ContactPointUseEnum.OLD.code === code) {
      return ContactPointUseEnum.OLD;
    } else if (ContactPointUseEnum.MOBILE.code === code) {
      return ContactPointUseEnum.MOBILE;
    } else if (ContactPointUseEnum.NULL.code === code) {
      return ContactPointUseEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ContactPointUseEnum 'code' value '${code}'`);
    }
  }
}
