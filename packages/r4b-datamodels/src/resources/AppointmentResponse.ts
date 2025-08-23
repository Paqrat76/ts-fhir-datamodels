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
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  InstantType,
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
  fhirCode,
  fhirCodeSchema,
  fhirInstant,
  fhirInstantSchema,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { ParticipationstatusEnum } from '../code-systems/ParticipationstatusEnum';

/**
 * AppointmentResponse Class
 *
 * @remarks
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 *
 * **FHIR Specification**
 * - **Short:** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection
 * - **Definition:** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR AppointmentResponse](http://hl7.org/fhir/StructureDefinition/AppointmentResponse)
 */
export class AppointmentResponse extends DomainResource implements IDomainResource {
  constructor(appointment: Reference | null = null, participantStatus: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.participationstatusEnum = new ParticipationstatusEnum();

    this.appointment = null;
    if (isDefined<Reference>(appointment)) {
      this.setAppointment(appointment);
    }

    this.participantStatus = constructorCodeValueAsEnumCodeType<ParticipationstatusEnum>(
      participantStatus,
      ParticipationstatusEnum,
      this.participationstatusEnum,
      'AppointmentResponse.participantStatus',
    );
  }

  /**
   * Parse the provided `AppointmentResponse` JSON to instantiate the AppointmentResponse data model.
   *
   * @param sourceJson - JSON representing FHIR `AppointmentResponse`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AppointmentResponse
   * @returns AppointmentResponse data model or undefined for `AppointmentResponse`
   * @throws {@link FhirError} if the provided JSON is missing required properties
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

    fieldName = 'appointment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setAppointment(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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
        missingReqdProperties.push(sourceField);
      } else {
        instance.setParticipantStatusElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
   * - **Short:** Person, Location, HealthcareService, or Device
   * - **Definition:** A Person, Location, HealthcareService, or Device that is participating in the appointment.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
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
   * FHIR CodeSystem: Participationstatus
   *
   * @see {@link ParticipationstatusEnum }
   */
  private readonly participationstatusEnum: ParticipationstatusEnum;

  /**
   * AppointmentResponse.participantStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** accepted | declined | tentative | needs-action
   * - **Definition:** Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.
   * - **Comment:** This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** Not known why this is labelled a modifier
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
   */
  private participantStatus: EnumCodeType | null;

  /**
   * AppointmentResponse.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional comments
   * - **Definition:** Additional comments about the appointment.
   * - **Comment:** This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private comment?: StringType | undefined;

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
   * @returns the `appointment` property value as a Reference object if defined; else null
   */
  public getAppointment(): Reference | null {
    return this.appointment;
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
  public setAppointment(value: Reference): this {
    assertIsDefined<Reference>(value, `AppointmentResponse.appointment is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.appointment = value;
    return this;
  }

  /**
   * @returns `true` if the `appointment` property exists and has a value; `false` otherwise
   */
  public hasAppointment(): boolean {
    return isDefined<Reference>(this.appointment) && !this.appointment.isEmpty();
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
   * @decorator `@ReferenceTargets('AppointmentResponse.actor', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Device','HealthcareService','Location',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AppointmentResponse.actor', [
    'Patient',
  
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
   * @returns the `participantStatus` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
   */
  public getParticipantStatusEnumType(): EnumCodeType | null {
    return this.participantStatus;
  }

  /**
   * Assigns the provided EnumCodeType value to the `participantStatus` property.
   *
   * @param enumType - the `participantStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
   */
  public setParticipantStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `AppointmentResponse.participantStatus is required`);
    const errMsgPrefix = `Invalid AppointmentResponse.participantStatus`;
    assertEnumCodeType<ParticipationstatusEnum>(enumType, ParticipationstatusEnum, errMsgPrefix);
    this.participantStatus = enumType;
    return this;
  }

  /**
   * @returns `true` if the `participantStatus` property exists and has a value; `false` otherwise
   */
  public hasParticipantStatusEnumType(): boolean {
    return isDefined<EnumCodeType>(this.participantStatus) && !this.participantStatus.isEmpty() && this.participantStatus.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `participantStatus` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
   */
  public getParticipantStatusElement(): CodeType | null {
    if (this.participantStatus === null) {
      return null;
    }
    return this.participantStatus as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `participantStatus` property.
   *
   * @param element - the `participantStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
   */
  public setParticipantStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `AppointmentResponse.participantStatus is required`);
    const optErrMsg = `Invalid AppointmentResponse.participantStatus; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.participantStatus = new EnumCodeType(element, this.participationstatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `participantStatus` property exists and has a value; `false` otherwise
   */
  public hasParticipantStatusElement(): boolean {
    return this.hasParticipantStatusEnumType();
  }

  /**
   * @returns the `participantStatus` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
   */
  public getParticipantStatus(): fhirCode | null {
    if (this.participantStatus === null) {
      return null;
    }
    return this.participantStatus.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `participantStatus` property.
   *
   * @param value - the `participantStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
   */
  public setParticipantStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `AppointmentResponse.participantStatus is required`);
    const optErrMsg = `Invalid AppointmentResponse.participantStatus (${String(value)})`;
    this.participantStatus = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.participationstatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `participantStatus` property exists and has a value; `false` otherwise
   */
  public hasParticipantStatus(): boolean {
    return this.hasParticipantStatusEnumType();
  }

  /**
   * @returns the `comment` property value as a StringType object if defined; else an empty StringType object
   */
  public getCommentElement(): StringType {
    return this.comment ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `comment` property.
   *
   * @param element - the `comment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCommentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid AppointmentResponse.comment; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
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
    return isDefined<StringType>(this.comment) && !this.comment.isEmpty();
  }

  /**
   * @returns the `comment` property value as a fhirString if defined; else undefined
   */
  public getComment(): fhirString | undefined {
    return this.comment?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `comment` property.
   *
   * @param value - the `comment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComment(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid AppointmentResponse.comment (${String(value)})`;
      this.comment = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
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
      this.start,
      this.end,
      this.participantType,
      this.actor,
      this.participantStatus,
      this.comment,
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
    dest.start = this.start?.copy();
    dest.end = this.end?.copy();
    const participantTypeList = copyListValues<CodeableConcept>(this.participantType);
    dest.participantType = participantTypeList.length === 0 ? undefined : participantTypeList;
    dest.actor = this.actor?.copy();
    dest.participantStatus = this.participantStatus ? this.participantStatus.copy() : null;
    dest.comment = this.comment?.copy();
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

    if (this.hasAppointment()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getAppointment()!, 'appointment', jsonObj);
    } else {
      missingReqdProperties.push(`AppointmentResponse.appointment`);
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getParticipantStatusElement()!, 'participantStatus', jsonObj);
    } else {
      missingReqdProperties.push(`AppointmentResponse.participantStatus`);
    }

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCommentElement(), 'comment', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

