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
 * MedicinalProductAuthorization Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization
 * StructureDefinition.name: MedicinalProductAuthorization
 * StructureDefinition.description: The regulatory authorization of a medicinal product.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  DateTimeType,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirDateTime,
  fhirDateTimeSchema,
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
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MedicinalProductAuthorization Class
 *
 * @remarks
 * The regulatory authorization of a medicinal product.
 *
 * **FHIR Specification**
 * - **Short:** The regulatory authorization of a medicinal product
 * - **Definition:** The regulatory authorization of a medicinal product.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductAuthorization](http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization)
 */
export class MedicinalProductAuthorization extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicinalProductAuthorization` JSON to instantiate the MedicinalProductAuthorization data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductAuthorization`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductAuthorization
   * @returns MedicinalProductAuthorization data model or undefined for `MedicinalProductAuthorization`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductAuthorization | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductAuthorization';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductAuthorization();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicinalProductAuthorization');
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

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'country';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCountry(datatype);
        }
      });
    }

    fieldName = 'jurisdiction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addJurisdiction(datatype);
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

    fieldName = 'restoreDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setRestoreDateElement(datatype);
    }

    fieldName = 'validityPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setValidityPeriod(datatype);
    }

    fieldName = 'dataExclusivityPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDataExclusivityPeriod(datatype);
    }

    fieldName = 'dateOfFirstAuthorization';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateOfFirstAuthorizationElement(datatype);
    }

    fieldName = 'internationalBirthDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setInternationalBirthDateElement(datatype);
    }

    fieldName = 'legalBasis';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLegalBasis(datatype);
    }

    fieldName = 'jurisdictionalAuthorization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductAuthorizationJurisdictionalAuthorizationComponent | undefined = MedicinalProductAuthorizationJurisdictionalAuthorizationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addJurisdictionalAuthorization(component);
        }
      });
    }

    fieldName = 'holder';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setHolder(datatype);
    }

    fieldName = 'regulator';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRegulator(datatype);
    }

    fieldName = 'procedure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MedicinalProductAuthorizationProcedureComponent | undefined = MedicinalProductAuthorizationProcedureComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProcedure(component);
    }

    return instance;
  }

  /**
   * MedicinalProductAuthorization.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for the marketing authorization, as assigned by a regulator
   * - **Definition:** Business identifier for the marketing authorization, as assigned by a regulator.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * MedicinalProductAuthorization.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The medicinal product that is being authorized
   * - **Definition:** The medicinal product that is being authorized.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProduct',
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * MedicinalProductAuthorization.country Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The country in which the marketing authorization has been granted
   * - **Definition:** The country in which the marketing authorization has been granted.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private country?: CodeableConcept[] | undefined;

  /**
   * MedicinalProductAuthorization.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Jurisdiction within a country
   * - **Definition:** Jurisdiction within a country.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * MedicinalProductAuthorization.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of the marketing authorization
   * - **Definition:** The status of the marketing authorization.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * MedicinalProductAuthorization.statusDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date at which the given status has become applicable
   * - **Definition:** The date at which the given status has become applicable.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private statusDate?: DateTimeType | undefined;

  /**
   * MedicinalProductAuthorization.restoreDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored
   * - **Definition:** The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private restoreDate?: DateTimeType | undefined;

  /**
   * MedicinalProductAuthorization.validityPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format
   * - **Definition:** The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private validityPeriod?: Period | undefined;

  /**
   * MedicinalProductAuthorization.dataExclusivityPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A period of time after authorization before generic product applicatiosn can be submitted
   * - **Definition:** A period of time after authorization before generic product applicatiosn can be submitted.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dataExclusivityPeriod?: Period | undefined;

  /**
   * MedicinalProductAuthorization.dateOfFirstAuthorization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date when the first authorization was granted by a Medicines Regulatory Agency
   * - **Definition:** The date when the first authorization was granted by a Medicines Regulatory Agency.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dateOfFirstAuthorization?: DateTimeType | undefined;

  /**
   * MedicinalProductAuthorization.internationalBirthDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date of first marketing authorization for a company\'s new medicinal product in any country in the World
   * - **Definition:** Date of first marketing authorization for a company\'s new medicinal product in any country in the World.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private internationalBirthDate?: DateTimeType | undefined;

  /**
   * MedicinalProductAuthorization.legalBasis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The legal framework against which this authorization is granted
   * - **Definition:** The legal framework against which this authorization is granted.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private legalBasis?: CodeableConcept | undefined;

  /**
   * MedicinalProductAuthorization.jurisdictionalAuthorization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Authorization in areas within a country
   * - **Definition:** Authorization in areas within a country.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdictionalAuthorization?: MedicinalProductAuthorizationJurisdictionalAuthorizationComponent[] | undefined;

  /**
   * MedicinalProductAuthorization.holder Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Marketing Authorization Holder
   * - **Definition:** Marketing Authorization Holder.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private holder?: Reference | undefined;

  /**
   * MedicinalProductAuthorization.regulator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Medicines Regulatory Agency
   * - **Definition:** Medicines Regulatory Agency.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private regulator?: Reference | undefined;

  /**
   * MedicinalProductAuthorization.procedure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The regulatory procedure for granting or amending a marketing authorization
   * - **Definition:** The regulatory procedure for granting or amending a marketing authorization.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private procedure?: MedicinalProductAuthorizationProcedureComponent | undefined;

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
      const optErrMsg = `Invalid MedicinalProductAuthorization.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicinalProductAuthorization.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductAuthorization.subject', ['MedicinalProduct','MedicinalProductPackaged',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductAuthorization.subject', [
    'MedicinalProduct',
  
    'MedicinalProductPackaged',
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
   * @returns the `country` property value as a CodeableConcept array
   */
  public getCountry(): CodeableConcept[] {
    return this.country ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `country` property.
   *
   * @param value - the `country` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCountry(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.country; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.country = value;
    } else {
      this.country = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `country` array property.
   *
   * @param value - the `country` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCountry(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.country; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCountry();
      this.country?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `country` property exists and has a value; `false` otherwise
   */
  public hasCountry(): boolean {
    return isDefinedList<CodeableConcept>(this.country) && this.country.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `country` property
   */
  private initCountry(): void {
    if(!this.hasCountry()) {
      this.country = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `jurisdiction` property value as a CodeableConcept array
   */
  public getJurisdiction(): CodeableConcept[] {
    return this.jurisdiction ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `jurisdiction` property.
   *
   * @param value - the `jurisdiction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setJurisdiction(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.jurisdiction = value;
    } else {
      this.jurisdiction = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `jurisdiction` array property.
   *
   * @param value - the `jurisdiction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addJurisdiction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.jurisdiction; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initJurisdiction();
      this.jurisdiction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `jurisdiction` property exists and has a value; `false` otherwise
   */
  public hasJurisdiction(): boolean {
    return isDefinedList<CodeableConcept>(this.jurisdiction) && this.jurisdiction.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `jurisdiction` property
   */
  private initJurisdiction(): void {
    if(!this.hasJurisdiction()) {
      this.jurisdiction = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid MedicinalProductAuthorization.status; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicinalProductAuthorization.statusDate; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid MedicinalProductAuthorization.statusDate (${String(value)})`;
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
   * @returns the `restoreDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getRestoreDateElement(): DateTimeType {
    return this.restoreDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `restoreDate` property.
   *
   * @param element - the `restoreDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRestoreDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.restoreDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.restoreDate = element;
    } else {
      this.restoreDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `restoreDate` property exists and has a value; `false` otherwise
   */
  public hasRestoreDateElement(): boolean {
    return isDefined<DateTimeType>(this.restoreDate) && !this.restoreDate.isEmpty();
  }

  /**
   * @returns the `restoreDate` property value as a fhirDateTime if defined; else undefined
   */
  public getRestoreDate(): fhirDateTime | undefined {
    return this.restoreDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `restoreDate` property.
   *
   * @param value - the `restoreDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRestoreDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.restoreDate (${String(value)})`;
      this.restoreDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.restoreDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `restoreDate` property exists and has a value; `false` otherwise
   */
  public hasRestoreDate(): boolean {
    return this.hasRestoreDateElement();
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
      const optErrMsg = `Invalid MedicinalProductAuthorization.validityPeriod; Provided element is not an instance of Period.`;
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
   * @returns the `dataExclusivityPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getDataExclusivityPeriod(): Period {
    return this.dataExclusivityPeriod ?? new Period();
  }

  /**
   * Assigns the provided DataExclusivityPeriod object value to the `dataExclusivityPeriod` property.
   *
   * @param value - the `dataExclusivityPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDataExclusivityPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.dataExclusivityPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.dataExclusivityPeriod = value;
    } else {
      this.dataExclusivityPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dataExclusivityPeriod` property exists and has a value; `false` otherwise
   */
  public hasDataExclusivityPeriod(): boolean {
    return isDefined<Period>(this.dataExclusivityPeriod) && !this.dataExclusivityPeriod.isEmpty();
  }

  /**
   * @returns the `dateOfFirstAuthorization` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateOfFirstAuthorizationElement(): DateTimeType {
    return this.dateOfFirstAuthorization ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `dateOfFirstAuthorization` property.
   *
   * @param element - the `dateOfFirstAuthorization` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateOfFirstAuthorizationElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.dateOfFirstAuthorization; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.dateOfFirstAuthorization = element;
    } else {
      this.dateOfFirstAuthorization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateOfFirstAuthorization` property exists and has a value; `false` otherwise
   */
  public hasDateOfFirstAuthorizationElement(): boolean {
    return isDefined<DateTimeType>(this.dateOfFirstAuthorization) && !this.dateOfFirstAuthorization.isEmpty();
  }

  /**
   * @returns the `dateOfFirstAuthorization` property value as a fhirDateTime if defined; else undefined
   */
  public getDateOfFirstAuthorization(): fhirDateTime | undefined {
    return this.dateOfFirstAuthorization?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `dateOfFirstAuthorization` property.
   *
   * @param value - the `dateOfFirstAuthorization` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateOfFirstAuthorization(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.dateOfFirstAuthorization (${String(value)})`;
      this.dateOfFirstAuthorization = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.dateOfFirstAuthorization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateOfFirstAuthorization` property exists and has a value; `false` otherwise
   */
  public hasDateOfFirstAuthorization(): boolean {
    return this.hasDateOfFirstAuthorizationElement();
  }

  /**
   * @returns the `internationalBirthDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getInternationalBirthDateElement(): DateTimeType {
    return this.internationalBirthDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `internationalBirthDate` property.
   *
   * @param element - the `internationalBirthDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInternationalBirthDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.internationalBirthDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.internationalBirthDate = element;
    } else {
      this.internationalBirthDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `internationalBirthDate` property exists and has a value; `false` otherwise
   */
  public hasInternationalBirthDateElement(): boolean {
    return isDefined<DateTimeType>(this.internationalBirthDate) && !this.internationalBirthDate.isEmpty();
  }

  /**
   * @returns the `internationalBirthDate` property value as a fhirDateTime if defined; else undefined
   */
  public getInternationalBirthDate(): fhirDateTime | undefined {
    return this.internationalBirthDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `internationalBirthDate` property.
   *
   * @param value - the `internationalBirthDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInternationalBirthDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.internationalBirthDate (${String(value)})`;
      this.internationalBirthDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.internationalBirthDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `internationalBirthDate` property exists and has a value; `false` otherwise
   */
  public hasInternationalBirthDate(): boolean {
    return this.hasInternationalBirthDateElement();
  }

  /**
   * @returns the `legalBasis` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getLegalBasis(): CodeableConcept {
    return this.legalBasis ?? new CodeableConcept();
  }

  /**
   * Assigns the provided LegalBasis object value to the `legalBasis` property.
   *
   * @param value - the `legalBasis` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLegalBasis(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.legalBasis; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.legalBasis = value;
    } else {
      this.legalBasis = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `legalBasis` property exists and has a value; `false` otherwise
   */
  public hasLegalBasis(): boolean {
    return isDefined<CodeableConcept>(this.legalBasis) && !this.legalBasis.isEmpty();
  }

  /**
   * @returns the `jurisdictionalAuthorization` property value as a MedicinalProductAuthorizationJurisdictionalAuthorizationComponent array
   */
  public getJurisdictionalAuthorization(): MedicinalProductAuthorizationJurisdictionalAuthorizationComponent[] {
    return this.jurisdictionalAuthorization ?? ([] as MedicinalProductAuthorizationJurisdictionalAuthorizationComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductAuthorizationJurisdictionalAuthorizationComponent array value to the `jurisdictionalAuthorization` property.
   *
   * @param value - the `jurisdictionalAuthorization` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setJurisdictionalAuthorization(value: MedicinalProductAuthorizationJurisdictionalAuthorizationComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductAuthorizationJurisdictionalAuthorizationComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.jurisdictionalAuthorization; Provided value array has an element that is not an instance of MedicinalProductAuthorizationJurisdictionalAuthorizationComponent.`;
      assertFhirTypeList<MedicinalProductAuthorizationJurisdictionalAuthorizationComponent>(value, MedicinalProductAuthorizationJurisdictionalAuthorizationComponent, optErrMsg);
      this.jurisdictionalAuthorization = value;
    } else {
      this.jurisdictionalAuthorization = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductAuthorizationJurisdictionalAuthorizationComponent value to the `jurisdictionalAuthorization` array property.
   *
   * @param value - the `jurisdictionalAuthorization` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addJurisdictionalAuthorization(value: MedicinalProductAuthorizationJurisdictionalAuthorizationComponent | undefined): this {
    if (isDefined<MedicinalProductAuthorizationJurisdictionalAuthorizationComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.jurisdictionalAuthorization; Provided element is not an instance of MedicinalProductAuthorizationJurisdictionalAuthorizationComponent.`;
      assertFhirType<MedicinalProductAuthorizationJurisdictionalAuthorizationComponent>(value, MedicinalProductAuthorizationJurisdictionalAuthorizationComponent, optErrMsg);
      this.initJurisdictionalAuthorization();
      this.jurisdictionalAuthorization?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `jurisdictionalAuthorization` property exists and has a value; `false` otherwise
   */
  public hasJurisdictionalAuthorization(): boolean {
    return isDefinedList<MedicinalProductAuthorizationJurisdictionalAuthorizationComponent>(this.jurisdictionalAuthorization) && this.jurisdictionalAuthorization.some((item: MedicinalProductAuthorizationJurisdictionalAuthorizationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `jurisdictionalAuthorization` property
   */
  private initJurisdictionalAuthorization(): void {
    if(!this.hasJurisdictionalAuthorization()) {
      this.jurisdictionalAuthorization = [] as MedicinalProductAuthorizationJurisdictionalAuthorizationComponent[];
    }
  }

  /**
   * @returns the `holder` property value as a Reference object; else an empty Reference object
   */
  public getHolder(): Reference {
    return this.holder ?? new Reference();
  }

  /**
   * Assigns the provided Holder object value to the `holder` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductAuthorization.holder', ['Organization',])`
   *
   * @param value - the `holder` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductAuthorization.holder', [
    'Organization',
  ])
  public setHolder(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.holder = value;
    } else {
      this.holder = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `holder` property exists and has a value; `false` otherwise
   */
  public hasHolder(): boolean {
    return isDefined<Reference>(this.holder) && !this.holder.isEmpty();
  }

  /**
   * @returns the `regulator` property value as a Reference object; else an empty Reference object
   */
  public getRegulator(): Reference {
    return this.regulator ?? new Reference();
  }

  /**
   * Assigns the provided Regulator object value to the `regulator` property.
   *
   * @decorator `@ReferenceTargets('MedicinalProductAuthorization.regulator', ['Organization',])`
   *
   * @param value - the `regulator` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicinalProductAuthorization.regulator', [
    'Organization',
  ])
  public setRegulator(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.regulator = value;
    } else {
      this.regulator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `regulator` property exists and has a value; `false` otherwise
   */
  public hasRegulator(): boolean {
    return isDefined<Reference>(this.regulator) && !this.regulator.isEmpty();
  }

  /**
   * @returns the `procedure` property value as a MedicinalProductAuthorizationProcedureComponent object if defined; else an empty MedicinalProductAuthorizationProcedureComponent object
   */
  public getProcedure(): MedicinalProductAuthorizationProcedureComponent {
    return this.procedure ?? new MedicinalProductAuthorizationProcedureComponent();
  }

  /**
   * Assigns the provided Procedure object value to the `procedure` property.
   *
   * @param value - the `procedure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcedure(value: MedicinalProductAuthorizationProcedureComponent | undefined): this {
    if (isDefined<MedicinalProductAuthorizationProcedureComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.procedure; Provided element is not an instance of MedicinalProductAuthorizationProcedureComponent.`;
      assertFhirType<MedicinalProductAuthorizationProcedureComponent>(value, MedicinalProductAuthorizationProcedureComponent, optErrMsg);
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
    return isDefined<MedicinalProductAuthorizationProcedureComponent>(this.procedure) && !this.procedure.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductAuthorization';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.subject,
      this.country,
      this.jurisdiction,
      this.status,
      this.statusDate,
      this.restoreDate,
      this.validityPeriod,
      this.dataExclusivityPeriod,
      this.dateOfFirstAuthorization,
      this.internationalBirthDate,
      this.legalBasis,
      this.jurisdictionalAuthorization,
      this.holder,
      this.regulator,
      this.procedure,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductAuthorization {
    const dest = new MedicinalProductAuthorization();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductAuthorization): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.subject = this.subject?.copy();
    const countryList = copyListValues<CodeableConcept>(this.country);
    dest.country = countryList.length === 0 ? undefined : countryList;
    const jurisdictionList = copyListValues<CodeableConcept>(this.jurisdiction);
    dest.jurisdiction = jurisdictionList.length === 0 ? undefined : jurisdictionList;
    dest.status = this.status?.copy();
    dest.statusDate = this.statusDate?.copy();
    dest.restoreDate = this.restoreDate?.copy();
    dest.validityPeriod = this.validityPeriod?.copy();
    dest.dataExclusivityPeriod = this.dataExclusivityPeriod?.copy();
    dest.dateOfFirstAuthorization = this.dateOfFirstAuthorization?.copy();
    dest.internationalBirthDate = this.internationalBirthDate?.copy();
    dest.legalBasis = this.legalBasis?.copy();
    const jurisdictionalAuthorizationList = copyListValues<MedicinalProductAuthorizationJurisdictionalAuthorizationComponent>(this.jurisdictionalAuthorization);
    dest.jurisdictionalAuthorization = jurisdictionalAuthorizationList.length === 0 ? undefined : jurisdictionalAuthorizationList;
    dest.holder = this.holder?.copy();
    dest.regulator = this.regulator?.copy();
    dest.procedure = this.procedure?.copy();
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

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasCountry()) {
      setFhirComplexListJson(this.getCountry(), 'country', jsonObj);
    }

    if (this.hasJurisdiction()) {
      setFhirComplexListJson(this.getJurisdiction(), 'jurisdiction', jsonObj);
    }

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    if (this.hasStatusDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getStatusDateElement(), 'statusDate', jsonObj);
    }

    if (this.hasRestoreDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getRestoreDateElement(), 'restoreDate', jsonObj);
    }

    if (this.hasValidityPeriod()) {
      setFhirComplexJson(this.getValidityPeriod(), 'validityPeriod', jsonObj);
    }

    if (this.hasDataExclusivityPeriod()) {
      setFhirComplexJson(this.getDataExclusivityPeriod(), 'dataExclusivityPeriod', jsonObj);
    }

    if (this.hasDateOfFirstAuthorizationElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateOfFirstAuthorizationElement(), 'dateOfFirstAuthorization', jsonObj);
    }

    if (this.hasInternationalBirthDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getInternationalBirthDateElement(), 'internationalBirthDate', jsonObj);
    }

    if (this.hasLegalBasis()) {
      setFhirComplexJson(this.getLegalBasis(), 'legalBasis', jsonObj);
    }

    if (this.hasJurisdictionalAuthorization()) {
      setFhirBackboneElementListJson(this.getJurisdictionalAuthorization(), 'jurisdictionalAuthorization', jsonObj);
    }

    if (this.hasHolder()) {
      setFhirComplexJson(this.getHolder(), 'holder', jsonObj);
    }

    if (this.hasRegulator()) {
      setFhirComplexJson(this.getRegulator(), 'regulator', jsonObj);
    }

    if (this.hasProcedure()) {
      setFhirBackboneElementJson(this.getProcedure(), 'procedure', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MedicinalProductAuthorizationJurisdictionalAuthorizationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Authorization in areas within a country
 * - **Definition:** Authorization in areas within a country.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductAuthorization](http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization)
 */
export class MedicinalProductAuthorizationJurisdictionalAuthorizationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicinalProductAuthorizationJurisdictionalAuthorizationComponent` JSON to instantiate the MedicinalProductAuthorizationJurisdictionalAuthorizationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductAuthorizationJurisdictionalAuthorizationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductAuthorizationJurisdictionalAuthorizationComponent
   * @returns MedicinalProductAuthorizationJurisdictionalAuthorizationComponent data model or undefined for `MedicinalProductAuthorizationJurisdictionalAuthorizationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductAuthorizationJurisdictionalAuthorizationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductAuthorizationJurisdictionalAuthorizationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductAuthorizationJurisdictionalAuthorizationComponent();

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

    fieldName = 'country';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCountry(datatype);
    }

    fieldName = 'jurisdiction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addJurisdiction(datatype);
        }
      });
    }

    fieldName = 'legalStatusOfSupply';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLegalStatusOfSupply(datatype);
    }

    fieldName = 'validityPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setValidityPeriod(datatype);
    }

    return instance;
  }

  /**
   * MedicinalProductAuthorization.jurisdictionalAuthorization.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The assigned number for the marketing authorization
   * - **Definition:** The assigned number for the marketing authorization.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * MedicinalProductAuthorization.jurisdictionalAuthorization.country Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Country of authorization
   * - **Definition:** Country of authorization.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private country?: CodeableConcept | undefined;

  /**
   * MedicinalProductAuthorization.jurisdictionalAuthorization.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Jurisdiction within a country
   * - **Definition:** Jurisdiction within a country.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * MedicinalProductAuthorization.jurisdictionalAuthorization.legalStatusOfSupply Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The legal status of supply in a jurisdiction or region
   * - **Definition:** The legal status of supply in a jurisdiction or region.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private legalStatusOfSupply?: CodeableConcept | undefined;

  /**
   * MedicinalProductAuthorization.jurisdictionalAuthorization.validityPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The start and expected end date of the authorization
   * - **Definition:** The start and expected end date of the authorization.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private validityPeriod?: Period | undefined;

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
      const optErrMsg = `Invalid MedicinalProductAuthorization.jurisdictionalAuthorization.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicinalProductAuthorization.jurisdictionalAuthorization.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `country` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCountry(): CodeableConcept {
    return this.country ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Country object value to the `country` property.
   *
   * @param value - the `country` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCountry(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.jurisdictionalAuthorization.country; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.country = value;
    } else {
      this.country = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `country` property exists and has a value; `false` otherwise
   */
  public hasCountry(): boolean {
    return isDefined<CodeableConcept>(this.country) && !this.country.isEmpty();
  }

  /**
   * @returns the `jurisdiction` property value as a CodeableConcept array
   */
  public getJurisdiction(): CodeableConcept[] {
    return this.jurisdiction ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `jurisdiction` property.
   *
   * @param value - the `jurisdiction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setJurisdiction(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.jurisdictionalAuthorization.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.jurisdiction = value;
    } else {
      this.jurisdiction = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `jurisdiction` array property.
   *
   * @param value - the `jurisdiction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addJurisdiction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.jurisdictionalAuthorization.jurisdiction; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initJurisdiction();
      this.jurisdiction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `jurisdiction` property exists and has a value; `false` otherwise
   */
  public hasJurisdiction(): boolean {
    return isDefinedList<CodeableConcept>(this.jurisdiction) && this.jurisdiction.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `jurisdiction` property
   */
  private initJurisdiction(): void {
    if(!this.hasJurisdiction()) {
      this.jurisdiction = [] as CodeableConcept[];
    }
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
      const optErrMsg = `Invalid MedicinalProductAuthorization.jurisdictionalAuthorization.legalStatusOfSupply; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicinalProductAuthorization.jurisdictionalAuthorization.validityPeriod; Provided element is not an instance of Period.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductAuthorization.jurisdictionalAuthorization';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.country,
      this.jurisdiction,
      this.legalStatusOfSupply,
      this.validityPeriod,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicinalProductAuthorizationJurisdictionalAuthorizationComponent {
    const dest = new MedicinalProductAuthorizationJurisdictionalAuthorizationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductAuthorizationJurisdictionalAuthorizationComponent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.country = this.country?.copy();
    const jurisdictionList = copyListValues<CodeableConcept>(this.jurisdiction);
    dest.jurisdiction = jurisdictionList.length === 0 ? undefined : jurisdictionList;
    dest.legalStatusOfSupply = this.legalStatusOfSupply?.copy();
    dest.validityPeriod = this.validityPeriod?.copy();
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

    if (this.hasCountry()) {
      setFhirComplexJson(this.getCountry(), 'country', jsonObj);
    }

    if (this.hasJurisdiction()) {
      setFhirComplexListJson(this.getJurisdiction(), 'jurisdiction', jsonObj);
    }

    if (this.hasLegalStatusOfSupply()) {
      setFhirComplexJson(this.getLegalStatusOfSupply(), 'legalStatusOfSupply', jsonObj);
    }

    if (this.hasValidityPeriod()) {
      setFhirComplexJson(this.getValidityPeriod(), 'validityPeriod', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicinalProductAuthorizationProcedureComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The regulatory procedure for granting or amending a marketing authorization
 * - **Definition:** The regulatory procedure for granting or amending a marketing authorization.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicinalProductAuthorization](http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization)
 */
export class MedicinalProductAuthorizationProcedureComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `MedicinalProductAuthorizationProcedureComponent` JSON to instantiate the MedicinalProductAuthorizationProcedureComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicinalProductAuthorizationProcedureComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicinalProductAuthorizationProcedureComponent
   * @returns MedicinalProductAuthorizationProcedureComponent data model or undefined for `MedicinalProductAuthorizationProcedureComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicinalProductAuthorizationProcedureComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicinalProductAuthorizationProcedureComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicinalProductAuthorizationProcedureComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = MedicinalProductAuthorizationProcedureComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicinalProductAuthorizationProcedureComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

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

    fieldName = 'date[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const date: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDate(date);

    fieldName = 'application';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicinalProductAuthorizationProcedureComponent | undefined = MedicinalProductAuthorizationProcedureComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addApplication(component);
        }
      });
    }

    return instance;
  }

  /**
   * MedicinalProductAuthorization.procedure.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier for this procedure
   * - **Definition:** Identifier for this procedure.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * MedicinalProductAuthorization.procedure.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of procedure
   * - **Definition:** Type of procedure.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * MedicinalProductAuthorization.procedure.date[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicinalProductAuthorization.procedure.date[x]', ['Period','dateTime',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date of procedure
   * - **Definition:** Date of procedure.
   * - **FHIR Types:**
   *     'Period',
   *     'dateTime',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MedicinalProductAuthorization.procedure.date[x]',[
    'Period',
    'dateTime',
  ])
  private date?: IDataType | undefined;

  /**
   * MedicinalProductAuthorization.procedure.application Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applcations submitted to obtain a marketing authorization
   * - **Definition:** Applcations submitted to obtain a marketing authorization.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private application?: MedicinalProductAuthorizationProcedureComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `identifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getIdentifier(): Identifier {
    return this.identifier ?? new Identifier();
  }

  /**
   * Assigns the provided Identifier object value to the `identifier` property.
   *
   * @param value - the `identifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.procedure.identifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.identifier = value;
    } else {
      this.identifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identifier` property exists and has a value; `false` otherwise
   */
  public hasIdentifier(): boolean {
    return isDefined<Identifier>(this.identifier) && !this.identifier.isEmpty();
  }

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
      const optErrMsg = `Invalid MedicinalProductAuthorization.procedure.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `date` property value as a DataType object if defined; else undefined
   */
  public getDate(): IDataType | undefined {
    return this.date;
  }

  /**
   * Assigns the provided DataType object value to the `date` property.
   *
   * @decorator `@ChoiceDataTypes('MedicinalProductAuthorization.procedure.date[x]')`
   *
   * @param value - the `date` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicinalProductAuthorization.procedure.date[x]')
  public setDate(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.date = value;
    } else {
      this.date = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDate(): boolean {
    return isDefined<IDataType>(this.date) && !this.date.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `date` property value as a Period object if defined; else undefined
   */
  public getDatePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.date)) {
      return undefined;
    }
    if (!(this.date instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicinalProductAuthorization.procedure.date[x]: Expected Period but encountered ${this.date.fhirType()}`,
      );
    }
    return this.date;
  }

  /**
   * @returns `true` if the `date` property exists as a Period and has a value; `false` otherwise
   */
  public hasDatePeriod(): boolean {
    return this.hasDate() && this.date instanceof Period;
  }

  /**
   * @returns the `date` property value as a DateTimeType object if defined; else undefined
   */
  public getDateDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.date)) {
      return undefined;
    }
    if (!(this.date instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicinalProductAuthorization.procedure.date[x]: Expected DateTimeType but encountered ${this.date.fhirType()}`,
      );
    }
    return this.date;
  }

  /**
   * @returns `true` if the `date` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasDateDateTimeType(): boolean {
    return this.hasDate() && this.date instanceof DateTimeType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `application` property value as a MedicinalProductAuthorizationProcedureComponent array
   */
  public getApplication(): MedicinalProductAuthorizationProcedureComponent[] {
    return this.application ?? ([] as MedicinalProductAuthorizationProcedureComponent[]);
  }

  /**
   * Assigns the provided MedicinalProductAuthorizationProcedureComponent array value to the `application` property.
   *
   * @param value - the `application` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setApplication(value: MedicinalProductAuthorizationProcedureComponent[] | undefined): this {
    if (isDefinedList<MedicinalProductAuthorizationProcedureComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.procedure.application; Provided value array has an element that is not an instance of MedicinalProductAuthorizationProcedureComponent.`;
      assertFhirTypeList<MedicinalProductAuthorizationProcedureComponent>(value, MedicinalProductAuthorizationProcedureComponent, optErrMsg);
      this.application = value;
    } else {
      this.application = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicinalProductAuthorizationProcedureComponent value to the `application` array property.
   *
   * @param value - the `application` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addApplication(value: MedicinalProductAuthorizationProcedureComponent | undefined): this {
    if (isDefined<MedicinalProductAuthorizationProcedureComponent>(value)) {
      const optErrMsg = `Invalid MedicinalProductAuthorization.procedure.application; Provided element is not an instance of MedicinalProductAuthorizationProcedureComponent.`;
      assertFhirType<MedicinalProductAuthorizationProcedureComponent>(value, MedicinalProductAuthorizationProcedureComponent, optErrMsg);
      this.initApplication();
      this.application?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `application` property exists and has a value; `false` otherwise
   */
  public hasApplication(): boolean {
    return isDefinedList<MedicinalProductAuthorizationProcedureComponent>(this.application) && this.application.some((item: MedicinalProductAuthorizationProcedureComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `application` property
   */
  private initApplication(): void {
    if(!this.hasApplication()) {
      this.application = [] as MedicinalProductAuthorizationProcedureComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicinalProductAuthorization.procedure';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.date,
      this.application,
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
  public override copy(): MedicinalProductAuthorizationProcedureComponent {
    const dest = new MedicinalProductAuthorizationProcedureComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicinalProductAuthorizationProcedureComponent): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.date = this.date?.copy() as IDataType;
    const applicationList = copyListValues<MedicinalProductAuthorizationProcedureComponent>(this.application);
    dest.application = applicationList.length === 0 ? undefined : applicationList;
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
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasDate()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDate()!, 'date', jsonObj);
    }

    if (this.hasApplication()) {
      setFhirBackboneElementListJson(this.getApplication(), 'application', jsonObj);
    }

    return jsonObj;
  }
}
