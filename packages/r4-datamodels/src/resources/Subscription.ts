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
 * Subscription Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Subscription
 * StructureDefinition.name: Subscription
 * StructureDefinition.description: The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 * StructureDefinition.fhirVersion: 4.0.1
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
  InstantType,
  JSON,
  PrimitiveType,
  PrimitiveTypeJson,
  StringType,
  UrlType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirInstant,
  fhirInstantSchema,
  fhirString,
  fhirStringSchema,
  fhirUrl,
  fhirUrlSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { ContactPoint, PARSABLE_DATATYPE_MAP } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { SubscriptionChannelTypeEnum } from '../code-systems/SubscriptionChannelTypeEnum';
import { SubscriptionStatusEnum } from '../code-systems/SubscriptionStatusEnum';

/**
 * Subscription Class
 *
 * @remarks
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 *
 * **FHIR Specification**
 * - **Short:** Server push subscription criteria
 * - **Definition:** The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR Subscription](http://hl7.org/fhir/StructureDefinition/Subscription)
 */
export class Subscription extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, reason: StringType | fhirString | null = null, criteria: StringType | fhirString | null = null, channel: SubscriptionChannelComponent | null = null) {
    super();

    this.subscriptionStatusEnum = new SubscriptionStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<SubscriptionStatusEnum>(
      status,
      SubscriptionStatusEnum,
      this.subscriptionStatusEnum,
      'Subscription.status',
    );

    this.reason = null;
    if (isDefined<StringType | fhirString>(reason)) {
      if (reason instanceof PrimitiveType) {
        this.setReasonElement(reason);
      } else {
        this.setReason(reason);
      }
    }

    this.criteria = null;
    if (isDefined<StringType | fhirString>(criteria)) {
      if (criteria instanceof PrimitiveType) {
        this.setCriteriaElement(criteria);
      } else {
        this.setCriteria(criteria);
      }
    }

    this.channel = null;
    if (isDefined<SubscriptionChannelComponent>(channel)) {
      this.setChannel(channel);
    }
  }

  /**
   * Parse the provided `Subscription` JSON to instantiate the Subscription data model.
   *
   * @param sourceJson - JSON representing FHIR `Subscription`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Subscription
   * @returns Subscription data model or undefined for `Subscription`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Subscription | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Subscription';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Subscription();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Subscription');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'contact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactPoint | undefined = ContactPoint.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addContact(datatype);
          }
        });
      }
    }

    fieldName = 'end';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      instance.setEndElement(datatype);
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setReason(null);
      } else {
        instance.setReasonElement(datatype);
      }
    } else {
      instance.setReason(null);
    }

    fieldName = 'criteria';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setCriteria(null);
      } else {
        instance.setCriteriaElement(datatype);
      }
    } else {
      instance.setCriteria(null);
    }

    fieldName = 'error';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setErrorElement(datatype);
    }

    fieldName = 'channel';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: SubscriptionChannelComponent | undefined = SubscriptionChannelComponent.parse(classJsonObj[fieldName]!, sourceField);
      if (component === undefined) {
        instance.setChannel(null);
      } else {
        instance.setChannel(component);
      }
    } else {
      instance.setChannel(null);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: SubscriptionStatus
   *
   * @see {@link SubscriptionStatusEnum }
   */
  private readonly subscriptionStatusEnum: SubscriptionStatusEnum;

  /**
   * Subscription.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** requested | active | error | off
   * - **Definition:** The status of the subscription, which marks the server state for managing the subscription.
   * - **Comment:** A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription from requested to active, and then to error. Either the server or the client can turn a subscription off. This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Subscription.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact details for source (e.g. troubleshooting)
   * - **Definition:** Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   * - **FHIR Type:** `ContactPoint`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contact?: ContactPoint[] | undefined;

  /**
   * Subscription.end Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When to automatically delete the subscription
   * - **Definition:** The time for the server to turn the subscription off.
   * - **Comment:** The server is permitted to deviate from this time but should observe it.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private end?: InstantType | undefined;

  /**
   * Subscription.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of why this subscription was created
   * - **Definition:** A description of why this subscription is defined.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reason: StringType | null;

  /**
   * Subscription.criteria Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Rule for server push
   * - **Definition:** The rules that the server should use to determine when to generate notifications for this subscription.
   * - **Comment:** The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private criteria: StringType | null;

  /**
   * Subscription.error Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Latest error note
   * - **Definition:** A record of the last error that occurred when the server processed a notification.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private error?: StringType | undefined;

  /**
   * Subscription.channel Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The channel on which to report matches to the criteria
   * - **Definition:** Details where to send notifications when resources are received that meet the criteria.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private channel: SubscriptionChannelComponent | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Subscription.status`;
      assertEnumCodeType<SubscriptionStatusEnum>(enumType, SubscriptionStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Subscription.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.subscriptionStatusEnum);
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
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Subscription.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.subscriptionStatusEnum);
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
   * @returns the `contact` property value as a ContactPoint array
   */
  public getContact(): ContactPoint[] {
    return this.contact ?? ([] as ContactPoint[]);
  }

  /**
   * Assigns the provided ContactPoint array value to the `contact` property.
   *
   * @param value - the `contact` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContact(value: ContactPoint[] | undefined): this {
    if (isDefinedList<ContactPoint>(value)) {
      const optErrMsg = `Invalid Subscription.contact; Provided value array has an element that is not an instance of ContactPoint.`;
      assertFhirTypeList<ContactPoint>(value, ContactPoint, optErrMsg);
      this.contact = value;
    } else {
      this.contact = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactPoint value to the `contact` array property.
   *
   * @param value - the `contact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContact(value: ContactPoint | undefined): this {
    if (isDefined<ContactPoint>(value)) {
      const optErrMsg = `Invalid Subscription.contact; Provided element is not an instance of ContactPoint.`;
      assertFhirType<ContactPoint>(value, ContactPoint, optErrMsg);
      this.initContact();
      this.contact?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contact` property exists and has a value; `false` otherwise
   */
  public hasContact(): boolean {
    return isDefinedList<ContactPoint>(this.contact) && this.contact.some((item: ContactPoint) => !item.isEmpty());
  }

  /**
   * Initialize the `contact` property
   */
  private initContact(): void {
    if(!this.hasContact()) {
      this.contact = [] as ContactPoint[];
    }
  }

  /**
   * @returns the `end` property value as a InstantType object if defined; else an empty InstantType object
   */
  public getEndElement(): InstantType {
    return this.end ?? new InstantType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `end` property.
   *
   * @param element - the `end` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEndElement(element: InstantType | undefined): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid Subscription.end; Provided element is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
      this.end = element;
    } else {
      this.end = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `end` property exists and has a value; `false` otherwise
   */
  public hasEndElement(): boolean {
    return isDefined<InstantType>(this.end) && !this.end.isEmpty();
  }

  /**
   * @returns the `end` property value as a fhirInstant if defined; else undefined
   */
  public getEnd(): fhirInstant | undefined {
    return this.end?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `end` property.
   *
   * @param value - the `end` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEnd(value: fhirInstant | undefined): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid Subscription.end (${String(value)})`;
      this.end = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    } else {
      this.end = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `end` property exists and has a value; `false` otherwise
   */
  public hasEnd(): boolean {
    return this.hasEndElement();
  }

  /**
   * @returns the `reason` property value as a StringType object if defined; else an empty StringType object
   */
  public getReasonElement(): StringType {
    return this.reason ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `reason` property.
   *
   * @param element - the `reason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReasonElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Subscription.reason; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.reason = element;
    } else {
      this.reason = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReasonElement(): boolean {
    return isDefined<StringType>(this.reason) && !this.reason.isEmpty();
  }

  /**
   * @returns the `reason` property value as a fhirString if defined; else null
   */
  public getReason(): fhirString | null {
    if (this.reason?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.reason.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `reason` property.
   *
   * @param value - the `reason` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReason(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Subscription.reason (${String(value)})`;
      this.reason = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.reason = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return this.hasReasonElement();
  }

  /**
   * @returns the `criteria` property value as a StringType object if defined; else an empty StringType object
   */
  public getCriteriaElement(): StringType {
    return this.criteria ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `criteria` property.
   *
   * @param element - the `criteria` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCriteriaElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Subscription.criteria; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.criteria = element;
    } else {
      this.criteria = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `criteria` property exists and has a value; `false` otherwise
   */
  public hasCriteriaElement(): boolean {
    return isDefined<StringType>(this.criteria) && !this.criteria.isEmpty();
  }

  /**
   * @returns the `criteria` property value as a fhirString if defined; else null
   */
  public getCriteria(): fhirString | null {
    if (this.criteria?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.criteria.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `criteria` property.
   *
   * @param value - the `criteria` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCriteria(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Subscription.criteria (${String(value)})`;
      this.criteria = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.criteria = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `criteria` property exists and has a value; `false` otherwise
   */
  public hasCriteria(): boolean {
    return this.hasCriteriaElement();
  }

  /**
   * @returns the `error` property value as a StringType object if defined; else an empty StringType object
   */
  public getErrorElement(): StringType {
    return this.error ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `error` property.
   *
   * @param element - the `error` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setErrorElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Subscription.error; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.error = element;
    } else {
      this.error = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `error` property exists and has a value; `false` otherwise
   */
  public hasErrorElement(): boolean {
    return isDefined<StringType>(this.error) && !this.error.isEmpty();
  }

  /**
   * @returns the `error` property value as a fhirString if defined; else undefined
   */
  public getError(): fhirString | undefined {
    return this.error?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `error` property.
   *
   * @param value - the `error` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setError(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Subscription.error (${String(value)})`;
      this.error = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.error = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `error` property exists and has a value; `false` otherwise
   */
  public hasError(): boolean {
    return this.hasErrorElement();
  }

  /**
   * @returns the `channel` property value as a SubscriptionChannelComponent object if defined; else an empty SubscriptionChannelComponent object
   */
  public getChannel(): SubscriptionChannelComponent {
    return this.channel ?? new SubscriptionChannelComponent();
  }

  /**
   * Assigns the provided SubscriptionChannelComponent object value to the `channel` property.
   *
   * @param value - the `channel` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setChannel(value: SubscriptionChannelComponent | undefined | null): this {
    if (isDefined<SubscriptionChannelComponent>(value)) {
      const optErrMsg = `Invalid Subscription.channel; Provided element is not an instance of SubscriptionChannelComponent.`;
      assertFhirType<SubscriptionChannelComponent>(value, SubscriptionChannelComponent, optErrMsg);
      this.channel = value;
    } else {
      this.channel = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `channel` property exists and has a value; `false` otherwise
   */
  public hasChannel(): boolean {
    return isDefined<SubscriptionChannelComponent>(this.channel) && !this.channel.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Subscription';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.status,
      this.contact,
      this.end,
      this.reason,
      this.criteria,
      this.error,
      this.channel,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.reason, this.criteria, this.channel, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Subscription {
    const dest = new Subscription();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Subscription): void {
    super.copyValues(dest);
    dest.status = this.status ? this.status.copy() : null;
    const contactList = copyListValues<ContactPoint>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    dest.end = this.end?.copy();
    dest.reason = this.reason ? this.reason.copy() : null;
    dest.criteria = this.criteria ? this.criteria.copy() : null;
    dest.error = this.error?.copy();
    dest.channel = this.channel ? this.channel.copy() : null;
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

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasContact()) {
      setFhirComplexListJson(this.getContact(), 'contact', jsonObj);
    }

    if (this.hasEndElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getEndElement(), 'end', jsonObj);
    }

    if (this.hasReasonElement()) {
      setFhirPrimitiveJson<fhirString>(this.getReasonElement(), 'reason', jsonObj);
    }

    if (this.hasCriteriaElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCriteriaElement(), 'criteria', jsonObj);
    }

    if (this.hasErrorElement()) {
      setFhirPrimitiveJson<fhirString>(this.getErrorElement(), 'error', jsonObj);
    }

    if (this.hasChannel()) {
      setFhirBackboneElementJson(this.getChannel(), 'channel', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * SubscriptionChannelComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The channel on which to report matches to the criteria
 * - **Definition:** Details where to send notifications when resources are received that meet the criteria.
 *
 * @category Data Models: Resource
 * @see [FHIR Subscription](http://hl7.org/fhir/StructureDefinition/Subscription)
 */
export class SubscriptionChannelComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.subscriptionChannelTypeEnum = new SubscriptionChannelTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<SubscriptionChannelTypeEnum>(
      type_,
      SubscriptionChannelTypeEnum,
      this.subscriptionChannelTypeEnum,
      'Subscription.channel.type',
    );
  }

  /**
   * Parse the provided `SubscriptionChannelComponent` JSON to instantiate the SubscriptionChannelComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubscriptionChannelComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubscriptionChannelComponent
   * @returns SubscriptionChannelComponent data model or undefined for `SubscriptionChannelComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubscriptionChannelComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubscriptionChannelComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubscriptionChannelComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'endpoint';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UrlType | undefined = fhirParser.parseUrlType(dtJson, dtSiblingJson);
      instance.setEndpointElement(datatype);
    }

    fieldName = 'payload';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setPayloadElement(datatype);
    }

    fieldName = 'header';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addHeaderElement(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: SubscriptionChannelType
   *
   * @see {@link SubscriptionChannelTypeEnum }
   */
  private readonly subscriptionChannelTypeEnum: SubscriptionChannelTypeEnum;

  /**
   * Subscription.channel.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** rest-hook | websocket | email | sms | message
   * - **Definition:** The type of channel to send notifications on.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SubscriptionChannelTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * Subscription.channel.endpoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the channel points to
   * - **Definition:** The url that describes the actual end-point to send messages to.
   * - **Comment:** For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs).
   * - **FHIR Type:** `url`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private endpoint?: UrlType | undefined;

  /**
   * Subscription.channel.payload Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** MIME type to send, or omit for no payload
   * - **Definition:** The mime type to send the payload in - either application/fhir+xml, or application/fhir+json. If the payload is not present, then there is no payload in the notification, just a notification. The mime type "text/plain" may also be used for Email and SMS subscriptions.
   * - **Comment:** Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private payload?: CodeType | undefined;

  /**
   * Subscription.channel.header Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Usage depends on the channel type
   * - **Definition:** Additional headers / information to send as part of the notification.
   * - **Comment:** Exactly what these mean depend on the channel type. They can convey additional information to the recipient and/or meet security requirements; for example, support of multiple headers in the outgoing notifications for rest-hook type subscriptions.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private header?: StringType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link SubscriptionChannelTypeEnum }
   */
  public getTypeEnumType(): EnumCodeType | null {
    return this.type_;
  }

  /**
   * Assigns the provided EnumCodeType value to the `type_` property.
   *
   * @param enumType - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SubscriptionChannelTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Subscription.channel.type`;
      assertEnumCodeType<SubscriptionChannelTypeEnum>(enumType, SubscriptionChannelTypeEnum, errMsgPrefix);
      this.type_ = enumType;
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.type_) && !this.type_.isEmpty() && this.type_.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `type_` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link SubscriptionChannelTypeEnum }
   */
  public getTypeElement(): CodeType | null {
    if (this.type_ === null) {
      return null;
    }
    return this.type_ as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `type_` property.
   *
   * @param element - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SubscriptionChannelTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Subscription.channel.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.subscriptionChannelTypeEnum);
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeElement(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `type_` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link SubscriptionChannelTypeEnum }
   */
  public getType(): fhirCode | null {
    if (this.type_ === null) {
      return null;
    }
    return this.type_.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `type_` property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SubscriptionChannelTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Subscription.channel.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.subscriptionChannelTypeEnum);
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `endpoint` property value as a UrlType object if defined; else an empty UrlType object
   */
  public getEndpointElement(): UrlType {
    return this.endpoint ?? new UrlType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `endpoint` property.
   *
   * @param element - the `endpoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEndpointElement(element: UrlType | undefined): this {
    if (isDefined<UrlType>(element)) {
      const optErrMsg = `Invalid Subscription.channel.endpoint; Provided element is not an instance of UrlType.`;
      assertFhirType<UrlType>(element, UrlType, optErrMsg);
      this.endpoint = element;
    } else {
      this.endpoint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `endpoint` property exists and has a value; `false` otherwise
   */
  public hasEndpointElement(): boolean {
    return isDefined<UrlType>(this.endpoint) && !this.endpoint.isEmpty();
  }

  /**
   * @returns the `endpoint` property value as a fhirUrl if defined; else undefined
   */
  public getEndpoint(): fhirUrl | undefined {
    return this.endpoint?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `endpoint` property.
   *
   * @param value - the `endpoint` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEndpoint(value: fhirUrl | undefined): this {
    if (isDefined<fhirUrl>(value)) {
      const optErrMsg = `Invalid Subscription.channel.endpoint (${String(value)})`;
      this.endpoint = new UrlType(parseFhirPrimitiveData(value, fhirUrlSchema, optErrMsg));
    } else {
      this.endpoint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `endpoint` property exists and has a value; `false` otherwise
   */
  public hasEndpoint(): boolean {
    return this.hasEndpointElement();
  }

  /**
   * @returns the `payload` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getPayloadElement(): CodeType {
    return this.payload ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `payload` property.
   *
   * @param element - the `payload` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPayloadElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Subscription.channel.payload; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.payload = element;
    } else {
      this.payload = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `payload` property exists and has a value; `false` otherwise
   */
  public hasPayloadElement(): boolean {
    return isDefined<CodeType>(this.payload) && !this.payload.isEmpty();
  }

  /**
   * @returns the `payload` property value as a fhirCode if defined; else undefined
   */
  public getPayload(): fhirCode | undefined {
    return this.payload?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `payload` property.
   *
   * @param value - the `payload` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPayload(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Subscription.channel.payload (${String(value)})`;
      this.payload = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.payload = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `payload` property exists and has a value; `false` otherwise
   */
  public hasPayload(): boolean {
    return this.hasPayloadElement();
  }

  /**
   * @returns the `header` property value as a StringType array
   */
  public getHeaderElement(): StringType[] {
    return this.header ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `header` property.
   *
   * @param element - the `header` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHeaderElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid Subscription.channel.header; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.header = element;
    } else {
      this.header = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `header` array property.
   *
   * @param element - the `header` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addHeaderElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Subscription.channel.header; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initHeader();
      this.header?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `header` property exists and has a value; `false` otherwise
   */
  public hasHeaderElement(): boolean {
    return isDefinedList<StringType>(this.header) && this.header.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `header` property value as a fhirString array
   */
  public getHeader(): fhirString[] {
    this.initHeader();
    const headerValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.header!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        headerValues.push(value);
      }
    }
    return headerValues;
  }

  /**
   * Assigns the provided primitive value array to the `header` property.
   *
   * @param value - the `header` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHeader(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const headerElements = [] as StringType[];
      for (const headerValue of value) {
        const optErrMsg = `Invalid Subscription.channel.header array item (${String(headerValue)})`;
        const element = new StringType(parseFhirPrimitiveData(headerValue, fhirStringSchema, optErrMsg));
        headerElements.push(element);
      }
      this.header = headerElements;
    } else {
      this.header = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `header` array property.
   *
   * @param value - the `header` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addHeader(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Subscription.channel.header array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initHeader();
      this.addHeaderElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `header` property exists and has a value; `false` otherwise
   */
  public hasHeader(): boolean {
    return this.hasHeaderElement();
  }

  /**
   * Initialize the `header` property
   */
  private initHeader(): void {
    if (!this.hasHeader()) {
      this.header = [] as StringType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Subscription.channel';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.endpoint,
      this.payload,
      this.header,
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
  public override copy(): SubscriptionChannelComponent {
    const dest = new SubscriptionChannelComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubscriptionChannelComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.endpoint = this.endpoint?.copy();
    dest.payload = this.payload?.copy();
    const headerList = copyListValues<StringType>(this.header);
    dest.header = headerList.length === 0 ? undefined : headerList;
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    }

    if (this.hasEndpointElement()) {
      setFhirPrimitiveJson<fhirUrl>(this.getEndpointElement(), 'endpoint', jsonObj);
    }

    if (this.hasPayloadElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getPayloadElement(), 'payload', jsonObj);
    }

    if (this.hasHeader()) {
      setFhirPrimitiveListJson(this.getHeaderElement(), 'header', jsonObj);
    }

    return jsonObj;
  }
}
