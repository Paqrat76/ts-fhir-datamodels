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
 * MapTransformEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/map-transform
 * CodeSystem.name: MapTransform
 * CodeSystem.description: How data is copied/created.
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
 * FHIR CodeSystem: MapTransformEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MapTransform](http://hl7.org/fhir/map-transform)
 */
export class MapTransformEnum implements IFhirCodeEnum {
  public static readonly CREATE = new FhirCodeDefinition(
    'CREATE',
    'create',
    'http://hl7.org/fhir/map-transform',
    'create',
    'create(type : string) - type is passed through to the application on the standard API, and must be known by it.',
  );
  public static readonly COPY = new FhirCodeDefinition(
    'COPY',
    'copy',
    'http://hl7.org/fhir/map-transform',
    'copy',
    'copy(source).',
  );
  public static readonly TRUNCATE = new FhirCodeDefinition(
    'TRUNCATE',
    'truncate',
    'http://hl7.org/fhir/map-transform',
    'truncate',
    'truncate(source, length) - source must be stringy type.',
  );
  public static readonly ESCAPE = new FhirCodeDefinition(
    'ESCAPE',
    'escape',
    'http://hl7.org/fhir/map-transform',
    'escape',
    'escape(source, fmt1, fmt2) - change source from one kind of escaping to another (plain, java, xml, json). note that this is for when the string itself is escaped.',
  );
  public static readonly CAST = new FhirCodeDefinition(
    'CAST',
    'cast',
    'http://hl7.org/fhir/map-transform',
    'cast',
    'cast(source, type?) - case source from one type to another. target type can be left as implicit if there is one and only one target type known.',
  );
  public static readonly APPEND = new FhirCodeDefinition(
    'APPEND',
    'append',
    'http://hl7.org/fhir/map-transform',
    'append',
    'append(source...) - source is element or string.',
  );
  public static readonly TRANSLATE = new FhirCodeDefinition(
    'TRANSLATE',
    'translate',
    'http://hl7.org/fhir/map-transform',
    'translate',
    'translate(source, uri_of_map) - use the translate operation.',
  );
  public static readonly REFERENCE = new FhirCodeDefinition(
    'REFERENCE',
    'reference',
    'http://hl7.org/fhir/map-transform',
    'reference',
    'reference(source : object) - return a string that references the provided tree properly.',
  );
  public static readonly DATE_OP = new FhirCodeDefinition(
    'DATE_OP',
    'dateOp',
    'http://hl7.org/fhir/map-transform',
    'dateOp',
    'Perform a date operation. *Parameters to be documented*.',
  );
  public static readonly UUID = new FhirCodeDefinition(
    'UUID',
    'uuid',
    'http://hl7.org/fhir/map-transform',
    'uuid',
    'Generate a random UUID (in lowercase). No Parameters.',
  );
  public static readonly POINTER = new FhirCodeDefinition(
    'POINTER',
    'pointer',
    'http://hl7.org/fhir/map-transform',
    'pointer',
    'Return the appropriate string to put in a reference that refers to the resource provided as a parameter.',
  );
  public static readonly EVALUATE = new FhirCodeDefinition(
    'EVALUATE',
    'evaluate',
    'http://hl7.org/fhir/map-transform',
    'evaluate',
    'Execute the supplied FHIRPath expression and use the value returned by that.',
  );
  public static readonly CC = new FhirCodeDefinition(
    'CC',
    'cc',
    'http://hl7.org/fhir/map-transform',
    'cc',
    'Create a CodeableConcept. Parameters = (text) or (system. Code[, display]).',
  );
  public static readonly C = new FhirCodeDefinition(
    'C',
    'c',
    'http://hl7.org/fhir/map-transform',
    'c',
    'Create a Coding. Parameters = (system. Code[, display]).',
  );
  public static readonly QTY = new FhirCodeDefinition(
    'QTY',
    'qty',
    'http://hl7.org/fhir/map-transform',
    'qty',
    'Create a quantity. Parameters = (text) or (value, unit, [system, code]) where text is the natural representation e.g. [comparator]value[space]unit.',
  );
  public static readonly ID = new FhirCodeDefinition(
    'ID',
    'id',
    'http://hl7.org/fhir/map-transform',
    'id',
    'Create an identifier. Parameters = (system, value[, type]) where type is a code from the identifier type value set.',
  );
  public static readonly CP = new FhirCodeDefinition(
    'CP',
    'cp',
    'http://hl7.org/fhir/map-transform',
    'cp',
    'Create a contact details. Parameters = (value) or (system, value). If no system is provided, the system should be inferred from the content of the value.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MapTransformEnum.CREATE,
      MapTransformEnum.COPY,
      MapTransformEnum.TRUNCATE,
      MapTransformEnum.ESCAPE,
      MapTransformEnum.CAST,
      MapTransformEnum.APPEND,
      MapTransformEnum.TRANSLATE,
      MapTransformEnum.REFERENCE,
      MapTransformEnum.DATE_OP,
      MapTransformEnum.UUID,
      MapTransformEnum.POINTER,
      MapTransformEnum.EVALUATE,
      MapTransformEnum.CC,
      MapTransformEnum.C,
      MapTransformEnum.QTY,
      MapTransformEnum.ID,
      MapTransformEnum.CP,
      MapTransformEnum.NULL
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
    } else if (MapTransformEnum.CREATE.code === code) {
      return MapTransformEnum.CREATE;
    } else if (MapTransformEnum.COPY.code === code) {
      return MapTransformEnum.COPY;
    } else if (MapTransformEnum.TRUNCATE.code === code) {
      return MapTransformEnum.TRUNCATE;
    } else if (MapTransformEnum.ESCAPE.code === code) {
      return MapTransformEnum.ESCAPE;
    } else if (MapTransformEnum.CAST.code === code) {
      return MapTransformEnum.CAST;
    } else if (MapTransformEnum.APPEND.code === code) {
      return MapTransformEnum.APPEND;
    } else if (MapTransformEnum.TRANSLATE.code === code) {
      return MapTransformEnum.TRANSLATE;
    } else if (MapTransformEnum.REFERENCE.code === code) {
      return MapTransformEnum.REFERENCE;
    } else if (MapTransformEnum.DATE_OP.code === code) {
      return MapTransformEnum.DATE_OP;
    } else if (MapTransformEnum.UUID.code === code) {
      return MapTransformEnum.UUID;
    } else if (MapTransformEnum.POINTER.code === code) {
      return MapTransformEnum.POINTER;
    } else if (MapTransformEnum.EVALUATE.code === code) {
      return MapTransformEnum.EVALUATE;
    } else if (MapTransformEnum.CC.code === code) {
      return MapTransformEnum.CC;
    } else if (MapTransformEnum.C.code === code) {
      return MapTransformEnum.C;
    } else if (MapTransformEnum.QTY.code === code) {
      return MapTransformEnum.QTY;
    } else if (MapTransformEnum.ID.code === code) {
      return MapTransformEnum.ID;
    } else if (MapTransformEnum.CP.code === code) {
      return MapTransformEnum.CP;
    } else if (MapTransformEnum.NULL.code === code) {
      return MapTransformEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MapTransformEnum 'code' value '${code}'`);
    }
  }
}
