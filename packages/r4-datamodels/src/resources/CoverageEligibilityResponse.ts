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
 * CoverageEligibilityResponse Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse
 * StructureDefinition.name: CoverageEligibilityResponse
 * StructureDefinition.description: This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

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
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  UnsignedIntType,
  UriType,
  assertEnumCodeType,
  assertEnumCodeTypeList,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  constructorCodeValueAsEnumCodeTypeList,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
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
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, Money, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { EligibilityresponsePurposeEnum } from '../code-systems/EligibilityresponsePurposeEnum';
import { FmStatusEnum } from '../code-systems/FmStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { RemittanceOutcomeEnum } from '../code-systems/RemittanceOutcomeEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * CoverageEligibilityResponse Class
 *
 * @remarks
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 *
 * **FHIR Specification**
 * - **Short:** CoverageEligibilityResponse resource
 * - **Definition:** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR CoverageEligibilityResponse](http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse)
 */
export class CoverageEligibilityResponse extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, purpose: EnumCodeType[] | CodeType[] | fhirCode[] | null = null, patient: Reference | null = null, created: DateTimeType | fhirDateTime | null = null, request: Reference | null = null, outcome: EnumCodeType | CodeType | fhirCode | null = null, insurer: Reference | null = null) {
    super();

    this.fmStatusEnum = new FmStatusEnum();
    this.eligibilityresponsePurposeEnum = new EligibilityresponsePurposeEnum();
    this.remittanceOutcomeEnum = new RemittanceOutcomeEnum();

    this.status = constructorCodeValueAsEnumCodeType<FmStatusEnum>(
      status,
      FmStatusEnum,
      this.fmStatusEnum,
      'CoverageEligibilityResponse.status',
    );

    this.purpose = constructorCodeValueAsEnumCodeTypeList<EligibilityresponsePurposeEnum>(
      purpose,
      EligibilityresponsePurposeEnum,
      this.eligibilityresponsePurposeEnum,
      'CoverageEligibilityResponse.purpose',
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

    this.request = null;
    if (isDefined<Reference>(request)) {
      this.setRequest(request);
    }

    this.outcome = constructorCodeValueAsEnumCodeType<RemittanceOutcomeEnum>(
      outcome,
      RemittanceOutcomeEnum,
      this.remittanceOutcomeEnum,
      'CoverageEligibilityResponse.outcome',
    );

    this.insurer = null;
    if (isDefined<Reference>(insurer)) {
      this.setInsurer(insurer);
    }
  }

  /**
   * Parse the provided `CoverageEligibilityResponse` JSON to instantiate the CoverageEligibilityResponse data model.
   *
   * @param sourceJson - JSON representing FHIR `CoverageEligibilityResponse`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CoverageEligibilityResponse
   * @returns CoverageEligibilityResponse data model or undefined for `CoverageEligibilityResponse`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): CoverageEligibilityResponse | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CoverageEligibilityResponse';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CoverageEligibilityResponse();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'CoverageEligibilityResponse');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = CoverageEligibilityResponse[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for CoverageEligibilityResponse`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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
    primitiveJsonType = 'string';
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

    fieldName = 'purpose';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setPurpose(null);
      } else {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: CodeType | undefined = fhirParser.parseCodeType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype === undefined) {
            instance.setPurpose(null);
          } else {
            instance.addPurposeElement(datatype);
          }
        });
      }
    } else {
      instance.setPurpose(null);
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
        instance.setCreated(null);
      } else {
        instance.setCreatedElement(datatype);
      }
    } else {
      instance.setCreated(null);
    }

    fieldName = 'requestor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequestor(datatype);
    }

    fieldName = 'request';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setRequest(null);
      } else {
        instance.setRequest(datatype);
      }
    } else {
      instance.setRequest(null);
    }

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setOutcome(null);
      } else {
        instance.setOutcomeElement(datatype);
      }
    } else {
      instance.setOutcome(null);
    }

    fieldName = 'disposition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDispositionElement(datatype);
    }

    fieldName = 'insurer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setInsurer(null);
      } else {
        instance.setInsurer(datatype);
      }
    } else {
      instance.setInsurer(null);
    }

    fieldName = 'insurance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: CoverageEligibilityResponseInsuranceComponent | undefined = CoverageEligibilityResponseInsuranceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addInsurance(component);
          }
        });
      }
    }

    fieldName = 'preAuthRef';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPreAuthRefElement(datatype);
    }

    fieldName = 'form';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setForm(datatype);
    }

    fieldName = 'error';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: CoverageEligibilityResponseErrorComponent | undefined = CoverageEligibilityResponseErrorComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addError(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * CoverageEligibilityResponse.identifier Element
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
   * CoverageEligibilityResponse.status Element
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
   * FHIR CodeSystem: EligibilityresponsePurpose
   *
   * @see {@link EligibilityresponsePurposeEnum }
   */
  private readonly eligibilityresponsePurposeEnum: EligibilityresponsePurposeEnum;

  /**
   * CoverageEligibilityResponse.purpose Element
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
   * @see CodeSystem Enumeration: {@link EligibilityresponsePurposeEnum }
   */
  private purpose: EnumCodeType[] | null;

  /**
   * CoverageEligibilityResponse.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended recipient of products and services
   * - **Definition:** The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
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
   * CoverageEligibilityResponse.serviced[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('CoverageEligibilityResponse.serviced[x]', ['date','Period',]`
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
  @ChoiceDataTypesMeta('CoverageEligibilityResponse.serviced[x]',[
    'date',
    'Period',
  ])
  private serviced?: IDataType | undefined;

  /**
   * CoverageEligibilityResponse.created Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Response creation date
   * - **Definition:** The date this resource was created.
   * - **Requirements:** Need to record a timestamp for use by both the recipient and the issuer.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private created: DateTimeType | null;

  /**
   * CoverageEligibilityResponse.requestor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Party responsible for the request
   * - **Definition:** The provider which is responsible for the request.
   * - **Comment:** Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
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
  private requestor?: Reference | undefined;

  /**
   * CoverageEligibilityResponse.request Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Eligibility request reference
   * - **Definition:** Reference to the original request resource.
   * - **Requirements:** Needed to allow the response to be linked to the request.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private request: Reference | null;

  /**
   * FHIR CodeSystem: RemittanceOutcome
   *
   * @see {@link RemittanceOutcomeEnum }
   */
  private readonly remittanceOutcomeEnum: RemittanceOutcomeEnum;

  /**
   * CoverageEligibilityResponse.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** queued | complete | error | partial
   * - **Definition:** The outcome of the request processing.
   * - **Comment:** The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   * - **Requirements:** To advise the requestor of an overall processing outcome.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  private outcome: EnumCodeType | null;

  /**
   * CoverageEligibilityResponse.disposition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Disposition Message
   * - **Definition:** A human readable description of the status of the adjudication.
   * - **Requirements:** Provided for user display.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private disposition?: StringType | undefined;

  /**
   * CoverageEligibilityResponse.insurer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coverage issuer
   * - **Definition:** The Insurer who issued the coverage in question and is the author of the response.
   * - **Requirements:** Need to identify the author.
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
   * CoverageEligibilityResponse.insurance Element
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
  private insurance?: CoverageEligibilityResponseInsuranceComponent[] | undefined;

  /**
   * CoverageEligibilityResponse.preAuthRef Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Preauthorization reference
   * - **Definition:** A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
   * - **Requirements:** To provide any preauthorization reference for provider use.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preAuthRef?: StringType | undefined;

  /**
   * CoverageEligibilityResponse.form Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Printed form identifier
   * - **Definition:** A code for the form to be used for printing the content.
   * - **Comment:** May be needed to identify specific jurisdictional forms.
   * - **Requirements:** Needed to specify the specific form used for producing output for this response.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private form?: CodeableConcept | undefined;

  /**
   * CoverageEligibilityResponse.error Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Processing errors
   * - **Definition:** Errors encountered during the processing of the request.
   * - **Requirements:** Need to communicate processing issues to the requestor.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private error?: CoverageEligibilityResponseErrorComponent[] | undefined;

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
      const optErrMsg = `Invalid CoverageEligibilityResponse.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid CoverageEligibilityResponse.identifier; Provided element is not an instance of Identifier.`;
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
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CoverageEligibilityResponse.status`;
      assertEnumCodeType<FmStatusEnum>(enumType, FmStatusEnum, errMsgPrefix);
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
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.fmStatusEnum);
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
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fmStatusEnum);
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
   * @returns the `purpose` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link EligibilityresponsePurposeEnum }
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
   * @see CodeSystem Enumeration: {@link EligibilityresponsePurposeEnum }
   */
  public setPurposeEnumType(enumType: EnumCodeType[] | undefined | null): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CoverageEligibilityResponse.purpose`;
      assertEnumCodeTypeList<EligibilityresponsePurposeEnum>(enumType, EligibilityresponsePurposeEnum, errMsgPrefix);
      this.purpose = enumType;
    } else {
      this.purpose = null;
    }
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
   * @see CodeSystem Enumeration: {@link EligibilityresponsePurposeEnum }
   */
  public addPurposeEnumType(enumType: EnumCodeType): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CoverageEligibilityResponse.purpose`;
      assertEnumCodeType<EligibilityresponsePurposeEnum>(enumType, EligibilityresponsePurposeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link EligibilityresponsePurposeEnum }
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
   * @see CodeSystem Enumeration: {@link EligibilityresponsePurposeEnum }
   */
  public setPurposeElement(element: CodeType[] | undefined | null): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.purpose; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.eligibilityresponsePurposeEnum));
      });
      this.purpose = enumCodeTypes;
    } else {
      this.purpose = null;
    }
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
   * @see CodeSystem Enumeration: {@link EligibilityresponsePurposeEnum }
   */
  public addPurposeElement(element: CodeType): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.purpose; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initPurpose();
      this.purpose?.push(new EnumCodeType(element, this.eligibilityresponsePurposeEnum));
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
   * @see CodeSystem Enumeration: {@link EligibilityresponsePurposeEnum }
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
   * @see CodeSystem Enumeration: {@link EligibilityresponsePurposeEnum }
   */
  public setPurpose(value: fhirCode[] | undefined | null): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid CoverageEligibilityResponse.purpose; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.eligibilityresponsePurposeEnum));
      });
      this.purpose = enumCodeTypes;
    } else {
      this.purpose = null;
    }
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
   * @see CodeSystem Enumeration: {@link EligibilityresponsePurposeEnum }
   */
  public addPurpose(value: fhirCode): this {
    if (isDefined<fhirCode>(value)) {
      this.initPurpose();
      const optErrMsg = `Invalid CoverageEligibilityResponse.purpose; Provided value is not an instance of fhirCode.`;
      this.purpose?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.eligibilityresponsePurposeEnum));
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
   * @returns the `patient` property value as a Reference object if defined; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('CoverageEligibilityResponse.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityResponse.patient', [
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
   * @returns the `serviced` property value as a DataType object if defined; else undefined
   */
  public getServiced(): IDataType | undefined {
    return this.serviced;
  }

  /**
   * Assigns the provided DataType object value to the `serviced` property.
   *
   * @decorator `@ChoiceDataTypes('CoverageEligibilityResponse.serviced[x]')`
   *
   * @param value - the `serviced` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('CoverageEligibilityResponse.serviced[x]')
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
        `DataType mismatch for CoverageEligibilityResponse.serviced[x]: Expected DateType but encountered ${this.serviced.fhirType()}`,
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
        `DataType mismatch for CoverageEligibilityResponse.serviced[x]: Expected Period but encountered ${this.serviced.fhirType()}`,
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
   * @returns the `created` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getCreatedElement(): DateTimeType {
    return this.created ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `created` property.
   *
   * @param element - the `created` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreatedElement(element: DateTimeType | undefined | null): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.created; Provided value is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.created = element;
    } else {
      this.created = null;
    }
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
  public setCreated(value: fhirDateTime | undefined | null): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.created (${String(value)})`;
      this.created = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.created = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `created` property exists and has a value; `false` otherwise
   */
  public hasCreated(): boolean {
    return this.hasCreatedElement();
  }

  /**
   * @returns the `requestor` property value as a Reference object; else an empty Reference object
   */
  public getRequestor(): Reference {
    return this.requestor ?? new Reference();
  }

  /**
   * Assigns the provided Requestor object value to the `requestor` property.
   *
   * @decorator `@ReferenceTargets('CoverageEligibilityResponse.requestor', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `requestor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityResponse.requestor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setRequestor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.requestor = value;
    } else {
      this.requestor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestor` property exists and has a value; `false` otherwise
   */
  public hasRequestor(): boolean {
    return isDefined<Reference>(this.requestor) && !this.requestor.isEmpty();
  }

  /**
   * @returns the `request` property value as a Reference object if defined; else an empty Reference object
   */
  public getRequest(): Reference {
    return this.request ?? new Reference();
  }

  /**
   * Assigns the provided Request object value to the `request` property.
   *
   * @decorator `@ReferenceTargets('CoverageEligibilityResponse.request', ['CoverageEligibilityRequest',])`
   *
   * @param value - the `request` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityResponse.request', [
    'CoverageEligibilityRequest',
  ])
  public setRequest(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.request = value;
    } else {
      this.request = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `request` property exists and has a value; `false` otherwise
   */
  public hasRequest(): boolean {
    return isDefined<Reference>(this.request) && !this.request.isEmpty();
  }

  /**
   * @returns the `outcome` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public getOutcomeEnumType(): EnumCodeType | null {
    return this.outcome;
  }

  /**
   * Assigns the provided EnumCodeType value to the `outcome` property.
   *
   * @param enumType - the `outcome` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public setOutcomeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CoverageEligibilityResponse.outcome`;
      assertEnumCodeType<RemittanceOutcomeEnum>(enumType, RemittanceOutcomeEnum, errMsgPrefix);
      this.outcome = enumType;
    } else {
      this.outcome = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcomeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.outcome) && !this.outcome.isEmpty() && this.outcome.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `outcome` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public getOutcomeElement(): CodeType | null {
    if (this.outcome === null) {
      return null;
    }
    return this.outcome as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `outcome` property.
   *
   * @param element - the `outcome` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public setOutcomeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.outcome; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.outcome = new EnumCodeType(element, this.remittanceOutcomeEnum);
    } else {
      this.outcome = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcomeElement(): boolean {
    return this.hasOutcomeEnumType();
  }

  /**
   * @returns the `outcome` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public getOutcome(): fhirCode | null {
    if (this.outcome === null) {
      return null;
    }
    return this.outcome.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `outcome` property.
   *
   * @param value - the `outcome` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public setOutcome(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.outcome (${String(value)})`;
      this.outcome = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.remittanceOutcomeEnum);
    } else {
      this.outcome = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcome(): boolean {
    return this.hasOutcomeEnumType();
  }

  /**
   * @returns the `disposition` property value as a StringType object if defined; else an empty StringType object
   */
  public getDispositionElement(): StringType {
    return this.disposition ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `disposition` property.
   *
   * @param element - the `disposition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDispositionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.disposition; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.disposition = element;
    } else {
      this.disposition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `disposition` property exists and has a value; `false` otherwise
   */
  public hasDispositionElement(): boolean {
    return isDefined<StringType>(this.disposition) && !this.disposition.isEmpty();
  }

  /**
   * @returns the `disposition` property value as a fhirString if defined; else undefined
   */
  public getDisposition(): fhirString | undefined {
    return this.disposition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `disposition` property.
   *
   * @param value - the `disposition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisposition(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.disposition (${String(value)})`;
      this.disposition = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.disposition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `disposition` property exists and has a value; `false` otherwise
   */
  public hasDisposition(): boolean {
    return this.hasDispositionElement();
  }

  /**
   * @returns the `insurer` property value as a Reference object if defined; else an empty Reference object
   */
  public getInsurer(): Reference {
    return this.insurer ?? new Reference();
  }

  /**
   * Assigns the provided Insurer object value to the `insurer` property.
   *
   * @decorator `@ReferenceTargets('CoverageEligibilityResponse.insurer', ['Organization',])`
   *
   * @param value - the `insurer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityResponse.insurer', [
    'Organization',
  ])
  public setInsurer(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.insurer = value;
    } else {
      this.insurer = null;
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
   * @returns the `insurance` property value as a CoverageEligibilityResponseInsuranceComponent array
   */
  public getInsurance(): CoverageEligibilityResponseInsuranceComponent[] {
    return this.insurance ?? ([] as CoverageEligibilityResponseInsuranceComponent[]);
  }

  /**
   * Assigns the provided CoverageEligibilityResponseInsuranceComponent array value to the `insurance` property.
   *
   * @param value - the `insurance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInsurance(value: CoverageEligibilityResponseInsuranceComponent[] | undefined): this {
    if (isDefinedList<CoverageEligibilityResponseInsuranceComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance; Provided value array has an element that is not an instance of CoverageEligibilityResponseInsuranceComponent.`;
      assertFhirTypeList<CoverageEligibilityResponseInsuranceComponent>(value, CoverageEligibilityResponseInsuranceComponent, optErrMsg);
      this.insurance = value;
    } else {
      this.insurance = undefined;
    }
    return this;
  }

  /**
   * Add the provided CoverageEligibilityResponseInsuranceComponent value to the `insurance` array property.
   *
   * @param value - the `insurance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInsurance(value: CoverageEligibilityResponseInsuranceComponent | undefined): this {
    if (isDefined<CoverageEligibilityResponseInsuranceComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance; Provided element is not an instance of CoverageEligibilityResponseInsuranceComponent.`;
      assertFhirType<CoverageEligibilityResponseInsuranceComponent>(value, CoverageEligibilityResponseInsuranceComponent, optErrMsg);
      this.initInsurance();
      this.insurance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `insurance` property exists and has a value; `false` otherwise
   */
  public hasInsurance(): boolean {
    return isDefinedList<CoverageEligibilityResponseInsuranceComponent>(this.insurance) && this.insurance.some((item: CoverageEligibilityResponseInsuranceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `insurance` property
   */
  private initInsurance(): void {
    if(!this.hasInsurance()) {
      this.insurance = [] as CoverageEligibilityResponseInsuranceComponent[];
    }
  }

  /**
   * @returns the `preAuthRef` property value as a StringType object if defined; else an empty StringType object
   */
  public getPreAuthRefElement(): StringType {
    return this.preAuthRef ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `preAuthRef` property.
   *
   * @param element - the `preAuthRef` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreAuthRefElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.preAuthRef; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.preAuthRef = element;
    } else {
      this.preAuthRef = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preAuthRef` property exists and has a value; `false` otherwise
   */
  public hasPreAuthRefElement(): boolean {
    return isDefined<StringType>(this.preAuthRef) && !this.preAuthRef.isEmpty();
  }

  /**
   * @returns the `preAuthRef` property value as a fhirString if defined; else undefined
   */
  public getPreAuthRef(): fhirString | undefined {
    return this.preAuthRef?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `preAuthRef` property.
   *
   * @param value - the `preAuthRef` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreAuthRef(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.preAuthRef (${String(value)})`;
      this.preAuthRef = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.preAuthRef = undefined;
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
   * @returns the `form` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getForm(): CodeableConcept {
    return this.form ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Form object value to the `form` property.
   *
   * @param value - the `form` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setForm(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.form; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.form = value;
    } else {
      this.form = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `form` property exists and has a value; `false` otherwise
   */
  public hasForm(): boolean {
    return isDefined<CodeableConcept>(this.form) && !this.form.isEmpty();
  }

  /**
   * @returns the `error` property value as a CoverageEligibilityResponseErrorComponent array
   */
  public getError(): CoverageEligibilityResponseErrorComponent[] {
    return this.error ?? ([] as CoverageEligibilityResponseErrorComponent[]);
  }

  /**
   * Assigns the provided CoverageEligibilityResponseErrorComponent array value to the `error` property.
   *
   * @param value - the `error` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setError(value: CoverageEligibilityResponseErrorComponent[] | undefined): this {
    if (isDefinedList<CoverageEligibilityResponseErrorComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.error; Provided value array has an element that is not an instance of CoverageEligibilityResponseErrorComponent.`;
      assertFhirTypeList<CoverageEligibilityResponseErrorComponent>(value, CoverageEligibilityResponseErrorComponent, optErrMsg);
      this.error = value;
    } else {
      this.error = undefined;
    }
    return this;
  }

  /**
   * Add the provided CoverageEligibilityResponseErrorComponent value to the `error` array property.
   *
   * @param value - the `error` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addError(value: CoverageEligibilityResponseErrorComponent | undefined): this {
    if (isDefined<CoverageEligibilityResponseErrorComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.error; Provided element is not an instance of CoverageEligibilityResponseErrorComponent.`;
      assertFhirType<CoverageEligibilityResponseErrorComponent>(value, CoverageEligibilityResponseErrorComponent, optErrMsg);
      this.initError();
      this.error?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `error` property exists and has a value; `false` otherwise
   */
  public hasError(): boolean {
    return isDefinedList<CoverageEligibilityResponseErrorComponent>(this.error) && this.error.some((item: CoverageEligibilityResponseErrorComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `error` property
   */
  private initError(): void {
    if(!this.hasError()) {
      this.error = [] as CoverageEligibilityResponseErrorComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CoverageEligibilityResponse';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.purpose,
      this.patient,
      this.serviced,
      this.created,
      this.requestor,
      this.request,
      this.outcome,
      this.disposition,
      this.insurer,
      this.insurance,
      this.preAuthRef,
      this.form,
      this.error,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.patient, this.created, this.request, this.outcome, this.insurer, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CoverageEligibilityResponse {
    const dest = new CoverageEligibilityResponse();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CoverageEligibilityResponse): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    const purposeList = copyListValues<EnumCodeType>(this.purpose);
    dest.purpose = purposeList.length === 0 ? null : purposeList;
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.serviced = this.serviced?.copy() as IDataType;
    dest.created = this.created ? this.created.copy() : null;
    dest.requestor = this.requestor?.copy();
    dest.request = this.request ? this.request.copy() : null;
    dest.outcome = this.outcome ? this.outcome.copy() : null;
    dest.disposition = this.disposition?.copy();
    dest.insurer = this.insurer ? this.insurer.copy() : null;
    const insuranceList = copyListValues<CoverageEligibilityResponseInsuranceComponent>(this.insurance);
    dest.insurance = insuranceList.length === 0 ? undefined : insuranceList;
    dest.preAuthRef = this.preAuthRef?.copy();
    dest.form = this.form?.copy();
    const errorList = copyListValues<CoverageEligibilityResponseErrorComponent>(this.error);
    dest.error = errorList.length === 0 ? undefined : errorList;
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

    if (this.hasPurposeElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getPurposeElement(), 'purpose', jsonObj);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    }

    if (this.hasServiced()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getServiced()!, 'serviced', jsonObj);
    }

    if (this.hasCreatedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getCreatedElement(), 'created', jsonObj);
    }

    if (this.hasRequestor()) {
      setFhirComplexJson(this.getRequestor(), 'requestor', jsonObj);
    }

    if (this.hasRequest()) {
      setFhirComplexJson(this.getRequest(), 'request', jsonObj);
    }

    if (this.hasOutcomeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getOutcomeElement()!, 'outcome', jsonObj);
    }

    if (this.hasDispositionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDispositionElement(), 'disposition', jsonObj);
    }

    if (this.hasInsurer()) {
      setFhirComplexJson(this.getInsurer(), 'insurer', jsonObj);
    }

    if (this.hasInsurance()) {
      setFhirBackboneElementListJson(this.getInsurance(), 'insurance', jsonObj);
    }

    if (this.hasPreAuthRefElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPreAuthRefElement(), 'preAuthRef', jsonObj);
    }

    if (this.hasForm()) {
      setFhirComplexJson(this.getForm(), 'form', jsonObj);
    }

    if (this.hasError()) {
      setFhirBackboneElementListJson(this.getError(), 'error', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * CoverageEligibilityResponseInsuranceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Patient insurance information
 * - **Definition:** Financial instruments for reimbursement for the health care products and services.
 * - **Comment:** All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local \'coordination of benefit\' rules. One coverage (and only one) with \'focal=true\' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where \'subrogation=false\', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 * - **Requirements:** There must be at least one coverage for which eligibility is requested.
 *
 * @category Data Models: Resource
 * @see [FHIR CoverageEligibilityResponse](http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse)
 */
export class CoverageEligibilityResponseInsuranceComponent extends BackboneElement implements IBackboneElement {
  constructor(coverage: Reference | null = null) {
    super();

    this.coverage = null;
    if (isDefined<Reference>(coverage)) {
      this.setCoverage(coverage);
    }
  }

  /**
   * Parse the provided `CoverageEligibilityResponseInsuranceComponent` JSON to instantiate the CoverageEligibilityResponseInsuranceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CoverageEligibilityResponseInsuranceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CoverageEligibilityResponseInsuranceComponent
   * @returns CoverageEligibilityResponseInsuranceComponent data model or undefined for `CoverageEligibilityResponseInsuranceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CoverageEligibilityResponseInsuranceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CoverageEligibilityResponseInsuranceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CoverageEligibilityResponseInsuranceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'coverage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCoverage(null);
      } else {
        instance.setCoverage(datatype);
      }
    } else {
      instance.setCoverage(null);
    }

    fieldName = 'inforce';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setInforceElement(datatype);
    }

    fieldName = 'benefitPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBenefitPeriod(datatype);
    }

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: CoverageEligibilityResponseInsuranceItemComponent | undefined = CoverageEligibilityResponseInsuranceItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addItem(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * CoverageEligibilityResponse.insurance.coverage Element
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
   * CoverageEligibilityResponse.insurance.inforce Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coverage inforce indicator
   * - **Definition:** Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
   * - **Requirements:** Needed to convey the answer to the eligibility validation request.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private inforce?: BooleanType | undefined;

  /**
   * CoverageEligibilityResponse.insurance.benefitPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the benefits are applicable
   * - **Definition:** The term of the benefits documented in this response.
   * - **Requirements:** Needed as coverages may be multi-year while benefits tend to be annual therefore a separate expression of the benefit period is needed.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private benefitPeriod?: Period | undefined;

  /**
   * CoverageEligibilityResponse.insurance.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefits and authorization details
   * - **Definition:** Benefits and optionally current balances, and authorization details by category or service.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item?: CoverageEligibilityResponseInsuranceItemComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `coverage` property value as a Reference object if defined; else an empty Reference object
   */
  public getCoverage(): Reference {
    return this.coverage ?? new Reference();
  }

  /**
   * Assigns the provided Coverage object value to the `coverage` property.
   *
   * @decorator `@ReferenceTargets('CoverageEligibilityResponse.insurance.coverage', ['Coverage',])`
   *
   * @param value - the `coverage` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityResponse.insurance.coverage', [
    'Coverage',
  ])
  public setCoverage(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.coverage = value;
    } else {
      this.coverage = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `coverage` property exists and has a value; `false` otherwise
   */
  public hasCoverage(): boolean {
    return isDefined<Reference>(this.coverage) && !this.coverage.isEmpty();
  }

  /**
   * @returns the `inforce` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getInforceElement(): BooleanType {
    return this.inforce ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `inforce` property.
   *
   * @param element - the `inforce` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInforceElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.inforce; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.inforce = element;
    } else {
      this.inforce = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `inforce` property exists and has a value; `false` otherwise
   */
  public hasInforceElement(): boolean {
    return isDefined<BooleanType>(this.inforce) && !this.inforce.isEmpty();
  }

  /**
   * @returns the `inforce` property value as a fhirBoolean if defined; else undefined
   */
  public getInforce(): fhirBoolean | undefined {
    return this.inforce?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `inforce` property.
   *
   * @param value - the `inforce` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInforce(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.inforce (${String(value)})`;
      this.inforce = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.inforce = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `inforce` property exists and has a value; `false` otherwise
   */
  public hasInforce(): boolean {
    return this.hasInforceElement();
  }

  /**
   * @returns the `benefitPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getBenefitPeriod(): Period {
    return this.benefitPeriod ?? new Period();
  }

  /**
   * Assigns the provided BenefitPeriod object value to the `benefitPeriod` property.
   *
   * @param value - the `benefitPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBenefitPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.benefitPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.benefitPeriod = value;
    } else {
      this.benefitPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `benefitPeriod` property exists and has a value; `false` otherwise
   */
  public hasBenefitPeriod(): boolean {
    return isDefined<Period>(this.benefitPeriod) && !this.benefitPeriod.isEmpty();
  }

  /**
   * @returns the `item` property value as a CoverageEligibilityResponseInsuranceItemComponent array
   */
  public getItem(): CoverageEligibilityResponseInsuranceItemComponent[] {
    return this.item ?? ([] as CoverageEligibilityResponseInsuranceItemComponent[]);
  }

  /**
   * Assigns the provided CoverageEligibilityResponseInsuranceItemComponent array value to the `item` property.
   *
   * @param value - the `item` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: CoverageEligibilityResponseInsuranceItemComponent[] | undefined): this {
    if (isDefinedList<CoverageEligibilityResponseInsuranceItemComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item; Provided value array has an element that is not an instance of CoverageEligibilityResponseInsuranceItemComponent.`;
      assertFhirTypeList<CoverageEligibilityResponseInsuranceItemComponent>(value, CoverageEligibilityResponseInsuranceItemComponent, optErrMsg);
      this.item = value;
    } else {
      this.item = undefined;
    }
    return this;
  }

  /**
   * Add the provided CoverageEligibilityResponseInsuranceItemComponent value to the `item` array property.
   *
   * @param value - the `item` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addItem(value: CoverageEligibilityResponseInsuranceItemComponent | undefined): this {
    if (isDefined<CoverageEligibilityResponseInsuranceItemComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item; Provided element is not an instance of CoverageEligibilityResponseInsuranceItemComponent.`;
      assertFhirType<CoverageEligibilityResponseInsuranceItemComponent>(value, CoverageEligibilityResponseInsuranceItemComponent, optErrMsg);
      this.initItem();
      this.item?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefinedList<CoverageEligibilityResponseInsuranceItemComponent>(this.item) && this.item.some((item: CoverageEligibilityResponseInsuranceItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `item` property
   */
  private initItem(): void {
    if(!this.hasItem()) {
      this.item = [] as CoverageEligibilityResponseInsuranceItemComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CoverageEligibilityResponse.insurance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.coverage,
      this.inforce,
      this.benefitPeriod,
      this.item,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.coverage, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CoverageEligibilityResponseInsuranceComponent {
    const dest = new CoverageEligibilityResponseInsuranceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CoverageEligibilityResponseInsuranceComponent): void {
    super.copyValues(dest);
    dest.coverage = this.coverage ? this.coverage.copy() : null;
    dest.inforce = this.inforce?.copy();
    dest.benefitPeriod = this.benefitPeriod?.copy();
    const itemList = copyListValues<CoverageEligibilityResponseInsuranceItemComponent>(this.item);
    dest.item = itemList.length === 0 ? undefined : itemList;
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

    if (this.hasCoverage()) {
      setFhirComplexJson(this.getCoverage(), 'coverage', jsonObj);
    }

    if (this.hasInforceElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getInforceElement(), 'inforce', jsonObj);
    }

    if (this.hasBenefitPeriod()) {
      setFhirComplexJson(this.getBenefitPeriod(), 'benefitPeriod', jsonObj);
    }

    if (this.hasItem()) {
      setFhirBackboneElementListJson(this.getItem(), 'item', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CoverageEligibilityResponseInsuranceItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Benefits and authorization details
 * - **Definition:** Benefits and optionally current balances, and authorization details by category or service.
 *
 * @category Data Models: Resource
 * @see [FHIR CoverageEligibilityResponse](http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse)
 */
export class CoverageEligibilityResponseInsuranceItemComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CoverageEligibilityResponseInsuranceItemComponent` JSON to instantiate the CoverageEligibilityResponseInsuranceItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CoverageEligibilityResponseInsuranceItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CoverageEligibilityResponseInsuranceItemComponent
   * @returns CoverageEligibilityResponseInsuranceItemComponent data model or undefined for `CoverageEligibilityResponseInsuranceItemComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CoverageEligibilityResponseInsuranceItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CoverageEligibilityResponseInsuranceItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CoverageEligibilityResponseInsuranceItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addModifier(datatype);
          }
        });
      }
    }

    fieldName = 'provider';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProvider(datatype);
    }

    fieldName = 'excluded';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setExcludedElement(datatype);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'network';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNetwork(datatype);
    }

    fieldName = 'unit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnit(datatype);
    }

    fieldName = 'term';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTerm(datatype);
    }

    fieldName = 'benefit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: CoverageEligibilityResponseInsuranceItemBenefitComponent | undefined = CoverageEligibilityResponseInsuranceItemBenefitComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addBenefit(component);
          }
        });
      }
    }

    fieldName = 'authorizationRequired';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAuthorizationRequiredElement(datatype);
    }

    fieldName = 'authorizationSupporting';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAuthorizationSupporting(datatype);
          }
        });
      }
    }

    fieldName = 'authorizationUrl';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setAuthorizationUrlElement(datatype);
    }

    return instance;
  }

  /**
   * CoverageEligibilityResponse.insurance.item.category Element
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
   * CoverageEligibilityResponse.insurance.item.productOrService Element
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
   * CoverageEligibilityResponse.insurance.item.modifier Element
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
   * CoverageEligibilityResponse.insurance.item.provider Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Performing practitioner
   * - **Definition:** The practitioner who is eligible for the provision of the product or service.
   * - **Requirements:** Needed to convey the eligible provider.
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
   * CoverageEligibilityResponse.insurance.item.excluded Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Excluded from the plan
   * - **Definition:** True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
   * - **Requirements:** Needed to identify items that are specifically excluded from the coverage.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private excluded?: BooleanType | undefined;

  /**
   * CoverageEligibilityResponse.insurance.item.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Short name for the benefit
   * - **Definition:** A short name or tag for the benefit.
   * - **Comment:** For example: MED01, or DENT2.
   * - **Requirements:** Required to align with other plan names.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

  /**
   * CoverageEligibilityResponse.insurance.item.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the benefit or services covered
   * - **Definition:** A richer description of the benefit or services covered.
   * - **Comment:** For example \'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services\'.
   * - **Requirements:** Needed for human readable reference.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * CoverageEligibilityResponse.insurance.item.network Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** In or out of network
   * - **Definition:** Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
   * - **Requirements:** Needed as in or out of network providers are treated differently under the coverage.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private network?: CodeableConcept | undefined;

  /**
   * CoverageEligibilityResponse.insurance.item.unit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual or family
   * - **Definition:** Indicates if the benefits apply to an individual or to the family.
   * - **Requirements:** Needed for the understanding of the benefits.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private unit?: CodeableConcept | undefined;

  /**
   * CoverageEligibilityResponse.insurance.item.term Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Annual or lifetime
   * - **Definition:** The term or period of the values such as \'maximum lifetime benefit\' or \'maximum annual visits\'.
   * - **Requirements:** Needed for the understanding of the benefits.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private term?: CodeableConcept | undefined;

  /**
   * CoverageEligibilityResponse.insurance.item.benefit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefit Summary
   * - **Definition:** Benefits used to date.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private benefit?: CoverageEligibilityResponseInsuranceItemBenefitComponent[] | undefined;

  /**
   * CoverageEligibilityResponse.insurance.item.authorizationRequired Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Authorization required flag
   * - **Definition:** A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
   * - **Requirements:** Needed to convey that preauthorization is required.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authorizationRequired?: BooleanType | undefined;

  /**
   * CoverageEligibilityResponse.insurance.item.authorizationSupporting Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of required supporting materials
   * - **Definition:** Codes or comments regarding information or actions associated with the preauthorization.
   * - **Requirements:** Needed to inform the provider of collateral materials or actions needed for preauthorization.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authorizationSupporting?: CodeableConcept[] | undefined;

  /**
   * CoverageEligibilityResponse.insurance.item.authorizationUrl Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Preauthorization requirements endpoint
   * - **Definition:** A web location for obtaining requirements or descriptive information regarding the preauthorization.
   * - **Requirements:** Needed to enable insurers to advise providers of informative information.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authorizationUrl?: UriType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.category; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.productOrService; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.modifier; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('CoverageEligibilityResponse.insurance.item.provider', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `provider` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CoverageEligibilityResponse.insurance.item.provider', [
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
   * @returns the `excluded` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getExcludedElement(): BooleanType {
    return this.excluded ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `excluded` property.
   *
   * @param element - the `excluded` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExcludedElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.excluded; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.excluded = element;
    } else {
      this.excluded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `excluded` property exists and has a value; `false` otherwise
   */
  public hasExcludedElement(): boolean {
    return isDefined<BooleanType>(this.excluded) && !this.excluded.isEmpty();
  }

  /**
   * @returns the `excluded` property value as a fhirBoolean if defined; else undefined
   */
  public getExcluded(): fhirBoolean | undefined {
    return this.excluded?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `excluded` property.
   *
   * @param value - the `excluded` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExcluded(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.excluded (${String(value)})`;
      this.excluded = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.excluded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `excluded` property exists and has a value; `false` otherwise
   */
  public hasExcluded(): boolean {
    return this.hasExcludedElement();
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
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.name (${String(value)})`;
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

  /**
   * @returns the `description` property value as a StringType object if defined; else an empty StringType object
   */
  public getDescriptionElement(): StringType {
    return this.description ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.description; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.description = element;
    } else {
      this.description = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescriptionElement(): boolean {
    return isDefined<StringType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirString if defined; else undefined
   */
  public getDescription(): fhirString | undefined {
    return this.description?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.description (${String(value)})`;
      this.description = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.description = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescription(): boolean {
    return this.hasDescriptionElement();
  }

  /**
   * @returns the `network` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getNetwork(): CodeableConcept {
    return this.network ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Network object value to the `network` property.
   *
   * @param value - the `network` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNetwork(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.network; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.network = value;
    } else {
      this.network = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `network` property exists and has a value; `false` otherwise
   */
  public hasNetwork(): boolean {
    return isDefined<CodeableConcept>(this.network) && !this.network.isEmpty();
  }

  /**
   * @returns the `unit` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getUnit(): CodeableConcept {
    return this.unit ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Unit object value to the `unit` property.
   *
   * @param value - the `unit` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUnit(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.unit; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.unit = value;
    } else {
      this.unit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unit` property exists and has a value; `false` otherwise
   */
  public hasUnit(): boolean {
    return isDefined<CodeableConcept>(this.unit) && !this.unit.isEmpty();
  }

  /**
   * @returns the `term` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getTerm(): CodeableConcept {
    return this.term ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Term object value to the `term` property.
   *
   * @param value - the `term` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTerm(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.term; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.term = value;
    } else {
      this.term = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `term` property exists and has a value; `false` otherwise
   */
  public hasTerm(): boolean {
    return isDefined<CodeableConcept>(this.term) && !this.term.isEmpty();
  }

  /**
   * @returns the `benefit` property value as a CoverageEligibilityResponseInsuranceItemBenefitComponent array
   */
  public getBenefit(): CoverageEligibilityResponseInsuranceItemBenefitComponent[] {
    return this.benefit ?? ([] as CoverageEligibilityResponseInsuranceItemBenefitComponent[]);
  }

  /**
   * Assigns the provided CoverageEligibilityResponseInsuranceItemBenefitComponent array value to the `benefit` property.
   *
   * @param value - the `benefit` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBenefit(value: CoverageEligibilityResponseInsuranceItemBenefitComponent[] | undefined): this {
    if (isDefinedList<CoverageEligibilityResponseInsuranceItemBenefitComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.benefit; Provided value array has an element that is not an instance of CoverageEligibilityResponseInsuranceItemBenefitComponent.`;
      assertFhirTypeList<CoverageEligibilityResponseInsuranceItemBenefitComponent>(value, CoverageEligibilityResponseInsuranceItemBenefitComponent, optErrMsg);
      this.benefit = value;
    } else {
      this.benefit = undefined;
    }
    return this;
  }

  /**
   * Add the provided CoverageEligibilityResponseInsuranceItemBenefitComponent value to the `benefit` array property.
   *
   * @param value - the `benefit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBenefit(value: CoverageEligibilityResponseInsuranceItemBenefitComponent | undefined): this {
    if (isDefined<CoverageEligibilityResponseInsuranceItemBenefitComponent>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.benefit; Provided element is not an instance of CoverageEligibilityResponseInsuranceItemBenefitComponent.`;
      assertFhirType<CoverageEligibilityResponseInsuranceItemBenefitComponent>(value, CoverageEligibilityResponseInsuranceItemBenefitComponent, optErrMsg);
      this.initBenefit();
      this.benefit?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `benefit` property exists and has a value; `false` otherwise
   */
  public hasBenefit(): boolean {
    return isDefinedList<CoverageEligibilityResponseInsuranceItemBenefitComponent>(this.benefit) && this.benefit.some((item: CoverageEligibilityResponseInsuranceItemBenefitComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `benefit` property
   */
  private initBenefit(): void {
    if(!this.hasBenefit()) {
      this.benefit = [] as CoverageEligibilityResponseInsuranceItemBenefitComponent[];
    }
  }

  /**
   * @returns the `authorizationRequired` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAuthorizationRequiredElement(): BooleanType {
    return this.authorizationRequired ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `authorizationRequired` property.
   *
   * @param element - the `authorizationRequired` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthorizationRequiredElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.authorizationRequired; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.authorizationRequired = element;
    } else {
      this.authorizationRequired = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authorizationRequired` property exists and has a value; `false` otherwise
   */
  public hasAuthorizationRequiredElement(): boolean {
    return isDefined<BooleanType>(this.authorizationRequired) && !this.authorizationRequired.isEmpty();
  }

  /**
   * @returns the `authorizationRequired` property value as a fhirBoolean if defined; else undefined
   */
  public getAuthorizationRequired(): fhirBoolean | undefined {
    return this.authorizationRequired?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `authorizationRequired` property.
   *
   * @param value - the `authorizationRequired` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthorizationRequired(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.authorizationRequired (${String(value)})`;
      this.authorizationRequired = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.authorizationRequired = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authorizationRequired` property exists and has a value; `false` otherwise
   */
  public hasAuthorizationRequired(): boolean {
    return this.hasAuthorizationRequiredElement();
  }

  /**
   * @returns the `authorizationSupporting` property value as a CodeableConcept array
   */
  public getAuthorizationSupporting(): CodeableConcept[] {
    return this.authorizationSupporting ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `authorizationSupporting` property.
   *
   * @param value - the `authorizationSupporting` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAuthorizationSupporting(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.authorizationSupporting; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.authorizationSupporting = value;
    } else {
      this.authorizationSupporting = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `authorizationSupporting` array property.
   *
   * @param value - the `authorizationSupporting` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAuthorizationSupporting(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.authorizationSupporting; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initAuthorizationSupporting();
      this.authorizationSupporting?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `authorizationSupporting` property exists and has a value; `false` otherwise
   */
  public hasAuthorizationSupporting(): boolean {
    return isDefinedList<CodeableConcept>(this.authorizationSupporting) && this.authorizationSupporting.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `authorizationSupporting` property
   */
  private initAuthorizationSupporting(): void {
    if(!this.hasAuthorizationSupporting()) {
      this.authorizationSupporting = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `authorizationUrl` property value as a UriType object if defined; else an empty UriType object
   */
  public getAuthorizationUrlElement(): UriType {
    return this.authorizationUrl ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `authorizationUrl` property.
   *
   * @param element - the `authorizationUrl` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthorizationUrlElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.authorizationUrl; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.authorizationUrl = element;
    } else {
      this.authorizationUrl = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authorizationUrl` property exists and has a value; `false` otherwise
   */
  public hasAuthorizationUrlElement(): boolean {
    return isDefined<UriType>(this.authorizationUrl) && !this.authorizationUrl.isEmpty();
  }

  /**
   * @returns the `authorizationUrl` property value as a fhirUri if defined; else undefined
   */
  public getAuthorizationUrl(): fhirUri | undefined {
    return this.authorizationUrl?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `authorizationUrl` property.
   *
   * @param value - the `authorizationUrl` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthorizationUrl(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.authorizationUrl (${String(value)})`;
      this.authorizationUrl = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.authorizationUrl = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authorizationUrl` property exists and has a value; `false` otherwise
   */
  public hasAuthorizationUrl(): boolean {
    return this.hasAuthorizationUrlElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CoverageEligibilityResponse.insurance.item';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.productOrService,
      this.modifier,
      this.provider,
      this.excluded,
      this.name,
      this.description,
      this.network,
      this.unit,
      this.term,
      this.benefit,
      this.authorizationRequired,
      this.authorizationSupporting,
      this.authorizationUrl,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CoverageEligibilityResponseInsuranceItemComponent {
    const dest = new CoverageEligibilityResponseInsuranceItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CoverageEligibilityResponseInsuranceItemComponent): void {
    super.copyValues(dest);
    dest.category = this.category?.copy();
    dest.productOrService = this.productOrService?.copy();
    const modifierList = copyListValues<CodeableConcept>(this.modifier);
    dest.modifier = modifierList.length === 0 ? undefined : modifierList;
    dest.provider = this.provider?.copy();
    dest.excluded = this.excluded?.copy();
    dest.name = this.name?.copy();
    dest.description = this.description?.copy();
    dest.network = this.network?.copy();
    dest.unit = this.unit?.copy();
    dest.term = this.term?.copy();
    const benefitList = copyListValues<CoverageEligibilityResponseInsuranceItemBenefitComponent>(this.benefit);
    dest.benefit = benefitList.length === 0 ? undefined : benefitList;
    dest.authorizationRequired = this.authorizationRequired?.copy();
    const authorizationSupportingList = copyListValues<CodeableConcept>(this.authorizationSupporting);
    dest.authorizationSupporting = authorizationSupportingList.length === 0 ? undefined : authorizationSupportingList;
    dest.authorizationUrl = this.authorizationUrl?.copy();
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

    if (this.hasExcludedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExcludedElement(), 'excluded', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasNetwork()) {
      setFhirComplexJson(this.getNetwork(), 'network', jsonObj);
    }

    if (this.hasUnit()) {
      setFhirComplexJson(this.getUnit(), 'unit', jsonObj);
    }

    if (this.hasTerm()) {
      setFhirComplexJson(this.getTerm(), 'term', jsonObj);
    }

    if (this.hasBenefit()) {
      setFhirBackboneElementListJson(this.getBenefit(), 'benefit', jsonObj);
    }

    if (this.hasAuthorizationRequiredElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAuthorizationRequiredElement(), 'authorizationRequired', jsonObj);
    }

    if (this.hasAuthorizationSupporting()) {
      setFhirComplexListJson(this.getAuthorizationSupporting(), 'authorizationSupporting', jsonObj);
    }

    if (this.hasAuthorizationUrlElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getAuthorizationUrlElement(), 'authorizationUrl', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CoverageEligibilityResponseInsuranceItemBenefitComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Benefit Summary
 * - **Definition:** Benefits used to date.
 *
 * @category Data Models: Resource
 * @see [FHIR CoverageEligibilityResponse](http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse)
 */
export class CoverageEligibilityResponseInsuranceItemBenefitComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `CoverageEligibilityResponseInsuranceItemBenefitComponent` JSON to instantiate the CoverageEligibilityResponseInsuranceItemBenefitComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CoverageEligibilityResponseInsuranceItemBenefitComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CoverageEligibilityResponseInsuranceItemBenefitComponent
   * @returns CoverageEligibilityResponseInsuranceItemBenefitComponent data model or undefined for `CoverageEligibilityResponseInsuranceItemBenefitComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CoverageEligibilityResponseInsuranceItemBenefitComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CoverageEligibilityResponseInsuranceItemBenefitComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CoverageEligibilityResponseInsuranceItemBenefitComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = CoverageEligibilityResponseInsuranceItemBenefitComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for CoverageEligibilityResponseInsuranceItemBenefitComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setType(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'allowed[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const allowed: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setAllowed(allowed);

    fieldName = 'used[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const used: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setUsed(used);

    return instance;
  }

  /**
   * CoverageEligibilityResponse.insurance.item.benefit.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefit classification
   * - **Definition:** Classification of benefit being provided.
   * - **Comment:** For example: deductible, visits, benefit amount.
   * - **Requirements:** Needed to convey the nature of the benefit.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * CoverageEligibilityResponse.insurance.item.benefit.allowed[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('CoverageEligibilityResponse.insurance.item.benefit.allowed[x]', ['unsignedInt','string','Money',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefits allowed
   * - **Definition:** The quantity of the benefit which is permitted under the coverage.
   * - **Requirements:** Needed to convey the benefits offered under the coverage.
   * - **FHIR Types:**
   *     'unsignedInt',
   *     'string',
   *     'Money',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('CoverageEligibilityResponse.insurance.item.benefit.allowed[x]',[
    'unsignedInt',
    'string',
    'Money',
  ])
  private allowed?: IDataType | undefined;

  /**
   * CoverageEligibilityResponse.insurance.item.benefit.used[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('CoverageEligibilityResponse.insurance.item.benefit.used[x]', ['unsignedInt','string','Money',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefits used
   * - **Definition:** The quantity of the benefit which have been consumed to date.
   * - **Requirements:** Needed to convey the benefits consumed to date.
   * - **FHIR Types:**
   *     'unsignedInt',
   *     'string',
   *     'Money',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('CoverageEligibilityResponse.insurance.item.benefit.used[x]',[
    'unsignedInt',
    'string',
    'Money',
  ])
  private used?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getType(): CodeableConcept {
    return this.type_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.insurance.item.benefit.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = null;
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
   * @returns the `allowed` property value as a DataType object if defined; else undefined
   */
  public getAllowed(): IDataType | undefined {
    return this.allowed;
  }

  /**
   * Assigns the provided DataType object value to the `allowed` property.
   *
   * @decorator `@ChoiceDataTypes('CoverageEligibilityResponse.insurance.item.benefit.allowed[x]')`
   *
   * @param value - the `allowed` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('CoverageEligibilityResponse.insurance.item.benefit.allowed[x]')
  public setAllowed(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.allowed = value;
    } else {
      this.allowed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `allowed` property exists and has a value; `false` otherwise
   */
  public hasAllowed(): boolean {
    return isDefined<IDataType>(this.allowed) && !this.allowed.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `allowed` property value as a UnsignedIntType object if defined; else undefined
   */
  public getAllowedUnsignedIntType(): UnsignedIntType | undefined {
    if (!isDefined<IDataType | undefined>(this.allowed)) {
      return undefined;
    }
    if (!(this.allowed instanceof UnsignedIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for CoverageEligibilityResponse.insurance.item.benefit.allowed[x]: Expected UnsignedIntType but encountered ${this.allowed.fhirType()}`,
      );
    }
    return this.allowed;
  }

  /**
   * @returns `true` if the `allowed` property exists as a UnsignedIntType and has a value; `false` otherwise
   */
  public hasAllowedUnsignedIntType(): boolean {
    return this.hasAllowed() && this.allowed instanceof UnsignedIntType;
  }

  /**
   * @returns the `allowed` property value as a StringType object if defined; else undefined
   */
  public getAllowedStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.allowed)) {
      return undefined;
    }
    if (!(this.allowed instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for CoverageEligibilityResponse.insurance.item.benefit.allowed[x]: Expected StringType but encountered ${this.allowed.fhirType()}`,
      );
    }
    return this.allowed;
  }

  /**
   * @returns `true` if the `allowed` property exists as a StringType and has a value; `false` otherwise
   */
  public hasAllowedStringType(): boolean {
    return this.hasAllowed() && this.allowed instanceof StringType;
  }

  /**
   * @returns the `allowed` property value as a Money object if defined; else undefined
   */
  public getAllowedMoney(): Money | undefined {
    if (!isDefined<IDataType | undefined>(this.allowed)) {
      return undefined;
    }
    if (!(this.allowed instanceof Money)) {
      throw new InvalidTypeError(
        `DataType mismatch for CoverageEligibilityResponse.insurance.item.benefit.allowed[x]: Expected Money but encountered ${this.allowed.fhirType()}`,
      );
    }
    return this.allowed;
  }

  /**
   * @returns `true` if the `allowed` property exists as a Money and has a value; `false` otherwise
   */
  public hasAllowedMoney(): boolean {
    return this.hasAllowed() && this.allowed instanceof Money;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `used` property value as a DataType object if defined; else undefined
   */
  public getUsed(): IDataType | undefined {
    return this.used;
  }

  /**
   * Assigns the provided DataType object value to the `used` property.
   *
   * @decorator `@ChoiceDataTypes('CoverageEligibilityResponse.insurance.item.benefit.used[x]')`
   *
   * @param value - the `used` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('CoverageEligibilityResponse.insurance.item.benefit.used[x]')
  public setUsed(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.used = value;
    } else {
      this.used = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `used` property exists and has a value; `false` otherwise
   */
  public hasUsed(): boolean {
    return isDefined<IDataType>(this.used) && !this.used.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `used` property value as a UnsignedIntType object if defined; else undefined
   */
  public getUsedUnsignedIntType(): UnsignedIntType | undefined {
    if (!isDefined<IDataType | undefined>(this.used)) {
      return undefined;
    }
    if (!(this.used instanceof UnsignedIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for CoverageEligibilityResponse.insurance.item.benefit.used[x]: Expected UnsignedIntType but encountered ${this.used.fhirType()}`,
      );
    }
    return this.used;
  }

  /**
   * @returns `true` if the `used` property exists as a UnsignedIntType and has a value; `false` otherwise
   */
  public hasUsedUnsignedIntType(): boolean {
    return this.hasUsed() && this.used instanceof UnsignedIntType;
  }

  /**
   * @returns the `used` property value as a StringType object if defined; else undefined
   */
  public getUsedStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.used)) {
      return undefined;
    }
    if (!(this.used instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for CoverageEligibilityResponse.insurance.item.benefit.used[x]: Expected StringType but encountered ${this.used.fhirType()}`,
      );
    }
    return this.used;
  }

  /**
   * @returns `true` if the `used` property exists as a StringType and has a value; `false` otherwise
   */
  public hasUsedStringType(): boolean {
    return this.hasUsed() && this.used instanceof StringType;
  }

  /**
   * @returns the `used` property value as a Money object if defined; else undefined
   */
  public getUsedMoney(): Money | undefined {
    if (!isDefined<IDataType | undefined>(this.used)) {
      return undefined;
    }
    if (!(this.used instanceof Money)) {
      throw new InvalidTypeError(
        `DataType mismatch for CoverageEligibilityResponse.insurance.item.benefit.used[x]: Expected Money but encountered ${this.used.fhirType()}`,
      );
    }
    return this.used;
  }

  /**
   * @returns `true` if the `used` property exists as a Money and has a value; `false` otherwise
   */
  public hasUsedMoney(): boolean {
    return this.hasUsed() && this.used instanceof Money;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CoverageEligibilityResponse.insurance.item.benefit';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.allowed,
      this.used,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CoverageEligibilityResponseInsuranceItemBenefitComponent {
    const dest = new CoverageEligibilityResponseInsuranceItemBenefitComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CoverageEligibilityResponseInsuranceItemBenefitComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.allowed = this.allowed?.copy() as IDataType;
    dest.used = this.used?.copy() as IDataType;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasAllowed()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAllowed()!, 'allowed', jsonObj);
    }

    if (this.hasUsed()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getUsed()!, 'used', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CoverageEligibilityResponseErrorComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Processing errors
 * - **Definition:** Errors encountered during the processing of the request.
 * - **Requirements:** Need to communicate processing issues to the requestor.
 *
 * @category Data Models: Resource
 * @see [FHIR CoverageEligibilityResponse](http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse)
 */
export class CoverageEligibilityResponseErrorComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `CoverageEligibilityResponseErrorComponent` JSON to instantiate the CoverageEligibilityResponseErrorComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CoverageEligibilityResponseErrorComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CoverageEligibilityResponseErrorComponent
   * @returns CoverageEligibilityResponseErrorComponent data model or undefined for `CoverageEligibilityResponseErrorComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CoverageEligibilityResponseErrorComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CoverageEligibilityResponseErrorComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CoverageEligibilityResponseErrorComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCode(datatype);
      }
    } else {
      instance.setCode(null);
    }

    return instance;
  }

  /**
   * CoverageEligibilityResponse.error.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Error code detailing processing issues
   * - **Definition:** An error code,from a specified code system, which details why the eligibility check could not be performed.
   * - **Requirements:** Required to convey processing errors.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeableConcept | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CoverageEligibilityResponse.error.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CoverageEligibilityResponse.error';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CoverageEligibilityResponseErrorComponent {
    const dest = new CoverageEligibilityResponseErrorComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CoverageEligibilityResponseErrorComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
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

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    return jsonObj;
  }
}
