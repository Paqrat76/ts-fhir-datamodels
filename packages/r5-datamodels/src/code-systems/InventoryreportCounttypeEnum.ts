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
 * InventoryreportCounttypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/inventoryreport-counttype
 * CodeSystem.name: InventoryreportCounttype
 * CodeSystem.description: The type of count.
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
 * FHIR CodeSystem: InventoryreportCounttypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem InventoryreportCounttype](http://hl7.org/fhir/inventoryreport-counttype)
 */
export class InventoryreportCounttypeEnum implements IFhirCodeEnum {
  public static readonly SNAPSHOT = new FhirCodeDefinition(
    'SNAPSHOT',
    'snapshot',
    'http://hl7.org/fhir/inventoryreport-counttype',
    'Snapshot',
    'The inventory report is a current absolute snapshot, i.e. it represents the quantities at hand.',
  );
  public static readonly DIFFERENCE = new FhirCodeDefinition(
    'DIFFERENCE',
    'difference',
    'http://hl7.org/fhir/inventoryreport-counttype',
    'Difference',
    'The inventory report is about the difference between a previous count and a current count, i.e. it represents the items that have been added/subtracted from inventory.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      InventoryreportCounttypeEnum.SNAPSHOT,
      InventoryreportCounttypeEnum.DIFFERENCE,
      InventoryreportCounttypeEnum.NULL
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
    } else if (InventoryreportCounttypeEnum.SNAPSHOT.code === code) {
      return InventoryreportCounttypeEnum.SNAPSHOT;
    } else if (InventoryreportCounttypeEnum.DIFFERENCE.code === code) {
      return InventoryreportCounttypeEnum.DIFFERENCE;
    } else if (InventoryreportCounttypeEnum.NULL.code === code) {
      return InventoryreportCounttypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown InventoryreportCounttypeEnum 'code' value '${code}'`);
    }
  }
}
