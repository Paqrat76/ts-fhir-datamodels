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
 * ArtifactassessmentDispositionEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/artifactassessment-disposition
 * CodeSystem.name: ArtifactassessmentDisposition
 * CodeSystem.description: Possible values for the disposition of a comment or change request, typically used for comments and change requests, to indicate the disposition of the responsible party towards the changes suggested by the comment or change request.
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
 * FHIR CodeSystem: ArtifactassessmentDispositionEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ArtifactassessmentDisposition](http://hl7.org/fhir/artifactassessment-disposition)
 */
export class ArtifactassessmentDispositionEnum implements IFhirCodeEnum {
  public static readonly UNRESOLVED = new FhirCodeDefinition(
    'UNRESOLVED',
    'unresolved',
    'http://hl7.org/fhir/artifactassessment-disposition',
    'Unresolved',
    'The comment is unresolved',
  );
  public static readonly NOT_PERSUASIVE = new FhirCodeDefinition(
    'NOT_PERSUASIVE',
    'not-persuasive',
    'http://hl7.org/fhir/artifactassessment-disposition',
    'Not Persuasive',
    'The comment is not persuasive (rejected in full)',
  );
  public static readonly PERSUASIVE = new FhirCodeDefinition(
    'PERSUASIVE',
    'persuasive',
    'http://hl7.org/fhir/artifactassessment-disposition',
    'Persuasive',
    'The comment is persuasive (accepted in full)',
  );
  public static readonly PERSUASIVE_WITH_MODIFICATION = new FhirCodeDefinition(
    'PERSUASIVE_WITH_MODIFICATION',
    'persuasive-with-modification',
    'http://hl7.org/fhir/artifactassessment-disposition',
    'Persuasive with Modification',
    'The comment is persuasive with modification (partially accepted)',
  );
  public static readonly NOT_PERSUASIVE_WITH_MODIFICATION = new FhirCodeDefinition(
    'NOT_PERSUASIVE_WITH_MODIFICATION',
    'not-persuasive-with-modification',
    'http://hl7.org/fhir/artifactassessment-disposition',
    'Not Persuasive with Modification',
    'The comment is not persuasive with modification (partially rejected)',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ArtifactassessmentDispositionEnum.UNRESOLVED,
      ArtifactassessmentDispositionEnum.NOT_PERSUASIVE,
      ArtifactassessmentDispositionEnum.PERSUASIVE,
      ArtifactassessmentDispositionEnum.PERSUASIVE_WITH_MODIFICATION,
      ArtifactassessmentDispositionEnum.NOT_PERSUASIVE_WITH_MODIFICATION,
      ArtifactassessmentDispositionEnum.NULL
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
    } else if (ArtifactassessmentDispositionEnum.UNRESOLVED.code === code) {
      return ArtifactassessmentDispositionEnum.UNRESOLVED;
    } else if (ArtifactassessmentDispositionEnum.NOT_PERSUASIVE.code === code) {
      return ArtifactassessmentDispositionEnum.NOT_PERSUASIVE;
    } else if (ArtifactassessmentDispositionEnum.PERSUASIVE.code === code) {
      return ArtifactassessmentDispositionEnum.PERSUASIVE;
    } else if (ArtifactassessmentDispositionEnum.PERSUASIVE_WITH_MODIFICATION.code === code) {
      return ArtifactassessmentDispositionEnum.PERSUASIVE_WITH_MODIFICATION;
    } else if (ArtifactassessmentDispositionEnum.NOT_PERSUASIVE_WITH_MODIFICATION.code === code) {
      return ArtifactassessmentDispositionEnum.NOT_PERSUASIVE_WITH_MODIFICATION;
    } else if (ArtifactassessmentDispositionEnum.NULL.code === code) {
      return ArtifactassessmentDispositionEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ArtifactassessmentDispositionEnum 'code' value '${code}'`);
    }
  }
}
