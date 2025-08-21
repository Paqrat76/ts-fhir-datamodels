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
 * MedicationrequestIntentEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/CodeSystem/medicationrequest-intent
 * CodeSystem.name: MedicationrequestIntent
 * CodeSystem.description: MedicationRequest Intent Codes
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
 * FHIR CodeSystem: MedicationrequestIntentEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MedicationrequestIntent](http://hl7.org/fhir/CodeSystem/medicationrequest-intent)
 */
export class MedicationrequestIntentEnum implements IFhirCodeEnum {
  public static readonly PROPOSAL = new FhirCodeDefinition(
    'PROPOSAL',
    'proposal',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-intent',
    'Proposal',
    'The request is a suggestion made by someone/something that doesn\'t have an intention to ensure it occurs and without providing an authorization to act',
  );
  public static readonly PLAN = new FhirCodeDefinition(
    'PLAN',
    'plan',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-intent',
    'Plan',
    'The request represents an intention to ensure something occurs without providing an authorization for others to act.',
  );
  public static readonly ORDER = new FhirCodeDefinition(
    'ORDER',
    'order',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-intent',
    'Order',
    'The request represents a request/demand and authorization for action',
  );
  public static readonly ORIGINAL_ORDER = new FhirCodeDefinition(
    'ORIGINAL_ORDER',
    'original-order',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-intent',
    'Original Order',
    'The request represents the original authorization for the medication request.',
  );
  public static readonly REFLEX_ORDER = new FhirCodeDefinition(
    'REFLEX_ORDER',
    'reflex-order',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-intent',
    'Reflex Order',
    'The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization..',
  );
  public static readonly FILLER_ORDER = new FhirCodeDefinition(
    'FILLER_ORDER',
    'filler-order',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-intent',
    'Filler Order',
    'The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller\'s intention to act upon a submitted order.',
  );
  public static readonly INSTANCE_ORDER = new FhirCodeDefinition(
    'INSTANCE_ORDER',
    'instance-order',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-intent',
    'Instance Order',
    'The request represents an instance for the particular order, for example a medication administration record.',
  );
  public static readonly OPTION = new FhirCodeDefinition(
    'OPTION',
    'option',
    'http://hl7.org/fhir/CodeSystem/medicationrequest-intent',
    'Option',
    'The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or  other constraints among a set of requests.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MedicationrequestIntentEnum.PROPOSAL,
      MedicationrequestIntentEnum.PLAN,
      MedicationrequestIntentEnum.ORDER,
      MedicationrequestIntentEnum.ORIGINAL_ORDER,
      MedicationrequestIntentEnum.REFLEX_ORDER,
      MedicationrequestIntentEnum.FILLER_ORDER,
      MedicationrequestIntentEnum.INSTANCE_ORDER,
      MedicationrequestIntentEnum.OPTION,
      MedicationrequestIntentEnum.NULL
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
    } else if (MedicationrequestIntentEnum.PROPOSAL.code === code) {
      return MedicationrequestIntentEnum.PROPOSAL;
    } else if (MedicationrequestIntentEnum.PLAN.code === code) {
      return MedicationrequestIntentEnum.PLAN;
    } else if (MedicationrequestIntentEnum.ORDER.code === code) {
      return MedicationrequestIntentEnum.ORDER;
    } else if (MedicationrequestIntentEnum.ORIGINAL_ORDER.code === code) {
      return MedicationrequestIntentEnum.ORIGINAL_ORDER;
    } else if (MedicationrequestIntentEnum.REFLEX_ORDER.code === code) {
      return MedicationrequestIntentEnum.REFLEX_ORDER;
    } else if (MedicationrequestIntentEnum.FILLER_ORDER.code === code) {
      return MedicationrequestIntentEnum.FILLER_ORDER;
    } else if (MedicationrequestIntentEnum.INSTANCE_ORDER.code === code) {
      return MedicationrequestIntentEnum.INSTANCE_ORDER;
    } else if (MedicationrequestIntentEnum.OPTION.code === code) {
      return MedicationrequestIntentEnum.OPTION;
    } else if (MedicationrequestIntentEnum.NULL.code === code) {
      return MedicationrequestIntentEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MedicationrequestIntentEnum 'code' value '${code}'`);
    }
  }
}
