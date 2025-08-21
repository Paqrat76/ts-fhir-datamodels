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
 * SearchModifierCodeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/search-modifier-code
 * CodeSystem.name: SearchModifierCode
 * CodeSystem.description: A supported modifier for a search parameter.
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
 * FHIR CodeSystem: SearchModifierCodeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem SearchModifierCode](http://hl7.org/fhir/search-modifier-code)
 */
export class SearchModifierCodeEnum implements IFhirCodeEnum {
  public static readonly MISSING = new FhirCodeDefinition(
    'MISSING',
    'missing',
    'http://hl7.org/fhir/search-modifier-code',
    'Missing',
    'The search parameter returns resources that have a value or not.',
  );
  public static readonly EXACT = new FhirCodeDefinition(
    'EXACT',
    'exact',
    'http://hl7.org/fhir/search-modifier-code',
    'Exact',
    'The search parameter returns resources that have a value that exactly matches the supplied parameter (the whole string, including casing and accents).',
  );
  public static readonly CONTAINS = new FhirCodeDefinition(
    'CONTAINS',
    'contains',
    'http://hl7.org/fhir/search-modifier-code',
    'Contains',
    'The search parameter returns resources that include the supplied parameter value anywhere within the field being searched.',
  );
  public static readonly NOT = new FhirCodeDefinition(
    'NOT',
    'not',
    'http://hl7.org/fhir/search-modifier-code',
    'Not',
    'The search parameter returns resources that do not contain a match.',
  );
  public static readonly TEXT = new FhirCodeDefinition(
    'TEXT',
    'text',
    'http://hl7.org/fhir/search-modifier-code',
    'Text',
    'The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.',
  );
  public static readonly IN = new FhirCodeDefinition(
    'IN',
    'in',
    'http://hl7.org/fhir/search-modifier-code',
    'In',
    'The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set.',
  );
  public static readonly NOT_IN = new FhirCodeDefinition(
    'NOT_IN',
    'not-in',
    'http://hl7.org/fhir/search-modifier-code',
    'Not In',
    'The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.',
  );
  public static readonly BELOW = new FhirCodeDefinition(
    'BELOW',
    'below',
    'http://hl7.org/fhir/search-modifier-code',
    'Below',
    'The search parameter tests whether the value in a resource is subsumed by the specified value (is-a, or hierarchical relationships).',
  );
  public static readonly ABOVE = new FhirCodeDefinition(
    'ABOVE',
    'above',
    'http://hl7.org/fhir/search-modifier-code',
    'Above',
    'The search parameter tests whether the value in a resource subsumes the specified value (is-a, or hierarchical relationships).',
  );
  public static readonly TYPE = new FhirCodeDefinition(
    'TYPE',
    'type',
    'http://hl7.org/fhir/search-modifier-code',
    'Type',
    'The search parameter only applies to the Resource Type specified as a modifier (e.g. the modifier is not actually :type, but :Patient etc.).',
  );
  public static readonly IDENTIFIER = new FhirCodeDefinition(
    'IDENTIFIER',
    'identifier',
    'http://hl7.org/fhir/search-modifier-code',
    'Identifier',
    'The search parameter applies to the identifier on the resource, not the reference.',
  );
  public static readonly OF_TYPE = new FhirCodeDefinition(
    'OF_TYPE',
    'ofType',
    'http://hl7.org/fhir/search-modifier-code',
    'Of Type',
    'The search parameter has the format system|code|value, where the system and code refer to an Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      SearchModifierCodeEnum.MISSING,
      SearchModifierCodeEnum.EXACT,
      SearchModifierCodeEnum.CONTAINS,
      SearchModifierCodeEnum.NOT,
      SearchModifierCodeEnum.TEXT,
      SearchModifierCodeEnum.IN,
      SearchModifierCodeEnum.NOT_IN,
      SearchModifierCodeEnum.BELOW,
      SearchModifierCodeEnum.ABOVE,
      SearchModifierCodeEnum.TYPE,
      SearchModifierCodeEnum.IDENTIFIER,
      SearchModifierCodeEnum.OF_TYPE,
      SearchModifierCodeEnum.NULL
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
    } else if (SearchModifierCodeEnum.MISSING.code === code) {
      return SearchModifierCodeEnum.MISSING;
    } else if (SearchModifierCodeEnum.EXACT.code === code) {
      return SearchModifierCodeEnum.EXACT;
    } else if (SearchModifierCodeEnum.CONTAINS.code === code) {
      return SearchModifierCodeEnum.CONTAINS;
    } else if (SearchModifierCodeEnum.NOT.code === code) {
      return SearchModifierCodeEnum.NOT;
    } else if (SearchModifierCodeEnum.TEXT.code === code) {
      return SearchModifierCodeEnum.TEXT;
    } else if (SearchModifierCodeEnum.IN.code === code) {
      return SearchModifierCodeEnum.IN;
    } else if (SearchModifierCodeEnum.NOT_IN.code === code) {
      return SearchModifierCodeEnum.NOT_IN;
    } else if (SearchModifierCodeEnum.BELOW.code === code) {
      return SearchModifierCodeEnum.BELOW;
    } else if (SearchModifierCodeEnum.ABOVE.code === code) {
      return SearchModifierCodeEnum.ABOVE;
    } else if (SearchModifierCodeEnum.TYPE.code === code) {
      return SearchModifierCodeEnum.TYPE;
    } else if (SearchModifierCodeEnum.IDENTIFIER.code === code) {
      return SearchModifierCodeEnum.IDENTIFIER;
    } else if (SearchModifierCodeEnum.OF_TYPE.code === code) {
      return SearchModifierCodeEnum.OF_TYPE;
    } else if (SearchModifierCodeEnum.NULL.code === code) {
      return SearchModifierCodeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown SearchModifierCodeEnum 'code' value '${code}'`);
    }
  }
}
