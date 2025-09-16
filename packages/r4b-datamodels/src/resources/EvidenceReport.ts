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
 * EvidenceReport Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/EvidenceReport
 * StructureDefinition.name: EvidenceReport
 * StructureDefinition.description: The EvidenceReport Resource is a specialized container for a collection of resources and codable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.
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
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  MarkdownType,
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
import { Annotation, CodeableConcept, ContactDetail, Identifier, Narrative, PARSABLE_DATATYPE_MAP, Period, Quantity, Range, Reference, RelatedArtifact, UsageContext } from '../complex-types/complex-datatypes';
import { ListModeEnum } from '../code-systems/ListModeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { ReportRelationTypeEnum } from '../code-systems/ReportRelationTypeEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * EvidenceReport Class
 *
 * @remarks
 * The EvidenceReport Resource is a specialized container for a collection of resources and codable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.
 *
 * **FHIR Specification**
 * - **Short:** A EvidenceReport
 * - **Definition:** The EvidenceReport Resource is a specialized container for a collection of resources and codable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR EvidenceReport](http://hl7.org/fhir/StructureDefinition/EvidenceReport)
 */
export class EvidenceReport extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, subject: EvidenceReportSubjectComponent | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'EvidenceReport.status',
    );

    this.subject = null;
    if (isDefined<EvidenceReportSubjectComponent>(subject)) {
      this.setSubject(subject);
    }
  }

  /**
   * Parse the provided `EvidenceReport` JSON to instantiate the EvidenceReport data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceReport`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceReport
   * @returns EvidenceReport data model or undefined for `EvidenceReport`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceReport | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceReport';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceReport();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'EvidenceReport');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = EvidenceReport[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for EvidenceReport`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setUrlElement(datatype);
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

    fieldName = 'useContext';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: UsageContext | undefined = UsageContext.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addUseContext(datatype);
          }
        });
      }
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

    fieldName = 'relatedIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRelatedIdentifier(datatype);
          }
        });
      }
    }

    fieldName = 'citeAs[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const citeAs: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setCiteAs(citeAs);

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addNote(datatype);
          }
        });
      }
    }

    fieldName = 'relatedArtifact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: RelatedArtifact | undefined = RelatedArtifact.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRelatedArtifact(datatype);
          }
        });
      }
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: EvidenceReportSubjectComponent | undefined = EvidenceReportSubjectComponent.parse(classJsonObj[fieldName]!, sourceField);
      if (component === undefined) {
        instance.setSubject(null);
      } else {
        instance.setSubject(component);
      }
    } else {
      instance.setSubject(null);
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addContact(datatype);
          }
        });
      }
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAuthor(datatype);
          }
        });
      }
    }

    fieldName = 'editor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEditor(datatype);
          }
        });
      }
    }

    fieldName = 'reviewer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addReviewer(datatype);
          }
        });
      }
    }

    fieldName = 'endorser';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEndorser(datatype);
          }
        });
      }
    }

    fieldName = 'relatesTo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: EvidenceReportRelatesToComponent | undefined = EvidenceReportRelatesToComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addRelatesTo(component);
          }
        });
      }
    }

    fieldName = 'section';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: EvidenceReportSectionComponent | undefined = EvidenceReportSectionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSection(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * EvidenceReport.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this EvidenceReport, represented as a globally unique URI
   * - **Definition:** An absolute URI that is used to identify this EvidenceReport when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this summary is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the summary is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.
   * - **Requirements:** Allows the EvidenceReport to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * EvidenceReport.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this summary. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of summaries that are appropriate for use versus not.
   * - **Requirements:** Allows filtering of EvidenceReports that are appropriate for use versus not.
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
   * EvidenceReport.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate evidence report instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * EvidenceReport.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique identifier for the evidence report
   * - **Definition:** A formal identifier that is used to identify this EvidenceReport when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** This element will contain unique identifiers that support de-duplication of EvidenceReports. This identifier can be valid for only one EvidenceReport resource.
   * - **Requirements:** Allows externally provided and/or usable identifiers to be associated with this EvidenceReport.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * EvidenceReport.relatedIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifiers for articles that may relate to more than one evidence report
   * - **Definition:** A formal identifier that is used to identify things closely related to this EvidenceReport.
   * - **Comment:** May include trial registry identifiers, e.g. NCT04372602 from clinicaltrials.gov. This identifier can be valid for multiple EvidenceReport resources.
   * - **Requirements:** Allows externally provided and/or usable identifiers to be associated with this EvidenceReport.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private relatedIdentifier?: Identifier[] | undefined;

  /**
   * EvidenceReport.citeAs[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('EvidenceReport.citeAs[x]', ['Reference','markdown',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Citation for this report
   * - **Definition:** Citation Resource or display of suggested citation for this report.
   * - **Comment:** used for reports for which external citation is expected, such as use in support of scholarly publications.
   * - **FHIR Types:**
   *     'Reference',
   *     'markdown',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('EvidenceReport.citeAs[x]',[
    'Reference',
    'markdown',
  ])
  private citeAs?: IDataType | undefined;

  /**
   * EvidenceReport.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of report
   * - **Definition:** Specifies the kind of report, such as grouping of classifiers, search results, or human-compiled expression.
   * - **Requirements:** May be used in searching and filtering.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * EvidenceReport.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for footnotes and annotations
   * - **Definition:** Used for footnotes and annotations.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * EvidenceReport.relatedArtifact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Link, description or reference to artifact associated with the report
   * - **Definition:** Link, description or reference to artifact associated with the report.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedArtifact?: RelatedArtifact[] | undefined;

  /**
   * EvidenceReport.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Focus of the report
   * - **Definition:** Specifies the subject or focus of the report. Answers "What is this report about?".
   * - **Comment:** May be used as an expression for search queries and search results
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject: EvidenceReportSubjectComponent | null;

  /**
   * EvidenceReport.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the evidence report.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the evidence report is the organization or individual primarily responsible for the maintenance and upkeep of the evidence report. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence report. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the evidence report. May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * EvidenceReport.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact details for the publisher
   * - **Definition:** Contact details to assist a user in finding and communicating with the publisher.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/https://hl7.org/fhir/clinicalreasoning-module.html).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contact?: ContactDetail[] | undefined;

  /**
   * EvidenceReport.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who authored the content
   * - **Definition:** An individiual, organization, or device primarily involved in the creation and maintenance of the content.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/https://hl7.org/fhir/clinicalreasoning-module.html).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author?: ContactDetail[] | undefined;

  /**
   * EvidenceReport.editor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who edited the content
   * - **Definition:** An individiual, organization, or device primarily responsible for internal coherence of the content.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/https://hl7.org/fhir/clinicalreasoning-module.html).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private editor?: ContactDetail[] | undefined;

  /**
   * EvidenceReport.reviewer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who reviewed the content
   * - **Definition:** An individiual, organization, or device primarily responsible for review of some aspect of the content.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/https://hl7.org/fhir/clinicalreasoning-module.html).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reviewer?: ContactDetail[] | undefined;

  /**
   * EvidenceReport.endorser Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who endorsed the content
   * - **Definition:** An individiual, organization, or device responsible for officially endorsing the content for use in some setting.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/https://hl7.org/fhir/clinicalreasoning-module.html).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private endorser?: ContactDetail[] | undefined;

  /**
   * EvidenceReport.relatesTo Element
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
  private relatesTo?: EvidenceReportRelatesToComponent[] | undefined;

  /**
   * EvidenceReport.section Element
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
  private section?: EvidenceReportSectionComponent[] | undefined;

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
      const optErrMsg = `Invalid EvidenceReport.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid EvidenceReport.url (${String(value)})`;
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
      const errMsgPrefix = `Invalid EvidenceReport.status`;
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
      const optErrMsg = `Invalid EvidenceReport.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid EvidenceReport.status (${String(value)})`;
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
      const optErrMsg = `Invalid EvidenceReport.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid EvidenceReport.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid EvidenceReport.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid EvidenceReport.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid EvidenceReport.relatedIdentifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid EvidenceReport.relatedIdentifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `citeAs` property value as a DataType object if defined; else undefined
   */
  public getCiteAs(): IDataType | undefined {
    return this.citeAs;
  }

  /**
   * Assigns the provided DataType object value to the `citeAs` property.
   *
   * @decorator `@ChoiceDataTypes('EvidenceReport.citeAs[x]')`
   *
   * @param value - the `citeAs` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('EvidenceReport.citeAs[x]')
  public setCiteAs(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.citeAs = value;
    } else {
      this.citeAs = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `citeAs` property exists and has a value; `false` otherwise
   */
  public hasCiteAs(): boolean {
    return isDefined<IDataType>(this.citeAs) && !this.citeAs.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `citeAs` property value as a Reference object if defined; else undefined
   */
  public getCiteAsReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.citeAs)) {
      return undefined;
    }
    if (!(this.citeAs instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceReport.citeAs[x]: Expected Reference but encountered ${this.citeAs.fhirType()}`,
      );
    }
    return this.citeAs;
  }

  /**
   * @returns `true` if the `citeAs` property exists as a Reference and has a value; `false` otherwise
   */
  public hasCiteAsReference(): boolean {
    return this.hasCiteAs() && this.citeAs instanceof Reference;
  }

  /**
   * @returns the `citeAs` property value as a MarkdownType object if defined; else undefined
   */
  public getCiteAsMarkdownType(): MarkdownType | undefined {
    if (!isDefined<IDataType | undefined>(this.citeAs)) {
      return undefined;
    }
    if (!(this.citeAs instanceof MarkdownType)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceReport.citeAs[x]: Expected MarkdownType but encountered ${this.citeAs.fhirType()}`,
      );
    }
    return this.citeAs;
  }

  /**
   * @returns `true` if the `citeAs` property exists as a MarkdownType and has a value; `false` otherwise
   */
  public hasCiteAsMarkdownType(): boolean {
    return this.hasCiteAs() && this.citeAs instanceof MarkdownType;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid EvidenceReport.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid EvidenceReport.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid EvidenceReport.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `relatedArtifact` property value as a RelatedArtifact array
   */
  public getRelatedArtifact(): RelatedArtifact[] {
    return this.relatedArtifact ?? ([] as RelatedArtifact[]);
  }

  /**
   * Assigns the provided RelatedArtifact array value to the `relatedArtifact` property.
   *
   * @param value - the `relatedArtifact` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatedArtifact(value: RelatedArtifact[] | undefined): this {
    if (isDefinedList<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid EvidenceReport.relatedArtifact; Provided value array has an element that is not an instance of RelatedArtifact.`;
      assertFhirTypeList<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.relatedArtifact = value;
    } else {
      this.relatedArtifact = undefined;
    }
    return this;
  }

  /**
   * Add the provided RelatedArtifact value to the `relatedArtifact` array property.
   *
   * @param value - the `relatedArtifact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatedArtifact(value: RelatedArtifact | undefined): this {
    if (isDefined<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid EvidenceReport.relatedArtifact; Provided element is not an instance of RelatedArtifact.`;
      assertFhirType<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.initRelatedArtifact();
      this.relatedArtifact?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedArtifact` property exists and has a value; `false` otherwise
   */
  public hasRelatedArtifact(): boolean {
    return isDefinedList<RelatedArtifact>(this.relatedArtifact) && this.relatedArtifact.some((item: RelatedArtifact) => !item.isEmpty());
  }

  /**
   * Initialize the `relatedArtifact` property
   */
  private initRelatedArtifact(): void {
    if(!this.hasRelatedArtifact()) {
      this.relatedArtifact = [] as RelatedArtifact[];
    }
  }

  /**
   * @returns the `subject` property value as a EvidenceReportSubjectComponent object if defined; else an empty EvidenceReportSubjectComponent object
   */
  public getSubject(): EvidenceReportSubjectComponent {
    return this.subject ?? new EvidenceReportSubjectComponent();
  }

  /**
   * Assigns the provided EvidenceReportSubjectComponent object value to the `subject` property.
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubject(value: EvidenceReportSubjectComponent | undefined | null): this {
    if (isDefined<EvidenceReportSubjectComponent>(value)) {
      const optErrMsg = `Invalid EvidenceReport.subject; Provided element is not an instance of EvidenceReportSubjectComponent.`;
      assertFhirType<EvidenceReportSubjectComponent>(value, EvidenceReportSubjectComponent, optErrMsg);
      this.subject = value;
    } else {
      this.subject = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefined<EvidenceReportSubjectComponent>(this.subject) && !this.subject.isEmpty();
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
      const optErrMsg = `Invalid EvidenceReport.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid EvidenceReport.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid EvidenceReport.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid EvidenceReport.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid EvidenceReport.author; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid EvidenceReport.author; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid EvidenceReport.editor; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid EvidenceReport.editor; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid EvidenceReport.reviewer; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid EvidenceReport.reviewer; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid EvidenceReport.endorser; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid EvidenceReport.endorser; Provided element is not an instance of ContactDetail.`;
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
   * @returns the `relatesTo` property value as a EvidenceReportRelatesToComponent array
   */
  public getRelatesTo(): EvidenceReportRelatesToComponent[] {
    return this.relatesTo ?? ([] as EvidenceReportRelatesToComponent[]);
  }

  /**
   * Assigns the provided EvidenceReportRelatesToComponent array value to the `relatesTo` property.
   *
   * @param value - the `relatesTo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatesTo(value: EvidenceReportRelatesToComponent[] | undefined): this {
    if (isDefinedList<EvidenceReportRelatesToComponent>(value)) {
      const optErrMsg = `Invalid EvidenceReport.relatesTo; Provided value array has an element that is not an instance of EvidenceReportRelatesToComponent.`;
      assertFhirTypeList<EvidenceReportRelatesToComponent>(value, EvidenceReportRelatesToComponent, optErrMsg);
      this.relatesTo = value;
    } else {
      this.relatesTo = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceReportRelatesToComponent value to the `relatesTo` array property.
   *
   * @param value - the `relatesTo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatesTo(value: EvidenceReportRelatesToComponent | undefined): this {
    if (isDefined<EvidenceReportRelatesToComponent>(value)) {
      const optErrMsg = `Invalid EvidenceReport.relatesTo; Provided element is not an instance of EvidenceReportRelatesToComponent.`;
      assertFhirType<EvidenceReportRelatesToComponent>(value, EvidenceReportRelatesToComponent, optErrMsg);
      this.initRelatesTo();
      this.relatesTo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatesTo` property exists and has a value; `false` otherwise
   */
  public hasRelatesTo(): boolean {
    return isDefinedList<EvidenceReportRelatesToComponent>(this.relatesTo) && this.relatesTo.some((item: EvidenceReportRelatesToComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relatesTo` property
   */
  private initRelatesTo(): void {
    if(!this.hasRelatesTo()) {
      this.relatesTo = [] as EvidenceReportRelatesToComponent[];
    }
  }

  /**
   * @returns the `section` property value as a EvidenceReportSectionComponent array
   */
  public getSection(): EvidenceReportSectionComponent[] {
    return this.section ?? ([] as EvidenceReportSectionComponent[]);
  }

  /**
   * Assigns the provided EvidenceReportSectionComponent array value to the `section` property.
   *
   * @param value - the `section` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSection(value: EvidenceReportSectionComponent[] | undefined): this {
    if (isDefinedList<EvidenceReportSectionComponent>(value)) {
      const optErrMsg = `Invalid EvidenceReport.section; Provided value array has an element that is not an instance of EvidenceReportSectionComponent.`;
      assertFhirTypeList<EvidenceReportSectionComponent>(value, EvidenceReportSectionComponent, optErrMsg);
      this.section = value;
    } else {
      this.section = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceReportSectionComponent value to the `section` array property.
   *
   * @param value - the `section` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSection(value: EvidenceReportSectionComponent | undefined): this {
    if (isDefined<EvidenceReportSectionComponent>(value)) {
      const optErrMsg = `Invalid EvidenceReport.section; Provided element is not an instance of EvidenceReportSectionComponent.`;
      assertFhirType<EvidenceReportSectionComponent>(value, EvidenceReportSectionComponent, optErrMsg);
      this.initSection();
      this.section?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `section` property exists and has a value; `false` otherwise
   */
  public hasSection(): boolean {
    return isDefinedList<EvidenceReportSectionComponent>(this.section) && this.section.some((item: EvidenceReportSectionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `section` property
   */
  private initSection(): void {
    if(!this.hasSection()) {
      this.section = [] as EvidenceReportSectionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EvidenceReport';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.url,
      this.status,
      this.useContext,
      this.identifier,
      this.relatedIdentifier,
      this.citeAs,
      this.type_,
      this.note,
      this.relatedArtifact,
      this.subject,
      this.publisher,
      this.contact,
      this.author,
      this.editor,
      this.reviewer,
      this.endorser,
      this.relatesTo,
      this.section,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.subject, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceReport {
    const dest = new EvidenceReport();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceReport): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    dest.status = this.status ? this.status.copy() : null;
    const useContextList = copyListValues<UsageContext>(this.useContext);
    dest.useContext = useContextList.length === 0 ? undefined : useContextList;
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const relatedIdentifierList = copyListValues<Identifier>(this.relatedIdentifier);
    dest.relatedIdentifier = relatedIdentifierList.length === 0 ? undefined : relatedIdentifierList;
    dest.citeAs = this.citeAs?.copy() as IDataType;
    dest.type_ = this.type_?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const relatedArtifactList = copyListValues<RelatedArtifact>(this.relatedArtifact);
    dest.relatedArtifact = relatedArtifactList.length === 0 ? undefined : relatedArtifactList;
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.publisher = this.publisher?.copy();
    const contactList = copyListValues<ContactDetail>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    const authorList = copyListValues<ContactDetail>(this.author);
    dest.author = authorList.length === 0 ? undefined : authorList;
    const editorList = copyListValues<ContactDetail>(this.editor);
    dest.editor = editorList.length === 0 ? undefined : editorList;
    const reviewerList = copyListValues<ContactDetail>(this.reviewer);
    dest.reviewer = reviewerList.length === 0 ? undefined : reviewerList;
    const endorserList = copyListValues<ContactDetail>(this.endorser);
    dest.endorser = endorserList.length === 0 ? undefined : endorserList;
    const relatesToList = copyListValues<EvidenceReportRelatesToComponent>(this.relatesTo);
    dest.relatesTo = relatesToList.length === 0 ? undefined : relatesToList;
    const sectionList = copyListValues<EvidenceReportSectionComponent>(this.section);
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

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUrlElement(), 'url', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasUseContext()) {
      setFhirComplexListJson(this.getUseContext(), 'useContext', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasRelatedIdentifier()) {
      setFhirComplexListJson(this.getRelatedIdentifier(), 'relatedIdentifier', jsonObj);
    }

    if (this.hasCiteAs()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getCiteAs()!, 'citeAs', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasRelatedArtifact()) {
      setFhirComplexListJson(this.getRelatedArtifact(), 'relatedArtifact', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirBackboneElementJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasPublisherElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPublisherElement(), 'publisher', jsonObj);
    }

    if (this.hasContact()) {
      setFhirComplexListJson(this.getContact(), 'contact', jsonObj);
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

    if (this.hasRelatesTo()) {
      setFhirBackboneElementListJson(this.getRelatesTo(), 'relatesTo', jsonObj);
    }

    if (this.hasSection()) {
      setFhirBackboneElementListJson(this.getSection(), 'section', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * EvidenceReportSubjectComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Focus of the report
 * - **Definition:** Specifies the subject or focus of the report. Answers "What is this report about?".
 * - **Comment:** May be used as an expression for search queries and search results
 *
 * @category Data Models: Resource
 * @see [FHIR EvidenceReport](http://hl7.org/fhir/StructureDefinition/EvidenceReport)
 */
export class EvidenceReportSubjectComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EvidenceReportSubjectComponent` JSON to instantiate the EvidenceReportSubjectComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceReportSubjectComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceReportSubjectComponent
   * @returns EvidenceReportSubjectComponent data model or undefined for `EvidenceReportSubjectComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceReportSubjectComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceReportSubjectComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceReportSubjectComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'characteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: EvidenceReportSubjectCharacteristicComponent | undefined = EvidenceReportSubjectCharacteristicComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCharacteristic(component);
          }
        });
      }
    }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addNote(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * EvidenceReport.subject.characteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Characteristic
   * - **Definition:** Characteristic.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private characteristic?: EvidenceReportSubjectCharacteristicComponent[] | undefined;

  /**
   * EvidenceReport.subject.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Footnotes and/or explanatory notes
   * - **Definition:** Used for general notes and annotations not coded elsewhere.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `characteristic` property value as a EvidenceReportSubjectCharacteristicComponent array
   */
  public getCharacteristic(): EvidenceReportSubjectCharacteristicComponent[] {
    return this.characteristic ?? ([] as EvidenceReportSubjectCharacteristicComponent[]);
  }

  /**
   * Assigns the provided EvidenceReportSubjectCharacteristicComponent array value to the `characteristic` property.
   *
   * @param value - the `characteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacteristic(value: EvidenceReportSubjectCharacteristicComponent[] | undefined): this {
    if (isDefinedList<EvidenceReportSubjectCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid EvidenceReport.subject.characteristic; Provided value array has an element that is not an instance of EvidenceReportSubjectCharacteristicComponent.`;
      assertFhirTypeList<EvidenceReportSubjectCharacteristicComponent>(value, EvidenceReportSubjectCharacteristicComponent, optErrMsg);
      this.characteristic = value;
    } else {
      this.characteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceReportSubjectCharacteristicComponent value to the `characteristic` array property.
   *
   * @param value - the `characteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCharacteristic(value: EvidenceReportSubjectCharacteristicComponent | undefined): this {
    if (isDefined<EvidenceReportSubjectCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid EvidenceReport.subject.characteristic; Provided element is not an instance of EvidenceReportSubjectCharacteristicComponent.`;
      assertFhirType<EvidenceReportSubjectCharacteristicComponent>(value, EvidenceReportSubjectCharacteristicComponent, optErrMsg);
      this.initCharacteristic();
      this.characteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `characteristic` property exists and has a value; `false` otherwise
   */
  public hasCharacteristic(): boolean {
    return isDefinedList<EvidenceReportSubjectCharacteristicComponent>(this.characteristic) && this.characteristic.some((item: EvidenceReportSubjectCharacteristicComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `characteristic` property
   */
  private initCharacteristic(): void {
    if(!this.hasCharacteristic()) {
      this.characteristic = [] as EvidenceReportSubjectCharacteristicComponent[];
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
      const optErrMsg = `Invalid EvidenceReport.subject.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid EvidenceReport.subject.note; Provided element is not an instance of Annotation.`;
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
    return 'EvidenceReport.subject';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.characteristic,
      this.note,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceReportSubjectComponent {
    const dest = new EvidenceReportSubjectComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceReportSubjectComponent): void {
    super.copyValues(dest);
    const characteristicList = copyListValues<EvidenceReportSubjectCharacteristicComponent>(this.characteristic);
    dest.characteristic = characteristicList.length === 0 ? undefined : characteristicList;
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

    if (this.hasCharacteristic()) {
      setFhirBackboneElementListJson(this.getCharacteristic(), 'characteristic', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EvidenceReportSubjectCharacteristicComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Characteristic
 * - **Definition:** Characteristic.
 *
 * @category Data Models: Resource
 * @see [FHIR EvidenceReport](http://hl7.org/fhir/StructureDefinition/EvidenceReport)
 */
export class EvidenceReportSubjectCharacteristicComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null, value: IDataType | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `EvidenceReportSubjectCharacteristicComponent` JSON to instantiate the EvidenceReportSubjectCharacteristicComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceReportSubjectCharacteristicComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceReportSubjectCharacteristicComponent
   * @returns EvidenceReportSubjectCharacteristicComponent data model or undefined for `EvidenceReportSubjectCharacteristicComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceReportSubjectCharacteristicComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceReportSubjectCharacteristicComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceReportSubjectCharacteristicComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = EvidenceReportSubjectCharacteristicComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for EvidenceReportSubjectCharacteristicComponent`;
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
      instance.setExcludeElement(datatype);
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
   * EvidenceReport.subject.characteristic.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Characteristic code
   * - **Definition:** Characteristic code.
   * - **Comment:** Example 1 is a Citation. Example 2 is a type of outcome. Example 3 is a specific outcome.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeableConcept | null;

  /**
   * EvidenceReport.subject.characteristic.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('EvidenceReport.subject.characteristic.value[x]', ['Reference','CodeableConcept','boolean','Quantity','Range',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Characteristic value
   * - **Definition:** Characteristic value.
   * - **Comment:** Example 1 is Citation #37. Example 2 is selecting clinical outcomes. Example 3 is 1-year mortality.
   * - **FHIR Types:**
   *     'Reference',
   *     'CodeableConcept',
   *     'boolean',
   *     'Quantity',
   *     'Range',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('EvidenceReport.subject.characteristic.value[x]',[
    'Reference',
    'CodeableConcept',
    'boolean',
    'Quantity',
    'Range',
  ])
  private value: IDataType | null;

  /**
   * EvidenceReport.subject.characteristic.exclude Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Is used to express not the characteristic
   * - **Definition:** Is used to express not the characteristic.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private exclude?: BooleanType | undefined;

  /**
   * EvidenceReport.subject.characteristic.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Timeframe for the characteristic
   * - **Definition:** Timeframe for the characteristic.
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
      const optErrMsg = `Invalid EvidenceReport.subject.characteristic.code; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ChoiceDataTypes('EvidenceReport.subject.characteristic.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('EvidenceReport.subject.characteristic.value[x]')
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
   * @returns the `value` property value as a Reference object if defined; else null
   */
  public getValueReference(): Reference | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceReport.subject.characteristic.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
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

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceReport.subject.characteristic.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for EvidenceReport.subject.characteristic.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for EvidenceReport.subject.characteristic.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for EvidenceReport.subject.characteristic.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
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
  public setExcludeElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid EvidenceReport.subject.characteristic.exclude; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.exclude = element;
    } else {
      this.exclude = undefined;
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
   * @returns the `exclude` property value as a fhirBoolean if defined; else undefined
   */
  public getExclude(): fhirBoolean | undefined {
    return this.exclude?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `exclude` property.
   *
   * @param value - the `exclude` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExclude(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid EvidenceReport.subject.characteristic.exclude (${String(value)})`;
      this.exclude = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.exclude = undefined;
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
      const optErrMsg = `Invalid EvidenceReport.subject.characteristic.period; Provided element is not an instance of Period.`;
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
    return 'EvidenceReport.subject.characteristic';
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
      this.code, this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceReportSubjectCharacteristicComponent {
    const dest = new EvidenceReportSubjectCharacteristicComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceReportSubjectCharacteristicComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.value = this.value ? this.value.copy() as IDataType : null;
    dest.exclude = this.exclude?.copy();
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
 * EvidenceReportRelatesToComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Relationships to other compositions/documents
 * - **Definition:** Relationships that this composition has with other compositions or documents that already exist.
 * - **Comment:** A document is a version specific composition.
 *
 * @category Data Models: Resource
 * @see [FHIR EvidenceReport](http://hl7.org/fhir/StructureDefinition/EvidenceReport)
 */
export class EvidenceReportRelatesToComponent extends BackboneElement implements IBackboneElement {
  constructor(code: EnumCodeType | CodeType | fhirCode | null = null, target: IDataType | null = null) {
    super();

    this.reportRelationTypeEnum = new ReportRelationTypeEnum();

    this.code = constructorCodeValueAsEnumCodeType<ReportRelationTypeEnum>(
      code,
      ReportRelationTypeEnum,
      this.reportRelationTypeEnum,
      'EvidenceReport.relatesTo.code',
    );

    this.target = null;
    if (isDefined<IDataType>(target)) {
      this.setTarget(target);
    }

  }

  /**
   * Parse the provided `EvidenceReportRelatesToComponent` JSON to instantiate the EvidenceReportRelatesToComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceReportRelatesToComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceReportRelatesToComponent
   * @returns EvidenceReportRelatesToComponent data model or undefined for `EvidenceReportRelatesToComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceReportRelatesToComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceReportRelatesToComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceReportRelatesToComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = EvidenceReportRelatesToComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for EvidenceReportRelatesToComponent`;
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
   * FHIR CodeSystem: ReportRelationType
   *
   * @see {@link ReportRelationTypeEnum }
   */
  private readonly reportRelationTypeEnum: ReportRelationTypeEnum;

  /**
   * EvidenceReport.relatesTo.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** replaces | amends | appends | transforms | replacedWith | amendedWith | appendedWith | transformedWith
   * - **Definition:** The type of relationship that this composition has with anther composition or document.
   * - **Comment:** If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ReportRelationTypeEnum }
   */
  private code: EnumCodeType | null;

  /**
   * EvidenceReport.relatesTo.target[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('EvidenceReport.relatesTo.target[x]', ['Identifier','Reference',]`
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
  @ChoiceDataTypesMeta('EvidenceReport.relatesTo.target[x]',[
    'Identifier',
    'Reference',
  ])
  private target: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportRelationTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ReportRelationTypeEnum }
   */
  public setCodeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid EvidenceReport.relatesTo.code`;
      assertEnumCodeType<ReportRelationTypeEnum>(enumType, ReportRelationTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ReportRelationTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ReportRelationTypeEnum }
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid EvidenceReport.relatesTo.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = new EnumCodeType(element, this.reportRelationTypeEnum);
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
   * @see CodeSystem Enumeration: {@link ReportRelationTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ReportRelationTypeEnum }
   */
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid EvidenceReport.relatesTo.code (${String(value)})`;
      this.code = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.reportRelationTypeEnum);
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
   * @decorator `@ChoiceDataTypes('EvidenceReport.relatesTo.target[x]')`
   *
   * @param value - the `target` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('EvidenceReport.relatesTo.target[x]')
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
        `DataType mismatch for EvidenceReport.relatesTo.target[x]: Expected Identifier but encountered ${this.target.fhirType()}`,
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
        `DataType mismatch for EvidenceReport.relatesTo.target[x]: Expected Reference but encountered ${this.target.fhirType()}`,
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
    return 'EvidenceReport.relatesTo';
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
  public override copy(): EvidenceReportRelatesToComponent {
    const dest = new EvidenceReportRelatesToComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceReportRelatesToComponent): void {
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
    }

    if (this.hasTarget()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTarget()!, 'target', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EvidenceReportSectionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Composition is broken into sections
 * - **Definition:** The root of the sections that make up the composition.
 *
 * @category Data Models: Resource
 * @see [FHIR EvidenceReport](http://hl7.org/fhir/StructureDefinition/EvidenceReport)
 */
export class EvidenceReportSectionComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.listModeEnum = new ListModeEnum();
  }

  /**
   * Parse the provided `EvidenceReportSectionComponent` JSON to instantiate the EvidenceReportSectionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceReportSectionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceReportSectionComponent
   * @returns EvidenceReportSectionComponent data model or undefined for `EvidenceReportSectionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceReportSectionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceReportSectionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceReportSectionComponent();

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

    fieldName = 'focus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFocus(datatype);
    }

    fieldName = 'focusReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFocusReference(datatype);
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

    fieldName = 'entryClassifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEntryClassifier(datatype);
          }
        });
      }
    }

    fieldName = 'entryReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEntryReference(datatype);
          }
        });
      }
  }

    fieldName = 'entryQuantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Quantity | undefined = Quantity.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEntryQuantity(datatype);
          }
        });
      }
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
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: EvidenceReportSectionComponent | undefined = EvidenceReportSectionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSection(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * EvidenceReport.section.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for section (e.g. for ToC)
   * - **Definition:** The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.
   * - **Comment:** The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section.
   * - **Requirements:** Section headings are often standardized for different types of documents.  They give guidance to humans on how the document is organized.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title?: StringType | undefined;

  /**
   * EvidenceReport.section.focus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of section (recommended)
   * - **Definition:** A code identifying the kind of content contained within the section. This should be consistent with the section title.
   * - **Comment:** The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.    If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
   * - **Requirements:** Provides computable standardized labels to sections within the document.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private focus?: CodeableConcept | undefined;

  /**
   * EvidenceReport.section.focusReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of section by Resource
   * - **Definition:** A definitional Resource identifying the kind of content contained within the section. This should be consistent with the section title.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private focusReference?: Reference | undefined;

  /**
   * EvidenceReport.section.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who and/or what authored the section
   * - **Definition:** Identifies who is responsible for the information in this section, not necessarily who typed it in.
   * - **Requirements:** Identifies who is responsible for the content.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Person',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private author?: Reference[] | undefined;

  /**
   * EvidenceReport.section.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text summary of the section, for human interpretation
   * - **Definition:** A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is peferred to contain sufficient detail to make it acceptable for a human to just read the narrative.
   * - **Comment:** Document profiles may define what content should be represented in the narrative.
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
   * EvidenceReport.section.mode Element
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
   * EvidenceReport.section.orderedBy Element
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
   * EvidenceReport.section.entryClassifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Extensible classifiers as content
   * - **Definition:** Specifies any type of classification of the evidence report.
   * - **Requirements:** May be used in searching and filtering, or may be the key content of the report.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private entryClassifier?: CodeableConcept[] | undefined;

  /**
   * EvidenceReport.section.entryReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to resources as content
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
  private entryReference?: Reference[] | undefined;

  /**
   * EvidenceReport.section.entryQuantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantity as content
   * - **Definition:** Quantity as content.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private entryQuantity?: Quantity[] | undefined;

  /**
   * EvidenceReport.section.emptyReason Element
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
   * EvidenceReport.section.section Element
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
  private section?: EvidenceReportSectionComponent[] | undefined;

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
      const optErrMsg = `Invalid EvidenceReport.section.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid EvidenceReport.section.title (${String(value)})`;
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
   * @returns the `focus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFocus(): CodeableConcept {
    return this.focus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Focus object value to the `focus` property.
   *
   * @param value - the `focus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFocus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EvidenceReport.section.focus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
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
    return isDefined<CodeableConcept>(this.focus) && !this.focus.isEmpty();
  }

  /**
   * @returns the `focusReference` property value as a Reference object; else an empty Reference object
   */
  public getFocusReference(): Reference {
    return this.focusReference ?? new Reference();
  }

  /**
   * Assigns the provided FocusReference object value to the `focusReference` property.
   *
   * @decorator `@ReferenceTargets('EvidenceReport.section.focusReference', ['Resource',])`
   *
   * @param value - the `focusReference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EvidenceReport.section.focusReference', [
    'Resource',
  ])
  public setFocusReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.focusReference = value;
    } else {
      this.focusReference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `focusReference` property exists and has a value; `false` otherwise
   */
  public hasFocusReference(): boolean {
    return isDefined<Reference>(this.focusReference) && !this.focusReference.isEmpty();
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
   * @decorator `@ReferenceTargets('EvidenceReport.section.author', ['Person','Device','Group','Organization',])`
   *
   * @param value - the `author` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EvidenceReport.section.author', [
    'Person',
  
    'Device',
  
    'Group',
  
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
   * @decorator `@ReferenceTargets('EvidenceReport.section.author', ['Person','Device','Group','Organization',])`
   *
   * @param value - the `author` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EvidenceReport.section.author', [
    'Person',
  
    'Device',
  
    'Group',
  
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
      const optErrMsg = `Invalid EvidenceReport.section.text; Provided element is not an instance of Narrative.`;
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
      const errMsgPrefix = 'Invalid EvidenceReport.section.mode';
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
      const optErrMsg = `Invalid EvidenceReport.section.mode; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid EvidenceReport.section.mode; Provided value is not an instance of fhirCode.`;
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
      const optErrMsg = `Invalid EvidenceReport.section.orderedBy; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `entryClassifier` property value as a CodeableConcept array
   */
  public getEntryClassifier(): CodeableConcept[] {
    return this.entryClassifier ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `entryClassifier` property.
   *
   * @param value - the `entryClassifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEntryClassifier(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EvidenceReport.section.entryClassifier; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.entryClassifier = value;
    } else {
      this.entryClassifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `entryClassifier` array property.
   *
   * @param value - the `entryClassifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEntryClassifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EvidenceReport.section.entryClassifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initEntryClassifier();
      this.entryClassifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `entryClassifier` property exists and has a value; `false` otherwise
   */
  public hasEntryClassifier(): boolean {
    return isDefinedList<CodeableConcept>(this.entryClassifier) && this.entryClassifier.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `entryClassifier` property
   */
  private initEntryClassifier(): void {
    if(!this.hasEntryClassifier()) {
      this.entryClassifier = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `entryReference` property value as a Reference array
   */
  public getEntryReference(): Reference[] {
    return this.entryReference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `entryReference` property.
   *
   * @decorator `@ReferenceTargets('EvidenceReport.section.entryReference', ['Resource',])`
   *
   * @param value - the `entryReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EvidenceReport.section.entryReference', [
    'Resource',
  ])
  public setEntryReference(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.entryReference = value;
    } else {
      this.entryReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `entryReference` array property.
   *
   * @decorator `@ReferenceTargets('EvidenceReport.section.entryReference', ['Resource',])`
   *
   * @param value - the `entryReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EvidenceReport.section.entryReference', [
    'Resource',
  ])
  public addEntryReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEntryReference();
      this.entryReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `entryReference` property exists and has a value; `false` otherwise
   */
  public hasEntryReference(): boolean {
    return isDefinedList<Reference>(this.entryReference) && this.entryReference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `entryReference` property
   */
  private initEntryReference(): void {
    if (!this.hasEntryReference()) {
      this.entryReference = [] as Reference[];
    }
  }

  /**
   * @returns the `entryQuantity` property value as a Quantity array
   */
  public getEntryQuantity(): Quantity[] {
    return this.entryQuantity ?? ([] as Quantity[]);
  }

  /**
   * Assigns the provided Quantity array value to the `entryQuantity` property.
   *
   * @param value - the `entryQuantity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEntryQuantity(value: Quantity[] | undefined): this {
    if (isDefinedList<Quantity>(value)) {
      const optErrMsg = `Invalid EvidenceReport.section.entryQuantity; Provided value array has an element that is not an instance of Quantity.`;
      assertFhirTypeList<Quantity>(value, Quantity, optErrMsg);
      this.entryQuantity = value;
    } else {
      this.entryQuantity = undefined;
    }
    return this;
  }

  /**
   * Add the provided Quantity value to the `entryQuantity` array property.
   *
   * @param value - the `entryQuantity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEntryQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid EvidenceReport.section.entryQuantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.initEntryQuantity();
      this.entryQuantity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `entryQuantity` property exists and has a value; `false` otherwise
   */
  public hasEntryQuantity(): boolean {
    return isDefinedList<Quantity>(this.entryQuantity) && this.entryQuantity.some((item: Quantity) => !item.isEmpty());
  }

  /**
   * Initialize the `entryQuantity` property
   */
  private initEntryQuantity(): void {
    if(!this.hasEntryQuantity()) {
      this.entryQuantity = [] as Quantity[];
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
      const optErrMsg = `Invalid EvidenceReport.section.emptyReason; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `section` property value as a EvidenceReportSectionComponent array
   */
  public getSection(): EvidenceReportSectionComponent[] {
    return this.section ?? ([] as EvidenceReportSectionComponent[]);
  }

  /**
   * Assigns the provided EvidenceReportSectionComponent array value to the `section` property.
   *
   * @param value - the `section` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSection(value: EvidenceReportSectionComponent[] | undefined): this {
    if (isDefinedList<EvidenceReportSectionComponent>(value)) {
      const optErrMsg = `Invalid EvidenceReport.section.section; Provided value array has an element that is not an instance of EvidenceReportSectionComponent.`;
      assertFhirTypeList<EvidenceReportSectionComponent>(value, EvidenceReportSectionComponent, optErrMsg);
      this.section = value;
    } else {
      this.section = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceReportSectionComponent value to the `section` array property.
   *
   * @param value - the `section` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSection(value: EvidenceReportSectionComponent | undefined): this {
    if (isDefined<EvidenceReportSectionComponent>(value)) {
      const optErrMsg = `Invalid EvidenceReport.section.section; Provided element is not an instance of EvidenceReportSectionComponent.`;
      assertFhirType<EvidenceReportSectionComponent>(value, EvidenceReportSectionComponent, optErrMsg);
      this.initSection();
      this.section?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `section` property exists and has a value; `false` otherwise
   */
  public hasSection(): boolean {
    return isDefinedList<EvidenceReportSectionComponent>(this.section) && this.section.some((item: EvidenceReportSectionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `section` property
   */
  private initSection(): void {
    if(!this.hasSection()) {
      this.section = [] as EvidenceReportSectionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EvidenceReport.section';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.title,
      this.focus,
      this.focusReference,
      this.author,
      this.text,
      this.mode,
      this.orderedBy,
      this.entryClassifier,
      this.entryReference,
      this.entryQuantity,
      this.emptyReason,
      this.section,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceReportSectionComponent {
    const dest = new EvidenceReportSectionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceReportSectionComponent): void {
    super.copyValues(dest);
    dest.title = this.title?.copy();
    dest.focus = this.focus?.copy();
    dest.focusReference = this.focusReference?.copy();
    const authorList = copyListValues<Reference>(this.author);
    dest.author = authorList.length === 0 ? undefined : authorList;
    dest.text = this.text?.copy();
    dest.mode = this.mode?.copy();
    dest.orderedBy = this.orderedBy?.copy();
    const entryClassifierList = copyListValues<CodeableConcept>(this.entryClassifier);
    dest.entryClassifier = entryClassifierList.length === 0 ? undefined : entryClassifierList;
    const entryReferenceList = copyListValues<Reference>(this.entryReference);
    dest.entryReference = entryReferenceList.length === 0 ? undefined : entryReferenceList;
    const entryQuantityList = copyListValues<Quantity>(this.entryQuantity);
    dest.entryQuantity = entryQuantityList.length === 0 ? undefined : entryQuantityList;
    dest.emptyReason = this.emptyReason?.copy();
    const sectionList = copyListValues<EvidenceReportSectionComponent>(this.section);
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

    if (this.hasFocus()) {
      setFhirComplexJson(this.getFocus(), 'focus', jsonObj);
    }

    if (this.hasFocusReference()) {
      setFhirComplexJson(this.getFocusReference(), 'focusReference', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexListJson(this.getAuthor(), 'author', jsonObj);
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

    if (this.hasEntryClassifier()) {
      setFhirComplexListJson(this.getEntryClassifier(), 'entryClassifier', jsonObj);
    }

    if (this.hasEntryReference()) {
      setFhirComplexListJson(this.getEntryReference(), 'entryReference', jsonObj);
    }

    if (this.hasEntryQuantity()) {
      setFhirComplexListJson(this.getEntryQuantity(), 'entryQuantity', jsonObj);
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
