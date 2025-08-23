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
 * SubscriptionStatus Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/SubscriptionStatus
 * StructureDefinition.name: SubscriptionStatus
 * StructureDefinition.description: The SubscriptionStatus resource describes the state of a Subscription during notifications. It is not persisted.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  CanonicalType,
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  InstantType,
  Integer64Type,
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
  fhirCanonical,
  fhirCanonicalSchema,
  fhirCode,
  fhirCodeSchema,
  fhirInstant,
  fhirInstantSchema,
  fhirInteger64,
  fhirInteger64Schema,
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
import { CodeableConcept, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { SubscriptionNotificationTypeEnum } from '../code-systems/SubscriptionNotificationTypeEnum';
import { SubscriptionStatusEnum } from '../code-systems/SubscriptionStatusEnum';

/**
 * SubscriptionStatus Class
 *
 * @remarks
 * The SubscriptionStatus resource describes the state of a Subscription during notifications. It is not persisted.
 *
 * **FHIR Specification**
 * - **Short:** Status information about a Subscription provided during event notification
 * - **Definition:** The SubscriptionStatus resource describes the state of a Subscription during notifications.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR SubscriptionStatus](http://hl7.org/fhir/StructureDefinition/SubscriptionStatus)
 */
export class SubscriptionStatus extends DomainResource implements IDomainResource {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null, subscription: Reference | null = null) {
    super();

    this.subscriptionStatusEnum = new SubscriptionStatusEnum();
    this.subscriptionNotificationTypeEnum = new SubscriptionNotificationTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<SubscriptionNotificationTypeEnum>(
      type_,
      SubscriptionNotificationTypeEnum,
      this.subscriptionNotificationTypeEnum,
      'SubscriptionStatus.type',
    );

    this.subscription = null;
    if (isDefined<Reference>(subscription)) {
      this.setSubscription(subscription);
    }
  }

  /**
   * Parse the provided `SubscriptionStatus` JSON to instantiate the SubscriptionStatus data model.
   *
   * @param sourceJson - JSON representing FHIR `SubscriptionStatus`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubscriptionStatus
   * @returns SubscriptionStatus data model or undefined for `SubscriptionStatus`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): SubscriptionStatus | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubscriptionStatus';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubscriptionStatus();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'SubscriptionStatus');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

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
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'eventsSinceSubscriptionStart';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: Integer64Type | undefined = fhirParser.parseInteger64Type(dtJson, dtSiblingJson);
      instance.setEventsSinceSubscriptionStartElement(datatype);
    }

    fieldName = 'notificationEvent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubscriptionStatusNotificationEventComponent | undefined = SubscriptionStatusNotificationEventComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addNotificationEvent(component);
        }
      });
    }

    fieldName = 'subscription';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSubscription(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'topic';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setTopicElement(datatype);
    }

    fieldName = 'error';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addError(datatype);
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
   * FHIR CodeSystem: SubscriptionStatus
   *
   * @see {@link SubscriptionStatusEnum }
   */
  private readonly subscriptionStatusEnum: SubscriptionStatusEnum;

  /**
   * SubscriptionStatus.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** requested | active | error | off | entered-in-error
   * - **Definition:** The status of the subscription, which marks the server state for managing the subscription.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: SubscriptionNotificationType
   *
   * @see {@link SubscriptionNotificationTypeEnum }
   */
  private readonly subscriptionNotificationTypeEnum: SubscriptionNotificationTypeEnum;

  /**
   * SubscriptionStatus.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** handshake | heartbeat | event-notification | query-status | query-event
   * - **Definition:** The type of event being conveyed with this notification.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** Not known why this is labelled a modifier
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SubscriptionNotificationTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * SubscriptionStatus.eventsSinceSubscriptionStart Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Events since the Subscription was created
   * - **Definition:** The total number of actual events which have been generated since the Subscription was created (inclusive of this notification) - regardless of how many have been successfully communicated.  This number is NOT incremented for handshake and heartbeat notifications.
   * - **FHIR Type:** `integer64`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private eventsSinceSubscriptionStart?: Integer64Type | undefined;

  /**
   * SubscriptionStatus.notificationEvent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Detailed information about any events relevant to this notification
   * - **Definition:** Detailed information about events relevant to this subscription notification.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private notificationEvent?: SubscriptionStatusNotificationEventComponent[] | undefined;

  /**
   * SubscriptionStatus.subscription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to the Subscription responsible for this notification
   * - **Definition:** The reference to the Subscription which generated this notification.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Subscription',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subscription: Reference | null;

  /**
   * SubscriptionStatus.topic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to the SubscriptionTopic this notification relates to
   * - **Definition:** The reference to the SubscriptionTopic for the Subscription which generated this notification.
   * - **Comment:** This value SHOULD NOT be present when using `empty` payloads, MAY be present when using `id-only` payloads, and SHOULD be present when using `full-resource` payloads.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SubscriptionTopic',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private topic?: CanonicalType | undefined;

  /**
   * SubscriptionStatus.error Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** List of errors on the subscription
   * - **Definition:** A record of errors that occurred when the server processed a notification.
   * - **Comment:** Recommended practice: clear errors when status is updated.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private error?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid SubscriptionStatus.status';
      assertEnumCodeType<SubscriptionStatusEnum>(enumType, SubscriptionStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SubscriptionStatus.status; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.subscriptionStatusEnum);
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
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link SubscriptionStatusEnum }
   */
  public setStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid SubscriptionStatus.status; Provided value is not an instance of fhirCode.`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.subscriptionStatusEnum);
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
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link SubscriptionNotificationTypeEnum }
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
   * @see CodeSystem Enumeration: {@link SubscriptionNotificationTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `SubscriptionStatus.type is required`);
    const errMsgPrefix = `Invalid SubscriptionStatus.type`;
    assertEnumCodeType<SubscriptionNotificationTypeEnum>(enumType, SubscriptionNotificationTypeEnum, errMsgPrefix);
    this.type_ = enumType;
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
   * @see CodeSystem Enumeration: {@link SubscriptionNotificationTypeEnum }
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
   * @see CodeSystem Enumeration: {@link SubscriptionNotificationTypeEnum }
   */
  public setTypeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `SubscriptionStatus.type is required`);
    const optErrMsg = `Invalid SubscriptionStatus.type; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.type_ = new EnumCodeType(element, this.subscriptionNotificationTypeEnum);
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
   * @see CodeSystem Enumeration: {@link SubscriptionNotificationTypeEnum }
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
   * @see CodeSystem Enumeration: {@link SubscriptionNotificationTypeEnum }
   */
  public setType(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `SubscriptionStatus.type is required`);
    const optErrMsg = `Invalid SubscriptionStatus.type (${String(value)})`;
    this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.subscriptionNotificationTypeEnum);
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `eventsSinceSubscriptionStart` property value as a Integer64Type object if defined; else an empty Integer64Type object
   */
  public getEventsSinceSubscriptionStartElement(): Integer64Type {
    return this.eventsSinceSubscriptionStart ?? new Integer64Type();
  }

  /**
   * Assigns the provided PrimitiveType value to the `eventsSinceSubscriptionStart` property.
   *
   * @param element - the `eventsSinceSubscriptionStart` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEventsSinceSubscriptionStartElement(element: Integer64Type | undefined): this {
    if (isDefined<Integer64Type>(element)) {
      const optErrMsg = `Invalid SubscriptionStatus.eventsSinceSubscriptionStart; Provided element is not an instance of Integer64Type.`;
      assertFhirType<Integer64Type>(element, Integer64Type, optErrMsg);
      this.eventsSinceSubscriptionStart = element;
    } else {
      this.eventsSinceSubscriptionStart = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `eventsSinceSubscriptionStart` property exists and has a value; `false` otherwise
   */
  public hasEventsSinceSubscriptionStartElement(): boolean {
    return isDefined<Integer64Type>(this.eventsSinceSubscriptionStart) && !this.eventsSinceSubscriptionStart.isEmpty();
  }

  /**
   * @returns the `eventsSinceSubscriptionStart` property value as a fhirInteger64 if defined; else undefined
   */
  public getEventsSinceSubscriptionStart(): fhirInteger64 | undefined {
    return this.eventsSinceSubscriptionStart?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `eventsSinceSubscriptionStart` property.
   *
   * @param value - the `eventsSinceSubscriptionStart` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEventsSinceSubscriptionStart(value: fhirInteger64 | undefined): this {
    if (isDefined<fhirInteger64>(value)) {
      const optErrMsg = `Invalid SubscriptionStatus.eventsSinceSubscriptionStart (${String(value)})`;
      this.eventsSinceSubscriptionStart = new Integer64Type(parseFhirPrimitiveData(value, fhirInteger64Schema, optErrMsg));
    } else {
      this.eventsSinceSubscriptionStart = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `eventsSinceSubscriptionStart` property exists and has a value; `false` otherwise
   */
  public hasEventsSinceSubscriptionStart(): boolean {
    return this.hasEventsSinceSubscriptionStartElement();
  }

  /**
   * @returns the `notificationEvent` property value as a SubscriptionStatusNotificationEventComponent array
   */
  public getNotificationEvent(): SubscriptionStatusNotificationEventComponent[] {
    return this.notificationEvent ?? ([] as SubscriptionStatusNotificationEventComponent[]);
  }

  /**
   * Assigns the provided SubscriptionStatusNotificationEventComponent array value to the `notificationEvent` property.
   *
   * @param value - the `notificationEvent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNotificationEvent(value: SubscriptionStatusNotificationEventComponent[] | undefined): this {
    if (isDefinedList<SubscriptionStatusNotificationEventComponent>(value)) {
      const optErrMsg = `Invalid SubscriptionStatus.notificationEvent; Provided value array has an element that is not an instance of SubscriptionStatusNotificationEventComponent.`;
      assertFhirTypeList<SubscriptionStatusNotificationEventComponent>(value, SubscriptionStatusNotificationEventComponent, optErrMsg);
      this.notificationEvent = value;
    } else {
      this.notificationEvent = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubscriptionStatusNotificationEventComponent value to the `notificationEvent` array property.
   *
   * @param value - the `notificationEvent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNotificationEvent(value: SubscriptionStatusNotificationEventComponent | undefined): this {
    if (isDefined<SubscriptionStatusNotificationEventComponent>(value)) {
      const optErrMsg = `Invalid SubscriptionStatus.notificationEvent; Provided element is not an instance of SubscriptionStatusNotificationEventComponent.`;
      assertFhirType<SubscriptionStatusNotificationEventComponent>(value, SubscriptionStatusNotificationEventComponent, optErrMsg);
      this.initNotificationEvent();
      this.notificationEvent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `notificationEvent` property exists and has a value; `false` otherwise
   */
  public hasNotificationEvent(): boolean {
    return isDefinedList<SubscriptionStatusNotificationEventComponent>(this.notificationEvent) && this.notificationEvent.some((item: SubscriptionStatusNotificationEventComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `notificationEvent` property
   */
  private initNotificationEvent(): void {
    if(!this.hasNotificationEvent()) {
      this.notificationEvent = [] as SubscriptionStatusNotificationEventComponent[];
    }
  }

  /**
   * @returns the `subscription` property value as a Reference object if defined; else null
   */
  public getSubscription(): Reference | null {
    return this.subscription;
  }

  /**
   * Assigns the provided Subscription object value to the `subscription` property.
   *
   * @decorator `@ReferenceTargets('SubscriptionStatus.subscription', ['Subscription',])`
   *
   * @param value - the `subscription` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubscriptionStatus.subscription', [
    'Subscription',
  ])
  public setSubscription(value: Reference): this {
    assertIsDefined<Reference>(value, `SubscriptionStatus.subscription is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.subscription = value;
    return this;
  }

  /**
   * @returns `true` if the `subscription` property exists and has a value; `false` otherwise
   */
  public hasSubscription(): boolean {
    return isDefined<Reference>(this.subscription) && !this.subscription.isEmpty();
  }

  /**
   * @returns the `topic` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getTopicElement(): CanonicalType {
    return this.topic ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `topic` property.
   *
   * @param element - the `topic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTopicElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid SubscriptionStatus.topic; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.topic = element;
    } else {
      this.topic = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `topic` property exists and has a value; `false` otherwise
   */
  public hasTopicElement(): boolean {
    return isDefined<CanonicalType>(this.topic) && !this.topic.isEmpty();
  }

  /**
   * @returns the `topic` property value as a fhirCanonical if defined; else undefined
   */
  public getTopic(): fhirCanonical | undefined {
    return this.topic?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `topic` property.
   *
   * @param value - the `topic` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTopic(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid SubscriptionStatus.topic (${String(value)})`;
      this.topic = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.topic = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `topic` property exists and has a value; `false` otherwise
   */
  public hasTopic(): boolean {
    return this.hasTopicElement();
  }

  /**
   * @returns the `error` property value as a CodeableConcept array
   */
  public getError(): CodeableConcept[] {
    return this.error ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `error` property.
   *
   * @param value - the `error` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setError(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubscriptionStatus.error; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.error = value;
    } else {
      this.error = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `error` array property.
   *
   * @param value - the `error` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addError(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubscriptionStatus.error; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initError();
      this.error?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `error` property exists and has a value; `false` otherwise
   */
  public hasError(): boolean {
    return isDefinedList<CodeableConcept>(this.error) && this.error.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `error` property
   */
  private initError(): void {
    if(!this.hasError()) {
      this.error = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubscriptionStatus';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.status,
      this.type_,
      this.eventsSinceSubscriptionStart,
      this.notificationEvent,
      this.subscription,
      this.topic,
      this.error,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubscriptionStatus {
    const dest = new SubscriptionStatus();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubscriptionStatus): void {
    super.copyValues(dest);
    dest.status = this.status?.copy();
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.eventsSinceSubscriptionStart = this.eventsSinceSubscriptionStart?.copy();
    const notificationEventList = copyListValues<SubscriptionStatusNotificationEventComponent>(this.notificationEvent);
    dest.notificationEvent = notificationEventList.length === 0 ? undefined : notificationEventList;
    dest.subscription = this.subscription ? this.subscription.copy() : null;
    dest.topic = this.topic?.copy();
    const errorList = copyListValues<CodeableConcept>(this.error);
    dest.error = errorList.length === 0 ? undefined : errorList;
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

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`SubscriptionStatus.type`);
    }

    if (this.hasEventsSinceSubscriptionStartElement()) {
      setFhirPrimitiveJson<fhirInteger64>(this.getEventsSinceSubscriptionStartElement(), 'eventsSinceSubscriptionStart', jsonObj);
    }

    if (this.hasNotificationEvent()) {
      setFhirBackboneElementListJson(this.getNotificationEvent(), 'notificationEvent', jsonObj);
    }

    if (this.hasSubscription()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getSubscription()!, 'subscription', jsonObj);
    } else {
      missingReqdProperties.push(`SubscriptionStatus.subscription`);
    }

    if (this.hasTopicElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getTopicElement(), 'topic', jsonObj);
    }

    if (this.hasError()) {
      setFhirComplexListJson(this.getError(), 'error', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * SubscriptionStatusNotificationEventComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Detailed information about any events relevant to this notification
 * - **Definition:** Detailed information about events relevant to this subscription notification.
 *
 * @category Data Models: Resource
 * @see [FHIR SubscriptionStatus](http://hl7.org/fhir/StructureDefinition/SubscriptionStatus)
 */
export class SubscriptionStatusNotificationEventComponent extends BackboneElement implements IBackboneElement {
  constructor(eventNumber: Integer64Type | fhirInteger64 | null = null) {
    super();

    this.eventNumber = null;
    if (isDefined<Integer64Type | fhirInteger64>(eventNumber)) {
      if (eventNumber instanceof PrimitiveType) {
        this.setEventNumberElement(eventNumber);
      } else {
        this.setEventNumber(eventNumber);
      }
    }
  }

  /**
   * Parse the provided `SubscriptionStatusNotificationEventComponent` JSON to instantiate the SubscriptionStatusNotificationEventComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubscriptionStatusNotificationEventComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubscriptionStatusNotificationEventComponent
   * @returns SubscriptionStatusNotificationEventComponent data model or undefined for `SubscriptionStatusNotificationEventComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubscriptionStatusNotificationEventComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubscriptionStatusNotificationEventComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubscriptionStatusNotificationEventComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'eventNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: Integer64Type | undefined = fhirParser.parseInteger64Type(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setEventNumberElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'timestamp';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      instance.setTimestampElement(datatype);
    }

    fieldName = 'focus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFocus(datatype);
    }

    fieldName = 'additionalContext';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAdditionalContext(datatype);
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
   * SubscriptionStatus.notificationEvent.eventNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Sequencing index of this event
   * - **Definition:** Either the sequential number of this event in this subscription context or a relative event number for this notification.
   * - **Comment:** In subscriptions where delivery of notifications IS NOT guaranteed (e.g., REST-Hook), this number is a unique and monotonically-increasing event number for a subscription. In channels where delivery of notifications IS guaranteed, this number is a relative index for the events present in the notification (e.g., 1, 2, etc.).
   * - **FHIR Type:** `integer64`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private eventNumber: Integer64Type | null;

  /**
   * SubscriptionStatus.notificationEvent.timestamp Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The instant this event occurred
   * - **Definition:** The actual time this event occurred on the server.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private timestamp?: InstantType | undefined;

  /**
   * SubscriptionStatus.notificationEvent.focus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to the primary resource or information of this event
   * - **Definition:** The focus of this event. While this will usually be a reference to the focus resource of the event, it MAY contain a reference to a non-FHIR object.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private focus?: Reference | undefined;

  /**
   * SubscriptionStatus.notificationEvent.additionalContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** References related to the focus resource and/or context of this event
   * - **Definition:** Additional context information for this event. Generally, this will contain references to additional resources included with the event (e.g., the Patient relevant to an Encounter), however it MAY refer to non-FHIR objects.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private additionalContext?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `eventNumber` property value as a Integer64Type object if defined; else null
   */
  public getEventNumberElement(): Integer64Type | null {
    return this.eventNumber;
  }

  /**
   * Assigns the provided PrimitiveType value to the `eventNumber` property.
   *
   * @param element - the `eventNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEventNumberElement(element: Integer64Type): this {
    assertIsDefined<Integer64Type>(element, `SubscriptionStatus.notificationEvent.eventNumber is required`);
    const optErrMsg = `Invalid SubscriptionStatus.notificationEvent.eventNumber; Provided value is not an instance of Integer64Type.`;
    assertFhirType<Integer64Type>(element, Integer64Type, optErrMsg);
    this.eventNumber = element;
    return this;
  }

  /**
   * @returns `true` if the `eventNumber` property exists and has a value; `false` otherwise
   */
  public hasEventNumberElement(): boolean {
    return isDefined<Integer64Type>(this.eventNumber) && !this.eventNumber.isEmpty();
  }

  /**
   * @returns the `eventNumber` property value as a fhirInteger64 if defined; else null
   */
  public getEventNumber(): fhirInteger64 | null {
    if (this.eventNumber?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.eventNumber.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `eventNumber` property.
   *
   * @param value - the `eventNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEventNumber(value: fhirInteger64): this {
    assertIsDefined<fhirInteger64>(value, `SubscriptionStatus.notificationEvent.eventNumber is required`);
    const optErrMsg = `Invalid SubscriptionStatus.notificationEvent.eventNumber (${String(value)})`;
    this.eventNumber = new Integer64Type(parseFhirPrimitiveData(value, fhirInteger64Schema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `eventNumber` property exists and has a value; `false` otherwise
   */
  public hasEventNumber(): boolean {
    return this.hasEventNumberElement();
  }

  /**
   * @returns the `timestamp` property value as a InstantType object if defined; else an empty InstantType object
   */
  public getTimestampElement(): InstantType {
    return this.timestamp ?? new InstantType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `timestamp` property.
   *
   * @param element - the `timestamp` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimestampElement(element: InstantType | undefined): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid SubscriptionStatus.notificationEvent.timestamp; Provided element is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
      this.timestamp = element;
    } else {
      this.timestamp = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timestamp` property exists and has a value; `false` otherwise
   */
  public hasTimestampElement(): boolean {
    return isDefined<InstantType>(this.timestamp) && !this.timestamp.isEmpty();
  }

  /**
   * @returns the `timestamp` property value as a fhirInstant if defined; else undefined
   */
  public getTimestamp(): fhirInstant | undefined {
    return this.timestamp?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `timestamp` property.
   *
   * @param value - the `timestamp` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimestamp(value: fhirInstant | undefined): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid SubscriptionStatus.notificationEvent.timestamp (${String(value)})`;
      this.timestamp = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    } else {
      this.timestamp = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timestamp` property exists and has a value; `false` otherwise
   */
  public hasTimestamp(): boolean {
    return this.hasTimestampElement();
  }

  /**
   * @returns the `focus` property value as a Reference object; else an empty Reference object
   */
  public getFocus(): Reference {
    return this.focus ?? new Reference();
  }

  /**
   * Assigns the provided Focus object value to the `focus` property.
   *
   * @decorator `@ReferenceTargets('SubscriptionStatus.notificationEvent.focus', ['Resource',])`
   *
   * @param value - the `focus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubscriptionStatus.notificationEvent.focus', [
    'Resource',
  ])
  public setFocus(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.focus = value;
    } else {
      this.focus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `focus` property exists and has a value; `false` otherwise
   */
  public hasFocus(): boolean {
    return isDefined<Reference>(this.focus) && !this.focus.isEmpty();
  }

  /**
   * @returns the `additionalContext` property value as a Reference array
   */
  public getAdditionalContext(): Reference[] {
    return this.additionalContext ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `additionalContext` property.
   *
   * @decorator `@ReferenceTargets('SubscriptionStatus.notificationEvent.additionalContext', ['Resource',])`
   *
   * @param value - the `additionalContext` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubscriptionStatus.notificationEvent.additionalContext', [
    'Resource',
  ])
  public setAdditionalContext(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.additionalContext = value;
    } else {
      this.additionalContext = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `additionalContext` array property.
   *
   * @decorator `@ReferenceTargets('SubscriptionStatus.notificationEvent.additionalContext', ['Resource',])`
   *
   * @param value - the `additionalContext` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubscriptionStatus.notificationEvent.additionalContext', [
    'Resource',
  ])
  public addAdditionalContext(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAdditionalContext();
      this.additionalContext?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `additionalContext` property exists and has a value; `false` otherwise
   */
  public hasAdditionalContext(): boolean {
    return isDefinedList<Reference>(this.additionalContext) && this.additionalContext.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `additionalContext` property
   */
  private initAdditionalContext(): void {
    if (!this.hasAdditionalContext()) {
      this.additionalContext = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubscriptionStatus.notificationEvent';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.eventNumber,
      this.timestamp,
      this.focus,
      this.additionalContext,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubscriptionStatusNotificationEventComponent {
    const dest = new SubscriptionStatusNotificationEventComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubscriptionStatusNotificationEventComponent): void {
    super.copyValues(dest);
    dest.eventNumber = this.eventNumber ? this.eventNumber.copy() : null;
    dest.timestamp = this.timestamp?.copy();
    dest.focus = this.focus?.copy();
    const additionalContextList = copyListValues<Reference>(this.additionalContext);
    dest.additionalContext = additionalContextList.length === 0 ? undefined : additionalContextList;
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

    if (this.hasEventNumberElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirInteger64>(this.getEventNumberElement()!, 'eventNumber', jsonObj);
    } else {
      missingReqdProperties.push(`SubscriptionStatus.notificationEvent.eventNumber`);
    }

    if (this.hasTimestampElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getTimestampElement(), 'timestamp', jsonObj);
    }

    if (this.hasFocus()) {
      setFhirComplexJson(this.getFocus(), 'focus', jsonObj);
    }

    if (this.hasAdditionalContext()) {
      setFhirComplexListJson(this.getAdditionalContext(), 'additionalContext', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
