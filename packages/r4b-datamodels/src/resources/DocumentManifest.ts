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
 * DocumentManifest Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/DocumentManifest
 * StructureDefinition.name: DocumentManifest
 * StructureDefinition.description: A collection of documents compiled for a purpose together with metadata that applies to the collection.
 * StructureDefinition.fhirVersion: 4.3.0
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
  StringType,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
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
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { DocumentReferenceStatusEnum } from '../code-systems/DocumentReferenceStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * DocumentManifest Class
 *
 * @remarks
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
 *
 * **FHIR Specification**
 * - **Short:** A list that defines a set of documents
 * - **Definition:** A collection of documents compiled for a purpose together with metadata that applies to the collection.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR DocumentManifest](http://hl7.org/fhir/StructureDefinition/DocumentManifest)
 */
export class DocumentManifest extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, content: Reference[] | null = null) {
    super();

    this.documentReferenceStatusEnum = new DocumentReferenceStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<DocumentReferenceStatusEnum>(
      status,
      DocumentReferenceStatusEnum,
      this.documentReferenceStatusEnum,
      'DocumentManifest.status',
    );

    this.content = null;
    if (isDefinedList<Reference>(content)) {
      this.setContent(content);
    }
  }

  /**
   * Parse the provided `DocumentManifest` JSON to instantiate the DocumentManifest data model.
   *
   * @param sourceJson - JSON representing FHIR `DocumentManifest`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DocumentManifest
   * @returns DocumentManifest data model or undefined for `DocumentManifest`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): DocumentManifest | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DocumentManifest';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DocumentManifest();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'DocumentManifest');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'masterIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMasterIdentifier(datatype);
    }

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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'created';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setCreatedElement(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAuthor(datatype);
        }
      });
  }

    fieldName = 'recipient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRecipient(datatype);
        }
      });
  }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setSourceElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'content';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype === undefined) {
          instance.setContent(null);
        } else {
          instance.addContent(datatype);
        }
      });
    } else {
      instance.setContent(null);
    }

    fieldName = 'related';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DocumentManifestRelatedComponent | undefined = DocumentManifestRelatedComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRelated(component);
        }
      });
    }

    return instance;
  }

  /**
   * DocumentManifest.masterIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique Identifier for the set of documents
   * - **Definition:** A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private masterIdentifier?: Identifier | undefined;

  /**
   * DocumentManifest.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Other identifiers for the manifest
   * - **Definition:** Other identifiers associated with the document manifest, including version independent  identifiers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: DocumentReferenceStatus
   *
   * @see {@link DocumentReferenceStatusEnum }
   */
  private readonly documentReferenceStatusEnum: DocumentReferenceStatusEnum;

  /**
   * DocumentManifest.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** current | superseded | entered-in-error
   * - **Definition:** The status of this document manifest.
   * - **Comment:** This element is labeled as a modifier because the status contains the codes that mark the manifest as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link DocumentReferenceStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * DocumentManifest.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of document set
   * - **Definition:** The code specifying the type of clinical activity that resulted in placing the associated content into the DocumentManifest.
   * - **Comment:** Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * DocumentManifest.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The subject of the set of documents
   * - **Definition:** Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * DocumentManifest.created Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When this document manifest created
   * - **Definition:** When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).
   * - **Comment:** Creation time is used for tracking, organizing versions and searching. This is the creation time of the document set, not the documents on which it is based.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private created?: DateTimeType | undefined;

  /**
   * DocumentManifest.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who and/or what authored the DocumentManifest
   * - **Definition:** Identifies who is the author of the manifest. Manifest author is not necessarly the author of the references included.
   * - **Comment:** Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author?: Reference[] | undefined;

  /**
   * DocumentManifest.recipient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended to get notified about this set of documents
   * - **Definition:** A patient, practitioner, or organization for which this set of documents is intended.
   * - **Comment:** How the recipient receives the document set or is notified of it is up to the implementation. This element is just a statement of intent. If the recipient is a person, and it is not known whether the person is a patient or a practitioner, RelatedPerson would be the default choice.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recipient?: Reference[] | undefined;

  /**
   * DocumentManifest.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The source system/application/software
   * - **Definition:** Identifies the source system, application, or software that produced the document manifest.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private source?: UriType | undefined;

  /**
   * DocumentManifest.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human-readable description (title)
   * - **Definition:** Human-readable description of the source document. This is sometimes known as the "title".
   * - **Comment:** What the document is about, rather than a terse summary of the document. It is commonly the case that records do not have a title and are collectively referred to by the display name of Record code (e.g. a "consultation" or "progress note").
   * - **Requirements:** Helps humans to assess whether the document is of interest.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * DocumentManifest.content Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Items in manifest
   * - **Definition:** The list of Resources that consist of the parts of this manifest.
   * - **Comment:** When used for XDS the intended focus of the DocumentManifest is for the reference to target to be a set of DocumentReference Resources. The reference is to "Any" to support EN 13606 usage, where an extract is DocumentManifest that references  List and Composition resources.
   * - **Requirements:** Any Resources are allowed to be grouped in a Manifest. The manifest brings context to the group.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private content: Reference[] | null;

  /**
   * DocumentManifest.related Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Related things
   * - **Definition:** Related identifiers or resources associated with the DocumentManifest.
   * - **Comment:** May be identifiers or resources that caused the DocumentManifest to be created.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private related?: DocumentManifestRelatedComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `masterIdentifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getMasterIdentifier(): Identifier {
    return this.masterIdentifier ?? new Identifier();
  }

  /**
   * Assigns the provided MasterIdentifier object value to the `masterIdentifier` property.
   *
   * @param value - the `masterIdentifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMasterIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid DocumentManifest.masterIdentifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.masterIdentifier = value;
    } else {
      this.masterIdentifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `masterIdentifier` property exists and has a value; `false` otherwise
   */
  public hasMasterIdentifier(): boolean {
    return isDefined<Identifier>(this.masterIdentifier) && !this.masterIdentifier.isEmpty();
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
      const optErrMsg = `Invalid DocumentManifest.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid DocumentManifest.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link DocumentReferenceStatusEnum }
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
   * @see CodeSystem Enumeration: {@link DocumentReferenceStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid DocumentManifest.status`;
      assertEnumCodeType<DocumentReferenceStatusEnum>(enumType, DocumentReferenceStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link DocumentReferenceStatusEnum }
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
   * @see CodeSystem Enumeration: {@link DocumentReferenceStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DocumentManifest.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.documentReferenceStatusEnum);
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
   * @see CodeSystem Enumeration: {@link DocumentReferenceStatusEnum }
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
   * @see CodeSystem Enumeration: {@link DocumentReferenceStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DocumentManifest.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.documentReferenceStatusEnum);
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
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DocumentManifest.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('DocumentManifest.subject', ['Patient','Practitioner','Group','Device',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentManifest.subject', [
    'Patient',
  
    'Practitioner',
  
    'Group',
  
    'Device',
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
   * @returns the `created` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getCreatedElement(): DateTimeType {
    return this.created ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `created` property.
   *
   * @param element - the `created` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreatedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid DocumentManifest.created; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.created = element;
    } else {
      this.created = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `created` property exists and has a value; `false` otherwise
   */
  public hasCreatedElement(): boolean {
    return isDefined<DateTimeType>(this.created) && !this.created.isEmpty();
  }

  /**
   * @returns the `created` property value as a fhirDateTime if defined; else undefined
   */
  public getCreated(): fhirDateTime | undefined {
    return this.created?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `created` property.
   *
   * @param value - the `created` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCreated(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid DocumentManifest.created (${String(value)})`;
      this.created = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.created = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `created` property exists and has a value; `false` otherwise
   */
  public hasCreated(): boolean {
    return this.hasCreatedElement();
  }

  /**
   * @returns the `author` property value as a Reference array
   */
  public getAuthor(): Reference[] {
    return this.author ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `author` property.
   *
   * @decorator `@ReferenceTargets('DocumentManifest.author', ['Practitioner','PractitionerRole','Organization','Device','Patient','RelatedPerson',])`
   *
   * @param value - the `author` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentManifest.author', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Device',
  
    'Patient',
  
    'RelatedPerson',
  ])
  public setAuthor(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.author = value;
    } else {
      this.author = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `author` array property.
   *
   * @decorator `@ReferenceTargets('DocumentManifest.author', ['Practitioner','PractitionerRole','Organization','Device','Patient','RelatedPerson',])`
   *
   * @param value - the `author` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentManifest.author', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Device',
  
    'Patient',
  
    'RelatedPerson',
  ])
  public addAuthor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAuthor();
      this.author?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `author` property exists and has a value; `false` otherwise
   */
  public hasAuthor(): boolean {
    return isDefinedList<Reference>(this.author) && this.author.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `author` property
   */
  private initAuthor(): void {
    if (!this.hasAuthor()) {
      this.author = [] as Reference[];
    }
  }

  /**
   * @returns the `recipient` property value as a Reference array
   */
  public getRecipient(): Reference[] {
    return this.recipient ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `recipient` property.
   *
   * @decorator `@ReferenceTargets('DocumentManifest.recipient', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Organization',])`
   *
   * @param value - the `recipient` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentManifest.recipient', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Organization',
  ])
  public setRecipient(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.recipient = value;
    } else {
      this.recipient = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `recipient` array property.
   *
   * @decorator `@ReferenceTargets('DocumentManifest.recipient', ['Patient','Practitioner','PractitionerRole','RelatedPerson','Organization',])`
   *
   * @param value - the `recipient` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentManifest.recipient', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  
    'Organization',
  ])
  public addRecipient(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRecipient();
      this.recipient?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `recipient` property exists and has a value; `false` otherwise
   */
  public hasRecipient(): boolean {
    return isDefinedList<Reference>(this.recipient) && this.recipient.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `recipient` property
   */
  private initRecipient(): void {
    if (!this.hasRecipient()) {
      this.recipient = [] as Reference[];
    }
  }

  /**
   * @returns the `source` property value as a UriType object if defined; else an empty UriType object
   */
  public getSourceElement(): UriType {
    return this.source ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `source` property.
   *
   * @param element - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid DocumentManifest.source; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.source = element;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSourceElement(): boolean {
    return isDefined<UriType>(this.source) && !this.source.isEmpty();
  }

  /**
   * @returns the `source` property value as a fhirUri if defined; else undefined
   */
  public getSource(): fhirUri | undefined {
    return this.source?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `source` property.
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSource(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid DocumentManifest.source (${String(value)})`;
      this.source = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return this.hasSourceElement();
  }

  /**
   * @returns the `description` property value as a StringType object if defined; else an empty StringType object
   */
  public getDescriptionElement(): StringType {
    return this.description ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid DocumentManifest.description; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.description = element;
    } else {
      this.description = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescriptionElement(): boolean {
    return isDefined<StringType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirString if defined; else undefined
   */
  public getDescription(): fhirString | undefined {
    return this.description?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid DocumentManifest.description (${String(value)})`;
      this.description = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.description = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescription(): boolean {
    return this.hasDescriptionElement();
  }

  /**
   * @returns the `content` property value as a Reference array
   */
  public getContent(): Reference[] {
    return this.content ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `content` property.
   *
   * @decorator `@ReferenceTargets('DocumentManifest.content', ['Resource',])`
   *
   * @param value - the `content` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentManifest.content', [
    'Resource',
  ])
  public setContent(value: Reference[] | undefined | null): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.content = value;
    } else {
      this.content = null;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `content` array property.
   *
   * @decorator `@ReferenceTargets('DocumentManifest.content', ['Resource',])`
   *
   * @param value - the `content` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentManifest.content', [
    'Resource',
  ])
  public addContent(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initContent();
      this.content?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContent(): boolean {
    return isDefinedList<Reference>(this.content) && this.content.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `content` property
   */
  private initContent(): void {
    if (!this.hasContent()) {
      this.content = [] as Reference[];
    }
  }

  /**
   * @returns the `related` property value as a DocumentManifestRelatedComponent array
   */
  public getRelated(): DocumentManifestRelatedComponent[] {
    return this.related ?? ([] as DocumentManifestRelatedComponent[]);
  }

  /**
   * Assigns the provided DocumentManifestRelatedComponent array value to the `related` property.
   *
   * @param value - the `related` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelated(value: DocumentManifestRelatedComponent[] | undefined): this {
    if (isDefinedList<DocumentManifestRelatedComponent>(value)) {
      const optErrMsg = `Invalid DocumentManifest.related; Provided value array has an element that is not an instance of DocumentManifestRelatedComponent.`;
      assertFhirTypeList<DocumentManifestRelatedComponent>(value, DocumentManifestRelatedComponent, optErrMsg);
      this.related = value;
    } else {
      this.related = undefined;
    }
    return this;
  }

  /**
   * Add the provided DocumentManifestRelatedComponent value to the `related` array property.
   *
   * @param value - the `related` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelated(value: DocumentManifestRelatedComponent | undefined): this {
    if (isDefined<DocumentManifestRelatedComponent>(value)) {
      const optErrMsg = `Invalid DocumentManifest.related; Provided element is not an instance of DocumentManifestRelatedComponent.`;
      assertFhirType<DocumentManifestRelatedComponent>(value, DocumentManifestRelatedComponent, optErrMsg);
      this.initRelated();
      this.related?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `related` property exists and has a value; `false` otherwise
   */
  public hasRelated(): boolean {
    return isDefinedList<DocumentManifestRelatedComponent>(this.related) && this.related.some((item: DocumentManifestRelatedComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `related` property
   */
  private initRelated(): void {
    if(!this.hasRelated()) {
      this.related = [] as DocumentManifestRelatedComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DocumentManifest';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.masterIdentifier,
      this.identifier,
      this.status,
      this.type_,
      this.subject,
      this.created,
      this.author,
      this.recipient,
      this.source,
      this.description,
      this.content,
      this.related,
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
  public override copy(): DocumentManifest {
    const dest = new DocumentManifest();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DocumentManifest): void {
    super.copyValues(dest);
    dest.masterIdentifier = this.masterIdentifier?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.type_ = this.type_?.copy();
    dest.subject = this.subject?.copy();
    dest.created = this.created?.copy();
    const authorList = copyListValues<Reference>(this.author);
    dest.author = authorList.length === 0 ? undefined : authorList;
    const recipientList = copyListValues<Reference>(this.recipient);
    dest.recipient = recipientList.length === 0 ? undefined : recipientList;
    dest.source = this.source?.copy();
    dest.description = this.description?.copy();
    const contentList = copyListValues<Reference>(this.content);
    dest.content = contentList.length === 0 ? null : contentList;
    const relatedList = copyListValues<DocumentManifestRelatedComponent>(this.related);
    dest.related = relatedList.length === 0 ? undefined : relatedList;
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

    if (this.hasMasterIdentifier()) {
      setFhirComplexJson(this.getMasterIdentifier(), 'masterIdentifier', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasCreatedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getCreatedElement(), 'created', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexListJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasRecipient()) {
      setFhirComplexListJson(this.getRecipient(), 'recipient', jsonObj);
    }

    if (this.hasSourceElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getSourceElement(), 'source', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasContent()) {
      setFhirComplexListJson(this.getContent(), 'content', jsonObj);
    } else {
      jsonObj['content'] = null;
    }

    if (this.hasRelated()) {
      setFhirBackboneElementListJson(this.getRelated(), 'related', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * DocumentManifestRelatedComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Related things
 * - **Definition:** Related identifiers or resources associated with the DocumentManifest.
 * - **Comment:** May be identifiers or resources that caused the DocumentManifest to be created.
 *
 * @category Data Models: Resource
 * @see [FHIR DocumentManifest](http://hl7.org/fhir/StructureDefinition/DocumentManifest)
 */
export class DocumentManifestRelatedComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `DocumentManifestRelatedComponent` JSON to instantiate the DocumentManifestRelatedComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DocumentManifestRelatedComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DocumentManifestRelatedComponent
   * @returns DocumentManifestRelatedComponent data model or undefined for `DocumentManifestRelatedComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DocumentManifestRelatedComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DocumentManifestRelatedComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DocumentManifestRelatedComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'ref';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRef(datatype);
    }

    return instance;
  }

  /**
   * DocumentManifest.related.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifiers of things that are related
   * - **Definition:** Related identifier to this DocumentManifest.  For example, Order numbers, accession numbers, XDW workflow numbers.
   * - **Comment:** If both identifier and ref elements are present they shall refer to the same thing.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier | undefined;

  /**
   * DocumentManifest.related.ref Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Related Resource
   * - **Definition:** Related Resource to this DocumentManifest. For example, Order, ServiceRequest,  Procedure, EligibilityRequest, etc.
   * - **Comment:** If both identifier and ref elements are present they shall refer to the same thing.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private ref?: Reference | undefined;

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
      const optErrMsg = `Invalid DocumentManifest.related.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `ref` property value as a Reference object; else an empty Reference object
   */
  public getRef(): Reference {
    return this.ref ?? new Reference();
  }

  /**
   * Assigns the provided Ref object value to the `ref` property.
   *
   * @decorator `@ReferenceTargets('DocumentManifest.related.ref', ['Resource',])`
   *
   * @param value - the `ref` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentManifest.related.ref', [
    'Resource',
  ])
  public setRef(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.ref = value;
    } else {
      this.ref = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ref` property exists and has a value; `false` otherwise
   */
  public hasRef(): boolean {
    return isDefined<Reference>(this.ref) && !this.ref.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DocumentManifest.related';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.ref,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DocumentManifestRelatedComponent {
    const dest = new DocumentManifestRelatedComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DocumentManifestRelatedComponent): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.ref = this.ref?.copy();
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

    if (this.hasRef()) {
      setFhirComplexJson(this.getRef(), 'ref', jsonObj);
    }

    return jsonObj;
  }
}
