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
 * SearchComparatorEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/search-comparator
 * CodeSystem.name: SearchComparator
 * CodeSystem.description: What Search Comparator Codes are supported in search.
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
 * FHIR CodeSystem: SearchComparatorEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem SearchComparator](http://hl7.org/fhir/search-comparator)
 */
export class SearchComparatorEnum implements IFhirCodeEnum {
  public static readonly EQ = new FhirCodeDefinition(
    'EQ',
    'eq',
    'http://hl7.org/fhir/search-comparator',
    'Equals',
    'the value for the parameter in the resource is equal to the provided value.',
  );
  public static readonly NE = new FhirCodeDefinition(
    'NE',
    'ne',
    'http://hl7.org/fhir/search-comparator',
    'Not Equals',
    'the value for the parameter in the resource is not equal to the provided value.',
  );
  public static readonly GT = new FhirCodeDefinition(
    'GT',
    'gt',
    'http://hl7.org/fhir/search-comparator',
    'Greater Than',
    'the value for the parameter in the resource is greater than the provided value.',
  );
  public static readonly LT = new FhirCodeDefinition(
    'LT',
    'lt',
    'http://hl7.org/fhir/search-comparator',
    'Less Than',
    'the value for the parameter in the resource is less than the provided value.',
  );
  public static readonly GE = new FhirCodeDefinition(
    'GE',
    'ge',
    'http://hl7.org/fhir/search-comparator',
    'Greater or Equals',
    'the value for the parameter in the resource is greater or equal to the provided value.',
  );
  public static readonly LE = new FhirCodeDefinition(
    'LE',
    'le',
    'http://hl7.org/fhir/search-comparator',
    'Less of Equal',
    'the value for the parameter in the resource is less or equal to the provided value.',
  );
  public static readonly SA = new FhirCodeDefinition(
    'SA',
    'sa',
    'http://hl7.org/fhir/search-comparator',
    'Starts After',
    'the value for the parameter in the resource starts after the provided value.',
  );
  public static readonly EB = new FhirCodeDefinition(
    'EB',
    'eb',
    'http://hl7.org/fhir/search-comparator',
    'Ends Before',
    'the value for the parameter in the resource ends before the provided value.',
  );
  public static readonly AP = new FhirCodeDefinition(
    'AP',
    'ap',
    'http://hl7.org/fhir/search-comparator',
    'Approximately',
    'the value for the parameter in the resource is approximately the same to the provided value.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      SearchComparatorEnum.EQ,
      SearchComparatorEnum.NE,
      SearchComparatorEnum.GT,
      SearchComparatorEnum.LT,
      SearchComparatorEnum.GE,
      SearchComparatorEnum.LE,
      SearchComparatorEnum.SA,
      SearchComparatorEnum.EB,
      SearchComparatorEnum.AP,
      SearchComparatorEnum.NULL
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
    } else if (SearchComparatorEnum.EQ.code === code) {
      return SearchComparatorEnum.EQ;
    } else if (SearchComparatorEnum.NE.code === code) {
      return SearchComparatorEnum.NE;
    } else if (SearchComparatorEnum.GT.code === code) {
      return SearchComparatorEnum.GT;
    } else if (SearchComparatorEnum.LT.code === code) {
      return SearchComparatorEnum.LT;
    } else if (SearchComparatorEnum.GE.code === code) {
      return SearchComparatorEnum.GE;
    } else if (SearchComparatorEnum.LE.code === code) {
      return SearchComparatorEnum.LE;
    } else if (SearchComparatorEnum.SA.code === code) {
      return SearchComparatorEnum.SA;
    } else if (SearchComparatorEnum.EB.code === code) {
      return SearchComparatorEnum.EB;
    } else if (SearchComparatorEnum.AP.code === code) {
      return SearchComparatorEnum.AP;
    } else if (SearchComparatorEnum.NULL.code === code) {
      return SearchComparatorEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown SearchComparatorEnum 'code' value '${code}'`);
    }
  }
}
