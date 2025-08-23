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
 * DiscriminatorTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/discriminator-type
 * CodeSystem.name: DiscriminatorType
 * CodeSystem.description: How an element value is interpreted when discrimination is evaluated.
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
 * FHIR CodeSystem: DiscriminatorTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem DiscriminatorType](http://hl7.org/fhir/discriminator-type)
 */
export class DiscriminatorTypeEnum implements IFhirCodeEnum {
  public static readonly VALUE = new FhirCodeDefinition(
    'VALUE',
    'value',
    'http://hl7.org/fhir/discriminator-type',
    'Value',
    'The slices have different values in the nominated element, as determined by the applicable fixed value, pattern, or required ValueSet binding.',
  );
  public static readonly EXISTS = new FhirCodeDefinition(
    'EXISTS',
    'exists',
    'http://hl7.org/fhir/discriminator-type',
    'Exists',
    'The slices are differentiated by the presence or absence of the nominated element. There SHALL be no more than two slices. The slices are differentiated by the fact that one must have a max of 0 and the other must have a min of 1 (or more).  The order in which the slices are declared doesn\'t matter.',
  );
  public static readonly PATTERN = new FhirCodeDefinition(
    'PATTERN',
    'pattern',
    'http://hl7.org/fhir/discriminator-type',
    'Pattern',
    'The slices have different values in the nominated element, as determined by the applicable fixed value, pattern, or required ValueSet binding. This has the same meaning as \'value\' and is deprecated.',
  );
  public static readonly TYPE = new FhirCodeDefinition(
    'TYPE',
    'type',
    'http://hl7.org/fhir/discriminator-type',
    'Type',
    'The slices are differentiated by type of the nominated element.',
  );
  public static readonly PROFILE = new FhirCodeDefinition(
    'PROFILE',
    'profile',
    'http://hl7.org/fhir/discriminator-type',
    'Profile',
    'The slices are differentiated by conformance of the nominated element to a specified profile. Note that if the path specifies .resolve() then the profile is the target profile on the reference. In this case, validation by the possible profiles is required to differentiate the slices.',
  );
  public static readonly POSITION = new FhirCodeDefinition(
    'POSITION',
    'position',
    'http://hl7.org/fhir/discriminator-type',
    'Position',
    'The slices are differentiated by their index. This is only possible if all but the last slice have min=max cardinality, and the (optional) last slice contains other undifferentiated elements.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      DiscriminatorTypeEnum.VALUE,
      DiscriminatorTypeEnum.EXISTS,
      DiscriminatorTypeEnum.PATTERN,
      DiscriminatorTypeEnum.TYPE,
      DiscriminatorTypeEnum.PROFILE,
      DiscriminatorTypeEnum.POSITION,
      DiscriminatorTypeEnum.NULL
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
    } else if (DiscriminatorTypeEnum.VALUE.code === code) {
      return DiscriminatorTypeEnum.VALUE;
    } else if (DiscriminatorTypeEnum.EXISTS.code === code) {
      return DiscriminatorTypeEnum.EXISTS;
    } else if (DiscriminatorTypeEnum.PATTERN.code === code) {
      return DiscriminatorTypeEnum.PATTERN;
    } else if (DiscriminatorTypeEnum.TYPE.code === code) {
      return DiscriminatorTypeEnum.TYPE;
    } else if (DiscriminatorTypeEnum.PROFILE.code === code) {
      return DiscriminatorTypeEnum.PROFILE;
    } else if (DiscriminatorTypeEnum.POSITION.code === code) {
      return DiscriminatorTypeEnum.POSITION;
    } else if (DiscriminatorTypeEnum.NULL.code === code) {
      return DiscriminatorTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown DiscriminatorTypeEnum 'code' value '${code}'`);
    }
  }
}
