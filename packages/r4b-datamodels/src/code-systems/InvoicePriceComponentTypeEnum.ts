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
 * InvoicePriceComponentTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/invoice-priceComponentType
 * CodeSystem.name: InvoicePriceComponentType
 * CodeSystem.description: Codes indicating the kind of the price component.
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
 * FHIR CodeSystem: InvoicePriceComponentTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem InvoicePriceComponentType](http://hl7.org/fhir/invoice-priceComponentType)
 */
export class InvoicePriceComponentTypeEnum implements IFhirCodeEnum {
  public static readonly BASE = new FhirCodeDefinition(
    'BASE',
    'base',
    'http://hl7.org/fhir/invoice-priceComponentType',
    'base price',
    'the amount is the base price used for calculating the total price before applying surcharges, discount or taxes.',
  );
  public static readonly SURCHARGE = new FhirCodeDefinition(
    'SURCHARGE',
    'surcharge',
    'http://hl7.org/fhir/invoice-priceComponentType',
    'surcharge',
    'the amount is a surcharge applied on the base price.',
  );
  public static readonly DEDUCTION = new FhirCodeDefinition(
    'DEDUCTION',
    'deduction',
    'http://hl7.org/fhir/invoice-priceComponentType',
    'deduction',
    'the amount is a deduction applied on the base price.',
  );
  public static readonly DISCOUNT = new FhirCodeDefinition(
    'DISCOUNT',
    'discount',
    'http://hl7.org/fhir/invoice-priceComponentType',
    'discount',
    'the amount is a discount applied on the base price.',
  );
  public static readonly TAX = new FhirCodeDefinition(
    'TAX',
    'tax',
    'http://hl7.org/fhir/invoice-priceComponentType',
    'tax',
    'the amount is the tax component of the total price.',
  );
  public static readonly INFORMATIONAL = new FhirCodeDefinition(
    'INFORMATIONAL',
    'informational',
    'http://hl7.org/fhir/invoice-priceComponentType',
    'informational',
    'the amount is of informational character, it has not been applied in the calculation of the total price.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      InvoicePriceComponentTypeEnum.BASE,
      InvoicePriceComponentTypeEnum.SURCHARGE,
      InvoicePriceComponentTypeEnum.DEDUCTION,
      InvoicePriceComponentTypeEnum.DISCOUNT,
      InvoicePriceComponentTypeEnum.TAX,
      InvoicePriceComponentTypeEnum.INFORMATIONAL,
      InvoicePriceComponentTypeEnum.NULL
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
    } else if (InvoicePriceComponentTypeEnum.BASE.code === code) {
      return InvoicePriceComponentTypeEnum.BASE;
    } else if (InvoicePriceComponentTypeEnum.SURCHARGE.code === code) {
      return InvoicePriceComponentTypeEnum.SURCHARGE;
    } else if (InvoicePriceComponentTypeEnum.DEDUCTION.code === code) {
      return InvoicePriceComponentTypeEnum.DEDUCTION;
    } else if (InvoicePriceComponentTypeEnum.DISCOUNT.code === code) {
      return InvoicePriceComponentTypeEnum.DISCOUNT;
    } else if (InvoicePriceComponentTypeEnum.TAX.code === code) {
      return InvoicePriceComponentTypeEnum.TAX;
    } else if (InvoicePriceComponentTypeEnum.INFORMATIONAL.code === code) {
      return InvoicePriceComponentTypeEnum.INFORMATIONAL;
    } else if (InvoicePriceComponentTypeEnum.NULL.code === code) {
      return InvoicePriceComponentTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown InvoicePriceComponentTypeEnum 'code' value '${code}'`);
    }
  }
}
