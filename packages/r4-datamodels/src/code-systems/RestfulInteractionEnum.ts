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
 * RestfulInteractionEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/restful-interaction
 * CodeSystem.name: RestfulInteraction
 * CodeSystem.description: The set of interactions defined by the RESTful part of the FHIR specification.
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
 * FHIR CodeSystem: RestfulInteractionEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem RestfulInteraction](http://hl7.org/fhir/restful-interaction)
 */
export class RestfulInteractionEnum implements IFhirCodeEnum {
  public static readonly READ = new FhirCodeDefinition(
    'READ',
    'read',
    'http://hl7.org/fhir/restful-interaction',
    'read',
    'Read the current state of the resource.',
  );
  public static readonly VREAD = new FhirCodeDefinition(
    'VREAD',
    'vread',
    'http://hl7.org/fhir/restful-interaction',
    'vread',
    'Read the state of a specific version of the resource.',
  );
  public static readonly UPDATE = new FhirCodeDefinition(
    'UPDATE',
    'update',
    'http://hl7.org/fhir/restful-interaction',
    'update',
    'Update an existing resource by its id (or create it if it is new).',
  );
  public static readonly PATCH = new FhirCodeDefinition(
    'PATCH',
    'patch',
    'http://hl7.org/fhir/restful-interaction',
    'patch',
    'Update an existing resource by posting a set of changes to it.',
  );
  public static readonly DELETE = new FhirCodeDefinition(
    'DELETE',
    'delete',
    'http://hl7.org/fhir/restful-interaction',
    'delete',
    'Delete a resource.',
  );
  public static readonly HISTORY = new FhirCodeDefinition(
    'HISTORY',
    'history',
    'http://hl7.org/fhir/restful-interaction',
    'history',
    'Retrieve the change history for a particular resource, type of resource, or the entire system.',
  );
  public static readonly HISTORY_INSTANCE = new FhirCodeDefinition(
    'HISTORY_INSTANCE',
    'history-instance',
    'http://hl7.org/fhir/restful-interaction',
    'history-instance',
    'Retrieve the change history for a particular resource.',
  );
  public static readonly HISTORY_TYPE = new FhirCodeDefinition(
    'HISTORY_TYPE',
    'history-type',
    'http://hl7.org/fhir/restful-interaction',
    'history-type',
    'Retrieve the change history for all resources of a particular type.',
  );
  public static readonly HISTORY_SYSTEM = new FhirCodeDefinition(
    'HISTORY_SYSTEM',
    'history-system',
    'http://hl7.org/fhir/restful-interaction',
    'history-system',
    'Retrieve the change history for all resources on a system.',
  );
  public static readonly CREATE = new FhirCodeDefinition(
    'CREATE',
    'create',
    'http://hl7.org/fhir/restful-interaction',
    'create',
    'Create a new resource with a server assigned id.',
  );
  public static readonly SEARCH = new FhirCodeDefinition(
    'SEARCH',
    'search',
    'http://hl7.org/fhir/restful-interaction',
    'search',
    'Search a resource type or all resources based on some filter criteria.',
  );
  public static readonly SEARCH_TYPE = new FhirCodeDefinition(
    'SEARCH_TYPE',
    'search-type',
    'http://hl7.org/fhir/restful-interaction',
    'search-type',
    'Search all resources of the specified type based on some filter criteria.',
  );
  public static readonly SEARCH_SYSTEM = new FhirCodeDefinition(
    'SEARCH_SYSTEM',
    'search-system',
    'http://hl7.org/fhir/restful-interaction',
    'search-system',
    'Search all resources based on some filter criteria.',
  );
  public static readonly CAPABILITIES = new FhirCodeDefinition(
    'CAPABILITIES',
    'capabilities',
    'http://hl7.org/fhir/restful-interaction',
    'capabilities',
    'Get a Capability Statement for the system.',
  );
  public static readonly TRANSACTION = new FhirCodeDefinition(
    'TRANSACTION',
    'transaction',
    'http://hl7.org/fhir/restful-interaction',
    'transaction',
    'Update, create or delete a set of resources as a single transaction.',
  );
  public static readonly BATCH = new FhirCodeDefinition(
    'BATCH',
    'batch',
    'http://hl7.org/fhir/restful-interaction',
    'batch',
    'perform a set of a separate interactions in a single http operation',
  );
  public static readonly OPERATION = new FhirCodeDefinition(
    'OPERATION',
    'operation',
    'http://hl7.org/fhir/restful-interaction',
    'operation',
    'Perform an operation as defined by an OperationDefinition.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      RestfulInteractionEnum.READ,
      RestfulInteractionEnum.VREAD,
      RestfulInteractionEnum.UPDATE,
      RestfulInteractionEnum.PATCH,
      RestfulInteractionEnum.DELETE,
      RestfulInteractionEnum.HISTORY,
      RestfulInteractionEnum.HISTORY_INSTANCE,
      RestfulInteractionEnum.HISTORY_TYPE,
      RestfulInteractionEnum.HISTORY_SYSTEM,
      RestfulInteractionEnum.CREATE,
      RestfulInteractionEnum.SEARCH,
      RestfulInteractionEnum.SEARCH_TYPE,
      RestfulInteractionEnum.SEARCH_SYSTEM,
      RestfulInteractionEnum.CAPABILITIES,
      RestfulInteractionEnum.TRANSACTION,
      RestfulInteractionEnum.BATCH,
      RestfulInteractionEnum.OPERATION,
      RestfulInteractionEnum.NULL
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
    } else if (RestfulInteractionEnum.READ.code === code) {
      return RestfulInteractionEnum.READ;
    } else if (RestfulInteractionEnum.VREAD.code === code) {
      return RestfulInteractionEnum.VREAD;
    } else if (RestfulInteractionEnum.UPDATE.code === code) {
      return RestfulInteractionEnum.UPDATE;
    } else if (RestfulInteractionEnum.PATCH.code === code) {
      return RestfulInteractionEnum.PATCH;
    } else if (RestfulInteractionEnum.DELETE.code === code) {
      return RestfulInteractionEnum.DELETE;
    } else if (RestfulInteractionEnum.HISTORY.code === code) {
      return RestfulInteractionEnum.HISTORY;
    } else if (RestfulInteractionEnum.HISTORY_INSTANCE.code === code) {
      return RestfulInteractionEnum.HISTORY_INSTANCE;
    } else if (RestfulInteractionEnum.HISTORY_TYPE.code === code) {
      return RestfulInteractionEnum.HISTORY_TYPE;
    } else if (RestfulInteractionEnum.HISTORY_SYSTEM.code === code) {
      return RestfulInteractionEnum.HISTORY_SYSTEM;
    } else if (RestfulInteractionEnum.CREATE.code === code) {
      return RestfulInteractionEnum.CREATE;
    } else if (RestfulInteractionEnum.SEARCH.code === code) {
      return RestfulInteractionEnum.SEARCH;
    } else if (RestfulInteractionEnum.SEARCH_TYPE.code === code) {
      return RestfulInteractionEnum.SEARCH_TYPE;
    } else if (RestfulInteractionEnum.SEARCH_SYSTEM.code === code) {
      return RestfulInteractionEnum.SEARCH_SYSTEM;
    } else if (RestfulInteractionEnum.CAPABILITIES.code === code) {
      return RestfulInteractionEnum.CAPABILITIES;
    } else if (RestfulInteractionEnum.TRANSACTION.code === code) {
      return RestfulInteractionEnum.TRANSACTION;
    } else if (RestfulInteractionEnum.BATCH.code === code) {
      return RestfulInteractionEnum.BATCH;
    } else if (RestfulInteractionEnum.OPERATION.code === code) {
      return RestfulInteractionEnum.OPERATION;
    } else if (RestfulInteractionEnum.NULL.code === code) {
      return RestfulInteractionEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown RestfulInteractionEnum 'code' value '${code}'`);
    }
  }
}
