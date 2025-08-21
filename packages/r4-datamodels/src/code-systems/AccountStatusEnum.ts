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
 * AccountStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/account-status
 * CodeSystem.name: AccountStatus
 * CodeSystem.description: Indicates whether the account is available to be used.
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
 * FHIR CodeSystem: AccountStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem AccountStatus](http://hl7.org/fhir/account-status)
 */
export class AccountStatusEnum implements IFhirCodeEnum {
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/account-status',
    'Active',
    'This account is active and may be used.',
  );
  public static readonly INACTIVE = new FhirCodeDefinition(
    'INACTIVE',
    'inactive',
    'http://hl7.org/fhir/account-status',
    'Inactive',
    'This account is inactive and should not be used to track financial information.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/account-status',
    'Entered in error',
    'This instance should not have been part of this patient\'s medical record.',
  );
  public static readonly ON_HOLD = new FhirCodeDefinition(
    'ON_HOLD',
    'on-hold',
    'http://hl7.org/fhir/account-status',
    'On Hold',
    'This account is on hold.',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/account-status',
    'Unknown',
    'The account status is unknown.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      AccountStatusEnum.ACTIVE,
      AccountStatusEnum.INACTIVE,
      AccountStatusEnum.ENTERED_IN_ERROR,
      AccountStatusEnum.ON_HOLD,
      AccountStatusEnum.UNKNOWN,
      AccountStatusEnum.NULL
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
    } else if (AccountStatusEnum.ACTIVE.code === code) {
      return AccountStatusEnum.ACTIVE;
    } else if (AccountStatusEnum.INACTIVE.code === code) {
      return AccountStatusEnum.INACTIVE;
    } else if (AccountStatusEnum.ENTERED_IN_ERROR.code === code) {
      return AccountStatusEnum.ENTERED_IN_ERROR;
    } else if (AccountStatusEnum.ON_HOLD.code === code) {
      return AccountStatusEnum.ON_HOLD;
    } else if (AccountStatusEnum.UNKNOWN.code === code) {
      return AccountStatusEnum.UNKNOWN;
    } else if (AccountStatusEnum.NULL.code === code) {
      return AccountStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown AccountStatusEnum 'code' value '${code}'`);
    }
  }
}
