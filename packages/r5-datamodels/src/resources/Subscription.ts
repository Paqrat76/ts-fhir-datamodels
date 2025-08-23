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
 * StructureDefinition.description: The subscription resource describes a particular client\'s request to be notified about a SubscriptionTopic.
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
  JSON,
  PositiveIntType,
  PrimitiveType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  UnsignedIntType,
  UriType,
  UrlType,
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
  fhirPositiveInt,
  fhirPositiveIntSchema,
  fhirString,
  fhirStringSchema,
  fhirUnsignedInt,
  fhirUnsignedIntSchema,
  fhirUri,
  fhirUriSchema,
  fhirUrl,
  fhirUrlSchema,
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
import { Coding, ContactPoint, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { SearchComparatorEnum } from '../code-systems/SearchComparatorEnum';
import { SearchModifierCodeEnum } from '../code-systems/SearchModifierCodeEnum';
import { SubscriptionPayloadContentEnum } from '../code-systems/SubscriptionPayloadContentEnum';
import { SubscriptionStatusEnum } from '../code-systems/SubscriptionStatusEnum';

/**
 * Subscription Class
 *
 * @remarks
 * The subscription resource describes a particular client\'s request to be notified about a SubscriptionTopic.
 *
 * **FHIR Specification**
 * - **Short:** Notification about a SubscriptionTopic
 * - **Definition:** The subscription resource describes a particular client\'s request to be notified about a SubscriptionTopic.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Subscription](http://hl7.org/fhir/StructureDefinition/Subscription)
 */
export class Subscription extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, topic: CanonicalType | fhirCanonical | null = null, channelType: Coding | null = null) {
    super();

    this.subscriptionStatusEnum = new SubscriptionStatusEnum();
    this.subscriptionPayloadContentEnum = new SubscriptionPayloadContentEnum();

    this.status = constructorCodeValueAsEnumCodeType<SubscriptionStatusEnum>(
      status,
      SubscriptionStatusEnum,
      this.subscriptionStatusEnum,
      'Subscription.status',
    );

    this.topic = null;
    if (isDefined<CanonicalType | fhirCanonical>(topic)) {
      if (topic instanceof PrimitiveType) {
        this.setTopicElement(topic);
      } else {
        this.setTopic(topic);
      }
    }

    this.channelType = null;
    if (isDefined<Coding>(channelType)) {
      this.setChannelType(channelType);
    }
  }

  /**
   * Parse the provided `Subscription` JSON to instantiate the Subscription data model.
   *
   * @param sourceJson - JSON representing FHIR `Subscription`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Subscription
   * @returns Subscription data model or undefined for `Subscription`
   * @throws {@link FhirError} if the provided JSON is missing required properties
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

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStatusElement(datatype);
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
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTopicElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'contact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactPoint | undefined = ContactPoint.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addContact(datatype);
        }
      });
    }

    fieldName = 'end';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      instance.setEndElement(datatype);
    }

    fieldName = 'managingEntity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setManagingEntity(datatype);
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setReasonElement(datatype);
    }

    fieldName = 'filterBy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubscriptionFilterByComponent | undefined = SubscriptionFilterByComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addFilterBy(component);
        }
      });
    }

    fieldName = 'channelType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setChannelType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'endpoint';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UrlType | undefined = fhirParser.parseUrlType(dtJson, dtSiblingJson);
      instance.setEndpointElement(datatype);
    }

    fieldName = 'parameter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubscriptionParameterComponent | undefined = SubscriptionParameterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addParameter(component);
        }
      });
    }

    fieldName = 'heartbeatPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setHeartbeatPeriodElement(datatype);
    }

    fieldName = 'timeout';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setTimeoutElement(datatype);
    }

    fieldName = 'contentType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setContentTypeElement(datatype);
    }

    fieldName = 'content';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setContentElement(datatype);
    }

    fieldName = 'maxCount';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setMaxCountElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Subscription.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifiers (business identifier)
   * - **Definition:** A formal identifier that is used to identify this code system when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Subscription.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human readable name for this subscription
   * - **Definition:** A natural language name identifying the subscription.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

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
   * - **Short:** requested | active | error | off | entered-in-error
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
   * Subscription.topic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to the subscription topic being subscribed to
   * - **Definition:** The reference to the subscription topic to be notified about.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SubscriptionTopic',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private topic: CanonicalType | null;

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
   * Subscription.managingEntity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Entity responsible for Subscription changes
   * - **Definition:** Entity with authorization to make subsequent revisions to the Subscription and also determines what data the subscription is authorized to disclose.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private managingEntity?: Reference | undefined;

  /**
   * Subscription.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of why this subscription was created
   * - **Definition:** A description of why this subscription is defined.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reason?: StringType | undefined;

  /**
   * Subscription.filterBy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Criteria for narrowing the subscription topic stream
   * - **Definition:** The filter properties to be applied to narrow the subscription topic stream.  When multiple filters are applied, evaluates to true if all the conditions applicable to that resource are met; otherwise it returns false (i.e., logical AND).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private filterBy?: SubscriptionFilterByComponent[] | undefined;

  /**
   * Subscription.channelType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Channel type for notifications
   * - **Definition:** The type of channel to send notifications on.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private channelType: Coding | null;

  /**
   * Subscription.endpoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the channel points to
   * - **Definition:** The url that describes the actual end-point to send notifications to.
   * - **Comment:** For rest-hook the end-point must be an `http:` or `https:` URL; for websockets, `ws:` or `wss:`; for email, a `mailto:` url; and for message the endpoint can be in any form of url the server understands (usually, `http/s`: or `mllp:`). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs).
   * - **FHIR Type:** `url`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private endpoint?: UrlType | undefined;

  /**
   * Subscription.parameter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Channel type
   * - **Definition:** Channel-dependent information to send as part of the notification (e.g., HTTP Headers).
   * - **Comment:** Exactly what these mean depend on the channel type. They can convey additional information to the server or recipient and/or meet security requirements; for example, support of multiple headers in the outgoing notifications for rest-hook type subscriptions. Note that names are not required to be unique, but channel definitions can impose restrictions.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private parameter?: SubscriptionParameterComponent[] | undefined;

  /**
   * Subscription.heartbeatPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Interval in seconds to send \'heartbeat\' notification
   * - **Definition:** If present, a \'heartbeat\' notification (keep-alive) is sent via this channel with an interval period equal to this elements integer value in seconds.  If not present, a heartbeat notification is not sent.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private heartbeatPeriod?: UnsignedIntType | undefined;

  /**
   * Subscription.timeout Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Timeout in seconds to attempt notification delivery
   * - **Definition:** If present, the maximum amount of time a server will allow before failing a notification attempt.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private timeout?: UnsignedIntType | undefined;

  /**
   * Subscription.contentType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** MIME type to send, or omit for no payload
   * - **Definition:** The MIME type to send the payload in - e.g., `application/fhir+xml` or `application/fhir+json`. Note that: * clients may request notifications in a specific FHIR version by using the [FHIR Version Parameter](https://hl7.org/fhir/http.html#version-parameter) - e.g., `application/fhir+json; fhirVersion=4.0`. * additional MIME types can be allowed by channels - e.g., `text/plain` and `text/html` are defined by the Email channel.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contentType?: CodeType | undefined;

  /**
   * FHIR CodeSystem: SubscriptionPayloadContent
   *
   * @see {@link SubscriptionPayloadContentEnum }
   */
  private readonly subscriptionPayloadContentEnum: SubscriptionPayloadContentEnum;

  /**
   * Subscription.content Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** empty | id-only | full-resource
   * - **Definition:** How much of the resource content to deliver in the notification payload. The choices are an empty payload, only the resource id, or the full resource content.
   * - **Comment:** Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SubscriptionPayloadContentEnum }
   */
  private content?: EnumCodeType | undefined;

  /**
   * Subscription.maxCount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Maximum number of events that can be combined in a single notification
   * - **Definition:** If present, the maximum number of events that will be included in a notification bundle. Note that this is not a strict limit on the number of entries in a bundle, as dependent resources can be included.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private maxCount?: PositiveIntType | undefined;

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
      const optErrMsg = `Invalid Subscription.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Subscription.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Subscription.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Subscription.name (${String(value)})`;
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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `Subscription.status is required`);
    const errMsgPrefix = `Invalid Subscription.status`;
    assertEnumCodeType<SubscriptionStatusEnum>(enumType, SubscriptionStatusEnum, errMsgPrefix);
    this.status = enumType;
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
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Subscription.status is required`);
    const optErrMsg = `Invalid Subscription.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.subscriptionStatusEnum);
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
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Subscription.status is required`);
    const optErrMsg = `Invalid Subscription.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.subscriptionStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `topic` property value as a CanonicalType object if defined; else null
   */
  public getTopicElement(): CanonicalType | null {
    return this.topic;
  }

  /**
   * Assigns the provided PrimitiveType value to the `topic` property.
   *
   * @param element - the `topic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTopicElement(element: CanonicalType): this {
    assertIsDefined<CanonicalType>(element, `Subscription.topic is required`);
    const optErrMsg = `Invalid Subscription.topic; Provided value is not an instance of CanonicalType.`;
    assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
    this.topic = element;
    return this;
  }

  /**
   * @returns `true` if the `topic` property exists and has a value; `false` otherwise
   */
  public hasTopicElement(): boolean {
    return isDefined<CanonicalType>(this.topic) && !this.topic.isEmpty();
  }

  /**
   * @returns the `topic` property value as a fhirCanonical if defined; else null
   */
  public getTopic(): fhirCanonical | null {
    if (this.topic?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.topic.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `topic` property.
   *
   * @param value - the `topic` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTopic(value: fhirCanonical): this {
    assertIsDefined<fhirCanonical>(value, `Subscription.topic is required`);
    const optErrMsg = `Invalid Subscription.topic (${String(value)})`;
    this.topic = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `topic` property exists and has a value; `false` otherwise
   */
  public hasTopic(): boolean {
    return this.hasTopicElement();
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
   * @returns the `managingEntity` property value as a Reference object; else an empty Reference object
   */
  public getManagingEntity(): Reference {
    return this.managingEntity ?? new Reference();
  }

  /**
   * Assigns the provided ManagingEntity object value to the `managingEntity` property.
   *
   * @decorator `@ReferenceTargets('Subscription.managingEntity', ['CareTeam','HealthcareService','Organization','RelatedPerson','Patient','Practitioner','PractitionerRole',])`
   *
   * @param value - the `managingEntity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Subscription.managingEntity', [
    'CareTeam',
  
    'HealthcareService',
  
    'Organization',
  
    'RelatedPerson',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setManagingEntity(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.managingEntity = value;
    } else {
      this.managingEntity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `managingEntity` property exists and has a value; `false` otherwise
   */
  public hasManagingEntity(): boolean {
    return isDefined<Reference>(this.managingEntity) && !this.managingEntity.isEmpty();
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
  public setReasonElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Subscription.reason; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.reason = element;
    } else {
      this.reason = undefined;
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
   * @returns the `reason` property value as a fhirString if defined; else undefined
   */
  public getReason(): fhirString | undefined {
    return this.reason?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `reason` property.
   *
   * @param value - the `reason` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReason(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Subscription.reason (${String(value)})`;
      this.reason = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.reason = undefined;
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
   * @returns the `filterBy` property value as a SubscriptionFilterByComponent array
   */
  public getFilterBy(): SubscriptionFilterByComponent[] {
    return this.filterBy ?? ([] as SubscriptionFilterByComponent[]);
  }

  /**
   * Assigns the provided SubscriptionFilterByComponent array value to the `filterBy` property.
   *
   * @param value - the `filterBy` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFilterBy(value: SubscriptionFilterByComponent[] | undefined): this {
    if (isDefinedList<SubscriptionFilterByComponent>(value)) {
      const optErrMsg = `Invalid Subscription.filterBy; Provided value array has an element that is not an instance of SubscriptionFilterByComponent.`;
      assertFhirTypeList<SubscriptionFilterByComponent>(value, SubscriptionFilterByComponent, optErrMsg);
      this.filterBy = value;
    } else {
      this.filterBy = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubscriptionFilterByComponent value to the `filterBy` array property.
   *
   * @param value - the `filterBy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFilterBy(value: SubscriptionFilterByComponent | undefined): this {
    if (isDefined<SubscriptionFilterByComponent>(value)) {
      const optErrMsg = `Invalid Subscription.filterBy; Provided element is not an instance of SubscriptionFilterByComponent.`;
      assertFhirType<SubscriptionFilterByComponent>(value, SubscriptionFilterByComponent, optErrMsg);
      this.initFilterBy();
      this.filterBy?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `filterBy` property exists and has a value; `false` otherwise
   */
  public hasFilterBy(): boolean {
    return isDefinedList<SubscriptionFilterByComponent>(this.filterBy) && this.filterBy.some((item: SubscriptionFilterByComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `filterBy` property
   */
  private initFilterBy(): void {
    if(!this.hasFilterBy()) {
      this.filterBy = [] as SubscriptionFilterByComponent[];
    }
  }

  /**
   * @returns the `channelType` property value as a Coding object if defined; else null
   */
  public getChannelType(): Coding | null {
    return this.channelType;
  }

  /**
   * Assigns the provided Coding object value to the `channelType` property.
   *
   * @param value - the `channelType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setChannelType(value: Coding): this {
    assertIsDefined<Coding>(value, `Subscription.channelType is required`);
    const optErrMsg = `Invalid Subscription.channelType; Provided element is not an instance of Coding.`;
    assertFhirType<Coding>(value, Coding, optErrMsg);
    this.channelType = value;
    return this;
  }

  /**
   * @returns `true` if the `channelType` property exists and has a value; `false` otherwise
   */
  public hasChannelType(): boolean {
    return isDefined<Coding>(this.channelType) && !this.channelType.isEmpty();
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
      const optErrMsg = `Invalid Subscription.endpoint; Provided element is not an instance of UrlType.`;
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
      const optErrMsg = `Invalid Subscription.endpoint (${String(value)})`;
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
   * @returns the `parameter` property value as a SubscriptionParameterComponent array
   */
  public getParameter(): SubscriptionParameterComponent[] {
    return this.parameter ?? ([] as SubscriptionParameterComponent[]);
  }

  /**
   * Assigns the provided SubscriptionParameterComponent array value to the `parameter` property.
   *
   * @param value - the `parameter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParameter(value: SubscriptionParameterComponent[] | undefined): this {
    if (isDefinedList<SubscriptionParameterComponent>(value)) {
      const optErrMsg = `Invalid Subscription.parameter; Provided value array has an element that is not an instance of SubscriptionParameterComponent.`;
      assertFhirTypeList<SubscriptionParameterComponent>(value, SubscriptionParameterComponent, optErrMsg);
      this.parameter = value;
    } else {
      this.parameter = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubscriptionParameterComponent value to the `parameter` array property.
   *
   * @param value - the `parameter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParameter(value: SubscriptionParameterComponent | undefined): this {
    if (isDefined<SubscriptionParameterComponent>(value)) {
      const optErrMsg = `Invalid Subscription.parameter; Provided element is not an instance of SubscriptionParameterComponent.`;
      assertFhirType<SubscriptionParameterComponent>(value, SubscriptionParameterComponent, optErrMsg);
      this.initParameter();
      this.parameter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `parameter` property exists and has a value; `false` otherwise
   */
  public hasParameter(): boolean {
    return isDefinedList<SubscriptionParameterComponent>(this.parameter) && this.parameter.some((item: SubscriptionParameterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `parameter` property
   */
  private initParameter(): void {
    if(!this.hasParameter()) {
      this.parameter = [] as SubscriptionParameterComponent[];
    }
  }

  /**
   * @returns the `heartbeatPeriod` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getHeartbeatPeriodElement(): UnsignedIntType {
    return this.heartbeatPeriod ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `heartbeatPeriod` property.
   *
   * @param element - the `heartbeatPeriod` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHeartbeatPeriodElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Subscription.heartbeatPeriod; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.heartbeatPeriod = element;
    } else {
      this.heartbeatPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `heartbeatPeriod` property exists and has a value; `false` otherwise
   */
  public hasHeartbeatPeriodElement(): boolean {
    return isDefined<UnsignedIntType>(this.heartbeatPeriod) && !this.heartbeatPeriod.isEmpty();
  }

  /**
   * @returns the `heartbeatPeriod` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getHeartbeatPeriod(): fhirUnsignedInt | undefined {
    return this.heartbeatPeriod?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `heartbeatPeriod` property.
   *
   * @param value - the `heartbeatPeriod` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHeartbeatPeriod(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Subscription.heartbeatPeriod (${String(value)})`;
      this.heartbeatPeriod = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.heartbeatPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `heartbeatPeriod` property exists and has a value; `false` otherwise
   */
  public hasHeartbeatPeriod(): boolean {
    return this.hasHeartbeatPeriodElement();
  }

  /**
   * @returns the `timeout` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getTimeoutElement(): UnsignedIntType {
    return this.timeout ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `timeout` property.
   *
   * @param element - the `timeout` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimeoutElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Subscription.timeout; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.timeout = element;
    } else {
      this.timeout = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timeout` property exists and has a value; `false` otherwise
   */
  public hasTimeoutElement(): boolean {
    return isDefined<UnsignedIntType>(this.timeout) && !this.timeout.isEmpty();
  }

  /**
   * @returns the `timeout` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getTimeout(): fhirUnsignedInt | undefined {
    return this.timeout?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `timeout` property.
   *
   * @param value - the `timeout` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimeout(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Subscription.timeout (${String(value)})`;
      this.timeout = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.timeout = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timeout` property exists and has a value; `false` otherwise
   */
  public hasTimeout(): boolean {
    return this.hasTimeoutElement();
  }

  /**
   * @returns the `contentType` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getContentTypeElement(): CodeType {
    return this.contentType ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `contentType` property.
   *
   * @param element - the `contentType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContentTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Subscription.contentType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.contentType = element;
    } else {
      this.contentType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contentType` property exists and has a value; `false` otherwise
   */
  public hasContentTypeElement(): boolean {
    return isDefined<CodeType>(this.contentType) && !this.contentType.isEmpty();
  }

  /**
   * @returns the `contentType` property value as a fhirCode if defined; else undefined
   */
  public getContentType(): fhirCode | undefined {
    return this.contentType?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `contentType` property.
   *
   * @param value - the `contentType` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContentType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Subscription.contentType (${String(value)})`;
      this.contentType = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.contentType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contentType` property exists and has a value; `false` otherwise
   */
  public hasContentType(): boolean {
    return this.hasContentTypeElement();
  }

  /**
   * @returns the `content` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SubscriptionPayloadContentEnum }
   */
  public getContentEnumType(): EnumCodeType | undefined {
    return this.content;
  }

  /**
   * Assigns the provided EnumCodeType value to the `content` property.
   *
   * @param enumType - the `content` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SubscriptionPayloadContentEnum }
   */
  public setContentEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Subscription.content';
      assertEnumCodeType<SubscriptionPayloadContentEnum>(enumType, SubscriptionPayloadContentEnum, errMsgPrefix);
      this.content = enumType;
    } else {
      this.content = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContentEnumType(): boolean {
    return isDefined<EnumCodeType>(this.content) && !this.content.isEmpty() && this.content.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `content` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SubscriptionPayloadContentEnum }
   */
  public getContentElement(): CodeType | undefined {
    if (this.content === undefined) {
      return undefined;
    }
    return this.content as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `content` property.
   *
   * @param element - the `content` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SubscriptionPayloadContentEnum }
   */
  public setContentElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Subscription.content; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.content = new EnumCodeType(element, this.subscriptionPayloadContentEnum);
    } else {
      this.content = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContentElement(): boolean {
    return this.hasContentEnumType();
  }

  /**
   * @returns the `content` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SubscriptionPayloadContentEnum }
   */
  public getContent(): fhirCode | undefined {
    if (this.content === undefined) {
      return undefined;
    }
    return this.content.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `content` property.
   *
   * @param value - the `content` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SubscriptionPayloadContentEnum }
   */
  public setContent(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Subscription.content; Provided value is not an instance of fhirCode.`;
      this.content = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.subscriptionPayloadContentEnum);
    } else {
      this.content = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContent(): boolean {
    return this.hasContentEnumType();
  }

  /**
   * @returns the `maxCount` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getMaxCountElement(): PositiveIntType {
    return this.maxCount ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `maxCount` property.
   *
   * @param element - the `maxCount` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMaxCountElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Subscription.maxCount; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.maxCount = element;
    } else {
      this.maxCount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maxCount` property exists and has a value; `false` otherwise
   */
  public hasMaxCountElement(): boolean {
    return isDefined<PositiveIntType>(this.maxCount) && !this.maxCount.isEmpty();
  }

  /**
   * @returns the `maxCount` property value as a fhirPositiveInt if defined; else undefined
   */
  public getMaxCount(): fhirPositiveInt | undefined {
    return this.maxCount?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `maxCount` property.
   *
   * @param value - the `maxCount` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMaxCount(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Subscription.maxCount (${String(value)})`;
      this.maxCount = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.maxCount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maxCount` property exists and has a value; `false` otherwise
   */
  public hasMaxCount(): boolean {
    return this.hasMaxCountElement();
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
      this.identifier,
      this.name,
      this.status,
      this.topic,
      this.contact,
      this.end,
      this.managingEntity,
      this.reason,
      this.filterBy,
      this.channelType,
      this.endpoint,
      this.parameter,
      this.heartbeatPeriod,
      this.timeout,
      this.contentType,
      this.content,
      this.maxCount,
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
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.name = this.name?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.topic = this.topic ? this.topic.copy() : null;
    const contactList = copyListValues<ContactPoint>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    dest.end = this.end?.copy();
    dest.managingEntity = this.managingEntity?.copy();
    dest.reason = this.reason?.copy();
    const filterByList = copyListValues<SubscriptionFilterByComponent>(this.filterBy);
    dest.filterBy = filterByList.length === 0 ? undefined : filterByList;
    dest.channelType = this.channelType ? this.channelType.copy() : null;
    dest.endpoint = this.endpoint?.copy();
    const parameterList = copyListValues<SubscriptionParameterComponent>(this.parameter);
    dest.parameter = parameterList.length === 0 ? undefined : parameterList;
    dest.heartbeatPeriod = this.heartbeatPeriod?.copy();
    dest.timeout = this.timeout?.copy();
    dest.contentType = this.contentType?.copy();
    dest.content = this.content?.copy();
    dest.maxCount = this.maxCount?.copy();
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

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`Subscription.status`);
    }

    if (this.hasTopicElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCanonical>(this.getTopicElement()!, 'topic', jsonObj);
    } else {
      missingReqdProperties.push(`Subscription.topic`);
    }

    if (this.hasContact()) {
      setFhirComplexListJson(this.getContact(), 'contact', jsonObj);
    }

    if (this.hasEndElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getEndElement(), 'end', jsonObj);
    }

    if (this.hasManagingEntity()) {
      setFhirComplexJson(this.getManagingEntity(), 'managingEntity', jsonObj);
    }

    if (this.hasReasonElement()) {
      setFhirPrimitiveJson<fhirString>(this.getReasonElement(), 'reason', jsonObj);
    }

    if (this.hasFilterBy()) {
      setFhirBackboneElementListJson(this.getFilterBy(), 'filterBy', jsonObj);
    }

    if (this.hasChannelType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getChannelType()!, 'channelType', jsonObj);
    } else {
      missingReqdProperties.push(`Subscription.channelType`);
    }

    if (this.hasEndpointElement()) {
      setFhirPrimitiveJson<fhirUrl>(this.getEndpointElement(), 'endpoint', jsonObj);
    }

    if (this.hasParameter()) {
      setFhirBackboneElementListJson(this.getParameter(), 'parameter', jsonObj);
    }

    if (this.hasHeartbeatPeriodElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getHeartbeatPeriodElement(), 'heartbeatPeriod', jsonObj);
    }

    if (this.hasTimeoutElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getTimeoutElement(), 'timeout', jsonObj);
    }

    if (this.hasContentTypeElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getContentTypeElement(), 'contentType', jsonObj);
    }

    if (this.hasContentElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getContentElement()!, 'content', jsonObj);
    }

    if (this.hasMaxCountElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getMaxCountElement(), 'maxCount', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * SubscriptionFilterByComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Criteria for narrowing the subscription topic stream
 * - **Definition:** The filter properties to be applied to narrow the subscription topic stream.  When multiple filters are applied, evaluates to true if all the conditions applicable to that resource are met; otherwise it returns false (i.e., logical AND).
 *
 * @category Data Models: Resource
 * @see [FHIR Subscription](http://hl7.org/fhir/StructureDefinition/Subscription)
 */
export class SubscriptionFilterByComponent extends BackboneElement implements IBackboneElement {
  constructor(filterParameter: StringType | fhirString | null = null, value: StringType | fhirString | null = null) {
    super();

    this.searchComparatorEnum = new SearchComparatorEnum();
    this.searchModifierCodeEnum = new SearchModifierCodeEnum();

    this.filterParameter = null;
    if (isDefined<StringType | fhirString>(filterParameter)) {
      if (filterParameter instanceof PrimitiveType) {
        this.setFilterParameterElement(filterParameter);
      } else {
        this.setFilterParameter(filterParameter);
      }
    }

    this.value = null;
    if (isDefined<StringType | fhirString>(value)) {
      if (value instanceof PrimitiveType) {
        this.setValueElement(value);
      } else {
        this.setValue(value);
      }
    }
  }

  /**
   * Parse the provided `SubscriptionFilterByComponent` JSON to instantiate the SubscriptionFilterByComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubscriptionFilterByComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubscriptionFilterByComponent
   * @returns SubscriptionFilterByComponent data model or undefined for `SubscriptionFilterByComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubscriptionFilterByComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubscriptionFilterByComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubscriptionFilterByComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'resourceType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setResourceTypeElement(datatype);
    }

    fieldName = 'filterParameter';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setFilterParameterElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'comparator';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setComparatorElement(datatype);
    }

    fieldName = 'modifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setModifierElement(datatype);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setValueElement(datatype);
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
   * Subscription.filterBy.resourceType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allowed Resource (reference to definition) for this Subscription filter
   * - **Definition:** A resource listed in the `SubscriptionTopic` this `Subscription` references (`SubscriptionTopic.canFilterBy.resource`). This element can be used to differentiate filters for topics that include more than one resource type.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resourceType?: UriType | undefined;

  /**
   * Subscription.filterBy.filterParameter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Filter label defined in SubscriptionTopic
   * - **Definition:** The filter as defined in the `SubscriptionTopic.canFilterBy.filterParameter` element.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private filterParameter: StringType | null;

  /**
   * FHIR CodeSystem: SearchComparator
   *
   * @see {@link SearchComparatorEnum }
   */
  private readonly searchComparatorEnum: SearchComparatorEnum;

  /**
   * Subscription.filterBy.comparator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** eq | ne | gt | lt | ge | le | sa | eb | ap
   * - **Definition:** Comparator applied to this filter parameter.
   * - **Comment:** Must be a comparator allowed by the SubscriptionTopic relevant to this Subscription filter.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  private comparator?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: SearchModifierCode
   *
   * @see {@link SearchModifierCodeEnum }
   */
  private readonly searchModifierCodeEnum: SearchModifierCodeEnum;

  /**
   * Subscription.filterBy.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate
   * - **Definition:** Modifier applied to this filter parameter.
   * - **Comment:** Must be a modifier allowed by the SubscriptionTopic relevant to this Subscription filter.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  private modifier?: EnumCodeType | undefined;

  /**
   * Subscription.filterBy.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Literal value or resource path
   * - **Definition:** The literal value or resource path as is legal in search - for example, `Patient/123` or `le1950`.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private value: StringType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `resourceType` property value as a UriType object if defined; else an empty UriType object
   */
  public getResourceTypeElement(): UriType {
    return this.resourceType ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `resourceType` property.
   *
   * @param element - the `resourceType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResourceTypeElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Subscription.filterBy.resourceType; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.resourceType = element;
    } else {
      this.resourceType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resourceType` property exists and has a value; `false` otherwise
   */
  public hasResourceTypeElement(): boolean {
    return isDefined<UriType>(this.resourceType) && !this.resourceType.isEmpty();
  }

  /**
   * @returns the `resourceType` property value as a fhirUri if defined; else undefined
   */
  public getResourceType(): fhirUri | undefined {
    return this.resourceType?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `resourceType` property.
   *
   * @param value - the `resourceType` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResourceType(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Subscription.filterBy.resourceType (${String(value)})`;
      this.resourceType = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.resourceType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resourceType` property exists and has a value; `false` otherwise
   */
  public hasResourceType(): boolean {
    return this.hasResourceTypeElement();
  }

  /**
   * @returns the `filterParameter` property value as a StringType object if defined; else null
   */
  public getFilterParameterElement(): StringType | null {
    return this.filterParameter;
  }

  /**
   * Assigns the provided PrimitiveType value to the `filterParameter` property.
   *
   * @param element - the `filterParameter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFilterParameterElement(element: StringType): this {
    assertIsDefined<StringType>(element, `Subscription.filterBy.filterParameter is required`);
    const optErrMsg = `Invalid Subscription.filterBy.filterParameter; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.filterParameter = element;
    return this;
  }

  /**
   * @returns `true` if the `filterParameter` property exists and has a value; `false` otherwise
   */
  public hasFilterParameterElement(): boolean {
    return isDefined<StringType>(this.filterParameter) && !this.filterParameter.isEmpty();
  }

  /**
   * @returns the `filterParameter` property value as a fhirString if defined; else null
   */
  public getFilterParameter(): fhirString | null {
    if (this.filterParameter?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.filterParameter.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `filterParameter` property.
   *
   * @param value - the `filterParameter` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFilterParameter(value: fhirString): this {
    assertIsDefined<fhirString>(value, `Subscription.filterBy.filterParameter is required`);
    const optErrMsg = `Invalid Subscription.filterBy.filterParameter (${String(value)})`;
    this.filterParameter = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `filterParameter` property exists and has a value; `false` otherwise
   */
  public hasFilterParameter(): boolean {
    return this.hasFilterParameterElement();
  }

  /**
   * @returns the `comparator` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public getComparatorEnumType(): EnumCodeType | undefined {
    return this.comparator;
  }

  /**
   * Assigns the provided EnumCodeType value to the `comparator` property.
   *
   * @param enumType - the `comparator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public setComparatorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Subscription.filterBy.comparator';
      assertEnumCodeType<SearchComparatorEnum>(enumType, SearchComparatorEnum, errMsgPrefix);
      this.comparator = enumType;
    } else {
      this.comparator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comparator` property exists and has a value; `false` otherwise
   */
  public hasComparatorEnumType(): boolean {
    return isDefined<EnumCodeType>(this.comparator) && !this.comparator.isEmpty() && this.comparator.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `comparator` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public getComparatorElement(): CodeType | undefined {
    if (this.comparator === undefined) {
      return undefined;
    }
    return this.comparator as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `comparator` property.
   *
   * @param element - the `comparator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public setComparatorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Subscription.filterBy.comparator; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.comparator = new EnumCodeType(element, this.searchComparatorEnum);
    } else {
      this.comparator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comparator` property exists and has a value; `false` otherwise
   */
  public hasComparatorElement(): boolean {
    return this.hasComparatorEnumType();
  }

  /**
   * @returns the `comparator` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public getComparator(): fhirCode | undefined {
    if (this.comparator === undefined) {
      return undefined;
    }
    return this.comparator.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `comparator` property.
   *
   * @param value - the `comparator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public setComparator(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Subscription.filterBy.comparator; Provided value is not an instance of fhirCode.`;
      this.comparator = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.searchComparatorEnum);
    } else {
      this.comparator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comparator` property exists and has a value; `false` otherwise
   */
  public hasComparator(): boolean {
    return this.hasComparatorEnumType();
  }

  /**
   * @returns the `modifier` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public getModifierEnumType(): EnumCodeType | undefined {
    return this.modifier;
  }

  /**
   * Assigns the provided EnumCodeType value to the `modifier` property.
   *
   * @param enumType - the `modifier` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public setModifierEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Subscription.filterBy.modifier';
      assertEnumCodeType<SearchModifierCodeEnum>(enumType, SearchModifierCodeEnum, errMsgPrefix);
      this.modifier = enumType;
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifierEnumType(): boolean {
    return isDefined<EnumCodeType>(this.modifier) && !this.modifier.isEmpty() && this.modifier.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `modifier` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public getModifierElement(): CodeType | undefined {
    if (this.modifier === undefined) {
      return undefined;
    }
    return this.modifier as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `modifier` property.
   *
   * @param element - the `modifier` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public setModifierElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Subscription.filterBy.modifier; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.modifier = new EnumCodeType(element, this.searchModifierCodeEnum);
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifierElement(): boolean {
    return this.hasModifierEnumType();
  }

  /**
   * @returns the `modifier` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public getModifier(): fhirCode | undefined {
    if (this.modifier === undefined) {
      return undefined;
    }
    return this.modifier.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `modifier` property.
   *
   * @param value - the `modifier` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public setModifier(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Subscription.filterBy.modifier; Provided value is not an instance of fhirCode.`;
      this.modifier = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.searchModifierCodeEnum);
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifier(): boolean {
    return this.hasModifierEnumType();
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueElement(): StringType | null {
    return this.value;
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: StringType): this {
    assertIsDefined<StringType>(element, `Subscription.filterBy.value is required`);
    const optErrMsg = `Invalid Subscription.filterBy.value; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.value = element;
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValueElement(): boolean {
    return isDefined<StringType>(this.value) && !this.value.isEmpty();
  }

  /**
   * @returns the `value` property value as a fhirString if defined; else null
   */
  public getValue(): fhirString | null {
    if (this.value?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.value.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `value` property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValue(value: fhirString): this {
    assertIsDefined<fhirString>(value, `Subscription.filterBy.value is required`);
    const optErrMsg = `Invalid Subscription.filterBy.value (${String(value)})`;
    this.value = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return this.hasValueElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Subscription.filterBy';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.resourceType,
      this.filterParameter,
      this.comparator,
      this.modifier,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubscriptionFilterByComponent {
    const dest = new SubscriptionFilterByComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubscriptionFilterByComponent): void {
    super.copyValues(dest);
    dest.resourceType = this.resourceType?.copy();
    dest.filterParameter = this.filterParameter ? this.filterParameter.copy() : null;
    dest.comparator = this.comparator?.copy();
    dest.modifier = this.modifier?.copy();
    dest.value = this.value ? this.value.copy() : null;
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

    if (this.hasResourceTypeElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getResourceTypeElement(), 'resourceType', jsonObj);
    }

    if (this.hasFilterParameterElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getFilterParameterElement()!, 'filterParameter', jsonObj);
    } else {
      missingReqdProperties.push(`Subscription.filterBy.filterParameter`);
    }

    if (this.hasComparatorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getComparatorElement()!, 'comparator', jsonObj);
    }

    if (this.hasModifierElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getModifierElement()!, 'modifier', jsonObj);
    }

    if (this.hasValueElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getValueElement()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`Subscription.filterBy.value`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * SubscriptionParameterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Channel type
 * - **Definition:** Channel-dependent information to send as part of the notification (e.g., HTTP Headers).
 * - **Comment:** Exactly what these mean depend on the channel type. They can convey additional information to the server or recipient and/or meet security requirements; for example, support of multiple headers in the outgoing notifications for rest-hook type subscriptions. Note that names are not required to be unique, but channel definitions can impose restrictions.
 *
 * @category Data Models: Resource
 * @see [FHIR Subscription](http://hl7.org/fhir/StructureDefinition/Subscription)
 */
export class SubscriptionParameterComponent extends BackboneElement implements IBackboneElement {
  constructor(name: StringType | fhirString | null = null, value: StringType | fhirString | null = null) {
    super();

    this.name = null;
    if (isDefined<StringType | fhirString>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }

    this.value = null;
    if (isDefined<StringType | fhirString>(value)) {
      if (value instanceof PrimitiveType) {
        this.setValueElement(value);
      } else {
        this.setValue(value);
      }
    }
  }

  /**
   * Parse the provided `SubscriptionParameterComponent` JSON to instantiate the SubscriptionParameterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubscriptionParameterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubscriptionParameterComponent
   * @returns SubscriptionParameterComponent data model or undefined for `SubscriptionParameterComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubscriptionParameterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubscriptionParameterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubscriptionParameterComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setValueElement(datatype);
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
   * Subscription.parameter.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name (key) of the parameter
   * - **Definition:** Parameter name for information passed to the channel for notifications, for example in the case of a REST hook wanting to pass through an authorization header, the name would be Authorization.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name: StringType | null;

  /**
   * Subscription.parameter.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value of the parameter to use or pass through
   * - **Definition:** Parameter value for information passed to the channel for notifications, for example in the case of a REST hook wanting to pass through an authorization header, the value would be `Bearer 0193...`.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value: StringType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `name` property value as a StringType object if defined; else null
   */
  public getNameElement(): StringType | null {
    return this.name;
  }

  /**
   * Assigns the provided PrimitiveType value to the `name` property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType): this {
    assertIsDefined<StringType>(element, `Subscription.parameter.name is required`);
    const optErrMsg = `Invalid Subscription.parameter.name; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.name = element;
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<StringType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirString if defined; else null
   */
  public getName(): fhirString | null {
    if (this.name?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.name.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString): this {
    assertIsDefined<fhirString>(value, `Subscription.parameter.name is required`);
    const optErrMsg = `Invalid Subscription.parameter.name (${String(value)})`;
    this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueElement(): StringType | null {
    return this.value;
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: StringType): this {
    assertIsDefined<StringType>(element, `Subscription.parameter.value is required`);
    const optErrMsg = `Invalid Subscription.parameter.value; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.value = element;
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValueElement(): boolean {
    return isDefined<StringType>(this.value) && !this.value.isEmpty();
  }

  /**
   * @returns the `value` property value as a fhirString if defined; else null
   */
  public getValue(): fhirString | null {
    if (this.value?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.value.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `value` property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValue(value: fhirString): this {
    assertIsDefined<fhirString>(value, `Subscription.parameter.value is required`);
    const optErrMsg = `Invalid Subscription.parameter.value (${String(value)})`;
    this.value = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return this.hasValueElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Subscription.parameter';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubscriptionParameterComponent {
    const dest = new SubscriptionParameterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubscriptionParameterComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.value = this.value ? this.value.copy() : null;
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

    if (this.hasNameElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`Subscription.parameter.name`);
    }

    if (this.hasValueElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getValueElement()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`Subscription.parameter.value`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
