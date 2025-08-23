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
 * Coverage Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Coverage
 * StructureDefinition.name: Coverage
 * StructureDefinition.description: Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 * StructureDefinition.fhirVersion: 4.3.0
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
  fhirPositiveInt,
  fhirPositiveIntSchema,
  fhirString,
  fhirStringSchema,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, Money, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference } from '../complex-types/complex-datatypes';
import { FmStatusEnum } from '../code-systems/FmStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Coverage Class
 *
 * @remarks
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 *
 * Coverage provides a link between covered parties (patients) and the payors of their healthcare costs (both insurance and self-pay).
 *
 * **FHIR Specification**
 * - **Short:** Insurance or medical plan or a payment agreement
 * - **Definition:** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 * - **Comment:** The Coverage resource contains the insurance card level information, which is customary to provide on claims and other communications between providers and insurers.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR Coverage](http://hl7.org/fhir/StructureDefinition/Coverage)
 */
export class Coverage extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, beneficiary: Reference | null = null, payor: Reference[] | null = null) {
    super();

    this.fmStatusEnum = new FmStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<FmStatusEnum>(
      status,
      FmStatusEnum,
      this.fmStatusEnum,
      'Coverage.status',
    );

    this.beneficiary = null;
    if (isDefined<Reference>(beneficiary)) {
      this.setBeneficiary(beneficiary);
    }

    this.payor = null;
    if (isDefinedList<Reference>(payor)) {
      this.setPayor(payor);
    }
  }

  /**
   * Parse the provided `Coverage` JSON to instantiate the Coverage data model.
   *
   * @param sourceJson - JSON representing FHIR `Coverage`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Coverage
   * @returns Coverage data model or undefined for `Coverage`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Coverage | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Coverage';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Coverage();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Coverage');
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
      instance.setType(datatype);
    }

    fieldName = 'policyHolder';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPolicyHolder(datatype);
    }

    fieldName = 'subscriber';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubscriber(datatype);
    }

    fieldName = 'subscriberId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSubscriberIdElement(datatype);
    }

    fieldName = 'beneficiary';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setBeneficiary(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'dependent';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDependentElement(datatype);
    }

    fieldName = 'relationship';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRelationship(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'payor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addPayor(datatype);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'class';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CoverageClassComponent | undefined = CoverageClassComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addClass(component);
        }
      });
    }

    fieldName = 'order';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setOrderElement(datatype);
    }

    fieldName = 'network';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNetworkElement(datatype);
    }

    fieldName = 'costToBeneficiary';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CoverageCostToBeneficiaryComponent | undefined = CoverageCostToBeneficiaryComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCostToBeneficiary(component);
        }
      });
    }

    fieldName = 'subrogation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setSubrogationElement(datatype);
    }

    fieldName = 'contract';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addContract(datatype);
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
   * Coverage.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for the coverage
   * - **Definition:** A unique identifier assigned to this coverage.
   * - **Comment:** The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
   * - **Requirements:** Allows coverages to be distinguished and referenced.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: FmStatus
   *
   * @see {@link FmStatusEnum }
   */
  private readonly fmStatusEnum: FmStatusEnum;

  /**
   * Coverage.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | cancelled | draft | entered-in-error
   * - **Definition:** The status of the resource instance.
   * - **Comment:** This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
   * - **Requirements:** Need to track the status of the resource as \'draft\' resources may undergo further edits while \'active\' resources are immutable and may only have their status changed to \'cancelled\'.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Coverage.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coverage category such as medical or accident
   * - **Definition:** The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
   * - **Requirements:** The order of application of coverages is dependent on the types of coverage.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Coverage.policyHolder Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Owner of the policy
   * - **Definition:** The party who \'owns\' the insurance policy.
   * - **Comment:** For example: may be an individual, corporation or the subscriber\'s employer.
   * - **Requirements:** This provides employer information in the case of Worker\'s Compensation and other policies.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private policyHolder?: Reference | undefined;

  /**
   * Coverage.subscriber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subscriber to the policy
   * - **Definition:** The party who has signed-up for or \'owns\' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.
   * - **Comment:** May be self or a parent in the case of dependants.
   * - **Requirements:** This is the party who is entitled to the benfits under the policy.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subscriber?: Reference | undefined;

  /**
   * Coverage.subscriberId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** ID assigned to the subscriber
   * - **Definition:** The insurer assigned ID for the Subscriber.
   * - **Requirements:** The insurer requires this identifier on correspondance and claims (digital and otherwise).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subscriberId?: StringType | undefined;

  /**
   * Coverage.beneficiary Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Plan beneficiary
   * - **Definition:** The party who benefits from the insurance coverage; the patient when products and/or services are provided.
   * - **Requirements:** This is the party who receives treatment for which the costs are reimbursed under the coverage.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private beneficiary: Reference | null;

  /**
   * Coverage.dependent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dependent number
   * - **Definition:** A unique identifier for a dependent under the coverage.
   * - **Comment:** Periodically the member number is constructed from the subscriberId and the dependant number.
   * - **Requirements:** For some coverages a single identifier is issued to the Subscriber and then a unique dependent number is issued to each beneficiary.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dependent?: StringType | undefined;

  /**
   * Coverage.relationship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Beneficiary relationship to the subscriber
   * - **Definition:** The relationship of beneficiary (patient) to the subscriber.
   * - **Comment:** Typically, an individual uses policies which are theirs (relationship=\'self\') before policies owned by others.
   * - **Requirements:** To determine relationship between the patient and the subscriber to determine coordination of benefits.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relationship?: CodeableConcept | undefined;

  /**
   * Coverage.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coverage start and end dates
   * - **Definition:** Time period during which the coverage is in force. A missing start date indicates the start date isn\'t known, a missing end date means the coverage is continuing to be in force.
   * - **Requirements:** Some insurers require the submission of the coverage term.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * Coverage.payor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Issuer of the policy
   * - **Definition:** The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements.
   * - **Comment:** May provide multiple identifiers such as insurance company identifier or business identifier (BIN number). For selfpay it may provide multiple paying persons and/or organizations.
   * - **Requirements:** Need to identify the issuer to target for claim processing and for coordination of benefit processing.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private payor: Reference[] | null;

  /**
   * Coverage.class Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional coverage classifications
   * - **Definition:** A suite of underwriter specific classifiers.
   * - **Comment:** For example may be used to identify a class of coverage or employer group, Policy, Plan.
   * - **Requirements:** The codes provided on the health card which identify or confirm the specific policy for the insurer.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private class_?: CoverageClassComponent[] | undefined;

  /**
   * Coverage.order Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relative order of the coverage
   * - **Definition:** The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
   * - **Requirements:** Used in managing the coordination of benefits.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private order?: PositiveIntType | undefined;

  /**
   * Coverage.network Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Insurer network
   * - **Definition:** The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the \'in-network\' rate, otherwise \'out of network\' terms and conditions apply.
   * - **Requirements:** Used in referral for treatment and in claims processing.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private network?: StringType | undefined;

  /**
   * Coverage.costToBeneficiary Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient payments for services/products
   * - **Definition:** A suite of codes indicating the cost category and associated amount which have been detailed in the policy and may have been  included on the health card.
   * - **Comment:** For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
   * - **Requirements:** Required by providers to manage financial transaction with the patient.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private costToBeneficiary?: CoverageCostToBeneficiaryComponent[] | undefined;

  /**
   * Coverage.subrogation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reimbursement to insurer
   * - **Definition:** When \'subrogation=true\' this insurance instance has been included not for adjudication but to provide insurers with the details to recover costs.
   * - **Comment:** Typically, automotive and worker\'s compensation policies would be flagged with \'subrogation=true\' to enable healthcare payors to collect against accident claims.
   * - **Requirements:** See definition for when to be used.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subrogation?: BooleanType | undefined;

  /**
   * Coverage.contract Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract details
   * - **Definition:** The policy(s) which constitute this insurance coverage.
   * - **Requirements:** To reference the legally binding contract between the policy holder and the insurer.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Contract',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contract?: Reference[] | undefined;

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
      const optErrMsg = `Invalid Coverage.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Coverage.identifier; Provided element is not an instance of Identifier.`;
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
    assertIsDefined<EnumCodeType>(enumType, `Coverage.status is required`);
    const errMsgPrefix = `Invalid Coverage.status`;
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
    assertIsDefined<CodeType>(element, `Coverage.status is required`);
    const optErrMsg = `Invalid Coverage.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `Coverage.status is required`);
    const optErrMsg = `Invalid Coverage.status (${String(value)})`;
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
      const optErrMsg = `Invalid Coverage.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `policyHolder` property value as a Reference object; else an empty Reference object
   */
  public getPolicyHolder(): Reference {
    return this.policyHolder ?? new Reference();
  }

  /**
   * Assigns the provided PolicyHolder object value to the `policyHolder` property.
   *
   * @decorator `@ReferenceTargets('Coverage.policyHolder', ['Patient','RelatedPerson','Organization',])`
   *
   * @param value - the `policyHolder` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Coverage.policyHolder', [
    'Patient',
  
    'RelatedPerson',
  
    'Organization',
  ])
  public setPolicyHolder(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.policyHolder = value;
    } else {
      this.policyHolder = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `policyHolder` property exists and has a value; `false` otherwise
   */
  public hasPolicyHolder(): boolean {
    return isDefined<Reference>(this.policyHolder) && !this.policyHolder.isEmpty();
  }

  /**
   * @returns the `subscriber` property value as a Reference object; else an empty Reference object
   */
  public getSubscriber(): Reference {
    return this.subscriber ?? new Reference();
  }

  /**
   * Assigns the provided Subscriber object value to the `subscriber` property.
   *
   * @decorator `@ReferenceTargets('Coverage.subscriber', ['Patient','RelatedPerson',])`
   *
   * @param value - the `subscriber` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Coverage.subscriber', [
    'Patient',
  
    'RelatedPerson',
  ])
  public setSubscriber(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subscriber = value;
    } else {
      this.subscriber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subscriber` property exists and has a value; `false` otherwise
   */
  public hasSubscriber(): boolean {
    return isDefined<Reference>(this.subscriber) && !this.subscriber.isEmpty();
  }

  /**
   * @returns the `subscriberId` property value as a StringType object if defined; else an empty StringType object
   */
  public getSubscriberIdElement(): StringType {
    return this.subscriberId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `subscriberId` property.
   *
   * @param element - the `subscriberId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubscriberIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Coverage.subscriberId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.subscriberId = element;
    } else {
      this.subscriberId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subscriberId` property exists and has a value; `false` otherwise
   */
  public hasSubscriberIdElement(): boolean {
    return isDefined<StringType>(this.subscriberId) && !this.subscriberId.isEmpty();
  }

  /**
   * @returns the `subscriberId` property value as a fhirString if defined; else undefined
   */
  public getSubscriberId(): fhirString | undefined {
    return this.subscriberId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `subscriberId` property.
   *
   * @param value - the `subscriberId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubscriberId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Coverage.subscriberId (${String(value)})`;
      this.subscriberId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.subscriberId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subscriberId` property exists and has a value; `false` otherwise
   */
  public hasSubscriberId(): boolean {
    return this.hasSubscriberIdElement();
  }

  /**
   * @returns the `beneficiary` property value as a Reference object if defined; else null
   */
  public getBeneficiary(): Reference | null {
    return this.beneficiary;
  }

  /**
   * Assigns the provided Beneficiary object value to the `beneficiary` property.
   *
   * @decorator `@ReferenceTargets('Coverage.beneficiary', ['Patient',])`
   *
   * @param value - the `beneficiary` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Coverage.beneficiary', [
    'Patient',
  ])
  public setBeneficiary(value: Reference): this {
    assertIsDefined<Reference>(value, `Coverage.beneficiary is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.beneficiary = value;
    return this;
  }

  /**
   * @returns `true` if the `beneficiary` property exists and has a value; `false` otherwise
   */
  public hasBeneficiary(): boolean {
    return isDefined<Reference>(this.beneficiary) && !this.beneficiary.isEmpty();
  }

  /**
   * @returns the `dependent` property value as a StringType object if defined; else an empty StringType object
   */
  public getDependentElement(): StringType {
    return this.dependent ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `dependent` property.
   *
   * @param element - the `dependent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDependentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Coverage.dependent; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.dependent = element;
    } else {
      this.dependent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dependent` property exists and has a value; `false` otherwise
   */
  public hasDependentElement(): boolean {
    return isDefined<StringType>(this.dependent) && !this.dependent.isEmpty();
  }

  /**
   * @returns the `dependent` property value as a fhirString if defined; else undefined
   */
  public getDependent(): fhirString | undefined {
    return this.dependent?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `dependent` property.
   *
   * @param value - the `dependent` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDependent(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Coverage.dependent (${String(value)})`;
      this.dependent = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.dependent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dependent` property exists and has a value; `false` otherwise
   */
  public hasDependent(): boolean {
    return this.hasDependentElement();
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
      const optErrMsg = `Invalid Coverage.relationship; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Coverage.period; Provided element is not an instance of Period.`;
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
   * @returns the `payor` property value as a Reference array
   */
  public getPayor(): Reference[] {
    return this.payor ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `payor` property.
   *
   * @decorator `@ReferenceTargets('Coverage.payor', ['Organization','Patient','RelatedPerson',])`
   *
   * @param value - the `payor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Coverage.payor', [
    'Organization',
  
    'Patient',
  
    'RelatedPerson',
  ])
  public setPayor(value: Reference[]): this {
    assertIsDefinedList<Reference>(value, `Coverage.payor is required`);
    // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.payor = value;
    return this;
  }

  /**
   * Add the provided Reference value to the `payor` array property.
   *
   * @decorator `@ReferenceTargets('Coverage.payor', ['Organization','Patient','RelatedPerson',])`
   *
   * @param value - the `payor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Coverage.payor', [
    'Organization',
  
    'Patient',
  
    'RelatedPerson',
  ])
  public addPayor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPayor();
      this.payor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `payor` property exists and has a value; `false` otherwise
   */
  public hasPayor(): boolean {
    return isDefinedList<Reference>(this.payor) && this.payor.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `payor` property
   */
  private initPayor(): void {
    if (!this.hasPayor()) {
      this.payor = [] as Reference[];
    }
  }

  /**
   * @returns the `class_` property value as a CoverageClassComponent array
   */
  public getClass(): CoverageClassComponent[] {
    return this.class_ ?? ([] as CoverageClassComponent[]);
  }

  /**
   * Assigns the provided CoverageClassComponent array value to the `class_` property.
   *
   * @param value - the `class_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClass(value: CoverageClassComponent[] | undefined): this {
    if (isDefinedList<CoverageClassComponent>(value)) {
      const optErrMsg = `Invalid Coverage.class; Provided value array has an element that is not an instance of CoverageClassComponent.`;
      assertFhirTypeList<CoverageClassComponent>(value, CoverageClassComponent, optErrMsg);
      this.class_ = value;
    } else {
      this.class_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CoverageClassComponent value to the `class_` array property.
   *
   * @param value - the `class_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClass(value: CoverageClassComponent | undefined): this {
    if (isDefined<CoverageClassComponent>(value)) {
      const optErrMsg = `Invalid Coverage.class; Provided element is not an instance of CoverageClassComponent.`;
      assertFhirType<CoverageClassComponent>(value, CoverageClassComponent, optErrMsg);
      this.initClass();
      this.class_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `class_` property exists and has a value; `false` otherwise
   */
  public hasClass(): boolean {
    return isDefinedList<CoverageClassComponent>(this.class_) && this.class_.some((item: CoverageClassComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `class_` property
   */
  private initClass(): void {
    if(!this.hasClass()) {
      this.class_ = [] as CoverageClassComponent[];
    }
  }

  /**
   * @returns the `order` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getOrderElement(): PositiveIntType {
    return this.order ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `order` property.
   *
   * @param element - the `order` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOrderElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Coverage.order; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.order = element;
    } else {
      this.order = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `order` property exists and has a value; `false` otherwise
   */
  public hasOrderElement(): boolean {
    return isDefined<PositiveIntType>(this.order) && !this.order.isEmpty();
  }

  /**
   * @returns the `order` property value as a fhirPositiveInt if defined; else undefined
   */
  public getOrder(): fhirPositiveInt | undefined {
    return this.order?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `order` property.
   *
   * @param value - the `order` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOrder(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Coverage.order (${String(value)})`;
      this.order = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.order = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `order` property exists and has a value; `false` otherwise
   */
  public hasOrder(): boolean {
    return this.hasOrderElement();
  }

  /**
   * @returns the `network` property value as a StringType object if defined; else an empty StringType object
   */
  public getNetworkElement(): StringType {
    return this.network ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `network` property.
   *
   * @param element - the `network` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNetworkElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Coverage.network; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.network = element;
    } else {
      this.network = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `network` property exists and has a value; `false` otherwise
   */
  public hasNetworkElement(): boolean {
    return isDefined<StringType>(this.network) && !this.network.isEmpty();
  }

  /**
   * @returns the `network` property value as a fhirString if defined; else undefined
   */
  public getNetwork(): fhirString | undefined {
    return this.network?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `network` property.
   *
   * @param value - the `network` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNetwork(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Coverage.network (${String(value)})`;
      this.network = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.network = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `network` property exists and has a value; `false` otherwise
   */
  public hasNetwork(): boolean {
    return this.hasNetworkElement();
  }

  /**
   * @returns the `costToBeneficiary` property value as a CoverageCostToBeneficiaryComponent array
   */
  public getCostToBeneficiary(): CoverageCostToBeneficiaryComponent[] {
    return this.costToBeneficiary ?? ([] as CoverageCostToBeneficiaryComponent[]);
  }

  /**
   * Assigns the provided CoverageCostToBeneficiaryComponent array value to the `costToBeneficiary` property.
   *
   * @param value - the `costToBeneficiary` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCostToBeneficiary(value: CoverageCostToBeneficiaryComponent[] | undefined): this {
    if (isDefinedList<CoverageCostToBeneficiaryComponent>(value)) {
      const optErrMsg = `Invalid Coverage.costToBeneficiary; Provided value array has an element that is not an instance of CoverageCostToBeneficiaryComponent.`;
      assertFhirTypeList<CoverageCostToBeneficiaryComponent>(value, CoverageCostToBeneficiaryComponent, optErrMsg);
      this.costToBeneficiary = value;
    } else {
      this.costToBeneficiary = undefined;
    }
    return this;
  }

  /**
   * Add the provided CoverageCostToBeneficiaryComponent value to the `costToBeneficiary` array property.
   *
   * @param value - the `costToBeneficiary` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCostToBeneficiary(value: CoverageCostToBeneficiaryComponent | undefined): this {
    if (isDefined<CoverageCostToBeneficiaryComponent>(value)) {
      const optErrMsg = `Invalid Coverage.costToBeneficiary; Provided element is not an instance of CoverageCostToBeneficiaryComponent.`;
      assertFhirType<CoverageCostToBeneficiaryComponent>(value, CoverageCostToBeneficiaryComponent, optErrMsg);
      this.initCostToBeneficiary();
      this.costToBeneficiary?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `costToBeneficiary` property exists and has a value; `false` otherwise
   */
  public hasCostToBeneficiary(): boolean {
    return isDefinedList<CoverageCostToBeneficiaryComponent>(this.costToBeneficiary) && this.costToBeneficiary.some((item: CoverageCostToBeneficiaryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `costToBeneficiary` property
   */
  private initCostToBeneficiary(): void {
    if(!this.hasCostToBeneficiary()) {
      this.costToBeneficiary = [] as CoverageCostToBeneficiaryComponent[];
    }
  }

  /**
   * @returns the `subrogation` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getSubrogationElement(): BooleanType {
    return this.subrogation ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `subrogation` property.
   *
   * @param element - the `subrogation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubrogationElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Coverage.subrogation; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.subrogation = element;
    } else {
      this.subrogation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subrogation` property exists and has a value; `false` otherwise
   */
  public hasSubrogationElement(): boolean {
    return isDefined<BooleanType>(this.subrogation) && !this.subrogation.isEmpty();
  }

  /**
   * @returns the `subrogation` property value as a fhirBoolean if defined; else undefined
   */
  public getSubrogation(): fhirBoolean | undefined {
    return this.subrogation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `subrogation` property.
   *
   * @param value - the `subrogation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubrogation(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Coverage.subrogation (${String(value)})`;
      this.subrogation = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.subrogation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subrogation` property exists and has a value; `false` otherwise
   */
  public hasSubrogation(): boolean {
    return this.hasSubrogationElement();
  }

  /**
   * @returns the `contract` property value as a Reference array
   */
  public getContract(): Reference[] {
    return this.contract ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `contract` property.
   *
   * @decorator `@ReferenceTargets('Coverage.contract', ['Contract',])`
   *
   * @param value - the `contract` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Coverage.contract', [
    'Contract',
  ])
  public setContract(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.contract = value;
    } else {
      this.contract = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `contract` array property.
   *
   * @decorator `@ReferenceTargets('Coverage.contract', ['Contract',])`
   *
   * @param value - the `contract` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Coverage.contract', [
    'Contract',
  ])
  public addContract(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initContract();
      this.contract?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contract` property exists and has a value; `false` otherwise
   */
  public hasContract(): boolean {
    return isDefinedList<Reference>(this.contract) && this.contract.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `contract` property
   */
  private initContract(): void {
    if (!this.hasContract()) {
      this.contract = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Coverage';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.type_,
      this.policyHolder,
      this.subscriber,
      this.subscriberId,
      this.beneficiary,
      this.dependent,
      this.relationship,
      this.period,
      this.payor,
      this.class_,
      this.order,
      this.network,
      this.costToBeneficiary,
      this.subrogation,
      this.contract,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Coverage {
    const dest = new Coverage();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Coverage): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.type_ = this.type_?.copy();
    dest.policyHolder = this.policyHolder?.copy();
    dest.subscriber = this.subscriber?.copy();
    dest.subscriberId = this.subscriberId?.copy();
    dest.beneficiary = this.beneficiary ? this.beneficiary.copy() : null;
    dest.dependent = this.dependent?.copy();
    dest.relationship = this.relationship?.copy();
    dest.period = this.period?.copy();
    const payorList = copyListValues<Reference>(this.payor);
    dest.payor = payorList.length === 0 ? null : payorList;
    const classList = copyListValues<CoverageClassComponent>(this.class_);
    dest.class_ = classList.length === 0 ? undefined : classList;
    dest.order = this.order?.copy();
    dest.network = this.network?.copy();
    const costToBeneficiaryList = copyListValues<CoverageCostToBeneficiaryComponent>(this.costToBeneficiary);
    dest.costToBeneficiary = costToBeneficiaryList.length === 0 ? undefined : costToBeneficiaryList;
    dest.subrogation = this.subrogation?.copy();
    const contractList = copyListValues<Reference>(this.contract);
    dest.contract = contractList.length === 0 ? undefined : contractList;
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
      missingReqdProperties.push(`Coverage.status`);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasPolicyHolder()) {
      setFhirComplexJson(this.getPolicyHolder(), 'policyHolder', jsonObj);
    }

    if (this.hasSubscriber()) {
      setFhirComplexJson(this.getSubscriber(), 'subscriber', jsonObj);
    }

    if (this.hasSubscriberIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSubscriberIdElement(), 'subscriberId', jsonObj);
    }

    if (this.hasBeneficiary()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getBeneficiary()!, 'beneficiary', jsonObj);
    } else {
      missingReqdProperties.push(`Coverage.beneficiary`);
    }

    if (this.hasDependentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDependentElement(), 'dependent', jsonObj);
    }

    if (this.hasRelationship()) {
      setFhirComplexJson(this.getRelationship(), 'relationship', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasPayor()) {
      setFhirComplexListJson(this.getPayor(), 'payor', jsonObj);
    } else {
      missingReqdProperties.push(`Coverage.payor`);
    }

    if (this.hasClass()) {
      setFhirBackboneElementListJson(this.getClass(), 'class', jsonObj);
    }

    if (this.hasOrderElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getOrderElement(), 'order', jsonObj);
    }

    if (this.hasNetworkElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNetworkElement(), 'network', jsonObj);
    }

    if (this.hasCostToBeneficiary()) {
      setFhirBackboneElementListJson(this.getCostToBeneficiary(), 'costToBeneficiary', jsonObj);
    }

    if (this.hasSubrogationElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getSubrogationElement(), 'subrogation', jsonObj);
    }

    if (this.hasContract()) {
      setFhirComplexListJson(this.getContract(), 'contract', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * CoverageClassComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Additional coverage classifications
 * - **Definition:** A suite of underwriter specific classifiers.
 * - **Comment:** For example may be used to identify a class of coverage or employer group, Policy, Plan.
 * - **Requirements:** The codes provided on the health card which identify or confirm the specific policy for the insurer.
 *
 * @category Data Models: Resource
 * @see [FHIR Coverage](http://hl7.org/fhir/StructureDefinition/Coverage)
 */
export class CoverageClassComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, value: StringType | fhirString | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.value = null;
    if (isDefined<StringType | fhirString>(value)) {
      if (value instanceof PrimitiveType) {
        this.setValueElement(value);
      } else {
        this.setValue(value);
      }
    }
  }

  /**
   * Parse the provided `CoverageClassComponent` JSON to instantiate the CoverageClassComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CoverageClassComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CoverageClassComponent
   * @returns CoverageClassComponent data model or undefined for `CoverageClassComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CoverageClassComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CoverageClassComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CoverageClassComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setValueElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Coverage.class.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of class such as \'group\' or \'plan\'
   * - **Definition:** The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
   * - **Requirements:** The insurer issued label for a specific health card value.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * Coverage.class.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value associated with the type
   * - **Definition:** The alphanumeric string value associated with the insurer issued label.
   * - **Comment:** For example, the Group or Plan number.
   * - **Requirements:** The insurer issued label and value are necessary to identify the specific policy.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private value: StringType | null;

  /**
   * Coverage.class.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human readable description of the type and value
   * - **Definition:** A short description for the class.
   * - **Requirements:** Used to provide a meaningful description in correspondence to the patient.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

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
    assertIsDefined<CodeableConcept>(value, `Coverage.class.type is required`);
    const optErrMsg = `Invalid Coverage.class.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueElement(): StringType | null {
    return this.value;
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: StringType): this {
    assertIsDefined<StringType>(element, `Coverage.class.value is required`);
    const optErrMsg = `Invalid Coverage.class.value; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.value = element;
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValueElement(): boolean {
    return isDefined<StringType>(this.value) && !this.value.isEmpty();
  }

  /**
   * @returns the `value` property value as a fhirString if defined; else null
   */
  public getValue(): fhirString | null {
    if (this.value?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.value.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `value` property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValue(value: fhirString): this {
    assertIsDefined<fhirString>(value, `Coverage.class.value is required`);
    const optErrMsg = `Invalid Coverage.class.value (${String(value)})`;
    this.value = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return this.hasValueElement();
  }

  /**
   * @returns the `name` property value as a StringType object if defined; else an empty StringType object
   */
  public getNameElement(): StringType {
    return this.name ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `name` property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Coverage.class.name; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<StringType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirString if defined; else undefined
   */
  public getName(): fhirString | undefined {
    return this.name?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Coverage.class.name (${String(value)})`;
      this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Coverage.class';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.value,
      this.name,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CoverageClassComponent {
    const dest = new CoverageClassComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CoverageClassComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.value = this.value ? this.value.copy() : null;
    dest.name = this.name?.copy();
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
      missingReqdProperties.push(`Coverage.class.type`);
    }

    if (this.hasValueElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getValueElement()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`Coverage.class.value`);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * CoverageCostToBeneficiaryComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Patient payments for services/products
 * - **Definition:** A suite of codes indicating the cost category and associated amount which have been detailed in the policy and may have been  included on the health card.
 * - **Comment:** For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
 * - **Requirements:** Required by providers to manage financial transaction with the patient.
 *
 * @category Data Models: Resource
 * @see [FHIR Coverage](http://hl7.org/fhir/StructureDefinition/Coverage)
 */
export class CoverageCostToBeneficiaryComponent extends BackboneElement implements IBackboneElement {
  constructor(value: IDataType | null = null) {
    super();

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `CoverageCostToBeneficiaryComponent` JSON to instantiate the CoverageCostToBeneficiaryComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CoverageCostToBeneficiaryComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CoverageCostToBeneficiaryComponent
   * @returns CoverageCostToBeneficiaryComponent data model or undefined for `CoverageCostToBeneficiaryComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CoverageCostToBeneficiaryComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CoverageCostToBeneficiaryComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CoverageCostToBeneficiaryComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = CoverageCostToBeneficiaryComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for CoverageCostToBeneficiaryComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (value === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setValue(value);
    }

    fieldName = 'exception';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CoverageCostToBeneficiaryExceptionComponent | undefined = CoverageCostToBeneficiaryExceptionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addException(component);
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
   * Coverage.costToBeneficiary.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Cost category
   * - **Definition:** The category of patient centric costs associated with treatment.
   * - **Comment:** For example visit, specialist visits, emergency, inpatient care, etc.
   * - **Requirements:** Needed to identify the category associated with the amount for the patient.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Coverage.costToBeneficiary.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Coverage.costToBeneficiary.value[x]', ['Quantity','Money',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The amount or percentage due from the beneficiary
   * - **Definition:** The amount due from the patient for the cost category.
   * - **Comment:** Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   * - **Requirements:** Needed to identify the amount for the patient associated with the category.
   * - **FHIR Types:**
   *     'Quantity',
   *     'Money',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Coverage.costToBeneficiary.value[x]',[
    'Quantity',
    'Money',
  ])
  private value: IDataType | null;

  /**
   * Coverage.costToBeneficiary.exception Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Exceptions for patient payments
   * - **Definition:** A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
   * - **Requirements:** Required by providers to manage financial transaction with the patient.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private exception?: CoverageCostToBeneficiaryExceptionComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Coverage.costToBeneficiary.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('Coverage.costToBeneficiary.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Coverage.costToBeneficiary.value[x]')
  public setValue(value: IDataType): this {
    assertIsDefined<IDataType>(value, `Coverage.costToBeneficiary.value[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.value = value;
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
   * @returns the `value` property value as a Quantity object if defined; else null
   */
  public getValueQuantity(): Quantity | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for Coverage.costToBeneficiary.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a Money object if defined; else null
   */
  public getValueMoney(): Money | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Money)) {
      throw new InvalidTypeError(
        `DataType mismatch for Coverage.costToBeneficiary.value[x]: Expected Money but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Money and has a value; `false` otherwise
   */
  public hasValueMoney(): boolean {
    return this.hasValue() && this.value instanceof Money;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `exception` property value as a CoverageCostToBeneficiaryExceptionComponent array
   */
  public getException(): CoverageCostToBeneficiaryExceptionComponent[] {
    return this.exception ?? ([] as CoverageCostToBeneficiaryExceptionComponent[]);
  }

  /**
   * Assigns the provided CoverageCostToBeneficiaryExceptionComponent array value to the `exception` property.
   *
   * @param value - the `exception` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setException(value: CoverageCostToBeneficiaryExceptionComponent[] | undefined): this {
    if (isDefinedList<CoverageCostToBeneficiaryExceptionComponent>(value)) {
      const optErrMsg = `Invalid Coverage.costToBeneficiary.exception; Provided value array has an element that is not an instance of CoverageCostToBeneficiaryExceptionComponent.`;
      assertFhirTypeList<CoverageCostToBeneficiaryExceptionComponent>(value, CoverageCostToBeneficiaryExceptionComponent, optErrMsg);
      this.exception = value;
    } else {
      this.exception = undefined;
    }
    return this;
  }

  /**
   * Add the provided CoverageCostToBeneficiaryExceptionComponent value to the `exception` array property.
   *
   * @param value - the `exception` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addException(value: CoverageCostToBeneficiaryExceptionComponent | undefined): this {
    if (isDefined<CoverageCostToBeneficiaryExceptionComponent>(value)) {
      const optErrMsg = `Invalid Coverage.costToBeneficiary.exception; Provided element is not an instance of CoverageCostToBeneficiaryExceptionComponent.`;
      assertFhirType<CoverageCostToBeneficiaryExceptionComponent>(value, CoverageCostToBeneficiaryExceptionComponent, optErrMsg);
      this.initException();
      this.exception?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `exception` property exists and has a value; `false` otherwise
   */
  public hasException(): boolean {
    return isDefinedList<CoverageCostToBeneficiaryExceptionComponent>(this.exception) && this.exception.some((item: CoverageCostToBeneficiaryExceptionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `exception` property
   */
  private initException(): void {
    if(!this.hasException()) {
      this.exception = [] as CoverageCostToBeneficiaryExceptionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Coverage.costToBeneficiary';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.value,
      this.exception,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CoverageCostToBeneficiaryComponent {
    const dest = new CoverageCostToBeneficiaryComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CoverageCostToBeneficiaryComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.value = this.value ? this.value.copy() as IDataType : null;
    const exceptionList = copyListValues<CoverageCostToBeneficiaryExceptionComponent>(this.exception);
    dest.exception = exceptionList.length === 0 ? undefined : exceptionList;
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
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`Coverage.costToBeneficiary.value[x]`);
    }

    if (this.hasException()) {
      setFhirBackboneElementListJson(this.getException(), 'exception', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * CoverageCostToBeneficiaryExceptionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Exceptions for patient payments
 * - **Definition:** A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 * - **Requirements:** Required by providers to manage financial transaction with the patient.
 *
 * @category Data Models: Resource
 * @see [FHIR Coverage](http://hl7.org/fhir/StructureDefinition/Coverage)
 */
export class CoverageCostToBeneficiaryExceptionComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `CoverageCostToBeneficiaryExceptionComponent` JSON to instantiate the CoverageCostToBeneficiaryExceptionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CoverageCostToBeneficiaryExceptionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CoverageCostToBeneficiaryExceptionComponent
   * @returns CoverageCostToBeneficiaryExceptionComponent data model or undefined for `CoverageCostToBeneficiaryExceptionComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CoverageCostToBeneficiaryExceptionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CoverageCostToBeneficiaryExceptionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CoverageCostToBeneficiaryExceptionComponent();

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

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Coverage.costToBeneficiary.exception.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Exception category
   * - **Definition:** The code for the specific exception.
   * - **Requirements:** Needed to identify the exception associated with the amount for the patient.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * Coverage.costToBeneficiary.exception.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The effective period of the exception
   * - **Definition:** The timeframe during when the exception is in force.
   * - **Requirements:** Needed to identify the applicable timeframe for the exception for the correct calculation of patient costs.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

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
    assertIsDefined<CodeableConcept>(value, `Coverage.costToBeneficiary.exception.type is required`);
    const optErrMsg = `Invalid Coverage.costToBeneficiary.exception.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Coverage.costToBeneficiary.exception.period; Provided element is not an instance of Period.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Coverage.costToBeneficiary.exception';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.period,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CoverageCostToBeneficiaryExceptionComponent {
    const dest = new CoverageCostToBeneficiaryExceptionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CoverageCostToBeneficiaryExceptionComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.period = this.period?.copy();
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
      missingReqdProperties.push(`Coverage.costToBeneficiary.exception.type`);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
