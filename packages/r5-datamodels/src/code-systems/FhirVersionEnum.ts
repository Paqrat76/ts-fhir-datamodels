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
  public static readonly _0_0 = new FhirCodeDefinition(
    '_0_0',
    '0.0',
    'http://hl7.org/fhir/FHIR-version',
    '0.0',
    'DSTU 1 version.',
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
  public static readonly _0_4 = new FhirCodeDefinition(
    '_0_4',
    '0.4',
    'http://hl7.org/fhir/FHIR-version',
    '0.4',
    'January 2015 Ballot.',
  );
  public static readonly _0_4_0 = new FhirCodeDefinition(
    '_0_4_0',
    '0.4.0',
    'http://hl7.org/fhir/FHIR-version',
    '0.4.0',
    'Draft For Comment (January 2015 Ballot).',
  );
  public static readonly _0_5 = new FhirCodeDefinition(
    '_0_5',
    '0.5',
    'http://hl7.org/fhir/FHIR-version',
    '0.5',
    'May 2015 Ballot.',
  );
  public static readonly _0_5_0 = new FhirCodeDefinition(
    '_0_5_0',
    '0.5.0',
    'http://hl7.org/fhir/FHIR-version',
    '0.5.0',
    'DSTU 2 Ballot version (May 2015 Ballot).',
  );
  public static readonly _1_0 = new FhirCodeDefinition(
    '_1_0',
    '1.0',
    'http://hl7.org/fhir/FHIR-version',
    '1.0',
    'DSTU 2 version.',
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
  public static readonly _1_1 = new FhirCodeDefinition(
    '_1_1',
    '1.1',
    'http://hl7.org/fhir/FHIR-version',
    '1.1',
    'GAO Ballot version.',
  );
  public static readonly _1_1_0 = new FhirCodeDefinition(
    '_1_1_0',
    '1.1.0',
    'http://hl7.org/fhir/FHIR-version',
    '1.1.0',
    'GAO Ballot + draft changes to main FHIR standard.',
  );
  public static readonly _1_4 = new FhirCodeDefinition(
    '_1_4',
    '1.4',
    'http://hl7.org/fhir/FHIR-version',
    '1.4',
    'Connectathon 12 (Montreal) version.',
  );
  public static readonly _1_4_0 = new FhirCodeDefinition(
    '_1_4_0',
    '1.4.0',
    'http://hl7.org/fhir/FHIR-version',
    '1.4.0',
    'CQF on FHIR Ballot + Connectathon 12 (Montreal).',
  );
  public static readonly _1_6 = new FhirCodeDefinition(
    '_1_6',
    '1.6',
    'http://hl7.org/fhir/FHIR-version',
    '1.6',
    'Connectathon 13 (Baltimore) version.',
  );
  public static readonly _1_6_0 = new FhirCodeDefinition(
    '_1_6_0',
    '1.6.0',
    'http://hl7.org/fhir/FHIR-version',
    '1.6.0',
    'FHIR STU3 Ballot + Connectathon 13 (Baltimore).',
  );
  public static readonly _1_8 = new FhirCodeDefinition(
    '_1_8',
    '1.8',
    'http://hl7.org/fhir/FHIR-version',
    '1.8',
    'Connectathon 14 (San Antonio) version.',
  );
  public static readonly _1_8_0 = new FhirCodeDefinition(
    '_1_8_0',
    '1.8.0',
    'http://hl7.org/fhir/FHIR-version',
    '1.8.0',
    'FHIR STU3 Candidate + Connectathon 14 (San Antonio).',
  );
  public static readonly _3_0 = new FhirCodeDefinition(
    '_3_0',
    '3.0',
    'http://hl7.org/fhir/FHIR-version',
    '3.0',
    'STU3 version.',
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
  public static readonly _3_0_2 = new FhirCodeDefinition(
    '_3_0_2',
    '3.0.2',
    'http://hl7.org/fhir/FHIR-version',
    '3.0.2',
    'FHIR Release 3 (STU) with 2 technical errata.',
  );
  public static readonly _3_3 = new FhirCodeDefinition(
    '_3_3',
    '3.3',
    'http://hl7.org/fhir/FHIR-version',
    '3.3',
    'R4 Ballot #1 version.',
  );
  public static readonly _3_3_0 = new FhirCodeDefinition(
    '_3_3_0',
    '3.3.0',
    'http://hl7.org/fhir/FHIR-version',
    '3.3.0',
    'R4 Ballot #1 + Connectaton 18 (Cologne).',
  );
  public static readonly _3_5 = new FhirCodeDefinition(
    '_3_5',
    '3.5',
    'http://hl7.org/fhir/FHIR-version',
    '3.5',
    'R4 Ballot #2 version.',
  );
  public static readonly _3_5_0 = new FhirCodeDefinition(
    '_3_5_0',
    '3.5.0',
    'http://hl7.org/fhir/FHIR-version',
    '3.5.0',
    'R4 Ballot #2 + Connectathon 19 (Baltimore).',
  );
  public static readonly _4_0 = new FhirCodeDefinition(
    '_4_0',
    '4.0',
    'http://hl7.org/fhir/FHIR-version',
    '4.0',
    'R4 version.',
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
    'FHIR Release 4 (Normative + STU) with 1 technical errata.',
  );
  public static readonly _4_1 = new FhirCodeDefinition(
    '_4_1',
    '4.1',
    'http://hl7.org/fhir/FHIR-version',
    '4.1',
    'R4B Ballot #1 version.',
  );
  public static readonly _4_1_0 = new FhirCodeDefinition(
    '_4_1_0',
    '4.1.0',
    'http://hl7.org/fhir/FHIR-version',
    '4.1.0',
    'R4B Ballot #1 + Connectathon 27 (Virtual).',
  );
  public static readonly _4_2 = new FhirCodeDefinition(
    '_4_2',
    '4.2',
    'http://hl7.org/fhir/FHIR-version',
    '4.2',
    'R5 Preview #1 version.',
  );
  public static readonly _4_2_0 = new FhirCodeDefinition(
    '_4_2_0',
    '4.2.0',
    'http://hl7.org/fhir/FHIR-version',
    '4.2.0',
    'R5 Preview #1 + Connectathon 23 (Sydney).',
  );
  public static readonly _4_3 = new FhirCodeDefinition(
    '_4_3',
    '4.3',
    'http://hl7.org/fhir/FHIR-version',
    '4.3',
    'R4B version.',
  );
  public static readonly _4_3_0 = new FhirCodeDefinition(
    '_4_3_0',
    '4.3.0',
    'http://hl7.org/fhir/FHIR-version',
    '4.3.0',
    'FHIR Release 4B (Normative + STU).',
  );
  public static readonly _4_3_0_CIBUILD = new FhirCodeDefinition(
    '_4_3_0_CIBUILD',
    '4.3.0-cibuild',
    'http://hl7.org/fhir/FHIR-version',
    '4.3.0-cibuild',
    'FHIR Release 4B CI-Builld.',
  );
  public static readonly _4_3_0_SNAPSHOT_1 = new FhirCodeDefinition(
    '_4_3_0_SNAPSHOT_1',
    '4.3.0-snapshot1',
    'http://hl7.org/fhir/FHIR-version',
    '4.3.0-snapshot1',
    'FHIR Release 4B Snapshot #1.',
  );
  public static readonly _4_4 = new FhirCodeDefinition(
    '_4_4',
    '4.4',
    'http://hl7.org/fhir/FHIR-version',
    '4.4',
    'R5 Preview #2 version.',
  );
  public static readonly _4_4_0 = new FhirCodeDefinition(
    '_4_4_0',
    '4.4.0',
    'http://hl7.org/fhir/FHIR-version',
    '4.4.0',
    'R5 Preview #2 + Connectathon 24 (Virtual).',
  );
  public static readonly _4_5 = new FhirCodeDefinition(
    '_4_5',
    '4.5',
    'http://hl7.org/fhir/FHIR-version',
    '4.5',
    'R5 Preview #3 version.',
  );
  public static readonly _4_5_0 = new FhirCodeDefinition(
    '_4_5_0',
    '4.5.0',
    'http://hl7.org/fhir/FHIR-version',
    '4.5.0',
    'R5 Preview #3 + Connectathon 25 (Virtual).',
  );
  public static readonly _4_6 = new FhirCodeDefinition(
    '_4_6',
    '4.6',
    'http://hl7.org/fhir/FHIR-version',
    '4.6',
    'R5 Draft Ballot version.',
  );
  public static readonly _4_6_0 = new FhirCodeDefinition(
    '_4_6_0',
    '4.6.0',
    'http://hl7.org/fhir/FHIR-version',
    '4.6.0',
    'R5 Draft Ballot + Connectathon 27 (Virtual).',
  );
  public static readonly _5_0 = new FhirCodeDefinition(
    '_5_0',
    '5.0',
    'http://hl7.org/fhir/FHIR-version',
    '5.0',
    'R5 Versions.',
  );
  public static readonly _5_0_0 = new FhirCodeDefinition(
    '_5_0_0',
    '5.0.0',
    'http://hl7.org/fhir/FHIR-version',
    '5.0.0',
    'R5 Final Version.',
  );
  public static readonly _5_0_0_CIBUILD = new FhirCodeDefinition(
    '_5_0_0_CIBUILD',
    '5.0.0-cibuild',
    'http://hl7.org/fhir/FHIR-version',
    '5.0.0-cibuild',
    'R5 Rolling ci-build.',
  );
  public static readonly _5_0_0_SNAPSHOT_1 = new FhirCodeDefinition(
    '_5_0_0_SNAPSHOT_1',
    '5.0.0-snapshot1',
    'http://hl7.org/fhir/FHIR-version',
    '5.0.0-snapshot1',
    'R5 Preview #2.',
  );
  public static readonly _5_0_0_SNAPSHOT_2 = new FhirCodeDefinition(
    '_5_0_0_SNAPSHOT_2',
    '5.0.0-snapshot2',
    'http://hl7.org/fhir/FHIR-version',
    '5.0.0-snapshot2',
    'R5 Interim tooling stage.',
  );
  public static readonly _5_0_0_BALLOT = new FhirCodeDefinition(
    '_5_0_0_BALLOT',
    '5.0.0-ballot',
    'http://hl7.org/fhir/FHIR-version',
    '5.0.0-ballot',
    'R5 Ballot.',
  );
  public static readonly _5_0_0_SNAPSHOT_3 = new FhirCodeDefinition(
    '_5_0_0_SNAPSHOT_3',
    '5.0.0-snapshot3',
    'http://hl7.org/fhir/FHIR-version',
    '5.0.0-snapshot3',
    'R5 January 2023 Staging Release + Connectathon 32.',
  );
  public static readonly _5_0_0_DRAFT_FINAL = new FhirCodeDefinition(
    '_5_0_0_DRAFT_FINAL',
    '5.0.0-draft-final',
    'http://hl7.org/fhir/FHIR-version',
    '5.0.0-draft-final',
    'R5 Final QA.',
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
      FhirVersionEnum._0_0,
      FhirVersionEnum._0_0_80,
      FhirVersionEnum._0_0_81,
      FhirVersionEnum._0_0_82,
      FhirVersionEnum._0_4,
      FhirVersionEnum._0_4_0,
      FhirVersionEnum._0_5,
      FhirVersionEnum._0_5_0,
      FhirVersionEnum._1_0,
      FhirVersionEnum._1_0_0,
      FhirVersionEnum._1_0_1,
      FhirVersionEnum._1_0_2,
      FhirVersionEnum._1_1,
      FhirVersionEnum._1_1_0,
      FhirVersionEnum._1_4,
      FhirVersionEnum._1_4_0,
      FhirVersionEnum._1_6,
      FhirVersionEnum._1_6_0,
      FhirVersionEnum._1_8,
      FhirVersionEnum._1_8_0,
      FhirVersionEnum._3_0,
      FhirVersionEnum._3_0_0,
      FhirVersionEnum._3_0_1,
      FhirVersionEnum._3_0_2,
      FhirVersionEnum._3_3,
      FhirVersionEnum._3_3_0,
      FhirVersionEnum._3_5,
      FhirVersionEnum._3_5_0,
      FhirVersionEnum._4_0,
      FhirVersionEnum._4_0_0,
      FhirVersionEnum._4_0_1,
      FhirVersionEnum._4_1,
      FhirVersionEnum._4_1_0,
      FhirVersionEnum._4_2,
      FhirVersionEnum._4_2_0,
      FhirVersionEnum._4_3,
      FhirVersionEnum._4_3_0,
      FhirVersionEnum._4_3_0_CIBUILD,
      FhirVersionEnum._4_3_0_SNAPSHOT_1,
      FhirVersionEnum._4_4,
      FhirVersionEnum._4_4_0,
      FhirVersionEnum._4_5,
      FhirVersionEnum._4_5_0,
      FhirVersionEnum._4_6,
      FhirVersionEnum._4_6_0,
      FhirVersionEnum._5_0,
      FhirVersionEnum._5_0_0,
      FhirVersionEnum._5_0_0_CIBUILD,
      FhirVersionEnum._5_0_0_SNAPSHOT_1,
      FhirVersionEnum._5_0_0_SNAPSHOT_2,
      FhirVersionEnum._5_0_0_BALLOT,
      FhirVersionEnum._5_0_0_SNAPSHOT_3,
      FhirVersionEnum._5_0_0_DRAFT_FINAL,
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
    } else if (FhirVersionEnum._0_0.code === code) {
      return FhirVersionEnum._0_0;
    } else if (FhirVersionEnum._0_0_80.code === code) {
      return FhirVersionEnum._0_0_80;
    } else if (FhirVersionEnum._0_0_81.code === code) {
      return FhirVersionEnum._0_0_81;
    } else if (FhirVersionEnum._0_0_82.code === code) {
      return FhirVersionEnum._0_0_82;
    } else if (FhirVersionEnum._0_4.code === code) {
      return FhirVersionEnum._0_4;
    } else if (FhirVersionEnum._0_4_0.code === code) {
      return FhirVersionEnum._0_4_0;
    } else if (FhirVersionEnum._0_5.code === code) {
      return FhirVersionEnum._0_5;
    } else if (FhirVersionEnum._0_5_0.code === code) {
      return FhirVersionEnum._0_5_0;
    } else if (FhirVersionEnum._1_0.code === code) {
      return FhirVersionEnum._1_0;
    } else if (FhirVersionEnum._1_0_0.code === code) {
      return FhirVersionEnum._1_0_0;
    } else if (FhirVersionEnum._1_0_1.code === code) {
      return FhirVersionEnum._1_0_1;
    } else if (FhirVersionEnum._1_0_2.code === code) {
      return FhirVersionEnum._1_0_2;
    } else if (FhirVersionEnum._1_1.code === code) {
      return FhirVersionEnum._1_1;
    } else if (FhirVersionEnum._1_1_0.code === code) {
      return FhirVersionEnum._1_1_0;
    } else if (FhirVersionEnum._1_4.code === code) {
      return FhirVersionEnum._1_4;
    } else if (FhirVersionEnum._1_4_0.code === code) {
      return FhirVersionEnum._1_4_0;
    } else if (FhirVersionEnum._1_6.code === code) {
      return FhirVersionEnum._1_6;
    } else if (FhirVersionEnum._1_6_0.code === code) {
      return FhirVersionEnum._1_6_0;
    } else if (FhirVersionEnum._1_8.code === code) {
      return FhirVersionEnum._1_8;
    } else if (FhirVersionEnum._1_8_0.code === code) {
      return FhirVersionEnum._1_8_0;
    } else if (FhirVersionEnum._3_0.code === code) {
      return FhirVersionEnum._3_0;
    } else if (FhirVersionEnum._3_0_0.code === code) {
      return FhirVersionEnum._3_0_0;
    } else if (FhirVersionEnum._3_0_1.code === code) {
      return FhirVersionEnum._3_0_1;
    } else if (FhirVersionEnum._3_0_2.code === code) {
      return FhirVersionEnum._3_0_2;
    } else if (FhirVersionEnum._3_3.code === code) {
      return FhirVersionEnum._3_3;
    } else if (FhirVersionEnum._3_3_0.code === code) {
      return FhirVersionEnum._3_3_0;
    } else if (FhirVersionEnum._3_5.code === code) {
      return FhirVersionEnum._3_5;
    } else if (FhirVersionEnum._3_5_0.code === code) {
      return FhirVersionEnum._3_5_0;
    } else if (FhirVersionEnum._4_0.code === code) {
      return FhirVersionEnum._4_0;
    } else if (FhirVersionEnum._4_0_0.code === code) {
      return FhirVersionEnum._4_0_0;
    } else if (FhirVersionEnum._4_0_1.code === code) {
      return FhirVersionEnum._4_0_1;
    } else if (FhirVersionEnum._4_1.code === code) {
      return FhirVersionEnum._4_1;
    } else if (FhirVersionEnum._4_1_0.code === code) {
      return FhirVersionEnum._4_1_0;
    } else if (FhirVersionEnum._4_2.code === code) {
      return FhirVersionEnum._4_2;
    } else if (FhirVersionEnum._4_2_0.code === code) {
      return FhirVersionEnum._4_2_0;
    } else if (FhirVersionEnum._4_3.code === code) {
      return FhirVersionEnum._4_3;
    } else if (FhirVersionEnum._4_3_0.code === code) {
      return FhirVersionEnum._4_3_0;
    } else if (FhirVersionEnum._4_3_0_CIBUILD.code === code) {
      return FhirVersionEnum._4_3_0_CIBUILD;
    } else if (FhirVersionEnum._4_3_0_SNAPSHOT_1.code === code) {
      return FhirVersionEnum._4_3_0_SNAPSHOT_1;
    } else if (FhirVersionEnum._4_4.code === code) {
      return FhirVersionEnum._4_4;
    } else if (FhirVersionEnum._4_4_0.code === code) {
      return FhirVersionEnum._4_4_0;
    } else if (FhirVersionEnum._4_5.code === code) {
      return FhirVersionEnum._4_5;
    } else if (FhirVersionEnum._4_5_0.code === code) {
      return FhirVersionEnum._4_5_0;
    } else if (FhirVersionEnum._4_6.code === code) {
      return FhirVersionEnum._4_6;
    } else if (FhirVersionEnum._4_6_0.code === code) {
      return FhirVersionEnum._4_6_0;
    } else if (FhirVersionEnum._5_0.code === code) {
      return FhirVersionEnum._5_0;
    } else if (FhirVersionEnum._5_0_0.code === code) {
      return FhirVersionEnum._5_0_0;
    } else if (FhirVersionEnum._5_0_0_CIBUILD.code === code) {
      return FhirVersionEnum._5_0_0_CIBUILD;
    } else if (FhirVersionEnum._5_0_0_SNAPSHOT_1.code === code) {
      return FhirVersionEnum._5_0_0_SNAPSHOT_1;
    } else if (FhirVersionEnum._5_0_0_SNAPSHOT_2.code === code) {
      return FhirVersionEnum._5_0_0_SNAPSHOT_2;
    } else if (FhirVersionEnum._5_0_0_BALLOT.code === code) {
      return FhirVersionEnum._5_0_0_BALLOT;
    } else if (FhirVersionEnum._5_0_0_SNAPSHOT_3.code === code) {
      return FhirVersionEnum._5_0_0_SNAPSHOT_3;
    } else if (FhirVersionEnum._5_0_0_DRAFT_FINAL.code === code) {
      return FhirVersionEnum._5_0_0_DRAFT_FINAL;
    } else if (FhirVersionEnum.NULL.code === code) {
      return FhirVersionEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown FhirVersionEnum 'code' value '${code}'`);
    }
  }
}
