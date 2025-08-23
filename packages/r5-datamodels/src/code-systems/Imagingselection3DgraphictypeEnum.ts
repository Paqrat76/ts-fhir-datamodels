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
 * Imagingselection3DgraphictypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/imagingselection-3dgraphictype
 * CodeSystem.name: Imagingselection3Dgraphictype
 * CodeSystem.description: The type of coordinates describing an image region.
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
 * FHIR CodeSystem: Imagingselection3DgraphictypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem Imagingselection3Dgraphictype](http://hl7.org/fhir/imagingselection-3dgraphictype)
 */
export class Imagingselection3DgraphictypeEnum implements IFhirCodeEnum {
  public static readonly POINT = new FhirCodeDefinition(
    'POINT',
    'point',
    'http://hl7.org/fhir/imagingselection-3dgraphictype',
    'POINT',
    'A single location denoted by a single (x,y,z) triplet.',
  );
  public static readonly MULTIPOINT = new FhirCodeDefinition(
    'MULTIPOINT',
    'multipoint',
    'http://hl7.org/fhir/imagingselection-3dgraphictype',
    'MULTIPOINT',
    'multiple locations each denoted by an (x,y,z) triplet; the points need not be coplanar.',
  );
  public static readonly POLYLINE = new FhirCodeDefinition(
    'POLYLINE',
    'polyline',
    'http://hl7.org/fhir/imagingselection-3dgraphictype',
    'POLYLINE',
    'a series of connected line segments with ordered vertices denoted by (x,y,z) triplets; the points need not be coplanar.',
  );
  public static readonly POLYGON = new FhirCodeDefinition(
    'POLYGON',
    'polygon',
    'http://hl7.org/fhir/imagingselection-3dgraphictype',
    'POLYGON',
    'a series of connected line segments with ordered vertices denoted by (x,y,z) triplets, where the first and last vertices shall be the same forming a polygon; the points shall be coplanar.',
  );
  public static readonly ELLIPSE = new FhirCodeDefinition(
    'ELLIPSE',
    'ellipse',
    'http://hl7.org/fhir/imagingselection-3dgraphictype',
    'ELLIPSE',
    'an ellipse defined by four (x,y,z) triplets, the first two triplets specifying the endpoints of the major axis and the second two triplets specifying the endpoints of the minor axis.',
  );
  public static readonly ELLIPSOID = new FhirCodeDefinition(
    'ELLIPSOID',
    'ellipsoid',
    'http://hl7.org/fhir/imagingselection-3dgraphictype',
    'ELLIPSOID',
    'a three-dimensional geometric surface whose plane sections are either ellipses or circles and contains three intersecting orthogonal axes, "a", "b", and "c"; the ellipsoid is defined by six (x,y,z) triplets, the first and second triplets specifying the endpoints of axis "a", the third and fourth triplets specifying the endpoints of axis "b", and the fifth and sixth triplets specifying the endpoints of axis "c".',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      Imagingselection3DgraphictypeEnum.POINT,
      Imagingselection3DgraphictypeEnum.MULTIPOINT,
      Imagingselection3DgraphictypeEnum.POLYLINE,
      Imagingselection3DgraphictypeEnum.POLYGON,
      Imagingselection3DgraphictypeEnum.ELLIPSE,
      Imagingselection3DgraphictypeEnum.ELLIPSOID,
      Imagingselection3DgraphictypeEnum.NULL
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
    } else if (Imagingselection3DgraphictypeEnum.POINT.code === code) {
      return Imagingselection3DgraphictypeEnum.POINT;
    } else if (Imagingselection3DgraphictypeEnum.MULTIPOINT.code === code) {
      return Imagingselection3DgraphictypeEnum.MULTIPOINT;
    } else if (Imagingselection3DgraphictypeEnum.POLYLINE.code === code) {
      return Imagingselection3DgraphictypeEnum.POLYLINE;
    } else if (Imagingselection3DgraphictypeEnum.POLYGON.code === code) {
      return Imagingselection3DgraphictypeEnum.POLYGON;
    } else if (Imagingselection3DgraphictypeEnum.ELLIPSE.code === code) {
      return Imagingselection3DgraphictypeEnum.ELLIPSE;
    } else if (Imagingselection3DgraphictypeEnum.ELLIPSOID.code === code) {
      return Imagingselection3DgraphictypeEnum.ELLIPSOID;
    } else if (Imagingselection3DgraphictypeEnum.NULL.code === code) {
      return Imagingselection3DgraphictypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown Imagingselection3DgraphictypeEnum 'code' value '${code}'`);
    }
  }
}
