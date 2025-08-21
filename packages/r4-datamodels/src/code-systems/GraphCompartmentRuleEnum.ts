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
 * GraphCompartmentRuleEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/graph-compartment-rule
 * CodeSystem.name: GraphCompartmentRule
 * CodeSystem.description: How a compartment must be linked.
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
 * FHIR CodeSystem: GraphCompartmentRuleEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem GraphCompartmentRule](http://hl7.org/fhir/graph-compartment-rule)
 */
export class GraphCompartmentRuleEnum implements IFhirCodeEnum {
  public static readonly IDENTICAL = new FhirCodeDefinition(
    'IDENTICAL',
    'identical',
    'http://hl7.org/fhir/graph-compartment-rule',
    'Identical',
    'The compartment must be identical (the same literal reference).',
  );
  public static readonly MATCHING = new FhirCodeDefinition(
    'MATCHING',
    'matching',
    'http://hl7.org/fhir/graph-compartment-rule',
    'Matching',
    'The compartment must be the same - the record must be about the same patient, but the reference may be different.',
  );
  public static readonly DIFFERENT = new FhirCodeDefinition(
    'DIFFERENT',
    'different',
    'http://hl7.org/fhir/graph-compartment-rule',
    'Different',
    'The compartment must be different.',
  );
  public static readonly CUSTOM = new FhirCodeDefinition(
    'CUSTOM',
    'custom',
    'http://hl7.org/fhir/graph-compartment-rule',
    'Custom',
    'The compartment rule is defined in the accompanying FHIRPath expression.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      GraphCompartmentRuleEnum.IDENTICAL,
      GraphCompartmentRuleEnum.MATCHING,
      GraphCompartmentRuleEnum.DIFFERENT,
      GraphCompartmentRuleEnum.CUSTOM,
      GraphCompartmentRuleEnum.NULL
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
    } else if (GraphCompartmentRuleEnum.IDENTICAL.code === code) {
      return GraphCompartmentRuleEnum.IDENTICAL;
    } else if (GraphCompartmentRuleEnum.MATCHING.code === code) {
      return GraphCompartmentRuleEnum.MATCHING;
    } else if (GraphCompartmentRuleEnum.DIFFERENT.code === code) {
      return GraphCompartmentRuleEnum.DIFFERENT;
    } else if (GraphCompartmentRuleEnum.CUSTOM.code === code) {
      return GraphCompartmentRuleEnum.CUSTOM;
    } else if (GraphCompartmentRuleEnum.NULL.code === code) {
      return GraphCompartmentRuleEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown GraphCompartmentRuleEnum 'code' value '${code}'`);
    }
  }
}
