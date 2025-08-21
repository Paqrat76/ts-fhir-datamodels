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
 * MapModelModeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/map-model-mode
 * CodeSystem.name: MapModelMode
 * CodeSystem.description: How the referenced structure is used in this mapping.
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
 * FHIR CodeSystem: MapModelModeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MapModelMode](http://hl7.org/fhir/map-model-mode)
 */
export class MapModelModeEnum implements IFhirCodeEnum {
  public static readonly SOURCE = new FhirCodeDefinition(
    'SOURCE',
    'source',
    'http://hl7.org/fhir/map-model-mode',
    'Source Structure Definition',
    'This structure describes an instance passed to the mapping engine that is used a source of data.',
  );
  public static readonly QUERIED = new FhirCodeDefinition(
    'QUERIED',
    'queried',
    'http://hl7.org/fhir/map-model-mode',
    'Queried Structure Definition',
    'This structure describes an instance that the mapping engine may ask for that is used a source of data.',
  );
  public static readonly TARGET = new FhirCodeDefinition(
    'TARGET',
    'target',
    'http://hl7.org/fhir/map-model-mode',
    'Target Structure Definition',
    'This structure describes an instance passed to the mapping engine that is used a target of data.',
  );
  public static readonly PRODUCED = new FhirCodeDefinition(
    'PRODUCED',
    'produced',
    'http://hl7.org/fhir/map-model-mode',
    'Produced Structure Definition',
    'This structure describes an instance that the mapping engine may ask to create that is used a target of data.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MapModelModeEnum.SOURCE,
      MapModelModeEnum.QUERIED,
      MapModelModeEnum.TARGET,
      MapModelModeEnum.PRODUCED,
      MapModelModeEnum.NULL
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
    } else if (MapModelModeEnum.SOURCE.code === code) {
      return MapModelModeEnum.SOURCE;
    } else if (MapModelModeEnum.QUERIED.code === code) {
      return MapModelModeEnum.QUERIED;
    } else if (MapModelModeEnum.TARGET.code === code) {
      return MapModelModeEnum.TARGET;
    } else if (MapModelModeEnum.PRODUCED.code === code) {
      return MapModelModeEnum.PRODUCED;
    } else if (MapModelModeEnum.NULL.code === code) {
      return MapModelModeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MapModelModeEnum 'code' value '${code}'`);
    }
  }
}
