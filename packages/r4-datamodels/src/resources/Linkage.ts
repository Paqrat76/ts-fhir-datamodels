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
 * Linkage Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Linkage
 * StructureDefinition.name: Linkage
 * StructureDefinition.description: Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
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
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { LinkageTypeEnum } from '../code-systems/LinkageTypeEnum';
import { PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * Linkage Class
 *
 * @remarks
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 *
 * **FHIR Specification**
 * - **Short:** Links records for \'same\' item
 * - **Definition:** Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR Linkage](http://hl7.org/fhir/StructureDefinition/Linkage)
 */
export class Linkage extends DomainResource implements IDomainResource {
  constructor(item: LinkageItemComponent[] | null = null) {
    super();

    this.item = null;
    if (isDefinedList<LinkageItemComponent>(item)) {
      this.setItem(item);
    }
  }

  /**
   * Parse the provided `Linkage` JSON to instantiate the Linkage data model.
   *
   * @param sourceJson - JSON representing FHIR `Linkage`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Linkage
   * @returns Linkage data model or undefined for `Linkage`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Linkage | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Linkage';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Linkage();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Linkage');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'active';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setActiveElement(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
    }

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: LinkageItemComponent | undefined = LinkageItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setItem(null);
        } else {
          instance.addItem(component);
        }
      });
    } else {
      instance.setItem(null);
    }

    return instance;
  }

  /**
   * Linkage.active Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether this linkage assertion is active or not
   * - **Definition:** Indicates whether the asserted set of linkages are considered to be "in effect".
   * - **Comment:** If false, any asserted linkages should not be considered current/relevant/applicable.
   * - **Requirements:** Need to be able to mark a linkage record as not to be used because it was created in error.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private active?: BooleanType | undefined;

  /**
   * Linkage.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is responsible for linkages
   * - **Definition:** Identifies the user or organization responsible for asserting the linkages as well as the user or organization who establishes the context in which the nature of each linkage is evaluated.
   * - **Requirements:** "Primary" for the same set of linked resources may be different from different user\'s/organization\'s perspectives.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author?: Reference | undefined;

  /**
   * Linkage.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Item to be linked
   * - **Definition:** Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private item: LinkageItemComponent[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Linkage.active; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid Linkage.active (${String(value)})`;
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
   * @returns the `author` property value as a Reference object; else an empty Reference object
   */
  public getAuthor(): Reference {
    return this.author ?? new Reference();
  }

  /**
   * Assigns the provided Author object value to the `author` property.
   *
   * @decorator `@ReferenceTargets('Linkage.author', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Linkage.author', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setAuthor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.author = value;
    } else {
      this.author = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `author` property exists and has a value; `false` otherwise
   */
  public hasAuthor(): boolean {
    return isDefined<Reference>(this.author) && !this.author.isEmpty();
  }

  /**
   * @returns the `item` property value as a LinkageItemComponent array
   */
  public getItem(): LinkageItemComponent[] {
    return this.item ?? ([] as LinkageItemComponent[]);
  }

  /**
   * Assigns the provided LinkageItemComponent array value to the `item` property.
   *
   * @param value - the `item` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: LinkageItemComponent[] | undefined | null): this {
    if (isDefinedList<LinkageItemComponent>(value)) {
      const optErrMsg = `Invalid Linkage.item; Provided value array has an element that is not an instance of LinkageItemComponent.`;
      assertFhirTypeList<LinkageItemComponent>(value, LinkageItemComponent, optErrMsg);
      this.item = value;
    } else {
      this.item = null;
    }
    return this;
  }

  /**
   * Add the provided LinkageItemComponent value to the `item` array property.
   *
   * @param value - the `item` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addItem(value: LinkageItemComponent | undefined): this {
    if (isDefined<LinkageItemComponent>(value)) {
      const optErrMsg = `Invalid Linkage.item; Provided element is not an instance of LinkageItemComponent.`;
      assertFhirType<LinkageItemComponent>(value, LinkageItemComponent, optErrMsg);
      this.initItem();
      this.item?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefinedList<LinkageItemComponent>(this.item) && this.item.some((item: LinkageItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `item` property
   */
  private initItem(): void {
    if(!this.hasItem()) {
      this.item = [] as LinkageItemComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Linkage';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.active,
      this.author,
      this.item,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Linkage {
    const dest = new Linkage();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Linkage): void {
    super.copyValues(dest);
    dest.active = this.active?.copy();
    dest.author = this.author?.copy();
    const itemList = copyListValues<LinkageItemComponent>(this.item);
    dest.item = itemList.length === 0 ? null : itemList;
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

    if (this.hasActiveElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getActiveElement(), 'active', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasItem()) {
      setFhirBackboneElementListJson(this.getItem(), 'item', jsonObj);
    } else {
      jsonObj['item'] = null;
    }

    return jsonObj;
  }
}

/**
 * LinkageItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Item to be linked
 * - **Definition:** Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
 *
 * @category Data Models: Resource
 * @see [FHIR Linkage](http://hl7.org/fhir/StructureDefinition/Linkage)
 */
export class LinkageItemComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null, resource: Reference | null = null) {
    super();

    this.linkageTypeEnum = new LinkageTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<LinkageTypeEnum>(
      type_,
      LinkageTypeEnum,
      this.linkageTypeEnum,
      'Linkage.item.type',
    );

    this.resource = null;
    if (isDefined<Reference>(resource)) {
      this.setResource(resource);
    }
  }

  /**
   * Parse the provided `LinkageItemComponent` JSON to instantiate the LinkageItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `LinkageItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to LinkageItemComponent
   * @returns LinkageItemComponent data model or undefined for `LinkageItemComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): LinkageItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'LinkageItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new LinkageItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setResource(null);
      } else {
        instance.setResource(datatype);
      }
    } else {
      instance.setResource(null);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: LinkageType
   *
   * @see {@link LinkageTypeEnum }
   */
  private readonly linkageTypeEnum: LinkageTypeEnum;

  /**
   * Linkage.item.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** source | alternate | historical
   * - **Definition:** Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link LinkageTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * Linkage.item.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resource being linked
   * - **Definition:** The resource instance being linked as part of the group.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resource: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link LinkageTypeEnum }
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
   * @see CodeSystem Enumeration: {@link LinkageTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Linkage.item.type`;
      assertEnumCodeType<LinkageTypeEnum>(enumType, LinkageTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link LinkageTypeEnum }
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
   * @see CodeSystem Enumeration: {@link LinkageTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Linkage.item.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.linkageTypeEnum);
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
   * @see CodeSystem Enumeration: {@link LinkageTypeEnum }
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
   * @see CodeSystem Enumeration: {@link LinkageTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Linkage.item.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.linkageTypeEnum);
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
   * @returns the `resource` property value as a Reference object if defined; else an empty Reference object
   */
  public getResource(): Reference {
    return this.resource ?? new Reference();
  }

  /**
   * Assigns the provided Resource object value to the `resource` property.
   *
   * @decorator `@ReferenceTargets('Linkage.item.resource', ['Resource',])`
   *
   * @param value - the `resource` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Linkage.item.resource', [
    'Resource',
  ])
  public setResource(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.resource = value;
    } else {
      this.resource = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return isDefined<Reference>(this.resource) && !this.resource.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Linkage.item';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.resource,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.resource, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): LinkageItemComponent {
    const dest = new LinkageItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: LinkageItemComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.resource = this.resource ? this.resource.copy() : null;
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasResource()) {
      setFhirComplexJson(this.getResource(), 'resource', jsonObj);
    } else {
      jsonObj['resource'] = null;
    }

    return jsonObj;
  }
}
