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
 * ListModeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/list-mode
 * CodeSystem.name: ListMode
 * CodeSystem.description: The processing mode that applies to this list.
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
 * FHIR CodeSystem: ListModeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ListMode](http://hl7.org/fhir/list-mode)
 */
export class ListModeEnum implements IFhirCodeEnum {
  public static readonly WORKING = new FhirCodeDefinition(
    'WORKING',
    'working',
    'http://hl7.org/fhir/list-mode',
    'Working List',
    'This list is the master list, maintained in an ongoing fashion with regular updates as the real world list it is tracking changes.',
  );
  public static readonly SNAPSHOT = new FhirCodeDefinition(
    'SNAPSHOT',
    'snapshot',
    'http://hl7.org/fhir/list-mode',
    'Snapshot List',
    'This list was prepared as a snapshot. It should not be assumed to be current.',
  );
  public static readonly CHANGES = new FhirCodeDefinition(
    'CHANGES',
    'changes',
    'http://hl7.org/fhir/list-mode',
    'Change List',
    'A point-in-time list that shows what changes have been made or recommended.  E.g. a discharge medication list showing what was added and removed during an encounter.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ListModeEnum.WORKING,
      ListModeEnum.SNAPSHOT,
      ListModeEnum.CHANGES,
      ListModeEnum.NULL
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
    } else if (ListModeEnum.WORKING.code === code) {
      return ListModeEnum.WORKING;
    } else if (ListModeEnum.SNAPSHOT.code === code) {
      return ListModeEnum.SNAPSHOT;
    } else if (ListModeEnum.CHANGES.code === code) {
      return ListModeEnum.CHANGES;
    } else if (ListModeEnum.NULL.code === code) {
      return ListModeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ListModeEnum 'code' value '${code}'`);
    }
  }
}
