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
 * IssueTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/issue-type
 * CodeSystem.name: IssueType
 * CodeSystem.description: A code that describes the type of issue.
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
 * FHIR CodeSystem: IssueTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem IssueType](http://hl7.org/fhir/issue-type)
 */
export class IssueTypeEnum implements IFhirCodeEnum {
  public static readonly INVALID = new FhirCodeDefinition(
    'INVALID',
    'invalid',
    'http://hl7.org/fhir/issue-type',
    'Invalid Content',
    'Content invalid against the specification or a profile.',
  );
  public static readonly STRUCTURE = new FhirCodeDefinition(
    'STRUCTURE',
    'structure',
    'http://hl7.org/fhir/issue-type',
    'Structural Issue',
    'A structural issue in the content such as wrong namespace, unable to parse the content completely, invalid syntax, etc.',
  );
  public static readonly REQUIRED = new FhirCodeDefinition(
    'REQUIRED',
    'required',
    'http://hl7.org/fhir/issue-type',
    'Required element missing',
    'A required element is missing.',
  );
  public static readonly VALUE = new FhirCodeDefinition(
    'VALUE',
    'value',
    'http://hl7.org/fhir/issue-type',
    'Element value invalid',
    'An element or header value is invalid.',
  );
  public static readonly INVARIANT = new FhirCodeDefinition(
    'INVARIANT',
    'invariant',
    'http://hl7.org/fhir/issue-type',
    'Validation rule failed',
    'A content validation rule failed - e.g. a schematron rule.',
  );
  public static readonly SECURITY = new FhirCodeDefinition(
    'SECURITY',
    'security',
    'http://hl7.org/fhir/issue-type',
    'Security Problem',
    'An authentication/authorization/permissions issue of some kind.',
  );
  public static readonly LOGIN = new FhirCodeDefinition(
    'LOGIN',
    'login',
    'http://hl7.org/fhir/issue-type',
    'Login Required',
    'The client needs to initiate an authentication process.',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/issue-type',
    'Unknown User',
    'The user or system was not able to be authenticated (either there is no process, or the proferred token is unacceptable).',
  );
  public static readonly EXPIRED = new FhirCodeDefinition(
    'EXPIRED',
    'expired',
    'http://hl7.org/fhir/issue-type',
    'Session Expired',
    'User session expired; a login may be required.',
  );
  public static readonly FORBIDDEN = new FhirCodeDefinition(
    'FORBIDDEN',
    'forbidden',
    'http://hl7.org/fhir/issue-type',
    'Forbidden',
    'The user does not have the rights to perform this action.',
  );
  public static readonly SUPPRESSED = new FhirCodeDefinition(
    'SUPPRESSED',
    'suppressed',
    'http://hl7.org/fhir/issue-type',
    'Information  Suppressed',
    'Some information was not or might not have been returned due to business rules, consent or privacy rules, or access permission constraints.  This information may be accessible through alternate processes.',
  );
  public static readonly PROCESSING = new FhirCodeDefinition(
    'PROCESSING',
    'processing',
    'http://hl7.org/fhir/issue-type',
    'Processing Failure',
    'Processing issues. These are expected to be final e.g. there is no point resubmitting the same content unchanged.',
  );
  public static readonly NOT_SUPPORTED = new FhirCodeDefinition(
    'NOT_SUPPORTED',
    'not-supported',
    'http://hl7.org/fhir/issue-type',
    'Content not supported',
    'The interaction, operation, resource or profile is not supported.',
  );
  public static readonly DUPLICATE = new FhirCodeDefinition(
    'DUPLICATE',
    'duplicate',
    'http://hl7.org/fhir/issue-type',
    'Duplicate',
    'An attempt was made to create a duplicate record.',
  );
  public static readonly MULTIPLE_MATCHES = new FhirCodeDefinition(
    'MULTIPLE_MATCHES',
    'multiple-matches',
    'http://hl7.org/fhir/issue-type',
    'Multiple Matches',
    'Multiple matching records were found when the operation required only one match.',
  );
  public static readonly NOT_FOUND = new FhirCodeDefinition(
    'NOT_FOUND',
    'not-found',
    'http://hl7.org/fhir/issue-type',
    'Not Found',
    'The reference provided was not found. In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the content is not found further into the application architecture.',
  );
  public static readonly DELETED = new FhirCodeDefinition(
    'DELETED',
    'deleted',
    'http://hl7.org/fhir/issue-type',
    'Deleted',
    'The reference pointed to content (usually a resource) that has been deleted.',
  );
  public static readonly TOO_LONG = new FhirCodeDefinition(
    'TOO_LONG',
    'too-long',
    'http://hl7.org/fhir/issue-type',
    'Content Too Long',
    'Provided content is too long (typically, this is a denial of service protection type of error).',
  );
  public static readonly CODE_INVALID = new FhirCodeDefinition(
    'CODE_INVALID',
    'code-invalid',
    'http://hl7.org/fhir/issue-type',
    'Invalid Code',
    'The code or system could not be understood, or it was not valid in the context of a particular ValueSet.code.',
  );
  public static readonly EXTENSION = new FhirCodeDefinition(
    'EXTENSION',
    'extension',
    'http://hl7.org/fhir/issue-type',
    'Unacceptable Extension',
    'An extension was found that was not acceptable, could not be resolved, or a modifierExtension was not recognized.',
  );
  public static readonly TOO_COSTLY = new FhirCodeDefinition(
    'TOO_COSTLY',
    'too-costly',
    'http://hl7.org/fhir/issue-type',
    'Operation Too Costly',
    'The operation was stopped to protect server resources; e.g. a request for a value set expansion on all of SNOMED CT.',
  );
  public static readonly BUSINESS_RULE = new FhirCodeDefinition(
    'BUSINESS_RULE',
    'business-rule',
    'http://hl7.org/fhir/issue-type',
    'Business Rule Violation',
    'The content/operation failed to pass some business rule and so could not proceed.',
  );
  public static readonly CONFLICT = new FhirCodeDefinition(
    'CONFLICT',
    'conflict',
    'http://hl7.org/fhir/issue-type',
    'Edit Version Conflict',
    'Content could not be accepted because of an edit conflict (i.e. version aware updates). (In a pure RESTful environment, this would be an HTTP 409 error, but this code may be used where the conflict is discovered further into the application architecture.).',
  );
  public static readonly TRANSIENT = new FhirCodeDefinition(
    'TRANSIENT',
    'transient',
    'http://hl7.org/fhir/issue-type',
    'Transient Issue',
    'Transient processing issues. The system receiving the message may be able to resubmit the same content once an underlying issue is resolved.',
  );
  public static readonly LOCK_ERROR = new FhirCodeDefinition(
    'LOCK_ERROR',
    'lock-error',
    'http://hl7.org/fhir/issue-type',
    'Lock Error',
    'A resource/record locking failure (usually in an underlying database).',
  );
  public static readonly NO_STORE = new FhirCodeDefinition(
    'NO_STORE',
    'no-store',
    'http://hl7.org/fhir/issue-type',
    'No Store Available',
    'The persistent store is unavailable; e.g. the database is down for maintenance or similar action, and the interaction or operation cannot be processed.',
  );
  public static readonly EXCEPTION = new FhirCodeDefinition(
    'EXCEPTION',
    'exception',
    'http://hl7.org/fhir/issue-type',
    'Exception',
    'An unexpected internal error has occurred.',
  );
  public static readonly TIMEOUT = new FhirCodeDefinition(
    'TIMEOUT',
    'timeout',
    'http://hl7.org/fhir/issue-type',
    'Timeout',
    'An internal timeout has occurred.',
  );
  public static readonly INCOMPLETE = new FhirCodeDefinition(
    'INCOMPLETE',
    'incomplete',
    'http://hl7.org/fhir/issue-type',
    'Incomplete Results',
    'Not all data sources typically accessed could be reached or responded in time, so the returned information might not be complete (applies to search interactions and some operations).',
  );
  public static readonly THROTTLED = new FhirCodeDefinition(
    'THROTTLED',
    'throttled',
    'http://hl7.org/fhir/issue-type',
    'Throttled',
    'The system is not prepared to handle this request due to load management.',
  );
  public static readonly INFORMATIONAL = new FhirCodeDefinition(
    'INFORMATIONAL',
    'informational',
    'http://hl7.org/fhir/issue-type',
    'Informational Note',
    'A message unrelated to the processing success of the completed operation (examples of the latter include things like reminders of password expiry, system maintenance times, etc.).',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      IssueTypeEnum.INVALID,
      IssueTypeEnum.STRUCTURE,
      IssueTypeEnum.REQUIRED,
      IssueTypeEnum.VALUE,
      IssueTypeEnum.INVARIANT,
      IssueTypeEnum.SECURITY,
      IssueTypeEnum.LOGIN,
      IssueTypeEnum.UNKNOWN,
      IssueTypeEnum.EXPIRED,
      IssueTypeEnum.FORBIDDEN,
      IssueTypeEnum.SUPPRESSED,
      IssueTypeEnum.PROCESSING,
      IssueTypeEnum.NOT_SUPPORTED,
      IssueTypeEnum.DUPLICATE,
      IssueTypeEnum.MULTIPLE_MATCHES,
      IssueTypeEnum.NOT_FOUND,
      IssueTypeEnum.DELETED,
      IssueTypeEnum.TOO_LONG,
      IssueTypeEnum.CODE_INVALID,
      IssueTypeEnum.EXTENSION,
      IssueTypeEnum.TOO_COSTLY,
      IssueTypeEnum.BUSINESS_RULE,
      IssueTypeEnum.CONFLICT,
      IssueTypeEnum.TRANSIENT,
      IssueTypeEnum.LOCK_ERROR,
      IssueTypeEnum.NO_STORE,
      IssueTypeEnum.EXCEPTION,
      IssueTypeEnum.TIMEOUT,
      IssueTypeEnum.INCOMPLETE,
      IssueTypeEnum.THROTTLED,
      IssueTypeEnum.INFORMATIONAL,
      IssueTypeEnum.NULL
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
    } else if (IssueTypeEnum.INVALID.code === code) {
      return IssueTypeEnum.INVALID;
    } else if (IssueTypeEnum.STRUCTURE.code === code) {
      return IssueTypeEnum.STRUCTURE;
    } else if (IssueTypeEnum.REQUIRED.code === code) {
      return IssueTypeEnum.REQUIRED;
    } else if (IssueTypeEnum.VALUE.code === code) {
      return IssueTypeEnum.VALUE;
    } else if (IssueTypeEnum.INVARIANT.code === code) {
      return IssueTypeEnum.INVARIANT;
    } else if (IssueTypeEnum.SECURITY.code === code) {
      return IssueTypeEnum.SECURITY;
    } else if (IssueTypeEnum.LOGIN.code === code) {
      return IssueTypeEnum.LOGIN;
    } else if (IssueTypeEnum.UNKNOWN.code === code) {
      return IssueTypeEnum.UNKNOWN;
    } else if (IssueTypeEnum.EXPIRED.code === code) {
      return IssueTypeEnum.EXPIRED;
    } else if (IssueTypeEnum.FORBIDDEN.code === code) {
      return IssueTypeEnum.FORBIDDEN;
    } else if (IssueTypeEnum.SUPPRESSED.code === code) {
      return IssueTypeEnum.SUPPRESSED;
    } else if (IssueTypeEnum.PROCESSING.code === code) {
      return IssueTypeEnum.PROCESSING;
    } else if (IssueTypeEnum.NOT_SUPPORTED.code === code) {
      return IssueTypeEnum.NOT_SUPPORTED;
    } else if (IssueTypeEnum.DUPLICATE.code === code) {
      return IssueTypeEnum.DUPLICATE;
    } else if (IssueTypeEnum.MULTIPLE_MATCHES.code === code) {
      return IssueTypeEnum.MULTIPLE_MATCHES;
    } else if (IssueTypeEnum.NOT_FOUND.code === code) {
      return IssueTypeEnum.NOT_FOUND;
    } else if (IssueTypeEnum.DELETED.code === code) {
      return IssueTypeEnum.DELETED;
    } else if (IssueTypeEnum.TOO_LONG.code === code) {
      return IssueTypeEnum.TOO_LONG;
    } else if (IssueTypeEnum.CODE_INVALID.code === code) {
      return IssueTypeEnum.CODE_INVALID;
    } else if (IssueTypeEnum.EXTENSION.code === code) {
      return IssueTypeEnum.EXTENSION;
    } else if (IssueTypeEnum.TOO_COSTLY.code === code) {
      return IssueTypeEnum.TOO_COSTLY;
    } else if (IssueTypeEnum.BUSINESS_RULE.code === code) {
      return IssueTypeEnum.BUSINESS_RULE;
    } else if (IssueTypeEnum.CONFLICT.code === code) {
      return IssueTypeEnum.CONFLICT;
    } else if (IssueTypeEnum.TRANSIENT.code === code) {
      return IssueTypeEnum.TRANSIENT;
    } else if (IssueTypeEnum.LOCK_ERROR.code === code) {
      return IssueTypeEnum.LOCK_ERROR;
    } else if (IssueTypeEnum.NO_STORE.code === code) {
      return IssueTypeEnum.NO_STORE;
    } else if (IssueTypeEnum.EXCEPTION.code === code) {
      return IssueTypeEnum.EXCEPTION;
    } else if (IssueTypeEnum.TIMEOUT.code === code) {
      return IssueTypeEnum.TIMEOUT;
    } else if (IssueTypeEnum.INCOMPLETE.code === code) {
      return IssueTypeEnum.INCOMPLETE;
    } else if (IssueTypeEnum.THROTTLED.code === code) {
      return IssueTypeEnum.THROTTLED;
    } else if (IssueTypeEnum.INFORMATIONAL.code === code) {
      return IssueTypeEnum.INFORMATIONAL;
    } else if (IssueTypeEnum.NULL.code === code) {
      return IssueTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown IssueTypeEnum 'code' value '${code}'`);
    }
  }
}
