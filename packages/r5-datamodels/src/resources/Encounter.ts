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
 * Encounter Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Encounter
 * StructureDefinition.name: Encounter
 * StructureDefinition.description: An interaction between healthcare provider(s), and/or patient(s) for the purpose of providing healthcare service(s) or assessing the health status of patient(s).
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  JSON,
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  getPrimitiveTypeJson,
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
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, CodeableReference, Duration, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference, VirtualServiceDetail } from '../complex-types/complex-datatypes';
import { EncounterLocationStatusEnum } from '../code-systems/EncounterLocationStatusEnum';
import { EncounterStatusEnum } from '../code-systems/EncounterStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * Encounter Class
 *
 * @remarks
 * An interaction between healthcare provider(s), and/or patient(s) for the purpose of providing healthcare service(s) or assessing the health status of patient(s).
 *
 * **FHIR Specification**
 * - **Short:** An interaction during which services are provided to the patient
 * - **Definition:** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.  Encounter is primarily used to record information about the actual activities that occurred, where Appointment is used to record planned activities.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Encounter](http://hl7.org/fhir/StructureDefinition/Encounter)
 */
export class Encounter extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.encounterStatusEnum = new EncounterStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<EncounterStatusEnum>(
      status,
      EncounterStatusEnum,
      this.encounterStatusEnum,
      'Encounter.status',
    );
  }

  /**
   * Parse the provided `Encounter` JSON to instantiate the Encounter data model.
   *
   * @param sourceJson - JSON representing FHIR `Encounter`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Encounter
   * @returns Encounter data model or undefined for `Encounter`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Encounter | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Encounter';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Encounter();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Encounter');
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

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPriority(datatype);
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

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'subjectStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubjectStatus(datatype);
    }

    fieldName = 'episodeOfCare';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEpisodeOfCare(datatype);
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

    fieldName = 'careTeam';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCareTeam(datatype);
        }
      });
  }

    fieldName = 'partOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPartOf(datatype);
    }

    fieldName = 'serviceProvider';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setServiceProvider(datatype);
    }

    fieldName = 'participant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EncounterParticipantComponent | undefined = EncounterParticipantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addParticipant(component);
        }
      });
    }

    fieldName = 'appointment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAppointment(datatype);
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

    fieldName = 'actualPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setActualPeriod(datatype);
    }

    fieldName = 'plannedStartDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setPlannedStartDateElement(datatype);
    }

    fieldName = 'plannedEndDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setPlannedEndDateElement(datatype);
    }

    fieldName = 'length';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLength(datatype);
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EncounterReasonComponent | undefined = EncounterReasonComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addReason(component);
        }
      });
    }

    fieldName = 'diagnosis';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EncounterDiagnosisComponent | undefined = EncounterDiagnosisComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDiagnosis(component);
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

    fieldName = 'dietPreference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDietPreference(datatype);
        }
      });
    }

    fieldName = 'specialArrangement';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSpecialArrangement(datatype);
        }
      });
    }

    fieldName = 'specialCourtesy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSpecialCourtesy(datatype);
        }
      });
    }

    fieldName = 'admission';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: EncounterAdmissionComponent | undefined = EncounterAdmissionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAdmission(component);
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EncounterLocationComponent | undefined = EncounterLocationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addLocation(component);
        }
      });
    }

    return instance;
  }

  /**
   * Encounter.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier(s) by which this encounter is known
   * - **Definition:** Identifier(s) by which this encounter is known.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: EncounterStatus
   *
   * @see {@link EncounterStatusEnum }
   */
  private readonly encounterStatusEnum: EncounterStatusEnum;

  /**
   * Encounter.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown
   * - **Definition:** The current state of the encounter (not the state of the patient within the encounter - that is subjectState).
   * - **Comment:** Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Encounter.class Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of patient encounter context - e.g. Inpatient, outpatient
   * - **Definition:** Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private class_?: CodeableConcept[] | undefined;

  /**
   * Encounter.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates the urgency of the encounter
   * - **Definition:** Indicates the urgency of the encounter.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private priority?: CodeableConcept | undefined;

  /**
   * Encounter.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific type of encounter (e.g. e-mail consultation, surgical day-care, ...)
   * - **Definition:** Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
   * - **Comment:** Since there are many ways to further classify encounters, this element is 0..*.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * Encounter.serviceType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific type of service
   * - **Definition:** Broad categorization of the service that is to be provided (e.g. cardiology).
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
   * Encounter.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The patient or group related to this encounter
   * - **Definition:** The patient or group related to this encounter. In some use-cases the patient MAY not be present, such as a case meeting about a patient between several practitioners or a careteam.
   * - **Comment:** While the encounter is always about the patient, the patient might not actually be known in all contexts of use, and there may be a group of patients that could be anonymous (such as in a group therapy for Alcoholics Anonymous - where the recording of the encounter could be used for billing on the number of people/staff and not important to the context of the specific patients) or alternately in veterinary care a herd of sheep receiving treatment (where the animals are not individually tracked).
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
   * Encounter.subjectStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The current status of the subject in relation to the Encounter
   * - **Definition:** The subjectStatus value can be used to track the patient\'s status within the encounter. It details whether the patient has arrived or departed, has been triaged or is currently in a waiting status.
   * - **Comment:** Different use-cases are likely to have different permitted transitions between states, such as an Emergency department could use `arrived` when the patient first presents, then `triaged` once has been assessed by a nurse, then `receiving-care` once treatment begins, however other sectors may use a different set of these values, or their own custom set in place of this example valueset provided.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subjectStatus?: CodeableConcept | undefined;

  /**
   * Encounter.episodeOfCare Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Episode(s) of care that this encounter should be recorded against
   * - **Definition:** Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/EpisodeOfCare',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private episodeOfCare?: Reference[] | undefined;

  /**
   * Encounter.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The request that initiated this encounter
   * - **Definition:** The request this encounter satisfies (e.g. incoming referral or procedure request).
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
   * Encounter.careTeam Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The group(s) that are allocated to participate in this encounter
   * - **Definition:** The group(s) of individuals, organizations that are allocated to participate in this encounter. The participants backbone will record the actuals of when these individuals participated during the encounter.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private careTeam?: Reference[] | undefined;

  /**
   * Encounter.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Another Encounter this encounter is part of
   * - **Definition:** Another Encounter of which this encounter is a part of (administratively or in time).
   * - **Comment:** This is also used for associating a child\'s encounter back to the mother\'s encounter. Refer to the Notes section in the Patient resource for further details.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private partOf?: Reference | undefined;

  /**
   * Encounter.serviceProvider Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The organization (facility) responsible for this encounter
   * - **Definition:** The organization that is primarily responsible for this Encounter\'s services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the colonoscopy example on the Encounter examples tab.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private serviceProvider?: Reference | undefined;

  /**
   * Encounter.participant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** List of participants involved in the encounter
   * - **Definition:** The list of people responsible for providing the service.
   * - **Comment:** Any Patient or Group present in the participation.actor must also be the subject, though the subject may be absent from the participation.actor for cases where the patient (or group) is not present, such as during a case review conference.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private participant?: EncounterParticipantComponent[] | undefined;

  /**
   * Encounter.appointment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The appointment that scheduled this encounter
   * - **Definition:** The appointment that scheduled this encounter.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Appointment',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private appointment?: Reference[] | undefined;

  /**
   * Encounter.virtualService Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Connection details of a virtual service (e.g. conference call)
   * - **Definition:** Connection details of a virtual service (e.g. conference call).
   * - **Comment:** There are two types of virtual meetings that often exist: * a persistent, virtual meeting room that can only be used for a single purpose at a time,  * and a dynamic virtual meeting room that is generated on demand for a specific purpose. Implementers may consider using Location.virtualService for persistent meeting rooms. If each participant would have a different meeting link, an extension using the VirtualServiceContactDetail  can be applied to the Encounter.participant BackboneElement.
   * - **FHIR Type:** `VirtualServiceDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private virtualService?: VirtualServiceDetail[] | undefined;

  /**
   * Encounter.actualPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual start and end time of the encounter
   * - **Definition:** The actual start and end time of the encounter.
   * - **Comment:** If not (yet) known, the end of the Period may be omitted.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actualPeriod?: Period | undefined;

  /**
   * Encounter.plannedStartDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The planned start date/time (or admission date) of the encounter
   * - **Definition:** The planned start date/time (or admission date) of the encounter.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private plannedStartDate?: DateTimeType | undefined;

  /**
   * Encounter.plannedEndDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The planned end date/time (or discharge date) of the encounter
   * - **Definition:** The planned end date/time (or discharge date) of the encounter.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private plannedEndDate?: DateTimeType | undefined;

  /**
   * Encounter.length Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actual quantity of time the encounter lasted (less time absent)
   * - **Definition:** Actual quantity of time the encounter lasted. This excludes the time during leaves of absence. When missing it is the time in between the start and end values.
   * - **Comment:** If the precision on these values is low (e.g. to the day only) then this may be considered was an all day (or multi-day) encounter, unless the duration is included, where that amount of time occurred sometime during the interval. May differ from the time in `Encounter.period` due to leave of absence(s).
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private length?: Duration | undefined;

  /**
   * Encounter.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The list of medical reasons that are expected to be addressed during the episode of care
   * - **Definition:** The list of medical reasons that are expected to be addressed during the episode of care.
   * - **Comment:** The reason communicates what medical problem the patient has that should be addressed during the episode of care.  This reason could be patient reported complaint, a clinical indication that was determined in a previous encounter or episode of care, or some planned care such as an immunization recommendation.  In the case where you have a primary reason, but are expecting to also address other problems, you can list the primary reason with a use code of \'Chief Complaint\', while the other problems being addressed would have a use code of \'Reason for Visit\'. Examples:  * pregnancy would use HealthcareService or a coding as the reason  * patient home monitoring could use Condition as the reason
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reason?: EncounterReasonComponent[] | undefined;

  /**
   * Encounter.diagnosis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The list of diagnosis relevant to this encounter
   * - **Definition:** The list of diagnosis relevant to this encounter.
   * - **Comment:** Also note that for the purpose of billing, the diagnoses are recorded in the account where they can be ranked appropriately for how the invoicing/claiming documentation needs to be prepared.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private diagnosis?: EncounterDiagnosisComponent[] | undefined;

  /**
   * Encounter.account Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The set of accounts that may be used for billing for this Encounter
   * - **Definition:** The set of accounts that may be used for billing for this Encounter.
   * - **Comment:** The billing system may choose to allocate billable items associated with the Encounter to different referenced Accounts based on internal business rules.
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
   * Encounter.dietPreference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Diet preferences reported by the patient
   * - **Definition:** Diet preferences reported by the patient.
   * - **Comment:** For example, a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).
   * - **Requirements:** Used to track patient\'s diet restrictions and/or preference. For a complete description of the nutrition needs of a patient during their stay, one should use the nutritionOrder resource which links to Encounter.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dietPreference?: CodeableConcept[] | undefined;

  /**
   * Encounter.specialArrangement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Wheelchair, translator, stretcher, etc
   * - **Definition:** Any special requests that have been made for this encounter, such as the provision of specific equipment or other things.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private specialArrangement?: CodeableConcept[] | undefined;

  /**
   * Encounter.specialCourtesy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Special courtesies (VIP, board member)
   * - **Definition:** Special courtesies that may be provided to the patient during the encounter (VIP, board member, professional courtesy).
   * - **Comment:** Although the specialCourtesy property can contain values like VIP, the purpose of this field is intended to be used for flagging additional `benefits` that might occur for the patient during the encounter. It could include things like the patient is to have a private room, special room features, receive a friendly visit from hospital adminisitration, or should be briefed on treatment by senior staff during the stay. It is not specifically intended to be used for securing the specific record - that is the purpose of the security meta tag, and where appropriate, both fields could be used.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private specialCourtesy?: CodeableConcept[] | undefined;

  /**
   * Encounter.admission Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details about the admission to a healthcare service
   * - **Definition:** Details about the stay during which a healthcare service is provided. This does not describe the event of admitting the patient, but rather any information that is relevant from the time of admittance until the time of discharge.
   * - **Comment:** An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included. The duration recorded in the period of this encounter covers the entire scope of this admission record.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private admission?: EncounterAdmissionComponent | undefined;

  /**
   * Encounter.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** List of locations where the patient has been
   * - **Definition:** List of locations where  the patient has been during this encounter.
   * - **Comment:** Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client\'s home" and an encounter.class = "virtual".
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private location?: EncounterLocationComponent[] | undefined;

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
      const optErrMsg = `Invalid Encounter.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Encounter.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Encounter.status`;
      assertEnumCodeType<EncounterStatusEnum>(enumType, EncounterStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Encounter.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.encounterStatusEnum);
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
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Encounter.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.encounterStatusEnum);
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
      const optErrMsg = `Invalid Encounter.class; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.class; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.priority; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.serviceType; Provided value array has an element that is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid Encounter.serviceType; Provided element is not an instance of CodeableReference.`;
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
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('Encounter.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.subject', [
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
   * @returns the `subjectStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSubjectStatus(): CodeableConcept {
    return this.subjectStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided SubjectStatus object value to the `subjectStatus` property.
   *
   * @param value - the `subjectStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubjectStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.subjectStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.subjectStatus = value;
    } else {
      this.subjectStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subjectStatus` property exists and has a value; `false` otherwise
   */
  public hasSubjectStatus(): boolean {
    return isDefined<CodeableConcept>(this.subjectStatus) && !this.subjectStatus.isEmpty();
  }

  /**
   * @returns the `episodeOfCare` property value as a Reference array
   */
  public getEpisodeOfCare(): Reference[] {
    return this.episodeOfCare ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `episodeOfCare` property.
   *
   * @decorator `@ReferenceTargets('Encounter.episodeOfCare', ['EpisodeOfCare',])`
   *
   * @param value - the `episodeOfCare` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.episodeOfCare', [
    'EpisodeOfCare',
  ])
  public setEpisodeOfCare(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.episodeOfCare = value;
    } else {
      this.episodeOfCare = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `episodeOfCare` array property.
   *
   * @decorator `@ReferenceTargets('Encounter.episodeOfCare', ['EpisodeOfCare',])`
   *
   * @param value - the `episodeOfCare` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.episodeOfCare', [
    'EpisodeOfCare',
  ])
  public addEpisodeOfCare(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEpisodeOfCare();
      this.episodeOfCare?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `episodeOfCare` property exists and has a value; `false` otherwise
   */
  public hasEpisodeOfCare(): boolean {
    return isDefinedList<Reference>(this.episodeOfCare) && this.episodeOfCare.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `episodeOfCare` property
   */
  private initEpisodeOfCare(): void {
    if (!this.hasEpisodeOfCare()) {
      this.episodeOfCare = [] as Reference[];
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
   * @decorator `@ReferenceTargets('Encounter.basedOn', ['CarePlan','DeviceRequest','MedicationRequest','ServiceRequest',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.basedOn', [
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
   * @decorator `@ReferenceTargets('Encounter.basedOn', ['CarePlan','DeviceRequest','MedicationRequest','ServiceRequest',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.basedOn', [
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
   * @returns the `careTeam` property value as a Reference array
   */
  public getCareTeam(): Reference[] {
    return this.careTeam ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `careTeam` property.
   *
   * @decorator `@ReferenceTargets('Encounter.careTeam', ['CareTeam',])`
   *
   * @param value - the `careTeam` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.careTeam', [
    'CareTeam',
  ])
  public setCareTeam(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.careTeam = value;
    } else {
      this.careTeam = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `careTeam` array property.
   *
   * @decorator `@ReferenceTargets('Encounter.careTeam', ['CareTeam',])`
   *
   * @param value - the `careTeam` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.careTeam', [
    'CareTeam',
  ])
  public addCareTeam(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initCareTeam();
      this.careTeam?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `careTeam` property exists and has a value; `false` otherwise
   */
  public hasCareTeam(): boolean {
    return isDefinedList<Reference>(this.careTeam) && this.careTeam.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `careTeam` property
   */
  private initCareTeam(): void {
    if (!this.hasCareTeam()) {
      this.careTeam = [] as Reference[];
    }
  }

  /**
   * @returns the `partOf` property value as a Reference object; else an empty Reference object
   */
  public getPartOf(): Reference {
    return this.partOf ?? new Reference();
  }

  /**
   * Assigns the provided PartOf object value to the `partOf` property.
   *
   * @decorator `@ReferenceTargets('Encounter.partOf', ['Encounter',])`
   *
   * @param value - the `partOf` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.partOf', [
    'Encounter',
  ])
  public setPartOf(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.partOf = value;
    } else {
      this.partOf = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `partOf` property exists and has a value; `false` otherwise
   */
  public hasPartOf(): boolean {
    return isDefined<Reference>(this.partOf) && !this.partOf.isEmpty();
  }

  /**
   * @returns the `serviceProvider` property value as a Reference object; else an empty Reference object
   */
  public getServiceProvider(): Reference {
    return this.serviceProvider ?? new Reference();
  }

  /**
   * Assigns the provided ServiceProvider object value to the `serviceProvider` property.
   *
   * @decorator `@ReferenceTargets('Encounter.serviceProvider', ['Organization',])`
   *
   * @param value - the `serviceProvider` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.serviceProvider', [
    'Organization',
  ])
  public setServiceProvider(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.serviceProvider = value;
    } else {
      this.serviceProvider = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `serviceProvider` property exists and has a value; `false` otherwise
   */
  public hasServiceProvider(): boolean {
    return isDefined<Reference>(this.serviceProvider) && !this.serviceProvider.isEmpty();
  }

  /**
   * @returns the `participant` property value as a EncounterParticipantComponent array
   */
  public getParticipant(): EncounterParticipantComponent[] {
    return this.participant ?? ([] as EncounterParticipantComponent[]);
  }

  /**
   * Assigns the provided EncounterParticipantComponent array value to the `participant` property.
   *
   * @param value - the `participant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParticipant(value: EncounterParticipantComponent[] | undefined): this {
    if (isDefinedList<EncounterParticipantComponent>(value)) {
      const optErrMsg = `Invalid Encounter.participant; Provided value array has an element that is not an instance of EncounterParticipantComponent.`;
      assertFhirTypeList<EncounterParticipantComponent>(value, EncounterParticipantComponent, optErrMsg);
      this.participant = value;
    } else {
      this.participant = undefined;
    }
    return this;
  }

  /**
   * Add the provided EncounterParticipantComponent value to the `participant` array property.
   *
   * @param value - the `participant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParticipant(value: EncounterParticipantComponent | undefined): this {
    if (isDefined<EncounterParticipantComponent>(value)) {
      const optErrMsg = `Invalid Encounter.participant; Provided element is not an instance of EncounterParticipantComponent.`;
      assertFhirType<EncounterParticipantComponent>(value, EncounterParticipantComponent, optErrMsg);
      this.initParticipant();
      this.participant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `participant` property exists and has a value; `false` otherwise
   */
  public hasParticipant(): boolean {
    return isDefinedList<EncounterParticipantComponent>(this.participant) && this.participant.some((item: EncounterParticipantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `participant` property
   */
  private initParticipant(): void {
    if(!this.hasParticipant()) {
      this.participant = [] as EncounterParticipantComponent[];
    }
  }

  /**
   * @returns the `appointment` property value as a Reference array
   */
  public getAppointment(): Reference[] {
    return this.appointment ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `appointment` property.
   *
   * @decorator `@ReferenceTargets('Encounter.appointment', ['Appointment',])`
   *
   * @param value - the `appointment` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.appointment', [
    'Appointment',
  ])
  public setAppointment(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.appointment = value;
    } else {
      this.appointment = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `appointment` array property.
   *
   * @decorator `@ReferenceTargets('Encounter.appointment', ['Appointment',])`
   *
   * @param value - the `appointment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.appointment', [
    'Appointment',
  ])
  public addAppointment(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAppointment();
      this.appointment?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `appointment` property exists and has a value; `false` otherwise
   */
  public hasAppointment(): boolean {
    return isDefinedList<Reference>(this.appointment) && this.appointment.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `appointment` property
   */
  private initAppointment(): void {
    if (!this.hasAppointment()) {
      this.appointment = [] as Reference[];
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
      const optErrMsg = `Invalid Encounter.virtualService; Provided value array has an element that is not an instance of VirtualServiceDetail.`;
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
      const optErrMsg = `Invalid Encounter.virtualService; Provided element is not an instance of VirtualServiceDetail.`;
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
   * @returns the `actualPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getActualPeriod(): Period {
    return this.actualPeriod ?? new Period();
  }

  /**
   * Assigns the provided ActualPeriod object value to the `actualPeriod` property.
   *
   * @param value - the `actualPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setActualPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Encounter.actualPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.actualPeriod = value;
    } else {
      this.actualPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actualPeriod` property exists and has a value; `false` otherwise
   */
  public hasActualPeriod(): boolean {
    return isDefined<Period>(this.actualPeriod) && !this.actualPeriod.isEmpty();
  }

  /**
   * @returns the `plannedStartDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getPlannedStartDateElement(): DateTimeType {
    return this.plannedStartDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `plannedStartDate` property.
   *
   * @param element - the `plannedStartDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPlannedStartDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Encounter.plannedStartDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.plannedStartDate = element;
    } else {
      this.plannedStartDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `plannedStartDate` property exists and has a value; `false` otherwise
   */
  public hasPlannedStartDateElement(): boolean {
    return isDefined<DateTimeType>(this.plannedStartDate) && !this.plannedStartDate.isEmpty();
  }

  /**
   * @returns the `plannedStartDate` property value as a fhirDateTime if defined; else undefined
   */
  public getPlannedStartDate(): fhirDateTime | undefined {
    return this.plannedStartDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `plannedStartDate` property.
   *
   * @param value - the `plannedStartDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPlannedStartDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Encounter.plannedStartDate (${String(value)})`;
      this.plannedStartDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.plannedStartDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `plannedStartDate` property exists and has a value; `false` otherwise
   */
  public hasPlannedStartDate(): boolean {
    return this.hasPlannedStartDateElement();
  }

  /**
   * @returns the `plannedEndDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getPlannedEndDateElement(): DateTimeType {
    return this.plannedEndDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `plannedEndDate` property.
   *
   * @param element - the `plannedEndDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPlannedEndDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Encounter.plannedEndDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.plannedEndDate = element;
    } else {
      this.plannedEndDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `plannedEndDate` property exists and has a value; `false` otherwise
   */
  public hasPlannedEndDateElement(): boolean {
    return isDefined<DateTimeType>(this.plannedEndDate) && !this.plannedEndDate.isEmpty();
  }

  /**
   * @returns the `plannedEndDate` property value as a fhirDateTime if defined; else undefined
   */
  public getPlannedEndDate(): fhirDateTime | undefined {
    return this.plannedEndDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `plannedEndDate` property.
   *
   * @param value - the `plannedEndDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPlannedEndDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Encounter.plannedEndDate (${String(value)})`;
      this.plannedEndDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.plannedEndDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `plannedEndDate` property exists and has a value; `false` otherwise
   */
  public hasPlannedEndDate(): boolean {
    return this.hasPlannedEndDateElement();
  }

  /**
   * @returns the `length` property value as a Duration object if defined; else an empty Duration object
   */
  public getLength(): Duration {
    return this.length ?? new Duration();
  }

  /**
   * Assigns the provided Length object value to the `length` property.
   *
   * @param value - the `length` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLength(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid Encounter.length; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.length = value;
    } else {
      this.length = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `length` property exists and has a value; `false` otherwise
   */
  public hasLength(): boolean {
    return isDefined<Duration>(this.length) && !this.length.isEmpty();
  }

  /**
   * @returns the `reason` property value as a EncounterReasonComponent array
   */
  public getReason(): EncounterReasonComponent[] {
    return this.reason ?? ([] as EncounterReasonComponent[]);
  }

  /**
   * Assigns the provided EncounterReasonComponent array value to the `reason` property.
   *
   * @param value - the `reason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: EncounterReasonComponent[] | undefined): this {
    if (isDefinedList<EncounterReasonComponent>(value)) {
      const optErrMsg = `Invalid Encounter.reason; Provided value array has an element that is not an instance of EncounterReasonComponent.`;
      assertFhirTypeList<EncounterReasonComponent>(value, EncounterReasonComponent, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * Add the provided EncounterReasonComponent value to the `reason` array property.
   *
   * @param value - the `reason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReason(value: EncounterReasonComponent | undefined): this {
    if (isDefined<EncounterReasonComponent>(value)) {
      const optErrMsg = `Invalid Encounter.reason; Provided element is not an instance of EncounterReasonComponent.`;
      assertFhirType<EncounterReasonComponent>(value, EncounterReasonComponent, optErrMsg);
      this.initReason();
      this.reason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefinedList<EncounterReasonComponent>(this.reason) && this.reason.some((item: EncounterReasonComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `reason` property
   */
  private initReason(): void {
    if(!this.hasReason()) {
      this.reason = [] as EncounterReasonComponent[];
    }
  }

  /**
   * @returns the `diagnosis` property value as a EncounterDiagnosisComponent array
   */
  public getDiagnosis(): EncounterDiagnosisComponent[] {
    return this.diagnosis ?? ([] as EncounterDiagnosisComponent[]);
  }

  /**
   * Assigns the provided EncounterDiagnosisComponent array value to the `diagnosis` property.
   *
   * @param value - the `diagnosis` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDiagnosis(value: EncounterDiagnosisComponent[] | undefined): this {
    if (isDefinedList<EncounterDiagnosisComponent>(value)) {
      const optErrMsg = `Invalid Encounter.diagnosis; Provided value array has an element that is not an instance of EncounterDiagnosisComponent.`;
      assertFhirTypeList<EncounterDiagnosisComponent>(value, EncounterDiagnosisComponent, optErrMsg);
      this.diagnosis = value;
    } else {
      this.diagnosis = undefined;
    }
    return this;
  }

  /**
   * Add the provided EncounterDiagnosisComponent value to the `diagnosis` array property.
   *
   * @param value - the `diagnosis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDiagnosis(value: EncounterDiagnosisComponent | undefined): this {
    if (isDefined<EncounterDiagnosisComponent>(value)) {
      const optErrMsg = `Invalid Encounter.diagnosis; Provided element is not an instance of EncounterDiagnosisComponent.`;
      assertFhirType<EncounterDiagnosisComponent>(value, EncounterDiagnosisComponent, optErrMsg);
      this.initDiagnosis();
      this.diagnosis?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `diagnosis` property exists and has a value; `false` otherwise
   */
  public hasDiagnosis(): boolean {
    return isDefinedList<EncounterDiagnosisComponent>(this.diagnosis) && this.diagnosis.some((item: EncounterDiagnosisComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `diagnosis` property
   */
  private initDiagnosis(): void {
    if(!this.hasDiagnosis()) {
      this.diagnosis = [] as EncounterDiagnosisComponent[];
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
   * @decorator `@ReferenceTargets('Encounter.account', ['Account',])`
   *
   * @param value - the `account` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.account', [
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
   * @decorator `@ReferenceTargets('Encounter.account', ['Account',])`
   *
   * @param value - the `account` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.account', [
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
   * @returns the `dietPreference` property value as a CodeableConcept array
   */
  public getDietPreference(): CodeableConcept[] {
    return this.dietPreference ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `dietPreference` property.
   *
   * @param value - the `dietPreference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDietPreference(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.dietPreference; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.dietPreference = value;
    } else {
      this.dietPreference = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `dietPreference` array property.
   *
   * @param value - the `dietPreference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDietPreference(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.dietPreference; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initDietPreference();
      this.dietPreference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dietPreference` property exists and has a value; `false` otherwise
   */
  public hasDietPreference(): boolean {
    return isDefinedList<CodeableConcept>(this.dietPreference) && this.dietPreference.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `dietPreference` property
   */
  private initDietPreference(): void {
    if(!this.hasDietPreference()) {
      this.dietPreference = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `specialArrangement` property value as a CodeableConcept array
   */
  public getSpecialArrangement(): CodeableConcept[] {
    return this.specialArrangement ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `specialArrangement` property.
   *
   * @param value - the `specialArrangement` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecialArrangement(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.specialArrangement; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.specialArrangement = value;
    } else {
      this.specialArrangement = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `specialArrangement` array property.
   *
   * @param value - the `specialArrangement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSpecialArrangement(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.specialArrangement; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSpecialArrangement();
      this.specialArrangement?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specialArrangement` property exists and has a value; `false` otherwise
   */
  public hasSpecialArrangement(): boolean {
    return isDefinedList<CodeableConcept>(this.specialArrangement) && this.specialArrangement.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `specialArrangement` property
   */
  private initSpecialArrangement(): void {
    if(!this.hasSpecialArrangement()) {
      this.specialArrangement = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `specialCourtesy` property value as a CodeableConcept array
   */
  public getSpecialCourtesy(): CodeableConcept[] {
    return this.specialCourtesy ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `specialCourtesy` property.
   *
   * @param value - the `specialCourtesy` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecialCourtesy(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.specialCourtesy; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.specialCourtesy = value;
    } else {
      this.specialCourtesy = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `specialCourtesy` array property.
   *
   * @param value - the `specialCourtesy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSpecialCourtesy(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.specialCourtesy; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSpecialCourtesy();
      this.specialCourtesy?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specialCourtesy` property exists and has a value; `false` otherwise
   */
  public hasSpecialCourtesy(): boolean {
    return isDefinedList<CodeableConcept>(this.specialCourtesy) && this.specialCourtesy.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `specialCourtesy` property
   */
  private initSpecialCourtesy(): void {
    if(!this.hasSpecialCourtesy()) {
      this.specialCourtesy = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `admission` property value as a EncounterAdmissionComponent object if defined; else an empty EncounterAdmissionComponent object
   */
  public getAdmission(): EncounterAdmissionComponent {
    return this.admission ?? new EncounterAdmissionComponent();
  }

  /**
   * Assigns the provided Admission object value to the `admission` property.
   *
   * @param value - the `admission` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdmission(value: EncounterAdmissionComponent | undefined): this {
    if (isDefined<EncounterAdmissionComponent>(value)) {
      const optErrMsg = `Invalid Encounter.admission; Provided element is not an instance of EncounterAdmissionComponent.`;
      assertFhirType<EncounterAdmissionComponent>(value, EncounterAdmissionComponent, optErrMsg);
      this.admission = value;
    } else {
      this.admission = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `admission` property exists and has a value; `false` otherwise
   */
  public hasAdmission(): boolean {
    return isDefined<EncounterAdmissionComponent>(this.admission) && !this.admission.isEmpty();
  }

  /**
   * @returns the `location` property value as a EncounterLocationComponent array
   */
  public getLocation(): EncounterLocationComponent[] {
    return this.location ?? ([] as EncounterLocationComponent[]);
  }

  /**
   * Assigns the provided EncounterLocationComponent array value to the `location` property.
   *
   * @param value - the `location` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLocation(value: EncounterLocationComponent[] | undefined): this {
    if (isDefinedList<EncounterLocationComponent>(value)) {
      const optErrMsg = `Invalid Encounter.location; Provided value array has an element that is not an instance of EncounterLocationComponent.`;
      assertFhirTypeList<EncounterLocationComponent>(value, EncounterLocationComponent, optErrMsg);
      this.location = value;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * Add the provided EncounterLocationComponent value to the `location` array property.
   *
   * @param value - the `location` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLocation(value: EncounterLocationComponent | undefined): this {
    if (isDefined<EncounterLocationComponent>(value)) {
      const optErrMsg = `Invalid Encounter.location; Provided element is not an instance of EncounterLocationComponent.`;
      assertFhirType<EncounterLocationComponent>(value, EncounterLocationComponent, optErrMsg);
      this.initLocation();
      this.location?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return isDefinedList<EncounterLocationComponent>(this.location) && this.location.some((item: EncounterLocationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `location` property
   */
  private initLocation(): void {
    if(!this.hasLocation()) {
      this.location = [] as EncounterLocationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Encounter';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.class_,
      this.priority,
      this.type_,
      this.serviceType,
      this.subject,
      this.subjectStatus,
      this.episodeOfCare,
      this.basedOn,
      this.careTeam,
      this.partOf,
      this.serviceProvider,
      this.participant,
      this.appointment,
      this.virtualService,
      this.actualPeriod,
      this.plannedStartDate,
      this.plannedEndDate,
      this.length,
      this.reason,
      this.diagnosis,
      this.account,
      this.dietPreference,
      this.specialArrangement,
      this.specialCourtesy,
      this.admission,
      this.location,
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
  public override copy(): Encounter {
    const dest = new Encounter();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Encounter): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    const classList = copyListValues<CodeableConcept>(this.class_);
    dest.class_ = classList.length === 0 ? undefined : classList;
    dest.priority = this.priority?.copy();
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    const serviceTypeList = copyListValues<CodeableReference>(this.serviceType);
    dest.serviceType = serviceTypeList.length === 0 ? undefined : serviceTypeList;
    dest.subject = this.subject?.copy();
    dest.subjectStatus = this.subjectStatus?.copy();
    const episodeOfCareList = copyListValues<Reference>(this.episodeOfCare);
    dest.episodeOfCare = episodeOfCareList.length === 0 ? undefined : episodeOfCareList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    const careTeamList = copyListValues<Reference>(this.careTeam);
    dest.careTeam = careTeamList.length === 0 ? undefined : careTeamList;
    dest.partOf = this.partOf?.copy();
    dest.serviceProvider = this.serviceProvider?.copy();
    const participantList = copyListValues<EncounterParticipantComponent>(this.participant);
    dest.participant = participantList.length === 0 ? undefined : participantList;
    const appointmentList = copyListValues<Reference>(this.appointment);
    dest.appointment = appointmentList.length === 0 ? undefined : appointmentList;
    const virtualServiceList = copyListValues<VirtualServiceDetail>(this.virtualService);
    dest.virtualService = virtualServiceList.length === 0 ? undefined : virtualServiceList;
    dest.actualPeriod = this.actualPeriod?.copy();
    dest.plannedStartDate = this.plannedStartDate?.copy();
    dest.plannedEndDate = this.plannedEndDate?.copy();
    dest.length = this.length?.copy();
    const reasonList = copyListValues<EncounterReasonComponent>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    const diagnosisList = copyListValues<EncounterDiagnosisComponent>(this.diagnosis);
    dest.diagnosis = diagnosisList.length === 0 ? undefined : diagnosisList;
    const accountList = copyListValues<Reference>(this.account);
    dest.account = accountList.length === 0 ? undefined : accountList;
    const dietPreferenceList = copyListValues<CodeableConcept>(this.dietPreference);
    dest.dietPreference = dietPreferenceList.length === 0 ? undefined : dietPreferenceList;
    const specialArrangementList = copyListValues<CodeableConcept>(this.specialArrangement);
    dest.specialArrangement = specialArrangementList.length === 0 ? undefined : specialArrangementList;
    const specialCourtesyList = copyListValues<CodeableConcept>(this.specialCourtesy);
    dest.specialCourtesy = specialCourtesyList.length === 0 ? undefined : specialCourtesyList;
    dest.admission = this.admission?.copy();
    const locationList = copyListValues<EncounterLocationComponent>(this.location);
    dest.location = locationList.length === 0 ? undefined : locationList;
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

    if (this.hasClass()) {
      setFhirComplexListJson(this.getClass(), 'class', jsonObj);
    }

    if (this.hasPriority()) {
      setFhirComplexJson(this.getPriority(), 'priority', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasServiceType()) {
      setFhirComplexListJson(this.getServiceType(), 'serviceType', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasSubjectStatus()) {
      setFhirComplexJson(this.getSubjectStatus(), 'subjectStatus', jsonObj);
    }

    if (this.hasEpisodeOfCare()) {
      setFhirComplexListJson(this.getEpisodeOfCare(), 'episodeOfCare', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasCareTeam()) {
      setFhirComplexListJson(this.getCareTeam(), 'careTeam', jsonObj);
    }

    if (this.hasPartOf()) {
      setFhirComplexJson(this.getPartOf(), 'partOf', jsonObj);
    }

    if (this.hasServiceProvider()) {
      setFhirComplexJson(this.getServiceProvider(), 'serviceProvider', jsonObj);
    }

    if (this.hasParticipant()) {
      setFhirBackboneElementListJson(this.getParticipant(), 'participant', jsonObj);
    }

    if (this.hasAppointment()) {
      setFhirComplexListJson(this.getAppointment(), 'appointment', jsonObj);
    }

    if (this.hasVirtualService()) {
      setFhirComplexListJson(this.getVirtualService(), 'virtualService', jsonObj);
    }

    if (this.hasActualPeriod()) {
      setFhirComplexJson(this.getActualPeriod(), 'actualPeriod', jsonObj);
    }

    if (this.hasPlannedStartDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getPlannedStartDateElement(), 'plannedStartDate', jsonObj);
    }

    if (this.hasPlannedEndDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getPlannedEndDateElement(), 'plannedEndDate', jsonObj);
    }

    if (this.hasLength()) {
      setFhirComplexJson(this.getLength(), 'length', jsonObj);
    }

    if (this.hasReason()) {
      setFhirBackboneElementListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasDiagnosis()) {
      setFhirBackboneElementListJson(this.getDiagnosis(), 'diagnosis', jsonObj);
    }

    if (this.hasAccount()) {
      setFhirComplexListJson(this.getAccount(), 'account', jsonObj);
    }

    if (this.hasDietPreference()) {
      setFhirComplexListJson(this.getDietPreference(), 'dietPreference', jsonObj);
    }

    if (this.hasSpecialArrangement()) {
      setFhirComplexListJson(this.getSpecialArrangement(), 'specialArrangement', jsonObj);
    }

    if (this.hasSpecialCourtesy()) {
      setFhirComplexListJson(this.getSpecialCourtesy(), 'specialCourtesy', jsonObj);
    }

    if (this.hasAdmission()) {
      setFhirBackboneElementJson(this.getAdmission(), 'admission', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirBackboneElementListJson(this.getLocation(), 'location', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * EncounterParticipantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** List of participants involved in the encounter
 * - **Definition:** The list of people responsible for providing the service.
 * - **Comment:** Any Patient or Group present in the participation.actor must also be the subject, though the subject may be absent from the participation.actor for cases where the patient (or group) is not present, such as during a case review conference.
 *
 * @category Data Models: Resource
 * @see [FHIR Encounter](http://hl7.org/fhir/StructureDefinition/Encounter)
 */
export class EncounterParticipantComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EncounterParticipantComponent` JSON to instantiate the EncounterParticipantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EncounterParticipantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EncounterParticipantComponent
   * @returns EncounterParticipantComponent data model or undefined for `EncounterParticipantComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EncounterParticipantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EncounterParticipantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EncounterParticipantComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

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

    return instance;
  }

  /**
   * Encounter.participant.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Role of participant in encounter
   * - **Definition:** Role of participant in encounter.
   * - **Comment:** The participant type indicates how an individual actor participates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * Encounter.participant.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Period of time during the encounter that the participant participated
   * - **Definition:** The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter\'s period.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

  /**
   * Encounter.participant.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The individual, device, or service participating in the encounter
   * - **Definition:** Person involved in the encounter, the patient/group is also included here to indicate that the patient was actually participating in the encounter. Not including the patient here covers use cases such as a case meeting between practitioners about a patient - non contact times.
   * - **Comment:** For planning purposes, Appointments may include a CareTeam participant to indicate that one specific person from the CareTeam will be assigned, but that assignment might not happen until the Encounter begins. Hence CareTeam is not included in Encounter.participant, as the specific individual should be assigned and represented as a Practitioner or other person resource. Similarly, Location can be included in Appointment.participant to assist with planning.  However, the patient location is tracked on the Encounter in the Encounter.location property to allow for additional metadata and history to be recorded. The role of the participant can be used to declare what the actor will be doing in the scope of this encounter participation. If the individual is not specified during planning, then it is expected that the individual will be filled in at a later stage prior to the encounter commencing.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private actor?: Reference | undefined;

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
      const optErrMsg = `Invalid Encounter.participant.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.participant.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.participant.period; Provided element is not an instance of Period.`;
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
   * @decorator `@ReferenceTargets('Encounter.participant.actor', ['Patient','Group','RelatedPerson','Practitioner','PractitionerRole','Device','HealthcareService',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.participant.actor', [
    'Patient',
  
    'Group',
  
    'RelatedPerson',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'HealthcareService',
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Encounter.participant';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.period,
      this.actor,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EncounterParticipantComponent {
    const dest = new EncounterParticipantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EncounterParticipantComponent): void {
    super.copyValues(dest);
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    dest.period = this.period?.copy();
    dest.actor = this.actor?.copy();
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

    return jsonObj;
  }
}
/**
 * EncounterReasonComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The list of medical reasons that are expected to be addressed during the episode of care
 * - **Definition:** The list of medical reasons that are expected to be addressed during the episode of care.
 * - **Comment:** The reason communicates what medical problem the patient has that should be addressed during the episode of care.  This reason could be patient reported complaint, a clinical indication that was determined in a previous encounter or episode of care, or some planned care such as an immunization recommendation.  In the case where you have a primary reason, but are expecting to also address other problems, you can list the primary reason with a use code of \'Chief Complaint\', while the other problems being addressed would have a use code of \'Reason for Visit\'. Examples:  * pregnancy would use HealthcareService or a coding as the reason  * patient home monitoring could use Condition as the reason
 *
 * @category Data Models: Resource
 * @see [FHIR Encounter](http://hl7.org/fhir/StructureDefinition/Encounter)
 */
export class EncounterReasonComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EncounterReasonComponent` JSON to instantiate the EncounterReasonComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EncounterReasonComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EncounterReasonComponent
   * @returns EncounterReasonComponent data model or undefined for `EncounterReasonComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EncounterReasonComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EncounterReasonComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EncounterReasonComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'use';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addUse(datatype);
        }
      });
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addValue(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * Encounter.reason.use Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What the reason value should be used for/as
   * - **Definition:** What the reason value should be used as e.g. Chief Complaint, Health Concern, Health Maintenance (including screening).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private use?: CodeableConcept[] | undefined;

  /**
   * Encounter.reason.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason the encounter takes place (core or reference)
   * - **Definition:** Reason the encounter takes place, expressed as a code or a reference to another resource. For admissions, this can be used for a coded admission diagnosis.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private value?: CodeableReference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `use` property value as a CodeableConcept array
   */
  public getUse(): CodeableConcept[] {
    return this.use ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `use` property.
   *
   * @param value - the `use` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUse(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.reason.use; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.use = value;
    } else {
      this.use = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `use` array property.
   *
   * @param value - the `use` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addUse(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.reason.use; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initUse();
      this.use?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUse(): boolean {
    return isDefinedList<CodeableConcept>(this.use) && this.use.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `use` property
   */
  private initUse(): void {
    if(!this.hasUse()) {
      this.use = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `value` property value as a CodeableReference array
   */
  public getValue(): CodeableReference[] {
    return this.value ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `value` property.
   *
   * @param value - the `value` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValue(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid Encounter.reason.value; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.value = value;
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `value` array property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addValue(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Encounter.reason.value; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initValue();
      this.value?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefinedList<CodeableReference>(this.value) && this.value.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `value` property
   */
  private initValue(): void {
    if(!this.hasValue()) {
      this.value = [] as CodeableReference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Encounter.reason';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.use,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EncounterReasonComponent {
    const dest = new EncounterReasonComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EncounterReasonComponent): void {
    super.copyValues(dest);
    const useList = copyListValues<CodeableConcept>(this.use);
    dest.use = useList.length === 0 ? undefined : useList;
    const valueList = copyListValues<CodeableReference>(this.value);
    dest.value = valueList.length === 0 ? undefined : valueList;
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

    if (this.hasUse()) {
      setFhirComplexListJson(this.getUse(), 'use', jsonObj);
    }

    if (this.hasValue()) {
      setFhirComplexListJson(this.getValue(), 'value', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EncounterDiagnosisComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The list of diagnosis relevant to this encounter
 * - **Definition:** The list of diagnosis relevant to this encounter.
 * - **Comment:** Also note that for the purpose of billing, the diagnoses are recorded in the account where they can be ranked appropriately for how the invoicing/claiming documentation needs to be prepared.
 *
 * @category Data Models: Resource
 * @see [FHIR Encounter](http://hl7.org/fhir/StructureDefinition/Encounter)
 */
export class EncounterDiagnosisComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EncounterDiagnosisComponent` JSON to instantiate the EncounterDiagnosisComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EncounterDiagnosisComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EncounterDiagnosisComponent
   * @returns EncounterDiagnosisComponent data model or undefined for `EncounterDiagnosisComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EncounterDiagnosisComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EncounterDiagnosisComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EncounterDiagnosisComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCondition(datatype);
        }
      });
    }

    fieldName = 'use';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addUse(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * Encounter.diagnosis.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The diagnosis relevant to the encounter
   * - **Definition:** The coded diagnosis or a reference to a Condition (with other resources referenced in the evidence.detail), the use property will indicate the purpose of this specific diagnosis.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private condition?: CodeableReference[] | undefined;

  /**
   * Encounter.diagnosis.use Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge ...)
   * - **Definition:** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge ...).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private use?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `condition` property value as a CodeableReference array
   */
  public getCondition(): CodeableReference[] {
    return this.condition ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `condition` property.
   *
   * @param value - the `condition` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCondition(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid Encounter.diagnosis.condition; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.condition = value;
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `condition` array property.
   *
   * @param value - the `condition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCondition(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Encounter.diagnosis.condition; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initCondition();
      this.condition?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return isDefinedList<CodeableReference>(this.condition) && this.condition.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `condition` property
   */
  private initCondition(): void {
    if(!this.hasCondition()) {
      this.condition = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `use` property value as a CodeableConcept array
   */
  public getUse(): CodeableConcept[] {
    return this.use ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `use` property.
   *
   * @param value - the `use` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUse(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.diagnosis.use; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.use = value;
    } else {
      this.use = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `use` array property.
   *
   * @param value - the `use` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addUse(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.diagnosis.use; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initUse();
      this.use?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUse(): boolean {
    return isDefinedList<CodeableConcept>(this.use) && this.use.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `use` property
   */
  private initUse(): void {
    if(!this.hasUse()) {
      this.use = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Encounter.diagnosis';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.condition,
      this.use,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EncounterDiagnosisComponent {
    const dest = new EncounterDiagnosisComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EncounterDiagnosisComponent): void {
    super.copyValues(dest);
    const conditionList = copyListValues<CodeableReference>(this.condition);
    dest.condition = conditionList.length === 0 ? undefined : conditionList;
    const useList = copyListValues<CodeableConcept>(this.use);
    dest.use = useList.length === 0 ? undefined : useList;
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

    if (this.hasCondition()) {
      setFhirComplexListJson(this.getCondition(), 'condition', jsonObj);
    }

    if (this.hasUse()) {
      setFhirComplexListJson(this.getUse(), 'use', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EncounterAdmissionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Details about the admission to a healthcare service
 * - **Definition:** Details about the stay during which a healthcare service is provided. This does not describe the event of admitting the patient, but rather any information that is relevant from the time of admittance until the time of discharge.
 * - **Comment:** An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included. The duration recorded in the period of this encounter covers the entire scope of this admission record.
 *
 * @category Data Models: Resource
 * @see [FHIR Encounter](http://hl7.org/fhir/StructureDefinition/Encounter)
 */
export class EncounterAdmissionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EncounterAdmissionComponent` JSON to instantiate the EncounterAdmissionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EncounterAdmissionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EncounterAdmissionComponent
   * @returns EncounterAdmissionComponent data model or undefined for `EncounterAdmissionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EncounterAdmissionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EncounterAdmissionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EncounterAdmissionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'preAdmissionIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPreAdmissionIdentifier(datatype);
    }

    fieldName = 'origin';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrigin(datatype);
    }

    fieldName = 'admitSource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAdmitSource(datatype);
    }

    fieldName = 'reAdmission';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReAdmission(datatype);
    }

    fieldName = 'destination';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDestination(datatype);
    }

    fieldName = 'dischargeDisposition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDischargeDisposition(datatype);
    }

    return instance;
  }

  /**
   * Encounter.admission.preAdmissionIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pre-admission identifier
   * - **Definition:** Pre-admission identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preAdmissionIdentifier?: Identifier | undefined;

  /**
   * Encounter.admission.origin Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The location/organization from which the patient came before admission
   * - **Definition:** The location/organization from which the patient came before admission.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private origin?: Reference | undefined;

  /**
   * Encounter.admission.admitSource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** From where patient was admitted (physician referral, transfer)
   * - **Definition:** From where patient was admitted (physician referral, transfer).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private admitSource?: CodeableConcept | undefined;

  /**
   * Encounter.admission.reAdmission Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates that the patient is being re-admitted
   * - **Definition:** Indicates that this encounter is directly related to a prior admission, often because the conditions addressed in the prior admission were not fully addressed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reAdmission?: CodeableConcept | undefined;

  /**
   * Encounter.admission.destination Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Location/organization to which the patient is discharged
   * - **Definition:** Location/organization to which the patient is discharged.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private destination?: Reference | undefined;

  /**
   * Encounter.admission.dischargeDisposition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category or kind of location after discharge
   * - **Definition:** Category or kind of location after discharge.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dischargeDisposition?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `preAdmissionIdentifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getPreAdmissionIdentifier(): Identifier {
    return this.preAdmissionIdentifier ?? new Identifier();
  }

  /**
   * Assigns the provided PreAdmissionIdentifier object value to the `preAdmissionIdentifier` property.
   *
   * @param value - the `preAdmissionIdentifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPreAdmissionIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid Encounter.admission.preAdmissionIdentifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.preAdmissionIdentifier = value;
    } else {
      this.preAdmissionIdentifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preAdmissionIdentifier` property exists and has a value; `false` otherwise
   */
  public hasPreAdmissionIdentifier(): boolean {
    return isDefined<Identifier>(this.preAdmissionIdentifier) && !this.preAdmissionIdentifier.isEmpty();
  }

  /**
   * @returns the `origin` property value as a Reference object; else an empty Reference object
   */
  public getOrigin(): Reference {
    return this.origin ?? new Reference();
  }

  /**
   * Assigns the provided Origin object value to the `origin` property.
   *
   * @decorator `@ReferenceTargets('Encounter.admission.origin', ['Location','Organization',])`
   *
   * @param value - the `origin` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.admission.origin', [
    'Location',
  
    'Organization',
  ])
  public setOrigin(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.origin = value;
    } else {
      this.origin = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `origin` property exists and has a value; `false` otherwise
   */
  public hasOrigin(): boolean {
    return isDefined<Reference>(this.origin) && !this.origin.isEmpty();
  }

  /**
   * @returns the `admitSource` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAdmitSource(): CodeableConcept {
    return this.admitSource ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AdmitSource object value to the `admitSource` property.
   *
   * @param value - the `admitSource` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdmitSource(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.admission.admitSource; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.admitSource = value;
    } else {
      this.admitSource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `admitSource` property exists and has a value; `false` otherwise
   */
  public hasAdmitSource(): boolean {
    return isDefined<CodeableConcept>(this.admitSource) && !this.admitSource.isEmpty();
  }

  /**
   * @returns the `reAdmission` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getReAdmission(): CodeableConcept {
    return this.reAdmission ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ReAdmission object value to the `reAdmission` property.
   *
   * @param value - the `reAdmission` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReAdmission(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.admission.reAdmission; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reAdmission = value;
    } else {
      this.reAdmission = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reAdmission` property exists and has a value; `false` otherwise
   */
  public hasReAdmission(): boolean {
    return isDefined<CodeableConcept>(this.reAdmission) && !this.reAdmission.isEmpty();
  }

  /**
   * @returns the `destination` property value as a Reference object; else an empty Reference object
   */
  public getDestination(): Reference {
    return this.destination ?? new Reference();
  }

  /**
   * Assigns the provided Destination object value to the `destination` property.
   *
   * @decorator `@ReferenceTargets('Encounter.admission.destination', ['Location','Organization',])`
   *
   * @param value - the `destination` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.admission.destination', [
    'Location',
  
    'Organization',
  ])
  public setDestination(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.destination = value;
    } else {
      this.destination = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `destination` property exists and has a value; `false` otherwise
   */
  public hasDestination(): boolean {
    return isDefined<Reference>(this.destination) && !this.destination.isEmpty();
  }

  /**
   * @returns the `dischargeDisposition` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDischargeDisposition(): CodeableConcept {
    return this.dischargeDisposition ?? new CodeableConcept();
  }

  /**
   * Assigns the provided DischargeDisposition object value to the `dischargeDisposition` property.
   *
   * @param value - the `dischargeDisposition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDischargeDisposition(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.admission.dischargeDisposition; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.dischargeDisposition = value;
    } else {
      this.dischargeDisposition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dischargeDisposition` property exists and has a value; `false` otherwise
   */
  public hasDischargeDisposition(): boolean {
    return isDefined<CodeableConcept>(this.dischargeDisposition) && !this.dischargeDisposition.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Encounter.admission';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.preAdmissionIdentifier,
      this.origin,
      this.admitSource,
      this.reAdmission,
      this.destination,
      this.dischargeDisposition,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EncounterAdmissionComponent {
    const dest = new EncounterAdmissionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EncounterAdmissionComponent): void {
    super.copyValues(dest);
    dest.preAdmissionIdentifier = this.preAdmissionIdentifier?.copy();
    dest.origin = this.origin?.copy();
    dest.admitSource = this.admitSource?.copy();
    dest.reAdmission = this.reAdmission?.copy();
    dest.destination = this.destination?.copy();
    dest.dischargeDisposition = this.dischargeDisposition?.copy();
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

    if (this.hasPreAdmissionIdentifier()) {
      setFhirComplexJson(this.getPreAdmissionIdentifier(), 'preAdmissionIdentifier', jsonObj);
    }

    if (this.hasOrigin()) {
      setFhirComplexJson(this.getOrigin(), 'origin', jsonObj);
    }

    if (this.hasAdmitSource()) {
      setFhirComplexJson(this.getAdmitSource(), 'admitSource', jsonObj);
    }

    if (this.hasReAdmission()) {
      setFhirComplexJson(this.getReAdmission(), 'reAdmission', jsonObj);
    }

    if (this.hasDestination()) {
      setFhirComplexJson(this.getDestination(), 'destination', jsonObj);
    }

    if (this.hasDischargeDisposition()) {
      setFhirComplexJson(this.getDischargeDisposition(), 'dischargeDisposition', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EncounterLocationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** List of locations where the patient has been
 * - **Definition:** List of locations where  the patient has been during this encounter.
 * - **Comment:** Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client\'s home" and an encounter.class = "virtual".
 *
 * @category Data Models: Resource
 * @see [FHIR Encounter](http://hl7.org/fhir/StructureDefinition/Encounter)
 */
export class EncounterLocationComponent extends BackboneElement implements IBackboneElement {
  constructor(location: Reference | null = null) {
    super();

    this.encounterLocationStatusEnum = new EncounterLocationStatusEnum();

    this.location = null;
    if (isDefined<Reference>(location)) {
      this.setLocation(location);
    }
  }

  /**
   * Parse the provided `EncounterLocationComponent` JSON to instantiate the EncounterLocationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EncounterLocationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EncounterLocationComponent
   * @returns EncounterLocationComponent data model or undefined for `EncounterLocationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EncounterLocationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EncounterLocationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EncounterLocationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setLocation(null);
      } else {
        instance.setLocation(datatype);
      }
    } else {
      instance.setLocation(null);
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setStatusElement(datatype);
    }

    fieldName = 'form';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setForm(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    return instance;
  }

  /**
   * Encounter.location.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Location the encounter takes place
   * - **Definition:** The location where the encounter takes place.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private location: Reference | null;

  /**
   * FHIR CodeSystem: EncounterLocationStatus
   *
   * @see {@link EncounterLocationStatusEnum }
   */
  private readonly encounterLocationStatusEnum: EncounterLocationStatusEnum;

  /**
   * Encounter.location.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** planned | active | reserved | completed
   * - **Definition:** The status of the participants\' presence at the specified location during the period specified. If the participant is no longer at the location, then the period will have an end date/time.
   * - **Comment:** When the patient is no longer active at a location, then the period end date is entered, and the status may be changed to completed.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link EncounterLocationStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * Encounter.location.form Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The physical type of the location (usually the level in the location hierarchy - bed, room, ward, virtual etc.)
   * - **Definition:** This will be used to specify the required levels (bed/ward/room/etc.) desired to be recorded to simplify either messaging or query.
   * - **Comment:** This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query. There may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private form?: CodeableConcept | undefined;

  /**
   * Encounter.location.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time period during which the patient was present at the location
   * - **Definition:** Time period during which the patient was present at the location.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `location` property value as a Reference object if defined; else an empty Reference object
   */
  public getLocation(): Reference {
    return this.location ?? new Reference();
  }

  /**
   * Assigns the provided Location object value to the `location` property.
   *
   * @decorator `@ReferenceTargets('Encounter.location.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.location.location', [
    'Location',
  ])
  public setLocation(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.location = value;
    } else {
      this.location = null;
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
   * @returns the `status` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link EncounterLocationStatusEnum }
   */
  public getStatusEnumType(): EnumCodeType | undefined {
    return this.status;
  }

  /**
   * Assigns the provided EnumCodeType value to the `status` property.
   *
   * @param enumType - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link EncounterLocationStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Encounter.location.status';
      assertEnumCodeType<EncounterLocationStatusEnum>(enumType, EncounterLocationStatusEnum, errMsgPrefix);
      this.status = enumType;
    } else {
      this.status = undefined;
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
   * @returns the `status` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link EncounterLocationStatusEnum }
   */
  public getStatusElement(): CodeType | undefined {
    if (this.status === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link EncounterLocationStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Encounter.location.status; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.encounterLocationStatusEnum);
    } else {
      this.status = undefined;
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
   * @returns the `status` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link EncounterLocationStatusEnum }
   */
  public getStatus(): fhirCode | undefined {
    if (this.status === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link EncounterLocationStatusEnum }
   */
  public setStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Encounter.location.status; Provided value is not an instance of fhirCode.`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.encounterLocationStatusEnum);
    } else {
      this.status = undefined;
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
   * @returns the `form` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getForm(): CodeableConcept {
    return this.form ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Form object value to the `form` property.
   *
   * @param value - the `form` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setForm(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.location.form; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.form = value;
    } else {
      this.form = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `form` property exists and has a value; `false` otherwise
   */
  public hasForm(): boolean {
    return isDefined<CodeableConcept>(this.form) && !this.form.isEmpty();
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
      const optErrMsg = `Invalid Encounter.location.period; Provided element is not an instance of Period.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Encounter.location';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.location,
      this.status,
      this.form,
      this.period,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.location, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EncounterLocationComponent {
    const dest = new EncounterLocationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EncounterLocationComponent): void {
    super.copyValues(dest);
    dest.location = this.location ? this.location.copy() : null;
    dest.status = this.status?.copy();
    dest.form = this.form?.copy();
    dest.period = this.period?.copy();
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

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    } else {
      jsonObj['location'] = null;
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasForm()) {
      setFhirComplexJson(this.getForm(), 'form', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    return jsonObj;
  }
}
