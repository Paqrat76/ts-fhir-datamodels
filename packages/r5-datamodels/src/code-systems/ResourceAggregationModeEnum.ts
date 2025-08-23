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
 * ResourceAggregationModeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/resource-aggregation-mode
 * CodeSystem.name: ResourceAggregationMode
 * CodeSystem.description: How resource references can be aggregated.
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
 * FHIR CodeSystem: ResourceAggregationModeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ResourceAggregationMode](http://hl7.org/fhir/resource-aggregation-mode)
 */
export class ResourceAggregationModeEnum implements IFhirCodeEnum {
  public static readonly CONTAINED = new FhirCodeDefinition(
    'CONTAINED',
    'contained',
    'http://hl7.org/fhir/resource-aggregation-mode',
    'Contained',
    'The reference is a local reference to a contained resource.',
  );
  public static readonly REFERENCED = new FhirCodeDefinition(
    'REFERENCED',
    'referenced',
    'http://hl7.org/fhir/resource-aggregation-mode',
    'Referenced',
    'The reference to a resource that has to be resolved externally to the resource that includes the reference.',
  );
  public static readonly BUNDLED = new FhirCodeDefinition(
    'BUNDLED',
    'bundled',
    'http://hl7.org/fhir/resource-aggregation-mode',
    'Bundled',
    'When the resource is in a Bundle, the resource the reference points to will be found in the same bundle as the resource that includes the reference.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ResourceAggregationModeEnum.CONTAINED,
      ResourceAggregationModeEnum.REFERENCED,
      ResourceAggregationModeEnum.BUNDLED,
      ResourceAggregationModeEnum.NULL
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
    } else if (ResourceAggregationModeEnum.CONTAINED.code === code) {
      return ResourceAggregationModeEnum.CONTAINED;
    } else if (ResourceAggregationModeEnum.REFERENCED.code === code) {
      return ResourceAggregationModeEnum.REFERENCED;
    } else if (ResourceAggregationModeEnum.BUNDLED.code === code) {
      return ResourceAggregationModeEnum.BUNDLED;
    } else if (ResourceAggregationModeEnum.NULL.code === code) {
      return ResourceAggregationModeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ResourceAggregationModeEnum 'code' value '${code}'`);
    }
  }
}
