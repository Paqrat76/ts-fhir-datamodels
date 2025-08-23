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
 * PermissionRuleCombiningEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/permission-rule-combining
 * CodeSystem.name: PermissionRuleCombining
 * CodeSystem.description: Codes identifying the rule combining. See XACML Combining algorithms  http://docs.oasis-open.org/xacml/3.0/xacml-3.0-core-spec-cos01-en.html
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
 * FHIR CodeSystem: PermissionRuleCombiningEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem PermissionRuleCombining](http://hl7.org/fhir/permission-rule-combining)
 */
export class PermissionRuleCombiningEnum implements IFhirCodeEnum {
  public static readonly DENY_OVERRIDES = new FhirCodeDefinition(
    'DENY_OVERRIDES',
    'deny-overrides',
    'http://hl7.org/fhir/permission-rule-combining',
    'Deny-overrides',
    'The deny overrides combining algorithm is intended for those cases where a deny decision should have priority over a permit decision.',
  );
  public static readonly PERMIT_OVERRIDES = new FhirCodeDefinition(
    'PERMIT_OVERRIDES',
    'permit-overrides',
    'http://hl7.org/fhir/permission-rule-combining',
    'Permit-overrides',
    'The permit overrides combining algorithm is intended for those cases where a permit decision should have priority over a deny decision.',
  );
  public static readonly ORDERED_DENY_OVERRIDES = new FhirCodeDefinition(
    'ORDERED_DENY_OVERRIDES',
    'ordered-deny-overrides',
    'http://hl7.org/fhir/permission-rule-combining',
    'Ordered-deny-overrides',
    'The behavior of this algorithm is identical to that of the "Deny-overrides" rule-combining algorithm with one exception.  The order in which the collection of rules is evaluated SHALL match the order as listed in the permission.',
  );
  public static readonly ORDERED_PERMIT_OVERRIDES = new FhirCodeDefinition(
    'ORDERED_PERMIT_OVERRIDES',
    'ordered-permit-overrides',
    'http://hl7.org/fhir/permission-rule-combining',
    'Ordered-permit-overrides',
    'The behavior of this algorithm is identical to that of the "Permit-overrides" rule-combining algorithm with one exception.  The order in which the collection of rules is evaluated SHALL match the order as listed in the permission.',
  );
  public static readonly DENY_UNLESS_PERMIT = new FhirCodeDefinition(
    'DENY_UNLESS_PERMIT',
    'deny-unless-permit',
    'http://hl7.org/fhir/permission-rule-combining',
    'Deny-unless-permit',
    'The "Deny-unless-permit" combining algorithm is intended for those cases where a permit decision should have priority over a deny decision, and an "Indeterminate" or "NotApplicable" must never be the result. It is particularly useful at the top level in a policy structure to ensure that a PDP will always return a definite "Permit" or "Deny" result.',
  );
  public static readonly PERMIT_UNLESS_DENY = new FhirCodeDefinition(
    'PERMIT_UNLESS_DENY',
    'permit-unless-deny',
    'http://hl7.org/fhir/permission-rule-combining',
    'Permit-unless-deny',
    'The "Permit-unless-deny" combining algorithm is intended for those cases where a deny decision should have priority over a permit decision, and an "Indeterminate" or "NotApplicable" must never be the result. It is particularly useful at the top level in a policy structure to ensure that a PDP will always return a definite "Permit" or "Deny" result. This algorithm has the following behavior.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      PermissionRuleCombiningEnum.DENY_OVERRIDES,
      PermissionRuleCombiningEnum.PERMIT_OVERRIDES,
      PermissionRuleCombiningEnum.ORDERED_DENY_OVERRIDES,
      PermissionRuleCombiningEnum.ORDERED_PERMIT_OVERRIDES,
      PermissionRuleCombiningEnum.DENY_UNLESS_PERMIT,
      PermissionRuleCombiningEnum.PERMIT_UNLESS_DENY,
      PermissionRuleCombiningEnum.NULL
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
    } else if (PermissionRuleCombiningEnum.DENY_OVERRIDES.code === code) {
      return PermissionRuleCombiningEnum.DENY_OVERRIDES;
    } else if (PermissionRuleCombiningEnum.PERMIT_OVERRIDES.code === code) {
      return PermissionRuleCombiningEnum.PERMIT_OVERRIDES;
    } else if (PermissionRuleCombiningEnum.ORDERED_DENY_OVERRIDES.code === code) {
      return PermissionRuleCombiningEnum.ORDERED_DENY_OVERRIDES;
    } else if (PermissionRuleCombiningEnum.ORDERED_PERMIT_OVERRIDES.code === code) {
      return PermissionRuleCombiningEnum.ORDERED_PERMIT_OVERRIDES;
    } else if (PermissionRuleCombiningEnum.DENY_UNLESS_PERMIT.code === code) {
      return PermissionRuleCombiningEnum.DENY_UNLESS_PERMIT;
    } else if (PermissionRuleCombiningEnum.PERMIT_UNLESS_DENY.code === code) {
      return PermissionRuleCombiningEnum.PERMIT_UNLESS_DENY;
    } else if (PermissionRuleCombiningEnum.NULL.code === code) {
      return PermissionRuleCombiningEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown PermissionRuleCombiningEnum 'code' value '${code}'`);
    }
  }
}
