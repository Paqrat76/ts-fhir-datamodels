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
 * MedicinalProductIngredient Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient
 * StructureDefinition.name: MedicinalProductIngredient
 * StructureDefinition.description: An ingredient of a manufactured item or pharmaceutical product.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  BooleanType,
  DomainResource,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  JSON,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Ratio, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * MedicinalProductIngredient Class
 *
 * @remarks
 * An ingredient of a manufactured item or pharmaceutical product.
 *
 * **FHIR Specification**
 * - **Short:** An ingredient of a manufactured item or pharmaceutical product
 * - **Definition:** An ingredient of a manufactured item or pharmaceutical product.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductIngredient](http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient)
 */
export class MedicinalProductIngredient extends DomainResource implements IDomainResource {
  constructor(role: CodeableConcept | null = null) {
    super();

    this.role = null;
    if (isDefined<CodeableConcept>(role)) {
      this.setRole(role);
    }
  }

  /**
   * Parse the provided `MedicinalProductIngredient` JSON to instantiate the MedicinalProductIngredient data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductIngredient`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductIngredient
   * @returns MedicinalProductIngredient data model or undefined for `MedicinalProductIngredient`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductIngredient | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductIngredient';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductIngredient();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicinalProductIngredient');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setRole(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'allergenicIndicator';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAllergenicIndicatorElement(datatype);
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

    fieldName = 'specifiedSubstance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductIngredientSpecifiedSubstanceComponent | undefined = MedicinalProductIngredientSpecifiedSubstanceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSpecifiedSubstance(component);
        }
      });
    }

    fieldName = 'substance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MedicinalProductIngredientSubstanceComponent | undefined = MedicinalProductIngredientSubstanceComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubstance(component);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicinalProductIngredient.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier for the ingredient
   * - **Definition:** The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * MedicinalProductIngredient.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Ingredient role e.g. Active ingredient, excipient
   * - **Definition:** Ingredient role e.g. Active ingredient, excipient.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private role: CodeableConcept | null;

  /**
   * MedicinalProductIngredient.allergenicIndicator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If the ingredient is a known or suspected allergen
   * - **Definition:** If the ingredient is a known or suspected allergen.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private allergenicIndicator?: BooleanType | undefined;

  /**
   * MedicinalProductIngredient.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Manufacturer of this Ingredient
   * - **Definition:** Manufacturer of this Ingredient.
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
   * MedicinalProductIngredient.specifiedSubstance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A specified substance that comprises this ingredient
   * - **Definition:** A specified substance that comprises this ingredient.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private specifiedSubstance?: MedicinalProductIngredientSpecifiedSubstanceComponent[] | undefined;

  /**
   * MedicinalProductIngredient.substance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The ingredient substance
   * - **Definition:** The ingredient substance.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private substance?: MedicinalProductIngredientSubstanceComponent | undefined;

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
      const optErrMsg = `Invalid MedicinalProductIngredient.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `role` property value as a CodeableConcept object if defined; else null
   */
  public getRole(): CodeableConcept | null {
    return this.role;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `role` property.
   *
   * @param value - the `role` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRole(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `MedicinalProductIngredient.role is required`);
    const optErrMsg = `Invalid MedicinalProductIngredient.role; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.role = value;
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return isDefined<CodeableConcept>(this.role) && !this.role.isEmpty();
  }

  /**
   * @returns the `allergenicIndicator` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAllergenicIndicatorElement(): BooleanType {
    return this.allergenicIndicator ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `allergenicIndicator` property.
   *
   * @param element - the `allergenicIndicator` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAllergenicIndicatorElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.allergenicIndicator; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.allergenicIndicator = element;
    } else {
      this.allergenicIndicator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `allergenicIndicator` property exists and has a value; `false` otherwise
   */
  public hasAllergenicIndicatorElement(): boolean {
    return isDefined<BooleanType>(this.allergenicIndicator) && !this.allergenicIndicator.isEmpty();
  }

  /**
   * @returns the `allergenicIndicator` property value as a fhirBoolean if defined; else undefined
   */
  public getAllergenicIndicator(): fhirBoolean | undefined {
    return this.allergenicIndicator?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `allergenicIndicator` property.
   *
   * @param value - the `allergenicIndicator` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAllergenicIndicator(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.allergenicIndicator (${String(value)})`;
      this.allergenicIndicator = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.allergenicIndicator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `allergenicIndicator` property exists and has a value; `false` otherwise
   */
  public hasAllergenicIndicator(): boolean {
    return this.hasAllergenicIndicatorElement();
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
   * @decorator `@ReferenceTargets('MedicinalProductIngredient.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductIngredient.manufacturer', [
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
   * @decorator `@ReferenceTargets('MedicinalProductIngredient.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductIngredient.manufacturer', [
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
   * @returns the `specifiedSubstance` property value as a MedicinalProductIngredientSpecifiedSubstanceComponent array
   */
  public getSpecifiedSubstance(): MedicinalProductIngredientSpecifiedSubstanceComponent[] {
    return this.specifiedSubstance ?? ([] as MedicinalProductIngredientSpecifiedSubstanceComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductIngredientSpecifiedSubstanceComponent array value to the `specifiedSubstance` property.
   *
   * @param value - the `specifiedSubstance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecifiedSubstance(value: MedicinalProductIngredientSpecifiedSubstanceComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductIngredientSpecifiedSubstanceComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance; Provided value array has an element that is not an instance of MedicinalProductIngredientSpecifiedSubstanceComponent.`;
      assertFhirTypeList<MedicinalProductIngredientSpecifiedSubstanceComponent>(value, MedicinalProductIngredientSpecifiedSubstanceComponent, optErrMsg);
      this.specifiedSubstance = value;
    } else {
      this.specifiedSubstance = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductIngredientSpecifiedSubstanceComponent value to the `specifiedSubstance` array property.
   *
   * @param value - the `specifiedSubstance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSpecifiedSubstance(value: MedicinalProductIngredientSpecifiedSubstanceComponent | undefined): this {
    if (isDefined<MedicinalProductIngredientSpecifiedSubstanceComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance; Provided element is not an instance of MedicinalProductIngredientSpecifiedSubstanceComponent.`;
      assertFhirType<MedicinalProductIngredientSpecifiedSubstanceComponent>(value, MedicinalProductIngredientSpecifiedSubstanceComponent, optErrMsg);
      this.initSpecifiedSubstance();
      this.specifiedSubstance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specifiedSubstance` property exists and has a value; `false` otherwise
   */
  public hasSpecifiedSubstance(): boolean {
    return isDefinedList<MedicinalProductIngredientSpecifiedSubstanceComponent>(this.specifiedSubstance) && this.specifiedSubstance.some((item: MedicinalProductIngredientSpecifiedSubstanceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `specifiedSubstance` property
   */
  private initSpecifiedSubstance(): void {
    if(!this.hasSpecifiedSubstance()) {
      this.specifiedSubstance = [] as MedicinalProductIngredientSpecifiedSubstanceComponent[];
    }
  }

  /**
   * @returns the `substance` property value as a MedicinalProductIngredientSubstanceComponent object if defined; else an empty MedicinalProductIngredientSubstanceComponent object
   */
  public getSubstance(): MedicinalProductIngredientSubstanceComponent {
    return this.substance ?? new MedicinalProductIngredientSubstanceComponent();
  }

  /**
   * Assigns the provided Substance object value to the `substance` property.
   *
   * @param value - the `substance` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubstance(value: MedicinalProductIngredientSubstanceComponent | undefined): this {
    if (isDefined<MedicinalProductIngredientSubstanceComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.substance; Provided element is not an instance of MedicinalProductIngredientSubstanceComponent.`;
      assertFhirType<MedicinalProductIngredientSubstanceComponent>(value, MedicinalProductIngredientSubstanceComponent, optErrMsg);
      this.substance = value;
    } else {
      this.substance = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `substance` property exists and has a value; `false` otherwise
   */
  public hasSubstance(): boolean {
    return isDefined<MedicinalProductIngredientSubstanceComponent>(this.substance) && !this.substance.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductIngredient';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.role,
      this.allergenicIndicator,
      this.manufacturer,
      this.specifiedSubstance,
      this.substance,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductIngredient {
    const dest = new MedicinalProductIngredient();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductIngredient): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.role = this.role ? this.role.copy() : null;
    dest.allergenicIndicator = this.allergenicIndicator?.copy();
    const manufacturerList = copyListValues<Reference>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
    const specifiedSubstanceList = copyListValues<MedicinalProductIngredientSpecifiedSubstanceComponent>(this.specifiedSubstance);
    dest.specifiedSubstance = specifiedSubstanceList.length === 0 ? undefined : specifiedSubstanceList;
    dest.substance = this.substance?.copy();
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

    if (this.hasIdentifier()) {
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasRole()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getRole()!, 'role', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductIngredient.role`);
    }

    if (this.hasAllergenicIndicatorElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAllergenicIndicatorElement(), 'allergenicIndicator', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexListJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasSpecifiedSubstance()) {
      setFhirBackboneElementListJson(this.getSpecifiedSubstance(), 'specifiedSubstance', jsonObj);
    }

    if (this.hasSubstance()) {
      setFhirBackboneElementJson(this.getSubstance(), 'substance', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * MedicinalProductIngredientSpecifiedSubstanceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A specified substance that comprises this ingredient
 * - **Definition:** A specified substance that comprises this ingredient.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductIngredient](http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient)
 */
export class MedicinalProductIngredientSpecifiedSubstanceComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null, group: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }

    this.group = null;
    if (isDefined<CodeableConcept>(group)) {
      this.setGroup(group);
    }
  }

  /**
   * Parse the provided `MedicinalProductIngredientSpecifiedSubstanceComponent` JSON to instantiate the MedicinalProductIngredientSpecifiedSubstanceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductIngredientSpecifiedSubstanceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductIngredientSpecifiedSubstanceComponent
   * @returns MedicinalProductIngredientSpecifiedSubstanceComponent data model or undefined for `MedicinalProductIngredientSpecifiedSubstanceComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductIngredientSpecifiedSubstanceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductIngredientSpecifiedSubstanceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductIngredientSpecifiedSubstanceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'group';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setGroup(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'confidentiality';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setConfidentiality(datatype);
    }

    fieldName = 'strength';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductIngredientSpecifiedSubstanceStrengthComponent | undefined = MedicinalProductIngredientSpecifiedSubstanceStrengthComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStrength(component);
        }
      });
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicinalProductIngredient.specifiedSubstance.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specified substance
   * - **Definition:** The specified substance.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * MedicinalProductIngredient.specifiedSubstance.group Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The group of specified substance, e.g. group 1 to 4
   * - **Definition:** The group of specified substance, e.g. group 1 to 4.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private group: CodeableConcept | null;

  /**
   * MedicinalProductIngredient.specifiedSubstance.confidentiality Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Confidentiality level of the specified substance as the ingredient
   * - **Definition:** Confidentiality level of the specified substance as the ingredient.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private confidentiality?: CodeableConcept | undefined;

  /**
   * MedicinalProductIngredient.specifiedSubstance.strength Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
   * - **Definition:** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private strength?: MedicinalProductIngredientSpecifiedSubstanceStrengthComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else null
   */
  public getCode(): CodeableConcept | null {
    return this.code;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `MedicinalProductIngredient.specifiedSubstance.code is required`);
    const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.code; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.code = value;
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `group` property value as a CodeableConcept object if defined; else null
   */
  public getGroup(): CodeableConcept | null {
    return this.group;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `group` property.
   *
   * @param value - the `group` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGroup(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `MedicinalProductIngredient.specifiedSubstance.group is required`);
    const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.group; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.group = value;
    return this;
  }

  /**
   * @returns `true` if the `group` property exists and has a value; `false` otherwise
   */
  public hasGroup(): boolean {
    return isDefined<CodeableConcept>(this.group) && !this.group.isEmpty();
  }

  /**
   * @returns the `confidentiality` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getConfidentiality(): CodeableConcept {
    return this.confidentiality ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Confidentiality object value to the `confidentiality` property.
   *
   * @param value - the `confidentiality` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConfidentiality(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.confidentiality; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.confidentiality = value;
    } else {
      this.confidentiality = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `confidentiality` property exists and has a value; `false` otherwise
   */
  public hasConfidentiality(): boolean {
    return isDefined<CodeableConcept>(this.confidentiality) && !this.confidentiality.isEmpty();
  }

  /**
   * @returns the `strength` property value as a MedicinalProductIngredientSpecifiedSubstanceStrengthComponent array
   */
  public getStrength(): MedicinalProductIngredientSpecifiedSubstanceStrengthComponent[] {
    return this.strength ?? ([] as MedicinalProductIngredientSpecifiedSubstanceStrengthComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductIngredientSpecifiedSubstanceStrengthComponent array value to the `strength` property.
   *
   * @param value - the `strength` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStrength(value: MedicinalProductIngredientSpecifiedSubstanceStrengthComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductIngredientSpecifiedSubstanceStrengthComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength; Provided value array has an element that is not an instance of MedicinalProductIngredientSpecifiedSubstanceStrengthComponent.`;
      assertFhirTypeList<MedicinalProductIngredientSpecifiedSubstanceStrengthComponent>(value, MedicinalProductIngredientSpecifiedSubstanceStrengthComponent, optErrMsg);
      this.strength = value;
    } else {
      this.strength = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductIngredientSpecifiedSubstanceStrengthComponent value to the `strength` array property.
   *
   * @param value - the `strength` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStrength(value: MedicinalProductIngredientSpecifiedSubstanceStrengthComponent | undefined): this {
    if (isDefined<MedicinalProductIngredientSpecifiedSubstanceStrengthComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength; Provided element is not an instance of MedicinalProductIngredientSpecifiedSubstanceStrengthComponent.`;
      assertFhirType<MedicinalProductIngredientSpecifiedSubstanceStrengthComponent>(value, MedicinalProductIngredientSpecifiedSubstanceStrengthComponent, optErrMsg);
      this.initStrength();
      this.strength?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `strength` property exists and has a value; `false` otherwise
   */
  public hasStrength(): boolean {
    return isDefinedList<MedicinalProductIngredientSpecifiedSubstanceStrengthComponent>(this.strength) && this.strength.some((item: MedicinalProductIngredientSpecifiedSubstanceStrengthComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `strength` property
   */
  private initStrength(): void {
    if(!this.hasStrength()) {
      this.strength = [] as MedicinalProductIngredientSpecifiedSubstanceStrengthComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductIngredient.specifiedSubstance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.group,
      this.confidentiality,
      this.strength,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductIngredientSpecifiedSubstanceComponent {
    const dest = new MedicinalProductIngredientSpecifiedSubstanceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductIngredientSpecifiedSubstanceComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.group = this.group ? this.group.copy() : null;
    dest.confidentiality = this.confidentiality?.copy();
    const strengthList = copyListValues<MedicinalProductIngredientSpecifiedSubstanceStrengthComponent>(this.strength);
    dest.strength = strengthList.length === 0 ? undefined : strengthList;
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

    if (this.hasCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCode()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductIngredient.specifiedSubstance.code`);
    }

    if (this.hasGroup()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getGroup()!, 'group', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductIngredient.specifiedSubstance.group`);
    }

    if (this.hasConfidentiality()) {
      setFhirComplexJson(this.getConfidentiality(), 'confidentiality', jsonObj);
    }

    if (this.hasStrength()) {
      setFhirBackboneElementListJson(this.getStrength(), 'strength', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductIngredientSpecifiedSubstanceStrengthComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
 * - **Definition:** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductIngredient](http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient)
 */
export class MedicinalProductIngredientSpecifiedSubstanceStrengthComponent extends BackboneElement implements IBackboneElement {
  constructor(presentation: Ratio | null = null) {
    super();

    this.presentation = null;
    if (isDefined<Ratio>(presentation)) {
      this.setPresentation(presentation);
    }
  }

  /**
   * Parse the provided `MedicinalProductIngredientSpecifiedSubstanceStrengthComponent` JSON to instantiate the MedicinalProductIngredientSpecifiedSubstanceStrengthComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductIngredientSpecifiedSubstanceStrengthComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductIngredientSpecifiedSubstanceStrengthComponent
   * @returns MedicinalProductIngredientSpecifiedSubstanceStrengthComponent data model or undefined for `MedicinalProductIngredientSpecifiedSubstanceStrengthComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductIngredientSpecifiedSubstanceStrengthComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductIngredientSpecifiedSubstanceStrengthComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductIngredientSpecifiedSubstanceStrengthComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'presentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Ratio | undefined = Ratio.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPresentation(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'presentationLowLimit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Ratio | undefined = Ratio.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPresentationLowLimit(datatype);
    }

    fieldName = 'concentration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Ratio | undefined = Ratio.parse(classJsonObj[fieldName]!, sourceField);
      instance.setConcentration(datatype);
    }

    fieldName = 'concentrationLowLimit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Ratio | undefined = Ratio.parse(classJsonObj[fieldName]!, sourceField);
      instance.setConcentrationLowLimit(datatype);
    }

    fieldName = 'measurementPoint';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMeasurementPointElement(datatype);
    }

    fieldName = 'country';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCountry(datatype);
        }
      });
    }

    fieldName = 'referenceStrength';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent | undefined = MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addReferenceStrength(component);
        }
      });
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicinalProductIngredient.specifiedSubstance.strength.presentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item
   * - **Definition:** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private presentation: Ratio | null;

  /**
   * MedicinalProductIngredient.specifiedSubstance.strength.presentationLowLimit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit
   * - **Definition:** A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit.
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** If this is present it implies that the whole strength is expressed as a range, due to uncertainty or variation
   * - **isSummary:** true
   */
  private presentationLowLimit?: Ratio | undefined;

  /**
   * MedicinalProductIngredient.specifiedSubstance.strength.concentration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The strength per unitary volume (or mass)
   * - **Definition:** The strength per unitary volume (or mass).
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private concentration?: Ratio | undefined;

  /**
   * MedicinalProductIngredient.specifiedSubstance.strength.concentrationLowLimit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit
   * - **Definition:** A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit.
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** If this is present it implies that the whole strength is expressed as a range, due to uncertainty or variation
   * - **isSummary:** true
   */
  private concentrationLowLimit?: Ratio | undefined;

  /**
   * MedicinalProductIngredient.specifiedSubstance.strength.measurementPoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For when strength is measured at a particular point or distance
   * - **Definition:** For when strength is measured at a particular point or distance.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private measurementPoint?: StringType | undefined;

  /**
   * MedicinalProductIngredient.specifiedSubstance.strength.country Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The country or countries for which the strength range applies
   * - **Definition:** The country or countries for which the strength range applies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private country?: CodeableConcept[] | undefined;

  /**
   * MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Strength expressed in terms of a reference substance
   * - **Definition:** Strength expressed in terms of a reference substance.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private referenceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `presentation` property value as a Ratio object if defined; else null
   */
  public getPresentation(): Ratio | null {
    return this.presentation;
  }

  /**
   * Assigns the provided Ratio object value to the `presentation` property.
   *
   * @param value - the `presentation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPresentation(value: Ratio): this {
    assertIsDefined<Ratio>(value, `MedicinalProductIngredient.specifiedSubstance.strength.presentation is required`);
    const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.presentation; Provided element is not an instance of Ratio.`;
    assertFhirType<Ratio>(value, Ratio, optErrMsg);
    this.presentation = value;
    return this;
  }

  /**
   * @returns `true` if the `presentation` property exists and has a value; `false` otherwise
   */
  public hasPresentation(): boolean {
    return isDefined<Ratio>(this.presentation) && !this.presentation.isEmpty();
  }

  /**
   * @returns the `presentationLowLimit` property value as a Ratio object if defined; else an empty Ratio object
   */
  public getPresentationLowLimit(): Ratio {
    return this.presentationLowLimit ?? new Ratio();
  }

  /**
   * Assigns the provided PresentationLowLimit object value to the `presentationLowLimit` property.
   *
   * @param value - the `presentationLowLimit` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPresentationLowLimit(value: Ratio | undefined): this {
    if (isDefined<Ratio>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.presentationLowLimit; Provided element is not an instance of Ratio.`;
      assertFhirType<Ratio>(value, Ratio, optErrMsg);
      this.presentationLowLimit = value;
    } else {
      this.presentationLowLimit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `presentationLowLimit` property exists and has a value; `false` otherwise
   */
  public hasPresentationLowLimit(): boolean {
    return isDefined<Ratio>(this.presentationLowLimit) && !this.presentationLowLimit.isEmpty();
  }

  /**
   * @returns the `concentration` property value as a Ratio object if defined; else an empty Ratio object
   */
  public getConcentration(): Ratio {
    return this.concentration ?? new Ratio();
  }

  /**
   * Assigns the provided Concentration object value to the `concentration` property.
   *
   * @param value - the `concentration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConcentration(value: Ratio | undefined): this {
    if (isDefined<Ratio>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.concentration; Provided element is not an instance of Ratio.`;
      assertFhirType<Ratio>(value, Ratio, optErrMsg);
      this.concentration = value;
    } else {
      this.concentration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `concentration` property exists and has a value; `false` otherwise
   */
  public hasConcentration(): boolean {
    return isDefined<Ratio>(this.concentration) && !this.concentration.isEmpty();
  }

  /**
   * @returns the `concentrationLowLimit` property value as a Ratio object if defined; else an empty Ratio object
   */
  public getConcentrationLowLimit(): Ratio {
    return this.concentrationLowLimit ?? new Ratio();
  }

  /**
   * Assigns the provided ConcentrationLowLimit object value to the `concentrationLowLimit` property.
   *
   * @param value - the `concentrationLowLimit` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConcentrationLowLimit(value: Ratio | undefined): this {
    if (isDefined<Ratio>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.concentrationLowLimit; Provided element is not an instance of Ratio.`;
      assertFhirType<Ratio>(value, Ratio, optErrMsg);
      this.concentrationLowLimit = value;
    } else {
      this.concentrationLowLimit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `concentrationLowLimit` property exists and has a value; `false` otherwise
   */
  public hasConcentrationLowLimit(): boolean {
    return isDefined<Ratio>(this.concentrationLowLimit) && !this.concentrationLowLimit.isEmpty();
  }

  /**
   * @returns the `measurementPoint` property value as a StringType object if defined; else an empty StringType object
   */
  public getMeasurementPointElement(): StringType {
    return this.measurementPoint ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `measurementPoint` property.
   *
   * @param element - the `measurementPoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMeasurementPointElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.measurementPoint; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.measurementPoint = element;
    } else {
      this.measurementPoint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measurementPoint` property exists and has a value; `false` otherwise
   */
  public hasMeasurementPointElement(): boolean {
    return isDefined<StringType>(this.measurementPoint) && !this.measurementPoint.isEmpty();
  }

  /**
   * @returns the `measurementPoint` property value as a fhirString if defined; else undefined
   */
  public getMeasurementPoint(): fhirString | undefined {
    return this.measurementPoint?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `measurementPoint` property.
   *
   * @param value - the `measurementPoint` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMeasurementPoint(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.measurementPoint (${String(value)})`;
      this.measurementPoint = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.measurementPoint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measurementPoint` property exists and has a value; `false` otherwise
   */
  public hasMeasurementPoint(): boolean {
    return this.hasMeasurementPointElement();
  }

  /**
   * @returns the `country` property value as a CodeableConcept array
   */
  public getCountry(): CodeableConcept[] {
    return this.country ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `country` property.
   *
   * @param value - the `country` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCountry(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.country; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.country = value;
    } else {
      this.country = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `country` array property.
   *
   * @param value - the `country` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCountry(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.country; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCountry();
      this.country?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `country` property exists and has a value; `false` otherwise
   */
  public hasCountry(): boolean {
    return isDefinedList<CodeableConcept>(this.country) && this.country.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `country` property
   */
  private initCountry(): void {
    if(!this.hasCountry()) {
      this.country = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `referenceStrength` property value as a MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent array
   */
  public getReferenceStrength(): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent[] {
    return this.referenceStrength ?? ([] as MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent array value to the `referenceStrength` property.
   *
   * @param value - the `referenceStrength` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReferenceStrength(value: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength; Provided value array has an element that is not an instance of MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent.`;
      assertFhirTypeList<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent>(value, MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent, optErrMsg);
      this.referenceStrength = value;
    } else {
      this.referenceStrength = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent value to the `referenceStrength` array property.
   *
   * @param value - the `referenceStrength` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReferenceStrength(value: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent | undefined): this {
    if (isDefined<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength; Provided element is not an instance of MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent.`;
      assertFhirType<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent>(value, MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent, optErrMsg);
      this.initReferenceStrength();
      this.referenceStrength?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceStrength` property exists and has a value; `false` otherwise
   */
  public hasReferenceStrength(): boolean {
    return isDefinedList<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent>(this.referenceStrength) && this.referenceStrength.some((item: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `referenceStrength` property
   */
  private initReferenceStrength(): void {
    if(!this.hasReferenceStrength()) {
      this.referenceStrength = [] as MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductIngredient.specifiedSubstance.strength';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.presentation,
      this.presentationLowLimit,
      this.concentration,
      this.concentrationLowLimit,
      this.measurementPoint,
      this.country,
      this.referenceStrength,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductIngredientSpecifiedSubstanceStrengthComponent {
    const dest = new MedicinalProductIngredientSpecifiedSubstanceStrengthComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductIngredientSpecifiedSubstanceStrengthComponent): void {
    super.copyValues(dest);
    dest.presentation = this.presentation ? this.presentation.copy() : null;
    dest.presentationLowLimit = this.presentationLowLimit?.copy();
    dest.concentration = this.concentration?.copy();
    dest.concentrationLowLimit = this.concentrationLowLimit?.copy();
    dest.measurementPoint = this.measurementPoint?.copy();
    const countryList = copyListValues<CodeableConcept>(this.country);
    dest.country = countryList.length === 0 ? undefined : countryList;
    const referenceStrengthList = copyListValues<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent>(this.referenceStrength);
    dest.referenceStrength = referenceStrengthList.length === 0 ? undefined : referenceStrengthList;
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

    if (this.hasPresentation()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPresentation()!, 'presentation', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductIngredient.specifiedSubstance.strength.presentation`);
    }

    if (this.hasPresentationLowLimit()) {
      setFhirComplexJson(this.getPresentationLowLimit(), 'presentationLowLimit', jsonObj);
    }

    if (this.hasConcentration()) {
      setFhirComplexJson(this.getConcentration(), 'concentration', jsonObj);
    }

    if (this.hasConcentrationLowLimit()) {
      setFhirComplexJson(this.getConcentrationLowLimit(), 'concentrationLowLimit', jsonObj);
    }

    if (this.hasMeasurementPointElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMeasurementPointElement(), 'measurementPoint', jsonObj);
    }

    if (this.hasCountry()) {
      setFhirComplexListJson(this.getCountry(), 'country', jsonObj);
    }

    if (this.hasReferenceStrength()) {
      setFhirBackboneElementListJson(this.getReferenceStrength(), 'referenceStrength', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Strength expressed in terms of a reference substance
 * - **Definition:** Strength expressed in terms of a reference substance.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductIngredient](http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient)
 */
export class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent extends BackboneElement implements IBackboneElement {
  constructor(strength: Ratio | null = null) {
    super();

    this.strength = null;
    if (isDefined<Ratio>(strength)) {
      this.setStrength(strength);
    }
  }

  /**
   * Parse the provided `MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent` JSON to instantiate the MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent
   * @returns MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent data model or undefined for `MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'substance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubstance(datatype);
    }

    fieldName = 'strength';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Ratio | undefined = Ratio.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStrength(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'strengthLowLimit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Ratio | undefined = Ratio.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStrengthLowLimit(datatype);
    }

    fieldName = 'measurementPoint';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMeasurementPointElement(datatype);
    }

    fieldName = 'country';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCountry(datatype);
        }
      });
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.substance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relevant reference substance
   * - **Definition:** Relevant reference substance.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private substance?: CodeableConcept | undefined;

  /**
   * MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.strength Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Strength expressed in terms of a reference substance
   * - **Definition:** Strength expressed in terms of a reference substance.
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private strength: Ratio | null;

  /**
   * MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.strengthLowLimit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Strength expressed in terms of a reference substance
   * - **Definition:** Strength expressed in terms of a reference substance.
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private strengthLowLimit?: Ratio | undefined;

  /**
   * MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.measurementPoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For when strength is measured at a particular point or distance
   * - **Definition:** For when strength is measured at a particular point or distance.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private measurementPoint?: StringType | undefined;

  /**
   * MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.country Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The country or countries for which the strength range applies
   * - **Definition:** The country or countries for which the strength range applies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private country?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `substance` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSubstance(): CodeableConcept {
    return this.substance ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Substance object value to the `substance` property.
   *
   * @param value - the `substance` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubstance(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.substance; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.substance = value;
    } else {
      this.substance = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `substance` property exists and has a value; `false` otherwise
   */
  public hasSubstance(): boolean {
    return isDefined<CodeableConcept>(this.substance) && !this.substance.isEmpty();
  }

  /**
   * @returns the `strength` property value as a Ratio object if defined; else null
   */
  public getStrength(): Ratio | null {
    return this.strength;
  }

  /**
   * Assigns the provided Ratio object value to the `strength` property.
   *
   * @param value - the `strength` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStrength(value: Ratio): this {
    assertIsDefined<Ratio>(value, `MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.strength is required`);
    const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.strength; Provided element is not an instance of Ratio.`;
    assertFhirType<Ratio>(value, Ratio, optErrMsg);
    this.strength = value;
    return this;
  }

  /**
   * @returns `true` if the `strength` property exists and has a value; `false` otherwise
   */
  public hasStrength(): boolean {
    return isDefined<Ratio>(this.strength) && !this.strength.isEmpty();
  }

  /**
   * @returns the `strengthLowLimit` property value as a Ratio object if defined; else an empty Ratio object
   */
  public getStrengthLowLimit(): Ratio {
    return this.strengthLowLimit ?? new Ratio();
  }

  /**
   * Assigns the provided StrengthLowLimit object value to the `strengthLowLimit` property.
   *
   * @param value - the `strengthLowLimit` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStrengthLowLimit(value: Ratio | undefined): this {
    if (isDefined<Ratio>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.strengthLowLimit; Provided element is not an instance of Ratio.`;
      assertFhirType<Ratio>(value, Ratio, optErrMsg);
      this.strengthLowLimit = value;
    } else {
      this.strengthLowLimit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `strengthLowLimit` property exists and has a value; `false` otherwise
   */
  public hasStrengthLowLimit(): boolean {
    return isDefined<Ratio>(this.strengthLowLimit) && !this.strengthLowLimit.isEmpty();
  }

  /**
   * @returns the `measurementPoint` property value as a StringType object if defined; else an empty StringType object
   */
  public getMeasurementPointElement(): StringType {
    return this.measurementPoint ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `measurementPoint` property.
   *
   * @param element - the `measurementPoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMeasurementPointElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.measurementPoint; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.measurementPoint = element;
    } else {
      this.measurementPoint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measurementPoint` property exists and has a value; `false` otherwise
   */
  public hasMeasurementPointElement(): boolean {
    return isDefined<StringType>(this.measurementPoint) && !this.measurementPoint.isEmpty();
  }

  /**
   * @returns the `measurementPoint` property value as a fhirString if defined; else undefined
   */
  public getMeasurementPoint(): fhirString | undefined {
    return this.measurementPoint?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `measurementPoint` property.
   *
   * @param value - the `measurementPoint` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMeasurementPoint(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.measurementPoint (${String(value)})`;
      this.measurementPoint = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.measurementPoint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measurementPoint` property exists and has a value; `false` otherwise
   */
  public hasMeasurementPoint(): boolean {
    return this.hasMeasurementPointElement();
  }

  /**
   * @returns the `country` property value as a CodeableConcept array
   */
  public getCountry(): CodeableConcept[] {
    return this.country ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `country` property.
   *
   * @param value - the `country` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCountry(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.country; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.country = value;
    } else {
      this.country = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `country` array property.
   *
   * @param value - the `country` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCountry(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.country; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCountry();
      this.country?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `country` property exists and has a value; `false` otherwise
   */
  public hasCountry(): boolean {
    return isDefinedList<CodeableConcept>(this.country) && this.country.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `country` property
   */
  private initCountry(): void {
    if(!this.hasCountry()) {
      this.country = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.substance,
      this.strength,
      this.strengthLowLimit,
      this.measurementPoint,
      this.country,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent {
    const dest = new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthComponent): void {
    super.copyValues(dest);
    dest.substance = this.substance?.copy();
    dest.strength = this.strength ? this.strength.copy() : null;
    dest.strengthLowLimit = this.strengthLowLimit?.copy();
    dest.measurementPoint = this.measurementPoint?.copy();
    const countryList = copyListValues<CodeableConcept>(this.country);
    dest.country = countryList.length === 0 ? undefined : countryList;
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

    if (this.hasSubstance()) {
      setFhirComplexJson(this.getSubstance(), 'substance', jsonObj);
    }

    if (this.hasStrength()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getStrength()!, 'strength', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.strength`);
    }

    if (this.hasStrengthLowLimit()) {
      setFhirComplexJson(this.getStrengthLowLimit(), 'strengthLowLimit', jsonObj);
    }

    if (this.hasMeasurementPointElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMeasurementPointElement(), 'measurementPoint', jsonObj);
    }

    if (this.hasCountry()) {
      setFhirComplexListJson(this.getCountry(), 'country', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductIngredientSubstanceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The ingredient substance
 * - **Definition:** The ingredient substance.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductIngredient](http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient)
 */
export class MedicinalProductIngredientSubstanceComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `MedicinalProductIngredientSubstanceComponent` JSON to instantiate the MedicinalProductIngredientSubstanceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductIngredientSubstanceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductIngredientSubstanceComponent
   * @returns MedicinalProductIngredientSubstanceComponent data model or undefined for `MedicinalProductIngredientSubstanceComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductIngredientSubstanceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductIngredientSubstanceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductIngredientSubstanceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'strength';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductIngredientSpecifiedSubstanceStrengthComponent | undefined = MedicinalProductIngredientSpecifiedSubstanceStrengthComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStrength(component);
        }
      });
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicinalProductIngredient.substance.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The ingredient substance
   * - **Definition:** The ingredient substance.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * MedicinalProductIngredient.substance.strength Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
   * - **Definition:** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private strength?: MedicinalProductIngredientSpecifiedSubstanceStrengthComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else null
   */
  public getCode(): CodeableConcept | null {
    return this.code;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `MedicinalProductIngredient.substance.code is required`);
    const optErrMsg = `Invalid MedicinalProductIngredient.substance.code; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.code = value;
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `strength` property value as a MedicinalProductIngredientSpecifiedSubstanceStrengthComponent array
   */
  public getStrength(): MedicinalProductIngredientSpecifiedSubstanceStrengthComponent[] {
    return this.strength ?? ([] as MedicinalProductIngredientSpecifiedSubstanceStrengthComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductIngredientSpecifiedSubstanceStrengthComponent array value to the `strength` property.
   *
   * @param value - the `strength` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStrength(value: MedicinalProductIngredientSpecifiedSubstanceStrengthComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductIngredientSpecifiedSubstanceStrengthComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.substance.strength; Provided value array has an element that is not an instance of MedicinalProductIngredientSpecifiedSubstanceStrengthComponent.`;
      assertFhirTypeList<MedicinalProductIngredientSpecifiedSubstanceStrengthComponent>(value, MedicinalProductIngredientSpecifiedSubstanceStrengthComponent, optErrMsg);
      this.strength = value;
    } else {
      this.strength = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductIngredientSpecifiedSubstanceStrengthComponent value to the `strength` array property.
   *
   * @param value - the `strength` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStrength(value: MedicinalProductIngredientSpecifiedSubstanceStrengthComponent | undefined): this {
    if (isDefined<MedicinalProductIngredientSpecifiedSubstanceStrengthComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductIngredient.substance.strength; Provided element is not an instance of MedicinalProductIngredientSpecifiedSubstanceStrengthComponent.`;
      assertFhirType<MedicinalProductIngredientSpecifiedSubstanceStrengthComponent>(value, MedicinalProductIngredientSpecifiedSubstanceStrengthComponent, optErrMsg);
      this.initStrength();
      this.strength?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `strength` property exists and has a value; `false` otherwise
   */
  public hasStrength(): boolean {
    return isDefinedList<MedicinalProductIngredientSpecifiedSubstanceStrengthComponent>(this.strength) && this.strength.some((item: MedicinalProductIngredientSpecifiedSubstanceStrengthComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `strength` property
   */
  private initStrength(): void {
    if(!this.hasStrength()) {
      this.strength = [] as MedicinalProductIngredientSpecifiedSubstanceStrengthComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductIngredient.substance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.strength,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductIngredientSubstanceComponent {
    const dest = new MedicinalProductIngredientSubstanceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductIngredientSubstanceComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    const strengthList = copyListValues<MedicinalProductIngredientSpecifiedSubstanceStrengthComponent>(this.strength);
    dest.strength = strengthList.length === 0 ? undefined : strengthList;
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

    if (this.hasCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCode()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductIngredient.substance.code`);
    }

    if (this.hasStrength()) {
      setFhirBackboneElementListJson(this.getStrength(), 'strength', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
