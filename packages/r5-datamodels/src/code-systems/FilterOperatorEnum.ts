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
 * FilterOperatorEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/filter-operator
 * CodeSystem.name: FilterOperator
 * CodeSystem.description: The kind of operation to perform as a part of a property based filter.
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
 * FHIR CodeSystem: FilterOperatorEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem FilterOperator](http://hl7.org/fhir/filter-operator)
 */
export class FilterOperatorEnum implements IFhirCodeEnum {
  public static readonly EQUAL_TO = new FhirCodeDefinition(
    'EQUAL_TO',
    '=',
    'http://hl7.org/fhir/filter-operator',
    'Equals',
    'The specified property of the code equals the provided value.',
  );
  public static readonly IS_A = new FhirCodeDefinition(
    'IS_A',
    'is-a',
    'http://hl7.org/fhir/filter-operator',
    'Is A (by subsumption)',
    'Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself (include descendant codes and self).',
  );
  public static readonly DESCENDENT_OF = new FhirCodeDefinition(
    'DESCENDENT_OF',
    'descendent-of',
    'http://hl7.org/fhir/filter-operator',
    'Descendent Of (by subsumption)',
    'Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, excluding the provided concept itself (i.e. include descendant codes only).',
  );
  public static readonly IS_NOT_A = new FhirCodeDefinition(
    'IS_NOT_A',
    'is-not-a',
    'http://hl7.org/fhir/filter-operator',
    'Not (Is A) (by subsumption)',
    'The specified property of the code does not have an is-a relationship with the provided value.',
  );
  public static readonly REGEX = new FhirCodeDefinition(
    'REGEX',
    'regex',
    'http://hl7.org/fhir/filter-operator',
    'Regular Expression',
    'The specified property of the code  matches the regex specified in the provided value.',
  );
  public static readonly IN = new FhirCodeDefinition(
    'IN',
    'in',
    'http://hl7.org/fhir/filter-operator',
    'In Set',
    'The specified property of the code is in the set of codes or concepts specified in the provided value (comma-separated list).',
  );
  public static readonly NOT_IN = new FhirCodeDefinition(
    'NOT_IN',
    'not-in',
    'http://hl7.org/fhir/filter-operator',
    'Not in Set',
    'The specified property of the code is not in the set of codes or concepts specified in the provided value (comma-separated list).',
  );
  public static readonly GENERALIZES = new FhirCodeDefinition(
    'GENERALIZES',
    'generalizes',
    'http://hl7.org/fhir/filter-operator',
    'Generalizes (by Subsumption)',
    'Includes all concept ids that have a transitive is-a relationship from the concept Id provided as the value, including the provided concept itself (i.e. include ancestor codes and self).',
  );
  public static readonly CHILD_OF = new FhirCodeDefinition(
    'CHILD_OF',
    'child-of',
    'http://hl7.org/fhir/filter-operator',
    'Child Of',
    'Only concepts with a direct hierarchical relationship to the index code and no other concepts. This does not include the index code in the output.',
  );
  public static readonly DESCENDENT_LEAF = new FhirCodeDefinition(
    'DESCENDENT_LEAF',
    'descendent-leaf',
    'http://hl7.org/fhir/filter-operator',
    'Descendent Leaf',
    'Includes concept ids that have a transitive is-a relationship with the concept Id provided as the value, but which do not have any concept ids with transitive is-a relationships with themselves.',
  );
  public static readonly EXISTS = new FhirCodeDefinition(
    'EXISTS',
    'exists',
    'http://hl7.org/fhir/filter-operator',
    'Exists',
    'The specified property of the code has at least one value (if the specified value is true; if the specified value is false, then matches when the specified property of the code has no values).',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      FilterOperatorEnum.EQUAL_TO,
      FilterOperatorEnum.IS_A,
      FilterOperatorEnum.DESCENDENT_OF,
      FilterOperatorEnum.IS_NOT_A,
      FilterOperatorEnum.REGEX,
      FilterOperatorEnum.IN,
      FilterOperatorEnum.NOT_IN,
      FilterOperatorEnum.GENERALIZES,
      FilterOperatorEnum.CHILD_OF,
      FilterOperatorEnum.DESCENDENT_LEAF,
      FilterOperatorEnum.EXISTS,
      FilterOperatorEnum.NULL
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
    } else if (FilterOperatorEnum.EQUAL_TO.code === code) {
      return FilterOperatorEnum.EQUAL_TO;
    } else if (FilterOperatorEnum.IS_A.code === code) {
      return FilterOperatorEnum.IS_A;
    } else if (FilterOperatorEnum.DESCENDENT_OF.code === code) {
      return FilterOperatorEnum.DESCENDENT_OF;
    } else if (FilterOperatorEnum.IS_NOT_A.code === code) {
      return FilterOperatorEnum.IS_NOT_A;
    } else if (FilterOperatorEnum.REGEX.code === code) {
      return FilterOperatorEnum.REGEX;
    } else if (FilterOperatorEnum.IN.code === code) {
      return FilterOperatorEnum.IN;
    } else if (FilterOperatorEnum.NOT_IN.code === code) {
      return FilterOperatorEnum.NOT_IN;
    } else if (FilterOperatorEnum.GENERALIZES.code === code) {
      return FilterOperatorEnum.GENERALIZES;
    } else if (FilterOperatorEnum.CHILD_OF.code === code) {
      return FilterOperatorEnum.CHILD_OF;
    } else if (FilterOperatorEnum.DESCENDENT_LEAF.code === code) {
      return FilterOperatorEnum.DESCENDENT_LEAF;
    } else if (FilterOperatorEnum.EXISTS.code === code) {
      return FilterOperatorEnum.EXISTS;
    } else if (FilterOperatorEnum.NULL.code === code) {
      return FilterOperatorEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown FilterOperatorEnum 'code' value '${code}'`);
    }
  }
}
