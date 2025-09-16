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
 * Person Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Person
 * StructureDefinition.name: Person
 * StructureDefinition.description: Demographics and administrative information about a person independent of a specific health-related context.
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
  DateType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Address, Attachment, CodeableConcept, ContactPoint, HumanName, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { AdministrativeGenderEnum } from '../code-systems/AdministrativeGenderEnum';
import { IdentityAssuranceLevelEnum } from '../code-systems/IdentityAssuranceLevelEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Person Class
 *
 * @remarks
 * Demographics and administrative information about a person independent of a specific health-related context.
 *
 * Need to track persons potentially across multiple roles.
 *
 * **FHIR Specification**
 * - **Short:** A generic person record
 * - **Definition:** Demographics and administrative information about a person independent of a specific health-related context.
 * - **Comment:** The Person resource does justice to person registries that keep track of persons regardless of their role. The Person resource is also a primary resource to point to for people acting in a particular role such as SubjectofCare, Practitioner, and Agent. Very few attributes are specific to any role and so Person is kept lean. Most attributes are expected to be tied to the role the Person plays rather than the Person himself. Examples of that are Guardian (SubjectofCare), ContactParty (SubjectOfCare, Practitioner), and multipleBirthInd (SubjectofCare).
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Person](http://hl7.org/fhir/StructureDefinition/Person)
 */
export class Person extends DomainResource implements IDomainResource {
  constructor() {
    super();

    this.administrativeGenderEnum = new AdministrativeGenderEnum();
  }

  /**
   * Parse the provided `Person` JSON to instantiate the Person data model.
   *
   * @param sourceJson - JSON representing FHIR `Person`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Person
   * @returns Person data model or undefined for `Person`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Person | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Person';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Person();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Person');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = Person[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for Person`;
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: HumanName | undefined = HumanName.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addName(datatype);
          }
        });
      }
    }

    fieldName = 'telecom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactPoint | undefined = ContactPoint.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addTelecom(datatype);
          }
        });
      }
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

    fieldName = 'deceased[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const deceased: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDeceased(deceased);

    fieldName = 'address';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Address | undefined = Address.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAddress(datatype);
          }
        });
      }
    }

    fieldName = 'maritalStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMaritalStatus(datatype);
    }

    fieldName = 'photo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Attachment | undefined = Attachment.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPhoto(datatype);
          }
        });
      }
    }

    fieldName = 'communication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: PersonCommunicationComponent | undefined = PersonCommunicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCommunication(component);
          }
        });
      }
    }

    fieldName = 'managingOrganization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setManagingOrganization(datatype);
    }

    fieldName = 'link';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: PersonLinkComponent | undefined = PersonLinkComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addLink(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Person.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A human identifier for this person
   * - **Definition:** Identifier for a person within a particular scope.
   * - **Requirements:** People are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the person. Examples are national person identifier and local identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Person.active Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** This person\'s record is in active use
   * - **Definition:** Whether this person\'s record is in active use.
   * - **Requirements:** Need to be able to mark a person record as not to be used because it was created in error.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that can indicate that a record should not be treated as valid
   * - **isSummary:** true
   */
  private active?: BooleanType | undefined;

  /**
   * Person.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A name associated with the person
   * - **Definition:** A name associated with the person.
   * - **Comment:** Person may have multiple names with different uses or applicable periods.
   * - **Requirements:** Need to be able to track the person by multiple names. Examples are your official name and a partner name.
   * - **FHIR Type:** `HumanName`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: HumanName[] | undefined;

  /**
   * Person.telecom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A contact detail for the person
   * - **Definition:** A contact detail for the person, e.g. a telephone number or an email address.
   * - **Comment:** Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
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
   * Person.gender Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** male | female | other | unknown
   * - **Definition:** Administrative Gender.
   * - **Comment:** The gender might not match the biological sex as determined by genetics, or the individual\'s preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
   * - **Requirements:** Needed for identification of the person, in combination with (at least) name and birth date. Gender of person drives many clinical processes.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  private gender?: EnumCodeType | undefined;

  /**
   * Person.birthDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date on which the person was born
   * - **Definition:** The birth date for the person.
   * - **Comment:** At least an estimated year should be provided as a guess if the real DOB is unknown.
   * - **Requirements:** Age of person drives many clinical processes, and is often used in performing identification of the person. Times are not included so as to not confuse things with potential timezone issues.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private birthDate?: DateType | undefined;

  /**
   * Person.deceased[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Person.deceased[x]', ['boolean','dateTime',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates if the individual is deceased or not
   * - **Definition:** Indicates if the individual is deceased or not.
   * - **Comment:** If there\'s no value in the instance, it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
   * - **FHIR Types:**
   *     'boolean',
   *     'dateTime',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Person.deceased[x]',[
    'boolean',
    'dateTime',
  ])
  private deceased?: IDataType | undefined;

  /**
   * Person.address Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** One or more addresses for the person
   * - **Definition:** One or more addresses for the person.
   * - **Comment:** Person may have multiple addresses with different uses or applicable periods.
   * - **Requirements:** May need to keep track of person\'s addresses for contacting, billing or reporting requirements and also to help with identification.
   * - **FHIR Type:** `Address`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private address?: Address[] | undefined;

  /**
   * Person.maritalStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Marital (civil) status of a person
   * - **Definition:** This field contains a person\'s most recent marital (civil) status.
   * - **Comment:** Many countries maintain a register of births, deaths and marriages, and this would simplify that interaction
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private maritalStatus?: CodeableConcept | undefined;

  /**
   * Person.photo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Image of the person
   * - **Definition:** An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private photo?: Attachment[] | undefined;

  /**
   * Person.communication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A language which may be used to communicate with the person about his or her health
   * - **Definition:** A language which may be used to communicate with the person about his or her health.
   * - **Comment:** If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Person.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required. Note that this property should not be used to update any linked/logically linked practitioner resources as it serves as a language that can be used to communicate with patients - however it may be used to inform the value on practitioner, along with their role at the organization (with the practitioner\'s permission)
   * - **Requirements:** If a person does not speak the local language, interpreters may be required, so languages spoken and proficiency are important things to keep track of both for person and other persons of interest.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private communication?: PersonCommunicationComponent[] | undefined;

  /**
   * Person.managingOrganization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The organization that is the custodian of the person record
   * - **Definition:** The organization that is the custodian of the person record.
   * - **Requirements:** Need to know who recognizes this person record, manages and updates it.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private managingOrganization?: Reference | undefined;

  /**
   * Person.link Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Link to a resource that concerns the same actual person
   * - **Definition:** Link to a resource that concerns the same actual person.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private link?: PersonLinkComponent[] | undefined;

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
      const optErrMsg = `Invalid Person.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Person.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Person.active; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid Person.active (${String(value)})`;
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
      const optErrMsg = `Invalid Person.name; Provided value array has an element that is not an instance of HumanName.`;
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
      const optErrMsg = `Invalid Person.name; Provided element is not an instance of HumanName.`;
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
      const optErrMsg = `Invalid Person.telecom; Provided value array has an element that is not an instance of ContactPoint.`;
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
      const optErrMsg = `Invalid Person.telecom; Provided element is not an instance of ContactPoint.`;
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
      const errMsgPrefix = 'Invalid Person.gender';
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
      const optErrMsg = `Invalid Person.gender; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid Person.gender; Provided value is not an instance of fhirCode.`;
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
      const optErrMsg = `Invalid Person.birthDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid Person.birthDate (${String(value)})`;
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
   * @returns the `deceased` property value as a DataType object if defined; else undefined
   */
  public getDeceased(): IDataType | undefined {
    return this.deceased;
  }

  /**
   * Assigns the provided DataType object value to the `deceased` property.
   *
   * @decorator `@ChoiceDataTypes('Person.deceased[x]')`
   *
   * @param value - the `deceased` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Person.deceased[x]')
  public setDeceased(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.deceased = value;
    } else {
      this.deceased = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `deceased` property exists and has a value; `false` otherwise
   */
  public hasDeceased(): boolean {
    return isDefined<IDataType>(this.deceased) && !this.deceased.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `deceased` property value as a BooleanType object if defined; else undefined
   */
  public getDeceasedBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.deceased)) {
      return undefined;
    }
    if (!(this.deceased instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Person.deceased[x]: Expected BooleanType but encountered ${this.deceased.fhirType()}`,
      );
    }
    return this.deceased;
  }

  /**
   * @returns `true` if the `deceased` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasDeceasedBooleanType(): boolean {
    return this.hasDeceased() && this.deceased instanceof BooleanType;
  }

  /**
   * @returns the `deceased` property value as a DateTimeType object if defined; else undefined
   */
  public getDeceasedDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.deceased)) {
      return undefined;
    }
    if (!(this.deceased instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Person.deceased[x]: Expected DateTimeType but encountered ${this.deceased.fhirType()}`,
      );
    }
    return this.deceased;
  }

  /**
   * @returns `true` if the `deceased` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasDeceasedDateTimeType(): boolean {
    return this.hasDeceased() && this.deceased instanceof DateTimeType;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid Person.address; Provided value array has an element that is not an instance of Address.`;
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
      const optErrMsg = `Invalid Person.address; Provided element is not an instance of Address.`;
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
   * @returns the `maritalStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMaritalStatus(): CodeableConcept {
    return this.maritalStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided MaritalStatus object value to the `maritalStatus` property.
   *
   * @param value - the `maritalStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaritalStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Person.maritalStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.maritalStatus = value;
    } else {
      this.maritalStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maritalStatus` property exists and has a value; `false` otherwise
   */
  public hasMaritalStatus(): boolean {
    return isDefined<CodeableConcept>(this.maritalStatus) && !this.maritalStatus.isEmpty();
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
      const optErrMsg = `Invalid Person.photo; Provided value array has an element that is not an instance of Attachment.`;
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
      const optErrMsg = `Invalid Person.photo; Provided element is not an instance of Attachment.`;
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
   * @returns the `communication` property value as a PersonCommunicationComponent array
   */
  public getCommunication(): PersonCommunicationComponent[] {
    return this.communication ?? ([] as PersonCommunicationComponent[]);
  }

  /**
   * Assigns the provided PersonCommunicationComponent array value to the `communication` property.
   *
   * @param value - the `communication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCommunication(value: PersonCommunicationComponent[] | undefined): this {
    if (isDefinedList<PersonCommunicationComponent>(value)) {
      const optErrMsg = `Invalid Person.communication; Provided value array has an element that is not an instance of PersonCommunicationComponent.`;
      assertFhirTypeList<PersonCommunicationComponent>(value, PersonCommunicationComponent, optErrMsg);
      this.communication = value;
    } else {
      this.communication = undefined;
    }
    return this;
  }

  /**
   * Add the provided PersonCommunicationComponent value to the `communication` array property.
   *
   * @param value - the `communication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCommunication(value: PersonCommunicationComponent | undefined): this {
    if (isDefined<PersonCommunicationComponent>(value)) {
      const optErrMsg = `Invalid Person.communication; Provided element is not an instance of PersonCommunicationComponent.`;
      assertFhirType<PersonCommunicationComponent>(value, PersonCommunicationComponent, optErrMsg);
      this.initCommunication();
      this.communication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `communication` property exists and has a value; `false` otherwise
   */
  public hasCommunication(): boolean {
    return isDefinedList<PersonCommunicationComponent>(this.communication) && this.communication.some((item: PersonCommunicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `communication` property
   */
  private initCommunication(): void {
    if(!this.hasCommunication()) {
      this.communication = [] as PersonCommunicationComponent[];
    }
  }

  /**
   * @returns the `managingOrganization` property value as a Reference object; else an empty Reference object
   */
  public getManagingOrganization(): Reference {
    return this.managingOrganization ?? new Reference();
  }

  /**
   * Assigns the provided ManagingOrganization object value to the `managingOrganization` property.
   *
   * @decorator `@ReferenceTargets('Person.managingOrganization', ['Organization',])`
   *
   * @param value - the `managingOrganization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Person.managingOrganization', [
    'Organization',
  ])
  public setManagingOrganization(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.managingOrganization = value;
    } else {
      this.managingOrganization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `managingOrganization` property exists and has a value; `false` otherwise
   */
  public hasManagingOrganization(): boolean {
    return isDefined<Reference>(this.managingOrganization) && !this.managingOrganization.isEmpty();
  }

  /**
   * @returns the `link` property value as a PersonLinkComponent array
   */
  public getLink(): PersonLinkComponent[] {
    return this.link ?? ([] as PersonLinkComponent[]);
  }

  /**
   * Assigns the provided PersonLinkComponent array value to the `link` property.
   *
   * @param value - the `link` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLink(value: PersonLinkComponent[] | undefined): this {
    if (isDefinedList<PersonLinkComponent>(value)) {
      const optErrMsg = `Invalid Person.link; Provided value array has an element that is not an instance of PersonLinkComponent.`;
      assertFhirTypeList<PersonLinkComponent>(value, PersonLinkComponent, optErrMsg);
      this.link = value;
    } else {
      this.link = undefined;
    }
    return this;
  }

  /**
   * Add the provided PersonLinkComponent value to the `link` array property.
   *
   * @param value - the `link` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLink(value: PersonLinkComponent | undefined): this {
    if (isDefined<PersonLinkComponent>(value)) {
      const optErrMsg = `Invalid Person.link; Provided element is not an instance of PersonLinkComponent.`;
      assertFhirType<PersonLinkComponent>(value, PersonLinkComponent, optErrMsg);
      this.initLink();
      this.link?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `link` property exists and has a value; `false` otherwise
   */
  public hasLink(): boolean {
    return isDefinedList<PersonLinkComponent>(this.link) && this.link.some((item: PersonLinkComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `link` property
   */
  private initLink(): void {
    if(!this.hasLink()) {
      this.link = [] as PersonLinkComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Person';
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
      this.gender,
      this.birthDate,
      this.deceased,
      this.address,
      this.maritalStatus,
      this.photo,
      this.communication,
      this.managingOrganization,
      this.link,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Person {
    const dest = new Person();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Person): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.active = this.active?.copy();
    const nameList = copyListValues<HumanName>(this.name);
    dest.name = nameList.length === 0 ? undefined : nameList;
    const telecomList = copyListValues<ContactPoint>(this.telecom);
    dest.telecom = telecomList.length === 0 ? undefined : telecomList;
    dest.gender = this.gender?.copy();
    dest.birthDate = this.birthDate?.copy();
    dest.deceased = this.deceased?.copy() as IDataType;
    const addressList = copyListValues<Address>(this.address);
    dest.address = addressList.length === 0 ? undefined : addressList;
    dest.maritalStatus = this.maritalStatus?.copy();
    const photoList = copyListValues<Attachment>(this.photo);
    dest.photo = photoList.length === 0 ? undefined : photoList;
    const communicationList = copyListValues<PersonCommunicationComponent>(this.communication);
    dest.communication = communicationList.length === 0 ? undefined : communicationList;
    dest.managingOrganization = this.managingOrganization?.copy();
    const linkList = copyListValues<PersonLinkComponent>(this.link);
    dest.link = linkList.length === 0 ? undefined : linkList;
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

    if (this.hasGenderElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getGenderElement()!, 'gender', jsonObj);
    }

    if (this.hasBirthDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getBirthDateElement(), 'birthDate', jsonObj);
    }

    if (this.hasDeceased()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDeceased()!, 'deceased', jsonObj);
    }

    if (this.hasAddress()) {
      setFhirComplexListJson(this.getAddress(), 'address', jsonObj);
    }

    if (this.hasMaritalStatus()) {
      setFhirComplexJson(this.getMaritalStatus(), 'maritalStatus', jsonObj);
    }

    if (this.hasPhoto()) {
      setFhirComplexListJson(this.getPhoto(), 'photo', jsonObj);
    }

    if (this.hasCommunication()) {
      setFhirBackboneElementListJson(this.getCommunication(), 'communication', jsonObj);
    }

    if (this.hasManagingOrganization()) {
      setFhirComplexJson(this.getManagingOrganization(), 'managingOrganization', jsonObj);
    }

    if (this.hasLink()) {
      setFhirBackboneElementListJson(this.getLink(), 'link', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * PersonCommunicationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A language which may be used to communicate with the person about his or her health
 * - **Definition:** A language which may be used to communicate with the person about his or her health.
 * - **Comment:** If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Person.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required. Note that this property should not be used to update any linked/logically linked practitioner resources as it serves as a language that can be used to communicate with patients - however it may be used to inform the value on practitioner, along with their role at the organization (with the practitioner\'s permission)
 * - **Requirements:** If a person does not speak the local language, interpreters may be required, so languages spoken and proficiency are important things to keep track of both for person and other persons of interest.
 *
 * @category Data Models: Resource
 * @see [FHIR Person](http://hl7.org/fhir/StructureDefinition/Person)
 */
export class PersonCommunicationComponent extends BackboneElement implements IBackboneElement {
  constructor(language: CodeableConcept | null = null) {
    super();

    this.language = null;
    if (isDefined<CodeableConcept>(language)) {
      this.setLanguage(language);
    }
  }

  /**
   * Parse the provided `PersonCommunicationComponent` JSON to instantiate the PersonCommunicationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PersonCommunicationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PersonCommunicationComponent
   * @returns PersonCommunicationComponent data model or undefined for `PersonCommunicationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PersonCommunicationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PersonCommunicationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PersonCommunicationComponent();

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
   * Person.communication.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The language which can be used to communicate with the person about his or her health
   * - **Definition:** The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-AU" for Australian English.
   * - **Comment:** The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   * - **Requirements:** Most systems in multilingual countries will want to convey language. Not all systems actually need the regional dialect.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private language: CodeableConcept | null;

  /**
   * Person.communication.preferred Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Language preference indicator
   * - **Definition:** Indicates whether or not the person prefers this language (over other languages he masters up a certain level).
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
      const optErrMsg = `Invalid Person.communication.language; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Person.communication.preferred; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid Person.communication.preferred (${String(value)})`;
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
    return 'Person.communication';
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
  public override copy(): PersonCommunicationComponent {
    const dest = new PersonCommunicationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PersonCommunicationComponent): void {
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
    }

    if (this.hasPreferredElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getPreferredElement(), 'preferred', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * PersonLinkComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Link to a resource that concerns the same actual person
 * - **Definition:** Link to a resource that concerns the same actual person.
 *
 * @category Data Models: Resource
 * @see [FHIR Person](http://hl7.org/fhir/StructureDefinition/Person)
 */
export class PersonLinkComponent extends BackboneElement implements IBackboneElement {
  constructor(target: Reference | null = null) {
    super();

    this.identityAssuranceLevelEnum = new IdentityAssuranceLevelEnum();

    this.target = null;
    if (isDefined<Reference>(target)) {
      this.setTarget(target);
    }
  }

  /**
   * Parse the provided `PersonLinkComponent` JSON to instantiate the PersonLinkComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PersonLinkComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PersonLinkComponent
   * @returns PersonLinkComponent data model or undefined for `PersonLinkComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PersonLinkComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PersonLinkComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PersonLinkComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setTarget(null);
      } else {
        instance.setTarget(datatype);
      }
    } else {
      instance.setTarget(null);
    }

    fieldName = 'assurance';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setAssuranceElement(datatype);
    }

    return instance;
  }

  /**
   * Person.link.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The resource to which this actual person is associated
   * - **Definition:** The resource to which this actual person is associated.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Person',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private target: Reference | null;

  /**
   * FHIR CodeSystem: IdentityAssuranceLevel
   *
   * @see {@link IdentityAssuranceLevelEnum }
   */
  private readonly identityAssuranceLevelEnum: IdentityAssuranceLevelEnum;

  /**
   * Person.link.assurance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** level1 | level2 | level3 | level4
   * - **Definition:** Level of assurance that this link is associated with the target resource.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link IdentityAssuranceLevelEnum }
   */
  private assurance?: EnumCodeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `target` property value as a Reference object if defined; else an empty Reference object
   */
  public getTarget(): Reference {
    return this.target ?? new Reference();
  }

  /**
   * Assigns the provided Target object value to the `target` property.
   *
   * @decorator `@ReferenceTargets('Person.link.target', ['Patient','Practitioner','RelatedPerson','Person',])`
   *
   * @param value - the `target` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Person.link.target', [
    'Patient',
  
    'Practitioner',
  
    'RelatedPerson',
  
    'Person',
  ])
  public setTarget(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.target = value;
    } else {
      this.target = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return isDefined<Reference>(this.target) && !this.target.isEmpty();
  }

  /**
   * @returns the `assurance` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link IdentityAssuranceLevelEnum }
   */
  public getAssuranceEnumType(): EnumCodeType | undefined {
    return this.assurance;
  }

  /**
   * Assigns the provided EnumCodeType value to the `assurance` property.
   *
   * @param enumType - the `assurance` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link IdentityAssuranceLevelEnum }
   */
  public setAssuranceEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Person.link.assurance';
      assertEnumCodeType<IdentityAssuranceLevelEnum>(enumType, IdentityAssuranceLevelEnum, errMsgPrefix);
      this.assurance = enumType;
    } else {
      this.assurance = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assurance` property exists and has a value; `false` otherwise
   */
  public hasAssuranceEnumType(): boolean {
    return isDefined<EnumCodeType>(this.assurance) && !this.assurance.isEmpty() && this.assurance.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `assurance` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link IdentityAssuranceLevelEnum }
   */
  public getAssuranceElement(): CodeType | undefined {
    if (this.assurance === undefined) {
      return undefined;
    }
    return this.assurance as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `assurance` property.
   *
   * @param element - the `assurance` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link IdentityAssuranceLevelEnum }
   */
  public setAssuranceElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Person.link.assurance; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.assurance = new EnumCodeType(element, this.identityAssuranceLevelEnum);
    } else {
      this.assurance = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assurance` property exists and has a value; `false` otherwise
   */
  public hasAssuranceElement(): boolean {
    return this.hasAssuranceEnumType();
  }

  /**
   * @returns the `assurance` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link IdentityAssuranceLevelEnum }
   */
  public getAssurance(): fhirCode | undefined {
    if (this.assurance === undefined) {
      return undefined;
    }
    return this.assurance.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `assurance` property.
   *
   * @param value - the `assurance` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link IdentityAssuranceLevelEnum }
   */
  public setAssurance(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Person.link.assurance; Provided value is not an instance of fhirCode.`;
      this.assurance = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.identityAssuranceLevelEnum);
    } else {
      this.assurance = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assurance` property exists and has a value; `false` otherwise
   */
  public hasAssurance(): boolean {
    return this.hasAssuranceEnumType();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Person.link';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.target,
      this.assurance,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.target, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PersonLinkComponent {
    const dest = new PersonLinkComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PersonLinkComponent): void {
    super.copyValues(dest);
    dest.target = this.target ? this.target.copy() : null;
    dest.assurance = this.assurance?.copy();
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

    if (this.hasTarget()) {
      setFhirComplexJson(this.getTarget(), 'target', jsonObj);
    }

    if (this.hasAssuranceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getAssuranceElement()!, 'assurance', jsonObj);
    }

    return jsonObj;
  }
}
