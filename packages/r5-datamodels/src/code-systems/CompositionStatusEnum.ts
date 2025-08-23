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
 * CompositionStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/composition-status
 * CodeSystem.name: CompositionStatus
 * CodeSystem.description: The workflow/clinical status of the composition.
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
 * FHIR CodeSystem: CompositionStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem CompositionStatus](http://hl7.org/fhir/composition-status)
 */
export class CompositionStatusEnum implements IFhirCodeEnum {
  public static readonly REGISTERED = new FhirCodeDefinition(
    'REGISTERED',
    'registered',
    'http://hl7.org/fhir/composition-status',
    'Registered',
    'The existence of the composition is registered, but there is nothing yet available.',
  );
  public static readonly PARTIAL = new FhirCodeDefinition(
    'PARTIAL',
    'partial',
    'http://hl7.org/fhir/composition-status',
    'Partial',
    'This is a partial (e.g. initial, interim or preliminary) composition: data in the composition may be incomplete or unverified.',
  );
  public static readonly PRELIMINARY = new FhirCodeDefinition(
    'PRELIMINARY',
    'preliminary',
    'http://hl7.org/fhir/composition-status',
    'Preliminary',
    'Verified early results are available, but not all results are final.',
  );
  public static readonly FINAL = new FhirCodeDefinition(
    'FINAL',
    'final',
    'http://hl7.org/fhir/composition-status',
    'Final',
    'This version of the composition is complete and verified by an appropriate person and no further work is planned. Any subsequent updates would be on a new version of the composition.',
  );
  public static readonly AMENDED = new FhirCodeDefinition(
    'AMENDED',
    'amended',
    'http://hl7.org/fhir/composition-status',
    'Amended',
    'The composition content or the referenced resources have been modified (edited or added to) subsequent to being released as "final" and the composition is complete and verified by an authorized person.',
  );
  public static readonly CORRECTED = new FhirCodeDefinition(
    'CORRECTED',
    'corrected',
    'http://hl7.org/fhir/composition-status',
    'Corrected',
    'Subsequent to being final, the composition content has been modified to correct an error in the composition or referenced results.',
  );
  public static readonly APPENDED = new FhirCodeDefinition(
    'APPENDED',
    'appended',
    'http://hl7.org/fhir/composition-status',
    'Appended',
    'Subsequent to being final, the composition content has been modified by adding new content. The existing content is unchanged.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/composition-status',
    'Cancelled',
    'The composition is unavailable because the measurement was not started or not completed (also sometimes called "aborted").',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/composition-status',
    'Entered in Error',
    'The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid.',
  );
  public static readonly DEPRECATED = new FhirCodeDefinition(
    'DEPRECATED',
    'deprecated',
    'http://hl7.org/fhir/composition-status',
    'Deprecated',
    'This composition has been withdrawn or superseded and should no longer be used.',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/composition-status',
    'Unknown',
    'The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      CompositionStatusEnum.REGISTERED,
      CompositionStatusEnum.PARTIAL,
      CompositionStatusEnum.PRELIMINARY,
      CompositionStatusEnum.FINAL,
      CompositionStatusEnum.AMENDED,
      CompositionStatusEnum.CORRECTED,
      CompositionStatusEnum.APPENDED,
      CompositionStatusEnum.CANCELLED,
      CompositionStatusEnum.ENTERED_IN_ERROR,
      CompositionStatusEnum.DEPRECATED,
      CompositionStatusEnum.UNKNOWN,
      CompositionStatusEnum.NULL
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
    } else if (CompositionStatusEnum.REGISTERED.code === code) {
      return CompositionStatusEnum.REGISTERED;
    } else if (CompositionStatusEnum.PARTIAL.code === code) {
      return CompositionStatusEnum.PARTIAL;
    } else if (CompositionStatusEnum.PRELIMINARY.code === code) {
      return CompositionStatusEnum.PRELIMINARY;
    } else if (CompositionStatusEnum.FINAL.code === code) {
      return CompositionStatusEnum.FINAL;
    } else if (CompositionStatusEnum.AMENDED.code === code) {
      return CompositionStatusEnum.AMENDED;
    } else if (CompositionStatusEnum.CORRECTED.code === code) {
      return CompositionStatusEnum.CORRECTED;
    } else if (CompositionStatusEnum.APPENDED.code === code) {
      return CompositionStatusEnum.APPENDED;
    } else if (CompositionStatusEnum.CANCELLED.code === code) {
      return CompositionStatusEnum.CANCELLED;
    } else if (CompositionStatusEnum.ENTERED_IN_ERROR.code === code) {
      return CompositionStatusEnum.ENTERED_IN_ERROR;
    } else if (CompositionStatusEnum.DEPRECATED.code === code) {
      return CompositionStatusEnum.DEPRECATED;
    } else if (CompositionStatusEnum.UNKNOWN.code === code) {
      return CompositionStatusEnum.UNKNOWN;
    } else if (CompositionStatusEnum.NULL.code === code) {
      return CompositionStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown CompositionStatusEnum 'code' value '${code}'`);
    }
  }
}
