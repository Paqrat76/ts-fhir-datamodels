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
 * GroupMeasureEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/group-measure
 * CodeSystem.name: GroupMeasure
 * CodeSystem.description: Possible group measure aggregates (E.g. Mean, Median).
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
 * FHIR CodeSystem: GroupMeasureEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem GroupMeasure](http://hl7.org/fhir/group-measure)
 */
export class GroupMeasureEnum implements IFhirCodeEnum {
  public static readonly MEAN = new FhirCodeDefinition(
    'MEAN',
    'mean',
    'http://hl7.org/fhir/group-measure',
    'Mean',
    'Aggregated using Mean of participant values.',
  );
  public static readonly MEDIAN = new FhirCodeDefinition(
    'MEDIAN',
    'median',
    'http://hl7.org/fhir/group-measure',
    'Median',
    'Aggregated using Median of participant values.',
  );
  public static readonly MEAN_OF_MEAN = new FhirCodeDefinition(
    'MEAN_OF_MEAN',
    'mean-of-mean',
    'http://hl7.org/fhir/group-measure',
    'Mean of Study Means',
    'Aggregated using Mean of study mean values.',
  );
  public static readonly MEAN_OF_MEDIAN = new FhirCodeDefinition(
    'MEAN_OF_MEDIAN',
    'mean-of-median',
    'http://hl7.org/fhir/group-measure',
    'Mean of Study Medins',
    'Aggregated using Mean of study median values.',
  );
  public static readonly MEDIAN_OF_MEAN = new FhirCodeDefinition(
    'MEDIAN_OF_MEAN',
    'median-of-mean',
    'http://hl7.org/fhir/group-measure',
    'Median of Study Means',
    'Aggregated using Median of study mean values.',
  );
  public static readonly MEDIAN_OF_MEDIAN = new FhirCodeDefinition(
    'MEDIAN_OF_MEDIAN',
    'median-of-median',
    'http://hl7.org/fhir/group-measure',
    'Median of Study Medians',
    'Aggregated using Median of study median values.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      GroupMeasureEnum.MEAN,
      GroupMeasureEnum.MEDIAN,
      GroupMeasureEnum.MEAN_OF_MEAN,
      GroupMeasureEnum.MEAN_OF_MEDIAN,
      GroupMeasureEnum.MEDIAN_OF_MEAN,
      GroupMeasureEnum.MEDIAN_OF_MEDIAN,
      GroupMeasureEnum.NULL
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
    } else if (GroupMeasureEnum.MEAN.code === code) {
      return GroupMeasureEnum.MEAN;
    } else if (GroupMeasureEnum.MEDIAN.code === code) {
      return GroupMeasureEnum.MEDIAN;
    } else if (GroupMeasureEnum.MEAN_OF_MEAN.code === code) {
      return GroupMeasureEnum.MEAN_OF_MEAN;
    } else if (GroupMeasureEnum.MEAN_OF_MEDIAN.code === code) {
      return GroupMeasureEnum.MEAN_OF_MEDIAN;
    } else if (GroupMeasureEnum.MEDIAN_OF_MEAN.code === code) {
      return GroupMeasureEnum.MEDIAN_OF_MEAN;
    } else if (GroupMeasureEnum.MEDIAN_OF_MEDIAN.code === code) {
      return GroupMeasureEnum.MEDIAN_OF_MEDIAN;
    } else if (GroupMeasureEnum.NULL.code === code) {
      return GroupMeasureEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown GroupMeasureEnum 'code' value '${code}'`);
    }
  }
}
