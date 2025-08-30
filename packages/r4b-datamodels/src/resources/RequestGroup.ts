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
 * RequestGroup Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/RequestGroup
 * StructureDefinition.name: RequestGroup
 * StructureDefinition.description: A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CanonicalType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  IdType,
  InvalidTypeError,
  JSON,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  UriType,
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
  fhirDateTime,
  fhirDateTimeSchema,
  fhirId,
  fhirIdSchema,
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { ActionCardinalityBehaviorEnum } from '../code-systems/ActionCardinalityBehaviorEnum';
import { ActionConditionKindEnum } from '../code-systems/ActionConditionKindEnum';
import { ActionGroupingBehaviorEnum } from '../code-systems/ActionGroupingBehaviorEnum';
import { ActionPrecheckBehaviorEnum } from '../code-systems/ActionPrecheckBehaviorEnum';
import { ActionRelationshipTypeEnum } from '../code-systems/ActionRelationshipTypeEnum';
import { ActionRequiredBehaviorEnum } from '../code-systems/ActionRequiredBehaviorEnum';
import { ActionSelectionBehaviorEnum } from '../code-systems/ActionSelectionBehaviorEnum';
import { Age, Annotation, CodeableConcept, Duration, Expression, Identifier, PARSABLE_DATATYPE_MAP, Period, Range, Reference, RelatedArtifact, Timing } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { RequestIntentEnum } from '../code-systems/RequestIntentEnum';
import { RequestPriorityEnum } from '../code-systems/RequestPriorityEnum';
import { RequestStatusEnum } from '../code-systems/RequestStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * RequestGroup Class
 *
 * @remarks
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 *
 * **FHIR Specification**
 * - **Short:** A group of related requests
 * - **Definition:** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR RequestGroup](http://hl7.org/fhir/StructureDefinition/RequestGroup)
 */
export class RequestGroup extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, intent: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.requestStatusEnum = new RequestStatusEnum();
    this.requestIntentEnum = new RequestIntentEnum();
    this.requestPriorityEnum = new RequestPriorityEnum();

    this.status = constructorCodeValueAsEnumCodeType<RequestStatusEnum>(
      status,
      RequestStatusEnum,
      this.requestStatusEnum,
      'RequestGroup.status',
    );

    this.intent = constructorCodeValueAsEnumCodeType<RequestIntentEnum>(
      intent,
      RequestIntentEnum,
      this.requestIntentEnum,
      'RequestGroup.intent',
    );
  }

  /**
   * Parse the provided `RequestGroup` JSON to instantiate the RequestGroup data model.
   *
   * @param sourceJson - JSON representing FHIR `RequestGroup`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RequestGroup
   * @returns RequestGroup data model or undefined for `RequestGroup`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): RequestGroup | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RequestGroup';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RequestGroup();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'RequestGroup');
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

    fieldName = 'instantiatesCanonical';
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
        const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addInstantiatesCanonicalElement(datatype);
        }
      });
    }

    fieldName = 'instantiatesUri';
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
        const datatype: UriType | undefined = fhirParser.parseUriType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addInstantiatesUriElement(datatype);
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
        instance.setStatus(null);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      instance.setStatus(null);
    }

    fieldName = 'intent';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setIntent(null);
      } else {
        instance.setIntentElement(datatype);
      }
    } else {
      instance.setIntent(null);
    }

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setPriorityElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'authoredOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setAuthoredOnElement(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
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

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RequestGroupActionComponent | undefined = RequestGroupActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAction(component);
        }
      });
    }

    return instance;
  }

  /**
   * RequestGroup.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier
   * - **Definition:** Allows a service to provide a unique, business identifier for the request.
   * - **Requirements:** Allows identification of the request as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * RequestGroup.instantiatesCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates FHIR protocol or definition
   * - **Definition:** A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
   * - **FHIR Type:** `canonical`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesCanonical?: CanonicalType[] | undefined;

  /**
   * RequestGroup.instantiatesUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates external protocol or definition
   * - **Definition:** A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesUri?: UriType[] | undefined;

  /**
   * RequestGroup.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fulfills plan, proposal, or order
   * - **Definition:** A plan, proposal or order that is fulfilled in whole or in part by this request.
   * - **Requirements:** Allows tracing of authorization for the request and tracking whether proposals/recommendations were acted upon.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private basedOn?: Reference[] | undefined;

  /**
   * RequestGroup.replaces Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request(s) replaced by this request
   * - **Definition:** Completed or terminated request(s) whose function is taken by this new request.
   * - **Comment:** The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
   * - **Requirements:** Allows tracing the continuation of a therapy or administrative process instantiated through multiple requests.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private replaces?: Reference[] | undefined;

  /**
   * RequestGroup.groupIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Composite request this is part of
   * - **Definition:** A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form.
   * - **Comment:** Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
   * - **Requirements:** Some business processes need to know if multiple items were ordered as part of the same "prescription" or "requisition" for billing or other purposes.
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
   * RequestGroup.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | on-hold | revoked | completed | entered-in-error | unknown
   * - **Definition:** The current state of the request. For request groups, the status reflects the status of all the requests in the group.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RequestStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * FHIR CodeSystem: RequestIntent
   *
   * @see {@link RequestIntentEnum }
   */
  private readonly requestIntentEnum: RequestIntentEnum;

  /**
   * RequestGroup.intent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   * - **Definition:** Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
   * - **Requirements:** Proposals/recommendations, plans and orders all use the same structure and can exist in the same fulfillment chain.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element changes the interpretation of all descriptive attributes. For example &quot;the time the request is recommended to occur&quot; vs. &quot;the time the request is authorized to occur&quot; or &quot;who is recommended to perform the request&quot; vs. &quot;who is authorized to perform the request
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  private intent: EnumCodeType | null;

  /**
   * FHIR CodeSystem: RequestPriority
   *
   * @see {@link RequestPriorityEnum }
   */
  private readonly requestPriorityEnum: RequestPriorityEnum;

  /**
   * RequestGroup.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** routine | urgent | asap | stat
   * - **Definition:** Indicates how quickly the request should be addressed with respect to other requests.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  private priority?: EnumCodeType | undefined;

  /**
   * RequestGroup.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What\'s being requested/ordered
   * - **Definition:** A code that identifies what the overall request group is.
   * - **Comment:** This element can be used to provide a code that captures the meaning of the request group as a whole, as opposed to the code of the action element, which captures the meaning of the individual actions within the request group.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * RequestGroup.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who the request group is about
   * - **Definition:** The subject for which the request group was created.
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
   * RequestGroup.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Created as part of
   * - **Definition:** Describes the context of the request group, if any.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private encounter?: Reference | undefined;

  /**
   * RequestGroup.authoredOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the request group was authored
   * - **Definition:** Indicates when the request group was created.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authoredOn?: DateTimeType | undefined;

  /**
   * RequestGroup.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Device or practitioner that authored the request group
   * - **Definition:** Provides a reference to the author of the request group.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private author?: Reference | undefined;

  /**
   * RequestGroup.reasonCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why the request group is needed
   * - **Definition:** Describes the reason for the request group in coded or textual form.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonCode?: CodeableConcept[] | undefined;

  /**
   * RequestGroup.reasonReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why the request group is needed
   * - **Definition:** Indicates another resource whose existence justifies this request group.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonReference?: Reference[] | undefined;

  /**
   * RequestGroup.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional notes about the response
   * - **Definition:** Provides a mechanism to communicate additional information about the response.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * RequestGroup.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Proposed actions, if any
   * - **Definition:** The actions, if any, produced by the evaluation of the artifact.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action?: RequestGroupActionComponent[] | undefined;

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
      const optErrMsg = `Invalid RequestGroup.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid RequestGroup.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `instantiatesCanonical` property value as a CanonicalType array
   */
  public getInstantiatesCanonicalElement(): CanonicalType[] {
    return this.instantiatesCanonical ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `instantiatesCanonical` property.
   *
   * @param element - the `instantiatesCanonical` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonicalElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid RequestGroup.instantiatesCanonical; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.instantiatesCanonical = element;
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `instantiatesCanonical` array property.
   *
   * @param element - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesCanonicalElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid RequestGroup.instantiatesCanonical; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initInstantiatesCanonical();
      this.instantiatesCanonical?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonicalElement(): boolean {
    return isDefinedList<CanonicalType>(this.instantiatesCanonical) && this.instantiatesCanonical.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `instantiatesCanonical` property value as a fhirCanonical array
   */
  public getInstantiatesCanonical(): fhirCanonical[] {
    this.initInstantiatesCanonical();
    const instantiatesCanonicalValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.instantiatesCanonical!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        instantiatesCanonicalValues.push(value);
      }
    }
    return instantiatesCanonicalValues;
  }

  /**
   * Assigns the provided primitive value array to the `instantiatesCanonical` property.
   *
   * @param value - the `instantiatesCanonical` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonical(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const instantiatesCanonicalElements = [] as CanonicalType[];
      for (const instantiatesCanonicalValue of value) {
        const optErrMsg = `Invalid RequestGroup.instantiatesCanonical array item (${String(instantiatesCanonicalValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(instantiatesCanonicalValue, fhirCanonicalSchema, optErrMsg));
        instantiatesCanonicalElements.push(element);
      }
      this.instantiatesCanonical = instantiatesCanonicalElements;
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `instantiatesCanonical` array property.
   *
   * @param value - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesCanonical(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid RequestGroup.instantiatesCanonical array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initInstantiatesCanonical();
      this.addInstantiatesCanonicalElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonical(): boolean {
    return this.hasInstantiatesCanonicalElement();
  }

  /**
   * Initialize the `instantiatesCanonical` property
   */
  private initInstantiatesCanonical(): void {
    if (!this.hasInstantiatesCanonical()) {
      this.instantiatesCanonical = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `instantiatesUri` property value as a UriType array
   */
  public getInstantiatesUriElement(): UriType[] {
    return this.instantiatesUri ?? ([] as UriType[]);
  }

  /**
   * Assigns the provided UriType array value to the `instantiatesUri` property.
   *
   * @param element - the `instantiatesUri` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUriElement(element: UriType[] | undefined): this {
    if (isDefinedList<UriType>(element)) {
      const optErrMsg = `Invalid RequestGroup.instantiatesUri; Provided value array has an element that is not an instance of UriType.`;
      assertFhirTypeList<UriType>(element, UriType, optErrMsg);
      this.instantiatesUri = element;
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * Add the provided UriType value to the `instantiatesUri` array property.
   *
   * @param element - the `instantiatesUri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesUriElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid RequestGroup.instantiatesUri; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.initInstantiatesUri();
      this.instantiatesUri?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUriElement(): boolean {
    return isDefinedList<UriType>(this.instantiatesUri) && this.instantiatesUri.some((item: UriType) => !item.isEmpty());
  }

  /**
   * @returns the `instantiatesUri` property value as a fhirUri array
   */
  public getInstantiatesUri(): fhirUri[] {
    this.initInstantiatesUri();
    const instantiatesUriValues = [] as fhirUri[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.instantiatesUri!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        instantiatesUriValues.push(value);
      }
    }
    return instantiatesUriValues;
  }

  /**
   * Assigns the provided primitive value array to the `instantiatesUri` property.
   *
   * @param value - the `instantiatesUri` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUri(value: fhirUri[] | undefined): this {
    if (isDefinedList<fhirUri>(value)) {
      const instantiatesUriElements = [] as UriType[];
      for (const instantiatesUriValue of value) {
        const optErrMsg = `Invalid RequestGroup.instantiatesUri array item (${String(instantiatesUriValue)})`;
        const element = new UriType(parseFhirPrimitiveData(instantiatesUriValue, fhirUriSchema, optErrMsg));
        instantiatesUriElements.push(element);
      }
      this.instantiatesUri = instantiatesUriElements;
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `instantiatesUri` array property.
   *
   * @param value - the `instantiatesUri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesUri(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid RequestGroup.instantiatesUri array item (${String(value)})`;
      const element = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
      this.initInstantiatesUri();
      this.addInstantiatesUriElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUri(): boolean {
    return this.hasInstantiatesUriElement();
  }

  /**
   * Initialize the `instantiatesUri` property
   */
  private initInstantiatesUri(): void {
    if (!this.hasInstantiatesUri()) {
      this.instantiatesUri = [] as UriType[];
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
   * @decorator `@ReferenceTargets('RequestGroup.basedOn', ['Resource',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestGroup.basedOn', [
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
   * @decorator `@ReferenceTargets('RequestGroup.basedOn', ['Resource',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestGroup.basedOn', [
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
   * @decorator `@ReferenceTargets('RequestGroup.replaces', ['Resource',])`
   *
   * @param value - the `replaces` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestGroup.replaces', [
    'Resource',
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
   * @decorator `@ReferenceTargets('RequestGroup.replaces', ['Resource',])`
   *
   * @param value - the `replaces` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestGroup.replaces', [
    'Resource',
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
      const optErrMsg = `Invalid RequestGroup.groupIdentifier; Provided element is not an instance of Identifier.`;
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
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid RequestGroup.status`;
      assertEnumCodeType<RequestStatusEnum>(enumType, RequestStatusEnum, errMsgPrefix);
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
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid RequestGroup.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.requestStatusEnum);
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
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid RequestGroup.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.requestStatusEnum);
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
   * @returns the `intent` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public getIntentEnumType(): EnumCodeType | null {
    return this.intent;
  }

  /**
   * Assigns the provided EnumCodeType value to the `intent` property.
   *
   * @param enumType - the `intent` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public setIntentEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid RequestGroup.intent`;
      assertEnumCodeType<RequestIntentEnum>(enumType, RequestIntentEnum, errMsgPrefix);
      this.intent = enumType;
    } else {
      this.intent = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntentEnumType(): boolean {
    return isDefined<EnumCodeType>(this.intent) && !this.intent.isEmpty() && this.intent.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `intent` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public getIntentElement(): CodeType | null {
    if (this.intent === null) {
      return null;
    }
    return this.intent as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `intent` property.
   *
   * @param element - the `intent` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public setIntentElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid RequestGroup.intent; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.intent = new EnumCodeType(element, this.requestIntentEnum);
    } else {
      this.intent = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntentElement(): boolean {
    return this.hasIntentEnumType();
  }

  /**
   * @returns the `intent` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public getIntent(): fhirCode | null {
    if (this.intent === null) {
      return null;
    }
    return this.intent.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `intent` property.
   *
   * @param value - the `intent` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public setIntent(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid RequestGroup.intent (${String(value)})`;
      this.intent = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.requestIntentEnum);
    } else {
      this.intent = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntent(): boolean {
    return this.hasIntentEnumType();
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
      const errMsgPrefix = 'Invalid RequestGroup.priority';
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
      const optErrMsg = `Invalid RequestGroup.priority; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid RequestGroup.priority; Provided value is not an instance of fhirCode.`;
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
      const optErrMsg = `Invalid RequestGroup.code; Provided element is not an instance of CodeableConcept.`;
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

  /**
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('RequestGroup.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestGroup.subject', [
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
   * @returns the `encounter` property value as a Reference object; else an empty Reference object
   */
  public getEncounter(): Reference {
    return this.encounter ?? new Reference();
  }

  /**
   * Assigns the provided Encounter object value to the `encounter` property.
   *
   * @decorator `@ReferenceTargets('RequestGroup.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestGroup.encounter', [
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
      const optErrMsg = `Invalid RequestGroup.authoredOn; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid RequestGroup.authoredOn (${String(value)})`;
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
   * @returns the `author` property value as a Reference object; else an empty Reference object
   */
  public getAuthor(): Reference {
    return this.author ?? new Reference();
  }

  /**
   * Assigns the provided Author object value to the `author` property.
   *
   * @decorator `@ReferenceTargets('RequestGroup.author', ['Device','Practitioner','PractitionerRole',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestGroup.author', [
    'Device',
  
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setAuthor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.author = value;
    } else {
      this.author = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `author` property exists and has a value; `false` otherwise
   */
  public hasAuthor(): boolean {
    return isDefined<Reference>(this.author) && !this.author.isEmpty();
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
      const optErrMsg = `Invalid RequestGroup.reasonCode; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid RequestGroup.reasonCode; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('RequestGroup.reasonReference', ['Condition','Observation','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestGroup.reasonReference', [
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
   * @decorator `@ReferenceTargets('RequestGroup.reasonReference', ['Condition','Observation','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestGroup.reasonReference', [
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
      const optErrMsg = `Invalid RequestGroup.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid RequestGroup.note; Provided element is not an instance of Annotation.`;
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

  /**
   * @returns the `action` property value as a RequestGroupActionComponent array
   */
  public getAction(): RequestGroupActionComponent[] {
    return this.action ?? ([] as RequestGroupActionComponent[]);
  }

  /**
   * Assigns the provided RequestGroupActionComponent array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: RequestGroupActionComponent[] | undefined): this {
    if (isDefinedList<RequestGroupActionComponent>(value)) {
      const optErrMsg = `Invalid RequestGroup.action; Provided value array has an element that is not an instance of RequestGroupActionComponent.`;
      assertFhirTypeList<RequestGroupActionComponent>(value, RequestGroupActionComponent, optErrMsg);
      this.action = value;
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * Add the provided RequestGroupActionComponent value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: RequestGroupActionComponent | undefined): this {
    if (isDefined<RequestGroupActionComponent>(value)) {
      const optErrMsg = `Invalid RequestGroup.action; Provided element is not an instance of RequestGroupActionComponent.`;
      assertFhirType<RequestGroupActionComponent>(value, RequestGroupActionComponent, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<RequestGroupActionComponent>(this.action) && this.action.some((item: RequestGroupActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as RequestGroupActionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RequestGroup';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.instantiatesCanonical,
      this.instantiatesUri,
      this.basedOn,
      this.replaces,
      this.groupIdentifier,
      this.status,
      this.intent,
      this.priority,
      this.code,
      this.subject,
      this.encounter,
      this.authoredOn,
      this.author,
      this.reasonCode,
      this.reasonReference,
      this.note,
      this.action,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.intent, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RequestGroup {
    const dest = new RequestGroup();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RequestGroup): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const instantiatesCanonicalList = copyListValues<CanonicalType>(this.instantiatesCanonical);
    dest.instantiatesCanonical = instantiatesCanonicalList.length === 0 ? undefined : instantiatesCanonicalList;
    const instantiatesUriList = copyListValues<UriType>(this.instantiatesUri);
    dest.instantiatesUri = instantiatesUriList.length === 0 ? undefined : instantiatesUriList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    const replacesList = copyListValues<Reference>(this.replaces);
    dest.replaces = replacesList.length === 0 ? undefined : replacesList;
    dest.groupIdentifier = this.groupIdentifier?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.intent = this.intent ? this.intent.copy() : null;
    dest.priority = this.priority?.copy();
    dest.code = this.code?.copy();
    dest.subject = this.subject?.copy();
    dest.encounter = this.encounter?.copy();
    dest.authoredOn = this.authoredOn?.copy();
    dest.author = this.author?.copy();
    const reasonCodeList = copyListValues<CodeableConcept>(this.reasonCode);
    dest.reasonCode = reasonCodeList.length === 0 ? undefined : reasonCodeList;
    const reasonReferenceList = copyListValues<Reference>(this.reasonReference);
    dest.reasonReference = reasonReferenceList.length === 0 ? undefined : reasonReferenceList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const actionList = copyListValues<RequestGroupActionComponent>(this.action);
    dest.action = actionList.length === 0 ? undefined : actionList;
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

    if (this.hasInstantiatesCanonical()) {
      setFhirPrimitiveListJson(this.getInstantiatesCanonicalElement(), 'instantiatesCanonical', jsonObj);
    }

    if (this.hasInstantiatesUri()) {
      setFhirPrimitiveListJson(this.getInstantiatesUriElement(), 'instantiatesUri', jsonObj);
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
      jsonObj['status'] = null;
    }

    if (this.hasIntentElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getIntentElement()!, 'intent', jsonObj);
    } else {
      jsonObj['intent'] = null;
    }

    if (this.hasPriorityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPriorityElement()!, 'priority', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasAuthoredOnElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getAuthoredOnElement(), 'authoredOn', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
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

    if (this.hasAction()) {
      setFhirBackboneElementListJson(this.getAction(), 'action', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * RequestGroupActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Proposed actions, if any
 * - **Definition:** The actions, if any, produced by the evaluation of the artifact.
 *
 * @category Data Models: Resource
 * @see [FHIR RequestGroup](http://hl7.org/fhir/StructureDefinition/RequestGroup)
 */
export class RequestGroupActionComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.requestPriorityEnum = new RequestPriorityEnum();
    this.actionGroupingBehaviorEnum = new ActionGroupingBehaviorEnum();
    this.actionSelectionBehaviorEnum = new ActionSelectionBehaviorEnum();
    this.actionRequiredBehaviorEnum = new ActionRequiredBehaviorEnum();
    this.actionPrecheckBehaviorEnum = new ActionPrecheckBehaviorEnum();
    this.actionCardinalityBehaviorEnum = new ActionCardinalityBehaviorEnum();
  }

  /**
   * Parse the provided `RequestGroupActionComponent` JSON to instantiate the RequestGroupActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RequestGroupActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RequestGroupActionComponent
   * @returns RequestGroupActionComponent data model or undefined for `RequestGroupActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RequestGroupActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RequestGroupActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RequestGroupActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = RequestGroupActionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for RequestGroupActionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'prefix';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPrefixElement(datatype);
    }

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTitleElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'textEquivalent';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextEquivalentElement(datatype);
    }

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setPriorityElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCode(datatype);
        }
      });
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: RelatedArtifact | undefined = RelatedArtifact.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDocumentation(datatype);
        }
      });
    }

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RequestGroupActionConditionComponent | undefined = RequestGroupActionConditionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCondition(component);
        }
      });
    }

    fieldName = 'relatedAction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RequestGroupActionRelatedActionComponent | undefined = RequestGroupActionRelatedActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRelatedAction(component);
        }
      });
    }

    fieldName = 'timing[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const timing: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setTiming(timing);

    fieldName = 'participant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addParticipant(datatype);
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

    fieldName = 'groupingBehavior';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setGroupingBehaviorElement(datatype);
    }

    fieldName = 'selectionBehavior';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setSelectionBehaviorElement(datatype);
    }

    fieldName = 'requiredBehavior';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setRequiredBehaviorElement(datatype);
    }

    fieldName = 'precheckBehavior';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setPrecheckBehaviorElement(datatype);
    }

    fieldName = 'cardinalityBehavior';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setCardinalityBehaviorElement(datatype);
    }

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setResource(datatype);
    }

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RequestGroupActionComponent | undefined = RequestGroupActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAction(component);
        }
      });
    }

    return instance;
  }

  /**
   * RequestGroup.action.prefix Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** User-visible prefix for the action (e.g. 1. or A.)
   * - **Definition:** A user-visible prefix for the action.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private prefix?: StringType | undefined;

  /**
   * RequestGroup.action.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** User-visible title
   * - **Definition:** The title of the action displayed to a user.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title?: StringType | undefined;

  /**
   * RequestGroup.action.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Short description of the action
   * - **Definition:** A short description of the action used to provide a summary to display to the user.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * RequestGroup.action.textEquivalent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system
   * - **Definition:** A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private textEquivalent?: StringType | undefined;

  /**
   * FHIR CodeSystem: RequestPriority
   *
   * @see {@link RequestPriorityEnum }
   */
  private readonly requestPriorityEnum: RequestPriorityEnum;

  /**
   * RequestGroup.action.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** routine | urgent | asap | stat
   * - **Definition:** Indicates how quickly the action should be addressed with respect to other actions.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  private priority?: EnumCodeType | undefined;

  /**
   * RequestGroup.action.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code representing the meaning of the action or sub-actions
   * - **Definition:** A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept[] | undefined;

  /**
   * RequestGroup.action.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting documentation for the intended performer of the action
   * - **Definition:** Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: RelatedArtifact[] | undefined;

  /**
   * RequestGroup.action.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether or not the action is applicable
   * - **Definition:** An expression that describes applicability criteria, or start/stop conditions for the action.
   * - **Comment:** When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private condition?: RequestGroupActionConditionComponent[] | undefined;

  /**
   * RequestGroup.action.relatedAction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relationship to another action
   * - **Definition:** A relationship to another action such as "before" or "30-60 minutes after start of".
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedAction?: RequestGroupActionRelatedActionComponent[] | undefined;

  /**
   * RequestGroup.action.timing[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('RequestGroup.action.timing[x]', ['dateTime','Age','Period','Duration','Range','Timing',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the action should take place
   * - **Definition:** An optional value describing when the action should be performed.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Age',
   *     'Period',
   *     'Duration',
   *     'Range',
   *     'Timing',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('RequestGroup.action.timing[x]',[
    'dateTime',
    'Age',
    'Period',
    'Duration',
    'Range',
    'Timing',
  ])
  private timing?: IDataType | undefined;

  /**
   * RequestGroup.action.participant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who should perform the action
   * - **Definition:** The participant that should perform or be responsible for this action.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private participant?: Reference[] | undefined;

  /**
   * RequestGroup.action.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** create | update | remove | fire-event
   * - **Definition:** The type of action to perform (create, update, remove).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: ActionGroupingBehavior
   *
   * @see {@link ActionGroupingBehaviorEnum }
   */
  private readonly actionGroupingBehaviorEnum: ActionGroupingBehaviorEnum;

  /**
   * RequestGroup.action.groupingBehavior Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** visual-group | logical-group | sentence-group
   * - **Definition:** Defines the grouping behavior for the action and its children.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  private groupingBehavior?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: ActionSelectionBehavior
   *
   * @see {@link ActionSelectionBehaviorEnum }
   */
  private readonly actionSelectionBehaviorEnum: ActionSelectionBehaviorEnum;

  /**
   * RequestGroup.action.selectionBehavior Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** any | all | all-or-none | exactly-one | at-most-one | one-or-more
   * - **Definition:** Defines the selection behavior for the action and its children.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  private selectionBehavior?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: ActionRequiredBehavior
   *
   * @see {@link ActionRequiredBehaviorEnum }
   */
  private readonly actionRequiredBehaviorEnum: ActionRequiredBehaviorEnum;

  /**
   * RequestGroup.action.requiredBehavior Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** must | could | must-unless-documented
   * - **Definition:** Defines expectations around whether an action is required.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  private requiredBehavior?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: ActionPrecheckBehavior
   *
   * @see {@link ActionPrecheckBehaviorEnum }
   */
  private readonly actionPrecheckBehaviorEnum: ActionPrecheckBehaviorEnum;

  /**
   * RequestGroup.action.precheckBehavior Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** yes | no
   * - **Definition:** Defines whether the action should usually be preselected.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  private precheckBehavior?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: ActionCardinalityBehavior
   *
   * @see {@link ActionCardinalityBehaviorEnum }
   */
  private readonly actionCardinalityBehaviorEnum: ActionCardinalityBehaviorEnum;

  /**
   * RequestGroup.action.cardinalityBehavior Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** single | multiple
   * - **Definition:** Defines whether the action can be selected multiple times.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  private cardinalityBehavior?: EnumCodeType | undefined;

  /**
   * RequestGroup.action.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The target of the action
   * - **Definition:** The resource that is the target of the action (e.g. CommunicationRequest).
   * - **Comment:** The target resource SHALL be a [Request](https://hl7.org/fhir/request.html) resource with a Request.intent set to "option".
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private resource?: Reference | undefined;

  /**
   * RequestGroup.action.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Sub action
   * - **Definition:** Sub actions.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action?: RequestGroupActionComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `prefix` property value as a StringType object if defined; else an empty StringType object
   */
  public getPrefixElement(): StringType {
    return this.prefix ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `prefix` property.
   *
   * @param element - the `prefix` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPrefixElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid RequestGroup.action.prefix; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.prefix = element;
    } else {
      this.prefix = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `prefix` property exists and has a value; `false` otherwise
   */
  public hasPrefixElement(): boolean {
    return isDefined<StringType>(this.prefix) && !this.prefix.isEmpty();
  }

  /**
   * @returns the `prefix` property value as a fhirString if defined; else undefined
   */
  public getPrefix(): fhirString | undefined {
    return this.prefix?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `prefix` property.
   *
   * @param value - the `prefix` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPrefix(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.prefix (${String(value)})`;
      this.prefix = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.prefix = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `prefix` property exists and has a value; `false` otherwise
   */
  public hasPrefix(): boolean {
    return this.hasPrefixElement();
  }

  /**
   * @returns the `title` property value as a StringType object if defined; else an empty StringType object
   */
  public getTitleElement(): StringType {
    return this.title ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `title` property.
   *
   * @param element - the `title` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTitleElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid RequestGroup.action.title; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.title = element;
    } else {
      this.title = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `title` property exists and has a value; `false` otherwise
   */
  public hasTitleElement(): boolean {
    return isDefined<StringType>(this.title) && !this.title.isEmpty();
  }

  /**
   * @returns the `title` property value as a fhirString if defined; else undefined
   */
  public getTitle(): fhirString | undefined {
    return this.title?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `title` property.
   *
   * @param value - the `title` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTitle(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.title (${String(value)})`;
      this.title = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.title = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `title` property exists and has a value; `false` otherwise
   */
  public hasTitle(): boolean {
    return this.hasTitleElement();
  }

  /**
   * @returns the `description` property value as a StringType object if defined; else an empty StringType object
   */
  public getDescriptionElement(): StringType {
    return this.description ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid RequestGroup.action.description; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.description = element;
    } else {
      this.description = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescriptionElement(): boolean {
    return isDefined<StringType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirString if defined; else undefined
   */
  public getDescription(): fhirString | undefined {
    return this.description?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.description (${String(value)})`;
      this.description = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.description = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescription(): boolean {
    return this.hasDescriptionElement();
  }

  /**
   * @returns the `textEquivalent` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextEquivalentElement(): StringType {
    return this.textEquivalent ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `textEquivalent` property.
   *
   * @param element - the `textEquivalent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextEquivalentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid RequestGroup.action.textEquivalent; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.textEquivalent = element;
    } else {
      this.textEquivalent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `textEquivalent` property exists and has a value; `false` otherwise
   */
  public hasTextEquivalentElement(): boolean {
    return isDefined<StringType>(this.textEquivalent) && !this.textEquivalent.isEmpty();
  }

  /**
   * @returns the `textEquivalent` property value as a fhirString if defined; else undefined
   */
  public getTextEquivalent(): fhirString | undefined {
    return this.textEquivalent?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `textEquivalent` property.
   *
   * @param value - the `textEquivalent` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextEquivalent(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.textEquivalent (${String(value)})`;
      this.textEquivalent = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.textEquivalent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `textEquivalent` property exists and has a value; `false` otherwise
   */
  public hasTextEquivalent(): boolean {
    return this.hasTextEquivalentElement();
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
      const errMsgPrefix = 'Invalid RequestGroup.action.priority';
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
      const optErrMsg = `Invalid RequestGroup.action.priority; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid RequestGroup.action.priority; Provided value is not an instance of fhirCode.`;
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
   * @returns the `code` property value as a CodeableConcept array
   */
  public getCode(): CodeableConcept[] {
    return this.code ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `code` property.
   *
   * @param value - the `code` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.code; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `code` array property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCode();
      this.code?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefinedList<CodeableConcept>(this.code) && this.code.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `code` property
   */
  private initCode(): void {
    if(!this.hasCode()) {
      this.code = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `documentation` property value as a RelatedArtifact array
   */
  public getDocumentation(): RelatedArtifact[] {
    return this.documentation ?? ([] as RelatedArtifact[]);
  }

  /**
   * Assigns the provided RelatedArtifact array value to the `documentation` property.
   *
   * @param value - the `documentation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDocumentation(value: RelatedArtifact[] | undefined): this {
    if (isDefinedList<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.documentation; Provided value array has an element that is not an instance of RelatedArtifact.`;
      assertFhirTypeList<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.documentation = value;
    } else {
      this.documentation = undefined;
    }
    return this;
  }

  /**
   * Add the provided RelatedArtifact value to the `documentation` array property.
   *
   * @param value - the `documentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDocumentation(value: RelatedArtifact | undefined): this {
    if (isDefined<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.documentation; Provided element is not an instance of RelatedArtifact.`;
      assertFhirType<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.initDocumentation();
      this.documentation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `documentation` property exists and has a value; `false` otherwise
   */
  public hasDocumentation(): boolean {
    return isDefinedList<RelatedArtifact>(this.documentation) && this.documentation.some((item: RelatedArtifact) => !item.isEmpty());
  }

  /**
   * Initialize the `documentation` property
   */
  private initDocumentation(): void {
    if(!this.hasDocumentation()) {
      this.documentation = [] as RelatedArtifact[];
    }
  }

  /**
   * @returns the `condition` property value as a RequestGroupActionConditionComponent array
   */
  public getCondition(): RequestGroupActionConditionComponent[] {
    return this.condition ?? ([] as RequestGroupActionConditionComponent[]);
  }

  /**
   * Assigns the provided RequestGroupActionConditionComponent array value to the `condition` property.
   *
   * @param value - the `condition` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCondition(value: RequestGroupActionConditionComponent[] | undefined): this {
    if (isDefinedList<RequestGroupActionConditionComponent>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.condition; Provided value array has an element that is not an instance of RequestGroupActionConditionComponent.`;
      assertFhirTypeList<RequestGroupActionConditionComponent>(value, RequestGroupActionConditionComponent, optErrMsg);
      this.condition = value;
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * Add the provided RequestGroupActionConditionComponent value to the `condition` array property.
   *
   * @param value - the `condition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCondition(value: RequestGroupActionConditionComponent | undefined): this {
    if (isDefined<RequestGroupActionConditionComponent>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.condition; Provided element is not an instance of RequestGroupActionConditionComponent.`;
      assertFhirType<RequestGroupActionConditionComponent>(value, RequestGroupActionConditionComponent, optErrMsg);
      this.initCondition();
      this.condition?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return isDefinedList<RequestGroupActionConditionComponent>(this.condition) && this.condition.some((item: RequestGroupActionConditionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `condition` property
   */
  private initCondition(): void {
    if(!this.hasCondition()) {
      this.condition = [] as RequestGroupActionConditionComponent[];
    }
  }

  /**
   * @returns the `relatedAction` property value as a RequestGroupActionRelatedActionComponent array
   */
  public getRelatedAction(): RequestGroupActionRelatedActionComponent[] {
    return this.relatedAction ?? ([] as RequestGroupActionRelatedActionComponent[]);
  }

  /**
   * Assigns the provided RequestGroupActionRelatedActionComponent array value to the `relatedAction` property.
   *
   * @param value - the `relatedAction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatedAction(value: RequestGroupActionRelatedActionComponent[] | undefined): this {
    if (isDefinedList<RequestGroupActionRelatedActionComponent>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.relatedAction; Provided value array has an element that is not an instance of RequestGroupActionRelatedActionComponent.`;
      assertFhirTypeList<RequestGroupActionRelatedActionComponent>(value, RequestGroupActionRelatedActionComponent, optErrMsg);
      this.relatedAction = value;
    } else {
      this.relatedAction = undefined;
    }
    return this;
  }

  /**
   * Add the provided RequestGroupActionRelatedActionComponent value to the `relatedAction` array property.
   *
   * @param value - the `relatedAction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatedAction(value: RequestGroupActionRelatedActionComponent | undefined): this {
    if (isDefined<RequestGroupActionRelatedActionComponent>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.relatedAction; Provided element is not an instance of RequestGroupActionRelatedActionComponent.`;
      assertFhirType<RequestGroupActionRelatedActionComponent>(value, RequestGroupActionRelatedActionComponent, optErrMsg);
      this.initRelatedAction();
      this.relatedAction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedAction` property exists and has a value; `false` otherwise
   */
  public hasRelatedAction(): boolean {
    return isDefinedList<RequestGroupActionRelatedActionComponent>(this.relatedAction) && this.relatedAction.some((item: RequestGroupActionRelatedActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relatedAction` property
   */
  private initRelatedAction(): void {
    if(!this.hasRelatedAction()) {
      this.relatedAction = [] as RequestGroupActionRelatedActionComponent[];
    }
  }

  /**
   * @returns the `timing` property value as a DataType object if defined; else undefined
   */
  public getTiming(): IDataType | undefined {
    return this.timing;
  }

  /**
   * Assigns the provided DataType object value to the `timing` property.
   *
   * @decorator `@ChoiceDataTypes('RequestGroup.action.timing[x]')`
   *
   * @param value - the `timing` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('RequestGroup.action.timing[x]')
  public setTiming(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.timing = value;
    } else {
      this.timing = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timing` property exists and has a value; `false` otherwise
   */
  public hasTiming(): boolean {
    return isDefined<IDataType>(this.timing) && !this.timing.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `timing` property value as a DateTimeType object if defined; else undefined
   */
  public getTimingDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for RequestGroup.action.timing[x]: Expected DateTimeType but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasTimingDateTimeType(): boolean {
    return this.hasTiming() && this.timing instanceof DateTimeType;
  }

  /**
   * @returns the `timing` property value as a Age object if defined; else undefined
   */
  public getTimingAge(): Age | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for RequestGroup.action.timing[x]: Expected Age but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Age and has a value; `false` otherwise
   */
  public hasTimingAge(): boolean {
    return this.hasTiming() && this.timing instanceof Age;
  }

  /**
   * @returns the `timing` property value as a Period object if defined; else undefined
   */
  public getTimingPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for RequestGroup.action.timing[x]: Expected Period but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Period and has a value; `false` otherwise
   */
  public hasTimingPeriod(): boolean {
    return this.hasTiming() && this.timing instanceof Period;
  }

  /**
   * @returns the `timing` property value as a Duration object if defined; else undefined
   */
  public getTimingDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for RequestGroup.action.timing[x]: Expected Duration but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Duration and has a value; `false` otherwise
   */
  public hasTimingDuration(): boolean {
    return this.hasTiming() && this.timing instanceof Duration;
  }

  /**
   * @returns the `timing` property value as a Range object if defined; else undefined
   */
  public getTimingRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for RequestGroup.action.timing[x]: Expected Range but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Range and has a value; `false` otherwise
   */
  public hasTimingRange(): boolean {
    return this.hasTiming() && this.timing instanceof Range;
  }

  /**
   * @returns the `timing` property value as a Timing object if defined; else undefined
   */
  public getTimingTiming(): Timing | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for RequestGroup.action.timing[x]: Expected Timing but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Timing and has a value; `false` otherwise
   */
  public hasTimingTiming(): boolean {
    return this.hasTiming() && this.timing instanceof Timing;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `participant` property value as a Reference array
   */
  public getParticipant(): Reference[] {
    return this.participant ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `participant` property.
   *
   * @decorator `@ReferenceTargets('RequestGroup.action.participant', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Device',])`
   *
   * @param value - the `participant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestGroup.action.participant', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Device',
  ])
  public setParticipant(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.participant = value;
    } else {
      this.participant = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `participant` array property.
   *
   * @decorator `@ReferenceTargets('RequestGroup.action.participant', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Device',])`
   *
   * @param value - the `participant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestGroup.action.participant', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Device',
  ])
  public addParticipant(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initParticipant();
      this.participant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `participant` property exists and has a value; `false` otherwise
   */
  public hasParticipant(): boolean {
    return isDefinedList<Reference>(this.participant) && this.participant.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `participant` property
   */
  private initParticipant(): void {
    if (!this.hasParticipant()) {
      this.participant = [] as Reference[];
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
      const optErrMsg = `Invalid RequestGroup.action.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `groupingBehavior` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  public getGroupingBehaviorEnumType(): EnumCodeType | undefined {
    return this.groupingBehavior;
  }

  /**
   * Assigns the provided EnumCodeType value to the `groupingBehavior` property.
   *
   * @param enumType - the `groupingBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  public setGroupingBehaviorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid RequestGroup.action.groupingBehavior';
      assertEnumCodeType<ActionGroupingBehaviorEnum>(enumType, ActionGroupingBehaviorEnum, errMsgPrefix);
      this.groupingBehavior = enumType;
    } else {
      this.groupingBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `groupingBehavior` property exists and has a value; `false` otherwise
   */
  public hasGroupingBehaviorEnumType(): boolean {
    return isDefined<EnumCodeType>(this.groupingBehavior) && !this.groupingBehavior.isEmpty() && this.groupingBehavior.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `groupingBehavior` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  public getGroupingBehaviorElement(): CodeType | undefined {
    if (this.groupingBehavior === undefined) {
      return undefined;
    }
    return this.groupingBehavior as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `groupingBehavior` property.
   *
   * @param element - the `groupingBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  public setGroupingBehaviorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid RequestGroup.action.groupingBehavior; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.groupingBehavior = new EnumCodeType(element, this.actionGroupingBehaviorEnum);
    } else {
      this.groupingBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `groupingBehavior` property exists and has a value; `false` otherwise
   */
  public hasGroupingBehaviorElement(): boolean {
    return this.hasGroupingBehaviorEnumType();
  }

  /**
   * @returns the `groupingBehavior` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  public getGroupingBehavior(): fhirCode | undefined {
    if (this.groupingBehavior === undefined) {
      return undefined;
    }
    return this.groupingBehavior.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `groupingBehavior` property.
   *
   * @param value - the `groupingBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  public setGroupingBehavior(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.groupingBehavior; Provided value is not an instance of fhirCode.`;
      this.groupingBehavior = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionGroupingBehaviorEnum);
    } else {
      this.groupingBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `groupingBehavior` property exists and has a value; `false` otherwise
   */
  public hasGroupingBehavior(): boolean {
    return this.hasGroupingBehaviorEnumType();
  }

  /**
   * @returns the `selectionBehavior` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  public getSelectionBehaviorEnumType(): EnumCodeType | undefined {
    return this.selectionBehavior;
  }

  /**
   * Assigns the provided EnumCodeType value to the `selectionBehavior` property.
   *
   * @param enumType - the `selectionBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  public setSelectionBehaviorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid RequestGroup.action.selectionBehavior';
      assertEnumCodeType<ActionSelectionBehaviorEnum>(enumType, ActionSelectionBehaviorEnum, errMsgPrefix);
      this.selectionBehavior = enumType;
    } else {
      this.selectionBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `selectionBehavior` property exists and has a value; `false` otherwise
   */
  public hasSelectionBehaviorEnumType(): boolean {
    return isDefined<EnumCodeType>(this.selectionBehavior) && !this.selectionBehavior.isEmpty() && this.selectionBehavior.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `selectionBehavior` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  public getSelectionBehaviorElement(): CodeType | undefined {
    if (this.selectionBehavior === undefined) {
      return undefined;
    }
    return this.selectionBehavior as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `selectionBehavior` property.
   *
   * @param element - the `selectionBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  public setSelectionBehaviorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid RequestGroup.action.selectionBehavior; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.selectionBehavior = new EnumCodeType(element, this.actionSelectionBehaviorEnum);
    } else {
      this.selectionBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `selectionBehavior` property exists and has a value; `false` otherwise
   */
  public hasSelectionBehaviorElement(): boolean {
    return this.hasSelectionBehaviorEnumType();
  }

  /**
   * @returns the `selectionBehavior` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  public getSelectionBehavior(): fhirCode | undefined {
    if (this.selectionBehavior === undefined) {
      return undefined;
    }
    return this.selectionBehavior.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `selectionBehavior` property.
   *
   * @param value - the `selectionBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  public setSelectionBehavior(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.selectionBehavior; Provided value is not an instance of fhirCode.`;
      this.selectionBehavior = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionSelectionBehaviorEnum);
    } else {
      this.selectionBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `selectionBehavior` property exists and has a value; `false` otherwise
   */
  public hasSelectionBehavior(): boolean {
    return this.hasSelectionBehaviorEnumType();
  }

  /**
   * @returns the `requiredBehavior` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  public getRequiredBehaviorEnumType(): EnumCodeType | undefined {
    return this.requiredBehavior;
  }

  /**
   * Assigns the provided EnumCodeType value to the `requiredBehavior` property.
   *
   * @param enumType - the `requiredBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  public setRequiredBehaviorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid RequestGroup.action.requiredBehavior';
      assertEnumCodeType<ActionRequiredBehaviorEnum>(enumType, ActionRequiredBehaviorEnum, errMsgPrefix);
      this.requiredBehavior = enumType;
    } else {
      this.requiredBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requiredBehavior` property exists and has a value; `false` otherwise
   */
  public hasRequiredBehaviorEnumType(): boolean {
    return isDefined<EnumCodeType>(this.requiredBehavior) && !this.requiredBehavior.isEmpty() && this.requiredBehavior.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `requiredBehavior` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  public getRequiredBehaviorElement(): CodeType | undefined {
    if (this.requiredBehavior === undefined) {
      return undefined;
    }
    return this.requiredBehavior as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `requiredBehavior` property.
   *
   * @param element - the `requiredBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  public setRequiredBehaviorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid RequestGroup.action.requiredBehavior; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.requiredBehavior = new EnumCodeType(element, this.actionRequiredBehaviorEnum);
    } else {
      this.requiredBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requiredBehavior` property exists and has a value; `false` otherwise
   */
  public hasRequiredBehaviorElement(): boolean {
    return this.hasRequiredBehaviorEnumType();
  }

  /**
   * @returns the `requiredBehavior` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  public getRequiredBehavior(): fhirCode | undefined {
    if (this.requiredBehavior === undefined) {
      return undefined;
    }
    return this.requiredBehavior.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `requiredBehavior` property.
   *
   * @param value - the `requiredBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  public setRequiredBehavior(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.requiredBehavior; Provided value is not an instance of fhirCode.`;
      this.requiredBehavior = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionRequiredBehaviorEnum);
    } else {
      this.requiredBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requiredBehavior` property exists and has a value; `false` otherwise
   */
  public hasRequiredBehavior(): boolean {
    return this.hasRequiredBehaviorEnumType();
  }

  /**
   * @returns the `precheckBehavior` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  public getPrecheckBehaviorEnumType(): EnumCodeType | undefined {
    return this.precheckBehavior;
  }

  /**
   * Assigns the provided EnumCodeType value to the `precheckBehavior` property.
   *
   * @param enumType - the `precheckBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  public setPrecheckBehaviorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid RequestGroup.action.precheckBehavior';
      assertEnumCodeType<ActionPrecheckBehaviorEnum>(enumType, ActionPrecheckBehaviorEnum, errMsgPrefix);
      this.precheckBehavior = enumType;
    } else {
      this.precheckBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `precheckBehavior` property exists and has a value; `false` otherwise
   */
  public hasPrecheckBehaviorEnumType(): boolean {
    return isDefined<EnumCodeType>(this.precheckBehavior) && !this.precheckBehavior.isEmpty() && this.precheckBehavior.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `precheckBehavior` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  public getPrecheckBehaviorElement(): CodeType | undefined {
    if (this.precheckBehavior === undefined) {
      return undefined;
    }
    return this.precheckBehavior as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `precheckBehavior` property.
   *
   * @param element - the `precheckBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  public setPrecheckBehaviorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid RequestGroup.action.precheckBehavior; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.precheckBehavior = new EnumCodeType(element, this.actionPrecheckBehaviorEnum);
    } else {
      this.precheckBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `precheckBehavior` property exists and has a value; `false` otherwise
   */
  public hasPrecheckBehaviorElement(): boolean {
    return this.hasPrecheckBehaviorEnumType();
  }

  /**
   * @returns the `precheckBehavior` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  public getPrecheckBehavior(): fhirCode | undefined {
    if (this.precheckBehavior === undefined) {
      return undefined;
    }
    return this.precheckBehavior.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `precheckBehavior` property.
   *
   * @param value - the `precheckBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  public setPrecheckBehavior(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.precheckBehavior; Provided value is not an instance of fhirCode.`;
      this.precheckBehavior = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionPrecheckBehaviorEnum);
    } else {
      this.precheckBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `precheckBehavior` property exists and has a value; `false` otherwise
   */
  public hasPrecheckBehavior(): boolean {
    return this.hasPrecheckBehaviorEnumType();
  }

  /**
   * @returns the `cardinalityBehavior` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  public getCardinalityBehaviorEnumType(): EnumCodeType | undefined {
    return this.cardinalityBehavior;
  }

  /**
   * Assigns the provided EnumCodeType value to the `cardinalityBehavior` property.
   *
   * @param enumType - the `cardinalityBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  public setCardinalityBehaviorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid RequestGroup.action.cardinalityBehavior';
      assertEnumCodeType<ActionCardinalityBehaviorEnum>(enumType, ActionCardinalityBehaviorEnum, errMsgPrefix);
      this.cardinalityBehavior = enumType;
    } else {
      this.cardinalityBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cardinalityBehavior` property exists and has a value; `false` otherwise
   */
  public hasCardinalityBehaviorEnumType(): boolean {
    return isDefined<EnumCodeType>(this.cardinalityBehavior) && !this.cardinalityBehavior.isEmpty() && this.cardinalityBehavior.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `cardinalityBehavior` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  public getCardinalityBehaviorElement(): CodeType | undefined {
    if (this.cardinalityBehavior === undefined) {
      return undefined;
    }
    return this.cardinalityBehavior as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `cardinalityBehavior` property.
   *
   * @param element - the `cardinalityBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  public setCardinalityBehaviorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid RequestGroup.action.cardinalityBehavior; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.cardinalityBehavior = new EnumCodeType(element, this.actionCardinalityBehaviorEnum);
    } else {
      this.cardinalityBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cardinalityBehavior` property exists and has a value; `false` otherwise
   */
  public hasCardinalityBehaviorElement(): boolean {
    return this.hasCardinalityBehaviorEnumType();
  }

  /**
   * @returns the `cardinalityBehavior` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  public getCardinalityBehavior(): fhirCode | undefined {
    if (this.cardinalityBehavior === undefined) {
      return undefined;
    }
    return this.cardinalityBehavior.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `cardinalityBehavior` property.
   *
   * @param value - the `cardinalityBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  public setCardinalityBehavior(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.cardinalityBehavior; Provided value is not an instance of fhirCode.`;
      this.cardinalityBehavior = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionCardinalityBehaviorEnum);
    } else {
      this.cardinalityBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cardinalityBehavior` property exists and has a value; `false` otherwise
   */
  public hasCardinalityBehavior(): boolean {
    return this.hasCardinalityBehaviorEnumType();
  }

  /**
   * @returns the `resource` property value as a Reference object; else an empty Reference object
   */
  public getResource(): Reference {
    return this.resource ?? new Reference();
  }

  /**
   * Assigns the provided Resource object value to the `resource` property.
   *
   * @decorator `@ReferenceTargets('RequestGroup.action.resource', ['Resource',])`
   *
   * @param value - the `resource` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestGroup.action.resource', [
    'Resource',
  ])
  public setResource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.resource = value;
    } else {
      this.resource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return isDefined<Reference>(this.resource) && !this.resource.isEmpty();
  }

  /**
   * @returns the `action` property value as a RequestGroupActionComponent array
   */
  public getAction(): RequestGroupActionComponent[] {
    return this.action ?? ([] as RequestGroupActionComponent[]);
  }

  /**
   * Assigns the provided RequestGroupActionComponent array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: RequestGroupActionComponent[] | undefined): this {
    if (isDefinedList<RequestGroupActionComponent>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.action; Provided value array has an element that is not an instance of RequestGroupActionComponent.`;
      assertFhirTypeList<RequestGroupActionComponent>(value, RequestGroupActionComponent, optErrMsg);
      this.action = value;
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * Add the provided RequestGroupActionComponent value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: RequestGroupActionComponent | undefined): this {
    if (isDefined<RequestGroupActionComponent>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.action; Provided element is not an instance of RequestGroupActionComponent.`;
      assertFhirType<RequestGroupActionComponent>(value, RequestGroupActionComponent, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<RequestGroupActionComponent>(this.action) && this.action.some((item: RequestGroupActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as RequestGroupActionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RequestGroup.action';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.prefix,
      this.title,
      this.description,
      this.textEquivalent,
      this.priority,
      this.code,
      this.documentation,
      this.condition,
      this.relatedAction,
      this.timing,
      this.participant,
      this.type_,
      this.groupingBehavior,
      this.selectionBehavior,
      this.requiredBehavior,
      this.precheckBehavior,
      this.cardinalityBehavior,
      this.resource,
      this.action,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RequestGroupActionComponent {
    const dest = new RequestGroupActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RequestGroupActionComponent): void {
    super.copyValues(dest);
    dest.prefix = this.prefix?.copy();
    dest.title = this.title?.copy();
    dest.description = this.description?.copy();
    dest.textEquivalent = this.textEquivalent?.copy();
    dest.priority = this.priority?.copy();
    const codeList = copyListValues<CodeableConcept>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    const documentationList = copyListValues<RelatedArtifact>(this.documentation);
    dest.documentation = documentationList.length === 0 ? undefined : documentationList;
    const conditionList = copyListValues<RequestGroupActionConditionComponent>(this.condition);
    dest.condition = conditionList.length === 0 ? undefined : conditionList;
    const relatedActionList = copyListValues<RequestGroupActionRelatedActionComponent>(this.relatedAction);
    dest.relatedAction = relatedActionList.length === 0 ? undefined : relatedActionList;
    dest.timing = this.timing?.copy() as IDataType;
    const participantList = copyListValues<Reference>(this.participant);
    dest.participant = participantList.length === 0 ? undefined : participantList;
    dest.type_ = this.type_?.copy();
    dest.groupingBehavior = this.groupingBehavior?.copy();
    dest.selectionBehavior = this.selectionBehavior?.copy();
    dest.requiredBehavior = this.requiredBehavior?.copy();
    dest.precheckBehavior = this.precheckBehavior?.copy();
    dest.cardinalityBehavior = this.cardinalityBehavior?.copy();
    dest.resource = this.resource?.copy();
    const actionList = copyListValues<RequestGroupActionComponent>(this.action);
    dest.action = actionList.length === 0 ? undefined : actionList;
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

    if (this.hasPrefixElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPrefixElement(), 'prefix', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasTextEquivalentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextEquivalentElement(), 'textEquivalent', jsonObj);
    }

    if (this.hasPriorityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPriorityElement()!, 'priority', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasDocumentation()) {
      setFhirComplexListJson(this.getDocumentation(), 'documentation', jsonObj);
    }

    if (this.hasCondition()) {
      setFhirBackboneElementListJson(this.getCondition(), 'condition', jsonObj);
    }

    if (this.hasRelatedAction()) {
      setFhirBackboneElementListJson(this.getRelatedAction(), 'relatedAction', jsonObj);
    }

    if (this.hasTiming()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTiming()!, 'timing', jsonObj);
    }

    if (this.hasParticipant()) {
      setFhirComplexListJson(this.getParticipant(), 'participant', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasGroupingBehaviorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getGroupingBehaviorElement()!, 'groupingBehavior', jsonObj);
    }

    if (this.hasSelectionBehaviorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getSelectionBehaviorElement()!, 'selectionBehavior', jsonObj);
    }

    if (this.hasRequiredBehaviorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getRequiredBehaviorElement()!, 'requiredBehavior', jsonObj);
    }

    if (this.hasPrecheckBehaviorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPrecheckBehaviorElement()!, 'precheckBehavior', jsonObj);
    }

    if (this.hasCardinalityBehaviorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCardinalityBehaviorElement()!, 'cardinalityBehavior', jsonObj);
    }

    if (this.hasResource()) {
      setFhirComplexJson(this.getResource(), 'resource', jsonObj);
    }

    if (this.hasAction()) {
      setFhirBackboneElementListJson(this.getAction(), 'action', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * RequestGroupActionConditionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Whether or not the action is applicable
 * - **Definition:** An expression that describes applicability criteria, or start/stop conditions for the action.
 * - **Comment:** When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 *
 * @category Data Models: Resource
 * @see [FHIR RequestGroup](http://hl7.org/fhir/StructureDefinition/RequestGroup)
 */
export class RequestGroupActionConditionComponent extends BackboneElement implements IBackboneElement {
  constructor(kind: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.actionConditionKindEnum = new ActionConditionKindEnum();

    this.kind = constructorCodeValueAsEnumCodeType<ActionConditionKindEnum>(
      kind,
      ActionConditionKindEnum,
      this.actionConditionKindEnum,
      'RequestGroup.action.condition.kind',
    );
  }

  /**
   * Parse the provided `RequestGroupActionConditionComponent` JSON to instantiate the RequestGroupActionConditionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RequestGroupActionConditionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RequestGroupActionConditionComponent
   * @returns RequestGroupActionConditionComponent data model or undefined for `RequestGroupActionConditionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RequestGroupActionConditionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RequestGroupActionConditionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RequestGroupActionConditionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'kind';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setKind(null);
      } else {
        instance.setKindElement(datatype);
      }
    } else {
      instance.setKind(null);
    }

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Expression | undefined = Expression.parse(classJsonObj[fieldName]!, sourceField);
      instance.setExpression(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ActionConditionKind
   *
   * @see {@link ActionConditionKindEnum }
   */
  private readonly actionConditionKindEnum: ActionConditionKindEnum;

  /**
   * RequestGroup.action.condition.kind Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** applicability | start | stop
   * - **Definition:** The kind of condition.
   * - **Comment:** Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  private kind: EnumCodeType | null;

  /**
   * RequestGroup.action.condition.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Boolean-valued expression
   * - **Definition:** An expression that returns true or false, indicating whether or not the condition is satisfied.
   * - **Comment:** The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
   * - **FHIR Type:** `Expression`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expression?: Expression | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `kind` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  public getKindEnumType(): EnumCodeType | null {
    return this.kind;
  }

  /**
   * Assigns the provided EnumCodeType value to the `kind` property.
   *
   * @param enumType - the `kind` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  public setKindEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid RequestGroup.action.condition.kind`;
      assertEnumCodeType<ActionConditionKindEnum>(enumType, ActionConditionKindEnum, errMsgPrefix);
      this.kind = enumType;
    } else {
      this.kind = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `kind` property exists and has a value; `false` otherwise
   */
  public hasKindEnumType(): boolean {
    return isDefined<EnumCodeType>(this.kind) && !this.kind.isEmpty() && this.kind.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `kind` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  public getKindElement(): CodeType | null {
    if (this.kind === null) {
      return null;
    }
    return this.kind as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `kind` property.
   *
   * @param element - the `kind` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  public setKindElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid RequestGroup.action.condition.kind; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.kind = new EnumCodeType(element, this.actionConditionKindEnum);
    } else {
      this.kind = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `kind` property exists and has a value; `false` otherwise
   */
  public hasKindElement(): boolean {
    return this.hasKindEnumType();
  }

  /**
   * @returns the `kind` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  public getKind(): fhirCode | null {
    if (this.kind === null) {
      return null;
    }
    return this.kind.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `kind` property.
   *
   * @param value - the `kind` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  public setKind(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.condition.kind (${String(value)})`;
      this.kind = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionConditionKindEnum);
    } else {
      this.kind = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `kind` property exists and has a value; `false` otherwise
   */
  public hasKind(): boolean {
    return this.hasKindEnumType();
  }

  /**
   * @returns the `expression` property value as a Expression object if defined; else an empty Expression object
   */
  public getExpression(): Expression {
    return this.expression ?? new Expression();
  }

  /**
   * Assigns the provided Expression object value to the `expression` property.
   *
   * @param value - the `expression` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExpression(value: Expression | undefined): this {
    if (isDefined<Expression>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.condition.expression; Provided element is not an instance of Expression.`;
      assertFhirType<Expression>(value, Expression, optErrMsg);
      this.expression = value;
    } else {
      this.expression = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpression(): boolean {
    return isDefined<Expression>(this.expression) && !this.expression.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RequestGroup.action.condition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.kind,
      this.expression,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.kind, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RequestGroupActionConditionComponent {
    const dest = new RequestGroupActionConditionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RequestGroupActionConditionComponent): void {
    super.copyValues(dest);
    dest.kind = this.kind ? this.kind.copy() : null;
    dest.expression = this.expression?.copy();
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

    if (this.hasKindElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getKindElement()!, 'kind', jsonObj);
    } else {
      jsonObj['kind'] = null;
    }

    if (this.hasExpression()) {
      setFhirComplexJson(this.getExpression(), 'expression', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * RequestGroupActionRelatedActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Relationship to another action
 * - **Definition:** A relationship to another action such as "before" or "30-60 minutes after start of".
 *
 * @category Data Models: Resource
 * @see [FHIR RequestGroup](http://hl7.org/fhir/StructureDefinition/RequestGroup)
 */
export class RequestGroupActionRelatedActionComponent extends BackboneElement implements IBackboneElement {
  constructor(actionId: IdType | fhirId | null = null, relationship: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.actionRelationshipTypeEnum = new ActionRelationshipTypeEnum();

    this.actionId = null;
    if (isDefined<IdType | fhirId>(actionId)) {
      if (actionId instanceof PrimitiveType) {
        this.setActionIdElement(actionId);
      } else {
        this.setActionId(actionId);
      }
    }

    this.relationship = constructorCodeValueAsEnumCodeType<ActionRelationshipTypeEnum>(
      relationship,
      ActionRelationshipTypeEnum,
      this.actionRelationshipTypeEnum,
      'RequestGroup.action.relatedAction.relationship',
    );
  }

  /**
   * Parse the provided `RequestGroupActionRelatedActionComponent` JSON to instantiate the RequestGroupActionRelatedActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RequestGroupActionRelatedActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RequestGroupActionRelatedActionComponent
   * @returns RequestGroupActionRelatedActionComponent data model or undefined for `RequestGroupActionRelatedActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RequestGroupActionRelatedActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RequestGroupActionRelatedActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RequestGroupActionRelatedActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = RequestGroupActionRelatedActionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for RequestGroupActionRelatedActionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'actionId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setActionId(null);
      } else {
        instance.setActionIdElement(datatype);
      }
    } else {
      instance.setActionId(null);
    }

    fieldName = 'relationship';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setRelationship(null);
      } else {
        instance.setRelationshipElement(datatype);
      }
    } else {
      instance.setRelationship(null);
    }

    fieldName = 'offset[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const offset: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setOffset(offset);

    return instance;
  }

  /**
   * RequestGroup.action.relatedAction.actionId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What action this is related to
   * - **Definition:** The element id of the action this is related to.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actionId: IdType | null;

  /**
   * FHIR CodeSystem: ActionRelationshipType
   *
   * @see {@link ActionRelationshipTypeEnum }
   */
  private readonly actionRelationshipTypeEnum: ActionRelationshipTypeEnum;

  /**
   * RequestGroup.action.relatedAction.relationship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end
   * - **Definition:** The relationship of this action to the related action.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  private relationship: EnumCodeType | null;

  /**
   * RequestGroup.action.relatedAction.offset[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('RequestGroup.action.relatedAction.offset[x]', ['Duration','Range',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time offset for the relationship
   * - **Definition:** A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
   * - **FHIR Types:**
   *     'Duration',
   *     'Range',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('RequestGroup.action.relatedAction.offset[x]',[
    'Duration',
    'Range',
  ])
  private offset?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `actionId` property value as a IdType object if defined; else an empty IdType object
   */
  public getActionIdElement(): IdType {
    return this.actionId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `actionId` property.
   *
   * @param element - the `actionId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActionIdElement(element: IdType | undefined | null): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid RequestGroup.action.relatedAction.actionId; Provided value is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.actionId = element;
    } else {
      this.actionId = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `actionId` property exists and has a value; `false` otherwise
   */
  public hasActionIdElement(): boolean {
    return isDefined<IdType>(this.actionId) && !this.actionId.isEmpty();
  }

  /**
   * @returns the `actionId` property value as a fhirId if defined; else null
   */
  public getActionId(): fhirId | null {
    if (this.actionId?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.actionId.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `actionId` property.
   *
   * @param value - the `actionId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActionId(value: fhirId | undefined | null): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.relatedAction.actionId (${String(value)})`;
      this.actionId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.actionId = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `actionId` property exists and has a value; `false` otherwise
   */
  public hasActionId(): boolean {
    return this.hasActionIdElement();
  }

  /**
   * @returns the `relationship` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public getRelationshipEnumType(): EnumCodeType | null {
    return this.relationship;
  }

  /**
   * Assigns the provided EnumCodeType value to the `relationship` property.
   *
   * @param enumType - the `relationship` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public setRelationshipEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid RequestGroup.action.relatedAction.relationship`;
      assertEnumCodeType<ActionRelationshipTypeEnum>(enumType, ActionRelationshipTypeEnum, errMsgPrefix);
      this.relationship = enumType;
    } else {
      this.relationship = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `relationship` property exists and has a value; `false` otherwise
   */
  public hasRelationshipEnumType(): boolean {
    return isDefined<EnumCodeType>(this.relationship) && !this.relationship.isEmpty() && this.relationship.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `relationship` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public getRelationshipElement(): CodeType | null {
    if (this.relationship === null) {
      return null;
    }
    return this.relationship as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `relationship` property.
   *
   * @param element - the `relationship` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public setRelationshipElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid RequestGroup.action.relatedAction.relationship; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.relationship = new EnumCodeType(element, this.actionRelationshipTypeEnum);
    } else {
      this.relationship = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `relationship` property exists and has a value; `false` otherwise
   */
  public hasRelationshipElement(): boolean {
    return this.hasRelationshipEnumType();
  }

  /**
   * @returns the `relationship` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public getRelationship(): fhirCode | null {
    if (this.relationship === null) {
      return null;
    }
    return this.relationship.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `relationship` property.
   *
   * @param value - the `relationship` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public setRelationship(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid RequestGroup.action.relatedAction.relationship (${String(value)})`;
      this.relationship = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionRelationshipTypeEnum);
    } else {
      this.relationship = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `relationship` property exists and has a value; `false` otherwise
   */
  public hasRelationship(): boolean {
    return this.hasRelationshipEnumType();
  }

  /**
   * @returns the `offset` property value as a DataType object if defined; else undefined
   */
  public getOffset(): IDataType | undefined {
    return this.offset;
  }

  /**
   * Assigns the provided DataType object value to the `offset` property.
   *
   * @decorator `@ChoiceDataTypes('RequestGroup.action.relatedAction.offset[x]')`
   *
   * @param value - the `offset` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('RequestGroup.action.relatedAction.offset[x]')
  public setOffset(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.offset = value;
    } else {
      this.offset = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `offset` property exists and has a value; `false` otherwise
   */
  public hasOffset(): boolean {
    return isDefined<IDataType>(this.offset) && !this.offset.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `offset` property value as a Duration object if defined; else undefined
   */
  public getOffsetDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.offset)) {
      return undefined;
    }
    if (!(this.offset instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for RequestGroup.action.relatedAction.offset[x]: Expected Duration but encountered ${this.offset.fhirType()}`,
      );
    }
    return this.offset;
  }

  /**
   * @returns `true` if the `offset` property exists as a Duration and has a value; `false` otherwise
   */
  public hasOffsetDuration(): boolean {
    return this.hasOffset() && this.offset instanceof Duration;
  }

  /**
   * @returns the `offset` property value as a Range object if defined; else undefined
   */
  public getOffsetRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.offset)) {
      return undefined;
    }
    if (!(this.offset instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for RequestGroup.action.relatedAction.offset[x]: Expected Range but encountered ${this.offset.fhirType()}`,
      );
    }
    return this.offset;
  }

  /**
   * @returns `true` if the `offset` property exists as a Range and has a value; `false` otherwise
   */
  public hasOffsetRange(): boolean {
    return this.hasOffset() && this.offset instanceof Range;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RequestGroup.action.relatedAction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.actionId,
      this.relationship,
      this.offset,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.actionId, this.relationship, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RequestGroupActionRelatedActionComponent {
    const dest = new RequestGroupActionRelatedActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RequestGroupActionRelatedActionComponent): void {
    super.copyValues(dest);
    dest.actionId = this.actionId ? this.actionId.copy() : null;
    dest.relationship = this.relationship ? this.relationship.copy() : null;
    dest.offset = this.offset?.copy() as IDataType;
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

    if (this.hasActionIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getActionIdElement(), 'actionId', jsonObj);
    } else {
      jsonObj['actionId'] = null;
    }

    if (this.hasRelationshipElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getRelationshipElement()!, 'relationship', jsonObj);
    } else {
      jsonObj['relationship'] = null;
    }

    if (this.hasOffset()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOffset()!, 'offset', jsonObj);
    }

    return jsonObj;
  }
}
