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
 * ConceptPropertyTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/concept-property-type
 * CodeSystem.name: ConceptPropertyType
 * CodeSystem.description: The type of a property value.
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
 * FHIR CodeSystem: ConceptPropertyTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ConceptPropertyType](http://hl7.org/fhir/concept-property-type)
 */
export class ConceptPropertyTypeEnum implements IFhirCodeEnum {
  public static readonly CODE = new FhirCodeDefinition(
    'CODE',
    'code',
    'http://hl7.org/fhir/concept-property-type',
    'code (internal reference)',
    'The property value is a code that identifies a concept defined in the code system.',
  );
  public static readonly CODING = new FhirCodeDefinition(
    'CODING',
    'Coding',
    'http://hl7.org/fhir/concept-property-type',
    'Coding (external reference)',
    'The property  value is a code defined in an external code system. This may be used for translations, but is not the intent.',
  );
  public static readonly STRING = new FhirCodeDefinition(
    'STRING',
    'string',
    'http://hl7.org/fhir/concept-property-type',
    'string',
    'The property value is a string.',
  );
  public static readonly INTEGER = new FhirCodeDefinition(
    'INTEGER',
    'integer',
    'http://hl7.org/fhir/concept-property-type',
    'integer',
    'The property value is a string (often used to assign ranking values to concepts for supporting score assessments).',
  );
  public static readonly BOOLEAN = new FhirCodeDefinition(
    'BOOLEAN',
    'boolean',
    'http://hl7.org/fhir/concept-property-type',
    'boolean',
    'The property value is a boolean true | false.',
  );
  public static readonly DATE_TIME = new FhirCodeDefinition(
    'DATE_TIME',
    'dateTime',
    'http://hl7.org/fhir/concept-property-type',
    'dateTime',
    'The property is a date or a date + time.',
  );
  public static readonly DECIMAL = new FhirCodeDefinition(
    'DECIMAL',
    'decimal',
    'http://hl7.org/fhir/concept-property-type',
    'decimal',
    'The property value is a decimal number.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ConceptPropertyTypeEnum.CODE,
      ConceptPropertyTypeEnum.CODING,
      ConceptPropertyTypeEnum.STRING,
      ConceptPropertyTypeEnum.INTEGER,
      ConceptPropertyTypeEnum.BOOLEAN,
      ConceptPropertyTypeEnum.DATE_TIME,
      ConceptPropertyTypeEnum.DECIMAL,
      ConceptPropertyTypeEnum.NULL
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
    } else if (ConceptPropertyTypeEnum.CODE.code === code) {
      return ConceptPropertyTypeEnum.CODE;
    } else if (ConceptPropertyTypeEnum.CODING.code === code) {
      return ConceptPropertyTypeEnum.CODING;
    } else if (ConceptPropertyTypeEnum.STRING.code === code) {
      return ConceptPropertyTypeEnum.STRING;
    } else if (ConceptPropertyTypeEnum.INTEGER.code === code) {
      return ConceptPropertyTypeEnum.INTEGER;
    } else if (ConceptPropertyTypeEnum.BOOLEAN.code === code) {
      return ConceptPropertyTypeEnum.BOOLEAN;
    } else if (ConceptPropertyTypeEnum.DATE_TIME.code === code) {
      return ConceptPropertyTypeEnum.DATE_TIME;
    } else if (ConceptPropertyTypeEnum.DECIMAL.code === code) {
      return ConceptPropertyTypeEnum.DECIMAL;
    } else if (ConceptPropertyTypeEnum.NULL.code === code) {
      return ConceptPropertyTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ConceptPropertyTypeEnum 'code' value '${code}'`);
    }
  }
}
