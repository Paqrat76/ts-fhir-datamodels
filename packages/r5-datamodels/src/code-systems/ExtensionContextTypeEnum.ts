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
 * ExtensionContextTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/extension-context-type
 * CodeSystem.name: ExtensionContextType
 * CodeSystem.description: How an extension context is interpreted.
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
 * FHIR CodeSystem: ExtensionContextTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ExtensionContextType](http://hl7.org/fhir/extension-context-type)
 */
export class ExtensionContextTypeEnum implements IFhirCodeEnum {
  public static readonly FHIRPATH = new FhirCodeDefinition(
    'FHIRPATH',
    'fhirpath',
    'http://hl7.org/fhir/extension-context-type',
    'FHIRPath',
    'The context is all elements that match the FHIRPath query found in the expression.',
  );
  public static readonly ELEMENT = new FhirCodeDefinition(
    'ELEMENT',
    'element',
    'http://hl7.org/fhir/extension-context-type',
    'Element ID',
    'The context is any element that has an ElementDefinition.id that matches that found in the expression. This includes ElementDefinition Ids that have slicing identifiers. The full path for the element is [url]#[elementid]. If there is no #, the Element id is one defined in the base specification.',
  );
  public static readonly EXTENSION = new FhirCodeDefinition(
    'EXTENSION',
    'extension',
    'http://hl7.org/fhir/extension-context-type',
    'Extension URL',
    'The context is a particular extension from a particular StructureDefinition, and the expression is just a uri that identifies the extension.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ExtensionContextTypeEnum.FHIRPATH,
      ExtensionContextTypeEnum.ELEMENT,
      ExtensionContextTypeEnum.EXTENSION,
      ExtensionContextTypeEnum.NULL
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
    } else if (ExtensionContextTypeEnum.FHIRPATH.code === code) {
      return ExtensionContextTypeEnum.FHIRPATH;
    } else if (ExtensionContextTypeEnum.ELEMENT.code === code) {
      return ExtensionContextTypeEnum.ELEMENT;
    } else if (ExtensionContextTypeEnum.EXTENSION.code === code) {
      return ExtensionContextTypeEnum.EXTENSION;
    } else if (ExtensionContextTypeEnum.NULL.code === code) {
      return ExtensionContextTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ExtensionContextTypeEnum 'code' value '${code}'`);
    }
  }
}
