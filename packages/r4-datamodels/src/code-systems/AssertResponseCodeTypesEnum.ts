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
 * AssertResponseCodeTypesEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/assert-response-code-types
 * CodeSystem.name: AssertResponseCodeTypes
 * CodeSystem.description: The type of response code to use for assertion.
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
 * FHIR CodeSystem: AssertResponseCodeTypesEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem AssertResponseCodeTypes](http://hl7.org/fhir/assert-response-code-types)
 */
export class AssertResponseCodeTypesEnum implements IFhirCodeEnum {
  public static readonly OKAY = new FhirCodeDefinition(
    'OKAY',
    'okay',
    'http://hl7.org/fhir/assert-response-code-types',
    'okay',
    'Response code is 200.',
  );
  public static readonly CREATED = new FhirCodeDefinition(
    'CREATED',
    'created',
    'http://hl7.org/fhir/assert-response-code-types',
    'created',
    'Response code is 201.',
  );
  public static readonly NO_CONTENT = new FhirCodeDefinition(
    'NO_CONTENT',
    'noContent',
    'http://hl7.org/fhir/assert-response-code-types',
    'noContent',
    'Response code is 204.',
  );
  public static readonly NOT_MODIFIED = new FhirCodeDefinition(
    'NOT_MODIFIED',
    'notModified',
    'http://hl7.org/fhir/assert-response-code-types',
    'notModified',
    'Response code is 304.',
  );
  public static readonly BAD = new FhirCodeDefinition(
    'BAD',
    'bad',
    'http://hl7.org/fhir/assert-response-code-types',
    'bad',
    'Response code is 400.',
  );
  public static readonly FORBIDDEN = new FhirCodeDefinition(
    'FORBIDDEN',
    'forbidden',
    'http://hl7.org/fhir/assert-response-code-types',
    'forbidden',
    'Response code is 403.',
  );
  public static readonly NOT_FOUND = new FhirCodeDefinition(
    'NOT_FOUND',
    'notFound',
    'http://hl7.org/fhir/assert-response-code-types',
    'notFound',
    'Response code is 404.',
  );
  public static readonly METHOD_NOT_ALLOWED = new FhirCodeDefinition(
    'METHOD_NOT_ALLOWED',
    'methodNotAllowed',
    'http://hl7.org/fhir/assert-response-code-types',
    'methodNotAllowed',
    'Response code is 405.',
  );
  public static readonly CONFLICT = new FhirCodeDefinition(
    'CONFLICT',
    'conflict',
    'http://hl7.org/fhir/assert-response-code-types',
    'conflict',
    'Response code is 409.',
  );
  public static readonly GONE = new FhirCodeDefinition(
    'GONE',
    'gone',
    'http://hl7.org/fhir/assert-response-code-types',
    'gone',
    'Response code is 410.',
  );
  public static readonly PRECONDITION_FAILED = new FhirCodeDefinition(
    'PRECONDITION_FAILED',
    'preconditionFailed',
    'http://hl7.org/fhir/assert-response-code-types',
    'preconditionFailed',
    'Response code is 412.',
  );
  public static readonly UNPROCESSABLE = new FhirCodeDefinition(
    'UNPROCESSABLE',
    'unprocessable',
    'http://hl7.org/fhir/assert-response-code-types',
    'unprocessable',
    'Response code is 422.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      AssertResponseCodeTypesEnum.OKAY,
      AssertResponseCodeTypesEnum.CREATED,
      AssertResponseCodeTypesEnum.NO_CONTENT,
      AssertResponseCodeTypesEnum.NOT_MODIFIED,
      AssertResponseCodeTypesEnum.BAD,
      AssertResponseCodeTypesEnum.FORBIDDEN,
      AssertResponseCodeTypesEnum.NOT_FOUND,
      AssertResponseCodeTypesEnum.METHOD_NOT_ALLOWED,
      AssertResponseCodeTypesEnum.CONFLICT,
      AssertResponseCodeTypesEnum.GONE,
      AssertResponseCodeTypesEnum.PRECONDITION_FAILED,
      AssertResponseCodeTypesEnum.UNPROCESSABLE,
      AssertResponseCodeTypesEnum.NULL
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
    } else if (AssertResponseCodeTypesEnum.OKAY.code === code) {
      return AssertResponseCodeTypesEnum.OKAY;
    } else if (AssertResponseCodeTypesEnum.CREATED.code === code) {
      return AssertResponseCodeTypesEnum.CREATED;
    } else if (AssertResponseCodeTypesEnum.NO_CONTENT.code === code) {
      return AssertResponseCodeTypesEnum.NO_CONTENT;
    } else if (AssertResponseCodeTypesEnum.NOT_MODIFIED.code === code) {
      return AssertResponseCodeTypesEnum.NOT_MODIFIED;
    } else if (AssertResponseCodeTypesEnum.BAD.code === code) {
      return AssertResponseCodeTypesEnum.BAD;
    } else if (AssertResponseCodeTypesEnum.FORBIDDEN.code === code) {
      return AssertResponseCodeTypesEnum.FORBIDDEN;
    } else if (AssertResponseCodeTypesEnum.NOT_FOUND.code === code) {
      return AssertResponseCodeTypesEnum.NOT_FOUND;
    } else if (AssertResponseCodeTypesEnum.METHOD_NOT_ALLOWED.code === code) {
      return AssertResponseCodeTypesEnum.METHOD_NOT_ALLOWED;
    } else if (AssertResponseCodeTypesEnum.CONFLICT.code === code) {
      return AssertResponseCodeTypesEnum.CONFLICT;
    } else if (AssertResponseCodeTypesEnum.GONE.code === code) {
      return AssertResponseCodeTypesEnum.GONE;
    } else if (AssertResponseCodeTypesEnum.PRECONDITION_FAILED.code === code) {
      return AssertResponseCodeTypesEnum.PRECONDITION_FAILED;
    } else if (AssertResponseCodeTypesEnum.UNPROCESSABLE.code === code) {
      return AssertResponseCodeTypesEnum.UNPROCESSABLE;
    } else if (AssertResponseCodeTypesEnum.NULL.code === code) {
      return AssertResponseCodeTypesEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown AssertResponseCodeTypesEnum 'code' value '${code}'`);
    }
  }
}
