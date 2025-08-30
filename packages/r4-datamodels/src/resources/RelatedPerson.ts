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
 * RelatedPerson Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/RelatedPerson
 * StructureDefinition.name: RelatedPerson
 * StructureDefinition.description: Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  BooleanType,
  CodeType,
  DateType,
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
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDate,
  fhirDateSchema,
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
import { Address, Attachment, CodeableConcept, ContactPoint, HumanName, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { AdministrativeGenderEnum } from '../code-systems/AdministrativeGenderEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * RelatedPerson Class
 *
 * @remarks
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 *
 * Need to track persons related to the patient or the healthcare process.
 *
 * **FHIR Specification**
 * - **Short:** A person that is related to a patient, but who is not a direct target of care
 * - **Definition:** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR RelatedPerson](http://hl7.org/fhir/StructureDefinition/RelatedPerson)
 */
export class RelatedPerson extends DomainResource implements IDomainResource {
  constructor(patient: Reference | null = null) {
    super();

    this.administrativeGenderEnum = new AdministrativeGenderEnum();

    this.patient = null;
    if (isDefined<Reference>(patient)) {
      this.setPatient(patient);
    }
  }

  /**
   * Parse the provided `RelatedPerson` JSON to instantiate the RelatedPerson data model.
   *
   * @param sourceJson - JSON representing FHIR `RelatedPerson`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RelatedPerson
   * @returns RelatedPerson data model or undefined for `RelatedPerson`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): RelatedPerson | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RelatedPerson';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RelatedPerson();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'RelatedPerson');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'active';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setActiveElement(datatype);
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

    fieldName = 'relationship';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRelationship(datatype);
        }
      });
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: HumanName | undefined = HumanName.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addName(datatype);
        }
      });
    }

    fieldName = 'telecom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactPoint | undefined = ContactPoint.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTelecom(datatype);
        }
      });
    }

    fieldName = 'gender';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setGenderElement(datatype);
    }

    fieldName = 'birthDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setBirthDateElement(datatype);
    }

    fieldName = 'address';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Address | undefined = Address.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAddress(datatype);
        }
      });
    }

    fieldName = 'photo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Attachment | undefined = Attachment.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPhoto(datatype);
        }
      });
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'communication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RelatedPersonCommunicationComponent | undefined = RelatedPersonCommunicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCommunication(component);
        }
      });
    }

    return instance;
  }

  /**
   * RelatedPerson.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A human identifier for this person
   * - **Definition:** Identifier for a person within a particular scope.
   * - **Requirements:** People are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the patient. Examples are national person identifier and local identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * RelatedPerson.active Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether this related person\'s record is in active use
   * - **Definition:** Whether this related person record is in active use.
   * - **Comment:** This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   * - **Requirements:** Need to be able to mark a related person record as not to be used, such as if it was created in error.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that can indicate that a record should not be treated as valid
   * - **isSummary:** true
   */
  private active?: BooleanType | undefined;

  /**
   * RelatedPerson.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The patient this person is related to
   * - **Definition:** The patient this person is related to.
   * - **Requirements:** We need to know which patient this RelatedPerson is related to.
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
   * RelatedPerson.relationship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The nature of the relationship
   * - **Definition:** The nature of the relationship between a patient and the related person.
   * - **Requirements:** We need to know the relationship with the patient since it influences the interpretation of the information attributed to this person.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private relationship?: CodeableConcept[] | undefined;

  /**
   * RelatedPerson.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A name associated with the person
   * - **Definition:** A name associated with the person.
   * - **Requirements:** Related persons need to be identified by name, but it is uncommon to need details about multiple other names for that person.
   * - **FHIR Type:** `HumanName`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: HumanName[] | undefined;

  /**
   * RelatedPerson.telecom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A contact detail for the person
   * - **Definition:** A contact detail for the person, e.g. a telephone number or an email address.
   * - **Comment:** Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   * - **Requirements:** People have (primary) ways to contact them in some way such as phone, email.
   * - **FHIR Type:** `ContactPoint`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private telecom?: ContactPoint[] | undefined;

  /**
   * FHIR CodeSystem: AdministrativeGender
   *
   * @see {@link AdministrativeGenderEnum }
   */
  private readonly administrativeGenderEnum: AdministrativeGenderEnum;

  /**
   * RelatedPerson.gender Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** male | female | other | unknown
   * - **Definition:** Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   * - **Requirements:** Needed for identification of the person, in combination with (at least) name and birth date.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  private gender?: EnumCodeType | undefined;

  /**
   * RelatedPerson.birthDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date on which the related person was born
   * - **Definition:** The date on which the related person was born.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private birthDate?: DateType | undefined;

  /**
   * RelatedPerson.address Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Address where the related person can be contacted or visited
   * - **Definition:** Address where the related person can be contacted or visited.
   * - **Requirements:** Need to keep track where the related person can be contacted per postal mail or visited.
   * - **FHIR Type:** `Address`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private address?: Address[] | undefined;

  /**
   * RelatedPerson.photo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Image of the person
   * - **Definition:** Image of the person.
   * - **Requirements:** Many EHR systems have the capability to capture an image of persons. Fits with newer social media usage too.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private photo?: Attachment[] | undefined;

  /**
   * RelatedPerson.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Period of time that this relationship is considered valid
   * - **Definition:** The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

  /**
   * RelatedPerson.communication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A language which may be used to communicate with about the patient\'s health
   * - **Definition:** A language which may be used to communicate with about the patient\'s health.
   * - **Comment:** If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   * - **Requirements:** If a related person does not speak the local language, interpreters may be required, so languages spoken and proficiency is an important things to keep track of both for patient and other persons of interest.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private communication?: RelatedPersonCommunicationComponent[] | undefined;

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
      const optErrMsg = `Invalid RelatedPerson.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid RelatedPerson.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `active` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getActiveElement(): BooleanType {
    return this.active ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `active` property.
   *
   * @param element - the `active` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActiveElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid RelatedPerson.active; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.active = element;
    } else {
      this.active = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `active` property exists and has a value; `false` otherwise
   */
  public hasActiveElement(): boolean {
    return isDefined<BooleanType>(this.active) && !this.active.isEmpty();
  }

  /**
   * @returns the `active` property value as a fhirBoolean if defined; else undefined
   */
  public getActive(): fhirBoolean | undefined {
    return this.active?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `active` property.
   *
   * @param value - the `active` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActive(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid RelatedPerson.active (${String(value)})`;
      this.active = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.active = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `active` property exists and has a value; `false` otherwise
   */
  public hasActive(): boolean {
    return this.hasActiveElement();
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
   * @decorator `@ReferenceTargets('RelatedPerson.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RelatedPerson.patient', [
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
   * @returns the `relationship` property value as a CodeableConcept array
   */
  public getRelationship(): CodeableConcept[] {
    return this.relationship ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `relationship` property.
   *
   * @param value - the `relationship` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelationship(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RelatedPerson.relationship; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.relationship = value;
    } else {
      this.relationship = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `relationship` array property.
   *
   * @param value - the `relationship` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelationship(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RelatedPerson.relationship; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initRelationship();
      this.relationship?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relationship` property exists and has a value; `false` otherwise
   */
  public hasRelationship(): boolean {
    return isDefinedList<CodeableConcept>(this.relationship) && this.relationship.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `relationship` property
   */
  private initRelationship(): void {
    if(!this.hasRelationship()) {
      this.relationship = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `name` property value as a HumanName array
   */
  public getName(): HumanName[] {
    return this.name ?? ([] as HumanName[]);
  }

  /**
   * Assigns the provided HumanName array value to the `name` property.
   *
   * @param value - the `name` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setName(value: HumanName[] | undefined): this {
    if (isDefinedList<HumanName>(value)) {
      const optErrMsg = `Invalid RelatedPerson.name; Provided value array has an element that is not an instance of HumanName.`;
      assertFhirTypeList<HumanName>(value, HumanName, optErrMsg);
      this.name = value;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * Add the provided HumanName value to the `name` array property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addName(value: HumanName | undefined): this {
    if (isDefined<HumanName>(value)) {
      const optErrMsg = `Invalid RelatedPerson.name; Provided element is not an instance of HumanName.`;
      assertFhirType<HumanName>(value, HumanName, optErrMsg);
      this.initName();
      this.name?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return isDefinedList<HumanName>(this.name) && this.name.some((item: HumanName) => !item.isEmpty());
  }

  /**
   * Initialize the `name` property
   */
  private initName(): void {
    if(!this.hasName()) {
      this.name = [] as HumanName[];
    }
  }

  /**
   * @returns the `telecom` property value as a ContactPoint array
   */
  public getTelecom(): ContactPoint[] {
    return this.telecom ?? ([] as ContactPoint[]);
  }

  /**
   * Assigns the provided ContactPoint array value to the `telecom` property.
   *
   * @param value - the `telecom` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTelecom(value: ContactPoint[] | undefined): this {
    if (isDefinedList<ContactPoint>(value)) {
      const optErrMsg = `Invalid RelatedPerson.telecom; Provided value array has an element that is not an instance of ContactPoint.`;
      assertFhirTypeList<ContactPoint>(value, ContactPoint, optErrMsg);
      this.telecom = value;
    } else {
      this.telecom = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactPoint value to the `telecom` array property.
   *
   * @param value - the `telecom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTelecom(value: ContactPoint | undefined): this {
    if (isDefined<ContactPoint>(value)) {
      const optErrMsg = `Invalid RelatedPerson.telecom; Provided element is not an instance of ContactPoint.`;
      assertFhirType<ContactPoint>(value, ContactPoint, optErrMsg);
      this.initTelecom();
      this.telecom?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `telecom` property exists and has a value; `false` otherwise
   */
  public hasTelecom(): boolean {
    return isDefinedList<ContactPoint>(this.telecom) && this.telecom.some((item: ContactPoint) => !item.isEmpty());
  }

  /**
   * Initialize the `telecom` property
   */
  private initTelecom(): void {
    if(!this.hasTelecom()) {
      this.telecom = [] as ContactPoint[];
    }
  }

  /**
   * @returns the `gender` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  public getGenderEnumType(): EnumCodeType | undefined {
    return this.gender;
  }

  /**
   * Assigns the provided EnumCodeType value to the `gender` property.
   *
   * @param enumType - the `gender` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  public setGenderEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid RelatedPerson.gender';
      assertEnumCodeType<AdministrativeGenderEnum>(enumType, AdministrativeGenderEnum, errMsgPrefix);
      this.gender = enumType;
    } else {
      this.gender = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `gender` property exists and has a value; `false` otherwise
   */
  public hasGenderEnumType(): boolean {
    return isDefined<EnumCodeType>(this.gender) && !this.gender.isEmpty() && this.gender.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `gender` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  public getGenderElement(): CodeType | undefined {
    if (this.gender === undefined) {
      return undefined;
    }
    return this.gender as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `gender` property.
   *
   * @param element - the `gender` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  public setGenderElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid RelatedPerson.gender; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.gender = new EnumCodeType(element, this.administrativeGenderEnum);
    } else {
      this.gender = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `gender` property exists and has a value; `false` otherwise
   */
  public hasGenderElement(): boolean {
    return this.hasGenderEnumType();
  }

  /**
   * @returns the `gender` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  public getGender(): fhirCode | undefined {
    if (this.gender === undefined) {
      return undefined;
    }
    return this.gender.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `gender` property.
   *
   * @param value - the `gender` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  public setGender(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid RelatedPerson.gender; Provided value is not an instance of fhirCode.`;
      this.gender = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.administrativeGenderEnum);
    } else {
      this.gender = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `gender` property exists and has a value; `false` otherwise
   */
  public hasGender(): boolean {
    return this.hasGenderEnumType();
  }

  /**
   * @returns the `birthDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getBirthDateElement(): DateType {
    return this.birthDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `birthDate` property.
   *
   * @param element - the `birthDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBirthDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid RelatedPerson.birthDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.birthDate = element;
    } else {
      this.birthDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `birthDate` property exists and has a value; `false` otherwise
   */
  public hasBirthDateElement(): boolean {
    return isDefined<DateType>(this.birthDate) && !this.birthDate.isEmpty();
  }

  /**
   * @returns the `birthDate` property value as a fhirDate if defined; else undefined
   */
  public getBirthDate(): fhirDate | undefined {
    return this.birthDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `birthDate` property.
   *
   * @param value - the `birthDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBirthDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid RelatedPerson.birthDate (${String(value)})`;
      this.birthDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.birthDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `birthDate` property exists and has a value; `false` otherwise
   */
  public hasBirthDate(): boolean {
    return this.hasBirthDateElement();
  }

  /**
   * @returns the `address` property value as a Address array
   */
  public getAddress(): Address[] {
    return this.address ?? ([] as Address[]);
  }

  /**
   * Assigns the provided Address array value to the `address` property.
   *
   * @param value - the `address` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAddress(value: Address[] | undefined): this {
    if (isDefinedList<Address>(value)) {
      const optErrMsg = `Invalid RelatedPerson.address; Provided value array has an element that is not an instance of Address.`;
      assertFhirTypeList<Address>(value, Address, optErrMsg);
      this.address = value;
    } else {
      this.address = undefined;
    }
    return this;
  }

  /**
   * Add the provided Address value to the `address` array property.
   *
   * @param value - the `address` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAddress(value: Address | undefined): this {
    if (isDefined<Address>(value)) {
      const optErrMsg = `Invalid RelatedPerson.address; Provided element is not an instance of Address.`;
      assertFhirType<Address>(value, Address, optErrMsg);
      this.initAddress();
      this.address?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `address` property exists and has a value; `false` otherwise
   */
  public hasAddress(): boolean {
    return isDefinedList<Address>(this.address) && this.address.some((item: Address) => !item.isEmpty());
  }

  /**
   * Initialize the `address` property
   */
  private initAddress(): void {
    if(!this.hasAddress()) {
      this.address = [] as Address[];
    }
  }

  /**
   * @returns the `photo` property value as a Attachment array
   */
  public getPhoto(): Attachment[] {
    return this.photo ?? ([] as Attachment[]);
  }

  /**
   * Assigns the provided Attachment array value to the `photo` property.
   *
   * @param value - the `photo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPhoto(value: Attachment[] | undefined): this {
    if (isDefinedList<Attachment>(value)) {
      const optErrMsg = `Invalid RelatedPerson.photo; Provided value array has an element that is not an instance of Attachment.`;
      assertFhirTypeList<Attachment>(value, Attachment, optErrMsg);
      this.photo = value;
    } else {
      this.photo = undefined;
    }
    return this;
  }

  /**
   * Add the provided Attachment value to the `photo` array property.
   *
   * @param value - the `photo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPhoto(value: Attachment | undefined): this {
    if (isDefined<Attachment>(value)) {
      const optErrMsg = `Invalid RelatedPerson.photo; Provided element is not an instance of Attachment.`;
      assertFhirType<Attachment>(value, Attachment, optErrMsg);
      this.initPhoto();
      this.photo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `photo` property exists and has a value; `false` otherwise
   */
  public hasPhoto(): boolean {
    return isDefinedList<Attachment>(this.photo) && this.photo.some((item: Attachment) => !item.isEmpty());
  }

  /**
   * Initialize the `photo` property
   */
  private initPhoto(): void {
    if(!this.hasPhoto()) {
      this.photo = [] as Attachment[];
    }
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
      const optErrMsg = `Invalid RelatedPerson.period; Provided element is not an instance of Period.`;
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
   * @returns the `communication` property value as a RelatedPersonCommunicationComponent array
   */
  public getCommunication(): RelatedPersonCommunicationComponent[] {
    return this.communication ?? ([] as RelatedPersonCommunicationComponent[]);
  }

  /**
   * Assigns the provided RelatedPersonCommunicationComponent array value to the `communication` property.
   *
   * @param value - the `communication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCommunication(value: RelatedPersonCommunicationComponent[] | undefined): this {
    if (isDefinedList<RelatedPersonCommunicationComponent>(value)) {
      const optErrMsg = `Invalid RelatedPerson.communication; Provided value array has an element that is not an instance of RelatedPersonCommunicationComponent.`;
      assertFhirTypeList<RelatedPersonCommunicationComponent>(value, RelatedPersonCommunicationComponent, optErrMsg);
      this.communication = value;
    } else {
      this.communication = undefined;
    }
    return this;
  }

  /**
   * Add the provided RelatedPersonCommunicationComponent value to the `communication` array property.
   *
   * @param value - the `communication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCommunication(value: RelatedPersonCommunicationComponent | undefined): this {
    if (isDefined<RelatedPersonCommunicationComponent>(value)) {
      const optErrMsg = `Invalid RelatedPerson.communication; Provided element is not an instance of RelatedPersonCommunicationComponent.`;
      assertFhirType<RelatedPersonCommunicationComponent>(value, RelatedPersonCommunicationComponent, optErrMsg);
      this.initCommunication();
      this.communication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `communication` property exists and has a value; `false` otherwise
   */
  public hasCommunication(): boolean {
    return isDefinedList<RelatedPersonCommunicationComponent>(this.communication) && this.communication.some((item: RelatedPersonCommunicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `communication` property
   */
  private initCommunication(): void {
    if(!this.hasCommunication()) {
      this.communication = [] as RelatedPersonCommunicationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RelatedPerson';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.active,
      this.patient,
      this.relationship,
      this.name,
      this.telecom,
      this.gender,
      this.birthDate,
      this.address,
      this.photo,
      this.period,
      this.communication,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.patient, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RelatedPerson {
    const dest = new RelatedPerson();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RelatedPerson): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.active = this.active?.copy();
    dest.patient = this.patient ? this.patient.copy() : null;
    const relationshipList = copyListValues<CodeableConcept>(this.relationship);
    dest.relationship = relationshipList.length === 0 ? undefined : relationshipList;
    const nameList = copyListValues<HumanName>(this.name);
    dest.name = nameList.length === 0 ? undefined : nameList;
    const telecomList = copyListValues<ContactPoint>(this.telecom);
    dest.telecom = telecomList.length === 0 ? undefined : telecomList;
    dest.gender = this.gender?.copy();
    dest.birthDate = this.birthDate?.copy();
    const addressList = copyListValues<Address>(this.address);
    dest.address = addressList.length === 0 ? undefined : addressList;
    const photoList = copyListValues<Attachment>(this.photo);
    dest.photo = photoList.length === 0 ? undefined : photoList;
    dest.period = this.period?.copy();
    const communicationList = copyListValues<RelatedPersonCommunicationComponent>(this.communication);
    dest.communication = communicationList.length === 0 ? undefined : communicationList;
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

    if (this.hasActiveElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getActiveElement(), 'active', jsonObj);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    } else {
      jsonObj['patient'] = null;
    }

    if (this.hasRelationship()) {
      setFhirComplexListJson(this.getRelationship(), 'relationship', jsonObj);
    }

    if (this.hasName()) {
      setFhirComplexListJson(this.getName(), 'name', jsonObj);
    }

    if (this.hasTelecom()) {
      setFhirComplexListJson(this.getTelecom(), 'telecom', jsonObj);
    }

    if (this.hasGenderElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getGenderElement()!, 'gender', jsonObj);
    }

    if (this.hasBirthDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getBirthDateElement(), 'birthDate', jsonObj);
    }

    if (this.hasAddress()) {
      setFhirComplexListJson(this.getAddress(), 'address', jsonObj);
    }

    if (this.hasPhoto()) {
      setFhirComplexListJson(this.getPhoto(), 'photo', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasCommunication()) {
      setFhirBackboneElementListJson(this.getCommunication(), 'communication', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * RelatedPersonCommunicationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A language which may be used to communicate with about the patient\'s health
 * - **Definition:** A language which may be used to communicate with about the patient\'s health.
 * - **Comment:** If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 * - **Requirements:** If a related person does not speak the local language, interpreters may be required, so languages spoken and proficiency is an important things to keep track of both for patient and other persons of interest.
 *
 * @category Data Models: Resource
 * @see [FHIR RelatedPerson](http://hl7.org/fhir/StructureDefinition/RelatedPerson)
 */
export class RelatedPersonCommunicationComponent extends BackboneElement implements IBackboneElement {
  constructor(language: CodeableConcept | null = null) {
    super();

    this.language = null;
    if (isDefined<CodeableConcept>(language)) {
      this.setLanguage(language);
    }
  }

  /**
   * Parse the provided `RelatedPersonCommunicationComponent` JSON to instantiate the RelatedPersonCommunicationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RelatedPersonCommunicationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RelatedPersonCommunicationComponent
   * @returns RelatedPersonCommunicationComponent data model or undefined for `RelatedPersonCommunicationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RelatedPersonCommunicationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RelatedPersonCommunicationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RelatedPersonCommunicationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setLanguage(null);
      } else {
        instance.setLanguage(datatype);
      }
    } else {
      instance.setLanguage(null);
    }

    fieldName = 'preferred';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setPreferredElement(datatype);
    }

    return instance;
  }

  /**
   * RelatedPerson.communication.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The language which can be used to communicate with the patient about his or her health
   * - **Definition:** The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
   * - **Comment:** The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   * - **Requirements:** Most systems in multilingual countries will want to convey language. Not all systems actually need the regional dialect.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private language: CodeableConcept | null;

  /**
   * RelatedPerson.communication.preferred Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Language preference indicator
   * - **Definition:** Indicates whether or not the patient prefers this language (over other languages he masters up a certain level).
   * - **Comment:** This language is specifically identified for communicating healthcare information.
   * - **Requirements:** People that master multiple languages up to certain level may prefer one or more, i.e. feel more confident in communicating in a particular language making other languages sort of a fall back method.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preferred?: BooleanType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `language` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getLanguage(): CodeableConcept {
    return this.language ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `language` property.
   *
   * @param value - the `language` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLanguage(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RelatedPerson.communication.language; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.language = value;
    } else {
      this.language = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguage(): boolean {
    return isDefined<CodeableConcept>(this.language) && !this.language.isEmpty();
  }

  /**
   * @returns the `preferred` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getPreferredElement(): BooleanType {
    return this.preferred ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `preferred` property.
   *
   * @param element - the `preferred` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreferredElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid RelatedPerson.communication.preferred; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.preferred = element;
    } else {
      this.preferred = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preferred` property exists and has a value; `false` otherwise
   */
  public hasPreferredElement(): boolean {
    return isDefined<BooleanType>(this.preferred) && !this.preferred.isEmpty();
  }

  /**
   * @returns the `preferred` property value as a fhirBoolean if defined; else undefined
   */
  public getPreferred(): fhirBoolean | undefined {
    return this.preferred?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `preferred` property.
   *
   * @param value - the `preferred` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreferred(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid RelatedPerson.communication.preferred (${String(value)})`;
      this.preferred = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.preferred = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preferred` property exists and has a value; `false` otherwise
   */
  public hasPreferred(): boolean {
    return this.hasPreferredElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RelatedPerson.communication';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.language,
      this.preferred,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.language, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RelatedPersonCommunicationComponent {
    const dest = new RelatedPersonCommunicationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RelatedPersonCommunicationComponent): void {
    super.copyValues(dest);
    dest.language = this.language ? this.language.copy() : null;
    dest.preferred = this.preferred?.copy();
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

    if (this.hasLanguage()) {
      setFhirComplexJson(this.getLanguage(), 'language', jsonObj);
    } else {
      jsonObj['language'] = null;
    }

    if (this.hasPreferredElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getPreferredElement(), 'preferred', jsonObj);
    }

    return jsonObj;
  }
}
