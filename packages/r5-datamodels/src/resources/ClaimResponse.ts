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
 * ClaimResponse Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ClaimResponse
 * StructureDefinition.name: ClaimResponse
 * StructureDefinition.description: This resource provides the adjudication details from the processing of a Claim resource.
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
import { Address, Attachment, CodeableConcept, CodeableReference, Identifier, Money, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference } from '../complex-types/complex-datatypes';
import { ClaimOutcomeEnum } from '../code-systems/ClaimOutcomeEnum';
import { ClaimUseEnum } from '../code-systems/ClaimUseEnum';
import { FmStatusEnum } from '../code-systems/FmStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ClaimResponse Class
 *
 * @remarks
 * This resource provides the adjudication details from the processing of a Claim resource.
 *
 * **FHIR Specification**
 * - **Short:** Response to a claim predetermination or preauthorization
 * - **Definition:** This resource provides the adjudication details from the processing of a Claim resource.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponse extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, type_: CodeableConcept | null = null, use: EnumCodeType | CodeType | fhirCode | null = null, patient: Reference | null = null, created: DateTimeType | fhirDateTime | null = null, outcome: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.fmStatusEnum = new FmStatusEnum();
    this.claimUseEnum = new ClaimUseEnum();
    this.claimOutcomeEnum = new ClaimOutcomeEnum();

    this.status = constructorCodeValueAsEnumCodeType<FmStatusEnum>(
      status,
      FmStatusEnum,
      this.fmStatusEnum,
      'ClaimResponse.status',
    );

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.use = constructorCodeValueAsEnumCodeType<ClaimUseEnum>(
      use,
      ClaimUseEnum,
      this.claimUseEnum,
      'ClaimResponse.use',
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

    this.outcome = constructorCodeValueAsEnumCodeType<ClaimOutcomeEnum>(
      outcome,
      ClaimOutcomeEnum,
      this.claimOutcomeEnum,
      'ClaimResponse.outcome',
    );
  }

  /**
   * Parse the provided `ClaimResponse` JSON to instantiate the ClaimResponse data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponse`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponse
   * @returns ClaimResponse data model or undefined for `ClaimResponse`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponse | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponse';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponse();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ClaimResponse');
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

    fieldName = 'traceNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTraceNumber(datatype);
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

    fieldName = 'insurer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setInsurer(datatype);
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
      instance.setRequest(datatype);
    }

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setOutcomeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'decision';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDecision(datatype);
    }

    fieldName = 'disposition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDispositionElement(datatype);
    }

    fieldName = 'preAuthRef';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPreAuthRefElement(datatype);
    }

    fieldName = 'preAuthPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPreAuthPeriod(datatype);
    }

    fieldName = 'event';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseEventComponent | undefined = ClaimResponseEventComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addEvent(component);
        }
      });
    }

    fieldName = 'payeeType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPayeeType(datatype);
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

    fieldName = 'diagnosisRelatedGroup';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDiagnosisRelatedGroup(datatype);
    }

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseItemComponent | undefined = ClaimResponseItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addItem(component);
        }
      });
    }

    fieldName = 'addItem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseAddItemComponent | undefined = ClaimResponseAddItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAddItem(component);
        }
      });
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseItemAdjudicationComponent | undefined = ClaimResponseItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAdjudication(component);
        }
      });
    }

    fieldName = 'total';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseTotalComponent | undefined = ClaimResponseTotalComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTotal(component);
        }
      });
    }

    fieldName = 'payment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClaimResponsePaymentComponent | undefined = ClaimResponsePaymentComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPayment(component);
    }

    fieldName = 'fundsReserve';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFundsReserve(datatype);
    }

    fieldName = 'formCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFormCode(datatype);
    }

    fieldName = 'form';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Attachment | undefined = Attachment.parse(classJsonObj[fieldName]!, sourceField);
      instance.setForm(datatype);
    }

    fieldName = 'processNote';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseProcessNoteComponent | undefined = ClaimResponseProcessNoteComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProcessNote(component);
        }
      });
    }

    fieldName = 'communicationRequest';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCommunicationRequest(datatype);
        }
      });
  }

    fieldName = 'insurance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseInsuranceComponent | undefined = ClaimResponseInsuranceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addInsurance(component);
        }
      });
    }

    fieldName = 'error';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseErrorComponent | undefined = ClaimResponseErrorComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addError(component);
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
   * ClaimResponse.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for a claim response
   * - **Definition:** A unique identifier assigned to this claim response.
   * - **Requirements:** Allows claim responses to be distinguished and referenced.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * ClaimResponse.traceNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number for tracking
   * - **Definition:** Trace number for tracking purposes. May be defined at the jurisdiction level or between trading partners.
   * - **Requirements:** Allows partners to uniquely identify components for tracking.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private traceNumber?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: FmStatus
   *
   * @see {@link FmStatusEnum }
   */
  private readonly fmStatusEnum: FmStatusEnum;

  /**
   * ClaimResponse.status Element
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
   * ClaimResponse.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** More granular claim type
   * - **Definition:** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service.
   * - **Comment:** This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
   * - **Requirements:** Some jurisdictions need a finer grained claim type for routing and adjudication.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * ClaimResponse.subType Element
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
   * ClaimResponse.use Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** claim | preauthorization | predetermination
   * - **Definition:** A code to indicate whether the nature of the request is: Claim - A request to an Insurer to adjudicate the supplied charges for health care goods and services under the identified policy and to pay the determined Benefit amount, if any; Preauthorization - A request to an Insurer to adjudicate the supplied proposed future charges for health care goods and services under the identified policy and to approve the services and provide the expected benefit amounts and potentially to reserve funds to pay the benefits when Claims for the indicated services are later submitted; or, Pre-determination - A request to an Insurer to adjudicate the supplied \'what if\' charges for health care goods and services under the identified policy and report back what the Benefit payable would be had the services actually been provided.
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
   * ClaimResponse.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The recipient of the products and services
   * - **Definition:** The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
   * - **Requirements:** The patient must be supplied to the insurer so that confirmation of coverage and service hstory may be considered as part of the authorization and/or adjudiction.
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
   * ClaimResponse.created Element
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
   * ClaimResponse.insurer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Party responsible for reimbursement
   * - **Definition:** The party responsible for authorization, adjudication and reimbursement.
   * - **Requirements:** To be a valid claim, preauthorization or predetermination there must be a party who is responsible for adjudicating the contents against a policy which provides benefits for the patient.
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
   * ClaimResponse.requestor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Party responsible for the claim
   * - **Definition:** The provider which is responsible for the claim, predetermination or preauthorization.
   * - **Comment:** Typically this field would be 1..1 where this party is accountable for the data content within the claim but is not necessarily the facility, provider group or practitioner who provided the products and services listed within this claim resource. This field is the Billing Provider, for example, a facility, provider group, lab or practitioner..
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
   * ClaimResponse.request Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Id of resource triggering adjudication
   * - **Definition:** Original request resource reference.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Claim',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private request?: Reference | undefined;

  /**
   * FHIR CodeSystem: ClaimOutcome
   *
   * @see {@link ClaimOutcomeEnum }
   */
  private readonly claimOutcomeEnum: ClaimOutcomeEnum;

  /**
   * ClaimResponse.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** queued | complete | error | partial
   * - **Definition:** The outcome of the claim, predetermination, or preauthorization processing.
   * - **Comment:** The resource may be used to indicate that the Claim/Preauthorization/Pre-determination has been received but processing has not begun (queued); that it has been processed and one or more errors have been detected (error); no errors were detected and some of the adjudication processing has been performed (partial); or all of the adjudication processing has completed without errors (complete).
   * - **Requirements:** To advise the requestor of an overall processing outcome.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ClaimOutcomeEnum }
   */
  private outcome: EnumCodeType | null;

  /**
   * ClaimResponse.decision Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Result of the adjudication
   * - **Definition:** The result of the claim, predetermination, or preauthorization adjudication.
   * - **Comment:** The element is used to indicate the current state of the adjudication overall for the claim resource, for example: the request has been held (pended) for adjudication processing, for manual review or other reasons; that it has been processed and will be paid, or the outstanding paid, as submitted (approved); that no amount will be paid (denied); or that some amount between zero and the submitted amount will be paid (partial).
   * - **Requirements:** To advise the requestor of the result of the adjudication process.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private decision?: CodeableConcept | undefined;

  /**
   * ClaimResponse.disposition Element
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
   * ClaimResponse.preAuthRef Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Preauthorization reference
   * - **Definition:** Reference from the Insurer which is used in later communications which refers to this adjudication.
   * - **Comment:** This value is only present on preauthorization adjudications.
   * - **Requirements:** On subsequent claims, the insurer may require the provider to quote this value.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preAuthRef?: StringType | undefined;

  /**
   * ClaimResponse.preAuthPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Preauthorization reference effective period
   * - **Definition:** The time frame during which this authorization is effective.
   * - **Requirements:** To convey to the provider when the authorized products and services must be supplied for the authorized adjudication to apply.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preAuthPeriod?: Period | undefined;

  /**
   * ClaimResponse.event Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Event information
   * - **Definition:** Information code for an event with a corresponding date or period.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private event?: ClaimResponseEventComponent[] | undefined;

  /**
   * ClaimResponse.payeeType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Party to be paid any benefits payable
   * - **Definition:** Type of Party to be reimbursed: subscriber, provider, other.
   * - **Requirements:** Need to know who should receive payment with the most common situations being the Provider (assignment of benefits) or the Subscriber.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private payeeType?: CodeableConcept | undefined;

  /**
   * ClaimResponse.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounters associated with the listed treatments
   * - **Definition:** Healthcare encounters related to this claim.
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
   * ClaimResponse.diagnosisRelatedGroup Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Package billing code
   * - **Definition:** A package billing code or bundle code used to group products and services to a particular health condition (such as heart attack) which is based on a predetermined grouping code system.
   * - **Comment:** For example DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardial Infarction and a DRG for HeartAttack would be assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
   * - **Requirements:** Required to relate the current diagnosis to a package billing code that is then referenced on the individual claim items which are specific to the health condition covered by the package code.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private diagnosisRelatedGroup?: CodeableConcept | undefined;

  /**
   * ClaimResponse.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Adjudication for claim line items
   * - **Definition:** A claim line. Either a simple (a product or service) or a \'group\' of details which can also be a simple items or groups of sub-details.
   * - **Requirements:** The adjudication for items provided on the claim.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item?: ClaimResponseItemComponent[] | undefined;

  /**
   * ClaimResponse.addItem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Insurer added line items
   * - **Definition:** The first-tier service adjudications for payor added product or service lines.
   * - **Requirements:** Insurers may redefine the provided product or service or may package and/or decompose groups of products and services. The addItems allows the insurer to provide their line item list with linkage to the submitted items/details/sub-details. In a preauthorization the insurer may use the addItem structure to provide additional information on authorized products and services.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private addItem_?: ClaimResponseAddItemComponent[] | undefined;

  /**
   * ClaimResponse.adjudication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Header-level adjudication
   * - **Definition:** The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
   * - **Requirements:** Some insurers will receive line-items but provide the adjudication only at a summary or header-level.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private adjudication?: ClaimResponseItemAdjudicationComponent[] | undefined;

  /**
   * ClaimResponse.total Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Adjudication totals
   * - **Definition:** Categorized monetary totals for the adjudication.
   * - **Comment:** Totals for amounts submitted, co-pays, benefits payable etc.
   * - **Requirements:** To provide the requestor with financial totals by category for the adjudication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private total?: ClaimResponseTotalComponent[] | undefined;

  /**
   * ClaimResponse.payment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Payment Details
   * - **Definition:** Payment details for the adjudication of the claim.
   * - **Requirements:** Needed to convey references to the financial instrument that has been used if payment has been made.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private payment?: ClaimResponsePaymentComponent | undefined;

  /**
   * ClaimResponse.fundsReserve Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Funds reserved status
   * - **Definition:** A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom.
   * - **Comment:** Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
   * - **Requirements:** Needed to advise the submitting provider on whether the rquest for reservation of funds has been honored.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private fundsReserve?: CodeableConcept | undefined;

  /**
   * ClaimResponse.formCode Element
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
  private formCode?: CodeableConcept | undefined;

  /**
   * ClaimResponse.form Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Printed reference or actual form
   * - **Definition:** The actual form, by reference or inclusion, for printing the content or an EOB.
   * - **Comment:** Needed to permit insurers to include the actual form.
   * - **Requirements:** Needed to include the specific form used for producing output for this response.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private form?: Attachment | undefined;

  /**
   * ClaimResponse.processNote Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Note concerning adjudication
   * - **Definition:** A note that describes or explains adjudication results in a human readable form.
   * - **Requirements:** Provides the insurer specific textual explanations associated with the processing.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private processNote?: ClaimResponseProcessNoteComponent[] | undefined;

  /**
   * ClaimResponse.communicationRequest Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request for additional information
   * - **Definition:** Request for additional supporting or authorizing information.
   * - **Comment:** For example: professional reports, documents, images, clinical resources, or accident reports.
   * - **Requirements:** Need to communicate insurer request for additional information required to support the adjudication.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CommunicationRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private communicationRequest?: Reference[] | undefined;

  /**
   * ClaimResponse.insurance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient insurance information
   * - **Definition:** Financial instruments for reimbursement for the health care products and services specified on the claim.
   * - **Comment:** All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local \'coordination of benefit\' rules. One coverage (and only one) with \'focal=true\' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where \'subrogation=false\', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   * - **Requirements:** At least one insurer is required for a claim to be a claim.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private insurance?: ClaimResponseInsuranceComponent[] | undefined;

  /**
   * ClaimResponse.error Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Processing errors
   * - **Definition:** Errors encountered during the processing of the adjudication.
   * - **Comment:** If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
   * - **Requirements:** Need to communicate processing issues to the requestor.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private error?: ClaimResponseErrorComponent[] | undefined;

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
      const optErrMsg = `Invalid ClaimResponse.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ClaimResponse.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `traceNumber` property value as a Identifier array
   */
  public getTraceNumber(): Identifier[] {
    return this.traceNumber ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `traceNumber` property.
   *
   * @param value - the `traceNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTraceNumber(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.traceNumber; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.traceNumber = value;
    } else {
      this.traceNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `traceNumber` array property.
   *
   * @param value - the `traceNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTraceNumber(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.traceNumber; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initTraceNumber();
      this.traceNumber?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `traceNumber` property exists and has a value; `false` otherwise
   */
  public hasTraceNumber(): boolean {
    return isDefinedList<Identifier>(this.traceNumber) && this.traceNumber.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `traceNumber` property
   */
  private initTraceNumber(): void {
    if(!this.hasTraceNumber()) {
      this.traceNumber = [] as Identifier[];
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
    assertIsDefined<EnumCodeType>(enumType, `ClaimResponse.status is required`);
    const errMsgPrefix = `Invalid ClaimResponse.status`;
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
    assertIsDefined<CodeType>(element, `ClaimResponse.status is required`);
    const optErrMsg = `Invalid ClaimResponse.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `ClaimResponse.status is required`);
    const optErrMsg = `Invalid ClaimResponse.status (${String(value)})`;
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
    assertIsDefined<CodeableConcept>(value, `ClaimResponse.type is required`);
    const optErrMsg = `Invalid ClaimResponse.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClaimResponse.subType; Provided element is not an instance of CodeableConcept.`;
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
    assertIsDefined<EnumCodeType>(enumType, `ClaimResponse.use is required`);
    const errMsgPrefix = `Invalid ClaimResponse.use`;
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
    assertIsDefined<CodeType>(element, `ClaimResponse.use is required`);
    const optErrMsg = `Invalid ClaimResponse.use; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `ClaimResponse.use is required`);
    const optErrMsg = `Invalid ClaimResponse.use (${String(value)})`;
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
   * @decorator `@ReferenceTargets('ClaimResponse.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.patient', [
    'Patient',
  ])
  public setPatient(value: Reference): this {
    assertIsDefined<Reference>(value, `ClaimResponse.patient is required`);
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
    assertIsDefined<DateTimeType>(element, `ClaimResponse.created is required`);
    const optErrMsg = `Invalid ClaimResponse.created; Provided value is not an instance of DateTimeType.`;
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
    assertIsDefined<fhirDateTime>(value, `ClaimResponse.created is required`);
    const optErrMsg = `Invalid ClaimResponse.created (${String(value)})`;
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
   * @returns the `insurer` property value as a Reference object; else an empty Reference object
   */
  public getInsurer(): Reference {
    return this.insurer ?? new Reference();
  }

  /**
   * Assigns the provided Insurer object value to the `insurer` property.
   *
   * @decorator `@ReferenceTargets('ClaimResponse.insurer', ['Organization',])`
   *
   * @param value - the `insurer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.insurer', [
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
   * @returns the `requestor` property value as a Reference object; else an empty Reference object
   */
  public getRequestor(): Reference {
    return this.requestor ?? new Reference();
  }

  /**
   * Assigns the provided Requestor object value to the `requestor` property.
   *
   * @decorator `@ReferenceTargets('ClaimResponse.requestor', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `requestor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.requestor', [
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
   * @returns the `request` property value as a Reference object; else an empty Reference object
   */
  public getRequest(): Reference {
    return this.request ?? new Reference();
  }

  /**
   * Assigns the provided Request object value to the `request` property.
   *
   * @decorator `@ReferenceTargets('ClaimResponse.request', ['Claim',])`
   *
   * @param value - the `request` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.request', [
    'Claim',
  ])
  public setRequest(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.request = value;
    } else {
      this.request = undefined;
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
   * @see CodeSystem Enumeration: {@link ClaimOutcomeEnum }
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
   * @see CodeSystem Enumeration: {@link ClaimOutcomeEnum }
   */
  public setOutcomeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `ClaimResponse.outcome is required`);
    const errMsgPrefix = `Invalid ClaimResponse.outcome`;
    assertEnumCodeType<ClaimOutcomeEnum>(enumType, ClaimOutcomeEnum, errMsgPrefix);
    this.outcome = enumType;
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
   * @see CodeSystem Enumeration: {@link ClaimOutcomeEnum }
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
   * @see CodeSystem Enumeration: {@link ClaimOutcomeEnum }
   */
  public setOutcomeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `ClaimResponse.outcome is required`);
    const optErrMsg = `Invalid ClaimResponse.outcome; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.outcome = new EnumCodeType(element, this.claimOutcomeEnum);
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
   * @see CodeSystem Enumeration: {@link ClaimOutcomeEnum }
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
   * @see CodeSystem Enumeration: {@link ClaimOutcomeEnum }
   */
  public setOutcome(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `ClaimResponse.outcome is required`);
    const optErrMsg = `Invalid ClaimResponse.outcome (${String(value)})`;
    this.outcome = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.claimOutcomeEnum);
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcome(): boolean {
    return this.hasOutcomeEnumType();
  }

  /**
   * @returns the `decision` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDecision(): CodeableConcept {
    return this.decision ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Decision object value to the `decision` property.
   *
   * @param value - the `decision` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDecision(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClaimResponse.decision; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.decision = value;
    } else {
      this.decision = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `decision` property exists and has a value; `false` otherwise
   */
  public hasDecision(): boolean {
    return isDefined<CodeableConcept>(this.decision) && !this.decision.isEmpty();
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
      const optErrMsg = `Invalid ClaimResponse.disposition; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ClaimResponse.disposition (${String(value)})`;
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
      const optErrMsg = `Invalid ClaimResponse.preAuthRef; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ClaimResponse.preAuthRef (${String(value)})`;
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
   * @returns the `preAuthPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getPreAuthPeriod(): Period {
    return this.preAuthPeriod ?? new Period();
  }

  /**
   * Assigns the provided PreAuthPeriod object value to the `preAuthPeriod` property.
   *
   * @param value - the `preAuthPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPreAuthPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid ClaimResponse.preAuthPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.preAuthPeriod = value;
    } else {
      this.preAuthPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preAuthPeriod` property exists and has a value; `false` otherwise
   */
  public hasPreAuthPeriod(): boolean {
    return isDefined<Period>(this.preAuthPeriod) && !this.preAuthPeriod.isEmpty();
  }

  /**
   * @returns the `event` property value as a ClaimResponseEventComponent array
   */
  public getEvent(): ClaimResponseEventComponent[] {
    return this.event ?? ([] as ClaimResponseEventComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseEventComponent array value to the `event` property.
   *
   * @param value - the `event` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEvent(value: ClaimResponseEventComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseEventComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.event; Provided value array has an element that is not an instance of ClaimResponseEventComponent.`;
      assertFhirTypeList<ClaimResponseEventComponent>(value, ClaimResponseEventComponent, optErrMsg);
      this.event = value;
    } else {
      this.event = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseEventComponent value to the `event` array property.
   *
   * @param value - the `event` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEvent(value: ClaimResponseEventComponent | undefined): this {
    if (isDefined<ClaimResponseEventComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.event; Provided element is not an instance of ClaimResponseEventComponent.`;
      assertFhirType<ClaimResponseEventComponent>(value, ClaimResponseEventComponent, optErrMsg);
      this.initEvent();
      this.event?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `event` property exists and has a value; `false` otherwise
   */
  public hasEvent(): boolean {
    return isDefinedList<ClaimResponseEventComponent>(this.event) && this.event.some((item: ClaimResponseEventComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `event` property
   */
  private initEvent(): void {
    if(!this.hasEvent()) {
      this.event = [] as ClaimResponseEventComponent[];
    }
  }

  /**
   * @returns the `payeeType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPayeeType(): CodeableConcept {
    return this.payeeType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PayeeType object value to the `payeeType` property.
   *
   * @param value - the `payeeType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPayeeType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClaimResponse.payeeType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.payeeType = value;
    } else {
      this.payeeType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `payeeType` property exists and has a value; `false` otherwise
   */
  public hasPayeeType(): boolean {
    return isDefined<CodeableConcept>(this.payeeType) && !this.payeeType.isEmpty();
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
   * @decorator `@ReferenceTargets('ClaimResponse.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.encounter', [
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
   * @decorator `@ReferenceTargets('ClaimResponse.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.encounter', [
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
   * @returns the `diagnosisRelatedGroup` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDiagnosisRelatedGroup(): CodeableConcept {
    return this.diagnosisRelatedGroup ?? new CodeableConcept();
  }

  /**
   * Assigns the provided DiagnosisRelatedGroup object value to the `diagnosisRelatedGroup` property.
   *
   * @param value - the `diagnosisRelatedGroup` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDiagnosisRelatedGroup(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClaimResponse.diagnosisRelatedGroup; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.diagnosisRelatedGroup = value;
    } else {
      this.diagnosisRelatedGroup = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `diagnosisRelatedGroup` property exists and has a value; `false` otherwise
   */
  public hasDiagnosisRelatedGroup(): boolean {
    return isDefined<CodeableConcept>(this.diagnosisRelatedGroup) && !this.diagnosisRelatedGroup.isEmpty();
  }

  /**
   * @returns the `item` property value as a ClaimResponseItemComponent array
   */
  public getItem(): ClaimResponseItemComponent[] {
    return this.item ?? ([] as ClaimResponseItemComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseItemComponent array value to the `item` property.
   *
   * @param value - the `item` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: ClaimResponseItemComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseItemComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item; Provided value array has an element that is not an instance of ClaimResponseItemComponent.`;
      assertFhirTypeList<ClaimResponseItemComponent>(value, ClaimResponseItemComponent, optErrMsg);
      this.item = value;
    } else {
      this.item = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseItemComponent value to the `item` array property.
   *
   * @param value - the `item` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addItem(value: ClaimResponseItemComponent | undefined): this {
    if (isDefined<ClaimResponseItemComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item; Provided element is not an instance of ClaimResponseItemComponent.`;
      assertFhirType<ClaimResponseItemComponent>(value, ClaimResponseItemComponent, optErrMsg);
      this.initItem();
      this.item?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefinedList<ClaimResponseItemComponent>(this.item) && this.item.some((item: ClaimResponseItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `item` property
   */
  private initItem(): void {
    if(!this.hasItem()) {
      this.item = [] as ClaimResponseItemComponent[];
    }
  }

  /**
   * @returns the `addItem_` property value as a ClaimResponseAddItemComponent array
   */
  public getAddItem(): ClaimResponseAddItemComponent[] {
    return this.addItem_ ?? ([] as ClaimResponseAddItemComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseAddItemComponent array value to the `addItem_` property.
   *
   * @param value - the `addItem_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAddItem(value: ClaimResponseAddItemComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseAddItemComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem; Provided value array has an element that is not an instance of ClaimResponseAddItemComponent.`;
      assertFhirTypeList<ClaimResponseAddItemComponent>(value, ClaimResponseAddItemComponent, optErrMsg);
      this.addItem_ = value;
    } else {
      this.addItem_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseAddItemComponent value to the `addItem_` array property.
   *
   * @param value - the `addItem_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAddItem(value: ClaimResponseAddItemComponent | undefined): this {
    if (isDefined<ClaimResponseAddItemComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem; Provided element is not an instance of ClaimResponseAddItemComponent.`;
      assertFhirType<ClaimResponseAddItemComponent>(value, ClaimResponseAddItemComponent, optErrMsg);
      this.initAddItem();
      this.addItem_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `addItem_` property exists and has a value; `false` otherwise
   */
  public hasAddItem(): boolean {
    return isDefinedList<ClaimResponseAddItemComponent>(this.addItem_) && this.addItem_.some((item: ClaimResponseAddItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `addItem_` property
   */
  private initAddItem(): void {
    if(!this.hasAddItem()) {
      this.addItem_ = [] as ClaimResponseAddItemComponent[];
    }
  }

  /**
   * @returns the `adjudication` property value as a ClaimResponseItemAdjudicationComponent array
   */
  public getAdjudication(): ClaimResponseItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ClaimResponseItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ClaimResponseItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.adjudication; Provided value array has an element that is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirTypeList<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ClaimResponseItemAdjudicationComponent | undefined): this {
    if (isDefined<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.adjudication; Provided element is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirType<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ClaimResponseItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ClaimResponseItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ClaimResponseItemAdjudicationComponent[];
    }
  }

  /**
   * @returns the `total` property value as a ClaimResponseTotalComponent array
   */
  public getTotal(): ClaimResponseTotalComponent[] {
    return this.total ?? ([] as ClaimResponseTotalComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseTotalComponent array value to the `total` property.
   *
   * @param value - the `total` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTotal(value: ClaimResponseTotalComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseTotalComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.total; Provided value array has an element that is not an instance of ClaimResponseTotalComponent.`;
      assertFhirTypeList<ClaimResponseTotalComponent>(value, ClaimResponseTotalComponent, optErrMsg);
      this.total = value;
    } else {
      this.total = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseTotalComponent value to the `total` array property.
   *
   * @param value - the `total` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTotal(value: ClaimResponseTotalComponent | undefined): this {
    if (isDefined<ClaimResponseTotalComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.total; Provided element is not an instance of ClaimResponseTotalComponent.`;
      assertFhirType<ClaimResponseTotalComponent>(value, ClaimResponseTotalComponent, optErrMsg);
      this.initTotal();
      this.total?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `total` property exists and has a value; `false` otherwise
   */
  public hasTotal(): boolean {
    return isDefinedList<ClaimResponseTotalComponent>(this.total) && this.total.some((item: ClaimResponseTotalComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `total` property
   */
  private initTotal(): void {
    if(!this.hasTotal()) {
      this.total = [] as ClaimResponseTotalComponent[];
    }
  }

  /**
   * @returns the `payment` property value as a ClaimResponsePaymentComponent object if defined; else an empty ClaimResponsePaymentComponent object
   */
  public getPayment(): ClaimResponsePaymentComponent {
    return this.payment ?? new ClaimResponsePaymentComponent();
  }

  /**
   * Assigns the provided Payment object value to the `payment` property.
   *
   * @param value - the `payment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPayment(value: ClaimResponsePaymentComponent | undefined): this {
    if (isDefined<ClaimResponsePaymentComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.payment; Provided element is not an instance of ClaimResponsePaymentComponent.`;
      assertFhirType<ClaimResponsePaymentComponent>(value, ClaimResponsePaymentComponent, optErrMsg);
      this.payment = value;
    } else {
      this.payment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `payment` property exists and has a value; `false` otherwise
   */
  public hasPayment(): boolean {
    return isDefined<ClaimResponsePaymentComponent>(this.payment) && !this.payment.isEmpty();
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
      const optErrMsg = `Invalid ClaimResponse.fundsReserve; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `formCode` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFormCode(): CodeableConcept {
    return this.formCode ?? new CodeableConcept();
  }

  /**
   * Assigns the provided FormCode object value to the `formCode` property.
   *
   * @param value - the `formCode` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFormCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClaimResponse.formCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.formCode = value;
    } else {
      this.formCode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `formCode` property exists and has a value; `false` otherwise
   */
  public hasFormCode(): boolean {
    return isDefined<CodeableConcept>(this.formCode) && !this.formCode.isEmpty();
  }

  /**
   * @returns the `form` property value as a Attachment object if defined; else an empty Attachment object
   */
  public getForm(): Attachment {
    return this.form ?? new Attachment();
  }

  /**
   * Assigns the provided Form object value to the `form` property.
   *
   * @param value - the `form` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setForm(value: Attachment | undefined): this {
    if (isDefined<Attachment>(value)) {
      const optErrMsg = `Invalid ClaimResponse.form; Provided element is not an instance of Attachment.`;
      assertFhirType<Attachment>(value, Attachment, optErrMsg);
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
    return isDefined<Attachment>(this.form) && !this.form.isEmpty();
  }

  /**
   * @returns the `processNote` property value as a ClaimResponseProcessNoteComponent array
   */
  public getProcessNote(): ClaimResponseProcessNoteComponent[] {
    return this.processNote ?? ([] as ClaimResponseProcessNoteComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseProcessNoteComponent array value to the `processNote` property.
   *
   * @param value - the `processNote` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcessNote(value: ClaimResponseProcessNoteComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseProcessNoteComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.processNote; Provided value array has an element that is not an instance of ClaimResponseProcessNoteComponent.`;
      assertFhirTypeList<ClaimResponseProcessNoteComponent>(value, ClaimResponseProcessNoteComponent, optErrMsg);
      this.processNote = value;
    } else {
      this.processNote = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseProcessNoteComponent value to the `processNote` array property.
   *
   * @param value - the `processNote` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProcessNote(value: ClaimResponseProcessNoteComponent | undefined): this {
    if (isDefined<ClaimResponseProcessNoteComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.processNote; Provided element is not an instance of ClaimResponseProcessNoteComponent.`;
      assertFhirType<ClaimResponseProcessNoteComponent>(value, ClaimResponseProcessNoteComponent, optErrMsg);
      this.initProcessNote();
      this.processNote?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `processNote` property exists and has a value; `false` otherwise
   */
  public hasProcessNote(): boolean {
    return isDefinedList<ClaimResponseProcessNoteComponent>(this.processNote) && this.processNote.some((item: ClaimResponseProcessNoteComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `processNote` property
   */
  private initProcessNote(): void {
    if(!this.hasProcessNote()) {
      this.processNote = [] as ClaimResponseProcessNoteComponent[];
    }
  }

  /**
   * @returns the `communicationRequest` property value as a Reference array
   */
  public getCommunicationRequest(): Reference[] {
    return this.communicationRequest ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `communicationRequest` property.
   *
   * @decorator `@ReferenceTargets('ClaimResponse.communicationRequest', ['CommunicationRequest',])`
   *
   * @param value - the `communicationRequest` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.communicationRequest', [
    'CommunicationRequest',
  ])
  public setCommunicationRequest(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.communicationRequest = value;
    } else {
      this.communicationRequest = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `communicationRequest` array property.
   *
   * @decorator `@ReferenceTargets('ClaimResponse.communicationRequest', ['CommunicationRequest',])`
   *
   * @param value - the `communicationRequest` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.communicationRequest', [
    'CommunicationRequest',
  ])
  public addCommunicationRequest(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initCommunicationRequest();
      this.communicationRequest?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `communicationRequest` property exists and has a value; `false` otherwise
   */
  public hasCommunicationRequest(): boolean {
    return isDefinedList<Reference>(this.communicationRequest) && this.communicationRequest.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `communicationRequest` property
   */
  private initCommunicationRequest(): void {
    if (!this.hasCommunicationRequest()) {
      this.communicationRequest = [] as Reference[];
    }
  }

  /**
   * @returns the `insurance` property value as a ClaimResponseInsuranceComponent array
   */
  public getInsurance(): ClaimResponseInsuranceComponent[] {
    return this.insurance ?? ([] as ClaimResponseInsuranceComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseInsuranceComponent array value to the `insurance` property.
   *
   * @param value - the `insurance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInsurance(value: ClaimResponseInsuranceComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseInsuranceComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.insurance; Provided value array has an element that is not an instance of ClaimResponseInsuranceComponent.`;
      assertFhirTypeList<ClaimResponseInsuranceComponent>(value, ClaimResponseInsuranceComponent, optErrMsg);
      this.insurance = value;
    } else {
      this.insurance = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseInsuranceComponent value to the `insurance` array property.
   *
   * @param value - the `insurance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInsurance(value: ClaimResponseInsuranceComponent | undefined): this {
    if (isDefined<ClaimResponseInsuranceComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.insurance; Provided element is not an instance of ClaimResponseInsuranceComponent.`;
      assertFhirType<ClaimResponseInsuranceComponent>(value, ClaimResponseInsuranceComponent, optErrMsg);
      this.initInsurance();
      this.insurance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `insurance` property exists and has a value; `false` otherwise
   */
  public hasInsurance(): boolean {
    return isDefinedList<ClaimResponseInsuranceComponent>(this.insurance) && this.insurance.some((item: ClaimResponseInsuranceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `insurance` property
   */
  private initInsurance(): void {
    if(!this.hasInsurance()) {
      this.insurance = [] as ClaimResponseInsuranceComponent[];
    }
  }

  /**
   * @returns the `error` property value as a ClaimResponseErrorComponent array
   */
  public getError(): ClaimResponseErrorComponent[] {
    return this.error ?? ([] as ClaimResponseErrorComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseErrorComponent array value to the `error` property.
   *
   * @param value - the `error` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setError(value: ClaimResponseErrorComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseErrorComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.error; Provided value array has an element that is not an instance of ClaimResponseErrorComponent.`;
      assertFhirTypeList<ClaimResponseErrorComponent>(value, ClaimResponseErrorComponent, optErrMsg);
      this.error = value;
    } else {
      this.error = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseErrorComponent value to the `error` array property.
   *
   * @param value - the `error` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addError(value: ClaimResponseErrorComponent | undefined): this {
    if (isDefined<ClaimResponseErrorComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.error; Provided element is not an instance of ClaimResponseErrorComponent.`;
      assertFhirType<ClaimResponseErrorComponent>(value, ClaimResponseErrorComponent, optErrMsg);
      this.initError();
      this.error?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `error` property exists and has a value; `false` otherwise
   */
  public hasError(): boolean {
    return isDefinedList<ClaimResponseErrorComponent>(this.error) && this.error.some((item: ClaimResponseErrorComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `error` property
   */
  private initError(): void {
    if(!this.hasError()) {
      this.error = [] as ClaimResponseErrorComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.traceNumber,
      this.status,
      this.type_,
      this.subType,
      this.use,
      this.patient,
      this.created,
      this.insurer,
      this.requestor,
      this.request,
      this.outcome,
      this.decision,
      this.disposition,
      this.preAuthRef,
      this.preAuthPeriod,
      this.event,
      this.payeeType,
      this.encounter,
      this.diagnosisRelatedGroup,
      this.item,
      this.addItem_,
      this.adjudication,
      this.total,
      this.payment,
      this.fundsReserve,
      this.formCode,
      this.form,
      this.processNote,
      this.communicationRequest,
      this.insurance,
      this.error,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponse {
    const dest = new ClaimResponse();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponse): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const traceNumberList = copyListValues<Identifier>(this.traceNumber);
    dest.traceNumber = traceNumberList.length === 0 ? undefined : traceNumberList;
    dest.status = this.status ? this.status.copy() : null;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.subType = this.subType?.copy();
    dest.use = this.use ? this.use.copy() : null;
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.created = this.created ? this.created.copy() : null;
    dest.insurer = this.insurer?.copy();
    dest.requestor = this.requestor?.copy();
    dest.request = this.request?.copy();
    dest.outcome = this.outcome ? this.outcome.copy() : null;
    dest.decision = this.decision?.copy();
    dest.disposition = this.disposition?.copy();
    dest.preAuthRef = this.preAuthRef?.copy();
    dest.preAuthPeriod = this.preAuthPeriod?.copy();
    const eventList = copyListValues<ClaimResponseEventComponent>(this.event);
    dest.event = eventList.length === 0 ? undefined : eventList;
    dest.payeeType = this.payeeType?.copy();
    const encounterList = copyListValues<Reference>(this.encounter);
    dest.encounter = encounterList.length === 0 ? undefined : encounterList;
    dest.diagnosisRelatedGroup = this.diagnosisRelatedGroup?.copy();
    const itemList = copyListValues<ClaimResponseItemComponent>(this.item);
    dest.item = itemList.length === 0 ? undefined : itemList;
    const addItemList = copyListValues<ClaimResponseAddItemComponent>(this.addItem_);
    dest.addItem_ = addItemList.length === 0 ? undefined : addItemList;
    const adjudicationList = copyListValues<ClaimResponseItemAdjudicationComponent>(this.adjudication);
    dest.adjudication = adjudicationList.length === 0 ? undefined : adjudicationList;
    const totalList = copyListValues<ClaimResponseTotalComponent>(this.total);
    dest.total = totalList.length === 0 ? undefined : totalList;
    dest.payment = this.payment?.copy();
    dest.fundsReserve = this.fundsReserve?.copy();
    dest.formCode = this.formCode?.copy();
    dest.form = this.form?.copy();
    const processNoteList = copyListValues<ClaimResponseProcessNoteComponent>(this.processNote);
    dest.processNote = processNoteList.length === 0 ? undefined : processNoteList;
    const communicationRequestList = copyListValues<Reference>(this.communicationRequest);
    dest.communicationRequest = communicationRequestList.length === 0 ? undefined : communicationRequestList;
    const insuranceList = copyListValues<ClaimResponseInsuranceComponent>(this.insurance);
    dest.insurance = insuranceList.length === 0 ? undefined : insuranceList;
    const errorList = copyListValues<ClaimResponseErrorComponent>(this.error);
    dest.error = errorList.length === 0 ? undefined : errorList;
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

    if (this.hasTraceNumber()) {
      setFhirComplexListJson(this.getTraceNumber(), 'traceNumber', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.status`);
    }

    if (this.hasType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getType()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.type`);
    }

    if (this.hasSubType()) {
      setFhirComplexJson(this.getSubType(), 'subType', jsonObj);
    }

    if (this.hasUseElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getUseElement()!, 'use', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.use`);
    }

    if (this.hasPatient()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPatient()!, 'patient', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.patient`);
    }

    if (this.hasCreatedElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirDateTime>(this.getCreatedElement()!, 'created', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.created`);
    }

    if (this.hasInsurer()) {
      setFhirComplexJson(this.getInsurer(), 'insurer', jsonObj);
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
    } else {
      missingReqdProperties.push(`ClaimResponse.outcome`);
    }

    if (this.hasDecision()) {
      setFhirComplexJson(this.getDecision(), 'decision', jsonObj);
    }

    if (this.hasDispositionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDispositionElement(), 'disposition', jsonObj);
    }

    if (this.hasPreAuthRefElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPreAuthRefElement(), 'preAuthRef', jsonObj);
    }

    if (this.hasPreAuthPeriod()) {
      setFhirComplexJson(this.getPreAuthPeriod(), 'preAuthPeriod', jsonObj);
    }

    if (this.hasEvent()) {
      setFhirBackboneElementListJson(this.getEvent(), 'event', jsonObj);
    }

    if (this.hasPayeeType()) {
      setFhirComplexJson(this.getPayeeType(), 'payeeType', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexListJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasDiagnosisRelatedGroup()) {
      setFhirComplexJson(this.getDiagnosisRelatedGroup(), 'diagnosisRelatedGroup', jsonObj);
    }

    if (this.hasItem()) {
      setFhirBackboneElementListJson(this.getItem(), 'item', jsonObj);
    }

    if (this.hasAddItem()) {
      setFhirBackboneElementListJson(this.getAddItem(), 'addItem', jsonObj);
    }

    if (this.hasAdjudication()) {
      setFhirBackboneElementListJson(this.getAdjudication(), 'adjudication', jsonObj);
    }

    if (this.hasTotal()) {
      setFhirBackboneElementListJson(this.getTotal(), 'total', jsonObj);
    }

    if (this.hasPayment()) {
      setFhirBackboneElementJson(this.getPayment(), 'payment', jsonObj);
    }

    if (this.hasFundsReserve()) {
      setFhirComplexJson(this.getFundsReserve(), 'fundsReserve', jsonObj);
    }

    if (this.hasFormCode()) {
      setFhirComplexJson(this.getFormCode(), 'formCode', jsonObj);
    }

    if (this.hasForm()) {
      setFhirComplexJson(this.getForm(), 'form', jsonObj);
    }

    if (this.hasProcessNote()) {
      setFhirBackboneElementListJson(this.getProcessNote(), 'processNote', jsonObj);
    }

    if (this.hasCommunicationRequest()) {
      setFhirComplexListJson(this.getCommunicationRequest(), 'communicationRequest', jsonObj);
    }

    if (this.hasInsurance()) {
      setFhirBackboneElementListJson(this.getInsurance(), 'insurance', jsonObj);
    }

    if (this.hasError()) {
      setFhirBackboneElementListJson(this.getError(), 'error', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * ClaimResponseEventComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Event information
 * - **Definition:** Information code for an event with a corresponding date or period.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseEventComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, when: IDataType | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.when = null;
    if (isDefined<IDataType>(when)) {
      this.setWhen(when);
    }

  }

  /**
   * Parse the provided `ClaimResponseEventComponent` JSON to instantiate the ClaimResponseEventComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseEventComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseEventComponent
   * @returns ClaimResponseEventComponent data model or undefined for `ClaimResponseEventComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseEventComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseEventComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseEventComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = ClaimResponseEventComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ClaimResponseEventComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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

    fieldName = 'when[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const when: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (when === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setWhen(when);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ClaimResponse.event.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific event
   * - **Definition:** A coded event such as when a service is expected or a card printed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * ClaimResponse.event.when[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ClaimResponse.event.when[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Occurance date or period
   * - **Definition:** A date or period in the past or future indicating when the event occurred or is expectd to occur.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ClaimResponse.event.when[x]',[
    'dateTime',
    'Period',
  ])
  private when: IDataType | null;

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
    assertIsDefined<CodeableConcept>(value, `ClaimResponse.event.type is required`);
    const optErrMsg = `Invalid ClaimResponse.event.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `when` property value as a DataType object; else null
   */
  public getWhen(): IDataType | null {
    return this.when;
  }

  /**
   * Assigns the provided DataType object value to the `when` property.
   *
   * @decorator `@ChoiceDataTypes('ClaimResponse.event.when[x]')`
   *
   * @param value - the `when` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ClaimResponse.event.when[x]')
  public setWhen(value: IDataType): this {
    assertIsDefined<IDataType>(value, `ClaimResponse.event.when[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.when = value;
    return this;
  }

  /**
   * @returns `true` if the `when` property exists and has a value; `false` otherwise
   */
  public hasWhen(): boolean {
    return isDefined<IDataType>(this.when) && !this.when.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `when` property value as a DateTimeType object if defined; else null
   */
  public getWhenDateTimeType(): DateTimeType | null {
    if (!isDefined<IDataType>(this.when)) {
      return null;
    }
    if (!(this.when instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ClaimResponse.event.when[x]: Expected DateTimeType but encountered ${this.when.fhirType()}`,
      );
    }
    return this.when;
  }

  /**
   * @returns `true` if the `` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasWhenDateTimeType(): boolean {
    return this.hasWhen() && this.when instanceof DateTimeType;
  }

  /**
   * @returns the `when` property value as a Period object if defined; else null
   */
  public getWhenPeriod(): Period | null {
    if (!isDefined<IDataType>(this.when)) {
      return null;
    }
    if (!(this.when instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for ClaimResponse.event.when[x]: Expected Period but encountered ${this.when.fhirType()}`,
      );
    }
    return this.when;
  }

  /**
   * @returns `true` if the `` property exists as a Period and has a value; `false` otherwise
   */
  public hasWhenPeriod(): boolean {
    return this.hasWhen() && this.when instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.event';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.when,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseEventComponent {
    const dest = new ClaimResponseEventComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseEventComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.when = this.when ? this.when.copy() as IDataType : null;
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
      missingReqdProperties.push(`ClaimResponse.event.type`);
    }

    if (this.hasWhen()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getWhen()!, 'when', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.event.when[x]`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimResponseItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Adjudication for claim line items
 * - **Definition:** A claim line. Either a simple (a product or service) or a \'group\' of details which can also be a simple items or groups of sub-details.
 * - **Requirements:** The adjudication for items provided on the claim.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseItemComponent extends BackboneElement implements IBackboneElement {
  constructor(itemSequence: PositiveIntType | fhirPositiveInt | null = null) {
    super();

    this.itemSequence = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(itemSequence)) {
      if (itemSequence instanceof PrimitiveType) {
        this.setItemSequenceElement(itemSequence);
      } else {
        this.setItemSequence(itemSequence);
      }
    }
  }

  /**
   * Parse the provided `ClaimResponseItemComponent` JSON to instantiate the ClaimResponseItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseItemComponent
   * @returns ClaimResponseItemComponent data model or undefined for `ClaimResponseItemComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'itemSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setItemSequenceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'traceNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTraceNumber(datatype);
        }
      });
    }

    fieldName = 'noteNumber';
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
          instance.addNoteNumberElement(datatype);
        }
      });
    }

    fieldName = 'reviewOutcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClaimResponseItemReviewOutcomeComponent | undefined = ClaimResponseItemReviewOutcomeComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReviewOutcome(component);
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseItemAdjudicationComponent | undefined = ClaimResponseItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAdjudication(component);
        }
      });
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseItemDetailComponent | undefined = ClaimResponseItemDetailComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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
   * ClaimResponse.item.itemSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Claim item instance identifier
   * - **Definition:** A number to uniquely reference the claim item entries.
   * - **Requirements:** Necessary to provide a mechanism to link the adjudication result to the submitted claim item.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private itemSequence: PositiveIntType | null;

  /**
   * ClaimResponse.item.traceNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number for tracking
   * - **Definition:** Trace number for tracking purposes. May be defined at the jurisdiction level or between trading partners.
   * - **Requirements:** Allows partners to uniquely identify components for tracking.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private traceNumber?: Identifier[] | undefined;

  /**
   * ClaimResponse.item.noteNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable note numbers
   * - **Definition:** The numbers associated with notes below which apply to the adjudication of this item.
   * - **Requirements:** Provides a condensed manner for associating human readable descriptive explanations for adjudications on the line item.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private noteNumber?: PositiveIntType[] | undefined;

  /**
   * ClaimResponse.item.reviewOutcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Adjudication results
   * - **Definition:** The high-level results of the adjudication if adjudication has been performed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reviewOutcome?: ClaimResponseItemReviewOutcomeComponent | undefined;

  /**
   * ClaimResponse.item.adjudication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Adjudication details
   * - **Definition:** If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
   * - **Requirements:** The adjudication results conveys the insurer\'s assessment of the item provided in the claim under the terms of the patient\'s insurance coverage.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private adjudication?: ClaimResponseItemAdjudicationComponent[] | undefined;

  /**
   * ClaimResponse.item.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Adjudication for claim details
   * - **Definition:** A claim detail. Either a simple (a product or service) or a \'group\' of sub-details which are simple items.
   * - **Requirements:** The adjudication for details provided on the claim.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: ClaimResponseItemDetailComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `itemSequence` property value as a PositiveIntType object if defined; else null
   */
  public getItemSequenceElement(): PositiveIntType | null {
    return this.itemSequence;
  }

  /**
   * Assigns the provided PrimitiveType value to the `itemSequence` property.
   *
   * @param element - the `itemSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setItemSequenceElement(element: PositiveIntType): this {
    assertIsDefined<PositiveIntType>(element, `ClaimResponse.item.itemSequence is required`);
    const optErrMsg = `Invalid ClaimResponse.item.itemSequence; Provided value is not an instance of PositiveIntType.`;
    assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
    this.itemSequence = element;
    return this;
  }

  /**
   * @returns `true` if the `itemSequence` property exists and has a value; `false` otherwise
   */
  public hasItemSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.itemSequence) && !this.itemSequence.isEmpty();
  }

  /**
   * @returns the `itemSequence` property value as a fhirPositiveInt if defined; else null
   */
  public getItemSequence(): fhirPositiveInt | null {
    if (this.itemSequence?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.itemSequence.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `itemSequence` property.
   *
   * @param value - the `itemSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setItemSequence(value: fhirPositiveInt): this {
    assertIsDefined<fhirPositiveInt>(value, `ClaimResponse.item.itemSequence is required`);
    const optErrMsg = `Invalid ClaimResponse.item.itemSequence (${String(value)})`;
    this.itemSequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `itemSequence` property exists and has a value; `false` otherwise
   */
  public hasItemSequence(): boolean {
    return this.hasItemSequenceElement();
  }

  /**
   * @returns the `traceNumber` property value as a Identifier array
   */
  public getTraceNumber(): Identifier[] {
    return this.traceNumber ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `traceNumber` property.
   *
   * @param value - the `traceNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTraceNumber(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.traceNumber; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.traceNumber = value;
    } else {
      this.traceNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `traceNumber` array property.
   *
   * @param value - the `traceNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTraceNumber(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.traceNumber; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initTraceNumber();
      this.traceNumber?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `traceNumber` property exists and has a value; `false` otherwise
   */
  public hasTraceNumber(): boolean {
    return isDefinedList<Identifier>(this.traceNumber) && this.traceNumber.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `traceNumber` property
   */
  private initTraceNumber(): void {
    if(!this.hasTraceNumber()) {
      this.traceNumber = [] as Identifier[];
    }
  }

  /**
   * @returns the `noteNumber` property value as a PositiveIntType array
   */
  public getNoteNumberElement(): PositiveIntType[] {
    return this.noteNumber ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `noteNumber` property.
   *
   * @param element - the `noteNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNoteNumberElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.item.noteNumber; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.noteNumber = element;
    } else {
      this.noteNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `noteNumber` array property.
   *
   * @param element - the `noteNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNoteNumberElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.item.noteNumber; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initNoteNumber();
      this.noteNumber?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `noteNumber` property exists and has a value; `false` otherwise
   */
  public hasNoteNumberElement(): boolean {
    return isDefinedList<PositiveIntType>(this.noteNumber) && this.noteNumber.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `noteNumber` property value as a fhirPositiveInt array
   */
  public getNoteNumber(): fhirPositiveInt[] {
    this.initNoteNumber();
    const noteNumberValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.noteNumber!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        noteNumberValues.push(value);
      }
    }
    return noteNumberValues;
  }

  /**
   * Assigns the provided primitive value array to the `noteNumber` property.
   *
   * @param value - the `noteNumber` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNoteNumber(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const noteNumberElements = [] as PositiveIntType[];
      for (const noteNumberValue of value) {
        const optErrMsg = `Invalid ClaimResponse.item.noteNumber array item (${String(noteNumberValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(noteNumberValue, fhirPositiveIntSchema, optErrMsg));
        noteNumberElements.push(element);
      }
      this.noteNumber = noteNumberElements;
    } else {
      this.noteNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `noteNumber` array property.
   *
   * @param value - the `noteNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNoteNumber(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.noteNumber array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initNoteNumber();
      this.addNoteNumberElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `noteNumber` property exists and has a value; `false` otherwise
   */
  public hasNoteNumber(): boolean {
    return this.hasNoteNumberElement();
  }

  /**
   * Initialize the `noteNumber` property
   */
  private initNoteNumber(): void {
    if (!this.hasNoteNumber()) {
      this.noteNumber = [] as PositiveIntType[];
    }
  }

  /**
   * @returns the `reviewOutcome` property value as a ClaimResponseItemReviewOutcomeComponent object if defined; else an empty ClaimResponseItemReviewOutcomeComponent object
   */
  public getReviewOutcome(): ClaimResponseItemReviewOutcomeComponent {
    return this.reviewOutcome ?? new ClaimResponseItemReviewOutcomeComponent();
  }

  /**
   * Assigns the provided ReviewOutcome object value to the `reviewOutcome` property.
   *
   * @param value - the `reviewOutcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReviewOutcome(value: ClaimResponseItemReviewOutcomeComponent | undefined): this {
    if (isDefined<ClaimResponseItemReviewOutcomeComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.reviewOutcome; Provided element is not an instance of ClaimResponseItemReviewOutcomeComponent.`;
      assertFhirType<ClaimResponseItemReviewOutcomeComponent>(value, ClaimResponseItemReviewOutcomeComponent, optErrMsg);
      this.reviewOutcome = value;
    } else {
      this.reviewOutcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reviewOutcome` property exists and has a value; `false` otherwise
   */
  public hasReviewOutcome(): boolean {
    return isDefined<ClaimResponseItemReviewOutcomeComponent>(this.reviewOutcome) && !this.reviewOutcome.isEmpty();
  }

  /**
   * @returns the `adjudication` property value as a ClaimResponseItemAdjudicationComponent array
   */
  public getAdjudication(): ClaimResponseItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ClaimResponseItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ClaimResponseItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.adjudication; Provided value array has an element that is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirTypeList<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ClaimResponseItemAdjudicationComponent | undefined): this {
    if (isDefined<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.adjudication; Provided element is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirType<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ClaimResponseItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ClaimResponseItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ClaimResponseItemAdjudicationComponent[];
    }
  }

  /**
   * @returns the `detail` property value as a ClaimResponseItemDetailComponent array
   */
  public getDetail(): ClaimResponseItemDetailComponent[] {
    return this.detail ?? ([] as ClaimResponseItemDetailComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseItemDetailComponent array value to the `detail` property.
   *
   * @param value - the `detail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDetail(value: ClaimResponseItemDetailComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseItemDetailComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail; Provided value array has an element that is not an instance of ClaimResponseItemDetailComponent.`;
      assertFhirTypeList<ClaimResponseItemDetailComponent>(value, ClaimResponseItemDetailComponent, optErrMsg);
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseItemDetailComponent value to the `detail` array property.
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDetail(value: ClaimResponseItemDetailComponent | undefined): this {
    if (isDefined<ClaimResponseItemDetailComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail; Provided element is not an instance of ClaimResponseItemDetailComponent.`;
      assertFhirType<ClaimResponseItemDetailComponent>(value, ClaimResponseItemDetailComponent, optErrMsg);
      this.initDetail();
      this.detail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefinedList<ClaimResponseItemDetailComponent>(this.detail) && this.detail.some((item: ClaimResponseItemDetailComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `detail` property
   */
  private initDetail(): void {
    if(!this.hasDetail()) {
      this.detail = [] as ClaimResponseItemDetailComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.item';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.itemSequence,
      this.traceNumber,
      this.noteNumber,
      this.reviewOutcome,
      this.adjudication,
      this.detail,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseItemComponent {
    const dest = new ClaimResponseItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseItemComponent): void {
    super.copyValues(dest);
    dest.itemSequence = this.itemSequence ? this.itemSequence.copy() : null;
    const traceNumberList = copyListValues<Identifier>(this.traceNumber);
    dest.traceNumber = traceNumberList.length === 0 ? undefined : traceNumberList;
    const noteNumberList = copyListValues<PositiveIntType>(this.noteNumber);
    dest.noteNumber = noteNumberList.length === 0 ? undefined : noteNumberList;
    dest.reviewOutcome = this.reviewOutcome?.copy();
    const adjudicationList = copyListValues<ClaimResponseItemAdjudicationComponent>(this.adjudication);
    dest.adjudication = adjudicationList.length === 0 ? undefined : adjudicationList;
    const detailList = copyListValues<ClaimResponseItemDetailComponent>(this.detail);
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

    if (this.hasItemSequenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirPositiveInt>(this.getItemSequenceElement()!, 'itemSequence', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.item.itemSequence`);
    }

    if (this.hasTraceNumber()) {
      setFhirComplexListJson(this.getTraceNumber(), 'traceNumber', jsonObj);
    }

    if (this.hasNoteNumber()) {
      setFhirPrimitiveListJson(this.getNoteNumberElement(), 'noteNumber', jsonObj);
    }

    if (this.hasReviewOutcome()) {
      setFhirBackboneElementJson(this.getReviewOutcome(), 'reviewOutcome', jsonObj);
    }

    if (this.hasAdjudication()) {
      setFhirBackboneElementListJson(this.getAdjudication(), 'adjudication', jsonObj);
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
 * ClaimResponseItemReviewOutcomeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Adjudication results
 * - **Definition:** The high-level results of the adjudication if adjudication has been performed.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseItemReviewOutcomeComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ClaimResponseItemReviewOutcomeComponent` JSON to instantiate the ClaimResponseItemReviewOutcomeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseItemReviewOutcomeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseItemReviewOutcomeComponent
   * @returns ClaimResponseItemReviewOutcomeComponent data model or undefined for `ClaimResponseItemReviewOutcomeComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseItemReviewOutcomeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseItemReviewOutcomeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseItemReviewOutcomeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'decision';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDecision(datatype);
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReason(datatype);
        }
      });
    }

    fieldName = 'preAuthRef';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPreAuthRefElement(datatype);
    }

    fieldName = 'preAuthPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPreAuthPeriod(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ClaimResponse.item.reviewOutcome.decision Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Result of the adjudication
   * - **Definition:** The result of the claim, predetermination, or preauthorization adjudication.
   * - **Comment:** The element is used to indicate the current state of the adjudication overall for the claim resource, for example: the request has been held (pended) for adjudication processing, for manual review or other reasons; that it has been processed and will be paid, or the outstanding paid, as submitted (approved); that no amount will be paid (denied); or that some amount between zero and the submitted amount will be paid (partial).
   * - **Requirements:** To advise the requestor of the result of the adjudication process.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private decision?: CodeableConcept | undefined;

  /**
   * ClaimResponse.item.reviewOutcome.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for result of the adjudication
   * - **Definition:** The reasons for the result of the claim, predetermination, or preauthorization adjudication.
   * - **Requirements:** To advise the requestor of the contributors to the result of the adjudication process.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableConcept[] | undefined;

  /**
   * ClaimResponse.item.reviewOutcome.preAuthRef Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Preauthorization reference
   * - **Definition:** Reference from the Insurer which is used in later communications which refers to this adjudication.
   * - **Comment:** This value is only present on preauthorization adjudications.
   * - **Requirements:** On subsequent claims, the insurer may require the provider to quote this value.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preAuthRef?: StringType | undefined;

  /**
   * ClaimResponse.item.reviewOutcome.preAuthPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Preauthorization reference effective period
   * - **Definition:** The time frame during which this authorization is effective.
   * - **Requirements:** To convey to the provider when the authorized products and services must be supplied for the authorized adjudication to apply.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preAuthPeriod?: Period | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `decision` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDecision(): CodeableConcept {
    return this.decision ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Decision object value to the `decision` property.
   *
   * @param value - the `decision` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDecision(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.reviewOutcome.decision; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.decision = value;
    } else {
      this.decision = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `decision` property exists and has a value; `false` otherwise
   */
  public hasDecision(): boolean {
    return isDefined<CodeableConcept>(this.decision) && !this.decision.isEmpty();
  }

  /**
   * @returns the `reason` property value as a CodeableConcept array
   */
  public getReason(): CodeableConcept[] {
    return this.reason ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `reason` property.
   *
   * @param value - the `reason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.reviewOutcome.reason; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `reason` array property.
   *
   * @param value - the `reason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.reviewOutcome.reason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initReason();
      this.reason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefinedList<CodeableConcept>(this.reason) && this.reason.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `reason` property
   */
  private initReason(): void {
    if(!this.hasReason()) {
      this.reason = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid ClaimResponse.item.reviewOutcome.preAuthRef; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ClaimResponse.item.reviewOutcome.preAuthRef (${String(value)})`;
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
   * @returns the `preAuthPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getPreAuthPeriod(): Period {
    return this.preAuthPeriod ?? new Period();
  }

  /**
   * Assigns the provided PreAuthPeriod object value to the `preAuthPeriod` property.
   *
   * @param value - the `preAuthPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPreAuthPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.reviewOutcome.preAuthPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.preAuthPeriod = value;
    } else {
      this.preAuthPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preAuthPeriod` property exists and has a value; `false` otherwise
   */
  public hasPreAuthPeriod(): boolean {
    return isDefined<Period>(this.preAuthPeriod) && !this.preAuthPeriod.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.item.reviewOutcome';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.decision,
      this.reason,
      this.preAuthRef,
      this.preAuthPeriod,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseItemReviewOutcomeComponent {
    const dest = new ClaimResponseItemReviewOutcomeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseItemReviewOutcomeComponent): void {
    super.copyValues(dest);
    dest.decision = this.decision?.copy();
    const reasonList = copyListValues<CodeableConcept>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    dest.preAuthRef = this.preAuthRef?.copy();
    dest.preAuthPeriod = this.preAuthPeriod?.copy();
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

    if (this.hasDecision()) {
      setFhirComplexJson(this.getDecision(), 'decision', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasPreAuthRefElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPreAuthRefElement(), 'preAuthRef', jsonObj);
    }

    if (this.hasPreAuthPeriod()) {
      setFhirComplexJson(this.getPreAuthPeriod(), 'preAuthPeriod', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ClaimResponseItemAdjudicationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Adjudication details
 * - **Definition:** If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 * - **Requirements:** The adjudication results conveys the insurer\'s assessment of the item provided in the claim under the terms of the patient\'s insurance coverage.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseItemAdjudicationComponent extends BackboneElement implements IBackboneElement {
  constructor(category: CodeableConcept | null = null) {
    super();

    this.category = null;
    if (isDefined<CodeableConcept>(category)) {
      this.setCategory(category);
    }
  }

  /**
   * Parse the provided `ClaimResponseItemAdjudicationComponent` JSON to instantiate the ClaimResponseItemAdjudicationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseItemAdjudicationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseItemAdjudicationComponent
   * @returns ClaimResponseItemAdjudicationComponent data model or undefined for `ClaimResponseItemAdjudicationComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseItemAdjudicationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseItemAdjudicationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseItemAdjudicationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

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

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReason(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmount(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ClaimResponse.item.adjudication.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of adjudication information
   * - **Definition:** A code to indicate the information type of this adjudication record. Information types may include the value submitted, maximum values or percentages allowed or payable under the plan, amounts that: the patient is responsible for in aggregate or pertaining to this item; amounts paid by other coverages; and, the benefit payable for this item.
   * - **Comment:** For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
   * - **Requirements:** Needed to enable understanding of the context of the other information in the adjudication.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category: CodeableConcept | null;

  /**
   * ClaimResponse.item.adjudication.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Explanation of adjudication outcome
   * - **Definition:** A code supporting the understanding of the adjudication result and explaining variance from expected amount.
   * - **Comment:** For example may indicate that the funds for this benefit type have been exhausted.
   * - **Requirements:** To support understanding of variance from adjudication expectations.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableConcept | undefined;

  /**
   * ClaimResponse.item.adjudication.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Monetary amount
   * - **Definition:** Monetary amount associated with the category.
   * - **Comment:** For example: amount submitted, eligible amount, co-payment, and benefit payable.
   * - **Requirements:** Most adjudication categories convey a monetary amount.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private amount?: Money | undefined;

  /**
   * ClaimResponse.item.adjudication.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Non-monetary value
   * - **Definition:** A non-monetary value associated with the category. Mutually exclusive to the amount element above.
   * - **Comment:** For example: eligible percentage or co-payment percentage.
   * - **Requirements:** Some adjudication categories convey a percentage or a fixed value.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
    assertIsDefined<CodeableConcept>(value, `ClaimResponse.item.adjudication.category is required`);
    const optErrMsg = `Invalid ClaimResponse.item.adjudication.category; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClaimResponse.item.adjudication.reason; Provided element is not an instance of CodeableConcept.`;
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

  /**
   * @returns the `amount` property value as a Money object if defined; else an empty Money object
   */
  public getAmount(): Money {
    return this.amount ?? new Money();
  }

  /**
   * Assigns the provided Amount object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.adjudication.amount; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<Money>(this.amount) && !this.amount.isEmpty();
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
      const optErrMsg = `Invalid ClaimResponse.item.adjudication.quantity; Provided element is not an instance of Quantity.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.item.adjudication';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.reason,
      this.amount,
      this.quantity,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseItemAdjudicationComponent {
    const dest = new ClaimResponseItemAdjudicationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseItemAdjudicationComponent): void {
    super.copyValues(dest);
    dest.category = this.category ? this.category.copy() : null;
    dest.reason = this.reason?.copy();
    dest.amount = this.amount?.copy();
    dest.quantity = this.quantity?.copy();
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

    if (this.hasCategory()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCategory()!, 'category', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.item.adjudication.category`);
    }

    if (this.hasReason()) {
      setFhirComplexJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimResponseItemDetailComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Adjudication for claim details
 * - **Definition:** A claim detail. Either a simple (a product or service) or a \'group\' of sub-details which are simple items.
 * - **Requirements:** The adjudication for details provided on the claim.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseItemDetailComponent extends BackboneElement implements IBackboneElement {
  constructor(detailSequence: PositiveIntType | fhirPositiveInt | null = null) {
    super();

    this.detailSequence = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(detailSequence)) {
      if (detailSequence instanceof PrimitiveType) {
        this.setDetailSequenceElement(detailSequence);
      } else {
        this.setDetailSequence(detailSequence);
      }
    }
  }

  /**
   * Parse the provided `ClaimResponseItemDetailComponent` JSON to instantiate the ClaimResponseItemDetailComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseItemDetailComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseItemDetailComponent
   * @returns ClaimResponseItemDetailComponent data model or undefined for `ClaimResponseItemDetailComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseItemDetailComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseItemDetailComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseItemDetailComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'detailSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setDetailSequenceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'traceNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTraceNumber(datatype);
        }
      });
    }

    fieldName = 'noteNumber';
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
          instance.addNoteNumberElement(datatype);
        }
      });
    }

    fieldName = 'reviewOutcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClaimResponseItemReviewOutcomeComponent | undefined = ClaimResponseItemReviewOutcomeComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReviewOutcome(component);
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseItemAdjudicationComponent | undefined = ClaimResponseItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAdjudication(component);
        }
      });
    }

    fieldName = 'subDetail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseItemDetailSubDetailComponent | undefined = ClaimResponseItemDetailSubDetailComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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
   * ClaimResponse.item.detail.detailSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Claim detail instance identifier
   * - **Definition:** A number to uniquely reference the claim detail entry.
   * - **Requirements:** Necessary to provide a mechanism to link the adjudication result to the submitted claim detail.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detailSequence: PositiveIntType | null;

  /**
   * ClaimResponse.item.detail.traceNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number for tracking
   * - **Definition:** Trace number for tracking purposes. May be defined at the jurisdiction level or between trading partners.
   * - **Requirements:** Allows partners to uniquely identify components for tracking.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private traceNumber?: Identifier[] | undefined;

  /**
   * ClaimResponse.item.detail.noteNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable note numbers
   * - **Definition:** The numbers associated with notes below which apply to the adjudication of this item.
   * - **Requirements:** Provides a condensed manner for associating human readable descriptive explanations for adjudications on the line item.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private noteNumber?: PositiveIntType[] | undefined;

  /**
   * ClaimResponse.item.detail.reviewOutcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Detail level adjudication results
   * - **Definition:** The high-level results of the adjudication if adjudication has been performed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reviewOutcome?: ClaimResponseItemReviewOutcomeComponent | undefined;

  /**
   * ClaimResponse.item.detail.adjudication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Detail level adjudication details
   * - **Definition:** The adjudication results.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private adjudication?: ClaimResponseItemAdjudicationComponent[] | undefined;

  /**
   * ClaimResponse.item.detail.subDetail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Adjudication for claim sub-details
   * - **Definition:** A sub-detail adjudication of a simple product or service.
   * - **Requirements:** The adjudication for sub-details provided on the claim.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subDetail?: ClaimResponseItemDetailSubDetailComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `detailSequence` property value as a PositiveIntType object if defined; else null
   */
  public getDetailSequenceElement(): PositiveIntType | null {
    return this.detailSequence;
  }

  /**
   * Assigns the provided PrimitiveType value to the `detailSequence` property.
   *
   * @param element - the `detailSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetailSequenceElement(element: PositiveIntType): this {
    assertIsDefined<PositiveIntType>(element, `ClaimResponse.item.detail.detailSequence is required`);
    const optErrMsg = `Invalid ClaimResponse.item.detail.detailSequence; Provided value is not an instance of PositiveIntType.`;
    assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
    this.detailSequence = element;
    return this;
  }

  /**
   * @returns `true` if the `detailSequence` property exists and has a value; `false` otherwise
   */
  public hasDetailSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.detailSequence) && !this.detailSequence.isEmpty();
  }

  /**
   * @returns the `detailSequence` property value as a fhirPositiveInt if defined; else null
   */
  public getDetailSequence(): fhirPositiveInt | null {
    if (this.detailSequence?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.detailSequence.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `detailSequence` property.
   *
   * @param value - the `detailSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetailSequence(value: fhirPositiveInt): this {
    assertIsDefined<fhirPositiveInt>(value, `ClaimResponse.item.detail.detailSequence is required`);
    const optErrMsg = `Invalid ClaimResponse.item.detail.detailSequence (${String(value)})`;
    this.detailSequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `detailSequence` property exists and has a value; `false` otherwise
   */
  public hasDetailSequence(): boolean {
    return this.hasDetailSequenceElement();
  }

  /**
   * @returns the `traceNumber` property value as a Identifier array
   */
  public getTraceNumber(): Identifier[] {
    return this.traceNumber ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `traceNumber` property.
   *
   * @param value - the `traceNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTraceNumber(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.traceNumber; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.traceNumber = value;
    } else {
      this.traceNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `traceNumber` array property.
   *
   * @param value - the `traceNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTraceNumber(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.traceNumber; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initTraceNumber();
      this.traceNumber?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `traceNumber` property exists and has a value; `false` otherwise
   */
  public hasTraceNumber(): boolean {
    return isDefinedList<Identifier>(this.traceNumber) && this.traceNumber.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `traceNumber` property
   */
  private initTraceNumber(): void {
    if(!this.hasTraceNumber()) {
      this.traceNumber = [] as Identifier[];
    }
  }

  /**
   * @returns the `noteNumber` property value as a PositiveIntType array
   */
  public getNoteNumberElement(): PositiveIntType[] {
    return this.noteNumber ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `noteNumber` property.
   *
   * @param element - the `noteNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNoteNumberElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.noteNumber; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.noteNumber = element;
    } else {
      this.noteNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `noteNumber` array property.
   *
   * @param element - the `noteNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNoteNumberElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.noteNumber; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initNoteNumber();
      this.noteNumber?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `noteNumber` property exists and has a value; `false` otherwise
   */
  public hasNoteNumberElement(): boolean {
    return isDefinedList<PositiveIntType>(this.noteNumber) && this.noteNumber.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `noteNumber` property value as a fhirPositiveInt array
   */
  public getNoteNumber(): fhirPositiveInt[] {
    this.initNoteNumber();
    const noteNumberValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.noteNumber!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        noteNumberValues.push(value);
      }
    }
    return noteNumberValues;
  }

  /**
   * Assigns the provided primitive value array to the `noteNumber` property.
   *
   * @param value - the `noteNumber` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNoteNumber(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const noteNumberElements = [] as PositiveIntType[];
      for (const noteNumberValue of value) {
        const optErrMsg = `Invalid ClaimResponse.item.detail.noteNumber array item (${String(noteNumberValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(noteNumberValue, fhirPositiveIntSchema, optErrMsg));
        noteNumberElements.push(element);
      }
      this.noteNumber = noteNumberElements;
    } else {
      this.noteNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `noteNumber` array property.
   *
   * @param value - the `noteNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNoteNumber(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.noteNumber array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initNoteNumber();
      this.addNoteNumberElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `noteNumber` property exists and has a value; `false` otherwise
   */
  public hasNoteNumber(): boolean {
    return this.hasNoteNumberElement();
  }

  /**
   * Initialize the `noteNumber` property
   */
  private initNoteNumber(): void {
    if (!this.hasNoteNumber()) {
      this.noteNumber = [] as PositiveIntType[];
    }
  }

  /**
   * @returns the `reviewOutcome` property value as a ClaimResponseItemReviewOutcomeComponent object if defined; else an empty ClaimResponseItemReviewOutcomeComponent object
   */
  public getReviewOutcome(): ClaimResponseItemReviewOutcomeComponent {
    return this.reviewOutcome ?? new ClaimResponseItemReviewOutcomeComponent();
  }

  /**
   * Assigns the provided ReviewOutcome object value to the `reviewOutcome` property.
   *
   * @param value - the `reviewOutcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReviewOutcome(value: ClaimResponseItemReviewOutcomeComponent | undefined): this {
    if (isDefined<ClaimResponseItemReviewOutcomeComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.reviewOutcome; Provided element is not an instance of ClaimResponseItemReviewOutcomeComponent.`;
      assertFhirType<ClaimResponseItemReviewOutcomeComponent>(value, ClaimResponseItemReviewOutcomeComponent, optErrMsg);
      this.reviewOutcome = value;
    } else {
      this.reviewOutcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reviewOutcome` property exists and has a value; `false` otherwise
   */
  public hasReviewOutcome(): boolean {
    return isDefined<ClaimResponseItemReviewOutcomeComponent>(this.reviewOutcome) && !this.reviewOutcome.isEmpty();
  }

  /**
   * @returns the `adjudication` property value as a ClaimResponseItemAdjudicationComponent array
   */
  public getAdjudication(): ClaimResponseItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ClaimResponseItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ClaimResponseItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.adjudication; Provided value array has an element that is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirTypeList<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ClaimResponseItemAdjudicationComponent | undefined): this {
    if (isDefined<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.adjudication; Provided element is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirType<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ClaimResponseItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ClaimResponseItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ClaimResponseItemAdjudicationComponent[];
    }
  }

  /**
   * @returns the `subDetail` property value as a ClaimResponseItemDetailSubDetailComponent array
   */
  public getSubDetail(): ClaimResponseItemDetailSubDetailComponent[] {
    return this.subDetail ?? ([] as ClaimResponseItemDetailSubDetailComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseItemDetailSubDetailComponent array value to the `subDetail` property.
   *
   * @param value - the `subDetail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubDetail(value: ClaimResponseItemDetailSubDetailComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseItemDetailSubDetailComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.subDetail; Provided value array has an element that is not an instance of ClaimResponseItemDetailSubDetailComponent.`;
      assertFhirTypeList<ClaimResponseItemDetailSubDetailComponent>(value, ClaimResponseItemDetailSubDetailComponent, optErrMsg);
      this.subDetail = value;
    } else {
      this.subDetail = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseItemDetailSubDetailComponent value to the `subDetail` array property.
   *
   * @param value - the `subDetail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubDetail(value: ClaimResponseItemDetailSubDetailComponent | undefined): this {
    if (isDefined<ClaimResponseItemDetailSubDetailComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.subDetail; Provided element is not an instance of ClaimResponseItemDetailSubDetailComponent.`;
      assertFhirType<ClaimResponseItemDetailSubDetailComponent>(value, ClaimResponseItemDetailSubDetailComponent, optErrMsg);
      this.initSubDetail();
      this.subDetail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subDetail` property exists and has a value; `false` otherwise
   */
  public hasSubDetail(): boolean {
    return isDefinedList<ClaimResponseItemDetailSubDetailComponent>(this.subDetail) && this.subDetail.some((item: ClaimResponseItemDetailSubDetailComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `subDetail` property
   */
  private initSubDetail(): void {
    if(!this.hasSubDetail()) {
      this.subDetail = [] as ClaimResponseItemDetailSubDetailComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.item.detail';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.detailSequence,
      this.traceNumber,
      this.noteNumber,
      this.reviewOutcome,
      this.adjudication,
      this.subDetail,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseItemDetailComponent {
    const dest = new ClaimResponseItemDetailComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseItemDetailComponent): void {
    super.copyValues(dest);
    dest.detailSequence = this.detailSequence ? this.detailSequence.copy() : null;
    const traceNumberList = copyListValues<Identifier>(this.traceNumber);
    dest.traceNumber = traceNumberList.length === 0 ? undefined : traceNumberList;
    const noteNumberList = copyListValues<PositiveIntType>(this.noteNumber);
    dest.noteNumber = noteNumberList.length === 0 ? undefined : noteNumberList;
    dest.reviewOutcome = this.reviewOutcome?.copy();
    const adjudicationList = copyListValues<ClaimResponseItemAdjudicationComponent>(this.adjudication);
    dest.adjudication = adjudicationList.length === 0 ? undefined : adjudicationList;
    const subDetailList = copyListValues<ClaimResponseItemDetailSubDetailComponent>(this.subDetail);
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

    if (this.hasDetailSequenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirPositiveInt>(this.getDetailSequenceElement()!, 'detailSequence', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.item.detail.detailSequence`);
    }

    if (this.hasTraceNumber()) {
      setFhirComplexListJson(this.getTraceNumber(), 'traceNumber', jsonObj);
    }

    if (this.hasNoteNumber()) {
      setFhirPrimitiveListJson(this.getNoteNumberElement(), 'noteNumber', jsonObj);
    }

    if (this.hasReviewOutcome()) {
      setFhirBackboneElementJson(this.getReviewOutcome(), 'reviewOutcome', jsonObj);
    }

    if (this.hasAdjudication()) {
      setFhirBackboneElementListJson(this.getAdjudication(), 'adjudication', jsonObj);
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
 * ClaimResponseItemDetailSubDetailComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Adjudication for claim sub-details
 * - **Definition:** A sub-detail adjudication of a simple product or service.
 * - **Requirements:** The adjudication for sub-details provided on the claim.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseItemDetailSubDetailComponent extends BackboneElement implements IBackboneElement {
  constructor(subDetailSequence: PositiveIntType | fhirPositiveInt | null = null) {
    super();

    this.subDetailSequence = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(subDetailSequence)) {
      if (subDetailSequence instanceof PrimitiveType) {
        this.setSubDetailSequenceElement(subDetailSequence);
      } else {
        this.setSubDetailSequence(subDetailSequence);
      }
    }
  }

  /**
   * Parse the provided `ClaimResponseItemDetailSubDetailComponent` JSON to instantiate the ClaimResponseItemDetailSubDetailComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseItemDetailSubDetailComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseItemDetailSubDetailComponent
   * @returns ClaimResponseItemDetailSubDetailComponent data model or undefined for `ClaimResponseItemDetailSubDetailComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseItemDetailSubDetailComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseItemDetailSubDetailComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseItemDetailSubDetailComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'subDetailSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSubDetailSequenceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'traceNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTraceNumber(datatype);
        }
      });
    }

    fieldName = 'noteNumber';
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
          instance.addNoteNumberElement(datatype);
        }
      });
    }

    fieldName = 'reviewOutcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClaimResponseItemReviewOutcomeComponent | undefined = ClaimResponseItemReviewOutcomeComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReviewOutcome(component);
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseItemAdjudicationComponent | undefined = ClaimResponseItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAdjudication(component);
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
   * ClaimResponse.item.detail.subDetail.subDetailSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Claim sub-detail instance identifier
   * - **Definition:** A number to uniquely reference the claim sub-detail entry.
   * - **Requirements:** Necessary to provide a mechanism to link the adjudication result to the submitted claim sub-detail.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subDetailSequence: PositiveIntType | null;

  /**
   * ClaimResponse.item.detail.subDetail.traceNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number for tracking
   * - **Definition:** Trace number for tracking purposes. May be defined at the jurisdiction level or between trading partners.
   * - **Requirements:** Allows partners to uniquely identify components for tracking.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private traceNumber?: Identifier[] | undefined;

  /**
   * ClaimResponse.item.detail.subDetail.noteNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable note numbers
   * - **Definition:** The numbers associated with notes below which apply to the adjudication of this item.
   * - **Requirements:** Provides a condensed manner for associating human readable descriptive explanations for adjudications on the line item.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private noteNumber?: PositiveIntType[] | undefined;

  /**
   * ClaimResponse.item.detail.subDetail.reviewOutcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subdetail level adjudication results
   * - **Definition:** The high-level results of the adjudication if adjudication has been performed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reviewOutcome?: ClaimResponseItemReviewOutcomeComponent | undefined;

  /**
   * ClaimResponse.item.detail.subDetail.adjudication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subdetail level adjudication details
   * - **Definition:** The adjudication results.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private adjudication?: ClaimResponseItemAdjudicationComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `subDetailSequence` property value as a PositiveIntType object if defined; else null
   */
  public getSubDetailSequenceElement(): PositiveIntType | null {
    return this.subDetailSequence;
  }

  /**
   * Assigns the provided PrimitiveType value to the `subDetailSequence` property.
   *
   * @param element - the `subDetailSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubDetailSequenceElement(element: PositiveIntType): this {
    assertIsDefined<PositiveIntType>(element, `ClaimResponse.item.detail.subDetail.subDetailSequence is required`);
    const optErrMsg = `Invalid ClaimResponse.item.detail.subDetail.subDetailSequence; Provided value is not an instance of PositiveIntType.`;
    assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
    this.subDetailSequence = element;
    return this;
  }

  /**
   * @returns `true` if the `subDetailSequence` property exists and has a value; `false` otherwise
   */
  public hasSubDetailSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.subDetailSequence) && !this.subDetailSequence.isEmpty();
  }

  /**
   * @returns the `subDetailSequence` property value as a fhirPositiveInt if defined; else null
   */
  public getSubDetailSequence(): fhirPositiveInt | null {
    if (this.subDetailSequence?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.subDetailSequence.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `subDetailSequence` property.
   *
   * @param value - the `subDetailSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubDetailSequence(value: fhirPositiveInt): this {
    assertIsDefined<fhirPositiveInt>(value, `ClaimResponse.item.detail.subDetail.subDetailSequence is required`);
    const optErrMsg = `Invalid ClaimResponse.item.detail.subDetail.subDetailSequence (${String(value)})`;
    this.subDetailSequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `subDetailSequence` property exists and has a value; `false` otherwise
   */
  public hasSubDetailSequence(): boolean {
    return this.hasSubDetailSequenceElement();
  }

  /**
   * @returns the `traceNumber` property value as a Identifier array
   */
  public getTraceNumber(): Identifier[] {
    return this.traceNumber ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `traceNumber` property.
   *
   * @param value - the `traceNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTraceNumber(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.subDetail.traceNumber; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.traceNumber = value;
    } else {
      this.traceNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `traceNumber` array property.
   *
   * @param value - the `traceNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTraceNumber(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.subDetail.traceNumber; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initTraceNumber();
      this.traceNumber?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `traceNumber` property exists and has a value; `false` otherwise
   */
  public hasTraceNumber(): boolean {
    return isDefinedList<Identifier>(this.traceNumber) && this.traceNumber.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `traceNumber` property
   */
  private initTraceNumber(): void {
    if(!this.hasTraceNumber()) {
      this.traceNumber = [] as Identifier[];
    }
  }

  /**
   * @returns the `noteNumber` property value as a PositiveIntType array
   */
  public getNoteNumberElement(): PositiveIntType[] {
    return this.noteNumber ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `noteNumber` property.
   *
   * @param element - the `noteNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNoteNumberElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.subDetail.noteNumber; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.noteNumber = element;
    } else {
      this.noteNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `noteNumber` array property.
   *
   * @param element - the `noteNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNoteNumberElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.subDetail.noteNumber; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initNoteNumber();
      this.noteNumber?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `noteNumber` property exists and has a value; `false` otherwise
   */
  public hasNoteNumberElement(): boolean {
    return isDefinedList<PositiveIntType>(this.noteNumber) && this.noteNumber.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `noteNumber` property value as a fhirPositiveInt array
   */
  public getNoteNumber(): fhirPositiveInt[] {
    this.initNoteNumber();
    const noteNumberValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.noteNumber!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        noteNumberValues.push(value);
      }
    }
    return noteNumberValues;
  }

  /**
   * Assigns the provided primitive value array to the `noteNumber` property.
   *
   * @param value - the `noteNumber` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNoteNumber(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const noteNumberElements = [] as PositiveIntType[];
      for (const noteNumberValue of value) {
        const optErrMsg = `Invalid ClaimResponse.item.detail.subDetail.noteNumber array item (${String(noteNumberValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(noteNumberValue, fhirPositiveIntSchema, optErrMsg));
        noteNumberElements.push(element);
      }
      this.noteNumber = noteNumberElements;
    } else {
      this.noteNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `noteNumber` array property.
   *
   * @param value - the `noteNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNoteNumber(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.subDetail.noteNumber array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initNoteNumber();
      this.addNoteNumberElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `noteNumber` property exists and has a value; `false` otherwise
   */
  public hasNoteNumber(): boolean {
    return this.hasNoteNumberElement();
  }

  /**
   * Initialize the `noteNumber` property
   */
  private initNoteNumber(): void {
    if (!this.hasNoteNumber()) {
      this.noteNumber = [] as PositiveIntType[];
    }
  }

  /**
   * @returns the `reviewOutcome` property value as a ClaimResponseItemReviewOutcomeComponent object if defined; else an empty ClaimResponseItemReviewOutcomeComponent object
   */
  public getReviewOutcome(): ClaimResponseItemReviewOutcomeComponent {
    return this.reviewOutcome ?? new ClaimResponseItemReviewOutcomeComponent();
  }

  /**
   * Assigns the provided ReviewOutcome object value to the `reviewOutcome` property.
   *
   * @param value - the `reviewOutcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReviewOutcome(value: ClaimResponseItemReviewOutcomeComponent | undefined): this {
    if (isDefined<ClaimResponseItemReviewOutcomeComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.subDetail.reviewOutcome; Provided element is not an instance of ClaimResponseItemReviewOutcomeComponent.`;
      assertFhirType<ClaimResponseItemReviewOutcomeComponent>(value, ClaimResponseItemReviewOutcomeComponent, optErrMsg);
      this.reviewOutcome = value;
    } else {
      this.reviewOutcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reviewOutcome` property exists and has a value; `false` otherwise
   */
  public hasReviewOutcome(): boolean {
    return isDefined<ClaimResponseItemReviewOutcomeComponent>(this.reviewOutcome) && !this.reviewOutcome.isEmpty();
  }

  /**
   * @returns the `adjudication` property value as a ClaimResponseItemAdjudicationComponent array
   */
  public getAdjudication(): ClaimResponseItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ClaimResponseItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ClaimResponseItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.subDetail.adjudication; Provided value array has an element that is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirTypeList<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ClaimResponseItemAdjudicationComponent | undefined): this {
    if (isDefined<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.item.detail.subDetail.adjudication; Provided element is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirType<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ClaimResponseItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ClaimResponseItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ClaimResponseItemAdjudicationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.item.detail.subDetail';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.subDetailSequence,
      this.traceNumber,
      this.noteNumber,
      this.reviewOutcome,
      this.adjudication,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseItemDetailSubDetailComponent {
    const dest = new ClaimResponseItemDetailSubDetailComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseItemDetailSubDetailComponent): void {
    super.copyValues(dest);
    dest.subDetailSequence = this.subDetailSequence ? this.subDetailSequence.copy() : null;
    const traceNumberList = copyListValues<Identifier>(this.traceNumber);
    dest.traceNumber = traceNumberList.length === 0 ? undefined : traceNumberList;
    const noteNumberList = copyListValues<PositiveIntType>(this.noteNumber);
    dest.noteNumber = noteNumberList.length === 0 ? undefined : noteNumberList;
    dest.reviewOutcome = this.reviewOutcome?.copy();
    const adjudicationList = copyListValues<ClaimResponseItemAdjudicationComponent>(this.adjudication);
    dest.adjudication = adjudicationList.length === 0 ? undefined : adjudicationList;
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

    if (this.hasSubDetailSequenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSubDetailSequenceElement()!, 'subDetailSequence', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.item.detail.subDetail.subDetailSequence`);
    }

    if (this.hasTraceNumber()) {
      setFhirComplexListJson(this.getTraceNumber(), 'traceNumber', jsonObj);
    }

    if (this.hasNoteNumber()) {
      setFhirPrimitiveListJson(this.getNoteNumberElement(), 'noteNumber', jsonObj);
    }

    if (this.hasReviewOutcome()) {
      setFhirBackboneElementJson(this.getReviewOutcome(), 'reviewOutcome', jsonObj);
    }

    if (this.hasAdjudication()) {
      setFhirBackboneElementListJson(this.getAdjudication(), 'adjudication', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimResponseAddItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Insurer added line items
 * - **Definition:** The first-tier service adjudications for payor added product or service lines.
 * - **Requirements:** Insurers may redefine the provided product or service or may package and/or decompose groups of products and services. The addItems allows the insurer to provide their line item list with linkage to the submitted items/details/sub-details. In a preauthorization the insurer may use the addItem structure to provide additional information on authorized products and services.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseAddItemComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ClaimResponseAddItemComponent` JSON to instantiate the ClaimResponseAddItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseAddItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseAddItemComponent
   * @returns ClaimResponseAddItemComponent data model or undefined for `ClaimResponseAddItemComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseAddItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseAddItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseAddItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ClaimResponseAddItemComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ClaimResponseAddItemComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'itemSequence';
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
          instance.addItemSequenceElement(datatype);
        }
      });
    }

    fieldName = 'detailSequence';
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
          instance.addDetailSequenceElement(datatype);
        }
      });
    }

    fieldName = 'subdetailSequence';
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
          instance.addSubdetailSequenceElement(datatype);
        }
      });
    }

    fieldName = 'traceNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTraceNumber(datatype);
        }
      });
    }

    fieldName = 'provider';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addProvider(datatype);
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

    fieldName = 'productOrService';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProductOrService(datatype);
    }

    fieldName = 'productOrServiceEnd';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProductOrServiceEnd(datatype);
    }

    fieldName = 'request';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRequest(datatype);
        }
      });
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

    fieldName = 'tax';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTax(datatype);
    }

    fieldName = 'net';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNet(datatype);
    }

    fieldName = 'bodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseAddItemBodySiteComponent | undefined = ClaimResponseAddItemBodySiteComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addBodySite(component);
        }
      });
    }

    fieldName = 'noteNumber';
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
          instance.addNoteNumberElement(datatype);
        }
      });
    }

    fieldName = 'reviewOutcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClaimResponseItemReviewOutcomeComponent | undefined = ClaimResponseItemReviewOutcomeComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReviewOutcome(component);
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseItemAdjudicationComponent | undefined = ClaimResponseItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAdjudication(component);
        }
      });
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseAddItemDetailComponent | undefined = ClaimResponseAddItemDetailComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDetail(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ClaimResponse.addItem.itemSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Item sequence number
   * - **Definition:** Claim items which this service line is intended to replace.
   * - **Requirements:** Provides references to the claim items.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private itemSequence?: PositiveIntType[] | undefined;

  /**
   * ClaimResponse.addItem.detailSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Detail sequence number
   * - **Definition:** The sequence number of the details within the claim item which this line is intended to replace.
   * - **Requirements:** Provides references to the claim details within the claim item.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detailSequence?: PositiveIntType[] | undefined;

  /**
   * ClaimResponse.addItem.subdetailSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subdetail sequence number
   * - **Definition:** The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
   * - **Requirements:** Provides references to the claim sub-details within the claim detail.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subdetailSequence?: PositiveIntType[] | undefined;

  /**
   * ClaimResponse.addItem.traceNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number for tracking
   * - **Definition:** Trace number for tracking purposes. May be defined at the jurisdiction level or between trading partners.
   * - **Requirements:** Allows partners to uniquely identify components for tracking.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private traceNumber?: Identifier[] | undefined;

  /**
   * ClaimResponse.addItem.provider Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Authorized providers
   * - **Definition:** The providers who are authorized for the services rendered to the patient.
   * - **Requirements:** Insurer may provide authorization specifically to a restricted set of providers rather than an open authorization.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private provider?: Reference[] | undefined;

  /**
   * ClaimResponse.addItem.revenue Element
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
   * ClaimResponse.addItem.productOrService Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Billing, service, product, or drug code
   * - **Definition:** When the value is a group code then this item collects a set of related item details, otherwise this contains the product, service, drug or other billing code for the item. This element may be the start of a range of .productOrService codes used in conjunction with .productOrServiceEnd or it may be a solo element where .productOrServiceEnd is not used.
   * - **Comment:** If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. \'glasses\' or \'compound\'.
   * - **Requirements:** Necessary to state what was provided or done.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productOrService?: CodeableConcept | undefined;

  /**
   * ClaimResponse.addItem.productOrServiceEnd Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** End of a range of codes
   * - **Definition:** This contains the end of a range of product, service, drug or other billing codes for the item. This element is not used when the .productOrService is a group code. This value may only be present when a .productOfService code has been provided to convey the start of the range. Typically this value may be used only with preauthorizations and not with claims.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productOrServiceEnd?: CodeableConcept | undefined;

  /**
   * ClaimResponse.addItem.request Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request or Referral for Service
   * - **Definition:** Request or Referral for Goods or Service to be rendered.
   * - **Requirements:** May identify the service to be provided or provider authorization for the service.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionOrder',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/SupplyRequest',
   *       'http://hl7.org/fhir/StructureDefinition/VisionPrescription',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private request?: Reference[] | undefined;

  /**
   * ClaimResponse.addItem.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Service/Product billing modifiers
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
   * ClaimResponse.addItem.programCode Element
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
   * ClaimResponse.addItem.serviced[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ClaimResponse.addItem.serviced[x]', ['date','Period',]`
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
  @ChoiceDataTypesMeta('ClaimResponse.addItem.serviced[x]',[
    'date',
    'Period',
  ])
  private serviced?: IDataType | undefined;

  /**
   * ClaimResponse.addItem.location[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ClaimResponse.addItem.location[x]', ['CodeableConcept','Address','Reference',]`
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
  @ChoiceDataTypesMeta('ClaimResponse.addItem.location[x]',[
    'CodeableConcept',
    'Address',
    'Reference',
  ])
  private location?: IDataType | undefined;

  /**
   * ClaimResponse.addItem.quantity Element
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
   * ClaimResponse.addItem.unitPrice Element
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
   * ClaimResponse.addItem.factor Element
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
   * ClaimResponse.addItem.tax Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total tax
   * - **Definition:** The total of taxes applicable for this product or service.
   * - **Requirements:** Required when taxes are not embedded in the unit price or provided as a separate service.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private tax?: Money | undefined;

  /**
   * ClaimResponse.addItem.net Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total item cost
   * - **Definition:** The total amount claimed for the group (if a grouper) or the addItem. Net = unit price * quantity * factor.
   * - **Comment:** For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
   * - **Requirements:** Provides the total amount claimed  for the group (if a grouper) or the line item.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private net?: Money | undefined;

  /**
   * ClaimResponse.addItem.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Anatomical location
   * - **Definition:** Physical location where the service is performed or applies.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private bodySite?: ClaimResponseAddItemBodySiteComponent[] | undefined;

  /**
   * ClaimResponse.addItem.noteNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable note numbers
   * - **Definition:** The numbers associated with notes below which apply to the adjudication of this item.
   * - **Requirements:** Provides a condensed manner for associating human readable descriptive explanations for adjudications on the line item.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private noteNumber?: PositiveIntType[] | undefined;

  /**
   * ClaimResponse.addItem.reviewOutcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Added items adjudication results
   * - **Definition:** The high-level results of the adjudication if adjudication has been performed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reviewOutcome?: ClaimResponseItemReviewOutcomeComponent | undefined;

  /**
   * ClaimResponse.addItem.adjudication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Added items adjudication
   * - **Definition:** The adjudication results.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private adjudication?: ClaimResponseItemAdjudicationComponent[] | undefined;

  /**
   * ClaimResponse.addItem.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Insurer added line details
   * - **Definition:** The second-tier service adjudications for payor added services.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: ClaimResponseAddItemDetailComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `itemSequence` property value as a PositiveIntType array
   */
  public getItemSequenceElement(): PositiveIntType[] {
    return this.itemSequence ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `itemSequence` property.
   *
   * @param element - the `itemSequence` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setItemSequenceElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.itemSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.itemSequence = element;
    } else {
      this.itemSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `itemSequence` array property.
   *
   * @param element - the `itemSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addItemSequenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.itemSequence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initItemSequence();
      this.itemSequence?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `itemSequence` property exists and has a value; `false` otherwise
   */
  public hasItemSequenceElement(): boolean {
    return isDefinedList<PositiveIntType>(this.itemSequence) && this.itemSequence.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `itemSequence` property value as a fhirPositiveInt array
   */
  public getItemSequence(): fhirPositiveInt[] {
    this.initItemSequence();
    const itemSequenceValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.itemSequence!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        itemSequenceValues.push(value);
      }
    }
    return itemSequenceValues;
  }

  /**
   * Assigns the provided primitive value array to the `itemSequence` property.
   *
   * @param value - the `itemSequence` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setItemSequence(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const itemSequenceElements = [] as PositiveIntType[];
      for (const itemSequenceValue of value) {
        const optErrMsg = `Invalid ClaimResponse.addItem.itemSequence array item (${String(itemSequenceValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(itemSequenceValue, fhirPositiveIntSchema, optErrMsg));
        itemSequenceElements.push(element);
      }
      this.itemSequence = itemSequenceElements;
    } else {
      this.itemSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `itemSequence` array property.
   *
   * @param value - the `itemSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addItemSequence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.itemSequence array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initItemSequence();
      this.addItemSequenceElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `itemSequence` property exists and has a value; `false` otherwise
   */
  public hasItemSequence(): boolean {
    return this.hasItemSequenceElement();
  }

  /**
   * Initialize the `itemSequence` property
   */
  private initItemSequence(): void {
    if (!this.hasItemSequence()) {
      this.itemSequence = [] as PositiveIntType[];
    }
  }

  /**
   * @returns the `detailSequence` property value as a PositiveIntType array
   */
  public getDetailSequenceElement(): PositiveIntType[] {
    return this.detailSequence ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `detailSequence` property.
   *
   * @param element - the `detailSequence` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetailSequenceElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detailSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.detailSequence = element;
    } else {
      this.detailSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `detailSequence` array property.
   *
   * @param element - the `detailSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDetailSequenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detailSequence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initDetailSequence();
      this.detailSequence?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `detailSequence` property exists and has a value; `false` otherwise
   */
  public hasDetailSequenceElement(): boolean {
    return isDefinedList<PositiveIntType>(this.detailSequence) && this.detailSequence.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `detailSequence` property value as a fhirPositiveInt array
   */
  public getDetailSequence(): fhirPositiveInt[] {
    this.initDetailSequence();
    const detailSequenceValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.detailSequence!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        detailSequenceValues.push(value);
      }
    }
    return detailSequenceValues;
  }

  /**
   * Assigns the provided primitive value array to the `detailSequence` property.
   *
   * @param value - the `detailSequence` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetailSequence(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const detailSequenceElements = [] as PositiveIntType[];
      for (const detailSequenceValue of value) {
        const optErrMsg = `Invalid ClaimResponse.addItem.detailSequence array item (${String(detailSequenceValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(detailSequenceValue, fhirPositiveIntSchema, optErrMsg));
        detailSequenceElements.push(element);
      }
      this.detailSequence = detailSequenceElements;
    } else {
      this.detailSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `detailSequence` array property.
   *
   * @param value - the `detailSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDetailSequence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detailSequence array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initDetailSequence();
      this.addDetailSequenceElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `detailSequence` property exists and has a value; `false` otherwise
   */
  public hasDetailSequence(): boolean {
    return this.hasDetailSequenceElement();
  }

  /**
   * Initialize the `detailSequence` property
   */
  private initDetailSequence(): void {
    if (!this.hasDetailSequence()) {
      this.detailSequence = [] as PositiveIntType[];
    }
  }

  /**
   * @returns the `subdetailSequence` property value as a PositiveIntType array
   */
  public getSubdetailSequenceElement(): PositiveIntType[] {
    return this.subdetailSequence ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `subdetailSequence` property.
   *
   * @param element - the `subdetailSequence` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubdetailSequenceElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.subdetailSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.subdetailSequence = element;
    } else {
      this.subdetailSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `subdetailSequence` array property.
   *
   * @param element - the `subdetailSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSubdetailSequenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.subdetailSequence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initSubdetailSequence();
      this.subdetailSequence?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `subdetailSequence` property exists and has a value; `false` otherwise
   */
  public hasSubdetailSequenceElement(): boolean {
    return isDefinedList<PositiveIntType>(this.subdetailSequence) && this.subdetailSequence.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `subdetailSequence` property value as a fhirPositiveInt array
   */
  public getSubdetailSequence(): fhirPositiveInt[] {
    this.initSubdetailSequence();
    const subdetailSequenceValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.subdetailSequence!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        subdetailSequenceValues.push(value);
      }
    }
    return subdetailSequenceValues;
  }

  /**
   * Assigns the provided primitive value array to the `subdetailSequence` property.
   *
   * @param value - the `subdetailSequence` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubdetailSequence(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const subdetailSequenceElements = [] as PositiveIntType[];
      for (const subdetailSequenceValue of value) {
        const optErrMsg = `Invalid ClaimResponse.addItem.subdetailSequence array item (${String(subdetailSequenceValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(subdetailSequenceValue, fhirPositiveIntSchema, optErrMsg));
        subdetailSequenceElements.push(element);
      }
      this.subdetailSequence = subdetailSequenceElements;
    } else {
      this.subdetailSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `subdetailSequence` array property.
   *
   * @param value - the `subdetailSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSubdetailSequence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.subdetailSequence array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initSubdetailSequence();
      this.addSubdetailSequenceElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `subdetailSequence` property exists and has a value; `false` otherwise
   */
  public hasSubdetailSequence(): boolean {
    return this.hasSubdetailSequenceElement();
  }

  /**
   * Initialize the `subdetailSequence` property
   */
  private initSubdetailSequence(): void {
    if (!this.hasSubdetailSequence()) {
      this.subdetailSequence = [] as PositiveIntType[];
    }
  }

  /**
   * @returns the `traceNumber` property value as a Identifier array
   */
  public getTraceNumber(): Identifier[] {
    return this.traceNumber ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `traceNumber` property.
   *
   * @param value - the `traceNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTraceNumber(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.traceNumber; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.traceNumber = value;
    } else {
      this.traceNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `traceNumber` array property.
   *
   * @param value - the `traceNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTraceNumber(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.traceNumber; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initTraceNumber();
      this.traceNumber?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `traceNumber` property exists and has a value; `false` otherwise
   */
  public hasTraceNumber(): boolean {
    return isDefinedList<Identifier>(this.traceNumber) && this.traceNumber.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `traceNumber` property
   */
  private initTraceNumber(): void {
    if(!this.hasTraceNumber()) {
      this.traceNumber = [] as Identifier[];
    }
  }

  /**
   * @returns the `provider` property value as a Reference array
   */
  public getProvider(): Reference[] {
    return this.provider ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `provider` property.
   *
   * @decorator `@ReferenceTargets('ClaimResponse.addItem.provider', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `provider` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.addItem.provider', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setProvider(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.provider = value;
    } else {
      this.provider = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `provider` array property.
   *
   * @decorator `@ReferenceTargets('ClaimResponse.addItem.provider', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `provider` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.addItem.provider', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public addProvider(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initProvider();
      this.provider?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `provider` property exists and has a value; `false` otherwise
   */
  public hasProvider(): boolean {
    return isDefinedList<Reference>(this.provider) && this.provider.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `provider` property
   */
  private initProvider(): void {
    if (!this.hasProvider()) {
      this.provider = [] as Reference[];
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
      const optErrMsg = `Invalid ClaimResponse.addItem.revenue; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.productOrService; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `productOrServiceEnd` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getProductOrServiceEnd(): CodeableConcept {
    return this.productOrServiceEnd ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ProductOrServiceEnd object value to the `productOrServiceEnd` property.
   *
   * @param value - the `productOrServiceEnd` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductOrServiceEnd(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.productOrServiceEnd; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productOrServiceEnd = value;
    } else {
      this.productOrServiceEnd = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productOrServiceEnd` property exists and has a value; `false` otherwise
   */
  public hasProductOrServiceEnd(): boolean {
    return isDefined<CodeableConcept>(this.productOrServiceEnd) && !this.productOrServiceEnd.isEmpty();
  }

  /**
   * @returns the `request` property value as a Reference array
   */
  public getRequest(): Reference[] {
    return this.request ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `request` property.
   *
   * @decorator `@ReferenceTargets('ClaimResponse.addItem.request', ['DeviceRequest','MedicationRequest','NutritionOrder','ServiceRequest','SupplyRequest','VisionPrescription',])`
   *
   * @param value - the `request` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.addItem.request', [
    'DeviceRequest',
  
    'MedicationRequest',
  
    'NutritionOrder',
  
    'ServiceRequest',
  
    'SupplyRequest',
  
    'VisionPrescription',
  ])
  public setRequest(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.request = value;
    } else {
      this.request = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `request` array property.
   *
   * @decorator `@ReferenceTargets('ClaimResponse.addItem.request', ['DeviceRequest','MedicationRequest','NutritionOrder','ServiceRequest','SupplyRequest','VisionPrescription',])`
   *
   * @param value - the `request` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.addItem.request', [
    'DeviceRequest',
  
    'MedicationRequest',
  
    'NutritionOrder',
  
    'ServiceRequest',
  
    'SupplyRequest',
  
    'VisionPrescription',
  ])
  public addRequest(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRequest();
      this.request?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `request` property exists and has a value; `false` otherwise
   */
  public hasRequest(): boolean {
    return isDefinedList<Reference>(this.request) && this.request.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `request` property
   */
  private initRequest(): void {
    if (!this.hasRequest()) {
      this.request = [] as Reference[];
    }
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
      const optErrMsg = `Invalid ClaimResponse.addItem.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.modifier; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.programCode; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.programCode; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ChoiceDataTypes('ClaimResponse.addItem.serviced[x]')`
   *
   * @param value - the `serviced` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ClaimResponse.addItem.serviced[x]')
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
        `DataType mismatch for ClaimResponse.addItem.serviced[x]: Expected DateType but encountered ${this.serviced.fhirType()}`,
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
        `DataType mismatch for ClaimResponse.addItem.serviced[x]: Expected Period but encountered ${this.serviced.fhirType()}`,
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
   * @decorator `@ChoiceDataTypes('ClaimResponse.addItem.location[x]')`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ClaimResponse.addItem.location[x]')
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
        `DataType mismatch for ClaimResponse.addItem.location[x]: Expected CodeableConcept but encountered ${this.location.fhirType()}`,
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
        `DataType mismatch for ClaimResponse.addItem.location[x]: Expected Address but encountered ${this.location.fhirType()}`,
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
        `DataType mismatch for ClaimResponse.addItem.location[x]: Expected Reference but encountered ${this.location.fhirType()}`,
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
      const optErrMsg = `Invalid ClaimResponse.addItem.quantity; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.unitPrice; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.factor; Provided element is not an instance of DecimalType.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.factor (${String(value)})`;
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
   * @returns the `tax` property value as a Money object if defined; else an empty Money object
   */
  public getTax(): Money {
    return this.tax ?? new Money();
  }

  /**
   * Assigns the provided Tax object value to the `tax` property.
   *
   * @param value - the `tax` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTax(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.tax; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.tax = value;
    } else {
      this.tax = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `tax` property exists and has a value; `false` otherwise
   */
  public hasTax(): boolean {
    return isDefined<Money>(this.tax) && !this.tax.isEmpty();
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
      const optErrMsg = `Invalid ClaimResponse.addItem.net; Provided element is not an instance of Money.`;
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
   * @returns the `bodySite` property value as a ClaimResponseAddItemBodySiteComponent array
   */
  public getBodySite(): ClaimResponseAddItemBodySiteComponent[] {
    return this.bodySite ?? ([] as ClaimResponseAddItemBodySiteComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseAddItemBodySiteComponent array value to the `bodySite` property.
   *
   * @param value - the `bodySite` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBodySite(value: ClaimResponseAddItemBodySiteComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseAddItemBodySiteComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.bodySite; Provided value array has an element that is not an instance of ClaimResponseAddItemBodySiteComponent.`;
      assertFhirTypeList<ClaimResponseAddItemBodySiteComponent>(value, ClaimResponseAddItemBodySiteComponent, optErrMsg);
      this.bodySite = value;
    } else {
      this.bodySite = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseAddItemBodySiteComponent value to the `bodySite` array property.
   *
   * @param value - the `bodySite` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBodySite(value: ClaimResponseAddItemBodySiteComponent | undefined): this {
    if (isDefined<ClaimResponseAddItemBodySiteComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.bodySite; Provided element is not an instance of ClaimResponseAddItemBodySiteComponent.`;
      assertFhirType<ClaimResponseAddItemBodySiteComponent>(value, ClaimResponseAddItemBodySiteComponent, optErrMsg);
      this.initBodySite();
      this.bodySite?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `bodySite` property exists and has a value; `false` otherwise
   */
  public hasBodySite(): boolean {
    return isDefinedList<ClaimResponseAddItemBodySiteComponent>(this.bodySite) && this.bodySite.some((item: ClaimResponseAddItemBodySiteComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `bodySite` property
   */
  private initBodySite(): void {
    if(!this.hasBodySite()) {
      this.bodySite = [] as ClaimResponseAddItemBodySiteComponent[];
    }
  }

  /**
   * @returns the `noteNumber` property value as a PositiveIntType array
   */
  public getNoteNumberElement(): PositiveIntType[] {
    return this.noteNumber ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `noteNumber` property.
   *
   * @param element - the `noteNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNoteNumberElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.noteNumber; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.noteNumber = element;
    } else {
      this.noteNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `noteNumber` array property.
   *
   * @param element - the `noteNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNoteNumberElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.noteNumber; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initNoteNumber();
      this.noteNumber?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `noteNumber` property exists and has a value; `false` otherwise
   */
  public hasNoteNumberElement(): boolean {
    return isDefinedList<PositiveIntType>(this.noteNumber) && this.noteNumber.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `noteNumber` property value as a fhirPositiveInt array
   */
  public getNoteNumber(): fhirPositiveInt[] {
    this.initNoteNumber();
    const noteNumberValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.noteNumber!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        noteNumberValues.push(value);
      }
    }
    return noteNumberValues;
  }

  /**
   * Assigns the provided primitive value array to the `noteNumber` property.
   *
   * @param value - the `noteNumber` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNoteNumber(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const noteNumberElements = [] as PositiveIntType[];
      for (const noteNumberValue of value) {
        const optErrMsg = `Invalid ClaimResponse.addItem.noteNumber array item (${String(noteNumberValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(noteNumberValue, fhirPositiveIntSchema, optErrMsg));
        noteNumberElements.push(element);
      }
      this.noteNumber = noteNumberElements;
    } else {
      this.noteNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `noteNumber` array property.
   *
   * @param value - the `noteNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNoteNumber(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.noteNumber array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initNoteNumber();
      this.addNoteNumberElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `noteNumber` property exists and has a value; `false` otherwise
   */
  public hasNoteNumber(): boolean {
    return this.hasNoteNumberElement();
  }

  /**
   * Initialize the `noteNumber` property
   */
  private initNoteNumber(): void {
    if (!this.hasNoteNumber()) {
      this.noteNumber = [] as PositiveIntType[];
    }
  }

  /**
   * @returns the `reviewOutcome` property value as a ClaimResponseItemReviewOutcomeComponent object if defined; else an empty ClaimResponseItemReviewOutcomeComponent object
   */
  public getReviewOutcome(): ClaimResponseItemReviewOutcomeComponent {
    return this.reviewOutcome ?? new ClaimResponseItemReviewOutcomeComponent();
  }

  /**
   * Assigns the provided ReviewOutcome object value to the `reviewOutcome` property.
   *
   * @param value - the `reviewOutcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReviewOutcome(value: ClaimResponseItemReviewOutcomeComponent | undefined): this {
    if (isDefined<ClaimResponseItemReviewOutcomeComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.reviewOutcome; Provided element is not an instance of ClaimResponseItemReviewOutcomeComponent.`;
      assertFhirType<ClaimResponseItemReviewOutcomeComponent>(value, ClaimResponseItemReviewOutcomeComponent, optErrMsg);
      this.reviewOutcome = value;
    } else {
      this.reviewOutcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reviewOutcome` property exists and has a value; `false` otherwise
   */
  public hasReviewOutcome(): boolean {
    return isDefined<ClaimResponseItemReviewOutcomeComponent>(this.reviewOutcome) && !this.reviewOutcome.isEmpty();
  }

  /**
   * @returns the `adjudication` property value as a ClaimResponseItemAdjudicationComponent array
   */
  public getAdjudication(): ClaimResponseItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ClaimResponseItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ClaimResponseItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.adjudication; Provided value array has an element that is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirTypeList<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ClaimResponseItemAdjudicationComponent | undefined): this {
    if (isDefined<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.adjudication; Provided element is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirType<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ClaimResponseItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ClaimResponseItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ClaimResponseItemAdjudicationComponent[];
    }
  }

  /**
   * @returns the `detail` property value as a ClaimResponseAddItemDetailComponent array
   */
  public getDetail(): ClaimResponseAddItemDetailComponent[] {
    return this.detail ?? ([] as ClaimResponseAddItemDetailComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseAddItemDetailComponent array value to the `detail` property.
   *
   * @param value - the `detail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDetail(value: ClaimResponseAddItemDetailComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseAddItemDetailComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail; Provided value array has an element that is not an instance of ClaimResponseAddItemDetailComponent.`;
      assertFhirTypeList<ClaimResponseAddItemDetailComponent>(value, ClaimResponseAddItemDetailComponent, optErrMsg);
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseAddItemDetailComponent value to the `detail` array property.
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDetail(value: ClaimResponseAddItemDetailComponent | undefined): this {
    if (isDefined<ClaimResponseAddItemDetailComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail; Provided element is not an instance of ClaimResponseAddItemDetailComponent.`;
      assertFhirType<ClaimResponseAddItemDetailComponent>(value, ClaimResponseAddItemDetailComponent, optErrMsg);
      this.initDetail();
      this.detail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefinedList<ClaimResponseAddItemDetailComponent>(this.detail) && this.detail.some((item: ClaimResponseAddItemDetailComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `detail` property
   */
  private initDetail(): void {
    if(!this.hasDetail()) {
      this.detail = [] as ClaimResponseAddItemDetailComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.addItem';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.itemSequence,
      this.detailSequence,
      this.subdetailSequence,
      this.traceNumber,
      this.provider,
      this.revenue,
      this.productOrService,
      this.productOrServiceEnd,
      this.request,
      this.modifier,
      this.programCode,
      this.serviced,
      this.location,
      this.quantity,
      this.unitPrice,
      this.factor,
      this.tax,
      this.net,
      this.bodySite,
      this.noteNumber,
      this.reviewOutcome,
      this.adjudication,
      this.detail,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseAddItemComponent {
    const dest = new ClaimResponseAddItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseAddItemComponent): void {
    super.copyValues(dest);
    const itemSequenceList = copyListValues<PositiveIntType>(this.itemSequence);
    dest.itemSequence = itemSequenceList.length === 0 ? undefined : itemSequenceList;
    const detailSequenceList = copyListValues<PositiveIntType>(this.detailSequence);
    dest.detailSequence = detailSequenceList.length === 0 ? undefined : detailSequenceList;
    const subdetailSequenceList = copyListValues<PositiveIntType>(this.subdetailSequence);
    dest.subdetailSequence = subdetailSequenceList.length === 0 ? undefined : subdetailSequenceList;
    const traceNumberList = copyListValues<Identifier>(this.traceNumber);
    dest.traceNumber = traceNumberList.length === 0 ? undefined : traceNumberList;
    const providerList = copyListValues<Reference>(this.provider);
    dest.provider = providerList.length === 0 ? undefined : providerList;
    dest.revenue = this.revenue?.copy();
    dest.productOrService = this.productOrService?.copy();
    dest.productOrServiceEnd = this.productOrServiceEnd?.copy();
    const requestList = copyListValues<Reference>(this.request);
    dest.request = requestList.length === 0 ? undefined : requestList;
    const modifierList = copyListValues<CodeableConcept>(this.modifier);
    dest.modifier = modifierList.length === 0 ? undefined : modifierList;
    const programCodeList = copyListValues<CodeableConcept>(this.programCode);
    dest.programCode = programCodeList.length === 0 ? undefined : programCodeList;
    dest.serviced = this.serviced?.copy() as IDataType;
    dest.location = this.location?.copy() as IDataType;
    dest.quantity = this.quantity?.copy();
    dest.unitPrice = this.unitPrice?.copy();
    dest.factor = this.factor?.copy();
    dest.tax = this.tax?.copy();
    dest.net = this.net?.copy();
    const bodySiteList = copyListValues<ClaimResponseAddItemBodySiteComponent>(this.bodySite);
    dest.bodySite = bodySiteList.length === 0 ? undefined : bodySiteList;
    const noteNumberList = copyListValues<PositiveIntType>(this.noteNumber);
    dest.noteNumber = noteNumberList.length === 0 ? undefined : noteNumberList;
    dest.reviewOutcome = this.reviewOutcome?.copy();
    const adjudicationList = copyListValues<ClaimResponseItemAdjudicationComponent>(this.adjudication);
    dest.adjudication = adjudicationList.length === 0 ? undefined : adjudicationList;
    const detailList = copyListValues<ClaimResponseAddItemDetailComponent>(this.detail);
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

    if (this.hasItemSequence()) {
      setFhirPrimitiveListJson(this.getItemSequenceElement(), 'itemSequence', jsonObj);
    }

    if (this.hasDetailSequence()) {
      setFhirPrimitiveListJson(this.getDetailSequenceElement(), 'detailSequence', jsonObj);
    }

    if (this.hasSubdetailSequence()) {
      setFhirPrimitiveListJson(this.getSubdetailSequenceElement(), 'subdetailSequence', jsonObj);
    }

    if (this.hasTraceNumber()) {
      setFhirComplexListJson(this.getTraceNumber(), 'traceNumber', jsonObj);
    }

    if (this.hasProvider()) {
      setFhirComplexListJson(this.getProvider(), 'provider', jsonObj);
    }

    if (this.hasRevenue()) {
      setFhirComplexJson(this.getRevenue(), 'revenue', jsonObj);
    }

    if (this.hasProductOrService()) {
      setFhirComplexJson(this.getProductOrService(), 'productOrService', jsonObj);
    }

    if (this.hasProductOrServiceEnd()) {
      setFhirComplexJson(this.getProductOrServiceEnd(), 'productOrServiceEnd', jsonObj);
    }

    if (this.hasRequest()) {
      setFhirComplexListJson(this.getRequest(), 'request', jsonObj);
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

    if (this.hasTax()) {
      setFhirComplexJson(this.getTax(), 'tax', jsonObj);
    }

    if (this.hasNet()) {
      setFhirComplexJson(this.getNet(), 'net', jsonObj);
    }

    if (this.hasBodySite()) {
      setFhirBackboneElementListJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasNoteNumber()) {
      setFhirPrimitiveListJson(this.getNoteNumberElement(), 'noteNumber', jsonObj);
    }

    if (this.hasReviewOutcome()) {
      setFhirBackboneElementJson(this.getReviewOutcome(), 'reviewOutcome', jsonObj);
    }

    if (this.hasAdjudication()) {
      setFhirBackboneElementListJson(this.getAdjudication(), 'adjudication', jsonObj);
    }

    if (this.hasDetail()) {
      setFhirBackboneElementListJson(this.getDetail(), 'detail', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ClaimResponseAddItemBodySiteComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Anatomical location
 * - **Definition:** Physical location where the service is performed or applies.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseAddItemBodySiteComponent extends BackboneElement implements IBackboneElement {
  constructor(site: CodeableReference[] | null = null) {
    super();

    this.site = null;
    if (isDefinedList<CodeableReference>(site)) {
      this.setSite(site);
    }
  }

  /**
   * Parse the provided `ClaimResponseAddItemBodySiteComponent` JSON to instantiate the ClaimResponseAddItemBodySiteComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseAddItemBodySiteComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseAddItemBodySiteComponent
   * @returns ClaimResponseAddItemBodySiteComponent data model or undefined for `ClaimResponseAddItemBodySiteComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseAddItemBodySiteComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseAddItemBodySiteComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseAddItemBodySiteComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'site';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addSite(datatype);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ClaimResponse.addItem.bodySite.site Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Location
   * - **Definition:** Physical service site on the patient (limb, tooth, etc.).
   * - **Comment:** For example: Providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
   * - **Requirements:** Allows insurer to validate specific procedures.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/BodyStructure',
   *     ]
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private site: CodeableReference[] | null;

  /**
   * ClaimResponse.addItem.bodySite.subSite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Sub-location
   * - **Definition:** A region or surface of the bodySite, e.g. limb region or tooth surface(s).
   * - **Requirements:** Allows insurer to validate specific procedures.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subSite?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `site` property value as a CodeableReference array
   */
  public getSite(): CodeableReference[] {
    return this.site ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `site` property.
   *
   * @param value - the `site` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSite(value: CodeableReference[]): this {
    assertIsDefinedList<CodeableReference>(value, `ClaimResponse.addItem.bodySite.site is required`);
    const optErrMsg = `Invalid ClaimResponse.addItem.bodySite.site; Provided value array has an element that is not an instance of CodeableReference.`;
    assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
    this.site = value;
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `site` array property.
   *
   * @param value - the `site` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSite(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.bodySite.site; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initSite();
      this.site?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `site` property exists and has a value; `false` otherwise
   */
  public hasSite(): boolean {
    return isDefinedList<CodeableReference>(this.site) && this.site.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `site` property
   */
  private initSite(): void {
    if(!this.hasSite()) {
      this.site = [] as CodeableReference[];
    }
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
      const optErrMsg = `Invalid ClaimResponse.addItem.bodySite.subSite; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.bodySite.subSite; Provided element is not an instance of CodeableConcept.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.addItem.bodySite';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.site,
      this.subSite,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseAddItemBodySiteComponent {
    const dest = new ClaimResponseAddItemBodySiteComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseAddItemBodySiteComponent): void {
    super.copyValues(dest);
    const siteList = copyListValues<CodeableReference>(this.site);
    dest.site = siteList.length === 0 ? null : siteList;
    const subSiteList = copyListValues<CodeableConcept>(this.subSite);
    dest.subSite = subSiteList.length === 0 ? undefined : subSiteList;
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

    if (this.hasSite()) {
      setFhirComplexListJson(this.getSite(), 'site', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.addItem.bodySite.site`);
    }

    if (this.hasSubSite()) {
      setFhirComplexListJson(this.getSubSite(), 'subSite', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimResponseAddItemDetailComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Insurer added line details
 * - **Definition:** The second-tier service adjudications for payor added services.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseAddItemDetailComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ClaimResponseAddItemDetailComponent` JSON to instantiate the ClaimResponseAddItemDetailComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseAddItemDetailComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseAddItemDetailComponent
   * @returns ClaimResponseAddItemDetailComponent data model or undefined for `ClaimResponseAddItemDetailComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseAddItemDetailComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseAddItemDetailComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseAddItemDetailComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'traceNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTraceNumber(datatype);
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

    fieldName = 'productOrService';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProductOrService(datatype);
    }

    fieldName = 'productOrServiceEnd';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProductOrServiceEnd(datatype);
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

    fieldName = 'tax';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTax(datatype);
    }

    fieldName = 'net';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNet(datatype);
    }

    fieldName = 'noteNumber';
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
          instance.addNoteNumberElement(datatype);
        }
      });
    }

    fieldName = 'reviewOutcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClaimResponseItemReviewOutcomeComponent | undefined = ClaimResponseItemReviewOutcomeComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReviewOutcome(component);
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseItemAdjudicationComponent | undefined = ClaimResponseItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAdjudication(component);
        }
      });
    }

    fieldName = 'subDetail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseAddItemDetailSubDetailComponent | undefined = ClaimResponseAddItemDetailSubDetailComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSubDetail(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ClaimResponse.addItem.detail.traceNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number for tracking
   * - **Definition:** Trace number for tracking purposes. May be defined at the jurisdiction level or between trading partners.
   * - **Requirements:** Allows partners to uniquely identify components for tracking.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private traceNumber?: Identifier[] | undefined;

  /**
   * ClaimResponse.addItem.detail.revenue Element
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
   * ClaimResponse.addItem.detail.productOrService Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Billing, service, product, or drug code
   * - **Definition:** When the value is a group code then this item collects a set of related item details, otherwise this contains the product, service, drug or other billing code for the item. This element may be the start of a range of .productOrService codes used in conjunction with .productOrServiceEnd or it may be a solo element where .productOrServiceEnd is not used.
   * - **Comment:** If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. \'glasses\' or \'compound\'.
   * - **Requirements:** Necessary to state what was provided or done.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productOrService?: CodeableConcept | undefined;

  /**
   * ClaimResponse.addItem.detail.productOrServiceEnd Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** End of a range of codes
   * - **Definition:** This contains the end of a range of product, service, drug or other billing codes for the item. This element is not used when the .productOrService is a group code. This value may only be present when a .productOfService code has been provided to convey the start of the range. Typically this value may be used only with preauthorizations and not with claims.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productOrServiceEnd?: CodeableConcept | undefined;

  /**
   * ClaimResponse.addItem.detail.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Service/Product billing modifiers
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
   * ClaimResponse.addItem.detail.quantity Element
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
   * ClaimResponse.addItem.detail.unitPrice Element
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
   * ClaimResponse.addItem.detail.factor Element
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
   * ClaimResponse.addItem.detail.tax Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total tax
   * - **Definition:** The total of taxes applicable for this product or service.
   * - **Requirements:** Required when taxes are not embedded in the unit price or provided as a separate service.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private tax?: Money | undefined;

  /**
   * ClaimResponse.addItem.detail.net Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total item cost
   * - **Definition:** The total amount claimed for the group (if a grouper) or the addItem.detail. Net = unit price * quantity * factor.
   * - **Comment:** For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
   * - **Requirements:** Provides the total amount claimed  for the group (if a grouper) or the line item.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private net?: Money | undefined;

  /**
   * ClaimResponse.addItem.detail.noteNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable note numbers
   * - **Definition:** The numbers associated with notes below which apply to the adjudication of this item.
   * - **Requirements:** Provides a condensed manner for associating human readable descriptive explanations for adjudications on the line item.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private noteNumber?: PositiveIntType[] | undefined;

  /**
   * ClaimResponse.addItem.detail.reviewOutcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Added items detail level adjudication results
   * - **Definition:** The high-level results of the adjudication if adjudication has been performed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reviewOutcome?: ClaimResponseItemReviewOutcomeComponent | undefined;

  /**
   * ClaimResponse.addItem.detail.adjudication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Added items detail adjudication
   * - **Definition:** The adjudication results.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private adjudication?: ClaimResponseItemAdjudicationComponent[] | undefined;

  /**
   * ClaimResponse.addItem.detail.subDetail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Insurer added line items
   * - **Definition:** The third-tier service adjudications for payor added services.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subDetail?: ClaimResponseAddItemDetailSubDetailComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `traceNumber` property value as a Identifier array
   */
  public getTraceNumber(): Identifier[] {
    return this.traceNumber ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `traceNumber` property.
   *
   * @param value - the `traceNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTraceNumber(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.traceNumber; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.traceNumber = value;
    } else {
      this.traceNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `traceNumber` array property.
   *
   * @param value - the `traceNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTraceNumber(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.traceNumber; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initTraceNumber();
      this.traceNumber?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `traceNumber` property exists and has a value; `false` otherwise
   */
  public hasTraceNumber(): boolean {
    return isDefinedList<Identifier>(this.traceNumber) && this.traceNumber.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `traceNumber` property
   */
  private initTraceNumber(): void {
    if(!this.hasTraceNumber()) {
      this.traceNumber = [] as Identifier[];
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.revenue; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.productOrService; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `productOrServiceEnd` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getProductOrServiceEnd(): CodeableConcept {
    return this.productOrServiceEnd ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ProductOrServiceEnd object value to the `productOrServiceEnd` property.
   *
   * @param value - the `productOrServiceEnd` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductOrServiceEnd(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.productOrServiceEnd; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productOrServiceEnd = value;
    } else {
      this.productOrServiceEnd = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productOrServiceEnd` property exists and has a value; `false` otherwise
   */
  public hasProductOrServiceEnd(): boolean {
    return isDefined<CodeableConcept>(this.productOrServiceEnd) && !this.productOrServiceEnd.isEmpty();
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.modifier; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.quantity; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.unitPrice; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.factor; Provided element is not an instance of DecimalType.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.factor (${String(value)})`;
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
   * @returns the `tax` property value as a Money object if defined; else an empty Money object
   */
  public getTax(): Money {
    return this.tax ?? new Money();
  }

  /**
   * Assigns the provided Tax object value to the `tax` property.
   *
   * @param value - the `tax` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTax(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.tax; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.tax = value;
    } else {
      this.tax = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `tax` property exists and has a value; `false` otherwise
   */
  public hasTax(): boolean {
    return isDefined<Money>(this.tax) && !this.tax.isEmpty();
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.net; Provided element is not an instance of Money.`;
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
   * @returns the `noteNumber` property value as a PositiveIntType array
   */
  public getNoteNumberElement(): PositiveIntType[] {
    return this.noteNumber ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `noteNumber` property.
   *
   * @param element - the `noteNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNoteNumberElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.noteNumber; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.noteNumber = element;
    } else {
      this.noteNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `noteNumber` array property.
   *
   * @param element - the `noteNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNoteNumberElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.noteNumber; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initNoteNumber();
      this.noteNumber?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `noteNumber` property exists and has a value; `false` otherwise
   */
  public hasNoteNumberElement(): boolean {
    return isDefinedList<PositiveIntType>(this.noteNumber) && this.noteNumber.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `noteNumber` property value as a fhirPositiveInt array
   */
  public getNoteNumber(): fhirPositiveInt[] {
    this.initNoteNumber();
    const noteNumberValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.noteNumber!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        noteNumberValues.push(value);
      }
    }
    return noteNumberValues;
  }

  /**
   * Assigns the provided primitive value array to the `noteNumber` property.
   *
   * @param value - the `noteNumber` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNoteNumber(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const noteNumberElements = [] as PositiveIntType[];
      for (const noteNumberValue of value) {
        const optErrMsg = `Invalid ClaimResponse.addItem.detail.noteNumber array item (${String(noteNumberValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(noteNumberValue, fhirPositiveIntSchema, optErrMsg));
        noteNumberElements.push(element);
      }
      this.noteNumber = noteNumberElements;
    } else {
      this.noteNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `noteNumber` array property.
   *
   * @param value - the `noteNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNoteNumber(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.noteNumber array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initNoteNumber();
      this.addNoteNumberElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `noteNumber` property exists and has a value; `false` otherwise
   */
  public hasNoteNumber(): boolean {
    return this.hasNoteNumberElement();
  }

  /**
   * Initialize the `noteNumber` property
   */
  private initNoteNumber(): void {
    if (!this.hasNoteNumber()) {
      this.noteNumber = [] as PositiveIntType[];
    }
  }

  /**
   * @returns the `reviewOutcome` property value as a ClaimResponseItemReviewOutcomeComponent object if defined; else an empty ClaimResponseItemReviewOutcomeComponent object
   */
  public getReviewOutcome(): ClaimResponseItemReviewOutcomeComponent {
    return this.reviewOutcome ?? new ClaimResponseItemReviewOutcomeComponent();
  }

  /**
   * Assigns the provided ReviewOutcome object value to the `reviewOutcome` property.
   *
   * @param value - the `reviewOutcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReviewOutcome(value: ClaimResponseItemReviewOutcomeComponent | undefined): this {
    if (isDefined<ClaimResponseItemReviewOutcomeComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.reviewOutcome; Provided element is not an instance of ClaimResponseItemReviewOutcomeComponent.`;
      assertFhirType<ClaimResponseItemReviewOutcomeComponent>(value, ClaimResponseItemReviewOutcomeComponent, optErrMsg);
      this.reviewOutcome = value;
    } else {
      this.reviewOutcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reviewOutcome` property exists and has a value; `false` otherwise
   */
  public hasReviewOutcome(): boolean {
    return isDefined<ClaimResponseItemReviewOutcomeComponent>(this.reviewOutcome) && !this.reviewOutcome.isEmpty();
  }

  /**
   * @returns the `adjudication` property value as a ClaimResponseItemAdjudicationComponent array
   */
  public getAdjudication(): ClaimResponseItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ClaimResponseItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ClaimResponseItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.adjudication; Provided value array has an element that is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirTypeList<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ClaimResponseItemAdjudicationComponent | undefined): this {
    if (isDefined<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.adjudication; Provided element is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirType<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ClaimResponseItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ClaimResponseItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ClaimResponseItemAdjudicationComponent[];
    }
  }

  /**
   * @returns the `subDetail` property value as a ClaimResponseAddItemDetailSubDetailComponent array
   */
  public getSubDetail(): ClaimResponseAddItemDetailSubDetailComponent[] {
    return this.subDetail ?? ([] as ClaimResponseAddItemDetailSubDetailComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseAddItemDetailSubDetailComponent array value to the `subDetail` property.
   *
   * @param value - the `subDetail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubDetail(value: ClaimResponseAddItemDetailSubDetailComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseAddItemDetailSubDetailComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail; Provided value array has an element that is not an instance of ClaimResponseAddItemDetailSubDetailComponent.`;
      assertFhirTypeList<ClaimResponseAddItemDetailSubDetailComponent>(value, ClaimResponseAddItemDetailSubDetailComponent, optErrMsg);
      this.subDetail = value;
    } else {
      this.subDetail = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseAddItemDetailSubDetailComponent value to the `subDetail` array property.
   *
   * @param value - the `subDetail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubDetail(value: ClaimResponseAddItemDetailSubDetailComponent | undefined): this {
    if (isDefined<ClaimResponseAddItemDetailSubDetailComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail; Provided element is not an instance of ClaimResponseAddItemDetailSubDetailComponent.`;
      assertFhirType<ClaimResponseAddItemDetailSubDetailComponent>(value, ClaimResponseAddItemDetailSubDetailComponent, optErrMsg);
      this.initSubDetail();
      this.subDetail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subDetail` property exists and has a value; `false` otherwise
   */
  public hasSubDetail(): boolean {
    return isDefinedList<ClaimResponseAddItemDetailSubDetailComponent>(this.subDetail) && this.subDetail.some((item: ClaimResponseAddItemDetailSubDetailComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `subDetail` property
   */
  private initSubDetail(): void {
    if(!this.hasSubDetail()) {
      this.subDetail = [] as ClaimResponseAddItemDetailSubDetailComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.addItem.detail';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.traceNumber,
      this.revenue,
      this.productOrService,
      this.productOrServiceEnd,
      this.modifier,
      this.quantity,
      this.unitPrice,
      this.factor,
      this.tax,
      this.net,
      this.noteNumber,
      this.reviewOutcome,
      this.adjudication,
      this.subDetail,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseAddItemDetailComponent {
    const dest = new ClaimResponseAddItemDetailComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseAddItemDetailComponent): void {
    super.copyValues(dest);
    const traceNumberList = copyListValues<Identifier>(this.traceNumber);
    dest.traceNumber = traceNumberList.length === 0 ? undefined : traceNumberList;
    dest.revenue = this.revenue?.copy();
    dest.productOrService = this.productOrService?.copy();
    dest.productOrServiceEnd = this.productOrServiceEnd?.copy();
    const modifierList = copyListValues<CodeableConcept>(this.modifier);
    dest.modifier = modifierList.length === 0 ? undefined : modifierList;
    dest.quantity = this.quantity?.copy();
    dest.unitPrice = this.unitPrice?.copy();
    dest.factor = this.factor?.copy();
    dest.tax = this.tax?.copy();
    dest.net = this.net?.copy();
    const noteNumberList = copyListValues<PositiveIntType>(this.noteNumber);
    dest.noteNumber = noteNumberList.length === 0 ? undefined : noteNumberList;
    dest.reviewOutcome = this.reviewOutcome?.copy();
    const adjudicationList = copyListValues<ClaimResponseItemAdjudicationComponent>(this.adjudication);
    dest.adjudication = adjudicationList.length === 0 ? undefined : adjudicationList;
    const subDetailList = copyListValues<ClaimResponseAddItemDetailSubDetailComponent>(this.subDetail);
    dest.subDetail = subDetailList.length === 0 ? undefined : subDetailList;
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

    if (this.hasTraceNumber()) {
      setFhirComplexListJson(this.getTraceNumber(), 'traceNumber', jsonObj);
    }

    if (this.hasRevenue()) {
      setFhirComplexJson(this.getRevenue(), 'revenue', jsonObj);
    }

    if (this.hasProductOrService()) {
      setFhirComplexJson(this.getProductOrService(), 'productOrService', jsonObj);
    }

    if (this.hasProductOrServiceEnd()) {
      setFhirComplexJson(this.getProductOrServiceEnd(), 'productOrServiceEnd', jsonObj);
    }

    if (this.hasModifier()) {
      setFhirComplexListJson(this.getModifier(), 'modifier', jsonObj);
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

    if (this.hasTax()) {
      setFhirComplexJson(this.getTax(), 'tax', jsonObj);
    }

    if (this.hasNet()) {
      setFhirComplexJson(this.getNet(), 'net', jsonObj);
    }

    if (this.hasNoteNumber()) {
      setFhirPrimitiveListJson(this.getNoteNumberElement(), 'noteNumber', jsonObj);
    }

    if (this.hasReviewOutcome()) {
      setFhirBackboneElementJson(this.getReviewOutcome(), 'reviewOutcome', jsonObj);
    }

    if (this.hasAdjudication()) {
      setFhirBackboneElementListJson(this.getAdjudication(), 'adjudication', jsonObj);
    }

    if (this.hasSubDetail()) {
      setFhirBackboneElementListJson(this.getSubDetail(), 'subDetail', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ClaimResponseAddItemDetailSubDetailComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Insurer added line items
 * - **Definition:** The third-tier service adjudications for payor added services.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseAddItemDetailSubDetailComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ClaimResponseAddItemDetailSubDetailComponent` JSON to instantiate the ClaimResponseAddItemDetailSubDetailComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseAddItemDetailSubDetailComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseAddItemDetailSubDetailComponent
   * @returns ClaimResponseAddItemDetailSubDetailComponent data model or undefined for `ClaimResponseAddItemDetailSubDetailComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseAddItemDetailSubDetailComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseAddItemDetailSubDetailComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseAddItemDetailSubDetailComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'traceNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTraceNumber(datatype);
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

    fieldName = 'productOrService';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProductOrService(datatype);
    }

    fieldName = 'productOrServiceEnd';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProductOrServiceEnd(datatype);
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

    fieldName = 'tax';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTax(datatype);
    }

    fieldName = 'net';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNet(datatype);
    }

    fieldName = 'noteNumber';
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
          instance.addNoteNumberElement(datatype);
        }
      });
    }

    fieldName = 'reviewOutcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ClaimResponseItemReviewOutcomeComponent | undefined = ClaimResponseItemReviewOutcomeComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReviewOutcome(component);
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClaimResponseItemAdjudicationComponent | undefined = ClaimResponseItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAdjudication(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ClaimResponse.addItem.detail.subDetail.traceNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number for tracking
   * - **Definition:** Trace number for tracking purposes. May be defined at the jurisdiction level or between trading partners.
   * - **Requirements:** Allows partners to uniquely identify components for tracking.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private traceNumber?: Identifier[] | undefined;

  /**
   * ClaimResponse.addItem.detail.subDetail.revenue Element
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
   * ClaimResponse.addItem.detail.subDetail.productOrService Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Billing, service, product, or drug code
   * - **Definition:** When the value is a group code then this item collects a set of related item details, otherwise this contains the product, service, drug or other billing code for the item. This element may be the start of a range of .productOrService codes used in conjunction with .productOrServiceEnd or it may be a solo element where .productOrServiceEnd is not used.
   * - **Comment:** If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. \'glasses\' or \'compound\'.
   * - **Requirements:** Necessary to state what was provided or done.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productOrService?: CodeableConcept | undefined;

  /**
   * ClaimResponse.addItem.detail.subDetail.productOrServiceEnd Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** End of a range of codes
   * - **Definition:** This contains the end of a range of product, service, drug or other billing codes for the item. This element is not used when the .productOrService is a group code. This value may only be present when a .productOfService code has been provided to convey the start of the range. Typically this value may be used only with preauthorizations and not with claims.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productOrServiceEnd?: CodeableConcept | undefined;

  /**
   * ClaimResponse.addItem.detail.subDetail.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Service/Product billing modifiers
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
   * ClaimResponse.addItem.detail.subDetail.quantity Element
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
   * ClaimResponse.addItem.detail.subDetail.unitPrice Element
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
   * ClaimResponse.addItem.detail.subDetail.factor Element
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
   * ClaimResponse.addItem.detail.subDetail.tax Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total tax
   * - **Definition:** The total of taxes applicable for this product or service.
   * - **Requirements:** Required when taxes are not embedded in the unit price or provided as a separate service.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private tax?: Money | undefined;

  /**
   * ClaimResponse.addItem.detail.subDetail.net Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total item cost
   * - **Definition:** The total amount claimed for the addItem.detail.subDetail. Net = unit price * quantity * factor.
   * - **Comment:** For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
   * - **Requirements:** Provides the total amount claimed  for the group (if a grouper) or the line item.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private net?: Money | undefined;

  /**
   * ClaimResponse.addItem.detail.subDetail.noteNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable note numbers
   * - **Definition:** The numbers associated with notes below which apply to the adjudication of this item.
   * - **Requirements:** Provides a condensed manner for associating human readable descriptive explanations for adjudications on the line item.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private noteNumber?: PositiveIntType[] | undefined;

  /**
   * ClaimResponse.addItem.detail.subDetail.reviewOutcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Added items subdetail level adjudication results
   * - **Definition:** The high-level results of the adjudication if adjudication has been performed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reviewOutcome?: ClaimResponseItemReviewOutcomeComponent | undefined;

  /**
   * ClaimResponse.addItem.detail.subDetail.adjudication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Added items subdetail adjudication
   * - **Definition:** The adjudication results.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private adjudication?: ClaimResponseItemAdjudicationComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `traceNumber` property value as a Identifier array
   */
  public getTraceNumber(): Identifier[] {
    return this.traceNumber ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `traceNumber` property.
   *
   * @param value - the `traceNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTraceNumber(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.traceNumber; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.traceNumber = value;
    } else {
      this.traceNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `traceNumber` array property.
   *
   * @param value - the `traceNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTraceNumber(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.traceNumber; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initTraceNumber();
      this.traceNumber?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `traceNumber` property exists and has a value; `false` otherwise
   */
  public hasTraceNumber(): boolean {
    return isDefinedList<Identifier>(this.traceNumber) && this.traceNumber.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `traceNumber` property
   */
  private initTraceNumber(): void {
    if(!this.hasTraceNumber()) {
      this.traceNumber = [] as Identifier[];
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.revenue; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.productOrService; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `productOrServiceEnd` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getProductOrServiceEnd(): CodeableConcept {
    return this.productOrServiceEnd ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ProductOrServiceEnd object value to the `productOrServiceEnd` property.
   *
   * @param value - the `productOrServiceEnd` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductOrServiceEnd(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.productOrServiceEnd; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productOrServiceEnd = value;
    } else {
      this.productOrServiceEnd = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productOrServiceEnd` property exists and has a value; `false` otherwise
   */
  public hasProductOrServiceEnd(): boolean {
    return isDefined<CodeableConcept>(this.productOrServiceEnd) && !this.productOrServiceEnd.isEmpty();
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.modifier; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.quantity; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.unitPrice; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.factor; Provided element is not an instance of DecimalType.`;
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.factor (${String(value)})`;
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
   * @returns the `tax` property value as a Money object if defined; else an empty Money object
   */
  public getTax(): Money {
    return this.tax ?? new Money();
  }

  /**
   * Assigns the provided Tax object value to the `tax` property.
   *
   * @param value - the `tax` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTax(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.tax; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.tax = value;
    } else {
      this.tax = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `tax` property exists and has a value; `false` otherwise
   */
  public hasTax(): boolean {
    return isDefined<Money>(this.tax) && !this.tax.isEmpty();
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
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.net; Provided element is not an instance of Money.`;
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
   * @returns the `noteNumber` property value as a PositiveIntType array
   */
  public getNoteNumberElement(): PositiveIntType[] {
    return this.noteNumber ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `noteNumber` property.
   *
   * @param element - the `noteNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNoteNumberElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.noteNumber; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.noteNumber = element;
    } else {
      this.noteNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `noteNumber` array property.
   *
   * @param element - the `noteNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNoteNumberElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.noteNumber; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initNoteNumber();
      this.noteNumber?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `noteNumber` property exists and has a value; `false` otherwise
   */
  public hasNoteNumberElement(): boolean {
    return isDefinedList<PositiveIntType>(this.noteNumber) && this.noteNumber.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `noteNumber` property value as a fhirPositiveInt array
   */
  public getNoteNumber(): fhirPositiveInt[] {
    this.initNoteNumber();
    const noteNumberValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.noteNumber!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        noteNumberValues.push(value);
      }
    }
    return noteNumberValues;
  }

  /**
   * Assigns the provided primitive value array to the `noteNumber` property.
   *
   * @param value - the `noteNumber` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNoteNumber(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const noteNumberElements = [] as PositiveIntType[];
      for (const noteNumberValue of value) {
        const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.noteNumber array item (${String(noteNumberValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(noteNumberValue, fhirPositiveIntSchema, optErrMsg));
        noteNumberElements.push(element);
      }
      this.noteNumber = noteNumberElements;
    } else {
      this.noteNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `noteNumber` array property.
   *
   * @param value - the `noteNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNoteNumber(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.noteNumber array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initNoteNumber();
      this.addNoteNumberElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `noteNumber` property exists and has a value; `false` otherwise
   */
  public hasNoteNumber(): boolean {
    return this.hasNoteNumberElement();
  }

  /**
   * Initialize the `noteNumber` property
   */
  private initNoteNumber(): void {
    if (!this.hasNoteNumber()) {
      this.noteNumber = [] as PositiveIntType[];
    }
  }

  /**
   * @returns the `reviewOutcome` property value as a ClaimResponseItemReviewOutcomeComponent object if defined; else an empty ClaimResponseItemReviewOutcomeComponent object
   */
  public getReviewOutcome(): ClaimResponseItemReviewOutcomeComponent {
    return this.reviewOutcome ?? new ClaimResponseItemReviewOutcomeComponent();
  }

  /**
   * Assigns the provided ReviewOutcome object value to the `reviewOutcome` property.
   *
   * @param value - the `reviewOutcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReviewOutcome(value: ClaimResponseItemReviewOutcomeComponent | undefined): this {
    if (isDefined<ClaimResponseItemReviewOutcomeComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.reviewOutcome; Provided element is not an instance of ClaimResponseItemReviewOutcomeComponent.`;
      assertFhirType<ClaimResponseItemReviewOutcomeComponent>(value, ClaimResponseItemReviewOutcomeComponent, optErrMsg);
      this.reviewOutcome = value;
    } else {
      this.reviewOutcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reviewOutcome` property exists and has a value; `false` otherwise
   */
  public hasReviewOutcome(): boolean {
    return isDefined<ClaimResponseItemReviewOutcomeComponent>(this.reviewOutcome) && !this.reviewOutcome.isEmpty();
  }

  /**
   * @returns the `adjudication` property value as a ClaimResponseItemAdjudicationComponent array
   */
  public getAdjudication(): ClaimResponseItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ClaimResponseItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ClaimResponseItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ClaimResponseItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.adjudication; Provided value array has an element that is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirTypeList<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClaimResponseItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ClaimResponseItemAdjudicationComponent | undefined): this {
    if (isDefined<ClaimResponseItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ClaimResponse.addItem.detail.subDetail.adjudication; Provided element is not an instance of ClaimResponseItemAdjudicationComponent.`;
      assertFhirType<ClaimResponseItemAdjudicationComponent>(value, ClaimResponseItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ClaimResponseItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ClaimResponseItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ClaimResponseItemAdjudicationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.addItem.detail.subDetail';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.traceNumber,
      this.revenue,
      this.productOrService,
      this.productOrServiceEnd,
      this.modifier,
      this.quantity,
      this.unitPrice,
      this.factor,
      this.tax,
      this.net,
      this.noteNumber,
      this.reviewOutcome,
      this.adjudication,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseAddItemDetailSubDetailComponent {
    const dest = new ClaimResponseAddItemDetailSubDetailComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseAddItemDetailSubDetailComponent): void {
    super.copyValues(dest);
    const traceNumberList = copyListValues<Identifier>(this.traceNumber);
    dest.traceNumber = traceNumberList.length === 0 ? undefined : traceNumberList;
    dest.revenue = this.revenue?.copy();
    dest.productOrService = this.productOrService?.copy();
    dest.productOrServiceEnd = this.productOrServiceEnd?.copy();
    const modifierList = copyListValues<CodeableConcept>(this.modifier);
    dest.modifier = modifierList.length === 0 ? undefined : modifierList;
    dest.quantity = this.quantity?.copy();
    dest.unitPrice = this.unitPrice?.copy();
    dest.factor = this.factor?.copy();
    dest.tax = this.tax?.copy();
    dest.net = this.net?.copy();
    const noteNumberList = copyListValues<PositiveIntType>(this.noteNumber);
    dest.noteNumber = noteNumberList.length === 0 ? undefined : noteNumberList;
    dest.reviewOutcome = this.reviewOutcome?.copy();
    const adjudicationList = copyListValues<ClaimResponseItemAdjudicationComponent>(this.adjudication);
    dest.adjudication = adjudicationList.length === 0 ? undefined : adjudicationList;
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

    if (this.hasTraceNumber()) {
      setFhirComplexListJson(this.getTraceNumber(), 'traceNumber', jsonObj);
    }

    if (this.hasRevenue()) {
      setFhirComplexJson(this.getRevenue(), 'revenue', jsonObj);
    }

    if (this.hasProductOrService()) {
      setFhirComplexJson(this.getProductOrService(), 'productOrService', jsonObj);
    }

    if (this.hasProductOrServiceEnd()) {
      setFhirComplexJson(this.getProductOrServiceEnd(), 'productOrServiceEnd', jsonObj);
    }

    if (this.hasModifier()) {
      setFhirComplexListJson(this.getModifier(), 'modifier', jsonObj);
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

    if (this.hasTax()) {
      setFhirComplexJson(this.getTax(), 'tax', jsonObj);
    }

    if (this.hasNet()) {
      setFhirComplexJson(this.getNet(), 'net', jsonObj);
    }

    if (this.hasNoteNumber()) {
      setFhirPrimitiveListJson(this.getNoteNumberElement(), 'noteNumber', jsonObj);
    }

    if (this.hasReviewOutcome()) {
      setFhirBackboneElementJson(this.getReviewOutcome(), 'reviewOutcome', jsonObj);
    }

    if (this.hasAdjudication()) {
      setFhirBackboneElementListJson(this.getAdjudication(), 'adjudication', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ClaimResponseTotalComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Adjudication totals
 * - **Definition:** Categorized monetary totals for the adjudication.
 * - **Comment:** Totals for amounts submitted, co-pays, benefits payable etc.
 * - **Requirements:** To provide the requestor with financial totals by category for the adjudication.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseTotalComponent extends BackboneElement implements IBackboneElement {
  constructor(category: CodeableConcept | null = null, amount: Money | null = null) {
    super();

    this.category = null;
    if (isDefined<CodeableConcept>(category)) {
      this.setCategory(category);
    }

    this.amount = null;
    if (isDefined<Money>(amount)) {
      this.setAmount(amount);
    }
  }

  /**
   * Parse the provided `ClaimResponseTotalComponent` JSON to instantiate the ClaimResponseTotalComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseTotalComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseTotalComponent
   * @returns ClaimResponseTotalComponent data model or undefined for `ClaimResponseTotalComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseTotalComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseTotalComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseTotalComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

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

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setAmount(datatype);
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
   * ClaimResponse.total.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of adjudication information
   * - **Definition:** A code to indicate the information type of this adjudication record. Information types may include: the value submitted, maximum values or percentages allowed or payable under the plan, amounts that the patient is responsible for in aggregate or pertaining to this item, amounts paid by other coverages, and the benefit payable for this item.
   * - **Comment:** For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
   * - **Requirements:** Needed to convey the type of total provided.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category: CodeableConcept | null;

  /**
   * ClaimResponse.total.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Financial total for the category
   * - **Definition:** Monetary total amount associated with the category.
   * - **Requirements:** Needed to convey the total monetary amount.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount: Money | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
    assertIsDefined<CodeableConcept>(value, `ClaimResponse.total.category is required`);
    const optErrMsg = `Invalid ClaimResponse.total.category; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `amount` property value as a Money object if defined; else null
   */
  public getAmount(): Money | null {
    return this.amount;
  }

  /**
   * Assigns the provided Money object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Money): this {
    assertIsDefined<Money>(value, `ClaimResponse.total.amount is required`);
    const optErrMsg = `Invalid ClaimResponse.total.amount; Provided element is not an instance of Money.`;
    assertFhirType<Money>(value, Money, optErrMsg);
    this.amount = value;
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<Money>(this.amount) && !this.amount.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.total';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.amount,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseTotalComponent {
    const dest = new ClaimResponseTotalComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseTotalComponent): void {
    super.copyValues(dest);
    dest.category = this.category ? this.category.copy() : null;
    dest.amount = this.amount ? this.amount.copy() : null;
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

    if (this.hasCategory()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCategory()!, 'category', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.total.category`);
    }

    if (this.hasAmount()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getAmount()!, 'amount', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.total.amount`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimResponsePaymentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Payment Details
 * - **Definition:** Payment details for the adjudication of the claim.
 * - **Requirements:** Needed to convey references to the financial instrument that has been used if payment has been made.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponsePaymentComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, amount: Money | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.amount = null;
    if (isDefined<Money>(amount)) {
      this.setAmount(amount);
    }
  }

  /**
   * Parse the provided `ClaimResponsePaymentComponent` JSON to instantiate the ClaimResponsePaymentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponsePaymentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponsePaymentComponent
   * @returns ClaimResponsePaymentComponent data model or undefined for `ClaimResponsePaymentComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponsePaymentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponsePaymentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponsePaymentComponent();

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

    fieldName = 'adjustment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAdjustment(datatype);
    }

    fieldName = 'adjustmentReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAdjustmentReason(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setAmount(datatype);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ClaimResponse.payment.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Partial or complete payment
   * - **Definition:** Whether this represents partial or complete payment of the benefits payable.
   * - **Requirements:** To advise the requestor when the insurer believes all payments to have been completed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * ClaimResponse.payment.adjustment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Payment adjustment for non-claim issues
   * - **Definition:** Total amount of all adjustments to this payment included in this transaction which are not related to this claim\'s adjudication.
   * - **Comment:** Insurers will deduct amounts owing from the provider (adjustment), such as a prior overpayment, from the amount owing to the provider (benefits payable) when payment is made to the provider.
   * - **Requirements:** To advise the requestor of adjustments applied to the payment.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private adjustment?: Money | undefined;

  /**
   * ClaimResponse.payment.adjustmentReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Explanation for the adjustment
   * - **Definition:** Reason for the payment adjustment.
   * - **Requirements:** Needed to clarify the monetary adjustment.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private adjustmentReason?: CodeableConcept | undefined;

  /**
   * ClaimResponse.payment.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Expected date of payment
   * - **Definition:** Estimated date the payment will be issued or the actual issue date of payment.
   * - **Requirements:** To advise the payee when payment can be expected.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private date?: DateType | undefined;

  /**
   * ClaimResponse.payment.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Payable amount after adjustment
   * - **Definition:** Benefits payable less any payment adjustment.
   * - **Requirements:** Needed to provide the actual payment amount.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private amount: Money | null;

  /**
   * ClaimResponse.payment.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for the payment
   * - **Definition:** Issuer\'s unique identifier for the payment instrument.
   * - **Comment:** For example: EFT number or check number.
   * - **Requirements:** Enable the receiver to reconcile when payment received.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier | undefined;

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
    assertIsDefined<CodeableConcept>(value, `ClaimResponse.payment.type is required`);
    const optErrMsg = `Invalid ClaimResponse.payment.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `adjustment` property value as a Money object if defined; else an empty Money object
   */
  public getAdjustment(): Money {
    return this.adjustment ?? new Money();
  }

  /**
   * Assigns the provided Adjustment object value to the `adjustment` property.
   *
   * @param value - the `adjustment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjustment(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid ClaimResponse.payment.adjustment; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.adjustment = value;
    } else {
      this.adjustment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `adjustment` property exists and has a value; `false` otherwise
   */
  public hasAdjustment(): boolean {
    return isDefined<Money>(this.adjustment) && !this.adjustment.isEmpty();
  }

  /**
   * @returns the `adjustmentReason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAdjustmentReason(): CodeableConcept {
    return this.adjustmentReason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AdjustmentReason object value to the `adjustmentReason` property.
   *
   * @param value - the `adjustmentReason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjustmentReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClaimResponse.payment.adjustmentReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.adjustmentReason = value;
    } else {
      this.adjustmentReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `adjustmentReason` property exists and has a value; `false` otherwise
   */
  public hasAdjustmentReason(): boolean {
    return isDefined<CodeableConcept>(this.adjustmentReason) && !this.adjustmentReason.isEmpty();
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
      const optErrMsg = `Invalid ClaimResponse.payment.date; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid ClaimResponse.payment.date (${String(value)})`;
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
   * @returns the `amount` property value as a Money object if defined; else null
   */
  public getAmount(): Money | null {
    return this.amount;
  }

  /**
   * Assigns the provided Money object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Money): this {
    assertIsDefined<Money>(value, `ClaimResponse.payment.amount is required`);
    const optErrMsg = `Invalid ClaimResponse.payment.amount; Provided element is not an instance of Money.`;
    assertFhirType<Money>(value, Money, optErrMsg);
    this.amount = value;
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<Money>(this.amount) && !this.amount.isEmpty();
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
      const optErrMsg = `Invalid ClaimResponse.payment.identifier; Provided element is not an instance of Identifier.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.payment';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.adjustment,
      this.adjustmentReason,
      this.date,
      this.amount,
      this.identifier,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponsePaymentComponent {
    const dest = new ClaimResponsePaymentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponsePaymentComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.adjustment = this.adjustment?.copy();
    dest.adjustmentReason = this.adjustmentReason?.copy();
    dest.date = this.date?.copy();
    dest.amount = this.amount ? this.amount.copy() : null;
    dest.identifier = this.identifier?.copy();
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
      missingReqdProperties.push(`ClaimResponse.payment.type`);
    }

    if (this.hasAdjustment()) {
      setFhirComplexJson(this.getAdjustment(), 'adjustment', jsonObj);
    }

    if (this.hasAdjustmentReason()) {
      setFhirComplexJson(this.getAdjustmentReason(), 'adjustmentReason', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasAmount()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getAmount()!, 'amount', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.payment.amount`);
    }

    if (this.hasIdentifier()) {
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimResponseProcessNoteComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Note concerning adjudication
 * - **Definition:** A note that describes or explains adjudication results in a human readable form.
 * - **Requirements:** Provides the insurer specific textual explanations associated with the processing.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseProcessNoteComponent extends BackboneElement implements IBackboneElement {
  constructor(text: StringType | fhirString | null = null) {
    super();

    this.text = null;
    if (isDefined<StringType | fhirString>(text)) {
      if (text instanceof PrimitiveType) {
        this.setTextElement(text);
      } else {
        this.setText(text);
      }
    }
  }

  /**
   * Parse the provided `ClaimResponseProcessNoteComponent` JSON to instantiate the ClaimResponseProcessNoteComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseProcessNoteComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseProcessNoteComponent
   * @returns ClaimResponseProcessNoteComponent data model or undefined for `ClaimResponseProcessNoteComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseProcessNoteComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseProcessNoteComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseProcessNoteComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'number';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setNumberElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTextElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLanguage(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ClaimResponse.processNote.number Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Note instance identifier
   * - **Definition:** A number to uniquely identify a note entry.
   * - **Requirements:** Necessary to provide a mechanism to link from adjudications.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private number?: PositiveIntType | undefined;

  /**
   * ClaimResponse.processNote.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Note purpose
   * - **Definition:** The business purpose of the note text.
   * - **Requirements:** To convey the expectation for when the text is used.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * ClaimResponse.processNote.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Note explanatory text
   * - **Definition:** The explanation or description associated with the processing.
   * - **Requirements:** Required to provide human readable explanation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text: StringType | null;

  /**
   * ClaimResponse.processNote.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Language of the text
   * - **Definition:** A code to define the language used in the text of the note.
   * - **Comment:** Only required if the language is different from the resource language.
   * - **Requirements:** Note text may vary from the resource defined language.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private language?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `number` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getNumberElement(): PositiveIntType {
    return this.number ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `number` property.
   *
   * @param element - the `number` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.processNote.number; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.number = element;
    } else {
      this.number = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `number` property exists and has a value; `false` otherwise
   */
  public hasNumberElement(): boolean {
    return isDefined<PositiveIntType>(this.number) && !this.number.isEmpty();
  }

  /**
   * @returns the `number` property value as a fhirPositiveInt if defined; else undefined
   */
  public getNumber(): fhirPositiveInt | undefined {
    return this.number?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `number` property.
   *
   * @param value - the `number` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumber(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ClaimResponse.processNote.number (${String(value)})`;
      this.number = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.number = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `number` property exists and has a value; `false` otherwise
   */
  public hasNumber(): boolean {
    return this.hasNumberElement();
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
      const optErrMsg = `Invalid ClaimResponse.processNote.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `text` property value as a StringType object if defined; else null
   */
  public getTextElement(): StringType | null {
    return this.text;
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: StringType): this {
    assertIsDefined<StringType>(element, `ClaimResponse.processNote.text is required`);
    const optErrMsg = `Invalid ClaimResponse.processNote.text; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.text = element;
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<StringType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirString if defined; else null
   */
  public getText(): fhirString | null {
    if (this.text?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.text.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirString): this {
    assertIsDefined<fhirString>(value, `ClaimResponse.processNote.text is required`);
    const optErrMsg = `Invalid ClaimResponse.processNote.text (${String(value)})`;
    this.text = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /**
   * @returns the `language` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getLanguage(): CodeableConcept {
    return this.language ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Language object value to the `language` property.
   *
   * @param value - the `language` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLanguage(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClaimResponse.processNote.language; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.language = value;
    } else {
      this.language = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguage(): boolean {
    return isDefined<CodeableConcept>(this.language) && !this.language.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.processNote';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.number,
      this.type_,
      this.text,
      this.language,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseProcessNoteComponent {
    const dest = new ClaimResponseProcessNoteComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseProcessNoteComponent): void {
    super.copyValues(dest);
    dest.number = this.number?.copy();
    dest.type_ = this.type_?.copy();
    dest.text = this.text ? this.text.copy() : null;
    dest.language = this.language?.copy();
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

    if (this.hasNumberElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getNumberElement(), 'number', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasTextElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getTextElement()!, 'text', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.processNote.text`);
    }

    if (this.hasLanguage()) {
      setFhirComplexJson(this.getLanguage(), 'language', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClaimResponseInsuranceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Patient insurance information
 * - **Definition:** Financial instruments for reimbursement for the health care products and services specified on the claim.
 * - **Comment:** All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local \'coordination of benefit\' rules. One coverage (and only one) with \'focal=true\' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where \'subrogation=false\', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 * - **Requirements:** At least one insurer is required for a claim to be a claim.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseInsuranceComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `ClaimResponseInsuranceComponent` JSON to instantiate the ClaimResponseInsuranceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseInsuranceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseInsuranceComponent
   * @returns ClaimResponseInsuranceComponent data model or undefined for `ClaimResponseInsuranceComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseInsuranceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseInsuranceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseInsuranceComponent();

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
   * ClaimResponse.insurance.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Insurance instance identifier
   * - **Definition:** A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
   * - **Requirements:** To maintain order of the coverages.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence: PositiveIntType | null;

  /**
   * ClaimResponse.insurance.focal Element
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
   * - **isSummary:** false
   */
  private focal: BooleanType | null;

  /**
   * ClaimResponse.insurance.coverage Element
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
   * ClaimResponse.insurance.businessArrangement Element
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
   * ClaimResponse.insurance.claimResponse Element
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
    assertIsDefined<PositiveIntType>(element, `ClaimResponse.insurance.sequence is required`);
    const optErrMsg = `Invalid ClaimResponse.insurance.sequence; Provided value is not an instance of PositiveIntType.`;
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
    assertIsDefined<fhirPositiveInt>(value, `ClaimResponse.insurance.sequence is required`);
    const optErrMsg = `Invalid ClaimResponse.insurance.sequence (${String(value)})`;
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
    assertIsDefined<BooleanType>(element, `ClaimResponse.insurance.focal is required`);
    const optErrMsg = `Invalid ClaimResponse.insurance.focal; Provided value is not an instance of BooleanType.`;
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
    assertIsDefined<fhirBoolean>(value, `ClaimResponse.insurance.focal is required`);
    const optErrMsg = `Invalid ClaimResponse.insurance.focal (${String(value)})`;
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
   * @returns the `coverage` property value as a Reference object if defined; else null
   */
  public getCoverage(): Reference | null {
    return this.coverage;
  }

  /**
   * Assigns the provided Coverage object value to the `coverage` property.
   *
   * @decorator `@ReferenceTargets('ClaimResponse.insurance.coverage', ['Coverage',])`
   *
   * @param value - the `coverage` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.insurance.coverage', [
    'Coverage',
  ])
  public setCoverage(value: Reference): this {
    assertIsDefined<Reference>(value, `ClaimResponse.insurance.coverage is required`);
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
      const optErrMsg = `Invalid ClaimResponse.insurance.businessArrangement; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ClaimResponse.insurance.businessArrangement (${String(value)})`;
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
   * @returns the `claimResponse` property value as a Reference object; else an empty Reference object
   */
  public getClaimResponse(): Reference {
    return this.claimResponse ?? new Reference();
  }

  /**
   * Assigns the provided ClaimResponse object value to the `claimResponse` property.
   *
   * @decorator `@ReferenceTargets('ClaimResponse.insurance.claimResponse', ['ClaimResponse',])`
   *
   * @param value - the `claimResponse` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClaimResponse.insurance.claimResponse', [
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
    return 'ClaimResponse.insurance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.focal,
      this.coverage,
      this.businessArrangement,
      this.claimResponse,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseInsuranceComponent {
    const dest = new ClaimResponseInsuranceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseInsuranceComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence ? this.sequence.copy() : null;
    dest.focal = this.focal ? this.focal.copy() : null;
    dest.coverage = this.coverage ? this.coverage.copy() : null;
    dest.businessArrangement = this.businessArrangement?.copy();
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
      missingReqdProperties.push(`ClaimResponse.insurance.sequence`);
    }

    if (this.hasFocalElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirBoolean>(this.getFocalElement()!, 'focal', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.insurance.focal`);
    }

    if (this.hasCoverage()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCoverage()!, 'coverage', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.insurance.coverage`);
    }

    if (this.hasBusinessArrangementElement()) {
      setFhirPrimitiveJson<fhirString>(this.getBusinessArrangementElement(), 'businessArrangement', jsonObj);
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
 * ClaimResponseErrorComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Processing errors
 * - **Definition:** Errors encountered during the processing of the adjudication.
 * - **Comment:** If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
 * - **Requirements:** Need to communicate processing issues to the requestor.
 *
 * @category Data Models: Resource
 * @see [FHIR ClaimResponse](http://hl7.org/fhir/StructureDefinition/ClaimResponse)
 */
export class ClaimResponseErrorComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `ClaimResponseErrorComponent` JSON to instantiate the ClaimResponseErrorComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClaimResponseErrorComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClaimResponseErrorComponent
   * @returns ClaimResponseErrorComponent data model or undefined for `ClaimResponseErrorComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClaimResponseErrorComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClaimResponseErrorComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClaimResponseErrorComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'itemSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setItemSequenceElement(datatype);
    }

    fieldName = 'detailSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setDetailSequenceElement(datatype);
    }

    fieldName = 'subDetailSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setSubDetailSequenceElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'expression';
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
          instance.addExpressionElement(datatype);
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
   * ClaimResponse.error.itemSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Item sequence number
   * - **Definition:** The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
   * - **Requirements:** Provides references to the claim items.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private itemSequence?: PositiveIntType | undefined;

  /**
   * ClaimResponse.error.detailSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Detail sequence number
   * - **Definition:** The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
   * - **Requirements:** Provides references to the claim details within the claim item.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detailSequence?: PositiveIntType | undefined;

  /**
   * ClaimResponse.error.subDetailSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subdetail sequence number
   * - **Definition:** The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
   * - **Requirements:** Provides references to the claim sub-details within the claim detail.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subDetailSequence?: PositiveIntType | undefined;

  /**
   * ClaimResponse.error.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Error code detailing processing issues
   * - **Definition:** An error code, from a specified code system, which details why the claim could not be adjudicated.
   * - **Requirements:** Required to convey processing errors.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * ClaimResponse.error.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** FHIRPath of element(s) related to issue
   * - **Definition:** A [simple subset of FHIRPath](https://hl7.org/fhir/fhirpath.html#simple) limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised.
   * - **Comment:** The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
   * - **Requirements:** Allows systems to highlight or otherwise guide users to elements implicated in issues to allow them to be fixed more easily.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private expression?: StringType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `itemSequence` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getItemSequenceElement(): PositiveIntType {
    return this.itemSequence ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `itemSequence` property.
   *
   * @param element - the `itemSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setItemSequenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.error.itemSequence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.itemSequence = element;
    } else {
      this.itemSequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `itemSequence` property exists and has a value; `false` otherwise
   */
  public hasItemSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.itemSequence) && !this.itemSequence.isEmpty();
  }

  /**
   * @returns the `itemSequence` property value as a fhirPositiveInt if defined; else undefined
   */
  public getItemSequence(): fhirPositiveInt | undefined {
    return this.itemSequence?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `itemSequence` property.
   *
   * @param value - the `itemSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setItemSequence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ClaimResponse.error.itemSequence (${String(value)})`;
      this.itemSequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.itemSequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `itemSequence` property exists and has a value; `false` otherwise
   */
  public hasItemSequence(): boolean {
    return this.hasItemSequenceElement();
  }

  /**
   * @returns the `detailSequence` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getDetailSequenceElement(): PositiveIntType {
    return this.detailSequence ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `detailSequence` property.
   *
   * @param element - the `detailSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetailSequenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.error.detailSequence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.detailSequence = element;
    } else {
      this.detailSequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detailSequence` property exists and has a value; `false` otherwise
   */
  public hasDetailSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.detailSequence) && !this.detailSequence.isEmpty();
  }

  /**
   * @returns the `detailSequence` property value as a fhirPositiveInt if defined; else undefined
   */
  public getDetailSequence(): fhirPositiveInt | undefined {
    return this.detailSequence?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `detailSequence` property.
   *
   * @param value - the `detailSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetailSequence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ClaimResponse.error.detailSequence (${String(value)})`;
      this.detailSequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.detailSequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detailSequence` property exists and has a value; `false` otherwise
   */
  public hasDetailSequence(): boolean {
    return this.hasDetailSequenceElement();
  }

  /**
   * @returns the `subDetailSequence` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getSubDetailSequenceElement(): PositiveIntType {
    return this.subDetailSequence ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `subDetailSequence` property.
   *
   * @param element - the `subDetailSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubDetailSequenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.error.subDetailSequence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.subDetailSequence = element;
    } else {
      this.subDetailSequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subDetailSequence` property exists and has a value; `false` otherwise
   */
  public hasSubDetailSequenceElement(): boolean {
    return isDefined<PositiveIntType>(this.subDetailSequence) && !this.subDetailSequence.isEmpty();
  }

  /**
   * @returns the `subDetailSequence` property value as a fhirPositiveInt if defined; else undefined
   */
  public getSubDetailSequence(): fhirPositiveInt | undefined {
    return this.subDetailSequence?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `subDetailSequence` property.
   *
   * @param value - the `subDetailSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubDetailSequence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ClaimResponse.error.subDetailSequence (${String(value)})`;
      this.subDetailSequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.subDetailSequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subDetailSequence` property exists and has a value; `false` otherwise
   */
  public hasSubDetailSequence(): boolean {
    return this.hasSubDetailSequenceElement();
  }

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else null
   */
  public getCode(): CodeableConcept | null {
    return this.code;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `ClaimResponse.error.code is required`);
    const optErrMsg = `Invalid ClaimResponse.error.code; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.code = value;
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `expression` property value as a StringType array
   */
  public getExpressionElement(): StringType[] {
    return this.expression ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `expression` property.
   *
   * @param element - the `expression` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpressionElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.error.expression; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.expression = element;
    } else {
      this.expression = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `expression` array property.
   *
   * @param element - the `expression` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addExpressionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ClaimResponse.error.expression; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initExpression();
      this.expression?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpressionElement(): boolean {
    return isDefinedList<StringType>(this.expression) && this.expression.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `expression` property value as a fhirString array
   */
  public getExpression(): fhirString[] {
    this.initExpression();
    const expressionValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.expression!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        expressionValues.push(value);
      }
    }
    return expressionValues;
  }

  /**
   * Assigns the provided primitive value array to the `expression` property.
   *
   * @param value - the `expression` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpression(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const expressionElements = [] as StringType[];
      for (const expressionValue of value) {
        const optErrMsg = `Invalid ClaimResponse.error.expression array item (${String(expressionValue)})`;
        const element = new StringType(parseFhirPrimitiveData(expressionValue, fhirStringSchema, optErrMsg));
        expressionElements.push(element);
      }
      this.expression = expressionElements;
    } else {
      this.expression = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `expression` array property.
   *
   * @param value - the `expression` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addExpression(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ClaimResponse.error.expression array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initExpression();
      this.addExpressionElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpression(): boolean {
    return this.hasExpressionElement();
  }

  /**
   * Initialize the `expression` property
   */
  private initExpression(): void {
    if (!this.hasExpression()) {
      this.expression = [] as StringType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClaimResponse.error';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.itemSequence,
      this.detailSequence,
      this.subDetailSequence,
      this.code,
      this.expression,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClaimResponseErrorComponent {
    const dest = new ClaimResponseErrorComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClaimResponseErrorComponent): void {
    super.copyValues(dest);
    dest.itemSequence = this.itemSequence?.copy();
    dest.detailSequence = this.detailSequence?.copy();
    dest.subDetailSequence = this.subDetailSequence?.copy();
    dest.code = this.code ? this.code.copy() : null;
    const expressionList = copyListValues<StringType>(this.expression);
    dest.expression = expressionList.length === 0 ? undefined : expressionList;
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

    if (this.hasItemSequenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getItemSequenceElement(), 'itemSequence', jsonObj);
    }

    if (this.hasDetailSequenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getDetailSequenceElement(), 'detailSequence', jsonObj);
    }

    if (this.hasSubDetailSequenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSubDetailSequenceElement(), 'subDetailSequence', jsonObj);
    }

    if (this.hasCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCode()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`ClaimResponse.error.code`);
    }

    if (this.hasExpression()) {
      setFhirPrimitiveListJson(this.getExpressionElement(), 'expression', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
