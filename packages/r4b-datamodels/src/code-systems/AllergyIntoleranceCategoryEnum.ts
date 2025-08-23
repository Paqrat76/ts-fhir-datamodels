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
 * AllergyIntoleranceCategoryEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/allergy-intolerance-category
 * CodeSystem.name: AllergyIntoleranceCategory
 * CodeSystem.description: Category of an identified substance associated with allergies or intolerances.
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
 * FHIR CodeSystem: AllergyIntoleranceCategoryEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem AllergyIntoleranceCategory](http://hl7.org/fhir/allergy-intolerance-category)
 */
export class AllergyIntoleranceCategoryEnum implements IFhirCodeEnum {
  public static readonly FOOD = new FhirCodeDefinition(
    'FOOD',
    'food',
    'http://hl7.org/fhir/allergy-intolerance-category',
    'Food',
    'Any substance consumed to provide nutritional support for the body.',
  );
  public static readonly MEDICATION = new FhirCodeDefinition(
    'MEDICATION',
    'medication',
    'http://hl7.org/fhir/allergy-intolerance-category',
    'Medication',
    'Substances administered to achieve a physiological effect.',
  );
  public static readonly ENVIRONMENT = new FhirCodeDefinition(
    'ENVIRONMENT',
    'environment',
    'http://hl7.org/fhir/allergy-intolerance-category',
    'Environment',
    'Any substances that are encountered in the environment, including any substance not already classified as food, medication, or biologic.',
  );
  public static readonly BIOLOGIC = new FhirCodeDefinition(
    'BIOLOGIC',
    'biologic',
    'http://hl7.org/fhir/allergy-intolerance-category',
    'Biologic',
    'A preparation that is synthesized from living organisms or their products, especially a human or animal protein, such as a hormone or antitoxin, that is used as a diagnostic, preventive, or therapeutic agent. Examples of biologic medications include: vaccines; allergenic extracts, which are used for both diagnosis and treatment (for example, allergy shots); gene therapies; cellular therapies.  There are other biologic products, such as tissues, which are not typically associated with allergies.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      AllergyIntoleranceCategoryEnum.FOOD,
      AllergyIntoleranceCategoryEnum.MEDICATION,
      AllergyIntoleranceCategoryEnum.ENVIRONMENT,
      AllergyIntoleranceCategoryEnum.BIOLOGIC,
      AllergyIntoleranceCategoryEnum.NULL
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
    } else if (AllergyIntoleranceCategoryEnum.FOOD.code === code) {
      return AllergyIntoleranceCategoryEnum.FOOD;
    } else if (AllergyIntoleranceCategoryEnum.MEDICATION.code === code) {
      return AllergyIntoleranceCategoryEnum.MEDICATION;
    } else if (AllergyIntoleranceCategoryEnum.ENVIRONMENT.code === code) {
      return AllergyIntoleranceCategoryEnum.ENVIRONMENT;
    } else if (AllergyIntoleranceCategoryEnum.BIOLOGIC.code === code) {
      return AllergyIntoleranceCategoryEnum.BIOLOGIC;
    } else if (AllergyIntoleranceCategoryEnum.NULL.code === code) {
      return AllergyIntoleranceCategoryEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown AllergyIntoleranceCategoryEnum 'code' value '${code}'`);
    }
  }
}
