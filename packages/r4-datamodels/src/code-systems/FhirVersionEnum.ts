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
 * FhirVersionEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/FHIR-version
 * CodeSystem.name: FhirVersion
 * CodeSystem.description: All published FHIR Versions.
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
 * FHIR CodeSystem: FhirVersionEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem FhirVersion](http://hl7.org/fhir/FHIR-version)
 */
export class FhirVersionEnum implements IFhirCodeEnum {
  public static readonly _0_01 = new FhirCodeDefinition(
    '_0_01',
    '0.01',
    'http://hl7.org/fhir/FHIR-version',
    '0.01',
    'Oldest archived version of FHIR.',
  );
  public static readonly _0_05 = new FhirCodeDefinition(
    '_0_05',
    '0.05',
    'http://hl7.org/fhir/FHIR-version',
    '0.05',
    '1st Draft for Comment (Sept 2012 Ballot).',
  );
  public static readonly _0_06 = new FhirCodeDefinition(
    '_0_06',
    '0.06',
    'http://hl7.org/fhir/FHIR-version',
    '0.06',
    '2nd Draft for Comment (January 2013 Ballot).',
  );
  public static readonly _0_11 = new FhirCodeDefinition(
    '_0_11',
    '0.11',
    'http://hl7.org/fhir/FHIR-version',
    '0.11',
    'DSTU 1 Ballot version.',
  );
  public static readonly _0_0_80 = new FhirCodeDefinition(
    '_0_0_80',
    '0.0.80',
    'http://hl7.org/fhir/FHIR-version',
    '0.0.80',
    'DSTU 1 Official version.',
  );
  public static readonly _0_0_81 = new FhirCodeDefinition(
    '_0_0_81',
    '0.0.81',
    'http://hl7.org/fhir/FHIR-version',
    '0.0.81',
    'DSTU 1 Official version Technical Errata #1.',
  );
  public static readonly _0_0_82 = new FhirCodeDefinition(
    '_0_0_82',
    '0.0.82',
    'http://hl7.org/fhir/FHIR-version',
    '0.0.82',
    'DSTU 1 Official version Technical Errata #2.',
  );
  public static readonly _0_4_0 = new FhirCodeDefinition(
    '_0_4_0',
    '0.4.0',
    'http://hl7.org/fhir/FHIR-version',
    '0.4.0',
    'Draft For Comment (January 2015 Ballot).',
  );
  public static readonly _0_5_0 = new FhirCodeDefinition(
    '_0_5_0',
    '0.5.0',
    'http://hl7.org/fhir/FHIR-version',
    '0.5.0',
    'DSTU 2 Ballot version (May 2015 Ballot).',
  );
  public static readonly _1_0_0 = new FhirCodeDefinition(
    '_1_0_0',
    '1.0.0',
    'http://hl7.org/fhir/FHIR-version',
    '1.0.0',
    'DSTU 2 QA Preview + CQIF Ballot (Sep 2015).',
  );
  public static readonly _1_0_1 = new FhirCodeDefinition(
    '_1_0_1',
    '1.0.1',
    'http://hl7.org/fhir/FHIR-version',
    '1.0.1',
    'DSTU 2 (Official version).',
  );
  public static readonly _1_0_2 = new FhirCodeDefinition(
    '_1_0_2',
    '1.0.2',
    'http://hl7.org/fhir/FHIR-version',
    '1.0.2',
    'DSTU 2 (Official version) with 1 technical errata.',
  );
  public static readonly _1_1_0 = new FhirCodeDefinition(
    '_1_1_0',
    '1.1.0',
    'http://hl7.org/fhir/FHIR-version',
    '1.1.0',
    'GAO Ballot + draft changes to main FHIR standard.',
  );
  public static readonly _1_4_0 = new FhirCodeDefinition(
    '_1_4_0',
    '1.4.0',
    'http://hl7.org/fhir/FHIR-version',
    '1.4.0',
    'CQF on FHIR Ballot + Connectathon 12 (Montreal).',
  );
  public static readonly _1_6_0 = new FhirCodeDefinition(
    '_1_6_0',
    '1.6.0',
    'http://hl7.org/fhir/FHIR-version',
    '1.6.0',
    'FHIR STU3 Ballot + Connectathon 13 (Baltimore).',
  );
  public static readonly _1_8_0 = new FhirCodeDefinition(
    '_1_8_0',
    '1.8.0',
    'http://hl7.org/fhir/FHIR-version',
    '1.8.0',
    'FHIR STU3 Candidate + Connectathon 14 (San Antonio).',
  );
  public static readonly _3_0_0 = new FhirCodeDefinition(
    '_3_0_0',
    '3.0.0',
    'http://hl7.org/fhir/FHIR-version',
    '3.0.0',
    'FHIR Release 3 (STU).',
  );
  public static readonly _3_0_1 = new FhirCodeDefinition(
    '_3_0_1',
    '3.0.1',
    'http://hl7.org/fhir/FHIR-version',
    '3.0.1',
    'FHIR Release 3 (STU) with 1 technical errata.',
  );
  public static readonly _3_3_0 = new FhirCodeDefinition(
    '_3_3_0',
    '3.3.0',
    'http://hl7.org/fhir/FHIR-version',
    '3.3.0',
    'R4 Ballot #1.',
  );
  public static readonly _3_5_0 = new FhirCodeDefinition(
    '_3_5_0',
    '3.5.0',
    'http://hl7.org/fhir/FHIR-version',
    '3.5.0',
    'R4 Ballot #2.',
  );
  public static readonly _4_0_0 = new FhirCodeDefinition(
    '_4_0_0',
    '4.0.0',
    'http://hl7.org/fhir/FHIR-version',
    '4.0.0',
    'FHIR Release 4 (Normative + STU).',
  );
  public static readonly _4_0_1 = new FhirCodeDefinition(
    '_4_0_1',
    '4.0.1',
    'http://hl7.org/fhir/FHIR-version',
    '4.0.1',
    'FHIR Release 4 Technical Correction.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      FhirVersionEnum._0_01,
      FhirVersionEnum._0_05,
      FhirVersionEnum._0_06,
      FhirVersionEnum._0_11,
      FhirVersionEnum._0_0_80,
      FhirVersionEnum._0_0_81,
      FhirVersionEnum._0_0_82,
      FhirVersionEnum._0_4_0,
      FhirVersionEnum._0_5_0,
      FhirVersionEnum._1_0_0,
      FhirVersionEnum._1_0_1,
      FhirVersionEnum._1_0_2,
      FhirVersionEnum._1_1_0,
      FhirVersionEnum._1_4_0,
      FhirVersionEnum._1_6_0,
      FhirVersionEnum._1_8_0,
      FhirVersionEnum._3_0_0,
      FhirVersionEnum._3_0_1,
      FhirVersionEnum._3_3_0,
      FhirVersionEnum._3_5_0,
      FhirVersionEnum._4_0_0,
      FhirVersionEnum._4_0_1,
      FhirVersionEnum.NULL
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
    } else if (FhirVersionEnum._0_01.code === code) {
      return FhirVersionEnum._0_01;
    } else if (FhirVersionEnum._0_05.code === code) {
      return FhirVersionEnum._0_05;
    } else if (FhirVersionEnum._0_06.code === code) {
      return FhirVersionEnum._0_06;
    } else if (FhirVersionEnum._0_11.code === code) {
      return FhirVersionEnum._0_11;
    } else if (FhirVersionEnum._0_0_80.code === code) {
      return FhirVersionEnum._0_0_80;
    } else if (FhirVersionEnum._0_0_81.code === code) {
      return FhirVersionEnum._0_0_81;
    } else if (FhirVersionEnum._0_0_82.code === code) {
      return FhirVersionEnum._0_0_82;
    } else if (FhirVersionEnum._0_4_0.code === code) {
      return FhirVersionEnum._0_4_0;
    } else if (FhirVersionEnum._0_5_0.code === code) {
      return FhirVersionEnum._0_5_0;
    } else if (FhirVersionEnum._1_0_0.code === code) {
      return FhirVersionEnum._1_0_0;
    } else if (FhirVersionEnum._1_0_1.code === code) {
      return FhirVersionEnum._1_0_1;
    } else if (FhirVersionEnum._1_0_2.code === code) {
      return FhirVersionEnum._1_0_2;
    } else if (FhirVersionEnum._1_1_0.code === code) {
      return FhirVersionEnum._1_1_0;
    } else if (FhirVersionEnum._1_4_0.code === code) {
      return FhirVersionEnum._1_4_0;
    } else if (FhirVersionEnum._1_6_0.code === code) {
      return FhirVersionEnum._1_6_0;
    } else if (FhirVersionEnum._1_8_0.code === code) {
      return FhirVersionEnum._1_8_0;
    } else if (FhirVersionEnum._3_0_0.code === code) {
      return FhirVersionEnum._3_0_0;
    } else if (FhirVersionEnum._3_0_1.code === code) {
      return FhirVersionEnum._3_0_1;
    } else if (FhirVersionEnum._3_3_0.code === code) {
      return FhirVersionEnum._3_3_0;
    } else if (FhirVersionEnum._3_5_0.code === code) {
      return FhirVersionEnum._3_5_0;
    } else if (FhirVersionEnum._4_0_0.code === code) {
      return FhirVersionEnum._4_0_0;
    } else if (FhirVersionEnum._4_0_1.code === code) {
      return FhirVersionEnum._4_0_1;
    } else if (FhirVersionEnum.NULL.code === code) {
      return FhirVersionEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown FhirVersionEnum 'code' value '${code}'`);
    }
  }
}
