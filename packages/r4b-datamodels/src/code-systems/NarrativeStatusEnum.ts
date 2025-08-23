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
 * NarrativeStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/narrative-status
 * CodeSystem.name: NarrativeStatus
 * CodeSystem.description: The status of a resource narrative.
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
 * FHIR CodeSystem: NarrativeStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem NarrativeStatus](http://hl7.org/fhir/narrative-status)
 */
export class NarrativeStatusEnum implements IFhirCodeEnum {
  public static readonly GENERATED = new FhirCodeDefinition(
    'GENERATED',
    'generated',
    'http://hl7.org/fhir/narrative-status',
    'Generated',
    'The contents of the narrative are entirely generated from the core elements in the content.',
  );
  public static readonly EXTENSIONS = new FhirCodeDefinition(
    'EXTENSIONS',
    'extensions',
    'http://hl7.org/fhir/narrative-status',
    'Extensions',
    'The contents of the narrative are entirely generated from the core elements in the content and some of the content is generated from extensions. The narrative SHALL reflect the impact of all modifier extensions.',
  );
  public static readonly ADDITIONAL = new FhirCodeDefinition(
    'ADDITIONAL',
    'additional',
    'http://hl7.org/fhir/narrative-status',
    'Additional',
    'The contents of the narrative may contain additional information not found in the structured data. Note that there is no computable way to determine what the extra information is, other than by human inspection.',
  );
  public static readonly EMPTY = new FhirCodeDefinition(
    'EMPTY',
    'empty',
    'http://hl7.org/fhir/narrative-status',
    'Empty',
    'The contents of the narrative are some equivalent of "No human-readable text provided in this case".',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      NarrativeStatusEnum.GENERATED,
      NarrativeStatusEnum.EXTENSIONS,
      NarrativeStatusEnum.ADDITIONAL,
      NarrativeStatusEnum.EMPTY,
      NarrativeStatusEnum.NULL
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
    } else if (NarrativeStatusEnum.GENERATED.code === code) {
      return NarrativeStatusEnum.GENERATED;
    } else if (NarrativeStatusEnum.EXTENSIONS.code === code) {
      return NarrativeStatusEnum.EXTENSIONS;
    } else if (NarrativeStatusEnum.ADDITIONAL.code === code) {
      return NarrativeStatusEnum.ADDITIONAL;
    } else if (NarrativeStatusEnum.EMPTY.code === code) {
      return NarrativeStatusEnum.EMPTY;
    } else if (NarrativeStatusEnum.NULL.code === code) {
      return NarrativeStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown NarrativeStatusEnum 'code' value '${code}'`);
    }
  }
}
