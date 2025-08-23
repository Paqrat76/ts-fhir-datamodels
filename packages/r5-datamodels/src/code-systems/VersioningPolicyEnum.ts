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
 * VersioningPolicyEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/versioning-policy
 * CodeSystem.name: VersioningPolicy
 * CodeSystem.description: How the system supports versioning for a resource.
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
 * FHIR CodeSystem: VersioningPolicyEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem VersioningPolicy](http://hl7.org/fhir/versioning-policy)
 */
export class VersioningPolicyEnum implements IFhirCodeEnum {
  public static readonly NO_VERSION = new FhirCodeDefinition(
    'NO_VERSION',
    'no-version',
    'http://hl7.org/fhir/versioning-policy',
    'No VersionId Support',
    'VersionId meta-property is not supported (server) or used (client).',
  );
  public static readonly VERSIONED = new FhirCodeDefinition(
    'VERSIONED',
    'versioned',
    'http://hl7.org/fhir/versioning-policy',
    'Versioned',
    'VersionId meta-property is supported (server) or used (client).',
  );
  public static readonly VERSIONED_UPDATE = new FhirCodeDefinition(
    'VERSIONED_UPDATE',
    'versioned-update',
    'http://hl7.org/fhir/versioning-policy',
    'VersionId tracked fully',
    'Supports version-aware updates (server) or will be specified (If-match header) for updates (client).',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      VersioningPolicyEnum.NO_VERSION,
      VersioningPolicyEnum.VERSIONED,
      VersioningPolicyEnum.VERSIONED_UPDATE,
      VersioningPolicyEnum.NULL
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
    } else if (VersioningPolicyEnum.NO_VERSION.code === code) {
      return VersioningPolicyEnum.NO_VERSION;
    } else if (VersioningPolicyEnum.VERSIONED.code === code) {
      return VersioningPolicyEnum.VERSIONED;
    } else if (VersioningPolicyEnum.VERSIONED_UPDATE.code === code) {
      return VersioningPolicyEnum.VERSIONED_UPDATE;
    } else if (VersioningPolicyEnum.NULL.code === code) {
      return VersioningPolicyEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown VersioningPolicyEnum 'code' value '${code}'`);
    }
  }
}
