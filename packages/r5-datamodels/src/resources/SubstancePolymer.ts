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
 * StructureDefinition.description: Properties of a substance specific to it being a polymer.
 * StructureDefinition.fhirVersion: 5.0.0
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
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { Attachment, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Quantity } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * SubstancePolymer Class
 *
 * @remarks
 * Properties of a substance specific to it being a polymer.
 *
 * **FHIR Specification**
 * - **Short:** Properties of a substance specific to it being a polymer
 * - **Definition:** Properties of a substance specific to it being a polymer.
 * - **FHIR Version:** 5.0.0
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
    

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCopolymerConnectivity(datatype);
          }
        });
      }
    }

    fieldName = 'modification';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setModificationElement(datatype);
    }

    fieldName = 'monomerSet';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: SubstancePolymerMonomerSetComponent | undefined = SubstancePolymerMonomerSetComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addMonomerSet(component);
          }
        });
      }
    }

    fieldName = 'repeat';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: SubstancePolymerRepeatComponent | undefined = SubstancePolymerRepeatComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addRepeat(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * SubstancePolymer.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A business idenfier for this polymer, but typically this is handled by a SubstanceDefinition identifier
   * - **Definition:** A business idenfier for this polymer, but typically this is handled by a SubstanceDefinition identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * SubstancePolymer.class Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Overall type of the polymer
   * - **Definition:** Overall type of the polymer.
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
   * - **Short:** Polymer geometry, e.g. linear, branched, cross-linked, network or dendritic
   * - **Definition:** Polymer geometry, e.g. linear, branched, cross-linked, network or dendritic.
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
   * - **Short:** Descrtibes the copolymer sequence type (polymer connectivity)
   * - **Definition:** Descrtibes the copolymer sequence type (polymer connectivity).
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
   * - **Short:** Todo - this is intended to connect to a repeating full modification structure, also used by Protein and Nucleic Acid . String is just a placeholder
   * - **Definition:** Todo - this is intended to connect to a repeating full modification structure, also used by Protein and Nucleic Acid . String is just a placeholder.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private modification?: StringType | undefined;

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
   * - **Short:** Specifies and quantifies the repeated units and their configuration
   * - **Definition:** Specifies and quantifies the repeated units and their configuration.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private repeat?: SubstancePolymerRepeatComponent[] | undefined;

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
      const optErrMsg = `Invalid SubstancePolymer.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `modification` property value as a StringType object if defined; else an empty StringType object
   */
  public getModificationElement(): StringType {
    return this.modification ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `modification` property.
   *
   * @param element - the `modification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setModificationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstancePolymer.modification; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.modification = element;
    } else {
      this.modification = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `modification` property exists and has a value; `false` otherwise
   */
  public hasModificationElement(): boolean {
    return isDefined<StringType>(this.modification) && !this.modification.isEmpty();
  }

  /**
   * @returns the `modification` property value as a fhirString if defined; else undefined
   */
  public getModification(): fhirString | undefined {
    return this.modification?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `modification` property.
   *
   * @param value - the `modification` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setModification(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.modification (${String(value)})`;
      this.modification = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.modification = undefined;
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
      this.identifier,
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
    dest.identifier = this.identifier?.copy();
    dest.class_ = this.class_?.copy();
    dest.geometry = this.geometry?.copy();
    const copolymerConnectivityList = copyListValues<CodeableConcept>(this.copolymerConnectivity);
    dest.copolymerConnectivity = copolymerConnectivityList.length === 0 ? undefined : copolymerConnectivityList;
    dest.modification = this.modification?.copy();
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

    if (this.hasIdentifier()) {
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasClass()) {
      setFhirComplexJson(this.getClass(), 'class', jsonObj);
    }

    if (this.hasGeometry()) {
      setFhirComplexJson(this.getGeometry(), 'geometry', jsonObj);
    }

    if (this.hasCopolymerConnectivity()) {
      setFhirComplexListJson(this.getCopolymerConnectivity(), 'copolymerConnectivity', jsonObj);
    }

    if (this.hasModificationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getModificationElement(), 'modification', jsonObj);
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: SubstancePolymerMonomerSetStartingMaterialComponent | undefined = SubstancePolymerMonomerSetStartingMaterialComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addStartingMaterial(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * SubstancePolymer.monomerSet.ratioType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Captures the type of ratio to the entire polymer, e.g. Monomer/Polymer ratio, SRU/Polymer Ratio
   * - **Definition:** Captures the type of ratio to the entire polymer, e.g. Monomer/Polymer ratio, SRU/Polymer Ratio.
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
   * - **Short:** The starting materials - monomer(s) used in the synthesis of the polymer
   * - **Definition:** The starting materials - monomer(s) used in the synthesis of the polymer.
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
 * - **Short:** The starting materials - monomer(s) used in the synthesis of the polymer
 * - **Definition:** The starting materials - monomer(s) used in the synthesis of the polymer.
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
    

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCategory(datatype);
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
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmount(datatype);
    }

    return instance;
  }

  /**
   * SubstancePolymer.monomerSet.startingMaterial.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of substance for this starting material
   * - **Definition:** The type of substance for this starting material.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.monomerSet.startingMaterial.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Substance high level category, e.g. chemical substance
   * - **Definition:** Substance high level category, e.g. chemical substance.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.monomerSet.startingMaterial.isDefining Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used to specify whether the attribute described is a defining element for the unique identification of the polymer
   * - **Definition:** Used to specify whether the attribute described is a defining element for the unique identification of the polymer.
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
   * - **Short:** A percentage
   * - **Definition:** A percentage.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount?: Quantity | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Code object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.monomerSet.startingMaterial.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
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
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Category object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.monomerSet.startingMaterial.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefined<CodeableConcept>(this.category) && !this.category.isEmpty();
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
   * @returns the `amount` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getAmount(): Quantity {
    return this.amount ?? new Quantity();
  }

  /**
   * Assigns the provided Amount object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.monomerSet.startingMaterial.amount; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
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
    return isDefined<Quantity>(this.amount) && !this.amount.isEmpty();
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
      this.code,
      this.category,
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
    dest.code = this.code?.copy();
    dest.category = this.category?.copy();
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

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
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
 * - **Short:** Specifies and quantifies the repeated units and their configuration
 * - **Definition:** Specifies and quantifies the repeated units and their configuration.
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
    

    fieldName = 'averageMolecularFormula';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: SubstancePolymerRepeatRepeatUnitComponent | undefined = SubstancePolymerRepeatRepeatUnitComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addRepeatUnit(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * SubstancePolymer.repeat.averageMolecularFormula Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A representation of an (average) molecular formula from a polymer
   * - **Definition:** A representation of an (average) molecular formula from a polymer.
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
   * - **Short:** How the quantitative amount of Structural Repeat Units is captured (e.g. Exact, Numeric, Average)
   * - **Definition:** How the quantitative amount of Structural Repeat Units is captured (e.g. Exact, Numeric, Average).
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
   * - **Short:** An SRU - Structural Repeat Unit
   * - **Definition:** An SRU - Structural Repeat Unit.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private repeatUnit?: SubstancePolymerRepeatRepeatUnitComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
 * - **Short:** An SRU - Structural Repeat Unit
 * - **Definition:** An SRU - Structural Repeat Unit.
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
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'unit';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setUnitElement(datatype);
    }

    fieldName = 'orientation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrientation(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setAmountElement(datatype);
    }

    fieldName = 'degreeOfPolymerisation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent | undefined = SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDegreeOfPolymerisation(component);
          }
        });
      }
    }

    fieldName = 'structuralRepresentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent | undefined = SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addStructuralRepresentation(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * SubstancePolymer.repeat.repeatUnit.unit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Structural repeat units are essential elements for defining polymers
   * - **Definition:** Structural repeat units are essential elements for defining polymers.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private unit?: StringType | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.orientation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The orientation of the polymerisation, e.g. head-tail, head-head, random
   * - **Definition:** The orientation of the polymerisation, e.g. head-tail, head-head, random.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private orientation?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of repeats of this unit
   * - **Definition:** Number of repeats of this unit.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount?: IntegerType | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described
   * - **Definition:** Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described.
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
   * - **Short:** A graphical structure for this SRU
   * - **Definition:** A graphical structure for this SRU.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private structuralRepresentation?: SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `unit` property value as a StringType object if defined; else an empty StringType object
   */
  public getUnitElement(): StringType {
    return this.unit ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `unit` property.
   *
   * @param element - the `unit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUnitElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.unit; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.unit = element;
    } else {
      this.unit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unit` property exists and has a value; `false` otherwise
   */
  public hasUnitElement(): boolean {
    return isDefined<StringType>(this.unit) && !this.unit.isEmpty();
  }

  /**
   * @returns the `unit` property value as a fhirString if defined; else undefined
   */
  public getUnit(): fhirString | undefined {
    return this.unit?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `unit` property.
   *
   * @param value - the `unit` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUnit(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.unit (${String(value)})`;
      this.unit = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.unit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unit` property exists and has a value; `false` otherwise
   */
  public hasUnit(): boolean {
    return this.hasUnitElement();
  }

  /**
   * @returns the `orientation` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOrientation(): CodeableConcept {
    return this.orientation ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Orientation object value to the `orientation` property.
   *
   * @param value - the `orientation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOrientation(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.orientation; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.orientation = value;
    } else {
      this.orientation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `orientation` property exists and has a value; `false` otherwise
   */
  public hasOrientation(): boolean {
    return isDefined<CodeableConcept>(this.orientation) && !this.orientation.isEmpty();
  }

  /**
   * @returns the `amount` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getAmountElement(): IntegerType {
    return this.amount ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `amount` property.
   *
   * @param element - the `amount` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAmountElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.amount; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.amount = element;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmountElement(): boolean {
    return isDefined<IntegerType>(this.amount) && !this.amount.isEmpty();
  }

  /**
   * @returns the `amount` property value as a fhirInteger if defined; else undefined
   */
  public getAmount(): fhirInteger | undefined {
    return this.amount?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `amount` property.
   *
   * @param value - the `amount` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAmount(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.amount (${String(value)})`;
      this.amount = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return this.hasAmountElement();
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
      this.unit,
      this.orientation,
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
    dest.unit = this.unit?.copy();
    dest.orientation = this.orientation?.copy();
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

    if (this.hasUnitElement()) {
      setFhirPrimitiveJson<fhirString>(this.getUnitElement(), 'unit', jsonObj);
    }

    if (this.hasOrientation()) {
      setFhirComplexJson(this.getOrientation(), 'orientation', jsonObj);
    }

    if (this.hasAmountElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getAmountElement(), 'amount', jsonObj);
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
 * - **Short:** Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described
 * - **Definition:** Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described.
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
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'average';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setAverageElement(datatype);
    }

    fieldName = 'low';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setLowElement(datatype);
    }

    fieldName = 'high';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setHighElement(datatype);
    }

    return instance;
  }

  /**
   * SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of the degree of polymerisation shall be described, e.g. SRU/Polymer Ratio
   * - **Definition:** The type of the degree of polymerisation shall be described, e.g. SRU/Polymer Ratio.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.average Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An average amount of polymerisation
   * - **Definition:** An average amount of polymerisation.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private average?: IntegerType | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.low Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A low expected limit of the amount
   * - **Definition:** A low expected limit of the amount.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private low?: IntegerType | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.high Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A high expected limit of the amount
   * - **Definition:** A high expected limit of the amount.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private high?: IntegerType | undefined;

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
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `average` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getAverageElement(): IntegerType {
    return this.average ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `average` property.
   *
   * @param element - the `average` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAverageElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.average; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.average = element;
    } else {
      this.average = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `average` property exists and has a value; `false` otherwise
   */
  public hasAverageElement(): boolean {
    return isDefined<IntegerType>(this.average) && !this.average.isEmpty();
  }

  /**
   * @returns the `average` property value as a fhirInteger if defined; else undefined
   */
  public getAverage(): fhirInteger | undefined {
    return this.average?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `average` property.
   *
   * @param value - the `average` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAverage(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.average (${String(value)})`;
      this.average = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.average = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `average` property exists and has a value; `false` otherwise
   */
  public hasAverage(): boolean {
    return this.hasAverageElement();
  }

  /**
   * @returns the `low` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getLowElement(): IntegerType {
    return this.low ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `low` property.
   *
   * @param element - the `low` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLowElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.low; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.low = element;
    } else {
      this.low = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `low` property exists and has a value; `false` otherwise
   */
  public hasLowElement(): boolean {
    return isDefined<IntegerType>(this.low) && !this.low.isEmpty();
  }

  /**
   * @returns the `low` property value as a fhirInteger if defined; else undefined
   */
  public getLow(): fhirInteger | undefined {
    return this.low?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `low` property.
   *
   * @param value - the `low` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLow(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.low (${String(value)})`;
      this.low = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.low = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `low` property exists and has a value; `false` otherwise
   */
  public hasLow(): boolean {
    return this.hasLowElement();
  }

  /**
   * @returns the `high` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getHighElement(): IntegerType {
    return this.high ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `high` property.
   *
   * @param element - the `high` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHighElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.high; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.high = element;
    } else {
      this.high = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `high` property exists and has a value; `false` otherwise
   */
  public hasHighElement(): boolean {
    return isDefined<IntegerType>(this.high) && !this.high.isEmpty();
  }

  /**
   * @returns the `high` property value as a fhirInteger if defined; else undefined
   */
  public getHigh(): fhirInteger | undefined {
    return this.high?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `high` property.
   *
   * @param value - the `high` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHigh(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation.high (${String(value)})`;
      this.high = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.high = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `high` property exists and has a value; `false` otherwise
   */
  public hasHigh(): boolean {
    return this.hasHighElement();
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
      this.type_,
      this.average,
      this.low,
      this.high,
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
    dest.type_ = this.type_?.copy();
    dest.average = this.average?.copy();
    dest.low = this.low?.copy();
    dest.high = this.high?.copy();
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

    if (this.hasAverageElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getAverageElement(), 'average', jsonObj);
    }

    if (this.hasLowElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getLowElement(), 'low', jsonObj);
    }

    if (this.hasHighElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getHighElement(), 'high', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstancePolymerRepeatRepeatUnitStructuralRepresentationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A graphical structure for this SRU
 * - **Definition:** A graphical structure for this SRU.
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

    fieldName = 'format';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFormat(datatype);
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
   * - **Short:** The type of structure (e.g. Full, Partial, Representative)
   * - **Definition:** The type of structure (e.g. Full, Partial, Representative).
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
   * - **Short:** The structural representation as text string in a standard format e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF
   * - **Definition:** The structural representation as text string in a standard format e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private representation?: StringType | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.structuralRepresentation.format Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The format of the representation e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF
   * - **Definition:** The format of the representation e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private format?: CodeableConcept | undefined;

  /**
   * SubstancePolymer.repeat.repeatUnit.structuralRepresentation.attachment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An attached file with the structural representation
   * - **Definition:** An attached file with the structural representation.
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
   * @returns the `format` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFormat(): CodeableConcept {
    return this.format ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Format object value to the `format` property.
   *
   * @param value - the `format` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFormat(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstancePolymer.repeat.repeatUnit.structuralRepresentation.format; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.format = value;
    } else {
      this.format = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `format` property exists and has a value; `false` otherwise
   */
  public hasFormat(): boolean {
    return isDefined<CodeableConcept>(this.format) && !this.format.isEmpty();
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
      this.format,
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
    dest.format = this.format?.copy();
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

    if (this.hasFormat()) {
      setFhirComplexJson(this.getFormat(), 'format', jsonObj);
    }

    if (this.hasAttachment()) {
      setFhirComplexJson(this.getAttachment(), 'attachment', jsonObj);
    }

    return jsonObj;
  }
}
