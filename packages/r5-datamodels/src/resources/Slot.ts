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
 * Slot Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Slot
 * StructureDefinition.name: Slot
 * StructureDefinition.description: A slot of time on a schedule that may be available for booking appointments.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BooleanType,
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IDomainResource,
  InstantType,
  JSON,
  PrimitiveType,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
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
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { SlotstatusEnum } from '../code-systems/SlotstatusEnum';

/**
 * Slot Class
 *
 * @remarks
 * A slot of time on a schedule that may be available for booking appointments.
 *
 * **FHIR Specification**
 * - **Short:** A slot of time on a schedule that may be available for booking appointments
 * - **Definition:** A slot of time on a schedule that may be available for booking appointments.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Slot](http://hl7.org/fhir/StructureDefinition/Slot)
 */
export class Slot extends DomainResource implements IDomainResource {
  constructor(schedule: Reference | null = null, status: EnumCodeType | CodeType | fhirCode | null = null, start: InstantType | fhirInstant | null = null, end: InstantType | fhirInstant | null = null) {
    super();

    this.slotstatusEnum = new SlotstatusEnum();

    this.schedule = null;
    if (isDefined<Reference>(schedule)) {
      this.setSchedule(schedule);
    }

    this.status = constructorCodeValueAsEnumCodeType<SlotstatusEnum>(
      status,
      SlotstatusEnum,
      this.slotstatusEnum,
      'Slot.status',
    );

    this.start = null;
    if (isDefined<InstantType | fhirInstant>(start)) {
      if (start instanceof PrimitiveType) {
        this.setStartElement(start);
      } else {
        this.setStart(start);
      }
    }

    this.end = null;
    if (isDefined<InstantType | fhirInstant>(end)) {
      if (end instanceof PrimitiveType) {
        this.setEndElement(end);
      } else {
        this.setEnd(end);
      }
    }
  }

  /**
   * Parse the provided `Slot` JSON to instantiate the Slot data model.
   *
   * @param sourceJson - JSON representing FHIR `Slot`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Slot
   * @returns Slot data model or undefined for `Slot`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Slot | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Slot';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Slot();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Slot');
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

    fieldName = 'serviceCategory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addServiceCategory(datatype);
        }
      });
    }

    fieldName = 'serviceType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addServiceType(datatype);
        }
      });
    }

    fieldName = 'specialty';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSpecialty(datatype);
        }
      });
    }

    fieldName = 'appointmentType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAppointmentType(datatype);
        }
      });
    }

    fieldName = 'schedule';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setSchedule(null);
      } else {
        instance.setSchedule(datatype);
      }
    } else {
      instance.setSchedule(null);
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

    fieldName = 'start';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setStart(null);
      } else {
        instance.setStartElement(datatype);
      }
    } else {
      instance.setStart(null);
    }

    fieldName = 'end';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setEnd(null);
      } else {
        instance.setEndElement(datatype);
      }
    } else {
      instance.setEnd(null);
    }

    fieldName = 'overbooked';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setOverbookedElement(datatype);
    }

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    return instance;
  }

  /**
   * Slot.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External Ids for this item
   * - **Definition:** External Ids for this item.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Slot.serviceCategory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A broad categorization of the service that is to be performed during this appointment
   * - **Definition:** A broad categorization of the service that is to be performed during this appointment.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private serviceCategory?: CodeableConcept[] | undefined;

  /**
   * Slot.serviceType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the Schedule resource
   * - **Definition:** The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the Schedule resource.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private serviceType?: CodeableReference[] | undefined;

  /**
   * Slot.specialty Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specialty of a practitioner that would be required to perform the service requested in this appointment
   * - **Definition:** The specialty of a practitioner that would be required to perform the service requested in this appointment.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private specialty?: CodeableConcept[] | undefined;

  /**
   * Slot.appointmentType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The style of appointment or patient that may be booked in the slot (not service type)
   * - **Definition:** The style of appointment or patient that may be booked in the slot (not service type).
   * - **Comment:** A slot may be allow multiple appointment types, but when booked, would only be used for one of the given appointment types.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private appointmentType?: CodeableConcept[] | undefined;

  /**
   * Slot.schedule Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The schedule resource that this slot defines an interval of status information
   * - **Definition:** The schedule resource that this slot defines an interval of status information.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Schedule',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private schedule: Reference | null;

  /**
   * FHIR CodeSystem: Slotstatus
   *
   * @see {@link SlotstatusEnum }
   */
  private readonly slotstatusEnum: SlotstatusEnum;

  /**
   * Slot.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** busy | free | busy-unavailable | busy-tentative | entered-in-error
   * - **Definition:** busy | free | busy-unavailable | busy-tentative | entered-in-error.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SlotstatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Slot.start Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date/Time that the slot is to begin
   * - **Definition:** Date/Time that the slot is to begin.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private start: InstantType | null;

  /**
   * Slot.end Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date/Time that the slot is to conclude
   * - **Definition:** Date/Time that the slot is to conclude.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private end: InstantType | null;

  /**
   * Slot.overbooked Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** This slot has already been overbooked, appointments are unlikely to be accepted for this time
   * - **Definition:** This slot has already been overbooked, appointments are unlikely to be accepted for this time.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private overbooked?: BooleanType | undefined;

  /**
   * Slot.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments on the slot to describe any extended information. Such as custom constraints on the slot
   * - **Definition:** Comments on the slot to describe any extended information. Such as custom constraints on the slot.
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
      const optErrMsg = `Invalid Slot.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Slot.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `serviceCategory` property value as a CodeableConcept array
   */
  public getServiceCategory(): CodeableConcept[] {
    return this.serviceCategory ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `serviceCategory` property.
   *
   * @param value - the `serviceCategory` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setServiceCategory(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Slot.serviceCategory; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.serviceCategory = value;
    } else {
      this.serviceCategory = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `serviceCategory` array property.
   *
   * @param value - the `serviceCategory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addServiceCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Slot.serviceCategory; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initServiceCategory();
      this.serviceCategory?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `serviceCategory` property exists and has a value; `false` otherwise
   */
  public hasServiceCategory(): boolean {
    return isDefinedList<CodeableConcept>(this.serviceCategory) && this.serviceCategory.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `serviceCategory` property
   */
  private initServiceCategory(): void {
    if(!this.hasServiceCategory()) {
      this.serviceCategory = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `serviceType` property value as a CodeableReference array
   */
  public getServiceType(): CodeableReference[] {
    return this.serviceType ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `serviceType` property.
   *
   * @param value - the `serviceType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setServiceType(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid Slot.serviceType; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.serviceType = value;
    } else {
      this.serviceType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `serviceType` array property.
   *
   * @param value - the `serviceType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addServiceType(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Slot.serviceType; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initServiceType();
      this.serviceType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `serviceType` property exists and has a value; `false` otherwise
   */
  public hasServiceType(): boolean {
    return isDefinedList<CodeableReference>(this.serviceType) && this.serviceType.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `serviceType` property
   */
  private initServiceType(): void {
    if(!this.hasServiceType()) {
      this.serviceType = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `specialty` property value as a CodeableConcept array
   */
  public getSpecialty(): CodeableConcept[] {
    return this.specialty ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `specialty` property.
   *
   * @param value - the `specialty` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecialty(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Slot.specialty; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.specialty = value;
    } else {
      this.specialty = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `specialty` array property.
   *
   * @param value - the `specialty` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSpecialty(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Slot.specialty; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSpecialty();
      this.specialty?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specialty` property exists and has a value; `false` otherwise
   */
  public hasSpecialty(): boolean {
    return isDefinedList<CodeableConcept>(this.specialty) && this.specialty.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `specialty` property
   */
  private initSpecialty(): void {
    if(!this.hasSpecialty()) {
      this.specialty = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `appointmentType` property value as a CodeableConcept array
   */
  public getAppointmentType(): CodeableConcept[] {
    return this.appointmentType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `appointmentType` property.
   *
   * @param value - the `appointmentType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAppointmentType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Slot.appointmentType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.appointmentType = value;
    } else {
      this.appointmentType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `appointmentType` array property.
   *
   * @param value - the `appointmentType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAppointmentType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Slot.appointmentType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initAppointmentType();
      this.appointmentType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `appointmentType` property exists and has a value; `false` otherwise
   */
  public hasAppointmentType(): boolean {
    return isDefinedList<CodeableConcept>(this.appointmentType) && this.appointmentType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `appointmentType` property
   */
  private initAppointmentType(): void {
    if(!this.hasAppointmentType()) {
      this.appointmentType = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `schedule` property value as a Reference object if defined; else an empty Reference object
   */
  public getSchedule(): Reference {
    return this.schedule ?? new Reference();
  }

  /**
   * Assigns the provided Schedule object value to the `schedule` property.
   *
   * @decorator `@ReferenceTargets('Slot.schedule', ['Schedule',])`
   *
   * @param value - the `schedule` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Slot.schedule', [
    'Schedule',
  ])
  public setSchedule(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.schedule = value;
    } else {
      this.schedule = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `schedule` property exists and has a value; `false` otherwise
   */
  public hasSchedule(): boolean {
    return isDefined<Reference>(this.schedule) && !this.schedule.isEmpty();
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link SlotstatusEnum }
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
   * @see CodeSystem Enumeration: {@link SlotstatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Slot.status`;
      assertEnumCodeType<SlotstatusEnum>(enumType, SlotstatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link SlotstatusEnum }
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
   * @see CodeSystem Enumeration: {@link SlotstatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Slot.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.slotstatusEnum);
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
   * @see CodeSystem Enumeration: {@link SlotstatusEnum }
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
   * @see CodeSystem Enumeration: {@link SlotstatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Slot.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.slotstatusEnum);
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
  public setStartElement(element: InstantType | undefined | null): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid Slot.start; Provided value is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
      this.start = element;
    } else {
      this.start = null;
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
   * @returns the `start` property value as a fhirInstant if defined; else null
   */
  public getStart(): fhirInstant | null {
    if (this.start?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.start.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `start` property.
   *
   * @param value - the `start` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStart(value: fhirInstant | undefined | null): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid Slot.start (${String(value)})`;
      this.start = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    } else {
      this.start = null;
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
  public setEndElement(element: InstantType | undefined | null): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid Slot.end; Provided value is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
      this.end = element;
    } else {
      this.end = null;
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
   * @returns the `end` property value as a fhirInstant if defined; else null
   */
  public getEnd(): fhirInstant | null {
    if (this.end?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.end.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `end` property.
   *
   * @param value - the `end` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEnd(value: fhirInstant | undefined | null): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid Slot.end (${String(value)})`;
      this.end = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    } else {
      this.end = null;
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
   * @returns the `overbooked` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getOverbookedElement(): BooleanType {
    return this.overbooked ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `overbooked` property.
   *
   * @param element - the `overbooked` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOverbookedElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Slot.overbooked; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.overbooked = element;
    } else {
      this.overbooked = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `overbooked` property exists and has a value; `false` otherwise
   */
  public hasOverbookedElement(): boolean {
    return isDefined<BooleanType>(this.overbooked) && !this.overbooked.isEmpty();
  }

  /**
   * @returns the `overbooked` property value as a fhirBoolean if defined; else undefined
   */
  public getOverbooked(): fhirBoolean | undefined {
    return this.overbooked?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `overbooked` property.
   *
   * @param value - the `overbooked` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOverbooked(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Slot.overbooked (${String(value)})`;
      this.overbooked = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.overbooked = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `overbooked` property exists and has a value; `false` otherwise
   */
  public hasOverbooked(): boolean {
    return this.hasOverbookedElement();
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
      const optErrMsg = `Invalid Slot.comment; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Slot.comment (${String(value)})`;
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
    return 'Slot';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.serviceCategory,
      this.serviceType,
      this.specialty,
      this.appointmentType,
      this.schedule,
      this.status,
      this.start,
      this.end,
      this.overbooked,
      this.comment,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.schedule, this.status, this.start, this.end, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Slot {
    const dest = new Slot();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Slot): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const serviceCategoryList = copyListValues<CodeableConcept>(this.serviceCategory);
    dest.serviceCategory = serviceCategoryList.length === 0 ? undefined : serviceCategoryList;
    const serviceTypeList = copyListValues<CodeableReference>(this.serviceType);
    dest.serviceType = serviceTypeList.length === 0 ? undefined : serviceTypeList;
    const specialtyList = copyListValues<CodeableConcept>(this.specialty);
    dest.specialty = specialtyList.length === 0 ? undefined : specialtyList;
    const appointmentTypeList = copyListValues<CodeableConcept>(this.appointmentType);
    dest.appointmentType = appointmentTypeList.length === 0 ? undefined : appointmentTypeList;
    dest.schedule = this.schedule ? this.schedule.copy() : null;
    dest.status = this.status ? this.status.copy() : null;
    dest.start = this.start ? this.start.copy() : null;
    dest.end = this.end ? this.end.copy() : null;
    dest.overbooked = this.overbooked?.copy();
    dest.comment = this.comment?.copy();
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

    if (this.hasServiceCategory()) {
      setFhirComplexListJson(this.getServiceCategory(), 'serviceCategory', jsonObj);
    }

    if (this.hasServiceType()) {
      setFhirComplexListJson(this.getServiceType(), 'serviceType', jsonObj);
    }

    if (this.hasSpecialty()) {
      setFhirComplexListJson(this.getSpecialty(), 'specialty', jsonObj);
    }

    if (this.hasAppointmentType()) {
      setFhirComplexListJson(this.getAppointmentType(), 'appointmentType', jsonObj);
    }

    if (this.hasSchedule()) {
      setFhirComplexJson(this.getSchedule(), 'schedule', jsonObj);
    } else {
      jsonObj['schedule'] = null;
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasStartElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getStartElement(), 'start', jsonObj);
    } else {
      jsonObj['start'] = null;
    }

    if (this.hasEndElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getEndElement(), 'end', jsonObj);
    } else {
      jsonObj['end'] = null;
    }

    if (this.hasOverbookedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getOverbookedElement(), 'overbooked', jsonObj);
    }

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCommentElement(), 'comment', jsonObj);
    }

    return jsonObj;
  }
}

