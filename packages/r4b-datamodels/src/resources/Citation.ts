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
 * Citation Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Citation
 * StructureDefinition.name: Citation
 * StructureDefinition.description: The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
 * StructureDefinition.fhirVersion: 4.3.0
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
  MarkdownType,
  PositiveIntType,
  PrimitiveType,
  ReferenceTargets,
  StringType,
  UriType,
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
  fhirDate,
  fhirDateSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirPositiveInt,
  fhirPositiveIntSchema,
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
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Address, Annotation, Attachment, CodeableConcept, ContactDetail, ContactPoint, HumanName, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference, UsageContext } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Citation Class
 *
 * @remarks
 * The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
 *
 * **FHIR Specification**
 * - **Short:** A description of identification, location, or contributorship of a publication (article or artifact)
 * - **Definition:** The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class Citation extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'Citation.status',
    );
  }

  /**
   * Parse the provided `Citation` JSON to instantiate the Citation data model.
   *
   * @param sourceJson - JSON representing FHIR `Citation`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Citation
   * @returns Citation data model or undefined for `Citation`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Citation | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Citation';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Citation();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Citation');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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
      instance.setTitleElement(datatype);
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

    fieldName = 'experimental';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setExperimentalElement(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'publisher';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPublisherElement(datatype);
    }

    fieldName = 'contact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addContact(datatype);
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

    fieldName = 'jurisdiction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addJurisdiction(datatype);
        }
      });
    }

    fieldName = 'purpose';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setPurposeElement(datatype);
    }

    fieldName = 'copyright';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setCopyrightElement(datatype);
    }

    fieldName = 'approvalDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setApprovalDateElement(datatype);
    }

    fieldName = 'lastReviewDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setLastReviewDateElement(datatype);
    }

    fieldName = 'effectivePeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEffectivePeriod(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAuthor(datatype);
        }
      });
    }

    fieldName = 'editor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEditor(datatype);
        }
      });
    }

    fieldName = 'reviewer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReviewer(datatype);
        }
      });
    }

    fieldName = 'endorser';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEndorser(datatype);
        }
      });
    }

    fieldName = 'summary';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationSummaryComponent | undefined = CitationSummaryComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSummary(component);
        }
      });
    }

    fieldName = 'classification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationClassificationComponent | undefined = CitationClassificationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addClassification(component);
        }
      });
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

    fieldName = 'currentState';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCurrentState(datatype);
        }
      });
    }

    fieldName = 'statusDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationStatusDateComponent | undefined = CitationStatusDateComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStatusDate(component);
        }
      });
    }

    fieldName = 'relatesTo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationRelatesToComponent | undefined = CitationRelatesToComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRelatesTo(component);
        }
      });
    }

    fieldName = 'citedArtifact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: CitationCitedArtifactComponent | undefined = CitationCitedArtifactComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCitedArtifact(component);
    }

    return instance;
  }

  /**
   * Citation.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this citation, represented as a globally unique URI
   * - **Definition:** An absolute URI that is used to identify this citation when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this summary is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the summary is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.
   * - **Requirements:** Allows the citation to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * Citation.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier for the Citation resource itself
   * - **Definition:** A formal identifier that is used to identify this citation when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** May include DOI, PMID, PMCID, etc. This element will contain unique identifiers that support de-duplication of citations. This identifier can be valid for only one citation resource.
   * - **Requirements:** Allows externally provided and/or usable identifiers to be associated with this citation.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Citation.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the citation
   * - **Definition:** The identifier that is used to identify this version of the citation when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the citation author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different citation instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the citation with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * Citation.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this citation (computer friendly)
   * - **Definition:** A natural language name identifying the citation. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * Citation.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this citation (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the citation.
   * - **Comment:** This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * Citation.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this summary. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of summarys s that are appropriate for use versus not.
   * - **Requirements:** Allows filtering of citations that are appropriate for use versus not.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This is labeled as &quot;Is Modifier&quot; because applications should not use a retired {{title}} without due consideration
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Citation.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this citation is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of citations that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level citation.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * Citation.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the citation was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the citation changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the citation. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * Citation.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The publisher of the Citation, not the publisher of the article or artifact being cited
   * - **Definition:** The name of the organization or individual that published the citation.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the citation is the organization or individual primarily responsible for the maintenance and upkeep of the citation. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the citation. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the citation.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * Citation.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact details for the publisher of the Citation Resource
   * - **Definition:** Contact details to assist a user in finding and communicating with the publisher.
   * - **Comment:** May be a web site, an email address, a telephone number, etc.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contact?: ContactDetail[] | undefined;

  /**
   * Citation.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the citation
   * - **Definition:** A free text natural language description of the citation from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as why the citation was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the citation as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the citation is presumed to be the predominant language in the place the citation was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * Citation.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the Citation Resource content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate citation instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * Citation.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for citation (if applicable)
   * - **Definition:** A legal or geographic region in which the citation is intended to be used.
   * - **Comment:** It may be possible for the citation to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * Citation.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this citation is defined
   * - **Definition:** Explanation of why this citation is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the citation. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this citation.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * Citation.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions for the Citation, not for the cited artifact
   * - **Definition:** Use and/or publishing restrictions for the Citation, not for the cited artifact.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * Citation.approvalDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the citation was approved by publisher
   * - **Definition:** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   * - **Comment:** The \'date\' element may be more recent than the approval date because of minor changes or editorial corrections.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private approvalDate?: DateType | undefined;

  /**
   * Citation.lastReviewDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the citation was last reviewed
   * - **Definition:** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
   * - **Comment:** If specified, this date follows the original approval date.
   * - **Requirements:** Gives a sense of how "current" the content is.  Resources that have not been reviewed in a long time may have a risk of being less appropriate/relevant.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lastReviewDate?: DateType | undefined;

  /**
   * Citation.effectivePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the citation is expected to be used
   * - **Definition:** The period during which the citation content was or is planned to be in active use.
   * - **Comment:** The effective period for a citation  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   * - **Requirements:** Allows establishing a transition before a resource comes into effect and also allows for a sunsetting  process when new versions of the citation are or are expected to be used instead.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effectivePeriod?: Period | undefined;

  /**
   * Citation.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who authored the Citation
   * - **Definition:** Who authored the Citation.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private author?: ContactDetail[] | undefined;

  /**
   * Citation.editor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who edited the Citation
   * - **Definition:** Who edited the Citation.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private editor?: ContactDetail[] | undefined;

  /**
   * Citation.reviewer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who reviewed the Citation
   * - **Definition:** Who reviewed the Citation.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reviewer?: ContactDetail[] | undefined;

  /**
   * Citation.endorser Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who endorsed the Citation
   * - **Definition:** Who endorsed the Citation.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private endorser?: ContactDetail[] | undefined;

  /**
   * Citation.summary Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A human-readable display of the citation
   * - **Definition:** A human-readable display of the citation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private summary?: CitationSummaryComponent[] | undefined;

  /**
   * Citation.classification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The assignment to an organizing scheme
   * - **Definition:** The assignment to an organizing scheme.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private classification?: CitationClassificationComponent[] | undefined;

  /**
   * Citation.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for general notes and annotations not coded elsewhere
   * - **Definition:** Used for general notes and annotations not coded elsewhere.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Citation.currentState Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of the citation
   * - **Definition:** The status of the citation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private currentState?: CodeableConcept[] | undefined;

  /**
   * Citation.statusDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An effective date or period for a status of the citation
   * - **Definition:** An effective date or period for a status of the citation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusDate?: CitationStatusDateComponent[] | undefined;

  /**
   * Citation.relatesTo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Artifact related to the Citation Resource
   * - **Definition:** Artifact related to the Citation Resource.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatesTo?: CitationRelatesToComponent[] | undefined;

  /**
   * Citation.citedArtifact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The article or artifact being described
   * - **Definition:** The article or artifact being described.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private citedArtifact?: CitationCitedArtifactComponent | undefined;

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
      const optErrMsg = `Invalid Citation.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid Citation.url (${String(value)})`;
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
      const optErrMsg = `Invalid Citation.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Citation.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Citation.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Citation.version (${String(value)})`;
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
      const optErrMsg = `Invalid Citation.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Citation.name (${String(value)})`;
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
      const optErrMsg = `Invalid Citation.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Citation.title (${String(value)})`;
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
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Citation.status`;
      assertEnumCodeType<PublicationStatusEnum>(enumType, PublicationStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Citation.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.publicationStatusEnum);
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Citation.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.publicationStatusEnum);
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
   * @returns the `experimental` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getExperimentalElement(): BooleanType {
    return this.experimental ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `experimental` property.
   *
   * @param element - the `experimental` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExperimentalElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Citation.experimental; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.experimental = element;
    } else {
      this.experimental = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `experimental` property exists and has a value; `false` otherwise
   */
  public hasExperimentalElement(): boolean {
    return isDefined<BooleanType>(this.experimental) && !this.experimental.isEmpty();
  }

  /**
   * @returns the `experimental` property value as a fhirBoolean if defined; else undefined
   */
  public getExperimental(): fhirBoolean | undefined {
    return this.experimental?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `experimental` property.
   *
   * @param value - the `experimental` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExperimental(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Citation.experimental (${String(value)})`;
      this.experimental = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.experimental = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `experimental` property exists and has a value; `false` otherwise
   */
  public hasExperimental(): boolean {
    return this.hasExperimentalElement();
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
  public setDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Citation.date; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
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
    return isDefined<DateTimeType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDateTime if defined; else undefined
   */
  public getDate(): fhirDateTime | undefined {
    return this.date?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Citation.date (${String(value)})`;
      this.date = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
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
   * @returns the `publisher` property value as a StringType object if defined; else an empty StringType object
   */
  public getPublisherElement(): StringType {
    return this.publisher ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `publisher` property.
   *
   * @param element - the `publisher` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPublisherElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.publisher; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.publisher = element;
    } else {
      this.publisher = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publisher` property exists and has a value; `false` otherwise
   */
  public hasPublisherElement(): boolean {
    return isDefined<StringType>(this.publisher) && !this.publisher.isEmpty();
  }

  /**
   * @returns the `publisher` property value as a fhirString if defined; else undefined
   */
  public getPublisher(): fhirString | undefined {
    return this.publisher?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `publisher` property.
   *
   * @param value - the `publisher` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPublisher(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.publisher (${String(value)})`;
      this.publisher = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.publisher = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publisher` property exists and has a value; `false` otherwise
   */
  public hasPublisher(): boolean {
    return this.hasPublisherElement();
  }

  /**
   * @returns the `contact` property value as a ContactDetail array
   */
  public getContact(): ContactDetail[] {
    return this.contact ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `contact` property.
   *
   * @param value - the `contact` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContact(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid Citation.contact; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.contact = value;
    } else {
      this.contact = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `contact` array property.
   *
   * @param value - the `contact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContact(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid Citation.contact; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initContact();
      this.contact?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contact` property exists and has a value; `false` otherwise
   */
  public hasContact(): boolean {
    return isDefinedList<ContactDetail>(this.contact) && this.contact.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `contact` property
   */
  private initContact(): void {
    if(!this.hasContact()) {
      this.contact = [] as ContactDetail[];
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
      const optErrMsg = `Invalid Citation.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Citation.description (${String(value)})`;
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
      const optErrMsg = `Invalid Citation.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid Citation.useContext; Provided element is not an instance of UsageContext.`;
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
   * @returns the `jurisdiction` property value as a CodeableConcept array
   */
  public getJurisdiction(): CodeableConcept[] {
    return this.jurisdiction ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `jurisdiction` property.
   *
   * @param value - the `jurisdiction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setJurisdiction(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.jurisdiction = value;
    } else {
      this.jurisdiction = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `jurisdiction` array property.
   *
   * @param value - the `jurisdiction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addJurisdiction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.jurisdiction; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initJurisdiction();
      this.jurisdiction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `jurisdiction` property exists and has a value; `false` otherwise
   */
  public hasJurisdiction(): boolean {
    return isDefinedList<CodeableConcept>(this.jurisdiction) && this.jurisdiction.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `jurisdiction` property
   */
  private initJurisdiction(): void {
    if(!this.hasJurisdiction()) {
      this.jurisdiction = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `purpose` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getPurposeElement(): MarkdownType {
    return this.purpose ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `purpose` property.
   *
   * @param element - the `purpose` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPurposeElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Citation.purpose; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.purpose = element;
    } else {
      this.purpose = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurposeElement(): boolean {
    return isDefined<MarkdownType>(this.purpose) && !this.purpose.isEmpty();
  }

  /**
   * @returns the `purpose` property value as a fhirMarkdown if defined; else undefined
   */
  public getPurpose(): fhirMarkdown | undefined {
    return this.purpose?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `purpose` property.
   *
   * @param value - the `purpose` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPurpose(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Citation.purpose (${String(value)})`;
      this.purpose = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.purpose = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurpose(): boolean {
    return this.hasPurposeElement();
  }

  /**
   * @returns the `copyright` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getCopyrightElement(): MarkdownType {
    return this.copyright ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `copyright` property.
   *
   * @param element - the `copyright` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopyrightElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Citation.copyright; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.copyright = element;
    } else {
      this.copyright = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copyright` property exists and has a value; `false` otherwise
   */
  public hasCopyrightElement(): boolean {
    return isDefined<MarkdownType>(this.copyright) && !this.copyright.isEmpty();
  }

  /**
   * @returns the `copyright` property value as a fhirMarkdown if defined; else undefined
   */
  public getCopyright(): fhirMarkdown | undefined {
    return this.copyright?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `copyright` property.
   *
   * @param value - the `copyright` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopyright(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Citation.copyright (${String(value)})`;
      this.copyright = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.copyright = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copyright` property exists and has a value; `false` otherwise
   */
  public hasCopyright(): boolean {
    return this.hasCopyrightElement();
  }

  /**
   * @returns the `approvalDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getApprovalDateElement(): DateType {
    return this.approvalDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `approvalDate` property.
   *
   * @param element - the `approvalDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setApprovalDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid Citation.approvalDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.approvalDate = element;
    } else {
      this.approvalDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `approvalDate` property exists and has a value; `false` otherwise
   */
  public hasApprovalDateElement(): boolean {
    return isDefined<DateType>(this.approvalDate) && !this.approvalDate.isEmpty();
  }

  /**
   * @returns the `approvalDate` property value as a fhirDate if defined; else undefined
   */
  public getApprovalDate(): fhirDate | undefined {
    return this.approvalDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `approvalDate` property.
   *
   * @param value - the `approvalDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setApprovalDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid Citation.approvalDate (${String(value)})`;
      this.approvalDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.approvalDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `approvalDate` property exists and has a value; `false` otherwise
   */
  public hasApprovalDate(): boolean {
    return this.hasApprovalDateElement();
  }

  /**
   * @returns the `lastReviewDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getLastReviewDateElement(): DateType {
    return this.lastReviewDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lastReviewDate` property.
   *
   * @param element - the `lastReviewDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastReviewDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid Citation.lastReviewDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.lastReviewDate = element;
    } else {
      this.lastReviewDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastReviewDate` property exists and has a value; `false` otherwise
   */
  public hasLastReviewDateElement(): boolean {
    return isDefined<DateType>(this.lastReviewDate) && !this.lastReviewDate.isEmpty();
  }

  /**
   * @returns the `lastReviewDate` property value as a fhirDate if defined; else undefined
   */
  public getLastReviewDate(): fhirDate | undefined {
    return this.lastReviewDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lastReviewDate` property.
   *
   * @param value - the `lastReviewDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastReviewDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid Citation.lastReviewDate (${String(value)})`;
      this.lastReviewDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.lastReviewDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastReviewDate` property exists and has a value; `false` otherwise
   */
  public hasLastReviewDate(): boolean {
    return this.hasLastReviewDateElement();
  }

  /**
   * @returns the `effectivePeriod` property value as a Period object if defined; else an empty Period object
   */
  public getEffectivePeriod(): Period {
    return this.effectivePeriod ?? new Period();
  }

  /**
   * Assigns the provided EffectivePeriod object value to the `effectivePeriod` property.
   *
   * @param value - the `effectivePeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEffectivePeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Citation.effectivePeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.effectivePeriod = value;
    } else {
      this.effectivePeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effectivePeriod` property exists and has a value; `false` otherwise
   */
  public hasEffectivePeriod(): boolean {
    return isDefined<Period>(this.effectivePeriod) && !this.effectivePeriod.isEmpty();
  }

  /**
   * @returns the `author` property value as a ContactDetail array
   */
  public getAuthor(): ContactDetail[] {
    return this.author ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `author` property.
   *
   * @param value - the `author` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAuthor(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid Citation.author; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.author = value;
    } else {
      this.author = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `author` array property.
   *
   * @param value - the `author` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAuthor(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid Citation.author; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initAuthor();
      this.author?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `author` property exists and has a value; `false` otherwise
   */
  public hasAuthor(): boolean {
    return isDefinedList<ContactDetail>(this.author) && this.author.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `author` property
   */
  private initAuthor(): void {
    if(!this.hasAuthor()) {
      this.author = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `editor` property value as a ContactDetail array
   */
  public getEditor(): ContactDetail[] {
    return this.editor ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `editor` property.
   *
   * @param value - the `editor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEditor(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid Citation.editor; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.editor = value;
    } else {
      this.editor = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `editor` array property.
   *
   * @param value - the `editor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEditor(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid Citation.editor; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initEditor();
      this.editor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `editor` property exists and has a value; `false` otherwise
   */
  public hasEditor(): boolean {
    return isDefinedList<ContactDetail>(this.editor) && this.editor.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `editor` property
   */
  private initEditor(): void {
    if(!this.hasEditor()) {
      this.editor = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `reviewer` property value as a ContactDetail array
   */
  public getReviewer(): ContactDetail[] {
    return this.reviewer ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `reviewer` property.
   *
   * @param value - the `reviewer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReviewer(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid Citation.reviewer; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.reviewer = value;
    } else {
      this.reviewer = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `reviewer` array property.
   *
   * @param value - the `reviewer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReviewer(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid Citation.reviewer; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initReviewer();
      this.reviewer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reviewer` property exists and has a value; `false` otherwise
   */
  public hasReviewer(): boolean {
    return isDefinedList<ContactDetail>(this.reviewer) && this.reviewer.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `reviewer` property
   */
  private initReviewer(): void {
    if(!this.hasReviewer()) {
      this.reviewer = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `endorser` property value as a ContactDetail array
   */
  public getEndorser(): ContactDetail[] {
    return this.endorser ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `endorser` property.
   *
   * @param value - the `endorser` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEndorser(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid Citation.endorser; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.endorser = value;
    } else {
      this.endorser = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `endorser` array property.
   *
   * @param value - the `endorser` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEndorser(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid Citation.endorser; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initEndorser();
      this.endorser?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `endorser` property exists and has a value; `false` otherwise
   */
  public hasEndorser(): boolean {
    return isDefinedList<ContactDetail>(this.endorser) && this.endorser.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `endorser` property
   */
  private initEndorser(): void {
    if(!this.hasEndorser()) {
      this.endorser = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `summary` property value as a CitationSummaryComponent array
   */
  public getSummary(): CitationSummaryComponent[] {
    return this.summary ?? ([] as CitationSummaryComponent[]);
  }

  /**
   * Assigns the provided CitationSummaryComponent array value to the `summary` property.
   *
   * @param value - the `summary` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSummary(value: CitationSummaryComponent[] | undefined): this {
    if (isDefinedList<CitationSummaryComponent>(value)) {
      const optErrMsg = `Invalid Citation.summary; Provided value array has an element that is not an instance of CitationSummaryComponent.`;
      assertFhirTypeList<CitationSummaryComponent>(value, CitationSummaryComponent, optErrMsg);
      this.summary = value;
    } else {
      this.summary = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationSummaryComponent value to the `summary` array property.
   *
   * @param value - the `summary` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSummary(value: CitationSummaryComponent | undefined): this {
    if (isDefined<CitationSummaryComponent>(value)) {
      const optErrMsg = `Invalid Citation.summary; Provided element is not an instance of CitationSummaryComponent.`;
      assertFhirType<CitationSummaryComponent>(value, CitationSummaryComponent, optErrMsg);
      this.initSummary();
      this.summary?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `summary` property exists and has a value; `false` otherwise
   */
  public hasSummary(): boolean {
    return isDefinedList<CitationSummaryComponent>(this.summary) && this.summary.some((item: CitationSummaryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `summary` property
   */
  private initSummary(): void {
    if(!this.hasSummary()) {
      this.summary = [] as CitationSummaryComponent[];
    }
  }

  /**
   * @returns the `classification` property value as a CitationClassificationComponent array
   */
  public getClassification(): CitationClassificationComponent[] {
    return this.classification ?? ([] as CitationClassificationComponent[]);
  }

  /**
   * Assigns the provided CitationClassificationComponent array value to the `classification` property.
   *
   * @param value - the `classification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassification(value: CitationClassificationComponent[] | undefined): this {
    if (isDefinedList<CitationClassificationComponent>(value)) {
      const optErrMsg = `Invalid Citation.classification; Provided value array has an element that is not an instance of CitationClassificationComponent.`;
      assertFhirTypeList<CitationClassificationComponent>(value, CitationClassificationComponent, optErrMsg);
      this.classification = value;
    } else {
      this.classification = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationClassificationComponent value to the `classification` array property.
   *
   * @param value - the `classification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClassification(value: CitationClassificationComponent | undefined): this {
    if (isDefined<CitationClassificationComponent>(value)) {
      const optErrMsg = `Invalid Citation.classification; Provided element is not an instance of CitationClassificationComponent.`;
      assertFhirType<CitationClassificationComponent>(value, CitationClassificationComponent, optErrMsg);
      this.initClassification();
      this.classification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `classification` property exists and has a value; `false` otherwise
   */
  public hasClassification(): boolean {
    return isDefinedList<CitationClassificationComponent>(this.classification) && this.classification.some((item: CitationClassificationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `classification` property
   */
  private initClassification(): void {
    if(!this.hasClassification()) {
      this.classification = [] as CitationClassificationComponent[];
    }
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
      const optErrMsg = `Invalid Citation.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Citation.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `currentState` property value as a CodeableConcept array
   */
  public getCurrentState(): CodeableConcept[] {
    return this.currentState ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `currentState` property.
   *
   * @param value - the `currentState` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCurrentState(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.currentState; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.currentState = value;
    } else {
      this.currentState = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `currentState` array property.
   *
   * @param value - the `currentState` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCurrentState(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.currentState; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCurrentState();
      this.currentState?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `currentState` property exists and has a value; `false` otherwise
   */
  public hasCurrentState(): boolean {
    return isDefinedList<CodeableConcept>(this.currentState) && this.currentState.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `currentState` property
   */
  private initCurrentState(): void {
    if(!this.hasCurrentState()) {
      this.currentState = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `statusDate` property value as a CitationStatusDateComponent array
   */
  public getStatusDate(): CitationStatusDateComponent[] {
    return this.statusDate ?? ([] as CitationStatusDateComponent[]);
  }

  /**
   * Assigns the provided CitationStatusDateComponent array value to the `statusDate` property.
   *
   * @param value - the `statusDate` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatusDate(value: CitationStatusDateComponent[] | undefined): this {
    if (isDefinedList<CitationStatusDateComponent>(value)) {
      const optErrMsg = `Invalid Citation.statusDate; Provided value array has an element that is not an instance of CitationStatusDateComponent.`;
      assertFhirTypeList<CitationStatusDateComponent>(value, CitationStatusDateComponent, optErrMsg);
      this.statusDate = value;
    } else {
      this.statusDate = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationStatusDateComponent value to the `statusDate` array property.
   *
   * @param value - the `statusDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStatusDate(value: CitationStatusDateComponent | undefined): this {
    if (isDefined<CitationStatusDateComponent>(value)) {
      const optErrMsg = `Invalid Citation.statusDate; Provided element is not an instance of CitationStatusDateComponent.`;
      assertFhirType<CitationStatusDateComponent>(value, CitationStatusDateComponent, optErrMsg);
      this.initStatusDate();
      this.statusDate?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `statusDate` property exists and has a value; `false` otherwise
   */
  public hasStatusDate(): boolean {
    return isDefinedList<CitationStatusDateComponent>(this.statusDate) && this.statusDate.some((item: CitationStatusDateComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `statusDate` property
   */
  private initStatusDate(): void {
    if(!this.hasStatusDate()) {
      this.statusDate = [] as CitationStatusDateComponent[];
    }
  }

  /**
   * @returns the `relatesTo` property value as a CitationRelatesToComponent array
   */
  public getRelatesTo(): CitationRelatesToComponent[] {
    return this.relatesTo ?? ([] as CitationRelatesToComponent[]);
  }

  /**
   * Assigns the provided CitationRelatesToComponent array value to the `relatesTo` property.
   *
   * @param value - the `relatesTo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatesTo(value: CitationRelatesToComponent[] | undefined): this {
    if (isDefinedList<CitationRelatesToComponent>(value)) {
      const optErrMsg = `Invalid Citation.relatesTo; Provided value array has an element that is not an instance of CitationRelatesToComponent.`;
      assertFhirTypeList<CitationRelatesToComponent>(value, CitationRelatesToComponent, optErrMsg);
      this.relatesTo = value;
    } else {
      this.relatesTo = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationRelatesToComponent value to the `relatesTo` array property.
   *
   * @param value - the `relatesTo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatesTo(value: CitationRelatesToComponent | undefined): this {
    if (isDefined<CitationRelatesToComponent>(value)) {
      const optErrMsg = `Invalid Citation.relatesTo; Provided element is not an instance of CitationRelatesToComponent.`;
      assertFhirType<CitationRelatesToComponent>(value, CitationRelatesToComponent, optErrMsg);
      this.initRelatesTo();
      this.relatesTo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatesTo` property exists and has a value; `false` otherwise
   */
  public hasRelatesTo(): boolean {
    return isDefinedList<CitationRelatesToComponent>(this.relatesTo) && this.relatesTo.some((item: CitationRelatesToComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relatesTo` property
   */
  private initRelatesTo(): void {
    if(!this.hasRelatesTo()) {
      this.relatesTo = [] as CitationRelatesToComponent[];
    }
  }

  /**
   * @returns the `citedArtifact` property value as a CitationCitedArtifactComponent object if defined; else an empty CitationCitedArtifactComponent object
   */
  public getCitedArtifact(): CitationCitedArtifactComponent {
    return this.citedArtifact ?? new CitationCitedArtifactComponent();
  }

  /**
   * Assigns the provided CitedArtifact object value to the `citedArtifact` property.
   *
   * @param value - the `citedArtifact` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCitedArtifact(value: CitationCitedArtifactComponent | undefined): this {
    if (isDefined<CitationCitedArtifactComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact; Provided element is not an instance of CitationCitedArtifactComponent.`;
      assertFhirType<CitationCitedArtifactComponent>(value, CitationCitedArtifactComponent, optErrMsg);
      this.citedArtifact = value;
    } else {
      this.citedArtifact = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `citedArtifact` property exists and has a value; `false` otherwise
   */
  public hasCitedArtifact(): boolean {
    return isDefined<CitationCitedArtifactComponent>(this.citedArtifact) && !this.citedArtifact.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.url,
      this.identifier,
      this.version,
      this.name,
      this.title,
      this.status,
      this.experimental,
      this.date,
      this.publisher,
      this.contact,
      this.description,
      this.useContext,
      this.jurisdiction,
      this.purpose,
      this.copyright,
      this.approvalDate,
      this.lastReviewDate,
      this.effectivePeriod,
      this.author,
      this.editor,
      this.reviewer,
      this.endorser,
      this.summary,
      this.classification,
      this.note,
      this.currentState,
      this.statusDate,
      this.relatesTo,
      this.citedArtifact,
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
  public override copy(): Citation {
    const dest = new Citation();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Citation): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.experimental = this.experimental?.copy();
    dest.date = this.date?.copy();
    dest.publisher = this.publisher?.copy();
    const contactList = copyListValues<ContactDetail>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    dest.description = this.description?.copy();
    const useContextList = copyListValues<UsageContext>(this.useContext);
    dest.useContext = useContextList.length === 0 ? undefined : useContextList;
    const jurisdictionList = copyListValues<CodeableConcept>(this.jurisdiction);
    dest.jurisdiction = jurisdictionList.length === 0 ? undefined : jurisdictionList;
    dest.purpose = this.purpose?.copy();
    dest.copyright = this.copyright?.copy();
    dest.approvalDate = this.approvalDate?.copy();
    dest.lastReviewDate = this.lastReviewDate?.copy();
    dest.effectivePeriod = this.effectivePeriod?.copy();
    const authorList = copyListValues<ContactDetail>(this.author);
    dest.author = authorList.length === 0 ? undefined : authorList;
    const editorList = copyListValues<ContactDetail>(this.editor);
    dest.editor = editorList.length === 0 ? undefined : editorList;
    const reviewerList = copyListValues<ContactDetail>(this.reviewer);
    dest.reviewer = reviewerList.length === 0 ? undefined : reviewerList;
    const endorserList = copyListValues<ContactDetail>(this.endorser);
    dest.endorser = endorserList.length === 0 ? undefined : endorserList;
    const summaryList = copyListValues<CitationSummaryComponent>(this.summary);
    dest.summary = summaryList.length === 0 ? undefined : summaryList;
    const classificationList = copyListValues<CitationClassificationComponent>(this.classification);
    dest.classification = classificationList.length === 0 ? undefined : classificationList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const currentStateList = copyListValues<CodeableConcept>(this.currentState);
    dest.currentState = currentStateList.length === 0 ? undefined : currentStateList;
    const statusDateList = copyListValues<CitationStatusDateComponent>(this.statusDate);
    dest.statusDate = statusDateList.length === 0 ? undefined : statusDateList;
    const relatesToList = copyListValues<CitationRelatesToComponent>(this.relatesTo);
    dest.relatesTo = relatesToList.length === 0 ? undefined : relatesToList;
    dest.citedArtifact = this.citedArtifact?.copy();
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

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUrlElement(), 'url', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasExperimentalElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExperimentalElement(), 'experimental', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasPublisherElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPublisherElement(), 'publisher', jsonObj);
    }

    if (this.hasContact()) {
      setFhirComplexListJson(this.getContact(), 'contact', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasUseContext()) {
      setFhirComplexListJson(this.getUseContext(), 'useContext', jsonObj);
    }

    if (this.hasJurisdiction()) {
      setFhirComplexListJson(this.getJurisdiction(), 'jurisdiction', jsonObj);
    }

    if (this.hasPurposeElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getPurposeElement(), 'purpose', jsonObj);
    }

    if (this.hasCopyrightElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getCopyrightElement(), 'copyright', jsonObj);
    }

    if (this.hasApprovalDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getApprovalDateElement(), 'approvalDate', jsonObj);
    }

    if (this.hasLastReviewDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getLastReviewDateElement(), 'lastReviewDate', jsonObj);
    }

    if (this.hasEffectivePeriod()) {
      setFhirComplexJson(this.getEffectivePeriod(), 'effectivePeriod', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexListJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasEditor()) {
      setFhirComplexListJson(this.getEditor(), 'editor', jsonObj);
    }

    if (this.hasReviewer()) {
      setFhirComplexListJson(this.getReviewer(), 'reviewer', jsonObj);
    }

    if (this.hasEndorser()) {
      setFhirComplexListJson(this.getEndorser(), 'endorser', jsonObj);
    }

    if (this.hasSummary()) {
      setFhirBackboneElementListJson(this.getSummary(), 'summary', jsonObj);
    }

    if (this.hasClassification()) {
      setFhirBackboneElementListJson(this.getClassification(), 'classification', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasCurrentState()) {
      setFhirComplexListJson(this.getCurrentState(), 'currentState', jsonObj);
    }

    if (this.hasStatusDate()) {
      setFhirBackboneElementListJson(this.getStatusDate(), 'statusDate', jsonObj);
    }

    if (this.hasRelatesTo()) {
      setFhirBackboneElementListJson(this.getRelatesTo(), 'relatesTo', jsonObj);
    }

    if (this.hasCitedArtifact()) {
      setFhirBackboneElementJson(this.getCitedArtifact(), 'citedArtifact', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * CitationSummaryComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A human-readable display of the citation
 * - **Definition:** A human-readable display of the citation.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationSummaryComponent extends BackboneElement implements IBackboneElement {
  constructor(text: MarkdownType | fhirMarkdown | null = null) {
    super();

    this.text = null;
    if (isDefined<MarkdownType | fhirMarkdown>(text)) {
      if (text instanceof PrimitiveType) {
        this.setTextElement(text);
      } else {
        this.setText(text);
      }
    }
  }

  /**
   * Parse the provided `CitationSummaryComponent` JSON to instantiate the CitationSummaryComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationSummaryComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationSummaryComponent
   * @returns CitationSummaryComponent data model or undefined for `CitationSummaryComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationSummaryComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationSummaryComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationSummaryComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'style';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStyle(datatype);
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setText(null);
      } else {
        instance.setTextElement(datatype);
      }
    } else {
      instance.setText(null);
    }

    return instance;
  }

  /**
   * Citation.summary.style Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Format for display of the citation
   * - **Definition:** Format for display of the citation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private style?: CodeableConcept | undefined;

  /**
   * Citation.summary.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The human-readable display of the citation
   * - **Definition:** The human-readable display of the citation.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private text: MarkdownType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `style` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStyle(): CodeableConcept {
    return this.style ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Style object value to the `style` property.
   *
   * @param value - the `style` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStyle(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.summary.style; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.style = value;
    } else {
      this.style = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `style` property exists and has a value; `false` otherwise
   */
  public hasStyle(): boolean {
    return isDefined<CodeableConcept>(this.style) && !this.style.isEmpty();
  }

  /**
   * @returns the `text` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getTextElement(): MarkdownType {
    return this.text ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: MarkdownType | undefined | null): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Citation.summary.text; Provided value is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.text = element;
    } else {
      this.text = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<MarkdownType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirMarkdown if defined; else null
   */
  public getText(): fhirMarkdown | null {
    if (this.text?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.text.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirMarkdown | undefined | null): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Citation.summary.text (${String(value)})`;
      this.text = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.text = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.summary';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.style,
      this.text,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.text, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationSummaryComponent {
    const dest = new CitationSummaryComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationSummaryComponent): void {
    super.copyValues(dest);
    dest.style = this.style?.copy();
    dest.text = this.text ? this.text.copy() : null;
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

    if (this.hasStyle()) {
      setFhirComplexJson(this.getStyle(), 'style', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getTextElement(), 'text', jsonObj);
    } else {
      jsonObj['text'] = null;
    }

    return jsonObj;
  }
}
/**
 * CitationClassificationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The assignment to an organizing scheme
 * - **Definition:** The assignment to an organizing scheme.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationClassificationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CitationClassificationComponent` JSON to instantiate the CitationClassificationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationClassificationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationClassificationComponent
   * @returns CitationClassificationComponent data model or undefined for `CitationClassificationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationClassificationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationClassificationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationClassificationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'classifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addClassifier(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * Citation.classification.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The kind of classifier (e.g. publication type, keyword)
   * - **Definition:** The kind of classifier (e.g. publication type, keyword).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Citation.classification.classifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific classification value
   * - **Definition:** The specific classification value.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private classifier?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Citation.classification.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `classifier` property value as a CodeableConcept array
   */
  public getClassifier(): CodeableConcept[] {
    return this.classifier ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `classifier` property.
   *
   * @param value - the `classifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassifier(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.classification.classifier; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.classifier = value;
    } else {
      this.classifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `classifier` array property.
   *
   * @param value - the `classifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClassifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.classification.classifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initClassifier();
      this.classifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `classifier` property exists and has a value; `false` otherwise
   */
  public hasClassifier(): boolean {
    return isDefinedList<CodeableConcept>(this.classifier) && this.classifier.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `classifier` property
   */
  private initClassifier(): void {
    if(!this.hasClassifier()) {
      this.classifier = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.classification';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.classifier,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationClassificationComponent {
    const dest = new CitationClassificationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationClassificationComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    const classifierList = copyListValues<CodeableConcept>(this.classifier);
    dest.classifier = classifierList.length === 0 ? undefined : classifierList;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasClassifier()) {
      setFhirComplexListJson(this.getClassifier(), 'classifier', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationStatusDateComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An effective date or period for a status of the citation
 * - **Definition:** An effective date or period for a status of the citation.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationStatusDateComponent extends BackboneElement implements IBackboneElement {
  constructor(activity: CodeableConcept | null = null, period: Period | null = null) {
    super();

    this.activity = null;
    if (isDefined<CodeableConcept>(activity)) {
      this.setActivity(activity);
    }

    this.period = null;
    if (isDefined<Period>(period)) {
      this.setPeriod(period);
    }
  }

  /**
   * Parse the provided `CitationStatusDateComponent` JSON to instantiate the CitationStatusDateComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationStatusDateComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationStatusDateComponent
   * @returns CitationStatusDateComponent data model or undefined for `CitationStatusDateComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationStatusDateComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationStatusDateComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationStatusDateComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'activity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setActivity(null);
      } else {
        instance.setActivity(datatype);
      }
    } else {
      instance.setActivity(null);
    }

    fieldName = 'actual';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setActualElement(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setPeriod(null);
      } else {
        instance.setPeriod(datatype);
      }
    } else {
      instance.setPeriod(null);
    }

    return instance;
  }

  /**
   * Citation.statusDate.activity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of the status
   * - **Definition:** Classification of the status.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private activity: CodeableConcept | null;

  /**
   * Citation.statusDate.actual Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Either occurred or expected
   * - **Definition:** Either occurred or expected.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actual?: BooleanType | undefined;

  /**
   * Citation.statusDate.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the status started and/or ended
   * - **Definition:** When the status started and/or ended.
   * - **Comment:** For an instance, place the same value in both start and end elements.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period: Period | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `activity` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getActivity(): CodeableConcept {
    return this.activity ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `activity` property.
   *
   * @param value - the `activity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setActivity(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.statusDate.activity; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.activity = value;
    } else {
      this.activity = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `activity` property exists and has a value; `false` otherwise
   */
  public hasActivity(): boolean {
    return isDefined<CodeableConcept>(this.activity) && !this.activity.isEmpty();
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
  public setActualElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Citation.statusDate.actual; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.actual = element;
    } else {
      this.actual = undefined;
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
   * @returns the `actual` property value as a fhirBoolean if defined; else undefined
   */
  public getActual(): fhirBoolean | undefined {
    return this.actual?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `actual` property.
   *
   * @param value - the `actual` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActual(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Citation.statusDate.actual (${String(value)})`;
      this.actual = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.actual = undefined;
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
  public setPeriod(value: Period | undefined | null): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Citation.statusDate.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.period = value;
    } else {
      this.period = null;
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
    return 'Citation.statusDate';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.activity,
      this.actual,
      this.period,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.activity, this.period, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationStatusDateComponent {
    const dest = new CitationStatusDateComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationStatusDateComponent): void {
    super.copyValues(dest);
    dest.activity = this.activity ? this.activity.copy() : null;
    dest.actual = this.actual?.copy();
    dest.period = this.period ? this.period.copy() : null;
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

    if (this.hasActivity()) {
      setFhirComplexJson(this.getActivity(), 'activity', jsonObj);
    } else {
      jsonObj['activity'] = null;
    }

    if (this.hasActualElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getActualElement(), 'actual', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    } else {
      jsonObj['period'] = null;
    }

    return jsonObj;
  }
}
/**
 * CitationRelatesToComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Artifact related to the Citation Resource
 * - **Definition:** Artifact related to the Citation Resource.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationRelatesToComponent extends BackboneElement implements IBackboneElement {
  constructor(relationshipType: CodeableConcept | null = null, target: IDataType | null = null) {
    super();

    this.relationshipType = null;
    if (isDefined<CodeableConcept>(relationshipType)) {
      this.setRelationshipType(relationshipType);
    }

    this.target = null;
    if (isDefined<IDataType>(target)) {
      this.setTarget(target);
    }

  }

  /**
   * Parse the provided `CitationRelatesToComponent` JSON to instantiate the CitationRelatesToComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationRelatesToComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationRelatesToComponent
   * @returns CitationRelatesToComponent data model or undefined for `CitationRelatesToComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationRelatesToComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationRelatesToComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationRelatesToComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = CitationRelatesToComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for CitationRelatesToComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'relationshipType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setRelationshipType(null);
      } else {
        instance.setRelationshipType(datatype);
      }
    } else {
      instance.setRelationshipType(null);
    }

    fieldName = 'targetClassifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTargetClassifier(datatype);
        }
      });
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
   * Citation.relatesTo.relationshipType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How the Citation resource relates to the target artifact
   * - **Definition:** How the Citation resource relates to the target artifact.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relationshipType: CodeableConcept | null;

  /**
   * Citation.relatesTo.targetClassifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The clasification of the related artifact
   * - **Definition:** The clasification of the related artifact.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private targetClassifier?: CodeableConcept[] | undefined;

  /**
   * Citation.relatesTo.target[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Citation.relatesTo.target[x]', ['uri','Identifier','Reference','Attachment',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The article or artifact that the Citation Resource is related to
   * - **Definition:** The article or artifact that the Citation Resource is related to.
   * - **FHIR Types:**
   *     'uri',
   *     'Identifier',
   *     'Reference',
   *     'Attachment',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Citation.relatesTo.target[x]',[
    'uri',
    'Identifier',
    'Reference',
    'Attachment',
  ])
  private target: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `relationshipType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRelationshipType(): CodeableConcept {
    return this.relationshipType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `relationshipType` property.
   *
   * @param value - the `relationshipType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelationshipType(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.relatesTo.relationshipType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.relationshipType = value;
    } else {
      this.relationshipType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `relationshipType` property exists and has a value; `false` otherwise
   */
  public hasRelationshipType(): boolean {
    return isDefined<CodeableConcept>(this.relationshipType) && !this.relationshipType.isEmpty();
  }

  /**
   * @returns the `targetClassifier` property value as a CodeableConcept array
   */
  public getTargetClassifier(): CodeableConcept[] {
    return this.targetClassifier ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `targetClassifier` property.
   *
   * @param value - the `targetClassifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTargetClassifier(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.relatesTo.targetClassifier; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.targetClassifier = value;
    } else {
      this.targetClassifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `targetClassifier` array property.
   *
   * @param value - the `targetClassifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTargetClassifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.relatesTo.targetClassifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initTargetClassifier();
      this.targetClassifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `targetClassifier` property exists and has a value; `false` otherwise
   */
  public hasTargetClassifier(): boolean {
    return isDefinedList<CodeableConcept>(this.targetClassifier) && this.targetClassifier.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `targetClassifier` property
   */
  private initTargetClassifier(): void {
    if(!this.hasTargetClassifier()) {
      this.targetClassifier = [] as CodeableConcept[];
    }
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
   * @decorator `@ChoiceDataTypes('Citation.relatesTo.target[x]')`
   *
   * @param value - the `target` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Citation.relatesTo.target[x]')
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
   * @returns the `target` property value as a UriType object if defined; else null
   */
  public getTargetUriType(): UriType | null {
    if (!isDefined<IDataType>(this.target)) {
      return null;
    }
    if (!(this.target instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Citation.relatesTo.target[x]: Expected UriType but encountered ${this.target.fhirType()}`,
      );
    }
    return this.target;
  }

  /**
   * @returns `true` if the `` property exists as a UriType and has a value; `false` otherwise
   */
  public hasTargetUriType(): boolean {
    return this.hasTarget() && this.target instanceof UriType;
  }

  /**
   * @returns the `target` property value as a Identifier object if defined; else null
   */
  public getTargetIdentifier(): Identifier | null {
    if (!isDefined<IDataType>(this.target)) {
      return null;
    }
    if (!(this.target instanceof Identifier)) {
      throw new InvalidTypeError(
        `DataType mismatch for Citation.relatesTo.target[x]: Expected Identifier but encountered ${this.target.fhirType()}`,
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
        `DataType mismatch for Citation.relatesTo.target[x]: Expected Reference but encountered ${this.target.fhirType()}`,
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

  /**
   * @returns the `target` property value as a Attachment object if defined; else null
   */
  public getTargetAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.target)) {
      return null;
    }
    if (!(this.target instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Citation.relatesTo.target[x]: Expected Attachment but encountered ${this.target.fhirType()}`,
      );
    }
    return this.target;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasTargetAttachment(): boolean {
    return this.hasTarget() && this.target instanceof Attachment;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.relatesTo';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.relationshipType,
      this.targetClassifier,
      this.target,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.relationshipType, this.target, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationRelatesToComponent {
    const dest = new CitationRelatesToComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationRelatesToComponent): void {
    super.copyValues(dest);
    dest.relationshipType = this.relationshipType ? this.relationshipType.copy() : null;
    const targetClassifierList = copyListValues<CodeableConcept>(this.targetClassifier);
    dest.targetClassifier = targetClassifierList.length === 0 ? undefined : targetClassifierList;
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

    if (this.hasRelationshipType()) {
      setFhirComplexJson(this.getRelationshipType(), 'relationshipType', jsonObj);
    } else {
      jsonObj['relationshipType'] = null;
    }

    if (this.hasTargetClassifier()) {
      setFhirComplexListJson(this.getTargetClassifier(), 'targetClassifier', jsonObj);
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
 * CitationCitedArtifactComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The article or artifact being described
 * - **Definition:** The article or artifact being described.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CitationCitedArtifactComponent` JSON to instantiate the CitationCitedArtifactComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactComponent
   * @returns CitationCitedArtifactComponent data model or undefined for `CitationCitedArtifactComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

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

    fieldName = 'relatedIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRelatedIdentifier(datatype);
        }
      });
    }

    fieldName = 'dateAccessed';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateAccessedElement(datatype);
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: CitationCitedArtifactVersionComponent | undefined = CitationCitedArtifactVersionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setVersion(component);
    }

    fieldName = 'currentState';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCurrentState(datatype);
        }
      });
    }

    fieldName = 'statusDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationCitedArtifactStatusDateComponent | undefined = CitationCitedArtifactStatusDateComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStatusDate(component);
        }
      });
    }

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationCitedArtifactTitleComponent | undefined = CitationCitedArtifactTitleComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTitle(component);
        }
      });
    }

    fieldName = 'abstract';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationCitedArtifactAbstractComponent | undefined = CitationCitedArtifactAbstractComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAbstract(component);
        }
      });
    }

    fieldName = 'part';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: CitationCitedArtifactPartComponent | undefined = CitationCitedArtifactPartComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPart(component);
    }

    fieldName = 'relatesTo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationCitedArtifactRelatesToComponent | undefined = CitationCitedArtifactRelatesToComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRelatesTo(component);
        }
      });
    }

    fieldName = 'publicationForm';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationCitedArtifactPublicationFormComponent | undefined = CitationCitedArtifactPublicationFormComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPublicationForm(component);
        }
      });
    }

    fieldName = 'webLocation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationCitedArtifactWebLocationComponent | undefined = CitationCitedArtifactWebLocationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addWebLocation(component);
        }
      });
    }

    fieldName = 'classification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationCitedArtifactClassificationComponent | undefined = CitationCitedArtifactClassificationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addClassification(component);
        }
      });
    }

    fieldName = 'contributorship';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: CitationCitedArtifactContributorshipComponent | undefined = CitationCitedArtifactContributorshipComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContributorship(component);
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

    return instance;
  }

  /**
   * Citation.citedArtifact.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** May include DOI, PMID, PMCID, etc.
   * - **Definition:** A formal identifier that is used to identify this citation when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** May include DOI, PMID, PMCID, etc. This element will contain unique identifiers that support de-duplication of citations. This identifier can be valid for only one citation resource.
   * - **Requirements:** Allows externally provided and/or usable identifiers to be associated with this citation.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Citation.citedArtifact.relatedIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** May include trial registry identifiers
   * - **Definition:** A formal identifier that is used to identify things closely related to this citation.
   * - **Comment:** May include trial registry identifiers, e.g. NCT04372602 from clinicaltrials.gov. This identifier can be valid for multiple citation resources.
   * - **Requirements:** Allows externally provided and/or usable identifiers to be associated with this citation.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private relatedIdentifier?: Identifier[] | undefined;

  /**
   * Citation.citedArtifact.dateAccessed Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the cited artifact was accessed
   * - **Definition:** When the cited artifact was accessed.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dateAccessed?: DateTimeType | undefined;

  /**
   * Citation.citedArtifact.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The defined version of the cited artifact
   * - **Definition:** The defined version of the cited artifact.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private version?: CitationCitedArtifactVersionComponent | undefined;

  /**
   * Citation.citedArtifact.currentState Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of the cited artifact
   * - **Definition:** The status of the cited artifact.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private currentState?: CodeableConcept[] | undefined;

  /**
   * Citation.citedArtifact.statusDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An effective date or period for a status of the cited artifact
   * - **Definition:** An effective date or period for a status of the cited artifact.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statusDate?: CitationCitedArtifactStatusDateComponent[] | undefined;

  /**
   * Citation.citedArtifact.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The title details of the article or artifact
   * - **Definition:** The title details of the article or artifact.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title?: CitationCitedArtifactTitleComponent[] | undefined;

  /**
   * Citation.citedArtifact.abstract Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Summary of the article or artifact
   * - **Definition:** Summary of the article or artifact.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private abstract_?: CitationCitedArtifactAbstractComponent[] | undefined;

  /**
   * Citation.citedArtifact.part Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The component of the article or artifact
   * - **Definition:** The component of the article or artifact.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private part?: CitationCitedArtifactPartComponent | undefined;

  /**
   * Citation.citedArtifact.relatesTo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The artifact related to the cited artifact
   * - **Definition:** The artifact related to the cited artifact.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatesTo?: CitationCitedArtifactRelatesToComponent[] | undefined;

  /**
   * Citation.citedArtifact.publicationForm Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If multiple, used to represent alternative forms of the article that are not separate citations
   * - **Definition:** If multiple, used to represent alternative forms of the article that are not separate citations.
   * - **Comment:** A common use is a journal article with a publication date and pagination for a print version and a different publication date for the online version of the same article.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private publicationForm?: CitationCitedArtifactPublicationFormComponent[] | undefined;

  /**
   * Citation.citedArtifact.webLocation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for any URL for the article or artifact cited
   * - **Definition:** Used for any URL for the article or artifact cited.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private webLocation?: CitationCitedArtifactWebLocationComponent[] | undefined;

  /**
   * Citation.citedArtifact.classification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The assignment to an organizing scheme
   * - **Definition:** The assignment to an organizing scheme.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private classification?: CitationCitedArtifactClassificationComponent[] | undefined;

  /**
   * Citation.citedArtifact.contributorship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Attribution of authors and other contributors
   * - **Definition:** This element is used to list authors and other contributors, their contact information, specific contributions, and summary statements.
   * - **Requirements:** Need to support individualized and collective attribution of authorship and contributorship to people and groups.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contributorship?: CitationCitedArtifactContributorshipComponent | undefined;

  /**
   * Citation.citedArtifact.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Any additional information or content for the article or artifact
   * - **Definition:** Any additional information or content for the article or artifact.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

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
      const optErrMsg = `Invalid Citation.citedArtifact.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `relatedIdentifier` property value as a Identifier array
   */
  public getRelatedIdentifier(): Identifier[] {
    return this.relatedIdentifier ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `relatedIdentifier` property.
   *
   * @param value - the `relatedIdentifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatedIdentifier(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.relatedIdentifier; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.relatedIdentifier = value;
    } else {
      this.relatedIdentifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `relatedIdentifier` array property.
   *
   * @param value - the `relatedIdentifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatedIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.relatedIdentifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initRelatedIdentifier();
      this.relatedIdentifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedIdentifier` property exists and has a value; `false` otherwise
   */
  public hasRelatedIdentifier(): boolean {
    return isDefinedList<Identifier>(this.relatedIdentifier) && this.relatedIdentifier.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `relatedIdentifier` property
   */
  private initRelatedIdentifier(): void {
    if(!this.hasRelatedIdentifier()) {
      this.relatedIdentifier = [] as Identifier[];
    }
  }

  /**
   * @returns the `dateAccessed` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateAccessedElement(): DateTimeType {
    return this.dateAccessed ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `dateAccessed` property.
   *
   * @param element - the `dateAccessed` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateAccessedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.dateAccessed; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.dateAccessed = element;
    } else {
      this.dateAccessed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateAccessed` property exists and has a value; `false` otherwise
   */
  public hasDateAccessedElement(): boolean {
    return isDefined<DateTimeType>(this.dateAccessed) && !this.dateAccessed.isEmpty();
  }

  /**
   * @returns the `dateAccessed` property value as a fhirDateTime if defined; else undefined
   */
  public getDateAccessed(): fhirDateTime | undefined {
    return this.dateAccessed?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `dateAccessed` property.
   *
   * @param value - the `dateAccessed` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateAccessed(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.dateAccessed (${String(value)})`;
      this.dateAccessed = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.dateAccessed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateAccessed` property exists and has a value; `false` otherwise
   */
  public hasDateAccessed(): boolean {
    return this.hasDateAccessedElement();
  }

  /**
   * @returns the `version` property value as a CitationCitedArtifactVersionComponent object if defined; else an empty CitationCitedArtifactVersionComponent object
   */
  public getVersion(): CitationCitedArtifactVersionComponent {
    return this.version ?? new CitationCitedArtifactVersionComponent();
  }

  /**
   * Assigns the provided Version object value to the `version` property.
   *
   * @param value - the `version` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVersion(value: CitationCitedArtifactVersionComponent | undefined): this {
    if (isDefined<CitationCitedArtifactVersionComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.version; Provided element is not an instance of CitationCitedArtifactVersionComponent.`;
      assertFhirType<CitationCitedArtifactVersionComponent>(value, CitationCitedArtifactVersionComponent, optErrMsg);
      this.version = value;
    } else {
      this.version = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  public hasVersion(): boolean {
    return isDefined<CitationCitedArtifactVersionComponent>(this.version) && !this.version.isEmpty();
  }

  /**
   * @returns the `currentState` property value as a CodeableConcept array
   */
  public getCurrentState(): CodeableConcept[] {
    return this.currentState ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `currentState` property.
   *
   * @param value - the `currentState` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCurrentState(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.currentState; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.currentState = value;
    } else {
      this.currentState = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `currentState` array property.
   *
   * @param value - the `currentState` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCurrentState(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.currentState; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCurrentState();
      this.currentState?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `currentState` property exists and has a value; `false` otherwise
   */
  public hasCurrentState(): boolean {
    return isDefinedList<CodeableConcept>(this.currentState) && this.currentState.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `currentState` property
   */
  private initCurrentState(): void {
    if(!this.hasCurrentState()) {
      this.currentState = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `statusDate` property value as a CitationCitedArtifactStatusDateComponent array
   */
  public getStatusDate(): CitationCitedArtifactStatusDateComponent[] {
    return this.statusDate ?? ([] as CitationCitedArtifactStatusDateComponent[]);
  }

  /**
   * Assigns the provided CitationCitedArtifactStatusDateComponent array value to the `statusDate` property.
   *
   * @param value - the `statusDate` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatusDate(value: CitationCitedArtifactStatusDateComponent[] | undefined): this {
    if (isDefinedList<CitationCitedArtifactStatusDateComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.statusDate; Provided value array has an element that is not an instance of CitationCitedArtifactStatusDateComponent.`;
      assertFhirTypeList<CitationCitedArtifactStatusDateComponent>(value, CitationCitedArtifactStatusDateComponent, optErrMsg);
      this.statusDate = value;
    } else {
      this.statusDate = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationCitedArtifactStatusDateComponent value to the `statusDate` array property.
   *
   * @param value - the `statusDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStatusDate(value: CitationCitedArtifactStatusDateComponent | undefined): this {
    if (isDefined<CitationCitedArtifactStatusDateComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.statusDate; Provided element is not an instance of CitationCitedArtifactStatusDateComponent.`;
      assertFhirType<CitationCitedArtifactStatusDateComponent>(value, CitationCitedArtifactStatusDateComponent, optErrMsg);
      this.initStatusDate();
      this.statusDate?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `statusDate` property exists and has a value; `false` otherwise
   */
  public hasStatusDate(): boolean {
    return isDefinedList<CitationCitedArtifactStatusDateComponent>(this.statusDate) && this.statusDate.some((item: CitationCitedArtifactStatusDateComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `statusDate` property
   */
  private initStatusDate(): void {
    if(!this.hasStatusDate()) {
      this.statusDate = [] as CitationCitedArtifactStatusDateComponent[];
    }
  }

  /**
   * @returns the `title` property value as a CitationCitedArtifactTitleComponent array
   */
  public getTitle(): CitationCitedArtifactTitleComponent[] {
    return this.title ?? ([] as CitationCitedArtifactTitleComponent[]);
  }

  /**
   * Assigns the provided CitationCitedArtifactTitleComponent array value to the `title` property.
   *
   * @param value - the `title` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTitle(value: CitationCitedArtifactTitleComponent[] | undefined): this {
    if (isDefinedList<CitationCitedArtifactTitleComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.title; Provided value array has an element that is not an instance of CitationCitedArtifactTitleComponent.`;
      assertFhirTypeList<CitationCitedArtifactTitleComponent>(value, CitationCitedArtifactTitleComponent, optErrMsg);
      this.title = value;
    } else {
      this.title = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationCitedArtifactTitleComponent value to the `title` array property.
   *
   * @param value - the `title` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTitle(value: CitationCitedArtifactTitleComponent | undefined): this {
    if (isDefined<CitationCitedArtifactTitleComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.title; Provided element is not an instance of CitationCitedArtifactTitleComponent.`;
      assertFhirType<CitationCitedArtifactTitleComponent>(value, CitationCitedArtifactTitleComponent, optErrMsg);
      this.initTitle();
      this.title?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `title` property exists and has a value; `false` otherwise
   */
  public hasTitle(): boolean {
    return isDefinedList<CitationCitedArtifactTitleComponent>(this.title) && this.title.some((item: CitationCitedArtifactTitleComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `title` property
   */
  private initTitle(): void {
    if(!this.hasTitle()) {
      this.title = [] as CitationCitedArtifactTitleComponent[];
    }
  }

  /**
   * @returns the `abstract_` property value as a CitationCitedArtifactAbstractComponent array
   */
  public getAbstract(): CitationCitedArtifactAbstractComponent[] {
    return this.abstract_ ?? ([] as CitationCitedArtifactAbstractComponent[]);
  }

  /**
   * Assigns the provided CitationCitedArtifactAbstractComponent array value to the `abstract_` property.
   *
   * @param value - the `abstract_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAbstract(value: CitationCitedArtifactAbstractComponent[] | undefined): this {
    if (isDefinedList<CitationCitedArtifactAbstractComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.abstract; Provided value array has an element that is not an instance of CitationCitedArtifactAbstractComponent.`;
      assertFhirTypeList<CitationCitedArtifactAbstractComponent>(value, CitationCitedArtifactAbstractComponent, optErrMsg);
      this.abstract_ = value;
    } else {
      this.abstract_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationCitedArtifactAbstractComponent value to the `abstract_` array property.
   *
   * @param value - the `abstract_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAbstract(value: CitationCitedArtifactAbstractComponent | undefined): this {
    if (isDefined<CitationCitedArtifactAbstractComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.abstract; Provided element is not an instance of CitationCitedArtifactAbstractComponent.`;
      assertFhirType<CitationCitedArtifactAbstractComponent>(value, CitationCitedArtifactAbstractComponent, optErrMsg);
      this.initAbstract();
      this.abstract_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `abstract_` property exists and has a value; `false` otherwise
   */
  public hasAbstract(): boolean {
    return isDefinedList<CitationCitedArtifactAbstractComponent>(this.abstract_) && this.abstract_.some((item: CitationCitedArtifactAbstractComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `abstract_` property
   */
  private initAbstract(): void {
    if(!this.hasAbstract()) {
      this.abstract_ = [] as CitationCitedArtifactAbstractComponent[];
    }
  }

  /**
   * @returns the `part` property value as a CitationCitedArtifactPartComponent object if defined; else an empty CitationCitedArtifactPartComponent object
   */
  public getPart(): CitationCitedArtifactPartComponent {
    return this.part ?? new CitationCitedArtifactPartComponent();
  }

  /**
   * Assigns the provided Part object value to the `part` property.
   *
   * @param value - the `part` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPart(value: CitationCitedArtifactPartComponent | undefined): this {
    if (isDefined<CitationCitedArtifactPartComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.part; Provided element is not an instance of CitationCitedArtifactPartComponent.`;
      assertFhirType<CitationCitedArtifactPartComponent>(value, CitationCitedArtifactPartComponent, optErrMsg);
      this.part = value;
    } else {
      this.part = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `part` property exists and has a value; `false` otherwise
   */
  public hasPart(): boolean {
    return isDefined<CitationCitedArtifactPartComponent>(this.part) && !this.part.isEmpty();
  }

  /**
   * @returns the `relatesTo` property value as a CitationCitedArtifactRelatesToComponent array
   */
  public getRelatesTo(): CitationCitedArtifactRelatesToComponent[] {
    return this.relatesTo ?? ([] as CitationCitedArtifactRelatesToComponent[]);
  }

  /**
   * Assigns the provided CitationCitedArtifactRelatesToComponent array value to the `relatesTo` property.
   *
   * @param value - the `relatesTo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatesTo(value: CitationCitedArtifactRelatesToComponent[] | undefined): this {
    if (isDefinedList<CitationCitedArtifactRelatesToComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.relatesTo; Provided value array has an element that is not an instance of CitationCitedArtifactRelatesToComponent.`;
      assertFhirTypeList<CitationCitedArtifactRelatesToComponent>(value, CitationCitedArtifactRelatesToComponent, optErrMsg);
      this.relatesTo = value;
    } else {
      this.relatesTo = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationCitedArtifactRelatesToComponent value to the `relatesTo` array property.
   *
   * @param value - the `relatesTo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatesTo(value: CitationCitedArtifactRelatesToComponent | undefined): this {
    if (isDefined<CitationCitedArtifactRelatesToComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.relatesTo; Provided element is not an instance of CitationCitedArtifactRelatesToComponent.`;
      assertFhirType<CitationCitedArtifactRelatesToComponent>(value, CitationCitedArtifactRelatesToComponent, optErrMsg);
      this.initRelatesTo();
      this.relatesTo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatesTo` property exists and has a value; `false` otherwise
   */
  public hasRelatesTo(): boolean {
    return isDefinedList<CitationCitedArtifactRelatesToComponent>(this.relatesTo) && this.relatesTo.some((item: CitationCitedArtifactRelatesToComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relatesTo` property
   */
  private initRelatesTo(): void {
    if(!this.hasRelatesTo()) {
      this.relatesTo = [] as CitationCitedArtifactRelatesToComponent[];
    }
  }

  /**
   * @returns the `publicationForm` property value as a CitationCitedArtifactPublicationFormComponent array
   */
  public getPublicationForm(): CitationCitedArtifactPublicationFormComponent[] {
    return this.publicationForm ?? ([] as CitationCitedArtifactPublicationFormComponent[]);
  }

  /**
   * Assigns the provided CitationCitedArtifactPublicationFormComponent array value to the `publicationForm` property.
   *
   * @param value - the `publicationForm` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPublicationForm(value: CitationCitedArtifactPublicationFormComponent[] | undefined): this {
    if (isDefinedList<CitationCitedArtifactPublicationFormComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm; Provided value array has an element that is not an instance of CitationCitedArtifactPublicationFormComponent.`;
      assertFhirTypeList<CitationCitedArtifactPublicationFormComponent>(value, CitationCitedArtifactPublicationFormComponent, optErrMsg);
      this.publicationForm = value;
    } else {
      this.publicationForm = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationCitedArtifactPublicationFormComponent value to the `publicationForm` array property.
   *
   * @param value - the `publicationForm` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPublicationForm(value: CitationCitedArtifactPublicationFormComponent | undefined): this {
    if (isDefined<CitationCitedArtifactPublicationFormComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm; Provided element is not an instance of CitationCitedArtifactPublicationFormComponent.`;
      assertFhirType<CitationCitedArtifactPublicationFormComponent>(value, CitationCitedArtifactPublicationFormComponent, optErrMsg);
      this.initPublicationForm();
      this.publicationForm?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `publicationForm` property exists and has a value; `false` otherwise
   */
  public hasPublicationForm(): boolean {
    return isDefinedList<CitationCitedArtifactPublicationFormComponent>(this.publicationForm) && this.publicationForm.some((item: CitationCitedArtifactPublicationFormComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `publicationForm` property
   */
  private initPublicationForm(): void {
    if(!this.hasPublicationForm()) {
      this.publicationForm = [] as CitationCitedArtifactPublicationFormComponent[];
    }
  }

  /**
   * @returns the `webLocation` property value as a CitationCitedArtifactWebLocationComponent array
   */
  public getWebLocation(): CitationCitedArtifactWebLocationComponent[] {
    return this.webLocation ?? ([] as CitationCitedArtifactWebLocationComponent[]);
  }

  /**
   * Assigns the provided CitationCitedArtifactWebLocationComponent array value to the `webLocation` property.
   *
   * @param value - the `webLocation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setWebLocation(value: CitationCitedArtifactWebLocationComponent[] | undefined): this {
    if (isDefinedList<CitationCitedArtifactWebLocationComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.webLocation; Provided value array has an element that is not an instance of CitationCitedArtifactWebLocationComponent.`;
      assertFhirTypeList<CitationCitedArtifactWebLocationComponent>(value, CitationCitedArtifactWebLocationComponent, optErrMsg);
      this.webLocation = value;
    } else {
      this.webLocation = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationCitedArtifactWebLocationComponent value to the `webLocation` array property.
   *
   * @param value - the `webLocation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addWebLocation(value: CitationCitedArtifactWebLocationComponent | undefined): this {
    if (isDefined<CitationCitedArtifactWebLocationComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.webLocation; Provided element is not an instance of CitationCitedArtifactWebLocationComponent.`;
      assertFhirType<CitationCitedArtifactWebLocationComponent>(value, CitationCitedArtifactWebLocationComponent, optErrMsg);
      this.initWebLocation();
      this.webLocation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `webLocation` property exists and has a value; `false` otherwise
   */
  public hasWebLocation(): boolean {
    return isDefinedList<CitationCitedArtifactWebLocationComponent>(this.webLocation) && this.webLocation.some((item: CitationCitedArtifactWebLocationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `webLocation` property
   */
  private initWebLocation(): void {
    if(!this.hasWebLocation()) {
      this.webLocation = [] as CitationCitedArtifactWebLocationComponent[];
    }
  }

  /**
   * @returns the `classification` property value as a CitationCitedArtifactClassificationComponent array
   */
  public getClassification(): CitationCitedArtifactClassificationComponent[] {
    return this.classification ?? ([] as CitationCitedArtifactClassificationComponent[]);
  }

  /**
   * Assigns the provided CitationCitedArtifactClassificationComponent array value to the `classification` property.
   *
   * @param value - the `classification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassification(value: CitationCitedArtifactClassificationComponent[] | undefined): this {
    if (isDefinedList<CitationCitedArtifactClassificationComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.classification; Provided value array has an element that is not an instance of CitationCitedArtifactClassificationComponent.`;
      assertFhirTypeList<CitationCitedArtifactClassificationComponent>(value, CitationCitedArtifactClassificationComponent, optErrMsg);
      this.classification = value;
    } else {
      this.classification = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationCitedArtifactClassificationComponent value to the `classification` array property.
   *
   * @param value - the `classification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClassification(value: CitationCitedArtifactClassificationComponent | undefined): this {
    if (isDefined<CitationCitedArtifactClassificationComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.classification; Provided element is not an instance of CitationCitedArtifactClassificationComponent.`;
      assertFhirType<CitationCitedArtifactClassificationComponent>(value, CitationCitedArtifactClassificationComponent, optErrMsg);
      this.initClassification();
      this.classification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `classification` property exists and has a value; `false` otherwise
   */
  public hasClassification(): boolean {
    return isDefinedList<CitationCitedArtifactClassificationComponent>(this.classification) && this.classification.some((item: CitationCitedArtifactClassificationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `classification` property
   */
  private initClassification(): void {
    if(!this.hasClassification()) {
      this.classification = [] as CitationCitedArtifactClassificationComponent[];
    }
  }

  /**
   * @returns the `contributorship` property value as a CitationCitedArtifactContributorshipComponent object if defined; else an empty CitationCitedArtifactContributorshipComponent object
   */
  public getContributorship(): CitationCitedArtifactContributorshipComponent {
    return this.contributorship ?? new CitationCitedArtifactContributorshipComponent();
  }

  /**
   * Assigns the provided Contributorship object value to the `contributorship` property.
   *
   * @param value - the `contributorship` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContributorship(value: CitationCitedArtifactContributorshipComponent | undefined): this {
    if (isDefined<CitationCitedArtifactContributorshipComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship; Provided element is not an instance of CitationCitedArtifactContributorshipComponent.`;
      assertFhirType<CitationCitedArtifactContributorshipComponent>(value, CitationCitedArtifactContributorshipComponent, optErrMsg);
      this.contributorship = value;
    } else {
      this.contributorship = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contributorship` property exists and has a value; `false` otherwise
   */
  public hasContributorship(): boolean {
    return isDefined<CitationCitedArtifactContributorshipComponent>(this.contributorship) && !this.contributorship.isEmpty();
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
      const optErrMsg = `Invalid Citation.citedArtifact.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.note; Provided element is not an instance of Annotation.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.relatedIdentifier,
      this.dateAccessed,
      this.version,
      this.currentState,
      this.statusDate,
      this.title,
      this.abstract_,
      this.part,
      this.relatesTo,
      this.publicationForm,
      this.webLocation,
      this.classification,
      this.contributorship,
      this.note,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactComponent {
    const dest = new CitationCitedArtifactComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactComponent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const relatedIdentifierList = copyListValues<Identifier>(this.relatedIdentifier);
    dest.relatedIdentifier = relatedIdentifierList.length === 0 ? undefined : relatedIdentifierList;
    dest.dateAccessed = this.dateAccessed?.copy();
    dest.version = this.version?.copy();
    const currentStateList = copyListValues<CodeableConcept>(this.currentState);
    dest.currentState = currentStateList.length === 0 ? undefined : currentStateList;
    const statusDateList = copyListValues<CitationCitedArtifactStatusDateComponent>(this.statusDate);
    dest.statusDate = statusDateList.length === 0 ? undefined : statusDateList;
    const titleList = copyListValues<CitationCitedArtifactTitleComponent>(this.title);
    dest.title = titleList.length === 0 ? undefined : titleList;
    const abstractList = copyListValues<CitationCitedArtifactAbstractComponent>(this.abstract_);
    dest.abstract_ = abstractList.length === 0 ? undefined : abstractList;
    dest.part = this.part?.copy();
    const relatesToList = copyListValues<CitationCitedArtifactRelatesToComponent>(this.relatesTo);
    dest.relatesTo = relatesToList.length === 0 ? undefined : relatesToList;
    const publicationFormList = copyListValues<CitationCitedArtifactPublicationFormComponent>(this.publicationForm);
    dest.publicationForm = publicationFormList.length === 0 ? undefined : publicationFormList;
    const webLocationList = copyListValues<CitationCitedArtifactWebLocationComponent>(this.webLocation);
    dest.webLocation = webLocationList.length === 0 ? undefined : webLocationList;
    const classificationList = copyListValues<CitationCitedArtifactClassificationComponent>(this.classification);
    dest.classification = classificationList.length === 0 ? undefined : classificationList;
    dest.contributorship = this.contributorship?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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

    if (this.hasRelatedIdentifier()) {
      setFhirComplexListJson(this.getRelatedIdentifier(), 'relatedIdentifier', jsonObj);
    }

    if (this.hasDateAccessedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateAccessedElement(), 'dateAccessed', jsonObj);
    }

    if (this.hasVersion()) {
      setFhirBackboneElementJson(this.getVersion(), 'version', jsonObj);
    }

    if (this.hasCurrentState()) {
      setFhirComplexListJson(this.getCurrentState(), 'currentState', jsonObj);
    }

    if (this.hasStatusDate()) {
      setFhirBackboneElementListJson(this.getStatusDate(), 'statusDate', jsonObj);
    }

    if (this.hasTitle()) {
      setFhirBackboneElementListJson(this.getTitle(), 'title', jsonObj);
    }

    if (this.hasAbstract()) {
      setFhirBackboneElementListJson(this.getAbstract(), 'abstract', jsonObj);
    }

    if (this.hasPart()) {
      setFhirBackboneElementJson(this.getPart(), 'part', jsonObj);
    }

    if (this.hasRelatesTo()) {
      setFhirBackboneElementListJson(this.getRelatesTo(), 'relatesTo', jsonObj);
    }

    if (this.hasPublicationForm()) {
      setFhirBackboneElementListJson(this.getPublicationForm(), 'publicationForm', jsonObj);
    }

    if (this.hasWebLocation()) {
      setFhirBackboneElementListJson(this.getWebLocation(), 'webLocation', jsonObj);
    }

    if (this.hasClassification()) {
      setFhirBackboneElementListJson(this.getClassification(), 'classification', jsonObj);
    }

    if (this.hasContributorship()) {
      setFhirBackboneElementJson(this.getContributorship(), 'contributorship', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactVersionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The defined version of the cited artifact
 * - **Definition:** The defined version of the cited artifact.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactVersionComponent extends BackboneElement implements IBackboneElement {
  constructor(value: StringType | fhirString | null = null) {
    super();

    this.value = null;
    if (isDefined<StringType | fhirString>(value)) {
      if (value instanceof PrimitiveType) {
        this.setValueElement(value);
      } else {
        this.setValue(value);
      }
    }
  }

  /**
   * Parse the provided `CitationCitedArtifactVersionComponent` JSON to instantiate the CitationCitedArtifactVersionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactVersionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactVersionComponent
   * @returns CitationCitedArtifactVersionComponent data model or undefined for `CitationCitedArtifactVersionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactVersionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactVersionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactVersionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setValue(null);
      } else {
        instance.setValueElement(datatype);
      }
    } else {
      instance.setValue(null);
    }

    fieldName = 'baseCitation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBaseCitation(datatype);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.version.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The version number or other version identifier
   * - **Definition:** The version number or other version identifier.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value: StringType | null;

  /**
   * Citation.citedArtifact.version.baseCitation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Citation for the main version of the cited artifact
   * - **Definition:** Citation for the main version of the cited artifact.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Citation',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private baseCitation?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.version.value; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.value = element;
    } else {
      this.value = null;
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
   * @returns the `value` property value as a fhirString if defined; else null
   */
  public getValue(): fhirString | null {
    if (this.value?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.value.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `value` property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValue(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.version.value (${String(value)})`;
      this.value = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.value = null;
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
   * @returns the `baseCitation` property value as a Reference object; else an empty Reference object
   */
  public getBaseCitation(): Reference {
    return this.baseCitation ?? new Reference();
  }

  /**
   * Assigns the provided BaseCitation object value to the `baseCitation` property.
   *
   * @decorator `@ReferenceTargets('Citation.citedArtifact.version.baseCitation', ['Citation',])`
   *
   * @param value - the `baseCitation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Citation.citedArtifact.version.baseCitation', [
    'Citation',
  ])
  public setBaseCitation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.baseCitation = value;
    } else {
      this.baseCitation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `baseCitation` property exists and has a value; `false` otherwise
   */
  public hasBaseCitation(): boolean {
    return isDefined<Reference>(this.baseCitation) && !this.baseCitation.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.version';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.value,
      this.baseCitation,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactVersionComponent {
    const dest = new CitationCitedArtifactVersionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactVersionComponent): void {
    super.copyValues(dest);
    dest.value = this.value ? this.value.copy() : null;
    dest.baseCitation = this.baseCitation?.copy();
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

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getValueElement(), 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    if (this.hasBaseCitation()) {
      setFhirComplexJson(this.getBaseCitation(), 'baseCitation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactStatusDateComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An effective date or period for a status of the cited artifact
 * - **Definition:** An effective date or period for a status of the cited artifact.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactStatusDateComponent extends BackboneElement implements IBackboneElement {
  constructor(activity: CodeableConcept | null = null, period: Period | null = null) {
    super();

    this.activity = null;
    if (isDefined<CodeableConcept>(activity)) {
      this.setActivity(activity);
    }

    this.period = null;
    if (isDefined<Period>(period)) {
      this.setPeriod(period);
    }
  }

  /**
   * Parse the provided `CitationCitedArtifactStatusDateComponent` JSON to instantiate the CitationCitedArtifactStatusDateComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactStatusDateComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactStatusDateComponent
   * @returns CitationCitedArtifactStatusDateComponent data model or undefined for `CitationCitedArtifactStatusDateComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactStatusDateComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactStatusDateComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactStatusDateComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'activity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setActivity(null);
      } else {
        instance.setActivity(datatype);
      }
    } else {
      instance.setActivity(null);
    }

    fieldName = 'actual';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setActualElement(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setPeriod(null);
      } else {
        instance.setPeriod(datatype);
      }
    } else {
      instance.setPeriod(null);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.statusDate.activity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of the status
   * - **Definition:** Classification of the status.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private activity: CodeableConcept | null;

  /**
   * Citation.citedArtifact.statusDate.actual Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Either occurred or expected
   * - **Definition:** Either occurred or expected.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actual?: BooleanType | undefined;

  /**
   * Citation.citedArtifact.statusDate.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the status started and/or ended
   * - **Definition:** When the status started and/or ended.
   * - **Comment:** For an instance, place the same value in both start and end elements.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period: Period | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `activity` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getActivity(): CodeableConcept {
    return this.activity ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `activity` property.
   *
   * @param value - the `activity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setActivity(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.statusDate.activity; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.activity = value;
    } else {
      this.activity = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `activity` property exists and has a value; `false` otherwise
   */
  public hasActivity(): boolean {
    return isDefined<CodeableConcept>(this.activity) && !this.activity.isEmpty();
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
  public setActualElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.statusDate.actual; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.actual = element;
    } else {
      this.actual = undefined;
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
   * @returns the `actual` property value as a fhirBoolean if defined; else undefined
   */
  public getActual(): fhirBoolean | undefined {
    return this.actual?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `actual` property.
   *
   * @param value - the `actual` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActual(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.statusDate.actual (${String(value)})`;
      this.actual = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.actual = undefined;
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
  public setPeriod(value: Period | undefined | null): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.statusDate.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.period = value;
    } else {
      this.period = null;
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
    return 'Citation.citedArtifact.statusDate';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.activity,
      this.actual,
      this.period,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.activity, this.period, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactStatusDateComponent {
    const dest = new CitationCitedArtifactStatusDateComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactStatusDateComponent): void {
    super.copyValues(dest);
    dest.activity = this.activity ? this.activity.copy() : null;
    dest.actual = this.actual?.copy();
    dest.period = this.period ? this.period.copy() : null;
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

    if (this.hasActivity()) {
      setFhirComplexJson(this.getActivity(), 'activity', jsonObj);
    } else {
      jsonObj['activity'] = null;
    }

    if (this.hasActualElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getActualElement(), 'actual', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    } else {
      jsonObj['period'] = null;
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactTitleComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The title details of the article or artifact
 * - **Definition:** The title details of the article or artifact.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactTitleComponent extends BackboneElement implements IBackboneElement {
  constructor(text: MarkdownType | fhirMarkdown | null = null) {
    super();

    this.text = null;
    if (isDefined<MarkdownType | fhirMarkdown>(text)) {
      if (text instanceof PrimitiveType) {
        this.setTextElement(text);
      } else {
        this.setText(text);
      }
    }
  }

  /**
   * Parse the provided `CitationCitedArtifactTitleComponent` JSON to instantiate the CitationCitedArtifactTitleComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactTitleComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactTitleComponent
   * @returns CitationCitedArtifactTitleComponent data model or undefined for `CitationCitedArtifactTitleComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactTitleComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactTitleComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactTitleComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addType(datatype);
        }
      });
    }

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLanguage(datatype);
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setText(null);
      } else {
        instance.setTextElement(datatype);
      }
    } else {
      instance.setText(null);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.title.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The kind of title
   * - **Definition:** Used to express the reason or specific aspect for the title.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * Citation.citedArtifact.title.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used to express the specific language
   * - **Definition:** Used to express the specific language.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private language?: CodeableConcept | undefined;

  /**
   * Citation.citedArtifact.title.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The title of the article or artifact
   * - **Definition:** The title of the article or artifact.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text: MarkdownType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept array
   */
  public getType(): CodeableConcept[] {
    return this.type_ ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `type_` property.
   *
   * @param value - the `type_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.title.type; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `type_` array property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.title.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initType();
      this.type_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefinedList<CodeableConcept>(this.type_) && this.type_.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `type_` property
   */
  private initType(): void {
    if(!this.hasType()) {
      this.type_ = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `language` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getLanguage(): CodeableConcept {
    return this.language ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Language object value to the `language` property.
   *
   * @param value - the `language` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLanguage(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.title.language; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.language = value;
    } else {
      this.language = undefined;
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
   * @returns the `text` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getTextElement(): MarkdownType {
    return this.text ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: MarkdownType | undefined | null): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.title.text; Provided value is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.text = element;
    } else {
      this.text = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<MarkdownType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirMarkdown if defined; else null
   */
  public getText(): fhirMarkdown | null {
    if (this.text?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.text.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirMarkdown | undefined | null): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.title.text (${String(value)})`;
      this.text = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.text = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.title';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.language,
      this.text,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.text, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactTitleComponent {
    const dest = new CitationCitedArtifactTitleComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactTitleComponent): void {
    super.copyValues(dest);
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    dest.language = this.language?.copy();
    dest.text = this.text ? this.text.copy() : null;
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

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasLanguage()) {
      setFhirComplexJson(this.getLanguage(), 'language', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getTextElement(), 'text', jsonObj);
    } else {
      jsonObj['text'] = null;
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactAbstractComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Summary of the article or artifact
 * - **Definition:** Summary of the article or artifact.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactAbstractComponent extends BackboneElement implements IBackboneElement {
  constructor(text: MarkdownType | fhirMarkdown | null = null) {
    super();

    this.text = null;
    if (isDefined<MarkdownType | fhirMarkdown>(text)) {
      if (text instanceof PrimitiveType) {
        this.setTextElement(text);
      } else {
        this.setText(text);
      }
    }
  }

  /**
   * Parse the provided `CitationCitedArtifactAbstractComponent` JSON to instantiate the CitationCitedArtifactAbstractComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactAbstractComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactAbstractComponent
   * @returns CitationCitedArtifactAbstractComponent data model or undefined for `CitationCitedArtifactAbstractComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactAbstractComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactAbstractComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactAbstractComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLanguage(datatype);
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setText(null);
      } else {
        instance.setTextElement(datatype);
      }
    } else {
      instance.setText(null);
    }

    fieldName = 'copyright';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setCopyrightElement(datatype);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.abstract.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The kind of abstract
   * - **Definition:** Used to express the reason or specific aspect for the abstract.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Citation.citedArtifact.abstract.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used to express the specific language
   * - **Definition:** Used to express the specific language.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private language?: CodeableConcept | undefined;

  /**
   * Citation.citedArtifact.abstract.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Abstract content
   * - **Definition:** Abstract content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text: MarkdownType | null;

  /**
   * Citation.citedArtifact.abstract.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Copyright notice for the abstract
   * - **Definition:** Copyright notice for the abstract.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Citation.citedArtifact.abstract.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `language` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getLanguage(): CodeableConcept {
    return this.language ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Language object value to the `language` property.
   *
   * @param value - the `language` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLanguage(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.abstract.language; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.language = value;
    } else {
      this.language = undefined;
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
   * @returns the `text` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getTextElement(): MarkdownType {
    return this.text ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: MarkdownType | undefined | null): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.abstract.text; Provided value is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.text = element;
    } else {
      this.text = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<MarkdownType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirMarkdown if defined; else null
   */
  public getText(): fhirMarkdown | null {
    if (this.text?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.text.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirMarkdown | undefined | null): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.abstract.text (${String(value)})`;
      this.text = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.text = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /**
   * @returns the `copyright` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getCopyrightElement(): MarkdownType {
    return this.copyright ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `copyright` property.
   *
   * @param element - the `copyright` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopyrightElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.abstract.copyright; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.copyright = element;
    } else {
      this.copyright = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copyright` property exists and has a value; `false` otherwise
   */
  public hasCopyrightElement(): boolean {
    return isDefined<MarkdownType>(this.copyright) && !this.copyright.isEmpty();
  }

  /**
   * @returns the `copyright` property value as a fhirMarkdown if defined; else undefined
   */
  public getCopyright(): fhirMarkdown | undefined {
    return this.copyright?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `copyright` property.
   *
   * @param value - the `copyright` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopyright(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.abstract.copyright (${String(value)})`;
      this.copyright = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.copyright = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copyright` property exists and has a value; `false` otherwise
   */
  public hasCopyright(): boolean {
    return this.hasCopyrightElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.abstract';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.language,
      this.text,
      this.copyright,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.text, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactAbstractComponent {
    const dest = new CitationCitedArtifactAbstractComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactAbstractComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.language = this.language?.copy();
    dest.text = this.text ? this.text.copy() : null;
    dest.copyright = this.copyright?.copy();
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasLanguage()) {
      setFhirComplexJson(this.getLanguage(), 'language', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getTextElement(), 'text', jsonObj);
    } else {
      jsonObj['text'] = null;
    }

    if (this.hasCopyrightElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getCopyrightElement(), 'copyright', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactPartComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The component of the article or artifact
 * - **Definition:** The component of the article or artifact.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactPartComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CitationCitedArtifactPartComponent` JSON to instantiate the CitationCitedArtifactPartComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactPartComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactPartComponent
   * @returns CitationCitedArtifactPartComponent data model or undefined for `CitationCitedArtifactPartComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactPartComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactPartComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactPartComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setValueElement(datatype);
    }

    fieldName = 'baseCitation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBaseCitation(datatype);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.part.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The kind of component
   * - **Definition:** The kind of component.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Citation.citedArtifact.part.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specification of the component
   * - **Definition:** The specification of the component.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value?: StringType | undefined;

  /**
   * Citation.citedArtifact.part.baseCitation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The citation for the full article or artifact
   * - **Definition:** The citation for the full article or artifact.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Citation',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private baseCitation?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Citation.citedArtifact.part.type; Provided element is not an instance of CodeableConcept.`;
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
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.part.value; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.part.value (${String(value)})`;
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
   * @returns the `baseCitation` property value as a Reference object; else an empty Reference object
   */
  public getBaseCitation(): Reference {
    return this.baseCitation ?? new Reference();
  }

  /**
   * Assigns the provided BaseCitation object value to the `baseCitation` property.
   *
   * @decorator `@ReferenceTargets('Citation.citedArtifact.part.baseCitation', ['Citation',])`
   *
   * @param value - the `baseCitation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Citation.citedArtifact.part.baseCitation', [
    'Citation',
  ])
  public setBaseCitation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.baseCitation = value;
    } else {
      this.baseCitation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `baseCitation` property exists and has a value; `false` otherwise
   */
  public hasBaseCitation(): boolean {
    return isDefined<Reference>(this.baseCitation) && !this.baseCitation.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.part';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.value,
      this.baseCitation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactPartComponent {
    const dest = new CitationCitedArtifactPartComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactPartComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.value = this.value?.copy();
    dest.baseCitation = this.baseCitation?.copy();
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getValueElement(), 'value', jsonObj);
    }

    if (this.hasBaseCitation()) {
      setFhirComplexJson(this.getBaseCitation(), 'baseCitation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactRelatesToComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The artifact related to the cited artifact
 * - **Definition:** The artifact related to the cited artifact.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactRelatesToComponent extends BackboneElement implements IBackboneElement {
  constructor(relationshipType: CodeableConcept | null = null, target: IDataType | null = null) {
    super();

    this.relationshipType = null;
    if (isDefined<CodeableConcept>(relationshipType)) {
      this.setRelationshipType(relationshipType);
    }

    this.target = null;
    if (isDefined<IDataType>(target)) {
      this.setTarget(target);
    }

  }

  /**
   * Parse the provided `CitationCitedArtifactRelatesToComponent` JSON to instantiate the CitationCitedArtifactRelatesToComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactRelatesToComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactRelatesToComponent
   * @returns CitationCitedArtifactRelatesToComponent data model or undefined for `CitationCitedArtifactRelatesToComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactRelatesToComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactRelatesToComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactRelatesToComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = CitationCitedArtifactRelatesToComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for CitationCitedArtifactRelatesToComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'relationshipType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setRelationshipType(null);
      } else {
        instance.setRelationshipType(datatype);
      }
    } else {
      instance.setRelationshipType(null);
    }

    fieldName = 'targetClassifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTargetClassifier(datatype);
        }
      });
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
   * Citation.citedArtifact.relatesTo.relationshipType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How the cited artifact relates to the target artifact
   * - **Definition:** How the cited artifact relates to the target artifact.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relationshipType: CodeableConcept | null;

  /**
   * Citation.citedArtifact.relatesTo.targetClassifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The clasification of the related artifact
   * - **Definition:** The clasification of the related artifact.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private targetClassifier?: CodeableConcept[] | undefined;

  /**
   * Citation.citedArtifact.relatesTo.target[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Citation.citedArtifact.relatesTo.target[x]', ['uri','Identifier','Reference','Attachment',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The article or artifact that the cited artifact is related to
   * - **Definition:** The article or artifact that the cited artifact is related to.
   * - **FHIR Types:**
   *     'uri',
   *     'Identifier',
   *     'Reference',
   *     'Attachment',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Citation.citedArtifact.relatesTo.target[x]',[
    'uri',
    'Identifier',
    'Reference',
    'Attachment',
  ])
  private target: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `relationshipType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRelationshipType(): CodeableConcept {
    return this.relationshipType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `relationshipType` property.
   *
   * @param value - the `relationshipType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelationshipType(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.relatesTo.relationshipType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.relationshipType = value;
    } else {
      this.relationshipType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `relationshipType` property exists and has a value; `false` otherwise
   */
  public hasRelationshipType(): boolean {
    return isDefined<CodeableConcept>(this.relationshipType) && !this.relationshipType.isEmpty();
  }

  /**
   * @returns the `targetClassifier` property value as a CodeableConcept array
   */
  public getTargetClassifier(): CodeableConcept[] {
    return this.targetClassifier ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `targetClassifier` property.
   *
   * @param value - the `targetClassifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTargetClassifier(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.relatesTo.targetClassifier; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.targetClassifier = value;
    } else {
      this.targetClassifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `targetClassifier` array property.
   *
   * @param value - the `targetClassifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTargetClassifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.relatesTo.targetClassifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initTargetClassifier();
      this.targetClassifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `targetClassifier` property exists and has a value; `false` otherwise
   */
  public hasTargetClassifier(): boolean {
    return isDefinedList<CodeableConcept>(this.targetClassifier) && this.targetClassifier.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `targetClassifier` property
   */
  private initTargetClassifier(): void {
    if(!this.hasTargetClassifier()) {
      this.targetClassifier = [] as CodeableConcept[];
    }
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
   * @decorator `@ChoiceDataTypes('Citation.citedArtifact.relatesTo.target[x]')`
   *
   * @param value - the `target` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Citation.citedArtifact.relatesTo.target[x]')
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
   * @returns the `target` property value as a UriType object if defined; else null
   */
  public getTargetUriType(): UriType | null {
    if (!isDefined<IDataType>(this.target)) {
      return null;
    }
    if (!(this.target instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Citation.citedArtifact.relatesTo.target[x]: Expected UriType but encountered ${this.target.fhirType()}`,
      );
    }
    return this.target;
  }

  /**
   * @returns `true` if the `` property exists as a UriType and has a value; `false` otherwise
   */
  public hasTargetUriType(): boolean {
    return this.hasTarget() && this.target instanceof UriType;
  }

  /**
   * @returns the `target` property value as a Identifier object if defined; else null
   */
  public getTargetIdentifier(): Identifier | null {
    if (!isDefined<IDataType>(this.target)) {
      return null;
    }
    if (!(this.target instanceof Identifier)) {
      throw new InvalidTypeError(
        `DataType mismatch for Citation.citedArtifact.relatesTo.target[x]: Expected Identifier but encountered ${this.target.fhirType()}`,
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
        `DataType mismatch for Citation.citedArtifact.relatesTo.target[x]: Expected Reference but encountered ${this.target.fhirType()}`,
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

  /**
   * @returns the `target` property value as a Attachment object if defined; else null
   */
  public getTargetAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.target)) {
      return null;
    }
    if (!(this.target instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Citation.citedArtifact.relatesTo.target[x]: Expected Attachment but encountered ${this.target.fhirType()}`,
      );
    }
    return this.target;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasTargetAttachment(): boolean {
    return this.hasTarget() && this.target instanceof Attachment;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.relatesTo';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.relationshipType,
      this.targetClassifier,
      this.target,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.relationshipType, this.target, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactRelatesToComponent {
    const dest = new CitationCitedArtifactRelatesToComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactRelatesToComponent): void {
    super.copyValues(dest);
    dest.relationshipType = this.relationshipType ? this.relationshipType.copy() : null;
    const targetClassifierList = copyListValues<CodeableConcept>(this.targetClassifier);
    dest.targetClassifier = targetClassifierList.length === 0 ? undefined : targetClassifierList;
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

    if (this.hasRelationshipType()) {
      setFhirComplexJson(this.getRelationshipType(), 'relationshipType', jsonObj);
    } else {
      jsonObj['relationshipType'] = null;
    }

    if (this.hasTargetClassifier()) {
      setFhirComplexListJson(this.getTargetClassifier(), 'targetClassifier', jsonObj);
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
 * CitationCitedArtifactPublicationFormComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** If multiple, used to represent alternative forms of the article that are not separate citations
 * - **Definition:** If multiple, used to represent alternative forms of the article that are not separate citations.
 * - **Comment:** A common use is a journal article with a publication date and pagination for a print version and a different publication date for the online version of the same article.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactPublicationFormComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CitationCitedArtifactPublicationFormComponent` JSON to instantiate the CitationCitedArtifactPublicationFormComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactPublicationFormComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactPublicationFormComponent
   * @returns CitationCitedArtifactPublicationFormComponent data model or undefined for `CitationCitedArtifactPublicationFormComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactPublicationFormComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactPublicationFormComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactPublicationFormComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'publishedIn';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: CitationCitedArtifactPublicationFormPublishedInComponent | undefined = CitationCitedArtifactPublicationFormPublishedInComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPublishedIn(component);
    }

    fieldName = 'periodicRelease';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: CitationCitedArtifactPublicationFormPeriodicReleaseComponent | undefined = CitationCitedArtifactPublicationFormPeriodicReleaseComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriodicRelease(component);
    }

    fieldName = 'articleDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setArticleDateElement(datatype);
    }

    fieldName = 'lastRevisionDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setLastRevisionDateElement(datatype);
    }

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addLanguage(datatype);
        }
      });
    }

    fieldName = 'accessionNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setAccessionNumberElement(datatype);
    }

    fieldName = 'pageString';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPageStringElement(datatype);
    }

    fieldName = 'firstPage';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setFirstPageElement(datatype);
    }

    fieldName = 'lastPage';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLastPageElement(datatype);
    }

    fieldName = 'pageCount';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPageCountElement(datatype);
    }

    fieldName = 'copyright';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setCopyrightElement(datatype);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.publicationForm.publishedIn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The collection the cited article or artifact is published in
   * - **Definition:** The collection the cited article or artifact is published in.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private publishedIn?: CitationCitedArtifactPublicationFormPublishedInComponent | undefined;

  /**
   * Citation.citedArtifact.publicationForm.periodicRelease Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific issue in which the cited article resides
   * - **Definition:** The specific issue in which the cited article resides.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private periodicRelease?: CitationCitedArtifactPublicationFormPeriodicReleaseComponent | undefined;

  /**
   * Citation.citedArtifact.publicationForm.articleDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date the article was added to the database, or the date the article was released
   * - **Definition:** The date the article was added to the database, or the date the article was released (which may differ from the journal issue publication date).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private articleDate?: DateTimeType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.lastRevisionDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date the article was last revised or updated in the database
   * - **Definition:** The date the article was last revised or updated in the database.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lastRevisionDate?: DateTimeType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Language in which this form of the article is published
   * - **Definition:** Language in which this form of the article is published.
   * - **Comment:** Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private language?: CodeableConcept[] | undefined;

  /**
   * Citation.citedArtifact.publicationForm.accessionNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Entry number or identifier for inclusion in a database
   * - **Definition:** Entry number or identifier for inclusion in a database.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private accessionNumber?: StringType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.pageString Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for full display of pagination
   * - **Definition:** Used for full display of pagination.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private pageString?: StringType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.firstPage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for isolated representation of first page
   * - **Definition:** Used for isolated representation of first page.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private firstPage?: StringType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.lastPage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for isolated representation of last page
   * - **Definition:** Used for isolated representation of last page.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lastPage?: StringType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.pageCount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of pages or screens
   * - **Definition:** Actual or approximate number of pages or screens.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private pageCount?: StringType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Copyright notice for the full article or artifact
   * - **Definition:** Copyright notice for the full article or artifact.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `publishedIn` property value as a CitationCitedArtifactPublicationFormPublishedInComponent object if defined; else an empty CitationCitedArtifactPublicationFormPublishedInComponent object
   */
  public getPublishedIn(): CitationCitedArtifactPublicationFormPublishedInComponent {
    return this.publishedIn ?? new CitationCitedArtifactPublicationFormPublishedInComponent();
  }

  /**
   * Assigns the provided PublishedIn object value to the `publishedIn` property.
   *
   * @param value - the `publishedIn` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPublishedIn(value: CitationCitedArtifactPublicationFormPublishedInComponent | undefined): this {
    if (isDefined<CitationCitedArtifactPublicationFormPublishedInComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.publishedIn; Provided element is not an instance of CitationCitedArtifactPublicationFormPublishedInComponent.`;
      assertFhirType<CitationCitedArtifactPublicationFormPublishedInComponent>(value, CitationCitedArtifactPublicationFormPublishedInComponent, optErrMsg);
      this.publishedIn = value;
    } else {
      this.publishedIn = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publishedIn` property exists and has a value; `false` otherwise
   */
  public hasPublishedIn(): boolean {
    return isDefined<CitationCitedArtifactPublicationFormPublishedInComponent>(this.publishedIn) && !this.publishedIn.isEmpty();
  }

  /**
   * @returns the `periodicRelease` property value as a CitationCitedArtifactPublicationFormPeriodicReleaseComponent object if defined; else an empty CitationCitedArtifactPublicationFormPeriodicReleaseComponent object
   */
  public getPeriodicRelease(): CitationCitedArtifactPublicationFormPeriodicReleaseComponent {
    return this.periodicRelease ?? new CitationCitedArtifactPublicationFormPeriodicReleaseComponent();
  }

  /**
   * Assigns the provided PeriodicRelease object value to the `periodicRelease` property.
   *
   * @param value - the `periodicRelease` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriodicRelease(value: CitationCitedArtifactPublicationFormPeriodicReleaseComponent | undefined): this {
    if (isDefined<CitationCitedArtifactPublicationFormPeriodicReleaseComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease; Provided element is not an instance of CitationCitedArtifactPublicationFormPeriodicReleaseComponent.`;
      assertFhirType<CitationCitedArtifactPublicationFormPeriodicReleaseComponent>(value, CitationCitedArtifactPublicationFormPeriodicReleaseComponent, optErrMsg);
      this.periodicRelease = value;
    } else {
      this.periodicRelease = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `periodicRelease` property exists and has a value; `false` otherwise
   */
  public hasPeriodicRelease(): boolean {
    return isDefined<CitationCitedArtifactPublicationFormPeriodicReleaseComponent>(this.periodicRelease) && !this.periodicRelease.isEmpty();
  }

  /**
   * @returns the `articleDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getArticleDateElement(): DateTimeType {
    return this.articleDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `articleDate` property.
   *
   * @param element - the `articleDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setArticleDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.articleDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.articleDate = element;
    } else {
      this.articleDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `articleDate` property exists and has a value; `false` otherwise
   */
  public hasArticleDateElement(): boolean {
    return isDefined<DateTimeType>(this.articleDate) && !this.articleDate.isEmpty();
  }

  /**
   * @returns the `articleDate` property value as a fhirDateTime if defined; else undefined
   */
  public getArticleDate(): fhirDateTime | undefined {
    return this.articleDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `articleDate` property.
   *
   * @param value - the `articleDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setArticleDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.articleDate (${String(value)})`;
      this.articleDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.articleDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `articleDate` property exists and has a value; `false` otherwise
   */
  public hasArticleDate(): boolean {
    return this.hasArticleDateElement();
  }

  /**
   * @returns the `lastRevisionDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getLastRevisionDateElement(): DateTimeType {
    return this.lastRevisionDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lastRevisionDate` property.
   *
   * @param element - the `lastRevisionDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastRevisionDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.lastRevisionDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.lastRevisionDate = element;
    } else {
      this.lastRevisionDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastRevisionDate` property exists and has a value; `false` otherwise
   */
  public hasLastRevisionDateElement(): boolean {
    return isDefined<DateTimeType>(this.lastRevisionDate) && !this.lastRevisionDate.isEmpty();
  }

  /**
   * @returns the `lastRevisionDate` property value as a fhirDateTime if defined; else undefined
   */
  public getLastRevisionDate(): fhirDateTime | undefined {
    return this.lastRevisionDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lastRevisionDate` property.
   *
   * @param value - the `lastRevisionDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastRevisionDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.lastRevisionDate (${String(value)})`;
      this.lastRevisionDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.lastRevisionDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastRevisionDate` property exists and has a value; `false` otherwise
   */
  public hasLastRevisionDate(): boolean {
    return this.hasLastRevisionDateElement();
  }

  /**
   * @returns the `language` property value as a CodeableConcept array
   */
  public getLanguage(): CodeableConcept[] {
    return this.language ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `language` property.
   *
   * @param value - the `language` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLanguage(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.language; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.language = value;
    } else {
      this.language = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `language` array property.
   *
   * @param value - the `language` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLanguage(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.language; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initLanguage();
      this.language?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguage(): boolean {
    return isDefinedList<CodeableConcept>(this.language) && this.language.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `language` property
   */
  private initLanguage(): void {
    if(!this.hasLanguage()) {
      this.language = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `accessionNumber` property value as a StringType object if defined; else an empty StringType object
   */
  public getAccessionNumberElement(): StringType {
    return this.accessionNumber ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `accessionNumber` property.
   *
   * @param element - the `accessionNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAccessionNumberElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.accessionNumber; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.accessionNumber = element;
    } else {
      this.accessionNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `accessionNumber` property exists and has a value; `false` otherwise
   */
  public hasAccessionNumberElement(): boolean {
    return isDefined<StringType>(this.accessionNumber) && !this.accessionNumber.isEmpty();
  }

  /**
   * @returns the `accessionNumber` property value as a fhirString if defined; else undefined
   */
  public getAccessionNumber(): fhirString | undefined {
    return this.accessionNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `accessionNumber` property.
   *
   * @param value - the `accessionNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAccessionNumber(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.accessionNumber (${String(value)})`;
      this.accessionNumber = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.accessionNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `accessionNumber` property exists and has a value; `false` otherwise
   */
  public hasAccessionNumber(): boolean {
    return this.hasAccessionNumberElement();
  }

  /**
   * @returns the `pageString` property value as a StringType object if defined; else an empty StringType object
   */
  public getPageStringElement(): StringType {
    return this.pageString ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `pageString` property.
   *
   * @param element - the `pageString` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPageStringElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.pageString; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.pageString = element;
    } else {
      this.pageString = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `pageString` property exists and has a value; `false` otherwise
   */
  public hasPageStringElement(): boolean {
    return isDefined<StringType>(this.pageString) && !this.pageString.isEmpty();
  }

  /**
   * @returns the `pageString` property value as a fhirString if defined; else undefined
   */
  public getPageString(): fhirString | undefined {
    return this.pageString?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `pageString` property.
   *
   * @param value - the `pageString` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPageString(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.pageString (${String(value)})`;
      this.pageString = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.pageString = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `pageString` property exists and has a value; `false` otherwise
   */
  public hasPageString(): boolean {
    return this.hasPageStringElement();
  }

  /**
   * @returns the `firstPage` property value as a StringType object if defined; else an empty StringType object
   */
  public getFirstPageElement(): StringType {
    return this.firstPage ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `firstPage` property.
   *
   * @param element - the `firstPage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFirstPageElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.firstPage; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.firstPage = element;
    } else {
      this.firstPage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `firstPage` property exists and has a value; `false` otherwise
   */
  public hasFirstPageElement(): boolean {
    return isDefined<StringType>(this.firstPage) && !this.firstPage.isEmpty();
  }

  /**
   * @returns the `firstPage` property value as a fhirString if defined; else undefined
   */
  public getFirstPage(): fhirString | undefined {
    return this.firstPage?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `firstPage` property.
   *
   * @param value - the `firstPage` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFirstPage(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.firstPage (${String(value)})`;
      this.firstPage = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.firstPage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `firstPage` property exists and has a value; `false` otherwise
   */
  public hasFirstPage(): boolean {
    return this.hasFirstPageElement();
  }

  /**
   * @returns the `lastPage` property value as a StringType object if defined; else an empty StringType object
   */
  public getLastPageElement(): StringType {
    return this.lastPage ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lastPage` property.
   *
   * @param element - the `lastPage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastPageElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.lastPage; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.lastPage = element;
    } else {
      this.lastPage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastPage` property exists and has a value; `false` otherwise
   */
  public hasLastPageElement(): boolean {
    return isDefined<StringType>(this.lastPage) && !this.lastPage.isEmpty();
  }

  /**
   * @returns the `lastPage` property value as a fhirString if defined; else undefined
   */
  public getLastPage(): fhirString | undefined {
    return this.lastPage?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lastPage` property.
   *
   * @param value - the `lastPage` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastPage(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.lastPage (${String(value)})`;
      this.lastPage = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.lastPage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastPage` property exists and has a value; `false` otherwise
   */
  public hasLastPage(): boolean {
    return this.hasLastPageElement();
  }

  /**
   * @returns the `pageCount` property value as a StringType object if defined; else an empty StringType object
   */
  public getPageCountElement(): StringType {
    return this.pageCount ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `pageCount` property.
   *
   * @param element - the `pageCount` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPageCountElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.pageCount; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.pageCount = element;
    } else {
      this.pageCount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `pageCount` property exists and has a value; `false` otherwise
   */
  public hasPageCountElement(): boolean {
    return isDefined<StringType>(this.pageCount) && !this.pageCount.isEmpty();
  }

  /**
   * @returns the `pageCount` property value as a fhirString if defined; else undefined
   */
  public getPageCount(): fhirString | undefined {
    return this.pageCount?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `pageCount` property.
   *
   * @param value - the `pageCount` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPageCount(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.pageCount (${String(value)})`;
      this.pageCount = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.pageCount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `pageCount` property exists and has a value; `false` otherwise
   */
  public hasPageCount(): boolean {
    return this.hasPageCountElement();
  }

  /**
   * @returns the `copyright` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getCopyrightElement(): MarkdownType {
    return this.copyright ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `copyright` property.
   *
   * @param element - the `copyright` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopyrightElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.copyright; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.copyright = element;
    } else {
      this.copyright = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copyright` property exists and has a value; `false` otherwise
   */
  public hasCopyrightElement(): boolean {
    return isDefined<MarkdownType>(this.copyright) && !this.copyright.isEmpty();
  }

  /**
   * @returns the `copyright` property value as a fhirMarkdown if defined; else undefined
   */
  public getCopyright(): fhirMarkdown | undefined {
    return this.copyright?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `copyright` property.
   *
   * @param value - the `copyright` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopyright(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.copyright (${String(value)})`;
      this.copyright = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.copyright = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copyright` property exists and has a value; `false` otherwise
   */
  public hasCopyright(): boolean {
    return this.hasCopyrightElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.publicationForm';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.publishedIn,
      this.periodicRelease,
      this.articleDate,
      this.lastRevisionDate,
      this.language,
      this.accessionNumber,
      this.pageString,
      this.firstPage,
      this.lastPage,
      this.pageCount,
      this.copyright,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactPublicationFormComponent {
    const dest = new CitationCitedArtifactPublicationFormComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactPublicationFormComponent): void {
    super.copyValues(dest);
    dest.publishedIn = this.publishedIn?.copy();
    dest.periodicRelease = this.periodicRelease?.copy();
    dest.articleDate = this.articleDate?.copy();
    dest.lastRevisionDate = this.lastRevisionDate?.copy();
    const languageList = copyListValues<CodeableConcept>(this.language);
    dest.language = languageList.length === 0 ? undefined : languageList;
    dest.accessionNumber = this.accessionNumber?.copy();
    dest.pageString = this.pageString?.copy();
    dest.firstPage = this.firstPage?.copy();
    dest.lastPage = this.lastPage?.copy();
    dest.pageCount = this.pageCount?.copy();
    dest.copyright = this.copyright?.copy();
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

    if (this.hasPublishedIn()) {
      setFhirBackboneElementJson(this.getPublishedIn(), 'publishedIn', jsonObj);
    }

    if (this.hasPeriodicRelease()) {
      setFhirBackboneElementJson(this.getPeriodicRelease(), 'periodicRelease', jsonObj);
    }

    if (this.hasArticleDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getArticleDateElement(), 'articleDate', jsonObj);
    }

    if (this.hasLastRevisionDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getLastRevisionDateElement(), 'lastRevisionDate', jsonObj);
    }

    if (this.hasLanguage()) {
      setFhirComplexListJson(this.getLanguage(), 'language', jsonObj);
    }

    if (this.hasAccessionNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getAccessionNumberElement(), 'accessionNumber', jsonObj);
    }

    if (this.hasPageStringElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPageStringElement(), 'pageString', jsonObj);
    }

    if (this.hasFirstPageElement()) {
      setFhirPrimitiveJson<fhirString>(this.getFirstPageElement(), 'firstPage', jsonObj);
    }

    if (this.hasLastPageElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLastPageElement(), 'lastPage', jsonObj);
    }

    if (this.hasPageCountElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPageCountElement(), 'pageCount', jsonObj);
    }

    if (this.hasCopyrightElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getCopyrightElement(), 'copyright', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactPublicationFormPublishedInComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The collection the cited article or artifact is published in
 * - **Definition:** The collection the cited article or artifact is published in.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactPublicationFormPublishedInComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CitationCitedArtifactPublicationFormPublishedInComponent` JSON to instantiate the CitationCitedArtifactPublicationFormPublishedInComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactPublicationFormPublishedInComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactPublicationFormPublishedInComponent
   * @returns CitationCitedArtifactPublicationFormPublishedInComponent data model or undefined for `CitationCitedArtifactPublicationFormPublishedInComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactPublicationFormPublishedInComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactPublicationFormPublishedInComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactPublicationFormPublishedInComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
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

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTitleElement(datatype);
    }

    fieldName = 'publisher';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPublisher(datatype);
    }

    fieldName = 'publisherLocation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPublisherLocationElement(datatype);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.publicationForm.publishedIn.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of container (e.g. Periodical, database, or book)
   * - **Definition:** Kind of container (e.g. Periodical, database, or book).
   * - **Comment:** Journals and newspapers are coded as Periodical.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Citation.citedArtifact.publicationForm.publishedIn.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Journal identifiers include ISSN, ISO Abbreviation and NLMuniqueID; Book identifiers include ISBN
   * - **Definition:** Journal identifiers include ISSN, ISO Abbreviation and NLMuniqueID; Book identifiers include ISBN.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Citation.citedArtifact.publicationForm.publishedIn.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the database or title of the book or journal
   * - **Definition:** Name of the database or title of the book or journal.
   * - **Comment:** ClinicalTrials.gov is a name of a database.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title?: StringType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.publishedIn.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher
   * - **Definition:** Name of the publisher.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private publisher?: Reference | undefined;

  /**
   * Citation.citedArtifact.publicationForm.publishedIn.publisherLocation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Geographic location of the publisher
   * - **Definition:** Geographic location of the publisher.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private publisherLocation?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.publishedIn.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.publishedIn.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.publishedIn.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.publishedIn.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.publishedIn.title (${String(value)})`;
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
   * @returns the `publisher` property value as a Reference object; else an empty Reference object
   */
  public getPublisher(): Reference {
    return this.publisher ?? new Reference();
  }

  /**
   * Assigns the provided Publisher object value to the `publisher` property.
   *
   * @decorator `@ReferenceTargets('Citation.citedArtifact.publicationForm.publishedIn.publisher', ['Organization',])`
   *
   * @param value - the `publisher` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Citation.citedArtifact.publicationForm.publishedIn.publisher', [
    'Organization',
  ])
  public setPublisher(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.publisher = value;
    } else {
      this.publisher = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publisher` property exists and has a value; `false` otherwise
   */
  public hasPublisher(): boolean {
    return isDefined<Reference>(this.publisher) && !this.publisher.isEmpty();
  }

  /**
   * @returns the `publisherLocation` property value as a StringType object if defined; else an empty StringType object
   */
  public getPublisherLocationElement(): StringType {
    return this.publisherLocation ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `publisherLocation` property.
   *
   * @param element - the `publisherLocation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPublisherLocationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.publishedIn.publisherLocation; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.publisherLocation = element;
    } else {
      this.publisherLocation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publisherLocation` property exists and has a value; `false` otherwise
   */
  public hasPublisherLocationElement(): boolean {
    return isDefined<StringType>(this.publisherLocation) && !this.publisherLocation.isEmpty();
  }

  /**
   * @returns the `publisherLocation` property value as a fhirString if defined; else undefined
   */
  public getPublisherLocation(): fhirString | undefined {
    return this.publisherLocation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `publisherLocation` property.
   *
   * @param value - the `publisherLocation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPublisherLocation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.publishedIn.publisherLocation (${String(value)})`;
      this.publisherLocation = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.publisherLocation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publisherLocation` property exists and has a value; `false` otherwise
   */
  public hasPublisherLocation(): boolean {
    return this.hasPublisherLocationElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.publicationForm.publishedIn';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.identifier,
      this.title,
      this.publisher,
      this.publisherLocation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactPublicationFormPublishedInComponent {
    const dest = new CitationCitedArtifactPublicationFormPublishedInComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactPublicationFormPublishedInComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.title = this.title?.copy();
    dest.publisher = this.publisher?.copy();
    dest.publisherLocation = this.publisherLocation?.copy();
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasPublisher()) {
      setFhirComplexJson(this.getPublisher(), 'publisher', jsonObj);
    }

    if (this.hasPublisherLocationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPublisherLocationElement(), 'publisherLocation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactPublicationFormPeriodicReleaseComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The specific issue in which the cited article resides
 * - **Definition:** The specific issue in which the cited article resides.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactPublicationFormPeriodicReleaseComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CitationCitedArtifactPublicationFormPeriodicReleaseComponent` JSON to instantiate the CitationCitedArtifactPublicationFormPeriodicReleaseComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactPublicationFormPeriodicReleaseComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactPublicationFormPeriodicReleaseComponent
   * @returns CitationCitedArtifactPublicationFormPeriodicReleaseComponent data model or undefined for `CitationCitedArtifactPublicationFormPeriodicReleaseComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactPublicationFormPeriodicReleaseComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactPublicationFormPeriodicReleaseComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactPublicationFormPeriodicReleaseComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'citedMedium';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCitedMedium(datatype);
    }

    fieldName = 'volume';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVolumeElement(datatype);
    }

    fieldName = 'issue';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setIssueElement(datatype);
    }

    fieldName = 'dateOfPublication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent | undefined = CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDateOfPublication(component);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.publicationForm.periodicRelease.citedMedium Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Internet or Print
   * - **Definition:** Describes the form of the medium cited. Common codes are "Internet" or "Print".
   * - **Comment:** National Library of Medicine uses the codes "Internet" or "Print".
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private citedMedium?: CodeableConcept | undefined;

  /**
   * Citation.citedArtifact.publicationForm.periodicRelease.volume Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Volume number of journal in which the article is published
   * - **Definition:** Volume number of journal in which the article is published.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private volume?: StringType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.periodicRelease.issue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Issue, part or supplement of journal in which the article is published
   * - **Definition:** Issue, part or supplement of journal in which the article is published.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private issue?: StringType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Defining the date on which the issue of the journal was published
   * - **Definition:** Defining the date on which the issue of the journal was published.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dateOfPublication?: CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `citedMedium` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCitedMedium(): CodeableConcept {
    return this.citedMedium ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CitedMedium object value to the `citedMedium` property.
   *
   * @param value - the `citedMedium` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCitedMedium(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.citedMedium; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.citedMedium = value;
    } else {
      this.citedMedium = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `citedMedium` property exists and has a value; `false` otherwise
   */
  public hasCitedMedium(): boolean {
    return isDefined<CodeableConcept>(this.citedMedium) && !this.citedMedium.isEmpty();
  }

  /**
   * @returns the `volume` property value as a StringType object if defined; else an empty StringType object
   */
  public getVolumeElement(): StringType {
    return this.volume ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `volume` property.
   *
   * @param element - the `volume` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVolumeElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.volume; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.volume = element;
    } else {
      this.volume = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `volume` property exists and has a value; `false` otherwise
   */
  public hasVolumeElement(): boolean {
    return isDefined<StringType>(this.volume) && !this.volume.isEmpty();
  }

  /**
   * @returns the `volume` property value as a fhirString if defined; else undefined
   */
  public getVolume(): fhirString | undefined {
    return this.volume?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `volume` property.
   *
   * @param value - the `volume` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVolume(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.volume (${String(value)})`;
      this.volume = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.volume = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `volume` property exists and has a value; `false` otherwise
   */
  public hasVolume(): boolean {
    return this.hasVolumeElement();
  }

  /**
   * @returns the `issue` property value as a StringType object if defined; else an empty StringType object
   */
  public getIssueElement(): StringType {
    return this.issue ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `issue` property.
   *
   * @param element - the `issue` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssueElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.issue; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.issue = element;
    } else {
      this.issue = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issue` property exists and has a value; `false` otherwise
   */
  public hasIssueElement(): boolean {
    return isDefined<StringType>(this.issue) && !this.issue.isEmpty();
  }

  /**
   * @returns the `issue` property value as a fhirString if defined; else undefined
   */
  public getIssue(): fhirString | undefined {
    return this.issue?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `issue` property.
   *
   * @param value - the `issue` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssue(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.issue (${String(value)})`;
      this.issue = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.issue = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issue` property exists and has a value; `false` otherwise
   */
  public hasIssue(): boolean {
    return this.hasIssueElement();
  }

  /**
   * @returns the `dateOfPublication` property value as a CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent object if defined; else an empty CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent object
   */
  public getDateOfPublication(): CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent {
    return this.dateOfPublication ?? new CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent();
  }

  /**
   * Assigns the provided DateOfPublication object value to the `dateOfPublication` property.
   *
   * @param value - the `dateOfPublication` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDateOfPublication(value: CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent | undefined): this {
    if (isDefined<CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication; Provided element is not an instance of CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent.`;
      assertFhirType<CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent>(value, CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent, optErrMsg);
      this.dateOfPublication = value;
    } else {
      this.dateOfPublication = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `dateOfPublication` property exists and has a value; `false` otherwise
   */
  public hasDateOfPublication(): boolean {
    return isDefined<CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent>(this.dateOfPublication) && !this.dateOfPublication.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.publicationForm.periodicRelease';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.citedMedium,
      this.volume,
      this.issue,
      this.dateOfPublication,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactPublicationFormPeriodicReleaseComponent {
    const dest = new CitationCitedArtifactPublicationFormPeriodicReleaseComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactPublicationFormPeriodicReleaseComponent): void {
    super.copyValues(dest);
    dest.citedMedium = this.citedMedium?.copy();
    dest.volume = this.volume?.copy();
    dest.issue = this.issue?.copy();
    dest.dateOfPublication = this.dateOfPublication?.copy();
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

    if (this.hasCitedMedium()) {
      setFhirComplexJson(this.getCitedMedium(), 'citedMedium', jsonObj);
    }

    if (this.hasVolumeElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVolumeElement(), 'volume', jsonObj);
    }

    if (this.hasIssueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getIssueElement(), 'issue', jsonObj);
    }

    if (this.hasDateOfPublication()) {
      setFhirBackboneElementJson(this.getDateOfPublication(), 'dateOfPublication', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Defining the date on which the issue of the journal was published
 * - **Definition:** Defining the date on which the issue of the journal was published.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent` JSON to instantiate the CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent
   * @returns CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent data model or undefined for `CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'year';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setYearElement(datatype);
    }

    fieldName = 'month';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMonthElement(datatype);
    }

    fieldName = 'day';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDayElement(datatype);
    }

    fieldName = 'season';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSeasonElement(datatype);
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextElement(datatype);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date on which the issue of the journal was published
   * - **Definition:** Date on which the issue of the journal was published.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private date?: DateType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.year Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Year on which the issue of the journal was published
   * - **Definition:** Year on which the issue of the journal was published.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private year?: StringType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.month Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Month on which the issue of the journal was published
   * - **Definition:** Month on which the issue of the journal was published.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private month?: StringType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.day Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Day on which the issue of the journal was published
   * - **Definition:** Day on which the issue of the journal was published.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private day?: StringType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.season Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Season on which the issue of the journal was published
   * - **Definition:** Spring, Summer, Fall/Autumn, Winter.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private season?: StringType | undefined;

  /**
   * Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text representation of the date of which the issue of the journal was published
   * - **Definition:** Text representation of the date of which the issue of the journal was published.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `date` property value as a DateType object if defined; else an empty DateType object
   */
  public getDateElement(): DateType {
    return this.date ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.date; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
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
    return isDefined<DateType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDate if defined; else undefined
   */
  public getDate(): fhirDate | undefined {
    return this.date?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.date (${String(value)})`;
      this.date = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
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
   * @returns the `year` property value as a StringType object if defined; else an empty StringType object
   */
  public getYearElement(): StringType {
    return this.year ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `year` property.
   *
   * @param element - the `year` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setYearElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.year; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.year = element;
    } else {
      this.year = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `year` property exists and has a value; `false` otherwise
   */
  public hasYearElement(): boolean {
    return isDefined<StringType>(this.year) && !this.year.isEmpty();
  }

  /**
   * @returns the `year` property value as a fhirString if defined; else undefined
   */
  public getYear(): fhirString | undefined {
    return this.year?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `year` property.
   *
   * @param value - the `year` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setYear(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.year (${String(value)})`;
      this.year = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.year = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `year` property exists and has a value; `false` otherwise
   */
  public hasYear(): boolean {
    return this.hasYearElement();
  }

  /**
   * @returns the `month` property value as a StringType object if defined; else an empty StringType object
   */
  public getMonthElement(): StringType {
    return this.month ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `month` property.
   *
   * @param element - the `month` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMonthElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.month; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.month = element;
    } else {
      this.month = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `month` property exists and has a value; `false` otherwise
   */
  public hasMonthElement(): boolean {
    return isDefined<StringType>(this.month) && !this.month.isEmpty();
  }

  /**
   * @returns the `month` property value as a fhirString if defined; else undefined
   */
  public getMonth(): fhirString | undefined {
    return this.month?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `month` property.
   *
   * @param value - the `month` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMonth(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.month (${String(value)})`;
      this.month = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.month = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `month` property exists and has a value; `false` otherwise
   */
  public hasMonth(): boolean {
    return this.hasMonthElement();
  }

  /**
   * @returns the `day` property value as a StringType object if defined; else an empty StringType object
   */
  public getDayElement(): StringType {
    return this.day ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `day` property.
   *
   * @param element - the `day` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDayElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.day; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.day = element;
    } else {
      this.day = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `day` property exists and has a value; `false` otherwise
   */
  public hasDayElement(): boolean {
    return isDefined<StringType>(this.day) && !this.day.isEmpty();
  }

  /**
   * @returns the `day` property value as a fhirString if defined; else undefined
   */
  public getDay(): fhirString | undefined {
    return this.day?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `day` property.
   *
   * @param value - the `day` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDay(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.day (${String(value)})`;
      this.day = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.day = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `day` property exists and has a value; `false` otherwise
   */
  public hasDay(): boolean {
    return this.hasDayElement();
  }

  /**
   * @returns the `season` property value as a StringType object if defined; else an empty StringType object
   */
  public getSeasonElement(): StringType {
    return this.season ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `season` property.
   *
   * @param element - the `season` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeasonElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.season; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.season = element;
    } else {
      this.season = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `season` property exists and has a value; `false` otherwise
   */
  public hasSeasonElement(): boolean {
    return isDefined<StringType>(this.season) && !this.season.isEmpty();
  }

  /**
   * @returns the `season` property value as a fhirString if defined; else undefined
   */
  public getSeason(): fhirString | undefined {
    return this.season?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `season` property.
   *
   * @param value - the `season` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeason(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.season (${String(value)})`;
      this.season = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.season = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `season` property exists and has a value; `false` otherwise
   */
  public hasSeason(): boolean {
    return this.hasSeasonElement();
  }

  /**
   * @returns the `text` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextElement(): StringType {
    return this.text ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.text; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.text = element;
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<StringType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirString if defined; else undefined
   */
  public getText(): fhirString | undefined {
    return this.text?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.text (${String(value)})`;
      this.text = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.date,
      this.year,
      this.month,
      this.day,
      this.season,
      this.text,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent {
    const dest = new CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationComponent): void {
    super.copyValues(dest);
    dest.date = this.date?.copy();
    dest.year = this.year?.copy();
    dest.month = this.month?.copy();
    dest.day = this.day?.copy();
    dest.season = this.season?.copy();
    dest.text = this.text?.copy();
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

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasYearElement()) {
      setFhirPrimitiveJson<fhirString>(this.getYearElement(), 'year', jsonObj);
    }

    if (this.hasMonthElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMonthElement(), 'month', jsonObj);
    }

    if (this.hasDayElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDayElement(), 'day', jsonObj);
    }

    if (this.hasSeasonElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSeasonElement(), 'season', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextElement(), 'text', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactWebLocationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Used for any URL for the article or artifact cited
 * - **Definition:** Used for any URL for the article or artifact cited.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactWebLocationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CitationCitedArtifactWebLocationComponent` JSON to instantiate the CitationCitedArtifactWebLocationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactWebLocationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactWebLocationComponent
   * @returns CitationCitedArtifactWebLocationComponent data model or undefined for `CitationCitedArtifactWebLocationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactWebLocationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactWebLocationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactWebLocationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setUrlElement(datatype);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.webLocation.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code the reason for different URLs, e.g. abstract and full-text
   * - **Definition:** Code the reason for different URLs, e.g. abstract and full-text.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Citation.citedArtifact.webLocation.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific URL
   * - **Definition:** The specific URL.
   * - **Comment:** Persistent URLs, like doi, are preferred.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private url?: UriType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Citation.citedArtifact.webLocation.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.webLocation.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.webLocation.url (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.webLocation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.url,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactWebLocationComponent {
    const dest = new CitationCitedArtifactWebLocationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactWebLocationComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.url = this.url?.copy();
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUrlElement(), 'url', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactClassificationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The assignment to an organizing scheme
 * - **Definition:** The assignment to an organizing scheme.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactClassificationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CitationCitedArtifactClassificationComponent` JSON to instantiate the CitationCitedArtifactClassificationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactClassificationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactClassificationComponent
   * @returns CitationCitedArtifactClassificationComponent data model or undefined for `CitationCitedArtifactClassificationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactClassificationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactClassificationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactClassificationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'classifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addClassifier(datatype);
        }
      });
    }

    fieldName = 'whoClassified';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: CitationCitedArtifactClassificationWhoClassifiedComponent | undefined = CitationCitedArtifactClassificationWhoClassifiedComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setWhoClassified(component);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.classification.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The kind of classifier (e.g. publication type, keyword)
   * - **Definition:** The kind of classifier (e.g. publication type, keyword).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Citation.citedArtifact.classification.classifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific classification value
   * - **Definition:** The specific classification value.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private classifier?: CodeableConcept[] | undefined;

  /**
   * Citation.citedArtifact.classification.whoClassified Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Provenance and copyright of classification
   * - **Definition:** Provenance and copyright of classification.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private whoClassified?: CitationCitedArtifactClassificationWhoClassifiedComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Citation.citedArtifact.classification.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `classifier` property value as a CodeableConcept array
   */
  public getClassifier(): CodeableConcept[] {
    return this.classifier ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `classifier` property.
   *
   * @param value - the `classifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassifier(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.classification.classifier; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.classifier = value;
    } else {
      this.classifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `classifier` array property.
   *
   * @param value - the `classifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClassifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.classification.classifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initClassifier();
      this.classifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `classifier` property exists and has a value; `false` otherwise
   */
  public hasClassifier(): boolean {
    return isDefinedList<CodeableConcept>(this.classifier) && this.classifier.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `classifier` property
   */
  private initClassifier(): void {
    if(!this.hasClassifier()) {
      this.classifier = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `whoClassified` property value as a CitationCitedArtifactClassificationWhoClassifiedComponent object if defined; else an empty CitationCitedArtifactClassificationWhoClassifiedComponent object
   */
  public getWhoClassified(): CitationCitedArtifactClassificationWhoClassifiedComponent {
    return this.whoClassified ?? new CitationCitedArtifactClassificationWhoClassifiedComponent();
  }

  /**
   * Assigns the provided WhoClassified object value to the `whoClassified` property.
   *
   * @param value - the `whoClassified` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setWhoClassified(value: CitationCitedArtifactClassificationWhoClassifiedComponent | undefined): this {
    if (isDefined<CitationCitedArtifactClassificationWhoClassifiedComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.classification.whoClassified; Provided element is not an instance of CitationCitedArtifactClassificationWhoClassifiedComponent.`;
      assertFhirType<CitationCitedArtifactClassificationWhoClassifiedComponent>(value, CitationCitedArtifactClassificationWhoClassifiedComponent, optErrMsg);
      this.whoClassified = value;
    } else {
      this.whoClassified = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `whoClassified` property exists and has a value; `false` otherwise
   */
  public hasWhoClassified(): boolean {
    return isDefined<CitationCitedArtifactClassificationWhoClassifiedComponent>(this.whoClassified) && !this.whoClassified.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.classification';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.classifier,
      this.whoClassified,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactClassificationComponent {
    const dest = new CitationCitedArtifactClassificationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactClassificationComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    const classifierList = copyListValues<CodeableConcept>(this.classifier);
    dest.classifier = classifierList.length === 0 ? undefined : classifierList;
    dest.whoClassified = this.whoClassified?.copy();
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasClassifier()) {
      setFhirComplexListJson(this.getClassifier(), 'classifier', jsonObj);
    }

    if (this.hasWhoClassified()) {
      setFhirBackboneElementJson(this.getWhoClassified(), 'whoClassified', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactClassificationWhoClassifiedComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Provenance and copyright of classification
 * - **Definition:** Provenance and copyright of classification.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactClassificationWhoClassifiedComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CitationCitedArtifactClassificationWhoClassifiedComponent` JSON to instantiate the CitationCitedArtifactClassificationWhoClassifiedComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactClassificationWhoClassifiedComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactClassificationWhoClassifiedComponent
   * @returns CitationCitedArtifactClassificationWhoClassifiedComponent data model or undefined for `CitationCitedArtifactClassificationWhoClassifiedComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactClassificationWhoClassifiedComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactClassificationWhoClassifiedComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactClassificationWhoClassifiedComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'person';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPerson(datatype);
    }

    fieldName = 'organization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrganization(datatype);
    }

    fieldName = 'publisher';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPublisher(datatype);
    }

    fieldName = 'classifierCopyright';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setClassifierCopyrightElement(datatype);
    }

    fieldName = 'freeToShare';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setFreeToShareElement(datatype);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.classification.whoClassified.person Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Person who created the classification
   * - **Definition:** Person who created the classification.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Person',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private person?: Reference | undefined;

  /**
   * Citation.citedArtifact.classification.whoClassified.organization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization who created the classification
   * - **Definition:** Organization who created the classification.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private organization?: Reference | undefined;

  /**
   * Citation.citedArtifact.classification.whoClassified.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The publisher of the classification, not the publisher of the article or artifact being cited
   * - **Definition:** The publisher of the classification, not the publisher of the article or artifact being cited.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private publisher?: Reference | undefined;

  /**
   * Citation.citedArtifact.classification.whoClassified.classifierCopyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Rights management statement for the classification
   * - **Definition:** Rights management statement for the classification.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private classifierCopyright?: StringType | undefined;

  /**
   * Citation.citedArtifact.classification.whoClassified.freeToShare Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Acceptable to re-use the classification
   * - **Definition:** Acceptable to re-use the classification.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private freeToShare?: BooleanType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `person` property value as a Reference object; else an empty Reference object
   */
  public getPerson(): Reference {
    return this.person ?? new Reference();
  }

  /**
   * Assigns the provided Person object value to the `person` property.
   *
   * @decorator `@ReferenceTargets('Citation.citedArtifact.classification.whoClassified.person', ['Person','Practitioner',])`
   *
   * @param value - the `person` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Citation.citedArtifact.classification.whoClassified.person', [
    'Person',
  
    'Practitioner',
  ])
  public setPerson(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.person = value;
    } else {
      this.person = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `person` property exists and has a value; `false` otherwise
   */
  public hasPerson(): boolean {
    return isDefined<Reference>(this.person) && !this.person.isEmpty();
  }

  /**
   * @returns the `organization` property value as a Reference object; else an empty Reference object
   */
  public getOrganization(): Reference {
    return this.organization ?? new Reference();
  }

  /**
   * Assigns the provided Organization object value to the `organization` property.
   *
   * @decorator `@ReferenceTargets('Citation.citedArtifact.classification.whoClassified.organization', ['Organization',])`
   *
   * @param value - the `organization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Citation.citedArtifact.classification.whoClassified.organization', [
    'Organization',
  ])
  public setOrganization(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.organization = value;
    } else {
      this.organization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `organization` property exists and has a value; `false` otherwise
   */
  public hasOrganization(): boolean {
    return isDefined<Reference>(this.organization) && !this.organization.isEmpty();
  }

  /**
   * @returns the `publisher` property value as a Reference object; else an empty Reference object
   */
  public getPublisher(): Reference {
    return this.publisher ?? new Reference();
  }

  /**
   * Assigns the provided Publisher object value to the `publisher` property.
   *
   * @decorator `@ReferenceTargets('Citation.citedArtifact.classification.whoClassified.publisher', ['Organization',])`
   *
   * @param value - the `publisher` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Citation.citedArtifact.classification.whoClassified.publisher', [
    'Organization',
  ])
  public setPublisher(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.publisher = value;
    } else {
      this.publisher = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publisher` property exists and has a value; `false` otherwise
   */
  public hasPublisher(): boolean {
    return isDefined<Reference>(this.publisher) && !this.publisher.isEmpty();
  }

  /**
   * @returns the `classifierCopyright` property value as a StringType object if defined; else an empty StringType object
   */
  public getClassifierCopyrightElement(): StringType {
    return this.classifierCopyright ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `classifierCopyright` property.
   *
   * @param element - the `classifierCopyright` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setClassifierCopyrightElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.classification.whoClassified.classifierCopyright; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.classifierCopyright = element;
    } else {
      this.classifierCopyright = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `classifierCopyright` property exists and has a value; `false` otherwise
   */
  public hasClassifierCopyrightElement(): boolean {
    return isDefined<StringType>(this.classifierCopyright) && !this.classifierCopyright.isEmpty();
  }

  /**
   * @returns the `classifierCopyright` property value as a fhirString if defined; else undefined
   */
  public getClassifierCopyright(): fhirString | undefined {
    return this.classifierCopyright?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `classifierCopyright` property.
   *
   * @param value - the `classifierCopyright` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setClassifierCopyright(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.classification.whoClassified.classifierCopyright (${String(value)})`;
      this.classifierCopyright = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.classifierCopyright = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `classifierCopyright` property exists and has a value; `false` otherwise
   */
  public hasClassifierCopyright(): boolean {
    return this.hasClassifierCopyrightElement();
  }

  /**
   * @returns the `freeToShare` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getFreeToShareElement(): BooleanType {
    return this.freeToShare ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `freeToShare` property.
   *
   * @param element - the `freeToShare` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFreeToShareElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.classification.whoClassified.freeToShare; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.freeToShare = element;
    } else {
      this.freeToShare = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `freeToShare` property exists and has a value; `false` otherwise
   */
  public hasFreeToShareElement(): boolean {
    return isDefined<BooleanType>(this.freeToShare) && !this.freeToShare.isEmpty();
  }

  /**
   * @returns the `freeToShare` property value as a fhirBoolean if defined; else undefined
   */
  public getFreeToShare(): fhirBoolean | undefined {
    return this.freeToShare?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `freeToShare` property.
   *
   * @param value - the `freeToShare` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFreeToShare(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.classification.whoClassified.freeToShare (${String(value)})`;
      this.freeToShare = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.freeToShare = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `freeToShare` property exists and has a value; `false` otherwise
   */
  public hasFreeToShare(): boolean {
    return this.hasFreeToShareElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.classification.whoClassified';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.person,
      this.organization,
      this.publisher,
      this.classifierCopyright,
      this.freeToShare,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactClassificationWhoClassifiedComponent {
    const dest = new CitationCitedArtifactClassificationWhoClassifiedComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactClassificationWhoClassifiedComponent): void {
    super.copyValues(dest);
    dest.person = this.person?.copy();
    dest.organization = this.organization?.copy();
    dest.publisher = this.publisher?.copy();
    dest.classifierCopyright = this.classifierCopyright?.copy();
    dest.freeToShare = this.freeToShare?.copy();
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

    if (this.hasPerson()) {
      setFhirComplexJson(this.getPerson(), 'person', jsonObj);
    }

    if (this.hasOrganization()) {
      setFhirComplexJson(this.getOrganization(), 'organization', jsonObj);
    }

    if (this.hasPublisher()) {
      setFhirComplexJson(this.getPublisher(), 'publisher', jsonObj);
    }

    if (this.hasClassifierCopyrightElement()) {
      setFhirPrimitiveJson<fhirString>(this.getClassifierCopyrightElement(), 'classifierCopyright', jsonObj);
    }

    if (this.hasFreeToShareElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getFreeToShareElement(), 'freeToShare', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactContributorshipComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Attribution of authors and other contributors
 * - **Definition:** This element is used to list authors and other contributors, their contact information, specific contributions, and summary statements.
 * - **Requirements:** Need to support individualized and collective attribution of authorship and contributorship to people and groups.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactContributorshipComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CitationCitedArtifactContributorshipComponent` JSON to instantiate the CitationCitedArtifactContributorshipComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactContributorshipComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactContributorshipComponent
   * @returns CitationCitedArtifactContributorshipComponent data model or undefined for `CitationCitedArtifactContributorshipComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactContributorshipComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactContributorshipComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactContributorshipComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'complete';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setCompleteElement(datatype);
    }

    fieldName = 'entry';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationCitedArtifactContributorshipEntryComponent | undefined = CitationCitedArtifactContributorshipEntryComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addEntry(component);
        }
      });
    }

    fieldName = 'summary';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationCitedArtifactContributorshipSummaryComponent | undefined = CitationCitedArtifactContributorshipSummaryComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSummary(component);
        }
      });
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.contributorship.complete Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates if the list includes all authors and/or contributors
   * - **Definition:** Indicates if the list includes all authors and/or contributors.
   * - **Comment:** If list is incomplete "et al" can be appended to Contributorship.summary.value for display purposes.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private complete?: BooleanType | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An individual entity named in the list
   * - **Definition:** An individual entity named in the author list or contributor list.
   * - **Comment:** Used to report contributorship in individualized ways.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private entry?: CitationCitedArtifactContributorshipEntryComponent[] | undefined;

  /**
   * Citation.citedArtifact.contributorship.summary Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used to record a display of the author/contributor list without separate coding for each list member
   * - **Definition:** Used to record a display of the author/contributor list without separate coding for each list member.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private summary?: CitationCitedArtifactContributorshipSummaryComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `complete` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getCompleteElement(): BooleanType {
    return this.complete ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `complete` property.
   *
   * @param element - the `complete` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCompleteElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.complete; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.complete = element;
    } else {
      this.complete = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `complete` property exists and has a value; `false` otherwise
   */
  public hasCompleteElement(): boolean {
    return isDefined<BooleanType>(this.complete) && !this.complete.isEmpty();
  }

  /**
   * @returns the `complete` property value as a fhirBoolean if defined; else undefined
   */
  public getComplete(): fhirBoolean | undefined {
    return this.complete?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `complete` property.
   *
   * @param value - the `complete` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComplete(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.complete (${String(value)})`;
      this.complete = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.complete = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `complete` property exists and has a value; `false` otherwise
   */
  public hasComplete(): boolean {
    return this.hasCompleteElement();
  }

  /**
   * @returns the `entry` property value as a CitationCitedArtifactContributorshipEntryComponent array
   */
  public getEntry(): CitationCitedArtifactContributorshipEntryComponent[] {
    return this.entry ?? ([] as CitationCitedArtifactContributorshipEntryComponent[]);
  }

  /**
   * Assigns the provided CitationCitedArtifactContributorshipEntryComponent array value to the `entry` property.
   *
   * @param value - the `entry` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEntry(value: CitationCitedArtifactContributorshipEntryComponent[] | undefined): this {
    if (isDefinedList<CitationCitedArtifactContributorshipEntryComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry; Provided value array has an element that is not an instance of CitationCitedArtifactContributorshipEntryComponent.`;
      assertFhirTypeList<CitationCitedArtifactContributorshipEntryComponent>(value, CitationCitedArtifactContributorshipEntryComponent, optErrMsg);
      this.entry = value;
    } else {
      this.entry = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationCitedArtifactContributorshipEntryComponent value to the `entry` array property.
   *
   * @param value - the `entry` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEntry(value: CitationCitedArtifactContributorshipEntryComponent | undefined): this {
    if (isDefined<CitationCitedArtifactContributorshipEntryComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry; Provided element is not an instance of CitationCitedArtifactContributorshipEntryComponent.`;
      assertFhirType<CitationCitedArtifactContributorshipEntryComponent>(value, CitationCitedArtifactContributorshipEntryComponent, optErrMsg);
      this.initEntry();
      this.entry?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `entry` property exists and has a value; `false` otherwise
   */
  public hasEntry(): boolean {
    return isDefinedList<CitationCitedArtifactContributorshipEntryComponent>(this.entry) && this.entry.some((item: CitationCitedArtifactContributorshipEntryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `entry` property
   */
  private initEntry(): void {
    if(!this.hasEntry()) {
      this.entry = [] as CitationCitedArtifactContributorshipEntryComponent[];
    }
  }

  /**
   * @returns the `summary` property value as a CitationCitedArtifactContributorshipSummaryComponent array
   */
  public getSummary(): CitationCitedArtifactContributorshipSummaryComponent[] {
    return this.summary ?? ([] as CitationCitedArtifactContributorshipSummaryComponent[]);
  }

  /**
   * Assigns the provided CitationCitedArtifactContributorshipSummaryComponent array value to the `summary` property.
   *
   * @param value - the `summary` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSummary(value: CitationCitedArtifactContributorshipSummaryComponent[] | undefined): this {
    if (isDefinedList<CitationCitedArtifactContributorshipSummaryComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.summary; Provided value array has an element that is not an instance of CitationCitedArtifactContributorshipSummaryComponent.`;
      assertFhirTypeList<CitationCitedArtifactContributorshipSummaryComponent>(value, CitationCitedArtifactContributorshipSummaryComponent, optErrMsg);
      this.summary = value;
    } else {
      this.summary = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationCitedArtifactContributorshipSummaryComponent value to the `summary` array property.
   *
   * @param value - the `summary` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSummary(value: CitationCitedArtifactContributorshipSummaryComponent | undefined): this {
    if (isDefined<CitationCitedArtifactContributorshipSummaryComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.summary; Provided element is not an instance of CitationCitedArtifactContributorshipSummaryComponent.`;
      assertFhirType<CitationCitedArtifactContributorshipSummaryComponent>(value, CitationCitedArtifactContributorshipSummaryComponent, optErrMsg);
      this.initSummary();
      this.summary?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `summary` property exists and has a value; `false` otherwise
   */
  public hasSummary(): boolean {
    return isDefinedList<CitationCitedArtifactContributorshipSummaryComponent>(this.summary) && this.summary.some((item: CitationCitedArtifactContributorshipSummaryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `summary` property
   */
  private initSummary(): void {
    if(!this.hasSummary()) {
      this.summary = [] as CitationCitedArtifactContributorshipSummaryComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.contributorship';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.complete,
      this.entry,
      this.summary,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactContributorshipComponent {
    const dest = new CitationCitedArtifactContributorshipComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactContributorshipComponent): void {
    super.copyValues(dest);
    dest.complete = this.complete?.copy();
    const entryList = copyListValues<CitationCitedArtifactContributorshipEntryComponent>(this.entry);
    dest.entry = entryList.length === 0 ? undefined : entryList;
    const summaryList = copyListValues<CitationCitedArtifactContributorshipSummaryComponent>(this.summary);
    dest.summary = summaryList.length === 0 ? undefined : summaryList;
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

    if (this.hasCompleteElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getCompleteElement(), 'complete', jsonObj);
    }

    if (this.hasEntry()) {
      setFhirBackboneElementListJson(this.getEntry(), 'entry', jsonObj);
    }

    if (this.hasSummary()) {
      setFhirBackboneElementListJson(this.getSummary(), 'summary', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactContributorshipEntryComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An individual entity named in the list
 * - **Definition:** An individual entity named in the author list or contributor list.
 * - **Comment:** Used to report contributorship in individualized ways.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactContributorshipEntryComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CitationCitedArtifactContributorshipEntryComponent` JSON to instantiate the CitationCitedArtifactContributorshipEntryComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactContributorshipEntryComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactContributorshipEntryComponent
   * @returns CitationCitedArtifactContributorshipEntryComponent data model or undefined for `CitationCitedArtifactContributorshipEntryComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactContributorshipEntryComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactContributorshipEntryComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactContributorshipEntryComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: HumanName | undefined = HumanName.parse(classJsonObj[fieldName]!, sourceField);
      instance.setName(datatype);
    }

    fieldName = 'initials';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setInitialsElement(datatype);
    }

    fieldName = 'collectiveName';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCollectiveNameElement(datatype);
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

    fieldName = 'affiliationInfo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationCitedArtifactContributorshipEntryAffiliationInfoComponent | undefined = CitationCitedArtifactContributorshipEntryAffiliationInfoComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAffiliationInfo(component);
        }
      });
    }

    fieldName = 'address';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Address | undefined = Address.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAddress(datatype);
        }
      });
    }

    fieldName = 'telecom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactPoint | undefined = ContactPoint.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTelecom(datatype);
        }
      });
    }

    fieldName = 'contributionType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addContributionType(datatype);
        }
      });
    }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    fieldName = 'contributionInstance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CitationCitedArtifactContributorshipEntryContributionInstanceComponent | undefined = CitationCitedArtifactContributorshipEntryContributionInstanceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addContributionInstance(component);
        }
      });
    }

    fieldName = 'correspondingContact';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setCorrespondingContactElement(datatype);
    }

    fieldName = 'listOrder';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setListOrderElement(datatype);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.contributorship.entry.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A name associated with the person
   * - **Definition:** A name associated with the individual.
   * - **Comment:** humanName.family can match MEDLINE-based lastName (used for surname or single name), humanName.given can match MEDLINE-based forename (used for remainder of name except for suffix), humanName.suffix can match MEDLINE-based suffix (eg 2nd, 3rd, Jr, Sr).
   * - **FHIR Type:** `HumanName`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: HumanName | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry.initials Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Initials for forename
   * - **Definition:** Initials for forename.
   * - **Comment:** This element is used in Medline based citations, but not supported fully by FHIR HumanName datatype.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private initials?: StringType | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry.collectiveName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for collective or corporate name as an author
   * - **Definition:** Used for collective or corporate name as an author.
   * - **Comment:** This element is used in Medline based citations, but not supported fully by FHIR HumanName datatype.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private collectiveName?: StringType | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Author identifier, eg ORCID
   * - **Definition:** Unique person identifier.
   * - **Comment:** Avoids needing to disambiguate common last names or changes of name. ORCID is commonly used as author identifier.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry.affiliationInfo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organizational affiliation
   * - **Definition:** Organization affiliated with the entity.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private affiliationInfo?: CitationCitedArtifactContributorshipEntryAffiliationInfoComponent[] | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry.address Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Physical mailing address
   * - **Definition:** Physical mailing address for the author or contributor.
   * - **FHIR Type:** `Address`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private address?: Address[] | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry.telecom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Email or telephone contact methods for the author or contributor
   * - **Definition:** Email or telephone contact methods for the author or contributor.
   * - **FHIR Type:** `ContactPoint`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private telecom?: ContactPoint[] | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry.contributionType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific contribution
   * - **Definition:** This element identifies the specific nature of an individual\'s contribution with respect to the cited work.
   * - **Comment:** The CreDiT taxonomy provides a way to encode contribution information inside article XML files. The purpose of CRediT is to provide transparency in contributions to scholarly published work, to enable improved systems of attribution, credit, and accountability.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contributionType?: CodeableConcept[] | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The role of the contributor (e.g. author, editor, reviewer)
   * - **Definition:** The role of the contributor (e.g. author, editor, reviewer).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: CodeableConcept | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry.contributionInstance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contributions with accounting for time or number
   * - **Definition:** Contributions with accounting for time or number.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contributionInstance?: CitationCitedArtifactContributorshipEntryContributionInstanceComponent[] | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry.correspondingContact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indication of which contributor is the corresponding contributor for the role
   * - **Definition:** Indication of which contributor is the corresponding contributor for the role.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private correspondingContact?: BooleanType | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry.listOrder Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used to code order of authors
   * - **Definition:** Used to code order of authors.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private listOrder?: PositiveIntType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `name` property value as a HumanName object if defined; else an empty HumanName object
   */
  public getName(): HumanName {
    return this.name ?? new HumanName();
  }

  /**
   * Assigns the provided Name object value to the `name` property.
   *
   * @param value - the `name` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setName(value: HumanName | undefined): this {
    if (isDefined<HumanName>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.name; Provided element is not an instance of HumanName.`;
      assertFhirType<HumanName>(value, HumanName, optErrMsg);
      this.name = value;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return isDefined<HumanName>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `initials` property value as a StringType object if defined; else an empty StringType object
   */
  public getInitialsElement(): StringType {
    return this.initials ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `initials` property.
   *
   * @param element - the `initials` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInitialsElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.initials; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initials = element;
    } else {
      this.initials = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `initials` property exists and has a value; `false` otherwise
   */
  public hasInitialsElement(): boolean {
    return isDefined<StringType>(this.initials) && !this.initials.isEmpty();
  }

  /**
   * @returns the `initials` property value as a fhirString if defined; else undefined
   */
  public getInitials(): fhirString | undefined {
    return this.initials?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `initials` property.
   *
   * @param value - the `initials` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInitials(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.initials (${String(value)})`;
      this.initials = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.initials = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `initials` property exists and has a value; `false` otherwise
   */
  public hasInitials(): boolean {
    return this.hasInitialsElement();
  }

  /**
   * @returns the `collectiveName` property value as a StringType object if defined; else an empty StringType object
   */
  public getCollectiveNameElement(): StringType {
    return this.collectiveName ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `collectiveName` property.
   *
   * @param element - the `collectiveName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCollectiveNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.collectiveName; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.collectiveName = element;
    } else {
      this.collectiveName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `collectiveName` property exists and has a value; `false` otherwise
   */
  public hasCollectiveNameElement(): boolean {
    return isDefined<StringType>(this.collectiveName) && !this.collectiveName.isEmpty();
  }

  /**
   * @returns the `collectiveName` property value as a fhirString if defined; else undefined
   */
  public getCollectiveName(): fhirString | undefined {
    return this.collectiveName?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `collectiveName` property.
   *
   * @param value - the `collectiveName` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCollectiveName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.collectiveName (${String(value)})`;
      this.collectiveName = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.collectiveName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `collectiveName` property exists and has a value; `false` otherwise
   */
  public hasCollectiveName(): boolean {
    return this.hasCollectiveNameElement();
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
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `affiliationInfo` property value as a CitationCitedArtifactContributorshipEntryAffiliationInfoComponent array
   */
  public getAffiliationInfo(): CitationCitedArtifactContributorshipEntryAffiliationInfoComponent[] {
    return this.affiliationInfo ?? ([] as CitationCitedArtifactContributorshipEntryAffiliationInfoComponent[]);
  }

  /**
   * Assigns the provided CitationCitedArtifactContributorshipEntryAffiliationInfoComponent array value to the `affiliationInfo` property.
   *
   * @param value - the `affiliationInfo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAffiliationInfo(value: CitationCitedArtifactContributorshipEntryAffiliationInfoComponent[] | undefined): this {
    if (isDefinedList<CitationCitedArtifactContributorshipEntryAffiliationInfoComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.affiliationInfo; Provided value array has an element that is not an instance of CitationCitedArtifactContributorshipEntryAffiliationInfoComponent.`;
      assertFhirTypeList<CitationCitedArtifactContributorshipEntryAffiliationInfoComponent>(value, CitationCitedArtifactContributorshipEntryAffiliationInfoComponent, optErrMsg);
      this.affiliationInfo = value;
    } else {
      this.affiliationInfo = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationCitedArtifactContributorshipEntryAffiliationInfoComponent value to the `affiliationInfo` array property.
   *
   * @param value - the `affiliationInfo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAffiliationInfo(value: CitationCitedArtifactContributorshipEntryAffiliationInfoComponent | undefined): this {
    if (isDefined<CitationCitedArtifactContributorshipEntryAffiliationInfoComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.affiliationInfo; Provided element is not an instance of CitationCitedArtifactContributorshipEntryAffiliationInfoComponent.`;
      assertFhirType<CitationCitedArtifactContributorshipEntryAffiliationInfoComponent>(value, CitationCitedArtifactContributorshipEntryAffiliationInfoComponent, optErrMsg);
      this.initAffiliationInfo();
      this.affiliationInfo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `affiliationInfo` property exists and has a value; `false` otherwise
   */
  public hasAffiliationInfo(): boolean {
    return isDefinedList<CitationCitedArtifactContributorshipEntryAffiliationInfoComponent>(this.affiliationInfo) && this.affiliationInfo.some((item: CitationCitedArtifactContributorshipEntryAffiliationInfoComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `affiliationInfo` property
   */
  private initAffiliationInfo(): void {
    if(!this.hasAffiliationInfo()) {
      this.affiliationInfo = [] as CitationCitedArtifactContributorshipEntryAffiliationInfoComponent[];
    }
  }

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
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.address; Provided value array has an element that is not an instance of Address.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.address; Provided element is not an instance of Address.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.telecom; Provided value array has an element that is not an instance of ContactPoint.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.telecom; Provided element is not an instance of ContactPoint.`;
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
   * @returns the `contributionType` property value as a CodeableConcept array
   */
  public getContributionType(): CodeableConcept[] {
    return this.contributionType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `contributionType` property.
   *
   * @param value - the `contributionType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContributionType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.contributionType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.contributionType = value;
    } else {
      this.contributionType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `contributionType` array property.
   *
   * @param value - the `contributionType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContributionType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.contributionType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initContributionType();
      this.contributionType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contributionType` property exists and has a value; `false` otherwise
   */
  public hasContributionType(): boolean {
    return isDefinedList<CodeableConcept>(this.contributionType) && this.contributionType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `contributionType` property
   */
  private initContributionType(): void {
    if(!this.hasContributionType()) {
      this.contributionType = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `role` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRole(): CodeableConcept {
    return this.role ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Role object value to the `role` property.
   *
   * @param value - the `role` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRole(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.role; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.role = value;
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return isDefined<CodeableConcept>(this.role) && !this.role.isEmpty();
  }

  /**
   * @returns the `contributionInstance` property value as a CitationCitedArtifactContributorshipEntryContributionInstanceComponent array
   */
  public getContributionInstance(): CitationCitedArtifactContributorshipEntryContributionInstanceComponent[] {
    return this.contributionInstance ?? ([] as CitationCitedArtifactContributorshipEntryContributionInstanceComponent[]);
  }

  /**
   * Assigns the provided CitationCitedArtifactContributorshipEntryContributionInstanceComponent array value to the `contributionInstance` property.
   *
   * @param value - the `contributionInstance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContributionInstance(value: CitationCitedArtifactContributorshipEntryContributionInstanceComponent[] | undefined): this {
    if (isDefinedList<CitationCitedArtifactContributorshipEntryContributionInstanceComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.contributionInstance; Provided value array has an element that is not an instance of CitationCitedArtifactContributorshipEntryContributionInstanceComponent.`;
      assertFhirTypeList<CitationCitedArtifactContributorshipEntryContributionInstanceComponent>(value, CitationCitedArtifactContributorshipEntryContributionInstanceComponent, optErrMsg);
      this.contributionInstance = value;
    } else {
      this.contributionInstance = undefined;
    }
    return this;
  }

  /**
   * Add the provided CitationCitedArtifactContributorshipEntryContributionInstanceComponent value to the `contributionInstance` array property.
   *
   * @param value - the `contributionInstance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContributionInstance(value: CitationCitedArtifactContributorshipEntryContributionInstanceComponent | undefined): this {
    if (isDefined<CitationCitedArtifactContributorshipEntryContributionInstanceComponent>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.contributionInstance; Provided element is not an instance of CitationCitedArtifactContributorshipEntryContributionInstanceComponent.`;
      assertFhirType<CitationCitedArtifactContributorshipEntryContributionInstanceComponent>(value, CitationCitedArtifactContributorshipEntryContributionInstanceComponent, optErrMsg);
      this.initContributionInstance();
      this.contributionInstance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contributionInstance` property exists and has a value; `false` otherwise
   */
  public hasContributionInstance(): boolean {
    return isDefinedList<CitationCitedArtifactContributorshipEntryContributionInstanceComponent>(this.contributionInstance) && this.contributionInstance.some((item: CitationCitedArtifactContributorshipEntryContributionInstanceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `contributionInstance` property
   */
  private initContributionInstance(): void {
    if(!this.hasContributionInstance()) {
      this.contributionInstance = [] as CitationCitedArtifactContributorshipEntryContributionInstanceComponent[];
    }
  }

  /**
   * @returns the `correspondingContact` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getCorrespondingContactElement(): BooleanType {
    return this.correspondingContact ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `correspondingContact` property.
   *
   * @param element - the `correspondingContact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCorrespondingContactElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.correspondingContact; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.correspondingContact = element;
    } else {
      this.correspondingContact = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `correspondingContact` property exists and has a value; `false` otherwise
   */
  public hasCorrespondingContactElement(): boolean {
    return isDefined<BooleanType>(this.correspondingContact) && !this.correspondingContact.isEmpty();
  }

  /**
   * @returns the `correspondingContact` property value as a fhirBoolean if defined; else undefined
   */
  public getCorrespondingContact(): fhirBoolean | undefined {
    return this.correspondingContact?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `correspondingContact` property.
   *
   * @param value - the `correspondingContact` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCorrespondingContact(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.correspondingContact (${String(value)})`;
      this.correspondingContact = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.correspondingContact = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `correspondingContact` property exists and has a value; `false` otherwise
   */
  public hasCorrespondingContact(): boolean {
    return this.hasCorrespondingContactElement();
  }

  /**
   * @returns the `listOrder` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getListOrderElement(): PositiveIntType {
    return this.listOrder ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `listOrder` property.
   *
   * @param element - the `listOrder` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setListOrderElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.listOrder; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.listOrder = element;
    } else {
      this.listOrder = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `listOrder` property exists and has a value; `false` otherwise
   */
  public hasListOrderElement(): boolean {
    return isDefined<PositiveIntType>(this.listOrder) && !this.listOrder.isEmpty();
  }

  /**
   * @returns the `listOrder` property value as a fhirPositiveInt if defined; else undefined
   */
  public getListOrder(): fhirPositiveInt | undefined {
    return this.listOrder?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `listOrder` property.
   *
   * @param value - the `listOrder` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setListOrder(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.listOrder (${String(value)})`;
      this.listOrder = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.listOrder = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `listOrder` property exists and has a value; `false` otherwise
   */
  public hasListOrder(): boolean {
    return this.hasListOrderElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.contributorship.entry';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.initials,
      this.collectiveName,
      this.identifier,
      this.affiliationInfo,
      this.address,
      this.telecom,
      this.contributionType,
      this.role,
      this.contributionInstance,
      this.correspondingContact,
      this.listOrder,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactContributorshipEntryComponent {
    const dest = new CitationCitedArtifactContributorshipEntryComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactContributorshipEntryComponent): void {
    super.copyValues(dest);
    dest.name = this.name?.copy();
    dest.initials = this.initials?.copy();
    dest.collectiveName = this.collectiveName?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const affiliationInfoList = copyListValues<CitationCitedArtifactContributorshipEntryAffiliationInfoComponent>(this.affiliationInfo);
    dest.affiliationInfo = affiliationInfoList.length === 0 ? undefined : affiliationInfoList;
    const addressList = copyListValues<Address>(this.address);
    dest.address = addressList.length === 0 ? undefined : addressList;
    const telecomList = copyListValues<ContactPoint>(this.telecom);
    dest.telecom = telecomList.length === 0 ? undefined : telecomList;
    const contributionTypeList = copyListValues<CodeableConcept>(this.contributionType);
    dest.contributionType = contributionTypeList.length === 0 ? undefined : contributionTypeList;
    dest.role = this.role?.copy();
    const contributionInstanceList = copyListValues<CitationCitedArtifactContributorshipEntryContributionInstanceComponent>(this.contributionInstance);
    dest.contributionInstance = contributionInstanceList.length === 0 ? undefined : contributionInstanceList;
    dest.correspondingContact = this.correspondingContact?.copy();
    dest.listOrder = this.listOrder?.copy();
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

    if (this.hasName()) {
      setFhirComplexJson(this.getName(), 'name', jsonObj);
    }

    if (this.hasInitialsElement()) {
      setFhirPrimitiveJson<fhirString>(this.getInitialsElement(), 'initials', jsonObj);
    }

    if (this.hasCollectiveNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCollectiveNameElement(), 'collectiveName', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasAffiliationInfo()) {
      setFhirBackboneElementListJson(this.getAffiliationInfo(), 'affiliationInfo', jsonObj);
    }

    if (this.hasAddress()) {
      setFhirComplexListJson(this.getAddress(), 'address', jsonObj);
    }

    if (this.hasTelecom()) {
      setFhirComplexListJson(this.getTelecom(), 'telecom', jsonObj);
    }

    if (this.hasContributionType()) {
      setFhirComplexListJson(this.getContributionType(), 'contributionType', jsonObj);
    }

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    if (this.hasContributionInstance()) {
      setFhirBackboneElementListJson(this.getContributionInstance(), 'contributionInstance', jsonObj);
    }

    if (this.hasCorrespondingContactElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getCorrespondingContactElement(), 'correspondingContact', jsonObj);
    }

    if (this.hasListOrderElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getListOrderElement(), 'listOrder', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactContributorshipEntryAffiliationInfoComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Organizational affiliation
 * - **Definition:** Organization affiliated with the entity.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactContributorshipEntryAffiliationInfoComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CitationCitedArtifactContributorshipEntryAffiliationInfoComponent` JSON to instantiate the CitationCitedArtifactContributorshipEntryAffiliationInfoComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactContributorshipEntryAffiliationInfoComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactContributorshipEntryAffiliationInfoComponent
   * @returns CitationCitedArtifactContributorshipEntryAffiliationInfoComponent data model or undefined for `CitationCitedArtifactContributorshipEntryAffiliationInfoComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactContributorshipEntryAffiliationInfoComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactContributorshipEntryAffiliationInfoComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactContributorshipEntryAffiliationInfoComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'affiliation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setAffiliationElement(datatype);
    }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setRoleElement(datatype);
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

    return instance;
  }

  /**
   * Citation.citedArtifact.contributorship.entry.affiliationInfo.affiliation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Display for the organization
   * - **Definition:** Display for the organization.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private affiliation?: StringType | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry.affiliationInfo.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Role within the organization, such as professional title
   * - **Definition:** Role within the organization, such as professional title.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: StringType | undefined;

  /**
   * Citation.citedArtifact.contributorship.entry.affiliationInfo.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier for the organization
   * - **Definition:** Identifier for the organization.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `affiliation` property value as a StringType object if defined; else an empty StringType object
   */
  public getAffiliationElement(): StringType {
    return this.affiliation ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `affiliation` property.
   *
   * @param element - the `affiliation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAffiliationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.affiliationInfo.affiliation; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.affiliation = element;
    } else {
      this.affiliation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `affiliation` property exists and has a value; `false` otherwise
   */
  public hasAffiliationElement(): boolean {
    return isDefined<StringType>(this.affiliation) && !this.affiliation.isEmpty();
  }

  /**
   * @returns the `affiliation` property value as a fhirString if defined; else undefined
   */
  public getAffiliation(): fhirString | undefined {
    return this.affiliation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `affiliation` property.
   *
   * @param value - the `affiliation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAffiliation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.affiliationInfo.affiliation (${String(value)})`;
      this.affiliation = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.affiliation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `affiliation` property exists and has a value; `false` otherwise
   */
  public hasAffiliation(): boolean {
    return this.hasAffiliationElement();
  }

  /**
   * @returns the `role` property value as a StringType object if defined; else an empty StringType object
   */
  public getRoleElement(): StringType {
    return this.role ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `role` property.
   *
   * @param element - the `role` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRoleElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.affiliationInfo.role; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.role = element;
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRoleElement(): boolean {
    return isDefined<StringType>(this.role) && !this.role.isEmpty();
  }

  /**
   * @returns the `role` property value as a fhirString if defined; else undefined
   */
  public getRole(): fhirString | undefined {
    return this.role?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `role` property.
   *
   * @param value - the `role` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRole(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.affiliationInfo.role (${String(value)})`;
      this.role = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return this.hasRoleElement();
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
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.affiliationInfo.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.affiliationInfo.identifier; Provided element is not an instance of Identifier.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.contributorship.entry.affiliationInfo';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.affiliation,
      this.role,
      this.identifier,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactContributorshipEntryAffiliationInfoComponent {
    const dest = new CitationCitedArtifactContributorshipEntryAffiliationInfoComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactContributorshipEntryAffiliationInfoComponent): void {
    super.copyValues(dest);
    dest.affiliation = this.affiliation?.copy();
    dest.role = this.role?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
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

    if (this.hasAffiliationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getAffiliationElement(), 'affiliation', jsonObj);
    }

    if (this.hasRoleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getRoleElement(), 'role', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactContributorshipEntryContributionInstanceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Contributions with accounting for time or number
 * - **Definition:** Contributions with accounting for time or number.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactContributorshipEntryContributionInstanceComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `CitationCitedArtifactContributorshipEntryContributionInstanceComponent` JSON to instantiate the CitationCitedArtifactContributorshipEntryContributionInstanceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactContributorshipEntryContributionInstanceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactContributorshipEntryContributionInstanceComponent
   * @returns CitationCitedArtifactContributorshipEntryContributionInstanceComponent data model or undefined for `CitationCitedArtifactContributorshipEntryContributionInstanceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactContributorshipEntryContributionInstanceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactContributorshipEntryContributionInstanceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactContributorshipEntryContributionInstanceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

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

    fieldName = 'time';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setTimeElement(datatype);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.contributorship.entry.contributionInstance.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific contribution
   * - **Definition:** The specific contribution.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * Citation.citedArtifact.contributorship.entry.contributionInstance.time Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The time that the contribution was made
   * - **Definition:** The time that the contribution was made.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private time?: DateTimeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.contributionInstance.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.contributionInstance.time; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.entry.contributionInstance.time (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.contributorship.entry.contributionInstance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.time,
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
  public override copy(): CitationCitedArtifactContributorshipEntryContributionInstanceComponent {
    const dest = new CitationCitedArtifactContributorshipEntryContributionInstanceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactContributorshipEntryContributionInstanceComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.time = this.time?.copy();
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasTimeElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getTimeElement(), 'time', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CitationCitedArtifactContributorshipSummaryComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Used to record a display of the author/contributor list without separate coding for each list member
 * - **Definition:** Used to record a display of the author/contributor list without separate coding for each list member.
 *
 * @category Data Models: Resource
 * @see [FHIR Citation](http://hl7.org/fhir/StructureDefinition/Citation)
 */
export class CitationCitedArtifactContributorshipSummaryComponent extends BackboneElement implements IBackboneElement {
  constructor(value: MarkdownType | fhirMarkdown | null = null) {
    super();

    this.value = null;
    if (isDefined<MarkdownType | fhirMarkdown>(value)) {
      if (value instanceof PrimitiveType) {
        this.setValueElement(value);
      } else {
        this.setValue(value);
      }
    }
  }

  /**
   * Parse the provided `CitationCitedArtifactContributorshipSummaryComponent` JSON to instantiate the CitationCitedArtifactContributorshipSummaryComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CitationCitedArtifactContributorshipSummaryComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CitationCitedArtifactContributorshipSummaryComponent
   * @returns CitationCitedArtifactContributorshipSummaryComponent data model or undefined for `CitationCitedArtifactContributorshipSummaryComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CitationCitedArtifactContributorshipSummaryComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CitationCitedArtifactContributorshipSummaryComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CitationCitedArtifactContributorshipSummaryComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'style';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStyle(datatype);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSource(datatype);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setValue(null);
      } else {
        instance.setValueElement(datatype);
      }
    } else {
      instance.setValue(null);
    }

    return instance;
  }

  /**
   * Citation.citedArtifact.contributorship.summary.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Either authorList or contributorshipStatement
   * - **Definition:** Used most commonly to express an author list or a contributorship statement.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Citation.citedArtifact.contributorship.summary.style Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The format for the display string
   * - **Definition:** The format for the display string.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private style?: CodeableConcept | undefined;

  /**
   * Citation.citedArtifact.contributorship.summary.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used to code the producer or rule for creating the display string
   * - **Definition:** Used to code the producer or rule for creating the display string.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private source?: CodeableConcept | undefined;

  /**
   * Citation.citedArtifact.contributorship.summary.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The display string for the author list, contributor list, or contributorship statement
   * - **Definition:** The display string for the author list, contributor list, or contributorship statement.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value: MarkdownType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.summary.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `style` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStyle(): CodeableConcept {
    return this.style ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Style object value to the `style` property.
   *
   * @param value - the `style` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStyle(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.summary.style; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.style = value;
    } else {
      this.style = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `style` property exists and has a value; `false` otherwise
   */
  public hasStyle(): boolean {
    return isDefined<CodeableConcept>(this.style) && !this.style.isEmpty();
  }

  /**
   * @returns the `source` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSource(): CodeableConcept {
    return this.source ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Source object value to the `source` property.
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSource(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.summary.source; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefined<CodeableConcept>(this.source) && !this.source.isEmpty();
  }

  /**
   * @returns the `value` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getValueElement(): MarkdownType {
    return this.value ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: MarkdownType | undefined | null): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.summary.value; Provided value is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.value = element;
    } else {
      this.value = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValueElement(): boolean {
    return isDefined<MarkdownType>(this.value) && !this.value.isEmpty();
  }

  /**
   * @returns the `value` property value as a fhirMarkdown if defined; else null
   */
  public getValue(): fhirMarkdown | null {
    if (this.value?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.value.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `value` property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValue(value: fhirMarkdown | undefined | null): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Citation.citedArtifact.contributorship.summary.value (${String(value)})`;
      this.value = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.value = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return this.hasValueElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Citation.citedArtifact.contributorship.summary';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.style,
      this.source,
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CitationCitedArtifactContributorshipSummaryComponent {
    const dest = new CitationCitedArtifactContributorshipSummaryComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CitationCitedArtifactContributorshipSummaryComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.style = this.style?.copy();
    dest.source = this.source?.copy();
    dest.value = this.value ? this.value.copy() : null;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasStyle()) {
      setFhirComplexJson(this.getStyle(), 'style', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexJson(this.getSource(), 'source', jsonObj);
    }

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getValueElement(), 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    return jsonObj;
  }
}
