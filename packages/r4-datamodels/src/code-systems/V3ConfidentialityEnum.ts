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
 * V3ConfidentialityEnum Module
 *
 * CodeSystem.url: http://terminology.hl7.org/CodeSystem/v3-Confidentiality
 * CodeSystem.name: V3Confidentiality
 * CodeSystem.description:  A set of codes specifying the security classification of acts and roles in accordance with the definition for concept domain "Confidentiality".
 * CodeSystem.version: 2018-08-12
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
 * FHIR CodeSystem: V3ConfidentialityEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem V3Confidentiality](http://terminology.hl7.org/CodeSystem/v3-Confidentiality)
 */
export class V3ConfidentialityEnum implements IFhirCodeEnum {
  public static readonly CONFIDENTIALITY = new FhirCodeDefinition(
    'CONFIDENTIALITY',
    '_Confidentiality',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'Confidentiality',
    'A specializable code and its leaf codes used in Confidentiality value sets to value the Act.Confidentiality and Role.Confidentiality attribute in accordance with the definition for concept domain "Confidentiality".',
  );
  public static readonly L = new FhirCodeDefinition(
    'L',
    'L',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'low',
    'Definition: Privacy metadata indicating that the information has been de-identified, and there are mitigating circumstances that prevent re-identification, which minimize risk of harm from unauthorized disclosure.  The information requires protection to maintain low sensitivity.                                                     Examples: Includes anonymized, pseudonymized, or non-personally identifiable information such as HIPAA limited data sets.                                                     Map: No clear map to ISO 13606-4 Sensitivity Level (1) Care Management:   RECORD_COMPONENTs that might need to be accessed by a wide range of administrative staff to manage the subject of care\'s access to health services.                                                     Usage Note: This metadata indicates the receiver may have an obligation to comply with a data use agreement.',
  );
  public static readonly M = new FhirCodeDefinition(
    'M',
    'M',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'moderate',
    'Definition: Privacy metadata indicating moderately sensitive information, which presents moderate risk of harm if disclosed without authorization.                                                     Examples: Includes allergies of non-sensitive nature used inform food service; health information a patient authorizes to be used for marketing, released to a bank for a health credit card or savings account; or information in personal health record systems that are not governed under health privacy laws.                                                     Map: Partial Map to ISO 13606-4 Sensitivity Level (2) Clinical Management:  Less sensitive RECORD_COMPONENTs that might need to be accessed by a wider range of personnel not all of whom are actively caring for the patient (e.g. radiology staff).                                                     Usage Note: This metadata indicates that the receiver may be obligated to comply with the receiver\'s terms of use or privacy policies.',
  );
  public static readonly N = new FhirCodeDefinition(
    'N',
    'N',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'normal',
    'Definition: Privacy metadata indicating that the information is typical, non-stigmatizing health information, which presents typical risk of harm if disclosed without authorization.                                                     Examples: In the US, this includes what HIPAA identifies as the minimum necessary protected health information (PHI) given a covered purpose of use (treatment, payment, or operations).  Includes typical, non-stigmatizing health information disclosed in an application for health, workers compensation, disability, or life insurance.                                                     Map: Partial Map to ISO 13606-4 Sensitivity Level (3) Clinical Care:   Default for normal clinical care access (i.e. most clinical staff directly caring for the patient should be able to access nearly all of the EHR).   Maps to normal confidentiality for treatment information but not to ancillary care, payment and operations.                                                     Usage Note: This metadata indicates that the receiver may be obligated to comply with applicable jurisdictional privacy law or disclosure authorization.',
  );
  public static readonly R = new FhirCodeDefinition(
    'R',
    'R',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'restricted',
    'Privacy metadata indicating highly sensitive, potentially stigmatizing information, which presents a high risk to the information subject if disclosed without authorization. May be pre-empted by jurisdictional law, e.g., for public health reporting or emergency treatment.                                                     Examples: Includes information that is additionally protected such as sensitive conditions mental health, HIV, substance abuse, domestic violence, child abuse, genetic disease, and reproductive health; or sensitive demographic information such as a patient\'s standing as an employee or a celebrity. May be used to indicate proprietary or classified information that is not related to an individual, e.g., secret ingredients in a therapeutic substance; or the name of a manufacturer.                                                     Map: Partial Map to ISO 13606-4 Sensitivity Level (3) Clinical Care: Default for normal clinical care access (i.e. most clinical staff directly caring for the patient should be able to access nearly all of the EHR). Maps to normal confidentiality for treatment information but not to ancillary care, payment and operations..                                                     Usage Note: This metadata indicates that the receiver may be obligated to comply with applicable, prevailing (default) jurisdictional privacy law or disclosure authorization..',
  );
  public static readonly U = new FhirCodeDefinition(
    'U',
    'U',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'unrestricted',
    'Definition: Privacy metadata indicating that the information is not classified as sensitive.                                                     Examples: Includes publicly available information, e.g., business name, phone, email or physical address.                                                     Usage Note: This metadata indicates that the receiver has no obligation to consider additional policies when making access control decisions.   Note that in some jurisdictions, personally identifiable information must be protected as confidential, so it would not be appropriate to assign a confidentiality code of "unrestricted"  to that information even if it is publicly available.',
  );
  public static readonly V = new FhirCodeDefinition(
    'V',
    'V',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'very restricted',
    '. Privacy metadata indicating that the information is extremely sensitive and likely stigmatizing health information that presents a very high risk if disclosed without authorization.  This information must be kept in the highest confidence.                                                       Examples:  Includes information about a victim of abuse, patient requested information sensitivity, and taboo subjects relating to health status that must be discussed with the patient by an attending provider before sharing with the patient.  May also include information held under â€œlegal lockâ€? or attorney-client privilege                                                     Map:  This metadata indicates that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.                                                     Usage Note:  This metadata indicates that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.',
  );
  public static readonly CONFIDENTIALITY_BY_ACCESS_KIND = new FhirCodeDefinition(
    'CONFIDENTIALITY_BY_ACCESS_KIND',
    '_ConfidentialityByAccessKind',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'ConfidentialityByAccessKind',
    'Description: By accessing subject / role and relationship based  rights  (These concepts are mutually exclusive, one and only one is required for a valid confidentiality coding.)                                                     Deprecation Comment:Deprecated due to updated confidentiality codes under ActCode',
  );
  public static readonly B = new FhirCodeDefinition(
    'B',
    'B',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'business',
    'Description: Since the service class can represent knowledge structures that may be considered a trade or business secret, there is sometimes (though rarely) the need to flag those items as of business level confidentiality.  However, no patient related information may ever be of this confidentiality level.                                                     Deprecation Comment: Replced by ActCode.B',
  );
  public static readonly D = new FhirCodeDefinition(
    'D',
    'D',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'clinician',
    'Description: Only clinicians may see this item, billing and administration persons can not access this item without special permission.                                                     Deprecation Comment:Deprecated due to updated confidentiality codes under ActCode',
  );
  public static readonly I = new FhirCodeDefinition(
    'I',
    'I',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'individual',
    'Description: Access only to individual persons who are mentioned explicitly as actors of this service and whose actor type warrants that access (cf. to actor type code).                                                     Deprecation Comment:Deprecated due to updated confidentiality codes under ActCode',
  );
  public static readonly CONFIDENTIALITY_BY_INFO_TYPE = new FhirCodeDefinition(
    'CONFIDENTIALITY_BY_INFO_TYPE',
    '_ConfidentialityByInfoType',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'ConfidentialityByInfoType',
    'Description: By information type, only for service catalog entries (multiples allowed). Not to be used with actual patient data!                                                     Deprecation Comment:Deprecated due to updated confidentiality codes under ActCode',
  );
  public static readonly ETH = new FhirCodeDefinition(
    'ETH',
    'ETH',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'substance abuse related',
    'Description: Alcohol/drug-abuse related item                                                     Deprecation Comment:Replced by ActCode.ETH',
  );
  public static readonly HIV = new FhirCodeDefinition(
    'HIV',
    'HIV',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'HIV related',
    'Description: HIV and AIDS related item                                                     Deprecation Comment:Replced by ActCode.HIV',
  );
  public static readonly PSY = new FhirCodeDefinition(
    'PSY',
    'PSY',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'psychiatry relate',
    'Description: Psychiatry related item                                                     Deprecation Comment:Replced by ActCode.PSY',
  );
  public static readonly SDV = new FhirCodeDefinition(
    'SDV',
    'SDV',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'sexual and domestic violence related',
    'Description: Sexual assault / domestic violence related item                                                     Deprecation Comment:Replced by ActCode.SDV',
  );
  public static readonly CONFIDENTIALITY_MODIFIERS = new FhirCodeDefinition(
    'CONFIDENTIALITY_MODIFIERS',
    '_ConfidentialityModifiers',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'ConfidentialityModifiers',
    'Description: Modifiers of role based access rights  (multiple allowed)                                                     Deprecation Comment:Deprecated due to updated confidentiality codes under ActCode',
  );
  public static readonly C = new FhirCodeDefinition(
    'C',
    'C',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'celebrity',
    'Description: Celebrities are people of public interest (VIP) including employees, whose information require special protection.                                                     Deprecation Comment:Replced by ActCode.CEL',
  );
  public static readonly S = new FhirCodeDefinition(
    'S',
    'S',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'sensitive',
    'Description:                           Information for which the patient seeks heightened confidentiality. Sensitive information is not to be shared with family members.  Information reported by the patient about family members is sensitive by default. Flag can be set or cleared on patient\'s request.                            Deprecation Comment:Deprecated due to updated confidentiality codes under ActCode',
  );
  public static readonly T = new FhirCodeDefinition(
    'T',
    'T',
    'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
    'taboo',
    'Description: Information not to be disclosed or discussed with patient except through physician assigned to patient in this case.  This is usually a temporary constraint only, example use is a new fatal diagnosis or finding, such as malignancy or HIV.                                                     Deprecation Note:Replced by ActCode.TBOO',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      V3ConfidentialityEnum.CONFIDENTIALITY,
      V3ConfidentialityEnum.L,
      V3ConfidentialityEnum.M,
      V3ConfidentialityEnum.N,
      V3ConfidentialityEnum.R,
      V3ConfidentialityEnum.U,
      V3ConfidentialityEnum.V,
      V3ConfidentialityEnum.CONFIDENTIALITY_BY_ACCESS_KIND,
      V3ConfidentialityEnum.B,
      V3ConfidentialityEnum.D,
      V3ConfidentialityEnum.I,
      V3ConfidentialityEnum.CONFIDENTIALITY_BY_INFO_TYPE,
      V3ConfidentialityEnum.ETH,
      V3ConfidentialityEnum.HIV,
      V3ConfidentialityEnum.PSY,
      V3ConfidentialityEnum.SDV,
      V3ConfidentialityEnum.CONFIDENTIALITY_MODIFIERS,
      V3ConfidentialityEnum.C,
      V3ConfidentialityEnum.S,
      V3ConfidentialityEnum.T,
      V3ConfidentialityEnum.NULL
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
    } else if (V3ConfidentialityEnum.CONFIDENTIALITY.code === code) {
      return V3ConfidentialityEnum.CONFIDENTIALITY;
    } else if (V3ConfidentialityEnum.L.code === code) {
      return V3ConfidentialityEnum.L;
    } else if (V3ConfidentialityEnum.M.code === code) {
      return V3ConfidentialityEnum.M;
    } else if (V3ConfidentialityEnum.N.code === code) {
      return V3ConfidentialityEnum.N;
    } else if (V3ConfidentialityEnum.R.code === code) {
      return V3ConfidentialityEnum.R;
    } else if (V3ConfidentialityEnum.U.code === code) {
      return V3ConfidentialityEnum.U;
    } else if (V3ConfidentialityEnum.V.code === code) {
      return V3ConfidentialityEnum.V;
    } else if (V3ConfidentialityEnum.CONFIDENTIALITY_BY_ACCESS_KIND.code === code) {
      return V3ConfidentialityEnum.CONFIDENTIALITY_BY_ACCESS_KIND;
    } else if (V3ConfidentialityEnum.B.code === code) {
      return V3ConfidentialityEnum.B;
    } else if (V3ConfidentialityEnum.D.code === code) {
      return V3ConfidentialityEnum.D;
    } else if (V3ConfidentialityEnum.I.code === code) {
      return V3ConfidentialityEnum.I;
    } else if (V3ConfidentialityEnum.CONFIDENTIALITY_BY_INFO_TYPE.code === code) {
      return V3ConfidentialityEnum.CONFIDENTIALITY_BY_INFO_TYPE;
    } else if (V3ConfidentialityEnum.ETH.code === code) {
      return V3ConfidentialityEnum.ETH;
    } else if (V3ConfidentialityEnum.HIV.code === code) {
      return V3ConfidentialityEnum.HIV;
    } else if (V3ConfidentialityEnum.PSY.code === code) {
      return V3ConfidentialityEnum.PSY;
    } else if (V3ConfidentialityEnum.SDV.code === code) {
      return V3ConfidentialityEnum.SDV;
    } else if (V3ConfidentialityEnum.CONFIDENTIALITY_MODIFIERS.code === code) {
      return V3ConfidentialityEnum.CONFIDENTIALITY_MODIFIERS;
    } else if (V3ConfidentialityEnum.C.code === code) {
      return V3ConfidentialityEnum.C;
    } else if (V3ConfidentialityEnum.S.code === code) {
      return V3ConfidentialityEnum.S;
    } else if (V3ConfidentialityEnum.T.code === code) {
      return V3ConfidentialityEnum.T;
    } else if (V3ConfidentialityEnum.NULL.code === code) {
      return V3ConfidentialityEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown V3ConfidentialityEnum 'code' value '${code}'`);
    }
  }
}
