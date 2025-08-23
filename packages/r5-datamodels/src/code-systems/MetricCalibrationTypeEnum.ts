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
 * MetricCalibrationTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/metric-calibration-type
 * CodeSystem.name: MetricCalibrationType
 * CodeSystem.description: Describes the type of a metric calibration.
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
 * FHIR CodeSystem: MetricCalibrationTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MetricCalibrationType](http://hl7.org/fhir/metric-calibration-type)
 */
export class MetricCalibrationTypeEnum implements IFhirCodeEnum {
  public static readonly UNSPECIFIED = new FhirCodeDefinition(
    'UNSPECIFIED',
    'unspecified',
    'http://hl7.org/fhir/metric-calibration-type',
    'Unspecified',
    'Metric calibration method has not been identified.',
  );
  public static readonly OFFSET = new FhirCodeDefinition(
    'OFFSET',
    'offset',
    'http://hl7.org/fhir/metric-calibration-type',
    'Offset',
    'Offset metric calibration method.',
  );
  public static readonly GAIN = new FhirCodeDefinition(
    'GAIN',
    'gain',
    'http://hl7.org/fhir/metric-calibration-type',
    'Gain',
    'Gain metric calibration method.',
  );
  public static readonly TWO_POINT = new FhirCodeDefinition(
    'TWO_POINT',
    'two-point',
    'http://hl7.org/fhir/metric-calibration-type',
    'Two Point',
    'Two-point metric calibration method.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MetricCalibrationTypeEnum.UNSPECIFIED,
      MetricCalibrationTypeEnum.OFFSET,
      MetricCalibrationTypeEnum.GAIN,
      MetricCalibrationTypeEnum.TWO_POINT,
      MetricCalibrationTypeEnum.NULL
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
    } else if (MetricCalibrationTypeEnum.UNSPECIFIED.code === code) {
      return MetricCalibrationTypeEnum.UNSPECIFIED;
    } else if (MetricCalibrationTypeEnum.OFFSET.code === code) {
      return MetricCalibrationTypeEnum.OFFSET;
    } else if (MetricCalibrationTypeEnum.GAIN.code === code) {
      return MetricCalibrationTypeEnum.GAIN;
    } else if (MetricCalibrationTypeEnum.TWO_POINT.code === code) {
      return MetricCalibrationTypeEnum.TWO_POINT;
    } else if (MetricCalibrationTypeEnum.NULL.code === code) {
      return MetricCalibrationTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MetricCalibrationTypeEnum 'code' value '${code}'`);
    }
  }
}
