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
 * HttpOperationsEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/http-operations
 * CodeSystem.name: HttpOperations
 * CodeSystem.description: The allowable request method or HTTP operation codes.
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
 * FHIR CodeSystem: HttpOperationsEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem HttpOperations](http://hl7.org/fhir/http-operations)
 */
export class HttpOperationsEnum implements IFhirCodeEnum {
  public static readonly DELETE = new FhirCodeDefinition(
    'DELETE',
    'delete',
    'http://hl7.org/fhir/http-operations',
    'DELETE',
    'HTTP DELETE operation.',
  );
  public static readonly GET = new FhirCodeDefinition(
    'GET',
    'get',
    'http://hl7.org/fhir/http-operations',
    'GET',
    'HTTP GET operation.',
  );
  public static readonly OPTIONS = new FhirCodeDefinition(
    'OPTIONS',
    'options',
    'http://hl7.org/fhir/http-operations',
    'OPTIONS',
    'HTTP OPTIONS operation.',
  );
  public static readonly PATCH = new FhirCodeDefinition(
    'PATCH',
    'patch',
    'http://hl7.org/fhir/http-operations',
    'PATCH',
    'HTTP PATCH operation.',
  );
  public static readonly POST = new FhirCodeDefinition(
    'POST',
    'post',
    'http://hl7.org/fhir/http-operations',
    'POST',
    'HTTP POST operation.',
  );
  public static readonly PUT = new FhirCodeDefinition(
    'PUT',
    'put',
    'http://hl7.org/fhir/http-operations',
    'PUT',
    'HTTP PUT operation.',
  );
  public static readonly HEAD = new FhirCodeDefinition(
    'HEAD',
    'head',
    'http://hl7.org/fhir/http-operations',
    'HEAD',
    'HTTP HEAD operation.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      HttpOperationsEnum.DELETE,
      HttpOperationsEnum.GET,
      HttpOperationsEnum.OPTIONS,
      HttpOperationsEnum.PATCH,
      HttpOperationsEnum.POST,
      HttpOperationsEnum.PUT,
      HttpOperationsEnum.HEAD,
      HttpOperationsEnum.NULL
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
    } else if (HttpOperationsEnum.DELETE.code === code) {
      return HttpOperationsEnum.DELETE;
    } else if (HttpOperationsEnum.GET.code === code) {
      return HttpOperationsEnum.GET;
    } else if (HttpOperationsEnum.OPTIONS.code === code) {
      return HttpOperationsEnum.OPTIONS;
    } else if (HttpOperationsEnum.PATCH.code === code) {
      return HttpOperationsEnum.PATCH;
    } else if (HttpOperationsEnum.POST.code === code) {
      return HttpOperationsEnum.POST;
    } else if (HttpOperationsEnum.PUT.code === code) {
      return HttpOperationsEnum.PUT;
    } else if (HttpOperationsEnum.HEAD.code === code) {
      return HttpOperationsEnum.HEAD;
    } else if (HttpOperationsEnum.NULL.code === code) {
      return HttpOperationsEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown HttpOperationsEnum 'code' value '${code}'`);
    }
  }
}
