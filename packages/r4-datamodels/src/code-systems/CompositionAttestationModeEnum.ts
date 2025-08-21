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
 * CompositionAttestationModeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/composition-attestation-mode
 * CodeSystem.name: CompositionAttestationMode
 * CodeSystem.description: The way in which a person authenticated a composition.
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
 * FHIR CodeSystem: CompositionAttestationModeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem CompositionAttestationMode](http://hl7.org/fhir/composition-attestation-mode)
 */
export class CompositionAttestationModeEnum implements IFhirCodeEnum {
  public static readonly PERSONAL = new FhirCodeDefinition(
    'PERSONAL',
    'personal',
    'http://hl7.org/fhir/composition-attestation-mode',
    'Personal',
    'The person authenticated the content in their personal capacity.',
  );
  public static readonly PROFESSIONAL = new FhirCodeDefinition(
    'PROFESSIONAL',
    'professional',
    'http://hl7.org/fhir/composition-attestation-mode',
    'Professional',
    'The person authenticated the content in their professional capacity.',
  );
  public static readonly LEGAL = new FhirCodeDefinition(
    'LEGAL',
    'legal',
    'http://hl7.org/fhir/composition-attestation-mode',
    'Legal',
    'The person authenticated the content and accepted legal responsibility for its content.',
  );
  public static readonly OFFICIAL = new FhirCodeDefinition(
    'OFFICIAL',
    'official',
    'http://hl7.org/fhir/composition-attestation-mode',
    'Official',
    'The organization authenticated the content as consistent with their policies and procedures.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      CompositionAttestationModeEnum.PERSONAL,
      CompositionAttestationModeEnum.PROFESSIONAL,
      CompositionAttestationModeEnum.LEGAL,
      CompositionAttestationModeEnum.OFFICIAL,
      CompositionAttestationModeEnum.NULL
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
    } else if (CompositionAttestationModeEnum.PERSONAL.code === code) {
      return CompositionAttestationModeEnum.PERSONAL;
    } else if (CompositionAttestationModeEnum.PROFESSIONAL.code === code) {
      return CompositionAttestationModeEnum.PROFESSIONAL;
    } else if (CompositionAttestationModeEnum.LEGAL.code === code) {
      return CompositionAttestationModeEnum.LEGAL;
    } else if (CompositionAttestationModeEnum.OFFICIAL.code === code) {
      return CompositionAttestationModeEnum.OFFICIAL;
    } else if (CompositionAttestationModeEnum.NULL.code === code) {
      return CompositionAttestationModeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown CompositionAttestationModeEnum 'code' value '${code}'`);
    }
  }
}
