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
 * PaymentNotice Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/PaymentNotice
 * StructureDefinition.name: PaymentNotice
 * StructureDefinition.description: This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  CodeType,
  DateTimeType,
  DateType,
  DomainResource,
  EnumCodeType,
  FhirParser,
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
  fhirDate,
  fhirDateSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, Money, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { FmStatusEnum } from '../code-systems/FmStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * PaymentNotice Class
 *
 * @remarks
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 *
 * **FHIR Specification**
 * - **Short:** PaymentNotice request
 * - **Definition:** This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR PaymentNotice](http://hl7.org/fhir/StructureDefinition/PaymentNotice)
 */
export class PaymentNotice extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, created: DateTimeType | fhirDateTime | null = null, payment: Reference | null = null, recipient: Reference | null = null, amount: Money | null = null) {
    super();

    this.fmStatusEnum = new FmStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<FmStatusEnum>(
      status,
      FmStatusEnum,
      this.fmStatusEnum,
      'PaymentNotice.status',
    );

    this.created = null;
    if (isDefined<DateTimeType | fhirDateTime>(created)) {
      if (created instanceof PrimitiveType) {
        this.setCreatedElement(created);
      } else {
        this.setCreated(created);
      }
    }

    this.payment = null;
    if (isDefined<Reference>(payment)) {
      this.setPayment(payment);
    }

    this.recipient = null;
    if (isDefined<Reference>(recipient)) {
      this.setRecipient(recipient);
    }

    this.amount = null;
    if (isDefined<Money>(amount)) {
      this.setAmount(amount);
    }
  }

  /**
   * Parse the provided `PaymentNotice` JSON to instantiate the PaymentNotice data model.
   *
   * @param sourceJson - JSON representing FHIR `PaymentNotice`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PaymentNotice
   * @returns PaymentNotice data model or undefined for `PaymentNotice`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): PaymentNotice | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PaymentNotice';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PaymentNotice();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'PaymentNotice');
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

    fieldName = 'request';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequest(datatype);
    }

    fieldName = 'response';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setResponse(datatype);
    }

    fieldName = 'created';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setCreated(null);
      } else {
        instance.setCreatedElement(datatype);
      }
    } else {
      instance.setCreated(null);
    }

    fieldName = 'provider';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProvider(datatype);
    }

    fieldName = 'payment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setPayment(null);
      } else {
        instance.setPayment(datatype);
      }
    } else {
      instance.setPayment(null);
    }

    fieldName = 'paymentDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setPaymentDateElement(datatype);
    }

    fieldName = 'payee';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPayee(datatype);
    }

    fieldName = 'recipient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setRecipient(null);
      } else {
        instance.setRecipient(datatype);
      }
    } else {
      instance.setRecipient(null);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setAmount(null);
      } else {
        instance.setAmount(datatype);
      }
    } else {
      instance.setAmount(null);
    }

    fieldName = 'paymentStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPaymentStatus(datatype);
    }

    return instance;
  }

  /**
   * PaymentNotice.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for the payment noctice
   * - **Definition:** A unique identifier assigned to this payment notice.
   * - **Requirements:** Allows payment notices to be distinguished and referenced.
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
   * PaymentNotice.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | cancelled | draft | entered-in-error
   * - **Definition:** The status of the resource instance.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **Requirements:** Need to track the status of the resource as \'draft\' resources may undergo further edits while \'active\' resources are immutable and may only have their status changed to \'cancelled\'.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * PaymentNotice.request Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request reference
   * - **Definition:** Reference of resource for which payment is being made.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private request?: Reference | undefined;

  /**
   * PaymentNotice.response Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Response reference
   * - **Definition:** Reference of response to resource for which payment is being made.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private response?: Reference | undefined;

  /**
   * PaymentNotice.created Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Creation date
   * - **Definition:** The date when this resource was created.
   * - **Requirements:** Need to record a timestamp for use by both the recipient and the issuer.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private created: DateTimeType | null;

  /**
   * PaymentNotice.provider Element
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
  private provider?: Reference | undefined;

  /**
   * PaymentNotice.payment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Payment reference
   * - **Definition:** A reference to the payment which is the subject of this notice.
   * - **Requirements:** Need to identify the actual payment.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/PaymentReconciliation',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private payment: Reference | null;

  /**
   * PaymentNotice.paymentDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Payment or clearing date
   * - **Definition:** The date when the above payment action occurred.
   * - **Requirements:** Need to convey the date when the action being notified occurred.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private paymentDate?: DateType | undefined;

  /**
   * PaymentNotice.payee Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Party being paid
   * - **Definition:** The party who will receive or has received payment that is the subject of this notification.
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
  private payee?: Reference | undefined;

  /**
   * PaymentNotice.recipient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Party being notified
   * - **Definition:** The party who is notified of the payment status.
   * - **Requirements:** Need to identified the recipient of the notification.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private recipient: Reference | null;

  /**
   * PaymentNotice.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Monetary amount of the payment
   * - **Definition:** The amount sent to the payee.
   * - **Requirements:** Provided for validation purposes.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount: Money | null;

  /**
   * PaymentNotice.paymentStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Issued or cleared Status of the payment
   * - **Definition:** A code indicating whether payment has been sent or cleared.
   * - **Comment:** Typically paid: payment sent, cleared: payment received.
   * - **Requirements:** The purpose of the notification.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private paymentStatus?: CodeableConcept | undefined;

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
      const optErrMsg = `Invalid PaymentNotice.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid PaymentNotice.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid PaymentNotice.status`;
      assertEnumCodeType<FmStatusEnum>(enumType, FmStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid PaymentNotice.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.fmStatusEnum);
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
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
   * @see CodeSystem Enumeration: {@link FmStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid PaymentNotice.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fmStatusEnum);
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
   * @returns the `request` property value as a Reference object; else an empty Reference object
   */
  public getRequest(): Reference {
    return this.request ?? new Reference();
  }

  /**
   * Assigns the provided Request object value to the `request` property.
   *
   * @decorator `@ReferenceTargets('PaymentNotice.request', ['Resource',])`
   *
   * @param value - the `request` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentNotice.request', [
    'Resource',
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
   * @returns the `response` property value as a Reference object; else an empty Reference object
   */
  public getResponse(): Reference {
    return this.response ?? new Reference();
  }

  /**
   * Assigns the provided Response object value to the `response` property.
   *
   * @decorator `@ReferenceTargets('PaymentNotice.response', ['Resource',])`
   *
   * @param value - the `response` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentNotice.response', [
    'Resource',
  ])
  public setResponse(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.response = value;
    } else {
      this.response = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `response` property exists and has a value; `false` otherwise
   */
  public hasResponse(): boolean {
    return isDefined<Reference>(this.response) && !this.response.isEmpty();
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
  public setCreatedElement(element: DateTimeType | undefined | null): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid PaymentNotice.created; Provided value is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.created = element;
    } else {
      this.created = null;
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
   * @returns the `created` property value as a fhirDateTime if defined; else null
   */
  public getCreated(): fhirDateTime | null {
    if (this.created?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.created.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `created` property.
   *
   * @param value - the `created` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreated(value: fhirDateTime | undefined | null): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid PaymentNotice.created (${String(value)})`;
      this.created = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.created = null;
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
   * @returns the `provider` property value as a Reference object; else an empty Reference object
   */
  public getProvider(): Reference {
    return this.provider ?? new Reference();
  }

  /**
   * Assigns the provided Provider object value to the `provider` property.
   *
   * @decorator `@ReferenceTargets('PaymentNotice.provider', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `provider` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentNotice.provider', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setProvider(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.provider = value;
    } else {
      this.provider = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `provider` property exists and has a value; `false` otherwise
   */
  public hasProvider(): boolean {
    return isDefined<Reference>(this.provider) && !this.provider.isEmpty();
  }

  /**
   * @returns the `payment` property value as a Reference object if defined; else an empty Reference object
   */
  public getPayment(): Reference {
    return this.payment ?? new Reference();
  }

  /**
   * Assigns the provided Payment object value to the `payment` property.
   *
   * @decorator `@ReferenceTargets('PaymentNotice.payment', ['PaymentReconciliation',])`
   *
   * @param value - the `payment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentNotice.payment', [
    'PaymentReconciliation',
  ])
  public setPayment(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.payment = value;
    } else {
      this.payment = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `payment` property exists and has a value; `false` otherwise
   */
  public hasPayment(): boolean {
    return isDefined<Reference>(this.payment) && !this.payment.isEmpty();
  }

  /**
   * @returns the `paymentDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getPaymentDateElement(): DateType {
    return this.paymentDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `paymentDate` property.
   *
   * @param element - the `paymentDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaymentDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid PaymentNotice.paymentDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.paymentDate = element;
    } else {
      this.paymentDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paymentDate` property exists and has a value; `false` otherwise
   */
  public hasPaymentDateElement(): boolean {
    return isDefined<DateType>(this.paymentDate) && !this.paymentDate.isEmpty();
  }

  /**
   * @returns the `paymentDate` property value as a fhirDate if defined; else undefined
   */
  public getPaymentDate(): fhirDate | undefined {
    return this.paymentDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `paymentDate` property.
   *
   * @param value - the `paymentDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaymentDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid PaymentNotice.paymentDate (${String(value)})`;
      this.paymentDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.paymentDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paymentDate` property exists and has a value; `false` otherwise
   */
  public hasPaymentDate(): boolean {
    return this.hasPaymentDateElement();
  }

  /**
   * @returns the `payee` property value as a Reference object; else an empty Reference object
   */
  public getPayee(): Reference {
    return this.payee ?? new Reference();
  }

  /**
   * Assigns the provided Payee object value to the `payee` property.
   *
   * @decorator `@ReferenceTargets('PaymentNotice.payee', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `payee` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentNotice.payee', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setPayee(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.payee = value;
    } else {
      this.payee = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `payee` property exists and has a value; `false` otherwise
   */
  public hasPayee(): boolean {
    return isDefined<Reference>(this.payee) && !this.payee.isEmpty();
  }

  /**
   * @returns the `recipient` property value as a Reference object if defined; else an empty Reference object
   */
  public getRecipient(): Reference {
    return this.recipient ?? new Reference();
  }

  /**
   * Assigns the provided Recipient object value to the `recipient` property.
   *
   * @decorator `@ReferenceTargets('PaymentNotice.recipient', ['Organization',])`
   *
   * @param value - the `recipient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('PaymentNotice.recipient', [
    'Organization',
  ])
  public setRecipient(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.recipient = value;
    } else {
      this.recipient = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `recipient` property exists and has a value; `false` otherwise
   */
  public hasRecipient(): boolean {
    return isDefined<Reference>(this.recipient) && !this.recipient.isEmpty();
  }

  /**
   * @returns the `amount` property value as a Money object if defined; else an empty Money object
   */
  public getAmount(): Money {
    return this.amount ?? new Money();
  }

  /**
   * Assigns the provided Money object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Money | undefined | null): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid PaymentNotice.amount; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.amount = value;
    } else {
      this.amount = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<Money>(this.amount) && !this.amount.isEmpty();
  }

  /**
   * @returns the `paymentStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPaymentStatus(): CodeableConcept {
    return this.paymentStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PaymentStatus object value to the `paymentStatus` property.
   *
   * @param value - the `paymentStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPaymentStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PaymentNotice.paymentStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.paymentStatus = value;
    } else {
      this.paymentStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paymentStatus` property exists and has a value; `false` otherwise
   */
  public hasPaymentStatus(): boolean {
    return isDefined<CodeableConcept>(this.paymentStatus) && !this.paymentStatus.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PaymentNotice';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.request,
      this.response,
      this.created,
      this.provider,
      this.payment,
      this.paymentDate,
      this.payee,
      this.recipient,
      this.amount,
      this.paymentStatus,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.created, this.payment, this.recipient, this.amount, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PaymentNotice {
    const dest = new PaymentNotice();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PaymentNotice): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.request = this.request?.copy();
    dest.response = this.response?.copy();
    dest.created = this.created ? this.created.copy() : null;
    dest.provider = this.provider?.copy();
    dest.payment = this.payment ? this.payment.copy() : null;
    dest.paymentDate = this.paymentDate?.copy();
    dest.payee = this.payee?.copy();
    dest.recipient = this.recipient ? this.recipient.copy() : null;
    dest.amount = this.amount ? this.amount.copy() : null;
    dest.paymentStatus = this.paymentStatus?.copy();
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

    if (this.hasResponse()) {
      setFhirComplexJson(this.getResponse(), 'response', jsonObj);
    }

    if (this.hasCreatedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getCreatedElement(), 'created', jsonObj);
    }

    if (this.hasProvider()) {
      setFhirComplexJson(this.getProvider(), 'provider', jsonObj);
    }

    if (this.hasPayment()) {
      setFhirComplexJson(this.getPayment(), 'payment', jsonObj);
    }

    if (this.hasPaymentDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getPaymentDateElement(), 'paymentDate', jsonObj);
    }

    if (this.hasPayee()) {
      setFhirComplexJson(this.getPayee(), 'payee', jsonObj);
    }

    if (this.hasRecipient()) {
      setFhirComplexJson(this.getRecipient(), 'recipient', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    if (this.hasPaymentStatus()) {
      setFhirComplexJson(this.getPaymentStatus(), 'paymentStatus', jsonObj);
    }

    return jsonObj;
  }
}

