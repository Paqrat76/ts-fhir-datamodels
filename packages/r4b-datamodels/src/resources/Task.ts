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
 * Task Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Task
 * StructureDefinition.name: Task
 * StructureDefinition.description: A task to be performed.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  Base64BinaryType,
  BooleanType,
  CanonicalType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DateType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  IdType,
  InstantType,
  IntegerType,
  InvalidTypeError,
  JSON,
  MarkdownType,
  OidType,
  PositiveIntType,
  PrimitiveType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  TimeType,
  UnsignedIntType,
  UriType,
  UrlType,
  UuidType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCanonical,
  fhirCanonicalSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirPositiveInt,
  fhirPositiveIntSchema,
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Address, Age, Annotation, Attachment, CodeableConcept, Coding, ContactDetail, ContactPoint, Contributor, Count, DataRequirement, Distance, Dosage, Duration, Expression, HumanName, Identifier, Meta, Money, PARSABLE_DATATYPE_MAP, ParameterDefinition, Period, Quantity, Range, Ratio, Reference, RelatedArtifact, SampledData, Signature, Timing, TriggerDefinition, UsageContext } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { RequestPriorityEnum } from '../code-systems/RequestPriorityEnum';
import { TaskStatusEnum } from '../code-systems/TaskStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Task Class
 *
 * @remarks
 * A task to be performed.
 *
 * **FHIR Specification**
 * - **Short:** A task to be performed
 * - **Definition:** A task to be performed.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR Task](http://hl7.org/fhir/StructureDefinition/Task)
 */
export class Task extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, intent: CodeType | fhirCode | null = null) {
    super();

    this.taskStatusEnum = new TaskStatusEnum();
    this.requestPriorityEnum = new RequestPriorityEnum();

    this.status = constructorCodeValueAsEnumCodeType<TaskStatusEnum>(
      status,
      TaskStatusEnum,
      this.taskStatusEnum,
      'Task.status',
    );

    this.intent = null;
    if (isDefined<CodeType | fhirCode>(intent)) {
      if (intent instanceof PrimitiveType) {
        this.setIntentElement(intent);
      } else {
        this.setIntent(intent);
      }
    }
  }

  /**
   * Parse the provided `Task` JSON to instantiate the Task data model.
   *
   * @param sourceJson - JSON representing FHIR `Task`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Task
   * @returns Task data model or undefined for `Task`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Task | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Task';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Task();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Task');
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

    fieldName = 'instantiatesCanonical';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setInstantiatesCanonicalElement(datatype);
    }

    fieldName = 'instantiatesUri';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setInstantiatesUriElement(datatype);
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

    fieldName = 'groupIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGroupIdentifier(datatype);
    }

    fieldName = 'partOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPartOf(datatype);
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

    fieldName = 'businessStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBusinessStatus(datatype);
    }

    fieldName = 'intent';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setIntentElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setPriorityElement(datatype);
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

    fieldName = 'focus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFocus(datatype);
    }

    fieldName = 'for';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFor(datatype);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'executionPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setExecutionPeriod(datatype);
    }

    fieldName = 'authoredOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setAuthoredOnElement(datatype);
    }

    fieldName = 'lastModified';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setLastModifiedElement(datatype);
    }

    fieldName = 'requester';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequester(datatype);
    }

    fieldName = 'performerType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPerformerType(datatype);
        }
      });
    }

    fieldName = 'owner';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOwner(datatype);
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    fieldName = 'reasonCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReasonCode(datatype);
    }

    fieldName = 'reasonReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReasonReference(datatype);
    }

    fieldName = 'insurance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addInsurance(datatype);
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

    fieldName = 'relevantHistory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRelevantHistory(datatype);
        }
      });
  }

    fieldName = 'restriction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TaskRestrictionComponent | undefined = TaskRestrictionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRestriction(component);
    }

    fieldName = 'input';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TaskInputComponent | undefined = TaskInputComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addInput(component);
        }
      });
    }

    fieldName = 'output';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TaskOutputComponent | undefined = TaskOutputComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addOutput(component);
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
   * Task.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Task Instance Identifier
   * - **Definition:** The business identifier for this task.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Task.instantiatesCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Formal definition of task
   * - **Definition:** The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
   * - **Requirements:** Enables a formal definition of how he task is to be performed, enabling automation.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesCanonical?: CanonicalType | undefined;

  /**
   * Task.instantiatesUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Formal definition of task
   * - **Definition:** The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
   * - **Requirements:** Enables a formal definition of how he task is to be performed (e.g. using BPMN, BPEL, XPDL or other formal notation to be associated with a task), enabling automation.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesUri?: UriType | undefined;

  /**
   * Task.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request fulfilled by this task
   * - **Definition:** BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basedOn?: Reference[] | undefined;

  /**
   * Task.groupIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Requisition or grouper id
   * - **Definition:** An identifier that links together multiple tasks and other requests that were created in the same context.
   * - **Requirements:** Billing and/or reporting can be linked to whether multiple requests were created as a single unit.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private groupIdentifier?: Identifier | undefined;

  /**
   * Task.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Composite task
   * - **Definition:** Task that this particular task is part of.
   * - **Comment:** This should usually be 0..1.
   * - **Requirements:** Allows tasks to be broken down into sub-steps (and this division can occur independent of the original task).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Task',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private partOf?: Reference[] | undefined;

  /**
   * FHIR CodeSystem: TaskStatus
   *
   * @see {@link TaskStatusEnum }
   */
  private readonly taskStatusEnum: TaskStatusEnum;

  /**
   * Task.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | requested | received | accepted | +
   * - **Definition:** The current status of the task.
   * - **Requirements:** These states enable coordination of task status with off-the-shelf workflow solutions that support automation of tasks.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link TaskStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Task.statusReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for current status
   * - **Definition:** An explanation as to why this task is held, failed, was refused, etc.
   * - **Comment:** This applies to the current status.  Look at the history of the task to see reasons for past statuses.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private statusReason?: CodeableConcept | undefined;

  /**
   * Task.businessStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** E.g. "Specimen collected", "IV prepped"
   * - **Definition:** Contains business-specific nuances of the business state.
   * - **Requirements:** There\'s often a need to track substates of a task - this is often variable by specific workflow implementation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private businessStatus?: CodeableConcept | undefined;

  /**
   * Task.intent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
   * - **Definition:** Indicates the "level" of actionability associated with the Task, i.e. i+R[9]Cs this a proposed task, a planned task, an actionable task, etc.
   * - **Comment:** This element is immutable.  Proposed tasks, planned tasks, etc. must be distinct instances. In most cases, Tasks will have an intent of "order".
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private intent: CodeType | null;

  /**
   * FHIR CodeSystem: RequestPriority
   *
   * @see {@link RequestPriorityEnum }
   */
  private readonly requestPriorityEnum: RequestPriorityEnum;

  /**
   * Task.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** routine | urgent | asap | stat
   * - **Definition:** Indicates how quickly the Task should be addressed with respect to other requests.
   * - **Requirements:** Used to identify the service level expected while performing a task.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  private priority?: EnumCodeType | undefined;

  /**
   * Task.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Task Type
   * - **Definition:** A name or code (or both) briefly describing what the task involves.
   * - **Comment:** The title (eg "My Tasks", "Outstanding Tasks for Patient X") should go into the code.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * Task.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human-readable explanation of task
   * - **Definition:** A free-text description of what is to be performed.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * Task.focus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What task is acting on
   * - **Definition:** The request being actioned or the resource being manipulated by this task.
   * - **Comment:** If multiple resources need to be manipulated, use sub-tasks.  (This ensures that status can be tracked independently for each referenced resource.).
   * - **Requirements:** Used to identify the thing to be done.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private focus?: Reference | undefined;

  /**
   * Task.for Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Beneficiary of the Task
   * - **Definition:** The entity who benefits from the performance of the service specified in the task (e.g., the patient).
   * - **Requirements:** Used to track tasks outstanding for a beneficiary.  Do not use to track the task owner or creator (see owner and creator respectively).  This can also affect access control.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private for_?: Reference | undefined;

  /**
   * Task.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Healthcare event during which this task originated
   * - **Definition:** The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
   * - **Requirements:** For some tasks it may be important to know the link between the encounter the task originated within.
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
   * Task.executionPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Start and end time of execution
   * - **Definition:** Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private executionPeriod?: Period | undefined;

  /**
   * Task.authoredOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Task Creation Date
   * - **Definition:** The date and time this task was created.
   * - **Requirements:** Most often used along with lastUpdated to track duration of task to supporting monitoring and management.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authoredOn?: DateTimeType | undefined;

  /**
   * Task.lastModified Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Task Last Modified Date
   * - **Definition:** The date and time of last modification to this task.
   * - **Requirements:** Used along with history to track task activity and time in a particular task state.  This enables monitoring and management.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private lastModified?: DateTimeType | undefined;

  /**
   * Task.requester Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is asking for task to be done
   * - **Definition:** The creator of the task.
   * - **Requirements:** Identifies who created this task.  May be used by access control mechanisms (e.g., to ensure that only the creator can cancel a task).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private requester?: Reference | undefined;

  /**
   * Task.performerType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Requested performer
   * - **Definition:** The kind of participant that should perform the task.
   * - **Requirements:** Use to distinguish tasks on different activity queues.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performerType?: CodeableConcept[] | undefined;

  /**
   * Task.owner Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Responsible individual
   * - **Definition:** Individual organization or Device currently responsible for task execution.
   * - **Comment:** Tasks may be created with an owner not yet identified.
   * - **Requirements:** Identifies who is expected to perform this task.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private owner?: Reference | undefined;

  /**
   * Task.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where task occurs
   * - **Definition:** Principal physical location where the this task is performed.
   * - **Requirements:** Ties the event to where the records are likely kept and provides context around the event occurrence (e.g. if it occurred inside or outside a dedicated healthcare setting).
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
   * Task.reasonCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why task is needed
   * - **Definition:** A description or code indicating why this task needs to be performed.
   * - **Comment:** This should only be included if there is no focus or if it differs from the reason indicated on the focus.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonCode?: CodeableConcept | undefined;

  /**
   * Task.reasonReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why task is needed
   * - **Definition:** A resource reference indicating why this task needs to be performed.
   * - **Comment:** Tasks might be justified based on an Observation, a Condition, a past or planned procedure, etc.   This should only be included if there is no focus or if it differs from the reason indicated on the focus.    Use the CodeableConcept text element in `Task.reasonCode` if the data is free (uncoded) text.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonReference?: Reference | undefined;

  /**
   * Task.insurance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Associated insurance coverage
   * - **Definition:** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Coverage',
   *       'http://hl7.org/fhir/StructureDefinition/ClaimResponse',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private insurance?: Reference[] | undefined;

  /**
   * Task.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments made about the task
   * - **Definition:** Free-text information captured about the task as it progresses.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Task.relevantHistory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Key events in history of the Task
   * - **Definition:** Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task.
   * - **Comment:** This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Provenance',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relevantHistory?: Reference[] | undefined;

  /**
   * Task.restriction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Constraints on fulfillment tasks
   * - **Definition:** If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
   * - **Requirements:** Sometimes when fulfillment is sought, you don\'t want full fulfillment.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private restriction?: TaskRestrictionComponent | undefined;

  /**
   * Task.input Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information used to perform task
   * - **Definition:** Additional information that may be needed in the execution of the task.
   * - **Requirements:** Resources and data used to perform the task.  This data is used in the business logic of task execution, and is stored separately because it varies between workflows.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private input?: TaskInputComponent[] | undefined;

  /**
   * Task.output Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information produced as part of task
   * - **Definition:** Outputs produced by the Task.
   * - **Requirements:** Resources and data produced during the execution the task.  This data is generated by the business logic of task execution, and is stored separately because it varies between workflows.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private output?: TaskOutputComponent[] | undefined;

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
      const optErrMsg = `Invalid Task.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Task.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `instantiatesCanonical` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getInstantiatesCanonicalElement(): CanonicalType {
    return this.instantiatesCanonical ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `instantiatesCanonical` property.
   *
   * @param element - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonicalElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid Task.instantiatesCanonical; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.instantiatesCanonical = element;
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonicalElement(): boolean {
    return isDefined<CanonicalType>(this.instantiatesCanonical) && !this.instantiatesCanonical.isEmpty();
  }

  /**
   * @returns the `instantiatesCanonical` property value as a fhirCanonical if defined; else undefined
   */
  public getInstantiatesCanonical(): fhirCanonical | undefined {
    return this.instantiatesCanonical?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `instantiatesCanonical` property.
   *
   * @param value - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonical(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid Task.instantiatesCanonical (${String(value)})`;
      this.instantiatesCanonical = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonical(): boolean {
    return this.hasInstantiatesCanonicalElement();
  }

  /**
   * @returns the `instantiatesUri` property value as a UriType object if defined; else an empty UriType object
   */
  public getInstantiatesUriElement(): UriType {
    return this.instantiatesUri ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `instantiatesUri` property.
   *
   * @param element - the `instantiatesUri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUriElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Task.instantiatesUri; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.instantiatesUri = element;
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUriElement(): boolean {
    return isDefined<UriType>(this.instantiatesUri) && !this.instantiatesUri.isEmpty();
  }

  /**
   * @returns the `instantiatesUri` property value as a fhirUri if defined; else undefined
   */
  public getInstantiatesUri(): fhirUri | undefined {
    return this.instantiatesUri?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `instantiatesUri` property.
   *
   * @param value - the `instantiatesUri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUri(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Task.instantiatesUri (${String(value)})`;
      this.instantiatesUri = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUri(): boolean {
    return this.hasInstantiatesUriElement();
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
   * @decorator `@ReferenceTargets('Task.basedOn', ['Resource',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.basedOn', [
    'Resource',
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
   * @decorator `@ReferenceTargets('Task.basedOn', ['Resource',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.basedOn', [
    'Resource',
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
   * @returns the `groupIdentifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getGroupIdentifier(): Identifier {
    return this.groupIdentifier ?? new Identifier();
  }

  /**
   * Assigns the provided GroupIdentifier object value to the `groupIdentifier` property.
   *
   * @param value - the `groupIdentifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGroupIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid Task.groupIdentifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.groupIdentifier = value;
    } else {
      this.groupIdentifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `groupIdentifier` property exists and has a value; `false` otherwise
   */
  public hasGroupIdentifier(): boolean {
    return isDefined<Identifier>(this.groupIdentifier) && !this.groupIdentifier.isEmpty();
  }

  /**
   * @returns the `partOf` property value as a Reference array
   */
  public getPartOf(): Reference[] {
    return this.partOf ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `partOf` property.
   *
   * @decorator `@ReferenceTargets('Task.partOf', ['Task',])`
   *
   * @param value - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.partOf', [
    'Task',
  ])
  public setPartOf(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.partOf = value;
    } else {
      this.partOf = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `partOf` array property.
   *
   * @decorator `@ReferenceTargets('Task.partOf', ['Task',])`
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.partOf', [
    'Task',
  ])
  public addPartOf(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPartOf();
      this.partOf?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `partOf` property exists and has a value; `false` otherwise
   */
  public hasPartOf(): boolean {
    return isDefinedList<Reference>(this.partOf) && this.partOf.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `partOf` property
   */
  private initPartOf(): void {
    if (!this.hasPartOf()) {
      this.partOf = [] as Reference[];
    }
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link TaskStatusEnum }
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
   * @see CodeSystem Enumeration: {@link TaskStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `Task.status is required`);
    const errMsgPrefix = `Invalid Task.status`;
    assertEnumCodeType<TaskStatusEnum>(enumType, TaskStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link TaskStatusEnum }
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
   * @see CodeSystem Enumeration: {@link TaskStatusEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Task.status is required`);
    const optErrMsg = `Invalid Task.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.taskStatusEnum);
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
   * @see CodeSystem Enumeration: {@link TaskStatusEnum }
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
   * @see CodeSystem Enumeration: {@link TaskStatusEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Task.status is required`);
    const optErrMsg = `Invalid Task.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.taskStatusEnum);
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
      const optErrMsg = `Invalid Task.statusReason; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `businessStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getBusinessStatus(): CodeableConcept {
    return this.businessStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided BusinessStatus object value to the `businessStatus` property.
   *
   * @param value - the `businessStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBusinessStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Task.businessStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.businessStatus = value;
    } else {
      this.businessStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `businessStatus` property exists and has a value; `false` otherwise
   */
  public hasBusinessStatus(): boolean {
    return isDefined<CodeableConcept>(this.businessStatus) && !this.businessStatus.isEmpty();
  }

  /**
   * @returns the `intent` property value as a CodeType object if defined; else null
   */
  public getIntentElement(): CodeType | null {
    return this.intent;
  }

  /**
   * Assigns the provided PrimitiveType value to the `intent` property.
   *
   * @param element - the `intent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIntentElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Task.intent is required`);
    const optErrMsg = `Invalid Task.intent; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.intent = element;
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntentElement(): boolean {
    return isDefined<CodeType>(this.intent) && !this.intent.isEmpty();
  }

  /**
   * @returns the `intent` property value as a fhirCode if defined; else null
   */
  public getIntent(): fhirCode | null {
    if (this.intent?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.intent.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `intent` property.
   *
   * @param value - the `intent` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIntent(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Task.intent is required`);
    const optErrMsg = `Invalid Task.intent (${String(value)})`;
    this.intent = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntent(): boolean {
    return this.hasIntentElement();
  }

  /**
   * @returns the `priority` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriorityEnumType(): EnumCodeType | undefined {
    return this.priority;
  }

  /**
   * Assigns the provided EnumCodeType value to the `priority` property.
   *
   * @param enumType - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriorityEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Task.priority';
      assertEnumCodeType<RequestPriorityEnum>(enumType, RequestPriorityEnum, errMsgPrefix);
      this.priority = enumType;
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriorityEnumType(): boolean {
    return isDefined<EnumCodeType>(this.priority) && !this.priority.isEmpty() && this.priority.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `priority` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriorityElement(): CodeType | undefined {
    if (this.priority === undefined) {
      return undefined;
    }
    return this.priority as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `priority` property.
   *
   * @param element - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriorityElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Task.priority; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.priority = new EnumCodeType(element, this.requestPriorityEnum);
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriorityElement(): boolean {
    return this.hasPriorityEnumType();
  }

  /**
   * @returns the `priority` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriority(): fhirCode | undefined {
    if (this.priority === undefined) {
      return undefined;
    }
    return this.priority.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `priority` property.
   *
   * @param value - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriority(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Task.priority; Provided value is not an instance of fhirCode.`;
      this.priority = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.requestPriorityEnum);
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriority(): boolean {
    return this.hasPriorityEnumType();
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
      const optErrMsg = `Invalid Task.code; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Task.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Task.description (${String(value)})`;
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
   * @returns the `focus` property value as a Reference object; else an empty Reference object
   */
  public getFocus(): Reference {
    return this.focus ?? new Reference();
  }

  /**
   * Assigns the provided Focus object value to the `focus` property.
   *
   * @decorator `@ReferenceTargets('Task.focus', ['Resource',])`
   *
   * @param value - the `focus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.focus', [
    'Resource',
  ])
  public setFocus(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.focus = value;
    } else {
      this.focus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `focus` property exists and has a value; `false` otherwise
   */
  public hasFocus(): boolean {
    return isDefined<Reference>(this.focus) && !this.focus.isEmpty();
  }

  /**
   * @returns the `for_` property value as a Reference object; else an empty Reference object
   */
  public getFor(): Reference {
    return this.for_ ?? new Reference();
  }

  /**
   * Assigns the provided For object value to the `for_` property.
   *
   * @decorator `@ReferenceTargets('Task.for', ['Resource',])`
   *
   * @param value - the `for_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.for', [
    'Resource',
  ])
  public setFor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.for_ = value;
    } else {
      this.for_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `for_` property exists and has a value; `false` otherwise
   */
  public hasFor(): boolean {
    return isDefined<Reference>(this.for_) && !this.for_.isEmpty();
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
   * @decorator `@ReferenceTargets('Task.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.encounter', [
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
   * @returns the `executionPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getExecutionPeriod(): Period {
    return this.executionPeriod ?? new Period();
  }

  /**
   * Assigns the provided ExecutionPeriod object value to the `executionPeriod` property.
   *
   * @param value - the `executionPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExecutionPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Task.executionPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.executionPeriod = value;
    } else {
      this.executionPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `executionPeriod` property exists and has a value; `false` otherwise
   */
  public hasExecutionPeriod(): boolean {
    return isDefined<Period>(this.executionPeriod) && !this.executionPeriod.isEmpty();
  }

  /**
   * @returns the `authoredOn` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getAuthoredOnElement(): DateTimeType {
    return this.authoredOn ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `authoredOn` property.
   *
   * @param element - the `authoredOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthoredOnElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Task.authoredOn; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.authoredOn = element;
    } else {
      this.authoredOn = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authoredOn` property exists and has a value; `false` otherwise
   */
  public hasAuthoredOnElement(): boolean {
    return isDefined<DateTimeType>(this.authoredOn) && !this.authoredOn.isEmpty();
  }

  /**
   * @returns the `authoredOn` property value as a fhirDateTime if defined; else undefined
   */
  public getAuthoredOn(): fhirDateTime | undefined {
    return this.authoredOn?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `authoredOn` property.
   *
   * @param value - the `authoredOn` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthoredOn(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Task.authoredOn (${String(value)})`;
      this.authoredOn = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.authoredOn = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authoredOn` property exists and has a value; `false` otherwise
   */
  public hasAuthoredOn(): boolean {
    return this.hasAuthoredOnElement();
  }

  /**
   * @returns the `lastModified` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getLastModifiedElement(): DateTimeType {
    return this.lastModified ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lastModified` property.
   *
   * @param element - the `lastModified` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastModifiedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Task.lastModified; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.lastModified = element;
    } else {
      this.lastModified = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastModified` property exists and has a value; `false` otherwise
   */
  public hasLastModifiedElement(): boolean {
    return isDefined<DateTimeType>(this.lastModified) && !this.lastModified.isEmpty();
  }

  /**
   * @returns the `lastModified` property value as a fhirDateTime if defined; else undefined
   */
  public getLastModified(): fhirDateTime | undefined {
    return this.lastModified?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lastModified` property.
   *
   * @param value - the `lastModified` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastModified(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Task.lastModified (${String(value)})`;
      this.lastModified = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.lastModified = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastModified` property exists and has a value; `false` otherwise
   */
  public hasLastModified(): boolean {
    return this.hasLastModifiedElement();
  }

  /**
   * @returns the `requester` property value as a Reference object; else an empty Reference object
   */
  public getRequester(): Reference {
    return this.requester ?? new Reference();
  }

  /**
   * Assigns the provided Requester object value to the `requester` property.
   *
   * @decorator `@ReferenceTargets('Task.requester', ['Device','Organization','Patient','Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `requester` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.requester', [
    'Device',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  ])
  public setRequester(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.requester = value;
    } else {
      this.requester = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requester` property exists and has a value; `false` otherwise
   */
  public hasRequester(): boolean {
    return isDefined<Reference>(this.requester) && !this.requester.isEmpty();
  }

  /**
   * @returns the `performerType` property value as a CodeableConcept array
   */
  public getPerformerType(): CodeableConcept[] {
    return this.performerType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `performerType` property.
   *
   * @param value - the `performerType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformerType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Task.performerType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.performerType = value;
    } else {
      this.performerType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `performerType` array property.
   *
   * @param value - the `performerType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformerType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Task.performerType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPerformerType();
      this.performerType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performerType` property exists and has a value; `false` otherwise
   */
  public hasPerformerType(): boolean {
    return isDefinedList<CodeableConcept>(this.performerType) && this.performerType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `performerType` property
   */
  private initPerformerType(): void {
    if(!this.hasPerformerType()) {
      this.performerType = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `owner` property value as a Reference object; else an empty Reference object
   */
  public getOwner(): Reference {
    return this.owner ?? new Reference();
  }

  /**
   * Assigns the provided Owner object value to the `owner` property.
   *
   * @decorator `@ReferenceTargets('Task.owner', ['Practitioner','PractitionerRole','Organization','CareTeam','HealthcareService','Patient','Device','RelatedPerson',])`
   *
   * @param value - the `owner` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.owner', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'CareTeam',
  
    'HealthcareService',
  
    'Patient',
  
    'Device',
  
    'RelatedPerson',
  ])
  public setOwner(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.owner = value;
    } else {
      this.owner = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `owner` property exists and has a value; `false` otherwise
   */
  public hasOwner(): boolean {
    return isDefined<Reference>(this.owner) && !this.owner.isEmpty();
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
   * @decorator `@ReferenceTargets('Task.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.location', [
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
   * @returns the `reasonCode` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getReasonCode(): CodeableConcept {
    return this.reasonCode ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ReasonCode object value to the `reasonCode` property.
   *
   * @param value - the `reasonCode` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReasonCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Task.reasonCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reasonCode = value;
    } else {
      this.reasonCode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonCode` property exists and has a value; `false` otherwise
   */
  public hasReasonCode(): boolean {
    return isDefined<CodeableConcept>(this.reasonCode) && !this.reasonCode.isEmpty();
  }

  /**
   * @returns the `reasonReference` property value as a Reference object; else an empty Reference object
   */
  public getReasonReference(): Reference {
    return this.reasonReference ?? new Reference();
  }

  /**
   * Assigns the provided ReasonReference object value to the `reasonReference` property.
   *
   * @decorator `@ReferenceTargets('Task.reasonReference', ['Resource',])`
   *
   * @param value - the `reasonReference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.reasonReference', [
    'Resource',
  ])
  public setReasonReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reasonReference = value;
    } else {
      this.reasonReference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonReference` property exists and has a value; `false` otherwise
   */
  public hasReasonReference(): boolean {
    return isDefined<Reference>(this.reasonReference) && !this.reasonReference.isEmpty();
  }

  /**
   * @returns the `insurance` property value as a Reference array
   */
  public getInsurance(): Reference[] {
    return this.insurance ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `insurance` property.
   *
   * @decorator `@ReferenceTargets('Task.insurance', ['Coverage','ClaimResponse',])`
   *
   * @param value - the `insurance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.insurance', [
    'Coverage',
  
    'ClaimResponse',
  ])
  public setInsurance(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.insurance = value;
    } else {
      this.insurance = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `insurance` array property.
   *
   * @decorator `@ReferenceTargets('Task.insurance', ['Coverage','ClaimResponse',])`
   *
   * @param value - the `insurance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.insurance', [
    'Coverage',
  
    'ClaimResponse',
  ])
  public addInsurance(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initInsurance();
      this.insurance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `insurance` property exists and has a value; `false` otherwise
   */
  public hasInsurance(): boolean {
    return isDefinedList<Reference>(this.insurance) && this.insurance.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `insurance` property
   */
  private initInsurance(): void {
    if (!this.hasInsurance()) {
      this.insurance = [] as Reference[];
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
      const optErrMsg = `Invalid Task.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Task.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `relevantHistory` property value as a Reference array
   */
  public getRelevantHistory(): Reference[] {
    return this.relevantHistory ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `relevantHistory` property.
   *
   * @decorator `@ReferenceTargets('Task.relevantHistory', ['Provenance',])`
   *
   * @param value - the `relevantHistory` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.relevantHistory', [
    'Provenance',
  ])
  public setRelevantHistory(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.relevantHistory = value;
    } else {
      this.relevantHistory = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `relevantHistory` array property.
   *
   * @decorator `@ReferenceTargets('Task.relevantHistory', ['Provenance',])`
   *
   * @param value - the `relevantHistory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.relevantHistory', [
    'Provenance',
  ])
  public addRelevantHistory(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRelevantHistory();
      this.relevantHistory?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relevantHistory` property exists and has a value; `false` otherwise
   */
  public hasRelevantHistory(): boolean {
    return isDefinedList<Reference>(this.relevantHistory) && this.relevantHistory.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `relevantHistory` property
   */
  private initRelevantHistory(): void {
    if (!this.hasRelevantHistory()) {
      this.relevantHistory = [] as Reference[];
    }
  }

  /**
   * @returns the `restriction` property value as a TaskRestrictionComponent object if defined; else an empty TaskRestrictionComponent object
   */
  public getRestriction(): TaskRestrictionComponent {
    return this.restriction ?? new TaskRestrictionComponent();
  }

  /**
   * Assigns the provided Restriction object value to the `restriction` property.
   *
   * @param value - the `restriction` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRestriction(value: TaskRestrictionComponent | undefined): this {
    if (isDefined<TaskRestrictionComponent>(value)) {
      const optErrMsg = `Invalid Task.restriction; Provided element is not an instance of TaskRestrictionComponent.`;
      assertFhirType<TaskRestrictionComponent>(value, TaskRestrictionComponent, optErrMsg);
      this.restriction = value;
    } else {
      this.restriction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `restriction` property exists and has a value; `false` otherwise
   */
  public hasRestriction(): boolean {
    return isDefined<TaskRestrictionComponent>(this.restriction) && !this.restriction.isEmpty();
  }

  /**
   * @returns the `input` property value as a TaskInputComponent array
   */
  public getInput(): TaskInputComponent[] {
    return this.input ?? ([] as TaskInputComponent[]);
  }

  /**
   * Assigns the provided TaskInputComponent array value to the `input` property.
   *
   * @param value - the `input` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInput(value: TaskInputComponent[] | undefined): this {
    if (isDefinedList<TaskInputComponent>(value)) {
      const optErrMsg = `Invalid Task.input; Provided value array has an element that is not an instance of TaskInputComponent.`;
      assertFhirTypeList<TaskInputComponent>(value, TaskInputComponent, optErrMsg);
      this.input = value;
    } else {
      this.input = undefined;
    }
    return this;
  }

  /**
   * Add the provided TaskInputComponent value to the `input` array property.
   *
   * @param value - the `input` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInput(value: TaskInputComponent | undefined): this {
    if (isDefined<TaskInputComponent>(value)) {
      const optErrMsg = `Invalid Task.input; Provided element is not an instance of TaskInputComponent.`;
      assertFhirType<TaskInputComponent>(value, TaskInputComponent, optErrMsg);
      this.initInput();
      this.input?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `input` property exists and has a value; `false` otherwise
   */
  public hasInput(): boolean {
    return isDefinedList<TaskInputComponent>(this.input) && this.input.some((item: TaskInputComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `input` property
   */
  private initInput(): void {
    if(!this.hasInput()) {
      this.input = [] as TaskInputComponent[];
    }
  }

  /**
   * @returns the `output` property value as a TaskOutputComponent array
   */
  public getOutput(): TaskOutputComponent[] {
    return this.output ?? ([] as TaskOutputComponent[]);
  }

  /**
   * Assigns the provided TaskOutputComponent array value to the `output` property.
   *
   * @param value - the `output` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutput(value: TaskOutputComponent[] | undefined): this {
    if (isDefinedList<TaskOutputComponent>(value)) {
      const optErrMsg = `Invalid Task.output; Provided value array has an element that is not an instance of TaskOutputComponent.`;
      assertFhirTypeList<TaskOutputComponent>(value, TaskOutputComponent, optErrMsg);
      this.output = value;
    } else {
      this.output = undefined;
    }
    return this;
  }

  /**
   * Add the provided TaskOutputComponent value to the `output` array property.
   *
   * @param value - the `output` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOutput(value: TaskOutputComponent | undefined): this {
    if (isDefined<TaskOutputComponent>(value)) {
      const optErrMsg = `Invalid Task.output; Provided element is not an instance of TaskOutputComponent.`;
      assertFhirType<TaskOutputComponent>(value, TaskOutputComponent, optErrMsg);
      this.initOutput();
      this.output?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `output` property exists and has a value; `false` otherwise
   */
  public hasOutput(): boolean {
    return isDefinedList<TaskOutputComponent>(this.output) && this.output.some((item: TaskOutputComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `output` property
   */
  private initOutput(): void {
    if(!this.hasOutput()) {
      this.output = [] as TaskOutputComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Task';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.instantiatesCanonical,
      this.instantiatesUri,
      this.basedOn,
      this.groupIdentifier,
      this.partOf,
      this.status,
      this.statusReason,
      this.businessStatus,
      this.intent,
      this.priority,
      this.code,
      this.description,
      this.focus,
      this.for_,
      this.encounter,
      this.executionPeriod,
      this.authoredOn,
      this.lastModified,
      this.requester,
      this.performerType,
      this.owner,
      this.location,
      this.reasonCode,
      this.reasonReference,
      this.insurance,
      this.note,
      this.relevantHistory,
      this.restriction,
      this.input,
      this.output,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Task {
    const dest = new Task();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Task): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.instantiatesCanonical = this.instantiatesCanonical?.copy();
    dest.instantiatesUri = this.instantiatesUri?.copy();
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    dest.groupIdentifier = this.groupIdentifier?.copy();
    const partOfList = copyListValues<Reference>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    dest.status = this.status ? this.status.copy() : null;
    dest.statusReason = this.statusReason?.copy();
    dest.businessStatus = this.businessStatus?.copy();
    dest.intent = this.intent ? this.intent.copy() : null;
    dest.priority = this.priority?.copy();
    dest.code = this.code?.copy();
    dest.description = this.description?.copy();
    dest.focus = this.focus?.copy();
    dest.for_ = this.for_?.copy();
    dest.encounter = this.encounter?.copy();
    dest.executionPeriod = this.executionPeriod?.copy();
    dest.authoredOn = this.authoredOn?.copy();
    dest.lastModified = this.lastModified?.copy();
    dest.requester = this.requester?.copy();
    const performerTypeList = copyListValues<CodeableConcept>(this.performerType);
    dest.performerType = performerTypeList.length === 0 ? undefined : performerTypeList;
    dest.owner = this.owner?.copy();
    dest.location = this.location?.copy();
    dest.reasonCode = this.reasonCode?.copy();
    dest.reasonReference = this.reasonReference?.copy();
    const insuranceList = copyListValues<Reference>(this.insurance);
    dest.insurance = insuranceList.length === 0 ? undefined : insuranceList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const relevantHistoryList = copyListValues<Reference>(this.relevantHistory);
    dest.relevantHistory = relevantHistoryList.length === 0 ? undefined : relevantHistoryList;
    dest.restriction = this.restriction?.copy();
    const inputList = copyListValues<TaskInputComponent>(this.input);
    dest.input = inputList.length === 0 ? undefined : inputList;
    const outputList = copyListValues<TaskOutputComponent>(this.output);
    dest.output = outputList.length === 0 ? undefined : outputList;
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

    if (this.hasInstantiatesCanonicalElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getInstantiatesCanonicalElement(), 'instantiatesCanonical', jsonObj);
    }

    if (this.hasInstantiatesUriElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getInstantiatesUriElement(), 'instantiatesUri', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasGroupIdentifier()) {
      setFhirComplexJson(this.getGroupIdentifier(), 'groupIdentifier', jsonObj);
    }

    if (this.hasPartOf()) {
      setFhirComplexListJson(this.getPartOf(), 'partOf', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`Task.status`);
    }

    if (this.hasStatusReason()) {
      setFhirComplexJson(this.getStatusReason(), 'statusReason', jsonObj);
    }

    if (this.hasBusinessStatus()) {
      setFhirComplexJson(this.getBusinessStatus(), 'businessStatus', jsonObj);
    }

    if (this.hasIntentElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getIntentElement()!, 'intent', jsonObj);
    } else {
      missingReqdProperties.push(`Task.intent`);
    }

    if (this.hasPriorityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPriorityElement()!, 'priority', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasFocus()) {
      setFhirComplexJson(this.getFocus(), 'focus', jsonObj);
    }

    if (this.hasFor()) {
      setFhirComplexJson(this.getFor(), 'for', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasExecutionPeriod()) {
      setFhirComplexJson(this.getExecutionPeriod(), 'executionPeriod', jsonObj);
    }

    if (this.hasAuthoredOnElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getAuthoredOnElement(), 'authoredOn', jsonObj);
    }

    if (this.hasLastModifiedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getLastModifiedElement(), 'lastModified', jsonObj);
    }

    if (this.hasRequester()) {
      setFhirComplexJson(this.getRequester(), 'requester', jsonObj);
    }

    if (this.hasPerformerType()) {
      setFhirComplexListJson(this.getPerformerType(), 'performerType', jsonObj);
    }

    if (this.hasOwner()) {
      setFhirComplexJson(this.getOwner(), 'owner', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasReasonCode()) {
      setFhirComplexJson(this.getReasonCode(), 'reasonCode', jsonObj);
    }

    if (this.hasReasonReference()) {
      setFhirComplexJson(this.getReasonReference(), 'reasonReference', jsonObj);
    }

    if (this.hasInsurance()) {
      setFhirComplexListJson(this.getInsurance(), 'insurance', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasRelevantHistory()) {
      setFhirComplexListJson(this.getRelevantHistory(), 'relevantHistory', jsonObj);
    }

    if (this.hasRestriction()) {
      setFhirBackboneElementJson(this.getRestriction(), 'restriction', jsonObj);
    }

    if (this.hasInput()) {
      setFhirBackboneElementListJson(this.getInput(), 'input', jsonObj);
    }

    if (this.hasOutput()) {
      setFhirBackboneElementListJson(this.getOutput(), 'output', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * TaskRestrictionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Constraints on fulfillment tasks
 * - **Definition:** If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
 * - **Requirements:** Sometimes when fulfillment is sought, you don\'t want full fulfillment.
 *
 * @category Data Models: Resource
 * @see [FHIR Task](http://hl7.org/fhir/StructureDefinition/Task)
 */
export class TaskRestrictionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TaskRestrictionComponent` JSON to instantiate the TaskRestrictionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TaskRestrictionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TaskRestrictionComponent
   * @returns TaskRestrictionComponent data model or undefined for `TaskRestrictionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TaskRestrictionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TaskRestrictionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TaskRestrictionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'repetitions';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setRepetitionsElement(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'recipient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRecipient(datatype);
        }
      });
  }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Task.restriction.repetitions Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How many times to repeat
   * - **Definition:** Indicates the number of times the requested action should occur.
   * - **Requirements:** E.g. order that requests monthly lab tests, fulfillment is sought for 1.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private repetitions?: PositiveIntType | undefined;

  /**
   * Task.restriction.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When fulfillment sought
   * - **Definition:** Over what time-period is fulfillment sought.
   * - **Comment:** Note that period.high is the due date representing the time by which the task should be completed.
   * - **Requirements:** E.g. order that authorizes 1 year\'s services.  Fulfillment is sought for next 3 months.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

  /**
   * Task.restriction.recipient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For whom is fulfillment sought?
   * - **Definition:** For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recipient?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `repetitions` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getRepetitionsElement(): PositiveIntType {
    return this.repetitions ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `repetitions` property.
   *
   * @param element - the `repetitions` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRepetitionsElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Task.restriction.repetitions; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.repetitions = element;
    } else {
      this.repetitions = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `repetitions` property exists and has a value; `false` otherwise
   */
  public hasRepetitionsElement(): boolean {
    return isDefined<PositiveIntType>(this.repetitions) && !this.repetitions.isEmpty();
  }

  /**
   * @returns the `repetitions` property value as a fhirPositiveInt if defined; else undefined
   */
  public getRepetitions(): fhirPositiveInt | undefined {
    return this.repetitions?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `repetitions` property.
   *
   * @param value - the `repetitions` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRepetitions(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Task.restriction.repetitions (${String(value)})`;
      this.repetitions = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.repetitions = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `repetitions` property exists and has a value; `false` otherwise
   */
  public hasRepetitions(): boolean {
    return this.hasRepetitionsElement();
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
      const optErrMsg = `Invalid Task.restriction.period; Provided element is not an instance of Period.`;
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
   * @returns the `recipient` property value as a Reference array
   */
  public getRecipient(): Reference[] {
    return this.recipient ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `recipient` property.
   *
   * @decorator `@ReferenceTargets('Task.restriction.recipient', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Group','Organization',])`
   *
   * @param value - the `recipient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.restriction.recipient', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Group',
  
    'Organization',
  ])
  public setRecipient(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.recipient = value;
    } else {
      this.recipient = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `recipient` array property.
   *
   * @decorator `@ReferenceTargets('Task.restriction.recipient', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Group','Organization',])`
   *
   * @param value - the `recipient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Task.restriction.recipient', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Group',
  
    'Organization',
  ])
  public addRecipient(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRecipient();
      this.recipient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `recipient` property exists and has a value; `false` otherwise
   */
  public hasRecipient(): boolean {
    return isDefinedList<Reference>(this.recipient) && this.recipient.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `recipient` property
   */
  private initRecipient(): void {
    if (!this.hasRecipient()) {
      this.recipient = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Task.restriction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.repetitions,
      this.period,
      this.recipient,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TaskRestrictionComponent {
    const dest = new TaskRestrictionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TaskRestrictionComponent): void {
    super.copyValues(dest);
    dest.repetitions = this.repetitions?.copy();
    dest.period = this.period?.copy();
    const recipientList = copyListValues<Reference>(this.recipient);
    dest.recipient = recipientList.length === 0 ? undefined : recipientList;
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

    if (this.hasRepetitionsElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getRepetitionsElement(), 'repetitions', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasRecipient()) {
      setFhirComplexListJson(this.getRecipient(), 'recipient', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TaskInputComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information used to perform task
 * - **Definition:** Additional information that may be needed in the execution of the task.
 * - **Requirements:** Resources and data used to perform the task.  This data is used in the business logic of task execution, and is stored separately because it varies between workflows.
 *
 * @category Data Models: Resource
 * @see [FHIR Task](http://hl7.org/fhir/StructureDefinition/Task)
 */
export class TaskInputComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, value: IDataType | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `TaskInputComponent` JSON to instantiate the TaskInputComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TaskInputComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TaskInputComponent
   * @returns TaskInputComponent data model or undefined for `TaskInputComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TaskInputComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TaskInputComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TaskInputComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = TaskInputComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for TaskInputComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (value === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setValue(value);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Task.input.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for the input
   * - **Definition:** A code or description indicating how the input is intended to be used as part of the task execution.
   * - **Comment:** If referencing a BPMN workflow or Protocol, the "system" is the URL for the workflow definition and the code is the "name" of the required input.
   * - **Requirements:** Inputs are named to enable task automation to bind data and pass it from one task to the next.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * Task.input.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Task.input.value[x]', ['base64Binary','boolean','canonical','code','date','dateTime','decimal','id','instant','integer','markdown','oid','positiveInt','string','time','unsignedInt','uri','url','uuid','Address','Age','Annotation','Attachment','CodeableConcept','Coding','ContactPoint','Count','Distance','Duration','HumanName','Identifier','Money','Period','Quantity','Range','Ratio','Reference','SampledData','Signature','Timing','ContactDetail','Contributor','DataRequirement','Expression','ParameterDefinition','RelatedArtifact','TriggerDefinition','UsageContext','Dosage','Meta',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Content to use in performing the task
   * - **Definition:** The value of the input parameter as a basic type.
   * - **FHIR Types:**
   *     'base64Binary',
   *     'boolean',
   *     'canonical',
   *     'code',
   *     'date',
   *     'dateTime',
   *     'decimal',
   *     'id',
   *     'instant',
   *     'integer',
   *     'markdown',
   *     'oid',
   *     'positiveInt',
   *     'string',
   *     'time',
   *     'unsignedInt',
   *     'uri',
   *     'url',
   *     'uuid',
   *     'Address',
   *     'Age',
   *     'Annotation',
   *     'Attachment',
   *     'CodeableConcept',
   *     'Coding',
   *     'ContactPoint',
   *     'Count',
   *     'Distance',
   *     'Duration',
   *     'HumanName',
   *     'Identifier',
   *     'Money',
   *     'Period',
   *     'Quantity',
   *     'Range',
   *     'Ratio',
   *     'Reference',
   *     'SampledData',
   *     'Signature',
   *     'Timing',
   *     'ContactDetail',
   *     'Contributor',
   *     'DataRequirement',
   *     'Expression',
   *     'ParameterDefinition',
   *     'RelatedArtifact',
   *     'TriggerDefinition',
   *     'UsageContext',
   *     'Dosage',
   *     'Meta',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Task.input.value[x]',[
    'base64Binary',
    'boolean',
    'canonical',
    'code',
    'date',
    'dateTime',
    'decimal',
    'id',
    'instant',
    'integer',
    'markdown',
    'oid',
    'positiveInt',
    'string',
    'time',
    'unsignedInt',
    'uri',
    'url',
    'uuid',
    'Address',
    'Age',
    'Annotation',
    'Attachment',
    'CodeableConcept',
    'Coding',
    'ContactPoint',
    'Count',
    'Distance',
    'Duration',
    'HumanName',
    'Identifier',
    'Money',
    'Period',
    'Quantity',
    'Range',
    'Ratio',
    'Reference',
    'SampledData',
    'Signature',
    'Timing',
    'ContactDetail',
    'Contributor',
    'DataRequirement',
    'Expression',
    'ParameterDefinition',
    'RelatedArtifact',
    'TriggerDefinition',
    'UsageContext',
    'Dosage',
    'Meta',
  ])
  private value: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else null
   */
  public getType(): CodeableConcept | null {
    return this.type_;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Task.input.type is required`);
    const optErrMsg = `Invalid Task.input.type; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.type_ = value;
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefined<CodeableConcept>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('Task.input.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Task.input.value[x]')
  public setValue(value: IDataType): this {
    assertIsDefined<IDataType>(value, `Task.input.value[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.value = value;
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefined<IDataType>(this.value) && !this.value.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `value` property value as a Base64BinaryType object if defined; else null
   */
  public getValueBase64BinaryType(): Base64BinaryType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Base64BinaryType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Base64BinaryType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Base64BinaryType and has a value; `false` otherwise
   */
  public hasValueBase64BinaryType(): boolean {
    return this.hasValue() && this.value instanceof Base64BinaryType;
  }

  /**
   * @returns the `value` property value as a BooleanType object if defined; else null
   */
  public getValueBooleanType(): BooleanType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && this.value instanceof BooleanType;
  }

  /**
   * @returns the `value` property value as a CanonicalType object if defined; else null
   */
  public getValueCanonicalType(): CanonicalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected CanonicalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasValueCanonicalType(): boolean {
    return this.hasValue() && this.value instanceof CanonicalType;
  }

  /**
   * @returns the `value` property value as a CodeType object if defined; else null
   */
  public getValueCodeType(): CodeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected CodeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeType and has a value; `false` otherwise
   */
  public hasValueCodeType(): boolean {
    return this.hasValue() && this.value instanceof CodeType;
  }

  /**
   * @returns the `value` property value as a DateType object if defined; else null
   */
  public getValueDateType(): DateType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateType and has a value; `false` otherwise
   */
  public hasValueDateType(): boolean {
    return this.hasValue() && this.value instanceof DateType;
  }

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else null
   */
  public getValueDateTimeType(): DateTimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasValueDateTimeType(): boolean {
    return this.hasValue() && this.value instanceof DateTimeType;
  }

  /**
   * @returns the `value` property value as a DecimalType object if defined; else null
   */
  public getValueDecimalType(): DecimalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected DecimalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DecimalType and has a value; `false` otherwise
   */
  public hasValueDecimalType(): boolean {
    return this.hasValue() && this.value instanceof DecimalType;
  }

  /**
   * @returns the `value` property value as a IdType object if defined; else null
   */
  public getValueIdType(): IdType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IdType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected IdType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IdType and has a value; `false` otherwise
   */
  public hasValueIdType(): boolean {
    return this.hasValue() && this.value instanceof IdType;
  }

  /**
   * @returns the `value` property value as a InstantType object if defined; else null
   */
  public getValueInstantType(): InstantType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof InstantType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected InstantType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a InstantType and has a value; `false` otherwise
   */
  public hasValueInstantType(): boolean {
    return this.hasValue() && this.value instanceof InstantType;
  }

  /**
   * @returns the `value` property value as a IntegerType object if defined; else null
   */
  public getValueIntegerType(): IntegerType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && this.value instanceof IntegerType;
  }

  /**
   * @returns the `value` property value as a MarkdownType object if defined; else null
   */
  public getValueMarkdownType(): MarkdownType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof MarkdownType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected MarkdownType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a MarkdownType and has a value; `false` otherwise
   */
  public hasValueMarkdownType(): boolean {
    return this.hasValue() && this.value instanceof MarkdownType;
  }

  /**
   * @returns the `value` property value as a OidType object if defined; else null
   */
  public getValueOidType(): OidType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof OidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected OidType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a OidType and has a value; `false` otherwise
   */
  public hasValueOidType(): boolean {
    return this.hasValue() && this.value instanceof OidType;
  }

  /**
   * @returns the `value` property value as a PositiveIntType object if defined; else null
   */
  public getValuePositiveIntType(): PositiveIntType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof PositiveIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected PositiveIntType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a PositiveIntType and has a value; `false` otherwise
   */
  public hasValuePositiveIntType(): boolean {
    return this.hasValue() && this.value instanceof PositiveIntType;
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueStringType(): StringType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && this.value instanceof StringType;
  }

  /**
   * @returns the `value` property value as a TimeType object if defined; else null
   */
  public getValueTimeType(): TimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected TimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasValueTimeType(): boolean {
    return this.hasValue() && this.value instanceof TimeType;
  }

  /**
   * @returns the `value` property value as a UnsignedIntType object if defined; else null
   */
  public getValueUnsignedIntType(): UnsignedIntType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UnsignedIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected UnsignedIntType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UnsignedIntType and has a value; `false` otherwise
   */
  public hasValueUnsignedIntType(): boolean {
    return this.hasValue() && this.value instanceof UnsignedIntType;
  }

  /**
   * @returns the `value` property value as a UriType object if defined; else null
   */
  public getValueUriType(): UriType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected UriType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UriType and has a value; `false` otherwise
   */
  public hasValueUriType(): boolean {
    return this.hasValue() && this.value instanceof UriType;
  }

  /**
   * @returns the `value` property value as a UrlType object if defined; else null
   */
  public getValueUrlType(): UrlType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UrlType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected UrlType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UrlType and has a value; `false` otherwise
   */
  public hasValueUrlType(): boolean {
    return this.hasValue() && this.value instanceof UrlType;
  }

  /**
   * @returns the `value` property value as a UuidType object if defined; else null
   */
  public getValueUuidType(): UuidType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UuidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected UuidType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UuidType and has a value; `false` otherwise
   */
  public hasValueUuidType(): boolean {
    return this.hasValue() && this.value instanceof UuidType;
  }

  /**
   * @returns the `value` property value as a Address object if defined; else null
   */
  public getValueAddress(): Address | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Address)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Address but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Address and has a value; `false` otherwise
   */
  public hasValueAddress(): boolean {
    return this.hasValue() && this.value instanceof Address;
  }

  /**
   * @returns the `value` property value as a Age object if defined; else null
   */
  public getValueAge(): Age | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Age but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Age and has a value; `false` otherwise
   */
  public hasValueAge(): boolean {
    return this.hasValue() && this.value instanceof Age;
  }

  /**
   * @returns the `value` property value as a Annotation object if defined; else null
   */
  public getValueAnnotation(): Annotation | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Annotation)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Annotation but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Annotation and has a value; `false` otherwise
   */
  public hasValueAnnotation(): boolean {
    return this.hasValue() && this.value instanceof Annotation;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else null
   */
  public getValueAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && this.value instanceof Attachment;
  }

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasValueCodeableConcept(): boolean {
    return this.hasValue() && this.value instanceof CodeableConcept;
  }

  /**
   * @returns the `value` property value as a Coding object if defined; else null
   */
  public getValueCoding(): Coding | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Coding but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Coding and has a value; `false` otherwise
   */
  public hasValueCoding(): boolean {
    return this.hasValue() && this.value instanceof Coding;
  }

  /**
   * @returns the `value` property value as a ContactPoint object if defined; else null
   */
  public getValueContactPoint(): ContactPoint | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ContactPoint)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected ContactPoint but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ContactPoint and has a value; `false` otherwise
   */
  public hasValueContactPoint(): boolean {
    return this.hasValue() && this.value instanceof ContactPoint;
  }

  /**
   * @returns the `value` property value as a Count object if defined; else null
   */
  public getValueCount(): Count | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Count)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Count but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Count and has a value; `false` otherwise
   */
  public hasValueCount(): boolean {
    return this.hasValue() && this.value instanceof Count;
  }

  /**
   * @returns the `value` property value as a Distance object if defined; else null
   */
  public getValueDistance(): Distance | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Distance)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Distance but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Distance and has a value; `false` otherwise
   */
  public hasValueDistance(): boolean {
    return this.hasValue() && this.value instanceof Distance;
  }

  /**
   * @returns the `value` property value as a Duration object if defined; else null
   */
  public getValueDuration(): Duration | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Duration but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Duration and has a value; `false` otherwise
   */
  public hasValueDuration(): boolean {
    return this.hasValue() && this.value instanceof Duration;
  }

  /**
   * @returns the `value` property value as a HumanName object if defined; else null
   */
  public getValueHumanName(): HumanName | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof HumanName)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected HumanName but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a HumanName and has a value; `false` otherwise
   */
  public hasValueHumanName(): boolean {
    return this.hasValue() && this.value instanceof HumanName;
  }

  /**
   * @returns the `value` property value as a Identifier object if defined; else null
   */
  public getValueIdentifier(): Identifier | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Identifier)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Identifier but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Identifier and has a value; `false` otherwise
   */
  public hasValueIdentifier(): boolean {
    return this.hasValue() && this.value instanceof Identifier;
  }

  /**
   * @returns the `value` property value as a Money object if defined; else null
   */
  public getValueMoney(): Money | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Money)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Money but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Money and has a value; `false` otherwise
   */
  public hasValueMoney(): boolean {
    return this.hasValue() && this.value instanceof Money;
  }

  /**
   * @returns the `value` property value as a Period object if defined; else null
   */
  public getValuePeriod(): Period | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Period but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Period and has a value; `false` otherwise
   */
  public hasValuePeriod(): boolean {
    return this.hasValue() && this.value instanceof Period;
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else null
   */
  public getValueQuantity(): Quantity | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a Range object if defined; else null
   */
  public getValueRange(): Range | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Range and has a value; `false` otherwise
   */
  public hasValueRange(): boolean {
    return this.hasValue() && this.value instanceof Range;
  }

  /**
   * @returns the `value` property value as a Ratio object if defined; else null
   */
  public getValueRatio(): Ratio | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Ratio but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasValueRatio(): boolean {
    return this.hasValue() && this.value instanceof Ratio;
  }

  /**
   * @returns the `value` property value as a Reference object if defined; else null
   */
  public getValueReference(): Reference | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasValueReference(): boolean {
    return this.hasValue() && this.value instanceof Reference;
  }

  /**
   * @returns the `value` property value as a SampledData object if defined; else null
   */
  public getValueSampledData(): SampledData | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof SampledData)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected SampledData but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a SampledData and has a value; `false` otherwise
   */
  public hasValueSampledData(): boolean {
    return this.hasValue() && this.value instanceof SampledData;
  }

  /**
   * @returns the `value` property value as a Signature object if defined; else null
   */
  public getValueSignature(): Signature | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Signature)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Signature but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Signature and has a value; `false` otherwise
   */
  public hasValueSignature(): boolean {
    return this.hasValue() && this.value instanceof Signature;
  }

  /**
   * @returns the `value` property value as a Timing object if defined; else null
   */
  public getValueTiming(): Timing | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Timing but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Timing and has a value; `false` otherwise
   */
  public hasValueTiming(): boolean {
    return this.hasValue() && this.value instanceof Timing;
  }

  /**
   * @returns the `value` property value as a ContactDetail object if defined; else null
   */
  public getValueContactDetail(): ContactDetail | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ContactDetail)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected ContactDetail but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ContactDetail and has a value; `false` otherwise
   */
  public hasValueContactDetail(): boolean {
    return this.hasValue() && this.value instanceof ContactDetail;
  }

  /**
   * @returns the `value` property value as a Contributor object if defined; else null
   */
  public getValueContributor(): Contributor | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Contributor)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Contributor but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Contributor and has a value; `false` otherwise
   */
  public hasValueContributor(): boolean {
    return this.hasValue() && this.value instanceof Contributor;
  }

  /**
   * @returns the `value` property value as a DataRequirement object if defined; else null
   */
  public getValueDataRequirement(): DataRequirement | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DataRequirement)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected DataRequirement but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DataRequirement and has a value; `false` otherwise
   */
  public hasValueDataRequirement(): boolean {
    return this.hasValue() && this.value instanceof DataRequirement;
  }

  /**
   * @returns the `value` property value as a Expression object if defined; else null
   */
  public getValueExpression(): Expression | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Expression)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Expression but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Expression and has a value; `false` otherwise
   */
  public hasValueExpression(): boolean {
    return this.hasValue() && this.value instanceof Expression;
  }

  /**
   * @returns the `value` property value as a ParameterDefinition object if defined; else null
   */
  public getValueParameterDefinition(): ParameterDefinition | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ParameterDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected ParameterDefinition but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ParameterDefinition and has a value; `false` otherwise
   */
  public hasValueParameterDefinition(): boolean {
    return this.hasValue() && this.value instanceof ParameterDefinition;
  }

  /**
   * @returns the `value` property value as a RelatedArtifact object if defined; else null
   */
  public getValueRelatedArtifact(): RelatedArtifact | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof RelatedArtifact)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected RelatedArtifact but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a RelatedArtifact and has a value; `false` otherwise
   */
  public hasValueRelatedArtifact(): boolean {
    return this.hasValue() && this.value instanceof RelatedArtifact;
  }

  /**
   * @returns the `value` property value as a TriggerDefinition object if defined; else null
   */
  public getValueTriggerDefinition(): TriggerDefinition | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof TriggerDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected TriggerDefinition but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a TriggerDefinition and has a value; `false` otherwise
   */
  public hasValueTriggerDefinition(): boolean {
    return this.hasValue() && this.value instanceof TriggerDefinition;
  }

  /**
   * @returns the `value` property value as a UsageContext object if defined; else null
   */
  public getValueUsageContext(): UsageContext | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UsageContext)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected UsageContext but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UsageContext and has a value; `false` otherwise
   */
  public hasValueUsageContext(): boolean {
    return this.hasValue() && this.value instanceof UsageContext;
  }

  /**
   * @returns the `value` property value as a Dosage object if defined; else null
   */
  public getValueDosage(): Dosage | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Dosage)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Dosage but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Dosage and has a value; `false` otherwise
   */
  public hasValueDosage(): boolean {
    return this.hasValue() && this.value instanceof Dosage;
  }

  /**
   * @returns the `value` property value as a Meta object if defined; else null
   */
  public getValueMeta(): Meta | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Meta)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.input.value[x]: Expected Meta but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Meta and has a value; `false` otherwise
   */
  public hasValueMeta(): boolean {
    return this.hasValue() && this.value instanceof Meta;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Task.input';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TaskInputComponent {
    const dest = new TaskInputComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TaskInputComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.value = this.value ? this.value.copy() as IDataType : null;
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

    if (this.hasType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getType()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`Task.input.type`);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`Task.input.value[x]`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * TaskOutputComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information produced as part of task
 * - **Definition:** Outputs produced by the Task.
 * - **Requirements:** Resources and data produced during the execution the task.  This data is generated by the business logic of task execution, and is stored separately because it varies between workflows.
 *
 * @category Data Models: Resource
 * @see [FHIR Task](http://hl7.org/fhir/StructureDefinition/Task)
 */
export class TaskOutputComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, value: IDataType | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `TaskOutputComponent` JSON to instantiate the TaskOutputComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TaskOutputComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TaskOutputComponent
   * @returns TaskOutputComponent data model or undefined for `TaskOutputComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TaskOutputComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TaskOutputComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TaskOutputComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = TaskOutputComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for TaskOutputComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (value === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setValue(value);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Task.output.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for output
   * - **Definition:** The name of the Output parameter.
   * - **Requirements:** Outputs are named to enable task automation to bind data and pass it from one task to the next.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * Task.output.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Task.output.value[x]', ['base64Binary','boolean','canonical','code','date','dateTime','decimal','id','instant','integer','markdown','oid','positiveInt','string','time','unsignedInt','uri','url','uuid','Address','Age','Annotation','Attachment','CodeableConcept','Coding','ContactPoint','Count','Distance','Duration','HumanName','Identifier','Money','Period','Quantity','Range','Ratio','Reference','SampledData','Signature','Timing','ContactDetail','Contributor','DataRequirement','Expression','ParameterDefinition','RelatedArtifact','TriggerDefinition','UsageContext','Dosage','Meta',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Result of output
   * - **Definition:** The value of the Output parameter as a basic type.
   * - **Requirements:** Task outputs can take any form.
   * - **FHIR Types:**
   *     'base64Binary',
   *     'boolean',
   *     'canonical',
   *     'code',
   *     'date',
   *     'dateTime',
   *     'decimal',
   *     'id',
   *     'instant',
   *     'integer',
   *     'markdown',
   *     'oid',
   *     'positiveInt',
   *     'string',
   *     'time',
   *     'unsignedInt',
   *     'uri',
   *     'url',
   *     'uuid',
   *     'Address',
   *     'Age',
   *     'Annotation',
   *     'Attachment',
   *     'CodeableConcept',
   *     'Coding',
   *     'ContactPoint',
   *     'Count',
   *     'Distance',
   *     'Duration',
   *     'HumanName',
   *     'Identifier',
   *     'Money',
   *     'Period',
   *     'Quantity',
   *     'Range',
   *     'Ratio',
   *     'Reference',
   *     'SampledData',
   *     'Signature',
   *     'Timing',
   *     'ContactDetail',
   *     'Contributor',
   *     'DataRequirement',
   *     'Expression',
   *     'ParameterDefinition',
   *     'RelatedArtifact',
   *     'TriggerDefinition',
   *     'UsageContext',
   *     'Dosage',
   *     'Meta',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Task.output.value[x]',[
    'base64Binary',
    'boolean',
    'canonical',
    'code',
    'date',
    'dateTime',
    'decimal',
    'id',
    'instant',
    'integer',
    'markdown',
    'oid',
    'positiveInt',
    'string',
    'time',
    'unsignedInt',
    'uri',
    'url',
    'uuid',
    'Address',
    'Age',
    'Annotation',
    'Attachment',
    'CodeableConcept',
    'Coding',
    'ContactPoint',
    'Count',
    'Distance',
    'Duration',
    'HumanName',
    'Identifier',
    'Money',
    'Period',
    'Quantity',
    'Range',
    'Ratio',
    'Reference',
    'SampledData',
    'Signature',
    'Timing',
    'ContactDetail',
    'Contributor',
    'DataRequirement',
    'Expression',
    'ParameterDefinition',
    'RelatedArtifact',
    'TriggerDefinition',
    'UsageContext',
    'Dosage',
    'Meta',
  ])
  private value: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else null
   */
  public getType(): CodeableConcept | null {
    return this.type_;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Task.output.type is required`);
    const optErrMsg = `Invalid Task.output.type; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.type_ = value;
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefined<CodeableConcept>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('Task.output.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Task.output.value[x]')
  public setValue(value: IDataType): this {
    assertIsDefined<IDataType>(value, `Task.output.value[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.value = value;
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefined<IDataType>(this.value) && !this.value.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `value` property value as a Base64BinaryType object if defined; else null
   */
  public getValueBase64BinaryType(): Base64BinaryType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Base64BinaryType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Base64BinaryType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Base64BinaryType and has a value; `false` otherwise
   */
  public hasValueBase64BinaryType(): boolean {
    return this.hasValue() && this.value instanceof Base64BinaryType;
  }

  /**
   * @returns the `value` property value as a BooleanType object if defined; else null
   */
  public getValueBooleanType(): BooleanType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && this.value instanceof BooleanType;
  }

  /**
   * @returns the `value` property value as a CanonicalType object if defined; else null
   */
  public getValueCanonicalType(): CanonicalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected CanonicalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasValueCanonicalType(): boolean {
    return this.hasValue() && this.value instanceof CanonicalType;
  }

  /**
   * @returns the `value` property value as a CodeType object if defined; else null
   */
  public getValueCodeType(): CodeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected CodeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeType and has a value; `false` otherwise
   */
  public hasValueCodeType(): boolean {
    return this.hasValue() && this.value instanceof CodeType;
  }

  /**
   * @returns the `value` property value as a DateType object if defined; else null
   */
  public getValueDateType(): DateType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateType and has a value; `false` otherwise
   */
  public hasValueDateType(): boolean {
    return this.hasValue() && this.value instanceof DateType;
  }

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else null
   */
  public getValueDateTimeType(): DateTimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasValueDateTimeType(): boolean {
    return this.hasValue() && this.value instanceof DateTimeType;
  }

  /**
   * @returns the `value` property value as a DecimalType object if defined; else null
   */
  public getValueDecimalType(): DecimalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected DecimalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DecimalType and has a value; `false` otherwise
   */
  public hasValueDecimalType(): boolean {
    return this.hasValue() && this.value instanceof DecimalType;
  }

  /**
   * @returns the `value` property value as a IdType object if defined; else null
   */
  public getValueIdType(): IdType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IdType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected IdType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IdType and has a value; `false` otherwise
   */
  public hasValueIdType(): boolean {
    return this.hasValue() && this.value instanceof IdType;
  }

  /**
   * @returns the `value` property value as a InstantType object if defined; else null
   */
  public getValueInstantType(): InstantType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof InstantType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected InstantType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a InstantType and has a value; `false` otherwise
   */
  public hasValueInstantType(): boolean {
    return this.hasValue() && this.value instanceof InstantType;
  }

  /**
   * @returns the `value` property value as a IntegerType object if defined; else null
   */
  public getValueIntegerType(): IntegerType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && this.value instanceof IntegerType;
  }

  /**
   * @returns the `value` property value as a MarkdownType object if defined; else null
   */
  public getValueMarkdownType(): MarkdownType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof MarkdownType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected MarkdownType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a MarkdownType and has a value; `false` otherwise
   */
  public hasValueMarkdownType(): boolean {
    return this.hasValue() && this.value instanceof MarkdownType;
  }

  /**
   * @returns the `value` property value as a OidType object if defined; else null
   */
  public getValueOidType(): OidType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof OidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected OidType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a OidType and has a value; `false` otherwise
   */
  public hasValueOidType(): boolean {
    return this.hasValue() && this.value instanceof OidType;
  }

  /**
   * @returns the `value` property value as a PositiveIntType object if defined; else null
   */
  public getValuePositiveIntType(): PositiveIntType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof PositiveIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected PositiveIntType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a PositiveIntType and has a value; `false` otherwise
   */
  public hasValuePositiveIntType(): boolean {
    return this.hasValue() && this.value instanceof PositiveIntType;
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueStringType(): StringType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && this.value instanceof StringType;
  }

  /**
   * @returns the `value` property value as a TimeType object if defined; else null
   */
  public getValueTimeType(): TimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected TimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasValueTimeType(): boolean {
    return this.hasValue() && this.value instanceof TimeType;
  }

  /**
   * @returns the `value` property value as a UnsignedIntType object if defined; else null
   */
  public getValueUnsignedIntType(): UnsignedIntType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UnsignedIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected UnsignedIntType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UnsignedIntType and has a value; `false` otherwise
   */
  public hasValueUnsignedIntType(): boolean {
    return this.hasValue() && this.value instanceof UnsignedIntType;
  }

  /**
   * @returns the `value` property value as a UriType object if defined; else null
   */
  public getValueUriType(): UriType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected UriType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UriType and has a value; `false` otherwise
   */
  public hasValueUriType(): boolean {
    return this.hasValue() && this.value instanceof UriType;
  }

  /**
   * @returns the `value` property value as a UrlType object if defined; else null
   */
  public getValueUrlType(): UrlType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UrlType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected UrlType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UrlType and has a value; `false` otherwise
   */
  public hasValueUrlType(): boolean {
    return this.hasValue() && this.value instanceof UrlType;
  }

  /**
   * @returns the `value` property value as a UuidType object if defined; else null
   */
  public getValueUuidType(): UuidType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UuidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected UuidType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UuidType and has a value; `false` otherwise
   */
  public hasValueUuidType(): boolean {
    return this.hasValue() && this.value instanceof UuidType;
  }

  /**
   * @returns the `value` property value as a Address object if defined; else null
   */
  public getValueAddress(): Address | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Address)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Address but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Address and has a value; `false` otherwise
   */
  public hasValueAddress(): boolean {
    return this.hasValue() && this.value instanceof Address;
  }

  /**
   * @returns the `value` property value as a Age object if defined; else null
   */
  public getValueAge(): Age | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Age but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Age and has a value; `false` otherwise
   */
  public hasValueAge(): boolean {
    return this.hasValue() && this.value instanceof Age;
  }

  /**
   * @returns the `value` property value as a Annotation object if defined; else null
   */
  public getValueAnnotation(): Annotation | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Annotation)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Annotation but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Annotation and has a value; `false` otherwise
   */
  public hasValueAnnotation(): boolean {
    return this.hasValue() && this.value instanceof Annotation;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else null
   */
  public getValueAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && this.value instanceof Attachment;
  }

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasValueCodeableConcept(): boolean {
    return this.hasValue() && this.value instanceof CodeableConcept;
  }

  /**
   * @returns the `value` property value as a Coding object if defined; else null
   */
  public getValueCoding(): Coding | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Coding but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Coding and has a value; `false` otherwise
   */
  public hasValueCoding(): boolean {
    return this.hasValue() && this.value instanceof Coding;
  }

  /**
   * @returns the `value` property value as a ContactPoint object if defined; else null
   */
  public getValueContactPoint(): ContactPoint | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ContactPoint)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected ContactPoint but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ContactPoint and has a value; `false` otherwise
   */
  public hasValueContactPoint(): boolean {
    return this.hasValue() && this.value instanceof ContactPoint;
  }

  /**
   * @returns the `value` property value as a Count object if defined; else null
   */
  public getValueCount(): Count | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Count)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Count but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Count and has a value; `false` otherwise
   */
  public hasValueCount(): boolean {
    return this.hasValue() && this.value instanceof Count;
  }

  /**
   * @returns the `value` property value as a Distance object if defined; else null
   */
  public getValueDistance(): Distance | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Distance)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Distance but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Distance and has a value; `false` otherwise
   */
  public hasValueDistance(): boolean {
    return this.hasValue() && this.value instanceof Distance;
  }

  /**
   * @returns the `value` property value as a Duration object if defined; else null
   */
  public getValueDuration(): Duration | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Duration but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Duration and has a value; `false` otherwise
   */
  public hasValueDuration(): boolean {
    return this.hasValue() && this.value instanceof Duration;
  }

  /**
   * @returns the `value` property value as a HumanName object if defined; else null
   */
  public getValueHumanName(): HumanName | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof HumanName)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected HumanName but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a HumanName and has a value; `false` otherwise
   */
  public hasValueHumanName(): boolean {
    return this.hasValue() && this.value instanceof HumanName;
  }

  /**
   * @returns the `value` property value as a Identifier object if defined; else null
   */
  public getValueIdentifier(): Identifier | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Identifier)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Identifier but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Identifier and has a value; `false` otherwise
   */
  public hasValueIdentifier(): boolean {
    return this.hasValue() && this.value instanceof Identifier;
  }

  /**
   * @returns the `value` property value as a Money object if defined; else null
   */
  public getValueMoney(): Money | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Money)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Money but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Money and has a value; `false` otherwise
   */
  public hasValueMoney(): boolean {
    return this.hasValue() && this.value instanceof Money;
  }

  /**
   * @returns the `value` property value as a Period object if defined; else null
   */
  public getValuePeriod(): Period | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Period but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Period and has a value; `false` otherwise
   */
  public hasValuePeriod(): boolean {
    return this.hasValue() && this.value instanceof Period;
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else null
   */
  public getValueQuantity(): Quantity | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a Range object if defined; else null
   */
  public getValueRange(): Range | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Range and has a value; `false` otherwise
   */
  public hasValueRange(): boolean {
    return this.hasValue() && this.value instanceof Range;
  }

  /**
   * @returns the `value` property value as a Ratio object if defined; else null
   */
  public getValueRatio(): Ratio | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Ratio but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasValueRatio(): boolean {
    return this.hasValue() && this.value instanceof Ratio;
  }

  /**
   * @returns the `value` property value as a Reference object if defined; else null
   */
  public getValueReference(): Reference | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasValueReference(): boolean {
    return this.hasValue() && this.value instanceof Reference;
  }

  /**
   * @returns the `value` property value as a SampledData object if defined; else null
   */
  public getValueSampledData(): SampledData | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof SampledData)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected SampledData but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a SampledData and has a value; `false` otherwise
   */
  public hasValueSampledData(): boolean {
    return this.hasValue() && this.value instanceof SampledData;
  }

  /**
   * @returns the `value` property value as a Signature object if defined; else null
   */
  public getValueSignature(): Signature | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Signature)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Signature but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Signature and has a value; `false` otherwise
   */
  public hasValueSignature(): boolean {
    return this.hasValue() && this.value instanceof Signature;
  }

  /**
   * @returns the `value` property value as a Timing object if defined; else null
   */
  public getValueTiming(): Timing | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Timing but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Timing and has a value; `false` otherwise
   */
  public hasValueTiming(): boolean {
    return this.hasValue() && this.value instanceof Timing;
  }

  /**
   * @returns the `value` property value as a ContactDetail object if defined; else null
   */
  public getValueContactDetail(): ContactDetail | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ContactDetail)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected ContactDetail but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ContactDetail and has a value; `false` otherwise
   */
  public hasValueContactDetail(): boolean {
    return this.hasValue() && this.value instanceof ContactDetail;
  }

  /**
   * @returns the `value` property value as a Contributor object if defined; else null
   */
  public getValueContributor(): Contributor | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Contributor)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Contributor but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Contributor and has a value; `false` otherwise
   */
  public hasValueContributor(): boolean {
    return this.hasValue() && this.value instanceof Contributor;
  }

  /**
   * @returns the `value` property value as a DataRequirement object if defined; else null
   */
  public getValueDataRequirement(): DataRequirement | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DataRequirement)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected DataRequirement but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DataRequirement and has a value; `false` otherwise
   */
  public hasValueDataRequirement(): boolean {
    return this.hasValue() && this.value instanceof DataRequirement;
  }

  /**
   * @returns the `value` property value as a Expression object if defined; else null
   */
  public getValueExpression(): Expression | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Expression)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Expression but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Expression and has a value; `false` otherwise
   */
  public hasValueExpression(): boolean {
    return this.hasValue() && this.value instanceof Expression;
  }

  /**
   * @returns the `value` property value as a ParameterDefinition object if defined; else null
   */
  public getValueParameterDefinition(): ParameterDefinition | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof ParameterDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected ParameterDefinition but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a ParameterDefinition and has a value; `false` otherwise
   */
  public hasValueParameterDefinition(): boolean {
    return this.hasValue() && this.value instanceof ParameterDefinition;
  }

  /**
   * @returns the `value` property value as a RelatedArtifact object if defined; else null
   */
  public getValueRelatedArtifact(): RelatedArtifact | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof RelatedArtifact)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected RelatedArtifact but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a RelatedArtifact and has a value; `false` otherwise
   */
  public hasValueRelatedArtifact(): boolean {
    return this.hasValue() && this.value instanceof RelatedArtifact;
  }

  /**
   * @returns the `value` property value as a TriggerDefinition object if defined; else null
   */
  public getValueTriggerDefinition(): TriggerDefinition | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof TriggerDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected TriggerDefinition but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a TriggerDefinition and has a value; `false` otherwise
   */
  public hasValueTriggerDefinition(): boolean {
    return this.hasValue() && this.value instanceof TriggerDefinition;
  }

  /**
   * @returns the `value` property value as a UsageContext object if defined; else null
   */
  public getValueUsageContext(): UsageContext | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UsageContext)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected UsageContext but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UsageContext and has a value; `false` otherwise
   */
  public hasValueUsageContext(): boolean {
    return this.hasValue() && this.value instanceof UsageContext;
  }

  /**
   * @returns the `value` property value as a Dosage object if defined; else null
   */
  public getValueDosage(): Dosage | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Dosage)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Dosage but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Dosage and has a value; `false` otherwise
   */
  public hasValueDosage(): boolean {
    return this.hasValue() && this.value instanceof Dosage;
  }

  /**
   * @returns the `value` property value as a Meta object if defined; else null
   */
  public getValueMeta(): Meta | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Meta)) {
      throw new InvalidTypeError(
        `DataType mismatch for Task.output.value[x]: Expected Meta but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Meta and has a value; `false` otherwise
   */
  public hasValueMeta(): boolean {
    return this.hasValue() && this.value instanceof Meta;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Task.output';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TaskOutputComponent {
    const dest = new TaskOutputComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TaskOutputComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.value = this.value ? this.value.copy() as IDataType : null;
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

    if (this.hasType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getType()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`Task.output.type`);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`Task.output.value[x]`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
