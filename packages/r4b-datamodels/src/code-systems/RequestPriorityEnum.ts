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
 * RequestPriorityEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/request-priority
 * CodeSystem.name: RequestPriority
 * CodeSystem.description: Identifies the level of importance to be assigned to actioning the request.
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
 * FHIR CodeSystem: RequestPriorityEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem RequestPriority](http://hl7.org/fhir/request-priority)
 */
export class RequestPriorityEnum implements IFhirCodeEnum {
  public static readonly ROUTINE = new FhirCodeDefinition(
    'ROUTINE',
    'routine',
    'http://hl7.org/fhir/request-priority',
    'Routine',
    'The request has normal priority.',
  );
  public static readonly URGENT = new FhirCodeDefinition(
    'URGENT',
    'urgent',
    'http://hl7.org/fhir/request-priority',
    'Urgent',
    'The request should be actioned promptly - higher priority than routine.',
  );
  public static readonly ASAP = new FhirCodeDefinition(
    'ASAP',
    'asap',
    'http://hl7.org/fhir/request-priority',
    'ASAP',
    'The request should be actioned as soon as possible - higher priority than urgent.',
  );
  public static readonly STAT = new FhirCodeDefinition(
    'STAT',
    'stat',
    'http://hl7.org/fhir/request-priority',
    'STAT',
    'The request should be actioned immediately - highest possible priority.  E.g. an emergency.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      RequestPriorityEnum.ROUTINE,
      RequestPriorityEnum.URGENT,
      RequestPriorityEnum.ASAP,
      RequestPriorityEnum.STAT,
      RequestPriorityEnum.NULL
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
    } else if (RequestPriorityEnum.ROUTINE.code === code) {
      return RequestPriorityEnum.ROUTINE;
    } else if (RequestPriorityEnum.URGENT.code === code) {
      return RequestPriorityEnum.URGENT;
    } else if (RequestPriorityEnum.ASAP.code === code) {
      return RequestPriorityEnum.ASAP;
    } else if (RequestPriorityEnum.STAT.code === code) {
      return RequestPriorityEnum.STAT;
    } else if (RequestPriorityEnum.NULL.code === code) {
      return RequestPriorityEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown RequestPriorityEnum 'code' value '${code}'`);
    }
  }
}
