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
 * SubstancePolymer Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/SubstancePolymer
 * StructureDefinition.name: SubstancePolymer
 * StructureDefinition.description: Todo.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  BooleanType,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  IntegerType,
  JSON,
  PrimitiveTypeJson,
  StringType,
  assertFhirType,
  assertFhirTypeList,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirInteger,
  fhirIntegerSchema,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { Attachment, CodeableConcept, PARSABLE_DATATYPE_MAP, SubstanceAmount } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * SubstancePolymer Class
 *
 * @remarks
 * Todo.
 *
 * **FHIR Specification**
 * - **Short:** Todo
 * - **Definition:** Todo.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR SubstancePolymer](http://hl7.org/fhir/StructureDefinition/SubstancePolymer)
 */
export class SubstancePolymer extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstancePolymer` JSON to instantiate the SubstancePolymer data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstancePolymer`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstancePolymer
   * @returns SubstancePolymer data model or undefined for `SubstancePolymer`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): SubstancePolymer | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstancePolymer';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstancePolymer();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'SubstancePolymer');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'class';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setClass(datatype);
    }

    fieldName = 'geometry';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGeometry(datatype);
    }

    fieldName = 'copolymerConnectivity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCopolymerConnectivity(datatype);
        }
      });
    }

    fieldName = 'modification';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addModificationElement(datatype);
        }
      });
    }

    fieldName = 'monomerSet';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstancePolymerMonomerSetComponent | undefined = SubstancePolymerMonomerSetComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addMonomerSet(component);
        }
      });
    }

    fieldName = 'repeat';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstancePolymerRepeatComponent | undefined = SubstancePolymerRepeatComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRepeat(component);
        }
      });
    }

    return instance;
  }

  /**
   * SubstancePolymer.class Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private class_?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.geometry Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private geometry?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.copolymerConnectivity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private copolymerConnectivity?: CodeableConcept[] | undefined;

  /**
   * SubstancePolymer.modification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private modification?: StringType[] | undefined;

  /**
   * SubstancePolymer.monomerSet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private monomerSet?: SubstancePolymerMonomerSetComponent[] | undefined;

  /**
   * SubstancePolymer.repeat Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private repeat?: SubstancePolymerRepeatComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `class_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getClass(): CodeableConcept {
    return this.class_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Class object value to the `class_` property.
   *
   * @param value - the `class_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClass(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.class; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.class_ = value;
    } else {
      this.class_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `class_` property exists and has a value; `false` otherwise
   */
  public hasClass(): boolean {
    return isDefined<CodeableConcept>(this.class_) && !this.class_.isEmpty();
  }

  /**
   * @returns the `geometry` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getGeometry(): CodeableConcept {
    return this.geometry ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Geometry object value to the `geometry` property.
   *
   * @param value - the `geometry` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGeometry(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.geometry; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.geometry = value;
    } else {
      this.geometry = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `geometry` property exists and has a value; `false` otherwise
   */
  public hasGeometry(): boolean {
    return isDefined<CodeableConcept>(this.geometry) && !this.geometry.isEmpty();
  }

  /**
   * @returns the `copolymerConnectivity` property value as a CodeableConcept array
   */
  public getCopolymerConnectivity(): CodeableConcept[] {
    return this.copolymerConnectivity ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `copolymerConnectivity` property.
   *
   * @param value - the `copolymerConnectivity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCopolymerConnectivity(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.copolymerConnectivity; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.copolymerConnectivity = value;
    } else {
      this.copolymerConnectivity = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `copolymerConnectivity` array property.
   *
   * @param value - the `copolymerConnectivity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCopolymerConnectivity(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.copolymerConnectivity; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCopolymerConnectivity();
      this.copolymerConnectivity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `copolymerConnectivity` property exists and has a value; `false` otherwise
   */
  public hasCopolymerConnectivity(): boolean {
    return isDefinedList<CodeableConcept>(this.copolymerConnectivity) && this.copolymerConnectivity.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `copolymerConnectivity` property
   */
  private initCopolymerConnectivity(): void {
    if(!this.hasCopolymerConnectivity()) {
      this.copolymerConnectivity = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `modification` property value as a StringType array
   */
  public getModificationElement(): StringType[] {
    return this.modification ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `modification` property.
   *
   * @param element - the `modification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setModificationElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid SubstancePolymer.modification; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.modification = element;
    } else {
      this.modification = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `modification` array property.
   *
   * @param element - the `modification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addModificationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstancePolymer.modification; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initModification();
      this.modification?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `modification` property exists and has a value; `false` otherwise
   */
  public hasModificationElement(): boolean {
    return isDefinedList<StringType>(this.modification) && this.modification.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `modification` property value as a fhirString array
   */
  public getModification(): fhirString[] {
    this.initModification();
    const modificationValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.modification!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        modificationValues.push(value);
      }
    }
    return modificationValues;
  }

  /**
   * Assigns the provided primitive value array to the `modification` property.
   *
   * @param value - the `modification` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setModification(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const modificationElements = [] as StringType[];
      for (const modificationValue of value) {
        const optErrMsg = `Invalid SubstancePolymer.modification array item (${String(modificationValue)})`;
        const element = new StringType(parseFhirPrimitiveData(modificationValue, fhirStringSchema, optErrMsg));
        modificationElements.push(element);
      }
      this.modification = modificationElements;
    } else {
      this.modification = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `modification` array property.
   *
   * @param value - the `modification` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addModification(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.modification array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initModification();
      this.addModificationElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `modification` property exists and has a value; `false` otherwise
   */
  public hasModification(): boolean {
    return this.hasModificationElement();
  }

  /**
   * Initialize the `modification` property
   */
  private initModification(): void {
    if (!this.hasModification()) {
      this.modification = [] as StringType[];
    }
  }

  /**
   * @returns the `monomerSet` property value as a SubstancePolymerMonomerSetComponent array
   */
  public getMonomerSet(): SubstancePolymerMonomerSetComponent[] {
    return this.monomerSet ?? ([] as SubstancePolymerMonomerSetComponent[]);
  }

  /**
   * Assigns the provided SubstancePolymerMonomerSetComponent array value to the `monomerSet` property.
   *
   * @param value - the `monomerSet` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMonomerSet(value: SubstancePolymerMonomerSetComponent[] | undefined): this {
    if (isDefinedList<SubstancePolymerMonomerSetComponent>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.monomerSet; Provided value array has an element that is not an instance of SubstancePolymerMonomerSetComponent.`;
      assertFhirTypeList<SubstancePolymerMonomerSetComponent>(value, SubstancePolymerMonomerSetComponent, optErrMsg);
      this.monomerSet = value;
    } else {
      this.monomerSet = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstancePolymerMonomerSetComponent value to the `monomerSet` array property.
   *
   * @param value - the `monomerSet` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMonomerSet(value: SubstancePolymerMonomerSetComponent | undefined): this {
    if (isDefined<SubstancePolymerMonomerSetComponent>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.monomerSet; Provided element is not an instance of SubstancePolymerMonomerSetComponent.`;
      assertFhirType<SubstancePolymerMonomerSetComponent>(value, SubstancePolymerMonomerSetComponent, optErrMsg);
      this.initMonomerSet();
      this.monomerSet?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `monomerSet` property exists and has a value; `false` otherwise
   */
  public hasMonomerSet(): boolean {
    return isDefinedList<SubstancePolymerMonomerSetComponent>(this.monomerSet) && this.monomerSet.some((item: SubstancePolymerMonomerSetComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `monomerSet` property
   */
  private initMonomerSet(): void {
    if(!this.hasMonomerSet()) {
      this.monomerSet = [] as SubstancePolymerMonomerSetComponent[];
    }
  }

  /**
   * @returns the `repeat` property value as a SubstancePolymerRepeatComponent array
   */
  public getRepeat(): SubstancePolymerRepeatComponent[] {
    return this.repeat ?? ([] as SubstancePolymerRepeatComponent[]);
  }

  /**
   * Assigns the provided SubstancePolymerRepeatComponent array value to the `repeat` property.
   *
   * @param value - the `repeat` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRepeat(value: SubstancePolymerRepeatComponent[] | undefined): this {
    if (isDefinedList<SubstancePolymerRepeatComponent>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat; Provided value array has an element that is not an instance of SubstancePolymerRepeatComponent.`;
      assertFhirTypeList<SubstancePolymerRepeatComponent>(value, SubstancePolymerRepeatComponent, optErrMsg);
      this.repeat = value;
    } else {
      this.repeat = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstancePolymerRepeatComponent value to the `repeat` array property.
   *
   * @param value - the `repeat` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRepeat(value: SubstancePolymerRepeatComponent | undefined): this {
    if (isDefined<SubstancePolymerRepeatComponent>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat; Provided element is not an instance of SubstancePolymerRepeatComponent.`;
      assertFhirType<SubstancePolymerRepeatComponent>(value, SubstancePolymerRepeatComponent, optErrMsg);
      this.initRepeat();
      this.repeat?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `repeat` property exists and has a value; `false` otherwise
   */
  public hasRepeat(): boolean {
    return isDefinedList<SubstancePolymerRepeatComponent>(this.repeat) && this.repeat.some((item: SubstancePolymerRepeatComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `repeat` property
   */
  private initRepeat(): void {
    if(!this.hasRepeat()) {
      this.repeat = [] as SubstancePolymerRepeatComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstancePolymer';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.class_,
      this.geometry,
      this.copolymerConnectivity,
      this.modification,
      this.monomerSet,
      this.repeat,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstancePolymer {
    const dest = new SubstancePolymer();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstancePolymer): void {
    super.copyValues(dest);
    dest.class_ = this.class_?.copy();
    dest.geometry = this.geometry?.copy();
    const copolymerConnectivityList = copyListValues<CodeableConcept>(this.copolymerConnectivity);
    dest.copolymerConnectivity = copolymerConnectivityList.length === 0 ? undefined : copolymerConnectivityList;
    const modificationList = copyListValues<StringType>(this.modification);
    dest.modification = modificationList.length === 0 ? undefined : modificationList;
    const monomerSetList = copyListValues<SubstancePolymerMonomerSetComponent>(this.monomerSet);
    dest.monomerSet = monomerSetList.length === 0 ? undefined : monomerSetList;
    const repeatList = copyListValues<SubstancePolymerRepeatComponent>(this.repeat);
    dest.repeat = repeatList.length === 0 ? undefined : repeatList;
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

    if (this.hasClass()) {
      setFhirComplexJson(this.getClass(), 'class', jsonObj);
    }

    if (this.hasGeometry()) {
      setFhirComplexJson(this.getGeometry(), 'geometry', jsonObj);
    }

    if (this.hasCopolymerConnectivity()) {
      setFhirComplexListJson(this.getCopolymerConnectivity(), 'copolymerConnectivity', jsonObj);
    }

    if (this.hasModification()) {
      setFhirPrimitiveListJson(this.getModificationElement(), 'modification', jsonObj);
    }

    if (this.hasMonomerSet()) {
      setFhirBackboneElementListJson(this.getMonomerSet(), 'monomerSet', jsonObj);
    }

    if (this.hasRepeat()) {
      setFhirBackboneElementListJson(this.getRepeat(), 'repeat', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * SubstancePolymerMonomerSetComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Todo
 * - **Definition:** Todo.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstancePolymer](http://hl7.org/fhir/StructureDefinition/SubstancePolymer)
 */
export class SubstancePolymerMonomerSetComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstancePolymerMonomerSetComponent` JSON to instantiate the SubstancePolymerMonomerSetComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstancePolymerMonomerSetComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstancePolymerMonomerSetComponent
   * @returns SubstancePolymerMonomerSetComponent data model or undefined for `SubstancePolymerMonomerSetComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstancePolymerMonomerSetComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstancePolymerMonomerSetComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstancePolymerMonomerSetComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'ratioType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRatioType(datatype);
    }

    fieldName = 'startingMaterial';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstancePolymerMonomerSetStartingMaterialComponent | undefined = SubstancePolymerMonomerSetStartingMaterialComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStartingMaterial(component);
        }
      });
    }

    return instance;
  }

  /**
   * SubstancePolymer.monomerSet.ratioType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private ratioType?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.monomerSet.startingMaterial Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private startingMaterial?: SubstancePolymerMonomerSetStartingMaterialComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `ratioType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRatioType(): CodeableConcept {
    return this.ratioType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided RatioType object value to the `ratioType` property.
   *
   * @param value - the `ratioType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRatioType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.monomerSet.ratioType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.ratioType = value;
    } else {
      this.ratioType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ratioType` property exists and has a value; `false` otherwise
   */
  public hasRatioType(): boolean {
    return isDefined<CodeableConcept>(this.ratioType) && !this.ratioType.isEmpty();
  }

  /**
   * @returns the `startingMaterial` property value as a SubstancePolymerMonomerSetStartingMaterialComponent array
   */
  public getStartingMaterial(): SubstancePolymerMonomerSetStartingMaterialComponent[] {
    return this.startingMaterial ?? ([] as SubstancePolymerMonomerSetStartingMaterialComponent[]);
  }

  /**
   * Assigns the provided SubstancePolymerMonomerSetStartingMaterialComponent array value to the `startingMaterial` property.
   *
   * @param value - the `startingMaterial` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStartingMaterial(value: SubstancePolymerMonomerSetStartingMaterialComponent[] | undefined): this {
    if (isDefinedList<SubstancePolymerMonomerSetStartingMaterialComponent>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.monomerSet.startingMaterial; Provided value array has an element that is not an instance of SubstancePolymerMonomerSetStartingMaterialComponent.`;
      assertFhirTypeList<SubstancePolymerMonomerSetStartingMaterialComponent>(value, SubstancePolymerMonomerSetStartingMaterialComponent, optErrMsg);
      this.startingMaterial = value;
    } else {
      this.startingMaterial = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstancePolymerMonomerSetStartingMaterialComponent value to the `startingMaterial` array property.
   *
   * @param value - the `startingMaterial` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStartingMaterial(value: SubstancePolymerMonomerSetStartingMaterialComponent | undefined): this {
    if (isDefined<SubstancePolymerMonomerSetStartingMaterialComponent>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.monomerSet.startingMaterial; Provided element is not an instance of SubstancePolymerMonomerSetStartingMaterialComponent.`;
      assertFhirType<SubstancePolymerMonomerSetStartingMaterialComponent>(value, SubstancePolymerMonomerSetStartingMaterialComponent, optErrMsg);
      this.initStartingMaterial();
      this.startingMaterial?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `startingMaterial` property exists and has a value; `false` otherwise
   */
  public hasStartingMaterial(): boolean {
    return isDefinedList<SubstancePolymerMonomerSetStartingMaterialComponent>(this.startingMaterial) && this.startingMaterial.some((item: SubstancePolymerMonomerSetStartingMaterialComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `startingMaterial` property
   */
  private initStartingMaterial(): void {
    if(!this.hasStartingMaterial()) {
      this.startingMaterial = [] as SubstancePolymerMonomerSetStartingMaterialComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstancePolymer.monomerSet';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.ratioType,
      this.startingMaterial,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstancePolymerMonomerSetComponent {
    const dest = new SubstancePolymerMonomerSetComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstancePolymerMonomerSetComponent): void {
    super.copyValues(dest);
    dest.ratioType = this.ratioType?.copy();
    const startingMaterialList = copyListValues<SubstancePolymerMonomerSetStartingMaterialComponent>(this.startingMaterial);
    dest.startingMaterial = startingMaterialList.length === 0 ? undefined : startingMaterialList;
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

    if (this.hasRatioType()) {
      setFhirComplexJson(this.getRatioType(), 'ratioType', jsonObj);
    }

    if (this.hasStartingMaterial()) {
      setFhirBackboneElementListJson(this.getStartingMaterial(), 'startingMaterial', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstancePolymerMonomerSetStartingMaterialComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Todo
 * - **Definition:** Todo.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstancePolymer](http://hl7.org/fhir/StructureDefinition/SubstancePolymer)
 */
export class SubstancePolymerMonomerSetStartingMaterialComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstancePolymerMonomerSetStartingMaterialComponent` JSON to instantiate the SubstancePolymerMonomerSetStartingMaterialComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstancePolymerMonomerSetStartingMaterialComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstancePolymerMonomerSetStartingMaterialComponent
   * @returns SubstancePolymerMonomerSetStartingMaterialComponent data model or undefined for `SubstancePolymerMonomerSetStartingMaterialComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstancePolymerMonomerSetStartingMaterialComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstancePolymerMonomerSetStartingMaterialComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstancePolymerMonomerSetStartingMaterialComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

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

    fieldName = 'isDefining';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setIsDefiningElement(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: SubstanceAmount | undefined = SubstanceAmount.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmount(datatype);
    }

    return instance;
  }

  /**
   * SubstancePolymer.monomerSet.startingMaterial.material Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private material?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.monomerSet.startingMaterial.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.monomerSet.startingMaterial.isDefining Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private isDefining?: BooleanType | undefined;

  /**
   * SubstancePolymer.monomerSet.startingMaterial.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `SubstanceAmount`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount?: SubstanceAmount | undefined;

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
      const optErrMsg = `Invalid SubstancePolymer.monomerSet.startingMaterial.material; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstancePolymer.monomerSet.startingMaterial.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `isDefining` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getIsDefiningElement(): BooleanType {
    return this.isDefining ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `isDefining` property.
   *
   * @param element - the `isDefining` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsDefiningElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid SubstancePolymer.monomerSet.startingMaterial.isDefining; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.isDefining = element;
    } else {
      this.isDefining = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isDefining` property exists and has a value; `false` otherwise
   */
  public hasIsDefiningElement(): boolean {
    return isDefined<BooleanType>(this.isDefining) && !this.isDefining.isEmpty();
  }

  /**
   * @returns the `isDefining` property value as a fhirBoolean if defined; else undefined
   */
  public getIsDefining(): fhirBoolean | undefined {
    return this.isDefining?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `isDefining` property.
   *
   * @param value - the `isDefining` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsDefining(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.monomerSet.startingMaterial.isDefining (${String(value)})`;
      this.isDefining = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.isDefining = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isDefining` property exists and has a value; `false` otherwise
   */
  public hasIsDefining(): boolean {
    return this.hasIsDefiningElement();
  }

  /**
   * @returns the `amount` property value as a SubstanceAmount object if defined; else an empty SubstanceAmount object
   */
  public getAmount(): SubstanceAmount {
    return this.amount ?? new SubstanceAmount();
  }

  /**
   * Assigns the provided Amount object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: SubstanceAmount | undefined): this {
    if (isDefined<SubstanceAmount>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.monomerSet.startingMaterial.amount; Provided element is not an instance of SubstanceAmount.`;
      assertFhirType<SubstanceAmount>(value, SubstanceAmount, optErrMsg);
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<SubstanceAmount>(this.amount) && !this.amount.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstancePolymer.monomerSet.startingMaterial';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.material,
      this.type_,
      this.isDefining,
      this.amount,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstancePolymerMonomerSetStartingMaterialComponent {
    const dest = new SubstancePolymerMonomerSetStartingMaterialComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstancePolymerMonomerSetStartingMaterialComponent): void {
    super.copyValues(dest);
    dest.material = this.material?.copy();
    dest.type_ = this.type_?.copy();
    dest.isDefining = this.isDefining?.copy();
    dest.amount = this.amount?.copy();
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

    if (this.hasIsDefiningElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getIsDefiningElement(), 'isDefining', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstancePolymerRepeatComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Todo
 * - **Definition:** Todo.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstancePolymer](http://hl7.org/fhir/StructureDefinition/SubstancePolymer)
 */
export class SubstancePolymerRepeatComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstancePolymerRepeatComponent` JSON to instantiate the SubstancePolymerRepeatComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstancePolymerRepeatComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstancePolymerRepeatComponent
   * @returns SubstancePolymerRepeatComponent data model or undefined for `SubstancePolymerRepeatComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstancePolymerRepeatComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstancePolymerRepeatComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstancePolymerRepeatComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'numberOfUnits';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setNumberOfUnitsElement(datatype);
    }

    fieldName = 'averageMolecularFormula';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setAverageMolecularFormulaElement(datatype);
    }

    fieldName = 'repeatUnitAmountType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRepeatUnitAmountType(datatype);
    }

    fieldName = 'repeatUnit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstancePolymerRepeatRepeatUnitComponent | undefined = SubstancePolymerRepeatRepeatUnitComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRepeatUnit(component);
        }
      });
    }

    return instance;
  }

  /**
   * SubstancePolymer.repeat.numberOfUnits Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private numberOfUnits?: IntegerType | undefined;

  /**
   * SubstancePolymer.repeat.averageMolecularFormula Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private averageMolecularFormula?: StringType | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnitAmountType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private repeatUnitAmountType?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private repeatUnit?: SubstancePolymerRepeatRepeatUnitComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `numberOfUnits` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getNumberOfUnitsElement(): IntegerType {
    return this.numberOfUnits ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `numberOfUnits` property.
   *
   * @param element - the `numberOfUnits` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfUnitsElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.numberOfUnits; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.numberOfUnits = element;
    } else {
      this.numberOfUnits = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfUnits` property exists and has a value; `false` otherwise
   */
  public hasNumberOfUnitsElement(): boolean {
    return isDefined<IntegerType>(this.numberOfUnits) && !this.numberOfUnits.isEmpty();
  }

  /**
   * @returns the `numberOfUnits` property value as a fhirInteger if defined; else undefined
   */
  public getNumberOfUnits(): fhirInteger | undefined {
    return this.numberOfUnits?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `numberOfUnits` property.
   *
   * @param value - the `numberOfUnits` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfUnits(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.numberOfUnits (${String(value)})`;
      this.numberOfUnits = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.numberOfUnits = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfUnits` property exists and has a value; `false` otherwise
   */
  public hasNumberOfUnits(): boolean {
    return this.hasNumberOfUnitsElement();
  }

  /**
   * @returns the `averageMolecularFormula` property value as a StringType object if defined; else an empty StringType object
   */
  public getAverageMolecularFormulaElement(): StringType {
    return this.averageMolecularFormula ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `averageMolecularFormula` property.
   *
   * @param element - the `averageMolecularFormula` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAverageMolecularFormulaElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.averageMolecularFormula; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.averageMolecularFormula = element;
    } else {
      this.averageMolecularFormula = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `averageMolecularFormula` property exists and has a value; `false` otherwise
   */
  public hasAverageMolecularFormulaElement(): boolean {
    return isDefined<StringType>(this.averageMolecularFormula) && !this.averageMolecularFormula.isEmpty();
  }

  /**
   * @returns the `averageMolecularFormula` property value as a fhirString if defined; else undefined
   */
  public getAverageMolecularFormula(): fhirString | undefined {
    return this.averageMolecularFormula?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `averageMolecularFormula` property.
   *
   * @param value - the `averageMolecularFormula` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAverageMolecularFormula(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.averageMolecularFormula (${String(value)})`;
      this.averageMolecularFormula = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.averageMolecularFormula = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `averageMolecularFormula` property exists and has a value; `false` otherwise
   */
  public hasAverageMolecularFormula(): boolean {
    return this.hasAverageMolecularFormulaElement();
  }

  /**
   * @returns the `repeatUnitAmountType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRepeatUnitAmountType(): CodeableConcept {
    return this.repeatUnitAmountType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided RepeatUnitAmountType object value to the `repeatUnitAmountType` property.
   *
   * @param value - the `repeatUnitAmountType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRepeatUnitAmountType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnitAmountType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.repeatUnitAmountType = value;
    } else {
      this.repeatUnitAmountType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `repeatUnitAmountType` property exists and has a value; `false` otherwise
   */
  public hasRepeatUnitAmountType(): boolean {
    return isDefined<CodeableConcept>(this.repeatUnitAmountType) && !this.repeatUnitAmountType.isEmpty();
  }

  /**
   * @returns the `repeatUnit` property value as a SubstancePolymerRepeatRepeatUnitComponent array
   */
  public getRepeatUnit(): SubstancePolymerRepeatRepeatUnitComponent[] {
    return this.repeatUnit ?? ([] as SubstancePolymerRepeatRepeatUnitComponent[]);
  }

  /**
   * Assigns the provided SubstancePolymerRepeatRepeatUnitComponent array value to the `repeatUnit` property.
   *
   * @param value - the `repeatUnit` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRepeatUnit(value: SubstancePolymerRepeatRepeatUnitComponent[] | undefined): this {
    if (isDefinedList<SubstancePolymerRepeatRepeatUnitComponent>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit; Provided value array has an element that is not an instance of SubstancePolymerRepeatRepeatUnitComponent.`;
      assertFhirTypeList<SubstancePolymerRepeatRepeatUnitComponent>(value, SubstancePolymerRepeatRepeatUnitComponent, optErrMsg);
      this.repeatUnit = value;
    } else {
      this.repeatUnit = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstancePolymerRepeatRepeatUnitComponent value to the `repeatUnit` array property.
   *
   * @param value - the `repeatUnit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRepeatUnit(value: SubstancePolymerRepeatRepeatUnitComponent | undefined): this {
    if (isDefined<SubstancePolymerRepeatRepeatUnitComponent>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit; Provided element is not an instance of SubstancePolymerRepeatRepeatUnitComponent.`;
      assertFhirType<SubstancePolymerRepeatRepeatUnitComponent>(value, SubstancePolymerRepeatRepeatUnitComponent, optErrMsg);
      this.initRepeatUnit();
      this.repeatUnit?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `repeatUnit` property exists and has a value; `false` otherwise
   */
  public hasRepeatUnit(): boolean {
    return isDefinedList<SubstancePolymerRepeatRepeatUnitComponent>(this.repeatUnit) && this.repeatUnit.some((item: SubstancePolymerRepeatRepeatUnitComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `repeatUnit` property
   */
  private initRepeatUnit(): void {
    if(!this.hasRepeatUnit()) {
      this.repeatUnit = [] as SubstancePolymerRepeatRepeatUnitComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstancePolymer.repeat';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.numberOfUnits,
      this.averageMolecularFormula,
      this.repeatUnitAmountType,
      this.repeatUnit,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstancePolymerRepeatComponent {
    const dest = new SubstancePolymerRepeatComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstancePolymerRepeatComponent): void {
    super.copyValues(dest);
    dest.numberOfUnits = this.numberOfUnits?.copy();
    dest.averageMolecularFormula = this.averageMolecularFormula?.copy();
    dest.repeatUnitAmountType = this.repeatUnitAmountType?.copy();
    const repeatUnitList = copyListValues<SubstancePolymerRepeatRepeatUnitComponent>(this.repeatUnit);
    dest.repeatUnit = repeatUnitList.length === 0 ? undefined : repeatUnitList;
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

    if (this.hasNumberOfUnitsElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getNumberOfUnitsElement(), 'numberOfUnits', jsonObj);
    }

    if (this.hasAverageMolecularFormulaElement()) {
      setFhirPrimitiveJson<fhirString>(this.getAverageMolecularFormulaElement(), 'averageMolecularFormula', jsonObj);
    }

    if (this.hasRepeatUnitAmountType()) {
      setFhirComplexJson(this.getRepeatUnitAmountType(), 'repeatUnitAmountType', jsonObj);
    }

    if (this.hasRepeatUnit()) {
      setFhirBackboneElementListJson(this.getRepeatUnit(), 'repeatUnit', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstancePolymerRepeatRepeatUnitComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Todo
 * - **Definition:** Todo.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstancePolymer](http://hl7.org/fhir/StructureDefinition/SubstancePolymer)
 */
export class SubstancePolymerRepeatRepeatUnitComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstancePolymerRepeatRepeatUnitComponent` JSON to instantiate the SubstancePolymerRepeatRepeatUnitComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstancePolymerRepeatRepeatUnitComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstancePolymerRepeatRepeatUnitComponent
   * @returns SubstancePolymerRepeatRepeatUnitComponent data model or undefined for `SubstancePolymerRepeatRepeatUnitComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstancePolymerRepeatRepeatUnitComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstancePolymerRepeatRepeatUnitComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstancePolymerRepeatRepeatUnitComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'orientationOfPolymerisation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrientationOfPolymerisation(datatype);
    }

    fieldName = 'repeatUnit';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setRepeatUnitElement(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: SubstanceAmount | undefined = SubstanceAmount.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmount(datatype);
    }

    fieldName = 'degreeOfPolymerisation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent | undefined = SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDegreeOfPolymerisation(component);
        }
      });
    }

    fieldName = 'structuralRepresentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent | undefined = SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStructuralRepresentation(component);
        }
      });
    }

    return instance;
  }

  /**
   * SubstancePolymer.repeat.repeatUnit.orientationOfPolymerisation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private orientationOfPolymerisation?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.repeatUnit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private repeatUnit?: StringType | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `SubstanceAmount`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount?: SubstanceAmount | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private degreeOfPolymerisation?: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent[] | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.structuralRepresentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private structuralRepresentation?: SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `orientationOfPolymerisation` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOrientationOfPolymerisation(): CodeableConcept {
    return this.orientationOfPolymerisation ?? new CodeableConcept();
  }

  /**
   * Assigns the provided OrientationOfPolymerisation object value to the `orientationOfPolymerisation` property.
   *
   * @param value - the `orientationOfPolymerisation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOrientationOfPolymerisation(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.orientationOfPolymerisation; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.orientationOfPolymerisation = value;
    } else {
      this.orientationOfPolymerisation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `orientationOfPolymerisation` property exists and has a value; `false` otherwise
   */
  public hasOrientationOfPolymerisation(): boolean {
    return isDefined<CodeableConcept>(this.orientationOfPolymerisation) && !this.orientationOfPolymerisation.isEmpty();
  }

  /**
   * @returns the `repeatUnit` property value as a StringType object if defined; else an empty StringType object
   */
  public getRepeatUnitElement(): StringType {
    return this.repeatUnit ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `repeatUnit` property.
   *
   * @param element - the `repeatUnit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRepeatUnitElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.repeatUnit; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.repeatUnit = element;
    } else {
      this.repeatUnit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `repeatUnit` property exists and has a value; `false` otherwise
   */
  public hasRepeatUnitElement(): boolean {
    return isDefined<StringType>(this.repeatUnit) && !this.repeatUnit.isEmpty();
  }

  /**
   * @returns the `repeatUnit` property value as a fhirString if defined; else undefined
   */
  public getRepeatUnit(): fhirString | undefined {
    return this.repeatUnit?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `repeatUnit` property.
   *
   * @param value - the `repeatUnit` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRepeatUnit(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.repeatUnit (${String(value)})`;
      this.repeatUnit = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.repeatUnit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `repeatUnit` property exists and has a value; `false` otherwise
   */
  public hasRepeatUnit(): boolean {
    return this.hasRepeatUnitElement();
  }

  /**
   * @returns the `amount` property value as a SubstanceAmount object if defined; else an empty SubstanceAmount object
   */
  public getAmount(): SubstanceAmount {
    return this.amount ?? new SubstanceAmount();
  }

  /**
   * Assigns the provided Amount object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: SubstanceAmount | undefined): this {
    if (isDefined<SubstanceAmount>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.amount; Provided element is not an instance of SubstanceAmount.`;
      assertFhirType<SubstanceAmount>(value, SubstanceAmount, optErrMsg);
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<SubstanceAmount>(this.amount) && !this.amount.isEmpty();
  }

  /**
   * @returns the `degreeOfPolymerisation` property value as a SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent array
   */
  public getDegreeOfPolymerisation(): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent[] {
    return this.degreeOfPolymerisation ?? ([] as SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent[]);
  }

  /**
   * Assigns the provided SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent array value to the `degreeOfPolymerisation` property.
   *
   * @param value - the `degreeOfPolymerisation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDegreeOfPolymerisation(value: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent[] | undefined): this {
    if (isDefinedList<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation; Provided value array has an element that is not an instance of SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent.`;
      assertFhirTypeList<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent>(value, SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent, optErrMsg);
      this.degreeOfPolymerisation = value;
    } else {
      this.degreeOfPolymerisation = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent value to the `degreeOfPolymerisation` array property.
   *
   * @param value - the `degreeOfPolymerisation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDegreeOfPolymerisation(value: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent | undefined): this {
    if (isDefined<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation; Provided element is not an instance of SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent.`;
      assertFhirType<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent>(value, SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent, optErrMsg);
      this.initDegreeOfPolymerisation();
      this.degreeOfPolymerisation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `degreeOfPolymerisation` property exists and has a value; `false` otherwise
   */
  public hasDegreeOfPolymerisation(): boolean {
    return isDefinedList<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent>(this.degreeOfPolymerisation) && this.degreeOfPolymerisation.some((item: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `degreeOfPolymerisation` property
   */
  private initDegreeOfPolymerisation(): void {
    if(!this.hasDegreeOfPolymerisation()) {
      this.degreeOfPolymerisation = [] as SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent[];
    }
  }

  /**
   * @returns the `structuralRepresentation` property value as a SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent array
   */
  public getStructuralRepresentation(): SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent[] {
    return this.structuralRepresentation ?? ([] as SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent[]);
  }

  /**
   * Assigns the provided SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent array value to the `structuralRepresentation` property.
   *
   * @param value - the `structuralRepresentation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStructuralRepresentation(value: SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent[] | undefined): this {
    if (isDefinedList<SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.structuralRepresentation; Provided value array has an element that is not an instance of SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent.`;
      assertFhirTypeList<SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent>(value, SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent, optErrMsg);
      this.structuralRepresentation = value;
    } else {
      this.structuralRepresentation = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent value to the `structuralRepresentation` array property.
   *
   * @param value - the `structuralRepresentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStructuralRepresentation(value: SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent | undefined): this {
    if (isDefined<SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.structuralRepresentation; Provided element is not an instance of SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent.`;
      assertFhirType<SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent>(value, SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent, optErrMsg);
      this.initStructuralRepresentation();
      this.structuralRepresentation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `structuralRepresentation` property exists and has a value; `false` otherwise
   */
  public hasStructuralRepresentation(): boolean {
    return isDefinedList<SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent>(this.structuralRepresentation) && this.structuralRepresentation.some((item: SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `structuralRepresentation` property
   */
  private initStructuralRepresentation(): void {
    if(!this.hasStructuralRepresentation()) {
      this.structuralRepresentation = [] as SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstancePolymer.repeat.repeatUnit';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.orientationOfPolymerisation,
      this.repeatUnit,
      this.amount,
      this.degreeOfPolymerisation,
      this.structuralRepresentation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstancePolymerRepeatRepeatUnitComponent {
    const dest = new SubstancePolymerRepeatRepeatUnitComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstancePolymerRepeatRepeatUnitComponent): void {
    super.copyValues(dest);
    dest.orientationOfPolymerisation = this.orientationOfPolymerisation?.copy();
    dest.repeatUnit = this.repeatUnit?.copy();
    dest.amount = this.amount?.copy();
    const degreeOfPolymerisationList = copyListValues<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent>(this.degreeOfPolymerisation);
    dest.degreeOfPolymerisation = degreeOfPolymerisationList.length === 0 ? undefined : degreeOfPolymerisationList;
    const structuralRepresentationList = copyListValues<SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent>(this.structuralRepresentation);
    dest.structuralRepresentation = structuralRepresentationList.length === 0 ? undefined : structuralRepresentationList;
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

    if (this.hasOrientationOfPolymerisation()) {
      setFhirComplexJson(this.getOrientationOfPolymerisation(), 'orientationOfPolymerisation', jsonObj);
    }

    if (this.hasRepeatUnitElement()) {
      setFhirPrimitiveJson<fhirString>(this.getRepeatUnitElement(), 'repeatUnit', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    if (this.hasDegreeOfPolymerisation()) {
      setFhirBackboneElementListJson(this.getDegreeOfPolymerisation(), 'degreeOfPolymerisation', jsonObj);
    }

    if (this.hasStructuralRepresentation()) {
      setFhirBackboneElementListJson(this.getStructuralRepresentation(), 'structuralRepresentation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Todo
 * - **Definition:** Todo.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstancePolymer](http://hl7.org/fhir/StructureDefinition/SubstancePolymer)
 */
export class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent` JSON to instantiate the SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent
   * @returns SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent data model or undefined for `SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'degree';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDegree(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: SubstanceAmount | undefined = SubstanceAmount.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmount(datatype);
    }

    return instance;
  }

  /**
   * SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.degree Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private degree?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `SubstanceAmount`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount?: SubstanceAmount | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `degree` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDegree(): CodeableConcept {
    return this.degree ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Degree object value to the `degree` property.
   *
   * @param value - the `degree` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDegree(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.degree; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.degree = value;
    } else {
      this.degree = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `degree` property exists and has a value; `false` otherwise
   */
  public hasDegree(): boolean {
    return isDefined<CodeableConcept>(this.degree) && !this.degree.isEmpty();
  }

  /**
   * @returns the `amount` property value as a SubstanceAmount object if defined; else an empty SubstanceAmount object
   */
  public getAmount(): SubstanceAmount {
    return this.amount ?? new SubstanceAmount();
  }

  /**
   * Assigns the provided Amount object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: SubstanceAmount | undefined): this {
    if (isDefined<SubstanceAmount>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.amount; Provided element is not an instance of SubstanceAmount.`;
      assertFhirType<SubstanceAmount>(value, SubstanceAmount, optErrMsg);
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<SubstanceAmount>(this.amount) && !this.amount.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.degree,
      this.amount,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent {
    const dest = new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent): void {
    super.copyValues(dest);
    dest.degree = this.degree?.copy();
    dest.amount = this.amount?.copy();
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

    if (this.hasDegree()) {
      setFhirComplexJson(this.getDegree(), 'degree', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Todo
 * - **Definition:** Todo.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstancePolymer](http://hl7.org/fhir/StructureDefinition/SubstancePolymer)
 */
export class SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent` JSON to instantiate the SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent
   * @returns SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent data model or undefined for `SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'representation';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setRepresentationElement(datatype);
    }

    fieldName = 'attachment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Attachment | undefined = Attachment.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAttachment(datatype);
    }

    return instance;
  }

  /**
   * SubstancePolymer.repeat.repeatUnit.structuralRepresentation.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.structuralRepresentation.representation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private representation?: StringType | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.structuralRepresentation.attachment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private attachment?: Attachment | undefined;

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
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.structuralRepresentation.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `representation` property value as a StringType object if defined; else an empty StringType object
   */
  public getRepresentationElement(): StringType {
    return this.representation ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `representation` property.
   *
   * @param element - the `representation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRepresentationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.structuralRepresentation.representation; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.representation = element;
    } else {
      this.representation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `representation` property exists and has a value; `false` otherwise
   */
  public hasRepresentationElement(): boolean {
    return isDefined<StringType>(this.representation) && !this.representation.isEmpty();
  }

  /**
   * @returns the `representation` property value as a fhirString if defined; else undefined
   */
  public getRepresentation(): fhirString | undefined {
    return this.representation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `representation` property.
   *
   * @param value - the `representation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRepresentation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.structuralRepresentation.representation (${String(value)})`;
      this.representation = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.representation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `representation` property exists and has a value; `false` otherwise
   */
  public hasRepresentation(): boolean {
    return this.hasRepresentationElement();
  }

  /**
   * @returns the `attachment` property value as a Attachment object if defined; else an empty Attachment object
   */
  public getAttachment(): Attachment {
    return this.attachment ?? new Attachment();
  }

  /**
   * Assigns the provided Attachment object value to the `attachment` property.
   *
   * @param value - the `attachment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAttachment(value: Attachment | undefined): this {
    if (isDefined<Attachment>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.structuralRepresentation.attachment; Provided element is not an instance of Attachment.`;
      assertFhirType<Attachment>(value, Attachment, optErrMsg);
      this.attachment = value;
    } else {
      this.attachment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `attachment` property exists and has a value; `false` otherwise
   */
  public hasAttachment(): boolean {
    return isDefined<Attachment>(this.attachment) && !this.attachment.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstancePolymer.repeat.repeatUnit.structuralRepresentation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.representation,
      this.attachment,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent {
    const dest = new SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.representation = this.representation?.copy();
    dest.attachment = this.attachment?.copy();
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

    if (this.hasRepresentationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getRepresentationElement(), 'representation', jsonObj);
    }

    if (this.hasAttachment()) {
      setFhirComplexJson(this.getAttachment(), 'attachment', jsonObj);
    }

    return jsonObj;
  }
}
