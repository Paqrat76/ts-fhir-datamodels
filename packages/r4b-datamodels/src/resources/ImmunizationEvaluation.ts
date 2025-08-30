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
 * ImmunizationEvaluation Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ImmunizationEvaluation
 * StructureDefinition.name: ImmunizationEvaluation
 * StructureDefinition.description: Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  PositiveIntType,
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
  fhirDateTime,
  fhirDateTimeSchema,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { MedicationAdminStatusEnum } from '../code-systems/MedicationAdminStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ImmunizationEvaluation Class
 *
 * @remarks
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 *
 * **FHIR Specification**
 * - **Short:** Immunization evaluation information
 * - **Definition:** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR ImmunizationEvaluation](http://hl7.org/fhir/StructureDefinition/ImmunizationEvaluation)
 */
export class ImmunizationEvaluation extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, patient: Reference | null = null, targetDisease: CodeableConcept | null = null, immunizationEvent: Reference | null = null, doseStatus: CodeableConcept | null = null) {
    super();

    this.medicationAdminStatusEnum = new MedicationAdminStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<MedicationAdminStatusEnum>(
      status,
      MedicationAdminStatusEnum,
      this.medicationAdminStatusEnum,
      'ImmunizationEvaluation.status',
    );

    this.patient = null;
    if (isDefined<Reference>(patient)) {
      this.setPatient(patient);
    }

    this.targetDisease = null;
    if (isDefined<CodeableConcept>(targetDisease)) {
      this.setTargetDisease(targetDisease);
    }

    this.immunizationEvent = null;
    if (isDefined<Reference>(immunizationEvent)) {
      this.setImmunizationEvent(immunizationEvent);
    }

    this.doseStatus = null;
    if (isDefined<CodeableConcept>(doseStatus)) {
      this.setDoseStatus(doseStatus);
    }
  }

  /**
   * Parse the provided `ImmunizationEvaluation` JSON to instantiate the ImmunizationEvaluation data model.
   *
   * @param sourceJson - JSON representing FHIR `ImmunizationEvaluation`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImmunizationEvaluation
   * @returns ImmunizationEvaluation data model or undefined for `ImmunizationEvaluation`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ImmunizationEvaluation | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImmunizationEvaluation';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImmunizationEvaluation();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ImmunizationEvaluation');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ImmunizationEvaluation[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ImmunizationEvaluation`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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
        instance.setStatus(null);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      instance.setStatus(null);
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

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'authority';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthority(datatype);
    }

    fieldName = 'targetDisease';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setTargetDisease(null);
      } else {
        instance.setTargetDisease(datatype);
      }
    } else {
      instance.setTargetDisease(null);
    }

    fieldName = 'immunizationEvent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setImmunizationEvent(null);
      } else {
        instance.setImmunizationEvent(datatype);
      }
    } else {
      instance.setImmunizationEvent(null);
    }

    fieldName = 'doseStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setDoseStatus(null);
      } else {
        instance.setDoseStatus(datatype);
      }
    } else {
      instance.setDoseStatus(null);
    }

    fieldName = 'doseStatusReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDoseStatusReason(datatype);
        }
      });
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'series';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSeriesElement(datatype);
    }

    fieldName = 'doseNumber[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const doseNumber: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDoseNumber(doseNumber);

    fieldName = 'seriesDoses[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const seriesDoses: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setSeriesDoses(seriesDoses);

    return instance;
  }

  /**
   * ImmunizationEvaluation.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier
   * - **Definition:** A unique identifier assigned to this immunization evaluation record.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: MedicationAdminStatus
   *
   * @see {@link MedicationAdminStatusEnum }
   */
  private readonly medicationAdminStatusEnum: MedicationAdminStatusEnum;

  /**
   * ImmunizationEvaluation.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** completed | entered-in-error
   * - **Definition:** Indicates the current status of the evaluation of the vaccination administration event.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid).
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * ImmunizationEvaluation.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who this evaluation is for
   * - **Definition:** The individual for whom the evaluation is being done.
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
   * ImmunizationEvaluation.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date evaluation was performed
   * - **Definition:** The date the evaluation of the vaccine administration event was performed.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private date?: DateTimeType | undefined;

  /**
   * ImmunizationEvaluation.authority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is responsible for publishing the recommendations
   * - **Definition:** Indicates the authority who published the protocol (e.g. ACIP).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authority?: Reference | undefined;

  /**
   * ImmunizationEvaluation.targetDisease Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Evaluation target disease
   * - **Definition:** The vaccine preventable disease the dose is being evaluated against.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private targetDisease: CodeableConcept | null;

  /**
   * ImmunizationEvaluation.immunizationEvent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Immunization being evaluated
   * - **Definition:** The vaccine administration event being evaluated.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Immunization',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private immunizationEvent: Reference | null;

  /**
   * ImmunizationEvaluation.doseStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Status of the dose relative to published recommendations
   * - **Definition:** Indicates if the dose is valid or not valid with respect to the published recommendations.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private doseStatus: CodeableConcept | null;

  /**
   * ImmunizationEvaluation.doseStatusReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for the dose status
   * - **Definition:** Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private doseStatusReason?: CodeableConcept[] | undefined;

  /**
   * ImmunizationEvaluation.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Evaluation notes
   * - **Definition:** Additional information about the evaluation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * ImmunizationEvaluation.series Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of vaccine series
   * - **Definition:** One possible path to achieve presumed immunity against a disease - within the context of an authority.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private series?: StringType | undefined;

  /**
   * ImmunizationEvaluation.doseNumber[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ImmunizationEvaluation.doseNumber[x]', ['positiveInt','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dose number within series
   * - **Definition:** Nominal position in a series.
   * - **Comment:** The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   * - **FHIR Types:**
   *     'positiveInt',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ImmunizationEvaluation.doseNumber[x]',[
    'positiveInt',
    'string',
  ])
  private doseNumber?: IDataType | undefined;

  /**
   * ImmunizationEvaluation.seriesDoses[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ImmunizationEvaluation.seriesDoses[x]', ['positiveInt','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recommended number of doses for immunity
   * - **Definition:** The recommended number of doses to achieve immunity.
   * - **Comment:** The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   * - **FHIR Types:**
   *     'positiveInt',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ImmunizationEvaluation.seriesDoses[x]',[
    'positiveInt',
    'string',
  ])
  private seriesDoses?: IDataType | undefined;

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
      const optErrMsg = `Invalid ImmunizationEvaluation.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ImmunizationEvaluation.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ImmunizationEvaluation.status`;
      assertEnumCodeType<MedicationAdminStatusEnum>(enumType, MedicationAdminStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ImmunizationEvaluation.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.medicationAdminStatusEnum);
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
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ImmunizationEvaluation.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.medicationAdminStatusEnum);
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
   * @returns the `patient` property value as a Reference object if defined; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('ImmunizationEvaluation.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImmunizationEvaluation.patient', [
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
      const optErrMsg = `Invalid ImmunizationEvaluation.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ImmunizationEvaluation.date (${String(value)})`;
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
   * @returns the `authority` property value as a Reference object; else an empty Reference object
   */
  public getAuthority(): Reference {
    return this.authority ?? new Reference();
  }

  /**
   * Assigns the provided Authority object value to the `authority` property.
   *
   * @decorator `@ReferenceTargets('ImmunizationEvaluation.authority', ['Organization',])`
   *
   * @param value - the `authority` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImmunizationEvaluation.authority', [
    'Organization',
  ])
  public setAuthority(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.authority = value;
    } else {
      this.authority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authority` property exists and has a value; `false` otherwise
   */
  public hasAuthority(): boolean {
    return isDefined<Reference>(this.authority) && !this.authority.isEmpty();
  }

  /**
   * @returns the `targetDisease` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getTargetDisease(): CodeableConcept {
    return this.targetDisease ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `targetDisease` property.
   *
   * @param value - the `targetDisease` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTargetDisease(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationEvaluation.targetDisease; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.targetDisease = value;
    } else {
      this.targetDisease = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `targetDisease` property exists and has a value; `false` otherwise
   */
  public hasTargetDisease(): boolean {
    return isDefined<CodeableConcept>(this.targetDisease) && !this.targetDisease.isEmpty();
  }

  /**
   * @returns the `immunizationEvent` property value as a Reference object if defined; else an empty Reference object
   */
  public getImmunizationEvent(): Reference {
    return this.immunizationEvent ?? new Reference();
  }

  /**
   * Assigns the provided ImmunizationEvent object value to the `immunizationEvent` property.
   *
   * @decorator `@ReferenceTargets('ImmunizationEvaluation.immunizationEvent', ['Immunization',])`
   *
   * @param value - the `immunizationEvent` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImmunizationEvaluation.immunizationEvent', [
    'Immunization',
  ])
  public setImmunizationEvent(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.immunizationEvent = value;
    } else {
      this.immunizationEvent = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `immunizationEvent` property exists and has a value; `false` otherwise
   */
  public hasImmunizationEvent(): boolean {
    return isDefined<Reference>(this.immunizationEvent) && !this.immunizationEvent.isEmpty();
  }

  /**
   * @returns the `doseStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDoseStatus(): CodeableConcept {
    return this.doseStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `doseStatus` property.
   *
   * @param value - the `doseStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDoseStatus(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationEvaluation.doseStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.doseStatus = value;
    } else {
      this.doseStatus = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `doseStatus` property exists and has a value; `false` otherwise
   */
  public hasDoseStatus(): boolean {
    return isDefined<CodeableConcept>(this.doseStatus) && !this.doseStatus.isEmpty();
  }

  /**
   * @returns the `doseStatusReason` property value as a CodeableConcept array
   */
  public getDoseStatusReason(): CodeableConcept[] {
    return this.doseStatusReason ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `doseStatusReason` property.
   *
   * @param value - the `doseStatusReason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDoseStatusReason(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationEvaluation.doseStatusReason; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.doseStatusReason = value;
    } else {
      this.doseStatusReason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `doseStatusReason` array property.
   *
   * @param value - the `doseStatusReason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDoseStatusReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationEvaluation.doseStatusReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initDoseStatusReason();
      this.doseStatusReason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `doseStatusReason` property exists and has a value; `false` otherwise
   */
  public hasDoseStatusReason(): boolean {
    return isDefinedList<CodeableConcept>(this.doseStatusReason) && this.doseStatusReason.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `doseStatusReason` property
   */
  private initDoseStatusReason(): void {
    if(!this.hasDoseStatusReason()) {
      this.doseStatusReason = [] as CodeableConcept[];
    }
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
      const optErrMsg = `Invalid ImmunizationEvaluation.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ImmunizationEvaluation.description (${String(value)})`;
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
   * @returns the `series` property value as a StringType object if defined; else an empty StringType object
   */
  public getSeriesElement(): StringType {
    return this.series ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `series` property.
   *
   * @param element - the `series` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeriesElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ImmunizationEvaluation.series; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.series = element;
    } else {
      this.series = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `series` property exists and has a value; `false` otherwise
   */
  public hasSeriesElement(): boolean {
    return isDefined<StringType>(this.series) && !this.series.isEmpty();
  }

  /**
   * @returns the `series` property value as a fhirString if defined; else undefined
   */
  public getSeries(): fhirString | undefined {
    return this.series?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `series` property.
   *
   * @param value - the `series` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeries(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ImmunizationEvaluation.series (${String(value)})`;
      this.series = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.series = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `series` property exists and has a value; `false` otherwise
   */
  public hasSeries(): boolean {
    return this.hasSeriesElement();
  }

  /**
   * @returns the `doseNumber` property value as a DataType object if defined; else undefined
   */
  public getDoseNumber(): IDataType | undefined {
    return this.doseNumber;
  }

  /**
   * Assigns the provided DataType object value to the `doseNumber` property.
   *
   * @decorator `@ChoiceDataTypes('ImmunizationEvaluation.doseNumber[x]')`
   *
   * @param value - the `doseNumber` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ImmunizationEvaluation.doseNumber[x]')
  public setDoseNumber(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.doseNumber = value;
    } else {
      this.doseNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doseNumber` property exists and has a value; `false` otherwise
   */
  public hasDoseNumber(): boolean {
    return isDefined<IDataType>(this.doseNumber) && !this.doseNumber.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `doseNumber` property value as a PositiveIntType object if defined; else undefined
   */
  public getDoseNumberPositiveIntType(): PositiveIntType | undefined {
    if (!isDefined<IDataType | undefined>(this.doseNumber)) {
      return undefined;
    }
    if (!(this.doseNumber instanceof PositiveIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ImmunizationEvaluation.doseNumber[x]: Expected PositiveIntType but encountered ${this.doseNumber.fhirType()}`,
      );
    }
    return this.doseNumber;
  }

  /**
   * @returns `true` if the `doseNumber` property exists as a PositiveIntType and has a value; `false` otherwise
   */
  public hasDoseNumberPositiveIntType(): boolean {
    return this.hasDoseNumber() && this.doseNumber instanceof PositiveIntType;
  }

  /**
   * @returns the `doseNumber` property value as a StringType object if defined; else undefined
   */
  public getDoseNumberStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.doseNumber)) {
      return undefined;
    }
    if (!(this.doseNumber instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ImmunizationEvaluation.doseNumber[x]: Expected StringType but encountered ${this.doseNumber.fhirType()}`,
      );
    }
    return this.doseNumber;
  }

  /**
   * @returns `true` if the `doseNumber` property exists as a StringType and has a value; `false` otherwise
   */
  public hasDoseNumberStringType(): boolean {
    return this.hasDoseNumber() && this.doseNumber instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `seriesDoses` property value as a DataType object if defined; else undefined
   */
  public getSeriesDoses(): IDataType | undefined {
    return this.seriesDoses;
  }

  /**
   * Assigns the provided DataType object value to the `seriesDoses` property.
   *
   * @decorator `@ChoiceDataTypes('ImmunizationEvaluation.seriesDoses[x]')`
   *
   * @param value - the `seriesDoses` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ImmunizationEvaluation.seriesDoses[x]')
  public setSeriesDoses(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.seriesDoses = value;
    } else {
      this.seriesDoses = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `seriesDoses` property exists and has a value; `false` otherwise
   */
  public hasSeriesDoses(): boolean {
    return isDefined<IDataType>(this.seriesDoses) && !this.seriesDoses.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `seriesDoses` property value as a PositiveIntType object if defined; else undefined
   */
  public getSeriesDosesPositiveIntType(): PositiveIntType | undefined {
    if (!isDefined<IDataType | undefined>(this.seriesDoses)) {
      return undefined;
    }
    if (!(this.seriesDoses instanceof PositiveIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ImmunizationEvaluation.seriesDoses[x]: Expected PositiveIntType but encountered ${this.seriesDoses.fhirType()}`,
      );
    }
    return this.seriesDoses;
  }

  /**
   * @returns `true` if the `seriesDoses` property exists as a PositiveIntType and has a value; `false` otherwise
   */
  public hasSeriesDosesPositiveIntType(): boolean {
    return this.hasSeriesDoses() && this.seriesDoses instanceof PositiveIntType;
  }

  /**
   * @returns the `seriesDoses` property value as a StringType object if defined; else undefined
   */
  public getSeriesDosesStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.seriesDoses)) {
      return undefined;
    }
    if (!(this.seriesDoses instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ImmunizationEvaluation.seriesDoses[x]: Expected StringType but encountered ${this.seriesDoses.fhirType()}`,
      );
    }
    return this.seriesDoses;
  }

  /**
   * @returns `true` if the `seriesDoses` property exists as a StringType and has a value; `false` otherwise
   */
  public hasSeriesDosesStringType(): boolean {
    return this.hasSeriesDoses() && this.seriesDoses instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImmunizationEvaluation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.patient,
      this.date,
      this.authority,
      this.targetDisease,
      this.immunizationEvent,
      this.doseStatus,
      this.doseStatusReason,
      this.description,
      this.series,
      this.doseNumber,
      this.seriesDoses,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.patient, this.targetDisease, this.immunizationEvent, this.doseStatus, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImmunizationEvaluation {
    const dest = new ImmunizationEvaluation();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImmunizationEvaluation): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.date = this.date?.copy();
    dest.authority = this.authority?.copy();
    dest.targetDisease = this.targetDisease ? this.targetDisease.copy() : null;
    dest.immunizationEvent = this.immunizationEvent ? this.immunizationEvent.copy() : null;
    dest.doseStatus = this.doseStatus ? this.doseStatus.copy() : null;
    const doseStatusReasonList = copyListValues<CodeableConcept>(this.doseStatusReason);
    dest.doseStatusReason = doseStatusReasonList.length === 0 ? undefined : doseStatusReasonList;
    dest.description = this.description?.copy();
    dest.series = this.series?.copy();
    dest.doseNumber = this.doseNumber?.copy() as IDataType;
    dest.seriesDoses = this.seriesDoses?.copy() as IDataType;
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
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    } else {
      jsonObj['patient'] = null;
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasAuthority()) {
      setFhirComplexJson(this.getAuthority(), 'authority', jsonObj);
    }

    if (this.hasTargetDisease()) {
      setFhirComplexJson(this.getTargetDisease(), 'targetDisease', jsonObj);
    } else {
      jsonObj['targetDisease'] = null;
    }

    if (this.hasImmunizationEvent()) {
      setFhirComplexJson(this.getImmunizationEvent(), 'immunizationEvent', jsonObj);
    } else {
      jsonObj['immunizationEvent'] = null;
    }

    if (this.hasDoseStatus()) {
      setFhirComplexJson(this.getDoseStatus(), 'doseStatus', jsonObj);
    } else {
      jsonObj['doseStatus'] = null;
    }

    if (this.hasDoseStatusReason()) {
      setFhirComplexListJson(this.getDoseStatusReason(), 'doseStatusReason', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasSeriesElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSeriesElement(), 'series', jsonObj);
    }

    if (this.hasDoseNumber()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDoseNumber()!, 'doseNumber', jsonObj);
    }

    if (this.hasSeriesDoses()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getSeriesDoses()!, 'seriesDoses', jsonObj);
    }

    return jsonObj;
  }
}

