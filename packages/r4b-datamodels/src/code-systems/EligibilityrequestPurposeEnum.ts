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
 * EligibilityrequestPurposeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/eligibilityrequest-purpose
 * CodeSystem.name: EligibilityrequestPurpose
 * CodeSystem.description: A code specifying the types of information being requested.
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
 * FHIR CodeSystem: EligibilityrequestPurposeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem EligibilityrequestPurpose](http://hl7.org/fhir/eligibilityrequest-purpose)
 */
export class EligibilityrequestPurposeEnum implements IFhirCodeEnum {
  public static readonly AUTH_REQUIREMENTS = new FhirCodeDefinition(
    'AUTH_REQUIREMENTS',
    'auth-requirements',
    'http://hl7.org/fhir/eligibilityrequest-purpose',
    'Coverage auth-requirements',
    'The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.',
  );
  public static readonly BENEFITS = new FhirCodeDefinition(
    'BENEFITS',
    'benefits',
    'http://hl7.org/fhir/eligibilityrequest-purpose',
    'Coverage benefits',
    'The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.',
  );
  public static readonly DISCOVERY = new FhirCodeDefinition(
    'DISCOVERY',
    'discovery',
    'http://hl7.org/fhir/eligibilityrequest-purpose',
    'Coverage Discovery',
    'The insurer is requested to report on any coverages which they are aware of in addition to any specifed.',
  );
  public static readonly VALIDATION = new FhirCodeDefinition(
    'VALIDATION',
    'validation',
    'http://hl7.org/fhir/eligibilityrequest-purpose',
    'Coverage Validation',
    'A check that the specified coverages are in-force is requested.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      EligibilityrequestPurposeEnum.AUTH_REQUIREMENTS,
      EligibilityrequestPurposeEnum.BENEFITS,
      EligibilityrequestPurposeEnum.DISCOVERY,
      EligibilityrequestPurposeEnum.VALIDATION,
      EligibilityrequestPurposeEnum.NULL
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
    } else if (EligibilityrequestPurposeEnum.AUTH_REQUIREMENTS.code === code) {
      return EligibilityrequestPurposeEnum.AUTH_REQUIREMENTS;
    } else if (EligibilityrequestPurposeEnum.BENEFITS.code === code) {
      return EligibilityrequestPurposeEnum.BENEFITS;
    } else if (EligibilityrequestPurposeEnum.DISCOVERY.code === code) {
      return EligibilityrequestPurposeEnum.DISCOVERY;
    } else if (EligibilityrequestPurposeEnum.VALIDATION.code === code) {
      return EligibilityrequestPurposeEnum.VALIDATION;
    } else if (EligibilityrequestPurposeEnum.NULL.code === code) {
      return EligibilityrequestPurposeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown EligibilityrequestPurposeEnum 'code' value '${code}'`);
    }
  }
}
