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
 * DocumentReferenceStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/document-reference-status
 * CodeSystem.name: DocumentReferenceStatus
 * CodeSystem.description: The status of the document reference.
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
 * FHIR CodeSystem: DocumentReferenceStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem DocumentReferenceStatus](http://hl7.org/fhir/document-reference-status)
 */
export class DocumentReferenceStatusEnum implements IFhirCodeEnum {
  public static readonly CURRENT = new FhirCodeDefinition(
    'CURRENT',
    'current',
    'http://hl7.org/fhir/document-reference-status',
    'Current',
    'This is the current reference for this document.',
  );
  public static readonly SUPERSEDED = new FhirCodeDefinition(
    'SUPERSEDED',
    'superseded',
    'http://hl7.org/fhir/document-reference-status',
    'Superseded',
    'This reference has been superseded by another reference.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/document-reference-status',
    'Entered in Error',
    'This reference was created in error.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      DocumentReferenceStatusEnum.CURRENT,
      DocumentReferenceStatusEnum.SUPERSEDED,
      DocumentReferenceStatusEnum.ENTERED_IN_ERROR,
      DocumentReferenceStatusEnum.NULL
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
    } else if (DocumentReferenceStatusEnum.CURRENT.code === code) {
      return DocumentReferenceStatusEnum.CURRENT;
    } else if (DocumentReferenceStatusEnum.SUPERSEDED.code === code) {
      return DocumentReferenceStatusEnum.SUPERSEDED;
    } else if (DocumentReferenceStatusEnum.ENTERED_IN_ERROR.code === code) {
      return DocumentReferenceStatusEnum.ENTERED_IN_ERROR;
    } else if (DocumentReferenceStatusEnum.NULL.code === code) {
      return DocumentReferenceStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown DocumentReferenceStatusEnum 'code' value '${code}'`);
    }
  }
}
