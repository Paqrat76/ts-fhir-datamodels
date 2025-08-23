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
 * StructureDefinition.description: A reference to a document of any kind for any purpose. While the term "document" implies a more narrow focus, for this resource this "document" encompasses *any* serialized object with a mime-type, it includes formal patient-centric documents (CDA), clinical notes, scanned paper, non-patient specific documents like policy text, as well as a photo, video, or audio recording acquired or used in healthcare.  The DocumentReference resource provides metadata about the document so that the document can be discovered and managed.  The actual content may be inline base64 encoded data or provided by direct reference.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  CanonicalType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  InstantType,
  InvalidTypeError,
  JSON,
  MarkdownType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  assertIsDefinedList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirInstant,
  fhirInstantSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Attachment, CodeableConcept, CodeableReference, Coding, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { CompositionStatusEnum } from '../code-systems/CompositionStatusEnum';
import { DocumentReferenceStatusEnum } from '../code-systems/DocumentReferenceStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * DocumentReference Class
 *
 * @remarks
 * A reference to a document of any kind for any purpose. While the term "document" implies a more narrow focus, for this resource this "document" encompasses *any* serialized object with a mime-type, it includes formal patient-centric documents (CDA), clinical notes, scanned paper, non-patient specific documents like policy text, as well as a photo, video, or audio recording acquired or used in healthcare.  The DocumentReference resource provides metadata about the document so that the document can be discovered and managed.  The actual content may be inline base64 encoded data or provided by direct reference.
 *
 * **FHIR Specification**
 * - **Short:** A reference to a document
 * - **Definition:** A reference to a document of any kind for any purpose. While the term "document" implies a more narrow focus, for this resource this "document" encompasses *any* serialized object with a mime-type, it includes formal patient-centric documents (CDA), clinical notes, scanned paper, non-patient specific documents like policy text, as well as a photo, video, or audio recording acquired or used in healthcare.  The DocumentReference resource provides metadata about the document so that the document can be discovered and managed.  The actual content may be inline base64 encoded data or provided by direct reference.
 * - **Comment:** Usually, this is used for documents other than those defined by FHIR.
 * - **FHIR Version:** 5.0.0
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
   * @throws {@link FhirError} if the provided JSON is missing required properties
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

    const missingReqdProperties: string[] = [];

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

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
    }

    fieldName = 'basedOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addBasedOn(datatype);
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
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStatusElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'docStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setDocStatusElement(datatype);
    }

    fieldName = 'modality';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addModality(datatype);
        }
      });
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCategory(datatype);
        }
      });
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'context';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addContext(datatype);
        }
      });
  }

    fieldName = 'event';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEvent(datatype);
        }
      });
    }

    fieldName = 'bodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addBodySite(datatype);
        }
      });
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

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAuthor(datatype);
        }
      });
  }

    fieldName = 'attester';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DocumentReferenceAttesterComponent | undefined = DocumentReferenceAttesterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAttester(component);
        }
      });
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DocumentReferenceRelatesToComponent | undefined = DocumentReferenceRelatesToComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRelatesTo(component);
        }
      });
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'securityLabel';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSecurityLabel(datatype);
        }
      });
    }

    fieldName = 'content';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DocumentReferenceContentComponent | undefined = DocumentReferenceContentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addContent(component);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * DocumentReference.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifiers for the document
   * - **Definition:** Other business identifiers associated with the document, including version independent identifiers.
   * - **Comment:** The structure and format of this identifier would be consistent with the specification corresponding to the format of the document. (e.g. for a DICOM standard document, a 64-character numeric UID; for an HL7 CDA format, the CDA Document Id root and extension).
   * - **Requirements:** Document identifiers usually assigned by the source of the document, or other business identifiers such as XDS DocumentEntry.uniqueId and DocumentEntry.entryUUID. These identifiers are specific to this instance of the document.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * DocumentReference.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An explicitly assigned identifer of a variation of the content in the DocumentReference
   * - **Definition:** An explicitly assigned identifer of a variation of the content in the DocumentReference.
   * - **Comment:** While each resource, including the DocumentReference itself, has its own version identifier, this is a formal identifier for the logical version of the DocumentReference as a whole. It would remain constant if the resources were moved to a new server, and all got new individual resource versions, for example.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * DocumentReference.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Procedure that caused this media to be created
   * - **Definition:** A procedure that is fulfilled in whole or in part by the creation of this media.
   * - **Requirements:** Allows tracing of authorization for the event and tracking whether proposals/recommendations were acted upon.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Appointment',
   *       'http://hl7.org/fhir/StructureDefinition/AppointmentResponse',
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *       'http://hl7.org/fhir/StructureDefinition/Claim',
   *       'http://hl7.org/fhir/StructureDefinition/CommunicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/Contract',
   *       'http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/EnrollmentRequest',
   *       'http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionOrder',
   *       'http://hl7.org/fhir/StructureDefinition/RequestOrchestration',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/SupplyRequest',
   *       'http://hl7.org/fhir/StructureDefinition/VisionPrescription',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private basedOn?: Reference[] | undefined;

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
   * - **Short:** registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown
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
   * DocumentReference.modality Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Imaging modality used
   * - **Definition:** Imaging modality used. This may include both acquisition and non-acquisition modalities.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private modality?: CodeableConcept[] | undefined;

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
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * DocumentReference.context Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Context of the document content
   * - **Definition:** Describes the clinical encounter or type of care that the document content is associated with.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Appointment',
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *       'http://hl7.org/fhir/StructureDefinition/EpisodeOfCare',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private context?: Reference[] | undefined;

  /**
   * DocumentReference.event Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Main clinical acts documented
   * - **Definition:** This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the type Code, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
   * - **Comment:** An event can further specialize the act inherent in the type, such as  where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more event codes are included, they shall not conflict with the values inherent in the class or type elements as such a conflict would create an ambiguous situation.
   * - **FHIR Type:** `CodeableReference`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private event?: CodeableReference[] | undefined;

  /**
   * DocumentReference.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Body part included
   * - **Definition:** The anatomic structures included in the document.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/BodyStructure',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private bodySite?: CodeableReference[] | undefined;

  /**
   * DocumentReference.facilityType Element
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
   * DocumentReference.practiceSetting Element
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
   * DocumentReference.period Element
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
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author?: Reference[] | undefined;

  /**
   * DocumentReference.attester Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Attests to accuracy of the document
   * - **Definition:** A participant who has authenticated the accuracy of the document.
   * - **Comment:** Only list each attester once.
   * - **Requirements:** Identifies responsibility for the accuracy of the document content.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private attester?: DocumentReferenceAttesterComponent[] | undefined;

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
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * DocumentReference.securityLabel Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Document security-tags
   * - **Definition:** A set of Security-Tag codes specifying the level of privacy/security of the Document found at DocumentReference.content.attachment.url. Note that DocumentReference.meta.security contains the security labels of the data elements in DocumentReference, while DocumentReference.securityLabel contains the security labels for the document the reference refers to. The distinction recognizes that the document may contain sensitive information, while the DocumentReference is metadata about the document and thus might not be as sensitive as the document. For example: a psychotherapy episode may contain highly sensitive information, while the metadata may simply indicate that some episode happened.
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
   * - **Definition:** The document and format referenced.  If there are multiple content element repetitions, these must all represent the same document in different format, or attachment metadata.
   * - **Comment:** content element shall not contain different versions of the same content. For version handling use multiple DocumentReference with .relatesTo.
   * - **Requirements:** Note that .relatesTo may also include references to other DocumentReference with a transforms relationship to represent the same document in multiple formats.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private content: DocumentReferenceContentComponent[] | null;

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
   * @returns the `version` property value as a StringType object if defined; else an empty StringType object
   */
  public getVersionElement(): StringType {
    return this.version ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `version` property.
   *
   * @param element - the `version` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVersionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid DocumentReference.version; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.version = element;
    } else {
      this.version = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  public hasVersionElement(): boolean {
    return isDefined<StringType>(this.version) && !this.version.isEmpty();
  }

  /**
   * @returns the `version` property value as a fhirString if defined; else undefined
   */
  public getVersion(): fhirString | undefined {
    return this.version?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `version` property.
   *
   * @param value - the `version` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVersion(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid DocumentReference.version (${String(value)})`;
      this.version = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.version = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  public hasVersion(): boolean {
    return this.hasVersionElement();
  }

  /**
   * @returns the `basedOn` property value as a Reference array
   */
  public getBasedOn(): Reference[] {
    return this.basedOn ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `basedOn` property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.basedOn', ['Appointment','AppointmentResponse','CarePlan','Claim','CommunicationRequest','Contract','CoverageEligibilityRequest','DeviceRequest','EnrollmentRequest','ImmunizationRecommendation','MedicationRequest','NutritionOrder','RequestOrchestration','ServiceRequest','SupplyRequest','VisionPrescription',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.basedOn', [
    'Appointment',
  
    'AppointmentResponse',
  
    'CarePlan',
  
    'Claim',
  
    'CommunicationRequest',
  
    'Contract',
  
    'CoverageEligibilityRequest',
  
    'DeviceRequest',
  
    'EnrollmentRequest',
  
    'ImmunizationRecommendation',
  
    'MedicationRequest',
  
    'NutritionOrder',
  
    'RequestOrchestration',
  
    'ServiceRequest',
  
    'SupplyRequest',
  
    'VisionPrescription',
  ])
  public setBasedOn(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.basedOn = value;
    } else {
      this.basedOn = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `basedOn` array property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.basedOn', ['Appointment','AppointmentResponse','CarePlan','Claim','CommunicationRequest','Contract','CoverageEligibilityRequest','DeviceRequest','EnrollmentRequest','ImmunizationRecommendation','MedicationRequest','NutritionOrder','RequestOrchestration','ServiceRequest','SupplyRequest','VisionPrescription',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.basedOn', [
    'Appointment',
  
    'AppointmentResponse',
  
    'CarePlan',
  
    'Claim',
  
    'CommunicationRequest',
  
    'Contract',
  
    'CoverageEligibilityRequest',
  
    'DeviceRequest',
  
    'EnrollmentRequest',
  
    'ImmunizationRecommendation',
  
    'MedicationRequest',
  
    'NutritionOrder',
  
    'RequestOrchestration',
  
    'ServiceRequest',
  
    'SupplyRequest',
  
    'VisionPrescription',
  ])
  public addBasedOn(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initBasedOn();
      this.basedOn?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `basedOn` property exists and has a value; `false` otherwise
   */
  public hasBasedOn(): boolean {
    return isDefinedList<Reference>(this.basedOn) && this.basedOn.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `basedOn` property
   */
  private initBasedOn(): void {
    if (!this.hasBasedOn()) {
      this.basedOn = [] as Reference[];
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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `DocumentReference.status is required`);
    const errMsgPrefix = `Invalid DocumentReference.status`;
    assertEnumCodeType<DocumentReferenceStatusEnum>(enumType, DocumentReferenceStatusEnum, errMsgPrefix);
    this.status = enumType;
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
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `DocumentReference.status is required`);
    const optErrMsg = `Invalid DocumentReference.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.documentReferenceStatusEnum);
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
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `DocumentReference.status is required`);
    const optErrMsg = `Invalid DocumentReference.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.documentReferenceStatusEnum);
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
   * @returns the `modality` property value as a CodeableConcept array
   */
  public getModality(): CodeableConcept[] {
    return this.modality ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `modality` property.
   *
   * @param value - the `modality` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setModality(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DocumentReference.modality; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.modality = value;
    } else {
      this.modality = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `modality` array property.
   *
   * @param value - the `modality` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addModality(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DocumentReference.modality; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initModality();
      this.modality?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `modality` property exists and has a value; `false` otherwise
   */
  public hasModality(): boolean {
    return isDefinedList<CodeableConcept>(this.modality) && this.modality.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `modality` property
   */
  private initModality(): void {
    if(!this.hasModality()) {
      this.modality = [] as CodeableConcept[];
    }
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
   * @decorator `@ReferenceTargets('DocumentReference.subject', ['Resource',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.subject', [
    'Resource',
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
   * @returns the `context` property value as a Reference array
   */
  public getContext(): Reference[] {
    return this.context ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `context` property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.context', ['Appointment','Encounter','EpisodeOfCare',])`
   *
   * @param value - the `context` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.context', [
    'Appointment',
  
    'Encounter',
  
    'EpisodeOfCare',
  ])
  public setContext(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.context = value;
    } else {
      this.context = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `context` array property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.context', ['Appointment','Encounter','EpisodeOfCare',])`
   *
   * @param value - the `context` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.context', [
    'Appointment',
  
    'Encounter',
  
    'EpisodeOfCare',
  ])
  public addContext(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initContext();
      this.context?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `context` property exists and has a value; `false` otherwise
   */
  public hasContext(): boolean {
    return isDefinedList<Reference>(this.context) && this.context.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `context` property
   */
  private initContext(): void {
    if (!this.hasContext()) {
      this.context = [] as Reference[];
    }
  }

  /**
   * @returns the `event` property value as a CodeableReference array
   */
  public getEvent(): CodeableReference[] {
    return this.event ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `event` property.
   *
   * @param value - the `event` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEvent(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid DocumentReference.event; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.event = value;
    } else {
      this.event = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `event` array property.
   *
   * @param value - the `event` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEvent(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid DocumentReference.event; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initEvent();
      this.event?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `event` property exists and has a value; `false` otherwise
   */
  public hasEvent(): boolean {
    return isDefinedList<CodeableReference>(this.event) && this.event.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `event` property
   */
  private initEvent(): void {
    if(!this.hasEvent()) {
      this.event = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `bodySite` property value as a CodeableReference array
   */
  public getBodySite(): CodeableReference[] {
    return this.bodySite ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `bodySite` property.
   *
   * @param value - the `bodySite` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBodySite(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid DocumentReference.bodySite; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.bodySite = value;
    } else {
      this.bodySite = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `bodySite` array property.
   *
   * @param value - the `bodySite` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBodySite(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid DocumentReference.bodySite; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initBodySite();
      this.bodySite?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `bodySite` property exists and has a value; `false` otherwise
   */
  public hasBodySite(): boolean {
    return isDefinedList<CodeableReference>(this.bodySite) && this.bodySite.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `bodySite` property
   */
  private initBodySite(): void {
    if(!this.hasBodySite()) {
      this.bodySite = [] as CodeableReference[];
    }
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
      const optErrMsg = `Invalid DocumentReference.facilityType; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid DocumentReference.practiceSetting; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid DocumentReference.period; Provided element is not an instance of Period.`;
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
   * @decorator `@ReferenceTargets('DocumentReference.author', ['Practitioner','PractitionerRole','Organization','Device','Patient','RelatedPerson','CareTeam',])`
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
  
    'CareTeam',
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
   * @decorator `@ReferenceTargets('DocumentReference.author', ['Practitioner','PractitionerRole','Organization','Device','Patient','RelatedPerson','CareTeam',])`
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
  
    'CareTeam',
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
   * @returns the `attester` property value as a DocumentReferenceAttesterComponent array
   */
  public getAttester(): DocumentReferenceAttesterComponent[] {
    return this.attester ?? ([] as DocumentReferenceAttesterComponent[]);
  }

  /**
   * Assigns the provided DocumentReferenceAttesterComponent array value to the `attester` property.
   *
   * @param value - the `attester` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAttester(value: DocumentReferenceAttesterComponent[] | undefined): this {
    if (isDefinedList<DocumentReferenceAttesterComponent>(value)) {
      const optErrMsg = `Invalid DocumentReference.attester; Provided value array has an element that is not an instance of DocumentReferenceAttesterComponent.`;
      assertFhirTypeList<DocumentReferenceAttesterComponent>(value, DocumentReferenceAttesterComponent, optErrMsg);
      this.attester = value;
    } else {
      this.attester = undefined;
    }
    return this;
  }

  /**
   * Add the provided DocumentReferenceAttesterComponent value to the `attester` array property.
   *
   * @param value - the `attester` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAttester(value: DocumentReferenceAttesterComponent | undefined): this {
    if (isDefined<DocumentReferenceAttesterComponent>(value)) {
      const optErrMsg = `Invalid DocumentReference.attester; Provided element is not an instance of DocumentReferenceAttesterComponent.`;
      assertFhirType<DocumentReferenceAttesterComponent>(value, DocumentReferenceAttesterComponent, optErrMsg);
      this.initAttester();
      this.attester?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `attester` property exists and has a value; `false` otherwise
   */
  public hasAttester(): boolean {
    return isDefinedList<DocumentReferenceAttesterComponent>(this.attester) && this.attester.some((item: DocumentReferenceAttesterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `attester` property
   */
  private initAttester(): void {
    if(!this.hasAttester()) {
      this.attester = [] as DocumentReferenceAttesterComponent[];
    }
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
   * @returns the `description` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDescriptionElement(): MarkdownType {
    return this.description ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid DocumentReference.description; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirMarkdown if defined; else undefined
   */
  public getDescription(): fhirMarkdown | undefined {
    return this.description?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid DocumentReference.description (${String(value)})`;
      this.description = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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
  public setContent(value: DocumentReferenceContentComponent[]): this {
    assertIsDefinedList<DocumentReferenceContentComponent>(value, `DocumentReference.content is required`);
    const optErrMsg = `Invalid DocumentReference.content; Provided value array has an element that is not an instance of DocumentReferenceContentComponent.`;
    assertFhirTypeList<DocumentReferenceContentComponent>(value, DocumentReferenceContentComponent, optErrMsg);
    this.content = value;
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
      this.identifier,
      this.version,
      this.basedOn,
      this.status,
      this.docStatus,
      this.modality,
      this.type_,
      this.category,
      this.subject,
      this.context,
      this.event,
      this.bodySite,
      this.facilityType,
      this.practiceSetting,
      this.period,
      this.date,
      this.author,
      this.attester,
      this.custodian,
      this.relatesTo,
      this.description,
      this.securityLabel,
      this.content,
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
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    dest.status = this.status ? this.status.copy() : null;
    dest.docStatus = this.docStatus?.copy();
    const modalityList = copyListValues<CodeableConcept>(this.modality);
    dest.modality = modalityList.length === 0 ? undefined : modalityList;
    dest.type_ = this.type_?.copy();
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.subject = this.subject?.copy();
    const contextList = copyListValues<Reference>(this.context);
    dest.context = contextList.length === 0 ? undefined : contextList;
    const eventList = copyListValues<CodeableReference>(this.event);
    dest.event = eventList.length === 0 ? undefined : eventList;
    const bodySiteList = copyListValues<CodeableReference>(this.bodySite);
    dest.bodySite = bodySiteList.length === 0 ? undefined : bodySiteList;
    dest.facilityType = this.facilityType?.copy();
    dest.practiceSetting = this.practiceSetting?.copy();
    dest.period = this.period?.copy();
    dest.date = this.date?.copy();
    const authorList = copyListValues<Reference>(this.author);
    dest.author = authorList.length === 0 ? undefined : authorList;
    const attesterList = copyListValues<DocumentReferenceAttesterComponent>(this.attester);
    dest.attester = attesterList.length === 0 ? undefined : attesterList;
    dest.custodian = this.custodian?.copy();
    const relatesToList = copyListValues<DocumentReferenceRelatesToComponent>(this.relatesTo);
    dest.relatesTo = relatesToList.length === 0 ? undefined : relatesToList;
    dest.description = this.description?.copy();
    const securityLabelList = copyListValues<CodeableConcept>(this.securityLabel);
    dest.securityLabel = securityLabelList.length === 0 ? undefined : securityLabelList;
    const contentList = copyListValues<DocumentReferenceContentComponent>(this.content);
    dest.content = contentList.length === 0 ? null : contentList;
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   * @throws {@link FhirError} if the instance is missing required properties
   */
  public override toJSON(): JSON.Value | undefined {
    // Required class properties exist (have a min cardinality > 0); therefore, do not check for this.isEmpty()!

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    const missingReqdProperties: string[] = [];

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`DocumentReference.status`);
    }

    if (this.hasDocStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getDocStatusElement()!, 'docStatus', jsonObj);
    }

    if (this.hasModality()) {
      setFhirComplexListJson(this.getModality(), 'modality', jsonObj);
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

    if (this.hasContext()) {
      setFhirComplexListJson(this.getContext(), 'context', jsonObj);
    }

    if (this.hasEvent()) {
      setFhirComplexListJson(this.getEvent(), 'event', jsonObj);
    }

    if (this.hasBodySite()) {
      setFhirComplexListJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasFacilityType()) {
      setFhirComplexJson(this.getFacilityType(), 'facilityType', jsonObj);
    }

    if (this.hasPracticeSetting()) {
      setFhirComplexJson(this.getPracticeSetting(), 'practiceSetting', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexListJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasAttester()) {
      setFhirBackboneElementListJson(this.getAttester(), 'attester', jsonObj);
    }

    if (this.hasCustodian()) {
      setFhirComplexJson(this.getCustodian(), 'custodian', jsonObj);
    }

    if (this.hasRelatesTo()) {
      setFhirBackboneElementListJson(this.getRelatesTo(), 'relatesTo', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasSecurityLabel()) {
      setFhirComplexListJson(this.getSecurityLabel(), 'securityLabel', jsonObj);
    }

    if (this.hasContent()) {
      setFhirBackboneElementListJson(this.getContent(), 'content', jsonObj);
    } else {
      missingReqdProperties.push(`DocumentReference.content`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * DocumentReferenceAttesterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Attests to accuracy of the document
 * - **Definition:** A participant who has authenticated the accuracy of the document.
 * - **Comment:** Only list each attester once.
 * - **Requirements:** Identifies responsibility for the accuracy of the document content.
 *
 * @category Data Models: Resource
 * @see [FHIR DocumentReference](http://hl7.org/fhir/StructureDefinition/DocumentReference)
 */
export class DocumentReferenceAttesterComponent extends BackboneElement implements IBackboneElement {
  constructor(mode: CodeableConcept | null = null) {
    super();

    this.mode = null;
    if (isDefined<CodeableConcept>(mode)) {
      this.setMode(mode);
    }
  }

  /**
   * Parse the provided `DocumentReferenceAttesterComponent` JSON to instantiate the DocumentReferenceAttesterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DocumentReferenceAttesterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DocumentReferenceAttesterComponent
   * @returns DocumentReferenceAttesterComponent data model or undefined for `DocumentReferenceAttesterComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DocumentReferenceAttesterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DocumentReferenceAttesterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DocumentReferenceAttesterComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'mode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setMode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'time';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setTimeElement(datatype);
    }

    fieldName = 'party';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setParty(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * DocumentReference.attester.mode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** personal | professional | legal | official
   * - **Definition:** The type of attestation the authenticator offers.
   * - **Requirements:** Indicates the level of authority of the attestation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private mode: CodeableConcept | null;

  /**
   * DocumentReference.attester.time Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the document was attested
   * - **Definition:** When the document was attested by the party.
   * - **Requirements:** Identifies when the information in the document was deemed accurate.  (Things may have changed since then.).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private time?: DateTimeType | undefined;

  /**
   * DocumentReference.attester.party Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who attested the document
   * - **Definition:** Who attested the document in the specified way.
   * - **Requirements:** Identifies who has taken on the responsibility for accuracy of the document content.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private party?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `mode` property value as a CodeableConcept object if defined; else null
   */
  public getMode(): CodeableConcept | null {
    return this.mode;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `mode` property.
   *
   * @param value - the `mode` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMode(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `DocumentReference.attester.mode is required`);
    const optErrMsg = `Invalid DocumentReference.attester.mode; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.mode = value;
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasMode(): boolean {
    return isDefined<CodeableConcept>(this.mode) && !this.mode.isEmpty();
  }

  /**
   * @returns the `time` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getTimeElement(): DateTimeType {
    return this.time ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `time` property.
   *
   * @param element - the `time` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimeElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid DocumentReference.attester.time; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.time = element;
    } else {
      this.time = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `time` property exists and has a value; `false` otherwise
   */
  public hasTimeElement(): boolean {
    return isDefined<DateTimeType>(this.time) && !this.time.isEmpty();
  }

  /**
   * @returns the `time` property value as a fhirDateTime if defined; else undefined
   */
  public getTime(): fhirDateTime | undefined {
    return this.time?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `time` property.
   *
   * @param value - the `time` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTime(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid DocumentReference.attester.time (${String(value)})`;
      this.time = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.time = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `time` property exists and has a value; `false` otherwise
   */
  public hasTime(): boolean {
    return this.hasTimeElement();
  }

  /**
   * @returns the `party` property value as a Reference object; else an empty Reference object
   */
  public getParty(): Reference {
    return this.party ?? new Reference();
  }

  /**
   * Assigns the provided Party object value to the `party` property.
   *
   * @decorator `@ReferenceTargets('DocumentReference.attester.party', ['Patient','RelatedPerson','Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `party` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DocumentReference.attester.party', [
    'Patient',
  
    'RelatedPerson',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setParty(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.party = value;
    } else {
      this.party = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `party` property exists and has a value; `false` otherwise
   */
  public hasParty(): boolean {
    return isDefined<Reference>(this.party) && !this.party.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DocumentReference.attester';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.mode,
      this.time,
      this.party,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DocumentReferenceAttesterComponent {
    const dest = new DocumentReferenceAttesterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DocumentReferenceAttesterComponent): void {
    super.copyValues(dest);
    dest.mode = this.mode ? this.mode.copy() : null;
    dest.time = this.time?.copy();
    dest.party = this.party?.copy();
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   * @throws {@link FhirError} if the instance is missing required properties
   */
  public override toJSON(): JSON.Value | undefined {
    // Required class properties exist (have a min cardinality > 0); therefore, do not check for this.isEmpty()!

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    const missingReqdProperties: string[] = [];

    if (this.hasMode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getMode()!, 'mode', jsonObj);
    } else {
      missingReqdProperties.push(`DocumentReference.attester.mode`);
    }

    if (this.hasTimeElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getTimeElement(), 'time', jsonObj);
    }

    if (this.hasParty()) {
      setFhirComplexJson(this.getParty(), 'party', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
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
  constructor(code: CodeableConcept | null = null, target: Reference | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }

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
   * @throws {@link FhirError} if the provided JSON is missing required properties
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

    const missingReqdProperties: string[] = [];

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTarget(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * DocumentReference.relatesTo.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The relationship type with another document
   * - **Definition:** The type of relationship that this document has with anther document.
   * - **Comment:** If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

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
   * @returns the `code` property value as a CodeableConcept object if defined; else null
   */
  public getCode(): CodeableConcept | null {
    return this.code;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `DocumentReference.relatesTo.code is required`);
    const optErrMsg = `Invalid DocumentReference.relatesTo.code; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.code = value;
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `target` property value as a Reference object if defined; else null
   */
  public getTarget(): Reference | null {
    return this.target;
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
  public setTarget(value: Reference): this {
    assertIsDefined<Reference>(value, `DocumentReference.relatesTo.target is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.target = value;
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
   * @throws {@link FhirError} if the instance is missing required properties
   */
  public override toJSON(): JSON.Value | undefined {
    // Required class properties exist (have a min cardinality > 0); therefore, do not check for this.isEmpty()!

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    const missingReqdProperties: string[] = [];

    if (this.hasCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCode()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`DocumentReference.relatesTo.code`);
    }

    if (this.hasTarget()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getTarget()!, 'target', jsonObj);
    } else {
      missingReqdProperties.push(`DocumentReference.relatesTo.target`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
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
 * - **Definition:** The document and format referenced.  If there are multiple content element repetitions, these must all represent the same document in different format, or attachment metadata.
 * - **Comment:** content element shall not contain different versions of the same content. For version handling use multiple DocumentReference with .relatesTo.
 * - **Requirements:** Note that .relatesTo may also include references to other DocumentReference with a transforms relationship to represent the same document in multiple formats.
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
   * @throws {@link FhirError} if the provided JSON is missing required properties
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

    const missingReqdProperties: string[] = [];

    fieldName = 'attachment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Attachment | undefined = Attachment.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setAttachment(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'profile';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DocumentReferenceContentProfileComponent | undefined = DocumentReferenceContentProfileComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProfile(component);
        }
      });
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
   * DocumentReference.content.profile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Content profile rules for the document
   * - **Definition:** An identifier of the document constraints, encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.
   * - **Comment:** Note that IHE often issues URNs for formatCode codes, not all documents can be identified by a URI. For FHIR content, .profile should indicate the structureDefinition profile canonical URI(s) that the content complies with.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private profile?: DocumentReferenceContentProfileComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `attachment` property value as a Attachment object if defined; else null
   */
  public getAttachment(): Attachment | null {
    return this.attachment;
  }

  /**
   * Assigns the provided Attachment object value to the `attachment` property.
   *
   * @param value - the `attachment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAttachment(value: Attachment): this {
    assertIsDefined<Attachment>(value, `DocumentReference.content.attachment is required`);
    const optErrMsg = `Invalid DocumentReference.content.attachment; Provided element is not an instance of Attachment.`;
    assertFhirType<Attachment>(value, Attachment, optErrMsg);
    this.attachment = value;
    return this;
  }

  /**
   * @returns `true` if the `attachment` property exists and has a value; `false` otherwise
   */
  public hasAttachment(): boolean {
    return isDefined<Attachment>(this.attachment) && !this.attachment.isEmpty();
  }

  /**
   * @returns the `profile` property value as a DocumentReferenceContentProfileComponent array
   */
  public getProfile(): DocumentReferenceContentProfileComponent[] {
    return this.profile ?? ([] as DocumentReferenceContentProfileComponent[]);
  }

  /**
   * Assigns the provided DocumentReferenceContentProfileComponent array value to the `profile` property.
   *
   * @param value - the `profile` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProfile(value: DocumentReferenceContentProfileComponent[] | undefined): this {
    if (isDefinedList<DocumentReferenceContentProfileComponent>(value)) {
      const optErrMsg = `Invalid DocumentReference.content.profile; Provided value array has an element that is not an instance of DocumentReferenceContentProfileComponent.`;
      assertFhirTypeList<DocumentReferenceContentProfileComponent>(value, DocumentReferenceContentProfileComponent, optErrMsg);
      this.profile = value;
    } else {
      this.profile = undefined;
    }
    return this;
  }

  /**
   * Add the provided DocumentReferenceContentProfileComponent value to the `profile` array property.
   *
   * @param value - the `profile` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProfile(value: DocumentReferenceContentProfileComponent | undefined): this {
    if (isDefined<DocumentReferenceContentProfileComponent>(value)) {
      const optErrMsg = `Invalid DocumentReference.content.profile; Provided element is not an instance of DocumentReferenceContentProfileComponent.`;
      assertFhirType<DocumentReferenceContentProfileComponent>(value, DocumentReferenceContentProfileComponent, optErrMsg);
      this.initProfile();
      this.profile?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfile(): boolean {
    return isDefinedList<DocumentReferenceContentProfileComponent>(this.profile) && this.profile.some((item: DocumentReferenceContentProfileComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `profile` property
   */
  private initProfile(): void {
    if(!this.hasProfile()) {
      this.profile = [] as DocumentReferenceContentProfileComponent[];
    }
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
      this.profile,
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
    const profileList = copyListValues<DocumentReferenceContentProfileComponent>(this.profile);
    dest.profile = profileList.length === 0 ? undefined : profileList;
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   * @throws {@link FhirError} if the instance is missing required properties
   */
  public override toJSON(): JSON.Value | undefined {
    // Required class properties exist (have a min cardinality > 0); therefore, do not check for this.isEmpty()!

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    const missingReqdProperties: string[] = [];

    if (this.hasAttachment()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getAttachment()!, 'attachment', jsonObj);
    } else {
      missingReqdProperties.push(`DocumentReference.content.attachment`);
    }

    if (this.hasProfile()) {
      setFhirBackboneElementListJson(this.getProfile(), 'profile', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * DocumentReferenceContentProfileComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Content profile rules for the document
 * - **Definition:** An identifier of the document constraints, encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.
 * - **Comment:** Note that IHE often issues URNs for formatCode codes, not all documents can be identified by a URI. For FHIR content, .profile should indicate the structureDefinition profile canonical URI(s) that the content complies with.
 *
 * @category Data Models: Resource
 * @see [FHIR DocumentReference](http://hl7.org/fhir/StructureDefinition/DocumentReference)
 */
export class DocumentReferenceContentProfileComponent extends BackboneElement implements IBackboneElement {
  constructor(value: IDataType | null = null) {
    super();

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `DocumentReferenceContentProfileComponent` JSON to instantiate the DocumentReferenceContentProfileComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DocumentReferenceContentProfileComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DocumentReferenceContentProfileComponent
   * @returns DocumentReferenceContentProfileComponent data model or undefined for `DocumentReferenceContentProfileComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DocumentReferenceContentProfileComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DocumentReferenceContentProfileComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DocumentReferenceContentProfileComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = DocumentReferenceContentProfileComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for DocumentReferenceContentProfileComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (value === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setValue(value);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * DocumentReference.content.profile.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('DocumentReference.content.profile.value[x]', ['Coding','uri','canonical',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code|uri|canonical
   * - **Definition:** Code|uri|canonical.
   * - **FHIR Types:**
   *     'Coding',
   *     'uri',
   *     'canonical',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('DocumentReference.content.profile.value[x]',[
    'Coding',
    'uri',
    'canonical',
  ])
  private value: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('DocumentReference.content.profile.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('DocumentReference.content.profile.value[x]')
  public setValue(value: IDataType): this {
    assertIsDefined<IDataType>(value, `DocumentReference.content.profile.value[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.value = value;
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
   * @returns the `value` property value as a Coding object if defined; else null
   */
  public getValueCoding(): Coding | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for DocumentReference.content.profile.value[x]: Expected Coding but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Coding and has a value; `false` otherwise
   */
  public hasValueCoding(): boolean {
    return this.hasValue() && this.value instanceof Coding;
  }

  /**
   * @returns the `value` property value as a UriType object if defined; else null
   */
  public getValueUriType(): UriType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for DocumentReference.content.profile.value[x]: Expected UriType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UriType and has a value; `false` otherwise
   */
  public hasValueUriType(): boolean {
    return this.hasValue() && this.value instanceof UriType;
  }

  /**
   * @returns the `value` property value as a CanonicalType object if defined; else null
   */
  public getValueCanonicalType(): CanonicalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for DocumentReference.content.profile.value[x]: Expected CanonicalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasValueCanonicalType(): boolean {
    return this.hasValue() && this.value instanceof CanonicalType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DocumentReference.content.profile';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DocumentReferenceContentProfileComponent {
    const dest = new DocumentReferenceContentProfileComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DocumentReferenceContentProfileComponent): void {
    super.copyValues(dest);
    dest.value = this.value ? this.value.copy() as IDataType : null;
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   * @throws {@link FhirError} if the instance is missing required properties
   */
  public override toJSON(): JSON.Value | undefined {
    // Required class properties exist (have a min cardinality > 0); therefore, do not check for this.isEmpty()!

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    const missingReqdProperties: string[] = [];

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`DocumentReference.content.profile.value[x]`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
