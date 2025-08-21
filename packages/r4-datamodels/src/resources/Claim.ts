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
 * Claim Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Claim
 * StructureDefinition.name: Claim
 * StructureDefinition.description: A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  BooleanType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DateType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  InvalidTypeError,
  JSON,
  PositiveIntType,
  PrimitiveType,
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  assertIsDefinedList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDate,
  fhirDateSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirDecimal,
  fhirDecimalSchema,
  fhirPositiveInt,
  fhirPositiveIntSchema,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Address, Attachment, CodeableConcept, Identifier, Money, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference } from '../complex-types/complex-datatypes';
import { ClaimUseEnum } from '../code-systems/ClaimUseEnum';
import { FmStatusEnum } from '../code-systems/FmStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Claim Class
 *
 * @remarks
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 *
 * The Claim resource is used by providers to exchange services and products rendered to patients or planned to be rendered with insurers for reimbuserment. It is also used by insurers to exchange claims information with statutory reporting and data analytics firms.
 *
 * **FHIR Specification**
 * - **Short:** Claim, Pre-determination or Pre-authorization
 * - **Definition:** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 * - **Comment:** The Claim resource fulfills three information request requirements: Claim - a request for adjudication for reimbursement for products and/or services provided; Preauthorization - a request to authorize the future provision of products and/or services including an anticipated adjudication; and, Predetermination - a request for a non-bind adjudication of possible future products and/or services.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR Claim](http://hl7.org/fhir/StructureDefinition/Claim)
 */
export class Claim extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, type_: CodeableConcept | null = null, use: EnumCodeType | CodeType | fhirCode | null = null, patient: Reference | null = null, created: DateTimeType | fhirDateTime | null = null, provider: Reference | null = null, priority: CodeableConcept | null = null, insurance: ClaimInsuranceComponent[] | null = null) {
    super();

    this.fmStatusEnum = new FmStatusEnum();
    this.claimUseEnum = new ClaimUseEnum();

    this.status = constructorCodeValueAsEnumCodeType<FmStatusEnum>(
      status,
      FmStatusEnum,
      this.fmStatusEnum,
      'Claim.status',
    );

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.use = constructorCodeValueAsEnumCodeType<ClaimUseEnum>(
      use,
      ClaimUseEnum,
      this.claimUseEnum,
      'Claim.use',
    );

    this.patient = null;
    if (isDefined<Reference>(patient)) {
      this.setPatient(patient);
    }

    this.created = null;
    if (isDefined<DateTimeType | fhirDateTime>(created)) {
      if (created instanceof PrimitiveType) {
        this.setCreatedElement(created);
      } else {
        this.setCreated(created);
      }
    }

    this.provider = null;
    if (isDefined<Reference>(provider)) {
      this.setProvider(provider);
    }

    this.priority = null;
    if (isDefined<CodeableConcept>(priority)) {
      this.setPriority(priority);
    }

    this.insurance = null;
    if (isDefinedList<ClaimInsuranceComponent>(insurance)) {
      this.setInsurance(insurance);
    }
  }

  /**
   * Parse the provided `Claim` JSON to instantiate the Claim data model.
   *
   * @param sourceJson - JSON representing FHIR `Claim`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Claim
   * @returns Claim data model or undefined for `Claim`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Claim | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Claim';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Claim();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Claim');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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
    primitiveJsonType = 'string';
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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'subType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubType(datatype);
    }

    fieldName = 'use';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setUseElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'billablePeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBillablePeriod(datatype);
    }

    fieldName = 'created';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCreatedElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'enterer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEnterer(datatype);
    }

    fieldName = 'insurer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setInsurer(datatype);
    }

    fieldName = 'provider';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setProvider(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPriority(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'fundsReserve';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFundsReserve(datatype);
    }

    fieldName = 'related';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimRelatedComponent | undefined = ClaimRelatedComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRelated(component);
        }
      });
    }

    fieldName = 'prescription';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPrescription(datatype);
    }

    fieldName = 'originalPrescription';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOriginalPrescription(datatype);
    }

    fieldName = 'payee';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClaimPayeeComponent | undefined = ClaimPayeeComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPayee(component);
    }

    fieldName = 'referral';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReferral(datatype);
    }

    fieldName = 'facility';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFacility(datatype);
    }

    fieldName = 'careTeam';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimCareTeamComponent | undefined = ClaimCareTeamComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCareTeam(component);
        }
      });
    }

    fieldName = 'supportingInfo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimSupportingInfoComponent | undefined = ClaimSupportingInfoComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSupportingInfo(component);
        }
      });
    }

    fieldName = 'diagnosis';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimDiagnosisComponent | undefined = ClaimDiagnosisComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDiagnosis(component);
        }
      });
    }

    fieldName = 'procedure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimProcedureComponent | undefined = ClaimProcedureComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProcedure(component);
        }
      });
    }

    fieldName = 'insurance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimInsuranceComponent | undefined = ClaimInsuranceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addInsurance(component);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'accident';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClaimAccidentComponent | undefined = ClaimAccidentComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAccident(component);
    }

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimItemComponent | undefined = ClaimItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addItem(component);
        }
      });
    }

    fieldName = 'total';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTotal(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Claim.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for claim
   * - **Definition:** A unique identifier assigned to this claim.
   * - **Requirements:** Allows claims to be distinguished and referenced.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: FmStatus
   *
   * @see {@link FmStatusEnum }
   */
  private readonly fmStatusEnum: FmStatusEnum;

  /**
   * Claim.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | cancelled | draft | entered-in-error
   * - **Definition:** The status of the resource instance.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **Requirements:** Need to track the status of the resource as \'draft\' resources may undergo further edits while \'active\' resources are immutable and may only have their status changed to \'cancelled\'.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Claim.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category or discipline
   * - **Definition:** The category of claim, e.g. oral, pharmacy, vision, institutional, professional.
   * - **Comment:** The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
   * - **Requirements:** Claim type determine the general sets of business rules applied for information requirements and adjudication.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * Claim.subType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** More granular claim type
   * - **Definition:** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service.
   * - **Comment:** This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
   * - **Requirements:** Some jurisdictions need a finer grained claim type for routing and adjudication.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subType?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: ClaimUse
   *
   * @see {@link ClaimUseEnum }
   */
  private readonly claimUseEnum: ClaimUseEnum;

  /**
   * Claim.use Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** claim | preauthorization | predetermination
   * - **Definition:** A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
   * - **Requirements:** This element is required to understand the nature of the request for adjudication.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ClaimUseEnum }
   */
  private use: EnumCodeType | null;

  /**
   * Claim.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The recipient of the products and services
   * - **Definition:** The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.
   * - **Requirements:** The patient must be supplied to the insurer so that confirmation of coverage and service history may be considered as part of the authorization and/or adjudiction.
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
   * Claim.billablePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relevant time frame for the claim
   * - **Definition:** The period for which charges are being submitted.
   * - **Comment:** Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and predeterminations. Typically line item dates of service should fall within the billing period if one is specified.
   * - **Requirements:** A number jurisdictions required the submission of the billing period when submitting claims for example for hospital stays or long-term care.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private billablePeriod?: Period | undefined;

  /**
   * Claim.created Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resource creation date
   * - **Definition:** The date this resource was created.
   * - **Comment:** This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
   * - **Requirements:** Need to record a timestamp for use by both the recipient and the issuer.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private created: DateTimeType | null;

  /**
   * Claim.enterer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Author of the claim
   * - **Definition:** Individual who created the claim, predetermination or preauthorization.
   * - **Requirements:** Some jurisdictions require the contact information for personnel completing claims.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private enterer?: Reference | undefined;

  /**
   * Claim.insurer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Target
   * - **Definition:** The Insurer who is target of the request.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private insurer?: Reference | undefined;

  /**
   * Claim.provider Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Party responsible for the claim
   * - **Definition:** The provider which is responsible for the claim, predetermination or preauthorization.
   * - **Comment:** Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private provider: Reference | null;

  /**
   * Claim.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Desired processing ugency
   * - **Definition:** The provider-required urgency of processing the request. Typical values include: stat, routine deferred.
   * - **Comment:** If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
   * - **Requirements:** The provider may need to indicate their processing requirements so that the processor can indicate if they are unable to comply.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private priority: CodeableConcept | null;

  /**
   * Claim.fundsReserve Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For whom to reserve funds
   * - **Definition:** A code to indicate whether and for whom funds are to be reserved for future claims.
   * - **Comment:** This field is only used for preauthorizations.
   * - **Requirements:** In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved (\'Patient\' or \'Provider\') to pay for the Benefits determined on the subsequent claim(s). \'None\' explicitly indicates no funds reserving is requested.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private fundsReserve?: CodeableConcept | undefined;

  /**
   * Claim.related Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Prior or corollary claims
   * - **Definition:** Other claims which are related to this claim such as prior submissions or claims for related services or for the same event.
   * - **Comment:** For example,  for the original treatment and follow-up exams.
   * - **Requirements:** For workplace or other accidents it is common to relate separate claims arising from the same event.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private related?: ClaimRelatedComponent[] | undefined;

  /**
   * Claim.prescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Prescription authorizing services and products
   * - **Definition:** Prescription to support the dispensing of pharmacy, device or vision products.
   * - **Requirements:** Required to authorize the dispensing of controlled substances and devices.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/VisionPrescription',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private prescription?: Reference | undefined;

  /**
   * Claim.originalPrescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Original prescription if superseded by fulfiller
   * - **Definition:** Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products.
   * - **Comment:** For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefore issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the \'prescription\' and that from the physician becomes the \'original prescription\'.
   * - **Requirements:** Often required when a fulfiller varies what is fulfilled from that authorized on the original prescription.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/VisionPrescription',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private originalPrescription?: Reference | undefined;

  /**
   * Claim.payee Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recipient of benefits payable
   * - **Definition:** The party to be reimbursed for cost of the products and services according to the terms of the policy.
   * - **Comment:** Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
   * - **Requirements:** The provider needs to specify who they wish to be reimbursed and the claims processor needs express who they will reimburse.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private payee?: ClaimPayeeComponent | undefined;

  /**
   * Claim.referral Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Treatment referral
   * - **Definition:** A reference to a referral resource.
   * - **Comment:** The referral resource which lists the date, practitioner, reason and other supporting information.
   * - **Requirements:** Some insurers require proof of referral to pay for services or to pay specialist rates for services.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private referral?: Reference | undefined;

  /**
   * Claim.facility Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Servicing facility
   * - **Definition:** Facility where the services were provided.
   * - **Requirements:** Insurance adjudication can be dependant on where services were delivered.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private facility?: Reference | undefined;

  /**
   * Claim.careTeam Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Members of the care team
   * - **Definition:** The members of the team who provided the products and services.
   * - **Requirements:** Common to identify the responsible and supporting practitioners.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private careTeam?: ClaimCareTeamComponent[] | undefined;

  /**
   * Claim.supportingInfo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting information
   * - **Definition:** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.
   * - **Comment:** Often there are multiple jurisdiction specific valuesets which are required.
   * - **Requirements:** Typically these information codes are required to support the services rendered or the adjudication of the services rendered.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private supportingInfo?: ClaimSupportingInfoComponent[] | undefined;

  /**
   * Claim.diagnosis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pertinent diagnosis information
   * - **Definition:** Information about diagnoses relevant to the claim items.
   * - **Requirements:** Required for the adjudication by provided context for the services and product listed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private diagnosis?: ClaimDiagnosisComponent[] | undefined;

  /**
   * Claim.procedure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Clinical procedures performed
   * - **Definition:** Procedures performed on the patient relevant to the billing items with the claim.
   * - **Requirements:** The specific clinical invention are sometimes required to be provided to justify billing a greater than customary amount for a service.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private procedure?: ClaimProcedureComponent[] | undefined;

  /**
   * Claim.insurance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient insurance information
   * - **Definition:** Financial instruments for reimbursement for the health care products and services specified on the claim.
   * - **Comment:** All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local \'coordination of benefit\' rules. One coverage (and only one) with \'focal=true\' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where \'Coverage.subrogation=false\', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   * - **Requirements:** At least one insurer is required for a claim to be a claim.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private insurance: ClaimInsuranceComponent[] | null;

  /**
   * Claim.accident Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details of the event
   * - **Definition:** Details of an accident which resulted in injuries which required the products and services listed in the claim.
   * - **Requirements:** When healthcare products and services are accident related, benefits may be payable under accident provisions of policies, such as automotive, etc before they are payable under normal health insurance.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private accident?: ClaimAccidentComponent | undefined;

  /**
   * Claim.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product or service provided
   * - **Definition:** A claim line. Either a simple  product or service or a \'group\' of details which can each be a simple items or groups of sub-details.
   * - **Requirements:** The items to be processed for adjudication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item?: ClaimItemComponent[] | undefined;

  /**
   * Claim.total Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total claim cost
   * - **Definition:** The total value of the all the items in the claim.
   * - **Requirements:** Used for  control total purposes.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private total?: Money | undefined;

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
      const optErrMsg = `Invalid Claim.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Claim.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `Claim.status is required`);
    const errMsgPrefix = `Invalid Claim.status`;
    assertEnumCodeType<FmStatusEnum>(enumType, FmStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Claim.status is required`);
    const optErrMsg = `Invalid Claim.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.fmStatusEnum);
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Claim.status is required`);
    const optErrMsg = `Invalid Claim.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fmStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else null
   */
  public getType(): CodeableConcept | null {
    return this.type_;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Claim.type is required`);
    const optErrMsg = `Invalid Claim.type; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.type_ = value;
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefined<CodeableConcept>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `subType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSubType(): CodeableConcept {
    return this.subType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided SubType object value to the `subType` property.
   *
   * @param value - the `subType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.subType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.subType = value;
    } else {
      this.subType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subType` property exists and has a value; `false` otherwise
   */
  public hasSubType(): boolean {
    return isDefined<CodeableConcept>(this.subType) && !this.subType.isEmpty();
  }

  /**
   * @returns the `use` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ClaimUseEnum }
   */
  public getUseEnumType(): EnumCodeType | null {
    return this.use;
  }

  /**
   * Assigns the provided EnumCodeType value to the `use` property.
   *
   * @param enumType - the `use` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ClaimUseEnum }
   */
  public setUseEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `Claim.use is required`);
    const errMsgPrefix = `Invalid Claim.use`;
    assertEnumCodeType<ClaimUseEnum>(enumType, ClaimUseEnum, errMsgPrefix);
    this.use = enumType;
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUseEnumType(): boolean {
    return isDefined<EnumCodeType>(this.use) && !this.use.isEmpty() && this.use.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `use` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ClaimUseEnum }
   */
  public getUseElement(): CodeType | null {
    if (this.use === null) {
      return null;
    }
    return this.use as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `use` property.
   *
   * @param element - the `use` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ClaimUseEnum }
   */
  public setUseElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Claim.use is required`);
    const optErrMsg = `Invalid Claim.use; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.use = new EnumCodeType(element, this.claimUseEnum);
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUseElement(): boolean {
    return this.hasUseEnumType();
  }

  /**
   * @returns the `use` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ClaimUseEnum }
   */
  public getUse(): fhirCode | null {
    if (this.use === null) {
      return null;
    }
    return this.use.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `use` property.
   *
   * @param value - the `use` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ClaimUseEnum }
   */
  public setUse(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Claim.use is required`);
    const optErrMsg = `Invalid Claim.use (${String(value)})`;
    this.use = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.claimUseEnum);
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUse(): boolean {
    return this.hasUseEnumType();
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
   * @decorator `@ReferenceTargets('Claim.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.patient', [
    'Patient',
  ])
  public setPatient(value: Reference): this {
    assertIsDefined<Reference>(value, `Claim.patient is required`);
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
   * @returns the `billablePeriod` property value as a Period object if defined; else an empty Period object
   */
  public getBillablePeriod(): Period {
    return this.billablePeriod ?? new Period();
  }

  /**
   * Assigns the provided BillablePeriod object value to the `billablePeriod` property.
   *
   * @param value - the `billablePeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBillablePeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Claim.billablePeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.billablePeriod = value;
    } else {
      this.billablePeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `billablePeriod` property exists and has a value; `false` otherwise
   */
  public hasBillablePeriod(): boolean {
    return isDefined<Period>(this.billablePeriod) && !this.billablePeriod.isEmpty();
  }

  /**
   * @returns the `created` property value as a DateTimeType object if defined; else null
   */
  public getCreatedElement(): DateTimeType | null {
    return this.created;
  }

  /**
   * Assigns the provided PrimitiveType value to the `created` property.
   *
   * @param element - the `created` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreatedElement(element: DateTimeType): this {
    assertIsDefined<DateTimeType>(element, `Claim.created is required`);
    const optErrMsg = `Invalid Claim.created; Provided value is not an instance of DateTimeType.`;
    assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
    this.created = element;
    return this;
  }

  /**
   * @returns `true` if the `created` property exists and has a value; `false` otherwise
   */
  public hasCreatedElement(): boolean {
    return isDefined<DateTimeType>(this.created) && !this.created.isEmpty();
  }

  /**
   * @returns the `created` property value as a fhirDateTime if defined; else null
   */
  public getCreated(): fhirDateTime | null {
    if (this.created?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.created.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `created` property.
   *
   * @param value - the `created` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreated(value: fhirDateTime): this {
    assertIsDefined<fhirDateTime>(value, `Claim.created is required`);
    const optErrMsg = `Invalid Claim.created (${String(value)})`;
    this.created = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `created` property exists and has a value; `false` otherwise
   */
  public hasCreated(): boolean {
    return this.hasCreatedElement();
  }

  /**
   * @returns the `enterer` property value as a Reference object; else an empty Reference object
   */
  public getEnterer(): Reference {
    return this.enterer ?? new Reference();
  }

  /**
   * Assigns the provided Enterer object value to the `enterer` property.
   *
   * @decorator `@ReferenceTargets('Claim.enterer', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `enterer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.enterer', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setEnterer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.enterer = value;
    } else {
      this.enterer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `enterer` property exists and has a value; `false` otherwise
   */
  public hasEnterer(): boolean {
    return isDefined<Reference>(this.enterer) && !this.enterer.isEmpty();
  }

  /**
   * @returns the `insurer` property value as a Reference object; else an empty Reference object
   */
  public getInsurer(): Reference {
    return this.insurer ?? new Reference();
  }

  /**
   * Assigns the provided Insurer object value to the `insurer` property.
   *
   * @decorator `@ReferenceTargets('Claim.insurer', ['Organization',])`
   *
   * @param value - the `insurer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.insurer', [
    'Organization',
  ])
  public setInsurer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.insurer = value;
    } else {
      this.insurer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `insurer` property exists and has a value; `false` otherwise
   */
  public hasInsurer(): boolean {
    return isDefined<Reference>(this.insurer) && !this.insurer.isEmpty();
  }

  /**
   * @returns the `provider` property value as a Reference object if defined; else null
   */
  public getProvider(): Reference | null {
    return this.provider;
  }

  /**
   * Assigns the provided Provider object value to the `provider` property.
   *
   * @decorator `@ReferenceTargets('Claim.provider', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `provider` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.provider', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setProvider(value: Reference): this {
    assertIsDefined<Reference>(value, `Claim.provider is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.provider = value;
    return this;
  }

  /**
   * @returns `true` if the `provider` property exists and has a value; `false` otherwise
   */
  public hasProvider(): boolean {
    return isDefined<Reference>(this.provider) && !this.provider.isEmpty();
  }

  /**
   * @returns the `priority` property value as a CodeableConcept object if defined; else null
   */
  public getPriority(): CodeableConcept | null {
    return this.priority;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `priority` property.
   *
   * @param value - the `priority` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPriority(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Claim.priority is required`);
    const optErrMsg = `Invalid Claim.priority; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.priority = value;
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriority(): boolean {
    return isDefined<CodeableConcept>(this.priority) && !this.priority.isEmpty();
  }

  /**
   * @returns the `fundsReserve` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFundsReserve(): CodeableConcept {
    return this.fundsReserve ?? new CodeableConcept();
  }

  /**
   * Assigns the provided FundsReserve object value to the `fundsReserve` property.
   *
   * @param value - the `fundsReserve` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFundsReserve(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.fundsReserve; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.fundsReserve = value;
    } else {
      this.fundsReserve = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `fundsReserve` property exists and has a value; `false` otherwise
   */
  public hasFundsReserve(): boolean {
    return isDefined<CodeableConcept>(this.fundsReserve) && !this.fundsReserve.isEmpty();
  }

  /**
   * @returns the `related` property value as a ClaimRelatedComponent array
   */
  public getRelated(): ClaimRelatedComponent[] {
    return this.related ?? ([] as ClaimRelatedComponent[]);
  }

  /**
   * Assigns the provided ClaimRelatedComponent array value to the `related` property.
   *
   * @param value - the `related` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelated(value: ClaimRelatedComponent[] | undefined): this {
    if (isDefinedList<ClaimRelatedComponent>(value)) {
      const optErrMsg = `Invalid Claim.related; Provided value array has an element that is not an instance of ClaimRelatedComponent.`;
      assertFhirTypeList<ClaimRelatedComponent>(value, ClaimRelatedComponent, optErrMsg);
      this.related = value;
    } else {
      this.related = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimRelatedComponent value to the `related` array property.
   *
   * @param value - the `related` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelated(value: ClaimRelatedComponent | undefined): this {
    if (isDefined<ClaimRelatedComponent>(value)) {
      const optErrMsg = `Invalid Claim.related; Provided element is not an instance of ClaimRelatedComponent.`;
      assertFhirType<ClaimRelatedComponent>(value, ClaimRelatedComponent, optErrMsg);
      this.initRelated();
      this.related?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `related` property exists and has a value; `false` otherwise
   */
  public hasRelated(): boolean {
    return isDefinedList<ClaimRelatedComponent>(this.related) && this.related.some((item: ClaimRelatedComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `related` property
   */
  private initRelated(): void {
    if(!this.hasRelated()) {
      this.related = [] as ClaimRelatedComponent[];
    }
  }

  /**
   * @returns the `prescription` property value as a Reference object; else an empty Reference object
   */
  public getPrescription(): Reference {
    return this.prescription ?? new Reference();
  }

  /**
   * Assigns the provided Prescription object value to the `prescription` property.
   *
   * @decorator `@ReferenceTargets('Claim.prescription', ['DeviceRequest','MedicationRequest','VisionPrescription',])`
   *
   * @param value - the `prescription` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.prescription', [
    'DeviceRequest',
  
    'MedicationRequest',
  
    'VisionPrescription',
  ])
  public setPrescription(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.prescription = value;
    } else {
      this.prescription = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `prescription` property exists and has a value; `false` otherwise
   */
  public hasPrescription(): boolean {
    return isDefined<Reference>(this.prescription) && !this.prescription.isEmpty();
  }

  /**
   * @returns the `originalPrescription` property value as a Reference object; else an empty Reference object
   */
  public getOriginalPrescription(): Reference {
    return this.originalPrescription ?? new Reference();
  }

  /**
   * Assigns the provided OriginalPrescription object value to the `originalPrescription` property.
   *
   * @decorator `@ReferenceTargets('Claim.originalPrescription', ['DeviceRequest','MedicationRequest','VisionPrescription',])`
   *
   * @param value - the `originalPrescription` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.originalPrescription', [
    'DeviceRequest',
  
    'MedicationRequest',
  
    'VisionPrescription',
  ])
  public setOriginalPrescription(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.originalPrescription = value;
    } else {
      this.originalPrescription = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `originalPrescription` property exists and has a value; `false` otherwise
   */
  public hasOriginalPrescription(): boolean {
    return isDefined<Reference>(this.originalPrescription) && !this.originalPrescription.isEmpty();
  }

  /**
   * @returns the `payee` property value as a ClaimPayeeComponent object if defined; else an empty ClaimPayeeComponent object
   */
  public getPayee(): ClaimPayeeComponent {
    return this.payee ?? new ClaimPayeeComponent();
  }

  /**
   * Assigns the provided Payee object value to the `payee` property.
   *
   * @param value - the `payee` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPayee(value: ClaimPayeeComponent | undefined): this {
    if (isDefined<ClaimPayeeComponent>(value)) {
      const optErrMsg = `Invalid Claim.payee; Provided element is not an instance of ClaimPayeeComponent.`;
      assertFhirType<ClaimPayeeComponent>(value, ClaimPayeeComponent, optErrMsg);
      this.payee = value;
    } else {
      this.payee = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `payee` property exists and has a value; `false` otherwise
   */
  public hasPayee(): boolean {
    return isDefined<ClaimPayeeComponent>(this.payee) && !this.payee.isEmpty();
  }

  /**
   * @returns the `referral` property value as a Reference object; else an empty Reference object
   */
  public getReferral(): Reference {
    return this.referral ?? new Reference();
  }

  /**
   * Assigns the provided Referral object value to the `referral` property.
   *
   * @decorator `@ReferenceTargets('Claim.referral', ['ServiceRequest',])`
   *
   * @param value - the `referral` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.referral', [
    'ServiceRequest',
  ])
  public setReferral(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.referral = value;
    } else {
      this.referral = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `referral` property exists and has a value; `false` otherwise
   */
  public hasReferral(): boolean {
    return isDefined<Reference>(this.referral) && !this.referral.isEmpty();
  }

  /**
   * @returns the `facility` property value as a Reference object; else an empty Reference object
   */
  public getFacility(): Reference {
    return this.facility ?? new Reference();
  }

  /**
   * Assigns the provided Facility object value to the `facility` property.
   *
   * @decorator `@ReferenceTargets('Claim.facility', ['Location',])`
   *
   * @param value - the `facility` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.facility', [
    'Location',
  ])
  public setFacility(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.facility = value;
    } else {
      this.facility = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `facility` property exists and has a value; `false` otherwise
   */
  public hasFacility(): boolean {
    return isDefined<Reference>(this.facility) && !this.facility.isEmpty();
  }

  /**
   * @returns the `careTeam` property value as a ClaimCareTeamComponent array
   */
  public getCareTeam(): ClaimCareTeamComponent[] {
    return this.careTeam ?? ([] as ClaimCareTeamComponent[]);
  }

  /**
   * Assigns the provided ClaimCareTeamComponent array value to the `careTeam` property.
   *
   * @param value - the `careTeam` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCareTeam(value: ClaimCareTeamComponent[] | undefined): this {
    if (isDefinedList<ClaimCareTeamComponent>(value)) {
      const optErrMsg = `Invalid Claim.careTeam; Provided value array has an element that is not an instance of ClaimCareTeamComponent.`;
      assertFhirTypeList<ClaimCareTeamComponent>(value, ClaimCareTeamComponent, optErrMsg);
      this.careTeam = value;
    } else {
      this.careTeam = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimCareTeamComponent value to the `careTeam` array property.
   *
   * @param value - the `careTeam` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCareTeam(value: ClaimCareTeamComponent | undefined): this {
    if (isDefined<ClaimCareTeamComponent>(value)) {
      const optErrMsg = `Invalid Claim.careTeam; Provided element is not an instance of ClaimCareTeamComponent.`;
      assertFhirType<ClaimCareTeamComponent>(value, ClaimCareTeamComponent, optErrMsg);
      this.initCareTeam();
      this.careTeam?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `careTeam` property exists and has a value; `false` otherwise
   */
  public hasCareTeam(): boolean {
    return isDefinedList<ClaimCareTeamComponent>(this.careTeam) && this.careTeam.some((item: ClaimCareTeamComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `careTeam` property
   */
  private initCareTeam(): void {
    if(!this.hasCareTeam()) {
      this.careTeam = [] as ClaimCareTeamComponent[];
    }
  }

  /**
   * @returns the `supportingInfo` property value as a ClaimSupportingInfoComponent array
   */
  public getSupportingInfo(): ClaimSupportingInfoComponent[] {
    return this.supportingInfo ?? ([] as ClaimSupportingInfoComponent[]);
  }

  /**
   * Assigns the provided ClaimSupportingInfoComponent array value to the `supportingInfo` property.
   *
   * @param value - the `supportingInfo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSupportingInfo(value: ClaimSupportingInfoComponent[] | undefined): this {
    if (isDefinedList<ClaimSupportingInfoComponent>(value)) {
      const optErrMsg = `Invalid Claim.supportingInfo; Provided value array has an element that is not an instance of ClaimSupportingInfoComponent.`;
      assertFhirTypeList<ClaimSupportingInfoComponent>(value, ClaimSupportingInfoComponent, optErrMsg);
      this.supportingInfo = value;
    } else {
      this.supportingInfo = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimSupportingInfoComponent value to the `supportingInfo` array property.
   *
   * @param value - the `supportingInfo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSupportingInfo(value: ClaimSupportingInfoComponent | undefined): this {
    if (isDefined<ClaimSupportingInfoComponent>(value)) {
      const optErrMsg = `Invalid Claim.supportingInfo; Provided element is not an instance of ClaimSupportingInfoComponent.`;
      assertFhirType<ClaimSupportingInfoComponent>(value, ClaimSupportingInfoComponent, optErrMsg);
      this.initSupportingInfo();
      this.supportingInfo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInfo` property exists and has a value; `false` otherwise
   */
  public hasSupportingInfo(): boolean {
    return isDefinedList<ClaimSupportingInfoComponent>(this.supportingInfo) && this.supportingInfo.some((item: ClaimSupportingInfoComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `supportingInfo` property
   */
  private initSupportingInfo(): void {
    if(!this.hasSupportingInfo()) {
      this.supportingInfo = [] as ClaimSupportingInfoComponent[];
    }
  }

  /**
   * @returns the `diagnosis` property value as a ClaimDiagnosisComponent array
   */
  public getDiagnosis(): ClaimDiagnosisComponent[] {
    return this.diagnosis ?? ([] as ClaimDiagnosisComponent[]);
  }

  /**
   * Assigns the provided ClaimDiagnosisComponent array value to the `diagnosis` property.
   *
   * @param value - the `diagnosis` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDiagnosis(value: ClaimDiagnosisComponent[] | undefined): this {
    if (isDefinedList<ClaimDiagnosisComponent>(value)) {
      const optErrMsg = `Invalid Claim.diagnosis; Provided value array has an element that is not an instance of ClaimDiagnosisComponent.`;
      assertFhirTypeList<ClaimDiagnosisComponent>(value, ClaimDiagnosisComponent, optErrMsg);
      this.diagnosis = value;
    } else {
      this.diagnosis = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimDiagnosisComponent value to the `diagnosis` array property.
   *
   * @param value - the `diagnosis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDiagnosis(value: ClaimDiagnosisComponent | undefined): this {
    if (isDefined<ClaimDiagnosisComponent>(value)) {
      const optErrMsg = `Invalid Claim.diagnosis; Provided element is not an instance of ClaimDiagnosisComponent.`;
      assertFhirType<ClaimDiagnosisComponent>(value, ClaimDiagnosisComponent, optErrMsg);
      this.initDiagnosis();
      this.diagnosis?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `diagnosis` property exists and has a value; `false` otherwise
   */
  public hasDiagnosis(): boolean {
    return isDefinedList<ClaimDiagnosisComponent>(this.diagnosis) && this.diagnosis.some((item: ClaimDiagnosisComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `diagnosis` property
   */
  private initDiagnosis(): void {
    if(!this.hasDiagnosis()) {
      this.diagnosis = [] as ClaimDiagnosisComponent[];
    }
  }

  /**
   * @returns the `procedure` property value as a ClaimProcedureComponent array
   */
  public getProcedure(): ClaimProcedureComponent[] {
    return this.procedure ?? ([] as ClaimProcedureComponent[]);
  }

  /**
   * Assigns the provided ClaimProcedureComponent array value to the `procedure` property.
   *
   * @param value - the `procedure` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcedure(value: ClaimProcedureComponent[] | undefined): this {
    if (isDefinedList<ClaimProcedureComponent>(value)) {
      const optErrMsg = `Invalid Claim.procedure; Provided value array has an element that is not an instance of ClaimProcedureComponent.`;
      assertFhirTypeList<ClaimProcedureComponent>(value, ClaimProcedureComponent, optErrMsg);
      this.procedure = value;
    } else {
      this.procedure = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimProcedureComponent value to the `procedure` array property.
   *
   * @param value - the `procedure` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProcedure(value: ClaimProcedureComponent | undefined): this {
    if (isDefined<ClaimProcedureComponent>(value)) {
      const optErrMsg = `Invalid Claim.procedure; Provided element is not an instance of ClaimProcedureComponent.`;
      assertFhirType<ClaimProcedureComponent>(value, ClaimProcedureComponent, optErrMsg);
      this.initProcedure();
      this.procedure?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `procedure` property exists and has a value; `false` otherwise
   */
  public hasProcedure(): boolean {
    return isDefinedList<ClaimProcedureComponent>(this.procedure) && this.procedure.some((item: ClaimProcedureComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `procedure` property
   */
  private initProcedure(): void {
    if(!this.hasProcedure()) {
      this.procedure = [] as ClaimProcedureComponent[];
    }
  }

  /**
   * @returns the `insurance` property value as a ClaimInsuranceComponent array
   */
  public getInsurance(): ClaimInsuranceComponent[] {
    return this.insurance ?? ([] as ClaimInsuranceComponent[]);
  }

  /**
   * Assigns the provided ClaimInsuranceComponent array value to the `insurance` property.
   *
   * @param value - the `insurance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInsurance(value: ClaimInsuranceComponent[]): this {
    assertIsDefinedList<ClaimInsuranceComponent>(value, `Claim.insurance is required`);
    const optErrMsg = `Invalid Claim.insurance; Provided value array has an element that is not an instance of ClaimInsuranceComponent.`;
    assertFhirTypeList<ClaimInsuranceComponent>(value, ClaimInsuranceComponent, optErrMsg);
    this.insurance = value;
    return this;
  }

  /**
   * Add the provided ClaimInsuranceComponent value to the `insurance` array property.
   *
   * @param value - the `insurance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInsurance(value: ClaimInsuranceComponent | undefined): this {
    if (isDefined<ClaimInsuranceComponent>(value)) {
      const optErrMsg = `Invalid Claim.insurance; Provided element is not an instance of ClaimInsuranceComponent.`;
      assertFhirType<ClaimInsuranceComponent>(value, ClaimInsuranceComponent, optErrMsg);
      this.initInsurance();
      this.insurance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `insurance` property exists and has a value; `false` otherwise
   */
  public hasInsurance(): boolean {
    return isDefinedList<ClaimInsuranceComponent>(this.insurance) && this.insurance.some((item: ClaimInsuranceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `insurance` property
   */
  private initInsurance(): void {
    if(!this.hasInsurance()) {
      this.insurance = [] as ClaimInsuranceComponent[];
    }
  }

  /**
   * @returns the `accident` property value as a ClaimAccidentComponent object if defined; else an empty ClaimAccidentComponent object
   */
  public getAccident(): ClaimAccidentComponent {
    return this.accident ?? new ClaimAccidentComponent();
  }

  /**
   * Assigns the provided Accident object value to the `accident` property.
   *
   * @param value - the `accident` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAccident(value: ClaimAccidentComponent | undefined): this {
    if (isDefined<ClaimAccidentComponent>(value)) {
      const optErrMsg = `Invalid Claim.accident; Provided element is not an instance of ClaimAccidentComponent.`;
      assertFhirType<ClaimAccidentComponent>(value, ClaimAccidentComponent, optErrMsg);
      this.accident = value;
    } else {
      this.accident = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `accident` property exists and has a value; `false` otherwise
   */
  public hasAccident(): boolean {
    return isDefined<ClaimAccidentComponent>(this.accident) && !this.accident.isEmpty();
  }

  /**
   * @returns the `item` property value as a ClaimItemComponent array
   */
  public getItem(): ClaimItemComponent[] {
    return this.item ?? ([] as ClaimItemComponent[]);
  }

  /**
   * Assigns the provided ClaimItemComponent array value to the `item` property.
   *
   * @param value - the `item` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: ClaimItemComponent[] | undefined): this {
    if (isDefinedList<ClaimItemComponent>(value)) {
      const optErrMsg = `Invalid Claim.item; Provided value array has an element that is not an instance of ClaimItemComponent.`;
      assertFhirTypeList<ClaimItemComponent>(value, ClaimItemComponent, optErrMsg);
      this.item = value;
    } else {
      this.item = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimItemComponent value to the `item` array property.
   *
   * @param value - the `item` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addItem(value: ClaimItemComponent | undefined): this {
    if (isDefined<ClaimItemComponent>(value)) {
      const optErrMsg = `Invalid Claim.item; Provided element is not an instance of ClaimItemComponent.`;
      assertFhirType<ClaimItemComponent>(value, ClaimItemComponent, optErrMsg);
      this.initItem();
      this.item?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefinedList<ClaimItemComponent>(this.item) && this.item.some((item: ClaimItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `item` property
   */
  private initItem(): void {
    if(!this.hasItem()) {
      this.item = [] as ClaimItemComponent[];
    }
  }

  /**
   * @returns the `total` property value as a Money object if defined; else an empty Money object
   */
  public getTotal(): Money {
    return this.total ?? new Money();
  }

  /**
   * Assigns the provided Total object value to the `total` property.
   *
   * @param value - the `total` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTotal(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid Claim.total; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.total = value;
    } else {
      this.total = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `total` property exists and has a value; `false` otherwise
   */
  public hasTotal(): boolean {
    return isDefined<Money>(this.total) && !this.total.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Claim';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.type_,
      this.subType,
      this.use,
      this.patient,
      this.billablePeriod,
      this.created,
      this.enterer,
      this.insurer,
      this.provider,
      this.priority,
      this.fundsReserve,
      this.related,
      this.prescription,
      this.originalPrescription,
      this.payee,
      this.referral,
      this.facility,
      this.careTeam,
      this.supportingInfo,
      this.diagnosis,
      this.procedure,
      this.insurance,
      this.accident,
      this.item,
      this.total,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Claim {
    const dest = new Claim();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Claim): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.subType = this.subType?.copy();
    dest.use = this.use ? this.use.copy() : null;
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.billablePeriod = this.billablePeriod?.copy();
    dest.created = this.created ? this.created.copy() : null;
    dest.enterer = this.enterer?.copy();
    dest.insurer = this.insurer?.copy();
    dest.provider = this.provider ? this.provider.copy() : null;
    dest.priority = this.priority ? this.priority.copy() : null;
    dest.fundsReserve = this.fundsReserve?.copy();
    const relatedList = copyListValues<ClaimRelatedComponent>(this.related);
    dest.related = relatedList.length === 0 ? undefined : relatedList;
    dest.prescription = this.prescription?.copy();
    dest.originalPrescription = this.originalPrescription?.copy();
    dest.payee = this.payee?.copy();
    dest.referral = this.referral?.copy();
    dest.facility = this.facility?.copy();
    const careTeamList = copyListValues<ClaimCareTeamComponent>(this.careTeam);
    dest.careTeam = careTeamList.length === 0 ? undefined : careTeamList;
    const supportingInfoList = copyListValues<ClaimSupportingInfoComponent>(this.supportingInfo);
    dest.supportingInfo = supportingInfoList.length === 0 ? undefined : supportingInfoList;
    const diagnosisList = copyListValues<ClaimDiagnosisComponent>(this.diagnosis);
    dest.diagnosis = diagnosisList.length === 0 ? undefined : diagnosisList;
    const procedureList = copyListValues<ClaimProcedureComponent>(this.procedure);
    dest.procedure = procedureList.length === 0 ? undefined : procedureList;
    const insuranceList = copyListValues<ClaimInsuranceComponent>(this.insurance);
    dest.insurance = insuranceList.length === 0 ? null : insuranceList;
    dest.accident = this.accident?.copy();
    const itemList = copyListValues<ClaimItemComponent>(this.item);
    dest.item = itemList.length === 0 ? undefined : itemList;
    dest.total = this.total?.copy();
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
      missingReqdProperties.push(`Claim.status`);
    }

    if (this.hasType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getType()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.type`);
    }

    if (this.hasSubType()) {
      setFhirComplexJson(this.getSubType(), 'subType', jsonObj);
    }

    if (this.hasUseElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getUseElement()!, 'use', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.use`);
    }

    if (this.hasPatient()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPatient()!, 'patient', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.patient`);
    }

    if (this.hasBillablePeriod()) {
      setFhirComplexJson(this.getBillablePeriod(), 'billablePeriod', jsonObj);
    }

    if (this.hasCreatedElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirDateTime>(this.getCreatedElement()!, 'created', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.created`);
    }

    if (this.hasEnterer()) {
      setFhirComplexJson(this.getEnterer(), 'enterer', jsonObj);
    }

    if (this.hasInsurer()) {
      setFhirComplexJson(this.getInsurer(), 'insurer', jsonObj);
    }

    if (this.hasProvider()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getProvider()!, 'provider', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.provider`);
    }

    if (this.hasPriority()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPriority()!, 'priority', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.priority`);
    }

    if (this.hasFundsReserve()) {
      setFhirComplexJson(this.getFundsReserve(), 'fundsReserve', jsonObj);
    }

    if (this.hasRelated()) {
      setFhirBackboneElementListJson(this.getRelated(), 'related', jsonObj);
    }

    if (this.hasPrescription()) {
      setFhirComplexJson(this.getPrescription(), 'prescription', jsonObj);
    }

    if (this.hasOriginalPrescription()) {
      setFhirComplexJson(this.getOriginalPrescription(), 'originalPrescription', jsonObj);
    }

    if (this.hasPayee()) {
      setFhirBackboneElementJson(this.getPayee(), 'payee', jsonObj);
    }

    if (this.hasReferral()) {
      setFhirComplexJson(this.getReferral(), 'referral', jsonObj);
    }

    if (this.hasFacility()) {
      setFhirComplexJson(this.getFacility(), 'facility', jsonObj);
    }

    if (this.hasCareTeam()) {
      setFhirBackboneElementListJson(this.getCareTeam(), 'careTeam', jsonObj);
    }

    if (this.hasSupportingInfo()) {
      setFhirBackboneElementListJson(this.getSupportingInfo(), 'supportingInfo', jsonObj);
    }

    if (this.hasDiagnosis()) {
      setFhirBackboneElementListJson(this.getDiagnosis(), 'diagnosis', jsonObj);
    }

    if (this.hasProcedure()) {
      setFhirBackboneElementListJson(this.getProcedure(), 'procedure', jsonObj);
    }

    if (this.hasInsurance()) {
      setFhirBackboneElementListJson(this.getInsurance(), 'insurance', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.insurance`);
    }

    if (this.hasAccident()) {
      setFhirBackboneElementJson(this.getAccident(), 'accident', jsonObj);
    }

    if (this.hasItem()) {
      setFhirBackboneElementListJson(this.getItem(), 'item', jsonObj);
    }

    if (this.hasTotal()) {
      setFhirComplexJson(this.getTotal(), 'total', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * ClaimRelatedComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Prior or corollary claims
 * - **Definition:** Other claims which are related to this claim such as prior submissions or claims for related services or for the same event.
 * - **Comment:** For example,  for the original treatment and follow-up exams.
 * - **Requirements:** For workplace or other accidents it is common to relate separate claims arising from the same event.
 *
 * @category Data Models: Resource
 * @see [FHIR Claim](http://hl7.org/fhir/StructureDefinition/Claim)
 */
export class ClaimRelatedComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ClaimRelatedComponent` JSON to instantiate the ClaimRelatedComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimRelatedComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimRelatedComponent
   * @returns ClaimRelatedComponent data model or undefined for `ClaimRelatedComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimRelatedComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimRelatedComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimRelatedComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'claim';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setClaim(datatype);
    }

    fieldName = 'relationship';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRelationship(datatype);
    }

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReference(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Claim.related.claim Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to the related claim
   * - **Definition:** Reference to a related claim.
   * - **Requirements:** For workplace or other accidents it is common to relate separate claims arising from the same event.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Claim',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private claim?: Reference | undefined;

  /**
   * Claim.related.relationship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How the reference claim is related
   * - **Definition:** A code to convey how the claims are related.
   * - **Comment:** For example, prior claim or umbrella.
   * - **Requirements:** Some insurers need a declaration of the type of relationship.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relationship?: CodeableConcept | undefined;

  /**
   * Claim.related.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** File or case reference
   * - **Definition:** An alternate organizational reference to the case or file to which this particular claim pertains.
   * - **Comment:** For example, Property/Casualty insurer claim # or Workers Compensation case # .
   * - **Requirements:** In cases where an event-triggered claim is being submitted to an insurer which requires a reference number to be specified on all exchanges.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference?: Identifier | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `claim` property value as a Reference object; else an empty Reference object
   */
  public getClaim(): Reference {
    return this.claim ?? new Reference();
  }

  /**
   * Assigns the provided Claim object value to the `claim` property.
   *
   * @decorator `@ReferenceTargets('Claim.related.claim', ['Claim',])`
   *
   * @param value - the `claim` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.related.claim', [
    'Claim',
  ])
  public setClaim(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.claim = value;
    } else {
      this.claim = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `claim` property exists and has a value; `false` otherwise
   */
  public hasClaim(): boolean {
    return isDefined<Reference>(this.claim) && !this.claim.isEmpty();
  }

  /**
   * @returns the `relationship` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRelationship(): CodeableConcept {
    return this.relationship ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Relationship object value to the `relationship` property.
   *
   * @param value - the `relationship` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelationship(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.related.relationship; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.relationship = value;
    } else {
      this.relationship = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `relationship` property exists and has a value; `false` otherwise
   */
  public hasRelationship(): boolean {
    return isDefined<CodeableConcept>(this.relationship) && !this.relationship.isEmpty();
  }

  /**
   * @returns the `reference` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getReference(): Identifier {
    return this.reference ?? new Identifier();
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReference(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid Claim.related.reference; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.reference = value;
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefined<Identifier>(this.reference) && !this.reference.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Claim.related';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.claim,
      this.relationship,
      this.reference,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimRelatedComponent {
    const dest = new ClaimRelatedComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimRelatedComponent): void {
    super.copyValues(dest);
    dest.claim = this.claim?.copy();
    dest.relationship = this.relationship?.copy();
    dest.reference = this.reference?.copy();
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

    if (this.hasClaim()) {
      setFhirComplexJson(this.getClaim(), 'claim', jsonObj);
    }

    if (this.hasRelationship()) {
      setFhirComplexJson(this.getRelationship(), 'relationship', jsonObj);
    }

    if (this.hasReference()) {
      setFhirComplexJson(this.getReference(), 'reference', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ClaimPayeeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Recipient of benefits payable
 * - **Definition:** The party to be reimbursed for cost of the products and services according to the terms of the policy.
 * - **Comment:** Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
 * - **Requirements:** The provider needs to specify who they wish to be reimbursed and the claims processor needs express who they will reimburse.
 *
 * @category Data Models: Resource
 * @see [FHIR Claim](http://hl7.org/fhir/StructureDefinition/Claim)
 */
export class ClaimPayeeComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `ClaimPayeeComponent` JSON to instantiate the ClaimPayeeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimPayeeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimPayeeComponent
   * @returns ClaimPayeeComponent data model or undefined for `ClaimPayeeComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimPayeeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimPayeeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimPayeeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'party';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setParty(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Claim.payee.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category of recipient
   * - **Definition:** Type of Party to be reimbursed: subscriber, provider, other.
   * - **Requirements:** Need to know who should receive payment with the most common situations being the Provider (assignment of benefits) or the Subscriber.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * Claim.payee.party Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recipient reference
   * - **Definition:** Reference to the individual or organization to whom any payment will be made.
   * - **Comment:** Not required if the payee is \'subscriber\' or \'provider\'.
   * - **Requirements:** Need to provide demographics if the payee is not \'subscriber\' nor \'provider\'.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private party?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else null
   */
  public getType(): CodeableConcept | null {
    return this.type_;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Claim.payee.type is required`);
    const optErrMsg = `Invalid Claim.payee.type; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.type_ = value;
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefined<CodeableConcept>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `party` property value as a Reference object; else an empty Reference object
   */
  public getParty(): Reference {
    return this.party ?? new Reference();
  }

  /**
   * Assigns the provided Party object value to the `party` property.
   *
   * @decorator `@ReferenceTargets('Claim.payee.party', ['Practitioner','PractitionerRole','Organization','Patient','RelatedPerson',])`
   *
   * @param value - the `party` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.payee.party', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Patient',
  
    'RelatedPerson',
  ])
  public setParty(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.party = value;
    } else {
      this.party = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `party` property exists and has a value; `false` otherwise
   */
  public hasParty(): boolean {
    return isDefined<Reference>(this.party) && !this.party.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Claim.payee';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.party,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimPayeeComponent {
    const dest = new ClaimPayeeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimPayeeComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.party = this.party?.copy();
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

    if (this.hasType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getType()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.payee.type`);
    }

    if (this.hasParty()) {
      setFhirComplexJson(this.getParty(), 'party', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimCareTeamComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Members of the care team
 * - **Definition:** The members of the team who provided the products and services.
 * - **Requirements:** Common to identify the responsible and supporting practitioners.
 *
 * @category Data Models: Resource
 * @see [FHIR Claim](http://hl7.org/fhir/StructureDefinition/Claim)
 */
export class ClaimCareTeamComponent extends BackboneElement implements IBackboneElement {
  constructor(sequence: PositiveIntType | fhirPositiveInt | null = null, provider: Reference | null = null) {
    super();

    this.sequence = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(sequence)) {
      if (sequence instanceof PrimitiveType) {
        this.setSequenceElement(sequence);
      } else {
        this.setSequence(sequence);
      }
    }

    this.provider = null;
    if (isDefined<Reference>(provider)) {
      this.setProvider(provider);
    }
  }

  /**
   * Parse the provided `ClaimCareTeamComponent` JSON to instantiate the ClaimCareTeamComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimCareTeamComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimCareTeamComponent
   * @returns ClaimCareTeamComponent data model or undefined for `ClaimCareTeamComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimCareTeamComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimCareTeamComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimCareTeamComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'provider';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setProvider(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'responsible';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setResponsibleElement(datatype);
    }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    fieldName = 'qualification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQualification(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Claim.careTeam.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Order of care team
   * - **Definition:** A number to uniquely identify care team entries.
   * - **Requirements:** Necessary to maintain the order of the care team and provide a mechanism to link individuals to claim details.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence: PositiveIntType | null;

  /**
   * Claim.careTeam.provider Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Practitioner or organization
   * - **Definition:** Member of the team who provided the product or service.
   * - **Requirements:** Often a regulatory requirement to specify the responsible provider.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private provider: Reference | null;

  /**
   * Claim.careTeam.responsible Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicator of the lead practitioner
   * - **Definition:** The party who is billing and/or responsible for the claimed products or services.
   * - **Comment:** Responsible might not be required when there is only a single provider listed.
   * - **Requirements:** When multiple parties are present it is required to distinguish the lead or responsible individual.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private responsible?: BooleanType | undefined;

  /**
   * Claim.careTeam.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Function within the team
   * - **Definition:** The lead, assisting or supervising practitioner and their discipline if a multidisciplinary team.
   * - **Comment:** Role might not be required when there is only a single provider listed.
   * - **Requirements:** When multiple parties are present it is required to distinguish the roles performed by each member.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: CodeableConcept | undefined;

  /**
   * Claim.careTeam.qualification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Practitioner credential or specialization
   * - **Definition:** The qualification of the practitioner which is applicable for this service.
   * - **Requirements:** Need to specify which qualification a provider is delivering the product or service under.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private qualification?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else null
   */
  public getSequenceElement(): PositiveIntType | null {
    return this.sequence;
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType): this {
    assertIsDefined<PositiveIntType>(element, `Claim.careTeam.sequence is required`);
    const optErrMsg = `Invalid Claim.careTeam.sequence; Provided value is not an instance of PositiveIntType.`;
    assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
    this.sequence = element;
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.sequence) && !this.sequence.isEmpty();
  }

  /**
   * @returns the `sequence` property value as a fhirPositiveInt if defined; else null
   */
  public getSequence(): fhirPositiveInt | null {
    if (this.sequence?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.sequence.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `sequence` property.
   *
   * @param value - the `sequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequence(value: fhirPositiveInt): this {
    assertIsDefined<fhirPositiveInt>(value, `Claim.careTeam.sequence is required`);
    const optErrMsg = `Invalid Claim.careTeam.sequence (${String(value)})`;
    this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequence(): boolean {
    return this.hasSequenceElement();
  }

  /**
   * @returns the `provider` property value as a Reference object if defined; else null
   */
  public getProvider(): Reference | null {
    return this.provider;
  }

  /**
   * Assigns the provided Provider object value to the `provider` property.
   *
   * @decorator `@ReferenceTargets('Claim.careTeam.provider', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `provider` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.careTeam.provider', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setProvider(value: Reference): this {
    assertIsDefined<Reference>(value, `Claim.careTeam.provider is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.provider = value;
    return this;
  }

  /**
   * @returns `true` if the `provider` property exists and has a value; `false` otherwise
   */
  public hasProvider(): boolean {
    return isDefined<Reference>(this.provider) && !this.provider.isEmpty();
  }

  /**
   * @returns the `responsible` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getResponsibleElement(): BooleanType {
    return this.responsible ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `responsible` property.
   *
   * @param element - the `responsible` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResponsibleElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Claim.careTeam.responsible; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.responsible = element;
    } else {
      this.responsible = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `responsible` property exists and has a value; `false` otherwise
   */
  public hasResponsibleElement(): boolean {
    return isDefined<BooleanType>(this.responsible) && !this.responsible.isEmpty();
  }

  /**
   * @returns the `responsible` property value as a fhirBoolean if defined; else undefined
   */
  public getResponsible(): fhirBoolean | undefined {
    return this.responsible?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `responsible` property.
   *
   * @param value - the `responsible` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResponsible(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Claim.careTeam.responsible (${String(value)})`;
      this.responsible = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.responsible = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `responsible` property exists and has a value; `false` otherwise
   */
  public hasResponsible(): boolean {
    return this.hasResponsibleElement();
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
      const optErrMsg = `Invalid Claim.careTeam.role; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `qualification` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getQualification(): CodeableConcept {
    return this.qualification ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Qualification object value to the `qualification` property.
   *
   * @param value - the `qualification` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQualification(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.careTeam.qualification; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.qualification = value;
    } else {
      this.qualification = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `qualification` property exists and has a value; `false` otherwise
   */
  public hasQualification(): boolean {
    return isDefined<CodeableConcept>(this.qualification) && !this.qualification.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Claim.careTeam';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.provider,
      this.responsible,
      this.role,
      this.qualification,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimCareTeamComponent {
    const dest = new ClaimCareTeamComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimCareTeamComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence ? this.sequence.copy() : null;
    dest.provider = this.provider ? this.provider.copy() : null;
    dest.responsible = this.responsible?.copy();
    dest.role = this.role?.copy();
    dest.qualification = this.qualification?.copy();
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

    if (this.hasSequenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement()!, 'sequence', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.careTeam.sequence`);
    }

    if (this.hasProvider()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getProvider()!, 'provider', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.careTeam.provider`);
    }

    if (this.hasResponsibleElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getResponsibleElement(), 'responsible', jsonObj);
    }

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    if (this.hasQualification()) {
      setFhirComplexJson(this.getQualification(), 'qualification', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimSupportingInfoComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Supporting information
 * - **Definition:** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.
 * - **Comment:** Often there are multiple jurisdiction specific valuesets which are required.
 * - **Requirements:** Typically these information codes are required to support the services rendered or the adjudication of the services rendered.
 *
 * @category Data Models: Resource
 * @see [FHIR Claim](http://hl7.org/fhir/StructureDefinition/Claim)
 */
export class ClaimSupportingInfoComponent extends BackboneElement implements IBackboneElement {
  constructor(sequence: PositiveIntType | fhirPositiveInt | null = null, category: CodeableConcept | null = null) {
    super();

    this.sequence = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(sequence)) {
      if (sequence instanceof PrimitiveType) {
        this.setSequenceElement(sequence);
      } else {
        this.setSequence(sequence);
      }
    }

    this.category = null;
    if (isDefined<CodeableConcept>(category)) {
      this.setCategory(category);
    }
  }

  /**
   * Parse the provided `ClaimSupportingInfoComponent` JSON to instantiate the ClaimSupportingInfoComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimSupportingInfoComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimSupportingInfoComponent
   * @returns ClaimSupportingInfoComponent data model or undefined for `ClaimSupportingInfoComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimSupportingInfoComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimSupportingInfoComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimSupportingInfoComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = ClaimSupportingInfoComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ClaimSupportingInfoComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCategory(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'timing[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const timing: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setTiming(timing);

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setValue(value);

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReason(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Claim.supportingInfo.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information instance identifier
   * - **Definition:** A number to uniquely identify supporting information entries.
   * - **Requirements:** Necessary to maintain the order of the supporting information items and provide a mechanism to link to claim details.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence: PositiveIntType | null;

  /**
   * Claim.supportingInfo.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of the supplied information
   * - **Definition:** The general class of the information supplied: information; exception; accident, employment; onset, etc.
   * - **Comment:** This may contain a category for the local bill type codes.
   * - **Requirements:** Required to group or associate information items with common characteristics. For example: admission information or prior treatments.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category: CodeableConcept | null;

  /**
   * Claim.supportingInfo.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of information
   * - **Definition:** System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
   * - **Requirements:** Required to identify the kind of additional information.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept | undefined;

  /**
   * Claim.supportingInfo.timing[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Claim.supportingInfo.timing[x]', ['date','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When it occurred
   * - **Definition:** The date when or period to which this information refers.
   * - **FHIR Types:**
   *     'date',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Claim.supportingInfo.timing[x]',[
    'date',
    'Period',
  ])
  private timing?: IDataType | undefined;

  /**
   * Claim.supportingInfo.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Claim.supportingInfo.value[x]', ['boolean','string','Quantity','Attachment','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Data to be provided
   * - **Definition:** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   * - **Comment:** Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   * - **Requirements:** To convey the data content to be provided when the information is more than a simple code or period.
   * - **FHIR Types:**
   *     'boolean',
   *     'string',
   *     'Quantity',
   *     'Attachment',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Claim.supportingInfo.value[x]',[
    'boolean',
    'string',
    'Quantity',
    'Attachment',
    'Reference',
  ])
  private value?: IDataType | undefined;

  /**
   * Claim.supportingInfo.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Explanation for the information
   * - **Definition:** Provides the reason in the situation where a reason code is required in addition to the content.
   * - **Comment:** For example: the reason for the additional stay, or why a tooth is  missing.
   * - **Requirements:** Needed when the supporting information has both a date and amount/value and requires explanation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else null
   */
  public getSequenceElement(): PositiveIntType | null {
    return this.sequence;
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType): this {
    assertIsDefined<PositiveIntType>(element, `Claim.supportingInfo.sequence is required`);
    const optErrMsg = `Invalid Claim.supportingInfo.sequence; Provided value is not an instance of PositiveIntType.`;
    assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
    this.sequence = element;
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.sequence) && !this.sequence.isEmpty();
  }

  /**
   * @returns the `sequence` property value as a fhirPositiveInt if defined; else null
   */
  public getSequence(): fhirPositiveInt | null {
    if (this.sequence?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.sequence.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `sequence` property.
   *
   * @param value - the `sequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequence(value: fhirPositiveInt): this {
    assertIsDefined<fhirPositiveInt>(value, `Claim.supportingInfo.sequence is required`);
    const optErrMsg = `Invalid Claim.supportingInfo.sequence (${String(value)})`;
    this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequence(): boolean {
    return this.hasSequenceElement();
  }

  /**
   * @returns the `category` property value as a CodeableConcept object if defined; else null
   */
  public getCategory(): CodeableConcept | null {
    return this.category;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Claim.supportingInfo.category is required`);
    const optErrMsg = `Invalid Claim.supportingInfo.category; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.category = value;
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefined<CodeableConcept>(this.category) && !this.category.isEmpty();
  }

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Code object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.supportingInfo.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `timing` property value as a DataType object if defined; else undefined
   */
  public getTiming(): IDataType | undefined {
    return this.timing;
  }

  /**
   * Assigns the provided DataType object value to the `timing` property.
   *
   * @decorator `@ChoiceDataTypes('Claim.supportingInfo.timing[x]')`
   *
   * @param value - the `timing` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Claim.supportingInfo.timing[x]')
  public setTiming(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.timing = value;
    } else {
      this.timing = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timing` property exists and has a value; `false` otherwise
   */
  public hasTiming(): boolean {
    return isDefined<IDataType>(this.timing) && !this.timing.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `timing` property value as a DateType object if defined; else undefined
   */
  public getTimingDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.supportingInfo.timing[x]: Expected DateType but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a DateType and has a value; `false` otherwise
   */
  public hasTimingDateType(): boolean {
    return this.hasTiming() && this.timing instanceof DateType;
  }

  /**
   * @returns the `timing` property value as a Period object if defined; else undefined
   */
  public getTimingPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.supportingInfo.timing[x]: Expected Period but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Period and has a value; `false` otherwise
   */
  public hasTimingPeriod(): boolean {
    return this.hasTiming() && this.timing instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('Claim.supportingInfo.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Claim.supportingInfo.value[x]')
  public setValue(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.value = value;
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefined<IDataType>(this.value) && !this.value.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `value` property value as a BooleanType object if defined; else undefined
   */
  public getValueBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.supportingInfo.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && this.value instanceof BooleanType;
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else undefined
   */
  public getValueStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.supportingInfo.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && this.value instanceof StringType;
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else undefined
   */
  public getValueQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.supportingInfo.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else undefined
   */
  public getValueAttachment(): Attachment | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.supportingInfo.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && this.value instanceof Attachment;
  }

  /**
   * @returns the `value` property value as a Reference object if defined; else undefined
   */
  public getValueReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.supportingInfo.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Reference and has a value; `false` otherwise
   */
  public hasValueReference(): boolean {
    return this.hasValue() && this.value instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `reason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getReason(): CodeableConcept {
    return this.reason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Reason object value to the `reason` property.
   *
   * @param value - the `reason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.supportingInfo.reason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefined<CodeableConcept>(this.reason) && !this.reason.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Claim.supportingInfo';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.category,
      this.code,
      this.timing,
      this.value,
      this.reason,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimSupportingInfoComponent {
    const dest = new ClaimSupportingInfoComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimSupportingInfoComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence ? this.sequence.copy() : null;
    dest.category = this.category ? this.category.copy() : null;
    dest.code = this.code?.copy();
    dest.timing = this.timing?.copy() as IDataType;
    dest.value = this.value?.copy() as IDataType;
    dest.reason = this.reason?.copy();
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

    if (this.hasSequenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement()!, 'sequence', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.supportingInfo.sequence`);
    }

    if (this.hasCategory()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCategory()!, 'category', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.supportingInfo.category`);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasTiming()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTiming()!, 'timing', jsonObj);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexJson(this.getReason(), 'reason', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimDiagnosisComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Pertinent diagnosis information
 * - **Definition:** Information about diagnoses relevant to the claim items.
 * - **Requirements:** Required for the adjudication by provided context for the services and product listed.
 *
 * @category Data Models: Resource
 * @see [FHIR Claim](http://hl7.org/fhir/StructureDefinition/Claim)
 */
export class ClaimDiagnosisComponent extends BackboneElement implements IBackboneElement {
  constructor(sequence: PositiveIntType | fhirPositiveInt | null = null, diagnosis: IDataType | null = null) {
    super();

    this.sequence = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(sequence)) {
      if (sequence instanceof PrimitiveType) {
        this.setSequenceElement(sequence);
      } else {
        this.setSequence(sequence);
      }
    }

    this.diagnosis = null;
    if (isDefined<IDataType>(diagnosis)) {
      this.setDiagnosis(diagnosis);
    }

  }

  /**
   * Parse the provided `ClaimDiagnosisComponent` JSON to instantiate the ClaimDiagnosisComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimDiagnosisComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimDiagnosisComponent
   * @returns ClaimDiagnosisComponent data model or undefined for `ClaimDiagnosisComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimDiagnosisComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimDiagnosisComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimDiagnosisComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = ClaimDiagnosisComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ClaimDiagnosisComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'diagnosis[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const diagnosis: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (diagnosis === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setDiagnosis(diagnosis);
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

    fieldName = 'onAdmission';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOnAdmission(datatype);
    }

    fieldName = 'packageCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPackageCode(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Claim.diagnosis.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Diagnosis instance identifier
   * - **Definition:** A number to uniquely identify diagnosis entries.
   * - **Comment:** Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
   * - **Requirements:** Necessary to maintain the order of the diagnosis items and provide a mechanism to link to claim details.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence: PositiveIntType | null;

  /**
   * Claim.diagnosis.diagnosis[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Claim.diagnosis.diagnosis[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Nature of illness or problem
   * - **Definition:** The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   * - **Requirements:** Provides health context for the evaluation of the products and/or services.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Claim.diagnosis.diagnosis[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private diagnosis: IDataType | null;

  /**
   * Claim.diagnosis.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Timing or nature of the diagnosis
   * - **Definition:** When the condition was observed or the relative ranking.
   * - **Comment:** For example: admitting, primary, secondary, discharge.
   * - **Requirements:** Often required to capture a particular diagnosis, for example: primary or discharge.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * Claim.diagnosis.onAdmission Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Present on admission
   * - **Definition:** Indication of whether the diagnosis was present on admission to a facility.
   * - **Requirements:** Many systems need to understand for adjudication if the diagnosis was present a time of admission.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private onAdmission?: CodeableConcept | undefined;

  /**
   * Claim.diagnosis.packageCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Package billing code
   * - **Definition:** A package billing code or bundle code used to group products and services to a particular health condition (such as heart attack) which is based on a predetermined grouping code system.
   * - **Comment:** For example DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardial Infarction and a DRG for HeartAttack would be assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
   * - **Requirements:** Required to relate the current  diagnosis to a package billing code that is then referenced on the individual claim items which are specific to the health condition covered by the package code.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private packageCode?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else null
   */
  public getSequenceElement(): PositiveIntType | null {
    return this.sequence;
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType): this {
    assertIsDefined<PositiveIntType>(element, `Claim.diagnosis.sequence is required`);
    const optErrMsg = `Invalid Claim.diagnosis.sequence; Provided value is not an instance of PositiveIntType.`;
    assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
    this.sequence = element;
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.sequence) && !this.sequence.isEmpty();
  }

  /**
   * @returns the `sequence` property value as a fhirPositiveInt if defined; else null
   */
  public getSequence(): fhirPositiveInt | null {
    if (this.sequence?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.sequence.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `sequence` property.
   *
   * @param value - the `sequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequence(value: fhirPositiveInt): this {
    assertIsDefined<fhirPositiveInt>(value, `Claim.diagnosis.sequence is required`);
    const optErrMsg = `Invalid Claim.diagnosis.sequence (${String(value)})`;
    this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequence(): boolean {
    return this.hasSequenceElement();
  }

  /**
   * @returns the `diagnosis` property value as a DataType object; else null
   */
  public getDiagnosis(): IDataType | null {
    return this.diagnosis;
  }

  /**
   * Assigns the provided DataType object value to the `diagnosis` property.
   *
   * @decorator `@ChoiceDataTypes('Claim.diagnosis.diagnosis[x]')`
   *
   * @param value - the `diagnosis` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Claim.diagnosis.diagnosis[x]')
  public setDiagnosis(value: IDataType): this {
    assertIsDefined<IDataType>(value, `Claim.diagnosis.diagnosis[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.diagnosis = value;
    return this;
  }

  /**
   * @returns `true` if the `diagnosis` property exists and has a value; `false` otherwise
   */
  public hasDiagnosis(): boolean {
    return isDefined<IDataType>(this.diagnosis) && !this.diagnosis.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `diagnosis` property value as a CodeableConcept object if defined; else null
   */
  public getDiagnosisCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.diagnosis)) {
      return null;
    }
    if (!(this.diagnosis instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.diagnosis.diagnosis[x]: Expected CodeableConcept but encountered ${this.diagnosis.fhirType()}`,
      );
    }
    return this.diagnosis;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasDiagnosisCodeableConcept(): boolean {
    return this.hasDiagnosis() && this.diagnosis instanceof CodeableConcept;
  }

  /**
   * @returns the `diagnosis` property value as a Reference object if defined; else null
   */
  public getDiagnosisReference(): Reference | null {
    if (!isDefined<IDataType>(this.diagnosis)) {
      return null;
    }
    if (!(this.diagnosis instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.diagnosis.diagnosis[x]: Expected Reference but encountered ${this.diagnosis.fhirType()}`,
      );
    }
    return this.diagnosis;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasDiagnosisReference(): boolean {
    return this.hasDiagnosis() && this.diagnosis instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid Claim.diagnosis.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Claim.diagnosis.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `onAdmission` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOnAdmission(): CodeableConcept {
    return this.onAdmission ?? new CodeableConcept();
  }

  /**
   * Assigns the provided OnAdmission object value to the `onAdmission` property.
   *
   * @param value - the `onAdmission` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOnAdmission(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.diagnosis.onAdmission; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.onAdmission = value;
    } else {
      this.onAdmission = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onAdmission` property exists and has a value; `false` otherwise
   */
  public hasOnAdmission(): boolean {
    return isDefined<CodeableConcept>(this.onAdmission) && !this.onAdmission.isEmpty();
  }

  /**
   * @returns the `packageCode` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPackageCode(): CodeableConcept {
    return this.packageCode ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PackageCode object value to the `packageCode` property.
   *
   * @param value - the `packageCode` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackageCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.diagnosis.packageCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.packageCode = value;
    } else {
      this.packageCode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `packageCode` property exists and has a value; `false` otherwise
   */
  public hasPackageCode(): boolean {
    return isDefined<CodeableConcept>(this.packageCode) && !this.packageCode.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Claim.diagnosis';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.diagnosis,
      this.type_,
      this.onAdmission,
      this.packageCode,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimDiagnosisComponent {
    const dest = new ClaimDiagnosisComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimDiagnosisComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence ? this.sequence.copy() : null;
    dest.diagnosis = this.diagnosis ? this.diagnosis.copy() as IDataType : null;
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    dest.onAdmission = this.onAdmission?.copy();
    dest.packageCode = this.packageCode?.copy();
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

    if (this.hasSequenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement()!, 'sequence', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.diagnosis.sequence`);
    }

    if (this.hasDiagnosis()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDiagnosis()!, 'diagnosis', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.diagnosis.diagnosis[x]`);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasOnAdmission()) {
      setFhirComplexJson(this.getOnAdmission(), 'onAdmission', jsonObj);
    }

    if (this.hasPackageCode()) {
      setFhirComplexJson(this.getPackageCode(), 'packageCode', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimProcedureComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Clinical procedures performed
 * - **Definition:** Procedures performed on the patient relevant to the billing items with the claim.
 * - **Requirements:** The specific clinical invention are sometimes required to be provided to justify billing a greater than customary amount for a service.
 *
 * @category Data Models: Resource
 * @see [FHIR Claim](http://hl7.org/fhir/StructureDefinition/Claim)
 */
export class ClaimProcedureComponent extends BackboneElement implements IBackboneElement {
  constructor(sequence: PositiveIntType | fhirPositiveInt | null = null, procedure: IDataType | null = null) {
    super();

    this.sequence = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(sequence)) {
      if (sequence instanceof PrimitiveType) {
        this.setSequenceElement(sequence);
      } else {
        this.setSequence(sequence);
      }
    }

    this.procedure = null;
    if (isDefined<IDataType>(procedure)) {
      this.setProcedure(procedure);
    }

  }

  /**
   * Parse the provided `ClaimProcedureComponent` JSON to instantiate the ClaimProcedureComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimProcedureComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimProcedureComponent
   * @returns ClaimProcedureComponent data model or undefined for `ClaimProcedureComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimProcedureComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimProcedureComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimProcedureComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ClaimProcedureComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ClaimProcedureComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'procedure[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const procedure: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (procedure === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setProcedure(procedure);
    }

    fieldName = 'udi';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addUdi(datatype);
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
   * Claim.procedure.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Procedure instance identifier
   * - **Definition:** A number to uniquely identify procedure entries.
   * - **Requirements:** Necessary to provide a mechanism to link to claim details.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence: PositiveIntType | null;

  /**
   * Claim.procedure.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category of Procedure
   * - **Definition:** When the condition was observed or the relative ranking.
   * - **Comment:** For example: primary, secondary.
   * - **Requirements:** Often required to capture a particular diagnosis, for example: primary or discharge.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * Claim.procedure.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the procedure was performed
   * - **Definition:** Date and optionally time the procedure was performed.
   * - **Requirements:** Required for auditing purposes.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private date?: DateTimeType | undefined;

  /**
   * Claim.procedure.procedure[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Claim.procedure.procedure[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific clinical procedure
   * - **Definition:** The code or reference to a Procedure resource which identifies the clinical intervention performed.
   * - **Requirements:** This identifies the actual clinical procedure.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Claim.procedure.procedure[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private procedure: IDataType | null;

  /**
   * Claim.procedure.udi Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique device identifier
   * - **Definition:** Unique Device Identifiers associated with this line item.
   * - **Requirements:** The UDI code allows the insurer to obtain device level information on the product supplied.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private udi?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else null
   */
  public getSequenceElement(): PositiveIntType | null {
    return this.sequence;
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType): this {
    assertIsDefined<PositiveIntType>(element, `Claim.procedure.sequence is required`);
    const optErrMsg = `Invalid Claim.procedure.sequence; Provided value is not an instance of PositiveIntType.`;
    assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
    this.sequence = element;
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.sequence) && !this.sequence.isEmpty();
  }

  /**
   * @returns the `sequence` property value as a fhirPositiveInt if defined; else null
   */
  public getSequence(): fhirPositiveInt | null {
    if (this.sequence?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.sequence.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `sequence` property.
   *
   * @param value - the `sequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequence(value: fhirPositiveInt): this {
    assertIsDefined<fhirPositiveInt>(value, `Claim.procedure.sequence is required`);
    const optErrMsg = `Invalid Claim.procedure.sequence (${String(value)})`;
    this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequence(): boolean {
    return this.hasSequenceElement();
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
      const optErrMsg = `Invalid Claim.procedure.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Claim.procedure.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `date` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateElement(): DateTimeType {
    return this.date ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Claim.procedure.date; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.date = element;
    } else {
      this.date = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDateElement(): boolean {
    return isDefined<DateTimeType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDateTime if defined; else undefined
   */
  public getDate(): fhirDateTime | undefined {
    return this.date?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Claim.procedure.date (${String(value)})`;
      this.date = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.date = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDate(): boolean {
    return this.hasDateElement();
  }

  /**
   * @returns the `procedure` property value as a DataType object; else null
   */
  public getProcedure(): IDataType | null {
    return this.procedure;
  }

  /**
   * Assigns the provided DataType object value to the `procedure` property.
   *
   * @decorator `@ChoiceDataTypes('Claim.procedure.procedure[x]')`
   *
   * @param value - the `procedure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Claim.procedure.procedure[x]')
  public setProcedure(value: IDataType): this {
    assertIsDefined<IDataType>(value, `Claim.procedure.procedure[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.procedure = value;
    return this;
  }

  /**
   * @returns `true` if the `procedure` property exists and has a value; `false` otherwise
   */
  public hasProcedure(): boolean {
    return isDefined<IDataType>(this.procedure) && !this.procedure.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `procedure` property value as a CodeableConcept object if defined; else null
   */
  public getProcedureCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.procedure)) {
      return null;
    }
    if (!(this.procedure instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.procedure.procedure[x]: Expected CodeableConcept but encountered ${this.procedure.fhirType()}`,
      );
    }
    return this.procedure;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasProcedureCodeableConcept(): boolean {
    return this.hasProcedure() && this.procedure instanceof CodeableConcept;
  }

  /**
   * @returns the `procedure` property value as a Reference object if defined; else null
   */
  public getProcedureReference(): Reference | null {
    if (!isDefined<IDataType>(this.procedure)) {
      return null;
    }
    if (!(this.procedure instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.procedure.procedure[x]: Expected Reference but encountered ${this.procedure.fhirType()}`,
      );
    }
    return this.procedure;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasProcedureReference(): boolean {
    return this.hasProcedure() && this.procedure instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `udi` property value as a Reference array
   */
  public getUdi(): Reference[] {
    return this.udi ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `udi` property.
   *
   * @decorator `@ReferenceTargets('Claim.procedure.udi', ['Device',])`
   *
   * @param value - the `udi` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.procedure.udi', [
    'Device',
  ])
  public setUdi(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.udi = value;
    } else {
      this.udi = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `udi` array property.
   *
   * @decorator `@ReferenceTargets('Claim.procedure.udi', ['Device',])`
   *
   * @param value - the `udi` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.procedure.udi', [
    'Device',
  ])
  public addUdi(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initUdi();
      this.udi?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `udi` property exists and has a value; `false` otherwise
   */
  public hasUdi(): boolean {
    return isDefinedList<Reference>(this.udi) && this.udi.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `udi` property
   */
  private initUdi(): void {
    if (!this.hasUdi()) {
      this.udi = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Claim.procedure';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.type_,
      this.date,
      this.procedure,
      this.udi,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimProcedureComponent {
    const dest = new ClaimProcedureComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimProcedureComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence ? this.sequence.copy() : null;
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    dest.date = this.date?.copy();
    dest.procedure = this.procedure ? this.procedure.copy() as IDataType : null;
    const udiList = copyListValues<Reference>(this.udi);
    dest.udi = udiList.length === 0 ? undefined : udiList;
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

    if (this.hasSequenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement()!, 'sequence', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.procedure.sequence`);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasProcedure()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getProcedure()!, 'procedure', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.procedure.procedure[x]`);
    }

    if (this.hasUdi()) {
      setFhirComplexListJson(this.getUdi(), 'udi', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimInsuranceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Patient insurance information
 * - **Definition:** Financial instruments for reimbursement for the health care products and services specified on the claim.
 * - **Comment:** All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local \'coordination of benefit\' rules. One coverage (and only one) with \'focal=true\' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where \'Coverage.subrogation=false\', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 * - **Requirements:** At least one insurer is required for a claim to be a claim.
 *
 * @category Data Models: Resource
 * @see [FHIR Claim](http://hl7.org/fhir/StructureDefinition/Claim)
 */
export class ClaimInsuranceComponent extends BackboneElement implements IBackboneElement {
  constructor(sequence: PositiveIntType | fhirPositiveInt | null = null, focal: BooleanType | fhirBoolean | null = null, coverage: Reference | null = null) {
    super();

    this.sequence = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(sequence)) {
      if (sequence instanceof PrimitiveType) {
        this.setSequenceElement(sequence);
      } else {
        this.setSequence(sequence);
      }
    }

    this.focal = null;
    if (isDefined<BooleanType | fhirBoolean>(focal)) {
      if (focal instanceof PrimitiveType) {
        this.setFocalElement(focal);
      } else {
        this.setFocal(focal);
      }
    }

    this.coverage = null;
    if (isDefined<Reference>(coverage)) {
      this.setCoverage(coverage);
    }
  }

  /**
   * Parse the provided `ClaimInsuranceComponent` JSON to instantiate the ClaimInsuranceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimInsuranceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimInsuranceComponent
   * @returns ClaimInsuranceComponent data model or undefined for `ClaimInsuranceComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimInsuranceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimInsuranceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimInsuranceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'focal';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setFocalElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'coverage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCoverage(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'businessArrangement';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setBusinessArrangementElement(datatype);
    }

    fieldName = 'preAuthRef';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addPreAuthRefElement(datatype);
        }
      });
    }

    fieldName = 'claimResponse';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setClaimResponse(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Claim.insurance.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Insurance instance identifier
   * - **Definition:** A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
   * - **Requirements:** To maintain order of the coverages.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sequence: PositiveIntType | null;

  /**
   * Claim.insurance.focal Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coverage to be used for adjudication
   * - **Definition:** A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true.
   * - **Comment:** A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse\'s policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
   * - **Requirements:** To identify which coverage in the list is being used to adjudicate this claim.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private focal: BooleanType | null;

  /**
   * Claim.insurance.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pre-assigned Claim number
   * - **Definition:** The business identifier to be used when the claim is sent for adjudication against this insurance policy.
   * - **Comment:** Only required in jurisdictions where insurers, rather than the provider, are required to send claims to  insurers that appear after them in the list. This element is not required when \'subrogation=true\'.
   * - **Requirements:** This will be the claim number should it be necessary to create this claim in the future. This is provided so that payors may forward claims to other payors in the Coordination of Benefit for adjudication rather than the provider being required to initiate each adjudication.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier | undefined;

  /**
   * Claim.insurance.coverage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Insurance information
   * - **Definition:** Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient\'s actual coverage within the insurer\'s information system.
   * - **Requirements:** Required to allow the adjudicator to locate the correct policy and history within their information system.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Coverage',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private coverage: Reference | null;

  /**
   * Claim.insurance.businessArrangement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional provider contract number
   * - **Definition:** A business agreement number established between the provider and the insurer for special business processing purposes.
   * - **Requirements:** Providers may have multiple business arrangements with a given insurer and must supply the specific contract number for adjudication.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private businessArrangement?: StringType | undefined;

  /**
   * Claim.insurance.preAuthRef Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Prior authorization reference number
   * - **Definition:** Reference numbers previously provided by the insurer to the provider to be quoted on subsequent claims containing services or products related to the prior authorization.
   * - **Comment:** This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
   * - **Requirements:** Providers must quote previously issued authorization reference numbers in order to obtain adjudication as previously advised on the Preauthorization.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preAuthRef?: StringType[] | undefined;

  /**
   * Claim.insurance.claimResponse Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Adjudication results
   * - **Definition:** The result of the adjudication of the line items for the Coverage specified in this insurance.
   * - **Comment:** Must not be specified when \'focal=true\' for this insurance.
   * - **Requirements:** An insurer need the adjudication results from prior insurers to determine the outstanding balance remaining by item for the items in the curent claim.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ClaimResponse',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private claimResponse?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else null
   */
  public getSequenceElement(): PositiveIntType | null {
    return this.sequence;
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType): this {
    assertIsDefined<PositiveIntType>(element, `Claim.insurance.sequence is required`);
    const optErrMsg = `Invalid Claim.insurance.sequence; Provided value is not an instance of PositiveIntType.`;
    assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
    this.sequence = element;
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.sequence) && !this.sequence.isEmpty();
  }

  /**
   * @returns the `sequence` property value as a fhirPositiveInt if defined; else null
   */
  public getSequence(): fhirPositiveInt | null {
    if (this.sequence?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.sequence.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `sequence` property.
   *
   * @param value - the `sequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequence(value: fhirPositiveInt): this {
    assertIsDefined<fhirPositiveInt>(value, `Claim.insurance.sequence is required`);
    const optErrMsg = `Invalid Claim.insurance.sequence (${String(value)})`;
    this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequence(): boolean {
    return this.hasSequenceElement();
  }

  /**
   * @returns the `focal` property value as a BooleanType object if defined; else null
   */
  public getFocalElement(): BooleanType | null {
    return this.focal;
  }

  /**
   * Assigns the provided PrimitiveType value to the `focal` property.
   *
   * @param element - the `focal` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFocalElement(element: BooleanType): this {
    assertIsDefined<BooleanType>(element, `Claim.insurance.focal is required`);
    const optErrMsg = `Invalid Claim.insurance.focal; Provided value is not an instance of BooleanType.`;
    assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
    this.focal = element;
    return this;
  }

  /**
   * @returns `true` if the `focal` property exists and has a value; `false` otherwise
   */
  public hasFocalElement(): boolean {
    return isDefined<BooleanType>(this.focal) && !this.focal.isEmpty();
  }

  /**
   * @returns the `focal` property value as a fhirBoolean if defined; else null
   */
  public getFocal(): fhirBoolean | null {
    if (this.focal?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.focal.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `focal` property.
   *
   * @param value - the `focal` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFocal(value: fhirBoolean): this {
    assertIsDefined<fhirBoolean>(value, `Claim.insurance.focal is required`);
    const optErrMsg = `Invalid Claim.insurance.focal (${String(value)})`;
    this.focal = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `focal` property exists and has a value; `false` otherwise
   */
  public hasFocal(): boolean {
    return this.hasFocalElement();
  }

  /**
   * @returns the `identifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getIdentifier(): Identifier {
    return this.identifier ?? new Identifier();
  }

  /**
   * Assigns the provided Identifier object value to the `identifier` property.
   *
   * @param value - the `identifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid Claim.insurance.identifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.identifier = value;
    } else {
      this.identifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identifier` property exists and has a value; `false` otherwise
   */
  public hasIdentifier(): boolean {
    return isDefined<Identifier>(this.identifier) && !this.identifier.isEmpty();
  }

  /**
   * @returns the `coverage` property value as a Reference object if defined; else null
   */
  public getCoverage(): Reference | null {
    return this.coverage;
  }

  /**
   * Assigns the provided Coverage object value to the `coverage` property.
   *
   * @decorator `@ReferenceTargets('Claim.insurance.coverage', ['Coverage',])`
   *
   * @param value - the `coverage` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.insurance.coverage', [
    'Coverage',
  ])
  public setCoverage(value: Reference): this {
    assertIsDefined<Reference>(value, `Claim.insurance.coverage is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.coverage = value;
    return this;
  }

  /**
   * @returns `true` if the `coverage` property exists and has a value; `false` otherwise
   */
  public hasCoverage(): boolean {
    return isDefined<Reference>(this.coverage) && !this.coverage.isEmpty();
  }

  /**
   * @returns the `businessArrangement` property value as a StringType object if defined; else an empty StringType object
   */
  public getBusinessArrangementElement(): StringType {
    return this.businessArrangement ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `businessArrangement` property.
   *
   * @param element - the `businessArrangement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBusinessArrangementElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Claim.insurance.businessArrangement; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.businessArrangement = element;
    } else {
      this.businessArrangement = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `businessArrangement` property exists and has a value; `false` otherwise
   */
  public hasBusinessArrangementElement(): boolean {
    return isDefined<StringType>(this.businessArrangement) && !this.businessArrangement.isEmpty();
  }

  /**
   * @returns the `businessArrangement` property value as a fhirString if defined; else undefined
   */
  public getBusinessArrangement(): fhirString | undefined {
    return this.businessArrangement?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `businessArrangement` property.
   *
   * @param value - the `businessArrangement` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBusinessArrangement(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Claim.insurance.businessArrangement (${String(value)})`;
      this.businessArrangement = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.businessArrangement = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `businessArrangement` property exists and has a value; `false` otherwise
   */
  public hasBusinessArrangement(): boolean {
    return this.hasBusinessArrangementElement();
  }

  /**
   * @returns the `preAuthRef` property value as a StringType array
   */
  public getPreAuthRefElement(): StringType[] {
    return this.preAuthRef ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `preAuthRef` property.
   *
   * @param element - the `preAuthRef` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreAuthRefElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid Claim.insurance.preAuthRef; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.preAuthRef = element;
    } else {
      this.preAuthRef = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `preAuthRef` array property.
   *
   * @param element - the `preAuthRef` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPreAuthRefElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Claim.insurance.preAuthRef; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initPreAuthRef();
      this.preAuthRef?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `preAuthRef` property exists and has a value; `false` otherwise
   */
  public hasPreAuthRefElement(): boolean {
    return isDefinedList<StringType>(this.preAuthRef) && this.preAuthRef.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `preAuthRef` property value as a fhirString array
   */
  public getPreAuthRef(): fhirString[] {
    this.initPreAuthRef();
    const preAuthRefValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.preAuthRef!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        preAuthRefValues.push(value);
      }
    }
    return preAuthRefValues;
  }

  /**
   * Assigns the provided primitive value array to the `preAuthRef` property.
   *
   * @param value - the `preAuthRef` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreAuthRef(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const preAuthRefElements = [] as StringType[];
      for (const preAuthRefValue of value) {
        const optErrMsg = `Invalid Claim.insurance.preAuthRef array item (${String(preAuthRefValue)})`;
        const element = new StringType(parseFhirPrimitiveData(preAuthRefValue, fhirStringSchema, optErrMsg));
        preAuthRefElements.push(element);
      }
      this.preAuthRef = preAuthRefElements;
    } else {
      this.preAuthRef = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `preAuthRef` array property.
   *
   * @param value - the `preAuthRef` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPreAuthRef(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Claim.insurance.preAuthRef array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initPreAuthRef();
      this.addPreAuthRefElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `preAuthRef` property exists and has a value; `false` otherwise
   */
  public hasPreAuthRef(): boolean {
    return this.hasPreAuthRefElement();
  }

  /**
   * Initialize the `preAuthRef` property
   */
  private initPreAuthRef(): void {
    if (!this.hasPreAuthRef()) {
      this.preAuthRef = [] as StringType[];
    }
  }

  /**
   * @returns the `claimResponse` property value as a Reference object; else an empty Reference object
   */
  public getClaimResponse(): Reference {
    return this.claimResponse ?? new Reference();
  }

  /**
   * Assigns the provided ClaimResponse object value to the `claimResponse` property.
   *
   * @decorator `@ReferenceTargets('Claim.insurance.claimResponse', ['ClaimResponse',])`
   *
   * @param value - the `claimResponse` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.insurance.claimResponse', [
    'ClaimResponse',
  ])
  public setClaimResponse(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.claimResponse = value;
    } else {
      this.claimResponse = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `claimResponse` property exists and has a value; `false` otherwise
   */
  public hasClaimResponse(): boolean {
    return isDefined<Reference>(this.claimResponse) && !this.claimResponse.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Claim.insurance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.focal,
      this.identifier,
      this.coverage,
      this.businessArrangement,
      this.preAuthRef,
      this.claimResponse,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimInsuranceComponent {
    const dest = new ClaimInsuranceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimInsuranceComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence ? this.sequence.copy() : null;
    dest.focal = this.focal ? this.focal.copy() : null;
    dest.identifier = this.identifier?.copy();
    dest.coverage = this.coverage ? this.coverage.copy() : null;
    dest.businessArrangement = this.businessArrangement?.copy();
    const preAuthRefList = copyListValues<StringType>(this.preAuthRef);
    dest.preAuthRef = preAuthRefList.length === 0 ? undefined : preAuthRefList;
    dest.claimResponse = this.claimResponse?.copy();
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

    if (this.hasSequenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement()!, 'sequence', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.insurance.sequence`);
    }

    if (this.hasFocalElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirBoolean>(this.getFocalElement()!, 'focal', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.insurance.focal`);
    }

    if (this.hasIdentifier()) {
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasCoverage()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCoverage()!, 'coverage', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.insurance.coverage`);
    }

    if (this.hasBusinessArrangementElement()) {
      setFhirPrimitiveJson<fhirString>(this.getBusinessArrangementElement(), 'businessArrangement', jsonObj);
    }

    if (this.hasPreAuthRef()) {
      setFhirPrimitiveListJson(this.getPreAuthRefElement(), 'preAuthRef', jsonObj);
    }

    if (this.hasClaimResponse()) {
      setFhirComplexJson(this.getClaimResponse(), 'claimResponse', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimAccidentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Details of the event
 * - **Definition:** Details of an accident which resulted in injuries which required the products and services listed in the claim.
 * - **Requirements:** When healthcare products and services are accident related, benefits may be payable under accident provisions of policies, such as automotive, etc before they are payable under normal health insurance.
 *
 * @category Data Models: Resource
 * @see [FHIR Claim](http://hl7.org/fhir/StructureDefinition/Claim)
 */
export class ClaimAccidentComponent extends BackboneElement implements IBackboneElement {
  constructor(date: DateType | fhirDate | null = null) {
    super();

    this.date = null;
    if (isDefined<DateType | fhirDate>(date)) {
      if (date instanceof PrimitiveType) {
        this.setDateElement(date);
      } else {
        this.setDate(date);
      }
    }
  }

  /**
   * Parse the provided `ClaimAccidentComponent` JSON to instantiate the ClaimAccidentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimAccidentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimAccidentComponent
   * @returns ClaimAccidentComponent data model or undefined for `ClaimAccidentComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimAccidentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimAccidentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimAccidentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = ClaimAccidentComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ClaimAccidentComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setDateElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'location[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const location: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setLocation(location);

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Claim.accident.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the incident occurred
   * - **Definition:** Date of an accident event  related to the products and services contained in the claim.
   * - **Comment:** The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
   * - **Requirements:** Required for audit purposes and adjudication.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private date: DateType | null;

  /**
   * Claim.accident.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The nature of the accident
   * - **Definition:** The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
   * - **Requirements:** Coverage may be dependant on the type of accident.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Claim.accident.location[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Claim.accident.location[x]', ['Address','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the event occurred
   * - **Definition:** The physical location of the accident event.
   * - **Requirements:** Required for audit purposes and determination of applicable insurance liability.
   * - **FHIR Types:**
   *     'Address',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Claim.accident.location[x]',[
    'Address',
    'Reference',
  ])
  private location?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `date` property value as a DateType object if defined; else null
   */
  public getDateElement(): DateType | null {
    return this.date;
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateType): this {
    assertIsDefined<DateType>(element, `Claim.accident.date is required`);
    const optErrMsg = `Invalid Claim.accident.date; Provided value is not an instance of DateType.`;
    assertFhirType<DateType>(element, DateType, optErrMsg);
    this.date = element;
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDateElement(): boolean {
    return isDefined<DateType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDate if defined; else null
   */
  public getDate(): fhirDate | null {
    if (this.date?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.date.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDate): this {
    assertIsDefined<fhirDate>(value, `Claim.accident.date is required`);
    const optErrMsg = `Invalid Claim.accident.date (${String(value)})`;
    this.date = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDate(): boolean {
    return this.hasDateElement();
  }

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getType(): CodeableConcept {
    return this.type_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.accident.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefined<CodeableConcept>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `location` property value as a DataType object if defined; else undefined
   */
  public getLocation(): IDataType | undefined {
    return this.location;
  }

  /**
   * Assigns the provided DataType object value to the `location` property.
   *
   * @decorator `@ChoiceDataTypes('Claim.accident.location[x]')`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Claim.accident.location[x]')
  public setLocation(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.location = value;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return isDefined<IDataType>(this.location) && !this.location.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `location` property value as a Address object if defined; else undefined
   */
  public getLocationAddress(): Address | undefined {
    if (!isDefined<IDataType | undefined>(this.location)) {
      return undefined;
    }
    if (!(this.location instanceof Address)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.accident.location[x]: Expected Address but encountered ${this.location.fhirType()}`,
      );
    }
    return this.location;
  }

  /**
   * @returns `true` if the `location` property exists as a Address and has a value; `false` otherwise
   */
  public hasLocationAddress(): boolean {
    return this.hasLocation() && this.location instanceof Address;
  }

  /**
   * @returns the `location` property value as a Reference object if defined; else undefined
   */
  public getLocationReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.location)) {
      return undefined;
    }
    if (!(this.location instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.accident.location[x]: Expected Reference but encountered ${this.location.fhirType()}`,
      );
    }
    return this.location;
  }

  /**
   * @returns `true` if the `location` property exists as a Reference and has a value; `false` otherwise
   */
  public hasLocationReference(): boolean {
    return this.hasLocation() && this.location instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Claim.accident';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.date,
      this.type_,
      this.location,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimAccidentComponent {
    const dest = new ClaimAccidentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimAccidentComponent): void {
    super.copyValues(dest);
    dest.date = this.date ? this.date.copy() : null;
    dest.type_ = this.type_?.copy();
    dest.location = this.location?.copy() as IDataType;
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

    if (this.hasDateElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirDate>(this.getDateElement()!, 'date', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.accident.date`);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasLocation()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getLocation()!, 'location', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Product or service provided
 * - **Definition:** A claim line. Either a simple  product or service or a \'group\' of details which can each be a simple items or groups of sub-details.
 * - **Requirements:** The items to be processed for adjudication.
 *
 * @category Data Models: Resource
 * @see [FHIR Claim](http://hl7.org/fhir/StructureDefinition/Claim)
 */
export class ClaimItemComponent extends BackboneElement implements IBackboneElement {
  constructor(sequence: PositiveIntType | fhirPositiveInt | null = null, productOrService: CodeableConcept | null = null) {
    super();

    this.sequence = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(sequence)) {
      if (sequence instanceof PrimitiveType) {
        this.setSequenceElement(sequence);
      } else {
        this.setSequence(sequence);
      }
    }

    this.productOrService = null;
    if (isDefined<CodeableConcept>(productOrService)) {
      this.setProductOrService(productOrService);
    }
  }

  /**
   * Parse the provided `ClaimItemComponent` JSON to instantiate the ClaimItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimItemComponent
   * @returns ClaimItemComponent data model or undefined for `ClaimItemComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ClaimItemComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ClaimItemComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'careTeamSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addCareTeamSequenceElement(datatype);
        }
      });
    }

    fieldName = 'diagnosisSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addDiagnosisSequenceElement(datatype);
        }
      });
    }

    fieldName = 'procedureSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addProcedureSequenceElement(datatype);
        }
      });
    }

    fieldName = 'informationSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addInformationSequenceElement(datatype);
        }
      });
    }

    fieldName = 'revenue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRevenue(datatype);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCategory(datatype);
    }

    fieldName = 'productOrService';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setProductOrService(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'modifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addModifier(datatype);
        }
      });
    }

    fieldName = 'programCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addProgramCode(datatype);
        }
      });
    }

    fieldName = 'serviced[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const serviced: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setServiced(serviced);

    fieldName = 'location[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const location: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setLocation(location);

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'unitPrice';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnitPrice(datatype);
    }

    fieldName = 'factor';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setFactorElement(datatype);
    }

    fieldName = 'net';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNet(datatype);
    }

    fieldName = 'udi';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addUdi(datatype);
        }
      });
  }

    fieldName = 'bodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBodySite(datatype);
    }

    fieldName = 'subSite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSubSite(datatype);
        }
      });
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEncounter(datatype);
        }
      });
  }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimItemDetailComponent | undefined = ClaimItemDetailComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDetail(component);
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
   * Claim.item.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Item instance identifier
   * - **Definition:** A number to uniquely identify item entries.
   * - **Requirements:** Necessary to provide a mechanism to link to items from within the claim and within the adjudication details of the ClaimResponse.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence: PositiveIntType | null;

  /**
   * Claim.item.careTeamSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable careTeam members
   * - **Definition:** CareTeam members related to this service or product.
   * - **Requirements:** Need to identify the individuals and their roles in the provision of the product or service.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private careTeamSequence?: PositiveIntType[] | undefined;

  /**
   * Claim.item.diagnosisSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable diagnoses
   * - **Definition:** Diagnosis applicable for this service or product.
   * - **Requirements:** Need to related the product or service to the associated diagnoses.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private diagnosisSequence?: PositiveIntType[] | undefined;

  /**
   * Claim.item.procedureSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable procedures
   * - **Definition:** Procedures applicable for this service or product.
   * - **Requirements:** Need to provide any listed specific procedures to support the product or service being claimed.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private procedureSequence?: PositiveIntType[] | undefined;

  /**
   * Claim.item.informationSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable exception and supporting information
   * - **Definition:** Exceptions, special conditions and supporting information applicable for this service or product.
   * - **Requirements:** Need to reference the supporting information items that relate directly to this product or service.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private informationSequence?: PositiveIntType[] | undefined;

  /**
   * Claim.item.revenue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Revenue or cost center code
   * - **Definition:** The type of revenue or cost center providing the product and/or service.
   * - **Requirements:** Needed in the processing of institutional claims.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private revenue?: CodeableConcept | undefined;

  /**
   * Claim.item.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefit classification
   * - **Definition:** Code to identify the general type of benefits under which products and services are provided.
   * - **Comment:** Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   * - **Requirements:** Needed in the processing of institutional claims as this allows the insurer to determine whether a facial X-Ray is for dental, orthopedic, or facial surgery purposes.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept | undefined;

  /**
   * Claim.item.productOrService Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Billing, service, product, or drug code
   * - **Definition:** When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.
   * - **Comment:** If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. \'glasses\' or \'compound\'.
   * - **Requirements:** Necessary to state what was provided or done.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productOrService: CodeableConcept | null;

  /**
   * Claim.item.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product or service billing modifiers
   * - **Definition:** Item typification or modifiers codes to convey additional context for the product or service.
   * - **Comment:** For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
   * - **Requirements:** To support inclusion of the item for adjudication or to charge an elevated fee.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modifier?: CodeableConcept[] | undefined;

  /**
   * Claim.item.programCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Program the product or service is provided under
   * - **Definition:** Identifies the program under which this may be recovered.
   * - **Comment:** For example: Neonatal program, child dental program or drug users recovery program.
   * - **Requirements:** Commonly used in in the identification of publicly provided program focused on population segments or disease classifications.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private programCode?: CodeableConcept[] | undefined;

  /**
   * Claim.item.serviced[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Claim.item.serviced[x]', ['date','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date or dates of service or product delivery
   * - **Definition:** The date or dates when the service or product was supplied, performed or completed.
   * - **Requirements:** Needed to determine whether the  service or product was provided during the term of the insurance coverage.
   * - **FHIR Types:**
   *     'date',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Claim.item.serviced[x]',[
    'date',
    'Period',
  ])
  private serviced?: IDataType | undefined;

  /**
   * Claim.item.location[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Claim.item.location[x]', ['CodeableConcept','Address','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Place of service or where product was supplied
   * - **Definition:** Where the product or service was provided.
   * - **Requirements:** The location can alter whether the item was acceptable for insurance purposes or impact the determination of the benefit amount.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Address',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Claim.item.location[x]',[
    'CodeableConcept',
    'Address',
    'Reference',
  ])
  private location?: IDataType | undefined;

  /**
   * Claim.item.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Count of products or services
   * - **Definition:** The number of repetitions of a service or product.
   * - **Requirements:** Required when the product or service code does not convey the quantity provided.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * Claim.item.unitPrice Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fee, charge or cost per item
   * - **Definition:** If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
   * - **Requirements:** The amount charged to the patient by the provider for a single unit.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private unitPrice?: Money | undefined;

  /**
   * Claim.item.factor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Price scaling factor
   * - **Definition:** A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
   * - **Comment:** To show a 10% senior\'s discount, the value entered is: 0.90 (1.00 - 0.10).
   * - **Requirements:** When discounts are provided to a patient (example: Senior\'s discount) then this must be documented for adjudication.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private factor?: DecimalType | undefined;

  /**
   * Claim.item.net Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total item cost
   * - **Definition:** The quantity times the unit price for an additional service or product or charge.
   * - **Comment:** For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
   * - **Requirements:** Provides the total amount claimed  for the group (if a grouper) or the line item.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private net?: Money | undefined;

  /**
   * Claim.item.udi Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique device identifier
   * - **Definition:** Unique Device Identifiers associated with this line item.
   * - **Requirements:** The UDI code allows the insurer to obtain device level information on the product supplied.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private udi?: Reference[] | undefined;

  /**
   * Claim.item.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Anatomical location
   * - **Definition:** Physical service site on the patient (limb, tooth, etc.).
   * - **Comment:** For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
   * - **Requirements:** Allows insurer to validate specific procedures.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private bodySite?: CodeableConcept | undefined;

  /**
   * Claim.item.subSite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Anatomical sub-location
   * - **Definition:** A region or surface of the bodySite, e.g. limb region or tooth surface(s).
   * - **Requirements:** Allows insurer to validate specific procedures.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subSite?: CodeableConcept[] | undefined;

  /**
   * Claim.item.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounters related to this billed item
   * - **Definition:** The Encounters during which this Claim was created or to which the creation of this record is tightly associated.
   * - **Comment:** This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   * - **Requirements:** Used in some jurisdictions to link clinical events to claim items.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private encounter?: Reference[] | undefined;

  /**
   * Claim.item.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product or service provided
   * - **Definition:** A claim detail line. Either a simple (a product or service) or a \'group\' of sub-details which are simple items.
   * - **Requirements:** The items to be processed for adjudication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: ClaimItemDetailComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else null
   */
  public getSequenceElement(): PositiveIntType | null {
    return this.sequence;
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType): this {
    assertIsDefined<PositiveIntType>(element, `Claim.item.sequence is required`);
    const optErrMsg = `Invalid Claim.item.sequence; Provided value is not an instance of PositiveIntType.`;
    assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
    this.sequence = element;
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.sequence) && !this.sequence.isEmpty();
  }

  /**
   * @returns the `sequence` property value as a fhirPositiveInt if defined; else null
   */
  public getSequence(): fhirPositiveInt | null {
    if (this.sequence?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.sequence.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `sequence` property.
   *
   * @param value - the `sequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequence(value: fhirPositiveInt): this {
    assertIsDefined<fhirPositiveInt>(value, `Claim.item.sequence is required`);
    const optErrMsg = `Invalid Claim.item.sequence (${String(value)})`;
    this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequence(): boolean {
    return this.hasSequenceElement();
  }

  /**
   * @returns the `careTeamSequence` property value as a PositiveIntType array
   */
  public getCareTeamSequenceElement(): PositiveIntType[] {
    return this.careTeamSequence ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `careTeamSequence` property.
   *
   * @param element - the `careTeamSequence` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCareTeamSequenceElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Claim.item.careTeamSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.careTeamSequence = element;
    } else {
      this.careTeamSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `careTeamSequence` array property.
   *
   * @param element - the `careTeamSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addCareTeamSequenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Claim.item.careTeamSequence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initCareTeamSequence();
      this.careTeamSequence?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `careTeamSequence` property exists and has a value; `false` otherwise
   */
  public hasCareTeamSequenceElement(): boolean {
    return isDefinedList<PositiveIntType>(this.careTeamSequence) && this.careTeamSequence.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `careTeamSequence` property value as a fhirPositiveInt array
   */
  public getCareTeamSequence(): fhirPositiveInt[] {
    this.initCareTeamSequence();
    const careTeamSequenceValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.careTeamSequence!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        careTeamSequenceValues.push(value);
      }
    }
    return careTeamSequenceValues;
  }

  /**
   * Assigns the provided primitive value array to the `careTeamSequence` property.
   *
   * @param value - the `careTeamSequence` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCareTeamSequence(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const careTeamSequenceElements = [] as PositiveIntType[];
      for (const careTeamSequenceValue of value) {
        const optErrMsg = `Invalid Claim.item.careTeamSequence array item (${String(careTeamSequenceValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(careTeamSequenceValue, fhirPositiveIntSchema, optErrMsg));
        careTeamSequenceElements.push(element);
      }
      this.careTeamSequence = careTeamSequenceElements;
    } else {
      this.careTeamSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `careTeamSequence` array property.
   *
   * @param value - the `careTeamSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addCareTeamSequence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Claim.item.careTeamSequence array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initCareTeamSequence();
      this.addCareTeamSequenceElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `careTeamSequence` property exists and has a value; `false` otherwise
   */
  public hasCareTeamSequence(): boolean {
    return this.hasCareTeamSequenceElement();
  }

  /**
   * Initialize the `careTeamSequence` property
   */
  private initCareTeamSequence(): void {
    if (!this.hasCareTeamSequence()) {
      this.careTeamSequence = [] as PositiveIntType[];
    }
  }

  /**
   * @returns the `diagnosisSequence` property value as a PositiveIntType array
   */
  public getDiagnosisSequenceElement(): PositiveIntType[] {
    return this.diagnosisSequence ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `diagnosisSequence` property.
   *
   * @param element - the `diagnosisSequence` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDiagnosisSequenceElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Claim.item.diagnosisSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.diagnosisSequence = element;
    } else {
      this.diagnosisSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `diagnosisSequence` array property.
   *
   * @param element - the `diagnosisSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDiagnosisSequenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Claim.item.diagnosisSequence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initDiagnosisSequence();
      this.diagnosisSequence?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `diagnosisSequence` property exists and has a value; `false` otherwise
   */
  public hasDiagnosisSequenceElement(): boolean {
    return isDefinedList<PositiveIntType>(this.diagnosisSequence) && this.diagnosisSequence.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `diagnosisSequence` property value as a fhirPositiveInt array
   */
  public getDiagnosisSequence(): fhirPositiveInt[] {
    this.initDiagnosisSequence();
    const diagnosisSequenceValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.diagnosisSequence!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        diagnosisSequenceValues.push(value);
      }
    }
    return diagnosisSequenceValues;
  }

  /**
   * Assigns the provided primitive value array to the `diagnosisSequence` property.
   *
   * @param value - the `diagnosisSequence` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDiagnosisSequence(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const diagnosisSequenceElements = [] as PositiveIntType[];
      for (const diagnosisSequenceValue of value) {
        const optErrMsg = `Invalid Claim.item.diagnosisSequence array item (${String(diagnosisSequenceValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(diagnosisSequenceValue, fhirPositiveIntSchema, optErrMsg));
        diagnosisSequenceElements.push(element);
      }
      this.diagnosisSequence = diagnosisSequenceElements;
    } else {
      this.diagnosisSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `diagnosisSequence` array property.
   *
   * @param value - the `diagnosisSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDiagnosisSequence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Claim.item.diagnosisSequence array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initDiagnosisSequence();
      this.addDiagnosisSequenceElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `diagnosisSequence` property exists and has a value; `false` otherwise
   */
  public hasDiagnosisSequence(): boolean {
    return this.hasDiagnosisSequenceElement();
  }

  /**
   * Initialize the `diagnosisSequence` property
   */
  private initDiagnosisSequence(): void {
    if (!this.hasDiagnosisSequence()) {
      this.diagnosisSequence = [] as PositiveIntType[];
    }
  }

  /**
   * @returns the `procedureSequence` property value as a PositiveIntType array
   */
  public getProcedureSequenceElement(): PositiveIntType[] {
    return this.procedureSequence ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `procedureSequence` property.
   *
   * @param element - the `procedureSequence` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProcedureSequenceElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Claim.item.procedureSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.procedureSequence = element;
    } else {
      this.procedureSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `procedureSequence` array property.
   *
   * @param element - the `procedureSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addProcedureSequenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Claim.item.procedureSequence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initProcedureSequence();
      this.procedureSequence?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `procedureSequence` property exists and has a value; `false` otherwise
   */
  public hasProcedureSequenceElement(): boolean {
    return isDefinedList<PositiveIntType>(this.procedureSequence) && this.procedureSequence.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `procedureSequence` property value as a fhirPositiveInt array
   */
  public getProcedureSequence(): fhirPositiveInt[] {
    this.initProcedureSequence();
    const procedureSequenceValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.procedureSequence!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        procedureSequenceValues.push(value);
      }
    }
    return procedureSequenceValues;
  }

  /**
   * Assigns the provided primitive value array to the `procedureSequence` property.
   *
   * @param value - the `procedureSequence` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProcedureSequence(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const procedureSequenceElements = [] as PositiveIntType[];
      for (const procedureSequenceValue of value) {
        const optErrMsg = `Invalid Claim.item.procedureSequence array item (${String(procedureSequenceValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(procedureSequenceValue, fhirPositiveIntSchema, optErrMsg));
        procedureSequenceElements.push(element);
      }
      this.procedureSequence = procedureSequenceElements;
    } else {
      this.procedureSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `procedureSequence` array property.
   *
   * @param value - the `procedureSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addProcedureSequence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Claim.item.procedureSequence array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initProcedureSequence();
      this.addProcedureSequenceElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `procedureSequence` property exists and has a value; `false` otherwise
   */
  public hasProcedureSequence(): boolean {
    return this.hasProcedureSequenceElement();
  }

  /**
   * Initialize the `procedureSequence` property
   */
  private initProcedureSequence(): void {
    if (!this.hasProcedureSequence()) {
      this.procedureSequence = [] as PositiveIntType[];
    }
  }

  /**
   * @returns the `informationSequence` property value as a PositiveIntType array
   */
  public getInformationSequenceElement(): PositiveIntType[] {
    return this.informationSequence ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `informationSequence` property.
   *
   * @param element - the `informationSequence` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInformationSequenceElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Claim.item.informationSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.informationSequence = element;
    } else {
      this.informationSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `informationSequence` array property.
   *
   * @param element - the `informationSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInformationSequenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Claim.item.informationSequence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initInformationSequence();
      this.informationSequence?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `informationSequence` property exists and has a value; `false` otherwise
   */
  public hasInformationSequenceElement(): boolean {
    return isDefinedList<PositiveIntType>(this.informationSequence) && this.informationSequence.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `informationSequence` property value as a fhirPositiveInt array
   */
  public getInformationSequence(): fhirPositiveInt[] {
    this.initInformationSequence();
    const informationSequenceValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.informationSequence!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        informationSequenceValues.push(value);
      }
    }
    return informationSequenceValues;
  }

  /**
   * Assigns the provided primitive value array to the `informationSequence` property.
   *
   * @param value - the `informationSequence` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInformationSequence(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const informationSequenceElements = [] as PositiveIntType[];
      for (const informationSequenceValue of value) {
        const optErrMsg = `Invalid Claim.item.informationSequence array item (${String(informationSequenceValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(informationSequenceValue, fhirPositiveIntSchema, optErrMsg));
        informationSequenceElements.push(element);
      }
      this.informationSequence = informationSequenceElements;
    } else {
      this.informationSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `informationSequence` array property.
   *
   * @param value - the `informationSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInformationSequence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Claim.item.informationSequence array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initInformationSequence();
      this.addInformationSequenceElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `informationSequence` property exists and has a value; `false` otherwise
   */
  public hasInformationSequence(): boolean {
    return this.hasInformationSequenceElement();
  }

  /**
   * Initialize the `informationSequence` property
   */
  private initInformationSequence(): void {
    if (!this.hasInformationSequence()) {
      this.informationSequence = [] as PositiveIntType[];
    }
  }

  /**
   * @returns the `revenue` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRevenue(): CodeableConcept {
    return this.revenue ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Revenue object value to the `revenue` property.
   *
   * @param value - the `revenue` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRevenue(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.revenue; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.revenue = value;
    } else {
      this.revenue = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `revenue` property exists and has a value; `false` otherwise
   */
  public hasRevenue(): boolean {
    return isDefined<CodeableConcept>(this.revenue) && !this.revenue.isEmpty();
  }

  /**
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Category object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefined<CodeableConcept>(this.category) && !this.category.isEmpty();
  }

  /**
   * @returns the `productOrService` property value as a CodeableConcept object if defined; else null
   */
  public getProductOrService(): CodeableConcept | null {
    return this.productOrService;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `productOrService` property.
   *
   * @param value - the `productOrService` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductOrService(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Claim.item.productOrService is required`);
    const optErrMsg = `Invalid Claim.item.productOrService; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.productOrService = value;
    return this;
  }

  /**
   * @returns `true` if the `productOrService` property exists and has a value; `false` otherwise
   */
  public hasProductOrService(): boolean {
    return isDefined<CodeableConcept>(this.productOrService) && !this.productOrService.isEmpty();
  }

  /**
   * @returns the `modifier` property value as a CodeableConcept array
   */
  public getModifier(): CodeableConcept[] {
    return this.modifier ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `modifier` property.
   *
   * @param value - the `modifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setModifier(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.modifier = value;
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `modifier` array property.
   *
   * @param value - the `modifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addModifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.modifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initModifier();
      this.modifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifier(): boolean {
    return isDefinedList<CodeableConcept>(this.modifier) && this.modifier.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `modifier` property
   */
  private initModifier(): void {
    if(!this.hasModifier()) {
      this.modifier = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `programCode` property value as a CodeableConcept array
   */
  public getProgramCode(): CodeableConcept[] {
    return this.programCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `programCode` property.
   *
   * @param value - the `programCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProgramCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.programCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.programCode = value;
    } else {
      this.programCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `programCode` array property.
   *
   * @param value - the `programCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProgramCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.programCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initProgramCode();
      this.programCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `programCode` property exists and has a value; `false` otherwise
   */
  public hasProgramCode(): boolean {
    return isDefinedList<CodeableConcept>(this.programCode) && this.programCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `programCode` property
   */
  private initProgramCode(): void {
    if(!this.hasProgramCode()) {
      this.programCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `serviced` property value as a DataType object if defined; else undefined
   */
  public getServiced(): IDataType | undefined {
    return this.serviced;
  }

  /**
   * Assigns the provided DataType object value to the `serviced` property.
   *
   * @decorator `@ChoiceDataTypes('Claim.item.serviced[x]')`
   *
   * @param value - the `serviced` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Claim.item.serviced[x]')
  public setServiced(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.serviced = value;
    } else {
      this.serviced = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `serviced` property exists and has a value; `false` otherwise
   */
  public hasServiced(): boolean {
    return isDefined<IDataType>(this.serviced) && !this.serviced.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `serviced` property value as a DateType object if defined; else undefined
   */
  public getServicedDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.serviced)) {
      return undefined;
    }
    if (!(this.serviced instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.item.serviced[x]: Expected DateType but encountered ${this.serviced.fhirType()}`,
      );
    }
    return this.serviced;
  }

  /**
   * @returns `true` if the `serviced` property exists as a DateType and has a value; `false` otherwise
   */
  public hasServicedDateType(): boolean {
    return this.hasServiced() && this.serviced instanceof DateType;
  }

  /**
   * @returns the `serviced` property value as a Period object if defined; else undefined
   */
  public getServicedPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.serviced)) {
      return undefined;
    }
    if (!(this.serviced instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.item.serviced[x]: Expected Period but encountered ${this.serviced.fhirType()}`,
      );
    }
    return this.serviced;
  }

  /**
   * @returns `true` if the `serviced` property exists as a Period and has a value; `false` otherwise
   */
  public hasServicedPeriod(): boolean {
    return this.hasServiced() && this.serviced instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `location` property value as a DataType object if defined; else undefined
   */
  public getLocation(): IDataType | undefined {
    return this.location;
  }

  /**
   * Assigns the provided DataType object value to the `location` property.
   *
   * @decorator `@ChoiceDataTypes('Claim.item.location[x]')`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Claim.item.location[x]')
  public setLocation(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.location = value;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return isDefined<IDataType>(this.location) && !this.location.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `location` property value as a CodeableConcept object if defined; else undefined
   */
  public getLocationCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.location)) {
      return undefined;
    }
    if (!(this.location instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.item.location[x]: Expected CodeableConcept but encountered ${this.location.fhirType()}`,
      );
    }
    return this.location;
  }

  /**
   * @returns `true` if the `location` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasLocationCodeableConcept(): boolean {
    return this.hasLocation() && this.location instanceof CodeableConcept;
  }

  /**
   * @returns the `location` property value as a Address object if defined; else undefined
   */
  public getLocationAddress(): Address | undefined {
    if (!isDefined<IDataType | undefined>(this.location)) {
      return undefined;
    }
    if (!(this.location instanceof Address)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.item.location[x]: Expected Address but encountered ${this.location.fhirType()}`,
      );
    }
    return this.location;
  }

  /**
   * @returns `true` if the `location` property exists as a Address and has a value; `false` otherwise
   */
  public hasLocationAddress(): boolean {
    return this.hasLocation() && this.location instanceof Address;
  }

  /**
   * @returns the `location` property value as a Reference object if defined; else undefined
   */
  public getLocationReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.location)) {
      return undefined;
    }
    if (!(this.location instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Claim.item.location[x]: Expected Reference but encountered ${this.location.fhirType()}`,
      );
    }
    return this.location;
  }

  /**
   * @returns `true` if the `location` property exists as a Reference and has a value; `false` otherwise
   */
  public hasLocationReference(): boolean {
    return this.hasLocation() && this.location instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `quantity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getQuantity(): Quantity {
    return this.quantity ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `quantity` property.
   *
   * @param value - the `quantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid Claim.item.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return isDefined<Quantity>(this.quantity) && !this.quantity.isEmpty();
  }

  /**
   * @returns the `unitPrice` property value as a Money object if defined; else an empty Money object
   */
  public getUnitPrice(): Money {
    return this.unitPrice ?? new Money();
  }

  /**
   * Assigns the provided UnitPrice object value to the `unitPrice` property.
   *
   * @param value - the `unitPrice` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUnitPrice(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid Claim.item.unitPrice; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.unitPrice = value;
    } else {
      this.unitPrice = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unitPrice` property exists and has a value; `false` otherwise
   */
  public hasUnitPrice(): boolean {
    return isDefined<Money>(this.unitPrice) && !this.unitPrice.isEmpty();
  }

  /**
   * @returns the `factor` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getFactorElement(): DecimalType {
    return this.factor ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `factor` property.
   *
   * @param element - the `factor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFactorElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid Claim.item.factor; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.factor = element;
    } else {
      this.factor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `factor` property exists and has a value; `false` otherwise
   */
  public hasFactorElement(): boolean {
    return isDefined<DecimalType>(this.factor) && !this.factor.isEmpty();
  }

  /**
   * @returns the `factor` property value as a fhirDecimal if defined; else undefined
   */
  public getFactor(): fhirDecimal | undefined {
    return this.factor?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `factor` property.
   *
   * @param value - the `factor` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFactor(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid Claim.item.factor (${String(value)})`;
      this.factor = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.factor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `factor` property exists and has a value; `false` otherwise
   */
  public hasFactor(): boolean {
    return this.hasFactorElement();
  }

  /**
   * @returns the `net` property value as a Money object if defined; else an empty Money object
   */
  public getNet(): Money {
    return this.net ?? new Money();
  }

  /**
   * Assigns the provided Net object value to the `net` property.
   *
   * @param value - the `net` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNet(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid Claim.item.net; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.net = value;
    } else {
      this.net = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `net` property exists and has a value; `false` otherwise
   */
  public hasNet(): boolean {
    return isDefined<Money>(this.net) && !this.net.isEmpty();
  }

  /**
   * @returns the `udi` property value as a Reference array
   */
  public getUdi(): Reference[] {
    return this.udi ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `udi` property.
   *
   * @decorator `@ReferenceTargets('Claim.item.udi', ['Device',])`
   *
   * @param value - the `udi` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.item.udi', [
    'Device',
  ])
  public setUdi(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.udi = value;
    } else {
      this.udi = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `udi` array property.
   *
   * @decorator `@ReferenceTargets('Claim.item.udi', ['Device',])`
   *
   * @param value - the `udi` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.item.udi', [
    'Device',
  ])
  public addUdi(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initUdi();
      this.udi?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `udi` property exists and has a value; `false` otherwise
   */
  public hasUdi(): boolean {
    return isDefinedList<Reference>(this.udi) && this.udi.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `udi` property
   */
  private initUdi(): void {
    if (!this.hasUdi()) {
      this.udi = [] as Reference[];
    }
  }

  /**
   * @returns the `bodySite` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getBodySite(): CodeableConcept {
    return this.bodySite ?? new CodeableConcept();
  }

  /**
   * Assigns the provided BodySite object value to the `bodySite` property.
   *
   * @param value - the `bodySite` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBodySite(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.bodySite; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.bodySite = value;
    } else {
      this.bodySite = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `bodySite` property exists and has a value; `false` otherwise
   */
  public hasBodySite(): boolean {
    return isDefined<CodeableConcept>(this.bodySite) && !this.bodySite.isEmpty();
  }

  /**
   * @returns the `subSite` property value as a CodeableConcept array
   */
  public getSubSite(): CodeableConcept[] {
    return this.subSite ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `subSite` property.
   *
   * @param value - the `subSite` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubSite(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.subSite; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.subSite = value;
    } else {
      this.subSite = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `subSite` array property.
   *
   * @param value - the `subSite` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubSite(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.subSite; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSubSite();
      this.subSite?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subSite` property exists and has a value; `false` otherwise
   */
  public hasSubSite(): boolean {
    return isDefinedList<CodeableConcept>(this.subSite) && this.subSite.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `subSite` property
   */
  private initSubSite(): void {
    if(!this.hasSubSite()) {
      this.subSite = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `encounter` property value as a Reference array
   */
  public getEncounter(): Reference[] {
    return this.encounter ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `encounter` property.
   *
   * @decorator `@ReferenceTargets('Claim.item.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.item.encounter', [
    'Encounter',
  ])
  public setEncounter(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.encounter = value;
    } else {
      this.encounter = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `encounter` array property.
   *
   * @decorator `@ReferenceTargets('Claim.item.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.item.encounter', [
    'Encounter',
  ])
  public addEncounter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEncounter();
      this.encounter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `encounter` property exists and has a value; `false` otherwise
   */
  public hasEncounter(): boolean {
    return isDefinedList<Reference>(this.encounter) && this.encounter.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `encounter` property
   */
  private initEncounter(): void {
    if (!this.hasEncounter()) {
      this.encounter = [] as Reference[];
    }
  }

  /**
   * @returns the `detail` property value as a ClaimItemDetailComponent array
   */
  public getDetail(): ClaimItemDetailComponent[] {
    return this.detail ?? ([] as ClaimItemDetailComponent[]);
  }

  /**
   * Assigns the provided ClaimItemDetailComponent array value to the `detail` property.
   *
   * @param value - the `detail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDetail(value: ClaimItemDetailComponent[] | undefined): this {
    if (isDefinedList<ClaimItemDetailComponent>(value)) {
      const optErrMsg = `Invalid Claim.item.detail; Provided value array has an element that is not an instance of ClaimItemDetailComponent.`;
      assertFhirTypeList<ClaimItemDetailComponent>(value, ClaimItemDetailComponent, optErrMsg);
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimItemDetailComponent value to the `detail` array property.
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDetail(value: ClaimItemDetailComponent | undefined): this {
    if (isDefined<ClaimItemDetailComponent>(value)) {
      const optErrMsg = `Invalid Claim.item.detail; Provided element is not an instance of ClaimItemDetailComponent.`;
      assertFhirType<ClaimItemDetailComponent>(value, ClaimItemDetailComponent, optErrMsg);
      this.initDetail();
      this.detail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefinedList<ClaimItemDetailComponent>(this.detail) && this.detail.some((item: ClaimItemDetailComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `detail` property
   */
  private initDetail(): void {
    if(!this.hasDetail()) {
      this.detail = [] as ClaimItemDetailComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Claim.item';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.careTeamSequence,
      this.diagnosisSequence,
      this.procedureSequence,
      this.informationSequence,
      this.revenue,
      this.category,
      this.productOrService,
      this.modifier,
      this.programCode,
      this.serviced,
      this.location,
      this.quantity,
      this.unitPrice,
      this.factor,
      this.net,
      this.udi,
      this.bodySite,
      this.subSite,
      this.encounter,
      this.detail,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimItemComponent {
    const dest = new ClaimItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimItemComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence ? this.sequence.copy() : null;
    const careTeamSequenceList = copyListValues<PositiveIntType>(this.careTeamSequence);
    dest.careTeamSequence = careTeamSequenceList.length === 0 ? undefined : careTeamSequenceList;
    const diagnosisSequenceList = copyListValues<PositiveIntType>(this.diagnosisSequence);
    dest.diagnosisSequence = diagnosisSequenceList.length === 0 ? undefined : diagnosisSequenceList;
    const procedureSequenceList = copyListValues<PositiveIntType>(this.procedureSequence);
    dest.procedureSequence = procedureSequenceList.length === 0 ? undefined : procedureSequenceList;
    const informationSequenceList = copyListValues<PositiveIntType>(this.informationSequence);
    dest.informationSequence = informationSequenceList.length === 0 ? undefined : informationSequenceList;
    dest.revenue = this.revenue?.copy();
    dest.category = this.category?.copy();
    dest.productOrService = this.productOrService ? this.productOrService.copy() : null;
    const modifierList = copyListValues<CodeableConcept>(this.modifier);
    dest.modifier = modifierList.length === 0 ? undefined : modifierList;
    const programCodeList = copyListValues<CodeableConcept>(this.programCode);
    dest.programCode = programCodeList.length === 0 ? undefined : programCodeList;
    dest.serviced = this.serviced?.copy() as IDataType;
    dest.location = this.location?.copy() as IDataType;
    dest.quantity = this.quantity?.copy();
    dest.unitPrice = this.unitPrice?.copy();
    dest.factor = this.factor?.copy();
    dest.net = this.net?.copy();
    const udiList = copyListValues<Reference>(this.udi);
    dest.udi = udiList.length === 0 ? undefined : udiList;
    dest.bodySite = this.bodySite?.copy();
    const subSiteList = copyListValues<CodeableConcept>(this.subSite);
    dest.subSite = subSiteList.length === 0 ? undefined : subSiteList;
    const encounterList = copyListValues<Reference>(this.encounter);
    dest.encounter = encounterList.length === 0 ? undefined : encounterList;
    const detailList = copyListValues<ClaimItemDetailComponent>(this.detail);
    dest.detail = detailList.length === 0 ? undefined : detailList;
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

    if (this.hasSequenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement()!, 'sequence', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.item.sequence`);
    }

    if (this.hasCareTeamSequence()) {
      setFhirPrimitiveListJson(this.getCareTeamSequenceElement(), 'careTeamSequence', jsonObj);
    }

    if (this.hasDiagnosisSequence()) {
      setFhirPrimitiveListJson(this.getDiagnosisSequenceElement(), 'diagnosisSequence', jsonObj);
    }

    if (this.hasProcedureSequence()) {
      setFhirPrimitiveListJson(this.getProcedureSequenceElement(), 'procedureSequence', jsonObj);
    }

    if (this.hasInformationSequence()) {
      setFhirPrimitiveListJson(this.getInformationSequenceElement(), 'informationSequence', jsonObj);
    }

    if (this.hasRevenue()) {
      setFhirComplexJson(this.getRevenue(), 'revenue', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasProductOrService()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getProductOrService()!, 'productOrService', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.item.productOrService`);
    }

    if (this.hasModifier()) {
      setFhirComplexListJson(this.getModifier(), 'modifier', jsonObj);
    }

    if (this.hasProgramCode()) {
      setFhirComplexListJson(this.getProgramCode(), 'programCode', jsonObj);
    }

    if (this.hasServiced()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getServiced()!, 'serviced', jsonObj);
    }

    if (this.hasLocation()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getLocation()!, 'location', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasUnitPrice()) {
      setFhirComplexJson(this.getUnitPrice(), 'unitPrice', jsonObj);
    }

    if (this.hasFactorElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getFactorElement(), 'factor', jsonObj);
    }

    if (this.hasNet()) {
      setFhirComplexJson(this.getNet(), 'net', jsonObj);
    }

    if (this.hasUdi()) {
      setFhirComplexListJson(this.getUdi(), 'udi', jsonObj);
    }

    if (this.hasBodySite()) {
      setFhirComplexJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasSubSite()) {
      setFhirComplexListJson(this.getSubSite(), 'subSite', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexListJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasDetail()) {
      setFhirBackboneElementListJson(this.getDetail(), 'detail', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimItemDetailComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Product or service provided
 * - **Definition:** A claim detail line. Either a simple (a product or service) or a \'group\' of sub-details which are simple items.
 * - **Requirements:** The items to be processed for adjudication.
 *
 * @category Data Models: Resource
 * @see [FHIR Claim](http://hl7.org/fhir/StructureDefinition/Claim)
 */
export class ClaimItemDetailComponent extends BackboneElement implements IBackboneElement {
  constructor(sequence: PositiveIntType | fhirPositiveInt | null = null, productOrService: CodeableConcept | null = null) {
    super();

    this.sequence = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(sequence)) {
      if (sequence instanceof PrimitiveType) {
        this.setSequenceElement(sequence);
      } else {
        this.setSequence(sequence);
      }
    }

    this.productOrService = null;
    if (isDefined<CodeableConcept>(productOrService)) {
      this.setProductOrService(productOrService);
    }
  }

  /**
   * Parse the provided `ClaimItemDetailComponent` JSON to instantiate the ClaimItemDetailComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimItemDetailComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimItemDetailComponent
   * @returns ClaimItemDetailComponent data model or undefined for `ClaimItemDetailComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimItemDetailComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimItemDetailComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimItemDetailComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'revenue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRevenue(datatype);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCategory(datatype);
    }

    fieldName = 'productOrService';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setProductOrService(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'modifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addModifier(datatype);
        }
      });
    }

    fieldName = 'programCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addProgramCode(datatype);
        }
      });
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'unitPrice';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnitPrice(datatype);
    }

    fieldName = 'factor';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setFactorElement(datatype);
    }

    fieldName = 'net';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNet(datatype);
    }

    fieldName = 'udi';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addUdi(datatype);
        }
      });
  }

    fieldName = 'subDetail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimItemDetailSubDetailComponent | undefined = ClaimItemDetailSubDetailComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSubDetail(component);
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
   * Claim.item.detail.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Item instance identifier
   * - **Definition:** A number to uniquely identify item entries.
   * - **Requirements:** Necessary to provide a mechanism to link to items from within the claim and within the adjudication details of the ClaimResponse.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence: PositiveIntType | null;

  /**
   * Claim.item.detail.revenue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Revenue or cost center code
   * - **Definition:** The type of revenue or cost center providing the product and/or service.
   * - **Requirements:** Needed in the processing of institutional claims.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private revenue?: CodeableConcept | undefined;

  /**
   * Claim.item.detail.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefit classification
   * - **Definition:** Code to identify the general type of benefits under which products and services are provided.
   * - **Comment:** Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   * - **Requirements:** Needed in the processing of institutional claims as this allows the insurer to determine whether a facial X-Ray is for dental, orthopedic, or facial surgery purposes.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept | undefined;

  /**
   * Claim.item.detail.productOrService Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Billing, service, product, or drug code
   * - **Definition:** When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.
   * - **Comment:** If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. \'glasses\' or \'compound\'.
   * - **Requirements:** Necessary to state what was provided or done.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productOrService: CodeableConcept | null;

  /**
   * Claim.item.detail.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Service/Product billing modifiers
   * - **Definition:** Item typification or modifiers codes to convey additional context for the product or service.
   * - **Comment:** For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   * - **Requirements:** To support inclusion of the item for adjudication or to charge an elevated fee.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modifier?: CodeableConcept[] | undefined;

  /**
   * Claim.item.detail.programCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Program the product or service is provided under
   * - **Definition:** Identifies the program under which this may be recovered.
   * - **Comment:** For example: Neonatal program, child dental program or drug users recovery program.
   * - **Requirements:** Commonly used in in the identification of publicly provided program focused on population segments or disease classifications.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private programCode?: CodeableConcept[] | undefined;

  /**
   * Claim.item.detail.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Count of products or services
   * - **Definition:** The number of repetitions of a service or product.
   * - **Requirements:** Required when the product or service code does not convey the quantity provided.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * Claim.item.detail.unitPrice Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fee, charge or cost per item
   * - **Definition:** If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
   * - **Requirements:** The amount charged to the patient by the provider for a single unit.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private unitPrice?: Money | undefined;

  /**
   * Claim.item.detail.factor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Price scaling factor
   * - **Definition:** A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
   * - **Comment:** To show a 10% senior\'s discount, the value entered is: 0.90 (1.00 - 0.10).
   * - **Requirements:** When discounts are provided to a patient (example: Senior\'s discount) then this must be documented for adjudication.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private factor?: DecimalType | undefined;

  /**
   * Claim.item.detail.net Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total item cost
   * - **Definition:** The quantity times the unit price for an additional service or product or charge.
   * - **Comment:** For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
   * - **Requirements:** Provides the total amount claimed  for the group (if a grouper) or the line item.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private net?: Money | undefined;

  /**
   * Claim.item.detail.udi Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique device identifier
   * - **Definition:** Unique Device Identifiers associated with this line item.
   * - **Requirements:** The UDI code allows the insurer to obtain device level information on the product supplied.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private udi?: Reference[] | undefined;

  /**
   * Claim.item.detail.subDetail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product or service provided
   * - **Definition:** A claim detail line. Either a simple (a product or service) or a \'group\' of sub-details which are simple items.
   * - **Requirements:** The items to be processed for adjudication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subDetail?: ClaimItemDetailSubDetailComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else null
   */
  public getSequenceElement(): PositiveIntType | null {
    return this.sequence;
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType): this {
    assertIsDefined<PositiveIntType>(element, `Claim.item.detail.sequence is required`);
    const optErrMsg = `Invalid Claim.item.detail.sequence; Provided value is not an instance of PositiveIntType.`;
    assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
    this.sequence = element;
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.sequence) && !this.sequence.isEmpty();
  }

  /**
   * @returns the `sequence` property value as a fhirPositiveInt if defined; else null
   */
  public getSequence(): fhirPositiveInt | null {
    if (this.sequence?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.sequence.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `sequence` property.
   *
   * @param value - the `sequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequence(value: fhirPositiveInt): this {
    assertIsDefined<fhirPositiveInt>(value, `Claim.item.detail.sequence is required`);
    const optErrMsg = `Invalid Claim.item.detail.sequence (${String(value)})`;
    this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequence(): boolean {
    return this.hasSequenceElement();
  }

  /**
   * @returns the `revenue` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRevenue(): CodeableConcept {
    return this.revenue ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Revenue object value to the `revenue` property.
   *
   * @param value - the `revenue` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRevenue(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.revenue; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.revenue = value;
    } else {
      this.revenue = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `revenue` property exists and has a value; `false` otherwise
   */
  public hasRevenue(): boolean {
    return isDefined<CodeableConcept>(this.revenue) && !this.revenue.isEmpty();
  }

  /**
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Category object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefined<CodeableConcept>(this.category) && !this.category.isEmpty();
  }

  /**
   * @returns the `productOrService` property value as a CodeableConcept object if defined; else null
   */
  public getProductOrService(): CodeableConcept | null {
    return this.productOrService;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `productOrService` property.
   *
   * @param value - the `productOrService` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductOrService(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Claim.item.detail.productOrService is required`);
    const optErrMsg = `Invalid Claim.item.detail.productOrService; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.productOrService = value;
    return this;
  }

  /**
   * @returns `true` if the `productOrService` property exists and has a value; `false` otherwise
   */
  public hasProductOrService(): boolean {
    return isDefined<CodeableConcept>(this.productOrService) && !this.productOrService.isEmpty();
  }

  /**
   * @returns the `modifier` property value as a CodeableConcept array
   */
  public getModifier(): CodeableConcept[] {
    return this.modifier ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `modifier` property.
   *
   * @param value - the `modifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setModifier(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.modifier = value;
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `modifier` array property.
   *
   * @param value - the `modifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addModifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.modifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initModifier();
      this.modifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifier(): boolean {
    return isDefinedList<CodeableConcept>(this.modifier) && this.modifier.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `modifier` property
   */
  private initModifier(): void {
    if(!this.hasModifier()) {
      this.modifier = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `programCode` property value as a CodeableConcept array
   */
  public getProgramCode(): CodeableConcept[] {
    return this.programCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `programCode` property.
   *
   * @param value - the `programCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProgramCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.programCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.programCode = value;
    } else {
      this.programCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `programCode` array property.
   *
   * @param value - the `programCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProgramCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.programCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initProgramCode();
      this.programCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `programCode` property exists and has a value; `false` otherwise
   */
  public hasProgramCode(): boolean {
    return isDefinedList<CodeableConcept>(this.programCode) && this.programCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `programCode` property
   */
  private initProgramCode(): void {
    if(!this.hasProgramCode()) {
      this.programCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `quantity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getQuantity(): Quantity {
    return this.quantity ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `quantity` property.
   *
   * @param value - the `quantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return isDefined<Quantity>(this.quantity) && !this.quantity.isEmpty();
  }

  /**
   * @returns the `unitPrice` property value as a Money object if defined; else an empty Money object
   */
  public getUnitPrice(): Money {
    return this.unitPrice ?? new Money();
  }

  /**
   * Assigns the provided UnitPrice object value to the `unitPrice` property.
   *
   * @param value - the `unitPrice` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUnitPrice(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.unitPrice; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.unitPrice = value;
    } else {
      this.unitPrice = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unitPrice` property exists and has a value; `false` otherwise
   */
  public hasUnitPrice(): boolean {
    return isDefined<Money>(this.unitPrice) && !this.unitPrice.isEmpty();
  }

  /**
   * @returns the `factor` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getFactorElement(): DecimalType {
    return this.factor ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `factor` property.
   *
   * @param element - the `factor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFactorElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid Claim.item.detail.factor; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.factor = element;
    } else {
      this.factor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `factor` property exists and has a value; `false` otherwise
   */
  public hasFactorElement(): boolean {
    return isDefined<DecimalType>(this.factor) && !this.factor.isEmpty();
  }

  /**
   * @returns the `factor` property value as a fhirDecimal if defined; else undefined
   */
  public getFactor(): fhirDecimal | undefined {
    return this.factor?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `factor` property.
   *
   * @param value - the `factor` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFactor(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.factor (${String(value)})`;
      this.factor = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.factor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `factor` property exists and has a value; `false` otherwise
   */
  public hasFactor(): boolean {
    return this.hasFactorElement();
  }

  /**
   * @returns the `net` property value as a Money object if defined; else an empty Money object
   */
  public getNet(): Money {
    return this.net ?? new Money();
  }

  /**
   * Assigns the provided Net object value to the `net` property.
   *
   * @param value - the `net` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNet(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.net; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.net = value;
    } else {
      this.net = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `net` property exists and has a value; `false` otherwise
   */
  public hasNet(): boolean {
    return isDefined<Money>(this.net) && !this.net.isEmpty();
  }

  /**
   * @returns the `udi` property value as a Reference array
   */
  public getUdi(): Reference[] {
    return this.udi ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `udi` property.
   *
   * @decorator `@ReferenceTargets('Claim.item.detail.udi', ['Device',])`
   *
   * @param value - the `udi` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.item.detail.udi', [
    'Device',
  ])
  public setUdi(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.udi = value;
    } else {
      this.udi = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `udi` array property.
   *
   * @decorator `@ReferenceTargets('Claim.item.detail.udi', ['Device',])`
   *
   * @param value - the `udi` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.item.detail.udi', [
    'Device',
  ])
  public addUdi(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initUdi();
      this.udi?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `udi` property exists and has a value; `false` otherwise
   */
  public hasUdi(): boolean {
    return isDefinedList<Reference>(this.udi) && this.udi.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `udi` property
   */
  private initUdi(): void {
    if (!this.hasUdi()) {
      this.udi = [] as Reference[];
    }
  }

  /**
   * @returns the `subDetail` property value as a ClaimItemDetailSubDetailComponent array
   */
  public getSubDetail(): ClaimItemDetailSubDetailComponent[] {
    return this.subDetail ?? ([] as ClaimItemDetailSubDetailComponent[]);
  }

  /**
   * Assigns the provided ClaimItemDetailSubDetailComponent array value to the `subDetail` property.
   *
   * @param value - the `subDetail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubDetail(value: ClaimItemDetailSubDetailComponent[] | undefined): this {
    if (isDefinedList<ClaimItemDetailSubDetailComponent>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.subDetail; Provided value array has an element that is not an instance of ClaimItemDetailSubDetailComponent.`;
      assertFhirTypeList<ClaimItemDetailSubDetailComponent>(value, ClaimItemDetailSubDetailComponent, optErrMsg);
      this.subDetail = value;
    } else {
      this.subDetail = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimItemDetailSubDetailComponent value to the `subDetail` array property.
   *
   * @param value - the `subDetail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubDetail(value: ClaimItemDetailSubDetailComponent | undefined): this {
    if (isDefined<ClaimItemDetailSubDetailComponent>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.subDetail; Provided element is not an instance of ClaimItemDetailSubDetailComponent.`;
      assertFhirType<ClaimItemDetailSubDetailComponent>(value, ClaimItemDetailSubDetailComponent, optErrMsg);
      this.initSubDetail();
      this.subDetail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subDetail` property exists and has a value; `false` otherwise
   */
  public hasSubDetail(): boolean {
    return isDefinedList<ClaimItemDetailSubDetailComponent>(this.subDetail) && this.subDetail.some((item: ClaimItemDetailSubDetailComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `subDetail` property
   */
  private initSubDetail(): void {
    if(!this.hasSubDetail()) {
      this.subDetail = [] as ClaimItemDetailSubDetailComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Claim.item.detail';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.revenue,
      this.category,
      this.productOrService,
      this.modifier,
      this.programCode,
      this.quantity,
      this.unitPrice,
      this.factor,
      this.net,
      this.udi,
      this.subDetail,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimItemDetailComponent {
    const dest = new ClaimItemDetailComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimItemDetailComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence ? this.sequence.copy() : null;
    dest.revenue = this.revenue?.copy();
    dest.category = this.category?.copy();
    dest.productOrService = this.productOrService ? this.productOrService.copy() : null;
    const modifierList = copyListValues<CodeableConcept>(this.modifier);
    dest.modifier = modifierList.length === 0 ? undefined : modifierList;
    const programCodeList = copyListValues<CodeableConcept>(this.programCode);
    dest.programCode = programCodeList.length === 0 ? undefined : programCodeList;
    dest.quantity = this.quantity?.copy();
    dest.unitPrice = this.unitPrice?.copy();
    dest.factor = this.factor?.copy();
    dest.net = this.net?.copy();
    const udiList = copyListValues<Reference>(this.udi);
    dest.udi = udiList.length === 0 ? undefined : udiList;
    const subDetailList = copyListValues<ClaimItemDetailSubDetailComponent>(this.subDetail);
    dest.subDetail = subDetailList.length === 0 ? undefined : subDetailList;
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

    if (this.hasSequenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement()!, 'sequence', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.item.detail.sequence`);
    }

    if (this.hasRevenue()) {
      setFhirComplexJson(this.getRevenue(), 'revenue', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasProductOrService()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getProductOrService()!, 'productOrService', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.item.detail.productOrService`);
    }

    if (this.hasModifier()) {
      setFhirComplexListJson(this.getModifier(), 'modifier', jsonObj);
    }

    if (this.hasProgramCode()) {
      setFhirComplexListJson(this.getProgramCode(), 'programCode', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasUnitPrice()) {
      setFhirComplexJson(this.getUnitPrice(), 'unitPrice', jsonObj);
    }

    if (this.hasFactorElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getFactorElement(), 'factor', jsonObj);
    }

    if (this.hasNet()) {
      setFhirComplexJson(this.getNet(), 'net', jsonObj);
    }

    if (this.hasUdi()) {
      setFhirComplexListJson(this.getUdi(), 'udi', jsonObj);
    }

    if (this.hasSubDetail()) {
      setFhirBackboneElementListJson(this.getSubDetail(), 'subDetail', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimItemDetailSubDetailComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Product or service provided
 * - **Definition:** A claim detail line. Either a simple (a product or service) or a \'group\' of sub-details which are simple items.
 * - **Requirements:** The items to be processed for adjudication.
 *
 * @category Data Models: Resource
 * @see [FHIR Claim](http://hl7.org/fhir/StructureDefinition/Claim)
 */
export class ClaimItemDetailSubDetailComponent extends BackboneElement implements IBackboneElement {
  constructor(sequence: PositiveIntType | fhirPositiveInt | null = null, productOrService: CodeableConcept | null = null) {
    super();

    this.sequence = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(sequence)) {
      if (sequence instanceof PrimitiveType) {
        this.setSequenceElement(sequence);
      } else {
        this.setSequence(sequence);
      }
    }

    this.productOrService = null;
    if (isDefined<CodeableConcept>(productOrService)) {
      this.setProductOrService(productOrService);
    }
  }

  /**
   * Parse the provided `ClaimItemDetailSubDetailComponent` JSON to instantiate the ClaimItemDetailSubDetailComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimItemDetailSubDetailComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimItemDetailSubDetailComponent
   * @returns ClaimItemDetailSubDetailComponent data model or undefined for `ClaimItemDetailSubDetailComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimItemDetailSubDetailComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimItemDetailSubDetailComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimItemDetailSubDetailComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'revenue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRevenue(datatype);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCategory(datatype);
    }

    fieldName = 'productOrService';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setProductOrService(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'modifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addModifier(datatype);
        }
      });
    }

    fieldName = 'programCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addProgramCode(datatype);
        }
      });
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'unitPrice';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnitPrice(datatype);
    }

    fieldName = 'factor';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setFactorElement(datatype);
    }

    fieldName = 'net';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNet(datatype);
    }

    fieldName = 'udi';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addUdi(datatype);
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
   * Claim.item.detail.subDetail.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Item instance identifier
   * - **Definition:** A number to uniquely identify item entries.
   * - **Requirements:** Necessary to provide a mechanism to link to items from within the claim and within the adjudication details of the ClaimResponse.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence: PositiveIntType | null;

  /**
   * Claim.item.detail.subDetail.revenue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Revenue or cost center code
   * - **Definition:** The type of revenue or cost center providing the product and/or service.
   * - **Requirements:** Needed in the processing of institutional claims.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private revenue?: CodeableConcept | undefined;

  /**
   * Claim.item.detail.subDetail.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefit classification
   * - **Definition:** Code to identify the general type of benefits under which products and services are provided.
   * - **Comment:** Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   * - **Requirements:** Needed in the processing of institutional claims as this allows the insurer to determine whether a facial X-Ray is for dental, orthopedic, or facial surgery purposes.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept | undefined;

  /**
   * Claim.item.detail.subDetail.productOrService Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Billing, service, product, or drug code
   * - **Definition:** When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.
   * - **Comment:** If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. \'glasses\' or \'compound\'.
   * - **Requirements:** Necessary to state what was provided or done.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productOrService: CodeableConcept | null;

  /**
   * Claim.item.detail.subDetail.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Service/Product billing modifiers
   * - **Definition:** Item typification or modifiers codes to convey additional context for the product or service.
   * - **Comment:** For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   * - **Requirements:** To support inclusion of the item for adjudication or to charge an elevated fee.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modifier?: CodeableConcept[] | undefined;

  /**
   * Claim.item.detail.subDetail.programCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Program the product or service is provided under
   * - **Definition:** Identifies the program under which this may be recovered.
   * - **Comment:** For example: Neonatal program, child dental program or drug users recovery program.
   * - **Requirements:** Commonly used in in the identification of publicly provided program focused on population segments or disease classifications.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private programCode?: CodeableConcept[] | undefined;

  /**
   * Claim.item.detail.subDetail.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Count of products or services
   * - **Definition:** The number of repetitions of a service or product.
   * - **Requirements:** Required when the product or service code does not convey the quantity provided.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * Claim.item.detail.subDetail.unitPrice Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fee, charge or cost per item
   * - **Definition:** If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
   * - **Requirements:** The amount charged to the patient by the provider for a single unit.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private unitPrice?: Money | undefined;

  /**
   * Claim.item.detail.subDetail.factor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Price scaling factor
   * - **Definition:** A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
   * - **Comment:** To show a 10% senior\'s discount, the value entered is: 0.90 (1.00 - 0.10).
   * - **Requirements:** When discounts are provided to a patient (example: Senior\'s discount) then this must be documented for adjudication.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private factor?: DecimalType | undefined;

  /**
   * Claim.item.detail.subDetail.net Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total item cost
   * - **Definition:** The quantity times the unit price for an additional service or product or charge.
   * - **Comment:** For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
   * - **Requirements:** Provides the total amount claimed  for the group (if a grouper) or the line item.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private net?: Money | undefined;

  /**
   * Claim.item.detail.subDetail.udi Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique device identifier
   * - **Definition:** Unique Device Identifiers associated with this line item.
   * - **Requirements:** The UDI code allows the insurer to obtain device level information on the product supplied.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private udi?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else null
   */
  public getSequenceElement(): PositiveIntType | null {
    return this.sequence;
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType): this {
    assertIsDefined<PositiveIntType>(element, `Claim.item.detail.subDetail.sequence is required`);
    const optErrMsg = `Invalid Claim.item.detail.subDetail.sequence; Provided value is not an instance of PositiveIntType.`;
    assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
    this.sequence = element;
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.sequence) && !this.sequence.isEmpty();
  }

  /**
   * @returns the `sequence` property value as a fhirPositiveInt if defined; else null
   */
  public getSequence(): fhirPositiveInt | null {
    if (this.sequence?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.sequence.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `sequence` property.
   *
   * @param value - the `sequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequence(value: fhirPositiveInt): this {
    assertIsDefined<fhirPositiveInt>(value, `Claim.item.detail.subDetail.sequence is required`);
    const optErrMsg = `Invalid Claim.item.detail.subDetail.sequence (${String(value)})`;
    this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequence(): boolean {
    return this.hasSequenceElement();
  }

  /**
   * @returns the `revenue` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRevenue(): CodeableConcept {
    return this.revenue ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Revenue object value to the `revenue` property.
   *
   * @param value - the `revenue` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRevenue(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.subDetail.revenue; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.revenue = value;
    } else {
      this.revenue = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `revenue` property exists and has a value; `false` otherwise
   */
  public hasRevenue(): boolean {
    return isDefined<CodeableConcept>(this.revenue) && !this.revenue.isEmpty();
  }

  /**
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Category object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.subDetail.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefined<CodeableConcept>(this.category) && !this.category.isEmpty();
  }

  /**
   * @returns the `productOrService` property value as a CodeableConcept object if defined; else null
   */
  public getProductOrService(): CodeableConcept | null {
    return this.productOrService;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `productOrService` property.
   *
   * @param value - the `productOrService` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductOrService(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Claim.item.detail.subDetail.productOrService is required`);
    const optErrMsg = `Invalid Claim.item.detail.subDetail.productOrService; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.productOrService = value;
    return this;
  }

  /**
   * @returns `true` if the `productOrService` property exists and has a value; `false` otherwise
   */
  public hasProductOrService(): boolean {
    return isDefined<CodeableConcept>(this.productOrService) && !this.productOrService.isEmpty();
  }

  /**
   * @returns the `modifier` property value as a CodeableConcept array
   */
  public getModifier(): CodeableConcept[] {
    return this.modifier ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `modifier` property.
   *
   * @param value - the `modifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setModifier(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.subDetail.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.modifier = value;
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `modifier` array property.
   *
   * @param value - the `modifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addModifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.subDetail.modifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initModifier();
      this.modifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifier(): boolean {
    return isDefinedList<CodeableConcept>(this.modifier) && this.modifier.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `modifier` property
   */
  private initModifier(): void {
    if(!this.hasModifier()) {
      this.modifier = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `programCode` property value as a CodeableConcept array
   */
  public getProgramCode(): CodeableConcept[] {
    return this.programCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `programCode` property.
   *
   * @param value - the `programCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProgramCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.subDetail.programCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.programCode = value;
    } else {
      this.programCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `programCode` array property.
   *
   * @param value - the `programCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProgramCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.subDetail.programCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initProgramCode();
      this.programCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `programCode` property exists and has a value; `false` otherwise
   */
  public hasProgramCode(): boolean {
    return isDefinedList<CodeableConcept>(this.programCode) && this.programCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `programCode` property
   */
  private initProgramCode(): void {
    if(!this.hasProgramCode()) {
      this.programCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `quantity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getQuantity(): Quantity {
    return this.quantity ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `quantity` property.
   *
   * @param value - the `quantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.subDetail.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return isDefined<Quantity>(this.quantity) && !this.quantity.isEmpty();
  }

  /**
   * @returns the `unitPrice` property value as a Money object if defined; else an empty Money object
   */
  public getUnitPrice(): Money {
    return this.unitPrice ?? new Money();
  }

  /**
   * Assigns the provided UnitPrice object value to the `unitPrice` property.
   *
   * @param value - the `unitPrice` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUnitPrice(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.subDetail.unitPrice; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.unitPrice = value;
    } else {
      this.unitPrice = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unitPrice` property exists and has a value; `false` otherwise
   */
  public hasUnitPrice(): boolean {
    return isDefined<Money>(this.unitPrice) && !this.unitPrice.isEmpty();
  }

  /**
   * @returns the `factor` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getFactorElement(): DecimalType {
    return this.factor ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `factor` property.
   *
   * @param element - the `factor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFactorElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid Claim.item.detail.subDetail.factor; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.factor = element;
    } else {
      this.factor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `factor` property exists and has a value; `false` otherwise
   */
  public hasFactorElement(): boolean {
    return isDefined<DecimalType>(this.factor) && !this.factor.isEmpty();
  }

  /**
   * @returns the `factor` property value as a fhirDecimal if defined; else undefined
   */
  public getFactor(): fhirDecimal | undefined {
    return this.factor?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `factor` property.
   *
   * @param value - the `factor` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFactor(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.subDetail.factor (${String(value)})`;
      this.factor = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.factor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `factor` property exists and has a value; `false` otherwise
   */
  public hasFactor(): boolean {
    return this.hasFactorElement();
  }

  /**
   * @returns the `net` property value as a Money object if defined; else an empty Money object
   */
  public getNet(): Money {
    return this.net ?? new Money();
  }

  /**
   * Assigns the provided Net object value to the `net` property.
   *
   * @param value - the `net` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNet(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid Claim.item.detail.subDetail.net; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.net = value;
    } else {
      this.net = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `net` property exists and has a value; `false` otherwise
   */
  public hasNet(): boolean {
    return isDefined<Money>(this.net) && !this.net.isEmpty();
  }

  /**
   * @returns the `udi` property value as a Reference array
   */
  public getUdi(): Reference[] {
    return this.udi ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `udi` property.
   *
   * @decorator `@ReferenceTargets('Claim.item.detail.subDetail.udi', ['Device',])`
   *
   * @param value - the `udi` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.item.detail.subDetail.udi', [
    'Device',
  ])
  public setUdi(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.udi = value;
    } else {
      this.udi = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `udi` array property.
   *
   * @decorator `@ReferenceTargets('Claim.item.detail.subDetail.udi', ['Device',])`
   *
   * @param value - the `udi` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Claim.item.detail.subDetail.udi', [
    'Device',
  ])
  public addUdi(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initUdi();
      this.udi?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `udi` property exists and has a value; `false` otherwise
   */
  public hasUdi(): boolean {
    return isDefinedList<Reference>(this.udi) && this.udi.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `udi` property
   */
  private initUdi(): void {
    if (!this.hasUdi()) {
      this.udi = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Claim.item.detail.subDetail';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.revenue,
      this.category,
      this.productOrService,
      this.modifier,
      this.programCode,
      this.quantity,
      this.unitPrice,
      this.factor,
      this.net,
      this.udi,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimItemDetailSubDetailComponent {
    const dest = new ClaimItemDetailSubDetailComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimItemDetailSubDetailComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence ? this.sequence.copy() : null;
    dest.revenue = this.revenue?.copy();
    dest.category = this.category?.copy();
    dest.productOrService = this.productOrService ? this.productOrService.copy() : null;
    const modifierList = copyListValues<CodeableConcept>(this.modifier);
    dest.modifier = modifierList.length === 0 ? undefined : modifierList;
    const programCodeList = copyListValues<CodeableConcept>(this.programCode);
    dest.programCode = programCodeList.length === 0 ? undefined : programCodeList;
    dest.quantity = this.quantity?.copy();
    dest.unitPrice = this.unitPrice?.copy();
    dest.factor = this.factor?.copy();
    dest.net = this.net?.copy();
    const udiList = copyListValues<Reference>(this.udi);
    dest.udi = udiList.length === 0 ? undefined : udiList;
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

    if (this.hasSequenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement()!, 'sequence', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.item.detail.subDetail.sequence`);
    }

    if (this.hasRevenue()) {
      setFhirComplexJson(this.getRevenue(), 'revenue', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasProductOrService()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getProductOrService()!, 'productOrService', jsonObj);
    } else {
      missingReqdProperties.push(`Claim.item.detail.subDetail.productOrService`);
    }

    if (this.hasModifier()) {
      setFhirComplexListJson(this.getModifier(), 'modifier', jsonObj);
    }

    if (this.hasProgramCode()) {
      setFhirComplexListJson(this.getProgramCode(), 'programCode', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasUnitPrice()) {
      setFhirComplexJson(this.getUnitPrice(), 'unitPrice', jsonObj);
    }

    if (this.hasFactorElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getFactorElement(), 'factor', jsonObj);
    }

    if (this.hasNet()) {
      setFhirComplexJson(this.getNet(), 'net', jsonObj);
    }

    if (this.hasUdi()) {
      setFhirComplexListJson(this.getUdi(), 'udi', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
