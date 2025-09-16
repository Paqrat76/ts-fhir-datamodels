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
 * Condition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Condition
 * StructureDefinition.name: Condition
 * StructureDefinition.description: A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  DateTimeType,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  StringType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirDateTime,
  fhirDateTimeSchema,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Age, Annotation, CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Period, Range, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Condition Class
 *
 * @remarks
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 *
 * **FHIR Specification**
 * - **Short:** Detailed information about conditions, problems or diagnoses
 * - **Definition:** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Condition](http://hl7.org/fhir/StructureDefinition/Condition)
 */
export class Condition extends DomainResource implements IDomainResource {
  constructor(clinicalStatus: CodeableConcept | null = null, subject: Reference | null = null) {
    super();

    this.clinicalStatus = null;
    if (isDefined<CodeableConcept>(clinicalStatus)) {
      this.setClinicalStatus(clinicalStatus);
    }

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }
  }

  /**
   * Parse the provided `Condition` JSON to instantiate the Condition data model.
   *
   * @param sourceJson - JSON representing FHIR `Condition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Condition
   * @returns Condition data model or undefined for `Condition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Condition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Condition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Condition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Condition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = Condition[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for Condition`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addIdentifier(datatype);
          }
        });
      }
    }

    fieldName = 'clinicalStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setClinicalStatus(null);
      } else {
        instance.setClinicalStatus(datatype);
      }
    } else {
      instance.setClinicalStatus(null);
    }

    fieldName = 'verificationStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setVerificationStatus(datatype);
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

    fieldName = 'severity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSeverity(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'bodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addBodySite(datatype);
          }
        });
      }
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

    fieldName = 'onset[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const onset: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setOnset(onset);

    fieldName = 'abatement[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const abatement: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setAbatement(abatement);

    fieldName = 'recordedDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setRecordedDateElement(datatype);
    }

    fieldName = 'participant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ConditionParticipantComponent | undefined = ConditionParticipantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addParticipant(component);
          }
        });
      }
    }

    fieldName = 'stage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ConditionStageComponent | undefined = ConditionStageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addStage(component);
          }
        });
      }
    }

    fieldName = 'evidence';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEvidence(datatype);
          }
        });
      }
    }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addNote(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Condition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External Ids for this condition
   * - **Definition:** Business identifiers assigned to this condition by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier (see [discussion](https://hl7.org/fhir/resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   * - **Requirements:** Allows identification of the condition as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Condition.clinicalStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | recurrence | relapse | inactive | remission | resolved | unknown
   * - **Definition:** The clinical status of the condition.
   * - **Comment:** The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.  clinicalStatus is required since it is a modifier element.  For conditions that are problems list items, the clinicalStatus should not be unknown.  For conditions that are not problem list items, the clinicalStatus may be unknown.  For example, conditions derived from a claim are point in time, so those conditions may have a clinicalStatus of unknown
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because the status contains codes that mark the condition as no longer active.
   * - **isSummary:** true
   */
  private clinicalStatus: CodeableConcept | null;

  /**
   * Condition.verificationStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** unconfirmed | provisional | differential | confirmed | refuted | entered-in-error
   * - **Definition:** The verification status to support the clinical status of the condition.  The verification status pertains to the condition, itself, not to any specific condition attribute.
   * - **Comment:** verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status. The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because the status contains the code refuted and entered-in-error that mark the Condition as not currently valid.
   * - **isSummary:** true
   */
  private verificationStatus?: CodeableConcept | undefined;

  /**
   * Condition.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** problem-list-item | encounter-diagnosis
   * - **Definition:** A category assigned to the condition.
   * - **Comment:** The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * Condition.severity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subjective severity of condition
   * - **Definition:** A subjective assessment of the severity of the condition as evaluated by the clinician.
   * - **Comment:** Coding of the severity with a terminology is preferred, where possible.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private severity?: CodeableConcept | undefined;

  /**
   * Condition.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identification of the condition, problem or diagnosis
   * - **Definition:** Identification of the condition, problem or diagnosis.
   * - **Requirements:** 0..1 to account for primarily narrative only resources.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * Condition.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Anatomical location, if relevant
   * - **Definition:** The anatomical location where this condition manifests itself.
   * - **Comment:** Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodyStructure resource (e.g. to identify and track separately) then use the standard extension [http://hl7.org/fhir/StructureDefinition/bodySite](http://hl7.org/fhir/extensions/https://hl7.org/fhir/StructureDefinition-bodySite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private bodySite?: CodeableConcept[] | undefined;

  /**
   * Condition.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who has the condition?
   * - **Definition:** Indicates the patient or group who the condition record is associated with.
   * - **Requirements:** Group is typically used for veterinary or public health use cases.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject: Reference | null;

  /**
   * Condition.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The Encounter during which this Condition was created
   * - **Definition:** The Encounter during which this Condition was created or to which the creation of this record is tightly associated.
   * - **Comment:** This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
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
   * Condition.onset[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Condition.onset[x]', ['dateTime','Age','Period','Range','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Estimated or actual date,  date-time, or age
   * - **Definition:** Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   * - **Comment:** Age is generally used when the patient reports an age at which the Condition began to occur.  Period is generally used to convey an imprecise onset that occurred within the time period.  For example, Period is not intended to convey the transition period before the chronic bronchitis or COPD condition was diagnosed, but Period can be used to convey an imprecise diagnosis date.  Range is generally used to convey an imprecise age range (e.g. 4 to 6 years old).  Because a Condition.code can represent multiple levels of granularity and can be modified over time, the onset and abatement dates can have ambiguity whether those dates apply to the current Condition.code or an earlier representation of that Condition.code.   For example, if the Condition.code was initially documented as severe asthma, then it is ambiguous whether the onset and abatement dates apply to asthma (overall in that subject\'s lifetime) or when asthma transitioned to become severe.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Age',
   *     'Period',
   *     'Range',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Condition.onset[x]',[
    'dateTime',
    'Age',
    'Period',
    'Range',
    'string',
  ])
  private onset?: IDataType | undefined;

  /**
   * Condition.abatement[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Condition.abatement[x]', ['dateTime','Age','Period','Range','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When in resolution/remission
   * - **Definition:** The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Some conditions, such as chronic conditions, are never really resolved, but they can abate.
   * - **Comment:** There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated. Because a Condition.code can represent multiple levels of granularity and can be modified over time, the onset and abatement dates can have ambiguity whether those dates apply to the current Condition.code or an earlier representation of that Condition.code.   For example, if the Condition.code was initially documented as severe asthma, then it is ambiguous whether the onset and abatement dates apply to asthma (overall in that subject\'s lifetime) or when asthma transitioned to become severe.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Age',
   *     'Period',
   *     'Range',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Condition.abatement[x]',[
    'dateTime',
    'Age',
    'Period',
    'Range',
    'string',
  ])
  private abatement?: IDataType | undefined;

  /**
   * Condition.recordedDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date condition was first recorded
   * - **Definition:** The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
   * - **Comment:** When onset date is unknown, recordedDate can be used to establish if the condition was present on or before a given date.  If the recordedDate is known and provided by a sending system, it is preferred that the receiving system preserve that recordedDate value. If the recordedDate is not provided by the sending system, the receipt timestamp is sometimes used as the recordedDate.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private recordedDate?: DateTimeType | undefined;

  /**
   * Condition.participant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or what participated in the activities related to the condition and how they were involved
   * - **Definition:** Indicates who or what participated in the activities related to the condition and how they were involved.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private participant?: ConditionParticipantComponent[] | undefined;

  /**
   * Condition.stage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Stage/grade, usually assessed formally
   * - **Definition:** A simple summary of the stage such as "Stage 3" or "Early Onset". The determination of the stage is disease-specific, such as cancer, retinopathy of prematurity, kidney diseases, Alzheimer\'s, or Parkinson disease.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private stage?: ConditionStageComponent[] | undefined;

  /**
   * Condition.evidence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting evidence for the verification status
   * - **Definition:** Supporting evidence / manifestations that are the basis of the Condition\'s verification status, such as evidence that confirmed or refuted the condition.
   * - **Comment:** If the condition was confirmed, but subsequently refuted, then the evidence can be cumulative including all evidence over time.  The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.  For example, if the Condition.code is pneumonia, then there could be an evidence list where Condition.evidence.concept = fever (CodeableConcept), Condition.evidence.concept = cough (CodeableConcept), and Condition.evidence.reference = bronchitis (reference to Condition). 
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private evidence?: CodeableReference[] | undefined;

  /**
   * Condition.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information about the Condition
   * - **Definition:** Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

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
      const optErrMsg = `Invalid Condition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Condition.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `clinicalStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getClinicalStatus(): CodeableConcept {
    return this.clinicalStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `clinicalStatus` property.
   *
   * @param value - the `clinicalStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClinicalStatus(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Condition.clinicalStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.clinicalStatus = value;
    } else {
      this.clinicalStatus = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `clinicalStatus` property exists and has a value; `false` otherwise
   */
  public hasClinicalStatus(): boolean {
    return isDefined<CodeableConcept>(this.clinicalStatus) && !this.clinicalStatus.isEmpty();
  }

  /**
   * @returns the `verificationStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getVerificationStatus(): CodeableConcept {
    return this.verificationStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided VerificationStatus object value to the `verificationStatus` property.
   *
   * @param value - the `verificationStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVerificationStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Condition.verificationStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.verificationStatus = value;
    } else {
      this.verificationStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `verificationStatus` property exists and has a value; `false` otherwise
   */
  public hasVerificationStatus(): boolean {
    return isDefined<CodeableConcept>(this.verificationStatus) && !this.verificationStatus.isEmpty();
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
      const optErrMsg = `Invalid Condition.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Condition.category; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Condition.severity; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Condition.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `bodySite` property value as a CodeableConcept array
   */
  public getBodySite(): CodeableConcept[] {
    return this.bodySite ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `bodySite` property.
   *
   * @param value - the `bodySite` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBodySite(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Condition.bodySite; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.bodySite = value;
    } else {
      this.bodySite = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `bodySite` array property.
   *
   * @param value - the `bodySite` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBodySite(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Condition.bodySite; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initBodySite();
      this.bodySite?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `bodySite` property exists and has a value; `false` otherwise
   */
  public hasBodySite(): boolean {
    return isDefinedList<CodeableConcept>(this.bodySite) && this.bodySite.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `bodySite` property
   */
  private initBodySite(): void {
    if(!this.hasBodySite()) {
      this.bodySite = [] as CodeableConcept[];
    }
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
   * @decorator `@ReferenceTargets('Condition.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Condition.subject', [
    'Patient',
  
    'Group',
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
   * @decorator `@ReferenceTargets('Condition.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Condition.encounter', [
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
   * @returns the `onset` property value as a DataType object if defined; else undefined
   */
  public getOnset(): IDataType | undefined {
    return this.onset;
  }

  /**
   * Assigns the provided DataType object value to the `onset` property.
   *
   * @decorator `@ChoiceDataTypes('Condition.onset[x]')`
   *
   * @param value - the `onset` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Condition.onset[x]')
  public setOnset(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.onset = value;
    } else {
      this.onset = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onset` property exists and has a value; `false` otherwise
   */
  public hasOnset(): boolean {
    return isDefined<IDataType>(this.onset) && !this.onset.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `onset` property value as a DateTimeType object if defined; else undefined
   */
  public getOnsetDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Condition.onset[x]: Expected DateTimeType but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasOnsetDateTimeType(): boolean {
    return this.hasOnset() && this.onset instanceof DateTimeType;
  }

  /**
   * @returns the `onset` property value as a Age object if defined; else undefined
   */
  public getOnsetAge(): Age | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for Condition.onset[x]: Expected Age but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a Age and has a value; `false` otherwise
   */
  public hasOnsetAge(): boolean {
    return this.hasOnset() && this.onset instanceof Age;
  }

  /**
   * @returns the `onset` property value as a Period object if defined; else undefined
   */
  public getOnsetPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Condition.onset[x]: Expected Period but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a Period and has a value; `false` otherwise
   */
  public hasOnsetPeriod(): boolean {
    return this.hasOnset() && this.onset instanceof Period;
  }

  /**
   * @returns the `onset` property value as a Range object if defined; else undefined
   */
  public getOnsetRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for Condition.onset[x]: Expected Range but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a Range and has a value; `false` otherwise
   */
  public hasOnsetRange(): boolean {
    return this.hasOnset() && this.onset instanceof Range;
  }

  /**
   * @returns the `onset` property value as a StringType object if defined; else undefined
   */
  public getOnsetStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Condition.onset[x]: Expected StringType but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a StringType and has a value; `false` otherwise
   */
  public hasOnsetStringType(): boolean {
    return this.hasOnset() && this.onset instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `abatement` property value as a DataType object if defined; else undefined
   */
  public getAbatement(): IDataType | undefined {
    return this.abatement;
  }

  /**
   * Assigns the provided DataType object value to the `abatement` property.
   *
   * @decorator `@ChoiceDataTypes('Condition.abatement[x]')`
   *
   * @param value - the `abatement` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Condition.abatement[x]')
  public setAbatement(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.abatement = value;
    } else {
      this.abatement = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `abatement` property exists and has a value; `false` otherwise
   */
  public hasAbatement(): boolean {
    return isDefined<IDataType>(this.abatement) && !this.abatement.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `abatement` property value as a DateTimeType object if defined; else undefined
   */
  public getAbatementDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.abatement)) {
      return undefined;
    }
    if (!(this.abatement instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Condition.abatement[x]: Expected DateTimeType but encountered ${this.abatement.fhirType()}`,
      );
    }
    return this.abatement;
  }

  /**
   * @returns `true` if the `abatement` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasAbatementDateTimeType(): boolean {
    return this.hasAbatement() && this.abatement instanceof DateTimeType;
  }

  /**
   * @returns the `abatement` property value as a Age object if defined; else undefined
   */
  public getAbatementAge(): Age | undefined {
    if (!isDefined<IDataType | undefined>(this.abatement)) {
      return undefined;
    }
    if (!(this.abatement instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for Condition.abatement[x]: Expected Age but encountered ${this.abatement.fhirType()}`,
      );
    }
    return this.abatement;
  }

  /**
   * @returns `true` if the `abatement` property exists as a Age and has a value; `false` otherwise
   */
  public hasAbatementAge(): boolean {
    return this.hasAbatement() && this.abatement instanceof Age;
  }

  /**
   * @returns the `abatement` property value as a Period object if defined; else undefined
   */
  public getAbatementPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.abatement)) {
      return undefined;
    }
    if (!(this.abatement instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Condition.abatement[x]: Expected Period but encountered ${this.abatement.fhirType()}`,
      );
    }
    return this.abatement;
  }

  /**
   * @returns `true` if the `abatement` property exists as a Period and has a value; `false` otherwise
   */
  public hasAbatementPeriod(): boolean {
    return this.hasAbatement() && this.abatement instanceof Period;
  }

  /**
   * @returns the `abatement` property value as a Range object if defined; else undefined
   */
  public getAbatementRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.abatement)) {
      return undefined;
    }
    if (!(this.abatement instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for Condition.abatement[x]: Expected Range but encountered ${this.abatement.fhirType()}`,
      );
    }
    return this.abatement;
  }

  /**
   * @returns `true` if the `abatement` property exists as a Range and has a value; `false` otherwise
   */
  public hasAbatementRange(): boolean {
    return this.hasAbatement() && this.abatement instanceof Range;
  }

  /**
   * @returns the `abatement` property value as a StringType object if defined; else undefined
   */
  public getAbatementStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.abatement)) {
      return undefined;
    }
    if (!(this.abatement instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Condition.abatement[x]: Expected StringType but encountered ${this.abatement.fhirType()}`,
      );
    }
    return this.abatement;
  }

  /**
   * @returns `true` if the `abatement` property exists as a StringType and has a value; `false` otherwise
   */
  public hasAbatementStringType(): boolean {
    return this.hasAbatement() && this.abatement instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid Condition.recordedDate; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid Condition.recordedDate (${String(value)})`;
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
   * @returns the `participant` property value as a ConditionParticipantComponent array
   */
  public getParticipant(): ConditionParticipantComponent[] {
    return this.participant ?? ([] as ConditionParticipantComponent[]);
  }

  /**
   * Assigns the provided ConditionParticipantComponent array value to the `participant` property.
   *
   * @param value - the `participant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParticipant(value: ConditionParticipantComponent[] | undefined): this {
    if (isDefinedList<ConditionParticipantComponent>(value)) {
      const optErrMsg = `Invalid Condition.participant; Provided value array has an element that is not an instance of ConditionParticipantComponent.`;
      assertFhirTypeList<ConditionParticipantComponent>(value, ConditionParticipantComponent, optErrMsg);
      this.participant = value;
    } else {
      this.participant = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConditionParticipantComponent value to the `participant` array property.
   *
   * @param value - the `participant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParticipant(value: ConditionParticipantComponent | undefined): this {
    if (isDefined<ConditionParticipantComponent>(value)) {
      const optErrMsg = `Invalid Condition.participant; Provided element is not an instance of ConditionParticipantComponent.`;
      assertFhirType<ConditionParticipantComponent>(value, ConditionParticipantComponent, optErrMsg);
      this.initParticipant();
      this.participant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `participant` property exists and has a value; `false` otherwise
   */
  public hasParticipant(): boolean {
    return isDefinedList<ConditionParticipantComponent>(this.participant) && this.participant.some((item: ConditionParticipantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `participant` property
   */
  private initParticipant(): void {
    if(!this.hasParticipant()) {
      this.participant = [] as ConditionParticipantComponent[];
    }
  }

  /**
   * @returns the `stage` property value as a ConditionStageComponent array
   */
  public getStage(): ConditionStageComponent[] {
    return this.stage ?? ([] as ConditionStageComponent[]);
  }

  /**
   * Assigns the provided ConditionStageComponent array value to the `stage` property.
   *
   * @param value - the `stage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStage(value: ConditionStageComponent[] | undefined): this {
    if (isDefinedList<ConditionStageComponent>(value)) {
      const optErrMsg = `Invalid Condition.stage; Provided value array has an element that is not an instance of ConditionStageComponent.`;
      assertFhirTypeList<ConditionStageComponent>(value, ConditionStageComponent, optErrMsg);
      this.stage = value;
    } else {
      this.stage = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConditionStageComponent value to the `stage` array property.
   *
   * @param value - the `stage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStage(value: ConditionStageComponent | undefined): this {
    if (isDefined<ConditionStageComponent>(value)) {
      const optErrMsg = `Invalid Condition.stage; Provided element is not an instance of ConditionStageComponent.`;
      assertFhirType<ConditionStageComponent>(value, ConditionStageComponent, optErrMsg);
      this.initStage();
      this.stage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `stage` property exists and has a value; `false` otherwise
   */
  public hasStage(): boolean {
    return isDefinedList<ConditionStageComponent>(this.stage) && this.stage.some((item: ConditionStageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `stage` property
   */
  private initStage(): void {
    if(!this.hasStage()) {
      this.stage = [] as ConditionStageComponent[];
    }
  }

  /**
   * @returns the `evidence` property value as a CodeableReference array
   */
  public getEvidence(): CodeableReference[] {
    return this.evidence ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `evidence` property.
   *
   * @param value - the `evidence` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEvidence(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid Condition.evidence; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.evidence = value;
    } else {
      this.evidence = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `evidence` array property.
   *
   * @param value - the `evidence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEvidence(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Condition.evidence; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initEvidence();
      this.evidence?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `evidence` property exists and has a value; `false` otherwise
   */
  public hasEvidence(): boolean {
    return isDefinedList<CodeableReference>(this.evidence) && this.evidence.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `evidence` property
   */
  private initEvidence(): void {
    if(!this.hasEvidence()) {
      this.evidence = [] as CodeableReference[];
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
      const optErrMsg = `Invalid Condition.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Condition.note; Provided element is not an instance of Annotation.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Condition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.clinicalStatus,
      this.verificationStatus,
      this.category,
      this.severity,
      this.code,
      this.bodySite,
      this.subject,
      this.encounter,
      this.onset,
      this.abatement,
      this.recordedDate,
      this.participant,
      this.stage,
      this.evidence,
      this.note,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.clinicalStatus, this.subject, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Condition {
    const dest = new Condition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Condition): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.clinicalStatus = this.clinicalStatus ? this.clinicalStatus.copy() : null;
    dest.verificationStatus = this.verificationStatus?.copy();
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.severity = this.severity?.copy();
    dest.code = this.code?.copy();
    const bodySiteList = copyListValues<CodeableConcept>(this.bodySite);
    dest.bodySite = bodySiteList.length === 0 ? undefined : bodySiteList;
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.onset = this.onset?.copy() as IDataType;
    dest.abatement = this.abatement?.copy() as IDataType;
    dest.recordedDate = this.recordedDate?.copy();
    const participantList = copyListValues<ConditionParticipantComponent>(this.participant);
    dest.participant = participantList.length === 0 ? undefined : participantList;
    const stageList = copyListValues<ConditionStageComponent>(this.stage);
    dest.stage = stageList.length === 0 ? undefined : stageList;
    const evidenceList = copyListValues<CodeableReference>(this.evidence);
    dest.evidence = evidenceList.length === 0 ? undefined : evidenceList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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

    if (this.hasClinicalStatus()) {
      setFhirComplexJson(this.getClinicalStatus(), 'clinicalStatus', jsonObj);
    }

    if (this.hasVerificationStatus()) {
      setFhirComplexJson(this.getVerificationStatus(), 'verificationStatus', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasSeverity()) {
      setFhirComplexJson(this.getSeverity(), 'severity', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasBodySite()) {
      setFhirComplexListJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasOnset()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOnset()!, 'onset', jsonObj);
    }

    if (this.hasAbatement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAbatement()!, 'abatement', jsonObj);
    }

    if (this.hasRecordedDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getRecordedDateElement(), 'recordedDate', jsonObj);
    }

    if (this.hasParticipant()) {
      setFhirBackboneElementListJson(this.getParticipant(), 'participant', jsonObj);
    }

    if (this.hasStage()) {
      setFhirBackboneElementListJson(this.getStage(), 'stage', jsonObj);
    }

    if (this.hasEvidence()) {
      setFhirComplexListJson(this.getEvidence(), 'evidence', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ConditionParticipantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who or what participated in the activities related to the condition and how they were involved
 * - **Definition:** Indicates who or what participated in the activities related to the condition and how they were involved.
 *
 * @category Data Models: Resource
 * @see [FHIR Condition](http://hl7.org/fhir/StructureDefinition/Condition)
 */
export class ConditionParticipantComponent extends BackboneElement implements IBackboneElement {
  constructor(actor: Reference | null = null) {
    super();

    this.actor = null;
    if (isDefined<Reference>(actor)) {
      this.setActor(actor);
    }
  }

  /**
   * Parse the provided `ConditionParticipantComponent` JSON to instantiate the ConditionParticipantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConditionParticipantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConditionParticipantComponent
   * @returns ConditionParticipantComponent data model or undefined for `ConditionParticipantComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConditionParticipantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConditionParticipantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConditionParticipantComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'function';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFunction(datatype);
    }

    fieldName = 'actor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setActor(null);
      } else {
        instance.setActor(datatype);
      }
    } else {
      instance.setActor(null);
    }

    return instance;
  }

  /**
   * Condition.participant.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of involvement
   * - **Definition:** Distinguishes the type of involvement of the actor in the activities related to the condition.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private function_?: CodeableConcept | undefined;

  /**
   * Condition.participant.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or what participated in the activities related to the condition
   * - **Definition:** Indicates who or what participated in the activities related to the condition.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private actor: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Condition.participant.function; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `actor` property value as a Reference object if defined; else an empty Reference object
   */
  public getActor(): Reference {
    return this.actor ?? new Reference();
  }

  /**
   * Assigns the provided Actor object value to the `actor` property.
   *
   * @decorator `@ReferenceTargets('Condition.participant.actor', ['Practitioner','PractitionerRole','Patient','RelatedPerson','Device','Organization','CareTeam',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Condition.participant.actor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Patient',
  
    'RelatedPerson',
  
    'Device',
  
    'Organization',
  
    'CareTeam',
  ])
  public setActor(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.actor = value;
    } else {
      this.actor = null;
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
    return 'Condition.participant';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.function_,
      this.actor,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.actor, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConditionParticipantComponent {
    const dest = new ConditionParticipantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConditionParticipantComponent): void {
    super.copyValues(dest);
    dest.function_ = this.function_?.copy();
    dest.actor = this.actor ? this.actor.copy() : null;
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

    if (this.hasFunction()) {
      setFhirComplexJson(this.getFunction(), 'function', jsonObj);
    }

    if (this.hasActor()) {
      setFhirComplexJson(this.getActor(), 'actor', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConditionStageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Stage/grade, usually assessed formally
 * - **Definition:** A simple summary of the stage such as "Stage 3" or "Early Onset". The determination of the stage is disease-specific, such as cancer, retinopathy of prematurity, kidney diseases, Alzheimer\'s, or Parkinson disease.
 *
 * @category Data Models: Resource
 * @see [FHIR Condition](http://hl7.org/fhir/StructureDefinition/Condition)
 */
export class ConditionStageComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ConditionStageComponent` JSON to instantiate the ConditionStageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConditionStageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConditionStageComponent
   * @returns ConditionStageComponent data model or undefined for `ConditionStageComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConditionStageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConditionStageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConditionStageComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'summary';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSummary(datatype);
    }

    fieldName = 'assessment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAssessment(datatype);
          }
        });
      }
  }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    return instance;
  }

  /**
   * Condition.stage.summary Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Simple summary (disease specific)
   * - **Definition:** A simple summary of the stage such as "Stage 3" or "Early Onset". The determination of the stage is disease-specific, such as cancer, retinopathy of prematurity, kidney diseases, Alzheimer\'s, or Parkinson disease.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private summary?: CodeableConcept | undefined;

  /**
   * Condition.stage.assessment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Formal record of assessment
   * - **Definition:** Reference to a formal record of the evidence on which the staging assessment is based.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ClinicalImpression',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private assessment?: Reference[] | undefined;

  /**
   * Condition.stage.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of staging
   * - **Definition:** The kind of staging, such as pathological or clinical staging.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `summary` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSummary(): CodeableConcept {
    return this.summary ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Summary object value to the `summary` property.
   *
   * @param value - the `summary` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSummary(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Condition.stage.summary; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.summary = value;
    } else {
      this.summary = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `summary` property exists and has a value; `false` otherwise
   */
  public hasSummary(): boolean {
    return isDefined<CodeableConcept>(this.summary) && !this.summary.isEmpty();
  }

  /**
   * @returns the `assessment` property value as a Reference array
   */
  public getAssessment(): Reference[] {
    return this.assessment ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `assessment` property.
   *
   * @decorator `@ReferenceTargets('Condition.stage.assessment', ['ClinicalImpression','DiagnosticReport','Observation',])`
   *
   * @param value - the `assessment` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Condition.stage.assessment', [
    'ClinicalImpression',
  
    'DiagnosticReport',
  
    'Observation',
  ])
  public setAssessment(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.assessment = value;
    } else {
      this.assessment = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `assessment` array property.
   *
   * @decorator `@ReferenceTargets('Condition.stage.assessment', ['ClinicalImpression','DiagnosticReport','Observation',])`
   *
   * @param value - the `assessment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Condition.stage.assessment', [
    'ClinicalImpression',
  
    'DiagnosticReport',
  
    'Observation',
  ])
  public addAssessment(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAssessment();
      this.assessment?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `assessment` property exists and has a value; `false` otherwise
   */
  public hasAssessment(): boolean {
    return isDefinedList<Reference>(this.assessment) && this.assessment.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `assessment` property
   */
  private initAssessment(): void {
    if (!this.hasAssessment()) {
      this.assessment = [] as Reference[];
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
      const optErrMsg = `Invalid Condition.stage.type; Provided element is not an instance of CodeableConcept.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Condition.stage';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.summary,
      this.assessment,
      this.type_,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConditionStageComponent {
    const dest = new ConditionStageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConditionStageComponent): void {
    super.copyValues(dest);
    dest.summary = this.summary?.copy();
    const assessmentList = copyListValues<Reference>(this.assessment);
    dest.assessment = assessmentList.length === 0 ? undefined : assessmentList;
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

    if (this.hasSummary()) {
      setFhirComplexJson(this.getSummary(), 'summary', jsonObj);
    }

    if (this.hasAssessment()) {
      setFhirComplexListJson(this.getAssessment(), 'assessment', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    return jsonObj;
  }
}
