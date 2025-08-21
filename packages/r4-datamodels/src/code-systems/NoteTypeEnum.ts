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
 * NoteTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/note-type
 * CodeSystem.name: NoteType
 * CodeSystem.description: The presentation types of notes.
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
 * FHIR CodeSystem: NoteTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem NoteType](http://hl7.org/fhir/note-type)
 */
export class NoteTypeEnum implements IFhirCodeEnum {
  public static readonly DISPLAY = new FhirCodeDefinition(
    'DISPLAY',
    'display',
    'http://hl7.org/fhir/note-type',
    'Display',
    'Display the note.',
  );
  public static readonly PRINT = new FhirCodeDefinition(
    'PRINT',
    'print',
    'http://hl7.org/fhir/note-type',
    'Print (Form)',
    'Print the note on the form.',
  );
  public static readonly PRINTOPER = new FhirCodeDefinition(
    'PRINTOPER',
    'printoper',
    'http://hl7.org/fhir/note-type',
    'Print (Operator)',
    'Print the note for the operator.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      NoteTypeEnum.DISPLAY,
      NoteTypeEnum.PRINT,
      NoteTypeEnum.PRINTOPER,
      NoteTypeEnum.NULL
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
    } else if (NoteTypeEnum.DISPLAY.code === code) {
      return NoteTypeEnum.DISPLAY;
    } else if (NoteTypeEnum.PRINT.code === code) {
      return NoteTypeEnum.PRINT;
    } else if (NoteTypeEnum.PRINTOPER.code === code) {
      return NoteTypeEnum.PRINTOPER;
    } else if (NoteTypeEnum.NULL.code === code) {
      return NoteTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown NoteTypeEnum 'code' value '${code}'`);
    }
  }
}
