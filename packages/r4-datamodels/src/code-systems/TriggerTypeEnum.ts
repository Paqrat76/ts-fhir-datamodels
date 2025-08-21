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
 * TriggerTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/trigger-type
 * CodeSystem.name: TriggerType
 * CodeSystem.description: The type of trigger.
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
 * FHIR CodeSystem: TriggerTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem TriggerType](http://hl7.org/fhir/trigger-type)
 */
export class TriggerTypeEnum implements IFhirCodeEnum {
  public static readonly NAMED_EVENT = new FhirCodeDefinition(
    'NAMED_EVENT',
    'named-event',
    'http://hl7.org/fhir/trigger-type',
    'Named Event',
    'The trigger occurs in response to a specific named event, and no other information about the trigger is specified. Named events are completely pre-coordinated, and the formal semantics of the trigger are not provided.',
  );
  public static readonly PERIODIC = new FhirCodeDefinition(
    'PERIODIC',
    'periodic',
    'http://hl7.org/fhir/trigger-type',
    'Periodic',
    'The trigger occurs at a specific time or periodically as described by a timing or schedule. A periodic event cannot have any data elements, but may have a name assigned as a shorthand for the event.',
  );
  public static readonly DATA_CHANGED = new FhirCodeDefinition(
    'DATA_CHANGED',
    'data-changed',
    'http://hl7.org/fhir/trigger-type',
    'Data Changed',
    'The trigger occurs whenever data of a particular type is changed in any way, either added, modified, or removed.',
  );
  public static readonly DATA_ADDED = new FhirCodeDefinition(
    'DATA_ADDED',
    'data-added',
    'http://hl7.org/fhir/trigger-type',
    'Data Added',
    'The trigger occurs whenever data of a particular type is added.',
  );
  public static readonly DATA_MODIFIED = new FhirCodeDefinition(
    'DATA_MODIFIED',
    'data-modified',
    'http://hl7.org/fhir/trigger-type',
    'Data Updated',
    'The trigger occurs whenever data of a particular type is modified.',
  );
  public static readonly DATA_REMOVED = new FhirCodeDefinition(
    'DATA_REMOVED',
    'data-removed',
    'http://hl7.org/fhir/trigger-type',
    'Data Removed',
    'The trigger occurs whenever data of a particular type is removed.',
  );
  public static readonly DATA_ACCESSED = new FhirCodeDefinition(
    'DATA_ACCESSED',
    'data-accessed',
    'http://hl7.org/fhir/trigger-type',
    'Data Accessed',
    'The trigger occurs whenever data of a particular type is accessed.',
  );
  public static readonly DATA_ACCESS_ENDED = new FhirCodeDefinition(
    'DATA_ACCESS_ENDED',
    'data-access-ended',
    'http://hl7.org/fhir/trigger-type',
    'Data Access Ended',
    'The trigger occurs whenever access to data of a particular type is completed.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      TriggerTypeEnum.NAMED_EVENT,
      TriggerTypeEnum.PERIODIC,
      TriggerTypeEnum.DATA_CHANGED,
      TriggerTypeEnum.DATA_ADDED,
      TriggerTypeEnum.DATA_MODIFIED,
      TriggerTypeEnum.DATA_REMOVED,
      TriggerTypeEnum.DATA_ACCESSED,
      TriggerTypeEnum.DATA_ACCESS_ENDED,
      TriggerTypeEnum.NULL
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
    } else if (TriggerTypeEnum.NAMED_EVENT.code === code) {
      return TriggerTypeEnum.NAMED_EVENT;
    } else if (TriggerTypeEnum.PERIODIC.code === code) {
      return TriggerTypeEnum.PERIODIC;
    } else if (TriggerTypeEnum.DATA_CHANGED.code === code) {
      return TriggerTypeEnum.DATA_CHANGED;
    } else if (TriggerTypeEnum.DATA_ADDED.code === code) {
      return TriggerTypeEnum.DATA_ADDED;
    } else if (TriggerTypeEnum.DATA_MODIFIED.code === code) {
      return TriggerTypeEnum.DATA_MODIFIED;
    } else if (TriggerTypeEnum.DATA_REMOVED.code === code) {
      return TriggerTypeEnum.DATA_REMOVED;
    } else if (TriggerTypeEnum.DATA_ACCESSED.code === code) {
      return TriggerTypeEnum.DATA_ACCESSED;
    } else if (TriggerTypeEnum.DATA_ACCESS_ENDED.code === code) {
      return TriggerTypeEnum.DATA_ACCESS_ENDED;
    } else if (TriggerTypeEnum.NULL.code === code) {
      return TriggerTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown TriggerTypeEnum 'code' value '${code}'`);
    }
  }
}
