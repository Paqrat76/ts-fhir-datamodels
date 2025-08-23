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
 * ChargeitemStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/chargeitem-status
 * CodeSystem.name: ChargeitemStatus
 * CodeSystem.description: Codes identifying the lifecycle stage of a ChargeItem.
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
 * FHIR CodeSystem: ChargeitemStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ChargeitemStatus](http://hl7.org/fhir/chargeitem-status)
 */
export class ChargeitemStatusEnum implements IFhirCodeEnum {
  public static readonly PLANNED = new FhirCodeDefinition(
    'PLANNED',
    'planned',
    'http://hl7.org/fhir/chargeitem-status',
    'Planned',
    'The charge item has been entered, but the charged service is not  yet complete, so it shall not be billed yet but might be used in the context of pre-authorization.',
  );
  public static readonly BILLABLE = new FhirCodeDefinition(
    'BILLABLE',
    'billable',
    'http://hl7.org/fhir/chargeitem-status',
    'Billable',
    'The charge item is ready for billing.',
  );
  public static readonly NOT_BILLABLE = new FhirCodeDefinition(
    'NOT_BILLABLE',
    'not-billable',
    'http://hl7.org/fhir/chargeitem-status',
    'Not billable',
    'The charge item has been determined to be not billable (e.g. due to rules associated with the billing code).',
  );
  public static readonly ABORTED = new FhirCodeDefinition(
    'ABORTED',
    'aborted',
    'http://hl7.org/fhir/chargeitem-status',
    'Aborted',
    'The processing of the charge was aborted.',
  );
  public static readonly BILLED = new FhirCodeDefinition(
    'BILLED',
    'billed',
    'http://hl7.org/fhir/chargeitem-status',
    'Billed',
    'The charge item has been billed (e.g. a billing engine has generated financial transactions by applying the associated ruled for the charge item to the context of the Encounter, and placed them into Claims/Invoices.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/chargeitem-status',
    'Entered in Error',
    'The charge item has been entered in error and should not be processed for billing.',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/chargeitem-status',
    'Unknown',
    'The authoring system does not know which of the status values currently applies for this charge item  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it\'s just not known which one.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ChargeitemStatusEnum.PLANNED,
      ChargeitemStatusEnum.BILLABLE,
      ChargeitemStatusEnum.NOT_BILLABLE,
      ChargeitemStatusEnum.ABORTED,
      ChargeitemStatusEnum.BILLED,
      ChargeitemStatusEnum.ENTERED_IN_ERROR,
      ChargeitemStatusEnum.UNKNOWN,
      ChargeitemStatusEnum.NULL
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
    } else if (ChargeitemStatusEnum.PLANNED.code === code) {
      return ChargeitemStatusEnum.PLANNED;
    } else if (ChargeitemStatusEnum.BILLABLE.code === code) {
      return ChargeitemStatusEnum.BILLABLE;
    } else if (ChargeitemStatusEnum.NOT_BILLABLE.code === code) {
      return ChargeitemStatusEnum.NOT_BILLABLE;
    } else if (ChargeitemStatusEnum.ABORTED.code === code) {
      return ChargeitemStatusEnum.ABORTED;
    } else if (ChargeitemStatusEnum.BILLED.code === code) {
      return ChargeitemStatusEnum.BILLED;
    } else if (ChargeitemStatusEnum.ENTERED_IN_ERROR.code === code) {
      return ChargeitemStatusEnum.ENTERED_IN_ERROR;
    } else if (ChargeitemStatusEnum.UNKNOWN.code === code) {
      return ChargeitemStatusEnum.UNKNOWN;
    } else if (ChargeitemStatusEnum.NULL.code === code) {
      return ChargeitemStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ChargeitemStatusEnum 'code' value '${code}'`);
    }
  }
}
