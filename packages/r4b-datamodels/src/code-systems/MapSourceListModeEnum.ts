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
 * MapSourceListModeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/map-source-list-mode
 * CodeSystem.name: MapSourceListMode
 * CodeSystem.description: If field is a list, how to manage the source.
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
 * FHIR CodeSystem: MapSourceListModeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MapSourceListMode](http://hl7.org/fhir/map-source-list-mode)
 */
export class MapSourceListModeEnum implements IFhirCodeEnum {
  public static readonly FIRST = new FhirCodeDefinition(
    'FIRST',
    'first',
    'http://hl7.org/fhir/map-source-list-mode',
    'First',
    'Only process this rule for the first in the list.',
  );
  public static readonly NOT_FIRST = new FhirCodeDefinition(
    'NOT_FIRST',
    'not_first',
    'http://hl7.org/fhir/map-source-list-mode',
    'All but the first',
    'Process this rule for all but the first.',
  );
  public static readonly LAST = new FhirCodeDefinition(
    'LAST',
    'last',
    'http://hl7.org/fhir/map-source-list-mode',
    'Last',
    'Only process this rule for the last in the list.',
  );
  public static readonly NOT_LAST = new FhirCodeDefinition(
    'NOT_LAST',
    'not_last',
    'http://hl7.org/fhir/map-source-list-mode',
    'All but the last',
    'Process this rule for all but the last.',
  );
  public static readonly ONLY_ONE = new FhirCodeDefinition(
    'ONLY_ONE',
    'only_one',
    'http://hl7.org/fhir/map-source-list-mode',
    'Enforce only one',
    'Only process this rule is there is only item.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MapSourceListModeEnum.FIRST,
      MapSourceListModeEnum.NOT_FIRST,
      MapSourceListModeEnum.LAST,
      MapSourceListModeEnum.NOT_LAST,
      MapSourceListModeEnum.ONLY_ONE,
      MapSourceListModeEnum.NULL
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
    } else if (MapSourceListModeEnum.FIRST.code === code) {
      return MapSourceListModeEnum.FIRST;
    } else if (MapSourceListModeEnum.NOT_FIRST.code === code) {
      return MapSourceListModeEnum.NOT_FIRST;
    } else if (MapSourceListModeEnum.LAST.code === code) {
      return MapSourceListModeEnum.LAST;
    } else if (MapSourceListModeEnum.NOT_LAST.code === code) {
      return MapSourceListModeEnum.NOT_LAST;
    } else if (MapSourceListModeEnum.ONLY_ONE.code === code) {
      return MapSourceListModeEnum.ONLY_ONE;
    } else if (MapSourceListModeEnum.NULL.code === code) {
      return MapSourceListModeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MapSourceListModeEnum 'code' value '${code}'`);
    }
  }
}
