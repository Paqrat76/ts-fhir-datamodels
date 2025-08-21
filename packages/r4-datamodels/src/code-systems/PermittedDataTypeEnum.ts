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
 * PermittedDataTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/permitted-data-type
 * CodeSystem.name: PermittedDataType
 * CodeSystem.description: Permitted data type for observation value.
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
 * FHIR CodeSystem: PermittedDataTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem PermittedDataType](http://hl7.org/fhir/permitted-data-type)
 */
export class PermittedDataTypeEnum implements IFhirCodeEnum {
  public static readonly QUANTITY = new FhirCodeDefinition(
    'QUANTITY',
    'Quantity',
    'http://hl7.org/fhir/permitted-data-type',
    'Quantity',
    'A measured amount.',
  );
  public static readonly CODEABLE_CONCEPT = new FhirCodeDefinition(
    'CODEABLE_CONCEPT',
    'CodeableConcept',
    'http://hl7.org/fhir/permitted-data-type',
    'CodeableConcept',
    'A coded concept from a reference terminology and/or text.',
  );
  public static readonly STRING = new FhirCodeDefinition(
    'STRING',
    'string',
    'http://hl7.org/fhir/permitted-data-type',
    'string',
    'A sequence of Unicode characters.',
  );
  public static readonly BOOLEAN = new FhirCodeDefinition(
    'BOOLEAN',
    'boolean',
    'http://hl7.org/fhir/permitted-data-type',
    'boolean',
    'true or false.',
  );
  public static readonly INTEGER = new FhirCodeDefinition(
    'INTEGER',
    'integer',
    'http://hl7.org/fhir/permitted-data-type',
    'integer',
    'A signed integer.',
  );
  public static readonly RANGE = new FhirCodeDefinition(
    'RANGE',
    'Range',
    'http://hl7.org/fhir/permitted-data-type',
    'Range',
    'A set of values bounded by low and high.',
  );
  public static readonly RATIO = new FhirCodeDefinition(
    'RATIO',
    'Ratio',
    'http://hl7.org/fhir/permitted-data-type',
    'Ratio',
    'A ratio of two Quantity values - a numerator and a denominator.',
  );
  public static readonly SAMPLED_DATA = new FhirCodeDefinition(
    'SAMPLED_DATA',
    'SampledData',
    'http://hl7.org/fhir/permitted-data-type',
    'SampledData',
    'A series of measurements taken by a device.',
  );
  public static readonly TIME = new FhirCodeDefinition(
    'TIME',
    'time',
    'http://hl7.org/fhir/permitted-data-type',
    'time',
    'A time during the day, in the format hh:mm:ss.',
  );
  public static readonly DATE_TIME = new FhirCodeDefinition(
    'DATE_TIME',
    'dateTime',
    'http://hl7.org/fhir/permitted-data-type',
    'dateTime',
    'A date, date-time or partial date (e.g. just year or year + month) as used in human communication.',
  );
  public static readonly PERIOD = new FhirCodeDefinition(
    'PERIOD',
    'Period',
    'http://hl7.org/fhir/permitted-data-type',
    'Period',
    'A time range defined by start and end date/time.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      PermittedDataTypeEnum.QUANTITY,
      PermittedDataTypeEnum.CODEABLE_CONCEPT,
      PermittedDataTypeEnum.STRING,
      PermittedDataTypeEnum.BOOLEAN,
      PermittedDataTypeEnum.INTEGER,
      PermittedDataTypeEnum.RANGE,
      PermittedDataTypeEnum.RATIO,
      PermittedDataTypeEnum.SAMPLED_DATA,
      PermittedDataTypeEnum.TIME,
      PermittedDataTypeEnum.DATE_TIME,
      PermittedDataTypeEnum.PERIOD,
      PermittedDataTypeEnum.NULL
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
    } else if (PermittedDataTypeEnum.QUANTITY.code === code) {
      return PermittedDataTypeEnum.QUANTITY;
    } else if (PermittedDataTypeEnum.CODEABLE_CONCEPT.code === code) {
      return PermittedDataTypeEnum.CODEABLE_CONCEPT;
    } else if (PermittedDataTypeEnum.STRING.code === code) {
      return PermittedDataTypeEnum.STRING;
    } else if (PermittedDataTypeEnum.BOOLEAN.code === code) {
      return PermittedDataTypeEnum.BOOLEAN;
    } else if (PermittedDataTypeEnum.INTEGER.code === code) {
      return PermittedDataTypeEnum.INTEGER;
    } else if (PermittedDataTypeEnum.RANGE.code === code) {
      return PermittedDataTypeEnum.RANGE;
    } else if (PermittedDataTypeEnum.RATIO.code === code) {
      return PermittedDataTypeEnum.RATIO;
    } else if (PermittedDataTypeEnum.SAMPLED_DATA.code === code) {
      return PermittedDataTypeEnum.SAMPLED_DATA;
    } else if (PermittedDataTypeEnum.TIME.code === code) {
      return PermittedDataTypeEnum.TIME;
    } else if (PermittedDataTypeEnum.DATE_TIME.code === code) {
      return PermittedDataTypeEnum.DATE_TIME;
    } else if (PermittedDataTypeEnum.PERIOD.code === code) {
      return PermittedDataTypeEnum.PERIOD;
    } else if (PermittedDataTypeEnum.NULL.code === code) {
      return PermittedDataTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown PermittedDataTypeEnum 'code' value '${code}'`);
    }
  }
}
