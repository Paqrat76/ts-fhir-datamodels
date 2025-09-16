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
 * MedicationStatement Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MedicationStatement
 * StructureDefinition.name: MedicationStatement
 * StructureDefinition.description: A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient\'s memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.  The primary difference between a medicationstatement and a medicationadministration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medicationstatement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the Medication Statement information may come from the patient\'s memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
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
  MarkdownType,
  ReferenceTargets,
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
  fhirMarkdown,
  fhirMarkdownSchema,
  getPrimitiveTypeJson,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, CodeableReference, Dosage, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference, Timing } from '../complex-types/complex-datatypes';
import { MedicationStatementStatusEnum } from '../code-systems/MedicationStatementStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MedicationStatement Class
 *
 * @remarks
 * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient\'s memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.  The primary difference between a medicationstatement and a medicationadministration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medicationstatement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the Medication Statement information may come from the patient\'s memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
 *
 * **FHIR Specification**
 * - **Short:** Record of medication being taken by a patient
 * - **Definition:** A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient\'s memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.  The primary difference between a medicationstatement and a medicationadministration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medicationstatement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the Medication Statement information may come from the patient\'s memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information. The MedicationStatement resource was previously called MedicationStatement.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationStatement](http://hl7.org/fhir/StructureDefinition/MedicationStatement)
 */
export class MedicationStatement extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, medication: CodeableReference | null = null, subject: Reference | null = null) {
    super();

    this.medicationStatementStatusEnum = new MedicationStatementStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<MedicationStatementStatusEnum>(
      status,
      MedicationStatementStatusEnum,
      this.medicationStatementStatusEnum,
      'MedicationStatement.status',
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
   * Parse the provided `MedicationStatement` JSON to instantiate the MedicationStatement data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationStatement`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationStatement
   * @returns MedicationStatement data model or undefined for `MedicationStatement`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MedicationStatement | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationStatement';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationStatement();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MedicationStatement');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = MedicationStatement[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MedicationStatement`;
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

    fieldName = 'effective[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const effective: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setEffective(effective);

    fieldName = 'dateAsserted';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateAssertedElement(datatype);
    }

    fieldName = 'informationSource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addInformationSource(datatype);
          }
        });
      }
  }

    fieldName = 'derivedFrom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addDerivedFrom(datatype);
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

    fieldName = 'relatedClinicalInformation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRelatedClinicalInformation(datatype);
          }
        });
      }
  }

    fieldName = 'renderedDosageInstruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setRenderedDosageInstructionElement(datatype);
    }

    fieldName = 'dosage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Dosage | undefined = Dosage.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addDosage(datatype);
          }
        });
      }
    }

    fieldName = 'adherence';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MedicationStatementAdherenceComponent | undefined = MedicationStatementAdherenceComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAdherence(component);
    }

    return instance;
  }

  /**
   * MedicationStatement.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External identifier
   * - **Definition:** Identifiers associated with this Medication Statement that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * MedicationStatement.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Part of referenced event
   * - **Definition:** A larger event of which this particular MedicationStatement is a component or step.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationStatement',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private partOf?: Reference[] | undefined;

  /**
   * FHIR CodeSystem: MedicationStatementStatus
   *
   * @see {@link MedicationStatementStatusEnum }
   */
  private readonly medicationStatementStatusEnum: MedicationStatementStatusEnum;

  /**
   * MedicationStatement.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** recorded | entered-in-error | draft
   * - **Definition:** A code representing the status of recording the medication statement.
   * - **Comment:** This status concerns just the recording of the medication statement.  MedicationStatement.adherence should be used for indicating a patient\'s adherence to the information in this resource.  Note, the statuses are different than in previous releases for MedicationStatement or MedicationStatement. This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MedicationStatementStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * MedicationStatement.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of medication statement
   * - **Definition:** Type of medication statement (for example, drug classification like ATC, where meds would be administered, legal category of the medication.).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * MedicationStatement.medication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What medication was taken
   * - **Definition:** Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
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
   * MedicationStatement.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is/was taking  the medication
   * - **Definition:** The person, animal or group who is/was taking the medication.
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
   * MedicationStatement.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter associated with MedicationStatement
   * - **Definition:** The encounter that establishes the context for this MedicationStatement.
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
   * MedicationStatement.effective[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MedicationStatement.effective[x]', ['dateTime','Period','Timing',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date/time or interval when the medication is/was/will be taken
   * - **Definition:** The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.adherence element is Not Taking).
   * - **Comment:** This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken and is expected to continue indefinitely at the time the usage is recorded, the "end" date will be omitted.  If the end date is known, then it is included as the "end date".  The date/time attribute supports a variety of dates - year, year/month and exact date.  If something more than this is required, this should be conveyed as text.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   *     'Timing',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MedicationStatement.effective[x]',[
    'dateTime',
    'Period',
    'Timing',
  ])
  private effective?: IDataType | undefined;

  /**
   * MedicationStatement.dateAsserted Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the usage was asserted?
   * - **Definition:** The date when the Medication Statement was asserted by the information source.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dateAsserted?: DateTimeType | undefined;

  /**
   * MedicationStatement.informationSource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Person or organization that provided the information about the taking of this medication
   * - **Definition:** The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest.
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
   * MedicationStatement.derivedFrom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Link to information used to derive the MedicationStatement
   * - **Definition:** Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement.
   * - **Comment:** Likely references would be to MedicationRequest, MedicationDispense, Claim, Observation or QuestionnaireAnswers.  The most common use cases for deriving a MedicationStatement comes from creating a MedicationStatement from a MedicationRequest or from a lab observation or a claim.  it should be noted that the amount of information that is available varies from the type resource that you derive the MedicationStatement from.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private derivedFrom?: Reference[] | undefined;

  /**
   * MedicationStatement.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for why the medication is being/was taken
   * - **Definition:** A concept, Condition or observation that supports why the medication is being/was taken.
   * - **Comment:** This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonForUseReference.
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
   * MedicationStatement.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Further information about the usage
   * - **Definition:** Provides extra information about the Medication Statement that is not conveyed by the other attributes.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * MedicationStatement.relatedClinicalInformation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Link to information relevant to the usage of a medication
   * - **Definition:** Link to information that is relevant to a medication statement, for example, illicit drug use, gestational age, etc.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedClinicalInformation?: Reference[] | undefined;

  /**
   * MedicationStatement.renderedDosageInstruction Element
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
   * MedicationStatement.dosage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details of how medication is/was taken or should be taken
   * - **Definition:** Indicates how the medication is/was or should be taken by the patient.
   * - **Comment:** The dates included in the dosage on a Medication Statement reflect the dates for a given dose.  For example, "from November 1, 2016 to November 3, 2016, take one tablet daily and from November 4, 2016 to November 7, 2016, take two tablets daily."  It is expected that this specificity may only be populated where the patient brings in their labeled container or where the Medication Statement is derived from a MedicationRequest.
   * - **FHIR Type:** `Dosage`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dosage?: Dosage[] | undefined;

  /**
   * MedicationStatement.adherence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates whether the medication is or is not being consumed or administered
   * - **Definition:** Indicates whether the medication is or is not being consumed or administered.
   * - **Comment:** This element can be used to indicate whether a patient is following a course of treatment as instructed/prescribed or whether they are taking medications of their own volition.  It can also be used to indicate that a patient is not taking a medication, either because they were told not to or because they decided on their own.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private adherence?: MedicationStatementAdherenceComponent | undefined;

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
      const optErrMsg = `Invalid MedicationStatement.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MedicationStatement.identifier; Provided element is not an instance of Identifier.`;
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
   * @decorator `@ReferenceTargets('MedicationStatement.partOf', ['Procedure','MedicationStatement',])`
   *
   * @param value - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationStatement.partOf', [
    'Procedure',
  
    'MedicationStatement',
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
   * @decorator `@ReferenceTargets('MedicationStatement.partOf', ['Procedure','MedicationStatement',])`
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationStatement.partOf', [
    'Procedure',
  
    'MedicationStatement',
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
   * @see CodeSystem Enumeration: {@link MedicationStatementStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationStatementStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid MedicationStatement.status`;
      assertEnumCodeType<MedicationStatementStatusEnum>(enumType, MedicationStatementStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link MedicationStatementStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationStatementStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MedicationStatement.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.medicationStatementStatusEnum);
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
   * @see CodeSystem Enumeration: {@link MedicationStatementStatusEnum }
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
   * @see CodeSystem Enumeration: {@link MedicationStatementStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MedicationStatement.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.medicationStatementStatusEnum);
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
      const optErrMsg = `Invalid MedicationStatement.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicationStatement.category; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MedicationStatement.medication; Provided element is not an instance of CodeableReference.`;
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
   * @decorator `@ReferenceTargets('MedicationStatement.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationStatement.subject', [
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
   * @decorator `@ReferenceTargets('MedicationStatement.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationStatement.encounter', [
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
   * @decorator `@ChoiceDataTypes('MedicationStatement.effective[x]')`
   *
   * @param value - the `effective` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MedicationStatement.effective[x]')
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
        `DataType mismatch for MedicationStatement.effective[x]: Expected DateTimeType but encountered ${this.effective.fhirType()}`,
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
        `DataType mismatch for MedicationStatement.effective[x]: Expected Period but encountered ${this.effective.fhirType()}`,
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

  /**
   * @returns the `effective` property value as a Timing object if defined; else undefined
   */
  public getEffectiveTiming(): Timing | undefined {
    if (!isDefined<IDataType | undefined>(this.effective)) {
      return undefined;
    }
    if (!(this.effective instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for MedicationStatement.effective[x]: Expected Timing but encountered ${this.effective.fhirType()}`,
      );
    }
    return this.effective;
  }

  /**
   * @returns `true` if the `effective` property exists as a Timing and has a value; `false` otherwise
   */
  public hasEffectiveTiming(): boolean {
    return this.hasEffective() && this.effective instanceof Timing;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `dateAsserted` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateAssertedElement(): DateTimeType {
    return this.dateAsserted ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `dateAsserted` property.
   *
   * @param element - the `dateAsserted` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateAssertedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid MedicationStatement.dateAsserted; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.dateAsserted = element;
    } else {
      this.dateAsserted = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateAsserted` property exists and has a value; `false` otherwise
   */
  public hasDateAssertedElement(): boolean {
    return isDefined<DateTimeType>(this.dateAsserted) && !this.dateAsserted.isEmpty();
  }

  /**
   * @returns the `dateAsserted` property value as a fhirDateTime if defined; else undefined
   */
  public getDateAsserted(): fhirDateTime | undefined {
    return this.dateAsserted?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `dateAsserted` property.
   *
   * @param value - the `dateAsserted` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateAsserted(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid MedicationStatement.dateAsserted (${String(value)})`;
      this.dateAsserted = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.dateAsserted = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateAsserted` property exists and has a value; `false` otherwise
   */
  public hasDateAsserted(): boolean {
    return this.hasDateAssertedElement();
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
   * @decorator `@ReferenceTargets('MedicationStatement.informationSource', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Organization',])`
   *
   * @param value - the `informationSource` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationStatement.informationSource', [
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
   * @decorator `@ReferenceTargets('MedicationStatement.informationSource', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Organization',])`
   *
   * @param value - the `informationSource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationStatement.informationSource', [
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
   * @returns the `derivedFrom` property value as a Reference array
   */
  public getDerivedFrom(): Reference[] {
    return this.derivedFrom ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `derivedFrom` property.
   *
   * @decorator `@ReferenceTargets('MedicationStatement.derivedFrom', ['Resource',])`
   *
   * @param value - the `derivedFrom` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationStatement.derivedFrom', [
    'Resource',
  ])
  public setDerivedFrom(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.derivedFrom = value;
    } else {
      this.derivedFrom = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `derivedFrom` array property.
   *
   * @decorator `@ReferenceTargets('MedicationStatement.derivedFrom', ['Resource',])`
   *
   * @param value - the `derivedFrom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationStatement.derivedFrom', [
    'Resource',
  ])
  public addDerivedFrom(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDerivedFrom();
      this.derivedFrom?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `derivedFrom` property exists and has a value; `false` otherwise
   */
  public hasDerivedFrom(): boolean {
    return isDefinedList<Reference>(this.derivedFrom) && this.derivedFrom.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `derivedFrom` property
   */
  private initDerivedFrom(): void {
    if (!this.hasDerivedFrom()) {
      this.derivedFrom = [] as Reference[];
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
      const optErrMsg = `Invalid MedicationStatement.reason; Provided value array has an element that is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid MedicationStatement.reason; Provided element is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid MedicationStatement.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid MedicationStatement.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `relatedClinicalInformation` property value as a Reference array
   */
  public getRelatedClinicalInformation(): Reference[] {
    return this.relatedClinicalInformation ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `relatedClinicalInformation` property.
   *
   * @decorator `@ReferenceTargets('MedicationStatement.relatedClinicalInformation', ['Observation','Condition',])`
   *
   * @param value - the `relatedClinicalInformation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationStatement.relatedClinicalInformation', [
    'Observation',
  
    'Condition',
  ])
  public setRelatedClinicalInformation(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.relatedClinicalInformation = value;
    } else {
      this.relatedClinicalInformation = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `relatedClinicalInformation` array property.
   *
   * @decorator `@ReferenceTargets('MedicationStatement.relatedClinicalInformation', ['Observation','Condition',])`
   *
   * @param value - the `relatedClinicalInformation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MedicationStatement.relatedClinicalInformation', [
    'Observation',
  
    'Condition',
  ])
  public addRelatedClinicalInformation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRelatedClinicalInformation();
      this.relatedClinicalInformation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedClinicalInformation` property exists and has a value; `false` otherwise
   */
  public hasRelatedClinicalInformation(): boolean {
    return isDefinedList<Reference>(this.relatedClinicalInformation) && this.relatedClinicalInformation.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `relatedClinicalInformation` property
   */
  private initRelatedClinicalInformation(): void {
    if (!this.hasRelatedClinicalInformation()) {
      this.relatedClinicalInformation = [] as Reference[];
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
      const optErrMsg = `Invalid MedicationStatement.renderedDosageInstruction; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid MedicationStatement.renderedDosageInstruction (${String(value)})`;
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
   * @returns the `dosage` property value as a Dosage array
   */
  public getDosage(): Dosage[] {
    return this.dosage ?? ([] as Dosage[]);
  }

  /**
   * Assigns the provided Dosage array value to the `dosage` property.
   *
   * @param value - the `dosage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDosage(value: Dosage[] | undefined): this {
    if (isDefinedList<Dosage>(value)) {
      const optErrMsg = `Invalid MedicationStatement.dosage; Provided value array has an element that is not an instance of Dosage.`;
      assertFhirTypeList<Dosage>(value, Dosage, optErrMsg);
      this.dosage = value;
    } else {
      this.dosage = undefined;
    }
    return this;
  }

  /**
   * Add the provided Dosage value to the `dosage` array property.
   *
   * @param value - the `dosage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDosage(value: Dosage | undefined): this {
    if (isDefined<Dosage>(value)) {
      const optErrMsg = `Invalid MedicationStatement.dosage; Provided element is not an instance of Dosage.`;
      assertFhirType<Dosage>(value, Dosage, optErrMsg);
      this.initDosage();
      this.dosage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dosage` property exists and has a value; `false` otherwise
   */
  public hasDosage(): boolean {
    return isDefinedList<Dosage>(this.dosage) && this.dosage.some((item: Dosage) => !item.isEmpty());
  }

  /**
   * Initialize the `dosage` property
   */
  private initDosage(): void {
    if(!this.hasDosage()) {
      this.dosage = [] as Dosage[];
    }
  }

  /**
   * @returns the `adherence` property value as a MedicationStatementAdherenceComponent object if defined; else an empty MedicationStatementAdherenceComponent object
   */
  public getAdherence(): MedicationStatementAdherenceComponent {
    return this.adherence ?? new MedicationStatementAdherenceComponent();
  }

  /**
   * Assigns the provided Adherence object value to the `adherence` property.
   *
   * @param value - the `adherence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdherence(value: MedicationStatementAdherenceComponent | undefined): this {
    if (isDefined<MedicationStatementAdherenceComponent>(value)) {
      const optErrMsg = `Invalid MedicationStatement.adherence; Provided element is not an instance of MedicationStatementAdherenceComponent.`;
      assertFhirType<MedicationStatementAdherenceComponent>(value, MedicationStatementAdherenceComponent, optErrMsg);
      this.adherence = value;
    } else {
      this.adherence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `adherence` property exists and has a value; `false` otherwise
   */
  public hasAdherence(): boolean {
    return isDefined<MedicationStatementAdherenceComponent>(this.adherence) && !this.adherence.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MedicationStatement';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.partOf,
      this.status,
      this.category,
      this.medication,
      this.subject,
      this.encounter,
      this.effective,
      this.dateAsserted,
      this.informationSource,
      this.derivedFrom,
      this.reason,
      this.note,
      this.relatedClinicalInformation,
      this.renderedDosageInstruction,
      this.dosage,
      this.adherence,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.medication, this.subject, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationStatement {
    const dest = new MedicationStatement();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationStatement): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const partOfList = copyListValues<Reference>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    dest.status = this.status ? this.status.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.medication = this.medication ? this.medication.copy() : null;
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.effective = this.effective?.copy() as IDataType;
    dest.dateAsserted = this.dateAsserted?.copy();
    const informationSourceList = copyListValues<Reference>(this.informationSource);
    dest.informationSource = informationSourceList.length === 0 ? undefined : informationSourceList;
    const derivedFromList = copyListValues<Reference>(this.derivedFrom);
    dest.derivedFrom = derivedFromList.length === 0 ? undefined : derivedFromList;
    const reasonList = copyListValues<CodeableReference>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const relatedClinicalInformationList = copyListValues<Reference>(this.relatedClinicalInformation);
    dest.relatedClinicalInformation = relatedClinicalInformationList.length === 0 ? undefined : relatedClinicalInformationList;
    dest.renderedDosageInstruction = this.renderedDosageInstruction?.copy();
    const dosageList = copyListValues<Dosage>(this.dosage);
    dest.dosage = dosageList.length === 0 ? undefined : dosageList;
    dest.adherence = this.adherence?.copy();
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

    if (this.hasEffective()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getEffective()!, 'effective', jsonObj);
    }

    if (this.hasDateAssertedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateAssertedElement(), 'dateAsserted', jsonObj);
    }

    if (this.hasInformationSource()) {
      setFhirComplexListJson(this.getInformationSource(), 'informationSource', jsonObj);
    }

    if (this.hasDerivedFrom()) {
      setFhirComplexListJson(this.getDerivedFrom(), 'derivedFrom', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasRelatedClinicalInformation()) {
      setFhirComplexListJson(this.getRelatedClinicalInformation(), 'relatedClinicalInformation', jsonObj);
    }

    if (this.hasRenderedDosageInstructionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getRenderedDosageInstructionElement(), 'renderedDosageInstruction', jsonObj);
    }

    if (this.hasDosage()) {
      setFhirComplexListJson(this.getDosage(), 'dosage', jsonObj);
    }

    if (this.hasAdherence()) {
      setFhirBackboneElementJson(this.getAdherence(), 'adherence', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MedicationStatementAdherenceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Indicates whether the medication is or is not being consumed or administered
 * - **Definition:** Indicates whether the medication is or is not being consumed or administered.
 * - **Comment:** This element can be used to indicate whether a patient is following a course of treatment as instructed/prescribed or whether they are taking medications of their own volition.  It can also be used to indicate that a patient is not taking a medication, either because they were told not to or because they decided on their own.
 *
 * @category Data Models: Resource
 * @see [FHIR MedicationStatement](http://hl7.org/fhir/StructureDefinition/MedicationStatement)
 */
export class MedicationStatementAdherenceComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `MedicationStatementAdherenceComponent` JSON to instantiate the MedicationStatementAdherenceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MedicationStatementAdherenceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MedicationStatementAdherenceComponent
   * @returns MedicationStatementAdherenceComponent data model or undefined for `MedicationStatementAdherenceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MedicationStatementAdherenceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MedicationStatementAdherenceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MedicationStatementAdherenceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCode(datatype);
      }
    } else {
      instance.setCode(null);
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
   * MedicationStatement.adherence.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of adherence
   * - **Definition:** Type of the adherence for the medication.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * MedicationStatement.adherence.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details of the reason for the current use of the medication
   * - **Definition:** Captures the reason for the current use or adherence of a medication.
   * - **Comment:** This is generally only used for "exception" statuses such as "entered-in-error". The reason for performing the event at all is captured in reasonCode, not here.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MedicationStatement.adherence.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = null;
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
      const optErrMsg = `Invalid MedicationStatement.adherence.reason; Provided element is not an instance of CodeableConcept.`;
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
    return 'MedicationStatement.adherence';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.reason,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MedicationStatementAdherenceComponent {
    const dest = new MedicationStatementAdherenceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MedicationStatementAdherenceComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
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

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexJson(this.getReason(), 'reason', jsonObj);
    }

    return jsonObj;
  }
}
