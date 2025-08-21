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
 * GroupTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/group-type
 * CodeSystem.name: GroupType
 * CodeSystem.description: Types of resources that are part of group.
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
 * FHIR CodeSystem: GroupTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem GroupType](http://hl7.org/fhir/group-type)
 */
export class GroupTypeEnum implements IFhirCodeEnum {
  public static readonly PERSON = new FhirCodeDefinition(
    'PERSON',
    'person',
    'http://hl7.org/fhir/group-type',
    'Person',
    'Group contains "person" Patient resources.',
  );
  public static readonly ANIMAL = new FhirCodeDefinition(
    'ANIMAL',
    'animal',
    'http://hl7.org/fhir/group-type',
    'Animal',
    'Group contains "animal" Patient resources.',
  );
  public static readonly PRACTITIONER = new FhirCodeDefinition(
    'PRACTITIONER',
    'practitioner',
    'http://hl7.org/fhir/group-type',
    'Practitioner',
    'Group contains healthcare practitioner resources (Practitioner or PractitionerRole).',
  );
  public static readonly DEVICE = new FhirCodeDefinition(
    'DEVICE',
    'device',
    'http://hl7.org/fhir/group-type',
    'Device',
    'Group contains Device resources.',
  );
  public static readonly MEDICATION = new FhirCodeDefinition(
    'MEDICATION',
    'medication',
    'http://hl7.org/fhir/group-type',
    'Medication',
    'Group contains Medication resources.',
  );
  public static readonly SUBSTANCE = new FhirCodeDefinition(
    'SUBSTANCE',
    'substance',
    'http://hl7.org/fhir/group-type',
    'Substance',
    'Group contains Substance resources.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      GroupTypeEnum.PERSON,
      GroupTypeEnum.ANIMAL,
      GroupTypeEnum.PRACTITIONER,
      GroupTypeEnum.DEVICE,
      GroupTypeEnum.MEDICATION,
      GroupTypeEnum.SUBSTANCE,
      GroupTypeEnum.NULL
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
    } else if (GroupTypeEnum.PERSON.code === code) {
      return GroupTypeEnum.PERSON;
    } else if (GroupTypeEnum.ANIMAL.code === code) {
      return GroupTypeEnum.ANIMAL;
    } else if (GroupTypeEnum.PRACTITIONER.code === code) {
      return GroupTypeEnum.PRACTITIONER;
    } else if (GroupTypeEnum.DEVICE.code === code) {
      return GroupTypeEnum.DEVICE;
    } else if (GroupTypeEnum.MEDICATION.code === code) {
      return GroupTypeEnum.MEDICATION;
    } else if (GroupTypeEnum.SUBSTANCE.code === code) {
      return GroupTypeEnum.SUBSTANCE;
    } else if (GroupTypeEnum.NULL.code === code) {
      return GroupTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown GroupTypeEnum 'code' value '${code}'`);
    }
  }
}
