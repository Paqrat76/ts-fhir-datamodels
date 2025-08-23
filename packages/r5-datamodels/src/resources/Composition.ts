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
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  JSON,
  PrimitiveType,
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
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
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
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, CodeableReference, Identifier, Narrative, PARSABLE_DATATYPE_MAP, Period, Reference, RelatedArtifact, UsageContext } from '../complex-types/complex-datatypes';
import { CompositionStatusEnum } from '../code-systems/CompositionStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

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
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Composition](http://hl7.org/fhir/StructureDefinition/Composition)
 */
export class Composition extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, type_: CodeableConcept | null = null, date: DateTimeType | fhirDateTime | null = null, author: Reference[] | null = null, title: StringType | fhirString | null = null) {
    super();

    this.compositionStatusEnum = new CompositionStatusEnum();

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
   * @throws {@link FhirError} if the provided JSON is missing required properties
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

    const missingReqdProperties: string[] = [];

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setUrlElement(datatype);
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

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSubject(datatype);
        }
      });
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
        missingReqdProperties.push(sourceField);
      } else {
        instance.setDateElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'useContext';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: UsageContext | undefined = UsageContext.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addUseContext(datatype);
        }
      });
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addAuthor(datatype);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTitleElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNote(datatype);
        }
      });
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
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: RelatedArtifact | undefined = RelatedArtifact.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRelatesTo(datatype);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Composition.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this Composition, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this Composition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this Composition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the Composition is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.
   * - **Requirements:** Allows the Composition to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * Composition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Version-independent identifier for the Composition
   * - **Definition:** A version-independent identifier for the Composition. This identifier stays constant as the composition is changed over time.
   * - **Comment:** Similar to ClinicalDocument/setId in CDA. See discussion in resource definition for how these relate.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Composition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An explicitly assigned identifer of a variation of the content in the Composition
   * - **Definition:** An explicitly assigned identifer of a variation of the content in the Composition.
   * - **Comment:** While each resource, including the composition itself, has its own version identifier, this is a formal identifier for the logical version of the Composition as a whole. It would remain constant if the resources were moved to a new server, and all got new individual resource versions, for example.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

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
   * - **Short:** registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown
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
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference[] | undefined;

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
   * - **Comment:** The Last Modified Date on the composition may be after the date of the document was attested without being changed. This means that the date on an amended document is the date of the amendment, not the date of original authorship.
   * - **Requirements:** dateTime is used for tracking, organizing versions and searching. Note that this is the time of authoring this version of the Composition. When packaged in a document, [Bundle.timestamp](https://hl7.org/fhir/bundle-definitions.html#Bundle.timestamp) is the date of packaging.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date: DateTimeType | null;

  /**
   * Composition.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate Composition instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

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
   * Composition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this Composition (computer friendly)
   * - **Definition:** A natural language name identifying the {{title}}. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

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
   * Composition.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For any additional notes
   * - **Definition:** For any additional notes.
   * - **Comment:** A comment, general note or annotation not coded elsewhere.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

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
   * - **Comment:** To reference (using relatesTo) a Bundle of type "document" or another Composition where you only have the identifier, use a resourceReference with an identifier.\ When a Composition is an alternate representation of another type of document e.g. CDA, the other document could be referenced in a DocumentReference resource.   Here is an example of using relatesTo to reference another Bundle of type "document" or Composition where you only have the identifier: ``` "relatesTo": [{   "type": "replaces",   "resourceReference": {     "identifier": {        "system": "...",        "value": "..."     }   }  }] ```
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatesTo?: RelatedArtifact[] | undefined;

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
  public setUrlElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Composition.url; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.url = element;
    } else {
      this.url = undefined;
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
   * @returns the `url` property value as a fhirUri if defined; else undefined
   */
  public getUrl(): fhirUri | undefined {
    return this.url?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `url` property.
   *
   * @param value - the `url` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrl(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Composition.url (${String(value)})`;
      this.url = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.url = undefined;
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
      const optErrMsg = `Invalid Composition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Composition.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Composition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Composition.version (${String(value)})`;
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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `Composition.status is required`);
    const errMsgPrefix = `Invalid Composition.status`;
    assertEnumCodeType<CompositionStatusEnum>(enumType, CompositionStatusEnum, errMsgPrefix);
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
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Composition.status is required`);
    const optErrMsg = `Invalid Composition.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.compositionStatusEnum);
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
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Composition.status is required`);
    const optErrMsg = `Invalid Composition.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.compositionStatusEnum);
    return this;
  }

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  public hasStatus(): boolean {
    return this.hasStatusEnumType();
  }

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else null
   */
  public getType(): CodeableConcept | null {
    return this.type_;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Composition.type is required`);
    const optErrMsg = `Invalid Composition.type; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.type_ = value;
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
   * @returns the `subject` property value as a Reference array
   */
  public getSubject(): Reference[] {
    return this.subject ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('Composition.subject', ['Resource',])`
   *
   * @param value - the `subject` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.subject', [
    'Resource',
  ])
  public setSubject(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `subject` array property.
   *
   * @decorator `@ReferenceTargets('Composition.subject', ['Resource',])`
   *
   * @param value - the `subject` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Composition.subject', [
    'Resource',
  ])
  public addSubject(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSubject();
      this.subject?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefinedList<Reference>(this.subject) && this.subject.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `subject` property
   */
  private initSubject(): void {
    if (!this.hasSubject()) {
      this.subject = [] as Reference[];
    }
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
   * @returns the `date` property value as a DateTimeType object if defined; else null
   */
  public getDateElement(): DateTimeType | null {
    return this.date;
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateTimeType): this {
    assertIsDefined<DateTimeType>(element, `Composition.date is required`);
    const optErrMsg = `Invalid Composition.date; Provided value is not an instance of DateTimeType.`;
    assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
    this.date = element;
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
  public setDate(value: fhirDateTime): this {
    assertIsDefined<fhirDateTime>(value, `Composition.date is required`);
    const optErrMsg = `Invalid Composition.date (${String(value)})`;
    this.date = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDate(): boolean {
    return this.hasDateElement();
  }

  /**
   * @returns the `useContext` property value as a UsageContext array
   */
  public getUseContext(): UsageContext[] {
    return this.useContext ?? ([] as UsageContext[]);
  }

  /**
   * Assigns the provided UsageContext array value to the `useContext` property.
   *
   * @param value - the `useContext` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUseContext(value: UsageContext[] | undefined): this {
    if (isDefinedList<UsageContext>(value)) {
      const optErrMsg = `Invalid Composition.useContext; Provided value array has an element that is not an instance of UsageContext.`;
      assertFhirTypeList<UsageContext>(value, UsageContext, optErrMsg);
      this.useContext = value;
    } else {
      this.useContext = undefined;
    }
    return this;
  }

  /**
   * Add the provided UsageContext value to the `useContext` array property.
   *
   * @param value - the `useContext` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addUseContext(value: UsageContext | undefined): this {
    if (isDefined<UsageContext>(value)) {
      const optErrMsg = `Invalid Composition.useContext; Provided element is not an instance of UsageContext.`;
      assertFhirType<UsageContext>(value, UsageContext, optErrMsg);
      this.initUseContext();
      this.useContext?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `useContext` property exists and has a value; `false` otherwise
   */
  public hasUseContext(): boolean {
    return isDefinedList<UsageContext>(this.useContext) && this.useContext.some((item: UsageContext) => !item.isEmpty());
  }

  /**
   * Initialize the `useContext` property
   */
  private initUseContext(): void {
    if(!this.hasUseContext()) {
      this.useContext = [] as UsageContext[];
    }
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
  public setAuthor(value: Reference[]): this {
    assertIsDefinedList<Reference>(value, `Composition.author is required`);
    // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.author = value;
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
      const optErrMsg = `Invalid Composition.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Composition.name (${String(value)})`;
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
   * @returns the `title` property value as a StringType object if defined; else null
   */
  public getTitleElement(): StringType | null {
    return this.title;
  }

  /**
   * Assigns the provided PrimitiveType value to the `title` property.
   *
   * @param element - the `title` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTitleElement(element: StringType): this {
    assertIsDefined<StringType>(element, `Composition.title is required`);
    const optErrMsg = `Invalid Composition.title; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.title = element;
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
  public setTitle(value: fhirString): this {
    assertIsDefined<fhirString>(value, `Composition.title is required`);
    const optErrMsg = `Invalid Composition.title (${String(value)})`;
    this.title = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `title` property exists and has a value; `false` otherwise
   */
  public hasTitle(): boolean {
    return this.hasTitleElement();
  }

  /**
   * @returns the `note` property value as a Annotation array
   */
  public getNote(): Annotation[] {
    return this.note ?? ([] as Annotation[]);
  }

  /**
   * Assigns the provided Annotation array value to the `note` property.
   *
   * @param value - the `note` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNote(value: Annotation[] | undefined): this {
    if (isDefinedList<Annotation>(value)) {
      const optErrMsg = `Invalid Composition.note; Provided value array has an element that is not an instance of Annotation.`;
      assertFhirTypeList<Annotation>(value, Annotation, optErrMsg);
      this.note = value;
    } else {
      this.note = undefined;
    }
    return this;
  }

  /**
   * Add the provided Annotation value to the `note` array property.
   *
   * @param value - the `note` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNote(value: Annotation | undefined): this {
    if (isDefined<Annotation>(value)) {
      const optErrMsg = `Invalid Composition.note; Provided element is not an instance of Annotation.`;
      assertFhirType<Annotation>(value, Annotation, optErrMsg);
      this.initNote();
      this.note?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `note` property exists and has a value; `false` otherwise
   */
  public hasNote(): boolean {
    return isDefinedList<Annotation>(this.note) && this.note.some((item: Annotation) => !item.isEmpty());
  }

  /**
   * Initialize the `note` property
   */
  private initNote(): void {
    if(!this.hasNote()) {
      this.note = [] as Annotation[];
    }
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
   * @returns the `relatesTo` property value as a RelatedArtifact array
   */
  public getRelatesTo(): RelatedArtifact[] {
    return this.relatesTo ?? ([] as RelatedArtifact[]);
  }

  /**
   * Assigns the provided RelatedArtifact array value to the `relatesTo` property.
   *
   * @param value - the `relatesTo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatesTo(value: RelatedArtifact[] | undefined): this {
    if (isDefinedList<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid Composition.relatesTo; Provided value array has an element that is not an instance of RelatedArtifact.`;
      assertFhirTypeList<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.relatesTo = value;
    } else {
      this.relatesTo = undefined;
    }
    return this;
  }

  /**
   * Add the provided RelatedArtifact value to the `relatesTo` array property.
   *
   * @param value - the `relatesTo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatesTo(value: RelatedArtifact | undefined): this {
    if (isDefined<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid Composition.relatesTo; Provided element is not an instance of RelatedArtifact.`;
      assertFhirType<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.initRelatesTo();
      this.relatesTo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatesTo` property exists and has a value; `false` otherwise
   */
  public hasRelatesTo(): boolean {
    return isDefinedList<RelatedArtifact>(this.relatesTo) && this.relatesTo.some((item: RelatedArtifact) => !item.isEmpty());
  }

  /**
   * Initialize the `relatesTo` property
   */
  private initRelatesTo(): void {
    if(!this.hasRelatesTo()) {
      this.relatesTo = [] as RelatedArtifact[];
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
      this.url,
      this.identifier,
      this.version,
      this.status,
      this.type_,
      this.category,
      this.subject,
      this.encounter,
      this.date,
      this.useContext,
      this.author,
      this.name,
      this.title,
      this.note,
      this.attester,
      this.custodian,
      this.relatesTo,
      this.event,
      this.section,
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
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    const subjectList = copyListValues<Reference>(this.subject);
    dest.subject = subjectList.length === 0 ? undefined : subjectList;
    dest.encounter = this.encounter?.copy();
    dest.date = this.date ? this.date.copy() : null;
    const useContextList = copyListValues<UsageContext>(this.useContext);
    dest.useContext = useContextList.length === 0 ? undefined : useContextList;
    const authorList = copyListValues<Reference>(this.author);
    dest.author = authorList.length === 0 ? null : authorList;
    dest.name = this.name?.copy();
    dest.title = this.title ? this.title.copy() : null;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const attesterList = copyListValues<CompositionAttesterComponent>(this.attester);
    dest.attester = attesterList.length === 0 ? undefined : attesterList;
    dest.custodian = this.custodian?.copy();
    const relatesToList = copyListValues<RelatedArtifact>(this.relatesTo);
    dest.relatesTo = relatesToList.length === 0 ? undefined : relatesToList;
    const eventList = copyListValues<CompositionEventComponent>(this.event);
    dest.event = eventList.length === 0 ? undefined : eventList;
    const sectionList = copyListValues<CompositionSectionComponent>(this.section);
    dest.section = sectionList.length === 0 ? undefined : sectionList;
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

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUrlElement(), 'url', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`Composition.status`);
    }

    if (this.hasType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getType()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`Composition.type`);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexListJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasDateElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement()!, 'date', jsonObj);
    } else {
      missingReqdProperties.push(`Composition.date`);
    }

    if (this.hasUseContext()) {
      setFhirComplexListJson(this.getUseContext(), 'useContext', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexListJson(this.getAuthor(), 'author', jsonObj);
    } else {
      missingReqdProperties.push(`Composition.author`);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasTitleElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getTitleElement()!, 'title', jsonObj);
    } else {
      missingReqdProperties.push(`Composition.title`);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasAttester()) {
      setFhirBackboneElementListJson(this.getAttester(), 'attester', jsonObj);
    }

    if (this.hasCustodian()) {
      setFhirComplexJson(this.getCustodian(), 'custodian', jsonObj);
    }

    if (this.hasRelatesTo()) {
      setFhirComplexListJson(this.getRelatesTo(), 'relatesTo', jsonObj);
    }

    if (this.hasEvent()) {
      setFhirBackboneElementListJson(this.getEvent(), 'event', jsonObj);
    }

    if (this.hasSection()) {
      setFhirBackboneElementListJson(this.getSection(), 'section', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
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
  constructor(mode: CodeableConcept | null = null) {
    super();

    this.mode = null;
    if (isDefined<CodeableConcept>(mode)) {
      this.setMode(mode);
    }
  }

  /**
   * Parse the provided `CompositionAttesterComponent` JSON to instantiate the CompositionAttesterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CompositionAttesterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CompositionAttesterComponent
   * @returns CompositionAttesterComponent data model or undefined for `CompositionAttesterComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
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
   * Composition.attester.mode Element
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
    assertIsDefined<CodeableConcept>(value, `Composition.attester.mode is required`);
    const optErrMsg = `Invalid Composition.attester.mode; Provided element is not an instance of CodeableConcept.`;
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
      missingReqdProperties.push(`Composition.attester.mode`);
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
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDetail(datatype);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

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
   * - **Short:** The event(s) being documented, as code(s), reference(s), or both
   * - **Definition:** Represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which case the procedure being documented is necessarily a "History and Physical" act. The events may be included as a code or as a reference to an other resource.
   * - **Comment:** An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more events are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private detail?: CodeableReference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
   * @returns the `detail` property value as a CodeableReference array
   */
  public getDetail(): CodeableReference[] {
    return this.detail ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `detail` property.
   *
   * @param value - the `detail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDetail(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid Composition.event.detail; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `detail` array property.
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDetail(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Composition.event.detail; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initDetail();
      this.detail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefinedList<CodeableReference>(this.detail) && this.detail.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `detail` property
   */
  private initDetail(): void {
    if(!this.hasDetail()) {
      this.detail = [] as CodeableReference[];
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
    dest.period = this.period?.copy();
    const detailList = copyListValues<CodeableReference>(this.detail);
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
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
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
    

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
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
