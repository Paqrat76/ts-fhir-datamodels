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
 * ArtifactassessmentWorkflowStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/artifactassessment-workflow-status
 * CodeSystem.name: ArtifactassessmentWorkflowStatus
 * CodeSystem.description: Possible values for the workflow status of the comment or assessment, typically used to coordinate workflow around the process of accepting and rejecting changes and comments on the artifact.
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
 * FHIR CodeSystem: ArtifactassessmentWorkflowStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ArtifactassessmentWorkflowStatus](http://hl7.org/fhir/artifactassessment-workflow-status)
 */
export class ArtifactassessmentWorkflowStatusEnum implements IFhirCodeEnum {
  public static readonly SUBMITTED = new FhirCodeDefinition(
    'SUBMITTED',
    'submitted',
    'http://hl7.org/fhir/artifactassessment-workflow-status',
    'Submitted',
    'The comment has been submitted, but the responsible party has not yet been determined, or the responsible party has not yet determined the next steps to be taken.',
  );
  public static readonly TRIAGED = new FhirCodeDefinition(
    'TRIAGED',
    'triaged',
    'http://hl7.org/fhir/artifactassessment-workflow-status',
    'Triaged',
    'The comment has been triaged, meaning the responsible party has been determined and next steps have been identified to address the comment.',
  );
  public static readonly WAITING_FOR_INPUT = new FhirCodeDefinition(
    'WAITING_FOR_INPUT',
    'waiting-for-input',
    'http://hl7.org/fhir/artifactassessment-workflow-status',
    'Waiting for Input',
    'The comment is waiting for input from a specific party before next steps can be taken.',
  );
  public static readonly RESOLVED_NO_CHANGE = new FhirCodeDefinition(
    'RESOLVED_NO_CHANGE',
    'resolved-no-change',
    'http://hl7.org/fhir/artifactassessment-workflow-status',
    'Resolved - No Change',
    'The comment has been resolved and no changes resulted from the resolution',
  );
  public static readonly RESOLVED_CHANGE_REQUIRED = new FhirCodeDefinition(
    'RESOLVED_CHANGE_REQUIRED',
    'resolved-change-required',
    'http://hl7.org/fhir/artifactassessment-workflow-status',
    'Resolved - Change Required',
    'The comment has been resolved and changes are required to address the comment',
  );
  public static readonly DEFERRED = new FhirCodeDefinition(
    'DEFERRED',
    'deferred',
    'http://hl7.org/fhir/artifactassessment-workflow-status',
    'Deferred',
    'The comment is acceptable, but resolution of the comment and application of any associated changes have been deferred',
  );
  public static readonly DUPLICATE = new FhirCodeDefinition(
    'DUPLICATE',
    'duplicate',
    'http://hl7.org/fhir/artifactassessment-workflow-status',
    'Duplicate',
    'The comment is a duplicate of another comment already received',
  );
  public static readonly APPLIED = new FhirCodeDefinition(
    'APPLIED',
    'applied',
    'http://hl7.org/fhir/artifactassessment-workflow-status',
    'Applied',
    'The comment is resolved and any necessary changes have been applied',
  );
  public static readonly PUBLISHED = new FhirCodeDefinition(
    'PUBLISHED',
    'published',
    'http://hl7.org/fhir/artifactassessment-workflow-status',
    'Published',
    'The necessary changes to the artifact have been published in a new version of the artifact',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/artifactassessment-workflow-status',
    'Entered in Error',
    'The assessment was entered in error',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ArtifactassessmentWorkflowStatusEnum.SUBMITTED,
      ArtifactassessmentWorkflowStatusEnum.TRIAGED,
      ArtifactassessmentWorkflowStatusEnum.WAITING_FOR_INPUT,
      ArtifactassessmentWorkflowStatusEnum.RESOLVED_NO_CHANGE,
      ArtifactassessmentWorkflowStatusEnum.RESOLVED_CHANGE_REQUIRED,
      ArtifactassessmentWorkflowStatusEnum.DEFERRED,
      ArtifactassessmentWorkflowStatusEnum.DUPLICATE,
      ArtifactassessmentWorkflowStatusEnum.APPLIED,
      ArtifactassessmentWorkflowStatusEnum.PUBLISHED,
      ArtifactassessmentWorkflowStatusEnum.ENTERED_IN_ERROR,
      ArtifactassessmentWorkflowStatusEnum.NULL
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
    } else if (ArtifactassessmentWorkflowStatusEnum.SUBMITTED.code === code) {
      return ArtifactassessmentWorkflowStatusEnum.SUBMITTED;
    } else if (ArtifactassessmentWorkflowStatusEnum.TRIAGED.code === code) {
      return ArtifactassessmentWorkflowStatusEnum.TRIAGED;
    } else if (ArtifactassessmentWorkflowStatusEnum.WAITING_FOR_INPUT.code === code) {
      return ArtifactassessmentWorkflowStatusEnum.WAITING_FOR_INPUT;
    } else if (ArtifactassessmentWorkflowStatusEnum.RESOLVED_NO_CHANGE.code === code) {
      return ArtifactassessmentWorkflowStatusEnum.RESOLVED_NO_CHANGE;
    } else if (ArtifactassessmentWorkflowStatusEnum.RESOLVED_CHANGE_REQUIRED.code === code) {
      return ArtifactassessmentWorkflowStatusEnum.RESOLVED_CHANGE_REQUIRED;
    } else if (ArtifactassessmentWorkflowStatusEnum.DEFERRED.code === code) {
      return ArtifactassessmentWorkflowStatusEnum.DEFERRED;
    } else if (ArtifactassessmentWorkflowStatusEnum.DUPLICATE.code === code) {
      return ArtifactassessmentWorkflowStatusEnum.DUPLICATE;
    } else if (ArtifactassessmentWorkflowStatusEnum.APPLIED.code === code) {
      return ArtifactassessmentWorkflowStatusEnum.APPLIED;
    } else if (ArtifactassessmentWorkflowStatusEnum.PUBLISHED.code === code) {
      return ArtifactassessmentWorkflowStatusEnum.PUBLISHED;
    } else if (ArtifactassessmentWorkflowStatusEnum.ENTERED_IN_ERROR.code === code) {
      return ArtifactassessmentWorkflowStatusEnum.ENTERED_IN_ERROR;
    } else if (ArtifactassessmentWorkflowStatusEnum.NULL.code === code) {
      return ArtifactassessmentWorkflowStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ArtifactassessmentWorkflowStatusEnum 'code' value '${code}'`);
    }
  }
}
