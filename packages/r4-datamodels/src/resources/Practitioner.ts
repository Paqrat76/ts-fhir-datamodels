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
 * Practitioner Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Practitioner
 * StructureDefinition.name: Practitioner
 * StructureDefinition.description: A person who is directly or indirectly involved in the provisioning of healthcare.
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
 * Practitioner Class
 *
 * @remarks
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 *
 * Need to track doctors, staff, locums etc. for both healthcare practitioners, funders, etc.
 *
 * **FHIR Specification**
 * - **Short:** A person with a  formal responsibility in the provisioning of healthcare or related services
 * - **Definition:** A person who is directly or indirectly involved in the provisioning of healthcare.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR Practitioner](http://hl7.org/fhir/StructureDefinition/Practitioner)
 */
export class Practitioner extends DomainResource implements IDomainResource {
  constructor() {
    super();

    this.administrativeGenderEnum = new AdministrativeGenderEnum();
  }

  /**
   * Parse the provided `Practitioner` JSON to instantiate the Practitioner data model.
   *
   * @param sourceJson - JSON representing FHIR `Practitioner`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Practitioner
   * @returns Practitioner data model or undefined for `Practitioner`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Practitioner | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Practitioner';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Practitioner();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Practitioner');
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

    fieldName = 'qualification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PractitionerQualificationComponent | undefined = PractitionerQualificationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addQualification(component);
        }
      });
    }

    fieldName = 'communication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCommunication(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * Practitioner.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An identifier for the person as this agent
   * - **Definition:** An identifier that applies to this person in this role.
   * - **Requirements:** Often, specific identities are assigned for the agent.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Practitioner.active Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether this practitioner\'s record is in active use
   * - **Definition:** Whether this practitioner\'s record is in active use.
   * - **Comment:** If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
   * - **Requirements:** Need to be able to mark a practitioner record as not to be used because it was created in error.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private active?: BooleanType | undefined;

  /**
   * Practitioner.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name(s) associated with the practitioner
   * - **Definition:** The name(s) associated with the practitioner.
   * - **Comment:** The selection of the use property should ensure that there is a single usual name specified, and others use the nickname (alias), old, or other values as appropriate.   In general, select the value to be used in the ResourceReference.display based on this: 1. There is more than 1 name 2. Use = usual 3. Period is current to the date of the usage 4. Use = official 5. Other order as decided by internal business rules.
   * - **Requirements:** The name(s) that a Practitioner is known by. Where there are multiple, the name that the practitioner is usually known as should be used in the display.
   * - **FHIR Type:** `HumanName`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: HumanName[] | undefined;

  /**
   * Practitioner.telecom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A contact detail for the practitioner (that apply to all roles)
   * - **Definition:** A contact detail for the practitioner, e.g. a telephone number or an email address.
   * - **Comment:** Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
   * - **Requirements:** Need to know how to reach a practitioner independent to any roles the practitioner may have.
   * - **FHIR Type:** `ContactPoint`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private telecom?: ContactPoint[] | undefined;

  /**
   * Practitioner.address Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Address(es) of the practitioner that are not role specific (typically home address)
   * - **Definition:** Address(es) of the practitioner that are not role specific (typically home address).  Work addresses are not typically entered in this property as they are usually role dependent.
   * - **Comment:** The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
   * - **Requirements:** The home/mailing address of the practitioner is often required for employee administration purposes, and also for some rostering services where the start point (practitioners home) can be used in calculations.
   * - **FHIR Type:** `Address`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private address?: Address[] | undefined;

  /**
   * FHIR CodeSystem: AdministrativeGender
   *
   * @see {@link AdministrativeGenderEnum }
   */
  private readonly administrativeGenderEnum: AdministrativeGenderEnum;

  /**
   * Practitioner.gender Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** male | female | other | unknown
   * - **Definition:** Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   * - **Requirements:** Needed to address the person correctly.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  private gender?: EnumCodeType | undefined;

  /**
   * Practitioner.birthDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date  on which the practitioner was born
   * - **Definition:** The date of birth for the practitioner.
   * - **Requirements:** Needed for identification.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private birthDate?: DateType | undefined;

  /**
   * Practitioner.photo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Image of the person
   * - **Definition:** Image of the person.
   * - **Requirements:** Many EHR systems have the capability to capture an image of patients and personnel. Fits with newer social media usage too.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private photo?: Attachment[] | undefined;

  /**
   * Practitioner.qualification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Certification, licenses, or training pertaining to the provision of care
   * - **Definition:** The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private qualification?: PractitionerQualificationComponent[] | undefined;

  /**
   * Practitioner.communication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A language the practitioner can use in patient communication
   * - **Definition:** A language the practitioner can use in patient communication.
   * - **Comment:** The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   * - **Requirements:** Knowing which language a practitioner speaks can help in facilitating communication with patients.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private communication?: CodeableConcept[] | undefined;

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
      const optErrMsg = `Invalid Practitioner.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Practitioner.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Practitioner.active; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid Practitioner.active (${String(value)})`;
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
      const optErrMsg = `Invalid Practitioner.name; Provided value array has an element that is not an instance of HumanName.`;
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
      const optErrMsg = `Invalid Practitioner.name; Provided element is not an instance of HumanName.`;
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
      const optErrMsg = `Invalid Practitioner.telecom; Provided value array has an element that is not an instance of ContactPoint.`;
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
      const optErrMsg = `Invalid Practitioner.telecom; Provided element is not an instance of ContactPoint.`;
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
      const optErrMsg = `Invalid Practitioner.address; Provided value array has an element that is not an instance of Address.`;
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
      const optErrMsg = `Invalid Practitioner.address; Provided element is not an instance of Address.`;
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
      const errMsgPrefix = 'Invalid Practitioner.gender';
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
      const optErrMsg = `Invalid Practitioner.gender; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid Practitioner.gender; Provided value is not an instance of fhirCode.`;
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
      const optErrMsg = `Invalid Practitioner.birthDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid Practitioner.birthDate (${String(value)})`;
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
      const optErrMsg = `Invalid Practitioner.photo; Provided value array has an element that is not an instance of Attachment.`;
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
      const optErrMsg = `Invalid Practitioner.photo; Provided element is not an instance of Attachment.`;
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
   * @returns the `qualification` property value as a PractitionerQualificationComponent array
   */
  public getQualification(): PractitionerQualificationComponent[] {
    return this.qualification ?? ([] as PractitionerQualificationComponent[]);
  }

  /**
   * Assigns the provided PractitionerQualificationComponent array value to the `qualification` property.
   *
   * @param value - the `qualification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQualification(value: PractitionerQualificationComponent[] | undefined): this {
    if (isDefinedList<PractitionerQualificationComponent>(value)) {
      const optErrMsg = `Invalid Practitioner.qualification; Provided value array has an element that is not an instance of PractitionerQualificationComponent.`;
      assertFhirTypeList<PractitionerQualificationComponent>(value, PractitionerQualificationComponent, optErrMsg);
      this.qualification = value;
    } else {
      this.qualification = undefined;
    }
    return this;
  }

  /**
   * Add the provided PractitionerQualificationComponent value to the `qualification` array property.
   *
   * @param value - the `qualification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addQualification(value: PractitionerQualificationComponent | undefined): this {
    if (isDefined<PractitionerQualificationComponent>(value)) {
      const optErrMsg = `Invalid Practitioner.qualification; Provided element is not an instance of PractitionerQualificationComponent.`;
      assertFhirType<PractitionerQualificationComponent>(value, PractitionerQualificationComponent, optErrMsg);
      this.initQualification();
      this.qualification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `qualification` property exists and has a value; `false` otherwise
   */
  public hasQualification(): boolean {
    return isDefinedList<PractitionerQualificationComponent>(this.qualification) && this.qualification.some((item: PractitionerQualificationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `qualification` property
   */
  private initQualification(): void {
    if(!this.hasQualification()) {
      this.qualification = [] as PractitionerQualificationComponent[];
    }
  }

  /**
   * @returns the `communication` property value as a CodeableConcept array
   */
  public getCommunication(): CodeableConcept[] {
    return this.communication ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `communication` property.
   *
   * @param value - the `communication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCommunication(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Practitioner.communication; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.communication = value;
    } else {
      this.communication = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `communication` array property.
   *
   * @param value - the `communication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCommunication(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Practitioner.communication; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCommunication();
      this.communication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `communication` property exists and has a value; `false` otherwise
   */
  public hasCommunication(): boolean {
    return isDefinedList<CodeableConcept>(this.communication) && this.communication.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `communication` property
   */
  private initCommunication(): void {
    if(!this.hasCommunication()) {
      this.communication = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Practitioner';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.active,
      this.name,
      this.telecom,
      this.address,
      this.gender,
      this.birthDate,
      this.photo,
      this.qualification,
      this.communication,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Practitioner {
    const dest = new Practitioner();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Practitioner): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.active = this.active?.copy();
    const nameList = copyListValues<HumanName>(this.name);
    dest.name = nameList.length === 0 ? undefined : nameList;
    const telecomList = copyListValues<ContactPoint>(this.telecom);
    dest.telecom = telecomList.length === 0 ? undefined : telecomList;
    const addressList = copyListValues<Address>(this.address);
    dest.address = addressList.length === 0 ? undefined : addressList;
    dest.gender = this.gender?.copy();
    dest.birthDate = this.birthDate?.copy();
    const photoList = copyListValues<Attachment>(this.photo);
    dest.photo = photoList.length === 0 ? undefined : photoList;
    const qualificationList = copyListValues<PractitionerQualificationComponent>(this.qualification);
    dest.qualification = qualificationList.length === 0 ? undefined : qualificationList;
    const communicationList = copyListValues<CodeableConcept>(this.communication);
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

    if (this.hasName()) {
      setFhirComplexListJson(this.getName(), 'name', jsonObj);
    }

    if (this.hasTelecom()) {
      setFhirComplexListJson(this.getTelecom(), 'telecom', jsonObj);
    }

    if (this.hasAddress()) {
      setFhirComplexListJson(this.getAddress(), 'address', jsonObj);
    }

    if (this.hasGenderElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getGenderElement()!, 'gender', jsonObj);
    }

    if (this.hasBirthDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getBirthDateElement(), 'birthDate', jsonObj);
    }

    if (this.hasPhoto()) {
      setFhirComplexListJson(this.getPhoto(), 'photo', jsonObj);
    }

    if (this.hasQualification()) {
      setFhirBackboneElementListJson(this.getQualification(), 'qualification', jsonObj);
    }

    if (this.hasCommunication()) {
      setFhirComplexListJson(this.getCommunication(), 'communication', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * PractitionerQualificationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Certification, licenses, or training pertaining to the provision of care
 * - **Definition:** The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 *
 * @category Data Models: Resource
 * @see [FHIR Practitioner](http://hl7.org/fhir/StructureDefinition/Practitioner)
 */
export class PractitionerQualificationComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `PractitionerQualificationComponent` JSON to instantiate the PractitionerQualificationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PractitionerQualificationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PractitionerQualificationComponent
   * @returns PractitionerQualificationComponent data model or undefined for `PractitionerQualificationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PractitionerQualificationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PractitionerQualificationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PractitionerQualificationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

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

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'issuer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIssuer(datatype);
    }

    return instance;
  }

  /**
   * Practitioner.qualification.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An identifier for this qualification for the practitioner
   * - **Definition:** An identifier that applies to this person\'s qualification in this role.
   * - **Requirements:** Often, specific identities are assigned for the qualification.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Practitioner.qualification.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coded representation of the qualification
   * - **Definition:** Coded representation of the qualification.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeableConcept | null;

  /**
   * Practitioner.qualification.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Period during which the qualification is valid
   * - **Definition:** Period during which the qualification is valid.
   * - **Requirements:** Qualifications are often for a limited period of time, and can be revoked.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

  /**
   * Practitioner.qualification.issuer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization that regulates and issues the qualification
   * - **Definition:** Organization that regulates and issues the qualification.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private issuer?: Reference | undefined;

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
      const optErrMsg = `Invalid Practitioner.qualification.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Practitioner.qualification.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Practitioner.qualification.code; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Practitioner.qualification.period; Provided element is not an instance of Period.`;
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
   * @returns the `issuer` property value as a Reference object; else an empty Reference object
   */
  public getIssuer(): Reference {
    return this.issuer ?? new Reference();
  }

  /**
   * Assigns the provided Issuer object value to the `issuer` property.
   *
   * @decorator `@ReferenceTargets('Practitioner.qualification.issuer', ['Organization',])`
   *
   * @param value - the `issuer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Practitioner.qualification.issuer', [
    'Organization',
  ])
  public setIssuer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.issuer = value;
    } else {
      this.issuer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issuer` property exists and has a value; `false` otherwise
   */
  public hasIssuer(): boolean {
    return isDefined<Reference>(this.issuer) && !this.issuer.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Practitioner.qualification';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.code,
      this.period,
      this.issuer,
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
  public override copy(): PractitionerQualificationComponent {
    const dest = new PractitionerQualificationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PractitionerQualificationComponent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.code = this.code ? this.code.copy() : null;
    dest.period = this.period?.copy();
    dest.issuer = this.issuer?.copy();
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

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasIssuer()) {
      setFhirComplexJson(this.getIssuer(), 'issuer', jsonObj);
    }

    return jsonObj;
  }
}
