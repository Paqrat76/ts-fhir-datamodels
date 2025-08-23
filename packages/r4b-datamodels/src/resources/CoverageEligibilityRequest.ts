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
 * CoverageEligibilityRequest Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest
 * StructureDefinition.name: CoverageEligibilityRequest
 * StructureDefinition.description: The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
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
  DateTimeType,
  DateType,
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
  assertEnumCodeTypeList,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  assertIsDefinedList,
  constructorCodeValueAsEnumCodeType,
  constructorCodeValueAsEnumCodeTypeList,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
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
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, Money, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference } from '../complex-types/complex-datatypes';
import { EligibilityrequestPurposeEnum } from '../code-systems/EligibilityrequestPurposeEnum';
import { FmStatusEnum } from '../code-systems/FmStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * CoverageEligibilityRequest Class
 *
 * @remarks
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 *
 * **FHIR Specification**
 * - **Short:** CoverageEligibilityRequest resource
 * - **Definition:** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR CoverageEligibilityRequest](http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest)
 */
export class CoverageEligibilityRequest extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, purpose: EnumCodeType[] | CodeType[] | fhirCode[] | null = null, patient: Reference | null = null, created: DateTimeType | fhirDateTime | null = null, insurer: Reference | null = null) {
    super();

    this.fmStatusEnum = new FmStatusEnum();
    this.eligibilityrequestPurposeEnum = new EligibilityrequestPurposeEnum();

    this.status = constructorCodeValueAsEnumCodeType<FmStatusEnum>(
      status,
      FmStatusEnum,
      this.fmStatusEnum,
      'CoverageEligibilityRequest.status',
    );

    this.purpose = constructorCodeValueAsEnumCodeTypeList<EligibilityrequestPurposeEnum>(
      purpose,
      EligibilityrequestPurposeEnum,
      this.eligibilityrequestPurposeEnum,
      'CoverageEligibilityRequest.purpose',
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

    this.insurer = null;
    if (isDefined<Reference>(insurer)) {
      this.setInsurer(insurer);
    }
  }

  /**
   * Parse the provided `CoverageEligibilityRequest` JSON to instantiate the CoverageEligibilityRequest data model.
   *
   * @param sourceJson - JSON representing FHIR `CoverageEligibilityRequest`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CoverageEligibilityRequest
   * @returns CoverageEligibilityRequest data model or undefined for `CoverageEligibilityRequest`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): CoverageEligibilityRequest | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CoverageEligibilityRequest';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CoverageEligibilityRequest();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'CoverageEligibilityRequest');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = CoverageEligibilityRequest[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for CoverageEligibilityRequest`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPriority(datatype);
    }

    fieldName = 'purpose';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson, idx) => {
        const datatype: CodeType | undefined = fhirParser.parseCodeType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addPurposeElement(datatype);
        }
      });
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

    fieldName = 'serviced[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const serviced: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setServiced(serviced);

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

    fieldName = 'provider';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProvider(datatype);
    }

    fieldName = 'insurer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setInsurer(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'facility';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFacility(datatype);
    }

    fieldName = 'supportingInfo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CoverageEligibilityRequestSupportingInfoComponent | undefined = CoverageEligibilityRequestSupportingInfoComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSupportingInfo(component);
        }
      });
    }

    fieldName = 'insurance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CoverageEligibilityRequestInsuranceComponent | undefined = CoverageEligibilityRequestInsuranceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addInsurance(component);
        }
      });
    }

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CoverageEligibilityRequestItemComponent | undefined = CoverageEligibilityRequestItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addItem(component);
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
   * CoverageEligibilityRequest.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for coverage eligiblity request
   * - **Definition:** A unique identifier assigned to this coverage eligiblity request.
   * - **Requirements:** Allows coverage eligibility requests to be distinguished and referenced.
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
   * CoverageEligibilityRequest.status Element
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
   * CoverageEligibilityRequest.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Desired processing priority
   * - **Definition:** When the requestor expects the processor to complete processing.
   * - **Requirements:** Needed to advise the prossesor on the urgency of the request.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private priority?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: EligibilityrequestPurpose
   *
   * @see {@link EligibilityrequestPurposeEnum }
   */
  private readonly eligibilityrequestPurposeEnum: EligibilityrequestPurposeEnum;

  /**
   * CoverageEligibilityRequest.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** auth-requirements | benefits | discovery | validation
   * - **Definition:** Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or \'now\' if not specified.
   * - **Requirements:** To indicate the processing actions requested.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link EligibilityrequestPurposeEnum }
   */
  private purpose: EnumCodeType[] | null;

  /**
   * CoverageEligibilityRequest.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended recipient of products and services
   * - **Definition:** The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
   * - **Comment:** 1..1.
   * - **Requirements:** Required to provide context and coverage validation.
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
   * CoverageEligibilityRequest.serviced[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('CoverageEligibilityRequest.serviced[x]', ['date','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Estimated date or dates of service
   * - **Definition:** The date or dates when the enclosed suite of services were performed or completed.
   * - **Requirements:** Required to provide time context for the request.
   * - **FHIR Types:**
   *     'date',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('CoverageEligibilityRequest.serviced[x]',[
    'date',
    'Period',
  ])
  private serviced?: IDataType | undefined;

  /**
   * CoverageEligibilityRequest.created Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Creation date
   * - **Definition:** The date when this resource was created.
   * - **Requirements:** Need to record a timestamp for use by both the recipient and the issuer.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private created: DateTimeType | null;

  /**
   * CoverageEligibilityRequest.enterer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Author
   * - **Definition:** Person who created the request.
   * - **Requirements:** Some jurisdictions require the contact information for personnel completing eligibility requests.
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
   * CoverageEligibilityRequest.provider Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Party responsible for the request
   * - **Definition:** The provider which is responsible for the request.
   * - **Comment:** Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
   * - **Requirements:** Needed to identify the requestor.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private provider?: Reference | undefined;

  /**
   * CoverageEligibilityRequest.insurer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coverage issuer
   * - **Definition:** The Insurer who issued the coverage in question and is the recipient of the request.
   * - **Requirements:** Need to identify the recipient.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private insurer: Reference | null;

  /**
   * CoverageEligibilityRequest.facility Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Servicing facility
   * - **Definition:** Facility where the services are intended to be provided.
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
   * CoverageEligibilityRequest.supportingInfo Element
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
  private supportingInfo?: CoverageEligibilityRequestSupportingInfoComponent[] | undefined;

  /**
   * CoverageEligibilityRequest.insurance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient insurance information
   * - **Definition:** Financial instruments for reimbursement for the health care products and services.
   * - **Comment:** All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local \'coordination of benefit\' rules. One coverage (and only one) with \'focal=true\' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where \'subrogation=false\', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   * - **Requirements:** There must be at least one coverage for which eligibility is requested.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private insurance?: CoverageEligibilityRequestInsuranceComponent[] | undefined;

  /**
   * CoverageEligibilityRequest.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Item to be evaluated for eligibiity
   * - **Definition:** Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
   * - **Requirements:** The items to be processed for the request.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item?: CoverageEligibilityRequestItemComponent[] | undefined;

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
      const optErrMsg = `Invalid CoverageEligibilityRequest.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid CoverageEligibilityRequest.identifier; Provided element is not an instance of Identifier.`;
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
    assertIsDefined<EnumCodeType>(enumType, `CoverageEligibilityRequest.status is required`);
    const errMsgPrefix = `Invalid CoverageEligibilityRequest.status`;
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
    assertIsDefined<CodeType>(element, `CoverageEligibilityRequest.status is required`);
    const optErrMsg = `Invalid CoverageEligibilityRequest.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `CoverageEligibilityRequest.status is required`);
    const optErrMsg = `Invalid CoverageEligibilityRequest.status (${String(value)})`;
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
   * @returns the `priority` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPriority(): CodeableConcept {
    return this.priority ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Priority object value to the `priority` property.
   *
   * @param value - the `priority` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPriority(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.priority; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.priority = value;
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriority(): boolean {
    return isDefined<CodeableConcept>(this.priority) && !this.priority.isEmpty();
  }

  /**
   * @returns the `purpose` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link EligibilityrequestPurposeEnum }
   */
  public getPurposeEnumType(): EnumCodeType[] {
    return this.purpose ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `purpose` property.
   *
   * @param enumType - the `purpose` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link EligibilityrequestPurposeEnum }
   */
  public setPurposeEnumType(enumType: EnumCodeType[]): this {
    assertIsDefinedList<EnumCodeType>(enumType, `CoverageEligibilityRequest.purpose is required`);
    const errMsgPrefix = `Invalid CoverageEligibilityRequest.purpose`;
    assertEnumCodeTypeList<EligibilityrequestPurposeEnum>(enumType, EligibilityrequestPurposeEnum, errMsgPrefix);
    this.purpose = enumType;
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `purpose` array property.
   *
   * @param enumType - the `purpose` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link EligibilityrequestPurposeEnum }
   */
  public addPurposeEnumType(enumType: EnumCodeType): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CoverageEligibilityRequest.purpose`;
      assertEnumCodeType<EligibilityrequestPurposeEnum>(enumType, EligibilityrequestPurposeEnum, errMsgPrefix);
      this.initPurpose();
      this.purpose?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurposeEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.purpose) && this.purpose.some((item: EnumCodeType) => !item.isEmpty()) && this.purpose.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `purpose` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link EligibilityrequestPurposeEnum }
   */
  public getPurposeElement(): CodeType[] {
    if (this.purpose === null) {
      return [] as CodeType[];
    }
    return this.purpose as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `purpose` property.
   *
   * @param element - the `purpose` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link EligibilityrequestPurposeEnum }
   */
  public setPurposeElement(element: CodeType[]): this {
    assertIsDefinedList<CodeType>(element, `CoverageEligibilityRequest.purpose is required`);
    const optErrMsg = `Invalid CoverageEligibilityRequest.purpose; Provided element array has an element that is not an instance of CodeType.`;
    assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
    const enumCodeTypes = [] as EnumCodeType[];
    element.forEach((type: CodeType) => {
      enumCodeTypes.push(new EnumCodeType(type, this.eligibilityrequestPurposeEnum));
    });
    this.purpose = enumCodeTypes;
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `purpose` array property.
   *
   * @param element - the `purpose` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link EligibilityrequestPurposeEnum }
   */
  public addPurposeElement(element: CodeType): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.purpose; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initPurpose();
      this.purpose?.push(new EnumCodeType(element, this.eligibilityrequestPurposeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurposeElement(): boolean {
    return this.hasPurposeEnumType();
  }

  /**
   * @returns the `purpose` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link EligibilityrequestPurposeEnum }
   */
  public getPurpose(): fhirCode[] {
    if (this.purpose === null) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.purpose) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `purpose` property.
   *
   * @param value - the `purpose` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link EligibilityrequestPurposeEnum }
   */
  public setPurpose(value: fhirCode[]): this {
    assertIsDefinedList<fhirCode>(value, `CoverageEligibilityRequest.purpose is required`);
    const enumCodeTypes = [] as EnumCodeType[];
    const optErrMsg = `Invalid CoverageEligibilityRequest.purpose; Provided value is not an instance of fhirCode.`;
    value.forEach((val: fhirCode) => {
      enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.eligibilityrequestPurposeEnum));
    });
    this.purpose = enumCodeTypes;
    return this;
  }

  /**
   * Add the provided primitive value to the `purpose` array property.
   *
   * @param value - the `purpose` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link EligibilityrequestPurposeEnum }
   */
  public addPurpose(value: fhirCode): this {
    if (isDefined<fhirCode>(value)) {
      this.initPurpose();
      const optErrMsg = `Invalid CoverageEligibilityRequest.purpose; Provided value is not an instance of fhirCode.`;
      this.purpose?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.eligibilityrequestPurposeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurpose(): boolean {
    return this.hasPurposeEnumType();
  }

  /**
   * Initialize the purpose property
   */
  private initPurpose(): void {
    if(!this.hasPurposeEnumType()) {
      this.purpose = [] as EnumCodeType[];
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
   * @decorator `@ReferenceTargets('CoverageEligibilityRequest.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityRequest.patient', [
    'Patient',
  ])
  public setPatient(value: Reference): this {
    assertIsDefined<Reference>(value, `CoverageEligibilityRequest.patient is required`);
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
   * @returns the `serviced` property value as a DataType object if defined; else undefined
   */
  public getServiced(): IDataType | undefined {
    return this.serviced;
  }

  /**
   * Assigns the provided DataType object value to the `serviced` property.
   *
   * @decorator `@ChoiceDataTypes('CoverageEligibilityRequest.serviced[x]')`
   *
   * @param value - the `serviced` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('CoverageEligibilityRequest.serviced[x]')
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
        `DataType mismatch for CoverageEligibilityRequest.serviced[x]: Expected DateType but encountered ${this.serviced.fhirType()}`,
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
        `DataType mismatch for CoverageEligibilityRequest.serviced[x]: Expected Period but encountered ${this.serviced.fhirType()}`,
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
    assertIsDefined<DateTimeType>(element, `CoverageEligibilityRequest.created is required`);
    const optErrMsg = `Invalid CoverageEligibilityRequest.created; Provided value is not an instance of DateTimeType.`;
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
    assertIsDefined<fhirDateTime>(value, `CoverageEligibilityRequest.created is required`);
    const optErrMsg = `Invalid CoverageEligibilityRequest.created (${String(value)})`;
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
   * @decorator `@ReferenceTargets('CoverageEligibilityRequest.enterer', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `enterer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityRequest.enterer', [
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
   * @returns the `provider` property value as a Reference object; else an empty Reference object
   */
  public getProvider(): Reference {
    return this.provider ?? new Reference();
  }

  /**
   * Assigns the provided Provider object value to the `provider` property.
   *
   * @decorator `@ReferenceTargets('CoverageEligibilityRequest.provider', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `provider` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityRequest.provider', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setProvider(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.provider = value;
    } else {
      this.provider = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `provider` property exists and has a value; `false` otherwise
   */
  public hasProvider(): boolean {
    return isDefined<Reference>(this.provider) && !this.provider.isEmpty();
  }

  /**
   * @returns the `insurer` property value as a Reference object if defined; else null
   */
  public getInsurer(): Reference | null {
    return this.insurer;
  }

  /**
   * Assigns the provided Insurer object value to the `insurer` property.
   *
   * @decorator `@ReferenceTargets('CoverageEligibilityRequest.insurer', ['Organization',])`
   *
   * @param value - the `insurer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityRequest.insurer', [
    'Organization',
  ])
  public setInsurer(value: Reference): this {
    assertIsDefined<Reference>(value, `CoverageEligibilityRequest.insurer is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.insurer = value;
    return this;
  }

  /**
   * @returns `true` if the `insurer` property exists and has a value; `false` otherwise
   */
  public hasInsurer(): boolean {
    return isDefined<Reference>(this.insurer) && !this.insurer.isEmpty();
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
   * @decorator `@ReferenceTargets('CoverageEligibilityRequest.facility', ['Location',])`
   *
   * @param value - the `facility` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityRequest.facility', [
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
   * @returns the `supportingInfo` property value as a CoverageEligibilityRequestSupportingInfoComponent array
   */
  public getSupportingInfo(): CoverageEligibilityRequestSupportingInfoComponent[] {
    return this.supportingInfo ?? ([] as CoverageEligibilityRequestSupportingInfoComponent[]);
  }

  /**
   * Assigns the provided CoverageEligibilityRequestSupportingInfoComponent array value to the `supportingInfo` property.
   *
   * @param value - the `supportingInfo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSupportingInfo(value: CoverageEligibilityRequestSupportingInfoComponent[] | undefined): this {
    if (isDefinedList<CoverageEligibilityRequestSupportingInfoComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.supportingInfo; Provided value array has an element that is not an instance of CoverageEligibilityRequestSupportingInfoComponent.`;
      assertFhirTypeList<CoverageEligibilityRequestSupportingInfoComponent>(value, CoverageEligibilityRequestSupportingInfoComponent, optErrMsg);
      this.supportingInfo = value;
    } else {
      this.supportingInfo = undefined;
    }
    return this;
  }

  /**
   * Add the provided CoverageEligibilityRequestSupportingInfoComponent value to the `supportingInfo` array property.
   *
   * @param value - the `supportingInfo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSupportingInfo(value: CoverageEligibilityRequestSupportingInfoComponent | undefined): this {
    if (isDefined<CoverageEligibilityRequestSupportingInfoComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.supportingInfo; Provided element is not an instance of CoverageEligibilityRequestSupportingInfoComponent.`;
      assertFhirType<CoverageEligibilityRequestSupportingInfoComponent>(value, CoverageEligibilityRequestSupportingInfoComponent, optErrMsg);
      this.initSupportingInfo();
      this.supportingInfo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInfo` property exists and has a value; `false` otherwise
   */
  public hasSupportingInfo(): boolean {
    return isDefinedList<CoverageEligibilityRequestSupportingInfoComponent>(this.supportingInfo) && this.supportingInfo.some((item: CoverageEligibilityRequestSupportingInfoComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `supportingInfo` property
   */
  private initSupportingInfo(): void {
    if(!this.hasSupportingInfo()) {
      this.supportingInfo = [] as CoverageEligibilityRequestSupportingInfoComponent[];
    }
  }

  /**
   * @returns the `insurance` property value as a CoverageEligibilityRequestInsuranceComponent array
   */
  public getInsurance(): CoverageEligibilityRequestInsuranceComponent[] {
    return this.insurance ?? ([] as CoverageEligibilityRequestInsuranceComponent[]);
  }

  /**
   * Assigns the provided CoverageEligibilityRequestInsuranceComponent array value to the `insurance` property.
   *
   * @param value - the `insurance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInsurance(value: CoverageEligibilityRequestInsuranceComponent[] | undefined): this {
    if (isDefinedList<CoverageEligibilityRequestInsuranceComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.insurance; Provided value array has an element that is not an instance of CoverageEligibilityRequestInsuranceComponent.`;
      assertFhirTypeList<CoverageEligibilityRequestInsuranceComponent>(value, CoverageEligibilityRequestInsuranceComponent, optErrMsg);
      this.insurance = value;
    } else {
      this.insurance = undefined;
    }
    return this;
  }

  /**
   * Add the provided CoverageEligibilityRequestInsuranceComponent value to the `insurance` array property.
   *
   * @param value - the `insurance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInsurance(value: CoverageEligibilityRequestInsuranceComponent | undefined): this {
    if (isDefined<CoverageEligibilityRequestInsuranceComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.insurance; Provided element is not an instance of CoverageEligibilityRequestInsuranceComponent.`;
      assertFhirType<CoverageEligibilityRequestInsuranceComponent>(value, CoverageEligibilityRequestInsuranceComponent, optErrMsg);
      this.initInsurance();
      this.insurance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `insurance` property exists and has a value; `false` otherwise
   */
  public hasInsurance(): boolean {
    return isDefinedList<CoverageEligibilityRequestInsuranceComponent>(this.insurance) && this.insurance.some((item: CoverageEligibilityRequestInsuranceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `insurance` property
   */
  private initInsurance(): void {
    if(!this.hasInsurance()) {
      this.insurance = [] as CoverageEligibilityRequestInsuranceComponent[];
    }
  }

  /**
   * @returns the `item` property value as a CoverageEligibilityRequestItemComponent array
   */
  public getItem(): CoverageEligibilityRequestItemComponent[] {
    return this.item ?? ([] as CoverageEligibilityRequestItemComponent[]);
  }

  /**
   * Assigns the provided CoverageEligibilityRequestItemComponent array value to the `item` property.
   *
   * @param value - the `item` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: CoverageEligibilityRequestItemComponent[] | undefined): this {
    if (isDefinedList<CoverageEligibilityRequestItemComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.item; Provided value array has an element that is not an instance of CoverageEligibilityRequestItemComponent.`;
      assertFhirTypeList<CoverageEligibilityRequestItemComponent>(value, CoverageEligibilityRequestItemComponent, optErrMsg);
      this.item = value;
    } else {
      this.item = undefined;
    }
    return this;
  }

  /**
   * Add the provided CoverageEligibilityRequestItemComponent value to the `item` array property.
   *
   * @param value - the `item` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addItem(value: CoverageEligibilityRequestItemComponent | undefined): this {
    if (isDefined<CoverageEligibilityRequestItemComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.item; Provided element is not an instance of CoverageEligibilityRequestItemComponent.`;
      assertFhirType<CoverageEligibilityRequestItemComponent>(value, CoverageEligibilityRequestItemComponent, optErrMsg);
      this.initItem();
      this.item?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefinedList<CoverageEligibilityRequestItemComponent>(this.item) && this.item.some((item: CoverageEligibilityRequestItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `item` property
   */
  private initItem(): void {
    if(!this.hasItem()) {
      this.item = [] as CoverageEligibilityRequestItemComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CoverageEligibilityRequest';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.priority,
      this.purpose,
      this.patient,
      this.serviced,
      this.created,
      this.enterer,
      this.provider,
      this.insurer,
      this.facility,
      this.supportingInfo,
      this.insurance,
      this.item,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CoverageEligibilityRequest {
    const dest = new CoverageEligibilityRequest();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CoverageEligibilityRequest): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.priority = this.priority?.copy();
    const purposeList = copyListValues<EnumCodeType>(this.purpose);
    dest.purpose = purposeList.length === 0 ? null : purposeList;
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.serviced = this.serviced?.copy() as IDataType;
    dest.created = this.created ? this.created.copy() : null;
    dest.enterer = this.enterer?.copy();
    dest.provider = this.provider?.copy();
    dest.insurer = this.insurer ? this.insurer.copy() : null;
    dest.facility = this.facility?.copy();
    const supportingInfoList = copyListValues<CoverageEligibilityRequestSupportingInfoComponent>(this.supportingInfo);
    dest.supportingInfo = supportingInfoList.length === 0 ? undefined : supportingInfoList;
    const insuranceList = copyListValues<CoverageEligibilityRequestInsuranceComponent>(this.insurance);
    dest.insurance = insuranceList.length === 0 ? undefined : insuranceList;
    const itemList = copyListValues<CoverageEligibilityRequestItemComponent>(this.item);
    dest.item = itemList.length === 0 ? undefined : itemList;
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
      missingReqdProperties.push(`CoverageEligibilityRequest.status`);
    }

    if (this.hasPriority()) {
      setFhirComplexJson(this.getPriority(), 'priority', jsonObj);
    }

    if (this.hasPurposeElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getPurposeElement(), 'purpose', jsonObj);
    } else {
      missingReqdProperties.push(`CoverageEligibilityRequest.purpose`);
    }

    if (this.hasPatient()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPatient()!, 'patient', jsonObj);
    } else {
      missingReqdProperties.push(`CoverageEligibilityRequest.patient`);
    }

    if (this.hasServiced()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getServiced()!, 'serviced', jsonObj);
    }

    if (this.hasCreatedElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirDateTime>(this.getCreatedElement()!, 'created', jsonObj);
    } else {
      missingReqdProperties.push(`CoverageEligibilityRequest.created`);
    }

    if (this.hasEnterer()) {
      setFhirComplexJson(this.getEnterer(), 'enterer', jsonObj);
    }

    if (this.hasProvider()) {
      setFhirComplexJson(this.getProvider(), 'provider', jsonObj);
    }

    if (this.hasInsurer()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getInsurer()!, 'insurer', jsonObj);
    } else {
      missingReqdProperties.push(`CoverageEligibilityRequest.insurer`);
    }

    if (this.hasFacility()) {
      setFhirComplexJson(this.getFacility(), 'facility', jsonObj);
    }

    if (this.hasSupportingInfo()) {
      setFhirBackboneElementListJson(this.getSupportingInfo(), 'supportingInfo', jsonObj);
    }

    if (this.hasInsurance()) {
      setFhirBackboneElementListJson(this.getInsurance(), 'insurance', jsonObj);
    }

    if (this.hasItem()) {
      setFhirBackboneElementListJson(this.getItem(), 'item', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * CoverageEligibilityRequestSupportingInfoComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Supporting information
 * - **Definition:** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.
 * - **Comment:** Often there are multiple jurisdiction specific valuesets which are required.
 * - **Requirements:** Typically these information codes are required to support the services rendered or the adjudication of the services rendered.
 *
 * @category Data Models: Resource
 * @see [FHIR CoverageEligibilityRequest](http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest)
 */
export class CoverageEligibilityRequestSupportingInfoComponent extends BackboneElement implements IBackboneElement {
  constructor(sequence: PositiveIntType | fhirPositiveInt | null = null, information: Reference | null = null) {
    super();

    this.sequence = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(sequence)) {
      if (sequence instanceof PrimitiveType) {
        this.setSequenceElement(sequence);
      } else {
        this.setSequence(sequence);
      }
    }

    this.information = null;
    if (isDefined<Reference>(information)) {
      this.setInformation(information);
    }
  }

  /**
   * Parse the provided `CoverageEligibilityRequestSupportingInfoComponent` JSON to instantiate the CoverageEligibilityRequestSupportingInfoComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CoverageEligibilityRequestSupportingInfoComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CoverageEligibilityRequestSupportingInfoComponent
   * @returns CoverageEligibilityRequestSupportingInfoComponent data model or undefined for `CoverageEligibilityRequestSupportingInfoComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CoverageEligibilityRequestSupportingInfoComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CoverageEligibilityRequestSupportingInfoComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CoverageEligibilityRequestSupportingInfoComponent();

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

    fieldName = 'information';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setInformation(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'appliesToAll';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAppliesToAllElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * CoverageEligibilityRequest.supportingInfo.sequence Element
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
   * CoverageEligibilityRequest.supportingInfo.information Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Data to be provided
   * - **Definition:** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   * - **Comment:** Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   * - **Requirements:** To convey the data content to be provided when the information is more than a simple code or period.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private information: Reference | null;

  /**
   * CoverageEligibilityRequest.supportingInfo.appliesToAll Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applies to all items
   * - **Definition:** The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
   * - **Requirements:** Needed to convey that the information is universal to the request.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private appliesToAll?: BooleanType | undefined;

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
    assertIsDefined<PositiveIntType>(element, `CoverageEligibilityRequest.supportingInfo.sequence is required`);
    const optErrMsg = `Invalid CoverageEligibilityRequest.supportingInfo.sequence; Provided value is not an instance of PositiveIntType.`;
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
    assertIsDefined<fhirPositiveInt>(value, `CoverageEligibilityRequest.supportingInfo.sequence is required`);
    const optErrMsg = `Invalid CoverageEligibilityRequest.supportingInfo.sequence (${String(value)})`;
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
   * @returns the `information` property value as a Reference object if defined; else null
   */
  public getInformation(): Reference | null {
    return this.information;
  }

  /**
   * Assigns the provided Information object value to the `information` property.
   *
   * @decorator `@ReferenceTargets('CoverageEligibilityRequest.supportingInfo.information', ['Resource',])`
   *
   * @param value - the `information` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityRequest.supportingInfo.information', [
    'Resource',
  ])
  public setInformation(value: Reference): this {
    assertIsDefined<Reference>(value, `CoverageEligibilityRequest.supportingInfo.information is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.information = value;
    return this;
  }

  /**
   * @returns `true` if the `information` property exists and has a value; `false` otherwise
   */
  public hasInformation(): boolean {
    return isDefined<Reference>(this.information) && !this.information.isEmpty();
  }

  /**
   * @returns the `appliesToAll` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAppliesToAllElement(): BooleanType {
    return this.appliesToAll ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `appliesToAll` property.
   *
   * @param element - the `appliesToAll` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAppliesToAllElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.supportingInfo.appliesToAll; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.appliesToAll = element;
    } else {
      this.appliesToAll = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `appliesToAll` property exists and has a value; `false` otherwise
   */
  public hasAppliesToAllElement(): boolean {
    return isDefined<BooleanType>(this.appliesToAll) && !this.appliesToAll.isEmpty();
  }

  /**
   * @returns the `appliesToAll` property value as a fhirBoolean if defined; else undefined
   */
  public getAppliesToAll(): fhirBoolean | undefined {
    return this.appliesToAll?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `appliesToAll` property.
   *
   * @param value - the `appliesToAll` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAppliesToAll(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.supportingInfo.appliesToAll (${String(value)})`;
      this.appliesToAll = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.appliesToAll = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `appliesToAll` property exists and has a value; `false` otherwise
   */
  public hasAppliesToAll(): boolean {
    return this.hasAppliesToAllElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CoverageEligibilityRequest.supportingInfo';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.information,
      this.appliesToAll,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CoverageEligibilityRequestSupportingInfoComponent {
    const dest = new CoverageEligibilityRequestSupportingInfoComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CoverageEligibilityRequestSupportingInfoComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence ? this.sequence.copy() : null;
    dest.information = this.information ? this.information.copy() : null;
    dest.appliesToAll = this.appliesToAll?.copy();
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
      missingReqdProperties.push(`CoverageEligibilityRequest.supportingInfo.sequence`);
    }

    if (this.hasInformation()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getInformation()!, 'information', jsonObj);
    } else {
      missingReqdProperties.push(`CoverageEligibilityRequest.supportingInfo.information`);
    }

    if (this.hasAppliesToAllElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAppliesToAllElement(), 'appliesToAll', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * CoverageEligibilityRequestInsuranceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Patient insurance information
 * - **Definition:** Financial instruments for reimbursement for the health care products and services.
 * - **Comment:** All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local \'coordination of benefit\' rules. One coverage (and only one) with \'focal=true\' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where \'subrogation=false\', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 * - **Requirements:** There must be at least one coverage for which eligibility is requested.
 *
 * @category Data Models: Resource
 * @see [FHIR CoverageEligibilityRequest](http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest)
 */
export class CoverageEligibilityRequestInsuranceComponent extends BackboneElement implements IBackboneElement {
  constructor(coverage: Reference | null = null) {
    super();

    this.coverage = null;
    if (isDefined<Reference>(coverage)) {
      this.setCoverage(coverage);
    }
  }

  /**
   * Parse the provided `CoverageEligibilityRequestInsuranceComponent` JSON to instantiate the CoverageEligibilityRequestInsuranceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CoverageEligibilityRequestInsuranceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CoverageEligibilityRequestInsuranceComponent
   * @returns CoverageEligibilityRequestInsuranceComponent data model or undefined for `CoverageEligibilityRequestInsuranceComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CoverageEligibilityRequestInsuranceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CoverageEligibilityRequestInsuranceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CoverageEligibilityRequestInsuranceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'focal';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setFocalElement(datatype);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * CoverageEligibilityRequest.insurance.focal Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable coverage
   * - **Definition:** A flag to indicate that this Coverage is to be used for evaluation of this request when set to true.
   * - **Comment:** A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. For example a person may also be covered by their spouse\'s policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for evaluating this request. Other requests would be created to request evaluation against the other listed policies.
   * - **Requirements:** To identify which coverage in the list is being used to evaluate this request.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private focal?: BooleanType | undefined;

  /**
   * CoverageEligibilityRequest.insurance.coverage Element
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
   * - **isSummary:** false
   */
  private coverage: Reference | null;

  /**
   * CoverageEligibilityRequest.insurance.businessArrangement Element
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

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `focal` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getFocalElement(): BooleanType {
    return this.focal ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `focal` property.
   *
   * @param element - the `focal` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFocalElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.insurance.focal; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.focal = element;
    } else {
      this.focal = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `focal` property exists and has a value; `false` otherwise
   */
  public hasFocalElement(): boolean {
    return isDefined<BooleanType>(this.focal) && !this.focal.isEmpty();
  }

  /**
   * @returns the `focal` property value as a fhirBoolean if defined; else undefined
   */
  public getFocal(): fhirBoolean | undefined {
    return this.focal?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `focal` property.
   *
   * @param value - the `focal` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFocal(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.insurance.focal (${String(value)})`;
      this.focal = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.focal = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `focal` property exists and has a value; `false` otherwise
   */
  public hasFocal(): boolean {
    return this.hasFocalElement();
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
   * @decorator `@ReferenceTargets('CoverageEligibilityRequest.insurance.coverage', ['Coverage',])`
   *
   * @param value - the `coverage` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityRequest.insurance.coverage', [
    'Coverage',
  ])
  public setCoverage(value: Reference): this {
    assertIsDefined<Reference>(value, `CoverageEligibilityRequest.insurance.coverage is required`);
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
      const optErrMsg = `Invalid CoverageEligibilityRequest.insurance.businessArrangement; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CoverageEligibilityRequest.insurance.businessArrangement (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CoverageEligibilityRequest.insurance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.focal,
      this.coverage,
      this.businessArrangement,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CoverageEligibilityRequestInsuranceComponent {
    const dest = new CoverageEligibilityRequestInsuranceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CoverageEligibilityRequestInsuranceComponent): void {
    super.copyValues(dest);
    dest.focal = this.focal?.copy();
    dest.coverage = this.coverage ? this.coverage.copy() : null;
    dest.businessArrangement = this.businessArrangement?.copy();
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

    if (this.hasFocalElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getFocalElement(), 'focal', jsonObj);
    }

    if (this.hasCoverage()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCoverage()!, 'coverage', jsonObj);
    } else {
      missingReqdProperties.push(`CoverageEligibilityRequest.insurance.coverage`);
    }

    if (this.hasBusinessArrangementElement()) {
      setFhirPrimitiveJson<fhirString>(this.getBusinessArrangementElement(), 'businessArrangement', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * CoverageEligibilityRequestItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Item to be evaluated for eligibiity
 * - **Definition:** Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
 * - **Requirements:** The items to be processed for the request.
 *
 * @category Data Models: Resource
 * @see [FHIR CoverageEligibilityRequest](http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest)
 */
export class CoverageEligibilityRequestItemComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CoverageEligibilityRequestItemComponent` JSON to instantiate the CoverageEligibilityRequestItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CoverageEligibilityRequestItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CoverageEligibilityRequestItemComponent
   * @returns CoverageEligibilityRequestItemComponent data model or undefined for `CoverageEligibilityRequestItemComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CoverageEligibilityRequestItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CoverageEligibilityRequestItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CoverageEligibilityRequestItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'supportingInfoSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
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
          instance.addSupportingInfoSequenceElement(datatype);
        }
      });
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
      instance.setProductOrService(datatype);
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

    fieldName = 'provider';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProvider(datatype);
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

    fieldName = 'facility';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFacility(datatype);
    }

    fieldName = 'diagnosis';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CoverageEligibilityRequestItemDiagnosisComponent | undefined = CoverageEligibilityRequestItemDiagnosisComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDiagnosis(component);
        }
      });
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDetail(datatype);
        }
      });
  }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * CoverageEligibilityRequest.item.supportingInfoSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable exception or supporting information
   * - **Definition:** Exceptions, special conditions and supporting information applicable for this service or product line.
   * - **Requirements:** Needed to support or inform the consideration for eligibility.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private supportingInfoSequence?: PositiveIntType[] | undefined;

  /**
   * CoverageEligibilityRequest.item.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefit classification
   * - **Definition:** Code to identify the general type of benefits under which products and services are provided.
   * - **Comment:** Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   * - **Requirements:** Needed to convey the category of service or product for which eligibility is sought.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept | undefined;

  /**
   * CoverageEligibilityRequest.item.productOrService Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Billing, service, product, or drug code
   * - **Definition:** This contains the product, service, drug or other billing code for the item.
   * - **Comment:** Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
   * - **Requirements:** Needed to convey the actual service or product for which eligibility is sought.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productOrService?: CodeableConcept | undefined;

  /**
   * CoverageEligibilityRequest.item.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product or service billing modifiers
   * - **Definition:** Item typification or modifiers codes to convey additional context for the product or service.
   * - **Comment:** For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   * - **Requirements:** To support provision of the item or to charge an elevated fee.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modifier?: CodeableConcept[] | undefined;

  /**
   * CoverageEligibilityRequest.item.provider Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Perfoming practitioner
   * - **Definition:** The practitioner who is responsible for the product or service to be rendered to the patient.
   * - **Requirements:** Needed to support the evaluation of the eligibility.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private provider?: Reference | undefined;

  /**
   * CoverageEligibilityRequest.item.quantity Element
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
   * CoverageEligibilityRequest.item.unitPrice Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fee, charge or cost per item
   * - **Definition:** The amount charged to the patient by the provider for a single unit.
   * - **Requirements:** Needed to support the evaluation of the eligibility.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private unitPrice?: Money | undefined;

  /**
   * CoverageEligibilityRequest.item.facility Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Servicing facility
   * - **Definition:** Facility where the services will be provided.
   * - **Requirements:** Needed to support the evaluation of the eligibility.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private facility?: Reference | undefined;

  /**
   * CoverageEligibilityRequest.item.diagnosis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable diagnosis
   * - **Definition:** Patient diagnosis for which care is sought.
   * - **Requirements:** Needed to support the evaluation of the eligibility.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private diagnosis?: CoverageEligibilityRequestItemDiagnosisComponent[] | undefined;

  /**
   * CoverageEligibilityRequest.item.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product or service details
   * - **Definition:** The plan/proposal/order describing the proposed service in detail.
   * - **Requirements:** Needed to provide complex service proposal such as a Device or a plan.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `supportingInfoSequence` property value as a PositiveIntType array
   */
  public getSupportingInfoSequenceElement(): PositiveIntType[] {
    return this.supportingInfoSequence ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `supportingInfoSequence` property.
   *
   * @param element - the `supportingInfoSequence` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSupportingInfoSequenceElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.item.supportingInfoSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.supportingInfoSequence = element;
    } else {
      this.supportingInfoSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `supportingInfoSequence` array property.
   *
   * @param element - the `supportingInfoSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSupportingInfoSequenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.item.supportingInfoSequence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initSupportingInfoSequence();
      this.supportingInfoSequence?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInfoSequence` property exists and has a value; `false` otherwise
   */
  public hasSupportingInfoSequenceElement(): boolean {
    return isDefinedList<PositiveIntType>(this.supportingInfoSequence) && this.supportingInfoSequence.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `supportingInfoSequence` property value as a fhirPositiveInt array
   */
  public getSupportingInfoSequence(): fhirPositiveInt[] {
    this.initSupportingInfoSequence();
    const supportingInfoSequenceValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.supportingInfoSequence!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        supportingInfoSequenceValues.push(value);
      }
    }
    return supportingInfoSequenceValues;
  }

  /**
   * Assigns the provided primitive value array to the `supportingInfoSequence` property.
   *
   * @param value - the `supportingInfoSequence` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSupportingInfoSequence(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const supportingInfoSequenceElements = [] as PositiveIntType[];
      for (const supportingInfoSequenceValue of value) {
        const optErrMsg = `Invalid CoverageEligibilityRequest.item.supportingInfoSequence array item (${String(supportingInfoSequenceValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(supportingInfoSequenceValue, fhirPositiveIntSchema, optErrMsg));
        supportingInfoSequenceElements.push(element);
      }
      this.supportingInfoSequence = supportingInfoSequenceElements;
    } else {
      this.supportingInfoSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `supportingInfoSequence` array property.
   *
   * @param value - the `supportingInfoSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSupportingInfoSequence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.item.supportingInfoSequence array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initSupportingInfoSequence();
      this.addSupportingInfoSequenceElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInfoSequence` property exists and has a value; `false` otherwise
   */
  public hasSupportingInfoSequence(): boolean {
    return this.hasSupportingInfoSequenceElement();
  }

  /**
   * Initialize the `supportingInfoSequence` property
   */
  private initSupportingInfoSequence(): void {
    if (!this.hasSupportingInfoSequence()) {
      this.supportingInfoSequence = [] as PositiveIntType[];
    }
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
      const optErrMsg = `Invalid CoverageEligibilityRequest.item.category; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `productOrService` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getProductOrService(): CodeableConcept {
    return this.productOrService ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ProductOrService object value to the `productOrService` property.
   *
   * @param value - the `productOrService` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductOrService(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.item.productOrService; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productOrService = value;
    } else {
      this.productOrService = undefined;
    }
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
      const optErrMsg = `Invalid CoverageEligibilityRequest.item.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid CoverageEligibilityRequest.item.modifier; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `provider` property value as a Reference object; else an empty Reference object
   */
  public getProvider(): Reference {
    return this.provider ?? new Reference();
  }

  /**
   * Assigns the provided Provider object value to the `provider` property.
   *
   * @decorator `@ReferenceTargets('CoverageEligibilityRequest.item.provider', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `provider` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityRequest.item.provider', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setProvider(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.provider = value;
    } else {
      this.provider = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `provider` property exists and has a value; `false` otherwise
   */
  public hasProvider(): boolean {
    return isDefined<Reference>(this.provider) && !this.provider.isEmpty();
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
      const optErrMsg = `Invalid CoverageEligibilityRequest.item.quantity; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid CoverageEligibilityRequest.item.unitPrice; Provided element is not an instance of Money.`;
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
   * @returns the `facility` property value as a Reference object; else an empty Reference object
   */
  public getFacility(): Reference {
    return this.facility ?? new Reference();
  }

  /**
   * Assigns the provided Facility object value to the `facility` property.
   *
   * @decorator `@ReferenceTargets('CoverageEligibilityRequest.item.facility', ['Location','Organization',])`
   *
   * @param value - the `facility` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityRequest.item.facility', [
    'Location',
  
    'Organization',
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
   * @returns the `diagnosis` property value as a CoverageEligibilityRequestItemDiagnosisComponent array
   */
  public getDiagnosis(): CoverageEligibilityRequestItemDiagnosisComponent[] {
    return this.diagnosis ?? ([] as CoverageEligibilityRequestItemDiagnosisComponent[]);
  }

  /**
   * Assigns the provided CoverageEligibilityRequestItemDiagnosisComponent array value to the `diagnosis` property.
   *
   * @param value - the `diagnosis` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDiagnosis(value: CoverageEligibilityRequestItemDiagnosisComponent[] | undefined): this {
    if (isDefinedList<CoverageEligibilityRequestItemDiagnosisComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.item.diagnosis; Provided value array has an element that is not an instance of CoverageEligibilityRequestItemDiagnosisComponent.`;
      assertFhirTypeList<CoverageEligibilityRequestItemDiagnosisComponent>(value, CoverageEligibilityRequestItemDiagnosisComponent, optErrMsg);
      this.diagnosis = value;
    } else {
      this.diagnosis = undefined;
    }
    return this;
  }

  /**
   * Add the provided CoverageEligibilityRequestItemDiagnosisComponent value to the `diagnosis` array property.
   *
   * @param value - the `diagnosis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDiagnosis(value: CoverageEligibilityRequestItemDiagnosisComponent | undefined): this {
    if (isDefined<CoverageEligibilityRequestItemDiagnosisComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityRequest.item.diagnosis; Provided element is not an instance of CoverageEligibilityRequestItemDiagnosisComponent.`;
      assertFhirType<CoverageEligibilityRequestItemDiagnosisComponent>(value, CoverageEligibilityRequestItemDiagnosisComponent, optErrMsg);
      this.initDiagnosis();
      this.diagnosis?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `diagnosis` property exists and has a value; `false` otherwise
   */
  public hasDiagnosis(): boolean {
    return isDefinedList<CoverageEligibilityRequestItemDiagnosisComponent>(this.diagnosis) && this.diagnosis.some((item: CoverageEligibilityRequestItemDiagnosisComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `diagnosis` property
   */
  private initDiagnosis(): void {
    if(!this.hasDiagnosis()) {
      this.diagnosis = [] as CoverageEligibilityRequestItemDiagnosisComponent[];
    }
  }

  /**
   * @returns the `detail` property value as a Reference array
   */
  public getDetail(): Reference[] {
    return this.detail ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `detail` property.
   *
   * @decorator `@ReferenceTargets('CoverageEligibilityRequest.item.detail', ['Resource',])`
   *
   * @param value - the `detail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityRequest.item.detail', [
    'Resource',
  ])
  public setDetail(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `detail` array property.
   *
   * @decorator `@ReferenceTargets('CoverageEligibilityRequest.item.detail', ['Resource',])`
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityRequest.item.detail', [
    'Resource',
  ])
  public addDetail(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDetail();
      this.detail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefinedList<Reference>(this.detail) && this.detail.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `detail` property
   */
  private initDetail(): void {
    if (!this.hasDetail()) {
      this.detail = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CoverageEligibilityRequest.item';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.supportingInfoSequence,
      this.category,
      this.productOrService,
      this.modifier,
      this.provider,
      this.quantity,
      this.unitPrice,
      this.facility,
      this.diagnosis,
      this.detail,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CoverageEligibilityRequestItemComponent {
    const dest = new CoverageEligibilityRequestItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CoverageEligibilityRequestItemComponent): void {
    super.copyValues(dest);
    const supportingInfoSequenceList = copyListValues<PositiveIntType>(this.supportingInfoSequence);
    dest.supportingInfoSequence = supportingInfoSequenceList.length === 0 ? undefined : supportingInfoSequenceList;
    dest.category = this.category?.copy();
    dest.productOrService = this.productOrService?.copy();
    const modifierList = copyListValues<CodeableConcept>(this.modifier);
    dest.modifier = modifierList.length === 0 ? undefined : modifierList;
    dest.provider = this.provider?.copy();
    dest.quantity = this.quantity?.copy();
    dest.unitPrice = this.unitPrice?.copy();
    dest.facility = this.facility?.copy();
    const diagnosisList = copyListValues<CoverageEligibilityRequestItemDiagnosisComponent>(this.diagnosis);
    dest.diagnosis = diagnosisList.length === 0 ? undefined : diagnosisList;
    const detailList = copyListValues<Reference>(this.detail);
    dest.detail = detailList.length === 0 ? undefined : detailList;
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

    if (this.hasSupportingInfoSequence()) {
      setFhirPrimitiveListJson(this.getSupportingInfoSequenceElement(), 'supportingInfoSequence', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasProductOrService()) {
      setFhirComplexJson(this.getProductOrService(), 'productOrService', jsonObj);
    }

    if (this.hasModifier()) {
      setFhirComplexListJson(this.getModifier(), 'modifier', jsonObj);
    }

    if (this.hasProvider()) {
      setFhirComplexJson(this.getProvider(), 'provider', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasUnitPrice()) {
      setFhirComplexJson(this.getUnitPrice(), 'unitPrice', jsonObj);
    }

    if (this.hasFacility()) {
      setFhirComplexJson(this.getFacility(), 'facility', jsonObj);
    }

    if (this.hasDiagnosis()) {
      setFhirBackboneElementListJson(this.getDiagnosis(), 'diagnosis', jsonObj);
    }

    if (this.hasDetail()) {
      setFhirComplexListJson(this.getDetail(), 'detail', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CoverageEligibilityRequestItemDiagnosisComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Applicable diagnosis
 * - **Definition:** Patient diagnosis for which care is sought.
 * - **Requirements:** Needed to support the evaluation of the eligibility.
 *
 * @category Data Models: Resource
 * @see [FHIR CoverageEligibilityRequest](http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest)
 */
export class CoverageEligibilityRequestItemDiagnosisComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CoverageEligibilityRequestItemDiagnosisComponent` JSON to instantiate the CoverageEligibilityRequestItemDiagnosisComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CoverageEligibilityRequestItemDiagnosisComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CoverageEligibilityRequestItemDiagnosisComponent
   * @returns CoverageEligibilityRequestItemDiagnosisComponent data model or undefined for `CoverageEligibilityRequestItemDiagnosisComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CoverageEligibilityRequestItemDiagnosisComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CoverageEligibilityRequestItemDiagnosisComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CoverageEligibilityRequestItemDiagnosisComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = CoverageEligibilityRequestItemDiagnosisComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for CoverageEligibilityRequestItemDiagnosisComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'diagnosis[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const diagnosis: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDiagnosis(diagnosis);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * CoverageEligibilityRequest.item.diagnosis.diagnosis[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('CoverageEligibilityRequest.item.diagnosis.diagnosis[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Nature of illness or problem
   * - **Definition:** The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   * - **Requirements:** Provides health context for the evaluation of the products and/or services.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('CoverageEligibilityRequest.item.diagnosis.diagnosis[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private diagnosis?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `diagnosis` property value as a DataType object if defined; else undefined
   */
  public getDiagnosis(): IDataType | undefined {
    return this.diagnosis;
  }

  /**
   * Assigns the provided DataType object value to the `diagnosis` property.
   *
   * @decorator `@ChoiceDataTypes('CoverageEligibilityRequest.item.diagnosis.diagnosis[x]')`
   *
   * @param value - the `diagnosis` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('CoverageEligibilityRequest.item.diagnosis.diagnosis[x]')
  public setDiagnosis(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.diagnosis = value;
    } else {
      this.diagnosis = undefined;
    }
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
   * @returns the `diagnosis` property value as a CodeableConcept object if defined; else undefined
   */
  public getDiagnosisCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.diagnosis)) {
      return undefined;
    }
    if (!(this.diagnosis instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for CoverageEligibilityRequest.item.diagnosis.diagnosis[x]: Expected CodeableConcept but encountered ${this.diagnosis.fhirType()}`,
      );
    }
    return this.diagnosis;
  }

  /**
   * @returns `true` if the `diagnosis` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasDiagnosisCodeableConcept(): boolean {
    return this.hasDiagnosis() && this.diagnosis instanceof CodeableConcept;
  }

  /**
   * @returns the `diagnosis` property value as a Reference object if defined; else undefined
   */
  public getDiagnosisReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.diagnosis)) {
      return undefined;
    }
    if (!(this.diagnosis instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for CoverageEligibilityRequest.item.diagnosis.diagnosis[x]: Expected Reference but encountered ${this.diagnosis.fhirType()}`,
      );
    }
    return this.diagnosis;
  }

  /**
   * @returns `true` if the `diagnosis` property exists as a Reference and has a value; `false` otherwise
   */
  public hasDiagnosisReference(): boolean {
    return this.hasDiagnosis() && this.diagnosis instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CoverageEligibilityRequest.item.diagnosis';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.diagnosis,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CoverageEligibilityRequestItemDiagnosisComponent {
    const dest = new CoverageEligibilityRequestItemDiagnosisComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CoverageEligibilityRequestItemDiagnosisComponent): void {
    super.copyValues(dest);
    dest.diagnosis = this.diagnosis?.copy() as IDataType;
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

    if (this.hasDiagnosis()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDiagnosis()!, 'diagnosis', jsonObj);
    }

    return jsonObj;
  }
}
