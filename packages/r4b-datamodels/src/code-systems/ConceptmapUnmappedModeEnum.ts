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
 * ConceptmapUnmappedModeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/conceptmap-unmapped-mode
 * CodeSystem.name: ConceptmapUnmappedMode
 * CodeSystem.description: Defines which action to take if there is no match in the group.
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
 * FHIR CodeSystem: ConceptmapUnmappedModeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ConceptmapUnmappedMode](http://hl7.org/fhir/conceptmap-unmapped-mode)
 */
export class ConceptmapUnmappedModeEnum implements IFhirCodeEnum {
  public static readonly PROVIDED = new FhirCodeDefinition(
    'PROVIDED',
    'provided',
    'http://hl7.org/fhir/conceptmap-unmapped-mode',
    'Provided Code',
    'Use the code as provided in the $translate request.',
  );
  public static readonly FIXED = new FhirCodeDefinition(
    'FIXED',
    'fixed',
    'http://hl7.org/fhir/conceptmap-unmapped-mode',
    'Fixed Code',
    'Use the code explicitly provided in the group.unmapped.',
  );
  public static readonly OTHER_MAP = new FhirCodeDefinition(
    'OTHER_MAP',
    'other-map',
    'http://hl7.org/fhir/conceptmap-unmapped-mode',
    'Other Map',
    'Use the map identified by the canonical URL in the url element.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ConceptmapUnmappedModeEnum.PROVIDED,
      ConceptmapUnmappedModeEnum.FIXED,
      ConceptmapUnmappedModeEnum.OTHER_MAP,
      ConceptmapUnmappedModeEnum.NULL
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
    } else if (ConceptmapUnmappedModeEnum.PROVIDED.code === code) {
      return ConceptmapUnmappedModeEnum.PROVIDED;
    } else if (ConceptmapUnmappedModeEnum.FIXED.code === code) {
      return ConceptmapUnmappedModeEnum.FIXED;
    } else if (ConceptmapUnmappedModeEnum.OTHER_MAP.code === code) {
      return ConceptmapUnmappedModeEnum.OTHER_MAP;
    } else if (ConceptmapUnmappedModeEnum.NULL.code === code) {
      return ConceptmapUnmappedModeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ConceptmapUnmappedModeEnum 'code' value '${code}'`);
    }
  }
}
