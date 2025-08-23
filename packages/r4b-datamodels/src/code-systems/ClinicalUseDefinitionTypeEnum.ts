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
 * ClinicalUseDefinitionTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/clinical-use-definition-type
 * CodeSystem.name: ClinicalUseDefinitionType
 * CodeSystem.description: Overall defining type of this clinical use definition.
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
 * FHIR CodeSystem: ClinicalUseDefinitionTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ClinicalUseDefinitionType](http://hl7.org/fhir/clinical-use-definition-type)
 */
export class ClinicalUseDefinitionTypeEnum implements IFhirCodeEnum {
  public static readonly INDICATION = new FhirCodeDefinition(
    'INDICATION',
    'indication',
    'http://hl7.org/fhir/clinical-use-definition-type',
    'Indication',
    'A reason for giving the medication.',
  );
  public static readonly CONTRAINDICATION = new FhirCodeDefinition(
    'CONTRAINDICATION',
    'contraindication',
    'http://hl7.org/fhir/clinical-use-definition-type',
    'Contraindication',
    'A reason for not giving the medication.',
  );
  public static readonly INTERACTION = new FhirCodeDefinition(
    'INTERACTION',
    'interaction',
    'http://hl7.org/fhir/clinical-use-definition-type',
    'Interaction',
    'Interactions between the medication and other substances.',
  );
  public static readonly UNDESIRABLE_EFFECT = new FhirCodeDefinition(
    'UNDESIRABLE_EFFECT',
    'undesirable-effect',
    'http://hl7.org/fhir/clinical-use-definition-type',
    'Undesirable Effect',
    'Side effects or adverse effects associated with the medication.',
  );
  public static readonly WARNING = new FhirCodeDefinition(
    'WARNING',
    'warning',
    'http://hl7.org/fhir/clinical-use-definition-type',
    'Warning',
    'A general warning or issue that is not specifically one of the other types.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ClinicalUseDefinitionTypeEnum.INDICATION,
      ClinicalUseDefinitionTypeEnum.CONTRAINDICATION,
      ClinicalUseDefinitionTypeEnum.INTERACTION,
      ClinicalUseDefinitionTypeEnum.UNDESIRABLE_EFFECT,
      ClinicalUseDefinitionTypeEnum.WARNING,
      ClinicalUseDefinitionTypeEnum.NULL
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
    } else if (ClinicalUseDefinitionTypeEnum.INDICATION.code === code) {
      return ClinicalUseDefinitionTypeEnum.INDICATION;
    } else if (ClinicalUseDefinitionTypeEnum.CONTRAINDICATION.code === code) {
      return ClinicalUseDefinitionTypeEnum.CONTRAINDICATION;
    } else if (ClinicalUseDefinitionTypeEnum.INTERACTION.code === code) {
      return ClinicalUseDefinitionTypeEnum.INTERACTION;
    } else if (ClinicalUseDefinitionTypeEnum.UNDESIRABLE_EFFECT.code === code) {
      return ClinicalUseDefinitionTypeEnum.UNDESIRABLE_EFFECT;
    } else if (ClinicalUseDefinitionTypeEnum.WARNING.code === code) {
      return ClinicalUseDefinitionTypeEnum.WARNING;
    } else if (ClinicalUseDefinitionTypeEnum.NULL.code === code) {
      return ClinicalUseDefinitionTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ClinicalUseDefinitionTypeEnum 'code' value '${code}'`);
    }
  }
}
