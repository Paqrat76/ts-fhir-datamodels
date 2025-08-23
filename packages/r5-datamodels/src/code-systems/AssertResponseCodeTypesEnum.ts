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
 * FHIR CodeSystem: AssertResponseCodeTypesEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem AssertResponseCodeTypes](http://hl7.org/fhir/assert-response-code-types)
 */
export class AssertResponseCodeTypesEnum implements IFhirCodeEnum {
  public static readonly CONTINUE = new FhirCodeDefinition(
    'CONTINUE',
    'continue',
    'http://hl7.org/fhir/assert-response-code-types',
    'Continue',
    'Response code is 100.',
  );
  public static readonly SWITCHING_PROTOCOLS = new FhirCodeDefinition(
    'SWITCHING_PROTOCOLS',
    'switchingProtocols',
    'http://hl7.org/fhir/assert-response-code-types',
    'Switching Protocols',
    'Response code is 101.',
  );
  public static readonly OKAY = new FhirCodeDefinition(
    'OKAY',
    'okay',
    'http://hl7.org/fhir/assert-response-code-types',
    'OK',
    'Response code is 200.',
  );
  public static readonly CREATED = new FhirCodeDefinition(
    'CREATED',
    'created',
    'http://hl7.org/fhir/assert-response-code-types',
    'Created',
    'Response code is 201.',
  );
  public static readonly ACCEPTED = new FhirCodeDefinition(
    'ACCEPTED',
    'accepted',
    'http://hl7.org/fhir/assert-response-code-types',
    'Accepted',
    'Response code is 202.',
  );
  public static readonly NON_AUTHORITATIVE_INFORMATION = new FhirCodeDefinition(
    'NON_AUTHORITATIVE_INFORMATION',
    'nonAuthoritativeInformation',
    'http://hl7.org/fhir/assert-response-code-types',
    'Non-Authoritative Information',
    'Response code is 203.',
  );
  public static readonly NO_CONTENT = new FhirCodeDefinition(
    'NO_CONTENT',
    'noContent',
    'http://hl7.org/fhir/assert-response-code-types',
    'No Content',
    'Response code is 204.',
  );
  public static readonly RESET_CONTENT = new FhirCodeDefinition(
    'RESET_CONTENT',
    'resetContent',
    'http://hl7.org/fhir/assert-response-code-types',
    'Reset Content',
    'Response code is 205.',
  );
  public static readonly PARTIAL_CONTENT = new FhirCodeDefinition(
    'PARTIAL_CONTENT',
    'partialContent',
    'http://hl7.org/fhir/assert-response-code-types',
    'Partial Content',
    'Response code is 206.',
  );
  public static readonly MULTIPLE_CHOICES = new FhirCodeDefinition(
    'MULTIPLE_CHOICES',
    'multipleChoices',
    'http://hl7.org/fhir/assert-response-code-types',
    'Multiple Choices',
    'Response code is 300.',
  );
  public static readonly MOVED_PERMANENTLY = new FhirCodeDefinition(
    'MOVED_PERMANENTLY',
    'movedPermanently',
    'http://hl7.org/fhir/assert-response-code-types',
    'Moved Permanently',
    'Response code is 301.',
  );
  public static readonly FOUND = new FhirCodeDefinition(
    'FOUND',
    'found',
    'http://hl7.org/fhir/assert-response-code-types',
    'Found',
    'Response code is 302.',
  );
  public static readonly SEE_OTHER = new FhirCodeDefinition(
    'SEE_OTHER',
    'seeOther',
    'http://hl7.org/fhir/assert-response-code-types',
    'See Other',
    'Response code is 303.',
  );
  public static readonly NOT_MODIFIED = new FhirCodeDefinition(
    'NOT_MODIFIED',
    'notModified',
    'http://hl7.org/fhir/assert-response-code-types',
    'Not Modified',
    'Response code is 304.',
  );
  public static readonly USE_PROXY = new FhirCodeDefinition(
    'USE_PROXY',
    'useProxy',
    'http://hl7.org/fhir/assert-response-code-types',
    'Use Proxy',
    'Response code is 305.',
  );
  public static readonly TEMPORARY_REDIRECT = new FhirCodeDefinition(
    'TEMPORARY_REDIRECT',
    'temporaryRedirect',
    'http://hl7.org/fhir/assert-response-code-types',
    'Temporary Redirect',
    'Response code is 307.',
  );
  public static readonly PERMANENT_REDIRECT = new FhirCodeDefinition(
    'PERMANENT_REDIRECT',
    'permanentRedirect',
    'http://hl7.org/fhir/assert-response-code-types',
    'Permanent Redirect',
    'Response code is 308.',
  );
  public static readonly BAD_REQUEST = new FhirCodeDefinition(
    'BAD_REQUEST',
    'badRequest',
    'http://hl7.org/fhir/assert-response-code-types',
    'Bad Request',
    'Response code is 400.',
  );
  public static readonly UNAUTHORIZED = new FhirCodeDefinition(
    'UNAUTHORIZED',
    'unauthorized',
    'http://hl7.org/fhir/assert-response-code-types',
    'Unauthorized',
    'Response code is 401.',
  );
  public static readonly PAYMENT_REQUIRED = new FhirCodeDefinition(
    'PAYMENT_REQUIRED',
    'paymentRequired',
    'http://hl7.org/fhir/assert-response-code-types',
    'Payment Required',
    'Response code is 402.',
  );
  public static readonly FORBIDDEN = new FhirCodeDefinition(
    'FORBIDDEN',
    'forbidden',
    'http://hl7.org/fhir/assert-response-code-types',
    'Forbidden',
    'Response code is 403.',
  );
  public static readonly NOT_FOUND = new FhirCodeDefinition(
    'NOT_FOUND',
    'notFound',
    'http://hl7.org/fhir/assert-response-code-types',
    'Not Found',
    'Response code is 404.',
  );
  public static readonly METHOD_NOT_ALLOWED = new FhirCodeDefinition(
    'METHOD_NOT_ALLOWED',
    'methodNotAllowed',
    'http://hl7.org/fhir/assert-response-code-types',
    'Method Not Allowed',
    'Response code is 405.',
  );
  public static readonly NOT_ACCEPTABLE = new FhirCodeDefinition(
    'NOT_ACCEPTABLE',
    'notAcceptable',
    'http://hl7.org/fhir/assert-response-code-types',
    'Not Acceptable',
    'Response code is 406.',
  );
  public static readonly PROXY_AUTHENTICATION_REQUIRED = new FhirCodeDefinition(
    'PROXY_AUTHENTICATION_REQUIRED',
    'proxyAuthenticationRequired',
    'http://hl7.org/fhir/assert-response-code-types',
    'Proxy Authentication Required',
    'Response code is 407.',
  );
  public static readonly REQUEST_TIMEOUT = new FhirCodeDefinition(
    'REQUEST_TIMEOUT',
    'requestTimeout',
    'http://hl7.org/fhir/assert-response-code-types',
    'Request Timeout',
    'Response code is 408.',
  );
  public static readonly CONFLICT = new FhirCodeDefinition(
    'CONFLICT',
    'conflict',
    'http://hl7.org/fhir/assert-response-code-types',
    'Conflict',
    'Response code is 409.',
  );
  public static readonly GONE = new FhirCodeDefinition(
    'GONE',
    'gone',
    'http://hl7.org/fhir/assert-response-code-types',
    'Gone',
    'Response code is 410.',
  );
  public static readonly LENGTH_REQUIRED = new FhirCodeDefinition(
    'LENGTH_REQUIRED',
    'lengthRequired',
    'http://hl7.org/fhir/assert-response-code-types',
    'Length Required',
    'Response code is 411.',
  );
  public static readonly PRECONDITION_FAILED = new FhirCodeDefinition(
    'PRECONDITION_FAILED',
    'preconditionFailed',
    'http://hl7.org/fhir/assert-response-code-types',
    'Precondition Failed',
    'Response code is 412.',
  );
  public static readonly CONTENT_TOO_LARGE = new FhirCodeDefinition(
    'CONTENT_TOO_LARGE',
    'contentTooLarge',
    'http://hl7.org/fhir/assert-response-code-types',
    'Content Too Large',
    'Response code is 413.',
  );
  public static readonly URI_TOO_LONG = new FhirCodeDefinition(
    'URI_TOO_LONG',
    'uriTooLong',
    'http://hl7.org/fhir/assert-response-code-types',
    'URI Too Long',
    'Response code is 414.',
  );
  public static readonly UNSUPPORTED_MEDIA_TYPE = new FhirCodeDefinition(
    'UNSUPPORTED_MEDIA_TYPE',
    'unsupportedMediaType',
    'http://hl7.org/fhir/assert-response-code-types',
    'Unsupported Media Type',
    'Response code is 415.',
  );
  public static readonly RANGE_NOT_SATISFIABLE = new FhirCodeDefinition(
    'RANGE_NOT_SATISFIABLE',
    'rangeNotSatisfiable',
    'http://hl7.org/fhir/assert-response-code-types',
    'Range Not Satisfiable',
    'Response code is 416.',
  );
  public static readonly EXPECTATION_FAILED = new FhirCodeDefinition(
    'EXPECTATION_FAILED',
    'expectationFailed',
    'http://hl7.org/fhir/assert-response-code-types',
    'Expectation Failed',
    'Response code is 417.',
  );
  public static readonly MISDIRECTED_REQUEST = new FhirCodeDefinition(
    'MISDIRECTED_REQUEST',
    'misdirectedRequest',
    'http://hl7.org/fhir/assert-response-code-types',
    'Misdirected Request',
    'Response code is 421.',
  );
  public static readonly UNPROCESSABLE_CONTENT = new FhirCodeDefinition(
    'UNPROCESSABLE_CONTENT',
    'unprocessableContent',
    'http://hl7.org/fhir/assert-response-code-types',
    'Unprocessable Content',
    'Response code is 422.',
  );
  public static readonly UPGRADE_REQUIRED = new FhirCodeDefinition(
    'UPGRADE_REQUIRED',
    'upgradeRequired',
    'http://hl7.org/fhir/assert-response-code-types',
    'Upgrade Required',
    'Response code is 426.',
  );
  public static readonly INTERNAL_SERVER_ERROR = new FhirCodeDefinition(
    'INTERNAL_SERVER_ERROR',
    'internalServerError',
    'http://hl7.org/fhir/assert-response-code-types',
    'Internal Server Error',
    'Response code is 500.',
  );
  public static readonly NOT_IMPLEMENTED = new FhirCodeDefinition(
    'NOT_IMPLEMENTED',
    'notImplemented',
    'http://hl7.org/fhir/assert-response-code-types',
    'Not Implemented',
    'Response code is 501.',
  );
  public static readonly BAD_GATEWAY = new FhirCodeDefinition(
    'BAD_GATEWAY',
    'badGateway',
    'http://hl7.org/fhir/assert-response-code-types',
    'Bad Gateway',
    'Response code is 502.',
  );
  public static readonly SERVICE_UNAVAILABLE = new FhirCodeDefinition(
    'SERVICE_UNAVAILABLE',
    'serviceUnavailable',
    'http://hl7.org/fhir/assert-response-code-types',
    'Service Unavailable',
    'Response code is 503.',
  );
  public static readonly GATEWAY_TIMEOUT = new FhirCodeDefinition(
    'GATEWAY_TIMEOUT',
    'gatewayTimeout',
    'http://hl7.org/fhir/assert-response-code-types',
    'Gateway Timeout',
    'Response code is 504.',
  );
  public static readonly HTTP_VERSION_NOT_SUPPORTED = new FhirCodeDefinition(
    'HTTP_VERSION_NOT_SUPPORTED',
    'httpVersionNotSupported',
    'http://hl7.org/fhir/assert-response-code-types',
    'HTTP Version Not Supported',
    'Response code is 505.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      AssertResponseCodeTypesEnum.CONTINUE,
      AssertResponseCodeTypesEnum.SWITCHING_PROTOCOLS,
      AssertResponseCodeTypesEnum.OKAY,
      AssertResponseCodeTypesEnum.CREATED,
      AssertResponseCodeTypesEnum.ACCEPTED,
      AssertResponseCodeTypesEnum.NON_AUTHORITATIVE_INFORMATION,
      AssertResponseCodeTypesEnum.NO_CONTENT,
      AssertResponseCodeTypesEnum.RESET_CONTENT,
      AssertResponseCodeTypesEnum.PARTIAL_CONTENT,
      AssertResponseCodeTypesEnum.MULTIPLE_CHOICES,
      AssertResponseCodeTypesEnum.MOVED_PERMANENTLY,
      AssertResponseCodeTypesEnum.FOUND,
      AssertResponseCodeTypesEnum.SEE_OTHER,
      AssertResponseCodeTypesEnum.NOT_MODIFIED,
      AssertResponseCodeTypesEnum.USE_PROXY,
      AssertResponseCodeTypesEnum.TEMPORARY_REDIRECT,
      AssertResponseCodeTypesEnum.PERMANENT_REDIRECT,
      AssertResponseCodeTypesEnum.BAD_REQUEST,
      AssertResponseCodeTypesEnum.UNAUTHORIZED,
      AssertResponseCodeTypesEnum.PAYMENT_REQUIRED,
      AssertResponseCodeTypesEnum.FORBIDDEN,
      AssertResponseCodeTypesEnum.NOT_FOUND,
      AssertResponseCodeTypesEnum.METHOD_NOT_ALLOWED,
      AssertResponseCodeTypesEnum.NOT_ACCEPTABLE,
      AssertResponseCodeTypesEnum.PROXY_AUTHENTICATION_REQUIRED,
      AssertResponseCodeTypesEnum.REQUEST_TIMEOUT,
      AssertResponseCodeTypesEnum.CONFLICT,
      AssertResponseCodeTypesEnum.GONE,
      AssertResponseCodeTypesEnum.LENGTH_REQUIRED,
      AssertResponseCodeTypesEnum.PRECONDITION_FAILED,
      AssertResponseCodeTypesEnum.CONTENT_TOO_LARGE,
      AssertResponseCodeTypesEnum.URI_TOO_LONG,
      AssertResponseCodeTypesEnum.UNSUPPORTED_MEDIA_TYPE,
      AssertResponseCodeTypesEnum.RANGE_NOT_SATISFIABLE,
      AssertResponseCodeTypesEnum.EXPECTATION_FAILED,
      AssertResponseCodeTypesEnum.MISDIRECTED_REQUEST,
      AssertResponseCodeTypesEnum.UNPROCESSABLE_CONTENT,
      AssertResponseCodeTypesEnum.UPGRADE_REQUIRED,
      AssertResponseCodeTypesEnum.INTERNAL_SERVER_ERROR,
      AssertResponseCodeTypesEnum.NOT_IMPLEMENTED,
      AssertResponseCodeTypesEnum.BAD_GATEWAY,
      AssertResponseCodeTypesEnum.SERVICE_UNAVAILABLE,
      AssertResponseCodeTypesEnum.GATEWAY_TIMEOUT,
      AssertResponseCodeTypesEnum.HTTP_VERSION_NOT_SUPPORTED,
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
    } else if (AssertResponseCodeTypesEnum.CONTINUE.code === code) {
      return AssertResponseCodeTypesEnum.CONTINUE;
    } else if (AssertResponseCodeTypesEnum.SWITCHING_PROTOCOLS.code === code) {
      return AssertResponseCodeTypesEnum.SWITCHING_PROTOCOLS;
    } else if (AssertResponseCodeTypesEnum.OKAY.code === code) {
      return AssertResponseCodeTypesEnum.OKAY;
    } else if (AssertResponseCodeTypesEnum.CREATED.code === code) {
      return AssertResponseCodeTypesEnum.CREATED;
    } else if (AssertResponseCodeTypesEnum.ACCEPTED.code === code) {
      return AssertResponseCodeTypesEnum.ACCEPTED;
    } else if (AssertResponseCodeTypesEnum.NON_AUTHORITATIVE_INFORMATION.code === code) {
      return AssertResponseCodeTypesEnum.NON_AUTHORITATIVE_INFORMATION;
    } else if (AssertResponseCodeTypesEnum.NO_CONTENT.code === code) {
      return AssertResponseCodeTypesEnum.NO_CONTENT;
    } else if (AssertResponseCodeTypesEnum.RESET_CONTENT.code === code) {
      return AssertResponseCodeTypesEnum.RESET_CONTENT;
    } else if (AssertResponseCodeTypesEnum.PARTIAL_CONTENT.code === code) {
      return AssertResponseCodeTypesEnum.PARTIAL_CONTENT;
    } else if (AssertResponseCodeTypesEnum.MULTIPLE_CHOICES.code === code) {
      return AssertResponseCodeTypesEnum.MULTIPLE_CHOICES;
    } else if (AssertResponseCodeTypesEnum.MOVED_PERMANENTLY.code === code) {
      return AssertResponseCodeTypesEnum.MOVED_PERMANENTLY;
    } else if (AssertResponseCodeTypesEnum.FOUND.code === code) {
      return AssertResponseCodeTypesEnum.FOUND;
    } else if (AssertResponseCodeTypesEnum.SEE_OTHER.code === code) {
      return AssertResponseCodeTypesEnum.SEE_OTHER;
    } else if (AssertResponseCodeTypesEnum.NOT_MODIFIED.code === code) {
      return AssertResponseCodeTypesEnum.NOT_MODIFIED;
    } else if (AssertResponseCodeTypesEnum.USE_PROXY.code === code) {
      return AssertResponseCodeTypesEnum.USE_PROXY;
    } else if (AssertResponseCodeTypesEnum.TEMPORARY_REDIRECT.code === code) {
      return AssertResponseCodeTypesEnum.TEMPORARY_REDIRECT;
    } else if (AssertResponseCodeTypesEnum.PERMANENT_REDIRECT.code === code) {
      return AssertResponseCodeTypesEnum.PERMANENT_REDIRECT;
    } else if (AssertResponseCodeTypesEnum.BAD_REQUEST.code === code) {
      return AssertResponseCodeTypesEnum.BAD_REQUEST;
    } else if (AssertResponseCodeTypesEnum.UNAUTHORIZED.code === code) {
      return AssertResponseCodeTypesEnum.UNAUTHORIZED;
    } else if (AssertResponseCodeTypesEnum.PAYMENT_REQUIRED.code === code) {
      return AssertResponseCodeTypesEnum.PAYMENT_REQUIRED;
    } else if (AssertResponseCodeTypesEnum.FORBIDDEN.code === code) {
      return AssertResponseCodeTypesEnum.FORBIDDEN;
    } else if (AssertResponseCodeTypesEnum.NOT_FOUND.code === code) {
      return AssertResponseCodeTypesEnum.NOT_FOUND;
    } else if (AssertResponseCodeTypesEnum.METHOD_NOT_ALLOWED.code === code) {
      return AssertResponseCodeTypesEnum.METHOD_NOT_ALLOWED;
    } else if (AssertResponseCodeTypesEnum.NOT_ACCEPTABLE.code === code) {
      return AssertResponseCodeTypesEnum.NOT_ACCEPTABLE;
    } else if (AssertResponseCodeTypesEnum.PROXY_AUTHENTICATION_REQUIRED.code === code) {
      return AssertResponseCodeTypesEnum.PROXY_AUTHENTICATION_REQUIRED;
    } else if (AssertResponseCodeTypesEnum.REQUEST_TIMEOUT.code === code) {
      return AssertResponseCodeTypesEnum.REQUEST_TIMEOUT;
    } else if (AssertResponseCodeTypesEnum.CONFLICT.code === code) {
      return AssertResponseCodeTypesEnum.CONFLICT;
    } else if (AssertResponseCodeTypesEnum.GONE.code === code) {
      return AssertResponseCodeTypesEnum.GONE;
    } else if (AssertResponseCodeTypesEnum.LENGTH_REQUIRED.code === code) {
      return AssertResponseCodeTypesEnum.LENGTH_REQUIRED;
    } else if (AssertResponseCodeTypesEnum.PRECONDITION_FAILED.code === code) {
      return AssertResponseCodeTypesEnum.PRECONDITION_FAILED;
    } else if (AssertResponseCodeTypesEnum.CONTENT_TOO_LARGE.code === code) {
      return AssertResponseCodeTypesEnum.CONTENT_TOO_LARGE;
    } else if (AssertResponseCodeTypesEnum.URI_TOO_LONG.code === code) {
      return AssertResponseCodeTypesEnum.URI_TOO_LONG;
    } else if (AssertResponseCodeTypesEnum.UNSUPPORTED_MEDIA_TYPE.code === code) {
      return AssertResponseCodeTypesEnum.UNSUPPORTED_MEDIA_TYPE;
    } else if (AssertResponseCodeTypesEnum.RANGE_NOT_SATISFIABLE.code === code) {
      return AssertResponseCodeTypesEnum.RANGE_NOT_SATISFIABLE;
    } else if (AssertResponseCodeTypesEnum.EXPECTATION_FAILED.code === code) {
      return AssertResponseCodeTypesEnum.EXPECTATION_FAILED;
    } else if (AssertResponseCodeTypesEnum.MISDIRECTED_REQUEST.code === code) {
      return AssertResponseCodeTypesEnum.MISDIRECTED_REQUEST;
    } else if (AssertResponseCodeTypesEnum.UNPROCESSABLE_CONTENT.code === code) {
      return AssertResponseCodeTypesEnum.UNPROCESSABLE_CONTENT;
    } else if (AssertResponseCodeTypesEnum.UPGRADE_REQUIRED.code === code) {
      return AssertResponseCodeTypesEnum.UPGRADE_REQUIRED;
    } else if (AssertResponseCodeTypesEnum.INTERNAL_SERVER_ERROR.code === code) {
      return AssertResponseCodeTypesEnum.INTERNAL_SERVER_ERROR;
    } else if (AssertResponseCodeTypesEnum.NOT_IMPLEMENTED.code === code) {
      return AssertResponseCodeTypesEnum.NOT_IMPLEMENTED;
    } else if (AssertResponseCodeTypesEnum.BAD_GATEWAY.code === code) {
      return AssertResponseCodeTypesEnum.BAD_GATEWAY;
    } else if (AssertResponseCodeTypesEnum.SERVICE_UNAVAILABLE.code === code) {
      return AssertResponseCodeTypesEnum.SERVICE_UNAVAILABLE;
    } else if (AssertResponseCodeTypesEnum.GATEWAY_TIMEOUT.code === code) {
      return AssertResponseCodeTypesEnum.GATEWAY_TIMEOUT;
    } else if (AssertResponseCodeTypesEnum.HTTP_VERSION_NOT_SUPPORTED.code === code) {
      return AssertResponseCodeTypesEnum.HTTP_VERSION_NOT_SUPPORTED;
    } else if (AssertResponseCodeTypesEnum.NULL.code === code) {
      return AssertResponseCodeTypesEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown AssertResponseCodeTypesEnum 'code' value '${code}'`);
    }
  }
}
