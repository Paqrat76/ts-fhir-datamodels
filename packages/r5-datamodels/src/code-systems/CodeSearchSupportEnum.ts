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
 * CodeSearchSupportEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/code-search-support
 * CodeSystem.name: CodeSearchSupport
 * CodeSystem.description: The degree to which the server supports the code search parameter on ValueSet, if it is supported.
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
 * FHIR CodeSystem: CodeSearchSupportEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem CodeSearchSupport](http://hl7.org/fhir/code-search-support)
 */
export class CodeSearchSupportEnum implements IFhirCodeEnum {
  public static readonly IN_COMPOSE = new FhirCodeDefinition(
    'IN_COMPOSE',
    'in-compose',
    'http://hl7.org/fhir/code-search-support',
    'In Compose',
    'The search for code on ValueSet returns ValueSet resources where the code is included in the extensional definition of the ValueSet.',
  );
  public static readonly IN_EXPANSION = new FhirCodeDefinition(
    'IN_EXPANSION',
    'in-expansion',
    'http://hl7.org/fhir/code-search-support',
    'In Expansion',
    'The search for code on ValueSet returns ValueSet resources where the code is contained in the  ValueSet expansion.',
  );
  public static readonly IN_COMPOSE_OR_EXPANSION = new FhirCodeDefinition(
    'IN_COMPOSE_OR_EXPANSION',
    'in-compose-or-expansion',
    'http://hl7.org/fhir/code-search-support',
    'In Compose Or Expansion',
    'The search for code on ValueSet returns ValueSet resources where the code is included in the extensional definition or contained in the ValueSet expansion.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      CodeSearchSupportEnum.IN_COMPOSE,
      CodeSearchSupportEnum.IN_EXPANSION,
      CodeSearchSupportEnum.IN_COMPOSE_OR_EXPANSION,
      CodeSearchSupportEnum.NULL
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
    } else if (CodeSearchSupportEnum.IN_COMPOSE.code === code) {
      return CodeSearchSupportEnum.IN_COMPOSE;
    } else if (CodeSearchSupportEnum.IN_EXPANSION.code === code) {
      return CodeSearchSupportEnum.IN_EXPANSION;
    } else if (CodeSearchSupportEnum.IN_COMPOSE_OR_EXPANSION.code === code) {
      return CodeSearchSupportEnum.IN_COMPOSE_OR_EXPANSION;
    } else if (CodeSearchSupportEnum.NULL.code === code) {
      return CodeSearchSupportEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown CodeSearchSupportEnum 'code' value '${code}'`);
    }
  }
}
