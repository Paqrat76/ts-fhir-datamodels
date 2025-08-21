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
 * ContributorTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/contributor-type
 * CodeSystem.name: ContributorType
 * CodeSystem.description: The type of contributor.
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
 * FHIR CodeSystem: ContributorTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ContributorType](http://hl7.org/fhir/contributor-type)
 */
export class ContributorTypeEnum implements IFhirCodeEnum {
  public static readonly AUTHOR = new FhirCodeDefinition(
    'AUTHOR',
    'author',
    'http://hl7.org/fhir/contributor-type',
    'Author',
    'An author of the content of the module.',
  );
  public static readonly EDITOR = new FhirCodeDefinition(
    'EDITOR',
    'editor',
    'http://hl7.org/fhir/contributor-type',
    'Editor',
    'An editor of the content of the module.',
  );
  public static readonly REVIEWER = new FhirCodeDefinition(
    'REVIEWER',
    'reviewer',
    'http://hl7.org/fhir/contributor-type',
    'Reviewer',
    'A reviewer of the content of the module.',
  );
  public static readonly ENDORSER = new FhirCodeDefinition(
    'ENDORSER',
    'endorser',
    'http://hl7.org/fhir/contributor-type',
    'Endorser',
    'An endorser of the content of the module.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ContributorTypeEnum.AUTHOR,
      ContributorTypeEnum.EDITOR,
      ContributorTypeEnum.REVIEWER,
      ContributorTypeEnum.ENDORSER,
      ContributorTypeEnum.NULL
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
    } else if (ContributorTypeEnum.AUTHOR.code === code) {
      return ContributorTypeEnum.AUTHOR;
    } else if (ContributorTypeEnum.EDITOR.code === code) {
      return ContributorTypeEnum.EDITOR;
    } else if (ContributorTypeEnum.REVIEWER.code === code) {
      return ContributorTypeEnum.REVIEWER;
    } else if (ContributorTypeEnum.ENDORSER.code === code) {
      return ContributorTypeEnum.ENDORSER;
    } else if (ContributorTypeEnum.NULL.code === code) {
      return ContributorTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ContributorTypeEnum 'code' value '${code}'`);
    }
  }
}
