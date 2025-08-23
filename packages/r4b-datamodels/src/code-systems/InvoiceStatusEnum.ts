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
 * InvoiceStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/invoice-status
 * CodeSystem.name: InvoiceStatus
 * CodeSystem.description: Codes identifying the lifecycle stage of an Invoice.
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
 * FHIR CodeSystem: InvoiceStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem InvoiceStatus](http://hl7.org/fhir/invoice-status)
 */
export class InvoiceStatusEnum implements IFhirCodeEnum {
  public static readonly DRAFT = new FhirCodeDefinition(
    'DRAFT',
    'draft',
    'http://hl7.org/fhir/invoice-status',
    'draft',
    'the invoice has been prepared but not yet finalized.',
  );
  public static readonly ISSUED = new FhirCodeDefinition(
    'ISSUED',
    'issued',
    'http://hl7.org/fhir/invoice-status',
    'issued',
    'the invoice has been finalized and sent to the recipient.',
  );
  public static readonly BALANCED = new FhirCodeDefinition(
    'BALANCED',
    'balanced',
    'http://hl7.org/fhir/invoice-status',
    'balanced',
    'the invoice has been balaced / completely paid.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/invoice-status',
    'cancelled',
    'the invoice was cancelled.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/invoice-status',
    'entered in error',
    'the invoice was determined as entered in error before it was issued.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      InvoiceStatusEnum.DRAFT,
      InvoiceStatusEnum.ISSUED,
      InvoiceStatusEnum.BALANCED,
      InvoiceStatusEnum.CANCELLED,
      InvoiceStatusEnum.ENTERED_IN_ERROR,
      InvoiceStatusEnum.NULL
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
    } else if (InvoiceStatusEnum.DRAFT.code === code) {
      return InvoiceStatusEnum.DRAFT;
    } else if (InvoiceStatusEnum.ISSUED.code === code) {
      return InvoiceStatusEnum.ISSUED;
    } else if (InvoiceStatusEnum.BALANCED.code === code) {
      return InvoiceStatusEnum.BALANCED;
    } else if (InvoiceStatusEnum.CANCELLED.code === code) {
      return InvoiceStatusEnum.CANCELLED;
    } else if (InvoiceStatusEnum.ENTERED_IN_ERROR.code === code) {
      return InvoiceStatusEnum.ENTERED_IN_ERROR;
    } else if (InvoiceStatusEnum.NULL.code === code) {
      return InvoiceStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown InvoiceStatusEnum 'code' value '${code}'`);
    }
  }
}
