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
 * ReferenceHandlingPolicyEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/reference-handling-policy
 * CodeSystem.name: ReferenceHandlingPolicy
 * CodeSystem.description: A set of flags that defines how references are supported.
 * CodeSystem.version: 4.3.0
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
 * FHIR CodeSystem: ReferenceHandlingPolicyEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ReferenceHandlingPolicy](http://hl7.org/fhir/reference-handling-policy)
 */
export class ReferenceHandlingPolicyEnum implements IFhirCodeEnum {
  public static readonly LITERAL = new FhirCodeDefinition(
    'LITERAL',
    'literal',
    'http://hl7.org/fhir/reference-handling-policy',
    'Literal References',
    'The server supports and populates Literal references (i.e. using Reference.reference) where they are known (this code does not guarantee that all references are literal; see \'enforced\').',
  );
  public static readonly LOGICAL = new FhirCodeDefinition(
    'LOGICAL',
    'logical',
    'http://hl7.org/fhir/reference-handling-policy',
    'Logical References',
    'The server allows logical references (i.e. using Reference.identifier).',
  );
  public static readonly RESOLVES = new FhirCodeDefinition(
    'RESOLVES',
    'resolves',
    'http://hl7.org/fhir/reference-handling-policy',
    'Resolves References',
    'The server will attempt to resolve logical references to literal references - i.e. converting Reference.identifier to Reference.reference (if resolution fails, the server may still accept resources; see logical).',
  );
  public static readonly ENFORCED = new FhirCodeDefinition(
    'ENFORCED',
    'enforced',
    'http://hl7.org/fhir/reference-handling-policy',
    'Reference Integrity Enforced',
    'The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems.',
  );
  public static readonly LOCAL = new FhirCodeDefinition(
    'LOCAL',
    'local',
    'http://hl7.org/fhir/reference-handling-policy',
    'Local References Only',
    'The server does not support references that point to other servers.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ReferenceHandlingPolicyEnum.LITERAL,
      ReferenceHandlingPolicyEnum.LOGICAL,
      ReferenceHandlingPolicyEnum.RESOLVES,
      ReferenceHandlingPolicyEnum.ENFORCED,
      ReferenceHandlingPolicyEnum.LOCAL,
      ReferenceHandlingPolicyEnum.NULL
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
    } else if (ReferenceHandlingPolicyEnum.LITERAL.code === code) {
      return ReferenceHandlingPolicyEnum.LITERAL;
    } else if (ReferenceHandlingPolicyEnum.LOGICAL.code === code) {
      return ReferenceHandlingPolicyEnum.LOGICAL;
    } else if (ReferenceHandlingPolicyEnum.RESOLVES.code === code) {
      return ReferenceHandlingPolicyEnum.RESOLVES;
    } else if (ReferenceHandlingPolicyEnum.ENFORCED.code === code) {
      return ReferenceHandlingPolicyEnum.ENFORCED;
    } else if (ReferenceHandlingPolicyEnum.LOCAL.code === code) {
      return ReferenceHandlingPolicyEnum.LOCAL;
    } else if (ReferenceHandlingPolicyEnum.NULL.code === code) {
      return ReferenceHandlingPolicyEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ReferenceHandlingPolicyEnum 'code' value '${code}'`);
    }
  }
}
