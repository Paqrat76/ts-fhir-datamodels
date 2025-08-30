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
 * RequestOrchestration Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/RequestOrchestration
 * StructureDefinition.name: RequestOrchestration
 * StructureDefinition.description: A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 * StructureDefinition.fhirVersion: 5.0.0
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
  MarkdownType,
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
  fhirMarkdown,
  fhirMarkdownSchema,
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
import { ActionParticipantTypeEnum } from '../code-systems/ActionParticipantTypeEnum';
import { ActionPrecheckBehaviorEnum } from '../code-systems/ActionPrecheckBehaviorEnum';
import { ActionRelationshipTypeEnum } from '../code-systems/ActionRelationshipTypeEnum';
import { ActionRequiredBehaviorEnum } from '../code-systems/ActionRequiredBehaviorEnum';
import { ActionSelectionBehaviorEnum } from '../code-systems/ActionSelectionBehaviorEnum';
import { Age, Annotation, CodeableConcept, CodeableReference, DataRequirement, Duration, Expression, Identifier, PARSABLE_DATATYPE_MAP, Period, Range, Reference, RelatedArtifact, Timing } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { RequestIntentEnum } from '../code-systems/RequestIntentEnum';
import { RequestPriorityEnum } from '../code-systems/RequestPriorityEnum';
import { RequestStatusEnum } from '../code-systems/RequestStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * RequestOrchestration Class
 *
 * @remarks
 * A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 *
 * **FHIR Specification**
 * - **Short:** A set of related requests
 * - **Definition:** A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR RequestOrchestration](http://hl7.org/fhir/StructureDefinition/RequestOrchestration)
 */
export class RequestOrchestration extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, intent: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.requestStatusEnum = new RequestStatusEnum();
    this.requestIntentEnum = new RequestIntentEnum();
    this.requestPriorityEnum = new RequestPriorityEnum();

    this.status = constructorCodeValueAsEnumCodeType<RequestStatusEnum>(
      status,
      RequestStatusEnum,
      this.requestStatusEnum,
      'RequestOrchestration.status',
    );

    this.intent = constructorCodeValueAsEnumCodeType<RequestIntentEnum>(
      intent,
      RequestIntentEnum,
      this.requestIntentEnum,
      'RequestOrchestration.intent',
    );
  }

  /**
   * Parse the provided `RequestOrchestration` JSON to instantiate the RequestOrchestration data model.
   *
   * @param sourceJson - JSON representing FHIR `RequestOrchestration`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RequestOrchestration
   * @returns RequestOrchestration data model or undefined for `RequestOrchestration`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): RequestOrchestration | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RequestOrchestration';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RequestOrchestration();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'RequestOrchestration');
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

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReason(datatype);
        }
      });
    }

    fieldName = 'goal';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addGoal(datatype);
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
        const component: RequestOrchestrationActionComponent | undefined = RequestOrchestrationActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAction(component);
        }
      });
    }

    return instance;
  }

  /**
   * RequestOrchestration.identifier Element
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
   * RequestOrchestration.instantiatesCanonical Element
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
   * RequestOrchestration.instantiatesUri Element
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
   * RequestOrchestration.basedOn Element
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
   * RequestOrchestration.replaces Element
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
   * RequestOrchestration.groupIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Composite request this is part of
   * - **Definition:** A shared identifier common to multiple independent Request instances that were activated/authorized more or less simultaneously by a single author.  The presence of the same identifier on each request ties those requests together and may have business ramifications in terms of reporting of results, billing, etc.  E.g. a requisition number shared by a set of lab tests ordered together, or a prescription number shared by all meds ordered at one time.
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
   * RequestOrchestration.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | on-hold | revoked | completed | entered-in-error | unknown
   * - **Definition:** The current state of the request. For request orchestrations, the status reflects the status of all the requests in the orchestration.
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
   * RequestOrchestration.intent Element
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
   * RequestOrchestration.priority Element
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
   * RequestOrchestration.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What\'s being requested/ordered
   * - **Definition:** A code that identifies what the overall request orchestration is.
   * - **Comment:** This element can be used to provide a code that captures the meaning of the request orchestration as a whole, as opposed to the code of the action element, which captures the meaning of the individual actions within the request orchestration.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * RequestOrchestration.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who the request orchestration is about
   * - **Definition:** The subject for which the request orchestration was created.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subject?: Reference | undefined;

  /**
   * RequestOrchestration.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Created as part of
   * - **Definition:** Describes the context of the request orchestration, if any.
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
   * RequestOrchestration.authoredOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the request orchestration was authored
   * - **Definition:** Indicates when the request orchestration was created.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authoredOn?: DateTimeType | undefined;

  /**
   * RequestOrchestration.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Device or practitioner that authored the request orchestration
   * - **Definition:** Provides a reference to the author of the request orchestration.
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
   * RequestOrchestration.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why the request orchestration is needed
   * - **Definition:** Describes the reason for the request orchestration in coded or textual form.
   * - **FHIR Type:** `CodeableReference`
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
  private reason?: CodeableReference[] | undefined;

  /**
   * RequestOrchestration.goal Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What goals
   * - **Definition:** Goals that are intended to be achieved by following the requests in this RequestOrchestration.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Goal',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private goal?: Reference[] | undefined;

  /**
   * RequestOrchestration.note Element
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
   * RequestOrchestration.action Element
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
  private action?: RequestOrchestrationActionComponent[] | undefined;

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
      const optErrMsg = `Invalid RequestOrchestration.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid RequestOrchestration.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid RequestOrchestration.instantiatesCanonical; Provided value array has an element that is not an instance of CanonicalType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.instantiatesCanonical; Provided element is not an instance of CanonicalType.`;
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
        const optErrMsg = `Invalid RequestOrchestration.instantiatesCanonical array item (${String(instantiatesCanonicalValue)})`;
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
      const optErrMsg = `Invalid RequestOrchestration.instantiatesCanonical array item (${String(value)})`;
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
      const optErrMsg = `Invalid RequestOrchestration.instantiatesUri; Provided value array has an element that is not an instance of UriType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.instantiatesUri; Provided element is not an instance of UriType.`;
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
        const optErrMsg = `Invalid RequestOrchestration.instantiatesUri array item (${String(instantiatesUriValue)})`;
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
      const optErrMsg = `Invalid RequestOrchestration.instantiatesUri array item (${String(value)})`;
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
   * @decorator `@ReferenceTargets('RequestOrchestration.basedOn', ['Resource',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestOrchestration.basedOn', [
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
   * @decorator `@ReferenceTargets('RequestOrchestration.basedOn', ['Resource',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestOrchestration.basedOn', [
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
   * @decorator `@ReferenceTargets('RequestOrchestration.replaces', ['Resource',])`
   *
   * @param value - the `replaces` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestOrchestration.replaces', [
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
   * @decorator `@ReferenceTargets('RequestOrchestration.replaces', ['Resource',])`
   *
   * @param value - the `replaces` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestOrchestration.replaces', [
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
      const optErrMsg = `Invalid RequestOrchestration.groupIdentifier; Provided element is not an instance of Identifier.`;
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
      const errMsgPrefix = `Invalid RequestOrchestration.status`;
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
      const optErrMsg = `Invalid RequestOrchestration.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.status (${String(value)})`;
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
      const errMsgPrefix = `Invalid RequestOrchestration.intent`;
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
      const optErrMsg = `Invalid RequestOrchestration.intent; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.intent (${String(value)})`;
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
      const errMsgPrefix = 'Invalid RequestOrchestration.priority';
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
      const optErrMsg = `Invalid RequestOrchestration.priority; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.priority; Provided value is not an instance of fhirCode.`;
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
      const optErrMsg = `Invalid RequestOrchestration.code; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('RequestOrchestration.subject', ['CareTeam','Device','Group','HealthcareService','Location','Organization','Patient','Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestOrchestration.subject', [
    'CareTeam',
  
    'Device',
  
    'Group',
  
    'HealthcareService',
  
    'Location',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
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
   * @decorator `@ReferenceTargets('RequestOrchestration.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestOrchestration.encounter', [
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
      const optErrMsg = `Invalid RequestOrchestration.authoredOn; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.authoredOn (${String(value)})`;
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
   * @decorator `@ReferenceTargets('RequestOrchestration.author', ['Device','Practitioner','PractitionerRole',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestOrchestration.author', [
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
   * @returns the `reason` property value as a CodeableReference array
   */
  public getReason(): CodeableReference[] {
    return this.reason ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `reason` property.
   *
   * @param value - the `reason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.reason; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `reason` array property.
   *
   * @param value - the `reason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReason(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.reason; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initReason();
      this.reason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefinedList<CodeableReference>(this.reason) && this.reason.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `reason` property
   */
  private initReason(): void {
    if(!this.hasReason()) {
      this.reason = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `goal` property value as a Reference array
   */
  public getGoal(): Reference[] {
    return this.goal ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `goal` property.
   *
   * @decorator `@ReferenceTargets('RequestOrchestration.goal', ['Goal',])`
   *
   * @param value - the `goal` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestOrchestration.goal', [
    'Goal',
  ])
  public setGoal(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.goal = value;
    } else {
      this.goal = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `goal` array property.
   *
   * @decorator `@ReferenceTargets('RequestOrchestration.goal', ['Goal',])`
   *
   * @param value - the `goal` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestOrchestration.goal', [
    'Goal',
  ])
  public addGoal(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initGoal();
      this.goal?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `goal` property exists and has a value; `false` otherwise
   */
  public hasGoal(): boolean {
    return isDefinedList<Reference>(this.goal) && this.goal.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `goal` property
   */
  private initGoal(): void {
    if (!this.hasGoal()) {
      this.goal = [] as Reference[];
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
      const optErrMsg = `Invalid RequestOrchestration.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid RequestOrchestration.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `action` property value as a RequestOrchestrationActionComponent array
   */
  public getAction(): RequestOrchestrationActionComponent[] {
    return this.action ?? ([] as RequestOrchestrationActionComponent[]);
  }

  /**
   * Assigns the provided RequestOrchestrationActionComponent array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: RequestOrchestrationActionComponent[] | undefined): this {
    if (isDefinedList<RequestOrchestrationActionComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action; Provided value array has an element that is not an instance of RequestOrchestrationActionComponent.`;
      assertFhirTypeList<RequestOrchestrationActionComponent>(value, RequestOrchestrationActionComponent, optErrMsg);
      this.action = value;
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * Add the provided RequestOrchestrationActionComponent value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: RequestOrchestrationActionComponent | undefined): this {
    if (isDefined<RequestOrchestrationActionComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action; Provided element is not an instance of RequestOrchestrationActionComponent.`;
      assertFhirType<RequestOrchestrationActionComponent>(value, RequestOrchestrationActionComponent, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<RequestOrchestrationActionComponent>(this.action) && this.action.some((item: RequestOrchestrationActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as RequestOrchestrationActionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RequestOrchestration';
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
      this.reason,
      this.goal,
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
  public override copy(): RequestOrchestration {
    const dest = new RequestOrchestration();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RequestOrchestration): void {
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
    const reasonList = copyListValues<CodeableReference>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    const goalList = copyListValues<Reference>(this.goal);
    dest.goal = goalList.length === 0 ? undefined : goalList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const actionList = copyListValues<RequestOrchestrationActionComponent>(this.action);
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

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasGoal()) {
      setFhirComplexListJson(this.getGoal(), 'goal', jsonObj);
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
 * RequestOrchestrationActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Proposed actions, if any
 * - **Definition:** The actions, if any, produced by the evaluation of the artifact.
 *
 * @category Data Models: Resource
 * @see [FHIR RequestOrchestration](http://hl7.org/fhir/StructureDefinition/RequestOrchestration)
 */
export class RequestOrchestrationActionComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `RequestOrchestrationActionComponent` JSON to instantiate the RequestOrchestrationActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RequestOrchestrationActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RequestOrchestrationActionComponent
   * @returns RequestOrchestrationActionComponent data model or undefined for `RequestOrchestrationActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RequestOrchestrationActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RequestOrchestrationActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RequestOrchestrationActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = RequestOrchestrationActionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for RequestOrchestrationActionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'linkId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLinkIdElement(datatype);
    }

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
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'textEquivalent';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
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

    fieldName = 'goal';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addGoal(datatype);
        }
      });
  }

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RequestOrchestrationActionConditionComponent | undefined = RequestOrchestrationActionConditionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCondition(component);
        }
      });
    }

    fieldName = 'input';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RequestOrchestrationActionInputComponent | undefined = RequestOrchestrationActionInputComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addInput(component);
        }
      });
    }

    fieldName = 'output';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RequestOrchestrationActionOutputComponent | undefined = RequestOrchestrationActionOutputComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addOutput(component);
        }
      });
    }

    fieldName = 'relatedAction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RequestOrchestrationActionRelatedActionComponent | undefined = RequestOrchestrationActionRelatedActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    fieldName = 'participant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RequestOrchestrationActionParticipantComponent | undefined = RequestOrchestrationActionParticipantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addParticipant(component);
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

    fieldName = 'definition[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const definition: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDefinition(definition);

    fieldName = 'transform';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setTransformElement(datatype);
    }

    fieldName = 'dynamicValue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RequestOrchestrationActionDynamicValueComponent | undefined = RequestOrchestrationActionDynamicValueComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDynamicValue(component);
        }
      });
    }

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RequestOrchestrationActionComponent | undefined = RequestOrchestrationActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAction(component);
        }
      });
    }

    return instance;
  }

  /**
   * RequestOrchestration.action.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to specific item from the PlanDefinition
   * - **Definition:** The linkId of the action from the PlanDefinition that corresponds to this action in the RequestOrchestration resource.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId?: StringType | undefined;

  /**
   * RequestOrchestration.action.prefix Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** User-visible prefix for the action (e.g. 1. or A.)
   * - **Definition:** A user-visible prefix for the action. For example a section or item numbering such as 1. or A.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private prefix?: StringType | undefined;

  /**
   * RequestOrchestration.action.title Element
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
   * RequestOrchestration.action.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Short description of the action
   * - **Definition:** A short description of the action used to provide a summary to display to the user.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * RequestOrchestration.action.textEquivalent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system
   * - **Definition:** A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private textEquivalent?: MarkdownType | undefined;

  /**
   * FHIR CodeSystem: RequestPriority
   *
   * @see {@link RequestPriorityEnum }
   */
  private readonly requestPriorityEnum: RequestPriorityEnum;

  /**
   * RequestOrchestration.action.priority Element
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
   * RequestOrchestration.action.code Element
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
   * RequestOrchestration.action.documentation Element
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
   * RequestOrchestration.action.goal Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What goals
   * - **Definition:** Goals that are intended to be achieved by following the requests in this action.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Goal',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private goal?: Reference[] | undefined;

  /**
   * RequestOrchestration.action.condition Element
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
  private condition?: RequestOrchestrationActionConditionComponent[] | undefined;

  /**
   * RequestOrchestration.action.input Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Input data requirements
   * - **Definition:** Defines input data requirements for the action.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private input?: RequestOrchestrationActionInputComponent[] | undefined;

  /**
   * RequestOrchestration.action.output Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Output data definition
   * - **Definition:** Defines the outputs of the action, if any.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private output?: RequestOrchestrationActionOutputComponent[] | undefined;

  /**
   * RequestOrchestration.action.relatedAction Element
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
  private relatedAction?: RequestOrchestrationActionRelatedActionComponent[] | undefined;

  /**
   * RequestOrchestration.action.timing[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('RequestOrchestration.action.timing[x]', ['dateTime','Age','Period','Duration','Range','Timing',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the action should take place
   * - **Definition:** An optional value describing when the action should be performed.
   * - **Comment:** The intent of the timing element is to provide timing for when the action should be performed. The timing may be absolute (specified as a dateTime or Period) or relative (specified as an Age, Duration, or Range), or it may be a more complex, potentially repeating timing specified using Timing.
   * - **Requirements:** Allows prompting for activities and detection of missed planned activities.
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
  @ChoiceDataTypesMeta('RequestOrchestration.action.timing[x]',[
    'dateTime',
    'Age',
    'Period',
    'Duration',
    'Range',
    'Timing',
  ])
  private timing?: IDataType | undefined;

  /**
   * RequestOrchestration.action.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where it should happen
   * - **Definition:** Identifies the facility where the action will occur; e.g. home, hospital, specific clinic, etc.
   * - **Comment:** May reference a specific clinical location or may just identify a type of location.
   * - **Requirements:** Helps in planning of activity.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private location?: CodeableReference | undefined;

  /**
   * RequestOrchestration.action.participant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who should perform the action
   * - **Definition:** The participant that should perform or be responsible for this action.
   * - **Comment:** Because request orchestrations represent potential options for performing activities, some specific participants may still be unknown, so this element allows for both definitional participants (in the same way they are specified in ActivityDefinition and PlanDefinition resources) as well as identifying specific participants when they are known.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private participant?: RequestOrchestrationActionParticipantComponent[] | undefined;

  /**
   * RequestOrchestration.action.type Element
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
   * RequestOrchestration.action.groupingBehavior Element
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
   * RequestOrchestration.action.selectionBehavior Element
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
   * RequestOrchestration.action.requiredBehavior Element
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
   * RequestOrchestration.action.precheckBehavior Element
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
   * RequestOrchestration.action.cardinalityBehavior Element
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
   * RequestOrchestration.action.resource Element
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
   * RequestOrchestration.action.definition[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('RequestOrchestration.action.definition[x]', ['canonical','uri',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the activity to be performed
   * - **Definition:** A reference to an ActivityDefinition that describes the action to be taken in detail, a PlanDefinition that describes a series of actions to be taken, a Questionnaire that should be filled out, a SpecimenDefinition describing a specimen to be collected, or an ObservationDefinition that specifies what observation should be captured.
   * - **Comment:** Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
   * - **FHIR Types:**
   *     'canonical',
   *     'uri',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('RequestOrchestration.action.definition[x]',[
    'canonical',
    'uri',
  ])
  private definition?: IDataType | undefined;

  /**
   * RequestOrchestration.action.transform Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Transform to apply the template
   * - **Definition:** A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
   * - **Comment:** Note that when a referenced ActivityDefinition also defines a transform, the transform specified here generally takes precedence. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureMap',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private transform?: CanonicalType | undefined;

  /**
   * RequestOrchestration.action.dynamicValue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dynamic aspects of the definition
   * - **Definition:** Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient\'s weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.
   * - **Comment:** Dynamic values are applied in the order in which they are defined in the RequestOrchestration resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dynamicValue?: RequestOrchestrationActionDynamicValueComponent[] | undefined;

  /**
   * RequestOrchestration.action.action Element
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
  private action?: RequestOrchestrationActionComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `linkId` property value as a StringType object if defined; else an empty StringType object
   */
  public getLinkIdElement(): StringType {
    return this.linkId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `linkId` property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid RequestOrchestration.action.linkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefined<StringType>(this.linkId) && !this.linkId.isEmpty();
  }

  /**
   * @returns the `linkId` property value as a fhirString if defined; else undefined
   */
  public getLinkId(): fhirString | undefined {
    return this.linkId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `linkId` property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.linkId (${String(value)})`;
      this.linkId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkId(): boolean {
    return this.hasLinkIdElement();
  }

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
      const optErrMsg = `Invalid RequestOrchestration.action.prefix; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.prefix (${String(value)})`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.title (${String(value)})`;
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
   * @returns the `description` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDescriptionElement(): MarkdownType {
    return this.description ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid RequestOrchestration.action.description; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirMarkdown if defined; else undefined
   */
  public getDescription(): fhirMarkdown | undefined {
    return this.description?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.description (${String(value)})`;
      this.description = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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
   * @returns the `textEquivalent` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getTextEquivalentElement(): MarkdownType {
    return this.textEquivalent ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `textEquivalent` property.
   *
   * @param element - the `textEquivalent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextEquivalentElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid RequestOrchestration.action.textEquivalent; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.textEquivalent) && !this.textEquivalent.isEmpty();
  }

  /**
   * @returns the `textEquivalent` property value as a fhirMarkdown if defined; else undefined
   */
  public getTextEquivalent(): fhirMarkdown | undefined {
    return this.textEquivalent?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `textEquivalent` property.
   *
   * @param value - the `textEquivalent` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextEquivalent(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.textEquivalent (${String(value)})`;
      this.textEquivalent = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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
      const errMsgPrefix = 'Invalid RequestOrchestration.action.priority';
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
      const optErrMsg = `Invalid RequestOrchestration.action.priority; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.priority; Provided value is not an instance of fhirCode.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.code; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.code; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.documentation; Provided value array has an element that is not an instance of RelatedArtifact.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.documentation; Provided element is not an instance of RelatedArtifact.`;
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
   * @returns the `goal` property value as a Reference array
   */
  public getGoal(): Reference[] {
    return this.goal ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `goal` property.
   *
   * @decorator `@ReferenceTargets('RequestOrchestration.action.goal', ['Goal',])`
   *
   * @param value - the `goal` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestOrchestration.action.goal', [
    'Goal',
  ])
  public setGoal(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.goal = value;
    } else {
      this.goal = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `goal` array property.
   *
   * @decorator `@ReferenceTargets('RequestOrchestration.action.goal', ['Goal',])`
   *
   * @param value - the `goal` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestOrchestration.action.goal', [
    'Goal',
  ])
  public addGoal(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initGoal();
      this.goal?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `goal` property exists and has a value; `false` otherwise
   */
  public hasGoal(): boolean {
    return isDefinedList<Reference>(this.goal) && this.goal.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `goal` property
   */
  private initGoal(): void {
    if (!this.hasGoal()) {
      this.goal = [] as Reference[];
    }
  }

  /**
   * @returns the `condition` property value as a RequestOrchestrationActionConditionComponent array
   */
  public getCondition(): RequestOrchestrationActionConditionComponent[] {
    return this.condition ?? ([] as RequestOrchestrationActionConditionComponent[]);
  }

  /**
   * Assigns the provided RequestOrchestrationActionConditionComponent array value to the `condition` property.
   *
   * @param value - the `condition` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCondition(value: RequestOrchestrationActionConditionComponent[] | undefined): this {
    if (isDefinedList<RequestOrchestrationActionConditionComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.condition; Provided value array has an element that is not an instance of RequestOrchestrationActionConditionComponent.`;
      assertFhirTypeList<RequestOrchestrationActionConditionComponent>(value, RequestOrchestrationActionConditionComponent, optErrMsg);
      this.condition = value;
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * Add the provided RequestOrchestrationActionConditionComponent value to the `condition` array property.
   *
   * @param value - the `condition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCondition(value: RequestOrchestrationActionConditionComponent | undefined): this {
    if (isDefined<RequestOrchestrationActionConditionComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.condition; Provided element is not an instance of RequestOrchestrationActionConditionComponent.`;
      assertFhirType<RequestOrchestrationActionConditionComponent>(value, RequestOrchestrationActionConditionComponent, optErrMsg);
      this.initCondition();
      this.condition?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return isDefinedList<RequestOrchestrationActionConditionComponent>(this.condition) && this.condition.some((item: RequestOrchestrationActionConditionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `condition` property
   */
  private initCondition(): void {
    if(!this.hasCondition()) {
      this.condition = [] as RequestOrchestrationActionConditionComponent[];
    }
  }

  /**
   * @returns the `input` property value as a RequestOrchestrationActionInputComponent array
   */
  public getInput(): RequestOrchestrationActionInputComponent[] {
    return this.input ?? ([] as RequestOrchestrationActionInputComponent[]);
  }

  /**
   * Assigns the provided RequestOrchestrationActionInputComponent array value to the `input` property.
   *
   * @param value - the `input` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInput(value: RequestOrchestrationActionInputComponent[] | undefined): this {
    if (isDefinedList<RequestOrchestrationActionInputComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.input; Provided value array has an element that is not an instance of RequestOrchestrationActionInputComponent.`;
      assertFhirTypeList<RequestOrchestrationActionInputComponent>(value, RequestOrchestrationActionInputComponent, optErrMsg);
      this.input = value;
    } else {
      this.input = undefined;
    }
    return this;
  }

  /**
   * Add the provided RequestOrchestrationActionInputComponent value to the `input` array property.
   *
   * @param value - the `input` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInput(value: RequestOrchestrationActionInputComponent | undefined): this {
    if (isDefined<RequestOrchestrationActionInputComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.input; Provided element is not an instance of RequestOrchestrationActionInputComponent.`;
      assertFhirType<RequestOrchestrationActionInputComponent>(value, RequestOrchestrationActionInputComponent, optErrMsg);
      this.initInput();
      this.input?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `input` property exists and has a value; `false` otherwise
   */
  public hasInput(): boolean {
    return isDefinedList<RequestOrchestrationActionInputComponent>(this.input) && this.input.some((item: RequestOrchestrationActionInputComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `input` property
   */
  private initInput(): void {
    if(!this.hasInput()) {
      this.input = [] as RequestOrchestrationActionInputComponent[];
    }
  }

  /**
   * @returns the `output` property value as a RequestOrchestrationActionOutputComponent array
   */
  public getOutput(): RequestOrchestrationActionOutputComponent[] {
    return this.output ?? ([] as RequestOrchestrationActionOutputComponent[]);
  }

  /**
   * Assigns the provided RequestOrchestrationActionOutputComponent array value to the `output` property.
   *
   * @param value - the `output` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutput(value: RequestOrchestrationActionOutputComponent[] | undefined): this {
    if (isDefinedList<RequestOrchestrationActionOutputComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.output; Provided value array has an element that is not an instance of RequestOrchestrationActionOutputComponent.`;
      assertFhirTypeList<RequestOrchestrationActionOutputComponent>(value, RequestOrchestrationActionOutputComponent, optErrMsg);
      this.output = value;
    } else {
      this.output = undefined;
    }
    return this;
  }

  /**
   * Add the provided RequestOrchestrationActionOutputComponent value to the `output` array property.
   *
   * @param value - the `output` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOutput(value: RequestOrchestrationActionOutputComponent | undefined): this {
    if (isDefined<RequestOrchestrationActionOutputComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.output; Provided element is not an instance of RequestOrchestrationActionOutputComponent.`;
      assertFhirType<RequestOrchestrationActionOutputComponent>(value, RequestOrchestrationActionOutputComponent, optErrMsg);
      this.initOutput();
      this.output?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `output` property exists and has a value; `false` otherwise
   */
  public hasOutput(): boolean {
    return isDefinedList<RequestOrchestrationActionOutputComponent>(this.output) && this.output.some((item: RequestOrchestrationActionOutputComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `output` property
   */
  private initOutput(): void {
    if(!this.hasOutput()) {
      this.output = [] as RequestOrchestrationActionOutputComponent[];
    }
  }

  /**
   * @returns the `relatedAction` property value as a RequestOrchestrationActionRelatedActionComponent array
   */
  public getRelatedAction(): RequestOrchestrationActionRelatedActionComponent[] {
    return this.relatedAction ?? ([] as RequestOrchestrationActionRelatedActionComponent[]);
  }

  /**
   * Assigns the provided RequestOrchestrationActionRelatedActionComponent array value to the `relatedAction` property.
   *
   * @param value - the `relatedAction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatedAction(value: RequestOrchestrationActionRelatedActionComponent[] | undefined): this {
    if (isDefinedList<RequestOrchestrationActionRelatedActionComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.relatedAction; Provided value array has an element that is not an instance of RequestOrchestrationActionRelatedActionComponent.`;
      assertFhirTypeList<RequestOrchestrationActionRelatedActionComponent>(value, RequestOrchestrationActionRelatedActionComponent, optErrMsg);
      this.relatedAction = value;
    } else {
      this.relatedAction = undefined;
    }
    return this;
  }

  /**
   * Add the provided RequestOrchestrationActionRelatedActionComponent value to the `relatedAction` array property.
   *
   * @param value - the `relatedAction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatedAction(value: RequestOrchestrationActionRelatedActionComponent | undefined): this {
    if (isDefined<RequestOrchestrationActionRelatedActionComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.relatedAction; Provided element is not an instance of RequestOrchestrationActionRelatedActionComponent.`;
      assertFhirType<RequestOrchestrationActionRelatedActionComponent>(value, RequestOrchestrationActionRelatedActionComponent, optErrMsg);
      this.initRelatedAction();
      this.relatedAction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedAction` property exists and has a value; `false` otherwise
   */
  public hasRelatedAction(): boolean {
    return isDefinedList<RequestOrchestrationActionRelatedActionComponent>(this.relatedAction) && this.relatedAction.some((item: RequestOrchestrationActionRelatedActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relatedAction` property
   */
  private initRelatedAction(): void {
    if(!this.hasRelatedAction()) {
      this.relatedAction = [] as RequestOrchestrationActionRelatedActionComponent[];
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
   * @decorator `@ChoiceDataTypes('RequestOrchestration.action.timing[x]')`
   *
   * @param value - the `timing` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('RequestOrchestration.action.timing[x]')
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
        `DataType mismatch for RequestOrchestration.action.timing[x]: Expected DateTimeType but encountered ${this.timing.fhirType()}`,
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
        `DataType mismatch for RequestOrchestration.action.timing[x]: Expected Age but encountered ${this.timing.fhirType()}`,
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
        `DataType mismatch for RequestOrchestration.action.timing[x]: Expected Period but encountered ${this.timing.fhirType()}`,
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
        `DataType mismatch for RequestOrchestration.action.timing[x]: Expected Duration but encountered ${this.timing.fhirType()}`,
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
        `DataType mismatch for RequestOrchestration.action.timing[x]: Expected Range but encountered ${this.timing.fhirType()}`,
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
        `DataType mismatch for RequestOrchestration.action.timing[x]: Expected Timing but encountered ${this.timing.fhirType()}`,
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
   * @returns the `location` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getLocation(): CodeableReference {
    return this.location ?? new CodeableReference();
  }

  /**
   * Assigns the provided Location object value to the `location` property.
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLocation(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.location; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
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
    return isDefined<CodeableReference>(this.location) && !this.location.isEmpty();
  }

  /**
   * @returns the `participant` property value as a RequestOrchestrationActionParticipantComponent array
   */
  public getParticipant(): RequestOrchestrationActionParticipantComponent[] {
    return this.participant ?? ([] as RequestOrchestrationActionParticipantComponent[]);
  }

  /**
   * Assigns the provided RequestOrchestrationActionParticipantComponent array value to the `participant` property.
   *
   * @param value - the `participant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParticipant(value: RequestOrchestrationActionParticipantComponent[] | undefined): this {
    if (isDefinedList<RequestOrchestrationActionParticipantComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.participant; Provided value array has an element that is not an instance of RequestOrchestrationActionParticipantComponent.`;
      assertFhirTypeList<RequestOrchestrationActionParticipantComponent>(value, RequestOrchestrationActionParticipantComponent, optErrMsg);
      this.participant = value;
    } else {
      this.participant = undefined;
    }
    return this;
  }

  /**
   * Add the provided RequestOrchestrationActionParticipantComponent value to the `participant` array property.
   *
   * @param value - the `participant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParticipant(value: RequestOrchestrationActionParticipantComponent | undefined): this {
    if (isDefined<RequestOrchestrationActionParticipantComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.participant; Provided element is not an instance of RequestOrchestrationActionParticipantComponent.`;
      assertFhirType<RequestOrchestrationActionParticipantComponent>(value, RequestOrchestrationActionParticipantComponent, optErrMsg);
      this.initParticipant();
      this.participant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `participant` property exists and has a value; `false` otherwise
   */
  public hasParticipant(): boolean {
    return isDefinedList<RequestOrchestrationActionParticipantComponent>(this.participant) && this.participant.some((item: RequestOrchestrationActionParticipantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `participant` property
   */
  private initParticipant(): void {
    if(!this.hasParticipant()) {
      this.participant = [] as RequestOrchestrationActionParticipantComponent[];
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
      const optErrMsg = `Invalid RequestOrchestration.action.type; Provided element is not an instance of CodeableConcept.`;
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
      const errMsgPrefix = 'Invalid RequestOrchestration.action.groupingBehavior';
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
      const optErrMsg = `Invalid RequestOrchestration.action.groupingBehavior; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.groupingBehavior; Provided value is not an instance of fhirCode.`;
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
      const errMsgPrefix = 'Invalid RequestOrchestration.action.selectionBehavior';
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
      const optErrMsg = `Invalid RequestOrchestration.action.selectionBehavior; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.selectionBehavior; Provided value is not an instance of fhirCode.`;
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
      const errMsgPrefix = 'Invalid RequestOrchestration.action.requiredBehavior';
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
      const optErrMsg = `Invalid RequestOrchestration.action.requiredBehavior; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.requiredBehavior; Provided value is not an instance of fhirCode.`;
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
      const errMsgPrefix = 'Invalid RequestOrchestration.action.precheckBehavior';
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
      const optErrMsg = `Invalid RequestOrchestration.action.precheckBehavior; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.precheckBehavior; Provided value is not an instance of fhirCode.`;
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
      const errMsgPrefix = 'Invalid RequestOrchestration.action.cardinalityBehavior';
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
      const optErrMsg = `Invalid RequestOrchestration.action.cardinalityBehavior; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.cardinalityBehavior; Provided value is not an instance of fhirCode.`;
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
   * @decorator `@ReferenceTargets('RequestOrchestration.action.resource', ['Resource',])`
   *
   * @param value - the `resource` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestOrchestration.action.resource', [
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
   * @returns the `definition` property value as a DataType object if defined; else undefined
   */
  public getDefinition(): IDataType | undefined {
    return this.definition;
  }

  /**
   * Assigns the provided DataType object value to the `definition` property.
   *
   * @decorator `@ChoiceDataTypes('RequestOrchestration.action.definition[x]')`
   *
   * @param value - the `definition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('RequestOrchestration.action.definition[x]')
  public setDefinition(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.definition = value;
    } else {
      this.definition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinition(): boolean {
    return isDefined<IDataType>(this.definition) && !this.definition.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `definition` property value as a CanonicalType object if defined; else undefined
   */
  public getDefinitionCanonicalType(): CanonicalType | undefined {
    if (!isDefined<IDataType | undefined>(this.definition)) {
      return undefined;
    }
    if (!(this.definition instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for RequestOrchestration.action.definition[x]: Expected CanonicalType but encountered ${this.definition.fhirType()}`,
      );
    }
    return this.definition;
  }

  /**
   * @returns `true` if the `definition` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasDefinitionCanonicalType(): boolean {
    return this.hasDefinition() && this.definition instanceof CanonicalType;
  }

  /**
   * @returns the `definition` property value as a UriType object if defined; else undefined
   */
  public getDefinitionUriType(): UriType | undefined {
    if (!isDefined<IDataType | undefined>(this.definition)) {
      return undefined;
    }
    if (!(this.definition instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for RequestOrchestration.action.definition[x]: Expected UriType but encountered ${this.definition.fhirType()}`,
      );
    }
    return this.definition;
  }

  /**
   * @returns `true` if the `definition` property exists as a UriType and has a value; `false` otherwise
   */
  public hasDefinitionUriType(): boolean {
    return this.hasDefinition() && this.definition instanceof UriType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `transform` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getTransformElement(): CanonicalType {
    return this.transform ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `transform` property.
   *
   * @param element - the `transform` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTransformElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid RequestOrchestration.action.transform; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.transform = element;
    } else {
      this.transform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `transform` property exists and has a value; `false` otherwise
   */
  public hasTransformElement(): boolean {
    return isDefined<CanonicalType>(this.transform) && !this.transform.isEmpty();
  }

  /**
   * @returns the `transform` property value as a fhirCanonical if defined; else undefined
   */
  public getTransform(): fhirCanonical | undefined {
    return this.transform?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `transform` property.
   *
   * @param value - the `transform` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTransform(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.transform (${String(value)})`;
      this.transform = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.transform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `transform` property exists and has a value; `false` otherwise
   */
  public hasTransform(): boolean {
    return this.hasTransformElement();
  }

  /**
   * @returns the `dynamicValue` property value as a RequestOrchestrationActionDynamicValueComponent array
   */
  public getDynamicValue(): RequestOrchestrationActionDynamicValueComponent[] {
    return this.dynamicValue ?? ([] as RequestOrchestrationActionDynamicValueComponent[]);
  }

  /**
   * Assigns the provided RequestOrchestrationActionDynamicValueComponent array value to the `dynamicValue` property.
   *
   * @param value - the `dynamicValue` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDynamicValue(value: RequestOrchestrationActionDynamicValueComponent[] | undefined): this {
    if (isDefinedList<RequestOrchestrationActionDynamicValueComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.dynamicValue; Provided value array has an element that is not an instance of RequestOrchestrationActionDynamicValueComponent.`;
      assertFhirTypeList<RequestOrchestrationActionDynamicValueComponent>(value, RequestOrchestrationActionDynamicValueComponent, optErrMsg);
      this.dynamicValue = value;
    } else {
      this.dynamicValue = undefined;
    }
    return this;
  }

  /**
   * Add the provided RequestOrchestrationActionDynamicValueComponent value to the `dynamicValue` array property.
   *
   * @param value - the `dynamicValue` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDynamicValue(value: RequestOrchestrationActionDynamicValueComponent | undefined): this {
    if (isDefined<RequestOrchestrationActionDynamicValueComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.dynamicValue; Provided element is not an instance of RequestOrchestrationActionDynamicValueComponent.`;
      assertFhirType<RequestOrchestrationActionDynamicValueComponent>(value, RequestOrchestrationActionDynamicValueComponent, optErrMsg);
      this.initDynamicValue();
      this.dynamicValue?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dynamicValue` property exists and has a value; `false` otherwise
   */
  public hasDynamicValue(): boolean {
    return isDefinedList<RequestOrchestrationActionDynamicValueComponent>(this.dynamicValue) && this.dynamicValue.some((item: RequestOrchestrationActionDynamicValueComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `dynamicValue` property
   */
  private initDynamicValue(): void {
    if(!this.hasDynamicValue()) {
      this.dynamicValue = [] as RequestOrchestrationActionDynamicValueComponent[];
    }
  }

  /**
   * @returns the `action` property value as a RequestOrchestrationActionComponent array
   */
  public getAction(): RequestOrchestrationActionComponent[] {
    return this.action ?? ([] as RequestOrchestrationActionComponent[]);
  }

  /**
   * Assigns the provided RequestOrchestrationActionComponent array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: RequestOrchestrationActionComponent[] | undefined): this {
    if (isDefinedList<RequestOrchestrationActionComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.action; Provided value array has an element that is not an instance of RequestOrchestrationActionComponent.`;
      assertFhirTypeList<RequestOrchestrationActionComponent>(value, RequestOrchestrationActionComponent, optErrMsg);
      this.action = value;
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * Add the provided RequestOrchestrationActionComponent value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: RequestOrchestrationActionComponent | undefined): this {
    if (isDefined<RequestOrchestrationActionComponent>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.action; Provided element is not an instance of RequestOrchestrationActionComponent.`;
      assertFhirType<RequestOrchestrationActionComponent>(value, RequestOrchestrationActionComponent, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<RequestOrchestrationActionComponent>(this.action) && this.action.some((item: RequestOrchestrationActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as RequestOrchestrationActionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RequestOrchestration.action';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.linkId,
      this.prefix,
      this.title,
      this.description,
      this.textEquivalent,
      this.priority,
      this.code,
      this.documentation,
      this.goal,
      this.condition,
      this.input,
      this.output,
      this.relatedAction,
      this.timing,
      this.location,
      this.participant,
      this.type_,
      this.groupingBehavior,
      this.selectionBehavior,
      this.requiredBehavior,
      this.precheckBehavior,
      this.cardinalityBehavior,
      this.resource,
      this.definition,
      this.transform,
      this.dynamicValue,
      this.action,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RequestOrchestrationActionComponent {
    const dest = new RequestOrchestrationActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RequestOrchestrationActionComponent): void {
    super.copyValues(dest);
    dest.linkId = this.linkId?.copy();
    dest.prefix = this.prefix?.copy();
    dest.title = this.title?.copy();
    dest.description = this.description?.copy();
    dest.textEquivalent = this.textEquivalent?.copy();
    dest.priority = this.priority?.copy();
    const codeList = copyListValues<CodeableConcept>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    const documentationList = copyListValues<RelatedArtifact>(this.documentation);
    dest.documentation = documentationList.length === 0 ? undefined : documentationList;
    const goalList = copyListValues<Reference>(this.goal);
    dest.goal = goalList.length === 0 ? undefined : goalList;
    const conditionList = copyListValues<RequestOrchestrationActionConditionComponent>(this.condition);
    dest.condition = conditionList.length === 0 ? undefined : conditionList;
    const inputList = copyListValues<RequestOrchestrationActionInputComponent>(this.input);
    dest.input = inputList.length === 0 ? undefined : inputList;
    const outputList = copyListValues<RequestOrchestrationActionOutputComponent>(this.output);
    dest.output = outputList.length === 0 ? undefined : outputList;
    const relatedActionList = copyListValues<RequestOrchestrationActionRelatedActionComponent>(this.relatedAction);
    dest.relatedAction = relatedActionList.length === 0 ? undefined : relatedActionList;
    dest.timing = this.timing?.copy() as IDataType;
    dest.location = this.location?.copy();
    const participantList = copyListValues<RequestOrchestrationActionParticipantComponent>(this.participant);
    dest.participant = participantList.length === 0 ? undefined : participantList;
    dest.type_ = this.type_?.copy();
    dest.groupingBehavior = this.groupingBehavior?.copy();
    dest.selectionBehavior = this.selectionBehavior?.copy();
    dest.requiredBehavior = this.requiredBehavior?.copy();
    dest.precheckBehavior = this.precheckBehavior?.copy();
    dest.cardinalityBehavior = this.cardinalityBehavior?.copy();
    dest.resource = this.resource?.copy();
    dest.definition = this.definition?.copy() as IDataType;
    dest.transform = this.transform?.copy();
    const dynamicValueList = copyListValues<RequestOrchestrationActionDynamicValueComponent>(this.dynamicValue);
    dest.dynamicValue = dynamicValueList.length === 0 ? undefined : dynamicValueList;
    const actionList = copyListValues<RequestOrchestrationActionComponent>(this.action);
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

    if (this.hasLinkIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLinkIdElement(), 'linkId', jsonObj);
    }

    if (this.hasPrefixElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPrefixElement(), 'prefix', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasTextEquivalentElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getTextEquivalentElement(), 'textEquivalent', jsonObj);
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

    if (this.hasGoal()) {
      setFhirComplexListJson(this.getGoal(), 'goal', jsonObj);
    }

    if (this.hasCondition()) {
      setFhirBackboneElementListJson(this.getCondition(), 'condition', jsonObj);
    }

    if (this.hasInput()) {
      setFhirBackboneElementListJson(this.getInput(), 'input', jsonObj);
    }

    if (this.hasOutput()) {
      setFhirBackboneElementListJson(this.getOutput(), 'output', jsonObj);
    }

    if (this.hasRelatedAction()) {
      setFhirBackboneElementListJson(this.getRelatedAction(), 'relatedAction', jsonObj);
    }

    if (this.hasTiming()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTiming()!, 'timing', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasParticipant()) {
      setFhirBackboneElementListJson(this.getParticipant(), 'participant', jsonObj);
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

    if (this.hasDefinition()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDefinition()!, 'definition', jsonObj);
    }

    if (this.hasTransformElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getTransformElement(), 'transform', jsonObj);
    }

    if (this.hasDynamicValue()) {
      setFhirBackboneElementListJson(this.getDynamicValue(), 'dynamicValue', jsonObj);
    }

    if (this.hasAction()) {
      setFhirBackboneElementListJson(this.getAction(), 'action', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * RequestOrchestrationActionConditionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Whether or not the action is applicable
 * - **Definition:** An expression that describes applicability criteria, or start/stop conditions for the action.
 * - **Comment:** When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 *
 * @category Data Models: Resource
 * @see [FHIR RequestOrchestration](http://hl7.org/fhir/StructureDefinition/RequestOrchestration)
 */
export class RequestOrchestrationActionConditionComponent extends BackboneElement implements IBackboneElement {
  constructor(kind: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.actionConditionKindEnum = new ActionConditionKindEnum();

    this.kind = constructorCodeValueAsEnumCodeType<ActionConditionKindEnum>(
      kind,
      ActionConditionKindEnum,
      this.actionConditionKindEnum,
      'RequestOrchestration.action.condition.kind',
    );
  }

  /**
   * Parse the provided `RequestOrchestrationActionConditionComponent` JSON to instantiate the RequestOrchestrationActionConditionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RequestOrchestrationActionConditionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RequestOrchestrationActionConditionComponent
   * @returns RequestOrchestrationActionConditionComponent data model or undefined for `RequestOrchestrationActionConditionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RequestOrchestrationActionConditionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RequestOrchestrationActionConditionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RequestOrchestrationActionConditionComponent();

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
   * RequestOrchestration.action.condition.kind Element
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
   * RequestOrchestration.action.condition.expression Element
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
      const errMsgPrefix = `Invalid RequestOrchestration.action.condition.kind`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.condition.kind; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.condition.kind (${String(value)})`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.condition.expression; Provided element is not an instance of Expression.`;
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
    return 'RequestOrchestration.action.condition';
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
  public override copy(): RequestOrchestrationActionConditionComponent {
    const dest = new RequestOrchestrationActionConditionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RequestOrchestrationActionConditionComponent): void {
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
 * RequestOrchestrationActionInputComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Input data requirements
 * - **Definition:** Defines input data requirements for the action.
 *
 * @category Data Models: Resource
 * @see [FHIR RequestOrchestration](http://hl7.org/fhir/StructureDefinition/RequestOrchestration)
 */
export class RequestOrchestrationActionInputComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `RequestOrchestrationActionInputComponent` JSON to instantiate the RequestOrchestrationActionInputComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RequestOrchestrationActionInputComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RequestOrchestrationActionInputComponent
   * @returns RequestOrchestrationActionInputComponent data model or undefined for `RequestOrchestrationActionInputComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RequestOrchestrationActionInputComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RequestOrchestrationActionInputComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RequestOrchestrationActionInputComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTitleElement(datatype);
    }

    fieldName = 'requirement';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: DataRequirement | undefined = DataRequirement.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequirement(datatype);
    }

    fieldName = 'relatedData';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setRelatedDataElement(datatype);
    }

    return instance;
  }

  /**
   * RequestOrchestration.action.input.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** User-visible title
   * - **Definition:** A human-readable label for the data requirement used to label data flows in BPMN or similar diagrams. Also provides a human readable label when rendering the data requirement that conveys its purpose to human readers.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title?: StringType | undefined;

  /**
   * RequestOrchestration.action.input.requirement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What data is provided
   * - **Definition:** Defines the data that is to be provided as input to the action.
   * - **FHIR Type:** `DataRequirement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requirement?: DataRequirement | undefined;

  /**
   * RequestOrchestration.action.input.relatedData Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What data is provided
   * - **Definition:** Points to an existing input or output element that provides data to this input.
   * - **Comment:** The relatedData element allows indicating that an input to a parent action is an input to specific child actions. It also allows the output of one action to be identified as the input to a different action
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedData?: IdType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid RequestOrchestration.action.input.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.input.title (${String(value)})`;
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
   * @returns the `requirement` property value as a DataRequirement object if defined; else an empty DataRequirement object
   */
  public getRequirement(): DataRequirement {
    return this.requirement ?? new DataRequirement();
  }

  /**
   * Assigns the provided Requirement object value to the `requirement` property.
   *
   * @param value - the `requirement` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRequirement(value: DataRequirement | undefined): this {
    if (isDefined<DataRequirement>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.input.requirement; Provided element is not an instance of DataRequirement.`;
      assertFhirType<DataRequirement>(value, DataRequirement, optErrMsg);
      this.requirement = value;
    } else {
      this.requirement = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requirement` property exists and has a value; `false` otherwise
   */
  public hasRequirement(): boolean {
    return isDefined<DataRequirement>(this.requirement) && !this.requirement.isEmpty();
  }

  /**
   * @returns the `relatedData` property value as a IdType object if defined; else an empty IdType object
   */
  public getRelatedDataElement(): IdType {
    return this.relatedData ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `relatedData` property.
   *
   * @param element - the `relatedData` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRelatedDataElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid RequestOrchestration.action.input.relatedData; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.relatedData = element;
    } else {
      this.relatedData = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedData` property exists and has a value; `false` otherwise
   */
  public hasRelatedDataElement(): boolean {
    return isDefined<IdType>(this.relatedData) && !this.relatedData.isEmpty();
  }

  /**
   * @returns the `relatedData` property value as a fhirId if defined; else undefined
   */
  public getRelatedData(): fhirId | undefined {
    return this.relatedData?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `relatedData` property.
   *
   * @param value - the `relatedData` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRelatedData(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.input.relatedData (${String(value)})`;
      this.relatedData = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.relatedData = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedData` property exists and has a value; `false` otherwise
   */
  public hasRelatedData(): boolean {
    return this.hasRelatedDataElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RequestOrchestration.action.input';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.title,
      this.requirement,
      this.relatedData,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RequestOrchestrationActionInputComponent {
    const dest = new RequestOrchestrationActionInputComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RequestOrchestrationActionInputComponent): void {
    super.copyValues(dest);
    dest.title = this.title?.copy();
    dest.requirement = this.requirement?.copy();
    dest.relatedData = this.relatedData?.copy();
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

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasRequirement()) {
      setFhirComplexJson(this.getRequirement(), 'requirement', jsonObj);
    }

    if (this.hasRelatedDataElement()) {
      setFhirPrimitiveJson<fhirId>(this.getRelatedDataElement(), 'relatedData', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * RequestOrchestrationActionOutputComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Output data definition
 * - **Definition:** Defines the outputs of the action, if any.
 *
 * @category Data Models: Resource
 * @see [FHIR RequestOrchestration](http://hl7.org/fhir/StructureDefinition/RequestOrchestration)
 */
export class RequestOrchestrationActionOutputComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `RequestOrchestrationActionOutputComponent` JSON to instantiate the RequestOrchestrationActionOutputComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RequestOrchestrationActionOutputComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RequestOrchestrationActionOutputComponent
   * @returns RequestOrchestrationActionOutputComponent data model or undefined for `RequestOrchestrationActionOutputComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RequestOrchestrationActionOutputComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RequestOrchestrationActionOutputComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RequestOrchestrationActionOutputComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTitleElement(datatype);
    }

    fieldName = 'requirement';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: DataRequirement | undefined = DataRequirement.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequirement(datatype);
    }

    fieldName = 'relatedData';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setRelatedDataElement(datatype);
    }

    return instance;
  }

  /**
   * RequestOrchestration.action.output.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** User-visible title
   * - **Definition:** A human-readable label for the data requirement used to label data flows in BPMN or similar diagrams. Also provides a human readable label when rendering the data requirement that conveys its purpose to human readers.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title?: StringType | undefined;

  /**
   * RequestOrchestration.action.output.requirement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What data is provided
   * - **Definition:** Defines the data that results as output from the action.
   * - **FHIR Type:** `DataRequirement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requirement?: DataRequirement | undefined;

  /**
   * RequestOrchestration.action.output.relatedData Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What data is provided
   * - **Definition:** Points to an existing input or output element that is results as output from the action.
   * - **Comment:** The relatedData element allows indicating that the output of child action is also the output of a parent action. It also allows the input of one action to be identified as the output of a different action
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedData?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid RequestOrchestration.action.output.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.output.title (${String(value)})`;
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
   * @returns the `requirement` property value as a DataRequirement object if defined; else an empty DataRequirement object
   */
  public getRequirement(): DataRequirement {
    return this.requirement ?? new DataRequirement();
  }

  /**
   * Assigns the provided Requirement object value to the `requirement` property.
   *
   * @param value - the `requirement` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRequirement(value: DataRequirement | undefined): this {
    if (isDefined<DataRequirement>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.output.requirement; Provided element is not an instance of DataRequirement.`;
      assertFhirType<DataRequirement>(value, DataRequirement, optErrMsg);
      this.requirement = value;
    } else {
      this.requirement = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requirement` property exists and has a value; `false` otherwise
   */
  public hasRequirement(): boolean {
    return isDefined<DataRequirement>(this.requirement) && !this.requirement.isEmpty();
  }

  /**
   * @returns the `relatedData` property value as a StringType object if defined; else an empty StringType object
   */
  public getRelatedDataElement(): StringType {
    return this.relatedData ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `relatedData` property.
   *
   * @param element - the `relatedData` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRelatedDataElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid RequestOrchestration.action.output.relatedData; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.relatedData = element;
    } else {
      this.relatedData = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedData` property exists and has a value; `false` otherwise
   */
  public hasRelatedDataElement(): boolean {
    return isDefined<StringType>(this.relatedData) && !this.relatedData.isEmpty();
  }

  /**
   * @returns the `relatedData` property value as a fhirString if defined; else undefined
   */
  public getRelatedData(): fhirString | undefined {
    return this.relatedData?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `relatedData` property.
   *
   * @param value - the `relatedData` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRelatedData(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.output.relatedData (${String(value)})`;
      this.relatedData = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.relatedData = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedData` property exists and has a value; `false` otherwise
   */
  public hasRelatedData(): boolean {
    return this.hasRelatedDataElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RequestOrchestration.action.output';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.title,
      this.requirement,
      this.relatedData,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RequestOrchestrationActionOutputComponent {
    const dest = new RequestOrchestrationActionOutputComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RequestOrchestrationActionOutputComponent): void {
    super.copyValues(dest);
    dest.title = this.title?.copy();
    dest.requirement = this.requirement?.copy();
    dest.relatedData = this.relatedData?.copy();
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

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasRequirement()) {
      setFhirComplexJson(this.getRequirement(), 'requirement', jsonObj);
    }

    if (this.hasRelatedDataElement()) {
      setFhirPrimitiveJson<fhirString>(this.getRelatedDataElement(), 'relatedData', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * RequestOrchestrationActionRelatedActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Relationship to another action
 * - **Definition:** A relationship to another action such as "before" or "30-60 minutes after start of".
 *
 * @category Data Models: Resource
 * @see [FHIR RequestOrchestration](http://hl7.org/fhir/StructureDefinition/RequestOrchestration)
 */
export class RequestOrchestrationActionRelatedActionComponent extends BackboneElement implements IBackboneElement {
  constructor(targetId: IdType | fhirId | null = null, relationship: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.actionRelationshipTypeEnum = new ActionRelationshipTypeEnum();

    this.targetId = null;
    if (isDefined<IdType | fhirId>(targetId)) {
      if (targetId instanceof PrimitiveType) {
        this.setTargetIdElement(targetId);
      } else {
        this.setTargetId(targetId);
      }
    }

    this.relationship = constructorCodeValueAsEnumCodeType<ActionRelationshipTypeEnum>(
      relationship,
      ActionRelationshipTypeEnum,
      this.actionRelationshipTypeEnum,
      'RequestOrchestration.action.relatedAction.relationship',
    );
  }

  /**
   * Parse the provided `RequestOrchestrationActionRelatedActionComponent` JSON to instantiate the RequestOrchestrationActionRelatedActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RequestOrchestrationActionRelatedActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RequestOrchestrationActionRelatedActionComponent
   * @returns RequestOrchestrationActionRelatedActionComponent data model or undefined for `RequestOrchestrationActionRelatedActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RequestOrchestrationActionRelatedActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RequestOrchestrationActionRelatedActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RequestOrchestrationActionRelatedActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = RequestOrchestrationActionRelatedActionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for RequestOrchestrationActionRelatedActionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'targetId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setTargetId(null);
      } else {
        instance.setTargetIdElement(datatype);
      }
    } else {
      instance.setTargetId(null);
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

    fieldName = 'endRelationship';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setEndRelationshipElement(datatype);
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
   * RequestOrchestration.action.relatedAction.targetId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What action this is related to
   * - **Definition:** The element id of the target related action.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private targetId: IdType | null;

  /**
   * FHIR CodeSystem: ActionRelationshipType
   *
   * @see {@link ActionRelationshipTypeEnum }
   */
  private readonly actionRelationshipTypeEnum: ActionRelationshipTypeEnum;

  /**
   * RequestOrchestration.action.relatedAction.relationship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end
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
   * RequestOrchestration.action.relatedAction.endRelationship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end
   * - **Definition:** The relationship of the end of this action to the related action.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  private endRelationship?: EnumCodeType | undefined;

  /**
   * RequestOrchestration.action.relatedAction.offset[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('RequestOrchestration.action.relatedAction.offset[x]', ['Duration','Range',]`
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
  @ChoiceDataTypesMeta('RequestOrchestration.action.relatedAction.offset[x]',[
    'Duration',
    'Range',
  ])
  private offset?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `targetId` property value as a IdType object if defined; else an empty IdType object
   */
  public getTargetIdElement(): IdType {
    return this.targetId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `targetId` property.
   *
   * @param element - the `targetId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTargetIdElement(element: IdType | undefined | null): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid RequestOrchestration.action.relatedAction.targetId; Provided value is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.targetId = element;
    } else {
      this.targetId = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `targetId` property exists and has a value; `false` otherwise
   */
  public hasTargetIdElement(): boolean {
    return isDefined<IdType>(this.targetId) && !this.targetId.isEmpty();
  }

  /**
   * @returns the `targetId` property value as a fhirId if defined; else null
   */
  public getTargetId(): fhirId | null {
    if (this.targetId?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.targetId.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `targetId` property.
   *
   * @param value - the `targetId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTargetId(value: fhirId | undefined | null): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.relatedAction.targetId (${String(value)})`;
      this.targetId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.targetId = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `targetId` property exists and has a value; `false` otherwise
   */
  public hasTargetId(): boolean {
    return this.hasTargetIdElement();
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
      const errMsgPrefix = `Invalid RequestOrchestration.action.relatedAction.relationship`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.relatedAction.relationship; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid RequestOrchestration.action.relatedAction.relationship (${String(value)})`;
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
   * @returns the `endRelationship` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public getEndRelationshipEnumType(): EnumCodeType | undefined {
    return this.endRelationship;
  }

  /**
   * Assigns the provided EnumCodeType value to the `endRelationship` property.
   *
   * @param enumType - the `endRelationship` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public setEndRelationshipEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid RequestOrchestration.action.relatedAction.endRelationship';
      assertEnumCodeType<ActionRelationshipTypeEnum>(enumType, ActionRelationshipTypeEnum, errMsgPrefix);
      this.endRelationship = enumType;
    } else {
      this.endRelationship = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `endRelationship` property exists and has a value; `false` otherwise
   */
  public hasEndRelationshipEnumType(): boolean {
    return isDefined<EnumCodeType>(this.endRelationship) && !this.endRelationship.isEmpty() && this.endRelationship.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `endRelationship` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public getEndRelationshipElement(): CodeType | undefined {
    if (this.endRelationship === undefined) {
      return undefined;
    }
    return this.endRelationship as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `endRelationship` property.
   *
   * @param element - the `endRelationship` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public setEndRelationshipElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid RequestOrchestration.action.relatedAction.endRelationship; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.endRelationship = new EnumCodeType(element, this.actionRelationshipTypeEnum);
    } else {
      this.endRelationship = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `endRelationship` property exists and has a value; `false` otherwise
   */
  public hasEndRelationshipElement(): boolean {
    return this.hasEndRelationshipEnumType();
  }

  /**
   * @returns the `endRelationship` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public getEndRelationship(): fhirCode | undefined {
    if (this.endRelationship === undefined) {
      return undefined;
    }
    return this.endRelationship.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `endRelationship` property.
   *
   * @param value - the `endRelationship` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public setEndRelationship(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.relatedAction.endRelationship; Provided value is not an instance of fhirCode.`;
      this.endRelationship = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionRelationshipTypeEnum);
    } else {
      this.endRelationship = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `endRelationship` property exists and has a value; `false` otherwise
   */
  public hasEndRelationship(): boolean {
    return this.hasEndRelationshipEnumType();
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
   * @decorator `@ChoiceDataTypes('RequestOrchestration.action.relatedAction.offset[x]')`
   *
   * @param value - the `offset` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('RequestOrchestration.action.relatedAction.offset[x]')
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
        `DataType mismatch for RequestOrchestration.action.relatedAction.offset[x]: Expected Duration but encountered ${this.offset.fhirType()}`,
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
        `DataType mismatch for RequestOrchestration.action.relatedAction.offset[x]: Expected Range but encountered ${this.offset.fhirType()}`,
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
    return 'RequestOrchestration.action.relatedAction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.targetId,
      this.relationship,
      this.endRelationship,
      this.offset,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.targetId, this.relationship, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RequestOrchestrationActionRelatedActionComponent {
    const dest = new RequestOrchestrationActionRelatedActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RequestOrchestrationActionRelatedActionComponent): void {
    super.copyValues(dest);
    dest.targetId = this.targetId ? this.targetId.copy() : null;
    dest.relationship = this.relationship ? this.relationship.copy() : null;
    dest.endRelationship = this.endRelationship?.copy();
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

    if (this.hasTargetIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getTargetIdElement(), 'targetId', jsonObj);
    } else {
      jsonObj['targetId'] = null;
    }

    if (this.hasRelationshipElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getRelationshipElement()!, 'relationship', jsonObj);
    } else {
      jsonObj['relationship'] = null;
    }

    if (this.hasEndRelationshipElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getEndRelationshipElement()!, 'endRelationship', jsonObj);
    }

    if (this.hasOffset()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOffset()!, 'offset', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * RequestOrchestrationActionParticipantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who should perform the action
 * - **Definition:** The participant that should perform or be responsible for this action.
 * - **Comment:** Because request orchestrations represent potential options for performing activities, some specific participants may still be unknown, so this element allows for both definitional participants (in the same way they are specified in ActivityDefinition and PlanDefinition resources) as well as identifying specific participants when they are known.
 *
 * @category Data Models: Resource
 * @see [FHIR RequestOrchestration](http://hl7.org/fhir/StructureDefinition/RequestOrchestration)
 */
export class RequestOrchestrationActionParticipantComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.actionParticipantTypeEnum = new ActionParticipantTypeEnum();
  }

  /**
   * Parse the provided `RequestOrchestrationActionParticipantComponent` JSON to instantiate the RequestOrchestrationActionParticipantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RequestOrchestrationActionParticipantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RequestOrchestrationActionParticipantComponent
   * @returns RequestOrchestrationActionParticipantComponent data model or undefined for `RequestOrchestrationActionParticipantComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RequestOrchestrationActionParticipantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RequestOrchestrationActionParticipantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RequestOrchestrationActionParticipantComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = RequestOrchestrationActionParticipantComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for RequestOrchestrationActionParticipantComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setTypeElement(datatype);
    }

    fieldName = 'typeCanonical';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setTypeCanonicalElement(datatype);
    }

    fieldName = 'typeReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTypeReference(datatype);
    }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    fieldName = 'function';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFunction(datatype);
    }

    fieldName = 'actor[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const actor: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setActor(actor);

    return instance;
  }

  /**
   * FHIR CodeSystem: ActionParticipantType
   *
   * @see {@link ActionParticipantTypeEnum }
   */
  private readonly actionParticipantTypeEnum: ActionParticipantTypeEnum;

  /**
   * RequestOrchestration.action.participant.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson
   * - **Definition:** The type of participant in the action.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  private type_?: EnumCodeType | undefined;

  /**
   * RequestOrchestration.action.participant.typeCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or what can participate
   * - **Definition:** The type of participant in the action.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CapabilityStatement',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private typeCanonical?: CanonicalType | undefined;

  /**
   * RequestOrchestration.action.participant.typeReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or what can participate
   * - **Definition:** The type of participant in the action.
   * - **Comment:** When this element is a reference, it SHOULD be a reference to a definitional resource (for example, a location type, rather than a specific location).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Endpoint',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private typeReference?: Reference | undefined;

  /**
   * RequestOrchestration.action.participant.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** E.g. Nurse, Surgeon, Parent, etc
   * - **Definition:** The role the participant should play in performing the described action.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: CodeableConcept | undefined;

  /**
   * RequestOrchestration.action.participant.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** E.g. Author, Reviewer, Witness, etc
   * - **Definition:** Indicates how the actor will be involved in the action - author, reviewer, witness, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private function_?: CodeableConcept | undefined;

  /**
   * RequestOrchestration.action.participant.actor[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('RequestOrchestration.action.participant.actor[x]', ['canonical','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who/what is participating?
   * - **Definition:** A reference to the actual participant.
   * - **FHIR Types:**
   *     'canonical',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('RequestOrchestration.action.participant.actor[x]',[
    'canonical',
    'Reference',
  ])
  private actor?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  public getTypeEnumType(): EnumCodeType | undefined {
    return this.type_;
  }

  /**
   * Assigns the provided EnumCodeType value to the `type_` property.
   *
   * @param enumType - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid RequestOrchestration.action.participant.type';
      assertEnumCodeType<ActionParticipantTypeEnum>(enumType, ActionParticipantTypeEnum, errMsgPrefix);
      this.type_ = enumType;
    } else {
      this.type_ = undefined;
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
   * @returns the `type_` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  public getTypeElement(): CodeType | undefined {
    if (this.type_ === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid RequestOrchestration.action.participant.type; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.actionParticipantTypeEnum);
    } else {
      this.type_ = undefined;
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
   * @returns the `type_` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  public getType(): fhirCode | undefined {
    if (this.type_ === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  public setType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.participant.type; Provided value is not an instance of fhirCode.`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionParticipantTypeEnum);
    } else {
      this.type_ = undefined;
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
   * @returns the `typeCanonical` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getTypeCanonicalElement(): CanonicalType {
    return this.typeCanonical ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `typeCanonical` property.
   *
   * @param element - the `typeCanonical` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTypeCanonicalElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid RequestOrchestration.action.participant.typeCanonical; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.typeCanonical = element;
    } else {
      this.typeCanonical = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `typeCanonical` property exists and has a value; `false` otherwise
   */
  public hasTypeCanonicalElement(): boolean {
    return isDefined<CanonicalType>(this.typeCanonical) && !this.typeCanonical.isEmpty();
  }

  /**
   * @returns the `typeCanonical` property value as a fhirCanonical if defined; else undefined
   */
  public getTypeCanonical(): fhirCanonical | undefined {
    return this.typeCanonical?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `typeCanonical` property.
   *
   * @param value - the `typeCanonical` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTypeCanonical(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.participant.typeCanonical (${String(value)})`;
      this.typeCanonical = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.typeCanonical = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `typeCanonical` property exists and has a value; `false` otherwise
   */
  public hasTypeCanonical(): boolean {
    return this.hasTypeCanonicalElement();
  }

  /**
   * @returns the `typeReference` property value as a Reference object; else an empty Reference object
   */
  public getTypeReference(): Reference {
    return this.typeReference ?? new Reference();
  }

  /**
   * Assigns the provided TypeReference object value to the `typeReference` property.
   *
   * @decorator `@ReferenceTargets('RequestOrchestration.action.participant.typeReference', ['CareTeam','Device','DeviceDefinition','Endpoint','Group','HealthcareService','Location','Organization','Patient','Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `typeReference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RequestOrchestration.action.participant.typeReference', [
    'CareTeam',
  
    'Device',
  
    'DeviceDefinition',
  
    'Endpoint',
  
    'Group',
  
    'HealthcareService',
  
    'Location',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  ])
  public setTypeReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.typeReference = value;
    } else {
      this.typeReference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `typeReference` property exists and has a value; `false` otherwise
   */
  public hasTypeReference(): boolean {
    return isDefined<Reference>(this.typeReference) && !this.typeReference.isEmpty();
  }

  /**
   * @returns the `role` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRole(): CodeableConcept {
    return this.role ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Role object value to the `role` property.
   *
   * @param value - the `role` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRole(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.participant.role; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.role = value;
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return isDefined<CodeableConcept>(this.role) && !this.role.isEmpty();
  }

  /**
   * @returns the `function_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFunction(): CodeableConcept {
    return this.function_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Function object value to the `function_` property.
   *
   * @param value - the `function_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFunction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.participant.function; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.function_ = value;
    } else {
      this.function_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `function_` property exists and has a value; `false` otherwise
   */
  public hasFunction(): boolean {
    return isDefined<CodeableConcept>(this.function_) && !this.function_.isEmpty();
  }

  /**
   * @returns the `actor` property value as a DataType object if defined; else undefined
   */
  public getActor(): IDataType | undefined {
    return this.actor;
  }

  /**
   * Assigns the provided DataType object value to the `actor` property.
   *
   * @decorator `@ChoiceDataTypes('RequestOrchestration.action.participant.actor[x]')`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('RequestOrchestration.action.participant.actor[x]')
  public setActor(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.actor = value;
    } else {
      this.actor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actor` property exists and has a value; `false` otherwise
   */
  public hasActor(): boolean {
    return isDefined<IDataType>(this.actor) && !this.actor.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `actor` property value as a CanonicalType object if defined; else undefined
   */
  public getActorCanonicalType(): CanonicalType | undefined {
    if (!isDefined<IDataType | undefined>(this.actor)) {
      return undefined;
    }
    if (!(this.actor instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for RequestOrchestration.action.participant.actor[x]: Expected CanonicalType but encountered ${this.actor.fhirType()}`,
      );
    }
    return this.actor;
  }

  /**
   * @returns `true` if the `actor` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasActorCanonicalType(): boolean {
    return this.hasActor() && this.actor instanceof CanonicalType;
  }

  /**
   * @returns the `actor` property value as a Reference object if defined; else undefined
   */
  public getActorReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.actor)) {
      return undefined;
    }
    if (!(this.actor instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for RequestOrchestration.action.participant.actor[x]: Expected Reference but encountered ${this.actor.fhirType()}`,
      );
    }
    return this.actor;
  }

  /**
   * @returns `true` if the `actor` property exists as a Reference and has a value; `false` otherwise
   */
  public hasActorReference(): boolean {
    return this.hasActor() && this.actor instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RequestOrchestration.action.participant';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.typeCanonical,
      this.typeReference,
      this.role,
      this.function_,
      this.actor,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RequestOrchestrationActionParticipantComponent {
    const dest = new RequestOrchestrationActionParticipantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RequestOrchestrationActionParticipantComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.typeCanonical = this.typeCanonical?.copy();
    dest.typeReference = this.typeReference?.copy();
    dest.role = this.role?.copy();
    dest.function_ = this.function_?.copy();
    dest.actor = this.actor?.copy() as IDataType;
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

    if (this.hasTypeCanonicalElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getTypeCanonicalElement(), 'typeCanonical', jsonObj);
    }

    if (this.hasTypeReference()) {
      setFhirComplexJson(this.getTypeReference(), 'typeReference', jsonObj);
    }

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    if (this.hasFunction()) {
      setFhirComplexJson(this.getFunction(), 'function', jsonObj);
    }

    if (this.hasActor()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getActor()!, 'actor', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * RequestOrchestrationActionDynamicValueComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Dynamic aspects of the definition
 * - **Definition:** Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient\'s weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.
 * - **Comment:** Dynamic values are applied in the order in which they are defined in the RequestOrchestration resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
 *
 * @category Data Models: Resource
 * @see [FHIR RequestOrchestration](http://hl7.org/fhir/StructureDefinition/RequestOrchestration)
 */
export class RequestOrchestrationActionDynamicValueComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `RequestOrchestrationActionDynamicValueComponent` JSON to instantiate the RequestOrchestrationActionDynamicValueComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RequestOrchestrationActionDynamicValueComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RequestOrchestrationActionDynamicValueComponent
   * @returns RequestOrchestrationActionDynamicValueComponent data model or undefined for `RequestOrchestrationActionDynamicValueComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RequestOrchestrationActionDynamicValueComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RequestOrchestrationActionDynamicValueComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RequestOrchestrationActionDynamicValueComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'path';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPathElement(datatype);
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
   * RequestOrchestration.action.dynamicValue.path Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The path to the element to be set dynamically
   * - **Definition:** The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression. The specified path SHALL be a FHIRPath resolvable on the specified target type of the ActivityDefinition, and SHALL consist only of identifiers, constant indexers, and a restricted subset of functions. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](https://hl7.org/fhir/fhirpath.html#simple) for full details).
   * - **Comment:** To specify the path to the current action being realized, the %action environment variable is available in this path. For example, to specify the description element of the target action, the path would be %action.description. The path attribute contains a [Simple FHIRPath Subset](https://hl7.org/fhir/fhirpath.html#simple) that allows path traversal, but not calculation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private path?: StringType | undefined;

  /**
   * RequestOrchestration.action.dynamicValue.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An expression that provides the dynamic value for the customization
   * - **Definition:** An expression specifying the value of the customized element.
   * - **Comment:** The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
   * - **FHIR Type:** `Expression`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expression?: Expression | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `path` property value as a StringType object if defined; else an empty StringType object
   */
  public getPathElement(): StringType {
    return this.path ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `path` property.
   *
   * @param element - the `path` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPathElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid RequestOrchestration.action.dynamicValue.path; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.path = element;
    } else {
      this.path = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `path` property exists and has a value; `false` otherwise
   */
  public hasPathElement(): boolean {
    return isDefined<StringType>(this.path) && !this.path.isEmpty();
  }

  /**
   * @returns the `path` property value as a fhirString if defined; else undefined
   */
  public getPath(): fhirString | undefined {
    return this.path?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `path` property.
   *
   * @param value - the `path` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPath(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid RequestOrchestration.action.dynamicValue.path (${String(value)})`;
      this.path = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.path = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `path` property exists and has a value; `false` otherwise
   */
  public hasPath(): boolean {
    return this.hasPathElement();
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
      const optErrMsg = `Invalid RequestOrchestration.action.dynamicValue.expression; Provided element is not an instance of Expression.`;
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
    return 'RequestOrchestration.action.dynamicValue';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.path,
      this.expression,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RequestOrchestrationActionDynamicValueComponent {
    const dest = new RequestOrchestrationActionDynamicValueComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RequestOrchestrationActionDynamicValueComponent): void {
    super.copyValues(dest);
    dest.path = this.path?.copy();
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

    if (this.hasPathElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPathElement(), 'path', jsonObj);
    }

    if (this.hasExpression()) {
      setFhirComplexJson(this.getExpression(), 'expression', jsonObj);
    }

    return jsonObj;
  }
}
