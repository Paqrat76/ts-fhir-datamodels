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
 * SpecimenDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/SpecimenDefinition
 * StructureDefinition.name: SpecimenDefinition
 * StructureDefinition.description: A kind of specimen with associated set of requirements.
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
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  StringType,
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
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Duration, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Range, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { SpecimenContainedPreferenceEnum } from '../code-systems/SpecimenContainedPreferenceEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * SpecimenDefinition Class
 *
 * @remarks
 * A kind of specimen with associated set of requirements.
 *
 * **FHIR Specification**
 * - **Short:** Kind of specimen
 * - **Definition:** A kind of specimen with associated set of requirements.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR SpecimenDefinition](http://hl7.org/fhir/StructureDefinition/SpecimenDefinition)
 */
export class SpecimenDefinition extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SpecimenDefinition` JSON to instantiate the SpecimenDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `SpecimenDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SpecimenDefinition
   * @returns SpecimenDefinition data model or undefined for `SpecimenDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): SpecimenDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SpecimenDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SpecimenDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'SpecimenDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'typeCollected';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTypeCollected(datatype);
    }

    fieldName = 'patientPreparation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPatientPreparation(datatype);
          }
        });
      }
    }

    fieldName = 'timeAspect';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTimeAspectElement(datatype);
    }

    fieldName = 'collection';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCollection(datatype);
          }
        });
      }
    }

    fieldName = 'typeTested';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: SpecimenDefinitionTypeTestedComponent | undefined = SpecimenDefinitionTypeTestedComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addTypeTested(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * SpecimenDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier of a kind of specimen
   * - **Definition:** A business identifier associated with the kind of specimen.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * SpecimenDefinition.typeCollected Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of material to collect
   * - **Definition:** The kind of material to be collected.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private typeCollected?: CodeableConcept | undefined;

  /**
   * SpecimenDefinition.patientPreparation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient preparation for collection
   * - **Definition:** Preparation of the patient for specimen collection.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private patientPreparation?: CodeableConcept[] | undefined;

  /**
   * SpecimenDefinition.timeAspect Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time aspect for collection
   * - **Definition:** Time aspect of specimen collection (duration or offset).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private timeAspect?: StringType | undefined;

  /**
   * SpecimenDefinition.collection Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen collection procedure
   * - **Definition:** The action to be performed for collecting the specimen.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private collection?: CodeableConcept[] | undefined;

  /**
   * SpecimenDefinition.typeTested Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen in container intended for testing by lab
   * - **Definition:** Specimen conditioned in a container as expected by the testing laboratory.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private typeTested?: SpecimenDefinitionTypeTestedComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid SpecimenDefinition.identifier; Provided element is not an instance of Identifier.`;
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

  /**
   * @returns the `typeCollected` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getTypeCollected(): CodeableConcept {
    return this.typeCollected ?? new CodeableConcept();
  }

  /**
   * Assigns the provided TypeCollected object value to the `typeCollected` property.
   *
   * @param value - the `typeCollected` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTypeCollected(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeCollected; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.typeCollected = value;
    } else {
      this.typeCollected = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `typeCollected` property exists and has a value; `false` otherwise
   */
  public hasTypeCollected(): boolean {
    return isDefined<CodeableConcept>(this.typeCollected) && !this.typeCollected.isEmpty();
  }

  /**
   * @returns the `patientPreparation` property value as a CodeableConcept array
   */
  public getPatientPreparation(): CodeableConcept[] {
    return this.patientPreparation ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `patientPreparation` property.
   *
   * @param value - the `patientPreparation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPatientPreparation(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.patientPreparation; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.patientPreparation = value;
    } else {
      this.patientPreparation = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `patientPreparation` array property.
   *
   * @param value - the `patientPreparation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPatientPreparation(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.patientPreparation; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPatientPreparation();
      this.patientPreparation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `patientPreparation` property exists and has a value; `false` otherwise
   */
  public hasPatientPreparation(): boolean {
    return isDefinedList<CodeableConcept>(this.patientPreparation) && this.patientPreparation.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `patientPreparation` property
   */
  private initPatientPreparation(): void {
    if(!this.hasPatientPreparation()) {
      this.patientPreparation = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `timeAspect` property value as a StringType object if defined; else an empty StringType object
   */
  public getTimeAspectElement(): StringType {
    return this.timeAspect ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `timeAspect` property.
   *
   * @param element - the `timeAspect` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimeAspectElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.timeAspect; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.timeAspect = element;
    } else {
      this.timeAspect = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timeAspect` property exists and has a value; `false` otherwise
   */
  public hasTimeAspectElement(): boolean {
    return isDefined<StringType>(this.timeAspect) && !this.timeAspect.isEmpty();
  }

  /**
   * @returns the `timeAspect` property value as a fhirString if defined; else undefined
   */
  public getTimeAspect(): fhirString | undefined {
    return this.timeAspect?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `timeAspect` property.
   *
   * @param value - the `timeAspect` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimeAspect(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.timeAspect (${String(value)})`;
      this.timeAspect = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.timeAspect = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timeAspect` property exists and has a value; `false` otherwise
   */
  public hasTimeAspect(): boolean {
    return this.hasTimeAspectElement();
  }

  /**
   * @returns the `collection` property value as a CodeableConcept array
   */
  public getCollection(): CodeableConcept[] {
    return this.collection ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `collection` property.
   *
   * @param value - the `collection` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCollection(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.collection; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.collection = value;
    } else {
      this.collection = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `collection` array property.
   *
   * @param value - the `collection` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCollection(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.collection; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCollection();
      this.collection?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `collection` property exists and has a value; `false` otherwise
   */
  public hasCollection(): boolean {
    return isDefinedList<CodeableConcept>(this.collection) && this.collection.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `collection` property
   */
  private initCollection(): void {
    if(!this.hasCollection()) {
      this.collection = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `typeTested` property value as a SpecimenDefinitionTypeTestedComponent array
   */
  public getTypeTested(): SpecimenDefinitionTypeTestedComponent[] {
    return this.typeTested ?? ([] as SpecimenDefinitionTypeTestedComponent[]);
  }

  /**
   * Assigns the provided SpecimenDefinitionTypeTestedComponent array value to the `typeTested` property.
   *
   * @param value - the `typeTested` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTypeTested(value: SpecimenDefinitionTypeTestedComponent[] | undefined): this {
    if (isDefinedList<SpecimenDefinitionTypeTestedComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested; Provided value array has an element that is not an instance of SpecimenDefinitionTypeTestedComponent.`;
      assertFhirTypeList<SpecimenDefinitionTypeTestedComponent>(value, SpecimenDefinitionTypeTestedComponent, optErrMsg);
      this.typeTested = value;
    } else {
      this.typeTested = undefined;
    }
    return this;
  }

  /**
   * Add the provided SpecimenDefinitionTypeTestedComponent value to the `typeTested` array property.
   *
   * @param value - the `typeTested` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTypeTested(value: SpecimenDefinitionTypeTestedComponent | undefined): this {
    if (isDefined<SpecimenDefinitionTypeTestedComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested; Provided element is not an instance of SpecimenDefinitionTypeTestedComponent.`;
      assertFhirType<SpecimenDefinitionTypeTestedComponent>(value, SpecimenDefinitionTypeTestedComponent, optErrMsg);
      this.initTypeTested();
      this.typeTested?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `typeTested` property exists and has a value; `false` otherwise
   */
  public hasTypeTested(): boolean {
    return isDefinedList<SpecimenDefinitionTypeTestedComponent>(this.typeTested) && this.typeTested.some((item: SpecimenDefinitionTypeTestedComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `typeTested` property
   */
  private initTypeTested(): void {
    if(!this.hasTypeTested()) {
      this.typeTested = [] as SpecimenDefinitionTypeTestedComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SpecimenDefinition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.typeCollected,
      this.patientPreparation,
      this.timeAspect,
      this.collection,
      this.typeTested,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SpecimenDefinition {
    const dest = new SpecimenDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SpecimenDefinition): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.typeCollected = this.typeCollected?.copy();
    const patientPreparationList = copyListValues<CodeableConcept>(this.patientPreparation);
    dest.patientPreparation = patientPreparationList.length === 0 ? undefined : patientPreparationList;
    dest.timeAspect = this.timeAspect?.copy();
    const collectionList = copyListValues<CodeableConcept>(this.collection);
    dest.collection = collectionList.length === 0 ? undefined : collectionList;
    const typeTestedList = copyListValues<SpecimenDefinitionTypeTestedComponent>(this.typeTested);
    dest.typeTested = typeTestedList.length === 0 ? undefined : typeTestedList;
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
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasTypeCollected()) {
      setFhirComplexJson(this.getTypeCollected(), 'typeCollected', jsonObj);
    }

    if (this.hasPatientPreparation()) {
      setFhirComplexListJson(this.getPatientPreparation(), 'patientPreparation', jsonObj);
    }

    if (this.hasTimeAspectElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTimeAspectElement(), 'timeAspect', jsonObj);
    }

    if (this.hasCollection()) {
      setFhirComplexListJson(this.getCollection(), 'collection', jsonObj);
    }

    if (this.hasTypeTested()) {
      setFhirBackboneElementListJson(this.getTypeTested(), 'typeTested', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * SpecimenDefinitionTypeTestedComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specimen in container intended for testing by lab
 * - **Definition:** Specimen conditioned in a container as expected by the testing laboratory.
 *
 * @category Data Models: Resource
 * @see [FHIR SpecimenDefinition](http://hl7.org/fhir/StructureDefinition/SpecimenDefinition)
 */
export class SpecimenDefinitionTypeTestedComponent extends BackboneElement implements IBackboneElement {
  constructor(preference: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.specimenContainedPreferenceEnum = new SpecimenContainedPreferenceEnum();

    this.preference = constructorCodeValueAsEnumCodeType<SpecimenContainedPreferenceEnum>(
      preference,
      SpecimenContainedPreferenceEnum,
      this.specimenContainedPreferenceEnum,
      'SpecimenDefinition.typeTested.preference',
    );
  }

  /**
   * Parse the provided `SpecimenDefinitionTypeTestedComponent` JSON to instantiate the SpecimenDefinitionTypeTestedComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SpecimenDefinitionTypeTestedComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SpecimenDefinitionTypeTestedComponent
   * @returns SpecimenDefinitionTypeTestedComponent data model or undefined for `SpecimenDefinitionTypeTestedComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SpecimenDefinitionTypeTestedComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SpecimenDefinitionTypeTestedComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SpecimenDefinitionTypeTestedComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'isDerived';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setIsDerivedElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'preference';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setPreference(null);
      } else {
        instance.setPreferenceElement(datatype);
      }
    } else {
      instance.setPreference(null);
    }

    fieldName = 'container';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: SpecimenDefinitionTypeTestedContainerComponent | undefined = SpecimenDefinitionTypeTestedContainerComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContainer(component);
    }

    fieldName = 'requirement';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setRequirementElement(datatype);
    }

    fieldName = 'retentionTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRetentionTime(datatype);
    }

    fieldName = 'rejectionCriterion';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRejectionCriterion(datatype);
          }
        });
      }
    }

    fieldName = 'handling';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: SpecimenDefinitionTypeTestedHandlingComponent | undefined = SpecimenDefinitionTypeTestedHandlingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addHandling(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * SpecimenDefinition.typeTested.isDerived Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Primary or secondary specimen
   * - **Definition:** Primary of secondary specimen.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private isDerived?: BooleanType | undefined;

  /**
   * SpecimenDefinition.typeTested.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of intended specimen
   * - **Definition:** The kind of specimen conditioned for testing expected by lab.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: SpecimenContainedPreference
   *
   * @see {@link SpecimenContainedPreferenceEnum }
   */
  private readonly specimenContainedPreferenceEnum: SpecimenContainedPreferenceEnum;

  /**
   * SpecimenDefinition.typeTested.preference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** preferred | alternate
   * - **Definition:** The preference for this type of conditioned specimen.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  private preference: EnumCodeType | null;

  /**
   * SpecimenDefinition.typeTested.container Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specimen\'s container
   * - **Definition:** The specimen\'s container.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private container?: SpecimenDefinitionTypeTestedContainerComponent | undefined;

  /**
   * SpecimenDefinition.typeTested.requirement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen requirements
   * - **Definition:** Requirements for delivery and special handling of this kind of conditioned specimen.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requirement?: StringType | undefined;

  /**
   * SpecimenDefinition.typeTested.retentionTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen retention time
   * - **Definition:** The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private retentionTime?: Duration | undefined;

  /**
   * SpecimenDefinition.typeTested.rejectionCriterion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Rejection criterion
   * - **Definition:** Criterion for rejection of the specimen in its container by the laboratory.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private rejectionCriterion?: CodeableConcept[] | undefined;

  /**
   * SpecimenDefinition.typeTested.handling Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen handling before testing
   * - **Definition:** Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private handling?: SpecimenDefinitionTypeTestedHandlingComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `isDerived` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getIsDerivedElement(): BooleanType {
    return this.isDerived ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `isDerived` property.
   *
   * @param element - the `isDerived` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsDerivedElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.isDerived; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.isDerived = element;
    } else {
      this.isDerived = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isDerived` property exists and has a value; `false` otherwise
   */
  public hasIsDerivedElement(): boolean {
    return isDefined<BooleanType>(this.isDerived) && !this.isDerived.isEmpty();
  }

  /**
   * @returns the `isDerived` property value as a fhirBoolean if defined; else undefined
   */
  public getIsDerived(): fhirBoolean | undefined {
    return this.isDerived?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `isDerived` property.
   *
   * @param value - the `isDerived` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsDerived(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.isDerived (${String(value)})`;
      this.isDerived = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.isDerived = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isDerived` property exists and has a value; `false` otherwise
   */
  public hasIsDerived(): boolean {
    return this.hasIsDerivedElement();
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
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `preference` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  public getPreferenceEnumType(): EnumCodeType | null {
    return this.preference;
  }

  /**
   * Assigns the provided EnumCodeType value to the `preference` property.
   *
   * @param enumType - the `preference` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  public setPreferenceEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SpecimenDefinition.typeTested.preference`;
      assertEnumCodeType<SpecimenContainedPreferenceEnum>(enumType, SpecimenContainedPreferenceEnum, errMsgPrefix);
      this.preference = enumType;
    } else {
      this.preference = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `preference` property exists and has a value; `false` otherwise
   */
  public hasPreferenceEnumType(): boolean {
    return isDefined<EnumCodeType>(this.preference) && !this.preference.isEmpty() && this.preference.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `preference` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  public getPreferenceElement(): CodeType | null {
    if (this.preference === null) {
      return null;
    }
    return this.preference as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `preference` property.
   *
   * @param element - the `preference` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  public setPreferenceElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.preference; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.preference = new EnumCodeType(element, this.specimenContainedPreferenceEnum);
    } else {
      this.preference = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `preference` property exists and has a value; `false` otherwise
   */
  public hasPreferenceElement(): boolean {
    return this.hasPreferenceEnumType();
  }

  /**
   * @returns the `preference` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  public getPreference(): fhirCode | null {
    if (this.preference === null) {
      return null;
    }
    return this.preference.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `preference` property.
   *
   * @param value - the `preference` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  public setPreference(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.preference (${String(value)})`;
      this.preference = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.specimenContainedPreferenceEnum);
    } else {
      this.preference = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `preference` property exists and has a value; `false` otherwise
   */
  public hasPreference(): boolean {
    return this.hasPreferenceEnumType();
  }

  /**
   * @returns the `container` property value as a SpecimenDefinitionTypeTestedContainerComponent object if defined; else an empty SpecimenDefinitionTypeTestedContainerComponent object
   */
  public getContainer(): SpecimenDefinitionTypeTestedContainerComponent {
    return this.container ?? new SpecimenDefinitionTypeTestedContainerComponent();
  }

  /**
   * Assigns the provided Container object value to the `container` property.
   *
   * @param value - the `container` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContainer(value: SpecimenDefinitionTypeTestedContainerComponent | undefined): this {
    if (isDefined<SpecimenDefinitionTypeTestedContainerComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container; Provided element is not an instance of SpecimenDefinitionTypeTestedContainerComponent.`;
      assertFhirType<SpecimenDefinitionTypeTestedContainerComponent>(value, SpecimenDefinitionTypeTestedContainerComponent, optErrMsg);
      this.container = value;
    } else {
      this.container = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `container` property exists and has a value; `false` otherwise
   */
  public hasContainer(): boolean {
    return isDefined<SpecimenDefinitionTypeTestedContainerComponent>(this.container) && !this.container.isEmpty();
  }

  /**
   * @returns the `requirement` property value as a StringType object if defined; else an empty StringType object
   */
  public getRequirementElement(): StringType {
    return this.requirement ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `requirement` property.
   *
   * @param element - the `requirement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequirementElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.requirement; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.requirement = element;
    } else {
      this.requirement = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requirement` property exists and has a value; `false` otherwise
   */
  public hasRequirementElement(): boolean {
    return isDefined<StringType>(this.requirement) && !this.requirement.isEmpty();
  }

  /**
   * @returns the `requirement` property value as a fhirString if defined; else undefined
   */
  public getRequirement(): fhirString | undefined {
    return this.requirement?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `requirement` property.
   *
   * @param value - the `requirement` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequirement(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.requirement (${String(value)})`;
      this.requirement = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.requirement = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requirement` property exists and has a value; `false` otherwise
   */
  public hasRequirement(): boolean {
    return this.hasRequirementElement();
  }

  /**
   * @returns the `retentionTime` property value as a Duration object if defined; else an empty Duration object
   */
  public getRetentionTime(): Duration {
    return this.retentionTime ?? new Duration();
  }

  /**
   * Assigns the provided RetentionTime object value to the `retentionTime` property.
   *
   * @param value - the `retentionTime` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRetentionTime(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.retentionTime; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.retentionTime = value;
    } else {
      this.retentionTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `retentionTime` property exists and has a value; `false` otherwise
   */
  public hasRetentionTime(): boolean {
    return isDefined<Duration>(this.retentionTime) && !this.retentionTime.isEmpty();
  }

  /**
   * @returns the `rejectionCriterion` property value as a CodeableConcept array
   */
  public getRejectionCriterion(): CodeableConcept[] {
    return this.rejectionCriterion ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `rejectionCriterion` property.
   *
   * @param value - the `rejectionCriterion` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRejectionCriterion(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.rejectionCriterion; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.rejectionCriterion = value;
    } else {
      this.rejectionCriterion = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `rejectionCriterion` array property.
   *
   * @param value - the `rejectionCriterion` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRejectionCriterion(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.rejectionCriterion; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initRejectionCriterion();
      this.rejectionCriterion?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `rejectionCriterion` property exists and has a value; `false` otherwise
   */
  public hasRejectionCriterion(): boolean {
    return isDefinedList<CodeableConcept>(this.rejectionCriterion) && this.rejectionCriterion.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `rejectionCriterion` property
   */
  private initRejectionCriterion(): void {
    if(!this.hasRejectionCriterion()) {
      this.rejectionCriterion = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `handling` property value as a SpecimenDefinitionTypeTestedHandlingComponent array
   */
  public getHandling(): SpecimenDefinitionTypeTestedHandlingComponent[] {
    return this.handling ?? ([] as SpecimenDefinitionTypeTestedHandlingComponent[]);
  }

  /**
   * Assigns the provided SpecimenDefinitionTypeTestedHandlingComponent array value to the `handling` property.
   *
   * @param value - the `handling` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setHandling(value: SpecimenDefinitionTypeTestedHandlingComponent[] | undefined): this {
    if (isDefinedList<SpecimenDefinitionTypeTestedHandlingComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling; Provided value array has an element that is not an instance of SpecimenDefinitionTypeTestedHandlingComponent.`;
      assertFhirTypeList<SpecimenDefinitionTypeTestedHandlingComponent>(value, SpecimenDefinitionTypeTestedHandlingComponent, optErrMsg);
      this.handling = value;
    } else {
      this.handling = undefined;
    }
    return this;
  }

  /**
   * Add the provided SpecimenDefinitionTypeTestedHandlingComponent value to the `handling` array property.
   *
   * @param value - the `handling` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addHandling(value: SpecimenDefinitionTypeTestedHandlingComponent | undefined): this {
    if (isDefined<SpecimenDefinitionTypeTestedHandlingComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling; Provided element is not an instance of SpecimenDefinitionTypeTestedHandlingComponent.`;
      assertFhirType<SpecimenDefinitionTypeTestedHandlingComponent>(value, SpecimenDefinitionTypeTestedHandlingComponent, optErrMsg);
      this.initHandling();
      this.handling?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `handling` property exists and has a value; `false` otherwise
   */
  public hasHandling(): boolean {
    return isDefinedList<SpecimenDefinitionTypeTestedHandlingComponent>(this.handling) && this.handling.some((item: SpecimenDefinitionTypeTestedHandlingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `handling` property
   */
  private initHandling(): void {
    if(!this.hasHandling()) {
      this.handling = [] as SpecimenDefinitionTypeTestedHandlingComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SpecimenDefinition.typeTested';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.isDerived,
      this.type_,
      this.preference,
      this.container,
      this.requirement,
      this.retentionTime,
      this.rejectionCriterion,
      this.handling,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.preference, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SpecimenDefinitionTypeTestedComponent {
    const dest = new SpecimenDefinitionTypeTestedComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SpecimenDefinitionTypeTestedComponent): void {
    super.copyValues(dest);
    dest.isDerived = this.isDerived?.copy();
    dest.type_ = this.type_?.copy();
    dest.preference = this.preference ? this.preference.copy() : null;
    dest.container = this.container?.copy();
    dest.requirement = this.requirement?.copy();
    dest.retentionTime = this.retentionTime?.copy();
    const rejectionCriterionList = copyListValues<CodeableConcept>(this.rejectionCriterion);
    dest.rejectionCriterion = rejectionCriterionList.length === 0 ? undefined : rejectionCriterionList;
    const handlingList = copyListValues<SpecimenDefinitionTypeTestedHandlingComponent>(this.handling);
    dest.handling = handlingList.length === 0 ? undefined : handlingList;
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

    if (this.hasIsDerivedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getIsDerivedElement(), 'isDerived', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasPreferenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPreferenceElement()!, 'preference', jsonObj);
    }

    if (this.hasContainer()) {
      setFhirBackboneElementJson(this.getContainer(), 'container', jsonObj);
    }

    if (this.hasRequirementElement()) {
      setFhirPrimitiveJson<fhirString>(this.getRequirementElement(), 'requirement', jsonObj);
    }

    if (this.hasRetentionTime()) {
      setFhirComplexJson(this.getRetentionTime(), 'retentionTime', jsonObj);
    }

    if (this.hasRejectionCriterion()) {
      setFhirComplexListJson(this.getRejectionCriterion(), 'rejectionCriterion', jsonObj);
    }

    if (this.hasHandling()) {
      setFhirBackboneElementListJson(this.getHandling(), 'handling', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SpecimenDefinitionTypeTestedContainerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The specimen\'s container
 * - **Definition:** The specimen\'s container.
 *
 * @category Data Models: Resource
 * @see [FHIR SpecimenDefinition](http://hl7.org/fhir/StructureDefinition/SpecimenDefinition)
 */
export class SpecimenDefinitionTypeTestedContainerComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SpecimenDefinitionTypeTestedContainerComponent` JSON to instantiate the SpecimenDefinitionTypeTestedContainerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SpecimenDefinitionTypeTestedContainerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SpecimenDefinitionTypeTestedContainerComponent
   * @returns SpecimenDefinitionTypeTestedContainerComponent data model or undefined for `SpecimenDefinitionTypeTestedContainerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SpecimenDefinitionTypeTestedContainerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SpecimenDefinitionTypeTestedContainerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SpecimenDefinitionTypeTestedContainerComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = SpecimenDefinitionTypeTestedContainerComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SpecimenDefinitionTypeTestedContainerComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'material';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMaterial(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'cap';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCap(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'capacity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCapacity(datatype);
    }

    fieldName = 'minimumVolume[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const minimumVolume: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setMinimumVolume(minimumVolume);

    fieldName = 'additive';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: SpecimenDefinitionTypeTestedContainerAdditiveComponent | undefined = SpecimenDefinitionTypeTestedContainerAdditiveComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAdditive(component);
          }
        });
      }
    }

    fieldName = 'preparation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPreparationElement(datatype);
    }

    return instance;
  }

  /**
   * SpecimenDefinition.typeTested.container.material Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Container material
   * - **Definition:** The type of material of the container.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private material?: CodeableConcept | undefined;

  /**
   * SpecimenDefinition.typeTested.container.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of container associated with the kind of specimen
   * - **Definition:** The type of container used to contain this kind of specimen.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * SpecimenDefinition.typeTested.container.cap Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Color of container cap
   * - **Definition:** Color of container cap.
   * - **Requirements:** From ISO 6710-2017 Table F.1 Recommended colour codes.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private cap?: CodeableConcept | undefined;

  /**
   * SpecimenDefinition.typeTested.container.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Container description
   * - **Definition:** The textual description of the kind of container.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * SpecimenDefinition.typeTested.container.capacity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Container capacity
   * - **Definition:** The capacity (volume or other measure) of this kind of container.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private capacity?: Quantity | undefined;

  /**
   * SpecimenDefinition.typeTested.container.minimumVolume[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SpecimenDefinition.typeTested.container.minimumVolume[x]', ['Quantity','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Minimum volume
   * - **Definition:** The minimum volume to be conditioned in the container.
   * - **FHIR Types:**
   *     'Quantity',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('SpecimenDefinition.typeTested.container.minimumVolume[x]',[
    'Quantity',
    'string',
  ])
  private minimumVolume?: IDataType | undefined;

  /**
   * SpecimenDefinition.typeTested.container.additive Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additive associated with container
   * - **Definition:** Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private additive?: SpecimenDefinitionTypeTestedContainerAdditiveComponent[] | undefined;

  /**
   * SpecimenDefinition.typeTested.container.preparation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen container preparation
   * - **Definition:** Special processing that should be applied to the container for this kind of specimen.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preparation?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `material` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMaterial(): CodeableConcept {
    return this.material ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Material object value to the `material` property.
   *
   * @param value - the `material` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaterial(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.material; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.material = value;
    } else {
      this.material = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `material` property exists and has a value; `false` otherwise
   */
  public hasMaterial(): boolean {
    return isDefined<CodeableConcept>(this.material) && !this.material.isEmpty();
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
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `cap` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCap(): CodeableConcept {
    return this.cap ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Cap object value to the `cap` property.
   *
   * @param value - the `cap` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCap(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.cap; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.cap = value;
    } else {
      this.cap = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cap` property exists and has a value; `false` otherwise
   */
  public hasCap(): boolean {
    return isDefined<CodeableConcept>(this.cap) && !this.cap.isEmpty();
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
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.description (${String(value)})`;
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
   * @returns the `capacity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getCapacity(): Quantity {
    return this.capacity ?? new Quantity();
  }

  /**
   * Assigns the provided Capacity object value to the `capacity` property.
   *
   * @param value - the `capacity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCapacity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.capacity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.capacity = value;
    } else {
      this.capacity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `capacity` property exists and has a value; `false` otherwise
   */
  public hasCapacity(): boolean {
    return isDefined<Quantity>(this.capacity) && !this.capacity.isEmpty();
  }

  /**
   * @returns the `minimumVolume` property value as a DataType object if defined; else undefined
   */
  public getMinimumVolume(): IDataType | undefined {
    return this.minimumVolume;
  }

  /**
   * Assigns the provided DataType object value to the `minimumVolume` property.
   *
   * @decorator `@ChoiceDataTypes('SpecimenDefinition.typeTested.container.minimumVolume[x]')`
   *
   * @param value - the `minimumVolume` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SpecimenDefinition.typeTested.container.minimumVolume[x]')
  public setMinimumVolume(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.minimumVolume = value;
    } else {
      this.minimumVolume = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `minimumVolume` property exists and has a value; `false` otherwise
   */
  public hasMinimumVolume(): boolean {
    return isDefined<IDataType>(this.minimumVolume) && !this.minimumVolume.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `minimumVolume` property value as a Quantity object if defined; else undefined
   */
  public getMinimumVolumeQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.minimumVolume)) {
      return undefined;
    }
    if (!(this.minimumVolume instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for SpecimenDefinition.typeTested.container.minimumVolume[x]: Expected Quantity but encountered ${this.minimumVolume.fhirType()}`,
      );
    }
    return this.minimumVolume;
  }

  /**
   * @returns `true` if the `minimumVolume` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasMinimumVolumeQuantity(): boolean {
    return this.hasMinimumVolume() && this.minimumVolume instanceof Quantity;
  }

  /**
   * @returns the `minimumVolume` property value as a StringType object if defined; else undefined
   */
  public getMinimumVolumeStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.minimumVolume)) {
      return undefined;
    }
    if (!(this.minimumVolume instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for SpecimenDefinition.typeTested.container.minimumVolume[x]: Expected StringType but encountered ${this.minimumVolume.fhirType()}`,
      );
    }
    return this.minimumVolume;
  }

  /**
   * @returns `true` if the `minimumVolume` property exists as a StringType and has a value; `false` otherwise
   */
  public hasMinimumVolumeStringType(): boolean {
    return this.hasMinimumVolume() && this.minimumVolume instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `additive` property value as a SpecimenDefinitionTypeTestedContainerAdditiveComponent array
   */
  public getAdditive(): SpecimenDefinitionTypeTestedContainerAdditiveComponent[] {
    return this.additive ?? ([] as SpecimenDefinitionTypeTestedContainerAdditiveComponent[]);
  }

  /**
   * Assigns the provided SpecimenDefinitionTypeTestedContainerAdditiveComponent array value to the `additive` property.
   *
   * @param value - the `additive` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdditive(value: SpecimenDefinitionTypeTestedContainerAdditiveComponent[] | undefined): this {
    if (isDefinedList<SpecimenDefinitionTypeTestedContainerAdditiveComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.additive; Provided value array has an element that is not an instance of SpecimenDefinitionTypeTestedContainerAdditiveComponent.`;
      assertFhirTypeList<SpecimenDefinitionTypeTestedContainerAdditiveComponent>(value, SpecimenDefinitionTypeTestedContainerAdditiveComponent, optErrMsg);
      this.additive = value;
    } else {
      this.additive = undefined;
    }
    return this;
  }

  /**
   * Add the provided SpecimenDefinitionTypeTestedContainerAdditiveComponent value to the `additive` array property.
   *
   * @param value - the `additive` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdditive(value: SpecimenDefinitionTypeTestedContainerAdditiveComponent | undefined): this {
    if (isDefined<SpecimenDefinitionTypeTestedContainerAdditiveComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.additive; Provided element is not an instance of SpecimenDefinitionTypeTestedContainerAdditiveComponent.`;
      assertFhirType<SpecimenDefinitionTypeTestedContainerAdditiveComponent>(value, SpecimenDefinitionTypeTestedContainerAdditiveComponent, optErrMsg);
      this.initAdditive();
      this.additive?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `additive` property exists and has a value; `false` otherwise
   */
  public hasAdditive(): boolean {
    return isDefinedList<SpecimenDefinitionTypeTestedContainerAdditiveComponent>(this.additive) && this.additive.some((item: SpecimenDefinitionTypeTestedContainerAdditiveComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `additive` property
   */
  private initAdditive(): void {
    if(!this.hasAdditive()) {
      this.additive = [] as SpecimenDefinitionTypeTestedContainerAdditiveComponent[];
    }
  }

  /**
   * @returns the `preparation` property value as a StringType object if defined; else an empty StringType object
   */
  public getPreparationElement(): StringType {
    return this.preparation ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `preparation` property.
   *
   * @param element - the `preparation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreparationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.preparation; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.preparation = element;
    } else {
      this.preparation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preparation` property exists and has a value; `false` otherwise
   */
  public hasPreparationElement(): boolean {
    return isDefined<StringType>(this.preparation) && !this.preparation.isEmpty();
  }

  /**
   * @returns the `preparation` property value as a fhirString if defined; else undefined
   */
  public getPreparation(): fhirString | undefined {
    return this.preparation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `preparation` property.
   *
   * @param value - the `preparation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreparation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.preparation (${String(value)})`;
      this.preparation = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.preparation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preparation` property exists and has a value; `false` otherwise
   */
  public hasPreparation(): boolean {
    return this.hasPreparationElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SpecimenDefinition.typeTested.container';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.material,
      this.type_,
      this.cap,
      this.description,
      this.capacity,
      this.minimumVolume,
      this.additive,
      this.preparation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SpecimenDefinitionTypeTestedContainerComponent {
    const dest = new SpecimenDefinitionTypeTestedContainerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SpecimenDefinitionTypeTestedContainerComponent): void {
    super.copyValues(dest);
    dest.material = this.material?.copy();
    dest.type_ = this.type_?.copy();
    dest.cap = this.cap?.copy();
    dest.description = this.description?.copy();
    dest.capacity = this.capacity?.copy();
    dest.minimumVolume = this.minimumVolume?.copy() as IDataType;
    const additiveList = copyListValues<SpecimenDefinitionTypeTestedContainerAdditiveComponent>(this.additive);
    dest.additive = additiveList.length === 0 ? undefined : additiveList;
    dest.preparation = this.preparation?.copy();
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

    if (this.hasMaterial()) {
      setFhirComplexJson(this.getMaterial(), 'material', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasCap()) {
      setFhirComplexJson(this.getCap(), 'cap', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasCapacity()) {
      setFhirComplexJson(this.getCapacity(), 'capacity', jsonObj);
    }

    if (this.hasMinimumVolume()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getMinimumVolume()!, 'minimumVolume', jsonObj);
    }

    if (this.hasAdditive()) {
      setFhirBackboneElementListJson(this.getAdditive(), 'additive', jsonObj);
    }

    if (this.hasPreparationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPreparationElement(), 'preparation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SpecimenDefinitionTypeTestedContainerAdditiveComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Additive associated with container
 * - **Definition:** Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
 *
 * @category Data Models: Resource
 * @see [FHIR SpecimenDefinition](http://hl7.org/fhir/StructureDefinition/SpecimenDefinition)
 */
export class SpecimenDefinitionTypeTestedContainerAdditiveComponent extends BackboneElement implements IBackboneElement {
  constructor(additive: IDataType | null = null) {
    super();

    this.additive = null;
    if (isDefined<IDataType>(additive)) {
      this.setAdditive(additive);
    }

  }

  /**
   * Parse the provided `SpecimenDefinitionTypeTestedContainerAdditiveComponent` JSON to instantiate the SpecimenDefinitionTypeTestedContainerAdditiveComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SpecimenDefinitionTypeTestedContainerAdditiveComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SpecimenDefinitionTypeTestedContainerAdditiveComponent
   * @returns SpecimenDefinitionTypeTestedContainerAdditiveComponent data model or undefined for `SpecimenDefinitionTypeTestedContainerAdditiveComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SpecimenDefinitionTypeTestedContainerAdditiveComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SpecimenDefinitionTypeTestedContainerAdditiveComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SpecimenDefinitionTypeTestedContainerAdditiveComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = SpecimenDefinitionTypeTestedContainerAdditiveComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SpecimenDefinitionTypeTestedContainerAdditiveComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'additive[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const additive: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (additive === undefined) {
      instance.setAdditive(null);
    } else {
      instance.setAdditive(additive);
    }

    return instance;
  }

  /**
   * SpecimenDefinition.typeTested.container.additive.additive[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SpecimenDefinition.typeTested.container.additive.additive[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additive associated with container
   * - **Definition:** Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('SpecimenDefinition.typeTested.container.additive.additive[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private additive: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `additive` property value as a DataType object; else null
   */
  public getAdditive(): IDataType | null {
    return this.additive;
  }

  /**
   * Assigns the provided DataType object value to the `additive` property.
   *
   * @decorator `@ChoiceDataTypes('SpecimenDefinition.typeTested.container.additive.additive[x]')`
   *
   * @param value - the `additive` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SpecimenDefinition.typeTested.container.additive.additive[x]')
  public setAdditive(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.additive = value;
    } else {
      this.additive = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `additive` property exists and has a value; `false` otherwise
   */
  public hasAdditive(): boolean {
    return isDefined<IDataType>(this.additive) && !this.additive.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `additive` property value as a CodeableConcept object if defined; else null
   */
  public getAdditiveCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.additive)) {
      return null;
    }
    if (!(this.additive instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for SpecimenDefinition.typeTested.container.additive.additive[x]: Expected CodeableConcept but encountered ${this.additive.fhirType()}`,
      );
    }
    return this.additive;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasAdditiveCodeableConcept(): boolean {
    return this.hasAdditive() && this.additive instanceof CodeableConcept;
  }

  /**
   * @returns the `additive` property value as a Reference object if defined; else null
   */
  public getAdditiveReference(): Reference | null {
    if (!isDefined<IDataType>(this.additive)) {
      return null;
    }
    if (!(this.additive instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for SpecimenDefinition.typeTested.container.additive.additive[x]: Expected Reference but encountered ${this.additive.fhirType()}`,
      );
    }
    return this.additive;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasAdditiveReference(): boolean {
    return this.hasAdditive() && this.additive instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SpecimenDefinition.typeTested.container.additive';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.additive,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.additive, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SpecimenDefinitionTypeTestedContainerAdditiveComponent {
    const dest = new SpecimenDefinitionTypeTestedContainerAdditiveComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SpecimenDefinitionTypeTestedContainerAdditiveComponent): void {
    super.copyValues(dest);
    dest.additive = this.additive ? this.additive.copy() as IDataType : null;
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

    if (this.hasAdditive()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAdditive()!, 'additive', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SpecimenDefinitionTypeTestedHandlingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specimen handling before testing
 * - **Definition:** Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
 *
 * @category Data Models: Resource
 * @see [FHIR SpecimenDefinition](http://hl7.org/fhir/StructureDefinition/SpecimenDefinition)
 */
export class SpecimenDefinitionTypeTestedHandlingComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SpecimenDefinitionTypeTestedHandlingComponent` JSON to instantiate the SpecimenDefinitionTypeTestedHandlingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SpecimenDefinitionTypeTestedHandlingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SpecimenDefinitionTypeTestedHandlingComponent
   * @returns SpecimenDefinitionTypeTestedHandlingComponent data model or undefined for `SpecimenDefinitionTypeTestedHandlingComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SpecimenDefinitionTypeTestedHandlingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SpecimenDefinitionTypeTestedHandlingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SpecimenDefinitionTypeTestedHandlingComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'temperatureQualifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTemperatureQualifier(datatype);
    }

    fieldName = 'temperatureRange';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Range | undefined = Range.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTemperatureRange(datatype);
    }

    fieldName = 'maxDuration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMaxDuration(datatype);
    }

    fieldName = 'instruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setInstructionElement(datatype);
    }

    return instance;
  }

  /**
   * SpecimenDefinition.typeTested.handling.temperatureQualifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Temperature qualifier
   * - **Definition:** It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private temperatureQualifier?: CodeableConcept | undefined;

  /**
   * SpecimenDefinition.typeTested.handling.temperatureRange Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Temperature range
   * - **Definition:** The temperature interval for this set of handling instructions.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private temperatureRange?: Range | undefined;

  /**
   * SpecimenDefinition.typeTested.handling.maxDuration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Maximum preservation time
   * - **Definition:** The maximum time interval of preservation of the specimen with these conditions.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private maxDuration?: Duration | undefined;

  /**
   * SpecimenDefinition.typeTested.handling.instruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Preservation instruction
   * - **Definition:** Additional textual instructions for the preservation or transport of the specimen. For instance, \'Protect from light exposure\'.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instruction?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `temperatureQualifier` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getTemperatureQualifier(): CodeableConcept {
    return this.temperatureQualifier ?? new CodeableConcept();
  }

  /**
   * Assigns the provided TemperatureQualifier object value to the `temperatureQualifier` property.
   *
   * @param value - the `temperatureQualifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTemperatureQualifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling.temperatureQualifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.temperatureQualifier = value;
    } else {
      this.temperatureQualifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `temperatureQualifier` property exists and has a value; `false` otherwise
   */
  public hasTemperatureQualifier(): boolean {
    return isDefined<CodeableConcept>(this.temperatureQualifier) && !this.temperatureQualifier.isEmpty();
  }

  /**
   * @returns the `temperatureRange` property value as a Range object if defined; else an empty Range object
   */
  public getTemperatureRange(): Range {
    return this.temperatureRange ?? new Range();
  }

  /**
   * Assigns the provided TemperatureRange object value to the `temperatureRange` property.
   *
   * @param value - the `temperatureRange` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTemperatureRange(value: Range | undefined): this {
    if (isDefined<Range>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling.temperatureRange; Provided element is not an instance of Range.`;
      assertFhirType<Range>(value, Range, optErrMsg);
      this.temperatureRange = value;
    } else {
      this.temperatureRange = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `temperatureRange` property exists and has a value; `false` otherwise
   */
  public hasTemperatureRange(): boolean {
    return isDefined<Range>(this.temperatureRange) && !this.temperatureRange.isEmpty();
  }

  /**
   * @returns the `maxDuration` property value as a Duration object if defined; else an empty Duration object
   */
  public getMaxDuration(): Duration {
    return this.maxDuration ?? new Duration();
  }

  /**
   * Assigns the provided MaxDuration object value to the `maxDuration` property.
   *
   * @param value - the `maxDuration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaxDuration(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling.maxDuration; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.maxDuration = value;
    } else {
      this.maxDuration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maxDuration` property exists and has a value; `false` otherwise
   */
  public hasMaxDuration(): boolean {
    return isDefined<Duration>(this.maxDuration) && !this.maxDuration.isEmpty();
  }

  /**
   * @returns the `instruction` property value as a StringType object if defined; else an empty StringType object
   */
  public getInstructionElement(): StringType {
    return this.instruction ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `instruction` property.
   *
   * @param element - the `instruction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstructionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling.instruction; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.instruction = element;
    } else {
      this.instruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instruction` property exists and has a value; `false` otherwise
   */
  public hasInstructionElement(): boolean {
    return isDefined<StringType>(this.instruction) && !this.instruction.isEmpty();
  }

  /**
   * @returns the `instruction` property value as a fhirString if defined; else undefined
   */
  public getInstruction(): fhirString | undefined {
    return this.instruction?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `instruction` property.
   *
   * @param value - the `instruction` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstruction(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling.instruction (${String(value)})`;
      this.instruction = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.instruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instruction` property exists and has a value; `false` otherwise
   */
  public hasInstruction(): boolean {
    return this.hasInstructionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SpecimenDefinition.typeTested.handling';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.temperatureQualifier,
      this.temperatureRange,
      this.maxDuration,
      this.instruction,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SpecimenDefinitionTypeTestedHandlingComponent {
    const dest = new SpecimenDefinitionTypeTestedHandlingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SpecimenDefinitionTypeTestedHandlingComponent): void {
    super.copyValues(dest);
    dest.temperatureQualifier = this.temperatureQualifier?.copy();
    dest.temperatureRange = this.temperatureRange?.copy();
    dest.maxDuration = this.maxDuration?.copy();
    dest.instruction = this.instruction?.copy();
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

    if (this.hasTemperatureQualifier()) {
      setFhirComplexJson(this.getTemperatureQualifier(), 'temperatureQualifier', jsonObj);
    }

    if (this.hasTemperatureRange()) {
      setFhirComplexJson(this.getTemperatureRange(), 'temperatureRange', jsonObj);
    }

    if (this.hasMaxDuration()) {
      setFhirComplexJson(this.getMaxDuration(), 'maxDuration', jsonObj);
    }

    if (this.hasInstructionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getInstructionElement(), 'instruction', jsonObj);
    }

    return jsonObj;
  }
}
