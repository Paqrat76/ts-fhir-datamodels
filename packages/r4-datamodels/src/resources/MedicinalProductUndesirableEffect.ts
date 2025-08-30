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
 * MedicinalProductUndesirableEffect Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicinalProductUndesirableEffect
 * StructureDefinition.name: MedicinalProductUndesirableEffect
 * StructureDefinition.description: Describe the undesirable effects of the medicinal product.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  DomainResource,
  FhirParser,
  IDomainResource,
  JSON,
  ReferenceTargets,
  assertFhirType,
  assertFhirTypeList,
  copyListValues,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  setFhirComplexJson,
  setFhirComplexListJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, PARSABLE_DATATYPE_MAP, Population, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * MedicinalProductUndesirableEffect Class
 *
 * @remarks
 * Describe the undesirable effects of the medicinal product.
 *
 * **FHIR Specification**
 * - **Short:** MedicinalProductUndesirableEffect
 * - **Definition:** Describe the undesirable effects of the medicinal product.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductUndesirableEffect](http://hl7.org/fhir/StructureDefinition/MedicinalProductUndesirableEffect)
 */
export class MedicinalProductUndesirableEffect extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicinalProductUndesirableEffect` JSON to instantiate the MedicinalProductUndesirableEffect data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductUndesirableEffect`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductUndesirableEffect
   * @returns MedicinalProductUndesirableEffect data model or undefined for `MedicinalProductUndesirableEffect`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductUndesirableEffect | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductUndesirableEffect';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductUndesirableEffect();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicinalProductUndesirableEffect');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSubject(datatype);
        }
      });
  }

    fieldName = 'symptomConditionEffect';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSymptomConditionEffect(datatype);
    }

    fieldName = 'classification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setClassification(datatype);
    }

    fieldName = 'frequencyOfOccurrence';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFrequencyOfOccurrence(datatype);
    }

    fieldName = 'population';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Population | undefined = Population.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPopulation(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * MedicinalProductUndesirableEffect.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The medication for which this is an indication
   * - **Definition:** The medication for which this is an indication.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProduct',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference[] | undefined;

  /**
   * MedicinalProductUndesirableEffect.symptomConditionEffect Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The symptom, condition or undesirable effect
   * - **Definition:** The symptom, condition or undesirable effect.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private symptomConditionEffect?: CodeableConcept | undefined;

  /**
   * MedicinalProductUndesirableEffect.classification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of the effect
   * - **Definition:** Classification of the effect.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private classification?: CodeableConcept | undefined;

  /**
   * MedicinalProductUndesirableEffect.frequencyOfOccurrence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The frequency of occurrence of the effect
   * - **Definition:** The frequency of occurrence of the effect.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private frequencyOfOccurrence?: CodeableConcept | undefined;

  /**
   * MedicinalProductUndesirableEffect.population Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The population group to which this applies
   * - **Definition:** The population group to which this applies.
   * - **FHIR Type:** `Population`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private population?: Population[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `subject` property value as a Reference array
   */
  public getSubject(): Reference[] {
    return this.subject ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductUndesirableEffect.subject', ['MedicinalProduct','Medication',])`
   *
   * @param value - the `subject` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductUndesirableEffect.subject', [
    'MedicinalProduct',
  
    'Medication',
  ])
  public setSubject(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `subject` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductUndesirableEffect.subject', ['MedicinalProduct','Medication',])`
   *
   * @param value - the `subject` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductUndesirableEffect.subject', [
    'MedicinalProduct',
  
    'Medication',
  ])
  public addSubject(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSubject();
      this.subject?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefinedList<Reference>(this.subject) && this.subject.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `subject` property
   */
  private initSubject(): void {
    if (!this.hasSubject()) {
      this.subject = [] as Reference[];
    }
  }

  /**
   * @returns the `symptomConditionEffect` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSymptomConditionEffect(): CodeableConcept {
    return this.symptomConditionEffect ?? new CodeableConcept();
  }

  /**
   * Assigns the provided SymptomConditionEffect object value to the `symptomConditionEffect` property.
   *
   * @param value - the `symptomConditionEffect` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSymptomConditionEffect(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductUndesirableEffect.symptomConditionEffect; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.symptomConditionEffect = value;
    } else {
      this.symptomConditionEffect = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `symptomConditionEffect` property exists and has a value; `false` otherwise
   */
  public hasSymptomConditionEffect(): boolean {
    return isDefined<CodeableConcept>(this.symptomConditionEffect) && !this.symptomConditionEffect.isEmpty();
  }

  /**
   * @returns the `classification` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getClassification(): CodeableConcept {
    return this.classification ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Classification object value to the `classification` property.
   *
   * @param value - the `classification` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassification(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductUndesirableEffect.classification; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.classification = value;
    } else {
      this.classification = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `classification` property exists and has a value; `false` otherwise
   */
  public hasClassification(): boolean {
    return isDefined<CodeableConcept>(this.classification) && !this.classification.isEmpty();
  }

  /**
   * @returns the `frequencyOfOccurrence` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFrequencyOfOccurrence(): CodeableConcept {
    return this.frequencyOfOccurrence ?? new CodeableConcept();
  }

  /**
   * Assigns the provided FrequencyOfOccurrence object value to the `frequencyOfOccurrence` property.
   *
   * @param value - the `frequencyOfOccurrence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFrequencyOfOccurrence(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductUndesirableEffect.frequencyOfOccurrence; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.frequencyOfOccurrence = value;
    } else {
      this.frequencyOfOccurrence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `frequencyOfOccurrence` property exists and has a value; `false` otherwise
   */
  public hasFrequencyOfOccurrence(): boolean {
    return isDefined<CodeableConcept>(this.frequencyOfOccurrence) && !this.frequencyOfOccurrence.isEmpty();
  }

  /**
   * @returns the `population` property value as a Population array
   */
  public getPopulation(): Population[] {
    return this.population ?? ([] as Population[]);
  }

  /**
   * Assigns the provided Population array value to the `population` property.
   *
   * @param value - the `population` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPopulation(value: Population[] | undefined): this {
    if (isDefinedList<Population>(value)) {
      const optErrMsg = `Invalid MedicinalProductUndesirableEffect.population; Provided value array has an element that is not an instance of Population.`;
      assertFhirTypeList<Population>(value, Population, optErrMsg);
      this.population = value;
    } else {
      this.population = undefined;
    }
    return this;
  }

  /**
   * Add the provided Population value to the `population` array property.
   *
   * @param value - the `population` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPopulation(value: Population | undefined): this {
    if (isDefined<Population>(value)) {
      const optErrMsg = `Invalid MedicinalProductUndesirableEffect.population; Provided element is not an instance of Population.`;
      assertFhirType<Population>(value, Population, optErrMsg);
      this.initPopulation();
      this.population?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `population` property exists and has a value; `false` otherwise
   */
  public hasPopulation(): boolean {
    return isDefinedList<Population>(this.population) && this.population.some((item: Population) => !item.isEmpty());
  }

  /**
   * Initialize the `population` property
   */
  private initPopulation(): void {
    if(!this.hasPopulation()) {
      this.population = [] as Population[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductUndesirableEffect';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.subject,
      this.symptomConditionEffect,
      this.classification,
      this.frequencyOfOccurrence,
      this.population,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductUndesirableEffect {
    const dest = new MedicinalProductUndesirableEffect();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductUndesirableEffect): void {
    super.copyValues(dest);
    const subjectList = copyListValues<Reference>(this.subject);
    dest.subject = subjectList.length === 0 ? undefined : subjectList;
    dest.symptomConditionEffect = this.symptomConditionEffect?.copy();
    dest.classification = this.classification?.copy();
    dest.frequencyOfOccurrence = this.frequencyOfOccurrence?.copy();
    const populationList = copyListValues<Population>(this.population);
    dest.population = populationList.length === 0 ? undefined : populationList;
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

    if (this.hasSubject()) {
      setFhirComplexListJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasSymptomConditionEffect()) {
      setFhirComplexJson(this.getSymptomConditionEffect(), 'symptomConditionEffect', jsonObj);
    }

    if (this.hasClassification()) {
      setFhirComplexJson(this.getClassification(), 'classification', jsonObj);
    }

    if (this.hasFrequencyOfOccurrence()) {
      setFhirComplexJson(this.getFrequencyOfOccurrence(), 'frequencyOfOccurrence', jsonObj);
    }

    if (this.hasPopulation()) {
      setFhirComplexListJson(this.getPopulation(), 'population', jsonObj);
    }

    return jsonObj;
  }
}

