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
 * ExplanationOfBenefit Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
 * StructureDefinition.name: ExplanationOfBenefit
 * StructureDefinition.description: This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
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
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  PositiveIntType,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  UnsignedIntType,
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
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Address, Attachment, CodeableConcept, Coding, Identifier, Money, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference } from '../complex-types/complex-datatypes';
import { ClaimUseEnum } from '../code-systems/ClaimUseEnum';
import { ExplanationofbenefitStatusEnum } from '../code-systems/ExplanationofbenefitStatusEnum';
import { NoteTypeEnum } from '../code-systems/NoteTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { RemittanceOutcomeEnum } from '../code-systems/RemittanceOutcomeEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ExplanationOfBenefit Class
 *
 * @remarks
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 *
 * **FHIR Specification**
 * - **Short:** Explanation of Benefit resource
 * - **Definition:** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefit extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, type_: CodeableConcept | null = null, use: EnumCodeType | CodeType | fhirCode | null = null, patient: Reference | null = null, created: DateTimeType | fhirDateTime | null = null, insurer: Reference | null = null, provider: Reference | null = null, outcome: EnumCodeType | CodeType | fhirCode | null = null, insurance: ExplanationOfBenefitInsuranceComponent[] | null = null) {
    super();

    this.explanationofbenefitStatusEnum = new ExplanationofbenefitStatusEnum();
    this.claimUseEnum = new ClaimUseEnum();
    this.remittanceOutcomeEnum = new RemittanceOutcomeEnum();

    this.status = constructorCodeValueAsEnumCodeType<ExplanationofbenefitStatusEnum>(
      status,
      ExplanationofbenefitStatusEnum,
      this.explanationofbenefitStatusEnum,
      'ExplanationOfBenefit.status',
    );

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.use = constructorCodeValueAsEnumCodeType<ClaimUseEnum>(
      use,
      ClaimUseEnum,
      this.claimUseEnum,
      'ExplanationOfBenefit.use',
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

    this.provider = null;
    if (isDefined<Reference>(provider)) {
      this.setProvider(provider);
    }

    this.outcome = constructorCodeValueAsEnumCodeType<RemittanceOutcomeEnum>(
      outcome,
      RemittanceOutcomeEnum,
      this.remittanceOutcomeEnum,
      'ExplanationOfBenefit.outcome',
    );

    this.insurance = null;
    if (isDefinedList<ExplanationOfBenefitInsuranceComponent>(insurance)) {
      this.setInsurance(insurance);
    }
  }

  /**
   * Parse the provided `ExplanationOfBenefit` JSON to instantiate the ExplanationOfBenefit data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefit`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefit
   * @returns ExplanationOfBenefit data model or undefined for `ExplanationOfBenefit`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefit | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefit';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefit();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ExplanationOfBenefit');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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
        instance.setUse(null);
      } else {
        instance.setUseElement(datatype);
      }
    } else {
      instance.setUse(null);
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
        instance.setCreated(null);
      } else {
        instance.setCreatedElement(datatype);
      }
    } else {
      instance.setCreated(null);
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
      if (datatype === undefined) {
        instance.setInsurer(null);
      } else {
        instance.setInsurer(datatype);
      }
    } else {
      instance.setInsurer(null);
    }

    fieldName = 'provider';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setProvider(null);
      } else {
        instance.setProvider(datatype);
      }
    } else {
      instance.setProvider(null);
    }

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPriority(datatype);
    }

    fieldName = 'fundsReserveRequested';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFundsReserveRequested(datatype);
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitRelatedComponent | undefined = ExplanationOfBenefitRelatedComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addRelated(component);
          }
        });
      }
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
      const component: ExplanationOfBenefitPayeeComponent | undefined = ExplanationOfBenefitPayeeComponent.parse(classJsonObj[fieldName]!, sourceField);
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

    fieldName = 'claim';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setClaim(datatype);
    }

    fieldName = 'claimResponse';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setClaimResponse(datatype);
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

    fieldName = 'preAuthRef';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
    }

    fieldName = 'preAuthRefPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Period | undefined = Period.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPreAuthRefPeriod(datatype);
          }
        });
      }
    }

    fieldName = 'careTeam';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitCareTeamComponent | undefined = ExplanationOfBenefitCareTeamComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCareTeam(component);
          }
        });
      }
    }

    fieldName = 'supportingInfo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitSupportingInfoComponent | undefined = ExplanationOfBenefitSupportingInfoComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSupportingInfo(component);
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
          const component: ExplanationOfBenefitDiagnosisComponent | undefined = ExplanationOfBenefitDiagnosisComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDiagnosis(component);
          }
        });
      }
    }

    fieldName = 'procedure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitProcedureComponent | undefined = ExplanationOfBenefitProcedureComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addProcedure(component);
          }
        });
      }
    }

    fieldName = 'precedence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setPrecedenceElement(datatype);
    }

    fieldName = 'insurance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setInsurance(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitInsuranceComponent | undefined = ExplanationOfBenefitInsuranceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component === undefined) {
            instance.setInsurance(null);
          } else {
            instance.addInsurance(component);
          }
        });
      }
    } else {
      instance.setInsurance(null);
    }

    fieldName = 'accident';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ExplanationOfBenefitAccidentComponent | undefined = ExplanationOfBenefitAccidentComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAccident(component);
    }

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitItemComponent | undefined = ExplanationOfBenefitItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addItem(component);
          }
        });
      }
    }

    fieldName = 'addItem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitAddItemComponent | undefined = ExplanationOfBenefitAddItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAddItem(component);
          }
        });
      }
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitItemAdjudicationComponent | undefined = ExplanationOfBenefitItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAdjudication(component);
          }
        });
      }
    }

    fieldName = 'total';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitTotalComponent | undefined = ExplanationOfBenefitTotalComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addTotal(component);
          }
        });
      }
    }

    fieldName = 'payment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ExplanationOfBenefitPaymentComponent | undefined = ExplanationOfBenefitPaymentComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPayment(component);
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitProcessNoteComponent | undefined = ExplanationOfBenefitProcessNoteComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addProcessNote(component);
          }
        });
      }
    }

    fieldName = 'benefitPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBenefitPeriod(datatype);
    }

    fieldName = 'benefitBalance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitBenefitBalanceComponent | undefined = ExplanationOfBenefitBenefitBalanceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addBenefitBalance(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for the resource
   * - **Definition:** A unique identifier assigned to this explanation of benefit.
   * - **Requirements:** Allows EOBs to be distinguished and referenced.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: ExplanationofbenefitStatus
   *
   * @see {@link ExplanationofbenefitStatusEnum }
   */
  private readonly explanationofbenefitStatusEnum: ExplanationofbenefitStatusEnum;

  /**
   * ExplanationOfBenefit.status Element
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
   * @see CodeSystem Enumeration: {@link ExplanationofbenefitStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * ExplanationOfBenefit.type Element
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
   * ExplanationOfBenefit.subType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** More granular claim type
   * - **Definition:** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service.
   * - **Comment:** This may contain the local bill type codes such as the US UB-04 bill type code.
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
   * ExplanationOfBenefit.use Element
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
   * ExplanationOfBenefit.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The recipient of the products and services
   * - **Definition:** The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
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
   * ExplanationOfBenefit.billablePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relevant time frame for the claim
   * - **Definition:** The period for which charges are being submitted.
   * - **Comment:** Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and prodeterminations. Typically line item dates of service should fall within the billing period if one is specified.
   * - **Requirements:** A number jurisdictions required the submission of the billing period when submitting claims for example for hospital stays or long-term care.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private billablePeriod?: Period | undefined;

  /**
   * ExplanationOfBenefit.created Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Response creation date
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
   * ExplanationOfBenefit.enterer Element
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
   * ExplanationOfBenefit.insurer Element
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
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private insurer: Reference | null;

  /**
   * ExplanationOfBenefit.provider Element
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
   * ExplanationOfBenefit.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Desired processing urgency
   * - **Definition:** The provider-required urgency of processing the request. Typical values include: stat, routine deferred.
   * - **Comment:** If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
   * - **Requirements:** The provider may need to indicate their processing requirements so that the processor can indicate if they are unable to comply.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private priority?: CodeableConcept | undefined;

  /**
   * ExplanationOfBenefit.fundsReserveRequested Element
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
  private fundsReserveRequested?: CodeableConcept | undefined;

  /**
   * ExplanationOfBenefit.fundsReserve Element
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
   * ExplanationOfBenefit.related Element
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
  private related?: ExplanationOfBenefitRelatedComponent[] | undefined;

  /**
   * ExplanationOfBenefit.prescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Prescription authorizing services or products
   * - **Definition:** Prescription to support the dispensing of pharmacy, device or vision products.
   * - **Requirements:** Required to authorize the dispensing of controlled substances and devices.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/VisionPrescription',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private prescription?: Reference | undefined;

  /**
   * ExplanationOfBenefit.originalPrescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Original prescription if superceded by fulfiller
   * - **Definition:** Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products.
   * - **Comment:** For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the \'prescription\' and that from the physician becomes the \'original prescription\'.
   * - **Requirements:** Often required when a fulfiller varies what is fulfilled from that authorized on the original prescription.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private originalPrescription?: Reference | undefined;

  /**
   * ExplanationOfBenefit.payee Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recipient of benefits payable
   * - **Definition:** The party to be reimbursed for cost of the products and services according to the terms of the policy.
   * - **Comment:** Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
   * - **Requirements:** The provider needs to specify who they wish to be reimbursed and the claims processor needs express who they will reimburse.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private payee?: ExplanationOfBenefitPayeeComponent | undefined;

  /**
   * ExplanationOfBenefit.referral Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Treatment Referral
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
   * ExplanationOfBenefit.facility Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Servicing Facility
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
   * ExplanationOfBenefit.claim Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Claim reference
   * - **Definition:** The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
   * - **Requirements:** To provide a link to the original adjudication request.
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
   * ExplanationOfBenefit.claimResponse Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Claim response reference
   * - **Definition:** The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
   * - **Requirements:** To provide a link to the original adjudication response.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ClaimResponse',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private claimResponse?: Reference | undefined;

  /**
   * FHIR CodeSystem: RemittanceOutcome
   *
   * @see {@link RemittanceOutcomeEnum }
   */
  private readonly remittanceOutcomeEnum: RemittanceOutcomeEnum;

  /**
   * ExplanationOfBenefit.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** queued | complete | error | partial
   * - **Definition:** The outcome of the claim, predetermination, or preauthorization processing.
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
   * ExplanationOfBenefit.disposition Element
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
   * ExplanationOfBenefit.preAuthRef Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Preauthorization reference
   * - **Definition:** Reference from the Insurer which is used in later communications which refers to this adjudication.
   * - **Comment:** This value is only present on preauthorization adjudications.
   * - **Requirements:** On subsequent claims, the insurer may require the provider to quote this value.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preAuthRef?: StringType[] | undefined;

  /**
   * ExplanationOfBenefit.preAuthRefPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Preauthorization in-effect period
   * - **Definition:** The timeframe during which the supplied preauthorization reference may be quoted on claims to obtain the adjudication as provided.
   * - **Comment:** This value is only present on preauthorization adjudications.
   * - **Requirements:** On subsequent claims, the insurer may require the provider to quote this value.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preAuthRefPeriod?: Period[] | undefined;

  /**
   * ExplanationOfBenefit.careTeam Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Care Team members
   * - **Definition:** The members of the team who provided the products and services.
   * - **Requirements:** Common to identify the responsible and supporting practitioners.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private careTeam?: ExplanationOfBenefitCareTeamComponent[] | undefined;

  /**
   * ExplanationOfBenefit.supportingInfo Element
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
  private supportingInfo?: ExplanationOfBenefitSupportingInfoComponent[] | undefined;

  /**
   * ExplanationOfBenefit.diagnosis Element
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
  private diagnosis?: ExplanationOfBenefitDiagnosisComponent[] | undefined;

  /**
   * ExplanationOfBenefit.procedure Element
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
  private procedure?: ExplanationOfBenefitProcedureComponent[] | undefined;

  /**
   * ExplanationOfBenefit.precedence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Precedence (primary, secondary, etc.)
   * - **Definition:** This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
   * - **Requirements:** Needed to coordinate between multiple EOBs for the same suite of services.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private precedence?: PositiveIntType | undefined;

  /**
   * ExplanationOfBenefit.insurance Element
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
  private insurance: ExplanationOfBenefitInsuranceComponent[] | null;

  /**
   * ExplanationOfBenefit.accident Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details of the event
   * - **Definition:** Details of a accident which resulted in injuries which required the products and services listed in the claim.
   * - **Requirements:** When healthcare products and services are accident related, benefits may be payable under accident provisions of policies, such as automotive, etc before they are payable under normal health insurance.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private accident?: ExplanationOfBenefitAccidentComponent | undefined;

  /**
   * ExplanationOfBenefit.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product or service provided
   * - **Definition:** A claim line. Either a simple (a product or service) or a \'group\' of details which can also be a simple items or groups of sub-details.
   * - **Requirements:** The items to be processed for adjudication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item?: ExplanationOfBenefitItemComponent[] | undefined;

  /**
   * ExplanationOfBenefit.addItem Element
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
  private addItem_?: ExplanationOfBenefitAddItemComponent[] | undefined;

  /**
   * ExplanationOfBenefit.adjudication Element
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
  private adjudication?: ExplanationOfBenefitItemAdjudicationComponent[] | undefined;

  /**
   * ExplanationOfBenefit.total Element
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
  private total?: ExplanationOfBenefitTotalComponent[] | undefined;

  /**
   * ExplanationOfBenefit.payment Element
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
  private payment?: ExplanationOfBenefitPaymentComponent | undefined;

  /**
   * ExplanationOfBenefit.formCode Element
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
   * ExplanationOfBenefit.form Element
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
   * ExplanationOfBenefit.processNote Element
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
  private processNote?: ExplanationOfBenefitProcessNoteComponent[] | undefined;

  /**
   * ExplanationOfBenefit.benefitPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the benefits are applicable
   * - **Definition:** The term of the benefits documented in this response.
   * - **Comment:** Not applicable when use=claim.
   * - **Requirements:** Needed as coverages may be multi-year while benefits tend to be annual therefore a separate expression of the benefit period is needed.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private benefitPeriod?: Period | undefined;

  /**
   * ExplanationOfBenefit.benefitBalance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Balance by Benefit Category
   * - **Definition:** Balance by Benefit Category.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private benefitBalance?: ExplanationOfBenefitBenefitBalanceComponent[] | undefined;

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
      const optErrMsg = `Invalid ExplanationOfBenefit.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link ExplanationofbenefitStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ExplanationofbenefitStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ExplanationOfBenefit.status`;
      assertEnumCodeType<ExplanationofbenefitStatusEnum>(enumType, ExplanationofbenefitStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ExplanationofbenefitStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ExplanationofbenefitStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.explanationofbenefitStatusEnum);
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
   * @see CodeSystem Enumeration: {@link ExplanationofbenefitStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ExplanationofbenefitStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.explanationofbenefitStatusEnum);
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
      const optErrMsg = `Invalid ExplanationOfBenefit.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.subType; Provided element is not an instance of CodeableConcept.`;
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
  public setUseEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ExplanationOfBenefit.use`;
      assertEnumCodeType<ClaimUseEnum>(enumType, ClaimUseEnum, errMsgPrefix);
      this.use = enumType;
    } else {
      this.use = null;
    }
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
  public setUseElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.use; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.use = new EnumCodeType(element, this.claimUseEnum);
    } else {
      this.use = null;
    }
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
  public setUse(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.use (${String(value)})`;
      this.use = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.claimUseEnum);
    } else {
      this.use = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUse(): boolean {
    return this.hasUseEnumType();
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.patient', [
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
      const optErrMsg = `Invalid ExplanationOfBenefit.billablePeriod; Provided element is not an instance of Period.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.created; Provided value is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.created (${String(value)})`;
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
   * @returns the `enterer` property value as a Reference object; else an empty Reference object
   */
  public getEnterer(): Reference {
    return this.enterer ?? new Reference();
  }

  /**
   * Assigns the provided Enterer object value to the `enterer` property.
   *
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.enterer', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `enterer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.enterer', [
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
   * @returns the `insurer` property value as a Reference object if defined; else an empty Reference object
   */
  public getInsurer(): Reference {
    return this.insurer ?? new Reference();
  }

  /**
   * Assigns the provided Insurer object value to the `insurer` property.
   *
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.insurer', ['Organization',])`
   *
   * @param value - the `insurer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.insurer', [
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
   * @returns the `provider` property value as a Reference object if defined; else an empty Reference object
   */
  public getProvider(): Reference {
    return this.provider ?? new Reference();
  }

  /**
   * Assigns the provided Provider object value to the `provider` property.
   *
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.provider', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `provider` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.provider', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setProvider(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.provider = value;
    } else {
      this.provider = null;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.priority; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `fundsReserveRequested` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFundsReserveRequested(): CodeableConcept {
    return this.fundsReserveRequested ?? new CodeableConcept();
  }

  /**
   * Assigns the provided FundsReserveRequested object value to the `fundsReserveRequested` property.
   *
   * @param value - the `fundsReserveRequested` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFundsReserveRequested(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.fundsReserveRequested; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.fundsReserveRequested = value;
    } else {
      this.fundsReserveRequested = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `fundsReserveRequested` property exists and has a value; `false` otherwise
   */
  public hasFundsReserveRequested(): boolean {
    return isDefined<CodeableConcept>(this.fundsReserveRequested) && !this.fundsReserveRequested.isEmpty();
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
      const optErrMsg = `Invalid ExplanationOfBenefit.fundsReserve; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `related` property value as a ExplanationOfBenefitRelatedComponent array
   */
  public getRelated(): ExplanationOfBenefitRelatedComponent[] {
    return this.related ?? ([] as ExplanationOfBenefitRelatedComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitRelatedComponent array value to the `related` property.
   *
   * @param value - the `related` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelated(value: ExplanationOfBenefitRelatedComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitRelatedComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.related; Provided value array has an element that is not an instance of ExplanationOfBenefitRelatedComponent.`;
      assertFhirTypeList<ExplanationOfBenefitRelatedComponent>(value, ExplanationOfBenefitRelatedComponent, optErrMsg);
      this.related = value;
    } else {
      this.related = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitRelatedComponent value to the `related` array property.
   *
   * @param value - the `related` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelated(value: ExplanationOfBenefitRelatedComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitRelatedComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.related; Provided element is not an instance of ExplanationOfBenefitRelatedComponent.`;
      assertFhirType<ExplanationOfBenefitRelatedComponent>(value, ExplanationOfBenefitRelatedComponent, optErrMsg);
      this.initRelated();
      this.related?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `related` property exists and has a value; `false` otherwise
   */
  public hasRelated(): boolean {
    return isDefinedList<ExplanationOfBenefitRelatedComponent>(this.related) && this.related.some((item: ExplanationOfBenefitRelatedComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `related` property
   */
  private initRelated(): void {
    if(!this.hasRelated()) {
      this.related = [] as ExplanationOfBenefitRelatedComponent[];
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.prescription', ['MedicationRequest','VisionPrescription',])`
   *
   * @param value - the `prescription` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.prescription', [
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.originalPrescription', ['MedicationRequest',])`
   *
   * @param value - the `originalPrescription` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.originalPrescription', [
    'MedicationRequest',
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
   * @returns the `payee` property value as a ExplanationOfBenefitPayeeComponent object if defined; else an empty ExplanationOfBenefitPayeeComponent object
   */
  public getPayee(): ExplanationOfBenefitPayeeComponent {
    return this.payee ?? new ExplanationOfBenefitPayeeComponent();
  }

  /**
   * Assigns the provided Payee object value to the `payee` property.
   *
   * @param value - the `payee` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPayee(value: ExplanationOfBenefitPayeeComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitPayeeComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.payee; Provided element is not an instance of ExplanationOfBenefitPayeeComponent.`;
      assertFhirType<ExplanationOfBenefitPayeeComponent>(value, ExplanationOfBenefitPayeeComponent, optErrMsg);
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
    return isDefined<ExplanationOfBenefitPayeeComponent>(this.payee) && !this.payee.isEmpty();
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.referral', ['ServiceRequest',])`
   *
   * @param value - the `referral` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.referral', [
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.facility', ['Location',])`
   *
   * @param value - the `facility` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.facility', [
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
   * @returns the `claim` property value as a Reference object; else an empty Reference object
   */
  public getClaim(): Reference {
    return this.claim ?? new Reference();
  }

  /**
   * Assigns the provided Claim object value to the `claim` property.
   *
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.claim', ['Claim',])`
   *
   * @param value - the `claim` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.claim', [
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
   * @returns the `claimResponse` property value as a Reference object; else an empty Reference object
   */
  public getClaimResponse(): Reference {
    return this.claimResponse ?? new Reference();
  }

  /**
   * Assigns the provided ClaimResponse object value to the `claimResponse` property.
   *
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.claimResponse', ['ClaimResponse',])`
   *
   * @param value - the `claimResponse` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.claimResponse', [
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
      const errMsgPrefix = `Invalid ExplanationOfBenefit.outcome`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.outcome; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.outcome (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.disposition; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.disposition (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.preAuthRef; Provided value array has an element that is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.preAuthRef; Provided element is not an instance of StringType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.preAuthRef array item (${String(preAuthRefValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.preAuthRef array item (${String(value)})`;
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
   * @returns the `preAuthRefPeriod` property value as a Period array
   */
  public getPreAuthRefPeriod(): Period[] {
    return this.preAuthRefPeriod ?? ([] as Period[]);
  }

  /**
   * Assigns the provided Period array value to the `preAuthRefPeriod` property.
   *
   * @param value - the `preAuthRefPeriod` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPreAuthRefPeriod(value: Period[] | undefined): this {
    if (isDefinedList<Period>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.preAuthRefPeriod; Provided value array has an element that is not an instance of Period.`;
      assertFhirTypeList<Period>(value, Period, optErrMsg);
      this.preAuthRefPeriod = value;
    } else {
      this.preAuthRefPeriod = undefined;
    }
    return this;
  }

  /**
   * Add the provided Period value to the `preAuthRefPeriod` array property.
   *
   * @param value - the `preAuthRefPeriod` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPreAuthRefPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.preAuthRefPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.initPreAuthRefPeriod();
      this.preAuthRefPeriod?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `preAuthRefPeriod` property exists and has a value; `false` otherwise
   */
  public hasPreAuthRefPeriod(): boolean {
    return isDefinedList<Period>(this.preAuthRefPeriod) && this.preAuthRefPeriod.some((item: Period) => !item.isEmpty());
  }

  /**
   * Initialize the `preAuthRefPeriod` property
   */
  private initPreAuthRefPeriod(): void {
    if(!this.hasPreAuthRefPeriod()) {
      this.preAuthRefPeriod = [] as Period[];
    }
  }

  /**
   * @returns the `careTeam` property value as a ExplanationOfBenefitCareTeamComponent array
   */
  public getCareTeam(): ExplanationOfBenefitCareTeamComponent[] {
    return this.careTeam ?? ([] as ExplanationOfBenefitCareTeamComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitCareTeamComponent array value to the `careTeam` property.
   *
   * @param value - the `careTeam` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCareTeam(value: ExplanationOfBenefitCareTeamComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitCareTeamComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.careTeam; Provided value array has an element that is not an instance of ExplanationOfBenefitCareTeamComponent.`;
      assertFhirTypeList<ExplanationOfBenefitCareTeamComponent>(value, ExplanationOfBenefitCareTeamComponent, optErrMsg);
      this.careTeam = value;
    } else {
      this.careTeam = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitCareTeamComponent value to the `careTeam` array property.
   *
   * @param value - the `careTeam` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCareTeam(value: ExplanationOfBenefitCareTeamComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitCareTeamComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.careTeam; Provided element is not an instance of ExplanationOfBenefitCareTeamComponent.`;
      assertFhirType<ExplanationOfBenefitCareTeamComponent>(value, ExplanationOfBenefitCareTeamComponent, optErrMsg);
      this.initCareTeam();
      this.careTeam?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `careTeam` property exists and has a value; `false` otherwise
   */
  public hasCareTeam(): boolean {
    return isDefinedList<ExplanationOfBenefitCareTeamComponent>(this.careTeam) && this.careTeam.some((item: ExplanationOfBenefitCareTeamComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `careTeam` property
   */
  private initCareTeam(): void {
    if(!this.hasCareTeam()) {
      this.careTeam = [] as ExplanationOfBenefitCareTeamComponent[];
    }
  }

  /**
   * @returns the `supportingInfo` property value as a ExplanationOfBenefitSupportingInfoComponent array
   */
  public getSupportingInfo(): ExplanationOfBenefitSupportingInfoComponent[] {
    return this.supportingInfo ?? ([] as ExplanationOfBenefitSupportingInfoComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitSupportingInfoComponent array value to the `supportingInfo` property.
   *
   * @param value - the `supportingInfo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSupportingInfo(value: ExplanationOfBenefitSupportingInfoComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitSupportingInfoComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.supportingInfo; Provided value array has an element that is not an instance of ExplanationOfBenefitSupportingInfoComponent.`;
      assertFhirTypeList<ExplanationOfBenefitSupportingInfoComponent>(value, ExplanationOfBenefitSupportingInfoComponent, optErrMsg);
      this.supportingInfo = value;
    } else {
      this.supportingInfo = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitSupportingInfoComponent value to the `supportingInfo` array property.
   *
   * @param value - the `supportingInfo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSupportingInfo(value: ExplanationOfBenefitSupportingInfoComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitSupportingInfoComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.supportingInfo; Provided element is not an instance of ExplanationOfBenefitSupportingInfoComponent.`;
      assertFhirType<ExplanationOfBenefitSupportingInfoComponent>(value, ExplanationOfBenefitSupportingInfoComponent, optErrMsg);
      this.initSupportingInfo();
      this.supportingInfo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInfo` property exists and has a value; `false` otherwise
   */
  public hasSupportingInfo(): boolean {
    return isDefinedList<ExplanationOfBenefitSupportingInfoComponent>(this.supportingInfo) && this.supportingInfo.some((item: ExplanationOfBenefitSupportingInfoComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `supportingInfo` property
   */
  private initSupportingInfo(): void {
    if(!this.hasSupportingInfo()) {
      this.supportingInfo = [] as ExplanationOfBenefitSupportingInfoComponent[];
    }
  }

  /**
   * @returns the `diagnosis` property value as a ExplanationOfBenefitDiagnosisComponent array
   */
  public getDiagnosis(): ExplanationOfBenefitDiagnosisComponent[] {
    return this.diagnosis ?? ([] as ExplanationOfBenefitDiagnosisComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitDiagnosisComponent array value to the `diagnosis` property.
   *
   * @param value - the `diagnosis` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDiagnosis(value: ExplanationOfBenefitDiagnosisComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitDiagnosisComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.diagnosis; Provided value array has an element that is not an instance of ExplanationOfBenefitDiagnosisComponent.`;
      assertFhirTypeList<ExplanationOfBenefitDiagnosisComponent>(value, ExplanationOfBenefitDiagnosisComponent, optErrMsg);
      this.diagnosis = value;
    } else {
      this.diagnosis = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitDiagnosisComponent value to the `diagnosis` array property.
   *
   * @param value - the `diagnosis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDiagnosis(value: ExplanationOfBenefitDiagnosisComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitDiagnosisComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.diagnosis; Provided element is not an instance of ExplanationOfBenefitDiagnosisComponent.`;
      assertFhirType<ExplanationOfBenefitDiagnosisComponent>(value, ExplanationOfBenefitDiagnosisComponent, optErrMsg);
      this.initDiagnosis();
      this.diagnosis?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `diagnosis` property exists and has a value; `false` otherwise
   */
  public hasDiagnosis(): boolean {
    return isDefinedList<ExplanationOfBenefitDiagnosisComponent>(this.diagnosis) && this.diagnosis.some((item: ExplanationOfBenefitDiagnosisComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `diagnosis` property
   */
  private initDiagnosis(): void {
    if(!this.hasDiagnosis()) {
      this.diagnosis = [] as ExplanationOfBenefitDiagnosisComponent[];
    }
  }

  /**
   * @returns the `procedure` property value as a ExplanationOfBenefitProcedureComponent array
   */
  public getProcedure(): ExplanationOfBenefitProcedureComponent[] {
    return this.procedure ?? ([] as ExplanationOfBenefitProcedureComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitProcedureComponent array value to the `procedure` property.
   *
   * @param value - the `procedure` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcedure(value: ExplanationOfBenefitProcedureComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitProcedureComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.procedure; Provided value array has an element that is not an instance of ExplanationOfBenefitProcedureComponent.`;
      assertFhirTypeList<ExplanationOfBenefitProcedureComponent>(value, ExplanationOfBenefitProcedureComponent, optErrMsg);
      this.procedure = value;
    } else {
      this.procedure = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitProcedureComponent value to the `procedure` array property.
   *
   * @param value - the `procedure` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProcedure(value: ExplanationOfBenefitProcedureComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitProcedureComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.procedure; Provided element is not an instance of ExplanationOfBenefitProcedureComponent.`;
      assertFhirType<ExplanationOfBenefitProcedureComponent>(value, ExplanationOfBenefitProcedureComponent, optErrMsg);
      this.initProcedure();
      this.procedure?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `procedure` property exists and has a value; `false` otherwise
   */
  public hasProcedure(): boolean {
    return isDefinedList<ExplanationOfBenefitProcedureComponent>(this.procedure) && this.procedure.some((item: ExplanationOfBenefitProcedureComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `procedure` property
   */
  private initProcedure(): void {
    if(!this.hasProcedure()) {
      this.procedure = [] as ExplanationOfBenefitProcedureComponent[];
    }
  }

  /**
   * @returns the `precedence` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getPrecedenceElement(): PositiveIntType {
    return this.precedence ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `precedence` property.
   *
   * @param element - the `precedence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPrecedenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.precedence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.precedence = element;
    } else {
      this.precedence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `precedence` property exists and has a value; `false` otherwise
   */
  public hasPrecedenceElement(): boolean {
    return isDefined<PositiveIntType>(this.precedence) && !this.precedence.isEmpty();
  }

  /**
   * @returns the `precedence` property value as a fhirPositiveInt if defined; else undefined
   */
  public getPrecedence(): fhirPositiveInt | undefined {
    return this.precedence?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `precedence` property.
   *
   * @param value - the `precedence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPrecedence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.precedence (${String(value)})`;
      this.precedence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.precedence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `precedence` property exists and has a value; `false` otherwise
   */
  public hasPrecedence(): boolean {
    return this.hasPrecedenceElement();
  }

  /**
   * @returns the `insurance` property value as a ExplanationOfBenefitInsuranceComponent array
   */
  public getInsurance(): ExplanationOfBenefitInsuranceComponent[] {
    return this.insurance ?? ([] as ExplanationOfBenefitInsuranceComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitInsuranceComponent array value to the `insurance` property.
   *
   * @param value - the `insurance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInsurance(value: ExplanationOfBenefitInsuranceComponent[] | undefined | null): this {
    if (isDefinedList<ExplanationOfBenefitInsuranceComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.insurance; Provided value array has an element that is not an instance of ExplanationOfBenefitInsuranceComponent.`;
      assertFhirTypeList<ExplanationOfBenefitInsuranceComponent>(value, ExplanationOfBenefitInsuranceComponent, optErrMsg);
      this.insurance = value;
    } else {
      this.insurance = null;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitInsuranceComponent value to the `insurance` array property.
   *
   * @param value - the `insurance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInsurance(value: ExplanationOfBenefitInsuranceComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitInsuranceComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.insurance; Provided element is not an instance of ExplanationOfBenefitInsuranceComponent.`;
      assertFhirType<ExplanationOfBenefitInsuranceComponent>(value, ExplanationOfBenefitInsuranceComponent, optErrMsg);
      this.initInsurance();
      this.insurance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `insurance` property exists and has a value; `false` otherwise
   */
  public hasInsurance(): boolean {
    return isDefinedList<ExplanationOfBenefitInsuranceComponent>(this.insurance) && this.insurance.some((item: ExplanationOfBenefitInsuranceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `insurance` property
   */
  private initInsurance(): void {
    if(!this.hasInsurance()) {
      this.insurance = [] as ExplanationOfBenefitInsuranceComponent[];
    }
  }

  /**
   * @returns the `accident` property value as a ExplanationOfBenefitAccidentComponent object if defined; else an empty ExplanationOfBenefitAccidentComponent object
   */
  public getAccident(): ExplanationOfBenefitAccidentComponent {
    return this.accident ?? new ExplanationOfBenefitAccidentComponent();
  }

  /**
   * Assigns the provided Accident object value to the `accident` property.
   *
   * @param value - the `accident` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAccident(value: ExplanationOfBenefitAccidentComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitAccidentComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.accident; Provided element is not an instance of ExplanationOfBenefitAccidentComponent.`;
      assertFhirType<ExplanationOfBenefitAccidentComponent>(value, ExplanationOfBenefitAccidentComponent, optErrMsg);
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
    return isDefined<ExplanationOfBenefitAccidentComponent>(this.accident) && !this.accident.isEmpty();
  }

  /**
   * @returns the `item` property value as a ExplanationOfBenefitItemComponent array
   */
  public getItem(): ExplanationOfBenefitItemComponent[] {
    return this.item ?? ([] as ExplanationOfBenefitItemComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitItemComponent array value to the `item` property.
   *
   * @param value - the `item` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: ExplanationOfBenefitItemComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitItemComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item; Provided value array has an element that is not an instance of ExplanationOfBenefitItemComponent.`;
      assertFhirTypeList<ExplanationOfBenefitItemComponent>(value, ExplanationOfBenefitItemComponent, optErrMsg);
      this.item = value;
    } else {
      this.item = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitItemComponent value to the `item` array property.
   *
   * @param value - the `item` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addItem(value: ExplanationOfBenefitItemComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitItemComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item; Provided element is not an instance of ExplanationOfBenefitItemComponent.`;
      assertFhirType<ExplanationOfBenefitItemComponent>(value, ExplanationOfBenefitItemComponent, optErrMsg);
      this.initItem();
      this.item?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefinedList<ExplanationOfBenefitItemComponent>(this.item) && this.item.some((item: ExplanationOfBenefitItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `item` property
   */
  private initItem(): void {
    if(!this.hasItem()) {
      this.item = [] as ExplanationOfBenefitItemComponent[];
    }
  }

  /**
   * @returns the `addItem_` property value as a ExplanationOfBenefitAddItemComponent array
   */
  public getAddItem(): ExplanationOfBenefitAddItemComponent[] {
    return this.addItem_ ?? ([] as ExplanationOfBenefitAddItemComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitAddItemComponent array value to the `addItem_` property.
   *
   * @param value - the `addItem_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAddItem(value: ExplanationOfBenefitAddItemComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitAddItemComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem; Provided value array has an element that is not an instance of ExplanationOfBenefitAddItemComponent.`;
      assertFhirTypeList<ExplanationOfBenefitAddItemComponent>(value, ExplanationOfBenefitAddItemComponent, optErrMsg);
      this.addItem_ = value;
    } else {
      this.addItem_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitAddItemComponent value to the `addItem_` array property.
   *
   * @param value - the `addItem_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAddItem(value: ExplanationOfBenefitAddItemComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitAddItemComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem; Provided element is not an instance of ExplanationOfBenefitAddItemComponent.`;
      assertFhirType<ExplanationOfBenefitAddItemComponent>(value, ExplanationOfBenefitAddItemComponent, optErrMsg);
      this.initAddItem();
      this.addItem_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `addItem_` property exists and has a value; `false` otherwise
   */
  public hasAddItem(): boolean {
    return isDefinedList<ExplanationOfBenefitAddItemComponent>(this.addItem_) && this.addItem_.some((item: ExplanationOfBenefitAddItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `addItem_` property
   */
  private initAddItem(): void {
    if(!this.hasAddItem()) {
      this.addItem_ = [] as ExplanationOfBenefitAddItemComponent[];
    }
  }

  /**
   * @returns the `adjudication` property value as a ExplanationOfBenefitItemAdjudicationComponent array
   */
  public getAdjudication(): ExplanationOfBenefitItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ExplanationOfBenefitItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.adjudication; Provided value array has an element that is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirTypeList<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.adjudication; Provided element is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirType<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ExplanationOfBenefitItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ExplanationOfBenefitItemAdjudicationComponent[];
    }
  }

  /**
   * @returns the `total` property value as a ExplanationOfBenefitTotalComponent array
   */
  public getTotal(): ExplanationOfBenefitTotalComponent[] {
    return this.total ?? ([] as ExplanationOfBenefitTotalComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitTotalComponent array value to the `total` property.
   *
   * @param value - the `total` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTotal(value: ExplanationOfBenefitTotalComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitTotalComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.total; Provided value array has an element that is not an instance of ExplanationOfBenefitTotalComponent.`;
      assertFhirTypeList<ExplanationOfBenefitTotalComponent>(value, ExplanationOfBenefitTotalComponent, optErrMsg);
      this.total = value;
    } else {
      this.total = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitTotalComponent value to the `total` array property.
   *
   * @param value - the `total` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTotal(value: ExplanationOfBenefitTotalComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitTotalComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.total; Provided element is not an instance of ExplanationOfBenefitTotalComponent.`;
      assertFhirType<ExplanationOfBenefitTotalComponent>(value, ExplanationOfBenefitTotalComponent, optErrMsg);
      this.initTotal();
      this.total?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `total` property exists and has a value; `false` otherwise
   */
  public hasTotal(): boolean {
    return isDefinedList<ExplanationOfBenefitTotalComponent>(this.total) && this.total.some((item: ExplanationOfBenefitTotalComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `total` property
   */
  private initTotal(): void {
    if(!this.hasTotal()) {
      this.total = [] as ExplanationOfBenefitTotalComponent[];
    }
  }

  /**
   * @returns the `payment` property value as a ExplanationOfBenefitPaymentComponent object if defined; else an empty ExplanationOfBenefitPaymentComponent object
   */
  public getPayment(): ExplanationOfBenefitPaymentComponent {
    return this.payment ?? new ExplanationOfBenefitPaymentComponent();
  }

  /**
   * Assigns the provided Payment object value to the `payment` property.
   *
   * @param value - the `payment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPayment(value: ExplanationOfBenefitPaymentComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitPaymentComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.payment; Provided element is not an instance of ExplanationOfBenefitPaymentComponent.`;
      assertFhirType<ExplanationOfBenefitPaymentComponent>(value, ExplanationOfBenefitPaymentComponent, optErrMsg);
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
    return isDefined<ExplanationOfBenefitPaymentComponent>(this.payment) && !this.payment.isEmpty();
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
      const optErrMsg = `Invalid ExplanationOfBenefit.formCode; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.form; Provided element is not an instance of Attachment.`;
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
   * @returns the `processNote` property value as a ExplanationOfBenefitProcessNoteComponent array
   */
  public getProcessNote(): ExplanationOfBenefitProcessNoteComponent[] {
    return this.processNote ?? ([] as ExplanationOfBenefitProcessNoteComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitProcessNoteComponent array value to the `processNote` property.
   *
   * @param value - the `processNote` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcessNote(value: ExplanationOfBenefitProcessNoteComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitProcessNoteComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.processNote; Provided value array has an element that is not an instance of ExplanationOfBenefitProcessNoteComponent.`;
      assertFhirTypeList<ExplanationOfBenefitProcessNoteComponent>(value, ExplanationOfBenefitProcessNoteComponent, optErrMsg);
      this.processNote = value;
    } else {
      this.processNote = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitProcessNoteComponent value to the `processNote` array property.
   *
   * @param value - the `processNote` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProcessNote(value: ExplanationOfBenefitProcessNoteComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitProcessNoteComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.processNote; Provided element is not an instance of ExplanationOfBenefitProcessNoteComponent.`;
      assertFhirType<ExplanationOfBenefitProcessNoteComponent>(value, ExplanationOfBenefitProcessNoteComponent, optErrMsg);
      this.initProcessNote();
      this.processNote?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `processNote` property exists and has a value; `false` otherwise
   */
  public hasProcessNote(): boolean {
    return isDefinedList<ExplanationOfBenefitProcessNoteComponent>(this.processNote) && this.processNote.some((item: ExplanationOfBenefitProcessNoteComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `processNote` property
   */
  private initProcessNote(): void {
    if(!this.hasProcessNote()) {
      this.processNote = [] as ExplanationOfBenefitProcessNoteComponent[];
    }
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
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitPeriod; Provided element is not an instance of Period.`;
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
   * @returns the `benefitBalance` property value as a ExplanationOfBenefitBenefitBalanceComponent array
   */
  public getBenefitBalance(): ExplanationOfBenefitBenefitBalanceComponent[] {
    return this.benefitBalance ?? ([] as ExplanationOfBenefitBenefitBalanceComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitBenefitBalanceComponent array value to the `benefitBalance` property.
   *
   * @param value - the `benefitBalance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBenefitBalance(value: ExplanationOfBenefitBenefitBalanceComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitBenefitBalanceComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance; Provided value array has an element that is not an instance of ExplanationOfBenefitBenefitBalanceComponent.`;
      assertFhirTypeList<ExplanationOfBenefitBenefitBalanceComponent>(value, ExplanationOfBenefitBenefitBalanceComponent, optErrMsg);
      this.benefitBalance = value;
    } else {
      this.benefitBalance = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitBenefitBalanceComponent value to the `benefitBalance` array property.
   *
   * @param value - the `benefitBalance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBenefitBalance(value: ExplanationOfBenefitBenefitBalanceComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitBenefitBalanceComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance; Provided element is not an instance of ExplanationOfBenefitBenefitBalanceComponent.`;
      assertFhirType<ExplanationOfBenefitBenefitBalanceComponent>(value, ExplanationOfBenefitBenefitBalanceComponent, optErrMsg);
      this.initBenefitBalance();
      this.benefitBalance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `benefitBalance` property exists and has a value; `false` otherwise
   */
  public hasBenefitBalance(): boolean {
    return isDefinedList<ExplanationOfBenefitBenefitBalanceComponent>(this.benefitBalance) && this.benefitBalance.some((item: ExplanationOfBenefitBenefitBalanceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `benefitBalance` property
   */
  private initBenefitBalance(): void {
    if(!this.hasBenefitBalance()) {
      this.benefitBalance = [] as ExplanationOfBenefitBenefitBalanceComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExplanationOfBenefit';
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
      this.fundsReserveRequested,
      this.fundsReserve,
      this.related,
      this.prescription,
      this.originalPrescription,
      this.payee,
      this.referral,
      this.facility,
      this.claim,
      this.claimResponse,
      this.outcome,
      this.disposition,
      this.preAuthRef,
      this.preAuthRefPeriod,
      this.careTeam,
      this.supportingInfo,
      this.diagnosis,
      this.procedure,
      this.precedence,
      this.insurance,
      this.accident,
      this.item,
      this.addItem_,
      this.adjudication,
      this.total,
      this.payment,
      this.formCode,
      this.form,
      this.processNote,
      this.benefitPeriod,
      this.benefitBalance,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.type_, this.use, this.patient, this.created, this.insurer, this.provider, this.outcome, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefit {
    const dest = new ExplanationOfBenefit();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefit): void {
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
    dest.insurer = this.insurer ? this.insurer.copy() : null;
    dest.provider = this.provider ? this.provider.copy() : null;
    dest.priority = this.priority?.copy();
    dest.fundsReserveRequested = this.fundsReserveRequested?.copy();
    dest.fundsReserve = this.fundsReserve?.copy();
    const relatedList = copyListValues<ExplanationOfBenefitRelatedComponent>(this.related);
    dest.related = relatedList.length === 0 ? undefined : relatedList;
    dest.prescription = this.prescription?.copy();
    dest.originalPrescription = this.originalPrescription?.copy();
    dest.payee = this.payee?.copy();
    dest.referral = this.referral?.copy();
    dest.facility = this.facility?.copy();
    dest.claim = this.claim?.copy();
    dest.claimResponse = this.claimResponse?.copy();
    dest.outcome = this.outcome ? this.outcome.copy() : null;
    dest.disposition = this.disposition?.copy();
    const preAuthRefList = copyListValues<StringType>(this.preAuthRef);
    dest.preAuthRef = preAuthRefList.length === 0 ? undefined : preAuthRefList;
    const preAuthRefPeriodList = copyListValues<Period>(this.preAuthRefPeriod);
    dest.preAuthRefPeriod = preAuthRefPeriodList.length === 0 ? undefined : preAuthRefPeriodList;
    const careTeamList = copyListValues<ExplanationOfBenefitCareTeamComponent>(this.careTeam);
    dest.careTeam = careTeamList.length === 0 ? undefined : careTeamList;
    const supportingInfoList = copyListValues<ExplanationOfBenefitSupportingInfoComponent>(this.supportingInfo);
    dest.supportingInfo = supportingInfoList.length === 0 ? undefined : supportingInfoList;
    const diagnosisList = copyListValues<ExplanationOfBenefitDiagnosisComponent>(this.diagnosis);
    dest.diagnosis = diagnosisList.length === 0 ? undefined : diagnosisList;
    const procedureList = copyListValues<ExplanationOfBenefitProcedureComponent>(this.procedure);
    dest.procedure = procedureList.length === 0 ? undefined : procedureList;
    dest.precedence = this.precedence?.copy();
    const insuranceList = copyListValues<ExplanationOfBenefitInsuranceComponent>(this.insurance);
    dest.insurance = insuranceList.length === 0 ? null : insuranceList;
    dest.accident = this.accident?.copy();
    const itemList = copyListValues<ExplanationOfBenefitItemComponent>(this.item);
    dest.item = itemList.length === 0 ? undefined : itemList;
    const addItemList = copyListValues<ExplanationOfBenefitAddItemComponent>(this.addItem_);
    dest.addItem_ = addItemList.length === 0 ? undefined : addItemList;
    const adjudicationList = copyListValues<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication);
    dest.adjudication = adjudicationList.length === 0 ? undefined : adjudicationList;
    const totalList = copyListValues<ExplanationOfBenefitTotalComponent>(this.total);
    dest.total = totalList.length === 0 ? undefined : totalList;
    dest.payment = this.payment?.copy();
    dest.formCode = this.formCode?.copy();
    dest.form = this.form?.copy();
    const processNoteList = copyListValues<ExplanationOfBenefitProcessNoteComponent>(this.processNote);
    dest.processNote = processNoteList.length === 0 ? undefined : processNoteList;
    dest.benefitPeriod = this.benefitPeriod?.copy();
    const benefitBalanceList = copyListValues<ExplanationOfBenefitBenefitBalanceComponent>(this.benefitBalance);
    dest.benefitBalance = benefitBalanceList.length === 0 ? undefined : benefitBalanceList;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSubType()) {
      setFhirComplexJson(this.getSubType(), 'subType', jsonObj);
    }

    if (this.hasUseElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getUseElement()!, 'use', jsonObj);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    }

    if (this.hasBillablePeriod()) {
      setFhirComplexJson(this.getBillablePeriod(), 'billablePeriod', jsonObj);
    }

    if (this.hasCreatedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getCreatedElement(), 'created', jsonObj);
    }

    if (this.hasEnterer()) {
      setFhirComplexJson(this.getEnterer(), 'enterer', jsonObj);
    }

    if (this.hasInsurer()) {
      setFhirComplexJson(this.getInsurer(), 'insurer', jsonObj);
    }

    if (this.hasProvider()) {
      setFhirComplexJson(this.getProvider(), 'provider', jsonObj);
    }

    if (this.hasPriority()) {
      setFhirComplexJson(this.getPriority(), 'priority', jsonObj);
    }

    if (this.hasFundsReserveRequested()) {
      setFhirComplexJson(this.getFundsReserveRequested(), 'fundsReserveRequested', jsonObj);
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

    if (this.hasClaim()) {
      setFhirComplexJson(this.getClaim(), 'claim', jsonObj);
    }

    if (this.hasClaimResponse()) {
      setFhirComplexJson(this.getClaimResponse(), 'claimResponse', jsonObj);
    }

    if (this.hasOutcomeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getOutcomeElement()!, 'outcome', jsonObj);
    }

    if (this.hasDispositionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDispositionElement(), 'disposition', jsonObj);
    }

    if (this.hasPreAuthRef()) {
      setFhirPrimitiveListJson(this.getPreAuthRefElement(), 'preAuthRef', jsonObj);
    }

    if (this.hasPreAuthRefPeriod()) {
      setFhirComplexListJson(this.getPreAuthRefPeriod(), 'preAuthRefPeriod', jsonObj);
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

    if (this.hasPrecedenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getPrecedenceElement(), 'precedence', jsonObj);
    }

    if (this.hasInsurance()) {
      setFhirBackboneElementListJson(this.getInsurance(), 'insurance', jsonObj);
    }

    if (this.hasAccident()) {
      setFhirBackboneElementJson(this.getAccident(), 'accident', jsonObj);
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

    if (this.hasFormCode()) {
      setFhirComplexJson(this.getFormCode(), 'formCode', jsonObj);
    }

    if (this.hasForm()) {
      setFhirComplexJson(this.getForm(), 'form', jsonObj);
    }

    if (this.hasProcessNote()) {
      setFhirBackboneElementListJson(this.getProcessNote(), 'processNote', jsonObj);
    }

    if (this.hasBenefitPeriod()) {
      setFhirComplexJson(this.getBenefitPeriod(), 'benefitPeriod', jsonObj);
    }

    if (this.hasBenefitBalance()) {
      setFhirBackboneElementListJson(this.getBenefitBalance(), 'benefitBalance', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ExplanationOfBenefitRelatedComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Prior or corollary claims
 * - **Definition:** Other claims which are related to this claim such as prior submissions or claims for related services or for the same event.
 * - **Comment:** For example,  for the original treatment and follow-up exams.
 * - **Requirements:** For workplace or other accidents it is common to relate separate claims arising from the same event.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitRelatedComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ExplanationOfBenefitRelatedComponent` JSON to instantiate the ExplanationOfBenefitRelatedComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitRelatedComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitRelatedComponent
   * @returns ExplanationOfBenefitRelatedComponent data model or undefined for `ExplanationOfBenefitRelatedComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitRelatedComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitRelatedComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitRelatedComponent();

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

    return instance;
  }

  /**
   * ExplanationOfBenefit.related.claim Element
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
   * ExplanationOfBenefit.related.relationship Element
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
   * ExplanationOfBenefit.related.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** File or case reference
   * - **Definition:** An alternate organizational reference to the case or file to which this particular claim pertains.
   * - **Comment:** For example, Property/Casualty insurer claim number or Workers Compensation case number.
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.related.claim', ['Claim',])`
   *
   * @param value - the `claim` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.related.claim', [
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
      const optErrMsg = `Invalid ExplanationOfBenefit.related.relationship; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.related.reference; Provided element is not an instance of Identifier.`;
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
    return 'ExplanationOfBenefit.related';
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
  public override copy(): ExplanationOfBenefitRelatedComponent {
    const dest = new ExplanationOfBenefitRelatedComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitRelatedComponent): void {
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
 * ExplanationOfBenefitPayeeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Recipient of benefits payable
 * - **Definition:** The party to be reimbursed for cost of the products and services according to the terms of the policy.
 * - **Comment:** Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
 * - **Requirements:** The provider needs to specify who they wish to be reimbursed and the claims processor needs express who they will reimburse.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitPayeeComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ExplanationOfBenefitPayeeComponent` JSON to instantiate the ExplanationOfBenefitPayeeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitPayeeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitPayeeComponent
   * @returns ExplanationOfBenefitPayeeComponent data model or undefined for `ExplanationOfBenefitPayeeComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitPayeeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitPayeeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitPayeeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'party';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setParty(datatype);
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.payee.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category of recipient
   * - **Definition:** Type of Party to be reimbursed: Subscriber, provider, other.
   * - **Requirements:** Need to know who should receive payment with the most common situations being the Provider (assignment of benefits) or the Subscriber.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * ExplanationOfBenefit.payee.party Element
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
      const optErrMsg = `Invalid ExplanationOfBenefit.payee.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `party` property value as a Reference object; else an empty Reference object
   */
  public getParty(): Reference {
    return this.party ?? new Reference();
  }

  /**
   * Assigns the provided Party object value to the `party` property.
   *
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.payee.party', ['Practitioner','PractitionerRole','Organization','Patient','RelatedPerson',])`
   *
   * @param value - the `party` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.payee.party', [
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
    return 'ExplanationOfBenefit.payee';
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
  public override copy(): ExplanationOfBenefitPayeeComponent {
    const dest = new ExplanationOfBenefitPayeeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitPayeeComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.party = this.party?.copy();
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

    if (this.hasParty()) {
      setFhirComplexJson(this.getParty(), 'party', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitCareTeamComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Care Team members
 * - **Definition:** The members of the team who provided the products and services.
 * - **Requirements:** Common to identify the responsible and supporting practitioners.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitCareTeamComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `ExplanationOfBenefitCareTeamComponent` JSON to instantiate the ExplanationOfBenefitCareTeamComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitCareTeamComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitCareTeamComponent
   * @returns ExplanationOfBenefitCareTeamComponent data model or undefined for `ExplanationOfBenefitCareTeamComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitCareTeamComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitCareTeamComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitCareTeamComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setSequence(null);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      instance.setSequence(null);
    }

    fieldName = 'provider';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setProvider(null);
      } else {
        instance.setProvider(datatype);
      }
    } else {
      instance.setProvider(null);
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

    return instance;
  }

  /**
   * ExplanationOfBenefit.careTeam.sequence Element
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
   * ExplanationOfBenefit.careTeam.provider Element
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
   * ExplanationOfBenefit.careTeam.responsible Element
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
   * ExplanationOfBenefit.careTeam.role Element
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
   * ExplanationOfBenefit.careTeam.qualification Element
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
   * @returns the `sequence` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getSequenceElement(): PositiveIntType {
    return this.sequence ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType | undefined | null): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.careTeam.sequence; Provided value is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.sequence = element;
    } else {
      this.sequence = null;
    }
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
  public setSequence(value: fhirPositiveInt | undefined | null): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.careTeam.sequence (${String(value)})`;
      this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.sequence = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequence(): boolean {
    return this.hasSequenceElement();
  }

  /**
   * @returns the `provider` property value as a Reference object if defined; else an empty Reference object
   */
  public getProvider(): Reference {
    return this.provider ?? new Reference();
  }

  /**
   * Assigns the provided Provider object value to the `provider` property.
   *
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.careTeam.provider', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `provider` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.careTeam.provider', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setProvider(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.provider = value;
    } else {
      this.provider = null;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.careTeam.responsible; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.careTeam.responsible (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.careTeam.role; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.careTeam.qualification; Provided element is not an instance of CodeableConcept.`;
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
    return 'ExplanationOfBenefit.careTeam';
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.sequence, this.provider, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitCareTeamComponent {
    const dest = new ExplanationOfBenefitCareTeamComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitCareTeamComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence ? this.sequence.copy() : null;
    dest.provider = this.provider ? this.provider.copy() : null;
    dest.responsible = this.responsible?.copy();
    dest.role = this.role?.copy();
    dest.qualification = this.qualification?.copy();
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

    if (this.hasSequenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement(), 'sequence', jsonObj);
    }

    if (this.hasProvider()) {
      setFhirComplexJson(this.getProvider(), 'provider', jsonObj);
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

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitSupportingInfoComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Supporting information
 * - **Definition:** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.
 * - **Comment:** Often there are multiple jurisdiction specific valuesets which are required.
 * - **Requirements:** Typically these information codes are required to support the services rendered or the adjudication of the services rendered.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitSupportingInfoComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `ExplanationOfBenefitSupportingInfoComponent` JSON to instantiate the ExplanationOfBenefitSupportingInfoComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitSupportingInfoComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitSupportingInfoComponent
   * @returns ExplanationOfBenefitSupportingInfoComponent data model or undefined for `ExplanationOfBenefitSupportingInfoComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitSupportingInfoComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitSupportingInfoComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitSupportingInfoComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = ExplanationOfBenefitSupportingInfoComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ExplanationOfBenefitSupportingInfoComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setSequence(null);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      instance.setSequence(null);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCategory(null);
      } else {
        instance.setCategory(datatype);
      }
    } else {
      instance.setCategory(null);
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
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReason(datatype);
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.supportingInfo.sequence Element
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
   * ExplanationOfBenefit.supportingInfo.category Element
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
   * ExplanationOfBenefit.supportingInfo.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of information
   * - **Definition:** System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
   * - **Comment:** This may contain the local bill type codes such as the US UB-04 bill type code.
   * - **Requirements:** Required to identify the kind of additional information.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept | undefined;

  /**
   * ExplanationOfBenefit.supportingInfo.timing[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ExplanationOfBenefit.supportingInfo.timing[x]', ['date','Period',]`
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
  @ChoiceDataTypesMeta('ExplanationOfBenefit.supportingInfo.timing[x]',[
    'date',
    'Period',
  ])
  private timing?: IDataType | undefined;

  /**
   * ExplanationOfBenefit.supportingInfo.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ExplanationOfBenefit.supportingInfo.value[x]', ['boolean','string','Quantity','Attachment','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Data to be provided
   * - **Definition:** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   * - **Comment:** Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
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
  @ChoiceDataTypesMeta('ExplanationOfBenefit.supportingInfo.value[x]',[
    'boolean',
    'string',
    'Quantity',
    'Attachment',
    'Reference',
  ])
  private value?: IDataType | undefined;

  /**
   * ExplanationOfBenefit.supportingInfo.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Explanation for the information
   * - **Definition:** Provides the reason in the situation where a reason code is required in addition to the content.
   * - **Comment:** For example: the reason for the additional stay, or why a tooth is  missing.
   * - **Requirements:** Needed when the supporting information has both a date and amount/value and requires explanation.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: Coding | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getSequenceElement(): PositiveIntType {
    return this.sequence ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType | undefined | null): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.supportingInfo.sequence; Provided value is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.sequence = element;
    } else {
      this.sequence = null;
    }
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
  public setSequence(value: fhirPositiveInt | undefined | null): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.supportingInfo.sequence (${String(value)})`;
      this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.sequence = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequence(): boolean {
    return this.hasSequenceElement();
  }

  /**
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.supportingInfo.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = null;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.supportingInfo.code; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ChoiceDataTypes('ExplanationOfBenefit.supportingInfo.timing[x]')`
   *
   * @param value - the `timing` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ExplanationOfBenefit.supportingInfo.timing[x]')
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
        `DataType mismatch for ExplanationOfBenefit.supportingInfo.timing[x]: Expected DateType but encountered ${this.timing.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.supportingInfo.timing[x]: Expected Period but encountered ${this.timing.fhirType()}`,
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
   * @decorator `@ChoiceDataTypes('ExplanationOfBenefit.supportingInfo.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ExplanationOfBenefit.supportingInfo.value[x]')
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
        `DataType mismatch for ExplanationOfBenefit.supportingInfo.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.supportingInfo.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.supportingInfo.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.supportingInfo.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.supportingInfo.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
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
   * @returns the `reason` property value as a Coding object if defined; else an empty Coding object
   */
  public getReason(): Coding {
    return this.reason ?? new Coding();
  }

  /**
   * Assigns the provided Reason object value to the `reason` property.
   *
   * @param value - the `reason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.supportingInfo.reason; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
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
    return isDefined<Coding>(this.reason) && !this.reason.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExplanationOfBenefit.supportingInfo';
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.sequence, this.category, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitSupportingInfoComponent {
    const dest = new ExplanationOfBenefitSupportingInfoComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitSupportingInfoComponent): void {
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
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasSequenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement(), 'sequence', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
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

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitDiagnosisComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Pertinent diagnosis information
 * - **Definition:** Information about diagnoses relevant to the claim items.
 * - **Requirements:** Required for the adjudication by provided context for the services and product listed.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitDiagnosisComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `ExplanationOfBenefitDiagnosisComponent` JSON to instantiate the ExplanationOfBenefitDiagnosisComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitDiagnosisComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitDiagnosisComponent
   * @returns ExplanationOfBenefitDiagnosisComponent data model or undefined for `ExplanationOfBenefitDiagnosisComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitDiagnosisComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitDiagnosisComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitDiagnosisComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = ExplanationOfBenefitDiagnosisComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ExplanationOfBenefitDiagnosisComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setSequence(null);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      instance.setSequence(null);
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
      instance.setDiagnosis(null);
    } else {
      instance.setDiagnosis(diagnosis);
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

    return instance;
  }

  /**
   * ExplanationOfBenefit.diagnosis.sequence Element
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
   * ExplanationOfBenefit.diagnosis.diagnosis[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ExplanationOfBenefit.diagnosis.diagnosis[x]', ['CodeableConcept','Reference',]`
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
  @ChoiceDataTypesMeta('ExplanationOfBenefit.diagnosis.diagnosis[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private diagnosis: IDataType | null;

  /**
   * ExplanationOfBenefit.diagnosis.type Element
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
   * ExplanationOfBenefit.diagnosis.onAdmission Element
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
   * ExplanationOfBenefit.diagnosis.packageCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Package billing code
   * - **Definition:** A package billing code or bundle code used to group products and services to a particular health condition (such as heart attack) which is based on a predetermined grouping code system.
   * - **Comment:** For example, DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardio-infarction and a DRG for HeartAttack would assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
   * - **Requirements:** Required to relate the current  diagnosis to a package billing code that is then referenced on the individual claim items which are specific to the health condition covered by the package code.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private packageCode?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getSequenceElement(): PositiveIntType {
    return this.sequence ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType | undefined | null): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.diagnosis.sequence; Provided value is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.sequence = element;
    } else {
      this.sequence = null;
    }
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
  public setSequence(value: fhirPositiveInt | undefined | null): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.diagnosis.sequence (${String(value)})`;
      this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.sequence = null;
    }
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
   * @decorator `@ChoiceDataTypes('ExplanationOfBenefit.diagnosis.diagnosis[x]')`
   *
   * @param value - the `diagnosis` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ExplanationOfBenefit.diagnosis.diagnosis[x]')
  public setDiagnosis(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.diagnosis = value;
    } else {
      this.diagnosis = null;
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
   * @returns the `diagnosis` property value as a CodeableConcept object if defined; else null
   */
  public getDiagnosisCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.diagnosis)) {
      return null;
    }
    if (!(this.diagnosis instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for ExplanationOfBenefit.diagnosis.diagnosis[x]: Expected CodeableConcept but encountered ${this.diagnosis.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.diagnosis.diagnosis[x]: Expected Reference but encountered ${this.diagnosis.fhirType()}`,
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
      const optErrMsg = `Invalid ExplanationOfBenefit.diagnosis.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.diagnosis.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.diagnosis.onAdmission; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.diagnosis.packageCode; Provided element is not an instance of CodeableConcept.`;
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
    return 'ExplanationOfBenefit.diagnosis';
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.sequence, this.diagnosis, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitDiagnosisComponent {
    const dest = new ExplanationOfBenefitDiagnosisComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitDiagnosisComponent): void {
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
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasSequenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement(), 'sequence', jsonObj);
    }

    if (this.hasDiagnosis()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDiagnosis()!, 'diagnosis', jsonObj);
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

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitProcedureComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Clinical procedures performed
 * - **Definition:** Procedures performed on the patient relevant to the billing items with the claim.
 * - **Requirements:** The specific clinical invention are sometimes required to be provided to justify billing a greater than customary amount for a service.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitProcedureComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `ExplanationOfBenefitProcedureComponent` JSON to instantiate the ExplanationOfBenefitProcedureComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitProcedureComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitProcedureComponent
   * @returns ExplanationOfBenefitProcedureComponent data model or undefined for `ExplanationOfBenefitProcedureComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitProcedureComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitProcedureComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitProcedureComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ExplanationOfBenefitProcedureComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ExplanationOfBenefitProcedureComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setSequence(null);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      instance.setSequence(null);
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
      instance.setProcedure(null);
    } else {
      instance.setProcedure(procedure);
    }

    fieldName = 'udi';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addUdi(datatype);
          }
        });
      }
  }

    return instance;
  }

  /**
   * ExplanationOfBenefit.procedure.sequence Element
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
   * ExplanationOfBenefit.procedure.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category of Procedure
   * - **Definition:** When the condition was observed or the relative ranking.
   * - **Requirements:** Often required to capture a particular diagnosis, for example: primary or discharge.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * ExplanationOfBenefit.procedure.date Element
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
   * ExplanationOfBenefit.procedure.procedure[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ExplanationOfBenefit.procedure.procedure[x]', ['CodeableConcept','Reference',]`
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
  @ChoiceDataTypesMeta('ExplanationOfBenefit.procedure.procedure[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private procedure: IDataType | null;

  /**
   * ExplanationOfBenefit.procedure.udi Element
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
   * @returns the `sequence` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getSequenceElement(): PositiveIntType {
    return this.sequence ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType | undefined | null): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.procedure.sequence; Provided value is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.sequence = element;
    } else {
      this.sequence = null;
    }
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
  public setSequence(value: fhirPositiveInt | undefined | null): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.procedure.sequence (${String(value)})`;
      this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.sequence = null;
    }
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
      const optErrMsg = `Invalid ExplanationOfBenefit.procedure.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.procedure.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.procedure.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.procedure.date (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('ExplanationOfBenefit.procedure.procedure[x]')`
   *
   * @param value - the `procedure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ExplanationOfBenefit.procedure.procedure[x]')
  public setProcedure(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.procedure = value;
    } else {
      this.procedure = null;
    }
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
        `DataType mismatch for ExplanationOfBenefit.procedure.procedure[x]: Expected CodeableConcept but encountered ${this.procedure.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.procedure.procedure[x]: Expected Reference but encountered ${this.procedure.fhirType()}`,
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.procedure.udi', ['Device',])`
   *
   * @param value - the `udi` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.procedure.udi', [
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.procedure.udi', ['Device',])`
   *
   * @param value - the `udi` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.procedure.udi', [
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
    return 'ExplanationOfBenefit.procedure';
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.sequence, this.procedure, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitProcedureComponent {
    const dest = new ExplanationOfBenefitProcedureComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitProcedureComponent): void {
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
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasSequenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement(), 'sequence', jsonObj);
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
    }

    if (this.hasUdi()) {
      setFhirComplexListJson(this.getUdi(), 'udi', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitInsuranceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Patient insurance information
 * - **Definition:** Financial instruments for reimbursement for the health care products and services specified on the claim.
 * - **Comment:** All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local \'coordination of benefit\' rules. One coverage (and only one) with \'focal=true\' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where \'Coverage.subrogation=false\', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 * - **Requirements:** At least one insurer is required for a claim to be a claim.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitInsuranceComponent extends BackboneElement implements IBackboneElement {
  constructor(focal: BooleanType | fhirBoolean | null = null, coverage: Reference | null = null) {
    super();

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
   * Parse the provided `ExplanationOfBenefitInsuranceComponent` JSON to instantiate the ExplanationOfBenefitInsuranceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitInsuranceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitInsuranceComponent
   * @returns ExplanationOfBenefitInsuranceComponent data model or undefined for `ExplanationOfBenefitInsuranceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitInsuranceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitInsuranceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitInsuranceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'focal';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setFocal(null);
      } else {
        instance.setFocalElement(datatype);
      }
    } else {
      instance.setFocal(null);
    }

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

    fieldName = 'preAuthRef';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.insurance.focal Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coverage to be used for adjudication
   * - **Definition:** A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true.
   * - **Comment:** A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example, a person may also be covered by their spouse\'s policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
   * - **Requirements:** To identify which coverage in the list is being used to adjudicate this claim.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private focal: BooleanType | null;

  /**
   * ExplanationOfBenefit.insurance.coverage Element
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
   * ExplanationOfBenefit.insurance.preAuthRef Element
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
  public setFocalElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.insurance.focal; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.focal = element;
    } else {
      this.focal = null;
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
  public setFocal(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.insurance.focal (${String(value)})`;
      this.focal = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.focal = null;
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
   * @returns the `coverage` property value as a Reference object if defined; else an empty Reference object
   */
  public getCoverage(): Reference {
    return this.coverage ?? new Reference();
  }

  /**
   * Assigns the provided Coverage object value to the `coverage` property.
   *
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.insurance.coverage', ['Coverage',])`
   *
   * @param value - the `coverage` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.insurance.coverage', [
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
      const optErrMsg = `Invalid ExplanationOfBenefit.insurance.preAuthRef; Provided value array has an element that is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.insurance.preAuthRef; Provided element is not an instance of StringType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.insurance.preAuthRef array item (${String(preAuthRefValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.insurance.preAuthRef array item (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExplanationOfBenefit.insurance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.focal,
      this.coverage,
      this.preAuthRef,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.focal, this.coverage, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitInsuranceComponent {
    const dest = new ExplanationOfBenefitInsuranceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitInsuranceComponent): void {
    super.copyValues(dest);
    dest.focal = this.focal ? this.focal.copy() : null;
    dest.coverage = this.coverage ? this.coverage.copy() : null;
    const preAuthRefList = copyListValues<StringType>(this.preAuthRef);
    dest.preAuthRef = preAuthRefList.length === 0 ? undefined : preAuthRefList;
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

    if (this.hasFocalElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getFocalElement(), 'focal', jsonObj);
    }

    if (this.hasCoverage()) {
      setFhirComplexJson(this.getCoverage(), 'coverage', jsonObj);
    }

    if (this.hasPreAuthRef()) {
      setFhirPrimitiveListJson(this.getPreAuthRefElement(), 'preAuthRef', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitAccidentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Details of the event
 * - **Definition:** Details of a accident which resulted in injuries which required the products and services listed in the claim.
 * - **Requirements:** When healthcare products and services are accident related, benefits may be payable under accident provisions of policies, such as automotive, etc before they are payable under normal health insurance.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitAccidentComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ExplanationOfBenefitAccidentComponent` JSON to instantiate the ExplanationOfBenefitAccidentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitAccidentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitAccidentComponent
   * @returns ExplanationOfBenefitAccidentComponent data model or undefined for `ExplanationOfBenefitAccidentComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitAccidentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitAccidentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitAccidentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = ExplanationOfBenefitAccidentComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ExplanationOfBenefitAccidentComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
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

    return instance;
  }

  /**
   * ExplanationOfBenefit.accident.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the incident occurred
   * - **Definition:** Date of an accident event  related to the products and services contained in the claim.
   * - **Comment:** The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
   * - **Requirements:** Required for audit purposes and adjudication.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private date?: DateType | undefined;

  /**
   * ExplanationOfBenefit.accident.type Element
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
   * ExplanationOfBenefit.accident.location[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ExplanationOfBenefit.accident.location[x]', ['Address','Reference',]`
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
  @ChoiceDataTypesMeta('ExplanationOfBenefit.accident.location[x]',[
    'Address',
    'Reference',
  ])
  private location?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid ExplanationOfBenefit.accident.date; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.accident.date (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.accident.type; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ChoiceDataTypes('ExplanationOfBenefit.accident.location[x]')`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ExplanationOfBenefit.accident.location[x]')
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
        `DataType mismatch for ExplanationOfBenefit.accident.location[x]: Expected Address but encountered ${this.location.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.accident.location[x]: Expected Reference but encountered ${this.location.fhirType()}`,
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
    return 'ExplanationOfBenefit.accident';
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
  public override copy(): ExplanationOfBenefitAccidentComponent {
    const dest = new ExplanationOfBenefitAccidentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitAccidentComponent): void {
    super.copyValues(dest);
    dest.date = this.date?.copy();
    dest.type_ = this.type_?.copy();
    dest.location = this.location?.copy() as IDataType;
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

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasLocation()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getLocation()!, 'location', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Product or service provided
 * - **Definition:** A claim line. Either a simple (a product or service) or a \'group\' of details which can also be a simple items or groups of sub-details.
 * - **Requirements:** The items to be processed for adjudication.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitItemComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `ExplanationOfBenefitItemComponent` JSON to instantiate the ExplanationOfBenefitItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitItemComponent
   * @returns ExplanationOfBenefitItemComponent data model or undefined for `ExplanationOfBenefitItemComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ExplanationOfBenefitItemComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ExplanationOfBenefitItemComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setSequence(null);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      instance.setSequence(null);
    }

    fieldName = 'careTeamSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
    }

    fieldName = 'diagnosisSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
    }

    fieldName = 'procedureSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
    }

    fieldName = 'informationSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
        instance.setProductOrService(null);
      } else {
        instance.setProductOrService(datatype);
      }
    } else {
      instance.setProductOrService(null);
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

    fieldName = 'programCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addProgramCode(datatype);
          }
        });
      }
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addUdi(datatype);
          }
        });
      }
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSubSite(datatype);
          }
        });
      }
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEncounter(datatype);
          }
        });
      }
  }

    fieldName = 'noteNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitItemAdjudicationComponent | undefined = ExplanationOfBenefitItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAdjudication(component);
          }
        });
      }
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitItemDetailComponent | undefined = ExplanationOfBenefitItemDetailComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDetail(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.item.sequence Element
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
   * ExplanationOfBenefit.item.careTeamSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable care team members
   * - **Definition:** Care team members related to this service or product.
   * - **Requirements:** Need to identify the individuals and their roles in the provision of the product or service.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private careTeamSequence?: PositiveIntType[] | undefined;

  /**
   * ExplanationOfBenefit.item.diagnosisSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable diagnoses
   * - **Definition:** Diagnoses applicable for this service or product.
   * - **Requirements:** Need to related the product or service to the associated diagnoses.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private diagnosisSequence?: PositiveIntType[] | undefined;

  /**
   * ExplanationOfBenefit.item.procedureSequence Element
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
   * ExplanationOfBenefit.item.informationSequence Element
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
   * ExplanationOfBenefit.item.revenue Element
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
   * ExplanationOfBenefit.item.category Element
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
   * ExplanationOfBenefit.item.productOrService Element
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
   * ExplanationOfBenefit.item.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product or service billing modifiers
   * - **Definition:** Item typification or modifiers codes to convey additional context for the product or service.
   * - **Comment:** For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   * - **Requirements:** To support inclusion of the item for adjudication or to charge an elevated fee.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modifier?: CodeableConcept[] | undefined;

  /**
   * ExplanationOfBenefit.item.programCode Element
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
   * ExplanationOfBenefit.item.serviced[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ExplanationOfBenefit.item.serviced[x]', ['date','Period',]`
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
  @ChoiceDataTypesMeta('ExplanationOfBenefit.item.serviced[x]',[
    'date',
    'Period',
  ])
  private serviced?: IDataType | undefined;

  /**
   * ExplanationOfBenefit.item.location[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ExplanationOfBenefit.item.location[x]', ['CodeableConcept','Address','Reference',]`
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
  @ChoiceDataTypesMeta('ExplanationOfBenefit.item.location[x]',[
    'CodeableConcept',
    'Address',
    'Reference',
  ])
  private location?: IDataType | undefined;

  /**
   * ExplanationOfBenefit.item.quantity Element
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
   * ExplanationOfBenefit.item.unitPrice Element
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
   * ExplanationOfBenefit.item.factor Element
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
   * ExplanationOfBenefit.item.net Element
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
   * ExplanationOfBenefit.item.udi Element
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
   * ExplanationOfBenefit.item.bodySite Element
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
   * ExplanationOfBenefit.item.subSite Element
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
   * ExplanationOfBenefit.item.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounters related to this billed item
   * - **Definition:** A billed item may include goods or services provided in multiple encounters.
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
   * ExplanationOfBenefit.item.noteNumber Element
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
   * ExplanationOfBenefit.item.adjudication Element
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
  private adjudication?: ExplanationOfBenefitItemAdjudicationComponent[] | undefined;

  /**
   * ExplanationOfBenefit.item.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional items
   * - **Definition:** Second-tier of goods and services.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: ExplanationOfBenefitItemDetailComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getSequenceElement(): PositiveIntType {
    return this.sequence ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType | undefined | null): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.sequence; Provided value is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.sequence = element;
    } else {
      this.sequence = null;
    }
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
  public setSequence(value: fhirPositiveInt | undefined | null): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.sequence (${String(value)})`;
      this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.sequence = null;
    }
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.careTeamSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.careTeamSequence; Provided element is not an instance of PositiveIntType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.item.careTeamSequence array item (${String(careTeamSequenceValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.careTeamSequence array item (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.diagnosisSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.diagnosisSequence; Provided element is not an instance of PositiveIntType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.item.diagnosisSequence array item (${String(diagnosisSequenceValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.diagnosisSequence array item (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.procedureSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.procedureSequence; Provided element is not an instance of PositiveIntType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.item.procedureSequence array item (${String(procedureSequenceValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.procedureSequence array item (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.informationSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.informationSequence; Provided element is not an instance of PositiveIntType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.item.informationSequence array item (${String(informationSequenceValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.informationSequence array item (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.revenue; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.category; Provided element is not an instance of CodeableConcept.`;
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
   * Assigns the provided CodeableConcept object value to the `productOrService` property.
   *
   * @param value - the `productOrService` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductOrService(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.productOrService; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productOrService = value;
    } else {
      this.productOrService = null;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.modifier; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.programCode; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.programCode; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ChoiceDataTypes('ExplanationOfBenefit.item.serviced[x]')`
   *
   * @param value - the `serviced` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ExplanationOfBenefit.item.serviced[x]')
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
        `DataType mismatch for ExplanationOfBenefit.item.serviced[x]: Expected DateType but encountered ${this.serviced.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.item.serviced[x]: Expected Period but encountered ${this.serviced.fhirType()}`,
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
   * @decorator `@ChoiceDataTypes('ExplanationOfBenefit.item.location[x]')`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ExplanationOfBenefit.item.location[x]')
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
        `DataType mismatch for ExplanationOfBenefit.item.location[x]: Expected CodeableConcept but encountered ${this.location.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.item.location[x]: Expected Address but encountered ${this.location.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.item.location[x]: Expected Reference but encountered ${this.location.fhirType()}`,
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.quantity; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.unitPrice; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.factor; Provided element is not an instance of DecimalType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.factor (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.net; Provided element is not an instance of Money.`;
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.item.udi', ['Device',])`
   *
   * @param value - the `udi` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.item.udi', [
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.item.udi', ['Device',])`
   *
   * @param value - the `udi` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.item.udi', [
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.bodySite; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.subSite; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.subSite; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.item.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.item.encounter', [
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.item.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.item.encounter', [
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.noteNumber; Provided value array has an element that is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.noteNumber; Provided element is not an instance of PositiveIntType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.item.noteNumber array item (${String(noteNumberValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.noteNumber array item (${String(value)})`;
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
   * @returns the `adjudication` property value as a ExplanationOfBenefitItemAdjudicationComponent array
   */
  public getAdjudication(): ExplanationOfBenefitItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ExplanationOfBenefitItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.adjudication; Provided value array has an element that is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirTypeList<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.adjudication; Provided element is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirType<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ExplanationOfBenefitItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ExplanationOfBenefitItemAdjudicationComponent[];
    }
  }

  /**
   * @returns the `detail` property value as a ExplanationOfBenefitItemDetailComponent array
   */
  public getDetail(): ExplanationOfBenefitItemDetailComponent[] {
    return this.detail ?? ([] as ExplanationOfBenefitItemDetailComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitItemDetailComponent array value to the `detail` property.
   *
   * @param value - the `detail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDetail(value: ExplanationOfBenefitItemDetailComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitItemDetailComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail; Provided value array has an element that is not an instance of ExplanationOfBenefitItemDetailComponent.`;
      assertFhirTypeList<ExplanationOfBenefitItemDetailComponent>(value, ExplanationOfBenefitItemDetailComponent, optErrMsg);
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitItemDetailComponent value to the `detail` array property.
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDetail(value: ExplanationOfBenefitItemDetailComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitItemDetailComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail; Provided element is not an instance of ExplanationOfBenefitItemDetailComponent.`;
      assertFhirType<ExplanationOfBenefitItemDetailComponent>(value, ExplanationOfBenefitItemDetailComponent, optErrMsg);
      this.initDetail();
      this.detail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefinedList<ExplanationOfBenefitItemDetailComponent>(this.detail) && this.detail.some((item: ExplanationOfBenefitItemDetailComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `detail` property
   */
  private initDetail(): void {
    if(!this.hasDetail()) {
      this.detail = [] as ExplanationOfBenefitItemDetailComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExplanationOfBenefit.item';
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
      this.noteNumber,
      this.adjudication,
      this.detail,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.sequence, this.productOrService, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitItemComponent {
    const dest = new ExplanationOfBenefitItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitItemComponent): void {
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
    const noteNumberList = copyListValues<PositiveIntType>(this.noteNumber);
    dest.noteNumber = noteNumberList.length === 0 ? undefined : noteNumberList;
    const adjudicationList = copyListValues<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication);
    dest.adjudication = adjudicationList.length === 0 ? undefined : adjudicationList;
    const detailList = copyListValues<ExplanationOfBenefitItemDetailComponent>(this.detail);
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

    if (this.hasSequenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement(), 'sequence', jsonObj);
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
      setFhirComplexJson(this.getProductOrService(), 'productOrService', jsonObj);
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

    if (this.hasNoteNumber()) {
      setFhirPrimitiveListJson(this.getNoteNumberElement(), 'noteNumber', jsonObj);
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
 * ExplanationOfBenefitItemAdjudicationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Adjudication details
 * - **Definition:** If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 * - **Requirements:** The adjudication results conveys the insurer\'s assessment of the item provided in the claim under the terms of the patient\'s insurance coverage.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitItemAdjudicationComponent extends BackboneElement implements IBackboneElement {
  constructor(category: CodeableConcept | null = null) {
    super();

    this.category = null;
    if (isDefined<CodeableConcept>(category)) {
      this.setCategory(category);
    }
  }

  /**
   * Parse the provided `ExplanationOfBenefitItemAdjudicationComponent` JSON to instantiate the ExplanationOfBenefitItemAdjudicationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitItemAdjudicationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitItemAdjudicationComponent
   * @returns ExplanationOfBenefitItemAdjudicationComponent data model or undefined for `ExplanationOfBenefitItemAdjudicationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitItemAdjudicationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitItemAdjudicationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitItemAdjudicationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCategory(null);
      } else {
        instance.setCategory(datatype);
      }
    } else {
      instance.setCategory(null);
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

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setValueElement(datatype);
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.item.adjudication.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of adjudication information
   * - **Definition:** A code to indicate the information type of this adjudication record. Information types may include: the value submitted, maximum values or percentages allowed or payable under the plan, amounts that the patient is responsible for in-aggregate or pertaining to this item, amounts paid by other coverages, and the benefit payable for this item.
   * - **Comment:** For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
   * - **Requirements:** Needed to enable understanding of the context of the other information in the adjudication.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category: CodeableConcept | null;

  /**
   * ExplanationOfBenefit.item.adjudication.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Explanation of adjudication outcome
   * - **Definition:** A code supporting the understanding of the adjudication result and explaining variance from expected amount.
   * - **Comment:** For example, may indicate that the funds for this benefit type have been exhausted.
   * - **Requirements:** To support understanding of variance from adjudication expectations.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableConcept | undefined;

  /**
   * ExplanationOfBenefit.item.adjudication.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Monetary amount
   * - **Definition:** Monetary amount associated with the category.
   * - **Comment:** For example, amount submitted, eligible amount, co-payment, and benefit payable.
   * - **Requirements:** Most adjuciation categories convey a monetary amount.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private amount?: Money | undefined;

  /**
   * ExplanationOfBenefit.item.adjudication.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Non-monitary value
   * - **Definition:** A non-monetary value associated with the category. Mutually exclusive to the amount element above.
   * - **Comment:** For example: eligible percentage or co-payment percentage.
   * - **Requirements:** Some adjudication categories convey a percentage or a fixed value.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value?: DecimalType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.adjudication.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = null;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.adjudication.reason; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.adjudication.amount; Provided element is not an instance of Money.`;
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
   * @returns the `value` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getValueElement(): DecimalType {
    return this.value ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.adjudication.value; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.value = element;
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValueElement(): boolean {
    return isDefined<DecimalType>(this.value) && !this.value.isEmpty();
  }

  /**
   * @returns the `value` property value as a fhirDecimal if defined; else undefined
   */
  public getValue(): fhirDecimal | undefined {
    return this.value?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `value` property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValue(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.adjudication.value (${String(value)})`;
      this.value = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return this.hasValueElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExplanationOfBenefit.item.adjudication';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.reason,
      this.amount,
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.category, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitItemAdjudicationComponent {
    const dest = new ExplanationOfBenefitItemAdjudicationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitItemAdjudicationComponent): void {
    super.copyValues(dest);
    dest.category = this.category ? this.category.copy() : null;
    dest.reason = this.reason?.copy();
    dest.amount = this.amount?.copy();
    dest.value = this.value?.copy();
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

    if (this.hasReason()) {
      setFhirComplexJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getValueElement(), 'value', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitItemDetailComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Additional items
 * - **Definition:** Second-tier of goods and services.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitItemDetailComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `ExplanationOfBenefitItemDetailComponent` JSON to instantiate the ExplanationOfBenefitItemDetailComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitItemDetailComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitItemDetailComponent
   * @returns ExplanationOfBenefitItemDetailComponent data model or undefined for `ExplanationOfBenefitItemDetailComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitItemDetailComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitItemDetailComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitItemDetailComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setSequence(null);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      instance.setSequence(null);
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
        instance.setProductOrService(null);
      } else {
        instance.setProductOrService(datatype);
      }
    } else {
      instance.setProductOrService(null);
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

    fieldName = 'programCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addProgramCode(datatype);
          }
        });
      }
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addUdi(datatype);
          }
        });
      }
  }

    fieldName = 'noteNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitItemAdjudicationComponent | undefined = ExplanationOfBenefitItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAdjudication(component);
          }
        });
      }
    }

    fieldName = 'subDetail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitItemDetailSubDetailComponent | undefined = ExplanationOfBenefitItemDetailSubDetailComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSubDetail(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.item.detail.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product or service provided
   * - **Definition:** A claim detail line. Either a simple (a product or service) or a \'group\' of sub-details which are simple items.
   * - **Requirements:** The items to be processed for adjudication.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence: PositiveIntType | null;

  /**
   * ExplanationOfBenefit.item.detail.revenue Element
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
   * ExplanationOfBenefit.item.detail.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefit classification
   * - **Definition:** Code to identify the general type of benefits under which products and services are provided.
   * - **Comment:** Examples include: Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   * - **Requirements:** Needed in the processing of institutional claims as this allows the insurer to determine whether a facial X-Ray is for dental, orthopedic, or facial surgery purposes.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept | undefined;

  /**
   * ExplanationOfBenefit.item.detail.productOrService Element
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
   * ExplanationOfBenefit.item.detail.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Service/Product billing modifiers
   * - **Definition:** Item typification or modifiers codes to convey additional context for the product or service.
   * - **Comment:** For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   * - **Requirements:** To support inclusion of the item for adjudication or to charge an elevated fee.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modifier?: CodeableConcept[] | undefined;

  /**
   * ExplanationOfBenefit.item.detail.programCode Element
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
   * ExplanationOfBenefit.item.detail.quantity Element
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
   * ExplanationOfBenefit.item.detail.unitPrice Element
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
   * ExplanationOfBenefit.item.detail.factor Element
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
   * ExplanationOfBenefit.item.detail.net Element
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
   * ExplanationOfBenefit.item.detail.udi Element
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
   * ExplanationOfBenefit.item.detail.noteNumber Element
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
   * ExplanationOfBenefit.item.detail.adjudication Element
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
  private adjudication?: ExplanationOfBenefitItemAdjudicationComponent[] | undefined;

  /**
   * ExplanationOfBenefit.item.detail.subDetail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional items
   * - **Definition:** Third-tier of goods and services.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subDetail?: ExplanationOfBenefitItemDetailSubDetailComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getSequenceElement(): PositiveIntType {
    return this.sequence ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType | undefined | null): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.sequence; Provided value is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.sequence = element;
    } else {
      this.sequence = null;
    }
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
  public setSequence(value: fhirPositiveInt | undefined | null): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.sequence (${String(value)})`;
      this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.sequence = null;
    }
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.revenue; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.category; Provided element is not an instance of CodeableConcept.`;
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
   * Assigns the provided CodeableConcept object value to the `productOrService` property.
   *
   * @param value - the `productOrService` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductOrService(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.productOrService; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productOrService = value;
    } else {
      this.productOrService = null;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.modifier; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.programCode; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.programCode; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.quantity; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.unitPrice; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.factor; Provided element is not an instance of DecimalType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.factor (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.net; Provided element is not an instance of Money.`;
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.item.detail.udi', ['Device',])`
   *
   * @param value - the `udi` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.item.detail.udi', [
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.item.detail.udi', ['Device',])`
   *
   * @param value - the `udi` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.item.detail.udi', [
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.noteNumber; Provided value array has an element that is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.noteNumber; Provided element is not an instance of PositiveIntType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.noteNumber array item (${String(noteNumberValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.noteNumber array item (${String(value)})`;
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
   * @returns the `adjudication` property value as a ExplanationOfBenefitItemAdjudicationComponent array
   */
  public getAdjudication(): ExplanationOfBenefitItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ExplanationOfBenefitItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.adjudication; Provided value array has an element that is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirTypeList<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.adjudication; Provided element is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirType<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ExplanationOfBenefitItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ExplanationOfBenefitItemAdjudicationComponent[];
    }
  }

  /**
   * @returns the `subDetail` property value as a ExplanationOfBenefitItemDetailSubDetailComponent array
   */
  public getSubDetail(): ExplanationOfBenefitItemDetailSubDetailComponent[] {
    return this.subDetail ?? ([] as ExplanationOfBenefitItemDetailSubDetailComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitItemDetailSubDetailComponent array value to the `subDetail` property.
   *
   * @param value - the `subDetail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubDetail(value: ExplanationOfBenefitItemDetailSubDetailComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitItemDetailSubDetailComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail; Provided value array has an element that is not an instance of ExplanationOfBenefitItemDetailSubDetailComponent.`;
      assertFhirTypeList<ExplanationOfBenefitItemDetailSubDetailComponent>(value, ExplanationOfBenefitItemDetailSubDetailComponent, optErrMsg);
      this.subDetail = value;
    } else {
      this.subDetail = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitItemDetailSubDetailComponent value to the `subDetail` array property.
   *
   * @param value - the `subDetail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubDetail(value: ExplanationOfBenefitItemDetailSubDetailComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitItemDetailSubDetailComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail; Provided element is not an instance of ExplanationOfBenefitItemDetailSubDetailComponent.`;
      assertFhirType<ExplanationOfBenefitItemDetailSubDetailComponent>(value, ExplanationOfBenefitItemDetailSubDetailComponent, optErrMsg);
      this.initSubDetail();
      this.subDetail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subDetail` property exists and has a value; `false` otherwise
   */
  public hasSubDetail(): boolean {
    return isDefinedList<ExplanationOfBenefitItemDetailSubDetailComponent>(this.subDetail) && this.subDetail.some((item: ExplanationOfBenefitItemDetailSubDetailComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `subDetail` property
   */
  private initSubDetail(): void {
    if(!this.hasSubDetail()) {
      this.subDetail = [] as ExplanationOfBenefitItemDetailSubDetailComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExplanationOfBenefit.item.detail';
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
      this.noteNumber,
      this.adjudication,
      this.subDetail,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.sequence, this.productOrService, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitItemDetailComponent {
    const dest = new ExplanationOfBenefitItemDetailComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitItemDetailComponent): void {
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
    const noteNumberList = copyListValues<PositiveIntType>(this.noteNumber);
    dest.noteNumber = noteNumberList.length === 0 ? undefined : noteNumberList;
    const adjudicationList = copyListValues<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication);
    dest.adjudication = adjudicationList.length === 0 ? undefined : adjudicationList;
    const subDetailList = copyListValues<ExplanationOfBenefitItemDetailSubDetailComponent>(this.subDetail);
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

    if (this.hasSequenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement(), 'sequence', jsonObj);
    }

    if (this.hasRevenue()) {
      setFhirComplexJson(this.getRevenue(), 'revenue', jsonObj);
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

    if (this.hasNoteNumber()) {
      setFhirPrimitiveListJson(this.getNoteNumberElement(), 'noteNumber', jsonObj);
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
 * ExplanationOfBenefitItemDetailSubDetailComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Additional items
 * - **Definition:** Third-tier of goods and services.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitItemDetailSubDetailComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `ExplanationOfBenefitItemDetailSubDetailComponent` JSON to instantiate the ExplanationOfBenefitItemDetailSubDetailComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitItemDetailSubDetailComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitItemDetailSubDetailComponent
   * @returns ExplanationOfBenefitItemDetailSubDetailComponent data model or undefined for `ExplanationOfBenefitItemDetailSubDetailComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitItemDetailSubDetailComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitItemDetailSubDetailComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitItemDetailSubDetailComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setSequence(null);
      } else {
        instance.setSequenceElement(datatype);
      }
    } else {
      instance.setSequence(null);
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
        instance.setProductOrService(null);
      } else {
        instance.setProductOrService(datatype);
      }
    } else {
      instance.setProductOrService(null);
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

    fieldName = 'programCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addProgramCode(datatype);
          }
        });
      }
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addUdi(datatype);
          }
        });
      }
  }

    fieldName = 'noteNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitItemAdjudicationComponent | undefined = ExplanationOfBenefitItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAdjudication(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.item.detail.subDetail.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product or service provided
   * - **Definition:** A claim detail line. Either a simple (a product or service) or a \'group\' of sub-details which are simple items.
   * - **Requirements:** The items to be processed for adjudication.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence: PositiveIntType | null;

  /**
   * ExplanationOfBenefit.item.detail.subDetail.revenue Element
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
   * ExplanationOfBenefit.item.detail.subDetail.category Element
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
   * ExplanationOfBenefit.item.detail.subDetail.productOrService Element
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
   * ExplanationOfBenefit.item.detail.subDetail.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Service/Product billing modifiers
   * - **Definition:** Item typification or modifiers codes to convey additional context for the product or service.
   * - **Comment:** For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
   * - **Requirements:** To support inclusion of the item for adjudication or to charge an elevated fee.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modifier?: CodeableConcept[] | undefined;

  /**
   * ExplanationOfBenefit.item.detail.subDetail.programCode Element
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
   * ExplanationOfBenefit.item.detail.subDetail.quantity Element
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
   * ExplanationOfBenefit.item.detail.subDetail.unitPrice Element
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
   * ExplanationOfBenefit.item.detail.subDetail.factor Element
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
   * ExplanationOfBenefit.item.detail.subDetail.net Element
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
   * ExplanationOfBenefit.item.detail.subDetail.udi Element
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
   * ExplanationOfBenefit.item.detail.subDetail.noteNumber Element
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
   * ExplanationOfBenefit.item.detail.subDetail.adjudication Element
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
  private adjudication?: ExplanationOfBenefitItemAdjudicationComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getSequenceElement(): PositiveIntType {
    return this.sequence ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: PositiveIntType | undefined | null): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.sequence; Provided value is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.sequence = element;
    } else {
      this.sequence = null;
    }
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
  public setSequence(value: fhirPositiveInt | undefined | null): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.sequence (${String(value)})`;
      this.sequence = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.sequence = null;
    }
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.revenue; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.category; Provided element is not an instance of CodeableConcept.`;
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
   * Assigns the provided CodeableConcept object value to the `productOrService` property.
   *
   * @param value - the `productOrService` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductOrService(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.productOrService; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productOrService = value;
    } else {
      this.productOrService = null;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.modifier; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.programCode; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.programCode; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.quantity; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.unitPrice; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.factor; Provided element is not an instance of DecimalType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.factor (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.net; Provided element is not an instance of Money.`;
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.item.detail.subDetail.udi', ['Device',])`
   *
   * @param value - the `udi` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.item.detail.subDetail.udi', [
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.item.detail.subDetail.udi', ['Device',])`
   *
   * @param value - the `udi` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.item.detail.subDetail.udi', [
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.noteNumber; Provided value array has an element that is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.noteNumber; Provided element is not an instance of PositiveIntType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.noteNumber array item (${String(noteNumberValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.noteNumber array item (${String(value)})`;
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
   * @returns the `adjudication` property value as a ExplanationOfBenefitItemAdjudicationComponent array
   */
  public getAdjudication(): ExplanationOfBenefitItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ExplanationOfBenefitItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.adjudication; Provided value array has an element that is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirTypeList<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.item.detail.subDetail.adjudication; Provided element is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirType<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ExplanationOfBenefitItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ExplanationOfBenefitItemAdjudicationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExplanationOfBenefit.item.detail.subDetail';
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
      this.noteNumber,
      this.adjudication,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.sequence, this.productOrService, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitItemDetailSubDetailComponent {
    const dest = new ExplanationOfBenefitItemDetailSubDetailComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitItemDetailSubDetailComponent): void {
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
    const noteNumberList = copyListValues<PositiveIntType>(this.noteNumber);
    dest.noteNumber = noteNumberList.length === 0 ? undefined : noteNumberList;
    const adjudicationList = copyListValues<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication);
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

    if (this.hasSequenceElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getSequenceElement(), 'sequence', jsonObj);
    }

    if (this.hasRevenue()) {
      setFhirComplexJson(this.getRevenue(), 'revenue', jsonObj);
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

    if (this.hasNoteNumber()) {
      setFhirPrimitiveListJson(this.getNoteNumberElement(), 'noteNumber', jsonObj);
    }

    if (this.hasAdjudication()) {
      setFhirBackboneElementListJson(this.getAdjudication(), 'adjudication', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitAddItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Insurer added line items
 * - **Definition:** The first-tier service adjudications for payor added product or service lines.
 * - **Requirements:** Insurers may redefine the provided product or service or may package and/or decompose groups of products and services. The addItems allows the insurer to provide their line item list with linkage to the submitted items/details/sub-details. In a preauthorization the insurer may use the addItem structure to provide additional information on authorized products and services.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitAddItemComponent extends BackboneElement implements IBackboneElement {
  constructor(productOrService: CodeableConcept | null = null) {
    super();

    this.productOrService = null;
    if (isDefined<CodeableConcept>(productOrService)) {
      this.setProductOrService(productOrService);
    }
  }

  /**
   * Parse the provided `ExplanationOfBenefitAddItemComponent` JSON to instantiate the ExplanationOfBenefitAddItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitAddItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitAddItemComponent
   * @returns ExplanationOfBenefitAddItemComponent data model or undefined for `ExplanationOfBenefitAddItemComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitAddItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitAddItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitAddItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ExplanationOfBenefitAddItemComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ExplanationOfBenefitAddItemComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'itemSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
    }

    fieldName = 'detailSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
    }

    fieldName = 'subDetailSequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addSubDetailSequenceElement(datatype);
          }
        });
      }
    }

    fieldName = 'provider';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addProvider(datatype);
          }
        });
      }
  }

    fieldName = 'productOrService';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setProductOrService(null);
      } else {
        instance.setProductOrService(datatype);
      }
    } else {
      instance.setProductOrService(null);
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

    fieldName = 'programCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addProgramCode(datatype);
          }
        });
      }
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSubSite(datatype);
          }
        });
      }
    }

    fieldName = 'noteNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitItemAdjudicationComponent | undefined = ExplanationOfBenefitItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAdjudication(component);
          }
        });
      }
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitAddItemDetailComponent | undefined = ExplanationOfBenefitAddItemDetailComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDetail(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.addItem.itemSequence Element
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
   * ExplanationOfBenefit.addItem.detailSequence Element
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
   * ExplanationOfBenefit.addItem.subDetailSequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subdetail sequence number
   * - **Definition:** The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.
   * - **Requirements:** Provides references to the claim sub-details within the claim detail.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subDetailSequence?: PositiveIntType[] | undefined;

  /**
   * ExplanationOfBenefit.addItem.provider Element
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
   * ExplanationOfBenefit.addItem.productOrService Element
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
   * ExplanationOfBenefit.addItem.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Service/Product billing modifiers
   * - **Definition:** Item typification or modifiers codes to convey additional context for the product or service.
   * - **Comment:** For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   * - **Requirements:** To support inclusion of the item for adjudication or to charge an elevated fee.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modifier?: CodeableConcept[] | undefined;

  /**
   * ExplanationOfBenefit.addItem.programCode Element
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
   * ExplanationOfBenefit.addItem.serviced[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ExplanationOfBenefit.addItem.serviced[x]', ['date','Period',]`
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
  @ChoiceDataTypesMeta('ExplanationOfBenefit.addItem.serviced[x]',[
    'date',
    'Period',
  ])
  private serviced?: IDataType | undefined;

  /**
   * ExplanationOfBenefit.addItem.location[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ExplanationOfBenefit.addItem.location[x]', ['CodeableConcept','Address','Reference',]`
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
  @ChoiceDataTypesMeta('ExplanationOfBenefit.addItem.location[x]',[
    'CodeableConcept',
    'Address',
    'Reference',
  ])
  private location?: IDataType | undefined;

  /**
   * ExplanationOfBenefit.addItem.quantity Element
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
   * ExplanationOfBenefit.addItem.unitPrice Element
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
   * ExplanationOfBenefit.addItem.factor Element
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
   * ExplanationOfBenefit.addItem.net Element
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
   * ExplanationOfBenefit.addItem.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Anatomical location
   * - **Definition:** Physical service site on the patient (limb, tooth, etc.).
   * - **Comment:** For example, providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
   * - **Requirements:** Allows insurer to validate specific procedures.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private bodySite?: CodeableConcept | undefined;

  /**
   * ExplanationOfBenefit.addItem.subSite Element
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
   * ExplanationOfBenefit.addItem.noteNumber Element
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
   * ExplanationOfBenefit.addItem.adjudication Element
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
  private adjudication?: ExplanationOfBenefitItemAdjudicationComponent[] | undefined;

  /**
   * ExplanationOfBenefit.addItem.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Insurer added line items
   * - **Definition:** The second-tier service adjudications for payor added services.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: ExplanationOfBenefitAddItemDetailComponent[] | undefined;

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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.itemSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.itemSequence; Provided element is not an instance of PositiveIntType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.addItem.itemSequence array item (${String(itemSequenceValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.itemSequence array item (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detailSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detailSequence; Provided element is not an instance of PositiveIntType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detailSequence array item (${String(detailSequenceValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detailSequence array item (${String(value)})`;
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
   * @returns the `subDetailSequence` property value as a PositiveIntType array
   */
  public getSubDetailSequenceElement(): PositiveIntType[] {
    return this.subDetailSequence ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `subDetailSequence` property.
   *
   * @param element - the `subDetailSequence` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubDetailSequenceElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.subDetailSequence; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.subDetailSequence = element;
    } else {
      this.subDetailSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `subDetailSequence` array property.
   *
   * @param element - the `subDetailSequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSubDetailSequenceElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.subDetailSequence; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initSubDetailSequence();
      this.subDetailSequence?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `subDetailSequence` property exists and has a value; `false` otherwise
   */
  public hasSubDetailSequenceElement(): boolean {
    return isDefinedList<PositiveIntType>(this.subDetailSequence) && this.subDetailSequence.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `subDetailSequence` property value as a fhirPositiveInt array
   */
  public getSubDetailSequence(): fhirPositiveInt[] {
    this.initSubDetailSequence();
    const subDetailSequenceValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.subDetailSequence!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        subDetailSequenceValues.push(value);
      }
    }
    return subDetailSequenceValues;
  }

  /**
   * Assigns the provided primitive value array to the `subDetailSequence` property.
   *
   * @param value - the `subDetailSequence` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubDetailSequence(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const subDetailSequenceElements = [] as PositiveIntType[];
      for (const subDetailSequenceValue of value) {
        const optErrMsg = `Invalid ExplanationOfBenefit.addItem.subDetailSequence array item (${String(subDetailSequenceValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(subDetailSequenceValue, fhirPositiveIntSchema, optErrMsg));
        subDetailSequenceElements.push(element);
      }
      this.subDetailSequence = subDetailSequenceElements;
    } else {
      this.subDetailSequence = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `subDetailSequence` array property.
   *
   * @param value - the `subDetailSequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSubDetailSequence(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.subDetailSequence array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initSubDetailSequence();
      this.addSubDetailSequenceElement(element);
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
   * Initialize the `subDetailSequence` property
   */
  private initSubDetailSequence(): void {
    if (!this.hasSubDetailSequence()) {
      this.subDetailSequence = [] as PositiveIntType[];
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.addItem.provider', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `provider` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.addItem.provider', [
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
   * @decorator `@ReferenceTargets('ExplanationOfBenefit.addItem.provider', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `provider` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExplanationOfBenefit.addItem.provider', [
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
   * @returns the `productOrService` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getProductOrService(): CodeableConcept {
    return this.productOrService ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `productOrService` property.
   *
   * @param value - the `productOrService` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductOrService(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.productOrService; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productOrService = value;
    } else {
      this.productOrService = null;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.modifier; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.programCode; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.programCode; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ChoiceDataTypes('ExplanationOfBenefit.addItem.serviced[x]')`
   *
   * @param value - the `serviced` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ExplanationOfBenefit.addItem.serviced[x]')
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
        `DataType mismatch for ExplanationOfBenefit.addItem.serviced[x]: Expected DateType but encountered ${this.serviced.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.addItem.serviced[x]: Expected Period but encountered ${this.serviced.fhirType()}`,
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
   * @decorator `@ChoiceDataTypes('ExplanationOfBenefit.addItem.location[x]')`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ExplanationOfBenefit.addItem.location[x]')
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
        `DataType mismatch for ExplanationOfBenefit.addItem.location[x]: Expected CodeableConcept but encountered ${this.location.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.addItem.location[x]: Expected Address but encountered ${this.location.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.addItem.location[x]: Expected Reference but encountered ${this.location.fhirType()}`,
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.quantity; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.unitPrice; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.factor; Provided element is not an instance of DecimalType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.factor (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.net; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.bodySite; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.subSite; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.subSite; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.noteNumber; Provided value array has an element that is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.noteNumber; Provided element is not an instance of PositiveIntType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.addItem.noteNumber array item (${String(noteNumberValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.noteNumber array item (${String(value)})`;
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
   * @returns the `adjudication` property value as a ExplanationOfBenefitItemAdjudicationComponent array
   */
  public getAdjudication(): ExplanationOfBenefitItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ExplanationOfBenefitItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.adjudication; Provided value array has an element that is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirTypeList<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.adjudication; Provided element is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirType<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ExplanationOfBenefitItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ExplanationOfBenefitItemAdjudicationComponent[];
    }
  }

  /**
   * @returns the `detail` property value as a ExplanationOfBenefitAddItemDetailComponent array
   */
  public getDetail(): ExplanationOfBenefitAddItemDetailComponent[] {
    return this.detail ?? ([] as ExplanationOfBenefitAddItemDetailComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitAddItemDetailComponent array value to the `detail` property.
   *
   * @param value - the `detail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDetail(value: ExplanationOfBenefitAddItemDetailComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitAddItemDetailComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail; Provided value array has an element that is not an instance of ExplanationOfBenefitAddItemDetailComponent.`;
      assertFhirTypeList<ExplanationOfBenefitAddItemDetailComponent>(value, ExplanationOfBenefitAddItemDetailComponent, optErrMsg);
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitAddItemDetailComponent value to the `detail` array property.
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDetail(value: ExplanationOfBenefitAddItemDetailComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitAddItemDetailComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail; Provided element is not an instance of ExplanationOfBenefitAddItemDetailComponent.`;
      assertFhirType<ExplanationOfBenefitAddItemDetailComponent>(value, ExplanationOfBenefitAddItemDetailComponent, optErrMsg);
      this.initDetail();
      this.detail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefinedList<ExplanationOfBenefitAddItemDetailComponent>(this.detail) && this.detail.some((item: ExplanationOfBenefitAddItemDetailComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `detail` property
   */
  private initDetail(): void {
    if(!this.hasDetail()) {
      this.detail = [] as ExplanationOfBenefitAddItemDetailComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExplanationOfBenefit.addItem';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.itemSequence,
      this.detailSequence,
      this.subDetailSequence,
      this.provider,
      this.productOrService,
      this.modifier,
      this.programCode,
      this.serviced,
      this.location,
      this.quantity,
      this.unitPrice,
      this.factor,
      this.net,
      this.bodySite,
      this.subSite,
      this.noteNumber,
      this.adjudication,
      this.detail,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.productOrService, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitAddItemComponent {
    const dest = new ExplanationOfBenefitAddItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitAddItemComponent): void {
    super.copyValues(dest);
    const itemSequenceList = copyListValues<PositiveIntType>(this.itemSequence);
    dest.itemSequence = itemSequenceList.length === 0 ? undefined : itemSequenceList;
    const detailSequenceList = copyListValues<PositiveIntType>(this.detailSequence);
    dest.detailSequence = detailSequenceList.length === 0 ? undefined : detailSequenceList;
    const subDetailSequenceList = copyListValues<PositiveIntType>(this.subDetailSequence);
    dest.subDetailSequence = subDetailSequenceList.length === 0 ? undefined : subDetailSequenceList;
    const providerList = copyListValues<Reference>(this.provider);
    dest.provider = providerList.length === 0 ? undefined : providerList;
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
    dest.bodySite = this.bodySite?.copy();
    const subSiteList = copyListValues<CodeableConcept>(this.subSite);
    dest.subSite = subSiteList.length === 0 ? undefined : subSiteList;
    const noteNumberList = copyListValues<PositiveIntType>(this.noteNumber);
    dest.noteNumber = noteNumberList.length === 0 ? undefined : noteNumberList;
    const adjudicationList = copyListValues<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication);
    dest.adjudication = adjudicationList.length === 0 ? undefined : adjudicationList;
    const detailList = copyListValues<ExplanationOfBenefitAddItemDetailComponent>(this.detail);
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

    if (this.hasSubDetailSequence()) {
      setFhirPrimitiveListJson(this.getSubDetailSequenceElement(), 'subDetailSequence', jsonObj);
    }

    if (this.hasProvider()) {
      setFhirComplexListJson(this.getProvider(), 'provider', jsonObj);
    }

    if (this.hasProductOrService()) {
      setFhirComplexJson(this.getProductOrService(), 'productOrService', jsonObj);
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

    if (this.hasBodySite()) {
      setFhirComplexJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasSubSite()) {
      setFhirComplexListJson(this.getSubSite(), 'subSite', jsonObj);
    }

    if (this.hasNoteNumber()) {
      setFhirPrimitiveListJson(this.getNoteNumberElement(), 'noteNumber', jsonObj);
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
 * ExplanationOfBenefitAddItemDetailComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Insurer added line items
 * - **Definition:** The second-tier service adjudications for payor added services.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitAddItemDetailComponent extends BackboneElement implements IBackboneElement {
  constructor(productOrService: CodeableConcept | null = null) {
    super();

    this.productOrService = null;
    if (isDefined<CodeableConcept>(productOrService)) {
      this.setProductOrService(productOrService);
    }
  }

  /**
   * Parse the provided `ExplanationOfBenefitAddItemDetailComponent` JSON to instantiate the ExplanationOfBenefitAddItemDetailComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitAddItemDetailComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitAddItemDetailComponent
   * @returns ExplanationOfBenefitAddItemDetailComponent data model or undefined for `ExplanationOfBenefitAddItemDetailComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitAddItemDetailComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitAddItemDetailComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitAddItemDetailComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'productOrService';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setProductOrService(null);
      } else {
        instance.setProductOrService(datatype);
      }
    } else {
      instance.setProductOrService(null);
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

    fieldName = 'noteNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitItemAdjudicationComponent | undefined = ExplanationOfBenefitItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAdjudication(component);
          }
        });
      }
    }

    fieldName = 'subDetail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitAddItemDetailSubDetailComponent | undefined = ExplanationOfBenefitAddItemDetailSubDetailComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSubDetail(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.addItem.detail.productOrService Element
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
   * ExplanationOfBenefit.addItem.detail.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Service/Product billing modifiers
   * - **Definition:** Item typification or modifiers codes to convey additional context for the product or service.
   * - **Comment:** For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   * - **Requirements:** To support inclusion of the item for adjudication or to charge an elevated fee.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modifier?: CodeableConcept[] | undefined;

  /**
   * ExplanationOfBenefit.addItem.detail.quantity Element
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
   * ExplanationOfBenefit.addItem.detail.unitPrice Element
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
   * ExplanationOfBenefit.addItem.detail.factor Element
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
   * ExplanationOfBenefit.addItem.detail.net Element
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
   * ExplanationOfBenefit.addItem.detail.noteNumber Element
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
   * ExplanationOfBenefit.addItem.detail.adjudication Element
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
  private adjudication?: ExplanationOfBenefitItemAdjudicationComponent[] | undefined;

  /**
   * ExplanationOfBenefit.addItem.detail.subDetail Element
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
  private subDetail?: ExplanationOfBenefitAddItemDetailSubDetailComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `productOrService` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getProductOrService(): CodeableConcept {
    return this.productOrService ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `productOrService` property.
   *
   * @param value - the `productOrService` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductOrService(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.productOrService; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productOrService = value;
    } else {
      this.productOrService = null;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.modifier; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.quantity; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.unitPrice; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.factor; Provided element is not an instance of DecimalType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.factor (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.net; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.noteNumber; Provided value array has an element that is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.noteNumber; Provided element is not an instance of PositiveIntType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.noteNumber array item (${String(noteNumberValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.noteNumber array item (${String(value)})`;
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
   * @returns the `adjudication` property value as a ExplanationOfBenefitItemAdjudicationComponent array
   */
  public getAdjudication(): ExplanationOfBenefitItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ExplanationOfBenefitItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.adjudication; Provided value array has an element that is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirTypeList<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.adjudication; Provided element is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirType<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ExplanationOfBenefitItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ExplanationOfBenefitItemAdjudicationComponent[];
    }
  }

  /**
   * @returns the `subDetail` property value as a ExplanationOfBenefitAddItemDetailSubDetailComponent array
   */
  public getSubDetail(): ExplanationOfBenefitAddItemDetailSubDetailComponent[] {
    return this.subDetail ?? ([] as ExplanationOfBenefitAddItemDetailSubDetailComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitAddItemDetailSubDetailComponent array value to the `subDetail` property.
   *
   * @param value - the `subDetail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubDetail(value: ExplanationOfBenefitAddItemDetailSubDetailComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitAddItemDetailSubDetailComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail; Provided value array has an element that is not an instance of ExplanationOfBenefitAddItemDetailSubDetailComponent.`;
      assertFhirTypeList<ExplanationOfBenefitAddItemDetailSubDetailComponent>(value, ExplanationOfBenefitAddItemDetailSubDetailComponent, optErrMsg);
      this.subDetail = value;
    } else {
      this.subDetail = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitAddItemDetailSubDetailComponent value to the `subDetail` array property.
   *
   * @param value - the `subDetail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubDetail(value: ExplanationOfBenefitAddItemDetailSubDetailComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitAddItemDetailSubDetailComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail; Provided element is not an instance of ExplanationOfBenefitAddItemDetailSubDetailComponent.`;
      assertFhirType<ExplanationOfBenefitAddItemDetailSubDetailComponent>(value, ExplanationOfBenefitAddItemDetailSubDetailComponent, optErrMsg);
      this.initSubDetail();
      this.subDetail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subDetail` property exists and has a value; `false` otherwise
   */
  public hasSubDetail(): boolean {
    return isDefinedList<ExplanationOfBenefitAddItemDetailSubDetailComponent>(this.subDetail) && this.subDetail.some((item: ExplanationOfBenefitAddItemDetailSubDetailComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `subDetail` property
   */
  private initSubDetail(): void {
    if(!this.hasSubDetail()) {
      this.subDetail = [] as ExplanationOfBenefitAddItemDetailSubDetailComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExplanationOfBenefit.addItem.detail';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.productOrService,
      this.modifier,
      this.quantity,
      this.unitPrice,
      this.factor,
      this.net,
      this.noteNumber,
      this.adjudication,
      this.subDetail,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.productOrService, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitAddItemDetailComponent {
    const dest = new ExplanationOfBenefitAddItemDetailComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitAddItemDetailComponent): void {
    super.copyValues(dest);
    dest.productOrService = this.productOrService ? this.productOrService.copy() : null;
    const modifierList = copyListValues<CodeableConcept>(this.modifier);
    dest.modifier = modifierList.length === 0 ? undefined : modifierList;
    dest.quantity = this.quantity?.copy();
    dest.unitPrice = this.unitPrice?.copy();
    dest.factor = this.factor?.copy();
    dest.net = this.net?.copy();
    const noteNumberList = copyListValues<PositiveIntType>(this.noteNumber);
    dest.noteNumber = noteNumberList.length === 0 ? undefined : noteNumberList;
    const adjudicationList = copyListValues<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication);
    dest.adjudication = adjudicationList.length === 0 ? undefined : adjudicationList;
    const subDetailList = copyListValues<ExplanationOfBenefitAddItemDetailSubDetailComponent>(this.subDetail);
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

    if (this.hasProductOrService()) {
      setFhirComplexJson(this.getProductOrService(), 'productOrService', jsonObj);
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

    if (this.hasNet()) {
      setFhirComplexJson(this.getNet(), 'net', jsonObj);
    }

    if (this.hasNoteNumber()) {
      setFhirPrimitiveListJson(this.getNoteNumberElement(), 'noteNumber', jsonObj);
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
 * ExplanationOfBenefitAddItemDetailSubDetailComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Insurer added line items
 * - **Definition:** The third-tier service adjudications for payor added services.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitAddItemDetailSubDetailComponent extends BackboneElement implements IBackboneElement {
  constructor(productOrService: CodeableConcept | null = null) {
    super();

    this.productOrService = null;
    if (isDefined<CodeableConcept>(productOrService)) {
      this.setProductOrService(productOrService);
    }
  }

  /**
   * Parse the provided `ExplanationOfBenefitAddItemDetailSubDetailComponent` JSON to instantiate the ExplanationOfBenefitAddItemDetailSubDetailComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitAddItemDetailSubDetailComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitAddItemDetailSubDetailComponent
   * @returns ExplanationOfBenefitAddItemDetailSubDetailComponent data model or undefined for `ExplanationOfBenefitAddItemDetailSubDetailComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitAddItemDetailSubDetailComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitAddItemDetailSubDetailComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitAddItemDetailSubDetailComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'productOrService';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setProductOrService(null);
      } else {
        instance.setProductOrService(datatype);
      }
    } else {
      instance.setProductOrService(null);
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

    fieldName = 'noteNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
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
    }

    fieldName = 'adjudication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitItemAdjudicationComponent | undefined = ExplanationOfBenefitItemAdjudicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAdjudication(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.addItem.detail.subDetail.productOrService Element
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
   * ExplanationOfBenefit.addItem.detail.subDetail.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Service/Product billing modifiers
   * - **Definition:** Item typification or modifiers codes to convey additional context for the product or service.
   * - **Comment:** For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   * - **Requirements:** To support inclusion of the item for adjudication or to charge an elevated fee.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modifier?: CodeableConcept[] | undefined;

  /**
   * ExplanationOfBenefit.addItem.detail.subDetail.quantity Element
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
   * ExplanationOfBenefit.addItem.detail.subDetail.unitPrice Element
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
   * ExplanationOfBenefit.addItem.detail.subDetail.factor Element
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
   * ExplanationOfBenefit.addItem.detail.subDetail.net Element
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
   * ExplanationOfBenefit.addItem.detail.subDetail.noteNumber Element
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
   * ExplanationOfBenefit.addItem.detail.subDetail.adjudication Element
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
  private adjudication?: ExplanationOfBenefitItemAdjudicationComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `productOrService` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getProductOrService(): CodeableConcept {
    return this.productOrService ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `productOrService` property.
   *
   * @param value - the `productOrService` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductOrService(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.productOrService; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productOrService = value;
    } else {
      this.productOrService = null;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.modifier; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.modifier; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.quantity; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.unitPrice; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.factor; Provided element is not an instance of DecimalType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.factor (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.net; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.noteNumber; Provided value array has an element that is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.noteNumber; Provided element is not an instance of PositiveIntType.`;
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
        const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.noteNumber array item (${String(noteNumberValue)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.noteNumber array item (${String(value)})`;
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
   * @returns the `adjudication` property value as a ExplanationOfBenefitItemAdjudicationComponent array
   */
  public getAdjudication(): ExplanationOfBenefitItemAdjudicationComponent[] {
    return this.adjudication ?? ([] as ExplanationOfBenefitItemAdjudicationComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitItemAdjudicationComponent array value to the `adjudication` property.
   *
   * @param value - the `adjudication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.adjudication; Provided value array has an element that is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirTypeList<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.adjudication = value;
    } else {
      this.adjudication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitItemAdjudicationComponent value to the `adjudication` array property.
   *
   * @param value - the `adjudication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdjudication(value: ExplanationOfBenefitItemAdjudicationComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitItemAdjudicationComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.addItem.detail.subDetail.adjudication; Provided element is not an instance of ExplanationOfBenefitItemAdjudicationComponent.`;
      assertFhirType<ExplanationOfBenefitItemAdjudicationComponent>(value, ExplanationOfBenefitItemAdjudicationComponent, optErrMsg);
      this.initAdjudication();
      this.adjudication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `adjudication` property exists and has a value; `false` otherwise
   */
  public hasAdjudication(): boolean {
    return isDefinedList<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication) && this.adjudication.some((item: ExplanationOfBenefitItemAdjudicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `adjudication` property
   */
  private initAdjudication(): void {
    if(!this.hasAdjudication()) {
      this.adjudication = [] as ExplanationOfBenefitItemAdjudicationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExplanationOfBenefit.addItem.detail.subDetail';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.productOrService,
      this.modifier,
      this.quantity,
      this.unitPrice,
      this.factor,
      this.net,
      this.noteNumber,
      this.adjudication,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.productOrService, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitAddItemDetailSubDetailComponent {
    const dest = new ExplanationOfBenefitAddItemDetailSubDetailComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitAddItemDetailSubDetailComponent): void {
    super.copyValues(dest);
    dest.productOrService = this.productOrService ? this.productOrService.copy() : null;
    const modifierList = copyListValues<CodeableConcept>(this.modifier);
    dest.modifier = modifierList.length === 0 ? undefined : modifierList;
    dest.quantity = this.quantity?.copy();
    dest.unitPrice = this.unitPrice?.copy();
    dest.factor = this.factor?.copy();
    dest.net = this.net?.copy();
    const noteNumberList = copyListValues<PositiveIntType>(this.noteNumber);
    dest.noteNumber = noteNumberList.length === 0 ? undefined : noteNumberList;
    const adjudicationList = copyListValues<ExplanationOfBenefitItemAdjudicationComponent>(this.adjudication);
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

    if (this.hasProductOrService()) {
      setFhirComplexJson(this.getProductOrService(), 'productOrService', jsonObj);
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

    if (this.hasNet()) {
      setFhirComplexJson(this.getNet(), 'net', jsonObj);
    }

    if (this.hasNoteNumber()) {
      setFhirPrimitiveListJson(this.getNoteNumberElement(), 'noteNumber', jsonObj);
    }

    if (this.hasAdjudication()) {
      setFhirBackboneElementListJson(this.getAdjudication(), 'adjudication', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitTotalComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Adjudication totals
 * - **Definition:** Categorized monetary totals for the adjudication.
 * - **Comment:** Totals for amounts submitted, co-pays, benefits payable etc.
 * - **Requirements:** To provide the requestor with financial totals by category for the adjudication.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitTotalComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `ExplanationOfBenefitTotalComponent` JSON to instantiate the ExplanationOfBenefitTotalComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitTotalComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitTotalComponent
   * @returns ExplanationOfBenefitTotalComponent data model or undefined for `ExplanationOfBenefitTotalComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitTotalComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitTotalComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitTotalComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCategory(null);
      } else {
        instance.setCategory(datatype);
      }
    } else {
      instance.setCategory(null);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setAmount(null);
      } else {
        instance.setAmount(datatype);
      }
    } else {
      instance.setAmount(null);
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.total.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of adjudication information
   * - **Definition:** A code to indicate the information type of this adjudication record. Information types may include: the value submitted, maximum values or percentages allowed or payable under the plan, amounts that the patient is responsible for in aggregate or pertaining to this item, amounts paid by other coverages, and the benefit payable for this item.
   * - **Comment:** For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
   * - **Requirements:** Needed to convey the type of total provided.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category: CodeableConcept | null;

  /**
   * ExplanationOfBenefit.total.amount Element
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
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.total.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = null;
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
   * @returns the `amount` property value as a Money object if defined; else an empty Money object
   */
  public getAmount(): Money {
    return this.amount ?? new Money();
  }

  /**
   * Assigns the provided Money object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Money | undefined | null): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.total.amount; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.amount = value;
    } else {
      this.amount = null;
    }
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
    return 'ExplanationOfBenefit.total';
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.category, this.amount, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitTotalComponent {
    const dest = new ExplanationOfBenefitTotalComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitTotalComponent): void {
    super.copyValues(dest);
    dest.category = this.category ? this.category.copy() : null;
    dest.amount = this.amount ? this.amount.copy() : null;
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

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitPaymentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Payment Details
 * - **Definition:** Payment details for the adjudication of the claim.
 * - **Requirements:** Needed to convey references to the financial instrument that has been used if payment has been made.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitPaymentComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ExplanationOfBenefitPaymentComponent` JSON to instantiate the ExplanationOfBenefitPaymentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitPaymentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitPaymentComponent
   * @returns ExplanationOfBenefitPaymentComponent data model or undefined for `ExplanationOfBenefitPaymentComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitPaymentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitPaymentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitPaymentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
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
      instance.setAmount(datatype);
    }

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.payment.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Partial or complete payment
   * - **Definition:** Whether this represents partial or complete payment of the benefits payable.
   * - **Requirements:** To advise the requestor when the insurer believes all payments to have been completed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * ExplanationOfBenefit.payment.adjustment Element
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
   * ExplanationOfBenefit.payment.adjustmentReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Explanation for the variance
   * - **Definition:** Reason for the payment adjustment.
   * - **Requirements:** Needed to clarify the monetary adjustment.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private adjustmentReason?: CodeableConcept | undefined;

  /**
   * ExplanationOfBenefit.payment.date Element
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
   * ExplanationOfBenefit.payment.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Payable amount after adjustment
   * - **Definition:** Benefits payable less any payment adjustment.
   * - **Requirements:** Needed to provide the actual payment amount.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private amount?: Money | undefined;

  /**
   * ExplanationOfBenefit.payment.identifier Element
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
      const optErrMsg = `Invalid ExplanationOfBenefit.payment.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.payment.adjustment; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.payment.adjustmentReason; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.payment.date; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.payment.date (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.payment.amount; Provided element is not an instance of Money.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.payment.identifier; Provided element is not an instance of Identifier.`;
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
    return 'ExplanationOfBenefit.payment';
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
  public override copy(): ExplanationOfBenefitPaymentComponent {
    const dest = new ExplanationOfBenefitPaymentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitPaymentComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.adjustment = this.adjustment?.copy();
    dest.adjustmentReason = this.adjustmentReason?.copy();
    dest.date = this.date?.copy();
    dest.amount = this.amount?.copy();
    dest.identifier = this.identifier?.copy();
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
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitProcessNoteComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Note concerning adjudication
 * - **Definition:** A note that describes or explains adjudication results in a human readable form.
 * - **Requirements:** Provides the insurer specific textual explanations associated with the processing.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitProcessNoteComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.noteTypeEnum = new NoteTypeEnum();
  }

  /**
   * Parse the provided `ExplanationOfBenefitProcessNoteComponent` JSON to instantiate the ExplanationOfBenefitProcessNoteComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitProcessNoteComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitProcessNoteComponent
   * @returns ExplanationOfBenefitProcessNoteComponent data model or undefined for `ExplanationOfBenefitProcessNoteComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitProcessNoteComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitProcessNoteComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitProcessNoteComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setTypeElement(datatype);
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextElement(datatype);
    }

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLanguage(datatype);
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.processNote.number Element
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
   * FHIR CodeSystem: NoteType
   *
   * @see {@link NoteTypeEnum }
   */
  private readonly noteTypeEnum: NoteTypeEnum;

  /**
   * ExplanationOfBenefit.processNote.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** display | print | printoper
   * - **Definition:** The business purpose of the note text.
   * - **Requirements:** To convey the expectation for when the text is used.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  private type_?: EnumCodeType | undefined;

  /**
   * ExplanationOfBenefit.processNote.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Note explanatory text
   * - **Definition:** The explanation or description associated with the processing.
   * - **Requirements:** Required to provide human readable explanation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text?: StringType | undefined;

  /**
   * ExplanationOfBenefit.processNote.language Element
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
      const optErrMsg = `Invalid ExplanationOfBenefit.processNote.number; Provided element is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.processNote.number (${String(value)})`;
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
   * @returns the `type_` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  public getTypeEnumType(): EnumCodeType | undefined {
    return this.type_;
  }

  /**
   * Assigns the provided EnumCodeType value to the `type_` property.
   *
   * @param enumType - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ExplanationOfBenefit.processNote.type';
      assertEnumCodeType<NoteTypeEnum>(enumType, NoteTypeEnum, errMsgPrefix);
      this.type_ = enumType;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.type_) && !this.type_.isEmpty() && this.type_.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `type_` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  public getTypeElement(): CodeType | undefined {
    if (this.type_ === undefined) {
      return undefined;
    }
    return this.type_ as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `type_` property.
   *
   * @param element - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.processNote.type; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.noteTypeEnum);
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeElement(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `type_` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  public getType(): fhirCode | undefined {
    if (this.type_ === undefined) {
      return undefined;
    }
    return this.type_.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `type_` property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link NoteTypeEnum }
   */
  public setType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.processNote.type; Provided value is not an instance of fhirCode.`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.noteTypeEnum);
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `text` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextElement(): StringType {
    return this.text ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.processNote.text; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.text = element;
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<StringType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirString if defined; else undefined
   */
  public getText(): fhirString | undefined {
    return this.text?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.processNote.text (${String(value)})`;
      this.text = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.text = undefined;
    }
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
      const optErrMsg = `Invalid ExplanationOfBenefit.processNote.language; Provided element is not an instance of CodeableConcept.`;
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
    return 'ExplanationOfBenefit.processNote';
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
  public override copy(): ExplanationOfBenefitProcessNoteComponent {
    const dest = new ExplanationOfBenefitProcessNoteComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitProcessNoteComponent): void {
    super.copyValues(dest);
    dest.number = this.number?.copy();
    dest.type_ = this.type_?.copy();
    dest.text = this.text?.copy();
    dest.language = this.language?.copy();
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

    if (this.hasNumberElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getNumberElement(), 'number', jsonObj);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextElement(), 'text', jsonObj);
    }

    if (this.hasLanguage()) {
      setFhirComplexJson(this.getLanguage(), 'language', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitBenefitBalanceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Balance by Benefit Category
 * - **Definition:** Balance by Benefit Category.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitBenefitBalanceComponent extends BackboneElement implements IBackboneElement {
  constructor(category: CodeableConcept | null = null) {
    super();

    this.category = null;
    if (isDefined<CodeableConcept>(category)) {
      this.setCategory(category);
    }
  }

  /**
   * Parse the provided `ExplanationOfBenefitBenefitBalanceComponent` JSON to instantiate the ExplanationOfBenefitBenefitBalanceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitBenefitBalanceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitBenefitBalanceComponent
   * @returns ExplanationOfBenefitBenefitBalanceComponent data model or undefined for `ExplanationOfBenefitBenefitBalanceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitBenefitBalanceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitBenefitBalanceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitBenefitBalanceComponent();

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
      if (datatype === undefined) {
        instance.setCategory(null);
      } else {
        instance.setCategory(datatype);
      }
    } else {
      instance.setCategory(null);
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

    fieldName = 'financial';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ExplanationOfBenefitBenefitBalanceFinancialComponent | undefined = ExplanationOfBenefitBenefitBalanceFinancialComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addFinancial(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * ExplanationOfBenefit.benefitBalance.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefit classification
   * - **Definition:** Code to identify the general type of benefits under which products and services are provided.
   * - **Comment:** Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   * - **Requirements:** Needed to convey the category of service or product for which eligibility is sought.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category: CodeableConcept | null;

  /**
   * ExplanationOfBenefit.benefitBalance.excluded Element
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
   * ExplanationOfBenefit.benefitBalance.name Element
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
   * ExplanationOfBenefit.benefitBalance.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the benefit or services covered
   * - **Definition:** A richer description of the benefit or services covered.
   * - **Comment:** For example, \'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services\'.
   * - **Requirements:** Needed for human readable reference.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * ExplanationOfBenefit.benefitBalance.network Element
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
   * ExplanationOfBenefit.benefitBalance.unit Element
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
   * ExplanationOfBenefit.benefitBalance.term Element
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
   * ExplanationOfBenefit.benefitBalance.financial Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefit Summary
   * - **Definition:** Benefits Used to date.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private financial?: ExplanationOfBenefitBenefitBalanceFinancialComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = null;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance.excluded; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance.excluded (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance.name (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance.description (${String(value)})`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance.network; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance.unit; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance.term; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `financial` property value as a ExplanationOfBenefitBenefitBalanceFinancialComponent array
   */
  public getFinancial(): ExplanationOfBenefitBenefitBalanceFinancialComponent[] {
    return this.financial ?? ([] as ExplanationOfBenefitBenefitBalanceFinancialComponent[]);
  }

  /**
   * Assigns the provided ExplanationOfBenefitBenefitBalanceFinancialComponent array value to the `financial` property.
   *
   * @param value - the `financial` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFinancial(value: ExplanationOfBenefitBenefitBalanceFinancialComponent[] | undefined): this {
    if (isDefinedList<ExplanationOfBenefitBenefitBalanceFinancialComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance.financial; Provided value array has an element that is not an instance of ExplanationOfBenefitBenefitBalanceFinancialComponent.`;
      assertFhirTypeList<ExplanationOfBenefitBenefitBalanceFinancialComponent>(value, ExplanationOfBenefitBenefitBalanceFinancialComponent, optErrMsg);
      this.financial = value;
    } else {
      this.financial = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExplanationOfBenefitBenefitBalanceFinancialComponent value to the `financial` array property.
   *
   * @param value - the `financial` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFinancial(value: ExplanationOfBenefitBenefitBalanceFinancialComponent | undefined): this {
    if (isDefined<ExplanationOfBenefitBenefitBalanceFinancialComponent>(value)) {
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance.financial; Provided element is not an instance of ExplanationOfBenefitBenefitBalanceFinancialComponent.`;
      assertFhirType<ExplanationOfBenefitBenefitBalanceFinancialComponent>(value, ExplanationOfBenefitBenefitBalanceFinancialComponent, optErrMsg);
      this.initFinancial();
      this.financial?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `financial` property exists and has a value; `false` otherwise
   */
  public hasFinancial(): boolean {
    return isDefinedList<ExplanationOfBenefitBenefitBalanceFinancialComponent>(this.financial) && this.financial.some((item: ExplanationOfBenefitBenefitBalanceFinancialComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `financial` property
   */
  private initFinancial(): void {
    if(!this.hasFinancial()) {
      this.financial = [] as ExplanationOfBenefitBenefitBalanceFinancialComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExplanationOfBenefit.benefitBalance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.excluded,
      this.name,
      this.description,
      this.network,
      this.unit,
      this.term,
      this.financial,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.category, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExplanationOfBenefitBenefitBalanceComponent {
    const dest = new ExplanationOfBenefitBenefitBalanceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitBenefitBalanceComponent): void {
    super.copyValues(dest);
    dest.category = this.category ? this.category.copy() : null;
    dest.excluded = this.excluded?.copy();
    dest.name = this.name?.copy();
    dest.description = this.description?.copy();
    dest.network = this.network?.copy();
    dest.unit = this.unit?.copy();
    dest.term = this.term?.copy();
    const financialList = copyListValues<ExplanationOfBenefitBenefitBalanceFinancialComponent>(this.financial);
    dest.financial = financialList.length === 0 ? undefined : financialList;
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

    if (this.hasFinancial()) {
      setFhirBackboneElementListJson(this.getFinancial(), 'financial', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ExplanationOfBenefitBenefitBalanceFinancialComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Benefit Summary
 * - **Definition:** Benefits Used to date.
 *
 * @category Data Models: Resource
 * @see [FHIR ExplanationOfBenefit](http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit)
 */
export class ExplanationOfBenefitBenefitBalanceFinancialComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `ExplanationOfBenefitBenefitBalanceFinancialComponent` JSON to instantiate the ExplanationOfBenefitBenefitBalanceFinancialComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExplanationOfBenefitBenefitBalanceFinancialComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExplanationOfBenefitBenefitBalanceFinancialComponent
   * @returns ExplanationOfBenefitBenefitBalanceFinancialComponent data model or undefined for `ExplanationOfBenefitBenefitBalanceFinancialComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExplanationOfBenefitBenefitBalanceFinancialComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExplanationOfBenefitBenefitBalanceFinancialComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExplanationOfBenefitBenefitBalanceFinancialComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = ExplanationOfBenefitBenefitBalanceFinancialComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ExplanationOfBenefitBenefitBalanceFinancialComponent`;
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
   * ExplanationOfBenefit.benefitBalance.financial.type Element
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
   * ExplanationOfBenefit.benefitBalance.financial.allowed[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ExplanationOfBenefit.benefitBalance.financial.allowed[x]', ['unsignedInt','string','Money',]`
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
  @ChoiceDataTypesMeta('ExplanationOfBenefit.benefitBalance.financial.allowed[x]',[
    'unsignedInt',
    'string',
    'Money',
  ])
  private allowed?: IDataType | undefined;

  /**
   * ExplanationOfBenefit.benefitBalance.financial.used[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ExplanationOfBenefit.benefitBalance.financial.used[x]', ['unsignedInt','Money',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefits used
   * - **Definition:** The quantity of the benefit which have been consumed to date.
   * - **Requirements:** Needed to convey the benefits consumed to date.
   * - **FHIR Types:**
   *     'unsignedInt',
   *     'Money',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ExplanationOfBenefit.benefitBalance.financial.used[x]',[
    'unsignedInt',
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
      const optErrMsg = `Invalid ExplanationOfBenefit.benefitBalance.financial.type; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ChoiceDataTypes('ExplanationOfBenefit.benefitBalance.financial.allowed[x]')`
   *
   * @param value - the `allowed` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ExplanationOfBenefit.benefitBalance.financial.allowed[x]')
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
        `DataType mismatch for ExplanationOfBenefit.benefitBalance.financial.allowed[x]: Expected UnsignedIntType but encountered ${this.allowed.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.benefitBalance.financial.allowed[x]: Expected StringType but encountered ${this.allowed.fhirType()}`,
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
        `DataType mismatch for ExplanationOfBenefit.benefitBalance.financial.allowed[x]: Expected Money but encountered ${this.allowed.fhirType()}`,
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
   * @decorator `@ChoiceDataTypes('ExplanationOfBenefit.benefitBalance.financial.used[x]')`
   *
   * @param value - the `used` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ExplanationOfBenefit.benefitBalance.financial.used[x]')
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
        `DataType mismatch for ExplanationOfBenefit.benefitBalance.financial.used[x]: Expected UnsignedIntType but encountered ${this.used.fhirType()}`,
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
   * @returns the `used` property value as a Money object if defined; else undefined
   */
  public getUsedMoney(): Money | undefined {
    if (!isDefined<IDataType | undefined>(this.used)) {
      return undefined;
    }
    if (!(this.used instanceof Money)) {
      throw new InvalidTypeError(
        `DataType mismatch for ExplanationOfBenefit.benefitBalance.financial.used[x]: Expected Money but encountered ${this.used.fhirType()}`,
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
    return 'ExplanationOfBenefit.benefitBalance.financial';
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
  public override copy(): ExplanationOfBenefitBenefitBalanceFinancialComponent {
    const dest = new ExplanationOfBenefitBenefitBalanceFinancialComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExplanationOfBenefitBenefitBalanceFinancialComponent): void {
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
