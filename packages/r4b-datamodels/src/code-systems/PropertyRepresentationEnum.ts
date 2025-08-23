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
 * PropertyRepresentationEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/property-representation
 * CodeSystem.name: PropertyRepresentation
 * CodeSystem.description: How a property is represented when serialized.
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
 * FHIR CodeSystem: PropertyRepresentationEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem PropertyRepresentation](http://hl7.org/fhir/property-representation)
 */
export class PropertyRepresentationEnum implements IFhirCodeEnum {
  public static readonly XML_ATTR = new FhirCodeDefinition(
    'XML_ATTR',
    'xmlAttr',
    'http://hl7.org/fhir/property-representation',
    'XML Attribute',
    'In XML, this property is represented as an attribute not an element.',
  );
  public static readonly XML_TEXT = new FhirCodeDefinition(
    'XML_TEXT',
    'xmlText',
    'http://hl7.org/fhir/property-representation',
    'XML Text',
    'This element is represented using the XML text attribute (primitives only).',
  );
  public static readonly TYPE_ATTR = new FhirCodeDefinition(
    'TYPE_ATTR',
    'typeAttr',
    'http://hl7.org/fhir/property-representation',
    'Type Attribute',
    'The type of this element is indicated using xsi:type.',
  );
  public static readonly CDA_TEXT = new FhirCodeDefinition(
    'CDA_TEXT',
    'cdaText',
    'http://hl7.org/fhir/property-representation',
    'CDA Text Format',
    'Use CDA narrative instead of XHTML.',
  );
  public static readonly XHTML = new FhirCodeDefinition(
    'XHTML',
    'xhtml',
    'http://hl7.org/fhir/property-representation',
    'XHTML',
    'The property is represented using XHTML.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      PropertyRepresentationEnum.XML_ATTR,
      PropertyRepresentationEnum.XML_TEXT,
      PropertyRepresentationEnum.TYPE_ATTR,
      PropertyRepresentationEnum.CDA_TEXT,
      PropertyRepresentationEnum.XHTML,
      PropertyRepresentationEnum.NULL
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
    } else if (PropertyRepresentationEnum.XML_ATTR.code === code) {
      return PropertyRepresentationEnum.XML_ATTR;
    } else if (PropertyRepresentationEnum.XML_TEXT.code === code) {
      return PropertyRepresentationEnum.XML_TEXT;
    } else if (PropertyRepresentationEnum.TYPE_ATTR.code === code) {
      return PropertyRepresentationEnum.TYPE_ATTR;
    } else if (PropertyRepresentationEnum.CDA_TEXT.code === code) {
      return PropertyRepresentationEnum.CDA_TEXT;
    } else if (PropertyRepresentationEnum.XHTML.code === code) {
      return PropertyRepresentationEnum.XHTML;
    } else if (PropertyRepresentationEnum.NULL.code === code) {
      return PropertyRepresentationEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown PropertyRepresentationEnum 'code' value '${code}'`);
    }
  }
}
