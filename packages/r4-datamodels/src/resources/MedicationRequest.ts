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
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  BooleanType,
  CanonicalType,
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
  PrimitiveTypeJson,
  ReferenceTargets,
  UnsignedIntType,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCanonical,
  fhirCanonicalSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirUnsignedInt,
  fhirUnsignedIntSchema,
  fhirUri,
  fhirUriSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, Dosage, Duration, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference } from '../complex-types/complex-datatypes';
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
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationRequest](http://hl7.org/fhir/StructureDefinition/MedicationRequest)
 */
export class MedicationRequest extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, intent: EnumCodeType | CodeType | fhirCode | null = null, medication: IDataType | null = null, subject: Reference | null = null) {
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
    if (isDefined<IDataType>(medication)) {
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

    const classMetadata: DecoratorMetadataObject | null = MedicationRequest[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationRequest`;
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

    fieldName = 'statusReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatusReason(datatype);
    }

    fieldName = 'intent';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setIntent(null);
      } else {
        instance.setIntentElement(datatype);
      }
    } else {
      instance.setIntent(null);
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

    fieldName = 'reported[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const reported: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setReported(reported);

    fieldName = 'medication[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const medication: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (medication === undefined) {
      instance.setMedication(null);
    } else {
      instance.setMedication(medication);
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

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPerformer(datatype);
    }

    fieldName = 'performerType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPerformerType(datatype);
    }

    fieldName = 'recorder';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRecorder(datatype);
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

    fieldName = 'instantiatesCanonical';
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
        const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addInstantiatesCanonicalElement(datatype);
        }
      });
    }

    fieldName = 'instantiatesUri';
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
          instance.addInstantiatesUriElement(datatype);
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

    fieldName = 'groupIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGroupIdentifier(datatype);
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

    fieldName = 'priorPrescription';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPriorPrescription(datatype);
    }

    fieldName = 'detectedIssue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDetectedIssue(datatype);
        }
      });
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
   * - **Short:** active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown
   * - **Definition:** A code specifying the current state of the order.  Generally, this will be active or completed state.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
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
   * - **Short:** Type of medication usage
   * - **Definition:** Indicates the type of medication request (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)).
   * - **Comment:** The category can be used to include where the medication is expected to be consumed or other types of requests.
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
   * - **Short:** True if request is prohibiting action
   * - **Definition:** If true indicates that the provider is asking for the medication request not to occur.
   * - **Comment:** If do not perform is not specified, the request is a positive request e.g. "do perform".
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because this element negates the request to occur (ie, this is a request for the medication not to be ordered or prescribed, etc)
   * - **isSummary:** true
   */
  private doNotPerform?: BooleanType | undefined;

  /**
   * MedicationRequest.reported[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationRequest.reported[x]', ['boolean','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reported rather than primary record
   * - **Definition:** Indicates if this record was captured as a secondary \'reported\' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
   * - **FHIR Types:**
   *     'boolean',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MedicationRequest.reported[x]',[
    'boolean',
    'Reference',
  ])
  private reported?: IDataType | undefined;

  /**
   * MedicationRequest.medication[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationRequest.medication[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Medication to be taken
   * - **Definition:** Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
   * - **Comment:** If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MedicationRequest.medication[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private medication: IDataType | null;

  /**
   * MedicationRequest.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or group medication request is for
   * - **Definition:** A link to a resource representing the person or set of individuals to whom the medication will be given.
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
   * - **Short:** Information to support ordering of the medication
   * - **Definition:** Include additional information (for example, patient height and weight) that supports the ordering of the medication.
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
   * MedicationRequest.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended performer of administration
   * - **Definition:** The specified desired performer of the medication treatment (e.g. the performer of the medication administration).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performer?: Reference | undefined;

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
   * MedicationRequest.reasonCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason or indication for ordering or not ordering the medication
   * - **Definition:** The reason or the indication for ordering or not ordering the medication.
   * - **Comment:** This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonReference.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonCode?: CodeableConcept[] | undefined;

  /**
   * MedicationRequest.reasonReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Condition or observation that supports why the prescription is being written
   * - **Definition:** Condition or observation that supports why the medication was ordered.
   * - **Comment:** This is a reference to a condition or observation that is the reason for the medication order.  If only a code exists, use reasonCode.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonReference?: Reference[] | undefined;

  /**
   * MedicationRequest.instantiatesCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates FHIR protocol or definition
   * - **Definition:** The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest.
   * - **FHIR Type:** `canonical`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesCanonical?: CanonicalType[] | undefined;

  /**
   * MedicationRequest.instantiatesUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates external protocol or definition
   * - **Definition:** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesUri?: UriType[] | undefined;

  /**
   * MedicationRequest.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What request fulfills
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
   * MedicationRequest.groupIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Composite request this is part of
   * - **Definition:** A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
   * - **Requirements:** Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition. Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private groupIdentifier?: Identifier | undefined;

  /**
   * MedicationRequest.courseOfTherapyType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Overall pattern of medication administration
   * - **Definition:** The description of the overall patte3rn of the administration of the medication to the patient.
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
   * MedicationRequest.dosageInstruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How the medication should be taken
   * - **Definition:** Indicates how the medication is to be used by the patient.
   * - **Comment:** There are examples where a medication request may include the option of an oral dose or an Intravenous or Intramuscular dose.  For example, "Ondansetron 8mg orally or IV twice a day as needed for nausea" or "Compazine(R) (prochlorperazine) 5-10mg PO or 25mg PR bid prn nausea or vomiting".  In these cases, two medication requests would be created that could be grouped together.  The decision on which dose and route of administration to use is based on the patient\'s condition at the time the dose is needed.
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
   * MedicationRequest.priorPrescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An order/prescription that is being replaced
   * - **Definition:** A link to a resource representing an earlier order related order or prescription.
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
   * MedicationRequest.detectedIssue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Clinical Issue with action
   * - **Definition:** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.
   * - **Comment:** This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DetectedIssue',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detectedIssue?: Reference[] | undefined;

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
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid MedicationRequest.status`;
      assertEnumCodeType<MedicationrequestStatusEnum>(enumType, MedicationrequestStatusEnum, errMsgPrefix);
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
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MedicationRequest.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.medicationrequestStatusEnum);
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
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MedicationRequest.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.medicationrequestStatusEnum);
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
  public setIntentEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid MedicationRequest.intent`;
      assertEnumCodeType<MedicationrequestIntentEnum>(enumType, MedicationrequestIntentEnum, errMsgPrefix);
      this.intent = enumType;
    } else {
      this.intent = null;
    }
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
  public setIntentElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MedicationRequest.intent; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.intent = new EnumCodeType(element, this.medicationrequestIntentEnum);
    } else {
      this.intent = null;
    }
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
  public setIntent(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MedicationRequest.intent (${String(value)})`;
      this.intent = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.medicationrequestIntentEnum);
    } else {
      this.intent = null;
    }
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
   * @returns the `reported` property value as a DataType object if defined; else undefined
   */
  public getReported(): IDataType | undefined {
    return this.reported;
  }

  /**
   * Assigns the provided DataType object value to the `reported` property.
   *
   * @decorator `@ChoiceDataTypes('MedicationRequest.reported[x]')`
   *
   * @param value - the `reported` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationRequest.reported[x]')
  public setReported(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.reported = value;
    } else {
      this.reported = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reported` property exists and has a value; `false` otherwise
   */
  public hasReported(): boolean {
    return isDefined<IDataType>(this.reported) && !this.reported.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `reported` property value as a BooleanType object if defined; else undefined
   */
  public getReportedBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.reported)) {
      return undefined;
    }
    if (!(this.reported instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationRequest.reported[x]: Expected BooleanType but encountered ${this.reported.fhirType()}`,
      );
    }
    return this.reported;
  }

  /**
   * @returns `true` if the `reported` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasReportedBooleanType(): boolean {
    return this.hasReported() && this.reported instanceof BooleanType;
  }

  /**
   * @returns the `reported` property value as a Reference object if defined; else undefined
   */
  public getReportedReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.reported)) {
      return undefined;
    }
    if (!(this.reported instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationRequest.reported[x]: Expected Reference but encountered ${this.reported.fhirType()}`,
      );
    }
    return this.reported;
  }

  /**
   * @returns `true` if the `reported` property exists as a Reference and has a value; `false` otherwise
   */
  public hasReportedReference(): boolean {
    return this.hasReported() && this.reported instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `medication` property value as a DataType object; else null
   */
  public getMedication(): IDataType | null {
    return this.medication;
  }

  /**
   * Assigns the provided DataType object value to the `medication` property.
   *
   * @decorator `@ChoiceDataTypes('MedicationRequest.medication[x]')`
   *
   * @param value - the `medication` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationRequest.medication[x]')
  public setMedication(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.medication = value;
    } else {
      this.medication = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `medication` property exists and has a value; `false` otherwise
   */
  public hasMedication(): boolean {
    return isDefined<IDataType>(this.medication) && !this.medication.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `medication` property value as a CodeableConcept object if defined; else null
   */
  public getMedicationCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.medication)) {
      return null;
    }
    if (!(this.medication instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationRequest.medication[x]: Expected CodeableConcept but encountered ${this.medication.fhirType()}`,
      );
    }
    return this.medication;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasMedicationCodeableConcept(): boolean {
    return this.hasMedication() && this.medication instanceof CodeableConcept;
  }

  /**
   * @returns the `medication` property value as a Reference object if defined; else null
   */
  public getMedicationReference(): Reference | null {
    if (!isDefined<IDataType>(this.medication)) {
      return null;
    }
    if (!(this.medication instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationRequest.medication[x]: Expected Reference but encountered ${this.medication.fhirType()}`,
      );
    }
    return this.medication;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasMedicationReference(): boolean {
    return this.hasMedication() && this.medication instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `subject` property value as a Reference object if defined; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
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
   * @returns the `performer` property value as a Reference object; else an empty Reference object
   */
  public getPerformer(): Reference {
    return this.performer ?? new Reference();
  }

  /**
   * Assigns the provided Performer object value to the `performer` property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.performer', ['Practitioner','PractitionerRole','Organization','Patient','Device','RelatedPerson','CareTeam',])`
   *
   * @param value - the `performer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.performer', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Patient',
  
    'Device',
  
    'RelatedPerson',
  
    'CareTeam',
  ])
  public setPerformer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefined<Reference>(this.performer) && !this.performer.isEmpty();
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
      const optErrMsg = `Invalid MedicationRequest.reasonCode; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicationRequest.reasonCode; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('MedicationRequest.reasonReference', ['Condition','Observation',])`
   *
   * @param value - the `reasonReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.reasonReference', [
    'Condition',
  
    'Observation',
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
   * @decorator `@ReferenceTargets('MedicationRequest.reasonReference', ['Condition','Observation',])`
   *
   * @param value - the `reasonReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.reasonReference', [
    'Condition',
  
    'Observation',
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
   * @returns the `instantiatesCanonical` property value as a CanonicalType array
   */
  public getInstantiatesCanonicalElement(): CanonicalType[] {
    return this.instantiatesCanonical ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `instantiatesCanonical` property.
   *
   * @param element - the `instantiatesCanonical` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonicalElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid MedicationRequest.instantiatesCanonical; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.instantiatesCanonical = element;
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `instantiatesCanonical` array property.
   *
   * @param element - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesCanonicalElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid MedicationRequest.instantiatesCanonical; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initInstantiatesCanonical();
      this.instantiatesCanonical?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonicalElement(): boolean {
    return isDefinedList<CanonicalType>(this.instantiatesCanonical) && this.instantiatesCanonical.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `instantiatesCanonical` property value as a fhirCanonical array
   */
  public getInstantiatesCanonical(): fhirCanonical[] {
    this.initInstantiatesCanonical();
    const instantiatesCanonicalValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.instantiatesCanonical!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        instantiatesCanonicalValues.push(value);
      }
    }
    return instantiatesCanonicalValues;
  }

  /**
   * Assigns the provided primitive value array to the `instantiatesCanonical` property.
   *
   * @param value - the `instantiatesCanonical` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonical(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const instantiatesCanonicalElements = [] as CanonicalType[];
      for (const instantiatesCanonicalValue of value) {
        const optErrMsg = `Invalid MedicationRequest.instantiatesCanonical array item (${String(instantiatesCanonicalValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(instantiatesCanonicalValue, fhirCanonicalSchema, optErrMsg));
        instantiatesCanonicalElements.push(element);
      }
      this.instantiatesCanonical = instantiatesCanonicalElements;
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `instantiatesCanonical` array property.
   *
   * @param value - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesCanonical(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid MedicationRequest.instantiatesCanonical array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initInstantiatesCanonical();
      this.addInstantiatesCanonicalElement(element);
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
   * Initialize the `instantiatesCanonical` property
   */
  private initInstantiatesCanonical(): void {
    if (!this.hasInstantiatesCanonical()) {
      this.instantiatesCanonical = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `instantiatesUri` property value as a UriType array
   */
  public getInstantiatesUriElement(): UriType[] {
    return this.instantiatesUri ?? ([] as UriType[]);
  }

  /**
   * Assigns the provided UriType array value to the `instantiatesUri` property.
   *
   * @param element - the `instantiatesUri` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUriElement(element: UriType[] | undefined): this {
    if (isDefinedList<UriType>(element)) {
      const optErrMsg = `Invalid MedicationRequest.instantiatesUri; Provided value array has an element that is not an instance of UriType.`;
      assertFhirTypeList<UriType>(element, UriType, optErrMsg);
      this.instantiatesUri = element;
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * Add the provided UriType value to the `instantiatesUri` array property.
   *
   * @param element - the `instantiatesUri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesUriElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid MedicationRequest.instantiatesUri; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.initInstantiatesUri();
      this.instantiatesUri?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUriElement(): boolean {
    return isDefinedList<UriType>(this.instantiatesUri) && this.instantiatesUri.some((item: UriType) => !item.isEmpty());
  }

  /**
   * @returns the `instantiatesUri` property value as a fhirUri array
   */
  public getInstantiatesUri(): fhirUri[] {
    this.initInstantiatesUri();
    const instantiatesUriValues = [] as fhirUri[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.instantiatesUri!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        instantiatesUriValues.push(value);
      }
    }
    return instantiatesUriValues;
  }

  /**
   * Assigns the provided primitive value array to the `instantiatesUri` property.
   *
   * @param value - the `instantiatesUri` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUri(value: fhirUri[] | undefined): this {
    if (isDefinedList<fhirUri>(value)) {
      const instantiatesUriElements = [] as UriType[];
      for (const instantiatesUriValue of value) {
        const optErrMsg = `Invalid MedicationRequest.instantiatesUri array item (${String(instantiatesUriValue)})`;
        const element = new UriType(parseFhirPrimitiveData(instantiatesUriValue, fhirUriSchema, optErrMsg));
        instantiatesUriElements.push(element);
      }
      this.instantiatesUri = instantiatesUriElements;
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `instantiatesUri` array property.
   *
   * @param value - the `instantiatesUri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesUri(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid MedicationRequest.instantiatesUri array item (${String(value)})`;
      const element = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
      this.initInstantiatesUri();
      this.addInstantiatesUriElement(element);
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
   * Initialize the `instantiatesUri` property
   */
  private initInstantiatesUri(): void {
    if (!this.hasInstantiatesUri()) {
      this.instantiatesUri = [] as UriType[];
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
   * @returns the `detectedIssue` property value as a Reference array
   */
  public getDetectedIssue(): Reference[] {
    return this.detectedIssue ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `detectedIssue` property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.detectedIssue', ['DetectedIssue',])`
   *
   * @param value - the `detectedIssue` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.detectedIssue', [
    'DetectedIssue',
  ])
  public setDetectedIssue(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.detectedIssue = value;
    } else {
      this.detectedIssue = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `detectedIssue` array property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.detectedIssue', ['DetectedIssue',])`
   *
   * @param value - the `detectedIssue` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.detectedIssue', [
    'DetectedIssue',
  ])
  public addDetectedIssue(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDetectedIssue();
      this.detectedIssue?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detectedIssue` property exists and has a value; `false` otherwise
   */
  public hasDetectedIssue(): boolean {
    return isDefinedList<Reference>(this.detectedIssue) && this.detectedIssue.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `detectedIssue` property
   */
  private initDetectedIssue(): void {
    if (!this.hasDetectedIssue()) {
      this.detectedIssue = [] as Reference[];
    }
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
      this.status,
      this.statusReason,
      this.intent,
      this.category,
      this.priority,
      this.doNotPerform,
      this.reported,
      this.medication,
      this.subject,
      this.encounter,
      this.supportingInformation,
      this.authoredOn,
      this.requester,
      this.performer,
      this.performerType,
      this.recorder,
      this.reasonCode,
      this.reasonReference,
      this.instantiatesCanonical,
      this.instantiatesUri,
      this.basedOn,
      this.groupIdentifier,
      this.courseOfTherapyType,
      this.insurance,
      this.note,
      this.dosageInstruction,
      this.dispenseRequest,
      this.substitution,
      this.priorPrescription,
      this.detectedIssue,
      this.eventHistory,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.intent, this.medication, this.subject, 
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
    dest.status = this.status ? this.status.copy() : null;
    dest.statusReason = this.statusReason?.copy();
    dest.intent = this.intent ? this.intent.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.priority = this.priority?.copy();
    dest.doNotPerform = this.doNotPerform?.copy();
    dest.reported = this.reported?.copy() as IDataType;
    dest.medication = this.medication ? this.medication.copy() as IDataType : null;
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    const supportingInformationList = copyListValues<Reference>(this.supportingInformation);
    dest.supportingInformation = supportingInformationList.length === 0 ? undefined : supportingInformationList;
    dest.authoredOn = this.authoredOn?.copy();
    dest.requester = this.requester?.copy();
    dest.performer = this.performer?.copy();
    dest.performerType = this.performerType?.copy();
    dest.recorder = this.recorder?.copy();
    const reasonCodeList = copyListValues<CodeableConcept>(this.reasonCode);
    dest.reasonCode = reasonCodeList.length === 0 ? undefined : reasonCodeList;
    const reasonReferenceList = copyListValues<Reference>(this.reasonReference);
    dest.reasonReference = reasonReferenceList.length === 0 ? undefined : reasonReferenceList;
    const instantiatesCanonicalList = copyListValues<CanonicalType>(this.instantiatesCanonical);
    dest.instantiatesCanonical = instantiatesCanonicalList.length === 0 ? undefined : instantiatesCanonicalList;
    const instantiatesUriList = copyListValues<UriType>(this.instantiatesUri);
    dest.instantiatesUri = instantiatesUriList.length === 0 ? undefined : instantiatesUriList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    dest.groupIdentifier = this.groupIdentifier?.copy();
    dest.courseOfTherapyType = this.courseOfTherapyType?.copy();
    const insuranceList = copyListValues<Reference>(this.insurance);
    dest.insurance = insuranceList.length === 0 ? undefined : insuranceList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const dosageInstructionList = copyListValues<Dosage>(this.dosageInstruction);
    dest.dosageInstruction = dosageInstructionList.length === 0 ? undefined : dosageInstructionList;
    dest.dispenseRequest = this.dispenseRequest?.copy();
    dest.substitution = this.substitution?.copy();
    dest.priorPrescription = this.priorPrescription?.copy();
    const detectedIssueList = copyListValues<Reference>(this.detectedIssue);
    dest.detectedIssue = detectedIssueList.length === 0 ? undefined : detectedIssueList;
    const eventHistoryList = copyListValues<Reference>(this.eventHistory);
    dest.eventHistory = eventHistoryList.length === 0 ? undefined : eventHistoryList;
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

    if (this.hasStatusReason()) {
      setFhirComplexJson(this.getStatusReason(), 'statusReason', jsonObj);
    }

    if (this.hasIntentElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getIntentElement()!, 'intent', jsonObj);
    } else {
      jsonObj['intent'] = null;
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

    if (this.hasReported()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getReported()!, 'reported', jsonObj);
    }

    if (this.hasMedication()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getMedication()!, 'medication', jsonObj);
    } else {
      jsonObj['medication'] = null;
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    } else {
      jsonObj['subject'] = null;
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

    if (this.hasPerformer()) {
      setFhirComplexJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasPerformerType()) {
      setFhirComplexJson(this.getPerformerType(), 'performerType', jsonObj);
    }

    if (this.hasRecorder()) {
      setFhirComplexJson(this.getRecorder(), 'recorder', jsonObj);
    }

    if (this.hasReasonCode()) {
      setFhirComplexListJson(this.getReasonCode(), 'reasonCode', jsonObj);
    }

    if (this.hasReasonReference()) {
      setFhirComplexListJson(this.getReasonReference(), 'reasonReference', jsonObj);
    }

    if (this.hasInstantiatesCanonical()) {
      setFhirPrimitiveListJson(this.getInstantiatesCanonicalElement(), 'instantiatesCanonical', jsonObj);
    }

    if (this.hasInstantiatesUri()) {
      setFhirPrimitiveListJson(this.getInstantiatesUriElement(), 'instantiatesUri', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasGroupIdentifier()) {
      setFhirComplexJson(this.getGroupIdentifier(), 'groupIdentifier', jsonObj);
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

    if (this.hasDosageInstruction()) {
      setFhirComplexListJson(this.getDosageInstruction(), 'dosageInstruction', jsonObj);
    }

    if (this.hasDispenseRequest()) {
      setFhirBackboneElementJson(this.getDispenseRequest(), 'dispenseRequest', jsonObj);
    }

    if (this.hasSubstitution()) {
      setFhirBackboneElementJson(this.getSubstitution(), 'substitution', jsonObj);
    }

    if (this.hasPriorPrescription()) {
      setFhirComplexJson(this.getPriorPrescription(), 'priorPrescription', jsonObj);
    }

    if (this.hasDetectedIssue()) {
      setFhirComplexListJson(this.getDetectedIssue(), 'detectedIssue', jsonObj);
    }

    if (this.hasEventHistory()) {
      setFhirComplexListJson(this.getEventHistory(), 'eventHistory', jsonObj);
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

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPerformer(datatype);
    }

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
   * MedicationRequest.dispenseRequest.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended dispenser
   * - **Definition:** Indicates the intended dispensing Organization specified by the prescriber.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performer?: Reference | undefined;

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
   * @returns the `performer` property value as a Reference object; else an empty Reference object
   */
  public getPerformer(): Reference {
    return this.performer ?? new Reference();
  }

  /**
   * Assigns the provided Performer object value to the `performer` property.
   *
   * @decorator `@ReferenceTargets('MedicationRequest.dispenseRequest.performer', ['Organization',])`
   *
   * @param value - the `performer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationRequest.dispenseRequest.performer', [
    'Organization',
  ])
  public setPerformer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefined<Reference>(this.performer) && !this.performer.isEmpty();
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
      this.performer,
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
    dest.performer = this.performer?.copy();
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

    if (this.hasPerformer()) {
      setFhirComplexJson(this.getPerformer(), 'performer', jsonObj);
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

    fieldName = 'allowed[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const allowed: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (allowed === undefined) {
      instance.setAllowed(null);
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
  public setAllowed(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.allowed = value;
    } else {
      this.allowed = null;
    }
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.allowed, 
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
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasAllowed()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAllowed()!, 'allowed', jsonObj);
    } else {
      jsonObj['allowed'] = null;
    }

    if (this.hasReason()) {
      setFhirComplexJson(this.getReason(), 'reason', jsonObj);
    }

    return jsonObj;
  }
}
