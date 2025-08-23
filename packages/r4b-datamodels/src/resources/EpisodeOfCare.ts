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
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  JSON,
  PositiveIntType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirPositiveInt,
  fhirPositiveIntSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
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
 * - **FHIR Version:** 4.3.0
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
   * @throws {@link FhirError} if the provided JSON is missing required properties
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
    

    const missingReqdProperties: string[] = [];

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addIdentifier(datatype);
        }
      });
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'statusHistory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EpisodeOfCareStatusHistoryComponent | undefined = EpisodeOfCareStatusHistoryComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStatusHistory(component);
        }
      });
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addType(datatype);
        }
      });
    }

    fieldName = 'diagnosis';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EpisodeOfCareDiagnosisComponent | undefined = EpisodeOfCareDiagnosisComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDiagnosis(component);
        }
      });
    }

    fieldName = 'patient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPatient(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReferralRequest(datatype);
        }
      });
  }

    fieldName = 'careManager';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCareManager(datatype);
    }

    fieldName = 'team';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTeam(datatype);
        }
      });
  }

    fieldName = 'account';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAccount(datatype);
        }
      });
  }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
   * EpisodeOfCare.diagnosis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The list of diagnosis relevant to this episode of care
   * - **Definition:** The list of diagnosis relevant to this episode of care.
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
   * - **Short:** Organization that assumes care
   * - **Definition:** The organization that has assumed the specific responsibilities for the specified duration.
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
   * EpisodeOfCare.team Element
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
  private team?: Reference[] | undefined;

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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `EpisodeOfCare.status is required`);
    const errMsgPrefix = `Invalid EpisodeOfCare.status`;
    assertEnumCodeType<EpisodeOfCareStatusEnum>(enumType, EpisodeOfCareStatusEnum, errMsgPrefix);
    this.status = enumType;
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
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `EpisodeOfCare.status is required`);
    const optErrMsg = `Invalid EpisodeOfCare.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.episodeOfCareStatusEnum);
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
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `EpisodeOfCare.status is required`);
    const optErrMsg = `Invalid EpisodeOfCare.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.episodeOfCareStatusEnum);
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
   * @returns the `patient` property value as a Reference object if defined; else null
   */
  public getPatient(): Reference | null {
    return this.patient;
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
  public setPatient(value: Reference): this {
    assertIsDefined<Reference>(value, `EpisodeOfCare.patient is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.patient = value;
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
   * @returns the `team` property value as a Reference array
   */
  public getTeam(): Reference[] {
    return this.team ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `team` property.
   *
   * @decorator `@ReferenceTargets('EpisodeOfCare.team', ['CareTeam',])`
   *
   * @param value - the `team` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EpisodeOfCare.team', [
    'CareTeam',
  ])
  public setTeam(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.team = value;
    } else {
      this.team = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `team` array property.
   *
   * @decorator `@ReferenceTargets('EpisodeOfCare.team', ['CareTeam',])`
   *
   * @param value - the `team` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EpisodeOfCare.team', [
    'CareTeam',
  ])
  public addTeam(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initTeam();
      this.team?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `team` property exists and has a value; `false` otherwise
   */
  public hasTeam(): boolean {
    return isDefinedList<Reference>(this.team) && this.team.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `team` property
   */
  private initTeam(): void {
    if (!this.hasTeam()) {
      this.team = [] as Reference[];
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
      this.diagnosis,
      this.patient,
      this.managingOrganization,
      this.period,
      this.referralRequest,
      this.careManager,
      this.team,
      this.account,
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
    const diagnosisList = copyListValues<EpisodeOfCareDiagnosisComponent>(this.diagnosis);
    dest.diagnosis = diagnosisList.length === 0 ? undefined : diagnosisList;
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.managingOrganization = this.managingOrganization?.copy();
    dest.period = this.period?.copy();
    const referralRequestList = copyListValues<Reference>(this.referralRequest);
    dest.referralRequest = referralRequestList.length === 0 ? undefined : referralRequestList;
    dest.careManager = this.careManager?.copy();
    const teamList = copyListValues<Reference>(this.team);
    dest.team = teamList.length === 0 ? undefined : teamList;
    const accountList = copyListValues<Reference>(this.account);
    dest.account = accountList.length === 0 ? undefined : accountList;
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   * @throws {@link FhirError} if the instance is missing required properties
   */
  public override toJSON(): JSON.Value | undefined {
    // Required class properties exist (have a min cardinality > 0); therefore, do not check for this.isEmpty()!

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    const missingReqdProperties: string[] = [];

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`EpisodeOfCare.status`);
    }

    if (this.hasStatusHistory()) {
      setFhirBackboneElementListJson(this.getStatusHistory(), 'statusHistory', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasDiagnosis()) {
      setFhirBackboneElementListJson(this.getDiagnosis(), 'diagnosis', jsonObj);
    }

    if (this.hasPatient()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPatient()!, 'patient', jsonObj);
    } else {
      missingReqdProperties.push(`EpisodeOfCare.patient`);
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

    if (this.hasTeam()) {
      setFhirComplexListJson(this.getTeam(), 'team', jsonObj);
    }

    if (this.hasAccount()) {
      setFhirComplexListJson(this.getAccount(), 'account', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
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
   * @throws {@link FhirError} if the provided JSON is missing required properties
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
    

    const missingReqdProperties: string[] = [];

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPeriod(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `EpisodeOfCare.statusHistory.status is required`);
    const errMsgPrefix = `Invalid EpisodeOfCare.statusHistory.status`;
    assertEnumCodeType<EpisodeOfCareStatusEnum>(enumType, EpisodeOfCareStatusEnum, errMsgPrefix);
    this.status = enumType;
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
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `EpisodeOfCare.statusHistory.status is required`);
    const optErrMsg = `Invalid EpisodeOfCare.statusHistory.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.episodeOfCareStatusEnum);
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
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `EpisodeOfCare.statusHistory.status is required`);
    const optErrMsg = `Invalid EpisodeOfCare.statusHistory.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.episodeOfCareStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `period` property value as a Period object if defined; else null
   */
  public getPeriod(): Period | null {
    return this.period;
  }

  /**
   * Assigns the provided Period object value to the `period` property.
   *
   * @param value - the `period` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Period): this {
    assertIsDefined<Period>(value, `EpisodeOfCare.statusHistory.period is required`);
    const optErrMsg = `Invalid EpisodeOfCare.statusHistory.period; Provided element is not an instance of Period.`;
    assertFhirType<Period>(value, Period, optErrMsg);
    this.period = value;
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
   * @throws {@link FhirError} if the instance is missing required properties
   */
  public override toJSON(): JSON.Value | undefined {
    // Required class properties exist (have a min cardinality > 0); therefore, do not check for this.isEmpty()!

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    const missingReqdProperties: string[] = [];

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`EpisodeOfCare.statusHistory.status`);
    }

    if (this.hasPeriod()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPeriod()!, 'period', jsonObj);
    } else {
      missingReqdProperties.push(`EpisodeOfCare.statusHistory.period`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * EpisodeOfCareDiagnosisComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The list of diagnosis relevant to this episode of care
 * - **Definition:** The list of diagnosis relevant to this episode of care.
 *
 * @category Data Models: Resource
 * @see [FHIR EpisodeOfCare](http://hl7.org/fhir/StructureDefinition/EpisodeOfCare)
 */
export class EpisodeOfCareDiagnosisComponent extends BackboneElement implements IBackboneElement {
  constructor(condition: Reference | null = null) {
    super();

    this.condition = null;
    if (isDefined<Reference>(condition)) {
      this.setCondition(condition);
    }
  }

  /**
   * Parse the provided `EpisodeOfCareDiagnosisComponent` JSON to instantiate the EpisodeOfCareDiagnosisComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EpisodeOfCareDiagnosisComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EpisodeOfCareDiagnosisComponent
   * @returns EpisodeOfCareDiagnosisComponent data model or undefined for `EpisodeOfCareDiagnosisComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
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
    

    const missingReqdProperties: string[] = [];

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCondition(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    fieldName = 'rank';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setRankElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * EpisodeOfCare.diagnosis.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Conditions/problems/diagnoses this episode of care is for
   * - **Definition:** A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private condition: Reference | null;

  /**
   * EpisodeOfCare.diagnosis.role Element
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
  private role?: CodeableConcept | undefined;

  /**
   * EpisodeOfCare.diagnosis.rank Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Ranking of the diagnosis (for each role type)
   * - **Definition:** Ranking of the diagnosis (for each role type).
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private rank?: PositiveIntType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `condition` property value as a Reference object if defined; else null
   */
  public getCondition(): Reference | null {
    return this.condition;
  }

  /**
   * Assigns the provided Condition object value to the `condition` property.
   *
   * @decorator `@ReferenceTargets('EpisodeOfCare.diagnosis.condition', ['Condition',])`
   *
   * @param value - the `condition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EpisodeOfCare.diagnosis.condition', [
    'Condition',
  ])
  public setCondition(value: Reference): this {
    assertIsDefined<Reference>(value, `EpisodeOfCare.diagnosis.condition is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.condition = value;
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return isDefined<Reference>(this.condition) && !this.condition.isEmpty();
  }

  /**
   * @returns the `role` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRole(): CodeableConcept {
    return this.role ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Role object value to the `role` property.
   *
   * @param value - the `role` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRole(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.diagnosis.role; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.role = value;
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return isDefined<CodeableConcept>(this.role) && !this.role.isEmpty();
  }

  /**
   * @returns the `rank` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getRankElement(): PositiveIntType {
    return this.rank ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `rank` property.
   *
   * @param element - the `rank` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRankElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid EpisodeOfCare.diagnosis.rank; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.rank = element;
    } else {
      this.rank = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rank` property exists and has a value; `false` otherwise
   */
  public hasRankElement(): boolean {
    return isDefined<PositiveIntType>(this.rank) && !this.rank.isEmpty();
  }

  /**
   * @returns the `rank` property value as a fhirPositiveInt if defined; else undefined
   */
  public getRank(): fhirPositiveInt | undefined {
    return this.rank?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `rank` property.
   *
   * @param value - the `rank` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRank(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid EpisodeOfCare.diagnosis.rank (${String(value)})`;
      this.rank = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.rank = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rank` property exists and has a value; `false` otherwise
   */
  public hasRank(): boolean {
    return this.hasRankElement();
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
      this.role,
      this.rank,
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
    dest.condition = this.condition ? this.condition.copy() : null;
    dest.role = this.role?.copy();
    dest.rank = this.rank?.copy();
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   * @throws {@link FhirError} if the instance is missing required properties
   */
  public override toJSON(): JSON.Value | undefined {
    // Required class properties exist (have a min cardinality > 0); therefore, do not check for this.isEmpty()!

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    const missingReqdProperties: string[] = [];

    if (this.hasCondition()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCondition()!, 'condition', jsonObj);
    } else {
      missingReqdProperties.push(`EpisodeOfCare.diagnosis.condition`);
    }

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    if (this.hasRankElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getRankElement(), 'rank', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
