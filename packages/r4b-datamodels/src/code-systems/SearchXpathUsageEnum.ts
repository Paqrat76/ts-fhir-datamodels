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
 * SearchXpathUsageEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/search-xpath-usage
 * CodeSystem.name: SearchXpathUsage
 * CodeSystem.description: How a search parameter relates to the set of elements returned by evaluating its xpath query.
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
 * FHIR CodeSystem: SearchXpathUsageEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem SearchXpathUsage](http://hl7.org/fhir/search-xpath-usage)
 */
export class SearchXpathUsageEnum implements IFhirCodeEnum {
  public static readonly NORMAL = new FhirCodeDefinition(
    'NORMAL',
    'normal',
    'http://hl7.org/fhir/search-xpath-usage',
    'Normal',
    'The search parameter is derived directly from the selected nodes based on the type definitions.',
  );
  public static readonly PHONETIC = new FhirCodeDefinition(
    'PHONETIC',
    'phonetic',
    'http://hl7.org/fhir/search-xpath-usage',
    'Phonetic',
    'The search parameter is derived by a phonetic transform from the selected nodes.',
  );
  public static readonly NEARBY = new FhirCodeDefinition(
    'NEARBY',
    'nearby',
    'http://hl7.org/fhir/search-xpath-usage',
    'Nearby',
    'The search parameter is based on a spatial transform of the selected nodes.',
  );
  public static readonly DISTANCE = new FhirCodeDefinition(
    'DISTANCE',
    'distance',
    'http://hl7.org/fhir/search-xpath-usage',
    'Distance',
    'The search parameter is based on a spatial transform of the selected nodes, using physical distance from the middle.',
  );
  public static readonly OTHER = new FhirCodeDefinition(
    'OTHER',
    'other',
    'http://hl7.org/fhir/search-xpath-usage',
    'Other',
    'The interpretation of the xpath statement is unknown (and can\'t be automated).',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      SearchXpathUsageEnum.NORMAL,
      SearchXpathUsageEnum.PHONETIC,
      SearchXpathUsageEnum.NEARBY,
      SearchXpathUsageEnum.DISTANCE,
      SearchXpathUsageEnum.OTHER,
      SearchXpathUsageEnum.NULL
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
    } else if (SearchXpathUsageEnum.NORMAL.code === code) {
      return SearchXpathUsageEnum.NORMAL;
    } else if (SearchXpathUsageEnum.PHONETIC.code === code) {
      return SearchXpathUsageEnum.PHONETIC;
    } else if (SearchXpathUsageEnum.NEARBY.code === code) {
      return SearchXpathUsageEnum.NEARBY;
    } else if (SearchXpathUsageEnum.DISTANCE.code === code) {
      return SearchXpathUsageEnum.DISTANCE;
    } else if (SearchXpathUsageEnum.OTHER.code === code) {
      return SearchXpathUsageEnum.OTHER;
    } else if (SearchXpathUsageEnum.NULL.code === code) {
      return SearchXpathUsageEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown SearchXpathUsageEnum 'code' value '${code}'`);
    }
  }
}
