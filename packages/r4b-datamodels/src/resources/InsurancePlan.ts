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
 * InsurancePlan Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/InsurancePlan
 * StructureDefinition.name: InsurancePlan
 * StructureDefinition.description: Details of a Health Insurance product/plan provided by an organization.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  JSON,
  PositiveIntType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirPositiveInt,
  fhirPositiveIntSchema,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
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
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { Address, CodeableConcept, ContactPoint, HumanName, Identifier, Money, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

/**
 * InsurancePlan Class
 *
 * @remarks
 * Details of a Health Insurance product/plan provided by an organization.
 *
 * **FHIR Specification**
 * - **Short:** Details of a Health Insurance product/plan provided by an organization
 * - **Definition:** Details of a Health Insurance product/plan provided by an organization.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR InsurancePlan](http://hl7.org/fhir/StructureDefinition/InsurancePlan)
 */
export class InsurancePlan extends DomainResource implements IDomainResource {
  constructor() {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
  }

  /**
   * Parse the provided `InsurancePlan` JSON to instantiate the InsurancePlan data model.
   *
   * @param sourceJson - JSON representing FHIR `InsurancePlan`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InsurancePlan
   * @returns InsurancePlan data model or undefined for `InsurancePlan`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): InsurancePlan | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InsurancePlan';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InsurancePlan();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'InsurancePlan');
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
      instance.setStatusElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addType(datatype);
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

    fieldName = 'alias';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addAliasElement(datatype);
        }
      });
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'ownedBy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOwnedBy(datatype);
    }

    fieldName = 'administeredBy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAdministeredBy(datatype);
    }

    fieldName = 'coverageArea';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCoverageArea(datatype);
        }
      });
  }

    fieldName = 'contact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InsurancePlanContactComponent | undefined = InsurancePlanContactComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addContact(component);
        }
      });
    }

    fieldName = 'endpoint';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEndpoint(datatype);
        }
      });
  }

    fieldName = 'network';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNetwork(datatype);
        }
      });
  }

    fieldName = 'coverage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InsurancePlanCoverageComponent | undefined = InsurancePlanCoverageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCoverage(component);
        }
      });
    }

    fieldName = 'plan';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InsurancePlanPlanComponent | undefined = InsurancePlanPlanComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPlan(component);
        }
      });
    }

    return instance;
  }

  /**
   * InsurancePlan.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for Product
   * - **Definition:** Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
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
   * InsurancePlan.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The current state of the health insurance product.
   * - **Requirements:** Need a flag to indicate a record is no longer to be used and should generally be hidden for the user in the UI.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains codes which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * InsurancePlan.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of product
   * - **Definition:** The kind of health insurance product.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * InsurancePlan.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Official name
   * - **Definition:** Official name of the health insurance product as designated by the owner.
   * - **Comment:** If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * InsurancePlan.alias Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Alternate names
   * - **Definition:** A list of alternate names that the product is known as, or was known as in the past.
   * - **Comment:** There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
   * - **Requirements:** Over time products/plans go through many changes and can be known by different names. For searching knowing previous names that the product/plan was known by can be very useful.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private alias?: StringType[] | undefined;

  /**
   * InsurancePlan.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the product is available
   * - **Definition:** The period of time that the health insurance product is available.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

  /**
   * InsurancePlan.ownedBy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Plan issuer
   * - **Definition:** The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as \'payers\'.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private ownedBy?: Reference | undefined;

  /**
   * InsurancePlan.administeredBy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product administrator
   * - **Definition:** An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private administeredBy?: Reference | undefined;

  /**
   * InsurancePlan.coverageArea Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where product applies
   * - **Definition:** The geographic region in which a health insurance product\'s benefits apply.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private coverageArea?: Reference[] | undefined;

  /**
   * InsurancePlan.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact for the product
   * - **Definition:** The contact for the health insurance product for a certain purpose.
   * - **Comment:** Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
   * - **Requirements:** Need to keep track of assigned contact points within bigger organization.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contact?: InsurancePlanContactComponent[] | undefined;

  /**
   * InsurancePlan.endpoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Technical endpoint
   * - **Definition:** The technical endpoints providing access to services operated for the health insurance product.
   * - **Requirements:** Organizations have multiple systems that provide various services and need to be able to define the technical connection details for how to connect to them, and for what purpose.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Endpoint',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private endpoint?: Reference[] | undefined;

  /**
   * InsurancePlan.network Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What networks are Included
   * - **Definition:** Reference to the network included in the health insurance product.
   * - **Comment:** Networks are represented as a hierarchy of organization resources.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private network?: Reference[] | undefined;

  /**
   * InsurancePlan.coverage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coverage details
   * - **Definition:** Details about the coverage offered by the insurance product.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private coverage?: InsurancePlanCoverageComponent[] | undefined;

  /**
   * InsurancePlan.plan Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Plan details
   * - **Definition:** Details about an insurance plan.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private plan?: InsurancePlanPlanComponent[] | undefined;

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
      const optErrMsg = `Invalid InsurancePlan.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid InsurancePlan.identifier; Provided element is not an instance of Identifier.`;
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
      const errMsgPrefix = 'Invalid InsurancePlan.status';
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
      const optErrMsg = `Invalid InsurancePlan.status; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid InsurancePlan.status; Provided value is not an instance of fhirCode.`;
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
   * @returns the `type_` property value as a CodeableConcept array
   */
  public getType(): CodeableConcept[] {
    return this.type_ ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `type_` property.
   *
   * @param value - the `type_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InsurancePlan.type; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `type_` array property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InsurancePlan.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initType();
      this.type_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefinedList<CodeableConcept>(this.type_) && this.type_.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `type_` property
   */
  private initType(): void {
    if(!this.hasType()) {
      this.type_ = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid InsurancePlan.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid InsurancePlan.name (${String(value)})`;
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
   * @returns the `alias` property value as a StringType array
   */
  public getAliasElement(): StringType[] {
    return this.alias ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `alias` property.
   *
   * @param element - the `alias` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAliasElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid InsurancePlan.alias; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.alias = element;
    } else {
      this.alias = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `alias` array property.
   *
   * @param element - the `alias` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addAliasElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid InsurancePlan.alias; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initAlias();
      this.alias?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `alias` property exists and has a value; `false` otherwise
   */
  public hasAliasElement(): boolean {
    return isDefinedList<StringType>(this.alias) && this.alias.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `alias` property value as a fhirString array
   */
  public getAlias(): fhirString[] {
    this.initAlias();
    const aliasValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.alias!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        aliasValues.push(value);
      }
    }
    return aliasValues;
  }

  /**
   * Assigns the provided primitive value array to the `alias` property.
   *
   * @param value - the `alias` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAlias(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const aliasElements = [] as StringType[];
      for (const aliasValue of value) {
        const optErrMsg = `Invalid InsurancePlan.alias array item (${String(aliasValue)})`;
        const element = new StringType(parseFhirPrimitiveData(aliasValue, fhirStringSchema, optErrMsg));
        aliasElements.push(element);
      }
      this.alias = aliasElements;
    } else {
      this.alias = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `alias` array property.
   *
   * @param value - the `alias` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addAlias(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid InsurancePlan.alias array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initAlias();
      this.addAliasElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `alias` property exists and has a value; `false` otherwise
   */
  public hasAlias(): boolean {
    return this.hasAliasElement();
  }

  /**
   * Initialize the `alias` property
   */
  private initAlias(): void {
    if (!this.hasAlias()) {
      this.alias = [] as StringType[];
    }
  }

  /**
   * @returns the `period` property value as a Period object if defined; else an empty Period object
   */
  public getPeriod(): Period {
    return this.period ?? new Period();
  }

  /**
   * Assigns the provided Period object value to the `period` property.
   *
   * @param value - the `period` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid InsurancePlan.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
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
    return isDefined<Period>(this.period) && !this.period.isEmpty();
  }

  /**
   * @returns the `ownedBy` property value as a Reference object; else an empty Reference object
   */
  public getOwnedBy(): Reference {
    return this.ownedBy ?? new Reference();
  }

  /**
   * Assigns the provided OwnedBy object value to the `ownedBy` property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.ownedBy', ['Organization',])`
   *
   * @param value - the `ownedBy` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.ownedBy', [
    'Organization',
  ])
  public setOwnedBy(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.ownedBy = value;
    } else {
      this.ownedBy = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ownedBy` property exists and has a value; `false` otherwise
   */
  public hasOwnedBy(): boolean {
    return isDefined<Reference>(this.ownedBy) && !this.ownedBy.isEmpty();
  }

  /**
   * @returns the `administeredBy` property value as a Reference object; else an empty Reference object
   */
  public getAdministeredBy(): Reference {
    return this.administeredBy ?? new Reference();
  }

  /**
   * Assigns the provided AdministeredBy object value to the `administeredBy` property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.administeredBy', ['Organization',])`
   *
   * @param value - the `administeredBy` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.administeredBy', [
    'Organization',
  ])
  public setAdministeredBy(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.administeredBy = value;
    } else {
      this.administeredBy = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `administeredBy` property exists and has a value; `false` otherwise
   */
  public hasAdministeredBy(): boolean {
    return isDefined<Reference>(this.administeredBy) && !this.administeredBy.isEmpty();
  }

  /**
   * @returns the `coverageArea` property value as a Reference array
   */
  public getCoverageArea(): Reference[] {
    return this.coverageArea ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `coverageArea` property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.coverageArea', ['Location',])`
   *
   * @param value - the `coverageArea` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.coverageArea', [
    'Location',
  ])
  public setCoverageArea(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.coverageArea = value;
    } else {
      this.coverageArea = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `coverageArea` array property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.coverageArea', ['Location',])`
   *
   * @param value - the `coverageArea` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.coverageArea', [
    'Location',
  ])
  public addCoverageArea(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initCoverageArea();
      this.coverageArea?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `coverageArea` property exists and has a value; `false` otherwise
   */
  public hasCoverageArea(): boolean {
    return isDefinedList<Reference>(this.coverageArea) && this.coverageArea.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `coverageArea` property
   */
  private initCoverageArea(): void {
    if (!this.hasCoverageArea()) {
      this.coverageArea = [] as Reference[];
    }
  }

  /**
   * @returns the `contact` property value as a InsurancePlanContactComponent array
   */
  public getContact(): InsurancePlanContactComponent[] {
    return this.contact ?? ([] as InsurancePlanContactComponent[]);
  }

  /**
   * Assigns the provided InsurancePlanContactComponent array value to the `contact` property.
   *
   * @param value - the `contact` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContact(value: InsurancePlanContactComponent[] | undefined): this {
    if (isDefinedList<InsurancePlanContactComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.contact; Provided value array has an element that is not an instance of InsurancePlanContactComponent.`;
      assertFhirTypeList<InsurancePlanContactComponent>(value, InsurancePlanContactComponent, optErrMsg);
      this.contact = value;
    } else {
      this.contact = undefined;
    }
    return this;
  }

  /**
   * Add the provided InsurancePlanContactComponent value to the `contact` array property.
   *
   * @param value - the `contact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContact(value: InsurancePlanContactComponent | undefined): this {
    if (isDefined<InsurancePlanContactComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.contact; Provided element is not an instance of InsurancePlanContactComponent.`;
      assertFhirType<InsurancePlanContactComponent>(value, InsurancePlanContactComponent, optErrMsg);
      this.initContact();
      this.contact?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contact` property exists and has a value; `false` otherwise
   */
  public hasContact(): boolean {
    return isDefinedList<InsurancePlanContactComponent>(this.contact) && this.contact.some((item: InsurancePlanContactComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `contact` property
   */
  private initContact(): void {
    if(!this.hasContact()) {
      this.contact = [] as InsurancePlanContactComponent[];
    }
  }

  /**
   * @returns the `endpoint` property value as a Reference array
   */
  public getEndpoint(): Reference[] {
    return this.endpoint ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `endpoint` property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.endpoint', [
    'Endpoint',
  ])
  public setEndpoint(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.endpoint = value;
    } else {
      this.endpoint = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `endpoint` array property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.endpoint', [
    'Endpoint',
  ])
  public addEndpoint(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEndpoint();
      this.endpoint?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `endpoint` property exists and has a value; `false` otherwise
   */
  public hasEndpoint(): boolean {
    return isDefinedList<Reference>(this.endpoint) && this.endpoint.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `endpoint` property
   */
  private initEndpoint(): void {
    if (!this.hasEndpoint()) {
      this.endpoint = [] as Reference[];
    }
  }

  /**
   * @returns the `network` property value as a Reference array
   */
  public getNetwork(): Reference[] {
    return this.network ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `network` property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.network', ['Organization',])`
   *
   * @param value - the `network` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.network', [
    'Organization',
  ])
  public setNetwork(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.network = value;
    } else {
      this.network = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `network` array property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.network', ['Organization',])`
   *
   * @param value - the `network` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.network', [
    'Organization',
  ])
  public addNetwork(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initNetwork();
      this.network?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `network` property exists and has a value; `false` otherwise
   */
  public hasNetwork(): boolean {
    return isDefinedList<Reference>(this.network) && this.network.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `network` property
   */
  private initNetwork(): void {
    if (!this.hasNetwork()) {
      this.network = [] as Reference[];
    }
  }

  /**
   * @returns the `coverage` property value as a InsurancePlanCoverageComponent array
   */
  public getCoverage(): InsurancePlanCoverageComponent[] {
    return this.coverage ?? ([] as InsurancePlanCoverageComponent[]);
  }

  /**
   * Assigns the provided InsurancePlanCoverageComponent array value to the `coverage` property.
   *
   * @param value - the `coverage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCoverage(value: InsurancePlanCoverageComponent[] | undefined): this {
    if (isDefinedList<InsurancePlanCoverageComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.coverage; Provided value array has an element that is not an instance of InsurancePlanCoverageComponent.`;
      assertFhirTypeList<InsurancePlanCoverageComponent>(value, InsurancePlanCoverageComponent, optErrMsg);
      this.coverage = value;
    } else {
      this.coverage = undefined;
    }
    return this;
  }

  /**
   * Add the provided InsurancePlanCoverageComponent value to the `coverage` array property.
   *
   * @param value - the `coverage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCoverage(value: InsurancePlanCoverageComponent | undefined): this {
    if (isDefined<InsurancePlanCoverageComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.coverage; Provided element is not an instance of InsurancePlanCoverageComponent.`;
      assertFhirType<InsurancePlanCoverageComponent>(value, InsurancePlanCoverageComponent, optErrMsg);
      this.initCoverage();
      this.coverage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `coverage` property exists and has a value; `false` otherwise
   */
  public hasCoverage(): boolean {
    return isDefinedList<InsurancePlanCoverageComponent>(this.coverage) && this.coverage.some((item: InsurancePlanCoverageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `coverage` property
   */
  private initCoverage(): void {
    if(!this.hasCoverage()) {
      this.coverage = [] as InsurancePlanCoverageComponent[];
    }
  }

  /**
   * @returns the `plan` property value as a InsurancePlanPlanComponent array
   */
  public getPlan(): InsurancePlanPlanComponent[] {
    return this.plan ?? ([] as InsurancePlanPlanComponent[]);
  }

  /**
   * Assigns the provided InsurancePlanPlanComponent array value to the `plan` property.
   *
   * @param value - the `plan` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPlan(value: InsurancePlanPlanComponent[] | undefined): this {
    if (isDefinedList<InsurancePlanPlanComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan; Provided value array has an element that is not an instance of InsurancePlanPlanComponent.`;
      assertFhirTypeList<InsurancePlanPlanComponent>(value, InsurancePlanPlanComponent, optErrMsg);
      this.plan = value;
    } else {
      this.plan = undefined;
    }
    return this;
  }

  /**
   * Add the provided InsurancePlanPlanComponent value to the `plan` array property.
   *
   * @param value - the `plan` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPlan(value: InsurancePlanPlanComponent | undefined): this {
    if (isDefined<InsurancePlanPlanComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan; Provided element is not an instance of InsurancePlanPlanComponent.`;
      assertFhirType<InsurancePlanPlanComponent>(value, InsurancePlanPlanComponent, optErrMsg);
      this.initPlan();
      this.plan?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `plan` property exists and has a value; `false` otherwise
   */
  public hasPlan(): boolean {
    return isDefinedList<InsurancePlanPlanComponent>(this.plan) && this.plan.some((item: InsurancePlanPlanComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `plan` property
   */
  private initPlan(): void {
    if(!this.hasPlan()) {
      this.plan = [] as InsurancePlanPlanComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InsurancePlan';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.type_,
      this.name,
      this.alias,
      this.period,
      this.ownedBy,
      this.administeredBy,
      this.coverageArea,
      this.contact,
      this.endpoint,
      this.network,
      this.coverage,
      this.plan,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InsurancePlan {
    const dest = new InsurancePlan();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InsurancePlan): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status?.copy();
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    dest.name = this.name?.copy();
    const aliasList = copyListValues<StringType>(this.alias);
    dest.alias = aliasList.length === 0 ? undefined : aliasList;
    dest.period = this.period?.copy();
    dest.ownedBy = this.ownedBy?.copy();
    dest.administeredBy = this.administeredBy?.copy();
    const coverageAreaList = copyListValues<Reference>(this.coverageArea);
    dest.coverageArea = coverageAreaList.length === 0 ? undefined : coverageAreaList;
    const contactList = copyListValues<InsurancePlanContactComponent>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    const endpointList = copyListValues<Reference>(this.endpoint);
    dest.endpoint = endpointList.length === 0 ? undefined : endpointList;
    const networkList = copyListValues<Reference>(this.network);
    dest.network = networkList.length === 0 ? undefined : networkList;
    const coverageList = copyListValues<InsurancePlanCoverageComponent>(this.coverage);
    dest.coverage = coverageList.length === 0 ? undefined : coverageList;
    const planList = copyListValues<InsurancePlanPlanComponent>(this.plan);
    dest.plan = planList.length === 0 ? undefined : planList;
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

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasAlias()) {
      setFhirPrimitiveListJson(this.getAliasElement(), 'alias', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasOwnedBy()) {
      setFhirComplexJson(this.getOwnedBy(), 'ownedBy', jsonObj);
    }

    if (this.hasAdministeredBy()) {
      setFhirComplexJson(this.getAdministeredBy(), 'administeredBy', jsonObj);
    }

    if (this.hasCoverageArea()) {
      setFhirComplexListJson(this.getCoverageArea(), 'coverageArea', jsonObj);
    }

    if (this.hasContact()) {
      setFhirBackboneElementListJson(this.getContact(), 'contact', jsonObj);
    }

    if (this.hasEndpoint()) {
      setFhirComplexListJson(this.getEndpoint(), 'endpoint', jsonObj);
    }

    if (this.hasNetwork()) {
      setFhirComplexListJson(this.getNetwork(), 'network', jsonObj);
    }

    if (this.hasCoverage()) {
      setFhirBackboneElementListJson(this.getCoverage(), 'coverage', jsonObj);
    }

    if (this.hasPlan()) {
      setFhirBackboneElementListJson(this.getPlan(), 'plan', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * InsurancePlanContactComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Contact for the product
 * - **Definition:** The contact for the health insurance product for a certain purpose.
 * - **Comment:** Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 * - **Requirements:** Need to keep track of assigned contact points within bigger organization.
 *
 * @category Data Models: Resource
 * @see [FHIR InsurancePlan](http://hl7.org/fhir/StructureDefinition/InsurancePlan)
 */
export class InsurancePlanContactComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `InsurancePlanContactComponent` JSON to instantiate the InsurancePlanContactComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InsurancePlanContactComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InsurancePlanContactComponent
   * @returns InsurancePlanContactComponent data model or undefined for `InsurancePlanContactComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InsurancePlanContactComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InsurancePlanContactComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InsurancePlanContactComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'purpose';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPurpose(datatype);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: HumanName | undefined = HumanName.parse(classJsonObj[fieldName]!, sourceField);
      instance.setName(datatype);
    }

    fieldName = 'telecom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactPoint | undefined = ContactPoint.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTelecom(datatype);
        }
      });
    }

    fieldName = 'address';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Address | undefined = Address.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAddress(datatype);
    }

    return instance;
  }

  /**
   * InsurancePlan.contact.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of contact
   * - **Definition:** Indicates a purpose for which the contact can be reached.
   * - **Requirements:** Need to distinguish between multiple contact persons.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: CodeableConcept | undefined;

  /**
   * InsurancePlan.contact.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A name associated with the contact
   * - **Definition:** A name associated with the contact.
   * - **Requirements:** Need to be able to track the person by name.
   * - **FHIR Type:** `HumanName`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: HumanName | undefined;

  /**
   * InsurancePlan.contact.telecom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact details (telephone, email, etc.)  for a contact
   * - **Definition:** A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   * - **Requirements:** People have (primary) ways to contact them in some way such as phone, email.
   * - **FHIR Type:** `ContactPoint`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private telecom?: ContactPoint[] | undefined;

  /**
   * InsurancePlan.contact.address Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Visiting or postal addresses for the contact
   * - **Definition:** Visiting or postal addresses for the contact.
   * - **Requirements:** May need to keep track of a contact party\'s address for contacting, billing or reporting requirements.
   * - **FHIR Type:** `Address`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private address?: Address | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `purpose` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPurpose(): CodeableConcept {
    return this.purpose ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Purpose object value to the `purpose` property.
   *
   * @param value - the `purpose` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPurpose(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InsurancePlan.contact.purpose; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.purpose = value;
    } else {
      this.purpose = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurpose(): boolean {
    return isDefined<CodeableConcept>(this.purpose) && !this.purpose.isEmpty();
  }

  /**
   * @returns the `name` property value as a HumanName object if defined; else an empty HumanName object
   */
  public getName(): HumanName {
    return this.name ?? new HumanName();
  }

  /**
   * Assigns the provided Name object value to the `name` property.
   *
   * @param value - the `name` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setName(value: HumanName | undefined): this {
    if (isDefined<HumanName>(value)) {
      const optErrMsg = `Invalid InsurancePlan.contact.name; Provided element is not an instance of HumanName.`;
      assertFhirType<HumanName>(value, HumanName, optErrMsg);
      this.name = value;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return isDefined<HumanName>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `telecom` property value as a ContactPoint array
   */
  public getTelecom(): ContactPoint[] {
    return this.telecom ?? ([] as ContactPoint[]);
  }

  /**
   * Assigns the provided ContactPoint array value to the `telecom` property.
   *
   * @param value - the `telecom` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTelecom(value: ContactPoint[] | undefined): this {
    if (isDefinedList<ContactPoint>(value)) {
      const optErrMsg = `Invalid InsurancePlan.contact.telecom; Provided value array has an element that is not an instance of ContactPoint.`;
      assertFhirTypeList<ContactPoint>(value, ContactPoint, optErrMsg);
      this.telecom = value;
    } else {
      this.telecom = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactPoint value to the `telecom` array property.
   *
   * @param value - the `telecom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTelecom(value: ContactPoint | undefined): this {
    if (isDefined<ContactPoint>(value)) {
      const optErrMsg = `Invalid InsurancePlan.contact.telecom; Provided element is not an instance of ContactPoint.`;
      assertFhirType<ContactPoint>(value, ContactPoint, optErrMsg);
      this.initTelecom();
      this.telecom?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `telecom` property exists and has a value; `false` otherwise
   */
  public hasTelecom(): boolean {
    return isDefinedList<ContactPoint>(this.telecom) && this.telecom.some((item: ContactPoint) => !item.isEmpty());
  }

  /**
   * Initialize the `telecom` property
   */
  private initTelecom(): void {
    if(!this.hasTelecom()) {
      this.telecom = [] as ContactPoint[];
    }
  }

  /**
   * @returns the `address` property value as a Address object if defined; else an empty Address object
   */
  public getAddress(): Address {
    return this.address ?? new Address();
  }

  /**
   * Assigns the provided Address object value to the `address` property.
   *
   * @param value - the `address` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAddress(value: Address | undefined): this {
    if (isDefined<Address>(value)) {
      const optErrMsg = `Invalid InsurancePlan.contact.address; Provided element is not an instance of Address.`;
      assertFhirType<Address>(value, Address, optErrMsg);
      this.address = value;
    } else {
      this.address = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `address` property exists and has a value; `false` otherwise
   */
  public hasAddress(): boolean {
    return isDefined<Address>(this.address) && !this.address.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InsurancePlan.contact';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.purpose,
      this.name,
      this.telecom,
      this.address,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InsurancePlanContactComponent {
    const dest = new InsurancePlanContactComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InsurancePlanContactComponent): void {
    super.copyValues(dest);
    dest.purpose = this.purpose?.copy();
    dest.name = this.name?.copy();
    const telecomList = copyListValues<ContactPoint>(this.telecom);
    dest.telecom = telecomList.length === 0 ? undefined : telecomList;
    dest.address = this.address?.copy();
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

    if (this.hasPurpose()) {
      setFhirComplexJson(this.getPurpose(), 'purpose', jsonObj);
    }

    if (this.hasName()) {
      setFhirComplexJson(this.getName(), 'name', jsonObj);
    }

    if (this.hasTelecom()) {
      setFhirComplexListJson(this.getTelecom(), 'telecom', jsonObj);
    }

    if (this.hasAddress()) {
      setFhirComplexJson(this.getAddress(), 'address', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * InsurancePlanCoverageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Coverage details
 * - **Definition:** Details about the coverage offered by the insurance product.
 *
 * @category Data Models: Resource
 * @see [FHIR InsurancePlan](http://hl7.org/fhir/StructureDefinition/InsurancePlan)
 */
export class InsurancePlanCoverageComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, benefit: InsurancePlanCoverageBenefitComponent[] | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.benefit = null;
    if (isDefinedList<InsurancePlanCoverageBenefitComponent>(benefit)) {
      this.setBenefit(benefit);
    }
  }

  /**
   * Parse the provided `InsurancePlanCoverageComponent` JSON to instantiate the InsurancePlanCoverageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InsurancePlanCoverageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InsurancePlanCoverageComponent
   * @returns InsurancePlanCoverageComponent data model or undefined for `InsurancePlanCoverageComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InsurancePlanCoverageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InsurancePlanCoverageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InsurancePlanCoverageComponent();

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

    fieldName = 'network';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNetwork(datatype);
        }
      });
  }

    fieldName = 'benefit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InsurancePlanCoverageBenefitComponent | undefined = InsurancePlanCoverageBenefitComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setBenefit(null);
        } else {
          instance.addBenefit(component);
        }
      });
    } else {
      instance.setBenefit(null);
    }

    return instance;
  }

  /**
   * InsurancePlan.coverage.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of coverage
   * - **Definition:** Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * InsurancePlan.coverage.network Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What networks provide coverage
   * - **Definition:** Reference to the network that providing the type of coverage.
   * - **Comment:** Networks are represented as a hierarchy of organization resources.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private network?: Reference[] | undefined;

  /**
   * InsurancePlan.coverage.benefit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** List of benefits
   * - **Definition:** Specific benefits under this type of coverage.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private benefit: InsurancePlanCoverageBenefitComponent[] | null;

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
      const optErrMsg = `Invalid InsurancePlan.coverage.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `network` property value as a Reference array
   */
  public getNetwork(): Reference[] {
    return this.network ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `network` property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.coverage.network', ['Organization',])`
   *
   * @param value - the `network` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.coverage.network', [
    'Organization',
  ])
  public setNetwork(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.network = value;
    } else {
      this.network = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `network` array property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.coverage.network', ['Organization',])`
   *
   * @param value - the `network` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.coverage.network', [
    'Organization',
  ])
  public addNetwork(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initNetwork();
      this.network?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `network` property exists and has a value; `false` otherwise
   */
  public hasNetwork(): boolean {
    return isDefinedList<Reference>(this.network) && this.network.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `network` property
   */
  private initNetwork(): void {
    if (!this.hasNetwork()) {
      this.network = [] as Reference[];
    }
  }

  /**
   * @returns the `benefit` property value as a InsurancePlanCoverageBenefitComponent array
   */
  public getBenefit(): InsurancePlanCoverageBenefitComponent[] {
    return this.benefit ?? ([] as InsurancePlanCoverageBenefitComponent[]);
  }

  /**
   * Assigns the provided InsurancePlanCoverageBenefitComponent array value to the `benefit` property.
   *
   * @param value - the `benefit` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBenefit(value: InsurancePlanCoverageBenefitComponent[] | undefined | null): this {
    if (isDefinedList<InsurancePlanCoverageBenefitComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.coverage.benefit; Provided value array has an element that is not an instance of InsurancePlanCoverageBenefitComponent.`;
      assertFhirTypeList<InsurancePlanCoverageBenefitComponent>(value, InsurancePlanCoverageBenefitComponent, optErrMsg);
      this.benefit = value;
    } else {
      this.benefit = null;
    }
    return this;
  }

  /**
   * Add the provided InsurancePlanCoverageBenefitComponent value to the `benefit` array property.
   *
   * @param value - the `benefit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBenefit(value: InsurancePlanCoverageBenefitComponent | undefined): this {
    if (isDefined<InsurancePlanCoverageBenefitComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.coverage.benefit; Provided element is not an instance of InsurancePlanCoverageBenefitComponent.`;
      assertFhirType<InsurancePlanCoverageBenefitComponent>(value, InsurancePlanCoverageBenefitComponent, optErrMsg);
      this.initBenefit();
      this.benefit?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `benefit` property exists and has a value; `false` otherwise
   */
  public hasBenefit(): boolean {
    return isDefinedList<InsurancePlanCoverageBenefitComponent>(this.benefit) && this.benefit.some((item: InsurancePlanCoverageBenefitComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `benefit` property
   */
  private initBenefit(): void {
    if(!this.hasBenefit()) {
      this.benefit = [] as InsurancePlanCoverageBenefitComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InsurancePlan.coverage';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.network,
      this.benefit,
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
  public override copy(): InsurancePlanCoverageComponent {
    const dest = new InsurancePlanCoverageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InsurancePlanCoverageComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const networkList = copyListValues<Reference>(this.network);
    dest.network = networkList.length === 0 ? undefined : networkList;
    const benefitList = copyListValues<InsurancePlanCoverageBenefitComponent>(this.benefit);
    dest.benefit = benefitList.length === 0 ? null : benefitList;
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

    if (this.hasNetwork()) {
      setFhirComplexListJson(this.getNetwork(), 'network', jsonObj);
    }

    if (this.hasBenefit()) {
      setFhirBackboneElementListJson(this.getBenefit(), 'benefit', jsonObj);
    } else {
      jsonObj['benefit'] = null;
    }

    return jsonObj;
  }
}
/**
 * InsurancePlanCoverageBenefitComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** List of benefits
 * - **Definition:** Specific benefits under this type of coverage.
 *
 * @category Data Models: Resource
 * @see [FHIR InsurancePlan](http://hl7.org/fhir/StructureDefinition/InsurancePlan)
 */
export class InsurancePlanCoverageBenefitComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `InsurancePlanCoverageBenefitComponent` JSON to instantiate the InsurancePlanCoverageBenefitComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InsurancePlanCoverageBenefitComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InsurancePlanCoverageBenefitComponent
   * @returns InsurancePlanCoverageBenefitComponent data model or undefined for `InsurancePlanCoverageBenefitComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InsurancePlanCoverageBenefitComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InsurancePlanCoverageBenefitComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InsurancePlanCoverageBenefitComponent();

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

    fieldName = 'requirement';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setRequirementElement(datatype);
    }

    fieldName = 'limit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InsurancePlanCoverageBenefitLimitComponent | undefined = InsurancePlanCoverageBenefitLimitComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addLimit(component);
        }
      });
    }

    return instance;
  }

  /**
   * InsurancePlan.coverage.benefit.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of benefit
   * - **Definition:** Type of benefit (primary care; speciality care; inpatient; outpatient).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * InsurancePlan.coverage.benefit.requirement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Referral requirements
   * - **Definition:** The referral requirements to have access/coverage for this benefit.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requirement?: StringType | undefined;

  /**
   * InsurancePlan.coverage.benefit.limit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefit limits
   * - **Definition:** The specific limits on the benefit.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private limit?: InsurancePlanCoverageBenefitLimitComponent[] | undefined;

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
      const optErrMsg = `Invalid InsurancePlan.coverage.benefit.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `requirement` property value as a StringType object if defined; else an empty StringType object
   */
  public getRequirementElement(): StringType {
    return this.requirement ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `requirement` property.
   *
   * @param element - the `requirement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequirementElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid InsurancePlan.coverage.benefit.requirement; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.requirement = element;
    } else {
      this.requirement = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requirement` property exists and has a value; `false` otherwise
   */
  public hasRequirementElement(): boolean {
    return isDefined<StringType>(this.requirement) && !this.requirement.isEmpty();
  }

  /**
   * @returns the `requirement` property value as a fhirString if defined; else undefined
   */
  public getRequirement(): fhirString | undefined {
    return this.requirement?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `requirement` property.
   *
   * @param value - the `requirement` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequirement(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid InsurancePlan.coverage.benefit.requirement (${String(value)})`;
      this.requirement = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.requirement = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requirement` property exists and has a value; `false` otherwise
   */
  public hasRequirement(): boolean {
    return this.hasRequirementElement();
  }

  /**
   * @returns the `limit` property value as a InsurancePlanCoverageBenefitLimitComponent array
   */
  public getLimit(): InsurancePlanCoverageBenefitLimitComponent[] {
    return this.limit ?? ([] as InsurancePlanCoverageBenefitLimitComponent[]);
  }

  /**
   * Assigns the provided InsurancePlanCoverageBenefitLimitComponent array value to the `limit` property.
   *
   * @param value - the `limit` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLimit(value: InsurancePlanCoverageBenefitLimitComponent[] | undefined): this {
    if (isDefinedList<InsurancePlanCoverageBenefitLimitComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.coverage.benefit.limit; Provided value array has an element that is not an instance of InsurancePlanCoverageBenefitLimitComponent.`;
      assertFhirTypeList<InsurancePlanCoverageBenefitLimitComponent>(value, InsurancePlanCoverageBenefitLimitComponent, optErrMsg);
      this.limit = value;
    } else {
      this.limit = undefined;
    }
    return this;
  }

  /**
   * Add the provided InsurancePlanCoverageBenefitLimitComponent value to the `limit` array property.
   *
   * @param value - the `limit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLimit(value: InsurancePlanCoverageBenefitLimitComponent | undefined): this {
    if (isDefined<InsurancePlanCoverageBenefitLimitComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.coverage.benefit.limit; Provided element is not an instance of InsurancePlanCoverageBenefitLimitComponent.`;
      assertFhirType<InsurancePlanCoverageBenefitLimitComponent>(value, InsurancePlanCoverageBenefitLimitComponent, optErrMsg);
      this.initLimit();
      this.limit?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `limit` property exists and has a value; `false` otherwise
   */
  public hasLimit(): boolean {
    return isDefinedList<InsurancePlanCoverageBenefitLimitComponent>(this.limit) && this.limit.some((item: InsurancePlanCoverageBenefitLimitComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `limit` property
   */
  private initLimit(): void {
    if(!this.hasLimit()) {
      this.limit = [] as InsurancePlanCoverageBenefitLimitComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InsurancePlan.coverage.benefit';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.requirement,
      this.limit,
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
  public override copy(): InsurancePlanCoverageBenefitComponent {
    const dest = new InsurancePlanCoverageBenefitComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InsurancePlanCoverageBenefitComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.requirement = this.requirement?.copy();
    const limitList = copyListValues<InsurancePlanCoverageBenefitLimitComponent>(this.limit);
    dest.limit = limitList.length === 0 ? undefined : limitList;
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

    if (this.hasRequirementElement()) {
      setFhirPrimitiveJson<fhirString>(this.getRequirementElement(), 'requirement', jsonObj);
    }

    if (this.hasLimit()) {
      setFhirBackboneElementListJson(this.getLimit(), 'limit', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * InsurancePlanCoverageBenefitLimitComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Benefit limits
 * - **Definition:** The specific limits on the benefit.
 *
 * @category Data Models: Resource
 * @see [FHIR InsurancePlan](http://hl7.org/fhir/StructureDefinition/InsurancePlan)
 */
export class InsurancePlanCoverageBenefitLimitComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `InsurancePlanCoverageBenefitLimitComponent` JSON to instantiate the InsurancePlanCoverageBenefitLimitComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InsurancePlanCoverageBenefitLimitComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InsurancePlanCoverageBenefitLimitComponent
   * @returns InsurancePlanCoverageBenefitLimitComponent data model or undefined for `InsurancePlanCoverageBenefitLimitComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InsurancePlanCoverageBenefitLimitComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InsurancePlanCoverageBenefitLimitComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InsurancePlanCoverageBenefitLimitComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setValue(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    return instance;
  }

  /**
   * InsurancePlan.coverage.benefit.limit.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Maximum value allowed
   * - **Definition:** The maximum amount of a service item a plan will pay for a covered benefit.  For examples. wellness visits, or eyeglasses.
   * - **Comment:** May also be called "eligible expense," "payment allowance," or "negotiated rate.".
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value?: Quantity | undefined;

  /**
   * InsurancePlan.coverage.benefit.limit.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefit limit details
   * - **Definition:** The specific limit on the benefit.
   * - **Comment:** Use `CodeableConcept.text` element if the data is free (uncoded) text.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `value` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getValue(): Quantity {
    return this.value ?? new Quantity();
  }

  /**
   * Assigns the provided Value object value to the `value` property.
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValue(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid InsurancePlan.coverage.benefit.limit.value; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
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
    return isDefined<Quantity>(this.value) && !this.value.isEmpty();
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
      const optErrMsg = `Invalid InsurancePlan.coverage.benefit.limit.code; Provided element is not an instance of CodeableConcept.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InsurancePlan.coverage.benefit.limit';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.value,
      this.code,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InsurancePlanCoverageBenefitLimitComponent {
    const dest = new InsurancePlanCoverageBenefitLimitComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InsurancePlanCoverageBenefitLimitComponent): void {
    super.copyValues(dest);
    dest.value = this.value?.copy();
    dest.code = this.code?.copy();
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

    if (this.hasValue()) {
      setFhirComplexJson(this.getValue(), 'value', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * InsurancePlanPlanComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Plan details
 * - **Definition:** Details about an insurance plan.
 *
 * @category Data Models: Resource
 * @see [FHIR InsurancePlan](http://hl7.org/fhir/StructureDefinition/InsurancePlan)
 */
export class InsurancePlanPlanComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `InsurancePlanPlanComponent` JSON to instantiate the InsurancePlanPlanComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InsurancePlanPlanComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InsurancePlanPlanComponent
   * @returns InsurancePlanPlanComponent data model or undefined for `InsurancePlanPlanComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InsurancePlanPlanComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InsurancePlanPlanComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InsurancePlanPlanComponent();

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

    fieldName = 'coverageArea';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCoverageArea(datatype);
        }
      });
  }

    fieldName = 'network';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNetwork(datatype);
        }
      });
  }

    fieldName = 'generalCost';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InsurancePlanPlanGeneralCostComponent | undefined = InsurancePlanPlanGeneralCostComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addGeneralCost(component);
        }
      });
    }

    fieldName = 'specificCost';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InsurancePlanPlanSpecificCostComponent | undefined = InsurancePlanPlanSpecificCostComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSpecificCost(component);
        }
      });
    }

    return instance;
  }

  /**
   * InsurancePlan.plan.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for Product
   * - **Definition:** Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * InsurancePlan.plan.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of plan
   * - **Definition:** Type of plan. For example, "Platinum" or "High Deductable".
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * InsurancePlan.plan.coverageArea Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where product applies
   * - **Definition:** The geographic region in which a health insurance plan\'s benefits apply.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private coverageArea?: Reference[] | undefined;

  /**
   * InsurancePlan.plan.network Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What networks provide coverage
   * - **Definition:** Reference to the network that providing the type of coverage.
   * - **Comment:** Networks are represented as a hierarchy of organization resources.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private network?: Reference[] | undefined;

  /**
   * InsurancePlan.plan.generalCost Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Overall costs
   * - **Definition:** Overall costs associated with the plan.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private generalCost?: InsurancePlanPlanGeneralCostComponent[] | undefined;

  /**
   * InsurancePlan.plan.specificCost Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific costs
   * - **Definition:** Costs associated with the coverage provided by the product.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private specificCost?: InsurancePlanPlanSpecificCostComponent[] | undefined;

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
      const optErrMsg = `Invalid InsurancePlan.plan.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid InsurancePlan.plan.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid InsurancePlan.plan.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `coverageArea` property value as a Reference array
   */
  public getCoverageArea(): Reference[] {
    return this.coverageArea ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `coverageArea` property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.plan.coverageArea', ['Location',])`
   *
   * @param value - the `coverageArea` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.plan.coverageArea', [
    'Location',
  ])
  public setCoverageArea(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.coverageArea = value;
    } else {
      this.coverageArea = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `coverageArea` array property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.plan.coverageArea', ['Location',])`
   *
   * @param value - the `coverageArea` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.plan.coverageArea', [
    'Location',
  ])
  public addCoverageArea(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initCoverageArea();
      this.coverageArea?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `coverageArea` property exists and has a value; `false` otherwise
   */
  public hasCoverageArea(): boolean {
    return isDefinedList<Reference>(this.coverageArea) && this.coverageArea.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `coverageArea` property
   */
  private initCoverageArea(): void {
    if (!this.hasCoverageArea()) {
      this.coverageArea = [] as Reference[];
    }
  }

  /**
   * @returns the `network` property value as a Reference array
   */
  public getNetwork(): Reference[] {
    return this.network ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `network` property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.plan.network', ['Organization',])`
   *
   * @param value - the `network` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.plan.network', [
    'Organization',
  ])
  public setNetwork(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.network = value;
    } else {
      this.network = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `network` array property.
   *
   * @decorator `@ReferenceTargets('InsurancePlan.plan.network', ['Organization',])`
   *
   * @param value - the `network` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('InsurancePlan.plan.network', [
    'Organization',
  ])
  public addNetwork(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initNetwork();
      this.network?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `network` property exists and has a value; `false` otherwise
   */
  public hasNetwork(): boolean {
    return isDefinedList<Reference>(this.network) && this.network.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `network` property
   */
  private initNetwork(): void {
    if (!this.hasNetwork()) {
      this.network = [] as Reference[];
    }
  }

  /**
   * @returns the `generalCost` property value as a InsurancePlanPlanGeneralCostComponent array
   */
  public getGeneralCost(): InsurancePlanPlanGeneralCostComponent[] {
    return this.generalCost ?? ([] as InsurancePlanPlanGeneralCostComponent[]);
  }

  /**
   * Assigns the provided InsurancePlanPlanGeneralCostComponent array value to the `generalCost` property.
   *
   * @param value - the `generalCost` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGeneralCost(value: InsurancePlanPlanGeneralCostComponent[] | undefined): this {
    if (isDefinedList<InsurancePlanPlanGeneralCostComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.generalCost; Provided value array has an element that is not an instance of InsurancePlanPlanGeneralCostComponent.`;
      assertFhirTypeList<InsurancePlanPlanGeneralCostComponent>(value, InsurancePlanPlanGeneralCostComponent, optErrMsg);
      this.generalCost = value;
    } else {
      this.generalCost = undefined;
    }
    return this;
  }

  /**
   * Add the provided InsurancePlanPlanGeneralCostComponent value to the `generalCost` array property.
   *
   * @param value - the `generalCost` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addGeneralCost(value: InsurancePlanPlanGeneralCostComponent | undefined): this {
    if (isDefined<InsurancePlanPlanGeneralCostComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.generalCost; Provided element is not an instance of InsurancePlanPlanGeneralCostComponent.`;
      assertFhirType<InsurancePlanPlanGeneralCostComponent>(value, InsurancePlanPlanGeneralCostComponent, optErrMsg);
      this.initGeneralCost();
      this.generalCost?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `generalCost` property exists and has a value; `false` otherwise
   */
  public hasGeneralCost(): boolean {
    return isDefinedList<InsurancePlanPlanGeneralCostComponent>(this.generalCost) && this.generalCost.some((item: InsurancePlanPlanGeneralCostComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `generalCost` property
   */
  private initGeneralCost(): void {
    if(!this.hasGeneralCost()) {
      this.generalCost = [] as InsurancePlanPlanGeneralCostComponent[];
    }
  }

  /**
   * @returns the `specificCost` property value as a InsurancePlanPlanSpecificCostComponent array
   */
  public getSpecificCost(): InsurancePlanPlanSpecificCostComponent[] {
    return this.specificCost ?? ([] as InsurancePlanPlanSpecificCostComponent[]);
  }

  /**
   * Assigns the provided InsurancePlanPlanSpecificCostComponent array value to the `specificCost` property.
   *
   * @param value - the `specificCost` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecificCost(value: InsurancePlanPlanSpecificCostComponent[] | undefined): this {
    if (isDefinedList<InsurancePlanPlanSpecificCostComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.specificCost; Provided value array has an element that is not an instance of InsurancePlanPlanSpecificCostComponent.`;
      assertFhirTypeList<InsurancePlanPlanSpecificCostComponent>(value, InsurancePlanPlanSpecificCostComponent, optErrMsg);
      this.specificCost = value;
    } else {
      this.specificCost = undefined;
    }
    return this;
  }

  /**
   * Add the provided InsurancePlanPlanSpecificCostComponent value to the `specificCost` array property.
   *
   * @param value - the `specificCost` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSpecificCost(value: InsurancePlanPlanSpecificCostComponent | undefined): this {
    if (isDefined<InsurancePlanPlanSpecificCostComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.specificCost; Provided element is not an instance of InsurancePlanPlanSpecificCostComponent.`;
      assertFhirType<InsurancePlanPlanSpecificCostComponent>(value, InsurancePlanPlanSpecificCostComponent, optErrMsg);
      this.initSpecificCost();
      this.specificCost?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specificCost` property exists and has a value; `false` otherwise
   */
  public hasSpecificCost(): boolean {
    return isDefinedList<InsurancePlanPlanSpecificCostComponent>(this.specificCost) && this.specificCost.some((item: InsurancePlanPlanSpecificCostComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `specificCost` property
   */
  private initSpecificCost(): void {
    if(!this.hasSpecificCost()) {
      this.specificCost = [] as InsurancePlanPlanSpecificCostComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InsurancePlan.plan';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.coverageArea,
      this.network,
      this.generalCost,
      this.specificCost,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InsurancePlanPlanComponent {
    const dest = new InsurancePlanPlanComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InsurancePlanPlanComponent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.type_ = this.type_?.copy();
    const coverageAreaList = copyListValues<Reference>(this.coverageArea);
    dest.coverageArea = coverageAreaList.length === 0 ? undefined : coverageAreaList;
    const networkList = copyListValues<Reference>(this.network);
    dest.network = networkList.length === 0 ? undefined : networkList;
    const generalCostList = copyListValues<InsurancePlanPlanGeneralCostComponent>(this.generalCost);
    dest.generalCost = generalCostList.length === 0 ? undefined : generalCostList;
    const specificCostList = copyListValues<InsurancePlanPlanSpecificCostComponent>(this.specificCost);
    dest.specificCost = specificCostList.length === 0 ? undefined : specificCostList;
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

    if (this.hasCoverageArea()) {
      setFhirComplexListJson(this.getCoverageArea(), 'coverageArea', jsonObj);
    }

    if (this.hasNetwork()) {
      setFhirComplexListJson(this.getNetwork(), 'network', jsonObj);
    }

    if (this.hasGeneralCost()) {
      setFhirBackboneElementListJson(this.getGeneralCost(), 'generalCost', jsonObj);
    }

    if (this.hasSpecificCost()) {
      setFhirBackboneElementListJson(this.getSpecificCost(), 'specificCost', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * InsurancePlanPlanGeneralCostComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Overall costs
 * - **Definition:** Overall costs associated with the plan.
 *
 * @category Data Models: Resource
 * @see [FHIR InsurancePlan](http://hl7.org/fhir/StructureDefinition/InsurancePlan)
 */
export class InsurancePlanPlanGeneralCostComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `InsurancePlanPlanGeneralCostComponent` JSON to instantiate the InsurancePlanPlanGeneralCostComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InsurancePlanPlanGeneralCostComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InsurancePlanPlanGeneralCostComponent
   * @returns InsurancePlanPlanGeneralCostComponent data model or undefined for `InsurancePlanPlanGeneralCostComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InsurancePlanPlanGeneralCostComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InsurancePlanPlanGeneralCostComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InsurancePlanPlanGeneralCostComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'groupSize';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setGroupSizeElement(datatype);
    }

    fieldName = 'cost';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCost(datatype);
    }

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    return instance;
  }

  /**
   * InsurancePlan.plan.generalCost.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of cost
   * - **Definition:** Type of cost.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * InsurancePlan.plan.generalCost.groupSize Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of enrollees
   * - **Definition:** Number of participants enrolled in the plan.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private groupSize?: PositiveIntType | undefined;

  /**
   * InsurancePlan.plan.generalCost.cost Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Cost value
   * - **Definition:** Value of the cost.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private cost?: Money | undefined;

  /**
   * InsurancePlan.plan.generalCost.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional cost information
   * - **Definition:** Additional information about the general costs associated with this plan.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private comment?: StringType | undefined;

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
      const optErrMsg = `Invalid InsurancePlan.plan.generalCost.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `groupSize` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getGroupSizeElement(): PositiveIntType {
    return this.groupSize ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `groupSize` property.
   *
   * @param element - the `groupSize` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGroupSizeElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid InsurancePlan.plan.generalCost.groupSize; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.groupSize = element;
    } else {
      this.groupSize = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `groupSize` property exists and has a value; `false` otherwise
   */
  public hasGroupSizeElement(): boolean {
    return isDefined<PositiveIntType>(this.groupSize) && !this.groupSize.isEmpty();
  }

  /**
   * @returns the `groupSize` property value as a fhirPositiveInt if defined; else undefined
   */
  public getGroupSize(): fhirPositiveInt | undefined {
    return this.groupSize?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `groupSize` property.
   *
   * @param value - the `groupSize` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGroupSize(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.generalCost.groupSize (${String(value)})`;
      this.groupSize = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.groupSize = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `groupSize` property exists and has a value; `false` otherwise
   */
  public hasGroupSize(): boolean {
    return this.hasGroupSizeElement();
  }

  /**
   * @returns the `cost` property value as a Money object if defined; else an empty Money object
   */
  public getCost(): Money {
    return this.cost ?? new Money();
  }

  /**
   * Assigns the provided Cost object value to the `cost` property.
   *
   * @param value - the `cost` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCost(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.generalCost.cost; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.cost = value;
    } else {
      this.cost = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cost` property exists and has a value; `false` otherwise
   */
  public hasCost(): boolean {
    return isDefined<Money>(this.cost) && !this.cost.isEmpty();
  }

  /**
   * @returns the `comment` property value as a StringType object if defined; else an empty StringType object
   */
  public getCommentElement(): StringType {
    return this.comment ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `comment` property.
   *
   * @param element - the `comment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCommentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid InsurancePlan.plan.generalCost.comment; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.comment = element;
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasCommentElement(): boolean {
    return isDefined<StringType>(this.comment) && !this.comment.isEmpty();
  }

  /**
   * @returns the `comment` property value as a fhirString if defined; else undefined
   */
  public getComment(): fhirString | undefined {
    return this.comment?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `comment` property.
   *
   * @param value - the `comment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComment(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.generalCost.comment (${String(value)})`;
      this.comment = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasComment(): boolean {
    return this.hasCommentElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InsurancePlan.plan.generalCost';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.groupSize,
      this.cost,
      this.comment,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InsurancePlanPlanGeneralCostComponent {
    const dest = new InsurancePlanPlanGeneralCostComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InsurancePlanPlanGeneralCostComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.groupSize = this.groupSize?.copy();
    dest.cost = this.cost?.copy();
    dest.comment = this.comment?.copy();
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

    if (this.hasGroupSizeElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getGroupSizeElement(), 'groupSize', jsonObj);
    }

    if (this.hasCost()) {
      setFhirComplexJson(this.getCost(), 'cost', jsonObj);
    }

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCommentElement(), 'comment', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * InsurancePlanPlanSpecificCostComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specific costs
 * - **Definition:** Costs associated with the coverage provided by the product.
 *
 * @category Data Models: Resource
 * @see [FHIR InsurancePlan](http://hl7.org/fhir/StructureDefinition/InsurancePlan)
 */
export class InsurancePlanPlanSpecificCostComponent extends BackboneElement implements IBackboneElement {
  constructor(category: CodeableConcept | null = null) {
    super();

    this.category = null;
    if (isDefined<CodeableConcept>(category)) {
      this.setCategory(category);
    }
  }

  /**
   * Parse the provided `InsurancePlanPlanSpecificCostComponent` JSON to instantiate the InsurancePlanPlanSpecificCostComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InsurancePlanPlanSpecificCostComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InsurancePlanPlanSpecificCostComponent
   * @returns InsurancePlanPlanSpecificCostComponent data model or undefined for `InsurancePlanPlanSpecificCostComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InsurancePlanPlanSpecificCostComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InsurancePlanPlanSpecificCostComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InsurancePlanPlanSpecificCostComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCategory(null);
      } else {
        instance.setCategory(datatype);
      }
    } else {
      instance.setCategory(null);
    }

    fieldName = 'benefit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InsurancePlanPlanSpecificCostBenefitComponent | undefined = InsurancePlanPlanSpecificCostBenefitComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addBenefit(component);
        }
      });
    }

    return instance;
  }

  /**
   * InsurancePlan.plan.specificCost.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General category of benefit
   * - **Definition:** General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category: CodeableConcept | null;

  /**
   * InsurancePlan.plan.specificCost.benefit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Benefits list
   * - **Definition:** List of the specific benefits under this category of benefit.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private benefit?: InsurancePlanPlanSpecificCostBenefitComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.specificCost.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = null;
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
   * @returns the `benefit` property value as a InsurancePlanPlanSpecificCostBenefitComponent array
   */
  public getBenefit(): InsurancePlanPlanSpecificCostBenefitComponent[] {
    return this.benefit ?? ([] as InsurancePlanPlanSpecificCostBenefitComponent[]);
  }

  /**
   * Assigns the provided InsurancePlanPlanSpecificCostBenefitComponent array value to the `benefit` property.
   *
   * @param value - the `benefit` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBenefit(value: InsurancePlanPlanSpecificCostBenefitComponent[] | undefined): this {
    if (isDefinedList<InsurancePlanPlanSpecificCostBenefitComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.specificCost.benefit; Provided value array has an element that is not an instance of InsurancePlanPlanSpecificCostBenefitComponent.`;
      assertFhirTypeList<InsurancePlanPlanSpecificCostBenefitComponent>(value, InsurancePlanPlanSpecificCostBenefitComponent, optErrMsg);
      this.benefit = value;
    } else {
      this.benefit = undefined;
    }
    return this;
  }

  /**
   * Add the provided InsurancePlanPlanSpecificCostBenefitComponent value to the `benefit` array property.
   *
   * @param value - the `benefit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBenefit(value: InsurancePlanPlanSpecificCostBenefitComponent | undefined): this {
    if (isDefined<InsurancePlanPlanSpecificCostBenefitComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.specificCost.benefit; Provided element is not an instance of InsurancePlanPlanSpecificCostBenefitComponent.`;
      assertFhirType<InsurancePlanPlanSpecificCostBenefitComponent>(value, InsurancePlanPlanSpecificCostBenefitComponent, optErrMsg);
      this.initBenefit();
      this.benefit?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `benefit` property exists and has a value; `false` otherwise
   */
  public hasBenefit(): boolean {
    return isDefinedList<InsurancePlanPlanSpecificCostBenefitComponent>(this.benefit) && this.benefit.some((item: InsurancePlanPlanSpecificCostBenefitComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `benefit` property
   */
  private initBenefit(): void {
    if(!this.hasBenefit()) {
      this.benefit = [] as InsurancePlanPlanSpecificCostBenefitComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InsurancePlan.plan.specificCost';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.benefit,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.category, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): InsurancePlanPlanSpecificCostComponent {
    const dest = new InsurancePlanPlanSpecificCostComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InsurancePlanPlanSpecificCostComponent): void {
    super.copyValues(dest);
    dest.category = this.category ? this.category.copy() : null;
    const benefitList = copyListValues<InsurancePlanPlanSpecificCostBenefitComponent>(this.benefit);
    dest.benefit = benefitList.length === 0 ? undefined : benefitList;
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
    } else {
      jsonObj['category'] = null;
    }

    if (this.hasBenefit()) {
      setFhirBackboneElementListJson(this.getBenefit(), 'benefit', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * InsurancePlanPlanSpecificCostBenefitComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Benefits list
 * - **Definition:** List of the specific benefits under this category of benefit.
 *
 * @category Data Models: Resource
 * @see [FHIR InsurancePlan](http://hl7.org/fhir/StructureDefinition/InsurancePlan)
 */
export class InsurancePlanPlanSpecificCostBenefitComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `InsurancePlanPlanSpecificCostBenefitComponent` JSON to instantiate the InsurancePlanPlanSpecificCostBenefitComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InsurancePlanPlanSpecificCostBenefitComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InsurancePlanPlanSpecificCostBenefitComponent
   * @returns InsurancePlanPlanSpecificCostBenefitComponent data model or undefined for `InsurancePlanPlanSpecificCostBenefitComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InsurancePlanPlanSpecificCostBenefitComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InsurancePlanPlanSpecificCostBenefitComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InsurancePlanPlanSpecificCostBenefitComponent();

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

    fieldName = 'cost';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: InsurancePlanPlanSpecificCostBenefitCostComponent | undefined = InsurancePlanPlanSpecificCostBenefitCostComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCost(component);
        }
      });
    }

    return instance;
  }

  /**
   * InsurancePlan.plan.specificCost.benefit.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of specific benefit
   * - **Definition:** Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * InsurancePlan.plan.specificCost.benefit.cost Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** List of the costs
   * - **Definition:** List of the costs associated with a specific benefit.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private cost?: InsurancePlanPlanSpecificCostBenefitCostComponent[] | undefined;

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
      const optErrMsg = `Invalid InsurancePlan.plan.specificCost.benefit.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `cost` property value as a InsurancePlanPlanSpecificCostBenefitCostComponent array
   */
  public getCost(): InsurancePlanPlanSpecificCostBenefitCostComponent[] {
    return this.cost ?? ([] as InsurancePlanPlanSpecificCostBenefitCostComponent[]);
  }

  /**
   * Assigns the provided InsurancePlanPlanSpecificCostBenefitCostComponent array value to the `cost` property.
   *
   * @param value - the `cost` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCost(value: InsurancePlanPlanSpecificCostBenefitCostComponent[] | undefined): this {
    if (isDefinedList<InsurancePlanPlanSpecificCostBenefitCostComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.specificCost.benefit.cost; Provided value array has an element that is not an instance of InsurancePlanPlanSpecificCostBenefitCostComponent.`;
      assertFhirTypeList<InsurancePlanPlanSpecificCostBenefitCostComponent>(value, InsurancePlanPlanSpecificCostBenefitCostComponent, optErrMsg);
      this.cost = value;
    } else {
      this.cost = undefined;
    }
    return this;
  }

  /**
   * Add the provided InsurancePlanPlanSpecificCostBenefitCostComponent value to the `cost` array property.
   *
   * @param value - the `cost` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCost(value: InsurancePlanPlanSpecificCostBenefitCostComponent | undefined): this {
    if (isDefined<InsurancePlanPlanSpecificCostBenefitCostComponent>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.specificCost.benefit.cost; Provided element is not an instance of InsurancePlanPlanSpecificCostBenefitCostComponent.`;
      assertFhirType<InsurancePlanPlanSpecificCostBenefitCostComponent>(value, InsurancePlanPlanSpecificCostBenefitCostComponent, optErrMsg);
      this.initCost();
      this.cost?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `cost` property exists and has a value; `false` otherwise
   */
  public hasCost(): boolean {
    return isDefinedList<InsurancePlanPlanSpecificCostBenefitCostComponent>(this.cost) && this.cost.some((item: InsurancePlanPlanSpecificCostBenefitCostComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `cost` property
   */
  private initCost(): void {
    if(!this.hasCost()) {
      this.cost = [] as InsurancePlanPlanSpecificCostBenefitCostComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InsurancePlan.plan.specificCost.benefit';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.cost,
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
  public override copy(): InsurancePlanPlanSpecificCostBenefitComponent {
    const dest = new InsurancePlanPlanSpecificCostBenefitComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InsurancePlanPlanSpecificCostBenefitComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const costList = copyListValues<InsurancePlanPlanSpecificCostBenefitCostComponent>(this.cost);
    dest.cost = costList.length === 0 ? undefined : costList;
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

    if (this.hasCost()) {
      setFhirBackboneElementListJson(this.getCost(), 'cost', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * InsurancePlanPlanSpecificCostBenefitCostComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** List of the costs
 * - **Definition:** List of the costs associated with a specific benefit.
 *
 * @category Data Models: Resource
 * @see [FHIR InsurancePlan](http://hl7.org/fhir/StructureDefinition/InsurancePlan)
 */
export class InsurancePlanPlanSpecificCostBenefitCostComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `InsurancePlanPlanSpecificCostBenefitCostComponent` JSON to instantiate the InsurancePlanPlanSpecificCostBenefitCostComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `InsurancePlanPlanSpecificCostBenefitCostComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to InsurancePlanPlanSpecificCostBenefitCostComponent
   * @returns InsurancePlanPlanSpecificCostBenefitCostComponent data model or undefined for `InsurancePlanPlanSpecificCostBenefitCostComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): InsurancePlanPlanSpecificCostBenefitCostComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'InsurancePlanPlanSpecificCostBenefitCostComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new InsurancePlanPlanSpecificCostBenefitCostComponent();

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

    fieldName = 'applicability';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setApplicability(datatype);
    }

    fieldName = 'qualifiers';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addQualifiers(datatype);
        }
      });
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setValue(datatype);
    }

    return instance;
  }

  /**
   * InsurancePlan.plan.specificCost.benefit.cost.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of cost
   * - **Definition:** Type of cost (copay; individual cap; family cap; coinsurance; deductible).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * InsurancePlan.plan.specificCost.benefit.cost.applicability Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** in-network | out-of-network | other
   * - **Definition:** Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private applicability?: CodeableConcept | undefined;

  /**
   * InsurancePlan.plan.specificCost.benefit.cost.qualifiers Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information about the cost
   * - **Definition:** Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private qualifiers?: CodeableConcept[] | undefined;

  /**
   * InsurancePlan.plan.specificCost.benefit.cost.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual cost value
   * - **Definition:** The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value?: Quantity | undefined;

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
      const optErrMsg = `Invalid InsurancePlan.plan.specificCost.benefit.cost.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `applicability` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getApplicability(): CodeableConcept {
    return this.applicability ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Applicability object value to the `applicability` property.
   *
   * @param value - the `applicability` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setApplicability(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.specificCost.benefit.cost.applicability; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.applicability = value;
    } else {
      this.applicability = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `applicability` property exists and has a value; `false` otherwise
   */
  public hasApplicability(): boolean {
    return isDefined<CodeableConcept>(this.applicability) && !this.applicability.isEmpty();
  }

  /**
   * @returns the `qualifiers` property value as a CodeableConcept array
   */
  public getQualifiers(): CodeableConcept[] {
    return this.qualifiers ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `qualifiers` property.
   *
   * @param value - the `qualifiers` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQualifiers(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.specificCost.benefit.cost.qualifiers; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.qualifiers = value;
    } else {
      this.qualifiers = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `qualifiers` array property.
   *
   * @param value - the `qualifiers` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addQualifiers(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.specificCost.benefit.cost.qualifiers; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initQualifiers();
      this.qualifiers?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `qualifiers` property exists and has a value; `false` otherwise
   */
  public hasQualifiers(): boolean {
    return isDefinedList<CodeableConcept>(this.qualifiers) && this.qualifiers.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `qualifiers` property
   */
  private initQualifiers(): void {
    if(!this.hasQualifiers()) {
      this.qualifiers = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getValue(): Quantity {
    return this.value ?? new Quantity();
  }

  /**
   * Assigns the provided Value object value to the `value` property.
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValue(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid InsurancePlan.plan.specificCost.benefit.cost.value; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
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
    return isDefined<Quantity>(this.value) && !this.value.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'InsurancePlan.plan.specificCost.benefit.cost';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.applicability,
      this.qualifiers,
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
  public override copy(): InsurancePlanPlanSpecificCostBenefitCostComponent {
    const dest = new InsurancePlanPlanSpecificCostBenefitCostComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: InsurancePlanPlanSpecificCostBenefitCostComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.applicability = this.applicability?.copy();
    const qualifiersList = copyListValues<CodeableConcept>(this.qualifiers);
    dest.qualifiers = qualifiersList.length === 0 ? undefined : qualifiersList;
    dest.value = this.value?.copy();
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

    if (this.hasApplicability()) {
      setFhirComplexJson(this.getApplicability(), 'applicability', jsonObj);
    }

    if (this.hasQualifiers()) {
      setFhirComplexListJson(this.getQualifiers(), 'qualifiers', jsonObj);
    }

    if (this.hasValue()) {
      setFhirComplexJson(this.getValue(), 'value', jsonObj);
    }

    return jsonObj;
  }
}
