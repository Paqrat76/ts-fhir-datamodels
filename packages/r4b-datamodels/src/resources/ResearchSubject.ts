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
 * StructureDefinition.description: A physical entity which is the primary unit of operational and/or administrative interest in a study.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
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
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { ResearchSubjectStatusEnum } from '../code-systems/ResearchSubjectStatusEnum';

/**
 * ResearchSubject Class
 *
 * @remarks
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 *
 * **FHIR Specification**
 * - **Short:** Physical entity which is the primary unit of interest in the study
 * - **Definition:** A physical entity which is the primary unit of operational and/or administrative interest in a study.
 * - **Comment:** Need to make sure we encompass public health studies.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR ResearchSubject](http://hl7.org/fhir/StructureDefinition/ResearchSubject)
 */
export class ResearchSubject extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, study: Reference | null = null, individual: Reference | null = null) {
    super();

    this.researchSubjectStatusEnum = new ResearchSubjectStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<ResearchSubjectStatusEnum>(
      status,
      ResearchSubjectStatusEnum,
      this.researchSubjectStatusEnum,
      'ResearchSubject.status',
    );

    this.study = null;
    if (isDefined<Reference>(study)) {
      this.setStudy(study);
    }

    this.individual = null;
    if (isDefined<Reference>(individual)) {
      this.setIndividual(individual);
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

    fieldName = 'individual';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setIndividual(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'assignedArm';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setAssignedArmElement(datatype);
    }

    fieldName = 'actualArm';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setActualArmElement(datatype);
    }

    fieldName = 'consent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setConsent(datatype);
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
   * FHIR CodeSystem: ResearchSubjectStatus
   *
   * @see {@link ResearchSubjectStatusEnum }
   */
  private readonly researchSubjectStatusEnum: ResearchSubjectStatusEnum;

  /**
   * ResearchSubject.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
   * - **Definition:** The current state of the subject.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ResearchSubjectStatusEnum }
   */
  private status: EnumCodeType | null;

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
   * ResearchSubject.individual Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is part of study
   * - **Definition:** The record of the person or animal who is involved in the study.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private individual: Reference | null;

  /**
   * ResearchSubject.assignedArm Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What path should be followed
   * - **Definition:** The name of the arm in the study the subject is expected to follow as part of this study.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private assignedArm?: StringType | undefined;

  /**
   * ResearchSubject.actualArm Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What path was followed
   * - **Definition:** The name of the arm in the study the subject actually followed as part of this study.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actualArm?: StringType | undefined;

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
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private consent?: Reference | undefined;

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
   * @see CodeSystem Enumeration: {@link ResearchSubjectStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ResearchSubjectStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `ResearchSubject.status is required`);
    const errMsgPrefix = `Invalid ResearchSubject.status`;
    assertEnumCodeType<ResearchSubjectStatusEnum>(enumType, ResearchSubjectStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ResearchSubjectStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ResearchSubjectStatusEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `ResearchSubject.status is required`);
    const optErrMsg = `Invalid ResearchSubject.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.researchSubjectStatusEnum);
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
   * @see CodeSystem Enumeration: {@link ResearchSubjectStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ResearchSubjectStatusEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `ResearchSubject.status is required`);
    const optErrMsg = `Invalid ResearchSubject.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.researchSubjectStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
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
   * @returns the `individual` property value as a Reference object if defined; else null
   */
  public getIndividual(): Reference | null {
    return this.individual;
  }

  /**
   * Assigns the provided Individual object value to the `individual` property.
   *
   * @decorator `@ReferenceTargets('ResearchSubject.individual', ['Patient',])`
   *
   * @param value - the `individual` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchSubject.individual', [
    'Patient',
  ])
  public setIndividual(value: Reference): this {
    assertIsDefined<Reference>(value, `ResearchSubject.individual is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.individual = value;
    return this;
  }

  /**
   * @returns `true` if the `individual` property exists and has a value; `false` otherwise
   */
  public hasIndividual(): boolean {
    return isDefined<Reference>(this.individual) && !this.individual.isEmpty();
  }

  /**
   * @returns the `assignedArm` property value as a StringType object if defined; else an empty StringType object
   */
  public getAssignedArmElement(): StringType {
    return this.assignedArm ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `assignedArm` property.
   *
   * @param element - the `assignedArm` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAssignedArmElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ResearchSubject.assignedArm; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.assignedArm = element;
    } else {
      this.assignedArm = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assignedArm` property exists and has a value; `false` otherwise
   */
  public hasAssignedArmElement(): boolean {
    return isDefined<StringType>(this.assignedArm) && !this.assignedArm.isEmpty();
  }

  /**
   * @returns the `assignedArm` property value as a fhirString if defined; else undefined
   */
  public getAssignedArm(): fhirString | undefined {
    return this.assignedArm?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `assignedArm` property.
   *
   * @param value - the `assignedArm` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAssignedArm(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ResearchSubject.assignedArm (${String(value)})`;
      this.assignedArm = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.assignedArm = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assignedArm` property exists and has a value; `false` otherwise
   */
  public hasAssignedArm(): boolean {
    return this.hasAssignedArmElement();
  }

  /**
   * @returns the `actualArm` property value as a StringType object if defined; else an empty StringType object
   */
  public getActualArmElement(): StringType {
    return this.actualArm ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `actualArm` property.
   *
   * @param element - the `actualArm` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActualArmElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ResearchSubject.actualArm; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.actualArm = element;
    } else {
      this.actualArm = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actualArm` property exists and has a value; `false` otherwise
   */
  public hasActualArmElement(): boolean {
    return isDefined<StringType>(this.actualArm) && !this.actualArm.isEmpty();
  }

  /**
   * @returns the `actualArm` property value as a fhirString if defined; else undefined
   */
  public getActualArm(): fhirString | undefined {
    return this.actualArm?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `actualArm` property.
   *
   * @param value - the `actualArm` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActualArm(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ResearchSubject.actualArm (${String(value)})`;
      this.actualArm = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.actualArm = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actualArm` property exists and has a value; `false` otherwise
   */
  public hasActualArm(): boolean {
    return this.hasActualArmElement();
  }

  /**
   * @returns the `consent` property value as a Reference object; else an empty Reference object
   */
  public getConsent(): Reference {
    return this.consent ?? new Reference();
  }

  /**
   * Assigns the provided Consent object value to the `consent` property.
   *
   * @decorator `@ReferenceTargets('ResearchSubject.consent', ['Consent',])`
   *
   * @param value - the `consent` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchSubject.consent', [
    'Consent',
  ])
  public setConsent(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.consent = value;
    } else {
      this.consent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `consent` property exists and has a value; `false` otherwise
   */
  public hasConsent(): boolean {
    return isDefined<Reference>(this.consent) && !this.consent.isEmpty();
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
      this.period,
      this.study,
      this.individual,
      this.assignedArm,
      this.actualArm,
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
    dest.period = this.period?.copy();
    dest.study = this.study ? this.study.copy() : null;
    dest.individual = this.individual ? this.individual.copy() : null;
    dest.assignedArm = this.assignedArm?.copy();
    dest.actualArm = this.actualArm?.copy();
    dest.consent = this.consent?.copy();
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

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasStudy()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getStudy()!, 'study', jsonObj);
    } else {
      missingReqdProperties.push(`ResearchSubject.study`);
    }

    if (this.hasIndividual()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getIndividual()!, 'individual', jsonObj);
    } else {
      missingReqdProperties.push(`ResearchSubject.individual`);
    }

    if (this.hasAssignedArmElement()) {
      setFhirPrimitiveJson<fhirString>(this.getAssignedArmElement(), 'assignedArm', jsonObj);
    }

    if (this.hasActualArmElement()) {
      setFhirPrimitiveJson<fhirString>(this.getActualArmElement(), 'actualArm', jsonObj);
    }

    if (this.hasConsent()) {
      setFhirComplexJson(this.getConsent(), 'consent', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

