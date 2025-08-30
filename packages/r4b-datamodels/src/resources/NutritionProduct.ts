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
 * NutritionProduct Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/NutritionProduct
 * StructureDefinition.name: NutritionProduct
 * StructureDefinition.description: A food or fluid product that is consumed by patients.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  Base64BinaryType,
  BooleanType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
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
import { Annotation, Attachment, CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Ratio, Reference } from '../complex-types/complex-datatypes';
import { NutritionproductStatusEnum } from '../code-systems/NutritionproductStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * NutritionProduct Class
 *
 * @remarks
 * A food or fluid product that is consumed by patients.
 *
 * **FHIR Specification**
 * - **Short:** A product used for nutritional purposes
 * - **Definition:** A food or fluid product that is consumed by patients.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionProduct](http://hl7.org/fhir/StructureDefinition/NutritionProduct)
 */
export class NutritionProduct extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.nutritionproductStatusEnum = new NutritionproductStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<NutritionproductStatusEnum>(
      status,
      NutritionproductStatusEnum,
      this.nutritionproductStatusEnum,
      'NutritionProduct.status',
    );
  }

  /**
   * Parse the provided `NutritionProduct` JSON to instantiate the NutritionProduct data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionProduct`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionProduct
   * @returns NutritionProduct data model or undefined for `NutritionProduct`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): NutritionProduct | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionProduct';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionProduct();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'NutritionProduct');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

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

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCategory(datatype);
        }
      });
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
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

    fieldName = 'nutrient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: NutritionProductNutrientComponent | undefined = NutritionProductNutrientComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addNutrient(component);
        }
      });
    }

    fieldName = 'ingredient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: NutritionProductIngredientComponent | undefined = NutritionProductIngredientComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addIngredient(component);
        }
      });
    }

    fieldName = 'knownAllergen';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addKnownAllergen(datatype);
        }
      });
    }

    fieldName = 'productCharacteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: NutritionProductProductCharacteristicComponent | undefined = NutritionProductProductCharacteristicComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProductCharacteristic(component);
        }
      });
    }

    fieldName = 'instance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: NutritionProductInstanceComponent | undefined = NutritionProductInstanceComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setInstance(component);
    }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNote(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: NutritionproductStatus
   *
   * @see {@link NutritionproductStatusEnum }
   */
  private readonly nutritionproductStatusEnum: NutritionproductStatusEnum;

  /**
   * NutritionProduct.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | inactive | entered-in-error
   * - **Definition:** The current state of the product.
   * - **Comment:** Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link NutritionproductStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * NutritionProduct.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A category or class of the nutrition product (halal, kosher, gluten free, vegan, etc)
   * - **Definition:** Nutrition products can have different classifications - according to its nutritional properties, preparation methods, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * NutritionProduct.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A code designating a specific type of nutritional product
   * - **Definition:** The code assigned to the product, for example a manufacturer number or other terminology.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * NutritionProduct.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Manufacturer, representative or officially responsible for the product
   * - **Definition:** The organisation (manufacturer, representative or legal authorisation holder) that is responsible for the device.
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
   * NutritionProduct.nutrient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The product\'s nutritional information expressed by the nutrients
   * - **Definition:** The product\'s nutritional information expressed by the nutrients.
   * - **Comment:** Note: This is a business identifier, not a resource identifier (see [discussion](https://hl7.org/fhir/resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   * - **Requirements:** Allows identification of the {{title}} as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private nutrient?: NutritionProductNutrientComponent[] | undefined;

  /**
   * NutritionProduct.ingredient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Ingredients contained in this product
   * - **Definition:** Ingredients contained in this product.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private ingredient?: NutritionProductIngredientComponent[] | undefined;

  /**
   * NutritionProduct.knownAllergen Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Known or suspected allergens that are a part of this product
   * - **Definition:** Allergens that are known or suspected to be a part of this nutrition product.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private knownAllergen?: CodeableReference[] | undefined;

  /**
   * NutritionProduct.productCharacteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifies descriptive properties of the nutrition product
   * - **Definition:** Specifies descriptive properties of the nutrition product.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productCharacteristic?: NutritionProductProductCharacteristicComponent[] | undefined;

  /**
   * NutritionProduct.instance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** One or several physical instances or occurrences of the nutrition product
   * - **Definition:** Conveys instance-level information about this product item. One or several physical, countable instances or occurrences of the product.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instance_?: NutritionProductInstanceComponent | undefined;

  /**
   * NutritionProduct.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments made about the product
   * - **Definition:** Comments made about the product.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link NutritionproductStatusEnum }
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
   * @see CodeSystem Enumeration: {@link NutritionproductStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid NutritionProduct.status`;
      assertEnumCodeType<NutritionproductStatusEnum>(enumType, NutritionproductStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link NutritionproductStatusEnum }
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
   * @see CodeSystem Enumeration: {@link NutritionproductStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid NutritionProduct.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.nutritionproductStatusEnum);
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
   * @see CodeSystem Enumeration: {@link NutritionproductStatusEnum }
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
   * @see CodeSystem Enumeration: {@link NutritionproductStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid NutritionProduct.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.nutritionproductStatusEnum);
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
   * @returns the `category` property value as a CodeableConcept array
   */
  public getCategory(): CodeableConcept[] {
    return this.category ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `category` property.
   *
   * @param value - the `category` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionProduct.category; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `category` array property.
   *
   * @param value - the `category` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid NutritionProduct.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCategory();
      this.category?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefinedList<CodeableConcept>(this.category) && this.category.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `category` property
   */
  private initCategory(): void {
    if(!this.hasCategory()) {
      this.category = [] as CodeableConcept[];
    }
  }

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
      const optErrMsg = `Invalid NutritionProduct.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `manufacturer` property value as a Reference array
   */
  public getManufacturer(): Reference[] {
    return this.manufacturer ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `manufacturer` property.
   *
   * @decorator `@ReferenceTargets('NutritionProduct.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionProduct.manufacturer', [
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
   * @decorator `@ReferenceTargets('NutritionProduct.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('NutritionProduct.manufacturer', [
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
   * @returns the `nutrient` property value as a NutritionProductNutrientComponent array
   */
  public getNutrient(): NutritionProductNutrientComponent[] {
    return this.nutrient ?? ([] as NutritionProductNutrientComponent[]);
  }

  /**
   * Assigns the provided NutritionProductNutrientComponent array value to the `nutrient` property.
   *
   * @param value - the `nutrient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNutrient(value: NutritionProductNutrientComponent[] | undefined): this {
    if (isDefinedList<NutritionProductNutrientComponent>(value)) {
      const optErrMsg = `Invalid NutritionProduct.nutrient; Provided value array has an element that is not an instance of NutritionProductNutrientComponent.`;
      assertFhirTypeList<NutritionProductNutrientComponent>(value, NutritionProductNutrientComponent, optErrMsg);
      this.nutrient = value;
    } else {
      this.nutrient = undefined;
    }
    return this;
  }

  /**
   * Add the provided NutritionProductNutrientComponent value to the `nutrient` array property.
   *
   * @param value - the `nutrient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNutrient(value: NutritionProductNutrientComponent | undefined): this {
    if (isDefined<NutritionProductNutrientComponent>(value)) {
      const optErrMsg = `Invalid NutritionProduct.nutrient; Provided element is not an instance of NutritionProductNutrientComponent.`;
      assertFhirType<NutritionProductNutrientComponent>(value, NutritionProductNutrientComponent, optErrMsg);
      this.initNutrient();
      this.nutrient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `nutrient` property exists and has a value; `false` otherwise
   */
  public hasNutrient(): boolean {
    return isDefinedList<NutritionProductNutrientComponent>(this.nutrient) && this.nutrient.some((item: NutritionProductNutrientComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `nutrient` property
   */
  private initNutrient(): void {
    if(!this.hasNutrient()) {
      this.nutrient = [] as NutritionProductNutrientComponent[];
    }
  }

  /**
   * @returns the `ingredient` property value as a NutritionProductIngredientComponent array
   */
  public getIngredient(): NutritionProductIngredientComponent[] {
    return this.ingredient ?? ([] as NutritionProductIngredientComponent[]);
  }

  /**
   * Assigns the provided NutritionProductIngredientComponent array value to the `ingredient` property.
   *
   * @param value - the `ingredient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIngredient(value: NutritionProductIngredientComponent[] | undefined): this {
    if (isDefinedList<NutritionProductIngredientComponent>(value)) {
      const optErrMsg = `Invalid NutritionProduct.ingredient; Provided value array has an element that is not an instance of NutritionProductIngredientComponent.`;
      assertFhirTypeList<NutritionProductIngredientComponent>(value, NutritionProductIngredientComponent, optErrMsg);
      this.ingredient = value;
    } else {
      this.ingredient = undefined;
    }
    return this;
  }

  /**
   * Add the provided NutritionProductIngredientComponent value to the `ingredient` array property.
   *
   * @param value - the `ingredient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIngredient(value: NutritionProductIngredientComponent | undefined): this {
    if (isDefined<NutritionProductIngredientComponent>(value)) {
      const optErrMsg = `Invalid NutritionProduct.ingredient; Provided element is not an instance of NutritionProductIngredientComponent.`;
      assertFhirType<NutritionProductIngredientComponent>(value, NutritionProductIngredientComponent, optErrMsg);
      this.initIngredient();
      this.ingredient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `ingredient` property exists and has a value; `false` otherwise
   */
  public hasIngredient(): boolean {
    return isDefinedList<NutritionProductIngredientComponent>(this.ingredient) && this.ingredient.some((item: NutritionProductIngredientComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `ingredient` property
   */
  private initIngredient(): void {
    if(!this.hasIngredient()) {
      this.ingredient = [] as NutritionProductIngredientComponent[];
    }
  }

  /**
   * @returns the `knownAllergen` property value as a CodeableReference array
   */
  public getKnownAllergen(): CodeableReference[] {
    return this.knownAllergen ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `knownAllergen` property.
   *
   * @param value - the `knownAllergen` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setKnownAllergen(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid NutritionProduct.knownAllergen; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.knownAllergen = value;
    } else {
      this.knownAllergen = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `knownAllergen` array property.
   *
   * @param value - the `knownAllergen` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addKnownAllergen(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid NutritionProduct.knownAllergen; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initKnownAllergen();
      this.knownAllergen?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `knownAllergen` property exists and has a value; `false` otherwise
   */
  public hasKnownAllergen(): boolean {
    return isDefinedList<CodeableReference>(this.knownAllergen) && this.knownAllergen.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `knownAllergen` property
   */
  private initKnownAllergen(): void {
    if(!this.hasKnownAllergen()) {
      this.knownAllergen = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `productCharacteristic` property value as a NutritionProductProductCharacteristicComponent array
   */
  public getProductCharacteristic(): NutritionProductProductCharacteristicComponent[] {
    return this.productCharacteristic ?? ([] as NutritionProductProductCharacteristicComponent[]);
  }

  /**
   * Assigns the provided NutritionProductProductCharacteristicComponent array value to the `productCharacteristic` property.
   *
   * @param value - the `productCharacteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductCharacteristic(value: NutritionProductProductCharacteristicComponent[] | undefined): this {
    if (isDefinedList<NutritionProductProductCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid NutritionProduct.productCharacteristic; Provided value array has an element that is not an instance of NutritionProductProductCharacteristicComponent.`;
      assertFhirTypeList<NutritionProductProductCharacteristicComponent>(value, NutritionProductProductCharacteristicComponent, optErrMsg);
      this.productCharacteristic = value;
    } else {
      this.productCharacteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided NutritionProductProductCharacteristicComponent value to the `productCharacteristic` array property.
   *
   * @param value - the `productCharacteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProductCharacteristic(value: NutritionProductProductCharacteristicComponent | undefined): this {
    if (isDefined<NutritionProductProductCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid NutritionProduct.productCharacteristic; Provided element is not an instance of NutritionProductProductCharacteristicComponent.`;
      assertFhirType<NutritionProductProductCharacteristicComponent>(value, NutritionProductProductCharacteristicComponent, optErrMsg);
      this.initProductCharacteristic();
      this.productCharacteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `productCharacteristic` property exists and has a value; `false` otherwise
   */
  public hasProductCharacteristic(): boolean {
    return isDefinedList<NutritionProductProductCharacteristicComponent>(this.productCharacteristic) && this.productCharacteristic.some((item: NutritionProductProductCharacteristicComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `productCharacteristic` property
   */
  private initProductCharacteristic(): void {
    if(!this.hasProductCharacteristic()) {
      this.productCharacteristic = [] as NutritionProductProductCharacteristicComponent[];
    }
  }

  /**
   * @returns the `instance_` property value as a NutritionProductInstanceComponent object if defined; else an empty NutritionProductInstanceComponent object
   */
  public getInstance(): NutritionProductInstanceComponent {
    return this.instance_ ?? new NutritionProductInstanceComponent();
  }

  /**
   * Assigns the provided Instance object value to the `instance_` property.
   *
   * @param value - the `instance_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInstance(value: NutritionProductInstanceComponent | undefined): this {
    if (isDefined<NutritionProductInstanceComponent>(value)) {
      const optErrMsg = `Invalid NutritionProduct.instance; Provided element is not an instance of NutritionProductInstanceComponent.`;
      assertFhirType<NutritionProductInstanceComponent>(value, NutritionProductInstanceComponent, optErrMsg);
      this.instance_ = value;
    } else {
      this.instance_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instance_` property exists and has a value; `false` otherwise
   */
  public hasInstance(): boolean {
    return isDefined<NutritionProductInstanceComponent>(this.instance_) && !this.instance_.isEmpty();
  }

  /**
   * @returns the `note` property value as a Annotation array
   */
  public getNote(): Annotation[] {
    return this.note ?? ([] as Annotation[]);
  }

  /**
   * Assigns the provided Annotation array value to the `note` property.
   *
   * @param value - the `note` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNote(value: Annotation[] | undefined): this {
    if (isDefinedList<Annotation>(value)) {
      const optErrMsg = `Invalid NutritionProduct.note; Provided value array has an element that is not an instance of Annotation.`;
      assertFhirTypeList<Annotation>(value, Annotation, optErrMsg);
      this.note = value;
    } else {
      this.note = undefined;
    }
    return this;
  }

  /**
   * Add the provided Annotation value to the `note` array property.
   *
   * @param value - the `note` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNote(value: Annotation | undefined): this {
    if (isDefined<Annotation>(value)) {
      const optErrMsg = `Invalid NutritionProduct.note; Provided element is not an instance of Annotation.`;
      assertFhirType<Annotation>(value, Annotation, optErrMsg);
      this.initNote();
      this.note?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `note` property exists and has a value; `false` otherwise
   */
  public hasNote(): boolean {
    return isDefinedList<Annotation>(this.note) && this.note.some((item: Annotation) => !item.isEmpty());
  }

  /**
   * Initialize the `note` property
   */
  private initNote(): void {
    if(!this.hasNote()) {
      this.note = [] as Annotation[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionProduct';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.status,
      this.category,
      this.code,
      this.manufacturer,
      this.nutrient,
      this.ingredient,
      this.knownAllergen,
      this.productCharacteristic,
      this.instance_,
      this.note,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionProduct {
    const dest = new NutritionProduct();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionProduct): void {
    super.copyValues(dest);
    dest.status = this.status ? this.status.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.code = this.code?.copy();
    const manufacturerList = copyListValues<Reference>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
    const nutrientList = copyListValues<NutritionProductNutrientComponent>(this.nutrient);
    dest.nutrient = nutrientList.length === 0 ? undefined : nutrientList;
    const ingredientList = copyListValues<NutritionProductIngredientComponent>(this.ingredient);
    dest.ingredient = ingredientList.length === 0 ? undefined : ingredientList;
    const knownAllergenList = copyListValues<CodeableReference>(this.knownAllergen);
    dest.knownAllergen = knownAllergenList.length === 0 ? undefined : knownAllergenList;
    const productCharacteristicList = copyListValues<NutritionProductProductCharacteristicComponent>(this.productCharacteristic);
    dest.productCharacteristic = productCharacteristicList.length === 0 ? undefined : productCharacteristicList;
    dest.instance_ = this.instance_?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexListJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasNutrient()) {
      setFhirBackboneElementListJson(this.getNutrient(), 'nutrient', jsonObj);
    }

    if (this.hasIngredient()) {
      setFhirBackboneElementListJson(this.getIngredient(), 'ingredient', jsonObj);
    }

    if (this.hasKnownAllergen()) {
      setFhirComplexListJson(this.getKnownAllergen(), 'knownAllergen', jsonObj);
    }

    if (this.hasProductCharacteristic()) {
      setFhirBackboneElementListJson(this.getProductCharacteristic(), 'productCharacteristic', jsonObj);
    }

    if (this.hasInstance()) {
      setFhirBackboneElementJson(this.getInstance(), 'instance', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * NutritionProductNutrientComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The product\'s nutritional information expressed by the nutrients
 * - **Definition:** The product\'s nutritional information expressed by the nutrients.
 * - **Comment:** Note: This is a business identifier, not a resource identifier (see [discussion](https://hl7.org/fhir/resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
 * - **Requirements:** Allows identification of the {{title}} as it is known by various participating systems and in a way that remains consistent across servers.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionProduct](http://hl7.org/fhir/StructureDefinition/NutritionProduct)
 */
export class NutritionProductNutrientComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `NutritionProductNutrientComponent` JSON to instantiate the NutritionProductNutrientComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionProductNutrientComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionProductNutrientComponent
   * @returns NutritionProductNutrientComponent data model or undefined for `NutritionProductNutrientComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionProductNutrientComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionProductNutrientComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionProductNutrientComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setItem(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Ratio | undefined = Ratio.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAmount(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * NutritionProduct.nutrient.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The (relevant) nutrients in the product
   * - **Definition:** The (relevant) nutrients in the product.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item?: CodeableReference | undefined;

  /**
   * NutritionProduct.nutrient.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The amount of nutrient expressed in one or more units: X per pack / per serving / per dose
   * - **Definition:** The amount of nutrient expressed in one or more units: X per pack / per serving / per dose.
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private amount?: Ratio[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `item` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getItem(): CodeableReference {
    return this.item ?? new CodeableReference();
  }

  /**
   * Assigns the provided Item object value to the `item` property.
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid NutritionProduct.nutrient.item; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.item = value;
    } else {
      this.item = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefined<CodeableReference>(this.item) && !this.item.isEmpty();
  }

  /**
   * @returns the `amount` property value as a Ratio array
   */
  public getAmount(): Ratio[] {
    return this.amount ?? ([] as Ratio[]);
  }

  /**
   * Assigns the provided Ratio array value to the `amount` property.
   *
   * @param value - the `amount` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Ratio[] | undefined): this {
    if (isDefinedList<Ratio>(value)) {
      const optErrMsg = `Invalid NutritionProduct.nutrient.amount; Provided value array has an element that is not an instance of Ratio.`;
      assertFhirTypeList<Ratio>(value, Ratio, optErrMsg);
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * Add the provided Ratio value to the `amount` array property.
   *
   * @param value - the `amount` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAmount(value: Ratio | undefined): this {
    if (isDefined<Ratio>(value)) {
      const optErrMsg = `Invalid NutritionProduct.nutrient.amount; Provided element is not an instance of Ratio.`;
      assertFhirType<Ratio>(value, Ratio, optErrMsg);
      this.initAmount();
      this.amount?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefinedList<Ratio>(this.amount) && this.amount.some((item: Ratio) => !item.isEmpty());
  }

  /**
   * Initialize the `amount` property
   */
  private initAmount(): void {
    if(!this.hasAmount()) {
      this.amount = [] as Ratio[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionProduct.nutrient';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.item,
      this.amount,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionProductNutrientComponent {
    const dest = new NutritionProductNutrientComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionProductNutrientComponent): void {
    super.copyValues(dest);
    dest.item = this.item?.copy();
    const amountList = copyListValues<Ratio>(this.amount);
    dest.amount = amountList.length === 0 ? undefined : amountList;
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

    if (this.hasItem()) {
      setFhirComplexJson(this.getItem(), 'item', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexListJson(this.getAmount(), 'amount', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * NutritionProductIngredientComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Ingredients contained in this product
 * - **Definition:** Ingredients contained in this product.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionProduct](http://hl7.org/fhir/StructureDefinition/NutritionProduct)
 */
export class NutritionProductIngredientComponent extends BackboneElement implements IBackboneElement {
  constructor(item: CodeableReference | null = null) {
    super();

    this.item = null;
    if (isDefined<CodeableReference>(item)) {
      this.setItem(item);
    }
  }

  /**
   * Parse the provided `NutritionProductIngredientComponent` JSON to instantiate the NutritionProductIngredientComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionProductIngredientComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionProductIngredientComponent
   * @returns NutritionProductIngredientComponent data model or undefined for `NutritionProductIngredientComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionProductIngredientComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionProductIngredientComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionProductIngredientComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setItem(null);
      } else {
        instance.setItem(datatype);
      }
    } else {
      instance.setItem(null);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Ratio | undefined = Ratio.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAmount(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * NutritionProduct.ingredient.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The ingredient contained in the product
   * - **Definition:** The ingredient contained in the product.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/NutritionProduct',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private item: CodeableReference | null;

  /**
   * NutritionProduct.ingredient.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The amount of ingredient that is in the product
   * - **Definition:** The amount of ingredient that is in the product.
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount?: Ratio[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `item` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getItem(): CodeableReference {
    return this.item ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `item` property.
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid NutritionProduct.ingredient.item; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.item = value;
    } else {
      this.item = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefined<CodeableReference>(this.item) && !this.item.isEmpty();
  }

  /**
   * @returns the `amount` property value as a Ratio array
   */
  public getAmount(): Ratio[] {
    return this.amount ?? ([] as Ratio[]);
  }

  /**
   * Assigns the provided Ratio array value to the `amount` property.
   *
   * @param value - the `amount` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Ratio[] | undefined): this {
    if (isDefinedList<Ratio>(value)) {
      const optErrMsg = `Invalid NutritionProduct.ingredient.amount; Provided value array has an element that is not an instance of Ratio.`;
      assertFhirTypeList<Ratio>(value, Ratio, optErrMsg);
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * Add the provided Ratio value to the `amount` array property.
   *
   * @param value - the `amount` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAmount(value: Ratio | undefined): this {
    if (isDefined<Ratio>(value)) {
      const optErrMsg = `Invalid NutritionProduct.ingredient.amount; Provided element is not an instance of Ratio.`;
      assertFhirType<Ratio>(value, Ratio, optErrMsg);
      this.initAmount();
      this.amount?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefinedList<Ratio>(this.amount) && this.amount.some((item: Ratio) => !item.isEmpty());
  }

  /**
   * Initialize the `amount` property
   */
  private initAmount(): void {
    if(!this.hasAmount()) {
      this.amount = [] as Ratio[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionProduct.ingredient';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.item,
      this.amount,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.item, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionProductIngredientComponent {
    const dest = new NutritionProductIngredientComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionProductIngredientComponent): void {
    super.copyValues(dest);
    dest.item = this.item ? this.item.copy() : null;
    const amountList = copyListValues<Ratio>(this.amount);
    dest.amount = amountList.length === 0 ? undefined : amountList;
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

    if (this.hasItem()) {
      setFhirComplexJson(this.getItem(), 'item', jsonObj);
    } else {
      jsonObj['item'] = null;
    }

    if (this.hasAmount()) {
      setFhirComplexListJson(this.getAmount(), 'amount', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * NutritionProductProductCharacteristicComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specifies descriptive properties of the nutrition product
 * - **Definition:** Specifies descriptive properties of the nutrition product.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionProduct](http://hl7.org/fhir/StructureDefinition/NutritionProduct)
 */
export class NutritionProductProductCharacteristicComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, value: IDataType | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `NutritionProductProductCharacteristicComponent` JSON to instantiate the NutritionProductProductCharacteristicComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionProductProductCharacteristicComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionProductProductCharacteristicComponent
   * @returns NutritionProductProductCharacteristicComponent data model or undefined for `NutritionProductProductCharacteristicComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionProductProductCharacteristicComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionProductProductCharacteristicComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionProductProductCharacteristicComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = NutritionProductProductCharacteristicComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for NutritionProductProductCharacteristicComponent`;
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
    if (value === undefined) {
      instance.setValue(null);
    } else {
      instance.setValue(value);
    }

    return instance;
  }

  /**
   * NutritionProduct.productCharacteristic.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code specifying the type of characteristic
   * - **Definition:** A code specifying which characteristic of the product is being described (for example, colour, shape).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * NutritionProduct.productCharacteristic.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('NutritionProduct.productCharacteristic.value[x]', ['CodeableConcept','string','Quantity','base64Binary','Attachment','boolean',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The value of the characteristic
   * - **Definition:** The actual characteristic value corresponding to the type.
   * - **Comment:** The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'string',
   *     'Quantity',
   *     'base64Binary',
   *     'Attachment',
   *     'boolean',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('NutritionProduct.productCharacteristic.value[x]',[
    'CodeableConcept',
    'string',
    'Quantity',
    'base64Binary',
    'Attachment',
    'boolean',
  ])
  private value: IDataType | null;

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
      const optErrMsg = `Invalid NutritionProduct.productCharacteristic.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('NutritionProduct.productCharacteristic.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('NutritionProduct.productCharacteristic.value[x]')
  public setValue(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.value = value;
    } else {
      this.value = null;
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
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for NutritionProduct.productCharacteristic.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasValueCodeableConcept(): boolean {
    return this.hasValue() && this.value instanceof CodeableConcept;
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueStringType(): StringType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for NutritionProduct.productCharacteristic.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && this.value instanceof StringType;
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else null
   */
  public getValueQuantity(): Quantity | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for NutritionProduct.productCharacteristic.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a Base64BinaryType object if defined; else null
   */
  public getValueBase64BinaryType(): Base64BinaryType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Base64BinaryType)) {
      throw new InvalidTypeError(
        `DataType mismatch for NutritionProduct.productCharacteristic.value[x]: Expected Base64BinaryType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Base64BinaryType and has a value; `false` otherwise
   */
  public hasValueBase64BinaryType(): boolean {
    return this.hasValue() && this.value instanceof Base64BinaryType;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else null
   */
  public getValueAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for NutritionProduct.productCharacteristic.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && this.value instanceof Attachment;
  }

  /**
   * @returns the `value` property value as a BooleanType object if defined; else null
   */
  public getValueBooleanType(): BooleanType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for NutritionProduct.productCharacteristic.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && this.value instanceof BooleanType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionProduct.productCharacteristic';
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
      this.type_, this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionProductProductCharacteristicComponent {
    const dest = new NutritionProductProductCharacteristicComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionProductProductCharacteristicComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.value = this.value ? this.value.copy() as IDataType : null;
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
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    return jsonObj;
  }
}
/**
 * NutritionProductInstanceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** One or several physical instances or occurrences of the nutrition product
 * - **Definition:** Conveys instance-level information about this product item. One or several physical, countable instances or occurrences of the product.
 *
 * @category Data Models: Resource
 * @see [FHIR NutritionProduct](http://hl7.org/fhir/StructureDefinition/NutritionProduct)
 */
export class NutritionProductInstanceComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `NutritionProductInstanceComponent` JSON to instantiate the NutritionProductInstanceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `NutritionProductInstanceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to NutritionProductInstanceComponent
   * @returns NutritionProductInstanceComponent data model or undefined for `NutritionProductInstanceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): NutritionProductInstanceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'NutritionProductInstanceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new NutritionProductInstanceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addIdentifier(datatype);
        }
      });
    }

    fieldName = 'lotNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLotNumberElement(datatype);
    }

    fieldName = 'expiry';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setExpiryElement(datatype);
    }

    fieldName = 'useBy';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setUseByElement(datatype);
    }

    return instance;
  }

  /**
   * NutritionProduct.instance.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The amount of items or instances
   * - **Definition:** The amount of items or instances that the resource considers, for instance when referring to 2 identical units together.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * NutritionProduct.instance.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The identifier for the physical instance, typically a serial number
   * - **Definition:** The identifier for the physical instance, typically a serial number.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * NutritionProduct.instance.lotNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The identification of the batch or lot of the product
   * - **Definition:** The identification of the batch or lot of the product.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lotNumber?: StringType | undefined;

  /**
   * NutritionProduct.instance.expiry Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The expiry date or date and time for the product
   * - **Definition:** The time after which the product is no longer expected to be in proper condition, or its use is not advised or not allowed.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expiry?: DateTimeType | undefined;

  /**
   * NutritionProduct.instance.useBy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date until which the product is expected to be good for consumption
   * - **Definition:** The time after which the product is no longer expected to be in proper condition, or its use is not advised or not allowed.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private useBy?: DateTimeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
  public setQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid NutritionProduct.instance.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = undefined;
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
      const optErrMsg = `Invalid NutritionProduct.instance.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid NutritionProduct.instance.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `lotNumber` property value as a StringType object if defined; else an empty StringType object
   */
  public getLotNumberElement(): StringType {
    return this.lotNumber ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lotNumber` property.
   *
   * @param element - the `lotNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLotNumberElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid NutritionProduct.instance.lotNumber; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.lotNumber = element;
    } else {
      this.lotNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lotNumber` property exists and has a value; `false` otherwise
   */
  public hasLotNumberElement(): boolean {
    return isDefined<StringType>(this.lotNumber) && !this.lotNumber.isEmpty();
  }

  /**
   * @returns the `lotNumber` property value as a fhirString if defined; else undefined
   */
  public getLotNumber(): fhirString | undefined {
    return this.lotNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lotNumber` property.
   *
   * @param value - the `lotNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLotNumber(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid NutritionProduct.instance.lotNumber (${String(value)})`;
      this.lotNumber = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.lotNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lotNumber` property exists and has a value; `false` otherwise
   */
  public hasLotNumber(): boolean {
    return this.hasLotNumberElement();
  }

  /**
   * @returns the `expiry` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getExpiryElement(): DateTimeType {
    return this.expiry ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `expiry` property.
   *
   * @param element - the `expiry` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpiryElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid NutritionProduct.instance.expiry; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.expiry = element;
    } else {
      this.expiry = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expiry` property exists and has a value; `false` otherwise
   */
  public hasExpiryElement(): boolean {
    return isDefined<DateTimeType>(this.expiry) && !this.expiry.isEmpty();
  }

  /**
   * @returns the `expiry` property value as a fhirDateTime if defined; else undefined
   */
  public getExpiry(): fhirDateTime | undefined {
    return this.expiry?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `expiry` property.
   *
   * @param value - the `expiry` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpiry(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid NutritionProduct.instance.expiry (${String(value)})`;
      this.expiry = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.expiry = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expiry` property exists and has a value; `false` otherwise
   */
  public hasExpiry(): boolean {
    return this.hasExpiryElement();
  }

  /**
   * @returns the `useBy` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getUseByElement(): DateTimeType {
    return this.useBy ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `useBy` property.
   *
   * @param element - the `useBy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUseByElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid NutritionProduct.instance.useBy; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.useBy = element;
    } else {
      this.useBy = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `useBy` property exists and has a value; `false` otherwise
   */
  public hasUseByElement(): boolean {
    return isDefined<DateTimeType>(this.useBy) && !this.useBy.isEmpty();
  }

  /**
   * @returns the `useBy` property value as a fhirDateTime if defined; else undefined
   */
  public getUseBy(): fhirDateTime | undefined {
    return this.useBy?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `useBy` property.
   *
   * @param value - the `useBy` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUseBy(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid NutritionProduct.instance.useBy (${String(value)})`;
      this.useBy = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.useBy = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `useBy` property exists and has a value; `false` otherwise
   */
  public hasUseBy(): boolean {
    return this.hasUseByElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'NutritionProduct.instance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.quantity,
      this.identifier,
      this.lotNumber,
      this.expiry,
      this.useBy,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): NutritionProductInstanceComponent {
    const dest = new NutritionProductInstanceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: NutritionProductInstanceComponent): void {
    super.copyValues(dest);
    dest.quantity = this.quantity?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.lotNumber = this.lotNumber?.copy();
    dest.expiry = this.expiry?.copy();
    dest.useBy = this.useBy?.copy();
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

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasLotNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLotNumberElement(), 'lotNumber', jsonObj);
    }

    if (this.hasExpiryElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getExpiryElement(), 'expiry', jsonObj);
    }

    if (this.hasUseByElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getUseByElement(), 'useBy', jsonObj);
    }

    return jsonObj;
  }
}
