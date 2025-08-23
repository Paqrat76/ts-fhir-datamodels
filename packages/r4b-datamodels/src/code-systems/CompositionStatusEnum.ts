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
 * CompositionStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/composition-status
 * CodeSystem.name: CompositionStatus
 * CodeSystem.description: The workflow/clinical status of the composition.
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
 * FHIR CodeSystem: CompositionStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem CompositionStatus](http://hl7.org/fhir/composition-status)
 */
export class CompositionStatusEnum implements IFhirCodeEnum {
  public static readonly PRELIMINARY = new FhirCodeDefinition(
    'PRELIMINARY',
    'preliminary',
    'http://hl7.org/fhir/composition-status',
    'Preliminary',
    'This is a preliminary composition or document (also known as initial or interim). The content may be incomplete or unverified.',
  );
  public static readonly FINAL = new FhirCodeDefinition(
    'FINAL',
    'final',
    'http://hl7.org/fhir/composition-status',
    'Final',
    'This version of the composition is complete and verified by an appropriate person and no further work is planned. Any subsequent updates would be on a new version of the composition.',
  );
  public static readonly AMENDED = new FhirCodeDefinition(
    'AMENDED',
    'amended',
    'http://hl7.org/fhir/composition-status',
    'Amended',
    'The composition content or the referenced resources have been modified (edited or added to) subsequent to being released as "final" and the composition is complete and verified by an authorized person.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/composition-status',
    'Entered in Error',
    'The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      CompositionStatusEnum.PRELIMINARY,
      CompositionStatusEnum.FINAL,
      CompositionStatusEnum.AMENDED,
      CompositionStatusEnum.ENTERED_IN_ERROR,
      CompositionStatusEnum.NULL
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
    } else if (CompositionStatusEnum.PRELIMINARY.code === code) {
      return CompositionStatusEnum.PRELIMINARY;
    } else if (CompositionStatusEnum.FINAL.code === code) {
      return CompositionStatusEnum.FINAL;
    } else if (CompositionStatusEnum.AMENDED.code === code) {
      return CompositionStatusEnum.AMENDED;
    } else if (CompositionStatusEnum.ENTERED_IN_ERROR.code === code) {
      return CompositionStatusEnum.ENTERED_IN_ERROR;
    } else if (CompositionStatusEnum.NULL.code === code) {
      return CompositionStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown CompositionStatusEnum 'code' value '${code}'`);
    }
  }
}
