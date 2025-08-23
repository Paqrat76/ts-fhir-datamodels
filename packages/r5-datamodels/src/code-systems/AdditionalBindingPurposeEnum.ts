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
 * AdditionalBindingPurposeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/CodeSystem/additional-binding-purpose
 * CodeSystem.name: AdditionalBindingPurpose
 * CodeSystem.description: Additional Binding Purpose
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
 * FHIR CodeSystem: AdditionalBindingPurposeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem AdditionalBindingPurpose](http://hl7.org/fhir/CodeSystem/additional-binding-purpose)
 */
export class AdditionalBindingPurposeEnum implements IFhirCodeEnum {
  public static readonly MAXIMUM = new FhirCodeDefinition(
    'MAXIMUM',
    'maximum',
    'http://hl7.org/fhir/CodeSystem/additional-binding-purpose',
    'Maximum Binding',
    'A required binding, for use when the binding strength is \'extensible\' or \'preferred\'',
  );
  public static readonly MINIMUM = new FhirCodeDefinition(
    'MINIMUM',
    'minimum',
    'http://hl7.org/fhir/CodeSystem/additional-binding-purpose',
    'Minimum Binding',
    'The minimum allowable value set - any conformant system SHALL support all these codes',
  );
  public static readonly REQUIRED = new FhirCodeDefinition(
    'REQUIRED',
    'required',
    'http://hl7.org/fhir/CodeSystem/additional-binding-purpose',
    'Required Binding',
    'This value set is used as a required binding (in addition to the base binding (not a replacement), usually in a particular usage context)',
  );
  public static readonly EXTENSIBLE = new FhirCodeDefinition(
    'EXTENSIBLE',
    'extensible',
    'http://hl7.org/fhir/CodeSystem/additional-binding-purpose',
    'Conformance Binding',
    'This value set is used as an extensible binding (in addition to the base binding (not a replacement), usually in a particular usage context)',
  );
  public static readonly CANDIDATE = new FhirCodeDefinition(
    'CANDIDATE',
    'candidate',
    'http://hl7.org/fhir/CodeSystem/additional-binding-purpose',
    'Candidate Binding',
    'This value set is a candidate to substitute for the overall conformance value set in some situations; usually these are defined in the documentation',
  );
  public static readonly CURRENT = new FhirCodeDefinition(
    'CURRENT',
    'current',
    'http://hl7.org/fhir/CodeSystem/additional-binding-purpose',
    'Current Binding',
    'New records are required to use this value set, but legacy records may use other codes. The definition of \'new record\' is difficult, since systems often create new records based on pre-existing data. Usually \'current\' bindings are mandated by an external authority that makes clear rules around this',
  );
  public static readonly PREFERRED = new FhirCodeDefinition(
    'PREFERRED',
    'preferred',
    'http://hl7.org/fhir/CodeSystem/additional-binding-purpose',
    'Preferred Binding',
    'This is the value set that is preferred in a given context (documentation should explain why)',
  );
  public static readonly UI = new FhirCodeDefinition(
    'UI',
    'ui',
    'http://hl7.org/fhir/CodeSystem/additional-binding-purpose',
    'UI Suggested Binding',
    'This value set is provided for user look up in a given context. Typically, these valuesets only include a subset of codes relevant for input in a context',
  );
  public static readonly STARTER = new FhirCodeDefinition(
    'STARTER',
    'starter',
    'http://hl7.org/fhir/CodeSystem/additional-binding-purpose',
    'Starter Binding',
    'This value set is a good set of codes to start with when designing your system',
  );
  public static readonly COMPONENT = new FhirCodeDefinition(
    'COMPONENT',
    'component',
    'http://hl7.org/fhir/CodeSystem/additional-binding-purpose',
    'Component Binding',
    'This value set is a component of the base value set. Usually this is called out so that documentation can be written about a portion of the value set',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      AdditionalBindingPurposeEnum.MAXIMUM,
      AdditionalBindingPurposeEnum.MINIMUM,
      AdditionalBindingPurposeEnum.REQUIRED,
      AdditionalBindingPurposeEnum.EXTENSIBLE,
      AdditionalBindingPurposeEnum.CANDIDATE,
      AdditionalBindingPurposeEnum.CURRENT,
      AdditionalBindingPurposeEnum.PREFERRED,
      AdditionalBindingPurposeEnum.UI,
      AdditionalBindingPurposeEnum.STARTER,
      AdditionalBindingPurposeEnum.COMPONENT,
      AdditionalBindingPurposeEnum.NULL
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
    } else if (AdditionalBindingPurposeEnum.MAXIMUM.code === code) {
      return AdditionalBindingPurposeEnum.MAXIMUM;
    } else if (AdditionalBindingPurposeEnum.MINIMUM.code === code) {
      return AdditionalBindingPurposeEnum.MINIMUM;
    } else if (AdditionalBindingPurposeEnum.REQUIRED.code === code) {
      return AdditionalBindingPurposeEnum.REQUIRED;
    } else if (AdditionalBindingPurposeEnum.EXTENSIBLE.code === code) {
      return AdditionalBindingPurposeEnum.EXTENSIBLE;
    } else if (AdditionalBindingPurposeEnum.CANDIDATE.code === code) {
      return AdditionalBindingPurposeEnum.CANDIDATE;
    } else if (AdditionalBindingPurposeEnum.CURRENT.code === code) {
      return AdditionalBindingPurposeEnum.CURRENT;
    } else if (AdditionalBindingPurposeEnum.PREFERRED.code === code) {
      return AdditionalBindingPurposeEnum.PREFERRED;
    } else if (AdditionalBindingPurposeEnum.UI.code === code) {
      return AdditionalBindingPurposeEnum.UI;
    } else if (AdditionalBindingPurposeEnum.STARTER.code === code) {
      return AdditionalBindingPurposeEnum.STARTER;
    } else if (AdditionalBindingPurposeEnum.COMPONENT.code === code) {
      return AdditionalBindingPurposeEnum.COMPONENT;
    } else if (AdditionalBindingPurposeEnum.NULL.code === code) {
      return AdditionalBindingPurposeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown AdditionalBindingPurposeEnum 'code' value '${code}'`);
    }
  }
}
