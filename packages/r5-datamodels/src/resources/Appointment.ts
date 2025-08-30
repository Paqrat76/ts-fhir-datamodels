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
 * Appointment Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Appointment
 * StructureDefinition.name: Appointment
 * StructureDefinition.description: A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  BooleanType,
  CodeType,
  DateTimeType,
  DateType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  InstantType,
  JSON,
  PositiveIntType,
  PrimitiveType,
  PrimitiveTypeJson,
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
  fhirDate,
  fhirDateSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirInstant,
  fhirInstantSchema,
  fhirPositiveInt,
  fhirPositiveIntSchema,
  fhirString,
  fhirStringSchema,
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
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, CodeableReference, Coding, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference, VirtualServiceDetail } from '../complex-types/complex-datatypes';
import { AppointmentstatusEnum } from '../code-systems/AppointmentstatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { ParticipationstatusEnum } from '../code-systems/ParticipationstatusEnum';

/**
 * Appointment Class
 *
 * @remarks
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 *
 * **FHIR Specification**
 * - **Short:** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s)
 * - **Definition:** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Appointment](http://hl7.org/fhir/StructureDefinition/Appointment)
 */
export class Appointment extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, participant: AppointmentParticipantComponent[] | null = null) {
    super();

    this.appointmentstatusEnum = new AppointmentstatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<AppointmentstatusEnum>(
      status,
      AppointmentstatusEnum,
      this.appointmentstatusEnum,
      'Appointment.status',
    );

    this.participant = null;
    if (isDefinedList<AppointmentParticipantComponent>(participant)) {
      this.setParticipant(participant);
    }
  }

  /**
   * Parse the provided `Appointment` JSON to instantiate the Appointment data model.
   *
   * @param sourceJson - JSON representing FHIR `Appointment`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Appointment
   * @returns Appointment data model or undefined for `Appointment`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Appointment | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Appointment';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Appointment();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Appointment');
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

    fieldName = 'cancellationReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCancellationReason(datatype);
    }

    fieldName = 'class';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addClass(datatype);
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
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAppointmentType(datatype);
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

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPriority(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
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

    fieldName = 'virtualService';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: VirtualServiceDetail | undefined = VirtualServiceDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addVirtualService(datatype);
        }
      });
    }

    fieldName = 'supportingInformation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSupportingInformation(datatype);
        }
      });
  }

    fieldName = 'previousAppointment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPreviousAppointment(datatype);
    }

    fieldName = 'originatingAppointment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOriginatingAppointment(datatype);
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

    fieldName = 'minutesDuration';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setMinutesDurationElement(datatype);
    }

    fieldName = 'requestedPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Period | undefined = Period.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRequestedPeriod(datatype);
        }
      });
    }

    fieldName = 'slot';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSlot(datatype);
        }
      });
  }

    fieldName = 'account';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAccount(datatype);
        }
      });
  }

    fieldName = 'created';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setCreatedElement(datatype);
    }

    fieldName = 'cancellationDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setCancellationDateElement(datatype);
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

    fieldName = 'patientInstruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPatientInstruction(datatype);
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

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'participant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AppointmentParticipantComponent | undefined = AppointmentParticipantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setParticipant(null);
        } else {
          instance.addParticipant(component);
        }
      });
    } else {
      instance.setParticipant(null);
    }

    fieldName = 'recurrenceId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setRecurrenceIdElement(datatype);
    }

    fieldName = 'occurrenceChanged';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setOccurrenceChangedElement(datatype);
    }

    fieldName = 'recurrenceTemplate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AppointmentRecurrenceTemplateComponent | undefined = AppointmentRecurrenceTemplateComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRecurrenceTemplate(component);
        }
      });
    }

    return instance;
  }

  /**
   * Appointment.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External Ids for this item
   * - **Definition:** This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: Appointmentstatus
   *
   * @see {@link AppointmentstatusEnum }
   */
  private readonly appointmentstatusEnum: AppointmentstatusEnum;

  /**
   * Appointment.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist
   * - **Definition:** The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.
   * - **Comment:** If the Appointment\'s status is "cancelled" then all participants are expected to have their calendars released for the appointment period, and as such any Slots that were marked as BUSY can be re-set to FREE. This element is labeled as a modifier because the status contains the code entered-in-error that mark the Appointment as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link AppointmentstatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Appointment.cancellationReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The coded reason for the appointment being cancelled
   * - **Definition:** The coded reason for the appointment being cancelled. This is often used in reporting/billing/futher processing to determine if further actions are required, or specific fees apply.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private cancellationReason?: CodeableConcept | undefined;

  /**
   * Appointment.class Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification when becoming an encounter
   * - **Definition:** Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private class_?: CodeableConcept[] | undefined;

  /**
   * Appointment.serviceCategory Element
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
   * Appointment.serviceType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific service that is to be performed during this appointment
   * - **Definition:** The specific service that is to be performed during this appointment.
   * - **Comment:** For a provider to provider appointment the code "FOLLOWUP" may be appropriate, as this is expected to be discussing some patient that was seen in the past.
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
   * Appointment.specialty Element
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
   * Appointment.appointmentType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The style of appointment or patient that has been booked in the slot (not service type)
   * - **Definition:** The style of appointment or patient that has been booked in the slot (not service type).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private appointmentType?: CodeableConcept | undefined;

  /**
   * Appointment.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason this appointment is scheduled
   * - **Definition:** The reason that this appointment is being scheduled. This is more clinical than administrative. This can be coded, or as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reason?: CodeableReference[] | undefined;

  /**
   * Appointment.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used to make informed decisions if needing to re-prioritize
   * - **Definition:** The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).
   * - **Comment:** Seeking implementer feedback on this property and how interoperable it is. Using an extension to record a CodeableConcept for named values may be tested at a future connectathon.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private priority?: CodeableConcept | undefined;

  /**
   * Appointment.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Shown on a subject line in a meeting request, or appointment list
   * - **Definition:** The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the note field.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * Appointment.replaces Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Appointment replaced by this Appointment
   * - **Definition:** Appointment replaced by this Appointment in cases where there is a cancellation, the details of the cancellation can be found in the cancellationReason property (on the referenced resource).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Appointment',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private replaces?: Reference[] | undefined;

  /**
   * Appointment.virtualService Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Connection details of a virtual service (e.g. conference call)
   * - **Definition:** Connection details of a virtual service (e.g. conference call).
   * - **Comment:** There are two types of virtual meetings that often exist: * a persistent, virtual meeting room that can only be used for a single purpose at a time,  * and a dynamic virtual meeting room that is generated on demand for a specific purpose. Implementers may consider using Location.virtualService for persistent meeting rooms. If each participant would have a different meeting link, an extension using the VirtualServiceContactDetail  can be applied to the Appointment.participant BackboneElement.
   * - **FHIR Type:** `VirtualServiceDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private virtualService?: VirtualServiceDetail[] | undefined;

  /**
   * Appointment.supportingInformation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information to support the appointment
   * - **Definition:** Additional information to support the appointment provided when making the appointment.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private supportingInformation?: Reference[] | undefined;

  /**
   * Appointment.previousAppointment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The previous appointment in a series
   * - **Definition:** The previous appointment in a series of related appointments.
   * - **Comment:** This property is intended for use when representing a series of related appointments.  For example, in a nuclear medicine procedure, where there is an appointment for the injection of the isotopes, and then a subsequent appointment for the scan, the scan appointment would refer to the injection appointment via Appointment.previousAppointment.  For representing recurring appointments, see the guidance on recurring vs. series appointments.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Appointment',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private previousAppointment?: Reference | undefined;

  /**
   * Appointment.originatingAppointment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The originating appointment in a recurring set of appointments
   * - **Definition:** The originating appointment in a recurring set of related appointments.
   * - **Comment:** This property is intended for use when representing a recurring set of related appointments. For example, a patient undergoing physical therapy may have a recurring appointment every Tuesday and Thursday.  Each occurrence of the set will refer to the originating appointment, which contains the recurring template information.  For representing appointment series, see the guidance on recurring vs. series appointments.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Appointment',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private originatingAppointment?: Reference | undefined;

  /**
   * Appointment.start Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When appointment is to take place
   * - **Definition:** Date/Time that the appointment is to take place.
   * - **Comment:** If actual start/end times are not known then the requested period start/end can be used.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private start?: InstantType | undefined;

  /**
   * Appointment.end Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When appointment is to conclude
   * - **Definition:** Date/Time that the appointment is to conclude.
   * - **Comment:** If actual start/end times are not known then the requested period start/end can be used.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private end?: InstantType | undefined;

  /**
   * Appointment.minutesDuration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Can be less than start/end (e.g. estimate)
   * - **Definition:** Number of minutes that the appointment is to take. This can be less than the duration between the start and end times.  For example, where the actual time of appointment is only an estimate or if a 30 minute appointment is being requested, but any time would work.  Also, if there is, for example, a planned 15 minute break in the middle of a long appointment, the duration may be 15 minutes less than the difference between the start and end.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private minutesDuration?: PositiveIntType | undefined;

  /**
   * Appointment.requestedPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Potential date/time interval(s) requested to allocate the appointment within
   * - **Definition:** A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within. The duration (usually in minutes) could also be provided to indicate the length of the appointment to fill and populate the start/end times for the actual allocated time. However, in other situations the duration may be calculated by the scheduling system.
   * - **Comment:** This does not introduce a capacity for recurring appointments.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requestedPeriod?: Period[] | undefined;

  /**
   * Appointment.slot Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The slots that this appointment is filling
   * - **Definition:** The slots from the participants\' schedules that will be filled by the appointment.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Slot',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private slot?: Reference[] | undefined;

  /**
   * Appointment.account Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The set of accounts that may be used for billing for this Appointment
   * - **Definition:** The set of accounts that is expected to be used for billing the activities that result from this Appointment.
   * - **Comment:** The specified account(s) could be those identified during pre-registration workflows in preparation for an upcoming Encounter.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Account',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private account?: Reference[] | undefined;

  /**
   * Appointment.created Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date that this appointment was initially created
   * - **Definition:** The date that this appointment was initially created. This could be different to the meta.lastModified value on the initial entry, as this could have been before the resource was created on the FHIR server, and should remain unchanged over the lifespan of the appointment.
   * - **Comment:** This property is required for many use cases where the age of an appointment is considered in processing workflows for scheduling and billing of appointments.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private created?: DateTimeType | undefined;

  /**
   * Appointment.cancellationDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the appointment was cancelled
   * - **Definition:** The date/time describing when the appointment was cancelled.
   * - **Comment:** If the appointment was cancelled multiple times, this would reflect the most recent cancellation.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private cancellationDate?: DateTimeType | undefined;

  /**
   * Appointment.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional comments
   * - **Definition:** Additional notes/comments about the appointment.
   * - **Comment:** Additional text to aid in facilitating the appointment. For instance, a note might be, "patient should proceed immediately to infusion room upon arrival" Where this is a planned appointment and the start/end dates are not set then this field can be used to provide additional guidance on the details of the appointment request, including any restrictions on when to book it. Typically only the concept.text will be used, however occasionally a reference to some generic documentation (or specific) and also supports coded instructions if/when they are required.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Appointment.patientInstruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Detailed information and instructions for the patient
   * - **Definition:** While Appointment.note contains information for internal use, Appointment.patientInstructions is used to capture patient facing information about the Appointment (e.g. please bring your referral or fast from 8pm night before).
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *       'http://hl7.org/fhir/StructureDefinition/Binary',
   *       'http://hl7.org/fhir/StructureDefinition/Communication',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private patientInstruction?: CodeableReference[] | undefined;

  /**
   * Appointment.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The request this appointment is allocated to assess
   * - **Definition:** The request this appointment is allocated to assess (e.g. incoming referral or procedure request).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private basedOn?: Reference[] | undefined;

  /**
   * Appointment.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The patient or group associated with the appointment
   * - **Definition:** The patient or group associated with the appointment, if they are to be present (usually) then they should also be included in the participant backbone element.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * Appointment.participant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Participants involved in appointment
   * - **Definition:** List of participants involved in the appointment.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private participant: AppointmentParticipantComponent[] | null;

  /**
   * Appointment.recurrenceId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The sequence number in the recurrence
   * - **Definition:** The sequence number that identifies a specific appointment in a recurring pattern.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recurrenceId?: PositiveIntType | undefined;

  /**
   * Appointment.occurrenceChanged Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates that this appointment varies from a recurrence pattern
   * - **Definition:** This appointment varies from the recurring pattern.
   * - **Comment:** For example, if a patient has physical therapy appointments every Tuesday and Thursday, but due to a national holiday, a single occurrence was rescheduled to a different day, while the rest of the recurring series remained on Tuesday / Thursday.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private occurrenceChanged?: BooleanType | undefined;

  /**
   * Appointment.recurrenceTemplate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details of the recurrence pattern/template used to generate occurrences
   * - **Definition:** The details of the recurrence pattern or template that is used to generate recurring appointments.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recurrenceTemplate?: AppointmentRecurrenceTemplateComponent[] | undefined;

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
      const optErrMsg = `Invalid Appointment.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Appointment.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link AppointmentstatusEnum }
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
   * @see CodeSystem Enumeration: {@link AppointmentstatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Appointment.status`;
      assertEnumCodeType<AppointmentstatusEnum>(enumType, AppointmentstatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link AppointmentstatusEnum }
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
   * @see CodeSystem Enumeration: {@link AppointmentstatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Appointment.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.appointmentstatusEnum);
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
   * @see CodeSystem Enumeration: {@link AppointmentstatusEnum }
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
   * @see CodeSystem Enumeration: {@link AppointmentstatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Appointment.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.appointmentstatusEnum);
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
   * @returns the `cancellationReason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCancellationReason(): CodeableConcept {
    return this.cancellationReason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CancellationReason object value to the `cancellationReason` property.
   *
   * @param value - the `cancellationReason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCancellationReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Appointment.cancellationReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.cancellationReason = value;
    } else {
      this.cancellationReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cancellationReason` property exists and has a value; `false` otherwise
   */
  public hasCancellationReason(): boolean {
    return isDefined<CodeableConcept>(this.cancellationReason) && !this.cancellationReason.isEmpty();
  }

  /**
   * @returns the `class_` property value as a CodeableConcept array
   */
  public getClass(): CodeableConcept[] {
    return this.class_ ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `class_` property.
   *
   * @param value - the `class_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClass(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Appointment.class; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.class_ = value;
    } else {
      this.class_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `class_` array property.
   *
   * @param value - the `class_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClass(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Appointment.class; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initClass();
      this.class_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `class_` property exists and has a value; `false` otherwise
   */
  public hasClass(): boolean {
    return isDefinedList<CodeableConcept>(this.class_) && this.class_.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `class_` property
   */
  private initClass(): void {
    if(!this.hasClass()) {
      this.class_ = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid Appointment.serviceCategory; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Appointment.serviceCategory; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Appointment.serviceType; Provided value array has an element that is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid Appointment.serviceType; Provided element is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid Appointment.specialty; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Appointment.specialty; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `appointmentType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAppointmentType(): CodeableConcept {
    return this.appointmentType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AppointmentType object value to the `appointmentType` property.
   *
   * @param value - the `appointmentType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAppointmentType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Appointment.appointmentType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.appointmentType = value;
    } else {
      this.appointmentType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `appointmentType` property exists and has a value; `false` otherwise
   */
  public hasAppointmentType(): boolean {
    return isDefined<CodeableConcept>(this.appointmentType) && !this.appointmentType.isEmpty();
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
      const optErrMsg = `Invalid Appointment.reason; Provided value array has an element that is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid Appointment.reason; Provided element is not an instance of CodeableReference.`;
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
   * @returns the `priority` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPriority(): CodeableConcept {
    return this.priority ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Priority object value to the `priority` property.
   *
   * @param value - the `priority` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPriority(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Appointment.priority; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.priority = value;
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriority(): boolean {
    return isDefined<CodeableConcept>(this.priority) && !this.priority.isEmpty();
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
      const optErrMsg = `Invalid Appointment.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Appointment.description (${String(value)})`;
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
   * @returns the `replaces` property value as a Reference array
   */
  public getReplaces(): Reference[] {
    return this.replaces ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `replaces` property.
   *
   * @decorator `@ReferenceTargets('Appointment.replaces', ['Appointment',])`
   *
   * @param value - the `replaces` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.replaces', [
    'Appointment',
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
   * @decorator `@ReferenceTargets('Appointment.replaces', ['Appointment',])`
   *
   * @param value - the `replaces` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.replaces', [
    'Appointment',
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
   * @returns the `virtualService` property value as a VirtualServiceDetail array
   */
  public getVirtualService(): VirtualServiceDetail[] {
    return this.virtualService ?? ([] as VirtualServiceDetail[]);
  }

  /**
   * Assigns the provided VirtualServiceDetail array value to the `virtualService` property.
   *
   * @param value - the `virtualService` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVirtualService(value: VirtualServiceDetail[] | undefined): this {
    if (isDefinedList<VirtualServiceDetail>(value)) {
      const optErrMsg = `Invalid Appointment.virtualService; Provided value array has an element that is not an instance of VirtualServiceDetail.`;
      assertFhirTypeList<VirtualServiceDetail>(value, VirtualServiceDetail, optErrMsg);
      this.virtualService = value;
    } else {
      this.virtualService = undefined;
    }
    return this;
  }

  /**
   * Add the provided VirtualServiceDetail value to the `virtualService` array property.
   *
   * @param value - the `virtualService` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addVirtualService(value: VirtualServiceDetail | undefined): this {
    if (isDefined<VirtualServiceDetail>(value)) {
      const optErrMsg = `Invalid Appointment.virtualService; Provided element is not an instance of VirtualServiceDetail.`;
      assertFhirType<VirtualServiceDetail>(value, VirtualServiceDetail, optErrMsg);
      this.initVirtualService();
      this.virtualService?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `virtualService` property exists and has a value; `false` otherwise
   */
  public hasVirtualService(): boolean {
    return isDefinedList<VirtualServiceDetail>(this.virtualService) && this.virtualService.some((item: VirtualServiceDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `virtualService` property
   */
  private initVirtualService(): void {
    if(!this.hasVirtualService()) {
      this.virtualService = [] as VirtualServiceDetail[];
    }
  }

  /**
   * @returns the `supportingInformation` property value as a Reference array
   */
  public getSupportingInformation(): Reference[] {
    return this.supportingInformation ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `supportingInformation` property.
   *
   * @decorator `@ReferenceTargets('Appointment.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.supportingInformation', [
    'Resource',
  ])
  public setSupportingInformation(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.supportingInformation = value;
    } else {
      this.supportingInformation = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `supportingInformation` array property.
   *
   * @decorator `@ReferenceTargets('Appointment.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.supportingInformation', [
    'Resource',
  ])
  public addSupportingInformation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSupportingInformation();
      this.supportingInformation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInformation` property exists and has a value; `false` otherwise
   */
  public hasSupportingInformation(): boolean {
    return isDefinedList<Reference>(this.supportingInformation) && this.supportingInformation.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `supportingInformation` property
   */
  private initSupportingInformation(): void {
    if (!this.hasSupportingInformation()) {
      this.supportingInformation = [] as Reference[];
    }
  }

  /**
   * @returns the `previousAppointment` property value as a Reference object; else an empty Reference object
   */
  public getPreviousAppointment(): Reference {
    return this.previousAppointment ?? new Reference();
  }

  /**
   * Assigns the provided PreviousAppointment object value to the `previousAppointment` property.
   *
   * @decorator `@ReferenceTargets('Appointment.previousAppointment', ['Appointment',])`
   *
   * @param value - the `previousAppointment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.previousAppointment', [
    'Appointment',
  ])
  public setPreviousAppointment(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.previousAppointment = value;
    } else {
      this.previousAppointment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `previousAppointment` property exists and has a value; `false` otherwise
   */
  public hasPreviousAppointment(): boolean {
    return isDefined<Reference>(this.previousAppointment) && !this.previousAppointment.isEmpty();
  }

  /**
   * @returns the `originatingAppointment` property value as a Reference object; else an empty Reference object
   */
  public getOriginatingAppointment(): Reference {
    return this.originatingAppointment ?? new Reference();
  }

  /**
   * Assigns the provided OriginatingAppointment object value to the `originatingAppointment` property.
   *
   * @decorator `@ReferenceTargets('Appointment.originatingAppointment', ['Appointment',])`
   *
   * @param value - the `originatingAppointment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.originatingAppointment', [
    'Appointment',
  ])
  public setOriginatingAppointment(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.originatingAppointment = value;
    } else {
      this.originatingAppointment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `originatingAppointment` property exists and has a value; `false` otherwise
   */
  public hasOriginatingAppointment(): boolean {
    return isDefined<Reference>(this.originatingAppointment) && !this.originatingAppointment.isEmpty();
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
      const optErrMsg = `Invalid Appointment.start; Provided element is not an instance of InstantType.`;
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
      const optErrMsg = `Invalid Appointment.start (${String(value)})`;
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
      const optErrMsg = `Invalid Appointment.end; Provided element is not an instance of InstantType.`;
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
      const optErrMsg = `Invalid Appointment.end (${String(value)})`;
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
   * @returns the `minutesDuration` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getMinutesDurationElement(): PositiveIntType {
    return this.minutesDuration ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `minutesDuration` property.
   *
   * @param element - the `minutesDuration` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMinutesDurationElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Appointment.minutesDuration; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.minutesDuration = element;
    } else {
      this.minutesDuration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `minutesDuration` property exists and has a value; `false` otherwise
   */
  public hasMinutesDurationElement(): boolean {
    return isDefined<PositiveIntType>(this.minutesDuration) && !this.minutesDuration.isEmpty();
  }

  /**
   * @returns the `minutesDuration` property value as a fhirPositiveInt if defined; else undefined
   */
  public getMinutesDuration(): fhirPositiveInt | undefined {
    return this.minutesDuration?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `minutesDuration` property.
   *
   * @param value - the `minutesDuration` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMinutesDuration(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Appointment.minutesDuration (${String(value)})`;
      this.minutesDuration = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.minutesDuration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `minutesDuration` property exists and has a value; `false` otherwise
   */
  public hasMinutesDuration(): boolean {
    return this.hasMinutesDurationElement();
  }

  /**
   * @returns the `requestedPeriod` property value as a Period array
   */
  public getRequestedPeriod(): Period[] {
    return this.requestedPeriod ?? ([] as Period[]);
  }

  /**
   * Assigns the provided Period array value to the `requestedPeriod` property.
   *
   * @param value - the `requestedPeriod` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRequestedPeriod(value: Period[] | undefined): this {
    if (isDefinedList<Period>(value)) {
      const optErrMsg = `Invalid Appointment.requestedPeriod; Provided value array has an element that is not an instance of Period.`;
      assertFhirTypeList<Period>(value, Period, optErrMsg);
      this.requestedPeriod = value;
    } else {
      this.requestedPeriod = undefined;
    }
    return this;
  }

  /**
   * Add the provided Period value to the `requestedPeriod` array property.
   *
   * @param value - the `requestedPeriod` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRequestedPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Appointment.requestedPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.initRequestedPeriod();
      this.requestedPeriod?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `requestedPeriod` property exists and has a value; `false` otherwise
   */
  public hasRequestedPeriod(): boolean {
    return isDefinedList<Period>(this.requestedPeriod) && this.requestedPeriod.some((item: Period) => !item.isEmpty());
  }

  /**
   * Initialize the `requestedPeriod` property
   */
  private initRequestedPeriod(): void {
    if(!this.hasRequestedPeriod()) {
      this.requestedPeriod = [] as Period[];
    }
  }

  /**
   * @returns the `slot` property value as a Reference array
   */
  public getSlot(): Reference[] {
    return this.slot ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `slot` property.
   *
   * @decorator `@ReferenceTargets('Appointment.slot', ['Slot',])`
   *
   * @param value - the `slot` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.slot', [
    'Slot',
  ])
  public setSlot(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.slot = value;
    } else {
      this.slot = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `slot` array property.
   *
   * @decorator `@ReferenceTargets('Appointment.slot', ['Slot',])`
   *
   * @param value - the `slot` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.slot', [
    'Slot',
  ])
  public addSlot(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSlot();
      this.slot?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `slot` property exists and has a value; `false` otherwise
   */
  public hasSlot(): boolean {
    return isDefinedList<Reference>(this.slot) && this.slot.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `slot` property
   */
  private initSlot(): void {
    if (!this.hasSlot()) {
      this.slot = [] as Reference[];
    }
  }

  /**
   * @returns the `account` property value as a Reference array
   */
  public getAccount(): Reference[] {
    return this.account ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `account` property.
   *
   * @decorator `@ReferenceTargets('Appointment.account', ['Account',])`
   *
   * @param value - the `account` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.account', [
    'Account',
  ])
  public setAccount(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.account = value;
    } else {
      this.account = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `account` array property.
   *
   * @decorator `@ReferenceTargets('Appointment.account', ['Account',])`
   *
   * @param value - the `account` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.account', [
    'Account',
  ])
  public addAccount(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAccount();
      this.account?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `account` property exists and has a value; `false` otherwise
   */
  public hasAccount(): boolean {
    return isDefinedList<Reference>(this.account) && this.account.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `account` property
   */
  private initAccount(): void {
    if (!this.hasAccount()) {
      this.account = [] as Reference[];
    }
  }

  /**
   * @returns the `created` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getCreatedElement(): DateTimeType {
    return this.created ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `created` property.
   *
   * @param element - the `created` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreatedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Appointment.created; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.created = element;
    } else {
      this.created = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `created` property exists and has a value; `false` otherwise
   */
  public hasCreatedElement(): boolean {
    return isDefined<DateTimeType>(this.created) && !this.created.isEmpty();
  }

  /**
   * @returns the `created` property value as a fhirDateTime if defined; else undefined
   */
  public getCreated(): fhirDateTime | undefined {
    return this.created?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `created` property.
   *
   * @param value - the `created` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreated(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Appointment.created (${String(value)})`;
      this.created = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.created = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `created` property exists and has a value; `false` otherwise
   */
  public hasCreated(): boolean {
    return this.hasCreatedElement();
  }

  /**
   * @returns the `cancellationDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getCancellationDateElement(): DateTimeType {
    return this.cancellationDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `cancellationDate` property.
   *
   * @param element - the `cancellationDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCancellationDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Appointment.cancellationDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.cancellationDate = element;
    } else {
      this.cancellationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cancellationDate` property exists and has a value; `false` otherwise
   */
  public hasCancellationDateElement(): boolean {
    return isDefined<DateTimeType>(this.cancellationDate) && !this.cancellationDate.isEmpty();
  }

  /**
   * @returns the `cancellationDate` property value as a fhirDateTime if defined; else undefined
   */
  public getCancellationDate(): fhirDateTime | undefined {
    return this.cancellationDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `cancellationDate` property.
   *
   * @param value - the `cancellationDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCancellationDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Appointment.cancellationDate (${String(value)})`;
      this.cancellationDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.cancellationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cancellationDate` property exists and has a value; `false` otherwise
   */
  public hasCancellationDate(): boolean {
    return this.hasCancellationDateElement();
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
      const optErrMsg = `Invalid Appointment.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Appointment.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `patientInstruction` property value as a CodeableReference array
   */
  public getPatientInstruction(): CodeableReference[] {
    return this.patientInstruction ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `patientInstruction` property.
   *
   * @param value - the `patientInstruction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPatientInstruction(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid Appointment.patientInstruction; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.patientInstruction = value;
    } else {
      this.patientInstruction = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `patientInstruction` array property.
   *
   * @param value - the `patientInstruction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPatientInstruction(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Appointment.patientInstruction; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initPatientInstruction();
      this.patientInstruction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `patientInstruction` property exists and has a value; `false` otherwise
   */
  public hasPatientInstruction(): boolean {
    return isDefinedList<CodeableReference>(this.patientInstruction) && this.patientInstruction.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `patientInstruction` property
   */
  private initPatientInstruction(): void {
    if(!this.hasPatientInstruction()) {
      this.patientInstruction = [] as CodeableReference[];
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
   * @decorator `@ReferenceTargets('Appointment.basedOn', ['CarePlan','DeviceRequest','MedicationRequest','ServiceRequest',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.basedOn', [
    'CarePlan',
  
    'DeviceRequest',
  
    'MedicationRequest',
  
    'ServiceRequest',
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
   * @decorator `@ReferenceTargets('Appointment.basedOn', ['CarePlan','DeviceRequest','MedicationRequest','ServiceRequest',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.basedOn', [
    'CarePlan',
  
    'DeviceRequest',
  
    'MedicationRequest',
  
    'ServiceRequest',
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
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('Appointment.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.subject', [
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
   * @returns the `participant` property value as a AppointmentParticipantComponent array
   */
  public getParticipant(): AppointmentParticipantComponent[] {
    return this.participant ?? ([] as AppointmentParticipantComponent[]);
  }

  /**
   * Assigns the provided AppointmentParticipantComponent array value to the `participant` property.
   *
   * @param value - the `participant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParticipant(value: AppointmentParticipantComponent[] | undefined | null): this {
    if (isDefinedList<AppointmentParticipantComponent>(value)) {
      const optErrMsg = `Invalid Appointment.participant; Provided value array has an element that is not an instance of AppointmentParticipantComponent.`;
      assertFhirTypeList<AppointmentParticipantComponent>(value, AppointmentParticipantComponent, optErrMsg);
      this.participant = value;
    } else {
      this.participant = null;
    }
    return this;
  }

  /**
   * Add the provided AppointmentParticipantComponent value to the `participant` array property.
   *
   * @param value - the `participant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParticipant(value: AppointmentParticipantComponent | undefined): this {
    if (isDefined<AppointmentParticipantComponent>(value)) {
      const optErrMsg = `Invalid Appointment.participant; Provided element is not an instance of AppointmentParticipantComponent.`;
      assertFhirType<AppointmentParticipantComponent>(value, AppointmentParticipantComponent, optErrMsg);
      this.initParticipant();
      this.participant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `participant` property exists and has a value; `false` otherwise
   */
  public hasParticipant(): boolean {
    return isDefinedList<AppointmentParticipantComponent>(this.participant) && this.participant.some((item: AppointmentParticipantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `participant` property
   */
  private initParticipant(): void {
    if(!this.hasParticipant()) {
      this.participant = [] as AppointmentParticipantComponent[];
    }
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
      const optErrMsg = `Invalid Appointment.recurrenceId; Provided element is not an instance of PositiveIntType.`;
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
      const optErrMsg = `Invalid Appointment.recurrenceId (${String(value)})`;
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

  /**
   * @returns the `occurrenceChanged` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getOccurrenceChangedElement(): BooleanType {
    return this.occurrenceChanged ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `occurrenceChanged` property.
   *
   * @param element - the `occurrenceChanged` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOccurrenceChangedElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Appointment.occurrenceChanged; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.occurrenceChanged = element;
    } else {
      this.occurrenceChanged = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrenceChanged` property exists and has a value; `false` otherwise
   */
  public hasOccurrenceChangedElement(): boolean {
    return isDefined<BooleanType>(this.occurrenceChanged) && !this.occurrenceChanged.isEmpty();
  }

  /**
   * @returns the `occurrenceChanged` property value as a fhirBoolean if defined; else undefined
   */
  public getOccurrenceChanged(): fhirBoolean | undefined {
    return this.occurrenceChanged?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `occurrenceChanged` property.
   *
   * @param value - the `occurrenceChanged` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOccurrenceChanged(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Appointment.occurrenceChanged (${String(value)})`;
      this.occurrenceChanged = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.occurrenceChanged = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrenceChanged` property exists and has a value; `false` otherwise
   */
  public hasOccurrenceChanged(): boolean {
    return this.hasOccurrenceChangedElement();
  }

  /**
   * @returns the `recurrenceTemplate` property value as a AppointmentRecurrenceTemplateComponent array
   */
  public getRecurrenceTemplate(): AppointmentRecurrenceTemplateComponent[] {
    return this.recurrenceTemplate ?? ([] as AppointmentRecurrenceTemplateComponent[]);
  }

  /**
   * Assigns the provided AppointmentRecurrenceTemplateComponent array value to the `recurrenceTemplate` property.
   *
   * @param value - the `recurrenceTemplate` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRecurrenceTemplate(value: AppointmentRecurrenceTemplateComponent[] | undefined): this {
    if (isDefinedList<AppointmentRecurrenceTemplateComponent>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate; Provided value array has an element that is not an instance of AppointmentRecurrenceTemplateComponent.`;
      assertFhirTypeList<AppointmentRecurrenceTemplateComponent>(value, AppointmentRecurrenceTemplateComponent, optErrMsg);
      this.recurrenceTemplate = value;
    } else {
      this.recurrenceTemplate = undefined;
    }
    return this;
  }

  /**
   * Add the provided AppointmentRecurrenceTemplateComponent value to the `recurrenceTemplate` array property.
   *
   * @param value - the `recurrenceTemplate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRecurrenceTemplate(value: AppointmentRecurrenceTemplateComponent | undefined): this {
    if (isDefined<AppointmentRecurrenceTemplateComponent>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate; Provided element is not an instance of AppointmentRecurrenceTemplateComponent.`;
      assertFhirType<AppointmentRecurrenceTemplateComponent>(value, AppointmentRecurrenceTemplateComponent, optErrMsg);
      this.initRecurrenceTemplate();
      this.recurrenceTemplate?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `recurrenceTemplate` property exists and has a value; `false` otherwise
   */
  public hasRecurrenceTemplate(): boolean {
    return isDefinedList<AppointmentRecurrenceTemplateComponent>(this.recurrenceTemplate) && this.recurrenceTemplate.some((item: AppointmentRecurrenceTemplateComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `recurrenceTemplate` property
   */
  private initRecurrenceTemplate(): void {
    if(!this.hasRecurrenceTemplate()) {
      this.recurrenceTemplate = [] as AppointmentRecurrenceTemplateComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Appointment';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.cancellationReason,
      this.class_,
      this.serviceCategory,
      this.serviceType,
      this.specialty,
      this.appointmentType,
      this.reason,
      this.priority,
      this.description,
      this.replaces,
      this.virtualService,
      this.supportingInformation,
      this.previousAppointment,
      this.originatingAppointment,
      this.start,
      this.end,
      this.minutesDuration,
      this.requestedPeriod,
      this.slot,
      this.account,
      this.created,
      this.cancellationDate,
      this.note,
      this.patientInstruction,
      this.basedOn,
      this.subject,
      this.participant,
      this.recurrenceId,
      this.occurrenceChanged,
      this.recurrenceTemplate,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Appointment {
    const dest = new Appointment();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Appointment): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.cancellationReason = this.cancellationReason?.copy();
    const classList = copyListValues<CodeableConcept>(this.class_);
    dest.class_ = classList.length === 0 ? undefined : classList;
    const serviceCategoryList = copyListValues<CodeableConcept>(this.serviceCategory);
    dest.serviceCategory = serviceCategoryList.length === 0 ? undefined : serviceCategoryList;
    const serviceTypeList = copyListValues<CodeableReference>(this.serviceType);
    dest.serviceType = serviceTypeList.length === 0 ? undefined : serviceTypeList;
    const specialtyList = copyListValues<CodeableConcept>(this.specialty);
    dest.specialty = specialtyList.length === 0 ? undefined : specialtyList;
    dest.appointmentType = this.appointmentType?.copy();
    const reasonList = copyListValues<CodeableReference>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    dest.priority = this.priority?.copy();
    dest.description = this.description?.copy();
    const replacesList = copyListValues<Reference>(this.replaces);
    dest.replaces = replacesList.length === 0 ? undefined : replacesList;
    const virtualServiceList = copyListValues<VirtualServiceDetail>(this.virtualService);
    dest.virtualService = virtualServiceList.length === 0 ? undefined : virtualServiceList;
    const supportingInformationList = copyListValues<Reference>(this.supportingInformation);
    dest.supportingInformation = supportingInformationList.length === 0 ? undefined : supportingInformationList;
    dest.previousAppointment = this.previousAppointment?.copy();
    dest.originatingAppointment = this.originatingAppointment?.copy();
    dest.start = this.start?.copy();
    dest.end = this.end?.copy();
    dest.minutesDuration = this.minutesDuration?.copy();
    const requestedPeriodList = copyListValues<Period>(this.requestedPeriod);
    dest.requestedPeriod = requestedPeriodList.length === 0 ? undefined : requestedPeriodList;
    const slotList = copyListValues<Reference>(this.slot);
    dest.slot = slotList.length === 0 ? undefined : slotList;
    const accountList = copyListValues<Reference>(this.account);
    dest.account = accountList.length === 0 ? undefined : accountList;
    dest.created = this.created?.copy();
    dest.cancellationDate = this.cancellationDate?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const patientInstructionList = copyListValues<CodeableReference>(this.patientInstruction);
    dest.patientInstruction = patientInstructionList.length === 0 ? undefined : patientInstructionList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    dest.subject = this.subject?.copy();
    const participantList = copyListValues<AppointmentParticipantComponent>(this.participant);
    dest.participant = participantList.length === 0 ? null : participantList;
    dest.recurrenceId = this.recurrenceId?.copy();
    dest.occurrenceChanged = this.occurrenceChanged?.copy();
    const recurrenceTemplateList = copyListValues<AppointmentRecurrenceTemplateComponent>(this.recurrenceTemplate);
    dest.recurrenceTemplate = recurrenceTemplateList.length === 0 ? undefined : recurrenceTemplateList;
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

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasCancellationReason()) {
      setFhirComplexJson(this.getCancellationReason(), 'cancellationReason', jsonObj);
    }

    if (this.hasClass()) {
      setFhirComplexListJson(this.getClass(), 'class', jsonObj);
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
      setFhirComplexJson(this.getAppointmentType(), 'appointmentType', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasPriority()) {
      setFhirComplexJson(this.getPriority(), 'priority', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasReplaces()) {
      setFhirComplexListJson(this.getReplaces(), 'replaces', jsonObj);
    }

    if (this.hasVirtualService()) {
      setFhirComplexListJson(this.getVirtualService(), 'virtualService', jsonObj);
    }

    if (this.hasSupportingInformation()) {
      setFhirComplexListJson(this.getSupportingInformation(), 'supportingInformation', jsonObj);
    }

    if (this.hasPreviousAppointment()) {
      setFhirComplexJson(this.getPreviousAppointment(), 'previousAppointment', jsonObj);
    }

    if (this.hasOriginatingAppointment()) {
      setFhirComplexJson(this.getOriginatingAppointment(), 'originatingAppointment', jsonObj);
    }

    if (this.hasStartElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getStartElement(), 'start', jsonObj);
    }

    if (this.hasEndElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getEndElement(), 'end', jsonObj);
    }

    if (this.hasMinutesDurationElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getMinutesDurationElement(), 'minutesDuration', jsonObj);
    }

    if (this.hasRequestedPeriod()) {
      setFhirComplexListJson(this.getRequestedPeriod(), 'requestedPeriod', jsonObj);
    }

    if (this.hasSlot()) {
      setFhirComplexListJson(this.getSlot(), 'slot', jsonObj);
    }

    if (this.hasAccount()) {
      setFhirComplexListJson(this.getAccount(), 'account', jsonObj);
    }

    if (this.hasCreatedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getCreatedElement(), 'created', jsonObj);
    }

    if (this.hasCancellationDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getCancellationDateElement(), 'cancellationDate', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasPatientInstruction()) {
      setFhirComplexListJson(this.getPatientInstruction(), 'patientInstruction', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasParticipant()) {
      setFhirBackboneElementListJson(this.getParticipant(), 'participant', jsonObj);
    } else {
      jsonObj['participant'] = null;
    }

    if (this.hasRecurrenceIdElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getRecurrenceIdElement(), 'recurrenceId', jsonObj);
    }

    if (this.hasOccurrenceChangedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getOccurrenceChangedElement(), 'occurrenceChanged', jsonObj);
    }

    if (this.hasRecurrenceTemplate()) {
      setFhirBackboneElementListJson(this.getRecurrenceTemplate(), 'recurrenceTemplate', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * AppointmentParticipantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Participants involved in appointment
 * - **Definition:** List of participants involved in the appointment.
 *
 * @category Data Models: Resource
 * @see [FHIR Appointment](http://hl7.org/fhir/StructureDefinition/Appointment)
 */
export class AppointmentParticipantComponent extends BackboneElement implements IBackboneElement {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.participationstatusEnum = new ParticipationstatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<ParticipationstatusEnum>(
      status,
      ParticipationstatusEnum,
      this.participationstatusEnum,
      'Appointment.participant.status',
    );
  }

  /**
   * Parse the provided `AppointmentParticipantComponent` JSON to instantiate the AppointmentParticipantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AppointmentParticipantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AppointmentParticipantComponent
   * @returns AppointmentParticipantComponent data model or undefined for `AppointmentParticipantComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AppointmentParticipantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AppointmentParticipantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AppointmentParticipantComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'actor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setActor(datatype);
    }

    fieldName = 'required';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setRequiredElement(datatype);
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

    return instance;
  }

  /**
   * Appointment.participant.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Role of participant in the appointment
   * - **Definition:** Role of participant in the appointment.
   * - **Comment:** The role of the participant can be used to declare what the actor will be doing in the scope of this appointment. If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning. This value SHALL be the same when creating an AppointmentResponse so that they can be matched, and subsequently update the Appointment.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * Appointment.participant.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Participation period of the actor
   * - **Definition:** Participation period of the actor.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

  /**
   * Appointment.participant.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The individual, device, location, or service participating in the appointment
   * - **Definition:** The individual, device, location, or service participating in the appointment.
   * - **Comment:** Where a CareTeam is provided, this does not imply that the entire team is included, just a single member from the group with the appropriate role. Where multiple members are required, please include the CareTeam the required number of times.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
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
   * Appointment.participant.required Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The participant is required to attend (optional when false)
   * - **Definition:** Whether this participant is required to be present at the meeting. If false, the participant is optional.
   * - **Comment:** For the use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present include the patient in the subject field, but do not include them as a participant - this was formerly done prior to R5 with required=\'information-only\'.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private required?: BooleanType | undefined;

  /**
   * FHIR CodeSystem: Participationstatus
   *
   * @see {@link ParticipationstatusEnum }
   */
  private readonly participationstatusEnum: ParticipationstatusEnum;

  /**
   * Appointment.participant.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** accepted | declined | tentative | needs-action
   * - **Definition:** Participation status of the actor.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
   */
  private status: EnumCodeType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Appointment.participant.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Appointment.participant.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Appointment.participant.period; Provided element is not an instance of Period.`;
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
   * @returns the `actor` property value as a Reference object; else an empty Reference object
   */
  public getActor(): Reference {
    return this.actor ?? new Reference();
  }

  /**
   * Assigns the provided Actor object value to the `actor` property.
   *
   * @decorator `@ReferenceTargets('Appointment.participant.actor', ['Patient','Group','Practitioner','PractitionerRole','CareTeam','RelatedPerson','Device','HealthcareService','Location',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Appointment.participant.actor', [
    'Patient',
  
    'Group',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'CareTeam',
  
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
   * @returns the `required` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getRequiredElement(): BooleanType {
    return this.required ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `required` property.
   *
   * @param element - the `required` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequiredElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Appointment.participant.required; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.required = element;
    } else {
      this.required = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `required` property exists and has a value; `false` otherwise
   */
  public hasRequiredElement(): boolean {
    return isDefined<BooleanType>(this.required) && !this.required.isEmpty();
  }

  /**
   * @returns the `required` property value as a fhirBoolean if defined; else undefined
   */
  public getRequired(): fhirBoolean | undefined {
    return this.required?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `required` property.
   *
   * @param value - the `required` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequired(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Appointment.participant.required (${String(value)})`;
      this.required = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.required = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `required` property exists and has a value; `false` otherwise
   */
  public hasRequired(): boolean {
    return this.hasRequiredElement();
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
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
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Appointment.participant.status`;
      assertEnumCodeType<ParticipationstatusEnum>(enumType, ParticipationstatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
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
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Appointment.participant.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.participationstatusEnum);
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
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
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
   * @see CodeSystem Enumeration: {@link ParticipationstatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Appointment.participant.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.participationstatusEnum);
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Appointment.participant';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.period,
      this.actor,
      this.required,
      this.status,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AppointmentParticipantComponent {
    const dest = new AppointmentParticipantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AppointmentParticipantComponent): void {
    super.copyValues(dest);
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    dest.period = this.period?.copy();
    dest.actor = this.actor?.copy();
    dest.required = this.required?.copy();
    dest.status = this.status ? this.status.copy() : null;
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
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasActor()) {
      setFhirComplexJson(this.getActor(), 'actor', jsonObj);
    }

    if (this.hasRequiredElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getRequiredElement(), 'required', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    return jsonObj;
  }
}
/**
 * AppointmentRecurrenceTemplateComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Details of the recurrence pattern/template used to generate occurrences
 * - **Definition:** The details of the recurrence pattern or template that is used to generate recurring appointments.
 *
 * @category Data Models: Resource
 * @see [FHIR Appointment](http://hl7.org/fhir/StructureDefinition/Appointment)
 */
export class AppointmentRecurrenceTemplateComponent extends BackboneElement implements IBackboneElement {
  constructor(recurrenceType: CodeableConcept | null = null) {
    super();

    this.recurrenceType = null;
    if (isDefined<CodeableConcept>(recurrenceType)) {
      this.setRecurrenceType(recurrenceType);
    }
  }

  /**
   * Parse the provided `AppointmentRecurrenceTemplateComponent` JSON to instantiate the AppointmentRecurrenceTemplateComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AppointmentRecurrenceTemplateComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AppointmentRecurrenceTemplateComponent
   * @returns AppointmentRecurrenceTemplateComponent data model or undefined for `AppointmentRecurrenceTemplateComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AppointmentRecurrenceTemplateComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AppointmentRecurrenceTemplateComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AppointmentRecurrenceTemplateComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'timezone';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTimezone(datatype);
    }

    fieldName = 'recurrenceType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setRecurrenceType(null);
      } else {
        instance.setRecurrenceType(datatype);
      }
    } else {
      instance.setRecurrenceType(null);
    }

    fieldName = 'lastOccurrenceDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setLastOccurrenceDateElement(datatype);
    }

    fieldName = 'occurrenceCount';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setOccurrenceCountElement(datatype);
    }

    fieldName = 'occurrenceDate';
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
        const datatype: DateType | undefined = fhirParser.parseDateType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addOccurrenceDateElement(datatype);
        }
      });
    }

    fieldName = 'weeklyTemplate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: AppointmentRecurrenceTemplateWeeklyTemplateComponent | undefined = AppointmentRecurrenceTemplateWeeklyTemplateComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setWeeklyTemplate(component);
    }

    fieldName = 'monthlyTemplate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: AppointmentRecurrenceTemplateMonthlyTemplateComponent | undefined = AppointmentRecurrenceTemplateMonthlyTemplateComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMonthlyTemplate(component);
    }

    fieldName = 'yearlyTemplate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: AppointmentRecurrenceTemplateYearlyTemplateComponent | undefined = AppointmentRecurrenceTemplateYearlyTemplateComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setYearlyTemplate(component);
    }

    fieldName = 'excludingDate';
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
        const datatype: DateType | undefined = fhirParser.parseDateType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addExcludingDateElement(datatype);
        }
      });
    }

    fieldName = 'excludingRecurrenceId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addExcludingRecurrenceIdElement(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * Appointment.recurrenceTemplate.timezone Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The timezone of the occurrences
   * - **Definition:** The timezone of the recurring appointment occurrences.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private timezone?: CodeableConcept | undefined;

  /**
   * Appointment.recurrenceTemplate.recurrenceType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The frequency of the recurrence
   * - **Definition:** How often the appointment series should recur.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recurrenceType: CodeableConcept | null;

  /**
   * Appointment.recurrenceTemplate.lastOccurrenceDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date when the recurrence should end
   * - **Definition:** Recurring appointments will not occur after this date.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lastOccurrenceDate?: DateType | undefined;

  /**
   * Appointment.recurrenceTemplate.occurrenceCount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The number of planned occurrences
   * - **Definition:** How many appointments are planned in the recurrence.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private occurrenceCount?: PositiveIntType | undefined;

  /**
   * Appointment.recurrenceTemplate.occurrenceDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific dates for a recurring set of appointments (no template)
   * - **Definition:** The list of specific dates that will have appointments generated.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private occurrenceDate?: DateType[] | undefined;

  /**
   * Appointment.recurrenceTemplate.weeklyTemplate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about weekly recurring appointments
   * - **Definition:** Information about weekly recurring appointments.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private weeklyTemplate?: AppointmentRecurrenceTemplateWeeklyTemplateComponent | undefined;

  /**
   * Appointment.recurrenceTemplate.monthlyTemplate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about monthly recurring appointments
   * - **Definition:** Information about monthly recurring appointments.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private monthlyTemplate?: AppointmentRecurrenceTemplateMonthlyTemplateComponent | undefined;

  /**
   * Appointment.recurrenceTemplate.yearlyTemplate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about yearly recurring appointments
   * - **Definition:** Information about yearly recurring appointments.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private yearlyTemplate?: AppointmentRecurrenceTemplateYearlyTemplateComponent | undefined;

  /**
   * Appointment.recurrenceTemplate.excludingDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Any dates that should be excluded from the series
   * - **Definition:** Any dates, such as holidays, that should be excluded from the recurrence.
   * - **Comment:** excludingDate is an alternative to excludingRecurrenceId.  You may say either that 12/25/XXXX should be excluded using excludingDate, or you may indicate the recurrenceId of the appointment that would fall on the excluded date in the excludingRecurrenceId property.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private excludingDate?: DateType[] | undefined;

  /**
   * Appointment.recurrenceTemplate.excludingRecurrenceId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Any recurrence IDs that should be excluded from the recurrence
   * - **Definition:** Any dates, such as holidays, that should be excluded from the recurrence.
   * - **Comment:** excludingRecurrenceId is an alternative to excludingDate.  You may say either that 12/25/XXXX should be excluded using excludingDate, or you may indicate the recurrenceId of the appointment that would fall on the excluded date in the excludingRecurrenceId property.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private excludingRecurrenceId?: PositiveIntType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `timezone` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getTimezone(): CodeableConcept {
    return this.timezone ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Timezone object value to the `timezone` property.
   *
   * @param value - the `timezone` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTimezone(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.timezone; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.timezone = value;
    } else {
      this.timezone = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timezone` property exists and has a value; `false` otherwise
   */
  public hasTimezone(): boolean {
    return isDefined<CodeableConcept>(this.timezone) && !this.timezone.isEmpty();
  }

  /**
   * @returns the `recurrenceType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRecurrenceType(): CodeableConcept {
    return this.recurrenceType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `recurrenceType` property.
   *
   * @param value - the `recurrenceType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRecurrenceType(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.recurrenceType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.recurrenceType = value;
    } else {
      this.recurrenceType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `recurrenceType` property exists and has a value; `false` otherwise
   */
  public hasRecurrenceType(): boolean {
    return isDefined<CodeableConcept>(this.recurrenceType) && !this.recurrenceType.isEmpty();
  }

  /**
   * @returns the `lastOccurrenceDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getLastOccurrenceDateElement(): DateType {
    return this.lastOccurrenceDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lastOccurrenceDate` property.
   *
   * @param element - the `lastOccurrenceDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastOccurrenceDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.lastOccurrenceDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.lastOccurrenceDate = element;
    } else {
      this.lastOccurrenceDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastOccurrenceDate` property exists and has a value; `false` otherwise
   */
  public hasLastOccurrenceDateElement(): boolean {
    return isDefined<DateType>(this.lastOccurrenceDate) && !this.lastOccurrenceDate.isEmpty();
  }

  /**
   * @returns the `lastOccurrenceDate` property value as a fhirDate if defined; else undefined
   */
  public getLastOccurrenceDate(): fhirDate | undefined {
    return this.lastOccurrenceDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lastOccurrenceDate` property.
   *
   * @param value - the `lastOccurrenceDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastOccurrenceDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.lastOccurrenceDate (${String(value)})`;
      this.lastOccurrenceDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.lastOccurrenceDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastOccurrenceDate` property exists and has a value; `false` otherwise
   */
  public hasLastOccurrenceDate(): boolean {
    return this.hasLastOccurrenceDateElement();
  }

  /**
   * @returns the `occurrenceCount` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getOccurrenceCountElement(): PositiveIntType {
    return this.occurrenceCount ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `occurrenceCount` property.
   *
   * @param element - the `occurrenceCount` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOccurrenceCountElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.occurrenceCount; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.occurrenceCount = element;
    } else {
      this.occurrenceCount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrenceCount` property exists and has a value; `false` otherwise
   */
  public hasOccurrenceCountElement(): boolean {
    return isDefined<PositiveIntType>(this.occurrenceCount) && !this.occurrenceCount.isEmpty();
  }

  /**
   * @returns the `occurrenceCount` property value as a fhirPositiveInt if defined; else undefined
   */
  public getOccurrenceCount(): fhirPositiveInt | undefined {
    return this.occurrenceCount?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `occurrenceCount` property.
   *
   * @param value - the `occurrenceCount` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOccurrenceCount(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.occurrenceCount (${String(value)})`;
      this.occurrenceCount = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.occurrenceCount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrenceCount` property exists and has a value; `false` otherwise
   */
  public hasOccurrenceCount(): boolean {
    return this.hasOccurrenceCountElement();
  }

  /**
   * @returns the `occurrenceDate` property value as a DateType array
   */
  public getOccurrenceDateElement(): DateType[] {
    return this.occurrenceDate ?? ([] as DateType[]);
  }

  /**
   * Assigns the provided DateType array value to the `occurrenceDate` property.
   *
   * @param element - the `occurrenceDate` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOccurrenceDateElement(element: DateType[] | undefined): this {
    if (isDefinedList<DateType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.occurrenceDate; Provided value array has an element that is not an instance of DateType.`;
      assertFhirTypeList<DateType>(element, DateType, optErrMsg);
      this.occurrenceDate = element;
    } else {
      this.occurrenceDate = undefined;
    }
    return this;
  }

  /**
   * Add the provided DateType value to the `occurrenceDate` array property.
   *
   * @param element - the `occurrenceDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addOccurrenceDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.occurrenceDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.initOccurrenceDate();
      this.occurrenceDate?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrenceDate` property exists and has a value; `false` otherwise
   */
  public hasOccurrenceDateElement(): boolean {
    return isDefinedList<DateType>(this.occurrenceDate) && this.occurrenceDate.some((item: DateType) => !item.isEmpty());
  }

  /**
   * @returns the `occurrenceDate` property value as a fhirDate array
   */
  public getOccurrenceDate(): fhirDate[] {
    this.initOccurrenceDate();
    const occurrenceDateValues = [] as fhirDate[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.occurrenceDate!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        occurrenceDateValues.push(value);
      }
    }
    return occurrenceDateValues;
  }

  /**
   * Assigns the provided primitive value array to the `occurrenceDate` property.
   *
   * @param value - the `occurrenceDate` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOccurrenceDate(value: fhirDate[] | undefined): this {
    if (isDefinedList<fhirDate>(value)) {
      const occurrenceDateElements = [] as DateType[];
      for (const occurrenceDateValue of value) {
        const optErrMsg = `Invalid Appointment.recurrenceTemplate.occurrenceDate array item (${String(occurrenceDateValue)})`;
        const element = new DateType(parseFhirPrimitiveData(occurrenceDateValue, fhirDateSchema, optErrMsg));
        occurrenceDateElements.push(element);
      }
      this.occurrenceDate = occurrenceDateElements;
    } else {
      this.occurrenceDate = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `occurrenceDate` array property.
   *
   * @param value - the `occurrenceDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addOccurrenceDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.occurrenceDate array item (${String(value)})`;
      const element = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
      this.initOccurrenceDate();
      this.addOccurrenceDateElement(element);
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
   * Initialize the `occurrenceDate` property
   */
  private initOccurrenceDate(): void {
    if (!this.hasOccurrenceDate()) {
      this.occurrenceDate = [] as DateType[];
    }
  }

  /**
   * @returns the `weeklyTemplate` property value as a AppointmentRecurrenceTemplateWeeklyTemplateComponent object if defined; else an empty AppointmentRecurrenceTemplateWeeklyTemplateComponent object
   */
  public getWeeklyTemplate(): AppointmentRecurrenceTemplateWeeklyTemplateComponent {
    return this.weeklyTemplate ?? new AppointmentRecurrenceTemplateWeeklyTemplateComponent();
  }

  /**
   * Assigns the provided WeeklyTemplate object value to the `weeklyTemplate` property.
   *
   * @param value - the `weeklyTemplate` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setWeeklyTemplate(value: AppointmentRecurrenceTemplateWeeklyTemplateComponent | undefined): this {
    if (isDefined<AppointmentRecurrenceTemplateWeeklyTemplateComponent>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate; Provided element is not an instance of AppointmentRecurrenceTemplateWeeklyTemplateComponent.`;
      assertFhirType<AppointmentRecurrenceTemplateWeeklyTemplateComponent>(value, AppointmentRecurrenceTemplateWeeklyTemplateComponent, optErrMsg);
      this.weeklyTemplate = value;
    } else {
      this.weeklyTemplate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `weeklyTemplate` property exists and has a value; `false` otherwise
   */
  public hasWeeklyTemplate(): boolean {
    return isDefined<AppointmentRecurrenceTemplateWeeklyTemplateComponent>(this.weeklyTemplate) && !this.weeklyTemplate.isEmpty();
  }

  /**
   * @returns the `monthlyTemplate` property value as a AppointmentRecurrenceTemplateMonthlyTemplateComponent object if defined; else an empty AppointmentRecurrenceTemplateMonthlyTemplateComponent object
   */
  public getMonthlyTemplate(): AppointmentRecurrenceTemplateMonthlyTemplateComponent {
    return this.monthlyTemplate ?? new AppointmentRecurrenceTemplateMonthlyTemplateComponent();
  }

  /**
   * Assigns the provided MonthlyTemplate object value to the `monthlyTemplate` property.
   *
   * @param value - the `monthlyTemplate` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMonthlyTemplate(value: AppointmentRecurrenceTemplateMonthlyTemplateComponent | undefined): this {
    if (isDefined<AppointmentRecurrenceTemplateMonthlyTemplateComponent>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.monthlyTemplate; Provided element is not an instance of AppointmentRecurrenceTemplateMonthlyTemplateComponent.`;
      assertFhirType<AppointmentRecurrenceTemplateMonthlyTemplateComponent>(value, AppointmentRecurrenceTemplateMonthlyTemplateComponent, optErrMsg);
      this.monthlyTemplate = value;
    } else {
      this.monthlyTemplate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `monthlyTemplate` property exists and has a value; `false` otherwise
   */
  public hasMonthlyTemplate(): boolean {
    return isDefined<AppointmentRecurrenceTemplateMonthlyTemplateComponent>(this.monthlyTemplate) && !this.monthlyTemplate.isEmpty();
  }

  /**
   * @returns the `yearlyTemplate` property value as a AppointmentRecurrenceTemplateYearlyTemplateComponent object if defined; else an empty AppointmentRecurrenceTemplateYearlyTemplateComponent object
   */
  public getYearlyTemplate(): AppointmentRecurrenceTemplateYearlyTemplateComponent {
    return this.yearlyTemplate ?? new AppointmentRecurrenceTemplateYearlyTemplateComponent();
  }

  /**
   * Assigns the provided YearlyTemplate object value to the `yearlyTemplate` property.
   *
   * @param value - the `yearlyTemplate` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setYearlyTemplate(value: AppointmentRecurrenceTemplateYearlyTemplateComponent | undefined): this {
    if (isDefined<AppointmentRecurrenceTemplateYearlyTemplateComponent>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.yearlyTemplate; Provided element is not an instance of AppointmentRecurrenceTemplateYearlyTemplateComponent.`;
      assertFhirType<AppointmentRecurrenceTemplateYearlyTemplateComponent>(value, AppointmentRecurrenceTemplateYearlyTemplateComponent, optErrMsg);
      this.yearlyTemplate = value;
    } else {
      this.yearlyTemplate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `yearlyTemplate` property exists and has a value; `false` otherwise
   */
  public hasYearlyTemplate(): boolean {
    return isDefined<AppointmentRecurrenceTemplateYearlyTemplateComponent>(this.yearlyTemplate) && !this.yearlyTemplate.isEmpty();
  }

  /**
   * @returns the `excludingDate` property value as a DateType array
   */
  public getExcludingDateElement(): DateType[] {
    return this.excludingDate ?? ([] as DateType[]);
  }

  /**
   * Assigns the provided DateType array value to the `excludingDate` property.
   *
   * @param element - the `excludingDate` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExcludingDateElement(element: DateType[] | undefined): this {
    if (isDefinedList<DateType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.excludingDate; Provided value array has an element that is not an instance of DateType.`;
      assertFhirTypeList<DateType>(element, DateType, optErrMsg);
      this.excludingDate = element;
    } else {
      this.excludingDate = undefined;
    }
    return this;
  }

  /**
   * Add the provided DateType value to the `excludingDate` array property.
   *
   * @param element - the `excludingDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addExcludingDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.excludingDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.initExcludingDate();
      this.excludingDate?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `excludingDate` property exists and has a value; `false` otherwise
   */
  public hasExcludingDateElement(): boolean {
    return isDefinedList<DateType>(this.excludingDate) && this.excludingDate.some((item: DateType) => !item.isEmpty());
  }

  /**
   * @returns the `excludingDate` property value as a fhirDate array
   */
  public getExcludingDate(): fhirDate[] {
    this.initExcludingDate();
    const excludingDateValues = [] as fhirDate[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.excludingDate!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        excludingDateValues.push(value);
      }
    }
    return excludingDateValues;
  }

  /**
   * Assigns the provided primitive value array to the `excludingDate` property.
   *
   * @param value - the `excludingDate` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExcludingDate(value: fhirDate[] | undefined): this {
    if (isDefinedList<fhirDate>(value)) {
      const excludingDateElements = [] as DateType[];
      for (const excludingDateValue of value) {
        const optErrMsg = `Invalid Appointment.recurrenceTemplate.excludingDate array item (${String(excludingDateValue)})`;
        const element = new DateType(parseFhirPrimitiveData(excludingDateValue, fhirDateSchema, optErrMsg));
        excludingDateElements.push(element);
      }
      this.excludingDate = excludingDateElements;
    } else {
      this.excludingDate = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `excludingDate` array property.
   *
   * @param value - the `excludingDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addExcludingDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.excludingDate array item (${String(value)})`;
      const element = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
      this.initExcludingDate();
      this.addExcludingDateElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `excludingDate` property exists and has a value; `false` otherwise
   */
  public hasExcludingDate(): boolean {
    return this.hasExcludingDateElement();
  }

  /**
   * Initialize the `excludingDate` property
   */
  private initExcludingDate(): void {
    if (!this.hasExcludingDate()) {
      this.excludingDate = [] as DateType[];
    }
  }

  /**
   * @returns the `excludingRecurrenceId` property value as a PositiveIntType array
   */
  public getExcludingRecurrenceIdElement(): PositiveIntType[] {
    return this.excludingRecurrenceId ?? ([] as PositiveIntType[]);
  }

  /**
   * Assigns the provided PositiveIntType array value to the `excludingRecurrenceId` property.
   *
   * @param element - the `excludingRecurrenceId` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExcludingRecurrenceIdElement(element: PositiveIntType[] | undefined): this {
    if (isDefinedList<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.excludingRecurrenceId; Provided value array has an element that is not an instance of PositiveIntType.`;
      assertFhirTypeList<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.excludingRecurrenceId = element;
    } else {
      this.excludingRecurrenceId = undefined;
    }
    return this;
  }

  /**
   * Add the provided PositiveIntType value to the `excludingRecurrenceId` array property.
   *
   * @param element - the `excludingRecurrenceId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addExcludingRecurrenceIdElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.excludingRecurrenceId; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.initExcludingRecurrenceId();
      this.excludingRecurrenceId?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `excludingRecurrenceId` property exists and has a value; `false` otherwise
   */
  public hasExcludingRecurrenceIdElement(): boolean {
    return isDefinedList<PositiveIntType>(this.excludingRecurrenceId) && this.excludingRecurrenceId.some((item: PositiveIntType) => !item.isEmpty());
  }

  /**
   * @returns the `excludingRecurrenceId` property value as a fhirPositiveInt array
   */
  public getExcludingRecurrenceId(): fhirPositiveInt[] {
    this.initExcludingRecurrenceId();
    const excludingRecurrenceIdValues = [] as fhirPositiveInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.excludingRecurrenceId!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        excludingRecurrenceIdValues.push(value);
      }
    }
    return excludingRecurrenceIdValues;
  }

  /**
   * Assigns the provided primitive value array to the `excludingRecurrenceId` property.
   *
   * @param value - the `excludingRecurrenceId` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExcludingRecurrenceId(value: fhirPositiveInt[] | undefined): this {
    if (isDefinedList<fhirPositiveInt>(value)) {
      const excludingRecurrenceIdElements = [] as PositiveIntType[];
      for (const excludingRecurrenceIdValue of value) {
        const optErrMsg = `Invalid Appointment.recurrenceTemplate.excludingRecurrenceId array item (${String(excludingRecurrenceIdValue)})`;
        const element = new PositiveIntType(parseFhirPrimitiveData(excludingRecurrenceIdValue, fhirPositiveIntSchema, optErrMsg));
        excludingRecurrenceIdElements.push(element);
      }
      this.excludingRecurrenceId = excludingRecurrenceIdElements;
    } else {
      this.excludingRecurrenceId = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `excludingRecurrenceId` array property.
   *
   * @param value - the `excludingRecurrenceId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addExcludingRecurrenceId(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.excludingRecurrenceId array item (${String(value)})`;
      const element = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
      this.initExcludingRecurrenceId();
      this.addExcludingRecurrenceIdElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `excludingRecurrenceId` property exists and has a value; `false` otherwise
   */
  public hasExcludingRecurrenceId(): boolean {
    return this.hasExcludingRecurrenceIdElement();
  }

  /**
   * Initialize the `excludingRecurrenceId` property
   */
  private initExcludingRecurrenceId(): void {
    if (!this.hasExcludingRecurrenceId()) {
      this.excludingRecurrenceId = [] as PositiveIntType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Appointment.recurrenceTemplate';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.timezone,
      this.recurrenceType,
      this.lastOccurrenceDate,
      this.occurrenceCount,
      this.occurrenceDate,
      this.weeklyTemplate,
      this.monthlyTemplate,
      this.yearlyTemplate,
      this.excludingDate,
      this.excludingRecurrenceId,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.recurrenceType, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AppointmentRecurrenceTemplateComponent {
    const dest = new AppointmentRecurrenceTemplateComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AppointmentRecurrenceTemplateComponent): void {
    super.copyValues(dest);
    dest.timezone = this.timezone?.copy();
    dest.recurrenceType = this.recurrenceType ? this.recurrenceType.copy() : null;
    dest.lastOccurrenceDate = this.lastOccurrenceDate?.copy();
    dest.occurrenceCount = this.occurrenceCount?.copy();
    const occurrenceDateList = copyListValues<DateType>(this.occurrenceDate);
    dest.occurrenceDate = occurrenceDateList.length === 0 ? undefined : occurrenceDateList;
    dest.weeklyTemplate = this.weeklyTemplate?.copy();
    dest.monthlyTemplate = this.monthlyTemplate?.copy();
    dest.yearlyTemplate = this.yearlyTemplate?.copy();
    const excludingDateList = copyListValues<DateType>(this.excludingDate);
    dest.excludingDate = excludingDateList.length === 0 ? undefined : excludingDateList;
    const excludingRecurrenceIdList = copyListValues<PositiveIntType>(this.excludingRecurrenceId);
    dest.excludingRecurrenceId = excludingRecurrenceIdList.length === 0 ? undefined : excludingRecurrenceIdList;
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

    if (this.hasTimezone()) {
      setFhirComplexJson(this.getTimezone(), 'timezone', jsonObj);
    }

    if (this.hasRecurrenceType()) {
      setFhirComplexJson(this.getRecurrenceType(), 'recurrenceType', jsonObj);
    } else {
      jsonObj['recurrenceType'] = null;
    }

    if (this.hasLastOccurrenceDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getLastOccurrenceDateElement(), 'lastOccurrenceDate', jsonObj);
    }

    if (this.hasOccurrenceCountElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getOccurrenceCountElement(), 'occurrenceCount', jsonObj);
    }

    if (this.hasOccurrenceDate()) {
      setFhirPrimitiveListJson(this.getOccurrenceDateElement(), 'occurrenceDate', jsonObj);
    }

    if (this.hasWeeklyTemplate()) {
      setFhirBackboneElementJson(this.getWeeklyTemplate(), 'weeklyTemplate', jsonObj);
    }

    if (this.hasMonthlyTemplate()) {
      setFhirBackboneElementJson(this.getMonthlyTemplate(), 'monthlyTemplate', jsonObj);
    }

    if (this.hasYearlyTemplate()) {
      setFhirBackboneElementJson(this.getYearlyTemplate(), 'yearlyTemplate', jsonObj);
    }

    if (this.hasExcludingDate()) {
      setFhirPrimitiveListJson(this.getExcludingDateElement(), 'excludingDate', jsonObj);
    }

    if (this.hasExcludingRecurrenceId()) {
      setFhirPrimitiveListJson(this.getExcludingRecurrenceIdElement(), 'excludingRecurrenceId', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * AppointmentRecurrenceTemplateWeeklyTemplateComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about weekly recurring appointments
 * - **Definition:** Information about weekly recurring appointments.
 *
 * @category Data Models: Resource
 * @see [FHIR Appointment](http://hl7.org/fhir/StructureDefinition/Appointment)
 */
export class AppointmentRecurrenceTemplateWeeklyTemplateComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `AppointmentRecurrenceTemplateWeeklyTemplateComponent` JSON to instantiate the AppointmentRecurrenceTemplateWeeklyTemplateComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AppointmentRecurrenceTemplateWeeklyTemplateComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AppointmentRecurrenceTemplateWeeklyTemplateComponent
   * @returns AppointmentRecurrenceTemplateWeeklyTemplateComponent data model or undefined for `AppointmentRecurrenceTemplateWeeklyTemplateComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AppointmentRecurrenceTemplateWeeklyTemplateComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AppointmentRecurrenceTemplateWeeklyTemplateComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AppointmentRecurrenceTemplateWeeklyTemplateComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'monday';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setMondayElement(datatype);
    }

    fieldName = 'tuesday';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setTuesdayElement(datatype);
    }

    fieldName = 'wednesday';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setWednesdayElement(datatype);
    }

    fieldName = 'thursday';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setThursdayElement(datatype);
    }

    fieldName = 'friday';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setFridayElement(datatype);
    }

    fieldName = 'saturday';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setSaturdayElement(datatype);
    }

    fieldName = 'sunday';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setSundayElement(datatype);
    }

    fieldName = 'weekInterval';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setWeekIntervalElement(datatype);
    }

    return instance;
  }

  /**
   * Appointment.recurrenceTemplate.weeklyTemplate.monday Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recurs on Mondays
   * - **Definition:** Indicates that recurring appointments should occur on Mondays.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private monday?: BooleanType | undefined;

  /**
   * Appointment.recurrenceTemplate.weeklyTemplate.tuesday Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recurs on Tuesday
   * - **Definition:** Indicates that recurring appointments should occur on Tuesdays.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private tuesday?: BooleanType | undefined;

  /**
   * Appointment.recurrenceTemplate.weeklyTemplate.wednesday Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recurs on Wednesday
   * - **Definition:** Indicates that recurring appointments should occur on Wednesdays.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private wednesday?: BooleanType | undefined;

  /**
   * Appointment.recurrenceTemplate.weeklyTemplate.thursday Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recurs on Thursday
   * - **Definition:** Indicates that recurring appointments should occur on Thursdays.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private thursday?: BooleanType | undefined;

  /**
   * Appointment.recurrenceTemplate.weeklyTemplate.friday Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recurs on Friday
   * - **Definition:** Indicates that recurring appointments should occur on Fridays.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private friday?: BooleanType | undefined;

  /**
   * Appointment.recurrenceTemplate.weeklyTemplate.saturday Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recurs on Saturday
   * - **Definition:** Indicates that recurring appointments should occur on Saturdays.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private saturday?: BooleanType | undefined;

  /**
   * Appointment.recurrenceTemplate.weeklyTemplate.sunday Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recurs on Sunday
   * - **Definition:** Indicates that recurring appointments should occur on Sundays.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sunday?: BooleanType | undefined;

  /**
   * Appointment.recurrenceTemplate.weeklyTemplate.weekInterval Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recurs every nth week
   * - **Definition:** The interval defines if the recurrence is every nth week. The default is every week, so it is expected that this value will be 2 or more. e.g. For recurring every second week this interval would be 2, or every third week the interval would be 3.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private weekInterval?: PositiveIntType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `monday` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getMondayElement(): BooleanType {
    return this.monday ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `monday` property.
   *
   * @param element - the `monday` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMondayElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.monday; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.monday = element;
    } else {
      this.monday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `monday` property exists and has a value; `false` otherwise
   */
  public hasMondayElement(): boolean {
    return isDefined<BooleanType>(this.monday) && !this.monday.isEmpty();
  }

  /**
   * @returns the `monday` property value as a fhirBoolean if defined; else undefined
   */
  public getMonday(): fhirBoolean | undefined {
    return this.monday?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `monday` property.
   *
   * @param value - the `monday` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMonday(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.monday (${String(value)})`;
      this.monday = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.monday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `monday` property exists and has a value; `false` otherwise
   */
  public hasMonday(): boolean {
    return this.hasMondayElement();
  }

  /**
   * @returns the `tuesday` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getTuesdayElement(): BooleanType {
    return this.tuesday ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `tuesday` property.
   *
   * @param element - the `tuesday` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTuesdayElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.tuesday; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.tuesday = element;
    } else {
      this.tuesday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `tuesday` property exists and has a value; `false` otherwise
   */
  public hasTuesdayElement(): boolean {
    return isDefined<BooleanType>(this.tuesday) && !this.tuesday.isEmpty();
  }

  /**
   * @returns the `tuesday` property value as a fhirBoolean if defined; else undefined
   */
  public getTuesday(): fhirBoolean | undefined {
    return this.tuesday?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `tuesday` property.
   *
   * @param value - the `tuesday` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTuesday(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.tuesday (${String(value)})`;
      this.tuesday = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.tuesday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `tuesday` property exists and has a value; `false` otherwise
   */
  public hasTuesday(): boolean {
    return this.hasTuesdayElement();
  }

  /**
   * @returns the `wednesday` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getWednesdayElement(): BooleanType {
    return this.wednesday ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `wednesday` property.
   *
   * @param element - the `wednesday` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWednesdayElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.wednesday; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.wednesday = element;
    } else {
      this.wednesday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `wednesday` property exists and has a value; `false` otherwise
   */
  public hasWednesdayElement(): boolean {
    return isDefined<BooleanType>(this.wednesday) && !this.wednesday.isEmpty();
  }

  /**
   * @returns the `wednesday` property value as a fhirBoolean if defined; else undefined
   */
  public getWednesday(): fhirBoolean | undefined {
    return this.wednesday?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `wednesday` property.
   *
   * @param value - the `wednesday` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWednesday(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.wednesday (${String(value)})`;
      this.wednesday = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.wednesday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `wednesday` property exists and has a value; `false` otherwise
   */
  public hasWednesday(): boolean {
    return this.hasWednesdayElement();
  }

  /**
   * @returns the `thursday` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getThursdayElement(): BooleanType {
    return this.thursday ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `thursday` property.
   *
   * @param element - the `thursday` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setThursdayElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.thursday; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.thursday = element;
    } else {
      this.thursday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `thursday` property exists and has a value; `false` otherwise
   */
  public hasThursdayElement(): boolean {
    return isDefined<BooleanType>(this.thursday) && !this.thursday.isEmpty();
  }

  /**
   * @returns the `thursday` property value as a fhirBoolean if defined; else undefined
   */
  public getThursday(): fhirBoolean | undefined {
    return this.thursday?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `thursday` property.
   *
   * @param value - the `thursday` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setThursday(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.thursday (${String(value)})`;
      this.thursday = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.thursday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `thursday` property exists and has a value; `false` otherwise
   */
  public hasThursday(): boolean {
    return this.hasThursdayElement();
  }

  /**
   * @returns the `friday` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getFridayElement(): BooleanType {
    return this.friday ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `friday` property.
   *
   * @param element - the `friday` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFridayElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.friday; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.friday = element;
    } else {
      this.friday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `friday` property exists and has a value; `false` otherwise
   */
  public hasFridayElement(): boolean {
    return isDefined<BooleanType>(this.friday) && !this.friday.isEmpty();
  }

  /**
   * @returns the `friday` property value as a fhirBoolean if defined; else undefined
   */
  public getFriday(): fhirBoolean | undefined {
    return this.friday?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `friday` property.
   *
   * @param value - the `friday` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFriday(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.friday (${String(value)})`;
      this.friday = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.friday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `friday` property exists and has a value; `false` otherwise
   */
  public hasFriday(): boolean {
    return this.hasFridayElement();
  }

  /**
   * @returns the `saturday` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getSaturdayElement(): BooleanType {
    return this.saturday ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `saturday` property.
   *
   * @param element - the `saturday` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSaturdayElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.saturday; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.saturday = element;
    } else {
      this.saturday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `saturday` property exists and has a value; `false` otherwise
   */
  public hasSaturdayElement(): boolean {
    return isDefined<BooleanType>(this.saturday) && !this.saturday.isEmpty();
  }

  /**
   * @returns the `saturday` property value as a fhirBoolean if defined; else undefined
   */
  public getSaturday(): fhirBoolean | undefined {
    return this.saturday?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `saturday` property.
   *
   * @param value - the `saturday` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSaturday(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.saturday (${String(value)})`;
      this.saturday = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.saturday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `saturday` property exists and has a value; `false` otherwise
   */
  public hasSaturday(): boolean {
    return this.hasSaturdayElement();
  }

  /**
   * @returns the `sunday` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getSundayElement(): BooleanType {
    return this.sunday ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sunday` property.
   *
   * @param element - the `sunday` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSundayElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.sunday; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.sunday = element;
    } else {
      this.sunday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sunday` property exists and has a value; `false` otherwise
   */
  public hasSundayElement(): boolean {
    return isDefined<BooleanType>(this.sunday) && !this.sunday.isEmpty();
  }

  /**
   * @returns the `sunday` property value as a fhirBoolean if defined; else undefined
   */
  public getSunday(): fhirBoolean | undefined {
    return this.sunday?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `sunday` property.
   *
   * @param value - the `sunday` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSunday(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.sunday (${String(value)})`;
      this.sunday = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.sunday = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sunday` property exists and has a value; `false` otherwise
   */
  public hasSunday(): boolean {
    return this.hasSundayElement();
  }

  /**
   * @returns the `weekInterval` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getWeekIntervalElement(): PositiveIntType {
    return this.weekInterval ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `weekInterval` property.
   *
   * @param element - the `weekInterval` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWeekIntervalElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.weekInterval; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.weekInterval = element;
    } else {
      this.weekInterval = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `weekInterval` property exists and has a value; `false` otherwise
   */
  public hasWeekIntervalElement(): boolean {
    return isDefined<PositiveIntType>(this.weekInterval) && !this.weekInterval.isEmpty();
  }

  /**
   * @returns the `weekInterval` property value as a fhirPositiveInt if defined; else undefined
   */
  public getWeekInterval(): fhirPositiveInt | undefined {
    return this.weekInterval?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `weekInterval` property.
   *
   * @param value - the `weekInterval` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWeekInterval(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.weeklyTemplate.weekInterval (${String(value)})`;
      this.weekInterval = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.weekInterval = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `weekInterval` property exists and has a value; `false` otherwise
   */
  public hasWeekInterval(): boolean {
    return this.hasWeekIntervalElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Appointment.recurrenceTemplate.weeklyTemplate';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.monday,
      this.tuesday,
      this.wednesday,
      this.thursday,
      this.friday,
      this.saturday,
      this.sunday,
      this.weekInterval,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AppointmentRecurrenceTemplateWeeklyTemplateComponent {
    const dest = new AppointmentRecurrenceTemplateWeeklyTemplateComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AppointmentRecurrenceTemplateWeeklyTemplateComponent): void {
    super.copyValues(dest);
    dest.monday = this.monday?.copy();
    dest.tuesday = this.tuesday?.copy();
    dest.wednesday = this.wednesday?.copy();
    dest.thursday = this.thursday?.copy();
    dest.friday = this.friday?.copy();
    dest.saturday = this.saturday?.copy();
    dest.sunday = this.sunday?.copy();
    dest.weekInterval = this.weekInterval?.copy();
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

    if (this.hasMondayElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getMondayElement(), 'monday', jsonObj);
    }

    if (this.hasTuesdayElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getTuesdayElement(), 'tuesday', jsonObj);
    }

    if (this.hasWednesdayElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getWednesdayElement(), 'wednesday', jsonObj);
    }

    if (this.hasThursdayElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getThursdayElement(), 'thursday', jsonObj);
    }

    if (this.hasFridayElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getFridayElement(), 'friday', jsonObj);
    }

    if (this.hasSaturdayElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getSaturdayElement(), 'saturday', jsonObj);
    }

    if (this.hasSundayElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getSundayElement(), 'sunday', jsonObj);
    }

    if (this.hasWeekIntervalElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getWeekIntervalElement(), 'weekInterval', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * AppointmentRecurrenceTemplateMonthlyTemplateComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about monthly recurring appointments
 * - **Definition:** Information about monthly recurring appointments.
 *
 * @category Data Models: Resource
 * @see [FHIR Appointment](http://hl7.org/fhir/StructureDefinition/Appointment)
 */
export class AppointmentRecurrenceTemplateMonthlyTemplateComponent extends BackboneElement implements IBackboneElement {
  constructor(monthInterval: PositiveIntType | fhirPositiveInt | null = null) {
    super();

    this.monthInterval = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(monthInterval)) {
      if (monthInterval instanceof PrimitiveType) {
        this.setMonthIntervalElement(monthInterval);
      } else {
        this.setMonthInterval(monthInterval);
      }
    }
  }

  /**
   * Parse the provided `AppointmentRecurrenceTemplateMonthlyTemplateComponent` JSON to instantiate the AppointmentRecurrenceTemplateMonthlyTemplateComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AppointmentRecurrenceTemplateMonthlyTemplateComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AppointmentRecurrenceTemplateMonthlyTemplateComponent
   * @returns AppointmentRecurrenceTemplateMonthlyTemplateComponent data model or undefined for `AppointmentRecurrenceTemplateMonthlyTemplateComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AppointmentRecurrenceTemplateMonthlyTemplateComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AppointmentRecurrenceTemplateMonthlyTemplateComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AppointmentRecurrenceTemplateMonthlyTemplateComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'dayOfMonth';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setDayOfMonthElement(datatype);
    }

    fieldName = 'nthWeekOfMonth';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNthWeekOfMonth(datatype);
    }

    fieldName = 'dayOfWeek';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDayOfWeek(datatype);
    }

    fieldName = 'monthInterval';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setMonthInterval(null);
      } else {
        instance.setMonthIntervalElement(datatype);
      }
    } else {
      instance.setMonthInterval(null);
    }

    return instance;
  }

  /**
   * Appointment.recurrenceTemplate.monthlyTemplate.dayOfMonth Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recurs on a specific day of the month
   * - **Definition:** Indicates that appointments in the series of recurring appointments should occur on a specific day of the month.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dayOfMonth?: PositiveIntType | undefined;

  /**
   * Appointment.recurrenceTemplate.monthlyTemplate.nthWeekOfMonth Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates which week of the month the appointment should occur
   * - **Definition:** Indicates which week within a month the appointments in the series of recurring appointments should occur on.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private nthWeekOfMonth?: Coding | undefined;

  /**
   * Appointment.recurrenceTemplate.monthlyTemplate.dayOfWeek Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates which day of the week the appointment should occur
   * - **Definition:** Indicates which day of the week the recurring appointments should occur each nth week.
   * - **Comment:** This property is intended to be used with Appointment.recurrenceTemplate.monthly.nthWeek.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dayOfWeek?: Coding | undefined;

  /**
   * Appointment.recurrenceTemplate.monthlyTemplate.monthInterval Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recurs every nth month
   * - **Definition:** Indicates that recurring appointments should occur every nth month.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private monthInterval: PositiveIntType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `dayOfMonth` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getDayOfMonthElement(): PositiveIntType {
    return this.dayOfMonth ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `dayOfMonth` property.
   *
   * @param element - the `dayOfMonth` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDayOfMonthElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.monthlyTemplate.dayOfMonth; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.dayOfMonth = element;
    } else {
      this.dayOfMonth = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dayOfMonth` property exists and has a value; `false` otherwise
   */
  public hasDayOfMonthElement(): boolean {
    return isDefined<PositiveIntType>(this.dayOfMonth) && !this.dayOfMonth.isEmpty();
  }

  /**
   * @returns the `dayOfMonth` property value as a fhirPositiveInt if defined; else undefined
   */
  public getDayOfMonth(): fhirPositiveInt | undefined {
    return this.dayOfMonth?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `dayOfMonth` property.
   *
   * @param value - the `dayOfMonth` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDayOfMonth(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.monthlyTemplate.dayOfMonth (${String(value)})`;
      this.dayOfMonth = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.dayOfMonth = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dayOfMonth` property exists and has a value; `false` otherwise
   */
  public hasDayOfMonth(): boolean {
    return this.hasDayOfMonthElement();
  }

  /**
   * @returns the `nthWeekOfMonth` property value as a Coding object if defined; else an empty Coding object
   */
  public getNthWeekOfMonth(): Coding {
    return this.nthWeekOfMonth ?? new Coding();
  }

  /**
   * Assigns the provided NthWeekOfMonth object value to the `nthWeekOfMonth` property.
   *
   * @param value - the `nthWeekOfMonth` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNthWeekOfMonth(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.monthlyTemplate.nthWeekOfMonth; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.nthWeekOfMonth = value;
    } else {
      this.nthWeekOfMonth = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `nthWeekOfMonth` property exists and has a value; `false` otherwise
   */
  public hasNthWeekOfMonth(): boolean {
    return isDefined<Coding>(this.nthWeekOfMonth) && !this.nthWeekOfMonth.isEmpty();
  }

  /**
   * @returns the `dayOfWeek` property value as a Coding object if defined; else an empty Coding object
   */
  public getDayOfWeek(): Coding {
    return this.dayOfWeek ?? new Coding();
  }

  /**
   * Assigns the provided DayOfWeek object value to the `dayOfWeek` property.
   *
   * @param value - the `dayOfWeek` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDayOfWeek(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.monthlyTemplate.dayOfWeek; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.dayOfWeek = value;
    } else {
      this.dayOfWeek = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dayOfWeek` property exists and has a value; `false` otherwise
   */
  public hasDayOfWeek(): boolean {
    return isDefined<Coding>(this.dayOfWeek) && !this.dayOfWeek.isEmpty();
  }

  /**
   * @returns the `monthInterval` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getMonthIntervalElement(): PositiveIntType {
    return this.monthInterval ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `monthInterval` property.
   *
   * @param element - the `monthInterval` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMonthIntervalElement(element: PositiveIntType | undefined | null): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.monthlyTemplate.monthInterval; Provided value is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.monthInterval = element;
    } else {
      this.monthInterval = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `monthInterval` property exists and has a value; `false` otherwise
   */
  public hasMonthIntervalElement(): boolean {
    return isDefined<PositiveIntType>(this.monthInterval) && !this.monthInterval.isEmpty();
  }

  /**
   * @returns the `monthInterval` property value as a fhirPositiveInt if defined; else null
   */
  public getMonthInterval(): fhirPositiveInt | null {
    if (this.monthInterval?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.monthInterval.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `monthInterval` property.
   *
   * @param value - the `monthInterval` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMonthInterval(value: fhirPositiveInt | undefined | null): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.monthlyTemplate.monthInterval (${String(value)})`;
      this.monthInterval = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.monthInterval = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `monthInterval` property exists and has a value; `false` otherwise
   */
  public hasMonthInterval(): boolean {
    return this.hasMonthIntervalElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Appointment.recurrenceTemplate.monthlyTemplate';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.dayOfMonth,
      this.nthWeekOfMonth,
      this.dayOfWeek,
      this.monthInterval,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.monthInterval, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AppointmentRecurrenceTemplateMonthlyTemplateComponent {
    const dest = new AppointmentRecurrenceTemplateMonthlyTemplateComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AppointmentRecurrenceTemplateMonthlyTemplateComponent): void {
    super.copyValues(dest);
    dest.dayOfMonth = this.dayOfMonth?.copy();
    dest.nthWeekOfMonth = this.nthWeekOfMonth?.copy();
    dest.dayOfWeek = this.dayOfWeek?.copy();
    dest.monthInterval = this.monthInterval ? this.monthInterval.copy() : null;
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

    if (this.hasDayOfMonthElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getDayOfMonthElement(), 'dayOfMonth', jsonObj);
    }

    if (this.hasNthWeekOfMonth()) {
      setFhirComplexJson(this.getNthWeekOfMonth(), 'nthWeekOfMonth', jsonObj);
    }

    if (this.hasDayOfWeek()) {
      setFhirComplexJson(this.getDayOfWeek(), 'dayOfWeek', jsonObj);
    }

    if (this.hasMonthIntervalElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getMonthIntervalElement(), 'monthInterval', jsonObj);
    } else {
      jsonObj['monthInterval'] = null;
    }

    return jsonObj;
  }
}
/**
 * AppointmentRecurrenceTemplateYearlyTemplateComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about yearly recurring appointments
 * - **Definition:** Information about yearly recurring appointments.
 *
 * @category Data Models: Resource
 * @see [FHIR Appointment](http://hl7.org/fhir/StructureDefinition/Appointment)
 */
export class AppointmentRecurrenceTemplateYearlyTemplateComponent extends BackboneElement implements IBackboneElement {
  constructor(yearInterval: PositiveIntType | fhirPositiveInt | null = null) {
    super();

    this.yearInterval = null;
    if (isDefined<PositiveIntType | fhirPositiveInt>(yearInterval)) {
      if (yearInterval instanceof PrimitiveType) {
        this.setYearIntervalElement(yearInterval);
      } else {
        this.setYearInterval(yearInterval);
      }
    }
  }

  /**
   * Parse the provided `AppointmentRecurrenceTemplateYearlyTemplateComponent` JSON to instantiate the AppointmentRecurrenceTemplateYearlyTemplateComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AppointmentRecurrenceTemplateYearlyTemplateComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AppointmentRecurrenceTemplateYearlyTemplateComponent
   * @returns AppointmentRecurrenceTemplateYearlyTemplateComponent data model or undefined for `AppointmentRecurrenceTemplateYearlyTemplateComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AppointmentRecurrenceTemplateYearlyTemplateComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AppointmentRecurrenceTemplateYearlyTemplateComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AppointmentRecurrenceTemplateYearlyTemplateComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'yearInterval';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setYearInterval(null);
      } else {
        instance.setYearIntervalElement(datatype);
      }
    } else {
      instance.setYearInterval(null);
    }

    return instance;
  }

  /**
   * Appointment.recurrenceTemplate.yearlyTemplate.yearInterval Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recurs every nth year
   * - **Definition:** Appointment recurs every nth year.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private yearInterval: PositiveIntType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `yearInterval` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getYearIntervalElement(): PositiveIntType {
    return this.yearInterval ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `yearInterval` property.
   *
   * @param element - the `yearInterval` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setYearIntervalElement(element: PositiveIntType | undefined | null): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.yearlyTemplate.yearInterval; Provided value is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.yearInterval = element;
    } else {
      this.yearInterval = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `yearInterval` property exists and has a value; `false` otherwise
   */
  public hasYearIntervalElement(): boolean {
    return isDefined<PositiveIntType>(this.yearInterval) && !this.yearInterval.isEmpty();
  }

  /**
   * @returns the `yearInterval` property value as a fhirPositiveInt if defined; else null
   */
  public getYearInterval(): fhirPositiveInt | null {
    if (this.yearInterval?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.yearInterval.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `yearInterval` property.
   *
   * @param value - the `yearInterval` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setYearInterval(value: fhirPositiveInt | undefined | null): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Appointment.recurrenceTemplate.yearlyTemplate.yearInterval (${String(value)})`;
      this.yearInterval = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.yearInterval = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `yearInterval` property exists and has a value; `false` otherwise
   */
  public hasYearInterval(): boolean {
    return this.hasYearIntervalElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Appointment.recurrenceTemplate.yearlyTemplate';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.yearInterval,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.yearInterval, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AppointmentRecurrenceTemplateYearlyTemplateComponent {
    const dest = new AppointmentRecurrenceTemplateYearlyTemplateComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AppointmentRecurrenceTemplateYearlyTemplateComponent): void {
    super.copyValues(dest);
    dest.yearInterval = this.yearInterval ? this.yearInterval.copy() : null;
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

    if (this.hasYearIntervalElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getYearIntervalElement(), 'yearInterval', jsonObj);
    } else {
      jsonObj['yearInterval'] = null;
    }

    return jsonObj;
  }
}
