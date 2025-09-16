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
 * DocumentReference Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/DocumentReference
 * StructureDefinition.name: DocumentReference
 * StructureDefinition.description: A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  InstantType,
  JSON,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirInstant,
  fhirInstantSchema,
  fhirString,
  fhirStringSchema,
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
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { Attachment, CodeableConcept, Coding, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { CompositionStatusEnum } from '../code-systems/CompositionStatusEnum';
import { DocumentReferenceStatusEnum } from '../code-systems/DocumentReferenceStatusEnum';
import { DocumentRelationshipTypeEnum } from '../code-systems/DocumentRelationshipTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * DocumentReference Class
 *
 * @remarks
 * A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 *
 * **FHIR Specification**
 * - **Short:** A reference to a document
 * - **Definition:** A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 * - **Comment:** Usually, this is used for documents other than those defined by FHIR.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR DocumentReference](http://hl7.org/fhir/StructureDefinition/DocumentReference)
 */
export class DocumentReference extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, content: DocumentReferenceContentComponent[] | null = null) {
    super();

    this.documentReferenceStatusEnum = new DocumentReferenceStatusEnum();
    this.compositionStatusEnum = new CompositionStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<DocumentReferenceStatusEnum>(
      status,
      DocumentReferenceStatusEnum,
      this.documentReferenceStatusEnum,
      'DocumentReference.status',
    );

    this.content = null;
    if (isDefinedList<DocumentReferenceContentComponent>(content)) {
      this.setContent(content);
    }
  }

  /**
   * Parse the provided `DocumentReference` JSON to instantiate the DocumentReference data model.
   *
   * @param sourceJson - JSON representing FHIR `DocumentReference`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DocumentReference
   * @returns DocumentReference data model or undefined for `DocumentReference`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): DocumentReference | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DocumentReference';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DocumentReference();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'DocumentReference');
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

    fieldName = 'docStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setDocStatusElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCategory(datatype);
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

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAuthor(datatype);
          }
        });
      }
  }

    fieldName = 'authenticator';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthenticator(datatype);
    }

    fieldName = 'custodian';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCustodian(datatype);
    }

    fieldName = 'relatesTo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DocumentReferenceRelatesToComponent | undefined = DocumentReferenceRelatesToComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addRelatesTo(component);
          }
        });
      }
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'securityLabel';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSecurityLabel(datatype);
          }
        });
      }
    }

    fieldName = 'content';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setContent(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: DocumentReferenceContentComponent | undefined = DocumentReferenceContentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component === undefined) {
            instance.setContent(null);
          } else {
            instance.addContent(component);
          }
        });
      }
    } else {
      instance.setContent(null);
    }

    fieldName = 'context';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: DocumentReferenceContextComponent | undefined = DocumentReferenceContextComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContext(component);
    }

    return instance;
  }

  /**
   * DocumentReference.masterIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Master Version Specific Identifier
   * - **Definition:** Document identifier as assigned by the source of the document. This identifier is specific to this version of the document. This unique identifier may be used elsewhere to identify this version of the document.
   * - **Comment:** CDA Document Id extension and root.
   * - **Requirements:** The structure and format of this Id shall be consistent with the specification corresponding to the formatCode attribute. (e.g. for a DICOM standard document a 64-character numeric UID, for an HL7 CDA format a serialization of the CDA Document Id extension and root in the form "oid^extension", where OID is a 64 digits max, and the Id is a 16 UTF-8 char max. If the OID is coded without the extension then the \'^\' character shall not be included.).
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private masterIdentifier?: Identifier | undefined;

  /**
   * DocumentReference.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Other identifiers for the document
   * - **Definition:** Other identifiers associated with the document, including version independent identifiers.
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
   * DocumentReference.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** current | superseded | entered-in-error
   * - **Definition:** The status of this document reference.
   * - **Comment:** This is the status of the DocumentReference object, which might be independent from the docStatus element. This element is labeled as a modifier because the status contains the codes that mark the document or reference as not currently valid.
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
   * FHIR CodeSystem: CompositionStatus
   *
   * @see {@link CompositionStatusEnum }
   */
  private readonly compositionStatusEnum: CompositionStatusEnum;

  /**
   * DocumentReference.docStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** preliminary | final | amended | entered-in-error
   * - **Definition:** The status of the underlying document.
   * - **Comment:** The document that is pointed to might be in various lifecycle states.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
   */
  private docStatus?: EnumCodeType | undefined;

  /**
   * DocumentReference.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of document (LOINC if possible)
   * - **Definition:** Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.
   * - **Comment:** Key metadata element describing the document that describes he exact type of document. Helps humans to assess whether the document is of interest when viewing a list of documents.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * DocumentReference.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Categorization of document
   * - **Definition:** A categorization for the type of document referenced - helps for indexing and searching. This may be implied by or derived from the code specified in the DocumentReference.type.
   * - **Comment:** Key metadata element describing the the category or classification of the document. This is a broader perspective that groups similar documents based on how they would be used. This is a primary key used in searching.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * DocumentReference.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who/what is the subject of the document
   * - **Definition:** Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
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
   * DocumentReference.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When this document reference was created
   * - **Definition:** When the document reference was created.
   * - **Comment:** Referencing/indexing time is used for tracking, organizing versions and searching.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: InstantType | undefined;

  /**
   * DocumentReference.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who and/or what authored the document
   * - **Definition:** Identifies who is responsible for adding the information to the document.
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
   * DocumentReference.authenticator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who/what authenticated the document
   * - **Definition:** Which person or organization authenticates that this document is valid.
   * - **Comment:** Represents a participant within the author institution who has legally authenticated or attested the document. Legal authentication implies that a document has been signed manually or electronically by the legal Authenticator.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authenticator?: Reference | undefined;

  /**
   * DocumentReference.custodian Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization which maintains the document
   * - **Definition:** Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.
   * - **Comment:** Identifies the logical organization (software system, vendor, or department) to go to find the current version, where to report issues, etc. This is different from the physical location (URL, disk drive, or server) of the document, which is the technical location of the document, which host may be delegated to the management of some other organization.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private custodian?: Reference | undefined;

  /**
   * DocumentReference.relatesTo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relationships to other documents
   * - **Definition:** Relationships that this document has with other document references that already exist.
   * - **Comment:** This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private relatesTo?: DocumentReferenceRelatesToComponent[] | undefined;

  /**
   * DocumentReference.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human-readable description
   * - **Definition:** Human-readable description of the source document.
   * - **Comment:** What the document is about,  a terse summary of the document.
   * - **Requirements:** Helps humans to assess whether the document is of interest.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * DocumentReference.securityLabel Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Document security-tags
   * - **Definition:** A set of Security-Tag codes specifying the level of privacy/security of the Document. Note that DocumentReference.meta.security contains the security labels of the "reference" to the document, while DocumentReference.securityLabel contains a snapshot of the security labels on the document the reference refers to.
   * - **Comment:** The confidentiality codes can carry multiple vocabulary items. HL7 has developed an understanding of security and privacy tags that might be desirable in a Document Sharing environment, called HL7 Healthcare Privacy and Security Classification System (HCS). The following specification is recommended but not mandated, as the vocabulary bindings are an administrative domain responsibility. The use of this method is up to the policy domain such as the XDS Affinity Domain or other Trust Domain where all parties including sender and recipients are trusted to appropriately tag and enforce.    In the HL7 Healthcare Privacy and Security Classification (HCS) there are code systems specific to Confidentiality, Sensitivity, Integrity, and Handling Caveats. Some values would come from a local vocabulary as they are related to workflow roles and special projects.
   * - **Requirements:** Use of the Health Care Privacy/Security Classification (HCS) system of security-tag use is recommended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private securityLabel?: CodeableConcept[] | undefined;

  /**
   * DocumentReference.content Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Document referenced
   * - **Definition:** The document and format referenced. There may be multiple content element repetitions, each with a different format.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private content: DocumentReferenceContentComponent[] | null;

  /**
   * DocumentReference.context Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Clinical context of document
   * - **Definition:** The clinical context in which the document was prepared.
   * - **Comment:** These values are primarily added to help with searching for interesting/relevant documents.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private context?: DocumentReferenceContextComponent | undefined;

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
      const optErrMsg = `Invalid DocumentReference.masterIdentifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid DocumentReference.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid DocumentReference.identifier; Provided element is not an instance of Identifier.`;
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
      const errMsgPrefix = `Invalid DocumentReference.status`;
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
      const optErrMsg = `Invalid DocumentReference.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid DocumentReference.status (${String(value)})`;
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
   * @returns the `docStatus` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
   */
  public getDocStatusEnumType(): EnumCodeType | undefined {
    return this.docStatus;
  }

  /**
   * Assigns the provided EnumCodeType value to the `docStatus` property.
   *
   * @param enumType - the `docStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
   */
  public setDocStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid DocumentReference.docStatus';
      assertEnumCodeType<CompositionStatusEnum>(enumType, CompositionStatusEnum, errMsgPrefix);
      this.docStatus = enumType;
    } else {
      this.docStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `docStatus` property exists and has a value; `false` otherwise
   */
  public hasDocStatusEnumType(): boolean {
    return isDefined<EnumCodeType>(this.docStatus) && !this.docStatus.isEmpty() && this.docStatus.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `docStatus` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
   */
  public getDocStatusElement(): CodeType | undefined {
    if (this.docStatus === undefined) {
      return undefined;
    }
    return this.docStatus as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `docStatus` property.
   *
   * @param element - the `docStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
   */
  public setDocStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DocumentReference.docStatus; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.docStatus = new EnumCodeType(element, this.compositionStatusEnum);
    } else {
      this.docStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `docStatus` property exists and has a value; `false` otherwise
   */
  public hasDocStatusElement(): boolean {
    return this.hasDocStatusEnumType();
  }

  /**
   * @returns the `docStatus` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
   */
  public getDocStatus(): fhirCode | undefined {
    if (this.docStatus === undefined) {
      return undefined;
    }
    return this.docStatus.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `docStatus` property.
   *
   * @param value - the `docStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
   */
  public setDocStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DocumentReference.docStatus; Provided value is not an instance of fhirCode.`;
      this.docStatus = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.compositionStatusEnum);
    } else {
      this.docStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `docStatus` property exists and has a value; `false` otherwise
   */
  public hasDocStatus(): boolean {
    return this.hasDocStatusEnumType();
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
      const optErrMsg = `Invalid DocumentReference.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `category` property value as a CodeableConcept array
   */
  public getCategory(): CodeableConcept[] {
    return this.category ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `category` property.
   *
   * @param value - the `category` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DocumentReference.category; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `category` array property.
   *
   * @param value - the `category` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DocumentReference.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCategory();
      this.category?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefinedList<CodeableConcept>(this.category) && this.category.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `category` property
   */
  private initCategory(): void {
    if(!this.hasCategory()) {
      this.category = [] as CodeableConcept[];
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
   * @decorator `@ReferenceTargets('DocumentReference.subject', ['Patient','Practitioner','Group','Device',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.subject', [
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
   * @returns the `date` property value as a InstantType object if defined; else an empty InstantType object
   */
  public getDateElement(): InstantType {
    return this.date ?? new InstantType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: InstantType | undefined): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid DocumentReference.date; Provided element is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
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
    return isDefined<InstantType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirInstant if defined; else undefined
   */
  public getDate(): fhirInstant | undefined {
    return this.date?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirInstant | undefined): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid DocumentReference.date (${String(value)})`;
      this.date = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
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
   * @returns the `author` property value as a Reference array
   */
  public getAuthor(): Reference[] {
    return this.author ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `author` property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.author', ['Practitioner','PractitionerRole','Organization','Device','Patient','RelatedPerson',])`
   *
   * @param value - the `author` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.author', [
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
   * @decorator `@ReferenceTargets('DocumentReference.author', ['Practitioner','PractitionerRole','Organization','Device','Patient','RelatedPerson',])`
   *
   * @param value - the `author` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.author', [
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
   * @returns the `authenticator` property value as a Reference object; else an empty Reference object
   */
  public getAuthenticator(): Reference {
    return this.authenticator ?? new Reference();
  }

  /**
   * Assigns the provided Authenticator object value to the `authenticator` property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.authenticator', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `authenticator` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.authenticator', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setAuthenticator(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.authenticator = value;
    } else {
      this.authenticator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authenticator` property exists and has a value; `false` otherwise
   */
  public hasAuthenticator(): boolean {
    return isDefined<Reference>(this.authenticator) && !this.authenticator.isEmpty();
  }

  /**
   * @returns the `custodian` property value as a Reference object; else an empty Reference object
   */
  public getCustodian(): Reference {
    return this.custodian ?? new Reference();
  }

  /**
   * Assigns the provided Custodian object value to the `custodian` property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.custodian', ['Organization',])`
   *
   * @param value - the `custodian` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.custodian', [
    'Organization',
  ])
  public setCustodian(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.custodian = value;
    } else {
      this.custodian = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `custodian` property exists and has a value; `false` otherwise
   */
  public hasCustodian(): boolean {
    return isDefined<Reference>(this.custodian) && !this.custodian.isEmpty();
  }

  /**
   * @returns the `relatesTo` property value as a DocumentReferenceRelatesToComponent array
   */
  public getRelatesTo(): DocumentReferenceRelatesToComponent[] {
    return this.relatesTo ?? ([] as DocumentReferenceRelatesToComponent[]);
  }

  /**
   * Assigns the provided DocumentReferenceRelatesToComponent array value to the `relatesTo` property.
   *
   * @param value - the `relatesTo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatesTo(value: DocumentReferenceRelatesToComponent[] | undefined): this {
    if (isDefinedList<DocumentReferenceRelatesToComponent>(value)) {
      const optErrMsg = `Invalid DocumentReference.relatesTo; Provided value array has an element that is not an instance of DocumentReferenceRelatesToComponent.`;
      assertFhirTypeList<DocumentReferenceRelatesToComponent>(value, DocumentReferenceRelatesToComponent, optErrMsg);
      this.relatesTo = value;
    } else {
      this.relatesTo = undefined;
    }
    return this;
  }

  /**
   * Add the provided DocumentReferenceRelatesToComponent value to the `relatesTo` array property.
   *
   * @param value - the `relatesTo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatesTo(value: DocumentReferenceRelatesToComponent | undefined): this {
    if (isDefined<DocumentReferenceRelatesToComponent>(value)) {
      const optErrMsg = `Invalid DocumentReference.relatesTo; Provided element is not an instance of DocumentReferenceRelatesToComponent.`;
      assertFhirType<DocumentReferenceRelatesToComponent>(value, DocumentReferenceRelatesToComponent, optErrMsg);
      this.initRelatesTo();
      this.relatesTo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatesTo` property exists and has a value; `false` otherwise
   */
  public hasRelatesTo(): boolean {
    return isDefinedList<DocumentReferenceRelatesToComponent>(this.relatesTo) && this.relatesTo.some((item: DocumentReferenceRelatesToComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relatesTo` property
   */
  private initRelatesTo(): void {
    if(!this.hasRelatesTo()) {
      this.relatesTo = [] as DocumentReferenceRelatesToComponent[];
    }
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
      const optErrMsg = `Invalid DocumentReference.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid DocumentReference.description (${String(value)})`;
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
   * @returns the `securityLabel` property value as a CodeableConcept array
   */
  public getSecurityLabel(): CodeableConcept[] {
    return this.securityLabel ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `securityLabel` property.
   *
   * @param value - the `securityLabel` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSecurityLabel(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DocumentReference.securityLabel; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.securityLabel = value;
    } else {
      this.securityLabel = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `securityLabel` array property.
   *
   * @param value - the `securityLabel` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSecurityLabel(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DocumentReference.securityLabel; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSecurityLabel();
      this.securityLabel?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabel` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabel(): boolean {
    return isDefinedList<CodeableConcept>(this.securityLabel) && this.securityLabel.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `securityLabel` property
   */
  private initSecurityLabel(): void {
    if(!this.hasSecurityLabel()) {
      this.securityLabel = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `content` property value as a DocumentReferenceContentComponent array
   */
  public getContent(): DocumentReferenceContentComponent[] {
    return this.content ?? ([] as DocumentReferenceContentComponent[]);
  }

  /**
   * Assigns the provided DocumentReferenceContentComponent array value to the `content` property.
   *
   * @param value - the `content` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContent(value: DocumentReferenceContentComponent[] | undefined | null): this {
    if (isDefinedList<DocumentReferenceContentComponent>(value)) {
      const optErrMsg = `Invalid DocumentReference.content; Provided value array has an element that is not an instance of DocumentReferenceContentComponent.`;
      assertFhirTypeList<DocumentReferenceContentComponent>(value, DocumentReferenceContentComponent, optErrMsg);
      this.content = value;
    } else {
      this.content = null;
    }
    return this;
  }

  /**
   * Add the provided DocumentReferenceContentComponent value to the `content` array property.
   *
   * @param value - the `content` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContent(value: DocumentReferenceContentComponent | undefined): this {
    if (isDefined<DocumentReferenceContentComponent>(value)) {
      const optErrMsg = `Invalid DocumentReference.content; Provided element is not an instance of DocumentReferenceContentComponent.`;
      assertFhirType<DocumentReferenceContentComponent>(value, DocumentReferenceContentComponent, optErrMsg);
      this.initContent();
      this.content?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContent(): boolean {
    return isDefinedList<DocumentReferenceContentComponent>(this.content) && this.content.some((item: DocumentReferenceContentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `content` property
   */
  private initContent(): void {
    if(!this.hasContent()) {
      this.content = [] as DocumentReferenceContentComponent[];
    }
  }

  /**
   * @returns the `context` property value as a DocumentReferenceContextComponent object if defined; else an empty DocumentReferenceContextComponent object
   */
  public getContext(): DocumentReferenceContextComponent {
    return this.context ?? new DocumentReferenceContextComponent();
  }

  /**
   * Assigns the provided Context object value to the `context` property.
   *
   * @param value - the `context` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContext(value: DocumentReferenceContextComponent | undefined): this {
    if (isDefined<DocumentReferenceContextComponent>(value)) {
      const optErrMsg = `Invalid DocumentReference.context; Provided element is not an instance of DocumentReferenceContextComponent.`;
      assertFhirType<DocumentReferenceContextComponent>(value, DocumentReferenceContextComponent, optErrMsg);
      this.context = value;
    } else {
      this.context = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `context` property exists and has a value; `false` otherwise
   */
  public hasContext(): boolean {
    return isDefined<DocumentReferenceContextComponent>(this.context) && !this.context.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DocumentReference';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.masterIdentifier,
      this.identifier,
      this.status,
      this.docStatus,
      this.type_,
      this.category,
      this.subject,
      this.date,
      this.author,
      this.authenticator,
      this.custodian,
      this.relatesTo,
      this.description,
      this.securityLabel,
      this.content,
      this.context,
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
  public override copy(): DocumentReference {
    const dest = new DocumentReference();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DocumentReference): void {
    super.copyValues(dest);
    dest.masterIdentifier = this.masterIdentifier?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.docStatus = this.docStatus?.copy();
    dest.type_ = this.type_?.copy();
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.subject = this.subject?.copy();
    dest.date = this.date?.copy();
    const authorList = copyListValues<Reference>(this.author);
    dest.author = authorList.length === 0 ? undefined : authorList;
    dest.authenticator = this.authenticator?.copy();
    dest.custodian = this.custodian?.copy();
    const relatesToList = copyListValues<DocumentReferenceRelatesToComponent>(this.relatesTo);
    dest.relatesTo = relatesToList.length === 0 ? undefined : relatesToList;
    dest.description = this.description?.copy();
    const securityLabelList = copyListValues<CodeableConcept>(this.securityLabel);
    dest.securityLabel = securityLabelList.length === 0 ? undefined : securityLabelList;
    const contentList = copyListValues<DocumentReferenceContentComponent>(this.content);
    dest.content = contentList.length === 0 ? null : contentList;
    dest.context = this.context?.copy();
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
    }

    if (this.hasDocStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getDocStatusElement()!, 'docStatus', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexListJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasAuthenticator()) {
      setFhirComplexJson(this.getAuthenticator(), 'authenticator', jsonObj);
    }

    if (this.hasCustodian()) {
      setFhirComplexJson(this.getCustodian(), 'custodian', jsonObj);
    }

    if (this.hasRelatesTo()) {
      setFhirBackboneElementListJson(this.getRelatesTo(), 'relatesTo', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasSecurityLabel()) {
      setFhirComplexListJson(this.getSecurityLabel(), 'securityLabel', jsonObj);
    }

    if (this.hasContent()) {
      setFhirBackboneElementListJson(this.getContent(), 'content', jsonObj);
    }

    if (this.hasContext()) {
      setFhirBackboneElementJson(this.getContext(), 'context', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * DocumentReferenceRelatesToComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Relationships to other documents
 * - **Definition:** Relationships that this document has with other document references that already exist.
 * - **Comment:** This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
 *
 * @category Data Models: Resource
 * @see [FHIR DocumentReference](http://hl7.org/fhir/StructureDefinition/DocumentReference)
 */
export class DocumentReferenceRelatesToComponent extends BackboneElement implements IBackboneElement {
  constructor(code: EnumCodeType | CodeType | fhirCode | null = null, target: Reference | null = null) {
    super();

    this.documentRelationshipTypeEnum = new DocumentRelationshipTypeEnum();

    this.code = constructorCodeValueAsEnumCodeType<DocumentRelationshipTypeEnum>(
      code,
      DocumentRelationshipTypeEnum,
      this.documentRelationshipTypeEnum,
      'DocumentReference.relatesTo.code',
    );

    this.target = null;
    if (isDefined<Reference>(target)) {
      this.setTarget(target);
    }
  }

  /**
   * Parse the provided `DocumentReferenceRelatesToComponent` JSON to instantiate the DocumentReferenceRelatesToComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DocumentReferenceRelatesToComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DocumentReferenceRelatesToComponent
   * @returns DocumentReferenceRelatesToComponent data model or undefined for `DocumentReferenceRelatesToComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DocumentReferenceRelatesToComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DocumentReferenceRelatesToComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DocumentReferenceRelatesToComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCodeElement(datatype);
      }
    } else {
      instance.setCode(null);
    }

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

    return instance;
  }

  /**
   * FHIR CodeSystem: DocumentRelationshipType
   *
   * @see {@link DocumentRelationshipTypeEnum }
   */
  private readonly documentRelationshipTypeEnum: DocumentRelationshipTypeEnum;

  /**
   * DocumentReference.relatesTo.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** replaces | transforms | signs | appends
   * - **Definition:** The type of relationship that this document has with anther document.
   * - **Comment:** If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link DocumentRelationshipTypeEnum }
   */
  private code: EnumCodeType | null;

  /**
   * DocumentReference.relatesTo.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Target of the relationship
   * - **Definition:** The target document of this relationship.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private target: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link DocumentRelationshipTypeEnum }
   */
  public getCodeEnumType(): EnumCodeType | null {
    return this.code;
  }

  /**
   * Assigns the provided EnumCodeType value to the `code` property.
   *
   * @param enumType - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DocumentRelationshipTypeEnum }
   */
  public setCodeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid DocumentReference.relatesTo.code`;
      assertEnumCodeType<DocumentRelationshipTypeEnum>(enumType, DocumentRelationshipTypeEnum, errMsgPrefix);
      this.code = enumType;
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCodeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.code) && !this.code.isEmpty() && this.code.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `code` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link DocumentRelationshipTypeEnum }
   */
  public getCodeElement(): CodeType | null {
    if (this.code === null) {
      return null;
    }
    return this.code as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `code` property.
   *
   * @param element - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DocumentRelationshipTypeEnum }
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DocumentReference.relatesTo.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = new EnumCodeType(element, this.documentRelationshipTypeEnum);
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCodeElement(): boolean {
    return this.hasCodeEnumType();
  }

  /**
   * @returns the `code` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link DocumentRelationshipTypeEnum }
   */
  public getCode(): fhirCode | null {
    if (this.code === null) {
      return null;
    }
    return this.code.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `code` property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link DocumentRelationshipTypeEnum }
   */
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DocumentReference.relatesTo.code (${String(value)})`;
      this.code = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.documentRelationshipTypeEnum);
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return this.hasCodeEnumType();
  }

  /**
   * @returns the `target` property value as a Reference object if defined; else an empty Reference object
   */
  public getTarget(): Reference {
    return this.target ?? new Reference();
  }

  /**
   * Assigns the provided Target object value to the `target` property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.relatesTo.target', ['DocumentReference',])`
   *
   * @param value - the `target` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.relatesTo.target', [
    'DocumentReference',
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DocumentReference.relatesTo';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.target,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, this.target, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DocumentReferenceRelatesToComponent {
    const dest = new DocumentReferenceRelatesToComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DocumentReferenceRelatesToComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.target = this.target ? this.target.copy() : null;
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

    if (this.hasCodeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement()!, 'code', jsonObj);
    }

    if (this.hasTarget()) {
      setFhirComplexJson(this.getTarget(), 'target', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DocumentReferenceContentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Document referenced
 * - **Definition:** The document and format referenced. There may be multiple content element repetitions, each with a different format.
 *
 * @category Data Models: Resource
 * @see [FHIR DocumentReference](http://hl7.org/fhir/StructureDefinition/DocumentReference)
 */
export class DocumentReferenceContentComponent extends BackboneElement implements IBackboneElement {
  constructor(attachment: Attachment | null = null) {
    super();

    this.attachment = null;
    if (isDefined<Attachment>(attachment)) {
      this.setAttachment(attachment);
    }
  }

  /**
   * Parse the provided `DocumentReferenceContentComponent` JSON to instantiate the DocumentReferenceContentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DocumentReferenceContentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DocumentReferenceContentComponent
   * @returns DocumentReferenceContentComponent data model or undefined for `DocumentReferenceContentComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DocumentReferenceContentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DocumentReferenceContentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DocumentReferenceContentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'attachment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Attachment | undefined = Attachment.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setAttachment(null);
      } else {
        instance.setAttachment(datatype);
      }
    } else {
      instance.setAttachment(null);
    }

    fieldName = 'format';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFormat(datatype);
    }

    return instance;
  }

  /**
   * DocumentReference.content.attachment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where to access the document
   * - **Definition:** The document or URL of the document along with critical metadata to prove content has integrity.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private attachment: Attachment | null;

  /**
   * DocumentReference.content.format Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Format/content rules for the document
   * - **Definition:** An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.
   * - **Comment:** Note that while IHE mostly issues URNs for format types, not all documents can be identified by a URI.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private format?: Coding | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `attachment` property value as a Attachment object if defined; else an empty Attachment object
   */
  public getAttachment(): Attachment {
    return this.attachment ?? new Attachment();
  }

  /**
   * Assigns the provided Attachment object value to the `attachment` property.
   *
   * @param value - the `attachment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAttachment(value: Attachment | undefined | null): this {
    if (isDefined<Attachment>(value)) {
      const optErrMsg = `Invalid DocumentReference.content.attachment; Provided element is not an instance of Attachment.`;
      assertFhirType<Attachment>(value, Attachment, optErrMsg);
      this.attachment = value;
    } else {
      this.attachment = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `attachment` property exists and has a value; `false` otherwise
   */
  public hasAttachment(): boolean {
    return isDefined<Attachment>(this.attachment) && !this.attachment.isEmpty();
  }

  /**
   * @returns the `format` property value as a Coding object if defined; else an empty Coding object
   */
  public getFormat(): Coding {
    return this.format ?? new Coding();
  }

  /**
   * Assigns the provided Format object value to the `format` property.
   *
   * @param value - the `format` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFormat(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid DocumentReference.content.format; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.format = value;
    } else {
      this.format = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `format` property exists and has a value; `false` otherwise
   */
  public hasFormat(): boolean {
    return isDefined<Coding>(this.format) && !this.format.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DocumentReference.content';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.attachment,
      this.format,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.attachment, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DocumentReferenceContentComponent {
    const dest = new DocumentReferenceContentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DocumentReferenceContentComponent): void {
    super.copyValues(dest);
    dest.attachment = this.attachment ? this.attachment.copy() : null;
    dest.format = this.format?.copy();
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

    if (this.hasAttachment()) {
      setFhirComplexJson(this.getAttachment(), 'attachment', jsonObj);
    }

    if (this.hasFormat()) {
      setFhirComplexJson(this.getFormat(), 'format', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DocumentReferenceContextComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Clinical context of document
 * - **Definition:** The clinical context in which the document was prepared.
 * - **Comment:** These values are primarily added to help with searching for interesting/relevant documents.
 *
 * @category Data Models: Resource
 * @see [FHIR DocumentReference](http://hl7.org/fhir/StructureDefinition/DocumentReference)
 */
export class DocumentReferenceContextComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `DocumentReferenceContextComponent` JSON to instantiate the DocumentReferenceContextComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DocumentReferenceContextComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DocumentReferenceContextComponent
   * @returns DocumentReferenceContextComponent data model or undefined for `DocumentReferenceContextComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DocumentReferenceContextComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DocumentReferenceContextComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DocumentReferenceContextComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEncounter(datatype);
          }
        });
      }
  }

    fieldName = 'event';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEvent(datatype);
          }
        });
      }
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'facilityType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFacilityType(datatype);
    }

    fieldName = 'practiceSetting';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPracticeSetting(datatype);
    }

    fieldName = 'sourcePatientInfo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSourcePatientInfo(datatype);
    }

    fieldName = 'related';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRelated(datatype);
          }
        });
      }
  }

    return instance;
  }

  /**
   * DocumentReference.context.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Context of the document  content
   * - **Definition:** Describes the clinical encounter or type of care that the document content is associated with.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *       'http://hl7.org/fhir/StructureDefinition/EpisodeOfCare',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private encounter?: Reference[] | undefined;

  /**
   * DocumentReference.context.event Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Main clinical acts documented
   * - **Definition:** This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the type Code, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
   * - **Comment:** An event can further specialize the act inherent in the type, such as  where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more event codes are included, they shall not conflict with the values inherent in the class or type elements as such a conflict would create an ambiguous situation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private event?: CodeableConcept[] | undefined;

  /**
   * DocumentReference.context.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time of service that is being documented
   * - **Definition:** The time period over which the service that is described by the document was provided.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * DocumentReference.context.facilityType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of facility where patient was seen
   * - **Definition:** The kind of facility where the patient was seen.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private facilityType?: CodeableConcept | undefined;

  /**
   * DocumentReference.context.practiceSetting Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional details about where the content was created (e.g. clinical specialty)
   * - **Definition:** This property may convey specifics about the practice setting where the content was created, often reflecting the clinical specialty.
   * - **Comment:** This element should be based on a coarse classification system for the class of specialty practice. Recommend the use of the classification system for Practice Setting, such as that described by the Subject Matter Domain in LOINC.
   * - **Requirements:** This is an important piece of metadata that providers often rely upon to quickly sort and/or filter out to find specific content.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private practiceSetting?: CodeableConcept | undefined;

  /**
   * DocumentReference.context.sourcePatientInfo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient demographics from source
   * - **Definition:** The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sourcePatientInfo?: Reference | undefined;

  /**
   * DocumentReference.context.related Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Related identifiers or resources
   * - **Definition:** Related identifiers or resources associated with the DocumentReference.
   * - **Comment:** May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private related?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `encounter` property value as a Reference array
   */
  public getEncounter(): Reference[] {
    return this.encounter ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `encounter` property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.context.encounter', ['Encounter','EpisodeOfCare',])`
   *
   * @param value - the `encounter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.context.encounter', [
    'Encounter',
  
    'EpisodeOfCare',
  ])
  public setEncounter(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.encounter = value;
    } else {
      this.encounter = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `encounter` array property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.context.encounter', ['Encounter','EpisodeOfCare',])`
   *
   * @param value - the `encounter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.context.encounter', [
    'Encounter',
  
    'EpisodeOfCare',
  ])
  public addEncounter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEncounter();
      this.encounter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `encounter` property exists and has a value; `false` otherwise
   */
  public hasEncounter(): boolean {
    return isDefinedList<Reference>(this.encounter) && this.encounter.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `encounter` property
   */
  private initEncounter(): void {
    if (!this.hasEncounter()) {
      this.encounter = [] as Reference[];
    }
  }

  /**
   * @returns the `event` property value as a CodeableConcept array
   */
  public getEvent(): CodeableConcept[] {
    return this.event ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `event` property.
   *
   * @param value - the `event` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEvent(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DocumentReference.context.event; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.event = value;
    } else {
      this.event = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `event` array property.
   *
   * @param value - the `event` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEvent(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DocumentReference.context.event; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initEvent();
      this.event?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `event` property exists and has a value; `false` otherwise
   */
  public hasEvent(): boolean {
    return isDefinedList<CodeableConcept>(this.event) && this.event.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `event` property
   */
  private initEvent(): void {
    if(!this.hasEvent()) {
      this.event = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid DocumentReference.context.period; Provided element is not an instance of Period.`;
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
   * @returns the `facilityType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFacilityType(): CodeableConcept {
    return this.facilityType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided FacilityType object value to the `facilityType` property.
   *
   * @param value - the `facilityType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFacilityType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DocumentReference.context.facilityType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.facilityType = value;
    } else {
      this.facilityType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `facilityType` property exists and has a value; `false` otherwise
   */
  public hasFacilityType(): boolean {
    return isDefined<CodeableConcept>(this.facilityType) && !this.facilityType.isEmpty();
  }

  /**
   * @returns the `practiceSetting` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPracticeSetting(): CodeableConcept {
    return this.practiceSetting ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PracticeSetting object value to the `practiceSetting` property.
   *
   * @param value - the `practiceSetting` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPracticeSetting(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DocumentReference.context.practiceSetting; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.practiceSetting = value;
    } else {
      this.practiceSetting = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `practiceSetting` property exists and has a value; `false` otherwise
   */
  public hasPracticeSetting(): boolean {
    return isDefined<CodeableConcept>(this.practiceSetting) && !this.practiceSetting.isEmpty();
  }

  /**
   * @returns the `sourcePatientInfo` property value as a Reference object; else an empty Reference object
   */
  public getSourcePatientInfo(): Reference {
    return this.sourcePatientInfo ?? new Reference();
  }

  /**
   * Assigns the provided SourcePatientInfo object value to the `sourcePatientInfo` property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.context.sourcePatientInfo', ['Patient',])`
   *
   * @param value - the `sourcePatientInfo` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.context.sourcePatientInfo', [
    'Patient',
  ])
  public setSourcePatientInfo(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.sourcePatientInfo = value;
    } else {
      this.sourcePatientInfo = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourcePatientInfo` property exists and has a value; `false` otherwise
   */
  public hasSourcePatientInfo(): boolean {
    return isDefined<Reference>(this.sourcePatientInfo) && !this.sourcePatientInfo.isEmpty();
  }

  /**
   * @returns the `related` property value as a Reference array
   */
  public getRelated(): Reference[] {
    return this.related ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `related` property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.context.related', ['Resource',])`
   *
   * @param value - the `related` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.context.related', [
    'Resource',
  ])
  public setRelated(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.related = value;
    } else {
      this.related = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `related` array property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.context.related', ['Resource',])`
   *
   * @param value - the `related` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.context.related', [
    'Resource',
  ])
  public addRelated(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRelated();
      this.related?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `related` property exists and has a value; `false` otherwise
   */
  public hasRelated(): boolean {
    return isDefinedList<Reference>(this.related) && this.related.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `related` property
   */
  private initRelated(): void {
    if (!this.hasRelated()) {
      this.related = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DocumentReference.context';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.encounter,
      this.event,
      this.period,
      this.facilityType,
      this.practiceSetting,
      this.sourcePatientInfo,
      this.related,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DocumentReferenceContextComponent {
    const dest = new DocumentReferenceContextComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DocumentReferenceContextComponent): void {
    super.copyValues(dest);
    const encounterList = copyListValues<Reference>(this.encounter);
    dest.encounter = encounterList.length === 0 ? undefined : encounterList;
    const eventList = copyListValues<CodeableConcept>(this.event);
    dest.event = eventList.length === 0 ? undefined : eventList;
    dest.period = this.period?.copy();
    dest.facilityType = this.facilityType?.copy();
    dest.practiceSetting = this.practiceSetting?.copy();
    dest.sourcePatientInfo = this.sourcePatientInfo?.copy();
    const relatedList = copyListValues<Reference>(this.related);
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

    if (this.hasEncounter()) {
      setFhirComplexListJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasEvent()) {
      setFhirComplexListJson(this.getEvent(), 'event', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasFacilityType()) {
      setFhirComplexJson(this.getFacilityType(), 'facilityType', jsonObj);
    }

    if (this.hasPracticeSetting()) {
      setFhirComplexJson(this.getPracticeSetting(), 'practiceSetting', jsonObj);
    }

    if (this.hasSourcePatientInfo()) {
      setFhirComplexJson(this.getSourcePatientInfo(), 'sourcePatientInfo', jsonObj);
    }

    if (this.hasRelated()) {
      setFhirComplexListJson(this.getRelated(), 'related', jsonObj);
    }

    return jsonObj;
  }
}
