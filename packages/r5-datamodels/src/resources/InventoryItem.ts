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
 * InventoryItem Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/InventoryItem
 * StructureDefinition.name: InventoryItem
 * StructureDefinition.description: functional description of an inventory item used in inventory and supply-related workflows.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  BooleanType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  IntegerType,
  InvalidTypeError,
  JSON,
  PrimitiveType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  UrlType,
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
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Address, Annotation, CodeableConcept, Coding, Duration, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Range, Ratio, Reference } from '../complex-types/complex-datatypes';
import { InventoryitemStatusEnum } from '../code-systems/InventoryitemStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * InventoryItem Class
 *
 * @remarks
 * functional description of an inventory item used in inventory and supply-related workflows.
 *
 * **FHIR Specification**
 * - **Short:** A functional description of an inventory item used in inventory and supply-related workflows
 * - **Definition:** A functional description of an inventory item used in inventory and supply-related workflows.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR InventoryItem](http://hl7.org/fhir/StructureDefinition/InventoryItem)
 */
export class InventoryItem extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.inventoryitemStatusEnum = new InventoryitemStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<InventoryitemStatusEnum>(
      status,
      InventoryitemStatusEnum,
      this.inventoryitemStatusEnum,
      'InventoryItem.status',
    );
  }

  /**
   * Parse the provided `InventoryItem` JSON to instantiate the InventoryItem data model.
   *
   * @param sourceJson - JSON representing FHIR `InventoryItem`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InventoryItem
   * @returns InventoryItem data model or undefined for `InventoryItem`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): InventoryItem | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InventoryItem';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InventoryItem();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'InventoryItem');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

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

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCode(datatype);
        }
      });
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InventoryItemNameComponent | undefined = InventoryItemNameComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addName(component);
        }
      });
    }

    fieldName = 'responsibleOrganization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InventoryItemResponsibleOrganizationComponent | undefined = InventoryItemResponsibleOrganizationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addResponsibleOrganization(component);
        }
      });
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: InventoryItemDescriptionComponent | undefined = InventoryItemDescriptionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDescription(component);
    }

    fieldName = 'inventoryStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addInventoryStatus(datatype);
        }
      });
    }

    fieldName = 'baseUnit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBaseUnit(datatype);
    }

    fieldName = 'netContent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNetContent(datatype);
    }

    fieldName = 'association';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InventoryItemAssociationComponent | undefined = InventoryItemAssociationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAssociation(component);
        }
      });
    }

    fieldName = 'characteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InventoryItemCharacteristicComponent | undefined = InventoryItemCharacteristicComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCharacteristic(component);
        }
      });
    }

    fieldName = 'instance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: InventoryItemInstanceComponent | undefined = InventoryItemInstanceComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setInstance(component);
    }

    fieldName = 'productReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProductReference(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * InventoryItem.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for the inventory item
   * - **Definition:** Business identifier for the inventory item.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: InventoryitemStatus
   *
   * @see {@link InventoryitemStatusEnum }
   */
  private readonly inventoryitemStatusEnum: InventoryitemStatusEnum;

  /**
   * InventoryItem.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | inactive | entered-in-error | unknown
   * - **Definition:** Status of the item entry.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link InventoryitemStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * InventoryItem.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category or class of the item
   * - **Definition:** Category or class of the item.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * InventoryItem.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code designating the specific type of item
   * - **Definition:** Code designating the specific type of item.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept[] | undefined;

  /**
   * InventoryItem.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The item name(s) - the brand name, or common name, functional name, generic name or others
   * - **Definition:** The item name(s) - the brand name, or common name, functional name, generic name.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: InventoryItemNameComponent[] | undefined;

  /**
   * InventoryItem.responsibleOrganization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization(s) responsible for the product
   * - **Definition:** Organization(s) responsible for the product.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private responsibleOrganization?: InventoryItemResponsibleOrganizationComponent[] | undefined;

  /**
   * InventoryItem.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Descriptive characteristics of the item
   * - **Definition:** The descriptive characteristics of the inventory item.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: InventoryItemDescriptionComponent | undefined;

  /**
   * InventoryItem.inventoryStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The usage status like recalled, in use, discarded
   * - **Definition:** The usage status e.g. recalled, in use, discarded... This can be used to indicate that the items have been taken out of inventory, or are in use, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private inventoryStatus?: CodeableConcept[] | undefined;

  /**
   * InventoryItem.baseUnit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The base unit of measure - the unit in which the product is used or counted
   * - **Definition:** The base unit of measure - the unit in which the product is used or counted.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private baseUnit?: CodeableConcept | undefined;

  /**
   * InventoryItem.netContent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Net content or amount present in the item
   * - **Definition:** Net content or amount present in the item.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private netContent?: Quantity | undefined;

  /**
   * InventoryItem.association Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Association with other items or products
   * - **Definition:** Association with other items or products.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private association?: InventoryItemAssociationComponent[] | undefined;

  /**
   * InventoryItem.characteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Characteristic of the item
   * - **Definition:** The descriptive or identifying characteristics of the item.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private characteristic?: InventoryItemCharacteristicComponent[] | undefined;

  /**
   * InventoryItem.instance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instances or occurrences of the product
   * - **Definition:** Instances or occurrences of the product.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instance_?: InventoryItemInstanceComponent | undefined;

  /**
   * InventoryItem.productReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Link to a product resource used in clinical workflows
   * - **Definition:** Link to a product resource used in clinical workflows.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionProduct',
   *       'http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private productReference?: Reference | undefined;

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
      const optErrMsg = `Invalid InventoryItem.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid InventoryItem.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link InventoryitemStatusEnum }
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
   * @see CodeSystem Enumeration: {@link InventoryitemStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `InventoryItem.status is required`);
    const errMsgPrefix = `Invalid InventoryItem.status`;
    assertEnumCodeType<InventoryitemStatusEnum>(enumType, InventoryitemStatusEnum, errMsgPrefix);
    this.status = enumType;
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
   * @see CodeSystem Enumeration: {@link InventoryitemStatusEnum }
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
   * @see CodeSystem Enumeration: {@link InventoryitemStatusEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `InventoryItem.status is required`);
    const optErrMsg = `Invalid InventoryItem.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.inventoryitemStatusEnum);
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
   * @see CodeSystem Enumeration: {@link InventoryitemStatusEnum }
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
   * @see CodeSystem Enumeration: {@link InventoryitemStatusEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `InventoryItem.status is required`);
    const optErrMsg = `Invalid InventoryItem.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.inventoryitemStatusEnum);
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
      const optErrMsg = `Invalid InventoryItem.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid InventoryItem.category; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `code` property value as a CodeableConcept array
   */
  public getCode(): CodeableConcept[] {
    return this.code ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `code` property.
   *
   * @param value - the `code` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InventoryItem.code; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `code` array property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InventoryItem.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCode();
      this.code?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefinedList<CodeableConcept>(this.code) && this.code.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `code` property
   */
  private initCode(): void {
    if(!this.hasCode()) {
      this.code = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `name` property value as a InventoryItemNameComponent array
   */
  public getName(): InventoryItemNameComponent[] {
    return this.name ?? ([] as InventoryItemNameComponent[]);
  }

  /**
   * Assigns the provided InventoryItemNameComponent array value to the `name` property.
   *
   * @param value - the `name` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setName(value: InventoryItemNameComponent[] | undefined): this {
    if (isDefinedList<InventoryItemNameComponent>(value)) {
      const optErrMsg = `Invalid InventoryItem.name; Provided value array has an element that is not an instance of InventoryItemNameComponent.`;
      assertFhirTypeList<InventoryItemNameComponent>(value, InventoryItemNameComponent, optErrMsg);
      this.name = value;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * Add the provided InventoryItemNameComponent value to the `name` array property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addName(value: InventoryItemNameComponent | undefined): this {
    if (isDefined<InventoryItemNameComponent>(value)) {
      const optErrMsg = `Invalid InventoryItem.name; Provided element is not an instance of InventoryItemNameComponent.`;
      assertFhirType<InventoryItemNameComponent>(value, InventoryItemNameComponent, optErrMsg);
      this.initName();
      this.name?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return isDefinedList<InventoryItemNameComponent>(this.name) && this.name.some((item: InventoryItemNameComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `name` property
   */
  private initName(): void {
    if(!this.hasName()) {
      this.name = [] as InventoryItemNameComponent[];
    }
  }

  /**
   * @returns the `responsibleOrganization` property value as a InventoryItemResponsibleOrganizationComponent array
   */
  public getResponsibleOrganization(): InventoryItemResponsibleOrganizationComponent[] {
    return this.responsibleOrganization ?? ([] as InventoryItemResponsibleOrganizationComponent[]);
  }

  /**
   * Assigns the provided InventoryItemResponsibleOrganizationComponent array value to the `responsibleOrganization` property.
   *
   * @param value - the `responsibleOrganization` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setResponsibleOrganization(value: InventoryItemResponsibleOrganizationComponent[] | undefined): this {
    if (isDefinedList<InventoryItemResponsibleOrganizationComponent>(value)) {
      const optErrMsg = `Invalid InventoryItem.responsibleOrganization; Provided value array has an element that is not an instance of InventoryItemResponsibleOrganizationComponent.`;
      assertFhirTypeList<InventoryItemResponsibleOrganizationComponent>(value, InventoryItemResponsibleOrganizationComponent, optErrMsg);
      this.responsibleOrganization = value;
    } else {
      this.responsibleOrganization = undefined;
    }
    return this;
  }

  /**
   * Add the provided InventoryItemResponsibleOrganizationComponent value to the `responsibleOrganization` array property.
   *
   * @param value - the `responsibleOrganization` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addResponsibleOrganization(value: InventoryItemResponsibleOrganizationComponent | undefined): this {
    if (isDefined<InventoryItemResponsibleOrganizationComponent>(value)) {
      const optErrMsg = `Invalid InventoryItem.responsibleOrganization; Provided element is not an instance of InventoryItemResponsibleOrganizationComponent.`;
      assertFhirType<InventoryItemResponsibleOrganizationComponent>(value, InventoryItemResponsibleOrganizationComponent, optErrMsg);
      this.initResponsibleOrganization();
      this.responsibleOrganization?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `responsibleOrganization` property exists and has a value; `false` otherwise
   */
  public hasResponsibleOrganization(): boolean {
    return isDefinedList<InventoryItemResponsibleOrganizationComponent>(this.responsibleOrganization) && this.responsibleOrganization.some((item: InventoryItemResponsibleOrganizationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `responsibleOrganization` property
   */
  private initResponsibleOrganization(): void {
    if(!this.hasResponsibleOrganization()) {
      this.responsibleOrganization = [] as InventoryItemResponsibleOrganizationComponent[];
    }
  }

  /**
   * @returns the `description` property value as a InventoryItemDescriptionComponent object if defined; else an empty InventoryItemDescriptionComponent object
   */
  public getDescription(): InventoryItemDescriptionComponent {
    return this.description ?? new InventoryItemDescriptionComponent();
  }

  /**
   * Assigns the provided Description object value to the `description` property.
   *
   * @param value - the `description` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDescription(value: InventoryItemDescriptionComponent | undefined): this {
    if (isDefined<InventoryItemDescriptionComponent>(value)) {
      const optErrMsg = `Invalid InventoryItem.description; Provided element is not an instance of InventoryItemDescriptionComponent.`;
      assertFhirType<InventoryItemDescriptionComponent>(value, InventoryItemDescriptionComponent, optErrMsg);
      this.description = value;
    } else {
      this.description = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescription(): boolean {
    return isDefined<InventoryItemDescriptionComponent>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `inventoryStatus` property value as a CodeableConcept array
   */
  public getInventoryStatus(): CodeableConcept[] {
    return this.inventoryStatus ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `inventoryStatus` property.
   *
   * @param value - the `inventoryStatus` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInventoryStatus(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InventoryItem.inventoryStatus; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.inventoryStatus = value;
    } else {
      this.inventoryStatus = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `inventoryStatus` array property.
   *
   * @param value - the `inventoryStatus` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInventoryStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InventoryItem.inventoryStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initInventoryStatus();
      this.inventoryStatus?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `inventoryStatus` property exists and has a value; `false` otherwise
   */
  public hasInventoryStatus(): boolean {
    return isDefinedList<CodeableConcept>(this.inventoryStatus) && this.inventoryStatus.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `inventoryStatus` property
   */
  private initInventoryStatus(): void {
    if(!this.hasInventoryStatus()) {
      this.inventoryStatus = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `baseUnit` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getBaseUnit(): CodeableConcept {
    return this.baseUnit ?? new CodeableConcept();
  }

  /**
   * Assigns the provided BaseUnit object value to the `baseUnit` property.
   *
   * @param value - the `baseUnit` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBaseUnit(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InventoryItem.baseUnit; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.baseUnit = value;
    } else {
      this.baseUnit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `baseUnit` property exists and has a value; `false` otherwise
   */
  public hasBaseUnit(): boolean {
    return isDefined<CodeableConcept>(this.baseUnit) && !this.baseUnit.isEmpty();
  }

  /**
   * @returns the `netContent` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getNetContent(): Quantity {
    return this.netContent ?? new Quantity();
  }

  /**
   * Assigns the provided NetContent object value to the `netContent` property.
   *
   * @param value - the `netContent` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNetContent(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid InventoryItem.netContent; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.netContent = value;
    } else {
      this.netContent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `netContent` property exists and has a value; `false` otherwise
   */
  public hasNetContent(): boolean {
    return isDefined<Quantity>(this.netContent) && !this.netContent.isEmpty();
  }

  /**
   * @returns the `association` property value as a InventoryItemAssociationComponent array
   */
  public getAssociation(): InventoryItemAssociationComponent[] {
    return this.association ?? ([] as InventoryItemAssociationComponent[]);
  }

  /**
   * Assigns the provided InventoryItemAssociationComponent array value to the `association` property.
   *
   * @param value - the `association` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAssociation(value: InventoryItemAssociationComponent[] | undefined): this {
    if (isDefinedList<InventoryItemAssociationComponent>(value)) {
      const optErrMsg = `Invalid InventoryItem.association; Provided value array has an element that is not an instance of InventoryItemAssociationComponent.`;
      assertFhirTypeList<InventoryItemAssociationComponent>(value, InventoryItemAssociationComponent, optErrMsg);
      this.association = value;
    } else {
      this.association = undefined;
    }
    return this;
  }

  /**
   * Add the provided InventoryItemAssociationComponent value to the `association` array property.
   *
   * @param value - the `association` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAssociation(value: InventoryItemAssociationComponent | undefined): this {
    if (isDefined<InventoryItemAssociationComponent>(value)) {
      const optErrMsg = `Invalid InventoryItem.association; Provided element is not an instance of InventoryItemAssociationComponent.`;
      assertFhirType<InventoryItemAssociationComponent>(value, InventoryItemAssociationComponent, optErrMsg);
      this.initAssociation();
      this.association?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `association` property exists and has a value; `false` otherwise
   */
  public hasAssociation(): boolean {
    return isDefinedList<InventoryItemAssociationComponent>(this.association) && this.association.some((item: InventoryItemAssociationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `association` property
   */
  private initAssociation(): void {
    if(!this.hasAssociation()) {
      this.association = [] as InventoryItemAssociationComponent[];
    }
  }

  /**
   * @returns the `characteristic` property value as a InventoryItemCharacteristicComponent array
   */
  public getCharacteristic(): InventoryItemCharacteristicComponent[] {
    return this.characteristic ?? ([] as InventoryItemCharacteristicComponent[]);
  }

  /**
   * Assigns the provided InventoryItemCharacteristicComponent array value to the `characteristic` property.
   *
   * @param value - the `characteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacteristic(value: InventoryItemCharacteristicComponent[] | undefined): this {
    if (isDefinedList<InventoryItemCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid InventoryItem.characteristic; Provided value array has an element that is not an instance of InventoryItemCharacteristicComponent.`;
      assertFhirTypeList<InventoryItemCharacteristicComponent>(value, InventoryItemCharacteristicComponent, optErrMsg);
      this.characteristic = value;
    } else {
      this.characteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided InventoryItemCharacteristicComponent value to the `characteristic` array property.
   *
   * @param value - the `characteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCharacteristic(value: InventoryItemCharacteristicComponent | undefined): this {
    if (isDefined<InventoryItemCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid InventoryItem.characteristic; Provided element is not an instance of InventoryItemCharacteristicComponent.`;
      assertFhirType<InventoryItemCharacteristicComponent>(value, InventoryItemCharacteristicComponent, optErrMsg);
      this.initCharacteristic();
      this.characteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `characteristic` property exists and has a value; `false` otherwise
   */
  public hasCharacteristic(): boolean {
    return isDefinedList<InventoryItemCharacteristicComponent>(this.characteristic) && this.characteristic.some((item: InventoryItemCharacteristicComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `characteristic` property
   */
  private initCharacteristic(): void {
    if(!this.hasCharacteristic()) {
      this.characteristic = [] as InventoryItemCharacteristicComponent[];
    }
  }

  /**
   * @returns the `instance_` property value as a InventoryItemInstanceComponent object if defined; else an empty InventoryItemInstanceComponent object
   */
  public getInstance(): InventoryItemInstanceComponent {
    return this.instance_ ?? new InventoryItemInstanceComponent();
  }

  /**
   * Assigns the provided Instance object value to the `instance_` property.
   *
   * @param value - the `instance_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInstance(value: InventoryItemInstanceComponent | undefined): this {
    if (isDefined<InventoryItemInstanceComponent>(value)) {
      const optErrMsg = `Invalid InventoryItem.instance; Provided element is not an instance of InventoryItemInstanceComponent.`;
      assertFhirType<InventoryItemInstanceComponent>(value, InventoryItemInstanceComponent, optErrMsg);
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
    return isDefined<InventoryItemInstanceComponent>(this.instance_) && !this.instance_.isEmpty();
  }

  /**
   * @returns the `productReference` property value as a Reference object; else an empty Reference object
   */
  public getProductReference(): Reference {
    return this.productReference ?? new Reference();
  }

  /**
   * Assigns the provided ProductReference object value to the `productReference` property.
   *
   * @decorator `@ReferenceTargets('InventoryItem.productReference', ['Medication','Device','NutritionProduct','BiologicallyDerivedProduct',])`
   *
   * @param value - the `productReference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InventoryItem.productReference', [
    'Medication',
  
    'Device',
  
    'NutritionProduct',
  
    'BiologicallyDerivedProduct',
  ])
  public setProductReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.productReference = value;
    } else {
      this.productReference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productReference` property exists and has a value; `false` otherwise
   */
  public hasProductReference(): boolean {
    return isDefined<Reference>(this.productReference) && !this.productReference.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InventoryItem';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.category,
      this.code,
      this.name,
      this.responsibleOrganization,
      this.description,
      this.inventoryStatus,
      this.baseUnit,
      this.netContent,
      this.association,
      this.characteristic,
      this.instance_,
      this.productReference,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InventoryItem {
    const dest = new InventoryItem();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InventoryItem): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    const codeList = copyListValues<CodeableConcept>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    const nameList = copyListValues<InventoryItemNameComponent>(this.name);
    dest.name = nameList.length === 0 ? undefined : nameList;
    const responsibleOrganizationList = copyListValues<InventoryItemResponsibleOrganizationComponent>(this.responsibleOrganization);
    dest.responsibleOrganization = responsibleOrganizationList.length === 0 ? undefined : responsibleOrganizationList;
    dest.description = this.description?.copy();
    const inventoryStatusList = copyListValues<CodeableConcept>(this.inventoryStatus);
    dest.inventoryStatus = inventoryStatusList.length === 0 ? undefined : inventoryStatusList;
    dest.baseUnit = this.baseUnit?.copy();
    dest.netContent = this.netContent?.copy();
    const associationList = copyListValues<InventoryItemAssociationComponent>(this.association);
    dest.association = associationList.length === 0 ? undefined : associationList;
    const characteristicList = copyListValues<InventoryItemCharacteristicComponent>(this.characteristic);
    dest.characteristic = characteristicList.length === 0 ? undefined : characteristicList;
    dest.instance_ = this.instance_?.copy();
    dest.productReference = this.productReference?.copy();
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
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`InventoryItem.status`);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasName()) {
      setFhirBackboneElementListJson(this.getName(), 'name', jsonObj);
    }

    if (this.hasResponsibleOrganization()) {
      setFhirBackboneElementListJson(this.getResponsibleOrganization(), 'responsibleOrganization', jsonObj);
    }

    if (this.hasDescription()) {
      setFhirBackboneElementJson(this.getDescription(), 'description', jsonObj);
    }

    if (this.hasInventoryStatus()) {
      setFhirComplexListJson(this.getInventoryStatus(), 'inventoryStatus', jsonObj);
    }

    if (this.hasBaseUnit()) {
      setFhirComplexJson(this.getBaseUnit(), 'baseUnit', jsonObj);
    }

    if (this.hasNetContent()) {
      setFhirComplexJson(this.getNetContent(), 'netContent', jsonObj);
    }

    if (this.hasAssociation()) {
      setFhirBackboneElementListJson(this.getAssociation(), 'association', jsonObj);
    }

    if (this.hasCharacteristic()) {
      setFhirBackboneElementListJson(this.getCharacteristic(), 'characteristic', jsonObj);
    }

    if (this.hasInstance()) {
      setFhirBackboneElementJson(this.getInstance(), 'instance', jsonObj);
    }

    if (this.hasProductReference()) {
      setFhirComplexJson(this.getProductReference(), 'productReference', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * InventoryItemNameComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The item name(s) - the brand name, or common name, functional name, generic name or others
 * - **Definition:** The item name(s) - the brand name, or common name, functional name, generic name.
 *
 * @category Data Models: Resource
 * @see [FHIR InventoryItem](http://hl7.org/fhir/StructureDefinition/InventoryItem)
 */
export class InventoryItemNameComponent extends BackboneElement implements IBackboneElement {
  constructor(nameType: Coding | null = null, language: CodeType | fhirCode | null = null, name: StringType | fhirString | null = null) {
    super();

    this.nameType = null;
    if (isDefined<Coding>(nameType)) {
      this.setNameType(nameType);
    }

    this.language = null;
    if (isDefined<CodeType | fhirCode>(language)) {
      if (language instanceof PrimitiveType) {
        this.setLanguageElement(language);
      } else {
        this.setLanguage(language);
      }
    }

    this.name = null;
    if (isDefined<StringType | fhirString>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }
  }

  /**
   * Parse the provided `InventoryItemNameComponent` JSON to instantiate the InventoryItemNameComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InventoryItemNameComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InventoryItemNameComponent
   * @returns InventoryItemNameComponent data model or undefined for `InventoryItemNameComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InventoryItemNameComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InventoryItemNameComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InventoryItemNameComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'nameType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNameType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setLanguageElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * InventoryItem.name.nameType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of name e.g. \'brand-name\', \'functional-name\', \'common-name\'
   * - **Definition:** The type of name e.g. \'brand-name\', \'functional-name\', \'common-name\'.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private nameType: Coding | null;

  /**
   * InventoryItem.name.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The language used to express the item name
   * - **Definition:** The language that the item name is expressed in.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private language: CodeType | null;

  /**
   * InventoryItem.name.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name or designation of the item
   * - **Definition:** The name or designation that the item is given.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: StringType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `nameType` property value as a Coding object if defined; else null
   */
  public getNameType(): Coding | null {
    return this.nameType;
  }

  /**
   * Assigns the provided Coding object value to the `nameType` property.
   *
   * @param value - the `nameType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNameType(value: Coding): this {
    assertIsDefined<Coding>(value, `InventoryItem.name.nameType is required`);
    const optErrMsg = `Invalid InventoryItem.name.nameType; Provided element is not an instance of Coding.`;
    assertFhirType<Coding>(value, Coding, optErrMsg);
    this.nameType = value;
    return this;
  }

  /**
   * @returns `true` if the `nameType` property exists and has a value; `false` otherwise
   */
  public hasNameType(): boolean {
    return isDefined<Coding>(this.nameType) && !this.nameType.isEmpty();
  }

  /**
   * @returns the `language` property value as a CodeType object if defined; else null
   */
  public getLanguageElement(): CodeType | null {
    return this.language;
  }

  /**
   * Assigns the provided PrimitiveType value to the `language` property.
   *
   * @param element - the `language` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLanguageElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `InventoryItem.name.language is required`);
    const optErrMsg = `Invalid InventoryItem.name.language; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.language = element;
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguageElement(): boolean {
    return isDefined<CodeType>(this.language) && !this.language.isEmpty();
  }

  /**
   * @returns the `language` property value as a fhirCode if defined; else null
   */
  public getLanguage(): fhirCode | null {
    if (this.language?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.language.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `language` property.
   *
   * @param value - the `language` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLanguage(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `InventoryItem.name.language is required`);
    const optErrMsg = `Invalid InventoryItem.name.language (${String(value)})`;
    this.language = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguage(): boolean {
    return this.hasLanguageElement();
  }

  /**
   * @returns the `name` property value as a StringType object if defined; else null
   */
  public getNameElement(): StringType | null {
    return this.name;
  }

  /**
   * Assigns the provided PrimitiveType value to the `name` property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType): this {
    assertIsDefined<StringType>(element, `InventoryItem.name.name is required`);
    const optErrMsg = `Invalid InventoryItem.name.name; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.name = element;
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<StringType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirString if defined; else null
   */
  public getName(): fhirString | null {
    if (this.name?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.name.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString): this {
    assertIsDefined<fhirString>(value, `InventoryItem.name.name is required`);
    const optErrMsg = `Invalid InventoryItem.name.name (${String(value)})`;
    this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InventoryItem.name';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.nameType,
      this.language,
      this.name,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InventoryItemNameComponent {
    const dest = new InventoryItemNameComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InventoryItemNameComponent): void {
    super.copyValues(dest);
    dest.nameType = this.nameType ? this.nameType.copy() : null;
    dest.language = this.language ? this.language.copy() : null;
    dest.name = this.name ? this.name.copy() : null;
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

    if (this.hasNameType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getNameType()!, 'nameType', jsonObj);
    } else {
      missingReqdProperties.push(`InventoryItem.name.nameType`);
    }

    if (this.hasLanguageElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getLanguageElement()!, 'language', jsonObj);
    } else {
      missingReqdProperties.push(`InventoryItem.name.language`);
    }

    if (this.hasNameElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`InventoryItem.name.name`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * InventoryItemResponsibleOrganizationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Organization(s) responsible for the product
 * - **Definition:** Organization(s) responsible for the product.
 *
 * @category Data Models: Resource
 * @see [FHIR InventoryItem](http://hl7.org/fhir/StructureDefinition/InventoryItem)
 */
export class InventoryItemResponsibleOrganizationComponent extends BackboneElement implements IBackboneElement {
  constructor(role: CodeableConcept | null = null, organization: Reference | null = null) {
    super();

    this.role = null;
    if (isDefined<CodeableConcept>(role)) {
      this.setRole(role);
    }

    this.organization = null;
    if (isDefined<Reference>(organization)) {
      this.setOrganization(organization);
    }
  }

  /**
   * Parse the provided `InventoryItemResponsibleOrganizationComponent` JSON to instantiate the InventoryItemResponsibleOrganizationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InventoryItemResponsibleOrganizationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InventoryItemResponsibleOrganizationComponent
   * @returns InventoryItemResponsibleOrganizationComponent data model or undefined for `InventoryItemResponsibleOrganizationComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InventoryItemResponsibleOrganizationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InventoryItemResponsibleOrganizationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InventoryItemResponsibleOrganizationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

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

    fieldName = 'organization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setOrganization(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * InventoryItem.responsibleOrganization.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The role of the organization e.g. manufacturer, distributor, or other
   * - **Definition:** The role of the organization e.g. manufacturer, distributor, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role: CodeableConcept | null;

  /**
   * InventoryItem.responsibleOrganization.organization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An organization that is associated with the item
   * - **Definition:** An organization that has an association with the item, e.g. manufacturer, distributor, responsible, etc.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private organization: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
    assertIsDefined<CodeableConcept>(value, `InventoryItem.responsibleOrganization.role is required`);
    const optErrMsg = `Invalid InventoryItem.responsibleOrganization.role; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `organization` property value as a Reference object if defined; else null
   */
  public getOrganization(): Reference | null {
    return this.organization;
  }

  /**
   * Assigns the provided Organization object value to the `organization` property.
   *
   * @decorator `@ReferenceTargets('InventoryItem.responsibleOrganization.organization', ['Organization',])`
   *
   * @param value - the `organization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InventoryItem.responsibleOrganization.organization', [
    'Organization',
  ])
  public setOrganization(value: Reference): this {
    assertIsDefined<Reference>(value, `InventoryItem.responsibleOrganization.organization is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.organization = value;
    return this;
  }

  /**
   * @returns `true` if the `organization` property exists and has a value; `false` otherwise
   */
  public hasOrganization(): boolean {
    return isDefined<Reference>(this.organization) && !this.organization.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InventoryItem.responsibleOrganization';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.role,
      this.organization,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InventoryItemResponsibleOrganizationComponent {
    const dest = new InventoryItemResponsibleOrganizationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InventoryItemResponsibleOrganizationComponent): void {
    super.copyValues(dest);
    dest.role = this.role ? this.role.copy() : null;
    dest.organization = this.organization ? this.organization.copy() : null;
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

    if (this.hasRole()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getRole()!, 'role', jsonObj);
    } else {
      missingReqdProperties.push(`InventoryItem.responsibleOrganization.role`);
    }

    if (this.hasOrganization()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getOrganization()!, 'organization', jsonObj);
    } else {
      missingReqdProperties.push(`InventoryItem.responsibleOrganization.organization`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * InventoryItemDescriptionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Descriptive characteristics of the item
 * - **Definition:** The descriptive characteristics of the inventory item.
 *
 * @category Data Models: Resource
 * @see [FHIR InventoryItem](http://hl7.org/fhir/StructureDefinition/InventoryItem)
 */
export class InventoryItemDescriptionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `InventoryItemDescriptionComponent` JSON to instantiate the InventoryItemDescriptionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InventoryItemDescriptionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InventoryItemDescriptionComponent
   * @returns InventoryItemDescriptionComponent data model or undefined for `InventoryItemDescriptionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InventoryItemDescriptionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InventoryItemDescriptionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InventoryItemDescriptionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setLanguageElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * InventoryItem.description.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The language that is used in the item description
   * - **Definition:** The language for the item description, when an item must be described in different languages and those languages may be authoritative and not translations of a \'main\' language.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private language?: CodeType | undefined;

  /**
   * InventoryItem.description.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Textual description of the item
   * - **Definition:** Textual description of the item.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `language` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getLanguageElement(): CodeType {
    return this.language ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `language` property.
   *
   * @param element - the `language` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLanguageElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid InventoryItem.description.language; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.language = element;
    } else {
      this.language = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguageElement(): boolean {
    return isDefined<CodeType>(this.language) && !this.language.isEmpty();
  }

  /**
   * @returns the `language` property value as a fhirCode if defined; else undefined
   */
  public getLanguage(): fhirCode | undefined {
    return this.language?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `language` property.
   *
   * @param value - the `language` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLanguage(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid InventoryItem.description.language (${String(value)})`;
      this.language = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.language = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguage(): boolean {
    return this.hasLanguageElement();
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
      const optErrMsg = `Invalid InventoryItem.description.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid InventoryItem.description.description (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InventoryItem.description';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.language,
      this.description,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InventoryItemDescriptionComponent {
    const dest = new InventoryItemDescriptionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InventoryItemDescriptionComponent): void {
    super.copyValues(dest);
    dest.language = this.language?.copy();
    dest.description = this.description?.copy();
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

    if (this.hasLanguageElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getLanguageElement(), 'language', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * InventoryItemAssociationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Association with other items or products
 * - **Definition:** Association with other items or products.
 *
 * @category Data Models: Resource
 * @see [FHIR InventoryItem](http://hl7.org/fhir/StructureDefinition/InventoryItem)
 */
export class InventoryItemAssociationComponent extends BackboneElement implements IBackboneElement {
  constructor(associationType: CodeableConcept | null = null, relatedItem: Reference | null = null, quantity: Ratio | null = null) {
    super();

    this.associationType = null;
    if (isDefined<CodeableConcept>(associationType)) {
      this.setAssociationType(associationType);
    }

    this.relatedItem = null;
    if (isDefined<Reference>(relatedItem)) {
      this.setRelatedItem(relatedItem);
    }

    this.quantity = null;
    if (isDefined<Ratio>(quantity)) {
      this.setQuantity(quantity);
    }
  }

  /**
   * Parse the provided `InventoryItemAssociationComponent` JSON to instantiate the InventoryItemAssociationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InventoryItemAssociationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InventoryItemAssociationComponent
   * @returns InventoryItemAssociationComponent data model or undefined for `InventoryItemAssociationComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InventoryItemAssociationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InventoryItemAssociationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InventoryItemAssociationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'associationType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setAssociationType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'relatedItem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setRelatedItem(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Ratio | undefined = Ratio.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setQuantity(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * InventoryItem.association.associationType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of association between the device and the other item
   * - **Definition:** This attribute defined the type of association when establishing associations or relations between items, e.g. \'packaged within\' or \'used with\' or \'to be mixed with.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private associationType: CodeableConcept | null;

  /**
   * InventoryItem.association.relatedItem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The related item or product
   * - **Definition:** The related item or product.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/InventoryItem',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationKnowledge',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionProduct',
   *       'http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private relatedItem: Reference | null;

  /**
   * InventoryItem.association.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The quantity of the product in this product
   * - **Definition:** The quantity of the related product in this product - Numerator is the quantity of the related product. Denominator is the quantity of the present product. For example a value of 20 means that this product contains 20 units of the related product; a value of 1:20 means the inverse - that the contained product contains 20 units of the present product.
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private quantity: Ratio | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `associationType` property value as a CodeableConcept object if defined; else null
   */
  public getAssociationType(): CodeableConcept | null {
    return this.associationType;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `associationType` property.
   *
   * @param value - the `associationType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAssociationType(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `InventoryItem.association.associationType is required`);
    const optErrMsg = `Invalid InventoryItem.association.associationType; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.associationType = value;
    return this;
  }

  /**
   * @returns `true` if the `associationType` property exists and has a value; `false` otherwise
   */
  public hasAssociationType(): boolean {
    return isDefined<CodeableConcept>(this.associationType) && !this.associationType.isEmpty();
  }

  /**
   * @returns the `relatedItem` property value as a Reference object if defined; else null
   */
  public getRelatedItem(): Reference | null {
    return this.relatedItem;
  }

  /**
   * Assigns the provided RelatedItem object value to the `relatedItem` property.
   *
   * @decorator `@ReferenceTargets('InventoryItem.association.relatedItem', ['InventoryItem','Medication','MedicationKnowledge','Device','DeviceDefinition','NutritionProduct','BiologicallyDerivedProduct',])`
   *
   * @param value - the `relatedItem` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InventoryItem.association.relatedItem', [
    'InventoryItem',
  
    'Medication',
  
    'MedicationKnowledge',
  
    'Device',
  
    'DeviceDefinition',
  
    'NutritionProduct',
  
    'BiologicallyDerivedProduct',
  ])
  public setRelatedItem(value: Reference): this {
    assertIsDefined<Reference>(value, `InventoryItem.association.relatedItem is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.relatedItem = value;
    return this;
  }

  /**
   * @returns `true` if the `relatedItem` property exists and has a value; `false` otherwise
   */
  public hasRelatedItem(): boolean {
    return isDefined<Reference>(this.relatedItem) && !this.relatedItem.isEmpty();
  }

  /**
   * @returns the `quantity` property value as a Ratio object if defined; else null
   */
  public getQuantity(): Ratio | null {
    return this.quantity;
  }

  /**
   * Assigns the provided Ratio object value to the `quantity` property.
   *
   * @param value - the `quantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantity(value: Ratio): this {
    assertIsDefined<Ratio>(value, `InventoryItem.association.quantity is required`);
    const optErrMsg = `Invalid InventoryItem.association.quantity; Provided element is not an instance of Ratio.`;
    assertFhirType<Ratio>(value, Ratio, optErrMsg);
    this.quantity = value;
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return isDefined<Ratio>(this.quantity) && !this.quantity.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InventoryItem.association';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.associationType,
      this.relatedItem,
      this.quantity,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InventoryItemAssociationComponent {
    const dest = new InventoryItemAssociationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InventoryItemAssociationComponent): void {
    super.copyValues(dest);
    dest.associationType = this.associationType ? this.associationType.copy() : null;
    dest.relatedItem = this.relatedItem ? this.relatedItem.copy() : null;
    dest.quantity = this.quantity ? this.quantity.copy() : null;
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

    if (this.hasAssociationType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getAssociationType()!, 'associationType', jsonObj);
    } else {
      missingReqdProperties.push(`InventoryItem.association.associationType`);
    }

    if (this.hasRelatedItem()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getRelatedItem()!, 'relatedItem', jsonObj);
    } else {
      missingReqdProperties.push(`InventoryItem.association.relatedItem`);
    }

    if (this.hasQuantity()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getQuantity()!, 'quantity', jsonObj);
    } else {
      missingReqdProperties.push(`InventoryItem.association.quantity`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * InventoryItemCharacteristicComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Characteristic of the item
 * - **Definition:** The descriptive or identifying characteristics of the item.
 *
 * @category Data Models: Resource
 * @see [FHIR InventoryItem](http://hl7.org/fhir/StructureDefinition/InventoryItem)
 */
export class InventoryItemCharacteristicComponent extends BackboneElement implements IBackboneElement {
  constructor(characteristicType: CodeableConcept | null = null, value: IDataType | null = null) {
    super();

    this.characteristicType = null;
    if (isDefined<CodeableConcept>(characteristicType)) {
      this.setCharacteristicType(characteristicType);
    }

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `InventoryItemCharacteristicComponent` JSON to instantiate the InventoryItemCharacteristicComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InventoryItemCharacteristicComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InventoryItemCharacteristicComponent
   * @returns InventoryItemCharacteristicComponent data model or undefined for `InventoryItemCharacteristicComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InventoryItemCharacteristicComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InventoryItemCharacteristicComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InventoryItemCharacteristicComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = InventoryItemCharacteristicComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for InventoryItemCharacteristicComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'characteristicType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCharacteristicType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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
      missingReqdProperties.push(sourceField);
    } else {
      instance.setValue(value);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * InventoryItem.characteristic.characteristicType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The characteristic that is being defined
   * - **Definition:** The type of characteristic that is being defined.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private characteristicType: CodeableConcept | null;

  /**
   * InventoryItem.characteristic.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('InventoryItem.characteristic.value[x]', ['string','integer','decimal','boolean','url','dateTime','Quantity','Range','Ratio','Annotation','Address','Duration','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The value of the attribute
   * - **Definition:** The value of the attribute.
   * - **Comment:** The string value is used for characteristics that are descriptive and not codeable information. CodeableConcept.text is used when the characteristic is discrete and could otherwise be coded but for which there is no code available.
   * - **FHIR Types:**
   *     'string',
   *     'integer',
   *     'decimal',
   *     'boolean',
   *     'url',
   *     'dateTime',
   *     'Quantity',
   *     'Range',
   *     'Ratio',
   *     'Annotation',
   *     'Address',
   *     'Duration',
   *     'CodeableConcept',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('InventoryItem.characteristic.value[x]',[
    'string',
    'integer',
    'decimal',
    'boolean',
    'url',
    'dateTime',
    'Quantity',
    'Range',
    'Ratio',
    'Annotation',
    'Address',
    'Duration',
    'CodeableConcept',
  ])
  private value: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `characteristicType` property value as a CodeableConcept object if defined; else null
   */
  public getCharacteristicType(): CodeableConcept | null {
    return this.characteristicType;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `characteristicType` property.
   *
   * @param value - the `characteristicType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacteristicType(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `InventoryItem.characteristic.characteristicType is required`);
    const optErrMsg = `Invalid InventoryItem.characteristic.characteristicType; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.characteristicType = value;
    return this;
  }

  /**
   * @returns `true` if the `characteristicType` property exists and has a value; `false` otherwise
   */
  public hasCharacteristicType(): boolean {
    return isDefined<CodeableConcept>(this.characteristicType) && !this.characteristicType.isEmpty();
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
   * @decorator `@ChoiceDataTypes('InventoryItem.characteristic.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('InventoryItem.characteristic.value[x]')
  public setValue(value: IDataType): this {
    assertIsDefined<IDataType>(value, `InventoryItem.characteristic.value[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.value = value;
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
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueStringType(): StringType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for InventoryItem.characteristic.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a IntegerType object if defined; else null
   */
  public getValueIntegerType(): IntegerType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for InventoryItem.characteristic.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && this.value instanceof IntegerType;
  }

  /**
   * @returns the `value` property value as a DecimalType object if defined; else null
   */
  public getValueDecimalType(): DecimalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for InventoryItem.characteristic.value[x]: Expected DecimalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DecimalType and has a value; `false` otherwise
   */
  public hasValueDecimalType(): boolean {
    return this.hasValue() && this.value instanceof DecimalType;
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
        `DataType mismatch for InventoryItem.characteristic.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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

  /**
   * @returns the `value` property value as a UrlType object if defined; else null
   */
  public getValueUrlType(): UrlType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UrlType)) {
      throw new InvalidTypeError(
        `DataType mismatch for InventoryItem.characteristic.value[x]: Expected UrlType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UrlType and has a value; `false` otherwise
   */
  public hasValueUrlType(): boolean {
    return this.hasValue() && this.value instanceof UrlType;
  }

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else null
   */
  public getValueDateTimeType(): DateTimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for InventoryItem.characteristic.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasValueDateTimeType(): boolean {
    return this.hasValue() && this.value instanceof DateTimeType;
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
        `DataType mismatch for InventoryItem.characteristic.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Range object if defined; else null
   */
  public getValueRange(): Range | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for InventoryItem.characteristic.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Range and has a value; `false` otherwise
   */
  public hasValueRange(): boolean {
    return this.hasValue() && this.value instanceof Range;
  }

  /**
   * @returns the `value` property value as a Ratio object if defined; else null
   */
  public getValueRatio(): Ratio | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for InventoryItem.characteristic.value[x]: Expected Ratio but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasValueRatio(): boolean {
    return this.hasValue() && this.value instanceof Ratio;
  }

  /**
   * @returns the `value` property value as a Annotation object if defined; else null
   */
  public getValueAnnotation(): Annotation | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Annotation)) {
      throw new InvalidTypeError(
        `DataType mismatch for InventoryItem.characteristic.value[x]: Expected Annotation but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Annotation and has a value; `false` otherwise
   */
  public hasValueAnnotation(): boolean {
    return this.hasValue() && this.value instanceof Annotation;
  }

  /**
   * @returns the `value` property value as a Address object if defined; else null
   */
  public getValueAddress(): Address | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Address)) {
      throw new InvalidTypeError(
        `DataType mismatch for InventoryItem.characteristic.value[x]: Expected Address but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Address and has a value; `false` otherwise
   */
  public hasValueAddress(): boolean {
    return this.hasValue() && this.value instanceof Address;
  }

  /**
   * @returns the `value` property value as a Duration object if defined; else null
   */
  public getValueDuration(): Duration | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for InventoryItem.characteristic.value[x]: Expected Duration but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Duration and has a value; `false` otherwise
   */
  public hasValueDuration(): boolean {
    return this.hasValue() && this.value instanceof Duration;
  }

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for InventoryItem.characteristic.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InventoryItem.characteristic';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.characteristicType,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InventoryItemCharacteristicComponent {
    const dest = new InventoryItemCharacteristicComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InventoryItemCharacteristicComponent): void {
    super.copyValues(dest);
    dest.characteristicType = this.characteristicType ? this.characteristicType.copy() : null;
    dest.value = this.value ? this.value.copy() as IDataType : null;
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

    if (this.hasCharacteristicType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCharacteristicType()!, 'characteristicType', jsonObj);
    } else {
      missingReqdProperties.push(`InventoryItem.characteristic.characteristicType`);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`InventoryItem.characteristic.value[x]`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * InventoryItemInstanceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Instances or occurrences of the product
 * - **Definition:** Instances or occurrences of the product.
 *
 * @category Data Models: Resource
 * @see [FHIR InventoryItem](http://hl7.org/fhir/StructureDefinition/InventoryItem)
 */
export class InventoryItemInstanceComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `InventoryItemInstanceComponent` JSON to instantiate the InventoryItemInstanceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InventoryItemInstanceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InventoryItemInstanceComponent
   * @returns InventoryItemInstanceComponent data model or undefined for `InventoryItemInstanceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InventoryItemInstanceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InventoryItemInstanceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InventoryItemInstanceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * InventoryItem.instance.identifier Element
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
   * InventoryItem.instance.lotNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The lot or batch number of the item
   * - **Definition:** The lot or batch number of the item.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lotNumber?: StringType | undefined;

  /**
   * InventoryItem.instance.expiry Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The expiry date or date and time for the product
   * - **Definition:** The expiry date or date and time for the product.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expiry?: DateTimeType | undefined;

  /**
   * InventoryItem.instance.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The subject that the item is associated with
   * - **Definition:** The subject that the item is associated with.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subject?: Reference | undefined;

  /**
   * InventoryItem.instance.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The location that the item is associated with
   * - **Definition:** The location that the item is associated with.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private location?: Reference | undefined;

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
      const optErrMsg = `Invalid InventoryItem.instance.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid InventoryItem.instance.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid InventoryItem.instance.lotNumber; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid InventoryItem.instance.lotNumber (${String(value)})`;
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
      const optErrMsg = `Invalid InventoryItem.instance.expiry; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid InventoryItem.instance.expiry (${String(value)})`;
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
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('InventoryItem.instance.subject', ['Patient','Organization',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InventoryItem.instance.subject', [
    'Patient',
  
    'Organization',
  ])
  public setSubject(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefined<Reference>(this.subject) && !this.subject.isEmpty();
  }

  /**
   * @returns the `location` property value as a Reference object; else an empty Reference object
   */
  public getLocation(): Reference {
    return this.location ?? new Reference();
  }

  /**
   * Assigns the provided Location object value to the `location` property.
   *
   * @decorator `@ReferenceTargets('InventoryItem.instance.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InventoryItem.instance.location', [
    'Location',
  ])
  public setLocation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.location = value;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return isDefined<Reference>(this.location) && !this.location.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InventoryItem.instance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.lotNumber,
      this.expiry,
      this.subject,
      this.location,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InventoryItemInstanceComponent {
    const dest = new InventoryItemInstanceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InventoryItemInstanceComponent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.lotNumber = this.lotNumber?.copy();
    dest.expiry = this.expiry?.copy();
    dest.subject = this.subject?.copy();
    dest.location = this.location?.copy();
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

    if (this.hasLotNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLotNumberElement(), 'lotNumber', jsonObj);
    }

    if (this.hasExpiryElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getExpiryElement(), 'expiry', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    return jsonObj;
  }
}
