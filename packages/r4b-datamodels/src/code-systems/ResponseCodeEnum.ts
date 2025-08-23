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
 * ResponseCodeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/response-code
 * CodeSystem.name: ResponseCode
 * CodeSystem.description: The kind of response to a message.
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
 * FHIR CodeSystem: ResponseCodeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ResponseCode](http://hl7.org/fhir/response-code)
 */
export class ResponseCodeEnum implements IFhirCodeEnum {
  public static readonly OK = new FhirCodeDefinition(
    'OK',
    'ok',
    'http://hl7.org/fhir/response-code',
    'OK',
    'The message was accepted and processed without error.',
  );
  public static readonly TRANSIENT_ERROR = new FhirCodeDefinition(
    'TRANSIENT_ERROR',
    'transient-error',
    'http://hl7.org/fhir/response-code',
    'Transient Error',
    'Some internal unexpected error occurred - wait and try again. Note - this is usually used for things like database unavailable, which may be expected to resolve, though human intervention may be required.',
  );
  public static readonly FATAL_ERROR = new FhirCodeDefinition(
    'FATAL_ERROR',
    'fatal-error',
    'http://hl7.org/fhir/response-code',
    'Fatal Error',
    'The message was rejected because of a problem with the content. There is no point in re-sending without change. The response narrative SHALL describe the issue.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ResponseCodeEnum.OK,
      ResponseCodeEnum.TRANSIENT_ERROR,
      ResponseCodeEnum.FATAL_ERROR,
      ResponseCodeEnum.NULL
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
    } else if (ResponseCodeEnum.OK.code === code) {
      return ResponseCodeEnum.OK;
    } else if (ResponseCodeEnum.TRANSIENT_ERROR.code === code) {
      return ResponseCodeEnum.TRANSIENT_ERROR;
    } else if (ResponseCodeEnum.FATAL_ERROR.code === code) {
      return ResponseCodeEnum.FATAL_ERROR;
    } else if (ResponseCodeEnum.NULL.code === code) {
      return ResponseCodeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ResponseCodeEnum 'code' value '${code}'`);
    }
  }
}
