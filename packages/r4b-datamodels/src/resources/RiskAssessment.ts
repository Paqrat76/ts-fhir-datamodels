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
 * RiskAssessment Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/RiskAssessment
 * StructureDefinition.name: RiskAssessment
 * StructureDefinition.description: An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
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
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDecimal,
  fhirDecimalSchema,
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
import { Annotation, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Range, Reference } from '../complex-types/complex-datatypes';
import { ObservationStatusEnum } from '../code-systems/ObservationStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * RiskAssessment Class
 *
 * @remarks
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 *
 * **FHIR Specification**
 * - **Short:** Potential outcomes for a subject with likelihood
 * - **Definition:** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR RiskAssessment](http://hl7.org/fhir/StructureDefinition/RiskAssessment)
 */
export class RiskAssessment extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, subject: Reference | null = null) {
    super();

    this.observationStatusEnum = new ObservationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<ObservationStatusEnum>(
      status,
      ObservationStatusEnum,
      this.observationStatusEnum,
      'RiskAssessment.status',
    );

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }
  }

  /**
   * Parse the provided `RiskAssessment` JSON to instantiate the RiskAssessment data model.
   *
   * @param sourceJson - JSON representing FHIR `RiskAssessment`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RiskAssessment
   * @returns RiskAssessment data model or undefined for `RiskAssessment`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): RiskAssessment | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RiskAssessment';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RiskAssessment();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'RiskAssessment');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = RiskAssessment[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for RiskAssessment`;
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

    fieldName = 'basedOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBasedOn(datatype);
    }

    fieldName = 'parent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setParent(datatype);
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

    fieldName = 'method';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMethod(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSubject(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'occurrence[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const occurrence: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setOccurrence(occurrence);

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCondition(datatype);
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPerformer(datatype);
    }

    fieldName = 'reasonCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReasonCode(datatype);
        }
      });
    }

    fieldName = 'reasonReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReasonReference(datatype);
        }
      });
  }

    fieldName = 'basis';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addBasis(datatype);
        }
      });
  }

    fieldName = 'prediction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RiskAssessmentPredictionComponent | undefined = RiskAssessmentPredictionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPrediction(component);
        }
      });
    }

    fieldName = 'mitigation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMitigationElement(datatype);
    }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNote(datatype);
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
   * RiskAssessment.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique identifier for the assessment
   * - **Definition:** Business identifier assigned to the risk assessment.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * RiskAssessment.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request fulfilled by this assessment
   * - **Definition:** A reference to the request that is fulfilled by this risk assessment.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private basedOn?: Reference | undefined;

  /**
   * RiskAssessment.parent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Part of this occurrence
   * - **Definition:** A reference to a resource that this risk assessment is part of, such as a Procedure.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private parent?: Reference | undefined;

  /**
   * FHIR CodeSystem: ObservationStatus
   *
   * @see {@link ObservationStatusEnum }
   */
  private readonly observationStatusEnum: ObservationStatusEnum;

  /**
   * RiskAssessment.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** registered | preliminary | final | amended +
   * - **Definition:** The status of the RiskAssessment, using the same statuses as an Observation.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * RiskAssessment.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Evaluation mechanism
   * - **Definition:** The algorithm, process or mechanism used to evaluate the risk.
   * - **Requirements:** The method can influence the results of the assessment.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private method?: CodeableConcept | undefined;

  /**
   * RiskAssessment.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of assessment
   * - **Definition:** The type of the risk assessment performed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * RiskAssessment.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who/what does assessment apply to?
   * - **Definition:** The patient or group the risk assessment applies to.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject: Reference | null;

  /**
   * RiskAssessment.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where was assessment performed?
   * - **Definition:** The encounter where the assessment was performed.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private encounter?: Reference | undefined;

  /**
   * RiskAssessment.occurrence[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('RiskAssessment.occurrence[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When was assessment made?
   * - **Definition:** The date (and possibly time) the risk assessment was performed.
   * - **Requirements:** The assessment results lose validity the more time elapses from when they are first made.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('RiskAssessment.occurrence[x]',[
    'dateTime',
    'Period',
  ])
  private occurrence?: IDataType | undefined;

  /**
   * RiskAssessment.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Condition assessed
   * - **Definition:** For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private condition?: Reference | undefined;

  /**
   * RiskAssessment.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who did assessment?
   * - **Definition:** The provider or software application that performed the assessment.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private performer?: Reference | undefined;

  /**
   * RiskAssessment.reasonCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why the assessment was necessary?
   * - **Definition:** The reason the risk assessment was performed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonCode?: CodeableConcept[] | undefined;

  /**
   * RiskAssessment.reasonReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why the assessment was necessary?
   * - **Definition:** Resources supporting the reason the risk assessment was performed.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonReference?: Reference[] | undefined;

  /**
   * RiskAssessment.basis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information used in assessment
   * - **Definition:** Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private basis?: Reference[] | undefined;

  /**
   * RiskAssessment.prediction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Outcome predicted
   * - **Definition:** Describes the expected outcome for the subject.
   * - **Comment:** Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private prediction?: RiskAssessmentPredictionComponent[] | undefined;

  /**
   * RiskAssessment.mitigation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How to reduce risk
   * - **Definition:** A description of the steps that might be taken to reduce the identified risk(s).
   * - **Requirements:** One of the main reasons for assessing risks is to identify whether interventional steps are needed to reduce risk.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private mitigation?: StringType | undefined;

  /**
   * RiskAssessment.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments on the risk assessment
   * - **Definition:** Additional comments about the risk assessment.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

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
      const optErrMsg = `Invalid RiskAssessment.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid RiskAssessment.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `basedOn` property value as a Reference object; else an empty Reference object
   */
  public getBasedOn(): Reference {
    return this.basedOn ?? new Reference();
  }

  /**
   * Assigns the provided BasedOn object value to the `basedOn` property.
   *
   * @decorator `@ReferenceTargets('RiskAssessment.basedOn', ['Resource',])`
   *
   * @param value - the `basedOn` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RiskAssessment.basedOn', [
    'Resource',
  ])
  public setBasedOn(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.basedOn = value;
    } else {
      this.basedOn = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `basedOn` property exists and has a value; `false` otherwise
   */
  public hasBasedOn(): boolean {
    return isDefined<Reference>(this.basedOn) && !this.basedOn.isEmpty();
  }

  /**
   * @returns the `parent` property value as a Reference object; else an empty Reference object
   */
  public getParent(): Reference {
    return this.parent ?? new Reference();
  }

  /**
   * Assigns the provided Parent object value to the `parent` property.
   *
   * @decorator `@ReferenceTargets('RiskAssessment.parent', ['Resource',])`
   *
   * @param value - the `parent` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RiskAssessment.parent', [
    'Resource',
  ])
  public setParent(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.parent = value;
    } else {
      this.parent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `parent` property exists and has a value; `false` otherwise
   */
  public hasParent(): boolean {
    return isDefined<Reference>(this.parent) && !this.parent.isEmpty();
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `RiskAssessment.status is required`);
    const errMsgPrefix = `Invalid RiskAssessment.status`;
    assertEnumCodeType<ObservationStatusEnum>(enumType, ObservationStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `RiskAssessment.status is required`);
    const optErrMsg = `Invalid RiskAssessment.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.observationStatusEnum);
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `RiskAssessment.status is required`);
    const optErrMsg = `Invalid RiskAssessment.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.observationStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `method` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMethod(): CodeableConcept {
    return this.method ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Method object value to the `method` property.
   *
   * @param value - the `method` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMethod(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RiskAssessment.method; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.method = value;
    } else {
      this.method = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `method` property exists and has a value; `false` otherwise
   */
  public hasMethod(): boolean {
    return isDefined<CodeableConcept>(this.method) && !this.method.isEmpty();
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
      const optErrMsg = `Invalid RiskAssessment.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subject` property value as a Reference object if defined; else null
   */
  public getSubject(): Reference | null {
    return this.subject;
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('RiskAssessment.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RiskAssessment.subject', [
    'Patient',
  
    'Group',
  ])
  public setSubject(value: Reference): this {
    assertIsDefined<Reference>(value, `RiskAssessment.subject is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.subject = value;
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefined<Reference>(this.subject) && !this.subject.isEmpty();
  }

  /**
   * @returns the `encounter` property value as a Reference object; else an empty Reference object
   */
  public getEncounter(): Reference {
    return this.encounter ?? new Reference();
  }

  /**
   * Assigns the provided Encounter object value to the `encounter` property.
   *
   * @decorator `@ReferenceTargets('RiskAssessment.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RiskAssessment.encounter', [
    'Encounter',
  ])
  public setEncounter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.encounter = value;
    } else {
      this.encounter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `encounter` property exists and has a value; `false` otherwise
   */
  public hasEncounter(): boolean {
    return isDefined<Reference>(this.encounter) && !this.encounter.isEmpty();
  }

  /**
   * @returns the `occurrence` property value as a DataType object if defined; else undefined
   */
  public getOccurrence(): IDataType | undefined {
    return this.occurrence;
  }

  /**
   * Assigns the provided DataType object value to the `occurrence` property.
   *
   * @decorator `@ChoiceDataTypes('RiskAssessment.occurrence[x]')`
   *
   * @param value - the `occurrence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('RiskAssessment.occurrence[x]')
  public setOccurrence(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.occurrence = value;
    } else {
      this.occurrence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrence` property exists and has a value; `false` otherwise
   */
  public hasOccurrence(): boolean {
    return isDefined<IDataType>(this.occurrence) && !this.occurrence.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `occurrence` property value as a DateTimeType object if defined; else undefined
   */
  public getOccurrenceDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.occurrence)) {
      return undefined;
    }
    if (!(this.occurrence instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for RiskAssessment.occurrence[x]: Expected DateTimeType but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `occurrence` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasOccurrenceDateTimeType(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof DateTimeType;
  }

  /**
   * @returns the `occurrence` property value as a Period object if defined; else undefined
   */
  public getOccurrencePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.occurrence)) {
      return undefined;
    }
    if (!(this.occurrence instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for RiskAssessment.occurrence[x]: Expected Period but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `occurrence` property exists as a Period and has a value; `false` otherwise
   */
  public hasOccurrencePeriod(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `condition` property value as a Reference object; else an empty Reference object
   */
  public getCondition(): Reference {
    return this.condition ?? new Reference();
  }

  /**
   * Assigns the provided Condition object value to the `condition` property.
   *
   * @decorator `@ReferenceTargets('RiskAssessment.condition', ['Condition',])`
   *
   * @param value - the `condition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RiskAssessment.condition', [
    'Condition',
  ])
  public setCondition(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.condition = value;
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return isDefined<Reference>(this.condition) && !this.condition.isEmpty();
  }

  /**
   * @returns the `performer` property value as a Reference object; else an empty Reference object
   */
  public getPerformer(): Reference {
    return this.performer ?? new Reference();
  }

  /**
   * Assigns the provided Performer object value to the `performer` property.
   *
   * @decorator `@ReferenceTargets('RiskAssessment.performer', ['Practitioner','PractitionerRole','Device',])`
   *
   * @param value - the `performer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RiskAssessment.performer', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  ])
  public setPerformer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefined<Reference>(this.performer) && !this.performer.isEmpty();
  }

  /**
   * @returns the `reasonCode` property value as a CodeableConcept array
   */
  public getReasonCode(): CodeableConcept[] {
    return this.reasonCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `reasonCode` property.
   *
   * @param value - the `reasonCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReasonCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RiskAssessment.reasonCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reasonCode = value;
    } else {
      this.reasonCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `reasonCode` array property.
   *
   * @param value - the `reasonCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReasonCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RiskAssessment.reasonCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initReasonCode();
      this.reasonCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonCode` property exists and has a value; `false` otherwise
   */
  public hasReasonCode(): boolean {
    return isDefinedList<CodeableConcept>(this.reasonCode) && this.reasonCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `reasonCode` property
   */
  private initReasonCode(): void {
    if(!this.hasReasonCode()) {
      this.reasonCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `reasonReference` property value as a Reference array
   */
  public getReasonReference(): Reference[] {
    return this.reasonReference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `reasonReference` property.
   *
   * @decorator `@ReferenceTargets('RiskAssessment.reasonReference', ['Condition','Observation','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RiskAssessment.reasonReference', [
    'Condition',
  
    'Observation',
  
    'DiagnosticReport',
  
    'DocumentReference',
  ])
  public setReasonReference(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reasonReference = value;
    } else {
      this.reasonReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `reasonReference` array property.
   *
   * @decorator `@ReferenceTargets('RiskAssessment.reasonReference', ['Condition','Observation','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RiskAssessment.reasonReference', [
    'Condition',
  
    'Observation',
  
    'DiagnosticReport',
  
    'DocumentReference',
  ])
  public addReasonReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReasonReference();
      this.reasonReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonReference` property exists and has a value; `false` otherwise
   */
  public hasReasonReference(): boolean {
    return isDefinedList<Reference>(this.reasonReference) && this.reasonReference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `reasonReference` property
   */
  private initReasonReference(): void {
    if (!this.hasReasonReference()) {
      this.reasonReference = [] as Reference[];
    }
  }

  /**
   * @returns the `basis` property value as a Reference array
   */
  public getBasis(): Reference[] {
    return this.basis ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `basis` property.
   *
   * @decorator `@ReferenceTargets('RiskAssessment.basis', ['Resource',])`
   *
   * @param value - the `basis` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RiskAssessment.basis', [
    'Resource',
  ])
  public setBasis(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.basis = value;
    } else {
      this.basis = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `basis` array property.
   *
   * @decorator `@ReferenceTargets('RiskAssessment.basis', ['Resource',])`
   *
   * @param value - the `basis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RiskAssessment.basis', [
    'Resource',
  ])
  public addBasis(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initBasis();
      this.basis?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `basis` property exists and has a value; `false` otherwise
   */
  public hasBasis(): boolean {
    return isDefinedList<Reference>(this.basis) && this.basis.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `basis` property
   */
  private initBasis(): void {
    if (!this.hasBasis()) {
      this.basis = [] as Reference[];
    }
  }

  /**
   * @returns the `prediction` property value as a RiskAssessmentPredictionComponent array
   */
  public getPrediction(): RiskAssessmentPredictionComponent[] {
    return this.prediction ?? ([] as RiskAssessmentPredictionComponent[]);
  }

  /**
   * Assigns the provided RiskAssessmentPredictionComponent array value to the `prediction` property.
   *
   * @param value - the `prediction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPrediction(value: RiskAssessmentPredictionComponent[] | undefined): this {
    if (isDefinedList<RiskAssessmentPredictionComponent>(value)) {
      const optErrMsg = `Invalid RiskAssessment.prediction; Provided value array has an element that is not an instance of RiskAssessmentPredictionComponent.`;
      assertFhirTypeList<RiskAssessmentPredictionComponent>(value, RiskAssessmentPredictionComponent, optErrMsg);
      this.prediction = value;
    } else {
      this.prediction = undefined;
    }
    return this;
  }

  /**
   * Add the provided RiskAssessmentPredictionComponent value to the `prediction` array property.
   *
   * @param value - the `prediction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPrediction(value: RiskAssessmentPredictionComponent | undefined): this {
    if (isDefined<RiskAssessmentPredictionComponent>(value)) {
      const optErrMsg = `Invalid RiskAssessment.prediction; Provided element is not an instance of RiskAssessmentPredictionComponent.`;
      assertFhirType<RiskAssessmentPredictionComponent>(value, RiskAssessmentPredictionComponent, optErrMsg);
      this.initPrediction();
      this.prediction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `prediction` property exists and has a value; `false` otherwise
   */
  public hasPrediction(): boolean {
    return isDefinedList<RiskAssessmentPredictionComponent>(this.prediction) && this.prediction.some((item: RiskAssessmentPredictionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `prediction` property
   */
  private initPrediction(): void {
    if(!this.hasPrediction()) {
      this.prediction = [] as RiskAssessmentPredictionComponent[];
    }
  }

  /**
   * @returns the `mitigation` property value as a StringType object if defined; else an empty StringType object
   */
  public getMitigationElement(): StringType {
    return this.mitigation ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `mitigation` property.
   *
   * @param element - the `mitigation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMitigationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid RiskAssessment.mitigation; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.mitigation = element;
    } else {
      this.mitigation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `mitigation` property exists and has a value; `false` otherwise
   */
  public hasMitigationElement(): boolean {
    return isDefined<StringType>(this.mitigation) && !this.mitigation.isEmpty();
  }

  /**
   * @returns the `mitigation` property value as a fhirString if defined; else undefined
   */
  public getMitigation(): fhirString | undefined {
    return this.mitigation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `mitigation` property.
   *
   * @param value - the `mitigation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMitigation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid RiskAssessment.mitigation (${String(value)})`;
      this.mitigation = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.mitigation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `mitigation` property exists and has a value; `false` otherwise
   */
  public hasMitigation(): boolean {
    return this.hasMitigationElement();
  }

  /**
   * @returns the `note` property value as a Annotation array
   */
  public getNote(): Annotation[] {
    return this.note ?? ([] as Annotation[]);
  }

  /**
   * Assigns the provided Annotation array value to the `note` property.
   *
   * @param value - the `note` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNote(value: Annotation[] | undefined): this {
    if (isDefinedList<Annotation>(value)) {
      const optErrMsg = `Invalid RiskAssessment.note; Provided value array has an element that is not an instance of Annotation.`;
      assertFhirTypeList<Annotation>(value, Annotation, optErrMsg);
      this.note = value;
    } else {
      this.note = undefined;
    }
    return this;
  }

  /**
   * Add the provided Annotation value to the `note` array property.
   *
   * @param value - the `note` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNote(value: Annotation | undefined): this {
    if (isDefined<Annotation>(value)) {
      const optErrMsg = `Invalid RiskAssessment.note; Provided element is not an instance of Annotation.`;
      assertFhirType<Annotation>(value, Annotation, optErrMsg);
      this.initNote();
      this.note?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `note` property exists and has a value; `false` otherwise
   */
  public hasNote(): boolean {
    return isDefinedList<Annotation>(this.note) && this.note.some((item: Annotation) => !item.isEmpty());
  }

  /**
   * Initialize the `note` property
   */
  private initNote(): void {
    if(!this.hasNote()) {
      this.note = [] as Annotation[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RiskAssessment';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.basedOn,
      this.parent,
      this.status,
      this.method,
      this.code,
      this.subject,
      this.encounter,
      this.occurrence,
      this.condition,
      this.performer,
      this.reasonCode,
      this.reasonReference,
      this.basis,
      this.prediction,
      this.mitigation,
      this.note,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RiskAssessment {
    const dest = new RiskAssessment();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RiskAssessment): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.basedOn = this.basedOn?.copy();
    dest.parent = this.parent?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.method = this.method?.copy();
    dest.code = this.code?.copy();
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.occurrence = this.occurrence?.copy() as IDataType;
    dest.condition = this.condition?.copy();
    dest.performer = this.performer?.copy();
    const reasonCodeList = copyListValues<CodeableConcept>(this.reasonCode);
    dest.reasonCode = reasonCodeList.length === 0 ? undefined : reasonCodeList;
    const reasonReferenceList = copyListValues<Reference>(this.reasonReference);
    dest.reasonReference = reasonReferenceList.length === 0 ? undefined : reasonReferenceList;
    const basisList = copyListValues<Reference>(this.basis);
    dest.basis = basisList.length === 0 ? undefined : basisList;
    const predictionList = copyListValues<RiskAssessmentPredictionComponent>(this.prediction);
    dest.prediction = predictionList.length === 0 ? undefined : predictionList;
    dest.mitigation = this.mitigation?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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

    if (this.hasBasedOn()) {
      setFhirComplexJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasParent()) {
      setFhirComplexJson(this.getParent(), 'parent', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`RiskAssessment.status`);
    }

    if (this.hasMethod()) {
      setFhirComplexJson(this.getMethod(), 'method', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasSubject()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getSubject()!, 'subject', jsonObj);
    } else {
      missingReqdProperties.push(`RiskAssessment.subject`);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasOccurrence()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOccurrence()!, 'occurrence', jsonObj);
    }

    if (this.hasCondition()) {
      setFhirComplexJson(this.getCondition(), 'condition', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirComplexJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasReasonCode()) {
      setFhirComplexListJson(this.getReasonCode(), 'reasonCode', jsonObj);
    }

    if (this.hasReasonReference()) {
      setFhirComplexListJson(this.getReasonReference(), 'reasonReference', jsonObj);
    }

    if (this.hasBasis()) {
      setFhirComplexListJson(this.getBasis(), 'basis', jsonObj);
    }

    if (this.hasPrediction()) {
      setFhirBackboneElementListJson(this.getPrediction(), 'prediction', jsonObj);
    }

    if (this.hasMitigationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMitigationElement(), 'mitigation', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * RiskAssessmentPredictionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Outcome predicted
 * - **Definition:** Describes the expected outcome for the subject.
 * - **Comment:** Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 *
 * @category Data Models: Resource
 * @see [FHIR RiskAssessment](http://hl7.org/fhir/StructureDefinition/RiskAssessment)
 */
export class RiskAssessmentPredictionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `RiskAssessmentPredictionComponent` JSON to instantiate the RiskAssessmentPredictionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RiskAssessmentPredictionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RiskAssessmentPredictionComponent
   * @returns RiskAssessmentPredictionComponent data model or undefined for `RiskAssessmentPredictionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RiskAssessmentPredictionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RiskAssessmentPredictionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RiskAssessmentPredictionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = RiskAssessmentPredictionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for RiskAssessmentPredictionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOutcome(datatype);
    }

    fieldName = 'probability[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const probability: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setProbability(probability);

    fieldName = 'qualitativeRisk';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQualitativeRisk(datatype);
    }

    fieldName = 'relativeRisk';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setRelativeRiskElement(datatype);
    }

    fieldName = 'when[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const when: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setWhen(when);

    fieldName = 'rationale';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setRationaleElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * RiskAssessment.prediction.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Possible outcome for the subject
   * - **Definition:** One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private outcome?: CodeableConcept | undefined;

  /**
   * RiskAssessment.prediction.probability[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('RiskAssessment.prediction.probability[x]', ['decimal','Range',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Likelihood of specified outcome
   * - **Definition:** Indicates how likely the outcome is (in the specified timeframe).
   * - **Comment:** If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
   * - **FHIR Types:**
   *     'decimal',
   *     'Range',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('RiskAssessment.prediction.probability[x]',[
    'decimal',
    'Range',
  ])
  private probability?: IDataType | undefined;

  /**
   * RiskAssessment.prediction.qualitativeRisk Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Likelihood of specified outcome as a qualitative value
   * - **Definition:** Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private qualitativeRisk?: CodeableConcept | undefined;

  /**
   * RiskAssessment.prediction.relativeRisk Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relative likelihood
   * - **Definition:** Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
   * - **Requirements:** Absolute risk is less meaningful than relative risk.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relativeRisk?: DecimalType | undefined;

  /**
   * RiskAssessment.prediction.when[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('RiskAssessment.prediction.when[x]', ['Period','Range',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Timeframe or age range
   * - **Definition:** Indicates the period of time or age range of the subject to which the specified probability applies.
   * - **Comment:** If not specified, the risk applies "over the subject\'s lifespan".
   * - **FHIR Types:**
   *     'Period',
   *     'Range',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('RiskAssessment.prediction.when[x]',[
    'Period',
    'Range',
  ])
  private when?: IDataType | undefined;

  /**
   * RiskAssessment.prediction.rationale Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Explanation of prediction
   * - **Definition:** Additional information explaining the basis for the prediction.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private rationale?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `outcome` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOutcome(): CodeableConcept {
    return this.outcome ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Outcome object value to the `outcome` property.
   *
   * @param value - the `outcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutcome(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RiskAssessment.prediction.outcome; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.outcome = value;
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcome(): boolean {
    return isDefined<CodeableConcept>(this.outcome) && !this.outcome.isEmpty();
  }

  /**
   * @returns the `probability` property value as a DataType object if defined; else undefined
   */
  public getProbability(): IDataType | undefined {
    return this.probability;
  }

  /**
   * Assigns the provided DataType object value to the `probability` property.
   *
   * @decorator `@ChoiceDataTypes('RiskAssessment.prediction.probability[x]')`
   *
   * @param value - the `probability` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('RiskAssessment.prediction.probability[x]')
  public setProbability(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.probability = value;
    } else {
      this.probability = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `probability` property exists and has a value; `false` otherwise
   */
  public hasProbability(): boolean {
    return isDefined<IDataType>(this.probability) && !this.probability.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `probability` property value as a DecimalType object if defined; else undefined
   */
  public getProbabilityDecimalType(): DecimalType | undefined {
    if (!isDefined<IDataType | undefined>(this.probability)) {
      return undefined;
    }
    if (!(this.probability instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for RiskAssessment.prediction.probability[x]: Expected DecimalType but encountered ${this.probability.fhirType()}`,
      );
    }
    return this.probability;
  }

  /**
   * @returns `true` if the `probability` property exists as a DecimalType and has a value; `false` otherwise
   */
  public hasProbabilityDecimalType(): boolean {
    return this.hasProbability() && this.probability instanceof DecimalType;
  }

  /**
   * @returns the `probability` property value as a Range object if defined; else undefined
   */
  public getProbabilityRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.probability)) {
      return undefined;
    }
    if (!(this.probability instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for RiskAssessment.prediction.probability[x]: Expected Range but encountered ${this.probability.fhirType()}`,
      );
    }
    return this.probability;
  }

  /**
   * @returns `true` if the `probability` property exists as a Range and has a value; `false` otherwise
   */
  public hasProbabilityRange(): boolean {
    return this.hasProbability() && this.probability instanceof Range;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `qualitativeRisk` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getQualitativeRisk(): CodeableConcept {
    return this.qualitativeRisk ?? new CodeableConcept();
  }

  /**
   * Assigns the provided QualitativeRisk object value to the `qualitativeRisk` property.
   *
   * @param value - the `qualitativeRisk` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQualitativeRisk(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RiskAssessment.prediction.qualitativeRisk; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.qualitativeRisk = value;
    } else {
      this.qualitativeRisk = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `qualitativeRisk` property exists and has a value; `false` otherwise
   */
  public hasQualitativeRisk(): boolean {
    return isDefined<CodeableConcept>(this.qualitativeRisk) && !this.qualitativeRisk.isEmpty();
  }

  /**
   * @returns the `relativeRisk` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getRelativeRiskElement(): DecimalType {
    return this.relativeRisk ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `relativeRisk` property.
   *
   * @param element - the `relativeRisk` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRelativeRiskElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid RiskAssessment.prediction.relativeRisk; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.relativeRisk = element;
    } else {
      this.relativeRisk = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `relativeRisk` property exists and has a value; `false` otherwise
   */
  public hasRelativeRiskElement(): boolean {
    return isDefined<DecimalType>(this.relativeRisk) && !this.relativeRisk.isEmpty();
  }

  /**
   * @returns the `relativeRisk` property value as a fhirDecimal if defined; else undefined
   */
  public getRelativeRisk(): fhirDecimal | undefined {
    return this.relativeRisk?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `relativeRisk` property.
   *
   * @param value - the `relativeRisk` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRelativeRisk(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid RiskAssessment.prediction.relativeRisk (${String(value)})`;
      this.relativeRisk = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.relativeRisk = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `relativeRisk` property exists and has a value; `false` otherwise
   */
  public hasRelativeRisk(): boolean {
    return this.hasRelativeRiskElement();
  }

  /**
   * @returns the `when` property value as a DataType object if defined; else undefined
   */
  public getWhen(): IDataType | undefined {
    return this.when;
  }

  /**
   * Assigns the provided DataType object value to the `when` property.
   *
   * @decorator `@ChoiceDataTypes('RiskAssessment.prediction.when[x]')`
   *
   * @param value - the `when` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('RiskAssessment.prediction.when[x]')
  public setWhen(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.when = value;
    } else {
      this.when = undefined;
    }
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
   * @returns the `when` property value as a Period object if defined; else undefined
   */
  public getWhenPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.when)) {
      return undefined;
    }
    if (!(this.when instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for RiskAssessment.prediction.when[x]: Expected Period but encountered ${this.when.fhirType()}`,
      );
    }
    return this.when;
  }

  /**
   * @returns `true` if the `when` property exists as a Period and has a value; `false` otherwise
   */
  public hasWhenPeriod(): boolean {
    return this.hasWhen() && this.when instanceof Period;
  }

  /**
   * @returns the `when` property value as a Range object if defined; else undefined
   */
  public getWhenRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.when)) {
      return undefined;
    }
    if (!(this.when instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for RiskAssessment.prediction.when[x]: Expected Range but encountered ${this.when.fhirType()}`,
      );
    }
    return this.when;
  }

  /**
   * @returns `true` if the `when` property exists as a Range and has a value; `false` otherwise
   */
  public hasWhenRange(): boolean {
    return this.hasWhen() && this.when instanceof Range;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `rationale` property value as a StringType object if defined; else an empty StringType object
   */
  public getRationaleElement(): StringType {
    return this.rationale ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `rationale` property.
   *
   * @param element - the `rationale` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRationaleElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid RiskAssessment.prediction.rationale; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.rationale = element;
    } else {
      this.rationale = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rationale` property exists and has a value; `false` otherwise
   */
  public hasRationaleElement(): boolean {
    return isDefined<StringType>(this.rationale) && !this.rationale.isEmpty();
  }

  /**
   * @returns the `rationale` property value as a fhirString if defined; else undefined
   */
  public getRationale(): fhirString | undefined {
    return this.rationale?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `rationale` property.
   *
   * @param value - the `rationale` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRationale(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid RiskAssessment.prediction.rationale (${String(value)})`;
      this.rationale = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.rationale = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rationale` property exists and has a value; `false` otherwise
   */
  public hasRationale(): boolean {
    return this.hasRationaleElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RiskAssessment.prediction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.outcome,
      this.probability,
      this.qualitativeRisk,
      this.relativeRisk,
      this.when,
      this.rationale,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RiskAssessmentPredictionComponent {
    const dest = new RiskAssessmentPredictionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RiskAssessmentPredictionComponent): void {
    super.copyValues(dest);
    dest.outcome = this.outcome?.copy();
    dest.probability = this.probability?.copy() as IDataType;
    dest.qualitativeRisk = this.qualitativeRisk?.copy();
    dest.relativeRisk = this.relativeRisk?.copy();
    dest.when = this.when?.copy() as IDataType;
    dest.rationale = this.rationale?.copy();
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

    if (this.hasOutcome()) {
      setFhirComplexJson(this.getOutcome(), 'outcome', jsonObj);
    }

    if (this.hasProbability()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getProbability()!, 'probability', jsonObj);
    }

    if (this.hasQualitativeRisk()) {
      setFhirComplexJson(this.getQualitativeRisk(), 'qualitativeRisk', jsonObj);
    }

    if (this.hasRelativeRiskElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getRelativeRiskElement(), 'relativeRisk', jsonObj);
    }

    if (this.hasWhen()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getWhen()!, 'when', jsonObj);
    }

    if (this.hasRationaleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getRationaleElement(), 'rationale', jsonObj);
    }

    return jsonObj;
  }
}
