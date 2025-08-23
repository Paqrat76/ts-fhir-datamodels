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
 * VariableHandlingEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/variable-handling
 * CodeSystem.name: VariableHandling
 * CodeSystem.description: The handling of the variable in statistical analysis for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
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
 * FHIR CodeSystem: VariableHandlingEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem VariableHandling](http://hl7.org/fhir/variable-handling)
 */
export class VariableHandlingEnum implements IFhirCodeEnum {
  public static readonly CONTINUOUS = new FhirCodeDefinition(
    'CONTINUOUS',
    'continuous',
    'http://hl7.org/fhir/variable-handling',
    'continuous variable',
    'A continuous variable is one for which, within the limits the variable ranges, any value is possible (from STATO http://purl.obolibrary.org/obo/STATO_0000251).',
  );
  public static readonly DICHOTOMOUS = new FhirCodeDefinition(
    'DICHOTOMOUS',
    'dichotomous',
    'http://hl7.org/fhir/variable-handling',
    'dichotomous variable',
    'A dichotomous variable is a categorical variable which is defined to have only 2 categories or possible values (from STATO http://purl.obolibrary.org/obo/STATO_0000090).',
  );
  public static readonly ORDINAL = new FhirCodeDefinition(
    'ORDINAL',
    'ordinal',
    'http://hl7.org/fhir/variable-handling',
    'ordinal variable',
    'An ordinal variable is a categorical variable where the discrete possible values are ordered or correspond to an implicit ranking (from STATO http://purl.obolibrary.org/obo/STATO_0000228).',
  );
  public static readonly POLYCHOTOMOUS = new FhirCodeDefinition(
    'POLYCHOTOMOUS',
    'polychotomous',
    'http://hl7.org/fhir/variable-handling',
    'polychotomous variable',
    'A polychotomous variable is a categorical variable which is defined to have minimally 2 categories or possible values. (from STATO  http://purl.obolibrary.org/obo/STATO_0000087).  Suggestion to limit code use to situations when neither dichotomous nor ordinal variables apply.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      VariableHandlingEnum.CONTINUOUS,
      VariableHandlingEnum.DICHOTOMOUS,
      VariableHandlingEnum.ORDINAL,
      VariableHandlingEnum.POLYCHOTOMOUS,
      VariableHandlingEnum.NULL
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
    } else if (VariableHandlingEnum.CONTINUOUS.code === code) {
      return VariableHandlingEnum.CONTINUOUS;
    } else if (VariableHandlingEnum.DICHOTOMOUS.code === code) {
      return VariableHandlingEnum.DICHOTOMOUS;
    } else if (VariableHandlingEnum.ORDINAL.code === code) {
      return VariableHandlingEnum.ORDINAL;
    } else if (VariableHandlingEnum.POLYCHOTOMOUS.code === code) {
      return VariableHandlingEnum.POLYCHOTOMOUS;
    } else if (VariableHandlingEnum.NULL.code === code) {
      return VariableHandlingEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown VariableHandlingEnum 'code' value '${code}'`);
    }
  }
}
