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
 * SearchParamTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/search-param-type
 * CodeSystem.name: SearchParamType
 * CodeSystem.description: Data types allowed to be used for search parameters.
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
 * FHIR CodeSystem: SearchParamTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem SearchParamType](http://hl7.org/fhir/search-param-type)
 */
export class SearchParamTypeEnum implements IFhirCodeEnum {
  public static readonly NUMBER = new FhirCodeDefinition(
    'NUMBER',
    'number',
    'http://hl7.org/fhir/search-param-type',
    'Number',
    'Search parameter SHALL be a number (a whole number, or a decimal).',
  );
  public static readonly DATE = new FhirCodeDefinition(
    'DATE',
    'date',
    'http://hl7.org/fhir/search-param-type',
    'Date/DateTime',
    'Search parameter is on a date/time. The date format is the standard XML format, though other formats may be supported.',
  );
  public static readonly STRING = new FhirCodeDefinition(
    'STRING',
    'string',
    'http://hl7.org/fhir/search-param-type',
    'String',
    'Search parameter is a simple string, like a name part. Search is case-insensitive and accent-insensitive. May match just the start of a string. String parameters may contain spaces.',
  );
  public static readonly TOKEN = new FhirCodeDefinition(
    'TOKEN',
    'token',
    'http://hl7.org/fhir/search-param-type',
    'Token',
    'Search parameter on a coded element or identifier. May be used to search through the text, display, code and code/codesystem (for codes) and label, system and key (for identifier). Its value is either a string or a pair of namespace and value, separated by a "|", depending on the modifier used.',
  );
  public static readonly REFERENCE = new FhirCodeDefinition(
    'REFERENCE',
    'reference',
    'http://hl7.org/fhir/search-param-type',
    'Reference',
    'A reference to another resource (Reference or canonical).',
  );
  public static readonly COMPOSITE = new FhirCodeDefinition(
    'COMPOSITE',
    'composite',
    'http://hl7.org/fhir/search-param-type',
    'Composite',
    'A composite search parameter that combines a search on two values together.',
  );
  public static readonly QUANTITY = new FhirCodeDefinition(
    'QUANTITY',
    'quantity',
    'http://hl7.org/fhir/search-param-type',
    'Quantity',
    'A search parameter that searches on a quantity.',
  );
  public static readonly URI = new FhirCodeDefinition(
    'URI',
    'uri',
    'http://hl7.org/fhir/search-param-type',
    'URI',
    'A search parameter that searches on a URI (RFC 3986).',
  );
  public static readonly SPECIAL = new FhirCodeDefinition(
    'SPECIAL',
    'special',
    'http://hl7.org/fhir/search-param-type',
    'Special',
    'Special logic applies to this parameter per the description of the search parameter.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      SearchParamTypeEnum.NUMBER,
      SearchParamTypeEnum.DATE,
      SearchParamTypeEnum.STRING,
      SearchParamTypeEnum.TOKEN,
      SearchParamTypeEnum.REFERENCE,
      SearchParamTypeEnum.COMPOSITE,
      SearchParamTypeEnum.QUANTITY,
      SearchParamTypeEnum.URI,
      SearchParamTypeEnum.SPECIAL,
      SearchParamTypeEnum.NULL
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
    } else if (SearchParamTypeEnum.NUMBER.code === code) {
      return SearchParamTypeEnum.NUMBER;
    } else if (SearchParamTypeEnum.DATE.code === code) {
      return SearchParamTypeEnum.DATE;
    } else if (SearchParamTypeEnum.STRING.code === code) {
      return SearchParamTypeEnum.STRING;
    } else if (SearchParamTypeEnum.TOKEN.code === code) {
      return SearchParamTypeEnum.TOKEN;
    } else if (SearchParamTypeEnum.REFERENCE.code === code) {
      return SearchParamTypeEnum.REFERENCE;
    } else if (SearchParamTypeEnum.COMPOSITE.code === code) {
      return SearchParamTypeEnum.COMPOSITE;
    } else if (SearchParamTypeEnum.QUANTITY.code === code) {
      return SearchParamTypeEnum.QUANTITY;
    } else if (SearchParamTypeEnum.URI.code === code) {
      return SearchParamTypeEnum.URI;
    } else if (SearchParamTypeEnum.SPECIAL.code === code) {
      return SearchParamTypeEnum.SPECIAL;
    } else if (SearchParamTypeEnum.NULL.code === code) {
      return SearchParamTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown SearchParamTypeEnum 'code' value '${code}'`);
    }
  }
}
