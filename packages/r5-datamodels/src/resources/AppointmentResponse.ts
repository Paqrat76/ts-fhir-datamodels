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
 * AppointmentResponse Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/AppointmentResponse
 * StructureDefinition.name: AppointmentResponse
 * StructureDefinition.description: A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BooleanType,
  CodeType,
  DateType,
  DomainResource,
  FhirParser,
  IDomainResource,
  InstantType,
  JSON,
  MarkdownType,
  PositiveIntType,
  PrimitiveType,
  ReferenceTargets,
  assertFhirType,
  assertFhirTypeList,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDate,
  fhirDateSchema,
  fhirInstant,
  fhirInstantSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirPositiveInt,
  fhirPositiveIntSchema,
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
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * AppointmentResponse Class
 *
 * @remarks
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 *
 * **FHIR Specification**
 * - **Short:** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection
 * - **Definition:** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR AppointmentResponse](http://hl7.org/fhir/StructureDefinition/AppointmentResponse)
 */
export class AppointmentResponse extends DomainResource implements IDomainResource {
  constructor(appointment: Reference | null = null, participantStatus: CodeType | fhirCode | null = null) {
    super();

    this.appointment = null;
    if (isDefined<Reference>(appointment)) {
      this.setAppointment(appointment);
    }

    this.participantStatus = null;
    if (isDefined<CodeType | fhirCode>(participantStatus)) {
      if (participantStatus instanceof PrimitiveType) {
        this.setParticipantStatusElement(participantStatus);
      } else {
        this.setParticipantStatus(participantStatus);
      }
    }
  }

  /**
   * Parse the provided `AppointmentResponse` JSON to instantiate the AppointmentResponse data model.
   *
   * @param sourceJson - JSON representing FHIR `AppointmentResponse`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AppointmentResponse
   * @returns AppointmentResponse data model or undefined for `AppointmentResponse`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): AppointmentResponse | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AppointmentResponse';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AppointmentResponse();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'AppointmentResponse');
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

    fieldName = 'appointment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setAppointment(null);
      } else {
        instance.setAppointment(datatype);
      }
    } else {
      instance.setAppointment(null);
    }

    fieldName = 'proposedNewTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setProposedNewTimeElement(datatype);
    }

    fieldName = 'start';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      instance.setStartElement(datatype);
    }

    fieldName = 'end';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      instance.setEndElement(datatype);
    }

    fieldName = 'participantType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addParticipantType(datatype);
        }
      });
    }

    fieldName = 'actor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setActor(datatype);
    }

    fieldName = 'participantStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setParticipantStatus(null);
      } else {
        instance.setParticipantStatusElement(datatype);
      }
    } else {
      instance.setParticipantStatus(null);
    }

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    fieldName = 'recurring';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setRecurringElement(datatype);
    }

    fieldName = 'occurrenceDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setOccurrenceDateElement(datatype);
    }

    fieldName = 'recurrenceId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setRecurrenceIdElement(datatype);
    }

    return instance;
  }

  /**
   * AppointmentResponse.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External Ids for this item
   * - **Definition:** This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * AppointmentResponse.appointment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Appointment this response relates to
   * - **Definition:** Appointment that this response is replying to.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Appointment',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private appointment: Reference | null;

  /**
   * AppointmentResponse.proposedNewTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicator for a counter proposal
   * - **Definition:** Indicates that the response is proposing a different time that was initially requested.  The new proposed time will be indicated in the start and end properties.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private proposedNewTime?: BooleanType | undefined;

  /**
   * AppointmentResponse.start Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time from appointment, or requested new start time
   * - **Definition:** Date/Time that the appointment is to take place, or requested new start time.
   * - **Comment:** This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the start time.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private start?: InstantType | undefined;

  /**
   * AppointmentResponse.end Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time from appointment, or requested new end time
   * - **Definition:** This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private end?: InstantType | undefined;

  /**
   * AppointmentResponse.participantType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Role of participant in the appointment
   * - **Definition:** Role of participant in the appointment.
   * - **Comment:** The role of the participant can be used to declare what the actor will be doing in the scope of the referenced appointment. If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning. This value SHALL be the same as specified on the referenced Appointment so that they can be matched, and subsequently updated.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private participantType?: CodeableConcept[] | undefined;

  /**
   * AppointmentResponse.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Person(s), Location, HealthcareService, or Device
   * - **Definition:** A Person, Location, HealthcareService, or Device that is participating in the appointment.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private actor?: Reference | undefined;

  /**
   * AppointmentResponse.participantStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** accepted | declined | tentative | needs-action | entered-in-error
   * - **Definition:** Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.
   * - **Comment:** This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   */
  private participantStatus: CodeType | null;

  /**
   * AppointmentResponse.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional comments
   * - **Definition:** Additional comments about the appointment.
   * - **Comment:** This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private comment?: MarkdownType | undefined;

  /**
   * AppointmentResponse.recurring Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** This response is for all occurrences in a recurring request
   * - **Definition:** Indicates that this AppointmentResponse applies to all occurrences in a recurring request.
   * - **Comment:** When a recurring appointment is requested, the participant may choose to respond to each individual occurrence, in which case AppointmentResponse.recurring should be false.  If the participant chooses to respond the same way for all occurrences, they may instead use a single AppointmentResponse with recurring set to true.  These may be combined as the participant chooses.  For example, they may accept all occurrences (recurring = true), but then send a decline for a specific occurrence (recurring=false).
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recurring?: BooleanType | undefined;

  /**
   * AppointmentResponse.occurrenceDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Original date within a recurring request
   * - **Definition:** The original date within a recurring request. This could be used in place of the recurrenceId to be more direct (or where the template is provided through the simple list of dates in `Appointment.occurrenceDate`).
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private occurrenceDate?: DateType | undefined;

  /**
   * AppointmentResponse.recurrenceId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The recurrence ID of the specific recurring request
   * - **Definition:** The recurrence ID (sequence number) of the specific appointment when responding to a recurring request.
   * - **Comment:** If the recurrence template was defined using the list of occurrenceDates then this property might not be used.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recurrenceId?: PositiveIntType | undefined;

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
      const optErrMsg = `Invalid AppointmentResponse.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid AppointmentResponse.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `appointment` property value as a Reference object if defined; else an empty Reference object
   */
  public getAppointment(): Reference {
    return this.appointment ?? new Reference();
  }

  /**
   * Assigns the provided Appointment object value to the `appointment` property.
   *
   * @decorator `@ReferenceTargets('AppointmentResponse.appointment', ['Appointment',])`
   *
   * @param value - the `appointment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AppointmentResponse.appointment', [
    'Appointment',
  ])
  public setAppointment(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.appointment = value;
    } else {
      this.appointment = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `appointment` property exists and has a value; `false` otherwise
   */
  public hasAppointment(): boolean {
    return isDefined<Reference>(this.appointment) && !this.appointment.isEmpty();
  }

  /**
   * @returns the `proposedNewTime` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getProposedNewTimeElement(): BooleanType {
    return this.proposedNewTime ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `proposedNewTime` property.
   *
   * @param element - the `proposedNewTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProposedNewTimeElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid AppointmentResponse.proposedNewTime; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.proposedNewTime = element;
    } else {
      this.proposedNewTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `proposedNewTime` property exists and has a value; `false` otherwise
   */
  public hasProposedNewTimeElement(): boolean {
    return isDefined<BooleanType>(this.proposedNewTime) && !this.proposedNewTime.isEmpty();
  }

  /**
   * @returns the `proposedNewTime` property value as a fhirBoolean if defined; else undefined
   */
  public getProposedNewTime(): fhirBoolean | undefined {
    return this.proposedNewTime?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `proposedNewTime` property.
   *
   * @param value - the `proposedNewTime` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProposedNewTime(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid AppointmentResponse.proposedNewTime (${String(value)})`;
      this.proposedNewTime = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.proposedNewTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `proposedNewTime` property exists and has a value; `false` otherwise
   */
  public hasProposedNewTime(): boolean {
    return this.hasProposedNewTimeElement();
  }

  /**
   * @returns the `start` property value as a InstantType object if defined; else an empty InstantType object
   */
  public getStartElement(): InstantType {
    return this.start ?? new InstantType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `start` property.
   *
   * @param element - the `start` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStartElement(element: InstantType | undefined): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid AppointmentResponse.start; Provided element is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
      this.start = element;
    } else {
      this.start = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `start` property exists and has a value; `false` otherwise
   */
  public hasStartElement(): boolean {
    return isDefined<InstantType>(this.start) && !this.start.isEmpty();
  }

  /**
   * @returns the `start` property value as a fhirInstant if defined; else undefined
   */
  public getStart(): fhirInstant | undefined {
    return this.start?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `start` property.
   *
   * @param value - the `start` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStart(value: fhirInstant | undefined): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid AppointmentResponse.start (${String(value)})`;
      this.start = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    } else {
      this.start = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `start` property exists and has a value; `false` otherwise
   */
  public hasStart(): boolean {
    return this.hasStartElement();
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
      const optErrMsg = `Invalid AppointmentResponse.end; Provided element is not an instance of InstantType.`;
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
      const optErrMsg = `Invalid AppointmentResponse.end (${String(value)})`;
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
   * @returns the `participantType` property value as a CodeableConcept array
   */
  public getParticipantType(): CodeableConcept[] {
    return this.participantType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `participantType` property.
   *
   * @param value - the `participantType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParticipantType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AppointmentResponse.participantType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.participantType = value;
    } else {
      this.participantType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `participantType` array property.
   *
   * @param value - the `participantType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParticipantType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AppointmentResponse.participantType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initParticipantType();
      this.participantType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `participantType` property exists and has a value; `false` otherwise
   */
  public hasParticipantType(): boolean {
    return isDefinedList<CodeableConcept>(this.participantType) && this.participantType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `participantType` property
   */
  private initParticipantType(): void {
    if(!this.hasParticipantType()) {
      this.participantType = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `actor` property value as a Reference object; else an empty Reference object
   */
  public getActor(): Reference {
    return this.actor ?? new Reference();
  }

  /**
   * Assigns the provided Actor object value to the `actor` property.
   *
   * @decorator `@ReferenceTargets('AppointmentResponse.actor', ['Patient','Group','Practitioner','PractitionerRole','RelatedPerson','Device','HealthcareService','Location',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AppointmentResponse.actor', [
    'Patient',
  
    'Group',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Device',
  
    'HealthcareService',
  
    'Location',
  ])
  public setActor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
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
    return isDefined<Reference>(this.actor) && !this.actor.isEmpty();
  }

  /**
   * @returns the `participantStatus` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getParticipantStatusElement(): CodeType {
    return this.participantStatus ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `participantStatus` property.
   *
   * @param element - the `participantStatus` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParticipantStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid AppointmentResponse.participantStatus; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.participantStatus = element;
    } else {
      this.participantStatus = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `participantStatus` property exists and has a value; `false` otherwise
   */
  public hasParticipantStatusElement(): boolean {
    return isDefined<CodeType>(this.participantStatus) && !this.participantStatus.isEmpty();
  }

  /**
   * @returns the `participantStatus` property value as a fhirCode if defined; else null
   */
  public getParticipantStatus(): fhirCode | null {
    if (this.participantStatus?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.participantStatus.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `participantStatus` property.
   *
   * @param value - the `participantStatus` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParticipantStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid AppointmentResponse.participantStatus (${String(value)})`;
      this.participantStatus = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.participantStatus = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `participantStatus` property exists and has a value; `false` otherwise
   */
  public hasParticipantStatus(): boolean {
    return this.hasParticipantStatusElement();
  }

  /**
   * @returns the `comment` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getCommentElement(): MarkdownType {
    return this.comment ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `comment` property.
   *
   * @param element - the `comment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCommentElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid AppointmentResponse.comment; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.comment = element;
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasCommentElement(): boolean {
    return isDefined<MarkdownType>(this.comment) && !this.comment.isEmpty();
  }

  /**
   * @returns the `comment` property value as a fhirMarkdown if defined; else undefined
   */
  public getComment(): fhirMarkdown | undefined {
    return this.comment?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `comment` property.
   *
   * @param value - the `comment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComment(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid AppointmentResponse.comment (${String(value)})`;
      this.comment = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasComment(): boolean {
    return this.hasCommentElement();
  }

  /**
   * @returns the `recurring` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getRecurringElement(): BooleanType {
    return this.recurring ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `recurring` property.
   *
   * @param element - the `recurring` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecurringElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid AppointmentResponse.recurring; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.recurring = element;
    } else {
      this.recurring = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recurring` property exists and has a value; `false` otherwise
   */
  public hasRecurringElement(): boolean {
    return isDefined<BooleanType>(this.recurring) && !this.recurring.isEmpty();
  }

  /**
   * @returns the `recurring` property value as a fhirBoolean if defined; else undefined
   */
  public getRecurring(): fhirBoolean | undefined {
    return this.recurring?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `recurring` property.
   *
   * @param value - the `recurring` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecurring(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid AppointmentResponse.recurring (${String(value)})`;
      this.recurring = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.recurring = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recurring` property exists and has a value; `false` otherwise
   */
  public hasRecurring(): boolean {
    return this.hasRecurringElement();
  }

  /**
   * @returns the `occurrenceDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getOccurrenceDateElement(): DateType {
    return this.occurrenceDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `occurrenceDate` property.
   *
   * @param element - the `occurrenceDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOccurrenceDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid AppointmentResponse.occurrenceDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.occurrenceDate = element;
    } else {
      this.occurrenceDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrenceDate` property exists and has a value; `false` otherwise
   */
  public hasOccurrenceDateElement(): boolean {
    return isDefined<DateType>(this.occurrenceDate) && !this.occurrenceDate.isEmpty();
  }

  /**
   * @returns the `occurrenceDate` property value as a fhirDate if defined; else undefined
   */
  public getOccurrenceDate(): fhirDate | undefined {
    return this.occurrenceDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `occurrenceDate` property.
   *
   * @param value - the `occurrenceDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOccurrenceDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid AppointmentResponse.occurrenceDate (${String(value)})`;
      this.occurrenceDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.occurrenceDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrenceDate` property exists and has a value; `false` otherwise
   */
  public hasOccurrenceDate(): boolean {
    return this.hasOccurrenceDateElement();
  }

  /**
   * @returns the `recurrenceId` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getRecurrenceIdElement(): PositiveIntType {
    return this.recurrenceId ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `recurrenceId` property.
   *
   * @param element - the `recurrenceId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecurrenceIdElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid AppointmentResponse.recurrenceId; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.recurrenceId = element;
    } else {
      this.recurrenceId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recurrenceId` property exists and has a value; `false` otherwise
   */
  public hasRecurrenceIdElement(): boolean {
    return isDefined<PositiveIntType>(this.recurrenceId) && !this.recurrenceId.isEmpty();
  }

  /**
   * @returns the `recurrenceId` property value as a fhirPositiveInt if defined; else undefined
   */
  public getRecurrenceId(): fhirPositiveInt | undefined {
    return this.recurrenceId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `recurrenceId` property.
   *
   * @param value - the `recurrenceId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecurrenceId(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid AppointmentResponse.recurrenceId (${String(value)})`;
      this.recurrenceId = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.recurrenceId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recurrenceId` property exists and has a value; `false` otherwise
   */
  public hasRecurrenceId(): boolean {
    return this.hasRecurrenceIdElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AppointmentResponse';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.appointment,
      this.proposedNewTime,
      this.start,
      this.end,
      this.participantType,
      this.actor,
      this.participantStatus,
      this.comment,
      this.recurring,
      this.occurrenceDate,
      this.recurrenceId,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.appointment, this.participantStatus, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AppointmentResponse {
    const dest = new AppointmentResponse();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AppointmentResponse): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.appointment = this.appointment ? this.appointment.copy() : null;
    dest.proposedNewTime = this.proposedNewTime?.copy();
    dest.start = this.start?.copy();
    dest.end = this.end?.copy();
    const participantTypeList = copyListValues<CodeableConcept>(this.participantType);
    dest.participantType = participantTypeList.length === 0 ? undefined : participantTypeList;
    dest.actor = this.actor?.copy();
    dest.participantStatus = this.participantStatus ? this.participantStatus.copy() : null;
    dest.comment = this.comment?.copy();
    dest.recurring = this.recurring?.copy();
    dest.occurrenceDate = this.occurrenceDate?.copy();
    dest.recurrenceId = this.recurrenceId?.copy();
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

    if (this.hasAppointment()) {
      setFhirComplexJson(this.getAppointment(), 'appointment', jsonObj);
    } else {
      jsonObj['appointment'] = null;
    }

    if (this.hasProposedNewTimeElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getProposedNewTimeElement(), 'proposedNewTime', jsonObj);
    }

    if (this.hasStartElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getStartElement(), 'start', jsonObj);
    }

    if (this.hasEndElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getEndElement(), 'end', jsonObj);
    }

    if (this.hasParticipantType()) {
      setFhirComplexListJson(this.getParticipantType(), 'participantType', jsonObj);
    }

    if (this.hasActor()) {
      setFhirComplexJson(this.getActor(), 'actor', jsonObj);
    }

    if (this.hasParticipantStatusElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getParticipantStatusElement(), 'participantStatus', jsonObj);
    } else {
      jsonObj['participantStatus'] = null;
    }

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getCommentElement(), 'comment', jsonObj);
    }

    if (this.hasRecurringElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getRecurringElement(), 'recurring', jsonObj);
    }

    if (this.hasOccurrenceDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getOccurrenceDateElement(), 'occurrenceDate', jsonObj);
    }

    if (this.hasRecurrenceIdElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getRecurrenceIdElement(), 'recurrenceId', jsonObj);
    }

    return jsonObj;
  }
}

