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
 * GroupMembershipBasisEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/group-membership-basis
 * CodeSystem.name: GroupMembershipBasis
 * CodeSystem.description: Basis for membership in a group
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
 * FHIR CodeSystem: GroupMembershipBasisEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem GroupMembershipBasis](http://hl7.org/fhir/group-membership-basis)
 */
export class GroupMembershipBasisEnum implements IFhirCodeEnum {
  public static readonly DEFINITIONAL = new FhirCodeDefinition(
    'DEFINITIONAL',
    'definitional',
    'http://hl7.org/fhir/group-membership-basis',
    'Definitional',
    'The Group.characteristics specified are both necessary and sufficient to determine membership. All entities that meet the criteria are considered to be members of the group, whether referenced by the group or not. If members are present, they are individuals that happen to be known as meeting the Group.characteristics. The list cannot be presumed to be complete.',
  );
  public static readonly ENUMERATED = new FhirCodeDefinition(
    'ENUMERATED',
    'enumerated',
    'http://hl7.org/fhir/group-membership-basis',
    'Enumerated',
    'The Group.characteristics are necessary but not sufficient to determine membership. Membership is determined by being listed as one of the Group.member.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      GroupMembershipBasisEnum.DEFINITIONAL,
      GroupMembershipBasisEnum.ENUMERATED,
      GroupMembershipBasisEnum.NULL
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
    } else if (GroupMembershipBasisEnum.DEFINITIONAL.code === code) {
      return GroupMembershipBasisEnum.DEFINITIONAL;
    } else if (GroupMembershipBasisEnum.ENUMERATED.code === code) {
      return GroupMembershipBasisEnum.ENUMERATED;
    } else if (GroupMembershipBasisEnum.NULL.code === code) {
      return GroupMembershipBasisEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown GroupMembershipBasisEnum 'code' value '${code}'`);
    }
  }
}
