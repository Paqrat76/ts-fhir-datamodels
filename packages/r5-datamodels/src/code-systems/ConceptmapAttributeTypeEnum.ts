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
 * ConceptmapAttributeTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/conceptmap-attribute-type
 * CodeSystem.name: ConceptmapAttributeType
 * CodeSystem.description: The type of a ConceptMap map attribute value.
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
 * FHIR CodeSystem: ConceptmapAttributeTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ConceptmapAttributeType](http://hl7.org/fhir/conceptmap-attribute-type)
 */
export class ConceptmapAttributeTypeEnum implements IFhirCodeEnum {
  public static readonly CODE = new FhirCodeDefinition(
    'CODE',
    'code',
    'http://hl7.org/fhir/conceptmap-attribute-type',
    'code',
    'The attribute value is a code defined in the code system in context.',
  );
  public static readonly CODING = new FhirCodeDefinition(
    'CODING',
    'Coding',
    'http://hl7.org/fhir/conceptmap-attribute-type',
    'Coding',
    'The attribute value is a code defined in a code system.',
  );
  public static readonly STRING = new FhirCodeDefinition(
    'STRING',
    'string',
    'http://hl7.org/fhir/conceptmap-attribute-type',
    'string',
    'The attribute value is a string.',
  );
  public static readonly BOOLEAN = new FhirCodeDefinition(
    'BOOLEAN',
    'boolean',
    'http://hl7.org/fhir/conceptmap-attribute-type',
    'boolean',
    'The attribute value is a boolean true | false.',
  );
  public static readonly QUANTITY = new FhirCodeDefinition(
    'QUANTITY',
    'Quantity',
    'http://hl7.org/fhir/conceptmap-attribute-type',
    'Quantity',
    'The attribute is a Quantity (may represent an integer or a decimal with no units).',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ConceptmapAttributeTypeEnum.CODE,
      ConceptmapAttributeTypeEnum.CODING,
      ConceptmapAttributeTypeEnum.STRING,
      ConceptmapAttributeTypeEnum.BOOLEAN,
      ConceptmapAttributeTypeEnum.QUANTITY,
      ConceptmapAttributeTypeEnum.NULL
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
    } else if (ConceptmapAttributeTypeEnum.CODE.code === code) {
      return ConceptmapAttributeTypeEnum.CODE;
    } else if (ConceptmapAttributeTypeEnum.CODING.code === code) {
      return ConceptmapAttributeTypeEnum.CODING;
    } else if (ConceptmapAttributeTypeEnum.STRING.code === code) {
      return ConceptmapAttributeTypeEnum.STRING;
    } else if (ConceptmapAttributeTypeEnum.BOOLEAN.code === code) {
      return ConceptmapAttributeTypeEnum.BOOLEAN;
    } else if (ConceptmapAttributeTypeEnum.QUANTITY.code === code) {
      return ConceptmapAttributeTypeEnum.QUANTITY;
    } else if (ConceptmapAttributeTypeEnum.NULL.code === code) {
      return ConceptmapAttributeTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ConceptmapAttributeTypeEnum 'code' value '${code}'`);
    }
  }
}
