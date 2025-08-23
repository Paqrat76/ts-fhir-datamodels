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
 * DeviceusageStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/deviceusage-status
 * CodeSystem.name: DeviceusageStatus
 * CodeSystem.description: A coded concept indicating the current status of the Device Usage.
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
 * FHIR CodeSystem: DeviceusageStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem DeviceusageStatus](http://hl7.org/fhir/deviceusage-status)
 */
export class DeviceusageStatusEnum implements IFhirCodeEnum {
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/deviceusage-status',
    'Active',
    'The device is still being used.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/deviceusage-status',
    'Completed',
    'The device is no longer being used.',
  );
  public static readonly NOT_DONE = new FhirCodeDefinition(
    'NOT_DONE',
    'not-done',
    'http://hl7.org/fhir/deviceusage-status',
    'Not done',
    'The device was not used.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/deviceusage-status',
    'Entered in Error',
    'The statement was recorded incorrectly.',
  );
  public static readonly INTENDED = new FhirCodeDefinition(
    'INTENDED',
    'intended',
    'http://hl7.org/fhir/deviceusage-status',
    'Intended',
    'The device may be used at some time in the future.',
  );
  public static readonly STOPPED = new FhirCodeDefinition(
    'STOPPED',
    'stopped',
    'http://hl7.org/fhir/deviceusage-status',
    'Stopped',
    'Actions implied by the statement have been permanently halted, before all of them occurred.',
  );
  public static readonly ON_HOLD = new FhirCodeDefinition(
    'ON_HOLD',
    'on-hold',
    'http://hl7.org/fhir/deviceusage-status',
    'On Hold',
    'Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called "suspended".',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      DeviceusageStatusEnum.ACTIVE,
      DeviceusageStatusEnum.COMPLETED,
      DeviceusageStatusEnum.NOT_DONE,
      DeviceusageStatusEnum.ENTERED_IN_ERROR,
      DeviceusageStatusEnum.INTENDED,
      DeviceusageStatusEnum.STOPPED,
      DeviceusageStatusEnum.ON_HOLD,
      DeviceusageStatusEnum.NULL
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
    } else if (DeviceusageStatusEnum.ACTIVE.code === code) {
      return DeviceusageStatusEnum.ACTIVE;
    } else if (DeviceusageStatusEnum.COMPLETED.code === code) {
      return DeviceusageStatusEnum.COMPLETED;
    } else if (DeviceusageStatusEnum.NOT_DONE.code === code) {
      return DeviceusageStatusEnum.NOT_DONE;
    } else if (DeviceusageStatusEnum.ENTERED_IN_ERROR.code === code) {
      return DeviceusageStatusEnum.ENTERED_IN_ERROR;
    } else if (DeviceusageStatusEnum.INTENDED.code === code) {
      return DeviceusageStatusEnum.INTENDED;
    } else if (DeviceusageStatusEnum.STOPPED.code === code) {
      return DeviceusageStatusEnum.STOPPED;
    } else if (DeviceusageStatusEnum.ON_HOLD.code === code) {
      return DeviceusageStatusEnum.ON_HOLD;
    } else if (DeviceusageStatusEnum.NULL.code === code) {
      return DeviceusageStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown DeviceusageStatusEnum 'code' value '${code}'`);
    }
  }
}
