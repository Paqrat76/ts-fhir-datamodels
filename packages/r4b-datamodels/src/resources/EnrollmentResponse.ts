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
 * EnrollmentResponse Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/EnrollmentResponse
 * StructureDefinition.name: EnrollmentResponse
 * StructureDefinition.description: This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IDomainResource,
  JSON,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
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
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { FmStatusEnum } from '../code-systems/FmStatusEnum';
import { Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { RemittanceOutcomeEnum } from '../code-systems/RemittanceOutcomeEnum';

/**
 * EnrollmentResponse Class
 *
 * @remarks
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 *
 * **FHIR Specification**
 * - **Short:** EnrollmentResponse resource
 * - **Definition:** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR EnrollmentResponse](http://hl7.org/fhir/StructureDefinition/EnrollmentResponse)
 */
export class EnrollmentResponse extends DomainResource implements IDomainResource {
  constructor() {
    super();

    this.fmStatusEnum = new FmStatusEnum();
    this.remittanceOutcomeEnum = new RemittanceOutcomeEnum();
  }

  /**
   * Parse the provided `EnrollmentResponse` JSON to instantiate the EnrollmentResponse data model.
   *
   * @param sourceJson - JSON representing FHIR `EnrollmentResponse`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EnrollmentResponse
   * @returns EnrollmentResponse data model or undefined for `EnrollmentResponse`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): EnrollmentResponse | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EnrollmentResponse';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EnrollmentResponse();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'EnrollmentResponse');
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

    fieldName = 'request';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequest(datatype);
    }

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setOutcomeElement(datatype);
    }

    fieldName = 'disposition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDispositionElement(datatype);
    }

    fieldName = 'created';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setCreatedElement(datatype);
    }

    fieldName = 'organization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrganization(datatype);
    }

    fieldName = 'requestProvider';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequestProvider(datatype);
    }

    return instance;
  }

  /**
   * EnrollmentResponse.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier
   * - **Definition:** The Response business identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: FmStatus
   *
   * @see {@link FmStatusEnum }
   */
  private readonly fmStatusEnum: FmStatusEnum;

  /**
   * EnrollmentResponse.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | cancelled | draft | entered-in-error
   * - **Definition:** The status of the resource instance.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * EnrollmentResponse.request Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Claim reference
   * - **Definition:** Original request resource reference.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/EnrollmentRequest',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private request?: Reference | undefined;

  /**
   * FHIR CodeSystem: RemittanceOutcome
   *
   * @see {@link RemittanceOutcomeEnum }
   */
  private readonly remittanceOutcomeEnum: RemittanceOutcomeEnum;

  /**
   * EnrollmentResponse.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** queued | complete | error | partial
   * - **Definition:** Processing status: error, complete.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  private outcome?: EnumCodeType | undefined;

  /**
   * EnrollmentResponse.disposition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Disposition Message
   * - **Definition:** A description of the status of the adjudication.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private disposition?: StringType | undefined;

  /**
   * EnrollmentResponse.created Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Creation date
   * - **Definition:** The date when the enclosed suite of services were performed or completed.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private created?: DateTimeType | undefined;

  /**
   * EnrollmentResponse.organization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Insurer
   * - **Definition:** The Insurer who produced this adjudicated response.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private organization?: Reference | undefined;

  /**
   * EnrollmentResponse.requestProvider Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Responsible practitioner
   * - **Definition:** The practitioner who is responsible for the services rendered to the patient.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requestProvider?: Reference | undefined;

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
      const optErrMsg = `Invalid EnrollmentResponse.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid EnrollmentResponse.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid EnrollmentResponse.status';
      assertEnumCodeType<FmStatusEnum>(enumType, FmStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid EnrollmentResponse.status; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.fmStatusEnum);
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  public setStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid EnrollmentResponse.status; Provided value is not an instance of fhirCode.`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fmStatusEnum);
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
   * @returns the `request` property value as a Reference object; else an empty Reference object
   */
  public getRequest(): Reference {
    return this.request ?? new Reference();
  }

  /**
   * Assigns the provided Request object value to the `request` property.
   *
   * @decorator `@ReferenceTargets('EnrollmentResponse.request', ['EnrollmentRequest',])`
   *
   * @param value - the `request` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EnrollmentResponse.request', [
    'EnrollmentRequest',
  ])
  public setRequest(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.request = value;
    } else {
      this.request = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `request` property exists and has a value; `false` otherwise
   */
  public hasRequest(): boolean {
    return isDefined<Reference>(this.request) && !this.request.isEmpty();
  }

  /**
   * @returns the `outcome` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public getOutcomeEnumType(): EnumCodeType | undefined {
    return this.outcome;
  }

  /**
   * Assigns the provided EnumCodeType value to the `outcome` property.
   *
   * @param enumType - the `outcome` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public setOutcomeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid EnrollmentResponse.outcome';
      assertEnumCodeType<RemittanceOutcomeEnum>(enumType, RemittanceOutcomeEnum, errMsgPrefix);
      this.outcome = enumType;
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcomeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.outcome) && !this.outcome.isEmpty() && this.outcome.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `outcome` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public getOutcomeElement(): CodeType | undefined {
    if (this.outcome === undefined) {
      return undefined;
    }
    return this.outcome as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `outcome` property.
   *
   * @param element - the `outcome` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public setOutcomeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid EnrollmentResponse.outcome; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.outcome = new EnumCodeType(element, this.remittanceOutcomeEnum);
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcomeElement(): boolean {
    return this.hasOutcomeEnumType();
  }

  /**
   * @returns the `outcome` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public getOutcome(): fhirCode | undefined {
    if (this.outcome === undefined) {
      return undefined;
    }
    return this.outcome.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `outcome` property.
   *
   * @param value - the `outcome` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RemittanceOutcomeEnum }
   */
  public setOutcome(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid EnrollmentResponse.outcome; Provided value is not an instance of fhirCode.`;
      this.outcome = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.remittanceOutcomeEnum);
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcome(): boolean {
    return this.hasOutcomeEnumType();
  }

  /**
   * @returns the `disposition` property value as a StringType object if defined; else an empty StringType object
   */
  public getDispositionElement(): StringType {
    return this.disposition ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `disposition` property.
   *
   * @param element - the `disposition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDispositionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid EnrollmentResponse.disposition; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.disposition = element;
    } else {
      this.disposition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `disposition` property exists and has a value; `false` otherwise
   */
  public hasDispositionElement(): boolean {
    return isDefined<StringType>(this.disposition) && !this.disposition.isEmpty();
  }

  /**
   * @returns the `disposition` property value as a fhirString if defined; else undefined
   */
  public getDisposition(): fhirString | undefined {
    return this.disposition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `disposition` property.
   *
   * @param value - the `disposition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisposition(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid EnrollmentResponse.disposition (${String(value)})`;
      this.disposition = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.disposition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `disposition` property exists and has a value; `false` otherwise
   */
  public hasDisposition(): boolean {
    return this.hasDispositionElement();
  }

  /**
   * @returns the `created` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getCreatedElement(): DateTimeType {
    return this.created ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `created` property.
   *
   * @param element - the `created` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreatedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid EnrollmentResponse.created; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.created = element;
    } else {
      this.created = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `created` property exists and has a value; `false` otherwise
   */
  public hasCreatedElement(): boolean {
    return isDefined<DateTimeType>(this.created) && !this.created.isEmpty();
  }

  /**
   * @returns the `created` property value as a fhirDateTime if defined; else undefined
   */
  public getCreated(): fhirDateTime | undefined {
    return this.created?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `created` property.
   *
   * @param value - the `created` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreated(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid EnrollmentResponse.created (${String(value)})`;
      this.created = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.created = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `created` property exists and has a value; `false` otherwise
   */
  public hasCreated(): boolean {
    return this.hasCreatedElement();
  }

  /**
   * @returns the `organization` property value as a Reference object; else an empty Reference object
   */
  public getOrganization(): Reference {
    return this.organization ?? new Reference();
  }

  /**
   * Assigns the provided Organization object value to the `organization` property.
   *
   * @decorator `@ReferenceTargets('EnrollmentResponse.organization', ['Organization',])`
   *
   * @param value - the `organization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EnrollmentResponse.organization', [
    'Organization',
  ])
  public setOrganization(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.organization = value;
    } else {
      this.organization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `organization` property exists and has a value; `false` otherwise
   */
  public hasOrganization(): boolean {
    return isDefined<Reference>(this.organization) && !this.organization.isEmpty();
  }

  /**
   * @returns the `requestProvider` property value as a Reference object; else an empty Reference object
   */
  public getRequestProvider(): Reference {
    return this.requestProvider ?? new Reference();
  }

  /**
   * Assigns the provided RequestProvider object value to the `requestProvider` property.
   *
   * @decorator `@ReferenceTargets('EnrollmentResponse.requestProvider', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `requestProvider` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EnrollmentResponse.requestProvider', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setRequestProvider(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.requestProvider = value;
    } else {
      this.requestProvider = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestProvider` property exists and has a value; `false` otherwise
   */
  public hasRequestProvider(): boolean {
    return isDefined<Reference>(this.requestProvider) && !this.requestProvider.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EnrollmentResponse';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.request,
      this.outcome,
      this.disposition,
      this.created,
      this.organization,
      this.requestProvider,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EnrollmentResponse {
    const dest = new EnrollmentResponse();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EnrollmentResponse): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status?.copy();
    dest.request = this.request?.copy();
    dest.outcome = this.outcome?.copy();
    dest.disposition = this.disposition?.copy();
    dest.created = this.created?.copy();
    dest.organization = this.organization?.copy();
    dest.requestProvider = this.requestProvider?.copy();
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

    if (this.hasRequest()) {
      setFhirComplexJson(this.getRequest(), 'request', jsonObj);
    }

    if (this.hasOutcomeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getOutcomeElement()!, 'outcome', jsonObj);
    }

    if (this.hasDispositionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDispositionElement(), 'disposition', jsonObj);
    }

    if (this.hasCreatedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getCreatedElement(), 'created', jsonObj);
    }

    if (this.hasOrganization()) {
      setFhirComplexJson(this.getOrganization(), 'organization', jsonObj);
    }

    if (this.hasRequestProvider()) {
      setFhirComplexJson(this.getRequestProvider(), 'requestProvider', jsonObj);
    }

    return jsonObj;
  }
}

