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
 * NamingsystemTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/namingsystem-type
 * CodeSystem.name: NamingsystemType
 * CodeSystem.description: Identifies the purpose of the naming system.
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
 * FHIR CodeSystem: NamingsystemTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem NamingsystemType](http://hl7.org/fhir/namingsystem-type)
 */
export class NamingsystemTypeEnum implements IFhirCodeEnum {
  public static readonly CODESYSTEM = new FhirCodeDefinition(
    'CODESYSTEM',
    'codesystem',
    'http://hl7.org/fhir/namingsystem-type',
    'Code System',
    'The naming system is used to define concepts and symbols to represent those concepts; e.g. UCUM, LOINC, NDC code, local lab codes, etc.',
  );
  public static readonly IDENTIFIER = new FhirCodeDefinition(
    'IDENTIFIER',
    'identifier',
    'http://hl7.org/fhir/namingsystem-type',
    'Identifier',
    'The naming system is used to manage identifiers (e.g. license numbers, order numbers, etc.).',
  );
  public static readonly ROOT = new FhirCodeDefinition(
    'ROOT',
    'root',
    'http://hl7.org/fhir/namingsystem-type',
    'Root',
    'The naming system is used as the root for other identifiers and naming systems.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      NamingsystemTypeEnum.CODESYSTEM,
      NamingsystemTypeEnum.IDENTIFIER,
      NamingsystemTypeEnum.ROOT,
      NamingsystemTypeEnum.NULL
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
    } else if (NamingsystemTypeEnum.CODESYSTEM.code === code) {
      return NamingsystemTypeEnum.CODESYSTEM;
    } else if (NamingsystemTypeEnum.IDENTIFIER.code === code) {
      return NamingsystemTypeEnum.IDENTIFIER;
    } else if (NamingsystemTypeEnum.ROOT.code === code) {
      return NamingsystemTypeEnum.ROOT;
    } else if (NamingsystemTypeEnum.NULL.code === code) {
      return NamingsystemTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown NamingsystemTypeEnum 'code' value '${code}'`);
    }
  }
}
