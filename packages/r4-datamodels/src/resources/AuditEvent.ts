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
 * StructureDefinition.description: A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  Base64BinaryType,
  BooleanType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InstantType,
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
  copyListValues,
  fhirBase64Binary,
  fhirBase64BinarySchema,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirInstant,
  fhirInstantSchema,
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
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { AuditEventActionEnum } from '../code-systems/AuditEventActionEnum';
import { AuditEventOutcomeEnum } from '../code-systems/AuditEventOutcomeEnum';
import { CodeableConcept, Coding, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { NetworkTypeEnum } from '../code-systems/NetworkTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * AuditEvent Class
 *
 * @remarks
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 *
 * **FHIR Specification**
 * - **Short:** Event record kept for security purposes
 * - **Definition:** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 * - **Comment:** Based on IHE-ATNA.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR AuditEvent](http://hl7.org/fhir/StructureDefinition/AuditEvent)
 */
export class AuditEvent extends DomainResource implements IDomainResource {
  constructor(type_: Coding | null = null, recorded: InstantType | fhirInstant | null = null, agent: AuditEventAgentComponent[] | null = null, source: AuditEventSourceComponent | null = null) {
    super();

    this.auditEventActionEnum = new AuditEventActionEnum();
    this.auditEventOutcomeEnum = new AuditEventOutcomeEnum();

    this.type_ = null;
    if (isDefined<Coding>(type_)) {
      this.setType(type_);
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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setType(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'subtype';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSubtype(datatype);
        }
      });
    }

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setActionElement(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'recorded';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setRecorded(null);
      } else {
        instance.setRecordedElement(datatype);
      }
    } else {
      instance.setRecorded(null);
    }

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setOutcomeElement(datatype);
    }

    fieldName = 'outcomeDesc';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setOutcomeDescElement(datatype);
    }

    fieldName = 'purposeOfEvent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPurposeOfEvent(datatype);
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
        if (component === undefined) {
          instance.setAgent(null);
        } else {
          instance.addAgent(component);
        }
      });
    } else {
      instance.setAgent(null);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: AuditEventSourceComponent | undefined = AuditEventSourceComponent.parse(classJsonObj[fieldName]!, sourceField);
      if (component === undefined) {
        instance.setSource(null);
      } else {
        instance.setSource(component);
      }
    } else {
      instance.setSource(null);
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

    return instance;
  }

  /**
   * AuditEvent.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type/identifier of event
   * - **Definition:** Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
   * - **Requirements:** This identifies the performed function. For "Execute" Event Action Code audit records, this identifies the application function performed.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: Coding | null;

  /**
   * AuditEvent.subtype Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** More specific type/id for the event
   * - **Definition:** Identifier for the category of event.
   * - **Requirements:** This field enables queries of messages by implementation-defined event categories.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subtype?: Coding[] | undefined;

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
   * AuditEvent.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the activity occurred
   * - **Definition:** The period during which the activity occurred.
   * - **Comment:** The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

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
   * FHIR CodeSystem: AuditEventOutcome
   *
   * @see {@link AuditEventOutcomeEnum }
   */
  private readonly auditEventOutcomeEnum: AuditEventOutcomeEnum;

  /**
   * AuditEvent.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the event succeeded or failed
   * - **Definition:** Indicates whether the event succeeded or failed.
   * - **Comment:** In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link AuditEventOutcomeEnum }
   */
  private outcome?: EnumCodeType | undefined;

  /**
   * AuditEvent.outcomeDesc Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the event outcome
   * - **Definition:** A free text description of the outcome of the event.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private outcomeDesc?: StringType | undefined;

  /**
   * AuditEvent.purposeOfEvent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The purposeOfUse of the event
   * - **Definition:** The purposeOfUse (reason) that was used during the event being recorded.
   * - **Comment:** Use AuditEvent.agent.purposeOfUse when you know that it is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private purposeOfEvent?: CodeableConcept[] | undefined;

  /**
   * AuditEvent.agent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actor involved in the event
   * - **Definition:** An actor taking an active role in the event or activity that is logged.
   * - **Comment:** Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity. For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
   * - **Requirements:** An agent can be a person, an organization, software, device, or other actors that may be ascribed responsibility.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private agent: AuditEventAgentComponent[] | null;

  /**
   * AuditEvent.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Audit Event Reporter
   * - **Definition:** The system that is reporting the event.
   * - **Comment:** Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
   * - **Requirements:** The event is reported by one source.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
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
   * - **isSummary:** false
   */
  private entity?: AuditEventEntityComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a Coding object if defined; else an empty Coding object
   */
  public getType(): Coding {
    return this.type_ ?? new Coding();
  }

  /**
   * Assigns the provided Coding object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: Coding | undefined | null): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid AuditEvent.type; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
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
    return isDefined<Coding>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `subtype` property value as a Coding array
   */
  public getSubtype(): Coding[] {
    return this.subtype ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `subtype` property.
   *
   * @param value - the `subtype` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubtype(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid AuditEvent.subtype; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.subtype = value;
    } else {
      this.subtype = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `subtype` array property.
   *
   * @param value - the `subtype` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubtype(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid AuditEvent.subtype; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initSubtype();
      this.subtype?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subtype` property exists and has a value; `false` otherwise
   */
  public hasSubtype(): boolean {
    return isDefinedList<Coding>(this.subtype) && this.subtype.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `subtype` property
   */
  private initSubtype(): void {
    if(!this.hasSubtype()) {
      this.subtype = [] as Coding[];
    }
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
      const optErrMsg = `Invalid AuditEvent.period; Provided element is not an instance of Period.`;
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
   * @returns the `recorded` property value as a InstantType object if defined; else an empty InstantType object
   */
  public getRecordedElement(): InstantType {
    return this.recorded ?? new InstantType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `recorded` property.
   *
   * @param element - the `recorded` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecordedElement(element: InstantType | undefined | null): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid AuditEvent.recorded; Provided value is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
      this.recorded = element;
    } else {
      this.recorded = null;
    }
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
  public setRecorded(value: fhirInstant | undefined | null): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid AuditEvent.recorded (${String(value)})`;
      this.recorded = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    } else {
      this.recorded = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `recorded` property exists and has a value; `false` otherwise
   */
  public hasRecorded(): boolean {
    return this.hasRecordedElement();
  }

  /**
   * @returns the `outcome` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AuditEventOutcomeEnum }
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
   * @see CodeSystem Enumeration: {@link AuditEventOutcomeEnum }
   */
  public setOutcomeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid AuditEvent.outcome';
      assertEnumCodeType<AuditEventOutcomeEnum>(enumType, AuditEventOutcomeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link AuditEventOutcomeEnum }
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
   * @see CodeSystem Enumeration: {@link AuditEventOutcomeEnum }
   */
  public setOutcomeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid AuditEvent.outcome; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.outcome = new EnumCodeType(element, this.auditEventOutcomeEnum);
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
   * @see CodeSystem Enumeration: {@link AuditEventOutcomeEnum }
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
   * @see CodeSystem Enumeration: {@link AuditEventOutcomeEnum }
   */
  public setOutcome(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid AuditEvent.outcome; Provided value is not an instance of fhirCode.`;
      this.outcome = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.auditEventOutcomeEnum);
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
   * @returns the `outcomeDesc` property value as a StringType object if defined; else an empty StringType object
   */
  public getOutcomeDescElement(): StringType {
    return this.outcomeDesc ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `outcomeDesc` property.
   *
   * @param element - the `outcomeDesc` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOutcomeDescElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid AuditEvent.outcomeDesc; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.outcomeDesc = element;
    } else {
      this.outcomeDesc = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcomeDesc` property exists and has a value; `false` otherwise
   */
  public hasOutcomeDescElement(): boolean {
    return isDefined<StringType>(this.outcomeDesc) && !this.outcomeDesc.isEmpty();
  }

  /**
   * @returns the `outcomeDesc` property value as a fhirString if defined; else undefined
   */
  public getOutcomeDesc(): fhirString | undefined {
    return this.outcomeDesc?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `outcomeDesc` property.
   *
   * @param value - the `outcomeDesc` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOutcomeDesc(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid AuditEvent.outcomeDesc (${String(value)})`;
      this.outcomeDesc = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.outcomeDesc = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcomeDesc` property exists and has a value; `false` otherwise
   */
  public hasOutcomeDesc(): boolean {
    return this.hasOutcomeDescElement();
  }

  /**
   * @returns the `purposeOfEvent` property value as a CodeableConcept array
   */
  public getPurposeOfEvent(): CodeableConcept[] {
    return this.purposeOfEvent ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `purposeOfEvent` property.
   *
   * @param value - the `purposeOfEvent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPurposeOfEvent(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.purposeOfEvent; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.purposeOfEvent = value;
    } else {
      this.purposeOfEvent = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `purposeOfEvent` array property.
   *
   * @param value - the `purposeOfEvent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPurposeOfEvent(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.purposeOfEvent; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPurposeOfEvent();
      this.purposeOfEvent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `purposeOfEvent` property exists and has a value; `false` otherwise
   */
  public hasPurposeOfEvent(): boolean {
    return isDefinedList<CodeableConcept>(this.purposeOfEvent) && this.purposeOfEvent.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `purposeOfEvent` property
   */
  private initPurposeOfEvent(): void {
    if(!this.hasPurposeOfEvent()) {
      this.purposeOfEvent = [] as CodeableConcept[];
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
  public setAgent(value: AuditEventAgentComponent[] | undefined | null): this {
    if (isDefinedList<AuditEventAgentComponent>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent; Provided value array has an element that is not an instance of AuditEventAgentComponent.`;
      assertFhirTypeList<AuditEventAgentComponent>(value, AuditEventAgentComponent, optErrMsg);
      this.agent = value;
    } else {
      this.agent = null;
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
   * @returns the `source` property value as a AuditEventSourceComponent object if defined; else an empty AuditEventSourceComponent object
   */
  public getSource(): AuditEventSourceComponent {
    return this.source ?? new AuditEventSourceComponent();
  }

  /**
   * Assigns the provided AuditEventSourceComponent object value to the `source` property.
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSource(value: AuditEventSourceComponent | undefined | null): this {
    if (isDefined<AuditEventSourceComponent>(value)) {
      const optErrMsg = `Invalid AuditEvent.source; Provided element is not an instance of AuditEventSourceComponent.`;
      assertFhirType<AuditEventSourceComponent>(value, AuditEventSourceComponent, optErrMsg);
      this.source = value;
    } else {
      this.source = null;
    }
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
      this.type_,
      this.subtype,
      this.action,
      this.period,
      this.recorded,
      this.outcome,
      this.outcomeDesc,
      this.purposeOfEvent,
      this.agent,
      this.source,
      this.entity,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.recorded, this.source, 
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
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const subtypeList = copyListValues<Coding>(this.subtype);
    dest.subtype = subtypeList.length === 0 ? undefined : subtypeList;
    dest.action = this.action?.copy();
    dest.period = this.period?.copy();
    dest.recorded = this.recorded ? this.recorded.copy() : null;
    dest.outcome = this.outcome?.copy();
    dest.outcomeDesc = this.outcomeDesc?.copy();
    const purposeOfEventList = copyListValues<CodeableConcept>(this.purposeOfEvent);
    dest.purposeOfEvent = purposeOfEventList.length === 0 ? undefined : purposeOfEventList;
    const agentList = copyListValues<AuditEventAgentComponent>(this.agent);
    dest.agent = agentList.length === 0 ? null : agentList;
    dest.source = this.source ? this.source.copy() : null;
    const entityList = copyListValues<AuditEventEntityComponent>(this.entity);
    dest.entity = entityList.length === 0 ? undefined : entityList;
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

    if (this.hasSubtype()) {
      setFhirComplexListJson(this.getSubtype(), 'subtype', jsonObj);
    }

    if (this.hasActionElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getActionElement()!, 'action', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasRecordedElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getRecordedElement(), 'recorded', jsonObj);
    } else {
      jsonObj['recorded'] = null;
    }

    if (this.hasOutcomeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getOutcomeElement()!, 'outcome', jsonObj);
    }

    if (this.hasOutcomeDescElement()) {
      setFhirPrimitiveJson<fhirString>(this.getOutcomeDescElement(), 'outcomeDesc', jsonObj);
    }

    if (this.hasPurposeOfEvent()) {
      setFhirComplexListJson(this.getPurposeOfEvent(), 'purposeOfEvent', jsonObj);
    }

    if (this.hasAgent()) {
      setFhirBackboneElementListJson(this.getAgent(), 'agent', jsonObj);
    } else {
      jsonObj['agent'] = null;
    }

    if (this.hasSource()) {
      setFhirBackboneElementJson(this.getSource(), 'source', jsonObj);
    } else {
      jsonObj['source'] = null;
    }

    if (this.hasEntity()) {
      setFhirBackboneElementListJson(this.getEntity(), 'entity', jsonObj);
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
 * - **Comment:** Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity. For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
 * - **Requirements:** An agent can be a person, an organization, software, device, or other actors that may be ascribed responsibility.
 *
 * @category Data Models: Resource
 * @see [FHIR AuditEvent](http://hl7.org/fhir/StructureDefinition/AuditEvent)
 */
export class AuditEventAgentComponent extends BackboneElement implements IBackboneElement {
  constructor(requestor: BooleanType | fhirBoolean | null = null) {
    super();

    this.requestor = null;
    if (isDefined<BooleanType | fhirBoolean>(requestor)) {
      if (requestor instanceof PrimitiveType) {
        this.setRequestorElement(requestor);
      } else {
        this.setRequestor(requestor);
      }
    }
  }

  /**
   * Parse the provided `AuditEventAgentComponent` JSON to instantiate the AuditEventAgentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AuditEventAgentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AuditEventAgentComponent
   * @returns AuditEventAgentComponent data model or undefined for `AuditEventAgentComponent`
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
      instance.setWho(datatype);
    }

    fieldName = 'altId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setAltIdElement(datatype);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'requestor';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setRequestor(null);
      } else {
        instance.setRequestorElement(datatype);
      }
    } else {
      instance.setRequestor(null);
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

    fieldName = 'media';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMedia(datatype);
    }

    fieldName = 'network';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: AuditEventAgentNetworkComponent | undefined = AuditEventAgentNetworkComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNetwork(component);
    }

    fieldName = 'purposeOfUse';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPurposeOfUse(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * AuditEvent.agent.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How agent participated
   * - **Definition:** Specification of the participation type the user plays when performing the event.
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
   * - **Definition:** The security role that the user was acting under, that come from local codes defined by the access control security system (e.g. RBAC, ABAC) used in the local context.
   * - **Comment:** Should be roles relevant to the event. Should  not be an exhaustive list of roles.
   * - **Requirements:** This value ties an audited event to a user\'s role(s). It is an optional value that might be used to group events for analysis by user functional role categories.
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
   * - **Comment:** Where a User ID is available it will go into who.identifier.
   * - **Requirements:** This field ties an audit event to a specific resource or identifier.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private who?: Reference | undefined;

  /**
   * AuditEvent.agent.altId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Alternative User identity
   * - **Definition:** Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.
   * - **Requirements:** In some situations, a human user may authenticate with one identity but, to access a specific application system, may use a synonymous identify. For example, some "single sign on" implementations will do this. The alternative identifier would then be the original identify  used for authentication, and the User ID is the one known to and used by the application.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private altId?: StringType | undefined;

  /**
   * AuditEvent.agent.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human friendly name for the agent
   * - **Definition:** Human-meaningful name for the agent.
   * - **Requirements:** The User ID and Authorization User ID may be internal or otherwise obscure values. This field assists the auditor in identifying the actual user.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

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
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private requestor: BooleanType | null;

  /**
   * AuditEvent.agent.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where
   * - **Definition:** Where the event occurred.
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
   * - **Short:** Policy that authorized event
   * - **Definition:** The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.
   * - **Comment:** For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
   * - **Requirements:** This value is used retrospectively to determine the authorization policies.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private policy?: UriType[] | undefined;

  /**
   * AuditEvent.agent.media Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of media
   * - **Definition:** Type of media involved. Used when the event is about exporting/importing onto media.
   * - **Requirements:** Usually, this is used instead of specifying a network address. This field is not used for Media Id (i.e. the serial number of a CD).
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private media?: Coding | undefined;

  /**
   * AuditEvent.agent.network Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Logical network location for application activity
   * - **Definition:** Logical network location for application activity, if the activity has a network location.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private network?: AuditEventAgentNetworkComponent | undefined;

  /**
   * AuditEvent.agent.purposeOfUse Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason given for this user
   * - **Definition:** The reason (purpose of use), specific to this agent, that was used during the event being recorded.
   * - **Comment:** Use AuditEvent.agent.purposeOfUse when you know that is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purposeOfUse?: CodeableConcept[] | undefined;

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
   * @returns the `who` property value as a Reference object; else an empty Reference object
   */
  public getWho(): Reference {
    return this.who ?? new Reference();
  }

  /**
   * Assigns the provided Who object value to the `who` property.
   *
   * @decorator `@ReferenceTargets('AuditEvent.agent.who', ['PractitionerRole','Practitioner','Organization','Device','Patient','RelatedPerson',])`
   *
   * @param value - the `who` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AuditEvent.agent.who', [
    'PractitionerRole',
  
    'Practitioner',
  
    'Organization',
  
    'Device',
  
    'Patient',
  
    'RelatedPerson',
  ])
  public setWho(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.who = value;
    } else {
      this.who = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `who` property exists and has a value; `false` otherwise
   */
  public hasWho(): boolean {
    return isDefined<Reference>(this.who) && !this.who.isEmpty();
  }

  /**
   * @returns the `altId` property value as a StringType object if defined; else an empty StringType object
   */
  public getAltIdElement(): StringType {
    return this.altId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `altId` property.
   *
   * @param element - the `altId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAltIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid AuditEvent.agent.altId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.altId = element;
    } else {
      this.altId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `altId` property exists and has a value; `false` otherwise
   */
  public hasAltIdElement(): boolean {
    return isDefined<StringType>(this.altId) && !this.altId.isEmpty();
  }

  /**
   * @returns the `altId` property value as a fhirString if defined; else undefined
   */
  public getAltId(): fhirString | undefined {
    return this.altId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `altId` property.
   *
   * @param value - the `altId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAltId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.altId (${String(value)})`;
      this.altId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.altId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `altId` property exists and has a value; `false` otherwise
   */
  public hasAltId(): boolean {
    return this.hasAltIdElement();
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
      const optErrMsg = `Invalid AuditEvent.agent.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid AuditEvent.agent.name (${String(value)})`;
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
  public setRequestorElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid AuditEvent.agent.requestor; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.requestor = element;
    } else {
      this.requestor = null;
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
   * @returns the `requestor` property value as a fhirBoolean if defined; else null
   */
  public getRequestor(): fhirBoolean | null {
    if (this.requestor?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.requestor.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `requestor` property.
   *
   * @param value - the `requestor` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequestor(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.requestor (${String(value)})`;
      this.requestor = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.requestor = null;
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
   * @returns the `media` property value as a Coding object if defined; else an empty Coding object
   */
  public getMedia(): Coding {
    return this.media ?? new Coding();
  }

  /**
   * Assigns the provided Media object value to the `media` property.
   *
   * @param value - the `media` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMedia(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.media; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.media = value;
    } else {
      this.media = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `media` property exists and has a value; `false` otherwise
   */
  public hasMedia(): boolean {
    return isDefined<Coding>(this.media) && !this.media.isEmpty();
  }

  /**
   * @returns the `network` property value as a AuditEventAgentNetworkComponent object if defined; else an empty AuditEventAgentNetworkComponent object
   */
  public getNetwork(): AuditEventAgentNetworkComponent {
    return this.network ?? new AuditEventAgentNetworkComponent();
  }

  /**
   * Assigns the provided Network object value to the `network` property.
   *
   * @param value - the `network` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNetwork(value: AuditEventAgentNetworkComponent | undefined): this {
    if (isDefined<AuditEventAgentNetworkComponent>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.network; Provided element is not an instance of AuditEventAgentNetworkComponent.`;
      assertFhirType<AuditEventAgentNetworkComponent>(value, AuditEventAgentNetworkComponent, optErrMsg);
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
    return isDefined<AuditEventAgentNetworkComponent>(this.network) && !this.network.isEmpty();
  }

  /**
   * @returns the `purposeOfUse` property value as a CodeableConcept array
   */
  public getPurposeOfUse(): CodeableConcept[] {
    return this.purposeOfUse ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `purposeOfUse` property.
   *
   * @param value - the `purposeOfUse` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPurposeOfUse(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.purposeOfUse; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.purposeOfUse = value;
    } else {
      this.purposeOfUse = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `purposeOfUse` array property.
   *
   * @param value - the `purposeOfUse` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPurposeOfUse(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.purposeOfUse; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPurposeOfUse();
      this.purposeOfUse?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `purposeOfUse` property exists and has a value; `false` otherwise
   */
  public hasPurposeOfUse(): boolean {
    return isDefinedList<CodeableConcept>(this.purposeOfUse) && this.purposeOfUse.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `purposeOfUse` property
   */
  private initPurposeOfUse(): void {
    if(!this.hasPurposeOfUse()) {
      this.purposeOfUse = [] as CodeableConcept[];
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
      this.altId,
      this.name,
      this.requestor,
      this.location,
      this.policy,
      this.media,
      this.network,
      this.purposeOfUse,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.requestor, 
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
    dest.who = this.who?.copy();
    dest.altId = this.altId?.copy();
    dest.name = this.name?.copy();
    dest.requestor = this.requestor ? this.requestor.copy() : null;
    dest.location = this.location?.copy();
    const policyList = copyListValues<UriType>(this.policy);
    dest.policy = policyList.length === 0 ? undefined : policyList;
    dest.media = this.media?.copy();
    dest.network = this.network?.copy();
    const purposeOfUseList = copyListValues<CodeableConcept>(this.purposeOfUse);
    dest.purposeOfUse = purposeOfUseList.length === 0 ? undefined : purposeOfUseList;
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

    if (this.hasRole()) {
      setFhirComplexListJson(this.getRole(), 'role', jsonObj);
    }

    if (this.hasWho()) {
      setFhirComplexJson(this.getWho(), 'who', jsonObj);
    }

    if (this.hasAltIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getAltIdElement(), 'altId', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasRequestorElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getRequestorElement(), 'requestor', jsonObj);
    } else {
      jsonObj['requestor'] = null;
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasPolicy()) {
      setFhirPrimitiveListJson(this.getPolicyElement(), 'policy', jsonObj);
    }

    if (this.hasMedia()) {
      setFhirComplexJson(this.getMedia(), 'media', jsonObj);
    }

    if (this.hasNetwork()) {
      setFhirBackboneElementJson(this.getNetwork(), 'network', jsonObj);
    }

    if (this.hasPurposeOfUse()) {
      setFhirComplexListJson(this.getPurposeOfUse(), 'purposeOfUse', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * AuditEventAgentNetworkComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Logical network location for application activity
 * - **Definition:** Logical network location for application activity, if the activity has a network location.
 *
 * @category Data Models: Resource
 * @see [FHIR AuditEvent](http://hl7.org/fhir/StructureDefinition/AuditEvent)
 */
export class AuditEventAgentNetworkComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.networkTypeEnum = new NetworkTypeEnum();
  }

  /**
   * Parse the provided `AuditEventAgentNetworkComponent` JSON to instantiate the AuditEventAgentNetworkComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AuditEventAgentNetworkComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AuditEventAgentNetworkComponent
   * @returns AuditEventAgentNetworkComponent data model or undefined for `AuditEventAgentNetworkComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AuditEventAgentNetworkComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AuditEventAgentNetworkComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AuditEventAgentNetworkComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'address';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setAddressElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setTypeElement(datatype);
    }

    return instance;
  }

  /**
   * AuditEvent.agent.network.address Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier for the network access point of the user device
   * - **Definition:** An identifier for the network access point of the user device for the audit event.
   * - **Comment:** This could be a device id, IP address or some other identifier associated with a device.
   * - **Requirements:** This datum identifies the user\'s network access point, which may be distinct from the server that performed the action. It is an optional value that may be used to group events recorded on separate servers for analysis of a specific network access point\'s data access across all servers.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private address?: StringType | undefined;

  /**
   * FHIR CodeSystem: NetworkType
   *
   * @see {@link NetworkTypeEnum }
   */
  private readonly networkTypeEnum: NetworkTypeEnum;

  /**
   * AuditEvent.agent.network.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of network access point
   * - **Definition:** An identifier for the type of network access point that originated the audit event.
   * - **Requirements:** This datum identifies the type of network access point identifier of the user device for the audit event. It is an optional value that may be used to group events recorded on separate servers for analysis of access according to a network access point\'s type.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link NetworkTypeEnum }
   */
  private type_?: EnumCodeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `address` property value as a StringType object if defined; else an empty StringType object
   */
  public getAddressElement(): StringType {
    return this.address ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `address` property.
   *
   * @param element - the `address` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAddressElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid AuditEvent.agent.network.address; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.address = element;
    } else {
      this.address = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `address` property exists and has a value; `false` otherwise
   */
  public hasAddressElement(): boolean {
    return isDefined<StringType>(this.address) && !this.address.isEmpty();
  }

  /**
   * @returns the `address` property value as a fhirString if defined; else undefined
   */
  public getAddress(): fhirString | undefined {
    return this.address?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `address` property.
   *
   * @param value - the `address` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAddress(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.network.address (${String(value)})`;
      this.address = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.address = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `address` property exists and has a value; `false` otherwise
   */
  public hasAddress(): boolean {
    return this.hasAddressElement();
  }

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link NetworkTypeEnum }
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
   * @see CodeSystem Enumeration: {@link NetworkTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid AuditEvent.agent.network.type';
      assertEnumCodeType<NetworkTypeEnum>(enumType, NetworkTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link NetworkTypeEnum }
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
   * @see CodeSystem Enumeration: {@link NetworkTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid AuditEvent.agent.network.type; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.networkTypeEnum);
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
   * @see CodeSystem Enumeration: {@link NetworkTypeEnum }
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
   * @see CodeSystem Enumeration: {@link NetworkTypeEnum }
   */
  public setType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid AuditEvent.agent.network.type; Provided value is not an instance of fhirCode.`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.networkTypeEnum);
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AuditEvent.agent.network';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.address,
      this.type_,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AuditEventAgentNetworkComponent {
    const dest = new AuditEventAgentNetworkComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AuditEventAgentNetworkComponent): void {
    super.copyValues(dest);
    dest.address = this.address?.copy();
    dest.type_ = this.type_?.copy();
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

    if (this.hasAddressElement()) {
      setFhirPrimitiveJson<fhirString>(this.getAddressElement(), 'address', jsonObj);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
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
 * - **Definition:** The system that is reporting the event.
 * - **Comment:** Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
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
    

    fieldName = 'site';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSiteElement(datatype);
    }

    fieldName = 'observer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setObserver(null);
      } else {
        instance.setObserver(datatype);
      }
    } else {
      instance.setObserver(null);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addType(datatype);
        }
      });
    }

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
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private site?: StringType | undefined;

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
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
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
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: Coding[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `site` property value as a StringType object if defined; else an empty StringType object
   */
  public getSiteElement(): StringType {
    return this.site ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `site` property.
   *
   * @param element - the `site` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSiteElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid AuditEvent.source.site; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.site = element;
    } else {
      this.site = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `site` property exists and has a value; `false` otherwise
   */
  public hasSiteElement(): boolean {
    return isDefined<StringType>(this.site) && !this.site.isEmpty();
  }

  /**
   * @returns the `site` property value as a fhirString if defined; else undefined
   */
  public getSite(): fhirString | undefined {
    return this.site?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `site` property.
   *
   * @param value - the `site` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSite(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid AuditEvent.source.site (${String(value)})`;
      this.site = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.site = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `site` property exists and has a value; `false` otherwise
   */
  public hasSite(): boolean {
    return this.hasSiteElement();
  }

  /**
   * @returns the `observer` property value as a Reference object if defined; else an empty Reference object
   */
  public getObserver(): Reference {
    return this.observer ?? new Reference();
  }

  /**
   * Assigns the provided Observer object value to the `observer` property.
   *
   * @decorator `@ReferenceTargets('AuditEvent.source.observer', ['PractitionerRole','Practitioner','Organization','Device','Patient','RelatedPerson',])`
   *
   * @param value - the `observer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AuditEvent.source.observer', [
    'PractitionerRole',
  
    'Practitioner',
  
    'Organization',
  
    'Device',
  
    'Patient',
  
    'RelatedPerson',
  ])
  public setObserver(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.observer = value;
    } else {
      this.observer = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `observer` property exists and has a value; `false` otherwise
   */
  public hasObserver(): boolean {
    return isDefined<Reference>(this.observer) && !this.observer.isEmpty();
  }

  /**
   * @returns the `type_` property value as a Coding array
   */
  public getType(): Coding[] {
    return this.type_ ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `type_` property.
   *
   * @param value - the `type_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid AuditEvent.source.type; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `type_` array property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addType(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid AuditEvent.source.type; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initType();
      this.type_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefinedList<Coding>(this.type_) && this.type_.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `type_` property
   */
  private initType(): void {
    if(!this.hasType()) {
      this.type_ = [] as Coding[];
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.observer, 
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
    const typeList = copyListValues<Coding>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
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

    if (this.hasSiteElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSiteElement(), 'site', jsonObj);
    }

    if (this.hasObserver()) {
      setFhirComplexJson(this.getObserver(), 'observer', jsonObj);
    } else {
      jsonObj['observer'] = null;
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
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
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'what';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setWhat(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    fieldName = 'lifecycle';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLifecycle(datatype);
    }

    fieldName = 'securityLabel';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSecurityLabel(datatype);
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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'query';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
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

    return instance;
  }

  /**
   * AuditEvent.entity.what Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific instance of resource
   * - **Definition:** Identifies a specific instance of the entity. The reference should be version specific.
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
   * AuditEvent.entity.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of entity involved
   * - **Definition:** The type of the object that was involved in this audit event.
   * - **Comment:** This value is distinct from the user\'s role or any user relationship to the entity.
   * - **Requirements:** To describe the object being acted upon. In addition to queries on the subject of the action in an auditable event, it is also important to be able to query on the object type for the action.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: Coding | undefined;

  /**
   * AuditEvent.entity.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What role the entity played
   * - **Definition:** Code representing the role the entity played in the event being audited.
   * - **Requirements:** For some detailed audit analysis it may be necessary to indicate a more granular type of entity, based on the application role it serves.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: Coding | undefined;

  /**
   * AuditEvent.entity.lifecycle Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Life-cycle stage for the entity
   * - **Definition:** Identifier for the data life-cycle stage for the entity.
   * - **Comment:** This can be used to provide an audit trail for data, over time, as it passes through the system.
   * - **Requirements:** Institutional policies for privacy and security may optionally fall under different accountability rules based on data life cycle. This provides a differentiating value for those cases.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lifecycle?: Coding | undefined;

  /**
   * AuditEvent.entity.securityLabel Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Security labels on the entity
   * - **Definition:** Security labels for the identified entity.
   * - **Comment:** Copied from entity meta security tags.
   * - **Requirements:** This field identifies the security labels for a specific instance of an object, such as a patient, to detect/track privacy and security issues.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private securityLabel?: Coding[] | undefined;

  /**
   * AuditEvent.entity.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Descriptor for entity
   * - **Definition:** A name of the entity in the audit event.
   * - **Comment:** This field may be used in a query/report to identify audit events for a specific person.  For example, where multiple synonymous entity identifiers (patient number, medical record number, encounter number, etc.) have been used.
   * - **Requirements:** Use only where entity can\'t be identified with an identifier.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * AuditEvent.entity.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Descriptive text
   * - **Definition:** Text that describes the entity in more detail.
   * - **Requirements:** Use only where entity can\'t be identified with an identifier.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * AuditEvent.entity.query Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Query parameters
   * - **Definition:** The query parameters for a query-type entities.
   * - **Comment:** The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example, if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
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
   * @returns the `type_` property value as a Coding object if defined; else an empty Coding object
   */
  public getType(): Coding {
    return this.type_ ?? new Coding();
  }

  /**
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity.type; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
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
    return isDefined<Coding>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `role` property value as a Coding object if defined; else an empty Coding object
   */
  public getRole(): Coding {
    return this.role ?? new Coding();
  }

  /**
   * Assigns the provided Role object value to the `role` property.
   *
   * @param value - the `role` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRole(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity.role; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
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
    return isDefined<Coding>(this.role) && !this.role.isEmpty();
  }

  /**
   * @returns the `lifecycle` property value as a Coding object if defined; else an empty Coding object
   */
  public getLifecycle(): Coding {
    return this.lifecycle ?? new Coding();
  }

  /**
   * Assigns the provided Lifecycle object value to the `lifecycle` property.
   *
   * @param value - the `lifecycle` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLifecycle(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity.lifecycle; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.lifecycle = value;
    } else {
      this.lifecycle = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lifecycle` property exists and has a value; `false` otherwise
   */
  public hasLifecycle(): boolean {
    return isDefined<Coding>(this.lifecycle) && !this.lifecycle.isEmpty();
  }

  /**
   * @returns the `securityLabel` property value as a Coding array
   */
  public getSecurityLabel(): Coding[] {
    return this.securityLabel ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `securityLabel` property.
   *
   * @param value - the `securityLabel` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSecurityLabel(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity.securityLabel; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.securityLabel = value;
    } else {
      this.securityLabel = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `securityLabel` array property.
   *
   * @param value - the `securityLabel` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSecurityLabel(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity.securityLabel; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initSecurityLabel();
      this.securityLabel?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabel` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabel(): boolean {
    return isDefinedList<Coding>(this.securityLabel) && this.securityLabel.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `securityLabel` property
   */
  private initSecurityLabel(): void {
    if(!this.hasSecurityLabel()) {
      this.securityLabel = [] as Coding[];
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
      const optErrMsg = `Invalid AuditEvent.entity.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid AuditEvent.entity.name (${String(value)})`;
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
      const optErrMsg = `Invalid AuditEvent.entity.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid AuditEvent.entity.description (${String(value)})`;
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
      this.type_,
      this.role,
      this.lifecycle,
      this.securityLabel,
      this.name,
      this.description,
      this.query,
      this.detail,
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
    dest.type_ = this.type_?.copy();
    dest.role = this.role?.copy();
    dest.lifecycle = this.lifecycle?.copy();
    const securityLabelList = copyListValues<Coding>(this.securityLabel);
    dest.securityLabel = securityLabelList.length === 0 ? undefined : securityLabelList;
    dest.name = this.name?.copy();
    dest.description = this.description?.copy();
    dest.query = this.query?.copy();
    const detailList = copyListValues<AuditEventEntityDetailComponent>(this.detail);
    dest.detail = detailList.length === 0 ? undefined : detailList;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    if (this.hasLifecycle()) {
      setFhirComplexJson(this.getLifecycle(), 'lifecycle', jsonObj);
    }

    if (this.hasSecurityLabel()) {
      setFhirComplexListJson(this.getSecurityLabel(), 'securityLabel', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasQueryElement()) {
      setFhirPrimitiveJson<fhirBase64Binary>(this.getQueryElement(), 'query', jsonObj);
    }

    if (this.hasDetail()) {
      setFhirBackboneElementListJson(this.getDetail(), 'detail', jsonObj);
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
  constructor(type_: StringType | fhirString | null = null, value: IDataType | null = null) {
    super();

    this.type_ = null;
    if (isDefined<StringType | fhirString>(type_)) {
      if (type_ instanceof PrimitiveType) {
        this.setTypeElement(type_);
      } else {
        this.setType(type_);
      }
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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      instance.setType(null);
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
      instance.setValue(null);
    } else {
      instance.setValue(value);
    }

    return instance;
  }

  /**
   * AuditEvent.entity.detail.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the property
   * - **Definition:** The type of extra detail provided in the value.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: StringType | null;

  /**
   * AuditEvent.entity.detail.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('AuditEvent.entity.detail.value[x]', ['string','base64Binary',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Property value
   * - **Definition:** The  value of the extra detail.
   * - **Comment:** The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
   * - **Requirements:** Should not duplicate the entity value unless absolutely necessary.
   * - **FHIR Types:**
   *     'string',
   *     'base64Binary',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('AuditEvent.entity.detail.value[x]',[
    'string',
    'base64Binary',
  ])
  private value: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a StringType object if defined; else an empty StringType object
   */
  public getTypeElement(): StringType {
    return this.type_ ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `type_` property.
   *
   * @param element - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTypeElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid AuditEvent.entity.detail.type; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.type_ = element;
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeElement(): boolean {
    return isDefined<StringType>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `type_` property value as a fhirString if defined; else null
   */
  public getType(): fhirString | null {
    if (this.type_?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.type_.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `type_` property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setType(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid AuditEvent.entity.detail.type (${String(value)})`;
      this.type_ = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeElement();
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
  public setValue(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.value = value;
    } else {
      this.value = null;
    }
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.value, 
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
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasTypeElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTypeElement(), 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    return jsonObj;
  }
}
