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
 * GuidanceResponseStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/guidance-response-status
 * CodeSystem.name: GuidanceResponseStatus
 * CodeSystem.description: The status of a guidance response.
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
 * FHIR CodeSystem: GuidanceResponseStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem GuidanceResponseStatus](http://hl7.org/fhir/guidance-response-status)
 */
export class GuidanceResponseStatusEnum implements IFhirCodeEnum {
  public static readonly SUCCESS = new FhirCodeDefinition(
    'SUCCESS',
    'success',
    'http://hl7.org/fhir/guidance-response-status',
    'Success',
    'The request was processed successfully.',
  );
  public static readonly DATA_REQUESTED = new FhirCodeDefinition(
    'DATA_REQUESTED',
    'data-requested',
    'http://hl7.org/fhir/guidance-response-status',
    'Data Requested',
    'The request was processed successfully, but more data may result in a more complete evaluation.',
  );
  public static readonly DATA_REQUIRED = new FhirCodeDefinition(
    'DATA_REQUIRED',
    'data-required',
    'http://hl7.org/fhir/guidance-response-status',
    'Data Required',
    'The request was processed, but more data is required to complete the evaluation.',
  );
  public static readonly IN_PROGRESS = new FhirCodeDefinition(
    'IN_PROGRESS',
    'in-progress',
    'http://hl7.org/fhir/guidance-response-status',
    'In Progress',
    'The request is currently being processed.',
  );
  public static readonly FAILURE = new FhirCodeDefinition(
    'FAILURE',
    'failure',
    'http://hl7.org/fhir/guidance-response-status',
    'Failure',
    'The request was not processed successfully.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/guidance-response-status',
    'Entered In Error',
    'The response was entered in error.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      GuidanceResponseStatusEnum.SUCCESS,
      GuidanceResponseStatusEnum.DATA_REQUESTED,
      GuidanceResponseStatusEnum.DATA_REQUIRED,
      GuidanceResponseStatusEnum.IN_PROGRESS,
      GuidanceResponseStatusEnum.FAILURE,
      GuidanceResponseStatusEnum.ENTERED_IN_ERROR,
      GuidanceResponseStatusEnum.NULL
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
    } else if (GuidanceResponseStatusEnum.SUCCESS.code === code) {
      return GuidanceResponseStatusEnum.SUCCESS;
    } else if (GuidanceResponseStatusEnum.DATA_REQUESTED.code === code) {
      return GuidanceResponseStatusEnum.DATA_REQUESTED;
    } else if (GuidanceResponseStatusEnum.DATA_REQUIRED.code === code) {
      return GuidanceResponseStatusEnum.DATA_REQUIRED;
    } else if (GuidanceResponseStatusEnum.IN_PROGRESS.code === code) {
      return GuidanceResponseStatusEnum.IN_PROGRESS;
    } else if (GuidanceResponseStatusEnum.FAILURE.code === code) {
      return GuidanceResponseStatusEnum.FAILURE;
    } else if (GuidanceResponseStatusEnum.ENTERED_IN_ERROR.code === code) {
      return GuidanceResponseStatusEnum.ENTERED_IN_ERROR;
    } else if (GuidanceResponseStatusEnum.NULL.code === code) {
      return GuidanceResponseStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown GuidanceResponseStatusEnum 'code' value '${code}'`);
    }
  }
}
