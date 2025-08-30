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
 * Immunization Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Immunization
 * StructureDefinition.name: Immunization
 * StructureDefinition.description: Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
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
  DateType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  PositiveIntType,
  ReferenceTargets,
  StringType,
  UriType,
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
  fhirDateTime,
  fhirDateTimeSchema,
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
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
import { Annotation, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Reference } from '../complex-types/complex-datatypes';
import { EventStatusEnum } from '../code-systems/EventStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Immunization Class
 *
 * @remarks
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 *
 * **FHIR Specification**
 * - **Short:** Immunization event information
 * - **Definition:** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR Immunization](http://hl7.org/fhir/StructureDefinition/Immunization)
 */
export class Immunization extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, vaccineCode: CodeableConcept | null = null, patient: Reference | null = null, occurrence: IDataType | null = null) {
    super();

    this.eventStatusEnum = new EventStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<EventStatusEnum>(
      status,
      EventStatusEnum,
      this.eventStatusEnum,
      'Immunization.status',
    );

    this.vaccineCode = null;
    if (isDefined<CodeableConcept>(vaccineCode)) {
      this.setVaccineCode(vaccineCode);
    }

    this.patient = null;
    if (isDefined<Reference>(patient)) {
      this.setPatient(patient);
    }

    this.occurrence = null;
    if (isDefined<IDataType>(occurrence)) {
      this.setOccurrence(occurrence);
    }

  }

  /**
   * Parse the provided `Immunization` JSON to instantiate the Immunization data model.
   *
   * @param sourceJson - JSON representing FHIR `Immunization`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Immunization
   * @returns Immunization data model or undefined for `Immunization`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Immunization | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Immunization';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Immunization();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Immunization');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = Immunization[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for Immunization`;
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

    fieldName = 'vaccineCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setVaccineCode(null);
      } else {
        instance.setVaccineCode(datatype);
      }
    } else {
      instance.setVaccineCode(null);
    }

    fieldName = 'patient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setPatient(null);
      } else {
        instance.setPatient(datatype);
      }
    } else {
      instance.setPatient(null);
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
    if (occurrence === undefined) {
      instance.setOccurrence(null);
    } else {
      instance.setOccurrence(occurrence);
    }

    fieldName = 'recorded';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setRecordedElement(datatype);
    }

    fieldName = 'primarySource';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setPrimarySourceElement(datatype);
    }

    fieldName = 'reportOrigin';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReportOrigin(datatype);
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    fieldName = 'manufacturer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setManufacturer(datatype);
    }

    fieldName = 'lotNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLotNumberElement(datatype);
    }

    fieldName = 'expirationDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setExpirationDateElement(datatype);
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

    fieldName = 'doseQuantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDoseQuantity(datatype);
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImmunizationPerformerComponent | undefined = ImmunizationPerformerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPerformer(component);
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

    fieldName = 'isSubpotent';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setIsSubpotentElement(datatype);
    }

    fieldName = 'subpotentReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSubpotentReason(datatype);
        }
      });
    }

    fieldName = 'education';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImmunizationEducationComponent | undefined = ImmunizationEducationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addEducation(component);
        }
      });
    }

    fieldName = 'programEligibility';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addProgramEligibility(datatype);
        }
      });
    }

    fieldName = 'fundingSource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFundingSource(datatype);
    }

    fieldName = 'reaction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImmunizationReactionComponent | undefined = ImmunizationReactionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addReaction(component);
        }
      });
    }

    fieldName = 'protocolApplied';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImmunizationProtocolAppliedComponent | undefined = ImmunizationProtocolAppliedComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProtocolApplied(component);
        }
      });
    }

    return instance;
  }

  /**
   * Immunization.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier
   * - **Definition:** A unique identifier assigned to this immunization record.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: EventStatus
   *
   * @see {@link EventStatusEnum }
   */
  private readonly eventStatusEnum: EventStatusEnum;

  /**
   * Immunization.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** completed | entered-in-error | not-done
   * - **Definition:** Indicates the current status of the immunization event.
   * - **Comment:** Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains statuses entered-in-error and not-done which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Immunization.statusReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason not done
   * - **Definition:** Indicates the reason the immunization event was not performed.
   * - **Comment:** This is generally only used for the status of "not-done". The reason for performing the immunization event is captured in reasonCode, not here.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusReason?: CodeableConcept | undefined;

  /**
   * Immunization.vaccineCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Vaccine product administered
   * - **Definition:** Vaccine that was administered or was to be administered.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private vaccineCode: CodeableConcept | null;

  /**
   * Immunization.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who was immunized
   * - **Definition:** The patient who either received or did not receive the immunization.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private patient: Reference | null;

  /**
   * Immunization.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter immunization was part of
   * - **Definition:** The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
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
   * Immunization.occurrence[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Immunization.occurrence[x]', ['dateTime','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Vaccine administration date
   * - **Definition:** Date vaccine administered or was to be administered.
   * - **Comment:** When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
   * - **FHIR Types:**
   *     'dateTime',
   *     'string',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Immunization.occurrence[x]',[
    'dateTime',
    'string',
  ])
  private occurrence: IDataType | null;

  /**
   * Immunization.recorded Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the immunization was first captured in the subject\'s record
   * - **Definition:** The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recorded?: DateTimeType | undefined;

  /**
   * Immunization.primarySource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates context the data was recorded in
   * - **Definition:** An indication that the content of the record is based on information from the person who administered the vaccine. This reflects the context under which the data was originally recorded.
   * - **Comment:** Reflects the "reliability" of the content.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private primarySource?: BooleanType | undefined;

  /**
   * Immunization.reportOrigin Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates the source of a secondarily reported record
   * - **Definition:** The source of the data when the report of the immunization event is not based on information from the person who administered the vaccine.
   * - **Comment:** Should not be populated if primarySource = True, not required even if primarySource = False.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reportOrigin?: CodeableConcept | undefined;

  /**
   * Immunization.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where immunization occurred
   * - **Definition:** The service delivery location where the vaccine administration occurred.
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
   * Immunization.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Vaccine manufacturer
   * - **Definition:** Name of vaccine manufacturer.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private manufacturer?: Reference | undefined;

  /**
   * Immunization.lotNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Vaccine lot number
   * - **Definition:** Lot number of the  vaccine product.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lotNumber?: StringType | undefined;

  /**
   * Immunization.expirationDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Vaccine expiration date
   * - **Definition:** Date vaccine batch expires.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expirationDate?: DateType | undefined;

  /**
   * Immunization.site Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Body site vaccine  was administered
   * - **Definition:** Body site where vaccine was administered.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private site?: CodeableConcept | undefined;

  /**
   * Immunization.route Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How vaccine entered body
   * - **Definition:** The path by which the vaccine product is taken into the body.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private route?: CodeableConcept | undefined;

  /**
   * Immunization.doseQuantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Amount of vaccine administered
   * - **Definition:** The quantity of vaccine product that was administered.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private doseQuantity?: Quantity | undefined;

  /**
   * Immunization.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who performed event
   * - **Definition:** Indicates who performed the immunization event.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private performer?: ImmunizationPerformerComponent[] | undefined;

  /**
   * Immunization.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional immunization notes
   * - **Definition:** Extra information about the immunization that is not conveyed by the other attributes.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private note?: Annotation[] | undefined;

  /**
   * Immunization.reasonCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why immunization occurred
   * - **Definition:** Reasons why the vaccine was administered.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonCode?: CodeableConcept[] | undefined;

  /**
   * Immunization.reasonReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why immunization occurred
   * - **Definition:** Condition, Observation or DiagnosticReport that supports why the immunization was administered.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonReference?: Reference[] | undefined;

  /**
   * Immunization.isSubpotent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dose potency
   * - **Definition:** Indication if a dose is considered to be subpotent. By default, a dose should be considered to be potent.
   * - **Comment:** Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of a manufacturer recall after administration). However, in the case of a partial administration (the patient moves unexpectedly and only some of the dose is actually administered), subpotency may be recognized immediately, but it is still important to record the event.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because an immunization event with a subpotent vaccine doesn\&#x27;t protect the patient the same way as a potent dose.
   * - **isSummary:** true
   */
  private isSubpotent?: BooleanType | undefined;

  /**
   * Immunization.subpotentReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for being subpotent
   * - **Definition:** Reason why a dose is considered to be subpotent.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subpotentReason?: CodeableConcept[] | undefined;

  /**
   * Immunization.education Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Educational material presented to patient
   * - **Definition:** Educational material presented to the patient (or guardian) at the time of vaccine administration.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private education?: ImmunizationEducationComponent[] | undefined;

  /**
   * Immunization.programEligibility Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient eligibility for a vaccination program
   * - **Definition:** Indicates a patient\'s eligibility for a funding program.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private programEligibility?: CodeableConcept[] | undefined;

  /**
   * Immunization.fundingSource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Funding source for the vaccine
   * - **Definition:** Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private fundingSource?: CodeableConcept | undefined;

  /**
   * Immunization.reaction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details of a reaction that follows immunization
   * - **Definition:** Categorical data indicating that an adverse event is associated in time to an immunization.
   * - **Comment:** A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reaction?: ImmunizationReactionComponent[] | undefined;

  /**
   * Immunization.protocolApplied Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Protocol followed by the provider
   * - **Definition:** The protocol (set of recommendations) being followed by the provider who administered the dose.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private protocolApplied?: ImmunizationProtocolAppliedComponent[] | undefined;

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
      const optErrMsg = `Invalid Immunization.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Immunization.identifier; Provided element is not an instance of Identifier.`;
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
      const errMsgPrefix = `Invalid Immunization.status`;
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
      const optErrMsg = `Invalid Immunization.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid Immunization.status (${String(value)})`;
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
      const optErrMsg = `Invalid Immunization.statusReason; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `vaccineCode` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getVaccineCode(): CodeableConcept {
    return this.vaccineCode ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `vaccineCode` property.
   *
   * @param value - the `vaccineCode` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVaccineCode(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Immunization.vaccineCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.vaccineCode = value;
    } else {
      this.vaccineCode = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `vaccineCode` property exists and has a value; `false` otherwise
   */
  public hasVaccineCode(): boolean {
    return isDefined<CodeableConcept>(this.vaccineCode) && !this.vaccineCode.isEmpty();
  }

  /**
   * @returns the `patient` property value as a Reference object if defined; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('Immunization.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.patient', [
    'Patient',
  ])
  public setPatient(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.patient = value;
    } else {
      this.patient = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `patient` property exists and has a value; `false` otherwise
   */
  public hasPatient(): boolean {
    return isDefined<Reference>(this.patient) && !this.patient.isEmpty();
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
   * @decorator `@ReferenceTargets('Immunization.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.encounter', [
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
   * @returns the `occurrence` property value as a DataType object; else null
   */
  public getOccurrence(): IDataType | null {
    return this.occurrence;
  }

  /**
   * Assigns the provided DataType object value to the `occurrence` property.
   *
   * @decorator `@ChoiceDataTypes('Immunization.occurrence[x]')`
   *
   * @param value - the `occurrence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Immunization.occurrence[x]')
  public setOccurrence(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.occurrence = value;
    } else {
      this.occurrence = null;
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
   * @returns the `occurrence` property value as a DateTimeType object if defined; else null
   */
  public getOccurrenceDateTimeType(): DateTimeType | null {
    if (!isDefined<IDataType>(this.occurrence)) {
      return null;
    }
    if (!(this.occurrence instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Immunization.occurrence[x]: Expected DateTimeType but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasOccurrenceDateTimeType(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof DateTimeType;
  }

  /**
   * @returns the `occurrence` property value as a StringType object if defined; else null
   */
  public getOccurrenceStringType(): StringType | null {
    if (!isDefined<IDataType>(this.occurrence)) {
      return null;
    }
    if (!(this.occurrence instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Immunization.occurrence[x]: Expected StringType but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `` property exists as a StringType and has a value; `false` otherwise
   */
  public hasOccurrenceStringType(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof StringType;
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
      const optErrMsg = `Invalid Immunization.recorded; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid Immunization.recorded (${String(value)})`;
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
   * @returns the `primarySource` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getPrimarySourceElement(): BooleanType {
    return this.primarySource ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `primarySource` property.
   *
   * @param element - the `primarySource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPrimarySourceElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Immunization.primarySource; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.primarySource = element;
    } else {
      this.primarySource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `primarySource` property exists and has a value; `false` otherwise
   */
  public hasPrimarySourceElement(): boolean {
    return isDefined<BooleanType>(this.primarySource) && !this.primarySource.isEmpty();
  }

  /**
   * @returns the `primarySource` property value as a fhirBoolean if defined; else undefined
   */
  public getPrimarySource(): fhirBoolean | undefined {
    return this.primarySource?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `primarySource` property.
   *
   * @param value - the `primarySource` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPrimarySource(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Immunization.primarySource (${String(value)})`;
      this.primarySource = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.primarySource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `primarySource` property exists and has a value; `false` otherwise
   */
  public hasPrimarySource(): boolean {
    return this.hasPrimarySourceElement();
  }

  /**
   * @returns the `reportOrigin` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getReportOrigin(): CodeableConcept {
    return this.reportOrigin ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ReportOrigin object value to the `reportOrigin` property.
   *
   * @param value - the `reportOrigin` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReportOrigin(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Immunization.reportOrigin; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reportOrigin = value;
    } else {
      this.reportOrigin = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reportOrigin` property exists and has a value; `false` otherwise
   */
  public hasReportOrigin(): boolean {
    return isDefined<CodeableConcept>(this.reportOrigin) && !this.reportOrigin.isEmpty();
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
   * @decorator `@ReferenceTargets('Immunization.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.location', [
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
   * @returns the `manufacturer` property value as a Reference object; else an empty Reference object
   */
  public getManufacturer(): Reference {
    return this.manufacturer ?? new Reference();
  }

  /**
   * Assigns the provided Manufacturer object value to the `manufacturer` property.
   *
   * @decorator `@ReferenceTargets('Immunization.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.manufacturer', [
    'Organization',
  ])
  public setManufacturer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.manufacturer = value;
    } else {
      this.manufacturer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `manufacturer` property exists and has a value; `false` otherwise
   */
  public hasManufacturer(): boolean {
    return isDefined<Reference>(this.manufacturer) && !this.manufacturer.isEmpty();
  }

  /**
   * @returns the `lotNumber` property value as a StringType object if defined; else an empty StringType object
   */
  public getLotNumberElement(): StringType {
    return this.lotNumber ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lotNumber` property.
   *
   * @param element - the `lotNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLotNumberElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Immunization.lotNumber; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.lotNumber = element;
    } else {
      this.lotNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lotNumber` property exists and has a value; `false` otherwise
   */
  public hasLotNumberElement(): boolean {
    return isDefined<StringType>(this.lotNumber) && !this.lotNumber.isEmpty();
  }

  /**
   * @returns the `lotNumber` property value as a fhirString if defined; else undefined
   */
  public getLotNumber(): fhirString | undefined {
    return this.lotNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lotNumber` property.
   *
   * @param value - the `lotNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLotNumber(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Immunization.lotNumber (${String(value)})`;
      this.lotNumber = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.lotNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lotNumber` property exists and has a value; `false` otherwise
   */
  public hasLotNumber(): boolean {
    return this.hasLotNumberElement();
  }

  /**
   * @returns the `expirationDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getExpirationDateElement(): DateType {
    return this.expirationDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `expirationDate` property.
   *
   * @param element - the `expirationDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpirationDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid Immunization.expirationDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.expirationDate = element;
    } else {
      this.expirationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expirationDate` property exists and has a value; `false` otherwise
   */
  public hasExpirationDateElement(): boolean {
    return isDefined<DateType>(this.expirationDate) && !this.expirationDate.isEmpty();
  }

  /**
   * @returns the `expirationDate` property value as a fhirDate if defined; else undefined
   */
  public getExpirationDate(): fhirDate | undefined {
    return this.expirationDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `expirationDate` property.
   *
   * @param value - the `expirationDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpirationDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid Immunization.expirationDate (${String(value)})`;
      this.expirationDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.expirationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expirationDate` property exists and has a value; `false` otherwise
   */
  public hasExpirationDate(): boolean {
    return this.hasExpirationDateElement();
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
      const optErrMsg = `Invalid Immunization.site; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Immunization.route; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `doseQuantity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getDoseQuantity(): Quantity {
    return this.doseQuantity ?? new Quantity();
  }

  /**
   * Assigns the provided DoseQuantity object value to the `doseQuantity` property.
   *
   * @param value - the `doseQuantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDoseQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid Immunization.doseQuantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.doseQuantity = value;
    } else {
      this.doseQuantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doseQuantity` property exists and has a value; `false` otherwise
   */
  public hasDoseQuantity(): boolean {
    return isDefined<Quantity>(this.doseQuantity) && !this.doseQuantity.isEmpty();
  }

  /**
   * @returns the `performer` property value as a ImmunizationPerformerComponent array
   */
  public getPerformer(): ImmunizationPerformerComponent[] {
    return this.performer ?? ([] as ImmunizationPerformerComponent[]);
  }

  /**
   * Assigns the provided ImmunizationPerformerComponent array value to the `performer` property.
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformer(value: ImmunizationPerformerComponent[] | undefined): this {
    if (isDefinedList<ImmunizationPerformerComponent>(value)) {
      const optErrMsg = `Invalid Immunization.performer; Provided value array has an element that is not an instance of ImmunizationPerformerComponent.`;
      assertFhirTypeList<ImmunizationPerformerComponent>(value, ImmunizationPerformerComponent, optErrMsg);
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImmunizationPerformerComponent value to the `performer` array property.
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformer(value: ImmunizationPerformerComponent | undefined): this {
    if (isDefined<ImmunizationPerformerComponent>(value)) {
      const optErrMsg = `Invalid Immunization.performer; Provided element is not an instance of ImmunizationPerformerComponent.`;
      assertFhirType<ImmunizationPerformerComponent>(value, ImmunizationPerformerComponent, optErrMsg);
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<ImmunizationPerformerComponent>(this.performer) && this.performer.some((item: ImmunizationPerformerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if(!this.hasPerformer()) {
      this.performer = [] as ImmunizationPerformerComponent[];
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
      const optErrMsg = `Invalid Immunization.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Immunization.note; Provided element is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Immunization.reasonCode; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Immunization.reasonCode; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('Immunization.reasonReference', ['Condition','Observation','DiagnosticReport',])`
   *
   * @param value - the `reasonReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.reasonReference', [
    'Condition',
  
    'Observation',
  
    'DiagnosticReport',
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
   * @decorator `@ReferenceTargets('Immunization.reasonReference', ['Condition','Observation','DiagnosticReport',])`
   *
   * @param value - the `reasonReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.reasonReference', [
    'Condition',
  
    'Observation',
  
    'DiagnosticReport',
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
   * @returns the `isSubpotent` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getIsSubpotentElement(): BooleanType {
    return this.isSubpotent ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `isSubpotent` property.
   *
   * @param element - the `isSubpotent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsSubpotentElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Immunization.isSubpotent; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.isSubpotent = element;
    } else {
      this.isSubpotent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isSubpotent` property exists and has a value; `false` otherwise
   */
  public hasIsSubpotentElement(): boolean {
    return isDefined<BooleanType>(this.isSubpotent) && !this.isSubpotent.isEmpty();
  }

  /**
   * @returns the `isSubpotent` property value as a fhirBoolean if defined; else undefined
   */
  public getIsSubpotent(): fhirBoolean | undefined {
    return this.isSubpotent?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `isSubpotent` property.
   *
   * @param value - the `isSubpotent` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsSubpotent(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Immunization.isSubpotent (${String(value)})`;
      this.isSubpotent = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.isSubpotent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isSubpotent` property exists and has a value; `false` otherwise
   */
  public hasIsSubpotent(): boolean {
    return this.hasIsSubpotentElement();
  }

  /**
   * @returns the `subpotentReason` property value as a CodeableConcept array
   */
  public getSubpotentReason(): CodeableConcept[] {
    return this.subpotentReason ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `subpotentReason` property.
   *
   * @param value - the `subpotentReason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubpotentReason(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Immunization.subpotentReason; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.subpotentReason = value;
    } else {
      this.subpotentReason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `subpotentReason` array property.
   *
   * @param value - the `subpotentReason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubpotentReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Immunization.subpotentReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSubpotentReason();
      this.subpotentReason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subpotentReason` property exists and has a value; `false` otherwise
   */
  public hasSubpotentReason(): boolean {
    return isDefinedList<CodeableConcept>(this.subpotentReason) && this.subpotentReason.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `subpotentReason` property
   */
  private initSubpotentReason(): void {
    if(!this.hasSubpotentReason()) {
      this.subpotentReason = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `education` property value as a ImmunizationEducationComponent array
   */
  public getEducation(): ImmunizationEducationComponent[] {
    return this.education ?? ([] as ImmunizationEducationComponent[]);
  }

  /**
   * Assigns the provided ImmunizationEducationComponent array value to the `education` property.
   *
   * @param value - the `education` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEducation(value: ImmunizationEducationComponent[] | undefined): this {
    if (isDefinedList<ImmunizationEducationComponent>(value)) {
      const optErrMsg = `Invalid Immunization.education; Provided value array has an element that is not an instance of ImmunizationEducationComponent.`;
      assertFhirTypeList<ImmunizationEducationComponent>(value, ImmunizationEducationComponent, optErrMsg);
      this.education = value;
    } else {
      this.education = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImmunizationEducationComponent value to the `education` array property.
   *
   * @param value - the `education` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEducation(value: ImmunizationEducationComponent | undefined): this {
    if (isDefined<ImmunizationEducationComponent>(value)) {
      const optErrMsg = `Invalid Immunization.education; Provided element is not an instance of ImmunizationEducationComponent.`;
      assertFhirType<ImmunizationEducationComponent>(value, ImmunizationEducationComponent, optErrMsg);
      this.initEducation();
      this.education?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `education` property exists and has a value; `false` otherwise
   */
  public hasEducation(): boolean {
    return isDefinedList<ImmunizationEducationComponent>(this.education) && this.education.some((item: ImmunizationEducationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `education` property
   */
  private initEducation(): void {
    if(!this.hasEducation()) {
      this.education = [] as ImmunizationEducationComponent[];
    }
  }

  /**
   * @returns the `programEligibility` property value as a CodeableConcept array
   */
  public getProgramEligibility(): CodeableConcept[] {
    return this.programEligibility ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `programEligibility` property.
   *
   * @param value - the `programEligibility` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProgramEligibility(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Immunization.programEligibility; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.programEligibility = value;
    } else {
      this.programEligibility = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `programEligibility` array property.
   *
   * @param value - the `programEligibility` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProgramEligibility(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Immunization.programEligibility; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initProgramEligibility();
      this.programEligibility?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `programEligibility` property exists and has a value; `false` otherwise
   */
  public hasProgramEligibility(): boolean {
    return isDefinedList<CodeableConcept>(this.programEligibility) && this.programEligibility.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `programEligibility` property
   */
  private initProgramEligibility(): void {
    if(!this.hasProgramEligibility()) {
      this.programEligibility = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `fundingSource` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFundingSource(): CodeableConcept {
    return this.fundingSource ?? new CodeableConcept();
  }

  /**
   * Assigns the provided FundingSource object value to the `fundingSource` property.
   *
   * @param value - the `fundingSource` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFundingSource(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Immunization.fundingSource; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.fundingSource = value;
    } else {
      this.fundingSource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `fundingSource` property exists and has a value; `false` otherwise
   */
  public hasFundingSource(): boolean {
    return isDefined<CodeableConcept>(this.fundingSource) && !this.fundingSource.isEmpty();
  }

  /**
   * @returns the `reaction` property value as a ImmunizationReactionComponent array
   */
  public getReaction(): ImmunizationReactionComponent[] {
    return this.reaction ?? ([] as ImmunizationReactionComponent[]);
  }

  /**
   * Assigns the provided ImmunizationReactionComponent array value to the `reaction` property.
   *
   * @param value - the `reaction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReaction(value: ImmunizationReactionComponent[] | undefined): this {
    if (isDefinedList<ImmunizationReactionComponent>(value)) {
      const optErrMsg = `Invalid Immunization.reaction; Provided value array has an element that is not an instance of ImmunizationReactionComponent.`;
      assertFhirTypeList<ImmunizationReactionComponent>(value, ImmunizationReactionComponent, optErrMsg);
      this.reaction = value;
    } else {
      this.reaction = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImmunizationReactionComponent value to the `reaction` array property.
   *
   * @param value - the `reaction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReaction(value: ImmunizationReactionComponent | undefined): this {
    if (isDefined<ImmunizationReactionComponent>(value)) {
      const optErrMsg = `Invalid Immunization.reaction; Provided element is not an instance of ImmunizationReactionComponent.`;
      assertFhirType<ImmunizationReactionComponent>(value, ImmunizationReactionComponent, optErrMsg);
      this.initReaction();
      this.reaction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reaction` property exists and has a value; `false` otherwise
   */
  public hasReaction(): boolean {
    return isDefinedList<ImmunizationReactionComponent>(this.reaction) && this.reaction.some((item: ImmunizationReactionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `reaction` property
   */
  private initReaction(): void {
    if(!this.hasReaction()) {
      this.reaction = [] as ImmunizationReactionComponent[];
    }
  }

  /**
   * @returns the `protocolApplied` property value as a ImmunizationProtocolAppliedComponent array
   */
  public getProtocolApplied(): ImmunizationProtocolAppliedComponent[] {
    return this.protocolApplied ?? ([] as ImmunizationProtocolAppliedComponent[]);
  }

  /**
   * Assigns the provided ImmunizationProtocolAppliedComponent array value to the `protocolApplied` property.
   *
   * @param value - the `protocolApplied` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProtocolApplied(value: ImmunizationProtocolAppliedComponent[] | undefined): this {
    if (isDefinedList<ImmunizationProtocolAppliedComponent>(value)) {
      const optErrMsg = `Invalid Immunization.protocolApplied; Provided value array has an element that is not an instance of ImmunizationProtocolAppliedComponent.`;
      assertFhirTypeList<ImmunizationProtocolAppliedComponent>(value, ImmunizationProtocolAppliedComponent, optErrMsg);
      this.protocolApplied = value;
    } else {
      this.protocolApplied = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImmunizationProtocolAppliedComponent value to the `protocolApplied` array property.
   *
   * @param value - the `protocolApplied` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProtocolApplied(value: ImmunizationProtocolAppliedComponent | undefined): this {
    if (isDefined<ImmunizationProtocolAppliedComponent>(value)) {
      const optErrMsg = `Invalid Immunization.protocolApplied; Provided element is not an instance of ImmunizationProtocolAppliedComponent.`;
      assertFhirType<ImmunizationProtocolAppliedComponent>(value, ImmunizationProtocolAppliedComponent, optErrMsg);
      this.initProtocolApplied();
      this.protocolApplied?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `protocolApplied` property exists and has a value; `false` otherwise
   */
  public hasProtocolApplied(): boolean {
    return isDefinedList<ImmunizationProtocolAppliedComponent>(this.protocolApplied) && this.protocolApplied.some((item: ImmunizationProtocolAppliedComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `protocolApplied` property
   */
  private initProtocolApplied(): void {
    if(!this.hasProtocolApplied()) {
      this.protocolApplied = [] as ImmunizationProtocolAppliedComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Immunization';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.statusReason,
      this.vaccineCode,
      this.patient,
      this.encounter,
      this.occurrence,
      this.recorded,
      this.primarySource,
      this.reportOrigin,
      this.location,
      this.manufacturer,
      this.lotNumber,
      this.expirationDate,
      this.site,
      this.route,
      this.doseQuantity,
      this.performer,
      this.note,
      this.reasonCode,
      this.reasonReference,
      this.isSubpotent,
      this.subpotentReason,
      this.education,
      this.programEligibility,
      this.fundingSource,
      this.reaction,
      this.protocolApplied,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.vaccineCode, this.patient, this.occurrence, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Immunization {
    const dest = new Immunization();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Immunization): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.statusReason = this.statusReason?.copy();
    dest.vaccineCode = this.vaccineCode ? this.vaccineCode.copy() : null;
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.occurrence = this.occurrence ? this.occurrence.copy() as IDataType : null;
    dest.recorded = this.recorded?.copy();
    dest.primarySource = this.primarySource?.copy();
    dest.reportOrigin = this.reportOrigin?.copy();
    dest.location = this.location?.copy();
    dest.manufacturer = this.manufacturer?.copy();
    dest.lotNumber = this.lotNumber?.copy();
    dest.expirationDate = this.expirationDate?.copy();
    dest.site = this.site?.copy();
    dest.route = this.route?.copy();
    dest.doseQuantity = this.doseQuantity?.copy();
    const performerList = copyListValues<ImmunizationPerformerComponent>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const reasonCodeList = copyListValues<CodeableConcept>(this.reasonCode);
    dest.reasonCode = reasonCodeList.length === 0 ? undefined : reasonCodeList;
    const reasonReferenceList = copyListValues<Reference>(this.reasonReference);
    dest.reasonReference = reasonReferenceList.length === 0 ? undefined : reasonReferenceList;
    dest.isSubpotent = this.isSubpotent?.copy();
    const subpotentReasonList = copyListValues<CodeableConcept>(this.subpotentReason);
    dest.subpotentReason = subpotentReasonList.length === 0 ? undefined : subpotentReasonList;
    const educationList = copyListValues<ImmunizationEducationComponent>(this.education);
    dest.education = educationList.length === 0 ? undefined : educationList;
    const programEligibilityList = copyListValues<CodeableConcept>(this.programEligibility);
    dest.programEligibility = programEligibilityList.length === 0 ? undefined : programEligibilityList;
    dest.fundingSource = this.fundingSource?.copy();
    const reactionList = copyListValues<ImmunizationReactionComponent>(this.reaction);
    dest.reaction = reactionList.length === 0 ? undefined : reactionList;
    const protocolAppliedList = copyListValues<ImmunizationProtocolAppliedComponent>(this.protocolApplied);
    dest.protocolApplied = protocolAppliedList.length === 0 ? undefined : protocolAppliedList;
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

    if (this.hasVaccineCode()) {
      setFhirComplexJson(this.getVaccineCode(), 'vaccineCode', jsonObj);
    } else {
      jsonObj['vaccineCode'] = null;
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    } else {
      jsonObj['patient'] = null;
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasOccurrence()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOccurrence()!, 'occurrence', jsonObj);
    } else {
      jsonObj['occurrence'] = null;
    }

    if (this.hasRecordedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getRecordedElement(), 'recorded', jsonObj);
    }

    if (this.hasPrimarySourceElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getPrimarySourceElement(), 'primarySource', jsonObj);
    }

    if (this.hasReportOrigin()) {
      setFhirComplexJson(this.getReportOrigin(), 'reportOrigin', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasLotNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLotNumberElement(), 'lotNumber', jsonObj);
    }

    if (this.hasExpirationDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getExpirationDateElement(), 'expirationDate', jsonObj);
    }

    if (this.hasSite()) {
      setFhirComplexJson(this.getSite(), 'site', jsonObj);
    }

    if (this.hasRoute()) {
      setFhirComplexJson(this.getRoute(), 'route', jsonObj);
    }

    if (this.hasDoseQuantity()) {
      setFhirComplexJson(this.getDoseQuantity(), 'doseQuantity', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirBackboneElementListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasReasonCode()) {
      setFhirComplexListJson(this.getReasonCode(), 'reasonCode', jsonObj);
    }

    if (this.hasReasonReference()) {
      setFhirComplexListJson(this.getReasonReference(), 'reasonReference', jsonObj);
    }

    if (this.hasIsSubpotentElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getIsSubpotentElement(), 'isSubpotent', jsonObj);
    }

    if (this.hasSubpotentReason()) {
      setFhirComplexListJson(this.getSubpotentReason(), 'subpotentReason', jsonObj);
    }

    if (this.hasEducation()) {
      setFhirBackboneElementListJson(this.getEducation(), 'education', jsonObj);
    }

    if (this.hasProgramEligibility()) {
      setFhirComplexListJson(this.getProgramEligibility(), 'programEligibility', jsonObj);
    }

    if (this.hasFundingSource()) {
      setFhirComplexJson(this.getFundingSource(), 'fundingSource', jsonObj);
    }

    if (this.hasReaction()) {
      setFhirBackboneElementListJson(this.getReaction(), 'reaction', jsonObj);
    }

    if (this.hasProtocolApplied()) {
      setFhirBackboneElementListJson(this.getProtocolApplied(), 'protocolApplied', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ImmunizationPerformerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who performed event
 * - **Definition:** Indicates who performed the immunization event.
 *
 * @category Data Models: Resource
 * @see [FHIR Immunization](http://hl7.org/fhir/StructureDefinition/Immunization)
 */
export class ImmunizationPerformerComponent extends BackboneElement implements IBackboneElement {
  constructor(actor: Reference | null = null) {
    super();

    this.actor = null;
    if (isDefined<Reference>(actor)) {
      this.setActor(actor);
    }
  }

  /**
   * Parse the provided `ImmunizationPerformerComponent` JSON to instantiate the ImmunizationPerformerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImmunizationPerformerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImmunizationPerformerComponent
   * @returns ImmunizationPerformerComponent data model or undefined for `ImmunizationPerformerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImmunizationPerformerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImmunizationPerformerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImmunizationPerformerComponent();

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
   * Immunization.performer.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What type of performance was done
   * - **Definition:** Describes the type of performance (e.g. ordering provider, administering provider, etc.).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private function_?: CodeableConcept | undefined;

  /**
   * Immunization.performer.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual or organization who was performing
   * - **Definition:** The practitioner or organization who performed the action.
   * - **Comment:** When the individual practitioner who performed the action is known, it is best to send.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
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
      const optErrMsg = `Invalid Immunization.performer.function; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('Immunization.performer.actor', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.performer.actor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
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
    return 'Immunization.performer';
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
  public override copy(): ImmunizationPerformerComponent {
    const dest = new ImmunizationPerformerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImmunizationPerformerComponent): void {
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
 * ImmunizationEducationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Educational material presented to patient
 * - **Definition:** Educational material presented to the patient (or guardian) at the time of vaccine administration.
 *
 * @category Data Models: Resource
 * @see [FHIR Immunization](http://hl7.org/fhir/StructureDefinition/Immunization)
 */
export class ImmunizationEducationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ImmunizationEducationComponent` JSON to instantiate the ImmunizationEducationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImmunizationEducationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImmunizationEducationComponent
   * @returns ImmunizationEducationComponent data model or undefined for `ImmunizationEducationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImmunizationEducationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImmunizationEducationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImmunizationEducationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'documentType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDocumentTypeElement(datatype);
    }

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setReferenceElement(datatype);
    }

    fieldName = 'publicationDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setPublicationDateElement(datatype);
    }

    fieldName = 'presentationDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setPresentationDateElement(datatype);
    }

    return instance;
  }

  /**
   * Immunization.education.documentType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Educational material document identifier
   * - **Definition:** Identifier of the material presented to the patient.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentType?: StringType | undefined;

  /**
   * Immunization.education.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Educational material reference pointer
   * - **Definition:** Reference pointer to the educational material given to the patient if the information was on line.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference?: UriType | undefined;

  /**
   * Immunization.education.publicationDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Educational material publication date
   * - **Definition:** Date the educational material was published.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private publicationDate?: DateTimeType | undefined;

  /**
   * Immunization.education.presentationDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Educational material presentation date
   * - **Definition:** Date the educational material was given to the patient.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private presentationDate?: DateTimeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `documentType` property value as a StringType object if defined; else an empty StringType object
   */
  public getDocumentTypeElement(): StringType {
    return this.documentType ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `documentType` property.
   *
   * @param element - the `documentType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentTypeElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Immunization.education.documentType; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.documentType = element;
    } else {
      this.documentType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `documentType` property exists and has a value; `false` otherwise
   */
  public hasDocumentTypeElement(): boolean {
    return isDefined<StringType>(this.documentType) && !this.documentType.isEmpty();
  }

  /**
   * @returns the `documentType` property value as a fhirString if defined; else undefined
   */
  public getDocumentType(): fhirString | undefined {
    return this.documentType?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `documentType` property.
   *
   * @param value - the `documentType` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentType(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Immunization.education.documentType (${String(value)})`;
      this.documentType = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.documentType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `documentType` property exists and has a value; `false` otherwise
   */
  public hasDocumentType(): boolean {
    return this.hasDocumentTypeElement();
  }

  /**
   * @returns the `reference` property value as a UriType object if defined; else an empty UriType object
   */
  public getReferenceElement(): UriType {
    return this.reference ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `reference` property.
   *
   * @param element - the `reference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReferenceElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Immunization.education.reference; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.reference = element;
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReferenceElement(): boolean {
    return isDefined<UriType>(this.reference) && !this.reference.isEmpty();
  }

  /**
   * @returns the `reference` property value as a fhirUri if defined; else undefined
   */
  public getReference(): fhirUri | undefined {
    return this.reference?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `reference` property.
   *
   * @param value - the `reference` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReference(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Immunization.education.reference (${String(value)})`;
      this.reference = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return this.hasReferenceElement();
  }

  /**
   * @returns the `publicationDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getPublicationDateElement(): DateTimeType {
    return this.publicationDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `publicationDate` property.
   *
   * @param element - the `publicationDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPublicationDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Immunization.education.publicationDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.publicationDate = element;
    } else {
      this.publicationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publicationDate` property exists and has a value; `false` otherwise
   */
  public hasPublicationDateElement(): boolean {
    return isDefined<DateTimeType>(this.publicationDate) && !this.publicationDate.isEmpty();
  }

  /**
   * @returns the `publicationDate` property value as a fhirDateTime if defined; else undefined
   */
  public getPublicationDate(): fhirDateTime | undefined {
    return this.publicationDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `publicationDate` property.
   *
   * @param value - the `publicationDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPublicationDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Immunization.education.publicationDate (${String(value)})`;
      this.publicationDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.publicationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publicationDate` property exists and has a value; `false` otherwise
   */
  public hasPublicationDate(): boolean {
    return this.hasPublicationDateElement();
  }

  /**
   * @returns the `presentationDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getPresentationDateElement(): DateTimeType {
    return this.presentationDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `presentationDate` property.
   *
   * @param element - the `presentationDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPresentationDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Immunization.education.presentationDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.presentationDate = element;
    } else {
      this.presentationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `presentationDate` property exists and has a value; `false` otherwise
   */
  public hasPresentationDateElement(): boolean {
    return isDefined<DateTimeType>(this.presentationDate) && !this.presentationDate.isEmpty();
  }

  /**
   * @returns the `presentationDate` property value as a fhirDateTime if defined; else undefined
   */
  public getPresentationDate(): fhirDateTime | undefined {
    return this.presentationDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `presentationDate` property.
   *
   * @param value - the `presentationDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPresentationDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Immunization.education.presentationDate (${String(value)})`;
      this.presentationDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.presentationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `presentationDate` property exists and has a value; `false` otherwise
   */
  public hasPresentationDate(): boolean {
    return this.hasPresentationDateElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Immunization.education';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.documentType,
      this.reference,
      this.publicationDate,
      this.presentationDate,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImmunizationEducationComponent {
    const dest = new ImmunizationEducationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImmunizationEducationComponent): void {
    super.copyValues(dest);
    dest.documentType = this.documentType?.copy();
    dest.reference = this.reference?.copy();
    dest.publicationDate = this.publicationDate?.copy();
    dest.presentationDate = this.presentationDate?.copy();
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

    if (this.hasDocumentTypeElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDocumentTypeElement(), 'documentType', jsonObj);
    }

    if (this.hasReferenceElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getReferenceElement(), 'reference', jsonObj);
    }

    if (this.hasPublicationDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getPublicationDateElement(), 'publicationDate', jsonObj);
    }

    if (this.hasPresentationDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getPresentationDateElement(), 'presentationDate', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ImmunizationReactionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Details of a reaction that follows immunization
 * - **Definition:** Categorical data indicating that an adverse event is associated in time to an immunization.
 * - **Comment:** A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
 *
 * @category Data Models: Resource
 * @see [FHIR Immunization](http://hl7.org/fhir/StructureDefinition/Immunization)
 */
export class ImmunizationReactionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ImmunizationReactionComponent` JSON to instantiate the ImmunizationReactionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImmunizationReactionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImmunizationReactionComponent
   * @returns ImmunizationReactionComponent data model or undefined for `ImmunizationReactionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImmunizationReactionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImmunizationReactionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImmunizationReactionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDetail(datatype);
    }

    fieldName = 'reported';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setReportedElement(datatype);
    }

    return instance;
  }

  /**
   * Immunization.reaction.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When reaction started
   * - **Definition:** Date of reaction to the immunization.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private date?: DateTimeType | undefined;

  /**
   * Immunization.reaction.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information on reaction
   * - **Definition:** Details of the reaction.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: Reference | undefined;

  /**
   * Immunization.reaction.reported Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates self-reported reaction
   * - **Definition:** Self-reported indicator.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reported?: BooleanType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Immunization.reaction.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid Immunization.reaction.date (${String(value)})`;
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
   * @returns the `detail` property value as a Reference object; else an empty Reference object
   */
  public getDetail(): Reference {
    return this.detail ?? new Reference();
  }

  /**
   * Assigns the provided Detail object value to the `detail` property.
   *
   * @decorator `@ReferenceTargets('Immunization.reaction.detail', ['Observation',])`
   *
   * @param value - the `detail` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.reaction.detail', [
    'Observation',
  ])
  public setDetail(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
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
    return isDefined<Reference>(this.detail) && !this.detail.isEmpty();
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
      const optErrMsg = `Invalid Immunization.reaction.reported; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid Immunization.reaction.reported (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Immunization.reaction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.date,
      this.detail,
      this.reported,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImmunizationReactionComponent {
    const dest = new ImmunizationReactionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImmunizationReactionComponent): void {
    super.copyValues(dest);
    dest.date = this.date?.copy();
    dest.detail = this.detail?.copy();
    dest.reported = this.reported?.copy();
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

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasDetail()) {
      setFhirComplexJson(this.getDetail(), 'detail', jsonObj);
    }

    if (this.hasReportedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getReportedElement(), 'reported', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ImmunizationProtocolAppliedComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Protocol followed by the provider
 * - **Definition:** The protocol (set of recommendations) being followed by the provider who administered the dose.
 *
 * @category Data Models: Resource
 * @see [FHIR Immunization](http://hl7.org/fhir/StructureDefinition/Immunization)
 */
export class ImmunizationProtocolAppliedComponent extends BackboneElement implements IBackboneElement {
  constructor(doseNumber: IDataType | null = null) {
    super();

    this.doseNumber = null;
    if (isDefined<IDataType>(doseNumber)) {
      this.setDoseNumber(doseNumber);
    }

  }

  /**
   * Parse the provided `ImmunizationProtocolAppliedComponent` JSON to instantiate the ImmunizationProtocolAppliedComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImmunizationProtocolAppliedComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImmunizationProtocolAppliedComponent
   * @returns ImmunizationProtocolAppliedComponent data model or undefined for `ImmunizationProtocolAppliedComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImmunizationProtocolAppliedComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImmunizationProtocolAppliedComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImmunizationProtocolAppliedComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = ImmunizationProtocolAppliedComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ImmunizationProtocolAppliedComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'series';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSeriesElement(datatype);
    }

    fieldName = 'authority';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthority(datatype);
    }

    fieldName = 'targetDisease';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTargetDisease(datatype);
        }
      });
    }

    fieldName = 'doseNumber[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const doseNumber: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (doseNumber === undefined) {
      instance.setDoseNumber(null);
    } else {
      instance.setDoseNumber(doseNumber);
    }

    fieldName = 'seriesDoses[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const seriesDoses: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setSeriesDoses(seriesDoses);

    return instance;
  }

  /**
   * Immunization.protocolApplied.series Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of vaccine series
   * - **Definition:** One possible path to achieve presumed immunity against a disease - within the context of an authority.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private series?: StringType | undefined;

  /**
   * Immunization.protocolApplied.authority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is responsible for publishing the recommendations
   * - **Definition:** Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authority?: Reference | undefined;

  /**
   * Immunization.protocolApplied.targetDisease Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Vaccine preventatable disease being targetted
   * - **Definition:** The vaccine preventable disease the dose is being administered against.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private targetDisease?: CodeableConcept[] | undefined;

  /**
   * Immunization.protocolApplied.doseNumber[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Immunization.protocolApplied.doseNumber[x]', ['positiveInt','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dose number within series
   * - **Definition:** Nominal position in a series.
   * - **Comment:** The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   * - **FHIR Types:**
   *     'positiveInt',
   *     'string',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Immunization.protocolApplied.doseNumber[x]',[
    'positiveInt',
    'string',
  ])
  private doseNumber: IDataType | null;

  /**
   * Immunization.protocolApplied.seriesDoses[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Immunization.protocolApplied.seriesDoses[x]', ['positiveInt','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recommended number of doses for immunity
   * - **Definition:** The recommended number of doses to achieve immunity.
   * - **Comment:** The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   * - **FHIR Types:**
   *     'positiveInt',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Immunization.protocolApplied.seriesDoses[x]',[
    'positiveInt',
    'string',
  ])
  private seriesDoses?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `series` property value as a StringType object if defined; else an empty StringType object
   */
  public getSeriesElement(): StringType {
    return this.series ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `series` property.
   *
   * @param element - the `series` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeriesElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Immunization.protocolApplied.series; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.series = element;
    } else {
      this.series = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `series` property exists and has a value; `false` otherwise
   */
  public hasSeriesElement(): boolean {
    return isDefined<StringType>(this.series) && !this.series.isEmpty();
  }

  /**
   * @returns the `series` property value as a fhirString if defined; else undefined
   */
  public getSeries(): fhirString | undefined {
    return this.series?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `series` property.
   *
   * @param value - the `series` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeries(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Immunization.protocolApplied.series (${String(value)})`;
      this.series = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.series = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `series` property exists and has a value; `false` otherwise
   */
  public hasSeries(): boolean {
    return this.hasSeriesElement();
  }

  /**
   * @returns the `authority` property value as a Reference object; else an empty Reference object
   */
  public getAuthority(): Reference {
    return this.authority ?? new Reference();
  }

  /**
   * Assigns the provided Authority object value to the `authority` property.
   *
   * @decorator `@ReferenceTargets('Immunization.protocolApplied.authority', ['Organization',])`
   *
   * @param value - the `authority` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.protocolApplied.authority', [
    'Organization',
  ])
  public setAuthority(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.authority = value;
    } else {
      this.authority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authority` property exists and has a value; `false` otherwise
   */
  public hasAuthority(): boolean {
    return isDefined<Reference>(this.authority) && !this.authority.isEmpty();
  }

  /**
   * @returns the `targetDisease` property value as a CodeableConcept array
   */
  public getTargetDisease(): CodeableConcept[] {
    return this.targetDisease ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `targetDisease` property.
   *
   * @param value - the `targetDisease` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTargetDisease(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Immunization.protocolApplied.targetDisease; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.targetDisease = value;
    } else {
      this.targetDisease = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `targetDisease` array property.
   *
   * @param value - the `targetDisease` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTargetDisease(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Immunization.protocolApplied.targetDisease; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initTargetDisease();
      this.targetDisease?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `targetDisease` property exists and has a value; `false` otherwise
   */
  public hasTargetDisease(): boolean {
    return isDefinedList<CodeableConcept>(this.targetDisease) && this.targetDisease.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `targetDisease` property
   */
  private initTargetDisease(): void {
    if(!this.hasTargetDisease()) {
      this.targetDisease = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `doseNumber` property value as a DataType object; else null
   */
  public getDoseNumber(): IDataType | null {
    return this.doseNumber;
  }

  /**
   * Assigns the provided DataType object value to the `doseNumber` property.
   *
   * @decorator `@ChoiceDataTypes('Immunization.protocolApplied.doseNumber[x]')`
   *
   * @param value - the `doseNumber` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Immunization.protocolApplied.doseNumber[x]')
  public setDoseNumber(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.doseNumber = value;
    } else {
      this.doseNumber = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `doseNumber` property exists and has a value; `false` otherwise
   */
  public hasDoseNumber(): boolean {
    return isDefined<IDataType>(this.doseNumber) && !this.doseNumber.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `doseNumber` property value as a PositiveIntType object if defined; else null
   */
  public getDoseNumberPositiveIntType(): PositiveIntType | null {
    if (!isDefined<IDataType>(this.doseNumber)) {
      return null;
    }
    if (!(this.doseNumber instanceof PositiveIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Immunization.protocolApplied.doseNumber[x]: Expected PositiveIntType but encountered ${this.doseNumber.fhirType()}`,
      );
    }
    return this.doseNumber;
  }

  /**
   * @returns `true` if the `` property exists as a PositiveIntType and has a value; `false` otherwise
   */
  public hasDoseNumberPositiveIntType(): boolean {
    return this.hasDoseNumber() && this.doseNumber instanceof PositiveIntType;
  }

  /**
   * @returns the `doseNumber` property value as a StringType object if defined; else null
   */
  public getDoseNumberStringType(): StringType | null {
    if (!isDefined<IDataType>(this.doseNumber)) {
      return null;
    }
    if (!(this.doseNumber instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Immunization.protocolApplied.doseNumber[x]: Expected StringType but encountered ${this.doseNumber.fhirType()}`,
      );
    }
    return this.doseNumber;
  }

  /**
   * @returns `true` if the `` property exists as a StringType and has a value; `false` otherwise
   */
  public hasDoseNumberStringType(): boolean {
    return this.hasDoseNumber() && this.doseNumber instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `seriesDoses` property value as a DataType object if defined; else undefined
   */
  public getSeriesDoses(): IDataType | undefined {
    return this.seriesDoses;
  }

  /**
   * Assigns the provided DataType object value to the `seriesDoses` property.
   *
   * @decorator `@ChoiceDataTypes('Immunization.protocolApplied.seriesDoses[x]')`
   *
   * @param value - the `seriesDoses` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Immunization.protocolApplied.seriesDoses[x]')
  public setSeriesDoses(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.seriesDoses = value;
    } else {
      this.seriesDoses = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `seriesDoses` property exists and has a value; `false` otherwise
   */
  public hasSeriesDoses(): boolean {
    return isDefined<IDataType>(this.seriesDoses) && !this.seriesDoses.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `seriesDoses` property value as a PositiveIntType object if defined; else undefined
   */
  public getSeriesDosesPositiveIntType(): PositiveIntType | undefined {
    if (!isDefined<IDataType | undefined>(this.seriesDoses)) {
      return undefined;
    }
    if (!(this.seriesDoses instanceof PositiveIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Immunization.protocolApplied.seriesDoses[x]: Expected PositiveIntType but encountered ${this.seriesDoses.fhirType()}`,
      );
    }
    return this.seriesDoses;
  }

  /**
   * @returns `true` if the `seriesDoses` property exists as a PositiveIntType and has a value; `false` otherwise
   */
  public hasSeriesDosesPositiveIntType(): boolean {
    return this.hasSeriesDoses() && this.seriesDoses instanceof PositiveIntType;
  }

  /**
   * @returns the `seriesDoses` property value as a StringType object if defined; else undefined
   */
  public getSeriesDosesStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.seriesDoses)) {
      return undefined;
    }
    if (!(this.seriesDoses instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Immunization.protocolApplied.seriesDoses[x]: Expected StringType but encountered ${this.seriesDoses.fhirType()}`,
      );
    }
    return this.seriesDoses;
  }

  /**
   * @returns `true` if the `seriesDoses` property exists as a StringType and has a value; `false` otherwise
   */
  public hasSeriesDosesStringType(): boolean {
    return this.hasSeriesDoses() && this.seriesDoses instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Immunization.protocolApplied';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.series,
      this.authority,
      this.targetDisease,
      this.doseNumber,
      this.seriesDoses,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.doseNumber, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImmunizationProtocolAppliedComponent {
    const dest = new ImmunizationProtocolAppliedComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImmunizationProtocolAppliedComponent): void {
    super.copyValues(dest);
    dest.series = this.series?.copy();
    dest.authority = this.authority?.copy();
    const targetDiseaseList = copyListValues<CodeableConcept>(this.targetDisease);
    dest.targetDisease = targetDiseaseList.length === 0 ? undefined : targetDiseaseList;
    dest.doseNumber = this.doseNumber ? this.doseNumber.copy() as IDataType : null;
    dest.seriesDoses = this.seriesDoses?.copy() as IDataType;
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

    if (this.hasSeriesElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSeriesElement(), 'series', jsonObj);
    }

    if (this.hasAuthority()) {
      setFhirComplexJson(this.getAuthority(), 'authority', jsonObj);
    }

    if (this.hasTargetDisease()) {
      setFhirComplexListJson(this.getTargetDisease(), 'targetDisease', jsonObj);
    }

    if (this.hasDoseNumber()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDoseNumber()!, 'doseNumber', jsonObj);
    } else {
      jsonObj['doseNumber'] = null;
    }

    if (this.hasSeriesDoses()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getSeriesDoses()!, 'seriesDoses', jsonObj);
    }

    return jsonObj;
  }
}
