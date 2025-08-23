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
 * CodesystemHierarchyMeaningEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/codesystem-hierarchy-meaning
 * CodeSystem.name: CodesystemHierarchyMeaning
 * CodeSystem.description: The meaning of the hierarchy of concepts in a code system.
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
 * FHIR CodeSystem: CodesystemHierarchyMeaningEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem CodesystemHierarchyMeaning](http://hl7.org/fhir/codesystem-hierarchy-meaning)
 */
export class CodesystemHierarchyMeaningEnum implements IFhirCodeEnum {
  public static readonly GROUPED_BY = new FhirCodeDefinition(
    'GROUPED_BY',
    'grouped-by',
    'http://hl7.org/fhir/codesystem-hierarchy-meaning',
    'Grouped By',
    'No particular relationship between the concepts can be assumed, except what can be determined by inspection of the definitions of the elements (possible reasons to use this: importing from a source where this is not defined, or where various parts of the hierarchy have different meanings).',
  );
  public static readonly IS_A = new FhirCodeDefinition(
    'IS_A',
    'is-a',
    'http://hl7.org/fhir/codesystem-hierarchy-meaning',
    'Is-A',
    'A hierarchy where the child concepts have an IS-A relationship with the parents - that is, all the properties of the parent are also true for its child concepts. Not that is-a is a property of the concepts, so additional subsumption relationships may be defined using properties.',
  );
  public static readonly PART_OF = new FhirCodeDefinition(
    'PART_OF',
    'part-of',
    'http://hl7.org/fhir/codesystem-hierarchy-meaning',
    'Part Of',
    'Child elements list the individual parts of a composite whole (e.g. body site).',
  );
  public static readonly CLASSIFIED_WITH = new FhirCodeDefinition(
    'CLASSIFIED_WITH',
    'classified-with',
    'http://hl7.org/fhir/codesystem-hierarchy-meaning',
    'Classified With',
    'Child concepts in the hierarchy may have only one parent, and there is a presumption that the code system is a "closed world" meaning all things must be in the hierarchy. This results in concepts such as "not otherwise classified.".',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      CodesystemHierarchyMeaningEnum.GROUPED_BY,
      CodesystemHierarchyMeaningEnum.IS_A,
      CodesystemHierarchyMeaningEnum.PART_OF,
      CodesystemHierarchyMeaningEnum.CLASSIFIED_WITH,
      CodesystemHierarchyMeaningEnum.NULL
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
    } else if (CodesystemHierarchyMeaningEnum.GROUPED_BY.code === code) {
      return CodesystemHierarchyMeaningEnum.GROUPED_BY;
    } else if (CodesystemHierarchyMeaningEnum.IS_A.code === code) {
      return CodesystemHierarchyMeaningEnum.IS_A;
    } else if (CodesystemHierarchyMeaningEnum.PART_OF.code === code) {
      return CodesystemHierarchyMeaningEnum.PART_OF;
    } else if (CodesystemHierarchyMeaningEnum.CLASSIFIED_WITH.code === code) {
      return CodesystemHierarchyMeaningEnum.CLASSIFIED_WITH;
    } else if (CodesystemHierarchyMeaningEnum.NULL.code === code) {
      return CodesystemHierarchyMeaningEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown CodesystemHierarchyMeaningEnum 'code' value '${code}'`);
    }
  }
}
