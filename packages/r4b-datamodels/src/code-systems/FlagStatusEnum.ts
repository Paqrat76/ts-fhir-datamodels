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
 * FlagStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/flag-status
 * CodeSystem.name: FlagStatus
 * CodeSystem.description: Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
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
 * FHIR CodeSystem: FlagStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem FlagStatus](http://hl7.org/fhir/flag-status)
 */
export class FlagStatusEnum implements IFhirCodeEnum {
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/flag-status',
    'Active',
    'A current flag that should be displayed to a user. A system may use the category to determine which user roles should view the flag.',
  );
  public static readonly INACTIVE = new FhirCodeDefinition(
    'INACTIVE',
    'inactive',
    'http://hl7.org/fhir/flag-status',
    'Inactive',
    'The flag no longer needs to be displayed.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/flag-status',
    'Entered in Error',
    'The flag was added in error and should no longer be displayed.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      FlagStatusEnum.ACTIVE,
      FlagStatusEnum.INACTIVE,
      FlagStatusEnum.ENTERED_IN_ERROR,
      FlagStatusEnum.NULL
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
    } else if (FlagStatusEnum.ACTIVE.code === code) {
      return FlagStatusEnum.ACTIVE;
    } else if (FlagStatusEnum.INACTIVE.code === code) {
      return FlagStatusEnum.INACTIVE;
    } else if (FlagStatusEnum.ENTERED_IN_ERROR.code === code) {
      return FlagStatusEnum.ENTERED_IN_ERROR;
    } else if (FlagStatusEnum.NULL.code === code) {
      return FlagStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown FlagStatusEnum 'code' value '${code}'`);
    }
  }
}
