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
 * StructureDefinition.description: An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  JSON,
  PositiveIntType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirPositiveInt,
  fhirPositiveIntSchema,
  getPrimitiveTypeJson,
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
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Coding, Duration, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { EncounterLocationStatusEnum } from '../code-systems/EncounterLocationStatusEnum';
import { EncounterStatusEnum } from '../code-systems/EncounterStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * Encounter Class
 *
 * @remarks
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 *
 * **FHIR Specification**
 * - **Short:** An interaction during which services are provided to the patient
 * - **Definition:** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR Encounter](http://hl7.org/fhir/StructureDefinition/Encounter)
 */
export class Encounter extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, class_: Coding | null = null) {
    super();

    this.encounterStatusEnum = new EncounterStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<EncounterStatusEnum>(
      status,
      EncounterStatusEnum,
      this.encounterStatusEnum,
      'Encounter.status',
    );

    this.class_ = null;
    if (isDefined<Coding>(class_)) {
      this.setClass(class_);
    }
  }

  /**
   * Parse the provided `Encounter` JSON to instantiate the Encounter data model.
   *
   * @param sourceJson - JSON representing FHIR `Encounter`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Encounter
   * @returns Encounter data model or undefined for `Encounter`
   * @throws {@link FhirError} if the provided JSON is missing required properties
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

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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

    fieldName = 'statusHistory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EncounterStatusHistoryComponent | undefined = EncounterStatusHistoryComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStatusHistory(component);
        }
      });
    }

    fieldName = 'class';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setClass(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'classHistory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EncounterClassHistoryComponent | undefined = EncounterClassHistoryComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addClassHistory(component);
        }
      });
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
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setServiceType(datatype);
    }

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPriority(datatype);
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
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

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'length';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLength(datatype);
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

    fieldName = 'hospitalization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: EncounterHospitalizationComponent | undefined = EncounterHospitalizationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setHospitalization(component);
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

    fieldName = 'serviceProvider';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setServiceProvider(datatype);
    }

    fieldName = 'partOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPartOf(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
   * - **Short:** planned | arrived | triaged | in-progress | onleave | finished | cancelled +
   * - **Definition:** planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
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
   * Encounter.statusHistory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** List of past encounter statuses
   * - **Definition:** The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
   * - **Comment:** The current status is always found in the current version of the resource, not the status history.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusHistory?: EncounterStatusHistoryComponent[] | undefined;

  /**
   * Encounter.class Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of patient encounter
   * - **Definition:** Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private class_: Coding | null;

  /**
   * Encounter.classHistory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** List of past encounter classes
   * - **Definition:** The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private classHistory?: EncounterClassHistoryComponent[] | undefined;

  /**
   * Encounter.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific type of encounter
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
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private serviceType?: CodeableConcept | undefined;

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
   * Encounter.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The patient or group present at the encounter
   * - **Definition:** The patient or group present at the encounter.
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
   * - **Short:** The ServiceRequest that initiated this encounter
   * - **Definition:** The request this encounter satisfies (e.g. incoming referral or procedure request).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private basedOn?: Reference[] | undefined;

  /**
   * Encounter.participant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** List of participants involved in the encounter
   * - **Definition:** The list of people responsible for providing the service.
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
   * Encounter.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The start and end time of the encounter
   * - **Definition:** The start and end time of the encounter.
   * - **Comment:** If not (yet) known, the end of the Period may be omitted.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

  /**
   * Encounter.length Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantity of time the encounter lasted (less time absent)
   * - **Definition:** Quantity of time the encounter lasted. This excludes the time during leaves of absence.
   * - **Comment:** May differ from the time the Encounter.period lasted because of leave of absence.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private length?: Duration | undefined;

  /**
   * Encounter.reasonCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coded reason the encounter takes place
   * - **Definition:** Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
   * - **Comment:** For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reasonCode?: CodeableConcept[] | undefined;

  /**
   * Encounter.reasonReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason the encounter takes place (reference)
   * - **Definition:** Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
   * - **Comment:** For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
   * - **FHIR Type:** `Reference`
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
  private reasonReference?: Reference[] | undefined;

  /**
   * Encounter.diagnosis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The list of diagnosis relevant to this encounter
   * - **Definition:** The list of diagnosis relevant to this encounter.
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
   * Encounter.hospitalization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details about the admission to a healthcare service
   * - **Definition:** Details about the admission to a healthcare service.
   * - **Comment:** An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included. The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private hospitalization?: EncounterHospitalizationComponent | undefined;

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

  /**
   * Encounter.serviceProvider Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The organization (facility) responsible for this encounter
   * - **Definition:** The organization that is primarily responsible for this Encounter\'s services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `Encounter.status is required`);
    const errMsgPrefix = `Invalid Encounter.status`;
    assertEnumCodeType<EncounterStatusEnum>(enumType, EncounterStatusEnum, errMsgPrefix);
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
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Encounter.status is required`);
    const optErrMsg = `Invalid Encounter.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.encounterStatusEnum);
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
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Encounter.status is required`);
    const optErrMsg = `Invalid Encounter.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.encounterStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `statusHistory` property value as a EncounterStatusHistoryComponent array
   */
  public getStatusHistory(): EncounterStatusHistoryComponent[] {
    return this.statusHistory ?? ([] as EncounterStatusHistoryComponent[]);
  }

  /**
   * Assigns the provided EncounterStatusHistoryComponent array value to the `statusHistory` property.
   *
   * @param value - the `statusHistory` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatusHistory(value: EncounterStatusHistoryComponent[] | undefined): this {
    if (isDefinedList<EncounterStatusHistoryComponent>(value)) {
      const optErrMsg = `Invalid Encounter.statusHistory; Provided value array has an element that is not an instance of EncounterStatusHistoryComponent.`;
      assertFhirTypeList<EncounterStatusHistoryComponent>(value, EncounterStatusHistoryComponent, optErrMsg);
      this.statusHistory = value;
    } else {
      this.statusHistory = undefined;
    }
    return this;
  }

  /**
   * Add the provided EncounterStatusHistoryComponent value to the `statusHistory` array property.
   *
   * @param value - the `statusHistory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStatusHistory(value: EncounterStatusHistoryComponent | undefined): this {
    if (isDefined<EncounterStatusHistoryComponent>(value)) {
      const optErrMsg = `Invalid Encounter.statusHistory; Provided element is not an instance of EncounterStatusHistoryComponent.`;
      assertFhirType<EncounterStatusHistoryComponent>(value, EncounterStatusHistoryComponent, optErrMsg);
      this.initStatusHistory();
      this.statusHistory?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `statusHistory` property exists and has a value; `false` otherwise
   */
  public hasStatusHistory(): boolean {
    return isDefinedList<EncounterStatusHistoryComponent>(this.statusHistory) && this.statusHistory.some((item: EncounterStatusHistoryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `statusHistory` property
   */
  private initStatusHistory(): void {
    if(!this.hasStatusHistory()) {
      this.statusHistory = [] as EncounterStatusHistoryComponent[];
    }
  }

  /**
   * @returns the `class_` property value as a Coding object if defined; else null
   */
  public getClass(): Coding | null {
    return this.class_;
  }

  /**
   * Assigns the provided Coding object value to the `class_` property.
   *
   * @param value - the `class_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClass(value: Coding): this {
    assertIsDefined<Coding>(value, `Encounter.class is required`);
    const optErrMsg = `Invalid Encounter.class; Provided element is not an instance of Coding.`;
    assertFhirType<Coding>(value, Coding, optErrMsg);
    this.class_ = value;
    return this;
  }

  /**
   * @returns `true` if the `class_` property exists and has a value; `false` otherwise
   */
  public hasClass(): boolean {
    return isDefined<Coding>(this.class_) && !this.class_.isEmpty();
  }

  /**
   * @returns the `classHistory` property value as a EncounterClassHistoryComponent array
   */
  public getClassHistory(): EncounterClassHistoryComponent[] {
    return this.classHistory ?? ([] as EncounterClassHistoryComponent[]);
  }

  /**
   * Assigns the provided EncounterClassHistoryComponent array value to the `classHistory` property.
   *
   * @param value - the `classHistory` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassHistory(value: EncounterClassHistoryComponent[] | undefined): this {
    if (isDefinedList<EncounterClassHistoryComponent>(value)) {
      const optErrMsg = `Invalid Encounter.classHistory; Provided value array has an element that is not an instance of EncounterClassHistoryComponent.`;
      assertFhirTypeList<EncounterClassHistoryComponent>(value, EncounterClassHistoryComponent, optErrMsg);
      this.classHistory = value;
    } else {
      this.classHistory = undefined;
    }
    return this;
  }

  /**
   * Add the provided EncounterClassHistoryComponent value to the `classHistory` array property.
   *
   * @param value - the `classHistory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClassHistory(value: EncounterClassHistoryComponent | undefined): this {
    if (isDefined<EncounterClassHistoryComponent>(value)) {
      const optErrMsg = `Invalid Encounter.classHistory; Provided element is not an instance of EncounterClassHistoryComponent.`;
      assertFhirType<EncounterClassHistoryComponent>(value, EncounterClassHistoryComponent, optErrMsg);
      this.initClassHistory();
      this.classHistory?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `classHistory` property exists and has a value; `false` otherwise
   */
  public hasClassHistory(): boolean {
    return isDefinedList<EncounterClassHistoryComponent>(this.classHistory) && this.classHistory.some((item: EncounterClassHistoryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `classHistory` property
   */
  private initClassHistory(): void {
    if(!this.hasClassHistory()) {
      this.classHistory = [] as EncounterClassHistoryComponent[];
    }
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
   * @returns the `serviceType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getServiceType(): CodeableConcept {
    return this.serviceType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ServiceType object value to the `serviceType` property.
   *
   * @param value - the `serviceType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setServiceType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.serviceType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.serviceType = value;
    } else {
      this.serviceType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `serviceType` property exists and has a value; `false` otherwise
   */
  public hasServiceType(): boolean {
    return isDefined<CodeableConcept>(this.serviceType) && !this.serviceType.isEmpty();
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
   * @decorator `@ReferenceTargets('Encounter.basedOn', ['ServiceRequest',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.basedOn', [
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
   * @decorator `@ReferenceTargets('Encounter.basedOn', ['ServiceRequest',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.basedOn', [
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
      const optErrMsg = `Invalid Encounter.period; Provided element is not an instance of Period.`;
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
      const optErrMsg = `Invalid Encounter.reasonCode; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.reasonCode; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('Encounter.reasonReference', ['Condition','Procedure','Observation','ImmunizationRecommendation',])`
   *
   * @param value - the `reasonReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.reasonReference', [
    'Condition',
  
    'Procedure',
  
    'Observation',
  
    'ImmunizationRecommendation',
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
   * @decorator `@ReferenceTargets('Encounter.reasonReference', ['Condition','Procedure','Observation','ImmunizationRecommendation',])`
   *
   * @param value - the `reasonReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.reasonReference', [
    'Condition',
  
    'Procedure',
  
    'Observation',
  
    'ImmunizationRecommendation',
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
   * @returns the `hospitalization` property value as a EncounterHospitalizationComponent object if defined; else an empty EncounterHospitalizationComponent object
   */
  public getHospitalization(): EncounterHospitalizationComponent {
    return this.hospitalization ?? new EncounterHospitalizationComponent();
  }

  /**
   * Assigns the provided Hospitalization object value to the `hospitalization` property.
   *
   * @param value - the `hospitalization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setHospitalization(value: EncounterHospitalizationComponent | undefined): this {
    if (isDefined<EncounterHospitalizationComponent>(value)) {
      const optErrMsg = `Invalid Encounter.hospitalization; Provided element is not an instance of EncounterHospitalizationComponent.`;
      assertFhirType<EncounterHospitalizationComponent>(value, EncounterHospitalizationComponent, optErrMsg);
      this.hospitalization = value;
    } else {
      this.hospitalization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hospitalization` property exists and has a value; `false` otherwise
   */
  public hasHospitalization(): boolean {
    return isDefined<EncounterHospitalizationComponent>(this.hospitalization) && !this.hospitalization.isEmpty();
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
      this.statusHistory,
      this.class_,
      this.classHistory,
      this.type_,
      this.serviceType,
      this.priority,
      this.subject,
      this.episodeOfCare,
      this.basedOn,
      this.participant,
      this.appointment,
      this.period,
      this.length,
      this.reasonCode,
      this.reasonReference,
      this.diagnosis,
      this.account,
      this.hospitalization,
      this.location,
      this.serviceProvider,
      this.partOf,
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
    const statusHistoryList = copyListValues<EncounterStatusHistoryComponent>(this.statusHistory);
    dest.statusHistory = statusHistoryList.length === 0 ? undefined : statusHistoryList;
    dest.class_ = this.class_ ? this.class_.copy() : null;
    const classHistoryList = copyListValues<EncounterClassHistoryComponent>(this.classHistory);
    dest.classHistory = classHistoryList.length === 0 ? undefined : classHistoryList;
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    dest.serviceType = this.serviceType?.copy();
    dest.priority = this.priority?.copy();
    dest.subject = this.subject?.copy();
    const episodeOfCareList = copyListValues<Reference>(this.episodeOfCare);
    dest.episodeOfCare = episodeOfCareList.length === 0 ? undefined : episodeOfCareList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    const participantList = copyListValues<EncounterParticipantComponent>(this.participant);
    dest.participant = participantList.length === 0 ? undefined : participantList;
    const appointmentList = copyListValues<Reference>(this.appointment);
    dest.appointment = appointmentList.length === 0 ? undefined : appointmentList;
    dest.period = this.period?.copy();
    dest.length = this.length?.copy();
    const reasonCodeList = copyListValues<CodeableConcept>(this.reasonCode);
    dest.reasonCode = reasonCodeList.length === 0 ? undefined : reasonCodeList;
    const reasonReferenceList = copyListValues<Reference>(this.reasonReference);
    dest.reasonReference = reasonReferenceList.length === 0 ? undefined : reasonReferenceList;
    const diagnosisList = copyListValues<EncounterDiagnosisComponent>(this.diagnosis);
    dest.diagnosis = diagnosisList.length === 0 ? undefined : diagnosisList;
    const accountList = copyListValues<Reference>(this.account);
    dest.account = accountList.length === 0 ? undefined : accountList;
    dest.hospitalization = this.hospitalization?.copy();
    const locationList = copyListValues<EncounterLocationComponent>(this.location);
    dest.location = locationList.length === 0 ? undefined : locationList;
    dest.serviceProvider = this.serviceProvider?.copy();
    dest.partOf = this.partOf?.copy();
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

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`Encounter.status`);
    }

    if (this.hasStatusHistory()) {
      setFhirBackboneElementListJson(this.getStatusHistory(), 'statusHistory', jsonObj);
    }

    if (this.hasClass()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getClass()!, 'class', jsonObj);
    } else {
      missingReqdProperties.push(`Encounter.class`);
    }

    if (this.hasClassHistory()) {
      setFhirBackboneElementListJson(this.getClassHistory(), 'classHistory', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasServiceType()) {
      setFhirComplexJson(this.getServiceType(), 'serviceType', jsonObj);
    }

    if (this.hasPriority()) {
      setFhirComplexJson(this.getPriority(), 'priority', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasEpisodeOfCare()) {
      setFhirComplexListJson(this.getEpisodeOfCare(), 'episodeOfCare', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasParticipant()) {
      setFhirBackboneElementListJson(this.getParticipant(), 'participant', jsonObj);
    }

    if (this.hasAppointment()) {
      setFhirComplexListJson(this.getAppointment(), 'appointment', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasLength()) {
      setFhirComplexJson(this.getLength(), 'length', jsonObj);
    }

    if (this.hasReasonCode()) {
      setFhirComplexListJson(this.getReasonCode(), 'reasonCode', jsonObj);
    }

    if (this.hasReasonReference()) {
      setFhirComplexListJson(this.getReasonReference(), 'reasonReference', jsonObj);
    }

    if (this.hasDiagnosis()) {
      setFhirBackboneElementListJson(this.getDiagnosis(), 'diagnosis', jsonObj);
    }

    if (this.hasAccount()) {
      setFhirComplexListJson(this.getAccount(), 'account', jsonObj);
    }

    if (this.hasHospitalization()) {
      setFhirBackboneElementJson(this.getHospitalization(), 'hospitalization', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirBackboneElementListJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasServiceProvider()) {
      setFhirComplexJson(this.getServiceProvider(), 'serviceProvider', jsonObj);
    }

    if (this.hasPartOf()) {
      setFhirComplexJson(this.getPartOf(), 'partOf', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * EncounterStatusHistoryComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** List of past encounter statuses
 * - **Definition:** The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
 * - **Comment:** The current status is always found in the current version of the resource, not the status history.
 *
 * @category Data Models: Resource
 * @see [FHIR Encounter](http://hl7.org/fhir/StructureDefinition/Encounter)
 */
export class EncounterStatusHistoryComponent extends BackboneElement implements IBackboneElement {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, period: Period | null = null) {
    super();

    this.encounterStatusEnum = new EncounterStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<EncounterStatusEnum>(
      status,
      EncounterStatusEnum,
      this.encounterStatusEnum,
      'Encounter.statusHistory.status',
    );

    this.period = null;
    if (isDefined<Period>(period)) {
      this.setPeriod(period);
    }
  }

  /**
   * Parse the provided `EncounterStatusHistoryComponent` JSON to instantiate the EncounterStatusHistoryComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EncounterStatusHistoryComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EncounterStatusHistoryComponent
   * @returns EncounterStatusHistoryComponent data model or undefined for `EncounterStatusHistoryComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EncounterStatusHistoryComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EncounterStatusHistoryComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EncounterStatusHistoryComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPeriod(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * FHIR CodeSystem: EncounterStatus
   *
   * @see {@link EncounterStatusEnum }
   */
  private readonly encounterStatusEnum: EncounterStatusEnum;

  /**
   * Encounter.statusHistory.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** planned | arrived | triaged | in-progress | onleave | finished | cancelled +
   * - **Definition:** planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Encounter.statusHistory.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The time that the episode was in the specified status
   * - **Definition:** The time that the episode was in the specified status.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period: Period | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `Encounter.statusHistory.status is required`);
    const errMsgPrefix = `Invalid Encounter.statusHistory.status`;
    assertEnumCodeType<EncounterStatusEnum>(enumType, EncounterStatusEnum, errMsgPrefix);
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
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Encounter.statusHistory.status is required`);
    const optErrMsg = `Invalid Encounter.statusHistory.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.encounterStatusEnum);
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
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Encounter.statusHistory.status is required`);
    const optErrMsg = `Invalid Encounter.statusHistory.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.encounterStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `period` property value as a Period object if defined; else null
   */
  public getPeriod(): Period | null {
    return this.period;
  }

  /**
   * Assigns the provided Period object value to the `period` property.
   *
   * @param value - the `period` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Period): this {
    assertIsDefined<Period>(value, `Encounter.statusHistory.period is required`);
    const optErrMsg = `Invalid Encounter.statusHistory.period; Provided element is not an instance of Period.`;
    assertFhirType<Period>(value, Period, optErrMsg);
    this.period = value;
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
    return 'Encounter.statusHistory';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.status,
      this.period,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EncounterStatusHistoryComponent {
    const dest = new EncounterStatusHistoryComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EncounterStatusHistoryComponent): void {
    super.copyValues(dest);
    dest.status = this.status ? this.status.copy() : null;
    dest.period = this.period ? this.period.copy() : null;
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

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`Encounter.statusHistory.status`);
    }

    if (this.hasPeriod()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPeriod()!, 'period', jsonObj);
    } else {
      missingReqdProperties.push(`Encounter.statusHistory.period`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * EncounterClassHistoryComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** List of past encounter classes
 * - **Definition:** The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
 *
 * @category Data Models: Resource
 * @see [FHIR Encounter](http://hl7.org/fhir/StructureDefinition/Encounter)
 */
export class EncounterClassHistoryComponent extends BackboneElement implements IBackboneElement {
  constructor(class_: Coding | null = null, period: Period | null = null) {
    super();

    this.class_ = null;
    if (isDefined<Coding>(class_)) {
      this.setClass(class_);
    }

    this.period = null;
    if (isDefined<Period>(period)) {
      this.setPeriod(period);
    }
  }

  /**
   * Parse the provided `EncounterClassHistoryComponent` JSON to instantiate the EncounterClassHistoryComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EncounterClassHistoryComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EncounterClassHistoryComponent
   * @returns EncounterClassHistoryComponent data model or undefined for `EncounterClassHistoryComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EncounterClassHistoryComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EncounterClassHistoryComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EncounterClassHistoryComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'class';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setClass(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPeriod(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Encounter.classHistory.class Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** inpatient | outpatient | ambulatory | emergency +
   * - **Definition:** inpatient | outpatient | ambulatory | emergency +.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private class_: Coding | null;

  /**
   * Encounter.classHistory.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The time that the episode was in the specified class
   * - **Definition:** The time that the episode was in the specified class.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period: Period | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `class_` property value as a Coding object if defined; else null
   */
  public getClass(): Coding | null {
    return this.class_;
  }

  /**
   * Assigns the provided Coding object value to the `class_` property.
   *
   * @param value - the `class_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClass(value: Coding): this {
    assertIsDefined<Coding>(value, `Encounter.classHistory.class is required`);
    const optErrMsg = `Invalid Encounter.classHistory.class; Provided element is not an instance of Coding.`;
    assertFhirType<Coding>(value, Coding, optErrMsg);
    this.class_ = value;
    return this;
  }

  /**
   * @returns `true` if the `class_` property exists and has a value; `false` otherwise
   */
  public hasClass(): boolean {
    return isDefined<Coding>(this.class_) && !this.class_.isEmpty();
  }

  /**
   * @returns the `period` property value as a Period object if defined; else null
   */
  public getPeriod(): Period | null {
    return this.period;
  }

  /**
   * Assigns the provided Period object value to the `period` property.
   *
   * @param value - the `period` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Period): this {
    assertIsDefined<Period>(value, `Encounter.classHistory.period is required`);
    const optErrMsg = `Invalid Encounter.classHistory.period; Provided element is not an instance of Period.`;
    assertFhirType<Period>(value, Period, optErrMsg);
    this.period = value;
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
    return 'Encounter.classHistory';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.class_,
      this.period,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EncounterClassHistoryComponent {
    const dest = new EncounterClassHistoryComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EncounterClassHistoryComponent): void {
    super.copyValues(dest);
    dest.class_ = this.class_ ? this.class_.copy() : null;
    dest.period = this.period ? this.period.copy() : null;
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

    if (this.hasClass()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getClass()!, 'class', jsonObj);
    } else {
      missingReqdProperties.push(`Encounter.classHistory.class`);
    }

    if (this.hasPeriod()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPeriod()!, 'period', jsonObj);
    } else {
      missingReqdProperties.push(`Encounter.classHistory.period`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
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

    fieldName = 'individual';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIndividual(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Encounter.participant.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Role of participant in encounter
   * - **Definition:** Role of participant in encounter.
   * - **Comment:** The participant type indicates how an individual participates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
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
   * Encounter.participant.individual Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Persons involved in the encounter other than the patient
   * - **Definition:** Persons involved in the encounter other than the patient.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private individual?: Reference | undefined;

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
   * @returns the `individual` property value as a Reference object; else an empty Reference object
   */
  public getIndividual(): Reference {
    return this.individual ?? new Reference();
  }

  /**
   * Assigns the provided Individual object value to the `individual` property.
   *
   * @decorator `@ReferenceTargets('Encounter.participant.individual', ['Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `individual` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.participant.individual', [
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  ])
  public setIndividual(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.individual = value;
    } else {
      this.individual = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `individual` property exists and has a value; `false` otherwise
   */
  public hasIndividual(): boolean {
    return isDefined<Reference>(this.individual) && !this.individual.isEmpty();
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
      this.individual,
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
    dest.individual = this.individual?.copy();
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

    if (this.hasIndividual()) {
      setFhirComplexJson(this.getIndividual(), 'individual', jsonObj);
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
 *
 * @category Data Models: Resource
 * @see [FHIR Encounter](http://hl7.org/fhir/StructureDefinition/Encounter)
 */
export class EncounterDiagnosisComponent extends BackboneElement implements IBackboneElement {
  constructor(condition: Reference | null = null) {
    super();

    this.condition = null;
    if (isDefined<Reference>(condition)) {
      this.setCondition(condition);
    }
  }

  /**
   * Parse the provided `EncounterDiagnosisComponent` JSON to instantiate the EncounterDiagnosisComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EncounterDiagnosisComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EncounterDiagnosisComponent
   * @returns EncounterDiagnosisComponent data model or undefined for `EncounterDiagnosisComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
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
    

    const missingReqdProperties: string[] = [];

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCondition(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'use';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUse(datatype);
    }

    fieldName = 'rank';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setRankElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Encounter.diagnosis.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The diagnosis or procedure relevant to the encounter
   * - **Definition:** Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
   * - **Comment:** For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private condition: Reference | null;

  /**
   * Encounter.diagnosis.use Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge ...)
   * - **Definition:** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge ...).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private use?: CodeableConcept | undefined;

  /**
   * Encounter.diagnosis.rank Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Ranking of the diagnosis (for each role type)
   * - **Definition:** Ranking of the diagnosis (for each role type).
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private rank?: PositiveIntType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `condition` property value as a Reference object if defined; else null
   */
  public getCondition(): Reference | null {
    return this.condition;
  }

  /**
   * Assigns the provided Condition object value to the `condition` property.
   *
   * @decorator `@ReferenceTargets('Encounter.diagnosis.condition', ['Condition','Procedure',])`
   *
   * @param value - the `condition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.diagnosis.condition', [
    'Condition',
  
    'Procedure',
  ])
  public setCondition(value: Reference): this {
    assertIsDefined<Reference>(value, `Encounter.diagnosis.condition is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.condition = value;
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return isDefined<Reference>(this.condition) && !this.condition.isEmpty();
  }

  /**
   * @returns the `use` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getUse(): CodeableConcept {
    return this.use ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Use object value to the `use` property.
   *
   * @param value - the `use` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUse(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.diagnosis.use; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.use = value;
    } else {
      this.use = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUse(): boolean {
    return isDefined<CodeableConcept>(this.use) && !this.use.isEmpty();
  }

  /**
   * @returns the `rank` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getRankElement(): PositiveIntType {
    return this.rank ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `rank` property.
   *
   * @param element - the `rank` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRankElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Encounter.diagnosis.rank; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.rank = element;
    } else {
      this.rank = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rank` property exists and has a value; `false` otherwise
   */
  public hasRankElement(): boolean {
    return isDefined<PositiveIntType>(this.rank) && !this.rank.isEmpty();
  }

  /**
   * @returns the `rank` property value as a fhirPositiveInt if defined; else undefined
   */
  public getRank(): fhirPositiveInt | undefined {
    return this.rank?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `rank` property.
   *
   * @param value - the `rank` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRank(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Encounter.diagnosis.rank (${String(value)})`;
      this.rank = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.rank = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rank` property exists and has a value; `false` otherwise
   */
  public hasRank(): boolean {
    return this.hasRankElement();
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
      this.rank,
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
    dest.condition = this.condition ? this.condition.copy() : null;
    dest.use = this.use?.copy();
    dest.rank = this.rank?.copy();
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

    if (this.hasCondition()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCondition()!, 'condition', jsonObj);
    } else {
      missingReqdProperties.push(`Encounter.diagnosis.condition`);
    }

    if (this.hasUse()) {
      setFhirComplexJson(this.getUse(), 'use', jsonObj);
    }

    if (this.hasRankElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getRankElement(), 'rank', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * EncounterHospitalizationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Details about the admission to a healthcare service
 * - **Definition:** Details about the admission to a healthcare service.
 * - **Comment:** An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included. The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
 *
 * @category Data Models: Resource
 * @see [FHIR Encounter](http://hl7.org/fhir/StructureDefinition/Encounter)
 */
export class EncounterHospitalizationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EncounterHospitalizationComponent` JSON to instantiate the EncounterHospitalizationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EncounterHospitalizationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EncounterHospitalizationComponent
   * @returns EncounterHospitalizationComponent data model or undefined for `EncounterHospitalizationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EncounterHospitalizationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EncounterHospitalizationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EncounterHospitalizationComponent();

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

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Encounter.hospitalization.preAdmissionIdentifier Element
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
   * Encounter.hospitalization.origin Element
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
   * Encounter.hospitalization.admitSource Element
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
   * Encounter.hospitalization.reAdmission Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission
   * - **Definition:** Whether this hospitalization is a readmission and why if known.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reAdmission?: CodeableConcept | undefined;

  /**
   * Encounter.hospitalization.dietPreference Element
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
   * Encounter.hospitalization.specialCourtesy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Special courtesies (VIP, board member)
   * - **Definition:** Special courtesies (VIP, board member).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private specialCourtesy?: CodeableConcept[] | undefined;

  /**
   * Encounter.hospitalization.specialArrangement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Wheelchair, translator, stretcher, etc.
   * - **Definition:** Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private specialArrangement?: CodeableConcept[] | undefined;

  /**
   * Encounter.hospitalization.destination Element
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
   * Encounter.hospitalization.dischargeDisposition Element
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
      const optErrMsg = `Invalid Encounter.hospitalization.preAdmissionIdentifier; Provided element is not an instance of Identifier.`;
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
   * @decorator `@ReferenceTargets('Encounter.hospitalization.origin', ['Location','Organization',])`
   *
   * @param value - the `origin` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.hospitalization.origin', [
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
      const optErrMsg = `Invalid Encounter.hospitalization.admitSource; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.hospitalization.reAdmission; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.hospitalization.dietPreference; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.hospitalization.dietPreference; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.hospitalization.specialCourtesy; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.hospitalization.specialCourtesy; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.hospitalization.specialArrangement; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Encounter.hospitalization.specialArrangement; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `destination` property value as a Reference object; else an empty Reference object
   */
  public getDestination(): Reference {
    return this.destination ?? new Reference();
  }

  /**
   * Assigns the provided Destination object value to the `destination` property.
   *
   * @decorator `@ReferenceTargets('Encounter.hospitalization.destination', ['Location','Organization',])`
   *
   * @param value - the `destination` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Encounter.hospitalization.destination', [
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
      const optErrMsg = `Invalid Encounter.hospitalization.dischargeDisposition; Provided element is not an instance of CodeableConcept.`;
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
    return 'Encounter.hospitalization';
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
      this.dietPreference,
      this.specialCourtesy,
      this.specialArrangement,
      this.destination,
      this.dischargeDisposition,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EncounterHospitalizationComponent {
    const dest = new EncounterHospitalizationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EncounterHospitalizationComponent): void {
    super.copyValues(dest);
    dest.preAdmissionIdentifier = this.preAdmissionIdentifier?.copy();
    dest.origin = this.origin?.copy();
    dest.admitSource = this.admitSource?.copy();
    dest.reAdmission = this.reAdmission?.copy();
    const dietPreferenceList = copyListValues<CodeableConcept>(this.dietPreference);
    dest.dietPreference = dietPreferenceList.length === 0 ? undefined : dietPreferenceList;
    const specialCourtesyList = copyListValues<CodeableConcept>(this.specialCourtesy);
    dest.specialCourtesy = specialCourtesyList.length === 0 ? undefined : specialCourtesyList;
    const specialArrangementList = copyListValues<CodeableConcept>(this.specialArrangement);
    dest.specialArrangement = specialArrangementList.length === 0 ? undefined : specialArrangementList;
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

    if (this.hasDietPreference()) {
      setFhirComplexListJson(this.getDietPreference(), 'dietPreference', jsonObj);
    }

    if (this.hasSpecialCourtesy()) {
      setFhirComplexListJson(this.getSpecialCourtesy(), 'specialCourtesy', jsonObj);
    }

    if (this.hasSpecialArrangement()) {
      setFhirComplexListJson(this.getSpecialArrangement(), 'specialArrangement', jsonObj);
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
   * @throws {@link FhirError} if the provided JSON is missing required properties
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
    

    const missingReqdProperties: string[] = [];

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setLocation(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setStatusElement(datatype);
    }

    fieldName = 'physicalType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPhysicalType(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
   * Encounter.location.physicalType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The physical type of the location (usually the level in the location hierachy - bed room ward etc.)
   * - **Definition:** This will be used to specify the required levels (bed/ward/room/etc.) desired to be recorded to simplify either messaging or query.
   * - **Comment:** This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query. There may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private physicalType?: CodeableConcept | undefined;

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
   * @returns the `location` property value as a Reference object if defined; else null
   */
  public getLocation(): Reference | null {
    return this.location;
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
  public setLocation(value: Reference): this {
    assertIsDefined<Reference>(value, `Encounter.location.location is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.location = value;
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
   * @returns the `physicalType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPhysicalType(): CodeableConcept {
    return this.physicalType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PhysicalType object value to the `physicalType` property.
   *
   * @param value - the `physicalType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPhysicalType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Encounter.location.physicalType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.physicalType = value;
    } else {
      this.physicalType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `physicalType` property exists and has a value; `false` otherwise
   */
  public hasPhysicalType(): boolean {
    return isDefined<CodeableConcept>(this.physicalType) && !this.physicalType.isEmpty();
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
      this.physicalType,
      this.period,
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
    dest.physicalType = this.physicalType?.copy();
    dest.period = this.period?.copy();
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

    if (this.hasLocation()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getLocation()!, 'location', jsonObj);
    } else {
      missingReqdProperties.push(`Encounter.location.location`);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasPhysicalType()) {
      setFhirComplexJson(this.getPhysicalType(), 'physicalType', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
