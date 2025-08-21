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
 * ResourceSlicingRulesEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/resource-slicing-rules
 * CodeSystem.name: ResourceSlicingRules
 * CodeSystem.description: How slices are interpreted when evaluating an instance.
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
 * FHIR CodeSystem: ResourceSlicingRulesEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ResourceSlicingRules](http://hl7.org/fhir/resource-slicing-rules)
 */
export class ResourceSlicingRulesEnum implements IFhirCodeEnum {
  public static readonly CLOSED = new FhirCodeDefinition(
    'CLOSED',
    'closed',
    'http://hl7.org/fhir/resource-slicing-rules',
    'Closed',
    'No additional content is allowed other than that described by the slices in this profile.',
  );
  public static readonly OPEN = new FhirCodeDefinition(
    'OPEN',
    'open',
    'http://hl7.org/fhir/resource-slicing-rules',
    'Open',
    'Additional content is allowed anywhere in the list.',
  );
  public static readonly OPEN_AT_END = new FhirCodeDefinition(
    'OPEN_AT_END',
    'openAtEnd',
    'http://hl7.org/fhir/resource-slicing-rules',
    'Open at End',
    'Additional content is allowed, but only at the end of the list. Note that using this requires that the slices be ordered, which makes it hard to share uses. This should only be done where absolutely required.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ResourceSlicingRulesEnum.CLOSED,
      ResourceSlicingRulesEnum.OPEN,
      ResourceSlicingRulesEnum.OPEN_AT_END,
      ResourceSlicingRulesEnum.NULL
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
    } else if (ResourceSlicingRulesEnum.CLOSED.code === code) {
      return ResourceSlicingRulesEnum.CLOSED;
    } else if (ResourceSlicingRulesEnum.OPEN.code === code) {
      return ResourceSlicingRulesEnum.OPEN;
    } else if (ResourceSlicingRulesEnum.OPEN_AT_END.code === code) {
      return ResourceSlicingRulesEnum.OPEN_AT_END;
    } else if (ResourceSlicingRulesEnum.NULL.code === code) {
      return ResourceSlicingRulesEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ResourceSlicingRulesEnum 'code' value '${code}'`);
    }
  }
}
