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
 * CommunicationRequest Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/CommunicationRequest
 * StructureDefinition.name: CommunicationRequest
 * StructureDefinition.description: A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
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
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  InvalidTypeError,
  JSON,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, Attachment, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { RequestPriorityEnum } from '../code-systems/RequestPriorityEnum';
import { RequestStatusEnum } from '../code-systems/RequestStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * CommunicationRequest Class
 *
 * @remarks
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 *
 * **FHIR Specification**
 * - **Short:** A request for information to be sent to a receiver
 * - **Definition:** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR CommunicationRequest](http://hl7.org/fhir/StructureDefinition/CommunicationRequest)
 */
export class CommunicationRequest extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.requestStatusEnum = new RequestStatusEnum();
    this.requestPriorityEnum = new RequestPriorityEnum();

    this.status = constructorCodeValueAsEnumCodeType<RequestStatusEnum>(
      status,
      RequestStatusEnum,
      this.requestStatusEnum,
      'CommunicationRequest.status',
    );
  }

  /**
   * Parse the provided `CommunicationRequest` JSON to instantiate the CommunicationRequest data model.
   *
   * @param sourceJson - JSON representing FHIR `CommunicationRequest`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CommunicationRequest
   * @returns CommunicationRequest data model or undefined for `CommunicationRequest`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): CommunicationRequest | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CommunicationRequest';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CommunicationRequest();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'CommunicationRequest');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = CommunicationRequest[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for CommunicationRequest`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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

    fieldName = 'basedOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addBasedOn(datatype);
        }
      });
  }

    fieldName = 'replaces';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReplaces(datatype);
        }
      });
  }

    fieldName = 'groupIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGroupIdentifier(datatype);
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

    fieldName = 'statusReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatusReason(datatype);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCategory(datatype);
        }
      });
    }

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setPriorityElement(datatype);
    }

    fieldName = 'doNotPerform';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setDoNotPerformElement(datatype);
    }

    fieldName = 'medium';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addMedium(datatype);
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

    fieldName = 'about';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAbout(datatype);
        }
      });
  }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'payload';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CommunicationRequestPayloadComponent | undefined = CommunicationRequestPayloadComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPayload(component);
        }
      });
    }

    fieldName = 'occurrence[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const occurrence: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setOccurrence(occurrence);

    fieldName = 'authoredOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setAuthoredOnElement(datatype);
    }

    fieldName = 'requester';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequester(datatype);
    }

    fieldName = 'recipient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRecipient(datatype);
        }
      });
  }

    fieldName = 'sender';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSender(datatype);
    }

    fieldName = 'reasonCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReasonCode(datatype);
        }
      });
    }

    fieldName = 'reasonReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReasonReference(datatype);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * CommunicationRequest.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique identifier
   * - **Definition:** Business identifiers assigned to this communication request by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier (see [discussion](https://hl7.org/fhir/resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   * - **Requirements:** Allows identification of the communication request as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * CommunicationRequest.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fulfills plan or proposal
   * - **Definition:** A plan or proposal that is fulfilled in whole or in part by this request.
   * - **Requirements:** Allows tracing of authorization for the request and tracking whether proposals/recommendations were acted upon.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basedOn?: Reference[] | undefined;

  /**
   * CommunicationRequest.replaces Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request(s) replaced by this request
   * - **Definition:** Completed or terminated request(s) whose function is taken by this new request.
   * - **Comment:** The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
   * - **Requirements:** Allows tracing the continuation of a therapy or administrative process instantiated through multiple requests.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CommunicationRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private replaces?: Reference[] | undefined;

  /**
   * CommunicationRequest.groupIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Composite request this is part of
   * - **Definition:** A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form.
   * - **Comment:** Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private groupIdentifier?: Identifier | undefined;

  /**
   * FHIR CodeSystem: RequestStatus
   *
   * @see {@link RequestStatusEnum }
   */
  private readonly requestStatusEnum: RequestStatusEnum;

  /**
   * CommunicationRequest.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | on-hold | revoked | completed | entered-in-error | unknown
   * - **Definition:** The status of the proposal or order.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid.
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * CommunicationRequest.statusReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for current status
   * - **Definition:** Captures the reason for the current state of the CommunicationRequest.
   * - **Comment:** This is generally only used for "exception" statuses such as "suspended" or "cancelled".  The reason why the CommunicationRequest was created at all is captured in reasonCode, not here.  [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusReason?: CodeableConcept | undefined;

  /**
   * CommunicationRequest.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Message category
   * - **Definition:** The type of message to be sent such as alert, notification, reminder, instruction, etc.
   * - **Comment:** There may be multiple axes of categorization and one communication request may serve multiple purposes.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * FHIR CodeSystem: RequestPriority
   *
   * @see {@link RequestPriorityEnum }
   */
  private readonly requestPriorityEnum: RequestPriorityEnum;

  /**
   * CommunicationRequest.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** routine | urgent | asap | stat
   * - **Definition:** Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  private priority?: EnumCodeType | undefined;

  /**
   * CommunicationRequest.doNotPerform Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** True if request is prohibiting action
   * - **Definition:** If true indicates that the CommunicationRequest is asking for the specified action to *not* occur.
   * - **Comment:** The attributes provided with the request qualify what is not to be done.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** If true this element negates the specified action. For Example,  instead of a request for a communication, it is a request for the communication to not occur.
   * - **isSummary:** true
   */
  private doNotPerform?: BooleanType | undefined;

  /**
   * CommunicationRequest.medium Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A channel of communication
   * - **Definition:** A channel that was used for this communication (e.g. email, fax).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private medium?: CodeableConcept[] | undefined;

  /**
   * CommunicationRequest.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Focus of message
   * - **Definition:** The patient or group that is the focus of this communication request.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subject?: Reference | undefined;

  /**
   * CommunicationRequest.about Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resources that pertain to this communication request
   * - **Definition:** Other resources that pertain to this communication request and to which this communication request should be associated.
   * - **Comment:** Don\'t use CommunicationRequest.about element when a more specific element exists, such as basedOn, reasonReference, or replaces.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private about?: Reference[] | undefined;

  /**
   * CommunicationRequest.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter created as part of
   * - **Definition:** The Encounter during which this CommunicationRequest was created or to which the creation of this record is tightly associated.
   * - **Comment:** This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private encounter?: Reference | undefined;

  /**
   * CommunicationRequest.payload Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Message payload
   * - **Definition:** Text, attachment(s), or resource(s) to be communicated to the recipient.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private payload?: CommunicationRequestPayloadComponent[] | undefined;

  /**
   * CommunicationRequest.occurrence[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('CommunicationRequest.occurrence[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When scheduled
   * - **Definition:** The time when this communication is to occur.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('CommunicationRequest.occurrence[x]',[
    'dateTime',
    'Period',
  ])
  private occurrence?: IDataType | undefined;

  /**
   * CommunicationRequest.authoredOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When request transitioned to being actionable
   * - **Definition:** For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private authoredOn?: DateTimeType | undefined;

  /**
   * CommunicationRequest.requester Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who/what is requesting service
   * - **Definition:** The device, individual, or organization who initiated the request and has responsibility for its activation.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private requester?: Reference | undefined;

  /**
   * CommunicationRequest.recipient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Message recipient
   * - **Definition:** The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recipient?: Reference[] | undefined;

  /**
   * CommunicationRequest.sender Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Message sender
   * - **Definition:** The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sender?: Reference | undefined;

  /**
   * CommunicationRequest.reasonCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why is communication needed?
   * - **Definition:** Describes why the request is being made in coded or textual form.
   * - **Comment:** Textual reasons can be captured using reasonCode.text.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reasonCode?: CodeableConcept[] | undefined;

  /**
   * CommunicationRequest.reasonReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why is communication needed?
   * - **Definition:** Indicates another resource whose existence justifies this request.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reasonReference?: Reference[] | undefined;

  /**
   * CommunicationRequest.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments made about communication request
   * - **Definition:** Comments made about the request by the requester, sender, recipient, subject or other participants.
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
      const optErrMsg = `Invalid CommunicationRequest.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid CommunicationRequest.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `basedOn` property value as a Reference array
   */
  public getBasedOn(): Reference[] {
    return this.basedOn ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `basedOn` property.
   *
   * @decorator `@ReferenceTargets('CommunicationRequest.basedOn', ['Resource',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.basedOn', [
    'Resource',
  ])
  public setBasedOn(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.basedOn = value;
    } else {
      this.basedOn = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `basedOn` array property.
   *
   * @decorator `@ReferenceTargets('CommunicationRequest.basedOn', ['Resource',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.basedOn', [
    'Resource',
  ])
  public addBasedOn(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initBasedOn();
      this.basedOn?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `basedOn` property exists and has a value; `false` otherwise
   */
  public hasBasedOn(): boolean {
    return isDefinedList<Reference>(this.basedOn) && this.basedOn.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `basedOn` property
   */
  private initBasedOn(): void {
    if (!this.hasBasedOn()) {
      this.basedOn = [] as Reference[];
    }
  }

  /**
   * @returns the `replaces` property value as a Reference array
   */
  public getReplaces(): Reference[] {
    return this.replaces ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `replaces` property.
   *
   * @decorator `@ReferenceTargets('CommunicationRequest.replaces', ['CommunicationRequest',])`
   *
   * @param value - the `replaces` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.replaces', [
    'CommunicationRequest',
  ])
  public setReplaces(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.replaces = value;
    } else {
      this.replaces = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `replaces` array property.
   *
   * @decorator `@ReferenceTargets('CommunicationRequest.replaces', ['CommunicationRequest',])`
   *
   * @param value - the `replaces` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.replaces', [
    'CommunicationRequest',
  ])
  public addReplaces(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReplaces();
      this.replaces?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `replaces` property exists and has a value; `false` otherwise
   */
  public hasReplaces(): boolean {
    return isDefinedList<Reference>(this.replaces) && this.replaces.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `replaces` property
   */
  private initReplaces(): void {
    if (!this.hasReplaces()) {
      this.replaces = [] as Reference[];
    }
  }

  /**
   * @returns the `groupIdentifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getGroupIdentifier(): Identifier {
    return this.groupIdentifier ?? new Identifier();
  }

  /**
   * Assigns the provided GroupIdentifier object value to the `groupIdentifier` property.
   *
   * @param value - the `groupIdentifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGroupIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid CommunicationRequest.groupIdentifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.groupIdentifier = value;
    } else {
      this.groupIdentifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `groupIdentifier` property exists and has a value; `false` otherwise
   */
  public hasGroupIdentifier(): boolean {
    return isDefined<Identifier>(this.groupIdentifier) && !this.groupIdentifier.isEmpty();
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
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
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `CommunicationRequest.status is required`);
    const errMsgPrefix = `Invalid CommunicationRequest.status`;
    assertEnumCodeType<RequestStatusEnum>(enumType, RequestStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
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
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `CommunicationRequest.status is required`);
    const optErrMsg = `Invalid CommunicationRequest.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.requestStatusEnum);
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
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
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
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `CommunicationRequest.status is required`);
    const optErrMsg = `Invalid CommunicationRequest.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.requestStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `statusReason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStatusReason(): CodeableConcept {
    return this.statusReason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided StatusReason object value to the `statusReason` property.
   *
   * @param value - the `statusReason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatusReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CommunicationRequest.statusReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.statusReason = value;
    } else {
      this.statusReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusReason` property exists and has a value; `false` otherwise
   */
  public hasStatusReason(): boolean {
    return isDefined<CodeableConcept>(this.statusReason) && !this.statusReason.isEmpty();
  }

  /**
   * @returns the `category` property value as a CodeableConcept array
   */
  public getCategory(): CodeableConcept[] {
    return this.category ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `category` property.
   *
   * @param value - the `category` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CommunicationRequest.category; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `category` array property.
   *
   * @param value - the `category` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CommunicationRequest.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCategory();
      this.category?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefinedList<CodeableConcept>(this.category) && this.category.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `category` property
   */
  private initCategory(): void {
    if(!this.hasCategory()) {
      this.category = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `priority` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriorityEnumType(): EnumCodeType | undefined {
    return this.priority;
  }

  /**
   * Assigns the provided EnumCodeType value to the `priority` property.
   *
   * @param enumType - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriorityEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid CommunicationRequest.priority';
      assertEnumCodeType<RequestPriorityEnum>(enumType, RequestPriorityEnum, errMsgPrefix);
      this.priority = enumType;
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriorityEnumType(): boolean {
    return isDefined<EnumCodeType>(this.priority) && !this.priority.isEmpty() && this.priority.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `priority` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriorityElement(): CodeType | undefined {
    if (this.priority === undefined) {
      return undefined;
    }
    return this.priority as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `priority` property.
   *
   * @param element - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriorityElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CommunicationRequest.priority; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.priority = new EnumCodeType(element, this.requestPriorityEnum);
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriorityElement(): boolean {
    return this.hasPriorityEnumType();
  }

  /**
   * @returns the `priority` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriority(): fhirCode | undefined {
    if (this.priority === undefined) {
      return undefined;
    }
    return this.priority.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `priority` property.
   *
   * @param value - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriority(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CommunicationRequest.priority; Provided value is not an instance of fhirCode.`;
      this.priority = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.requestPriorityEnum);
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriority(): boolean {
    return this.hasPriorityEnumType();
  }

  /**
   * @returns the `doNotPerform` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getDoNotPerformElement(): BooleanType {
    return this.doNotPerform ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `doNotPerform` property.
   *
   * @param element - the `doNotPerform` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoNotPerformElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CommunicationRequest.doNotPerform; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.doNotPerform = element;
    } else {
      this.doNotPerform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doNotPerform` property exists and has a value; `false` otherwise
   */
  public hasDoNotPerformElement(): boolean {
    return isDefined<BooleanType>(this.doNotPerform) && !this.doNotPerform.isEmpty();
  }

  /**
   * @returns the `doNotPerform` property value as a fhirBoolean if defined; else undefined
   */
  public getDoNotPerform(): fhirBoolean | undefined {
    return this.doNotPerform?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `doNotPerform` property.
   *
   * @param value - the `doNotPerform` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoNotPerform(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CommunicationRequest.doNotPerform (${String(value)})`;
      this.doNotPerform = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.doNotPerform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doNotPerform` property exists and has a value; `false` otherwise
   */
  public hasDoNotPerform(): boolean {
    return this.hasDoNotPerformElement();
  }

  /**
   * @returns the `medium` property value as a CodeableConcept array
   */
  public getMedium(): CodeableConcept[] {
    return this.medium ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `medium` property.
   *
   * @param value - the `medium` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMedium(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CommunicationRequest.medium; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.medium = value;
    } else {
      this.medium = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `medium` array property.
   *
   * @param value - the `medium` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMedium(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CommunicationRequest.medium; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initMedium();
      this.medium?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `medium` property exists and has a value; `false` otherwise
   */
  public hasMedium(): boolean {
    return isDefinedList<CodeableConcept>(this.medium) && this.medium.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `medium` property
   */
  private initMedium(): void {
    if(!this.hasMedium()) {
      this.medium = [] as CodeableConcept[];
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
   * @decorator `@ReferenceTargets('CommunicationRequest.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.subject', [
    'Patient',
  
    'Group',
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
   * @returns the `about` property value as a Reference array
   */
  public getAbout(): Reference[] {
    return this.about ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `about` property.
   *
   * @decorator `@ReferenceTargets('CommunicationRequest.about', ['Resource',])`
   *
   * @param value - the `about` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.about', [
    'Resource',
  ])
  public setAbout(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.about = value;
    } else {
      this.about = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `about` array property.
   *
   * @decorator `@ReferenceTargets('CommunicationRequest.about', ['Resource',])`
   *
   * @param value - the `about` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.about', [
    'Resource',
  ])
  public addAbout(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAbout();
      this.about?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `about` property exists and has a value; `false` otherwise
   */
  public hasAbout(): boolean {
    return isDefinedList<Reference>(this.about) && this.about.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `about` property
   */
  private initAbout(): void {
    if (!this.hasAbout()) {
      this.about = [] as Reference[];
    }
  }

  /**
   * @returns the `encounter` property value as a Reference object; else an empty Reference object
   */
  public getEncounter(): Reference {
    return this.encounter ?? new Reference();
  }

  /**
   * Assigns the provided Encounter object value to the `encounter` property.
   *
   * @decorator `@ReferenceTargets('CommunicationRequest.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.encounter', [
    'Encounter',
  ])
  public setEncounter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.encounter = value;
    } else {
      this.encounter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `encounter` property exists and has a value; `false` otherwise
   */
  public hasEncounter(): boolean {
    return isDefined<Reference>(this.encounter) && !this.encounter.isEmpty();
  }

  /**
   * @returns the `payload` property value as a CommunicationRequestPayloadComponent array
   */
  public getPayload(): CommunicationRequestPayloadComponent[] {
    return this.payload ?? ([] as CommunicationRequestPayloadComponent[]);
  }

  /**
   * Assigns the provided CommunicationRequestPayloadComponent array value to the `payload` property.
   *
   * @param value - the `payload` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPayload(value: CommunicationRequestPayloadComponent[] | undefined): this {
    if (isDefinedList<CommunicationRequestPayloadComponent>(value)) {
      const optErrMsg = `Invalid CommunicationRequest.payload; Provided value array has an element that is not an instance of CommunicationRequestPayloadComponent.`;
      assertFhirTypeList<CommunicationRequestPayloadComponent>(value, CommunicationRequestPayloadComponent, optErrMsg);
      this.payload = value;
    } else {
      this.payload = undefined;
    }
    return this;
  }

  /**
   * Add the provided CommunicationRequestPayloadComponent value to the `payload` array property.
   *
   * @param value - the `payload` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPayload(value: CommunicationRequestPayloadComponent | undefined): this {
    if (isDefined<CommunicationRequestPayloadComponent>(value)) {
      const optErrMsg = `Invalid CommunicationRequest.payload; Provided element is not an instance of CommunicationRequestPayloadComponent.`;
      assertFhirType<CommunicationRequestPayloadComponent>(value, CommunicationRequestPayloadComponent, optErrMsg);
      this.initPayload();
      this.payload?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `payload` property exists and has a value; `false` otherwise
   */
  public hasPayload(): boolean {
    return isDefinedList<CommunicationRequestPayloadComponent>(this.payload) && this.payload.some((item: CommunicationRequestPayloadComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `payload` property
   */
  private initPayload(): void {
    if(!this.hasPayload()) {
      this.payload = [] as CommunicationRequestPayloadComponent[];
    }
  }

  /**
   * @returns the `occurrence` property value as a DataType object if defined; else undefined
   */
  public getOccurrence(): IDataType | undefined {
    return this.occurrence;
  }

  /**
   * Assigns the provided DataType object value to the `occurrence` property.
   *
   * @decorator `@ChoiceDataTypes('CommunicationRequest.occurrence[x]')`
   *
   * @param value - the `occurrence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('CommunicationRequest.occurrence[x]')
  public setOccurrence(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.occurrence = value;
    } else {
      this.occurrence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrence` property exists and has a value; `false` otherwise
   */
  public hasOccurrence(): boolean {
    return isDefined<IDataType>(this.occurrence) && !this.occurrence.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `occurrence` property value as a DateTimeType object if defined; else undefined
   */
  public getOccurrenceDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.occurrence)) {
      return undefined;
    }
    if (!(this.occurrence instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for CommunicationRequest.occurrence[x]: Expected DateTimeType but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `occurrence` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasOccurrenceDateTimeType(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof DateTimeType;
  }

  /**
   * @returns the `occurrence` property value as a Period object if defined; else undefined
   */
  public getOccurrencePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.occurrence)) {
      return undefined;
    }
    if (!(this.occurrence instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for CommunicationRequest.occurrence[x]: Expected Period but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `occurrence` property exists as a Period and has a value; `false` otherwise
   */
  public hasOccurrencePeriod(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `authoredOn` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getAuthoredOnElement(): DateTimeType {
    return this.authoredOn ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `authoredOn` property.
   *
   * @param element - the `authoredOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthoredOnElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid CommunicationRequest.authoredOn; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.authoredOn = element;
    } else {
      this.authoredOn = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authoredOn` property exists and has a value; `false` otherwise
   */
  public hasAuthoredOnElement(): boolean {
    return isDefined<DateTimeType>(this.authoredOn) && !this.authoredOn.isEmpty();
  }

  /**
   * @returns the `authoredOn` property value as a fhirDateTime if defined; else undefined
   */
  public getAuthoredOn(): fhirDateTime | undefined {
    return this.authoredOn?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `authoredOn` property.
   *
   * @param value - the `authoredOn` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthoredOn(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid CommunicationRequest.authoredOn (${String(value)})`;
      this.authoredOn = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.authoredOn = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authoredOn` property exists and has a value; `false` otherwise
   */
  public hasAuthoredOn(): boolean {
    return this.hasAuthoredOnElement();
  }

  /**
   * @returns the `requester` property value as a Reference object; else an empty Reference object
   */
  public getRequester(): Reference {
    return this.requester ?? new Reference();
  }

  /**
   * Assigns the provided Requester object value to the `requester` property.
   *
   * @decorator `@ReferenceTargets('CommunicationRequest.requester', ['Practitioner','PractitionerRole','Organization','Patient','RelatedPerson','Device',])`
   *
   * @param value - the `requester` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.requester', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Patient',
  
    'RelatedPerson',
  
    'Device',
  ])
  public setRequester(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.requester = value;
    } else {
      this.requester = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requester` property exists and has a value; `false` otherwise
   */
  public hasRequester(): boolean {
    return isDefined<Reference>(this.requester) && !this.requester.isEmpty();
  }

  /**
   * @returns the `recipient` property value as a Reference array
   */
  public getRecipient(): Reference[] {
    return this.recipient ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `recipient` property.
   *
   * @decorator `@ReferenceTargets('CommunicationRequest.recipient', ['Device','Organization','Patient','Practitioner','PractitionerRole','RelatedPerson','Group','CareTeam','HealthcareService',])`
   *
   * @param value - the `recipient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.recipient', [
    'Device',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Group',
  
    'CareTeam',
  
    'HealthcareService',
  ])
  public setRecipient(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.recipient = value;
    } else {
      this.recipient = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `recipient` array property.
   *
   * @decorator `@ReferenceTargets('CommunicationRequest.recipient', ['Device','Organization','Patient','Practitioner','PractitionerRole','RelatedPerson','Group','CareTeam','HealthcareService',])`
   *
   * @param value - the `recipient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.recipient', [
    'Device',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Group',
  
    'CareTeam',
  
    'HealthcareService',
  ])
  public addRecipient(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRecipient();
      this.recipient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `recipient` property exists and has a value; `false` otherwise
   */
  public hasRecipient(): boolean {
    return isDefinedList<Reference>(this.recipient) && this.recipient.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `recipient` property
   */
  private initRecipient(): void {
    if (!this.hasRecipient()) {
      this.recipient = [] as Reference[];
    }
  }

  /**
   * @returns the `sender` property value as a Reference object; else an empty Reference object
   */
  public getSender(): Reference {
    return this.sender ?? new Reference();
  }

  /**
   * Assigns the provided Sender object value to the `sender` property.
   *
   * @decorator `@ReferenceTargets('CommunicationRequest.sender', ['Device','Organization','Patient','Practitioner','PractitionerRole','RelatedPerson','HealthcareService',])`
   *
   * @param value - the `sender` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.sender', [
    'Device',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'HealthcareService',
  ])
  public setSender(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.sender = value;
    } else {
      this.sender = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sender` property exists and has a value; `false` otherwise
   */
  public hasSender(): boolean {
    return isDefined<Reference>(this.sender) && !this.sender.isEmpty();
  }

  /**
   * @returns the `reasonCode` property value as a CodeableConcept array
   */
  public getReasonCode(): CodeableConcept[] {
    return this.reasonCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `reasonCode` property.
   *
   * @param value - the `reasonCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReasonCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CommunicationRequest.reasonCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reasonCode = value;
    } else {
      this.reasonCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `reasonCode` array property.
   *
   * @param value - the `reasonCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReasonCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CommunicationRequest.reasonCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initReasonCode();
      this.reasonCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonCode` property exists and has a value; `false` otherwise
   */
  public hasReasonCode(): boolean {
    return isDefinedList<CodeableConcept>(this.reasonCode) && this.reasonCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `reasonCode` property
   */
  private initReasonCode(): void {
    if(!this.hasReasonCode()) {
      this.reasonCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `reasonReference` property value as a Reference array
   */
  public getReasonReference(): Reference[] {
    return this.reasonReference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `reasonReference` property.
   *
   * @decorator `@ReferenceTargets('CommunicationRequest.reasonReference', ['Condition','Observation','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.reasonReference', [
    'Condition',
  
    'Observation',
  
    'DiagnosticReport',
  
    'DocumentReference',
  ])
  public setReasonReference(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reasonReference = value;
    } else {
      this.reasonReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `reasonReference` array property.
   *
   * @decorator `@ReferenceTargets('CommunicationRequest.reasonReference', ['Condition','Observation','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CommunicationRequest.reasonReference', [
    'Condition',
  
    'Observation',
  
    'DiagnosticReport',
  
    'DocumentReference',
  ])
  public addReasonReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReasonReference();
      this.reasonReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonReference` property exists and has a value; `false` otherwise
   */
  public hasReasonReference(): boolean {
    return isDefinedList<Reference>(this.reasonReference) && this.reasonReference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `reasonReference` property
   */
  private initReasonReference(): void {
    if (!this.hasReasonReference()) {
      this.reasonReference = [] as Reference[];
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
      const optErrMsg = `Invalid CommunicationRequest.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid CommunicationRequest.note; Provided element is not an instance of Annotation.`;
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
    return 'CommunicationRequest';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.basedOn,
      this.replaces,
      this.groupIdentifier,
      this.status,
      this.statusReason,
      this.category,
      this.priority,
      this.doNotPerform,
      this.medium,
      this.subject,
      this.about,
      this.encounter,
      this.payload,
      this.occurrence,
      this.authoredOn,
      this.requester,
      this.recipient,
      this.sender,
      this.reasonCode,
      this.reasonReference,
      this.note,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CommunicationRequest {
    const dest = new CommunicationRequest();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CommunicationRequest): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    const replacesList = copyListValues<Reference>(this.replaces);
    dest.replaces = replacesList.length === 0 ? undefined : replacesList;
    dest.groupIdentifier = this.groupIdentifier?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.statusReason = this.statusReason?.copy();
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.priority = this.priority?.copy();
    dest.doNotPerform = this.doNotPerform?.copy();
    const mediumList = copyListValues<CodeableConcept>(this.medium);
    dest.medium = mediumList.length === 0 ? undefined : mediumList;
    dest.subject = this.subject?.copy();
    const aboutList = copyListValues<Reference>(this.about);
    dest.about = aboutList.length === 0 ? undefined : aboutList;
    dest.encounter = this.encounter?.copy();
    const payloadList = copyListValues<CommunicationRequestPayloadComponent>(this.payload);
    dest.payload = payloadList.length === 0 ? undefined : payloadList;
    dest.occurrence = this.occurrence?.copy() as IDataType;
    dest.authoredOn = this.authoredOn?.copy();
    dest.requester = this.requester?.copy();
    const recipientList = copyListValues<Reference>(this.recipient);
    dest.recipient = recipientList.length === 0 ? undefined : recipientList;
    dest.sender = this.sender?.copy();
    const reasonCodeList = copyListValues<CodeableConcept>(this.reasonCode);
    dest.reasonCode = reasonCodeList.length === 0 ? undefined : reasonCodeList;
    const reasonReferenceList = copyListValues<Reference>(this.reasonReference);
    dest.reasonReference = reasonReferenceList.length === 0 ? undefined : reasonReferenceList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasReplaces()) {
      setFhirComplexListJson(this.getReplaces(), 'replaces', jsonObj);
    }

    if (this.hasGroupIdentifier()) {
      setFhirComplexJson(this.getGroupIdentifier(), 'groupIdentifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`CommunicationRequest.status`);
    }

    if (this.hasStatusReason()) {
      setFhirComplexJson(this.getStatusReason(), 'statusReason', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasPriorityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPriorityElement()!, 'priority', jsonObj);
    }

    if (this.hasDoNotPerformElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getDoNotPerformElement(), 'doNotPerform', jsonObj);
    }

    if (this.hasMedium()) {
      setFhirComplexListJson(this.getMedium(), 'medium', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasAbout()) {
      setFhirComplexListJson(this.getAbout(), 'about', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasPayload()) {
      setFhirBackboneElementListJson(this.getPayload(), 'payload', jsonObj);
    }

    if (this.hasOccurrence()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOccurrence()!, 'occurrence', jsonObj);
    }

    if (this.hasAuthoredOnElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getAuthoredOnElement(), 'authoredOn', jsonObj);
    }

    if (this.hasRequester()) {
      setFhirComplexJson(this.getRequester(), 'requester', jsonObj);
    }

    if (this.hasRecipient()) {
      setFhirComplexListJson(this.getRecipient(), 'recipient', jsonObj);
    }

    if (this.hasSender()) {
      setFhirComplexJson(this.getSender(), 'sender', jsonObj);
    }

    if (this.hasReasonCode()) {
      setFhirComplexListJson(this.getReasonCode(), 'reasonCode', jsonObj);
    }

    if (this.hasReasonReference()) {
      setFhirComplexListJson(this.getReasonReference(), 'reasonReference', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * CommunicationRequestPayloadComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Message payload
 * - **Definition:** Text, attachment(s), or resource(s) to be communicated to the recipient.
 *
 * @category Data Models: Resource
 * @see [FHIR CommunicationRequest](http://hl7.org/fhir/StructureDefinition/CommunicationRequest)
 */
export class CommunicationRequestPayloadComponent extends BackboneElement implements IBackboneElement {
  constructor(content: IDataType | null = null) {
    super();

    this.content = null;
    if (isDefined<IDataType>(content)) {
      this.setContent(content);
    }

  }

  /**
   * Parse the provided `CommunicationRequestPayloadComponent` JSON to instantiate the CommunicationRequestPayloadComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CommunicationRequestPayloadComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CommunicationRequestPayloadComponent
   * @returns CommunicationRequestPayloadComponent data model or undefined for `CommunicationRequestPayloadComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CommunicationRequestPayloadComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CommunicationRequestPayloadComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CommunicationRequestPayloadComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = CommunicationRequestPayloadComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for CommunicationRequestPayloadComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'content[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const content: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (content === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setContent(content);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * CommunicationRequest.payload.content[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('CommunicationRequest.payload.content[x]', ['string','Attachment','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Message part content
   * - **Definition:** The communicated content (or for multi-part communications, one portion of the communication).
   * - **FHIR Types:**
   *     'string',
   *     'Attachment',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('CommunicationRequest.payload.content[x]',[
    'string',
    'Attachment',
    'Reference',
  ])
  private content: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `content` property value as a DataType object; else null
   */
  public getContent(): IDataType | null {
    return this.content;
  }

  /**
   * Assigns the provided DataType object value to the `content` property.
   *
   * @decorator `@ChoiceDataTypes('CommunicationRequest.payload.content[x]')`
   *
   * @param value - the `content` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('CommunicationRequest.payload.content[x]')
  public setContent(value: IDataType): this {
    assertIsDefined<IDataType>(value, `CommunicationRequest.payload.content[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.content = value;
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContent(): boolean {
    return isDefined<IDataType>(this.content) && !this.content.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `content` property value as a StringType object if defined; else null
   */
  public getContentStringType(): StringType | null {
    if (!isDefined<IDataType>(this.content)) {
      return null;
    }
    if (!(this.content instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for CommunicationRequest.payload.content[x]: Expected StringType but encountered ${this.content.fhirType()}`,
      );
    }
    return this.content;
  }

  /**
   * @returns `true` if the `` property exists as a StringType and has a value; `false` otherwise
   */
  public hasContentStringType(): boolean {
    return this.hasContent() && this.content instanceof StringType;
  }

  /**
   * @returns the `content` property value as a Attachment object if defined; else null
   */
  public getContentAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.content)) {
      return null;
    }
    if (!(this.content instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for CommunicationRequest.payload.content[x]: Expected Attachment but encountered ${this.content.fhirType()}`,
      );
    }
    return this.content;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasContentAttachment(): boolean {
    return this.hasContent() && this.content instanceof Attachment;
  }

  /**
   * @returns the `content` property value as a Reference object if defined; else null
   */
  public getContentReference(): Reference | null {
    if (!isDefined<IDataType>(this.content)) {
      return null;
    }
    if (!(this.content instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for CommunicationRequest.payload.content[x]: Expected Reference but encountered ${this.content.fhirType()}`,
      );
    }
    return this.content;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasContentReference(): boolean {
    return this.hasContent() && this.content instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CommunicationRequest.payload';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.content,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CommunicationRequestPayloadComponent {
    const dest = new CommunicationRequestPayloadComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CommunicationRequestPayloadComponent): void {
    super.copyValues(dest);
    dest.content = this.content ? this.content.copy() as IDataType : null;
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

    if (this.hasContent()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getContent()!, 'content', jsonObj);
    } else {
      missingReqdProperties.push(`CommunicationRequest.payload.content[x]`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
