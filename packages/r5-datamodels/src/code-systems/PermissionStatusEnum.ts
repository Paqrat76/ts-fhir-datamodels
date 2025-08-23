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
 * PermissionStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/permission-status
 * CodeSystem.name: PermissionStatus
 * CodeSystem.description: Codes identifying the lifecycle stage of a product.
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
 * FHIR CodeSystem: PermissionStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem PermissionStatus](http://hl7.org/fhir/permission-status)
 */
export class PermissionStatusEnum implements IFhirCodeEnum {
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/permission-status',
    'Active',
    'Permission is given.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/permission-status',
    'Entered in Error',
    'Permission was entered in error and is not active.',
  );
  public static readonly DRAFT = new FhirCodeDefinition(
    'DRAFT',
    'draft',
    'http://hl7.org/fhir/permission-status',
    'Draft',
    'Permission is being defined.',
  );
  public static readonly REJECTED = new FhirCodeDefinition(
    'REJECTED',
    'rejected',
    'http://hl7.org/fhir/permission-status',
    'Rejected',
    'Permission not granted.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      PermissionStatusEnum.ACTIVE,
      PermissionStatusEnum.ENTERED_IN_ERROR,
      PermissionStatusEnum.DRAFT,
      PermissionStatusEnum.REJECTED,
      PermissionStatusEnum.NULL
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
    } else if (PermissionStatusEnum.ACTIVE.code === code) {
      return PermissionStatusEnum.ACTIVE;
    } else if (PermissionStatusEnum.ENTERED_IN_ERROR.code === code) {
      return PermissionStatusEnum.ENTERED_IN_ERROR;
    } else if (PermissionStatusEnum.DRAFT.code === code) {
      return PermissionStatusEnum.DRAFT;
    } else if (PermissionStatusEnum.REJECTED.code === code) {
      return PermissionStatusEnum.REJECTED;
    } else if (PermissionStatusEnum.NULL.code === code) {
      return PermissionStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown PermissionStatusEnum 'code' value '${code}'`);
    }
  }
}
