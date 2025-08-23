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
 * CharacteristicCombinationEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/characteristic-combination
 * CodeSystem.name: CharacteristicCombination
 * CodeSystem.description: Logical grouping of characteristics.
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
 * FHIR CodeSystem: CharacteristicCombinationEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem CharacteristicCombination](http://hl7.org/fhir/characteristic-combination)
 */
export class CharacteristicCombinationEnum implements IFhirCodeEnum {
  public static readonly ALL_OF = new FhirCodeDefinition(
    'ALL_OF',
    'all-of',
    'http://hl7.org/fhir/characteristic-combination',
    'All of',
    'Combine characteristics with AND.',
  );
  public static readonly ANY_OF = new FhirCodeDefinition(
    'ANY_OF',
    'any-of',
    'http://hl7.org/fhir/characteristic-combination',
    'Any of',
    'Combine characteristics with OR.',
  );
  public static readonly AT_LEAST = new FhirCodeDefinition(
    'AT_LEAST',
    'at-least',
    'http://hl7.org/fhir/characteristic-combination',
    'At least',
    'Meet at least the threshold number of characteristics for definition.',
  );
  public static readonly AT_MOST = new FhirCodeDefinition(
    'AT_MOST',
    'at-most',
    'http://hl7.org/fhir/characteristic-combination',
    'At most',
    'Meet at most the threshold number of characteristics for definition.',
  );
  public static readonly STATISTICAL = new FhirCodeDefinition(
    'STATISTICAL',
    'statistical',
    'http://hl7.org/fhir/characteristic-combination',
    'Statistical',
    'Combine characteristics statistically. Use method to specify the statistical method.',
  );
  public static readonly NET_EFFECT = new FhirCodeDefinition(
    'NET_EFFECT',
    'net-effect',
    'http://hl7.org/fhir/characteristic-combination',
    'Net effect',
    'Combine characteristics by addition of benefits and subtraction of harms.',
  );
  public static readonly DATASET = new FhirCodeDefinition(
    'DATASET',
    'dataset',
    'http://hl7.org/fhir/characteristic-combination',
    'Dataset',
    'Combine characteristics as a collection used as the dataset.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      CharacteristicCombinationEnum.ALL_OF,
      CharacteristicCombinationEnum.ANY_OF,
      CharacteristicCombinationEnum.AT_LEAST,
      CharacteristicCombinationEnum.AT_MOST,
      CharacteristicCombinationEnum.STATISTICAL,
      CharacteristicCombinationEnum.NET_EFFECT,
      CharacteristicCombinationEnum.DATASET,
      CharacteristicCombinationEnum.NULL
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
    } else if (CharacteristicCombinationEnum.ALL_OF.code === code) {
      return CharacteristicCombinationEnum.ALL_OF;
    } else if (CharacteristicCombinationEnum.ANY_OF.code === code) {
      return CharacteristicCombinationEnum.ANY_OF;
    } else if (CharacteristicCombinationEnum.AT_LEAST.code === code) {
      return CharacteristicCombinationEnum.AT_LEAST;
    } else if (CharacteristicCombinationEnum.AT_MOST.code === code) {
      return CharacteristicCombinationEnum.AT_MOST;
    } else if (CharacteristicCombinationEnum.STATISTICAL.code === code) {
      return CharacteristicCombinationEnum.STATISTICAL;
    } else if (CharacteristicCombinationEnum.NET_EFFECT.code === code) {
      return CharacteristicCombinationEnum.NET_EFFECT;
    } else if (CharacteristicCombinationEnum.DATASET.code === code) {
      return CharacteristicCombinationEnum.DATASET;
    } else if (CharacteristicCombinationEnum.NULL.code === code) {
      return CharacteristicCombinationEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown CharacteristicCombinationEnum 'code' value '${code}'`);
    }
  }
}
