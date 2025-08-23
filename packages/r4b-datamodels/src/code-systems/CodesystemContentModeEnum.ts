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
 * CodesystemContentModeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/codesystem-content-mode
 * CodeSystem.name: CodesystemContentMode
 * CodeSystem.description: The extent of the content of the code system (the concepts and codes it defines) are represented in a code system resource.
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
 * FHIR CodeSystem: CodesystemContentModeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem CodesystemContentMode](http://hl7.org/fhir/codesystem-content-mode)
 */
export class CodesystemContentModeEnum implements IFhirCodeEnum {
  public static readonly NOT_PRESENT = new FhirCodeDefinition(
    'NOT_PRESENT',
    'not-present',
    'http://hl7.org/fhir/codesystem-content-mode',
    'Not Present',
    'None of the concepts defined by the code system are included in the code system resource.',
  );
  public static readonly EXAMPLE = new FhirCodeDefinition(
    'EXAMPLE',
    'example',
    'http://hl7.org/fhir/codesystem-content-mode',
    'Example',
    'A few representative concepts are included in the code system resource. There is no useful intent in the subset choice and there\'s no process to make it workable: it\'s not intended to be workable.',
  );
  public static readonly FRAGMENT = new FhirCodeDefinition(
    'FRAGMENT',
    'fragment',
    'http://hl7.org/fhir/codesystem-content-mode',
    'Fragment',
    'A subset of the code system concepts are included in the code system resource. This is a curated subset released for a specific purpose under the governance of the code system steward, and that the intent, bounds and consequences of the fragmentation are clearly defined in the fragment or the code system documentation. Fragments are also known as partitions.',
  );
  public static readonly COMPLETE = new FhirCodeDefinition(
    'COMPLETE',
    'complete',
    'http://hl7.org/fhir/codesystem-content-mode',
    'Complete',
    'All the concepts defined by the code system are included in the code system resource.',
  );
  public static readonly SUPPLEMENT = new FhirCodeDefinition(
    'SUPPLEMENT',
    'supplement',
    'http://hl7.org/fhir/codesystem-content-mode',
    'Supplement',
    'The resource doesn\'t define any new concepts; it just provides additional designations and properties to another code system.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      CodesystemContentModeEnum.NOT_PRESENT,
      CodesystemContentModeEnum.EXAMPLE,
      CodesystemContentModeEnum.FRAGMENT,
      CodesystemContentModeEnum.COMPLETE,
      CodesystemContentModeEnum.SUPPLEMENT,
      CodesystemContentModeEnum.NULL
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
    } else if (CodesystemContentModeEnum.NOT_PRESENT.code === code) {
      return CodesystemContentModeEnum.NOT_PRESENT;
    } else if (CodesystemContentModeEnum.EXAMPLE.code === code) {
      return CodesystemContentModeEnum.EXAMPLE;
    } else if (CodesystemContentModeEnum.FRAGMENT.code === code) {
      return CodesystemContentModeEnum.FRAGMENT;
    } else if (CodesystemContentModeEnum.COMPLETE.code === code) {
      return CodesystemContentModeEnum.COMPLETE;
    } else if (CodesystemContentModeEnum.SUPPLEMENT.code === code) {
      return CodesystemContentModeEnum.SUPPLEMENT;
    } else if (CodesystemContentModeEnum.NULL.code === code) {
      return CodesystemContentModeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown CodesystemContentModeEnum 'code' value '${code}'`);
    }
  }
}
