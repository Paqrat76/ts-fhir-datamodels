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
 * InventoryReport Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/InventoryReport
 * StructureDefinition.name: InventoryReport
 * StructureDefinition.description: A report of inventory or stock items.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  JSON,
  PrimitiveType,
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
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
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference } from '../complex-types/complex-datatypes';
import { InventoryreportCounttypeEnum } from '../code-systems/InventoryreportCounttypeEnum';
import { InventoryreportStatusEnum } from '../code-systems/InventoryreportStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * InventoryReport Class
 *
 * @remarks
 * A report of inventory or stock items.
 *
 * **FHIR Specification**
 * - **Short:** A report of inventory or stock items
 * - **Definition:** A report of inventory or stock items.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR InventoryReport](http://hl7.org/fhir/StructureDefinition/InventoryReport)
 */
export class InventoryReport extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, countType: EnumCodeType | CodeType | fhirCode | null = null, reportedDateTime: DateTimeType | fhirDateTime | null = null) {
    super();

    this.inventoryreportStatusEnum = new InventoryreportStatusEnum();
    this.inventoryreportCounttypeEnum = new InventoryreportCounttypeEnum();

    this.status = constructorCodeValueAsEnumCodeType<InventoryreportStatusEnum>(
      status,
      InventoryreportStatusEnum,
      this.inventoryreportStatusEnum,
      'InventoryReport.status',
    );

    this.countType = constructorCodeValueAsEnumCodeType<InventoryreportCounttypeEnum>(
      countType,
      InventoryreportCounttypeEnum,
      this.inventoryreportCounttypeEnum,
      'InventoryReport.countType',
    );

    this.reportedDateTime = null;
    if (isDefined<DateTimeType | fhirDateTime>(reportedDateTime)) {
      if (reportedDateTime instanceof PrimitiveType) {
        this.setReportedDateTimeElement(reportedDateTime);
      } else {
        this.setReportedDateTime(reportedDateTime);
      }
    }
  }

  /**
   * Parse the provided `InventoryReport` JSON to instantiate the InventoryReport data model.
   *
   * @param sourceJson - JSON representing FHIR `InventoryReport`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InventoryReport
   * @returns InventoryReport data model or undefined for `InventoryReport`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): InventoryReport | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InventoryReport';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InventoryReport();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'InventoryReport');
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

    fieldName = 'countType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setCountType(null);
      } else {
        instance.setCountTypeElement(datatype);
      }
    } else {
      instance.setCountType(null);
    }

    fieldName = 'operationType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOperationType(datatype);
    }

    fieldName = 'operationTypeReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOperationTypeReason(datatype);
    }

    fieldName = 'reportedDateTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setReportedDateTime(null);
      } else {
        instance.setReportedDateTimeElement(datatype);
      }
    } else {
      instance.setReportedDateTime(null);
    }

    fieldName = 'reporter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReporter(datatype);
    }

    fieldName = 'reportingPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReportingPeriod(datatype);
    }

    fieldName = 'inventoryListing';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InventoryReportInventoryListingComponent | undefined = InventoryReportInventoryListingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addInventoryListing(component);
        }
      });
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
   * InventoryReport.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for the report
   * - **Definition:** Business identifier for the InventoryReport.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: InventoryreportStatus
   *
   * @see {@link InventoryreportStatusEnum }
   */
  private readonly inventoryreportStatusEnum: InventoryreportStatusEnum;

  /**
   * InventoryReport.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | requested | active | entered-in-error
   * - **Definition:** The status of the inventory check or notification - whether this is draft (e.g. the report is still pending some updates) or active.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link InventoryreportStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * FHIR CodeSystem: InventoryreportCounttype
   *
   * @see {@link InventoryreportCounttypeEnum }
   */
  private readonly inventoryreportCounttypeEnum: InventoryreportCounttypeEnum;

  /**
   * InventoryReport.countType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** snapshot | difference
   * - **Definition:** Whether the report is about the current inventory count (snapshot) or a differential change in inventory (change).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** Not known why this is labelled a modifier
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link InventoryreportCounttypeEnum }
   */
  private countType: EnumCodeType | null;

  /**
   * InventoryReport.operationType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** addition | subtraction
   * - **Definition:** What type of operation is being performed - addition or subtraction.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private operationType?: CodeableConcept | undefined;

  /**
   * InventoryReport.operationTypeReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The reason for this count - regular count, ad-hoc count, new arrivals, etc
   * - **Definition:** The reason for this count - regular count, ad-hoc count, new arrivals, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private operationTypeReason?: CodeableConcept | undefined;

  /**
   * InventoryReport.reportedDateTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the report has been submitted
   * - **Definition:** When the report has been submitted.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reportedDateTime: DateTimeType | null;

  /**
   * InventoryReport.reporter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who submits the report
   * - **Definition:** Who submits the report.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reporter?: Reference | undefined;

  /**
   * InventoryReport.reportingPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The period the report refers to
   * - **Definition:** The period the report refers to.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reportingPeriod?: Period | undefined;

  /**
   * InventoryReport.inventoryListing Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An inventory listing section (grouped by any of the attributes)
   * - **Definition:** An inventory listing section (grouped by any of the attributes).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private inventoryListing?: InventoryReportInventoryListingComponent[] | undefined;

  /**
   * InventoryReport.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A note associated with the InventoryReport
   * - **Definition:** A note associated with the InventoryReport.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

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
      const optErrMsg = `Invalid InventoryReport.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid InventoryReport.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link InventoryreportStatusEnum }
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
   * @see CodeSystem Enumeration: {@link InventoryreportStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid InventoryReport.status`;
      assertEnumCodeType<InventoryreportStatusEnum>(enumType, InventoryreportStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link InventoryreportStatusEnum }
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
   * @see CodeSystem Enumeration: {@link InventoryreportStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid InventoryReport.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.inventoryreportStatusEnum);
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
   * @see CodeSystem Enumeration: {@link InventoryreportStatusEnum }
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
   * @see CodeSystem Enumeration: {@link InventoryreportStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid InventoryReport.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.inventoryreportStatusEnum);
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
   * @returns the `countType` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link InventoryreportCounttypeEnum }
   */
  public getCountTypeEnumType(): EnumCodeType | null {
    return this.countType;
  }

  /**
   * Assigns the provided EnumCodeType value to the `countType` property.
   *
   * @param enumType - the `countType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link InventoryreportCounttypeEnum }
   */
  public setCountTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid InventoryReport.countType`;
      assertEnumCodeType<InventoryreportCounttypeEnum>(enumType, InventoryreportCounttypeEnum, errMsgPrefix);
      this.countType = enumType;
    } else {
      this.countType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `countType` property exists and has a value; `false` otherwise
   */
  public hasCountTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.countType) && !this.countType.isEmpty() && this.countType.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `countType` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link InventoryreportCounttypeEnum }
   */
  public getCountTypeElement(): CodeType | null {
    if (this.countType === null) {
      return null;
    }
    return this.countType as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `countType` property.
   *
   * @param element - the `countType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link InventoryreportCounttypeEnum }
   */
  public setCountTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid InventoryReport.countType; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.countType = new EnumCodeType(element, this.inventoryreportCounttypeEnum);
    } else {
      this.countType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `countType` property exists and has a value; `false` otherwise
   */
  public hasCountTypeElement(): boolean {
    return this.hasCountTypeEnumType();
  }

  /**
   * @returns the `countType` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link InventoryreportCounttypeEnum }
   */
  public getCountType(): fhirCode | null {
    if (this.countType === null) {
      return null;
    }
    return this.countType.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `countType` property.
   *
   * @param value - the `countType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link InventoryreportCounttypeEnum }
   */
  public setCountType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid InventoryReport.countType (${String(value)})`;
      this.countType = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.inventoryreportCounttypeEnum);
    } else {
      this.countType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `countType` property exists and has a value; `false` otherwise
   */
  public hasCountType(): boolean {
    return this.hasCountTypeEnumType();
  }

  /**
   * @returns the `operationType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOperationType(): CodeableConcept {
    return this.operationType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided OperationType object value to the `operationType` property.
   *
   * @param value - the `operationType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperationType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InventoryReport.operationType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.operationType = value;
    } else {
      this.operationType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `operationType` property exists and has a value; `false` otherwise
   */
  public hasOperationType(): boolean {
    return isDefined<CodeableConcept>(this.operationType) && !this.operationType.isEmpty();
  }

  /**
   * @returns the `operationTypeReason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOperationTypeReason(): CodeableConcept {
    return this.operationTypeReason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided OperationTypeReason object value to the `operationTypeReason` property.
   *
   * @param value - the `operationTypeReason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperationTypeReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InventoryReport.operationTypeReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.operationTypeReason = value;
    } else {
      this.operationTypeReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `operationTypeReason` property exists and has a value; `false` otherwise
   */
  public hasOperationTypeReason(): boolean {
    return isDefined<CodeableConcept>(this.operationTypeReason) && !this.operationTypeReason.isEmpty();
  }

  /**
   * @returns the `reportedDateTime` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getReportedDateTimeElement(): DateTimeType {
    return this.reportedDateTime ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `reportedDateTime` property.
   *
   * @param element - the `reportedDateTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReportedDateTimeElement(element: DateTimeType | undefined | null): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid InventoryReport.reportedDateTime; Provided value is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.reportedDateTime = element;
    } else {
      this.reportedDateTime = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `reportedDateTime` property exists and has a value; `false` otherwise
   */
  public hasReportedDateTimeElement(): boolean {
    return isDefined<DateTimeType>(this.reportedDateTime) && !this.reportedDateTime.isEmpty();
  }

  /**
   * @returns the `reportedDateTime` property value as a fhirDateTime if defined; else null
   */
  public getReportedDateTime(): fhirDateTime | null {
    if (this.reportedDateTime?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.reportedDateTime.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `reportedDateTime` property.
   *
   * @param value - the `reportedDateTime` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReportedDateTime(value: fhirDateTime | undefined | null): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid InventoryReport.reportedDateTime (${String(value)})`;
      this.reportedDateTime = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.reportedDateTime = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `reportedDateTime` property exists and has a value; `false` otherwise
   */
  public hasReportedDateTime(): boolean {
    return this.hasReportedDateTimeElement();
  }

  /**
   * @returns the `reporter` property value as a Reference object; else an empty Reference object
   */
  public getReporter(): Reference {
    return this.reporter ?? new Reference();
  }

  /**
   * Assigns the provided Reporter object value to the `reporter` property.
   *
   * @decorator `@ReferenceTargets('InventoryReport.reporter', ['Practitioner','Patient','RelatedPerson','Device',])`
   *
   * @param value - the `reporter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InventoryReport.reporter', [
    'Practitioner',
  
    'Patient',
  
    'RelatedPerson',
  
    'Device',
  ])
  public setReporter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reporter = value;
    } else {
      this.reporter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reporter` property exists and has a value; `false` otherwise
   */
  public hasReporter(): boolean {
    return isDefined<Reference>(this.reporter) && !this.reporter.isEmpty();
  }

  /**
   * @returns the `reportingPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getReportingPeriod(): Period {
    return this.reportingPeriod ?? new Period();
  }

  /**
   * Assigns the provided ReportingPeriod object value to the `reportingPeriod` property.
   *
   * @param value - the `reportingPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReportingPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid InventoryReport.reportingPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.reportingPeriod = value;
    } else {
      this.reportingPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reportingPeriod` property exists and has a value; `false` otherwise
   */
  public hasReportingPeriod(): boolean {
    return isDefined<Period>(this.reportingPeriod) && !this.reportingPeriod.isEmpty();
  }

  /**
   * @returns the `inventoryListing` property value as a InventoryReportInventoryListingComponent array
   */
  public getInventoryListing(): InventoryReportInventoryListingComponent[] {
    return this.inventoryListing ?? ([] as InventoryReportInventoryListingComponent[]);
  }

  /**
   * Assigns the provided InventoryReportInventoryListingComponent array value to the `inventoryListing` property.
   *
   * @param value - the `inventoryListing` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInventoryListing(value: InventoryReportInventoryListingComponent[] | undefined): this {
    if (isDefinedList<InventoryReportInventoryListingComponent>(value)) {
      const optErrMsg = `Invalid InventoryReport.inventoryListing; Provided value array has an element that is not an instance of InventoryReportInventoryListingComponent.`;
      assertFhirTypeList<InventoryReportInventoryListingComponent>(value, InventoryReportInventoryListingComponent, optErrMsg);
      this.inventoryListing = value;
    } else {
      this.inventoryListing = undefined;
    }
    return this;
  }

  /**
   * Add the provided InventoryReportInventoryListingComponent value to the `inventoryListing` array property.
   *
   * @param value - the `inventoryListing` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInventoryListing(value: InventoryReportInventoryListingComponent | undefined): this {
    if (isDefined<InventoryReportInventoryListingComponent>(value)) {
      const optErrMsg = `Invalid InventoryReport.inventoryListing; Provided element is not an instance of InventoryReportInventoryListingComponent.`;
      assertFhirType<InventoryReportInventoryListingComponent>(value, InventoryReportInventoryListingComponent, optErrMsg);
      this.initInventoryListing();
      this.inventoryListing?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `inventoryListing` property exists and has a value; `false` otherwise
   */
  public hasInventoryListing(): boolean {
    return isDefinedList<InventoryReportInventoryListingComponent>(this.inventoryListing) && this.inventoryListing.some((item: InventoryReportInventoryListingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `inventoryListing` property
   */
  private initInventoryListing(): void {
    if(!this.hasInventoryListing()) {
      this.inventoryListing = [] as InventoryReportInventoryListingComponent[];
    }
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
      const optErrMsg = `Invalid InventoryReport.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid InventoryReport.note; Provided element is not an instance of Annotation.`;
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
    return 'InventoryReport';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.countType,
      this.operationType,
      this.operationTypeReason,
      this.reportedDateTime,
      this.reporter,
      this.reportingPeriod,
      this.inventoryListing,
      this.note,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.countType, this.reportedDateTime, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InventoryReport {
    const dest = new InventoryReport();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InventoryReport): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.countType = this.countType ? this.countType.copy() : null;
    dest.operationType = this.operationType?.copy();
    dest.operationTypeReason = this.operationTypeReason?.copy();
    dest.reportedDateTime = this.reportedDateTime ? this.reportedDateTime.copy() : null;
    dest.reporter = this.reporter?.copy();
    dest.reportingPeriod = this.reportingPeriod?.copy();
    const inventoryListingList = copyListValues<InventoryReportInventoryListingComponent>(this.inventoryListing);
    dest.inventoryListing = inventoryListingList.length === 0 ? undefined : inventoryListingList;
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

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasCountTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCountTypeElement()!, 'countType', jsonObj);
    } else {
      jsonObj['countType'] = null;
    }

    if (this.hasOperationType()) {
      setFhirComplexJson(this.getOperationType(), 'operationType', jsonObj);
    }

    if (this.hasOperationTypeReason()) {
      setFhirComplexJson(this.getOperationTypeReason(), 'operationTypeReason', jsonObj);
    }

    if (this.hasReportedDateTimeElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getReportedDateTimeElement(), 'reportedDateTime', jsonObj);
    } else {
      jsonObj['reportedDateTime'] = null;
    }

    if (this.hasReporter()) {
      setFhirComplexJson(this.getReporter(), 'reporter', jsonObj);
    }

    if (this.hasReportingPeriod()) {
      setFhirComplexJson(this.getReportingPeriod(), 'reportingPeriod', jsonObj);
    }

    if (this.hasInventoryListing()) {
      setFhirBackboneElementListJson(this.getInventoryListing(), 'inventoryListing', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * InventoryReportInventoryListingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An inventory listing section (grouped by any of the attributes)
 * - **Definition:** An inventory listing section (grouped by any of the attributes).
 *
 * @category Data Models: Resource
 * @see [FHIR InventoryReport](http://hl7.org/fhir/StructureDefinition/InventoryReport)
 */
export class InventoryReportInventoryListingComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `InventoryReportInventoryListingComponent` JSON to instantiate the InventoryReportInventoryListingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InventoryReportInventoryListingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InventoryReportInventoryListingComponent
   * @returns InventoryReportInventoryListingComponent data model or undefined for `InventoryReportInventoryListingComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InventoryReportInventoryListingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InventoryReportInventoryListingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InventoryReportInventoryListingComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    fieldName = 'itemStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setItemStatus(datatype);
    }

    fieldName = 'countingDateTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setCountingDateTimeElement(datatype);
    }

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InventoryReportInventoryListingItemComponent | undefined = InventoryReportInventoryListingItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addItem(component);
        }
      });
    }

    return instance;
  }

  /**
   * InventoryReport.inventoryListing.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Location of the inventory items
   * - **Definition:** Location of the inventory items.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private location?: Reference | undefined;

  /**
   * InventoryReport.inventoryListing.itemStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of the items that are being reported
   * - **Definition:** The status of the items.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private itemStatus?: CodeableConcept | undefined;

  /**
   * InventoryReport.inventoryListing.countingDateTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date and time when the items were counted
   * - **Definition:** The date and time when the items were counted.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private countingDateTime?: DateTimeType | undefined;

  /**
   * InventoryReport.inventoryListing.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The item or items in this listing
   * - **Definition:** The item or items in this listing.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private item?: InventoryReportInventoryListingItemComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `location` property value as a Reference object; else an empty Reference object
   */
  public getLocation(): Reference {
    return this.location ?? new Reference();
  }

  /**
   * Assigns the provided Location object value to the `location` property.
   *
   * @decorator `@ReferenceTargets('InventoryReport.inventoryListing.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InventoryReport.inventoryListing.location', [
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

  /**
   * @returns the `itemStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getItemStatus(): CodeableConcept {
    return this.itemStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ItemStatus object value to the `itemStatus` property.
   *
   * @param value - the `itemStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItemStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InventoryReport.inventoryListing.itemStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.itemStatus = value;
    } else {
      this.itemStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `itemStatus` property exists and has a value; `false` otherwise
   */
  public hasItemStatus(): boolean {
    return isDefined<CodeableConcept>(this.itemStatus) && !this.itemStatus.isEmpty();
  }

  /**
   * @returns the `countingDateTime` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getCountingDateTimeElement(): DateTimeType {
    return this.countingDateTime ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `countingDateTime` property.
   *
   * @param element - the `countingDateTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCountingDateTimeElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid InventoryReport.inventoryListing.countingDateTime; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.countingDateTime = element;
    } else {
      this.countingDateTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `countingDateTime` property exists and has a value; `false` otherwise
   */
  public hasCountingDateTimeElement(): boolean {
    return isDefined<DateTimeType>(this.countingDateTime) && !this.countingDateTime.isEmpty();
  }

  /**
   * @returns the `countingDateTime` property value as a fhirDateTime if defined; else undefined
   */
  public getCountingDateTime(): fhirDateTime | undefined {
    return this.countingDateTime?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `countingDateTime` property.
   *
   * @param value - the `countingDateTime` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCountingDateTime(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid InventoryReport.inventoryListing.countingDateTime (${String(value)})`;
      this.countingDateTime = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.countingDateTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `countingDateTime` property exists and has a value; `false` otherwise
   */
  public hasCountingDateTime(): boolean {
    return this.hasCountingDateTimeElement();
  }

  /**
   * @returns the `item` property value as a InventoryReportInventoryListingItemComponent array
   */
  public getItem(): InventoryReportInventoryListingItemComponent[] {
    return this.item ?? ([] as InventoryReportInventoryListingItemComponent[]);
  }

  /**
   * Assigns the provided InventoryReportInventoryListingItemComponent array value to the `item` property.
   *
   * @param value - the `item` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: InventoryReportInventoryListingItemComponent[] | undefined): this {
    if (isDefinedList<InventoryReportInventoryListingItemComponent>(value)) {
      const optErrMsg = `Invalid InventoryReport.inventoryListing.item; Provided value array has an element that is not an instance of InventoryReportInventoryListingItemComponent.`;
      assertFhirTypeList<InventoryReportInventoryListingItemComponent>(value, InventoryReportInventoryListingItemComponent, optErrMsg);
      this.item = value;
    } else {
      this.item = undefined;
    }
    return this;
  }

  /**
   * Add the provided InventoryReportInventoryListingItemComponent value to the `item` array property.
   *
   * @param value - the `item` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addItem(value: InventoryReportInventoryListingItemComponent | undefined): this {
    if (isDefined<InventoryReportInventoryListingItemComponent>(value)) {
      const optErrMsg = `Invalid InventoryReport.inventoryListing.item; Provided element is not an instance of InventoryReportInventoryListingItemComponent.`;
      assertFhirType<InventoryReportInventoryListingItemComponent>(value, InventoryReportInventoryListingItemComponent, optErrMsg);
      this.initItem();
      this.item?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefinedList<InventoryReportInventoryListingItemComponent>(this.item) && this.item.some((item: InventoryReportInventoryListingItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `item` property
   */
  private initItem(): void {
    if(!this.hasItem()) {
      this.item = [] as InventoryReportInventoryListingItemComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InventoryReport.inventoryListing';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.location,
      this.itemStatus,
      this.countingDateTime,
      this.item,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InventoryReportInventoryListingComponent {
    const dest = new InventoryReportInventoryListingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InventoryReportInventoryListingComponent): void {
    super.copyValues(dest);
    dest.location = this.location?.copy();
    dest.itemStatus = this.itemStatus?.copy();
    dest.countingDateTime = this.countingDateTime?.copy();
    const itemList = copyListValues<InventoryReportInventoryListingItemComponent>(this.item);
    dest.item = itemList.length === 0 ? undefined : itemList;
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

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasItemStatus()) {
      setFhirComplexJson(this.getItemStatus(), 'itemStatus', jsonObj);
    }

    if (this.hasCountingDateTimeElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getCountingDateTimeElement(), 'countingDateTime', jsonObj);
    }

    if (this.hasItem()) {
      setFhirBackboneElementListJson(this.getItem(), 'item', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * InventoryReportInventoryListingItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The item or items in this listing
 * - **Definition:** The item or items in this listing.
 *
 * @category Data Models: Resource
 * @see [FHIR InventoryReport](http://hl7.org/fhir/StructureDefinition/InventoryReport)
 */
export class InventoryReportInventoryListingItemComponent extends BackboneElement implements IBackboneElement {
  constructor(quantity: Quantity | null = null, item: CodeableReference | null = null) {
    super();

    this.quantity = null;
    if (isDefined<Quantity>(quantity)) {
      this.setQuantity(quantity);
    }

    this.item = null;
    if (isDefined<CodeableReference>(item)) {
      this.setItem(item);
    }
  }

  /**
   * Parse the provided `InventoryReportInventoryListingItemComponent` JSON to instantiate the InventoryReportInventoryListingItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InventoryReportInventoryListingItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InventoryReportInventoryListingItemComponent
   * @returns InventoryReportInventoryListingItemComponent data model or undefined for `InventoryReportInventoryListingItemComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InventoryReportInventoryListingItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InventoryReportInventoryListingItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InventoryReportInventoryListingItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCategory(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setQuantity(null);
      } else {
        instance.setQuantity(datatype);
      }
    } else {
      instance.setQuantity(null);
    }

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

    return instance;
  }

  /**
   * InventoryReport.inventoryListing.item.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The inventory category or classification of the items being reported
   * - **Definition:** The inventory category or classification of the items being reported. This is meant not for defining the product, but for inventory categories e.g. \'pending recount\' or \'damaged\'.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept | undefined;

  /**
   * InventoryReport.inventoryListing.item.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The quantity of the item or items being reported
   * - **Definition:** The quantity of the item or items being reported.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private quantity: Quantity | null;

  /**
   * InventoryReport.inventoryListing.item.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The code or reference to the item type
   * - **Definition:** The code or reference to the item type.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionProduct',
   *       'http://hl7.org/fhir/StructureDefinition/InventoryItem',
   *       'http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct',
   *       'http://hl7.org/fhir/StructureDefinition/InventoryItem',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private item: CodeableReference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Category object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InventoryReport.inventoryListing.item.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefined<CodeableConcept>(this.category) && !this.category.isEmpty();
  }

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
  public setQuantity(value: Quantity | undefined | null): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid InventoryReport.inventoryListing.item.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = null;
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
      const optErrMsg = `Invalid InventoryReport.inventoryListing.item.item; Provided element is not an instance of CodeableReference.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InventoryReport.inventoryListing.item';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.quantity,
      this.item,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.quantity, this.item, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InventoryReportInventoryListingItemComponent {
    const dest = new InventoryReportInventoryListingItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InventoryReportInventoryListingItemComponent): void {
    super.copyValues(dest);
    dest.category = this.category?.copy();
    dest.quantity = this.quantity ? this.quantity.copy() : null;
    dest.item = this.item ? this.item.copy() : null;
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

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    } else {
      jsonObj['quantity'] = null;
    }

    if (this.hasItem()) {
      setFhirComplexJson(this.getItem(), 'item', jsonObj);
    } else {
      jsonObj['item'] = null;
    }

    return jsonObj;
  }
}
