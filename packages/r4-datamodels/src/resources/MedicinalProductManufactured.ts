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
 * MedicinalProductManufactured Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicinalProductManufactured
 * StructureDefinition.name: MedicinalProductManufactured
 * StructureDefinition.description: The manufactured item as contained in the packaged medicinal product.
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
  isRequiredElementEmpty,
  setFhirComplexJson,
  setFhirComplexListJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, PARSABLE_DATATYPE_MAP, ProdCharacteristic, Quantity, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * MedicinalProductManufactured Class
 *
 * @remarks
 * The manufactured item as contained in the packaged medicinal product.
 *
 * **FHIR Specification**
 * - **Short:** The manufactured item as contained in the packaged medicinal product
 * - **Definition:** The manufactured item as contained in the packaged medicinal product.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductManufactured](http://hl7.org/fhir/StructureDefinition/MedicinalProductManufactured)
 */
export class MedicinalProductManufactured extends DomainResource implements IDomainResource {
  constructor(manufacturedDoseForm: CodeableConcept | null = null, quantity: Quantity | null = null) {
    super();

    this.manufacturedDoseForm = null;
    if (isDefined<CodeableConcept>(manufacturedDoseForm)) {
      this.setManufacturedDoseForm(manufacturedDoseForm);
    }

    this.quantity = null;
    if (isDefined<Quantity>(quantity)) {
      this.setQuantity(quantity);
    }
  }

  /**
   * Parse the provided `MedicinalProductManufactured` JSON to instantiate the MedicinalProductManufactured data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductManufactured`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductManufactured
   * @returns MedicinalProductManufactured data model or undefined for `MedicinalProductManufactured`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductManufactured | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductManufactured';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductManufactured();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicinalProductManufactured');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'manufacturedDoseForm';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setManufacturedDoseForm(null);
      } else {
        instance.setManufacturedDoseForm(datatype);
      }
    } else {
      instance.setManufacturedDoseForm(null);
    }

    fieldName = 'unitOfPresentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnitOfPresentation(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setQuantity(null);
      } else {
        instance.setQuantity(datatype);
      }
    } else {
      instance.setQuantity(null);
    }

    fieldName = 'manufacturer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addManufacturer(datatype);
        }
      });
  }

    fieldName = 'ingredient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addIngredient(datatype);
        }
      });
  }

    fieldName = 'physicalCharacteristics';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: ProdCharacteristic | undefined = ProdCharacteristic.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPhysicalCharacteristics(datatype);
    }

    fieldName = 'otherCharacteristics';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addOtherCharacteristics(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * MedicinalProductManufactured.manufacturedDoseForm Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dose form as manufactured and before any transformation into the pharmaceutical product
   * - **Definition:** Dose form as manufactured and before any transformation into the pharmaceutical product.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private manufacturedDoseForm: CodeableConcept | null;

  /**
   * MedicinalProductManufactured.unitOfPresentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The "real world" units in which the quantity of the manufactured item is described
   * - **Definition:** The "real world" units in which the quantity of the manufactured item is described.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private unitOfPresentation?: CodeableConcept | undefined;

  /**
   * MedicinalProductManufactured.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The quantity or "count number" of the manufactured item
   * - **Definition:** The quantity or "count number" of the manufactured item.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private quantity: Quantity | null;

  /**
   * MedicinalProductManufactured.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues)
   * - **Definition:** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private manufacturer?: Reference[] | undefined;

  /**
   * MedicinalProductManufactured.ingredient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Ingredient
   * - **Definition:** Ingredient.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private ingredient?: Reference[] | undefined;

  /**
   * MedicinalProductManufactured.physicalCharacteristics Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dimensions, color etc.
   * - **Definition:** Dimensions, color etc.
   * - **FHIR Type:** `ProdCharacteristic`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private physicalCharacteristics?: ProdCharacteristic | undefined;

  /**
   * MedicinalProductManufactured.otherCharacteristics Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Other codeable characteristics
   * - **Definition:** Other codeable characteristics.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private otherCharacteristics?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `manufacturedDoseForm` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getManufacturedDoseForm(): CodeableConcept {
    return this.manufacturedDoseForm ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `manufacturedDoseForm` property.
   *
   * @param value - the `manufacturedDoseForm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setManufacturedDoseForm(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductManufactured.manufacturedDoseForm; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.manufacturedDoseForm = value;
    } else {
      this.manufacturedDoseForm = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `manufacturedDoseForm` property exists and has a value; `false` otherwise
   */
  public hasManufacturedDoseForm(): boolean {
    return isDefined<CodeableConcept>(this.manufacturedDoseForm) && !this.manufacturedDoseForm.isEmpty();
  }

  /**
   * @returns the `unitOfPresentation` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getUnitOfPresentation(): CodeableConcept {
    return this.unitOfPresentation ?? new CodeableConcept();
  }

  /**
   * Assigns the provided UnitOfPresentation object value to the `unitOfPresentation` property.
   *
   * @param value - the `unitOfPresentation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUnitOfPresentation(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductManufactured.unitOfPresentation; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.unitOfPresentation = value;
    } else {
      this.unitOfPresentation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unitOfPresentation` property exists and has a value; `false` otherwise
   */
  public hasUnitOfPresentation(): boolean {
    return isDefined<CodeableConcept>(this.unitOfPresentation) && !this.unitOfPresentation.isEmpty();
  }

  /**
   * @returns the `quantity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getQuantity(): Quantity {
    return this.quantity ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `quantity` property.
   *
   * @param value - the `quantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantity(value: Quantity | undefined | null): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MedicinalProductManufactured.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return isDefined<Quantity>(this.quantity) && !this.quantity.isEmpty();
  }

  /**
   * @returns the `manufacturer` property value as a Reference array
   */
  public getManufacturer(): Reference[] {
    return this.manufacturer ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `manufacturer` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductManufactured.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductManufactured.manufacturer', [
    'Organization',
  ])
  public setManufacturer(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.manufacturer = value;
    } else {
      this.manufacturer = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `manufacturer` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductManufactured.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductManufactured.manufacturer', [
    'Organization',
  ])
  public addManufacturer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initManufacturer();
      this.manufacturer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `manufacturer` property exists and has a value; `false` otherwise
   */
  public hasManufacturer(): boolean {
    return isDefinedList<Reference>(this.manufacturer) && this.manufacturer.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `manufacturer` property
   */
  private initManufacturer(): void {
    if (!this.hasManufacturer()) {
      this.manufacturer = [] as Reference[];
    }
  }

  /**
   * @returns the `ingredient` property value as a Reference array
   */
  public getIngredient(): Reference[] {
    return this.ingredient ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `ingredient` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductManufactured.ingredient', ['MedicinalProductIngredient',])`
   *
   * @param value - the `ingredient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductManufactured.ingredient', [
    'MedicinalProductIngredient',
  ])
  public setIngredient(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.ingredient = value;
    } else {
      this.ingredient = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `ingredient` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductManufactured.ingredient', ['MedicinalProductIngredient',])`
   *
   * @param value - the `ingredient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductManufactured.ingredient', [
    'MedicinalProductIngredient',
  ])
  public addIngredient(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initIngredient();
      this.ingredient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `ingredient` property exists and has a value; `false` otherwise
   */
  public hasIngredient(): boolean {
    return isDefinedList<Reference>(this.ingredient) && this.ingredient.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `ingredient` property
   */
  private initIngredient(): void {
    if (!this.hasIngredient()) {
      this.ingredient = [] as Reference[];
    }
  }

  /**
   * @returns the `physicalCharacteristics` property value as a ProdCharacteristic object if defined; else an empty ProdCharacteristic object
   */
  public getPhysicalCharacteristics(): ProdCharacteristic {
    return this.physicalCharacteristics ?? new ProdCharacteristic();
  }

  /**
   * Assigns the provided PhysicalCharacteristics object value to the `physicalCharacteristics` property.
   *
   * @param value - the `physicalCharacteristics` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPhysicalCharacteristics(value: ProdCharacteristic | undefined): this {
    if (isDefined<ProdCharacteristic>(value)) {
      const optErrMsg = `Invalid MedicinalProductManufactured.physicalCharacteristics; Provided element is not an instance of ProdCharacteristic.`;
      assertFhirType<ProdCharacteristic>(value, ProdCharacteristic, optErrMsg);
      this.physicalCharacteristics = value;
    } else {
      this.physicalCharacteristics = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `physicalCharacteristics` property exists and has a value; `false` otherwise
   */
  public hasPhysicalCharacteristics(): boolean {
    return isDefined<ProdCharacteristic>(this.physicalCharacteristics) && !this.physicalCharacteristics.isEmpty();
  }

  /**
   * @returns the `otherCharacteristics` property value as a CodeableConcept array
   */
  public getOtherCharacteristics(): CodeableConcept[] {
    return this.otherCharacteristics ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `otherCharacteristics` property.
   *
   * @param value - the `otherCharacteristics` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOtherCharacteristics(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductManufactured.otherCharacteristics; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.otherCharacteristics = value;
    } else {
      this.otherCharacteristics = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `otherCharacteristics` array property.
   *
   * @param value - the `otherCharacteristics` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOtherCharacteristics(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductManufactured.otherCharacteristics; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initOtherCharacteristics();
      this.otherCharacteristics?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `otherCharacteristics` property exists and has a value; `false` otherwise
   */
  public hasOtherCharacteristics(): boolean {
    return isDefinedList<CodeableConcept>(this.otherCharacteristics) && this.otherCharacteristics.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `otherCharacteristics` property
   */
  private initOtherCharacteristics(): void {
    if(!this.hasOtherCharacteristics()) {
      this.otherCharacteristics = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductManufactured';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.manufacturedDoseForm,
      this.unitOfPresentation,
      this.quantity,
      this.manufacturer,
      this.ingredient,
      this.physicalCharacteristics,
      this.otherCharacteristics,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.manufacturedDoseForm, this.quantity, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductManufactured {
    const dest = new MedicinalProductManufactured();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductManufactured): void {
    super.copyValues(dest);
    dest.manufacturedDoseForm = this.manufacturedDoseForm ? this.manufacturedDoseForm.copy() : null;
    dest.unitOfPresentation = this.unitOfPresentation?.copy();
    dest.quantity = this.quantity ? this.quantity.copy() : null;
    const manufacturerList = copyListValues<Reference>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
    const ingredientList = copyListValues<Reference>(this.ingredient);
    dest.ingredient = ingredientList.length === 0 ? undefined : ingredientList;
    dest.physicalCharacteristics = this.physicalCharacteristics?.copy();
    const otherCharacteristicsList = copyListValues<CodeableConcept>(this.otherCharacteristics);
    dest.otherCharacteristics = otherCharacteristicsList.length === 0 ? undefined : otherCharacteristicsList;
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

    if (this.hasManufacturedDoseForm()) {
      setFhirComplexJson(this.getManufacturedDoseForm(), 'manufacturedDoseForm', jsonObj);
    } else {
      jsonObj['manufacturedDoseForm'] = null;
    }

    if (this.hasUnitOfPresentation()) {
      setFhirComplexJson(this.getUnitOfPresentation(), 'unitOfPresentation', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    } else {
      jsonObj['quantity'] = null;
    }

    if (this.hasManufacturer()) {
      setFhirComplexListJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasIngredient()) {
      setFhirComplexListJson(this.getIngredient(), 'ingredient', jsonObj);
    }

    if (this.hasPhysicalCharacteristics()) {
      setFhirComplexJson(this.getPhysicalCharacteristics(), 'physicalCharacteristics', jsonObj);
    }

    if (this.hasOtherCharacteristics()) {
      setFhirComplexListJson(this.getOtherCharacteristics(), 'otherCharacteristics', jsonObj);
    }

    return jsonObj;
  }
}

