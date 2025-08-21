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
 * AuditEventActionEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/audit-event-action
 * CodeSystem.name: AuditEventAction
 * CodeSystem.description: Indicator for type of action performed during the event that generated the event.
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
 * FHIR CodeSystem: AuditEventActionEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem AuditEventAction](http://hl7.org/fhir/audit-event-action)
 */
export class AuditEventActionEnum implements IFhirCodeEnum {
  public static readonly C = new FhirCodeDefinition(
    'C',
    'C',
    'http://hl7.org/fhir/audit-event-action',
    'Create',
    'Create a new database object, such as placing an order.',
  );
  public static readonly R = new FhirCodeDefinition(
    'R',
    'R',
    'http://hl7.org/fhir/audit-event-action',
    'Read/View/Print',
    'Display or print data, such as a doctor census.',
  );
  public static readonly U = new FhirCodeDefinition(
    'U',
    'U',
    'http://hl7.org/fhir/audit-event-action',
    'Update',
    'Update data, such as revise patient information.',
  );
  public static readonly D = new FhirCodeDefinition(
    'D',
    'D',
    'http://hl7.org/fhir/audit-event-action',
    'Delete',
    'Delete items, such as a doctor master file record.',
  );
  public static readonly E = new FhirCodeDefinition(
    'E',
    'E',
    'http://hl7.org/fhir/audit-event-action',
    'Execute',
    'Perform a system or application function such as log-on, program execution or use of an object\'s method, or perform a query/search operation.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      AuditEventActionEnum.C,
      AuditEventActionEnum.R,
      AuditEventActionEnum.U,
      AuditEventActionEnum.D,
      AuditEventActionEnum.E,
      AuditEventActionEnum.NULL
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
    } else if (AuditEventActionEnum.C.code === code) {
      return AuditEventActionEnum.C;
    } else if (AuditEventActionEnum.R.code === code) {
      return AuditEventActionEnum.R;
    } else if (AuditEventActionEnum.U.code === code) {
      return AuditEventActionEnum.U;
    } else if (AuditEventActionEnum.D.code === code) {
      return AuditEventActionEnum.D;
    } else if (AuditEventActionEnum.E.code === code) {
      return AuditEventActionEnum.E;
    } else if (AuditEventActionEnum.NULL.code === code) {
      return AuditEventActionEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown AuditEventActionEnum 'code' value '${code}'`);
    }
  }
}
