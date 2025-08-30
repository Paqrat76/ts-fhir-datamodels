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
 * StructureDefinition.description: An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research participant. The unintended effects may require additional monitoring, treatment, hospitalization, or may result in death. The AdverseEvent resource also extends to potential or avoided events that could have had such effects. There are two major domains where the AdverseEvent resource is expected to be used. One is in clinical care reported adverse events and the other is in reporting adverse events in clinical  research trial management.  Adverse events can be reported by healthcare providers, patients, caregivers or by medical products manufacturers.  Given the differences between these two concepts, we recommend consulting the domain specific implementation guides when implementing the AdverseEvent Resource. The implementation guides include specific extensions, value sets and constraints.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  BooleanType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { AdverseEventActualityEnum } from '../code-systems/AdverseEventActualityEnum';
import { Annotation, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference, Timing } from '../complex-types/complex-datatypes';
import { EventStatusEnum } from '../code-systems/EventStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * AdverseEvent Class
 *
 * @remarks
 * An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research participant. The unintended effects may require additional monitoring, treatment, hospitalization, or may result in death. The AdverseEvent resource also extends to potential or avoided events that could have had such effects. There are two major domains where the AdverseEvent resource is expected to be used. One is in clinical care reported adverse events and the other is in reporting adverse events in clinical  research trial management.  Adverse events can be reported by healthcare providers, patients, caregivers or by medical products manufacturers.  Given the differences between these two concepts, we recommend consulting the domain specific implementation guides when implementing the AdverseEvent Resource. The implementation guides include specific extensions, value sets and constraints.
 *
 * **FHIR Specification**
 * - **Short:** An event that may be related to unintended effects on a patient or research participant
 * - **Definition:** An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research participant. The unintended effects may require additional monitoring, treatment, hospitalization, or may result in death. The AdverseEvent resource also extends to potential or avoided events that could have had such effects. There are two major domains where the AdverseEvent resource is expected to be used. One is in clinical care reported adverse events and the other is in reporting adverse events in clinical  research trial management. Adverse events can be reported by healthcare providers, patients, caregivers or by medical products manufacturers. Given the differences between these two concepts, we recommend consulting the domain specific implementation guides when implementing the AdverseEvent Resource. The implementation guides include specific extensions, value sets and constraints.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR AdverseEvent](http://hl7.org/fhir/StructureDefinition/AdverseEvent)
 */
export class AdverseEvent extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, actuality: EnumCodeType | CodeType | fhirCode | null = null, subject: Reference | null = null) {
    super();

    this.eventStatusEnum = new EventStatusEnum();
    this.adverseEventActualityEnum = new AdverseEventActualityEnum();

    this.status = constructorCodeValueAsEnumCodeType<EventStatusEnum>(
      status,
      EventStatusEnum,
      this.eventStatusEnum,
      'AdverseEvent.status',
    );

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

    const classMetadata: DecoratorMetadataObject | null = AdverseEvent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for AdverseEvent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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
      instance.setCode(datatype);
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

    fieldName = 'occurrence[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const occurrence: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setOccurrence(occurrence);

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

    fieldName = 'resultingEffect';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addResultingEffect(datatype);
        }
      });
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

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addOutcome(datatype);
        }
      });
    }

    fieldName = 'recorder';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRecorder(datatype);
    }

    fieldName = 'participant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AdverseEventParticipantComponent | undefined = AdverseEventParticipantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addParticipant(component);
        }
      });
    }

    fieldName = 'study';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addStudy(datatype);
        }
      });
  }

    fieldName = 'expectedInResearchStudy';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setExpectedInResearchStudyElement(datatype);
    }

    fieldName = 'suspectEntity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AdverseEventSuspectEntityComponent | undefined = AdverseEventSuspectEntityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSuspectEntity(component);
        }
      });
    }

    fieldName = 'contributingFactor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AdverseEventContributingFactorComponent | undefined = AdverseEventContributingFactorComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addContributingFactor(component);
        }
      });
    }

    fieldName = 'preventiveAction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AdverseEventPreventiveActionComponent | undefined = AdverseEventPreventiveActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPreventiveAction(component);
        }
      });
    }

    fieldName = 'mitigatingAction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AdverseEventMitigatingActionComponent | undefined = AdverseEventMitigatingActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addMitigatingAction(component);
        }
      });
    }

    fieldName = 'supportingInfo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: AdverseEventSupportingInfoComponent | undefined = AdverseEventSupportingInfoComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSupportingInfo(component);
        }
      });
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
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: EventStatus
   *
   * @see {@link EventStatusEnum }
   */
  private readonly eventStatusEnum: EventStatusEnum;

  /**
   * AdverseEvent.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** in-progress | completed | entered-in-error | unknown
   * - **Definition:** The current state of the adverse event or potential adverse event.
   * - **Comment:** This is not the reporting of the event to any regulatory or quality organization.  This is not the outcome of the patient\'s condition.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  private status: EnumCodeType | null;

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
   * - **Definition:** Whether the event actually happened or was a near miss. Note that this is independent of whether anyone was affected or harmed or how severely.
   * - **Comment:** AllergyIntolerance should be used for the initial capture or recording of the individual\'s propensity to an adverse reaction to a substance.  If an AllergyIntolerance does not exist, then an adverse reaction should be recorded as an AllergyIntolerance. If an AllergyIntolerance does exist and the substance was given, then an adverse reaction should be recorded as an AdverseEvent due to the aberrant workflow.
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
   * - **Short:** wrong-patient | procedure-mishap | medication-mishap | device | unsafe-physical-environment | hospital-aquired-infection | wrong-body-site
   * - **Definition:** The overall type of event, intended for search and filtering purposes.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * AdverseEvent.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Event or incident that occurred or was averted
   * - **Definition:** Specific event that occurred or that was averted, such as patient fall, wrong organ removed, or wrong blood transfused.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * AdverseEvent.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subject impacted by event
   * - **Definition:** This subject or group impacted by the event.
   * - **Comment:** If AdverseEvent.resultingEffect differs among members of the group, then use Patient as the subject.
   * - **Requirements:** Allows for exposure of biohazard (such as legionella) to a group of individuals in a hospital.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/ResearchSubject',
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
   * - **Short:** The Encounter associated with the start of the AdverseEvent
   * - **Definition:** The Encounter associated with the start of the AdverseEvent.
   * - **Comment:** This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. For example, if a medication administration was considered an adverse event because it resulted in a rash, then the encounter when the medication administration was given is the associated encounter. If the patient reports the AdverseEvent during a second encounter, that second encounter is not the associated encounter.
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
   * AdverseEvent.occurrence[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('AdverseEvent.occurrence[x]', ['dateTime','Period','Timing',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the event occurred
   * - **Definition:** The date (and perhaps time) when the adverse event occurred.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   *     'Timing',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('AdverseEvent.occurrence[x]',[
    'dateTime',
    'Period',
    'Timing',
  ])
  private occurrence?: IDataType | undefined;

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
   * AdverseEvent.resultingEffect Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Effect on the subject due to this event
   * - **Definition:** Information about the condition that occurred as a result of the adverse event, such as hives due to the exposure to a substance (for example, a drug or a chemical) or a broken leg as a result of the fall.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resultingEffect?: Reference[] | undefined;

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
   * - **Short:** Seriousness or gravity of the event
   * - **Definition:** Assessment whether this event, or averted event, was of clinical importance.
   * - **Comment:** Using an example, a rash can have an AdverseEvent.resultingEffect.severity = severe, yet an AdverseEvent.seriousness = non-serious.  Alternatively, a medication given with the wrong dose (chemotherapy given with too low of a dose) can have an AdverseEvent.resultingEffect.severity = mild, yet an adverseEvent.seriousness = serious.  Another example would be a beta blocker clinical trial where patients with asthma should be excluded, yet a patient with asthma was included and had an asthmatic episode where  AdverseEvent.resultingEffect.severity = mild, yet an adverseEvent.seriousness = serious.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private seriousness?: CodeableConcept | undefined;

  /**
   * AdverseEvent.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of outcome from the adverse event
   * - **Definition:** Describes the type of outcome from the adverse event, such as resolved, recovering, ongoing, resolved-with-sequelae, or fatal.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private outcome?: CodeableConcept[] | undefined;

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
   *       'http://hl7.org/fhir/StructureDefinition/ResearchSubject',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private recorder?: Reference | undefined;

  /**
   * AdverseEvent.participant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who was involved in the adverse event or the potential adverse event and what they did
   * - **Definition:** Indicates who or what participated in the adverse event and how they were involved.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private participant?: AdverseEventParticipantComponent[] | undefined;

  /**
   * AdverseEvent.study Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Research study that the subject is enrolled in
   * - **Definition:** The research study that the subject is enrolled in.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ResearchStudy',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private study?: Reference[] | undefined;

  /**
   * AdverseEvent.expectedInResearchStudy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Considered likely or probable or anticipated in the research study
   * - **Definition:** Considered likely or probable or anticipated in the research study.  Whether the reported event matches any of the outcomes for the patient that are considered by the study as known or likely.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expectedInResearchStudy?: BooleanType | undefined;

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
   * AdverseEvent.contributingFactor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contributing factors suspected to have increased the probability or severity of the adverse event
   * - **Definition:** The contributing factors suspected to have increased the probability or severity of the adverse event.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contributingFactor?: AdverseEventContributingFactorComponent[] | undefined;

  /**
   * AdverseEvent.preventiveAction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Preventive actions that contributed to avoiding the adverse event
   * - **Definition:** Preventive actions that contributed to avoiding the adverse event.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private preventiveAction?: AdverseEventPreventiveActionComponent[] | undefined;

  /**
   * AdverseEvent.mitigatingAction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm
   * - **Definition:** The ameliorating action taken after the adverse event occured in order to reduce the extent of harm.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private mitigatingAction?: AdverseEventMitigatingActionComponent[] | undefined;

  /**
   * AdverseEvent.supportingInfo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting information relevant to the event
   * - **Definition:** Supporting information relevant to the event.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private supportingInfo?: AdverseEventSupportingInfoComponent[] | undefined;

  /**
   * AdverseEvent.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comment on adverse event
   * - **Definition:** Comments made about the adverse event by the performer, subject or other participants.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
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
      const optErrMsg = `Invalid AdverseEvent.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid AdverseEvent.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid AdverseEvent.status`;
      assertEnumCodeType<EventStatusEnum>(enumType, EventStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid AdverseEvent.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.eventStatusEnum);
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid AdverseEvent.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.eventStatusEnum);
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
      const optErrMsg = `Invalid AdverseEvent.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subject` property value as a Reference object if defined; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.subject', ['Patient','Group','Practitioner','RelatedPerson','ResearchSubject',])`
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
  
    'ResearchSubject',
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
   * @returns the `occurrence` property value as a DataType object if defined; else undefined
   */
  public getOccurrence(): IDataType | undefined {
    return this.occurrence;
  }

  /**
   * Assigns the provided DataType object value to the `occurrence` property.
   *
   * @decorator `@ChoiceDataTypes('AdverseEvent.occurrence[x]')`
   *
   * @param value - the `occurrence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('AdverseEvent.occurrence[x]')
  public setOccurrence(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.occurrence = value;
    } else {
      this.occurrence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrence` property exists and has a value; `false` otherwise
   */
  public hasOccurrence(): boolean {
    return isDefined<IDataType>(this.occurrence) && !this.occurrence.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `occurrence` property value as a DateTimeType object if defined; else undefined
   */
  public getOccurrenceDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.occurrence)) {
      return undefined;
    }
    if (!(this.occurrence instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdverseEvent.occurrence[x]: Expected DateTimeType but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `occurrence` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasOccurrenceDateTimeType(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof DateTimeType;
  }

  /**
   * @returns the `occurrence` property value as a Period object if defined; else undefined
   */
  public getOccurrencePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.occurrence)) {
      return undefined;
    }
    if (!(this.occurrence instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdverseEvent.occurrence[x]: Expected Period but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `occurrence` property exists as a Period and has a value; `false` otherwise
   */
  public hasOccurrencePeriod(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof Period;
  }

  /**
   * @returns the `occurrence` property value as a Timing object if defined; else undefined
   */
  public getOccurrenceTiming(): Timing | undefined {
    if (!isDefined<IDataType | undefined>(this.occurrence)) {
      return undefined;
    }
    if (!(this.occurrence instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdverseEvent.occurrence[x]: Expected Timing but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `occurrence` property exists as a Timing and has a value; `false` otherwise
   */
  public hasOccurrenceTiming(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof Timing;
  }

  // End of choice datatype-specific "get"/"has" methods

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
   * @returns the `resultingEffect` property value as a Reference array
   */
  public getResultingEffect(): Reference[] {
    return this.resultingEffect ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `resultingEffect` property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.resultingEffect', ['Condition','Observation',])`
   *
   * @param value - the `resultingEffect` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.resultingEffect', [
    'Condition',
  
    'Observation',
  ])
  public setResultingEffect(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.resultingEffect = value;
    } else {
      this.resultingEffect = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `resultingEffect` array property.
   *
   * @decorator `@ReferenceTargets('AdverseEvent.resultingEffect', ['Condition','Observation',])`
   *
   * @param value - the `resultingEffect` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.resultingEffect', [
    'Condition',
  
    'Observation',
  ])
  public addResultingEffect(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initResultingEffect();
      this.resultingEffect?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `resultingEffect` property exists and has a value; `false` otherwise
   */
  public hasResultingEffect(): boolean {
    return isDefinedList<Reference>(this.resultingEffect) && this.resultingEffect.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `resultingEffect` property
   */
  private initResultingEffect(): void {
    if (!this.hasResultingEffect()) {
      this.resultingEffect = [] as Reference[];
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
   * @returns the `outcome` property value as a CodeableConcept array
   */
  public getOutcome(): CodeableConcept[] {
    return this.outcome ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `outcome` property.
   *
   * @param value - the `outcome` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutcome(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdverseEvent.outcome; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.outcome = value;
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `outcome` array property.
   *
   * @param value - the `outcome` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOutcome(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdverseEvent.outcome; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initOutcome();
      this.outcome?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcome(): boolean {
    return isDefinedList<CodeableConcept>(this.outcome) && this.outcome.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `outcome` property
   */
  private initOutcome(): void {
    if(!this.hasOutcome()) {
      this.outcome = [] as CodeableConcept[];
    }
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
   * @decorator `@ReferenceTargets('AdverseEvent.recorder', ['Patient','Practitioner','PractitionerRole','RelatedPerson','ResearchSubject',])`
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
  
    'ResearchSubject',
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
   * @returns the `participant` property value as a AdverseEventParticipantComponent array
   */
  public getParticipant(): AdverseEventParticipantComponent[] {
    return this.participant ?? ([] as AdverseEventParticipantComponent[]);
  }

  /**
   * Assigns the provided AdverseEventParticipantComponent array value to the `participant` property.
   *
   * @param value - the `participant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParticipant(value: AdverseEventParticipantComponent[] | undefined): this {
    if (isDefinedList<AdverseEventParticipantComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.participant; Provided value array has an element that is not an instance of AdverseEventParticipantComponent.`;
      assertFhirTypeList<AdverseEventParticipantComponent>(value, AdverseEventParticipantComponent, optErrMsg);
      this.participant = value;
    } else {
      this.participant = undefined;
    }
    return this;
  }

  /**
   * Add the provided AdverseEventParticipantComponent value to the `participant` array property.
   *
   * @param value - the `participant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParticipant(value: AdverseEventParticipantComponent | undefined): this {
    if (isDefined<AdverseEventParticipantComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.participant; Provided element is not an instance of AdverseEventParticipantComponent.`;
      assertFhirType<AdverseEventParticipantComponent>(value, AdverseEventParticipantComponent, optErrMsg);
      this.initParticipant();
      this.participant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `participant` property exists and has a value; `false` otherwise
   */
  public hasParticipant(): boolean {
    return isDefinedList<AdverseEventParticipantComponent>(this.participant) && this.participant.some((item: AdverseEventParticipantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `participant` property
   */
  private initParticipant(): void {
    if(!this.hasParticipant()) {
      this.participant = [] as AdverseEventParticipantComponent[];
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

  /**
   * @returns the `expectedInResearchStudy` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getExpectedInResearchStudyElement(): BooleanType {
    return this.expectedInResearchStudy ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `expectedInResearchStudy` property.
   *
   * @param element - the `expectedInResearchStudy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpectedInResearchStudyElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid AdverseEvent.expectedInResearchStudy; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.expectedInResearchStudy = element;
    } else {
      this.expectedInResearchStudy = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expectedInResearchStudy` property exists and has a value; `false` otherwise
   */
  public hasExpectedInResearchStudyElement(): boolean {
    return isDefined<BooleanType>(this.expectedInResearchStudy) && !this.expectedInResearchStudy.isEmpty();
  }

  /**
   * @returns the `expectedInResearchStudy` property value as a fhirBoolean if defined; else undefined
   */
  public getExpectedInResearchStudy(): fhirBoolean | undefined {
    return this.expectedInResearchStudy?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `expectedInResearchStudy` property.
   *
   * @param value - the `expectedInResearchStudy` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpectedInResearchStudy(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid AdverseEvent.expectedInResearchStudy (${String(value)})`;
      this.expectedInResearchStudy = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.expectedInResearchStudy = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expectedInResearchStudy` property exists and has a value; `false` otherwise
   */
  public hasExpectedInResearchStudy(): boolean {
    return this.hasExpectedInResearchStudyElement();
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
   * @returns the `contributingFactor` property value as a AdverseEventContributingFactorComponent array
   */
  public getContributingFactor(): AdverseEventContributingFactorComponent[] {
    return this.contributingFactor ?? ([] as AdverseEventContributingFactorComponent[]);
  }

  /**
   * Assigns the provided AdverseEventContributingFactorComponent array value to the `contributingFactor` property.
   *
   * @param value - the `contributingFactor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContributingFactor(value: AdverseEventContributingFactorComponent[] | undefined): this {
    if (isDefinedList<AdverseEventContributingFactorComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.contributingFactor; Provided value array has an element that is not an instance of AdverseEventContributingFactorComponent.`;
      assertFhirTypeList<AdverseEventContributingFactorComponent>(value, AdverseEventContributingFactorComponent, optErrMsg);
      this.contributingFactor = value;
    } else {
      this.contributingFactor = undefined;
    }
    return this;
  }

  /**
   * Add the provided AdverseEventContributingFactorComponent value to the `contributingFactor` array property.
   *
   * @param value - the `contributingFactor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContributingFactor(value: AdverseEventContributingFactorComponent | undefined): this {
    if (isDefined<AdverseEventContributingFactorComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.contributingFactor; Provided element is not an instance of AdverseEventContributingFactorComponent.`;
      assertFhirType<AdverseEventContributingFactorComponent>(value, AdverseEventContributingFactorComponent, optErrMsg);
      this.initContributingFactor();
      this.contributingFactor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contributingFactor` property exists and has a value; `false` otherwise
   */
  public hasContributingFactor(): boolean {
    return isDefinedList<AdverseEventContributingFactorComponent>(this.contributingFactor) && this.contributingFactor.some((item: AdverseEventContributingFactorComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `contributingFactor` property
   */
  private initContributingFactor(): void {
    if(!this.hasContributingFactor()) {
      this.contributingFactor = [] as AdverseEventContributingFactorComponent[];
    }
  }

  /**
   * @returns the `preventiveAction` property value as a AdverseEventPreventiveActionComponent array
   */
  public getPreventiveAction(): AdverseEventPreventiveActionComponent[] {
    return this.preventiveAction ?? ([] as AdverseEventPreventiveActionComponent[]);
  }

  /**
   * Assigns the provided AdverseEventPreventiveActionComponent array value to the `preventiveAction` property.
   *
   * @param value - the `preventiveAction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPreventiveAction(value: AdverseEventPreventiveActionComponent[] | undefined): this {
    if (isDefinedList<AdverseEventPreventiveActionComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.preventiveAction; Provided value array has an element that is not an instance of AdverseEventPreventiveActionComponent.`;
      assertFhirTypeList<AdverseEventPreventiveActionComponent>(value, AdverseEventPreventiveActionComponent, optErrMsg);
      this.preventiveAction = value;
    } else {
      this.preventiveAction = undefined;
    }
    return this;
  }

  /**
   * Add the provided AdverseEventPreventiveActionComponent value to the `preventiveAction` array property.
   *
   * @param value - the `preventiveAction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPreventiveAction(value: AdverseEventPreventiveActionComponent | undefined): this {
    if (isDefined<AdverseEventPreventiveActionComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.preventiveAction; Provided element is not an instance of AdverseEventPreventiveActionComponent.`;
      assertFhirType<AdverseEventPreventiveActionComponent>(value, AdverseEventPreventiveActionComponent, optErrMsg);
      this.initPreventiveAction();
      this.preventiveAction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `preventiveAction` property exists and has a value; `false` otherwise
   */
  public hasPreventiveAction(): boolean {
    return isDefinedList<AdverseEventPreventiveActionComponent>(this.preventiveAction) && this.preventiveAction.some((item: AdverseEventPreventiveActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `preventiveAction` property
   */
  private initPreventiveAction(): void {
    if(!this.hasPreventiveAction()) {
      this.preventiveAction = [] as AdverseEventPreventiveActionComponent[];
    }
  }

  /**
   * @returns the `mitigatingAction` property value as a AdverseEventMitigatingActionComponent array
   */
  public getMitigatingAction(): AdverseEventMitigatingActionComponent[] {
    return this.mitigatingAction ?? ([] as AdverseEventMitigatingActionComponent[]);
  }

  /**
   * Assigns the provided AdverseEventMitigatingActionComponent array value to the `mitigatingAction` property.
   *
   * @param value - the `mitigatingAction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMitigatingAction(value: AdverseEventMitigatingActionComponent[] | undefined): this {
    if (isDefinedList<AdverseEventMitigatingActionComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.mitigatingAction; Provided value array has an element that is not an instance of AdverseEventMitigatingActionComponent.`;
      assertFhirTypeList<AdverseEventMitigatingActionComponent>(value, AdverseEventMitigatingActionComponent, optErrMsg);
      this.mitigatingAction = value;
    } else {
      this.mitigatingAction = undefined;
    }
    return this;
  }

  /**
   * Add the provided AdverseEventMitigatingActionComponent value to the `mitigatingAction` array property.
   *
   * @param value - the `mitigatingAction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMitigatingAction(value: AdverseEventMitigatingActionComponent | undefined): this {
    if (isDefined<AdverseEventMitigatingActionComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.mitigatingAction; Provided element is not an instance of AdverseEventMitigatingActionComponent.`;
      assertFhirType<AdverseEventMitigatingActionComponent>(value, AdverseEventMitigatingActionComponent, optErrMsg);
      this.initMitigatingAction();
      this.mitigatingAction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `mitigatingAction` property exists and has a value; `false` otherwise
   */
  public hasMitigatingAction(): boolean {
    return isDefinedList<AdverseEventMitigatingActionComponent>(this.mitigatingAction) && this.mitigatingAction.some((item: AdverseEventMitigatingActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `mitigatingAction` property
   */
  private initMitigatingAction(): void {
    if(!this.hasMitigatingAction()) {
      this.mitigatingAction = [] as AdverseEventMitigatingActionComponent[];
    }
  }

  /**
   * @returns the `supportingInfo` property value as a AdverseEventSupportingInfoComponent array
   */
  public getSupportingInfo(): AdverseEventSupportingInfoComponent[] {
    return this.supportingInfo ?? ([] as AdverseEventSupportingInfoComponent[]);
  }

  /**
   * Assigns the provided AdverseEventSupportingInfoComponent array value to the `supportingInfo` property.
   *
   * @param value - the `supportingInfo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSupportingInfo(value: AdverseEventSupportingInfoComponent[] | undefined): this {
    if (isDefinedList<AdverseEventSupportingInfoComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.supportingInfo; Provided value array has an element that is not an instance of AdverseEventSupportingInfoComponent.`;
      assertFhirTypeList<AdverseEventSupportingInfoComponent>(value, AdverseEventSupportingInfoComponent, optErrMsg);
      this.supportingInfo = value;
    } else {
      this.supportingInfo = undefined;
    }
    return this;
  }

  /**
   * Add the provided AdverseEventSupportingInfoComponent value to the `supportingInfo` array property.
   *
   * @param value - the `supportingInfo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSupportingInfo(value: AdverseEventSupportingInfoComponent | undefined): this {
    if (isDefined<AdverseEventSupportingInfoComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.supportingInfo; Provided element is not an instance of AdverseEventSupportingInfoComponent.`;
      assertFhirType<AdverseEventSupportingInfoComponent>(value, AdverseEventSupportingInfoComponent, optErrMsg);
      this.initSupportingInfo();
      this.supportingInfo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInfo` property exists and has a value; `false` otherwise
   */
  public hasSupportingInfo(): boolean {
    return isDefinedList<AdverseEventSupportingInfoComponent>(this.supportingInfo) && this.supportingInfo.some((item: AdverseEventSupportingInfoComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `supportingInfo` property
   */
  private initSupportingInfo(): void {
    if(!this.hasSupportingInfo()) {
      this.supportingInfo = [] as AdverseEventSupportingInfoComponent[];
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
      const optErrMsg = `Invalid AdverseEvent.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid AdverseEvent.note; Provided element is not an instance of Annotation.`;
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
    return 'AdverseEvent';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.actuality,
      this.category,
      this.code,
      this.subject,
      this.encounter,
      this.occurrence,
      this.detected,
      this.recordedDate,
      this.resultingEffect,
      this.location,
      this.seriousness,
      this.outcome,
      this.recorder,
      this.participant,
      this.study,
      this.expectedInResearchStudy,
      this.suspectEntity,
      this.contributingFactor,
      this.preventiveAction,
      this.mitigatingAction,
      this.supportingInfo,
      this.note,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.actuality, this.subject, 
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
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.actuality = this.actuality ? this.actuality.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.code = this.code?.copy();
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.occurrence = this.occurrence?.copy() as IDataType;
    dest.detected = this.detected?.copy();
    dest.recordedDate = this.recordedDate?.copy();
    const resultingEffectList = copyListValues<Reference>(this.resultingEffect);
    dest.resultingEffect = resultingEffectList.length === 0 ? undefined : resultingEffectList;
    dest.location = this.location?.copy();
    dest.seriousness = this.seriousness?.copy();
    const outcomeList = copyListValues<CodeableConcept>(this.outcome);
    dest.outcome = outcomeList.length === 0 ? undefined : outcomeList;
    dest.recorder = this.recorder?.copy();
    const participantList = copyListValues<AdverseEventParticipantComponent>(this.participant);
    dest.participant = participantList.length === 0 ? undefined : participantList;
    const studyList = copyListValues<Reference>(this.study);
    dest.study = studyList.length === 0 ? undefined : studyList;
    dest.expectedInResearchStudy = this.expectedInResearchStudy?.copy();
    const suspectEntityList = copyListValues<AdverseEventSuspectEntityComponent>(this.suspectEntity);
    dest.suspectEntity = suspectEntityList.length === 0 ? undefined : suspectEntityList;
    const contributingFactorList = copyListValues<AdverseEventContributingFactorComponent>(this.contributingFactor);
    dest.contributingFactor = contributingFactorList.length === 0 ? undefined : contributingFactorList;
    const preventiveActionList = copyListValues<AdverseEventPreventiveActionComponent>(this.preventiveAction);
    dest.preventiveAction = preventiveActionList.length === 0 ? undefined : preventiveActionList;
    const mitigatingActionList = copyListValues<AdverseEventMitigatingActionComponent>(this.mitigatingAction);
    dest.mitigatingAction = mitigatingActionList.length === 0 ? undefined : mitigatingActionList;
    const supportingInfoList = copyListValues<AdverseEventSupportingInfoComponent>(this.supportingInfo);
    dest.supportingInfo = supportingInfoList.length === 0 ? undefined : supportingInfoList;
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

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasActualityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getActualityElement()!, 'actuality', jsonObj);
    } else {
      jsonObj['actuality'] = null;
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    } else {
      jsonObj['subject'] = null;
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasOccurrence()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOccurrence()!, 'occurrence', jsonObj);
    }

    if (this.hasDetectedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDetectedElement(), 'detected', jsonObj);
    }

    if (this.hasRecordedDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getRecordedDateElement(), 'recordedDate', jsonObj);
    }

    if (this.hasResultingEffect()) {
      setFhirComplexListJson(this.getResultingEffect(), 'resultingEffect', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasSeriousness()) {
      setFhirComplexJson(this.getSeriousness(), 'seriousness', jsonObj);
    }

    if (this.hasOutcome()) {
      setFhirComplexListJson(this.getOutcome(), 'outcome', jsonObj);
    }

    if (this.hasRecorder()) {
      setFhirComplexJson(this.getRecorder(), 'recorder', jsonObj);
    }

    if (this.hasParticipant()) {
      setFhirBackboneElementListJson(this.getParticipant(), 'participant', jsonObj);
    }

    if (this.hasStudy()) {
      setFhirComplexListJson(this.getStudy(), 'study', jsonObj);
    }

    if (this.hasExpectedInResearchStudyElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExpectedInResearchStudyElement(), 'expectedInResearchStudy', jsonObj);
    }

    if (this.hasSuspectEntity()) {
      setFhirBackboneElementListJson(this.getSuspectEntity(), 'suspectEntity', jsonObj);
    }

    if (this.hasContributingFactor()) {
      setFhirBackboneElementListJson(this.getContributingFactor(), 'contributingFactor', jsonObj);
    }

    if (this.hasPreventiveAction()) {
      setFhirBackboneElementListJson(this.getPreventiveAction(), 'preventiveAction', jsonObj);
    }

    if (this.hasMitigatingAction()) {
      setFhirBackboneElementListJson(this.getMitigatingAction(), 'mitigatingAction', jsonObj);
    }

    if (this.hasSupportingInfo()) {
      setFhirBackboneElementListJson(this.getSupportingInfo(), 'supportingInfo', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * AdverseEventParticipantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who was involved in the adverse event or the potential adverse event and what they did
 * - **Definition:** Indicates who or what participated in the adverse event and how they were involved.
 *
 * @category Data Models: Resource
 * @see [FHIR AdverseEvent](http://hl7.org/fhir/StructureDefinition/AdverseEvent)
 */
export class AdverseEventParticipantComponent extends BackboneElement implements IBackboneElement {
  constructor(actor: Reference | null = null) {
    super();

    this.actor = null;
    if (isDefined<Reference>(actor)) {
      this.setActor(actor);
    }
  }

  /**
   * Parse the provided `AdverseEventParticipantComponent` JSON to instantiate the AdverseEventParticipantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AdverseEventParticipantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AdverseEventParticipantComponent
   * @returns AdverseEventParticipantComponent data model or undefined for `AdverseEventParticipantComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AdverseEventParticipantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AdverseEventParticipantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AdverseEventParticipantComponent();

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
   * AdverseEvent.participant.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of involvement
   * - **Definition:** Distinguishes the type of involvement of the actor in the adverse event, such as contributor or informant.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private function_?: CodeableConcept | undefined;

  /**
   * AdverseEvent.participant.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who was involved in the adverse event or the potential adverse event
   * - **Definition:** Indicates who or what participated in the event.
   * - **Comment:** For example, the physician prescribing a drug, a nurse administering the drug, a device that administered the drug, a witness to the event, or an informant of clinical history.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/ResearchSubject',
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
      const optErrMsg = `Invalid AdverseEvent.participant.function; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('AdverseEvent.participant.actor', ['Practitioner','PractitionerRole','Organization','CareTeam','Patient','Device','RelatedPerson','ResearchSubject',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.participant.actor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'CareTeam',
  
    'Patient',
  
    'Device',
  
    'RelatedPerson',
  
    'ResearchSubject',
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
    return 'AdverseEvent.participant';
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
  public override copy(): AdverseEventParticipantComponent {
    const dest = new AdverseEventParticipantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AdverseEventParticipantComponent): void {
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
    } else {
      jsonObj['actor'] = null;
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
  constructor(instance_: IDataType | null = null) {
    super();

    this.instance_ = null;
    if (isDefined<IDataType>(instance_)) {
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

    const classMetadata: DecoratorMetadataObject | null = AdverseEventSuspectEntityComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for AdverseEventSuspectEntityComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'instance[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const instance_: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (instance_ === undefined) {
      instance.setInstance(null);
    } else {
      instance.setInstance(instance_);
    }

    fieldName = 'causality';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: AdverseEventSuspectEntityCausalityComponent | undefined = AdverseEventSuspectEntityCausalityComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCausality(component);
    }

    return instance;
  }

  /**
   * AdverseEvent.suspectEntity.instance[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('AdverseEvent.suspectEntity.instance[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Refers to the specific entity that caused the adverse event
   * - **Definition:** Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('AdverseEvent.suspectEntity.instance[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private instance_: IDataType | null;

  /**
   * AdverseEvent.suspectEntity.causality Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information on the possible cause of the event
   * - **Definition:** Information on the possible cause of the event.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private causality?: AdverseEventSuspectEntityCausalityComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `instance_` property value as a DataType object; else null
   */
  public getInstance(): IDataType | null {
    return this.instance_;
  }

  /**
   * Assigns the provided DataType object value to the `instance_` property.
   *
   * @decorator `@ChoiceDataTypes('AdverseEvent.suspectEntity.instance[x]')`
   *
   * @param value - the `instance_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('AdverseEvent.suspectEntity.instance[x]')
  public setInstance(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.instance_) && !this.instance_.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `instance_` property value as a CodeableConcept object if defined; else null
   */
  public getInstanceCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.instance_)) {
      return null;
    }
    if (!(this.instance_ instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdverseEvent.suspectEntity.instance[x]: Expected CodeableConcept but encountered ${this.instance_.fhirType()}`,
      );
    }
    return this.instance_;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasInstanceCodeableConcept(): boolean {
    return this.hasInstance() && this.instance_ instanceof CodeableConcept;
  }

  /**
   * @returns the `instance_` property value as a Reference object if defined; else null
   */
  public getInstanceReference(): Reference | null {
    if (!isDefined<IDataType>(this.instance_)) {
      return null;
    }
    if (!(this.instance_ instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdverseEvent.suspectEntity.instance[x]: Expected Reference but encountered ${this.instance_.fhirType()}`,
      );
    }
    return this.instance_;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasInstanceReference(): boolean {
    return this.hasInstance() && this.instance_ instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `causality` property value as a AdverseEventSuspectEntityCausalityComponent object if defined; else an empty AdverseEventSuspectEntityCausalityComponent object
   */
  public getCausality(): AdverseEventSuspectEntityCausalityComponent {
    return this.causality ?? new AdverseEventSuspectEntityCausalityComponent();
  }

  /**
   * Assigns the provided Causality object value to the `causality` property.
   *
   * @param value - the `causality` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCausality(value: AdverseEventSuspectEntityCausalityComponent | undefined): this {
    if (isDefined<AdverseEventSuspectEntityCausalityComponent>(value)) {
      const optErrMsg = `Invalid AdverseEvent.suspectEntity.causality; Provided element is not an instance of AdverseEventSuspectEntityCausalityComponent.`;
      assertFhirType<AdverseEventSuspectEntityCausalityComponent>(value, AdverseEventSuspectEntityCausalityComponent, optErrMsg);
      this.causality = value;
    } else {
      this.causality = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `causality` property exists and has a value; `false` otherwise
   */
  public hasCausality(): boolean {
    return isDefined<AdverseEventSuspectEntityCausalityComponent>(this.causality) && !this.causality.isEmpty();
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
    dest.instance_ = this.instance_ ? this.instance_.copy() as IDataType : null;
    dest.causality = this.causality?.copy();
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getInstance()!, 'instance', jsonObj);
    } else {
      jsonObj['instance'] = null;
    }

    if (this.hasCausality()) {
      setFhirBackboneElementJson(this.getCausality(), 'causality', jsonObj);
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

    fieldName = 'assessmentMethod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAssessmentMethod(datatype);
    }

    fieldName = 'entityRelatedness';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEntityRelatedness(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
    }

    return instance;
  }

  /**
   * AdverseEvent.suspectEntity.causality.assessmentMethod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Method of evaluating the relatedness of the suspected entity to the event
   * - **Definition:** The method of evaluating the relatedness of the suspected entity to the event.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private assessmentMethod?: CodeableConcept | undefined;

  /**
   * AdverseEvent.suspectEntity.causality.entityRelatedness Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Result of the assessment regarding the relatedness of the suspected entity to the event
   * - **Definition:** The result of the assessment regarding the relatedness of the suspected entity to the event.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private entityRelatedness?: CodeableConcept | undefined;

  /**
   * AdverseEvent.suspectEntity.causality.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Author of the information on the possible cause of the event
   * - **Definition:** The author of the information on the possible cause of the event.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/ResearchSubject',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `assessmentMethod` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAssessmentMethod(): CodeableConcept {
    return this.assessmentMethod ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AssessmentMethod object value to the `assessmentMethod` property.
   *
   * @param value - the `assessmentMethod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAssessmentMethod(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdverseEvent.suspectEntity.causality.assessmentMethod; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.assessmentMethod = value;
    } else {
      this.assessmentMethod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assessmentMethod` property exists and has a value; `false` otherwise
   */
  public hasAssessmentMethod(): boolean {
    return isDefined<CodeableConcept>(this.assessmentMethod) && !this.assessmentMethod.isEmpty();
  }

  /**
   * @returns the `entityRelatedness` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getEntityRelatedness(): CodeableConcept {
    return this.entityRelatedness ?? new CodeableConcept();
  }

  /**
   * Assigns the provided EntityRelatedness object value to the `entityRelatedness` property.
   *
   * @param value - the `entityRelatedness` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEntityRelatedness(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AdverseEvent.suspectEntity.causality.entityRelatedness; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.entityRelatedness = value;
    } else {
      this.entityRelatedness = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `entityRelatedness` property exists and has a value; `false` otherwise
   */
  public hasEntityRelatedness(): boolean {
    return isDefined<CodeableConcept>(this.entityRelatedness) && !this.entityRelatedness.isEmpty();
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
   * @decorator `@ReferenceTargets('AdverseEvent.suspectEntity.causality.author', ['Practitioner','PractitionerRole','Patient','RelatedPerson','ResearchSubject',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AdverseEvent.suspectEntity.causality.author', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Patient',
  
    'RelatedPerson',
  
    'ResearchSubject',
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
      this.assessmentMethod,
      this.entityRelatedness,
      this.author,
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
    dest.assessmentMethod = this.assessmentMethod?.copy();
    dest.entityRelatedness = this.entityRelatedness?.copy();
    dest.author = this.author?.copy();
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

    if (this.hasAssessmentMethod()) {
      setFhirComplexJson(this.getAssessmentMethod(), 'assessmentMethod', jsonObj);
    }

    if (this.hasEntityRelatedness()) {
      setFhirComplexJson(this.getEntityRelatedness(), 'entityRelatedness', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * AdverseEventContributingFactorComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Contributing factors suspected to have increased the probability or severity of the adverse event
 * - **Definition:** The contributing factors suspected to have increased the probability or severity of the adverse event.
 *
 * @category Data Models: Resource
 * @see [FHIR AdverseEvent](http://hl7.org/fhir/StructureDefinition/AdverseEvent)
 */
export class AdverseEventContributingFactorComponent extends BackboneElement implements IBackboneElement {
  constructor(item: IDataType | null = null) {
    super();

    this.item = null;
    if (isDefined<IDataType>(item)) {
      this.setItem(item);
    }

  }

  /**
   * Parse the provided `AdverseEventContributingFactorComponent` JSON to instantiate the AdverseEventContributingFactorComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AdverseEventContributingFactorComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AdverseEventContributingFactorComponent
   * @returns AdverseEventContributingFactorComponent data model or undefined for `AdverseEventContributingFactorComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AdverseEventContributingFactorComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AdverseEventContributingFactorComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AdverseEventContributingFactorComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = AdverseEventContributingFactorComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for AdverseEventContributingFactorComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'item[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const item: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (item === undefined) {
      instance.setItem(null);
    } else {
      instance.setItem(item);
    }

    return instance;
  }

  /**
   * AdverseEvent.contributingFactor.item[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('AdverseEvent.contributingFactor.item[x]', ['Reference','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Item suspected to have increased the probability or severity of the adverse event
   * - **Definition:** The item that is suspected to have increased the probability or severity of the adverse event.
   * - **FHIR Types:**
   *     'Reference',
   *     'CodeableConcept',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('AdverseEvent.contributingFactor.item[x]',[
    'Reference',
    'CodeableConcept',
  ])
  private item: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `item` property value as a DataType object; else null
   */
  public getItem(): IDataType | null {
    return this.item;
  }

  /**
   * Assigns the provided DataType object value to the `item` property.
   *
   * @decorator `@ChoiceDataTypes('AdverseEvent.contributingFactor.item[x]')`
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('AdverseEvent.contributingFactor.item[x]')
  public setItem(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.item = value;
    } else {
      this.item = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefined<IDataType>(this.item) && !this.item.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `item` property value as a Reference object if defined; else null
   */
  public getItemReference(): Reference | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdverseEvent.contributingFactor.item[x]: Expected Reference but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasItemReference(): boolean {
    return this.hasItem() && this.item instanceof Reference;
  }

  /**
   * @returns the `item` property value as a CodeableConcept object if defined; else null
   */
  public getItemCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdverseEvent.contributingFactor.item[x]: Expected CodeableConcept but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasItemCodeableConcept(): boolean {
    return this.hasItem() && this.item instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AdverseEvent.contributingFactor';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.item,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.item, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AdverseEventContributingFactorComponent {
    const dest = new AdverseEventContributingFactorComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AdverseEventContributingFactorComponent): void {
    super.copyValues(dest);
    dest.item = this.item ? this.item.copy() as IDataType : null;
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

    if (this.hasItem()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getItem()!, 'item', jsonObj);
    } else {
      jsonObj['item'] = null;
    }

    return jsonObj;
  }
}
/**
 * AdverseEventPreventiveActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Preventive actions that contributed to avoiding the adverse event
 * - **Definition:** Preventive actions that contributed to avoiding the adverse event.
 *
 * @category Data Models: Resource
 * @see [FHIR AdverseEvent](http://hl7.org/fhir/StructureDefinition/AdverseEvent)
 */
export class AdverseEventPreventiveActionComponent extends BackboneElement implements IBackboneElement {
  constructor(item: IDataType | null = null) {
    super();

    this.item = null;
    if (isDefined<IDataType>(item)) {
      this.setItem(item);
    }

  }

  /**
   * Parse the provided `AdverseEventPreventiveActionComponent` JSON to instantiate the AdverseEventPreventiveActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AdverseEventPreventiveActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AdverseEventPreventiveActionComponent
   * @returns AdverseEventPreventiveActionComponent data model or undefined for `AdverseEventPreventiveActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AdverseEventPreventiveActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AdverseEventPreventiveActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AdverseEventPreventiveActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = AdverseEventPreventiveActionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for AdverseEventPreventiveActionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'item[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const item: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (item === undefined) {
      instance.setItem(null);
    } else {
      instance.setItem(item);
    }

    return instance;
  }

  /**
   * AdverseEvent.preventiveAction.item[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('AdverseEvent.preventiveAction.item[x]', ['Reference','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Action that contributed to avoiding the adverse event
   * - **Definition:** The action that contributed to avoiding the adverse event.
   * - **FHIR Types:**
   *     'Reference',
   *     'CodeableConcept',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('AdverseEvent.preventiveAction.item[x]',[
    'Reference',
    'CodeableConcept',
  ])
  private item: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `item` property value as a DataType object; else null
   */
  public getItem(): IDataType | null {
    return this.item;
  }

  /**
   * Assigns the provided DataType object value to the `item` property.
   *
   * @decorator `@ChoiceDataTypes('AdverseEvent.preventiveAction.item[x]')`
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('AdverseEvent.preventiveAction.item[x]')
  public setItem(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.item = value;
    } else {
      this.item = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefined<IDataType>(this.item) && !this.item.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `item` property value as a Reference object if defined; else null
   */
  public getItemReference(): Reference | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdverseEvent.preventiveAction.item[x]: Expected Reference but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasItemReference(): boolean {
    return this.hasItem() && this.item instanceof Reference;
  }

  /**
   * @returns the `item` property value as a CodeableConcept object if defined; else null
   */
  public getItemCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdverseEvent.preventiveAction.item[x]: Expected CodeableConcept but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasItemCodeableConcept(): boolean {
    return this.hasItem() && this.item instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AdverseEvent.preventiveAction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.item,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.item, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AdverseEventPreventiveActionComponent {
    const dest = new AdverseEventPreventiveActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AdverseEventPreventiveActionComponent): void {
    super.copyValues(dest);
    dest.item = this.item ? this.item.copy() as IDataType : null;
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

    if (this.hasItem()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getItem()!, 'item', jsonObj);
    } else {
      jsonObj['item'] = null;
    }

    return jsonObj;
  }
}
/**
 * AdverseEventMitigatingActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm
 * - **Definition:** The ameliorating action taken after the adverse event occured in order to reduce the extent of harm.
 *
 * @category Data Models: Resource
 * @see [FHIR AdverseEvent](http://hl7.org/fhir/StructureDefinition/AdverseEvent)
 */
export class AdverseEventMitigatingActionComponent extends BackboneElement implements IBackboneElement {
  constructor(item: IDataType | null = null) {
    super();

    this.item = null;
    if (isDefined<IDataType>(item)) {
      this.setItem(item);
    }

  }

  /**
   * Parse the provided `AdverseEventMitigatingActionComponent` JSON to instantiate the AdverseEventMitigatingActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AdverseEventMitigatingActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AdverseEventMitigatingActionComponent
   * @returns AdverseEventMitigatingActionComponent data model or undefined for `AdverseEventMitigatingActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AdverseEventMitigatingActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AdverseEventMitigatingActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AdverseEventMitigatingActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = AdverseEventMitigatingActionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for AdverseEventMitigatingActionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'item[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const item: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (item === undefined) {
      instance.setItem(null);
    } else {
      instance.setItem(item);
    }

    return instance;
  }

  /**
   * AdverseEvent.mitigatingAction.item[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('AdverseEvent.mitigatingAction.item[x]', ['Reference','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Ameliorating action taken after the adverse event occured in order to reduce the extent of harm
   * - **Definition:** The ameliorating action taken after the adverse event occured in order to reduce the extent of harm.
   * - **FHIR Types:**
   *     'Reference',
   *     'CodeableConcept',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('AdverseEvent.mitigatingAction.item[x]',[
    'Reference',
    'CodeableConcept',
  ])
  private item: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `item` property value as a DataType object; else null
   */
  public getItem(): IDataType | null {
    return this.item;
  }

  /**
   * Assigns the provided DataType object value to the `item` property.
   *
   * @decorator `@ChoiceDataTypes('AdverseEvent.mitigatingAction.item[x]')`
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('AdverseEvent.mitigatingAction.item[x]')
  public setItem(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.item = value;
    } else {
      this.item = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefined<IDataType>(this.item) && !this.item.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `item` property value as a Reference object if defined; else null
   */
  public getItemReference(): Reference | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdverseEvent.mitigatingAction.item[x]: Expected Reference but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasItemReference(): boolean {
    return this.hasItem() && this.item instanceof Reference;
  }

  /**
   * @returns the `item` property value as a CodeableConcept object if defined; else null
   */
  public getItemCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdverseEvent.mitigatingAction.item[x]: Expected CodeableConcept but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasItemCodeableConcept(): boolean {
    return this.hasItem() && this.item instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AdverseEvent.mitigatingAction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.item,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.item, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AdverseEventMitigatingActionComponent {
    const dest = new AdverseEventMitigatingActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AdverseEventMitigatingActionComponent): void {
    super.copyValues(dest);
    dest.item = this.item ? this.item.copy() as IDataType : null;
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

    if (this.hasItem()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getItem()!, 'item', jsonObj);
    } else {
      jsonObj['item'] = null;
    }

    return jsonObj;
  }
}
/**
 * AdverseEventSupportingInfoComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Supporting information relevant to the event
 * - **Definition:** Supporting information relevant to the event.
 *
 * @category Data Models: Resource
 * @see [FHIR AdverseEvent](http://hl7.org/fhir/StructureDefinition/AdverseEvent)
 */
export class AdverseEventSupportingInfoComponent extends BackboneElement implements IBackboneElement {
  constructor(item: IDataType | null = null) {
    super();

    this.item = null;
    if (isDefined<IDataType>(item)) {
      this.setItem(item);
    }

  }

  /**
   * Parse the provided `AdverseEventSupportingInfoComponent` JSON to instantiate the AdverseEventSupportingInfoComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AdverseEventSupportingInfoComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AdverseEventSupportingInfoComponent
   * @returns AdverseEventSupportingInfoComponent data model or undefined for `AdverseEventSupportingInfoComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AdverseEventSupportingInfoComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AdverseEventSupportingInfoComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AdverseEventSupportingInfoComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = AdverseEventSupportingInfoComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for AdverseEventSupportingInfoComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'item[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const item: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (item === undefined) {
      instance.setItem(null);
    } else {
      instance.setItem(item);
    }

    return instance;
  }

  /**
   * AdverseEvent.supportingInfo.item[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('AdverseEvent.supportingInfo.item[x]', ['Reference','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subject medical history or document relevant to this adverse event
   * - **Definition:** Relevant past history for the subject. In a clinical care context, an example being a patient had an adverse event following a pencillin administration and the patient had a previously documented penicillin allergy. In a clinical trials context, an example is a bunion or rash that was present prior to the study. Additionally, the supporting item can be a document that is relevant to this instance of the adverse event that is not part of the subject\'s medical history. For example, a clinical note, staff list, or material safety data sheet (MSDS).  Supporting information is not a contributing factor, preventive action, or mitigating action.
   * - **FHIR Types:**
   *     'Reference',
   *     'CodeableConcept',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('AdverseEvent.supportingInfo.item[x]',[
    'Reference',
    'CodeableConcept',
  ])
  private item: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `item` property value as a DataType object; else null
   */
  public getItem(): IDataType | null {
    return this.item;
  }

  /**
   * Assigns the provided DataType object value to the `item` property.
   *
   * @decorator `@ChoiceDataTypes('AdverseEvent.supportingInfo.item[x]')`
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('AdverseEvent.supportingInfo.item[x]')
  public setItem(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.item = value;
    } else {
      this.item = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefined<IDataType>(this.item) && !this.item.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `item` property value as a Reference object if defined; else null
   */
  public getItemReference(): Reference | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdverseEvent.supportingInfo.item[x]: Expected Reference but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasItemReference(): boolean {
    return this.hasItem() && this.item instanceof Reference;
  }

  /**
   * @returns the `item` property value as a CodeableConcept object if defined; else null
   */
  public getItemCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for AdverseEvent.supportingInfo.item[x]: Expected CodeableConcept but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasItemCodeableConcept(): boolean {
    return this.hasItem() && this.item instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AdverseEvent.supportingInfo';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.item,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.item, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AdverseEventSupportingInfoComponent {
    const dest = new AdverseEventSupportingInfoComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AdverseEventSupportingInfoComponent): void {
    super.copyValues(dest);
    dest.item = this.item ? this.item.copy() as IDataType : null;
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

    if (this.hasItem()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getItem()!, 'item', jsonObj);
    } else {
      jsonObj['item'] = null;
    }

    return jsonObj;
  }
}
