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
 * Imagingselection2DgraphictypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/imagingselection-2dgraphictype
 * CodeSystem.name: Imagingselection2Dgraphictype
 * CodeSystem.description: The type of coordinates describing a 2D image region.
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
 * FHIR CodeSystem: Imagingselection2DgraphictypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem Imagingselection2Dgraphictype](http://hl7.org/fhir/imagingselection-2dgraphictype)
 */
export class Imagingselection2DgraphictypeEnum implements IFhirCodeEnum {
  public static readonly POINT = new FhirCodeDefinition(
    'POINT',
    'point',
    'http://hl7.org/fhir/imagingselection-2dgraphictype',
    'POINT',
    'A single location denoted by a single (x,y) pair.',
  );
  public static readonly POLYLINE = new FhirCodeDefinition(
    'POLYLINE',
    'polyline',
    'http://hl7.org/fhir/imagingselection-2dgraphictype',
    'POLYLINE',
    'A series of connected line segments with ordered vertices denoted by (x,y) triplets; the points need not be coplanar.',
  );
  public static readonly INTERPOLATED = new FhirCodeDefinition(
    'INTERPOLATED',
    'interpolated',
    'http://hl7.org/fhir/imagingselection-2dgraphictype',
    'INTERPOLATED',
    'An n-tuple list of (x,y) pair end points between which some form of implementation dependent curved lines are to be drawn. The rendered line shall pass through all the specified points.',
  );
  public static readonly CIRCLE = new FhirCodeDefinition(
    'CIRCLE',
    'circle',
    'http://hl7.org/fhir/imagingselection-2dgraphictype',
    'CIRCLE',
    'Two points shall be present; the first point is to be interpreted as the center and the second point as a point on the circumference of a circle, some form of implementation dependent representation of which is to be drawn.',
  );
  public static readonly ELLIPSE = new FhirCodeDefinition(
    'ELLIPSE',
    'ellipse',
    'http://hl7.org/fhir/imagingselection-2dgraphictype',
    'ELLIPSE',
    'An ellipse defined by four (x,y) pairs, the first two pairs specifying the endpoints of the major axis and the second two pairs specifying the endpoints of the minor axis.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      Imagingselection2DgraphictypeEnum.POINT,
      Imagingselection2DgraphictypeEnum.POLYLINE,
      Imagingselection2DgraphictypeEnum.INTERPOLATED,
      Imagingselection2DgraphictypeEnum.CIRCLE,
      Imagingselection2DgraphictypeEnum.ELLIPSE,
      Imagingselection2DgraphictypeEnum.NULL
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
    } else if (Imagingselection2DgraphictypeEnum.POINT.code === code) {
      return Imagingselection2DgraphictypeEnum.POINT;
    } else if (Imagingselection2DgraphictypeEnum.POLYLINE.code === code) {
      return Imagingselection2DgraphictypeEnum.POLYLINE;
    } else if (Imagingselection2DgraphictypeEnum.INTERPOLATED.code === code) {
      return Imagingselection2DgraphictypeEnum.INTERPOLATED;
    } else if (Imagingselection2DgraphictypeEnum.CIRCLE.code === code) {
      return Imagingselection2DgraphictypeEnum.CIRCLE;
    } else if (Imagingselection2DgraphictypeEnum.ELLIPSE.code === code) {
      return Imagingselection2DgraphictypeEnum.ELLIPSE;
    } else if (Imagingselection2DgraphictypeEnum.NULL.code === code) {
      return Imagingselection2DgraphictypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown Imagingselection2DgraphictypeEnum 'code' value '${code}'`);
    }
  }
}
