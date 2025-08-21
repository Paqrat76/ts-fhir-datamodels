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
 * ConsentDataMeaningEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/consent-data-meaning
 * CodeSystem.name: ConsentDataMeaning
 * CodeSystem.description: How a resource reference is interpreted when testing consent restrictions.
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
 * FHIR CodeSystem: ConsentDataMeaningEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ConsentDataMeaning](http://hl7.org/fhir/consent-data-meaning)
 */
export class ConsentDataMeaningEnum implements IFhirCodeEnum {
  public static readonly INSTANCE = new FhirCodeDefinition(
    'INSTANCE',
    'instance',
    'http://hl7.org/fhir/consent-data-meaning',
    'Instance',
    'The consent applies directly to the instance of the resource.',
  );
  public static readonly RELATED = new FhirCodeDefinition(
    'RELATED',
    'related',
    'http://hl7.org/fhir/consent-data-meaning',
    'Related',
    'The consent applies directly to the instance of the resource and instances it refers to.',
  );
  public static readonly DEPENDENTS = new FhirCodeDefinition(
    'DEPENDENTS',
    'dependents',
    'http://hl7.org/fhir/consent-data-meaning',
    'Dependents',
    'The consent applies directly to the instance of the resource and instances that refer to it.',
  );
  public static readonly AUTHOREDBY = new FhirCodeDefinition(
    'AUTHOREDBY',
    'authoredby',
    'http://hl7.org/fhir/consent-data-meaning',
    'AuthoredBy',
    'The consent applies to instances of resources that are authored by.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ConsentDataMeaningEnum.INSTANCE,
      ConsentDataMeaningEnum.RELATED,
      ConsentDataMeaningEnum.DEPENDENTS,
      ConsentDataMeaningEnum.AUTHOREDBY,
      ConsentDataMeaningEnum.NULL
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
    } else if (ConsentDataMeaningEnum.INSTANCE.code === code) {
      return ConsentDataMeaningEnum.INSTANCE;
    } else if (ConsentDataMeaningEnum.RELATED.code === code) {
      return ConsentDataMeaningEnum.RELATED;
    } else if (ConsentDataMeaningEnum.DEPENDENTS.code === code) {
      return ConsentDataMeaningEnum.DEPENDENTS;
    } else if (ConsentDataMeaningEnum.AUTHOREDBY.code === code) {
      return ConsentDataMeaningEnum.AUTHOREDBY;
    } else if (ConsentDataMeaningEnum.NULL.code === code) {
      return ConsentDataMeaningEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ConsentDataMeaningEnum 'code' value '${code}'`);
    }
  }
}
