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
 * This file is generated from a FHIR StructureDefinition.
 * DO NOT make any modifications!
 *
 * EpisodeOfCare Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/EpisodeOfCare
 * StructureDefinition.name: EpisodeOfCare
 * StructureDefinition.description: An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  JSON,
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { EpisodeOfCareStatusEnum } from '../code-systems/EpisodeOfCareStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * EpisodeOfCare Class
 *
 * @remarks
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 *
 * **FHIR Specification**
 * - **Short:** An association of a Patient with an Organization and  Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility
 * - **Definition:** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR EpisodeOfCare](http://hl7.org/fhir/StructureDefinition/EpisodeOfCare)
 */
export class EpisodeOfCare extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, patient: Reference | null = null) {
    super();

    this.episodeOfCareStatusEnum = new EpisodeOfCareStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<EpisodeOfCareStatusEnum>(
      status,
      EpisodeOfCareStatusEnum,
      this.episodeOfCareStatusEnum,
      'EpisodeOfCare.status',
    );

    this.patient = null;
    if (isDefined<Reference>(patient)) {
      this.setPatient(patient);
    }
  }

  /**
   * Parse the provided `EpisodeOfCare` JSON to instantiate the EpisodeOfCare data model.
   *
   * @param sourceJson - JSON representing FHIR `EpisodeOfCare`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EpisodeOfCare
   * @returns EpisodeOfCare data model or undefined for `EpisodeOfCare`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): EpisodeOfCare | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EpisodeOfCare';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EpisodeOfCare();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'EpisodeOfCare');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addIdentifier(datatype);
          }
        });
      }
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setStatus(null);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      instance.setStatus(null);
    }

    fieldName = 'statusHistory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: EpisodeOfCareStatusHistoryComponent | undefined = EpisodeOfCareStatusHistoryComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addStatusHistory(component);
          }
        });
      }
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addType(datatype);
          }
        });
      }
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: EpisodeOfCareReasonComponent | undefined = EpisodeOfCareReasonComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addReason(component);
          }
        });
      }
    }

    fieldName = 'diagnosis';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: EpisodeOfCareDiagnosisComponent | undefined = EpisodeOfCareDiagnosisComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDiagnosis(component);
          }
        });
      }
    }

    fieldName = 'patient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setPatient(null);
      } else {
        instance.setPatient(datatype);
      }
    } else {
      instance.setPatient(null);
    }

    fieldName = 'managingOrganization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setManagingOrganization(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'referralRequest';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addReferralRequest(datatype);
          }
        });
      }
  }

    fieldName = 'careManager';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCareManager(datatype);
    }

    fieldName = 'careTeam';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCareTeam(datatype);
          }
        });
      }
  }

    fieldName = 'account';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAccount(datatype);
          }
        });
      }
  }

    return instance;
  }

  /**
   * EpisodeOfCare.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier(s) relevant for this EpisodeOfCare
   * - **Definition:** The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: EpisodeOfCareStatus
   *
   * @see {@link EpisodeOfCareStatusEnum }
   */
  private readonly episodeOfCareStatusEnum: EpisodeOfCareStatusEnum;

  /**
   * EpisodeOfCare.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** planned | waitlist | active | onhold | finished | cancelled | entered-in-error
   * - **Definition:** planned | waitlist | active | onhold | finished | cancelled.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * EpisodeOfCare.statusHistory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Past list of status codes (the current status may be included to cover the start date of the status)
   * - **Definition:** The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusHistory?: EpisodeOfCareStatusHistoryComponent[] | undefined;

  /**
   * EpisodeOfCare.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type/class  - e.g. specialist referral, disease management
   * - **Definition:** A classification of the type of episode of care; e.g. specialist referral, disease management, type of funded care.
   * - **Comment:** The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * EpisodeOfCare.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The list of medical reasons that are expected to be addressed during the episode of care
   * - **Definition:** The list of medical reasons that are expected to be addressed during the episode of care.
   * - **Comment:** The reason communicates what medical problem the patient has that should be addressed during the episode of care.  This reason could be patient reported complaint, a clinical indication that was determined in a previous encounter or episode of care, or some planned care such as an immunization recommendation.  In the case where you have a primary reason, but are expecting to also address other problems, you can list the primary reason with a use code of \'Chief Complaint\', while the other problems being addressed would have a use code of \'Reason for Visit\'. Examples:  * pregnancy would use HealthcareService or a coding as the reason  * patient home monitoring could use Condition as the reason
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reason?: EpisodeOfCareReasonComponent[] | undefined;

  /**
   * EpisodeOfCare.diagnosis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The list of medical conditions that were addressed during the episode of care
   * - **Definition:** The list of medical conditions that were addressed during the episode of care.
   * - **Comment:** The diagnosis communicates what medical conditions were actually addressed during the episode of care.  If a diagnosis was provided as a reason, and was treated during the episode of care, it may be listed in both EpisodeOfCare.reason and EpisodeOfCare.diagnosis. Diagnoses related to billing can be documented on the Account resources which supports ranking for the purpose of reimbursement.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private diagnosis?: EpisodeOfCareDiagnosisComponent[] | undefined;

  /**
   * EpisodeOfCare.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The patient who is the focus of this episode of care
   * - **Definition:** The patient who is the focus of this episode of care.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private patient: Reference | null;

  /**
   * EpisodeOfCare.managingOrganization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization that assumes responsibility for care coordination
   * - **Definition:** The organization that has assumed the specific responsibilities for care coordination, care delivery, or other services for the specified duration.
   * - **Comment:** If multiple organizations are involved in care delivery, the care teams from those organizations would be represented in EpisodeOfCare.team, while the primary organization managing the care would be listed in EpisodeOfCare.managingOrganization.   Other organizations may have their own EpisodeOfCare for tracking their activities.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private managingOrganization?: Reference | undefined;

  /**
   * EpisodeOfCare.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Interval during responsibility is assumed
   * - **Definition:** The interval during which the managing organization assumes the defined responsibility.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * EpisodeOfCare.referralRequest Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Originating Referral Request(s)
   * - **Definition:** Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private referralRequest?: Reference[] | undefined;

  /**
   * EpisodeOfCare.careManager Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Care manager/care coordinator for the patient
   * - **Definition:** The practitioner that is the care manager/care coordinator for this patient.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private careManager?: Reference | undefined;

  /**
   * EpisodeOfCare.careTeam Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Other practitioners facilitating this episode of care
   * - **Definition:** The list of practitioners that may be facilitating this episode of care for specific purposes.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private careTeam?: Reference[] | undefined;

  /**
   * EpisodeOfCare.account Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The set of accounts that may be used for billing for this EpisodeOfCare
   * - **Definition:** The set of accounts that may be used for billing for this EpisodeOfCare.
   * - **Comment:** The billing system may choose to allocate billable items associated with the EpisodeOfCare to different referenced Accounts based on internal business rules.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Account',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private account?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `identifier` property value as a Identifier array
   */
  public getIdentifier(): Identifier[] {
    return this.identifier ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `identifier` property.
   *
   * @param value - the `identifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIdentifier(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.identifier; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.identifier = value;
    } else {
      this.identifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `identifier` array property.
   *
   * @param value - the `identifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.identifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initIdentifier();
      this.identifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `identifier` property exists and has a value; `false` otherwise
   */
  public hasIdentifier(): boolean {
    return isDefinedList<Identifier>(this.identifier) && this.identifier.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `identifier` property
   */
  private initIdentifier(): void {
    if(!this.hasIdentifier()) {
      this.identifier = [] as Identifier[];
    }
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  public getStatusEnumType(): EnumCodeType | null {
    return this.status;
  }

  /**
   * Assigns the provided EnumCodeType value to the `status` property.
   *
   * @param enumType - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid EpisodeOfCare.status`;
      assertEnumCodeType<EpisodeOfCareStatusEnum>(enumType, EpisodeOfCareStatusEnum, errMsgPrefix);
      this.status = enumType;
    } else {
      this.status = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatusEnumType(): boolean {
    return isDefined<EnumCodeType>(this.status) && !this.status.isEmpty() && this.status.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `status` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  public getStatusElement(): CodeType | null {
    if (this.status === null) {
      return null;
    }
    return this.status as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `status` property.
   *
   * @param element - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid EpisodeOfCare.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.episodeOfCareStatusEnum);
    } else {
      this.status = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatusElement(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `status` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  public getStatus(): fhirCode | null {
    if (this.status === null) {
      return null;
    }
    return this.status.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `status` property.
   *
   * @param value - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.episodeOfCareStatusEnum);
    } else {
      this.status = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `statusHistory` property value as a EpisodeOfCareStatusHistoryComponent array
   */
  public getStatusHistory(): EpisodeOfCareStatusHistoryComponent[] {
    return this.statusHistory ?? ([] as EpisodeOfCareStatusHistoryComponent[]);
  }

  /**
   * Assigns the provided EpisodeOfCareStatusHistoryComponent array value to the `statusHistory` property.
   *
   * @param value - the `statusHistory` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatusHistory(value: EpisodeOfCareStatusHistoryComponent[] | undefined): this {
    if (isDefinedList<EpisodeOfCareStatusHistoryComponent>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.statusHistory; Provided value array has an element that is not an instance of EpisodeOfCareStatusHistoryComponent.`;
      assertFhirTypeList<EpisodeOfCareStatusHistoryComponent>(value, EpisodeOfCareStatusHistoryComponent, optErrMsg);
      this.statusHistory = value;
    } else {
      this.statusHistory = undefined;
    }
    return this;
  }

  /**
   * Add the provided EpisodeOfCareStatusHistoryComponent value to the `statusHistory` array property.
   *
   * @param value - the `statusHistory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStatusHistory(value: EpisodeOfCareStatusHistoryComponent | undefined): this {
    if (isDefined<EpisodeOfCareStatusHistoryComponent>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.statusHistory; Provided element is not an instance of EpisodeOfCareStatusHistoryComponent.`;
      assertFhirType<EpisodeOfCareStatusHistoryComponent>(value, EpisodeOfCareStatusHistoryComponent, optErrMsg);
      this.initStatusHistory();
      this.statusHistory?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `statusHistory` property exists and has a value; `false` otherwise
   */
  public hasStatusHistory(): boolean {
    return isDefinedList<EpisodeOfCareStatusHistoryComponent>(this.statusHistory) && this.statusHistory.some((item: EpisodeOfCareStatusHistoryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `statusHistory` property
   */
  private initStatusHistory(): void {
    if(!this.hasStatusHistory()) {
      this.statusHistory = [] as EpisodeOfCareStatusHistoryComponent[];
    }
  }

  /**
   * @returns the `type_` property value as a CodeableConcept array
   */
  public getType(): CodeableConcept[] {
    return this.type_ ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `type_` property.
   *
   * @param value - the `type_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.type; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `type_` array property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initType();
      this.type_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefinedList<CodeableConcept>(this.type_) && this.type_.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `type_` property
   */
  private initType(): void {
    if(!this.hasType()) {
      this.type_ = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `reason` property value as a EpisodeOfCareReasonComponent array
   */
  public getReason(): EpisodeOfCareReasonComponent[] {
    return this.reason ?? ([] as EpisodeOfCareReasonComponent[]);
  }

  /**
   * Assigns the provided EpisodeOfCareReasonComponent array value to the `reason` property.
   *
   * @param value - the `reason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: EpisodeOfCareReasonComponent[] | undefined): this {
    if (isDefinedList<EpisodeOfCareReasonComponent>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.reason; Provided value array has an element that is not an instance of EpisodeOfCareReasonComponent.`;
      assertFhirTypeList<EpisodeOfCareReasonComponent>(value, EpisodeOfCareReasonComponent, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * Add the provided EpisodeOfCareReasonComponent value to the `reason` array property.
   *
   * @param value - the `reason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReason(value: EpisodeOfCareReasonComponent | undefined): this {
    if (isDefined<EpisodeOfCareReasonComponent>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.reason; Provided element is not an instance of EpisodeOfCareReasonComponent.`;
      assertFhirType<EpisodeOfCareReasonComponent>(value, EpisodeOfCareReasonComponent, optErrMsg);
      this.initReason();
      this.reason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefinedList<EpisodeOfCareReasonComponent>(this.reason) && this.reason.some((item: EpisodeOfCareReasonComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `reason` property
   */
  private initReason(): void {
    if(!this.hasReason()) {
      this.reason = [] as EpisodeOfCareReasonComponent[];
    }
  }

  /**
   * @returns the `diagnosis` property value as a EpisodeOfCareDiagnosisComponent array
   */
  public getDiagnosis(): EpisodeOfCareDiagnosisComponent[] {
    return this.diagnosis ?? ([] as EpisodeOfCareDiagnosisComponent[]);
  }

  /**
   * Assigns the provided EpisodeOfCareDiagnosisComponent array value to the `diagnosis` property.
   *
   * @param value - the `diagnosis` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDiagnosis(value: EpisodeOfCareDiagnosisComponent[] | undefined): this {
    if (isDefinedList<EpisodeOfCareDiagnosisComponent>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.diagnosis; Provided value array has an element that is not an instance of EpisodeOfCareDiagnosisComponent.`;
      assertFhirTypeList<EpisodeOfCareDiagnosisComponent>(value, EpisodeOfCareDiagnosisComponent, optErrMsg);
      this.diagnosis = value;
    } else {
      this.diagnosis = undefined;
    }
    return this;
  }

  /**
   * Add the provided EpisodeOfCareDiagnosisComponent value to the `diagnosis` array property.
   *
   * @param value - the `diagnosis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDiagnosis(value: EpisodeOfCareDiagnosisComponent | undefined): this {
    if (isDefined<EpisodeOfCareDiagnosisComponent>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.diagnosis; Provided element is not an instance of EpisodeOfCareDiagnosisComponent.`;
      assertFhirType<EpisodeOfCareDiagnosisComponent>(value, EpisodeOfCareDiagnosisComponent, optErrMsg);
      this.initDiagnosis();
      this.diagnosis?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `diagnosis` property exists and has a value; `false` otherwise
   */
  public hasDiagnosis(): boolean {
    return isDefinedList<EpisodeOfCareDiagnosisComponent>(this.diagnosis) && this.diagnosis.some((item: EpisodeOfCareDiagnosisComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `diagnosis` property
   */
  private initDiagnosis(): void {
    if(!this.hasDiagnosis()) {
      this.diagnosis = [] as EpisodeOfCareDiagnosisComponent[];
    }
  }

  /**
   * @returns the `patient` property value as a Reference object if defined; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('EpisodeOfCare.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EpisodeOfCare.patient', [
    'Patient',
  ])
  public setPatient(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.patient = value;
    } else {
      this.patient = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `patient` property exists and has a value; `false` otherwise
   */
  public hasPatient(): boolean {
    return isDefined<Reference>(this.patient) && !this.patient.isEmpty();
  }

  /**
   * @returns the `managingOrganization` property value as a Reference object; else an empty Reference object
   */
  public getManagingOrganization(): Reference {
    return this.managingOrganization ?? new Reference();
  }

  /**
   * Assigns the provided ManagingOrganization object value to the `managingOrganization` property.
   *
   * @decorator `@ReferenceTargets('EpisodeOfCare.managingOrganization', ['Organization',])`
   *
   * @param value - the `managingOrganization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EpisodeOfCare.managingOrganization', [
    'Organization',
  ])
  public setManagingOrganization(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.managingOrganization = value;
    } else {
      this.managingOrganization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `managingOrganization` property exists and has a value; `false` otherwise
   */
  public hasManagingOrganization(): boolean {
    return isDefined<Reference>(this.managingOrganization) && !this.managingOrganization.isEmpty();
  }

  /**
   * @returns the `period` property value as a Period object if defined; else an empty Period object
   */
  public getPeriod(): Period {
    return this.period ?? new Period();
  }

  /**
   * Assigns the provided Period object value to the `period` property.
   *
   * @param value - the `period` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.period = value;
    } else {
      this.period = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `period` property exists and has a value; `false` otherwise
   */
  public hasPeriod(): boolean {
    return isDefined<Period>(this.period) && !this.period.isEmpty();
  }

  /**
   * @returns the `referralRequest` property value as a Reference array
   */
  public getReferralRequest(): Reference[] {
    return this.referralRequest ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `referralRequest` property.
   *
   * @decorator `@ReferenceTargets('EpisodeOfCare.referralRequest', ['ServiceRequest',])`
   *
   * @param value - the `referralRequest` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EpisodeOfCare.referralRequest', [
    'ServiceRequest',
  ])
  public setReferralRequest(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.referralRequest = value;
    } else {
      this.referralRequest = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `referralRequest` array property.
   *
   * @decorator `@ReferenceTargets('EpisodeOfCare.referralRequest', ['ServiceRequest',])`
   *
   * @param value - the `referralRequest` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EpisodeOfCare.referralRequest', [
    'ServiceRequest',
  ])
  public addReferralRequest(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReferralRequest();
      this.referralRequest?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `referralRequest` property exists and has a value; `false` otherwise
   */
  public hasReferralRequest(): boolean {
    return isDefinedList<Reference>(this.referralRequest) && this.referralRequest.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `referralRequest` property
   */
  private initReferralRequest(): void {
    if (!this.hasReferralRequest()) {
      this.referralRequest = [] as Reference[];
    }
  }

  /**
   * @returns the `careManager` property value as a Reference object; else an empty Reference object
   */
  public getCareManager(): Reference {
    return this.careManager ?? new Reference();
  }

  /**
   * Assigns the provided CareManager object value to the `careManager` property.
   *
   * @decorator `@ReferenceTargets('EpisodeOfCare.careManager', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `careManager` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EpisodeOfCare.careManager', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setCareManager(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.careManager = value;
    } else {
      this.careManager = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `careManager` property exists and has a value; `false` otherwise
   */
  public hasCareManager(): boolean {
    return isDefined<Reference>(this.careManager) && !this.careManager.isEmpty();
  }

  /**
   * @returns the `careTeam` property value as a Reference array
   */
  public getCareTeam(): Reference[] {
    return this.careTeam ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `careTeam` property.
   *
   * @decorator `@ReferenceTargets('EpisodeOfCare.careTeam', ['CareTeam',])`
   *
   * @param value - the `careTeam` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EpisodeOfCare.careTeam', [
    'CareTeam',
  ])
  public setCareTeam(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.careTeam = value;
    } else {
      this.careTeam = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `careTeam` array property.
   *
   * @decorator `@ReferenceTargets('EpisodeOfCare.careTeam', ['CareTeam',])`
   *
   * @param value - the `careTeam` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EpisodeOfCare.careTeam', [
    'CareTeam',
  ])
  public addCareTeam(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initCareTeam();
      this.careTeam?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `careTeam` property exists and has a value; `false` otherwise
   */
  public hasCareTeam(): boolean {
    return isDefinedList<Reference>(this.careTeam) && this.careTeam.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `careTeam` property
   */
  private initCareTeam(): void {
    if (!this.hasCareTeam()) {
      this.careTeam = [] as Reference[];
    }
  }

  /**
   * @returns the `account` property value as a Reference array
   */
  public getAccount(): Reference[] {
    return this.account ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `account` property.
   *
   * @decorator `@ReferenceTargets('EpisodeOfCare.account', ['Account',])`
   *
   * @param value - the `account` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EpisodeOfCare.account', [
    'Account',
  ])
  public setAccount(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.account = value;
    } else {
      this.account = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `account` array property.
   *
   * @decorator `@ReferenceTargets('EpisodeOfCare.account', ['Account',])`
   *
   * @param value - the `account` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EpisodeOfCare.account', [
    'Account',
  ])
  public addAccount(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAccount();
      this.account?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `account` property exists and has a value; `false` otherwise
   */
  public hasAccount(): boolean {
    return isDefinedList<Reference>(this.account) && this.account.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `account` property
   */
  private initAccount(): void {
    if (!this.hasAccount()) {
      this.account = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EpisodeOfCare';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.statusHistory,
      this.type_,
      this.reason,
      this.diagnosis,
      this.patient,
      this.managingOrganization,
      this.period,
      this.referralRequest,
      this.careManager,
      this.careTeam,
      this.account,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.patient, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EpisodeOfCare {
    const dest = new EpisodeOfCare();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EpisodeOfCare): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    const statusHistoryList = copyListValues<EpisodeOfCareStatusHistoryComponent>(this.statusHistory);
    dest.statusHistory = statusHistoryList.length === 0 ? undefined : statusHistoryList;
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    const reasonList = copyListValues<EpisodeOfCareReasonComponent>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    const diagnosisList = copyListValues<EpisodeOfCareDiagnosisComponent>(this.diagnosis);
    dest.diagnosis = diagnosisList.length === 0 ? undefined : diagnosisList;
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.managingOrganization = this.managingOrganization?.copy();
    dest.period = this.period?.copy();
    const referralRequestList = copyListValues<Reference>(this.referralRequest);
    dest.referralRequest = referralRequestList.length === 0 ? undefined : referralRequestList;
    dest.careManager = this.careManager?.copy();
    const careTeamList = copyListValues<Reference>(this.careTeam);
    dest.careTeam = careTeamList.length === 0 ? undefined : careTeamList;
    const accountList = copyListValues<Reference>(this.account);
    dest.account = accountList.length === 0 ? undefined : accountList;
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasStatusHistory()) {
      setFhirBackboneElementListJson(this.getStatusHistory(), 'statusHistory', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasReason()) {
      setFhirBackboneElementListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasDiagnosis()) {
      setFhirBackboneElementListJson(this.getDiagnosis(), 'diagnosis', jsonObj);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    }

    if (this.hasManagingOrganization()) {
      setFhirComplexJson(this.getManagingOrganization(), 'managingOrganization', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasReferralRequest()) {
      setFhirComplexListJson(this.getReferralRequest(), 'referralRequest', jsonObj);
    }

    if (this.hasCareManager()) {
      setFhirComplexJson(this.getCareManager(), 'careManager', jsonObj);
    }

    if (this.hasCareTeam()) {
      setFhirComplexListJson(this.getCareTeam(), 'careTeam', jsonObj);
    }

    if (this.hasAccount()) {
      setFhirComplexListJson(this.getAccount(), 'account', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * EpisodeOfCareStatusHistoryComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Past list of status codes (the current status may be included to cover the start date of the status)
 * - **Definition:** The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 *
 * @category Data Models: Resource
 * @see [FHIR EpisodeOfCare](http://hl7.org/fhir/StructureDefinition/EpisodeOfCare)
 */
export class EpisodeOfCareStatusHistoryComponent extends BackboneElement implements IBackboneElement {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, period: Period | null = null) {
    super();

    this.episodeOfCareStatusEnum = new EpisodeOfCareStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<EpisodeOfCareStatusEnum>(
      status,
      EpisodeOfCareStatusEnum,
      this.episodeOfCareStatusEnum,
      'EpisodeOfCare.statusHistory.status',
    );

    this.period = null;
    if (isDefined<Period>(period)) {
      this.setPeriod(period);
    }
  }

  /**
   * Parse the provided `EpisodeOfCareStatusHistoryComponent` JSON to instantiate the EpisodeOfCareStatusHistoryComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EpisodeOfCareStatusHistoryComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EpisodeOfCareStatusHistoryComponent
   * @returns EpisodeOfCareStatusHistoryComponent data model or undefined for `EpisodeOfCareStatusHistoryComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EpisodeOfCareStatusHistoryComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EpisodeOfCareStatusHistoryComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EpisodeOfCareStatusHistoryComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setStatus(null);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      instance.setStatus(null);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setPeriod(null);
      } else {
        instance.setPeriod(datatype);
      }
    } else {
      instance.setPeriod(null);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: EpisodeOfCareStatus
   *
   * @see {@link EpisodeOfCareStatusEnum }
   */
  private readonly episodeOfCareStatusEnum: EpisodeOfCareStatusEnum;

  /**
   * EpisodeOfCare.statusHistory.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** planned | waitlist | active | onhold | finished | cancelled | entered-in-error
   * - **Definition:** planned | waitlist | active | onhold | finished | cancelled.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * EpisodeOfCare.statusHistory.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Duration the EpisodeOfCare was in the specified status
   * - **Definition:** The period during this EpisodeOfCare that the specific status applied.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period: Period | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  public getStatusEnumType(): EnumCodeType | null {
    return this.status;
  }

  /**
   * Assigns the provided EnumCodeType value to the `status` property.
   *
   * @param enumType - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid EpisodeOfCare.statusHistory.status`;
      assertEnumCodeType<EpisodeOfCareStatusEnum>(enumType, EpisodeOfCareStatusEnum, errMsgPrefix);
      this.status = enumType;
    } else {
      this.status = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatusEnumType(): boolean {
    return isDefined<EnumCodeType>(this.status) && !this.status.isEmpty() && this.status.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `status` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  public getStatusElement(): CodeType | null {
    if (this.status === null) {
      return null;
    }
    return this.status as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `status` property.
   *
   * @param element - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid EpisodeOfCare.statusHistory.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.episodeOfCareStatusEnum);
    } else {
      this.status = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatusElement(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `status` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  public getStatus(): fhirCode | null {
    if (this.status === null) {
      return null;
    }
    return this.status.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `status` property.
   *
   * @param value - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link EpisodeOfCareStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.statusHistory.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.episodeOfCareStatusEnum);
    } else {
      this.status = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `period` property value as a Period object if defined; else an empty Period object
   */
  public getPeriod(): Period {
    return this.period ?? new Period();
  }

  /**
   * Assigns the provided Period object value to the `period` property.
   *
   * @param value - the `period` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Period | undefined | null): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.statusHistory.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.period = value;
    } else {
      this.period = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `period` property exists and has a value; `false` otherwise
   */
  public hasPeriod(): boolean {
    return isDefined<Period>(this.period) && !this.period.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EpisodeOfCare.statusHistory';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.status,
      this.period,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.period, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EpisodeOfCareStatusHistoryComponent {
    const dest = new EpisodeOfCareStatusHistoryComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EpisodeOfCareStatusHistoryComponent): void {
    super.copyValues(dest);
    dest.status = this.status ? this.status.copy() : null;
    dest.period = this.period ? this.period.copy() : null;
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EpisodeOfCareReasonComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The list of medical reasons that are expected to be addressed during the episode of care
 * - **Definition:** The list of medical reasons that are expected to be addressed during the episode of care.
 * - **Comment:** The reason communicates what medical problem the patient has that should be addressed during the episode of care.  This reason could be patient reported complaint, a clinical indication that was determined in a previous encounter or episode of care, or some planned care such as an immunization recommendation.  In the case where you have a primary reason, but are expecting to also address other problems, you can list the primary reason with a use code of \'Chief Complaint\', while the other problems being addressed would have a use code of \'Reason for Visit\'. Examples:  * pregnancy would use HealthcareService or a coding as the reason  * patient home monitoring could use Condition as the reason
 *
 * @category Data Models: Resource
 * @see [FHIR EpisodeOfCare](http://hl7.org/fhir/StructureDefinition/EpisodeOfCare)
 */
export class EpisodeOfCareReasonComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EpisodeOfCareReasonComponent` JSON to instantiate the EpisodeOfCareReasonComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EpisodeOfCareReasonComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EpisodeOfCareReasonComponent
   * @returns EpisodeOfCareReasonComponent data model or undefined for `EpisodeOfCareReasonComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EpisodeOfCareReasonComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EpisodeOfCareReasonComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EpisodeOfCareReasonComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'use';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUse(datatype);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addValue(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * EpisodeOfCare.reason.use Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What the reason value should be used for/as
   * - **Definition:** What the reason value should be used as e.g. Chief Complaint, Health Concern, Health Maintenance (including screening).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private use?: CodeableConcept | undefined;

  /**
   * EpisodeOfCare.reason.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Medical reason to be addressed
   * - **Definition:** The medical reason that is expected to be addressed during the episode of care, expressed as a text, code or a reference to another resource.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private value?: CodeableReference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `use` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getUse(): CodeableConcept {
    return this.use ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Use object value to the `use` property.
   *
   * @param value - the `use` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUse(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.reason.use; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.use = value;
    } else {
      this.use = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUse(): boolean {
    return isDefined<CodeableConcept>(this.use) && !this.use.isEmpty();
  }

  /**
   * @returns the `value` property value as a CodeableReference array
   */
  public getValue(): CodeableReference[] {
    return this.value ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `value` property.
   *
   * @param value - the `value` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValue(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.reason.value; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.value = value;
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `value` array property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addValue(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.reason.value; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initValue();
      this.value?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefinedList<CodeableReference>(this.value) && this.value.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `value` property
   */
  private initValue(): void {
    if(!this.hasValue()) {
      this.value = [] as CodeableReference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EpisodeOfCare.reason';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.use,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EpisodeOfCareReasonComponent {
    const dest = new EpisodeOfCareReasonComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EpisodeOfCareReasonComponent): void {
    super.copyValues(dest);
    dest.use = this.use?.copy();
    const valueList = copyListValues<CodeableReference>(this.value);
    dest.value = valueList.length === 0 ? undefined : valueList;
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasUse()) {
      setFhirComplexJson(this.getUse(), 'use', jsonObj);
    }

    if (this.hasValue()) {
      setFhirComplexListJson(this.getValue(), 'value', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EpisodeOfCareDiagnosisComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The list of medical conditions that were addressed during the episode of care
 * - **Definition:** The list of medical conditions that were addressed during the episode of care.
 * - **Comment:** The diagnosis communicates what medical conditions were actually addressed during the episode of care.  If a diagnosis was provided as a reason, and was treated during the episode of care, it may be listed in both EpisodeOfCare.reason and EpisodeOfCare.diagnosis. Diagnoses related to billing can be documented on the Account resources which supports ranking for the purpose of reimbursement.
 *
 * @category Data Models: Resource
 * @see [FHIR EpisodeOfCare](http://hl7.org/fhir/StructureDefinition/EpisodeOfCare)
 */
export class EpisodeOfCareDiagnosisComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EpisodeOfCareDiagnosisComponent` JSON to instantiate the EpisodeOfCareDiagnosisComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EpisodeOfCareDiagnosisComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EpisodeOfCareDiagnosisComponent
   * @returns EpisodeOfCareDiagnosisComponent data model or undefined for `EpisodeOfCareDiagnosisComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EpisodeOfCareDiagnosisComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EpisodeOfCareDiagnosisComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EpisodeOfCareDiagnosisComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCondition(datatype);
          }
        });
      }
    }

    fieldName = 'use';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUse(datatype);
    }

    return instance;
  }

  /**
   * EpisodeOfCare.diagnosis.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The medical condition that was addressed during the episode of care
   * - **Definition:** The medical condition that was addressed during the episode of care, expressed as a text, code or a reference to another resource.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private condition?: CodeableReference[] | undefined;

  /**
   * EpisodeOfCare.diagnosis.use Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge ...)
   * - **Definition:** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge ...).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private use?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `condition` property value as a CodeableReference array
   */
  public getCondition(): CodeableReference[] {
    return this.condition ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `condition` property.
   *
   * @param value - the `condition` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCondition(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.diagnosis.condition; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.condition = value;
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `condition` array property.
   *
   * @param value - the `condition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCondition(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.diagnosis.condition; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initCondition();
      this.condition?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return isDefinedList<CodeableReference>(this.condition) && this.condition.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `condition` property
   */
  private initCondition(): void {
    if(!this.hasCondition()) {
      this.condition = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `use` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getUse(): CodeableConcept {
    return this.use ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Use object value to the `use` property.
   *
   * @param value - the `use` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUse(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.diagnosis.use; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.use = value;
    } else {
      this.use = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUse(): boolean {
    return isDefined<CodeableConcept>(this.use) && !this.use.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EpisodeOfCare.diagnosis';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.condition,
      this.use,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EpisodeOfCareDiagnosisComponent {
    const dest = new EpisodeOfCareDiagnosisComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EpisodeOfCareDiagnosisComponent): void {
    super.copyValues(dest);
    const conditionList = copyListValues<CodeableReference>(this.condition);
    dest.condition = conditionList.length === 0 ? undefined : conditionList;
    dest.use = this.use?.copy();
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasCondition()) {
      setFhirComplexListJson(this.getCondition(), 'condition', jsonObj);
    }

    if (this.hasUse()) {
      setFhirComplexJson(this.getUse(), 'use', jsonObj);
    }

    return jsonObj;
  }
}
