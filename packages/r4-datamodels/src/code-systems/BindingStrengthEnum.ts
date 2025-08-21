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
 * BindingStrengthEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/binding-strength
 * CodeSystem.name: BindingStrength
 * CodeSystem.description: Indication of the degree of conformance expectations associated with a binding.
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
 * FHIR CodeSystem: BindingStrengthEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem BindingStrength](http://hl7.org/fhir/binding-strength)
 */
export class BindingStrengthEnum implements IFhirCodeEnum {
  public static readonly REQUIRED = new FhirCodeDefinition(
    'REQUIRED',
    'required',
    'http://hl7.org/fhir/binding-strength',
    'Required',
    'To be conformant, the concept in this element SHALL be from the specified value set.',
  );
  public static readonly EXTENSIBLE = new FhirCodeDefinition(
    'EXTENSIBLE',
    'extensible',
    'http://hl7.org/fhir/binding-strength',
    'Extensible',
    'To be conformant, the concept in this element SHALL be from the specified value set if any of the codes within the value set can apply to the concept being communicated.  If the value set does not cover the concept (based on human review), alternate codings (or, data type allowing, text) may be included instead.',
  );
  public static readonly PREFERRED = new FhirCodeDefinition(
    'PREFERRED',
    'preferred',
    'http://hl7.org/fhir/binding-strength',
    'Preferred',
    'Instances are encouraged to draw from the specified codes for interoperability purposes but are not required to do so to be considered conformant.',
  );
  public static readonly EXAMPLE = new FhirCodeDefinition(
    'EXAMPLE',
    'example',
    'http://hl7.org/fhir/binding-strength',
    'Example',
    'Instances are not expected or even encouraged to draw from the specified value set.  The value set merely provides examples of the types of concepts intended to be included.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      BindingStrengthEnum.REQUIRED,
      BindingStrengthEnum.EXTENSIBLE,
      BindingStrengthEnum.PREFERRED,
      BindingStrengthEnum.EXAMPLE,
      BindingStrengthEnum.NULL
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
    } else if (BindingStrengthEnum.REQUIRED.code === code) {
      return BindingStrengthEnum.REQUIRED;
    } else if (BindingStrengthEnum.EXTENSIBLE.code === code) {
      return BindingStrengthEnum.EXTENSIBLE;
    } else if (BindingStrengthEnum.PREFERRED.code === code) {
      return BindingStrengthEnum.PREFERRED;
    } else if (BindingStrengthEnum.EXAMPLE.code === code) {
      return BindingStrengthEnum.EXAMPLE;
    } else if (BindingStrengthEnum.NULL.code === code) {
      return BindingStrengthEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown BindingStrengthEnum 'code' value '${code}'`);
    }
  }
}
