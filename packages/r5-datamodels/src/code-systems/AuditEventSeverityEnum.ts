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
 * AuditEventSeverityEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/audit-event-severity
 * CodeSystem.name: AuditEventSeverity
 * CodeSystem.description: The severity of the audit entry.
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
 * FHIR CodeSystem: AuditEventSeverityEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem AuditEventSeverity](http://hl7.org/fhir/audit-event-severity)
 */
export class AuditEventSeverityEnum implements IFhirCodeEnum {
  public static readonly EMERGENCY = new FhirCodeDefinition(
    'EMERGENCY',
    'emergency',
    'http://hl7.org/fhir/audit-event-severity',
    'Emergency',
    'System is unusable. e.g., This level should only be reported by infrastructure and should not be used by applications.',
  );
  public static readonly ALERT = new FhirCodeDefinition(
    'ALERT',
    'alert',
    'http://hl7.org/fhir/audit-event-severity',
    'Alert',
    'Notification should be sent to trigger action be taken. e.g., Loss of the primary network connection needing attention.',
  );
  public static readonly CRITICAL = new FhirCodeDefinition(
    'CRITICAL',
    'critical',
    'http://hl7.org/fhir/audit-event-severity',
    'Critical',
    'Critical conditions. e.g., A failure in the system\'s primary application that will reset automatically.',
  );
  public static readonly ERROR = new FhirCodeDefinition(
    'ERROR',
    'error',
    'http://hl7.org/fhir/audit-event-severity',
    'Error',
    'Error conditions. e.g., An application has exceeded its file storage limit and attempts to write are failing. ',
  );
  public static readonly WARNING = new FhirCodeDefinition(
    'WARNING',
    'warning',
    'http://hl7.org/fhir/audit-event-severity',
    'Warning',
    'Warning conditions. May indicate that an error will occur if action is not taken. e.g., A non-root file system has only 2GB remaining.',
  );
  public static readonly NOTICE = new FhirCodeDefinition(
    'NOTICE',
    'notice',
    'http://hl7.org/fhir/audit-event-severity',
    'Notice',
    'Notice messages. Normal but significant condition. Events that are unusual, but not error conditions.',
  );
  public static readonly INFORMATIONAL = new FhirCodeDefinition(
    'INFORMATIONAL',
    'informational',
    'http://hl7.org/fhir/audit-event-severity',
    'Informational',
    'Normal operational messages that require no action. e.g., An application has started, paused, or ended successfully.',
  );
  public static readonly DEBUG = new FhirCodeDefinition(
    'DEBUG',
    'debug',
    'http://hl7.org/fhir/audit-event-severity',
    'Debug',
    'Debug-level messages. Information useful to developers for debugging the application.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      AuditEventSeverityEnum.EMERGENCY,
      AuditEventSeverityEnum.ALERT,
      AuditEventSeverityEnum.CRITICAL,
      AuditEventSeverityEnum.ERROR,
      AuditEventSeverityEnum.WARNING,
      AuditEventSeverityEnum.NOTICE,
      AuditEventSeverityEnum.INFORMATIONAL,
      AuditEventSeverityEnum.DEBUG,
      AuditEventSeverityEnum.NULL
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
    } else if (AuditEventSeverityEnum.EMERGENCY.code === code) {
      return AuditEventSeverityEnum.EMERGENCY;
    } else if (AuditEventSeverityEnum.ALERT.code === code) {
      return AuditEventSeverityEnum.ALERT;
    } else if (AuditEventSeverityEnum.CRITICAL.code === code) {
      return AuditEventSeverityEnum.CRITICAL;
    } else if (AuditEventSeverityEnum.ERROR.code === code) {
      return AuditEventSeverityEnum.ERROR;
    } else if (AuditEventSeverityEnum.WARNING.code === code) {
      return AuditEventSeverityEnum.WARNING;
    } else if (AuditEventSeverityEnum.NOTICE.code === code) {
      return AuditEventSeverityEnum.NOTICE;
    } else if (AuditEventSeverityEnum.INFORMATIONAL.code === code) {
      return AuditEventSeverityEnum.INFORMATIONAL;
    } else if (AuditEventSeverityEnum.DEBUG.code === code) {
      return AuditEventSeverityEnum.DEBUG;
    } else if (AuditEventSeverityEnum.NULL.code === code) {
      return AuditEventSeverityEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown AuditEventSeverityEnum 'code' value '${code}'`);
    }
  }
}
