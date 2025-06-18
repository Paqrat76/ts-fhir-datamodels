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
import { FhirDataType } from './fhir-data-type';

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
  // ESLint: no-irregular-whitespace (https://eslint.org/docs/latest/rules/no-irregular-whitespace)
  NBSP: { unicodeRegex: /\u00A0/g, replacement: ` ` },
  OGSP: { unicodeRegex: /\u1680/g, replacement: ` ` },
  MVS: { unicodeRegex: /\u180E/g, replacement: ` ` },
  BOM: { unicodeRegex: /\ufeff/g, replacement: ` ` },
  NQSP: { unicodeRegex: /\u2000/g, replacement: ` ` },
  MQSP: { unicodeRegex: /\u2001/g, replacement: ` ` },
  ENSP: { unicodeRegex: /\u2002/g, replacement: ` ` },
  EMSP: { unicodeRegex: /\u2003/g, replacement: ` ` },
  FSP: { unicodeRegex: /\u2007/g, replacement: ` ` },
  PUNCSP: { unicodeRegex: /\u2008/g, replacement: ` ` },
  THSP: { unicodeRegex: /\u2009/g, replacement: ` ` },
  HSP: { unicodeRegex: /\u200A/g, replacement: ` ` },
  ZWSP: { unicodeRegex: /\u200B/g, replacement: ` ` },
  LSEP: { unicodeRegex: /\u2028/g, replacement: ` ` },
  PSEP: { unicodeRegex: /\u2029/g, replacement: ` ` },
  NNBSP: { unicodeRegex: /\u202F/g, replacement: ` ` },
  MMSP: { unicodeRegex: /\u205f/g, replacement: ` ` },
  IDSP: { unicodeRegex: /\u3000/g, replacement: ` ` },
};

/**
 * A constant array containing all reserved keywords in TypeScript.
 *
 * @remarks
 * These keywords have a predefined meaning in TypeScript and cannot be used as identifiers such as variable names, function names, or any other custom identifiers.
 * Attempting to use these words as identifiers will result in a syntax error.
 *
 * The list includes:
 * - Control flow keywords (e.g., `if`, `else`, `while`, `for`, `break`, `continue`, `switch`, `case`, `throw`, `try`, `catch`, `finally`)
 * - Variable declarations and type-related keywords (e.g., `let`, `const`, `var`, `type`, `interface`, `enum`, `class`, `implements`, `extends`)
 * - Function-related keywords (e.g., `function`, `return`, `async`, `await`)
 * - Visibility and property modifiers (e.g., `private`, `protected`, `public`, `readonly`, `static`, `declare`, `override`)
 * - Operators and expressions (e.g., `instanceof`, `typeof`, `keyof`, `new`, `delete`, `yield`, `in`, `as`, `is`, `infer`, `unique`, `from`)
 * - Values (e.g., `true`, `false`, `null`, `undefined`, `void`, `never`, `unknown`)
 * - Modules and import/export statements (e.g., `module`, `namespace`, `import`, `export`, `require`, `default`, `of`, `get`, `set`)
 * - Other reserved words (e.g., `asserts`, `abstract`, `debugger`, `with`, `super`, `this`, `package`)
 *
 * This array is declared as a constant (`as const`), meaning its content is treated as a read-only tuple of string literals.
 *
 * @privateRemarks
 * This list was constructed by WebStorm AI Assistant
 * AI Assistant message: "list of quoted typescript reserved keywords separated by commas"
 */
const TS_RESERVED_WORDS = [
  'abstract',
  'as',
  'asserts',
  'async',
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'declare',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'from',
  'function',
  'get',
  'if',
  'implements',
  'import',
  'in',
  'infer',
  'instanceof',
  'interface',
  'is',
  'keyof',
  'let',
  'module',
  'namespace',
  'never',
  'new',
  'null',
  'of',
  'override',
  'package',
  'private',
  'protected',
  'public',
  'readonly',
  'require',
  'return',
  'set',
  'static',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'type',
  'typeof',
  'undefined',
  'unique',
  'unknown',
  'var',
  'void',
  'while',
  'with',
  'yield',
] as const;

/**
 * A Set that contains all TypeScript reserved words.
 *
 * This variable holds a collection of reserved keywords in TypeScript,
 * which typically cannot be used as identifiers such as variable names,
 * function names, etc.
 *
 * This data is commonly used to validate or restrict the usage of
 * certain words in TypeScript code to ensure compatibility and prevent
 * conflicts with the language's syntax and reserved identifiers.
 *
 * @type {ReadonlySet<string>}
 */
export const TS_RESERVED_WORDS_SET: ReadonlySet<string> = new Set<string>(TS_RESERVED_WORDS);

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
 * Corrects FHIR hyperlinks in the given string by replacing local HTML paths
 * with absolute URLs pointing to the HL7 FHIR documentation.
 *
 * @example
 * ```ts
 * const sourceLink = '[Duration](datatypes.html#Duration)';
 * const fixedLink = fixFhirHyperLinks(sourceLink);
 * // fixedLink: '[Duration](https://hl7.org/fhir/datatypes.html#Duration)'
 * ```
 *
 * @param {string} str - The input string containing the hyperlinks to be fixed.
 * @returns {string} The updated string with fixed FHIR hyperlinks.
 */
export function fixFhirHyperLinks(str: string): string {
  // NOTE: Typedocs will issue a `[warning]` for hyperlink strings containing invalid content.
  //       If this occurs, we might need to update the allowable characters (`[...]`) below to include new characters
  const regex = /([-A-Za-z0-9]+\.html[-#A-Za-z0-9.]*\))/gi;
  return str.replace(regex, `https://hl7.org/fhir/$1`);
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

/**
 * Checks if the given FhirDataType is a primitive type based on its naming convention.
 * A type is considered primitive if it starts with a lowercase letter.
 *
 * @param {FhirDataType} type - The name of the FhirDataType to check.
 * @returns {boolean} Returns true if the FhirDataType is a primitive type, otherwise false.
 */
export function isPrimitiveDataType(type: FhirDataType): boolean {
  return /^[a-z].*$/.test(type);
}

/**
 * Determines the primitive JSON type corresponding to a given FHIR data type.
 *
 * @param {FhirDataType} type - The FHIR data type to be mapped to a JSON primitive type.
 * @returns {'boolean' | 'number' | 'string' | undefined} The JSON primitive type ('boolean', 'number', or 'string') that corresponds to the given FHIR data type, or undefined if no match is found.
 */
export function getPrimitiveJsonType(type: FhirDataType): 'boolean' | 'number' | 'string' | undefined {
  let primitiveJsonType: 'boolean' | 'number' | 'string' | undefined = undefined;
  if (type === 'boolean') {
    primitiveJsonType = 'boolean';
  } else if (
    type === 'decimal' ||
    type === 'integer' ||
    type === 'integer64' ||
    type === 'positiveInt' ||
    type === 'unsignedInt'
  ) {
    primitiveJsonType = 'number';
  } else if (isPrimitiveDataType(type)) {
    primitiveJsonType = 'string';
  }
  return primitiveJsonType;
}
