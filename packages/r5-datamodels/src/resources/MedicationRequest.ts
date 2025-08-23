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
 * MedicationRequest Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicationRequest
 * StructureDefinition.name: MedicationRequest
 * StructureDefinition.description: An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  BooleanType,
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
  MarkdownType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  UnsignedIntType,
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
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirUnsignedInt,
  fhirUnsignedIntSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, CodeableReference, Dosage, Duration, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference } from '../complex-types/complex-datatypes';
import { MedicationrequestIntentEnum } from '../code-systems/MedicationrequestIntentEnum';
import { MedicationrequestStatusEnum } from '../code-systems/MedicationrequestStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { RequestPriorityEnum } from '../code-systems/RequestPriorityEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MedicationRequest Class
 *
 * @remarks
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 *
 * **FHIR Specification**
 * - **Short:** Ordering of medication for patient or group
 * - **Definition:** An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationRequest](http://hl7.org/fhir/StructureDefinition/MedicationRequest)
 */
export class MedicationRequest extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, intent: EnumCodeType | CodeType | fhirCode | null = null, medication: CodeableReference | null = null, subject: Reference | null = null) {
    super();

    this.medicationrequestStatusEnum = new MedicationrequestStatusEnum();
    this.medicationrequestIntentEnum = new MedicationrequestIntentEnum();
    this.requestPriorityEnum = new RequestPriorityEnum();

    this.status = constructorCodeValueAsEnumCodeType<MedicationrequestStatusEnum>(
      status,
      MedicationrequestStatusEnum,
      this.medicationrequestStatusEnum,
      'MedicationRequest.status',
    );

    this.intent = constructorCodeValueAsEnumCodeType<MedicationrequestIntentEnum>(
      intent,
      MedicationrequestIntentEnum,
      this.medicationrequestIntentEnum,
      'MedicationRequest.intent',
    );

    this.medication = null;
    if (isDefined<CodeableReference>(medication)) {
      this.setMedication(medication);
    }

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }
  }

  /**
   * Parse the provided `MedicationRequest` JSON to instantiate the MedicationRequest data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationRequest`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationRequest
   * @returns MedicationRequest data model or undefined for `MedicationRequest`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicationRequest | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationRequest';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationRequest();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicationRequest');
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

    fieldName = 'priorPrescription';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPriorPrescription(datatype);
    }

    fieldName = 'groupIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGroupIdentifier(datatype);
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

    fieldName = 'statusChanged';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setStatusChangedElement(datatype);
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

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setPriorityElement(datatype);
    }

    fieldName = 'doNotPerform';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setDoNotPerformElement(datatype);
    }

    fieldName = 'medication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setMedication(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'informationSource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addInformationSource(datatype);
        }
      });
  }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
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

    fieldName = 'authoredOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setAuthoredOnElement(datatype);
    }

    fieldName = 'requester';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequester(datatype);
    }

    fieldName = 'reported';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setReportedElement(datatype);
    }

    fieldName = 'performerType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPerformerType(datatype);
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPerformer(datatype);
        }
      });
  }

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDevice(datatype);
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

    fieldName = 'courseOfTherapyType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCourseOfTherapyType(datatype);
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

    fieldName = 'renderedDosageInstruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setRenderedDosageInstructionElement(datatype);
    }

    fieldName = 'effectiveDosePeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEffectiveDosePeriod(datatype);
    }

    fieldName = 'dosageInstruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Dosage | undefined = Dosage.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDosageInstruction(datatype);
        }
      });
    }

    fieldName = 'dispenseRequest';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MedicationRequestDispenseRequestComponent | undefined = MedicationRequestDispenseRequestComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDispenseRequest(component);
    }

    fieldName = 'substitution';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MedicationRequestSubstitutionComponent | undefined = MedicationRequestSubstitutionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubstitution(component);
    }

    fieldName = 'eventHistory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEventHistory(datatype);
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
   * MedicationRequest.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External ids for this request
   * - **Definition:** Identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * MedicationRequest.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A plan or request that is fulfilled in whole or in part by this medication request
   * - **Definition:** A plan or request that is fulfilled in whole or in part by this medication request.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basedOn?: Reference[] | undefined;

  /**
   * MedicationRequest.priorPrescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to an order/prescription that is being replaced by this MedicationRequest
   * - **Definition:** Reference to an order/prescription that is being replaced by this MedicationRequest.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private priorPrescription?: Reference | undefined;

  /**
   * MedicationRequest.groupIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Composite request this is part of
   * - **Definition:** A shared identifier common to multiple independent Request instances that were activated/authorized more or less simultaneously by a single author.  The presence of the same identifier on each request ties those requests together and may have business ramifications in terms of reporting of results, billing, etc.  E.g. a requisition number shared by a set of lab tests ordered together, or a prescription number shared by all meds ordered at one time.
   * - **Requirements:** Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition. Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private groupIdentifier?: Identifier | undefined;

  /**
   * FHIR CodeSystem: MedicationrequestStatus
   *
   * @see {@link MedicationrequestStatusEnum }
   */
  private readonly medicationrequestStatusEnum: MedicationrequestStatusEnum;

  /**
   * MedicationRequest.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | on-hold | ended | stopped | completed | cancelled | entered-in-error | draft | unknown
   * - **Definition:** A code specifying the current state of the order.  Generally, this will be active or completed state.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid. Clinical decision support systems should take the status into account when determining which medications to include in their algorithms.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MedicationrequestStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * MedicationRequest.statusReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for current status
   * - **Definition:** Captures the reason for the current state of the MedicationRequest.
   * - **Comment:** This is generally only used for "exception" statuses such as "suspended" or "cancelled". The reason why the MedicationRequest was created at all is captured in reasonCode, not here.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusReason?: CodeableConcept | undefined;

  /**
   * MedicationRequest.statusChanged Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the status was changed
   * - **Definition:** The date (and perhaps time) when the status was changed.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusChanged?: DateTimeType | undefined;

  /**
   * FHIR CodeSystem: MedicationrequestIntent
   *
   * @see {@link MedicationrequestIntentEnum }
   */
  private readonly medicationrequestIntentEnum: MedicationrequestIntentEnum;

  /**
   * MedicationRequest.intent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
   * - **Definition:** Whether the request is a proposal, plan, or an original order.
   * - **Comment:** It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, Proposals can be created by a patient, relatedPerson, Practitioner or Device.  Plans can be created by Practitioners, Patients, RelatedPersons and Devices.  Original orders can be created by a Practitioner only. An instance-order is an instantiation of a request or order and may be used to populate Medication Administration Record. This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element changes the interpretation of all descriptive attributes. For example &quot;the time the request is recommended to occur&quot; vs. &quot;the time the request is authorized to occur&quot; or &quot;who is recommended to perform the request&quot; vs. &quot;who is authorized to perform the request
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MedicationrequestIntentEnum }
   */
  private intent: EnumCodeType | null;

  /**
   * MedicationRequest.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Grouping or category of medication request
   * - **Definition:** An arbitrary categorization or grouping of the medication request.  It could be used for indicating where meds are intended to be administered, eg. in an inpatient setting or in a patient\'s home, or a legal category of the medication.
   * - **Comment:** The category can be used to include where the medication is expected to be consumed or other types of requests.  The examplar value set represents where the meds are intended to be administered and is just one example of request categorization.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * FHIR CodeSystem: RequestPriority
   *
   * @see {@link RequestPriorityEnum }
   */
  private readonly requestPriorityEnum: RequestPriorityEnum;

  /**
   * MedicationRequest.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** routine | urgent | asap | stat
   * - **Definition:** Indicates how quickly the Medication Request should be addressed with respect to other requests.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  private priority?: EnumCodeType | undefined;

  /**
   * MedicationRequest.doNotPerform Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** True if patient is to stop taking or not to start taking the medication
   * - **Definition:** If true, indicates that the provider is asking for the patient to either stop taking or to not start taking the specified medication. For example, the patient is taking an existing medication and the provider is changing their medication. They want to create two seperate requests: one to stop using the current medication and another to start the new medication.
   * - **Comment:** If do not perform is not specified, the request is a positive request e.g. "do perform".
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because this element negates the request to occur (ie, this is a request for the medication not to be ordered or prescribed, etc.)
   * - **isSummary:** true
   */
  private doNotPerform?: BooleanType | undefined;

  /**
   * MedicationRequest.medication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Medication to be taken
   * - **Definition:** Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
   * - **Comment:** If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private medication: CodeableReference | null;

  /**
   * MedicationRequest.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual or group for whom the medication has been requested
   * - **Definition:** The individual or group for whom the medication has been requested.
   * - **Comment:** The subject on a medication request is mandatory.  For the secondary use case where the actual subject is not provided, there still must be an anonymized subject specified.
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
   * MedicationRequest.informationSource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The person or organization who provided the information about this request, if the source is someone other than the requestor
   * - **Definition:** The person or organization who provided the information about this request, if the source is someone other than the requestor.  This is often used when the MedicationRequest is reported by another person.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private informationSource?: Reference[] | undefined;

  /**
   * MedicationRequest.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter created as part of encounter/admission/stay
   * - **Definition:** The Encounter during which this [x] was created or to which the creation of this record is tightly associated.
   * - **Comment:** This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter."    If there is a need to link to episodes of care they will be handled with an extension.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private encounter?: Reference | undefined;

  /**
   * MedicationRequest.supportingInformation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information to support fulfilling of the medication
   * - **Definition:** Information to support fulfilling (i.e. dispensing or administering) of the medication, for example, patient height and weight, a MedicationStatement for the patient).
   * - **Comment:** This attribute can be used to reference a MedicationStatement about the patients\' medication use.
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
   * MedicationRequest.authoredOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When request was initially authored
   * - **Definition:** The date (and perhaps time) when the prescription was initially written or authored on.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private authoredOn?: DateTimeType | undefined;

  /**
   * MedicationRequest.requester Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who/What requested the Request
   * - **Definition:** The individual, organization, or device that initiated the request and has responsibility for its activation.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private requester?: Reference | undefined;

  /**
   * MedicationRequest.reported Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reported rather than primary record
   * - **Definition:** Indicates if this record was captured as a secondary \'reported\' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
   * - **Comment:** If not populated, then assume that this is the original record and not reported
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reported?: BooleanType | undefined;

  /**
   * MedicationRequest.performerType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Desired kind of performer of the medication administration
   * - **Definition:** Indicates the type of performer of the administration of the medication.
   * - **Comment:** If specified without indicating a performer, this indicates that the performer must be of the specified type. If specified with a performer then it indicates the requirements of the performer if the designated performer is not available.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private performerType?: CodeableConcept | undefined;

  /**
   * MedicationRequest.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended performer of administration
   * - **Definition:** The specified desired performer of the medication treatment (e.g. the performer of the medication administration).  For devices, this is the device that is intended to perform the administration of the medication.  An IV Pump would be an example of a device that is performing the administration.  Both the IV Pump and the practitioner that set the rate or bolus on the pump can be listed as performers.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performer?: Reference[] | undefined;

  /**
   * MedicationRequest.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended type of device for the administration
   * - **Definition:** The intended type of device that is to be used for the administration of the medication (for example, PCA Pump).
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private device?: CodeableReference[] | undefined;

  /**
   * MedicationRequest.recorder Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Person who entered the request
   * - **Definition:** The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recorder?: Reference | undefined;

  /**
   * MedicationRequest.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason or indication for ordering or not ordering the medication
   * - **Definition:** The reason or the indication for ordering or not ordering the medication.
   * - **Comment:** This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonReference.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableReference[] | undefined;

  /**
   * MedicationRequest.courseOfTherapyType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Overall pattern of medication administration
   * - **Definition:** The description of the overall pattern of the administration of the medication to the patient.
   * - **Comment:** This attribute should not be confused with the protocol of the medication.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private courseOfTherapyType?: CodeableConcept | undefined;

  /**
   * MedicationRequest.insurance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Associated insurance coverage
   * - **Definition:** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
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
   * MedicationRequest.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about the prescription
   * - **Definition:** Extra information about the prescription that could not be conveyed by the other attributes.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * MedicationRequest.renderedDosageInstruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Full representation of the dosage instructions
   * - **Definition:** The full representation of the dose of the medication included in all dosage instructions.  To be used when multiple dosage instructions are included to represent complex dosing such as increasing or tapering doses.
   * - **Requirements:** The content of the renderedDosageInstructions must not be different than the dose represented in the dosageInstruction content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private renderedDosageInstruction?: MarkdownType | undefined;

  /**
   * MedicationRequest.effectiveDosePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Period over which the medication is to be taken
   * - **Definition:** The period over which the medication is to be taken.  Where there are multiple dosageInstruction lines (for example, tapering doses), this is the earliest date and the latest end date of the dosageInstructions.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private effectiveDosePeriod?: Period | undefined;

  /**
   * MedicationRequest.dosageInstruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific instructions for how the medication should be taken
   * - **Definition:** Specific instructions for how the medication is to be used by the patient.
   * - **Comment:** There are examples where a medication request may include the option of an oral dose or an Intravenous or Intramuscular dose.  For example, "Ondansetron 8mg orally or IV twice a day as needed for nausea" or "Compazine(R) (prochlorperazine) 5-10mg PO or 25mg PR bid prn nausea or vomiting".  In these cases, two medication requests would be created that could be grouped together.  The decision on which dose and route of administration to use is based on the patient\'s condition at the time the dose is needed. In general, each prescribed drug will be a separate Medication Request.  When drug orders are grouped together at the time of order entry,  but each of the drugs can be manipulated independently e.g. changing the status of one order to "completed" or "cancelled", changing another order status to "on-hold", the method to "group" all of the medication requests together is to use  MedicationRequest.groupIdentifier element.  All of the orders grouped together in this manner will have the same groupIdentifier, and separately, each order in the group may have a unique identifier.   There are cases that require grouping of Medication orders together when it is necessary to specify optionality e.g. order two drugs at one time, but stating either of these drugs may be used to treat the patient.  The use of a RequestOrchestration should be used as a parent for the Medication orders that require this type of grouping. An example when it may be necessary to group medication orders together is when you specify timing relationships e.g. order drug "xyz" with dose 123, then taper the same drug to a different dose after some interval of time precedence: e.g. give drug "abc" followed by drug "def" e.g. give drug 30 minutes before some procedure was performed more generically this supports - hierarchical groups of actions, where each specific action references the action to be performed (in terms of a Request resource), and each group describes additional behavior, relationships, and applicable conditions between the actions in the overall group. Note that one should NOT use the List or Composition resource to accomplish the above requirements.  You may use List or Composition for other business requirements, but not to address the specific requirements of grouping medication orders.
   * - **FHIR Type:** `Dosage`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dosageInstruction?: Dosage[] | undefined;

  /**
   * MedicationRequest.dispenseRequest Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Medication supply authorization
   * - **Definition:** Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dispenseRequest?: MedicationRequestDispenseRequestComponent | undefined;

  /**
   * MedicationRequest.substitution Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Any restrictions on medication substitution
   * - **Definition:** Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber\'s intent. If nothing is specified substitution may be done.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private substitution?: MedicationRequestSubstitutionComponent | undefined;

  /**
   * MedicationRequest.eventHistory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A list of events of interest in the lifecycle
   * - **Definition:** Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.
   * - **Comment:** This might not include provenances for all versions of the request - only those deemed "relevant" or important. This SHALL NOT include the provenance associated with this current version of the resource. (If that provenance is deemed to be a "relevant" change, it will need to be added as part of a later update. Until then, it can be queried directly as the provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Provenance',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private eventHistory?: Reference[] | undefined;

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
      const optErrMsg = `Invalid MedicationRequest.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicationRequest.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `basedOn` property value as a Reference array
   */
  public getBasedOn(): Reference[] {
    return this.basedOn ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `basedOn` property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.basedOn', ['CarePlan','MedicationRequest','ServiceRequest','ImmunizationRecommendation',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.basedOn', [
    'CarePlan',
  
    'MedicationRequest',
  
    'ServiceRequest',
  
    'ImmunizationRecommendation',
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
   * @decorator `@ReferenceTargets('MedicationRequest.basedOn', ['CarePlan','MedicationRequest','ServiceRequest','ImmunizationRecommendation',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.basedOn', [
    'CarePlan',
  
    'MedicationRequest',
  
    'ServiceRequest',
  
    'ImmunizationRecommendation',
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
   * @returns the `priorPrescription` property value as a Reference object; else an empty Reference object
   */
  public getPriorPrescription(): Reference {
    return this.priorPrescription ?? new Reference();
  }

  /**
   * Assigns the provided PriorPrescription object value to the `priorPrescription` property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.priorPrescription', ['MedicationRequest',])`
   *
   * @param value - the `priorPrescription` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.priorPrescription', [
    'MedicationRequest',
  ])
  public setPriorPrescription(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.priorPrescription = value;
    } else {
      this.priorPrescription = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priorPrescription` property exists and has a value; `false` otherwise
   */
  public hasPriorPrescription(): boolean {
    return isDefined<Reference>(this.priorPrescription) && !this.priorPrescription.isEmpty();
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
      const optErrMsg = `Invalid MedicationRequest.groupIdentifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MedicationrequestStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationrequestStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `MedicationRequest.status is required`);
    const errMsgPrefix = `Invalid MedicationRequest.status`;
    assertEnumCodeType<MedicationrequestStatusEnum>(enumType, MedicationrequestStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link MedicationrequestStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationrequestStatusEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `MedicationRequest.status is required`);
    const optErrMsg = `Invalid MedicationRequest.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.medicationrequestStatusEnum);
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
   * @see CodeSystem Enumeration: {@link MedicationrequestStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationrequestStatusEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `MedicationRequest.status is required`);
    const optErrMsg = `Invalid MedicationRequest.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.medicationrequestStatusEnum);
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
      const optErrMsg = `Invalid MedicationRequest.statusReason; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `statusChanged` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getStatusChangedElement(): DateTimeType {
    return this.statusChanged ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `statusChanged` property.
   *
   * @param element - the `statusChanged` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusChangedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid MedicationRequest.statusChanged; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.statusChanged = element;
    } else {
      this.statusChanged = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusChanged` property exists and has a value; `false` otherwise
   */
  public hasStatusChangedElement(): boolean {
    return isDefined<DateTimeType>(this.statusChanged) && !this.statusChanged.isEmpty();
  }

  /**
   * @returns the `statusChanged` property value as a fhirDateTime if defined; else undefined
   */
  public getStatusChanged(): fhirDateTime | undefined {
    return this.statusChanged?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `statusChanged` property.
   *
   * @param value - the `statusChanged` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusChanged(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid MedicationRequest.statusChanged (${String(value)})`;
      this.statusChanged = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.statusChanged = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusChanged` property exists and has a value; `false` otherwise
   */
  public hasStatusChanged(): boolean {
    return this.hasStatusChangedElement();
  }

  /**
   * @returns the `intent` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MedicationrequestIntentEnum }
   */
  public getIntentEnumType(): EnumCodeType | null {
    return this.intent;
  }

  /**
   * Assigns the provided EnumCodeType value to the `intent` property.
   *
   * @param enumType - the `intent` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MedicationrequestIntentEnum }
   */
  public setIntentEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `MedicationRequest.intent is required`);
    const errMsgPrefix = `Invalid MedicationRequest.intent`;
    assertEnumCodeType<MedicationrequestIntentEnum>(enumType, MedicationrequestIntentEnum, errMsgPrefix);
    this.intent = enumType;
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntentEnumType(): boolean {
    return isDefined<EnumCodeType>(this.intent) && !this.intent.isEmpty() && this.intent.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `intent` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MedicationrequestIntentEnum }
   */
  public getIntentElement(): CodeType | null {
    if (this.intent === null) {
      return null;
    }
    return this.intent as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `intent` property.
   *
   * @param element - the `intent` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MedicationrequestIntentEnum }
   */
  public setIntentElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `MedicationRequest.intent is required`);
    const optErrMsg = `Invalid MedicationRequest.intent; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.intent = new EnumCodeType(element, this.medicationrequestIntentEnum);
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntentElement(): boolean {
    return this.hasIntentEnumType();
  }

  /**
   * @returns the `intent` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MedicationrequestIntentEnum }
   */
  public getIntent(): fhirCode | null {
    if (this.intent === null) {
      return null;
    }
    return this.intent.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `intent` property.
   *
   * @param value - the `intent` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link MedicationrequestIntentEnum }
   */
  public setIntent(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `MedicationRequest.intent is required`);
    const optErrMsg = `Invalid MedicationRequest.intent (${String(value)})`;
    this.intent = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.medicationrequestIntentEnum);
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntent(): boolean {
    return this.hasIntentEnumType();
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
      const optErrMsg = `Invalid MedicationRequest.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicationRequest.category; Provided element is not an instance of CodeableConcept.`;
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
      const errMsgPrefix = 'Invalid MedicationRequest.priority';
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
      const optErrMsg = `Invalid MedicationRequest.priority; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid MedicationRequest.priority; Provided value is not an instance of fhirCode.`;
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
   * @returns the `doNotPerform` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getDoNotPerformElement(): BooleanType {
    return this.doNotPerform ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `doNotPerform` property.
   *
   * @param element - the `doNotPerform` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoNotPerformElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid MedicationRequest.doNotPerform; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.doNotPerform = element;
    } else {
      this.doNotPerform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doNotPerform` property exists and has a value; `false` otherwise
   */
  public hasDoNotPerformElement(): boolean {
    return isDefined<BooleanType>(this.doNotPerform) && !this.doNotPerform.isEmpty();
  }

  /**
   * @returns the `doNotPerform` property value as a fhirBoolean if defined; else undefined
   */
  public getDoNotPerform(): fhirBoolean | undefined {
    return this.doNotPerform?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `doNotPerform` property.
   *
   * @param value - the `doNotPerform` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoNotPerform(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid MedicationRequest.doNotPerform (${String(value)})`;
      this.doNotPerform = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.doNotPerform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doNotPerform` property exists and has a value; `false` otherwise
   */
  public hasDoNotPerform(): boolean {
    return this.hasDoNotPerformElement();
  }

  /**
   * @returns the `medication` property value as a CodeableReference object if defined; else null
   */
  public getMedication(): CodeableReference | null {
    return this.medication;
  }

  /**
   * Assigns the provided CodeableReference object value to the `medication` property.
   *
   * @param value - the `medication` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMedication(value: CodeableReference): this {
    assertIsDefined<CodeableReference>(value, `MedicationRequest.medication is required`);
    const optErrMsg = `Invalid MedicationRequest.medication; Provided element is not an instance of CodeableReference.`;
    assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
    this.medication = value;
    return this;
  }

  /**
   * @returns `true` if the `medication` property exists and has a value; `false` otherwise
   */
  public hasMedication(): boolean {
    return isDefined<CodeableReference>(this.medication) && !this.medication.isEmpty();
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
   * @decorator `@ReferenceTargets('MedicationRequest.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.subject', [
    'Patient',
  
    'Group',
  ])
  public setSubject(value: Reference): this {
    assertIsDefined<Reference>(value, `MedicationRequest.subject is required`);
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
   * @returns the `informationSource` property value as a Reference array
   */
  public getInformationSource(): Reference[] {
    return this.informationSource ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `informationSource` property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.informationSource', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Organization',])`
   *
   * @param value - the `informationSource` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.informationSource', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Organization',
  ])
  public setInformationSource(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.informationSource = value;
    } else {
      this.informationSource = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `informationSource` array property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.informationSource', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Organization',])`
   *
   * @param value - the `informationSource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.informationSource', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Organization',
  ])
  public addInformationSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initInformationSource();
      this.informationSource?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `informationSource` property exists and has a value; `false` otherwise
   */
  public hasInformationSource(): boolean {
    return isDefinedList<Reference>(this.informationSource) && this.informationSource.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `informationSource` property
   */
  private initInformationSource(): void {
    if (!this.hasInformationSource()) {
      this.informationSource = [] as Reference[];
    }
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
   * @decorator `@ReferenceTargets('MedicationRequest.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.encounter', [
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
   * @returns the `supportingInformation` property value as a Reference array
   */
  public getSupportingInformation(): Reference[] {
    return this.supportingInformation ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `supportingInformation` property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.supportingInformation', [
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
   * @decorator `@ReferenceTargets('MedicationRequest.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.supportingInformation', [
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
      const optErrMsg = `Invalid MedicationRequest.authoredOn; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid MedicationRequest.authoredOn (${String(value)})`;
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
   * @returns the `requester` property value as a Reference object; else an empty Reference object
   */
  public getRequester(): Reference {
    return this.requester ?? new Reference();
  }

  /**
   * Assigns the provided Requester object value to the `requester` property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.requester', ['Practitioner','PractitionerRole','Organization','Patient','RelatedPerson','Device',])`
   *
   * @param value - the `requester` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.requester', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Patient',
  
    'RelatedPerson',
  
    'Device',
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
   * @returns the `reported` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getReportedElement(): BooleanType {
    return this.reported ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `reported` property.
   *
   * @param element - the `reported` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReportedElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid MedicationRequest.reported; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.reported = element;
    } else {
      this.reported = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reported` property exists and has a value; `false` otherwise
   */
  public hasReportedElement(): boolean {
    return isDefined<BooleanType>(this.reported) && !this.reported.isEmpty();
  }

  /**
   * @returns the `reported` property value as a fhirBoolean if defined; else undefined
   */
  public getReported(): fhirBoolean | undefined {
    return this.reported?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `reported` property.
   *
   * @param value - the `reported` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReported(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid MedicationRequest.reported (${String(value)})`;
      this.reported = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.reported = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reported` property exists and has a value; `false` otherwise
   */
  public hasReported(): boolean {
    return this.hasReportedElement();
  }

  /**
   * @returns the `performerType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPerformerType(): CodeableConcept {
    return this.performerType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PerformerType object value to the `performerType` property.
   *
   * @param value - the `performerType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformerType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationRequest.performerType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.performerType = value;
    } else {
      this.performerType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `performerType` property exists and has a value; `false` otherwise
   */
  public hasPerformerType(): boolean {
    return isDefined<CodeableConcept>(this.performerType) && !this.performerType.isEmpty();
  }

  /**
   * @returns the `performer` property value as a Reference array
   */
  public getPerformer(): Reference[] {
    return this.performer ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `performer` property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.performer', ['Practitioner','PractitionerRole','Organization','Patient','DeviceDefinition','RelatedPerson','CareTeam','HealthcareService',])`
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.performer', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Patient',
  
    'DeviceDefinition',
  
    'RelatedPerson',
  
    'CareTeam',
  
    'HealthcareService',
  ])
  public setPerformer(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `performer` array property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.performer', ['Practitioner','PractitionerRole','Organization','Patient','DeviceDefinition','RelatedPerson','CareTeam','HealthcareService',])`
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.performer', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Patient',
  
    'DeviceDefinition',
  
    'RelatedPerson',
  
    'CareTeam',
  
    'HealthcareService',
  ])
  public addPerformer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<Reference>(this.performer) && this.performer.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if (!this.hasPerformer()) {
      this.performer = [] as Reference[];
    }
  }

  /**
   * @returns the `device` property value as a CodeableReference array
   */
  public getDevice(): CodeableReference[] {
    return this.device ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `device` property.
   *
   * @param value - the `device` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDevice(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid MedicationRequest.device; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.device = value;
    } else {
      this.device = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `device` array property.
   *
   * @param value - the `device` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDevice(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid MedicationRequest.device; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initDevice();
      this.device?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `device` property exists and has a value; `false` otherwise
   */
  public hasDevice(): boolean {
    return isDefinedList<CodeableReference>(this.device) && this.device.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `device` property
   */
  private initDevice(): void {
    if(!this.hasDevice()) {
      this.device = [] as CodeableReference[];
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
   * @decorator `@ReferenceTargets('MedicationRequest.recorder', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `recorder` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.recorder', [
    'Practitioner',
  
    'PractitionerRole',
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
      const optErrMsg = `Invalid MedicationRequest.reason; Provided value array has an element that is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid MedicationRequest.reason; Provided element is not an instance of CodeableReference.`;
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
   * @returns the `courseOfTherapyType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCourseOfTherapyType(): CodeableConcept {
    return this.courseOfTherapyType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CourseOfTherapyType object value to the `courseOfTherapyType` property.
   *
   * @param value - the `courseOfTherapyType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCourseOfTherapyType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationRequest.courseOfTherapyType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.courseOfTherapyType = value;
    } else {
      this.courseOfTherapyType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `courseOfTherapyType` property exists and has a value; `false` otherwise
   */
  public hasCourseOfTherapyType(): boolean {
    return isDefined<CodeableConcept>(this.courseOfTherapyType) && !this.courseOfTherapyType.isEmpty();
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
   * @decorator `@ReferenceTargets('MedicationRequest.insurance', ['Coverage','ClaimResponse',])`
   *
   * @param value - the `insurance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.insurance', [
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
   * @decorator `@ReferenceTargets('MedicationRequest.insurance', ['Coverage','ClaimResponse',])`
   *
   * @param value - the `insurance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.insurance', [
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
      const optErrMsg = `Invalid MedicationRequest.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid MedicationRequest.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `renderedDosageInstruction` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getRenderedDosageInstructionElement(): MarkdownType {
    return this.renderedDosageInstruction ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `renderedDosageInstruction` property.
   *
   * @param element - the `renderedDosageInstruction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRenderedDosageInstructionElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid MedicationRequest.renderedDosageInstruction; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.renderedDosageInstruction = element;
    } else {
      this.renderedDosageInstruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `renderedDosageInstruction` property exists and has a value; `false` otherwise
   */
  public hasRenderedDosageInstructionElement(): boolean {
    return isDefined<MarkdownType>(this.renderedDosageInstruction) && !this.renderedDosageInstruction.isEmpty();
  }

  /**
   * @returns the `renderedDosageInstruction` property value as a fhirMarkdown if defined; else undefined
   */
  public getRenderedDosageInstruction(): fhirMarkdown | undefined {
    return this.renderedDosageInstruction?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `renderedDosageInstruction` property.
   *
   * @param value - the `renderedDosageInstruction` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRenderedDosageInstruction(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid MedicationRequest.renderedDosageInstruction (${String(value)})`;
      this.renderedDosageInstruction = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.renderedDosageInstruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `renderedDosageInstruction` property exists and has a value; `false` otherwise
   */
  public hasRenderedDosageInstruction(): boolean {
    return this.hasRenderedDosageInstructionElement();
  }

  /**
   * @returns the `effectiveDosePeriod` property value as a Period object if defined; else an empty Period object
   */
  public getEffectiveDosePeriod(): Period {
    return this.effectiveDosePeriod ?? new Period();
  }

  /**
   * Assigns the provided EffectiveDosePeriod object value to the `effectiveDosePeriod` property.
   *
   * @param value - the `effectiveDosePeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEffectiveDosePeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid MedicationRequest.effectiveDosePeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.effectiveDosePeriod = value;
    } else {
      this.effectiveDosePeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effectiveDosePeriod` property exists and has a value; `false` otherwise
   */
  public hasEffectiveDosePeriod(): boolean {
    return isDefined<Period>(this.effectiveDosePeriod) && !this.effectiveDosePeriod.isEmpty();
  }

  /**
   * @returns the `dosageInstruction` property value as a Dosage array
   */
  public getDosageInstruction(): Dosage[] {
    return this.dosageInstruction ?? ([] as Dosage[]);
  }

  /**
   * Assigns the provided Dosage array value to the `dosageInstruction` property.
   *
   * @param value - the `dosageInstruction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDosageInstruction(value: Dosage[] | undefined): this {
    if (isDefinedList<Dosage>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dosageInstruction; Provided value array has an element that is not an instance of Dosage.`;
      assertFhirTypeList<Dosage>(value, Dosage, optErrMsg);
      this.dosageInstruction = value;
    } else {
      this.dosageInstruction = undefined;
    }
    return this;
  }

  /**
   * Add the provided Dosage value to the `dosageInstruction` array property.
   *
   * @param value - the `dosageInstruction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDosageInstruction(value: Dosage | undefined): this {
    if (isDefined<Dosage>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dosageInstruction; Provided element is not an instance of Dosage.`;
      assertFhirType<Dosage>(value, Dosage, optErrMsg);
      this.initDosageInstruction();
      this.dosageInstruction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dosageInstruction` property exists and has a value; `false` otherwise
   */
  public hasDosageInstruction(): boolean {
    return isDefinedList<Dosage>(this.dosageInstruction) && this.dosageInstruction.some((item: Dosage) => !item.isEmpty());
  }

  /**
   * Initialize the `dosageInstruction` property
   */
  private initDosageInstruction(): void {
    if(!this.hasDosageInstruction()) {
      this.dosageInstruction = [] as Dosage[];
    }
  }

  /**
   * @returns the `dispenseRequest` property value as a MedicationRequestDispenseRequestComponent object if defined; else an empty MedicationRequestDispenseRequestComponent object
   */
  public getDispenseRequest(): MedicationRequestDispenseRequestComponent {
    return this.dispenseRequest ?? new MedicationRequestDispenseRequestComponent();
  }

  /**
   * Assigns the provided DispenseRequest object value to the `dispenseRequest` property.
   *
   * @param value - the `dispenseRequest` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDispenseRequest(value: MedicationRequestDispenseRequestComponent | undefined): this {
    if (isDefined<MedicationRequestDispenseRequestComponent>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dispenseRequest; Provided element is not an instance of MedicationRequestDispenseRequestComponent.`;
      assertFhirType<MedicationRequestDispenseRequestComponent>(value, MedicationRequestDispenseRequestComponent, optErrMsg);
      this.dispenseRequest = value;
    } else {
      this.dispenseRequest = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dispenseRequest` property exists and has a value; `false` otherwise
   */
  public hasDispenseRequest(): boolean {
    return isDefined<MedicationRequestDispenseRequestComponent>(this.dispenseRequest) && !this.dispenseRequest.isEmpty();
  }

  /**
   * @returns the `substitution` property value as a MedicationRequestSubstitutionComponent object if defined; else an empty MedicationRequestSubstitutionComponent object
   */
  public getSubstitution(): MedicationRequestSubstitutionComponent {
    return this.substitution ?? new MedicationRequestSubstitutionComponent();
  }

  /**
   * Assigns the provided Substitution object value to the `substitution` property.
   *
   * @param value - the `substitution` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubstitution(value: MedicationRequestSubstitutionComponent | undefined): this {
    if (isDefined<MedicationRequestSubstitutionComponent>(value)) {
      const optErrMsg = `Invalid MedicationRequest.substitution; Provided element is not an instance of MedicationRequestSubstitutionComponent.`;
      assertFhirType<MedicationRequestSubstitutionComponent>(value, MedicationRequestSubstitutionComponent, optErrMsg);
      this.substitution = value;
    } else {
      this.substitution = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `substitution` property exists and has a value; `false` otherwise
   */
  public hasSubstitution(): boolean {
    return isDefined<MedicationRequestSubstitutionComponent>(this.substitution) && !this.substitution.isEmpty();
  }

  /**
   * @returns the `eventHistory` property value as a Reference array
   */
  public getEventHistory(): Reference[] {
    return this.eventHistory ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `eventHistory` property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.eventHistory', ['Provenance',])`
   *
   * @param value - the `eventHistory` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.eventHistory', [
    'Provenance',
  ])
  public setEventHistory(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.eventHistory = value;
    } else {
      this.eventHistory = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `eventHistory` array property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.eventHistory', ['Provenance',])`
   *
   * @param value - the `eventHistory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.eventHistory', [
    'Provenance',
  ])
  public addEventHistory(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEventHistory();
      this.eventHistory?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `eventHistory` property exists and has a value; `false` otherwise
   */
  public hasEventHistory(): boolean {
    return isDefinedList<Reference>(this.eventHistory) && this.eventHistory.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `eventHistory` property
   */
  private initEventHistory(): void {
    if (!this.hasEventHistory()) {
      this.eventHistory = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationRequest';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.basedOn,
      this.priorPrescription,
      this.groupIdentifier,
      this.status,
      this.statusReason,
      this.statusChanged,
      this.intent,
      this.category,
      this.priority,
      this.doNotPerform,
      this.medication,
      this.subject,
      this.informationSource,
      this.encounter,
      this.supportingInformation,
      this.authoredOn,
      this.requester,
      this.reported,
      this.performerType,
      this.performer,
      this.device,
      this.recorder,
      this.reason,
      this.courseOfTherapyType,
      this.insurance,
      this.note,
      this.renderedDosageInstruction,
      this.effectiveDosePeriod,
      this.dosageInstruction,
      this.dispenseRequest,
      this.substitution,
      this.eventHistory,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationRequest {
    const dest = new MedicationRequest();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationRequest): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    dest.priorPrescription = this.priorPrescription?.copy();
    dest.groupIdentifier = this.groupIdentifier?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.statusReason = this.statusReason?.copy();
    dest.statusChanged = this.statusChanged?.copy();
    dest.intent = this.intent ? this.intent.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.priority = this.priority?.copy();
    dest.doNotPerform = this.doNotPerform?.copy();
    dest.medication = this.medication ? this.medication.copy() : null;
    dest.subject = this.subject ? this.subject.copy() : null;
    const informationSourceList = copyListValues<Reference>(this.informationSource);
    dest.informationSource = informationSourceList.length === 0 ? undefined : informationSourceList;
    dest.encounter = this.encounter?.copy();
    const supportingInformationList = copyListValues<Reference>(this.supportingInformation);
    dest.supportingInformation = supportingInformationList.length === 0 ? undefined : supportingInformationList;
    dest.authoredOn = this.authoredOn?.copy();
    dest.requester = this.requester?.copy();
    dest.reported = this.reported?.copy();
    dest.performerType = this.performerType?.copy();
    const performerList = copyListValues<Reference>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    const deviceList = copyListValues<CodeableReference>(this.device);
    dest.device = deviceList.length === 0 ? undefined : deviceList;
    dest.recorder = this.recorder?.copy();
    const reasonList = copyListValues<CodeableReference>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    dest.courseOfTherapyType = this.courseOfTherapyType?.copy();
    const insuranceList = copyListValues<Reference>(this.insurance);
    dest.insurance = insuranceList.length === 0 ? undefined : insuranceList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.renderedDosageInstruction = this.renderedDosageInstruction?.copy();
    dest.effectiveDosePeriod = this.effectiveDosePeriod?.copy();
    const dosageInstructionList = copyListValues<Dosage>(this.dosageInstruction);
    dest.dosageInstruction = dosageInstructionList.length === 0 ? undefined : dosageInstructionList;
    dest.dispenseRequest = this.dispenseRequest?.copy();
    dest.substitution = this.substitution?.copy();
    const eventHistoryList = copyListValues<Reference>(this.eventHistory);
    dest.eventHistory = eventHistoryList.length === 0 ? undefined : eventHistoryList;
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

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasPriorPrescription()) {
      setFhirComplexJson(this.getPriorPrescription(), 'priorPrescription', jsonObj);
    }

    if (this.hasGroupIdentifier()) {
      setFhirComplexJson(this.getGroupIdentifier(), 'groupIdentifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`MedicationRequest.status`);
    }

    if (this.hasStatusReason()) {
      setFhirComplexJson(this.getStatusReason(), 'statusReason', jsonObj);
    }

    if (this.hasStatusChangedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getStatusChangedElement(), 'statusChanged', jsonObj);
    }

    if (this.hasIntentElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getIntentElement()!, 'intent', jsonObj);
    } else {
      missingReqdProperties.push(`MedicationRequest.intent`);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasPriorityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPriorityElement()!, 'priority', jsonObj);
    }

    if (this.hasDoNotPerformElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getDoNotPerformElement(), 'doNotPerform', jsonObj);
    }

    if (this.hasMedication()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getMedication()!, 'medication', jsonObj);
    } else {
      missingReqdProperties.push(`MedicationRequest.medication`);
    }

    if (this.hasSubject()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getSubject()!, 'subject', jsonObj);
    } else {
      missingReqdProperties.push(`MedicationRequest.subject`);
    }

    if (this.hasInformationSource()) {
      setFhirComplexListJson(this.getInformationSource(), 'informationSource', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasSupportingInformation()) {
      setFhirComplexListJson(this.getSupportingInformation(), 'supportingInformation', jsonObj);
    }

    if (this.hasAuthoredOnElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getAuthoredOnElement(), 'authoredOn', jsonObj);
    }

    if (this.hasRequester()) {
      setFhirComplexJson(this.getRequester(), 'requester', jsonObj);
    }

    if (this.hasReportedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getReportedElement(), 'reported', jsonObj);
    }

    if (this.hasPerformerType()) {
      setFhirComplexJson(this.getPerformerType(), 'performerType', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirComplexListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasDevice()) {
      setFhirComplexListJson(this.getDevice(), 'device', jsonObj);
    }

    if (this.hasRecorder()) {
      setFhirComplexJson(this.getRecorder(), 'recorder', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasCourseOfTherapyType()) {
      setFhirComplexJson(this.getCourseOfTherapyType(), 'courseOfTherapyType', jsonObj);
    }

    if (this.hasInsurance()) {
      setFhirComplexListJson(this.getInsurance(), 'insurance', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasRenderedDosageInstructionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getRenderedDosageInstructionElement(), 'renderedDosageInstruction', jsonObj);
    }

    if (this.hasEffectiveDosePeriod()) {
      setFhirComplexJson(this.getEffectiveDosePeriod(), 'effectiveDosePeriod', jsonObj);
    }

    if (this.hasDosageInstruction()) {
      setFhirComplexListJson(this.getDosageInstruction(), 'dosageInstruction', jsonObj);
    }

    if (this.hasDispenseRequest()) {
      setFhirBackboneElementJson(this.getDispenseRequest(), 'dispenseRequest', jsonObj);
    }

    if (this.hasSubstitution()) {
      setFhirBackboneElementJson(this.getSubstitution(), 'substitution', jsonObj);
    }

    if (this.hasEventHistory()) {
      setFhirComplexListJson(this.getEventHistory(), 'eventHistory', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * MedicationRequestDispenseRequestComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Medication supply authorization
 * - **Definition:** Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationRequest](http://hl7.org/fhir/StructureDefinition/MedicationRequest)
 */
export class MedicationRequestDispenseRequestComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationRequestDispenseRequestComponent` JSON to instantiate the MedicationRequestDispenseRequestComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationRequestDispenseRequestComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationRequestDispenseRequestComponent
   * @returns MedicationRequestDispenseRequestComponent data model or undefined for `MedicationRequestDispenseRequestComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationRequestDispenseRequestComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationRequestDispenseRequestComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationRequestDispenseRequestComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'initialFill';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MedicationRequestDispenseRequestInitialFillComponent | undefined = MedicationRequestDispenseRequestInitialFillComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setInitialFill(component);
    }

    fieldName = 'dispenseInterval';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDispenseInterval(datatype);
    }

    fieldName = 'validityPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setValidityPeriod(datatype);
    }

    fieldName = 'numberOfRepeatsAllowed';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setNumberOfRepeatsAllowedElement(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'expectedSupplyDuration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setExpectedSupplyDuration(datatype);
    }

    fieldName = 'dispenser';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDispenser(datatype);
    }

    fieldName = 'dispenserInstruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDispenserInstruction(datatype);
        }
      });
    }

    fieldName = 'doseAdministrationAid';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDoseAdministrationAid(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicationRequest.dispenseRequest.initialFill Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** First fill details
   * - **Definition:** Indicates the quantity or duration for the first dispense of the medication.
   * - **Comment:** If populating this element, either the quantity or the duration must be included.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private initialFill?: MedicationRequestDispenseRequestInitialFillComponent | undefined;

  /**
   * MedicationRequest.dispenseRequest.dispenseInterval Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Minimum period of time between dispenses
   * - **Definition:** The minimum period of time that must occur between dispenses of the medication.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dispenseInterval?: Duration | undefined;

  /**
   * MedicationRequest.dispenseRequest.validityPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time period supply is authorized for
   * - **Definition:** This indicates the validity period of a prescription (stale dating the Prescription).
   * - **Comment:** It reflects the prescribers\' perspective for the validity of the prescription. Dispenses must not be made against the prescription outside of this period. The lower-bound of the Dispensing Window signifies the earliest date that the prescription can be filled for the first time. If an upper-bound is not specified then the Prescription is open-ended or will default to a stale-date based on regulations.
   * - **Requirements:** Indicates when the Prescription becomes valid, and when it ceases to be a dispensable Prescription.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private validityPeriod?: Period | undefined;

  /**
   * MedicationRequest.dispenseRequest.numberOfRepeatsAllowed Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of refills authorized
   * - **Definition:** An integer indicating the number of times, in addition to the original dispense, (aka refills or repeats) that the patient can receive the prescribed medication. Usage Notes: This integer does not include the original order dispense. This means that if an order indicates dispense 30 tablets plus "3 repeats", then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.  A prescriber may explicitly say that zero refills are permitted after the initial dispense.
   * - **Comment:** If displaying "number of authorized fills", add 1 to this number.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private numberOfRepeatsAllowed?: UnsignedIntType | undefined;

  /**
   * MedicationRequest.dispenseRequest.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount of medication to supply per dispense
   * - **Definition:** The amount that is to be dispensed for one fill.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * MedicationRequest.dispenseRequest.expectedSupplyDuration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of days supply per dispense
   * - **Definition:** Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.
   * - **Comment:** In some situations, this attribute may be used instead of quantity to identify the amount supplied by how long it is expected to last, rather than the physical quantity issued, e.g. 90 days supply of medication (based on an ordered dosage). When possible, it is always better to specify quantity, as this tends to be more precise. expectedSupplyDuration will always be an estimate that can be influenced by external factors.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expectedSupplyDuration?: Duration | undefined;

  /**
   * MedicationRequest.dispenseRequest.dispenser Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended performer of dispense
   * - **Definition:** Indicates the intended performing Organization that will dispense the medication as specified by the prescriber.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dispenser?: Reference | undefined;

  /**
   * MedicationRequest.dispenseRequest.dispenserInstruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information for the dispenser
   * - **Definition:** Provides additional information to the dispenser, for example, counselling to be provided to the patient.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dispenserInstruction?: Annotation[] | undefined;

  /**
   * MedicationRequest.dispenseRequest.doseAdministrationAid Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of adherence packaging to use for the dispense
   * - **Definition:** Provides information about the type of adherence packaging to be supplied for the medication dispense.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private doseAdministrationAid?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `initialFill` property value as a MedicationRequestDispenseRequestInitialFillComponent object if defined; else an empty MedicationRequestDispenseRequestInitialFillComponent object
   */
  public getInitialFill(): MedicationRequestDispenseRequestInitialFillComponent {
    return this.initialFill ?? new MedicationRequestDispenseRequestInitialFillComponent();
  }

  /**
   * Assigns the provided InitialFill object value to the `initialFill` property.
   *
   * @param value - the `initialFill` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInitialFill(value: MedicationRequestDispenseRequestInitialFillComponent | undefined): this {
    if (isDefined<MedicationRequestDispenseRequestInitialFillComponent>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dispenseRequest.initialFill; Provided element is not an instance of MedicationRequestDispenseRequestInitialFillComponent.`;
      assertFhirType<MedicationRequestDispenseRequestInitialFillComponent>(value, MedicationRequestDispenseRequestInitialFillComponent, optErrMsg);
      this.initialFill = value;
    } else {
      this.initialFill = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `initialFill` property exists and has a value; `false` otherwise
   */
  public hasInitialFill(): boolean {
    return isDefined<MedicationRequestDispenseRequestInitialFillComponent>(this.initialFill) && !this.initialFill.isEmpty();
  }

  /**
   * @returns the `dispenseInterval` property value as a Duration object if defined; else an empty Duration object
   */
  public getDispenseInterval(): Duration {
    return this.dispenseInterval ?? new Duration();
  }

  /**
   * Assigns the provided DispenseInterval object value to the `dispenseInterval` property.
   *
   * @param value - the `dispenseInterval` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDispenseInterval(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dispenseRequest.dispenseInterval; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.dispenseInterval = value;
    } else {
      this.dispenseInterval = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dispenseInterval` property exists and has a value; `false` otherwise
   */
  public hasDispenseInterval(): boolean {
    return isDefined<Duration>(this.dispenseInterval) && !this.dispenseInterval.isEmpty();
  }

  /**
   * @returns the `validityPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getValidityPeriod(): Period {
    return this.validityPeriod ?? new Period();
  }

  /**
   * Assigns the provided ValidityPeriod object value to the `validityPeriod` property.
   *
   * @param value - the `validityPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValidityPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dispenseRequest.validityPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.validityPeriod = value;
    } else {
      this.validityPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validityPeriod` property exists and has a value; `false` otherwise
   */
  public hasValidityPeriod(): boolean {
    return isDefined<Period>(this.validityPeriod) && !this.validityPeriod.isEmpty();
  }

  /**
   * @returns the `numberOfRepeatsAllowed` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getNumberOfRepeatsAllowedElement(): UnsignedIntType {
    return this.numberOfRepeatsAllowed ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `numberOfRepeatsAllowed` property.
   *
   * @param element - the `numberOfRepeatsAllowed` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfRepeatsAllowedElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid MedicationRequest.dispenseRequest.numberOfRepeatsAllowed; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.numberOfRepeatsAllowed = element;
    } else {
      this.numberOfRepeatsAllowed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfRepeatsAllowed` property exists and has a value; `false` otherwise
   */
  public hasNumberOfRepeatsAllowedElement(): boolean {
    return isDefined<UnsignedIntType>(this.numberOfRepeatsAllowed) && !this.numberOfRepeatsAllowed.isEmpty();
  }

  /**
   * @returns the `numberOfRepeatsAllowed` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getNumberOfRepeatsAllowed(): fhirUnsignedInt | undefined {
    return this.numberOfRepeatsAllowed?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `numberOfRepeatsAllowed` property.
   *
   * @param value - the `numberOfRepeatsAllowed` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfRepeatsAllowed(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dispenseRequest.numberOfRepeatsAllowed (${String(value)})`;
      this.numberOfRepeatsAllowed = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.numberOfRepeatsAllowed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfRepeatsAllowed` property exists and has a value; `false` otherwise
   */
  public hasNumberOfRepeatsAllowed(): boolean {
    return this.hasNumberOfRepeatsAllowedElement();
  }

  /**
   * @returns the `quantity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getQuantity(): Quantity {
    return this.quantity ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `quantity` property.
   *
   * @param value - the `quantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dispenseRequest.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return isDefined<Quantity>(this.quantity) && !this.quantity.isEmpty();
  }

  /**
   * @returns the `expectedSupplyDuration` property value as a Duration object if defined; else an empty Duration object
   */
  public getExpectedSupplyDuration(): Duration {
    return this.expectedSupplyDuration ?? new Duration();
  }

  /**
   * Assigns the provided ExpectedSupplyDuration object value to the `expectedSupplyDuration` property.
   *
   * @param value - the `expectedSupplyDuration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExpectedSupplyDuration(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dispenseRequest.expectedSupplyDuration; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.expectedSupplyDuration = value;
    } else {
      this.expectedSupplyDuration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expectedSupplyDuration` property exists and has a value; `false` otherwise
   */
  public hasExpectedSupplyDuration(): boolean {
    return isDefined<Duration>(this.expectedSupplyDuration) && !this.expectedSupplyDuration.isEmpty();
  }

  /**
   * @returns the `dispenser` property value as a Reference object; else an empty Reference object
   */
  public getDispenser(): Reference {
    return this.dispenser ?? new Reference();
  }

  /**
   * Assigns the provided Dispenser object value to the `dispenser` property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.dispenseRequest.dispenser', ['Organization',])`
   *
   * @param value - the `dispenser` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.dispenseRequest.dispenser', [
    'Organization',
  ])
  public setDispenser(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.dispenser = value;
    } else {
      this.dispenser = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dispenser` property exists and has a value; `false` otherwise
   */
  public hasDispenser(): boolean {
    return isDefined<Reference>(this.dispenser) && !this.dispenser.isEmpty();
  }

  /**
   * @returns the `dispenserInstruction` property value as a Annotation array
   */
  public getDispenserInstruction(): Annotation[] {
    return this.dispenserInstruction ?? ([] as Annotation[]);
  }

  /**
   * Assigns the provided Annotation array value to the `dispenserInstruction` property.
   *
   * @param value - the `dispenserInstruction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDispenserInstruction(value: Annotation[] | undefined): this {
    if (isDefinedList<Annotation>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dispenseRequest.dispenserInstruction; Provided value array has an element that is not an instance of Annotation.`;
      assertFhirTypeList<Annotation>(value, Annotation, optErrMsg);
      this.dispenserInstruction = value;
    } else {
      this.dispenserInstruction = undefined;
    }
    return this;
  }

  /**
   * Add the provided Annotation value to the `dispenserInstruction` array property.
   *
   * @param value - the `dispenserInstruction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDispenserInstruction(value: Annotation | undefined): this {
    if (isDefined<Annotation>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dispenseRequest.dispenserInstruction; Provided element is not an instance of Annotation.`;
      assertFhirType<Annotation>(value, Annotation, optErrMsg);
      this.initDispenserInstruction();
      this.dispenserInstruction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dispenserInstruction` property exists and has a value; `false` otherwise
   */
  public hasDispenserInstruction(): boolean {
    return isDefinedList<Annotation>(this.dispenserInstruction) && this.dispenserInstruction.some((item: Annotation) => !item.isEmpty());
  }

  /**
   * Initialize the `dispenserInstruction` property
   */
  private initDispenserInstruction(): void {
    if(!this.hasDispenserInstruction()) {
      this.dispenserInstruction = [] as Annotation[];
    }
  }

  /**
   * @returns the `doseAdministrationAid` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDoseAdministrationAid(): CodeableConcept {
    return this.doseAdministrationAid ?? new CodeableConcept();
  }

  /**
   * Assigns the provided DoseAdministrationAid object value to the `doseAdministrationAid` property.
   *
   * @param value - the `doseAdministrationAid` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDoseAdministrationAid(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dispenseRequest.doseAdministrationAid; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.doseAdministrationAid = value;
    } else {
      this.doseAdministrationAid = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doseAdministrationAid` property exists and has a value; `false` otherwise
   */
  public hasDoseAdministrationAid(): boolean {
    return isDefined<CodeableConcept>(this.doseAdministrationAid) && !this.doseAdministrationAid.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationRequest.dispenseRequest';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.initialFill,
      this.dispenseInterval,
      this.validityPeriod,
      this.numberOfRepeatsAllowed,
      this.quantity,
      this.expectedSupplyDuration,
      this.dispenser,
      this.dispenserInstruction,
      this.doseAdministrationAid,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationRequestDispenseRequestComponent {
    const dest = new MedicationRequestDispenseRequestComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationRequestDispenseRequestComponent): void {
    super.copyValues(dest);
    dest.initialFill = this.initialFill?.copy();
    dest.dispenseInterval = this.dispenseInterval?.copy();
    dest.validityPeriod = this.validityPeriod?.copy();
    dest.numberOfRepeatsAllowed = this.numberOfRepeatsAllowed?.copy();
    dest.quantity = this.quantity?.copy();
    dest.expectedSupplyDuration = this.expectedSupplyDuration?.copy();
    dest.dispenser = this.dispenser?.copy();
    const dispenserInstructionList = copyListValues<Annotation>(this.dispenserInstruction);
    dest.dispenserInstruction = dispenserInstructionList.length === 0 ? undefined : dispenserInstructionList;
    dest.doseAdministrationAid = this.doseAdministrationAid?.copy();
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

    if (this.hasInitialFill()) {
      setFhirBackboneElementJson(this.getInitialFill(), 'initialFill', jsonObj);
    }

    if (this.hasDispenseInterval()) {
      setFhirComplexJson(this.getDispenseInterval(), 'dispenseInterval', jsonObj);
    }

    if (this.hasValidityPeriod()) {
      setFhirComplexJson(this.getValidityPeriod(), 'validityPeriod', jsonObj);
    }

    if (this.hasNumberOfRepeatsAllowedElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getNumberOfRepeatsAllowedElement(), 'numberOfRepeatsAllowed', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasExpectedSupplyDuration()) {
      setFhirComplexJson(this.getExpectedSupplyDuration(), 'expectedSupplyDuration', jsonObj);
    }

    if (this.hasDispenser()) {
      setFhirComplexJson(this.getDispenser(), 'dispenser', jsonObj);
    }

    if (this.hasDispenserInstruction()) {
      setFhirComplexListJson(this.getDispenserInstruction(), 'dispenserInstruction', jsonObj);
    }

    if (this.hasDoseAdministrationAid()) {
      setFhirComplexJson(this.getDoseAdministrationAid(), 'doseAdministrationAid', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationRequestDispenseRequestInitialFillComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** First fill details
 * - **Definition:** Indicates the quantity or duration for the first dispense of the medication.
 * - **Comment:** If populating this element, either the quantity or the duration must be included.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationRequest](http://hl7.org/fhir/StructureDefinition/MedicationRequest)
 */
export class MedicationRequestDispenseRequestInitialFillComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationRequestDispenseRequestInitialFillComponent` JSON to instantiate the MedicationRequestDispenseRequestInitialFillComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationRequestDispenseRequestInitialFillComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationRequestDispenseRequestInitialFillComponent
   * @returns MedicationRequestDispenseRequestInitialFillComponent data model or undefined for `MedicationRequestDispenseRequestInitialFillComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationRequestDispenseRequestInitialFillComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationRequestDispenseRequestInitialFillComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationRequestDispenseRequestInitialFillComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'duration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDuration(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicationRequest.dispenseRequest.initialFill.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** First fill quantity
   * - **Definition:** The amount or quantity to provide as part of the first dispense.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * MedicationRequest.dispenseRequest.initialFill.duration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** First fill duration
   * - **Definition:** The length of time that the first dispense is expected to last.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private duration?: Duration | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `quantity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getQuantity(): Quantity {
    return this.quantity ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `quantity` property.
   *
   * @param value - the `quantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dispenseRequest.initialFill.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return isDefined<Quantity>(this.quantity) && !this.quantity.isEmpty();
  }

  /**
   * @returns the `duration` property value as a Duration object if defined; else an empty Duration object
   */
  public getDuration(): Duration {
    return this.duration ?? new Duration();
  }

  /**
   * Assigns the provided Duration object value to the `duration` property.
   *
   * @param value - the `duration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDuration(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid MedicationRequest.dispenseRequest.initialFill.duration; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.duration = value;
    } else {
      this.duration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `duration` property exists and has a value; `false` otherwise
   */
  public hasDuration(): boolean {
    return isDefined<Duration>(this.duration) && !this.duration.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationRequest.dispenseRequest.initialFill';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.quantity,
      this.duration,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationRequestDispenseRequestInitialFillComponent {
    const dest = new MedicationRequestDispenseRequestInitialFillComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationRequestDispenseRequestInitialFillComponent): void {
    super.copyValues(dest);
    dest.quantity = this.quantity?.copy();
    dest.duration = this.duration?.copy();
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

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasDuration()) {
      setFhirComplexJson(this.getDuration(), 'duration', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MedicationRequestSubstitutionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Any restrictions on medication substitution
 * - **Definition:** Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber\'s intent. If nothing is specified substitution may be done.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationRequest](http://hl7.org/fhir/StructureDefinition/MedicationRequest)
 */
export class MedicationRequestSubstitutionComponent extends BackboneElement implements IBackboneElement {
  constructor(allowed: IDataType | null = null) {
    super();

    this.allowed = null;
    if (isDefined<IDataType>(allowed)) {
      this.setAllowed(allowed);
    }

  }

  /**
   * Parse the provided `MedicationRequestSubstitutionComponent` JSON to instantiate the MedicationRequestSubstitutionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationRequestSubstitutionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationRequestSubstitutionComponent
   * @returns MedicationRequestSubstitutionComponent data model or undefined for `MedicationRequestSubstitutionComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationRequestSubstitutionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationRequestSubstitutionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationRequestSubstitutionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = MedicationRequestSubstitutionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationRequestSubstitutionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'allowed[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const allowed: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (allowed === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setAllowed(allowed);
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReason(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * MedicationRequest.substitution.allowed[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationRequest.substitution.allowed[x]', ['boolean','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether substitution is allowed or not
   * - **Definition:** True if the prescriber allows a different drug to be dispensed from what was prescribed.
   * - **Comment:** This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
   * - **FHIR Types:**
   *     'boolean',
   *     'CodeableConcept',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MedicationRequest.substitution.allowed[x]',[
    'boolean',
    'CodeableConcept',
  ])
  private allowed: IDataType | null;

  /**
   * MedicationRequest.substitution.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why should (not) substitution be made
   * - **Definition:** Indicates the reason for the substitution, or why substitution must or must not be performed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `allowed` property value as a DataType object; else null
   */
  public getAllowed(): IDataType | null {
    return this.allowed;
  }

  /**
   * Assigns the provided DataType object value to the `allowed` property.
   *
   * @decorator `@ChoiceDataTypes('MedicationRequest.substitution.allowed[x]')`
   *
   * @param value - the `allowed` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationRequest.substitution.allowed[x]')
  public setAllowed(value: IDataType): this {
    assertIsDefined<IDataType>(value, `MedicationRequest.substitution.allowed[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.allowed = value;
    return this;
  }

  /**
   * @returns `true` if the `allowed` property exists and has a value; `false` otherwise
   */
  public hasAllowed(): boolean {
    return isDefined<IDataType>(this.allowed) && !this.allowed.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `allowed` property value as a BooleanType object if defined; else null
   */
  public getAllowedBooleanType(): BooleanType | null {
    if (!isDefined<IDataType>(this.allowed)) {
      return null;
    }
    if (!(this.allowed instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationRequest.substitution.allowed[x]: Expected BooleanType but encountered ${this.allowed.fhirType()}`,
      );
    }
    return this.allowed;
  }

  /**
   * @returns `true` if the `` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasAllowedBooleanType(): boolean {
    return this.hasAllowed() && this.allowed instanceof BooleanType;
  }

  /**
   * @returns the `allowed` property value as a CodeableConcept object if defined; else null
   */
  public getAllowedCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.allowed)) {
      return null;
    }
    if (!(this.allowed instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationRequest.substitution.allowed[x]: Expected CodeableConcept but encountered ${this.allowed.fhirType()}`,
      );
    }
    return this.allowed;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasAllowedCodeableConcept(): boolean {
    return this.hasAllowed() && this.allowed instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `reason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getReason(): CodeableConcept {
    return this.reason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Reason object value to the `reason` property.
   *
   * @param value - the `reason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationRequest.substitution.reason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefined<CodeableConcept>(this.reason) && !this.reason.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationRequest.substitution';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.allowed,
      this.reason,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationRequestSubstitutionComponent {
    const dest = new MedicationRequestSubstitutionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationRequestSubstitutionComponent): void {
    super.copyValues(dest);
    dest.allowed = this.allowed ? this.allowed.copy() as IDataType : null;
    dest.reason = this.reason?.copy();
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

    if (this.hasAllowed()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAllowed()!, 'allowed', jsonObj);
    } else {
      missingReqdProperties.push(`MedicationRequest.substitution.allowed[x]`);
    }

    if (this.hasReason()) {
      setFhirComplexJson(this.getReason(), 'reason', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
