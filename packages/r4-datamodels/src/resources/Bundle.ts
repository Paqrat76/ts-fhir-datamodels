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
 * Bundle Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Bundle
 * StructureDefinition.name: Bundle
 * StructureDefinition.description: A container for a collection of resources.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DecimalType,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IResource,
  InstantType,
  JSON,
  PrimitiveType,
  Resource,
  StringType,
  UnsignedIntType,
  UriType,
  assertEnumCodeType,
  assertFhirResourceType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDecimal,
  fhirDecimalSchema,
  fhirInstant,
  fhirInstantSchema,
  fhirString,
  fhirStringSchema,
  fhirUnsignedInt,
  fhirUnsignedIntSchema,
  fhirUri,
  fhirUriSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirPrimitiveJson,
  setFhirResourceJson,
} from '@paq-ts-fhir/fhir-core';
import { BundleTypeEnum } from '../code-systems/BundleTypeEnum';
import { HttpVerbEnum } from '../code-systems/HttpVerbEnum';
import { Identifier, PARSABLE_DATATYPE_MAP, Signature } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { SearchEntryModeEnum } from '../code-systems/SearchEntryModeEnum';

/**
 * Bundle Class
 *
 * @remarks
 * A container for a collection of resources.
 *
 * **FHIR Specification**
 * - **Short:** Contains a collection of resources
 * - **Definition:** A container for a collection of resources.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR Bundle](http://hl7.org/fhir/StructureDefinition/Bundle)
 */
export class Bundle extends Resource implements IResource {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.bundleTypeEnum = new BundleTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<BundleTypeEnum>(
      type_,
      BundleTypeEnum,
      this.bundleTypeEnum,
      'Bundle.type',
    );
  }

  /**
   * Parse the provided `Bundle` JSON to instantiate the Bundle data model.
   *
   * @param sourceJson - JSON representing FHIR `Bundle`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Bundle
   * @returns Bundle data model or undefined for `Bundle`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Bundle | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Bundle';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Bundle();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Bundle');
    fhirParser.processResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
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

    fieldName = 'timestamp';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      instance.setTimestampElement(datatype);
    }

    fieldName = 'total';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setTotalElement(datatype);
    }

    fieldName = 'link';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: BundleLinkComponent | undefined = BundleLinkComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addLink(component);
        }
      });
    }

    fieldName = 'entry';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: BundleEntryComponent | undefined = BundleEntryComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addEntry(component);
        }
      });
    }

    fieldName = 'signature';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Signature | undefined = Signature.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSignature(datatype);
    }

    return instance;
  }

  /**
   * Bundle.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Persistent identifier for the bundle
   * - **Definition:** A persistent identifier for the bundle that won\'t change as a bundle is copied from server to server.
   * - **Comment:** Persistent identity generally only matters for batches of type Document, Message, and Collection. It would not normally be populated for search and history results and servers ignore Bundle.identifier when processing batches and transactions. For Documents  the .identifier SHALL be populated such that the .identifier is globally unique.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * FHIR CodeSystem: BundleType
   *
   * @see {@link BundleTypeEnum }
   */
  private readonly bundleTypeEnum: BundleTypeEnum;

  /**
   * Bundle.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection
   * - **Definition:** Indicates the purpose of this bundle - how it is intended to be used.
   * - **Comment:** It\'s possible to use a bundle for other purposes (e.g. a document can be accepted as a transaction). This is primarily defined so that there can be specific rules for some of the bundle types.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link BundleTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * Bundle.timestamp Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the bundle was assembled
   * - **Definition:** The date/time that the bundle was assembled - i.e. when the resources were placed in the bundle.
   * - **Comment:** For many bundles, the timestamp is equal to .meta.lastUpdated, because they are not stored (e.g. search results). When a bundle is placed in a persistent store, .meta.lastUpdated will be usually be changed by the server. When the bundle is a message, a middleware agent altering the message (even if not stored) SHOULD update .meta.lastUpdated. .timestamp is used to track the original time of the Bundle, and SHOULD be populated.   Usage: * document : the date the document was created. Note: the composition may predate the document, or be associated with multiple documents. The date of the composition - the authoring time - may be earlier than the document assembly time * message : the date that the content of the message was assembled. This date is not changed by middleware engines unless they add additional data that changes the meaning of the time of the message * history : the date that the history was assembled. This time would be used as the _since time to ask for subsequent updates * searchset : the time that the search set was assembled. Note that different pages MAY have different timestamps but need not. Having different timestamps does not imply that subsequent pages will represent or include changes made since the initial query * transaction | transaction-response | batch | batch-response | collection : no particular assigned meaning The timestamp value should be greater than the lastUpdated and other timestamps in the resources in the bundle, and it should be equal or earlier than the .meta.lastUpdated on the Bundle itself.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private timestamp?: InstantType | undefined;

  /**
   * Bundle.total Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If search, the total number of matches
   * - **Definition:** If a set of search matches, this is the total number of entries of type \'match\' across all pages in the search.  It does not include search.mode = \'include\' or \'outcome\' entries and it does not provide a count of the number of entries in the Bundle.
   * - **Comment:** Only used if the bundle is a search result set. The total does not include resources such as OperationOutcome and included resources, only the total number of matching resources.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private total?: UnsignedIntType | undefined;

  /**
   * Bundle.link Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Links related to this Bundle
   * - **Definition:** A series of links that provide context to this bundle.
   * - **Comment:** Both Bundle.link and Bundle.entry.link are defined to support providing additional context when Bundles are used (e.g. [HATEOAS](http://en.wikipedia.org/wiki/HATEOAS)).  Bundle.entry.link corresponds to links found in the HTTP header if the resource in the entry was [read](https://hl7.org/fhir/http.html#read) directly. This specification defines some specific uses of Bundle.link for [searching](https://hl7.org/fhir/search.html#conformance) and [paging](https://hl7.org/fhir/http.html#paging), but no specific uses for Bundle.entry.link, and no defined function in a transaction - the meaning is implementation specific.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private link?: BundleLinkComponent[] | undefined;

  /**
   * Bundle.entry Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Entry in the bundle - will have a resource or information
   * - **Definition:** An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private entry?: BundleEntryComponent[] | undefined;

  /**
   * Bundle.signature Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Digital Signature
   * - **Definition:** Digital Signature - base64 encoded. XML-DSig or a JWT.
   * - **Comment:** The signature could be created by the "author" of the bundle or by the originating device.   Requirements around inclusion of a signature, verification of signatures and treatment of signed/non-signed bundles is implementation-environment specific.
   * - **Requirements:** A Signature holds an electronic representation of a signature and its supporting context in a FHIR accessible form. The signature may either be a cryptographic type (XML DigSig or a JWS), which is able to provide non-repudiation proof, or it may be a graphical image that represents a signature or a signature process. This element allows capturing signatures on documents, messages, transactions or even search responses, to support content-authentication, non-repudiation or other business cases. This is primarily relevant where the bundle may travel through multiple hops or via other mechanisms where HTTPS non-repudiation is insufficient.
   * - **FHIR Type:** `Signature`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private signature?: Signature | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid Bundle.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link BundleTypeEnum }
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
   * @see CodeSystem Enumeration: {@link BundleTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Bundle.type`;
      assertEnumCodeType<BundleTypeEnum>(enumType, BundleTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link BundleTypeEnum }
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
   * @see CodeSystem Enumeration: {@link BundleTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Bundle.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.bundleTypeEnum);
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
   * @see CodeSystem Enumeration: {@link BundleTypeEnum }
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
   * @see CodeSystem Enumeration: {@link BundleTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Bundle.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.bundleTypeEnum);
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
   * @returns the `timestamp` property value as a InstantType object if defined; else an empty InstantType object
   */
  public getTimestampElement(): InstantType {
    return this.timestamp ?? new InstantType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `timestamp` property.
   *
   * @param element - the `timestamp` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimestampElement(element: InstantType | undefined): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid Bundle.timestamp; Provided element is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
      this.timestamp = element;
    } else {
      this.timestamp = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timestamp` property exists and has a value; `false` otherwise
   */
  public hasTimestampElement(): boolean {
    return isDefined<InstantType>(this.timestamp) && !this.timestamp.isEmpty();
  }

  /**
   * @returns the `timestamp` property value as a fhirInstant if defined; else undefined
   */
  public getTimestamp(): fhirInstant | undefined {
    return this.timestamp?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `timestamp` property.
   *
   * @param value - the `timestamp` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimestamp(value: fhirInstant | undefined): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid Bundle.timestamp (${String(value)})`;
      this.timestamp = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    } else {
      this.timestamp = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timestamp` property exists and has a value; `false` otherwise
   */
  public hasTimestamp(): boolean {
    return this.hasTimestampElement();
  }

  /**
   * @returns the `total` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getTotalElement(): UnsignedIntType {
    return this.total ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `total` property.
   *
   * @param element - the `total` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTotalElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Bundle.total; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.total = element;
    } else {
      this.total = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `total` property exists and has a value; `false` otherwise
   */
  public hasTotalElement(): boolean {
    return isDefined<UnsignedIntType>(this.total) && !this.total.isEmpty();
  }

  /**
   * @returns the `total` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getTotal(): fhirUnsignedInt | undefined {
    return this.total?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `total` property.
   *
   * @param value - the `total` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTotal(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Bundle.total (${String(value)})`;
      this.total = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.total = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `total` property exists and has a value; `false` otherwise
   */
  public hasTotal(): boolean {
    return this.hasTotalElement();
  }

  /**
   * @returns the `link` property value as a BundleLinkComponent array
   */
  public getLink(): BundleLinkComponent[] {
    return this.link ?? ([] as BundleLinkComponent[]);
  }

  /**
   * Assigns the provided BundleLinkComponent array value to the `link` property.
   *
   * @param value - the `link` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLink(value: BundleLinkComponent[] | undefined): this {
    if (isDefinedList<BundleLinkComponent>(value)) {
      const optErrMsg = `Invalid Bundle.link; Provided value array has an element that is not an instance of BundleLinkComponent.`;
      assertFhirTypeList<BundleLinkComponent>(value, BundleLinkComponent, optErrMsg);
      this.link = value;
    } else {
      this.link = undefined;
    }
    return this;
  }

  /**
   * Add the provided BundleLinkComponent value to the `link` array property.
   *
   * @param value - the `link` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLink(value: BundleLinkComponent | undefined): this {
    if (isDefined<BundleLinkComponent>(value)) {
      const optErrMsg = `Invalid Bundle.link; Provided element is not an instance of BundleLinkComponent.`;
      assertFhirType<BundleLinkComponent>(value, BundleLinkComponent, optErrMsg);
      this.initLink();
      this.link?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `link` property exists and has a value; `false` otherwise
   */
  public hasLink(): boolean {
    return isDefinedList<BundleLinkComponent>(this.link) && this.link.some((item: BundleLinkComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `link` property
   */
  private initLink(): void {
    if(!this.hasLink()) {
      this.link = [] as BundleLinkComponent[];
    }
  }

  /**
   * @returns the `entry` property value as a BundleEntryComponent array
   */
  public getEntry(): BundleEntryComponent[] {
    return this.entry ?? ([] as BundleEntryComponent[]);
  }

  /**
   * Assigns the provided BundleEntryComponent array value to the `entry` property.
   *
   * @param value - the `entry` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEntry(value: BundleEntryComponent[] | undefined): this {
    if (isDefinedList<BundleEntryComponent>(value)) {
      const optErrMsg = `Invalid Bundle.entry; Provided value array has an element that is not an instance of BundleEntryComponent.`;
      assertFhirTypeList<BundleEntryComponent>(value, BundleEntryComponent, optErrMsg);
      this.entry = value;
    } else {
      this.entry = undefined;
    }
    return this;
  }

  /**
   * Add the provided BundleEntryComponent value to the `entry` array property.
   *
   * @param value - the `entry` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEntry(value: BundleEntryComponent | undefined): this {
    if (isDefined<BundleEntryComponent>(value)) {
      const optErrMsg = `Invalid Bundle.entry; Provided element is not an instance of BundleEntryComponent.`;
      assertFhirType<BundleEntryComponent>(value, BundleEntryComponent, optErrMsg);
      this.initEntry();
      this.entry?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `entry` property exists and has a value; `false` otherwise
   */
  public hasEntry(): boolean {
    return isDefinedList<BundleEntryComponent>(this.entry) && this.entry.some((item: BundleEntryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `entry` property
   */
  private initEntry(): void {
    if(!this.hasEntry()) {
      this.entry = [] as BundleEntryComponent[];
    }
  }

  /**
   * @returns the `signature` property value as a Signature object if defined; else an empty Signature object
   */
  public getSignature(): Signature {
    return this.signature ?? new Signature();
  }

  /**
   * Assigns the provided Signature object value to the `signature` property.
   *
   * @param value - the `signature` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSignature(value: Signature | undefined): this {
    if (isDefined<Signature>(value)) {
      const optErrMsg = `Invalid Bundle.signature; Provided element is not an instance of Signature.`;
      assertFhirType<Signature>(value, Signature, optErrMsg);
      this.signature = value;
    } else {
      this.signature = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `signature` property exists and has a value; `false` otherwise
   */
  public hasSignature(): boolean {
    return isDefined<Signature>(this.signature) && !this.signature.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Bundle';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.timestamp,
      this.total,
      this.link,
      this.entry,
      this.signature,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Bundle {
    const dest = new Bundle();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Bundle): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.timestamp = this.timestamp?.copy();
    dest.total = this.total?.copy();
    const linkList = copyListValues<BundleLinkComponent>(this.link);
    dest.link = linkList.length === 0 ? undefined : linkList;
    const entryList = copyListValues<BundleEntryComponent>(this.entry);
    dest.entry = entryList.length === 0 ? undefined : entryList;
    dest.signature = this.signature?.copy();
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
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasTimestampElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getTimestampElement(), 'timestamp', jsonObj);
    }

    if (this.hasTotalElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getTotalElement(), 'total', jsonObj);
    }

    if (this.hasLink()) {
      setFhirBackboneElementListJson(this.getLink(), 'link', jsonObj);
    }

    if (this.hasEntry()) {
      setFhirBackboneElementListJson(this.getEntry(), 'entry', jsonObj);
    }

    if (this.hasSignature()) {
      setFhirComplexJson(this.getSignature(), 'signature', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * BundleLinkComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Links related to this Bundle
 * - **Definition:** A series of links that provide context to this bundle.
 * - **Comment:** Both Bundle.link and Bundle.entry.link are defined to support providing additional context when Bundles are used (e.g. [HATEOAS](http://en.wikipedia.org/wiki/HATEOAS)).  Bundle.entry.link corresponds to links found in the HTTP header if the resource in the entry was [read](https://hl7.org/fhir/http.html#read) directly. This specification defines some specific uses of Bundle.link for [searching](https://hl7.org/fhir/search.html#conformance) and [paging](https://hl7.org/fhir/http.html#paging), but no specific uses for Bundle.entry.link, and no defined function in a transaction - the meaning is implementation specific.
 *
 * @category Data Models: Resource
 * @see [FHIR Bundle](http://hl7.org/fhir/StructureDefinition/Bundle)
 */
export class BundleLinkComponent extends BackboneElement implements IBackboneElement {
  constructor(relation: StringType | fhirString | null = null, url: UriType | fhirUri | null = null) {
    super();

    this.relation = null;
    if (isDefined<StringType | fhirString>(relation)) {
      if (relation instanceof PrimitiveType) {
        this.setRelationElement(relation);
      } else {
        this.setRelation(relation);
      }
    }

    this.url = null;
    if (isDefined<UriType | fhirUri>(url)) {
      if (url instanceof PrimitiveType) {
        this.setUrlElement(url);
      } else {
        this.setUrl(url);
      }
    }
  }

  /**
   * Parse the provided `BundleLinkComponent` JSON to instantiate the BundleLinkComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BundleLinkComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BundleLinkComponent
   * @returns BundleLinkComponent data model or undefined for `BundleLinkComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BundleLinkComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BundleLinkComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BundleLinkComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'relation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setRelation(null);
      } else {
        instance.setRelationElement(datatype);
      }
    } else {
      instance.setRelation(null);
    }

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setUrl(null);
      } else {
        instance.setUrlElement(datatype);
      }
    } else {
      instance.setUrl(null);
    }

    return instance;
  }

  /**
   * Bundle.link.relation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1
   * - **Definition:** A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private relation: StringType | null;

  /**
   * Bundle.link.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference details for the link
   * - **Definition:** The reference details for the link.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url: UriType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `relation` property value as a StringType object if defined; else an empty StringType object
   */
  public getRelationElement(): StringType {
    return this.relation ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `relation` property.
   *
   * @param element - the `relation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRelationElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Bundle.link.relation; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.relation = element;
    } else {
      this.relation = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `relation` property exists and has a value; `false` otherwise
   */
  public hasRelationElement(): boolean {
    return isDefined<StringType>(this.relation) && !this.relation.isEmpty();
  }

  /**
   * @returns the `relation` property value as a fhirString if defined; else null
   */
  public getRelation(): fhirString | null {
    if (this.relation?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.relation.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `relation` property.
   *
   * @param value - the `relation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRelation(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Bundle.link.relation (${String(value)})`;
      this.relation = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.relation = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `relation` property exists and has a value; `false` otherwise
   */
  public hasRelation(): boolean {
    return this.hasRelationElement();
  }

  /**
   * @returns the `url` property value as a UriType object if defined; else an empty UriType object
   */
  public getUrlElement(): UriType {
    return this.url ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `url` property.
   *
   * @param element - the `url` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrlElement(element: UriType | undefined | null): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Bundle.link.url; Provided value is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.url = element;
    } else {
      this.url = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrlElement(): boolean {
    return isDefined<UriType>(this.url) && !this.url.isEmpty();
  }

  /**
   * @returns the `url` property value as a fhirUri if defined; else null
   */
  public getUrl(): fhirUri | null {
    if (this.url?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.url.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `url` property.
   *
   * @param value - the `url` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrl(value: fhirUri | undefined | null): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Bundle.link.url (${String(value)})`;
      this.url = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.url = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrl(): boolean {
    return this.hasUrlElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Bundle.link';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.relation,
      this.url,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.relation, this.url, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BundleLinkComponent {
    const dest = new BundleLinkComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BundleLinkComponent): void {
    super.copyValues(dest);
    dest.relation = this.relation ? this.relation.copy() : null;
    dest.url = this.url ? this.url.copy() : null;
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

    if (this.hasRelationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getRelationElement(), 'relation', jsonObj);
    } else {
      jsonObj['relation'] = null;
    }

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUrlElement(), 'url', jsonObj);
    } else {
      jsonObj['url'] = null;
    }

    return jsonObj;
  }
}
/**
 * BundleEntryComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Entry in the bundle - will have a resource or information
 * - **Definition:** An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
 *
 * @category Data Models: Resource
 * @see [FHIR Bundle](http://hl7.org/fhir/StructureDefinition/Bundle)
 */
export class BundleEntryComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `BundleEntryComponent` JSON to instantiate the BundleEntryComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BundleEntryComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BundleEntryComponent
   * @returns BundleEntryComponent data model or undefined for `BundleEntryComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BundleEntryComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BundleEntryComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BundleEntryComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'link';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: BundleLinkComponent | undefined = BundleLinkComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addLink(component);
        }
      });
    }

    fieldName = 'fullUrl';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setFullUrlElement(datatype);
    }

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      const resource: IResource | undefined = fhirParser.parseInlineResource(classJsonObj[fieldName], sourceField);
      instance.setResource(resource);
    }

    fieldName = 'search';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: BundleEntrySearchComponent | undefined = BundleEntrySearchComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSearch(component);
    }

    fieldName = 'request';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: BundleEntryRequestComponent | undefined = BundleEntryRequestComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequest(component);
    }

    fieldName = 'response';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: BundleEntryResponseComponent | undefined = BundleEntryResponseComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setResponse(component);
    }

    return instance;
  }

  /**
   * Bundle.entry.link Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Links related to this entry
   * - **Definition:** A series of links that provide context to this entry.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private link?: BundleLinkComponent[] | undefined;

  /**
   * Bundle.entry.fullUrl Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** URI for resource (Absolute URL server address or URI for UUID/OID)
   * - **Definition:** The Absolute URL for the resource.  The fullUrl SHALL NOT disagree with the id in the resource - i.e. if the fullUrl is not a urn:uuid, the URL shall be version-independent URL consistent with the Resource.id. The fullUrl is a version independent reference to the resource. The fullUrl element SHALL have a value except that:  * fullUrl can be empty on a POST (although it does not need to when specifying a temporary id for reference in the bundle) * Results from operations might involve resources that are not identified.
   * - **Comment:** fullUrl might not be [unique in the context of a resource](https://hl7.org/fhir/bundle.html#bundle-unique). Note that since [FHIR resources do not need to be served through the FHIR API](https://hl7.org/fhir/references.html), the fullURL might be a URN or an absolute URL that does not end with the logical id of the resource (Resource.id). However, but if the fullUrl does look like a RESTful server URL (e.g. meets the [regex](https://hl7.org/fhir/references.html#regex), then the \'id\' portion of the fullUrl SHALL end with the Resource.id. Note that the fullUrl is not the same as the canonical URL - it\'s an absolute url for an endpoint serving the resource (these will happen to have the same value on the canonical server for the resource with the canonical URL).
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private fullUrl?: UriType | undefined;

  /**
   * Bundle.entry.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A resource in the bundle
   * - **Definition:** The Resource for the entry. The purpose/meaning of the resource is determined by the Bundle.type.
   * - **FHIR Type:** `Resource`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resource?: IResource | undefined;

  /**
   * Bundle.entry.search Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Search related information
   * - **Definition:** Information about the search process that lead to the creation of this entry.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private search?: BundleEntrySearchComponent | undefined;

  /**
   * Bundle.entry.request Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional execution information (transaction/batch/history)
   * - **Definition:** Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private request?: BundleEntryRequestComponent | undefined;

  /**
   * Bundle.entry.response Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Results of execution (transaction/batch/history)
   * - **Definition:** Indicates the results of processing the corresponding \'request\' entry in the batch or transaction being responded to or what the results of an operation where when returning history.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private response?: BundleEntryResponseComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `link` property value as a BundleLinkComponent array
   */
  public getLink(): BundleLinkComponent[] {
    return this.link ?? ([] as BundleLinkComponent[]);
  }

  /**
   * Assigns the provided BundleLinkComponent array value to the `link` property.
   *
   * @param value - the `link` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLink(value: BundleLinkComponent[] | undefined): this {
    if (isDefinedList<BundleLinkComponent>(value)) {
      const optErrMsg = `Invalid Bundle.entry.link; Provided value array has an element that is not an instance of BundleLinkComponent.`;
      assertFhirTypeList<BundleLinkComponent>(value, BundleLinkComponent, optErrMsg);
      this.link = value;
    } else {
      this.link = undefined;
    }
    return this;
  }

  /**
   * Add the provided BundleLinkComponent value to the `link` array property.
   *
   * @param value - the `link` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLink(value: BundleLinkComponent | undefined): this {
    if (isDefined<BundleLinkComponent>(value)) {
      const optErrMsg = `Invalid Bundle.entry.link; Provided element is not an instance of BundleLinkComponent.`;
      assertFhirType<BundleLinkComponent>(value, BundleLinkComponent, optErrMsg);
      this.initLink();
      this.link?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `link` property exists and has a value; `false` otherwise
   */
  public hasLink(): boolean {
    return isDefinedList<BundleLinkComponent>(this.link) && this.link.some((item: BundleLinkComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `link` property
   */
  private initLink(): void {
    if(!this.hasLink()) {
      this.link = [] as BundleLinkComponent[];
    }
  }

  /**
   * @returns the `fullUrl` property value as a UriType object if defined; else an empty UriType object
   */
  public getFullUrlElement(): UriType {
    return this.fullUrl ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `fullUrl` property.
   *
   * @param element - the `fullUrl` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFullUrlElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Bundle.entry.fullUrl; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.fullUrl = element;
    } else {
      this.fullUrl = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `fullUrl` property exists and has a value; `false` otherwise
   */
  public hasFullUrlElement(): boolean {
    return isDefined<UriType>(this.fullUrl) && !this.fullUrl.isEmpty();
  }

  /**
   * @returns the `fullUrl` property value as a fhirUri if defined; else undefined
   */
  public getFullUrl(): fhirUri | undefined {
    return this.fullUrl?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `fullUrl` property.
   *
   * @param value - the `fullUrl` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFullUrl(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Bundle.entry.fullUrl (${String(value)})`;
      this.fullUrl = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.fullUrl = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `fullUrl` property exists and has a value; `false` otherwise
   */
  public hasFullUrl(): boolean {
    return this.hasFullUrlElement();
  }

  /**
   * @returns the `resource` property value as a Resource object if defined; else undefined
   */
  public getResource(): IResource | undefined {
    return this.resource;
  }

  /**
   * Assigns the provided Resource object value to the `resource` property.
   *
   * @param value - the `resource` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid resource type
   */
  public setResource(value: IResource | undefined): this {
    if (isDefined<IResource>(value)) {
      const optErrMsg = `Invalid Bundle.entry.resource; Provided element is not an instance of Resource.`;
      assertFhirResourceType(value, optErrMsg);
      this.resource = value;
    } else {
      this.resource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return isDefined<IResource>(this.resource) && !this.resource.isEmpty();
  }

  /**
   * @returns the `search` property value as a BundleEntrySearchComponent object if defined; else an empty BundleEntrySearchComponent object
   */
  public getSearch(): BundleEntrySearchComponent {
    return this.search ?? new BundleEntrySearchComponent();
  }

  /**
   * Assigns the provided Search object value to the `search` property.
   *
   * @param value - the `search` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSearch(value: BundleEntrySearchComponent | undefined): this {
    if (isDefined<BundleEntrySearchComponent>(value)) {
      const optErrMsg = `Invalid Bundle.entry.search; Provided element is not an instance of BundleEntrySearchComponent.`;
      assertFhirType<BundleEntrySearchComponent>(value, BundleEntrySearchComponent, optErrMsg);
      this.search = value;
    } else {
      this.search = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `search` property exists and has a value; `false` otherwise
   */
  public hasSearch(): boolean {
    return isDefined<BundleEntrySearchComponent>(this.search) && !this.search.isEmpty();
  }

  /**
   * @returns the `request` property value as a BundleEntryRequestComponent object if defined; else an empty BundleEntryRequestComponent object
   */
  public getRequest(): BundleEntryRequestComponent {
    return this.request ?? new BundleEntryRequestComponent();
  }

  /**
   * Assigns the provided Request object value to the `request` property.
   *
   * @param value - the `request` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRequest(value: BundleEntryRequestComponent | undefined): this {
    if (isDefined<BundleEntryRequestComponent>(value)) {
      const optErrMsg = `Invalid Bundle.entry.request; Provided element is not an instance of BundleEntryRequestComponent.`;
      assertFhirType<BundleEntryRequestComponent>(value, BundleEntryRequestComponent, optErrMsg);
      this.request = value;
    } else {
      this.request = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `request` property exists and has a value; `false` otherwise
   */
  public hasRequest(): boolean {
    return isDefined<BundleEntryRequestComponent>(this.request) && !this.request.isEmpty();
  }

  /**
   * @returns the `response` property value as a BundleEntryResponseComponent object if defined; else an empty BundleEntryResponseComponent object
   */
  public getResponse(): BundleEntryResponseComponent {
    return this.response ?? new BundleEntryResponseComponent();
  }

  /**
   * Assigns the provided Response object value to the `response` property.
   *
   * @param value - the `response` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setResponse(value: BundleEntryResponseComponent | undefined): this {
    if (isDefined<BundleEntryResponseComponent>(value)) {
      const optErrMsg = `Invalid Bundle.entry.response; Provided element is not an instance of BundleEntryResponseComponent.`;
      assertFhirType<BundleEntryResponseComponent>(value, BundleEntryResponseComponent, optErrMsg);
      this.response = value;
    } else {
      this.response = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `response` property exists and has a value; `false` otherwise
   */
  public hasResponse(): boolean {
    return isDefined<BundleEntryResponseComponent>(this.response) && !this.response.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Bundle.entry';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.link,
      this.fullUrl,
      this.resource,
      this.search,
      this.request,
      this.response,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BundleEntryComponent {
    const dest = new BundleEntryComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BundleEntryComponent): void {
    super.copyValues(dest);
    const linkList = copyListValues<BundleLinkComponent>(this.link);
    dest.link = linkList.length === 0 ? undefined : linkList;
    dest.fullUrl = this.fullUrl?.copy();
    dest.resource = this.resource?.copy() as IResource;
    dest.search = this.search?.copy();
    dest.request = this.request?.copy();
    dest.response = this.response?.copy();
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

    if (this.hasLink()) {
      setFhirBackboneElementListJson(this.getLink(), 'link', jsonObj);
    }

    if (this.hasFullUrlElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getFullUrlElement(), 'fullUrl', jsonObj);
    }

    if (this.hasResource()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirResourceJson(this.getResource()!, 'resource', jsonObj);
    }

    if (this.hasSearch()) {
      setFhirBackboneElementJson(this.getSearch(), 'search', jsonObj);
    }

    if (this.hasRequest()) {
      setFhirBackboneElementJson(this.getRequest(), 'request', jsonObj);
    }

    if (this.hasResponse()) {
      setFhirBackboneElementJson(this.getResponse(), 'response', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * BundleEntrySearchComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Search related information
 * - **Definition:** Information about the search process that lead to the creation of this entry.
 *
 * @category Data Models: Resource
 * @see [FHIR Bundle](http://hl7.org/fhir/StructureDefinition/Bundle)
 */
export class BundleEntrySearchComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.searchEntryModeEnum = new SearchEntryModeEnum();
  }

  /**
   * Parse the provided `BundleEntrySearchComponent` JSON to instantiate the BundleEntrySearchComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BundleEntrySearchComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BundleEntrySearchComponent
   * @returns BundleEntrySearchComponent data model or undefined for `BundleEntrySearchComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BundleEntrySearchComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BundleEntrySearchComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BundleEntrySearchComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'mode';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setModeElement(datatype);
    }

    fieldName = 'score';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setScoreElement(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: SearchEntryMode
   *
   * @see {@link SearchEntryModeEnum }
   */
  private readonly searchEntryModeEnum: SearchEntryModeEnum;

  /**
   * Bundle.entry.search.mode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** match | include | outcome - why this is in the result set
   * - **Definition:** Why this entry is in the result set - whether it\'s included as a match or because of an _include requirement, or to convey information or warning information about the search process.
   * - **Comment:** There is only one mode. In some corner cases, a resource may be included because it is both a match and an include. In these circumstances, \'match\' takes precedence.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SearchEntryModeEnum }
   */
  private mode?: EnumCodeType | undefined;

  /**
   * Bundle.entry.search.score Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Search ranking (between 0 and 1)
   * - **Definition:** When searching, the server\'s search ranking score for the entry.
   * - **Comment:** Servers are not required to return a ranking score. 1 is most relevant, and 0 is least relevant. Often, search results are sorted by score, but the client may specify a different sort order. See [Patient Match](https://hl7.org/fhir/patient-operation-match.html) for the EMPI search which relates to this element.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private score?: DecimalType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `mode` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchEntryModeEnum }
   */
  public getModeEnumType(): EnumCodeType | undefined {
    return this.mode;
  }

  /**
   * Assigns the provided EnumCodeType value to the `mode` property.
   *
   * @param enumType - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchEntryModeEnum }
   */
  public setModeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Bundle.entry.search.mode';
      assertEnumCodeType<SearchEntryModeEnum>(enumType, SearchEntryModeEnum, errMsgPrefix);
      this.mode = enumType;
    } else {
      this.mode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasModeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.mode) && !this.mode.isEmpty() && this.mode.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `mode` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchEntryModeEnum }
   */
  public getModeElement(): CodeType | undefined {
    if (this.mode === undefined) {
      return undefined;
    }
    return this.mode as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `mode` property.
   *
   * @param element - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchEntryModeEnum }
   */
  public setModeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Bundle.entry.search.mode; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.mode = new EnumCodeType(element, this.searchEntryModeEnum);
    } else {
      this.mode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasModeElement(): boolean {
    return this.hasModeEnumType();
  }

  /**
   * @returns the `mode` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchEntryModeEnum }
   */
  public getMode(): fhirCode | undefined {
    if (this.mode === undefined) {
      return undefined;
    }
    return this.mode.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `mode` property.
   *
   * @param value - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SearchEntryModeEnum }
   */
  public setMode(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Bundle.entry.search.mode; Provided value is not an instance of fhirCode.`;
      this.mode = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.searchEntryModeEnum);
    } else {
      this.mode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasMode(): boolean {
    return this.hasModeEnumType();
  }

  /**
   * @returns the `score` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getScoreElement(): DecimalType {
    return this.score ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `score` property.
   *
   * @param element - the `score` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setScoreElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid Bundle.entry.search.score; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.score = element;
    } else {
      this.score = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `score` property exists and has a value; `false` otherwise
   */
  public hasScoreElement(): boolean {
    return isDefined<DecimalType>(this.score) && !this.score.isEmpty();
  }

  /**
   * @returns the `score` property value as a fhirDecimal if defined; else undefined
   */
  public getScore(): fhirDecimal | undefined {
    return this.score?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `score` property.
   *
   * @param value - the `score` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setScore(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid Bundle.entry.search.score (${String(value)})`;
      this.score = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.score = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `score` property exists and has a value; `false` otherwise
   */
  public hasScore(): boolean {
    return this.hasScoreElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Bundle.entry.search';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.mode,
      this.score,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BundleEntrySearchComponent {
    const dest = new BundleEntrySearchComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BundleEntrySearchComponent): void {
    super.copyValues(dest);
    dest.mode = this.mode?.copy();
    dest.score = this.score?.copy();
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

    if (this.hasModeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getModeElement()!, 'mode', jsonObj);
    }

    if (this.hasScoreElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getScoreElement(), 'score', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * BundleEntryRequestComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Additional execution information (transaction/batch/history)
 * - **Definition:** Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
 *
 * @category Data Models: Resource
 * @see [FHIR Bundle](http://hl7.org/fhir/StructureDefinition/Bundle)
 */
export class BundleEntryRequestComponent extends BackboneElement implements IBackboneElement {
  constructor(method: EnumCodeType | CodeType | fhirCode | null = null, url: UriType | fhirUri | null = null) {
    super();

    this.httpVerbEnum = new HttpVerbEnum();

    this.method = constructorCodeValueAsEnumCodeType<HttpVerbEnum>(
      method,
      HttpVerbEnum,
      this.httpVerbEnum,
      'Bundle.entry.request.method',
    );

    this.url = null;
    if (isDefined<UriType | fhirUri>(url)) {
      if (url instanceof PrimitiveType) {
        this.setUrlElement(url);
      } else {
        this.setUrl(url);
      }
    }
  }

  /**
   * Parse the provided `BundleEntryRequestComponent` JSON to instantiate the BundleEntryRequestComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BundleEntryRequestComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BundleEntryRequestComponent
   * @returns BundleEntryRequestComponent data model or undefined for `BundleEntryRequestComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BundleEntryRequestComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BundleEntryRequestComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BundleEntryRequestComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'method';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setMethod(null);
      } else {
        instance.setMethodElement(datatype);
      }
    } else {
      instance.setMethod(null);
    }

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setUrl(null);
      } else {
        instance.setUrlElement(datatype);
      }
    } else {
      instance.setUrl(null);
    }

    fieldName = 'ifNoneMatch';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setIfNoneMatchElement(datatype);
    }

    fieldName = 'ifModifiedSince';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      instance.setIfModifiedSinceElement(datatype);
    }

    fieldName = 'ifMatch';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setIfMatchElement(datatype);
    }

    fieldName = 'ifNoneExist';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setIfNoneExistElement(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: HttpVerb
   *
   * @see {@link HttpVerbEnum }
   */
  private readonly httpVerbEnum: HttpVerbEnum;

  /**
   * Bundle.entry.request.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** GET | HEAD | POST | PUT | DELETE | PATCH
   * - **Definition:** In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates the HTTP action that occurred.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link HttpVerbEnum }
   */
  private method: EnumCodeType | null;

  /**
   * Bundle.entry.request.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** URL for HTTP equivalent of this entry
   * - **Definition:** The URL for this entry, relative to the root (the address to which the request is posted).
   * - **Comment:** E.g. for a Patient Create, the method would be "POST" and the URL would be "Patient". For a Patient Update, the method would be PUT and the URL would be "Patient/[id]".
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url: UriType | null;

  /**
   * Bundle.entry.request.ifNoneMatch Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For managing cache currency
   * - **Definition:** If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](https://hl7.org/fhir/http.html#cread).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private ifNoneMatch?: StringType | undefined;

  /**
   * Bundle.entry.request.ifModifiedSince Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For managing cache currency
   * - **Definition:** Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](https://hl7.org/fhir/http.html#cread).
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private ifModifiedSince?: InstantType | undefined;

  /**
   * Bundle.entry.request.ifMatch Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For managing update contention
   * - **Definition:** Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](https://hl7.org/fhir/http.html#concurrency).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private ifMatch?: StringType | undefined;

  /**
   * Bundle.entry.request.ifNoneExist Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For conditional creates
   * - **Definition:** Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](https://hl7.org/fhir/http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private ifNoneExist?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `method` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link HttpVerbEnum }
   */
  public getMethodEnumType(): EnumCodeType | null {
    return this.method;
  }

  /**
   * Assigns the provided EnumCodeType value to the `method` property.
   *
   * @param enumType - the `method` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link HttpVerbEnum }
   */
  public setMethodEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Bundle.entry.request.method`;
      assertEnumCodeType<HttpVerbEnum>(enumType, HttpVerbEnum, errMsgPrefix);
      this.method = enumType;
    } else {
      this.method = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `method` property exists and has a value; `false` otherwise
   */
  public hasMethodEnumType(): boolean {
    return isDefined<EnumCodeType>(this.method) && !this.method.isEmpty() && this.method.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `method` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link HttpVerbEnum }
   */
  public getMethodElement(): CodeType | null {
    if (this.method === null) {
      return null;
    }
    return this.method as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `method` property.
   *
   * @param element - the `method` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link HttpVerbEnum }
   */
  public setMethodElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Bundle.entry.request.method; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.method = new EnumCodeType(element, this.httpVerbEnum);
    } else {
      this.method = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `method` property exists and has a value; `false` otherwise
   */
  public hasMethodElement(): boolean {
    return this.hasMethodEnumType();
  }

  /**
   * @returns the `method` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link HttpVerbEnum }
   */
  public getMethod(): fhirCode | null {
    if (this.method === null) {
      return null;
    }
    return this.method.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `method` property.
   *
   * @param value - the `method` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link HttpVerbEnum }
   */
  public setMethod(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Bundle.entry.request.method (${String(value)})`;
      this.method = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.httpVerbEnum);
    } else {
      this.method = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `method` property exists and has a value; `false` otherwise
   */
  public hasMethod(): boolean {
    return this.hasMethodEnumType();
  }

  /**
   * @returns the `url` property value as a UriType object if defined; else an empty UriType object
   */
  public getUrlElement(): UriType {
    return this.url ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `url` property.
   *
   * @param element - the `url` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrlElement(element: UriType | undefined | null): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Bundle.entry.request.url; Provided value is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.url = element;
    } else {
      this.url = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrlElement(): boolean {
    return isDefined<UriType>(this.url) && !this.url.isEmpty();
  }

  /**
   * @returns the `url` property value as a fhirUri if defined; else null
   */
  public getUrl(): fhirUri | null {
    if (this.url?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.url.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `url` property.
   *
   * @param value - the `url` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrl(value: fhirUri | undefined | null): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Bundle.entry.request.url (${String(value)})`;
      this.url = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.url = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrl(): boolean {
    return this.hasUrlElement();
  }

  /**
   * @returns the `ifNoneMatch` property value as a StringType object if defined; else an empty StringType object
   */
  public getIfNoneMatchElement(): StringType {
    return this.ifNoneMatch ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `ifNoneMatch` property.
   *
   * @param element - the `ifNoneMatch` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIfNoneMatchElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Bundle.entry.request.ifNoneMatch; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.ifNoneMatch = element;
    } else {
      this.ifNoneMatch = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ifNoneMatch` property exists and has a value; `false` otherwise
   */
  public hasIfNoneMatchElement(): boolean {
    return isDefined<StringType>(this.ifNoneMatch) && !this.ifNoneMatch.isEmpty();
  }

  /**
   * @returns the `ifNoneMatch` property value as a fhirString if defined; else undefined
   */
  public getIfNoneMatch(): fhirString | undefined {
    return this.ifNoneMatch?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `ifNoneMatch` property.
   *
   * @param value - the `ifNoneMatch` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIfNoneMatch(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Bundle.entry.request.ifNoneMatch (${String(value)})`;
      this.ifNoneMatch = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.ifNoneMatch = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ifNoneMatch` property exists and has a value; `false` otherwise
   */
  public hasIfNoneMatch(): boolean {
    return this.hasIfNoneMatchElement();
  }

  /**
   * @returns the `ifModifiedSince` property value as a InstantType object if defined; else an empty InstantType object
   */
  public getIfModifiedSinceElement(): InstantType {
    return this.ifModifiedSince ?? new InstantType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `ifModifiedSince` property.
   *
   * @param element - the `ifModifiedSince` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIfModifiedSinceElement(element: InstantType | undefined): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid Bundle.entry.request.ifModifiedSince; Provided element is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
      this.ifModifiedSince = element;
    } else {
      this.ifModifiedSince = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ifModifiedSince` property exists and has a value; `false` otherwise
   */
  public hasIfModifiedSinceElement(): boolean {
    return isDefined<InstantType>(this.ifModifiedSince) && !this.ifModifiedSince.isEmpty();
  }

  /**
   * @returns the `ifModifiedSince` property value as a fhirInstant if defined; else undefined
   */
  public getIfModifiedSince(): fhirInstant | undefined {
    return this.ifModifiedSince?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `ifModifiedSince` property.
   *
   * @param value - the `ifModifiedSince` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIfModifiedSince(value: fhirInstant | undefined): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid Bundle.entry.request.ifModifiedSince (${String(value)})`;
      this.ifModifiedSince = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    } else {
      this.ifModifiedSince = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ifModifiedSince` property exists and has a value; `false` otherwise
   */
  public hasIfModifiedSince(): boolean {
    return this.hasIfModifiedSinceElement();
  }

  /**
   * @returns the `ifMatch` property value as a StringType object if defined; else an empty StringType object
   */
  public getIfMatchElement(): StringType {
    return this.ifMatch ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `ifMatch` property.
   *
   * @param element - the `ifMatch` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIfMatchElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Bundle.entry.request.ifMatch; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.ifMatch = element;
    } else {
      this.ifMatch = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ifMatch` property exists and has a value; `false` otherwise
   */
  public hasIfMatchElement(): boolean {
    return isDefined<StringType>(this.ifMatch) && !this.ifMatch.isEmpty();
  }

  /**
   * @returns the `ifMatch` property value as a fhirString if defined; else undefined
   */
  public getIfMatch(): fhirString | undefined {
    return this.ifMatch?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `ifMatch` property.
   *
   * @param value - the `ifMatch` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIfMatch(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Bundle.entry.request.ifMatch (${String(value)})`;
      this.ifMatch = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.ifMatch = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ifMatch` property exists and has a value; `false` otherwise
   */
  public hasIfMatch(): boolean {
    return this.hasIfMatchElement();
  }

  /**
   * @returns the `ifNoneExist` property value as a StringType object if defined; else an empty StringType object
   */
  public getIfNoneExistElement(): StringType {
    return this.ifNoneExist ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `ifNoneExist` property.
   *
   * @param element - the `ifNoneExist` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIfNoneExistElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Bundle.entry.request.ifNoneExist; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.ifNoneExist = element;
    } else {
      this.ifNoneExist = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ifNoneExist` property exists and has a value; `false` otherwise
   */
  public hasIfNoneExistElement(): boolean {
    return isDefined<StringType>(this.ifNoneExist) && !this.ifNoneExist.isEmpty();
  }

  /**
   * @returns the `ifNoneExist` property value as a fhirString if defined; else undefined
   */
  public getIfNoneExist(): fhirString | undefined {
    return this.ifNoneExist?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `ifNoneExist` property.
   *
   * @param value - the `ifNoneExist` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIfNoneExist(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Bundle.entry.request.ifNoneExist (${String(value)})`;
      this.ifNoneExist = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.ifNoneExist = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ifNoneExist` property exists and has a value; `false` otherwise
   */
  public hasIfNoneExist(): boolean {
    return this.hasIfNoneExistElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Bundle.entry.request';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.method,
      this.url,
      this.ifNoneMatch,
      this.ifModifiedSince,
      this.ifMatch,
      this.ifNoneExist,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.method, this.url, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BundleEntryRequestComponent {
    const dest = new BundleEntryRequestComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BundleEntryRequestComponent): void {
    super.copyValues(dest);
    dest.method = this.method ? this.method.copy() : null;
    dest.url = this.url ? this.url.copy() : null;
    dest.ifNoneMatch = this.ifNoneMatch?.copy();
    dest.ifModifiedSince = this.ifModifiedSince?.copy();
    dest.ifMatch = this.ifMatch?.copy();
    dest.ifNoneExist = this.ifNoneExist?.copy();
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

    if (this.hasMethodElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getMethodElement()!, 'method', jsonObj);
    } else {
      jsonObj['method'] = null;
    }

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUrlElement(), 'url', jsonObj);
    } else {
      jsonObj['url'] = null;
    }

    if (this.hasIfNoneMatchElement()) {
      setFhirPrimitiveJson<fhirString>(this.getIfNoneMatchElement(), 'ifNoneMatch', jsonObj);
    }

    if (this.hasIfModifiedSinceElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getIfModifiedSinceElement(), 'ifModifiedSince', jsonObj);
    }

    if (this.hasIfMatchElement()) {
      setFhirPrimitiveJson<fhirString>(this.getIfMatchElement(), 'ifMatch', jsonObj);
    }

    if (this.hasIfNoneExistElement()) {
      setFhirPrimitiveJson<fhirString>(this.getIfNoneExistElement(), 'ifNoneExist', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * BundleEntryResponseComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Results of execution (transaction/batch/history)
 * - **Definition:** Indicates the results of processing the corresponding \'request\' entry in the batch or transaction being responded to or what the results of an operation where when returning history.
 *
 * @category Data Models: Resource
 * @see [FHIR Bundle](http://hl7.org/fhir/StructureDefinition/Bundle)
 */
export class BundleEntryResponseComponent extends BackboneElement implements IBackboneElement {
  constructor(status: StringType | fhirString | null = null) {
    super();

    this.status = null;
    if (isDefined<StringType | fhirString>(status)) {
      if (status instanceof PrimitiveType) {
        this.setStatusElement(status);
      } else {
        this.setStatus(status);
      }
    }
  }

  /**
   * Parse the provided `BundleEntryResponseComponent` JSON to instantiate the BundleEntryResponseComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `BundleEntryResponseComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to BundleEntryResponseComponent
   * @returns BundleEntryResponseComponent data model or undefined for `BundleEntryResponseComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): BundleEntryResponseComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'BundleEntryResponseComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new BundleEntryResponseComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setStatus(null);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      instance.setStatus(null);
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setLocationElement(datatype);
    }

    fieldName = 'etag';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setEtagElement(datatype);
    }

    fieldName = 'lastModified';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      instance.setLastModifiedElement(datatype);
    }

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      const outcome: IResource | undefined = fhirParser.parseInlineResource(classJsonObj[fieldName], sourceField);
      instance.setOutcome(outcome);
    }

    return instance;
  }

  /**
   * Bundle.entry.response.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Status response code (text optional)
   * - **Definition:** The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status: StringType | null;

  /**
   * Bundle.entry.response.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The location (if the operation returns a location)
   * - **Definition:** The location header created by processing this operation, populated if the operation returns a location.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private location?: UriType | undefined;

  /**
   * Bundle.entry.response.etag Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The Etag for the resource (if relevant)
   * - **Definition:** The Etag for the resource, if the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](https://hl7.org/fhir/http.html#versioning) and [Managing Resource Contention](https://hl7.org/fhir/http.html#concurrency)).
   * - **Comment:** Etags match the Resource.meta.versionId. The ETag has to match the version id in the header if a resource is included.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private etag?: StringType | undefined;

  /**
   * Bundle.entry.response.lastModified Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Server\'s date time modified
   * - **Definition:** The date/time that the resource was modified on the server.
   * - **Comment:** This has to match the same time in the meta header (meta.lastUpdated) if a resource is included.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private lastModified?: InstantType | undefined;

  /**
   * Bundle.entry.response.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** OperationOutcome with hints and warnings (for batch/transaction)
   * - **Definition:** An OperationOutcome containing hints and warnings produced as part of processing this entry in a batch or transaction.
   * - **Comment:** For a POST/PUT operation, this is the equivalent outcome that would be returned for prefer = operationoutcome - except that the resource is always returned whether or not the outcome is returned. This outcome is not used for error responses in batch/transaction, only for hints and warnings. In a batch operation, the error will be in Bundle.entry.response, and for transaction, there will be a single OperationOutcome instead of a bundle in the case of an error.
   * - **FHIR Type:** `Resource`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private outcome?: IResource | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `status` property value as a StringType object if defined; else an empty StringType object
   */
  public getStatusElement(): StringType {
    return this.status ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `status` property.
   *
   * @param element - the `status` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatusElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Bundle.entry.response.status; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.status = element;
    } else {
      this.status = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatusElement(): boolean {
    return isDefined<StringType>(this.status) && !this.status.isEmpty();
  }

  /**
   * @returns the `status` property value as a fhirString if defined; else null
   */
  public getStatus(): fhirString | null {
    if (this.status?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.status.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `status` property.
   *
   * @param value - the `status` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStatus(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Bundle.entry.response.status (${String(value)})`;
      this.status = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.status = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusElement();
  }

  /**
   * @returns the `location` property value as a UriType object if defined; else an empty UriType object
   */
  public getLocationElement(): UriType {
    return this.location ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `location` property.
   *
   * @param element - the `location` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLocationElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Bundle.entry.response.location; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.location = element;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocationElement(): boolean {
    return isDefined<UriType>(this.location) && !this.location.isEmpty();
  }

  /**
   * @returns the `location` property value as a fhirUri if defined; else undefined
   */
  public getLocation(): fhirUri | undefined {
    return this.location?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `location` property.
   *
   * @param value - the `location` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLocation(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Bundle.entry.response.location (${String(value)})`;
      this.location = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return this.hasLocationElement();
  }

  /**
   * @returns the `etag` property value as a StringType object if defined; else an empty StringType object
   */
  public getEtagElement(): StringType {
    return this.etag ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `etag` property.
   *
   * @param element - the `etag` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEtagElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Bundle.entry.response.etag; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.etag = element;
    } else {
      this.etag = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `etag` property exists and has a value; `false` otherwise
   */
  public hasEtagElement(): boolean {
    return isDefined<StringType>(this.etag) && !this.etag.isEmpty();
  }

  /**
   * @returns the `etag` property value as a fhirString if defined; else undefined
   */
  public getEtag(): fhirString | undefined {
    return this.etag?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `etag` property.
   *
   * @param value - the `etag` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEtag(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Bundle.entry.response.etag (${String(value)})`;
      this.etag = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.etag = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `etag` property exists and has a value; `false` otherwise
   */
  public hasEtag(): boolean {
    return this.hasEtagElement();
  }

  /**
   * @returns the `lastModified` property value as a InstantType object if defined; else an empty InstantType object
   */
  public getLastModifiedElement(): InstantType {
    return this.lastModified ?? new InstantType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lastModified` property.
   *
   * @param element - the `lastModified` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastModifiedElement(element: InstantType | undefined): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid Bundle.entry.response.lastModified; Provided element is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
      this.lastModified = element;
    } else {
      this.lastModified = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastModified` property exists and has a value; `false` otherwise
   */
  public hasLastModifiedElement(): boolean {
    return isDefined<InstantType>(this.lastModified) && !this.lastModified.isEmpty();
  }

  /**
   * @returns the `lastModified` property value as a fhirInstant if defined; else undefined
   */
  public getLastModified(): fhirInstant | undefined {
    return this.lastModified?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lastModified` property.
   *
   * @param value - the `lastModified` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastModified(value: fhirInstant | undefined): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid Bundle.entry.response.lastModified (${String(value)})`;
      this.lastModified = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    } else {
      this.lastModified = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastModified` property exists and has a value; `false` otherwise
   */
  public hasLastModified(): boolean {
    return this.hasLastModifiedElement();
  }

  /**
   * @returns the `outcome` property value as a Resource object if defined; else undefined
   */
  public getOutcome(): IResource | undefined {
    return this.outcome;
  }

  /**
   * Assigns the provided Resource object value to the `outcome` property.
   *
   * @param value - the `outcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid resource type
   */
  public setOutcome(value: IResource | undefined): this {
    if (isDefined<IResource>(value)) {
      const optErrMsg = `Invalid Bundle.entry.response.outcome; Provided element is not an instance of Resource.`;
      assertFhirResourceType(value, optErrMsg);
      this.outcome = value;
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcome(): boolean {
    return isDefined<IResource>(this.outcome) && !this.outcome.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Bundle.entry.response';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.status,
      this.location,
      this.etag,
      this.lastModified,
      this.outcome,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): BundleEntryResponseComponent {
    const dest = new BundleEntryResponseComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: BundleEntryResponseComponent): void {
    super.copyValues(dest);
    dest.status = this.status ? this.status.copy() : null;
    dest.location = this.location?.copy();
    dest.etag = this.etag?.copy();
    dest.lastModified = this.lastModified?.copy();
    dest.outcome = this.outcome?.copy() as IResource;
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

    if (this.hasStatusElement()) {
      setFhirPrimitiveJson<fhirString>(this.getStatusElement(), 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasLocationElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getLocationElement(), 'location', jsonObj);
    }

    if (this.hasEtagElement()) {
      setFhirPrimitiveJson<fhirString>(this.getEtagElement(), 'etag', jsonObj);
    }

    if (this.hasLastModifiedElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getLastModifiedElement(), 'lastModified', jsonObj);
    }

    if (this.hasOutcome()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirResourceJson(this.getOutcome()!, 'outcome', jsonObj);
    }

    return jsonObj;
  }
}
