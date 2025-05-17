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

import { strict as assert } from 'node:assert';
import { camelCase, snakeCase, upperFirst } from 'lodash';
import { DATA_TYPES as CORE_DATA_TYPES } from '@paq-ts-fhir/fhir-core';

/**
 * FHIR data types
 *
 * @remarks
 * All defined FHIR data types for complex and primitive data types.
 *
 * @privateRemarks
 * 'Element' is included to support the `DataRequirement` complex type.
 * 'Extension' is included to support the `BackboneType`.
 *
 * @category Base Models
 * @see [DataTypes](https://hl7.org/fhir/R5/datatypes.html)
 */
export const DATA_TYPES = [...CORE_DATA_TYPES, 'Element', 'Extension'] as const;

/**
 * FhirDataType
 *
 * @remarks
 * Type definition based on DATA_TYPES array.
 *
 * @category Base Models
 */
export type FhirDataType = (typeof DATA_TYPES)[number];

/**
 * A constant that holds the mappings of FHIR data types.
 * This object maps specific FHIR data type names to their corresponding FHIR data type representations.
 *
 * @category Base Models
 */
export const DATA_TYPE_MAPPINGS: Map<FhirDataType, string> = getDataTypeMappings();

/**
 * Generates a mapping of data type names where the key is the original data type
 * and the value is a formatted version of the data type string.
 *
 * @returns {Map<FhirDataType, string>} A map where each key is a data type and the value
 * is its corresponding transformed representation.
 */
function getDataTypeMappings(): Map<FhirDataType, string> {
  const map = new Map<FhirDataType, string>();
  DATA_TYPES.forEach((dt: FhirDataType): void => {
    const value = isPrimitiveType(dt) ? `${upperFirst(dt)}Type` : dt;
    map.set(dt, value);
  });
  return map;
}

/**
 * Checks if the given FhirDataType is a primitive type based on its naming convention.
 * A type is considered primitive if it starts with a lowercase letter.
 *
 * @param {FhirDataType} type - The name of the FhirDataType to check.
 * @returns {boolean} Returns true if the FhirDataType is a primitive type, otherwise false.
 */
export function isPrimitiveType(type: FhirDataType): boolean {
  return /^[a-z].*$/.test(type);
}

/**
 * UnicodeSubstitutions is a collection of objects that map specific Unicode characters
 * to their corresponding regex patterns and replacement values. This object can be used
 * to replace or normalize Unicode characters with standardized equivalents in strings.
 *
 * @remarks
 * Some of these punctuation Unicode characters exist in various FHIR definition
 * strings (e.g., descriptions, comments, etc.) and so must be replaced with
 * appropriate ASCII substitutions to prevent various rendering issues in generated
 * code.
 *
 * Each property is a constant variable name representing a specific Unicode character,
 * containing the following keys:
 * - `unicodeRegex`: A regular expression matching the Unicode character(s) to be replaced.
 * - `replacement`: The string value to substitute for the matched Unicode character(s).
 *
 * Example use cases include text normalization, sanitization of strings, and ensuring
 * consistent representation of typographical or special characters.
 */
const UnicodeSubstitutions = {
  HYPHEN: { unicodeRegex: /\u2010/g, replacement: `-` },
  NON_BREAKING_HYPHEN: { unicodeRegex: /\u2011/g, replacement: `-` },
  FIGURE_DASH: { unicodeRegex: /\u2012/g, replacement: `-` },
  EN_DASH: { unicodeRegex: /\u2013/g, replacement: `-` },
  EM_DASH: { unicodeRegex: /\u2014/g, replacement: `-` },
  HORIZONTAL_BAR: { unicodeRegex: /\u2015/g, replacement: `-` },
  DOUBLE_VERTICAL_LINE: { unicodeRegex: /\u2016/g, replacement: `||` },
  LEFT_SINGLE_QUOTATION_MARK: { unicodeRegex: /\u2018/g, replacement: `'` },
  RIGHT_SINGLE_QUOTATION_MARK: { unicodeRegex: /\u2019/g, replacement: `'` },
  SINGLE_HIGH_REVERSED9_QUOTATION_MARK: { unicodeRegex: /\u201A/g, replacement: `'` },
  LEFT_DOUBLE_QUOTATION_MARK: { unicodeRegex: /\u201C/g, replacement: `"` },
  RIGHT_DOUBLE_QUOTATION_MARK: { unicodeRegex: /\u201D/g, replacement: `"` },
  DOUBLE_HIGH_REVERSED9_QUOTATION_MARK: { unicodeRegex: /\u201F/g, replacement: `"` },
  BULLET: { unicodeRegex: /\u2022/g, replacement: `*` },
  TRIANGULAR_BULLET: { unicodeRegex: /\u2013/g, replacement: `*` },
  HYPHEN_BULLET: { unicodeRegex: /\u2043/g, replacement: `-` },
  ONE_DOT_LEADER: { unicodeRegex: /\u2024/g, replacement: `.` },
  TWO_DOT_LEADER: { unicodeRegex: /\u2025/g, replacement: `..` },
  HORIZONTAL_ELLIPSIS: { unicodeRegex: /\u2026/g, replacement: `...` },
  PRIME: { unicodeRegex: /\u2032/g, replacement: `'` },
  DOUBLE_PRIME: { unicodeRegex: /\u2033/g, replacement: `''` },
  TRIPLE_PRIME: { unicodeRegex: /\u2034/g, replacement: `'''` },
  QUADRUPLE_PRIME: { unicodeRegex: /\u2057/g, replacement: `''''` },
  REVERSED_PRIME: { unicodeRegex: /\u2035/g, replacement: `'` },
  REVERSED_DOUBLE_PRIME: { unicodeRegex: /\u2036/g, replacement: `''` },
  REVERSED_TRIPLE_PRIME: { unicodeRegex: /\u2037/g, replacement: `'''` },
  DOUBLE_EXCLAMATION_MARK: { unicodeRegex: /\u203C/g, replacement: `!!` },
  INTERROBANG: { unicodeRegex: /\u203D/g, replacement: `?` },
  DOUBLE_QUESTION_MARK: { unicodeRegex: /\u2047/g, replacement: `??` },
  EXCLAMATION_QUESTION_MARK: { unicodeRegex: /\u2048/g, replacement: `!?` },
  LOW_ASTERISK: { unicodeRegex: /\u204E/g, replacement: `*` },
  REVERSED_SEMICOLON: { unicodeRegex: /\u204F/g, replacement: `;` },
  SWUNG_DASH: { unicodeRegex: /\u2053/g, replacement: `-` },
  FLOWER_PUNCTUATION_MARK: { unicodeRegex: /\u2055/g, replacement: `*` },
  COPYRIGHT_SIGN: { unicodeRegex: /\u00A9/g, replacement: `(C)` },
  REGISTERED_SIGN: { unicodeRegex: /\u00AE/g, replacement: `(R)` },
  TRADEMARK_SIGN: { unicodeRegex: /\u2122/g, replacement: `(TM)` },
  COMPARATOR_LESS_THAN: { unicodeRegex: /\u003C/g, replacement: `<` },
  COMPARATOR_EQUAL_TO: { unicodeRegex: /\u003D/g, replacement: `=` },
  COMPARATOR_GREATER_THAN: { unicodeRegex: /\u003E/g, replacement: `>` },
  COMPARATOR_GREATER_THAN_OR_EQUAL_TO: { unicodeRegex: /\u003E=/g, replacement: `>=` },
  COMPARATOR_LESS_THAN_OR_EQUAL_TO: { unicodeRegex: /\u003C=/g, replacement: `<=` },
  COMPARATOR_NOT_EQUAL_TO: { unicodeRegex: /\u003D\u003D/g, replacement: `!=` },
  COMPARATOR_NOT_EQUAL_TO_OR_GREATER_THAN: { unicodeRegex: /\u003E\u003D/g, replacement: `>=` },
  COMPARATOR_NOT_EQUAL_TO_OR_LESS_THAN: { unicodeRegex: /\u003C\u003D/g, replacement: `<=` },
};

/**
 * Logs a formatted message with a specified log level for generators.
 *
 * @param {string} level - The severity level of the log (e.g., "info", "warn", "error").
 * @param {string} message - The message to log.
 * @returns {void} This function does not return a value.
 */
export function generatorLogger(level: string, message: string): void {
  console.log(`Generator ${level.toUpperCase()}: ${message}`);
}

/**
 * Replaces all Unicode characters in the provided string with their defined substitutions.
 * Required to prevent various rendering issues in generated code by substituting
 * selected Unicode characters with appropriate ASCII characters.
 *
 * This function processes the input string by iterating through all substitution
 * patterns defined in the `UnicodeSubstitutions` object. For each substitution pattern,
 * it replaces occurrences of Unicode characters matching a specific regex with their
 * corresponding replacement string. The resulting string is then returned.
 *
 * @param {string} source - The input string containing Unicode characters to be replaced.
 * @returns {string} The processed string with all applicable substitutions applied.
 */
export function substituteUnicodeCharacters(source: string): string {
  let returnString = source;
  Object.values(UnicodeSubstitutions).forEach((substitution) => {
    returnString = returnString.replace(substitution.unicodeRegex, substitution.replacement);
  });
  return returnString;
}

/**
 * Converts a given string to PascalCase format.
 *
 * @param {string} name - The input string to be converted to PascalCase.
 * @returns {string} The string converted to PascalCase format.
 */
export function makePascalCase(name: string): string {
  return upperFirst(camelCase(name));
}

/**
 * Converts a given string to upper snake case format.
 *
 * @param {string} name - The input string to be converted.
 * @returns {string} The converted string in upper snake case format.
 */
export function makeUpperSnakeCase(name: string): string {
  return snakeCase(name).toUpperCase();
}

/**
 * Removes all line breaks (carriage return and newline characters) from the input string
 * and replaces them with a single space. If the input is null or undefined, it returns an empty string.
 *
 * @param {string | undefined | null} str - The input string from which line breaks are to be removed.
 * @returns {string} A new string with all line breaks replaced by a single space, or an empty string if the input is null or undefined.
 */
export function stripLineBreaks(str: string | undefined | null): string {
  const tempValue = str ?? '';
  const regex = /[\r\n]+/g;
  return tempValue.replace(regex, ' ');
}

/**
 * Extracts and returns the name from the given URL string.
 * The name is typically derived from the last segment of the URL path.
 *
 * @param {string} url - The URL from which the name is extracted. It must be a valid string containing path segments.
 * @returns {string} Returns the extracted name in PascalCase format.
 */
export function extractNameFromUrl(url: string): string {
  assert(url, `Invalid url (${url})`);
  const urlParts = url.split('/');
  assert(urlParts.length > 1, `Invalid url (${url})`);

  const urlName = urlParts[urlParts.length - 1];
  assert(urlName, `Invalid url (${url})`);

  return makePascalCase(urlName);
}
