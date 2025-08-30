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
 * PackagedProductDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition
 * StructureDefinition.name: PackagedProductDefinition
 * StructureDefinition.description: A medically related item or items, in a container or package.
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
  DateTimeType,
  DateType,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  IntegerType,
  InvalidTypeError,
  JSON,
  MarkdownType,
  ReferenceTargets,
  StringType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirInteger,
  fhirIntegerSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
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
import { Attachment, CodeableConcept, CodeableReference, Identifier, MarketingStatus, PARSABLE_DATATYPE_MAP, ProductShelfLife, Quantity, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * PackagedProductDefinition Class
 *
 * @remarks
 * A medically related item or items, in a container or package.
 *
 * **FHIR Specification**
 * - **Short:** A medically related item or items, in a container or package
 * - **Definition:** A medically related item or items, in a container or package.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR PackagedProductDefinition](http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition)
 */
export class PackagedProductDefinition extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `PackagedProductDefinition` JSON to instantiate the PackagedProductDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `PackagedProductDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PackagedProductDefinition
   * @returns PackagedProductDefinition data model or undefined for `PackagedProductDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): PackagedProductDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PackagedProductDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PackagedProductDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'PackagedProductDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

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

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'packageFor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPackageFor(datatype);
        }
      });
  }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatus(datatype);
    }

    fieldName = 'statusDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setStatusDateElement(datatype);
    }

    fieldName = 'containedItemQuantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Quantity | undefined = Quantity.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addContainedItemQuantity(datatype);
        }
      });
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'legalStatusOfSupply';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PackagedProductDefinitionLegalStatusOfSupplyComponent | undefined = PackagedProductDefinitionLegalStatusOfSupplyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addLegalStatusOfSupply(component);
        }
      });
    }

    fieldName = 'marketingStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: MarketingStatus | undefined = MarketingStatus.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addMarketingStatus(datatype);
        }
      });
    }

    fieldName = 'copackagedIndicator';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setCopackagedIndicatorElement(datatype);
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

    fieldName = 'attachedDocument';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAttachedDocument(datatype);
        }
      });
  }

    fieldName = 'packaging';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: PackagedProductDefinitionPackagingComponent | undefined = PackagedProductDefinitionPackagingComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPackaging(component);
    }

    fieldName = 'characteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PackagedProductDefinitionPackagingPropertyComponent | undefined = PackagedProductDefinitionPackagingPropertyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCharacteristic(component);
        }
      });
    }

    return instance;
  }

  /**
   * PackagedProductDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A unique identifier for this package as whole - not for the content of the package
   * - **Definition:** A unique identifier for this package as whole - not the the content of the package. Unique instance identifiers assigned to a package by manufacturers, regulators, drug catalogue custodians or other organizations.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * PackagedProductDefinition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A name for this package. Typically as listed in a drug formulary, catalogue, inventory etc
   * - **Definition:** A name for this package. Typically what it would be listed as in a drug formulary or catalogue, inventory etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * PackagedProductDefinition.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A high level category e.g. medicinal product, raw material, shipping container etc
   * - **Definition:** A high level category e.g. medicinal product, raw material, shipping/transport container, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * PackagedProductDefinition.packageFor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The product that this is a pack for
   * - **Definition:** The product this package model relates to, not the contents of the package (for which see package.containedItem).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private packageFor?: Reference[] | undefined;

  /**
   * PackagedProductDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status within the lifecycle of this item. High level - not intended to duplicate details elsewhere e.g. legal status, or authorization/marketing status
   * - **Definition:** The status within the lifecycle of this item. A high level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization or marketing status.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that can indicate that a record should not be treated as valid
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * PackagedProductDefinition.statusDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date at which the given status became applicable
   * - **Definition:** The date at which the given status became applicable.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private statusDate?: DateTimeType | undefined;

  /**
   * PackagedProductDefinition.containedItemQuantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size. See also packaging.containedItem.amount (especially the long definition)
   * - **Definition:** A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size. This attribute differs from containedItem.amount in that it can give a single aggregated count of all tablet types in a pack, even when these are different manufactured items. For example a pill pack of 21 tablets plus 7 sugar tablets, can be denoted here as \'28 tablets\'. This attribute is repeatable so that the different item types in one pack type can be counted (e.g. a count of vials and count of syringes). Each repeat must have different units, so that it is clear what the different sets of counted items are, and it is not intended to allow different counts of similar items (e.g. not \'2 tubes and 3 tubes\'). Repeats are not to be used to represent different pack sizes (e.g. 20 pack vs. 50 pack) - which would be different instances of this resource.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private containedItemQuantity?: Quantity[] | undefined;

  /**
   * PackagedProductDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Textual description. Note that this is not the name of the package or product
   * - **Definition:** Textual description. Note that this is not the name of the package or product.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * PackagedProductDefinition.legalStatusOfSupply Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The legal status of supply of the packaged item as classified by the regulator
   * - **Definition:** The legal status of supply of the packaged item as classified by the regulator.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private legalStatusOfSupply?: PackagedProductDefinitionLegalStatusOfSupplyComponent[] | undefined;

  /**
   * PackagedProductDefinition.marketingStatus Element
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
   * PackagedProductDefinition.copackagedIndicator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifies if the drug product is supplied with another item such as a diluent or adjuvant
   * - **Definition:** Identifies if the package contains different items, such as when a drug product is supplied with another item e.g. a diluent or adjuvant.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private copackagedIndicator?: BooleanType | undefined;

  /**
   * PackagedProductDefinition.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Manufacturer of this package type (multiple means these are all possible manufacturers)
   * - **Definition:** Manufacturer of this package type. When there are multiple it means these are all possible manufacturers.
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
   * PackagedProductDefinition.attachedDocument Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information or supporting documentation about the packaged product
   * - **Definition:** Additional information or supporting documentation about the packaged product.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private attachedDocument?: Reference[] | undefined;

  /**
   * PackagedProductDefinition.packaging Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap
   * - **Definition:** A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (which is not a device or a medication manufactured item).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private packaging?: PackagedProductDefinitionPackagingComponent | undefined;

  /**
   * PackagedProductDefinition.characteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allows the key features to be recorded, such as "hospital pack", "nurse prescribable"
   * - **Definition:** Allows the key features to be recorded, such as "hospital pack", "nurse prescribable", "calendar pack".
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private characteristic?: PackagedProductDefinitionPackagingPropertyComponent[] | undefined;

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
      const optErrMsg = `Invalid PackagedProductDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.name (${String(value)})`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `packageFor` property value as a Reference array
   */
  public getPackageFor(): Reference[] {
    return this.packageFor ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `packageFor` property.
   *
   * @decorator `@ReferenceTargets('PackagedProductDefinition.packageFor', ['MedicinalProductDefinition',])`
   *
   * @param value - the `packageFor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PackagedProductDefinition.packageFor', [
    'MedicinalProductDefinition',
  ])
  public setPackageFor(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.packageFor = value;
    } else {
      this.packageFor = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `packageFor` array property.
   *
   * @decorator `@ReferenceTargets('PackagedProductDefinition.packageFor', ['MedicinalProductDefinition',])`
   *
   * @param value - the `packageFor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PackagedProductDefinition.packageFor', [
    'MedicinalProductDefinition',
  ])
  public addPackageFor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPackageFor();
      this.packageFor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `packageFor` property exists and has a value; `false` otherwise
   */
  public hasPackageFor(): boolean {
    return isDefinedList<Reference>(this.packageFor) && this.packageFor.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `packageFor` property
   */
  private initPackageFor(): void {
    if (!this.hasPackageFor()) {
      this.packageFor = [] as Reference[];
    }
  }

  /**
   * @returns the `status` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStatus(): CodeableConcept {
    return this.status ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Status object value to the `status` property.
   *
   * @param value - the `status` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.status; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.status = value;
    } else {
      this.status = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return isDefined<CodeableConcept>(this.status) && !this.status.isEmpty();
  }

  /**
   * @returns the `statusDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getStatusDateElement(): DateTimeType {
    return this.statusDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `statusDate` property.
   *
   * @param element - the `statusDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid PackagedProductDefinition.statusDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.statusDate = element;
    } else {
      this.statusDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusDate` property exists and has a value; `false` otherwise
   */
  public hasStatusDateElement(): boolean {
    return isDefined<DateTimeType>(this.statusDate) && !this.statusDate.isEmpty();
  }

  /**
   * @returns the `statusDate` property value as a fhirDateTime if defined; else undefined
   */
  public getStatusDate(): fhirDateTime | undefined {
    return this.statusDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `statusDate` property.
   *
   * @param value - the `statusDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.statusDate (${String(value)})`;
      this.statusDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.statusDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusDate` property exists and has a value; `false` otherwise
   */
  public hasStatusDate(): boolean {
    return this.hasStatusDateElement();
  }

  /**
   * @returns the `containedItemQuantity` property value as a Quantity array
   */
  public getContainedItemQuantity(): Quantity[] {
    return this.containedItemQuantity ?? ([] as Quantity[]);
  }

  /**
   * Assigns the provided Quantity array value to the `containedItemQuantity` property.
   *
   * @param value - the `containedItemQuantity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContainedItemQuantity(value: Quantity[] | undefined): this {
    if (isDefinedList<Quantity>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.containedItemQuantity; Provided value array has an element that is not an instance of Quantity.`;
      assertFhirTypeList<Quantity>(value, Quantity, optErrMsg);
      this.containedItemQuantity = value;
    } else {
      this.containedItemQuantity = undefined;
    }
    return this;
  }

  /**
   * Add the provided Quantity value to the `containedItemQuantity` array property.
   *
   * @param value - the `containedItemQuantity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContainedItemQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.containedItemQuantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.initContainedItemQuantity();
      this.containedItemQuantity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `containedItemQuantity` property exists and has a value; `false` otherwise
   */
  public hasContainedItemQuantity(): boolean {
    return isDefinedList<Quantity>(this.containedItemQuantity) && this.containedItemQuantity.some((item: Quantity) => !item.isEmpty());
  }

  /**
   * Initialize the `containedItemQuantity` property
   */
  private initContainedItemQuantity(): void {
    if(!this.hasContainedItemQuantity()) {
      this.containedItemQuantity = [] as Quantity[];
    }
  }

  /**
   * @returns the `description` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDescriptionElement(): MarkdownType {
    return this.description ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid PackagedProductDefinition.description; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirMarkdown if defined; else undefined
   */
  public getDescription(): fhirMarkdown | undefined {
    return this.description?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.description (${String(value)})`;
      this.description = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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
   * @returns the `legalStatusOfSupply` property value as a PackagedProductDefinitionLegalStatusOfSupplyComponent array
   */
  public getLegalStatusOfSupply(): PackagedProductDefinitionLegalStatusOfSupplyComponent[] {
    return this.legalStatusOfSupply ?? ([] as PackagedProductDefinitionLegalStatusOfSupplyComponent[]);
  }

  /**
   * Assigns the provided PackagedProductDefinitionLegalStatusOfSupplyComponent array value to the `legalStatusOfSupply` property.
   *
   * @param value - the `legalStatusOfSupply` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLegalStatusOfSupply(value: PackagedProductDefinitionLegalStatusOfSupplyComponent[] | undefined): this {
    if (isDefinedList<PackagedProductDefinitionLegalStatusOfSupplyComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.legalStatusOfSupply; Provided value array has an element that is not an instance of PackagedProductDefinitionLegalStatusOfSupplyComponent.`;
      assertFhirTypeList<PackagedProductDefinitionLegalStatusOfSupplyComponent>(value, PackagedProductDefinitionLegalStatusOfSupplyComponent, optErrMsg);
      this.legalStatusOfSupply = value;
    } else {
      this.legalStatusOfSupply = undefined;
    }
    return this;
  }

  /**
   * Add the provided PackagedProductDefinitionLegalStatusOfSupplyComponent value to the `legalStatusOfSupply` array property.
   *
   * @param value - the `legalStatusOfSupply` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLegalStatusOfSupply(value: PackagedProductDefinitionLegalStatusOfSupplyComponent | undefined): this {
    if (isDefined<PackagedProductDefinitionLegalStatusOfSupplyComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.legalStatusOfSupply; Provided element is not an instance of PackagedProductDefinitionLegalStatusOfSupplyComponent.`;
      assertFhirType<PackagedProductDefinitionLegalStatusOfSupplyComponent>(value, PackagedProductDefinitionLegalStatusOfSupplyComponent, optErrMsg);
      this.initLegalStatusOfSupply();
      this.legalStatusOfSupply?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `legalStatusOfSupply` property exists and has a value; `false` otherwise
   */
  public hasLegalStatusOfSupply(): boolean {
    return isDefinedList<PackagedProductDefinitionLegalStatusOfSupplyComponent>(this.legalStatusOfSupply) && this.legalStatusOfSupply.some((item: PackagedProductDefinitionLegalStatusOfSupplyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `legalStatusOfSupply` property
   */
  private initLegalStatusOfSupply(): void {
    if(!this.hasLegalStatusOfSupply()) {
      this.legalStatusOfSupply = [] as PackagedProductDefinitionLegalStatusOfSupplyComponent[];
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
      const optErrMsg = `Invalid PackagedProductDefinition.marketingStatus; Provided value array has an element that is not an instance of MarketingStatus.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.marketingStatus; Provided element is not an instance of MarketingStatus.`;
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
   * @returns the `copackagedIndicator` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getCopackagedIndicatorElement(): BooleanType {
    return this.copackagedIndicator ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `copackagedIndicator` property.
   *
   * @param element - the `copackagedIndicator` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopackagedIndicatorElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid PackagedProductDefinition.copackagedIndicator; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.copackagedIndicator = element;
    } else {
      this.copackagedIndicator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copackagedIndicator` property exists and has a value; `false` otherwise
   */
  public hasCopackagedIndicatorElement(): boolean {
    return isDefined<BooleanType>(this.copackagedIndicator) && !this.copackagedIndicator.isEmpty();
  }

  /**
   * @returns the `copackagedIndicator` property value as a fhirBoolean if defined; else undefined
   */
  public getCopackagedIndicator(): fhirBoolean | undefined {
    return this.copackagedIndicator?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `copackagedIndicator` property.
   *
   * @param value - the `copackagedIndicator` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopackagedIndicator(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.copackagedIndicator (${String(value)})`;
      this.copackagedIndicator = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.copackagedIndicator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copackagedIndicator` property exists and has a value; `false` otherwise
   */
  public hasCopackagedIndicator(): boolean {
    return this.hasCopackagedIndicatorElement();
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
   * @decorator `@ReferenceTargets('PackagedProductDefinition.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PackagedProductDefinition.manufacturer', [
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
   * @decorator `@ReferenceTargets('PackagedProductDefinition.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PackagedProductDefinition.manufacturer', [
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
   * @returns the `attachedDocument` property value as a Reference array
   */
  public getAttachedDocument(): Reference[] {
    return this.attachedDocument ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `attachedDocument` property.
   *
   * @decorator `@ReferenceTargets('PackagedProductDefinition.attachedDocument', ['DocumentReference',])`
   *
   * @param value - the `attachedDocument` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PackagedProductDefinition.attachedDocument', [
    'DocumentReference',
  ])
  public setAttachedDocument(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.attachedDocument = value;
    } else {
      this.attachedDocument = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `attachedDocument` array property.
   *
   * @decorator `@ReferenceTargets('PackagedProductDefinition.attachedDocument', ['DocumentReference',])`
   *
   * @param value - the `attachedDocument` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PackagedProductDefinition.attachedDocument', [
    'DocumentReference',
  ])
  public addAttachedDocument(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAttachedDocument();
      this.attachedDocument?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `attachedDocument` property exists and has a value; `false` otherwise
   */
  public hasAttachedDocument(): boolean {
    return isDefinedList<Reference>(this.attachedDocument) && this.attachedDocument.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `attachedDocument` property
   */
  private initAttachedDocument(): void {
    if (!this.hasAttachedDocument()) {
      this.attachedDocument = [] as Reference[];
    }
  }

  /**
   * @returns the `packaging` property value as a PackagedProductDefinitionPackagingComponent object if defined; else an empty PackagedProductDefinitionPackagingComponent object
   */
  public getPackaging(): PackagedProductDefinitionPackagingComponent {
    return this.packaging ?? new PackagedProductDefinitionPackagingComponent();
  }

  /**
   * Assigns the provided Packaging object value to the `packaging` property.
   *
   * @param value - the `packaging` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackaging(value: PackagedProductDefinitionPackagingComponent | undefined): this {
    if (isDefined<PackagedProductDefinitionPackagingComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging; Provided element is not an instance of PackagedProductDefinitionPackagingComponent.`;
      assertFhirType<PackagedProductDefinitionPackagingComponent>(value, PackagedProductDefinitionPackagingComponent, optErrMsg);
      this.packaging = value;
    } else {
      this.packaging = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `packaging` property exists and has a value; `false` otherwise
   */
  public hasPackaging(): boolean {
    return isDefined<PackagedProductDefinitionPackagingComponent>(this.packaging) && !this.packaging.isEmpty();
  }

  /**
   * @returns the `characteristic` property value as a PackagedProductDefinitionPackagingPropertyComponent array
   */
  public getCharacteristic(): PackagedProductDefinitionPackagingPropertyComponent[] {
    return this.characteristic ?? ([] as PackagedProductDefinitionPackagingPropertyComponent[]);
  }

  /**
   * Assigns the provided PackagedProductDefinitionPackagingPropertyComponent array value to the `characteristic` property.
   *
   * @param value - the `characteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacteristic(value: PackagedProductDefinitionPackagingPropertyComponent[] | undefined): this {
    if (isDefinedList<PackagedProductDefinitionPackagingPropertyComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.characteristic; Provided value array has an element that is not an instance of PackagedProductDefinitionPackagingPropertyComponent.`;
      assertFhirTypeList<PackagedProductDefinitionPackagingPropertyComponent>(value, PackagedProductDefinitionPackagingPropertyComponent, optErrMsg);
      this.characteristic = value;
    } else {
      this.characteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided PackagedProductDefinitionPackagingPropertyComponent value to the `characteristic` array property.
   *
   * @param value - the `characteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCharacteristic(value: PackagedProductDefinitionPackagingPropertyComponent | undefined): this {
    if (isDefined<PackagedProductDefinitionPackagingPropertyComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.characteristic; Provided element is not an instance of PackagedProductDefinitionPackagingPropertyComponent.`;
      assertFhirType<PackagedProductDefinitionPackagingPropertyComponent>(value, PackagedProductDefinitionPackagingPropertyComponent, optErrMsg);
      this.initCharacteristic();
      this.characteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `characteristic` property exists and has a value; `false` otherwise
   */
  public hasCharacteristic(): boolean {
    return isDefinedList<PackagedProductDefinitionPackagingPropertyComponent>(this.characteristic) && this.characteristic.some((item: PackagedProductDefinitionPackagingPropertyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `characteristic` property
   */
  private initCharacteristic(): void {
    if(!this.hasCharacteristic()) {
      this.characteristic = [] as PackagedProductDefinitionPackagingPropertyComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PackagedProductDefinition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.name,
      this.type_,
      this.packageFor,
      this.status,
      this.statusDate,
      this.containedItemQuantity,
      this.description,
      this.legalStatusOfSupply,
      this.marketingStatus,
      this.copackagedIndicator,
      this.manufacturer,
      this.attachedDocument,
      this.packaging,
      this.characteristic,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PackagedProductDefinition {
    const dest = new PackagedProductDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PackagedProductDefinition): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.name = this.name?.copy();
    dest.type_ = this.type_?.copy();
    const packageForList = copyListValues<Reference>(this.packageFor);
    dest.packageFor = packageForList.length === 0 ? undefined : packageForList;
    dest.status = this.status?.copy();
    dest.statusDate = this.statusDate?.copy();
    const containedItemQuantityList = copyListValues<Quantity>(this.containedItemQuantity);
    dest.containedItemQuantity = containedItemQuantityList.length === 0 ? undefined : containedItemQuantityList;
    dest.description = this.description?.copy();
    const legalStatusOfSupplyList = copyListValues<PackagedProductDefinitionLegalStatusOfSupplyComponent>(this.legalStatusOfSupply);
    dest.legalStatusOfSupply = legalStatusOfSupplyList.length === 0 ? undefined : legalStatusOfSupplyList;
    const marketingStatusList = copyListValues<MarketingStatus>(this.marketingStatus);
    dest.marketingStatus = marketingStatusList.length === 0 ? undefined : marketingStatusList;
    dest.copackagedIndicator = this.copackagedIndicator?.copy();
    const manufacturerList = copyListValues<Reference>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
    const attachedDocumentList = copyListValues<Reference>(this.attachedDocument);
    dest.attachedDocument = attachedDocumentList.length === 0 ? undefined : attachedDocumentList;
    dest.packaging = this.packaging?.copy();
    const characteristicList = copyListValues<PackagedProductDefinitionPackagingPropertyComponent>(this.characteristic);
    dest.characteristic = characteristicList.length === 0 ? undefined : characteristicList;
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

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasPackageFor()) {
      setFhirComplexListJson(this.getPackageFor(), 'packageFor', jsonObj);
    }

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    if (this.hasStatusDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getStatusDateElement(), 'statusDate', jsonObj);
    }

    if (this.hasContainedItemQuantity()) {
      setFhirComplexListJson(this.getContainedItemQuantity(), 'containedItemQuantity', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasLegalStatusOfSupply()) {
      setFhirBackboneElementListJson(this.getLegalStatusOfSupply(), 'legalStatusOfSupply', jsonObj);
    }

    if (this.hasMarketingStatus()) {
      setFhirComplexListJson(this.getMarketingStatus(), 'marketingStatus', jsonObj);
    }

    if (this.hasCopackagedIndicatorElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getCopackagedIndicatorElement(), 'copackagedIndicator', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexListJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasAttachedDocument()) {
      setFhirComplexListJson(this.getAttachedDocument(), 'attachedDocument', jsonObj);
    }

    if (this.hasPackaging()) {
      setFhirBackboneElementJson(this.getPackaging(), 'packaging', jsonObj);
    }

    if (this.hasCharacteristic()) {
      setFhirBackboneElementListJson(this.getCharacteristic(), 'characteristic', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * PackagedProductDefinitionLegalStatusOfSupplyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The legal status of supply of the packaged item as classified by the regulator
 * - **Definition:** The legal status of supply of the packaged item as classified by the regulator.
 *
 * @category Data Models: Resource
 * @see [FHIR PackagedProductDefinition](http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition)
 */
export class PackagedProductDefinitionLegalStatusOfSupplyComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `PackagedProductDefinitionLegalStatusOfSupplyComponent` JSON to instantiate the PackagedProductDefinitionLegalStatusOfSupplyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PackagedProductDefinitionLegalStatusOfSupplyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PackagedProductDefinitionLegalStatusOfSupplyComponent
   * @returns PackagedProductDefinitionLegalStatusOfSupplyComponent data model or undefined for `PackagedProductDefinitionLegalStatusOfSupplyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PackagedProductDefinitionLegalStatusOfSupplyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PackagedProductDefinitionLegalStatusOfSupplyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PackagedProductDefinitionLegalStatusOfSupplyComponent();

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

    fieldName = 'jurisdiction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setJurisdiction(datatype);
    }

    return instance;
  }

  /**
   * PackagedProductDefinition.legalStatusOfSupply.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual status of supply. In what situation this package type may be supplied for use
   * - **Definition:** The actual status of supply. Conveys in what situation this package type may be supplied for use.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * PackagedProductDefinition.legalStatusOfSupply.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The place where the legal status of supply applies
   * - **Definition:** The place where the legal status of supply applies. When not specified, this indicates it is unknown in this context.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept | undefined;

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
      const optErrMsg = `Invalid PackagedProductDefinition.legalStatusOfSupply.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `jurisdiction` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getJurisdiction(): CodeableConcept {
    return this.jurisdiction ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Jurisdiction object value to the `jurisdiction` property.
   *
   * @param value - the `jurisdiction` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setJurisdiction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.legalStatusOfSupply.jurisdiction; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.jurisdiction = value;
    } else {
      this.jurisdiction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `jurisdiction` property exists and has a value; `false` otherwise
   */
  public hasJurisdiction(): boolean {
    return isDefined<CodeableConcept>(this.jurisdiction) && !this.jurisdiction.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PackagedProductDefinition.legalStatusOfSupply';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.jurisdiction,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PackagedProductDefinitionLegalStatusOfSupplyComponent {
    const dest = new PackagedProductDefinitionLegalStatusOfSupplyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PackagedProductDefinitionLegalStatusOfSupplyComponent): void {
    super.copyValues(dest);
    dest.code = this.code?.copy();
    dest.jurisdiction = this.jurisdiction?.copy();
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

    if (this.hasJurisdiction()) {
      setFhirComplexJson(this.getJurisdiction(), 'jurisdiction', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * PackagedProductDefinitionPackagingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap
 * - **Definition:** A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (which is not a device or a medication manufactured item).
 *
 * @category Data Models: Resource
 * @see [FHIR PackagedProductDefinition](http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition)
 */
export class PackagedProductDefinitionPackagingComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `PackagedProductDefinitionPackagingComponent` JSON to instantiate the PackagedProductDefinitionPackagingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PackagedProductDefinitionPackagingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PackagedProductDefinitionPackagingComponent
   * @returns PackagedProductDefinitionPackagingComponent data model or undefined for `PackagedProductDefinitionPackagingComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PackagedProductDefinitionPackagingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PackagedProductDefinitionPackagingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PackagedProductDefinitionPackagingComponent();

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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'componentPart';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setComponentPartElement(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setQuantityElement(datatype);
    }

    fieldName = 'material';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addMaterial(datatype);
        }
      });
    }

    fieldName = 'alternateMaterial';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAlternateMaterial(datatype);
        }
      });
    }

    fieldName = 'shelfLifeStorage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ProductShelfLife | undefined = ProductShelfLife.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addShelfLifeStorage(datatype);
        }
      });
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

    fieldName = 'property';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PackagedProductDefinitionPackagingPropertyComponent | undefined = PackagedProductDefinitionPackagingPropertyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProperty(component);
        }
      });
    }

    fieldName = 'containedItem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PackagedProductDefinitionPackagingContainedItemComponent | undefined = PackagedProductDefinitionPackagingContainedItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addContainedItem(component);
        }
      });
    }

    fieldName = 'packaging';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PackagedProductDefinitionPackagingComponent | undefined = PackagedProductDefinitionPackagingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPackaging(component);
        }
      });
    }

    return instance;
  }

  /**
   * PackagedProductDefinition.packaging.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An identifier that is specific to this particular part of the packaging. Including possibly a Data Carrier Identifier
   * - **Definition:** A business identifier that is specific to this particular part of the packaging, often assigned by the manufacturer. Including possibly Data Carrier Identifier (a GS1 barcode).
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * PackagedProductDefinition.packaging.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The physical type of the container of the items
   * - **Definition:** The physical type of the container of the items.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * PackagedProductDefinition.packaging.componentPart Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Is this a part of the packaging (e.g. a cap or bottle stopper), rather than the packaging itself (e.g. a bottle or vial)
   * - **Definition:** Is this a part of the packaging (e.g. a cap or bottle stopper), rather than the packaging itself (e.g. a bottle or vial). The latter type are designed be a container, but the former are not.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private componentPart?: BooleanType | undefined;

  /**
   * PackagedProductDefinition.packaging.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The quantity of this level of packaging in the package that contains it (with the outermost level being 1)
   * - **Definition:** The quantity of packaging items contained at this layer of the package. This does not relate to the number of contained items but relates solely to the number of packaging items. When looking at the outermost layer it is always 1. If there are two boxes within, at the next layer it would be 2.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private quantity?: IntegerType | undefined;

  /**
   * PackagedProductDefinition.packaging.material Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Material type of the package item
   * - **Definition:** Material type of the package item.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private material?: CodeableConcept[] | undefined;

  /**
   * PackagedProductDefinition.packaging.alternateMaterial Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material
   * - **Definition:** A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material (e.g. different types of plastic for a blister sleeve).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private alternateMaterial?: CodeableConcept[] | undefined;

  /**
   * PackagedProductDefinition.packaging.shelfLifeStorage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Shelf Life and storage information
   * - **Definition:** Shelf Life and storage information.
   * - **FHIR Type:** `ProductShelfLife`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private shelfLifeStorage?: ProductShelfLife[] | undefined;

  /**
   * PackagedProductDefinition.packaging.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Manufacturer of this packaging item (multiple means these are all potential manufacturers)
   * - **Definition:** Manufacturer of this packaging item. When there are multiple values each one is a potential manufacturer of this packaging item.
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
   * PackagedProductDefinition.packaging.property Element
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
  private property?: PackagedProductDefinitionPackagingPropertyComponent[] | undefined;

  /**
   * PackagedProductDefinition.packaging.containedItem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The item(s) within the packaging
   * - **Definition:** The item(s) within the packaging.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private containedItem?: PackagedProductDefinitionPackagingContainedItemComponent[] | undefined;

  /**
   * PackagedProductDefinition.packaging.packaging Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allows containers (and parts of containers) within containers, still as a part of single packaged product
   * - **Definition:** Allows containers (and parts of containers) within containers, still as a part of a single packaged product. See also PackagedProductDefinition.packaging.containedItem.item(PackagedProductDefinition).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private packaging?: PackagedProductDefinitionPackagingComponent[] | undefined;

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
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `componentPart` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getComponentPartElement(): BooleanType {
    return this.componentPart ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `componentPart` property.
   *
   * @param element - the `componentPart` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComponentPartElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.componentPart; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.componentPart = element;
    } else {
      this.componentPart = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `componentPart` property exists and has a value; `false` otherwise
   */
  public hasComponentPartElement(): boolean {
    return isDefined<BooleanType>(this.componentPart) && !this.componentPart.isEmpty();
  }

  /**
   * @returns the `componentPart` property value as a fhirBoolean if defined; else undefined
   */
  public getComponentPart(): fhirBoolean | undefined {
    return this.componentPart?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `componentPart` property.
   *
   * @param value - the `componentPart` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComponentPart(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.componentPart (${String(value)})`;
      this.componentPart = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.componentPart = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `componentPart` property exists and has a value; `false` otherwise
   */
  public hasComponentPart(): boolean {
    return this.hasComponentPartElement();
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
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.quantity; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.quantity (${String(value)})`;
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
   * @returns the `material` property value as a CodeableConcept array
   */
  public getMaterial(): CodeableConcept[] {
    return this.material ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `material` property.
   *
   * @param value - the `material` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaterial(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.material; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.material = value;
    } else {
      this.material = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `material` array property.
   *
   * @param value - the `material` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMaterial(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.material; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initMaterial();
      this.material?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `material` property exists and has a value; `false` otherwise
   */
  public hasMaterial(): boolean {
    return isDefinedList<CodeableConcept>(this.material) && this.material.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `material` property
   */
  private initMaterial(): void {
    if(!this.hasMaterial()) {
      this.material = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `alternateMaterial` property value as a CodeableConcept array
   */
  public getAlternateMaterial(): CodeableConcept[] {
    return this.alternateMaterial ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `alternateMaterial` property.
   *
   * @param value - the `alternateMaterial` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAlternateMaterial(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.alternateMaterial; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.alternateMaterial = value;
    } else {
      this.alternateMaterial = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `alternateMaterial` array property.
   *
   * @param value - the `alternateMaterial` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAlternateMaterial(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.alternateMaterial; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initAlternateMaterial();
      this.alternateMaterial?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `alternateMaterial` property exists and has a value; `false` otherwise
   */
  public hasAlternateMaterial(): boolean {
    return isDefinedList<CodeableConcept>(this.alternateMaterial) && this.alternateMaterial.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `alternateMaterial` property
   */
  private initAlternateMaterial(): void {
    if(!this.hasAlternateMaterial()) {
      this.alternateMaterial = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `shelfLifeStorage` property value as a ProductShelfLife array
   */
  public getShelfLifeStorage(): ProductShelfLife[] {
    return this.shelfLifeStorage ?? ([] as ProductShelfLife[]);
  }

  /**
   * Assigns the provided ProductShelfLife array value to the `shelfLifeStorage` property.
   *
   * @param value - the `shelfLifeStorage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setShelfLifeStorage(value: ProductShelfLife[] | undefined): this {
    if (isDefinedList<ProductShelfLife>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.shelfLifeStorage; Provided value array has an element that is not an instance of ProductShelfLife.`;
      assertFhirTypeList<ProductShelfLife>(value, ProductShelfLife, optErrMsg);
      this.shelfLifeStorage = value;
    } else {
      this.shelfLifeStorage = undefined;
    }
    return this;
  }

  /**
   * Add the provided ProductShelfLife value to the `shelfLifeStorage` array property.
   *
   * @param value - the `shelfLifeStorage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addShelfLifeStorage(value: ProductShelfLife | undefined): this {
    if (isDefined<ProductShelfLife>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.shelfLifeStorage; Provided element is not an instance of ProductShelfLife.`;
      assertFhirType<ProductShelfLife>(value, ProductShelfLife, optErrMsg);
      this.initShelfLifeStorage();
      this.shelfLifeStorage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `shelfLifeStorage` property exists and has a value; `false` otherwise
   */
  public hasShelfLifeStorage(): boolean {
    return isDefinedList<ProductShelfLife>(this.shelfLifeStorage) && this.shelfLifeStorage.some((item: ProductShelfLife) => !item.isEmpty());
  }

  /**
   * Initialize the `shelfLifeStorage` property
   */
  private initShelfLifeStorage(): void {
    if(!this.hasShelfLifeStorage()) {
      this.shelfLifeStorage = [] as ProductShelfLife[];
    }
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
   * @decorator `@ReferenceTargets('PackagedProductDefinition.packaging.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PackagedProductDefinition.packaging.manufacturer', [
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
   * @decorator `@ReferenceTargets('PackagedProductDefinition.packaging.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PackagedProductDefinition.packaging.manufacturer', [
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
   * @returns the `property` property value as a PackagedProductDefinitionPackagingPropertyComponent array
   */
  public getProperty(): PackagedProductDefinitionPackagingPropertyComponent[] {
    return this.property ?? ([] as PackagedProductDefinitionPackagingPropertyComponent[]);
  }

  /**
   * Assigns the provided PackagedProductDefinitionPackagingPropertyComponent array value to the `property` property.
   *
   * @param value - the `property` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProperty(value: PackagedProductDefinitionPackagingPropertyComponent[] | undefined): this {
    if (isDefinedList<PackagedProductDefinitionPackagingPropertyComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.property; Provided value array has an element that is not an instance of PackagedProductDefinitionPackagingPropertyComponent.`;
      assertFhirTypeList<PackagedProductDefinitionPackagingPropertyComponent>(value, PackagedProductDefinitionPackagingPropertyComponent, optErrMsg);
      this.property = value;
    } else {
      this.property = undefined;
    }
    return this;
  }

  /**
   * Add the provided PackagedProductDefinitionPackagingPropertyComponent value to the `property` array property.
   *
   * @param value - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProperty(value: PackagedProductDefinitionPackagingPropertyComponent | undefined): this {
    if (isDefined<PackagedProductDefinitionPackagingPropertyComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.property; Provided element is not an instance of PackagedProductDefinitionPackagingPropertyComponent.`;
      assertFhirType<PackagedProductDefinitionPackagingPropertyComponent>(value, PackagedProductDefinitionPackagingPropertyComponent, optErrMsg);
      this.initProperty();
      this.property?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return isDefinedList<PackagedProductDefinitionPackagingPropertyComponent>(this.property) && this.property.some((item: PackagedProductDefinitionPackagingPropertyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `property` property
   */
  private initProperty(): void {
    if(!this.hasProperty()) {
      this.property = [] as PackagedProductDefinitionPackagingPropertyComponent[];
    }
  }

  /**
   * @returns the `containedItem` property value as a PackagedProductDefinitionPackagingContainedItemComponent array
   */
  public getContainedItem(): PackagedProductDefinitionPackagingContainedItemComponent[] {
    return this.containedItem ?? ([] as PackagedProductDefinitionPackagingContainedItemComponent[]);
  }

  /**
   * Assigns the provided PackagedProductDefinitionPackagingContainedItemComponent array value to the `containedItem` property.
   *
   * @param value - the `containedItem` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContainedItem(value: PackagedProductDefinitionPackagingContainedItemComponent[] | undefined): this {
    if (isDefinedList<PackagedProductDefinitionPackagingContainedItemComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.containedItem; Provided value array has an element that is not an instance of PackagedProductDefinitionPackagingContainedItemComponent.`;
      assertFhirTypeList<PackagedProductDefinitionPackagingContainedItemComponent>(value, PackagedProductDefinitionPackagingContainedItemComponent, optErrMsg);
      this.containedItem = value;
    } else {
      this.containedItem = undefined;
    }
    return this;
  }

  /**
   * Add the provided PackagedProductDefinitionPackagingContainedItemComponent value to the `containedItem` array property.
   *
   * @param value - the `containedItem` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContainedItem(value: PackagedProductDefinitionPackagingContainedItemComponent | undefined): this {
    if (isDefined<PackagedProductDefinitionPackagingContainedItemComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.containedItem; Provided element is not an instance of PackagedProductDefinitionPackagingContainedItemComponent.`;
      assertFhirType<PackagedProductDefinitionPackagingContainedItemComponent>(value, PackagedProductDefinitionPackagingContainedItemComponent, optErrMsg);
      this.initContainedItem();
      this.containedItem?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `containedItem` property exists and has a value; `false` otherwise
   */
  public hasContainedItem(): boolean {
    return isDefinedList<PackagedProductDefinitionPackagingContainedItemComponent>(this.containedItem) && this.containedItem.some((item: PackagedProductDefinitionPackagingContainedItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `containedItem` property
   */
  private initContainedItem(): void {
    if(!this.hasContainedItem()) {
      this.containedItem = [] as PackagedProductDefinitionPackagingContainedItemComponent[];
    }
  }

  /**
   * @returns the `packaging` property value as a PackagedProductDefinitionPackagingComponent array
   */
  public getPackaging(): PackagedProductDefinitionPackagingComponent[] {
    return this.packaging ?? ([] as PackagedProductDefinitionPackagingComponent[]);
  }

  /**
   * Assigns the provided PackagedProductDefinitionPackagingComponent array value to the `packaging` property.
   *
   * @param value - the `packaging` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackaging(value: PackagedProductDefinitionPackagingComponent[] | undefined): this {
    if (isDefinedList<PackagedProductDefinitionPackagingComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.packaging; Provided value array has an element that is not an instance of PackagedProductDefinitionPackagingComponent.`;
      assertFhirTypeList<PackagedProductDefinitionPackagingComponent>(value, PackagedProductDefinitionPackagingComponent, optErrMsg);
      this.packaging = value;
    } else {
      this.packaging = undefined;
    }
    return this;
  }

  /**
   * Add the provided PackagedProductDefinitionPackagingComponent value to the `packaging` array property.
   *
   * @param value - the `packaging` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPackaging(value: PackagedProductDefinitionPackagingComponent | undefined): this {
    if (isDefined<PackagedProductDefinitionPackagingComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.packaging; Provided element is not an instance of PackagedProductDefinitionPackagingComponent.`;
      assertFhirType<PackagedProductDefinitionPackagingComponent>(value, PackagedProductDefinitionPackagingComponent, optErrMsg);
      this.initPackaging();
      this.packaging?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `packaging` property exists and has a value; `false` otherwise
   */
  public hasPackaging(): boolean {
    return isDefinedList<PackagedProductDefinitionPackagingComponent>(this.packaging) && this.packaging.some((item: PackagedProductDefinitionPackagingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `packaging` property
   */
  private initPackaging(): void {
    if(!this.hasPackaging()) {
      this.packaging = [] as PackagedProductDefinitionPackagingComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PackagedProductDefinition.packaging';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.componentPart,
      this.quantity,
      this.material,
      this.alternateMaterial,
      this.shelfLifeStorage,
      this.manufacturer,
      this.property,
      this.containedItem,
      this.packaging,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PackagedProductDefinitionPackagingComponent {
    const dest = new PackagedProductDefinitionPackagingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PackagedProductDefinitionPackagingComponent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.type_ = this.type_?.copy();
    dest.componentPart = this.componentPart?.copy();
    dest.quantity = this.quantity?.copy();
    const materialList = copyListValues<CodeableConcept>(this.material);
    dest.material = materialList.length === 0 ? undefined : materialList;
    const alternateMaterialList = copyListValues<CodeableConcept>(this.alternateMaterial);
    dest.alternateMaterial = alternateMaterialList.length === 0 ? undefined : alternateMaterialList;
    const shelfLifeStorageList = copyListValues<ProductShelfLife>(this.shelfLifeStorage);
    dest.shelfLifeStorage = shelfLifeStorageList.length === 0 ? undefined : shelfLifeStorageList;
    const manufacturerList = copyListValues<Reference>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
    const propertyList = copyListValues<PackagedProductDefinitionPackagingPropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
    const containedItemList = copyListValues<PackagedProductDefinitionPackagingContainedItemComponent>(this.containedItem);
    dest.containedItem = containedItemList.length === 0 ? undefined : containedItemList;
    const packagingList = copyListValues<PackagedProductDefinitionPackagingComponent>(this.packaging);
    dest.packaging = packagingList.length === 0 ? undefined : packagingList;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasComponentPartElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getComponentPartElement(), 'componentPart', jsonObj);
    }

    if (this.hasQuantityElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getQuantityElement(), 'quantity', jsonObj);
    }

    if (this.hasMaterial()) {
      setFhirComplexListJson(this.getMaterial(), 'material', jsonObj);
    }

    if (this.hasAlternateMaterial()) {
      setFhirComplexListJson(this.getAlternateMaterial(), 'alternateMaterial', jsonObj);
    }

    if (this.hasShelfLifeStorage()) {
      setFhirComplexListJson(this.getShelfLifeStorage(), 'shelfLifeStorage', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexListJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirBackboneElementListJson(this.getProperty(), 'property', jsonObj);
    }

    if (this.hasContainedItem()) {
      setFhirBackboneElementListJson(this.getContainedItem(), 'containedItem', jsonObj);
    }

    if (this.hasPackaging()) {
      setFhirBackboneElementListJson(this.getPackaging(), 'packaging', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * PackagedProductDefinitionPackagingPropertyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** General characteristics of this item
 * - **Definition:** General characteristics of this item.
 *
 * @category Data Models: Resource
 * @see [FHIR PackagedProductDefinition](http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition)
 */
export class PackagedProductDefinitionPackagingPropertyComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `PackagedProductDefinitionPackagingPropertyComponent` JSON to instantiate the PackagedProductDefinitionPackagingPropertyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PackagedProductDefinitionPackagingPropertyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PackagedProductDefinitionPackagingPropertyComponent
   * @returns PackagedProductDefinitionPackagingPropertyComponent data model or undefined for `PackagedProductDefinitionPackagingPropertyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PackagedProductDefinitionPackagingPropertyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PackagedProductDefinitionPackagingPropertyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PackagedProductDefinitionPackagingPropertyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = PackagedProductDefinitionPackagingPropertyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for PackagedProductDefinitionPackagingPropertyComponent`;
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
   * PackagedProductDefinition.packaging.property.type Element
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
   * PackagedProductDefinition.packaging.property.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('PackagedProductDefinition.packaging.property.value[x]', ['CodeableConcept','Quantity','date','boolean','Attachment',]`
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
  @ChoiceDataTypesMeta('PackagedProductDefinition.packaging.property.value[x]',[
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
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.property.type; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ChoiceDataTypes('PackagedProductDefinition.packaging.property.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('PackagedProductDefinition.packaging.property.value[x]')
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
        `DataType mismatch for PackagedProductDefinition.packaging.property.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for PackagedProductDefinition.packaging.property.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for PackagedProductDefinition.packaging.property.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for PackagedProductDefinition.packaging.property.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for PackagedProductDefinition.packaging.property.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
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
    return 'PackagedProductDefinition.packaging.property';
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
  public override copy(): PackagedProductDefinitionPackagingPropertyComponent {
    const dest = new PackagedProductDefinitionPackagingPropertyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PackagedProductDefinitionPackagingPropertyComponent): void {
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
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * PackagedProductDefinitionPackagingContainedItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The item(s) within the packaging
 * - **Definition:** The item(s) within the packaging.
 *
 * @category Data Models: Resource
 * @see [FHIR PackagedProductDefinition](http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition)
 */
export class PackagedProductDefinitionPackagingContainedItemComponent extends BackboneElement implements IBackboneElement {
  constructor(item: CodeableReference | null = null) {
    super();

    this.item = null;
    if (isDefined<CodeableReference>(item)) {
      this.setItem(item);
    }
  }

  /**
   * Parse the provided `PackagedProductDefinitionPackagingContainedItemComponent` JSON to instantiate the PackagedProductDefinitionPackagingContainedItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PackagedProductDefinitionPackagingContainedItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PackagedProductDefinitionPackagingContainedItemComponent
   * @returns PackagedProductDefinitionPackagingContainedItemComponent data model or undefined for `PackagedProductDefinitionPackagingContainedItemComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PackagedProductDefinitionPackagingContainedItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PackagedProductDefinitionPackagingContainedItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PackagedProductDefinitionPackagingContainedItemComponent();

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
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmount(datatype);
    }

    return instance;
  }

  /**
   * PackagedProductDefinition.packaging.containedItem.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual item(s) of medication, as manufactured, or a device, or other medically related item (food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package
   * - **Definition:** The actual item(s) of medication, as manufactured, or a device (typically, but not necessarily, a co-packaged one), or other medically related item (such as food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package. This also allows another whole packaged product to be included, which is solely for the case where a package of other entire packages is wanted - such as a wholesale or distribution pack (for layers within one package, use PackagedProductDefinition.packaging.packaging).
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionProduct',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private item: CodeableReference | null;

  /**
   * PackagedProductDefinition.packaging.containedItem.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The number of this type of item within this packaging or for continuous items such as liquids it is the quantity (for example 25ml). See also PackagedProductDefinition.containedItemQuantity (especially the long definition)
   * - **Definition:** The number of this type of item within this packaging or for continuous items such as liquids it is the quantity (for example 25ml). See also PackagedProductDefinition.containedItemQuantity (especially the long definition).
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount?: Quantity | undefined;

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
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.containedItem.item; Provided element is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.packaging.containedItem.amount; Provided element is not an instance of Quantity.`;
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
    return 'PackagedProductDefinition.packaging.containedItem';
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
  public override copy(): PackagedProductDefinitionPackagingContainedItemComponent {
    const dest = new PackagedProductDefinitionPackagingContainedItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PackagedProductDefinitionPackagingContainedItemComponent): void {
    super.copyValues(dest);
    dest.item = this.item ? this.item.copy() : null;
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

    if (this.hasItem()) {
      setFhirComplexJson(this.getItem(), 'item', jsonObj);
    } else {
      jsonObj['item'] = null;
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    return jsonObj;
  }
}
