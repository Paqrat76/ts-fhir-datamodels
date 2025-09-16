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
 * Requirements Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Requirements
 * StructureDefinition.name: Requirements
 * StructureDefinition.description: The Requirements resource is used to describe an actor - a human or an application that plays a role in data exchange, and that may have obligations associated with the role the actor plays.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  BooleanType,
  CanonicalType,
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
  IdType,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  UriType,
  UrlType,
  assertEnumCodeType,
  assertEnumCodeTypeList,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCanonical,
  fhirCanonicalSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirId,
  fhirIdSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
  fhirUrl,
  fhirUrlSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, Reference, UsageContext } from '../complex-types/complex-datatypes';
import { ConformanceExpectationEnum } from '../code-systems/ConformanceExpectationEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Requirements Class
 *
 * @remarks
 * The Requirements resource is used to describe an actor - a human or an application that plays a role in data exchange, and that may have obligations associated with the role the actor plays.
 *
 * **FHIR Specification**
 * - **Short:** A set of requirements - features of systems that are necessary
 * - **Definition:** A set of requirements - a list of features or behaviors of designed systems that are necessary to achieve organizational or regulatory goals.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Requirements](http://hl7.org/fhir/StructureDefinition/Requirements)
 */
export class Requirements extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'Requirements.status',
    );
  }

  /**
   * Parse the provided `Requirements` JSON to instantiate the Requirements data model.
   *
   * @param sourceJson - JSON representing FHIR `Requirements`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Requirements
   * @returns Requirements data model or undefined for `Requirements`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Requirements | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Requirements';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Requirements();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Requirements');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = Requirements[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for Requirements`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
    }

    fieldName = 'versionAlgorithm[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const versionAlgorithm: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setVersionAlgorithm(versionAlgorithm);

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

    fieldName = 'jurisdiction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addJurisdiction(datatype);
          }
        });
      }
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

    fieldName = 'copyrightLabel';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCopyrightLabelElement(datatype);
    }

    fieldName = 'derivedFrom';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addDerivedFromElement(datatype);
          }
        });
      }
    }

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: UrlType | undefined = fhirParser.parseUrlType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addReferenceElement(datatype);
          }
        });
      }
    }

    fieldName = 'actor';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addActorElement(datatype);
          }
        });
      }
    }

    fieldName = 'statement';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: RequirementsStatementComponent | undefined = RequirementsStatementComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addStatement(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Requirements.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this Requirements, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this Requirements when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this Requirements is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the Requirements is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the Requirements to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * Requirements.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the Requirements (business identifier)
   * - **Definition:** A formal identifier that is used to identify this Requirements when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Requirements.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the Requirements
   * - **Definition:** The identifier that is used to identify this version of the Requirements when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the Requirements author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different Requirements instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the Requirements with the format [url]|[version]. The version SHOULD NOT contain a \'#\' - see [Business Version](https://hl7.org/fhir/resource.html#bv-format).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * Requirements.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Requirements.versionAlgorithm[x]', ['string','Coding',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How to compare versions
   * - **Definition:** Indicates the mechanism used to compare versions to determine which is more current.
   * - **Comment:** If set as a string, this is a FHIRPath expression that has two additional context variables passed in - %version1 and %version2 and will return a negative number if version1 is newer, a positive number if version2 and a 0 if the version ordering can\'t be successfully be determined.
   * - **FHIR Types:**
   *     'string',
   *     'Coding',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Requirements.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * Requirements.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this Requirements (computer friendly)
   * - **Definition:** A natural language name identifying the Requirements. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * Requirements.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this Requirements (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the Requirements.
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
   * Requirements.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this Requirements. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of Requirements that are appropriate for use versus not. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This is labeled as &quot;Is Modifier&quot; because designs and applications should not use a retired Requirements without due consideration
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Requirements.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this Requirements is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of Requirements that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level Requirements.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * Requirements.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the Requirements was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the Requirements changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the Requirements. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * Requirements.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher/steward (organization or individual)
   * - **Definition:** The name of the organization or individual responsible for the release and ongoing maintenance of the Requirements.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the Requirements is the organization or individual primarily responsible for the maintenance and upkeep of the Requirements. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the Requirements. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the Requirements.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * Requirements.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact details for the publisher
   * - **Definition:** Contact details to assist a user in finding and communicating with the publisher.
   * - **Comment:** May be a web site, an email address, a telephone number, etc. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contact?: ContactDetail[] | undefined;

  /**
   * Requirements.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the requirements
   * - **Definition:** A free text natural language description of the requirements.
   * - **Comment:** This description can be used for a general description of the requirements, and which covers why it was defined.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * Requirements.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate Requirements instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * Requirements.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for Requirements (if applicable)
   * - **Definition:** A legal or geographic region in which the Requirements is intended to be used.
   * - **Comment:** It may be possible for the Requirements to be used in jurisdictions other than those for which it was originally designed or intended DEPRECATION NOTE: For consistency, implementations are encouraged to migrate to using the new \'jurisdiction\' code in the useContext element.  (I.e. useContext.code indicating http://terminology.hl7.org/CodeSystem/usage-context-type#jurisdiction and useContext.valueCodeableConcept indicating the jurisdiction.).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * Requirements.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this Requirements is defined
   * - **Definition:** Explanation of why this Requirements is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the Requirements. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this Requirements.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * Requirements.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the Requirements and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the Requirements.
   * - **Comment:** ...
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the Requirements.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * Requirements.copyrightLabel Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Copyright holder and year(s)
   * - **Definition:** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. \'All rights reserved\', \'Some rights reserved\').
   * - **Comment:** The (c) symbol should NOT be included in this string. It will be added by software when rendering the notation. Full details about licensing, restrictions, warrantees, etc. goes in the more general \'copyright\' element.
   * - **Requirements:** Defines the content expected to be rendered in all representations of the artifact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyrightLabel?: StringType | undefined;

  /**
   * Requirements.derivedFrom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Other set of Requirements this builds on
   * - **Definition:** Another set of Requirements that this set of Requirements builds on and updates.
   * - **Comment:** Existing statements (by key) may be narrowed or clarified, and additional statements added.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Requirements',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private derivedFrom?: CanonicalType[] | undefined;

  /**
   * Requirements.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External artifact (rule/document etc. that) created this set of requirements
   * - **Definition:** A reference to another artifact that created this set of requirements. This could be a Profile, etc., or external regulation, or business requirements expressed elsewhere.
   * - **FHIR Type:** `url`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference?: UrlType[] | undefined;

  /**
   * Requirements.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actor for these requirements
   * - **Definition:** An actor these requirements are in regard to.
   * - **Comment:** If more than one actor is specified, then it\'s up to the statements to describe in narrative if they don\'t apply to all actors.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ActorDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actor?: CanonicalType[] | undefined;

  /**
   * Requirements.statement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actual statement as markdown
   * - **Definition:** The actual statement of requirement, in markdown format.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statement?: RequirementsStatementComponent[] | undefined;

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
      const optErrMsg = `Invalid Requirements.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid Requirements.url (${String(value)})`;
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
      const optErrMsg = `Invalid Requirements.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Requirements.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Requirements.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Requirements.version (${String(value)})`;
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
   * @returns the `versionAlgorithm` property value as a DataType object if defined; else undefined
   */
  public getVersionAlgorithm(): IDataType | undefined {
    return this.versionAlgorithm;
  }

  /**
   * Assigns the provided DataType object value to the `versionAlgorithm` property.
   *
   * @decorator `@ChoiceDataTypes('Requirements.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Requirements.versionAlgorithm[x]')
  public setVersionAlgorithm(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.versionAlgorithm = value;
    } else {
      this.versionAlgorithm = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `versionAlgorithm` property exists and has a value; `false` otherwise
   */
  public hasVersionAlgorithm(): boolean {
    return isDefined<IDataType>(this.versionAlgorithm) && !this.versionAlgorithm.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `versionAlgorithm` property value as a StringType object if defined; else undefined
   */
  public getVersionAlgorithmStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.versionAlgorithm)) {
      return undefined;
    }
    if (!(this.versionAlgorithm instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Requirements.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
      );
    }
    return this.versionAlgorithm;
  }

  /**
   * @returns `true` if the `versionAlgorithm` property exists as a StringType and has a value; `false` otherwise
   */
  public hasVersionAlgorithmStringType(): boolean {
    return this.hasVersionAlgorithm() && this.versionAlgorithm instanceof StringType;
  }

  /**
   * @returns the `versionAlgorithm` property value as a Coding object if defined; else undefined
   */
  public getVersionAlgorithmCoding(): Coding | undefined {
    if (!isDefined<IDataType | undefined>(this.versionAlgorithm)) {
      return undefined;
    }
    if (!(this.versionAlgorithm instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for Requirements.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
      );
    }
    return this.versionAlgorithm;
  }

  /**
   * @returns `true` if the `versionAlgorithm` property exists as a Coding and has a value; `false` otherwise
   */
  public hasVersionAlgorithmCoding(): boolean {
    return this.hasVersionAlgorithm() && this.versionAlgorithm instanceof Coding;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid Requirements.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Requirements.name (${String(value)})`;
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
      const optErrMsg = `Invalid Requirements.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Requirements.title (${String(value)})`;
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
      const errMsgPrefix = `Invalid Requirements.status`;
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
      const optErrMsg = `Invalid Requirements.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid Requirements.status (${String(value)})`;
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
      const optErrMsg = `Invalid Requirements.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid Requirements.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid Requirements.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid Requirements.date (${String(value)})`;
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
      const optErrMsg = `Invalid Requirements.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Requirements.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid Requirements.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Requirements.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Requirements.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Requirements.description (${String(value)})`;
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
      const optErrMsg = `Invalid Requirements.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid Requirements.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid Requirements.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Requirements.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Requirements.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Requirements.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid Requirements.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Requirements.copyright (${String(value)})`;
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
   * @returns the `copyrightLabel` property value as a StringType object if defined; else an empty StringType object
   */
  public getCopyrightLabelElement(): StringType {
    return this.copyrightLabel ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `copyrightLabel` property.
   *
   * @param element - the `copyrightLabel` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopyrightLabelElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Requirements.copyrightLabel; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.copyrightLabel = element;
    } else {
      this.copyrightLabel = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copyrightLabel` property exists and has a value; `false` otherwise
   */
  public hasCopyrightLabelElement(): boolean {
    return isDefined<StringType>(this.copyrightLabel) && !this.copyrightLabel.isEmpty();
  }

  /**
   * @returns the `copyrightLabel` property value as a fhirString if defined; else undefined
   */
  public getCopyrightLabel(): fhirString | undefined {
    return this.copyrightLabel?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `copyrightLabel` property.
   *
   * @param value - the `copyrightLabel` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopyrightLabel(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Requirements.copyrightLabel (${String(value)})`;
      this.copyrightLabel = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.copyrightLabel = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copyrightLabel` property exists and has a value; `false` otherwise
   */
  public hasCopyrightLabel(): boolean {
    return this.hasCopyrightLabelElement();
  }

  /**
   * @returns the `derivedFrom` property value as a CanonicalType array
   */
  public getDerivedFromElement(): CanonicalType[] {
    return this.derivedFrom ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `derivedFrom` property.
   *
   * @param element - the `derivedFrom` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDerivedFromElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid Requirements.derivedFrom; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.derivedFrom = element;
    } else {
      this.derivedFrom = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `derivedFrom` array property.
   *
   * @param element - the `derivedFrom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDerivedFromElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid Requirements.derivedFrom; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initDerivedFrom();
      this.derivedFrom?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `derivedFrom` property exists and has a value; `false` otherwise
   */
  public hasDerivedFromElement(): boolean {
    return isDefinedList<CanonicalType>(this.derivedFrom) && this.derivedFrom.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `derivedFrom` property value as a fhirCanonical array
   */
  public getDerivedFrom(): fhirCanonical[] {
    this.initDerivedFrom();
    const derivedFromValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.derivedFrom!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        derivedFromValues.push(value);
      }
    }
    return derivedFromValues;
  }

  /**
   * Assigns the provided primitive value array to the `derivedFrom` property.
   *
   * @param value - the `derivedFrom` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDerivedFrom(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const derivedFromElements = [] as CanonicalType[];
      for (const derivedFromValue of value) {
        const optErrMsg = `Invalid Requirements.derivedFrom array item (${String(derivedFromValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(derivedFromValue, fhirCanonicalSchema, optErrMsg));
        derivedFromElements.push(element);
      }
      this.derivedFrom = derivedFromElements;
    } else {
      this.derivedFrom = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `derivedFrom` array property.
   *
   * @param value - the `derivedFrom` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDerivedFrom(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid Requirements.derivedFrom array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initDerivedFrom();
      this.addDerivedFromElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `derivedFrom` property exists and has a value; `false` otherwise
   */
  public hasDerivedFrom(): boolean {
    return this.hasDerivedFromElement();
  }

  /**
   * Initialize the `derivedFrom` property
   */
  private initDerivedFrom(): void {
    if (!this.hasDerivedFrom()) {
      this.derivedFrom = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `reference` property value as a UrlType array
   */
  public getReferenceElement(): UrlType[] {
    return this.reference ?? ([] as UrlType[]);
  }

  /**
   * Assigns the provided UrlType array value to the `reference` property.
   *
   * @param element - the `reference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReferenceElement(element: UrlType[] | undefined): this {
    if (isDefinedList<UrlType>(element)) {
      const optErrMsg = `Invalid Requirements.reference; Provided value array has an element that is not an instance of UrlType.`;
      assertFhirTypeList<UrlType>(element, UrlType, optErrMsg);
      this.reference = element;
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * Add the provided UrlType value to the `reference` array property.
   *
   * @param element - the `reference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addReferenceElement(element: UrlType | undefined): this {
    if (isDefined<UrlType>(element)) {
      const optErrMsg = `Invalid Requirements.reference; Provided element is not an instance of UrlType.`;
      assertFhirType<UrlType>(element, UrlType, optErrMsg);
      this.initReference();
      this.reference?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReferenceElement(): boolean {
    return isDefinedList<UrlType>(this.reference) && this.reference.some((item: UrlType) => !item.isEmpty());
  }

  /**
   * @returns the `reference` property value as a fhirUrl array
   */
  public getReference(): fhirUrl[] {
    this.initReference();
    const referenceValues = [] as fhirUrl[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.reference!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        referenceValues.push(value);
      }
    }
    return referenceValues;
  }

  /**
   * Assigns the provided primitive value array to the `reference` property.
   *
   * @param value - the `reference` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReference(value: fhirUrl[] | undefined): this {
    if (isDefinedList<fhirUrl>(value)) {
      const referenceElements = [] as UrlType[];
      for (const referenceValue of value) {
        const optErrMsg = `Invalid Requirements.reference array item (${String(referenceValue)})`;
        const element = new UrlType(parseFhirPrimitiveData(referenceValue, fhirUrlSchema, optErrMsg));
        referenceElements.push(element);
      }
      this.reference = referenceElements;
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `reference` array property.
   *
   * @param value - the `reference` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addReference(value: fhirUrl | undefined): this {
    if (isDefined<fhirUrl>(value)) {
      const optErrMsg = `Invalid Requirements.reference array item (${String(value)})`;
      const element = new UrlType(parseFhirPrimitiveData(value, fhirUrlSchema, optErrMsg));
      this.initReference();
      this.addReferenceElement(element);
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
   * Initialize the `reference` property
   */
  private initReference(): void {
    if (!this.hasReference()) {
      this.reference = [] as UrlType[];
    }
  }

  /**
   * @returns the `actor` property value as a CanonicalType array
   */
  public getActorElement(): CanonicalType[] {
    return this.actor ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `actor` property.
   *
   * @param element - the `actor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActorElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid Requirements.actor; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.actor = element;
    } else {
      this.actor = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `actor` array property.
   *
   * @param element - the `actor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addActorElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid Requirements.actor; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initActor();
      this.actor?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `actor` property exists and has a value; `false` otherwise
   */
  public hasActorElement(): boolean {
    return isDefinedList<CanonicalType>(this.actor) && this.actor.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `actor` property value as a fhirCanonical array
   */
  public getActor(): fhirCanonical[] {
    this.initActor();
    const actorValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.actor!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        actorValues.push(value);
      }
    }
    return actorValues;
  }

  /**
   * Assigns the provided primitive value array to the `actor` property.
   *
   * @param value - the `actor` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActor(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const actorElements = [] as CanonicalType[];
      for (const actorValue of value) {
        const optErrMsg = `Invalid Requirements.actor array item (${String(actorValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(actorValue, fhirCanonicalSchema, optErrMsg));
        actorElements.push(element);
      }
      this.actor = actorElements;
    } else {
      this.actor = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `actor` array property.
   *
   * @param value - the `actor` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addActor(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid Requirements.actor array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initActor();
      this.addActorElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `actor` property exists and has a value; `false` otherwise
   */
  public hasActor(): boolean {
    return this.hasActorElement();
  }

  /**
   * Initialize the `actor` property
   */
  private initActor(): void {
    if (!this.hasActor()) {
      this.actor = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `statement` property value as a RequirementsStatementComponent array
   */
  public getStatement(): RequirementsStatementComponent[] {
    return this.statement ?? ([] as RequirementsStatementComponent[]);
  }

  /**
   * Assigns the provided RequirementsStatementComponent array value to the `statement` property.
   *
   * @param value - the `statement` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatement(value: RequirementsStatementComponent[] | undefined): this {
    if (isDefinedList<RequirementsStatementComponent>(value)) {
      const optErrMsg = `Invalid Requirements.statement; Provided value array has an element that is not an instance of RequirementsStatementComponent.`;
      assertFhirTypeList<RequirementsStatementComponent>(value, RequirementsStatementComponent, optErrMsg);
      this.statement = value;
    } else {
      this.statement = undefined;
    }
    return this;
  }

  /**
   * Add the provided RequirementsStatementComponent value to the `statement` array property.
   *
   * @param value - the `statement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStatement(value: RequirementsStatementComponent | undefined): this {
    if (isDefined<RequirementsStatementComponent>(value)) {
      const optErrMsg = `Invalid Requirements.statement; Provided element is not an instance of RequirementsStatementComponent.`;
      assertFhirType<RequirementsStatementComponent>(value, RequirementsStatementComponent, optErrMsg);
      this.initStatement();
      this.statement?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `statement` property exists and has a value; `false` otherwise
   */
  public hasStatement(): boolean {
    return isDefinedList<RequirementsStatementComponent>(this.statement) && this.statement.some((item: RequirementsStatementComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `statement` property
   */
  private initStatement(): void {
    if(!this.hasStatement()) {
      this.statement = [] as RequirementsStatementComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Requirements';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.url,
      this.identifier,
      this.version,
      this.versionAlgorithm,
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
      this.copyrightLabel,
      this.derivedFrom,
      this.reference,
      this.actor,
      this.statement,
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
  public override copy(): Requirements {
    const dest = new Requirements();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Requirements): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.versionAlgorithm = this.versionAlgorithm?.copy() as IDataType;
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
    dest.copyrightLabel = this.copyrightLabel?.copy();
    const derivedFromList = copyListValues<CanonicalType>(this.derivedFrom);
    dest.derivedFrom = derivedFromList.length === 0 ? undefined : derivedFromList;
    const referenceList = copyListValues<UrlType>(this.reference);
    dest.reference = referenceList.length === 0 ? undefined : referenceList;
    const actorList = copyListValues<CanonicalType>(this.actor);
    dest.actor = actorList.length === 0 ? undefined : actorList;
    const statementList = copyListValues<RequirementsStatementComponent>(this.statement);
    dest.statement = statementList.length === 0 ? undefined : statementList;
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

    if (this.hasVersionAlgorithm()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getVersionAlgorithm()!, 'versionAlgorithm', jsonObj);
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

    if (this.hasCopyrightLabelElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCopyrightLabelElement(), 'copyrightLabel', jsonObj);
    }

    if (this.hasDerivedFrom()) {
      setFhirPrimitiveListJson(this.getDerivedFromElement(), 'derivedFrom', jsonObj);
    }

    if (this.hasReference()) {
      setFhirPrimitiveListJson(this.getReferenceElement(), 'reference', jsonObj);
    }

    if (this.hasActor()) {
      setFhirPrimitiveListJson(this.getActorElement(), 'actor', jsonObj);
    }

    if (this.hasStatement()) {
      setFhirBackboneElementListJson(this.getStatement(), 'statement', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * RequirementsStatementComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Actual statement as markdown
 * - **Definition:** The actual statement of requirement, in markdown format.
 *
 * @category Data Models: Resource
 * @see [FHIR Requirements](http://hl7.org/fhir/StructureDefinition/Requirements)
 */
export class RequirementsStatementComponent extends BackboneElement implements IBackboneElement {
  constructor(key: IdType | fhirId | null = null, requirement: MarkdownType | fhirMarkdown | null = null) {
    super();

    this.conformanceExpectationEnum = new ConformanceExpectationEnum();

    this.key = null;
    if (isDefined<IdType | fhirId>(key)) {
      if (key instanceof PrimitiveType) {
        this.setKeyElement(key);
      } else {
        this.setKey(key);
      }
    }

    this.requirement = null;
    if (isDefined<MarkdownType | fhirMarkdown>(requirement)) {
      if (requirement instanceof PrimitiveType) {
        this.setRequirementElement(requirement);
      } else {
        this.setRequirement(requirement);
      }
    }
  }

  /**
   * Parse the provided `RequirementsStatementComponent` JSON to instantiate the RequirementsStatementComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RequirementsStatementComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RequirementsStatementComponent
   * @returns RequirementsStatementComponent data model or undefined for `RequirementsStatementComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RequirementsStatementComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RequirementsStatementComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RequirementsStatementComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'key';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setKey(null);
      } else {
        instance.setKeyElement(datatype);
      }
    } else {
      instance.setKey(null);
    }

    fieldName = 'label';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLabelElement(datatype);
    }

    fieldName = 'conformance';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: CodeType | undefined = fhirParser.parseCodeType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addConformanceElement(datatype);
          }
        });
      }
    }

    fieldName = 'conditionality';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setConditionalityElement(datatype);
    }

    fieldName = 'requirement';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setRequirement(null);
      } else {
        instance.setRequirementElement(datatype);
      }
    } else {
      instance.setRequirement(null);
    }

    fieldName = 'derivedFrom';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDerivedFromElement(datatype);
    }

    fieldName = 'parent';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setParentElement(datatype);
    }

    fieldName = 'satisfiedBy';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: UrlType | undefined = fhirParser.parseUrlType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addSatisfiedByElement(datatype);
          }
        });
      }
    }

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: UrlType | undefined = fhirParser.parseUrlType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addReferenceElement(datatype);
          }
        });
      }
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSource(datatype);
          }
        });
      }
  }

    return instance;
  }

  /**
   * Requirements.statement.key Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Key that identifies this statement
   * - **Definition:** Key that identifies this statement (unique within this resource).
   * - **Comment:** Refer directly to the statement by {url}#{key}
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private key: IdType | null;

  /**
   * Requirements.statement.label Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Short Human label for this statement
   * - **Definition:** A short human usable label for this statement.
   * - **Comment:** The key is intended for computers, while this is intended for humans. In its absence, the key should be convenient for a human to say (e.g. not a UUID)
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private label?: StringType | undefined;

  /**
   * FHIR CodeSystem: ConformanceExpectation
   *
   * @see {@link ConformanceExpectationEnum }
   */
  private readonly conformanceExpectationEnum: ConformanceExpectationEnum;

  /**
   * Requirements.statement.conformance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** SHALL | SHOULD | MAY | SHOULD-NOT
   * - **Definition:** A short human usable label for this statement.
   * - **Comment:** The conformance code is extracted from the requirement to make indexing and display easier. The requirement needs to express the conformance verbs directly in the markdown content. It\'s not unusual to mix verbs in a single sentence (e.g. System SHALL do X and SHOULD do Y)
   * - **Requirements:** This element is allowed to repeat because a single requirements statement might contain multiple conformance words and thus need to be indexed under multiple conformance categories.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ConformanceExpectationEnum }
   */
  private conformance?: EnumCodeType[] | undefined;

  /**
   * Requirements.statement.conditionality Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Set to true if requirements statement is conditional
   * - **Definition:** This boolean flag is set to true of the text of the requirement is conditional on something e.g. it includes lanauage like \'if x then y\'. This conditionality flag is introduced for purposes of filtering and colour highlighting etc.
   * - **Comment:** There is no intent that the conditional statement by evaluatable
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private conditionality?: BooleanType | undefined;

  /**
   * Requirements.statement.requirement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual requirement
   * - **Definition:** The actual requirement for human consumption.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requirement: MarkdownType | null;

  /**
   * Requirements.statement.derivedFrom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Another statement this clarifies/restricts ([url#]key)
   * - **Definition:** Another statement on one of the requirements that this requirement clarifies or restricts.
   * - **Comment:** This can be just a key, if there is only one matching statement in the requirements statements referenced in Requirements.derivedFrom. If there is more than one, it should be in the format ```url#key```
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private derivedFrom?: StringType | undefined;

  /**
   * Requirements.statement.parent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A larger requirement that this requirement helps to refine and enable
   * - **Definition:** A larger requirement that this requirement helps to refine and enable.
   * - **Comment:** Follows the same convention as statement.derivedFrom, where a reference is the canonical of the Requirements followed by \'#\' and the \'key\' of the specific requirement.
   * - **Requirements:** Allows requirements to be organized compositionally. E.g. Epic/Story/Task.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private parent?: StringType | undefined;

  /**
   * Requirements.statement.satisfiedBy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Design artifact that satisfies this requirement
   * - **Definition:** A reference to another artifact that satisfies this requirement. This could be a Profile, extension, or an element in one of those, or a CapabilityStatement, OperationDefinition, SearchParameter, CodeSystem(/code), ValueSet, Libary etc.
   * - **Comment:** This is for use when the requirement is met be a pre-existing artifact e.g. a rule that\'s met by the base FHIR spec, or a national implementation guide.
   * - **FHIR Type:** `url`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private satisfiedBy?: UrlType[] | undefined;

  /**
   * Requirements.statement.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External artifact (rule/document etc. that) created this requirement
   * - **Definition:** A reference to another artifact that created this requirement. This could be a Profile, etc., or external regulation, or business requirements expressed elsewhere.
   * - **FHIR Type:** `url`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference?: UrlType[] | undefined;

  /**
   * Requirements.statement.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who asked for this statement
   * - **Definition:** Who asked for this statement to be a requirement. By default, it\'s assumed that the publisher knows who it is if it matters.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private source?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `key` property value as a IdType object if defined; else an empty IdType object
   */
  public getKeyElement(): IdType {
    return this.key ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `key` property.
   *
   * @param element - the `key` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setKeyElement(element: IdType | undefined | null): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid Requirements.statement.key; Provided value is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.key = element;
    } else {
      this.key = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `key` property exists and has a value; `false` otherwise
   */
  public hasKeyElement(): boolean {
    return isDefined<IdType>(this.key) && !this.key.isEmpty();
  }

  /**
   * @returns the `key` property value as a fhirId if defined; else null
   */
  public getKey(): fhirId | null {
    if (this.key?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.key.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `key` property.
   *
   * @param value - the `key` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setKey(value: fhirId | undefined | null): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid Requirements.statement.key (${String(value)})`;
      this.key = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.key = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `key` property exists and has a value; `false` otherwise
   */
  public hasKey(): boolean {
    return this.hasKeyElement();
  }

  /**
   * @returns the `label` property value as a StringType object if defined; else an empty StringType object
   */
  public getLabelElement(): StringType {
    return this.label ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `label` property.
   *
   * @param element - the `label` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLabelElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Requirements.statement.label; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.label = element;
    } else {
      this.label = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `label` property exists and has a value; `false` otherwise
   */
  public hasLabelElement(): boolean {
    return isDefined<StringType>(this.label) && !this.label.isEmpty();
  }

  /**
   * @returns the `label` property value as a fhirString if defined; else undefined
   */
  public getLabel(): fhirString | undefined {
    return this.label?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `label` property.
   *
   * @param value - the `label` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLabel(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Requirements.statement.label (${String(value)})`;
      this.label = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.label = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `label` property exists and has a value; `false` otherwise
   */
  public hasLabel(): boolean {
    return this.hasLabelElement();
  }

  /**
   * @returns the `conformance` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link ConformanceExpectationEnum }
   */
  public getConformanceEnumType(): EnumCodeType[] {
    return this.conformance ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `conformance` property.
   *
   * @param enumType - the `conformance` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConformanceExpectationEnum }
   */
  public setConformanceEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Requirements.statement.conformance`;
      assertEnumCodeTypeList<ConformanceExpectationEnum>(enumType, ConformanceExpectationEnum, errMsgPrefix);
      this.conformance = enumType;
    } else {
      this.conformance = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `conformance` array property.
   *
   * @param enumType - the `conformance` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link ConformanceExpectationEnum }
   */
  public addConformanceEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Requirements.statement.conformance`;
      assertEnumCodeType<ConformanceExpectationEnum>(enumType, ConformanceExpectationEnum, errMsgPrefix);
      this.initConformance();
      this.conformance?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `conformance` property exists and has a value; `false` otherwise
   */
  public hasConformanceEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.conformance) && this.conformance.some((item: EnumCodeType) => !item.isEmpty()) && this.conformance.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `conformance` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link ConformanceExpectationEnum }
   */
  public getConformanceElement(): CodeType[] {
    if (this.conformance === undefined) {
      return [] as CodeType[];
    }
    return this.conformance as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `conformance` property.
   *
   * @param element - the `conformance` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConformanceExpectationEnum }
   */
  public setConformanceElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid Requirements.statement.conformance; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.conformanceExpectationEnum));
      });
      this.conformance = enumCodeTypes;
    } else {
      this.conformance = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `conformance` array property.
   *
   * @param element - the `conformance` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConformanceExpectationEnum }
   */
  public addConformanceElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Requirements.statement.conformance; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initConformance();
      this.conformance?.push(new EnumCodeType(element, this.conformanceExpectationEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `conformance` property exists and has a value; `false` otherwise
   */
  public hasConformanceElement(): boolean {
    return this.hasConformanceEnumType();
  }

  /**
   * @returns the `conformance` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link ConformanceExpectationEnum }
   */
  public getConformance(): fhirCode[] {
    if (this.conformance === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.conformance) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `conformance` property.
   *
   * @param value - the `conformance` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ConformanceExpectationEnum }
   */
  public setConformance(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid Requirements.statement.conformance; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.conformanceExpectationEnum));
      });
      this.conformance = enumCodeTypes;
    } else {
      this.conformance = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `conformance` array property.
   *
   * @param value - the `conformance` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ConformanceExpectationEnum }
   */
  public addConformance(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initConformance();
      const optErrMsg = `Invalid Requirements.statement.conformance; Provided value is not an instance of fhirCode.`;
      this.conformance?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.conformanceExpectationEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `conformance` property exists and has a value; `false` otherwise
   */
  public hasConformance(): boolean {
    return this.hasConformanceEnumType();
  }

  /**
   * Initialize the conformance property
   */
  private initConformance(): void {
    if(!this.hasConformanceEnumType()) {
      this.conformance = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `conditionality` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getConditionalityElement(): BooleanType {
    return this.conditionality ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `conditionality` property.
   *
   * @param element - the `conditionality` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConditionalityElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Requirements.statement.conditionality; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.conditionality = element;
    } else {
      this.conditionality = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conditionality` property exists and has a value; `false` otherwise
   */
  public hasConditionalityElement(): boolean {
    return isDefined<BooleanType>(this.conditionality) && !this.conditionality.isEmpty();
  }

  /**
   * @returns the `conditionality` property value as a fhirBoolean if defined; else undefined
   */
  public getConditionality(): fhirBoolean | undefined {
    return this.conditionality?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `conditionality` property.
   *
   * @param value - the `conditionality` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConditionality(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Requirements.statement.conditionality (${String(value)})`;
      this.conditionality = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.conditionality = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conditionality` property exists and has a value; `false` otherwise
   */
  public hasConditionality(): boolean {
    return this.hasConditionalityElement();
  }

  /**
   * @returns the `requirement` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getRequirementElement(): MarkdownType {
    return this.requirement ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `requirement` property.
   *
   * @param element - the `requirement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequirementElement(element: MarkdownType | undefined | null): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Requirements.statement.requirement; Provided value is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.requirement = element;
    } else {
      this.requirement = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `requirement` property exists and has a value; `false` otherwise
   */
  public hasRequirementElement(): boolean {
    return isDefined<MarkdownType>(this.requirement) && !this.requirement.isEmpty();
  }

  /**
   * @returns the `requirement` property value as a fhirMarkdown if defined; else null
   */
  public getRequirement(): fhirMarkdown | null {
    if (this.requirement?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.requirement.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `requirement` property.
   *
   * @param value - the `requirement` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequirement(value: fhirMarkdown | undefined | null): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Requirements.statement.requirement (${String(value)})`;
      this.requirement = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.requirement = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `requirement` property exists and has a value; `false` otherwise
   */
  public hasRequirement(): boolean {
    return this.hasRequirementElement();
  }

  /**
   * @returns the `derivedFrom` property value as a StringType object if defined; else an empty StringType object
   */
  public getDerivedFromElement(): StringType {
    return this.derivedFrom ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `derivedFrom` property.
   *
   * @param element - the `derivedFrom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDerivedFromElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Requirements.statement.derivedFrom; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.derivedFrom = element;
    } else {
      this.derivedFrom = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `derivedFrom` property exists and has a value; `false` otherwise
   */
  public hasDerivedFromElement(): boolean {
    return isDefined<StringType>(this.derivedFrom) && !this.derivedFrom.isEmpty();
  }

  /**
   * @returns the `derivedFrom` property value as a fhirString if defined; else undefined
   */
  public getDerivedFrom(): fhirString | undefined {
    return this.derivedFrom?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `derivedFrom` property.
   *
   * @param value - the `derivedFrom` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDerivedFrom(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Requirements.statement.derivedFrom (${String(value)})`;
      this.derivedFrom = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.derivedFrom = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `derivedFrom` property exists and has a value; `false` otherwise
   */
  public hasDerivedFrom(): boolean {
    return this.hasDerivedFromElement();
  }

  /**
   * @returns the `parent` property value as a StringType object if defined; else an empty StringType object
   */
  public getParentElement(): StringType {
    return this.parent ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `parent` property.
   *
   * @param element - the `parent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Requirements.statement.parent; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.parent = element;
    } else {
      this.parent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `parent` property exists and has a value; `false` otherwise
   */
  public hasParentElement(): boolean {
    return isDefined<StringType>(this.parent) && !this.parent.isEmpty();
  }

  /**
   * @returns the `parent` property value as a fhirString if defined; else undefined
   */
  public getParent(): fhirString | undefined {
    return this.parent?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `parent` property.
   *
   * @param value - the `parent` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParent(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Requirements.statement.parent (${String(value)})`;
      this.parent = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.parent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `parent` property exists and has a value; `false` otherwise
   */
  public hasParent(): boolean {
    return this.hasParentElement();
  }

  /**
   * @returns the `satisfiedBy` property value as a UrlType array
   */
  public getSatisfiedByElement(): UrlType[] {
    return this.satisfiedBy ?? ([] as UrlType[]);
  }

  /**
   * Assigns the provided UrlType array value to the `satisfiedBy` property.
   *
   * @param element - the `satisfiedBy` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSatisfiedByElement(element: UrlType[] | undefined): this {
    if (isDefinedList<UrlType>(element)) {
      const optErrMsg = `Invalid Requirements.statement.satisfiedBy; Provided value array has an element that is not an instance of UrlType.`;
      assertFhirTypeList<UrlType>(element, UrlType, optErrMsg);
      this.satisfiedBy = element;
    } else {
      this.satisfiedBy = undefined;
    }
    return this;
  }

  /**
   * Add the provided UrlType value to the `satisfiedBy` array property.
   *
   * @param element - the `satisfiedBy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSatisfiedByElement(element: UrlType | undefined): this {
    if (isDefined<UrlType>(element)) {
      const optErrMsg = `Invalid Requirements.statement.satisfiedBy; Provided element is not an instance of UrlType.`;
      assertFhirType<UrlType>(element, UrlType, optErrMsg);
      this.initSatisfiedBy();
      this.satisfiedBy?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `satisfiedBy` property exists and has a value; `false` otherwise
   */
  public hasSatisfiedByElement(): boolean {
    return isDefinedList<UrlType>(this.satisfiedBy) && this.satisfiedBy.some((item: UrlType) => !item.isEmpty());
  }

  /**
   * @returns the `satisfiedBy` property value as a fhirUrl array
   */
  public getSatisfiedBy(): fhirUrl[] {
    this.initSatisfiedBy();
    const satisfiedByValues = [] as fhirUrl[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.satisfiedBy!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        satisfiedByValues.push(value);
      }
    }
    return satisfiedByValues;
  }

  /**
   * Assigns the provided primitive value array to the `satisfiedBy` property.
   *
   * @param value - the `satisfiedBy` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSatisfiedBy(value: fhirUrl[] | undefined): this {
    if (isDefinedList<fhirUrl>(value)) {
      const satisfiedByElements = [] as UrlType[];
      for (const satisfiedByValue of value) {
        const optErrMsg = `Invalid Requirements.statement.satisfiedBy array item (${String(satisfiedByValue)})`;
        const element = new UrlType(parseFhirPrimitiveData(satisfiedByValue, fhirUrlSchema, optErrMsg));
        satisfiedByElements.push(element);
      }
      this.satisfiedBy = satisfiedByElements;
    } else {
      this.satisfiedBy = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `satisfiedBy` array property.
   *
   * @param value - the `satisfiedBy` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSatisfiedBy(value: fhirUrl | undefined): this {
    if (isDefined<fhirUrl>(value)) {
      const optErrMsg = `Invalid Requirements.statement.satisfiedBy array item (${String(value)})`;
      const element = new UrlType(parseFhirPrimitiveData(value, fhirUrlSchema, optErrMsg));
      this.initSatisfiedBy();
      this.addSatisfiedByElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `satisfiedBy` property exists and has a value; `false` otherwise
   */
  public hasSatisfiedBy(): boolean {
    return this.hasSatisfiedByElement();
  }

  /**
   * Initialize the `satisfiedBy` property
   */
  private initSatisfiedBy(): void {
    if (!this.hasSatisfiedBy()) {
      this.satisfiedBy = [] as UrlType[];
    }
  }

  /**
   * @returns the `reference` property value as a UrlType array
   */
  public getReferenceElement(): UrlType[] {
    return this.reference ?? ([] as UrlType[]);
  }

  /**
   * Assigns the provided UrlType array value to the `reference` property.
   *
   * @param element - the `reference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReferenceElement(element: UrlType[] | undefined): this {
    if (isDefinedList<UrlType>(element)) {
      const optErrMsg = `Invalid Requirements.statement.reference; Provided value array has an element that is not an instance of UrlType.`;
      assertFhirTypeList<UrlType>(element, UrlType, optErrMsg);
      this.reference = element;
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * Add the provided UrlType value to the `reference` array property.
   *
   * @param element - the `reference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addReferenceElement(element: UrlType | undefined): this {
    if (isDefined<UrlType>(element)) {
      const optErrMsg = `Invalid Requirements.statement.reference; Provided element is not an instance of UrlType.`;
      assertFhirType<UrlType>(element, UrlType, optErrMsg);
      this.initReference();
      this.reference?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReferenceElement(): boolean {
    return isDefinedList<UrlType>(this.reference) && this.reference.some((item: UrlType) => !item.isEmpty());
  }

  /**
   * @returns the `reference` property value as a fhirUrl array
   */
  public getReference(): fhirUrl[] {
    this.initReference();
    const referenceValues = [] as fhirUrl[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.reference!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        referenceValues.push(value);
      }
    }
    return referenceValues;
  }

  /**
   * Assigns the provided primitive value array to the `reference` property.
   *
   * @param value - the `reference` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReference(value: fhirUrl[] | undefined): this {
    if (isDefinedList<fhirUrl>(value)) {
      const referenceElements = [] as UrlType[];
      for (const referenceValue of value) {
        const optErrMsg = `Invalid Requirements.statement.reference array item (${String(referenceValue)})`;
        const element = new UrlType(parseFhirPrimitiveData(referenceValue, fhirUrlSchema, optErrMsg));
        referenceElements.push(element);
      }
      this.reference = referenceElements;
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `reference` array property.
   *
   * @param value - the `reference` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addReference(value: fhirUrl | undefined): this {
    if (isDefined<fhirUrl>(value)) {
      const optErrMsg = `Invalid Requirements.statement.reference array item (${String(value)})`;
      const element = new UrlType(parseFhirPrimitiveData(value, fhirUrlSchema, optErrMsg));
      this.initReference();
      this.addReferenceElement(element);
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
   * Initialize the `reference` property
   */
  private initReference(): void {
    if (!this.hasReference()) {
      this.reference = [] as UrlType[];
    }
  }

  /**
   * @returns the `source` property value as a Reference array
   */
  public getSource(): Reference[] {
    return this.source ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `source` property.
   *
   * @decorator `@ReferenceTargets('Requirements.statement.source', ['CareTeam','Device','Group','HealthcareService','Organization','Patient','Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Requirements.statement.source', [
    'CareTeam',
  
    'Device',
  
    'Group',
  
    'HealthcareService',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  ])
  public setSource(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `source` array property.
   *
   * @decorator `@ReferenceTargets('Requirements.statement.source', ['CareTeam','Device','Group','HealthcareService','Organization','Patient','Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Requirements.statement.source', [
    'CareTeam',
  
    'Device',
  
    'Group',
  
    'HealthcareService',
  
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  ])
  public addSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSource();
      this.source?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefinedList<Reference>(this.source) && this.source.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `source` property
   */
  private initSource(): void {
    if (!this.hasSource()) {
      this.source = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Requirements.statement';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.key,
      this.label,
      this.conformance,
      this.conditionality,
      this.requirement,
      this.derivedFrom,
      this.parent,
      this.satisfiedBy,
      this.reference,
      this.source,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.key, this.requirement, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RequirementsStatementComponent {
    const dest = new RequirementsStatementComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RequirementsStatementComponent): void {
    super.copyValues(dest);
    dest.key = this.key ? this.key.copy() : null;
    dest.label = this.label?.copy();
    const conformanceList = copyListValues<EnumCodeType>(this.conformance);
    dest.conformance = conformanceList.length === 0 ? undefined : conformanceList;
    dest.conditionality = this.conditionality?.copy();
    dest.requirement = this.requirement ? this.requirement.copy() : null;
    dest.derivedFrom = this.derivedFrom?.copy();
    dest.parent = this.parent?.copy();
    const satisfiedByList = copyListValues<UrlType>(this.satisfiedBy);
    dest.satisfiedBy = satisfiedByList.length === 0 ? undefined : satisfiedByList;
    const referenceList = copyListValues<UrlType>(this.reference);
    dest.reference = referenceList.length === 0 ? undefined : referenceList;
    const sourceList = copyListValues<Reference>(this.source);
    dest.source = sourceList.length === 0 ? undefined : sourceList;
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

    if (this.hasKeyElement()) {
      setFhirPrimitiveJson<fhirId>(this.getKeyElement(), 'key', jsonObj);
    }

    if (this.hasLabelElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLabelElement(), 'label', jsonObj);
    }

    if (this.hasConformanceElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getConformanceElement(), 'conformance', jsonObj);
    }

    if (this.hasConditionalityElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getConditionalityElement(), 'conditionality', jsonObj);
    }

    if (this.hasRequirementElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getRequirementElement(), 'requirement', jsonObj);
    }

    if (this.hasDerivedFromElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDerivedFromElement(), 'derivedFrom', jsonObj);
    }

    if (this.hasParentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getParentElement(), 'parent', jsonObj);
    }

    if (this.hasSatisfiedBy()) {
      setFhirPrimitiveListJson(this.getSatisfiedByElement(), 'satisfiedBy', jsonObj);
    }

    if (this.hasReference()) {
      setFhirPrimitiveListJson(this.getReferenceElement(), 'reference', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexListJson(this.getSource(), 'source', jsonObj);
    }

    return jsonObj;
  }
}
