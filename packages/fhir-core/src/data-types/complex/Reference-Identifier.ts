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
 * This module contains the Resource and Identifier FHIR models and the ReferenceType decorator.
 *
 * @remarks
 * In TypeScript, having each of these models and the decorator in separate files results in circular
 * dependencies that cannot be resolved by typical strategies such as extracting common elements into
 * a sharable module. Therefore, these modules are collected into this single file. This preserves the
 * correct model representations with their correct dependencies without introducing circular dependencies.
 *
 * @module
 */

import { DataType, setFhirComplexJson, setFhirPrimitiveJson } from '../../base-models/core-fhir-models';
import { PARSABLE_DATATYPE_MAP } from '../../base-models/parsable-datatype-map';
import { PARSABLE_RESOURCE_MAP } from '../../base-models/parsable-resource-map';
import { IDataType } from '../../base-models/library-interfaces';
import { IdentifierUseEnum } from '../code-systems/IdentifierUseEnum';
import { CodeableConcept } from './CodeableConcept';
import { Period } from './Period';
import { assertEnumCodeType, CodeType, EnumCodeType } from '../primitive/CodeType';
import {
  fhirCode,
  fhirCodeSchema,
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
  parseFhirPrimitiveData,
} from '../primitive/primitive-types';
import { StringType } from '../primitive/StringType';
import { UriType } from '../primitive/UriType';
import { isEmpty } from '../../utility/common-util';
import { isElementEmpty } from '../../utility/fhir-util';
import * as JSON from '../../utility/json-helpers';
import { assertFhirType, isDefined } from '../../utility/type-guards';
import { FhirParser, getPrimitiveTypeJson } from '../../utility/FhirParser';
import { ReferenceTargets } from '../../utility/decorators';

/**
 * Reference Class
 *
 * @remarks
 * Base StructureDefinition for Reference Type: A reference from one resource to another.
 *
 * **FHIR Specification**
 * - **Short:** A reference from one resource to another
 * - **Definition:** A reference from one resource to another.
 * - **Comment:** References SHALL be a reference to an actual FHIR resource, and SHALL be resolveable (allowing for access control, temporary unavailability, etc.). Resolution can be either by retrieval from the URL, or, where applicable by resource type, by treating an absolute reference as a canonical URL and looking it up in a local registry/repository.
 * - **FHIR Version:** 4.0.1; Normative since 4.0.0
 *
 * @category Data Models: ComplexType
 * @see [FHIR Reference](http://hl7.org/fhir/StructureDefinition/Reference)
 */
export class Reference extends DataType implements IDataType {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `Reference` JSON to instantiate the Reference data model.
   *
   * @param sourceJson - JSON representing FHIR `Reference`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Reference
   * @returns Reference data model or undefined for `Reference`
   * @throws {@link JsonError} tf the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): Reference | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Reference';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Reference();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setReferenceElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setTypeElement(datatype);
    }

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'display';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDisplayElement(datatype);
    }

    return instance;
  }

  /**
   * Reference.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Literal reference, Relative, internal or absolute URL
   * - **Definition:** A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with \'#\') refer to contained resources.
   * - **Comment:** Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reference?: StringType | undefined;

  /**
   * Reference.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type the reference refers to (e.g. "Patient")
   * - **Definition:** The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).
   * - **Comment:** This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: UriType | undefined;

  /**
   * Reference.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Logical reference, when literal reference is not known
   * - **Definition:** An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
   * - **Comment:** When an identifier is provided in place of a reference, any system processing the reference will only be able to resolve the identifier to a reference if it understands the business context in which the identifier is used. Sometimes this is global (e.g. a national identifier) but often it is not. For this reason, none of the useful mechanisms described for working with references (e.g. chaining, includes) are possible, nor should servers be expected to be able resolve the reference. Servers may accept an identifier based reference untouched, resolve it, and/or reject it - see CapabilityStatement.rest.resource.referencePolicy.  When both an identifier and a literal reference are provided, the literal reference is preferred. Applications processing the resource are allowed - but not required - to check that the identifier matches the literal reference Applications converting a logical reference to a literal reference may choose to leave the logical reference present, or remove it. Reference is intended to point to a structure that can potentially be expressed as a FHIR resource, though there is no need for it to exist as an actual FHIR resource instance - except in as much as an application wishes to actual find the target of the reference. The content referred to be the identifier must meet the logical constraints implied by any limitations on what resource types are permitted for the reference.  For example, it would not be legitimate to send the identifier for a drug prescription if the type were Reference(Observation|DiagnosticReport).  One of the use-cases for Reference.identifier is the situation where no FHIR representation exists (where the type is Reference (Any).
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * Reference.display Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text alternative for the resource
   * - **Definition:** Plain text narrative that identifies the resource in addition to the resource reference.
   * - **Comment:** This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what\'s being referenced, not to fully describe it.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private display?: StringType | undefined;

  /**
   * @returns the `reference` property value as a StringType object if defined; else an empty StringType object
   */
  public getReferenceElement(): StringType {
    return this.reference ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `reference` property.
   *
   * @param element - the `reference` value
   * @returns this
   */
  public setReferenceElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Reference.reference; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
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
    return isDefined<StringType>(this.reference) && !this.reference.isEmpty();
  }

  /**
   * @returns the `reference` property value as a fhirString if defined; else undefined
   */
  public getReference(): fhirString | undefined {
    return this.reference?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `reference` property.
   *
   * @param value - the `reference` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReference(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Reference.reference (${value})`;
      this.reference = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
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
   * @returns the `type_` property value as a UriType object if defined; else an empty UriType object
   */
  public getTypeElement(): UriType {
    return this.type_ ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `type_` property.
   *
   * @param element - the `type_` value
   * @returns this
   */
  public setTypeElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Reference.type; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.type_ = element;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeElement(): boolean {
    return isDefined<UriType>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `type_` property value as a fhirUri if defined; else undefined
   */
  public getType(): fhirUri | undefined {
    return this.type_?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `type_` property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setType(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Reference.type (${value})`;
      this.type_ = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeElement();
  }

  /**
   * @returns the `identifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getIdentifier(): Identifier {
    return this.identifier ?? new Identifier();
  }

  /**
   * Assigns the provided Identifier object value to the `identifier` property.
   *
   * @param value - the `identifier` object value
   * @returns this
   */
  public setIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid Reference.identifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.identifier = value;
    } else {
      this.identifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identifier` property exists and has a value; `false` otherwise
   */
  public hasIdentifier(): boolean {
    return isDefined<Identifier>(this.identifier) && !this.identifier.isEmpty();
  }

  /**
   * @returns the `display` property value as a StringType object if defined; else an empty StringType object
   */
  public getDisplayElement(): StringType {
    return this.display ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `display` property.
   *
   * @param element - the `display` value
   * @returns this
   */
  public setDisplayElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Reference.display; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.display = element;
    } else {
      this.display = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  public hasDisplayElement(): boolean {
    return isDefined<StringType>(this.display) && !this.display.isEmpty();
  }

  /**
   * @returns the `display` property value as a fhirString if defined; else undefined
   */
  public getDisplay(): fhirString | undefined {
    return this.display?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `display` property.
   *
   * @param value - the `display` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisplay(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Reference.display (${value})`;
      this.display = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.display = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  public hasDisplay(): boolean {
    return this.hasDisplayElement();
  }

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Reference';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(this.reference, this.type_, this.identifier, this.display);
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Reference {
    const dest = new Reference();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Reference): void {
    super.copyValues(dest);
    dest.reference = this.reference?.copy();
    dest.type_ = this.type_?.copy();
    dest.identifier = this.identifier?.copy();
    dest.display = this.display?.copy();
  }

  /**
   * @returns `true` if the instance is a FHIR complex datatype; `false` otherwise
   */
  public override isComplexDataType(): boolean {
    return true;
  }

  /**
   * @returns the complex or primitive data model type name (e.g., 'Period", 'StringType', `UriType', etc.)
   */
  public override dataTypeName(): string {
    return this.constructor.name;
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

    if (this.hasReferenceElement()) {
      setFhirPrimitiveJson<fhirString>(this.getReferenceElement(), 'reference', jsonObj);
    }

    if (this.hasTypeElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getTypeElement(), 'type', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasDisplayElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDisplayElement(), 'display', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * Identifier Class
 *
 * @remarks
 * Base StructureDefinition for Identifier Type: An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 *
 * Need to be able to identify things with confidence and be sure that the identification is not subject to misinterpretation.
 *
 * **FHIR Specification**
 * - **Short:** An identifier intended for computation
 * - **Definition:** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 * - **FHIR Version:** 4.0.1; Normative since 4.0.0
 *
 * @category Data Models: ComplexType
 * @see [FHIR Identifier](http://hl7.org/fhir/StructureDefinition/Identifier)
 */
export class Identifier extends DataType implements IDataType {
  constructor() {
    super();

    this.identifierUseEnum = new IdentifierUseEnum();
  }

  /**
   * Parse the provided `Identifier` JSON to instantiate the Identifier data model.
   *
   * @param sourceJson - JSON representing FHIR `Identifier`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Identifier
   * @returns Identifier data model or undefined for `Identifier`
   * @throws {@link JsonError} If the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): Identifier | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Identifier';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Identifier();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'use';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setUseElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'system';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setSystemElement(datatype);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setValueElement(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'assigner';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAssigner(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: IdentifierUse
   *
   * @see {@link IdentifierUseEnum }
   */
  private readonly identifierUseEnum: IdentifierUseEnum;

  /**
   * Identifier.use Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** usual | official | temp | secondary | old (If known)
   * - **Definition:** The purpose of this identifier.
   * - **Comment:** Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
   * - **Requirements:** Allows the appropriate identifier for a particular context of use to be selected from among a set of identifiers.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This is labeled as &quot;Is Modifier&quot; because applications should not mistake a temporary id for a permanent one.
   * - **isSummary:** true
   */
  private use?: EnumCodeType | undefined;

  /**
   * Identifier.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of identifier
   * - **Definition:** A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
   * - **Comment:** This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage.   Where the system is known, a type is unnecessary because the type is always part of the system definition. However systems often need to handle identifiers where the system is not known. There is not a 1:1 relationship between type and system, since many different systems have the same type.
   * - **Requirements:** Allows users to make use of identifiers when the identifier system is not known.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Identifier.system Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The namespace for the identifier value
   * - **Definition:** Establishes the namespace for the value - that is, a URL that describes a set values that are unique.
   * - **Comment:** Identifier.system is always case sensitive.
   * - **Requirements:** There are many sets  of identifiers.  To perform matching of two identifiers, we need to know what set we\'re dealing with. The system identifies a particular set of unique identifiers.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private system?: UriType | undefined;

  /**
   * Identifier.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The value that is unique
   * - **Definition:** The portion of the identifier typically relevant to the user and which is unique within the context of the system.
   * - **Comment:** If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value\'s primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing non-significant whitespace, dashes, etc.)  A value formatted for human display can be conveyed using the [Rendered Value extension](https://hl7.org/fhir/extension-rendered-value.html). Identifier.value is to be treated as case sensitive unless knowledge of the Identifier.system allows the processer to be confident that non-case-sensitive processing is safe.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private value?: StringType | undefined;

  /**
   * Identifier.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time period when id is/was valid for use
   * - **Definition:** Time period during which identifier is/was valid for use.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * Identifier.assigner Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization that issued id (may be just text)
   * - **Definition:** Organization that issued/manages the identifier.
   * - **Comment:** The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private assigner?: Reference | undefined;

  /**
   * @returns the `use` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link IdentifierUseEnum }
   */
  public getUseEnumType(): EnumCodeType | undefined {
    return this.use;
  }

  /**
   * Assigns the provided EnumCodeType value to the `use` property.
   *
   * @param enumType - the `use` value
   * @returns this
   *
   * @see CodeSystem Enumeration: {@link IdentifierUseEnum }
   */
  public setUseEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Identifier.use';
      assertEnumCodeType<IdentifierUseEnum>(enumType, IdentifierUseEnum, errMsgPrefix);
      this.use = enumType;
    } else {
      this.use = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUseEnumType(): boolean {
    return isDefined<EnumCodeType>(this.use) && !this.use.isEmpty() && this.use.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `use` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link IdentifierUseEnum }
   */
  public getUseElement(): CodeType | undefined {
    if (this.use === undefined) {
      return undefined;
    }
    return this.use as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `use` property.
   *
   * @param element - the `use` value
   * @returns this
   *
   * @see CodeSystem Enumeration: {@link IdentifierUseEnum }
   */
  public setUseElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Identifier.use; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.use = new EnumCodeType(element, this.identifierUseEnum);
    } else {
      this.use = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUseElement(): boolean {
    return this.hasUseEnumType();
  }

  /**
   * @returns the `use` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link IdentifierUseEnum }
   */
  public getUse(): fhirCode | undefined {
    if (this.use === undefined) {
      return undefined;
    }
    return this.use.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `use` property.
   *
   * @param value - the `use` value
   * @returns this
   *
   * @see CodeSystem Enumeration: {@link IdentifierUseEnum }
   */
  public setUse(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Identifier.use; Provided value is not an instance of fhirCode.`;
      this.use = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.identifierUseEnum);
    } else {
      this.use = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUse(): boolean {
    return this.hasUseEnumType();
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
   */
  public setType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Identifier.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `system` property value as a UriType object if defined; else an empty UriType object
   */
  public getSystemElement(): UriType {
    return this.system ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `system` property.
   *
   * @param element - the `system` value
   * @returns this
   */
  public setSystemElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Identifier.system; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.system = element;
    } else {
      this.system = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `system` property exists and has a value; `false` otherwise
   */
  public hasSystemElement(): boolean {
    return isDefined<UriType>(this.system) && !this.system.isEmpty();
  }

  /**
   * @returns the `system` property value as a fhirUri if defined; else undefined
   */
  public getSystem(): fhirUri | undefined {
    return this.system?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `system` property.
   *
   * @param value - the `system` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSystem(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Identifier.system (${value})`;
      this.system = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.system = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `system` property exists and has a value; `false` otherwise
   */
  public hasSystem(): boolean {
    return this.hasSystemElement();
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else an empty StringType object
   */
  public getValueElement(): StringType {
    return this.value ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   */
  public setValueElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Identifier.value; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.value = element;
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValueElement(): boolean {
    return isDefined<StringType>(this.value) && !this.value.isEmpty();
  }

  /**
   * @returns the `value` property value as a fhirString if defined; else undefined
   */
  public getValue(): fhirString | undefined {
    return this.value?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `value` property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValue(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Identifier.value (${value})`;
      this.value = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return this.hasValueElement();
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
   */
  public setPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Identifier.period; Provided element is not an instance of Period.`;
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
   * @returns the `assigner` property value as a Reference object; else an empty Reference object
   */
  public getAssigner(): Reference {
    return this.assigner ?? new Reference();
  }

  /**
   * Assigns the provided Assigner object value to the `assigner` property.
   *
   * @decorator `@ReferenceTargets('Identifier.assigner', ['Organization',])`
   *
   * @param value - the `assigner` object value
   * @returns this
   */
  @ReferenceTargets('Identifier.assigner', ['Organization'])
  public setAssigner(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.assigner = value;
    } else {
      this.assigner = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assigner` property exists and has a value; `false` otherwise
   */
  public hasAssigner(): boolean {
    return isDefined<Reference>(this.assigner) && !this.assigner.isEmpty();
  }

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Identifier';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(this.use, this.type_, this.system, this.value, this.period, this.assigner);
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Identifier {
    const dest = new Identifier();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Identifier): void {
    super.copyValues(dest);
    dest.use = this.use?.copy();
    dest.type_ = this.type_?.copy();
    dest.system = this.system?.copy();
    dest.value = this.value?.copy();
    dest.period = this.period?.copy();
    dest.assigner = this.assigner?.copy();
  }

  /**
   * @returns `true` if the instance is a FHIR complex datatype; `false` otherwise
   */
  public override isComplexDataType(): boolean {
    return true;
  }

  /**
   * @returns the complex or primitive data model type name (e.g., 'Period", 'StringType', `UriType', etc.)
   */
  public override dataTypeName(): string {
    return this.constructor.name;
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

    if (this.hasUseElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getUseElement()!, 'use', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSystemElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getSystemElement(), 'system', jsonObj);
    }

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getValueElement(), 'value', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasAssigner()) {
      setFhirComplexJson(this.getAssigner(), 'assigner', jsonObj);
    }

    return jsonObj;
  }
}
