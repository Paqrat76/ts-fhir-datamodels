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
 * Goal Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Goal
 * StructureDefinition.name: Goal
 * StructureDefinition.description: Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
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
  DateType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  IntegerType,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  StringType,
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
  fhirDate,
  fhirDateSchema,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, CodeableReference, Duration, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Range, Ratio, Reference } from '../complex-types/complex-datatypes';
import { GoalStatusEnum } from '../code-systems/GoalStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Goal Class
 *
 * @remarks
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 *
 * **FHIR Specification**
 * - **Short:** Describes the intended objective(s) for a patient, group or organization
 * - **Definition:** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 * - **Comment:** Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Goal](http://hl7.org/fhir/StructureDefinition/Goal)
 */
export class Goal extends DomainResource implements IDomainResource {
  constructor(lifecycleStatus: EnumCodeType | CodeType | fhirCode | null = null, description: CodeableConcept | null = null, subject: Reference | null = null) {
    super();

    this.goalStatusEnum = new GoalStatusEnum();

    this.lifecycleStatus = constructorCodeValueAsEnumCodeType<GoalStatusEnum>(
      lifecycleStatus,
      GoalStatusEnum,
      this.goalStatusEnum,
      'Goal.lifecycleStatus',
    );

    this.description = null;
    if (isDefined<CodeableConcept>(description)) {
      this.setDescription(description);
    }

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }
  }

  /**
   * Parse the provided `Goal` JSON to instantiate the Goal data model.
   *
   * @param sourceJson - JSON representing FHIR `Goal`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Goal
   * @returns Goal data model or undefined for `Goal`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Goal | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Goal';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Goal();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Goal');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = Goal[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for Goal`;
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

    fieldName = 'lifecycleStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setLifecycleStatus(null);
      } else {
        instance.setLifecycleStatusElement(datatype);
      }
    } else {
      instance.setLifecycleStatus(null);
    }

    fieldName = 'achievementStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAchievementStatus(datatype);
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

    fieldName = 'continuous';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setContinuousElement(datatype);
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
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setDescription(null);
      } else {
        instance.setDescription(datatype);
      }
    } else {
      instance.setDescription(null);
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

    fieldName = 'start[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const start: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setStart(start);

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: GoalTargetComponent | undefined = GoalTargetComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTarget(component);
        }
      });
    }

    fieldName = 'statusDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setStatusDateElement(datatype);
    }

    fieldName = 'statusReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setStatusReasonElement(datatype);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSource(datatype);
    }

    fieldName = 'addresses';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAddresses(datatype);
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

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addOutcome(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * Goal.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External Ids for this goal
   * - **Definition:** Business identifiers assigned to this goal by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier (see [discussion](https://hl7.org/fhir/resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   * - **Requirements:** Allows identification of the goal as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: GoalStatus
   *
   * @see {@link GoalStatusEnum }
   */
  private readonly goalStatusEnum: GoalStatusEnum;

  /**
   * Goal.lifecycleStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected
   * - **Definition:** The state of the goal throughout its lifecycle.
   * - **Comment:** This element is labeled as a modifier because the lifecycleStatus contains codes that mark the resource as not currently valid.
   * - **Requirements:** Allows knowing whether goal needs to be further tracked.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link GoalStatusEnum }
   */
  private lifecycleStatus: EnumCodeType | null;

  /**
   * Goal.achievementStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable
   * - **Definition:** Describes the progression, or lack thereof, towards the goal against the target.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private achievementStatus?: CodeableConcept | undefined;

  /**
   * Goal.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** E.g. Treatment, dietary, behavioral, etc
   * - **Definition:** Indicates a category the goal falls within.
   * - **Requirements:** Allows goals to be filtered and sorted.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * Goal.continuous Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** After meeting the goal, ongoing activity is needed to sustain the goal objective
   * - **Definition:** After meeting the goal, ongoing activity is needed to sustain the goal objective.
   * - **Comment:** For example, getting a yellow fever vaccination for a planned trip is a goal that is designed to be completed (continuous = false).  A goal to sustain HbA1c levels would not be a one-time goal (continuous = true).
   * - **Requirements:** Allows for a system to programmatically update achievementStatus upon finding evidence the goal has been met.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private continuous?: BooleanType | undefined;

  /**
   * Goal.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** high-priority | medium-priority | low-priority
   * - **Definition:** Identifies the mutually agreed level of importance associated with reaching/sustaining the goal.
   * - **Comment:** Extensions are available to track priorities as established by each participant (i.e. Priority from the patient\'s perspective, different practitioners\' perspectives, family member\'s perspectives) The ordinal extension on Coding can be used to convey a numerically comparable ranking to priority.  (Keep in mind that different coding systems may use a "low value=important".
   * - **Requirements:** Used for sorting and presenting goals.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private priority?: CodeableConcept | undefined;

  /**
   * Goal.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code or text describing goal
   * - **Definition:** Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding".
   * - **Comment:** If no code is available, use CodeableConcept.text.
   * - **Requirements:** Without a description of what\'s trying to be achieved, element has no purpose.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description: CodeableConcept | null;

  /**
   * Goal.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who this goal is intended for
   * - **Definition:** Identifies the patient, group or organization for whom the goal is being established.
   * - **Requirements:** Subject is optional to support annonymized reporting.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject: Reference | null;

  /**
   * Goal.start[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Goal.start[x]', ['date','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When goal pursuit begins
   * - **Definition:** The date or event after which the goal should begin being pursued.
   * - **Requirements:** Goals can be established prior to there being an intention to start pursuing them; e.g. Goals for post-surgical recovery established prior to surgery.
   * - **FHIR Types:**
   *     'date',
   *     'CodeableConcept',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Goal.start[x]',[
    'date',
    'CodeableConcept',
  ])
  private start?: IDataType | undefined;

  /**
   * Goal.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Target outcome for the goal
   * - **Definition:** Indicates what should be done by when.
   * - **Comment:** When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
   * - **Requirements:** Allows the progress of the goal to be monitored against an observation or due date.  Target is 0..* to support Observations with multiple components, such as blood pressure goals with both a systolic and diastolic target.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private target?: GoalTargetComponent[] | undefined;

  /**
   * Goal.statusDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When goal status took effect
   * - **Definition:** Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.
   * - **Comment:** To see the date for past statuses, query history.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private statusDate?: DateType | undefined;

  /**
   * Goal.statusReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for current status
   * - **Definition:** Captures the reason for the current status.
   * - **Comment:** This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusReason?: StringType | undefined;

  /**
   * Goal.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who\'s responsible for creating Goal?
   * - **Definition:** Indicates whose goal this is - patient goal, practitioner goal, etc.
   * - **Comment:** This is the individual or team responsible for establishing the goal, not necessarily who recorded it.  (For that, use the Provenance resource.).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private source?: Reference | undefined;

  /**
   * Goal.addresses Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Issues addressed by this goal
   * - **Definition:** The identified conditions and other health record elements that are intended to be addressed by the goal.
   * - **Requirements:** Allows specific goals to explicitly linked to the concerns they\'re dealing with - makes the goal more understandable.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationStatement',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionOrder',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/RiskAssessment',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private addresses?: Reference[] | undefined;

  /**
   * Goal.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments about the goal
   * - **Definition:** Any comments related to the goal.
   * - **Comment:** May be used for progress notes, concerns or other related information that doesn\'t actually describe the goal itself.
   * - **Requirements:** There\'s a need to capture information about the goal that doesn\'t actually describe the goal.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Goal.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What result was achieved regarding the goal?
   * - **Definition:** Identifies the change (or lack of change) at the point when the status of the goal is assessed.
   * - **Comment:** Note that this should not duplicate the goal status; The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan\'s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.
   * - **Requirements:** Outcome tracking is a key aspect of care planning.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private outcome?: CodeableReference[] | undefined;

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
      const optErrMsg = `Invalid Goal.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Goal.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `lifecycleStatus` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GoalStatusEnum }
   */
  public getLifecycleStatusEnumType(): EnumCodeType | null {
    return this.lifecycleStatus;
  }

  /**
   * Assigns the provided EnumCodeType value to the `lifecycleStatus` property.
   *
   * @param enumType - the `lifecycleStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GoalStatusEnum }
   */
  public setLifecycleStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Goal.lifecycleStatus`;
      assertEnumCodeType<GoalStatusEnum>(enumType, GoalStatusEnum, errMsgPrefix);
      this.lifecycleStatus = enumType;
    } else {
      this.lifecycleStatus = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `lifecycleStatus` property exists and has a value; `false` otherwise
   */
  public hasLifecycleStatusEnumType(): boolean {
    return isDefined<EnumCodeType>(this.lifecycleStatus) && !this.lifecycleStatus.isEmpty() && this.lifecycleStatus.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `lifecycleStatus` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GoalStatusEnum }
   */
  public getLifecycleStatusElement(): CodeType | null {
    if (this.lifecycleStatus === null) {
      return null;
    }
    return this.lifecycleStatus as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `lifecycleStatus` property.
   *
   * @param element - the `lifecycleStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GoalStatusEnum }
   */
  public setLifecycleStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Goal.lifecycleStatus; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.lifecycleStatus = new EnumCodeType(element, this.goalStatusEnum);
    } else {
      this.lifecycleStatus = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `lifecycleStatus` property exists and has a value; `false` otherwise
   */
  public hasLifecycleStatusElement(): boolean {
    return this.hasLifecycleStatusEnumType();
  }

  /**
   * @returns the `lifecycleStatus` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GoalStatusEnum }
   */
  public getLifecycleStatus(): fhirCode | null {
    if (this.lifecycleStatus === null) {
      return null;
    }
    return this.lifecycleStatus.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `lifecycleStatus` property.
   *
   * @param value - the `lifecycleStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link GoalStatusEnum }
   */
  public setLifecycleStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Goal.lifecycleStatus (${String(value)})`;
      this.lifecycleStatus = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.goalStatusEnum);
    } else {
      this.lifecycleStatus = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `lifecycleStatus` property exists and has a value; `false` otherwise
   */
  public hasLifecycleStatus(): boolean {
    return this.hasLifecycleStatusEnumType();
  }

  /**
   * @returns the `achievementStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAchievementStatus(): CodeableConcept {
    return this.achievementStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AchievementStatus object value to the `achievementStatus` property.
   *
   * @param value - the `achievementStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAchievementStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Goal.achievementStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.achievementStatus = value;
    } else {
      this.achievementStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `achievementStatus` property exists and has a value; `false` otherwise
   */
  public hasAchievementStatus(): boolean {
    return isDefined<CodeableConcept>(this.achievementStatus) && !this.achievementStatus.isEmpty();
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
      const optErrMsg = `Invalid Goal.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Goal.category; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `continuous` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getContinuousElement(): BooleanType {
    return this.continuous ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `continuous` property.
   *
   * @param element - the `continuous` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContinuousElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Goal.continuous; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.continuous = element;
    } else {
      this.continuous = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `continuous` property exists and has a value; `false` otherwise
   */
  public hasContinuousElement(): boolean {
    return isDefined<BooleanType>(this.continuous) && !this.continuous.isEmpty();
  }

  /**
   * @returns the `continuous` property value as a fhirBoolean if defined; else undefined
   */
  public getContinuous(): fhirBoolean | undefined {
    return this.continuous?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `continuous` property.
   *
   * @param value - the `continuous` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContinuous(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Goal.continuous (${String(value)})`;
      this.continuous = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.continuous = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `continuous` property exists and has a value; `false` otherwise
   */
  public hasContinuous(): boolean {
    return this.hasContinuousElement();
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
      const optErrMsg = `Invalid Goal.priority; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `description` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDescription(): CodeableConcept {
    return this.description ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `description` property.
   *
   * @param value - the `description` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDescription(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Goal.description; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.description = value;
    } else {
      this.description = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescription(): boolean {
    return isDefined<CodeableConcept>(this.description) && !this.description.isEmpty();
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
   * @decorator `@ReferenceTargets('Goal.subject', ['Patient','Group','Organization',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Goal.subject', [
    'Patient',
  
    'Group',
  
    'Organization',
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
   * @returns the `start` property value as a DataType object if defined; else undefined
   */
  public getStart(): IDataType | undefined {
    return this.start;
  }

  /**
   * Assigns the provided DataType object value to the `start` property.
   *
   * @decorator `@ChoiceDataTypes('Goal.start[x]')`
   *
   * @param value - the `start` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Goal.start[x]')
  public setStart(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.start = value;
    } else {
      this.start = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `start` property exists and has a value; `false` otherwise
   */
  public hasStart(): boolean {
    return isDefined<IDataType>(this.start) && !this.start.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `start` property value as a DateType object if defined; else undefined
   */
  public getStartDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.start)) {
      return undefined;
    }
    if (!(this.start instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Goal.start[x]: Expected DateType but encountered ${this.start.fhirType()}`,
      );
    }
    return this.start;
  }

  /**
   * @returns `true` if the `start` property exists as a DateType and has a value; `false` otherwise
   */
  public hasStartDateType(): boolean {
    return this.hasStart() && this.start instanceof DateType;
  }

  /**
   * @returns the `start` property value as a CodeableConcept object if defined; else undefined
   */
  public getStartCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.start)) {
      return undefined;
    }
    if (!(this.start instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Goal.start[x]: Expected CodeableConcept but encountered ${this.start.fhirType()}`,
      );
    }
    return this.start;
  }

  /**
   * @returns `true` if the `start` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasStartCodeableConcept(): boolean {
    return this.hasStart() && this.start instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `target` property value as a GoalTargetComponent array
   */
  public getTarget(): GoalTargetComponent[] {
    return this.target ?? ([] as GoalTargetComponent[]);
  }

  /**
   * Assigns the provided GoalTargetComponent array value to the `target` property.
   *
   * @param value - the `target` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTarget(value: GoalTargetComponent[] | undefined): this {
    if (isDefinedList<GoalTargetComponent>(value)) {
      const optErrMsg = `Invalid Goal.target; Provided value array has an element that is not an instance of GoalTargetComponent.`;
      assertFhirTypeList<GoalTargetComponent>(value, GoalTargetComponent, optErrMsg);
      this.target = value;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * Add the provided GoalTargetComponent value to the `target` array property.
   *
   * @param value - the `target` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTarget(value: GoalTargetComponent | undefined): this {
    if (isDefined<GoalTargetComponent>(value)) {
      const optErrMsg = `Invalid Goal.target; Provided element is not an instance of GoalTargetComponent.`;
      assertFhirType<GoalTargetComponent>(value, GoalTargetComponent, optErrMsg);
      this.initTarget();
      this.target?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return isDefinedList<GoalTargetComponent>(this.target) && this.target.some((item: GoalTargetComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `target` property
   */
  private initTarget(): void {
    if(!this.hasTarget()) {
      this.target = [] as GoalTargetComponent[];
    }
  }

  /**
   * @returns the `statusDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getStatusDateElement(): DateType {
    return this.statusDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `statusDate` property.
   *
   * @param element - the `statusDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid Goal.statusDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.statusDate = element;
    } else {
      this.statusDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusDate` property exists and has a value; `false` otherwise
   */
  public hasStatusDateElement(): boolean {
    return isDefined<DateType>(this.statusDate) && !this.statusDate.isEmpty();
  }

  /**
   * @returns the `statusDate` property value as a fhirDate if defined; else undefined
   */
  public getStatusDate(): fhirDate | undefined {
    return this.statusDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `statusDate` property.
   *
   * @param value - the `statusDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid Goal.statusDate (${String(value)})`;
      this.statusDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.statusDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusDate` property exists and has a value; `false` otherwise
   */
  public hasStatusDate(): boolean {
    return this.hasStatusDateElement();
  }

  /**
   * @returns the `statusReason` property value as a StringType object if defined; else an empty StringType object
   */
  public getStatusReasonElement(): StringType {
    return this.statusReason ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `statusReason` property.
   *
   * @param element - the `statusReason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusReasonElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Goal.statusReason; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.statusReason = element;
    } else {
      this.statusReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusReason` property exists and has a value; `false` otherwise
   */
  public hasStatusReasonElement(): boolean {
    return isDefined<StringType>(this.statusReason) && !this.statusReason.isEmpty();
  }

  /**
   * @returns the `statusReason` property value as a fhirString if defined; else undefined
   */
  public getStatusReason(): fhirString | undefined {
    return this.statusReason?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `statusReason` property.
   *
   * @param value - the `statusReason` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusReason(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Goal.statusReason (${String(value)})`;
      this.statusReason = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.statusReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusReason` property exists and has a value; `false` otherwise
   */
  public hasStatusReason(): boolean {
    return this.hasStatusReasonElement();
  }

  /**
   * @returns the `source` property value as a Reference object; else an empty Reference object
   */
  public getSource(): Reference {
    return this.source ?? new Reference();
  }

  /**
   * Assigns the provided Source object value to the `source` property.
   *
   * @decorator `@ReferenceTargets('Goal.source', ['Patient','Practitioner','PractitionerRole','RelatedPerson','CareTeam',])`
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Goal.source', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'CareTeam',
  ])
  public setSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefined<Reference>(this.source) && !this.source.isEmpty();
  }

  /**
   * @returns the `addresses` property value as a Reference array
   */
  public getAddresses(): Reference[] {
    return this.addresses ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `addresses` property.
   *
   * @decorator `@ReferenceTargets('Goal.addresses', ['Condition','Observation','MedicationStatement','MedicationRequest','NutritionOrder','ServiceRequest','RiskAssessment','Procedure',])`
   *
   * @param value - the `addresses` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Goal.addresses', [
    'Condition',
  
    'Observation',
  
    'MedicationStatement',
  
    'MedicationRequest',
  
    'NutritionOrder',
  
    'ServiceRequest',
  
    'RiskAssessment',
  
    'Procedure',
  ])
  public setAddresses(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.addresses = value;
    } else {
      this.addresses = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `addresses` array property.
   *
   * @decorator `@ReferenceTargets('Goal.addresses', ['Condition','Observation','MedicationStatement','MedicationRequest','NutritionOrder','ServiceRequest','RiskAssessment','Procedure',])`
   *
   * @param value - the `addresses` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Goal.addresses', [
    'Condition',
  
    'Observation',
  
    'MedicationStatement',
  
    'MedicationRequest',
  
    'NutritionOrder',
  
    'ServiceRequest',
  
    'RiskAssessment',
  
    'Procedure',
  ])
  public addAddresses(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAddresses();
      this.addresses?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `addresses` property exists and has a value; `false` otherwise
   */
  public hasAddresses(): boolean {
    return isDefinedList<Reference>(this.addresses) && this.addresses.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `addresses` property
   */
  private initAddresses(): void {
    if (!this.hasAddresses()) {
      this.addresses = [] as Reference[];
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
      const optErrMsg = `Invalid Goal.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Goal.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `outcome` property value as a CodeableReference array
   */
  public getOutcome(): CodeableReference[] {
    return this.outcome ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `outcome` property.
   *
   * @param value - the `outcome` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutcome(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid Goal.outcome; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.outcome = value;
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `outcome` array property.
   *
   * @param value - the `outcome` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOutcome(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Goal.outcome; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initOutcome();
      this.outcome?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcome(): boolean {
    return isDefinedList<CodeableReference>(this.outcome) && this.outcome.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `outcome` property
   */
  private initOutcome(): void {
    if(!this.hasOutcome()) {
      this.outcome = [] as CodeableReference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Goal';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.lifecycleStatus,
      this.achievementStatus,
      this.category,
      this.continuous,
      this.priority,
      this.description,
      this.subject,
      this.start,
      this.target,
      this.statusDate,
      this.statusReason,
      this.source,
      this.addresses,
      this.note,
      this.outcome,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.lifecycleStatus, this.description, this.subject, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Goal {
    const dest = new Goal();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Goal): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.lifecycleStatus = this.lifecycleStatus ? this.lifecycleStatus.copy() : null;
    dest.achievementStatus = this.achievementStatus?.copy();
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.continuous = this.continuous?.copy();
    dest.priority = this.priority?.copy();
    dest.description = this.description ? this.description.copy() : null;
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.start = this.start?.copy() as IDataType;
    const targetList = copyListValues<GoalTargetComponent>(this.target);
    dest.target = targetList.length === 0 ? undefined : targetList;
    dest.statusDate = this.statusDate?.copy();
    dest.statusReason = this.statusReason?.copy();
    dest.source = this.source?.copy();
    const addressesList = copyListValues<Reference>(this.addresses);
    dest.addresses = addressesList.length === 0 ? undefined : addressesList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const outcomeList = copyListValues<CodeableReference>(this.outcome);
    dest.outcome = outcomeList.length === 0 ? undefined : outcomeList;
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

    if (this.hasLifecycleStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getLifecycleStatusElement()!, 'lifecycleStatus', jsonObj);
    } else {
      jsonObj['lifecycleStatus'] = null;
    }

    if (this.hasAchievementStatus()) {
      setFhirComplexJson(this.getAchievementStatus(), 'achievementStatus', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasContinuousElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getContinuousElement(), 'continuous', jsonObj);
    }

    if (this.hasPriority()) {
      setFhirComplexJson(this.getPriority(), 'priority', jsonObj);
    }

    if (this.hasDescription()) {
      setFhirComplexJson(this.getDescription(), 'description', jsonObj);
    } else {
      jsonObj['description'] = null;
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    } else {
      jsonObj['subject'] = null;
    }

    if (this.hasStart()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getStart()!, 'start', jsonObj);
    }

    if (this.hasTarget()) {
      setFhirBackboneElementListJson(this.getTarget(), 'target', jsonObj);
    }

    if (this.hasStatusDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getStatusDateElement(), 'statusDate', jsonObj);
    }

    if (this.hasStatusReasonElement()) {
      setFhirPrimitiveJson<fhirString>(this.getStatusReasonElement(), 'statusReason', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexJson(this.getSource(), 'source', jsonObj);
    }

    if (this.hasAddresses()) {
      setFhirComplexListJson(this.getAddresses(), 'addresses', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasOutcome()) {
      setFhirComplexListJson(this.getOutcome(), 'outcome', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * GoalTargetComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Target outcome for the goal
 * - **Definition:** Indicates what should be done by when.
 * - **Comment:** When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
 * - **Requirements:** Allows the progress of the goal to be monitored against an observation or due date.  Target is 0..* to support Observations with multiple components, such as blood pressure goals with both a systolic and diastolic target.
 *
 * @category Data Models: Resource
 * @see [FHIR Goal](http://hl7.org/fhir/StructureDefinition/Goal)
 */
export class GoalTargetComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `GoalTargetComponent` JSON to instantiate the GoalTargetComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `GoalTargetComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GoalTargetComponent
   * @returns GoalTargetComponent data model or undefined for `GoalTargetComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): GoalTargetComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GoalTargetComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GoalTargetComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = GoalTargetComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for GoalTargetComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'measure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMeasure(datatype);
    }

    fieldName = 'detail[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const detail: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDetail(detail);

    fieldName = 'due[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const due: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDue(due);

    return instance;
  }

  /**
   * Goal.target.measure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The parameter whose value is being tracked
   * - **Definition:** The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private measure?: CodeableConcept | undefined;

  /**
   * Goal.target.detail[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Goal.target.detail[x]', ['Quantity','Range','CodeableConcept','string','boolean','integer','Ratio',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The target value to be achieved
   * - **Definition:** The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   * - **Comment:** A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   * - **FHIR Types:**
   *     'Quantity',
   *     'Range',
   *     'CodeableConcept',
   *     'string',
   *     'boolean',
   *     'integer',
   *     'Ratio',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Goal.target.detail[x]',[
    'Quantity',
    'Range',
    'CodeableConcept',
    'string',
    'boolean',
    'integer',
    'Ratio',
  ])
  private detail?: IDataType | undefined;

  /**
   * Goal.target.due[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Goal.target.due[x]', ['date','Duration',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reach goal on or before
   * - **Definition:** Indicates either the date or the duration after start by which the goal should be met.
   * - **Requirements:** Identifies when the goal should be evaluated.
   * - **FHIR Types:**
   *     'date',
   *     'Duration',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Goal.target.due[x]',[
    'date',
    'Duration',
  ])
  private due?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `measure` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMeasure(): CodeableConcept {
    return this.measure ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Measure object value to the `measure` property.
   *
   * @param value - the `measure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMeasure(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Goal.target.measure; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.measure = value;
    } else {
      this.measure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measure` property exists and has a value; `false` otherwise
   */
  public hasMeasure(): boolean {
    return isDefined<CodeableConcept>(this.measure) && !this.measure.isEmpty();
  }

  /**
   * @returns the `detail` property value as a DataType object if defined; else undefined
   */
  public getDetail(): IDataType | undefined {
    return this.detail;
  }

  /**
   * Assigns the provided DataType object value to the `detail` property.
   *
   * @decorator `@ChoiceDataTypes('Goal.target.detail[x]')`
   *
   * @param value - the `detail` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Goal.target.detail[x]')
  public setDetail(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefined<IDataType>(this.detail) && !this.detail.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `detail` property value as a Quantity object if defined; else undefined
   */
  public getDetailQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.detail)) {
      return undefined;
    }
    if (!(this.detail instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for Goal.target.detail[x]: Expected Quantity but encountered ${this.detail.fhirType()}`,
      );
    }
    return this.detail;
  }

  /**
   * @returns `true` if the `detail` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasDetailQuantity(): boolean {
    return this.hasDetail() && this.detail instanceof Quantity;
  }

  /**
   * @returns the `detail` property value as a Range object if defined; else undefined
   */
  public getDetailRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.detail)) {
      return undefined;
    }
    if (!(this.detail instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for Goal.target.detail[x]: Expected Range but encountered ${this.detail.fhirType()}`,
      );
    }
    return this.detail;
  }

  /**
   * @returns `true` if the `detail` property exists as a Range and has a value; `false` otherwise
   */
  public hasDetailRange(): boolean {
    return this.hasDetail() && this.detail instanceof Range;
  }

  /**
   * @returns the `detail` property value as a CodeableConcept object if defined; else undefined
   */
  public getDetailCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.detail)) {
      return undefined;
    }
    if (!(this.detail instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Goal.target.detail[x]: Expected CodeableConcept but encountered ${this.detail.fhirType()}`,
      );
    }
    return this.detail;
  }

  /**
   * @returns `true` if the `detail` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasDetailCodeableConcept(): boolean {
    return this.hasDetail() && this.detail instanceof CodeableConcept;
  }

  /**
   * @returns the `detail` property value as a StringType object if defined; else undefined
   */
  public getDetailStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.detail)) {
      return undefined;
    }
    if (!(this.detail instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Goal.target.detail[x]: Expected StringType but encountered ${this.detail.fhirType()}`,
      );
    }
    return this.detail;
  }

  /**
   * @returns `true` if the `detail` property exists as a StringType and has a value; `false` otherwise
   */
  public hasDetailStringType(): boolean {
    return this.hasDetail() && this.detail instanceof StringType;
  }

  /**
   * @returns the `detail` property value as a BooleanType object if defined; else undefined
   */
  public getDetailBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.detail)) {
      return undefined;
    }
    if (!(this.detail instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Goal.target.detail[x]: Expected BooleanType but encountered ${this.detail.fhirType()}`,
      );
    }
    return this.detail;
  }

  /**
   * @returns `true` if the `detail` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasDetailBooleanType(): boolean {
    return this.hasDetail() && this.detail instanceof BooleanType;
  }

  /**
   * @returns the `detail` property value as a IntegerType object if defined; else undefined
   */
  public getDetailIntegerType(): IntegerType | undefined {
    if (!isDefined<IDataType | undefined>(this.detail)) {
      return undefined;
    }
    if (!(this.detail instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Goal.target.detail[x]: Expected IntegerType but encountered ${this.detail.fhirType()}`,
      );
    }
    return this.detail;
  }

  /**
   * @returns `true` if the `detail` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasDetailIntegerType(): boolean {
    return this.hasDetail() && this.detail instanceof IntegerType;
  }

  /**
   * @returns the `detail` property value as a Ratio object if defined; else undefined
   */
  public getDetailRatio(): Ratio | undefined {
    if (!isDefined<IDataType | undefined>(this.detail)) {
      return undefined;
    }
    if (!(this.detail instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for Goal.target.detail[x]: Expected Ratio but encountered ${this.detail.fhirType()}`,
      );
    }
    return this.detail;
  }

  /**
   * @returns `true` if the `detail` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasDetailRatio(): boolean {
    return this.hasDetail() && this.detail instanceof Ratio;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `due` property value as a DataType object if defined; else undefined
   */
  public getDue(): IDataType | undefined {
    return this.due;
  }

  /**
   * Assigns the provided DataType object value to the `due` property.
   *
   * @decorator `@ChoiceDataTypes('Goal.target.due[x]')`
   *
   * @param value - the `due` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Goal.target.due[x]')
  public setDue(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.due = value;
    } else {
      this.due = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `due` property exists and has a value; `false` otherwise
   */
  public hasDue(): boolean {
    return isDefined<IDataType>(this.due) && !this.due.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `due` property value as a DateType object if defined; else undefined
   */
  public getDueDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.due)) {
      return undefined;
    }
    if (!(this.due instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Goal.target.due[x]: Expected DateType but encountered ${this.due.fhirType()}`,
      );
    }
    return this.due;
  }

  /**
   * @returns `true` if the `due` property exists as a DateType and has a value; `false` otherwise
   */
  public hasDueDateType(): boolean {
    return this.hasDue() && this.due instanceof DateType;
  }

  /**
   * @returns the `due` property value as a Duration object if defined; else undefined
   */
  public getDueDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.due)) {
      return undefined;
    }
    if (!(this.due instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for Goal.target.due[x]: Expected Duration but encountered ${this.due.fhirType()}`,
      );
    }
    return this.due;
  }

  /**
   * @returns `true` if the `due` property exists as a Duration and has a value; `false` otherwise
   */
  public hasDueDuration(): boolean {
    return this.hasDue() && this.due instanceof Duration;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Goal.target';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.measure,
      this.detail,
      this.due,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GoalTargetComponent {
    const dest = new GoalTargetComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GoalTargetComponent): void {
    super.copyValues(dest);
    dest.measure = this.measure?.copy();
    dest.detail = this.detail?.copy() as IDataType;
    dest.due = this.due?.copy() as IDataType;
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

    if (this.hasMeasure()) {
      setFhirComplexJson(this.getMeasure(), 'measure', jsonObj);
    }

    if (this.hasDetail()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDetail()!, 'detail', jsonObj);
    }

    if (this.hasDue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDue()!, 'due', jsonObj);
    }

    return jsonObj;
  }
}
