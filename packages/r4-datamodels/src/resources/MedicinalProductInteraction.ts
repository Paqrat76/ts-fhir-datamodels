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
 * MedicinalProductInteraction Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicinalProductInteraction
 * StructureDefinition.name: MedicinalProductInteraction
 * StructureDefinition.description: The interactions of the medicinal product with other medicinal products, or other forms of interactions.
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
  DomainResource,
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
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
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
import { CodeableConcept, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MedicinalProductInteraction Class
 *
 * @remarks
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 *
 * **FHIR Specification**
 * - **Short:** MedicinalProductInteraction
 * - **Definition:** The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductInteraction](http://hl7.org/fhir/StructureDefinition/MedicinalProductInteraction)
 */
export class MedicinalProductInteraction extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicinalProductInteraction` JSON to instantiate the MedicinalProductInteraction data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductInteraction`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductInteraction
   * @returns MedicinalProductInteraction data model or undefined for `MedicinalProductInteraction`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductInteraction | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductInteraction';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductInteraction();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicinalProductInteraction');
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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'interactant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductInteractionInteractantComponent | undefined = MedicinalProductInteractionInteractantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addInteractant(component);
        }
      });
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'effect';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEffect(datatype);
    }

    fieldName = 'incidence';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIncidence(datatype);
    }

    fieldName = 'management';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setManagement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicinalProductInteraction.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The medication for which this is a described interaction
   * - **Definition:** The medication for which this is a described interaction.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProduct',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference[] | undefined;

  /**
   * MedicinalProductInteraction.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The interaction described
   * - **Definition:** The interaction described.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * MedicinalProductInteraction.interactant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific medication, food or laboratory test that interacts
   * - **Definition:** The specific medication, food or laboratory test that interacts.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private interactant?: MedicinalProductInteractionInteractantComponent[] | undefined;

  /**
   * MedicinalProductInteraction.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction
   * - **Definition:** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * MedicinalProductInteraction.effect Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The effect of the interaction, for example "reduced gastric absorption of primary medication"
   * - **Definition:** The effect of the interaction, for example "reduced gastric absorption of primary medication".
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effect?: CodeableConcept | undefined;

  /**
   * MedicinalProductInteraction.incidence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The incidence of the interaction, e.g. theoretical, observed
   * - **Definition:** The incidence of the interaction, e.g. theoretical, observed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private incidence?: CodeableConcept | undefined;

  /**
   * MedicinalProductInteraction.management Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actions for managing the interaction
   * - **Definition:** Actions for managing the interaction.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private management?: CodeableConcept | undefined;

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
   * @decorator `@ReferenceTargets('MedicinalProductInteraction.subject', ['MedicinalProduct','Medication','Substance',])`
   *
   * @param value - the `subject` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductInteraction.subject', [
    'MedicinalProduct',
  
    'Medication',
  
    'Substance',
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
   * @decorator `@ReferenceTargets('MedicinalProductInteraction.subject', ['MedicinalProduct','Medication','Substance',])`
   *
   * @param value - the `subject` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductInteraction.subject', [
    'MedicinalProduct',
  
    'Medication',
  
    'Substance',
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
      const optErrMsg = `Invalid MedicinalProductInteraction.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid MedicinalProductInteraction.description (${String(value)})`;
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
   * @returns the `interactant` property value as a MedicinalProductInteractionInteractantComponent array
   */
  public getInteractant(): MedicinalProductInteractionInteractantComponent[] {
    return this.interactant ?? ([] as MedicinalProductInteractionInteractantComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductInteractionInteractantComponent array value to the `interactant` property.
   *
   * @param value - the `interactant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInteractant(value: MedicinalProductInteractionInteractantComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductInteractionInteractantComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductInteraction.interactant; Provided value array has an element that is not an instance of MedicinalProductInteractionInteractantComponent.`;
      assertFhirTypeList<MedicinalProductInteractionInteractantComponent>(value, MedicinalProductInteractionInteractantComponent, optErrMsg);
      this.interactant = value;
    } else {
      this.interactant = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductInteractionInteractantComponent value to the `interactant` array property.
   *
   * @param value - the `interactant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInteractant(value: MedicinalProductInteractionInteractantComponent | undefined): this {
    if (isDefined<MedicinalProductInteractionInteractantComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductInteraction.interactant; Provided element is not an instance of MedicinalProductInteractionInteractantComponent.`;
      assertFhirType<MedicinalProductInteractionInteractantComponent>(value, MedicinalProductInteractionInteractantComponent, optErrMsg);
      this.initInteractant();
      this.interactant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `interactant` property exists and has a value; `false` otherwise
   */
  public hasInteractant(): boolean {
    return isDefinedList<MedicinalProductInteractionInteractantComponent>(this.interactant) && this.interactant.some((item: MedicinalProductInteractionInteractantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `interactant` property
   */
  private initInteractant(): void {
    if(!this.hasInteractant()) {
      this.interactant = [] as MedicinalProductInteractionInteractantComponent[];
    }
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
      const optErrMsg = `Invalid MedicinalProductInteraction.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `effect` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getEffect(): CodeableConcept {
    return this.effect ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Effect object value to the `effect` property.
   *
   * @param value - the `effect` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEffect(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductInteraction.effect; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.effect = value;
    } else {
      this.effect = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effect` property exists and has a value; `false` otherwise
   */
  public hasEffect(): boolean {
    return isDefined<CodeableConcept>(this.effect) && !this.effect.isEmpty();
  }

  /**
   * @returns the `incidence` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getIncidence(): CodeableConcept {
    return this.incidence ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Incidence object value to the `incidence` property.
   *
   * @param value - the `incidence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIncidence(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductInteraction.incidence; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.incidence = value;
    } else {
      this.incidence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `incidence` property exists and has a value; `false` otherwise
   */
  public hasIncidence(): boolean {
    return isDefined<CodeableConcept>(this.incidence) && !this.incidence.isEmpty();
  }

  /**
   * @returns the `management` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getManagement(): CodeableConcept {
    return this.management ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Management object value to the `management` property.
   *
   * @param value - the `management` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setManagement(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductInteraction.management; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.management = value;
    } else {
      this.management = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `management` property exists and has a value; `false` otherwise
   */
  public hasManagement(): boolean {
    return isDefined<CodeableConcept>(this.management) && !this.management.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductInteraction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.subject,
      this.description,
      this.interactant,
      this.type_,
      this.effect,
      this.incidence,
      this.management,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductInteraction {
    const dest = new MedicinalProductInteraction();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductInteraction): void {
    super.copyValues(dest);
    const subjectList = copyListValues<Reference>(this.subject);
    dest.subject = subjectList.length === 0 ? undefined : subjectList;
    dest.description = this.description?.copy();
    const interactantList = copyListValues<MedicinalProductInteractionInteractantComponent>(this.interactant);
    dest.interactant = interactantList.length === 0 ? undefined : interactantList;
    dest.type_ = this.type_?.copy();
    dest.effect = this.effect?.copy();
    dest.incidence = this.incidence?.copy();
    dest.management = this.management?.copy();
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasInteractant()) {
      setFhirBackboneElementListJson(this.getInteractant(), 'interactant', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasEffect()) {
      setFhirComplexJson(this.getEffect(), 'effect', jsonObj);
    }

    if (this.hasIncidence()) {
      setFhirComplexJson(this.getIncidence(), 'incidence', jsonObj);
    }

    if (this.hasManagement()) {
      setFhirComplexJson(this.getManagement(), 'management', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MedicinalProductInteractionInteractantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The specific medication, food or laboratory test that interacts
 * - **Definition:** The specific medication, food or laboratory test that interacts.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductInteraction](http://hl7.org/fhir/StructureDefinition/MedicinalProductInteraction)
 */
export class MedicinalProductInteractionInteractantComponent extends BackboneElement implements IBackboneElement {
  constructor(item: IDataType | null = null) {
    super();

    this.item = null;
    if (isDefined<IDataType>(item)) {
      this.setItem(item);
    }

  }

  /**
   * Parse the provided `MedicinalProductInteractionInteractantComponent` JSON to instantiate the MedicinalProductInteractionInteractantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductInteractionInteractantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductInteractionInteractantComponent
   * @returns MedicinalProductInteractionInteractantComponent data model or undefined for `MedicinalProductInteractionInteractantComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductInteractionInteractantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductInteractionInteractantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductInteractionInteractantComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = MedicinalProductInteractionInteractantComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicinalProductInteractionInteractantComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'item[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const item: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (item === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setItem(item);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicinalProductInteraction.interactant.item[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicinalProductInteraction.interactant.item[x]', ['Reference','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific medication, food or laboratory test that interacts
   * - **Definition:** The specific medication, food or laboratory test that interacts.
   * - **FHIR Types:**
   *     'Reference',
   *     'CodeableConcept',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MedicinalProductInteraction.interactant.item[x]',[
    'Reference',
    'CodeableConcept',
  ])
  private item: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `item` property value as a DataType object; else null
   */
  public getItem(): IDataType | null {
    return this.item;
  }

  /**
   * Assigns the provided DataType object value to the `item` property.
   *
   * @decorator `@ChoiceDataTypes('MedicinalProductInteraction.interactant.item[x]')`
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicinalProductInteraction.interactant.item[x]')
  public setItem(value: IDataType): this {
    assertIsDefined<IDataType>(value, `MedicinalProductInteraction.interactant.item[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.item = value;
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefined<IDataType>(this.item) && !this.item.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `item` property value as a Reference object if defined; else null
   */
  public getItemReference(): Reference | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicinalProductInteraction.interactant.item[x]: Expected Reference but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasItemReference(): boolean {
    return this.hasItem() && this.item instanceof Reference;
  }

  /**
   * @returns the `item` property value as a CodeableConcept object if defined; else null
   */
  public getItemCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicinalProductInteraction.interactant.item[x]: Expected CodeableConcept but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasItemCodeableConcept(): boolean {
    return this.hasItem() && this.item instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductInteraction.interactant';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.item,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductInteractionInteractantComponent {
    const dest = new MedicinalProductInteractionInteractantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductInteractionInteractantComponent): void {
    super.copyValues(dest);
    dest.item = this.item ? this.item.copy() as IDataType : null;
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

    if (this.hasItem()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getItem()!, 'item', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductInteraction.interactant.item[x]`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
