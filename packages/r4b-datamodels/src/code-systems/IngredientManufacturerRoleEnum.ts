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
 * IngredientManufacturerRoleEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/ingredient-manufacturer-role
 * CodeSystem.name: IngredientManufacturerRole
 * CodeSystem.description: The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role
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
 * FHIR CodeSystem: IngredientManufacturerRoleEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem IngredientManufacturerRole](http://hl7.org/fhir/ingredient-manufacturer-role)
 */
export class IngredientManufacturerRoleEnum implements IFhirCodeEnum {
  public static readonly ALLOWED = new FhirCodeDefinition(
    'ALLOWED',
    'allowed',
    'http://hl7.org/fhir/ingredient-manufacturer-role',
    'Manufacturer is specifically allowed for this ingredient',
  );
  public static readonly POSSIBLE = new FhirCodeDefinition(
    'POSSIBLE',
    'possible',
    'http://hl7.org/fhir/ingredient-manufacturer-role',
    'Manufacturer is known to make this ingredient in general',
  );
  public static readonly ACTUAL = new FhirCodeDefinition(
    'ACTUAL',
    'actual',
    'http://hl7.org/fhir/ingredient-manufacturer-role',
    'Manufacturer actually makes this particular ingredient',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      IngredientManufacturerRoleEnum.ALLOWED,
      IngredientManufacturerRoleEnum.POSSIBLE,
      IngredientManufacturerRoleEnum.ACTUAL,
      IngredientManufacturerRoleEnum.NULL
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
    } else if (IngredientManufacturerRoleEnum.ALLOWED.code === code) {
      return IngredientManufacturerRoleEnum.ALLOWED;
    } else if (IngredientManufacturerRoleEnum.POSSIBLE.code === code) {
      return IngredientManufacturerRoleEnum.POSSIBLE;
    } else if (IngredientManufacturerRoleEnum.ACTUAL.code === code) {
      return IngredientManufacturerRoleEnum.ACTUAL;
    } else if (IngredientManufacturerRoleEnum.NULL.code === code) {
      return IngredientManufacturerRoleEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown IngredientManufacturerRoleEnum 'code' value '${code}'`);
    }
  }
}
