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
  DateType,
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
  PrimitiveType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
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
  fhirDateTime,
  fhirDateTimeSchema,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Reference } from '../complex-types/complex-datatypes';
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
 * - **FHIR Version:** 5.0.0
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
   * @throws {@link FhirError} if the provided JSON is missing required properties
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

    fieldName = 'vaccineCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setVaccineCode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'administeredProduct';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAdministeredProduct(datatype);
    }

    fieldName = 'manufacturer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
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

    fieldName = 'patient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPatient(datatype);
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

    fieldName = 'occurrence[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const occurrence: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (occurrence === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setOccurrence(occurrence);
    }

    fieldName = 'primarySource';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setPrimarySourceElement(datatype);
    }

    fieldName = 'informationSource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setInformationSource(datatype);
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
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

    fieldName = 'programEligibility';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImmunizationProgramEligibilityComponent | undefined = ImmunizationProgramEligibilityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProgramEligibility(component);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
   * Immunization.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Authority that the immunization event is based on
   * - **Definition:** A plan, order or recommendation fulfilled in whole or in part by this immunization.
   * - **Comment:** Allows tracing of an authorization for the Immunization.
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
   * - **Short:** Reason for current status
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
   * - **Short:** Vaccine administered
   * - **Definition:** Vaccine that was administered or was to be administered.
   * - **Comment:** The code for the administered vaccine may be reported at various levels of granularity from a very generic code for a general type of vaccine (e.g. the SNOMED or CVX code for the flu vaccine) to a very discrete code for a specific product including the form and packaging (e.g. an NDC code). Because vaccineCode uses the CodeableConcept data type, multiple codes at different levels of granularity may be reported for a single immunization event provided that all codes are appropriate for the same vaccine. For example, both NDC and CVX codes may be provided for a given immunization event by repeating the coding element within vaccineCode.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private vaccineCode: CodeableConcept | null;

  /**
   * Immunization.administeredProduct Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product that was administered
   * - **Definition:** An indication of which product was administered to the patient. This is typically a more detailed representation of the concept conveyed by the vaccineCode data element. If a Medication resource is referenced, it may be to a stand-alone resource or a contained resource within the Immunization resource.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private administeredProduct?: CodeableReference | undefined;

  /**
   * Immunization.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Vaccine manufacturer
   * - **Definition:** Name of vaccine manufacturer.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private manufacturer?: CodeableReference | undefined;

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
   * Immunization.supportingInformation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information in support of the immunization
   * - **Definition:** Additional information that is relevant to the immunization (e.g. for a vaccine recipient who is pregnant, the gestational age of the fetus). The reason why a vaccine was given (e.g. occupation, underlying medical condition) should be conveyed in Immunization.reason, not as supporting information. The reason why a vaccine was not given (e.g. contraindication) should be conveyed in Immunization.statusReason, not as supporting information.
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
   * Immunization.primarySource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates context the data was captured in
   * - **Definition:** Indicates whether the data contained in the resource was captured by the individual/organization which was responsible for the administration of the vaccine rather than as \'secondary reported\' data documented by a third party. A value of \'true\' means this data originated with the individual/organization which was responsible for the administration of the vaccine.
   * - **Comment:** Reflects the "reliability" of the content.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private primarySource?: BooleanType | undefined;

  /**
   * Immunization.informationSource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates the source of a  reported record
   * - **Definition:** Typically the source of the data when the report of the immunization event is not based on information from the person who administered the vaccine.
   * - **Comment:** Typically will not be populated if primarySource = True, not required even if primarySource = False.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private informationSource?: CodeableReference | undefined;

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
   * Immunization.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why immunization occurred
   * - **Definition:** Describes why the immunization occurred in coded or textual form, or Indicates another resource (Condition, Observation or DiagnosticReport) whose existence justifies this immunization.
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
   * Immunization.programEligibility Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient eligibility for a specific vaccination program
   * - **Definition:** Indicates a patient\'s eligibility for a funding program.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private programEligibility?: ImmunizationProgramEligibilityComponent[] | undefined;

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
   * @returns the `basedOn` property value as a Reference array
   */
  public getBasedOn(): Reference[] {
    return this.basedOn ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `basedOn` property.
   *
   * @decorator `@ReferenceTargets('Immunization.basedOn', ['CarePlan','MedicationRequest','ServiceRequest','ImmunizationRecommendation',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.basedOn', [
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
   * @decorator `@ReferenceTargets('Immunization.basedOn', ['CarePlan','MedicationRequest','ServiceRequest','ImmunizationRecommendation',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.basedOn', [
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
    assertIsDefined<EnumCodeType>(enumType, `Immunization.status is required`);
    const errMsgPrefix = `Invalid Immunization.status`;
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
    assertIsDefined<CodeType>(element, `Immunization.status is required`);
    const optErrMsg = `Invalid Immunization.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `Immunization.status is required`);
    const optErrMsg = `Invalid Immunization.status (${String(value)})`;
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
   * @returns the `vaccineCode` property value as a CodeableConcept object if defined; else null
   */
  public getVaccineCode(): CodeableConcept | null {
    return this.vaccineCode;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `vaccineCode` property.
   *
   * @param value - the `vaccineCode` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVaccineCode(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Immunization.vaccineCode is required`);
    const optErrMsg = `Invalid Immunization.vaccineCode; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.vaccineCode = value;
    return this;
  }

  /**
   * @returns `true` if the `vaccineCode` property exists and has a value; `false` otherwise
   */
  public hasVaccineCode(): boolean {
    return isDefined<CodeableConcept>(this.vaccineCode) && !this.vaccineCode.isEmpty();
  }

  /**
   * @returns the `administeredProduct` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getAdministeredProduct(): CodeableReference {
    return this.administeredProduct ?? new CodeableReference();
  }

  /**
   * Assigns the provided AdministeredProduct object value to the `administeredProduct` property.
   *
   * @param value - the `administeredProduct` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdministeredProduct(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Immunization.administeredProduct; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.administeredProduct = value;
    } else {
      this.administeredProduct = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `administeredProduct` property exists and has a value; `false` otherwise
   */
  public hasAdministeredProduct(): boolean {
    return isDefined<CodeableReference>(this.administeredProduct) && !this.administeredProduct.isEmpty();
  }

  /**
   * @returns the `manufacturer` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getManufacturer(): CodeableReference {
    return this.manufacturer ?? new CodeableReference();
  }

  /**
   * Assigns the provided Manufacturer object value to the `manufacturer` property.
   *
   * @param value - the `manufacturer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setManufacturer(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Immunization.manufacturer; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
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
    return isDefined<CodeableReference>(this.manufacturer) && !this.manufacturer.isEmpty();
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
   * @returns the `patient` property value as a Reference object if defined; else null
   */
  public getPatient(): Reference | null {
    return this.patient;
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
  public setPatient(value: Reference): this {
    assertIsDefined<Reference>(value, `Immunization.patient is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.patient = value;
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
   * @returns the `supportingInformation` property value as a Reference array
   */
  public getSupportingInformation(): Reference[] {
    return this.supportingInformation ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `supportingInformation` property.
   *
   * @decorator `@ReferenceTargets('Immunization.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.supportingInformation', [
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
   * @decorator `@ReferenceTargets('Immunization.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.supportingInformation', [
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
  public setOccurrence(value: IDataType): this {
    assertIsDefined<IDataType>(value, `Immunization.occurrence[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.occurrence = value;
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
   * @returns the `informationSource` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getInformationSource(): CodeableReference {
    return this.informationSource ?? new CodeableReference();
  }

  /**
   * Assigns the provided InformationSource object value to the `informationSource` property.
   *
   * @param value - the `informationSource` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInformationSource(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Immunization.informationSource; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.informationSource = value;
    } else {
      this.informationSource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `informationSource` property exists and has a value; `false` otherwise
   */
  public hasInformationSource(): boolean {
    return isDefined<CodeableReference>(this.informationSource) && !this.informationSource.isEmpty();
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
      const optErrMsg = `Invalid Immunization.reason; Provided value array has an element that is not an instance of CodeableReference.`;
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
      const optErrMsg = `Invalid Immunization.reason; Provided element is not an instance of CodeableReference.`;
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
   * @returns the `programEligibility` property value as a ImmunizationProgramEligibilityComponent array
   */
  public getProgramEligibility(): ImmunizationProgramEligibilityComponent[] {
    return this.programEligibility ?? ([] as ImmunizationProgramEligibilityComponent[]);
  }

  /**
   * Assigns the provided ImmunizationProgramEligibilityComponent array value to the `programEligibility` property.
   *
   * @param value - the `programEligibility` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProgramEligibility(value: ImmunizationProgramEligibilityComponent[] | undefined): this {
    if (isDefinedList<ImmunizationProgramEligibilityComponent>(value)) {
      const optErrMsg = `Invalid Immunization.programEligibility; Provided value array has an element that is not an instance of ImmunizationProgramEligibilityComponent.`;
      assertFhirTypeList<ImmunizationProgramEligibilityComponent>(value, ImmunizationProgramEligibilityComponent, optErrMsg);
      this.programEligibility = value;
    } else {
      this.programEligibility = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImmunizationProgramEligibilityComponent value to the `programEligibility` array property.
   *
   * @param value - the `programEligibility` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProgramEligibility(value: ImmunizationProgramEligibilityComponent | undefined): this {
    if (isDefined<ImmunizationProgramEligibilityComponent>(value)) {
      const optErrMsg = `Invalid Immunization.programEligibility; Provided element is not an instance of ImmunizationProgramEligibilityComponent.`;
      assertFhirType<ImmunizationProgramEligibilityComponent>(value, ImmunizationProgramEligibilityComponent, optErrMsg);
      this.initProgramEligibility();
      this.programEligibility?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `programEligibility` property exists and has a value; `false` otherwise
   */
  public hasProgramEligibility(): boolean {
    return isDefinedList<ImmunizationProgramEligibilityComponent>(this.programEligibility) && this.programEligibility.some((item: ImmunizationProgramEligibilityComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `programEligibility` property
   */
  private initProgramEligibility(): void {
    if(!this.hasProgramEligibility()) {
      this.programEligibility = [] as ImmunizationProgramEligibilityComponent[];
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
      this.basedOn,
      this.status,
      this.statusReason,
      this.vaccineCode,
      this.administeredProduct,
      this.manufacturer,
      this.lotNumber,
      this.expirationDate,
      this.patient,
      this.encounter,
      this.supportingInformation,
      this.occurrence,
      this.primarySource,
      this.informationSource,
      this.location,
      this.site,
      this.route,
      this.doseQuantity,
      this.performer,
      this.note,
      this.reason,
      this.isSubpotent,
      this.subpotentReason,
      this.programEligibility,
      this.fundingSource,
      this.reaction,
      this.protocolApplied,
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
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    dest.status = this.status ? this.status.copy() : null;
    dest.statusReason = this.statusReason?.copy();
    dest.vaccineCode = this.vaccineCode ? this.vaccineCode.copy() : null;
    dest.administeredProduct = this.administeredProduct?.copy();
    dest.manufacturer = this.manufacturer?.copy();
    dest.lotNumber = this.lotNumber?.copy();
    dest.expirationDate = this.expirationDate?.copy();
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.encounter = this.encounter?.copy();
    const supportingInformationList = copyListValues<Reference>(this.supportingInformation);
    dest.supportingInformation = supportingInformationList.length === 0 ? undefined : supportingInformationList;
    dest.occurrence = this.occurrence ? this.occurrence.copy() as IDataType : null;
    dest.primarySource = this.primarySource?.copy();
    dest.informationSource = this.informationSource?.copy();
    dest.location = this.location?.copy();
    dest.site = this.site?.copy();
    dest.route = this.route?.copy();
    dest.doseQuantity = this.doseQuantity?.copy();
    const performerList = copyListValues<ImmunizationPerformerComponent>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const reasonList = copyListValues<CodeableReference>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    dest.isSubpotent = this.isSubpotent?.copy();
    const subpotentReasonList = copyListValues<CodeableConcept>(this.subpotentReason);
    dest.subpotentReason = subpotentReasonList.length === 0 ? undefined : subpotentReasonList;
    const programEligibilityList = copyListValues<ImmunizationProgramEligibilityComponent>(this.programEligibility);
    dest.programEligibility = programEligibilityList.length === 0 ? undefined : programEligibilityList;
    dest.fundingSource = this.fundingSource?.copy();
    const reactionList = copyListValues<ImmunizationReactionComponent>(this.reaction);
    dest.reaction = reactionList.length === 0 ? undefined : reactionList;
    const protocolAppliedList = copyListValues<ImmunizationProtocolAppliedComponent>(this.protocolApplied);
    dest.protocolApplied = protocolAppliedList.length === 0 ? undefined : protocolAppliedList;
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

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`Immunization.status`);
    }

    if (this.hasStatusReason()) {
      setFhirComplexJson(this.getStatusReason(), 'statusReason', jsonObj);
    }

    if (this.hasVaccineCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getVaccineCode()!, 'vaccineCode', jsonObj);
    } else {
      missingReqdProperties.push(`Immunization.vaccineCode`);
    }

    if (this.hasAdministeredProduct()) {
      setFhirComplexJson(this.getAdministeredProduct(), 'administeredProduct', jsonObj);
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

    if (this.hasPatient()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPatient()!, 'patient', jsonObj);
    } else {
      missingReqdProperties.push(`Immunization.patient`);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasSupportingInformation()) {
      setFhirComplexListJson(this.getSupportingInformation(), 'supportingInformation', jsonObj);
    }

    if (this.hasOccurrence()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOccurrence()!, 'occurrence', jsonObj);
    } else {
      missingReqdProperties.push(`Immunization.occurrence[x]`);
    }

    if (this.hasPrimarySourceElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getPrimarySourceElement(), 'primarySource', jsonObj);
    }

    if (this.hasInformationSource()) {
      setFhirComplexJson(this.getInformationSource(), 'informationSource', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
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

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasIsSubpotentElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getIsSubpotentElement(), 'isSubpotent', jsonObj);
    }

    if (this.hasSubpotentReason()) {
      setFhirComplexListJson(this.getSubpotentReason(), 'subpotentReason', jsonObj);
    }

    if (this.hasProgramEligibility()) {
      setFhirBackboneElementListJson(this.getProgramEligibility(), 'programEligibility', jsonObj);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
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
   * @throws {@link FhirError} if the provided JSON is missing required properties
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

    const missingReqdProperties: string[] = [];

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
        missingReqdProperties.push(sourceField);
      } else {
        instance.setActor(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
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
   * @returns the `actor` property value as a Reference object if defined; else null
   */
  public getActor(): Reference | null {
    return this.actor;
  }

  /**
   * Assigns the provided Actor object value to the `actor` property.
   *
   * @decorator `@ReferenceTargets('Immunization.performer.actor', ['Practitioner','PractitionerRole','Organization','Patient','RelatedPerson',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Immunization.performer.actor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Patient',
  
    'RelatedPerson',
  ])
  public setActor(value: Reference): this {
    assertIsDefined<Reference>(value, `Immunization.performer.actor is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.actor = value;
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
   * @throws {@link FhirError} if the instance is missing required properties
   */
  public override toJSON(): JSON.Value | undefined {
    // Required class properties exist (have a min cardinality > 0); therefore, do not check for this.isEmpty()!

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    const missingReqdProperties: string[] = [];

    if (this.hasFunction()) {
      setFhirComplexJson(this.getFunction(), 'function', jsonObj);
    }

    if (this.hasActor()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getActor()!, 'actor', jsonObj);
    } else {
      missingReqdProperties.push(`Immunization.performer.actor`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ImmunizationProgramEligibilityComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Patient eligibility for a specific vaccination program
 * - **Definition:** Indicates a patient\'s eligibility for a funding program.
 *
 * @category Data Models: Resource
 * @see [FHIR Immunization](http://hl7.org/fhir/StructureDefinition/Immunization)
 */
export class ImmunizationProgramEligibilityComponent extends BackboneElement implements IBackboneElement {
  constructor(program: CodeableConcept | null = null, programStatus: CodeableConcept | null = null) {
    super();

    this.program = null;
    if (isDefined<CodeableConcept>(program)) {
      this.setProgram(program);
    }

    this.programStatus = null;
    if (isDefined<CodeableConcept>(programStatus)) {
      this.setProgramStatus(programStatus);
    }
  }

  /**
   * Parse the provided `ImmunizationProgramEligibilityComponent` JSON to instantiate the ImmunizationProgramEligibilityComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImmunizationProgramEligibilityComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImmunizationProgramEligibilityComponent
   * @returns ImmunizationProgramEligibilityComponent data model or undefined for `ImmunizationProgramEligibilityComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImmunizationProgramEligibilityComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImmunizationProgramEligibilityComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImmunizationProgramEligibilityComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'program';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setProgram(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'programStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setProgramStatus(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Immunization.programEligibility.program Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The program that eligibility is declared for
   * - **Definition:** Indicates which program the patient had their eligility evaluated for.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private program: CodeableConcept | null;

  /**
   * Immunization.programEligibility.programStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The patient\'s eligibility status for the program
   * - **Definition:** Indicates the patient\'s eligility status for for a specific payment program.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private programStatus: CodeableConcept | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `program` property value as a CodeableConcept object if defined; else null
   */
  public getProgram(): CodeableConcept | null {
    return this.program;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `program` property.
   *
   * @param value - the `program` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProgram(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Immunization.programEligibility.program is required`);
    const optErrMsg = `Invalid Immunization.programEligibility.program; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.program = value;
    return this;
  }

  /**
   * @returns `true` if the `program` property exists and has a value; `false` otherwise
   */
  public hasProgram(): boolean {
    return isDefined<CodeableConcept>(this.program) && !this.program.isEmpty();
  }

  /**
   * @returns the `programStatus` property value as a CodeableConcept object if defined; else null
   */
  public getProgramStatus(): CodeableConcept | null {
    return this.programStatus;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `programStatus` property.
   *
   * @param value - the `programStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProgramStatus(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Immunization.programEligibility.programStatus is required`);
    const optErrMsg = `Invalid Immunization.programEligibility.programStatus; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.programStatus = value;
    return this;
  }

  /**
   * @returns `true` if the `programStatus` property exists and has a value; `false` otherwise
   */
  public hasProgramStatus(): boolean {
    return isDefined<CodeableConcept>(this.programStatus) && !this.programStatus.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Immunization.programEligibility';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.program,
      this.programStatus,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImmunizationProgramEligibilityComponent {
    const dest = new ImmunizationProgramEligibilityComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImmunizationProgramEligibilityComponent): void {
    super.copyValues(dest);
    dest.program = this.program ? this.program.copy() : null;
    dest.programStatus = this.programStatus ? this.programStatus.copy() : null;
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

    if (this.hasProgram()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getProgram()!, 'program', jsonObj);
    } else {
      missingReqdProperties.push(`Immunization.programEligibility.program`);
    }

    if (this.hasProgramStatus()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getProgramStatus()!, 'programStatus', jsonObj);
    } else {
      missingReqdProperties.push(`Immunization.programEligibility.programStatus`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
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

    fieldName = 'manifestation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setManifestation(datatype);
    }

    fieldName = 'reported';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setReportedElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
   * Immunization.reaction.manifestation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information on reaction
   * - **Definition:** Details of the reaction.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private manifestation?: CodeableReference | undefined;

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
   * @returns the `manifestation` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getManifestation(): CodeableReference {
    return this.manifestation ?? new CodeableReference();
  }

  /**
   * Assigns the provided Manifestation object value to the `manifestation` property.
   *
   * @param value - the `manifestation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setManifestation(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Immunization.reaction.manifestation; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.manifestation = value;
    } else {
      this.manifestation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `manifestation` property exists and has a value; `false` otherwise
   */
  public hasManifestation(): boolean {
    return isDefined<CodeableReference>(this.manifestation) && !this.manifestation.isEmpty();
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
      this.manifestation,
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
    dest.manifestation = this.manifestation?.copy();
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

    if (this.hasManifestation()) {
      setFhirComplexJson(this.getManifestation(), 'manifestation', jsonObj);
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
  constructor(doseNumber: StringType | fhirString | null = null) {
    super();

    this.doseNumber = null;
    if (isDefined<StringType | fhirString>(doseNumber)) {
      if (doseNumber instanceof PrimitiveType) {
        this.setDoseNumberElement(doseNumber);
      } else {
        this.setDoseNumber(doseNumber);
      }
    }
  }

  /**
   * Parse the provided `ImmunizationProtocolAppliedComponent` JSON to instantiate the ImmunizationProtocolAppliedComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImmunizationProtocolAppliedComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImmunizationProtocolAppliedComponent
   * @returns ImmunizationProtocolAppliedComponent data model or undefined for `ImmunizationProtocolAppliedComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
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
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'series';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
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

    fieldName = 'doseNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setDoseNumberElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'seriesDoses';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSeriesDosesElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
   * - **Short:** Vaccine preventatable disease being targeted
   * - **Definition:** The vaccine preventable disease the dose is being administered against.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private targetDisease?: CodeableConcept[] | undefined;

  /**
   * Immunization.protocolApplied.doseNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dose number within series
   * - **Definition:** Nominal position in a series as intended by the practitioner administering the dose.
   * - **Comment:** The use of an integer is preferred if known. Text should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private doseNumber: StringType | null;

  /**
   * Immunization.protocolApplied.seriesDoses Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recommended number of doses for immunity
   * - **Definition:** The recommended number of doses to achieve immunity as intended by the practitioner administering the dose.
   * - **Comment:** The use of an integer is preferred if known.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private seriesDoses?: StringType | undefined;

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
   * @returns the `doseNumber` property value as a StringType object if defined; else null
   */
  public getDoseNumberElement(): StringType | null {
    return this.doseNumber;
  }

  /**
   * Assigns the provided PrimitiveType value to the `doseNumber` property.
   *
   * @param element - the `doseNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoseNumberElement(element: StringType): this {
    assertIsDefined<StringType>(element, `Immunization.protocolApplied.doseNumber is required`);
    const optErrMsg = `Invalid Immunization.protocolApplied.doseNumber; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.doseNumber = element;
    return this;
  }

  /**
   * @returns `true` if the `doseNumber` property exists and has a value; `false` otherwise
   */
  public hasDoseNumberElement(): boolean {
    return isDefined<StringType>(this.doseNumber) && !this.doseNumber.isEmpty();
  }

  /**
   * @returns the `doseNumber` property value as a fhirString if defined; else null
   */
  public getDoseNumber(): fhirString | null {
    if (this.doseNumber?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.doseNumber.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `doseNumber` property.
   *
   * @param value - the `doseNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoseNumber(value: fhirString): this {
    assertIsDefined<fhirString>(value, `Immunization.protocolApplied.doseNumber is required`);
    const optErrMsg = `Invalid Immunization.protocolApplied.doseNumber (${String(value)})`;
    this.doseNumber = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `doseNumber` property exists and has a value; `false` otherwise
   */
  public hasDoseNumber(): boolean {
    return this.hasDoseNumberElement();
  }

  /**
   * @returns the `seriesDoses` property value as a StringType object if defined; else an empty StringType object
   */
  public getSeriesDosesElement(): StringType {
    return this.seriesDoses ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `seriesDoses` property.
   *
   * @param element - the `seriesDoses` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeriesDosesElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Immunization.protocolApplied.seriesDoses; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.seriesDoses = element;
    } else {
      this.seriesDoses = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `seriesDoses` property exists and has a value; `false` otherwise
   */
  public hasSeriesDosesElement(): boolean {
    return isDefined<StringType>(this.seriesDoses) && !this.seriesDoses.isEmpty();
  }

  /**
   * @returns the `seriesDoses` property value as a fhirString if defined; else undefined
   */
  public getSeriesDoses(): fhirString | undefined {
    return this.seriesDoses?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `seriesDoses` property.
   *
   * @param value - the `seriesDoses` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeriesDoses(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Immunization.protocolApplied.seriesDoses (${String(value)})`;
      this.seriesDoses = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.seriesDoses = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `seriesDoses` property exists and has a value; `false` otherwise
   */
  public hasSeriesDoses(): boolean {
    return this.hasSeriesDosesElement();
  }

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
    dest.doseNumber = this.doseNumber ? this.doseNumber.copy() : null;
    dest.seriesDoses = this.seriesDoses?.copy();
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

    if (this.hasSeriesElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSeriesElement(), 'series', jsonObj);
    }

    if (this.hasAuthority()) {
      setFhirComplexJson(this.getAuthority(), 'authority', jsonObj);
    }

    if (this.hasTargetDisease()) {
      setFhirComplexListJson(this.getTargetDisease(), 'targetDisease', jsonObj);
    }

    if (this.hasDoseNumberElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getDoseNumberElement()!, 'doseNumber', jsonObj);
    } else {
      missingReqdProperties.push(`Immunization.protocolApplied.doseNumber`);
    }

    if (this.hasSeriesDosesElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSeriesDosesElement(), 'seriesDoses', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
