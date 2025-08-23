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
 * ConceptmapPropertyTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/conceptmap-property-type
 * CodeSystem.name: ConceptmapPropertyType
 * CodeSystem.description: The type of a ConceptMap mapping property value.
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
 * FHIR CodeSystem: ConceptmapPropertyTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ConceptmapPropertyType](http://hl7.org/fhir/conceptmap-property-type)
 */
export class ConceptmapPropertyTypeEnum implements IFhirCodeEnum {
  public static readonly CODING = new FhirCodeDefinition(
    'CODING',
    'Coding',
    'http://hl7.org/fhir/conceptmap-property-type',
    'Coding (external reference)',
    'The property  value is a code defined in an external code system. This may be used for translations, but is not the intent.',
  );
  public static readonly STRING = new FhirCodeDefinition(
    'STRING',
    'string',
    'http://hl7.org/fhir/conceptmap-property-type',
    'string',
    'The property value is a string.',
  );
  public static readonly INTEGER = new FhirCodeDefinition(
    'INTEGER',
    'integer',
    'http://hl7.org/fhir/conceptmap-property-type',
    'integer',
    'The property value is an integer (often used to assign ranking values to concepts for supporting score assessments).',
  );
  public static readonly BOOLEAN = new FhirCodeDefinition(
    'BOOLEAN',
    'boolean',
    'http://hl7.org/fhir/conceptmap-property-type',
    'boolean',
    'The property value is a boolean true | false.',
  );
  public static readonly DATE_TIME = new FhirCodeDefinition(
    'DATE_TIME',
    'dateTime',
    'http://hl7.org/fhir/conceptmap-property-type',
    'dateTime',
    'The property is a date or a date + time.',
  );
  public static readonly DECIMAL = new FhirCodeDefinition(
    'DECIMAL',
    'decimal',
    'http://hl7.org/fhir/conceptmap-property-type',
    'decimal',
    'The property value is a decimal number.',
  );
  public static readonly CODE = new FhirCodeDefinition(
    'CODE',
    'code',
    'http://hl7.org/fhir/conceptmap-property-type',
    'code',
    'The property value is a code as defined in the CodeSystem in ConceptMap.property.system.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ConceptmapPropertyTypeEnum.CODING,
      ConceptmapPropertyTypeEnum.STRING,
      ConceptmapPropertyTypeEnum.INTEGER,
      ConceptmapPropertyTypeEnum.BOOLEAN,
      ConceptmapPropertyTypeEnum.DATE_TIME,
      ConceptmapPropertyTypeEnum.DECIMAL,
      ConceptmapPropertyTypeEnum.CODE,
      ConceptmapPropertyTypeEnum.NULL
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
    } else if (ConceptmapPropertyTypeEnum.CODING.code === code) {
      return ConceptmapPropertyTypeEnum.CODING;
    } else if (ConceptmapPropertyTypeEnum.STRING.code === code) {
      return ConceptmapPropertyTypeEnum.STRING;
    } else if (ConceptmapPropertyTypeEnum.INTEGER.code === code) {
      return ConceptmapPropertyTypeEnum.INTEGER;
    } else if (ConceptmapPropertyTypeEnum.BOOLEAN.code === code) {
      return ConceptmapPropertyTypeEnum.BOOLEAN;
    } else if (ConceptmapPropertyTypeEnum.DATE_TIME.code === code) {
      return ConceptmapPropertyTypeEnum.DATE_TIME;
    } else if (ConceptmapPropertyTypeEnum.DECIMAL.code === code) {
      return ConceptmapPropertyTypeEnum.DECIMAL;
    } else if (ConceptmapPropertyTypeEnum.CODE.code === code) {
      return ConceptmapPropertyTypeEnum.CODE;
    } else if (ConceptmapPropertyTypeEnum.NULL.code === code) {
      return ConceptmapPropertyTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ConceptmapPropertyTypeEnum 'code' value '${code}'`);
    }
  }
}
