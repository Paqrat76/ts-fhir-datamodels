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
 * MessageheaderResponseRequestEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/messageheader-response-request
 * CodeSystem.name: MessageheaderResponseRequest
 * CodeSystem.description: HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
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
 * FHIR CodeSystem: MessageheaderResponseRequestEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MessageheaderResponseRequest](http://hl7.org/fhir/messageheader-response-request)
 */
export class MessageheaderResponseRequestEnum implements IFhirCodeEnum {
  public static readonly ALWAYS = new FhirCodeDefinition(
    'ALWAYS',
    'always',
    'http://hl7.org/fhir/messageheader-response-request',
    'Always',
    'initiator expects a response for this message.',
  );
  public static readonly ON_ERROR = new FhirCodeDefinition(
    'ON_ERROR',
    'on-error',
    'http://hl7.org/fhir/messageheader-response-request',
    'Error/reject conditions only',
    'initiator expects a response only if in error.',
  );
  public static readonly NEVER = new FhirCodeDefinition(
    'NEVER',
    'never',
    'http://hl7.org/fhir/messageheader-response-request',
    'Never',
    'initiator does not expect a response.',
  );
  public static readonly ON_SUCCESS = new FhirCodeDefinition(
    'ON_SUCCESS',
    'on-success',
    'http://hl7.org/fhir/messageheader-response-request',
    'Successful completion only',
    'initiator expects a response only if successful.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MessageheaderResponseRequestEnum.ALWAYS,
      MessageheaderResponseRequestEnum.ON_ERROR,
      MessageheaderResponseRequestEnum.NEVER,
      MessageheaderResponseRequestEnum.ON_SUCCESS,
      MessageheaderResponseRequestEnum.NULL
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
    } else if (MessageheaderResponseRequestEnum.ALWAYS.code === code) {
      return MessageheaderResponseRequestEnum.ALWAYS;
    } else if (MessageheaderResponseRequestEnum.ON_ERROR.code === code) {
      return MessageheaderResponseRequestEnum.ON_ERROR;
    } else if (MessageheaderResponseRequestEnum.NEVER.code === code) {
      return MessageheaderResponseRequestEnum.NEVER;
    } else if (MessageheaderResponseRequestEnum.ON_SUCCESS.code === code) {
      return MessageheaderResponseRequestEnum.ON_SUCCESS;
    } else if (MessageheaderResponseRequestEnum.NULL.code === code) {
      return MessageheaderResponseRequestEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MessageheaderResponseRequestEnum 'code' value '${code}'`);
    }
  }
}
