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
 * SubstanceReferenceInformation Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation
 * StructureDefinition.name: SubstanceReferenceInformation
 * StructureDefinition.description: Todo.
 * StructureDefinition.fhirVersion: 5.0.0
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
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  InvalidTypeError,
  JSON,
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
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Range, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * SubstanceReferenceInformation Class
 *
 * @remarks
 * Todo.
 *
 * **FHIR Specification**
 * - **Short:** Todo
 * - **Definition:** Todo.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceReferenceInformation](http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation)
 */
export class SubstanceReferenceInformation extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceReferenceInformation` JSON to instantiate the SubstanceReferenceInformation data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceReferenceInformation`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceReferenceInformation
   * @returns SubstanceReferenceInformation data model or undefined for `SubstanceReferenceInformation`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceReferenceInformation | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceReferenceInformation';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceReferenceInformation();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'SubstanceReferenceInformation');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    fieldName = 'gene';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceReferenceInformationGeneComponent | undefined = SubstanceReferenceInformationGeneComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addGene(component);
        }
      });
    }

    fieldName = 'geneElement';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceReferenceInformationGeneElementComponent | undefined = SubstanceReferenceInformationGeneElementComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addGeneElement(component);
        }
      });
    }

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceReferenceInformationTargetComponent | undefined = SubstanceReferenceInformationTargetComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTarget(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SubstanceReferenceInformation.comment Element
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
  private comment?: StringType | undefined;

  /**
   * SubstanceReferenceInformation.gene Element
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
  private gene?: SubstanceReferenceInformationGeneComponent[] | undefined;

  /**
   * SubstanceReferenceInformation.geneElement Element
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
  private geneElement?: SubstanceReferenceInformationGeneElementComponent[] | undefined;

  /**
   * SubstanceReferenceInformation.target Element
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
  private target?: SubstanceReferenceInformationTargetComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `comment` property value as a StringType object if defined; else an empty StringType object
   */
  public getCommentElement(): StringType {
    return this.comment ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `comment` property.
   *
   * @param element - the `comment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCommentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.comment; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.comment = element;
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasCommentElement(): boolean {
    return isDefined<StringType>(this.comment) && !this.comment.isEmpty();
  }

  /**
   * @returns the `comment` property value as a fhirString if defined; else undefined
   */
  public getComment(): fhirString | undefined {
    return this.comment?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `comment` property.
   *
   * @param value - the `comment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComment(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.comment (${String(value)})`;
      this.comment = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasComment(): boolean {
    return this.hasCommentElement();
  }

  /**
   * @returns the `gene` property value as a SubstanceReferenceInformationGeneComponent array
   */
  public getGene(): SubstanceReferenceInformationGeneComponent[] {
    return this.gene ?? ([] as SubstanceReferenceInformationGeneComponent[]);
  }

  /**
   * Assigns the provided SubstanceReferenceInformationGeneComponent array value to the `gene` property.
   *
   * @param value - the `gene` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGene(value: SubstanceReferenceInformationGeneComponent[] | undefined): this {
    if (isDefinedList<SubstanceReferenceInformationGeneComponent>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.gene; Provided value array has an element that is not an instance of SubstanceReferenceInformationGeneComponent.`;
      assertFhirTypeList<SubstanceReferenceInformationGeneComponent>(value, SubstanceReferenceInformationGeneComponent, optErrMsg);
      this.gene = value;
    } else {
      this.gene = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceReferenceInformationGeneComponent value to the `gene` array property.
   *
   * @param value - the `gene` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addGene(value: SubstanceReferenceInformationGeneComponent | undefined): this {
    if (isDefined<SubstanceReferenceInformationGeneComponent>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.gene; Provided element is not an instance of SubstanceReferenceInformationGeneComponent.`;
      assertFhirType<SubstanceReferenceInformationGeneComponent>(value, SubstanceReferenceInformationGeneComponent, optErrMsg);
      this.initGene();
      this.gene?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `gene` property exists and has a value; `false` otherwise
   */
  public hasGene(): boolean {
    return isDefinedList<SubstanceReferenceInformationGeneComponent>(this.gene) && this.gene.some((item: SubstanceReferenceInformationGeneComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `gene` property
   */
  private initGene(): void {
    if(!this.hasGene()) {
      this.gene = [] as SubstanceReferenceInformationGeneComponent[];
    }
  }

  /**
   * @returns the `geneElement` property value as a SubstanceReferenceInformationGeneElementComponent array
   */
  public getGeneElement(): SubstanceReferenceInformationGeneElementComponent[] {
    return this.geneElement ?? ([] as SubstanceReferenceInformationGeneElementComponent[]);
  }

  /**
   * Assigns the provided SubstanceReferenceInformationGeneElementComponent array value to the `geneElement` property.
   *
   * @param value - the `geneElement` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGeneElement(value: SubstanceReferenceInformationGeneElementComponent[] | undefined): this {
    if (isDefinedList<SubstanceReferenceInformationGeneElementComponent>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.geneElement; Provided value array has an element that is not an instance of SubstanceReferenceInformationGeneElementComponent.`;
      assertFhirTypeList<SubstanceReferenceInformationGeneElementComponent>(value, SubstanceReferenceInformationGeneElementComponent, optErrMsg);
      this.geneElement = value;
    } else {
      this.geneElement = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceReferenceInformationGeneElementComponent value to the `geneElement` array property.
   *
   * @param value - the `geneElement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addGeneElement(value: SubstanceReferenceInformationGeneElementComponent | undefined): this {
    if (isDefined<SubstanceReferenceInformationGeneElementComponent>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.geneElement; Provided element is not an instance of SubstanceReferenceInformationGeneElementComponent.`;
      assertFhirType<SubstanceReferenceInformationGeneElementComponent>(value, SubstanceReferenceInformationGeneElementComponent, optErrMsg);
      this.initGeneElement();
      this.geneElement?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `geneElement` property exists and has a value; `false` otherwise
   */
  public hasGeneElement(): boolean {
    return isDefinedList<SubstanceReferenceInformationGeneElementComponent>(this.geneElement) && this.geneElement.some((item: SubstanceReferenceInformationGeneElementComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `geneElement` property
   */
  private initGeneElement(): void {
    if(!this.hasGeneElement()) {
      this.geneElement = [] as SubstanceReferenceInformationGeneElementComponent[];
    }
  }

  /**
   * @returns the `target` property value as a SubstanceReferenceInformationTargetComponent array
   */
  public getTarget(): SubstanceReferenceInformationTargetComponent[] {
    return this.target ?? ([] as SubstanceReferenceInformationTargetComponent[]);
  }

  /**
   * Assigns the provided SubstanceReferenceInformationTargetComponent array value to the `target` property.
   *
   * @param value - the `target` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTarget(value: SubstanceReferenceInformationTargetComponent[] | undefined): this {
    if (isDefinedList<SubstanceReferenceInformationTargetComponent>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.target; Provided value array has an element that is not an instance of SubstanceReferenceInformationTargetComponent.`;
      assertFhirTypeList<SubstanceReferenceInformationTargetComponent>(value, SubstanceReferenceInformationTargetComponent, optErrMsg);
      this.target = value;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceReferenceInformationTargetComponent value to the `target` array property.
   *
   * @param value - the `target` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTarget(value: SubstanceReferenceInformationTargetComponent | undefined): this {
    if (isDefined<SubstanceReferenceInformationTargetComponent>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.target; Provided element is not an instance of SubstanceReferenceInformationTargetComponent.`;
      assertFhirType<SubstanceReferenceInformationTargetComponent>(value, SubstanceReferenceInformationTargetComponent, optErrMsg);
      this.initTarget();
      this.target?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return isDefinedList<SubstanceReferenceInformationTargetComponent>(this.target) && this.target.some((item: SubstanceReferenceInformationTargetComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `target` property
   */
  private initTarget(): void {
    if(!this.hasTarget()) {
      this.target = [] as SubstanceReferenceInformationTargetComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceReferenceInformation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.comment,
      this.gene,
      this.geneElement,
      this.target,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceReferenceInformation {
    const dest = new SubstanceReferenceInformation();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceReferenceInformation): void {
    super.copyValues(dest);
    dest.comment = this.comment?.copy();
    const geneList = copyListValues<SubstanceReferenceInformationGeneComponent>(this.gene);
    dest.gene = geneList.length === 0 ? undefined : geneList;
    const geneElementList = copyListValues<SubstanceReferenceInformationGeneElementComponent>(this.geneElement);
    dest.geneElement = geneElementList.length === 0 ? undefined : geneElementList;
    const targetList = copyListValues<SubstanceReferenceInformationTargetComponent>(this.target);
    dest.target = targetList.length === 0 ? undefined : targetList;
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

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCommentElement(), 'comment', jsonObj);
    }

    if (this.hasGene()) {
      setFhirBackboneElementListJson(this.getGene(), 'gene', jsonObj);
    }

    if (this.hasGeneElement()) {
      setFhirBackboneElementListJson(this.getGeneElement(), 'geneElement', jsonObj);
    }

    if (this.hasTarget()) {
      setFhirBackboneElementListJson(this.getTarget(), 'target', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * SubstanceReferenceInformationGeneComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Todo
 * - **Definition:** Todo.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceReferenceInformation](http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation)
 */
export class SubstanceReferenceInformationGeneComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceReferenceInformationGeneComponent` JSON to instantiate the SubstanceReferenceInformationGeneComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceReferenceInformationGeneComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceReferenceInformationGeneComponent
   * @returns SubstanceReferenceInformationGeneComponent data model or undefined for `SubstanceReferenceInformationGeneComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceReferenceInformationGeneComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceReferenceInformationGeneComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceReferenceInformationGeneComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'geneSequenceOrigin';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGeneSequenceOrigin(datatype);
    }

    fieldName = 'gene';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGene(datatype);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSource(datatype);
        }
      });
  }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SubstanceReferenceInformation.gene.geneSequenceOrigin Element
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
  private geneSequenceOrigin?: CodeableConcept | undefined;

  /**
   * SubstanceReferenceInformation.gene.gene Element
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
  private gene?: CodeableConcept | undefined;

  /**
   * SubstanceReferenceInformation.gene.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private source?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `geneSequenceOrigin` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getGeneSequenceOrigin(): CodeableConcept {
    return this.geneSequenceOrigin ?? new CodeableConcept();
  }

  /**
   * Assigns the provided GeneSequenceOrigin object value to the `geneSequenceOrigin` property.
   *
   * @param value - the `geneSequenceOrigin` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGeneSequenceOrigin(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.gene.geneSequenceOrigin; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.geneSequenceOrigin = value;
    } else {
      this.geneSequenceOrigin = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `geneSequenceOrigin` property exists and has a value; `false` otherwise
   */
  public hasGeneSequenceOrigin(): boolean {
    return isDefined<CodeableConcept>(this.geneSequenceOrigin) && !this.geneSequenceOrigin.isEmpty();
  }

  /**
   * @returns the `gene` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getGene(): CodeableConcept {
    return this.gene ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Gene object value to the `gene` property.
   *
   * @param value - the `gene` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGene(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.gene.gene; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.gene = value;
    } else {
      this.gene = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `gene` property exists and has a value; `false` otherwise
   */
  public hasGene(): boolean {
    return isDefined<CodeableConcept>(this.gene) && !this.gene.isEmpty();
  }

  /**
   * @returns the `source` property value as a Reference array
   */
  public getSource(): Reference[] {
    return this.source ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `source` property.
   *
   * @decorator `@ReferenceTargets('SubstanceReferenceInformation.gene.source', ['DocumentReference',])`
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceReferenceInformation.gene.source', [
    'DocumentReference',
  ])
  public setSource(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `source` array property.
   *
   * @decorator `@ReferenceTargets('SubstanceReferenceInformation.gene.source', ['DocumentReference',])`
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceReferenceInformation.gene.source', [
    'DocumentReference',
  ])
  public addSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSource();
      this.source?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefinedList<Reference>(this.source) && this.source.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `source` property
   */
  private initSource(): void {
    if (!this.hasSource()) {
      this.source = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceReferenceInformation.gene';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.geneSequenceOrigin,
      this.gene,
      this.source,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceReferenceInformationGeneComponent {
    const dest = new SubstanceReferenceInformationGeneComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceReferenceInformationGeneComponent): void {
    super.copyValues(dest);
    dest.geneSequenceOrigin = this.geneSequenceOrigin?.copy();
    dest.gene = this.gene?.copy();
    const sourceList = copyListValues<Reference>(this.source);
    dest.source = sourceList.length === 0 ? undefined : sourceList;
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

    if (this.hasGeneSequenceOrigin()) {
      setFhirComplexJson(this.getGeneSequenceOrigin(), 'geneSequenceOrigin', jsonObj);
    }

    if (this.hasGene()) {
      setFhirComplexJson(this.getGene(), 'gene', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexListJson(this.getSource(), 'source', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceReferenceInformationGeneElementComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Todo
 * - **Definition:** Todo.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceReferenceInformation](http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation)
 */
export class SubstanceReferenceInformationGeneElementComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceReferenceInformationGeneElementComponent` JSON to instantiate the SubstanceReferenceInformationGeneElementComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceReferenceInformationGeneElementComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceReferenceInformationGeneElementComponent
   * @returns SubstanceReferenceInformationGeneElementComponent data model or undefined for `SubstanceReferenceInformationGeneElementComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceReferenceInformationGeneElementComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceReferenceInformationGeneElementComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceReferenceInformationGeneElementComponent();

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

    fieldName = 'element';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setElement(datatype);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSource(datatype);
        }
      });
  }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SubstanceReferenceInformation.geneElement.type Element
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
   * SubstanceReferenceInformation.geneElement.element Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private element?: Identifier | undefined;

  /**
   * SubstanceReferenceInformation.geneElement.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private source?: Reference[] | undefined;

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
      const optErrMsg = `Invalid SubstanceReferenceInformation.geneElement.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `element` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getElement(): Identifier {
    return this.element ?? new Identifier();
  }

  /**
   * Assigns the provided Element object value to the `element` property.
   *
   * @param value - the `element` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setElement(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.geneElement.element; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.element = value;
    } else {
      this.element = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `element` property exists and has a value; `false` otherwise
   */
  public hasElement(): boolean {
    return isDefined<Identifier>(this.element) && !this.element.isEmpty();
  }

  /**
   * @returns the `source` property value as a Reference array
   */
  public getSource(): Reference[] {
    return this.source ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `source` property.
   *
   * @decorator `@ReferenceTargets('SubstanceReferenceInformation.geneElement.source', ['DocumentReference',])`
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceReferenceInformation.geneElement.source', [
    'DocumentReference',
  ])
  public setSource(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `source` array property.
   *
   * @decorator `@ReferenceTargets('SubstanceReferenceInformation.geneElement.source', ['DocumentReference',])`
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceReferenceInformation.geneElement.source', [
    'DocumentReference',
  ])
  public addSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSource();
      this.source?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefinedList<Reference>(this.source) && this.source.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `source` property
   */
  private initSource(): void {
    if (!this.hasSource()) {
      this.source = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceReferenceInformation.geneElement';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.element,
      this.source,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceReferenceInformationGeneElementComponent {
    const dest = new SubstanceReferenceInformationGeneElementComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceReferenceInformationGeneElementComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.element = this.element?.copy();
    const sourceList = copyListValues<Reference>(this.source);
    dest.source = sourceList.length === 0 ? undefined : sourceList;
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

    if (this.hasElement()) {
      setFhirComplexJson(this.getElement(), 'element', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexListJson(this.getSource(), 'source', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceReferenceInformationTargetComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Todo
 * - **Definition:** Todo.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceReferenceInformation](http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation)
 */
export class SubstanceReferenceInformationTargetComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceReferenceInformationTargetComponent` JSON to instantiate the SubstanceReferenceInformationTargetComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceReferenceInformationTargetComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceReferenceInformationTargetComponent
   * @returns SubstanceReferenceInformationTargetComponent data model or undefined for `SubstanceReferenceInformationTargetComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceReferenceInformationTargetComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceReferenceInformationTargetComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceReferenceInformationTargetComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = SubstanceReferenceInformationTargetComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SubstanceReferenceInformationTargetComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTarget(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'interaction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setInteraction(datatype);
    }

    fieldName = 'organism';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrganism(datatype);
    }

    fieldName = 'organismType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrganismType(datatype);
    }

    fieldName = 'amount[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const amount: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setAmount(amount);

    fieldName = 'amountType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmountType(datatype);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSource(datatype);
        }
      });
  }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SubstanceReferenceInformation.target.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private target?: Identifier | undefined;

  /**
   * SubstanceReferenceInformation.target.type Element
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
   * SubstanceReferenceInformation.target.interaction Element
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
  private interaction?: CodeableConcept | undefined;

  /**
   * SubstanceReferenceInformation.target.organism Element
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
  private organism?: CodeableConcept | undefined;

  /**
   * SubstanceReferenceInformation.target.organismType Element
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
  private organismType?: CodeableConcept | undefined;

  /**
   * SubstanceReferenceInformation.target.amount[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SubstanceReferenceInformation.target.amount[x]', ['Quantity','Range','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Types:**
   *     'Quantity',
   *     'Range',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('SubstanceReferenceInformation.target.amount[x]',[
    'Quantity',
    'Range',
    'string',
  ])
  private amount?: IDataType | undefined;

  /**
   * SubstanceReferenceInformation.target.amountType Element
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
  private amountType?: CodeableConcept | undefined;

  /**
   * SubstanceReferenceInformation.target.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Todo
   * - **Definition:** Todo.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private source?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `target` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getTarget(): Identifier {
    return this.target ?? new Identifier();
  }

  /**
   * Assigns the provided Target object value to the `target` property.
   *
   * @param value - the `target` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTarget(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.target.target; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.target = value;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return isDefined<Identifier>(this.target) && !this.target.isEmpty();
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
      const optErrMsg = `Invalid SubstanceReferenceInformation.target.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `interaction` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getInteraction(): CodeableConcept {
    return this.interaction ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Interaction object value to the `interaction` property.
   *
   * @param value - the `interaction` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInteraction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.target.interaction; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.interaction = value;
    } else {
      this.interaction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `interaction` property exists and has a value; `false` otherwise
   */
  public hasInteraction(): boolean {
    return isDefined<CodeableConcept>(this.interaction) && !this.interaction.isEmpty();
  }

  /**
   * @returns the `organism` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOrganism(): CodeableConcept {
    return this.organism ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Organism object value to the `organism` property.
   *
   * @param value - the `organism` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOrganism(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.target.organism; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.organism = value;
    } else {
      this.organism = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `organism` property exists and has a value; `false` otherwise
   */
  public hasOrganism(): boolean {
    return isDefined<CodeableConcept>(this.organism) && !this.organism.isEmpty();
  }

  /**
   * @returns the `organismType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOrganismType(): CodeableConcept {
    return this.organismType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided OrganismType object value to the `organismType` property.
   *
   * @param value - the `organismType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOrganismType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.target.organismType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.organismType = value;
    } else {
      this.organismType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `organismType` property exists and has a value; `false` otherwise
   */
  public hasOrganismType(): boolean {
    return isDefined<CodeableConcept>(this.organismType) && !this.organismType.isEmpty();
  }

  /**
   * @returns the `amount` property value as a DataType object if defined; else undefined
   */
  public getAmount(): IDataType | undefined {
    return this.amount;
  }

  /**
   * Assigns the provided DataType object value to the `amount` property.
   *
   * @decorator `@ChoiceDataTypes('SubstanceReferenceInformation.target.amount[x]')`
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SubstanceReferenceInformation.target.amount[x]')
  public setAmount(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.amount) && !this.amount.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `amount` property value as a Quantity object if defined; else undefined
   */
  public getAmountQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.amount)) {
      return undefined;
    }
    if (!(this.amount instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceReferenceInformation.target.amount[x]: Expected Quantity but encountered ${this.amount.fhirType()}`,
      );
    }
    return this.amount;
  }

  /**
   * @returns `true` if the `amount` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasAmountQuantity(): boolean {
    return this.hasAmount() && this.amount instanceof Quantity;
  }

  /**
   * @returns the `amount` property value as a Range object if defined; else undefined
   */
  public getAmountRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.amount)) {
      return undefined;
    }
    if (!(this.amount instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceReferenceInformation.target.amount[x]: Expected Range but encountered ${this.amount.fhirType()}`,
      );
    }
    return this.amount;
  }

  /**
   * @returns `true` if the `amount` property exists as a Range and has a value; `false` otherwise
   */
  public hasAmountRange(): boolean {
    return this.hasAmount() && this.amount instanceof Range;
  }

  /**
   * @returns the `amount` property value as a StringType object if defined; else undefined
   */
  public getAmountStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.amount)) {
      return undefined;
    }
    if (!(this.amount instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceReferenceInformation.target.amount[x]: Expected StringType but encountered ${this.amount.fhirType()}`,
      );
    }
    return this.amount;
  }

  /**
   * @returns `true` if the `amount` property exists as a StringType and has a value; `false` otherwise
   */
  public hasAmountStringType(): boolean {
    return this.hasAmount() && this.amount instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `amountType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAmountType(): CodeableConcept {
    return this.amountType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AmountType object value to the `amountType` property.
   *
   * @param value - the `amountType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmountType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceReferenceInformation.target.amountType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.amountType = value;
    } else {
      this.amountType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amountType` property exists and has a value; `false` otherwise
   */
  public hasAmountType(): boolean {
    return isDefined<CodeableConcept>(this.amountType) && !this.amountType.isEmpty();
  }

  /**
   * @returns the `source` property value as a Reference array
   */
  public getSource(): Reference[] {
    return this.source ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `source` property.
   *
   * @decorator `@ReferenceTargets('SubstanceReferenceInformation.target.source', ['DocumentReference',])`
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceReferenceInformation.target.source', [
    'DocumentReference',
  ])
  public setSource(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `source` array property.
   *
   * @decorator `@ReferenceTargets('SubstanceReferenceInformation.target.source', ['DocumentReference',])`
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceReferenceInformation.target.source', [
    'DocumentReference',
  ])
  public addSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSource();
      this.source?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefinedList<Reference>(this.source) && this.source.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `source` property
   */
  private initSource(): void {
    if (!this.hasSource()) {
      this.source = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceReferenceInformation.target';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.target,
      this.type_,
      this.interaction,
      this.organism,
      this.organismType,
      this.amount,
      this.amountType,
      this.source,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceReferenceInformationTargetComponent {
    const dest = new SubstanceReferenceInformationTargetComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceReferenceInformationTargetComponent): void {
    super.copyValues(dest);
    dest.target = this.target?.copy();
    dest.type_ = this.type_?.copy();
    dest.interaction = this.interaction?.copy();
    dest.organism = this.organism?.copy();
    dest.organismType = this.organismType?.copy();
    dest.amount = this.amount?.copy() as IDataType;
    dest.amountType = this.amountType?.copy();
    const sourceList = copyListValues<Reference>(this.source);
    dest.source = sourceList.length === 0 ? undefined : sourceList;
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

    if (this.hasTarget()) {
      setFhirComplexJson(this.getTarget(), 'target', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasInteraction()) {
      setFhirComplexJson(this.getInteraction(), 'interaction', jsonObj);
    }

    if (this.hasOrganism()) {
      setFhirComplexJson(this.getOrganism(), 'organism', jsonObj);
    }

    if (this.hasOrganismType()) {
      setFhirComplexJson(this.getOrganismType(), 'organismType', jsonObj);
    }

    if (this.hasAmount()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAmount()!, 'amount', jsonObj);
    }

    if (this.hasAmountType()) {
      setFhirComplexJson(this.getAmountType(), 'amountType', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexListJson(this.getSource(), 'source', jsonObj);
    }

    return jsonObj;
  }
}
