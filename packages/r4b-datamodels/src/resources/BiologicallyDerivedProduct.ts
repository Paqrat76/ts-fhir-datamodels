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
 * BiologicallyDerivedProduct Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct
 * StructureDefinition.name: BiologicallyDerivedProduct
 * StructureDefinition.description: A material substance originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  IntegerType,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDecimal,
  fhirDecimalSchema,
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
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { ProductCategoryEnum } from '../code-systems/ProductCategoryEnum';
import { ProductStatusEnum } from '../code-systems/ProductStatusEnum';
import { ProductStorageScaleEnum } from '../code-systems/ProductStorageScaleEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * BiologicallyDerivedProduct Class
 *
 * @remarks
 * A material substance originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.
 *
 * **FHIR Specification**
 * - **Short:** A material substance originating from a biological entity
 * - **Definition:** A material substance originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.
 * - **Comment:** Substances include, but are not limited to: whole blood, bone marrow, organs, and manipulated blood cells.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR BiologicallyDerivedProduct](http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct)
 */
export class BiologicallyDerivedProduct extends DomainResource implements IDomainResource {
  constructor() {
    super();

    this.productCategoryEnum = new ProductCategoryEnum();
    this.productStatusEnum = new ProductStatusEnum();
  }

  /**
   * Parse the provided `BiologicallyDerivedProduct` JSON to instantiate the BiologicallyDerivedProduct data model.
   *
   * @param sourceJson - JSON representing FHIR `BiologicallyDerivedProduct`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BiologicallyDerivedProduct
   * @returns BiologicallyDerivedProduct data model or undefined for `BiologicallyDerivedProduct`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): BiologicallyDerivedProduct | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BiologicallyDerivedProduct';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BiologicallyDerivedProduct();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'BiologicallyDerivedProduct');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'productCategory';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setProductCategoryElement(datatype);
    }

    fieldName = 'productCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProductCode(datatype);
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setStatusElement(datatype);
    }

    fieldName = 'request';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRequest(datatype);
          }
        });
      }
  }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setQuantityElement(datatype);
    }

    fieldName = 'parent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addParent(datatype);
          }
        });
      }
  }

    fieldName = 'collection';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: BiologicallyDerivedProductCollectionComponent | undefined = BiologicallyDerivedProductCollectionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCollection(component);
    }

    fieldName = 'processing';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: BiologicallyDerivedProductProcessingComponent | undefined = BiologicallyDerivedProductProcessingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addProcessing(component);
          }
        });
      }
    }

    fieldName = 'manipulation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: BiologicallyDerivedProductManipulationComponent | undefined = BiologicallyDerivedProductManipulationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setManipulation(component);
    }

    fieldName = 'storage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: BiologicallyDerivedProductStorageComponent | undefined = BiologicallyDerivedProductStorageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addStorage(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * BiologicallyDerivedProduct.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External ids for this item
   * - **Definition:** This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: ProductCategory
   *
   * @see {@link ProductCategoryEnum }
   */
  private readonly productCategoryEnum: ProductCategoryEnum;

  /**
   * BiologicallyDerivedProduct.productCategory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** organ | tissue | fluid | cells | biologicalAgent
   * - **Definition:** Broad category of this product.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ProductCategoryEnum }
   */
  private productCategory?: EnumCodeType | undefined;

  /**
   * BiologicallyDerivedProduct.productCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What this biologically derived product is
   * - **Definition:** A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productCode?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: ProductStatus
   *
   * @see {@link ProductStatusEnum }
   */
  private readonly productStatusEnum: ProductStatusEnum;

  /**
   * BiologicallyDerivedProduct.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** available | unavailable
   * - **Definition:** Whether the product is currently available.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ProductStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * BiologicallyDerivedProduct.request Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Procedure request
   * - **Definition:** Procedure request to obtain this biologically derived product.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private request?: Reference[] | undefined;

  /**
   * BiologicallyDerivedProduct.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The amount of this biologically derived product
   * - **Definition:** Number of discrete units within this product.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: IntegerType | undefined;

  /**
   * BiologicallyDerivedProduct.parent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** BiologicallyDerivedProduct parent
   * - **Definition:** Parent product (if any).
   * - **Comment:** For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private parent?: Reference[] | undefined;

  /**
   * BiologicallyDerivedProduct.collection Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How this product was collected
   * - **Definition:** How this product was collected.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private collection?: BiologicallyDerivedProductCollectionComponent | undefined;

  /**
   * BiologicallyDerivedProduct.processing Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Any processing of the product during collection
   * - **Definition:** Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private processing?: BiologicallyDerivedProductProcessingComponent[] | undefined;

  /**
   * BiologicallyDerivedProduct.manipulation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Any manipulation of product post-collection
   * - **Definition:** Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private manipulation?: BiologicallyDerivedProductManipulationComponent | undefined;

  /**
   * BiologicallyDerivedProduct.storage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product storage
   * - **Definition:** Product storage.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private storage?: BiologicallyDerivedProductStorageComponent[] | undefined;

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
      const optErrMsg = `Invalid BiologicallyDerivedProduct.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid BiologicallyDerivedProduct.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `productCategory` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ProductCategoryEnum }
   */
  public getProductCategoryEnumType(): EnumCodeType | undefined {
    return this.productCategory;
  }

  /**
   * Assigns the provided EnumCodeType value to the `productCategory` property.
   *
   * @param enumType - the `productCategory` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ProductCategoryEnum }
   */
  public setProductCategoryEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid BiologicallyDerivedProduct.productCategory';
      assertEnumCodeType<ProductCategoryEnum>(enumType, ProductCategoryEnum, errMsgPrefix);
      this.productCategory = enumType;
    } else {
      this.productCategory = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productCategory` property exists and has a value; `false` otherwise
   */
  public hasProductCategoryEnumType(): boolean {
    return isDefined<EnumCodeType>(this.productCategory) && !this.productCategory.isEmpty() && this.productCategory.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `productCategory` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ProductCategoryEnum }
   */
  public getProductCategoryElement(): CodeType | undefined {
    if (this.productCategory === undefined) {
      return undefined;
    }
    return this.productCategory as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `productCategory` property.
   *
   * @param element - the `productCategory` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ProductCategoryEnum }
   */
  public setProductCategoryElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.productCategory; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.productCategory = new EnumCodeType(element, this.productCategoryEnum);
    } else {
      this.productCategory = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productCategory` property exists and has a value; `false` otherwise
   */
  public hasProductCategoryElement(): boolean {
    return this.hasProductCategoryEnumType();
  }

  /**
   * @returns the `productCategory` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ProductCategoryEnum }
   */
  public getProductCategory(): fhirCode | undefined {
    if (this.productCategory === undefined) {
      return undefined;
    }
    return this.productCategory.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `productCategory` property.
   *
   * @param value - the `productCategory` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ProductCategoryEnum }
   */
  public setProductCategory(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.productCategory; Provided value is not an instance of fhirCode.`;
      this.productCategory = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.productCategoryEnum);
    } else {
      this.productCategory = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productCategory` property exists and has a value; `false` otherwise
   */
  public hasProductCategory(): boolean {
    return this.hasProductCategoryEnumType();
  }

  /**
   * @returns the `productCode` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getProductCode(): CodeableConcept {
    return this.productCode ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ProductCode object value to the `productCode` property.
   *
   * @param value - the `productCode` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProductCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.productCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.productCode = value;
    } else {
      this.productCode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productCode` property exists and has a value; `false` otherwise
   */
  public hasProductCode(): boolean {
    return isDefined<CodeableConcept>(this.productCode) && !this.productCode.isEmpty();
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ProductStatusEnum }
   */
  public getStatusEnumType(): EnumCodeType | undefined {
    return this.status;
  }

  /**
   * Assigns the provided EnumCodeType value to the `status` property.
   *
   * @param enumType - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ProductStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid BiologicallyDerivedProduct.status';
      assertEnumCodeType<ProductStatusEnum>(enumType, ProductStatusEnum, errMsgPrefix);
      this.status = enumType;
    } else {
      this.status = undefined;
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
   * @returns the `status` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ProductStatusEnum }
   */
  public getStatusElement(): CodeType | undefined {
    if (this.status === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link ProductStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.status; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.productStatusEnum);
    } else {
      this.status = undefined;
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
   * @returns the `status` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ProductStatusEnum }
   */
  public getStatus(): fhirCode | undefined {
    if (this.status === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link ProductStatusEnum }
   */
  public setStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.status; Provided value is not an instance of fhirCode.`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.productStatusEnum);
    } else {
      this.status = undefined;
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
   * @returns the `request` property value as a Reference array
   */
  public getRequest(): Reference[] {
    return this.request ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `request` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.request', ['ServiceRequest',])`
   *
   * @param value - the `request` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.request', [
    'ServiceRequest',
  ])
  public setRequest(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.request = value;
    } else {
      this.request = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `request` array property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.request', ['ServiceRequest',])`
   *
   * @param value - the `request` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.request', [
    'ServiceRequest',
  ])
  public addRequest(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRequest();
      this.request?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `request` property exists and has a value; `false` otherwise
   */
  public hasRequest(): boolean {
    return isDefinedList<Reference>(this.request) && this.request.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `request` property
   */
  private initRequest(): void {
    if (!this.hasRequest()) {
      this.request = [] as Reference[];
    }
  }

  /**
   * @returns the `quantity` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getQuantityElement(): IntegerType {
    return this.quantity ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `quantity` property.
   *
   * @param element - the `quantity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQuantityElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.quantity; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.quantity = element;
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantityElement(): boolean {
    return isDefined<IntegerType>(this.quantity) && !this.quantity.isEmpty();
  }

  /**
   * @returns the `quantity` property value as a fhirInteger if defined; else undefined
   */
  public getQuantity(): fhirInteger | undefined {
    return this.quantity?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `quantity` property.
   *
   * @param value - the `quantity` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQuantity(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.quantity (${String(value)})`;
      this.quantity = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return this.hasQuantityElement();
  }

  /**
   * @returns the `parent` property value as a Reference array
   */
  public getParent(): Reference[] {
    return this.parent ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `parent` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.parent', ['BiologicallyDerivedProduct',])`
   *
   * @param value - the `parent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.parent', [
    'BiologicallyDerivedProduct',
  ])
  public setParent(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.parent = value;
    } else {
      this.parent = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `parent` array property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.parent', ['BiologicallyDerivedProduct',])`
   *
   * @param value - the `parent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.parent', [
    'BiologicallyDerivedProduct',
  ])
  public addParent(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initParent();
      this.parent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `parent` property exists and has a value; `false` otherwise
   */
  public hasParent(): boolean {
    return isDefinedList<Reference>(this.parent) && this.parent.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `parent` property
   */
  private initParent(): void {
    if (!this.hasParent()) {
      this.parent = [] as Reference[];
    }
  }

  /**
   * @returns the `collection` property value as a BiologicallyDerivedProductCollectionComponent object if defined; else an empty BiologicallyDerivedProductCollectionComponent object
   */
  public getCollection(): BiologicallyDerivedProductCollectionComponent {
    return this.collection ?? new BiologicallyDerivedProductCollectionComponent();
  }

  /**
   * Assigns the provided Collection object value to the `collection` property.
   *
   * @param value - the `collection` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCollection(value: BiologicallyDerivedProductCollectionComponent | undefined): this {
    if (isDefined<BiologicallyDerivedProductCollectionComponent>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.collection; Provided element is not an instance of BiologicallyDerivedProductCollectionComponent.`;
      assertFhirType<BiologicallyDerivedProductCollectionComponent>(value, BiologicallyDerivedProductCollectionComponent, optErrMsg);
      this.collection = value;
    } else {
      this.collection = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `collection` property exists and has a value; `false` otherwise
   */
  public hasCollection(): boolean {
    return isDefined<BiologicallyDerivedProductCollectionComponent>(this.collection) && !this.collection.isEmpty();
  }

  /**
   * @returns the `processing` property value as a BiologicallyDerivedProductProcessingComponent array
   */
  public getProcessing(): BiologicallyDerivedProductProcessingComponent[] {
    return this.processing ?? ([] as BiologicallyDerivedProductProcessingComponent[]);
  }

  /**
   * Assigns the provided BiologicallyDerivedProductProcessingComponent array value to the `processing` property.
   *
   * @param value - the `processing` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcessing(value: BiologicallyDerivedProductProcessingComponent[] | undefined): this {
    if (isDefinedList<BiologicallyDerivedProductProcessingComponent>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.processing; Provided value array has an element that is not an instance of BiologicallyDerivedProductProcessingComponent.`;
      assertFhirTypeList<BiologicallyDerivedProductProcessingComponent>(value, BiologicallyDerivedProductProcessingComponent, optErrMsg);
      this.processing = value;
    } else {
      this.processing = undefined;
    }
    return this;
  }

  /**
   * Add the provided BiologicallyDerivedProductProcessingComponent value to the `processing` array property.
   *
   * @param value - the `processing` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProcessing(value: BiologicallyDerivedProductProcessingComponent | undefined): this {
    if (isDefined<BiologicallyDerivedProductProcessingComponent>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.processing; Provided element is not an instance of BiologicallyDerivedProductProcessingComponent.`;
      assertFhirType<BiologicallyDerivedProductProcessingComponent>(value, BiologicallyDerivedProductProcessingComponent, optErrMsg);
      this.initProcessing();
      this.processing?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `processing` property exists and has a value; `false` otherwise
   */
  public hasProcessing(): boolean {
    return isDefinedList<BiologicallyDerivedProductProcessingComponent>(this.processing) && this.processing.some((item: BiologicallyDerivedProductProcessingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `processing` property
   */
  private initProcessing(): void {
    if(!this.hasProcessing()) {
      this.processing = [] as BiologicallyDerivedProductProcessingComponent[];
    }
  }

  /**
   * @returns the `manipulation` property value as a BiologicallyDerivedProductManipulationComponent object if defined; else an empty BiologicallyDerivedProductManipulationComponent object
   */
  public getManipulation(): BiologicallyDerivedProductManipulationComponent {
    return this.manipulation ?? new BiologicallyDerivedProductManipulationComponent();
  }

  /**
   * Assigns the provided Manipulation object value to the `manipulation` property.
   *
   * @param value - the `manipulation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setManipulation(value: BiologicallyDerivedProductManipulationComponent | undefined): this {
    if (isDefined<BiologicallyDerivedProductManipulationComponent>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.manipulation; Provided element is not an instance of BiologicallyDerivedProductManipulationComponent.`;
      assertFhirType<BiologicallyDerivedProductManipulationComponent>(value, BiologicallyDerivedProductManipulationComponent, optErrMsg);
      this.manipulation = value;
    } else {
      this.manipulation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `manipulation` property exists and has a value; `false` otherwise
   */
  public hasManipulation(): boolean {
    return isDefined<BiologicallyDerivedProductManipulationComponent>(this.manipulation) && !this.manipulation.isEmpty();
  }

  /**
   * @returns the `storage` property value as a BiologicallyDerivedProductStorageComponent array
   */
  public getStorage(): BiologicallyDerivedProductStorageComponent[] {
    return this.storage ?? ([] as BiologicallyDerivedProductStorageComponent[]);
  }

  /**
   * Assigns the provided BiologicallyDerivedProductStorageComponent array value to the `storage` property.
   *
   * @param value - the `storage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStorage(value: BiologicallyDerivedProductStorageComponent[] | undefined): this {
    if (isDefinedList<BiologicallyDerivedProductStorageComponent>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.storage; Provided value array has an element that is not an instance of BiologicallyDerivedProductStorageComponent.`;
      assertFhirTypeList<BiologicallyDerivedProductStorageComponent>(value, BiologicallyDerivedProductStorageComponent, optErrMsg);
      this.storage = value;
    } else {
      this.storage = undefined;
    }
    return this;
  }

  /**
   * Add the provided BiologicallyDerivedProductStorageComponent value to the `storage` array property.
   *
   * @param value - the `storage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStorage(value: BiologicallyDerivedProductStorageComponent | undefined): this {
    if (isDefined<BiologicallyDerivedProductStorageComponent>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.storage; Provided element is not an instance of BiologicallyDerivedProductStorageComponent.`;
      assertFhirType<BiologicallyDerivedProductStorageComponent>(value, BiologicallyDerivedProductStorageComponent, optErrMsg);
      this.initStorage();
      this.storage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `storage` property exists and has a value; `false` otherwise
   */
  public hasStorage(): boolean {
    return isDefinedList<BiologicallyDerivedProductStorageComponent>(this.storage) && this.storage.some((item: BiologicallyDerivedProductStorageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `storage` property
   */
  private initStorage(): void {
    if(!this.hasStorage()) {
      this.storage = [] as BiologicallyDerivedProductStorageComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BiologicallyDerivedProduct';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.productCategory,
      this.productCode,
      this.status,
      this.request,
      this.quantity,
      this.parent,
      this.collection,
      this.processing,
      this.manipulation,
      this.storage,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BiologicallyDerivedProduct {
    const dest = new BiologicallyDerivedProduct();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BiologicallyDerivedProduct): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.productCategory = this.productCategory?.copy();
    dest.productCode = this.productCode?.copy();
    dest.status = this.status?.copy();
    const requestList = copyListValues<Reference>(this.request);
    dest.request = requestList.length === 0 ? undefined : requestList;
    dest.quantity = this.quantity?.copy();
    const parentList = copyListValues<Reference>(this.parent);
    dest.parent = parentList.length === 0 ? undefined : parentList;
    dest.collection = this.collection?.copy();
    const processingList = copyListValues<BiologicallyDerivedProductProcessingComponent>(this.processing);
    dest.processing = processingList.length === 0 ? undefined : processingList;
    dest.manipulation = this.manipulation?.copy();
    const storageList = copyListValues<BiologicallyDerivedProductStorageComponent>(this.storage);
    dest.storage = storageList.length === 0 ? undefined : storageList;
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

    if (this.hasProductCategoryElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getProductCategoryElement()!, 'productCategory', jsonObj);
    }

    if (this.hasProductCode()) {
      setFhirComplexJson(this.getProductCode(), 'productCode', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasRequest()) {
      setFhirComplexListJson(this.getRequest(), 'request', jsonObj);
    }

    if (this.hasQuantityElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getQuantityElement(), 'quantity', jsonObj);
    }

    if (this.hasParent()) {
      setFhirComplexListJson(this.getParent(), 'parent', jsonObj);
    }

    if (this.hasCollection()) {
      setFhirBackboneElementJson(this.getCollection(), 'collection', jsonObj);
    }

    if (this.hasProcessing()) {
      setFhirBackboneElementListJson(this.getProcessing(), 'processing', jsonObj);
    }

    if (this.hasManipulation()) {
      setFhirBackboneElementJson(this.getManipulation(), 'manipulation', jsonObj);
    }

    if (this.hasStorage()) {
      setFhirBackboneElementListJson(this.getStorage(), 'storage', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * BiologicallyDerivedProductCollectionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** How this product was collected
 * - **Definition:** How this product was collected.
 *
 * @category Data Models: Resource
 * @see [FHIR BiologicallyDerivedProduct](http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct)
 */
export class BiologicallyDerivedProductCollectionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `BiologicallyDerivedProductCollectionComponent` JSON to instantiate the BiologicallyDerivedProductCollectionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BiologicallyDerivedProductCollectionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BiologicallyDerivedProductCollectionComponent
   * @returns BiologicallyDerivedProductCollectionComponent data model or undefined for `BiologicallyDerivedProductCollectionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BiologicallyDerivedProductCollectionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BiologicallyDerivedProductCollectionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BiologicallyDerivedProductCollectionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = BiologicallyDerivedProductCollectionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for BiologicallyDerivedProductCollectionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'collector';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCollector(datatype);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSource(datatype);
    }

    fieldName = 'collected[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const collected: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setCollected(collected);

    return instance;
  }

  /**
   * BiologicallyDerivedProduct.collection.collector Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual performing collection
   * - **Definition:** Healthcare professional who is performing the collection.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private collector?: Reference | undefined;

  /**
   * BiologicallyDerivedProduct.collection.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is product from
   * - **Definition:** The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private source?: Reference | undefined;

  /**
   * BiologicallyDerivedProduct.collection.collected[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('BiologicallyDerivedProduct.collection.collected[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time of product collection
   * - **Definition:** Time of product collection.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('BiologicallyDerivedProduct.collection.collected[x]',[
    'dateTime',
    'Period',
  ])
  private collected?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `collector` property value as a Reference object; else an empty Reference object
   */
  public getCollector(): Reference {
    return this.collector ?? new Reference();
  }

  /**
   * Assigns the provided Collector object value to the `collector` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.collection.collector', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `collector` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.collection.collector', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setCollector(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.collector = value;
    } else {
      this.collector = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `collector` property exists and has a value; `false` otherwise
   */
  public hasCollector(): boolean {
    return isDefined<Reference>(this.collector) && !this.collector.isEmpty();
  }

  /**
   * @returns the `source` property value as a Reference object; else an empty Reference object
   */
  public getSource(): Reference {
    return this.source ?? new Reference();
  }

  /**
   * Assigns the provided Source object value to the `source` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.collection.source', ['Patient','Organization',])`
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.collection.source', [
    'Patient',
  
    'Organization',
  ])
  public setSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefined<Reference>(this.source) && !this.source.isEmpty();
  }

  /**
   * @returns the `collected` property value as a DataType object if defined; else undefined
   */
  public getCollected(): IDataType | undefined {
    return this.collected;
  }

  /**
   * Assigns the provided DataType object value to the `collected` property.
   *
   * @decorator `@ChoiceDataTypes('BiologicallyDerivedProduct.collection.collected[x]')`
   *
   * @param value - the `collected` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('BiologicallyDerivedProduct.collection.collected[x]')
  public setCollected(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.collected = value;
    } else {
      this.collected = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `collected` property exists and has a value; `false` otherwise
   */
  public hasCollected(): boolean {
    return isDefined<IDataType>(this.collected) && !this.collected.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `collected` property value as a DateTimeType object if defined; else undefined
   */
  public getCollectedDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.collected)) {
      return undefined;
    }
    if (!(this.collected instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.collection.collected[x]: Expected DateTimeType but encountered ${this.collected.fhirType()}`,
      );
    }
    return this.collected;
  }

  /**
   * @returns `true` if the `collected` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasCollectedDateTimeType(): boolean {
    return this.hasCollected() && this.collected instanceof DateTimeType;
  }

  /**
   * @returns the `collected` property value as a Period object if defined; else undefined
   */
  public getCollectedPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.collected)) {
      return undefined;
    }
    if (!(this.collected instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.collection.collected[x]: Expected Period but encountered ${this.collected.fhirType()}`,
      );
    }
    return this.collected;
  }

  /**
   * @returns `true` if the `collected` property exists as a Period and has a value; `false` otherwise
   */
  public hasCollectedPeriod(): boolean {
    return this.hasCollected() && this.collected instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BiologicallyDerivedProduct.collection';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.collector,
      this.source,
      this.collected,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BiologicallyDerivedProductCollectionComponent {
    const dest = new BiologicallyDerivedProductCollectionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BiologicallyDerivedProductCollectionComponent): void {
    super.copyValues(dest);
    dest.collector = this.collector?.copy();
    dest.source = this.source?.copy();
    dest.collected = this.collected?.copy() as IDataType;
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

    if (this.hasCollector()) {
      setFhirComplexJson(this.getCollector(), 'collector', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexJson(this.getSource(), 'source', jsonObj);
    }

    if (this.hasCollected()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getCollected()!, 'collected', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * BiologicallyDerivedProductProcessingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Any processing of the product during collection
 * - **Definition:** Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
 *
 * @category Data Models: Resource
 * @see [FHIR BiologicallyDerivedProduct](http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct)
 */
export class BiologicallyDerivedProductProcessingComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `BiologicallyDerivedProductProcessingComponent` JSON to instantiate the BiologicallyDerivedProductProcessingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BiologicallyDerivedProductProcessingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BiologicallyDerivedProductProcessingComponent
   * @returns BiologicallyDerivedProductProcessingComponent data model or undefined for `BiologicallyDerivedProductProcessingComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BiologicallyDerivedProductProcessingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BiologicallyDerivedProductProcessingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BiologicallyDerivedProductProcessingComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = BiologicallyDerivedProductProcessingComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for BiologicallyDerivedProductProcessingComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'procedure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProcedure(datatype);
    }

    fieldName = 'additive';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAdditive(datatype);
    }

    fieldName = 'time[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const time: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setTime(time);

    return instance;
  }

  /**
   * BiologicallyDerivedProduct.processing.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of of processing
   * - **Definition:** Description of of processing.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * BiologicallyDerivedProduct.processing.procedure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Procesing code
   * - **Definition:** Procesing code.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private procedure?: CodeableConcept | undefined;

  /**
   * BiologicallyDerivedProduct.processing.additive Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Substance added during processing
   * - **Definition:** Substance added during processing.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private additive?: Reference | undefined;

  /**
   * BiologicallyDerivedProduct.processing.time[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('BiologicallyDerivedProduct.processing.time[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time of processing
   * - **Definition:** Time of processing.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('BiologicallyDerivedProduct.processing.time[x]',[
    'dateTime',
    'Period',
  ])
  private time?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid BiologicallyDerivedProduct.processing.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid BiologicallyDerivedProduct.processing.description (${String(value)})`;
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
   * @returns the `procedure` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getProcedure(): CodeableConcept {
    return this.procedure ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Procedure object value to the `procedure` property.
   *
   * @param value - the `procedure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcedure(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.processing.procedure; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.procedure = value;
    } else {
      this.procedure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `procedure` property exists and has a value; `false` otherwise
   */
  public hasProcedure(): boolean {
    return isDefined<CodeableConcept>(this.procedure) && !this.procedure.isEmpty();
  }

  /**
   * @returns the `additive` property value as a Reference object; else an empty Reference object
   */
  public getAdditive(): Reference {
    return this.additive ?? new Reference();
  }

  /**
   * Assigns the provided Additive object value to the `additive` property.
   *
   * @decorator `@ReferenceTargets('BiologicallyDerivedProduct.processing.additive', ['Substance',])`
   *
   * @param value - the `additive` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('BiologicallyDerivedProduct.processing.additive', [
    'Substance',
  ])
  public setAdditive(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.additive = value;
    } else {
      this.additive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `additive` property exists and has a value; `false` otherwise
   */
  public hasAdditive(): boolean {
    return isDefined<Reference>(this.additive) && !this.additive.isEmpty();
  }

  /**
   * @returns the `time` property value as a DataType object if defined; else undefined
   */
  public getTime(): IDataType | undefined {
    return this.time;
  }

  /**
   * Assigns the provided DataType object value to the `time` property.
   *
   * @decorator `@ChoiceDataTypes('BiologicallyDerivedProduct.processing.time[x]')`
   *
   * @param value - the `time` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('BiologicallyDerivedProduct.processing.time[x]')
  public setTime(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.time = value;
    } else {
      this.time = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `time` property exists and has a value; `false` otherwise
   */
  public hasTime(): boolean {
    return isDefined<IDataType>(this.time) && !this.time.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `time` property value as a DateTimeType object if defined; else undefined
   */
  public getTimeDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.time)) {
      return undefined;
    }
    if (!(this.time instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.processing.time[x]: Expected DateTimeType but encountered ${this.time.fhirType()}`,
      );
    }
    return this.time;
  }

  /**
   * @returns `true` if the `time` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasTimeDateTimeType(): boolean {
    return this.hasTime() && this.time instanceof DateTimeType;
  }

  /**
   * @returns the `time` property value as a Period object if defined; else undefined
   */
  public getTimePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.time)) {
      return undefined;
    }
    if (!(this.time instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.processing.time[x]: Expected Period but encountered ${this.time.fhirType()}`,
      );
    }
    return this.time;
  }

  /**
   * @returns `true` if the `time` property exists as a Period and has a value; `false` otherwise
   */
  public hasTimePeriod(): boolean {
    return this.hasTime() && this.time instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BiologicallyDerivedProduct.processing';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.procedure,
      this.additive,
      this.time,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BiologicallyDerivedProductProcessingComponent {
    const dest = new BiologicallyDerivedProductProcessingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BiologicallyDerivedProductProcessingComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    dest.procedure = this.procedure?.copy();
    dest.additive = this.additive?.copy();
    dest.time = this.time?.copy() as IDataType;
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasProcedure()) {
      setFhirComplexJson(this.getProcedure(), 'procedure', jsonObj);
    }

    if (this.hasAdditive()) {
      setFhirComplexJson(this.getAdditive(), 'additive', jsonObj);
    }

    if (this.hasTime()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTime()!, 'time', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * BiologicallyDerivedProductManipulationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Any manipulation of product post-collection
 * - **Definition:** Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
 *
 * @category Data Models: Resource
 * @see [FHIR BiologicallyDerivedProduct](http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct)
 */
export class BiologicallyDerivedProductManipulationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `BiologicallyDerivedProductManipulationComponent` JSON to instantiate the BiologicallyDerivedProductManipulationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BiologicallyDerivedProductManipulationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BiologicallyDerivedProductManipulationComponent
   * @returns BiologicallyDerivedProductManipulationComponent data model or undefined for `BiologicallyDerivedProductManipulationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BiologicallyDerivedProductManipulationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BiologicallyDerivedProductManipulationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BiologicallyDerivedProductManipulationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = BiologicallyDerivedProductManipulationComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for BiologicallyDerivedProductManipulationComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'time[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const time: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setTime(time);

    return instance;
  }

  /**
   * BiologicallyDerivedProduct.manipulation.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of manipulation
   * - **Definition:** Description of manipulation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * BiologicallyDerivedProduct.manipulation.time[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('BiologicallyDerivedProduct.manipulation.time[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time of manipulation
   * - **Definition:** Time of manipulation.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('BiologicallyDerivedProduct.manipulation.time[x]',[
    'dateTime',
    'Period',
  ])
  private time?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid BiologicallyDerivedProduct.manipulation.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid BiologicallyDerivedProduct.manipulation.description (${String(value)})`;
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
   * @returns the `time` property value as a DataType object if defined; else undefined
   */
  public getTime(): IDataType | undefined {
    return this.time;
  }

  /**
   * Assigns the provided DataType object value to the `time` property.
   *
   * @decorator `@ChoiceDataTypes('BiologicallyDerivedProduct.manipulation.time[x]')`
   *
   * @param value - the `time` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('BiologicallyDerivedProduct.manipulation.time[x]')
  public setTime(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.time = value;
    } else {
      this.time = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `time` property exists and has a value; `false` otherwise
   */
  public hasTime(): boolean {
    return isDefined<IDataType>(this.time) && !this.time.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `time` property value as a DateTimeType object if defined; else undefined
   */
  public getTimeDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.time)) {
      return undefined;
    }
    if (!(this.time instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.manipulation.time[x]: Expected DateTimeType but encountered ${this.time.fhirType()}`,
      );
    }
    return this.time;
  }

  /**
   * @returns `true` if the `time` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasTimeDateTimeType(): boolean {
    return this.hasTime() && this.time instanceof DateTimeType;
  }

  /**
   * @returns the `time` property value as a Period object if defined; else undefined
   */
  public getTimePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.time)) {
      return undefined;
    }
    if (!(this.time instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for BiologicallyDerivedProduct.manipulation.time[x]: Expected Period but encountered ${this.time.fhirType()}`,
      );
    }
    return this.time;
  }

  /**
   * @returns `true` if the `time` property exists as a Period and has a value; `false` otherwise
   */
  public hasTimePeriod(): boolean {
    return this.hasTime() && this.time instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BiologicallyDerivedProduct.manipulation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.time,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BiologicallyDerivedProductManipulationComponent {
    const dest = new BiologicallyDerivedProductManipulationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BiologicallyDerivedProductManipulationComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    dest.time = this.time?.copy() as IDataType;
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasTime()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTime()!, 'time', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * BiologicallyDerivedProductStorageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Product storage
 * - **Definition:** Product storage.
 *
 * @category Data Models: Resource
 * @see [FHIR BiologicallyDerivedProduct](http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct)
 */
export class BiologicallyDerivedProductStorageComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.productStorageScaleEnum = new ProductStorageScaleEnum();
  }

  /**
   * Parse the provided `BiologicallyDerivedProductStorageComponent` JSON to instantiate the BiologicallyDerivedProductStorageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BiologicallyDerivedProductStorageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BiologicallyDerivedProductStorageComponent
   * @returns BiologicallyDerivedProductStorageComponent data model or undefined for `BiologicallyDerivedProductStorageComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BiologicallyDerivedProductStorageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BiologicallyDerivedProductStorageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BiologicallyDerivedProductStorageComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'temperature';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setTemperatureElement(datatype);
    }

    fieldName = 'scale';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setScaleElement(datatype);
    }

    fieldName = 'duration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDuration(datatype);
    }

    return instance;
  }

  /**
   * BiologicallyDerivedProduct.storage.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of storage
   * - **Definition:** Description of storage.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * BiologicallyDerivedProduct.storage.temperature Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Storage temperature
   * - **Definition:** Storage temperature.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private temperature?: DecimalType | undefined;

  /**
   * FHIR CodeSystem: ProductStorageScale
   *
   * @see {@link ProductStorageScaleEnum }
   */
  private readonly productStorageScaleEnum: ProductStorageScaleEnum;

  /**
   * BiologicallyDerivedProduct.storage.scale Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** farenheit | celsius | kelvin
   * - **Definition:** Temperature scale used.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ProductStorageScaleEnum }
   */
  private scale?: EnumCodeType | undefined;

  /**
   * BiologicallyDerivedProduct.storage.duration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Storage timeperiod
   * - **Definition:** Storage timeperiod.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private duration?: Period | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid BiologicallyDerivedProduct.storage.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid BiologicallyDerivedProduct.storage.description (${String(value)})`;
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
   * @returns the `temperature` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getTemperatureElement(): DecimalType {
    return this.temperature ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `temperature` property.
   *
   * @param element - the `temperature` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTemperatureElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.storage.temperature; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.temperature = element;
    } else {
      this.temperature = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `temperature` property exists and has a value; `false` otherwise
   */
  public hasTemperatureElement(): boolean {
    return isDefined<DecimalType>(this.temperature) && !this.temperature.isEmpty();
  }

  /**
   * @returns the `temperature` property value as a fhirDecimal if defined; else undefined
   */
  public getTemperature(): fhirDecimal | undefined {
    return this.temperature?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `temperature` property.
   *
   * @param value - the `temperature` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTemperature(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.storage.temperature (${String(value)})`;
      this.temperature = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.temperature = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `temperature` property exists and has a value; `false` otherwise
   */
  public hasTemperature(): boolean {
    return this.hasTemperatureElement();
  }

  /**
   * @returns the `scale` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ProductStorageScaleEnum }
   */
  public getScaleEnumType(): EnumCodeType | undefined {
    return this.scale;
  }

  /**
   * Assigns the provided EnumCodeType value to the `scale` property.
   *
   * @param enumType - the `scale` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ProductStorageScaleEnum }
   */
  public setScaleEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid BiologicallyDerivedProduct.storage.scale';
      assertEnumCodeType<ProductStorageScaleEnum>(enumType, ProductStorageScaleEnum, errMsgPrefix);
      this.scale = enumType;
    } else {
      this.scale = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `scale` property exists and has a value; `false` otherwise
   */
  public hasScaleEnumType(): boolean {
    return isDefined<EnumCodeType>(this.scale) && !this.scale.isEmpty() && this.scale.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `scale` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ProductStorageScaleEnum }
   */
  public getScaleElement(): CodeType | undefined {
    if (this.scale === undefined) {
      return undefined;
    }
    return this.scale as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `scale` property.
   *
   * @param element - the `scale` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ProductStorageScaleEnum }
   */
  public setScaleElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.storage.scale; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.scale = new EnumCodeType(element, this.productStorageScaleEnum);
    } else {
      this.scale = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `scale` property exists and has a value; `false` otherwise
   */
  public hasScaleElement(): boolean {
    return this.hasScaleEnumType();
  }

  /**
   * @returns the `scale` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ProductStorageScaleEnum }
   */
  public getScale(): fhirCode | undefined {
    if (this.scale === undefined) {
      return undefined;
    }
    return this.scale.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `scale` property.
   *
   * @param value - the `scale` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ProductStorageScaleEnum }
   */
  public setScale(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.storage.scale; Provided value is not an instance of fhirCode.`;
      this.scale = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.productStorageScaleEnum);
    } else {
      this.scale = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `scale` property exists and has a value; `false` otherwise
   */
  public hasScale(): boolean {
    return this.hasScaleEnumType();
  }

  /**
   * @returns the `duration` property value as a Period object if defined; else an empty Period object
   */
  public getDuration(): Period {
    return this.duration ?? new Period();
  }

  /**
   * Assigns the provided Duration object value to the `duration` property.
   *
   * @param value - the `duration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDuration(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid BiologicallyDerivedProduct.storage.duration; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
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
    return isDefined<Period>(this.duration) && !this.duration.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'BiologicallyDerivedProduct.storage';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.temperature,
      this.scale,
      this.duration,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BiologicallyDerivedProductStorageComponent {
    const dest = new BiologicallyDerivedProductStorageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BiologicallyDerivedProductStorageComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    dest.temperature = this.temperature?.copy();
    dest.scale = this.scale?.copy();
    dest.duration = this.duration?.copy();
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasTemperatureElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getTemperatureElement(), 'temperature', jsonObj);
    }

    if (this.hasScaleElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getScaleElement()!, 'scale', jsonObj);
    }

    if (this.hasDuration()) {
      setFhirComplexJson(this.getDuration(), 'duration', jsonObj);
    }

    return jsonObj;
  }
}
