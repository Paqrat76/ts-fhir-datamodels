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
 * ResearchElementTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/research-element-type
 * CodeSystem.name: ResearchElementType
 * CodeSystem.description: The possible types of research elements (E.g. Population, Exposure, Outcome).
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
 * FHIR CodeSystem: ResearchElementTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ResearchElementType](http://hl7.org/fhir/research-element-type)
 */
export class ResearchElementTypeEnum implements IFhirCodeEnum {
  public static readonly POPULATION = new FhirCodeDefinition(
    'POPULATION',
    'population',
    'http://hl7.org/fhir/research-element-type',
    'Population',
    'The element defines the population that forms the basis for research.',
  );
  public static readonly EXPOSURE = new FhirCodeDefinition(
    'EXPOSURE',
    'exposure',
    'http://hl7.org/fhir/research-element-type',
    'Exposure',
    'The element defines an exposure within the population that is being researched.',
  );
  public static readonly OUTCOME = new FhirCodeDefinition(
    'OUTCOME',
    'outcome',
    'http://hl7.org/fhir/research-element-type',
    'Outcome',
    'The element defines an outcome within the population that is being researched.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ResearchElementTypeEnum.POPULATION,
      ResearchElementTypeEnum.EXPOSURE,
      ResearchElementTypeEnum.OUTCOME,
      ResearchElementTypeEnum.NULL
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
    } else if (ResearchElementTypeEnum.POPULATION.code === code) {
      return ResearchElementTypeEnum.POPULATION;
    } else if (ResearchElementTypeEnum.EXPOSURE.code === code) {
      return ResearchElementTypeEnum.EXPOSURE;
    } else if (ResearchElementTypeEnum.OUTCOME.code === code) {
      return ResearchElementTypeEnum.OUTCOME;
    } else if (ResearchElementTypeEnum.NULL.code === code) {
      return ResearchElementTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ResearchElementTypeEnum 'code' value '${code}'`);
    }
  }
}
