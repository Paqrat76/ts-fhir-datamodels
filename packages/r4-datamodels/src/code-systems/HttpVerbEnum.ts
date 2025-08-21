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
 * HttpVerbEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/http-verb
 * CodeSystem.name: HttpVerb
 * CodeSystem.description: HTTP verbs (in the HTTP command line). See [HTTP rfc](https://tools.ietf.org/html/rfc7231) for details.
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
 * FHIR CodeSystem: HttpVerbEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem HttpVerb](http://hl7.org/fhir/http-verb)
 */
export class HttpVerbEnum implements IFhirCodeEnum {
  public static readonly GET = new FhirCodeDefinition(
    'GET',
    'GET',
    'http://hl7.org/fhir/http-verb',
    'GET',
    'HTTP GET Command.',
  );
  public static readonly HEAD = new FhirCodeDefinition(
    'HEAD',
    'HEAD',
    'http://hl7.org/fhir/http-verb',
    'HEAD',
    'HTTP HEAD Command.',
  );
  public static readonly POST = new FhirCodeDefinition(
    'POST',
    'POST',
    'http://hl7.org/fhir/http-verb',
    'POST',
    'HTTP POST Command.',
  );
  public static readonly PUT = new FhirCodeDefinition(
    'PUT',
    'PUT',
    'http://hl7.org/fhir/http-verb',
    'PUT',
    'HTTP PUT Command.',
  );
  public static readonly DELETE = new FhirCodeDefinition(
    'DELETE',
    'DELETE',
    'http://hl7.org/fhir/http-verb',
    'DELETE',
    'HTTP DELETE Command.',
  );
  public static readonly PATCH = new FhirCodeDefinition(
    'PATCH',
    'PATCH',
    'http://hl7.org/fhir/http-verb',
    'PATCH',
    'HTTP PATCH Command.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      HttpVerbEnum.GET,
      HttpVerbEnum.HEAD,
      HttpVerbEnum.POST,
      HttpVerbEnum.PUT,
      HttpVerbEnum.DELETE,
      HttpVerbEnum.PATCH,
      HttpVerbEnum.NULL
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
    } else if (HttpVerbEnum.GET.code === code) {
      return HttpVerbEnum.GET;
    } else if (HttpVerbEnum.HEAD.code === code) {
      return HttpVerbEnum.HEAD;
    } else if (HttpVerbEnum.POST.code === code) {
      return HttpVerbEnum.POST;
    } else if (HttpVerbEnum.PUT.code === code) {
      return HttpVerbEnum.PUT;
    } else if (HttpVerbEnum.DELETE.code === code) {
      return HttpVerbEnum.DELETE;
    } else if (HttpVerbEnum.PATCH.code === code) {
      return HttpVerbEnum.PATCH;
    } else if (HttpVerbEnum.NULL.code === code) {
      return HttpVerbEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown HttpVerbEnum 'code' value '${code}'`);
    }
  }
}
