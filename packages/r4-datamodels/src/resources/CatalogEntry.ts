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
 * CatalogEntry Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/CatalogEntry
 * StructureDefinition.name: CatalogEntry
 * StructureDefinition.description: Catalog entries are wrappers that contextualize items included in a catalog.
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
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  JSON,
  PrimitiveType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
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
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { RelationTypeEnum } from '../code-systems/RelationTypeEnum';

/**
 * CatalogEntry Class
 *
 * @remarks
 * Catalog entries are wrappers that contextualize items included in a catalog.
 *
 * **FHIR Specification**
 * - **Short:** An entry in a catalog
 * - **Definition:** Catalog entries are wrappers that contextualize items included in a catalog.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR CatalogEntry](http://hl7.org/fhir/StructureDefinition/CatalogEntry)
 */
export class CatalogEntry extends DomainResource implements IDomainResource {
  constructor(orderable: BooleanType | fhirBoolean | null = null, referencedItem: Reference | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.orderable = null;
    if (isDefined<BooleanType | fhirBoolean>(orderable)) {
      if (orderable instanceof PrimitiveType) {
        this.setOrderableElement(orderable);
      } else {
        this.setOrderable(orderable);
      }
    }

    this.referencedItem = null;
    if (isDefined<Reference>(referencedItem)) {
      this.setReferencedItem(referencedItem);
    }
  }

  /**
   * Parse the provided `CatalogEntry` JSON to instantiate the CatalogEntry data model.
   *
   * @param sourceJson - JSON representing FHIR `CatalogEntry`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CatalogEntry
   * @returns CatalogEntry data model or undefined for `CatalogEntry`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): CatalogEntry | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CatalogEntry';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CatalogEntry();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'CatalogEntry');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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
      instance.setType(datatype);
    }

    fieldName = 'orderable';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setOrderableElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'referencedItem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setReferencedItem(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'additionalIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAdditionalIdentifier(datatype);
        }
      });
    }

    fieldName = 'classification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addClassification(datatype);
        }
      });
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setStatusElement(datatype);
    }

    fieldName = 'validityPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setValidityPeriod(datatype);
    }

    fieldName = 'validTo';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setValidToElement(datatype);
    }

    fieldName = 'lastUpdated';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setLastUpdatedElement(datatype);
    }

    fieldName = 'additionalCharacteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAdditionalCharacteristic(datatype);
        }
      });
    }

    fieldName = 'additionalClassification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAdditionalClassification(datatype);
        }
      });
    }

    fieldName = 'relatedEntry';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CatalogEntryRelatedEntryComponent | undefined = CatalogEntryRelatedEntryComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRelatedEntry(component);
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
   * CatalogEntry.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique identifier of the catalog item
   * - **Definition:** Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * CatalogEntry.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of item - medication, device, service, protocol or other
   * - **Definition:** The type of item - medication, device, service, protocol or other.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * CatalogEntry.orderable Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the entry represents an orderable item
   * - **Definition:** Whether the entry represents an orderable item.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private orderable: BooleanType | null;

  /**
   * CatalogEntry.referencedItem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The item that is being defined
   * - **Definition:** The item in a catalog or definition.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/SpecimenDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Binary',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private referencedItem: Reference | null;

  /**
   * CatalogEntry.additionalIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Any additional identifier(s) for the catalog item, in the same granularity or concept
   * - **Definition:** Used in supporting related concepts, e.g. NDC to RxNorm.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private additionalIdentifier?: Identifier[] | undefined;

  /**
   * CatalogEntry.classification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification (category or class) of the item entry
   * - **Definition:** Classes of devices, or ATC for medication.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private classification?: CodeableConcept[] | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * CatalogEntry.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * CatalogEntry.validityPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The time period in which this catalog entry is expected to be active
   * - **Definition:** The time period in which this catalog entry is expected to be active.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private validityPeriod?: Period | undefined;

  /**
   * CatalogEntry.validTo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date until which this catalog entry is expected to be active
   * - **Definition:** The date until which this catalog entry is expected to be active.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private validTo?: DateTimeType | undefined;

  /**
   * CatalogEntry.lastUpdated Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When was this catalog last updated
   * - **Definition:** Typically date of issue is different from the beginning of the validity. This can be used to see when an item was last updated.
   * - **Comment:** Perhaps not needed - if we use fhir resource metadata.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lastUpdated?: DateTimeType | undefined;

  /**
   * CatalogEntry.additionalCharacteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional characteristics of the catalog entry
   * - **Definition:** Used for examplefor Out of Formulary, or any specifics.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private additionalCharacteristic?: CodeableConcept[] | undefined;

  /**
   * CatalogEntry.additionalClassification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional classification of the catalog entry
   * - **Definition:** User for example for ATC classification, or.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private additionalClassification?: CodeableConcept[] | undefined;

  /**
   * CatalogEntry.relatedEntry Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An item that this catalog entry is related to
   * - **Definition:** Used for example, to point to a substance, or to a device used to administer a medication.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedEntry?: CatalogEntryRelatedEntryComponent[] | undefined;

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
      const optErrMsg = `Invalid CatalogEntry.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid CatalogEntry.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid CatalogEntry.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `orderable` property value as a BooleanType object if defined; else null
   */
  public getOrderableElement(): BooleanType | null {
    return this.orderable;
  }

  /**
   * Assigns the provided PrimitiveType value to the `orderable` property.
   *
   * @param element - the `orderable` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOrderableElement(element: BooleanType): this {
    assertIsDefined<BooleanType>(element, `CatalogEntry.orderable is required`);
    const optErrMsg = `Invalid CatalogEntry.orderable; Provided value is not an instance of BooleanType.`;
    assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
    this.orderable = element;
    return this;
  }

  /**
   * @returns `true` if the `orderable` property exists and has a value; `false` otherwise
   */
  public hasOrderableElement(): boolean {
    return isDefined<BooleanType>(this.orderable) && !this.orderable.isEmpty();
  }

  /**
   * @returns the `orderable` property value as a fhirBoolean if defined; else null
   */
  public getOrderable(): fhirBoolean | null {
    if (this.orderable?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.orderable.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `orderable` property.
   *
   * @param value - the `orderable` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOrderable(value: fhirBoolean): this {
    assertIsDefined<fhirBoolean>(value, `CatalogEntry.orderable is required`);
    const optErrMsg = `Invalid CatalogEntry.orderable (${String(value)})`;
    this.orderable = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `orderable` property exists and has a value; `false` otherwise
   */
  public hasOrderable(): boolean {
    return this.hasOrderableElement();
  }

  /**
   * @returns the `referencedItem` property value as a Reference object if defined; else null
   */
  public getReferencedItem(): Reference | null {
    return this.referencedItem;
  }

  /**
   * Assigns the provided ReferencedItem object value to the `referencedItem` property.
   *
   * @decorator `@ReferenceTargets('CatalogEntry.referencedItem', ['Medication','Device','Organization','Practitioner','PractitionerRole','HealthcareService','ActivityDefinition','PlanDefinition','SpecimenDefinition','ObservationDefinition','Binary',])`
   *
   * @param value - the `referencedItem` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CatalogEntry.referencedItem', [
    'Medication',
  
    'Device',
  
    'Organization',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'HealthcareService',
  
    'ActivityDefinition',
  
    'PlanDefinition',
  
    'SpecimenDefinition',
  
    'ObservationDefinition',
  
    'Binary',
  ])
  public setReferencedItem(value: Reference): this {
    assertIsDefined<Reference>(value, `CatalogEntry.referencedItem is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.referencedItem = value;
    return this;
  }

  /**
   * @returns `true` if the `referencedItem` property exists and has a value; `false` otherwise
   */
  public hasReferencedItem(): boolean {
    return isDefined<Reference>(this.referencedItem) && !this.referencedItem.isEmpty();
  }

  /**
   * @returns the `additionalIdentifier` property value as a Identifier array
   */
  public getAdditionalIdentifier(): Identifier[] {
    return this.additionalIdentifier ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `additionalIdentifier` property.
   *
   * @param value - the `additionalIdentifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdditionalIdentifier(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid CatalogEntry.additionalIdentifier; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.additionalIdentifier = value;
    } else {
      this.additionalIdentifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `additionalIdentifier` array property.
   *
   * @param value - the `additionalIdentifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdditionalIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid CatalogEntry.additionalIdentifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initAdditionalIdentifier();
      this.additionalIdentifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `additionalIdentifier` property exists and has a value; `false` otherwise
   */
  public hasAdditionalIdentifier(): boolean {
    return isDefinedList<Identifier>(this.additionalIdentifier) && this.additionalIdentifier.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `additionalIdentifier` property
   */
  private initAdditionalIdentifier(): void {
    if(!this.hasAdditionalIdentifier()) {
      this.additionalIdentifier = [] as Identifier[];
    }
  }

  /**
   * @returns the `classification` property value as a CodeableConcept array
   */
  public getClassification(): CodeableConcept[] {
    return this.classification ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `classification` property.
   *
   * @param value - the `classification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassification(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CatalogEntry.classification; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.classification = value;
    } else {
      this.classification = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `classification` array property.
   *
   * @param value - the `classification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClassification(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CatalogEntry.classification; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initClassification();
      this.classification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `classification` property exists and has a value; `false` otherwise
   */
  public hasClassification(): boolean {
    return isDefinedList<CodeableConcept>(this.classification) && this.classification.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `classification` property
   */
  private initClassification(): void {
    if(!this.hasClassification()) {
      this.classification = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid CatalogEntry.status';
      assertEnumCodeType<PublicationStatusEnum>(enumType, PublicationStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CatalogEntry.status; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.publicationStatusEnum);
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CatalogEntry.status; Provided value is not an instance of fhirCode.`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.publicationStatusEnum);
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
   * @returns the `validityPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getValidityPeriod(): Period {
    return this.validityPeriod ?? new Period();
  }

  /**
   * Assigns the provided ValidityPeriod object value to the `validityPeriod` property.
   *
   * @param value - the `validityPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValidityPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid CatalogEntry.validityPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.validityPeriod = value;
    } else {
      this.validityPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validityPeriod` property exists and has a value; `false` otherwise
   */
  public hasValidityPeriod(): boolean {
    return isDefined<Period>(this.validityPeriod) && !this.validityPeriod.isEmpty();
  }

  /**
   * @returns the `validTo` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getValidToElement(): DateTimeType {
    return this.validTo ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `validTo` property.
   *
   * @param element - the `validTo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValidToElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid CatalogEntry.validTo; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.validTo = element;
    } else {
      this.validTo = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validTo` property exists and has a value; `false` otherwise
   */
  public hasValidToElement(): boolean {
    return isDefined<DateTimeType>(this.validTo) && !this.validTo.isEmpty();
  }

  /**
   * @returns the `validTo` property value as a fhirDateTime if defined; else undefined
   */
  public getValidTo(): fhirDateTime | undefined {
    return this.validTo?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `validTo` property.
   *
   * @param value - the `validTo` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValidTo(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid CatalogEntry.validTo (${String(value)})`;
      this.validTo = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.validTo = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validTo` property exists and has a value; `false` otherwise
   */
  public hasValidTo(): boolean {
    return this.hasValidToElement();
  }

  /**
   * @returns the `lastUpdated` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getLastUpdatedElement(): DateTimeType {
    return this.lastUpdated ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lastUpdated` property.
   *
   * @param element - the `lastUpdated` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastUpdatedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid CatalogEntry.lastUpdated; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.lastUpdated = element;
    } else {
      this.lastUpdated = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastUpdated` property exists and has a value; `false` otherwise
   */
  public hasLastUpdatedElement(): boolean {
    return isDefined<DateTimeType>(this.lastUpdated) && !this.lastUpdated.isEmpty();
  }

  /**
   * @returns the `lastUpdated` property value as a fhirDateTime if defined; else undefined
   */
  public getLastUpdated(): fhirDateTime | undefined {
    return this.lastUpdated?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lastUpdated` property.
   *
   * @param value - the `lastUpdated` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastUpdated(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid CatalogEntry.lastUpdated (${String(value)})`;
      this.lastUpdated = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.lastUpdated = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastUpdated` property exists and has a value; `false` otherwise
   */
  public hasLastUpdated(): boolean {
    return this.hasLastUpdatedElement();
  }

  /**
   * @returns the `additionalCharacteristic` property value as a CodeableConcept array
   */
  public getAdditionalCharacteristic(): CodeableConcept[] {
    return this.additionalCharacteristic ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `additionalCharacteristic` property.
   *
   * @param value - the `additionalCharacteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdditionalCharacteristic(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CatalogEntry.additionalCharacteristic; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.additionalCharacteristic = value;
    } else {
      this.additionalCharacteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `additionalCharacteristic` array property.
   *
   * @param value - the `additionalCharacteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdditionalCharacteristic(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CatalogEntry.additionalCharacteristic; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initAdditionalCharacteristic();
      this.additionalCharacteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `additionalCharacteristic` property exists and has a value; `false` otherwise
   */
  public hasAdditionalCharacteristic(): boolean {
    return isDefinedList<CodeableConcept>(this.additionalCharacteristic) && this.additionalCharacteristic.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `additionalCharacteristic` property
   */
  private initAdditionalCharacteristic(): void {
    if(!this.hasAdditionalCharacteristic()) {
      this.additionalCharacteristic = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `additionalClassification` property value as a CodeableConcept array
   */
  public getAdditionalClassification(): CodeableConcept[] {
    return this.additionalClassification ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `additionalClassification` property.
   *
   * @param value - the `additionalClassification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdditionalClassification(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CatalogEntry.additionalClassification; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.additionalClassification = value;
    } else {
      this.additionalClassification = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `additionalClassification` array property.
   *
   * @param value - the `additionalClassification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdditionalClassification(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CatalogEntry.additionalClassification; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initAdditionalClassification();
      this.additionalClassification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `additionalClassification` property exists and has a value; `false` otherwise
   */
  public hasAdditionalClassification(): boolean {
    return isDefinedList<CodeableConcept>(this.additionalClassification) && this.additionalClassification.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `additionalClassification` property
   */
  private initAdditionalClassification(): void {
    if(!this.hasAdditionalClassification()) {
      this.additionalClassification = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `relatedEntry` property value as a CatalogEntryRelatedEntryComponent array
   */
  public getRelatedEntry(): CatalogEntryRelatedEntryComponent[] {
    return this.relatedEntry ?? ([] as CatalogEntryRelatedEntryComponent[]);
  }

  /**
   * Assigns the provided CatalogEntryRelatedEntryComponent array value to the `relatedEntry` property.
   *
   * @param value - the `relatedEntry` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatedEntry(value: CatalogEntryRelatedEntryComponent[] | undefined): this {
    if (isDefinedList<CatalogEntryRelatedEntryComponent>(value)) {
      const optErrMsg = `Invalid CatalogEntry.relatedEntry; Provided value array has an element that is not an instance of CatalogEntryRelatedEntryComponent.`;
      assertFhirTypeList<CatalogEntryRelatedEntryComponent>(value, CatalogEntryRelatedEntryComponent, optErrMsg);
      this.relatedEntry = value;
    } else {
      this.relatedEntry = undefined;
    }
    return this;
  }

  /**
   * Add the provided CatalogEntryRelatedEntryComponent value to the `relatedEntry` array property.
   *
   * @param value - the `relatedEntry` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatedEntry(value: CatalogEntryRelatedEntryComponent | undefined): this {
    if (isDefined<CatalogEntryRelatedEntryComponent>(value)) {
      const optErrMsg = `Invalid CatalogEntry.relatedEntry; Provided element is not an instance of CatalogEntryRelatedEntryComponent.`;
      assertFhirType<CatalogEntryRelatedEntryComponent>(value, CatalogEntryRelatedEntryComponent, optErrMsg);
      this.initRelatedEntry();
      this.relatedEntry?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedEntry` property exists and has a value; `false` otherwise
   */
  public hasRelatedEntry(): boolean {
    return isDefinedList<CatalogEntryRelatedEntryComponent>(this.relatedEntry) && this.relatedEntry.some((item: CatalogEntryRelatedEntryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relatedEntry` property
   */
  private initRelatedEntry(): void {
    if(!this.hasRelatedEntry()) {
      this.relatedEntry = [] as CatalogEntryRelatedEntryComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CatalogEntry';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.orderable,
      this.referencedItem,
      this.additionalIdentifier,
      this.classification,
      this.status,
      this.validityPeriod,
      this.validTo,
      this.lastUpdated,
      this.additionalCharacteristic,
      this.additionalClassification,
      this.relatedEntry,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CatalogEntry {
    const dest = new CatalogEntry();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CatalogEntry): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.type_ = this.type_?.copy();
    dest.orderable = this.orderable ? this.orderable.copy() : null;
    dest.referencedItem = this.referencedItem ? this.referencedItem.copy() : null;
    const additionalIdentifierList = copyListValues<Identifier>(this.additionalIdentifier);
    dest.additionalIdentifier = additionalIdentifierList.length === 0 ? undefined : additionalIdentifierList;
    const classificationList = copyListValues<CodeableConcept>(this.classification);
    dest.classification = classificationList.length === 0 ? undefined : classificationList;
    dest.status = this.status?.copy();
    dest.validityPeriod = this.validityPeriod?.copy();
    dest.validTo = this.validTo?.copy();
    dest.lastUpdated = this.lastUpdated?.copy();
    const additionalCharacteristicList = copyListValues<CodeableConcept>(this.additionalCharacteristic);
    dest.additionalCharacteristic = additionalCharacteristicList.length === 0 ? undefined : additionalCharacteristicList;
    const additionalClassificationList = copyListValues<CodeableConcept>(this.additionalClassification);
    dest.additionalClassification = additionalClassificationList.length === 0 ? undefined : additionalClassificationList;
    const relatedEntryList = copyListValues<CatalogEntryRelatedEntryComponent>(this.relatedEntry);
    dest.relatedEntry = relatedEntryList.length === 0 ? undefined : relatedEntryList;
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
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasOrderableElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirBoolean>(this.getOrderableElement()!, 'orderable', jsonObj);
    } else {
      missingReqdProperties.push(`CatalogEntry.orderable`);
    }

    if (this.hasReferencedItem()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getReferencedItem()!, 'referencedItem', jsonObj);
    } else {
      missingReqdProperties.push(`CatalogEntry.referencedItem`);
    }

    if (this.hasAdditionalIdentifier()) {
      setFhirComplexListJson(this.getAdditionalIdentifier(), 'additionalIdentifier', jsonObj);
    }

    if (this.hasClassification()) {
      setFhirComplexListJson(this.getClassification(), 'classification', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasValidityPeriod()) {
      setFhirComplexJson(this.getValidityPeriod(), 'validityPeriod', jsonObj);
    }

    if (this.hasValidToElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getValidToElement(), 'validTo', jsonObj);
    }

    if (this.hasLastUpdatedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getLastUpdatedElement(), 'lastUpdated', jsonObj);
    }

    if (this.hasAdditionalCharacteristic()) {
      setFhirComplexListJson(this.getAdditionalCharacteristic(), 'additionalCharacteristic', jsonObj);
    }

    if (this.hasAdditionalClassification()) {
      setFhirComplexListJson(this.getAdditionalClassification(), 'additionalClassification', jsonObj);
    }

    if (this.hasRelatedEntry()) {
      setFhirBackboneElementListJson(this.getRelatedEntry(), 'relatedEntry', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * CatalogEntryRelatedEntryComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An item that this catalog entry is related to
 * - **Definition:** Used for example, to point to a substance, or to a device used to administer a medication.
 *
 * @category Data Models: Resource
 * @see [FHIR CatalogEntry](http://hl7.org/fhir/StructureDefinition/CatalogEntry)
 */
export class CatalogEntryRelatedEntryComponent extends BackboneElement implements IBackboneElement {
  constructor(relationtype: EnumCodeType | CodeType | fhirCode | null = null, item: Reference | null = null) {
    super();

    this.relationTypeEnum = new RelationTypeEnum();

    this.relationtype = constructorCodeValueAsEnumCodeType<RelationTypeEnum>(
      relationtype,
      RelationTypeEnum,
      this.relationTypeEnum,
      'CatalogEntry.relatedEntry.relationtype',
    );

    this.item = null;
    if (isDefined<Reference>(item)) {
      this.setItem(item);
    }
  }

  /**
   * Parse the provided `CatalogEntryRelatedEntryComponent` JSON to instantiate the CatalogEntryRelatedEntryComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CatalogEntryRelatedEntryComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CatalogEntryRelatedEntryComponent
   * @returns CatalogEntryRelatedEntryComponent data model or undefined for `CatalogEntryRelatedEntryComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CatalogEntryRelatedEntryComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CatalogEntryRelatedEntryComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CatalogEntryRelatedEntryComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'relationtype';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setRelationtypeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setItem(datatype);
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
   * FHIR CodeSystem: RelationType
   *
   * @see {@link RelationTypeEnum }
   */
  private readonly relationTypeEnum: RelationTypeEnum;

  /**
   * CatalogEntry.relatedEntry.relationtype Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** triggers | is-replaced-by
   * - **Definition:** The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link RelationTypeEnum }
   */
  private relationtype: EnumCodeType | null;

  /**
   * CatalogEntry.relatedEntry.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The reference to the related item
   * - **Definition:** The reference to the related item.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CatalogEntry',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `relationtype` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RelationTypeEnum }
   */
  public getRelationtypeEnumType(): EnumCodeType | null {
    return this.relationtype;
  }

  /**
   * Assigns the provided EnumCodeType value to the `relationtype` property.
   *
   * @param enumType - the `relationtype` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RelationTypeEnum }
   */
  public setRelationtypeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `CatalogEntry.relatedEntry.relationtype is required`);
    const errMsgPrefix = `Invalid CatalogEntry.relatedEntry.relationtype`;
    assertEnumCodeType<RelationTypeEnum>(enumType, RelationTypeEnum, errMsgPrefix);
    this.relationtype = enumType;
    return this;
  }

  /**
   * @returns `true` if the `relationtype` property exists and has a value; `false` otherwise
   */
  public hasRelationtypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.relationtype) && !this.relationtype.isEmpty() && this.relationtype.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `relationtype` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RelationTypeEnum }
   */
  public getRelationtypeElement(): CodeType | null {
    if (this.relationtype === null) {
      return null;
    }
    return this.relationtype as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `relationtype` property.
   *
   * @param element - the `relationtype` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RelationTypeEnum }
   */
  public setRelationtypeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `CatalogEntry.relatedEntry.relationtype is required`);
    const optErrMsg = `Invalid CatalogEntry.relatedEntry.relationtype; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.relationtype = new EnumCodeType(element, this.relationTypeEnum);
    return this;
  }

  /**
   * @returns `true` if the `relationtype` property exists and has a value; `false` otherwise
   */
  public hasRelationtypeElement(): boolean {
    return this.hasRelationtypeEnumType();
  }

  /**
   * @returns the `relationtype` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RelationTypeEnum }
   */
  public getRelationtype(): fhirCode | null {
    if (this.relationtype === null) {
      return null;
    }
    return this.relationtype.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `relationtype` property.
   *
   * @param value - the `relationtype` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RelationTypeEnum }
   */
  public setRelationtype(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `CatalogEntry.relatedEntry.relationtype is required`);
    const optErrMsg = `Invalid CatalogEntry.relatedEntry.relationtype (${String(value)})`;
    this.relationtype = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.relationTypeEnum);
    return this;
  }

  /**
   * @returns `true` if the `relationtype` property exists and has a value; `false` otherwise
   */
  public hasRelationtype(): boolean {
    return this.hasRelationtypeEnumType();
  }

  /**
   * @returns the `item` property value as a Reference object if defined; else null
   */
  public getItem(): Reference | null {
    return this.item;
  }

  /**
   * Assigns the provided Item object value to the `item` property.
   *
   * @decorator `@ReferenceTargets('CatalogEntry.relatedEntry.item', ['CatalogEntry',])`
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CatalogEntry.relatedEntry.item', [
    'CatalogEntry',
  ])
  public setItem(value: Reference): this {
    assertIsDefined<Reference>(value, `CatalogEntry.relatedEntry.item is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.item = value;
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefined<Reference>(this.item) && !this.item.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CatalogEntry.relatedEntry';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.relationtype,
      this.item,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CatalogEntryRelatedEntryComponent {
    const dest = new CatalogEntryRelatedEntryComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CatalogEntryRelatedEntryComponent): void {
    super.copyValues(dest);
    dest.relationtype = this.relationtype ? this.relationtype.copy() : null;
    dest.item = this.item ? this.item.copy() : null;
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

    if (this.hasRelationtypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getRelationtypeElement()!, 'relationtype', jsonObj);
    } else {
      missingReqdProperties.push(`CatalogEntry.relatedEntry.relationtype`);
    }

    if (this.hasItem()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getItem()!, 'item', jsonObj);
    } else {
      missingReqdProperties.push(`CatalogEntry.relatedEntry.item`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
