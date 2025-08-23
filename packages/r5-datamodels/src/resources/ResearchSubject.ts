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
 * ResearchSubject Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ResearchSubject
 * StructureDefinition.name: ResearchSubject
 * StructureDefinition.description: A ResearchSubject is a participant or object which is the recipient of investigative activities in a research study.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  IdType,
  JSON,
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
  fhirDateTime,
  fhirDateTimeSchema,
  fhirId,
  fhirIdSchema,
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
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

/**
 * ResearchSubject Class
 *
 * @remarks
 * A ResearchSubject is a participant or object which is the recipient of investigative activities in a research study.
 *
 * **FHIR Specification**
 * - **Short:** Participant or object which is the recipient of investigative activities in a study
 * - **Definition:** A ResearchSubject is a participant or object which is the recipient of investigative activities in a research study.
 * - **Comment:** Need to make sure we encompass public health studies.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR ResearchSubject](http://hl7.org/fhir/StructureDefinition/ResearchSubject)
 */
export class ResearchSubject extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, study: Reference | null = null, subject: Reference | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'ResearchSubject.status',
    );

    this.study = null;
    if (isDefined<Reference>(study)) {
      this.setStudy(study);
    }

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }
  }

  /**
   * Parse the provided `ResearchSubject` JSON to instantiate the ResearchSubject data model.
   *
   * @param sourceJson - JSON representing FHIR `ResearchSubject`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ResearchSubject
   * @returns ResearchSubject data model or undefined for `ResearchSubject`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ResearchSubject | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ResearchSubject';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ResearchSubject();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ResearchSubject');
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

    fieldName = 'progress';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ResearchSubjectProgressComponent | undefined = ResearchSubjectProgressComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProgress(component);
        }
      });
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'study';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStudy(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'assignedComparisonGroup';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setAssignedComparisonGroupElement(datatype);
    }

    fieldName = 'actualComparisonGroup';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setActualComparisonGroupElement(datatype);
    }

    fieldName = 'consent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addConsent(datatype);
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
   * ResearchSubject.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for research subject in a study
   * - **Definition:** Identifiers assigned to this research subject for a study.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * ResearchSubject.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The publication state of the resource (not of the subject).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * ResearchSubject.progress Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subject status
   * - **Definition:** The current state (status) of the subject and resons for status change where appropriate.
   * - **Comment:** This is intended to deal with the confusion routinely created by haing two conflated concepts of being in a particular state and having achieved a particular milestone.  In strict terms a milestone is a point of time event that results in a change from one state to another.  The state before the milestone is achieved is often given the same name as the milestone, and sometimes the state may have the same description.  For instance "Randomised" and "Visit 1" may be different milestones but the state remains at "on study" after each of them.  It is likely that more than one "state" pattern will be recorded for a subject and a type has been introduced to allow this simultaneous recording.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private progress?: ResearchSubjectProgressComponent[] | undefined;

  /**
   * ResearchSubject.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Start and end of participation
   * - **Definition:** The dates the subject began and ended their participation in the study.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * ResearchSubject.study Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Study subject is part of
   * - **Definition:** Reference to the study the subject is participating in.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ResearchStudy',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private study: Reference | null;

  /**
   * ResearchSubject.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or what is part of study
   * - **Definition:** The record of the person, animal or other entity involved in the study.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Specimen',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *       'http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject: Reference | null;

  /**
   * ResearchSubject.assignedComparisonGroup Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What path should be followed
   * - **Definition:** The name of the arm in the study the subject is expected to follow as part of this study.
   * - **Comment:** Maybe this is really PlanDefinition.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private assignedComparisonGroup?: IdType | undefined;

  /**
   * ResearchSubject.actualComparisonGroup Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What path was followed
   * - **Definition:** The name of the arm in the study the subject actually followed as part of this study.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actualComparisonGroup?: IdType | undefined;

  /**
   * ResearchSubject.consent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Agreement to participate in study
   * - **Definition:** A record of the patient\'s informed agreement to participate in the study.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Consent',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private consent?: Reference[] | undefined;

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
      const optErrMsg = `Invalid ResearchSubject.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ResearchSubject.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `ResearchSubject.status is required`);
    const errMsgPrefix = `Invalid ResearchSubject.status`;
    assertEnumCodeType<PublicationStatusEnum>(enumType, PublicationStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `ResearchSubject.status is required`);
    const optErrMsg = `Invalid ResearchSubject.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.publicationStatusEnum);
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `ResearchSubject.status is required`);
    const optErrMsg = `Invalid ResearchSubject.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.publicationStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `progress` property value as a ResearchSubjectProgressComponent array
   */
  public getProgress(): ResearchSubjectProgressComponent[] {
    return this.progress ?? ([] as ResearchSubjectProgressComponent[]);
  }

  /**
   * Assigns the provided ResearchSubjectProgressComponent array value to the `progress` property.
   *
   * @param value - the `progress` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProgress(value: ResearchSubjectProgressComponent[] | undefined): this {
    if (isDefinedList<ResearchSubjectProgressComponent>(value)) {
      const optErrMsg = `Invalid ResearchSubject.progress; Provided value array has an element that is not an instance of ResearchSubjectProgressComponent.`;
      assertFhirTypeList<ResearchSubjectProgressComponent>(value, ResearchSubjectProgressComponent, optErrMsg);
      this.progress = value;
    } else {
      this.progress = undefined;
    }
    return this;
  }

  /**
   * Add the provided ResearchSubjectProgressComponent value to the `progress` array property.
   *
   * @param value - the `progress` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProgress(value: ResearchSubjectProgressComponent | undefined): this {
    if (isDefined<ResearchSubjectProgressComponent>(value)) {
      const optErrMsg = `Invalid ResearchSubject.progress; Provided element is not an instance of ResearchSubjectProgressComponent.`;
      assertFhirType<ResearchSubjectProgressComponent>(value, ResearchSubjectProgressComponent, optErrMsg);
      this.initProgress();
      this.progress?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `progress` property exists and has a value; `false` otherwise
   */
  public hasProgress(): boolean {
    return isDefinedList<ResearchSubjectProgressComponent>(this.progress) && this.progress.some((item: ResearchSubjectProgressComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `progress` property
   */
  private initProgress(): void {
    if(!this.hasProgress()) {
      this.progress = [] as ResearchSubjectProgressComponent[];
    }
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
      const optErrMsg = `Invalid ResearchSubject.period; Provided element is not an instance of Period.`;
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
   * @returns the `study` property value as a Reference object if defined; else null
   */
  public getStudy(): Reference | null {
    return this.study;
  }

  /**
   * Assigns the provided Study object value to the `study` property.
   *
   * @decorator `@ReferenceTargets('ResearchSubject.study', ['ResearchStudy',])`
   *
   * @param value - the `study` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchSubject.study', [
    'ResearchStudy',
  ])
  public setStudy(value: Reference): this {
    assertIsDefined<Reference>(value, `ResearchSubject.study is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.study = value;
    return this;
  }

  /**
   * @returns `true` if the `study` property exists and has a value; `false` otherwise
   */
  public hasStudy(): boolean {
    return isDefined<Reference>(this.study) && !this.study.isEmpty();
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
   * @decorator `@ReferenceTargets('ResearchSubject.subject', ['Patient','Group','Specimen','Device','Medication','Substance','BiologicallyDerivedProduct',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchSubject.subject', [
    'Patient',
  
    'Group',
  
    'Specimen',
  
    'Device',
  
    'Medication',
  
    'Substance',
  
    'BiologicallyDerivedProduct',
  ])
  public setSubject(value: Reference): this {
    assertIsDefined<Reference>(value, `ResearchSubject.subject is required`);
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
   * @returns the `assignedComparisonGroup` property value as a IdType object if defined; else an empty IdType object
   */
  public getAssignedComparisonGroupElement(): IdType {
    return this.assignedComparisonGroup ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `assignedComparisonGroup` property.
   *
   * @param element - the `assignedComparisonGroup` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAssignedComparisonGroupElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid ResearchSubject.assignedComparisonGroup; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.assignedComparisonGroup = element;
    } else {
      this.assignedComparisonGroup = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assignedComparisonGroup` property exists and has a value; `false` otherwise
   */
  public hasAssignedComparisonGroupElement(): boolean {
    return isDefined<IdType>(this.assignedComparisonGroup) && !this.assignedComparisonGroup.isEmpty();
  }

  /**
   * @returns the `assignedComparisonGroup` property value as a fhirId if defined; else undefined
   */
  public getAssignedComparisonGroup(): fhirId | undefined {
    return this.assignedComparisonGroup?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `assignedComparisonGroup` property.
   *
   * @param value - the `assignedComparisonGroup` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAssignedComparisonGroup(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid ResearchSubject.assignedComparisonGroup (${String(value)})`;
      this.assignedComparisonGroup = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.assignedComparisonGroup = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assignedComparisonGroup` property exists and has a value; `false` otherwise
   */
  public hasAssignedComparisonGroup(): boolean {
    return this.hasAssignedComparisonGroupElement();
  }

  /**
   * @returns the `actualComparisonGroup` property value as a IdType object if defined; else an empty IdType object
   */
  public getActualComparisonGroupElement(): IdType {
    return this.actualComparisonGroup ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `actualComparisonGroup` property.
   *
   * @param element - the `actualComparisonGroup` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActualComparisonGroupElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid ResearchSubject.actualComparisonGroup; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.actualComparisonGroup = element;
    } else {
      this.actualComparisonGroup = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actualComparisonGroup` property exists and has a value; `false` otherwise
   */
  public hasActualComparisonGroupElement(): boolean {
    return isDefined<IdType>(this.actualComparisonGroup) && !this.actualComparisonGroup.isEmpty();
  }

  /**
   * @returns the `actualComparisonGroup` property value as a fhirId if defined; else undefined
   */
  public getActualComparisonGroup(): fhirId | undefined {
    return this.actualComparisonGroup?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `actualComparisonGroup` property.
   *
   * @param value - the `actualComparisonGroup` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActualComparisonGroup(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid ResearchSubject.actualComparisonGroup (${String(value)})`;
      this.actualComparisonGroup = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.actualComparisonGroup = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actualComparisonGroup` property exists and has a value; `false` otherwise
   */
  public hasActualComparisonGroup(): boolean {
    return this.hasActualComparisonGroupElement();
  }

  /**
   * @returns the `consent` property value as a Reference array
   */
  public getConsent(): Reference[] {
    return this.consent ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `consent` property.
   *
   * @decorator `@ReferenceTargets('ResearchSubject.consent', ['Consent',])`
   *
   * @param value - the `consent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchSubject.consent', [
    'Consent',
  ])
  public setConsent(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.consent = value;
    } else {
      this.consent = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `consent` array property.
   *
   * @decorator `@ReferenceTargets('ResearchSubject.consent', ['Consent',])`
   *
   * @param value - the `consent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchSubject.consent', [
    'Consent',
  ])
  public addConsent(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initConsent();
      this.consent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `consent` property exists and has a value; `false` otherwise
   */
  public hasConsent(): boolean {
    return isDefinedList<Reference>(this.consent) && this.consent.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `consent` property
   */
  private initConsent(): void {
    if (!this.hasConsent()) {
      this.consent = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ResearchSubject';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.progress,
      this.period,
      this.study,
      this.subject,
      this.assignedComparisonGroup,
      this.actualComparisonGroup,
      this.consent,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ResearchSubject {
    const dest = new ResearchSubject();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ResearchSubject): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    const progressList = copyListValues<ResearchSubjectProgressComponent>(this.progress);
    dest.progress = progressList.length === 0 ? undefined : progressList;
    dest.period = this.period?.copy();
    dest.study = this.study ? this.study.copy() : null;
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.assignedComparisonGroup = this.assignedComparisonGroup?.copy();
    dest.actualComparisonGroup = this.actualComparisonGroup?.copy();
    const consentList = copyListValues<Reference>(this.consent);
    dest.consent = consentList.length === 0 ? undefined : consentList;
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
      missingReqdProperties.push(`ResearchSubject.status`);
    }

    if (this.hasProgress()) {
      setFhirBackboneElementListJson(this.getProgress(), 'progress', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasStudy()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getStudy()!, 'study', jsonObj);
    } else {
      missingReqdProperties.push(`ResearchSubject.study`);
    }

    if (this.hasSubject()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getSubject()!, 'subject', jsonObj);
    } else {
      missingReqdProperties.push(`ResearchSubject.subject`);
    }

    if (this.hasAssignedComparisonGroupElement()) {
      setFhirPrimitiveJson<fhirId>(this.getAssignedComparisonGroupElement(), 'assignedComparisonGroup', jsonObj);
    }

    if (this.hasActualComparisonGroupElement()) {
      setFhirPrimitiveJson<fhirId>(this.getActualComparisonGroupElement(), 'actualComparisonGroup', jsonObj);
    }

    if (this.hasConsent()) {
      setFhirComplexListJson(this.getConsent(), 'consent', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * ResearchSubjectProgressComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Subject status
 * - **Definition:** The current state (status) of the subject and resons for status change where appropriate.
 * - **Comment:** This is intended to deal with the confusion routinely created by haing two conflated concepts of being in a particular state and having achieved a particular milestone.  In strict terms a milestone is a point of time event that results in a change from one state to another.  The state before the milestone is achieved is often given the same name as the milestone, and sometimes the state may have the same description.  For instance "Randomised" and "Visit 1" may be different milestones but the state remains at "on study" after each of them.  It is likely that more than one "state" pattern will be recorded for a subject and a type has been introduced to allow this simultaneous recording.
 *
 * @category Data Models: Resource
 * @see [FHIR ResearchSubject](http://hl7.org/fhir/StructureDefinition/ResearchSubject)
 */
export class ResearchSubjectProgressComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ResearchSubjectProgressComponent` JSON to instantiate the ResearchSubjectProgressComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ResearchSubjectProgressComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ResearchSubjectProgressComponent
   * @returns ResearchSubjectProgressComponent data model or undefined for `ResearchSubjectProgressComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ResearchSubjectProgressComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ResearchSubjectProgressComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ResearchSubjectProgressComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'subjectState';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubjectState(datatype);
    }

    fieldName = 'milestone';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMilestone(datatype);
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReason(datatype);
    }

    fieldName = 'startDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setStartDateElement(datatype);
    }

    fieldName = 'endDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setEndDateElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ResearchSubject.progress.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** state | milestone
   * - **Definition:** Identifies the aspect of the subject\'s journey that the state refers to.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * ResearchSubject.progress.subjectState Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
   * - **Definition:** The current state of the subject.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subjectState?: CodeableConcept | undefined;

  /**
   * ResearchSubject.progress.milestone Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** SignedUp | Screened | Randomized
   * - **Definition:** The milestones the subject has passed through.
   * - **Comment:** There can be multiple entries but it is also valid to just have the most recent.  This should npt be rlied upon as the full path the subject has taken.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private milestone?: CodeableConcept | undefined;

  /**
   * ResearchSubject.progress.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** State change reason
   * - **Definition:** The reason for the state change.  If coded it should follow the formal subject state model.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableConcept | undefined;

  /**
   * ResearchSubject.progress.startDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** State change date
   * - **Definition:** The date when the new status started.
   * - **Comment:** This is NOT the date the change in state was recorded.
   * - **Requirements:** This was originally defined as the date when the change in status occurred.  This assumed all                      states were recorded which is not true.  Hence the need to track the end of the state.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private startDate?: DateTimeType | undefined;

  /**
   * ResearchSubject.progress.endDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** State change date
   * - **Definition:** The date when the state ended.
   * - **Requirements:** See the requirement on the start date.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private endDate?: DateTimeType | undefined;

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
      const optErrMsg = `Invalid ResearchSubject.progress.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subjectState` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSubjectState(): CodeableConcept {
    return this.subjectState ?? new CodeableConcept();
  }

  /**
   * Assigns the provided SubjectState object value to the `subjectState` property.
   *
   * @param value - the `subjectState` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubjectState(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchSubject.progress.subjectState; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.subjectState = value;
    } else {
      this.subjectState = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subjectState` property exists and has a value; `false` otherwise
   */
  public hasSubjectState(): boolean {
    return isDefined<CodeableConcept>(this.subjectState) && !this.subjectState.isEmpty();
  }

  /**
   * @returns the `milestone` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMilestone(): CodeableConcept {
    return this.milestone ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Milestone object value to the `milestone` property.
   *
   * @param value - the `milestone` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMilestone(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchSubject.progress.milestone; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.milestone = value;
    } else {
      this.milestone = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `milestone` property exists and has a value; `false` otherwise
   */
  public hasMilestone(): boolean {
    return isDefined<CodeableConcept>(this.milestone) && !this.milestone.isEmpty();
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
      const optErrMsg = `Invalid ResearchSubject.progress.reason; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `startDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getStartDateElement(): DateTimeType {
    return this.startDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `startDate` property.
   *
   * @param element - the `startDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStartDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid ResearchSubject.progress.startDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.startDate = element;
    } else {
      this.startDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `startDate` property exists and has a value; `false` otherwise
   */
  public hasStartDateElement(): boolean {
    return isDefined<DateTimeType>(this.startDate) && !this.startDate.isEmpty();
  }

  /**
   * @returns the `startDate` property value as a fhirDateTime if defined; else undefined
   */
  public getStartDate(): fhirDateTime | undefined {
    return this.startDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `startDate` property.
   *
   * @param value - the `startDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStartDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid ResearchSubject.progress.startDate (${String(value)})`;
      this.startDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.startDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `startDate` property exists and has a value; `false` otherwise
   */
  public hasStartDate(): boolean {
    return this.hasStartDateElement();
  }

  /**
   * @returns the `endDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getEndDateElement(): DateTimeType {
    return this.endDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `endDate` property.
   *
   * @param element - the `endDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEndDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid ResearchSubject.progress.endDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.endDate = element;
    } else {
      this.endDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `endDate` property exists and has a value; `false` otherwise
   */
  public hasEndDateElement(): boolean {
    return isDefined<DateTimeType>(this.endDate) && !this.endDate.isEmpty();
  }

  /**
   * @returns the `endDate` property value as a fhirDateTime if defined; else undefined
   */
  public getEndDate(): fhirDateTime | undefined {
    return this.endDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `endDate` property.
   *
   * @param value - the `endDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEndDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid ResearchSubject.progress.endDate (${String(value)})`;
      this.endDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.endDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `endDate` property exists and has a value; `false` otherwise
   */
  public hasEndDate(): boolean {
    return this.hasEndDateElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ResearchSubject.progress';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.subjectState,
      this.milestone,
      this.reason,
      this.startDate,
      this.endDate,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ResearchSubjectProgressComponent {
    const dest = new ResearchSubjectProgressComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ResearchSubjectProgressComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.subjectState = this.subjectState?.copy();
    dest.milestone = this.milestone?.copy();
    dest.reason = this.reason?.copy();
    dest.startDate = this.startDate?.copy();
    dest.endDate = this.endDate?.copy();
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

    if (this.hasSubjectState()) {
      setFhirComplexJson(this.getSubjectState(), 'subjectState', jsonObj);
    }

    if (this.hasMilestone()) {
      setFhirComplexJson(this.getMilestone(), 'milestone', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasStartDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getStartDateElement(), 'startDate', jsonObj);
    }

    if (this.hasEndDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getEndDateElement(), 'endDate', jsonObj);
    }

    return jsonObj;
  }
}
