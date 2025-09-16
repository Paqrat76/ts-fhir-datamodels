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
 * Group Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Group
 * StructureDefinition.name: Group
 * StructureDefinition.description: Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn\'t an Organization.
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
  StringType,
  UnsignedIntType,
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
  fhirString,
  fhirStringSchema,
  fhirUnsignedInt,
  fhirUnsignedIntSchema,
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
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Range, Reference } from '../complex-types/complex-datatypes';
import { GroupTypeEnum } from '../code-systems/GroupTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Group Class
 *
 * @remarks
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn\'t an Organization.
 *
 * **FHIR Specification**
 * - **Short:** Group of multiple entities
 * - **Definition:** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn\'t an Organization.
 * - **Comment:** If both Group.characteristic and Group.member are present, then the members are the individuals who were found who met the characteristic.  It\'s possible that there might be other candidate members who meet the characteristic and aren\'t (yet) in the list.  All members SHALL have the listed characteristics.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR Group](http://hl7.org/fhir/StructureDefinition/Group)
 */
export class Group extends DomainResource implements IDomainResource {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null, actual: BooleanType | fhirBoolean | null = null) {
    super();

    this.groupTypeEnum = new GroupTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<GroupTypeEnum>(
      type_,
      GroupTypeEnum,
      this.groupTypeEnum,
      'Group.type',
    );

    this.actual = null;
    if (isDefined<BooleanType | fhirBoolean>(actual)) {
      if (actual instanceof PrimitiveType) {
        this.setActualElement(actual);
      } else {
        this.setActual(actual);
      }
    }
  }

  /**
   * Parse the provided `Group` JSON to instantiate the Group data model.
   *
   * @param sourceJson - JSON representing FHIR `Group`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Group
   * @returns Group data model or undefined for `Group`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Group | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Group';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Group();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Group');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'actual';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setActual(null);
      } else {
        instance.setActualElement(datatype);
      }
    } else {
      instance.setActual(null);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setQuantityElement(datatype);
    }

    fieldName = 'managingEntity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setManagingEntity(datatype);
    }

    fieldName = 'characteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: GroupCharacteristicComponent | undefined = GroupCharacteristicComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCharacteristic(component);
          }
        });
      }
    }

    fieldName = 'member';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: GroupMemberComponent | undefined = GroupMemberComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addMember(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Group.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique id
   * - **Definition:** A unique business identifier for this group.
   * - **Requirements:** Allows the group to be referenced from external specifications.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Group.active Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether this group\'s record is in active use
   * - **Definition:** Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
   * - **Requirements:** Need to be able to mark a group record as not to be used because it was created in error or is otherwise no longer available (e.g. a herd that no longer exists).
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private active?: BooleanType | undefined;

  /**
   * FHIR CodeSystem: GroupType
   *
   * @see {@link GroupTypeEnum }
   */
  private readonly groupTypeEnum: GroupTypeEnum;

  /**
   * Group.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** person | animal | practitioner | device | medication | substance
   * - **Definition:** Identifies the broad classification of the kind of resources the group includes.
   * - **Comment:** Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
   * - **Requirements:** Identifies what type of resources the group is made up of.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link GroupTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * Group.actual Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Descriptive or actual
   * - **Definition:** If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
   * - **Requirements:** There are use-cases for groups that define specific collections of individuals, and other groups that define "types" of intended individuals.  The requirements for both kinds of groups are similar, so we use a single resource, distinguished by this flag.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private actual: BooleanType | null;

  /**
   * Group.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of Group members
   * - **Definition:** Provides a specific type of resource the group includes; e.g. "cow", "syringe", etc.
   * - **Comment:** This would generally be omitted for Person resources.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * Group.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for Group
   * - **Definition:** A label assigned to the group for human identification and communication.
   * - **Requirements:** Used to identify the group in human communication.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * Group.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of members
   * - **Definition:** A count of the number of resource instances that are part of the group.
   * - **Comment:** Note that the quantity may be less than the number of members if some of the members are not active.
   * - **Requirements:** Group size is a common defining characteristic.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private quantity?: UnsignedIntType | undefined;

  /**
   * Group.managingEntity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Entity that is the custodian of the Group\'s definition
   * - **Definition:** Entity responsible for defining and maintaining Group characteristics and/or registered members.
   * - **Comment:** This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple cases. More complex cases will require an extension.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private managingEntity?: Reference | undefined;

  /**
   * Group.characteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Include / Exclude group members by Trait
   * - **Definition:** Identifies traits whose presence r absence is shared by members of the group.
   * - **Comment:** All the identified characteristics must be true for an entity to a member of the group.
   * - **Requirements:** Needs to be a generic mechanism for identifying what individuals can be part of a group.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private characteristic?: GroupCharacteristicComponent[] | undefined;

  /**
   * Group.member Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or what is in group
   * - **Definition:** Identifies the resource instances that are members of the group.
   * - **Requirements:** Often the only thing of interest about a group is "who\'s in it".
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private member?: GroupMemberComponent[] | undefined;

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
      const optErrMsg = `Invalid Group.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Group.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Group.active; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid Group.active (${String(value)})`;
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
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GroupTypeEnum }
   */
  public getTypeEnumType(): EnumCodeType | null {
    return this.type_;
  }

  /**
   * Assigns the provided EnumCodeType value to the `type_` property.
   *
   * @param enumType - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GroupTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Group.type`;
      assertEnumCodeType<GroupTypeEnum>(enumType, GroupTypeEnum, errMsgPrefix);
      this.type_ = enumType;
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.type_) && !this.type_.isEmpty() && this.type_.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `type_` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GroupTypeEnum }
   */
  public getTypeElement(): CodeType | null {
    if (this.type_ === null) {
      return null;
    }
    return this.type_ as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `type_` property.
   *
   * @param element - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GroupTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Group.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.groupTypeEnum);
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeElement(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `type_` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GroupTypeEnum }
   */
  public getType(): fhirCode | null {
    if (this.type_ === null) {
      return null;
    }
    return this.type_.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `type_` property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link GroupTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Group.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.groupTypeEnum);
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `actual` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getActualElement(): BooleanType {
    return this.actual ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `actual` property.
   *
   * @param element - the `actual` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActualElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Group.actual; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.actual = element;
    } else {
      this.actual = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `actual` property exists and has a value; `false` otherwise
   */
  public hasActualElement(): boolean {
    return isDefined<BooleanType>(this.actual) && !this.actual.isEmpty();
  }

  /**
   * @returns the `actual` property value as a fhirBoolean if defined; else null
   */
  public getActual(): fhirBoolean | null {
    if (this.actual?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.actual.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `actual` property.
   *
   * @param value - the `actual` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActual(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Group.actual (${String(value)})`;
      this.actual = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.actual = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `actual` property exists and has a value; `false` otherwise
   */
  public hasActual(): boolean {
    return this.hasActualElement();
  }

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Code object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Group.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
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
   * @returns the `name` property value as a StringType object if defined; else an empty StringType object
   */
  public getNameElement(): StringType {
    return this.name ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `name` property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Group.name; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<StringType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirString if defined; else undefined
   */
  public getName(): fhirString | undefined {
    return this.name?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Group.name (${String(value)})`;
      this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /**
   * @returns the `quantity` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getQuantityElement(): UnsignedIntType {
    return this.quantity ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `quantity` property.
   *
   * @param element - the `quantity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQuantityElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Group.quantity; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.quantity = element;
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantityElement(): boolean {
    return isDefined<UnsignedIntType>(this.quantity) && !this.quantity.isEmpty();
  }

  /**
   * @returns the `quantity` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getQuantity(): fhirUnsignedInt | undefined {
    return this.quantity?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `quantity` property.
   *
   * @param value - the `quantity` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQuantity(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Group.quantity (${String(value)})`;
      this.quantity = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return this.hasQuantityElement();
  }

  /**
   * @returns the `managingEntity` property value as a Reference object; else an empty Reference object
   */
  public getManagingEntity(): Reference {
    return this.managingEntity ?? new Reference();
  }

  /**
   * Assigns the provided ManagingEntity object value to the `managingEntity` property.
   *
   * @decorator `@ReferenceTargets('Group.managingEntity', ['Organization','RelatedPerson','Practitioner','PractitionerRole',])`
   *
   * @param value - the `managingEntity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Group.managingEntity', [
    'Organization',
  
    'RelatedPerson',
  
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setManagingEntity(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.managingEntity = value;
    } else {
      this.managingEntity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `managingEntity` property exists and has a value; `false` otherwise
   */
  public hasManagingEntity(): boolean {
    return isDefined<Reference>(this.managingEntity) && !this.managingEntity.isEmpty();
  }

  /**
   * @returns the `characteristic` property value as a GroupCharacteristicComponent array
   */
  public getCharacteristic(): GroupCharacteristicComponent[] {
    return this.characteristic ?? ([] as GroupCharacteristicComponent[]);
  }

  /**
   * Assigns the provided GroupCharacteristicComponent array value to the `characteristic` property.
   *
   * @param value - the `characteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacteristic(value: GroupCharacteristicComponent[] | undefined): this {
    if (isDefinedList<GroupCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid Group.characteristic; Provided value array has an element that is not an instance of GroupCharacteristicComponent.`;
      assertFhirTypeList<GroupCharacteristicComponent>(value, GroupCharacteristicComponent, optErrMsg);
      this.characteristic = value;
    } else {
      this.characteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided GroupCharacteristicComponent value to the `characteristic` array property.
   *
   * @param value - the `characteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCharacteristic(value: GroupCharacteristicComponent | undefined): this {
    if (isDefined<GroupCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid Group.characteristic; Provided element is not an instance of GroupCharacteristicComponent.`;
      assertFhirType<GroupCharacteristicComponent>(value, GroupCharacteristicComponent, optErrMsg);
      this.initCharacteristic();
      this.characteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `characteristic` property exists and has a value; `false` otherwise
   */
  public hasCharacteristic(): boolean {
    return isDefinedList<GroupCharacteristicComponent>(this.characteristic) && this.characteristic.some((item: GroupCharacteristicComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `characteristic` property
   */
  private initCharacteristic(): void {
    if(!this.hasCharacteristic()) {
      this.characteristic = [] as GroupCharacteristicComponent[];
    }
  }

  /**
   * @returns the `member` property value as a GroupMemberComponent array
   */
  public getMember(): GroupMemberComponent[] {
    return this.member ?? ([] as GroupMemberComponent[]);
  }

  /**
   * Assigns the provided GroupMemberComponent array value to the `member` property.
   *
   * @param value - the `member` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMember(value: GroupMemberComponent[] | undefined): this {
    if (isDefinedList<GroupMemberComponent>(value)) {
      const optErrMsg = `Invalid Group.member; Provided value array has an element that is not an instance of GroupMemberComponent.`;
      assertFhirTypeList<GroupMemberComponent>(value, GroupMemberComponent, optErrMsg);
      this.member = value;
    } else {
      this.member = undefined;
    }
    return this;
  }

  /**
   * Add the provided GroupMemberComponent value to the `member` array property.
   *
   * @param value - the `member` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMember(value: GroupMemberComponent | undefined): this {
    if (isDefined<GroupMemberComponent>(value)) {
      const optErrMsg = `Invalid Group.member; Provided element is not an instance of GroupMemberComponent.`;
      assertFhirType<GroupMemberComponent>(value, GroupMemberComponent, optErrMsg);
      this.initMember();
      this.member?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `member` property exists and has a value; `false` otherwise
   */
  public hasMember(): boolean {
    return isDefinedList<GroupMemberComponent>(this.member) && this.member.some((item: GroupMemberComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `member` property
   */
  private initMember(): void {
    if(!this.hasMember()) {
      this.member = [] as GroupMemberComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Group';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.active,
      this.type_,
      this.actual,
      this.code,
      this.name,
      this.quantity,
      this.managingEntity,
      this.characteristic,
      this.member,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.actual, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Group {
    const dest = new Group();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Group): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.active = this.active?.copy();
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.actual = this.actual ? this.actual.copy() : null;
    dest.code = this.code?.copy();
    dest.name = this.name?.copy();
    dest.quantity = this.quantity?.copy();
    dest.managingEntity = this.managingEntity?.copy();
    const characteristicList = copyListValues<GroupCharacteristicComponent>(this.characteristic);
    dest.characteristic = characteristicList.length === 0 ? undefined : characteristicList;
    const memberList = copyListValues<GroupMemberComponent>(this.member);
    dest.member = memberList.length === 0 ? undefined : memberList;
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    }

    if (this.hasActualElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getActualElement(), 'actual', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasQuantityElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getQuantityElement(), 'quantity', jsonObj);
    }

    if (this.hasManagingEntity()) {
      setFhirComplexJson(this.getManagingEntity(), 'managingEntity', jsonObj);
    }

    if (this.hasCharacteristic()) {
      setFhirBackboneElementListJson(this.getCharacteristic(), 'characteristic', jsonObj);
    }

    if (this.hasMember()) {
      setFhirBackboneElementListJson(this.getMember(), 'member', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * GroupCharacteristicComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Include / Exclude group members by Trait
 * - **Definition:** Identifies traits whose presence r absence is shared by members of the group.
 * - **Comment:** All the identified characteristics must be true for an entity to a member of the group.
 * - **Requirements:** Needs to be a generic mechanism for identifying what individuals can be part of a group.
 *
 * @category Data Models: Resource
 * @see [FHIR Group](http://hl7.org/fhir/StructureDefinition/Group)
 */
export class GroupCharacteristicComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null, value: IDataType | null = null, exclude: BooleanType | fhirBoolean | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }


    this.exclude = null;
    if (isDefined<BooleanType | fhirBoolean>(exclude)) {
      if (exclude instanceof PrimitiveType) {
        this.setExcludeElement(exclude);
      } else {
        this.setExclude(exclude);
      }
    }
  }

  /**
   * Parse the provided `GroupCharacteristicComponent` JSON to instantiate the GroupCharacteristicComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `GroupCharacteristicComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GroupCharacteristicComponent
   * @returns GroupCharacteristicComponent data model or undefined for `GroupCharacteristicComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): GroupCharacteristicComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GroupCharacteristicComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GroupCharacteristicComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = GroupCharacteristicComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for GroupCharacteristicComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (value === undefined) {
      instance.setValue(null);
    } else {
      instance.setValue(value);
    }

    fieldName = 'exclude';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setExclude(null);
      } else {
        instance.setExcludeElement(datatype);
      }
    } else {
      instance.setExclude(null);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    return instance;
  }

  /**
   * Group.characteristic.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of characteristic
   * - **Definition:** A code that identifies the kind of trait being asserted.
   * - **Requirements:** Need a formal way of identifying the characteristic being described.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeableConcept | null;

  /**
   * Group.characteristic.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Group.characteristic.value[x]', ['CodeableConcept','boolean','Quantity','Range','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value held by characteristic
   * - **Definition:** The value of the trait that holds (or does not hold - see \'exclude\') for members of the group.
   * - **Comment:** For Range, it means members of the group have a value that falls somewhere within the specified range.
   * - **Requirements:** The value of the characteristic is what determines group membership.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'boolean',
   *     'Quantity',
   *     'Range',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Group.characteristic.value[x]',[
    'CodeableConcept',
    'boolean',
    'Quantity',
    'Range',
    'Reference',
  ])
  private value: IDataType | null;

  /**
   * Group.characteristic.exclude Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Group includes or excludes
   * - **Definition:** If true, indicates the characteristic is one that is NOT held by members of the group.
   * - **Comment:** This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
   * - **Requirements:** Sometimes group membership is determined by characteristics not possessed.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private exclude: BooleanType | null;

  /**
   * Group.characteristic.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Period over which characteristic is tested
   * - **Definition:** The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

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
      const optErrMsg = `Invalid Group.characteristic.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('Group.characteristic.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Group.characteristic.value[x]')
  public setValue(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.value = value;
    } else {
      this.value = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefined<IDataType>(this.value) && !this.value.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Group.characteristic.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasValueCodeableConcept(): boolean {
    return this.hasValue() && this.value instanceof CodeableConcept;
  }

  /**
   * @returns the `value` property value as a BooleanType object if defined; else null
   */
  public getValueBooleanType(): BooleanType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Group.characteristic.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && this.value instanceof BooleanType;
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else null
   */
  public getValueQuantity(): Quantity | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for Group.characteristic.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a Range object if defined; else null
   */
  public getValueRange(): Range | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for Group.characteristic.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Range and has a value; `false` otherwise
   */
  public hasValueRange(): boolean {
    return this.hasValue() && this.value instanceof Range;
  }

  /**
   * @returns the `value` property value as a Reference object if defined; else null
   */
  public getValueReference(): Reference | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Group.characteristic.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasValueReference(): boolean {
    return this.hasValue() && this.value instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `exclude` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getExcludeElement(): BooleanType {
    return this.exclude ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `exclude` property.
   *
   * @param element - the `exclude` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExcludeElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Group.characteristic.exclude; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.exclude = element;
    } else {
      this.exclude = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `exclude` property exists and has a value; `false` otherwise
   */
  public hasExcludeElement(): boolean {
    return isDefined<BooleanType>(this.exclude) && !this.exclude.isEmpty();
  }

  /**
   * @returns the `exclude` property value as a fhirBoolean if defined; else null
   */
  public getExclude(): fhirBoolean | null {
    if (this.exclude?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.exclude.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `exclude` property.
   *
   * @param value - the `exclude` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExclude(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Group.characteristic.exclude (${String(value)})`;
      this.exclude = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.exclude = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `exclude` property exists and has a value; `false` otherwise
   */
  public hasExclude(): boolean {
    return this.hasExcludeElement();
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
      const optErrMsg = `Invalid Group.characteristic.period; Provided element is not an instance of Period.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Group.characteristic';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.value,
      this.exclude,
      this.period,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, this.value, this.exclude, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GroupCharacteristicComponent {
    const dest = new GroupCharacteristicComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GroupCharacteristicComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.value = this.value ? this.value.copy() as IDataType : null;
    dest.exclude = this.exclude ? this.exclude.copy() : null;
    dest.period = this.period?.copy();
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

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    if (this.hasExcludeElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExcludeElement(), 'exclude', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * GroupMemberComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who or what is in group
 * - **Definition:** Identifies the resource instances that are members of the group.
 * - **Requirements:** Often the only thing of interest about a group is "who\'s in it".
 *
 * @category Data Models: Resource
 * @see [FHIR Group](http://hl7.org/fhir/StructureDefinition/Group)
 */
export class GroupMemberComponent extends BackboneElement implements IBackboneElement {
  constructor(entity: Reference | null = null) {
    super();

    this.entity = null;
    if (isDefined<Reference>(entity)) {
      this.setEntity(entity);
    }
  }

  /**
   * Parse the provided `GroupMemberComponent` JSON to instantiate the GroupMemberComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `GroupMemberComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GroupMemberComponent
   * @returns GroupMemberComponent data model or undefined for `GroupMemberComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): GroupMemberComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GroupMemberComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GroupMemberComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'entity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setEntity(null);
      } else {
        instance.setEntity(datatype);
      }
    } else {
      instance.setEntity(null);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'inactive';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setInactiveElement(datatype);
    }

    return instance;
  }

  /**
   * Group.member.entity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to the group member
   * - **Definition:** A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private entity: Reference | null;

  /**
   * Group.member.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Period member belonged to the group
   * - **Definition:** The period that the member was in the group, if known.
   * - **Requirements:** Need to track who was in a group at a  particular time.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

  /**
   * Group.member.inactive Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If member is no longer in group
   * - **Definition:** A flag to indicate that the member is no longer in the group, but previously may have been a member.
   * - **Requirements:** Sometimes you don\'t know when someone stopped being in a group, but not when.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private inactive?: BooleanType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `entity` property value as a Reference object if defined; else an empty Reference object
   */
  public getEntity(): Reference {
    return this.entity ?? new Reference();
  }

  /**
   * Assigns the provided Entity object value to the `entity` property.
   *
   * @decorator `@ReferenceTargets('Group.member.entity', ['Patient','Practitioner','PractitionerRole','Device','Medication','Substance','Group',])`
   *
   * @param value - the `entity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Group.member.entity', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Medication',
  
    'Substance',
  
    'Group',
  ])
  public setEntity(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.entity = value;
    } else {
      this.entity = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `entity` property exists and has a value; `false` otherwise
   */
  public hasEntity(): boolean {
    return isDefined<Reference>(this.entity) && !this.entity.isEmpty();
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
      const optErrMsg = `Invalid Group.member.period; Provided element is not an instance of Period.`;
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
   * @returns the `inactive` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getInactiveElement(): BooleanType {
    return this.inactive ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `inactive` property.
   *
   * @param element - the `inactive` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInactiveElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Group.member.inactive; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.inactive = element;
    } else {
      this.inactive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `inactive` property exists and has a value; `false` otherwise
   */
  public hasInactiveElement(): boolean {
    return isDefined<BooleanType>(this.inactive) && !this.inactive.isEmpty();
  }

  /**
   * @returns the `inactive` property value as a fhirBoolean if defined; else undefined
   */
  public getInactive(): fhirBoolean | undefined {
    return this.inactive?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `inactive` property.
   *
   * @param value - the `inactive` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInactive(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Group.member.inactive (${String(value)})`;
      this.inactive = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.inactive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `inactive` property exists and has a value; `false` otherwise
   */
  public hasInactive(): boolean {
    return this.hasInactiveElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Group.member';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.entity,
      this.period,
      this.inactive,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.entity, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GroupMemberComponent {
    const dest = new GroupMemberComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GroupMemberComponent): void {
    super.copyValues(dest);
    dest.entity = this.entity ? this.entity.copy() : null;
    dest.period = this.period?.copy();
    dest.inactive = this.inactive?.copy();
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

    if (this.hasEntity()) {
      setFhirComplexJson(this.getEntity(), 'entity', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasInactiveElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getInactiveElement(), 'inactive', jsonObj);
    }

    return jsonObj;
  }
}
