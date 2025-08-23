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
 * DetectedissueSeverityEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/detectedissue-severity
 * CodeSystem.name: DetectedissueSeverity
 * CodeSystem.description: Indicates the potential degree of impact of the identified issue on the patient.
 * CodeSystem.version: 4.3.0
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
 * FHIR CodeSystem: DetectedissueSeverityEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem DetectedissueSeverity](http://hl7.org/fhir/detectedissue-severity)
 */
export class DetectedissueSeverityEnum implements IFhirCodeEnum {
  public static readonly HIGH = new FhirCodeDefinition(
    'HIGH',
    'high',
    'http://hl7.org/fhir/detectedissue-severity',
    'High',
    'Indicates the issue may be life-threatening or has the potential to cause permanent injury.',
  );
  public static readonly MODERATE = new FhirCodeDefinition(
    'MODERATE',
    'moderate',
    'http://hl7.org/fhir/detectedissue-severity',
    'Moderate',
    'Indicates the issue may result in noticeable adverse consequences but is unlikely to be life-threatening or cause permanent injury.',
  );
  public static readonly LOW = new FhirCodeDefinition(
    'LOW',
    'low',
    'http://hl7.org/fhir/detectedissue-severity',
    'Low',
    'Indicates the issue may result in some adverse consequences but is unlikely to substantially affect the situation of the subject.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      DetectedissueSeverityEnum.HIGH,
      DetectedissueSeverityEnum.MODERATE,
      DetectedissueSeverityEnum.LOW,
      DetectedissueSeverityEnum.NULL
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
    } else if (DetectedissueSeverityEnum.HIGH.code === code) {
      return DetectedissueSeverityEnum.HIGH;
    } else if (DetectedissueSeverityEnum.MODERATE.code === code) {
      return DetectedissueSeverityEnum.MODERATE;
    } else if (DetectedissueSeverityEnum.LOW.code === code) {
      return DetectedissueSeverityEnum.LOW;
    } else if (DetectedissueSeverityEnum.NULL.code === code) {
      return DetectedissueSeverityEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown DetectedissueSeverityEnum 'code' value '${code}'`);
    }
  }
}
