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
 * ManufacturedItemDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition
 * StructureDefinition.name: ManufacturedItemDefinition
 * StructureDefinition.description: The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.
 * StructureDefinition.fhirVersion: 4.3.0
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
  DateType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Attachment, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ManufacturedItemDefinition Class
 *
 * @remarks
 * The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.
 *
 * **FHIR Specification**
 * - **Short:** The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product
 * - **Definition:** The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR ManufacturedItemDefinition](http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition)
 */
export class ManufacturedItemDefinition extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, manufacturedDoseForm: CodeableConcept | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'ManufacturedItemDefinition.status',
    );

    this.manufacturedDoseForm = null;
    if (isDefined<CodeableConcept>(manufacturedDoseForm)) {
      this.setManufacturedDoseForm(manufacturedDoseForm);
    }
  }

  /**
   * Parse the provided `ManufacturedItemDefinition` JSON to instantiate the ManufacturedItemDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `ManufacturedItemDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ManufacturedItemDefinition
   * @returns ManufacturedItemDefinition data model or undefined for `ManufacturedItemDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ManufacturedItemDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ManufacturedItemDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ManufacturedItemDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ManufacturedItemDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addIdentifier(datatype);
          }
        });
      }
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setStatus(null);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      instance.setStatus(null);
    }

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

    fieldName = 'manufacturer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addManufacturer(datatype);
          }
        });
      }
  }

    fieldName = 'ingredient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addIngredient(datatype);
          }
        });
      }
    }

    fieldName = 'property';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ManufacturedItemDefinitionPropertyComponent | undefined = ManufacturedItemDefinitionPropertyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addProperty(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * ManufacturedItemDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique identifier
   * - **Definition:** Unique identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * ManufacturedItemDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this item. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of manufactured items that are appropriate for use versus not.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This is labeled as &quot;Is Modifier&quot; because applications should not use a retired {{title}} without due consideration
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * ManufacturedItemDefinition.manufacturedDoseForm Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dose form as manufactured (before any necessary transformation)
   * - **Definition:** Dose form as manufactured and before any transformation into the pharmaceutical product.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private manufacturedDoseForm: CodeableConcept | null;

  /**
   * ManufacturedItemDefinition.unitOfPresentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The "real world" units in which the quantity of the item is described
   * - **Definition:** The "real world" units in which the quantity of the manufactured item is described.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private unitOfPresentation?: CodeableConcept | undefined;

  /**
   * ManufacturedItemDefinition.manufacturer Element
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
   * ManufacturedItemDefinition.ingredient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The ingredients of this manufactured item. Only needed if these are not specified by incoming references from the Ingredient resource
   * - **Definition:** The ingredients of this manufactured item. This is only needed if the ingredients are not specified by incoming references from the Ingredient resource.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private ingredient?: CodeableConcept[] | undefined;

  /**
   * ManufacturedItemDefinition.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General characteristics of this item
   * - **Definition:** General characteristics of this item.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private property?: ManufacturedItemDefinitionPropertyComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `identifier` property value as a Identifier array
   */
  public getIdentifier(): Identifier[] {
    return this.identifier ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `identifier` property.
   *
   * @param value - the `identifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIdentifier(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.identifier = value;
    } else {
      this.identifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `identifier` array property.
   *
   * @param value - the `identifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.identifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initIdentifier();
      this.identifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `identifier` property exists and has a value; `false` otherwise
   */
  public hasIdentifier(): boolean {
    return isDefinedList<Identifier>(this.identifier) && this.identifier.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `identifier` property
   */
  private initIdentifier(): void {
    if(!this.hasIdentifier()) {
      this.identifier = [] as Identifier[];
    }
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public getStatusEnumType(): EnumCodeType | null {
    return this.status;
  }

  /**
   * Assigns the provided EnumCodeType value to the `status` property.
   *
   * @param enumType - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ManufacturedItemDefinition.status`;
      assertEnumCodeType<PublicationStatusEnum>(enumType, PublicationStatusEnum, errMsgPrefix);
      this.status = enumType;
    } else {
      this.status = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatusEnumType(): boolean {
    return isDefined<EnumCodeType>(this.status) && !this.status.isEmpty() && this.status.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `status` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public getStatusElement(): CodeType | null {
    if (this.status === null) {
      return null;
    }
    return this.status as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `status` property.
   *
   * @param element - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.publicationStatusEnum);
    } else {
      this.status = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatusElement(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `status` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public getStatus(): fhirCode | null {
    if (this.status === null) {
      return null;
    }
    return this.status.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `status` property.
   *
   * @param value - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.publicationStatusEnum);
    } else {
      this.status = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

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
      const optErrMsg = `Invalid ManufacturedItemDefinition.manufacturedDoseForm; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ManufacturedItemDefinition.unitOfPresentation; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `manufacturer` property value as a Reference array
   */
  public getManufacturer(): Reference[] {
    return this.manufacturer ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `manufacturer` property.
   *
   * @decorator `@ReferenceTargets('ManufacturedItemDefinition.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ManufacturedItemDefinition.manufacturer', [
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
   * @decorator `@ReferenceTargets('ManufacturedItemDefinition.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ManufacturedItemDefinition.manufacturer', [
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
   * @returns the `ingredient` property value as a CodeableConcept array
   */
  public getIngredient(): CodeableConcept[] {
    return this.ingredient ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `ingredient` property.
   *
   * @param value - the `ingredient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIngredient(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.ingredient; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.ingredient = value;
    } else {
      this.ingredient = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `ingredient` array property.
   *
   * @param value - the `ingredient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIngredient(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.ingredient; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initIngredient();
      this.ingredient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `ingredient` property exists and has a value; `false` otherwise
   */
  public hasIngredient(): boolean {
    return isDefinedList<CodeableConcept>(this.ingredient) && this.ingredient.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `ingredient` property
   */
  private initIngredient(): void {
    if(!this.hasIngredient()) {
      this.ingredient = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `property` property value as a ManufacturedItemDefinitionPropertyComponent array
   */
  public getProperty(): ManufacturedItemDefinitionPropertyComponent[] {
    return this.property ?? ([] as ManufacturedItemDefinitionPropertyComponent[]);
  }

  /**
   * Assigns the provided ManufacturedItemDefinitionPropertyComponent array value to the `property` property.
   *
   * @param value - the `property` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProperty(value: ManufacturedItemDefinitionPropertyComponent[] | undefined): this {
    if (isDefinedList<ManufacturedItemDefinitionPropertyComponent>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.property; Provided value array has an element that is not an instance of ManufacturedItemDefinitionPropertyComponent.`;
      assertFhirTypeList<ManufacturedItemDefinitionPropertyComponent>(value, ManufacturedItemDefinitionPropertyComponent, optErrMsg);
      this.property = value;
    } else {
      this.property = undefined;
    }
    return this;
  }

  /**
   * Add the provided ManufacturedItemDefinitionPropertyComponent value to the `property` array property.
   *
   * @param value - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProperty(value: ManufacturedItemDefinitionPropertyComponent | undefined): this {
    if (isDefined<ManufacturedItemDefinitionPropertyComponent>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.property; Provided element is not an instance of ManufacturedItemDefinitionPropertyComponent.`;
      assertFhirType<ManufacturedItemDefinitionPropertyComponent>(value, ManufacturedItemDefinitionPropertyComponent, optErrMsg);
      this.initProperty();
      this.property?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return isDefinedList<ManufacturedItemDefinitionPropertyComponent>(this.property) && this.property.some((item: ManufacturedItemDefinitionPropertyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `property` property
   */
  private initProperty(): void {
    if(!this.hasProperty()) {
      this.property = [] as ManufacturedItemDefinitionPropertyComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ManufacturedItemDefinition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.manufacturedDoseForm,
      this.unitOfPresentation,
      this.manufacturer,
      this.ingredient,
      this.property,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.manufacturedDoseForm, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ManufacturedItemDefinition {
    const dest = new ManufacturedItemDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ManufacturedItemDefinition): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.manufacturedDoseForm = this.manufacturedDoseForm ? this.manufacturedDoseForm.copy() : null;
    dest.unitOfPresentation = this.unitOfPresentation?.copy();
    const manufacturerList = copyListValues<Reference>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
    const ingredientList = copyListValues<CodeableConcept>(this.ingredient);
    dest.ingredient = ingredientList.length === 0 ? undefined : ingredientList;
    const propertyList = copyListValues<ManufacturedItemDefinitionPropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
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
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasManufacturedDoseForm()) {
      setFhirComplexJson(this.getManufacturedDoseForm(), 'manufacturedDoseForm', jsonObj);
    }

    if (this.hasUnitOfPresentation()) {
      setFhirComplexJson(this.getUnitOfPresentation(), 'unitOfPresentation', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexListJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasIngredient()) {
      setFhirComplexListJson(this.getIngredient(), 'ingredient', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirBackboneElementListJson(this.getProperty(), 'property', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ManufacturedItemDefinitionPropertyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** General characteristics of this item
 * - **Definition:** General characteristics of this item.
 *
 * @category Data Models: Resource
 * @see [FHIR ManufacturedItemDefinition](http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition)
 */
export class ManufacturedItemDefinitionPropertyComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `ManufacturedItemDefinitionPropertyComponent` JSON to instantiate the ManufacturedItemDefinitionPropertyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ManufacturedItemDefinitionPropertyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ManufacturedItemDefinitionPropertyComponent
   * @returns ManufacturedItemDefinitionPropertyComponent data model or undefined for `ManufacturedItemDefinitionPropertyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ManufacturedItemDefinitionPropertyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ManufacturedItemDefinitionPropertyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ManufacturedItemDefinitionPropertyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = ManufacturedItemDefinitionPropertyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ManufacturedItemDefinitionPropertyComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setType(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setValue(value);

    return instance;
  }

  /**
   * ManufacturedItemDefinition.property.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A code expressing the type of characteristic
   * - **Definition:** A code expressing the type of characteristic.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * ManufacturedItemDefinition.property.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ManufacturedItemDefinition.property.value[x]', ['CodeableConcept','Quantity','date','boolean','Attachment',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A value for the characteristic
   * - **Definition:** A value for the characteristic.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Quantity',
   *     'date',
   *     'boolean',
   *     'Attachment',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('ManufacturedItemDefinition.property.value[x]',[
    'CodeableConcept',
    'Quantity',
    'date',
    'boolean',
    'Attachment',
  ])
  private value?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getType(): CodeableConcept {
    return this.type_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.property.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = null;
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
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('ManufacturedItemDefinition.property.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ManufacturedItemDefinition.property.value[x]')
  public setValue(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.value = value;
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefined<IDataType>(this.value) && !this.value.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else undefined
   */
  public getValueCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for ManufacturedItemDefinition.property.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasValueCodeableConcept(): boolean {
    return this.hasValue() && this.value instanceof CodeableConcept;
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else undefined
   */
  public getValueQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for ManufacturedItemDefinition.property.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a DateType object if defined; else undefined
   */
  public getValueDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ManufacturedItemDefinition.property.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a DateType and has a value; `false` otherwise
   */
  public hasValueDateType(): boolean {
    return this.hasValue() && this.value instanceof DateType;
  }

  /**
   * @returns the `value` property value as a BooleanType object if defined; else undefined
   */
  public getValueBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ManufacturedItemDefinition.property.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && this.value instanceof BooleanType;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else undefined
   */
  public getValueAttachment(): Attachment | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for ManufacturedItemDefinition.property.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && this.value instanceof Attachment;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ManufacturedItemDefinition.property';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ManufacturedItemDefinitionPropertyComponent {
    const dest = new ManufacturedItemDefinitionPropertyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ManufacturedItemDefinitionPropertyComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.value = this.value?.copy() as IDataType;
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

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    return jsonObj;
  }
}
