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
 * MedicationAdministration Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicationAdministration
 * StructureDefinition.name: MedicationAdministration
 * StructureDefinition.description: Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion. Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner. This event can also be used to record waste using a status of not-done and the appropriate statusReason.
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
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Ratio, Reference, Timing } from '../complex-types/complex-datatypes';
import { MedicationAdminStatusEnum } from '../code-systems/MedicationAdminStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MedicationAdministration Class
 *
 * @remarks
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion. Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner. This event can also be used to record waste using a status of not-done and the appropriate statusReason.
 *
 * **FHIR Specification**
 * - **Short:** Administration of medication to a patient
 * - **Definition:** Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationAdministration](http://hl7.org/fhir/StructureDefinition/MedicationAdministration)
 */
export class MedicationAdministration extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, medication: CodeableReference | null = null, subject: Reference | null = null, occurence: IDataType | null = null) {
    super();

    this.medicationAdminStatusEnum = new MedicationAdminStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<MedicationAdminStatusEnum>(
      status,
      MedicationAdminStatusEnum,
      this.medicationAdminStatusEnum,
      'MedicationAdministration.status',
    );

    this.medication = null;
    if (isDefined<CodeableReference>(medication)) {
      this.setMedication(medication);
    }

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }

    this.occurence = null;
    if (isDefined<IDataType>(occurence)) {
      this.setOccurence(occurence);
    }

  }

  /**
   * Parse the provided `MedicationAdministration` JSON to instantiate the MedicationAdministration data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationAdministration`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationAdministration
   * @returns MedicationAdministration data model or undefined for `MedicationAdministration`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicationAdministration | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationAdministration';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationAdministration();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicationAdministration');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = MedicationAdministration[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationAdministration`;
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

    fieldName = 'basedOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addBasedOn(datatype);
          }
        });
      }
  }

    fieldName = 'partOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPartOf(datatype);
          }
        });
      }
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addStatusReason(datatype);
          }
        });
      }
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

    fieldName = 'medication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setMedication(null);
      } else {
        instance.setMedication(datatype);
      }
    } else {
      instance.setMedication(null);
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSupportingInformation(datatype);
          }
        });
      }
  }

    fieldName = 'occurence[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const occurence: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (occurence === undefined) {
      instance.setOccurence(null);
    } else {
      instance.setOccurence(occurence);
    }

    fieldName = 'recorded';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setRecordedElement(datatype);
    }

    fieldName = 'isSubPotent';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setIsSubPotentElement(datatype);
    }

    fieldName = 'subPotentReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSubPotentReason(datatype);
          }
        });
      }
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MedicationAdministrationPerformerComponent | undefined = MedicationAdministrationPerformerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addPerformer(component);
          }
        });
      }
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addReason(datatype);
          }
        });
      }
    }

    fieldName = 'request';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequest(datatype);
    }

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addDevice(datatype);
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

    fieldName = 'dosage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MedicationAdministrationDosageComponent | undefined = MedicationAdministrationDosageComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDosage(component);
    }

    fieldName = 'eventHistory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEventHistory(datatype);
          }
        });
      }
  }

    return instance;
  }

  /**
   * MedicationAdministration.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External identifier
   * - **Definition:** Identifiers associated with this Medication Administration that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * MedicationAdministration.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Plan this is fulfilled by this administration
   * - **Definition:** A plan that is fulfilled in whole or in part by this MedicationAdministration.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private basedOn?: Reference[] | undefined;

  /**
   * MedicationAdministration.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Part of referenced event
   * - **Definition:** A larger event of which this particular event is a component or step.
   * - **Comment:** MedicationDispense will be used to indicate waste.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicationAdministration',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationDispense',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private partOf?: Reference[] | undefined;

  /**
   * FHIR CodeSystem: MedicationAdminStatus
   *
   * @see {@link MedicationAdminStatusEnum }
   */
  private readonly medicationAdminStatusEnum: MedicationAdminStatusEnum;

  /**
   * MedicationAdministration.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown
   * - **Definition:** Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions, it is possible for an administration to be started but not completed or it may be paused while some other process is under way.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * MedicationAdministration.statusReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason administration not performed
   * - **Definition:** A code indicating why the administration was not performed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusReason?: CodeableConcept[] | undefined;

  /**
   * MedicationAdministration.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of medication administration
   * - **Definition:** The type of medication administration (for example, drug classification like ATC, where meds would be administered, legal category of the medication).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * MedicationAdministration.medication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What was administered
   * - **Definition:** Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
   * - **Comment:** If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
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
   * MedicationAdministration.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who received medication
   * - **Definition:** The person or animal or group receiving the medication.
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
   * MedicationAdministration.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter administered as part of
   * - **Definition:** The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
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
   * MedicationAdministration.supportingInformation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information to support administration
   * - **Definition:** Additional information (for example, patient height and weight) that supports the administration of the medication.  This attribute can be used to provide documentation of specific characteristics of the patient present at the time of administration.  For example, if the dose says "give "x" if the heartrate exceeds "y"", then the heart rate can be included using this attribute.
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
   * MedicationAdministration.occurence[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationAdministration.occurence[x]', ['dateTime','Period','Timing',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific date/time or interval of time during which the administration took place (or did not take place)
   * - **Definition:** A specific date/time or interval of time during which the administration took place (or did not take place). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   *     'Timing',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MedicationAdministration.occurence[x]',[
    'dateTime',
    'Period',
    'Timing',
  ])
  private occurence: IDataType | null;

  /**
   * MedicationAdministration.recorded Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the MedicationAdministration was first captured in the subject\'s record
   * - **Definition:** The date the occurrence of the  MedicationAdministration was first captured in the record - potentially significantly after the occurrence of the event.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private recorded?: DateTimeType | undefined;

  /**
   * MedicationAdministration.isSubPotent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Full dose was not administered
   * - **Definition:** An indication that the full dose was not administered.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private isSubPotent?: BooleanType | undefined;

  /**
   * MedicationAdministration.subPotentReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason full dose was not administered
   * - **Definition:** The reason or reasons why the full dose was not administered.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subPotentReason?: CodeableConcept[] | undefined;

  /**
   * MedicationAdministration.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or what performed the medication administration and what type of performance they did
   * - **Definition:** The performer of the medication treatment.  For devices this is the device that performed the administration of the medication.  An IV Pump would be an example of a device that is performing the administration. Both the IV Pump and the practitioner that set the rate or bolus on the pump can be listed as performers.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private performer?: MedicationAdministrationPerformerComponent[] | undefined;

  /**
   * MedicationAdministration.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Concept, condition or observation that supports why the medication was administered
   * - **Definition:** A code, Condition or observation that supports why the medication was administered.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableReference[] | undefined;

  /**
   * MedicationAdministration.request Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request administration performed against
   * - **Definition:** The original request, instruction or authority to perform the administration.
   * - **Comment:** This is a reference to the MedicationRequest  where the intent is either order or instance-order.  It should not reference MedicationRequests where the intent is any other value.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private request?: Reference | undefined;

  /**
   * MedicationAdministration.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Device used to administer
   * - **Definition:** The device that is to be used for the administration of the medication (for example, PCA Pump).
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private device?: CodeableReference[] | undefined;

  /**
   * MedicationAdministration.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about the administration
   * - **Definition:** Extra information about the medication administration that is not conveyed by the other attributes.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * MedicationAdministration.dosage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details of how medication was taken
   * - **Definition:** Describes the medication dosage information details e.g. dose, rate, site, route, etc.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dosage?: MedicationAdministrationDosageComponent | undefined;

  /**
   * MedicationAdministration.eventHistory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A list of events of interest in the lifecycle
   * - **Definition:** A summary of the events of interest that have occurred, such as when the administration was verified.
   * - **Comment:** This might not include provenances for all versions of the request - only those deemed "relevant" or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a "relevant" change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.
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
      const optErrMsg = `Invalid MedicationAdministration.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicationAdministration.identifier; Provided element is not an instance of Identifier.`;
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
   * @decorator `@ReferenceTargets('MedicationAdministration.basedOn', ['CarePlan',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationAdministration.basedOn', [
    'CarePlan',
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
   * @decorator `@ReferenceTargets('MedicationAdministration.basedOn', ['CarePlan',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationAdministration.basedOn', [
    'CarePlan',
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
   * @returns the `partOf` property value as a Reference array
   */
  public getPartOf(): Reference[] {
    return this.partOf ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `partOf` property.
   *
   * @decorator `@ReferenceTargets('MedicationAdministration.partOf', ['MedicationAdministration','Procedure','MedicationDispense',])`
   *
   * @param value - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationAdministration.partOf', [
    'MedicationAdministration',
  
    'Procedure',
  
    'MedicationDispense',
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
   * @decorator `@ReferenceTargets('MedicationAdministration.partOf', ['MedicationAdministration','Procedure','MedicationDispense',])`
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationAdministration.partOf', [
    'MedicationAdministration',
  
    'Procedure',
  
    'MedicationDispense',
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
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid MedicationAdministration.status`;
      assertEnumCodeType<MedicationAdminStatusEnum>(enumType, MedicationAdminStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MedicationAdministration.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.medicationAdminStatusEnum);
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
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationAdminStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.medicationAdminStatusEnum);
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
   * @returns the `statusReason` property value as a CodeableConcept array
   */
  public getStatusReason(): CodeableConcept[] {
    return this.statusReason ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `statusReason` property.
   *
   * @param value - the `statusReason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatusReason(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.statusReason; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.statusReason = value;
    } else {
      this.statusReason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `statusReason` array property.
   *
   * @param value - the `statusReason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStatusReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.statusReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initStatusReason();
      this.statusReason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `statusReason` property exists and has a value; `false` otherwise
   */
  public hasStatusReason(): boolean {
    return isDefinedList<CodeableConcept>(this.statusReason) && this.statusReason.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `statusReason` property
   */
  private initStatusReason(): void {
    if(!this.hasStatusReason()) {
      this.statusReason = [] as CodeableConcept[];
    }
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
      const optErrMsg = `Invalid MedicationAdministration.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicationAdministration.category; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `medication` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getMedication(): CodeableReference {
    return this.medication ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `medication` property.
   *
   * @param value - the `medication` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMedication(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.medication; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
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
    return isDefined<CodeableReference>(this.medication) && !this.medication.isEmpty();
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
   * @decorator `@ReferenceTargets('MedicationAdministration.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationAdministration.subject', [
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
   * @decorator `@ReferenceTargets('MedicationAdministration.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationAdministration.encounter', [
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
   * @decorator `@ReferenceTargets('MedicationAdministration.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationAdministration.supportingInformation', [
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
   * @decorator `@ReferenceTargets('MedicationAdministration.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationAdministration.supportingInformation', [
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
   * @returns the `occurence` property value as a DataType object; else null
   */
  public getOccurence(): IDataType | null {
    return this.occurence;
  }

  /**
   * Assigns the provided DataType object value to the `occurence` property.
   *
   * @decorator `@ChoiceDataTypes('MedicationAdministration.occurence[x]')`
   *
   * @param value - the `occurence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationAdministration.occurence[x]')
  public setOccurence(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.occurence = value;
    } else {
      this.occurence = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurence` property exists and has a value; `false` otherwise
   */
  public hasOccurence(): boolean {
    return isDefined<IDataType>(this.occurence) && !this.occurence.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `occurence` property value as a DateTimeType object if defined; else null
   */
  public getOccurenceDateTimeType(): DateTimeType | null {
    if (!isDefined<IDataType>(this.occurence)) {
      return null;
    }
    if (!(this.occurence instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationAdministration.occurence[x]: Expected DateTimeType but encountered ${this.occurence.fhirType()}`,
      );
    }
    return this.occurence;
  }

  /**
   * @returns `true` if the `` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasOccurenceDateTimeType(): boolean {
    return this.hasOccurence() && this.occurence instanceof DateTimeType;
  }

  /**
   * @returns the `occurence` property value as a Period object if defined; else null
   */
  public getOccurencePeriod(): Period | null {
    if (!isDefined<IDataType>(this.occurence)) {
      return null;
    }
    if (!(this.occurence instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationAdministration.occurence[x]: Expected Period but encountered ${this.occurence.fhirType()}`,
      );
    }
    return this.occurence;
  }

  /**
   * @returns `true` if the `` property exists as a Period and has a value; `false` otherwise
   */
  public hasOccurencePeriod(): boolean {
    return this.hasOccurence() && this.occurence instanceof Period;
  }

  /**
   * @returns the `occurence` property value as a Timing object if defined; else null
   */
  public getOccurenceTiming(): Timing | null {
    if (!isDefined<IDataType>(this.occurence)) {
      return null;
    }
    if (!(this.occurence instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationAdministration.occurence[x]: Expected Timing but encountered ${this.occurence.fhirType()}`,
      );
    }
    return this.occurence;
  }

  /**
   * @returns `true` if the `` property exists as a Timing and has a value; `false` otherwise
   */
  public hasOccurenceTiming(): boolean {
    return this.hasOccurence() && this.occurence instanceof Timing;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `recorded` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getRecordedElement(): DateTimeType {
    return this.recorded ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `recorded` property.
   *
   * @param element - the `recorded` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecordedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid MedicationAdministration.recorded; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.recorded = element;
    } else {
      this.recorded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recorded` property exists and has a value; `false` otherwise
   */
  public hasRecordedElement(): boolean {
    return isDefined<DateTimeType>(this.recorded) && !this.recorded.isEmpty();
  }

  /**
   * @returns the `recorded` property value as a fhirDateTime if defined; else undefined
   */
  public getRecorded(): fhirDateTime | undefined {
    return this.recorded?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `recorded` property.
   *
   * @param value - the `recorded` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecorded(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.recorded (${String(value)})`;
      this.recorded = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.recorded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recorded` property exists and has a value; `false` otherwise
   */
  public hasRecorded(): boolean {
    return this.hasRecordedElement();
  }

  /**
   * @returns the `isSubPotent` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getIsSubPotentElement(): BooleanType {
    return this.isSubPotent ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `isSubPotent` property.
   *
   * @param element - the `isSubPotent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsSubPotentElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid MedicationAdministration.isSubPotent; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.isSubPotent = element;
    } else {
      this.isSubPotent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isSubPotent` property exists and has a value; `false` otherwise
   */
  public hasIsSubPotentElement(): boolean {
    return isDefined<BooleanType>(this.isSubPotent) && !this.isSubPotent.isEmpty();
  }

  /**
   * @returns the `isSubPotent` property value as a fhirBoolean if defined; else undefined
   */
  public getIsSubPotent(): fhirBoolean | undefined {
    return this.isSubPotent?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `isSubPotent` property.
   *
   * @param value - the `isSubPotent` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsSubPotent(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.isSubPotent (${String(value)})`;
      this.isSubPotent = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.isSubPotent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isSubPotent` property exists and has a value; `false` otherwise
   */
  public hasIsSubPotent(): boolean {
    return this.hasIsSubPotentElement();
  }

  /**
   * @returns the `subPotentReason` property value as a CodeableConcept array
   */
  public getSubPotentReason(): CodeableConcept[] {
    return this.subPotentReason ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `subPotentReason` property.
   *
   * @param value - the `subPotentReason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubPotentReason(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.subPotentReason; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.subPotentReason = value;
    } else {
      this.subPotentReason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `subPotentReason` array property.
   *
   * @param value - the `subPotentReason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubPotentReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.subPotentReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSubPotentReason();
      this.subPotentReason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subPotentReason` property exists and has a value; `false` otherwise
   */
  public hasSubPotentReason(): boolean {
    return isDefinedList<CodeableConcept>(this.subPotentReason) && this.subPotentReason.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `subPotentReason` property
   */
  private initSubPotentReason(): void {
    if(!this.hasSubPotentReason()) {
      this.subPotentReason = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `performer` property value as a MedicationAdministrationPerformerComponent array
   */
  public getPerformer(): MedicationAdministrationPerformerComponent[] {
    return this.performer ?? ([] as MedicationAdministrationPerformerComponent[]);
  }

  /**
   * Assigns the provided MedicationAdministrationPerformerComponent array value to the `performer` property.
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformer(value: MedicationAdministrationPerformerComponent[] | undefined): this {
    if (isDefinedList<MedicationAdministrationPerformerComponent>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.performer; Provided value array has an element that is not an instance of MedicationAdministrationPerformerComponent.`;
      assertFhirTypeList<MedicationAdministrationPerformerComponent>(value, MedicationAdministrationPerformerComponent, optErrMsg);
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationAdministrationPerformerComponent value to the `performer` array property.
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformer(value: MedicationAdministrationPerformerComponent | undefined): this {
    if (isDefined<MedicationAdministrationPerformerComponent>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.performer; Provided element is not an instance of MedicationAdministrationPerformerComponent.`;
      assertFhirType<MedicationAdministrationPerformerComponent>(value, MedicationAdministrationPerformerComponent, optErrMsg);
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<MedicationAdministrationPerformerComponent>(this.performer) && this.performer.some((item: MedicationAdministrationPerformerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if(!this.hasPerformer()) {
      this.performer = [] as MedicationAdministrationPerformerComponent[];
    }
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
      const optErrMsg = `Invalid MedicationAdministration.reason; Provided value array has an element that is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid MedicationAdministration.reason; Provided element is not an instance of CodeableReference.`;
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
   * @returns the `request` property value as a Reference object; else an empty Reference object
   */
  public getRequest(): Reference {
    return this.request ?? new Reference();
  }

  /**
   * Assigns the provided Request object value to the `request` property.
   *
   * @decorator `@ReferenceTargets('MedicationAdministration.request', ['MedicationRequest',])`
   *
   * @param value - the `request` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationAdministration.request', [
    'MedicationRequest',
  ])
  public setRequest(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.request = value;
    } else {
      this.request = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `request` property exists and has a value; `false` otherwise
   */
  public hasRequest(): boolean {
    return isDefined<Reference>(this.request) && !this.request.isEmpty();
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
      const optErrMsg = `Invalid MedicationAdministration.device; Provided value array has an element that is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid MedicationAdministration.device; Provided element is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid MedicationAdministration.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid MedicationAdministration.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `dosage` property value as a MedicationAdministrationDosageComponent object if defined; else an empty MedicationAdministrationDosageComponent object
   */
  public getDosage(): MedicationAdministrationDosageComponent {
    return this.dosage ?? new MedicationAdministrationDosageComponent();
  }

  /**
   * Assigns the provided Dosage object value to the `dosage` property.
   *
   * @param value - the `dosage` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDosage(value: MedicationAdministrationDosageComponent | undefined): this {
    if (isDefined<MedicationAdministrationDosageComponent>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.dosage; Provided element is not an instance of MedicationAdministrationDosageComponent.`;
      assertFhirType<MedicationAdministrationDosageComponent>(value, MedicationAdministrationDosageComponent, optErrMsg);
      this.dosage = value;
    } else {
      this.dosage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dosage` property exists and has a value; `false` otherwise
   */
  public hasDosage(): boolean {
    return isDefined<MedicationAdministrationDosageComponent>(this.dosage) && !this.dosage.isEmpty();
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
   * @decorator `@ReferenceTargets('MedicationAdministration.eventHistory', ['Provenance',])`
   *
   * @param value - the `eventHistory` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationAdministration.eventHistory', [
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
   * @decorator `@ReferenceTargets('MedicationAdministration.eventHistory', ['Provenance',])`
   *
   * @param value - the `eventHistory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationAdministration.eventHistory', [
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
    return 'MedicationAdministration';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.basedOn,
      this.partOf,
      this.status,
      this.statusReason,
      this.category,
      this.medication,
      this.subject,
      this.encounter,
      this.supportingInformation,
      this.occurence,
      this.recorded,
      this.isSubPotent,
      this.subPotentReason,
      this.performer,
      this.reason,
      this.request,
      this.device,
      this.note,
      this.dosage,
      this.eventHistory,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.medication, this.subject, this.occurence, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationAdministration {
    const dest = new MedicationAdministration();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationAdministration): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    const partOfList = copyListValues<Reference>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    dest.status = this.status ? this.status.copy() : null;
    const statusReasonList = copyListValues<CodeableConcept>(this.statusReason);
    dest.statusReason = statusReasonList.length === 0 ? undefined : statusReasonList;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.medication = this.medication ? this.medication.copy() : null;
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    const supportingInformationList = copyListValues<Reference>(this.supportingInformation);
    dest.supportingInformation = supportingInformationList.length === 0 ? undefined : supportingInformationList;
    dest.occurence = this.occurence ? this.occurence.copy() as IDataType : null;
    dest.recorded = this.recorded?.copy();
    dest.isSubPotent = this.isSubPotent?.copy();
    const subPotentReasonList = copyListValues<CodeableConcept>(this.subPotentReason);
    dest.subPotentReason = subPotentReasonList.length === 0 ? undefined : subPotentReasonList;
    const performerList = copyListValues<MedicationAdministrationPerformerComponent>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    const reasonList = copyListValues<CodeableReference>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    dest.request = this.request?.copy();
    const deviceList = copyListValues<CodeableReference>(this.device);
    dest.device = deviceList.length === 0 ? undefined : deviceList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.dosage = this.dosage?.copy();
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

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasPartOf()) {
      setFhirComplexListJson(this.getPartOf(), 'partOf', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasStatusReason()) {
      setFhirComplexListJson(this.getStatusReason(), 'statusReason', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasMedication()) {
      setFhirComplexJson(this.getMedication(), 'medication', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasSupportingInformation()) {
      setFhirComplexListJson(this.getSupportingInformation(), 'supportingInformation', jsonObj);
    }

    if (this.hasOccurence()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOccurence()!, 'occurence', jsonObj);
    }

    if (this.hasRecordedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getRecordedElement(), 'recorded', jsonObj);
    }

    if (this.hasIsSubPotentElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getIsSubPotentElement(), 'isSubPotent', jsonObj);
    }

    if (this.hasSubPotentReason()) {
      setFhirComplexListJson(this.getSubPotentReason(), 'subPotentReason', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirBackboneElementListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasRequest()) {
      setFhirComplexJson(this.getRequest(), 'request', jsonObj);
    }

    if (this.hasDevice()) {
      setFhirComplexListJson(this.getDevice(), 'device', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasDosage()) {
      setFhirBackboneElementJson(this.getDosage(), 'dosage', jsonObj);
    }

    if (this.hasEventHistory()) {
      setFhirComplexListJson(this.getEventHistory(), 'eventHistory', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MedicationAdministrationPerformerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who or what performed the medication administration and what type of performance they did
 * - **Definition:** The performer of the medication treatment.  For devices this is the device that performed the administration of the medication.  An IV Pump would be an example of a device that is performing the administration. Both the IV Pump and the practitioner that set the rate or bolus on the pump can be listed as performers.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationAdministration](http://hl7.org/fhir/StructureDefinition/MedicationAdministration)
 */
export class MedicationAdministrationPerformerComponent extends BackboneElement implements IBackboneElement {
  constructor(actor: CodeableReference | null = null) {
    super();

    this.actor = null;
    if (isDefined<CodeableReference>(actor)) {
      this.setActor(actor);
    }
  }

  /**
   * Parse the provided `MedicationAdministrationPerformerComponent` JSON to instantiate the MedicationAdministrationPerformerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationAdministrationPerformerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationAdministrationPerformerComponent
   * @returns MedicationAdministrationPerformerComponent data model or undefined for `MedicationAdministrationPerformerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationAdministrationPerformerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationAdministrationPerformerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationAdministrationPerformerComponent();

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
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
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
   * MedicationAdministration.performer.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of performance
   * - **Definition:** Distinguishes the type of involvement of the performer in the medication administration.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private function_?: CodeableConcept | undefined;

  /**
   * MedicationAdministration.performer.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or what performed the medication administration
   * - **Definition:** Indicates who or what performed the medication administration.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private actor: CodeableReference | null;

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
      const optErrMsg = `Invalid MedicationAdministration.performer.function; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `actor` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getActor(): CodeableReference {
    return this.actor ?? new CodeableReference();
  }

  /**
   * Assigns the provided CodeableReference object value to the `actor` property.
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setActor(value: CodeableReference | undefined | null): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.performer.actor; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
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
    return isDefined<CodeableReference>(this.actor) && !this.actor.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationAdministration.performer';
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
  public override copy(): MedicationAdministrationPerformerComponent {
    const dest = new MedicationAdministrationPerformerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationAdministrationPerformerComponent): void {
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
 * MedicationAdministrationDosageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Details of how medication was taken
 * - **Definition:** Describes the medication dosage information details e.g. dose, rate, site, route, etc.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationAdministration](http://hl7.org/fhir/StructureDefinition/MedicationAdministration)
 */
export class MedicationAdministrationDosageComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MedicationAdministrationDosageComponent` JSON to instantiate the MedicationAdministrationDosageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationAdministrationDosageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationAdministrationDosageComponent
   * @returns MedicationAdministrationDosageComponent data model or undefined for `MedicationAdministrationDosageComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationAdministrationDosageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationAdministrationDosageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationAdministrationDosageComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = MedicationAdministrationDosageComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationAdministrationDosageComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextElement(datatype);
    }

    fieldName = 'site';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSite(datatype);
    }

    fieldName = 'route';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRoute(datatype);
    }

    fieldName = 'method';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMethod(datatype);
    }

    fieldName = 'dose';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDose(datatype);
    }

    fieldName = 'rate[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const rate: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setRate(rate);

    return instance;
  }

  /**
   * MedicationAdministration.dosage.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Free text dosage instructions e.g. SIG
   * - **Definition:** Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans. The dosage instructions should reflect the dosage of the medication that was administered.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text?: StringType | undefined;

  /**
   * MedicationAdministration.dosage.site Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Body site administered to
   * - **Definition:** A coded specification of the anatomic site where the medication first entered the body.  For example, "left arm".
   * - **Comment:** If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [http://hl7.org/fhir/StructureDefinition/bodySite](http://hl7.org/fhir/extensions/https://hl7.org/fhir/StructureDefinition-bodySite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private site?: CodeableConcept | undefined;

  /**
   * MedicationAdministration.dosage.route Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Path of substance into body
   * - **Definition:** A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private route?: CodeableConcept | undefined;

  /**
   * MedicationAdministration.dosage.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How drug was administered
   * - **Definition:** A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  For example, Slow Push, Deep IV.
   * - **Comment:** One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private method?: CodeableConcept | undefined;

  /**
   * MedicationAdministration.dosage.dose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount of medication per dose
   * - **Definition:** The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.
   * - **Comment:** If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dose?: Quantity | undefined;

  /**
   * MedicationAdministration.dosage.rate[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationAdministration.dosage.rate[x]', ['Ratio','Quantity',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dose quantity per unit of time
   * - **Definition:** Identifies the speed with which the medication was or will be introduced into the patient.  Typically, the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time, e.g. 500 ml per 2 hours.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
   * - **Comment:** If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
   * - **FHIR Types:**
   *     'Ratio',
   *     'Quantity',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MedicationAdministration.dosage.rate[x]',[
    'Ratio',
    'Quantity',
  ])
  private rate?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `text` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextElement(): StringType {
    return this.text ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MedicationAdministration.dosage.text; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.text = element;
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<StringType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirString if defined; else undefined
   */
  public getText(): fhirString | undefined {
    return this.text?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.dosage.text (${String(value)})`;
      this.text = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /**
   * @returns the `site` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSite(): CodeableConcept {
    return this.site ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Site object value to the `site` property.
   *
   * @param value - the `site` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSite(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.dosage.site; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.site = value;
    } else {
      this.site = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `site` property exists and has a value; `false` otherwise
   */
  public hasSite(): boolean {
    return isDefined<CodeableConcept>(this.site) && !this.site.isEmpty();
  }

  /**
   * @returns the `route` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRoute(): CodeableConcept {
    return this.route ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Route object value to the `route` property.
   *
   * @param value - the `route` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRoute(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.dosage.route; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.route = value;
    } else {
      this.route = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `route` property exists and has a value; `false` otherwise
   */
  public hasRoute(): boolean {
    return isDefined<CodeableConcept>(this.route) && !this.route.isEmpty();
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
      const optErrMsg = `Invalid MedicationAdministration.dosage.method; Provided element is not an instance of CodeableConcept.`;
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

  /**
   * @returns the `dose` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getDose(): Quantity {
    return this.dose ?? new Quantity();
  }

  /**
   * Assigns the provided Dose object value to the `dose` property.
   *
   * @param value - the `dose` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDose(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MedicationAdministration.dosage.dose; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.dose = value;
    } else {
      this.dose = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dose` property exists and has a value; `false` otherwise
   */
  public hasDose(): boolean {
    return isDefined<Quantity>(this.dose) && !this.dose.isEmpty();
  }

  /**
   * @returns the `rate` property value as a DataType object if defined; else undefined
   */
  public getRate(): IDataType | undefined {
    return this.rate;
  }

  /**
   * Assigns the provided DataType object value to the `rate` property.
   *
   * @decorator `@ChoiceDataTypes('MedicationAdministration.dosage.rate[x]')`
   *
   * @param value - the `rate` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationAdministration.dosage.rate[x]')
  public setRate(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.rate = value;
    } else {
      this.rate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rate` property exists and has a value; `false` otherwise
   */
  public hasRate(): boolean {
    return isDefined<IDataType>(this.rate) && !this.rate.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `rate` property value as a Ratio object if defined; else undefined
   */
  public getRateRatio(): Ratio | undefined {
    if (!isDefined<IDataType | undefined>(this.rate)) {
      return undefined;
    }
    if (!(this.rate instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationAdministration.dosage.rate[x]: Expected Ratio but encountered ${this.rate.fhirType()}`,
      );
    }
    return this.rate;
  }

  /**
   * @returns `true` if the `rate` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasRateRatio(): boolean {
    return this.hasRate() && this.rate instanceof Ratio;
  }

  /**
   * @returns the `rate` property value as a Quantity object if defined; else undefined
   */
  public getRateQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.rate)) {
      return undefined;
    }
    if (!(this.rate instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationAdministration.dosage.rate[x]: Expected Quantity but encountered ${this.rate.fhirType()}`,
      );
    }
    return this.rate;
  }

  /**
   * @returns `true` if the `rate` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasRateQuantity(): boolean {
    return this.hasRate() && this.rate instanceof Quantity;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationAdministration.dosage';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.text,
      this.site,
      this.route,
      this.method,
      this.dose,
      this.rate,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationAdministrationDosageComponent {
    const dest = new MedicationAdministrationDosageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationAdministrationDosageComponent): void {
    super.copyValues(dest);
    dest.text = this.text?.copy();
    dest.site = this.site?.copy();
    dest.route = this.route?.copy();
    dest.method = this.method?.copy();
    dest.dose = this.dose?.copy();
    dest.rate = this.rate?.copy() as IDataType;
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

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextElement(), 'text', jsonObj);
    }

    if (this.hasSite()) {
      setFhirComplexJson(this.getSite(), 'site', jsonObj);
    }

    if (this.hasRoute()) {
      setFhirComplexJson(this.getRoute(), 'route', jsonObj);
    }

    if (this.hasMethod()) {
      setFhirComplexJson(this.getMethod(), 'method', jsonObj);
    }

    if (this.hasDose()) {
      setFhirComplexJson(this.getDose(), 'dose', jsonObj);
    }

    if (this.hasRate()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getRate()!, 'rate', jsonObj);
    }

    return jsonObj;
  }
}
