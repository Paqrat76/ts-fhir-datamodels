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
 * StructureDefinition.fhirVersion: 4.3.0
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
  DateTimeType,
  DateType,
  DomainResource,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  IntegerType,
  InvalidTypeError,
  JSON,
  MarkdownType,
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
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Attachment, CodeableConcept, CodeableReference, Duration, Identifier, MarketingStatus, PARSABLE_DATATYPE_MAP, Quantity, Reference } from '../complex-types/complex-datatypes';
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
 * - **FHIR Version:** 4.3.0
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
   * @throws {@link FhirError} if the provided JSON is missing required properties
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

    fieldName = 'characteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCharacteristic(datatype);
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

    fieldName = 'package';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: PackagedProductDefinitionPackageComponent | undefined = PackagedProductDefinitionPackageComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPackage(component);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * PackagedProductDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A unique identifier for this package as whole
   * - **Definition:** A unique identifier for this package as whole. Unique instance identifiers assigned to a package by manufacturers, regulators, drug catalogue custodians or other organizations.
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
   * - **Definition:** The product that this is a pack for.
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
   * - **Short:** A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size
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
   * PackagedProductDefinition.characteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allows the key features to be recorded, such as "hospital pack", "nurse prescribable"
   * - **Definition:** Allows the key features to be recorded, such as "hospital pack", "nurse prescribable", "calendar pack".
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private characteristic?: CodeableConcept[] | undefined;

  /**
   * PackagedProductDefinition.copackagedIndicator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If the drug product is supplied with another item such as a diluent or adjuvant
   * - **Definition:** States whether a drug product is supplied with another item such as a diluent or adjuvant.
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
   * PackagedProductDefinition.package Element
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
  private package_?: PackagedProductDefinitionPackageComponent | undefined;

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
   * @returns the `characteristic` property value as a CodeableConcept array
   */
  public getCharacteristic(): CodeableConcept[] {
    return this.characteristic ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `characteristic` property.
   *
   * @param value - the `characteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacteristic(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.characteristic; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.characteristic = value;
    } else {
      this.characteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `characteristic` array property.
   *
   * @param value - the `characteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCharacteristic(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.characteristic; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCharacteristic();
      this.characteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `characteristic` property exists and has a value; `false` otherwise
   */
  public hasCharacteristic(): boolean {
    return isDefinedList<CodeableConcept>(this.characteristic) && this.characteristic.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `characteristic` property
   */
  private initCharacteristic(): void {
    if(!this.hasCharacteristic()) {
      this.characteristic = [] as CodeableConcept[];
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
   * @returns the `package_` property value as a PackagedProductDefinitionPackageComponent object if defined; else an empty PackagedProductDefinitionPackageComponent object
   */
  public getPackage(): PackagedProductDefinitionPackageComponent {
    return this.package_ ?? new PackagedProductDefinitionPackageComponent();
  }

  /**
   * Assigns the provided Package object value to the `package_` property.
   *
   * @param value - the `package_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackage(value: PackagedProductDefinitionPackageComponent | undefined): this {
    if (isDefined<PackagedProductDefinitionPackageComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.package; Provided element is not an instance of PackagedProductDefinitionPackageComponent.`;
      assertFhirType<PackagedProductDefinitionPackageComponent>(value, PackagedProductDefinitionPackageComponent, optErrMsg);
      this.package_ = value;
    } else {
      this.package_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `package_` property exists and has a value; `false` otherwise
   */
  public hasPackage(): boolean {
    return isDefined<PackagedProductDefinitionPackageComponent>(this.package_) && !this.package_.isEmpty();
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
      this.characteristic,
      this.copackagedIndicator,
      this.manufacturer,
      this.package_,
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
    const characteristicList = copyListValues<CodeableConcept>(this.characteristic);
    dest.characteristic = characteristicList.length === 0 ? undefined : characteristicList;
    dest.copackagedIndicator = this.copackagedIndicator?.copy();
    const manufacturerList = copyListValues<Reference>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
    dest.package_ = this.package_?.copy();
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

    if (this.hasCharacteristic()) {
      setFhirComplexListJson(this.getCharacteristic(), 'characteristic', jsonObj);
    }

    if (this.hasCopackagedIndicatorElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getCopackagedIndicatorElement(), 'copackagedIndicator', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexListJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasPackage()) {
      setFhirBackboneElementJson(this.getPackage(), 'package', jsonObj);
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

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
 * PackagedProductDefinitionPackageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap
 * - **Definition:** A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (which is not a device or a medication manufactured item).
 *
 * @category Data Models: Resource
 * @see [FHIR PackagedProductDefinition](http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition)
 */
export class PackagedProductDefinitionPackageComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `PackagedProductDefinitionPackageComponent` JSON to instantiate the PackagedProductDefinitionPackageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PackagedProductDefinitionPackageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PackagedProductDefinitionPackageComponent
   * @returns PackagedProductDefinitionPackageComponent data model or undefined for `PackagedProductDefinitionPackageComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PackagedProductDefinitionPackageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PackagedProductDefinitionPackageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PackagedProductDefinitionPackageComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

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

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
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
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PackagedProductDefinitionPackageShelfLifeStorageComponent | undefined = PackagedProductDefinitionPackageShelfLifeStorageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addShelfLifeStorage(component);
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
        const component: PackagedProductDefinitionPackagePropertyComponent | undefined = PackagedProductDefinitionPackagePropertyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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
        const component: PackagedProductDefinitionPackageContainedItemComponent | undefined = PackagedProductDefinitionPackageContainedItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addContainedItem(component);
        }
      });
    }

    fieldName = 'package';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PackagedProductDefinitionPackageComponent | undefined = PackagedProductDefinitionPackageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPackage(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * PackagedProductDefinition.package.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An identifier that is specific to this particular part of the packaging. Including possibly a Data Carrier Identifier
   * - **Definition:** An identifier that is specific to this particular part of the packaging. Including possibly Data Carrier Identifier (a GS1 barcode).
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * PackagedProductDefinition.package.type Element
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
   * PackagedProductDefinition.package.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The quantity of this level of packaging in the package that contains it (with the outermost level being 1)
   * - **Definition:** The quantity of this level of packaging in the package that contains it. If specified, the outermost level is always 1.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private quantity?: IntegerType | undefined;

  /**
   * PackagedProductDefinition.package.material Element
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
   * PackagedProductDefinition.package.alternateMaterial Element
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
   * PackagedProductDefinition.package.shelfLifeStorage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Shelf Life and storage information
   * - **Definition:** Shelf Life and storage information.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private shelfLifeStorage?: PackagedProductDefinitionPackageShelfLifeStorageComponent[] | undefined;

  /**
   * PackagedProductDefinition.package.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Manufacturer of this package Item (multiple means these are all possible manufacturers)
   * - **Definition:** Manufacturer of this package Item. When there are multiple it means these are all possible manufacturers.
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
   * PackagedProductDefinition.package.property Element
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
  private property?: PackagedProductDefinitionPackagePropertyComponent[] | undefined;

  /**
   * PackagedProductDefinition.package.containedItem Element
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
  private containedItem?: PackagedProductDefinitionPackageContainedItemComponent[] | undefined;

  /**
   * PackagedProductDefinition.package.package Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allows containers (and parts of containers) within containers, still a single packaged product
   * - **Definition:** Allows containers (and parts of containers) parwithin containers, still a single packaged product.  See also PackagedProductDefinition.package.containedItem.item(PackagedProductDefinition).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private package_?: PackagedProductDefinitionPackageComponent[] | undefined;

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
      const optErrMsg = `Invalid PackagedProductDefinition.package.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.package.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.package.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.package.quantity; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.package.quantity (${String(value)})`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.package.material; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.package.material; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.package.alternateMaterial; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid PackagedProductDefinition.package.alternateMaterial; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `shelfLifeStorage` property value as a PackagedProductDefinitionPackageShelfLifeStorageComponent array
   */
  public getShelfLifeStorage(): PackagedProductDefinitionPackageShelfLifeStorageComponent[] {
    return this.shelfLifeStorage ?? ([] as PackagedProductDefinitionPackageShelfLifeStorageComponent[]);
  }

  /**
   * Assigns the provided PackagedProductDefinitionPackageShelfLifeStorageComponent array value to the `shelfLifeStorage` property.
   *
   * @param value - the `shelfLifeStorage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setShelfLifeStorage(value: PackagedProductDefinitionPackageShelfLifeStorageComponent[] | undefined): this {
    if (isDefinedList<PackagedProductDefinitionPackageShelfLifeStorageComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.package.shelfLifeStorage; Provided value array has an element that is not an instance of PackagedProductDefinitionPackageShelfLifeStorageComponent.`;
      assertFhirTypeList<PackagedProductDefinitionPackageShelfLifeStorageComponent>(value, PackagedProductDefinitionPackageShelfLifeStorageComponent, optErrMsg);
      this.shelfLifeStorage = value;
    } else {
      this.shelfLifeStorage = undefined;
    }
    return this;
  }

  /**
   * Add the provided PackagedProductDefinitionPackageShelfLifeStorageComponent value to the `shelfLifeStorage` array property.
   *
   * @param value - the `shelfLifeStorage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addShelfLifeStorage(value: PackagedProductDefinitionPackageShelfLifeStorageComponent | undefined): this {
    if (isDefined<PackagedProductDefinitionPackageShelfLifeStorageComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.package.shelfLifeStorage; Provided element is not an instance of PackagedProductDefinitionPackageShelfLifeStorageComponent.`;
      assertFhirType<PackagedProductDefinitionPackageShelfLifeStorageComponent>(value, PackagedProductDefinitionPackageShelfLifeStorageComponent, optErrMsg);
      this.initShelfLifeStorage();
      this.shelfLifeStorage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `shelfLifeStorage` property exists and has a value; `false` otherwise
   */
  public hasShelfLifeStorage(): boolean {
    return isDefinedList<PackagedProductDefinitionPackageShelfLifeStorageComponent>(this.shelfLifeStorage) && this.shelfLifeStorage.some((item: PackagedProductDefinitionPackageShelfLifeStorageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `shelfLifeStorage` property
   */
  private initShelfLifeStorage(): void {
    if(!this.hasShelfLifeStorage()) {
      this.shelfLifeStorage = [] as PackagedProductDefinitionPackageShelfLifeStorageComponent[];
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
   * @decorator `@ReferenceTargets('PackagedProductDefinition.package.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PackagedProductDefinition.package.manufacturer', [
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
   * @decorator `@ReferenceTargets('PackagedProductDefinition.package.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PackagedProductDefinition.package.manufacturer', [
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
   * @returns the `property` property value as a PackagedProductDefinitionPackagePropertyComponent array
   */
  public getProperty(): PackagedProductDefinitionPackagePropertyComponent[] {
    return this.property ?? ([] as PackagedProductDefinitionPackagePropertyComponent[]);
  }

  /**
   * Assigns the provided PackagedProductDefinitionPackagePropertyComponent array value to the `property` property.
   *
   * @param value - the `property` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProperty(value: PackagedProductDefinitionPackagePropertyComponent[] | undefined): this {
    if (isDefinedList<PackagedProductDefinitionPackagePropertyComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.package.property; Provided value array has an element that is not an instance of PackagedProductDefinitionPackagePropertyComponent.`;
      assertFhirTypeList<PackagedProductDefinitionPackagePropertyComponent>(value, PackagedProductDefinitionPackagePropertyComponent, optErrMsg);
      this.property = value;
    } else {
      this.property = undefined;
    }
    return this;
  }

  /**
   * Add the provided PackagedProductDefinitionPackagePropertyComponent value to the `property` array property.
   *
   * @param value - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProperty(value: PackagedProductDefinitionPackagePropertyComponent | undefined): this {
    if (isDefined<PackagedProductDefinitionPackagePropertyComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.package.property; Provided element is not an instance of PackagedProductDefinitionPackagePropertyComponent.`;
      assertFhirType<PackagedProductDefinitionPackagePropertyComponent>(value, PackagedProductDefinitionPackagePropertyComponent, optErrMsg);
      this.initProperty();
      this.property?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return isDefinedList<PackagedProductDefinitionPackagePropertyComponent>(this.property) && this.property.some((item: PackagedProductDefinitionPackagePropertyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `property` property
   */
  private initProperty(): void {
    if(!this.hasProperty()) {
      this.property = [] as PackagedProductDefinitionPackagePropertyComponent[];
    }
  }

  /**
   * @returns the `containedItem` property value as a PackagedProductDefinitionPackageContainedItemComponent array
   */
  public getContainedItem(): PackagedProductDefinitionPackageContainedItemComponent[] {
    return this.containedItem ?? ([] as PackagedProductDefinitionPackageContainedItemComponent[]);
  }

  /**
   * Assigns the provided PackagedProductDefinitionPackageContainedItemComponent array value to the `containedItem` property.
   *
   * @param value - the `containedItem` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContainedItem(value: PackagedProductDefinitionPackageContainedItemComponent[] | undefined): this {
    if (isDefinedList<PackagedProductDefinitionPackageContainedItemComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.package.containedItem; Provided value array has an element that is not an instance of PackagedProductDefinitionPackageContainedItemComponent.`;
      assertFhirTypeList<PackagedProductDefinitionPackageContainedItemComponent>(value, PackagedProductDefinitionPackageContainedItemComponent, optErrMsg);
      this.containedItem = value;
    } else {
      this.containedItem = undefined;
    }
    return this;
  }

  /**
   * Add the provided PackagedProductDefinitionPackageContainedItemComponent value to the `containedItem` array property.
   *
   * @param value - the `containedItem` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContainedItem(value: PackagedProductDefinitionPackageContainedItemComponent | undefined): this {
    if (isDefined<PackagedProductDefinitionPackageContainedItemComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.package.containedItem; Provided element is not an instance of PackagedProductDefinitionPackageContainedItemComponent.`;
      assertFhirType<PackagedProductDefinitionPackageContainedItemComponent>(value, PackagedProductDefinitionPackageContainedItemComponent, optErrMsg);
      this.initContainedItem();
      this.containedItem?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `containedItem` property exists and has a value; `false` otherwise
   */
  public hasContainedItem(): boolean {
    return isDefinedList<PackagedProductDefinitionPackageContainedItemComponent>(this.containedItem) && this.containedItem.some((item: PackagedProductDefinitionPackageContainedItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `containedItem` property
   */
  private initContainedItem(): void {
    if(!this.hasContainedItem()) {
      this.containedItem = [] as PackagedProductDefinitionPackageContainedItemComponent[];
    }
  }

  /**
   * @returns the `package_` property value as a PackagedProductDefinitionPackageComponent array
   */
  public getPackage(): PackagedProductDefinitionPackageComponent[] {
    return this.package_ ?? ([] as PackagedProductDefinitionPackageComponent[]);
  }

  /**
   * Assigns the provided PackagedProductDefinitionPackageComponent array value to the `package_` property.
   *
   * @param value - the `package_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackage(value: PackagedProductDefinitionPackageComponent[] | undefined): this {
    if (isDefinedList<PackagedProductDefinitionPackageComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.package.package; Provided value array has an element that is not an instance of PackagedProductDefinitionPackageComponent.`;
      assertFhirTypeList<PackagedProductDefinitionPackageComponent>(value, PackagedProductDefinitionPackageComponent, optErrMsg);
      this.package_ = value;
    } else {
      this.package_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided PackagedProductDefinitionPackageComponent value to the `package_` array property.
   *
   * @param value - the `package_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPackage(value: PackagedProductDefinitionPackageComponent | undefined): this {
    if (isDefined<PackagedProductDefinitionPackageComponent>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.package.package; Provided element is not an instance of PackagedProductDefinitionPackageComponent.`;
      assertFhirType<PackagedProductDefinitionPackageComponent>(value, PackagedProductDefinitionPackageComponent, optErrMsg);
      this.initPackage();
      this.package_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `package_` property exists and has a value; `false` otherwise
   */
  public hasPackage(): boolean {
    return isDefinedList<PackagedProductDefinitionPackageComponent>(this.package_) && this.package_.some((item: PackagedProductDefinitionPackageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `package_` property
   */
  private initPackage(): void {
    if(!this.hasPackage()) {
      this.package_ = [] as PackagedProductDefinitionPackageComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PackagedProductDefinition.package';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.quantity,
      this.material,
      this.alternateMaterial,
      this.shelfLifeStorage,
      this.manufacturer,
      this.property,
      this.containedItem,
      this.package_,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PackagedProductDefinitionPackageComponent {
    const dest = new PackagedProductDefinitionPackageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PackagedProductDefinitionPackageComponent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.type_ = this.type_?.copy();
    dest.quantity = this.quantity?.copy();
    const materialList = copyListValues<CodeableConcept>(this.material);
    dest.material = materialList.length === 0 ? undefined : materialList;
    const alternateMaterialList = copyListValues<CodeableConcept>(this.alternateMaterial);
    dest.alternateMaterial = alternateMaterialList.length === 0 ? undefined : alternateMaterialList;
    const shelfLifeStorageList = copyListValues<PackagedProductDefinitionPackageShelfLifeStorageComponent>(this.shelfLifeStorage);
    dest.shelfLifeStorage = shelfLifeStorageList.length === 0 ? undefined : shelfLifeStorageList;
    const manufacturerList = copyListValues<Reference>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
    const propertyList = copyListValues<PackagedProductDefinitionPackagePropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
    const containedItemList = copyListValues<PackagedProductDefinitionPackageContainedItemComponent>(this.containedItem);
    dest.containedItem = containedItemList.length === 0 ? undefined : containedItemList;
    const packageList = copyListValues<PackagedProductDefinitionPackageComponent>(this.package_);
    dest.package_ = packageList.length === 0 ? undefined : packageList;
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
      setFhirBackboneElementListJson(this.getShelfLifeStorage(), 'shelfLifeStorage', jsonObj);
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

    if (this.hasPackage()) {
      setFhirBackboneElementListJson(this.getPackage(), 'package', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * PackagedProductDefinitionPackageShelfLifeStorageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Shelf Life and storage information
 * - **Definition:** Shelf Life and storage information.
 *
 * @category Data Models: Resource
 * @see [FHIR PackagedProductDefinition](http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition)
 */
export class PackagedProductDefinitionPackageShelfLifeStorageComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `PackagedProductDefinitionPackageShelfLifeStorageComponent` JSON to instantiate the PackagedProductDefinitionPackageShelfLifeStorageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PackagedProductDefinitionPackageShelfLifeStorageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PackagedProductDefinitionPackageShelfLifeStorageComponent
   * @returns PackagedProductDefinitionPackageShelfLifeStorageComponent data model or undefined for `PackagedProductDefinitionPackageShelfLifeStorageComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PackagedProductDefinitionPackageShelfLifeStorageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PackagedProductDefinitionPackageShelfLifeStorageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PackagedProductDefinitionPackageShelfLifeStorageComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = PackagedProductDefinitionPackageShelfLifeStorageComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for PackagedProductDefinitionPackageShelfLifeStorageComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'period[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const period: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setPeriod(period);

    fieldName = 'specialPrecautionsForStorage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSpecialPrecautionsForStorage(datatype);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * PackagedProductDefinition.package.shelfLifeStorage.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified
   * - **Definition:** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * PackagedProductDefinition.package.shelfLifeStorage.period[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('PackagedProductDefinition.package.shelfLifeStorage.period[x]', ['Duration','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   * - **Definition:** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   * - **FHIR Types:**
   *     'Duration',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('PackagedProductDefinition.package.shelfLifeStorage.period[x]',[
    'Duration',
    'string',
  ])
  private period?: IDataType | undefined;

  /**
   * PackagedProductDefinition.package.shelfLifeStorage.specialPrecautionsForStorage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary. The controlled term and the controlled term identifier shall be specified
   * - **Definition:** Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary. The controlled term and the controlled term identifier shall be specified.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private specialPrecautionsForStorage?: CodeableConcept[] | undefined;

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
      const optErrMsg = `Invalid PackagedProductDefinition.package.shelfLifeStorage.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `period` property value as a DataType object if defined; else undefined
   */
  public getPeriod(): IDataType | undefined {
    return this.period;
  }

  /**
   * Assigns the provided DataType object value to the `period` property.
   *
   * @decorator `@ChoiceDataTypes('PackagedProductDefinition.package.shelfLifeStorage.period[x]')`
   *
   * @param value - the `period` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('PackagedProductDefinition.package.shelfLifeStorage.period[x]')
  public setPeriod(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.period = value;
    } else {
      this.period = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `period` property exists and has a value; `false` otherwise
   */
  public hasPeriod(): boolean {
    return isDefined<IDataType>(this.period) && !this.period.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `period` property value as a Duration object if defined; else undefined
   */
  public getPeriodDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.period)) {
      return undefined;
    }
    if (!(this.period instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for PackagedProductDefinition.package.shelfLifeStorage.period[x]: Expected Duration but encountered ${this.period.fhirType()}`,
      );
    }
    return this.period;
  }

  /**
   * @returns `true` if the `period` property exists as a Duration and has a value; `false` otherwise
   */
  public hasPeriodDuration(): boolean {
    return this.hasPeriod() && this.period instanceof Duration;
  }

  /**
   * @returns the `period` property value as a StringType object if defined; else undefined
   */
  public getPeriodStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.period)) {
      return undefined;
    }
    if (!(this.period instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for PackagedProductDefinition.package.shelfLifeStorage.period[x]: Expected StringType but encountered ${this.period.fhirType()}`,
      );
    }
    return this.period;
  }

  /**
   * @returns `true` if the `period` property exists as a StringType and has a value; `false` otherwise
   */
  public hasPeriodStringType(): boolean {
    return this.hasPeriod() && this.period instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `specialPrecautionsForStorage` property value as a CodeableConcept array
   */
  public getSpecialPrecautionsForStorage(): CodeableConcept[] {
    return this.specialPrecautionsForStorage ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `specialPrecautionsForStorage` property.
   *
   * @param value - the `specialPrecautionsForStorage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecialPrecautionsForStorage(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.package.shelfLifeStorage.specialPrecautionsForStorage; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.specialPrecautionsForStorage = value;
    } else {
      this.specialPrecautionsForStorage = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `specialPrecautionsForStorage` array property.
   *
   * @param value - the `specialPrecautionsForStorage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSpecialPrecautionsForStorage(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PackagedProductDefinition.package.shelfLifeStorage.specialPrecautionsForStorage; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSpecialPrecautionsForStorage();
      this.specialPrecautionsForStorage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specialPrecautionsForStorage` property exists and has a value; `false` otherwise
   */
  public hasSpecialPrecautionsForStorage(): boolean {
    return isDefinedList<CodeableConcept>(this.specialPrecautionsForStorage) && this.specialPrecautionsForStorage.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `specialPrecautionsForStorage` property
   */
  private initSpecialPrecautionsForStorage(): void {
    if(!this.hasSpecialPrecautionsForStorage()) {
      this.specialPrecautionsForStorage = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PackagedProductDefinition.package.shelfLifeStorage';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.period,
      this.specialPrecautionsForStorage,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PackagedProductDefinitionPackageShelfLifeStorageComponent {
    const dest = new PackagedProductDefinitionPackageShelfLifeStorageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PackagedProductDefinitionPackageShelfLifeStorageComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.period = this.period?.copy() as IDataType;
    const specialPrecautionsForStorageList = copyListValues<CodeableConcept>(this.specialPrecautionsForStorage);
    dest.specialPrecautionsForStorage = specialPrecautionsForStorageList.length === 0 ? undefined : specialPrecautionsForStorageList;
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

    if (this.hasPeriod()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getPeriod()!, 'period', jsonObj);
    }

    if (this.hasSpecialPrecautionsForStorage()) {
      setFhirComplexListJson(this.getSpecialPrecautionsForStorage(), 'specialPrecautionsForStorage', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * PackagedProductDefinitionPackagePropertyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** General characteristics of this item
 * - **Definition:** General characteristics of this item.
 *
 * @category Data Models: Resource
 * @see [FHIR PackagedProductDefinition](http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition)
 */
export class PackagedProductDefinitionPackagePropertyComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `PackagedProductDefinitionPackagePropertyComponent` JSON to instantiate the PackagedProductDefinitionPackagePropertyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PackagedProductDefinitionPackagePropertyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PackagedProductDefinitionPackagePropertyComponent
   * @returns PackagedProductDefinitionPackagePropertyComponent data model or undefined for `PackagedProductDefinitionPackagePropertyComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PackagedProductDefinitionPackagePropertyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PackagedProductDefinitionPackagePropertyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PackagedProductDefinitionPackagePropertyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = PackagedProductDefinitionPackagePropertyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for PackagedProductDefinitionPackagePropertyComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setType(datatype);
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
    instance.setValue(value);

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * PackagedProductDefinition.package.property.type Element
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
   * PackagedProductDefinition.package.property.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('PackagedProductDefinition.package.property.value[x]', ['CodeableConcept','Quantity','date','boolean','Attachment',]`
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
  @ChoiceDataTypesMeta('PackagedProductDefinition.package.property.value[x]',[
    'CodeableConcept',
    'Quantity',
    'date',
    'boolean',
    'Attachment',
  ])
  private value?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else null
   */
  public getType(): CodeableConcept | null {
    return this.type_;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `PackagedProductDefinition.package.property.type is required`);
    const optErrMsg = `Invalid PackagedProductDefinition.package.property.type; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.type_ = value;
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
   * @decorator `@ChoiceDataTypes('PackagedProductDefinition.package.property.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('PackagedProductDefinition.package.property.value[x]')
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
        `DataType mismatch for PackagedProductDefinition.package.property.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for PackagedProductDefinition.package.property.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for PackagedProductDefinition.package.property.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for PackagedProductDefinition.package.property.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for PackagedProductDefinition.package.property.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
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
    return 'PackagedProductDefinition.package.property';
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
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PackagedProductDefinitionPackagePropertyComponent {
    const dest = new PackagedProductDefinitionPackagePropertyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PackagedProductDefinitionPackagePropertyComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.value = this.value?.copy() as IDataType;
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

    if (this.hasType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getType()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`PackagedProductDefinition.package.property.type`);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * PackagedProductDefinitionPackageContainedItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The item(s) within the packaging
 * - **Definition:** The item(s) within the packaging.
 *
 * @category Data Models: Resource
 * @see [FHIR PackagedProductDefinition](http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition)
 */
export class PackagedProductDefinitionPackageContainedItemComponent extends BackboneElement implements IBackboneElement {
  constructor(item: CodeableReference | null = null) {
    super();

    this.item = null;
    if (isDefined<CodeableReference>(item)) {
      this.setItem(item);
    }
  }

  /**
   * Parse the provided `PackagedProductDefinitionPackageContainedItemComponent` JSON to instantiate the PackagedProductDefinitionPackageContainedItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PackagedProductDefinitionPackageContainedItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PackagedProductDefinitionPackageContainedItemComponent
   * @returns PackagedProductDefinitionPackageContainedItemComponent data model or undefined for `PackagedProductDefinitionPackageContainedItemComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PackagedProductDefinitionPackageContainedItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PackagedProductDefinitionPackageContainedItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PackagedProductDefinitionPackageContainedItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setItem(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmount(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * PackagedProductDefinition.package.containedItem.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual item(s) of medication, as manufactured, or a device, or other medically related item (food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package
   * - **Definition:** The actual item(s) of medication, as manufactured, or a device (typically, but not necessarily, a co-packaged one), or other medically related item (such as food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package. This also allows another whole packaged product to be included, which is solely for the case where a package of other entire packages is wanted - such as a wholesale or distribution pack (for layers within one package, use PackagedProductDefinition.package.package).
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
   * PackagedProductDefinition.package.containedItem.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The number of this type of item within this packaging
   * - **Definition:** The number of this type of item within this packaging.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount?: Quantity | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `item` property value as a CodeableReference object if defined; else null
   */
  public getItem(): CodeableReference | null {
    return this.item;
  }

  /**
   * Assigns the provided CodeableReference object value to the `item` property.
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: CodeableReference): this {
    assertIsDefined<CodeableReference>(value, `PackagedProductDefinition.package.containedItem.item is required`);
    const optErrMsg = `Invalid PackagedProductDefinition.package.containedItem.item; Provided element is not an instance of CodeableReference.`;
    assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
    this.item = value;
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
      const optErrMsg = `Invalid PackagedProductDefinition.package.containedItem.amount; Provided element is not an instance of Quantity.`;
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
    return 'PackagedProductDefinition.package.containedItem';
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
  public override copy(): PackagedProductDefinitionPackageContainedItemComponent {
    const dest = new PackagedProductDefinitionPackageContainedItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PackagedProductDefinitionPackageContainedItemComponent): void {
    super.copyValues(dest);
    dest.item = this.item ? this.item.copy() : null;
    dest.amount = this.amount?.copy();
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

    if (this.hasItem()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getItem()!, 'item', jsonObj);
    } else {
      missingReqdProperties.push(`PackagedProductDefinition.package.containedItem.item`);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
