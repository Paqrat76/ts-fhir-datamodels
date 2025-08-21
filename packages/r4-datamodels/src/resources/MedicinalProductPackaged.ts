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
 * MedicinalProductPackaged Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged
 * StructureDefinition.name: MedicinalProductPackaged
 * StructureDefinition.description: A medicinal product in a container or package.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
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
  assertIsDefinedList,
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
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, MarketingStatus, PARSABLE_DATATYPE_MAP, ProdCharacteristic, ProductShelfLife, Quantity, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * MedicinalProductPackaged Class
 *
 * @remarks
 * A medicinal product in a container or package.
 *
 * **FHIR Specification**
 * - **Short:** A medicinal product in a container or package
 * - **Definition:** A medicinal product in a container or package.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductPackaged](http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged)
 */
export class MedicinalProductPackaged extends DomainResource implements IDomainResource {
  constructor(packageItem: MedicinalProductPackagedPackageItemComponent[] | null = null) {
    super();

    this.packageItem = null;
    if (isDefinedList<MedicinalProductPackagedPackageItemComponent>(packageItem)) {
      this.setPackageItem(packageItem);
    }
  }

  /**
   * Parse the provided `MedicinalProductPackaged` JSON to instantiate the MedicinalProductPackaged data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductPackaged`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductPackaged
   * @returns MedicinalProductPackaged data model or undefined for `MedicinalProductPackaged`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductPackaged | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductPackaged';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductPackaged();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicinalProductPackaged');
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

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSubject(datatype);
        }
      });
  }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'legalStatusOfSupply';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLegalStatusOfSupply(datatype);
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

    fieldName = 'marketingAuthorization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMarketingAuthorization(datatype);
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

    fieldName = 'batchIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductPackagedBatchIdentifierComponent | undefined = MedicinalProductPackagedBatchIdentifierComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addBatchIdentifier(component);
        }
      });
    }

    fieldName = 'packageItem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductPackagedPackageItemComponent | undefined = MedicinalProductPackagedPackageItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addPackageItem(component);
        }
      });
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
   * MedicinalProductPackaged.identifier Element
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
   * MedicinalProductPackaged.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The product with this is a pack for
   * - **Definition:** The product with this is a pack for.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProduct',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference[] | undefined;

  /**
   * MedicinalProductPackaged.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Textual description
   * - **Definition:** Textual description.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * MedicinalProductPackaged.legalStatusOfSupply Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The legal status of supply of the medicinal product as classified by the regulator
   * - **Definition:** The legal status of supply of the medicinal product as classified by the regulator.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private legalStatusOfSupply?: CodeableConcept | undefined;

  /**
   * MedicinalProductPackaged.marketingStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Marketing information
   * - **Definition:** Marketing information.
   * - **FHIR Type:** `MarketingStatus`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private marketingStatus?: MarketingStatus[] | undefined;

  /**
   * MedicinalProductPackaged.marketingAuthorization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Manufacturer of this Package Item
   * - **Definition:** Manufacturer of this Package Item.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private marketingAuthorization?: Reference | undefined;

  /**
   * MedicinalProductPackaged.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Manufacturer of this Package Item
   * - **Definition:** Manufacturer of this Package Item.
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
   * MedicinalProductPackaged.batchIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Batch numbering
   * - **Definition:** Batch numbering.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private batchIdentifier?: MedicinalProductPackagedBatchIdentifierComponent[] | undefined;

  /**
   * MedicinalProductPackaged.packageItem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A packaging item, as a contained for medicine, possibly with other packaging items within
   * - **Definition:** A packaging item, as a contained for medicine, possibly with other packaging items within.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private packageItem: MedicinalProductPackagedPackageItemComponent[] | null;

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
      const optErrMsg = `Invalid MedicinalProductPackaged.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicinalProductPackaged.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `subject` property value as a Reference array
   */
  public getSubject(): Reference[] {
    return this.subject ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductPackaged.subject', ['MedicinalProduct',])`
   *
   * @param value - the `subject` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPackaged.subject', [
    'MedicinalProduct',
  ])
  public setSubject(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `subject` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductPackaged.subject', ['MedicinalProduct',])`
   *
   * @param value - the `subject` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPackaged.subject', [
    'MedicinalProduct',
  ])
  public addSubject(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSubject();
      this.subject?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefinedList<Reference>(this.subject) && this.subject.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `subject` property
   */
  private initSubject(): void {
    if (!this.hasSubject()) {
      this.subject = [] as Reference[];
    }
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
      const optErrMsg = `Invalid MedicinalProductPackaged.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid MedicinalProductPackaged.description (${String(value)})`;
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
   * @returns the `legalStatusOfSupply` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getLegalStatusOfSupply(): CodeableConcept {
    return this.legalStatusOfSupply ?? new CodeableConcept();
  }

  /**
   * Assigns the provided LegalStatusOfSupply object value to the `legalStatusOfSupply` property.
   *
   * @param value - the `legalStatusOfSupply` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLegalStatusOfSupply(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductPackaged.legalStatusOfSupply; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.legalStatusOfSupply = value;
    } else {
      this.legalStatusOfSupply = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `legalStatusOfSupply` property exists and has a value; `false` otherwise
   */
  public hasLegalStatusOfSupply(): boolean {
    return isDefined<CodeableConcept>(this.legalStatusOfSupply) && !this.legalStatusOfSupply.isEmpty();
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
      const optErrMsg = `Invalid MedicinalProductPackaged.marketingStatus; Provided value array has an element that is not an instance of MarketingStatus.`;
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
      const optErrMsg = `Invalid MedicinalProductPackaged.marketingStatus; Provided element is not an instance of MarketingStatus.`;
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
   * @returns the `marketingAuthorization` property value as a Reference object; else an empty Reference object
   */
  public getMarketingAuthorization(): Reference {
    return this.marketingAuthorization ?? new Reference();
  }

  /**
   * Assigns the provided MarketingAuthorization object value to the `marketingAuthorization` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductPackaged.marketingAuthorization', ['MedicinalProductAuthorization',])`
   *
   * @param value - the `marketingAuthorization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPackaged.marketingAuthorization', [
    'MedicinalProductAuthorization',
  ])
  public setMarketingAuthorization(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.marketingAuthorization = value;
    } else {
      this.marketingAuthorization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `marketingAuthorization` property exists and has a value; `false` otherwise
   */
  public hasMarketingAuthorization(): boolean {
    return isDefined<Reference>(this.marketingAuthorization) && !this.marketingAuthorization.isEmpty();
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
   * @decorator `@ReferenceTargets('MedicinalProductPackaged.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPackaged.manufacturer', [
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
   * @decorator `@ReferenceTargets('MedicinalProductPackaged.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPackaged.manufacturer', [
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
   * @returns the `batchIdentifier` property value as a MedicinalProductPackagedBatchIdentifierComponent array
   */
  public getBatchIdentifier(): MedicinalProductPackagedBatchIdentifierComponent[] {
    return this.batchIdentifier ?? ([] as MedicinalProductPackagedBatchIdentifierComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductPackagedBatchIdentifierComponent array value to the `batchIdentifier` property.
   *
   * @param value - the `batchIdentifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBatchIdentifier(value: MedicinalProductPackagedBatchIdentifierComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductPackagedBatchIdentifierComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductPackaged.batchIdentifier; Provided value array has an element that is not an instance of MedicinalProductPackagedBatchIdentifierComponent.`;
      assertFhirTypeList<MedicinalProductPackagedBatchIdentifierComponent>(value, MedicinalProductPackagedBatchIdentifierComponent, optErrMsg);
      this.batchIdentifier = value;
    } else {
      this.batchIdentifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductPackagedBatchIdentifierComponent value to the `batchIdentifier` array property.
   *
   * @param value - the `batchIdentifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBatchIdentifier(value: MedicinalProductPackagedBatchIdentifierComponent | undefined): this {
    if (isDefined<MedicinalProductPackagedBatchIdentifierComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductPackaged.batchIdentifier; Provided element is not an instance of MedicinalProductPackagedBatchIdentifierComponent.`;
      assertFhirType<MedicinalProductPackagedBatchIdentifierComponent>(value, MedicinalProductPackagedBatchIdentifierComponent, optErrMsg);
      this.initBatchIdentifier();
      this.batchIdentifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `batchIdentifier` property exists and has a value; `false` otherwise
   */
  public hasBatchIdentifier(): boolean {
    return isDefinedList<MedicinalProductPackagedBatchIdentifierComponent>(this.batchIdentifier) && this.batchIdentifier.some((item: MedicinalProductPackagedBatchIdentifierComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `batchIdentifier` property
   */
  private initBatchIdentifier(): void {
    if(!this.hasBatchIdentifier()) {
      this.batchIdentifier = [] as MedicinalProductPackagedBatchIdentifierComponent[];
    }
  }

  /**
   * @returns the `packageItem` property value as a MedicinalProductPackagedPackageItemComponent array
   */
  public getPackageItem(): MedicinalProductPackagedPackageItemComponent[] {
    return this.packageItem ?? ([] as MedicinalProductPackagedPackageItemComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductPackagedPackageItemComponent array value to the `packageItem` property.
   *
   * @param value - the `packageItem` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackageItem(value: MedicinalProductPackagedPackageItemComponent[]): this {
    assertIsDefinedList<MedicinalProductPackagedPackageItemComponent>(value, `MedicinalProductPackaged.packageItem is required`);
    const optErrMsg = `Invalid MedicinalProductPackaged.packageItem; Provided value array has an element that is not an instance of MedicinalProductPackagedPackageItemComponent.`;
    assertFhirTypeList<MedicinalProductPackagedPackageItemComponent>(value, MedicinalProductPackagedPackageItemComponent, optErrMsg);
    this.packageItem = value;
    return this;
  }

  /**
   * Add the provided MedicinalProductPackagedPackageItemComponent value to the `packageItem` array property.
   *
   * @param value - the `packageItem` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPackageItem(value: MedicinalProductPackagedPackageItemComponent | undefined): this {
    if (isDefined<MedicinalProductPackagedPackageItemComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem; Provided element is not an instance of MedicinalProductPackagedPackageItemComponent.`;
      assertFhirType<MedicinalProductPackagedPackageItemComponent>(value, MedicinalProductPackagedPackageItemComponent, optErrMsg);
      this.initPackageItem();
      this.packageItem?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `packageItem` property exists and has a value; `false` otherwise
   */
  public hasPackageItem(): boolean {
    return isDefinedList<MedicinalProductPackagedPackageItemComponent>(this.packageItem) && this.packageItem.some((item: MedicinalProductPackagedPackageItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `packageItem` property
   */
  private initPackageItem(): void {
    if(!this.hasPackageItem()) {
      this.packageItem = [] as MedicinalProductPackagedPackageItemComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductPackaged';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.subject,
      this.description,
      this.legalStatusOfSupply,
      this.marketingStatus,
      this.marketingAuthorization,
      this.manufacturer,
      this.batchIdentifier,
      this.packageItem,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductPackaged {
    const dest = new MedicinalProductPackaged();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductPackaged): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const subjectList = copyListValues<Reference>(this.subject);
    dest.subject = subjectList.length === 0 ? undefined : subjectList;
    dest.description = this.description?.copy();
    dest.legalStatusOfSupply = this.legalStatusOfSupply?.copy();
    const marketingStatusList = copyListValues<MarketingStatus>(this.marketingStatus);
    dest.marketingStatus = marketingStatusList.length === 0 ? undefined : marketingStatusList;
    dest.marketingAuthorization = this.marketingAuthorization?.copy();
    const manufacturerList = copyListValues<Reference>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
    const batchIdentifierList = copyListValues<MedicinalProductPackagedBatchIdentifierComponent>(this.batchIdentifier);
    dest.batchIdentifier = batchIdentifierList.length === 0 ? undefined : batchIdentifierList;
    const packageItemList = copyListValues<MedicinalProductPackagedPackageItemComponent>(this.packageItem);
    dest.packageItem = packageItemList.length === 0 ? null : packageItemList;
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

    if (this.hasSubject()) {
      setFhirComplexListJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasLegalStatusOfSupply()) {
      setFhirComplexJson(this.getLegalStatusOfSupply(), 'legalStatusOfSupply', jsonObj);
    }

    if (this.hasMarketingStatus()) {
      setFhirComplexListJson(this.getMarketingStatus(), 'marketingStatus', jsonObj);
    }

    if (this.hasMarketingAuthorization()) {
      setFhirComplexJson(this.getMarketingAuthorization(), 'marketingAuthorization', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexListJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasBatchIdentifier()) {
      setFhirBackboneElementListJson(this.getBatchIdentifier(), 'batchIdentifier', jsonObj);
    }

    if (this.hasPackageItem()) {
      setFhirBackboneElementListJson(this.getPackageItem(), 'packageItem', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductPackaged.packageItem`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * MedicinalProductPackagedBatchIdentifierComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Batch numbering
 * - **Definition:** Batch numbering.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductPackaged](http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged)
 */
export class MedicinalProductPackagedBatchIdentifierComponent extends BackboneElement implements IBackboneElement {
  constructor(outerPackaging: Identifier | null = null) {
    super();

    this.outerPackaging = null;
    if (isDefined<Identifier>(outerPackaging)) {
      this.setOuterPackaging(outerPackaging);
    }
  }

  /**
   * Parse the provided `MedicinalProductPackagedBatchIdentifierComponent` JSON to instantiate the MedicinalProductPackagedBatchIdentifierComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductPackagedBatchIdentifierComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductPackagedBatchIdentifierComponent
   * @returns MedicinalProductPackagedBatchIdentifierComponent data model or undefined for `MedicinalProductPackagedBatchIdentifierComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductPackagedBatchIdentifierComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductPackagedBatchIdentifierComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductPackagedBatchIdentifierComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'outerPackaging';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setOuterPackaging(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'immediatePackaging';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setImmediatePackaging(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicinalProductPackaged.batchIdentifier.outerPackaging Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A number appearing on the outer packaging of a specific batch
   * - **Definition:** A number appearing on the outer packaging of a specific batch.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private outerPackaging: Identifier | null;

  /**
   * MedicinalProductPackaged.batchIdentifier.immediatePackaging Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A number appearing on the immediate packaging (and not the outer packaging)
   * - **Definition:** A number appearing on the immediate packaging (and not the outer packaging).
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private immediatePackaging?: Identifier | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `outerPackaging` property value as a Identifier object if defined; else null
   */
  public getOuterPackaging(): Identifier | null {
    return this.outerPackaging;
  }

  /**
   * Assigns the provided Identifier object value to the `outerPackaging` property.
   *
   * @param value - the `outerPackaging` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOuterPackaging(value: Identifier): this {
    assertIsDefined<Identifier>(value, `MedicinalProductPackaged.batchIdentifier.outerPackaging is required`);
    const optErrMsg = `Invalid MedicinalProductPackaged.batchIdentifier.outerPackaging; Provided element is not an instance of Identifier.`;
    assertFhirType<Identifier>(value, Identifier, optErrMsg);
    this.outerPackaging = value;
    return this;
  }

  /**
   * @returns `true` if the `outerPackaging` property exists and has a value; `false` otherwise
   */
  public hasOuterPackaging(): boolean {
    return isDefined<Identifier>(this.outerPackaging) && !this.outerPackaging.isEmpty();
  }

  /**
   * @returns the `immediatePackaging` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getImmediatePackaging(): Identifier {
    return this.immediatePackaging ?? new Identifier();
  }

  /**
   * Assigns the provided ImmediatePackaging object value to the `immediatePackaging` property.
   *
   * @param value - the `immediatePackaging` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setImmediatePackaging(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid MedicinalProductPackaged.batchIdentifier.immediatePackaging; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.immediatePackaging = value;
    } else {
      this.immediatePackaging = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `immediatePackaging` property exists and has a value; `false` otherwise
   */
  public hasImmediatePackaging(): boolean {
    return isDefined<Identifier>(this.immediatePackaging) && !this.immediatePackaging.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductPackaged.batchIdentifier';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.outerPackaging,
      this.immediatePackaging,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductPackagedBatchIdentifierComponent {
    const dest = new MedicinalProductPackagedBatchIdentifierComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductPackagedBatchIdentifierComponent): void {
    super.copyValues(dest);
    dest.outerPackaging = this.outerPackaging ? this.outerPackaging.copy() : null;
    dest.immediatePackaging = this.immediatePackaging?.copy();
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

    if (this.hasOuterPackaging()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getOuterPackaging()!, 'outerPackaging', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductPackaged.batchIdentifier.outerPackaging`);
    }

    if (this.hasImmediatePackaging()) {
      setFhirComplexJson(this.getImmediatePackaging(), 'immediatePackaging', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductPackagedPackageItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A packaging item, as a contained for medicine, possibly with other packaging items within
 * - **Definition:** A packaging item, as a contained for medicine, possibly with other packaging items within.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductPackaged](http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged)
 */
export class MedicinalProductPackagedPackageItemComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, quantity: Quantity | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.quantity = null;
    if (isDefined<Quantity>(quantity)) {
      this.setQuantity(quantity);
    }
  }

  /**
   * Parse the provided `MedicinalProductPackagedPackageItemComponent` JSON to instantiate the MedicinalProductPackagedPackageItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductPackagedPackageItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductPackagedPackageItemComponent
   * @returns MedicinalProductPackagedPackageItemComponent data model or undefined for `MedicinalProductPackagedPackageItemComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductPackagedPackageItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductPackagedPackageItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductPackagedPackageItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

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

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setQuantity(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDevice(datatype);
        }
      });
  }

    fieldName = 'manufacturedItem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addManufacturedItem(datatype);
        }
      });
  }

    fieldName = 'packageItem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductPackagedPackageItemComponent | undefined = MedicinalProductPackagedPackageItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPackageItem(component);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicinalProductPackaged.packageItem.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Including possibly Data Carrier Identifier
   * - **Definition:** Including possibly Data Carrier Identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * MedicinalProductPackaged.packageItem.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The physical type of the container of the medicine
   * - **Definition:** The physical type of the container of the medicine.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * MedicinalProductPackaged.packageItem.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1
   * - **Definition:** The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private quantity: Quantity | null;

  /**
   * MedicinalProductPackaged.packageItem.material Element
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
   * MedicinalProductPackaged.packageItem.alternateMaterial Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A possible alternate material for the packaging
   * - **Definition:** A possible alternate material for the packaging.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private alternateMaterial?: CodeableConcept[] | undefined;

  /**
   * MedicinalProductPackaged.packageItem.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A device accompanying a medicinal product
   * - **Definition:** A device accompanying a medicinal product.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private device?: Reference[] | undefined;

  /**
   * MedicinalProductPackaged.packageItem.manufacturedItem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The manufactured item as contained in the packaged medicinal product
   * - **Definition:** The manufactured item as contained in the packaged medicinal product.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductManufactured',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private manufacturedItem?: Reference[] | undefined;

  /**
   * MedicinalProductPackaged.packageItem.packageItem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allows containers within containers
   * - **Definition:** Allows containers within containers.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private packageItem?: MedicinalProductPackagedPackageItemComponent[] | undefined;

  /**
   * MedicinalProductPackaged.packageItem.physicalCharacteristics Element
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
   * MedicinalProductPackaged.packageItem.otherCharacteristics Element
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

  /**
   * MedicinalProductPackaged.packageItem.shelfLifeStorage Element
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
   * MedicinalProductPackaged.packageItem.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Manufacturer of this Package Item
   * - **Definition:** Manufacturer of this Package Item.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private manufacturer?: Reference[] | undefined;

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
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.identifier; Provided element is not an instance of Identifier.`;
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
    assertIsDefined<CodeableConcept>(value, `MedicinalProductPackaged.packageItem.type is required`);
    const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `quantity` property value as a Quantity object if defined; else null
   */
  public getQuantity(): Quantity | null {
    return this.quantity;
  }

  /**
   * Assigns the provided Quantity object value to the `quantity` property.
   *
   * @param value - the `quantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantity(value: Quantity): this {
    assertIsDefined<Quantity>(value, `MedicinalProductPackaged.packageItem.quantity is required`);
    const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.quantity; Provided element is not an instance of Quantity.`;
    assertFhirType<Quantity>(value, Quantity, optErrMsg);
    this.quantity = value;
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return isDefined<Quantity>(this.quantity) && !this.quantity.isEmpty();
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
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.material; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.material; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.alternateMaterial; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.alternateMaterial; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `device` property value as a Reference array
   */
  public getDevice(): Reference[] {
    return this.device ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `device` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductPackaged.packageItem.device', ['DeviceDefinition',])`
   *
   * @param value - the `device` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPackaged.packageItem.device', [
    'DeviceDefinition',
  ])
  public setDevice(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.device = value;
    } else {
      this.device = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `device` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductPackaged.packageItem.device', ['DeviceDefinition',])`
   *
   * @param value - the `device` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPackaged.packageItem.device', [
    'DeviceDefinition',
  ])
  public addDevice(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDevice();
      this.device?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `device` property exists and has a value; `false` otherwise
   */
  public hasDevice(): boolean {
    return isDefinedList<Reference>(this.device) && this.device.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `device` property
   */
  private initDevice(): void {
    if (!this.hasDevice()) {
      this.device = [] as Reference[];
    }
  }

  /**
   * @returns the `manufacturedItem` property value as a Reference array
   */
  public getManufacturedItem(): Reference[] {
    return this.manufacturedItem ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `manufacturedItem` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductPackaged.packageItem.manufacturedItem', ['MedicinalProductManufactured',])`
   *
   * @param value - the `manufacturedItem` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPackaged.packageItem.manufacturedItem', [
    'MedicinalProductManufactured',
  ])
  public setManufacturedItem(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.manufacturedItem = value;
    } else {
      this.manufacturedItem = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `manufacturedItem` array property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductPackaged.packageItem.manufacturedItem', ['MedicinalProductManufactured',])`
   *
   * @param value - the `manufacturedItem` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPackaged.packageItem.manufacturedItem', [
    'MedicinalProductManufactured',
  ])
  public addManufacturedItem(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initManufacturedItem();
      this.manufacturedItem?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `manufacturedItem` property exists and has a value; `false` otherwise
   */
  public hasManufacturedItem(): boolean {
    return isDefinedList<Reference>(this.manufacturedItem) && this.manufacturedItem.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `manufacturedItem` property
   */
  private initManufacturedItem(): void {
    if (!this.hasManufacturedItem()) {
      this.manufacturedItem = [] as Reference[];
    }
  }

  /**
   * @returns the `packageItem` property value as a MedicinalProductPackagedPackageItemComponent array
   */
  public getPackageItem(): MedicinalProductPackagedPackageItemComponent[] {
    return this.packageItem ?? ([] as MedicinalProductPackagedPackageItemComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductPackagedPackageItemComponent array value to the `packageItem` property.
   *
   * @param value - the `packageItem` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPackageItem(value: MedicinalProductPackagedPackageItemComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductPackagedPackageItemComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.packageItem; Provided value array has an element that is not an instance of MedicinalProductPackagedPackageItemComponent.`;
      assertFhirTypeList<MedicinalProductPackagedPackageItemComponent>(value, MedicinalProductPackagedPackageItemComponent, optErrMsg);
      this.packageItem = value;
    } else {
      this.packageItem = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductPackagedPackageItemComponent value to the `packageItem` array property.
   *
   * @param value - the `packageItem` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPackageItem(value: MedicinalProductPackagedPackageItemComponent | undefined): this {
    if (isDefined<MedicinalProductPackagedPackageItemComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.packageItem; Provided element is not an instance of MedicinalProductPackagedPackageItemComponent.`;
      assertFhirType<MedicinalProductPackagedPackageItemComponent>(value, MedicinalProductPackagedPackageItemComponent, optErrMsg);
      this.initPackageItem();
      this.packageItem?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `packageItem` property exists and has a value; `false` otherwise
   */
  public hasPackageItem(): boolean {
    return isDefinedList<MedicinalProductPackagedPackageItemComponent>(this.packageItem) && this.packageItem.some((item: MedicinalProductPackagedPackageItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `packageItem` property
   */
  private initPackageItem(): void {
    if(!this.hasPackageItem()) {
      this.packageItem = [] as MedicinalProductPackagedPackageItemComponent[];
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
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.physicalCharacteristics; Provided element is not an instance of ProdCharacteristic.`;
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
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.otherCharacteristics; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.otherCharacteristics; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.shelfLifeStorage; Provided value array has an element that is not an instance of ProductShelfLife.`;
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
      const optErrMsg = `Invalid MedicinalProductPackaged.packageItem.shelfLifeStorage; Provided element is not an instance of ProductShelfLife.`;
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
   * @decorator `@ReferenceTargets('MedicinalProductPackaged.packageItem.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPackaged.packageItem.manufacturer', [
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
   * @decorator `@ReferenceTargets('MedicinalProductPackaged.packageItem.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductPackaged.packageItem.manufacturer', [
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductPackaged.packageItem';
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
      this.device,
      this.manufacturedItem,
      this.packageItem,
      this.physicalCharacteristics,
      this.otherCharacteristics,
      this.shelfLifeStorage,
      this.manufacturer,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductPackagedPackageItemComponent {
    const dest = new MedicinalProductPackagedPackageItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductPackagedPackageItemComponent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.quantity = this.quantity ? this.quantity.copy() : null;
    const materialList = copyListValues<CodeableConcept>(this.material);
    dest.material = materialList.length === 0 ? undefined : materialList;
    const alternateMaterialList = copyListValues<CodeableConcept>(this.alternateMaterial);
    dest.alternateMaterial = alternateMaterialList.length === 0 ? undefined : alternateMaterialList;
    const deviceList = copyListValues<Reference>(this.device);
    dest.device = deviceList.length === 0 ? undefined : deviceList;
    const manufacturedItemList = copyListValues<Reference>(this.manufacturedItem);
    dest.manufacturedItem = manufacturedItemList.length === 0 ? undefined : manufacturedItemList;
    const packageItemList = copyListValues<MedicinalProductPackagedPackageItemComponent>(this.packageItem);
    dest.packageItem = packageItemList.length === 0 ? undefined : packageItemList;
    dest.physicalCharacteristics = this.physicalCharacteristics?.copy();
    const otherCharacteristicsList = copyListValues<CodeableConcept>(this.otherCharacteristics);
    dest.otherCharacteristics = otherCharacteristicsList.length === 0 ? undefined : otherCharacteristicsList;
    const shelfLifeStorageList = copyListValues<ProductShelfLife>(this.shelfLifeStorage);
    dest.shelfLifeStorage = shelfLifeStorageList.length === 0 ? undefined : shelfLifeStorageList;
    const manufacturerList = copyListValues<Reference>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
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

    if (this.hasType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getType()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductPackaged.packageItem.type`);
    }

    if (this.hasQuantity()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getQuantity()!, 'quantity', jsonObj);
    } else {
      missingReqdProperties.push(`MedicinalProductPackaged.packageItem.quantity`);
    }

    if (this.hasMaterial()) {
      setFhirComplexListJson(this.getMaterial(), 'material', jsonObj);
    }

    if (this.hasAlternateMaterial()) {
      setFhirComplexListJson(this.getAlternateMaterial(), 'alternateMaterial', jsonObj);
    }

    if (this.hasDevice()) {
      setFhirComplexListJson(this.getDevice(), 'device', jsonObj);
    }

    if (this.hasManufacturedItem()) {
      setFhirComplexListJson(this.getManufacturedItem(), 'manufacturedItem', jsonObj);
    }

    if (this.hasPackageItem()) {
      setFhirBackboneElementListJson(this.getPackageItem(), 'packageItem', jsonObj);
    }

    if (this.hasPhysicalCharacteristics()) {
      setFhirComplexJson(this.getPhysicalCharacteristics(), 'physicalCharacteristics', jsonObj);
    }

    if (this.hasOtherCharacteristics()) {
      setFhirComplexListJson(this.getOtherCharacteristics(), 'otherCharacteristics', jsonObj);
    }

    if (this.hasShelfLifeStorage()) {
      setFhirComplexListJson(this.getShelfLifeStorage(), 'shelfLifeStorage', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexListJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
