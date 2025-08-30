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
 * Composition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Composition
 * StructureDefinition.name: Composition
 * StructureDefinition.description: A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
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
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirString,
  fhirStringSchema,
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
import { CodeableConcept, Identifier, Narrative, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { CompositionAttestationModeEnum } from '../code-systems/CompositionAttestationModeEnum';
import { CompositionStatusEnum } from '../code-systems/CompositionStatusEnum';
import { DocumentRelationshipTypeEnum } from '../code-systems/DocumentRelationshipTypeEnum';
import { ListModeEnum } from '../code-systems/ListModeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { V3ConfidentialityEnum } from '../code-systems/V3ConfidentialityEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Composition Class
 *
 * @remarks
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 *
 * To support documents, and also to capture the EN13606 notion of an attested commit to the patient EHR, and to allow a set of disparate resources at the information/engineering level to be gathered into a clinical statement.
 *
 * **FHIR Specification**
 * - **Short:** A set of resources composed into a single coherent clinical statement with clinical attestation
 * - **Definition:** A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 * - **Comment:** While the focus of this specification is on patient-specific clinical statements, this resource can also apply to other healthcare-related statements such as study protocol designs, healthcare invoices and other activities that are not necessarily patient-specific or clinical.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR Composition](http://hl7.org/fhir/StructureDefinition/Composition)
 */
export class Composition extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, type_: CodeableConcept | null = null, date: DateTimeType | fhirDateTime | null = null, author: Reference[] | null = null, title: StringType | fhirString | null = null) {
    super();

    this.compositionStatusEnum = new CompositionStatusEnum();
    this.v3ConfidentialityEnum = new V3ConfidentialityEnum();

    this.status = constructorCodeValueAsEnumCodeType<CompositionStatusEnum>(
      status,
      CompositionStatusEnum,
      this.compositionStatusEnum,
      'Composition.status',
    );

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.date = null;
    if (isDefined<DateTimeType | fhirDateTime>(date)) {
      if (date instanceof PrimitiveType) {
        this.setDateElement(date);
      } else {
        this.setDate(date);
      }
    }

    this.author = null;
    if (isDefinedList<Reference>(author)) {
      this.setAuthor(author);
    }

    this.title = null;
    if (isDefined<StringType | fhirString>(title)) {
      if (title instanceof PrimitiveType) {
        this.setTitleElement(title);
      } else {
        this.setTitle(title);
      }
    }
  }

  /**
   * Parse the provided `Composition` JSON to instantiate the Composition data model.
   *
   * @param sourceJson - JSON representing FHIR `Composition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Composition
   * @returns Composition data model or undefined for `Composition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Composition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Composition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Composition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Composition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

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
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setType(datatype);
      }
    } else {
      instance.setType(null);
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

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setDate(null);
      } else {
        instance.setDateElement(datatype);
      }
    } else {
      instance.setDate(null);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype === undefined) {
          instance.setAuthor(null);
        } else {
          instance.addAuthor(datatype);
        }
      });
    } else {
      instance.setAuthor(null);
    }

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setTitle(null);
      } else {
        instance.setTitleElement(datatype);
      }
    } else {
      instance.setTitle(null);
    }

    fieldName = 'confidentiality';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setConfidentialityElement(datatype);
    }

    fieldName = 'attester';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CompositionAttesterComponent | undefined = CompositionAttesterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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
        const component: CompositionRelatesToComponent | undefined = CompositionRelatesToComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRelatesTo(component);
        }
      });
    }

    fieldName = 'event';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CompositionEventComponent | undefined = CompositionEventComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addEvent(component);
        }
      });
    }

    fieldName = 'section';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CompositionSectionComponent | undefined = CompositionSectionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSection(component);
        }
      });
    }

    return instance;
  }

  /**
   * Composition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Version-independent identifier for the Composition
   * - **Definition:** A version-independent identifier for the Composition. This identifier stays constant as the composition is changed over time.
   * - **Comment:** Similar to ClinicalDocument/setId in CDA. See discussion in resource definition for how these relate.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * FHIR CodeSystem: CompositionStatus
   *
   * @see {@link CompositionStatusEnum }
   */
  private readonly compositionStatusEnum: CompositionStatusEnum;

  /**
   * Composition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** preliminary | final | amended | entered-in-error
   * - **Definition:** The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.
   * - **Comment:** If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements.    Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
   * - **Requirements:** Need to be able to mark interim, amended, or withdrawn compositions or documents.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Composition.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of composition (LOINC if possible)
   * - **Definition:** Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.
   * - **Comment:** For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specific LOINC code, or use LOINC as an extensible binding.
   * - **Requirements:** Key metadata element describing the composition, used in searching/filtering.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * Composition.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Categorization of Composition
   * - **Definition:** A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.
   * - **Comment:** This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
   * - **Requirements:** Helps humans to assess whether the composition is of interest when viewing an index of compositions or documents.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * Composition.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who and/or what the composition is about
   * - **Definition:** Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).
   * - **Comment:** For clinical documents, this is usually the patient.
   * - **Requirements:** Essential metadata for searching for the composition. Identifies who and/or what the composition/document is about.
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
   * Composition.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Context of the Composition
   * - **Definition:** Describes the clinical encounter or type of care this documentation is associated with.
   * - **Requirements:** Provides context for the composition and supports searching.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private encounter?: Reference | undefined;

  /**
   * Composition.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Composition editing time
   * - **Definition:** The composition editing time, when the composition was last logically changed by the author.
   * - **Comment:** The Last Modified Date on the composition may be after the date of the document was attested without being changed.
   * - **Requirements:** dateTime is used for tracking, organizing versions and searching. Note that this is the time of *authoring*. When packaged in a document, [Bundle.timestamp](https://hl7.org/fhir/bundle-definitions.html#Bundle.timestamp) is the date of packaging.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date: DateTimeType | null;

  /**
   * Composition.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who and/or what authored the composition
   * - **Definition:** Identifies who is responsible for the information in the composition, not necessarily who typed it in.
   * - **Requirements:** Identifies who is responsible for the content.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author: Reference[] | null;

  /**
   * Composition.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human Readable name/title
   * - **Definition:** Official human-readable label for the composition.
   * - **Comment:** For many compositions, the title is the same as the text or a display name of Composition.type (e.g. a "consultation" or "progress note"). Note that CDA does not make title mandatory, but there are no known cases where it is useful for title to be omitted, so it is mandatory here. Feedback on this requirement is welcome during the trial use period.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title: StringType | null;

  /**
   * FHIR CodeSystem: V3Confidentiality
   *
   * @see {@link V3ConfidentialityEnum }
   */
  private readonly v3ConfidentialityEnum: V3ConfidentialityEnum;

  /**
   * Composition.confidentiality Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** As defined by affinity domain
   * - **Definition:** The code specifying the level of confidentiality of the Composition.
   * - **Comment:** The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the base specification, and delegated to implementation profiles (see security section).  This element is labeled as a modifier because highly confidential documents must not be treated as if they are not.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link V3ConfidentialityEnum }
   */
  private confidentiality?: EnumCodeType | undefined;

  /**
   * Composition.attester Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Attests to accuracy of composition
   * - **Definition:** A participant who has attested to the accuracy of the composition/document.
   * - **Comment:** Only list each attester once.
   * - **Requirements:** Identifies responsibility for the accuracy of the composition content.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private attester?: CompositionAttesterComponent[] | undefined;

  /**
   * Composition.custodian Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization which maintains the composition
   * - **Definition:** Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information.
   * - **Comment:** This is useful when documents are derived from a composition - provides guidance for how to get the latest version of the document. This is optional because this is sometimes not known by the authoring system, and can be inferred by context. However, it is important that this information be known when working with a derived document, so providing a custodian is encouraged.
   * - **Requirements:** Identifies where to go to find the current version, where to report issues, etc.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private custodian?: Reference | undefined;

  /**
   * Composition.relatesTo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relationships to other compositions/documents
   * - **Definition:** Relationships that this composition has with other compositions or documents that already exist.
   * - **Comment:** A document is a version specific composition.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatesTo?: CompositionRelatesToComponent[] | undefined;

  /**
   * Composition.event Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The clinical service(s) being documented
   * - **Definition:** The clinical service, such as a colonoscopy or an appendectomy, being documented.
   * - **Comment:** The event needs to be consistent with the type element, though can provide further information if desired.
   * - **Requirements:** Provides context for the composition and creates a linkage between a resource describing an event and the composition created describing the event.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private event?: CompositionEventComponent[] | undefined;

  /**
   * Composition.section Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Composition is broken into sections
   * - **Definition:** The root of the sections that make up the composition.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private section?: CompositionSectionComponent[] | undefined;

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
      const optErrMsg = `Invalid Composition.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Composition.status`;
      assertEnumCodeType<CompositionStatusEnum>(enumType, CompositionStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Composition.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.compositionStatusEnum);
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
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link CompositionStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Composition.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.compositionStatusEnum);
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
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Composition.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = null;
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
      const optErrMsg = `Invalid Composition.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Composition.category; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('Composition.subject', ['Resource',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.subject', [
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
   * @returns the `encounter` property value as a Reference object; else an empty Reference object
   */
  public getEncounter(): Reference {
    return this.encounter ?? new Reference();
  }

  /**
   * Assigns the provided Encounter object value to the `encounter` property.
   *
   * @decorator `@ReferenceTargets('Composition.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.encounter', [
    'Encounter',
  ])
  public setEncounter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.encounter = value;
    } else {
      this.encounter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `encounter` property exists and has a value; `false` otherwise
   */
  public hasEncounter(): boolean {
    return isDefined<Reference>(this.encounter) && !this.encounter.isEmpty();
  }

  /**
   * @returns the `date` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateElement(): DateTimeType {
    return this.date ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateTimeType | undefined | null): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Composition.date; Provided value is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.date = element;
    } else {
      this.date = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDateElement(): boolean {
    return isDefined<DateTimeType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDateTime if defined; else null
   */
  public getDate(): fhirDateTime | null {
    if (this.date?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.date.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDateTime | undefined | null): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Composition.date (${String(value)})`;
      this.date = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.date = null;
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
   * @decorator `@ReferenceTargets('Composition.author', ['Practitioner','PractitionerRole','Device','Patient','RelatedPerson','Organization',])`
   *
   * @param value - the `author` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.author', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Patient',
  
    'RelatedPerson',
  
    'Organization',
  ])
  public setAuthor(value: Reference[] | undefined | null): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.author = value;
    } else {
      this.author = null;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `author` array property.
   *
   * @decorator `@ReferenceTargets('Composition.author', ['Practitioner','PractitionerRole','Device','Patient','RelatedPerson','Organization',])`
   *
   * @param value - the `author` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.author', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Patient',
  
    'RelatedPerson',
  
    'Organization',
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
   * @returns the `title` property value as a StringType object if defined; else an empty StringType object
   */
  public getTitleElement(): StringType {
    return this.title ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `title` property.
   *
   * @param element - the `title` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTitleElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Composition.title; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.title = element;
    } else {
      this.title = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `title` property exists and has a value; `false` otherwise
   */
  public hasTitleElement(): boolean {
    return isDefined<StringType>(this.title) && !this.title.isEmpty();
  }

  /**
   * @returns the `title` property value as a fhirString if defined; else null
   */
  public getTitle(): fhirString | null {
    if (this.title?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.title.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `title` property.
   *
   * @param value - the `title` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTitle(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Composition.title (${String(value)})`;
      this.title = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.title = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `title` property exists and has a value; `false` otherwise
   */
  public hasTitle(): boolean {
    return this.hasTitleElement();
  }

  /**
   * @returns the `confidentiality` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link V3ConfidentialityEnum }
   */
  public getConfidentialityEnumType(): EnumCodeType | undefined {
    return this.confidentiality;
  }

  /**
   * Assigns the provided EnumCodeType value to the `confidentiality` property.
   *
   * @param enumType - the `confidentiality` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link V3ConfidentialityEnum }
   */
  public setConfidentialityEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Composition.confidentiality';
      assertEnumCodeType<V3ConfidentialityEnum>(enumType, V3ConfidentialityEnum, errMsgPrefix);
      this.confidentiality = enumType;
    } else {
      this.confidentiality = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `confidentiality` property exists and has a value; `false` otherwise
   */
  public hasConfidentialityEnumType(): boolean {
    return isDefined<EnumCodeType>(this.confidentiality) && !this.confidentiality.isEmpty() && this.confidentiality.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `confidentiality` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link V3ConfidentialityEnum }
   */
  public getConfidentialityElement(): CodeType | undefined {
    if (this.confidentiality === undefined) {
      return undefined;
    }
    return this.confidentiality as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `confidentiality` property.
   *
   * @param element - the `confidentiality` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link V3ConfidentialityEnum }
   */
  public setConfidentialityElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Composition.confidentiality; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.confidentiality = new EnumCodeType(element, this.v3ConfidentialityEnum);
    } else {
      this.confidentiality = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `confidentiality` property exists and has a value; `false` otherwise
   */
  public hasConfidentialityElement(): boolean {
    return this.hasConfidentialityEnumType();
  }

  /**
   * @returns the `confidentiality` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link V3ConfidentialityEnum }
   */
  public getConfidentiality(): fhirCode | undefined {
    if (this.confidentiality === undefined) {
      return undefined;
    }
    return this.confidentiality.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `confidentiality` property.
   *
   * @param value - the `confidentiality` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link V3ConfidentialityEnum }
   */
  public setConfidentiality(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Composition.confidentiality; Provided value is not an instance of fhirCode.`;
      this.confidentiality = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.v3ConfidentialityEnum);
    } else {
      this.confidentiality = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `confidentiality` property exists and has a value; `false` otherwise
   */
  public hasConfidentiality(): boolean {
    return this.hasConfidentialityEnumType();
  }

  /**
   * @returns the `attester` property value as a CompositionAttesterComponent array
   */
  public getAttester(): CompositionAttesterComponent[] {
    return this.attester ?? ([] as CompositionAttesterComponent[]);
  }

  /**
   * Assigns the provided CompositionAttesterComponent array value to the `attester` property.
   *
   * @param value - the `attester` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAttester(value: CompositionAttesterComponent[] | undefined): this {
    if (isDefinedList<CompositionAttesterComponent>(value)) {
      const optErrMsg = `Invalid Composition.attester; Provided value array has an element that is not an instance of CompositionAttesterComponent.`;
      assertFhirTypeList<CompositionAttesterComponent>(value, CompositionAttesterComponent, optErrMsg);
      this.attester = value;
    } else {
      this.attester = undefined;
    }
    return this;
  }

  /**
   * Add the provided CompositionAttesterComponent value to the `attester` array property.
   *
   * @param value - the `attester` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAttester(value: CompositionAttesterComponent | undefined): this {
    if (isDefined<CompositionAttesterComponent>(value)) {
      const optErrMsg = `Invalid Composition.attester; Provided element is not an instance of CompositionAttesterComponent.`;
      assertFhirType<CompositionAttesterComponent>(value, CompositionAttesterComponent, optErrMsg);
      this.initAttester();
      this.attester?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `attester` property exists and has a value; `false` otherwise
   */
  public hasAttester(): boolean {
    return isDefinedList<CompositionAttesterComponent>(this.attester) && this.attester.some((item: CompositionAttesterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `attester` property
   */
  private initAttester(): void {
    if(!this.hasAttester()) {
      this.attester = [] as CompositionAttesterComponent[];
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
   * @decorator `@ReferenceTargets('Composition.custodian', ['Organization',])`
   *
   * @param value - the `custodian` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.custodian', [
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
   * @returns the `relatesTo` property value as a CompositionRelatesToComponent array
   */
  public getRelatesTo(): CompositionRelatesToComponent[] {
    return this.relatesTo ?? ([] as CompositionRelatesToComponent[]);
  }

  /**
   * Assigns the provided CompositionRelatesToComponent array value to the `relatesTo` property.
   *
   * @param value - the `relatesTo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatesTo(value: CompositionRelatesToComponent[] | undefined): this {
    if (isDefinedList<CompositionRelatesToComponent>(value)) {
      const optErrMsg = `Invalid Composition.relatesTo; Provided value array has an element that is not an instance of CompositionRelatesToComponent.`;
      assertFhirTypeList<CompositionRelatesToComponent>(value, CompositionRelatesToComponent, optErrMsg);
      this.relatesTo = value;
    } else {
      this.relatesTo = undefined;
    }
    return this;
  }

  /**
   * Add the provided CompositionRelatesToComponent value to the `relatesTo` array property.
   *
   * @param value - the `relatesTo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatesTo(value: CompositionRelatesToComponent | undefined): this {
    if (isDefined<CompositionRelatesToComponent>(value)) {
      const optErrMsg = `Invalid Composition.relatesTo; Provided element is not an instance of CompositionRelatesToComponent.`;
      assertFhirType<CompositionRelatesToComponent>(value, CompositionRelatesToComponent, optErrMsg);
      this.initRelatesTo();
      this.relatesTo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatesTo` property exists and has a value; `false` otherwise
   */
  public hasRelatesTo(): boolean {
    return isDefinedList<CompositionRelatesToComponent>(this.relatesTo) && this.relatesTo.some((item: CompositionRelatesToComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relatesTo` property
   */
  private initRelatesTo(): void {
    if(!this.hasRelatesTo()) {
      this.relatesTo = [] as CompositionRelatesToComponent[];
    }
  }

  /**
   * @returns the `event` property value as a CompositionEventComponent array
   */
  public getEvent(): CompositionEventComponent[] {
    return this.event ?? ([] as CompositionEventComponent[]);
  }

  /**
   * Assigns the provided CompositionEventComponent array value to the `event` property.
   *
   * @param value - the `event` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEvent(value: CompositionEventComponent[] | undefined): this {
    if (isDefinedList<CompositionEventComponent>(value)) {
      const optErrMsg = `Invalid Composition.event; Provided value array has an element that is not an instance of CompositionEventComponent.`;
      assertFhirTypeList<CompositionEventComponent>(value, CompositionEventComponent, optErrMsg);
      this.event = value;
    } else {
      this.event = undefined;
    }
    return this;
  }

  /**
   * Add the provided CompositionEventComponent value to the `event` array property.
   *
   * @param value - the `event` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEvent(value: CompositionEventComponent | undefined): this {
    if (isDefined<CompositionEventComponent>(value)) {
      const optErrMsg = `Invalid Composition.event; Provided element is not an instance of CompositionEventComponent.`;
      assertFhirType<CompositionEventComponent>(value, CompositionEventComponent, optErrMsg);
      this.initEvent();
      this.event?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `event` property exists and has a value; `false` otherwise
   */
  public hasEvent(): boolean {
    return isDefinedList<CompositionEventComponent>(this.event) && this.event.some((item: CompositionEventComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `event` property
   */
  private initEvent(): void {
    if(!this.hasEvent()) {
      this.event = [] as CompositionEventComponent[];
    }
  }

  /**
   * @returns the `section` property value as a CompositionSectionComponent array
   */
  public getSection(): CompositionSectionComponent[] {
    return this.section ?? ([] as CompositionSectionComponent[]);
  }

  /**
   * Assigns the provided CompositionSectionComponent array value to the `section` property.
   *
   * @param value - the `section` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSection(value: CompositionSectionComponent[] | undefined): this {
    if (isDefinedList<CompositionSectionComponent>(value)) {
      const optErrMsg = `Invalid Composition.section; Provided value array has an element that is not an instance of CompositionSectionComponent.`;
      assertFhirTypeList<CompositionSectionComponent>(value, CompositionSectionComponent, optErrMsg);
      this.section = value;
    } else {
      this.section = undefined;
    }
    return this;
  }

  /**
   * Add the provided CompositionSectionComponent value to the `section` array property.
   *
   * @param value - the `section` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSection(value: CompositionSectionComponent | undefined): this {
    if (isDefined<CompositionSectionComponent>(value)) {
      const optErrMsg = `Invalid Composition.section; Provided element is not an instance of CompositionSectionComponent.`;
      assertFhirType<CompositionSectionComponent>(value, CompositionSectionComponent, optErrMsg);
      this.initSection();
      this.section?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `section` property exists and has a value; `false` otherwise
   */
  public hasSection(): boolean {
    return isDefinedList<CompositionSectionComponent>(this.section) && this.section.some((item: CompositionSectionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `section` property
   */
  private initSection(): void {
    if(!this.hasSection()) {
      this.section = [] as CompositionSectionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Composition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.type_,
      this.category,
      this.subject,
      this.encounter,
      this.date,
      this.author,
      this.title,
      this.confidentiality,
      this.attester,
      this.custodian,
      this.relatesTo,
      this.event,
      this.section,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.type_, this.date, this.title, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Composition {
    const dest = new Composition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Composition): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.subject = this.subject?.copy();
    dest.encounter = this.encounter?.copy();
    dest.date = this.date ? this.date.copy() : null;
    const authorList = copyListValues<Reference>(this.author);
    dest.author = authorList.length === 0 ? null : authorList;
    dest.title = this.title ? this.title.copy() : null;
    dest.confidentiality = this.confidentiality?.copy();
    const attesterList = copyListValues<CompositionAttesterComponent>(this.attester);
    dest.attester = attesterList.length === 0 ? undefined : attesterList;
    dest.custodian = this.custodian?.copy();
    const relatesToList = copyListValues<CompositionRelatesToComponent>(this.relatesTo);
    dest.relatesTo = relatesToList.length === 0 ? undefined : relatesToList;
    const eventList = copyListValues<CompositionEventComponent>(this.event);
    dest.event = eventList.length === 0 ? undefined : eventList;
    const sectionList = copyListValues<CompositionSectionComponent>(this.section);
    dest.section = sectionList.length === 0 ? undefined : sectionList;
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

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    } else {
      jsonObj['date'] = null;
    }

    if (this.hasAuthor()) {
      setFhirComplexListJson(this.getAuthor(), 'author', jsonObj);
    } else {
      jsonObj['author'] = null;
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    } else {
      jsonObj['title'] = null;
    }

    if (this.hasConfidentialityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getConfidentialityElement()!, 'confidentiality', jsonObj);
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

    if (this.hasEvent()) {
      setFhirBackboneElementListJson(this.getEvent(), 'event', jsonObj);
    }

    if (this.hasSection()) {
      setFhirBackboneElementListJson(this.getSection(), 'section', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * CompositionAttesterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Attests to accuracy of composition
 * - **Definition:** A participant who has attested to the accuracy of the composition/document.
 * - **Comment:** Only list each attester once.
 * - **Requirements:** Identifies responsibility for the accuracy of the composition content.
 *
 * @category Data Models: Resource
 * @see [FHIR Composition](http://hl7.org/fhir/StructureDefinition/Composition)
 */
export class CompositionAttesterComponent extends BackboneElement implements IBackboneElement {
  constructor(mode: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.compositionAttestationModeEnum = new CompositionAttestationModeEnum();

    this.mode = constructorCodeValueAsEnumCodeType<CompositionAttestationModeEnum>(
      mode,
      CompositionAttestationModeEnum,
      this.compositionAttestationModeEnum,
      'Composition.attester.mode',
    );
  }

  /**
   * Parse the provided `CompositionAttesterComponent` JSON to instantiate the CompositionAttesterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CompositionAttesterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CompositionAttesterComponent
   * @returns CompositionAttesterComponent data model or undefined for `CompositionAttesterComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CompositionAttesterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CompositionAttesterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CompositionAttesterComponent();

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
      if (datatype === undefined) {
        instance.setMode(null);
      } else {
        instance.setModeElement(datatype);
      }
    } else {
      instance.setMode(null);
    }

    fieldName = 'time';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
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

    return instance;
  }

  /**
   * FHIR CodeSystem: CompositionAttestationMode
   *
   * @see {@link CompositionAttestationModeEnum }
   */
  private readonly compositionAttestationModeEnum: CompositionAttestationModeEnum;

  /**
   * Composition.attester.mode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** personal | professional | legal | official
   * - **Definition:** The type of attestation the authenticator offers.
   * - **Requirements:** Indicates the level of authority of the attestation.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link CompositionAttestationModeEnum }
   */
  private mode: EnumCodeType | null;

  /**
   * Composition.attester.time Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the composition was attested
   * - **Definition:** When the composition was attested by the party.
   * - **Requirements:** Identifies when the information in the composition was deemed accurate.  (Things may have changed since then.).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private time?: DateTimeType | undefined;

  /**
   * Composition.attester.party Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who attested the composition
   * - **Definition:** Who attested the composition in the specified way.
   * - **Requirements:** Identifies who has taken on the responsibility for accuracy of the composition content.
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
   * @returns the `mode` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link CompositionAttestationModeEnum }
   */
  public getModeEnumType(): EnumCodeType | null {
    return this.mode;
  }

  /**
   * Assigns the provided EnumCodeType value to the `mode` property.
   *
   * @param enumType - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link CompositionAttestationModeEnum }
   */
  public setModeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Composition.attester.mode`;
      assertEnumCodeType<CompositionAttestationModeEnum>(enumType, CompositionAttestationModeEnum, errMsgPrefix);
      this.mode = enumType;
    } else {
      this.mode = null;
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
   * @returns the `mode` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link CompositionAttestationModeEnum }
   */
  public getModeElement(): CodeType | null {
    if (this.mode === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link CompositionAttestationModeEnum }
   */
  public setModeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Composition.attester.mode; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.mode = new EnumCodeType(element, this.compositionAttestationModeEnum);
    } else {
      this.mode = null;
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
   * @returns the `mode` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link CompositionAttestationModeEnum }
   */
  public getMode(): fhirCode | null {
    if (this.mode === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link CompositionAttestationModeEnum }
   */
  public setMode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Composition.attester.mode (${String(value)})`;
      this.mode = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.compositionAttestationModeEnum);
    } else {
      this.mode = null;
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
      const optErrMsg = `Invalid Composition.attester.time; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid Composition.attester.time (${String(value)})`;
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
   * @decorator `@ReferenceTargets('Composition.attester.party', ['Patient','RelatedPerson','Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `party` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.attester.party', [
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
    return 'Composition.attester';
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.mode, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CompositionAttesterComponent {
    const dest = new CompositionAttesterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CompositionAttesterComponent): void {
    super.copyValues(dest);
    dest.mode = this.mode ? this.mode.copy() : null;
    dest.time = this.time?.copy();
    dest.party = this.party?.copy();
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
    } else {
      jsonObj['mode'] = null;
    }

    if (this.hasTimeElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getTimeElement(), 'time', jsonObj);
    }

    if (this.hasParty()) {
      setFhirComplexJson(this.getParty(), 'party', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CompositionRelatesToComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Relationships to other compositions/documents
 * - **Definition:** Relationships that this composition has with other compositions or documents that already exist.
 * - **Comment:** A document is a version specific composition.
 *
 * @category Data Models: Resource
 * @see [FHIR Composition](http://hl7.org/fhir/StructureDefinition/Composition)
 */
export class CompositionRelatesToComponent extends BackboneElement implements IBackboneElement {
  constructor(code: EnumCodeType | CodeType | fhirCode | null = null, target: IDataType | null = null) {
    super();

    this.documentRelationshipTypeEnum = new DocumentRelationshipTypeEnum();

    this.code = constructorCodeValueAsEnumCodeType<DocumentRelationshipTypeEnum>(
      code,
      DocumentRelationshipTypeEnum,
      this.documentRelationshipTypeEnum,
      'Composition.relatesTo.code',
    );

    this.target = null;
    if (isDefined<IDataType>(target)) {
      this.setTarget(target);
    }

  }

  /**
   * Parse the provided `CompositionRelatesToComponent` JSON to instantiate the CompositionRelatesToComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CompositionRelatesToComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CompositionRelatesToComponent
   * @returns CompositionRelatesToComponent data model or undefined for `CompositionRelatesToComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CompositionRelatesToComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CompositionRelatesToComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CompositionRelatesToComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = CompositionRelatesToComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for CompositionRelatesToComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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

    fieldName = 'target[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const target: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (target === undefined) {
      instance.setTarget(null);
    } else {
      instance.setTarget(target);
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
   * Composition.relatesTo.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** replaces | transforms | signs | appends
   * - **Definition:** The type of relationship that this composition has with anther composition or document.
   * - **Comment:** If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link DocumentRelationshipTypeEnum }
   */
  private code: EnumCodeType | null;

  /**
   * Composition.relatesTo.target[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Composition.relatesTo.target[x]', ['Identifier','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Target of the relationship
   * - **Definition:** The target composition/document of this relationship.
   * - **FHIR Types:**
   *     'Identifier',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Composition.relatesTo.target[x]',[
    'Identifier',
    'Reference',
  ])
  private target: IDataType | null;

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
      const errMsgPrefix = `Invalid Composition.relatesTo.code`;
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
      const optErrMsg = `Invalid Composition.relatesTo.code; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid Composition.relatesTo.code (${String(value)})`;
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
   * @returns the `target` property value as a DataType object; else null
   */
  public getTarget(): IDataType | null {
    return this.target;
  }

  /**
   * Assigns the provided DataType object value to the `target` property.
   *
   * @decorator `@ChoiceDataTypes('Composition.relatesTo.target[x]')`
   *
   * @param value - the `target` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Composition.relatesTo.target[x]')
  public setTarget(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.target) && !this.target.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `target` property value as a Identifier object if defined; else null
   */
  public getTargetIdentifier(): Identifier | null {
    if (!isDefined<IDataType>(this.target)) {
      return null;
    }
    if (!(this.target instanceof Identifier)) {
      throw new InvalidTypeError(
        `DataType mismatch for Composition.relatesTo.target[x]: Expected Identifier but encountered ${this.target.fhirType()}`,
      );
    }
    return this.target;
  }

  /**
   * @returns `true` if the `` property exists as a Identifier and has a value; `false` otherwise
   */
  public hasTargetIdentifier(): boolean {
    return this.hasTarget() && this.target instanceof Identifier;
  }

  /**
   * @returns the `target` property value as a Reference object if defined; else null
   */
  public getTargetReference(): Reference | null {
    if (!isDefined<IDataType>(this.target)) {
      return null;
    }
    if (!(this.target instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Composition.relatesTo.target[x]: Expected Reference but encountered ${this.target.fhirType()}`,
      );
    }
    return this.target;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasTargetReference(): boolean {
    return this.hasTarget() && this.target instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Composition.relatesTo';
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
  public override copy(): CompositionRelatesToComponent {
    const dest = new CompositionRelatesToComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CompositionRelatesToComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.target = this.target ? this.target.copy() as IDataType : null;
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
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasTarget()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTarget()!, 'target', jsonObj);
    } else {
      jsonObj['target'] = null;
    }

    return jsonObj;
  }
}
/**
 * CompositionEventComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The clinical service(s) being documented
 * - **Definition:** The clinical service, such as a colonoscopy or an appendectomy, being documented.
 * - **Comment:** The event needs to be consistent with the type element, though can provide further information if desired.
 * - **Requirements:** Provides context for the composition and creates a linkage between a resource describing an event and the composition created describing the event.
 *
 * @category Data Models: Resource
 * @see [FHIR Composition](http://hl7.org/fhir/StructureDefinition/Composition)
 */
export class CompositionEventComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CompositionEventComponent` JSON to instantiate the CompositionEventComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CompositionEventComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CompositionEventComponent
   * @returns CompositionEventComponent data model or undefined for `CompositionEventComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CompositionEventComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CompositionEventComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CompositionEventComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCode(datatype);
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

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDetail(datatype);
        }
      });
  }

    return instance;
  }

  /**
   * Composition.event.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code(s) that apply to the event being documented
   * - **Definition:** This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
   * - **Comment:** An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept[] | undefined;

  /**
   * Composition.event.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The period covered by the documentation
   * - **Definition:** The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * Composition.event.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The event(s) being documented
   * - **Definition:** The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private detail?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept array
   */
  public getCode(): CodeableConcept[] {
    return this.code ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `code` property.
   *
   * @param value - the `code` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Composition.event.code; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `code` array property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Composition.event.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCode();
      this.code?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefinedList<CodeableConcept>(this.code) && this.code.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `code` property
   */
  private initCode(): void {
    if(!this.hasCode()) {
      this.code = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid Composition.event.period; Provided element is not an instance of Period.`;
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
   * @returns the `detail` property value as a Reference array
   */
  public getDetail(): Reference[] {
    return this.detail ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `detail` property.
   *
   * @decorator `@ReferenceTargets('Composition.event.detail', ['Resource',])`
   *
   * @param value - the `detail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.event.detail', [
    'Resource',
  ])
  public setDetail(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `detail` array property.
   *
   * @decorator `@ReferenceTargets('Composition.event.detail', ['Resource',])`
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.event.detail', [
    'Resource',
  ])
  public addDetail(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDetail();
      this.detail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefinedList<Reference>(this.detail) && this.detail.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `detail` property
   */
  private initDetail(): void {
    if (!this.hasDetail()) {
      this.detail = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Composition.event';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.period,
      this.detail,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CompositionEventComponent {
    const dest = new CompositionEventComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CompositionEventComponent): void {
    super.copyValues(dest);
    const codeList = copyListValues<CodeableConcept>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    dest.period = this.period?.copy();
    const detailList = copyListValues<Reference>(this.detail);
    dest.detail = detailList.length === 0 ? undefined : detailList;
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
      setFhirComplexListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasDetail()) {
      setFhirComplexListJson(this.getDetail(), 'detail', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CompositionSectionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Composition is broken into sections
 * - **Definition:** The root of the sections that make up the composition.
 *
 * @category Data Models: Resource
 * @see [FHIR Composition](http://hl7.org/fhir/StructureDefinition/Composition)
 */
export class CompositionSectionComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.listModeEnum = new ListModeEnum();
  }

  /**
   * Parse the provided `CompositionSectionComponent` JSON to instantiate the CompositionSectionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CompositionSectionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CompositionSectionComponent
   * @returns CompositionSectionComponent data model or undefined for `CompositionSectionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CompositionSectionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CompositionSectionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CompositionSectionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTitleElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
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

    fieldName = 'focus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFocus(datatype);
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Narrative | undefined = Narrative.parse(classJsonObj[fieldName]!, sourceField);
      instance.setText(datatype);
    }

    fieldName = 'mode';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setModeElement(datatype);
    }

    fieldName = 'orderedBy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrderedBy(datatype);
    }

    fieldName = 'entry';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEntry(datatype);
        }
      });
  }

    fieldName = 'emptyReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEmptyReason(datatype);
    }

    fieldName = 'section';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CompositionSectionComponent | undefined = CompositionSectionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSection(component);
        }
      });
    }

    return instance;
  }

  /**
   * Composition.section.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for section (e.g. for ToC)
   * - **Definition:** The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.
   * - **Comment:** The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section. Most Implementation Guides will make section title to be a required element.
   * - **Requirements:** Section headings are often standardized for different types of documents.  They give guidance to humans on how the document is organized.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title?: StringType | undefined;

  /**
   * Composition.section.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of section (recommended)
   * - **Definition:** A code identifying the kind of content contained within the section. This must be consistent with the section title.
   * - **Comment:** The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.    If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
   * - **Requirements:** Provides computable standardized labels to topics within the document.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept | undefined;

  /**
   * Composition.section.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who and/or what authored the section
   * - **Definition:** Identifies who is responsible for the information in this section, not necessarily who typed it in.
   * - **Requirements:** Identifies who is responsible for the content.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private author?: Reference[] | undefined;

  /**
   * Composition.section.focus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who/what the section is about, when it is not about the subject of composition
   * - **Definition:** The actual focus of the section when it is not the subject of the composition, but instead represents something or someone associated with the subject such as (for a patient subject) a spouse, parent, fetus, or donor. If not focus is specified, the focus is assumed to be focus of the parent section, or, for a section in the Composition itself, the subject of the composition. Sections with a focus SHALL only include resources where the logical subject (patient, subject, focus, etc.) matches the section focus, or the resources have no logical subject (few resources).
   * - **Comment:** Typically, sections in a doument are about the subject of the document, whether that is a  patient, or group of patients, location, or device, or whatever. For some kind of documents, some sections actually contain data about related entities. Typical examples are  a section in a newborn discharge summary concerning the mother, or family history documents, with a section about each family member, though there are many other examples.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private focus?: Reference | undefined;

  /**
   * Composition.section.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text summary of the section, for human interpretation
   * - **Definition:** A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative.
   * - **Comment:** Document profiles may define what content should be represented in the narrative to ensure clinical safety.
   * - **FHIR Type:** `Narrative`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text?: Narrative | undefined;

  /**
   * FHIR CodeSystem: ListMode
   *
   * @see {@link ListModeEnum }
   */
  private readonly listModeEnum: ListModeEnum;

  /**
   * Composition.section.mode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** working | snapshot | changes
   * - **Definition:** How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
   * - **Comment:** This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
   * - **Requirements:** Sections are used in various ways, and it must be known in what way it is safe to use the entries in them.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ListModeEnum }
   */
  private mode?: EnumCodeType | undefined;

  /**
   * Composition.section.orderedBy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Order of section entries
   * - **Definition:** Specifies the order applied to the items in the section entries.
   * - **Comment:** Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
   * - **Requirements:** Important for presentation and rendering.  Lists may be sorted to place more important information first or to group related entries.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private orderedBy?: CodeableConcept | undefined;

  /**
   * Composition.section.entry Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A reference to data that supports this section
   * - **Definition:** A reference to the actual resource from which the narrative in the section is derived.
   * - **Comment:** If there are no entries in the list, an emptyReason SHOULD be provided.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private entry?: Reference[] | undefined;

  /**
   * Composition.section.emptyReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why the section is empty
   * - **Definition:** If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
   * - **Comment:** The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
   * - **Requirements:** Allows capturing things like "none exist" or "not asked" which can be important for most lists.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private emptyReason?: CodeableConcept | undefined;

  /**
   * Composition.section.section Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Nested Section
   * - **Definition:** A nested sub-section within this section.
   * - **Comment:** Nested sections are primarily used to help human readers navigate to particular portions of the document.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private section?: CompositionSectionComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `title` property value as a StringType object if defined; else an empty StringType object
   */
  public getTitleElement(): StringType {
    return this.title ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `title` property.
   *
   * @param element - the `title` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTitleElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Composition.section.title; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.title = element;
    } else {
      this.title = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `title` property exists and has a value; `false` otherwise
   */
  public hasTitleElement(): boolean {
    return isDefined<StringType>(this.title) && !this.title.isEmpty();
  }

  /**
   * @returns the `title` property value as a fhirString if defined; else undefined
   */
  public getTitle(): fhirString | undefined {
    return this.title?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `title` property.
   *
   * @param value - the `title` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTitle(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Composition.section.title (${String(value)})`;
      this.title = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.title = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `title` property exists and has a value; `false` otherwise
   */
  public hasTitle(): boolean {
    return this.hasTitleElement();
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
      const optErrMsg = `Invalid Composition.section.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `author` property value as a Reference array
   */
  public getAuthor(): Reference[] {
    return this.author ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `author` property.
   *
   * @decorator `@ReferenceTargets('Composition.section.author', ['Practitioner','PractitionerRole','Device','Patient','RelatedPerson','Organization',])`
   *
   * @param value - the `author` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.section.author', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Patient',
  
    'RelatedPerson',
  
    'Organization',
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
   * @decorator `@ReferenceTargets('Composition.section.author', ['Practitioner','PractitionerRole','Device','Patient','RelatedPerson','Organization',])`
   *
   * @param value - the `author` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.section.author', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Patient',
  
    'RelatedPerson',
  
    'Organization',
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
   * @returns the `focus` property value as a Reference object; else an empty Reference object
   */
  public getFocus(): Reference {
    return this.focus ?? new Reference();
  }

  /**
   * Assigns the provided Focus object value to the `focus` property.
   *
   * @decorator `@ReferenceTargets('Composition.section.focus', ['Resource',])`
   *
   * @param value - the `focus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.section.focus', [
    'Resource',
  ])
  public setFocus(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.focus = value;
    } else {
      this.focus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `focus` property exists and has a value; `false` otherwise
   */
  public hasFocus(): boolean {
    return isDefined<Reference>(this.focus) && !this.focus.isEmpty();
  }

  /**
   * @returns the `text` property value as a Narrative object if defined; else an empty Narrative object
   */
  public getText(): Narrative {
    return this.text ?? new Narrative();
  }

  /**
   * Assigns the provided Text object value to the `text` property.
   *
   * @param value - the `text` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setText(value: Narrative | undefined): this {
    if (isDefined<Narrative>(value)) {
      const optErrMsg = `Invalid Composition.section.text; Provided element is not an instance of Narrative.`;
      assertFhirType<Narrative>(value, Narrative, optErrMsg);
      this.text = value;
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return isDefined<Narrative>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `mode` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ListModeEnum }
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
   * @see CodeSystem Enumeration: {@link ListModeEnum }
   */
  public setModeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Composition.section.mode';
      assertEnumCodeType<ListModeEnum>(enumType, ListModeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ListModeEnum }
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
   * @see CodeSystem Enumeration: {@link ListModeEnum }
   */
  public setModeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Composition.section.mode; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.mode = new EnumCodeType(element, this.listModeEnum);
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
   * @see CodeSystem Enumeration: {@link ListModeEnum }
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
   * @see CodeSystem Enumeration: {@link ListModeEnum }
   */
  public setMode(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Composition.section.mode; Provided value is not an instance of fhirCode.`;
      this.mode = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.listModeEnum);
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
   * @returns the `orderedBy` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOrderedBy(): CodeableConcept {
    return this.orderedBy ?? new CodeableConcept();
  }

  /**
   * Assigns the provided OrderedBy object value to the `orderedBy` property.
   *
   * @param value - the `orderedBy` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOrderedBy(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Composition.section.orderedBy; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.orderedBy = value;
    } else {
      this.orderedBy = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `orderedBy` property exists and has a value; `false` otherwise
   */
  public hasOrderedBy(): boolean {
    return isDefined<CodeableConcept>(this.orderedBy) && !this.orderedBy.isEmpty();
  }

  /**
   * @returns the `entry` property value as a Reference array
   */
  public getEntry(): Reference[] {
    return this.entry ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `entry` property.
   *
   * @decorator `@ReferenceTargets('Composition.section.entry', ['Resource',])`
   *
   * @param value - the `entry` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.section.entry', [
    'Resource',
  ])
  public setEntry(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.entry = value;
    } else {
      this.entry = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `entry` array property.
   *
   * @decorator `@ReferenceTargets('Composition.section.entry', ['Resource',])`
   *
   * @param value - the `entry` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.section.entry', [
    'Resource',
  ])
  public addEntry(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEntry();
      this.entry?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `entry` property exists and has a value; `false` otherwise
   */
  public hasEntry(): boolean {
    return isDefinedList<Reference>(this.entry) && this.entry.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `entry` property
   */
  private initEntry(): void {
    if (!this.hasEntry()) {
      this.entry = [] as Reference[];
    }
  }

  /**
   * @returns the `emptyReason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getEmptyReason(): CodeableConcept {
    return this.emptyReason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided EmptyReason object value to the `emptyReason` property.
   *
   * @param value - the `emptyReason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEmptyReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Composition.section.emptyReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.emptyReason = value;
    } else {
      this.emptyReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `emptyReason` property exists and has a value; `false` otherwise
   */
  public hasEmptyReason(): boolean {
    return isDefined<CodeableConcept>(this.emptyReason) && !this.emptyReason.isEmpty();
  }

  /**
   * @returns the `section` property value as a CompositionSectionComponent array
   */
  public getSection(): CompositionSectionComponent[] {
    return this.section ?? ([] as CompositionSectionComponent[]);
  }

  /**
   * Assigns the provided CompositionSectionComponent array value to the `section` property.
   *
   * @param value - the `section` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSection(value: CompositionSectionComponent[] | undefined): this {
    if (isDefinedList<CompositionSectionComponent>(value)) {
      const optErrMsg = `Invalid Composition.section.section; Provided value array has an element that is not an instance of CompositionSectionComponent.`;
      assertFhirTypeList<CompositionSectionComponent>(value, CompositionSectionComponent, optErrMsg);
      this.section = value;
    } else {
      this.section = undefined;
    }
    return this;
  }

  /**
   * Add the provided CompositionSectionComponent value to the `section` array property.
   *
   * @param value - the `section` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSection(value: CompositionSectionComponent | undefined): this {
    if (isDefined<CompositionSectionComponent>(value)) {
      const optErrMsg = `Invalid Composition.section.section; Provided element is not an instance of CompositionSectionComponent.`;
      assertFhirType<CompositionSectionComponent>(value, CompositionSectionComponent, optErrMsg);
      this.initSection();
      this.section?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `section` property exists and has a value; `false` otherwise
   */
  public hasSection(): boolean {
    return isDefinedList<CompositionSectionComponent>(this.section) && this.section.some((item: CompositionSectionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `section` property
   */
  private initSection(): void {
    if(!this.hasSection()) {
      this.section = [] as CompositionSectionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Composition.section';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.title,
      this.code,
      this.author,
      this.focus,
      this.text,
      this.mode,
      this.orderedBy,
      this.entry,
      this.emptyReason,
      this.section,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CompositionSectionComponent {
    const dest = new CompositionSectionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CompositionSectionComponent): void {
    super.copyValues(dest);
    dest.title = this.title?.copy();
    dest.code = this.code?.copy();
    const authorList = copyListValues<Reference>(this.author);
    dest.author = authorList.length === 0 ? undefined : authorList;
    dest.focus = this.focus?.copy();
    dest.text = this.text?.copy();
    dest.mode = this.mode?.copy();
    dest.orderedBy = this.orderedBy?.copy();
    const entryList = copyListValues<Reference>(this.entry);
    dest.entry = entryList.length === 0 ? undefined : entryList;
    dest.emptyReason = this.emptyReason?.copy();
    const sectionList = copyListValues<CompositionSectionComponent>(this.section);
    dest.section = sectionList.length === 0 ? undefined : sectionList;
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

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexListJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasFocus()) {
      setFhirComplexJson(this.getFocus(), 'focus', jsonObj);
    }

    if (this.hasText()) {
      setFhirComplexJson(this.getText(), 'text', jsonObj);
    }

    if (this.hasModeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getModeElement()!, 'mode', jsonObj);
    }

    if (this.hasOrderedBy()) {
      setFhirComplexJson(this.getOrderedBy(), 'orderedBy', jsonObj);
    }

    if (this.hasEntry()) {
      setFhirComplexListJson(this.getEntry(), 'entry', jsonObj);
    }

    if (this.hasEmptyReason()) {
      setFhirComplexJson(this.getEmptyReason(), 'emptyReason', jsonObj);
    }

    if (this.hasSection()) {
      setFhirBackboneElementListJson(this.getSection(), 'section', jsonObj);
    }

    return jsonObj;
  }
}
