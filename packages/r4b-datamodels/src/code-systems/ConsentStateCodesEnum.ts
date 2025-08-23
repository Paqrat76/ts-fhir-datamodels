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
 * ConsentStateCodesEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/consent-state-codes
 * CodeSystem.name: ConsentStateCodes
 * CodeSystem.description: Indicates the state of the consent.
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
 * FHIR CodeSystem: ConsentStateCodesEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ConsentStateCodes](http://hl7.org/fhir/consent-state-codes)
 */
export class ConsentStateCodesEnum implements IFhirCodeEnum {
  public static readonly DRAFT = new FhirCodeDefinition(
    'DRAFT',
    'draft',
    'http://hl7.org/fhir/consent-state-codes',
    'Pending',
    'The consent is in development or awaiting use but is not yet intended to be acted upon.',
  );
  public static readonly PROPOSED = new FhirCodeDefinition(
    'PROPOSED',
    'proposed',
    'http://hl7.org/fhir/consent-state-codes',
    'Proposed',
    'The consent has been proposed but not yet agreed to by all parties. The negotiation stage.',
  );
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/consent-state-codes',
    'Active',
    'The consent is to be followed and enforced.',
  );
  public static readonly REJECTED = new FhirCodeDefinition(
    'REJECTED',
    'rejected',
    'http://hl7.org/fhir/consent-state-codes',
    'Rejected',
    'The consent has been rejected by one or more of the parties.',
  );
  public static readonly INACTIVE = new FhirCodeDefinition(
    'INACTIVE',
    'inactive',
    'http://hl7.org/fhir/consent-state-codes',
    'Inactive',
    'The consent is terminated or replaced.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/consent-state-codes',
    'Entered in Error',
    'The consent was created wrongly (e.g. wrong patient) and should be ignored.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ConsentStateCodesEnum.DRAFT,
      ConsentStateCodesEnum.PROPOSED,
      ConsentStateCodesEnum.ACTIVE,
      ConsentStateCodesEnum.REJECTED,
      ConsentStateCodesEnum.INACTIVE,
      ConsentStateCodesEnum.ENTERED_IN_ERROR,
      ConsentStateCodesEnum.NULL
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
    } else if (ConsentStateCodesEnum.DRAFT.code === code) {
      return ConsentStateCodesEnum.DRAFT;
    } else if (ConsentStateCodesEnum.PROPOSED.code === code) {
      return ConsentStateCodesEnum.PROPOSED;
    } else if (ConsentStateCodesEnum.ACTIVE.code === code) {
      return ConsentStateCodesEnum.ACTIVE;
    } else if (ConsentStateCodesEnum.REJECTED.code === code) {
      return ConsentStateCodesEnum.REJECTED;
    } else if (ConsentStateCodesEnum.INACTIVE.code === code) {
      return ConsentStateCodesEnum.INACTIVE;
    } else if (ConsentStateCodesEnum.ENTERED_IN_ERROR.code === code) {
      return ConsentStateCodesEnum.ENTERED_IN_ERROR;
    } else if (ConsentStateCodesEnum.NULL.code === code) {
      return ConsentStateCodesEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ConsentStateCodesEnum 'code' value '${code}'`);
    }
  }
}
