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
 * ImmunizationRecommendation Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation
 * StructureDefinition.name: ImmunizationRecommendation
 * StructureDefinition.description: A patient\'s point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 * StructureDefinition.fhirVersion: 4.0.1
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
  DateTimeType,
  DomainResource,
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
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  assertIsDefinedList,
  copyListValues,
  fhirDateTime,
  fhirDateTimeSchema,
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
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ImmunizationRecommendation Class
 *
 * @remarks
 * A patient\'s point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 *
 * **FHIR Specification**
 * - **Short:** Guidance or advice relating to an immunization
 * - **Definition:** A patient\'s point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR ImmunizationRecommendation](http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation)
 */
export class ImmunizationRecommendation extends DomainResource implements IDomainResource {
  constructor(patient: Reference | null = null, date: DateTimeType | fhirDateTime | null = null, recommendation: ImmunizationRecommendationRecommendationComponent[] | null = null) {
    super();

    this.patient = null;
    if (isDefined<Reference>(patient)) {
      this.setPatient(patient);
    }

    this.date = null;
    if (isDefined<DateTimeType | fhirDateTime>(date)) {
      if (date instanceof PrimitiveType) {
        this.setDateElement(date);
      } else {
        this.setDate(date);
      }
    }

    this.recommendation = null;
    if (isDefinedList<ImmunizationRecommendationRecommendationComponent>(recommendation)) {
      this.setRecommendation(recommendation);
    }
  }

  /**
   * Parse the provided `ImmunizationRecommendation` JSON to instantiate the ImmunizationRecommendation data model.
   *
   * @param sourceJson - JSON representing FHIR `ImmunizationRecommendation`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImmunizationRecommendation
   * @returns ImmunizationRecommendation data model or undefined for `ImmunizationRecommendation`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ImmunizationRecommendation | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImmunizationRecommendation';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImmunizationRecommendation();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ImmunizationRecommendation');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

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

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setDateElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'authority';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthority(datatype);
    }

    fieldName = 'recommendation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImmunizationRecommendationRecommendationComponent | undefined = ImmunizationRecommendationRecommendationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addRecommendation(component);
        }
      });
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
   * ImmunizationRecommendation.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier
   * - **Definition:** A unique identifier assigned to this particular recommendation record.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * ImmunizationRecommendation.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who this profile is for
   * - **Definition:** The patient the recommendation(s) are for.
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
   * ImmunizationRecommendation.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date recommendation(s) created
   * - **Definition:** The date the immunization recommendation(s) were created.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date: DateTimeType | null;

  /**
   * ImmunizationRecommendation.authority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is responsible for protocol
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
   * ImmunizationRecommendation.recommendation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Vaccine administration recommendations
   * - **Definition:** Vaccine administration recommendations.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private recommendation: ImmunizationRecommendationRecommendationComponent[] | null;

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
      const optErrMsg = `Invalid ImmunizationRecommendation.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ImmunizationRecommendation.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `patient` property value as a Reference object if defined; else null
   */
  public getPatient(): Reference | null {
    return this.patient;
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('ImmunizationRecommendation.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImmunizationRecommendation.patient', [
    'Patient',
  ])
  public setPatient(value: Reference): this {
    assertIsDefined<Reference>(value, `ImmunizationRecommendation.patient is required`);
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
   * @returns the `date` property value as a DateTimeType object if defined; else null
   */
  public getDateElement(): DateTimeType | null {
    return this.date;
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateTimeType): this {
    assertIsDefined<DateTimeType>(element, `ImmunizationRecommendation.date is required`);
    const optErrMsg = `Invalid ImmunizationRecommendation.date; Provided value is not an instance of DateTimeType.`;
    assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
    this.date = element;
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDateElement(): boolean {
    return isDefined<DateTimeType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDateTime if defined; else null
   */
  public getDate(): fhirDateTime | null {
    if (this.date?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.date.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDateTime): this {
    assertIsDefined<fhirDateTime>(value, `ImmunizationRecommendation.date is required`);
    const optErrMsg = `Invalid ImmunizationRecommendation.date (${String(value)})`;
    this.date = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
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
   * @decorator `@ReferenceTargets('ImmunizationRecommendation.authority', ['Organization',])`
   *
   * @param value - the `authority` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImmunizationRecommendation.authority', [
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
   * @returns the `recommendation` property value as a ImmunizationRecommendationRecommendationComponent array
   */
  public getRecommendation(): ImmunizationRecommendationRecommendationComponent[] {
    return this.recommendation ?? ([] as ImmunizationRecommendationRecommendationComponent[]);
  }

  /**
   * Assigns the provided ImmunizationRecommendationRecommendationComponent array value to the `recommendation` property.
   *
   * @param value - the `recommendation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRecommendation(value: ImmunizationRecommendationRecommendationComponent[]): this {
    assertIsDefinedList<ImmunizationRecommendationRecommendationComponent>(value, `ImmunizationRecommendation.recommendation is required`);
    const optErrMsg = `Invalid ImmunizationRecommendation.recommendation; Provided value array has an element that is not an instance of ImmunizationRecommendationRecommendationComponent.`;
    assertFhirTypeList<ImmunizationRecommendationRecommendationComponent>(value, ImmunizationRecommendationRecommendationComponent, optErrMsg);
    this.recommendation = value;
    return this;
  }

  /**
   * Add the provided ImmunizationRecommendationRecommendationComponent value to the `recommendation` array property.
   *
   * @param value - the `recommendation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRecommendation(value: ImmunizationRecommendationRecommendationComponent | undefined): this {
    if (isDefined<ImmunizationRecommendationRecommendationComponent>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation; Provided element is not an instance of ImmunizationRecommendationRecommendationComponent.`;
      assertFhirType<ImmunizationRecommendationRecommendationComponent>(value, ImmunizationRecommendationRecommendationComponent, optErrMsg);
      this.initRecommendation();
      this.recommendation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `recommendation` property exists and has a value; `false` otherwise
   */
  public hasRecommendation(): boolean {
    return isDefinedList<ImmunizationRecommendationRecommendationComponent>(this.recommendation) && this.recommendation.some((item: ImmunizationRecommendationRecommendationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `recommendation` property
   */
  private initRecommendation(): void {
    if(!this.hasRecommendation()) {
      this.recommendation = [] as ImmunizationRecommendationRecommendationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImmunizationRecommendation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.patient,
      this.date,
      this.authority,
      this.recommendation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImmunizationRecommendation {
    const dest = new ImmunizationRecommendation();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImmunizationRecommendation): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.date = this.date ? this.date.copy() : null;
    dest.authority = this.authority?.copy();
    const recommendationList = copyListValues<ImmunizationRecommendationRecommendationComponent>(this.recommendation);
    dest.recommendation = recommendationList.length === 0 ? null : recommendationList;
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

    if (this.hasPatient()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPatient()!, 'patient', jsonObj);
    } else {
      missingReqdProperties.push(`ImmunizationRecommendation.patient`);
    }

    if (this.hasDateElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement()!, 'date', jsonObj);
    } else {
      missingReqdProperties.push(`ImmunizationRecommendation.date`);
    }

    if (this.hasAuthority()) {
      setFhirComplexJson(this.getAuthority(), 'authority', jsonObj);
    }

    if (this.hasRecommendation()) {
      setFhirBackboneElementListJson(this.getRecommendation(), 'recommendation', jsonObj);
    } else {
      missingReqdProperties.push(`ImmunizationRecommendation.recommendation`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * ImmunizationRecommendationRecommendationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Vaccine administration recommendations
 * - **Definition:** Vaccine administration recommendations.
 *
 * @category Data Models: Resource
 * @see [FHIR ImmunizationRecommendation](http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation)
 */
export class ImmunizationRecommendationRecommendationComponent extends BackboneElement implements IBackboneElement {
  constructor(forecastStatus: CodeableConcept | null = null) {
    super();

    this.forecastStatus = null;
    if (isDefined<CodeableConcept>(forecastStatus)) {
      this.setForecastStatus(forecastStatus);
    }
  }

  /**
   * Parse the provided `ImmunizationRecommendationRecommendationComponent` JSON to instantiate the ImmunizationRecommendationRecommendationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImmunizationRecommendationRecommendationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImmunizationRecommendationRecommendationComponent
   * @returns ImmunizationRecommendationRecommendationComponent data model or undefined for `ImmunizationRecommendationRecommendationComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImmunizationRecommendationRecommendationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImmunizationRecommendationRecommendationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImmunizationRecommendationRecommendationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ImmunizationRecommendationRecommendationComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ImmunizationRecommendationRecommendationComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'vaccineCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addVaccineCode(datatype);
        }
      });
    }

    fieldName = 'targetDisease';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTargetDisease(datatype);
    }

    fieldName = 'contraindicatedVaccineCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addContraindicatedVaccineCode(datatype);
        }
      });
    }

    fieldName = 'forecastStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setForecastStatus(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'forecastReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addForecastReason(datatype);
        }
      });
    }

    fieldName = 'dateCriterion';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImmunizationRecommendationRecommendationDateCriterionComponent | undefined = ImmunizationRecommendationRecommendationDateCriterionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDateCriterion(component);
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

    fieldName = 'supportingImmunization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSupportingImmunization(datatype);
        }
      });
  }

    fieldName = 'supportingPatientInformation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSupportingPatientInformation(datatype);
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
   * ImmunizationRecommendation.recommendation.vaccineCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Vaccine  or vaccine group recommendation applies to
   * - **Definition:** Vaccine(s) or vaccine group that pertain to the recommendation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private vaccineCode?: CodeableConcept[] | undefined;

  /**
   * ImmunizationRecommendation.recommendation.targetDisease Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Disease to be immunized against
   * - **Definition:** The targeted disease for the recommendation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private targetDisease?: CodeableConcept | undefined;

  /**
   * ImmunizationRecommendation.recommendation.contraindicatedVaccineCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Vaccine which is contraindicated to fulfill the recommendation
   * - **Definition:** Vaccine(s) which should not be used to fulfill the recommendation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contraindicatedVaccineCode?: CodeableConcept[] | undefined;

  /**
   * ImmunizationRecommendation.recommendation.forecastStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Vaccine recommendation status
   * - **Definition:** Indicates the patient status with respect to the path to immunity for the target disease.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because the forecastStatus indicates whether a patient needs additional doses (due, overdue, etc) or not  (contraindicated, complete, etc).
   * - **isSummary:** true
   */
  private forecastStatus: CodeableConcept | null;

  /**
   * ImmunizationRecommendation.recommendation.forecastReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Vaccine administration status reason
   * - **Definition:** The reason for the assigned forecast status.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private forecastReason?: CodeableConcept[] | undefined;

  /**
   * ImmunizationRecommendation.recommendation.dateCriterion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dates governing proposed immunization
   * - **Definition:** Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dateCriterion?: ImmunizationRecommendationRecommendationDateCriterionComponent[] | undefined;

  /**
   * ImmunizationRecommendation.recommendation.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Protocol details
   * - **Definition:** Contains the description about the protocol under which the vaccine was administered.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * ImmunizationRecommendation.recommendation.series Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of vaccination series
   * - **Definition:** One possible path to achieve presumed immunity against a disease - within the context of an authority.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private series?: StringType | undefined;

  /**
   * ImmunizationRecommendation.recommendation.doseNumber[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ImmunizationRecommendation.recommendation.doseNumber[x]', ['positiveInt','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recommended dose number within series
   * - **Definition:** Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).
   * - **Comment:** The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   * - **FHIR Types:**
   *     'positiveInt',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('ImmunizationRecommendation.recommendation.doseNumber[x]',[
    'positiveInt',
    'string',
  ])
  private doseNumber?: IDataType | undefined;

  /**
   * ImmunizationRecommendation.recommendation.seriesDoses[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ImmunizationRecommendation.recommendation.seriesDoses[x]', ['positiveInt','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recommended number of doses for immunity
   * - **Definition:** The recommended number of doses to achieve immunity.
   * - **Comment:** The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   * - **FHIR Types:**
   *     'positiveInt',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ImmunizationRecommendation.recommendation.seriesDoses[x]',[
    'positiveInt',
    'string',
  ])
  private seriesDoses?: IDataType | undefined;

  /**
   * ImmunizationRecommendation.recommendation.supportingImmunization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Past immunizations supporting recommendation
   * - **Definition:** Immunization event history and/or evaluation that supports the status and recommendation.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Immunization',
   *       'http://hl7.org/fhir/StructureDefinition/ImmunizationEvaluation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private supportingImmunization?: Reference[] | undefined;

  /**
   * ImmunizationRecommendation.recommendation.supportingPatientInformation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient observations supporting recommendation
   * - **Definition:** Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private supportingPatientInformation?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `vaccineCode` property value as a CodeableConcept array
   */
  public getVaccineCode(): CodeableConcept[] {
    return this.vaccineCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `vaccineCode` property.
   *
   * @param value - the `vaccineCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVaccineCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.vaccineCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.vaccineCode = value;
    } else {
      this.vaccineCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `vaccineCode` array property.
   *
   * @param value - the `vaccineCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addVaccineCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.vaccineCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initVaccineCode();
      this.vaccineCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `vaccineCode` property exists and has a value; `false` otherwise
   */
  public hasVaccineCode(): boolean {
    return isDefinedList<CodeableConcept>(this.vaccineCode) && this.vaccineCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `vaccineCode` property
   */
  private initVaccineCode(): void {
    if(!this.hasVaccineCode()) {
      this.vaccineCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `targetDisease` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getTargetDisease(): CodeableConcept {
    return this.targetDisease ?? new CodeableConcept();
  }

  /**
   * Assigns the provided TargetDisease object value to the `targetDisease` property.
   *
   * @param value - the `targetDisease` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTargetDisease(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.targetDisease; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.targetDisease = value;
    } else {
      this.targetDisease = undefined;
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
   * @returns the `contraindicatedVaccineCode` property value as a CodeableConcept array
   */
  public getContraindicatedVaccineCode(): CodeableConcept[] {
    return this.contraindicatedVaccineCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `contraindicatedVaccineCode` property.
   *
   * @param value - the `contraindicatedVaccineCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContraindicatedVaccineCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.contraindicatedVaccineCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.contraindicatedVaccineCode = value;
    } else {
      this.contraindicatedVaccineCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `contraindicatedVaccineCode` array property.
   *
   * @param value - the `contraindicatedVaccineCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContraindicatedVaccineCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.contraindicatedVaccineCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initContraindicatedVaccineCode();
      this.contraindicatedVaccineCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contraindicatedVaccineCode` property exists and has a value; `false` otherwise
   */
  public hasContraindicatedVaccineCode(): boolean {
    return isDefinedList<CodeableConcept>(this.contraindicatedVaccineCode) && this.contraindicatedVaccineCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `contraindicatedVaccineCode` property
   */
  private initContraindicatedVaccineCode(): void {
    if(!this.hasContraindicatedVaccineCode()) {
      this.contraindicatedVaccineCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `forecastStatus` property value as a CodeableConcept object if defined; else null
   */
  public getForecastStatus(): CodeableConcept | null {
    return this.forecastStatus;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `forecastStatus` property.
   *
   * @param value - the `forecastStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setForecastStatus(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `ImmunizationRecommendation.recommendation.forecastStatus is required`);
    const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.forecastStatus; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.forecastStatus = value;
    return this;
  }

  /**
   * @returns `true` if the `forecastStatus` property exists and has a value; `false` otherwise
   */
  public hasForecastStatus(): boolean {
    return isDefined<CodeableConcept>(this.forecastStatus) && !this.forecastStatus.isEmpty();
  }

  /**
   * @returns the `forecastReason` property value as a CodeableConcept array
   */
  public getForecastReason(): CodeableConcept[] {
    return this.forecastReason ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `forecastReason` property.
   *
   * @param value - the `forecastReason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setForecastReason(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.forecastReason; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.forecastReason = value;
    } else {
      this.forecastReason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `forecastReason` array property.
   *
   * @param value - the `forecastReason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addForecastReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.forecastReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initForecastReason();
      this.forecastReason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `forecastReason` property exists and has a value; `false` otherwise
   */
  public hasForecastReason(): boolean {
    return isDefinedList<CodeableConcept>(this.forecastReason) && this.forecastReason.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `forecastReason` property
   */
  private initForecastReason(): void {
    if(!this.hasForecastReason()) {
      this.forecastReason = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `dateCriterion` property value as a ImmunizationRecommendationRecommendationDateCriterionComponent array
   */
  public getDateCriterion(): ImmunizationRecommendationRecommendationDateCriterionComponent[] {
    return this.dateCriterion ?? ([] as ImmunizationRecommendationRecommendationDateCriterionComponent[]);
  }

  /**
   * Assigns the provided ImmunizationRecommendationRecommendationDateCriterionComponent array value to the `dateCriterion` property.
   *
   * @param value - the `dateCriterion` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDateCriterion(value: ImmunizationRecommendationRecommendationDateCriterionComponent[] | undefined): this {
    if (isDefinedList<ImmunizationRecommendationRecommendationDateCriterionComponent>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.dateCriterion; Provided value array has an element that is not an instance of ImmunizationRecommendationRecommendationDateCriterionComponent.`;
      assertFhirTypeList<ImmunizationRecommendationRecommendationDateCriterionComponent>(value, ImmunizationRecommendationRecommendationDateCriterionComponent, optErrMsg);
      this.dateCriterion = value;
    } else {
      this.dateCriterion = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImmunizationRecommendationRecommendationDateCriterionComponent value to the `dateCriterion` array property.
   *
   * @param value - the `dateCriterion` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDateCriterion(value: ImmunizationRecommendationRecommendationDateCriterionComponent | undefined): this {
    if (isDefined<ImmunizationRecommendationRecommendationDateCriterionComponent>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.dateCriterion; Provided element is not an instance of ImmunizationRecommendationRecommendationDateCriterionComponent.`;
      assertFhirType<ImmunizationRecommendationRecommendationDateCriterionComponent>(value, ImmunizationRecommendationRecommendationDateCriterionComponent, optErrMsg);
      this.initDateCriterion();
      this.dateCriterion?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dateCriterion` property exists and has a value; `false` otherwise
   */
  public hasDateCriterion(): boolean {
    return isDefinedList<ImmunizationRecommendationRecommendationDateCriterionComponent>(this.dateCriterion) && this.dateCriterion.some((item: ImmunizationRecommendationRecommendationDateCriterionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `dateCriterion` property
   */
  private initDateCriterion(): void {
    if(!this.hasDateCriterion()) {
      this.dateCriterion = [] as ImmunizationRecommendationRecommendationDateCriterionComponent[];
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
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.description (${String(value)})`;
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
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.series; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.series (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('ImmunizationRecommendation.recommendation.doseNumber[x]')`
   *
   * @param value - the `doseNumber` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ImmunizationRecommendation.recommendation.doseNumber[x]')
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
        `DataType mismatch for ImmunizationRecommendation.recommendation.doseNumber[x]: Expected PositiveIntType but encountered ${this.doseNumber.fhirType()}`,
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
        `DataType mismatch for ImmunizationRecommendation.recommendation.doseNumber[x]: Expected StringType but encountered ${this.doseNumber.fhirType()}`,
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
   * @decorator `@ChoiceDataTypes('ImmunizationRecommendation.recommendation.seriesDoses[x]')`
   *
   * @param value - the `seriesDoses` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ImmunizationRecommendation.recommendation.seriesDoses[x]')
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
        `DataType mismatch for ImmunizationRecommendation.recommendation.seriesDoses[x]: Expected PositiveIntType but encountered ${this.seriesDoses.fhirType()}`,
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
        `DataType mismatch for ImmunizationRecommendation.recommendation.seriesDoses[x]: Expected StringType but encountered ${this.seriesDoses.fhirType()}`,
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

  /**
   * @returns the `supportingImmunization` property value as a Reference array
   */
  public getSupportingImmunization(): Reference[] {
    return this.supportingImmunization ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `supportingImmunization` property.
   *
   * @decorator `@ReferenceTargets('ImmunizationRecommendation.recommendation.supportingImmunization', ['Immunization','ImmunizationEvaluation',])`
   *
   * @param value - the `supportingImmunization` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImmunizationRecommendation.recommendation.supportingImmunization', [
    'Immunization',
  
    'ImmunizationEvaluation',
  ])
  public setSupportingImmunization(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.supportingImmunization = value;
    } else {
      this.supportingImmunization = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `supportingImmunization` array property.
   *
   * @decorator `@ReferenceTargets('ImmunizationRecommendation.recommendation.supportingImmunization', ['Immunization','ImmunizationEvaluation',])`
   *
   * @param value - the `supportingImmunization` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImmunizationRecommendation.recommendation.supportingImmunization', [
    'Immunization',
  
    'ImmunizationEvaluation',
  ])
  public addSupportingImmunization(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSupportingImmunization();
      this.supportingImmunization?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingImmunization` property exists and has a value; `false` otherwise
   */
  public hasSupportingImmunization(): boolean {
    return isDefinedList<Reference>(this.supportingImmunization) && this.supportingImmunization.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `supportingImmunization` property
   */
  private initSupportingImmunization(): void {
    if (!this.hasSupportingImmunization()) {
      this.supportingImmunization = [] as Reference[];
    }
  }

  /**
   * @returns the `supportingPatientInformation` property value as a Reference array
   */
  public getSupportingPatientInformation(): Reference[] {
    return this.supportingPatientInformation ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `supportingPatientInformation` property.
   *
   * @decorator `@ReferenceTargets('ImmunizationRecommendation.recommendation.supportingPatientInformation', ['Resource',])`
   *
   * @param value - the `supportingPatientInformation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImmunizationRecommendation.recommendation.supportingPatientInformation', [
    'Resource',
  ])
  public setSupportingPatientInformation(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.supportingPatientInformation = value;
    } else {
      this.supportingPatientInformation = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `supportingPatientInformation` array property.
   *
   * @decorator `@ReferenceTargets('ImmunizationRecommendation.recommendation.supportingPatientInformation', ['Resource',])`
   *
   * @param value - the `supportingPatientInformation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImmunizationRecommendation.recommendation.supportingPatientInformation', [
    'Resource',
  ])
  public addSupportingPatientInformation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSupportingPatientInformation();
      this.supportingPatientInformation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingPatientInformation` property exists and has a value; `false` otherwise
   */
  public hasSupportingPatientInformation(): boolean {
    return isDefinedList<Reference>(this.supportingPatientInformation) && this.supportingPatientInformation.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `supportingPatientInformation` property
   */
  private initSupportingPatientInformation(): void {
    if (!this.hasSupportingPatientInformation()) {
      this.supportingPatientInformation = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImmunizationRecommendation.recommendation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.vaccineCode,
      this.targetDisease,
      this.contraindicatedVaccineCode,
      this.forecastStatus,
      this.forecastReason,
      this.dateCriterion,
      this.description,
      this.series,
      this.doseNumber,
      this.seriesDoses,
      this.supportingImmunization,
      this.supportingPatientInformation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImmunizationRecommendationRecommendationComponent {
    const dest = new ImmunizationRecommendationRecommendationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImmunizationRecommendationRecommendationComponent): void {
    super.copyValues(dest);
    const vaccineCodeList = copyListValues<CodeableConcept>(this.vaccineCode);
    dest.vaccineCode = vaccineCodeList.length === 0 ? undefined : vaccineCodeList;
    dest.targetDisease = this.targetDisease?.copy();
    const contraindicatedVaccineCodeList = copyListValues<CodeableConcept>(this.contraindicatedVaccineCode);
    dest.contraindicatedVaccineCode = contraindicatedVaccineCodeList.length === 0 ? undefined : contraindicatedVaccineCodeList;
    dest.forecastStatus = this.forecastStatus ? this.forecastStatus.copy() : null;
    const forecastReasonList = copyListValues<CodeableConcept>(this.forecastReason);
    dest.forecastReason = forecastReasonList.length === 0 ? undefined : forecastReasonList;
    const dateCriterionList = copyListValues<ImmunizationRecommendationRecommendationDateCriterionComponent>(this.dateCriterion);
    dest.dateCriterion = dateCriterionList.length === 0 ? undefined : dateCriterionList;
    dest.description = this.description?.copy();
    dest.series = this.series?.copy();
    dest.doseNumber = this.doseNumber?.copy() as IDataType;
    dest.seriesDoses = this.seriesDoses?.copy() as IDataType;
    const supportingImmunizationList = copyListValues<Reference>(this.supportingImmunization);
    dest.supportingImmunization = supportingImmunizationList.length === 0 ? undefined : supportingImmunizationList;
    const supportingPatientInformationList = copyListValues<Reference>(this.supportingPatientInformation);
    dest.supportingPatientInformation = supportingPatientInformationList.length === 0 ? undefined : supportingPatientInformationList;
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

    if (this.hasVaccineCode()) {
      setFhirComplexListJson(this.getVaccineCode(), 'vaccineCode', jsonObj);
    }

    if (this.hasTargetDisease()) {
      setFhirComplexJson(this.getTargetDisease(), 'targetDisease', jsonObj);
    }

    if (this.hasContraindicatedVaccineCode()) {
      setFhirComplexListJson(this.getContraindicatedVaccineCode(), 'contraindicatedVaccineCode', jsonObj);
    }

    if (this.hasForecastStatus()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getForecastStatus()!, 'forecastStatus', jsonObj);
    } else {
      missingReqdProperties.push(`ImmunizationRecommendation.recommendation.forecastStatus`);
    }

    if (this.hasForecastReason()) {
      setFhirComplexListJson(this.getForecastReason(), 'forecastReason', jsonObj);
    }

    if (this.hasDateCriterion()) {
      setFhirBackboneElementListJson(this.getDateCriterion(), 'dateCriterion', jsonObj);
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

    if (this.hasSupportingImmunization()) {
      setFhirComplexListJson(this.getSupportingImmunization(), 'supportingImmunization', jsonObj);
    }

    if (this.hasSupportingPatientInformation()) {
      setFhirComplexListJson(this.getSupportingPatientInformation(), 'supportingPatientInformation', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ImmunizationRecommendationRecommendationDateCriterionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Dates governing proposed immunization
 * - **Definition:** Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 *
 * @category Data Models: Resource
 * @see [FHIR ImmunizationRecommendation](http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation)
 */
export class ImmunizationRecommendationRecommendationDateCriterionComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null, value: DateTimeType | fhirDateTime | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }

    this.value = null;
    if (isDefined<DateTimeType | fhirDateTime>(value)) {
      if (value instanceof PrimitiveType) {
        this.setValueElement(value);
      } else {
        this.setValue(value);
      }
    }
  }

  /**
   * Parse the provided `ImmunizationRecommendationRecommendationDateCriterionComponent` JSON to instantiate the ImmunizationRecommendationRecommendationDateCriterionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImmunizationRecommendationRecommendationDateCriterionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImmunizationRecommendationRecommendationDateCriterionComponent
   * @returns ImmunizationRecommendationRecommendationDateCriterionComponent data model or undefined for `ImmunizationRecommendationRecommendationDateCriterionComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImmunizationRecommendationRecommendationDateCriterionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImmunizationRecommendationRecommendationDateCriterionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImmunizationRecommendationRecommendationDateCriterionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

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

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setValueElement(datatype);
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
   * ImmunizationRecommendation.recommendation.dateCriterion.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of date
   * - **Definition:** Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeableConcept | null;

  /**
   * ImmunizationRecommendation.recommendation.dateCriterion.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recommended date
   * - **Definition:** The date whose meaning is specified by dateCriterion.code.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value: DateTimeType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
    assertIsDefined<CodeableConcept>(value, `ImmunizationRecommendation.recommendation.dateCriterion.code is required`);
    const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.dateCriterion.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a DateTimeType object if defined; else null
   */
  public getValueElement(): DateTimeType | null {
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
  public setValueElement(element: DateTimeType): this {
    assertIsDefined<DateTimeType>(element, `ImmunizationRecommendation.recommendation.dateCriterion.value is required`);
    const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.dateCriterion.value; Provided value is not an instance of DateTimeType.`;
    assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
    this.value = element;
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValueElement(): boolean {
    return isDefined<DateTimeType>(this.value) && !this.value.isEmpty();
  }

  /**
   * @returns the `value` property value as a fhirDateTime if defined; else null
   */
  public getValue(): fhirDateTime | null {
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
  public setValue(value: fhirDateTime): this {
    assertIsDefined<fhirDateTime>(value, `ImmunizationRecommendation.recommendation.dateCriterion.value is required`);
    const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.dateCriterion.value (${String(value)})`;
    this.value = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
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
    return 'ImmunizationRecommendation.recommendation.dateCriterion';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImmunizationRecommendationRecommendationDateCriterionComponent {
    const dest = new ImmunizationRecommendationRecommendationDateCriterionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImmunizationRecommendationRecommendationDateCriterionComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.value = this.value ? this.value.copy() : null;
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

    if (this.hasCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCode()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`ImmunizationRecommendation.recommendation.dateCriterion.code`);
    }

    if (this.hasValueElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirDateTime>(this.getValueElement()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`ImmunizationRecommendation.recommendation.dateCriterion.value`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
