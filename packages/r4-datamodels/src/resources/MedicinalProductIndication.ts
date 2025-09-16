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
 * MedicinalProductIndication Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicinalProductIndication
 * StructureDefinition.name: MedicinalProductIndication
 * StructureDefinition.description: Indication for the Medicinal Product.
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
import { CodeableConcept, PARSABLE_DATATYPE_MAP, Population, Quantity, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MedicinalProductIndication Class
 *
 * @remarks
 * Indication for the Medicinal Product.
 *
 * **FHIR Specification**
 * - **Short:** MedicinalProductIndication
 * - **Definition:** Indication for the Medicinal Product.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductIndication](http://hl7.org/fhir/StructureDefinition/MedicinalProductIndication)
 */
export class MedicinalProductIndication extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicinalProductIndication` JSON to instantiate the MedicinalProductIndication data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductIndication`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductIndication
   * @returns MedicinalProductIndication data model or undefined for `MedicinalProductIndication`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductIndication | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductIndication';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductIndication();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicinalProductIndication');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSubject(datatype);
          }
        });
      }
  }

    fieldName = 'diseaseSymptomProcedure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDiseaseSymptomProcedure(datatype);
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addComorbidity(datatype);
          }
        });
      }
    }

    fieldName = 'intendedEffect';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIntendedEffect(datatype);
    }

    fieldName = 'duration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDuration(datatype);
    }

    fieldName = 'otherTherapy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicinalProductIndicationOtherTherapyComponent | undefined = MedicinalProductIndicationOtherTherapyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addOtherTherapy(component);
          }
        });
      }
    }

    fieldName = 'undesirableEffect';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addUndesirableEffect(datatype);
          }
        });
      }
  }

    fieldName = 'population';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Population | undefined = Population.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPopulation(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * MedicinalProductIndication.subject Element
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
   * MedicinalProductIndication.diseaseSymptomProcedure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The disease, symptom or procedure that is the indication for treatment
   * - **Definition:** The disease, symptom or procedure that is the indication for treatment.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private diseaseSymptomProcedure?: CodeableConcept | undefined;

  /**
   * MedicinalProductIndication.diseaseStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of the disease or symptom for which the indication applies
   * - **Definition:** The status of the disease or symptom for which the indication applies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private diseaseStatus?: CodeableConcept | undefined;

  /**
   * MedicinalProductIndication.comorbidity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comorbidity (concurrent condition) or co-infection as part of the indication
   * - **Definition:** Comorbidity (concurrent condition) or co-infection as part of the indication.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private comorbidity?: CodeableConcept[] | undefined;

  /**
   * MedicinalProductIndication.intendedEffect Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The intended effect, aim or strategy to be achieved by the indication
   * - **Definition:** The intended effect, aim or strategy to be achieved by the indication.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private intendedEffect?: CodeableConcept | undefined;

  /**
   * MedicinalProductIndication.duration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Timing or duration information as part of the indication
   * - **Definition:** Timing or duration information as part of the indication.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private duration?: Quantity | undefined;

  /**
   * MedicinalProductIndication.otherTherapy Element
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
  private otherTherapy?: MedicinalProductIndicationOtherTherapyComponent[] | undefined;

  /**
   * MedicinalProductIndication.undesirableEffect Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Describe the undesirable effects of the medicinal product
   * - **Definition:** Describe the undesirable effects of the medicinal product.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductUndesirableEffect',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private undesirableEffect?: Reference[] | undefined;

  /**
   * MedicinalProductIndication.population Element
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
   * @decorator `@ReferenceTargets('MedicinalProductIndication.subject', ['MedicinalProduct','Medication',])`
   *
   * @param value - the `subject` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductIndication.subject', [
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
   * @decorator `@ReferenceTargets('MedicinalProductIndication.subject', ['MedicinalProduct','Medication',])`
   *
   * @param value - the `subject` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductIndication.subject', [
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
   * @returns the `diseaseSymptomProcedure` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDiseaseSymptomProcedure(): CodeableConcept {
    return this.diseaseSymptomProcedure ?? new CodeableConcept();
  }

  /**
   * Assigns the provided DiseaseSymptomProcedure object value to the `diseaseSymptomProcedure` property.
   *
   * @param value - the `diseaseSymptomProcedure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDiseaseSymptomProcedure(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductIndication.diseaseSymptomProcedure; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.diseaseSymptomProcedure = value;
    } else {
      this.diseaseSymptomProcedure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `diseaseSymptomProcedure` property exists and has a value; `false` otherwise
   */
  public hasDiseaseSymptomProcedure(): boolean {
    return isDefined<CodeableConcept>(this.diseaseSymptomProcedure) && !this.diseaseSymptomProcedure.isEmpty();
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
      const optErrMsg = `Invalid MedicinalProductIndication.diseaseStatus; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicinalProductIndication.comorbidity; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicinalProductIndication.comorbidity; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `intendedEffect` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getIntendedEffect(): CodeableConcept {
    return this.intendedEffect ?? new CodeableConcept();
  }

  /**
   * Assigns the provided IntendedEffect object value to the `intendedEffect` property.
   *
   * @param value - the `intendedEffect` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIntendedEffect(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductIndication.intendedEffect; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.intendedEffect = value;
    } else {
      this.intendedEffect = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `intendedEffect` property exists and has a value; `false` otherwise
   */
  public hasIntendedEffect(): boolean {
    return isDefined<CodeableConcept>(this.intendedEffect) && !this.intendedEffect.isEmpty();
  }

  /**
   * @returns the `duration` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getDuration(): Quantity {
    return this.duration ?? new Quantity();
  }

  /**
   * Assigns the provided Duration object value to the `duration` property.
   *
   * @param value - the `duration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDuration(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MedicinalProductIndication.duration; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.duration = value;
    } else {
      this.duration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `duration` property exists and has a value; `false` otherwise
   */
  public hasDuration(): boolean {
    return isDefined<Quantity>(this.duration) && !this.duration.isEmpty();
  }

  /**
   * @returns the `otherTherapy` property value as a MedicinalProductIndicationOtherTherapyComponent array
   */
  public getOtherTherapy(): MedicinalProductIndicationOtherTherapyComponent[] {
    return this.otherTherapy ?? ([] as MedicinalProductIndicationOtherTherapyComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductIndicationOtherTherapyComponent array value to the `otherTherapy` property.
   *
   * @param value - the `otherTherapy` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOtherTherapy(value: MedicinalProductIndicationOtherTherapyComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductIndicationOtherTherapyComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductIndication.otherTherapy; Provided value array has an element that is not an instance of MedicinalProductIndicationOtherTherapyComponent.`;
      assertFhirTypeList<MedicinalProductIndicationOtherTherapyComponent>(value, MedicinalProductIndicationOtherTherapyComponent, optErrMsg);
      this.otherTherapy = value;
    } else {
      this.otherTherapy = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductIndicationOtherTherapyComponent value to the `otherTherapy` array property.
   *
   * @param value - the `otherTherapy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOtherTherapy(value: MedicinalProductIndicationOtherTherapyComponent | undefined): this {
    if (isDefined<MedicinalProductIndicationOtherTherapyComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductIndication.otherTherapy; Provided element is not an instance of MedicinalProductIndicationOtherTherapyComponent.`;
      assertFhirType<MedicinalProductIndicationOtherTherapyComponent>(value, MedicinalProductIndicationOtherTherapyComponent, optErrMsg);
      this.initOtherTherapy();
      this.otherTherapy?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `otherTherapy` property exists and has a value; `false` otherwise
   */
  public hasOtherTherapy(): boolean {
    return isDefinedList<MedicinalProductIndicationOtherTherapyComponent>(this.otherTherapy) && this.otherTherapy.some((item: MedicinalProductIndicationOtherTherapyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `otherTherapy` property
   */
  private initOtherTherapy(): void {
    if(!this.hasOtherTherapy()) {
      this.otherTherapy = [] as MedicinalProductIndicationOtherTherapyComponent[];
    }
  }

  /**
   * @returns the `undesirableEffect` property value as a Reference array
   */
  public getUndesirableEffect(): Reference[] {
    return this.undesirableEffect ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `undesirableEffect` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductIndication.undesirableEffect', ['MedicinalProductUndesirableEffect',])`
   *
   * @param value - the `undesirableEffect` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductIndication.undesirableEffect', [
    'MedicinalProductUndesirableEffect',
  ])
  public setUndesirableEffect(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.undesirableEffect = value;
    } else {
      this.undesirableEffect = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `undesirableEffect` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductIndication.undesirableEffect', ['MedicinalProductUndesirableEffect',])`
   *
   * @param value - the `undesirableEffect` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductIndication.undesirableEffect', [
    'MedicinalProductUndesirableEffect',
  ])
  public addUndesirableEffect(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initUndesirableEffect();
      this.undesirableEffect?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `undesirableEffect` property exists and has a value; `false` otherwise
   */
  public hasUndesirableEffect(): boolean {
    return isDefinedList<Reference>(this.undesirableEffect) && this.undesirableEffect.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `undesirableEffect` property
   */
  private initUndesirableEffect(): void {
    if (!this.hasUndesirableEffect()) {
      this.undesirableEffect = [] as Reference[];
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
      const optErrMsg = `Invalid MedicinalProductIndication.population; Provided value array has an element that is not an instance of Population.`;
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
      const optErrMsg = `Invalid MedicinalProductIndication.population; Provided element is not an instance of Population.`;
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
    return 'MedicinalProductIndication';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.subject,
      this.diseaseSymptomProcedure,
      this.diseaseStatus,
      this.comorbidity,
      this.intendedEffect,
      this.duration,
      this.otherTherapy,
      this.undesirableEffect,
      this.population,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductIndication {
    const dest = new MedicinalProductIndication();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductIndication): void {
    super.copyValues(dest);
    const subjectList = copyListValues<Reference>(this.subject);
    dest.subject = subjectList.length === 0 ? undefined : subjectList;
    dest.diseaseSymptomProcedure = this.diseaseSymptomProcedure?.copy();
    dest.diseaseStatus = this.diseaseStatus?.copy();
    const comorbidityList = copyListValues<CodeableConcept>(this.comorbidity);
    dest.comorbidity = comorbidityList.length === 0 ? undefined : comorbidityList;
    dest.intendedEffect = this.intendedEffect?.copy();
    dest.duration = this.duration?.copy();
    const otherTherapyList = copyListValues<MedicinalProductIndicationOtherTherapyComponent>(this.otherTherapy);
    dest.otherTherapy = otherTherapyList.length === 0 ? undefined : otherTherapyList;
    const undesirableEffectList = copyListValues<Reference>(this.undesirableEffect);
    dest.undesirableEffect = undesirableEffectList.length === 0 ? undefined : undesirableEffectList;
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

    if (this.hasDiseaseSymptomProcedure()) {
      setFhirComplexJson(this.getDiseaseSymptomProcedure(), 'diseaseSymptomProcedure', jsonObj);
    }

    if (this.hasDiseaseStatus()) {
      setFhirComplexJson(this.getDiseaseStatus(), 'diseaseStatus', jsonObj);
    }

    if (this.hasComorbidity()) {
      setFhirComplexListJson(this.getComorbidity(), 'comorbidity', jsonObj);
    }

    if (this.hasIntendedEffect()) {
      setFhirComplexJson(this.getIntendedEffect(), 'intendedEffect', jsonObj);
    }

    if (this.hasDuration()) {
      setFhirComplexJson(this.getDuration(), 'duration', jsonObj);
    }

    if (this.hasOtherTherapy()) {
      setFhirBackboneElementListJson(this.getOtherTherapy(), 'otherTherapy', jsonObj);
    }

    if (this.hasUndesirableEffect()) {
      setFhirComplexListJson(this.getUndesirableEffect(), 'undesirableEffect', jsonObj);
    }

    if (this.hasPopulation()) {
      setFhirComplexListJson(this.getPopulation(), 'population', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MedicinalProductIndicationOtherTherapyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about the use of the medicinal product in relation to other therapies described as part of the indication
 * - **Definition:** Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductIndication](http://hl7.org/fhir/StructureDefinition/MedicinalProductIndication)
 */
export class MedicinalProductIndicationOtherTherapyComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `MedicinalProductIndicationOtherTherapyComponent` JSON to instantiate the MedicinalProductIndicationOtherTherapyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductIndicationOtherTherapyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductIndicationOtherTherapyComponent
   * @returns MedicinalProductIndicationOtherTherapyComponent data model or undefined for `MedicinalProductIndicationOtherTherapyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductIndicationOtherTherapyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductIndicationOtherTherapyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductIndicationOtherTherapyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = MedicinalProductIndicationOtherTherapyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicinalProductIndicationOtherTherapyComponent`;
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
   * MedicinalProductIndication.otherTherapy.therapyRelationshipType Element
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
   * MedicinalProductIndication.otherTherapy.medication[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicinalProductIndication.otherTherapy.medication[x]', ['CodeableConcept','Reference',]`
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
  @ChoiceDataTypesMeta('MedicinalProductIndication.otherTherapy.medication[x]',[
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
      const optErrMsg = `Invalid MedicinalProductIndication.otherTherapy.therapyRelationshipType; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ChoiceDataTypes('MedicinalProductIndication.otherTherapy.medication[x]')`
   *
   * @param value - the `medication` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicinalProductIndication.otherTherapy.medication[x]')
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
        `DataType mismatch for MedicinalProductIndication.otherTherapy.medication[x]: Expected CodeableConcept but encountered ${this.medication.fhirType()}`,
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
        `DataType mismatch for MedicinalProductIndication.otherTherapy.medication[x]: Expected Reference but encountered ${this.medication.fhirType()}`,
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
    return 'MedicinalProductIndication.otherTherapy';
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
  public override copy(): MedicinalProductIndicationOtherTherapyComponent {
    const dest = new MedicinalProductIndicationOtherTherapyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductIndicationOtherTherapyComponent): void {
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
    }

    if (this.hasMedication()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getMedication()!, 'medication', jsonObj);
    }

    return jsonObj;
  }
}
