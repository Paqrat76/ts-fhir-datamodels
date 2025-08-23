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
 * DeviceCorrectiveactionscopeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/device-correctiveactionscope
 * CodeSystem.name: DeviceCorrectiveactionscope
 * CodeSystem.description: The type of relation between devices.
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
 * FHIR CodeSystem: DeviceCorrectiveactionscopeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem DeviceCorrectiveactionscope](http://hl7.org/fhir/device-correctiveactionscope)
 */
export class DeviceCorrectiveactionscopeEnum implements IFhirCodeEnum {
  public static readonly MODEL = new FhirCodeDefinition(
    'MODEL',
    'model',
    'http://hl7.org/fhir/device-correctiveactionscope',
    'Model',
    'The corrective action was intended for all units of the same model.',
  );
  public static readonly LOT_NUMBERS = new FhirCodeDefinition(
    'LOT_NUMBERS',
    'lot-numbers',
    'http://hl7.org/fhir/device-correctiveactionscope',
    'Lot Numbers',
    'The corrective action was intended for a specific batch of units identified by a lot number.',
  );
  public static readonly SERIAL_NUMBERS = new FhirCodeDefinition(
    'SERIAL_NUMBERS',
    'serial-numbers',
    'http://hl7.org/fhir/device-correctiveactionscope',
    'Serial Numbers',
    'The corrective action was intended for an individual unit (or a set of units) individually identified by serial number.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      DeviceCorrectiveactionscopeEnum.MODEL,
      DeviceCorrectiveactionscopeEnum.LOT_NUMBERS,
      DeviceCorrectiveactionscopeEnum.SERIAL_NUMBERS,
      DeviceCorrectiveactionscopeEnum.NULL
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
    } else if (DeviceCorrectiveactionscopeEnum.MODEL.code === code) {
      return DeviceCorrectiveactionscopeEnum.MODEL;
    } else if (DeviceCorrectiveactionscopeEnum.LOT_NUMBERS.code === code) {
      return DeviceCorrectiveactionscopeEnum.LOT_NUMBERS;
    } else if (DeviceCorrectiveactionscopeEnum.SERIAL_NUMBERS.code === code) {
      return DeviceCorrectiveactionscopeEnum.SERIAL_NUMBERS;
    } else if (DeviceCorrectiveactionscopeEnum.NULL.code === code) {
      return DeviceCorrectiveactionscopeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown DeviceCorrectiveactionscopeEnum 'code' value '${code}'`);
    }
  }
}
