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
 * InventoryitemStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/inventoryitem-status
 * CodeSystem.name: InventoryitemStatus
 * CodeSystem.description: InventoryItem Status Codes
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
 * FHIR CodeSystem: InventoryitemStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem InventoryitemStatus](http://hl7.org/fhir/inventoryitem-status)
 */
export class InventoryitemStatusEnum implements IFhirCodeEnum {
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/inventoryitem-status',
    'Active',
    'The item is active and can be referenced.',
  );
  public static readonly INACTIVE = new FhirCodeDefinition(
    'INACTIVE',
    'inactive',
    'http://hl7.org/fhir/inventoryitem-status',
    'Inactive',
    'The item is presently inactive - there may be references to it but the item is not expected to be used.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/inventoryitem-status',
    'Entered in Error',
    'The item record was entered in error.',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/inventoryitem-status',
    'Unknown',
    'The item status has not been determined.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      InventoryitemStatusEnum.ACTIVE,
      InventoryitemStatusEnum.INACTIVE,
      InventoryitemStatusEnum.ENTERED_IN_ERROR,
      InventoryitemStatusEnum.UNKNOWN,
      InventoryitemStatusEnum.NULL
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
    } else if (InventoryitemStatusEnum.ACTIVE.code === code) {
      return InventoryitemStatusEnum.ACTIVE;
    } else if (InventoryitemStatusEnum.INACTIVE.code === code) {
      return InventoryitemStatusEnum.INACTIVE;
    } else if (InventoryitemStatusEnum.ENTERED_IN_ERROR.code === code) {
      return InventoryitemStatusEnum.ENTERED_IN_ERROR;
    } else if (InventoryitemStatusEnum.UNKNOWN.code === code) {
      return InventoryitemStatusEnum.UNKNOWN;
    } else if (InventoryitemStatusEnum.NULL.code === code) {
      return InventoryitemStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown InventoryitemStatusEnum 'code' value '${code}'`);
    }
  }
}
