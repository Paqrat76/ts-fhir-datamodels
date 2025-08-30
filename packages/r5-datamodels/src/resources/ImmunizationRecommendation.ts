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
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  DateTimeType,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  JSON,
  MarkdownType,
  PrimitiveType,
  ReferenceTargets,
  StringType,
  assertFhirType,
  assertFhirTypeList,
  copyListValues,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
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
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * ImmunizationRecommendation Class
 *
 * @remarks
 * A patient\'s point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 *
 * **FHIR Specification**
 * - **Short:** Guidance or advice relating to an immunization
 * - **Definition:** A patient\'s point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 * - **FHIR Version:** 5.0.0
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
        instance.setPatient(null);
      } else {
        instance.setPatient(datatype);
      }
    } else {
      instance.setPatient(null);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setDate(null);
      } else {
        instance.setDateElement(datatype);
      }
    } else {
      instance.setDate(null);
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
          instance.setRecommendation(null);
        } else {
          instance.addRecommendation(component);
        }
      });
    } else {
      instance.setRecommendation(null);
    }

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
   * - **Comment:** A given instance of the .recommendation backbone element should correspond to a single recommended administration.
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
   * @returns the `patient` property value as a Reference object if defined; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
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
  public setDateElement(element: DateTimeType | undefined | null): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.date; Provided value is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.date = element;
    } else {
      this.date = null;
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
  public setDate(value: fhirDateTime | undefined | null): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.date (${String(value)})`;
      this.date = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.date = null;
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
  public setRecommendation(value: ImmunizationRecommendationRecommendationComponent[] | undefined | null): this {
    if (isDefinedList<ImmunizationRecommendationRecommendationComponent>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation; Provided value array has an element that is not an instance of ImmunizationRecommendationRecommendationComponent.`;
      assertFhirTypeList<ImmunizationRecommendationRecommendationComponent>(value, ImmunizationRecommendationRecommendationComponent, optErrMsg);
      this.recommendation = value;
    } else {
      this.recommendation = null;
    }
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.patient, this.date, 
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

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    } else {
      jsonObj['patient'] = null;
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    } else {
      jsonObj['date'] = null;
    }

    if (this.hasAuthority()) {
      setFhirComplexJson(this.getAuthority(), 'authority', jsonObj);
    }

    if (this.hasRecommendation()) {
      setFhirBackboneElementListJson(this.getRecommendation(), 'recommendation', jsonObj);
    } else {
      jsonObj['recommendation'] = null;
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
 * - **Comment:** A given instance of the .recommendation backbone element should correspond to a single recommended administration.
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
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTargetDisease(datatype);
        }
      });
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
        instance.setForecastStatus(null);
      } else {
        instance.setForecastStatus(datatype);
      }
    } else {
      instance.setForecastStatus(null);
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
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
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

    fieldName = 'doseNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDoseNumberElement(datatype);
    }

    fieldName = 'seriesDoses';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSeriesDosesElement(datatype);
    }

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
   * - **Comment:** A given instance of the .recommendation backbone element should correspond to a single recommended administration but sometimes that administration (e.g. MMR) will encompass multiple diseases, thus the targetDisease element is allowed to repeat.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private targetDisease?: CodeableConcept[] | undefined;

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
   * - **isModifierReason:** This element is labeled as a modifier because the forecastStatus indicates whether a patient needs additional doses (due, overdue, etc.) or not  (contraindicated, complete, etc.).
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
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

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
   * ImmunizationRecommendation.recommendation.doseNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recommended dose number within series
   * - **Definition:** Nominal position of the recommended dose in a series as determined by the evaluation and forecasting process (e.g. dose 2 is the next recommended dose).
   * - **Comment:** The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private doseNumber?: StringType | undefined;

  /**
   * ImmunizationRecommendation.recommendation.seriesDoses Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recommended number of doses for immunity
   * - **Definition:** The recommended number of doses to achieve immunity as determined by the evaluation and forecasting process.
   * - **Comment:** The use of an integer is preferred if known.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private seriesDoses?: StringType | undefined;

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
   * @returns the `targetDisease` property value as a CodeableConcept array
   */
  public getTargetDisease(): CodeableConcept[] {
    return this.targetDisease ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `targetDisease` property.
   *
   * @param value - the `targetDisease` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTargetDisease(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.targetDisease; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.targetDisease = value;
    } else {
      this.targetDisease = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `targetDisease` array property.
   *
   * @param value - the `targetDisease` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTargetDisease(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.targetDisease; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initTargetDisease();
      this.targetDisease?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `targetDisease` property exists and has a value; `false` otherwise
   */
  public hasTargetDisease(): boolean {
    return isDefinedList<CodeableConcept>(this.targetDisease) && this.targetDisease.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `targetDisease` property
   */
  private initTargetDisease(): void {
    if(!this.hasTargetDisease()) {
      this.targetDisease = [] as CodeableConcept[];
    }
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
   * @returns the `forecastStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getForecastStatus(): CodeableConcept {
    return this.forecastStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `forecastStatus` property.
   *
   * @param value - the `forecastStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setForecastStatus(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.forecastStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.forecastStatus = value;
    } else {
      this.forecastStatus = null;
    }
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
   * @returns the `description` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDescriptionElement(): MarkdownType {
    return this.description ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.description; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirMarkdown if defined; else undefined
   */
  public getDescription(): fhirMarkdown | undefined {
    return this.description?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.description (${String(value)})`;
      this.description = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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
   * @returns the `doseNumber` property value as a StringType object if defined; else an empty StringType object
   */
  public getDoseNumberElement(): StringType {
    return this.doseNumber ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `doseNumber` property.
   *
   * @param element - the `doseNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoseNumberElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.doseNumber; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.doseNumber = element;
    } else {
      this.doseNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doseNumber` property exists and has a value; `false` otherwise
   */
  public hasDoseNumberElement(): boolean {
    return isDefined<StringType>(this.doseNumber) && !this.doseNumber.isEmpty();
  }

  /**
   * @returns the `doseNumber` property value as a fhirString if defined; else undefined
   */
  public getDoseNumber(): fhirString | undefined {
    return this.doseNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `doseNumber` property.
   *
   * @param value - the `doseNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoseNumber(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.doseNumber (${String(value)})`;
      this.doseNumber = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.doseNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doseNumber` property exists and has a value; `false` otherwise
   */
  public hasDoseNumber(): boolean {
    return this.hasDoseNumberElement();
  }

  /**
   * @returns the `seriesDoses` property value as a StringType object if defined; else an empty StringType object
   */
  public getSeriesDosesElement(): StringType {
    return this.seriesDoses ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `seriesDoses` property.
   *
   * @param element - the `seriesDoses` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeriesDosesElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.seriesDoses; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.seriesDoses = element;
    } else {
      this.seriesDoses = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `seriesDoses` property exists and has a value; `false` otherwise
   */
  public hasSeriesDosesElement(): boolean {
    return isDefined<StringType>(this.seriesDoses) && !this.seriesDoses.isEmpty();
  }

  /**
   * @returns the `seriesDoses` property value as a fhirString if defined; else undefined
   */
  public getSeriesDoses(): fhirString | undefined {
    return this.seriesDoses?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `seriesDoses` property.
   *
   * @param value - the `seriesDoses` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeriesDoses(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.seriesDoses (${String(value)})`;
      this.seriesDoses = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.seriesDoses = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `seriesDoses` property exists and has a value; `false` otherwise
   */
  public hasSeriesDoses(): boolean {
    return this.hasSeriesDosesElement();
  }

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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.forecastStatus, 
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
    const targetDiseaseList = copyListValues<CodeableConcept>(this.targetDisease);
    dest.targetDisease = targetDiseaseList.length === 0 ? undefined : targetDiseaseList;
    const contraindicatedVaccineCodeList = copyListValues<CodeableConcept>(this.contraindicatedVaccineCode);
    dest.contraindicatedVaccineCode = contraindicatedVaccineCodeList.length === 0 ? undefined : contraindicatedVaccineCodeList;
    dest.forecastStatus = this.forecastStatus ? this.forecastStatus.copy() : null;
    const forecastReasonList = copyListValues<CodeableConcept>(this.forecastReason);
    dest.forecastReason = forecastReasonList.length === 0 ? undefined : forecastReasonList;
    const dateCriterionList = copyListValues<ImmunizationRecommendationRecommendationDateCriterionComponent>(this.dateCriterion);
    dest.dateCriterion = dateCriterionList.length === 0 ? undefined : dateCriterionList;
    dest.description = this.description?.copy();
    dest.series = this.series?.copy();
    dest.doseNumber = this.doseNumber?.copy();
    dest.seriesDoses = this.seriesDoses?.copy();
    const supportingImmunizationList = copyListValues<Reference>(this.supportingImmunization);
    dest.supportingImmunization = supportingImmunizationList.length === 0 ? undefined : supportingImmunizationList;
    const supportingPatientInformationList = copyListValues<Reference>(this.supportingPatientInformation);
    dest.supportingPatientInformation = supportingPatientInformationList.length === 0 ? undefined : supportingPatientInformationList;
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

    if (this.hasVaccineCode()) {
      setFhirComplexListJson(this.getVaccineCode(), 'vaccineCode', jsonObj);
    }

    if (this.hasTargetDisease()) {
      setFhirComplexListJson(this.getTargetDisease(), 'targetDisease', jsonObj);
    }

    if (this.hasContraindicatedVaccineCode()) {
      setFhirComplexListJson(this.getContraindicatedVaccineCode(), 'contraindicatedVaccineCode', jsonObj);
    }

    if (this.hasForecastStatus()) {
      setFhirComplexJson(this.getForecastStatus(), 'forecastStatus', jsonObj);
    } else {
      jsonObj['forecastStatus'] = null;
    }

    if (this.hasForecastReason()) {
      setFhirComplexListJson(this.getForecastReason(), 'forecastReason', jsonObj);
    }

    if (this.hasDateCriterion()) {
      setFhirBackboneElementListJson(this.getDateCriterion(), 'dateCriterion', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasSeriesElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSeriesElement(), 'series', jsonObj);
    }

    if (this.hasDoseNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDoseNumberElement(), 'doseNumber', jsonObj);
    }

    if (this.hasSeriesDosesElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSeriesDosesElement(), 'seriesDoses', jsonObj);
    }

    if (this.hasSupportingImmunization()) {
      setFhirComplexListJson(this.getSupportingImmunization(), 'supportingImmunization', jsonObj);
    }

    if (this.hasSupportingPatientInformation()) {
      setFhirComplexListJson(this.getSupportingPatientInformation(), 'supportingPatientInformation', jsonObj);
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

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setValue(null);
      } else {
        instance.setValueElement(datatype);
      }
    } else {
      instance.setValue(null);
    }

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
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.dateCriterion.code; Provided element is not an instance of CodeableConcept.`;
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

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getValueElement(): DateTimeType {
    return this.value ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: DateTimeType | undefined | null): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.dateCriterion.value; Provided value is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.value = element;
    } else {
      this.value = null;
    }
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
  public setValue(value: fhirDateTime | undefined | null): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid ImmunizationRecommendation.recommendation.dateCriterion.value (${String(value)})`;
      this.value = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.value = null;
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, this.value, 
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
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getValueElement(), 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    return jsonObj;
  }
}
