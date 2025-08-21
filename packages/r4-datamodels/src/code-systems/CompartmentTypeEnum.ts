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
 * CompartmentTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/compartment-type
 * CodeSystem.name: CompartmentType
 * CodeSystem.description: Which type a compartment definition describes.
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
 * FHIR CodeSystem: CompartmentTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem CompartmentType](http://hl7.org/fhir/compartment-type)
 */
export class CompartmentTypeEnum implements IFhirCodeEnum {
  public static readonly PATIENT = new FhirCodeDefinition(
    'PATIENT',
    'Patient',
    'http://hl7.org/fhir/compartment-type',
    'Patient',
    'The compartment definition is for the patient compartment.',
  );
  public static readonly ENCOUNTER = new FhirCodeDefinition(
    'ENCOUNTER',
    'Encounter',
    'http://hl7.org/fhir/compartment-type',
    'Encounter',
    'The compartment definition is for the encounter compartment.',
  );
  public static readonly RELATED_PERSON = new FhirCodeDefinition(
    'RELATED_PERSON',
    'RelatedPerson',
    'http://hl7.org/fhir/compartment-type',
    'RelatedPerson',
    'The compartment definition is for the related-person compartment.',
  );
  public static readonly PRACTITIONER = new FhirCodeDefinition(
    'PRACTITIONER',
    'Practitioner',
    'http://hl7.org/fhir/compartment-type',
    'Practitioner',
    'The compartment definition is for the practitioner compartment.',
  );
  public static readonly DEVICE = new FhirCodeDefinition(
    'DEVICE',
    'Device',
    'http://hl7.org/fhir/compartment-type',
    'Device',
    'The compartment definition is for the device compartment.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      CompartmentTypeEnum.PATIENT,
      CompartmentTypeEnum.ENCOUNTER,
      CompartmentTypeEnum.RELATED_PERSON,
      CompartmentTypeEnum.PRACTITIONER,
      CompartmentTypeEnum.DEVICE,
      CompartmentTypeEnum.NULL
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
    } else if (CompartmentTypeEnum.PATIENT.code === code) {
      return CompartmentTypeEnum.PATIENT;
    } else if (CompartmentTypeEnum.ENCOUNTER.code === code) {
      return CompartmentTypeEnum.ENCOUNTER;
    } else if (CompartmentTypeEnum.RELATED_PERSON.code === code) {
      return CompartmentTypeEnum.RELATED_PERSON;
    } else if (CompartmentTypeEnum.PRACTITIONER.code === code) {
      return CompartmentTypeEnum.PRACTITIONER;
    } else if (CompartmentTypeEnum.DEVICE.code === code) {
      return CompartmentTypeEnum.DEVICE;
    } else if (CompartmentTypeEnum.NULL.code === code) {
      return CompartmentTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown CompartmentTypeEnum 'code' value '${code}'`);
    }
  }
}
