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
 * ResearchSubjectStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/research-subject-status
 * CodeSystem.name: ResearchSubjectStatus
 * CodeSystem.description: Indicates the progression of a study subject through a study.
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
 * FHIR CodeSystem: ResearchSubjectStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ResearchSubjectStatus](http://hl7.org/fhir/research-subject-status)
 */
export class ResearchSubjectStatusEnum implements IFhirCodeEnum {
  public static readonly CANDIDATE = new FhirCodeDefinition(
    'CANDIDATE',
    'candidate',
    'http://hl7.org/fhir/research-subject-status',
    'Candidate',
    'An identified person that can be considered for inclusion in a study.',
  );
  public static readonly ELIGIBLE = new FhirCodeDefinition(
    'ELIGIBLE',
    'eligible',
    'http://hl7.org/fhir/research-subject-status',
    'Eligible',
    'A person that has met the eligibility criteria for inclusion in a study.',
  );
  public static readonly FOLLOW_UP = new FhirCodeDefinition(
    'FOLLOW_UP',
    'follow-up',
    'http://hl7.org/fhir/research-subject-status',
    'Follow-up',
    'A person is no longer receiving study intervention and/or being evaluated with tests and procedures according to the protocol, but they are being monitored on a protocol-prescribed schedule.',
  );
  public static readonly INELIGIBLE = new FhirCodeDefinition(
    'INELIGIBLE',
    'ineligible',
    'http://hl7.org/fhir/research-subject-status',
    'Ineligible',
    'A person who did not meet one or more criteria required for participation in a study is considered to have failed screening or is ineligible for the study.',
  );
  public static readonly NOT_REGISTERED = new FhirCodeDefinition(
    'NOT_REGISTERED',
    'not-registered',
    'http://hl7.org/fhir/research-subject-status',
    'Not Registered',
    'A person for whom registration was not completed.',
  );
  public static readonly OFF_STUDY = new FhirCodeDefinition(
    'OFF_STUDY',
    'off-study',
    'http://hl7.org/fhir/research-subject-status',
    'Off-study',
    'A person that has ended their participation on a study either because their treatment/observation is complete or through not responding, withdrawal, non-compliance and/or adverse event.',
  );
  public static readonly ON_STUDY = new FhirCodeDefinition(
    'ON_STUDY',
    'on-study',
    'http://hl7.org/fhir/research-subject-status',
    'On-study',
    'A person that is enrolled or registered on a study.',
  );
  public static readonly ON_STUDY_INTERVENTION = new FhirCodeDefinition(
    'ON_STUDY_INTERVENTION',
    'on-study-intervention',
    'http://hl7.org/fhir/research-subject-status',
    'On-study-intervention',
    'The person is receiving the treatment or participating in an activity (e.g. yoga, diet, etc.) that the study is evaluating.',
  );
  public static readonly ON_STUDY_OBSERVATION = new FhirCodeDefinition(
    'ON_STUDY_OBSERVATION',
    'on-study-observation',
    'http://hl7.org/fhir/research-subject-status',
    'On-study-observation',
    'The subject is being evaluated via tests and assessments according to the study calendar, but is not receiving any intervention. Note that this state is study-dependent and might not exist in all studies.  A synonym for this is "short-term follow-up".',
  );
  public static readonly PENDING_ON_STUDY = new FhirCodeDefinition(
    'PENDING_ON_STUDY',
    'pending-on-study',
    'http://hl7.org/fhir/research-subject-status',
    'Pending on-study',
    'A person is pre-registered for a study.',
  );
  public static readonly POTENTIAL_CANDIDATE = new FhirCodeDefinition(
    'POTENTIAL_CANDIDATE',
    'potential-candidate',
    'http://hl7.org/fhir/research-subject-status',
    'Potential Candidate',
    'A person that is potentially eligible for participation in the study.',
  );
  public static readonly SCREENING = new FhirCodeDefinition(
    'SCREENING',
    'screening',
    'http://hl7.org/fhir/research-subject-status',
    'Screening',
    'A person who is being evaluated for eligibility for a study.',
  );
  public static readonly WITHDRAWN = new FhirCodeDefinition(
    'WITHDRAWN',
    'withdrawn',
    'http://hl7.org/fhir/research-subject-status',
    'Withdrawn',
    'The person has withdrawn their participation in the study before registration.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ResearchSubjectStatusEnum.CANDIDATE,
      ResearchSubjectStatusEnum.ELIGIBLE,
      ResearchSubjectStatusEnum.FOLLOW_UP,
      ResearchSubjectStatusEnum.INELIGIBLE,
      ResearchSubjectStatusEnum.NOT_REGISTERED,
      ResearchSubjectStatusEnum.OFF_STUDY,
      ResearchSubjectStatusEnum.ON_STUDY,
      ResearchSubjectStatusEnum.ON_STUDY_INTERVENTION,
      ResearchSubjectStatusEnum.ON_STUDY_OBSERVATION,
      ResearchSubjectStatusEnum.PENDING_ON_STUDY,
      ResearchSubjectStatusEnum.POTENTIAL_CANDIDATE,
      ResearchSubjectStatusEnum.SCREENING,
      ResearchSubjectStatusEnum.WITHDRAWN,
      ResearchSubjectStatusEnum.NULL
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
    } else if (ResearchSubjectStatusEnum.CANDIDATE.code === code) {
      return ResearchSubjectStatusEnum.CANDIDATE;
    } else if (ResearchSubjectStatusEnum.ELIGIBLE.code === code) {
      return ResearchSubjectStatusEnum.ELIGIBLE;
    } else if (ResearchSubjectStatusEnum.FOLLOW_UP.code === code) {
      return ResearchSubjectStatusEnum.FOLLOW_UP;
    } else if (ResearchSubjectStatusEnum.INELIGIBLE.code === code) {
      return ResearchSubjectStatusEnum.INELIGIBLE;
    } else if (ResearchSubjectStatusEnum.NOT_REGISTERED.code === code) {
      return ResearchSubjectStatusEnum.NOT_REGISTERED;
    } else if (ResearchSubjectStatusEnum.OFF_STUDY.code === code) {
      return ResearchSubjectStatusEnum.OFF_STUDY;
    } else if (ResearchSubjectStatusEnum.ON_STUDY.code === code) {
      return ResearchSubjectStatusEnum.ON_STUDY;
    } else if (ResearchSubjectStatusEnum.ON_STUDY_INTERVENTION.code === code) {
      return ResearchSubjectStatusEnum.ON_STUDY_INTERVENTION;
    } else if (ResearchSubjectStatusEnum.ON_STUDY_OBSERVATION.code === code) {
      return ResearchSubjectStatusEnum.ON_STUDY_OBSERVATION;
    } else if (ResearchSubjectStatusEnum.PENDING_ON_STUDY.code === code) {
      return ResearchSubjectStatusEnum.PENDING_ON_STUDY;
    } else if (ResearchSubjectStatusEnum.POTENTIAL_CANDIDATE.code === code) {
      return ResearchSubjectStatusEnum.POTENTIAL_CANDIDATE;
    } else if (ResearchSubjectStatusEnum.SCREENING.code === code) {
      return ResearchSubjectStatusEnum.SCREENING;
    } else if (ResearchSubjectStatusEnum.WITHDRAWN.code === code) {
      return ResearchSubjectStatusEnum.WITHDRAWN;
    } else if (ResearchSubjectStatusEnum.NULL.code === code) {
      return ResearchSubjectStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ResearchSubjectStatusEnum 'code' value '${code}'`);
    }
  }
}
