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
 * MeasureReportTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/measure-report-type
 * CodeSystem.name: MeasureReportType
 * CodeSystem.description: The type of the measure report.
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
 * FHIR CodeSystem: MeasureReportTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MeasureReportType](http://hl7.org/fhir/measure-report-type)
 */
export class MeasureReportTypeEnum implements IFhirCodeEnum {
  public static readonly INDIVIDUAL = new FhirCodeDefinition(
    'INDIVIDUAL',
    'individual',
    'http://hl7.org/fhir/measure-report-type',
    'Individual',
    'An individual report that provides information on the performance for a given measure with respect to a single subject.',
  );
  public static readonly SUBJECT_LIST = new FhirCodeDefinition(
    'SUBJECT_LIST',
    'subject-list',
    'http://hl7.org/fhir/measure-report-type',
    'Subject List',
    'A subject list report that includes a listing of subjects that satisfied each population criteria in the measure.',
  );
  public static readonly SUMMARY = new FhirCodeDefinition(
    'SUMMARY',
    'summary',
    'http://hl7.org/fhir/measure-report-type',
    'Summary',
    'A summary report that returns the number of members in each population criteria for the measure.',
  );
  public static readonly DATA_COLLECTION = new FhirCodeDefinition(
    'DATA_COLLECTION',
    'data-collection',
    'http://hl7.org/fhir/measure-report-type',
    'Data Collection',
    'A data collection report that contains data-of-interest for the measure.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MeasureReportTypeEnum.INDIVIDUAL,
      MeasureReportTypeEnum.SUBJECT_LIST,
      MeasureReportTypeEnum.SUMMARY,
      MeasureReportTypeEnum.DATA_COLLECTION,
      MeasureReportTypeEnum.NULL
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
    } else if (MeasureReportTypeEnum.INDIVIDUAL.code === code) {
      return MeasureReportTypeEnum.INDIVIDUAL;
    } else if (MeasureReportTypeEnum.SUBJECT_LIST.code === code) {
      return MeasureReportTypeEnum.SUBJECT_LIST;
    } else if (MeasureReportTypeEnum.SUMMARY.code === code) {
      return MeasureReportTypeEnum.SUMMARY;
    } else if (MeasureReportTypeEnum.DATA_COLLECTION.code === code) {
      return MeasureReportTypeEnum.DATA_COLLECTION;
    } else if (MeasureReportTypeEnum.NULL.code === code) {
      return MeasureReportTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MeasureReportTypeEnum 'code' value '${code}'`);
    }
  }
}
