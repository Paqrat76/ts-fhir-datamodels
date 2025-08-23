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
 * Consent Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Consent
 * StructureDefinition.name: Consent
 * StructureDefinition.description: A record of a healthcare consumer\'s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  BooleanType,
  CodeType,
  DateTimeType,
  DateType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  JSON,
  PrimitiveType,
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  UrlType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
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
  fhirUrl,
  fhirUrlSchema,
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
} from '@paq-ts-fhir/fhir-core';
import { Attachment, CodeableConcept, Coding, Expression, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { ConsentDataMeaningEnum } from '../code-systems/ConsentDataMeaningEnum';
import { ConsentProvisionTypeEnum } from '../code-systems/ConsentProvisionTypeEnum';
import { ConsentStateCodesEnum } from '../code-systems/ConsentStateCodesEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * Consent Class
 *
 * @remarks
 * A record of a healthcare consumer\'s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 *
 * **FHIR Specification**
 * - **Short:** A healthcare consumer\'s  or third party\'s choices to permit or deny recipients or roles to perform actions for specific purposes and periods of time
 * - **Definition:** A record of a healthcare consumer\'s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 * - **Comment:** Broadly, there are 3 key areas of consent for patients: Consent around sharing information (aka Privacy Consent Directive - Authorization to Collect, Use, or Disclose information), consent for specific treatment, or kinds of treatment and consent for research participation and data sharing.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Consent](http://hl7.org/fhir/StructureDefinition/Consent)
 */
export class Consent extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.consentStateCodesEnum = new ConsentStateCodesEnum();
    this.consentProvisionTypeEnum = new ConsentProvisionTypeEnum();

    this.status = constructorCodeValueAsEnumCodeType<ConsentStateCodesEnum>(
      status,
      ConsentStateCodesEnum,
      this.consentStateCodesEnum,
      'Consent.status',
    );
  }

  /**
   * Parse the provided `Consent` JSON to instantiate the Consent data model.
   *
   * @param sourceJson - JSON representing FHIR `Consent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Consent
   * @returns Consent data model or undefined for `Consent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Consent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Consent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Consent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Consent');
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

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCategory(datatype);
        }
      });
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'grantor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addGrantor(datatype);
        }
      });
  }

    fieldName = 'grantee';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addGrantee(datatype);
        }
      });
  }

    fieldName = 'manager';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addManager(datatype);
        }
      });
  }

    fieldName = 'controller';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addController(datatype);
        }
      });
  }

    fieldName = 'sourceAttachment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Attachment | undefined = Attachment.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSourceAttachment(datatype);
        }
      });
    }

    fieldName = 'sourceReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSourceReference(datatype);
        }
      });
  }

    fieldName = 'regulatoryBasis';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRegulatoryBasis(datatype);
        }
      });
    }

    fieldName = 'policyBasis';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ConsentPolicyBasisComponent | undefined = ConsentPolicyBasisComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPolicyBasis(component);
    }

    fieldName = 'policyText';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPolicyText(datatype);
        }
      });
  }

    fieldName = 'verification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConsentVerificationComponent | undefined = ConsentVerificationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addVerification(component);
        }
      });
    }

    fieldName = 'decision';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setDecisionElement(datatype);
    }

    fieldName = 'provision';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConsentProvisionComponent | undefined = ConsentProvisionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProvision(component);
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
   * Consent.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier for this record (external references)
   * - **Definition:** Unique identifier for this copy of the Consent Statement.
   * - **Comment:** This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: ConsentStateCodes
   *
   * @see {@link ConsentStateCodesEnum }
   */
  private readonly consentStateCodesEnum: ConsentStateCodesEnum;

  /**
   * Consent.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | inactive | not-done | entered-in-error | unknown
   * - **Definition:** Indicates the current state of this Consent resource.
   * - **Comment:** This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Consent.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of the consent statement - for indexing/retrieval
   * - **Definition:** A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * Consent.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who the consent applies to
   * - **Definition:** The patient/healthcare practitioner or group of persons to whom this consent applies.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * Consent.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fully executed date of the consent
   * - **Definition:** Date the consent instance was agreed to.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateType | undefined;

  /**
   * Consent.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Effective period for this Consent
   * - **Definition:** Effective period for this Consent Resource and all provisions unless specified in that provision.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * Consent.grantor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is granting rights according to the policy and rules
   * - **Definition:** The entity responsible for granting the rights listed in a Consent Directive.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private grantor?: Reference[] | undefined;

  /**
   * Consent.grantee Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is agreeing to the policy and rules
   * - **Definition:** The entity responsible for complying with the Consent Directive, including any obligations or limitations on authorizations and enforcement of prohibitions.
   * - **Comment:** In a fully computable consent, both grantee and grantor  will be listed as actors within the consent. The Grantee and Grantor elements are for ease of search only.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private grantee?: Reference[] | undefined;

  /**
   * Consent.manager Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Consent workflow management
   * - **Definition:** The actor that manages the consent through its lifecycle.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private manager?: Reference[] | undefined;

  /**
   * Consent.controller Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Consent Enforcer
   * - **Definition:** The actor that controls/enforces the access according to the consent.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private controller?: Reference[] | undefined;

  /**
   * Consent.sourceAttachment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Source from which this consent is taken
   * - **Definition:** The source on which this consent statement is based. The source might be a scanned original paper form.
   * - **Comment:** The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sourceAttachment?: Attachment[] | undefined;

  /**
   * Consent.sourceReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Source from which this consent is taken
   * - **Definition:** A reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
   * - **Comment:** The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Consent',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *       'http://hl7.org/fhir/StructureDefinition/Contract',
   *       'http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sourceReference?: Reference[] | undefined;

  /**
   * Consent.regulatoryBasis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Regulations establishing base Consent
   * - **Definition:** A set of codes that indicate the regulatory basis (if any) that this consent supports.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private regulatoryBasis?: CodeableConcept[] | undefined;

  /**
   * Consent.policyBasis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Computable version of the backing policy
   * - **Definition:** A Reference or URL used to uniquely identify the policy the organization will enforce for this Consent. This Reference or URL should be specific to the version of the policy and should be dereferencable to a computable policy of some form.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private policyBasis?: ConsentPolicyBasisComponent | undefined;

  /**
   * Consent.policyText Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human Readable Policy
   * - **Definition:** A Reference to the human readable policy explaining the basis for the Consent.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private policyText?: Reference[] | undefined;

  /**
   * Consent.verification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Consent Verified by patient or family
   * - **Definition:** Whether a treatment instruction (e.g. artificial respiration: yes or no) was verified with the patient, his/her family or another authorized person.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private verification?: ConsentVerificationComponent[] | undefined;

  /**
   * FHIR CodeSystem: ConsentProvisionType
   *
   * @see {@link ConsentProvisionTypeEnum }
   */
  private readonly consentProvisionTypeEnum: ConsentProvisionTypeEnum;

  /**
   * Consent.decision Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** deny | permit
   * - **Definition:** Action to take - permit or deny - as default.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** Sets context for the values in .provision
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  private decision?: EnumCodeType | undefined;

  /**
   * Consent.provision Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Constraints to the base Consent.policyRule/Consent.policy
   * - **Definition:** An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private provision?: ConsentProvisionComponent[] | undefined;

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
      const optErrMsg = `Invalid Consent.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Consent.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
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
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `Consent.status is required`);
    const errMsgPrefix = `Invalid Consent.status`;
    assertEnumCodeType<ConsentStateCodesEnum>(enumType, ConsentStateCodesEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
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
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Consent.status is required`);
    const optErrMsg = `Invalid Consent.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.consentStateCodesEnum);
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
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
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
   * @see CodeSystem Enumeration: {@link ConsentStateCodesEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Consent.status is required`);
    const optErrMsg = `Invalid Consent.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.consentStateCodesEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `category` property value as a CodeableConcept array
   */
  public getCategory(): CodeableConcept[] {
    return this.category ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `category` property.
   *
   * @param value - the `category` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.category; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `category` array property.
   *
   * @param value - the `category` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCategory();
      this.category?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefinedList<CodeableConcept>(this.category) && this.category.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `category` property
   */
  private initCategory(): void {
    if(!this.hasCategory()) {
      this.category = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('Consent.subject', ['Patient','Practitioner','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.subject', [
    'Patient',
  
    'Practitioner',
  
    'Group',
  ])
  public setSubject(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefined<Reference>(this.subject) && !this.subject.isEmpty();
  }

  /**
   * @returns the `date` property value as a DateType object if defined; else an empty DateType object
   */
  public getDateElement(): DateType {
    return this.date ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid Consent.date; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
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
    return isDefined<DateType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDate if defined; else undefined
   */
  public getDate(): fhirDate | undefined {
    return this.date?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid Consent.date (${String(value)})`;
      this.date = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
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
      const optErrMsg = `Invalid Consent.period; Provided element is not an instance of Period.`;
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
   * @returns the `grantor` property value as a Reference array
   */
  public getGrantor(): Reference[] {
    return this.grantor ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `grantor` property.
   *
   * @decorator `@ReferenceTargets('Consent.grantor', ['CareTeam','HealthcareService','Organization','Patient','Practitioner','RelatedPerson','PractitionerRole',])`
   *
   * @param value - the `grantor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.grantor', [
    'CareTeam',
  
    'HealthcareService',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'RelatedPerson',
  
    'PractitionerRole',
  ])
  public setGrantor(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.grantor = value;
    } else {
      this.grantor = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `grantor` array property.
   *
   * @decorator `@ReferenceTargets('Consent.grantor', ['CareTeam','HealthcareService','Organization','Patient','Practitioner','RelatedPerson','PractitionerRole',])`
   *
   * @param value - the `grantor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.grantor', [
    'CareTeam',
  
    'HealthcareService',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'RelatedPerson',
  
    'PractitionerRole',
  ])
  public addGrantor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initGrantor();
      this.grantor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `grantor` property exists and has a value; `false` otherwise
   */
  public hasGrantor(): boolean {
    return isDefinedList<Reference>(this.grantor) && this.grantor.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `grantor` property
   */
  private initGrantor(): void {
    if (!this.hasGrantor()) {
      this.grantor = [] as Reference[];
    }
  }

  /**
   * @returns the `grantee` property value as a Reference array
   */
  public getGrantee(): Reference[] {
    return this.grantee ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `grantee` property.
   *
   * @decorator `@ReferenceTargets('Consent.grantee', ['CareTeam','HealthcareService','Organization','Patient','Practitioner','RelatedPerson','PractitionerRole',])`
   *
   * @param value - the `grantee` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.grantee', [
    'CareTeam',
  
    'HealthcareService',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'RelatedPerson',
  
    'PractitionerRole',
  ])
  public setGrantee(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.grantee = value;
    } else {
      this.grantee = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `grantee` array property.
   *
   * @decorator `@ReferenceTargets('Consent.grantee', ['CareTeam','HealthcareService','Organization','Patient','Practitioner','RelatedPerson','PractitionerRole',])`
   *
   * @param value - the `grantee` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.grantee', [
    'CareTeam',
  
    'HealthcareService',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'RelatedPerson',
  
    'PractitionerRole',
  ])
  public addGrantee(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initGrantee();
      this.grantee?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `grantee` property exists and has a value; `false` otherwise
   */
  public hasGrantee(): boolean {
    return isDefinedList<Reference>(this.grantee) && this.grantee.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `grantee` property
   */
  private initGrantee(): void {
    if (!this.hasGrantee()) {
      this.grantee = [] as Reference[];
    }
  }

  /**
   * @returns the `manager` property value as a Reference array
   */
  public getManager(): Reference[] {
    return this.manager ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `manager` property.
   *
   * @decorator `@ReferenceTargets('Consent.manager', ['HealthcareService','Organization','Patient','Practitioner',])`
   *
   * @param value - the `manager` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.manager', [
    'HealthcareService',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  ])
  public setManager(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.manager = value;
    } else {
      this.manager = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `manager` array property.
   *
   * @decorator `@ReferenceTargets('Consent.manager', ['HealthcareService','Organization','Patient','Practitioner',])`
   *
   * @param value - the `manager` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.manager', [
    'HealthcareService',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  ])
  public addManager(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initManager();
      this.manager?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `manager` property exists and has a value; `false` otherwise
   */
  public hasManager(): boolean {
    return isDefinedList<Reference>(this.manager) && this.manager.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `manager` property
   */
  private initManager(): void {
    if (!this.hasManager()) {
      this.manager = [] as Reference[];
    }
  }

  /**
   * @returns the `controller` property value as a Reference array
   */
  public getController(): Reference[] {
    return this.controller ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `controller` property.
   *
   * @decorator `@ReferenceTargets('Consent.controller', ['HealthcareService','Organization','Patient','Practitioner',])`
   *
   * @param value - the `controller` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.controller', [
    'HealthcareService',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  ])
  public setController(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.controller = value;
    } else {
      this.controller = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `controller` array property.
   *
   * @decorator `@ReferenceTargets('Consent.controller', ['HealthcareService','Organization','Patient','Practitioner',])`
   *
   * @param value - the `controller` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.controller', [
    'HealthcareService',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  ])
  public addController(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initController();
      this.controller?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `controller` property exists and has a value; `false` otherwise
   */
  public hasController(): boolean {
    return isDefinedList<Reference>(this.controller) && this.controller.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `controller` property
   */
  private initController(): void {
    if (!this.hasController()) {
      this.controller = [] as Reference[];
    }
  }

  /**
   * @returns the `sourceAttachment` property value as a Attachment array
   */
  public getSourceAttachment(): Attachment[] {
    return this.sourceAttachment ?? ([] as Attachment[]);
  }

  /**
   * Assigns the provided Attachment array value to the `sourceAttachment` property.
   *
   * @param value - the `sourceAttachment` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSourceAttachment(value: Attachment[] | undefined): this {
    if (isDefinedList<Attachment>(value)) {
      const optErrMsg = `Invalid Consent.sourceAttachment; Provided value array has an element that is not an instance of Attachment.`;
      assertFhirTypeList<Attachment>(value, Attachment, optErrMsg);
      this.sourceAttachment = value;
    } else {
      this.sourceAttachment = undefined;
    }
    return this;
  }

  /**
   * Add the provided Attachment value to the `sourceAttachment` array property.
   *
   * @param value - the `sourceAttachment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSourceAttachment(value: Attachment | undefined): this {
    if (isDefined<Attachment>(value)) {
      const optErrMsg = `Invalid Consent.sourceAttachment; Provided element is not an instance of Attachment.`;
      assertFhirType<Attachment>(value, Attachment, optErrMsg);
      this.initSourceAttachment();
      this.sourceAttachment?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceAttachment` property exists and has a value; `false` otherwise
   */
  public hasSourceAttachment(): boolean {
    return isDefinedList<Attachment>(this.sourceAttachment) && this.sourceAttachment.some((item: Attachment) => !item.isEmpty());
  }

  /**
   * Initialize the `sourceAttachment` property
   */
  private initSourceAttachment(): void {
    if(!this.hasSourceAttachment()) {
      this.sourceAttachment = [] as Attachment[];
    }
  }

  /**
   * @returns the `sourceReference` property value as a Reference array
   */
  public getSourceReference(): Reference[] {
    return this.sourceReference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `sourceReference` property.
   *
   * @decorator `@ReferenceTargets('Consent.sourceReference', ['Consent','DocumentReference','Contract','QuestionnaireResponse',])`
   *
   * @param value - the `sourceReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.sourceReference', [
    'Consent',
  
    'DocumentReference',
  
    'Contract',
  
    'QuestionnaireResponse',
  ])
  public setSourceReference(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.sourceReference = value;
    } else {
      this.sourceReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `sourceReference` array property.
   *
   * @decorator `@ReferenceTargets('Consent.sourceReference', ['Consent','DocumentReference','Contract','QuestionnaireResponse',])`
   *
   * @param value - the `sourceReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.sourceReference', [
    'Consent',
  
    'DocumentReference',
  
    'Contract',
  
    'QuestionnaireResponse',
  ])
  public addSourceReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSourceReference();
      this.sourceReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceReference` property exists and has a value; `false` otherwise
   */
  public hasSourceReference(): boolean {
    return isDefinedList<Reference>(this.sourceReference) && this.sourceReference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `sourceReference` property
   */
  private initSourceReference(): void {
    if (!this.hasSourceReference()) {
      this.sourceReference = [] as Reference[];
    }
  }

  /**
   * @returns the `regulatoryBasis` property value as a CodeableConcept array
   */
  public getRegulatoryBasis(): CodeableConcept[] {
    return this.regulatoryBasis ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `regulatoryBasis` property.
   *
   * @param value - the `regulatoryBasis` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRegulatoryBasis(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.regulatoryBasis; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.regulatoryBasis = value;
    } else {
      this.regulatoryBasis = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `regulatoryBasis` array property.
   *
   * @param value - the `regulatoryBasis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRegulatoryBasis(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.regulatoryBasis; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initRegulatoryBasis();
      this.regulatoryBasis?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `regulatoryBasis` property exists and has a value; `false` otherwise
   */
  public hasRegulatoryBasis(): boolean {
    return isDefinedList<CodeableConcept>(this.regulatoryBasis) && this.regulatoryBasis.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `regulatoryBasis` property
   */
  private initRegulatoryBasis(): void {
    if(!this.hasRegulatoryBasis()) {
      this.regulatoryBasis = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `policyBasis` property value as a ConsentPolicyBasisComponent object if defined; else an empty ConsentPolicyBasisComponent object
   */
  public getPolicyBasis(): ConsentPolicyBasisComponent {
    return this.policyBasis ?? new ConsentPolicyBasisComponent();
  }

  /**
   * Assigns the provided PolicyBasis object value to the `policyBasis` property.
   *
   * @param value - the `policyBasis` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPolicyBasis(value: ConsentPolicyBasisComponent | undefined): this {
    if (isDefined<ConsentPolicyBasisComponent>(value)) {
      const optErrMsg = `Invalid Consent.policyBasis; Provided element is not an instance of ConsentPolicyBasisComponent.`;
      assertFhirType<ConsentPolicyBasisComponent>(value, ConsentPolicyBasisComponent, optErrMsg);
      this.policyBasis = value;
    } else {
      this.policyBasis = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `policyBasis` property exists and has a value; `false` otherwise
   */
  public hasPolicyBasis(): boolean {
    return isDefined<ConsentPolicyBasisComponent>(this.policyBasis) && !this.policyBasis.isEmpty();
  }

  /**
   * @returns the `policyText` property value as a Reference array
   */
  public getPolicyText(): Reference[] {
    return this.policyText ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `policyText` property.
   *
   * @decorator `@ReferenceTargets('Consent.policyText', ['DocumentReference',])`
   *
   * @param value - the `policyText` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.policyText', [
    'DocumentReference',
  ])
  public setPolicyText(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.policyText = value;
    } else {
      this.policyText = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `policyText` array property.
   *
   * @decorator `@ReferenceTargets('Consent.policyText', ['DocumentReference',])`
   *
   * @param value - the `policyText` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.policyText', [
    'DocumentReference',
  ])
  public addPolicyText(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPolicyText();
      this.policyText?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `policyText` property exists and has a value; `false` otherwise
   */
  public hasPolicyText(): boolean {
    return isDefinedList<Reference>(this.policyText) && this.policyText.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `policyText` property
   */
  private initPolicyText(): void {
    if (!this.hasPolicyText()) {
      this.policyText = [] as Reference[];
    }
  }

  /**
   * @returns the `verification` property value as a ConsentVerificationComponent array
   */
  public getVerification(): ConsentVerificationComponent[] {
    return this.verification ?? ([] as ConsentVerificationComponent[]);
  }

  /**
   * Assigns the provided ConsentVerificationComponent array value to the `verification` property.
   *
   * @param value - the `verification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVerification(value: ConsentVerificationComponent[] | undefined): this {
    if (isDefinedList<ConsentVerificationComponent>(value)) {
      const optErrMsg = `Invalid Consent.verification; Provided value array has an element that is not an instance of ConsentVerificationComponent.`;
      assertFhirTypeList<ConsentVerificationComponent>(value, ConsentVerificationComponent, optErrMsg);
      this.verification = value;
    } else {
      this.verification = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConsentVerificationComponent value to the `verification` array property.
   *
   * @param value - the `verification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addVerification(value: ConsentVerificationComponent | undefined): this {
    if (isDefined<ConsentVerificationComponent>(value)) {
      const optErrMsg = `Invalid Consent.verification; Provided element is not an instance of ConsentVerificationComponent.`;
      assertFhirType<ConsentVerificationComponent>(value, ConsentVerificationComponent, optErrMsg);
      this.initVerification();
      this.verification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `verification` property exists and has a value; `false` otherwise
   */
  public hasVerification(): boolean {
    return isDefinedList<ConsentVerificationComponent>(this.verification) && this.verification.some((item: ConsentVerificationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `verification` property
   */
  private initVerification(): void {
    if(!this.hasVerification()) {
      this.verification = [] as ConsentVerificationComponent[];
    }
  }

  /**
   * @returns the `decision` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public getDecisionEnumType(): EnumCodeType | undefined {
    return this.decision;
  }

  /**
   * Assigns the provided EnumCodeType value to the `decision` property.
   *
   * @param enumType - the `decision` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public setDecisionEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Consent.decision';
      assertEnumCodeType<ConsentProvisionTypeEnum>(enumType, ConsentProvisionTypeEnum, errMsgPrefix);
      this.decision = enumType;
    } else {
      this.decision = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `decision` property exists and has a value; `false` otherwise
   */
  public hasDecisionEnumType(): boolean {
    return isDefined<EnumCodeType>(this.decision) && !this.decision.isEmpty() && this.decision.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `decision` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public getDecisionElement(): CodeType | undefined {
    if (this.decision === undefined) {
      return undefined;
    }
    return this.decision as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `decision` property.
   *
   * @param element - the `decision` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public setDecisionElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Consent.decision; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.decision = new EnumCodeType(element, this.consentProvisionTypeEnum);
    } else {
      this.decision = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `decision` property exists and has a value; `false` otherwise
   */
  public hasDecisionElement(): boolean {
    return this.hasDecisionEnumType();
  }

  /**
   * @returns the `decision` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public getDecision(): fhirCode | undefined {
    if (this.decision === undefined) {
      return undefined;
    }
    return this.decision.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `decision` property.
   *
   * @param value - the `decision` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ConsentProvisionTypeEnum }
   */
  public setDecision(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Consent.decision; Provided value is not an instance of fhirCode.`;
      this.decision = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.consentProvisionTypeEnum);
    } else {
      this.decision = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `decision` property exists and has a value; `false` otherwise
   */
  public hasDecision(): boolean {
    return this.hasDecisionEnumType();
  }

  /**
   * @returns the `provision` property value as a ConsentProvisionComponent array
   */
  public getProvision(): ConsentProvisionComponent[] {
    return this.provision ?? ([] as ConsentProvisionComponent[]);
  }

  /**
   * Assigns the provided ConsentProvisionComponent array value to the `provision` property.
   *
   * @param value - the `provision` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProvision(value: ConsentProvisionComponent[] | undefined): this {
    if (isDefinedList<ConsentProvisionComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision; Provided value array has an element that is not an instance of ConsentProvisionComponent.`;
      assertFhirTypeList<ConsentProvisionComponent>(value, ConsentProvisionComponent, optErrMsg);
      this.provision = value;
    } else {
      this.provision = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConsentProvisionComponent value to the `provision` array property.
   *
   * @param value - the `provision` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProvision(value: ConsentProvisionComponent | undefined): this {
    if (isDefined<ConsentProvisionComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision; Provided element is not an instance of ConsentProvisionComponent.`;
      assertFhirType<ConsentProvisionComponent>(value, ConsentProvisionComponent, optErrMsg);
      this.initProvision();
      this.provision?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `provision` property exists and has a value; `false` otherwise
   */
  public hasProvision(): boolean {
    return isDefinedList<ConsentProvisionComponent>(this.provision) && this.provision.some((item: ConsentProvisionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `provision` property
   */
  private initProvision(): void {
    if(!this.hasProvision()) {
      this.provision = [] as ConsentProvisionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Consent';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.category,
      this.subject,
      this.date,
      this.period,
      this.grantor,
      this.grantee,
      this.manager,
      this.controller,
      this.sourceAttachment,
      this.sourceReference,
      this.regulatoryBasis,
      this.policyBasis,
      this.policyText,
      this.verification,
      this.decision,
      this.provision,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Consent {
    const dest = new Consent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Consent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.subject = this.subject?.copy();
    dest.date = this.date?.copy();
    dest.period = this.period?.copy();
    const grantorList = copyListValues<Reference>(this.grantor);
    dest.grantor = grantorList.length === 0 ? undefined : grantorList;
    const granteeList = copyListValues<Reference>(this.grantee);
    dest.grantee = granteeList.length === 0 ? undefined : granteeList;
    const managerList = copyListValues<Reference>(this.manager);
    dest.manager = managerList.length === 0 ? undefined : managerList;
    const controllerList = copyListValues<Reference>(this.controller);
    dest.controller = controllerList.length === 0 ? undefined : controllerList;
    const sourceAttachmentList = copyListValues<Attachment>(this.sourceAttachment);
    dest.sourceAttachment = sourceAttachmentList.length === 0 ? undefined : sourceAttachmentList;
    const sourceReferenceList = copyListValues<Reference>(this.sourceReference);
    dest.sourceReference = sourceReferenceList.length === 0 ? undefined : sourceReferenceList;
    const regulatoryBasisList = copyListValues<CodeableConcept>(this.regulatoryBasis);
    dest.regulatoryBasis = regulatoryBasisList.length === 0 ? undefined : regulatoryBasisList;
    dest.policyBasis = this.policyBasis?.copy();
    const policyTextList = copyListValues<Reference>(this.policyText);
    dest.policyText = policyTextList.length === 0 ? undefined : policyTextList;
    const verificationList = copyListValues<ConsentVerificationComponent>(this.verification);
    dest.verification = verificationList.length === 0 ? undefined : verificationList;
    dest.decision = this.decision?.copy();
    const provisionList = copyListValues<ConsentProvisionComponent>(this.provision);
    dest.provision = provisionList.length === 0 ? undefined : provisionList;
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
      missingReqdProperties.push(`Consent.status`);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasGrantor()) {
      setFhirComplexListJson(this.getGrantor(), 'grantor', jsonObj);
    }

    if (this.hasGrantee()) {
      setFhirComplexListJson(this.getGrantee(), 'grantee', jsonObj);
    }

    if (this.hasManager()) {
      setFhirComplexListJson(this.getManager(), 'manager', jsonObj);
    }

    if (this.hasController()) {
      setFhirComplexListJson(this.getController(), 'controller', jsonObj);
    }

    if (this.hasSourceAttachment()) {
      setFhirComplexListJson(this.getSourceAttachment(), 'sourceAttachment', jsonObj);
    }

    if (this.hasSourceReference()) {
      setFhirComplexListJson(this.getSourceReference(), 'sourceReference', jsonObj);
    }

    if (this.hasRegulatoryBasis()) {
      setFhirComplexListJson(this.getRegulatoryBasis(), 'regulatoryBasis', jsonObj);
    }

    if (this.hasPolicyBasis()) {
      setFhirBackboneElementJson(this.getPolicyBasis(), 'policyBasis', jsonObj);
    }

    if (this.hasPolicyText()) {
      setFhirComplexListJson(this.getPolicyText(), 'policyText', jsonObj);
    }

    if (this.hasVerification()) {
      setFhirBackboneElementListJson(this.getVerification(), 'verification', jsonObj);
    }

    if (this.hasDecisionElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getDecisionElement()!, 'decision', jsonObj);
    }

    if (this.hasProvision()) {
      setFhirBackboneElementListJson(this.getProvision(), 'provision', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * ConsentPolicyBasisComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Computable version of the backing policy
 * - **Definition:** A Reference or URL used to uniquely identify the policy the organization will enforce for this Consent. This Reference or URL should be specific to the version of the policy and should be dereferencable to a computable policy of some form.
 *
 * @category Data Models: Resource
 * @see [FHIR Consent](http://hl7.org/fhir/StructureDefinition/Consent)
 */
export class ConsentPolicyBasisComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ConsentPolicyBasisComponent` JSON to instantiate the ConsentPolicyBasisComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConsentPolicyBasisComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConsentPolicyBasisComponent
   * @returns ConsentPolicyBasisComponent data model or undefined for `ConsentPolicyBasisComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConsentPolicyBasisComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConsentPolicyBasisComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConsentPolicyBasisComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReference(datatype);
    }

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UrlType | undefined = fhirParser.parseUrlType(dtJson, dtSiblingJson);
      instance.setUrlElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Consent.policyBasis.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference backing policy resource
   * - **Definition:** A Reference that identifies the policy the organization will enforce for this Consent.
   * - **Comment:** While any resource may be used, Consent, PlanDefinition and Contract would be most frequent
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference?: Reference | undefined;

  /**
   * Consent.policyBasis.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** URL to a computable backing policy
   * - **Definition:** A URL that links to a computable version of the policy the organization will enforce for this Consent.
   * - **FHIR Type:** `url`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private url?: UrlType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `reference` property value as a Reference object; else an empty Reference object
   */
  public getReference(): Reference {
    return this.reference ?? new Reference();
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('Consent.policyBasis.reference', ['Resource',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.policyBasis.reference', [
    'Resource',
  ])
  public setReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
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
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
  }

  /**
   * @returns the `url` property value as a UrlType object if defined; else an empty UrlType object
   */
  public getUrlElement(): UrlType {
    return this.url ?? new UrlType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `url` property.
   *
   * @param element - the `url` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrlElement(element: UrlType | undefined): this {
    if (isDefined<UrlType>(element)) {
      const optErrMsg = `Invalid Consent.policyBasis.url; Provided element is not an instance of UrlType.`;
      assertFhirType<UrlType>(element, UrlType, optErrMsg);
      this.url = element;
    } else {
      this.url = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrlElement(): boolean {
    return isDefined<UrlType>(this.url) && !this.url.isEmpty();
  }

  /**
   * @returns the `url` property value as a fhirUrl if defined; else undefined
   */
  public getUrl(): fhirUrl | undefined {
    return this.url?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `url` property.
   *
   * @param value - the `url` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrl(value: fhirUrl | undefined): this {
    if (isDefined<fhirUrl>(value)) {
      const optErrMsg = `Invalid Consent.policyBasis.url (${String(value)})`;
      this.url = new UrlType(parseFhirPrimitiveData(value, fhirUrlSchema, optErrMsg));
    } else {
      this.url = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrl(): boolean {
    return this.hasUrlElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Consent.policyBasis';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.reference,
      this.url,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConsentPolicyBasisComponent {
    const dest = new ConsentPolicyBasisComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConsentPolicyBasisComponent): void {
    super.copyValues(dest);
    dest.reference = this.reference?.copy();
    dest.url = this.url?.copy();
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

    if (this.hasReference()) {
      setFhirComplexJson(this.getReference(), 'reference', jsonObj);
    }

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUrl>(this.getUrlElement(), 'url', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConsentVerificationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Consent Verified by patient or family
 * - **Definition:** Whether a treatment instruction (e.g. artificial respiration: yes or no) was verified with the patient, his/her family or another authorized person.
 *
 * @category Data Models: Resource
 * @see [FHIR Consent](http://hl7.org/fhir/StructureDefinition/Consent)
 */
export class ConsentVerificationComponent extends BackboneElement implements IBackboneElement {
  constructor(verified: BooleanType | fhirBoolean | null = null) {
    super();

    this.verified = null;
    if (isDefined<BooleanType | fhirBoolean>(verified)) {
      if (verified instanceof PrimitiveType) {
        this.setVerifiedElement(verified);
      } else {
        this.setVerified(verified);
      }
    }
  }

  /**
   * Parse the provided `ConsentVerificationComponent` JSON to instantiate the ConsentVerificationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConsentVerificationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConsentVerificationComponent
   * @returns ConsentVerificationComponent data model or undefined for `ConsentVerificationComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConsentVerificationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConsentVerificationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConsentVerificationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'verified';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setVerifiedElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'verificationType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setVerificationType(datatype);
    }

    fieldName = 'verifiedBy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setVerifiedBy(datatype);
    }

    fieldName = 'verifiedWith';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setVerifiedWith(datatype);
    }

    fieldName = 'verificationDate';
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
        const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addVerificationDateElement(datatype);
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
   * Consent.verification.verified Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Has been verified
   * - **Definition:** Has the instruction been verified.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private verified: BooleanType | null;

  /**
   * Consent.verification.verificationType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business case of verification
   * - **Definition:** Extensible list of verification type starting with verification and re-validation.
   * - **Comment:** This allows the verification element to hold multiple use cases including RelatedPerson verification of the Grantee decision and periodic re-validation of the consent.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private verificationType?: CodeableConcept | undefined;

  /**
   * Consent.verification.verifiedBy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Person conducting verification
   * - **Definition:** The person who conducted the verification/validation of the Grantor decision.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private verifiedBy?: Reference | undefined;

  /**
   * Consent.verification.verifiedWith Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Person who verified
   * - **Definition:** Who verified the instruction (Patient, Relative or other Authorized Person).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private verifiedWith?: Reference | undefined;

  /**
   * Consent.verification.verificationDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When consent verified
   * - **Definition:** Date(s) verification was collected.
   * - **Comment:** Allows for history of verification/validation.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private verificationDate?: DateTimeType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `verified` property value as a BooleanType object if defined; else null
   */
  public getVerifiedElement(): BooleanType | null {
    return this.verified;
  }

  /**
   * Assigns the provided PrimitiveType value to the `verified` property.
   *
   * @param element - the `verified` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVerifiedElement(element: BooleanType): this {
    assertIsDefined<BooleanType>(element, `Consent.verification.verified is required`);
    const optErrMsg = `Invalid Consent.verification.verified; Provided value is not an instance of BooleanType.`;
    assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
    this.verified = element;
    return this;
  }

  /**
   * @returns `true` if the `verified` property exists and has a value; `false` otherwise
   */
  public hasVerifiedElement(): boolean {
    return isDefined<BooleanType>(this.verified) && !this.verified.isEmpty();
  }

  /**
   * @returns the `verified` property value as a fhirBoolean if defined; else null
   */
  public getVerified(): fhirBoolean | null {
    if (this.verified?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.verified.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `verified` property.
   *
   * @param value - the `verified` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVerified(value: fhirBoolean): this {
    assertIsDefined<fhirBoolean>(value, `Consent.verification.verified is required`);
    const optErrMsg = `Invalid Consent.verification.verified (${String(value)})`;
    this.verified = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `verified` property exists and has a value; `false` otherwise
   */
  public hasVerified(): boolean {
    return this.hasVerifiedElement();
  }

  /**
   * @returns the `verificationType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getVerificationType(): CodeableConcept {
    return this.verificationType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided VerificationType object value to the `verificationType` property.
   *
   * @param value - the `verificationType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVerificationType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.verification.verificationType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.verificationType = value;
    } else {
      this.verificationType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `verificationType` property exists and has a value; `false` otherwise
   */
  public hasVerificationType(): boolean {
    return isDefined<CodeableConcept>(this.verificationType) && !this.verificationType.isEmpty();
  }

  /**
   * @returns the `verifiedBy` property value as a Reference object; else an empty Reference object
   */
  public getVerifiedBy(): Reference {
    return this.verifiedBy ?? new Reference();
  }

  /**
   * Assigns the provided VerifiedBy object value to the `verifiedBy` property.
   *
   * @decorator `@ReferenceTargets('Consent.verification.verifiedBy', ['Organization','Practitioner','PractitionerRole',])`
   *
   * @param value - the `verifiedBy` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.verification.verifiedBy', [
    'Organization',
  
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setVerifiedBy(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.verifiedBy = value;
    } else {
      this.verifiedBy = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `verifiedBy` property exists and has a value; `false` otherwise
   */
  public hasVerifiedBy(): boolean {
    return isDefined<Reference>(this.verifiedBy) && !this.verifiedBy.isEmpty();
  }

  /**
   * @returns the `verifiedWith` property value as a Reference object; else an empty Reference object
   */
  public getVerifiedWith(): Reference {
    return this.verifiedWith ?? new Reference();
  }

  /**
   * Assigns the provided VerifiedWith object value to the `verifiedWith` property.
   *
   * @decorator `@ReferenceTargets('Consent.verification.verifiedWith', ['Patient','RelatedPerson',])`
   *
   * @param value - the `verifiedWith` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.verification.verifiedWith', [
    'Patient',
  
    'RelatedPerson',
  ])
  public setVerifiedWith(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.verifiedWith = value;
    } else {
      this.verifiedWith = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `verifiedWith` property exists and has a value; `false` otherwise
   */
  public hasVerifiedWith(): boolean {
    return isDefined<Reference>(this.verifiedWith) && !this.verifiedWith.isEmpty();
  }

  /**
   * @returns the `verificationDate` property value as a DateTimeType array
   */
  public getVerificationDateElement(): DateTimeType[] {
    return this.verificationDate ?? ([] as DateTimeType[]);
  }

  /**
   * Assigns the provided DateTimeType array value to the `verificationDate` property.
   *
   * @param element - the `verificationDate` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVerificationDateElement(element: DateTimeType[] | undefined): this {
    if (isDefinedList<DateTimeType>(element)) {
      const optErrMsg = `Invalid Consent.verification.verificationDate; Provided value array has an element that is not an instance of DateTimeType.`;
      assertFhirTypeList<DateTimeType>(element, DateTimeType, optErrMsg);
      this.verificationDate = element;
    } else {
      this.verificationDate = undefined;
    }
    return this;
  }

  /**
   * Add the provided DateTimeType value to the `verificationDate` array property.
   *
   * @param element - the `verificationDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addVerificationDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Consent.verification.verificationDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.initVerificationDate();
      this.verificationDate?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `verificationDate` property exists and has a value; `false` otherwise
   */
  public hasVerificationDateElement(): boolean {
    return isDefinedList<DateTimeType>(this.verificationDate) && this.verificationDate.some((item: DateTimeType) => !item.isEmpty());
  }

  /**
   * @returns the `verificationDate` property value as a fhirDateTime array
   */
  public getVerificationDate(): fhirDateTime[] {
    this.initVerificationDate();
    const verificationDateValues = [] as fhirDateTime[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.verificationDate!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        verificationDateValues.push(value);
      }
    }
    return verificationDateValues;
  }

  /**
   * Assigns the provided primitive value array to the `verificationDate` property.
   *
   * @param value - the `verificationDate` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVerificationDate(value: fhirDateTime[] | undefined): this {
    if (isDefinedList<fhirDateTime>(value)) {
      const verificationDateElements = [] as DateTimeType[];
      for (const verificationDateValue of value) {
        const optErrMsg = `Invalid Consent.verification.verificationDate array item (${String(verificationDateValue)})`;
        const element = new DateTimeType(parseFhirPrimitiveData(verificationDateValue, fhirDateTimeSchema, optErrMsg));
        verificationDateElements.push(element);
      }
      this.verificationDate = verificationDateElements;
    } else {
      this.verificationDate = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `verificationDate` array property.
   *
   * @param value - the `verificationDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addVerificationDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Consent.verification.verificationDate array item (${String(value)})`;
      const element = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
      this.initVerificationDate();
      this.addVerificationDateElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `verificationDate` property exists and has a value; `false` otherwise
   */
  public hasVerificationDate(): boolean {
    return this.hasVerificationDateElement();
  }

  /**
   * Initialize the `verificationDate` property
   */
  private initVerificationDate(): void {
    if (!this.hasVerificationDate()) {
      this.verificationDate = [] as DateTimeType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Consent.verification';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.verified,
      this.verificationType,
      this.verifiedBy,
      this.verifiedWith,
      this.verificationDate,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConsentVerificationComponent {
    const dest = new ConsentVerificationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConsentVerificationComponent): void {
    super.copyValues(dest);
    dest.verified = this.verified ? this.verified.copy() : null;
    dest.verificationType = this.verificationType?.copy();
    dest.verifiedBy = this.verifiedBy?.copy();
    dest.verifiedWith = this.verifiedWith?.copy();
    const verificationDateList = copyListValues<DateTimeType>(this.verificationDate);
    dest.verificationDate = verificationDateList.length === 0 ? undefined : verificationDateList;
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

    if (this.hasVerifiedElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirBoolean>(this.getVerifiedElement()!, 'verified', jsonObj);
    } else {
      missingReqdProperties.push(`Consent.verification.verified`);
    }

    if (this.hasVerificationType()) {
      setFhirComplexJson(this.getVerificationType(), 'verificationType', jsonObj);
    }

    if (this.hasVerifiedBy()) {
      setFhirComplexJson(this.getVerifiedBy(), 'verifiedBy', jsonObj);
    }

    if (this.hasVerifiedWith()) {
      setFhirComplexJson(this.getVerifiedWith(), 'verifiedWith', jsonObj);
    }

    if (this.hasVerificationDate()) {
      setFhirPrimitiveListJson(this.getVerificationDateElement(), 'verificationDate', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ConsentProvisionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Constraints to the base Consent.policyRule/Consent.policy
 * - **Definition:** An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 *
 * @category Data Models: Resource
 * @see [FHIR Consent](http://hl7.org/fhir/StructureDefinition/Consent)
 */
export class ConsentProvisionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ConsentProvisionComponent` JSON to instantiate the ConsentProvisionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConsentProvisionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConsentProvisionComponent
   * @returns ConsentProvisionComponent data model or undefined for `ConsentProvisionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConsentProvisionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConsentProvisionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConsentProvisionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'actor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConsentProvisionActorComponent | undefined = ConsentProvisionActorComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addActor(component);
        }
      });
    }

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAction(datatype);
        }
      });
    }

    fieldName = 'securityLabel';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSecurityLabel(datatype);
        }
      });
    }

    fieldName = 'purpose';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPurpose(datatype);
        }
      });
    }

    fieldName = 'documentType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDocumentType(datatype);
        }
      });
    }

    fieldName = 'resourceType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addResourceType(datatype);
        }
      });
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCode(datatype);
        }
      });
    }

    fieldName = 'dataPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDataPeriod(datatype);
    }

    fieldName = 'data';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConsentProvisionDataComponent | undefined = ConsentProvisionDataComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addData(component);
        }
      });
    }

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Expression | undefined = Expression.parse(classJsonObj[fieldName]!, sourceField);
      instance.setExpression(datatype);
    }

    fieldName = 'provision';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConsentProvisionComponent | undefined = ConsentProvisionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProvision(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Consent.provision.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Timeframe for this provision
   * - **Definition:** Timeframe for this provision.
   * - **Comment:** This is the bound effective time of the consent and should be in the base provision in the Consent resource.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * Consent.provision.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who|what controlled by this provision (or group, by role)
   * - **Definition:** Who or what is controlled by this provision. Use group to identify a set of actors by some property they share (e.g. \'admitting officers\').
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actor?: ConsentProvisionActorComponent[] | undefined;

  /**
   * Consent.provision.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actions controlled by this provision
   * - **Definition:** Actions controlled by this provision.
   * - **Comment:** Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is \'read\'.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private action?: CodeableConcept[] | undefined;

  /**
   * Consent.provision.securityLabel Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Security Labels that define affected resources
   * - **Definition:** A security label, comprised of 0..* security label fields (Privacy tags), which define which resources are controlled by this exception.
   * - **Comment:** If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it\'s a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private securityLabel?: Coding[] | undefined;

  /**
   * Consent.provision.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Context of activities covered by this provision
   * - **Definition:** The context of the activities a user is taking - why the user is accessing the data - that are controlled by this provision.
   * - **Comment:** When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private purpose?: Coding[] | undefined;

  /**
   * Consent.provision.documentType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** e.g. Resource Type, Profile, CDA, etc
   * - **Definition:** The documentType(s) covered by this provision. The type can be a CDA document, or some other type that indicates what sort of information the consent relates to.
   * - **Comment:** Multiple types are or\'ed together. The intention of the documentType element is that the codes refer to document types defined in a standard somewhere.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private documentType?: Coding[] | undefined;

  /**
   * Consent.provision.resourceType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** e.g. Resource Type, Profile, etc
   * - **Definition:** The resourceType(s) covered by this provision. The type can be a FHIR resource type or a profile on a type that indicates what information the consent relates to.
   * - **Comment:** Multiple types are or\'ed together. The intention of the resourceType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resourceType?: Coding[] | undefined;

  /**
   * Consent.provision.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** e.g. LOINC or SNOMED CT code, etc. in the content
   * - **Definition:** If this code is found in an instance, then the provision applies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept[] | undefined;

  /**
   * Consent.provision.dataPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Timeframe for data controlled by this provision
   * - **Definition:** Clinical or Operational Relevant period of time that bounds the data controlled by this provision.
   * - **Comment:** This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dataPeriod?: Period | undefined;

  /**
   * Consent.provision.data Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Data controlled by this provision
   * - **Definition:** The resources controlled by this provision if specific resources are referenced.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private data?: ConsentProvisionDataComponent[] | undefined;

  /**
   * Consent.provision.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A computable expression of the consent
   * - **Definition:** A computable (FHIRPath or other) definition of what is controlled by this consent.
   * - **Comment:** Constraining the expression type for a specific implementation via profile is recommended
   * - **FHIR Type:** `Expression`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expression?: Expression | undefined;

  /**
   * Consent.provision.provision Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Nested Exception Provisions
   * - **Definition:** Provisions which provide exceptions to the base provision or subprovisions.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private provision?: ConsentProvisionComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Consent.provision.period; Provided element is not an instance of Period.`;
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
   * @returns the `actor` property value as a ConsentProvisionActorComponent array
   */
  public getActor(): ConsentProvisionActorComponent[] {
    return this.actor ?? ([] as ConsentProvisionActorComponent[]);
  }

  /**
   * Assigns the provided ConsentProvisionActorComponent array value to the `actor` property.
   *
   * @param value - the `actor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setActor(value: ConsentProvisionActorComponent[] | undefined): this {
    if (isDefinedList<ConsentProvisionActorComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision.actor; Provided value array has an element that is not an instance of ConsentProvisionActorComponent.`;
      assertFhirTypeList<ConsentProvisionActorComponent>(value, ConsentProvisionActorComponent, optErrMsg);
      this.actor = value;
    } else {
      this.actor = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConsentProvisionActorComponent value to the `actor` array property.
   *
   * @param value - the `actor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addActor(value: ConsentProvisionActorComponent | undefined): this {
    if (isDefined<ConsentProvisionActorComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision.actor; Provided element is not an instance of ConsentProvisionActorComponent.`;
      assertFhirType<ConsentProvisionActorComponent>(value, ConsentProvisionActorComponent, optErrMsg);
      this.initActor();
      this.actor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `actor` property exists and has a value; `false` otherwise
   */
  public hasActor(): boolean {
    return isDefinedList<ConsentProvisionActorComponent>(this.actor) && this.actor.some((item: ConsentProvisionActorComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `actor` property
   */
  private initActor(): void {
    if(!this.hasActor()) {
      this.actor = [] as ConsentProvisionActorComponent[];
    }
  }

  /**
   * @returns the `action` property value as a CodeableConcept array
   */
  public getAction(): CodeableConcept[] {
    return this.action ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.provision.action; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.action = value;
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.provision.action; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<CodeableConcept>(this.action) && this.action.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `securityLabel` property value as a Coding array
   */
  public getSecurityLabel(): Coding[] {
    return this.securityLabel ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `securityLabel` property.
   *
   * @param value - the `securityLabel` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSecurityLabel(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.securityLabel; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.securityLabel = value;
    } else {
      this.securityLabel = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `securityLabel` array property.
   *
   * @param value - the `securityLabel` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSecurityLabel(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.securityLabel; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initSecurityLabel();
      this.securityLabel?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabel` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabel(): boolean {
    return isDefinedList<Coding>(this.securityLabel) && this.securityLabel.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `securityLabel` property
   */
  private initSecurityLabel(): void {
    if(!this.hasSecurityLabel()) {
      this.securityLabel = [] as Coding[];
    }
  }

  /**
   * @returns the `purpose` property value as a Coding array
   */
  public getPurpose(): Coding[] {
    return this.purpose ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `purpose` property.
   *
   * @param value - the `purpose` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPurpose(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.purpose; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.purpose = value;
    } else {
      this.purpose = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `purpose` array property.
   *
   * @param value - the `purpose` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPurpose(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.purpose; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initPurpose();
      this.purpose?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurpose(): boolean {
    return isDefinedList<Coding>(this.purpose) && this.purpose.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `purpose` property
   */
  private initPurpose(): void {
    if(!this.hasPurpose()) {
      this.purpose = [] as Coding[];
    }
  }

  /**
   * @returns the `documentType` property value as a Coding array
   */
  public getDocumentType(): Coding[] {
    return this.documentType ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `documentType` property.
   *
   * @param value - the `documentType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDocumentType(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.documentType; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.documentType = value;
    } else {
      this.documentType = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `documentType` array property.
   *
   * @param value - the `documentType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDocumentType(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.documentType; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initDocumentType();
      this.documentType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `documentType` property exists and has a value; `false` otherwise
   */
  public hasDocumentType(): boolean {
    return isDefinedList<Coding>(this.documentType) && this.documentType.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `documentType` property
   */
  private initDocumentType(): void {
    if(!this.hasDocumentType()) {
      this.documentType = [] as Coding[];
    }
  }

  /**
   * @returns the `resourceType` property value as a Coding array
   */
  public getResourceType(): Coding[] {
    return this.resourceType ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `resourceType` property.
   *
   * @param value - the `resourceType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setResourceType(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.resourceType; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.resourceType = value;
    } else {
      this.resourceType = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `resourceType` array property.
   *
   * @param value - the `resourceType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addResourceType(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Consent.provision.resourceType; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initResourceType();
      this.resourceType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `resourceType` property exists and has a value; `false` otherwise
   */
  public hasResourceType(): boolean {
    return isDefinedList<Coding>(this.resourceType) && this.resourceType.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `resourceType` property
   */
  private initResourceType(): void {
    if(!this.hasResourceType()) {
      this.resourceType = [] as Coding[];
    }
  }

  /**
   * @returns the `code` property value as a CodeableConcept array
   */
  public getCode(): CodeableConcept[] {
    return this.code ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `code` property.
   *
   * @param value - the `code` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.provision.code; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `code` array property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Consent.provision.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCode();
      this.code?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefinedList<CodeableConcept>(this.code) && this.code.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `code` property
   */
  private initCode(): void {
    if(!this.hasCode()) {
      this.code = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `dataPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getDataPeriod(): Period {
    return this.dataPeriod ?? new Period();
  }

  /**
   * Assigns the provided DataPeriod object value to the `dataPeriod` property.
   *
   * @param value - the `dataPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDataPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Consent.provision.dataPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.dataPeriod = value;
    } else {
      this.dataPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dataPeriod` property exists and has a value; `false` otherwise
   */
  public hasDataPeriod(): boolean {
    return isDefined<Period>(this.dataPeriod) && !this.dataPeriod.isEmpty();
  }

  /**
   * @returns the `data` property value as a ConsentProvisionDataComponent array
   */
  public getData(): ConsentProvisionDataComponent[] {
    return this.data ?? ([] as ConsentProvisionDataComponent[]);
  }

  /**
   * Assigns the provided ConsentProvisionDataComponent array value to the `data` property.
   *
   * @param value - the `data` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setData(value: ConsentProvisionDataComponent[] | undefined): this {
    if (isDefinedList<ConsentProvisionDataComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision.data; Provided value array has an element that is not an instance of ConsentProvisionDataComponent.`;
      assertFhirTypeList<ConsentProvisionDataComponent>(value, ConsentProvisionDataComponent, optErrMsg);
      this.data = value;
    } else {
      this.data = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConsentProvisionDataComponent value to the `data` array property.
   *
   * @param value - the `data` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addData(value: ConsentProvisionDataComponent | undefined): this {
    if (isDefined<ConsentProvisionDataComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision.data; Provided element is not an instance of ConsentProvisionDataComponent.`;
      assertFhirType<ConsentProvisionDataComponent>(value, ConsentProvisionDataComponent, optErrMsg);
      this.initData();
      this.data?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `data` property exists and has a value; `false` otherwise
   */
  public hasData(): boolean {
    return isDefinedList<ConsentProvisionDataComponent>(this.data) && this.data.some((item: ConsentProvisionDataComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `data` property
   */
  private initData(): void {
    if(!this.hasData()) {
      this.data = [] as ConsentProvisionDataComponent[];
    }
  }

  /**
   * @returns the `expression` property value as a Expression object if defined; else an empty Expression object
   */
  public getExpression(): Expression {
    return this.expression ?? new Expression();
  }

  /**
   * Assigns the provided Expression object value to the `expression` property.
   *
   * @param value - the `expression` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExpression(value: Expression | undefined): this {
    if (isDefined<Expression>(value)) {
      const optErrMsg = `Invalid Consent.provision.expression; Provided element is not an instance of Expression.`;
      assertFhirType<Expression>(value, Expression, optErrMsg);
      this.expression = value;
    } else {
      this.expression = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpression(): boolean {
    return isDefined<Expression>(this.expression) && !this.expression.isEmpty();
  }

  /**
   * @returns the `provision` property value as a ConsentProvisionComponent array
   */
  public getProvision(): ConsentProvisionComponent[] {
    return this.provision ?? ([] as ConsentProvisionComponent[]);
  }

  /**
   * Assigns the provided ConsentProvisionComponent array value to the `provision` property.
   *
   * @param value - the `provision` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProvision(value: ConsentProvisionComponent[] | undefined): this {
    if (isDefinedList<ConsentProvisionComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision.provision; Provided value array has an element that is not an instance of ConsentProvisionComponent.`;
      assertFhirTypeList<ConsentProvisionComponent>(value, ConsentProvisionComponent, optErrMsg);
      this.provision = value;
    } else {
      this.provision = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConsentProvisionComponent value to the `provision` array property.
   *
   * @param value - the `provision` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProvision(value: ConsentProvisionComponent | undefined): this {
    if (isDefined<ConsentProvisionComponent>(value)) {
      const optErrMsg = `Invalid Consent.provision.provision; Provided element is not an instance of ConsentProvisionComponent.`;
      assertFhirType<ConsentProvisionComponent>(value, ConsentProvisionComponent, optErrMsg);
      this.initProvision();
      this.provision?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `provision` property exists and has a value; `false` otherwise
   */
  public hasProvision(): boolean {
    return isDefinedList<ConsentProvisionComponent>(this.provision) && this.provision.some((item: ConsentProvisionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `provision` property
   */
  private initProvision(): void {
    if(!this.hasProvision()) {
      this.provision = [] as ConsentProvisionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Consent.provision';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.period,
      this.actor,
      this.action,
      this.securityLabel,
      this.purpose,
      this.documentType,
      this.resourceType,
      this.code,
      this.dataPeriod,
      this.data,
      this.expression,
      this.provision,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConsentProvisionComponent {
    const dest = new ConsentProvisionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConsentProvisionComponent): void {
    super.copyValues(dest);
    dest.period = this.period?.copy();
    const actorList = copyListValues<ConsentProvisionActorComponent>(this.actor);
    dest.actor = actorList.length === 0 ? undefined : actorList;
    const actionList = copyListValues<CodeableConcept>(this.action);
    dest.action = actionList.length === 0 ? undefined : actionList;
    const securityLabelList = copyListValues<Coding>(this.securityLabel);
    dest.securityLabel = securityLabelList.length === 0 ? undefined : securityLabelList;
    const purposeList = copyListValues<Coding>(this.purpose);
    dest.purpose = purposeList.length === 0 ? undefined : purposeList;
    const documentTypeList = copyListValues<Coding>(this.documentType);
    dest.documentType = documentTypeList.length === 0 ? undefined : documentTypeList;
    const resourceTypeList = copyListValues<Coding>(this.resourceType);
    dest.resourceType = resourceTypeList.length === 0 ? undefined : resourceTypeList;
    const codeList = copyListValues<CodeableConcept>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    dest.dataPeriod = this.dataPeriod?.copy();
    const dataList = copyListValues<ConsentProvisionDataComponent>(this.data);
    dest.data = dataList.length === 0 ? undefined : dataList;
    dest.expression = this.expression?.copy();
    const provisionList = copyListValues<ConsentProvisionComponent>(this.provision);
    dest.provision = provisionList.length === 0 ? undefined : provisionList;
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

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasActor()) {
      setFhirBackboneElementListJson(this.getActor(), 'actor', jsonObj);
    }

    if (this.hasAction()) {
      setFhirComplexListJson(this.getAction(), 'action', jsonObj);
    }

    if (this.hasSecurityLabel()) {
      setFhirComplexListJson(this.getSecurityLabel(), 'securityLabel', jsonObj);
    }

    if (this.hasPurpose()) {
      setFhirComplexListJson(this.getPurpose(), 'purpose', jsonObj);
    }

    if (this.hasDocumentType()) {
      setFhirComplexListJson(this.getDocumentType(), 'documentType', jsonObj);
    }

    if (this.hasResourceType()) {
      setFhirComplexListJson(this.getResourceType(), 'resourceType', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasDataPeriod()) {
      setFhirComplexJson(this.getDataPeriod(), 'dataPeriod', jsonObj);
    }

    if (this.hasData()) {
      setFhirBackboneElementListJson(this.getData(), 'data', jsonObj);
    }

    if (this.hasExpression()) {
      setFhirComplexJson(this.getExpression(), 'expression', jsonObj);
    }

    if (this.hasProvision()) {
      setFhirBackboneElementListJson(this.getProvision(), 'provision', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConsentProvisionActorComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who|what controlled by this provision (or group, by role)
 * - **Definition:** Who or what is controlled by this provision. Use group to identify a set of actors by some property they share (e.g. \'admitting officers\').
 *
 * @category Data Models: Resource
 * @see [FHIR Consent](http://hl7.org/fhir/StructureDefinition/Consent)
 */
export class ConsentProvisionActorComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ConsentProvisionActorComponent` JSON to instantiate the ConsentProvisionActorComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConsentProvisionActorComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConsentProvisionActorComponent
   * @returns ConsentProvisionActorComponent data model or undefined for `ConsentProvisionActorComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConsentProvisionActorComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConsentProvisionActorComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConsentProvisionActorComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReference(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Consent.provision.actor.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How the actor is involved
   * - **Definition:** How the individual is involved in the resources content that is described in the exception.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: CodeableConcept | undefined;

  /**
   * Consent.provision.actor.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resource for the actor (or group, by role)
   * - **Definition:** The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. \'admitting officers\').
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Consent.provision.actor.role; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `reference` property value as a Reference object; else an empty Reference object
   */
  public getReference(): Reference {
    return this.reference ?? new Reference();
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('Consent.provision.actor.reference', ['Device','Group','CareTeam','Organization','Patient','Practitioner','RelatedPerson','PractitionerRole',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.provision.actor.reference', [
    'Device',
  
    'Group',
  
    'CareTeam',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'RelatedPerson',
  
    'PractitionerRole',
  ])
  public setReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
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
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Consent.provision.actor';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.role,
      this.reference,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConsentProvisionActorComponent {
    const dest = new ConsentProvisionActorComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConsentProvisionActorComponent): void {
    super.copyValues(dest);
    dest.role = this.role?.copy();
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

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    if (this.hasReference()) {
      setFhirComplexJson(this.getReference(), 'reference', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConsentProvisionDataComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Data controlled by this provision
 * - **Definition:** The resources controlled by this provision if specific resources are referenced.
 *
 * @category Data Models: Resource
 * @see [FHIR Consent](http://hl7.org/fhir/StructureDefinition/Consent)
 */
export class ConsentProvisionDataComponent extends BackboneElement implements IBackboneElement {
  constructor(meaning: EnumCodeType | CodeType | fhirCode | null = null, reference: Reference | null = null) {
    super();

    this.consentDataMeaningEnum = new ConsentDataMeaningEnum();

    this.meaning = constructorCodeValueAsEnumCodeType<ConsentDataMeaningEnum>(
      meaning,
      ConsentDataMeaningEnum,
      this.consentDataMeaningEnum,
      'Consent.provision.data.meaning',
    );

    this.reference = null;
    if (isDefined<Reference>(reference)) {
      this.setReference(reference);
    }
  }

  /**
   * Parse the provided `ConsentProvisionDataComponent` JSON to instantiate the ConsentProvisionDataComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConsentProvisionDataComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConsentProvisionDataComponent
   * @returns ConsentProvisionDataComponent data model or undefined for `ConsentProvisionDataComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConsentProvisionDataComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConsentProvisionDataComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConsentProvisionDataComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'meaning';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setMeaningElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setReference(datatype);
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
   * FHIR CodeSystem: ConsentDataMeaning
   *
   * @see {@link ConsentDataMeaningEnum }
   */
  private readonly consentDataMeaningEnum: ConsentDataMeaningEnum;

  /**
   * Consent.provision.data.meaning Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** instance | related | dependents | authoredby
   * - **Definition:** How the resource reference is interpreted when testing consent restrictions.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  private meaning: EnumCodeType | null;

  /**
   * Consent.provision.data.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual data reference
   * - **Definition:** A reference to a specific resource that defines which resources are covered by this consent.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reference: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `meaning` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public getMeaningEnumType(): EnumCodeType | null {
    return this.meaning;
  }

  /**
   * Assigns the provided EnumCodeType value to the `meaning` property.
   *
   * @param enumType - the `meaning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public setMeaningEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `Consent.provision.data.meaning is required`);
    const errMsgPrefix = `Invalid Consent.provision.data.meaning`;
    assertEnumCodeType<ConsentDataMeaningEnum>(enumType, ConsentDataMeaningEnum, errMsgPrefix);
    this.meaning = enumType;
    return this;
  }

  /**
   * @returns `true` if the `meaning` property exists and has a value; `false` otherwise
   */
  public hasMeaningEnumType(): boolean {
    return isDefined<EnumCodeType>(this.meaning) && !this.meaning.isEmpty() && this.meaning.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `meaning` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public getMeaningElement(): CodeType | null {
    if (this.meaning === null) {
      return null;
    }
    return this.meaning as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `meaning` property.
   *
   * @param element - the `meaning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public setMeaningElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Consent.provision.data.meaning is required`);
    const optErrMsg = `Invalid Consent.provision.data.meaning; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.meaning = new EnumCodeType(element, this.consentDataMeaningEnum);
    return this;
  }

  /**
   * @returns `true` if the `meaning` property exists and has a value; `false` otherwise
   */
  public hasMeaningElement(): boolean {
    return this.hasMeaningEnumType();
  }

  /**
   * @returns the `meaning` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public getMeaning(): fhirCode | null {
    if (this.meaning === null) {
      return null;
    }
    return this.meaning.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `meaning` property.
   *
   * @param value - the `meaning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ConsentDataMeaningEnum }
   */
  public setMeaning(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Consent.provision.data.meaning is required`);
    const optErrMsg = `Invalid Consent.provision.data.meaning (${String(value)})`;
    this.meaning = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.consentDataMeaningEnum);
    return this;
  }

  /**
   * @returns `true` if the `meaning` property exists and has a value; `false` otherwise
   */
  public hasMeaning(): boolean {
    return this.hasMeaningEnumType();
  }

  /**
   * @returns the `reference` property value as a Reference object if defined; else null
   */
  public getReference(): Reference | null {
    return this.reference;
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('Consent.provision.data.reference', ['Resource',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Consent.provision.data.reference', [
    'Resource',
  ])
  public setReference(value: Reference): this {
    assertIsDefined<Reference>(value, `Consent.provision.data.reference is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.reference = value;
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Consent.provision.data';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.meaning,
      this.reference,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConsentProvisionDataComponent {
    const dest = new ConsentProvisionDataComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConsentProvisionDataComponent): void {
    super.copyValues(dest);
    dest.meaning = this.meaning ? this.meaning.copy() : null;
    dest.reference = this.reference ? this.reference.copy() : null;
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

    if (this.hasMeaningElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getMeaningElement()!, 'meaning', jsonObj);
    } else {
      missingReqdProperties.push(`Consent.provision.data.meaning`);
    }

    if (this.hasReference()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getReference()!, 'reference', jsonObj);
    } else {
      missingReqdProperties.push(`Consent.provision.data.reference`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
