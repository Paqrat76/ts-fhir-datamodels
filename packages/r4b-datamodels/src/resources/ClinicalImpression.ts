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
 * ClinicalImpression Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ClinicalImpression
 * StructureDefinition.name: ClinicalImpression
 * StructureDefinition.description: A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient\'s condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  InvalidTypeError,
  JSON,
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
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
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { EventStatusEnum } from '../code-systems/EventStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ClinicalImpression Class
 *
 * @remarks
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient\'s condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 *
 * **FHIR Specification**
 * - **Short:** A clinical assessment performed when planning treatments and management strategies for a patient
 * - **Definition:** A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient\'s condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR ClinicalImpression](http://hl7.org/fhir/StructureDefinition/ClinicalImpression)
 */
export class ClinicalImpression extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, subject: Reference | null = null) {
    super();

    this.eventStatusEnum = new EventStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<EventStatusEnum>(
      status,
      EventStatusEnum,
      this.eventStatusEnum,
      'ClinicalImpression.status',
    );

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }
  }

  /**
   * Parse the provided `ClinicalImpression` JSON to instantiate the ClinicalImpression data model.
   *
   * @param sourceJson - JSON representing FHIR `ClinicalImpression`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClinicalImpression
   * @returns ClinicalImpression data model or undefined for `ClinicalImpression`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ClinicalImpression | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClinicalImpression';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClinicalImpression();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ClinicalImpression');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ClinicalImpression[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ClinicalImpression`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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
    primitiveJsonType = 'string';
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

    fieldName = 'statusReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatusReason(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSubject(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'effective[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const effective: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setEffective(effective);

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'assessor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAssessor(datatype);
    }

    fieldName = 'previous';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPrevious(datatype);
    }

    fieldName = 'problem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addProblem(datatype);
        }
      });
  }

    fieldName = 'investigation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClinicalImpressionInvestigationComponent | undefined = ClinicalImpressionInvestigationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addInvestigation(component);
        }
      });
    }

    fieldName = 'protocol';
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
          instance.addProtocolElement(datatype);
        }
      });
    }

    fieldName = 'summary';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSummaryElement(datatype);
    }

    fieldName = 'finding';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ClinicalImpressionFindingComponent | undefined = ClinicalImpressionFindingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addFinding(component);
        }
      });
    }

    fieldName = 'prognosisCodeableConcept';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPrognosisCodeableConcept(datatype);
        }
      });
    }

    fieldName = 'prognosisReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPrognosisReference(datatype);
        }
      });
  }

    fieldName = 'supportingInfo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSupportingInfo(datatype);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ClinicalImpression.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier
   * - **Definition:** Business identifiers assigned to this clinical impression by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier (see [discussion](https://hl7.org/fhir/resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   * - **Requirements:** Allows identification of the clinical impression as it is known by various participating systems and in a way that remains consistent across servers.
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
   * ClinicalImpression.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** in-progress | completed | entered-in-error
   * - **Definition:** Identifies the workflow status of the assessment.
   * - **Comment:** This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * ClinicalImpression.statusReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for current status
   * - **Definition:** Captures the reason for the current state of the ClinicalImpression.
   * - **Comment:** This is generally only used for "exception" statuses such as "not-done", "suspended" or "cancelled". [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusReason?: CodeableConcept | undefined;

  /**
   * ClinicalImpression.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of assessment performed
   * - **Definition:** Categorizes the type of clinical assessment performed.
   * - **Comment:** This is present as a place-holder only and may be removed based on feedback/work group opinion.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * ClinicalImpression.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why/how the assessment was performed
   * - **Definition:** A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * ClinicalImpression.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient or group assessed
   * - **Definition:** The patient or group of individuals assessed as part of this record.
   * - **Requirements:** Group is typically for veterinary and/or public health purposes.
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
   * ClinicalImpression.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter created as part of
   * - **Definition:** The Encounter during which this ClinicalImpression was created or to which the creation of this record is tightly associated.
   * - **Comment:** This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
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
   * ClinicalImpression.effective[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ClinicalImpression.effective[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time of assessment
   * - **Definition:** The point in time or period over which the subject was assessed.
   * - **Comment:** This SHOULD be accurate to at least the minute, though some assessments only have a known date.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('ClinicalImpression.effective[x]',[
    'dateTime',
    'Period',
  ])
  private effective?: IDataType | undefined;

  /**
   * ClinicalImpression.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the assessment was documented
   * - **Definition:** Indicates when the documentation of the assessment was complete.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * ClinicalImpression.assessor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The clinician performing the assessment
   * - **Definition:** The clinician performing the assessment.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private assessor?: Reference | undefined;

  /**
   * ClinicalImpression.previous Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to last assessment
   * - **Definition:** A reference to the last assessment that was conducted on this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient\'s conditions changes.
   * - **Comment:** It is always likely that multiple previous assessments exist for a patient. The point of quoting a previous assessment is that this assessment is relative to it (see resolved).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ClinicalImpression',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private previous?: Reference | undefined;

  /**
   * ClinicalImpression.problem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relevant impressions of patient state
   * - **Definition:** A list of the relevant problems/conditions for a patient.
   * - **Comment:** e.g. The patient is a pregnant, has congestive heart failure, has an ‎Adenocarcinoma, and is allergic to penicillin.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/AllergyIntolerance',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private problem?: Reference[] | undefined;

  /**
   * ClinicalImpression.investigation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** One or more sets of investigations (signs, symptoms, etc.)
   * - **Definition:** One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private investigation?: ClinicalImpressionInvestigationComponent[] | undefined;

  /**
   * ClinicalImpression.protocol Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Clinical Protocol followed
   * - **Definition:** Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private protocol?: UriType[] | undefined;

  /**
   * ClinicalImpression.summary Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Summary of the assessment
   * - **Definition:** A text summary of the investigations and the diagnosis.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private summary?: StringType | undefined;

  /**
   * ClinicalImpression.finding Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Possible or likely findings and diagnoses
   * - **Definition:** Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private finding?: ClinicalImpressionFindingComponent[] | undefined;

  /**
   * ClinicalImpression.prognosisCodeableConcept Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Estimate of likely outcome
   * - **Definition:** Estimate of likely outcome.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private prognosisCodeableConcept?: CodeableConcept[] | undefined;

  /**
   * ClinicalImpression.prognosisReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** RiskAssessment expressing likely outcome
   * - **Definition:** RiskAssessment expressing likely outcome.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/RiskAssessment',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private prognosisReference?: Reference[] | undefined;

  /**
   * ClinicalImpression.supportingInfo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information supporting the clinical impression
   * - **Definition:** Information supporting the clinical impression.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private supportingInfo?: Reference[] | undefined;

  /**
   * ClinicalImpression.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments made about the ClinicalImpression
   * - **Definition:** Commentary about the impression, typically recorded after the impression itself was made, though supplemental notes by the original author could also appear.
   * - **Comment:** Don\'t use this element for content that should more properly appear as one of the specific elements of the impression.
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
      const optErrMsg = `Invalid ClinicalImpression.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ClinicalImpression.identifier; Provided element is not an instance of Identifier.`;
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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `ClinicalImpression.status is required`);
    const errMsgPrefix = `Invalid ClinicalImpression.status`;
    assertEnumCodeType<EventStatusEnum>(enumType, EventStatusEnum, errMsgPrefix);
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
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `ClinicalImpression.status is required`);
    const optErrMsg = `Invalid ClinicalImpression.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.eventStatusEnum);
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
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `ClinicalImpression.status is required`);
    const optErrMsg = `Invalid ClinicalImpression.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.eventStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `statusReason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStatusReason(): CodeableConcept {
    return this.statusReason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided StatusReason object value to the `statusReason` property.
   *
   * @param value - the `statusReason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatusReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClinicalImpression.statusReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.statusReason = value;
    } else {
      this.statusReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusReason` property exists and has a value; `false` otherwise
   */
  public hasStatusReason(): boolean {
    return isDefined<CodeableConcept>(this.statusReason) && !this.statusReason.isEmpty();
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
      const optErrMsg = `Invalid ClinicalImpression.code; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ClinicalImpression.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ClinicalImpression.description (${String(value)})`;
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
   * @returns the `subject` property value as a Reference object if defined; else null
   */
  public getSubject(): Reference | null {
    return this.subject;
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('ClinicalImpression.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalImpression.subject', [
    'Patient',
  
    'Group',
  ])
  public setSubject(value: Reference): this {
    assertIsDefined<Reference>(value, `ClinicalImpression.subject is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.subject = value;
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
   * @decorator `@ReferenceTargets('ClinicalImpression.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalImpression.encounter', [
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
   * @returns the `effective` property value as a DataType object if defined; else undefined
   */
  public getEffective(): IDataType | undefined {
    return this.effective;
  }

  /**
   * Assigns the provided DataType object value to the `effective` property.
   *
   * @decorator `@ChoiceDataTypes('ClinicalImpression.effective[x]')`
   *
   * @param value - the `effective` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ClinicalImpression.effective[x]')
  public setEffective(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.effective = value;
    } else {
      this.effective = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effective` property exists and has a value; `false` otherwise
   */
  public hasEffective(): boolean {
    return isDefined<IDataType>(this.effective) && !this.effective.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `effective` property value as a DateTimeType object if defined; else undefined
   */
  public getEffectiveDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.effective)) {
      return undefined;
    }
    if (!(this.effective instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ClinicalImpression.effective[x]: Expected DateTimeType but encountered ${this.effective.fhirType()}`,
      );
    }
    return this.effective;
  }

  /**
   * @returns `true` if the `effective` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasEffectiveDateTimeType(): boolean {
    return this.hasEffective() && this.effective instanceof DateTimeType;
  }

  /**
   * @returns the `effective` property value as a Period object if defined; else undefined
   */
  public getEffectivePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.effective)) {
      return undefined;
    }
    if (!(this.effective instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for ClinicalImpression.effective[x]: Expected Period but encountered ${this.effective.fhirType()}`,
      );
    }
    return this.effective;
  }

  /**
   * @returns `true` if the `effective` property exists as a Period and has a value; `false` otherwise
   */
  public hasEffectivePeriod(): boolean {
    return this.hasEffective() && this.effective instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid ClinicalImpression.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ClinicalImpression.date (${String(value)})`;
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
   * @returns the `assessor` property value as a Reference object; else an empty Reference object
   */
  public getAssessor(): Reference {
    return this.assessor ?? new Reference();
  }

  /**
   * Assigns the provided Assessor object value to the `assessor` property.
   *
   * @decorator `@ReferenceTargets('ClinicalImpression.assessor', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `assessor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalImpression.assessor', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setAssessor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.assessor = value;
    } else {
      this.assessor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assessor` property exists and has a value; `false` otherwise
   */
  public hasAssessor(): boolean {
    return isDefined<Reference>(this.assessor) && !this.assessor.isEmpty();
  }

  /**
   * @returns the `previous` property value as a Reference object; else an empty Reference object
   */
  public getPrevious(): Reference {
    return this.previous ?? new Reference();
  }

  /**
   * Assigns the provided Previous object value to the `previous` property.
   *
   * @decorator `@ReferenceTargets('ClinicalImpression.previous', ['ClinicalImpression',])`
   *
   * @param value - the `previous` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalImpression.previous', [
    'ClinicalImpression',
  ])
  public setPrevious(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.previous = value;
    } else {
      this.previous = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `previous` property exists and has a value; `false` otherwise
   */
  public hasPrevious(): boolean {
    return isDefined<Reference>(this.previous) && !this.previous.isEmpty();
  }

  /**
   * @returns the `problem` property value as a Reference array
   */
  public getProblem(): Reference[] {
    return this.problem ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `problem` property.
   *
   * @decorator `@ReferenceTargets('ClinicalImpression.problem', ['Condition','AllergyIntolerance',])`
   *
   * @param value - the `problem` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalImpression.problem', [
    'Condition',
  
    'AllergyIntolerance',
  ])
  public setProblem(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.problem = value;
    } else {
      this.problem = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `problem` array property.
   *
   * @decorator `@ReferenceTargets('ClinicalImpression.problem', ['Condition','AllergyIntolerance',])`
   *
   * @param value - the `problem` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalImpression.problem', [
    'Condition',
  
    'AllergyIntolerance',
  ])
  public addProblem(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initProblem();
      this.problem?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `problem` property exists and has a value; `false` otherwise
   */
  public hasProblem(): boolean {
    return isDefinedList<Reference>(this.problem) && this.problem.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `problem` property
   */
  private initProblem(): void {
    if (!this.hasProblem()) {
      this.problem = [] as Reference[];
    }
  }

  /**
   * @returns the `investigation` property value as a ClinicalImpressionInvestigationComponent array
   */
  public getInvestigation(): ClinicalImpressionInvestigationComponent[] {
    return this.investigation ?? ([] as ClinicalImpressionInvestigationComponent[]);
  }

  /**
   * Assigns the provided ClinicalImpressionInvestigationComponent array value to the `investigation` property.
   *
   * @param value - the `investigation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInvestigation(value: ClinicalImpressionInvestigationComponent[] | undefined): this {
    if (isDefinedList<ClinicalImpressionInvestigationComponent>(value)) {
      const optErrMsg = `Invalid ClinicalImpression.investigation; Provided value array has an element that is not an instance of ClinicalImpressionInvestigationComponent.`;
      assertFhirTypeList<ClinicalImpressionInvestigationComponent>(value, ClinicalImpressionInvestigationComponent, optErrMsg);
      this.investigation = value;
    } else {
      this.investigation = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClinicalImpressionInvestigationComponent value to the `investigation` array property.
   *
   * @param value - the `investigation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInvestigation(value: ClinicalImpressionInvestigationComponent | undefined): this {
    if (isDefined<ClinicalImpressionInvestigationComponent>(value)) {
      const optErrMsg = `Invalid ClinicalImpression.investigation; Provided element is not an instance of ClinicalImpressionInvestigationComponent.`;
      assertFhirType<ClinicalImpressionInvestigationComponent>(value, ClinicalImpressionInvestigationComponent, optErrMsg);
      this.initInvestigation();
      this.investigation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `investigation` property exists and has a value; `false` otherwise
   */
  public hasInvestigation(): boolean {
    return isDefinedList<ClinicalImpressionInvestigationComponent>(this.investigation) && this.investigation.some((item: ClinicalImpressionInvestigationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `investigation` property
   */
  private initInvestigation(): void {
    if(!this.hasInvestigation()) {
      this.investigation = [] as ClinicalImpressionInvestigationComponent[];
    }
  }

  /**
   * @returns the `protocol` property value as a UriType array
   */
  public getProtocolElement(): UriType[] {
    return this.protocol ?? ([] as UriType[]);
  }

  /**
   * Assigns the provided UriType array value to the `protocol` property.
   *
   * @param element - the `protocol` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProtocolElement(element: UriType[] | undefined): this {
    if (isDefinedList<UriType>(element)) {
      const optErrMsg = `Invalid ClinicalImpression.protocol; Provided value array has an element that is not an instance of UriType.`;
      assertFhirTypeList<UriType>(element, UriType, optErrMsg);
      this.protocol = element;
    } else {
      this.protocol = undefined;
    }
    return this;
  }

  /**
   * Add the provided UriType value to the `protocol` array property.
   *
   * @param element - the `protocol` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addProtocolElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid ClinicalImpression.protocol; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.initProtocol();
      this.protocol?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `protocol` property exists and has a value; `false` otherwise
   */
  public hasProtocolElement(): boolean {
    return isDefinedList<UriType>(this.protocol) && this.protocol.some((item: UriType) => !item.isEmpty());
  }

  /**
   * @returns the `protocol` property value as a fhirUri array
   */
  public getProtocol(): fhirUri[] {
    this.initProtocol();
    const protocolValues = [] as fhirUri[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.protocol!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        protocolValues.push(value);
      }
    }
    return protocolValues;
  }

  /**
   * Assigns the provided primitive value array to the `protocol` property.
   *
   * @param value - the `protocol` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProtocol(value: fhirUri[] | undefined): this {
    if (isDefinedList<fhirUri>(value)) {
      const protocolElements = [] as UriType[];
      for (const protocolValue of value) {
        const optErrMsg = `Invalid ClinicalImpression.protocol array item (${String(protocolValue)})`;
        const element = new UriType(parseFhirPrimitiveData(protocolValue, fhirUriSchema, optErrMsg));
        protocolElements.push(element);
      }
      this.protocol = protocolElements;
    } else {
      this.protocol = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `protocol` array property.
   *
   * @param value - the `protocol` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addProtocol(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid ClinicalImpression.protocol array item (${String(value)})`;
      const element = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
      this.initProtocol();
      this.addProtocolElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `protocol` property exists and has a value; `false` otherwise
   */
  public hasProtocol(): boolean {
    return this.hasProtocolElement();
  }

  /**
   * Initialize the `protocol` property
   */
  private initProtocol(): void {
    if (!this.hasProtocol()) {
      this.protocol = [] as UriType[];
    }
  }

  /**
   * @returns the `summary` property value as a StringType object if defined; else an empty StringType object
   */
  public getSummaryElement(): StringType {
    return this.summary ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `summary` property.
   *
   * @param element - the `summary` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSummaryElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ClinicalImpression.summary; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.summary = element;
    } else {
      this.summary = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `summary` property exists and has a value; `false` otherwise
   */
  public hasSummaryElement(): boolean {
    return isDefined<StringType>(this.summary) && !this.summary.isEmpty();
  }

  /**
   * @returns the `summary` property value as a fhirString if defined; else undefined
   */
  public getSummary(): fhirString | undefined {
    return this.summary?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `summary` property.
   *
   * @param value - the `summary` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSummary(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ClinicalImpression.summary (${String(value)})`;
      this.summary = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.summary = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `summary` property exists and has a value; `false` otherwise
   */
  public hasSummary(): boolean {
    return this.hasSummaryElement();
  }

  /**
   * @returns the `finding` property value as a ClinicalImpressionFindingComponent array
   */
  public getFinding(): ClinicalImpressionFindingComponent[] {
    return this.finding ?? ([] as ClinicalImpressionFindingComponent[]);
  }

  /**
   * Assigns the provided ClinicalImpressionFindingComponent array value to the `finding` property.
   *
   * @param value - the `finding` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFinding(value: ClinicalImpressionFindingComponent[] | undefined): this {
    if (isDefinedList<ClinicalImpressionFindingComponent>(value)) {
      const optErrMsg = `Invalid ClinicalImpression.finding; Provided value array has an element that is not an instance of ClinicalImpressionFindingComponent.`;
      assertFhirTypeList<ClinicalImpressionFindingComponent>(value, ClinicalImpressionFindingComponent, optErrMsg);
      this.finding = value;
    } else {
      this.finding = undefined;
    }
    return this;
  }

  /**
   * Add the provided ClinicalImpressionFindingComponent value to the `finding` array property.
   *
   * @param value - the `finding` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFinding(value: ClinicalImpressionFindingComponent | undefined): this {
    if (isDefined<ClinicalImpressionFindingComponent>(value)) {
      const optErrMsg = `Invalid ClinicalImpression.finding; Provided element is not an instance of ClinicalImpressionFindingComponent.`;
      assertFhirType<ClinicalImpressionFindingComponent>(value, ClinicalImpressionFindingComponent, optErrMsg);
      this.initFinding();
      this.finding?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `finding` property exists and has a value; `false` otherwise
   */
  public hasFinding(): boolean {
    return isDefinedList<ClinicalImpressionFindingComponent>(this.finding) && this.finding.some((item: ClinicalImpressionFindingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `finding` property
   */
  private initFinding(): void {
    if(!this.hasFinding()) {
      this.finding = [] as ClinicalImpressionFindingComponent[];
    }
  }

  /**
   * @returns the `prognosisCodeableConcept` property value as a CodeableConcept array
   */
  public getPrognosisCodeableConcept(): CodeableConcept[] {
    return this.prognosisCodeableConcept ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `prognosisCodeableConcept` property.
   *
   * @param value - the `prognosisCodeableConcept` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPrognosisCodeableConcept(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClinicalImpression.prognosisCodeableConcept; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.prognosisCodeableConcept = value;
    } else {
      this.prognosisCodeableConcept = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `prognosisCodeableConcept` array property.
   *
   * @param value - the `prognosisCodeableConcept` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPrognosisCodeableConcept(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClinicalImpression.prognosisCodeableConcept; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPrognosisCodeableConcept();
      this.prognosisCodeableConcept?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `prognosisCodeableConcept` property exists and has a value; `false` otherwise
   */
  public hasPrognosisCodeableConcept(): boolean {
    return isDefinedList<CodeableConcept>(this.prognosisCodeableConcept) && this.prognosisCodeableConcept.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `prognosisCodeableConcept` property
   */
  private initPrognosisCodeableConcept(): void {
    if(!this.hasPrognosisCodeableConcept()) {
      this.prognosisCodeableConcept = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `prognosisReference` property value as a Reference array
   */
  public getPrognosisReference(): Reference[] {
    return this.prognosisReference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `prognosisReference` property.
   *
   * @decorator `@ReferenceTargets('ClinicalImpression.prognosisReference', ['RiskAssessment',])`
   *
   * @param value - the `prognosisReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalImpression.prognosisReference', [
    'RiskAssessment',
  ])
  public setPrognosisReference(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.prognosisReference = value;
    } else {
      this.prognosisReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `prognosisReference` array property.
   *
   * @decorator `@ReferenceTargets('ClinicalImpression.prognosisReference', ['RiskAssessment',])`
   *
   * @param value - the `prognosisReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalImpression.prognosisReference', [
    'RiskAssessment',
  ])
  public addPrognosisReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPrognosisReference();
      this.prognosisReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `prognosisReference` property exists and has a value; `false` otherwise
   */
  public hasPrognosisReference(): boolean {
    return isDefinedList<Reference>(this.prognosisReference) && this.prognosisReference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `prognosisReference` property
   */
  private initPrognosisReference(): void {
    if (!this.hasPrognosisReference()) {
      this.prognosisReference = [] as Reference[];
    }
  }

  /**
   * @returns the `supportingInfo` property value as a Reference array
   */
  public getSupportingInfo(): Reference[] {
    return this.supportingInfo ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `supportingInfo` property.
   *
   * @decorator `@ReferenceTargets('ClinicalImpression.supportingInfo', ['Resource',])`
   *
   * @param value - the `supportingInfo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalImpression.supportingInfo', [
    'Resource',
  ])
  public setSupportingInfo(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.supportingInfo = value;
    } else {
      this.supportingInfo = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `supportingInfo` array property.
   *
   * @decorator `@ReferenceTargets('ClinicalImpression.supportingInfo', ['Resource',])`
   *
   * @param value - the `supportingInfo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalImpression.supportingInfo', [
    'Resource',
  ])
  public addSupportingInfo(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSupportingInfo();
      this.supportingInfo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInfo` property exists and has a value; `false` otherwise
   */
  public hasSupportingInfo(): boolean {
    return isDefinedList<Reference>(this.supportingInfo) && this.supportingInfo.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `supportingInfo` property
   */
  private initSupportingInfo(): void {
    if (!this.hasSupportingInfo()) {
      this.supportingInfo = [] as Reference[];
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
      const optErrMsg = `Invalid ClinicalImpression.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid ClinicalImpression.note; Provided element is not an instance of Annotation.`;
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
    return 'ClinicalImpression';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.statusReason,
      this.code,
      this.description,
      this.subject,
      this.encounter,
      this.effective,
      this.date,
      this.assessor,
      this.previous,
      this.problem,
      this.investigation,
      this.protocol,
      this.summary,
      this.finding,
      this.prognosisCodeableConcept,
      this.prognosisReference,
      this.supportingInfo,
      this.note,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClinicalImpression {
    const dest = new ClinicalImpression();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClinicalImpression): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.statusReason = this.statusReason?.copy();
    dest.code = this.code?.copy();
    dest.description = this.description?.copy();
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.effective = this.effective?.copy() as IDataType;
    dest.date = this.date?.copy();
    dest.assessor = this.assessor?.copy();
    dest.previous = this.previous?.copy();
    const problemList = copyListValues<Reference>(this.problem);
    dest.problem = problemList.length === 0 ? undefined : problemList;
    const investigationList = copyListValues<ClinicalImpressionInvestigationComponent>(this.investigation);
    dest.investigation = investigationList.length === 0 ? undefined : investigationList;
    const protocolList = copyListValues<UriType>(this.protocol);
    dest.protocol = protocolList.length === 0 ? undefined : protocolList;
    dest.summary = this.summary?.copy();
    const findingList = copyListValues<ClinicalImpressionFindingComponent>(this.finding);
    dest.finding = findingList.length === 0 ? undefined : findingList;
    const prognosisCodeableConceptList = copyListValues<CodeableConcept>(this.prognosisCodeableConcept);
    dest.prognosisCodeableConcept = prognosisCodeableConceptList.length === 0 ? undefined : prognosisCodeableConceptList;
    const prognosisReferenceList = copyListValues<Reference>(this.prognosisReference);
    dest.prognosisReference = prognosisReferenceList.length === 0 ? undefined : prognosisReferenceList;
    const supportingInfoList = copyListValues<Reference>(this.supportingInfo);
    dest.supportingInfo = supportingInfoList.length === 0 ? undefined : supportingInfoList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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
      missingReqdProperties.push(`ClinicalImpression.status`);
    }

    if (this.hasStatusReason()) {
      setFhirComplexJson(this.getStatusReason(), 'statusReason', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasSubject()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getSubject()!, 'subject', jsonObj);
    } else {
      missingReqdProperties.push(`ClinicalImpression.subject`);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasEffective()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getEffective()!, 'effective', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasAssessor()) {
      setFhirComplexJson(this.getAssessor(), 'assessor', jsonObj);
    }

    if (this.hasPrevious()) {
      setFhirComplexJson(this.getPrevious(), 'previous', jsonObj);
    }

    if (this.hasProblem()) {
      setFhirComplexListJson(this.getProblem(), 'problem', jsonObj);
    }

    if (this.hasInvestigation()) {
      setFhirBackboneElementListJson(this.getInvestigation(), 'investigation', jsonObj);
    }

    if (this.hasProtocol()) {
      setFhirPrimitiveListJson(this.getProtocolElement(), 'protocol', jsonObj);
    }

    if (this.hasSummaryElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSummaryElement(), 'summary', jsonObj);
    }

    if (this.hasFinding()) {
      setFhirBackboneElementListJson(this.getFinding(), 'finding', jsonObj);
    }

    if (this.hasPrognosisCodeableConcept()) {
      setFhirComplexListJson(this.getPrognosisCodeableConcept(), 'prognosisCodeableConcept', jsonObj);
    }

    if (this.hasPrognosisReference()) {
      setFhirComplexListJson(this.getPrognosisReference(), 'prognosisReference', jsonObj);
    }

    if (this.hasSupportingInfo()) {
      setFhirComplexListJson(this.getSupportingInfo(), 'supportingInfo', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * ClinicalImpressionInvestigationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** One or more sets of investigations (signs, symptoms, etc.)
 * - **Definition:** One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 *
 * @category Data Models: Resource
 * @see [FHIR ClinicalImpression](http://hl7.org/fhir/StructureDefinition/ClinicalImpression)
 */
export class ClinicalImpressionInvestigationComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `ClinicalImpressionInvestigationComponent` JSON to instantiate the ClinicalImpressionInvestigationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClinicalImpressionInvestigationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClinicalImpressionInvestigationComponent
   * @returns ClinicalImpressionInvestigationComponent data model or undefined for `ClinicalImpressionInvestigationComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClinicalImpressionInvestigationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClinicalImpressionInvestigationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClinicalImpressionInvestigationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addItem(datatype);
        }
      });
  }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ClinicalImpression.investigation.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A name/code for the set
   * - **Definition:** A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeableConcept | null;

  /**
   * ClinicalImpression.investigation.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Record of a specific investigation
   * - **Definition:** A record of a specific investigation that was undertaken.
   * - **Comment:** Most investigations are observations of one kind or another but some other specific types of data collection resources can also be used.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse',
   *       'http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/RiskAssessment',
   *       'http://hl7.org/fhir/StructureDefinition/ImagingStudy',
   *       'http://hl7.org/fhir/StructureDefinition/Media',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else null
   */
  public getCode(): CodeableConcept | null {
    return this.code;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `ClinicalImpression.investigation.code is required`);
    const optErrMsg = `Invalid ClinicalImpression.investigation.code; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.code = value;
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `item` property value as a Reference array
   */
  public getItem(): Reference[] {
    return this.item ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `item` property.
   *
   * @decorator `@ReferenceTargets('ClinicalImpression.investigation.item', ['Observation','QuestionnaireResponse','FamilyMemberHistory','DiagnosticReport','RiskAssessment','ImagingStudy','Media',])`
   *
   * @param value - the `item` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalImpression.investigation.item', [
    'Observation',
  
    'QuestionnaireResponse',
  
    'FamilyMemberHistory',
  
    'DiagnosticReport',
  
    'RiskAssessment',
  
    'ImagingStudy',
  
    'Media',
  ])
  public setItem(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.item = value;
    } else {
      this.item = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `item` array property.
   *
   * @decorator `@ReferenceTargets('ClinicalImpression.investigation.item', ['Observation','QuestionnaireResponse','FamilyMemberHistory','DiagnosticReport','RiskAssessment','ImagingStudy','Media',])`
   *
   * @param value - the `item` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalImpression.investigation.item', [
    'Observation',
  
    'QuestionnaireResponse',
  
    'FamilyMemberHistory',
  
    'DiagnosticReport',
  
    'RiskAssessment',
  
    'ImagingStudy',
  
    'Media',
  ])
  public addItem(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initItem();
      this.item?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefinedList<Reference>(this.item) && this.item.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `item` property
   */
  private initItem(): void {
    if (!this.hasItem()) {
      this.item = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClinicalImpression.investigation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.item,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClinicalImpressionInvestigationComponent {
    const dest = new ClinicalImpressionInvestigationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClinicalImpressionInvestigationComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    const itemList = copyListValues<Reference>(this.item);
    dest.item = itemList.length === 0 ? undefined : itemList;
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

    if (this.hasCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCode()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`ClinicalImpression.investigation.code`);
    }

    if (this.hasItem()) {
      setFhirComplexListJson(this.getItem(), 'item', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ClinicalImpressionFindingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Possible or likely findings and diagnoses
 * - **Definition:** Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
 *
 * @category Data Models: Resource
 * @see [FHIR ClinicalImpression](http://hl7.org/fhir/StructureDefinition/ClinicalImpression)
 */
export class ClinicalImpressionFindingComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ClinicalImpressionFindingComponent` JSON to instantiate the ClinicalImpressionFindingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ClinicalImpressionFindingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ClinicalImpressionFindingComponent
   * @returns ClinicalImpressionFindingComponent data model or undefined for `ClinicalImpressionFindingComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ClinicalImpressionFindingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ClinicalImpressionFindingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ClinicalImpressionFindingComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'itemCodeableConcept';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setItemCodeableConcept(datatype);
    }

    fieldName = 'itemReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setItemReference(datatype);
    }

    fieldName = 'basis';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setBasisElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ClinicalImpression.finding.itemCodeableConcept Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What was found
   * - **Definition:** Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private itemCodeableConcept?: CodeableConcept | undefined;

  /**
   * ClinicalImpression.finding.itemReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What was found
   * - **Definition:** Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/Media',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private itemReference?: Reference | undefined;

  /**
   * ClinicalImpression.finding.basis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Which investigations support finding
   * - **Definition:** Which investigations support finding or diagnosis.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private basis?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `itemCodeableConcept` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getItemCodeableConcept(): CodeableConcept {
    return this.itemCodeableConcept ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ItemCodeableConcept object value to the `itemCodeableConcept` property.
   *
   * @param value - the `itemCodeableConcept` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItemCodeableConcept(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ClinicalImpression.finding.itemCodeableConcept; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.itemCodeableConcept = value;
    } else {
      this.itemCodeableConcept = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `itemCodeableConcept` property exists and has a value; `false` otherwise
   */
  public hasItemCodeableConcept(): boolean {
    return isDefined<CodeableConcept>(this.itemCodeableConcept) && !this.itemCodeableConcept.isEmpty();
  }

  /**
   * @returns the `itemReference` property value as a Reference object; else an empty Reference object
   */
  public getItemReference(): Reference {
    return this.itemReference ?? new Reference();
  }

  /**
   * Assigns the provided ItemReference object value to the `itemReference` property.
   *
   * @decorator `@ReferenceTargets('ClinicalImpression.finding.itemReference', ['Condition','Observation','Media',])`
   *
   * @param value - the `itemReference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ClinicalImpression.finding.itemReference', [
    'Condition',
  
    'Observation',
  
    'Media',
  ])
  public setItemReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.itemReference = value;
    } else {
      this.itemReference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `itemReference` property exists and has a value; `false` otherwise
   */
  public hasItemReference(): boolean {
    return isDefined<Reference>(this.itemReference) && !this.itemReference.isEmpty();
  }

  /**
   * @returns the `basis` property value as a StringType object if defined; else an empty StringType object
   */
  public getBasisElement(): StringType {
    return this.basis ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `basis` property.
   *
   * @param element - the `basis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBasisElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ClinicalImpression.finding.basis; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.basis = element;
    } else {
      this.basis = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `basis` property exists and has a value; `false` otherwise
   */
  public hasBasisElement(): boolean {
    return isDefined<StringType>(this.basis) && !this.basis.isEmpty();
  }

  /**
   * @returns the `basis` property value as a fhirString if defined; else undefined
   */
  public getBasis(): fhirString | undefined {
    return this.basis?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `basis` property.
   *
   * @param value - the `basis` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBasis(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ClinicalImpression.finding.basis (${String(value)})`;
      this.basis = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.basis = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `basis` property exists and has a value; `false` otherwise
   */
  public hasBasis(): boolean {
    return this.hasBasisElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ClinicalImpression.finding';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.itemCodeableConcept,
      this.itemReference,
      this.basis,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ClinicalImpressionFindingComponent {
    const dest = new ClinicalImpressionFindingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ClinicalImpressionFindingComponent): void {
    super.copyValues(dest);
    dest.itemCodeableConcept = this.itemCodeableConcept?.copy();
    dest.itemReference = this.itemReference?.copy();
    dest.basis = this.basis?.copy();
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

    if (this.hasItemCodeableConcept()) {
      setFhirComplexJson(this.getItemCodeableConcept(), 'itemCodeableConcept', jsonObj);
    }

    if (this.hasItemReference()) {
      setFhirComplexJson(this.getItemReference(), 'itemReference', jsonObj);
    }

    if (this.hasBasisElement()) {
      setFhirPrimitiveJson<fhirString>(this.getBasisElement(), 'basis', jsonObj);
    }

    return jsonObj;
  }
}
