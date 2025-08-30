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
 * MedicinalProductContraindication Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicinalProductContraindication
 * StructureDefinition.name: MedicinalProductContraindication
 * StructureDefinition.description: The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, PARSABLE_DATATYPE_MAP, Population, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MedicinalProductContraindication Class
 *
 * @remarks
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 *
 * **FHIR Specification**
 * - **Short:** MedicinalProductContraindication
 * - **Definition:** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductContraindication](http://hl7.org/fhir/StructureDefinition/MedicinalProductContraindication)
 */
export class MedicinalProductContraindication extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicinalProductContraindication` JSON to instantiate the MedicinalProductContraindication data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductContraindication`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductContraindication
   * @returns MedicinalProductContraindication data model or undefined for `MedicinalProductContraindication`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductContraindication | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductContraindication';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductContraindication();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicinalProductContraindication');
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

    fieldName = 'disease';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDisease(datatype);
    }

    fieldName = 'diseaseStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDiseaseStatus(datatype);
    }

    fieldName = 'comorbidity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addComorbidity(datatype);
        }
      });
    }

    fieldName = 'therapeuticIndication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTherapeuticIndication(datatype);
        }
      });
  }

    fieldName = 'otherTherapy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductContraindicationOtherTherapyComponent | undefined = MedicinalProductContraindicationOtherTherapyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addOtherTherapy(component);
        }
      });
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
   * MedicinalProductContraindication.subject Element
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
   * MedicinalProductContraindication.disease Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The disease, symptom or procedure for the contraindication
   * - **Definition:** The disease, symptom or procedure for the contraindication.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private disease?: CodeableConcept | undefined;

  /**
   * MedicinalProductContraindication.diseaseStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of the disease or symptom for the contraindication
   * - **Definition:** The status of the disease or symptom for the contraindication.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private diseaseStatus?: CodeableConcept | undefined;

  /**
   * MedicinalProductContraindication.comorbidity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A comorbidity (concurrent condition) or coinfection
   * - **Definition:** A comorbidity (concurrent condition) or coinfection.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private comorbidity?: CodeableConcept[] | undefined;

  /**
   * MedicinalProductContraindication.therapeuticIndication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about the use of the medicinal product in relation to other therapies as part of the indication
   * - **Definition:** Information about the use of the medicinal product in relation to other therapies as part of the indication.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductIndication',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private therapeuticIndication?: Reference[] | undefined;

  /**
   * MedicinalProductContraindication.otherTherapy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about the use of the medicinal product in relation to other therapies described as part of the indication
   * - **Definition:** Information about the use of the medicinal product in relation to other therapies described as part of the indication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private otherTherapy?: MedicinalProductContraindicationOtherTherapyComponent[] | undefined;

  /**
   * MedicinalProductContraindication.population Element
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
   * @decorator `@ReferenceTargets('MedicinalProductContraindication.subject', ['MedicinalProduct','Medication',])`
   *
   * @param value - the `subject` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductContraindication.subject', [
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
   * @decorator `@ReferenceTargets('MedicinalProductContraindication.subject', ['MedicinalProduct','Medication',])`
   *
   * @param value - the `subject` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductContraindication.subject', [
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
   * @returns the `disease` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDisease(): CodeableConcept {
    return this.disease ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Disease object value to the `disease` property.
   *
   * @param value - the `disease` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDisease(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductContraindication.disease; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.disease = value;
    } else {
      this.disease = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `disease` property exists and has a value; `false` otherwise
   */
  public hasDisease(): boolean {
    return isDefined<CodeableConcept>(this.disease) && !this.disease.isEmpty();
  }

  /**
   * @returns the `diseaseStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDiseaseStatus(): CodeableConcept {
    return this.diseaseStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided DiseaseStatus object value to the `diseaseStatus` property.
   *
   * @param value - the `diseaseStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDiseaseStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductContraindication.diseaseStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.diseaseStatus = value;
    } else {
      this.diseaseStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `diseaseStatus` property exists and has a value; `false` otherwise
   */
  public hasDiseaseStatus(): boolean {
    return isDefined<CodeableConcept>(this.diseaseStatus) && !this.diseaseStatus.isEmpty();
  }

  /**
   * @returns the `comorbidity` property value as a CodeableConcept array
   */
  public getComorbidity(): CodeableConcept[] {
    return this.comorbidity ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `comorbidity` property.
   *
   * @param value - the `comorbidity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComorbidity(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductContraindication.comorbidity; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.comorbidity = value;
    } else {
      this.comorbidity = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `comorbidity` array property.
   *
   * @param value - the `comorbidity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addComorbidity(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductContraindication.comorbidity; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initComorbidity();
      this.comorbidity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `comorbidity` property exists and has a value; `false` otherwise
   */
  public hasComorbidity(): boolean {
    return isDefinedList<CodeableConcept>(this.comorbidity) && this.comorbidity.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `comorbidity` property
   */
  private initComorbidity(): void {
    if(!this.hasComorbidity()) {
      this.comorbidity = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `therapeuticIndication` property value as a Reference array
   */
  public getTherapeuticIndication(): Reference[] {
    return this.therapeuticIndication ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `therapeuticIndication` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductContraindication.therapeuticIndication', ['MedicinalProductIndication',])`
   *
   * @param value - the `therapeuticIndication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductContraindication.therapeuticIndication', [
    'MedicinalProductIndication',
  ])
  public setTherapeuticIndication(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.therapeuticIndication = value;
    } else {
      this.therapeuticIndication = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `therapeuticIndication` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductContraindication.therapeuticIndication', ['MedicinalProductIndication',])`
   *
   * @param value - the `therapeuticIndication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductContraindication.therapeuticIndication', [
    'MedicinalProductIndication',
  ])
  public addTherapeuticIndication(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initTherapeuticIndication();
      this.therapeuticIndication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `therapeuticIndication` property exists and has a value; `false` otherwise
   */
  public hasTherapeuticIndication(): boolean {
    return isDefinedList<Reference>(this.therapeuticIndication) && this.therapeuticIndication.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `therapeuticIndication` property
   */
  private initTherapeuticIndication(): void {
    if (!this.hasTherapeuticIndication()) {
      this.therapeuticIndication = [] as Reference[];
    }
  }

  /**
   * @returns the `otherTherapy` property value as a MedicinalProductContraindicationOtherTherapyComponent array
   */
  public getOtherTherapy(): MedicinalProductContraindicationOtherTherapyComponent[] {
    return this.otherTherapy ?? ([] as MedicinalProductContraindicationOtherTherapyComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductContraindicationOtherTherapyComponent array value to the `otherTherapy` property.
   *
   * @param value - the `otherTherapy` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOtherTherapy(value: MedicinalProductContraindicationOtherTherapyComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductContraindicationOtherTherapyComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductContraindication.otherTherapy; Provided value array has an element that is not an instance of MedicinalProductContraindicationOtherTherapyComponent.`;
      assertFhirTypeList<MedicinalProductContraindicationOtherTherapyComponent>(value, MedicinalProductContraindicationOtherTherapyComponent, optErrMsg);
      this.otherTherapy = value;
    } else {
      this.otherTherapy = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductContraindicationOtherTherapyComponent value to the `otherTherapy` array property.
   *
   * @param value - the `otherTherapy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOtherTherapy(value: MedicinalProductContraindicationOtherTherapyComponent | undefined): this {
    if (isDefined<MedicinalProductContraindicationOtherTherapyComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductContraindication.otherTherapy; Provided element is not an instance of MedicinalProductContraindicationOtherTherapyComponent.`;
      assertFhirType<MedicinalProductContraindicationOtherTherapyComponent>(value, MedicinalProductContraindicationOtherTherapyComponent, optErrMsg);
      this.initOtherTherapy();
      this.otherTherapy?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `otherTherapy` property exists and has a value; `false` otherwise
   */
  public hasOtherTherapy(): boolean {
    return isDefinedList<MedicinalProductContraindicationOtherTherapyComponent>(this.otherTherapy) && this.otherTherapy.some((item: MedicinalProductContraindicationOtherTherapyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `otherTherapy` property
   */
  private initOtherTherapy(): void {
    if(!this.hasOtherTherapy()) {
      this.otherTherapy = [] as MedicinalProductContraindicationOtherTherapyComponent[];
    }
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
      const optErrMsg = `Invalid MedicinalProductContraindication.population; Provided value array has an element that is not an instance of Population.`;
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
      const optErrMsg = `Invalid MedicinalProductContraindication.population; Provided element is not an instance of Population.`;
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
    return 'MedicinalProductContraindication';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.subject,
      this.disease,
      this.diseaseStatus,
      this.comorbidity,
      this.therapeuticIndication,
      this.otherTherapy,
      this.population,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductContraindication {
    const dest = new MedicinalProductContraindication();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductContraindication): void {
    super.copyValues(dest);
    const subjectList = copyListValues<Reference>(this.subject);
    dest.subject = subjectList.length === 0 ? undefined : subjectList;
    dest.disease = this.disease?.copy();
    dest.diseaseStatus = this.diseaseStatus?.copy();
    const comorbidityList = copyListValues<CodeableConcept>(this.comorbidity);
    dest.comorbidity = comorbidityList.length === 0 ? undefined : comorbidityList;
    const therapeuticIndicationList = copyListValues<Reference>(this.therapeuticIndication);
    dest.therapeuticIndication = therapeuticIndicationList.length === 0 ? undefined : therapeuticIndicationList;
    const otherTherapyList = copyListValues<MedicinalProductContraindicationOtherTherapyComponent>(this.otherTherapy);
    dest.otherTherapy = otherTherapyList.length === 0 ? undefined : otherTherapyList;
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

    if (this.hasDisease()) {
      setFhirComplexJson(this.getDisease(), 'disease', jsonObj);
    }

    if (this.hasDiseaseStatus()) {
      setFhirComplexJson(this.getDiseaseStatus(), 'diseaseStatus', jsonObj);
    }

    if (this.hasComorbidity()) {
      setFhirComplexListJson(this.getComorbidity(), 'comorbidity', jsonObj);
    }

    if (this.hasTherapeuticIndication()) {
      setFhirComplexListJson(this.getTherapeuticIndication(), 'therapeuticIndication', jsonObj);
    }

    if (this.hasOtherTherapy()) {
      setFhirBackboneElementListJson(this.getOtherTherapy(), 'otherTherapy', jsonObj);
    }

    if (this.hasPopulation()) {
      setFhirComplexListJson(this.getPopulation(), 'population', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MedicinalProductContraindicationOtherTherapyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about the use of the medicinal product in relation to other therapies described as part of the indication
 * - **Definition:** Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductContraindication](http://hl7.org/fhir/StructureDefinition/MedicinalProductContraindication)
 */
export class MedicinalProductContraindicationOtherTherapyComponent extends BackboneElement implements IBackboneElement {
  constructor(therapyRelationshipType: CodeableConcept | null = null, medication: IDataType | null = null) {
    super();

    this.therapyRelationshipType = null;
    if (isDefined<CodeableConcept>(therapyRelationshipType)) {
      this.setTherapyRelationshipType(therapyRelationshipType);
    }

    this.medication = null;
    if (isDefined<IDataType>(medication)) {
      this.setMedication(medication);
    }

  }

  /**
   * Parse the provided `MedicinalProductContraindicationOtherTherapyComponent` JSON to instantiate the MedicinalProductContraindicationOtherTherapyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductContraindicationOtherTherapyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductContraindicationOtherTherapyComponent
   * @returns MedicinalProductContraindicationOtherTherapyComponent data model or undefined for `MedicinalProductContraindicationOtherTherapyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductContraindicationOtherTherapyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductContraindicationOtherTherapyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductContraindicationOtherTherapyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = MedicinalProductContraindicationOtherTherapyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicinalProductContraindicationOtherTherapyComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'therapyRelationshipType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setTherapyRelationshipType(null);
      } else {
        instance.setTherapyRelationshipType(datatype);
      }
    } else {
      instance.setTherapyRelationshipType(null);
    }

    fieldName = 'medication[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const medication: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (medication === undefined) {
      instance.setMedication(null);
    } else {
      instance.setMedication(medication);
    }

    return instance;
  }

  /**
   * MedicinalProductContraindication.otherTherapy.therapyRelationshipType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of relationship between the medicinal product indication or contraindication and another therapy
   * - **Definition:** The type of relationship between the medicinal product indication or contraindication and another therapy.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private therapyRelationshipType: CodeableConcept | null;

  /**
   * MedicinalProductContraindication.otherTherapy.medication[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicinalProductContraindication.otherTherapy.medication[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication
   * - **Definition:** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MedicinalProductContraindication.otherTherapy.medication[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private medication: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `therapyRelationshipType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getTherapyRelationshipType(): CodeableConcept {
    return this.therapyRelationshipType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `therapyRelationshipType` property.
   *
   * @param value - the `therapyRelationshipType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTherapyRelationshipType(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductContraindication.otherTherapy.therapyRelationshipType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.therapyRelationshipType = value;
    } else {
      this.therapyRelationshipType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `therapyRelationshipType` property exists and has a value; `false` otherwise
   */
  public hasTherapyRelationshipType(): boolean {
    return isDefined<CodeableConcept>(this.therapyRelationshipType) && !this.therapyRelationshipType.isEmpty();
  }

  /**
   * @returns the `medication` property value as a DataType object; else null
   */
  public getMedication(): IDataType | null {
    return this.medication;
  }

  /**
   * Assigns the provided DataType object value to the `medication` property.
   *
   * @decorator `@ChoiceDataTypes('MedicinalProductContraindication.otherTherapy.medication[x]')`
   *
   * @param value - the `medication` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicinalProductContraindication.otherTherapy.medication[x]')
  public setMedication(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.medication = value;
    } else {
      this.medication = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `medication` property exists and has a value; `false` otherwise
   */
  public hasMedication(): boolean {
    return isDefined<IDataType>(this.medication) && !this.medication.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `medication` property value as a CodeableConcept object if defined; else null
   */
  public getMedicationCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.medication)) {
      return null;
    }
    if (!(this.medication instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicinalProductContraindication.otherTherapy.medication[x]: Expected CodeableConcept but encountered ${this.medication.fhirType()}`,
      );
    }
    return this.medication;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasMedicationCodeableConcept(): boolean {
    return this.hasMedication() && this.medication instanceof CodeableConcept;
  }

  /**
   * @returns the `medication` property value as a Reference object if defined; else null
   */
  public getMedicationReference(): Reference | null {
    if (!isDefined<IDataType>(this.medication)) {
      return null;
    }
    if (!(this.medication instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicinalProductContraindication.otherTherapy.medication[x]: Expected Reference but encountered ${this.medication.fhirType()}`,
      );
    }
    return this.medication;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasMedicationReference(): boolean {
    return this.hasMedication() && this.medication instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductContraindication.otherTherapy';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.therapyRelationshipType,
      this.medication,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.therapyRelationshipType, this.medication, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductContraindicationOtherTherapyComponent {
    const dest = new MedicinalProductContraindicationOtherTherapyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductContraindicationOtherTherapyComponent): void {
    super.copyValues(dest);
    dest.therapyRelationshipType = this.therapyRelationshipType ? this.therapyRelationshipType.copy() : null;
    dest.medication = this.medication ? this.medication.copy() as IDataType : null;
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

    if (this.hasTherapyRelationshipType()) {
      setFhirComplexJson(this.getTherapyRelationshipType(), 'therapyRelationshipType', jsonObj);
    } else {
      jsonObj['therapyRelationshipType'] = null;
    }

    if (this.hasMedication()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getMedication()!, 'medication', jsonObj);
    } else {
      jsonObj['medication'] = null;
    }

    return jsonObj;
  }
}
