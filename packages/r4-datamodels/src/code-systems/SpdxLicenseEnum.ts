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
 * SpdxLicenseEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/spdx-license
 * CodeSystem.name: SpdxLicense
 * CodeSystem.description: The license that applies to an Implementation Guide (using an SPDX license Identifiers, or \'not-open-source\'). The binding is required but new SPDX license Identifiers are allowed to be used (https://spdx.org/licenses/).
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
 * FHIR CodeSystem: SpdxLicenseEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem SpdxLicense](http://hl7.org/fhir/spdx-license)
 */
export class SpdxLicenseEnum implements IFhirCodeEnum {
  public static readonly NOT_OPEN_SOURCE = new FhirCodeDefinition(
    'NOT_OPEN_SOURCE',
    'not-open-source',
    'http://hl7.org/fhir/spdx-license',
    'Not open source',
    'Not an open source license.',
  );
  public static readonly _0_BSD = new FhirCodeDefinition(
    '_0_BSD',
    '0BSD',
    'http://hl7.org/fhir/spdx-license',
    'BSD Zero Clause License',
    'BSD Zero Clause License.',
  );
  public static readonly AAL = new FhirCodeDefinition(
    'AAL',
    'AAL',
    'http://hl7.org/fhir/spdx-license',
    'Attribution Assurance License',
    'Attribution Assurance License.',
  );
  public static readonly ABSTYLES = new FhirCodeDefinition(
    'ABSTYLES',
    'Abstyles',
    'http://hl7.org/fhir/spdx-license',
    'Abstyles License',
    'Abstyles License.',
  );
  public static readonly ADOBE_2006 = new FhirCodeDefinition(
    'ADOBE_2006',
    'Adobe-2006',
    'http://hl7.org/fhir/spdx-license',
    'Adobe Systems Incorporated Source Code License Agreement',
    'Adobe Systems Incorporated Source Code License Agreement.',
  );
  public static readonly ADOBE_GLYPH = new FhirCodeDefinition(
    'ADOBE_GLYPH',
    'Adobe-Glyph',
    'http://hl7.org/fhir/spdx-license',
    'Adobe Glyph List License',
    'Adobe Glyph List License.',
  );
  public static readonly ADSL = new FhirCodeDefinition(
    'ADSL',
    'ADSL',
    'http://hl7.org/fhir/spdx-license',
    'Amazon Digital Services License',
    'Amazon Digital Services License.',
  );
  public static readonly AFL_1_1 = new FhirCodeDefinition(
    'AFL_1_1',
    'AFL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Academic Free License v1.1',
    'Academic Free License v1.1.',
  );
  public static readonly AFL_1_2 = new FhirCodeDefinition(
    'AFL_1_2',
    'AFL-1.2',
    'http://hl7.org/fhir/spdx-license',
    'Academic Free License v1.2',
    'Academic Free License v1.2.',
  );
  public static readonly AFL_2_0 = new FhirCodeDefinition(
    'AFL_2_0',
    'AFL-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Academic Free License v2.0',
    'Academic Free License v2.0.',
  );
  public static readonly AFL_2_1 = new FhirCodeDefinition(
    'AFL_2_1',
    'AFL-2.1',
    'http://hl7.org/fhir/spdx-license',
    'Academic Free License v2.1',
    'Academic Free License v2.1.',
  );
  public static readonly AFL_3_0 = new FhirCodeDefinition(
    'AFL_3_0',
    'AFL-3.0',
    'http://hl7.org/fhir/spdx-license',
    'Academic Free License v3.0',
    'Academic Free License v3.0.',
  );
  public static readonly AFMPARSE = new FhirCodeDefinition(
    'AFMPARSE',
    'Afmparse',
    'http://hl7.org/fhir/spdx-license',
    'Afmparse License',
    'Afmparse License.',
  );
  public static readonly AGPL_1_0_ONLY = new FhirCodeDefinition(
    'AGPL_1_0_ONLY',
    'AGPL-1.0-only',
    'http://hl7.org/fhir/spdx-license',
    'Affero General Public License v1.0 only',
    'Affero General Public License v1.0 only.',
  );
  public static readonly AGPL_1_0_OR_LATER = new FhirCodeDefinition(
    'AGPL_1_0_OR_LATER',
    'AGPL-1.0-or-later',
    'http://hl7.org/fhir/spdx-license',
    'Affero General Public License v1.0 or later',
    'Affero General Public License v1.0 or later.',
  );
  public static readonly AGPL_3_0_ONLY = new FhirCodeDefinition(
    'AGPL_3_0_ONLY',
    'AGPL-3.0-only',
    'http://hl7.org/fhir/spdx-license',
    'GNU Affero General Public License v3.0 only',
    'GNU Affero General Public License v3.0 only.',
  );
  public static readonly AGPL_3_0_OR_LATER = new FhirCodeDefinition(
    'AGPL_3_0_OR_LATER',
    'AGPL-3.0-or-later',
    'http://hl7.org/fhir/spdx-license',
    'GNU Affero General Public License v3.0 or later',
    'GNU Affero General Public License v3.0 or later.',
  );
  public static readonly ALADDIN = new FhirCodeDefinition(
    'ALADDIN',
    'Aladdin',
    'http://hl7.org/fhir/spdx-license',
    'Aladdin Free Public License',
    'Aladdin Free Public License.',
  );
  public static readonly AMDPLPA = new FhirCodeDefinition(
    'AMDPLPA',
    'AMDPLPA',
    'http://hl7.org/fhir/spdx-license',
    'AMD\'s plpa_map.c License',
    'AMD\'s plpa_map.c License.',
  );
  public static readonly AML = new FhirCodeDefinition(
    'AML',
    'AML',
    'http://hl7.org/fhir/spdx-license',
    'Apple MIT License',
    'Apple MIT License.',
  );
  public static readonly AMPAS = new FhirCodeDefinition(
    'AMPAS',
    'AMPAS',
    'http://hl7.org/fhir/spdx-license',
    'Academy of Motion Picture Arts and Sciences BSD',
    'Academy of Motion Picture Arts and Sciences BSD.',
  );
  public static readonly ANTLR_PD = new FhirCodeDefinition(
    'ANTLR_PD',
    'ANTLR-PD',
    'http://hl7.org/fhir/spdx-license',
    'ANTLR Software Rights Notice',
    'ANTLR Software Rights Notice.',
  );
  public static readonly APACHE_1_0 = new FhirCodeDefinition(
    'APACHE_1_0',
    'Apache-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Apache License 1.0',
    'Apache License 1.0.',
  );
  public static readonly APACHE_1_1 = new FhirCodeDefinition(
    'APACHE_1_1',
    'Apache-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Apache License 1.1',
    'Apache License 1.1.',
  );
  public static readonly APACHE_2_0 = new FhirCodeDefinition(
    'APACHE_2_0',
    'Apache-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Apache License 2.0',
    'Apache License 2.0.',
  );
  public static readonly APAFML = new FhirCodeDefinition(
    'APAFML',
    'APAFML',
    'http://hl7.org/fhir/spdx-license',
    'Adobe Postscript AFM License',
    'Adobe Postscript AFM License.',
  );
  public static readonly APL_1_0 = new FhirCodeDefinition(
    'APL_1_0',
    'APL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Adaptive Public License 1.0',
    'Adaptive Public License 1.0.',
  );
  public static readonly APSL_1_0 = new FhirCodeDefinition(
    'APSL_1_0',
    'APSL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Apple Public Source License 1.0',
    'Apple Public Source License 1.0.',
  );
  public static readonly APSL_1_1 = new FhirCodeDefinition(
    'APSL_1_1',
    'APSL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Apple Public Source License 1.1',
    'Apple Public Source License 1.1.',
  );
  public static readonly APSL_1_2 = new FhirCodeDefinition(
    'APSL_1_2',
    'APSL-1.2',
    'http://hl7.org/fhir/spdx-license',
    'Apple Public Source License 1.2',
    'Apple Public Source License 1.2.',
  );
  public static readonly APSL_2_0 = new FhirCodeDefinition(
    'APSL_2_0',
    'APSL-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Apple Public Source License 2.0',
    'Apple Public Source License 2.0.',
  );
  public static readonly ARTISTIC_1_0_CL_8 = new FhirCodeDefinition(
    'ARTISTIC_1_0_CL_8',
    'Artistic-1.0-cl8',
    'http://hl7.org/fhir/spdx-license',
    'Artistic License 1.0 w/clause 8',
    'Artistic License 1.0 w/clause 8.',
  );
  public static readonly ARTISTIC_1_0_PERL = new FhirCodeDefinition(
    'ARTISTIC_1_0_PERL',
    'Artistic-1.0-Perl',
    'http://hl7.org/fhir/spdx-license',
    'Artistic License 1.0 (Perl)',
    'Artistic License 1.0 (Perl).',
  );
  public static readonly ARTISTIC_1_0 = new FhirCodeDefinition(
    'ARTISTIC_1_0',
    'Artistic-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Artistic License 1.0',
    'Artistic License 1.0.',
  );
  public static readonly ARTISTIC_2_0 = new FhirCodeDefinition(
    'ARTISTIC_2_0',
    'Artistic-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Artistic License 2.0',
    'Artistic License 2.0.',
  );
  public static readonly BAHYPH = new FhirCodeDefinition(
    'BAHYPH',
    'Bahyph',
    'http://hl7.org/fhir/spdx-license',
    'Bahyph License',
    'Bahyph License.',
  );
  public static readonly BARR = new FhirCodeDefinition(
    'BARR',
    'Barr',
    'http://hl7.org/fhir/spdx-license',
    'Barr License',
    'Barr License.',
  );
  public static readonly BEERWARE = new FhirCodeDefinition(
    'BEERWARE',
    'Beerware',
    'http://hl7.org/fhir/spdx-license',
    'Beerware License',
    'Beerware License.',
  );
  public static readonly BIT_TORRENT_1_0 = new FhirCodeDefinition(
    'BIT_TORRENT_1_0',
    'BitTorrent-1.0',
    'http://hl7.org/fhir/spdx-license',
    'BitTorrent Open Source License v1.0',
    'BitTorrent Open Source License v1.0.',
  );
  public static readonly BIT_TORRENT_1_1 = new FhirCodeDefinition(
    'BIT_TORRENT_1_1',
    'BitTorrent-1.1',
    'http://hl7.org/fhir/spdx-license',
    'BitTorrent Open Source License v1.1',
    'BitTorrent Open Source License v1.1.',
  );
  public static readonly BORCEUX = new FhirCodeDefinition(
    'BORCEUX',
    'Borceux',
    'http://hl7.org/fhir/spdx-license',
    'Borceux license',
    'Borceux license.',
  );
  public static readonly BSD_1_CLAUSE = new FhirCodeDefinition(
    'BSD_1_CLAUSE',
    'BSD-1-Clause',
    'http://hl7.org/fhir/spdx-license',
    'BSD 1-Clause License',
    'BSD 1-Clause License.',
  );
  public static readonly BSD_2_CLAUSE_FREE_BSD = new FhirCodeDefinition(
    'BSD_2_CLAUSE_FREE_BSD',
    'BSD-2-Clause-FreeBSD',
    'http://hl7.org/fhir/spdx-license',
    'BSD 2-Clause FreeBSD License',
    'BSD 2-Clause FreeBSD License.',
  );
  public static readonly BSD_2_CLAUSE_NET_BSD = new FhirCodeDefinition(
    'BSD_2_CLAUSE_NET_BSD',
    'BSD-2-Clause-NetBSD',
    'http://hl7.org/fhir/spdx-license',
    'BSD 2-Clause NetBSD License',
    'BSD 2-Clause NetBSD License.',
  );
  public static readonly BSD_2_CLAUSE_PATENT = new FhirCodeDefinition(
    'BSD_2_CLAUSE_PATENT',
    'BSD-2-Clause-Patent',
    'http://hl7.org/fhir/spdx-license',
    'BSD-2-Clause Plus Patent License',
    'BSD-2-Clause Plus Patent License.',
  );
  public static readonly BSD_2_CLAUSE = new FhirCodeDefinition(
    'BSD_2_CLAUSE',
    'BSD-2-Clause',
    'http://hl7.org/fhir/spdx-license',
    'BSD 2-Clause "Simplified" License',
    'BSD 2-Clause "Simplified" License.',
  );
  public static readonly BSD_3_CLAUSE_ATTRIBUTION = new FhirCodeDefinition(
    'BSD_3_CLAUSE_ATTRIBUTION',
    'BSD-3-Clause-Attribution',
    'http://hl7.org/fhir/spdx-license',
    'BSD with attribution',
    'BSD with attribution.',
  );
  public static readonly BSD_3_CLAUSE_CLEAR = new FhirCodeDefinition(
    'BSD_3_CLAUSE_CLEAR',
    'BSD-3-Clause-Clear',
    'http://hl7.org/fhir/spdx-license',
    'BSD 3-Clause Clear License',
    'BSD 3-Clause Clear License.',
  );
  public static readonly BSD_3_CLAUSE_LBNL = new FhirCodeDefinition(
    'BSD_3_CLAUSE_LBNL',
    'BSD-3-Clause-LBNL',
    'http://hl7.org/fhir/spdx-license',
    'Lawrence Berkeley National Labs BSD variant license',
    'Lawrence Berkeley National Labs BSD variant license.',
  );
  public static readonly BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014 = new FhirCodeDefinition(
    'BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014',
    'BSD-3-Clause-No-Nuclear-License-2014',
    'http://hl7.org/fhir/spdx-license',
    'BSD 3-Clause No Nuclear License 2014',
    'BSD 3-Clause No Nuclear License 2014.',
  );
  public static readonly BSD_3_CLAUSE_NO_NUCLEAR_LICENSE = new FhirCodeDefinition(
    'BSD_3_CLAUSE_NO_NUCLEAR_LICENSE',
    'BSD-3-Clause-No-Nuclear-License',
    'http://hl7.org/fhir/spdx-license',
    'BSD 3-Clause No Nuclear License',
    'BSD 3-Clause No Nuclear License.',
  );
  public static readonly BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY = new FhirCodeDefinition(
    'BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY',
    'BSD-3-Clause-No-Nuclear-Warranty',
    'http://hl7.org/fhir/spdx-license',
    'BSD 3-Clause No Nuclear Warranty',
    'BSD 3-Clause No Nuclear Warranty.',
  );
  public static readonly BSD_3_CLAUSE = new FhirCodeDefinition(
    'BSD_3_CLAUSE',
    'BSD-3-Clause',
    'http://hl7.org/fhir/spdx-license',
    'BSD 3-Clause "New" or "Revised" License',
    'BSD 3-Clause "New" or "Revised" License.',
  );
  public static readonly BSD_4_CLAUSE_UC = new FhirCodeDefinition(
    'BSD_4_CLAUSE_UC',
    'BSD-4-Clause-UC',
    'http://hl7.org/fhir/spdx-license',
    'BSD-4-Clause (University of California-Specific)',
    'BSD-4-Clause (University of California-Specific).',
  );
  public static readonly BSD_4_CLAUSE = new FhirCodeDefinition(
    'BSD_4_CLAUSE',
    'BSD-4-Clause',
    'http://hl7.org/fhir/spdx-license',
    'BSD 4-Clause "Original" or "Old" License',
    'BSD 4-Clause "Original" or "Old" License.',
  );
  public static readonly BSD_PROTECTION = new FhirCodeDefinition(
    'BSD_PROTECTION',
    'BSD-Protection',
    'http://hl7.org/fhir/spdx-license',
    'BSD Protection License',
    'BSD Protection License.',
  );
  public static readonly BSD_SOURCE_CODE = new FhirCodeDefinition(
    'BSD_SOURCE_CODE',
    'BSD-Source-Code',
    'http://hl7.org/fhir/spdx-license',
    'BSD Source Code Attribution',
    'BSD Source Code Attribution.',
  );
  public static readonly BSL_1_0 = new FhirCodeDefinition(
    'BSL_1_0',
    'BSL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Boost Software License 1.0',
    'Boost Software License 1.0.',
  );
  public static readonly BZIP_2_1_0_5 = new FhirCodeDefinition(
    'BZIP_2_1_0_5',
    'bzip2-1.0.5',
    'http://hl7.org/fhir/spdx-license',
    'bzip2 and libbzip2 License v1.0.5',
    'bzip2 and libbzip2 License v1.0.5.',
  );
  public static readonly BZIP_2_1_0_6 = new FhirCodeDefinition(
    'BZIP_2_1_0_6',
    'bzip2-1.0.6',
    'http://hl7.org/fhir/spdx-license',
    'bzip2 and libbzip2 License v1.0.6',
    'bzip2 and libbzip2 License v1.0.6.',
  );
  public static readonly CALDERA = new FhirCodeDefinition(
    'CALDERA',
    'Caldera',
    'http://hl7.org/fhir/spdx-license',
    'Caldera License',
    'Caldera License.',
  );
  public static readonly CATOSL_1_1 = new FhirCodeDefinition(
    'CATOSL_1_1',
    'CATOSL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Computer Associates Trusted Open Source License 1.1',
    'Computer Associates Trusted Open Source License 1.1.',
  );
  public static readonly CC_BY_1_0 = new FhirCodeDefinition(
    'CC_BY_1_0',
    'CC-BY-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution 1.0 Generic',
    'Creative Commons Attribution 1.0 Generic.',
  );
  public static readonly CC_BY_2_0 = new FhirCodeDefinition(
    'CC_BY_2_0',
    'CC-BY-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution 2.0 Generic',
    'Creative Commons Attribution 2.0 Generic.',
  );
  public static readonly CC_BY_2_5 = new FhirCodeDefinition(
    'CC_BY_2_5',
    'CC-BY-2.5',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution 2.5 Generic',
    'Creative Commons Attribution 2.5 Generic.',
  );
  public static readonly CC_BY_3_0 = new FhirCodeDefinition(
    'CC_BY_3_0',
    'CC-BY-3.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution 3.0 Unported',
    'Creative Commons Attribution 3.0 Unported.',
  );
  public static readonly CC_BY_4_0 = new FhirCodeDefinition(
    'CC_BY_4_0',
    'CC-BY-4.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution 4.0 International',
    'Creative Commons Attribution 4.0 International.',
  );
  public static readonly CC_BY_NC_1_0 = new FhirCodeDefinition(
    'CC_BY_NC_1_0',
    'CC-BY-NC-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial 1.0 Generic',
    'Creative Commons Attribution Non Commercial 1.0 Generic.',
  );
  public static readonly CC_BY_NC_2_0 = new FhirCodeDefinition(
    'CC_BY_NC_2_0',
    'CC-BY-NC-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial 2.0 Generic',
    'Creative Commons Attribution Non Commercial 2.0 Generic.',
  );
  public static readonly CC_BY_NC_2_5 = new FhirCodeDefinition(
    'CC_BY_NC_2_5',
    'CC-BY-NC-2.5',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial 2.5 Generic',
    'Creative Commons Attribution Non Commercial 2.5 Generic.',
  );
  public static readonly CC_BY_NC_3_0 = new FhirCodeDefinition(
    'CC_BY_NC_3_0',
    'CC-BY-NC-3.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial 3.0 Unported',
    'Creative Commons Attribution Non Commercial 3.0 Unported.',
  );
  public static readonly CC_BY_NC_4_0 = new FhirCodeDefinition(
    'CC_BY_NC_4_0',
    'CC-BY-NC-4.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial 4.0 International',
    'Creative Commons Attribution Non Commercial 4.0 International.',
  );
  public static readonly CC_BY_NC_ND_1_0 = new FhirCodeDefinition(
    'CC_BY_NC_ND_1_0',
    'CC-BY-NC-ND-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial No Derivatives 1.0 Generic',
    'Creative Commons Attribution Non Commercial No Derivatives 1.0 Generic.',
  );
  public static readonly CC_BY_NC_ND_2_0 = new FhirCodeDefinition(
    'CC_BY_NC_ND_2_0',
    'CC-BY-NC-ND-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic',
    'Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic.',
  );
  public static readonly CC_BY_NC_ND_2_5 = new FhirCodeDefinition(
    'CC_BY_NC_ND_2_5',
    'CC-BY-NC-ND-2.5',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic',
    'Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic.',
  );
  public static readonly CC_BY_NC_ND_3_0 = new FhirCodeDefinition(
    'CC_BY_NC_ND_3_0',
    'CC-BY-NC-ND-3.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial No Derivatives 3.0 Unported',
    'Creative Commons Attribution Non Commercial No Derivatives 3.0 Unported.',
  );
  public static readonly CC_BY_NC_ND_4_0 = new FhirCodeDefinition(
    'CC_BY_NC_ND_4_0',
    'CC-BY-NC-ND-4.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial No Derivatives 4.0 International',
    'Creative Commons Attribution Non Commercial No Derivatives 4.0 International.',
  );
  public static readonly CC_BY_NC_SA_1_0 = new FhirCodeDefinition(
    'CC_BY_NC_SA_1_0',
    'CC-BY-NC-SA-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial Share Alike 1.0 Generic',
    'Creative Commons Attribution Non Commercial Share Alike 1.0 Generic.',
  );
  public static readonly CC_BY_NC_SA_2_0 = new FhirCodeDefinition(
    'CC_BY_NC_SA_2_0',
    'CC-BY-NC-SA-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial Share Alike 2.0 Generic',
    'Creative Commons Attribution Non Commercial Share Alike 2.0 Generic.',
  );
  public static readonly CC_BY_NC_SA_2_5 = new FhirCodeDefinition(
    'CC_BY_NC_SA_2_5',
    'CC-BY-NC-SA-2.5',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial Share Alike 2.5 Generic',
    'Creative Commons Attribution Non Commercial Share Alike 2.5 Generic.',
  );
  public static readonly CC_BY_NC_SA_3_0 = new FhirCodeDefinition(
    'CC_BY_NC_SA_3_0',
    'CC-BY-NC-SA-3.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial Share Alike 3.0 Unported',
    'Creative Commons Attribution Non Commercial Share Alike 3.0 Unported.',
  );
  public static readonly CC_BY_NC_SA_4_0 = new FhirCodeDefinition(
    'CC_BY_NC_SA_4_0',
    'CC-BY-NC-SA-4.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Non Commercial Share Alike 4.0 International',
    'Creative Commons Attribution Non Commercial Share Alike 4.0 International.',
  );
  public static readonly CC_BY_ND_1_0 = new FhirCodeDefinition(
    'CC_BY_ND_1_0',
    'CC-BY-ND-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution No Derivatives 1.0 Generic',
    'Creative Commons Attribution No Derivatives 1.0 Generic.',
  );
  public static readonly CC_BY_ND_2_0 = new FhirCodeDefinition(
    'CC_BY_ND_2_0',
    'CC-BY-ND-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution No Derivatives 2.0 Generic',
    'Creative Commons Attribution No Derivatives 2.0 Generic.',
  );
  public static readonly CC_BY_ND_2_5 = new FhirCodeDefinition(
    'CC_BY_ND_2_5',
    'CC-BY-ND-2.5',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution No Derivatives 2.5 Generic',
    'Creative Commons Attribution No Derivatives 2.5 Generic.',
  );
  public static readonly CC_BY_ND_3_0 = new FhirCodeDefinition(
    'CC_BY_ND_3_0',
    'CC-BY-ND-3.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution No Derivatives 3.0 Unported',
    'Creative Commons Attribution No Derivatives 3.0 Unported.',
  );
  public static readonly CC_BY_ND_4_0 = new FhirCodeDefinition(
    'CC_BY_ND_4_0',
    'CC-BY-ND-4.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution No Derivatives 4.0 International',
    'Creative Commons Attribution No Derivatives 4.0 International.',
  );
  public static readonly CC_BY_SA_1_0 = new FhirCodeDefinition(
    'CC_BY_SA_1_0',
    'CC-BY-SA-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Share Alike 1.0 Generic',
    'Creative Commons Attribution Share Alike 1.0 Generic.',
  );
  public static readonly CC_BY_SA_2_0 = new FhirCodeDefinition(
    'CC_BY_SA_2_0',
    'CC-BY-SA-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Share Alike 2.0 Generic',
    'Creative Commons Attribution Share Alike 2.0 Generic.',
  );
  public static readonly CC_BY_SA_2_5 = new FhirCodeDefinition(
    'CC_BY_SA_2_5',
    'CC-BY-SA-2.5',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Share Alike 2.5 Generic',
    'Creative Commons Attribution Share Alike 2.5 Generic.',
  );
  public static readonly CC_BY_SA_3_0 = new FhirCodeDefinition(
    'CC_BY_SA_3_0',
    'CC-BY-SA-3.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Share Alike 3.0 Unported',
    'Creative Commons Attribution Share Alike 3.0 Unported.',
  );
  public static readonly CC_BY_SA_4_0 = new FhirCodeDefinition(
    'CC_BY_SA_4_0',
    'CC-BY-SA-4.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Attribution Share Alike 4.0 International',
    'Creative Commons Attribution Share Alike 4.0 International.',
  );
  public static readonly CC_0_1_0 = new FhirCodeDefinition(
    'CC_0_1_0',
    'CC0-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Creative Commons Zero v1.0 Universal',
    'Creative Commons Zero v1.0 Universal.',
  );
  public static readonly CDDL_1_0 = new FhirCodeDefinition(
    'CDDL_1_0',
    'CDDL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Common Development and Distribution License 1.0',
    'Common Development and Distribution License 1.0.',
  );
  public static readonly CDDL_1_1 = new FhirCodeDefinition(
    'CDDL_1_1',
    'CDDL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Common Development and Distribution License 1.1',
    'Common Development and Distribution License 1.1.',
  );
  public static readonly CDLA_PERMISSIVE_1_0 = new FhirCodeDefinition(
    'CDLA_PERMISSIVE_1_0',
    'CDLA-Permissive-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Community Data License Agreement Permissive 1.0',
    'Community Data License Agreement Permissive 1.0.',
  );
  public static readonly CDLA_SHARING_1_0 = new FhirCodeDefinition(
    'CDLA_SHARING_1_0',
    'CDLA-Sharing-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Community Data License Agreement Sharing 1.0',
    'Community Data License Agreement Sharing 1.0.',
  );
  public static readonly CECILL_1_0 = new FhirCodeDefinition(
    'CECILL_1_0',
    'CECILL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'CeCILL Free Software License Agreement v1.0',
    'CeCILL Free Software License Agreement v1.0.',
  );
  public static readonly CECILL_1_1 = new FhirCodeDefinition(
    'CECILL_1_1',
    'CECILL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'CeCILL Free Software License Agreement v1.1',
    'CeCILL Free Software License Agreement v1.1.',
  );
  public static readonly CECILL_2_0 = new FhirCodeDefinition(
    'CECILL_2_0',
    'CECILL-2.0',
    'http://hl7.org/fhir/spdx-license',
    'CeCILL Free Software License Agreement v2.0',
    'CeCILL Free Software License Agreement v2.0.',
  );
  public static readonly CECILL_2_1 = new FhirCodeDefinition(
    'CECILL_2_1',
    'CECILL-2.1',
    'http://hl7.org/fhir/spdx-license',
    'CeCILL Free Software License Agreement v2.1',
    'CeCILL Free Software License Agreement v2.1.',
  );
  public static readonly CECILL_B = new FhirCodeDefinition(
    'CECILL_B',
    'CECILL-B',
    'http://hl7.org/fhir/spdx-license',
    'CeCILL-B Free Software License Agreement',
    'CeCILL-B Free Software License Agreement.',
  );
  public static readonly CECILL_C = new FhirCodeDefinition(
    'CECILL_C',
    'CECILL-C',
    'http://hl7.org/fhir/spdx-license',
    'CeCILL-C Free Software License Agreement',
    'CeCILL-C Free Software License Agreement.',
  );
  public static readonly CL_ARTISTIC = new FhirCodeDefinition(
    'CL_ARTISTIC',
    'ClArtistic',
    'http://hl7.org/fhir/spdx-license',
    'Clarified Artistic License',
    'Clarified Artistic License.',
  );
  public static readonly CNRI_JYTHON = new FhirCodeDefinition(
    'CNRI_JYTHON',
    'CNRI-Jython',
    'http://hl7.org/fhir/spdx-license',
    'CNRI Jython License',
    'CNRI Jython License.',
  );
  public static readonly CNRI_PYTHON_GPL_COMPATIBLE = new FhirCodeDefinition(
    'CNRI_PYTHON_GPL_COMPATIBLE',
    'CNRI-Python-GPL-Compatible',
    'http://hl7.org/fhir/spdx-license',
    'CNRI Python Open Source GPL Compatible License Agreement',
    'CNRI Python Open Source GPL Compatible License Agreement.',
  );
  public static readonly CNRI_PYTHON = new FhirCodeDefinition(
    'CNRI_PYTHON',
    'CNRI-Python',
    'http://hl7.org/fhir/spdx-license',
    'CNRI Python License',
    'CNRI Python License.',
  );
  public static readonly CONDOR_1_1 = new FhirCodeDefinition(
    'CONDOR_1_1',
    'Condor-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Condor Public License v1.1',
    'Condor Public License v1.1.',
  );
  public static readonly CPAL_1_0 = new FhirCodeDefinition(
    'CPAL_1_0',
    'CPAL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Common Public Attribution License 1.0',
    'Common Public Attribution License 1.0.',
  );
  public static readonly CPL_1_0 = new FhirCodeDefinition(
    'CPL_1_0',
    'CPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Common Public License 1.0',
    'Common Public License 1.0.',
  );
  public static readonly CPOL_1_02 = new FhirCodeDefinition(
    'CPOL_1_02',
    'CPOL-1.02',
    'http://hl7.org/fhir/spdx-license',
    'Code Project Open License 1.02',
    'Code Project Open License 1.02.',
  );
  public static readonly CROSSWORD = new FhirCodeDefinition(
    'CROSSWORD',
    'Crossword',
    'http://hl7.org/fhir/spdx-license',
    'Crossword License',
    'Crossword License.',
  );
  public static readonly CRYSTAL_STACKER = new FhirCodeDefinition(
    'CRYSTAL_STACKER',
    'CrystalStacker',
    'http://hl7.org/fhir/spdx-license',
    'CrystalStacker License',
    'CrystalStacker License.',
  );
  public static readonly CUA_OPL_1_0 = new FhirCodeDefinition(
    'CUA_OPL_1_0',
    'CUA-OPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'CUA Office Public License v1.0',
    'CUA Office Public License v1.0.',
  );
  public static readonly CUBE = new FhirCodeDefinition(
    'CUBE',
    'Cube',
    'http://hl7.org/fhir/spdx-license',
    'Cube License',
    'Cube License.',
  );
  public static readonly CURL = new FhirCodeDefinition(
    'CURL',
    'curl',
    'http://hl7.org/fhir/spdx-license',
    'curl License',
    'curl License.',
  );
  public static readonly D_FSL_1_0 = new FhirCodeDefinition(
    'D_FSL_1_0',
    'D-FSL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Deutsche Freie Software Lizenz',
    'Deutsche Freie Software Lizenz.',
  );
  public static readonly DIFFMARK = new FhirCodeDefinition(
    'DIFFMARK',
    'diffmark',
    'http://hl7.org/fhir/spdx-license',
    'diffmark license',
    'diffmark license.',
  );
  public static readonly DOC = new FhirCodeDefinition(
    'DOC',
    'DOC',
    'http://hl7.org/fhir/spdx-license',
    'DOC License',
    'DOC License.',
  );
  public static readonly DOTSEQN = new FhirCodeDefinition(
    'DOTSEQN',
    'Dotseqn',
    'http://hl7.org/fhir/spdx-license',
    'Dotseqn License',
    'Dotseqn License.',
  );
  public static readonly DSDP = new FhirCodeDefinition(
    'DSDP',
    'DSDP',
    'http://hl7.org/fhir/spdx-license',
    'DSDP License',
    'DSDP License.',
  );
  public static readonly DVIPDFM = new FhirCodeDefinition(
    'DVIPDFM',
    'dvipdfm',
    'http://hl7.org/fhir/spdx-license',
    'dvipdfm License',
    'dvipdfm License.',
  );
  public static readonly ECL_1_0 = new FhirCodeDefinition(
    'ECL_1_0',
    'ECL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Educational Community License v1.0',
    'Educational Community License v1.0.',
  );
  public static readonly ECL_2_0 = new FhirCodeDefinition(
    'ECL_2_0',
    'ECL-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Educational Community License v2.0',
    'Educational Community License v2.0.',
  );
  public static readonly EFL_1_0 = new FhirCodeDefinition(
    'EFL_1_0',
    'EFL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Eiffel Forum License v1.0',
    'Eiffel Forum License v1.0.',
  );
  public static readonly EFL_2_0 = new FhirCodeDefinition(
    'EFL_2_0',
    'EFL-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Eiffel Forum License v2.0',
    'Eiffel Forum License v2.0.',
  );
  public static readonly E_GENIX = new FhirCodeDefinition(
    'E_GENIX',
    'eGenix',
    'http://hl7.org/fhir/spdx-license',
    'eGenix.com Public License 1.1.0',
    'eGenix.com Public License 1.1.0.',
  );
  public static readonly ENTESSA = new FhirCodeDefinition(
    'ENTESSA',
    'Entessa',
    'http://hl7.org/fhir/spdx-license',
    'Entessa Public License v1.0',
    'Entessa Public License v1.0.',
  );
  public static readonly EPL_1_0 = new FhirCodeDefinition(
    'EPL_1_0',
    'EPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Eclipse Public License 1.0',
    'Eclipse Public License 1.0.',
  );
  public static readonly EPL_2_0 = new FhirCodeDefinition(
    'EPL_2_0',
    'EPL-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Eclipse Public License 2.0',
    'Eclipse Public License 2.0.',
  );
  public static readonly ERL_PL_1_1 = new FhirCodeDefinition(
    'ERL_PL_1_1',
    'ErlPL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Erlang Public License v1.1',
    'Erlang Public License v1.1.',
  );
  public static readonly EU_DATAGRID = new FhirCodeDefinition(
    'EU_DATAGRID',
    'EUDatagrid',
    'http://hl7.org/fhir/spdx-license',
    'EU DataGrid Software License',
    'EU DataGrid Software License.',
  );
  public static readonly EUPL_1_0 = new FhirCodeDefinition(
    'EUPL_1_0',
    'EUPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'European Union Public License 1.0',
    'European Union Public License 1.0.',
  );
  public static readonly EUPL_1_1 = new FhirCodeDefinition(
    'EUPL_1_1',
    'EUPL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'European Union Public License 1.1',
    'European Union Public License 1.1.',
  );
  public static readonly EUPL_1_2 = new FhirCodeDefinition(
    'EUPL_1_2',
    'EUPL-1.2',
    'http://hl7.org/fhir/spdx-license',
    'European Union Public License 1.2',
    'European Union Public License 1.2.',
  );
  public static readonly EUROSYM = new FhirCodeDefinition(
    'EUROSYM',
    'Eurosym',
    'http://hl7.org/fhir/spdx-license',
    'Eurosym License',
    'Eurosym License.',
  );
  public static readonly FAIR = new FhirCodeDefinition(
    'FAIR',
    'Fair',
    'http://hl7.org/fhir/spdx-license',
    'Fair License',
    'Fair License.',
  );
  public static readonly FRAMEWORX_1_0 = new FhirCodeDefinition(
    'FRAMEWORX_1_0',
    'Frameworx-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Frameworx Open License 1.0',
    'Frameworx Open License 1.0.',
  );
  public static readonly FREE_IMAGE = new FhirCodeDefinition(
    'FREE_IMAGE',
    'FreeImage',
    'http://hl7.org/fhir/spdx-license',
    'FreeImage Public License v1.0',
    'FreeImage Public License v1.0.',
  );
  public static readonly FSFAP = new FhirCodeDefinition(
    'FSFAP',
    'FSFAP',
    'http://hl7.org/fhir/spdx-license',
    'FSF All Permissive License',
    'FSF All Permissive License.',
  );
  public static readonly FSFUL = new FhirCodeDefinition(
    'FSFUL',
    'FSFUL',
    'http://hl7.org/fhir/spdx-license',
    'FSF Unlimited License',
    'FSF Unlimited License.',
  );
  public static readonly FSFULLR = new FhirCodeDefinition(
    'FSFULLR',
    'FSFULLR',
    'http://hl7.org/fhir/spdx-license',
    'FSF Unlimited License (with License Retention)',
    'FSF Unlimited License (with License Retention).',
  );
  public static readonly FTL = new FhirCodeDefinition(
    'FTL',
    'FTL',
    'http://hl7.org/fhir/spdx-license',
    'Freetype Project License',
    'Freetype Project License.',
  );
  public static readonly GFDL_1_1_ONLY = new FhirCodeDefinition(
    'GFDL_1_1_ONLY',
    'GFDL-1.1-only',
    'http://hl7.org/fhir/spdx-license',
    'GNU Free Documentation License v1.1 only',
    'GNU Free Documentation License v1.1 only.',
  );
  public static readonly GFDL_1_1_OR_LATER = new FhirCodeDefinition(
    'GFDL_1_1_OR_LATER',
    'GFDL-1.1-or-later',
    'http://hl7.org/fhir/spdx-license',
    'GNU Free Documentation License v1.1 or later',
    'GNU Free Documentation License v1.1 or later.',
  );
  public static readonly GFDL_1_2_ONLY = new FhirCodeDefinition(
    'GFDL_1_2_ONLY',
    'GFDL-1.2-only',
    'http://hl7.org/fhir/spdx-license',
    'GNU Free Documentation License v1.2 only',
    'GNU Free Documentation License v1.2 only.',
  );
  public static readonly GFDL_1_2_OR_LATER = new FhirCodeDefinition(
    'GFDL_1_2_OR_LATER',
    'GFDL-1.2-or-later',
    'http://hl7.org/fhir/spdx-license',
    'GNU Free Documentation License v1.2 or later',
    'GNU Free Documentation License v1.2 or later.',
  );
  public static readonly GFDL_1_3_ONLY = new FhirCodeDefinition(
    'GFDL_1_3_ONLY',
    'GFDL-1.3-only',
    'http://hl7.org/fhir/spdx-license',
    'GNU Free Documentation License v1.3 only',
    'GNU Free Documentation License v1.3 only.',
  );
  public static readonly GFDL_1_3_OR_LATER = new FhirCodeDefinition(
    'GFDL_1_3_OR_LATER',
    'GFDL-1.3-or-later',
    'http://hl7.org/fhir/spdx-license',
    'GNU Free Documentation License v1.3 or later',
    'GNU Free Documentation License v1.3 or later.',
  );
  public static readonly GIFTWARE = new FhirCodeDefinition(
    'GIFTWARE',
    'Giftware',
    'http://hl7.org/fhir/spdx-license',
    'Giftware License',
    'Giftware License.',
  );
  public static readonly GL_2_PS = new FhirCodeDefinition(
    'GL_2_PS',
    'GL2PS',
    'http://hl7.org/fhir/spdx-license',
    'GL2PS License',
    'GL2PS License.',
  );
  public static readonly GLIDE = new FhirCodeDefinition(
    'GLIDE',
    'Glide',
    'http://hl7.org/fhir/spdx-license',
    '3dfx Glide License',
    '3dfx Glide License.',
  );
  public static readonly GLULXE = new FhirCodeDefinition(
    'GLULXE',
    'Glulxe',
    'http://hl7.org/fhir/spdx-license',
    'Glulxe License',
    'Glulxe License.',
  );
  public static readonly GNUPLOT = new FhirCodeDefinition(
    'GNUPLOT',
    'gnuplot',
    'http://hl7.org/fhir/spdx-license',
    'gnuplot License',
    'gnuplot License.',
  );
  public static readonly GPL_1_0_ONLY = new FhirCodeDefinition(
    'GPL_1_0_ONLY',
    'GPL-1.0-only',
    'http://hl7.org/fhir/spdx-license',
    'GNU General Public License v1.0 only',
    'GNU General Public License v1.0 only.',
  );
  public static readonly GPL_1_0_OR_LATER = new FhirCodeDefinition(
    'GPL_1_0_OR_LATER',
    'GPL-1.0-or-later',
    'http://hl7.org/fhir/spdx-license',
    'GNU General Public License v1.0 or later',
    'GNU General Public License v1.0 or later.',
  );
  public static readonly GPL_2_0_ONLY = new FhirCodeDefinition(
    'GPL_2_0_ONLY',
    'GPL-2.0-only',
    'http://hl7.org/fhir/spdx-license',
    'GNU General Public License v2.0 only',
    'GNU General Public License v2.0 only.',
  );
  public static readonly GPL_2_0_OR_LATER = new FhirCodeDefinition(
    'GPL_2_0_OR_LATER',
    'GPL-2.0-or-later',
    'http://hl7.org/fhir/spdx-license',
    'GNU General Public License v2.0 or later',
    'GNU General Public License v2.0 or later.',
  );
  public static readonly GPL_3_0_ONLY = new FhirCodeDefinition(
    'GPL_3_0_ONLY',
    'GPL-3.0-only',
    'http://hl7.org/fhir/spdx-license',
    'GNU General Public License v3.0 only',
    'GNU General Public License v3.0 only.',
  );
  public static readonly GPL_3_0_OR_LATER = new FhirCodeDefinition(
    'GPL_3_0_OR_LATER',
    'GPL-3.0-or-later',
    'http://hl7.org/fhir/spdx-license',
    'GNU General Public License v3.0 or later',
    'GNU General Public License v3.0 or later.',
  );
  public static readonly G_SOAP_1_3_B = new FhirCodeDefinition(
    'G_SOAP_1_3_B',
    'gSOAP-1.3b',
    'http://hl7.org/fhir/spdx-license',
    'gSOAP Public License v1.3b',
    'gSOAP Public License v1.3b.',
  );
  public static readonly HASKELL_REPORT = new FhirCodeDefinition(
    'HASKELL_REPORT',
    'HaskellReport',
    'http://hl7.org/fhir/spdx-license',
    'Haskell Language Report License',
    'Haskell Language Report License.',
  );
  public static readonly HPND = new FhirCodeDefinition(
    'HPND',
    'HPND',
    'http://hl7.org/fhir/spdx-license',
    'Historical Permission Notice and Disclaimer',
    'Historical Permission Notice and Disclaimer.',
  );
  public static readonly IBM_PIBS = new FhirCodeDefinition(
    'IBM_PIBS',
    'IBM-pibs',
    'http://hl7.org/fhir/spdx-license',
    'IBM PowerPC Initialization and Boot Software',
    'IBM PowerPC Initialization and Boot Software.',
  );
  public static readonly ICU = new FhirCodeDefinition(
    'ICU',
    'ICU',
    'http://hl7.org/fhir/spdx-license',
    'ICU License',
    'ICU License.',
  );
  public static readonly IJG = new FhirCodeDefinition(
    'IJG',
    'IJG',
    'http://hl7.org/fhir/spdx-license',
    'Independent JPEG Group License',
    'Independent JPEG Group License.',
  );
  public static readonly IMAGE_MAGICK = new FhirCodeDefinition(
    'IMAGE_MAGICK',
    'ImageMagick',
    'http://hl7.org/fhir/spdx-license',
    'ImageMagick License',
    'ImageMagick License.',
  );
  public static readonly I_MATIX = new FhirCodeDefinition(
    'I_MATIX',
    'iMatix',
    'http://hl7.org/fhir/spdx-license',
    'iMatix Standard Function Library Agreement',
    'iMatix Standard Function Library Agreement.',
  );
  public static readonly IMLIB_2 = new FhirCodeDefinition(
    'IMLIB_2',
    'Imlib2',
    'http://hl7.org/fhir/spdx-license',
    'Imlib2 License',
    'Imlib2 License.',
  );
  public static readonly INFO_ZIP = new FhirCodeDefinition(
    'INFO_ZIP',
    'Info-ZIP',
    'http://hl7.org/fhir/spdx-license',
    'Info-ZIP License',
    'Info-ZIP License.',
  );
  public static readonly INTEL_ACPI = new FhirCodeDefinition(
    'INTEL_ACPI',
    'Intel-ACPI',
    'http://hl7.org/fhir/spdx-license',
    'Intel ACPI Software License Agreement',
    'Intel ACPI Software License Agreement.',
  );
  public static readonly INTEL = new FhirCodeDefinition(
    'INTEL',
    'Intel',
    'http://hl7.org/fhir/spdx-license',
    'Intel Open Source License',
    'Intel Open Source License.',
  );
  public static readonly INTERBASE_1_0 = new FhirCodeDefinition(
    'INTERBASE_1_0',
    'Interbase-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Interbase Public License v1.0',
    'Interbase Public License v1.0.',
  );
  public static readonly IPA = new FhirCodeDefinition(
    'IPA',
    'IPA',
    'http://hl7.org/fhir/spdx-license',
    'IPA Font License',
    'IPA Font License.',
  );
  public static readonly IPL_1_0 = new FhirCodeDefinition(
    'IPL_1_0',
    'IPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'IBM Public License v1.0',
    'IBM Public License v1.0.',
  );
  public static readonly ISC = new FhirCodeDefinition(
    'ISC',
    'ISC',
    'http://hl7.org/fhir/spdx-license',
    'ISC License',
    'ISC License.',
  );
  public static readonly JAS_PER_2_0 = new FhirCodeDefinition(
    'JAS_PER_2_0',
    'JasPer-2.0',
    'http://hl7.org/fhir/spdx-license',
    'JasPer License',
    'JasPer License.',
  );
  public static readonly JSON = new FhirCodeDefinition(
    'JSON',
    'JSON',
    'http://hl7.org/fhir/spdx-license',
    'JSON License',
    'JSON License.',
  );
  public static readonly LAL_1_2 = new FhirCodeDefinition(
    'LAL_1_2',
    'LAL-1.2',
    'http://hl7.org/fhir/spdx-license',
    'Licence Art Libre 1.2',
    'Licence Art Libre 1.2.',
  );
  public static readonly LAL_1_3 = new FhirCodeDefinition(
    'LAL_1_3',
    'LAL-1.3',
    'http://hl7.org/fhir/spdx-license',
    'Licence Art Libre 1.3',
    'Licence Art Libre 1.3.',
  );
  public static readonly LATEX_2_E = new FhirCodeDefinition(
    'LATEX_2_E',
    'Latex2e',
    'http://hl7.org/fhir/spdx-license',
    'Latex2e License',
    'Latex2e License.',
  );
  public static readonly LEPTONICA = new FhirCodeDefinition(
    'LEPTONICA',
    'Leptonica',
    'http://hl7.org/fhir/spdx-license',
    'Leptonica License',
    'Leptonica License.',
  );
  public static readonly LGPL_2_0_ONLY = new FhirCodeDefinition(
    'LGPL_2_0_ONLY',
    'LGPL-2.0-only',
    'http://hl7.org/fhir/spdx-license',
    'GNU Library General Public License v2 only',
    'GNU Library General Public License v2 only.',
  );
  public static readonly LGPL_2_0_OR_LATER = new FhirCodeDefinition(
    'LGPL_2_0_OR_LATER',
    'LGPL-2.0-or-later',
    'http://hl7.org/fhir/spdx-license',
    'GNU Library General Public License v2 or later',
    'GNU Library General Public License v2 or later.',
  );
  public static readonly LGPL_2_1_ONLY = new FhirCodeDefinition(
    'LGPL_2_1_ONLY',
    'LGPL-2.1-only',
    'http://hl7.org/fhir/spdx-license',
    'GNU Lesser General Public License v2.1 only',
    'GNU Lesser General Public License v2.1 only.',
  );
  public static readonly LGPL_2_1_OR_LATER = new FhirCodeDefinition(
    'LGPL_2_1_OR_LATER',
    'LGPL-2.1-or-later',
    'http://hl7.org/fhir/spdx-license',
    'GNU Lesser General Public License v2.1 or later',
    'GNU Lesser General Public License v2.1 or later.',
  );
  public static readonly LGPL_3_0_ONLY = new FhirCodeDefinition(
    'LGPL_3_0_ONLY',
    'LGPL-3.0-only',
    'http://hl7.org/fhir/spdx-license',
    'GNU Lesser General Public License v3.0 only',
    'GNU Lesser General Public License v3.0 only.',
  );
  public static readonly LGPL_3_0_OR_LATER = new FhirCodeDefinition(
    'LGPL_3_0_OR_LATER',
    'LGPL-3.0-or-later',
    'http://hl7.org/fhir/spdx-license',
    'GNU Lesser General Public License v3.0 or later',
    'GNU Lesser General Public License v3.0 or later.',
  );
  public static readonly LGPLLR = new FhirCodeDefinition(
    'LGPLLR',
    'LGPLLR',
    'http://hl7.org/fhir/spdx-license',
    'Lesser General Public License For Linguistic Resources',
    'Lesser General Public License For Linguistic Resources.',
  );
  public static readonly LIBPNG = new FhirCodeDefinition(
    'LIBPNG',
    'Libpng',
    'http://hl7.org/fhir/spdx-license',
    'libpng License',
    'libpng License.',
  );
  public static readonly LIBTIFF = new FhirCodeDefinition(
    'LIBTIFF',
    'libtiff',
    'http://hl7.org/fhir/spdx-license',
    'libtiff License',
    'libtiff License.',
  );
  public static readonly LI_LI_Q_P_1_1 = new FhirCodeDefinition(
    'LI_LI_Q_P_1_1',
    'LiLiQ-P-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Licence Libre du Québec - Permissive version 1.1',
    'Licence Libre du Québec - Permissive version 1.1.',
  );
  public static readonly LI_LI_Q_R_1_1 = new FhirCodeDefinition(
    'LI_LI_Q_R_1_1',
    'LiLiQ-R-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Licence Libre du Québec - Réciprocité version 1.1',
    'Licence Libre du Québec - Réciprocité version 1.1.',
  );
  public static readonly LI_LI_Q_RPLUS_1_1 = new FhirCodeDefinition(
    'LI_LI_Q_RPLUS_1_1',
    'LiLiQ-Rplus-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Licence Libre du Québec - Réciprocité forte version 1.1',
    'Licence Libre du Québec - Réciprocité forte version 1.1.',
  );
  public static readonly LINUX_OPEN_IB = new FhirCodeDefinition(
    'LINUX_OPEN_IB',
    'Linux-OpenIB',
    'http://hl7.org/fhir/spdx-license',
    'Linux Kernel Variant of OpenIB.org license',
    'Linux Kernel Variant of OpenIB.org license.',
  );
  public static readonly LPL_1_0 = new FhirCodeDefinition(
    'LPL_1_0',
    'LPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Lucent Public License Version 1.0',
    'Lucent Public License Version 1.0.',
  );
  public static readonly LPL_1_02 = new FhirCodeDefinition(
    'LPL_1_02',
    'LPL-1.02',
    'http://hl7.org/fhir/spdx-license',
    'Lucent Public License v1.02',
    'Lucent Public License v1.02.',
  );
  public static readonly LPPL_1_0 = new FhirCodeDefinition(
    'LPPL_1_0',
    'LPPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'LaTeX Project Public License v1.0',
    'LaTeX Project Public License v1.0.',
  );
  public static readonly LPPL_1_1 = new FhirCodeDefinition(
    'LPPL_1_1',
    'LPPL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'LaTeX Project Public License v1.1',
    'LaTeX Project Public License v1.1.',
  );
  public static readonly LPPL_1_2 = new FhirCodeDefinition(
    'LPPL_1_2',
    'LPPL-1.2',
    'http://hl7.org/fhir/spdx-license',
    'LaTeX Project Public License v1.2',
    'LaTeX Project Public License v1.2.',
  );
  public static readonly LPPL_1_3_A = new FhirCodeDefinition(
    'LPPL_1_3_A',
    'LPPL-1.3a',
    'http://hl7.org/fhir/spdx-license',
    'LaTeX Project Public License v1.3a',
    'LaTeX Project Public License v1.3a.',
  );
  public static readonly LPPL_1_3_C = new FhirCodeDefinition(
    'LPPL_1_3_C',
    'LPPL-1.3c',
    'http://hl7.org/fhir/spdx-license',
    'LaTeX Project Public License v1.3c',
    'LaTeX Project Public License v1.3c.',
  );
  public static readonly MAKE_INDEX = new FhirCodeDefinition(
    'MAKE_INDEX',
    'MakeIndex',
    'http://hl7.org/fhir/spdx-license',
    'MakeIndex License',
    'MakeIndex License.',
  );
  public static readonly MIR_OS = new FhirCodeDefinition(
    'MIR_OS',
    'MirOS',
    'http://hl7.org/fhir/spdx-license',
    'MirOS License',
    'MirOS License.',
  );
  public static readonly MIT_0 = new FhirCodeDefinition(
    'MIT_0',
    'MIT-0',
    'http://hl7.org/fhir/spdx-license',
    'MIT No Attribution',
    'MIT No Attribution.',
  );
  public static readonly MIT_ADVERTISING = new FhirCodeDefinition(
    'MIT_ADVERTISING',
    'MIT-advertising',
    'http://hl7.org/fhir/spdx-license',
    'Enlightenment License (e16)',
    'Enlightenment License (e16).',
  );
  public static readonly MIT_CMU = new FhirCodeDefinition(
    'MIT_CMU',
    'MIT-CMU',
    'http://hl7.org/fhir/spdx-license',
    'CMU License',
    'CMU License.',
  );
  public static readonly MIT_ENNA = new FhirCodeDefinition(
    'MIT_ENNA',
    'MIT-enna',
    'http://hl7.org/fhir/spdx-license',
    'enna License',
    'enna License.',
  );
  public static readonly MIT_FEH = new FhirCodeDefinition(
    'MIT_FEH',
    'MIT-feh',
    'http://hl7.org/fhir/spdx-license',
    'feh License',
    'feh License.',
  );
  public static readonly MIT = new FhirCodeDefinition(
    'MIT',
    'MIT',
    'http://hl7.org/fhir/spdx-license',
    'MIT License',
    'MIT License.',
  );
  public static readonly MITNFA = new FhirCodeDefinition(
    'MITNFA',
    'MITNFA',
    'http://hl7.org/fhir/spdx-license',
    'MIT +no-false-attribs license',
    'MIT +no-false-attribs license.',
  );
  public static readonly MOTOSOTO = new FhirCodeDefinition(
    'MOTOSOTO',
    'Motosoto',
    'http://hl7.org/fhir/spdx-license',
    'Motosoto License',
    'Motosoto License.',
  );
  public static readonly MPICH_2 = new FhirCodeDefinition(
    'MPICH_2',
    'mpich2',
    'http://hl7.org/fhir/spdx-license',
    'mpich2 License',
    'mpich2 License.',
  );
  public static readonly MPL_1_0 = new FhirCodeDefinition(
    'MPL_1_0',
    'MPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Mozilla Public License 1.0',
    'Mozilla Public License 1.0.',
  );
  public static readonly MPL_1_1 = new FhirCodeDefinition(
    'MPL_1_1',
    'MPL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Mozilla Public License 1.1',
    'Mozilla Public License 1.1.',
  );
  public static readonly MPL_2_0_NO_COPYLEFT_EXCEPTION = new FhirCodeDefinition(
    'MPL_2_0_NO_COPYLEFT_EXCEPTION',
    'MPL-2.0-no-copyleft-exception',
    'http://hl7.org/fhir/spdx-license',
    'Mozilla Public License 2.0 (no copyleft exception)',
    'Mozilla Public License 2.0 (no copyleft exception).',
  );
  public static readonly MPL_2_0 = new FhirCodeDefinition(
    'MPL_2_0',
    'MPL-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Mozilla Public License 2.0',
    'Mozilla Public License 2.0.',
  );
  public static readonly MS_PL = new FhirCodeDefinition(
    'MS_PL',
    'MS-PL',
    'http://hl7.org/fhir/spdx-license',
    'Microsoft Public License',
    'Microsoft Public License.',
  );
  public static readonly MS_RL = new FhirCodeDefinition(
    'MS_RL',
    'MS-RL',
    'http://hl7.org/fhir/spdx-license',
    'Microsoft Reciprocal License',
    'Microsoft Reciprocal License.',
  );
  public static readonly MTLL = new FhirCodeDefinition(
    'MTLL',
    'MTLL',
    'http://hl7.org/fhir/spdx-license',
    'Matrix Template Library License',
    'Matrix Template Library License.',
  );
  public static readonly MULTICS = new FhirCodeDefinition(
    'MULTICS',
    'Multics',
    'http://hl7.org/fhir/spdx-license',
    'Multics License',
    'Multics License.',
  );
  public static readonly MUP = new FhirCodeDefinition(
    'MUP',
    'Mup',
    'http://hl7.org/fhir/spdx-license',
    'Mup License',
    'Mup License.',
  );
  public static readonly NASA_1_3 = new FhirCodeDefinition(
    'NASA_1_3',
    'NASA-1.3',
    'http://hl7.org/fhir/spdx-license',
    'NASA Open Source Agreement 1.3',
    'NASA Open Source Agreement 1.3.',
  );
  public static readonly NAUMEN = new FhirCodeDefinition(
    'NAUMEN',
    'Naumen',
    'http://hl7.org/fhir/spdx-license',
    'Naumen Public License',
    'Naumen Public License.',
  );
  public static readonly NBPL_1_0 = new FhirCodeDefinition(
    'NBPL_1_0',
    'NBPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Net Boolean Public License v1',
    'Net Boolean Public License v1.',
  );
  public static readonly NCSA = new FhirCodeDefinition(
    'NCSA',
    'NCSA',
    'http://hl7.org/fhir/spdx-license',
    'University of Illinois/NCSA Open Source License',
    'University of Illinois/NCSA Open Source License.',
  );
  public static readonly NET_SNMP = new FhirCodeDefinition(
    'NET_SNMP',
    'Net-SNMP',
    'http://hl7.org/fhir/spdx-license',
    'Net-SNMP License',
    'Net-SNMP License.',
  );
  public static readonly NET_CDF = new FhirCodeDefinition(
    'NET_CDF',
    'NetCDF',
    'http://hl7.org/fhir/spdx-license',
    'NetCDF license',
    'NetCDF license.',
  );
  public static readonly NEWSLETR = new FhirCodeDefinition(
    'NEWSLETR',
    'Newsletr',
    'http://hl7.org/fhir/spdx-license',
    'Newsletr License',
    'Newsletr License.',
  );
  public static readonly NGPL = new FhirCodeDefinition(
    'NGPL',
    'NGPL',
    'http://hl7.org/fhir/spdx-license',
    'Nethack General Public License',
    'Nethack General Public License.',
  );
  public static readonly NLOD_1_0 = new FhirCodeDefinition(
    'NLOD_1_0',
    'NLOD-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Norwegian Licence for Open Government Data',
    'Norwegian Licence for Open Government Data.',
  );
  public static readonly NLPL = new FhirCodeDefinition(
    'NLPL',
    'NLPL',
    'http://hl7.org/fhir/spdx-license',
    'No Limit Public License',
    'No Limit Public License.',
  );
  public static readonly NOKIA = new FhirCodeDefinition(
    'NOKIA',
    'Nokia',
    'http://hl7.org/fhir/spdx-license',
    'Nokia Open Source License',
    'Nokia Open Source License.',
  );
  public static readonly NOSL = new FhirCodeDefinition(
    'NOSL',
    'NOSL',
    'http://hl7.org/fhir/spdx-license',
    'Netizen Open Source License',
    'Netizen Open Source License.',
  );
  public static readonly NOWEB = new FhirCodeDefinition(
    'NOWEB',
    'Noweb',
    'http://hl7.org/fhir/spdx-license',
    'Noweb License',
    'Noweb License.',
  );
  public static readonly NPL_1_0 = new FhirCodeDefinition(
    'NPL_1_0',
    'NPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Netscape Public License v1.0',
    'Netscape Public License v1.0.',
  );
  public static readonly NPL_1_1 = new FhirCodeDefinition(
    'NPL_1_1',
    'NPL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Netscape Public License v1.1',
    'Netscape Public License v1.1.',
  );
  public static readonly NPOSL_3_0 = new FhirCodeDefinition(
    'NPOSL_3_0',
    'NPOSL-3.0',
    'http://hl7.org/fhir/spdx-license',
    'Non-Profit Open Software License 3.0',
    'Non-Profit Open Software License 3.0.',
  );
  public static readonly NRL = new FhirCodeDefinition(
    'NRL',
    'NRL',
    'http://hl7.org/fhir/spdx-license',
    'NRL License',
    'NRL License.',
  );
  public static readonly NTP = new FhirCodeDefinition(
    'NTP',
    'NTP',
    'http://hl7.org/fhir/spdx-license',
    'NTP License',
    'NTP License.',
  );
  public static readonly OCCT_PL = new FhirCodeDefinition(
    'OCCT_PL',
    'OCCT-PL',
    'http://hl7.org/fhir/spdx-license',
    'Open CASCADE Technology Public License',
    'Open CASCADE Technology Public License.',
  );
  public static readonly OCLC_2_0 = new FhirCodeDefinition(
    'OCLC_2_0',
    'OCLC-2.0',
    'http://hl7.org/fhir/spdx-license',
    'OCLC Research Public License 2.0',
    'OCLC Research Public License 2.0.',
  );
  public static readonly O_DB_L_1_0 = new FhirCodeDefinition(
    'O_DB_L_1_0',
    'ODbL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'ODC Open Database License v1.0',
    'ODC Open Database License v1.0.',
  );
  public static readonly OFL_1_0 = new FhirCodeDefinition(
    'OFL_1_0',
    'OFL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'SIL Open Font License 1.0',
    'SIL Open Font License 1.0.',
  );
  public static readonly OFL_1_1 = new FhirCodeDefinition(
    'OFL_1_1',
    'OFL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'SIL Open Font License 1.1',
    'SIL Open Font License 1.1.',
  );
  public static readonly OGTSL = new FhirCodeDefinition(
    'OGTSL',
    'OGTSL',
    'http://hl7.org/fhir/spdx-license',
    'Open Group Test Suite License',
    'Open Group Test Suite License.',
  );
  public static readonly OLDAP_1_1 = new FhirCodeDefinition(
    'OLDAP_1_1',
    'OLDAP-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v1.1',
    'Open LDAP Public License v1.1.',
  );
  public static readonly OLDAP_1_2 = new FhirCodeDefinition(
    'OLDAP_1_2',
    'OLDAP-1.2',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v1.2',
    'Open LDAP Public License v1.2.',
  );
  public static readonly OLDAP_1_3 = new FhirCodeDefinition(
    'OLDAP_1_3',
    'OLDAP-1.3',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v1.3',
    'Open LDAP Public License v1.3.',
  );
  public static readonly OLDAP_1_4 = new FhirCodeDefinition(
    'OLDAP_1_4',
    'OLDAP-1.4',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v1.4',
    'Open LDAP Public License v1.4.',
  );
  public static readonly OLDAP_2_0_1 = new FhirCodeDefinition(
    'OLDAP_2_0_1',
    'OLDAP-2.0.1',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v2.0.1',
    'Open LDAP Public License v2.0.1.',
  );
  public static readonly OLDAP_2_0 = new FhirCodeDefinition(
    'OLDAP_2_0',
    'OLDAP-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v2.0 (or possibly 2.0A and 2.0B)',
    'Open LDAP Public License v2.0 (or possibly 2.0A and 2.0B).',
  );
  public static readonly OLDAP_2_1 = new FhirCodeDefinition(
    'OLDAP_2_1',
    'OLDAP-2.1',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v2.1',
    'Open LDAP Public License v2.1.',
  );
  public static readonly OLDAP_2_2_1 = new FhirCodeDefinition(
    'OLDAP_2_2_1',
    'OLDAP-2.2.1',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v2.2.1',
    'Open LDAP Public License v2.2.1.',
  );
  public static readonly OLDAP_2_2_2 = new FhirCodeDefinition(
    'OLDAP_2_2_2',
    'OLDAP-2.2.2',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License 2.2.2',
    'Open LDAP Public License 2.2.2.',
  );
  public static readonly OLDAP_2_2 = new FhirCodeDefinition(
    'OLDAP_2_2',
    'OLDAP-2.2',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v2.2',
    'Open LDAP Public License v2.2.',
  );
  public static readonly OLDAP_2_3 = new FhirCodeDefinition(
    'OLDAP_2_3',
    'OLDAP-2.3',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v2.3',
    'Open LDAP Public License v2.3.',
  );
  public static readonly OLDAP_2_4 = new FhirCodeDefinition(
    'OLDAP_2_4',
    'OLDAP-2.4',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v2.4',
    'Open LDAP Public License v2.4.',
  );
  public static readonly OLDAP_2_5 = new FhirCodeDefinition(
    'OLDAP_2_5',
    'OLDAP-2.5',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v2.5',
    'Open LDAP Public License v2.5.',
  );
  public static readonly OLDAP_2_6 = new FhirCodeDefinition(
    'OLDAP_2_6',
    'OLDAP-2.6',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v2.6',
    'Open LDAP Public License v2.6.',
  );
  public static readonly OLDAP_2_7 = new FhirCodeDefinition(
    'OLDAP_2_7',
    'OLDAP-2.7',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v2.7',
    'Open LDAP Public License v2.7.',
  );
  public static readonly OLDAP_2_8 = new FhirCodeDefinition(
    'OLDAP_2_8',
    'OLDAP-2.8',
    'http://hl7.org/fhir/spdx-license',
    'Open LDAP Public License v2.8',
    'Open LDAP Public License v2.8.',
  );
  public static readonly OML = new FhirCodeDefinition(
    'OML',
    'OML',
    'http://hl7.org/fhir/spdx-license',
    'Open Market License',
    'Open Market License.',
  );
  public static readonly OPEN_SSL = new FhirCodeDefinition(
    'OPEN_SSL',
    'OpenSSL',
    'http://hl7.org/fhir/spdx-license',
    'OpenSSL License',
    'OpenSSL License.',
  );
  public static readonly OPL_1_0 = new FhirCodeDefinition(
    'OPL_1_0',
    'OPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Open Public License v1.0',
    'Open Public License v1.0.',
  );
  public static readonly OSET_PL_2_1 = new FhirCodeDefinition(
    'OSET_PL_2_1',
    'OSET-PL-2.1',
    'http://hl7.org/fhir/spdx-license',
    'OSET Public License version 2.1',
    'OSET Public License version 2.1.',
  );
  public static readonly OSL_1_0 = new FhirCodeDefinition(
    'OSL_1_0',
    'OSL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Open Software License 1.0',
    'Open Software License 1.0.',
  );
  public static readonly OSL_1_1 = new FhirCodeDefinition(
    'OSL_1_1',
    'OSL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Open Software License 1.1',
    'Open Software License 1.1.',
  );
  public static readonly OSL_2_0 = new FhirCodeDefinition(
    'OSL_2_0',
    'OSL-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Open Software License 2.0',
    'Open Software License 2.0.',
  );
  public static readonly OSL_2_1 = new FhirCodeDefinition(
    'OSL_2_1',
    'OSL-2.1',
    'http://hl7.org/fhir/spdx-license',
    'Open Software License 2.1',
    'Open Software License 2.1.',
  );
  public static readonly OSL_3_0 = new FhirCodeDefinition(
    'OSL_3_0',
    'OSL-3.0',
    'http://hl7.org/fhir/spdx-license',
    'Open Software License 3.0',
    'Open Software License 3.0.',
  );
  public static readonly PDDL_1_0 = new FhirCodeDefinition(
    'PDDL_1_0',
    'PDDL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'ODC Public Domain Dedication & License 1.0',
    'ODC Public Domain Dedication & License 1.0.',
  );
  public static readonly PHP_3_0 = new FhirCodeDefinition(
    'PHP_3_0',
    'PHP-3.0',
    'http://hl7.org/fhir/spdx-license',
    'PHP License v3.0',
    'PHP License v3.0.',
  );
  public static readonly PHP_3_01 = new FhirCodeDefinition(
    'PHP_3_01',
    'PHP-3.01',
    'http://hl7.org/fhir/spdx-license',
    'PHP License v3.01',
    'PHP License v3.01.',
  );
  public static readonly PLEXUS = new FhirCodeDefinition(
    'PLEXUS',
    'Plexus',
    'http://hl7.org/fhir/spdx-license',
    'Plexus Classworlds License',
    'Plexus Classworlds License.',
  );
  public static readonly POSTGRE_SQL = new FhirCodeDefinition(
    'POSTGRE_SQL',
    'PostgreSQL',
    'http://hl7.org/fhir/spdx-license',
    'PostgreSQL License',
    'PostgreSQL License.',
  );
  public static readonly PSFRAG = new FhirCodeDefinition(
    'PSFRAG',
    'psfrag',
    'http://hl7.org/fhir/spdx-license',
    'psfrag License',
    'psfrag License.',
  );
  public static readonly PSUTILS = new FhirCodeDefinition(
    'PSUTILS',
    'psutils',
    'http://hl7.org/fhir/spdx-license',
    'psutils License',
    'psutils License.',
  );
  public static readonly PYTHON_2_0 = new FhirCodeDefinition(
    'PYTHON_2_0',
    'Python-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Python License 2.0',
    'Python License 2.0.',
  );
  public static readonly QHULL = new FhirCodeDefinition(
    'QHULL',
    'Qhull',
    'http://hl7.org/fhir/spdx-license',
    'Qhull License',
    'Qhull License.',
  );
  public static readonly QPL_1_0 = new FhirCodeDefinition(
    'QPL_1_0',
    'QPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Q Public License 1.0',
    'Q Public License 1.0.',
  );
  public static readonly RDISC = new FhirCodeDefinition(
    'RDISC',
    'Rdisc',
    'http://hl7.org/fhir/spdx-license',
    'Rdisc License',
    'Rdisc License.',
  );
  public static readonly R_HE_COS_1_1 = new FhirCodeDefinition(
    'R_HE_COS_1_1',
    'RHeCos-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Red Hat eCos Public License v1.1',
    'Red Hat eCos Public License v1.1.',
  );
  public static readonly RPL_1_1 = new FhirCodeDefinition(
    'RPL_1_1',
    'RPL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Reciprocal Public License 1.1',
    'Reciprocal Public License 1.1.',
  );
  public static readonly RPL_1_5 = new FhirCodeDefinition(
    'RPL_1_5',
    'RPL-1.5',
    'http://hl7.org/fhir/spdx-license',
    'Reciprocal Public License 1.5',
    'Reciprocal Public License 1.5.',
  );
  public static readonly RPSL_1_0 = new FhirCodeDefinition(
    'RPSL_1_0',
    'RPSL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'RealNetworks Public Source License v1.0',
    'RealNetworks Public Source License v1.0.',
  );
  public static readonly RSA_MD = new FhirCodeDefinition(
    'RSA_MD',
    'RSA-MD',
    'http://hl7.org/fhir/spdx-license',
    'RSA Message-Digest License',
    'RSA Message-Digest License.',
  );
  public static readonly RSCPL = new FhirCodeDefinition(
    'RSCPL',
    'RSCPL',
    'http://hl7.org/fhir/spdx-license',
    'Ricoh Source Code Public License',
    'Ricoh Source Code Public License.',
  );
  public static readonly RUBY = new FhirCodeDefinition(
    'RUBY',
    'Ruby',
    'http://hl7.org/fhir/spdx-license',
    'Ruby License',
    'Ruby License.',
  );
  public static readonly SAX_PD = new FhirCodeDefinition(
    'SAX_PD',
    'SAX-PD',
    'http://hl7.org/fhir/spdx-license',
    'Sax Public Domain Notice',
    'Sax Public Domain Notice.',
  );
  public static readonly SAXPATH = new FhirCodeDefinition(
    'SAXPATH',
    'Saxpath',
    'http://hl7.org/fhir/spdx-license',
    'Saxpath License',
    'Saxpath License.',
  );
  public static readonly SCEA = new FhirCodeDefinition(
    'SCEA',
    'SCEA',
    'http://hl7.org/fhir/spdx-license',
    'SCEA Shared Source License',
    'SCEA Shared Source License.',
  );
  public static readonly SENDMAIL = new FhirCodeDefinition(
    'SENDMAIL',
    'Sendmail',
    'http://hl7.org/fhir/spdx-license',
    'Sendmail License',
    'Sendmail License.',
  );
  public static readonly SGI_B_1_0 = new FhirCodeDefinition(
    'SGI_B_1_0',
    'SGI-B-1.0',
    'http://hl7.org/fhir/spdx-license',
    'SGI Free Software License B v1.0',
    'SGI Free Software License B v1.0.',
  );
  public static readonly SGI_B_1_1 = new FhirCodeDefinition(
    'SGI_B_1_1',
    'SGI-B-1.1',
    'http://hl7.org/fhir/spdx-license',
    'SGI Free Software License B v1.1',
    'SGI Free Software License B v1.1.',
  );
  public static readonly SGI_B_2_0 = new FhirCodeDefinition(
    'SGI_B_2_0',
    'SGI-B-2.0',
    'http://hl7.org/fhir/spdx-license',
    'SGI Free Software License B v2.0',
    'SGI Free Software License B v2.0.',
  );
  public static readonly SIM_PL_2_0 = new FhirCodeDefinition(
    'SIM_PL_2_0',
    'SimPL-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Simple Public License 2.0',
    'Simple Public License 2.0.',
  );
  public static readonly SISSL_1_2 = new FhirCodeDefinition(
    'SISSL_1_2',
    'SISSL-1.2',
    'http://hl7.org/fhir/spdx-license',
    'Sun Industry Standards Source License v1.2',
    'Sun Industry Standards Source License v1.2.',
  );
  public static readonly SISSL = new FhirCodeDefinition(
    'SISSL',
    'SISSL',
    'http://hl7.org/fhir/spdx-license',
    'Sun Industry Standards Source License v1.1',
    'Sun Industry Standards Source License v1.1.',
  );
  public static readonly SLEEPYCAT = new FhirCodeDefinition(
    'SLEEPYCAT',
    'Sleepycat',
    'http://hl7.org/fhir/spdx-license',
    'Sleepycat License',
    'Sleepycat License.',
  );
  public static readonly SMLNJ = new FhirCodeDefinition(
    'SMLNJ',
    'SMLNJ',
    'http://hl7.org/fhir/spdx-license',
    'Standard ML of New Jersey License',
    'Standard ML of New Jersey License.',
  );
  public static readonly SMPPL = new FhirCodeDefinition(
    'SMPPL',
    'SMPPL',
    'http://hl7.org/fhir/spdx-license',
    'Secure Messaging Protocol Public License',
    'Secure Messaging Protocol Public License.',
  );
  public static readonly SNIA = new FhirCodeDefinition(
    'SNIA',
    'SNIA',
    'http://hl7.org/fhir/spdx-license',
    'SNIA Public License 1.1',
    'SNIA Public License 1.1.',
  );
  public static readonly SPENCER_86 = new FhirCodeDefinition(
    'SPENCER_86',
    'Spencer-86',
    'http://hl7.org/fhir/spdx-license',
    'Spencer License 86',
    'Spencer License 86.',
  );
  public static readonly SPENCER_94 = new FhirCodeDefinition(
    'SPENCER_94',
    'Spencer-94',
    'http://hl7.org/fhir/spdx-license',
    'Spencer License 94',
    'Spencer License 94.',
  );
  public static readonly SPENCER_99 = new FhirCodeDefinition(
    'SPENCER_99',
    'Spencer-99',
    'http://hl7.org/fhir/spdx-license',
    'Spencer License 99',
    'Spencer License 99.',
  );
  public static readonly SPL_1_0 = new FhirCodeDefinition(
    'SPL_1_0',
    'SPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Sun Public License v1.0',
    'Sun Public License v1.0.',
  );
  public static readonly SUGAR_CRM_1_1_3 = new FhirCodeDefinition(
    'SUGAR_CRM_1_1_3',
    'SugarCRM-1.1.3',
    'http://hl7.org/fhir/spdx-license',
    'SugarCRM Public License v1.1.3',
    'SugarCRM Public License v1.1.3.',
  );
  public static readonly SWL = new FhirCodeDefinition(
    'SWL',
    'SWL',
    'http://hl7.org/fhir/spdx-license',
    'Scheme Widget Library (SWL) Software License Agreement',
    'Scheme Widget Library (SWL) Software License Agreement.',
  );
  public static readonly TCL = new FhirCodeDefinition(
    'TCL',
    'TCL',
    'http://hl7.org/fhir/spdx-license',
    'TCL/TK License',
    'TCL/TK License.',
  );
  public static readonly TCP_WRAPPERS = new FhirCodeDefinition(
    'TCP_WRAPPERS',
    'TCP-wrappers',
    'http://hl7.org/fhir/spdx-license',
    'TCP Wrappers License',
    'TCP Wrappers License.',
  );
  public static readonly T_MATE = new FhirCodeDefinition(
    'T_MATE',
    'TMate',
    'http://hl7.org/fhir/spdx-license',
    'TMate Open Source License',
    'TMate Open Source License.',
  );
  public static readonly TORQUE_1_1 = new FhirCodeDefinition(
    'TORQUE_1_1',
    'TORQUE-1.1',
    'http://hl7.org/fhir/spdx-license',
    'TORQUE v2.5+ Software License v1.1',
    'TORQUE v2.5+ Software License v1.1.',
  );
  public static readonly TOSL = new FhirCodeDefinition(
    'TOSL',
    'TOSL',
    'http://hl7.org/fhir/spdx-license',
    'Trusster Open Source License',
    'Trusster Open Source License.',
  );
  public static readonly UNICODE_DFS_2015 = new FhirCodeDefinition(
    'UNICODE_DFS_2015',
    'Unicode-DFS-2015',
    'http://hl7.org/fhir/spdx-license',
    'Unicode License Agreement - Data Files and Software (2015)',
    'Unicode License Agreement - Data Files and Software (2015).',
  );
  public static readonly UNICODE_DFS_2016 = new FhirCodeDefinition(
    'UNICODE_DFS_2016',
    'Unicode-DFS-2016',
    'http://hl7.org/fhir/spdx-license',
    'Unicode License Agreement - Data Files and Software (2016)',
    'Unicode License Agreement - Data Files and Software (2016).',
  );
  public static readonly UNICODE_TOU = new FhirCodeDefinition(
    'UNICODE_TOU',
    'Unicode-TOU',
    'http://hl7.org/fhir/spdx-license',
    'Unicode Terms of Use',
    'Unicode Terms of Use.',
  );
  public static readonly UNLICENSE = new FhirCodeDefinition(
    'UNLICENSE',
    'Unlicense',
    'http://hl7.org/fhir/spdx-license',
    'The Unlicense',
    'The Unlicense.',
  );
  public static readonly UPL_1_0 = new FhirCodeDefinition(
    'UPL_1_0',
    'UPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Universal Permissive License v1.0',
    'Universal Permissive License v1.0.',
  );
  public static readonly VIM = new FhirCodeDefinition(
    'VIM',
    'Vim',
    'http://hl7.org/fhir/spdx-license',
    'Vim License',
    'Vim License.',
  );
  public static readonly VOSTROM = new FhirCodeDefinition(
    'VOSTROM',
    'VOSTROM',
    'http://hl7.org/fhir/spdx-license',
    'VOSTROM Public License for Open Source',
    'VOSTROM Public License for Open Source.',
  );
  public static readonly VSL_1_0 = new FhirCodeDefinition(
    'VSL_1_0',
    'VSL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Vovida Software License v1.0',
    'Vovida Software License v1.0.',
  );
  public static readonly W_3_C_19980720 = new FhirCodeDefinition(
    'W_3_C_19980720',
    'W3C-19980720',
    'http://hl7.org/fhir/spdx-license',
    'W3C Software Notice and License (1998-07-20)',
    'W3C Software Notice and License (1998-07-20).',
  );
  public static readonly W_3_C_20150513 = new FhirCodeDefinition(
    'W_3_C_20150513',
    'W3C-20150513',
    'http://hl7.org/fhir/spdx-license',
    'W3C Software Notice and Document License (2015-05-13)',
    'W3C Software Notice and Document License (2015-05-13).',
  );
  public static readonly W_3_C = new FhirCodeDefinition(
    'W_3_C',
    'W3C',
    'http://hl7.org/fhir/spdx-license',
    'W3C Software Notice and License (2002-12-31)',
    'W3C Software Notice and License (2002-12-31).',
  );
  public static readonly WATCOM_1_0 = new FhirCodeDefinition(
    'WATCOM_1_0',
    'Watcom-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Sybase Open Watcom Public License 1.0',
    'Sybase Open Watcom Public License 1.0.',
  );
  public static readonly WSUIPA = new FhirCodeDefinition(
    'WSUIPA',
    'Wsuipa',
    'http://hl7.org/fhir/spdx-license',
    'Wsuipa License',
    'Wsuipa License.',
  );
  public static readonly WTFPL = new FhirCodeDefinition(
    'WTFPL',
    'WTFPL',
    'http://hl7.org/fhir/spdx-license',
    'Do What The F*ck You Want To Public License',
    'Do What The F*ck You Want To Public License.',
  );
  public static readonly X_11 = new FhirCodeDefinition(
    'X_11',
    'X11',
    'http://hl7.org/fhir/spdx-license',
    'X11 License',
    'X11 License.',
  );
  public static readonly XEROX = new FhirCodeDefinition(
    'XEROX',
    'Xerox',
    'http://hl7.org/fhir/spdx-license',
    'Xerox License',
    'Xerox License.',
  );
  public static readonly X_FREE_86_1_1 = new FhirCodeDefinition(
    'X_FREE_86_1_1',
    'XFree86-1.1',
    'http://hl7.org/fhir/spdx-license',
    'XFree86 License 1.1',
    'XFree86 License 1.1.',
  );
  public static readonly XINETD = new FhirCodeDefinition(
    'XINETD',
    'xinetd',
    'http://hl7.org/fhir/spdx-license',
    'xinetd License',
    'xinetd License.',
  );
  public static readonly XNET = new FhirCodeDefinition(
    'XNET',
    'Xnet',
    'http://hl7.org/fhir/spdx-license',
    'X.Net License',
    'X.Net License.',
  );
  public static readonly XPP = new FhirCodeDefinition(
    'XPP',
    'xpp',
    'http://hl7.org/fhir/spdx-license',
    'XPP License',
    'XPP License.',
  );
  public static readonly X_SKAT = new FhirCodeDefinition(
    'X_SKAT',
    'XSkat',
    'http://hl7.org/fhir/spdx-license',
    'XSkat License',
    'XSkat License.',
  );
  public static readonly YPL_1_0 = new FhirCodeDefinition(
    'YPL_1_0',
    'YPL-1.0',
    'http://hl7.org/fhir/spdx-license',
    'Yahoo! Public License v1.0',
    'Yahoo! Public License v1.0.',
  );
  public static readonly YPL_1_1 = new FhirCodeDefinition(
    'YPL_1_1',
    'YPL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Yahoo! Public License v1.1',
    'Yahoo! Public License v1.1.',
  );
  public static readonly ZED = new FhirCodeDefinition(
    'ZED',
    'Zed',
    'http://hl7.org/fhir/spdx-license',
    'Zed License',
    'Zed License.',
  );
  public static readonly ZEND_2_0 = new FhirCodeDefinition(
    'ZEND_2_0',
    'Zend-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Zend License v2.0',
    'Zend License v2.0.',
  );
  public static readonly ZIMBRA_1_3 = new FhirCodeDefinition(
    'ZIMBRA_1_3',
    'Zimbra-1.3',
    'http://hl7.org/fhir/spdx-license',
    'Zimbra Public License v1.3',
    'Zimbra Public License v1.3.',
  );
  public static readonly ZIMBRA_1_4 = new FhirCodeDefinition(
    'ZIMBRA_1_4',
    'Zimbra-1.4',
    'http://hl7.org/fhir/spdx-license',
    'Zimbra Public License v1.4',
    'Zimbra Public License v1.4.',
  );
  public static readonly ZLIB_ACKNOWLEDGEMENT = new FhirCodeDefinition(
    'ZLIB_ACKNOWLEDGEMENT',
    'zlib-acknowledgement',
    'http://hl7.org/fhir/spdx-license',
    'zlib/libpng License with Acknowledgement',
    'zlib/libpng License with Acknowledgement.',
  );
  public static readonly ZLIB = new FhirCodeDefinition(
    'ZLIB',
    'Zlib',
    'http://hl7.org/fhir/spdx-license',
    'zlib License',
    'zlib License.',
  );
  public static readonly ZPL_1_1 = new FhirCodeDefinition(
    'ZPL_1_1',
    'ZPL-1.1',
    'http://hl7.org/fhir/spdx-license',
    'Zope Public License 1.1',
    'Zope Public License 1.1.',
  );
  public static readonly ZPL_2_0 = new FhirCodeDefinition(
    'ZPL_2_0',
    'ZPL-2.0',
    'http://hl7.org/fhir/spdx-license',
    'Zope Public License 2.0',
    'Zope Public License 2.0.',
  );
  public static readonly ZPL_2_1 = new FhirCodeDefinition(
    'ZPL_2_1',
    'ZPL-2.1',
    'http://hl7.org/fhir/spdx-license',
    'Zope Public License 2.1',
    'Zope Public License 2.1.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      SpdxLicenseEnum.NOT_OPEN_SOURCE,
      SpdxLicenseEnum._0_BSD,
      SpdxLicenseEnum.AAL,
      SpdxLicenseEnum.ABSTYLES,
      SpdxLicenseEnum.ADOBE_2006,
      SpdxLicenseEnum.ADOBE_GLYPH,
      SpdxLicenseEnum.ADSL,
      SpdxLicenseEnum.AFL_1_1,
      SpdxLicenseEnum.AFL_1_2,
      SpdxLicenseEnum.AFL_2_0,
      SpdxLicenseEnum.AFL_2_1,
      SpdxLicenseEnum.AFL_3_0,
      SpdxLicenseEnum.AFMPARSE,
      SpdxLicenseEnum.AGPL_1_0_ONLY,
      SpdxLicenseEnum.AGPL_1_0_OR_LATER,
      SpdxLicenseEnum.AGPL_3_0_ONLY,
      SpdxLicenseEnum.AGPL_3_0_OR_LATER,
      SpdxLicenseEnum.ALADDIN,
      SpdxLicenseEnum.AMDPLPA,
      SpdxLicenseEnum.AML,
      SpdxLicenseEnum.AMPAS,
      SpdxLicenseEnum.ANTLR_PD,
      SpdxLicenseEnum.APACHE_1_0,
      SpdxLicenseEnum.APACHE_1_1,
      SpdxLicenseEnum.APACHE_2_0,
      SpdxLicenseEnum.APAFML,
      SpdxLicenseEnum.APL_1_0,
      SpdxLicenseEnum.APSL_1_0,
      SpdxLicenseEnum.APSL_1_1,
      SpdxLicenseEnum.APSL_1_2,
      SpdxLicenseEnum.APSL_2_0,
      SpdxLicenseEnum.ARTISTIC_1_0_CL_8,
      SpdxLicenseEnum.ARTISTIC_1_0_PERL,
      SpdxLicenseEnum.ARTISTIC_1_0,
      SpdxLicenseEnum.ARTISTIC_2_0,
      SpdxLicenseEnum.BAHYPH,
      SpdxLicenseEnum.BARR,
      SpdxLicenseEnum.BEERWARE,
      SpdxLicenseEnum.BIT_TORRENT_1_0,
      SpdxLicenseEnum.BIT_TORRENT_1_1,
      SpdxLicenseEnum.BORCEUX,
      SpdxLicenseEnum.BSD_1_CLAUSE,
      SpdxLicenseEnum.BSD_2_CLAUSE_FREE_BSD,
      SpdxLicenseEnum.BSD_2_CLAUSE_NET_BSD,
      SpdxLicenseEnum.BSD_2_CLAUSE_PATENT,
      SpdxLicenseEnum.BSD_2_CLAUSE,
      SpdxLicenseEnum.BSD_3_CLAUSE_ATTRIBUTION,
      SpdxLicenseEnum.BSD_3_CLAUSE_CLEAR,
      SpdxLicenseEnum.BSD_3_CLAUSE_LBNL,
      SpdxLicenseEnum.BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014,
      SpdxLicenseEnum.BSD_3_CLAUSE_NO_NUCLEAR_LICENSE,
      SpdxLicenseEnum.BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY,
      SpdxLicenseEnum.BSD_3_CLAUSE,
      SpdxLicenseEnum.BSD_4_CLAUSE_UC,
      SpdxLicenseEnum.BSD_4_CLAUSE,
      SpdxLicenseEnum.BSD_PROTECTION,
      SpdxLicenseEnum.BSD_SOURCE_CODE,
      SpdxLicenseEnum.BSL_1_0,
      SpdxLicenseEnum.BZIP_2_1_0_5,
      SpdxLicenseEnum.BZIP_2_1_0_6,
      SpdxLicenseEnum.CALDERA,
      SpdxLicenseEnum.CATOSL_1_1,
      SpdxLicenseEnum.CC_BY_1_0,
      SpdxLicenseEnum.CC_BY_2_0,
      SpdxLicenseEnum.CC_BY_2_5,
      SpdxLicenseEnum.CC_BY_3_0,
      SpdxLicenseEnum.CC_BY_4_0,
      SpdxLicenseEnum.CC_BY_NC_1_0,
      SpdxLicenseEnum.CC_BY_NC_2_0,
      SpdxLicenseEnum.CC_BY_NC_2_5,
      SpdxLicenseEnum.CC_BY_NC_3_0,
      SpdxLicenseEnum.CC_BY_NC_4_0,
      SpdxLicenseEnum.CC_BY_NC_ND_1_0,
      SpdxLicenseEnum.CC_BY_NC_ND_2_0,
      SpdxLicenseEnum.CC_BY_NC_ND_2_5,
      SpdxLicenseEnum.CC_BY_NC_ND_3_0,
      SpdxLicenseEnum.CC_BY_NC_ND_4_0,
      SpdxLicenseEnum.CC_BY_NC_SA_1_0,
      SpdxLicenseEnum.CC_BY_NC_SA_2_0,
      SpdxLicenseEnum.CC_BY_NC_SA_2_5,
      SpdxLicenseEnum.CC_BY_NC_SA_3_0,
      SpdxLicenseEnum.CC_BY_NC_SA_4_0,
      SpdxLicenseEnum.CC_BY_ND_1_0,
      SpdxLicenseEnum.CC_BY_ND_2_0,
      SpdxLicenseEnum.CC_BY_ND_2_5,
      SpdxLicenseEnum.CC_BY_ND_3_0,
      SpdxLicenseEnum.CC_BY_ND_4_0,
      SpdxLicenseEnum.CC_BY_SA_1_0,
      SpdxLicenseEnum.CC_BY_SA_2_0,
      SpdxLicenseEnum.CC_BY_SA_2_5,
      SpdxLicenseEnum.CC_BY_SA_3_0,
      SpdxLicenseEnum.CC_BY_SA_4_0,
      SpdxLicenseEnum.CC_0_1_0,
      SpdxLicenseEnum.CDDL_1_0,
      SpdxLicenseEnum.CDDL_1_1,
      SpdxLicenseEnum.CDLA_PERMISSIVE_1_0,
      SpdxLicenseEnum.CDLA_SHARING_1_0,
      SpdxLicenseEnum.CECILL_1_0,
      SpdxLicenseEnum.CECILL_1_1,
      SpdxLicenseEnum.CECILL_2_0,
      SpdxLicenseEnum.CECILL_2_1,
      SpdxLicenseEnum.CECILL_B,
      SpdxLicenseEnum.CECILL_C,
      SpdxLicenseEnum.CL_ARTISTIC,
      SpdxLicenseEnum.CNRI_JYTHON,
      SpdxLicenseEnum.CNRI_PYTHON_GPL_COMPATIBLE,
      SpdxLicenseEnum.CNRI_PYTHON,
      SpdxLicenseEnum.CONDOR_1_1,
      SpdxLicenseEnum.CPAL_1_0,
      SpdxLicenseEnum.CPL_1_0,
      SpdxLicenseEnum.CPOL_1_02,
      SpdxLicenseEnum.CROSSWORD,
      SpdxLicenseEnum.CRYSTAL_STACKER,
      SpdxLicenseEnum.CUA_OPL_1_0,
      SpdxLicenseEnum.CUBE,
      SpdxLicenseEnum.CURL,
      SpdxLicenseEnum.D_FSL_1_0,
      SpdxLicenseEnum.DIFFMARK,
      SpdxLicenseEnum.DOC,
      SpdxLicenseEnum.DOTSEQN,
      SpdxLicenseEnum.DSDP,
      SpdxLicenseEnum.DVIPDFM,
      SpdxLicenseEnum.ECL_1_0,
      SpdxLicenseEnum.ECL_2_0,
      SpdxLicenseEnum.EFL_1_0,
      SpdxLicenseEnum.EFL_2_0,
      SpdxLicenseEnum.E_GENIX,
      SpdxLicenseEnum.ENTESSA,
      SpdxLicenseEnum.EPL_1_0,
      SpdxLicenseEnum.EPL_2_0,
      SpdxLicenseEnum.ERL_PL_1_1,
      SpdxLicenseEnum.EU_DATAGRID,
      SpdxLicenseEnum.EUPL_1_0,
      SpdxLicenseEnum.EUPL_1_1,
      SpdxLicenseEnum.EUPL_1_2,
      SpdxLicenseEnum.EUROSYM,
      SpdxLicenseEnum.FAIR,
      SpdxLicenseEnum.FRAMEWORX_1_0,
      SpdxLicenseEnum.FREE_IMAGE,
      SpdxLicenseEnum.FSFAP,
      SpdxLicenseEnum.FSFUL,
      SpdxLicenseEnum.FSFULLR,
      SpdxLicenseEnum.FTL,
      SpdxLicenseEnum.GFDL_1_1_ONLY,
      SpdxLicenseEnum.GFDL_1_1_OR_LATER,
      SpdxLicenseEnum.GFDL_1_2_ONLY,
      SpdxLicenseEnum.GFDL_1_2_OR_LATER,
      SpdxLicenseEnum.GFDL_1_3_ONLY,
      SpdxLicenseEnum.GFDL_1_3_OR_LATER,
      SpdxLicenseEnum.GIFTWARE,
      SpdxLicenseEnum.GL_2_PS,
      SpdxLicenseEnum.GLIDE,
      SpdxLicenseEnum.GLULXE,
      SpdxLicenseEnum.GNUPLOT,
      SpdxLicenseEnum.GPL_1_0_ONLY,
      SpdxLicenseEnum.GPL_1_0_OR_LATER,
      SpdxLicenseEnum.GPL_2_0_ONLY,
      SpdxLicenseEnum.GPL_2_0_OR_LATER,
      SpdxLicenseEnum.GPL_3_0_ONLY,
      SpdxLicenseEnum.GPL_3_0_OR_LATER,
      SpdxLicenseEnum.G_SOAP_1_3_B,
      SpdxLicenseEnum.HASKELL_REPORT,
      SpdxLicenseEnum.HPND,
      SpdxLicenseEnum.IBM_PIBS,
      SpdxLicenseEnum.ICU,
      SpdxLicenseEnum.IJG,
      SpdxLicenseEnum.IMAGE_MAGICK,
      SpdxLicenseEnum.I_MATIX,
      SpdxLicenseEnum.IMLIB_2,
      SpdxLicenseEnum.INFO_ZIP,
      SpdxLicenseEnum.INTEL_ACPI,
      SpdxLicenseEnum.INTEL,
      SpdxLicenseEnum.INTERBASE_1_0,
      SpdxLicenseEnum.IPA,
      SpdxLicenseEnum.IPL_1_0,
      SpdxLicenseEnum.ISC,
      SpdxLicenseEnum.JAS_PER_2_0,
      SpdxLicenseEnum.JSON,
      SpdxLicenseEnum.LAL_1_2,
      SpdxLicenseEnum.LAL_1_3,
      SpdxLicenseEnum.LATEX_2_E,
      SpdxLicenseEnum.LEPTONICA,
      SpdxLicenseEnum.LGPL_2_0_ONLY,
      SpdxLicenseEnum.LGPL_2_0_OR_LATER,
      SpdxLicenseEnum.LGPL_2_1_ONLY,
      SpdxLicenseEnum.LGPL_2_1_OR_LATER,
      SpdxLicenseEnum.LGPL_3_0_ONLY,
      SpdxLicenseEnum.LGPL_3_0_OR_LATER,
      SpdxLicenseEnum.LGPLLR,
      SpdxLicenseEnum.LIBPNG,
      SpdxLicenseEnum.LIBTIFF,
      SpdxLicenseEnum.LI_LI_Q_P_1_1,
      SpdxLicenseEnum.LI_LI_Q_R_1_1,
      SpdxLicenseEnum.LI_LI_Q_RPLUS_1_1,
      SpdxLicenseEnum.LINUX_OPEN_IB,
      SpdxLicenseEnum.LPL_1_0,
      SpdxLicenseEnum.LPL_1_02,
      SpdxLicenseEnum.LPPL_1_0,
      SpdxLicenseEnum.LPPL_1_1,
      SpdxLicenseEnum.LPPL_1_2,
      SpdxLicenseEnum.LPPL_1_3_A,
      SpdxLicenseEnum.LPPL_1_3_C,
      SpdxLicenseEnum.MAKE_INDEX,
      SpdxLicenseEnum.MIR_OS,
      SpdxLicenseEnum.MIT_0,
      SpdxLicenseEnum.MIT_ADVERTISING,
      SpdxLicenseEnum.MIT_CMU,
      SpdxLicenseEnum.MIT_ENNA,
      SpdxLicenseEnum.MIT_FEH,
      SpdxLicenseEnum.MIT,
      SpdxLicenseEnum.MITNFA,
      SpdxLicenseEnum.MOTOSOTO,
      SpdxLicenseEnum.MPICH_2,
      SpdxLicenseEnum.MPL_1_0,
      SpdxLicenseEnum.MPL_1_1,
      SpdxLicenseEnum.MPL_2_0_NO_COPYLEFT_EXCEPTION,
      SpdxLicenseEnum.MPL_2_0,
      SpdxLicenseEnum.MS_PL,
      SpdxLicenseEnum.MS_RL,
      SpdxLicenseEnum.MTLL,
      SpdxLicenseEnum.MULTICS,
      SpdxLicenseEnum.MUP,
      SpdxLicenseEnum.NASA_1_3,
      SpdxLicenseEnum.NAUMEN,
      SpdxLicenseEnum.NBPL_1_0,
      SpdxLicenseEnum.NCSA,
      SpdxLicenseEnum.NET_SNMP,
      SpdxLicenseEnum.NET_CDF,
      SpdxLicenseEnum.NEWSLETR,
      SpdxLicenseEnum.NGPL,
      SpdxLicenseEnum.NLOD_1_0,
      SpdxLicenseEnum.NLPL,
      SpdxLicenseEnum.NOKIA,
      SpdxLicenseEnum.NOSL,
      SpdxLicenseEnum.NOWEB,
      SpdxLicenseEnum.NPL_1_0,
      SpdxLicenseEnum.NPL_1_1,
      SpdxLicenseEnum.NPOSL_3_0,
      SpdxLicenseEnum.NRL,
      SpdxLicenseEnum.NTP,
      SpdxLicenseEnum.OCCT_PL,
      SpdxLicenseEnum.OCLC_2_0,
      SpdxLicenseEnum.O_DB_L_1_0,
      SpdxLicenseEnum.OFL_1_0,
      SpdxLicenseEnum.OFL_1_1,
      SpdxLicenseEnum.OGTSL,
      SpdxLicenseEnum.OLDAP_1_1,
      SpdxLicenseEnum.OLDAP_1_2,
      SpdxLicenseEnum.OLDAP_1_3,
      SpdxLicenseEnum.OLDAP_1_4,
      SpdxLicenseEnum.OLDAP_2_0_1,
      SpdxLicenseEnum.OLDAP_2_0,
      SpdxLicenseEnum.OLDAP_2_1,
      SpdxLicenseEnum.OLDAP_2_2_1,
      SpdxLicenseEnum.OLDAP_2_2_2,
      SpdxLicenseEnum.OLDAP_2_2,
      SpdxLicenseEnum.OLDAP_2_3,
      SpdxLicenseEnum.OLDAP_2_4,
      SpdxLicenseEnum.OLDAP_2_5,
      SpdxLicenseEnum.OLDAP_2_6,
      SpdxLicenseEnum.OLDAP_2_7,
      SpdxLicenseEnum.OLDAP_2_8,
      SpdxLicenseEnum.OML,
      SpdxLicenseEnum.OPEN_SSL,
      SpdxLicenseEnum.OPL_1_0,
      SpdxLicenseEnum.OSET_PL_2_1,
      SpdxLicenseEnum.OSL_1_0,
      SpdxLicenseEnum.OSL_1_1,
      SpdxLicenseEnum.OSL_2_0,
      SpdxLicenseEnum.OSL_2_1,
      SpdxLicenseEnum.OSL_3_0,
      SpdxLicenseEnum.PDDL_1_0,
      SpdxLicenseEnum.PHP_3_0,
      SpdxLicenseEnum.PHP_3_01,
      SpdxLicenseEnum.PLEXUS,
      SpdxLicenseEnum.POSTGRE_SQL,
      SpdxLicenseEnum.PSFRAG,
      SpdxLicenseEnum.PSUTILS,
      SpdxLicenseEnum.PYTHON_2_0,
      SpdxLicenseEnum.QHULL,
      SpdxLicenseEnum.QPL_1_0,
      SpdxLicenseEnum.RDISC,
      SpdxLicenseEnum.R_HE_COS_1_1,
      SpdxLicenseEnum.RPL_1_1,
      SpdxLicenseEnum.RPL_1_5,
      SpdxLicenseEnum.RPSL_1_0,
      SpdxLicenseEnum.RSA_MD,
      SpdxLicenseEnum.RSCPL,
      SpdxLicenseEnum.RUBY,
      SpdxLicenseEnum.SAX_PD,
      SpdxLicenseEnum.SAXPATH,
      SpdxLicenseEnum.SCEA,
      SpdxLicenseEnum.SENDMAIL,
      SpdxLicenseEnum.SGI_B_1_0,
      SpdxLicenseEnum.SGI_B_1_1,
      SpdxLicenseEnum.SGI_B_2_0,
      SpdxLicenseEnum.SIM_PL_2_0,
      SpdxLicenseEnum.SISSL_1_2,
      SpdxLicenseEnum.SISSL,
      SpdxLicenseEnum.SLEEPYCAT,
      SpdxLicenseEnum.SMLNJ,
      SpdxLicenseEnum.SMPPL,
      SpdxLicenseEnum.SNIA,
      SpdxLicenseEnum.SPENCER_86,
      SpdxLicenseEnum.SPENCER_94,
      SpdxLicenseEnum.SPENCER_99,
      SpdxLicenseEnum.SPL_1_0,
      SpdxLicenseEnum.SUGAR_CRM_1_1_3,
      SpdxLicenseEnum.SWL,
      SpdxLicenseEnum.TCL,
      SpdxLicenseEnum.TCP_WRAPPERS,
      SpdxLicenseEnum.T_MATE,
      SpdxLicenseEnum.TORQUE_1_1,
      SpdxLicenseEnum.TOSL,
      SpdxLicenseEnum.UNICODE_DFS_2015,
      SpdxLicenseEnum.UNICODE_DFS_2016,
      SpdxLicenseEnum.UNICODE_TOU,
      SpdxLicenseEnum.UNLICENSE,
      SpdxLicenseEnum.UPL_1_0,
      SpdxLicenseEnum.VIM,
      SpdxLicenseEnum.VOSTROM,
      SpdxLicenseEnum.VSL_1_0,
      SpdxLicenseEnum.W_3_C_19980720,
      SpdxLicenseEnum.W_3_C_20150513,
      SpdxLicenseEnum.W_3_C,
      SpdxLicenseEnum.WATCOM_1_0,
      SpdxLicenseEnum.WSUIPA,
      SpdxLicenseEnum.WTFPL,
      SpdxLicenseEnum.X_11,
      SpdxLicenseEnum.XEROX,
      SpdxLicenseEnum.X_FREE_86_1_1,
      SpdxLicenseEnum.XINETD,
      SpdxLicenseEnum.XNET,
      SpdxLicenseEnum.XPP,
      SpdxLicenseEnum.X_SKAT,
      SpdxLicenseEnum.YPL_1_0,
      SpdxLicenseEnum.YPL_1_1,
      SpdxLicenseEnum.ZED,
      SpdxLicenseEnum.ZEND_2_0,
      SpdxLicenseEnum.ZIMBRA_1_3,
      SpdxLicenseEnum.ZIMBRA_1_4,
      SpdxLicenseEnum.ZLIB_ACKNOWLEDGEMENT,
      SpdxLicenseEnum.ZLIB,
      SpdxLicenseEnum.ZPL_1_1,
      SpdxLicenseEnum.ZPL_2_0,
      SpdxLicenseEnum.ZPL_2_1,
      SpdxLicenseEnum.NULL
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
    } else if (SpdxLicenseEnum.NOT_OPEN_SOURCE.code === code) {
      return SpdxLicenseEnum.NOT_OPEN_SOURCE;
    } else if (SpdxLicenseEnum._0_BSD.code === code) {
      return SpdxLicenseEnum._0_BSD;
    } else if (SpdxLicenseEnum.AAL.code === code) {
      return SpdxLicenseEnum.AAL;
    } else if (SpdxLicenseEnum.ABSTYLES.code === code) {
      return SpdxLicenseEnum.ABSTYLES;
    } else if (SpdxLicenseEnum.ADOBE_2006.code === code) {
      return SpdxLicenseEnum.ADOBE_2006;
    } else if (SpdxLicenseEnum.ADOBE_GLYPH.code === code) {
      return SpdxLicenseEnum.ADOBE_GLYPH;
    } else if (SpdxLicenseEnum.ADSL.code === code) {
      return SpdxLicenseEnum.ADSL;
    } else if (SpdxLicenseEnum.AFL_1_1.code === code) {
      return SpdxLicenseEnum.AFL_1_1;
    } else if (SpdxLicenseEnum.AFL_1_2.code === code) {
      return SpdxLicenseEnum.AFL_1_2;
    } else if (SpdxLicenseEnum.AFL_2_0.code === code) {
      return SpdxLicenseEnum.AFL_2_0;
    } else if (SpdxLicenseEnum.AFL_2_1.code === code) {
      return SpdxLicenseEnum.AFL_2_1;
    } else if (SpdxLicenseEnum.AFL_3_0.code === code) {
      return SpdxLicenseEnum.AFL_3_0;
    } else if (SpdxLicenseEnum.AFMPARSE.code === code) {
      return SpdxLicenseEnum.AFMPARSE;
    } else if (SpdxLicenseEnum.AGPL_1_0_ONLY.code === code) {
      return SpdxLicenseEnum.AGPL_1_0_ONLY;
    } else if (SpdxLicenseEnum.AGPL_1_0_OR_LATER.code === code) {
      return SpdxLicenseEnum.AGPL_1_0_OR_LATER;
    } else if (SpdxLicenseEnum.AGPL_3_0_ONLY.code === code) {
      return SpdxLicenseEnum.AGPL_3_0_ONLY;
    } else if (SpdxLicenseEnum.AGPL_3_0_OR_LATER.code === code) {
      return SpdxLicenseEnum.AGPL_3_0_OR_LATER;
    } else if (SpdxLicenseEnum.ALADDIN.code === code) {
      return SpdxLicenseEnum.ALADDIN;
    } else if (SpdxLicenseEnum.AMDPLPA.code === code) {
      return SpdxLicenseEnum.AMDPLPA;
    } else if (SpdxLicenseEnum.AML.code === code) {
      return SpdxLicenseEnum.AML;
    } else if (SpdxLicenseEnum.AMPAS.code === code) {
      return SpdxLicenseEnum.AMPAS;
    } else if (SpdxLicenseEnum.ANTLR_PD.code === code) {
      return SpdxLicenseEnum.ANTLR_PD;
    } else if (SpdxLicenseEnum.APACHE_1_0.code === code) {
      return SpdxLicenseEnum.APACHE_1_0;
    } else if (SpdxLicenseEnum.APACHE_1_1.code === code) {
      return SpdxLicenseEnum.APACHE_1_1;
    } else if (SpdxLicenseEnum.APACHE_2_0.code === code) {
      return SpdxLicenseEnum.APACHE_2_0;
    } else if (SpdxLicenseEnum.APAFML.code === code) {
      return SpdxLicenseEnum.APAFML;
    } else if (SpdxLicenseEnum.APL_1_0.code === code) {
      return SpdxLicenseEnum.APL_1_0;
    } else if (SpdxLicenseEnum.APSL_1_0.code === code) {
      return SpdxLicenseEnum.APSL_1_0;
    } else if (SpdxLicenseEnum.APSL_1_1.code === code) {
      return SpdxLicenseEnum.APSL_1_1;
    } else if (SpdxLicenseEnum.APSL_1_2.code === code) {
      return SpdxLicenseEnum.APSL_1_2;
    } else if (SpdxLicenseEnum.APSL_2_0.code === code) {
      return SpdxLicenseEnum.APSL_2_0;
    } else if (SpdxLicenseEnum.ARTISTIC_1_0_CL_8.code === code) {
      return SpdxLicenseEnum.ARTISTIC_1_0_CL_8;
    } else if (SpdxLicenseEnum.ARTISTIC_1_0_PERL.code === code) {
      return SpdxLicenseEnum.ARTISTIC_1_0_PERL;
    } else if (SpdxLicenseEnum.ARTISTIC_1_0.code === code) {
      return SpdxLicenseEnum.ARTISTIC_1_0;
    } else if (SpdxLicenseEnum.ARTISTIC_2_0.code === code) {
      return SpdxLicenseEnum.ARTISTIC_2_0;
    } else if (SpdxLicenseEnum.BAHYPH.code === code) {
      return SpdxLicenseEnum.BAHYPH;
    } else if (SpdxLicenseEnum.BARR.code === code) {
      return SpdxLicenseEnum.BARR;
    } else if (SpdxLicenseEnum.BEERWARE.code === code) {
      return SpdxLicenseEnum.BEERWARE;
    } else if (SpdxLicenseEnum.BIT_TORRENT_1_0.code === code) {
      return SpdxLicenseEnum.BIT_TORRENT_1_0;
    } else if (SpdxLicenseEnum.BIT_TORRENT_1_1.code === code) {
      return SpdxLicenseEnum.BIT_TORRENT_1_1;
    } else if (SpdxLicenseEnum.BORCEUX.code === code) {
      return SpdxLicenseEnum.BORCEUX;
    } else if (SpdxLicenseEnum.BSD_1_CLAUSE.code === code) {
      return SpdxLicenseEnum.BSD_1_CLAUSE;
    } else if (SpdxLicenseEnum.BSD_2_CLAUSE_FREE_BSD.code === code) {
      return SpdxLicenseEnum.BSD_2_CLAUSE_FREE_BSD;
    } else if (SpdxLicenseEnum.BSD_2_CLAUSE_NET_BSD.code === code) {
      return SpdxLicenseEnum.BSD_2_CLAUSE_NET_BSD;
    } else if (SpdxLicenseEnum.BSD_2_CLAUSE_PATENT.code === code) {
      return SpdxLicenseEnum.BSD_2_CLAUSE_PATENT;
    } else if (SpdxLicenseEnum.BSD_2_CLAUSE.code === code) {
      return SpdxLicenseEnum.BSD_2_CLAUSE;
    } else if (SpdxLicenseEnum.BSD_3_CLAUSE_ATTRIBUTION.code === code) {
      return SpdxLicenseEnum.BSD_3_CLAUSE_ATTRIBUTION;
    } else if (SpdxLicenseEnum.BSD_3_CLAUSE_CLEAR.code === code) {
      return SpdxLicenseEnum.BSD_3_CLAUSE_CLEAR;
    } else if (SpdxLicenseEnum.BSD_3_CLAUSE_LBNL.code === code) {
      return SpdxLicenseEnum.BSD_3_CLAUSE_LBNL;
    } else if (SpdxLicenseEnum.BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014.code === code) {
      return SpdxLicenseEnum.BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014;
    } else if (SpdxLicenseEnum.BSD_3_CLAUSE_NO_NUCLEAR_LICENSE.code === code) {
      return SpdxLicenseEnum.BSD_3_CLAUSE_NO_NUCLEAR_LICENSE;
    } else if (SpdxLicenseEnum.BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY.code === code) {
      return SpdxLicenseEnum.BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY;
    } else if (SpdxLicenseEnum.BSD_3_CLAUSE.code === code) {
      return SpdxLicenseEnum.BSD_3_CLAUSE;
    } else if (SpdxLicenseEnum.BSD_4_CLAUSE_UC.code === code) {
      return SpdxLicenseEnum.BSD_4_CLAUSE_UC;
    } else if (SpdxLicenseEnum.BSD_4_CLAUSE.code === code) {
      return SpdxLicenseEnum.BSD_4_CLAUSE;
    } else if (SpdxLicenseEnum.BSD_PROTECTION.code === code) {
      return SpdxLicenseEnum.BSD_PROTECTION;
    } else if (SpdxLicenseEnum.BSD_SOURCE_CODE.code === code) {
      return SpdxLicenseEnum.BSD_SOURCE_CODE;
    } else if (SpdxLicenseEnum.BSL_1_0.code === code) {
      return SpdxLicenseEnum.BSL_1_0;
    } else if (SpdxLicenseEnum.BZIP_2_1_0_5.code === code) {
      return SpdxLicenseEnum.BZIP_2_1_0_5;
    } else if (SpdxLicenseEnum.BZIP_2_1_0_6.code === code) {
      return SpdxLicenseEnum.BZIP_2_1_0_6;
    } else if (SpdxLicenseEnum.CALDERA.code === code) {
      return SpdxLicenseEnum.CALDERA;
    } else if (SpdxLicenseEnum.CATOSL_1_1.code === code) {
      return SpdxLicenseEnum.CATOSL_1_1;
    } else if (SpdxLicenseEnum.CC_BY_1_0.code === code) {
      return SpdxLicenseEnum.CC_BY_1_0;
    } else if (SpdxLicenseEnum.CC_BY_2_0.code === code) {
      return SpdxLicenseEnum.CC_BY_2_0;
    } else if (SpdxLicenseEnum.CC_BY_2_5.code === code) {
      return SpdxLicenseEnum.CC_BY_2_5;
    } else if (SpdxLicenseEnum.CC_BY_3_0.code === code) {
      return SpdxLicenseEnum.CC_BY_3_0;
    } else if (SpdxLicenseEnum.CC_BY_4_0.code === code) {
      return SpdxLicenseEnum.CC_BY_4_0;
    } else if (SpdxLicenseEnum.CC_BY_NC_1_0.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_1_0;
    } else if (SpdxLicenseEnum.CC_BY_NC_2_0.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_2_0;
    } else if (SpdxLicenseEnum.CC_BY_NC_2_5.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_2_5;
    } else if (SpdxLicenseEnum.CC_BY_NC_3_0.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_3_0;
    } else if (SpdxLicenseEnum.CC_BY_NC_4_0.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_4_0;
    } else if (SpdxLicenseEnum.CC_BY_NC_ND_1_0.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_ND_1_0;
    } else if (SpdxLicenseEnum.CC_BY_NC_ND_2_0.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_ND_2_0;
    } else if (SpdxLicenseEnum.CC_BY_NC_ND_2_5.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_ND_2_5;
    } else if (SpdxLicenseEnum.CC_BY_NC_ND_3_0.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_ND_3_0;
    } else if (SpdxLicenseEnum.CC_BY_NC_ND_4_0.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_ND_4_0;
    } else if (SpdxLicenseEnum.CC_BY_NC_SA_1_0.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_SA_1_0;
    } else if (SpdxLicenseEnum.CC_BY_NC_SA_2_0.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_SA_2_0;
    } else if (SpdxLicenseEnum.CC_BY_NC_SA_2_5.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_SA_2_5;
    } else if (SpdxLicenseEnum.CC_BY_NC_SA_3_0.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_SA_3_0;
    } else if (SpdxLicenseEnum.CC_BY_NC_SA_4_0.code === code) {
      return SpdxLicenseEnum.CC_BY_NC_SA_4_0;
    } else if (SpdxLicenseEnum.CC_BY_ND_1_0.code === code) {
      return SpdxLicenseEnum.CC_BY_ND_1_0;
    } else if (SpdxLicenseEnum.CC_BY_ND_2_0.code === code) {
      return SpdxLicenseEnum.CC_BY_ND_2_0;
    } else if (SpdxLicenseEnum.CC_BY_ND_2_5.code === code) {
      return SpdxLicenseEnum.CC_BY_ND_2_5;
    } else if (SpdxLicenseEnum.CC_BY_ND_3_0.code === code) {
      return SpdxLicenseEnum.CC_BY_ND_3_0;
    } else if (SpdxLicenseEnum.CC_BY_ND_4_0.code === code) {
      return SpdxLicenseEnum.CC_BY_ND_4_0;
    } else if (SpdxLicenseEnum.CC_BY_SA_1_0.code === code) {
      return SpdxLicenseEnum.CC_BY_SA_1_0;
    } else if (SpdxLicenseEnum.CC_BY_SA_2_0.code === code) {
      return SpdxLicenseEnum.CC_BY_SA_2_0;
    } else if (SpdxLicenseEnum.CC_BY_SA_2_5.code === code) {
      return SpdxLicenseEnum.CC_BY_SA_2_5;
    } else if (SpdxLicenseEnum.CC_BY_SA_3_0.code === code) {
      return SpdxLicenseEnum.CC_BY_SA_3_0;
    } else if (SpdxLicenseEnum.CC_BY_SA_4_0.code === code) {
      return SpdxLicenseEnum.CC_BY_SA_4_0;
    } else if (SpdxLicenseEnum.CC_0_1_0.code === code) {
      return SpdxLicenseEnum.CC_0_1_0;
    } else if (SpdxLicenseEnum.CDDL_1_0.code === code) {
      return SpdxLicenseEnum.CDDL_1_0;
    } else if (SpdxLicenseEnum.CDDL_1_1.code === code) {
      return SpdxLicenseEnum.CDDL_1_1;
    } else if (SpdxLicenseEnum.CDLA_PERMISSIVE_1_0.code === code) {
      return SpdxLicenseEnum.CDLA_PERMISSIVE_1_0;
    } else if (SpdxLicenseEnum.CDLA_SHARING_1_0.code === code) {
      return SpdxLicenseEnum.CDLA_SHARING_1_0;
    } else if (SpdxLicenseEnum.CECILL_1_0.code === code) {
      return SpdxLicenseEnum.CECILL_1_0;
    } else if (SpdxLicenseEnum.CECILL_1_1.code === code) {
      return SpdxLicenseEnum.CECILL_1_1;
    } else if (SpdxLicenseEnum.CECILL_2_0.code === code) {
      return SpdxLicenseEnum.CECILL_2_0;
    } else if (SpdxLicenseEnum.CECILL_2_1.code === code) {
      return SpdxLicenseEnum.CECILL_2_1;
    } else if (SpdxLicenseEnum.CECILL_B.code === code) {
      return SpdxLicenseEnum.CECILL_B;
    } else if (SpdxLicenseEnum.CECILL_C.code === code) {
      return SpdxLicenseEnum.CECILL_C;
    } else if (SpdxLicenseEnum.CL_ARTISTIC.code === code) {
      return SpdxLicenseEnum.CL_ARTISTIC;
    } else if (SpdxLicenseEnum.CNRI_JYTHON.code === code) {
      return SpdxLicenseEnum.CNRI_JYTHON;
    } else if (SpdxLicenseEnum.CNRI_PYTHON_GPL_COMPATIBLE.code === code) {
      return SpdxLicenseEnum.CNRI_PYTHON_GPL_COMPATIBLE;
    } else if (SpdxLicenseEnum.CNRI_PYTHON.code === code) {
      return SpdxLicenseEnum.CNRI_PYTHON;
    } else if (SpdxLicenseEnum.CONDOR_1_1.code === code) {
      return SpdxLicenseEnum.CONDOR_1_1;
    } else if (SpdxLicenseEnum.CPAL_1_0.code === code) {
      return SpdxLicenseEnum.CPAL_1_0;
    } else if (SpdxLicenseEnum.CPL_1_0.code === code) {
      return SpdxLicenseEnum.CPL_1_0;
    } else if (SpdxLicenseEnum.CPOL_1_02.code === code) {
      return SpdxLicenseEnum.CPOL_1_02;
    } else if (SpdxLicenseEnum.CROSSWORD.code === code) {
      return SpdxLicenseEnum.CROSSWORD;
    } else if (SpdxLicenseEnum.CRYSTAL_STACKER.code === code) {
      return SpdxLicenseEnum.CRYSTAL_STACKER;
    } else if (SpdxLicenseEnum.CUA_OPL_1_0.code === code) {
      return SpdxLicenseEnum.CUA_OPL_1_0;
    } else if (SpdxLicenseEnum.CUBE.code === code) {
      return SpdxLicenseEnum.CUBE;
    } else if (SpdxLicenseEnum.CURL.code === code) {
      return SpdxLicenseEnum.CURL;
    } else if (SpdxLicenseEnum.D_FSL_1_0.code === code) {
      return SpdxLicenseEnum.D_FSL_1_0;
    } else if (SpdxLicenseEnum.DIFFMARK.code === code) {
      return SpdxLicenseEnum.DIFFMARK;
    } else if (SpdxLicenseEnum.DOC.code === code) {
      return SpdxLicenseEnum.DOC;
    } else if (SpdxLicenseEnum.DOTSEQN.code === code) {
      return SpdxLicenseEnum.DOTSEQN;
    } else if (SpdxLicenseEnum.DSDP.code === code) {
      return SpdxLicenseEnum.DSDP;
    } else if (SpdxLicenseEnum.DVIPDFM.code === code) {
      return SpdxLicenseEnum.DVIPDFM;
    } else if (SpdxLicenseEnum.ECL_1_0.code === code) {
      return SpdxLicenseEnum.ECL_1_0;
    } else if (SpdxLicenseEnum.ECL_2_0.code === code) {
      return SpdxLicenseEnum.ECL_2_0;
    } else if (SpdxLicenseEnum.EFL_1_0.code === code) {
      return SpdxLicenseEnum.EFL_1_0;
    } else if (SpdxLicenseEnum.EFL_2_0.code === code) {
      return SpdxLicenseEnum.EFL_2_0;
    } else if (SpdxLicenseEnum.E_GENIX.code === code) {
      return SpdxLicenseEnum.E_GENIX;
    } else if (SpdxLicenseEnum.ENTESSA.code === code) {
      return SpdxLicenseEnum.ENTESSA;
    } else if (SpdxLicenseEnum.EPL_1_0.code === code) {
      return SpdxLicenseEnum.EPL_1_0;
    } else if (SpdxLicenseEnum.EPL_2_0.code === code) {
      return SpdxLicenseEnum.EPL_2_0;
    } else if (SpdxLicenseEnum.ERL_PL_1_1.code === code) {
      return SpdxLicenseEnum.ERL_PL_1_1;
    } else if (SpdxLicenseEnum.EU_DATAGRID.code === code) {
      return SpdxLicenseEnum.EU_DATAGRID;
    } else if (SpdxLicenseEnum.EUPL_1_0.code === code) {
      return SpdxLicenseEnum.EUPL_1_0;
    } else if (SpdxLicenseEnum.EUPL_1_1.code === code) {
      return SpdxLicenseEnum.EUPL_1_1;
    } else if (SpdxLicenseEnum.EUPL_1_2.code === code) {
      return SpdxLicenseEnum.EUPL_1_2;
    } else if (SpdxLicenseEnum.EUROSYM.code === code) {
      return SpdxLicenseEnum.EUROSYM;
    } else if (SpdxLicenseEnum.FAIR.code === code) {
      return SpdxLicenseEnum.FAIR;
    } else if (SpdxLicenseEnum.FRAMEWORX_1_0.code === code) {
      return SpdxLicenseEnum.FRAMEWORX_1_0;
    } else if (SpdxLicenseEnum.FREE_IMAGE.code === code) {
      return SpdxLicenseEnum.FREE_IMAGE;
    } else if (SpdxLicenseEnum.FSFAP.code === code) {
      return SpdxLicenseEnum.FSFAP;
    } else if (SpdxLicenseEnum.FSFUL.code === code) {
      return SpdxLicenseEnum.FSFUL;
    } else if (SpdxLicenseEnum.FSFULLR.code === code) {
      return SpdxLicenseEnum.FSFULLR;
    } else if (SpdxLicenseEnum.FTL.code === code) {
      return SpdxLicenseEnum.FTL;
    } else if (SpdxLicenseEnum.GFDL_1_1_ONLY.code === code) {
      return SpdxLicenseEnum.GFDL_1_1_ONLY;
    } else if (SpdxLicenseEnum.GFDL_1_1_OR_LATER.code === code) {
      return SpdxLicenseEnum.GFDL_1_1_OR_LATER;
    } else if (SpdxLicenseEnum.GFDL_1_2_ONLY.code === code) {
      return SpdxLicenseEnum.GFDL_1_2_ONLY;
    } else if (SpdxLicenseEnum.GFDL_1_2_OR_LATER.code === code) {
      return SpdxLicenseEnum.GFDL_1_2_OR_LATER;
    } else if (SpdxLicenseEnum.GFDL_1_3_ONLY.code === code) {
      return SpdxLicenseEnum.GFDL_1_3_ONLY;
    } else if (SpdxLicenseEnum.GFDL_1_3_OR_LATER.code === code) {
      return SpdxLicenseEnum.GFDL_1_3_OR_LATER;
    } else if (SpdxLicenseEnum.GIFTWARE.code === code) {
      return SpdxLicenseEnum.GIFTWARE;
    } else if (SpdxLicenseEnum.GL_2_PS.code === code) {
      return SpdxLicenseEnum.GL_2_PS;
    } else if (SpdxLicenseEnum.GLIDE.code === code) {
      return SpdxLicenseEnum.GLIDE;
    } else if (SpdxLicenseEnum.GLULXE.code === code) {
      return SpdxLicenseEnum.GLULXE;
    } else if (SpdxLicenseEnum.GNUPLOT.code === code) {
      return SpdxLicenseEnum.GNUPLOT;
    } else if (SpdxLicenseEnum.GPL_1_0_ONLY.code === code) {
      return SpdxLicenseEnum.GPL_1_0_ONLY;
    } else if (SpdxLicenseEnum.GPL_1_0_OR_LATER.code === code) {
      return SpdxLicenseEnum.GPL_1_0_OR_LATER;
    } else if (SpdxLicenseEnum.GPL_2_0_ONLY.code === code) {
      return SpdxLicenseEnum.GPL_2_0_ONLY;
    } else if (SpdxLicenseEnum.GPL_2_0_OR_LATER.code === code) {
      return SpdxLicenseEnum.GPL_2_0_OR_LATER;
    } else if (SpdxLicenseEnum.GPL_3_0_ONLY.code === code) {
      return SpdxLicenseEnum.GPL_3_0_ONLY;
    } else if (SpdxLicenseEnum.GPL_3_0_OR_LATER.code === code) {
      return SpdxLicenseEnum.GPL_3_0_OR_LATER;
    } else if (SpdxLicenseEnum.G_SOAP_1_3_B.code === code) {
      return SpdxLicenseEnum.G_SOAP_1_3_B;
    } else if (SpdxLicenseEnum.HASKELL_REPORT.code === code) {
      return SpdxLicenseEnum.HASKELL_REPORT;
    } else if (SpdxLicenseEnum.HPND.code === code) {
      return SpdxLicenseEnum.HPND;
    } else if (SpdxLicenseEnum.IBM_PIBS.code === code) {
      return SpdxLicenseEnum.IBM_PIBS;
    } else if (SpdxLicenseEnum.ICU.code === code) {
      return SpdxLicenseEnum.ICU;
    } else if (SpdxLicenseEnum.IJG.code === code) {
      return SpdxLicenseEnum.IJG;
    } else if (SpdxLicenseEnum.IMAGE_MAGICK.code === code) {
      return SpdxLicenseEnum.IMAGE_MAGICK;
    } else if (SpdxLicenseEnum.I_MATIX.code === code) {
      return SpdxLicenseEnum.I_MATIX;
    } else if (SpdxLicenseEnum.IMLIB_2.code === code) {
      return SpdxLicenseEnum.IMLIB_2;
    } else if (SpdxLicenseEnum.INFO_ZIP.code === code) {
      return SpdxLicenseEnum.INFO_ZIP;
    } else if (SpdxLicenseEnum.INTEL_ACPI.code === code) {
      return SpdxLicenseEnum.INTEL_ACPI;
    } else if (SpdxLicenseEnum.INTEL.code === code) {
      return SpdxLicenseEnum.INTEL;
    } else if (SpdxLicenseEnum.INTERBASE_1_0.code === code) {
      return SpdxLicenseEnum.INTERBASE_1_0;
    } else if (SpdxLicenseEnum.IPA.code === code) {
      return SpdxLicenseEnum.IPA;
    } else if (SpdxLicenseEnum.IPL_1_0.code === code) {
      return SpdxLicenseEnum.IPL_1_0;
    } else if (SpdxLicenseEnum.ISC.code === code) {
      return SpdxLicenseEnum.ISC;
    } else if (SpdxLicenseEnum.JAS_PER_2_0.code === code) {
      return SpdxLicenseEnum.JAS_PER_2_0;
    } else if (SpdxLicenseEnum.JSON.code === code) {
      return SpdxLicenseEnum.JSON;
    } else if (SpdxLicenseEnum.LAL_1_2.code === code) {
      return SpdxLicenseEnum.LAL_1_2;
    } else if (SpdxLicenseEnum.LAL_1_3.code === code) {
      return SpdxLicenseEnum.LAL_1_3;
    } else if (SpdxLicenseEnum.LATEX_2_E.code === code) {
      return SpdxLicenseEnum.LATEX_2_E;
    } else if (SpdxLicenseEnum.LEPTONICA.code === code) {
      return SpdxLicenseEnum.LEPTONICA;
    } else if (SpdxLicenseEnum.LGPL_2_0_ONLY.code === code) {
      return SpdxLicenseEnum.LGPL_2_0_ONLY;
    } else if (SpdxLicenseEnum.LGPL_2_0_OR_LATER.code === code) {
      return SpdxLicenseEnum.LGPL_2_0_OR_LATER;
    } else if (SpdxLicenseEnum.LGPL_2_1_ONLY.code === code) {
      return SpdxLicenseEnum.LGPL_2_1_ONLY;
    } else if (SpdxLicenseEnum.LGPL_2_1_OR_LATER.code === code) {
      return SpdxLicenseEnum.LGPL_2_1_OR_LATER;
    } else if (SpdxLicenseEnum.LGPL_3_0_ONLY.code === code) {
      return SpdxLicenseEnum.LGPL_3_0_ONLY;
    } else if (SpdxLicenseEnum.LGPL_3_0_OR_LATER.code === code) {
      return SpdxLicenseEnum.LGPL_3_0_OR_LATER;
    } else if (SpdxLicenseEnum.LGPLLR.code === code) {
      return SpdxLicenseEnum.LGPLLR;
    } else if (SpdxLicenseEnum.LIBPNG.code === code) {
      return SpdxLicenseEnum.LIBPNG;
    } else if (SpdxLicenseEnum.LIBTIFF.code === code) {
      return SpdxLicenseEnum.LIBTIFF;
    } else if (SpdxLicenseEnum.LI_LI_Q_P_1_1.code === code) {
      return SpdxLicenseEnum.LI_LI_Q_P_1_1;
    } else if (SpdxLicenseEnum.LI_LI_Q_R_1_1.code === code) {
      return SpdxLicenseEnum.LI_LI_Q_R_1_1;
    } else if (SpdxLicenseEnum.LI_LI_Q_RPLUS_1_1.code === code) {
      return SpdxLicenseEnum.LI_LI_Q_RPLUS_1_1;
    } else if (SpdxLicenseEnum.LINUX_OPEN_IB.code === code) {
      return SpdxLicenseEnum.LINUX_OPEN_IB;
    } else if (SpdxLicenseEnum.LPL_1_0.code === code) {
      return SpdxLicenseEnum.LPL_1_0;
    } else if (SpdxLicenseEnum.LPL_1_02.code === code) {
      return SpdxLicenseEnum.LPL_1_02;
    } else if (SpdxLicenseEnum.LPPL_1_0.code === code) {
      return SpdxLicenseEnum.LPPL_1_0;
    } else if (SpdxLicenseEnum.LPPL_1_1.code === code) {
      return SpdxLicenseEnum.LPPL_1_1;
    } else if (SpdxLicenseEnum.LPPL_1_2.code === code) {
      return SpdxLicenseEnum.LPPL_1_2;
    } else if (SpdxLicenseEnum.LPPL_1_3_A.code === code) {
      return SpdxLicenseEnum.LPPL_1_3_A;
    } else if (SpdxLicenseEnum.LPPL_1_3_C.code === code) {
      return SpdxLicenseEnum.LPPL_1_3_C;
    } else if (SpdxLicenseEnum.MAKE_INDEX.code === code) {
      return SpdxLicenseEnum.MAKE_INDEX;
    } else if (SpdxLicenseEnum.MIR_OS.code === code) {
      return SpdxLicenseEnum.MIR_OS;
    } else if (SpdxLicenseEnum.MIT_0.code === code) {
      return SpdxLicenseEnum.MIT_0;
    } else if (SpdxLicenseEnum.MIT_ADVERTISING.code === code) {
      return SpdxLicenseEnum.MIT_ADVERTISING;
    } else if (SpdxLicenseEnum.MIT_CMU.code === code) {
      return SpdxLicenseEnum.MIT_CMU;
    } else if (SpdxLicenseEnum.MIT_ENNA.code === code) {
      return SpdxLicenseEnum.MIT_ENNA;
    } else if (SpdxLicenseEnum.MIT_FEH.code === code) {
      return SpdxLicenseEnum.MIT_FEH;
    } else if (SpdxLicenseEnum.MIT.code === code) {
      return SpdxLicenseEnum.MIT;
    } else if (SpdxLicenseEnum.MITNFA.code === code) {
      return SpdxLicenseEnum.MITNFA;
    } else if (SpdxLicenseEnum.MOTOSOTO.code === code) {
      return SpdxLicenseEnum.MOTOSOTO;
    } else if (SpdxLicenseEnum.MPICH_2.code === code) {
      return SpdxLicenseEnum.MPICH_2;
    } else if (SpdxLicenseEnum.MPL_1_0.code === code) {
      return SpdxLicenseEnum.MPL_1_0;
    } else if (SpdxLicenseEnum.MPL_1_1.code === code) {
      return SpdxLicenseEnum.MPL_1_1;
    } else if (SpdxLicenseEnum.MPL_2_0_NO_COPYLEFT_EXCEPTION.code === code) {
      return SpdxLicenseEnum.MPL_2_0_NO_COPYLEFT_EXCEPTION;
    } else if (SpdxLicenseEnum.MPL_2_0.code === code) {
      return SpdxLicenseEnum.MPL_2_0;
    } else if (SpdxLicenseEnum.MS_PL.code === code) {
      return SpdxLicenseEnum.MS_PL;
    } else if (SpdxLicenseEnum.MS_RL.code === code) {
      return SpdxLicenseEnum.MS_RL;
    } else if (SpdxLicenseEnum.MTLL.code === code) {
      return SpdxLicenseEnum.MTLL;
    } else if (SpdxLicenseEnum.MULTICS.code === code) {
      return SpdxLicenseEnum.MULTICS;
    } else if (SpdxLicenseEnum.MUP.code === code) {
      return SpdxLicenseEnum.MUP;
    } else if (SpdxLicenseEnum.NASA_1_3.code === code) {
      return SpdxLicenseEnum.NASA_1_3;
    } else if (SpdxLicenseEnum.NAUMEN.code === code) {
      return SpdxLicenseEnum.NAUMEN;
    } else if (SpdxLicenseEnum.NBPL_1_0.code === code) {
      return SpdxLicenseEnum.NBPL_1_0;
    } else if (SpdxLicenseEnum.NCSA.code === code) {
      return SpdxLicenseEnum.NCSA;
    } else if (SpdxLicenseEnum.NET_SNMP.code === code) {
      return SpdxLicenseEnum.NET_SNMP;
    } else if (SpdxLicenseEnum.NET_CDF.code === code) {
      return SpdxLicenseEnum.NET_CDF;
    } else if (SpdxLicenseEnum.NEWSLETR.code === code) {
      return SpdxLicenseEnum.NEWSLETR;
    } else if (SpdxLicenseEnum.NGPL.code === code) {
      return SpdxLicenseEnum.NGPL;
    } else if (SpdxLicenseEnum.NLOD_1_0.code === code) {
      return SpdxLicenseEnum.NLOD_1_0;
    } else if (SpdxLicenseEnum.NLPL.code === code) {
      return SpdxLicenseEnum.NLPL;
    } else if (SpdxLicenseEnum.NOKIA.code === code) {
      return SpdxLicenseEnum.NOKIA;
    } else if (SpdxLicenseEnum.NOSL.code === code) {
      return SpdxLicenseEnum.NOSL;
    } else if (SpdxLicenseEnum.NOWEB.code === code) {
      return SpdxLicenseEnum.NOWEB;
    } else if (SpdxLicenseEnum.NPL_1_0.code === code) {
      return SpdxLicenseEnum.NPL_1_0;
    } else if (SpdxLicenseEnum.NPL_1_1.code === code) {
      return SpdxLicenseEnum.NPL_1_1;
    } else if (SpdxLicenseEnum.NPOSL_3_0.code === code) {
      return SpdxLicenseEnum.NPOSL_3_0;
    } else if (SpdxLicenseEnum.NRL.code === code) {
      return SpdxLicenseEnum.NRL;
    } else if (SpdxLicenseEnum.NTP.code === code) {
      return SpdxLicenseEnum.NTP;
    } else if (SpdxLicenseEnum.OCCT_PL.code === code) {
      return SpdxLicenseEnum.OCCT_PL;
    } else if (SpdxLicenseEnum.OCLC_2_0.code === code) {
      return SpdxLicenseEnum.OCLC_2_0;
    } else if (SpdxLicenseEnum.O_DB_L_1_0.code === code) {
      return SpdxLicenseEnum.O_DB_L_1_0;
    } else if (SpdxLicenseEnum.OFL_1_0.code === code) {
      return SpdxLicenseEnum.OFL_1_0;
    } else if (SpdxLicenseEnum.OFL_1_1.code === code) {
      return SpdxLicenseEnum.OFL_1_1;
    } else if (SpdxLicenseEnum.OGTSL.code === code) {
      return SpdxLicenseEnum.OGTSL;
    } else if (SpdxLicenseEnum.OLDAP_1_1.code === code) {
      return SpdxLicenseEnum.OLDAP_1_1;
    } else if (SpdxLicenseEnum.OLDAP_1_2.code === code) {
      return SpdxLicenseEnum.OLDAP_1_2;
    } else if (SpdxLicenseEnum.OLDAP_1_3.code === code) {
      return SpdxLicenseEnum.OLDAP_1_3;
    } else if (SpdxLicenseEnum.OLDAP_1_4.code === code) {
      return SpdxLicenseEnum.OLDAP_1_4;
    } else if (SpdxLicenseEnum.OLDAP_2_0_1.code === code) {
      return SpdxLicenseEnum.OLDAP_2_0_1;
    } else if (SpdxLicenseEnum.OLDAP_2_0.code === code) {
      return SpdxLicenseEnum.OLDAP_2_0;
    } else if (SpdxLicenseEnum.OLDAP_2_1.code === code) {
      return SpdxLicenseEnum.OLDAP_2_1;
    } else if (SpdxLicenseEnum.OLDAP_2_2_1.code === code) {
      return SpdxLicenseEnum.OLDAP_2_2_1;
    } else if (SpdxLicenseEnum.OLDAP_2_2_2.code === code) {
      return SpdxLicenseEnum.OLDAP_2_2_2;
    } else if (SpdxLicenseEnum.OLDAP_2_2.code === code) {
      return SpdxLicenseEnum.OLDAP_2_2;
    } else if (SpdxLicenseEnum.OLDAP_2_3.code === code) {
      return SpdxLicenseEnum.OLDAP_2_3;
    } else if (SpdxLicenseEnum.OLDAP_2_4.code === code) {
      return SpdxLicenseEnum.OLDAP_2_4;
    } else if (SpdxLicenseEnum.OLDAP_2_5.code === code) {
      return SpdxLicenseEnum.OLDAP_2_5;
    } else if (SpdxLicenseEnum.OLDAP_2_6.code === code) {
      return SpdxLicenseEnum.OLDAP_2_6;
    } else if (SpdxLicenseEnum.OLDAP_2_7.code === code) {
      return SpdxLicenseEnum.OLDAP_2_7;
    } else if (SpdxLicenseEnum.OLDAP_2_8.code === code) {
      return SpdxLicenseEnum.OLDAP_2_8;
    } else if (SpdxLicenseEnum.OML.code === code) {
      return SpdxLicenseEnum.OML;
    } else if (SpdxLicenseEnum.OPEN_SSL.code === code) {
      return SpdxLicenseEnum.OPEN_SSL;
    } else if (SpdxLicenseEnum.OPL_1_0.code === code) {
      return SpdxLicenseEnum.OPL_1_0;
    } else if (SpdxLicenseEnum.OSET_PL_2_1.code === code) {
      return SpdxLicenseEnum.OSET_PL_2_1;
    } else if (SpdxLicenseEnum.OSL_1_0.code === code) {
      return SpdxLicenseEnum.OSL_1_0;
    } else if (SpdxLicenseEnum.OSL_1_1.code === code) {
      return SpdxLicenseEnum.OSL_1_1;
    } else if (SpdxLicenseEnum.OSL_2_0.code === code) {
      return SpdxLicenseEnum.OSL_2_0;
    } else if (SpdxLicenseEnum.OSL_2_1.code === code) {
      return SpdxLicenseEnum.OSL_2_1;
    } else if (SpdxLicenseEnum.OSL_3_0.code === code) {
      return SpdxLicenseEnum.OSL_3_0;
    } else if (SpdxLicenseEnum.PDDL_1_0.code === code) {
      return SpdxLicenseEnum.PDDL_1_0;
    } else if (SpdxLicenseEnum.PHP_3_0.code === code) {
      return SpdxLicenseEnum.PHP_3_0;
    } else if (SpdxLicenseEnum.PHP_3_01.code === code) {
      return SpdxLicenseEnum.PHP_3_01;
    } else if (SpdxLicenseEnum.PLEXUS.code === code) {
      return SpdxLicenseEnum.PLEXUS;
    } else if (SpdxLicenseEnum.POSTGRE_SQL.code === code) {
      return SpdxLicenseEnum.POSTGRE_SQL;
    } else if (SpdxLicenseEnum.PSFRAG.code === code) {
      return SpdxLicenseEnum.PSFRAG;
    } else if (SpdxLicenseEnum.PSUTILS.code === code) {
      return SpdxLicenseEnum.PSUTILS;
    } else if (SpdxLicenseEnum.PYTHON_2_0.code === code) {
      return SpdxLicenseEnum.PYTHON_2_0;
    } else if (SpdxLicenseEnum.QHULL.code === code) {
      return SpdxLicenseEnum.QHULL;
    } else if (SpdxLicenseEnum.QPL_1_0.code === code) {
      return SpdxLicenseEnum.QPL_1_0;
    } else if (SpdxLicenseEnum.RDISC.code === code) {
      return SpdxLicenseEnum.RDISC;
    } else if (SpdxLicenseEnum.R_HE_COS_1_1.code === code) {
      return SpdxLicenseEnum.R_HE_COS_1_1;
    } else if (SpdxLicenseEnum.RPL_1_1.code === code) {
      return SpdxLicenseEnum.RPL_1_1;
    } else if (SpdxLicenseEnum.RPL_1_5.code === code) {
      return SpdxLicenseEnum.RPL_1_5;
    } else if (SpdxLicenseEnum.RPSL_1_0.code === code) {
      return SpdxLicenseEnum.RPSL_1_0;
    } else if (SpdxLicenseEnum.RSA_MD.code === code) {
      return SpdxLicenseEnum.RSA_MD;
    } else if (SpdxLicenseEnum.RSCPL.code === code) {
      return SpdxLicenseEnum.RSCPL;
    } else if (SpdxLicenseEnum.RUBY.code === code) {
      return SpdxLicenseEnum.RUBY;
    } else if (SpdxLicenseEnum.SAX_PD.code === code) {
      return SpdxLicenseEnum.SAX_PD;
    } else if (SpdxLicenseEnum.SAXPATH.code === code) {
      return SpdxLicenseEnum.SAXPATH;
    } else if (SpdxLicenseEnum.SCEA.code === code) {
      return SpdxLicenseEnum.SCEA;
    } else if (SpdxLicenseEnum.SENDMAIL.code === code) {
      return SpdxLicenseEnum.SENDMAIL;
    } else if (SpdxLicenseEnum.SGI_B_1_0.code === code) {
      return SpdxLicenseEnum.SGI_B_1_0;
    } else if (SpdxLicenseEnum.SGI_B_1_1.code === code) {
      return SpdxLicenseEnum.SGI_B_1_1;
    } else if (SpdxLicenseEnum.SGI_B_2_0.code === code) {
      return SpdxLicenseEnum.SGI_B_2_0;
    } else if (SpdxLicenseEnum.SIM_PL_2_0.code === code) {
      return SpdxLicenseEnum.SIM_PL_2_0;
    } else if (SpdxLicenseEnum.SISSL_1_2.code === code) {
      return SpdxLicenseEnum.SISSL_1_2;
    } else if (SpdxLicenseEnum.SISSL.code === code) {
      return SpdxLicenseEnum.SISSL;
    } else if (SpdxLicenseEnum.SLEEPYCAT.code === code) {
      return SpdxLicenseEnum.SLEEPYCAT;
    } else if (SpdxLicenseEnum.SMLNJ.code === code) {
      return SpdxLicenseEnum.SMLNJ;
    } else if (SpdxLicenseEnum.SMPPL.code === code) {
      return SpdxLicenseEnum.SMPPL;
    } else if (SpdxLicenseEnum.SNIA.code === code) {
      return SpdxLicenseEnum.SNIA;
    } else if (SpdxLicenseEnum.SPENCER_86.code === code) {
      return SpdxLicenseEnum.SPENCER_86;
    } else if (SpdxLicenseEnum.SPENCER_94.code === code) {
      return SpdxLicenseEnum.SPENCER_94;
    } else if (SpdxLicenseEnum.SPENCER_99.code === code) {
      return SpdxLicenseEnum.SPENCER_99;
    } else if (SpdxLicenseEnum.SPL_1_0.code === code) {
      return SpdxLicenseEnum.SPL_1_0;
    } else if (SpdxLicenseEnum.SUGAR_CRM_1_1_3.code === code) {
      return SpdxLicenseEnum.SUGAR_CRM_1_1_3;
    } else if (SpdxLicenseEnum.SWL.code === code) {
      return SpdxLicenseEnum.SWL;
    } else if (SpdxLicenseEnum.TCL.code === code) {
      return SpdxLicenseEnum.TCL;
    } else if (SpdxLicenseEnum.TCP_WRAPPERS.code === code) {
      return SpdxLicenseEnum.TCP_WRAPPERS;
    } else if (SpdxLicenseEnum.T_MATE.code === code) {
      return SpdxLicenseEnum.T_MATE;
    } else if (SpdxLicenseEnum.TORQUE_1_1.code === code) {
      return SpdxLicenseEnum.TORQUE_1_1;
    } else if (SpdxLicenseEnum.TOSL.code === code) {
      return SpdxLicenseEnum.TOSL;
    } else if (SpdxLicenseEnum.UNICODE_DFS_2015.code === code) {
      return SpdxLicenseEnum.UNICODE_DFS_2015;
    } else if (SpdxLicenseEnum.UNICODE_DFS_2016.code === code) {
      return SpdxLicenseEnum.UNICODE_DFS_2016;
    } else if (SpdxLicenseEnum.UNICODE_TOU.code === code) {
      return SpdxLicenseEnum.UNICODE_TOU;
    } else if (SpdxLicenseEnum.UNLICENSE.code === code) {
      return SpdxLicenseEnum.UNLICENSE;
    } else if (SpdxLicenseEnum.UPL_1_0.code === code) {
      return SpdxLicenseEnum.UPL_1_0;
    } else if (SpdxLicenseEnum.VIM.code === code) {
      return SpdxLicenseEnum.VIM;
    } else if (SpdxLicenseEnum.VOSTROM.code === code) {
      return SpdxLicenseEnum.VOSTROM;
    } else if (SpdxLicenseEnum.VSL_1_0.code === code) {
      return SpdxLicenseEnum.VSL_1_0;
    } else if (SpdxLicenseEnum.W_3_C_19980720.code === code) {
      return SpdxLicenseEnum.W_3_C_19980720;
    } else if (SpdxLicenseEnum.W_3_C_20150513.code === code) {
      return SpdxLicenseEnum.W_3_C_20150513;
    } else if (SpdxLicenseEnum.W_3_C.code === code) {
      return SpdxLicenseEnum.W_3_C;
    } else if (SpdxLicenseEnum.WATCOM_1_0.code === code) {
      return SpdxLicenseEnum.WATCOM_1_0;
    } else if (SpdxLicenseEnum.WSUIPA.code === code) {
      return SpdxLicenseEnum.WSUIPA;
    } else if (SpdxLicenseEnum.WTFPL.code === code) {
      return SpdxLicenseEnum.WTFPL;
    } else if (SpdxLicenseEnum.X_11.code === code) {
      return SpdxLicenseEnum.X_11;
    } else if (SpdxLicenseEnum.XEROX.code === code) {
      return SpdxLicenseEnum.XEROX;
    } else if (SpdxLicenseEnum.X_FREE_86_1_1.code === code) {
      return SpdxLicenseEnum.X_FREE_86_1_1;
    } else if (SpdxLicenseEnum.XINETD.code === code) {
      return SpdxLicenseEnum.XINETD;
    } else if (SpdxLicenseEnum.XNET.code === code) {
      return SpdxLicenseEnum.XNET;
    } else if (SpdxLicenseEnum.XPP.code === code) {
      return SpdxLicenseEnum.XPP;
    } else if (SpdxLicenseEnum.X_SKAT.code === code) {
      return SpdxLicenseEnum.X_SKAT;
    } else if (SpdxLicenseEnum.YPL_1_0.code === code) {
      return SpdxLicenseEnum.YPL_1_0;
    } else if (SpdxLicenseEnum.YPL_1_1.code === code) {
      return SpdxLicenseEnum.YPL_1_1;
    } else if (SpdxLicenseEnum.ZED.code === code) {
      return SpdxLicenseEnum.ZED;
    } else if (SpdxLicenseEnum.ZEND_2_0.code === code) {
      return SpdxLicenseEnum.ZEND_2_0;
    } else if (SpdxLicenseEnum.ZIMBRA_1_3.code === code) {
      return SpdxLicenseEnum.ZIMBRA_1_3;
    } else if (SpdxLicenseEnum.ZIMBRA_1_4.code === code) {
      return SpdxLicenseEnum.ZIMBRA_1_4;
    } else if (SpdxLicenseEnum.ZLIB_ACKNOWLEDGEMENT.code === code) {
      return SpdxLicenseEnum.ZLIB_ACKNOWLEDGEMENT;
    } else if (SpdxLicenseEnum.ZLIB.code === code) {
      return SpdxLicenseEnum.ZLIB;
    } else if (SpdxLicenseEnum.ZPL_1_1.code === code) {
      return SpdxLicenseEnum.ZPL_1_1;
    } else if (SpdxLicenseEnum.ZPL_2_0.code === code) {
      return SpdxLicenseEnum.ZPL_2_0;
    } else if (SpdxLicenseEnum.ZPL_2_1.code === code) {
      return SpdxLicenseEnum.ZPL_2_1;
    } else if (SpdxLicenseEnum.NULL.code === code) {
      return SpdxLicenseEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown SpdxLicenseEnum 'code' value '${code}'`);
    }
  }
}
