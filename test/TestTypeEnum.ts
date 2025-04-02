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

import { FhirCodeDefinition, IFhirCodeDefinition, IFhirCodeEnum } from '@src/fhir-core/base-models/core-fhir-codes';
import { fhirCode } from '@src/fhir-core/data-types/primitive/primitive-types';
import { InvalidCodeError } from '@src/fhir-core/errors/InvalidCodeError';

/* eslint-disable jsdoc/require-param, jsdoc/require-returns -- false positives when inheritDoc tag used */

/**
 * FHIR CodeSystem: GroupType
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem GroupType](http://hl7.org/fhir/group-type)
 */
export class TestTypeEnum implements IFhirCodeEnum {
  public static readonly PERSON = new FhirCodeDefinition(
    'PERSON',
    `person`,
    `http://hl7.org/fhir/group-type`,
    `Person`,
    `Group contains "person" Patient resources.`,
  );
  public static readonly ANIMAL = new FhirCodeDefinition(
    'ANIMAL',
    `animal`,
    `http://hl7.org/fhir/group-type`,
    `Animal`,
    `Group contains "animal" Patient resources.`,
  );
  public static readonly PRACTITIONER = new FhirCodeDefinition(
    'PRACTITIONER',
    `practitioner`,
    `http://hl7.org/fhir/group-type`,
    `Practitioner`,
    `Group contains healthcare practitioner resources (Practitioner or PractitionerRole).`,
  );
  public static readonly DEVICE = new FhirCodeDefinition(
    'DEVICE',
    `device`,
    `http://hl7.org/fhir/group-type`,
    `Device`,
    `Group contains Device resources.`,
  );
  public static readonly MEDICATION = new FhirCodeDefinition(
    'MEDICATION',
    `medication`,
    `http://hl7.org/fhir/group-type`,
    `Medication`,
    `Group contains Medication resources.`,
  );
  public static readonly SUBSTANCE = new FhirCodeDefinition(
    'SUBSTANCE',
    `substance`,
    `http://hl7.org/fhir/group-type`,
    `Substance`,
    `Group contains Substance resources.`,
  );
  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * {@inheritDoc IFhirCodeEnum.values}
   */
  values(): IFhirCodeDefinition[] {
    return [
      TestTypeEnum.PERSON,
      TestTypeEnum.ANIMAL,
      TestTypeEnum.PRACTITIONER,
      TestTypeEnum.DEVICE,
      TestTypeEnum.MEDICATION,
      TestTypeEnum.SUBSTANCE,
      TestTypeEnum.NULL,
    ];
  }

  /**
   * {@inheritDoc IFhirCodeEnum.fromCode}
   */
  fromCode(code: fhirCode | undefined): IFhirCodeDefinition {
    if (code === undefined) {
      throw new InvalidCodeError(`The provided 'code' value is undefined`);
    } else if (TestTypeEnum.PERSON.code === code) {
      return TestTypeEnum.PERSON;
    } else if (TestTypeEnum.ANIMAL.code === code) {
      return TestTypeEnum.ANIMAL;
    } else if (TestTypeEnum.PRACTITIONER.code === code) {
      return TestTypeEnum.PRACTITIONER;
    } else if (TestTypeEnum.DEVICE.code === code) {
      return TestTypeEnum.DEVICE;
    } else if (TestTypeEnum.MEDICATION.code === code) {
      return TestTypeEnum.MEDICATION;
    } else if (TestTypeEnum.SUBSTANCE.code === code) {
      return TestTypeEnum.SUBSTANCE;
    } else if (TestTypeEnum.NULL.code === code) {
      return TestTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown GroupTypeEnum 'code' value '${code}'`);
    }
  }
}

/* eslint-enable jsdoc/require-param, jsdoc/require-returns -- false positives when inheritDoc tag used */
