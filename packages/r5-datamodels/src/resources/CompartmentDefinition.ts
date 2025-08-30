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
 * CompartmentDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/CompartmentDefinition
 * StructureDefinition.name: CompartmentDefinition
 * StructureDefinition.description: A compartment definition that defines how resources are accessed on a server.
 * StructureDefinition.fhirVersion: 5.0.0
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
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveType,
  PrimitiveTypeJson,
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
  fhirDateTime,
  fhirDateTimeSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
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
import { Coding, ContactDetail, PARSABLE_DATATYPE_MAP, UsageContext } from '../complex-types/complex-datatypes';
import { CompartmentTypeEnum } from '../code-systems/CompartmentTypeEnum';
import { FhirTypesEnum } from '../code-systems/FhirTypesEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * CompartmentDefinition Class
 *
 * @remarks
 * A compartment definition that defines how resources are accessed on a server.
 *
 * **FHIR Specification**
 * - **Short:** Compartment Definition for a resource
 * - **Definition:** A compartment definition that defines how resources are accessed on a server.
 * - **Comment:** In FHIR, search is not performed directly on a resource (by XML or JSON path), but on a named parameter that maps into the resource content.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR CompartmentDefinition](http://hl7.org/fhir/StructureDefinition/CompartmentDefinition)
 */
export class CompartmentDefinition extends DomainResource implements IDomainResource {
  constructor(url: UriType | fhirUri | null = null, name: StringType | fhirString | null = null, status: EnumCodeType | CodeType | fhirCode | null = null, code: EnumCodeType | CodeType | fhirCode | null = null, search: BooleanType | fhirBoolean | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.compartmentTypeEnum = new CompartmentTypeEnum();

    this.url = null;
    if (isDefined<UriType | fhirUri>(url)) {
      if (url instanceof PrimitiveType) {
        this.setUrlElement(url);
      } else {
        this.setUrl(url);
      }
    }

    this.name = null;
    if (isDefined<StringType | fhirString>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'CompartmentDefinition.status',
    );

    this.code = constructorCodeValueAsEnumCodeType<CompartmentTypeEnum>(
      code,
      CompartmentTypeEnum,
      this.compartmentTypeEnum,
      'CompartmentDefinition.code',
    );

    this.search = null;
    if (isDefined<BooleanType | fhirBoolean>(search)) {
      if (search instanceof PrimitiveType) {
        this.setSearchElement(search);
      } else {
        this.setSearch(search);
      }
    }
  }

  /**
   * Parse the provided `CompartmentDefinition` JSON to instantiate the CompartmentDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `CompartmentDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CompartmentDefinition
   * @returns CompartmentDefinition data model or undefined for `CompartmentDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): CompartmentDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CompartmentDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CompartmentDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'CompartmentDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = CompartmentDefinition[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for CompartmentDefinition`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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
      if (datatype === undefined) {
        instance.setName(null);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      instance.setName(null);
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

    fieldName = 'purpose';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setPurposeElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
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

    fieldName = 'search';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setSearch(null);
      } else {
        instance.setSearchElement(datatype);
      }
    } else {
      instance.setSearch(null);
    }

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CompartmentDefinitionResourceComponent | undefined = CompartmentDefinitionResourceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addResource(component);
        }
      });
    }

    return instance;
  }

  /**
   * CompartmentDefinition.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this compartment definition, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this compartment definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this compartment definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the compartment definition is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the compartment definition to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url: UriType | null;

  /**
   * CompartmentDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the compartment definition
   * - **Definition:** The identifier that is used to identify this version of the compartment definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the compartment definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different compartment definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the compartment definition with the format [url]|[version]. The version SHOULD NOT contain a \'#\' - see [Business Version](https://hl7.org/fhir/resource.html#bv-format).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * CompartmentDefinition.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('CompartmentDefinition.versionAlgorithm[x]', ['string','Coding',]`
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
  @ChoiceDataTypesMeta('CompartmentDefinition.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * CompartmentDefinition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this compartment definition (computer friendly)
   * - **Definition:** A natural language name identifying the compartment definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.This is often the same as the code for the parameter, but does not need to be.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: StringType | null;

  /**
   * CompartmentDefinition.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this compartment definition (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the capability statement.
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
   * CompartmentDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this compartment definition. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of compartment definitions that are appropriate for use versus not. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
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
   * CompartmentDefinition.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this compartment definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of compartment definitions that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level compartment definition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * CompartmentDefinition.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the compartment definition was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the compartment definition changes.
   * - **Comment:** The date is often not tracked until the resource is published, but may be present on draft content. Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the compartment definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * CompartmentDefinition.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher/steward (organization or individual)
   * - **Definition:** The name of the organization or individual responsible for the release and ongoing maintenance of the compartment definition.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the compartment definition is the organization or individual primarily responsible for the maintenance and upkeep of the compartment definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the compartment definition. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the compartment definition.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * CompartmentDefinition.contact Element
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
   * CompartmentDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the compartment definition
   * - **Definition:** A free text natural language description of the compartment definition from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the compartment definition as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the compartment definition is presumed to be the predominant language in the place the compartment definition was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * CompartmentDefinition.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate compartment definition instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * CompartmentDefinition.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this compartment definition is defined
   * - **Definition:** Explanation of why this compartment definition is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the compartment definition. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this compartment definition.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * FHIR CodeSystem: CompartmentType
   *
   * @see {@link CompartmentTypeEnum }
   */
  private readonly compartmentTypeEnum: CompartmentTypeEnum;

  /**
   * CompartmentDefinition.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient | Encounter | RelatedPerson | Practitioner | Device | EpisodeOfCare
   * - **Definition:** Which compartment this definition describes.
   * - **Comment:** Only the specification can define the compartments that can exist. Servers can choose to support them.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link CompartmentTypeEnum }
   */
  private code: EnumCodeType | null;

  /**
   * CompartmentDefinition.search Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the search syntax is supported
   * - **Definition:** Whether the search syntax is supported,.
   * - **Comment:** Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private search: BooleanType | null;

  /**
   * CompartmentDefinition.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How a resource is related to the compartment
   * - **Definition:** Information about how a resource is related to the compartment.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resource?: CompartmentDefinitionResourceComponent[] | undefined;

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
  public setUrlElement(element: UriType | undefined | null): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid CompartmentDefinition.url; Provided value is not an instance of UriType.`;
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
      const optErrMsg = `Invalid CompartmentDefinition.url (${String(value)})`;
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
      const optErrMsg = `Invalid CompartmentDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CompartmentDefinition.version (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('CompartmentDefinition.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('CompartmentDefinition.versionAlgorithm[x]')
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
        `DataType mismatch for CompartmentDefinition.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
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
        `DataType mismatch for CompartmentDefinition.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
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
  public setNameElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CompartmentDefinition.name; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = null;
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
   * @returns the `name` property value as a fhirString if defined; else null
   */
  public getName(): fhirString | null {
    if (this.name?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.name.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CompartmentDefinition.name (${String(value)})`;
      this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.name = null;
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
      const optErrMsg = `Invalid CompartmentDefinition.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CompartmentDefinition.title (${String(value)})`;
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
      const errMsgPrefix = `Invalid CompartmentDefinition.status`;
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
      const optErrMsg = `Invalid CompartmentDefinition.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid CompartmentDefinition.status (${String(value)})`;
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
      const optErrMsg = `Invalid CompartmentDefinition.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid CompartmentDefinition.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid CompartmentDefinition.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid CompartmentDefinition.date (${String(value)})`;
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
      const optErrMsg = `Invalid CompartmentDefinition.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CompartmentDefinition.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid CompartmentDefinition.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid CompartmentDefinition.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid CompartmentDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid CompartmentDefinition.description (${String(value)})`;
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
      const optErrMsg = `Invalid CompartmentDefinition.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid CompartmentDefinition.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid CompartmentDefinition.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid CompartmentDefinition.purpose (${String(value)})`;
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
   * @returns the `code` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link CompartmentTypeEnum }
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
   * @see CodeSystem Enumeration: {@link CompartmentTypeEnum }
   */
  public setCodeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CompartmentDefinition.code`;
      assertEnumCodeType<CompartmentTypeEnum>(enumType, CompartmentTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link CompartmentTypeEnum }
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
   * @see CodeSystem Enumeration: {@link CompartmentTypeEnum }
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CompartmentDefinition.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = new EnumCodeType(element, this.compartmentTypeEnum);
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
   * @see CodeSystem Enumeration: {@link CompartmentTypeEnum }
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
   * @see CodeSystem Enumeration: {@link CompartmentTypeEnum }
   */
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CompartmentDefinition.code (${String(value)})`;
      this.code = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.compartmentTypeEnum);
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
   * @returns the `search` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getSearchElement(): BooleanType {
    return this.search ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `search` property.
   *
   * @param element - the `search` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSearchElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CompartmentDefinition.search; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.search = element;
    } else {
      this.search = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `search` property exists and has a value; `false` otherwise
   */
  public hasSearchElement(): boolean {
    return isDefined<BooleanType>(this.search) && !this.search.isEmpty();
  }

  /**
   * @returns the `search` property value as a fhirBoolean if defined; else null
   */
  public getSearch(): fhirBoolean | null {
    if (this.search?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.search.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `search` property.
   *
   * @param value - the `search` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSearch(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CompartmentDefinition.search (${String(value)})`;
      this.search = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.search = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `search` property exists and has a value; `false` otherwise
   */
  public hasSearch(): boolean {
    return this.hasSearchElement();
  }

  /**
   * @returns the `resource` property value as a CompartmentDefinitionResourceComponent array
   */
  public getResource(): CompartmentDefinitionResourceComponent[] {
    return this.resource ?? ([] as CompartmentDefinitionResourceComponent[]);
  }

  /**
   * Assigns the provided CompartmentDefinitionResourceComponent array value to the `resource` property.
   *
   * @param value - the `resource` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setResource(value: CompartmentDefinitionResourceComponent[] | undefined): this {
    if (isDefinedList<CompartmentDefinitionResourceComponent>(value)) {
      const optErrMsg = `Invalid CompartmentDefinition.resource; Provided value array has an element that is not an instance of CompartmentDefinitionResourceComponent.`;
      assertFhirTypeList<CompartmentDefinitionResourceComponent>(value, CompartmentDefinitionResourceComponent, optErrMsg);
      this.resource = value;
    } else {
      this.resource = undefined;
    }
    return this;
  }

  /**
   * Add the provided CompartmentDefinitionResourceComponent value to the `resource` array property.
   *
   * @param value - the `resource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addResource(value: CompartmentDefinitionResourceComponent | undefined): this {
    if (isDefined<CompartmentDefinitionResourceComponent>(value)) {
      const optErrMsg = `Invalid CompartmentDefinition.resource; Provided element is not an instance of CompartmentDefinitionResourceComponent.`;
      assertFhirType<CompartmentDefinitionResourceComponent>(value, CompartmentDefinitionResourceComponent, optErrMsg);
      this.initResource();
      this.resource?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return isDefinedList<CompartmentDefinitionResourceComponent>(this.resource) && this.resource.some((item: CompartmentDefinitionResourceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `resource` property
   */
  private initResource(): void {
    if(!this.hasResource()) {
      this.resource = [] as CompartmentDefinitionResourceComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CompartmentDefinition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.url,
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
      this.purpose,
      this.code,
      this.search,
      this.resource,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.url, this.name, this.status, this.code, this.search, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CompartmentDefinition {
    const dest = new CompartmentDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CompartmentDefinition): void {
    super.copyValues(dest);
    dest.url = this.url ? this.url.copy() : null;
    dest.version = this.version?.copy();
    dest.versionAlgorithm = this.versionAlgorithm?.copy() as IDataType;
    dest.name = this.name ? this.name.copy() : null;
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
    dest.purpose = this.purpose?.copy();
    dest.code = this.code ? this.code.copy() : null;
    dest.search = this.search ? this.search.copy() : null;
    const resourceList = copyListValues<CompartmentDefinitionResourceComponent>(this.resource);
    dest.resource = resourceList.length === 0 ? undefined : resourceList;
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
    } else {
      jsonObj['url'] = null;
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
    } else {
      jsonObj['name'] = null;
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

    if (this.hasPurposeElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getPurposeElement(), 'purpose', jsonObj);
    }

    if (this.hasCodeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement()!, 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasSearchElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getSearchElement(), 'search', jsonObj);
    } else {
      jsonObj['search'] = null;
    }

    if (this.hasResource()) {
      setFhirBackboneElementListJson(this.getResource(), 'resource', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * CompartmentDefinitionResourceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** How a resource is related to the compartment
 * - **Definition:** Information about how a resource is related to the compartment.
 *
 * @category Data Models: Resource
 * @see [FHIR CompartmentDefinition](http://hl7.org/fhir/StructureDefinition/CompartmentDefinition)
 */
export class CompartmentDefinitionResourceComponent extends BackboneElement implements IBackboneElement {
  constructor(code: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.fhirTypesEnum = new FhirTypesEnum();

    this.code = constructorCodeValueAsEnumCodeType<FhirTypesEnum>(
      code,
      FhirTypesEnum,
      this.fhirTypesEnum,
      'CompartmentDefinition.resource.code',
    );
  }

  /**
   * Parse the provided `CompartmentDefinitionResourceComponent` JSON to instantiate the CompartmentDefinitionResourceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CompartmentDefinitionResourceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CompartmentDefinitionResourceComponent
   * @returns CompartmentDefinitionResourceComponent data model or undefined for `CompartmentDefinitionResourceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CompartmentDefinitionResourceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CompartmentDefinitionResourceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CompartmentDefinitionResourceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
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

    fieldName = 'param';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addParamElement(datatype);
        }
      });
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    fieldName = 'startParam';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setStartParamElement(datatype);
    }

    fieldName = 'endParam';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setEndParamElement(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: FhirTypes
   *
   * @see {@link FhirTypesEnum }
   */
  private readonly fhirTypesEnum: FhirTypesEnum;

  /**
   * CompartmentDefinition.resource.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of resource type
   * - **Definition:** The name of a resource supported by the server.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  private code: EnumCodeType | null;

  /**
   * CompartmentDefinition.resource.param Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Search Parameter Name, or chained parameters
   * - **Definition:** The name of a search parameter that represents the link to the compartment. More than one may be listed because a resource may be linked to a compartment in more than one way,.
   * - **Comment:** If no search parameters are listed, then the resource is not linked to the compartment.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private param?: StringType[] | undefined;

  /**
   * CompartmentDefinition.resource.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional documentation about the resource and compartment
   * - **Definition:** Additional documentation about the resource and compartment.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: StringType | undefined;

  /**
   * CompartmentDefinition.resource.startParam Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Search Param for interpreting $everything.start
   * - **Definition:** Search Parameter for mapping requests made with $everything.start (e.g. on [Patient.$everything](https://hl7.org/fhir/patient-operation-everything.html)).
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private startParam?: UriType | undefined;

  /**
   * CompartmentDefinition.resource.endParam Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Search Param for interpreting $everything.end
   * - **Definition:** Search Parameter for mapping requests made with $everything.end (e.g. on [Patient.$everything](https://hl7.org/fhir/patient-operation-everything.html)).
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private endParam?: UriType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
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
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public setCodeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CompartmentDefinition.resource.code`;
      assertEnumCodeType<FhirTypesEnum>(enumType, FhirTypesEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
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
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CompartmentDefinition.resource.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = new EnumCodeType(element, this.fhirTypesEnum);
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
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
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
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CompartmentDefinition.resource.code (${String(value)})`;
      this.code = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fhirTypesEnum);
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
   * @returns the `param` property value as a StringType array
   */
  public getParamElement(): StringType[] {
    return this.param ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `param` property.
   *
   * @param element - the `param` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParamElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid CompartmentDefinition.resource.param; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.param = element;
    } else {
      this.param = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `param` array property.
   *
   * @param element - the `param` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addParamElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CompartmentDefinition.resource.param; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initParam();
      this.param?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `param` property exists and has a value; `false` otherwise
   */
  public hasParamElement(): boolean {
    return isDefinedList<StringType>(this.param) && this.param.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `param` property value as a fhirString array
   */
  public getParam(): fhirString[] {
    this.initParam();
    const paramValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.param!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        paramValues.push(value);
      }
    }
    return paramValues;
  }

  /**
   * Assigns the provided primitive value array to the `param` property.
   *
   * @param value - the `param` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParam(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const paramElements = [] as StringType[];
      for (const paramValue of value) {
        const optErrMsg = `Invalid CompartmentDefinition.resource.param array item (${String(paramValue)})`;
        const element = new StringType(parseFhirPrimitiveData(paramValue, fhirStringSchema, optErrMsg));
        paramElements.push(element);
      }
      this.param = paramElements;
    } else {
      this.param = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `param` array property.
   *
   * @param value - the `param` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addParam(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CompartmentDefinition.resource.param array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initParam();
      this.addParamElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `param` property exists and has a value; `false` otherwise
   */
  public hasParam(): boolean {
    return this.hasParamElement();
  }

  /**
   * Initialize the `param` property
   */
  private initParam(): void {
    if (!this.hasParam()) {
      this.param = [] as StringType[];
    }
  }

  /**
   * @returns the `documentation` property value as a StringType object if defined; else an empty StringType object
   */
  public getDocumentationElement(): StringType {
    return this.documentation ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `documentation` property.
   *
   * @param element - the `documentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CompartmentDefinition.resource.documentation; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.documentation = element;
    } else {
      this.documentation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `documentation` property exists and has a value; `false` otherwise
   */
  public hasDocumentationElement(): boolean {
    return isDefined<StringType>(this.documentation) && !this.documentation.isEmpty();
  }

  /**
   * @returns the `documentation` property value as a fhirString if defined; else undefined
   */
  public getDocumentation(): fhirString | undefined {
    return this.documentation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `documentation` property.
   *
   * @param value - the `documentation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CompartmentDefinition.resource.documentation (${String(value)})`;
      this.documentation = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.documentation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `documentation` property exists and has a value; `false` otherwise
   */
  public hasDocumentation(): boolean {
    return this.hasDocumentationElement();
  }

  /**
   * @returns the `startParam` property value as a UriType object if defined; else an empty UriType object
   */
  public getStartParamElement(): UriType {
    return this.startParam ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `startParam` property.
   *
   * @param element - the `startParam` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStartParamElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid CompartmentDefinition.resource.startParam; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.startParam = element;
    } else {
      this.startParam = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `startParam` property exists and has a value; `false` otherwise
   */
  public hasStartParamElement(): boolean {
    return isDefined<UriType>(this.startParam) && !this.startParam.isEmpty();
  }

  /**
   * @returns the `startParam` property value as a fhirUri if defined; else undefined
   */
  public getStartParam(): fhirUri | undefined {
    return this.startParam?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `startParam` property.
   *
   * @param value - the `startParam` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStartParam(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid CompartmentDefinition.resource.startParam (${String(value)})`;
      this.startParam = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.startParam = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `startParam` property exists and has a value; `false` otherwise
   */
  public hasStartParam(): boolean {
    return this.hasStartParamElement();
  }

  /**
   * @returns the `endParam` property value as a UriType object if defined; else an empty UriType object
   */
  public getEndParamElement(): UriType {
    return this.endParam ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `endParam` property.
   *
   * @param element - the `endParam` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEndParamElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid CompartmentDefinition.resource.endParam; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.endParam = element;
    } else {
      this.endParam = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `endParam` property exists and has a value; `false` otherwise
   */
  public hasEndParamElement(): boolean {
    return isDefined<UriType>(this.endParam) && !this.endParam.isEmpty();
  }

  /**
   * @returns the `endParam` property value as a fhirUri if defined; else undefined
   */
  public getEndParam(): fhirUri | undefined {
    return this.endParam?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `endParam` property.
   *
   * @param value - the `endParam` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEndParam(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid CompartmentDefinition.resource.endParam (${String(value)})`;
      this.endParam = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.endParam = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `endParam` property exists and has a value; `false` otherwise
   */
  public hasEndParam(): boolean {
    return this.hasEndParamElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CompartmentDefinition.resource';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.param,
      this.documentation,
      this.startParam,
      this.endParam,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CompartmentDefinitionResourceComponent {
    const dest = new CompartmentDefinitionResourceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CompartmentDefinitionResourceComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    const paramList = copyListValues<StringType>(this.param);
    dest.param = paramList.length === 0 ? undefined : paramList;
    dest.documentation = this.documentation?.copy();
    dest.startParam = this.startParam?.copy();
    dest.endParam = this.endParam?.copy();
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

    if (this.hasParam()) {
      setFhirPrimitiveListJson(this.getParamElement(), 'param', jsonObj);
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    if (this.hasStartParamElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getStartParamElement(), 'startParam', jsonObj);
    }

    if (this.hasEndParamElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getEndParamElement(), 'endParam', jsonObj);
    }

    return jsonObj;
  }
}
