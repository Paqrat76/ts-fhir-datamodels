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
 * EpisodeOfCareStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/episode-of-care-status
 * CodeSystem.name: EpisodeOfCareStatus
 * CodeSystem.description: The status of the episode of care.
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
 * FHIR CodeSystem: EpisodeOfCareStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem EpisodeOfCareStatus](http://hl7.org/fhir/episode-of-care-status)
 */
export class EpisodeOfCareStatusEnum implements IFhirCodeEnum {
  public static readonly PLANNED = new FhirCodeDefinition(
    'PLANNED',
    'planned',
    'http://hl7.org/fhir/episode-of-care-status',
    'Planned',
    'This episode of care is planned to start at the date specified in the period.start. During this status, an organization may perform assessments to determine if the patient is eligible to receive services, or be organizing to make resources available to provide care services.',
  );
  public static readonly WAITLIST = new FhirCodeDefinition(
    'WAITLIST',
    'waitlist',
    'http://hl7.org/fhir/episode-of-care-status',
    'Waitlist',
    'This episode has been placed on a waitlist, pending the episode being made active (or cancelled).',
  );
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/episode-of-care-status',
    'Active',
    'This episode of care is current.',
  );
  public static readonly ONHOLD = new FhirCodeDefinition(
    'ONHOLD',
    'onhold',
    'http://hl7.org/fhir/episode-of-care-status',
    'On Hold',
    'This episode of care is on hold; the organization has limited responsibility for the patient (such as while on respite).',
  );
  public static readonly FINISHED = new FhirCodeDefinition(
    'FINISHED',
    'finished',
    'http://hl7.org/fhir/episode-of-care-status',
    'Finished',
    'This episode of care is finished and the organization is not expecting to be providing further care to the patient. Can also be known as "closed", "completed" or other similar terms.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/episode-of-care-status',
    'Cancelled',
    'The episode of care was cancelled, or withdrawn from service, often selected during the planned stage as the patient may have gone elsewhere, or the circumstances have changed and the organization is unable to provide the care. It indicates that services terminated outside the planned/expected workflow.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/episode-of-care-status',
    'Entered in Error',
    'This instance should not have been part of this patient\'s medical record.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      EpisodeOfCareStatusEnum.PLANNED,
      EpisodeOfCareStatusEnum.WAITLIST,
      EpisodeOfCareStatusEnum.ACTIVE,
      EpisodeOfCareStatusEnum.ONHOLD,
      EpisodeOfCareStatusEnum.FINISHED,
      EpisodeOfCareStatusEnum.CANCELLED,
      EpisodeOfCareStatusEnum.ENTERED_IN_ERROR,
      EpisodeOfCareStatusEnum.NULL
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
    } else if (EpisodeOfCareStatusEnum.PLANNED.code === code) {
      return EpisodeOfCareStatusEnum.PLANNED;
    } else if (EpisodeOfCareStatusEnum.WAITLIST.code === code) {
      return EpisodeOfCareStatusEnum.WAITLIST;
    } else if (EpisodeOfCareStatusEnum.ACTIVE.code === code) {
      return EpisodeOfCareStatusEnum.ACTIVE;
    } else if (EpisodeOfCareStatusEnum.ONHOLD.code === code) {
      return EpisodeOfCareStatusEnum.ONHOLD;
    } else if (EpisodeOfCareStatusEnum.FINISHED.code === code) {
      return EpisodeOfCareStatusEnum.FINISHED;
    } else if (EpisodeOfCareStatusEnum.CANCELLED.code === code) {
      return EpisodeOfCareStatusEnum.CANCELLED;
    } else if (EpisodeOfCareStatusEnum.ENTERED_IN_ERROR.code === code) {
      return EpisodeOfCareStatusEnum.ENTERED_IN_ERROR;
    } else if (EpisodeOfCareStatusEnum.NULL.code === code) {
      return EpisodeOfCareStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown EpisodeOfCareStatusEnum 'code' value '${code}'`);
    }
  }
}
