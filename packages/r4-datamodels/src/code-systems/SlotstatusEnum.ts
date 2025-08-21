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
 * SlotstatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/slotstatus
 * CodeSystem.name: Slotstatus
 * CodeSystem.description: The free/busy status of the slot.
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
 * FHIR CodeSystem: SlotstatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem Slotstatus](http://hl7.org/fhir/slotstatus)
 */
export class SlotstatusEnum implements IFhirCodeEnum {
  public static readonly BUSY = new FhirCodeDefinition(
    'BUSY',
    'busy',
    'http://hl7.org/fhir/slotstatus',
    'Busy',
    'Indicates that the time interval is busy because one  or more events have been scheduled for that interval.',
  );
  public static readonly FREE = new FhirCodeDefinition(
    'FREE',
    'free',
    'http://hl7.org/fhir/slotstatus',
    'Free',
    'Indicates that the time interval is free for scheduling.',
  );
  public static readonly BUSY_UNAVAILABLE = new FhirCodeDefinition(
    'BUSY_UNAVAILABLE',
    'busy-unavailable',
    'http://hl7.org/fhir/slotstatus',
    'Busy (Unavailable)',
    'Indicates that the time interval is busy and that the interval cannot be scheduled.',
  );
  public static readonly BUSY_TENTATIVE = new FhirCodeDefinition(
    'BUSY_TENTATIVE',
    'busy-tentative',
    'http://hl7.org/fhir/slotstatus',
    'Busy (Tentative)',
    'Indicates that the time interval is busy because one or more events have been tentatively scheduled for that interval.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/slotstatus',
    'Entered in error',
    'This instance should not have been part of this patient\'s medical record.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      SlotstatusEnum.BUSY,
      SlotstatusEnum.FREE,
      SlotstatusEnum.BUSY_UNAVAILABLE,
      SlotstatusEnum.BUSY_TENTATIVE,
      SlotstatusEnum.ENTERED_IN_ERROR,
      SlotstatusEnum.NULL
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
    } else if (SlotstatusEnum.BUSY.code === code) {
      return SlotstatusEnum.BUSY;
    } else if (SlotstatusEnum.FREE.code === code) {
      return SlotstatusEnum.FREE;
    } else if (SlotstatusEnum.BUSY_UNAVAILABLE.code === code) {
      return SlotstatusEnum.BUSY_UNAVAILABLE;
    } else if (SlotstatusEnum.BUSY_TENTATIVE.code === code) {
      return SlotstatusEnum.BUSY_TENTATIVE;
    } else if (SlotstatusEnum.ENTERED_IN_ERROR.code === code) {
      return SlotstatusEnum.ENTERED_IN_ERROR;
    } else if (SlotstatusEnum.NULL.code === code) {
      return SlotstatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown SlotstatusEnum 'code' value '${code}'`);
    }
  }
}
