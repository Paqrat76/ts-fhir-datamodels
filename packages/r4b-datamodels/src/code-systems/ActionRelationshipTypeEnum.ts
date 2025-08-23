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
 * ActionRelationshipTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/action-relationship-type
 * CodeSystem.name: ActionRelationshipType
 * CodeSystem.description: Defines the types of relationships between actions.
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
 * FHIR CodeSystem: ActionRelationshipTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ActionRelationshipType](http://hl7.org/fhir/action-relationship-type)
 */
export class ActionRelationshipTypeEnum implements IFhirCodeEnum {
  public static readonly BEFORE_START = new FhirCodeDefinition(
    'BEFORE_START',
    'before-start',
    'http://hl7.org/fhir/action-relationship-type',
    'Before Start',
    'The action must be performed before the start of the related action.',
  );
  public static readonly BEFORE = new FhirCodeDefinition(
    'BEFORE',
    'before',
    'http://hl7.org/fhir/action-relationship-type',
    'Before',
    'The action must be performed before the related action.',
  );
  public static readonly BEFORE_END = new FhirCodeDefinition(
    'BEFORE_END',
    'before-end',
    'http://hl7.org/fhir/action-relationship-type',
    'Before End',
    'The action must be performed before the end of the related action.',
  );
  public static readonly CONCURRENT_WITH_START = new FhirCodeDefinition(
    'CONCURRENT_WITH_START',
    'concurrent-with-start',
    'http://hl7.org/fhir/action-relationship-type',
    'Concurrent With Start',
    'The action must be performed concurrent with the start of the related action.',
  );
  public static readonly CONCURRENT = new FhirCodeDefinition(
    'CONCURRENT',
    'concurrent',
    'http://hl7.org/fhir/action-relationship-type',
    'Concurrent',
    'The action must be performed concurrent with the related action.',
  );
  public static readonly CONCURRENT_WITH_END = new FhirCodeDefinition(
    'CONCURRENT_WITH_END',
    'concurrent-with-end',
    'http://hl7.org/fhir/action-relationship-type',
    'Concurrent With End',
    'The action must be performed concurrent with the end of the related action.',
  );
  public static readonly AFTER_START = new FhirCodeDefinition(
    'AFTER_START',
    'after-start',
    'http://hl7.org/fhir/action-relationship-type',
    'After Start',
    'The action must be performed after the start of the related action.',
  );
  public static readonly AFTER = new FhirCodeDefinition(
    'AFTER',
    'after',
    'http://hl7.org/fhir/action-relationship-type',
    'After',
    'The action must be performed after the related action.',
  );
  public static readonly AFTER_END = new FhirCodeDefinition(
    'AFTER_END',
    'after-end',
    'http://hl7.org/fhir/action-relationship-type',
    'After End',
    'The action must be performed after the end of the related action.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ActionRelationshipTypeEnum.BEFORE_START,
      ActionRelationshipTypeEnum.BEFORE,
      ActionRelationshipTypeEnum.BEFORE_END,
      ActionRelationshipTypeEnum.CONCURRENT_WITH_START,
      ActionRelationshipTypeEnum.CONCURRENT,
      ActionRelationshipTypeEnum.CONCURRENT_WITH_END,
      ActionRelationshipTypeEnum.AFTER_START,
      ActionRelationshipTypeEnum.AFTER,
      ActionRelationshipTypeEnum.AFTER_END,
      ActionRelationshipTypeEnum.NULL
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
    } else if (ActionRelationshipTypeEnum.BEFORE_START.code === code) {
      return ActionRelationshipTypeEnum.BEFORE_START;
    } else if (ActionRelationshipTypeEnum.BEFORE.code === code) {
      return ActionRelationshipTypeEnum.BEFORE;
    } else if (ActionRelationshipTypeEnum.BEFORE_END.code === code) {
      return ActionRelationshipTypeEnum.BEFORE_END;
    } else if (ActionRelationshipTypeEnum.CONCURRENT_WITH_START.code === code) {
      return ActionRelationshipTypeEnum.CONCURRENT_WITH_START;
    } else if (ActionRelationshipTypeEnum.CONCURRENT.code === code) {
      return ActionRelationshipTypeEnum.CONCURRENT;
    } else if (ActionRelationshipTypeEnum.CONCURRENT_WITH_END.code === code) {
      return ActionRelationshipTypeEnum.CONCURRENT_WITH_END;
    } else if (ActionRelationshipTypeEnum.AFTER_START.code === code) {
      return ActionRelationshipTypeEnum.AFTER_START;
    } else if (ActionRelationshipTypeEnum.AFTER.code === code) {
      return ActionRelationshipTypeEnum.AFTER;
    } else if (ActionRelationshipTypeEnum.AFTER_END.code === code) {
      return ActionRelationshipTypeEnum.AFTER_END;
    } else if (ActionRelationshipTypeEnum.NULL.code === code) {
      return ActionRelationshipTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ActionRelationshipTypeEnum 'code' value '${code}'`);
    }
  }
}
