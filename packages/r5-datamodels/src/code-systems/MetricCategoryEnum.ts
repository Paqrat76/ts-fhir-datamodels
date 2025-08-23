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
 * MetricCategoryEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/metric-category
 * CodeSystem.name: MetricCategory
 * CodeSystem.description: Describes the category of the metric.
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
 * FHIR CodeSystem: MetricCategoryEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MetricCategory](http://hl7.org/fhir/metric-category)
 */
export class MetricCategoryEnum implements IFhirCodeEnum {
  public static readonly MEASUREMENT = new FhirCodeDefinition(
    'MEASUREMENT',
    'measurement',
    'http://hl7.org/fhir/metric-category',
    'Measurement',
    'Observations generated for this DeviceMetric are measured.',
  );
  public static readonly SETTING = new FhirCodeDefinition(
    'SETTING',
    'setting',
    'http://hl7.org/fhir/metric-category',
    'Setting',
    'Observations generated for this DeviceMetric is a setting that will influence the behavior of the Device.',
  );
  public static readonly CALCULATION = new FhirCodeDefinition(
    'CALCULATION',
    'calculation',
    'http://hl7.org/fhir/metric-category',
    'Calculation',
    'Observations generated for this DeviceMetric are calculated.',
  );
  public static readonly UNSPECIFIED = new FhirCodeDefinition(
    'UNSPECIFIED',
    'unspecified',
    'http://hl7.org/fhir/metric-category',
    'Unspecified',
    'The category of this DeviceMetric is unspecified.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MetricCategoryEnum.MEASUREMENT,
      MetricCategoryEnum.SETTING,
      MetricCategoryEnum.CALCULATION,
      MetricCategoryEnum.UNSPECIFIED,
      MetricCategoryEnum.NULL
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
    } else if (MetricCategoryEnum.MEASUREMENT.code === code) {
      return MetricCategoryEnum.MEASUREMENT;
    } else if (MetricCategoryEnum.SETTING.code === code) {
      return MetricCategoryEnum.SETTING;
    } else if (MetricCategoryEnum.CALCULATION.code === code) {
      return MetricCategoryEnum.CALCULATION;
    } else if (MetricCategoryEnum.UNSPECIFIED.code === code) {
      return MetricCategoryEnum.UNSPECIFIED;
    } else if (MetricCategoryEnum.NULL.code === code) {
      return MetricCategoryEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MetricCategoryEnum 'code' value '${code}'`);
    }
  }
}
