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
 * MetricColorEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/metric-color
 * CodeSystem.name: MetricColor
 * CodeSystem.description: Describes the typical color of representation.
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
 * FHIR CodeSystem: MetricColorEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MetricColor](http://hl7.org/fhir/metric-color)
 */
export class MetricColorEnum implements IFhirCodeEnum {
  public static readonly BLACK = new FhirCodeDefinition(
    'BLACK',
    'black',
    'http://hl7.org/fhir/metric-color',
    'Color Black',
    'Color for representation - black.',
  );
  public static readonly RED = new FhirCodeDefinition(
    'RED',
    'red',
    'http://hl7.org/fhir/metric-color',
    'Color Red',
    'Color for representation - red.',
  );
  public static readonly GREEN = new FhirCodeDefinition(
    'GREEN',
    'green',
    'http://hl7.org/fhir/metric-color',
    'Color Green',
    'Color for representation - green.',
  );
  public static readonly YELLOW = new FhirCodeDefinition(
    'YELLOW',
    'yellow',
    'http://hl7.org/fhir/metric-color',
    'Color Yellow',
    'Color for representation - yellow.',
  );
  public static readonly BLUE = new FhirCodeDefinition(
    'BLUE',
    'blue',
    'http://hl7.org/fhir/metric-color',
    'Color Blue',
    'Color for representation - blue.',
  );
  public static readonly MAGENTA = new FhirCodeDefinition(
    'MAGENTA',
    'magenta',
    'http://hl7.org/fhir/metric-color',
    'Color Magenta',
    'Color for representation - magenta.',
  );
  public static readonly CYAN = new FhirCodeDefinition(
    'CYAN',
    'cyan',
    'http://hl7.org/fhir/metric-color',
    'Color Cyan',
    'Color for representation - cyan.',
  );
  public static readonly WHITE = new FhirCodeDefinition(
    'WHITE',
    'white',
    'http://hl7.org/fhir/metric-color',
    'Color White',
    'Color for representation - white.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MetricColorEnum.BLACK,
      MetricColorEnum.RED,
      MetricColorEnum.GREEN,
      MetricColorEnum.YELLOW,
      MetricColorEnum.BLUE,
      MetricColorEnum.MAGENTA,
      MetricColorEnum.CYAN,
      MetricColorEnum.WHITE,
      MetricColorEnum.NULL
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
    } else if (MetricColorEnum.BLACK.code === code) {
      return MetricColorEnum.BLACK;
    } else if (MetricColorEnum.RED.code === code) {
      return MetricColorEnum.RED;
    } else if (MetricColorEnum.GREEN.code === code) {
      return MetricColorEnum.GREEN;
    } else if (MetricColorEnum.YELLOW.code === code) {
      return MetricColorEnum.YELLOW;
    } else if (MetricColorEnum.BLUE.code === code) {
      return MetricColorEnum.BLUE;
    } else if (MetricColorEnum.MAGENTA.code === code) {
      return MetricColorEnum.MAGENTA;
    } else if (MetricColorEnum.CYAN.code === code) {
      return MetricColorEnum.CYAN;
    } else if (MetricColorEnum.WHITE.code === code) {
      return MetricColorEnum.WHITE;
    } else if (MetricColorEnum.NULL.code === code) {
      return MetricColorEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MetricColorEnum 'code' value '${code}'`);
    }
  }
}
