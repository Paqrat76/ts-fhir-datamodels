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
 * ArtifactassessmentInformationTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/artifactassessment-information-type
 * CodeSystem.name: ArtifactassessmentInformationType
 * CodeSystem.description: The type of information contained in a component of an artifact assessment.
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
 * FHIR CodeSystem: ArtifactassessmentInformationTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ArtifactassessmentInformationType](http://hl7.org/fhir/artifactassessment-information-type)
 */
export class ArtifactassessmentInformationTypeEnum implements IFhirCodeEnum {
  public static readonly COMMENT = new FhirCodeDefinition(
    'COMMENT',
    'comment',
    'http://hl7.org/fhir/artifactassessment-information-type',
    'Comment',
    'A comment on the artifact',
  );
  public static readonly CLASSIFIER = new FhirCodeDefinition(
    'CLASSIFIER',
    'classifier',
    'http://hl7.org/fhir/artifactassessment-information-type',
    'Classifier',
    'A classifier of the artifact',
  );
  public static readonly RATING = new FhirCodeDefinition(
    'RATING',
    'rating',
    'http://hl7.org/fhir/artifactassessment-information-type',
    'Rating',
    'A rating of the artifact',
  );
  public static readonly CONTAINER = new FhirCodeDefinition(
    'CONTAINER',
    'container',
    'http://hl7.org/fhir/artifactassessment-information-type',
    'Container',
    'A container for multiple components',
  );
  public static readonly RESPONSE = new FhirCodeDefinition(
    'RESPONSE',
    'response',
    'http://hl7.org/fhir/artifactassessment-information-type',
    'Response',
    'A response to a comment',
  );
  public static readonly CHANGE_REQUEST = new FhirCodeDefinition(
    'CHANGE_REQUEST',
    'change-request',
    'http://hl7.org/fhir/artifactassessment-information-type',
    'Change Request',
    'A change request for the artifact',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ArtifactassessmentInformationTypeEnum.COMMENT,
      ArtifactassessmentInformationTypeEnum.CLASSIFIER,
      ArtifactassessmentInformationTypeEnum.RATING,
      ArtifactassessmentInformationTypeEnum.CONTAINER,
      ArtifactassessmentInformationTypeEnum.RESPONSE,
      ArtifactassessmentInformationTypeEnum.CHANGE_REQUEST,
      ArtifactassessmentInformationTypeEnum.NULL
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
    } else if (ArtifactassessmentInformationTypeEnum.COMMENT.code === code) {
      return ArtifactassessmentInformationTypeEnum.COMMENT;
    } else if (ArtifactassessmentInformationTypeEnum.CLASSIFIER.code === code) {
      return ArtifactassessmentInformationTypeEnum.CLASSIFIER;
    } else if (ArtifactassessmentInformationTypeEnum.RATING.code === code) {
      return ArtifactassessmentInformationTypeEnum.RATING;
    } else if (ArtifactassessmentInformationTypeEnum.CONTAINER.code === code) {
      return ArtifactassessmentInformationTypeEnum.CONTAINER;
    } else if (ArtifactassessmentInformationTypeEnum.RESPONSE.code === code) {
      return ArtifactassessmentInformationTypeEnum.RESPONSE;
    } else if (ArtifactassessmentInformationTypeEnum.CHANGE_REQUEST.code === code) {
      return ArtifactassessmentInformationTypeEnum.CHANGE_REQUEST;
    } else if (ArtifactassessmentInformationTypeEnum.NULL.code === code) {
      return ArtifactassessmentInformationTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ArtifactassessmentInformationTypeEnum 'code' value '${code}'`);
    }
  }
}
