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
 * RequestIntentEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/request-intent
 * CodeSystem.name: RequestIntent
 * CodeSystem.description: Codes indicating the degree of authority/intentionality associated with a request.
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
 * FHIR CodeSystem: RequestIntentEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem RequestIntent](http://hl7.org/fhir/request-intent)
 */
export class RequestIntentEnum implements IFhirCodeEnum {
  public static readonly PROPOSAL = new FhirCodeDefinition(
    'PROPOSAL',
    'proposal',
    'http://hl7.org/fhir/request-intent',
    'Proposal',
    'The request is a suggestion made by someone/something that does not have an intention to ensure it occurs and without providing an authorization to act.',
  );
  public static readonly PLAN = new FhirCodeDefinition(
    'PLAN',
    'plan',
    'http://hl7.org/fhir/request-intent',
    'Plan',
    'The request represents an intention to ensure something occurs without providing an authorization for others to act.',
  );
  public static readonly DIRECTIVE = new FhirCodeDefinition(
    'DIRECTIVE',
    'directive',
    'http://hl7.org/fhir/request-intent',
    'Directive',
    'The request represents a legally binding instruction authored by a Patient or RelatedPerson.',
  );
  public static readonly ORDER = new FhirCodeDefinition(
    'ORDER',
    'order',
    'http://hl7.org/fhir/request-intent',
    'Order',
    'The request represents a request/demand and authorization for action by the requestor.',
  );
  public static readonly ORIGINAL_ORDER = new FhirCodeDefinition(
    'ORIGINAL_ORDER',
    'original-order',
    'http://hl7.org/fhir/request-intent',
    'Original Order',
    'The request represents an original authorization for action.',
  );
  public static readonly REFLEX_ORDER = new FhirCodeDefinition(
    'REFLEX_ORDER',
    'reflex-order',
    'http://hl7.org/fhir/request-intent',
    'Reflex Order',
    'The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization.',
  );
  public static readonly FILLER_ORDER = new FhirCodeDefinition(
    'FILLER_ORDER',
    'filler-order',
    'http://hl7.org/fhir/request-intent',
    'Filler Order',
    'The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller\'s intention to act upon a submitted order.',
  );
  public static readonly INSTANCE_ORDER = new FhirCodeDefinition(
    'INSTANCE_ORDER',
    'instance-order',
    'http://hl7.org/fhir/request-intent',
    'Instance Order',
    'An order created in fulfillment of a broader order that represents the authorization for a single activity occurrence.  E.g. The administration of a single dose of a drug.',
  );
  public static readonly OPTION = new FhirCodeDefinition(
    'OPTION',
    'option',
    'http://hl7.org/fhir/request-intent',
    'Option',
    'The request represents a component or option for a RequestOrchestration that establishes timing, conditionality and/or other constraints among a set of requests.  Refer to [[[RequestOrchestration]]] for additional information on how this status is used.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      RequestIntentEnum.PROPOSAL,
      RequestIntentEnum.PLAN,
      RequestIntentEnum.DIRECTIVE,
      RequestIntentEnum.ORDER,
      RequestIntentEnum.ORIGINAL_ORDER,
      RequestIntentEnum.REFLEX_ORDER,
      RequestIntentEnum.FILLER_ORDER,
      RequestIntentEnum.INSTANCE_ORDER,
      RequestIntentEnum.OPTION,
      RequestIntentEnum.NULL
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
    } else if (RequestIntentEnum.PROPOSAL.code === code) {
      return RequestIntentEnum.PROPOSAL;
    } else if (RequestIntentEnum.PLAN.code === code) {
      return RequestIntentEnum.PLAN;
    } else if (RequestIntentEnum.DIRECTIVE.code === code) {
      return RequestIntentEnum.DIRECTIVE;
    } else if (RequestIntentEnum.ORDER.code === code) {
      return RequestIntentEnum.ORDER;
    } else if (RequestIntentEnum.ORIGINAL_ORDER.code === code) {
      return RequestIntentEnum.ORIGINAL_ORDER;
    } else if (RequestIntentEnum.REFLEX_ORDER.code === code) {
      return RequestIntentEnum.REFLEX_ORDER;
    } else if (RequestIntentEnum.FILLER_ORDER.code === code) {
      return RequestIntentEnum.FILLER_ORDER;
    } else if (RequestIntentEnum.INSTANCE_ORDER.code === code) {
      return RequestIntentEnum.INSTANCE_ORDER;
    } else if (RequestIntentEnum.OPTION.code === code) {
      return RequestIntentEnum.OPTION;
    } else if (RequestIntentEnum.NULL.code === code) {
      return RequestIntentEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown RequestIntentEnum 'code' value '${code}'`);
    }
  }
}
