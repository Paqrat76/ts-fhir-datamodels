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
 * EncounterHistory Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/EncounterHistory
 * StructureDefinition.name: EncounterHistory
 * StructureDefinition.description: A record of significant events/milestones key data throughout the history of an Encounter
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  JSON,
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
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
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, CodeableReference, Duration, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { EncounterStatusEnum } from '../code-systems/EncounterStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * EncounterHistory Class
 *
 * @remarks
 * A record of significant events/milestones key data throughout the history of an Encounter
 *
 * **FHIR Specification**
 * - **Short:** A record of significant events/milestones key data throughout the history of an Encounter
 * - **Definition:** A record of significant events/milestones key data throughout the history of an Encounter, often tracked for specific purposes such as billing.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR EncounterHistory](http://hl7.org/fhir/StructureDefinition/EncounterHistory)
 */
export class EncounterHistory extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, class_: CodeableConcept | null = null) {
    super();

    this.encounterStatusEnum = new EncounterStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<EncounterStatusEnum>(
      status,
      EncounterStatusEnum,
      this.encounterStatusEnum,
      'EncounterHistory.status',
    );

    this.class_ = null;
    if (isDefined<CodeableConcept>(class_)) {
      this.setClass(class_);
    }
  }

  /**
   * Parse the provided `EncounterHistory` JSON to instantiate the EncounterHistory data model.
   *
   * @param sourceJson - JSON representing FHIR `EncounterHistory`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EncounterHistory
   * @returns EncounterHistory data model or undefined for `EncounterHistory`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): EncounterHistory | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EncounterHistory';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EncounterHistory();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'EncounterHistory');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

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

    fieldName = 'class';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setClass(null);
      } else {
        instance.setClass(datatype);
      }
    } else {
      instance.setClass(null);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addType(datatype);
          }
        });
      }
    }

    fieldName = 'serviceType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addServiceType(datatype);
          }
        });
      }
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'subjectStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubjectStatus(datatype);
    }

    fieldName = 'actualPeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setActualPeriod(datatype);
    }

    fieldName = 'plannedStartDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setPlannedStartDateElement(datatype);
    }

    fieldName = 'plannedEndDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setPlannedEndDateElement(datatype);
    }

    fieldName = 'length';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLength(datatype);
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: EncounterHistoryLocationComponent | undefined = EncounterHistoryLocationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addLocation(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * EncounterHistory.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The Encounter associated with this set of historic values
   * - **Definition:** The Encounter associated with this set of historic values.
   * - **Comment:** This is also used for associating a child\'s encounter back to the mother\'s encounter. Refer to the Notes section in the Patient resource for further details.
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
   * EncounterHistory.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier(s) by which this encounter is known
   * - **Definition:** Identifier(s) by which this encounter is known.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: EncounterStatus
   *
   * @see {@link EncounterStatusEnum }
   */
  private readonly encounterStatusEnum: EncounterStatusEnum;

  /**
   * EncounterHistory.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown
   * - **Definition:** planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown.
   * - **Comment:** Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * EncounterHistory.class Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of patient encounter
   * - **Definition:** Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private class_: CodeableConcept | null;

  /**
   * EncounterHistory.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific type of encounter
   * - **Definition:** Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
   * - **Comment:** Since there are many ways to further classify encounters, this element is 0..*.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * EncounterHistory.serviceType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific type of service
   * - **Definition:** Broad categorization of the service that is to be provided (e.g. cardiology).
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private serviceType?: CodeableReference[] | undefined;

  /**
   * EncounterHistory.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The patient or group related to this encounter
   * - **Definition:** The patient or group related to this encounter. In some use-cases the patient MAY not be present, such as a case meeting about a patient between several practitioners or a careteam.
   * - **Comment:** While the encounter is always about the patient, the patient might not actually be known in all contexts of use, and there may be a group of patients that could be anonymous (such as in a group therapy for Alcoholics Anonymous - where the recording of the encounter could be used for billing on the number of people/staff and not important to the context of the specific patients) or alternately in veterinary care a herd of sheep receiving treatment (where the animals are not individually tracked).
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
   * EncounterHistory.subjectStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The current status of the subject in relation to the Encounter
   * - **Definition:** The subjectStatus value can be used to track the patient\'s status within the encounter. It details whether the patient has arrived or departed, has been triaged or is currently in a waiting status.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subjectStatus?: CodeableConcept | undefined;

  /**
   * EncounterHistory.actualPeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual start and end time associated with this set of values associated with the encounter
   * - **Definition:** The start and end time associated with this set of values associated with the encounter, may be different to the planned times for various reasons.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actualPeriod?: Period | undefined;

  /**
   * EncounterHistory.plannedStartDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The planned start date/time (or admission date) of the encounter
   * - **Definition:** The planned start date/time (or admission date) of the encounter.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private plannedStartDate?: DateTimeType | undefined;

  /**
   * EncounterHistory.plannedEndDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The planned end date/time (or discharge date) of the encounter
   * - **Definition:** The planned end date/time (or discharge date) of the encounter.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private plannedEndDate?: DateTimeType | undefined;

  /**
   * EncounterHistory.length Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actual quantity of time the encounter lasted (less time absent)
   * - **Definition:** Actual quantity of time the encounter lasted. This excludes the time during leaves of absence. When missing it is the time in between the start and end values.
   * - **Comment:** If the precision on these values is low (e.g. to the day only) then this may be considered was an all day (or multi-day) encounter, unless the duration is included, where that amount of time occurred sometime during the interval. May differ from the time in `Encounter.period` due to leave of absence(s).
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private length?: Duration | undefined;

  /**
   * EncounterHistory.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Location of the patient at this point in the encounter
   * - **Definition:** The location of the patient at this point in the encounter, the multiple cardinality permits de-normalizing the levels of the location hierarchy, such as site/ward/room/bed.
   * - **Comment:** Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client\'s home" and an encounter.class = "virtual".
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private location?: EncounterHistoryLocationComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `encounter` property value as a Reference object; else an empty Reference object
   */
  public getEncounter(): Reference {
    return this.encounter ?? new Reference();
  }

  /**
   * Assigns the provided Encounter object value to the `encounter` property.
   *
   * @decorator `@ReferenceTargets('EncounterHistory.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EncounterHistory.encounter', [
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
      const optErrMsg = `Invalid EncounterHistory.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid EncounterHistory.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid EncounterHistory.status`;
      assertEnumCodeType<EncounterStatusEnum>(enumType, EncounterStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid EncounterHistory.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.encounterStatusEnum);
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
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EncounterStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid EncounterHistory.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.encounterStatusEnum);
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
   * @returns the `class_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getClass(): CodeableConcept {
    return this.class_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `class_` property.
   *
   * @param value - the `class_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClass(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EncounterHistory.class; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.class_ = value;
    } else {
      this.class_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `class_` property exists and has a value; `false` otherwise
   */
  public hasClass(): boolean {
    return isDefined<CodeableConcept>(this.class_) && !this.class_.isEmpty();
  }

  /**
   * @returns the `type_` property value as a CodeableConcept array
   */
  public getType(): CodeableConcept[] {
    return this.type_ ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `type_` property.
   *
   * @param value - the `type_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EncounterHistory.type; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `type_` array property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EncounterHistory.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initType();
      this.type_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefinedList<CodeableConcept>(this.type_) && this.type_.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `type_` property
   */
  private initType(): void {
    if(!this.hasType()) {
      this.type_ = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `serviceType` property value as a CodeableReference array
   */
  public getServiceType(): CodeableReference[] {
    return this.serviceType ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `serviceType` property.
   *
   * @param value - the `serviceType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setServiceType(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid EncounterHistory.serviceType; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.serviceType = value;
    } else {
      this.serviceType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `serviceType` array property.
   *
   * @param value - the `serviceType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addServiceType(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid EncounterHistory.serviceType; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initServiceType();
      this.serviceType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `serviceType` property exists and has a value; `false` otherwise
   */
  public hasServiceType(): boolean {
    return isDefinedList<CodeableReference>(this.serviceType) && this.serviceType.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `serviceType` property
   */
  private initServiceType(): void {
    if(!this.hasServiceType()) {
      this.serviceType = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('EncounterHistory.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EncounterHistory.subject', [
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
   * @returns the `subjectStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSubjectStatus(): CodeableConcept {
    return this.subjectStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided SubjectStatus object value to the `subjectStatus` property.
   *
   * @param value - the `subjectStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubjectStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EncounterHistory.subjectStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.subjectStatus = value;
    } else {
      this.subjectStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subjectStatus` property exists and has a value; `false` otherwise
   */
  public hasSubjectStatus(): boolean {
    return isDefined<CodeableConcept>(this.subjectStatus) && !this.subjectStatus.isEmpty();
  }

  /**
   * @returns the `actualPeriod` property value as a Period object if defined; else an empty Period object
   */
  public getActualPeriod(): Period {
    return this.actualPeriod ?? new Period();
  }

  /**
   * Assigns the provided ActualPeriod object value to the `actualPeriod` property.
   *
   * @param value - the `actualPeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setActualPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid EncounterHistory.actualPeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.actualPeriod = value;
    } else {
      this.actualPeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actualPeriod` property exists and has a value; `false` otherwise
   */
  public hasActualPeriod(): boolean {
    return isDefined<Period>(this.actualPeriod) && !this.actualPeriod.isEmpty();
  }

  /**
   * @returns the `plannedStartDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getPlannedStartDateElement(): DateTimeType {
    return this.plannedStartDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `plannedStartDate` property.
   *
   * @param element - the `plannedStartDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPlannedStartDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid EncounterHistory.plannedStartDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.plannedStartDate = element;
    } else {
      this.plannedStartDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `plannedStartDate` property exists and has a value; `false` otherwise
   */
  public hasPlannedStartDateElement(): boolean {
    return isDefined<DateTimeType>(this.plannedStartDate) && !this.plannedStartDate.isEmpty();
  }

  /**
   * @returns the `plannedStartDate` property value as a fhirDateTime if defined; else undefined
   */
  public getPlannedStartDate(): fhirDateTime | undefined {
    return this.plannedStartDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `plannedStartDate` property.
   *
   * @param value - the `plannedStartDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPlannedStartDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid EncounterHistory.plannedStartDate (${String(value)})`;
      this.plannedStartDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.plannedStartDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `plannedStartDate` property exists and has a value; `false` otherwise
   */
  public hasPlannedStartDate(): boolean {
    return this.hasPlannedStartDateElement();
  }

  /**
   * @returns the `plannedEndDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getPlannedEndDateElement(): DateTimeType {
    return this.plannedEndDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `plannedEndDate` property.
   *
   * @param element - the `plannedEndDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPlannedEndDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid EncounterHistory.plannedEndDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.plannedEndDate = element;
    } else {
      this.plannedEndDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `plannedEndDate` property exists and has a value; `false` otherwise
   */
  public hasPlannedEndDateElement(): boolean {
    return isDefined<DateTimeType>(this.plannedEndDate) && !this.plannedEndDate.isEmpty();
  }

  /**
   * @returns the `plannedEndDate` property value as a fhirDateTime if defined; else undefined
   */
  public getPlannedEndDate(): fhirDateTime | undefined {
    return this.plannedEndDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `plannedEndDate` property.
   *
   * @param value - the `plannedEndDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPlannedEndDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid EncounterHistory.plannedEndDate (${String(value)})`;
      this.plannedEndDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.plannedEndDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `plannedEndDate` property exists and has a value; `false` otherwise
   */
  public hasPlannedEndDate(): boolean {
    return this.hasPlannedEndDateElement();
  }

  /**
   * @returns the `length` property value as a Duration object if defined; else an empty Duration object
   */
  public getLength(): Duration {
    return this.length ?? new Duration();
  }

  /**
   * Assigns the provided Length object value to the `length` property.
   *
   * @param value - the `length` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLength(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid EncounterHistory.length; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.length = value;
    } else {
      this.length = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `length` property exists and has a value; `false` otherwise
   */
  public hasLength(): boolean {
    return isDefined<Duration>(this.length) && !this.length.isEmpty();
  }

  /**
   * @returns the `location` property value as a EncounterHistoryLocationComponent array
   */
  public getLocation(): EncounterHistoryLocationComponent[] {
    return this.location ?? ([] as EncounterHistoryLocationComponent[]);
  }

  /**
   * Assigns the provided EncounterHistoryLocationComponent array value to the `location` property.
   *
   * @param value - the `location` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLocation(value: EncounterHistoryLocationComponent[] | undefined): this {
    if (isDefinedList<EncounterHistoryLocationComponent>(value)) {
      const optErrMsg = `Invalid EncounterHistory.location; Provided value array has an element that is not an instance of EncounterHistoryLocationComponent.`;
      assertFhirTypeList<EncounterHistoryLocationComponent>(value, EncounterHistoryLocationComponent, optErrMsg);
      this.location = value;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * Add the provided EncounterHistoryLocationComponent value to the `location` array property.
   *
   * @param value - the `location` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLocation(value: EncounterHistoryLocationComponent | undefined): this {
    if (isDefined<EncounterHistoryLocationComponent>(value)) {
      const optErrMsg = `Invalid EncounterHistory.location; Provided element is not an instance of EncounterHistoryLocationComponent.`;
      assertFhirType<EncounterHistoryLocationComponent>(value, EncounterHistoryLocationComponent, optErrMsg);
      this.initLocation();
      this.location?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return isDefinedList<EncounterHistoryLocationComponent>(this.location) && this.location.some((item: EncounterHistoryLocationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `location` property
   */
  private initLocation(): void {
    if(!this.hasLocation()) {
      this.location = [] as EncounterHistoryLocationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EncounterHistory';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.encounter,
      this.identifier,
      this.status,
      this.class_,
      this.type_,
      this.serviceType,
      this.subject,
      this.subjectStatus,
      this.actualPeriod,
      this.plannedStartDate,
      this.plannedEndDate,
      this.length,
      this.location,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.class_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EncounterHistory {
    const dest = new EncounterHistory();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EncounterHistory): void {
    super.copyValues(dest);
    dest.encounter = this.encounter?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.class_ = this.class_ ? this.class_.copy() : null;
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    const serviceTypeList = copyListValues<CodeableReference>(this.serviceType);
    dest.serviceType = serviceTypeList.length === 0 ? undefined : serviceTypeList;
    dest.subject = this.subject?.copy();
    dest.subjectStatus = this.subjectStatus?.copy();
    dest.actualPeriod = this.actualPeriod?.copy();
    dest.plannedStartDate = this.plannedStartDate?.copy();
    dest.plannedEndDate = this.plannedEndDate?.copy();
    dest.length = this.length?.copy();
    const locationList = copyListValues<EncounterHistoryLocationComponent>(this.location);
    dest.location = locationList.length === 0 ? undefined : locationList;
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

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasClass()) {
      setFhirComplexJson(this.getClass(), 'class', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasServiceType()) {
      setFhirComplexListJson(this.getServiceType(), 'serviceType', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasSubjectStatus()) {
      setFhirComplexJson(this.getSubjectStatus(), 'subjectStatus', jsonObj);
    }

    if (this.hasActualPeriod()) {
      setFhirComplexJson(this.getActualPeriod(), 'actualPeriod', jsonObj);
    }

    if (this.hasPlannedStartDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getPlannedStartDateElement(), 'plannedStartDate', jsonObj);
    }

    if (this.hasPlannedEndDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getPlannedEndDateElement(), 'plannedEndDate', jsonObj);
    }

    if (this.hasLength()) {
      setFhirComplexJson(this.getLength(), 'length', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirBackboneElementListJson(this.getLocation(), 'location', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * EncounterHistoryLocationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Location of the patient at this point in the encounter
 * - **Definition:** The location of the patient at this point in the encounter, the multiple cardinality permits de-normalizing the levels of the location hierarchy, such as site/ward/room/bed.
 * - **Comment:** Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client\'s home" and an encounter.class = "virtual".
 *
 * @category Data Models: Resource
 * @see [FHIR EncounterHistory](http://hl7.org/fhir/StructureDefinition/EncounterHistory)
 */
export class EncounterHistoryLocationComponent extends BackboneElement implements IBackboneElement {
  constructor(location: Reference | null = null) {
    super();

    this.location = null;
    if (isDefined<Reference>(location)) {
      this.setLocation(location);
    }
  }

  /**
   * Parse the provided `EncounterHistoryLocationComponent` JSON to instantiate the EncounterHistoryLocationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EncounterHistoryLocationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EncounterHistoryLocationComponent
   * @returns EncounterHistoryLocationComponent data model or undefined for `EncounterHistoryLocationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EncounterHistoryLocationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EncounterHistoryLocationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EncounterHistoryLocationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setLocation(null);
      } else {
        instance.setLocation(datatype);
      }
    } else {
      instance.setLocation(null);
    }

    fieldName = 'form';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setForm(datatype);
    }

    return instance;
  }

  /**
   * EncounterHistory.location.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Location the encounter takes place
   * - **Definition:** The location where the encounter takes place.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private location: Reference | null;

  /**
   * EncounterHistory.location.form Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The physical type of the location (usually the level in the location hierarchy - bed, room, ward, virtual etc.)
   * - **Definition:** This will be used to specify the required levels (bed/ward/room/etc.) desired to be recorded to simplify either messaging or query.
   * - **Comment:** This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query. There may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private form?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `location` property value as a Reference object if defined; else an empty Reference object
   */
  public getLocation(): Reference {
    return this.location ?? new Reference();
  }

  /**
   * Assigns the provided Location object value to the `location` property.
   *
   * @decorator `@ReferenceTargets('EncounterHistory.location.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EncounterHistory.location.location', [
    'Location',
  ])
  public setLocation(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.location = value;
    } else {
      this.location = null;
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
   * @returns the `form` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getForm(): CodeableConcept {
    return this.form ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Form object value to the `form` property.
   *
   * @param value - the `form` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setForm(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EncounterHistory.location.form; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.form = value;
    } else {
      this.form = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `form` property exists and has a value; `false` otherwise
   */
  public hasForm(): boolean {
    return isDefined<CodeableConcept>(this.form) && !this.form.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EncounterHistory.location';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.location,
      this.form,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.location, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EncounterHistoryLocationComponent {
    const dest = new EncounterHistoryLocationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EncounterHistoryLocationComponent): void {
    super.copyValues(dest);
    dest.location = this.location ? this.location.copy() : null;
    dest.form = this.form?.copy();
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

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasForm()) {
      setFhirComplexJson(this.getForm(), 'form', jsonObj);
    }

    return jsonObj;
  }
}
