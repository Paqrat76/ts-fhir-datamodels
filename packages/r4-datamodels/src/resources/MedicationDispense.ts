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
 * MedicationDispense Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicationDispense
 * StructureDefinition.name: MedicationDispense
 * StructureDefinition.description: Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 * StructureDefinition.fhirVersion: 4.0.1
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
  PrimitiveType,
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
import { Annotation, CodeableConcept, Dosage, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Reference } from '../complex-types/complex-datatypes';
import { MedicationdispenseStatusEnum } from '../code-systems/MedicationdispenseStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MedicationDispense Class
 *
 * @remarks
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 *
 * **FHIR Specification**
 * - **Short:** Dispensing a medication to a named patient
 * - **Definition:** Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationDispense](http://hl7.org/fhir/StructureDefinition/MedicationDispense)
 */
export class MedicationDispense extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, medication: IDataType | null = null) {
    super();

    this.medicationdispenseStatusEnum = new MedicationdispenseStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<MedicationdispenseStatusEnum>(
      status,
      MedicationdispenseStatusEnum,
      this.medicationdispenseStatusEnum,
      'MedicationDispense.status',
    );

    this.medication = null;
    if (isDefined<IDataType>(medication)) {
      this.setMedication(medication);
    }

  }

  /**
   * Parse the provided `MedicationDispense` JSON to instantiate the MedicationDispense data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationDispense`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationDispense
   * @returns MedicationDispense data model or undefined for `MedicationDispense`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicationDispense | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationDispense';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationDispense();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicationDispense');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = MedicationDispense[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationDispense`;
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
        instance.setStatus(null);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      instance.setStatus(null);
    }

    fieldName = 'statusReason[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const statusReason: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setStatusReason(statusReason);

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCategory(datatype);
    }

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
      instance.setSubject(datatype);
    }

    fieldName = 'context';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContext(datatype);
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

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MedicationDispensePerformerComponent | undefined = MedicationDispensePerformerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPerformer(component);
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

    fieldName = 'authorizingPrescription';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAuthorizingPrescription(datatype);
        }
      });
  }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'daysSupply';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDaysSupply(datatype);
    }

    fieldName = 'whenPrepared';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setWhenPreparedElement(datatype);
    }

    fieldName = 'whenHandedOver';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setWhenHandedOverElement(datatype);
    }

    fieldName = 'destination';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDestination(datatype);
    }

    fieldName = 'receiver';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReceiver(datatype);
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

    fieldName = 'substitution';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MedicationDispenseSubstitutionComponent | undefined = MedicationDispenseSubstitutionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubstitution(component);
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
   * MedicationDispense.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External identifier
   * - **Definition:** Identifiers associated with this Medication Dispense that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * MedicationDispense.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Event that dispense is part of
   * - **Definition:** The procedure that trigger the dispense.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private partOf?: Reference[] | undefined;

  /**
   * FHIR CodeSystem: MedicationdispenseStatus
   *
   * @see {@link MedicationdispenseStatusEnum }
   */
  private readonly medicationdispenseStatusEnum: MedicationdispenseStatusEnum;

  /**
   * MedicationDispense.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown
   * - **Definition:** A code specifying the state of the set of dispense events.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MedicationdispenseStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * MedicationDispense.statusReason[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationDispense.statusReason[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why a dispense was not performed
   * - **Definition:** Indicates the reason why a dispense was not performed.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('MedicationDispense.statusReason[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private statusReason?: IDataType | undefined;

  /**
   * MedicationDispense.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of medication dispense
   * - **Definition:** Indicates the type of medication dispense (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)).
   * - **Comment:** The category can be used to include where the medication is expected to be consumed or other types of dispenses.  Invariants can be used to bind to different value sets when profiling to bind.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept | undefined;

  /**
   * MedicationDispense.medication[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationDispense.medication[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What medication was supplied
   * - **Definition:** Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
   * - **Comment:** If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MedicationDispense.medication[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private medication: IDataType | null;

  /**
   * MedicationDispense.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who the dispense is for
   * - **Definition:** A link to a resource representing the person or the group to whom the medication will be given.
   * - **Comment:** SubstanceAdministration->subject->Patient.
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
   * MedicationDispense.context Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter / Episode associated with event
   * - **Definition:** The encounter or episode of care that establishes the context for this event.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *       'http://hl7.org/fhir/StructureDefinition/EpisodeOfCare',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private context?: Reference | undefined;

  /**
   * MedicationDispense.supportingInformation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information that supports the dispensing of the medication
   * - **Definition:** Additional information that supports the medication being dispensed.
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
   * MedicationDispense.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who performed event
   * - **Definition:** Indicates who or what performed the event.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performer?: MedicationDispensePerformerComponent[] | undefined;

  /**
   * MedicationDispense.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the dispense occurred
   * - **Definition:** The principal physical location where the dispense was performed.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private location?: Reference | undefined;

  /**
   * MedicationDispense.authorizingPrescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Medication order that authorizes the dispense
   * - **Definition:** Indicates the medication order that is being dispensed against.
   * - **Comment:** Maps to basedOn in Event logical model.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authorizingPrescription?: Reference[] | undefined;

  /**
   * MedicationDispense.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Trial fill, partial fill, emergency fill, etc.
   * - **Definition:** Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * MedicationDispense.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount dispensed
   * - **Definition:** The amount of medication that has been dispensed. Includes unit of measure.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * MedicationDispense.daysSupply Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount of medication expressed as a timing amount
   * - **Definition:** The amount of medication expressed as a timing amount.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private daysSupply?: Quantity | undefined;

  /**
   * MedicationDispense.whenPrepared Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When product was packaged and reviewed
   * - **Definition:** The time when the dispensed product was packaged and reviewed.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private whenPrepared?: DateTimeType | undefined;

  /**
   * MedicationDispense.whenHandedOver Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When product was given out
   * - **Definition:** The time the dispensed product was provided to the patient or their representative.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private whenHandedOver?: DateTimeType | undefined;

  /**
   * MedicationDispense.destination Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the medication was sent
   * - **Definition:** Identification of the facility/location where the medication was shipped to, as part of the dispense event.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private destination?: Reference | undefined;

  /**
   * MedicationDispense.receiver Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who collected the medication
   * - **Definition:** Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private receiver?: Reference[] | undefined;

  /**
   * MedicationDispense.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about the dispense
   * - **Definition:** Extra information about the dispense that could not be conveyed in the other attributes.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * MedicationDispense.dosageInstruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How the medication is to be used by the patient or administered by the caregiver
   * - **Definition:** Indicates how the medication is to be used by the patient.
   * - **Comment:** When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates. The pharmacist reviews the medication order prior to dispense and updates the dosageInstruction based on the actual product being dispensed.
   * - **FHIR Type:** `Dosage`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dosageInstruction?: Dosage[] | undefined;

  /**
   * MedicationDispense.substitution Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether a substitution was performed on the dispense
   * - **Definition:** Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private substitution?: MedicationDispenseSubstitutionComponent | undefined;

  /**
   * MedicationDispense.detectedIssue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Clinical issue with action
   * - **Definition:** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. drug-drug interaction, duplicate therapy, dosage alert etc.
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
   * MedicationDispense.eventHistory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A list of relevant lifecycle events
   * - **Definition:** A summary of the events of interest that have occurred, such as when the dispense was verified.
   * - **Comment:** This might not include provenances for all versions of the request - only those deemed "relevant" or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a "relevant" change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
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
      const optErrMsg = `Invalid MedicationDispense.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicationDispense.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `partOf` property value as a Reference array
   */
  public getPartOf(): Reference[] {
    return this.partOf ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `partOf` property.
   *
   * @decorator `@ReferenceTargets('MedicationDispense.partOf', ['Procedure',])`
   *
   * @param value - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.partOf', [
    'Procedure',
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
   * @decorator `@ReferenceTargets('MedicationDispense.partOf', ['Procedure',])`
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.partOf', [
    'Procedure',
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
   * @see CodeSystem Enumeration: {@link MedicationdispenseStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationdispenseStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid MedicationDispense.status`;
      assertEnumCodeType<MedicationdispenseStatusEnum>(enumType, MedicationdispenseStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link MedicationdispenseStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationdispenseStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MedicationDispense.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.medicationdispenseStatusEnum);
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
   * @see CodeSystem Enumeration: {@link MedicationdispenseStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationdispenseStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MedicationDispense.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.medicationdispenseStatusEnum);
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
   * @returns the `statusReason` property value as a DataType object if defined; else undefined
   */
  public getStatusReason(): IDataType | undefined {
    return this.statusReason;
  }

  /**
   * Assigns the provided DataType object value to the `statusReason` property.
   *
   * @decorator `@ChoiceDataTypes('MedicationDispense.statusReason[x]')`
   *
   * @param value - the `statusReason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationDispense.statusReason[x]')
  public setStatusReason(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.statusReason) && !this.statusReason.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `statusReason` property value as a CodeableConcept object if defined; else undefined
   */
  public getStatusReasonCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.statusReason)) {
      return undefined;
    }
    if (!(this.statusReason instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationDispense.statusReason[x]: Expected CodeableConcept but encountered ${this.statusReason.fhirType()}`,
      );
    }
    return this.statusReason;
  }

  /**
   * @returns `true` if the `statusReason` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasStatusReasonCodeableConcept(): boolean {
    return this.hasStatusReason() && this.statusReason instanceof CodeableConcept;
  }

  /**
   * @returns the `statusReason` property value as a Reference object if defined; else undefined
   */
  public getStatusReasonReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.statusReason)) {
      return undefined;
    }
    if (!(this.statusReason instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationDispense.statusReason[x]: Expected Reference but encountered ${this.statusReason.fhirType()}`,
      );
    }
    return this.statusReason;
  }

  /**
   * @returns `true` if the `statusReason` property exists as a Reference and has a value; `false` otherwise
   */
  public hasStatusReasonReference(): boolean {
    return this.hasStatusReason() && this.statusReason instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Category object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationDispense.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefined<CodeableConcept>(this.category) && !this.category.isEmpty();
  }

  /**
   * @returns the `medication` property value as a DataType object; else null
   */
  public getMedication(): IDataType | null {
    return this.medication;
  }

  /**
   * Assigns the provided DataType object value to the `medication` property.
   *
   * @decorator `@ChoiceDataTypes('MedicationDispense.medication[x]')`
   *
   * @param value - the `medication` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationDispense.medication[x]')
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
        `DataType mismatch for MedicationDispense.medication[x]: Expected CodeableConcept but encountered ${this.medication.fhirType()}`,
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
        `DataType mismatch for MedicationDispense.medication[x]: Expected Reference but encountered ${this.medication.fhirType()}`,
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
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('MedicationDispense.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.subject', [
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
   * @returns the `context` property value as a Reference object; else an empty Reference object
   */
  public getContext(): Reference {
    return this.context ?? new Reference();
  }

  /**
   * Assigns the provided Context object value to the `context` property.
   *
   * @decorator `@ReferenceTargets('MedicationDispense.context', ['Encounter','EpisodeOfCare',])`
   *
   * @param value - the `context` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.context', [
    'Encounter',
  
    'EpisodeOfCare',
  ])
  public setContext(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.context = value;
    } else {
      this.context = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `context` property exists and has a value; `false` otherwise
   */
  public hasContext(): boolean {
    return isDefined<Reference>(this.context) && !this.context.isEmpty();
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
   * @decorator `@ReferenceTargets('MedicationDispense.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.supportingInformation', [
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
   * @decorator `@ReferenceTargets('MedicationDispense.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.supportingInformation', [
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
   * @returns the `performer` property value as a MedicationDispensePerformerComponent array
   */
  public getPerformer(): MedicationDispensePerformerComponent[] {
    return this.performer ?? ([] as MedicationDispensePerformerComponent[]);
  }

  /**
   * Assigns the provided MedicationDispensePerformerComponent array value to the `performer` property.
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformer(value: MedicationDispensePerformerComponent[] | undefined): this {
    if (isDefinedList<MedicationDispensePerformerComponent>(value)) {
      const optErrMsg = `Invalid MedicationDispense.performer; Provided value array has an element that is not an instance of MedicationDispensePerformerComponent.`;
      assertFhirTypeList<MedicationDispensePerformerComponent>(value, MedicationDispensePerformerComponent, optErrMsg);
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided MedicationDispensePerformerComponent value to the `performer` array property.
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformer(value: MedicationDispensePerformerComponent | undefined): this {
    if (isDefined<MedicationDispensePerformerComponent>(value)) {
      const optErrMsg = `Invalid MedicationDispense.performer; Provided element is not an instance of MedicationDispensePerformerComponent.`;
      assertFhirType<MedicationDispensePerformerComponent>(value, MedicationDispensePerformerComponent, optErrMsg);
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<MedicationDispensePerformerComponent>(this.performer) && this.performer.some((item: MedicationDispensePerformerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if(!this.hasPerformer()) {
      this.performer = [] as MedicationDispensePerformerComponent[];
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
   * @decorator `@ReferenceTargets('MedicationDispense.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.location', [
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
   * @returns the `authorizingPrescription` property value as a Reference array
   */
  public getAuthorizingPrescription(): Reference[] {
    return this.authorizingPrescription ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `authorizingPrescription` property.
   *
   * @decorator `@ReferenceTargets('MedicationDispense.authorizingPrescription', ['MedicationRequest',])`
   *
   * @param value - the `authorizingPrescription` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.authorizingPrescription', [
    'MedicationRequest',
  ])
  public setAuthorizingPrescription(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.authorizingPrescription = value;
    } else {
      this.authorizingPrescription = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `authorizingPrescription` array property.
   *
   * @decorator `@ReferenceTargets('MedicationDispense.authorizingPrescription', ['MedicationRequest',])`
   *
   * @param value - the `authorizingPrescription` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.authorizingPrescription', [
    'MedicationRequest',
  ])
  public addAuthorizingPrescription(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAuthorizingPrescription();
      this.authorizingPrescription?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `authorizingPrescription` property exists and has a value; `false` otherwise
   */
  public hasAuthorizingPrescription(): boolean {
    return isDefinedList<Reference>(this.authorizingPrescription) && this.authorizingPrescription.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `authorizingPrescription` property
   */
  private initAuthorizingPrescription(): void {
    if (!this.hasAuthorizingPrescription()) {
      this.authorizingPrescription = [] as Reference[];
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
      const optErrMsg = `Invalid MedicationDispense.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicationDispense.quantity; Provided element is not an instance of Quantity.`;
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
   * @returns the `daysSupply` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getDaysSupply(): Quantity {
    return this.daysSupply ?? new Quantity();
  }

  /**
   * Assigns the provided DaysSupply object value to the `daysSupply` property.
   *
   * @param value - the `daysSupply` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDaysSupply(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid MedicationDispense.daysSupply; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.daysSupply = value;
    } else {
      this.daysSupply = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `daysSupply` property exists and has a value; `false` otherwise
   */
  public hasDaysSupply(): boolean {
    return isDefined<Quantity>(this.daysSupply) && !this.daysSupply.isEmpty();
  }

  /**
   * @returns the `whenPrepared` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getWhenPreparedElement(): DateTimeType {
    return this.whenPrepared ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `whenPrepared` property.
   *
   * @param element - the `whenPrepared` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWhenPreparedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid MedicationDispense.whenPrepared; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.whenPrepared = element;
    } else {
      this.whenPrepared = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `whenPrepared` property exists and has a value; `false` otherwise
   */
  public hasWhenPreparedElement(): boolean {
    return isDefined<DateTimeType>(this.whenPrepared) && !this.whenPrepared.isEmpty();
  }

  /**
   * @returns the `whenPrepared` property value as a fhirDateTime if defined; else undefined
   */
  public getWhenPrepared(): fhirDateTime | undefined {
    return this.whenPrepared?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `whenPrepared` property.
   *
   * @param value - the `whenPrepared` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWhenPrepared(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid MedicationDispense.whenPrepared (${String(value)})`;
      this.whenPrepared = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.whenPrepared = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `whenPrepared` property exists and has a value; `false` otherwise
   */
  public hasWhenPrepared(): boolean {
    return this.hasWhenPreparedElement();
  }

  /**
   * @returns the `whenHandedOver` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getWhenHandedOverElement(): DateTimeType {
    return this.whenHandedOver ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `whenHandedOver` property.
   *
   * @param element - the `whenHandedOver` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWhenHandedOverElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid MedicationDispense.whenHandedOver; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.whenHandedOver = element;
    } else {
      this.whenHandedOver = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `whenHandedOver` property exists and has a value; `false` otherwise
   */
  public hasWhenHandedOverElement(): boolean {
    return isDefined<DateTimeType>(this.whenHandedOver) && !this.whenHandedOver.isEmpty();
  }

  /**
   * @returns the `whenHandedOver` property value as a fhirDateTime if defined; else undefined
   */
  public getWhenHandedOver(): fhirDateTime | undefined {
    return this.whenHandedOver?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `whenHandedOver` property.
   *
   * @param value - the `whenHandedOver` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWhenHandedOver(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid MedicationDispense.whenHandedOver (${String(value)})`;
      this.whenHandedOver = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.whenHandedOver = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `whenHandedOver` property exists and has a value; `false` otherwise
   */
  public hasWhenHandedOver(): boolean {
    return this.hasWhenHandedOverElement();
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
   * @decorator `@ReferenceTargets('MedicationDispense.destination', ['Location',])`
   *
   * @param value - the `destination` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.destination', [
    'Location',
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
   * @returns the `receiver` property value as a Reference array
   */
  public getReceiver(): Reference[] {
    return this.receiver ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `receiver` property.
   *
   * @decorator `@ReferenceTargets('MedicationDispense.receiver', ['Patient','Practitioner',])`
   *
   * @param value - the `receiver` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.receiver', [
    'Patient',
  
    'Practitioner',
  ])
  public setReceiver(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.receiver = value;
    } else {
      this.receiver = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `receiver` array property.
   *
   * @decorator `@ReferenceTargets('MedicationDispense.receiver', ['Patient','Practitioner',])`
   *
   * @param value - the `receiver` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.receiver', [
    'Patient',
  
    'Practitioner',
  ])
  public addReceiver(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReceiver();
      this.receiver?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `receiver` property exists and has a value; `false` otherwise
   */
  public hasReceiver(): boolean {
    return isDefinedList<Reference>(this.receiver) && this.receiver.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `receiver` property
   */
  private initReceiver(): void {
    if (!this.hasReceiver()) {
      this.receiver = [] as Reference[];
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
      const optErrMsg = `Invalid MedicationDispense.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid MedicationDispense.note; Provided element is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid MedicationDispense.dosageInstruction; Provided value array has an element that is not an instance of Dosage.`;
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
      const optErrMsg = `Invalid MedicationDispense.dosageInstruction; Provided element is not an instance of Dosage.`;
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
   * @returns the `substitution` property value as a MedicationDispenseSubstitutionComponent object if defined; else an empty MedicationDispenseSubstitutionComponent object
   */
  public getSubstitution(): MedicationDispenseSubstitutionComponent {
    return this.substitution ?? new MedicationDispenseSubstitutionComponent();
  }

  /**
   * Assigns the provided Substitution object value to the `substitution` property.
   *
   * @param value - the `substitution` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubstitution(value: MedicationDispenseSubstitutionComponent | undefined): this {
    if (isDefined<MedicationDispenseSubstitutionComponent>(value)) {
      const optErrMsg = `Invalid MedicationDispense.substitution; Provided element is not an instance of MedicationDispenseSubstitutionComponent.`;
      assertFhirType<MedicationDispenseSubstitutionComponent>(value, MedicationDispenseSubstitutionComponent, optErrMsg);
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
    return isDefined<MedicationDispenseSubstitutionComponent>(this.substitution) && !this.substitution.isEmpty();
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
   * @decorator `@ReferenceTargets('MedicationDispense.detectedIssue', ['DetectedIssue',])`
   *
   * @param value - the `detectedIssue` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.detectedIssue', [
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
   * @decorator `@ReferenceTargets('MedicationDispense.detectedIssue', ['DetectedIssue',])`
   *
   * @param value - the `detectedIssue` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.detectedIssue', [
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
   * @decorator `@ReferenceTargets('MedicationDispense.eventHistory', ['Provenance',])`
   *
   * @param value - the `eventHistory` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.eventHistory', [
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
   * @decorator `@ReferenceTargets('MedicationDispense.eventHistory', ['Provenance',])`
   *
   * @param value - the `eventHistory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.eventHistory', [
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
    return 'MedicationDispense';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.partOf,
      this.status,
      this.statusReason,
      this.category,
      this.medication,
      this.subject,
      this.context,
      this.supportingInformation,
      this.performer,
      this.location,
      this.authorizingPrescription,
      this.type_,
      this.quantity,
      this.daysSupply,
      this.whenPrepared,
      this.whenHandedOver,
      this.destination,
      this.receiver,
      this.note,
      this.dosageInstruction,
      this.substitution,
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
      this.status, this.medication, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationDispense {
    const dest = new MedicationDispense();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationDispense): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const partOfList = copyListValues<Reference>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    dest.status = this.status ? this.status.copy() : null;
    dest.statusReason = this.statusReason?.copy() as IDataType;
    dest.category = this.category?.copy();
    dest.medication = this.medication ? this.medication.copy() as IDataType : null;
    dest.subject = this.subject?.copy();
    dest.context = this.context?.copy();
    const supportingInformationList = copyListValues<Reference>(this.supportingInformation);
    dest.supportingInformation = supportingInformationList.length === 0 ? undefined : supportingInformationList;
    const performerList = copyListValues<MedicationDispensePerformerComponent>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    dest.location = this.location?.copy();
    const authorizingPrescriptionList = copyListValues<Reference>(this.authorizingPrescription);
    dest.authorizingPrescription = authorizingPrescriptionList.length === 0 ? undefined : authorizingPrescriptionList;
    dest.type_ = this.type_?.copy();
    dest.quantity = this.quantity?.copy();
    dest.daysSupply = this.daysSupply?.copy();
    dest.whenPrepared = this.whenPrepared?.copy();
    dest.whenHandedOver = this.whenHandedOver?.copy();
    dest.destination = this.destination?.copy();
    const receiverList = copyListValues<Reference>(this.receiver);
    dest.receiver = receiverList.length === 0 ? undefined : receiverList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const dosageInstructionList = copyListValues<Dosage>(this.dosageInstruction);
    dest.dosageInstruction = dosageInstructionList.length === 0 ? undefined : dosageInstructionList;
    dest.substitution = this.substitution?.copy();
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

    if (this.hasPartOf()) {
      setFhirComplexListJson(this.getPartOf(), 'partOf', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasStatusReason()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getStatusReason()!, 'statusReason', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasMedication()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getMedication()!, 'medication', jsonObj);
    } else {
      jsonObj['medication'] = null;
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasContext()) {
      setFhirComplexJson(this.getContext(), 'context', jsonObj);
    }

    if (this.hasSupportingInformation()) {
      setFhirComplexListJson(this.getSupportingInformation(), 'supportingInformation', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirBackboneElementListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasAuthorizingPrescription()) {
      setFhirComplexListJson(this.getAuthorizingPrescription(), 'authorizingPrescription', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasDaysSupply()) {
      setFhirComplexJson(this.getDaysSupply(), 'daysSupply', jsonObj);
    }

    if (this.hasWhenPreparedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getWhenPreparedElement(), 'whenPrepared', jsonObj);
    }

    if (this.hasWhenHandedOverElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getWhenHandedOverElement(), 'whenHandedOver', jsonObj);
    }

    if (this.hasDestination()) {
      setFhirComplexJson(this.getDestination(), 'destination', jsonObj);
    }

    if (this.hasReceiver()) {
      setFhirComplexListJson(this.getReceiver(), 'receiver', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasDosageInstruction()) {
      setFhirComplexListJson(this.getDosageInstruction(), 'dosageInstruction', jsonObj);
    }

    if (this.hasSubstitution()) {
      setFhirBackboneElementJson(this.getSubstitution(), 'substitution', jsonObj);
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
 * MedicationDispensePerformerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who performed event
 * - **Definition:** Indicates who or what performed the event.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationDispense](http://hl7.org/fhir/StructureDefinition/MedicationDispense)
 */
export class MedicationDispensePerformerComponent extends BackboneElement implements IBackboneElement {
  constructor(actor: Reference | null = null) {
    super();

    this.actor = null;
    if (isDefined<Reference>(actor)) {
      this.setActor(actor);
    }
  }

  /**
   * Parse the provided `MedicationDispensePerformerComponent` JSON to instantiate the MedicationDispensePerformerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationDispensePerformerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationDispensePerformerComponent
   * @returns MedicationDispensePerformerComponent data model or undefined for `MedicationDispensePerformerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationDispensePerformerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationDispensePerformerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationDispensePerformerComponent();

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
   * MedicationDispense.performer.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who performed the dispense and what they did
   * - **Definition:** Distinguishes the type of performer in the dispense.  For example, date enterer, packager, final checker.
   * - **Requirements:** Allows disambiguation of the types of involvement of different performers.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private function_?: CodeableConcept | undefined;

  /**
   * MedicationDispense.performer.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual who was performing
   * - **Definition:** The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
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
      const optErrMsg = `Invalid MedicationDispense.performer.function; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('MedicationDispense.performer.actor', ['Practitioner','PractitionerRole','Organization','Patient','Device','RelatedPerson',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.performer.actor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Patient',
  
    'Device',
  
    'RelatedPerson',
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
    return 'MedicationDispense.performer';
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
  public override copy(): MedicationDispensePerformerComponent {
    const dest = new MedicationDispensePerformerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationDispensePerformerComponent): void {
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
 * MedicationDispenseSubstitutionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Whether a substitution was performed on the dispense
 * - **Definition:** Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationDispense](http://hl7.org/fhir/StructureDefinition/MedicationDispense)
 */
export class MedicationDispenseSubstitutionComponent extends BackboneElement implements IBackboneElement {
  constructor(wasSubstituted: BooleanType | fhirBoolean | null = null) {
    super();

    this.wasSubstituted = null;
    if (isDefined<BooleanType | fhirBoolean>(wasSubstituted)) {
      if (wasSubstituted instanceof PrimitiveType) {
        this.setWasSubstitutedElement(wasSubstituted);
      } else {
        this.setWasSubstituted(wasSubstituted);
      }
    }
  }

  /**
   * Parse the provided `MedicationDispenseSubstitutionComponent` JSON to instantiate the MedicationDispenseSubstitutionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationDispenseSubstitutionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationDispenseSubstitutionComponent
   * @returns MedicationDispenseSubstitutionComponent data model or undefined for `MedicationDispenseSubstitutionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationDispenseSubstitutionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationDispenseSubstitutionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationDispenseSubstitutionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'wasSubstituted';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setWasSubstituted(null);
      } else {
        instance.setWasSubstitutedElement(datatype);
      }
    } else {
      instance.setWasSubstituted(null);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReason(datatype);
        }
      });
    }

    fieldName = 'responsibleParty';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addResponsibleParty(datatype);
        }
      });
  }

    return instance;
  }

  /**
   * MedicationDispense.substitution.wasSubstituted Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether a substitution was or was not performed on the dispense
   * - **Definition:** True if the dispenser dispensed a different drug or product from what was prescribed.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private wasSubstituted: BooleanType | null;

  /**
   * MedicationDispense.substitution.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code signifying whether a different drug was dispensed from what was prescribed
   * - **Definition:** A code signifying whether a different drug was dispensed from what was prescribed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * MedicationDispense.substitution.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why was substitution made
   * - **Definition:** Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableConcept[] | undefined;

  /**
   * MedicationDispense.substitution.responsibleParty Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is responsible for the substitution
   * - **Definition:** The person or organization that has primary responsibility for the substitution.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private responsibleParty?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `wasSubstituted` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getWasSubstitutedElement(): BooleanType {
    return this.wasSubstituted ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `wasSubstituted` property.
   *
   * @param element - the `wasSubstituted` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWasSubstitutedElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid MedicationDispense.substitution.wasSubstituted; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.wasSubstituted = element;
    } else {
      this.wasSubstituted = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `wasSubstituted` property exists and has a value; `false` otherwise
   */
  public hasWasSubstitutedElement(): boolean {
    return isDefined<BooleanType>(this.wasSubstituted) && !this.wasSubstituted.isEmpty();
  }

  /**
   * @returns the `wasSubstituted` property value as a fhirBoolean if defined; else null
   */
  public getWasSubstituted(): fhirBoolean | null {
    if (this.wasSubstituted?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.wasSubstituted.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `wasSubstituted` property.
   *
   * @param value - the `wasSubstituted` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWasSubstituted(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid MedicationDispense.substitution.wasSubstituted (${String(value)})`;
      this.wasSubstituted = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.wasSubstituted = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `wasSubstituted` property exists and has a value; `false` otherwise
   */
  public hasWasSubstituted(): boolean {
    return this.hasWasSubstitutedElement();
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
      const optErrMsg = `Invalid MedicationDispense.substitution.type; Provided element is not an instance of CodeableConcept.`;
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

  /**
   * @returns the `reason` property value as a CodeableConcept array
   */
  public getReason(): CodeableConcept[] {
    return this.reason ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `reason` property.
   *
   * @param value - the `reason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationDispense.substitution.reason; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `reason` array property.
   *
   * @param value - the `reason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationDispense.substitution.reason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initReason();
      this.reason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefinedList<CodeableConcept>(this.reason) && this.reason.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `reason` property
   */
  private initReason(): void {
    if(!this.hasReason()) {
      this.reason = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `responsibleParty` property value as a Reference array
   */
  public getResponsibleParty(): Reference[] {
    return this.responsibleParty ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `responsibleParty` property.
   *
   * @decorator `@ReferenceTargets('MedicationDispense.substitution.responsibleParty', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `responsibleParty` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.substitution.responsibleParty', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setResponsibleParty(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.responsibleParty = value;
    } else {
      this.responsibleParty = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `responsibleParty` array property.
   *
   * @decorator `@ReferenceTargets('MedicationDispense.substitution.responsibleParty', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `responsibleParty` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationDispense.substitution.responsibleParty', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public addResponsibleParty(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initResponsibleParty();
      this.responsibleParty?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `responsibleParty` property exists and has a value; `false` otherwise
   */
  public hasResponsibleParty(): boolean {
    return isDefinedList<Reference>(this.responsibleParty) && this.responsibleParty.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `responsibleParty` property
   */
  private initResponsibleParty(): void {
    if (!this.hasResponsibleParty()) {
      this.responsibleParty = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationDispense.substitution';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.wasSubstituted,
      this.type_,
      this.reason,
      this.responsibleParty,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.wasSubstituted, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationDispenseSubstitutionComponent {
    const dest = new MedicationDispenseSubstitutionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationDispenseSubstitutionComponent): void {
    super.copyValues(dest);
    dest.wasSubstituted = this.wasSubstituted ? this.wasSubstituted.copy() : null;
    dest.type_ = this.type_?.copy();
    const reasonList = copyListValues<CodeableConcept>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    const responsiblePartyList = copyListValues<Reference>(this.responsibleParty);
    dest.responsibleParty = responsiblePartyList.length === 0 ? undefined : responsiblePartyList;
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

    if (this.hasWasSubstitutedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getWasSubstitutedElement(), 'wasSubstituted', jsonObj);
    } else {
      jsonObj['wasSubstituted'] = null;
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasResponsibleParty()) {
      setFhirComplexListJson(this.getResponsibleParty(), 'responsibleParty', jsonObj);
    }

    return jsonObj;
  }
}
