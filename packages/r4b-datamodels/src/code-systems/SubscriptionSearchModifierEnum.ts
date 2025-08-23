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
 * SubscriptionSearchModifierEnum Module
 *
 * CodeSystem.url: http://terminology.hl7.org/CodeSystem/subscription-search-modifier
 * CodeSystem.name: SubscriptionSearchModifier
 * CodeSystem.description: This codesystem defines a set of codes that can be used to filter Subscription triggers.
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
 * FHIR CodeSystem: SubscriptionSearchModifierEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem SubscriptionSearchModifier](http://terminology.hl7.org/CodeSystem/subscription-search-modifier)
 */
export class SubscriptionSearchModifierEnum implements IFhirCodeEnum {
  public static readonly EQUAL_TO = new FhirCodeDefinition(
    'EQUAL_TO',
    '=',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    '=',
    'Used to match a value according to FHIR Search rules (e.g., Patient/123, Encounter/2002).',
  );
  public static readonly EQ = new FhirCodeDefinition(
    'EQ',
    'eq',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'Equal',
    'The value for the parameter in the resource is equal to the provided value.',
  );
  public static readonly NE = new FhirCodeDefinition(
    'NE',
    'ne',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'Not Equal',
    'The value for the parameter in the resource is not equal to the provided value.',
  );
  public static readonly GT = new FhirCodeDefinition(
    'GT',
    'gt',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'Greater Than',
    'The value for the parameter in the resource is greater than the provided value.',
  );
  public static readonly LT = new FhirCodeDefinition(
    'LT',
    'lt',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'Less Than',
    'The value for the parameter in the resource is less than the provided value.',
  );
  public static readonly GE = new FhirCodeDefinition(
    'GE',
    'ge',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'Greater Than or Equal',
    'The value for the parameter in the resource is greater or equal to the provided value.',
  );
  public static readonly LE = new FhirCodeDefinition(
    'LE',
    'le',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'Less Than or Equal',
    'The value for the parameter in the resource is less or equal to the provided value.',
  );
  public static readonly SA = new FhirCodeDefinition(
    'SA',
    'sa',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'Starts After',
    'The value for the parameter in the resource starts after the provided value.',
  );
  public static readonly EB = new FhirCodeDefinition(
    'EB',
    'eb',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'Ends Before',
    'The value for the parameter in the resource ends before the provided value.',
  );
  public static readonly AP = new FhirCodeDefinition(
    'AP',
    'ap',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'Approximately',
    'The value for the parameter in the resource is approximately the same to the provided value. Note that the recommended value for the approximation is 10% of the stated value (or for a date, 10% of the gap between now and the date), but systems may choose other values where appropriate.',
  );
  public static readonly ABOVE = new FhirCodeDefinition(
    'ABOVE',
    'above',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'Above',
    'The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource subsumes the specified search code.',
  );
  public static readonly BELOW = new FhirCodeDefinition(
    'BELOW',
    'below',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'Below',
    'The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource is subsumed by the specified search code.',
  );
  public static readonly IN = new FhirCodeDefinition(
    'IN',
    'in',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'In',
    'The search parameter is a member of a Group or List, or the search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the value is present in the specified Group, List, or Value Set.',
  );
  public static readonly NOT_IN = new FhirCodeDefinition(
    'NOT_IN',
    'not-in',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'Not In',
    'The search parameter is a member of a Group or List, or the search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the value is NOT present in the specified Group, List, or Value Set.',
  );
  public static readonly OF_TYPE = new FhirCodeDefinition(
    'OF_TYPE',
    'of-type',
    'http://terminology.hl7.org/CodeSystem/subscription-search-modifier',
    'Of Type',
    'The search parameter has the format system|code|value, where the system and code refer to a Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      SubscriptionSearchModifierEnum.EQUAL_TO,
      SubscriptionSearchModifierEnum.EQ,
      SubscriptionSearchModifierEnum.NE,
      SubscriptionSearchModifierEnum.GT,
      SubscriptionSearchModifierEnum.LT,
      SubscriptionSearchModifierEnum.GE,
      SubscriptionSearchModifierEnum.LE,
      SubscriptionSearchModifierEnum.SA,
      SubscriptionSearchModifierEnum.EB,
      SubscriptionSearchModifierEnum.AP,
      SubscriptionSearchModifierEnum.ABOVE,
      SubscriptionSearchModifierEnum.BELOW,
      SubscriptionSearchModifierEnum.IN,
      SubscriptionSearchModifierEnum.NOT_IN,
      SubscriptionSearchModifierEnum.OF_TYPE,
      SubscriptionSearchModifierEnum.NULL
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
    } else if (SubscriptionSearchModifierEnum.EQUAL_TO.code === code) {
      return SubscriptionSearchModifierEnum.EQUAL_TO;
    } else if (SubscriptionSearchModifierEnum.EQ.code === code) {
      return SubscriptionSearchModifierEnum.EQ;
    } else if (SubscriptionSearchModifierEnum.NE.code === code) {
      return SubscriptionSearchModifierEnum.NE;
    } else if (SubscriptionSearchModifierEnum.GT.code === code) {
      return SubscriptionSearchModifierEnum.GT;
    } else if (SubscriptionSearchModifierEnum.LT.code === code) {
      return SubscriptionSearchModifierEnum.LT;
    } else if (SubscriptionSearchModifierEnum.GE.code === code) {
      return SubscriptionSearchModifierEnum.GE;
    } else if (SubscriptionSearchModifierEnum.LE.code === code) {
      return SubscriptionSearchModifierEnum.LE;
    } else if (SubscriptionSearchModifierEnum.SA.code === code) {
      return SubscriptionSearchModifierEnum.SA;
    } else if (SubscriptionSearchModifierEnum.EB.code === code) {
      return SubscriptionSearchModifierEnum.EB;
    } else if (SubscriptionSearchModifierEnum.AP.code === code) {
      return SubscriptionSearchModifierEnum.AP;
    } else if (SubscriptionSearchModifierEnum.ABOVE.code === code) {
      return SubscriptionSearchModifierEnum.ABOVE;
    } else if (SubscriptionSearchModifierEnum.BELOW.code === code) {
      return SubscriptionSearchModifierEnum.BELOW;
    } else if (SubscriptionSearchModifierEnum.IN.code === code) {
      return SubscriptionSearchModifierEnum.IN;
    } else if (SubscriptionSearchModifierEnum.NOT_IN.code === code) {
      return SubscriptionSearchModifierEnum.NOT_IN;
    } else if (SubscriptionSearchModifierEnum.OF_TYPE.code === code) {
      return SubscriptionSearchModifierEnum.OF_TYPE;
    } else if (SubscriptionSearchModifierEnum.NULL.code === code) {
      return SubscriptionSearchModifierEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown SubscriptionSearchModifierEnum 'code' value '${code}'`);
    }
  }
}
