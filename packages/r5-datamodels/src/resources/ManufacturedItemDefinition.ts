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
 * StructureDefinition.fhirVersion: 5.0.0
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
  MarkdownType,
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
  fhirString,
  fhirStringSchema,
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
import { Attachment, CodeableConcept, CodeableReference, Identifier, MarketingStatus, PARSABLE_DATATYPE_MAP, Quantity, Reference } from '../complex-types/complex-datatypes';
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
 * - **FHIR Version:** 5.0.0
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

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
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

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
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

    fieldName = 'marketingStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: MarketingStatus | undefined = MarketingStatus.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addMarketingStatus(datatype);
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

    fieldName = 'component';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ManufacturedItemDefinitionComponentComponent | undefined = ManufacturedItemDefinitionComponentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addComponent(component);
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
   * ManufacturedItemDefinition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A descriptive name applied to this item
   * - **Definition:** A descriptive name applied to this item.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

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
   * - **Short:** The "real-world" units in which the quantity of the item is described
   * - **Definition:** The "real-world" units in which the quantity of the manufactured item is described.
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
   * - **Short:** Manufacturer of the item, one of several possible
   * - **Definition:** Manufacturer of the item, one of several possible.
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
   * ManufacturedItemDefinition.marketingStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated
   * - **Definition:** Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated.
   * - **FHIR Type:** `MarketingStatus`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private marketingStatus?: MarketingStatus[] | undefined;

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

  /**
   * ManufacturedItemDefinition.component Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup
   * - **Definition:** Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private component?: ManufacturedItemDefinitionComponentComponent[] | undefined;

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
   * @returns the `name` property value as a StringType object if defined; else an empty StringType object
   */
  public getNameElement(): StringType {
    return this.name ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `name` property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.name; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<StringType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirString if defined; else undefined
   */
  public getName(): fhirString | undefined {
    return this.name?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.name (${String(value)})`;
      this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
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
   * @returns the `marketingStatus` property value as a MarketingStatus array
   */
  public getMarketingStatus(): MarketingStatus[] {
    return this.marketingStatus ?? ([] as MarketingStatus[]);
  }

  /**
   * Assigns the provided MarketingStatus array value to the `marketingStatus` property.
   *
   * @param value - the `marketingStatus` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMarketingStatus(value: MarketingStatus[] | undefined): this {
    if (isDefinedList<MarketingStatus>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.marketingStatus; Provided value array has an element that is not an instance of MarketingStatus.`;
      assertFhirTypeList<MarketingStatus>(value, MarketingStatus, optErrMsg);
      this.marketingStatus = value;
    } else {
      this.marketingStatus = undefined;
    }
    return this;
  }

  /**
   * Add the provided MarketingStatus value to the `marketingStatus` array property.
   *
   * @param value - the `marketingStatus` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMarketingStatus(value: MarketingStatus | undefined): this {
    if (isDefined<MarketingStatus>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.marketingStatus; Provided element is not an instance of MarketingStatus.`;
      assertFhirType<MarketingStatus>(value, MarketingStatus, optErrMsg);
      this.initMarketingStatus();
      this.marketingStatus?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `marketingStatus` property exists and has a value; `false` otherwise
   */
  public hasMarketingStatus(): boolean {
    return isDefinedList<MarketingStatus>(this.marketingStatus) && this.marketingStatus.some((item: MarketingStatus) => !item.isEmpty());
  }

  /**
   * Initialize the `marketingStatus` property
   */
  private initMarketingStatus(): void {
    if(!this.hasMarketingStatus()) {
      this.marketingStatus = [] as MarketingStatus[];
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

  /**
   * @returns the `component` property value as a ManufacturedItemDefinitionComponentComponent array
   */
  public getComponent(): ManufacturedItemDefinitionComponentComponent[] {
    return this.component ?? ([] as ManufacturedItemDefinitionComponentComponent[]);
  }

  /**
   * Assigns the provided ManufacturedItemDefinitionComponentComponent array value to the `component` property.
   *
   * @param value - the `component` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComponent(value: ManufacturedItemDefinitionComponentComponent[] | undefined): this {
    if (isDefinedList<ManufacturedItemDefinitionComponentComponent>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component; Provided value array has an element that is not an instance of ManufacturedItemDefinitionComponentComponent.`;
      assertFhirTypeList<ManufacturedItemDefinitionComponentComponent>(value, ManufacturedItemDefinitionComponentComponent, optErrMsg);
      this.component = value;
    } else {
      this.component = undefined;
    }
    return this;
  }

  /**
   * Add the provided ManufacturedItemDefinitionComponentComponent value to the `component` array property.
   *
   * @param value - the `component` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addComponent(value: ManufacturedItemDefinitionComponentComponent | undefined): this {
    if (isDefined<ManufacturedItemDefinitionComponentComponent>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component; Provided element is not an instance of ManufacturedItemDefinitionComponentComponent.`;
      assertFhirType<ManufacturedItemDefinitionComponentComponent>(value, ManufacturedItemDefinitionComponentComponent, optErrMsg);
      this.initComponent();
      this.component?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `component` property exists and has a value; `false` otherwise
   */
  public hasComponent(): boolean {
    return isDefinedList<ManufacturedItemDefinitionComponentComponent>(this.component) && this.component.some((item: ManufacturedItemDefinitionComponentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `component` property
   */
  private initComponent(): void {
    if(!this.hasComponent()) {
      this.component = [] as ManufacturedItemDefinitionComponentComponent[];
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
      this.name,
      this.manufacturedDoseForm,
      this.unitOfPresentation,
      this.manufacturer,
      this.marketingStatus,
      this.ingredient,
      this.property,
      this.component,
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
    dest.name = this.name?.copy();
    dest.manufacturedDoseForm = this.manufacturedDoseForm ? this.manufacturedDoseForm.copy() : null;
    dest.unitOfPresentation = this.unitOfPresentation?.copy();
    const manufacturerList = copyListValues<Reference>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
    const marketingStatusList = copyListValues<MarketingStatus>(this.marketingStatus);
    dest.marketingStatus = marketingStatusList.length === 0 ? undefined : marketingStatusList;
    const ingredientList = copyListValues<CodeableConcept>(this.ingredient);
    dest.ingredient = ingredientList.length === 0 ? undefined : ingredientList;
    const propertyList = copyListValues<ManufacturedItemDefinitionPropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
    const componentList = copyListValues<ManufacturedItemDefinitionComponentComponent>(this.component);
    dest.component = componentList.length === 0 ? undefined : componentList;
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

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
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

    if (this.hasMarketingStatus()) {
      setFhirComplexListJson(this.getMarketingStatus(), 'marketingStatus', jsonObj);
    }

    if (this.hasIngredient()) {
      setFhirComplexListJson(this.getIngredient(), 'ingredient', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirBackboneElementListJson(this.getProperty(), 'property', jsonObj);
    }

    if (this.hasComponent()) {
      setFhirBackboneElementListJson(this.getComponent(), 'component', jsonObj);
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
   * @decorator `@ChoiceDataTypesMeta('ManufacturedItemDefinition.property.value[x]', ['CodeableConcept','Quantity','date','boolean','markdown','Attachment','Reference',]`
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
   *     'markdown',
   *     'Attachment',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('ManufacturedItemDefinition.property.value[x]',[
    'CodeableConcept',
    'Quantity',
    'date',
    'boolean',
    'markdown',
    'Attachment',
    'Reference',
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
   * @returns the `value` property value as a MarkdownType object if defined; else undefined
   */
  public getValueMarkdownType(): MarkdownType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof MarkdownType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ManufacturedItemDefinition.property.value[x]: Expected MarkdownType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a MarkdownType and has a value; `false` otherwise
   */
  public hasValueMarkdownType(): boolean {
    return this.hasValue() && this.value instanceof MarkdownType;
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

  /**
   * @returns the `value` property value as a Reference object if defined; else undefined
   */
  public getValueReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for ManufacturedItemDefinition.property.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Reference and has a value; `false` otherwise
   */
  public hasValueReference(): boolean {
    return this.hasValue() && this.value instanceof Reference;
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
/**
 * ManufacturedItemDefinitionComponentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup
 * - **Definition:** Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup.
 *
 * @category Data Models: Resource
 * @see [FHIR ManufacturedItemDefinition](http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition)
 */
export class ManufacturedItemDefinitionComponentComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `ManufacturedItemDefinitionComponentComponent` JSON to instantiate the ManufacturedItemDefinitionComponentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ManufacturedItemDefinitionComponentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ManufacturedItemDefinitionComponentComponent
   * @returns ManufacturedItemDefinitionComponentComponent data model or undefined for `ManufacturedItemDefinitionComponentComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ManufacturedItemDefinitionComponentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ManufacturedItemDefinitionComponentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ManufacturedItemDefinitionComponentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

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

    fieldName = 'function';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addFunction(datatype);
          }
        });
      }
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Quantity | undefined = Quantity.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAmount(datatype);
          }
        });
      }
    }

    fieldName = 'constituent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ManufacturedItemDefinitionComponentConstituentComponent | undefined = ManufacturedItemDefinitionComponentConstituentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addConstituent(component);
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

    fieldName = 'component';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ManufacturedItemDefinitionComponentComponent | undefined = ManufacturedItemDefinitionComponentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addComponent(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * ManufacturedItemDefinition.component.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Defining type of the component e.g. shell, layer, ink
   * - **Definition:** Defining type of the component e.g. shell, layer, ink.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * ManufacturedItemDefinition.component.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The function of this component within the item e.g. delivers active ingredient, masks taste
   * - **Definition:** The function of this component within the item e.g. delivers active ingredient, masks taste.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private function_?: CodeableConcept[] | undefined;

  /**
   * ManufacturedItemDefinition.component.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The measurable amount of total quantity of all substances in the component, expressable in different ways (e.g. by mass or volume)
   * - **Definition:** The measurable amount of total quantity of all substances in the component, expressable in different ways (e.g. by mass or volume).
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount?: Quantity[] | undefined;

  /**
   * ManufacturedItemDefinition.component.constituent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item\'s ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient)
   * - **Definition:** A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item\'s ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private constituent?: ManufacturedItemDefinitionComponentConstituentComponent[] | undefined;

  /**
   * ManufacturedItemDefinition.component.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General characteristics of this component
   * - **Definition:** General characteristics of this component.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private property?: ManufacturedItemDefinitionPropertyComponent[] | undefined;

  /**
   * ManufacturedItemDefinition.component.component Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A component that this component contains or is made from
   * - **Definition:** A component that this component contains or is made from.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private component?: ManufacturedItemDefinitionComponentComponent[] | undefined;

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
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `function_` property value as a CodeableConcept array
   */
  public getFunction(): CodeableConcept[] {
    return this.function_ ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `function_` property.
   *
   * @param value - the `function_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFunction(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.function; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.function_ = value;
    } else {
      this.function_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `function_` array property.
   *
   * @param value - the `function_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFunction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.function; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initFunction();
      this.function_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `function_` property exists and has a value; `false` otherwise
   */
  public hasFunction(): boolean {
    return isDefinedList<CodeableConcept>(this.function_) && this.function_.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `function_` property
   */
  private initFunction(): void {
    if(!this.hasFunction()) {
      this.function_ = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `amount` property value as a Quantity array
   */
  public getAmount(): Quantity[] {
    return this.amount ?? ([] as Quantity[]);
  }

  /**
   * Assigns the provided Quantity array value to the `amount` property.
   *
   * @param value - the `amount` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Quantity[] | undefined): this {
    if (isDefinedList<Quantity>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.amount; Provided value array has an element that is not an instance of Quantity.`;
      assertFhirTypeList<Quantity>(value, Quantity, optErrMsg);
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * Add the provided Quantity value to the `amount` array property.
   *
   * @param value - the `amount` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAmount(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.amount; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.initAmount();
      this.amount?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefinedList<Quantity>(this.amount) && this.amount.some((item: Quantity) => !item.isEmpty());
  }

  /**
   * Initialize the `amount` property
   */
  private initAmount(): void {
    if(!this.hasAmount()) {
      this.amount = [] as Quantity[];
    }
  }

  /**
   * @returns the `constituent` property value as a ManufacturedItemDefinitionComponentConstituentComponent array
   */
  public getConstituent(): ManufacturedItemDefinitionComponentConstituentComponent[] {
    return this.constituent ?? ([] as ManufacturedItemDefinitionComponentConstituentComponent[]);
  }

  /**
   * Assigns the provided ManufacturedItemDefinitionComponentConstituentComponent array value to the `constituent` property.
   *
   * @param value - the `constituent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConstituent(value: ManufacturedItemDefinitionComponentConstituentComponent[] | undefined): this {
    if (isDefinedList<ManufacturedItemDefinitionComponentConstituentComponent>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.constituent; Provided value array has an element that is not an instance of ManufacturedItemDefinitionComponentConstituentComponent.`;
      assertFhirTypeList<ManufacturedItemDefinitionComponentConstituentComponent>(value, ManufacturedItemDefinitionComponentConstituentComponent, optErrMsg);
      this.constituent = value;
    } else {
      this.constituent = undefined;
    }
    return this;
  }

  /**
   * Add the provided ManufacturedItemDefinitionComponentConstituentComponent value to the `constituent` array property.
   *
   * @param value - the `constituent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addConstituent(value: ManufacturedItemDefinitionComponentConstituentComponent | undefined): this {
    if (isDefined<ManufacturedItemDefinitionComponentConstituentComponent>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.constituent; Provided element is not an instance of ManufacturedItemDefinitionComponentConstituentComponent.`;
      assertFhirType<ManufacturedItemDefinitionComponentConstituentComponent>(value, ManufacturedItemDefinitionComponentConstituentComponent, optErrMsg);
      this.initConstituent();
      this.constituent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `constituent` property exists and has a value; `false` otherwise
   */
  public hasConstituent(): boolean {
    return isDefinedList<ManufacturedItemDefinitionComponentConstituentComponent>(this.constituent) && this.constituent.some((item: ManufacturedItemDefinitionComponentConstituentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `constituent` property
   */
  private initConstituent(): void {
    if(!this.hasConstituent()) {
      this.constituent = [] as ManufacturedItemDefinitionComponentConstituentComponent[];
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
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.property; Provided value array has an element that is not an instance of ManufacturedItemDefinitionPropertyComponent.`;
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
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.property; Provided element is not an instance of ManufacturedItemDefinitionPropertyComponent.`;
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

  /**
   * @returns the `component` property value as a ManufacturedItemDefinitionComponentComponent array
   */
  public getComponent(): ManufacturedItemDefinitionComponentComponent[] {
    return this.component ?? ([] as ManufacturedItemDefinitionComponentComponent[]);
  }

  /**
   * Assigns the provided ManufacturedItemDefinitionComponentComponent array value to the `component` property.
   *
   * @param value - the `component` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComponent(value: ManufacturedItemDefinitionComponentComponent[] | undefined): this {
    if (isDefinedList<ManufacturedItemDefinitionComponentComponent>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.component; Provided value array has an element that is not an instance of ManufacturedItemDefinitionComponentComponent.`;
      assertFhirTypeList<ManufacturedItemDefinitionComponentComponent>(value, ManufacturedItemDefinitionComponentComponent, optErrMsg);
      this.component = value;
    } else {
      this.component = undefined;
    }
    return this;
  }

  /**
   * Add the provided ManufacturedItemDefinitionComponentComponent value to the `component` array property.
   *
   * @param value - the `component` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addComponent(value: ManufacturedItemDefinitionComponentComponent | undefined): this {
    if (isDefined<ManufacturedItemDefinitionComponentComponent>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.component; Provided element is not an instance of ManufacturedItemDefinitionComponentComponent.`;
      assertFhirType<ManufacturedItemDefinitionComponentComponent>(value, ManufacturedItemDefinitionComponentComponent, optErrMsg);
      this.initComponent();
      this.component?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `component` property exists and has a value; `false` otherwise
   */
  public hasComponent(): boolean {
    return isDefinedList<ManufacturedItemDefinitionComponentComponent>(this.component) && this.component.some((item: ManufacturedItemDefinitionComponentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `component` property
   */
  private initComponent(): void {
    if(!this.hasComponent()) {
      this.component = [] as ManufacturedItemDefinitionComponentComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ManufacturedItemDefinition.component';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.function_,
      this.amount,
      this.constituent,
      this.property,
      this.component,
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
  public override copy(): ManufacturedItemDefinitionComponentComponent {
    const dest = new ManufacturedItemDefinitionComponentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ManufacturedItemDefinitionComponentComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const functionList = copyListValues<CodeableConcept>(this.function_);
    dest.function_ = functionList.length === 0 ? undefined : functionList;
    const amountList = copyListValues<Quantity>(this.amount);
    dest.amount = amountList.length === 0 ? undefined : amountList;
    const constituentList = copyListValues<ManufacturedItemDefinitionComponentConstituentComponent>(this.constituent);
    dest.constituent = constituentList.length === 0 ? undefined : constituentList;
    const propertyList = copyListValues<ManufacturedItemDefinitionPropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
    const componentList = copyListValues<ManufacturedItemDefinitionComponentComponent>(this.component);
    dest.component = componentList.length === 0 ? undefined : componentList;
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

    if (this.hasFunction()) {
      setFhirComplexListJson(this.getFunction(), 'function', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexListJson(this.getAmount(), 'amount', jsonObj);
    }

    if (this.hasConstituent()) {
      setFhirBackboneElementListJson(this.getConstituent(), 'constituent', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirBackboneElementListJson(this.getProperty(), 'property', jsonObj);
    }

    if (this.hasComponent()) {
      setFhirBackboneElementListJson(this.getComponent(), 'component', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ManufacturedItemDefinitionComponentConstituentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item\'s ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient)
 * - **Definition:** A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item\'s ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient).
 *
 * @category Data Models: Resource
 * @see [FHIR ManufacturedItemDefinition](http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition)
 */
export class ManufacturedItemDefinitionComponentConstituentComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ManufacturedItemDefinitionComponentConstituentComponent` JSON to instantiate the ManufacturedItemDefinitionComponentConstituentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ManufacturedItemDefinitionComponentConstituentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ManufacturedItemDefinitionComponentConstituentComponent
   * @returns ManufacturedItemDefinitionComponentConstituentComponent data model or undefined for `ManufacturedItemDefinitionComponentConstituentComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ManufacturedItemDefinitionComponentConstituentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ManufacturedItemDefinitionComponentConstituentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ManufacturedItemDefinitionComponentConstituentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Quantity | undefined = Quantity.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAmount(datatype);
          }
        });
      }
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addLocation(datatype);
          }
        });
      }
    }

    fieldName = 'function';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addFunction(datatype);
          }
        });
      }
    }

    fieldName = 'hasIngredient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addHasIngredient(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * ManufacturedItemDefinition.component.constituent.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The measurable amount of the substance, expressable in different ways (e.g. by mass or volume)
   * - **Definition:** The measurable amount of the substance, expressable in different ways (e.g. by mass or volume).
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount?: Quantity[] | undefined;

  /**
   * ManufacturedItemDefinition.component.constituent.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The physical location of the constituent/ingredient within the component
   * - **Definition:** The physical location of the constituent/ingredient within the component. Example - if the component is the bead in the capsule, then the location would be where the ingredient resides within the product part - intragranular, extra-granular, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private location?: CodeableConcept[] | undefined;

  /**
   * ManufacturedItemDefinition.component.constituent.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The function of this constituent within the component e.g. binder
   * - **Definition:** The function of this constituent within the component e.g. binder.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private function_?: CodeableConcept[] | undefined;

  /**
   * ManufacturedItemDefinition.component.constituent.hasIngredient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The ingredient that is the constituent of the given component
   * - **Definition:** The ingredient that is the constituent of the given component.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Ingredient',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private hasIngredient?: CodeableReference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `amount` property value as a Quantity array
   */
  public getAmount(): Quantity[] {
    return this.amount ?? ([] as Quantity[]);
  }

  /**
   * Assigns the provided Quantity array value to the `amount` property.
   *
   * @param value - the `amount` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Quantity[] | undefined): this {
    if (isDefinedList<Quantity>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.constituent.amount; Provided value array has an element that is not an instance of Quantity.`;
      assertFhirTypeList<Quantity>(value, Quantity, optErrMsg);
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * Add the provided Quantity value to the `amount` array property.
   *
   * @param value - the `amount` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAmount(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.constituent.amount; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.initAmount();
      this.amount?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefinedList<Quantity>(this.amount) && this.amount.some((item: Quantity) => !item.isEmpty());
  }

  /**
   * Initialize the `amount` property
   */
  private initAmount(): void {
    if(!this.hasAmount()) {
      this.amount = [] as Quantity[];
    }
  }

  /**
   * @returns the `location` property value as a CodeableConcept array
   */
  public getLocation(): CodeableConcept[] {
    return this.location ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `location` property.
   *
   * @param value - the `location` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLocation(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.constituent.location; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.location = value;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `location` array property.
   *
   * @param value - the `location` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLocation(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.constituent.location; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initLocation();
      this.location?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return isDefinedList<CodeableConcept>(this.location) && this.location.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `location` property
   */
  private initLocation(): void {
    if(!this.hasLocation()) {
      this.location = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `function_` property value as a CodeableConcept array
   */
  public getFunction(): CodeableConcept[] {
    return this.function_ ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `function_` property.
   *
   * @param value - the `function_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFunction(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.constituent.function; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.function_ = value;
    } else {
      this.function_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `function_` array property.
   *
   * @param value - the `function_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFunction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.constituent.function; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initFunction();
      this.function_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `function_` property exists and has a value; `false` otherwise
   */
  public hasFunction(): boolean {
    return isDefinedList<CodeableConcept>(this.function_) && this.function_.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `function_` property
   */
  private initFunction(): void {
    if(!this.hasFunction()) {
      this.function_ = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `hasIngredient` property value as a CodeableReference array
   */
  public getHasIngredient(): CodeableReference[] {
    return this.hasIngredient ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `hasIngredient` property.
   *
   * @param value - the `hasIngredient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setHasIngredient(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.constituent.hasIngredient; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.hasIngredient = value;
    } else {
      this.hasIngredient = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `hasIngredient` array property.
   *
   * @param value - the `hasIngredient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addHasIngredient(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ManufacturedItemDefinition.component.constituent.hasIngredient; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initHasIngredient();
      this.hasIngredient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `hasIngredient` property exists and has a value; `false` otherwise
   */
  public hasHasIngredient(): boolean {
    return isDefinedList<CodeableReference>(this.hasIngredient) && this.hasIngredient.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `hasIngredient` property
   */
  private initHasIngredient(): void {
    if(!this.hasHasIngredient()) {
      this.hasIngredient = [] as CodeableReference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ManufacturedItemDefinition.component.constituent';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.amount,
      this.location,
      this.function_,
      this.hasIngredient,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ManufacturedItemDefinitionComponentConstituentComponent {
    const dest = new ManufacturedItemDefinitionComponentConstituentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ManufacturedItemDefinitionComponentConstituentComponent): void {
    super.copyValues(dest);
    const amountList = copyListValues<Quantity>(this.amount);
    dest.amount = amountList.length === 0 ? undefined : amountList;
    const locationList = copyListValues<CodeableConcept>(this.location);
    dest.location = locationList.length === 0 ? undefined : locationList;
    const functionList = copyListValues<CodeableConcept>(this.function_);
    dest.function_ = functionList.length === 0 ? undefined : functionList;
    const hasIngredientList = copyListValues<CodeableReference>(this.hasIngredient);
    dest.hasIngredient = hasIngredientList.length === 0 ? undefined : hasIngredientList;
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

    if (this.hasAmount()) {
      setFhirComplexListJson(this.getAmount(), 'amount', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexListJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasFunction()) {
      setFhirComplexListJson(this.getFunction(), 'function', jsonObj);
    }

    if (this.hasHasIngredient()) {
      setFhirComplexListJson(this.getHasIngredient(), 'hasIngredient', jsonObj);
    }

    return jsonObj;
  }
}
