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
 * AdverseEvent Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/AdverseEvent
 * StructureDefinition.name: AdverseEvent
 * StructureDefinition.description: Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 * StructureDefinition.fhirVersion: 4.0.1
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
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
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
} from '@paq-ts-fhir/fhir-core';
import { AdverseEventActualityEnum } from '../code-systems/AdverseEventActualityEnum';
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * AdverseEvent Class
 *
 * @remarks
 * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 *
 * **FHIR Specification**
 * - **Short:** Medical care, research study or other healthcare event causing physical injury
 * - **Definition:** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR AdverseEvent](http://hl7.org/fhir/StructureDefinition/AdverseEvent)
 */
export class AdverseEvent extends DomainResource implements IDomainResource {
  constructor(actuality: EnumCodeType | CodeType | fhirCode | null = null, subject: Reference | null = null) {
    super();

    this.adverseEventActualityEnum = new AdverseEventActualityEnum();

    this.actuality = constructorCodeValueAsEnumCodeType<AdverseEventActualityEnum>(
      actuality,
      AdverseEventActualityEnum,
      this.adverseEventActualityEnum,
      'AdverseEvent.actuality',
    );

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }
  }

  /**
   * Parse the provided `AdverseEvent` JSON to instantiate the AdverseEvent data model.
   *
   * @param sourceJson - JSON representing FHIR `AdverseEvent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AdverseEvent
   * @returns AdverseEvent data model or undefined for `AdverseEvent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): AdverseEvent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AdverseEvent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AdverseEvent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'AdverseEvent');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'actuality';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setActuality(null);
      } else {
        instance.setActualityElement(datatype);
      }
    } else {
      instance.setActuality(null);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCategory(datatype);
          }
        });
      }
    }

    fieldName = 'event';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEvent(datatype);
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setSubject(null);
      } else {
        instance.setSubject(datatype);
      }
    } else {
      instance.setSubject(null);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'detected';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDetectedElement(datatype);
    }

    fieldName = 'recordedDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setRecordedDateElement(datatype);
    }

    fieldName = 'resultingCondition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addResultingCondition(datatype);
          }
        });
      }
  }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    fieldName = 'seriousness';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSeriousness(datatype);
    }

    fieldName = 'severity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSeverity(datatype);
    }

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOutcome(datatype);
    }

    fieldName = 'recorder';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRecorder(datatype);
    }

    fieldName = 'contributor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addContributor(datatype);
          }
        });
      }
  }

    fieldName = 'suspectEntity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: AdverseEventSuspectEntityComponent | undefined = AdverseEventSuspectEntityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSuspectEntity(component);
          }
        });
      }
    }

    fieldName = 'subjectMedicalHistory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSubjectMedicalHistory(datatype);
          }
        });
      }
  }

    fieldName = 'referenceDocument';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addReferenceDocument(datatype);
          }
        });
      }
  }

    fieldName = 'study';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addStudy(datatype);
          }
        });
      }
  }

    return instance;
  }

  /**
   * AdverseEvent.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for the event
   * - **Definition:** Business identifiers assigned to this adverse event by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier (see [discussion](https://hl7.org/fhir/resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   * - **Requirements:** Allows identification of the adverse event as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * FHIR CodeSystem: AdverseEventActuality
   *
   * @see {@link AdverseEventActualityEnum }
   */
  private readonly adverseEventActualityEnum: AdverseEventActualityEnum;

  /**
   * AdverseEvent.actuality Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** actual | potential
   * - **Definition:** Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it has a potential code that indicates the adverse event did not actually happen.
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link AdverseEventActualityEnum }
   */
  private actuality: EnumCodeType | null;

  /**
   * AdverseEvent.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment
   * - **Definition:** The overall type of event, intended for search and filtering purposes.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * AdverseEvent.event Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of the event itself in relation to the subject
   * - **Definition:** This element defines the specific type of event that occurred or that was prevented from occurring.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private event?: CodeableConcept | undefined;

  /**
   * AdverseEvent.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subject impacted by event
   * - **Definition:** This subject or group impacted by the event.
   * - **Comment:** If AdverseEvent.resultingCondition differs among members of the group, then use Patient as the subject.
   * - **Requirements:** Allows for exposure of biohazard (such as legionella) to a group of individuals in a hospital.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject: Reference | null;

  /**
   * AdverseEvent.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter created as part of
   * - **Definition:** The Encounter during which AdverseEvent was created or to which the creation of this record is tightly associated.
   * - **Comment:** This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.  For example, if a medication administration was considered an adverse event because it resulted in a rash, then the encounter when the medication administration was given is the context.  If the patient reports the AdverseEvent during a second encounter, that second encounter is not the context.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private encounter?: Reference | undefined;

  /**
   * AdverseEvent.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the event occurred
   * - **Definition:** The date (and perhaps time) when the adverse event occurred.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * AdverseEvent.detected Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the event was detected
   * - **Definition:** Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private detected?: DateTimeType | undefined;

  /**
   * AdverseEvent.recordedDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the event was recorded
   * - **Definition:** The date on which the existence of the AdverseEvent was first recorded.
   * - **Comment:** The recordedDate represents the date when this particular AdverseEvent record was created in the system, not the date of the most recent update.  The date of the last record modification can be retrieved from the resource metadata.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private recordedDate?: DateTimeType | undefined;

  /**
   * AdverseEvent.resultingCondition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Effect on the subject due to this event
   * - **Definition:** Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resultingCondition?: Reference[] | undefined;

  /**
   * AdverseEvent.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Location where adverse event occurred
   * - **Definition:** The information about where the adverse event occurred.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private location?: Reference | undefined;

  /**
   * AdverseEvent.seriousness Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Seriousness of the event
   * - **Definition:** Assessment whether this event was of real importance.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private seriousness?: CodeableConcept | undefined;

  /**
   * AdverseEvent.severity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** mild | moderate | severe
   * - **Definition:** Describes the severity of the adverse event, in relation to the subject. Contrast to AdverseEvent.seriousness - a severe rash might not be serious, but a mild heart problem is.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private severity?: CodeableConcept | undefined;

  /**
   * AdverseEvent.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown
   * - **Definition:** Describes the type of outcome from the adverse event.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private outcome?: CodeableConcept | undefined;

  /**
   * AdverseEvent.recorder Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who recorded the adverse event
   * - **Definition:** Information on who recorded the adverse event.  May be the patient or a practitioner.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private recorder?: Reference | undefined;

  /**
   * AdverseEvent.contributor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who  was involved in the adverse event or the potential adverse event
   * - **Definition:** Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or more activities.  Such information includes information leading to the decision to perform the activity and how to perform the activity (e.g. consultant), information that the activity itself seeks to reveal (e.g. informant of clinical history), or information about what activity was performed (e.g. informant witness).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contributor?: Reference[] | undefined;

  /**
   * AdverseEvent.suspectEntity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The suspected agent causing the adverse event
   * - **Definition:** Describes the entity that is suspected to have caused the adverse event.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private suspectEntity?: AdverseEventSuspectEntityComponent[] | undefined;

  /**
   * AdverseEvent.subjectMedicalHistory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** AdverseEvent.subjectMedicalHistory
   * - **Definition:** AdverseEvent.subjectMedicalHistory.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/AllergyIntolerance',
   *       'http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory',
   *       'http://hl7.org/fhir/StructureDefinition/Immunization',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/Media',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subjectMedicalHistory?: Reference[] | undefined;

  /**
   * AdverseEvent.referenceDocument Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** AdverseEvent.referenceDocument
   * - **Definition:** AdverseEvent.referenceDocument.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private referenceDocument?: Reference[] | undefined;

  /**
   * AdverseEvent.study Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** AdverseEvent.study
   * - **Definition:** AdverseEvent.study.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ResearchStudy',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private study?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `identifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getIdentifier(): Identifier {
    return this.identifier ?? new Identifier();
  }

  /**
   * Assigns the provided Identifier object value to the `identifier` property.
   *
   * @param value - the `identifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid AdverseEvent.identifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.identifier = value;
    } else {
      this.identifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identifier` property exists and has a value; `false` otherwise
   */
  public hasIdentifier(): boolean {
    return isDefined<Identifier>(this.identifier) && !this.identifier.isEmpty();
  }

  /**
   * @returns the `actuality` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link AdverseEventActualityEnum }
   */
  public getActualityEnumType(): EnumCodeType | null {
    return this.actuality;
  }

  /**
   * Assigns the provided EnumCodeType value to the `actuality` property.
   *
   * @param enumType - the `actuality` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AdverseEventActualityEnum }
   */
  public setActualityEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid AdverseEvent.actuality`;
      assertEnumCodeType<AdverseEventActualityEnum>(enumType, AdverseEventActualityEnum, errMsgPrefix);
      this.actuality = enumType;
    } else {
      this.actuality = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `actuality` property exists and has a value; `false` otherwise
   */
  public hasActualityEnumType(): boolean {
    return isDefined<EnumCodeType>(this.actuality) && !this.actuality.isEmpty() && this.actuality.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `actuality` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link AdverseEventActualityEnum }
   */
  public getActualityElement(): CodeType | null {
    if (this.actuality === null) {
      return null;
    }
    return this.actuality as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `actuality` property.
   *
   * @param element - the `actuality` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AdverseEventActualityEnum }
   */
  public setActualityElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid AdverseEvent.actuality; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.actuality = new EnumCodeType(element, this.adverseEventActualityEnum);
    } else {
      this.actuality = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `actuality` property exists and has a value; `false` otherwise
   */
  public hasActualityElement(): boolean {
    return this.hasActualityEnumType();
  }

  /**
   * @returns the `actuality` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link AdverseEventActualityEnum }
   */
  public getActuality(): fhirCode | null {
    if (this.actuality === null) {
      return null;
    }
    return this.actuality.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `actuality` property.
   *
   * @param value - the `actuality` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link AdverseEventActualityEnum }
   */
  public setActuality(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid AdverseEvent.actuality (${String(value)})`;
      this.actuality = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.adverseEventActualityEnum);
    } else {
      this.actuality = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `actuality` property exists and has a value; `false` otherwise
   */
  public hasActuality(): boolean {
    return this.hasActualityEnumType();
  }

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
      const optErrMsg = `Invalid AdverseEvent.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid AdverseEvent.category; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `event` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getEvent(): CodeableConcept {
    return this.event ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Event object value to the `event` property.
   *
   * @param value - the `event` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEvent(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdverseEvent.event; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.event = value;
    } else {
      this.event = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `event` property exists and has a value; `false` otherwise
   */
  public hasEvent(): boolean {
    return isDefined<CodeableConcept>(this.event) && !this.event.isEmpty();
  }

  /**
   * @returns the `subject` property value as a Reference object if defined; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.subject', ['Patient','Group','Practitioner','RelatedPerson',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.subject', [
    'Patient',
  
    'Group',
  
    'Practitioner',
  
    'RelatedPerson',
  ])
  public setSubject(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = null;
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
   * @decorator `@ReferenceTargets('AdverseEvent.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.encounter', [
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
   * @returns the `date` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateElement(): DateTimeType {
    return this.date ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid AdverseEvent.date; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.date = element;
    } else {
      this.date = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDateElement(): boolean {
    return isDefined<DateTimeType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDateTime if defined; else undefined
   */
  public getDate(): fhirDateTime | undefined {
    return this.date?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid AdverseEvent.date (${String(value)})`;
      this.date = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.date = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDate(): boolean {
    return this.hasDateElement();
  }

  /**
   * @returns the `detected` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDetectedElement(): DateTimeType {
    return this.detected ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `detected` property.
   *
   * @param element - the `detected` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetectedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid AdverseEvent.detected; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.detected = element;
    } else {
      this.detected = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detected` property exists and has a value; `false` otherwise
   */
  public hasDetectedElement(): boolean {
    return isDefined<DateTimeType>(this.detected) && !this.detected.isEmpty();
  }

  /**
   * @returns the `detected` property value as a fhirDateTime if defined; else undefined
   */
  public getDetected(): fhirDateTime | undefined {
    return this.detected?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `detected` property.
   *
   * @param value - the `detected` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetected(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid AdverseEvent.detected (${String(value)})`;
      this.detected = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.detected = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detected` property exists and has a value; `false` otherwise
   */
  public hasDetected(): boolean {
    return this.hasDetectedElement();
  }

  /**
   * @returns the `recordedDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getRecordedDateElement(): DateTimeType {
    return this.recordedDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `recordedDate` property.
   *
   * @param element - the `recordedDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecordedDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid AdverseEvent.recordedDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.recordedDate = element;
    } else {
      this.recordedDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recordedDate` property exists and has a value; `false` otherwise
   */
  public hasRecordedDateElement(): boolean {
    return isDefined<DateTimeType>(this.recordedDate) && !this.recordedDate.isEmpty();
  }

  /**
   * @returns the `recordedDate` property value as a fhirDateTime if defined; else undefined
   */
  public getRecordedDate(): fhirDateTime | undefined {
    return this.recordedDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `recordedDate` property.
   *
   * @param value - the `recordedDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecordedDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid AdverseEvent.recordedDate (${String(value)})`;
      this.recordedDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.recordedDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recordedDate` property exists and has a value; `false` otherwise
   */
  public hasRecordedDate(): boolean {
    return this.hasRecordedDateElement();
  }

  /**
   * @returns the `resultingCondition` property value as a Reference array
   */
  public getResultingCondition(): Reference[] {
    return this.resultingCondition ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `resultingCondition` property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.resultingCondition', ['Condition',])`
   *
   * @param value - the `resultingCondition` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.resultingCondition', [
    'Condition',
  ])
  public setResultingCondition(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.resultingCondition = value;
    } else {
      this.resultingCondition = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `resultingCondition` array property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.resultingCondition', ['Condition',])`
   *
   * @param value - the `resultingCondition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.resultingCondition', [
    'Condition',
  ])
  public addResultingCondition(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initResultingCondition();
      this.resultingCondition?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `resultingCondition` property exists and has a value; `false` otherwise
   */
  public hasResultingCondition(): boolean {
    return isDefinedList<Reference>(this.resultingCondition) && this.resultingCondition.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `resultingCondition` property
   */
  private initResultingCondition(): void {
    if (!this.hasResultingCondition()) {
      this.resultingCondition = [] as Reference[];
    }
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
   * @decorator `@ReferenceTargets('AdverseEvent.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.location', [
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
   * @returns the `seriousness` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSeriousness(): CodeableConcept {
    return this.seriousness ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Seriousness object value to the `seriousness` property.
   *
   * @param value - the `seriousness` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSeriousness(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdverseEvent.seriousness; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.seriousness = value;
    } else {
      this.seriousness = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `seriousness` property exists and has a value; `false` otherwise
   */
  public hasSeriousness(): boolean {
    return isDefined<CodeableConcept>(this.seriousness) && !this.seriousness.isEmpty();
  }

  /**
   * @returns the `severity` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSeverity(): CodeableConcept {
    return this.severity ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Severity object value to the `severity` property.
   *
   * @param value - the `severity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSeverity(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdverseEvent.severity; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.severity = value;
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverity(): boolean {
    return isDefined<CodeableConcept>(this.severity) && !this.severity.isEmpty();
  }

  /**
   * @returns the `outcome` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOutcome(): CodeableConcept {
    return this.outcome ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Outcome object value to the `outcome` property.
   *
   * @param value - the `outcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutcome(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdverseEvent.outcome; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
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
    return isDefined<CodeableConcept>(this.outcome) && !this.outcome.isEmpty();
  }

  /**
   * @returns the `recorder` property value as a Reference object; else an empty Reference object
   */
  public getRecorder(): Reference {
    return this.recorder ?? new Reference();
  }

  /**
   * Assigns the provided Recorder object value to the `recorder` property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.recorder', ['Patient','Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `recorder` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.recorder', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  ])
  public setRecorder(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.recorder = value;
    } else {
      this.recorder = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recorder` property exists and has a value; `false` otherwise
   */
  public hasRecorder(): boolean {
    return isDefined<Reference>(this.recorder) && !this.recorder.isEmpty();
  }

  /**
   * @returns the `contributor` property value as a Reference array
   */
  public getContributor(): Reference[] {
    return this.contributor ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `contributor` property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.contributor', ['Practitioner','PractitionerRole','Device',])`
   *
   * @param value - the `contributor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.contributor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  ])
  public setContributor(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.contributor = value;
    } else {
      this.contributor = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `contributor` array property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.contributor', ['Practitioner','PractitionerRole','Device',])`
   *
   * @param value - the `contributor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.contributor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  ])
  public addContributor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initContributor();
      this.contributor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contributor` property exists and has a value; `false` otherwise
   */
  public hasContributor(): boolean {
    return isDefinedList<Reference>(this.contributor) && this.contributor.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `contributor` property
   */
  private initContributor(): void {
    if (!this.hasContributor()) {
      this.contributor = [] as Reference[];
    }
  }

  /**
   * @returns the `suspectEntity` property value as a AdverseEventSuspectEntityComponent array
   */
  public getSuspectEntity(): AdverseEventSuspectEntityComponent[] {
    return this.suspectEntity ?? ([] as AdverseEventSuspectEntityComponent[]);
  }

  /**
   * Assigns the provided AdverseEventSuspectEntityComponent array value to the `suspectEntity` property.
   *
   * @param value - the `suspectEntity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSuspectEntity(value: AdverseEventSuspectEntityComponent[] | undefined): this {
    if (isDefinedList<AdverseEventSuspectEntityComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.suspectEntity; Provided value array has an element that is not an instance of AdverseEventSuspectEntityComponent.`;
      assertFhirTypeList<AdverseEventSuspectEntityComponent>(value, AdverseEventSuspectEntityComponent, optErrMsg);
      this.suspectEntity = value;
    } else {
      this.suspectEntity = undefined;
    }
    return this;
  }

  /**
   * Add the provided AdverseEventSuspectEntityComponent value to the `suspectEntity` array property.
   *
   * @param value - the `suspectEntity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSuspectEntity(value: AdverseEventSuspectEntityComponent | undefined): this {
    if (isDefined<AdverseEventSuspectEntityComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.suspectEntity; Provided element is not an instance of AdverseEventSuspectEntityComponent.`;
      assertFhirType<AdverseEventSuspectEntityComponent>(value, AdverseEventSuspectEntityComponent, optErrMsg);
      this.initSuspectEntity();
      this.suspectEntity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `suspectEntity` property exists and has a value; `false` otherwise
   */
  public hasSuspectEntity(): boolean {
    return isDefinedList<AdverseEventSuspectEntityComponent>(this.suspectEntity) && this.suspectEntity.some((item: AdverseEventSuspectEntityComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `suspectEntity` property
   */
  private initSuspectEntity(): void {
    if(!this.hasSuspectEntity()) {
      this.suspectEntity = [] as AdverseEventSuspectEntityComponent[];
    }
  }

  /**
   * @returns the `subjectMedicalHistory` property value as a Reference array
   */
  public getSubjectMedicalHistory(): Reference[] {
    return this.subjectMedicalHistory ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `subjectMedicalHistory` property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.subjectMedicalHistory', ['Condition','Observation','AllergyIntolerance','FamilyMemberHistory','Immunization','Procedure','Media','DocumentReference',])`
   *
   * @param value - the `subjectMedicalHistory` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.subjectMedicalHistory', [
    'Condition',
  
    'Observation',
  
    'AllergyIntolerance',
  
    'FamilyMemberHistory',
  
    'Immunization',
  
    'Procedure',
  
    'Media',
  
    'DocumentReference',
  ])
  public setSubjectMedicalHistory(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subjectMedicalHistory = value;
    } else {
      this.subjectMedicalHistory = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `subjectMedicalHistory` array property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.subjectMedicalHistory', ['Condition','Observation','AllergyIntolerance','FamilyMemberHistory','Immunization','Procedure','Media','DocumentReference',])`
   *
   * @param value - the `subjectMedicalHistory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.subjectMedicalHistory', [
    'Condition',
  
    'Observation',
  
    'AllergyIntolerance',
  
    'FamilyMemberHistory',
  
    'Immunization',
  
    'Procedure',
  
    'Media',
  
    'DocumentReference',
  ])
  public addSubjectMedicalHistory(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSubjectMedicalHistory();
      this.subjectMedicalHistory?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subjectMedicalHistory` property exists and has a value; `false` otherwise
   */
  public hasSubjectMedicalHistory(): boolean {
    return isDefinedList<Reference>(this.subjectMedicalHistory) && this.subjectMedicalHistory.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `subjectMedicalHistory` property
   */
  private initSubjectMedicalHistory(): void {
    if (!this.hasSubjectMedicalHistory()) {
      this.subjectMedicalHistory = [] as Reference[];
    }
  }

  /**
   * @returns the `referenceDocument` property value as a Reference array
   */
  public getReferenceDocument(): Reference[] {
    return this.referenceDocument ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `referenceDocument` property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.referenceDocument', ['DocumentReference',])`
   *
   * @param value - the `referenceDocument` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.referenceDocument', [
    'DocumentReference',
  ])
  public setReferenceDocument(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.referenceDocument = value;
    } else {
      this.referenceDocument = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `referenceDocument` array property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.referenceDocument', ['DocumentReference',])`
   *
   * @param value - the `referenceDocument` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.referenceDocument', [
    'DocumentReference',
  ])
  public addReferenceDocument(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReferenceDocument();
      this.referenceDocument?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceDocument` property exists and has a value; `false` otherwise
   */
  public hasReferenceDocument(): boolean {
    return isDefinedList<Reference>(this.referenceDocument) && this.referenceDocument.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `referenceDocument` property
   */
  private initReferenceDocument(): void {
    if (!this.hasReferenceDocument()) {
      this.referenceDocument = [] as Reference[];
    }
  }

  /**
   * @returns the `study` property value as a Reference array
   */
  public getStudy(): Reference[] {
    return this.study ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `study` property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.study', ['ResearchStudy',])`
   *
   * @param value - the `study` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.study', [
    'ResearchStudy',
  ])
  public setStudy(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.study = value;
    } else {
      this.study = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `study` array property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.study', ['ResearchStudy',])`
   *
   * @param value - the `study` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.study', [
    'ResearchStudy',
  ])
  public addStudy(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initStudy();
      this.study?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `study` property exists and has a value; `false` otherwise
   */
  public hasStudy(): boolean {
    return isDefinedList<Reference>(this.study) && this.study.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `study` property
   */
  private initStudy(): void {
    if (!this.hasStudy()) {
      this.study = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AdverseEvent';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.actuality,
      this.category,
      this.event,
      this.subject,
      this.encounter,
      this.date,
      this.detected,
      this.recordedDate,
      this.resultingCondition,
      this.location,
      this.seriousness,
      this.severity,
      this.outcome,
      this.recorder,
      this.contributor,
      this.suspectEntity,
      this.subjectMedicalHistory,
      this.referenceDocument,
      this.study,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.actuality, this.subject, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AdverseEvent {
    const dest = new AdverseEvent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AdverseEvent): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.actuality = this.actuality ? this.actuality.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.event = this.event?.copy();
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.date = this.date?.copy();
    dest.detected = this.detected?.copy();
    dest.recordedDate = this.recordedDate?.copy();
    const resultingConditionList = copyListValues<Reference>(this.resultingCondition);
    dest.resultingCondition = resultingConditionList.length === 0 ? undefined : resultingConditionList;
    dest.location = this.location?.copy();
    dest.seriousness = this.seriousness?.copy();
    dest.severity = this.severity?.copy();
    dest.outcome = this.outcome?.copy();
    dest.recorder = this.recorder?.copy();
    const contributorList = copyListValues<Reference>(this.contributor);
    dest.contributor = contributorList.length === 0 ? undefined : contributorList;
    const suspectEntityList = copyListValues<AdverseEventSuspectEntityComponent>(this.suspectEntity);
    dest.suspectEntity = suspectEntityList.length === 0 ? undefined : suspectEntityList;
    const subjectMedicalHistoryList = copyListValues<Reference>(this.subjectMedicalHistory);
    dest.subjectMedicalHistory = subjectMedicalHistoryList.length === 0 ? undefined : subjectMedicalHistoryList;
    const referenceDocumentList = copyListValues<Reference>(this.referenceDocument);
    dest.referenceDocument = referenceDocumentList.length === 0 ? undefined : referenceDocumentList;
    const studyList = copyListValues<Reference>(this.study);
    dest.study = studyList.length === 0 ? undefined : studyList;
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
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasActualityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getActualityElement()!, 'actuality', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasEvent()) {
      setFhirComplexJson(this.getEvent(), 'event', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasDetectedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDetectedElement(), 'detected', jsonObj);
    }

    if (this.hasRecordedDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getRecordedDateElement(), 'recordedDate', jsonObj);
    }

    if (this.hasResultingCondition()) {
      setFhirComplexListJson(this.getResultingCondition(), 'resultingCondition', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasSeriousness()) {
      setFhirComplexJson(this.getSeriousness(), 'seriousness', jsonObj);
    }

    if (this.hasSeverity()) {
      setFhirComplexJson(this.getSeverity(), 'severity', jsonObj);
    }

    if (this.hasOutcome()) {
      setFhirComplexJson(this.getOutcome(), 'outcome', jsonObj);
    }

    if (this.hasRecorder()) {
      setFhirComplexJson(this.getRecorder(), 'recorder', jsonObj);
    }

    if (this.hasContributor()) {
      setFhirComplexListJson(this.getContributor(), 'contributor', jsonObj);
    }

    if (this.hasSuspectEntity()) {
      setFhirBackboneElementListJson(this.getSuspectEntity(), 'suspectEntity', jsonObj);
    }

    if (this.hasSubjectMedicalHistory()) {
      setFhirComplexListJson(this.getSubjectMedicalHistory(), 'subjectMedicalHistory', jsonObj);
    }

    if (this.hasReferenceDocument()) {
      setFhirComplexListJson(this.getReferenceDocument(), 'referenceDocument', jsonObj);
    }

    if (this.hasStudy()) {
      setFhirComplexListJson(this.getStudy(), 'study', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * AdverseEventSuspectEntityComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The suspected agent causing the adverse event
 * - **Definition:** Describes the entity that is suspected to have caused the adverse event.
 *
 * @category Data Models: Resource
 * @see [FHIR AdverseEvent](http://hl7.org/fhir/StructureDefinition/AdverseEvent)
 */
export class AdverseEventSuspectEntityComponent extends BackboneElement implements IBackboneElement {
  constructor(instance_: Reference | null = null) {
    super();

    this.instance_ = null;
    if (isDefined<Reference>(instance_)) {
      this.setInstance(instance_);
    }
  }

  /**
   * Parse the provided `AdverseEventSuspectEntityComponent` JSON to instantiate the AdverseEventSuspectEntityComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AdverseEventSuspectEntityComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AdverseEventSuspectEntityComponent
   * @returns AdverseEventSuspectEntityComponent data model or undefined for `AdverseEventSuspectEntityComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AdverseEventSuspectEntityComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AdverseEventSuspectEntityComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AdverseEventSuspectEntityComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'instance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setInstance(null);
      } else {
        instance.setInstance(datatype);
      }
    } else {
      instance.setInstance(null);
    }

    fieldName = 'causality';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: AdverseEventSuspectEntityCausalityComponent | undefined = AdverseEventSuspectEntityCausalityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCausality(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * AdverseEvent.suspectEntity.instance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Refers to the specific entity that caused the adverse event
   * - **Definition:** Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Immunization',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationAdministration',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationStatement',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instance_: Reference | null;

  /**
   * AdverseEvent.suspectEntity.causality Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information on the possible cause of the event
   * - **Definition:** Information on the possible cause of the event.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private causality?: AdverseEventSuspectEntityCausalityComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `instance_` property value as a Reference object if defined; else an empty Reference object
   */
  public getInstance(): Reference {
    return this.instance_ ?? new Reference();
  }

  /**
   * Assigns the provided Instance object value to the `instance_` property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.suspectEntity.instance', ['Immunization','Procedure','Substance','Medication','MedicationAdministration','MedicationStatement','Device',])`
   *
   * @param value - the `instance_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.suspectEntity.instance', [
    'Immunization',
  
    'Procedure',
  
    'Substance',
  
    'Medication',
  
    'MedicationAdministration',
  
    'MedicationStatement',
  
    'Device',
  ])
  public setInstance(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.instance_ = value;
    } else {
      this.instance_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `instance_` property exists and has a value; `false` otherwise
   */
  public hasInstance(): boolean {
    return isDefined<Reference>(this.instance_) && !this.instance_.isEmpty();
  }

  /**
   * @returns the `causality` property value as a AdverseEventSuspectEntityCausalityComponent array
   */
  public getCausality(): AdverseEventSuspectEntityCausalityComponent[] {
    return this.causality ?? ([] as AdverseEventSuspectEntityCausalityComponent[]);
  }

  /**
   * Assigns the provided AdverseEventSuspectEntityCausalityComponent array value to the `causality` property.
   *
   * @param value - the `causality` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCausality(value: AdverseEventSuspectEntityCausalityComponent[] | undefined): this {
    if (isDefinedList<AdverseEventSuspectEntityCausalityComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.suspectEntity.causality; Provided value array has an element that is not an instance of AdverseEventSuspectEntityCausalityComponent.`;
      assertFhirTypeList<AdverseEventSuspectEntityCausalityComponent>(value, AdverseEventSuspectEntityCausalityComponent, optErrMsg);
      this.causality = value;
    } else {
      this.causality = undefined;
    }
    return this;
  }

  /**
   * Add the provided AdverseEventSuspectEntityCausalityComponent value to the `causality` array property.
   *
   * @param value - the `causality` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCausality(value: AdverseEventSuspectEntityCausalityComponent | undefined): this {
    if (isDefined<AdverseEventSuspectEntityCausalityComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.suspectEntity.causality; Provided element is not an instance of AdverseEventSuspectEntityCausalityComponent.`;
      assertFhirType<AdverseEventSuspectEntityCausalityComponent>(value, AdverseEventSuspectEntityCausalityComponent, optErrMsg);
      this.initCausality();
      this.causality?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `causality` property exists and has a value; `false` otherwise
   */
  public hasCausality(): boolean {
    return isDefinedList<AdverseEventSuspectEntityCausalityComponent>(this.causality) && this.causality.some((item: AdverseEventSuspectEntityCausalityComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `causality` property
   */
  private initCausality(): void {
    if(!this.hasCausality()) {
      this.causality = [] as AdverseEventSuspectEntityCausalityComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AdverseEvent.suspectEntity';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.instance_,
      this.causality,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.instance_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AdverseEventSuspectEntityComponent {
    const dest = new AdverseEventSuspectEntityComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AdverseEventSuspectEntityComponent): void {
    super.copyValues(dest);
    dest.instance_ = this.instance_ ? this.instance_.copy() : null;
    const causalityList = copyListValues<AdverseEventSuspectEntityCausalityComponent>(this.causality);
    dest.causality = causalityList.length === 0 ? undefined : causalityList;
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

    if (this.hasInstance()) {
      setFhirComplexJson(this.getInstance(), 'instance', jsonObj);
    }

    if (this.hasCausality()) {
      setFhirBackboneElementListJson(this.getCausality(), 'causality', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * AdverseEventSuspectEntityCausalityComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information on the possible cause of the event
 * - **Definition:** Information on the possible cause of the event.
 *
 * @category Data Models: Resource
 * @see [FHIR AdverseEvent](http://hl7.org/fhir/StructureDefinition/AdverseEvent)
 */
export class AdverseEventSuspectEntityCausalityComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `AdverseEventSuspectEntityCausalityComponent` JSON to instantiate the AdverseEventSuspectEntityCausalityComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AdverseEventSuspectEntityCausalityComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AdverseEventSuspectEntityCausalityComponent
   * @returns AdverseEventSuspectEntityCausalityComponent data model or undefined for `AdverseEventSuspectEntityCausalityComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AdverseEventSuspectEntityCausalityComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AdverseEventSuspectEntityCausalityComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AdverseEventSuspectEntityCausalityComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'assessment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAssessment(datatype);
    }

    fieldName = 'productRelatedness';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setProductRelatednessElement(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
    }

    fieldName = 'method';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMethod(datatype);
    }

    return instance;
  }

  /**
   * AdverseEvent.suspectEntity.causality.assessment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Assessment of if the entity caused the event
   * - **Definition:** Assessment of if the entity caused the event.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private assessment?: CodeableConcept | undefined;

  /**
   * AdverseEvent.suspectEntity.causality.productRelatedness Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** AdverseEvent.suspectEntity.causalityProductRelatedness
   * - **Definition:** AdverseEvent.suspectEntity.causalityProductRelatedness.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private productRelatedness?: StringType | undefined;

  /**
   * AdverseEvent.suspectEntity.causality.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** AdverseEvent.suspectEntity.causalityAuthor
   * - **Definition:** AdverseEvent.suspectEntity.causalityAuthor.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author?: Reference | undefined;

  /**
   * AdverseEvent.suspectEntity.causality.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** ProbabilityScale | Bayesian | Checklist
   * - **Definition:** ProbabilityScale | Bayesian | Checklist.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private method?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `assessment` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAssessment(): CodeableConcept {
    return this.assessment ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Assessment object value to the `assessment` property.
   *
   * @param value - the `assessment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAssessment(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdverseEvent.suspectEntity.causality.assessment; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.assessment = value;
    } else {
      this.assessment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assessment` property exists and has a value; `false` otherwise
   */
  public hasAssessment(): boolean {
    return isDefined<CodeableConcept>(this.assessment) && !this.assessment.isEmpty();
  }

  /**
   * @returns the `productRelatedness` property value as a StringType object if defined; else an empty StringType object
   */
  public getProductRelatednessElement(): StringType {
    return this.productRelatedness ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `productRelatedness` property.
   *
   * @param element - the `productRelatedness` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProductRelatednessElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid AdverseEvent.suspectEntity.causality.productRelatedness; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.productRelatedness = element;
    } else {
      this.productRelatedness = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productRelatedness` property exists and has a value; `false` otherwise
   */
  public hasProductRelatednessElement(): boolean {
    return isDefined<StringType>(this.productRelatedness) && !this.productRelatedness.isEmpty();
  }

  /**
   * @returns the `productRelatedness` property value as a fhirString if defined; else undefined
   */
  public getProductRelatedness(): fhirString | undefined {
    return this.productRelatedness?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `productRelatedness` property.
   *
   * @param value - the `productRelatedness` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProductRelatedness(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid AdverseEvent.suspectEntity.causality.productRelatedness (${String(value)})`;
      this.productRelatedness = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.productRelatedness = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `productRelatedness` property exists and has a value; `false` otherwise
   */
  public hasProductRelatedness(): boolean {
    return this.hasProductRelatednessElement();
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
   * @decorator `@ReferenceTargets('AdverseEvent.suspectEntity.causality.author', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.suspectEntity.causality.author', [
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
   * @returns the `method` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMethod(): CodeableConcept {
    return this.method ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Method object value to the `method` property.
   *
   * @param value - the `method` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMethod(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdverseEvent.suspectEntity.causality.method; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.method = value;
    } else {
      this.method = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `method` property exists and has a value; `false` otherwise
   */
  public hasMethod(): boolean {
    return isDefined<CodeableConcept>(this.method) && !this.method.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AdverseEvent.suspectEntity.causality';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.assessment,
      this.productRelatedness,
      this.author,
      this.method,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AdverseEventSuspectEntityCausalityComponent {
    const dest = new AdverseEventSuspectEntityCausalityComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AdverseEventSuspectEntityCausalityComponent): void {
    super.copyValues(dest);
    dest.assessment = this.assessment?.copy();
    dest.productRelatedness = this.productRelatedness?.copy();
    dest.author = this.author?.copy();
    dest.method = this.method?.copy();
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

    if (this.hasAssessment()) {
      setFhirComplexJson(this.getAssessment(), 'assessment', jsonObj);
    }

    if (this.hasProductRelatednessElement()) {
      setFhirPrimitiveJson<fhirString>(this.getProductRelatednessElement(), 'productRelatedness', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasMethod()) {
      setFhirComplexJson(this.getMethod(), 'method', jsonObj);
    }

    return jsonObj;
  }
}
