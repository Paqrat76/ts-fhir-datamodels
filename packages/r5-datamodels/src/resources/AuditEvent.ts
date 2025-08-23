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
 * AuditEvent Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/AuditEvent
 * StructureDefinition.name: AuditEvent
 * StructureDefinition.description: A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  Base64BinaryType,
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
  InstantType,
  IntegerType,
  InvalidTypeError,
  JSON,
  PrimitiveType,
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  TimeType,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  assertIsDefinedList,
  copyListValues,
  fhirBase64Binary,
  fhirBase64BinarySchema,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirInstant,
  fhirInstantSchema,
  fhirUri,
  fhirUriSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { AuditEventActionEnum } from '../code-systems/AuditEventActionEnum';
import { AuditEventSeverityEnum } from '../code-systems/AuditEventSeverityEnum';
import { CodeableConcept, Coding, PARSABLE_DATATYPE_MAP, Period, Quantity, Range, Ratio, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * AuditEvent Class
 *
 * @remarks
 * A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis.
 *
 * **FHIR Specification**
 * - **Short:** Record of an event
 * - **Definition:** A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis.
 * - **Comment:** Based on IHE-ATNA.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR AuditEvent](http://hl7.org/fhir/StructureDefinition/AuditEvent)
 */
export class AuditEvent extends DomainResource implements IDomainResource {
  constructor(code: CodeableConcept | null = null, recorded: InstantType | fhirInstant | null = null, agent: AuditEventAgentComponent[] | null = null, source: AuditEventSourceComponent | null = null) {
    super();

    this.auditEventActionEnum = new AuditEventActionEnum();
    this.auditEventSeverityEnum = new AuditEventSeverityEnum();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }

    this.recorded = null;
    if (isDefined<InstantType | fhirInstant>(recorded)) {
      if (recorded instanceof PrimitiveType) {
        this.setRecordedElement(recorded);
      } else {
        this.setRecorded(recorded);
      }
    }

    this.agent = null;
    if (isDefinedList<AuditEventAgentComponent>(agent)) {
      this.setAgent(agent);
    }

    this.source = null;
    if (isDefined<AuditEventSourceComponent>(source)) {
      this.setSource(source);
    }
  }

  /**
   * Parse the provided `AuditEvent` JSON to instantiate the AuditEvent data model.
   *
   * @param sourceJson - JSON representing FHIR `AuditEvent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AuditEvent
   * @returns AuditEvent data model or undefined for `AuditEvent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): AuditEvent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AuditEvent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AuditEvent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'AuditEvent');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = AuditEvent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for AuditEvent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

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

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setActionElement(datatype);
    }

    fieldName = 'severity';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setSeverityElement(datatype);
    }

    fieldName = 'occurred[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const occurred: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setOccurred(occurred);

    fieldName = 'recorded';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setRecordedElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: AuditEventOutcomeComponent | undefined = AuditEventOutcomeComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOutcome(component);
    }

    fieldName = 'authorization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAuthorization(datatype);
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

    fieldName = 'patient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPatient(datatype);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'agent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AuditEventAgentComponent | undefined = AuditEventAgentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addAgent(component);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: AuditEventSourceComponent | undefined = AuditEventSourceComponent.parse(classJsonObj[fieldName]!, sourceField);
      if (component === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSource(component);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'entity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AuditEventEntityComponent | undefined = AuditEventEntityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addEntity(component);
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
   * AuditEvent.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type/identifier of event
   * - **Definition:** Classification of the type of event.
   * - **Requirements:** Codes that classify the general type of event that happened.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * AuditEvent.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific type of event
   * - **Definition:** Describes what happened. The most specific code for the event.
   * - **Requirements:** This field enables queries of messages by implementation-defined event categories.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * FHIR CodeSystem: AuditEventAction
   *
   * @see {@link AuditEventActionEnum }
   */
  private readonly auditEventActionEnum: AuditEventActionEnum;

  /**
   * AuditEvent.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of action performed during the event
   * - **Definition:** Indicator for type of action performed during the event that generated the audit.
   * - **Requirements:** This broadly indicates what kind of action was done on the AuditEvent.entity by the AuditEvent.agent.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link AuditEventActionEnum }
   */
  private action?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: AuditEventSeverity
   *
   * @see {@link AuditEventSeverityEnum }
   */
  private readonly auditEventSeverityEnum: AuditEventSeverityEnum;

  /**
   * AuditEvent.severity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** emergency | alert | critical | error | warning | notice | informational | debug
   * - **Definition:** Indicates and enables segmentation of various severity including debugging from critical.
   * - **Comment:** ATNA will map this to the SYSLOG PRI element.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link AuditEventSeverityEnum }
   */
  private severity?: EnumCodeType | undefined;

  /**
   * AuditEvent.occurred[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('AuditEvent.occurred[x]', ['Period','dateTime',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the activity occurred
   * - **Definition:** The time or period during which the activity occurred.
   * - **Comment:** The time or period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
   * - **FHIR Types:**
   *     'Period',
   *     'dateTime',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('AuditEvent.occurred[x]',[
    'Period',
    'dateTime',
  ])
  private occurred?: IDataType | undefined;

  /**
   * AuditEvent.recorded Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time when the event was recorded
   * - **Definition:** The time when the event was recorded.
   * - **Comment:** In a distributed system, some sort of common time base (e.g. an NTP [RFC1305] server) is a good implementation tactic.
   * - **Requirements:** This ties an event to a specific date and time. Security audits typically require a consistent time base (e.g. UTC), to eliminate time-zone issues arising from geographical distribution.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private recorded: InstantType | null;

  /**
   * AuditEvent.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the event succeeded or failed
   * - **Definition:** Indicates whether the event succeeded or failed. A free text descripiton can be given in outcome.text.
   * - **Comment:** In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
   * - **Requirements:** when a code is given there must be one code from the given codeSystem, and may be other equivilant codes from other codeSystems (for example http response codes such as 2xx, 4xx, or 5xx).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private outcome?: AuditEventOutcomeComponent | undefined;

  /**
   * AuditEvent.authorization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Authorization related to the event
   * - **Definition:** The authorization (e.g., PurposeOfUse) that was used during the event being recorded.
   * - **Comment:** Use AuditEvent.agent.authorization when you know that it is specific to the agent, otherwise use AuditEvent.authorization. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
   * - **Requirements:** Record of any relevant security context, not restricted to purposeOfUse valueSet. May include security compartments, refrain, obligation, or other security tags.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private authorization?: CodeableConcept[] | undefined;

  /**
   * AuditEvent.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Workflow authorization within which this event occurred
   * - **Definition:** Allows tracing of authorizatino for the events and tracking whether proposals/recommendations were acted upon.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionOrder',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/Task',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private basedOn?: Reference[] | undefined;

  /**
   * AuditEvent.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The patient is the subject of the data used/created/updated/deleted during the activity
   * - **Definition:** The patient element is available to enable deterministic tracking of activities that involve the patient as the subject of the data used in an activity.
   * - **Requirements:** When the .patient is populated it shall be accurate to the subject of the used data. The .patient shall not be populated when the used data used/created/updated/deleted (.entity) by the activity does not involve a subject. Note that when the patient is an agent, they will be recorded as an agent. When the Patient resource is Created, Updated, or Deleted it will be recorded as an entity.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private patient?: Reference | undefined;

  /**
   * AuditEvent.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter within which this event occurred or which the event is tightly associated
   * - **Definition:** This will typically be the encounter the event occurred, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission lab tests).
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
   * AuditEvent.agent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actor involved in the event
   * - **Definition:** An actor taking an active role in the event or activity that is logged.
   * - **Comment:** Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity. For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.  When a network are used in an event being recorded, there should be distinct agent elements for the known actors using the network. The agent with a network detail would be the responsible agent for use of that network.
   * - **Requirements:** An agent can be a person, an organization, software, device, or other actors that may be ascribed responsibility.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private agent: AuditEventAgentComponent[] | null;

  /**
   * AuditEvent.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Audit Event Reporter
   * - **Definition:** The actor that is reporting the event.
   * - **Comment:** Events are reported by the actor that detected them. This may be one of the participating actors, but may also be different. The actor may be a human such as a medical-records clerk disclosing data manually, that clerk would be the source for the record of disclosure.
   * - **Requirements:** The event is reported by one source.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private source: AuditEventSourceComponent | null;

  /**
   * AuditEvent.entity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Data or objects used
   * - **Definition:** Specific instances of data or objects that have been accessed.
   * - **Comment:** Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
   * - **Requirements:** The event may have other entities involved.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private entity?: AuditEventEntityComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid AuditEvent.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid AuditEvent.category; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `code` property value as a CodeableConcept object if defined; else null
   */
  public getCode(): CodeableConcept | null {
    return this.code;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `AuditEvent.code is required`);
    const optErrMsg = `Invalid AuditEvent.code; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.code = value;
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `action` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AuditEventActionEnum }
   */
  public getActionEnumType(): EnumCodeType | undefined {
    return this.action;
  }

  /**
   * Assigns the provided EnumCodeType value to the `action` property.
   *
   * @param enumType - the `action` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AuditEventActionEnum }
   */
  public setActionEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid AuditEvent.action';
      assertEnumCodeType<AuditEventActionEnum>(enumType, AuditEventActionEnum, errMsgPrefix);
      this.action = enumType;
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasActionEnumType(): boolean {
    return isDefined<EnumCodeType>(this.action) && !this.action.isEmpty() && this.action.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `action` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AuditEventActionEnum }
   */
  public getActionElement(): CodeType | undefined {
    if (this.action === undefined) {
      return undefined;
    }
    return this.action as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `action` property.
   *
   * @param element - the `action` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AuditEventActionEnum }
   */
  public setActionElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid AuditEvent.action; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.action = new EnumCodeType(element, this.auditEventActionEnum);
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasActionElement(): boolean {
    return this.hasActionEnumType();
  }

  /**
   * @returns the `action` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AuditEventActionEnum }
   */
  public getAction(): fhirCode | undefined {
    if (this.action === undefined) {
      return undefined;
    }
    return this.action.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `action` property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link AuditEventActionEnum }
   */
  public setAction(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid AuditEvent.action; Provided value is not an instance of fhirCode.`;
      this.action = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.auditEventActionEnum);
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return this.hasActionEnumType();
  }

  /**
   * @returns the `severity` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AuditEventSeverityEnum }
   */
  public getSeverityEnumType(): EnumCodeType | undefined {
    return this.severity;
  }

  /**
   * Assigns the provided EnumCodeType value to the `severity` property.
   *
   * @param enumType - the `severity` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AuditEventSeverityEnum }
   */
  public setSeverityEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid AuditEvent.severity';
      assertEnumCodeType<AuditEventSeverityEnum>(enumType, AuditEventSeverityEnum, errMsgPrefix);
      this.severity = enumType;
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverityEnumType(): boolean {
    return isDefined<EnumCodeType>(this.severity) && !this.severity.isEmpty() && this.severity.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `severity` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AuditEventSeverityEnum }
   */
  public getSeverityElement(): CodeType | undefined {
    if (this.severity === undefined) {
      return undefined;
    }
    return this.severity as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `severity` property.
   *
   * @param element - the `severity` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AuditEventSeverityEnum }
   */
  public setSeverityElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid AuditEvent.severity; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.severity = new EnumCodeType(element, this.auditEventSeverityEnum);
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverityElement(): boolean {
    return this.hasSeverityEnumType();
  }

  /**
   * @returns the `severity` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AuditEventSeverityEnum }
   */
  public getSeverity(): fhirCode | undefined {
    if (this.severity === undefined) {
      return undefined;
    }
    return this.severity.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `severity` property.
   *
   * @param value - the `severity` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link AuditEventSeverityEnum }
   */
  public setSeverity(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid AuditEvent.severity; Provided value is not an instance of fhirCode.`;
      this.severity = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.auditEventSeverityEnum);
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverity(): boolean {
    return this.hasSeverityEnumType();
  }

  /**
   * @returns the `occurred` property value as a DataType object if defined; else undefined
   */
  public getOccurred(): IDataType | undefined {
    return this.occurred;
  }

  /**
   * Assigns the provided DataType object value to the `occurred` property.
   *
   * @decorator `@ChoiceDataTypes('AuditEvent.occurred[x]')`
   *
   * @param value - the `occurred` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('AuditEvent.occurred[x]')
  public setOccurred(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.occurred = value;
    } else {
      this.occurred = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurred` property exists and has a value; `false` otherwise
   */
  public hasOccurred(): boolean {
    return isDefined<IDataType>(this.occurred) && !this.occurred.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `occurred` property value as a Period object if defined; else undefined
   */
  public getOccurredPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.occurred)) {
      return undefined;
    }
    if (!(this.occurred instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.occurred[x]: Expected Period but encountered ${this.occurred.fhirType()}`,
      );
    }
    return this.occurred;
  }

  /**
   * @returns `true` if the `occurred` property exists as a Period and has a value; `false` otherwise
   */
  public hasOccurredPeriod(): boolean {
    return this.hasOccurred() && this.occurred instanceof Period;
  }

  /**
   * @returns the `occurred` property value as a DateTimeType object if defined; else undefined
   */
  public getOccurredDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.occurred)) {
      return undefined;
    }
    if (!(this.occurred instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.occurred[x]: Expected DateTimeType but encountered ${this.occurred.fhirType()}`,
      );
    }
    return this.occurred;
  }

  /**
   * @returns `true` if the `occurred` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasOccurredDateTimeType(): boolean {
    return this.hasOccurred() && this.occurred instanceof DateTimeType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `recorded` property value as a InstantType object if defined; else null
   */
  public getRecordedElement(): InstantType | null {
    return this.recorded;
  }

  /**
   * Assigns the provided PrimitiveType value to the `recorded` property.
   *
   * @param element - the `recorded` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecordedElement(element: InstantType): this {
    assertIsDefined<InstantType>(element, `AuditEvent.recorded is required`);
    const optErrMsg = `Invalid AuditEvent.recorded; Provided value is not an instance of InstantType.`;
    assertFhirType<InstantType>(element, InstantType, optErrMsg);
    this.recorded = element;
    return this;
  }

  /**
   * @returns `true` if the `recorded` property exists and has a value; `false` otherwise
   */
  public hasRecordedElement(): boolean {
    return isDefined<InstantType>(this.recorded) && !this.recorded.isEmpty();
  }

  /**
   * @returns the `recorded` property value as a fhirInstant if defined; else null
   */
  public getRecorded(): fhirInstant | null {
    if (this.recorded?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.recorded.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `recorded` property.
   *
   * @param value - the `recorded` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecorded(value: fhirInstant): this {
    assertIsDefined<fhirInstant>(value, `AuditEvent.recorded is required`);
    const optErrMsg = `Invalid AuditEvent.recorded (${String(value)})`;
    this.recorded = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `recorded` property exists and has a value; `false` otherwise
   */
  public hasRecorded(): boolean {
    return this.hasRecordedElement();
  }

  /**
   * @returns the `outcome` property value as a AuditEventOutcomeComponent object if defined; else an empty AuditEventOutcomeComponent object
   */
  public getOutcome(): AuditEventOutcomeComponent {
    return this.outcome ?? new AuditEventOutcomeComponent();
  }

  /**
   * Assigns the provided Outcome object value to the `outcome` property.
   *
   * @param value - the `outcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutcome(value: AuditEventOutcomeComponent | undefined): this {
    if (isDefined<AuditEventOutcomeComponent>(value)) {
      const optErrMsg = `Invalid AuditEvent.outcome; Provided element is not an instance of AuditEventOutcomeComponent.`;
      assertFhirType<AuditEventOutcomeComponent>(value, AuditEventOutcomeComponent, optErrMsg);
      this.outcome = value;
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcome(): boolean {
    return isDefined<AuditEventOutcomeComponent>(this.outcome) && !this.outcome.isEmpty();
  }

  /**
   * @returns the `authorization` property value as a CodeableConcept array
   */
  public getAuthorization(): CodeableConcept[] {
    return this.authorization ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `authorization` property.
   *
   * @param value - the `authorization` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAuthorization(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.authorization; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.authorization = value;
    } else {
      this.authorization = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `authorization` array property.
   *
   * @param value - the `authorization` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAuthorization(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.authorization; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initAuthorization();
      this.authorization?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `authorization` property exists and has a value; `false` otherwise
   */
  public hasAuthorization(): boolean {
    return isDefinedList<CodeableConcept>(this.authorization) && this.authorization.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `authorization` property
   */
  private initAuthorization(): void {
    if(!this.hasAuthorization()) {
      this.authorization = [] as CodeableConcept[];
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
   * @decorator `@ReferenceTargets('AuditEvent.basedOn', ['CarePlan','DeviceRequest','ImmunizationRecommendation','MedicationRequest','NutritionOrder','ServiceRequest','Task',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AuditEvent.basedOn', [
    'CarePlan',
  
    'DeviceRequest',
  
    'ImmunizationRecommendation',
  
    'MedicationRequest',
  
    'NutritionOrder',
  
    'ServiceRequest',
  
    'Task',
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
   * @decorator `@ReferenceTargets('AuditEvent.basedOn', ['CarePlan','DeviceRequest','ImmunizationRecommendation','MedicationRequest','NutritionOrder','ServiceRequest','Task',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AuditEvent.basedOn', [
    'CarePlan',
  
    'DeviceRequest',
  
    'ImmunizationRecommendation',
  
    'MedicationRequest',
  
    'NutritionOrder',
  
    'ServiceRequest',
  
    'Task',
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
   * @returns the `patient` property value as a Reference object; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('AuditEvent.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AuditEvent.patient', [
    'Patient',
  ])
  public setPatient(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.patient = value;
    } else {
      this.patient = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `patient` property exists and has a value; `false` otherwise
   */
  public hasPatient(): boolean {
    return isDefined<Reference>(this.patient) && !this.patient.isEmpty();
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
   * @decorator `@ReferenceTargets('AuditEvent.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AuditEvent.encounter', [
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
   * @returns the `agent` property value as a AuditEventAgentComponent array
   */
  public getAgent(): AuditEventAgentComponent[] {
    return this.agent ?? ([] as AuditEventAgentComponent[]);
  }

  /**
   * Assigns the provided AuditEventAgentComponent array value to the `agent` property.
   *
   * @param value - the `agent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAgent(value: AuditEventAgentComponent[]): this {
    assertIsDefinedList<AuditEventAgentComponent>(value, `AuditEvent.agent is required`);
    const optErrMsg = `Invalid AuditEvent.agent; Provided value array has an element that is not an instance of AuditEventAgentComponent.`;
    assertFhirTypeList<AuditEventAgentComponent>(value, AuditEventAgentComponent, optErrMsg);
    this.agent = value;
    return this;
  }

  /**
   * Add the provided AuditEventAgentComponent value to the `agent` array property.
   *
   * @param value - the `agent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAgent(value: AuditEventAgentComponent | undefined): this {
    if (isDefined<AuditEventAgentComponent>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent; Provided element is not an instance of AuditEventAgentComponent.`;
      assertFhirType<AuditEventAgentComponent>(value, AuditEventAgentComponent, optErrMsg);
      this.initAgent();
      this.agent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `agent` property exists and has a value; `false` otherwise
   */
  public hasAgent(): boolean {
    return isDefinedList<AuditEventAgentComponent>(this.agent) && this.agent.some((item: AuditEventAgentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `agent` property
   */
  private initAgent(): void {
    if(!this.hasAgent()) {
      this.agent = [] as AuditEventAgentComponent[];
    }
  }

  /**
   * @returns the `source` property value as a AuditEventSourceComponent object if defined; else null
   */
  public getSource(): AuditEventSourceComponent | null {
    return this.source;
  }

  /**
   * Assigns the provided AuditEventSourceComponent object value to the `source` property.
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSource(value: AuditEventSourceComponent): this {
    assertIsDefined<AuditEventSourceComponent>(value, `AuditEvent.source is required`);
    const optErrMsg = `Invalid AuditEvent.source; Provided element is not an instance of AuditEventSourceComponent.`;
    assertFhirType<AuditEventSourceComponent>(value, AuditEventSourceComponent, optErrMsg);
    this.source = value;
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefined<AuditEventSourceComponent>(this.source) && !this.source.isEmpty();
  }

  /**
   * @returns the `entity` property value as a AuditEventEntityComponent array
   */
  public getEntity(): AuditEventEntityComponent[] {
    return this.entity ?? ([] as AuditEventEntityComponent[]);
  }

  /**
   * Assigns the provided AuditEventEntityComponent array value to the `entity` property.
   *
   * @param value - the `entity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEntity(value: AuditEventEntityComponent[] | undefined): this {
    if (isDefinedList<AuditEventEntityComponent>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity; Provided value array has an element that is not an instance of AuditEventEntityComponent.`;
      assertFhirTypeList<AuditEventEntityComponent>(value, AuditEventEntityComponent, optErrMsg);
      this.entity = value;
    } else {
      this.entity = undefined;
    }
    return this;
  }

  /**
   * Add the provided AuditEventEntityComponent value to the `entity` array property.
   *
   * @param value - the `entity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEntity(value: AuditEventEntityComponent | undefined): this {
    if (isDefined<AuditEventEntityComponent>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity; Provided element is not an instance of AuditEventEntityComponent.`;
      assertFhirType<AuditEventEntityComponent>(value, AuditEventEntityComponent, optErrMsg);
      this.initEntity();
      this.entity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `entity` property exists and has a value; `false` otherwise
   */
  public hasEntity(): boolean {
    return isDefinedList<AuditEventEntityComponent>(this.entity) && this.entity.some((item: AuditEventEntityComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `entity` property
   */
  private initEntity(): void {
    if(!this.hasEntity()) {
      this.entity = [] as AuditEventEntityComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AuditEvent';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.code,
      this.action,
      this.severity,
      this.occurred,
      this.recorded,
      this.outcome,
      this.authorization,
      this.basedOn,
      this.patient,
      this.encounter,
      this.agent,
      this.source,
      this.entity,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AuditEvent {
    const dest = new AuditEvent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AuditEvent): void {
    super.copyValues(dest);
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.code = this.code ? this.code.copy() : null;
    dest.action = this.action?.copy();
    dest.severity = this.severity?.copy();
    dest.occurred = this.occurred?.copy() as IDataType;
    dest.recorded = this.recorded ? this.recorded.copy() : null;
    dest.outcome = this.outcome?.copy();
    const authorizationList = copyListValues<CodeableConcept>(this.authorization);
    dest.authorization = authorizationList.length === 0 ? undefined : authorizationList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    dest.patient = this.patient?.copy();
    dest.encounter = this.encounter?.copy();
    const agentList = copyListValues<AuditEventAgentComponent>(this.agent);
    dest.agent = agentList.length === 0 ? null : agentList;
    dest.source = this.source ? this.source.copy() : null;
    const entityList = copyListValues<AuditEventEntityComponent>(this.entity);
    dest.entity = entityList.length === 0 ? undefined : entityList;
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

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCode()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`AuditEvent.code`);
    }

    if (this.hasActionElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getActionElement()!, 'action', jsonObj);
    }

    if (this.hasSeverityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getSeverityElement()!, 'severity', jsonObj);
    }

    if (this.hasOccurred()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOccurred()!, 'occurred', jsonObj);
    }

    if (this.hasRecordedElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirInstant>(this.getRecordedElement()!, 'recorded', jsonObj);
    } else {
      missingReqdProperties.push(`AuditEvent.recorded`);
    }

    if (this.hasOutcome()) {
      setFhirBackboneElementJson(this.getOutcome(), 'outcome', jsonObj);
    }

    if (this.hasAuthorization()) {
      setFhirComplexListJson(this.getAuthorization(), 'authorization', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasAgent()) {
      setFhirBackboneElementListJson(this.getAgent(), 'agent', jsonObj);
    } else {
      missingReqdProperties.push(`AuditEvent.agent`);
    }

    if (this.hasSource()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirBackboneElementJson(this.getSource()!, 'source', jsonObj);
    } else {
      missingReqdProperties.push(`AuditEvent.source`);
    }

    if (this.hasEntity()) {
      setFhirBackboneElementListJson(this.getEntity(), 'entity', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * AuditEventOutcomeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Whether the event succeeded or failed
 * - **Definition:** Indicates whether the event succeeded or failed. A free text descripiton can be given in outcome.text.
 * - **Comment:** In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
 * - **Requirements:** when a code is given there must be one code from the given codeSystem, and may be other equivilant codes from other codeSystems (for example http response codes such as 2xx, 4xx, or 5xx).
 *
 * @category Data Models: Resource
 * @see [FHIR AuditEvent](http://hl7.org/fhir/StructureDefinition/AuditEvent)
 */
export class AuditEventOutcomeComponent extends BackboneElement implements IBackboneElement {
  constructor(code: Coding | null = null) {
    super();

    this.code = null;
    if (isDefined<Coding>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `AuditEventOutcomeComponent` JSON to instantiate the AuditEventOutcomeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AuditEventOutcomeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AuditEventOutcomeComponent
   * @returns AuditEventOutcomeComponent data model or undefined for `AuditEventOutcomeComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AuditEventOutcomeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AuditEventOutcomeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AuditEventOutcomeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDetail(datatype);
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
   * AuditEvent.outcome.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the event succeeded or failed
   * - **Definition:** Indicates whether the event succeeded or failed.
   * - **Comment:** In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
   * - **Requirements:** when a code is given there must be one code from the given codeSystem.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: Coding | null;

  /**
   * AuditEvent.outcome.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional outcome detail
   * - **Definition:** Additional details about the error. This may be a text description of the error or a system code that identifies the error.
   * - **Comment:** A human readable description of the error issue SHOULD be placed in details.text.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private detail?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a Coding object if defined; else null
   */
  public getCode(): Coding | null {
    return this.code;
  }

  /**
   * Assigns the provided Coding object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: Coding): this {
    assertIsDefined<Coding>(value, `AuditEvent.outcome.code is required`);
    const optErrMsg = `Invalid AuditEvent.outcome.code; Provided element is not an instance of Coding.`;
    assertFhirType<Coding>(value, Coding, optErrMsg);
    this.code = value;
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<Coding>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `detail` property value as a CodeableConcept array
   */
  public getDetail(): CodeableConcept[] {
    return this.detail ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `detail` property.
   *
   * @param value - the `detail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDetail(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.outcome.detail; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `detail` array property.
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDetail(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.outcome.detail; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initDetail();
      this.detail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefinedList<CodeableConcept>(this.detail) && this.detail.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `detail` property
   */
  private initDetail(): void {
    if(!this.hasDetail()) {
      this.detail = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AuditEvent.outcome';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.detail,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AuditEventOutcomeComponent {
    const dest = new AuditEventOutcomeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AuditEventOutcomeComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    const detailList = copyListValues<CodeableConcept>(this.detail);
    dest.detail = detailList.length === 0 ? undefined : detailList;
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

    if (this.hasCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCode()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`AuditEvent.outcome.code`);
    }

    if (this.hasDetail()) {
      setFhirComplexListJson(this.getDetail(), 'detail', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * AuditEventAgentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Actor involved in the event
 * - **Definition:** An actor taking an active role in the event or activity that is logged.
 * - **Comment:** Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity. For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.  When a network are used in an event being recorded, there should be distinct agent elements for the known actors using the network. The agent with a network detail would be the responsible agent for use of that network.
 * - **Requirements:** An agent can be a person, an organization, software, device, or other actors that may be ascribed responsibility.
 *
 * @category Data Models: Resource
 * @see [FHIR AuditEvent](http://hl7.org/fhir/StructureDefinition/AuditEvent)
 */
export class AuditEventAgentComponent extends BackboneElement implements IBackboneElement {
  constructor(who: Reference | null = null) {
    super();

    this.who = null;
    if (isDefined<Reference>(who)) {
      this.setWho(who);
    }
  }

  /**
   * Parse the provided `AuditEventAgentComponent` JSON to instantiate the AuditEventAgentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AuditEventAgentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AuditEventAgentComponent
   * @returns AuditEventAgentComponent data model or undefined for `AuditEventAgentComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AuditEventAgentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AuditEventAgentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AuditEventAgentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = AuditEventAgentComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for AuditEventAgentComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRole(datatype);
        }
      });
    }

    fieldName = 'who';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setWho(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'requestor';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setRequestorElement(datatype);
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    fieldName = 'policy';
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
          instance.addPolicyElement(datatype);
        }
      });
    }

    fieldName = 'network[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const network: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setNetwork(network);

    fieldName = 'authorization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAuthorization(datatype);
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
   * AuditEvent.agent.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How agent participated
   * - **Definition:** The Functional Role of the user when performing the event.
   * - **Comment:** For example: assembler, author, prescriber, signer, investigator, etc.
   * - **Requirements:** Functional roles reflect functional aspects of relationships between entities. Functional roles are bound to the realization/performance of acts, where actions might be concatenated to an activity or even to a process. This element will hold the functional role that the agent played in the activity that is the focus of this Provenance. Where an agent played multiple functional roles, they will be listed as multiple .agent elements representing each functional participation. See ISO 21298:2018 - Health Informatics - Functional and structural roles, and ISO 22600-2:2014 - Health Informatics - Privilege Management and Access Control - Part 2: formal models.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * AuditEvent.agent.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Agent role in the event
   * - **Definition:** The structural roles of the agent indicating the agent\'s competency. The security role enabling the agent with respect to the activity.
   * - **Comment:** For example: Chief-of-Radiology, Nurse, Physician, Medical-Student, etc.
   * - **Requirements:** Structural roles reflect the structural aspects of relationships between entities. Structural roles describe prerequisites, feasibilities, or competences for acts. Functional roles reflect functional aspects of relationships between entities. Functional roles are bound to the realization/performance of acts, where actions might be concatenated to an activity or even to a process. See ISO 21298:2018 - Health Informatics - Functional and structural roles, and ISO 22600-2:2014 - Health Informatics - Privilege Management and Access Control - Part 2: formal models..
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: CodeableConcept[] | undefined;

  /**
   * AuditEvent.agent.who Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier of who
   * - **Definition:** Reference to who this agent is that was involved in the event.
   * - **Comment:** Where a User ID is available it will go into who.identifier. Where a name of the user (human readable) it will go into who.display.
   * - **Requirements:** This field ties an audit event to a specific resource or identifier.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private who: Reference | null;

  /**
   * AuditEvent.agent.requestor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether user is initiator
   * - **Definition:** Indicator that the user is or is not the requestor, or initiator, for the event being audited.
   * - **Comment:** There can only be one initiator. If the initiator is not clear, then do not choose any one agent as the initiator.
   * - **Requirements:** This value is used to distinguish between requestor-users and recipient-users. For example, one person may initiate a report-output to be sent to another user.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private requestor?: BooleanType | undefined;

  /**
   * AuditEvent.agent.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The agent location when the event occurred
   * - **Definition:** Where the agent location is known, the agent location when the event occurred.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private location?: Reference | undefined;

  /**
   * AuditEvent.agent.policy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Policy that authorized the agent participation in the event
   * - **Definition:** Where the policy(ies) are known that authorized the agent participation in the event. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.
   * - **Comment:** For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
   * - **Requirements:** This value is used retrospectively to determine the authorization policies.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private policy?: UriType[] | undefined;

  /**
   * AuditEvent.agent.network[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('AuditEvent.agent.network[x]', ['Reference','uri','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** This agent network location for the activity
   * - **Definition:** When the event utilizes a network there should be an agent describing the local system, and an agent describing remote system, with the network interface details.
   * - **Comment:** When remote network endpoint is known, another agent representing the remote agent would indicate the remote network endpoint used. Convention is to indicate data flowing from Source to Destination. The convention for Search, given data flows both ways (query parameters vs results), is to have the Source as the initiator of the Search Transaction, and the Destination the responder to the Search transaction.
   * - **Requirements:** When a network protocol is used the endpoint is associated with the agent most directly using the endpoint. This is usually the software agent that has implemented the application level protocol.  Preference is to define network in terms of a Reference(Endpoint), or URI; use string only when address or hostname is all that is known. When encoding using string it is best to encode using the formal canonical host name, but if you can\'t, then you can encode numeric in Literal address form using square brackets \'[]\' as a v4 string (in dotted notation), or v6 string (in colon notation).
   * - **FHIR Types:**
   *     'Reference',
   *     'uri',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('AuditEvent.agent.network[x]',[
    'Reference',
    'uri',
    'string',
  ])
  private network?: IDataType | undefined;

  /**
   * AuditEvent.agent.authorization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allowable authorization for this agent
   * - **Definition:** The authorization (e.g., PurposeOfUse) that was used during the event being recorded.
   * - **Comment:** Use AuditEvent.agent.authorization when you know that is specific to the agent, otherwise use AuditEvent.authorization. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
   * - **Requirements:** Record of any relevant security context, not restricted to purposeOfUse valueSet. May include security compartments, refrain, obligation, or other security tags.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authorization?: CodeableConcept[] | undefined;

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
      const optErrMsg = `Invalid AuditEvent.agent.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `role` property value as a CodeableConcept array
   */
  public getRole(): CodeableConcept[] {
    return this.role ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `role` property.
   *
   * @param value - the `role` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRole(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.role; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.role = value;
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `role` array property.
   *
   * @param value - the `role` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRole(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.role; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initRole();
      this.role?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return isDefinedList<CodeableConcept>(this.role) && this.role.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `role` property
   */
  private initRole(): void {
    if(!this.hasRole()) {
      this.role = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `who` property value as a Reference object if defined; else null
   */
  public getWho(): Reference | null {
    return this.who;
  }

  /**
   * Assigns the provided Who object value to the `who` property.
   *
   * @decorator `@ReferenceTargets('AuditEvent.agent.who', ['Practitioner','PractitionerRole','Organization','CareTeam','Patient','Device','RelatedPerson',])`
   *
   * @param value - the `who` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AuditEvent.agent.who', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'CareTeam',
  
    'Patient',
  
    'Device',
  
    'RelatedPerson',
  ])
  public setWho(value: Reference): this {
    assertIsDefined<Reference>(value, `AuditEvent.agent.who is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.who = value;
    return this;
  }

  /**
   * @returns `true` if the `who` property exists and has a value; `false` otherwise
   */
  public hasWho(): boolean {
    return isDefined<Reference>(this.who) && !this.who.isEmpty();
  }

  /**
   * @returns the `requestor` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getRequestorElement(): BooleanType {
    return this.requestor ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `requestor` property.
   *
   * @param element - the `requestor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequestorElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid AuditEvent.agent.requestor; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.requestor = element;
    } else {
      this.requestor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestor` property exists and has a value; `false` otherwise
   */
  public hasRequestorElement(): boolean {
    return isDefined<BooleanType>(this.requestor) && !this.requestor.isEmpty();
  }

  /**
   * @returns the `requestor` property value as a fhirBoolean if defined; else undefined
   */
  public getRequestor(): fhirBoolean | undefined {
    return this.requestor?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `requestor` property.
   *
   * @param value - the `requestor` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequestor(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.requestor (${String(value)})`;
      this.requestor = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.requestor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestor` property exists and has a value; `false` otherwise
   */
  public hasRequestor(): boolean {
    return this.hasRequestorElement();
  }

  /**
   * @returns the `location` property value as a Reference object; else an empty Reference object
   */
  public getLocation(): Reference {
    return this.location ?? new Reference();
  }

  /**
   * Assigns the provided Location object value to the `location` property.
   *
   * @decorator `@ReferenceTargets('AuditEvent.agent.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AuditEvent.agent.location', [
    'Location',
  ])
  public setLocation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
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
    return isDefined<Reference>(this.location) && !this.location.isEmpty();
  }

  /**
   * @returns the `policy` property value as a UriType array
   */
  public getPolicyElement(): UriType[] {
    return this.policy ?? ([] as UriType[]);
  }

  /**
   * Assigns the provided UriType array value to the `policy` property.
   *
   * @param element - the `policy` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPolicyElement(element: UriType[] | undefined): this {
    if (isDefinedList<UriType>(element)) {
      const optErrMsg = `Invalid AuditEvent.agent.policy; Provided value array has an element that is not an instance of UriType.`;
      assertFhirTypeList<UriType>(element, UriType, optErrMsg);
      this.policy = element;
    } else {
      this.policy = undefined;
    }
    return this;
  }

  /**
   * Add the provided UriType value to the `policy` array property.
   *
   * @param element - the `policy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPolicyElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid AuditEvent.agent.policy; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.initPolicy();
      this.policy?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `policy` property exists and has a value; `false` otherwise
   */
  public hasPolicyElement(): boolean {
    return isDefinedList<UriType>(this.policy) && this.policy.some((item: UriType) => !item.isEmpty());
  }

  /**
   * @returns the `policy` property value as a fhirUri array
   */
  public getPolicy(): fhirUri[] {
    this.initPolicy();
    const policyValues = [] as fhirUri[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.policy!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        policyValues.push(value);
      }
    }
    return policyValues;
  }

  /**
   * Assigns the provided primitive value array to the `policy` property.
   *
   * @param value - the `policy` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPolicy(value: fhirUri[] | undefined): this {
    if (isDefinedList<fhirUri>(value)) {
      const policyElements = [] as UriType[];
      for (const policyValue of value) {
        const optErrMsg = `Invalid AuditEvent.agent.policy array item (${String(policyValue)})`;
        const element = new UriType(parseFhirPrimitiveData(policyValue, fhirUriSchema, optErrMsg));
        policyElements.push(element);
      }
      this.policy = policyElements;
    } else {
      this.policy = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `policy` array property.
   *
   * @param value - the `policy` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPolicy(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.policy array item (${String(value)})`;
      const element = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
      this.initPolicy();
      this.addPolicyElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `policy` property exists and has a value; `false` otherwise
   */
  public hasPolicy(): boolean {
    return this.hasPolicyElement();
  }

  /**
   * Initialize the `policy` property
   */
  private initPolicy(): void {
    if (!this.hasPolicy()) {
      this.policy = [] as UriType[];
    }
  }

  /**
   * @returns the `network` property value as a DataType object if defined; else undefined
   */
  public getNetwork(): IDataType | undefined {
    return this.network;
  }

  /**
   * Assigns the provided DataType object value to the `network` property.
   *
   * @decorator `@ChoiceDataTypes('AuditEvent.agent.network[x]')`
   *
   * @param value - the `network` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('AuditEvent.agent.network[x]')
  public setNetwork(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.network = value;
    } else {
      this.network = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `network` property exists and has a value; `false` otherwise
   */
  public hasNetwork(): boolean {
    return isDefined<IDataType>(this.network) && !this.network.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `network` property value as a Reference object if defined; else undefined
   */
  public getNetworkReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.network)) {
      return undefined;
    }
    if (!(this.network instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.agent.network[x]: Expected Reference but encountered ${this.network.fhirType()}`,
      );
    }
    return this.network;
  }

  /**
   * @returns `true` if the `network` property exists as a Reference and has a value; `false` otherwise
   */
  public hasNetworkReference(): boolean {
    return this.hasNetwork() && this.network instanceof Reference;
  }

  /**
   * @returns the `network` property value as a UriType object if defined; else undefined
   */
  public getNetworkUriType(): UriType | undefined {
    if (!isDefined<IDataType | undefined>(this.network)) {
      return undefined;
    }
    if (!(this.network instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.agent.network[x]: Expected UriType but encountered ${this.network.fhirType()}`,
      );
    }
    return this.network;
  }

  /**
   * @returns `true` if the `network` property exists as a UriType and has a value; `false` otherwise
   */
  public hasNetworkUriType(): boolean {
    return this.hasNetwork() && this.network instanceof UriType;
  }

  /**
   * @returns the `network` property value as a StringType object if defined; else undefined
   */
  public getNetworkStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.network)) {
      return undefined;
    }
    if (!(this.network instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.agent.network[x]: Expected StringType but encountered ${this.network.fhirType()}`,
      );
    }
    return this.network;
  }

  /**
   * @returns `true` if the `network` property exists as a StringType and has a value; `false` otherwise
   */
  public hasNetworkStringType(): boolean {
    return this.hasNetwork() && this.network instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `authorization` property value as a CodeableConcept array
   */
  public getAuthorization(): CodeableConcept[] {
    return this.authorization ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `authorization` property.
   *
   * @param value - the `authorization` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAuthorization(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.authorization; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.authorization = value;
    } else {
      this.authorization = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `authorization` array property.
   *
   * @param value - the `authorization` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAuthorization(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.authorization; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initAuthorization();
      this.authorization?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `authorization` property exists and has a value; `false` otherwise
   */
  public hasAuthorization(): boolean {
    return isDefinedList<CodeableConcept>(this.authorization) && this.authorization.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `authorization` property
   */
  private initAuthorization(): void {
    if(!this.hasAuthorization()) {
      this.authorization = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AuditEvent.agent';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.role,
      this.who,
      this.requestor,
      this.location,
      this.policy,
      this.network,
      this.authorization,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AuditEventAgentComponent {
    const dest = new AuditEventAgentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AuditEventAgentComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    const roleList = copyListValues<CodeableConcept>(this.role);
    dest.role = roleList.length === 0 ? undefined : roleList;
    dest.who = this.who ? this.who.copy() : null;
    dest.requestor = this.requestor?.copy();
    dest.location = this.location?.copy();
    const policyList = copyListValues<UriType>(this.policy);
    dest.policy = policyList.length === 0 ? undefined : policyList;
    dest.network = this.network?.copy() as IDataType;
    const authorizationList = copyListValues<CodeableConcept>(this.authorization);
    dest.authorization = authorizationList.length === 0 ? undefined : authorizationList;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasRole()) {
      setFhirComplexListJson(this.getRole(), 'role', jsonObj);
    }

    if (this.hasWho()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getWho()!, 'who', jsonObj);
    } else {
      missingReqdProperties.push(`AuditEvent.agent.who`);
    }

    if (this.hasRequestorElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getRequestorElement(), 'requestor', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasPolicy()) {
      setFhirPrimitiveListJson(this.getPolicyElement(), 'policy', jsonObj);
    }

    if (this.hasNetwork()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getNetwork()!, 'network', jsonObj);
    }

    if (this.hasAuthorization()) {
      setFhirComplexListJson(this.getAuthorization(), 'authorization', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * AuditEventSourceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Audit Event Reporter
 * - **Definition:** The actor that is reporting the event.
 * - **Comment:** Events are reported by the actor that detected them. This may be one of the participating actors, but may also be different. The actor may be a human such as a medical-records clerk disclosing data manually, that clerk would be the source for the record of disclosure.
 * - **Requirements:** The event is reported by one source.
 *
 * @category Data Models: Resource
 * @see [FHIR AuditEvent](http://hl7.org/fhir/StructureDefinition/AuditEvent)
 */
export class AuditEventSourceComponent extends BackboneElement implements IBackboneElement {
  constructor(observer: Reference | null = null) {
    super();

    this.observer = null;
    if (isDefined<Reference>(observer)) {
      this.setObserver(observer);
    }
  }

  /**
   * Parse the provided `AuditEventSourceComponent` JSON to instantiate the AuditEventSourceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AuditEventSourceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AuditEventSourceComponent
   * @returns AuditEventSourceComponent data model or undefined for `AuditEventSourceComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AuditEventSourceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AuditEventSourceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AuditEventSourceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'site';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSite(datatype);
    }

    fieldName = 'observer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setObserver(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * AuditEvent.source.site Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Logical source location within the enterprise
   * - **Definition:** Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
   * - **Requirements:** This value differentiates among the sites in a multi-site enterprise health information system.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private site?: Reference | undefined;

  /**
   * AuditEvent.source.observer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The identity of source detecting the event
   * - **Definition:** Identifier of the source where the event was detected.
   * - **Requirements:** This field ties the event to a specific source system. It may be used to group events for analysis according to where the event was detected.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private observer: Reference | null;

  /**
   * AuditEvent.source.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of source where event originated
   * - **Definition:** Code specifying the type of source where event originated.
   * - **Requirements:** This field indicates which type of source is identified by the Audit Source ID. It is an optional value that may be used to group events for analysis according to the type of source where the event occurred.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `site` property value as a Reference object; else an empty Reference object
   */
  public getSite(): Reference {
    return this.site ?? new Reference();
  }

  /**
   * Assigns the provided Site object value to the `site` property.
   *
   * @decorator `@ReferenceTargets('AuditEvent.source.site', ['Location',])`
   *
   * @param value - the `site` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AuditEvent.source.site', [
    'Location',
  ])
  public setSite(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.site = value;
    } else {
      this.site = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `site` property exists and has a value; `false` otherwise
   */
  public hasSite(): boolean {
    return isDefined<Reference>(this.site) && !this.site.isEmpty();
  }

  /**
   * @returns the `observer` property value as a Reference object if defined; else null
   */
  public getObserver(): Reference | null {
    return this.observer;
  }

  /**
   * Assigns the provided Observer object value to the `observer` property.
   *
   * @decorator `@ReferenceTargets('AuditEvent.source.observer', ['Practitioner','PractitionerRole','Organization','CareTeam','Patient','Device','RelatedPerson',])`
   *
   * @param value - the `observer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AuditEvent.source.observer', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'CareTeam',
  
    'Patient',
  
    'Device',
  
    'RelatedPerson',
  ])
  public setObserver(value: Reference): this {
    assertIsDefined<Reference>(value, `AuditEvent.source.observer is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.observer = value;
    return this;
  }

  /**
   * @returns `true` if the `observer` property exists and has a value; `false` otherwise
   */
  public hasObserver(): boolean {
    return isDefined<Reference>(this.observer) && !this.observer.isEmpty();
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
      const optErrMsg = `Invalid AuditEvent.source.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid AuditEvent.source.type; Provided element is not an instance of CodeableConcept.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AuditEvent.source';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.site,
      this.observer,
      this.type_,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AuditEventSourceComponent {
    const dest = new AuditEventSourceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AuditEventSourceComponent): void {
    super.copyValues(dest);
    dest.site = this.site?.copy();
    dest.observer = this.observer ? this.observer.copy() : null;
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
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

    if (this.hasSite()) {
      setFhirComplexJson(this.getSite(), 'site', jsonObj);
    }

    if (this.hasObserver()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getObserver()!, 'observer', jsonObj);
    } else {
      missingReqdProperties.push(`AuditEvent.source.observer`);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * AuditEventEntityComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Data or objects used
 * - **Definition:** Specific instances of data or objects that have been accessed.
 * - **Comment:** Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
 * - **Requirements:** The event may have other entities involved.
 *
 * @category Data Models: Resource
 * @see [FHIR AuditEvent](http://hl7.org/fhir/StructureDefinition/AuditEvent)
 */
export class AuditEventEntityComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `AuditEventEntityComponent` JSON to instantiate the AuditEventEntityComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AuditEventEntityComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AuditEventEntityComponent
   * @returns AuditEventEntityComponent data model or undefined for `AuditEventEntityComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AuditEventEntityComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AuditEventEntityComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AuditEventEntityComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'what';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setWhat(datatype);
    }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    fieldName = 'securityLabel';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSecurityLabel(datatype);
        }
      });
    }

    fieldName = 'query';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: Base64BinaryType | undefined = fhirParser.parseBase64BinaryType(dtJson, dtSiblingJson);
      instance.setQueryElement(datatype);
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AuditEventEntityDetailComponent | undefined = AuditEventEntityDetailComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDetail(component);
        }
      });
    }

    fieldName = 'agent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AuditEventAgentComponent | undefined = AuditEventAgentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAgent(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * AuditEvent.entity.what Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific instance of resource
   * - **Definition:** Identifies a specific instance of the entity. The reference should be version specific. This is allowed to be a Parameters resource.
   * - **Comment:** Use .what.display when all you have is a string (e.g. ParticipantObjectName).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private what?: Reference | undefined;

  /**
   * AuditEvent.entity.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What role the entity played
   * - **Definition:** Code representing the role the entity played in the event being audited.
   * - **Requirements:** For some detailed audit analysis it may be necessary to indicate a more granular type of entity, based on the application role it serves.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: CodeableConcept | undefined;

  /**
   * AuditEvent.entity.securityLabel Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Security labels on the entity
   * - **Definition:** Security labels for the identified entity.
   * - **Comment:** Copied from entity meta security tags.
   * - **Requirements:** This field identifies the security labels for a specific instance of an object, such as a patient, to detect/track privacy and security issues.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private securityLabel?: CodeableConcept[] | undefined;

  /**
   * AuditEvent.entity.query Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Query parameters
   * - **Definition:** The query parameters for a query-type entities.
   * - **Comment:** The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example, if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob. The DICOM AuditMessage schema does not support both .name and .query being populated.
   * - **Requirements:** For query events, it may be necessary to capture the actual query input to the query process in order to identify the specific event. Because of differences among query implementations and data encoding for them, this is a base 64 encoded data blob. It may be subsequently decoded or interpreted by downstream audit analysis processing.
   * - **FHIR Type:** `base64Binary`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private query?: Base64BinaryType | undefined;

  /**
   * AuditEvent.entity.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional Information about the entity
   * - **Definition:** Tagged value pairs for conveying additional information about the entity.
   * - **Requirements:** Implementation-defined data about specific details of the object accessed or used.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: AuditEventEntityDetailComponent[] | undefined;

  /**
   * AuditEvent.entity.agent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Entity is attributed to this agent
   * - **Definition:** The entity is attributed to an agent to express the agent\'s responsibility for that entity in the activity. This is most used to indicate when persistence media (the entity) are used by an agent. For example when importing data from a device, the device would be described in an entity, and the user importing data from that media would be indicated as the entity.agent.
   * - **Comment:** A usecase where one AuditEvent.entity.agent is used where the Entity that was used in the creation/updating of a target resource, is not in the context of the same custodianship as the target resource, and thus the meaning of AuditEvent.entity.agent is to say that the entity referenced is managed elsewhere and that this Agent provided access to it.  This would be similar to where the Entity being referenced is managed outside FHIR, such as through HL7 V2, v3, or XDS. This might be where the Entity being referenced is managed in another FHIR resource server. Thus it explains the provenance of that Entity\'s use in the context of this AuditEvent activity.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private agent?: AuditEventAgentComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `what` property value as a Reference object; else an empty Reference object
   */
  public getWhat(): Reference {
    return this.what ?? new Reference();
  }

  /**
   * Assigns the provided What object value to the `what` property.
   *
   * @decorator `@ReferenceTargets('AuditEvent.entity.what', ['Resource',])`
   *
   * @param value - the `what` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AuditEvent.entity.what', [
    'Resource',
  ])
  public setWhat(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.what = value;
    } else {
      this.what = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `what` property exists and has a value; `false` otherwise
   */
  public hasWhat(): boolean {
    return isDefined<Reference>(this.what) && !this.what.isEmpty();
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
      const optErrMsg = `Invalid AuditEvent.entity.role; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `securityLabel` property value as a CodeableConcept array
   */
  public getSecurityLabel(): CodeableConcept[] {
    return this.securityLabel ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `securityLabel` property.
   *
   * @param value - the `securityLabel` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSecurityLabel(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity.securityLabel; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.securityLabel = value;
    } else {
      this.securityLabel = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `securityLabel` array property.
   *
   * @param value - the `securityLabel` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSecurityLabel(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity.securityLabel; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSecurityLabel();
      this.securityLabel?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabel` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabel(): boolean {
    return isDefinedList<CodeableConcept>(this.securityLabel) && this.securityLabel.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `securityLabel` property
   */
  private initSecurityLabel(): void {
    if(!this.hasSecurityLabel()) {
      this.securityLabel = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `query` property value as a Base64BinaryType object if defined; else an empty Base64BinaryType object
   */
  public getQueryElement(): Base64BinaryType {
    return this.query ?? new Base64BinaryType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `query` property.
   *
   * @param element - the `query` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQueryElement(element: Base64BinaryType | undefined): this {
    if (isDefined<Base64BinaryType>(element)) {
      const optErrMsg = `Invalid AuditEvent.entity.query; Provided element is not an instance of Base64BinaryType.`;
      assertFhirType<Base64BinaryType>(element, Base64BinaryType, optErrMsg);
      this.query = element;
    } else {
      this.query = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `query` property exists and has a value; `false` otherwise
   */
  public hasQueryElement(): boolean {
    return isDefined<Base64BinaryType>(this.query) && !this.query.isEmpty();
  }

  /**
   * @returns the `query` property value as a fhirBase64Binary if defined; else undefined
   */
  public getQuery(): fhirBase64Binary | undefined {
    return this.query?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `query` property.
   *
   * @param value - the `query` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQuery(value: fhirBase64Binary | undefined): this {
    if (isDefined<fhirBase64Binary>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity.query (${String(value)})`;
      this.query = new Base64BinaryType(parseFhirPrimitiveData(value, fhirBase64BinarySchema, optErrMsg));
    } else {
      this.query = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `query` property exists and has a value; `false` otherwise
   */
  public hasQuery(): boolean {
    return this.hasQueryElement();
  }

  /**
   * @returns the `detail` property value as a AuditEventEntityDetailComponent array
   */
  public getDetail(): AuditEventEntityDetailComponent[] {
    return this.detail ?? ([] as AuditEventEntityDetailComponent[]);
  }

  /**
   * Assigns the provided AuditEventEntityDetailComponent array value to the `detail` property.
   *
   * @param value - the `detail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDetail(value: AuditEventEntityDetailComponent[] | undefined): this {
    if (isDefinedList<AuditEventEntityDetailComponent>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity.detail; Provided value array has an element that is not an instance of AuditEventEntityDetailComponent.`;
      assertFhirTypeList<AuditEventEntityDetailComponent>(value, AuditEventEntityDetailComponent, optErrMsg);
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * Add the provided AuditEventEntityDetailComponent value to the `detail` array property.
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDetail(value: AuditEventEntityDetailComponent | undefined): this {
    if (isDefined<AuditEventEntityDetailComponent>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity.detail; Provided element is not an instance of AuditEventEntityDetailComponent.`;
      assertFhirType<AuditEventEntityDetailComponent>(value, AuditEventEntityDetailComponent, optErrMsg);
      this.initDetail();
      this.detail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefinedList<AuditEventEntityDetailComponent>(this.detail) && this.detail.some((item: AuditEventEntityDetailComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `detail` property
   */
  private initDetail(): void {
    if(!this.hasDetail()) {
      this.detail = [] as AuditEventEntityDetailComponent[];
    }
  }

  /**
   * @returns the `agent` property value as a AuditEventAgentComponent array
   */
  public getAgent(): AuditEventAgentComponent[] {
    return this.agent ?? ([] as AuditEventAgentComponent[]);
  }

  /**
   * Assigns the provided AuditEventAgentComponent array value to the `agent` property.
   *
   * @param value - the `agent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAgent(value: AuditEventAgentComponent[] | undefined): this {
    if (isDefinedList<AuditEventAgentComponent>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity.agent; Provided value array has an element that is not an instance of AuditEventAgentComponent.`;
      assertFhirTypeList<AuditEventAgentComponent>(value, AuditEventAgentComponent, optErrMsg);
      this.agent = value;
    } else {
      this.agent = undefined;
    }
    return this;
  }

  /**
   * Add the provided AuditEventAgentComponent value to the `agent` array property.
   *
   * @param value - the `agent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAgent(value: AuditEventAgentComponent | undefined): this {
    if (isDefined<AuditEventAgentComponent>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity.agent; Provided element is not an instance of AuditEventAgentComponent.`;
      assertFhirType<AuditEventAgentComponent>(value, AuditEventAgentComponent, optErrMsg);
      this.initAgent();
      this.agent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `agent` property exists and has a value; `false` otherwise
   */
  public hasAgent(): boolean {
    return isDefinedList<AuditEventAgentComponent>(this.agent) && this.agent.some((item: AuditEventAgentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `agent` property
   */
  private initAgent(): void {
    if(!this.hasAgent()) {
      this.agent = [] as AuditEventAgentComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AuditEvent.entity';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.what,
      this.role,
      this.securityLabel,
      this.query,
      this.detail,
      this.agent,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AuditEventEntityComponent {
    const dest = new AuditEventEntityComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AuditEventEntityComponent): void {
    super.copyValues(dest);
    dest.what = this.what?.copy();
    dest.role = this.role?.copy();
    const securityLabelList = copyListValues<CodeableConcept>(this.securityLabel);
    dest.securityLabel = securityLabelList.length === 0 ? undefined : securityLabelList;
    dest.query = this.query?.copy();
    const detailList = copyListValues<AuditEventEntityDetailComponent>(this.detail);
    dest.detail = detailList.length === 0 ? undefined : detailList;
    const agentList = copyListValues<AuditEventAgentComponent>(this.agent);
    dest.agent = agentList.length === 0 ? undefined : agentList;
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

    if (this.hasWhat()) {
      setFhirComplexJson(this.getWhat(), 'what', jsonObj);
    }

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    if (this.hasSecurityLabel()) {
      setFhirComplexListJson(this.getSecurityLabel(), 'securityLabel', jsonObj);
    }

    if (this.hasQueryElement()) {
      setFhirPrimitiveJson<fhirBase64Binary>(this.getQueryElement(), 'query', jsonObj);
    }

    if (this.hasDetail()) {
      setFhirBackboneElementListJson(this.getDetail(), 'detail', jsonObj);
    }

    if (this.hasAgent()) {
      setFhirBackboneElementListJson(this.getAgent(), 'agent', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * AuditEventEntityDetailComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Additional Information about the entity
 * - **Definition:** Tagged value pairs for conveying additional information about the entity.
 * - **Requirements:** Implementation-defined data about specific details of the object accessed or used.
 *
 * @category Data Models: Resource
 * @see [FHIR AuditEvent](http://hl7.org/fhir/StructureDefinition/AuditEvent)
 */
export class AuditEventEntityDetailComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, value: IDataType | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `AuditEventEntityDetailComponent` JSON to instantiate the AuditEventEntityDetailComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AuditEventEntityDetailComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AuditEventEntityDetailComponent
   * @returns AuditEventEntityDetailComponent data model or undefined for `AuditEventEntityDetailComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AuditEventEntityDetailComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AuditEventEntityDetailComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AuditEventEntityDetailComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = AuditEventEntityDetailComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for AuditEventEntityDetailComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (value === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setValue(value);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * AuditEvent.entity.detail.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the property
   * - **Definition:** The type of extra detail provided in the value.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * AuditEvent.entity.detail.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('AuditEvent.entity.detail.value[x]', ['Quantity','CodeableConcept','string','boolean','integer','Range','Ratio','time','dateTime','Period','base64Binary',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Property value
   * - **Definition:** The  value of the extra detail.
   * - **Requirements:** Should not duplicate the entity value unless absolutely necessary.
   * - **FHIR Types:**
   *     'Quantity',
   *     'CodeableConcept',
   *     'string',
   *     'boolean',
   *     'integer',
   *     'Range',
   *     'Ratio',
   *     'time',
   *     'dateTime',
   *     'Period',
   *     'base64Binary',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('AuditEvent.entity.detail.value[x]',[
    'Quantity',
    'CodeableConcept',
    'string',
    'boolean',
    'integer',
    'Range',
    'Ratio',
    'time',
    'dateTime',
    'Period',
    'base64Binary',
  ])
  private value: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else null
   */
  public getType(): CodeableConcept | null {
    return this.type_;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `AuditEvent.entity.detail.type is required`);
    const optErrMsg = `Invalid AuditEvent.entity.detail.type; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.type_ = value;
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefined<CodeableConcept>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('AuditEvent.entity.detail.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('AuditEvent.entity.detail.value[x]')
  public setValue(value: IDataType): this {
    assertIsDefined<IDataType>(value, `AuditEvent.entity.detail.value[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.value = value;
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefined<IDataType>(this.value) && !this.value.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `value` property value as a Quantity object if defined; else null
   */
  public getValueQuantity(): Quantity | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.entity.detail.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.entity.detail.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasValueCodeableConcept(): boolean {
    return this.hasValue() && this.value instanceof CodeableConcept;
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueStringType(): StringType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.entity.detail.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && this.value instanceof StringType;
  }

  /**
   * @returns the `value` property value as a BooleanType object if defined; else null
   */
  public getValueBooleanType(): BooleanType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.entity.detail.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && this.value instanceof BooleanType;
  }

  /**
   * @returns the `value` property value as a IntegerType object if defined; else null
   */
  public getValueIntegerType(): IntegerType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.entity.detail.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && this.value instanceof IntegerType;
  }

  /**
   * @returns the `value` property value as a Range object if defined; else null
   */
  public getValueRange(): Range | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.entity.detail.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Range and has a value; `false` otherwise
   */
  public hasValueRange(): boolean {
    return this.hasValue() && this.value instanceof Range;
  }

  /**
   * @returns the `value` property value as a Ratio object if defined; else null
   */
  public getValueRatio(): Ratio | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.entity.detail.value[x]: Expected Ratio but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasValueRatio(): boolean {
    return this.hasValue() && this.value instanceof Ratio;
  }

  /**
   * @returns the `value` property value as a TimeType object if defined; else null
   */
  public getValueTimeType(): TimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.entity.detail.value[x]: Expected TimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasValueTimeType(): boolean {
    return this.hasValue() && this.value instanceof TimeType;
  }

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else null
   */
  public getValueDateTimeType(): DateTimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.entity.detail.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasValueDateTimeType(): boolean {
    return this.hasValue() && this.value instanceof DateTimeType;
  }

  /**
   * @returns the `value` property value as a Period object if defined; else null
   */
  public getValuePeriod(): Period | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.entity.detail.value[x]: Expected Period but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Period and has a value; `false` otherwise
   */
  public hasValuePeriod(): boolean {
    return this.hasValue() && this.value instanceof Period;
  }

  /**
   * @returns the `value` property value as a Base64BinaryType object if defined; else null
   */
  public getValueBase64BinaryType(): Base64BinaryType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Base64BinaryType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AuditEvent.entity.detail.value[x]: Expected Base64BinaryType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Base64BinaryType and has a value; `false` otherwise
   */
  public hasValueBase64BinaryType(): boolean {
    return this.hasValue() && this.value instanceof Base64BinaryType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AuditEvent.entity.detail';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AuditEventEntityDetailComponent {
    const dest = new AuditEventEntityDetailComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AuditEventEntityDetailComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.value = this.value ? this.value.copy() as IDataType : null;
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

    if (this.hasType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getType()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`AuditEvent.entity.detail.type`);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`AuditEvent.entity.detail.value[x]`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
