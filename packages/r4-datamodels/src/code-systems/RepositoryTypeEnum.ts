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
 * RepositoryTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/repository-type
 * CodeSystem.name: RepositoryType
 * CodeSystem.description: Type for access of external URI.
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
 * FHIR CodeSystem: RepositoryTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem RepositoryType](http://hl7.org/fhir/repository-type)
 */
export class RepositoryTypeEnum implements IFhirCodeEnum {
  public static readonly DIRECTLINK = new FhirCodeDefinition(
    'DIRECTLINK',
    'directlink',
    'http://hl7.org/fhir/repository-type',
    'Click and see',
    'When URL is clicked, the resource can be seen directly (by webpage or by download link format).',
  );
  public static readonly OPENAPI = new FhirCodeDefinition(
    'OPENAPI',
    'openapi',
    'http://hl7.org/fhir/repository-type',
    'The URL is the RESTful or other kind of API that can access to the result.',
    'When the API method (e.g. [base_url]/[parameter]) related with the URL of the website is executed, the resource can be seen directly (usually in JSON or XML format).',
  );
  public static readonly LOGIN = new FhirCodeDefinition(
    'LOGIN',
    'login',
    'http://hl7.org/fhir/repository-type',
    'Result cannot be access unless an account is logged in',
    'When logged into the website, the resource can be seen.',
  );
  public static readonly OAUTH = new FhirCodeDefinition(
    'OAUTH',
    'oauth',
    'http://hl7.org/fhir/repository-type',
    'Result need to be fetched with API and need LOGIN( or cookies are required when visiting the link of resource)',
    'When logged in and  follow the API in the website related with URL, the resource can be seen.',
  );
  public static readonly OTHER = new FhirCodeDefinition(
    'OTHER',
    'other',
    'http://hl7.org/fhir/repository-type',
    'Some other complicated or particular way to get resource from URL.',
    'Some other complicated or particular way to get resource from URL.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      RepositoryTypeEnum.DIRECTLINK,
      RepositoryTypeEnum.OPENAPI,
      RepositoryTypeEnum.LOGIN,
      RepositoryTypeEnum.OAUTH,
      RepositoryTypeEnum.OTHER,
      RepositoryTypeEnum.NULL
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
    } else if (RepositoryTypeEnum.DIRECTLINK.code === code) {
      return RepositoryTypeEnum.DIRECTLINK;
    } else if (RepositoryTypeEnum.OPENAPI.code === code) {
      return RepositoryTypeEnum.OPENAPI;
    } else if (RepositoryTypeEnum.LOGIN.code === code) {
      return RepositoryTypeEnum.LOGIN;
    } else if (RepositoryTypeEnum.OAUTH.code === code) {
      return RepositoryTypeEnum.OAUTH;
    } else if (RepositoryTypeEnum.OTHER.code === code) {
      return RepositoryTypeEnum.OTHER;
    } else if (RepositoryTypeEnum.NULL.code === code) {
      return RepositoryTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown RepositoryTypeEnum 'code' value '${code}'`);
    }
  }
}
