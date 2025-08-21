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
 * GraphDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/GraphDefinition
 * StructureDefinition.name: GraphDefinition
 * StructureDefinition.description: A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  BooleanType,
  CanonicalType,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  IntegerType,
  JSON,
  MarkdownType,
  PrimitiveType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
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
  fhirCanonical,
  fhirCanonicalSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirInteger,
  fhirIntegerSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
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
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, ContactDetail, PARSABLE_DATATYPE_MAP, UsageContext } from '../complex-types/complex-datatypes';
import { CompartmentTypeEnum } from '../code-systems/CompartmentTypeEnum';
import { GraphCompartmentRuleEnum } from '../code-systems/GraphCompartmentRuleEnum';
import { GraphCompartmentUseEnum } from '../code-systems/GraphCompartmentUseEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { ResourceTypesEnum } from '../code-systems/ResourceTypesEnum';

/**
 * GraphDefinition Class
 *
 * @remarks
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 *
 * **FHIR Specification**
 * - **Short:** Definition of a graph of resources
 * - **Definition:** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR GraphDefinition](http://hl7.org/fhir/StructureDefinition/GraphDefinition)
 */
export class GraphDefinition extends DomainResource implements IDomainResource {
  constructor(name: StringType | fhirString | null = null, status: EnumCodeType | CodeType | fhirCode | null = null, start: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.resourceTypesEnum = new ResourceTypesEnum();

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
      'GraphDefinition.status',
    );

    this.start = constructorCodeValueAsEnumCodeType<ResourceTypesEnum>(
      start,
      ResourceTypesEnum,
      this.resourceTypesEnum,
      'GraphDefinition.start',
    );
  }

  /**
   * Parse the provided `GraphDefinition` JSON to instantiate the GraphDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `GraphDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GraphDefinition
   * @returns GraphDefinition data model or undefined for `GraphDefinition`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): GraphDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GraphDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GraphDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'GraphDefinition');
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
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'start';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStartElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'profile';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setProfileElement(datatype);
    }

    fieldName = 'link';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: GraphDefinitionLinkComponent | undefined = GraphDefinitionLinkComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addLink(component);
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
   * GraphDefinition.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this graph definition, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this graph definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this graph definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the graph definition is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the graph definition to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * GraphDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the graph definition
   * - **Definition:** The identifier that is used to identify this version of the graph definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the graph definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the graph definition with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * GraphDefinition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this graph definition (computer friendly)
   * - **Definition:** A natural language name identifying the graph definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: StringType | null;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * GraphDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this graph definition. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of graph definitions that are appropriate for use versus not.
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
   * GraphDefinition.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this graph definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of graph definitions that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level graph definition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * GraphDefinition.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the graph definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the graph definition changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * GraphDefinition.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the graph definition.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the graph definition.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * GraphDefinition.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact details for the publisher
   * - **Definition:** Contact details to assist a user in finding and communicating with the publisher.
   * - **Comment:** May be a web site, an email address, a telephone number, etc.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contact?: ContactDetail[] | undefined;

  /**
   * GraphDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the graph definition
   * - **Definition:** A free text natural language description of the graph definition from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the graph definition is presumed to be the predominant language in the place the graph definition was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * GraphDefinition.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate graph definition instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * GraphDefinition.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for graph definition (if applicable)
   * - **Definition:** A legal or geographic region in which the graph definition is intended to be used.
   * - **Comment:** It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * GraphDefinition.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this graph definition is defined
   * - **Definition:** Explanation of why this graph definition is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the graph definition. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * FHIR CodeSystem: ResourceTypes
   *
   * @see {@link ResourceTypesEnum }
   */
  private readonly resourceTypesEnum: ResourceTypesEnum;

  /**
   * GraphDefinition.start Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of resource at which the graph starts
   * - **Definition:** The type of FHIR resource at which instances of this graph start.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  private start: EnumCodeType | null;

  /**
   * GraphDefinition.profile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Profile on base resource
   * - **Definition:** The profile that describes the use of the base resource.
   * - **Comment:** The code does not include the \'$\' prefix that is always included in the URL when the operation is invoked.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private profile?: CanonicalType | undefined;

  /**
   * GraphDefinition.link Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Links this graph makes rules about
   * - **Definition:** Links this graph makes rules about.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private link?: GraphDefinitionLinkComponent[] | undefined;

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
      const optErrMsg = `Invalid GraphDefinition.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid GraphDefinition.url (${String(value)})`;
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
      const optErrMsg = `Invalid GraphDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid GraphDefinition.version (${String(value)})`;
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
   * @returns the `name` property value as a StringType object if defined; else null
   */
  public getNameElement(): StringType | null {
    return this.name;
  }

  /**
   * Assigns the provided PrimitiveType value to the `name` property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType): this {
    assertIsDefined<StringType>(element, `GraphDefinition.name is required`);
    const optErrMsg = `Invalid GraphDefinition.name; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.name = element;
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
  public setName(value: fhirString): this {
    assertIsDefined<fhirString>(value, `GraphDefinition.name is required`);
    const optErrMsg = `Invalid GraphDefinition.name (${String(value)})`;
    this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `GraphDefinition.status is required`);
    const errMsgPrefix = `Invalid GraphDefinition.status`;
    assertEnumCodeType<PublicationStatusEnum>(enumType, PublicationStatusEnum, errMsgPrefix);
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
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `GraphDefinition.status is required`);
    const optErrMsg = `Invalid GraphDefinition.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.publicationStatusEnum);
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
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `GraphDefinition.status is required`);
    const optErrMsg = `Invalid GraphDefinition.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.publicationStatusEnum);
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
      const optErrMsg = `Invalid GraphDefinition.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid GraphDefinition.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid GraphDefinition.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid GraphDefinition.date (${String(value)})`;
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
      const optErrMsg = `Invalid GraphDefinition.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid GraphDefinition.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid GraphDefinition.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid GraphDefinition.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid GraphDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid GraphDefinition.description (${String(value)})`;
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
      const optErrMsg = `Invalid GraphDefinition.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid GraphDefinition.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid GraphDefinition.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid GraphDefinition.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid GraphDefinition.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid GraphDefinition.purpose (${String(value)})`;
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
   * @returns the `start` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getStartEnumType(): EnumCodeType | null {
    return this.start;
  }

  /**
   * Assigns the provided EnumCodeType value to the `start` property.
   *
   * @param enumType - the `start` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setStartEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `GraphDefinition.start is required`);
    const errMsgPrefix = `Invalid GraphDefinition.start`;
    assertEnumCodeType<ResourceTypesEnum>(enumType, ResourceTypesEnum, errMsgPrefix);
    this.start = enumType;
    return this;
  }

  /**
   * @returns `true` if the `start` property exists and has a value; `false` otherwise
   */
  public hasStartEnumType(): boolean {
    return isDefined<EnumCodeType>(this.start) && !this.start.isEmpty() && this.start.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `start` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getStartElement(): CodeType | null {
    if (this.start === null) {
      return null;
    }
    return this.start as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `start` property.
   *
   * @param element - the `start` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setStartElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `GraphDefinition.start is required`);
    const optErrMsg = `Invalid GraphDefinition.start; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.start = new EnumCodeType(element, this.resourceTypesEnum);
    return this;
  }

  /**
   * @returns `true` if the `start` property exists and has a value; `false` otherwise
   */
  public hasStartElement(): boolean {
    return this.hasStartEnumType();
  }

  /**
   * @returns the `start` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getStart(): fhirCode | null {
    if (this.start === null) {
      return null;
    }
    return this.start.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `start` property.
   *
   * @param value - the `start` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setStart(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `GraphDefinition.start is required`);
    const optErrMsg = `Invalid GraphDefinition.start (${String(value)})`;
    this.start = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.resourceTypesEnum);
    return this;
  }

  /**
   * @returns `true` if the `start` property exists and has a value; `false` otherwise
   */
  public hasStart(): boolean {
    return this.hasStartEnumType();
  }

  /**
   * @returns the `profile` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getProfileElement(): CanonicalType {
    return this.profile ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `profile` property.
   *
   * @param element - the `profile` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProfileElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid GraphDefinition.profile; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.profile = element;
    } else {
      this.profile = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfileElement(): boolean {
    return isDefined<CanonicalType>(this.profile) && !this.profile.isEmpty();
  }

  /**
   * @returns the `profile` property value as a fhirCanonical if defined; else undefined
   */
  public getProfile(): fhirCanonical | undefined {
    return this.profile?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `profile` property.
   *
   * @param value - the `profile` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProfile(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid GraphDefinition.profile (${String(value)})`;
      this.profile = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.profile = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfile(): boolean {
    return this.hasProfileElement();
  }

  /**
   * @returns the `link` property value as a GraphDefinitionLinkComponent array
   */
  public getLink(): GraphDefinitionLinkComponent[] {
    return this.link ?? ([] as GraphDefinitionLinkComponent[]);
  }

  /**
   * Assigns the provided GraphDefinitionLinkComponent array value to the `link` property.
   *
   * @param value - the `link` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLink(value: GraphDefinitionLinkComponent[] | undefined): this {
    if (isDefinedList<GraphDefinitionLinkComponent>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link; Provided value array has an element that is not an instance of GraphDefinitionLinkComponent.`;
      assertFhirTypeList<GraphDefinitionLinkComponent>(value, GraphDefinitionLinkComponent, optErrMsg);
      this.link = value;
    } else {
      this.link = undefined;
    }
    return this;
  }

  /**
   * Add the provided GraphDefinitionLinkComponent value to the `link` array property.
   *
   * @param value - the `link` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLink(value: GraphDefinitionLinkComponent | undefined): this {
    if (isDefined<GraphDefinitionLinkComponent>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link; Provided element is not an instance of GraphDefinitionLinkComponent.`;
      assertFhirType<GraphDefinitionLinkComponent>(value, GraphDefinitionLinkComponent, optErrMsg);
      this.initLink();
      this.link?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `link` property exists and has a value; `false` otherwise
   */
  public hasLink(): boolean {
    return isDefinedList<GraphDefinitionLinkComponent>(this.link) && this.link.some((item: GraphDefinitionLinkComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `link` property
   */
  private initLink(): void {
    if(!this.hasLink()) {
      this.link = [] as GraphDefinitionLinkComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'GraphDefinition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.url,
      this.version,
      this.name,
      this.status,
      this.experimental,
      this.date,
      this.publisher,
      this.contact,
      this.description,
      this.useContext,
      this.jurisdiction,
      this.purpose,
      this.start,
      this.profile,
      this.link,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GraphDefinition {
    const dest = new GraphDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GraphDefinition): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    dest.version = this.version?.copy();
    dest.name = this.name ? this.name.copy() : null;
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
    dest.start = this.start ? this.start.copy() : null;
    dest.profile = this.profile?.copy();
    const linkList = copyListValues<GraphDefinitionLinkComponent>(this.link);
    dest.link = linkList.length === 0 ? undefined : linkList;
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

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasNameElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`GraphDefinition.name`);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`GraphDefinition.status`);
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

    if (this.hasStartElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStartElement()!, 'start', jsonObj);
    } else {
      missingReqdProperties.push(`GraphDefinition.start`);
    }

    if (this.hasProfileElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getProfileElement(), 'profile', jsonObj);
    }

    if (this.hasLink()) {
      setFhirBackboneElementListJson(this.getLink(), 'link', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * GraphDefinitionLinkComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Links this graph makes rules about
 * - **Definition:** Links this graph makes rules about.
 *
 * @category Data Models: Resource
 * @see [FHIR GraphDefinition](http://hl7.org/fhir/StructureDefinition/GraphDefinition)
 */
export class GraphDefinitionLinkComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `GraphDefinitionLinkComponent` JSON to instantiate the GraphDefinitionLinkComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `GraphDefinitionLinkComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GraphDefinitionLinkComponent
   * @returns GraphDefinitionLinkComponent data model or undefined for `GraphDefinitionLinkComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): GraphDefinitionLinkComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GraphDefinitionLinkComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GraphDefinitionLinkComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'path';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPathElement(datatype);
    }

    fieldName = 'sliceName';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSliceNameElement(datatype);
    }

    fieldName = 'min';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setMinElement(datatype);
    }

    fieldName = 'max';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMaxElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: GraphDefinitionLinkTargetComponent | undefined = GraphDefinitionLinkTargetComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTarget(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * GraphDefinition.link.path Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Path in the resource that contains the link
   * - **Definition:** A FHIR expression that identifies one of FHIR References to other resources.
   * - **Comment:** The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private path?: StringType | undefined;

  /**
   * GraphDefinition.link.sliceName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Which slice (if profiled)
   * - **Definition:** Which slice (if profiled).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sliceName?: StringType | undefined;

  /**
   * GraphDefinition.link.min Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Minimum occurrences for this link
   * - **Definition:** Minimum occurrences for this link.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private min?: IntegerType | undefined;

  /**
   * GraphDefinition.link.max Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Maximum occurrences for this link
   * - **Definition:** Maximum occurrences for this link.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private max?: StringType | undefined;

  /**
   * GraphDefinition.link.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this link is specified
   * - **Definition:** Information about why this link is of interest in this graph definition.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * GraphDefinition.link.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Potential target for the link
   * - **Definition:** Potential target for the link.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private target?: GraphDefinitionLinkTargetComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `path` property value as a StringType object if defined; else an empty StringType object
   */
  public getPathElement(): StringType {
    return this.path ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `path` property.
   *
   * @param element - the `path` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPathElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid GraphDefinition.link.path; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.path = element;
    } else {
      this.path = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `path` property exists and has a value; `false` otherwise
   */
  public hasPathElement(): boolean {
    return isDefined<StringType>(this.path) && !this.path.isEmpty();
  }

  /**
   * @returns the `path` property value as a fhirString if defined; else undefined
   */
  public getPath(): fhirString | undefined {
    return this.path?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `path` property.
   *
   * @param value - the `path` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPath(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link.path (${String(value)})`;
      this.path = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.path = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `path` property exists and has a value; `false` otherwise
   */
  public hasPath(): boolean {
    return this.hasPathElement();
  }

  /**
   * @returns the `sliceName` property value as a StringType object if defined; else an empty StringType object
   */
  public getSliceNameElement(): StringType {
    return this.sliceName ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sliceName` property.
   *
   * @param element - the `sliceName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSliceNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid GraphDefinition.link.sliceName; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.sliceName = element;
    } else {
      this.sliceName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sliceName` property exists and has a value; `false` otherwise
   */
  public hasSliceNameElement(): boolean {
    return isDefined<StringType>(this.sliceName) && !this.sliceName.isEmpty();
  }

  /**
   * @returns the `sliceName` property value as a fhirString if defined; else undefined
   */
  public getSliceName(): fhirString | undefined {
    return this.sliceName?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `sliceName` property.
   *
   * @param value - the `sliceName` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSliceName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link.sliceName (${String(value)})`;
      this.sliceName = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.sliceName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sliceName` property exists and has a value; `false` otherwise
   */
  public hasSliceName(): boolean {
    return this.hasSliceNameElement();
  }

  /**
   * @returns the `min` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getMinElement(): IntegerType {
    return this.min ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `min` property.
   *
   * @param element - the `min` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMinElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid GraphDefinition.link.min; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.min = element;
    } else {
      this.min = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `min` property exists and has a value; `false` otherwise
   */
  public hasMinElement(): boolean {
    return isDefined<IntegerType>(this.min) && !this.min.isEmpty();
  }

  /**
   * @returns the `min` property value as a fhirInteger if defined; else undefined
   */
  public getMin(): fhirInteger | undefined {
    return this.min?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `min` property.
   *
   * @param value - the `min` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMin(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link.min (${String(value)})`;
      this.min = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.min = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `min` property exists and has a value; `false` otherwise
   */
  public hasMin(): boolean {
    return this.hasMinElement();
  }

  /**
   * @returns the `max` property value as a StringType object if defined; else an empty StringType object
   */
  public getMaxElement(): StringType {
    return this.max ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `max` property.
   *
   * @param element - the `max` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMaxElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid GraphDefinition.link.max; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.max = element;
    } else {
      this.max = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `max` property exists and has a value; `false` otherwise
   */
  public hasMaxElement(): boolean {
    return isDefined<StringType>(this.max) && !this.max.isEmpty();
  }

  /**
   * @returns the `max` property value as a fhirString if defined; else undefined
   */
  public getMax(): fhirString | undefined {
    return this.max?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `max` property.
   *
   * @param value - the `max` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMax(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link.max (${String(value)})`;
      this.max = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.max = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `max` property exists and has a value; `false` otherwise
   */
  public hasMax(): boolean {
    return this.hasMaxElement();
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
      const optErrMsg = `Invalid GraphDefinition.link.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid GraphDefinition.link.description (${String(value)})`;
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
   * @returns the `target` property value as a GraphDefinitionLinkTargetComponent array
   */
  public getTarget(): GraphDefinitionLinkTargetComponent[] {
    return this.target ?? ([] as GraphDefinitionLinkTargetComponent[]);
  }

  /**
   * Assigns the provided GraphDefinitionLinkTargetComponent array value to the `target` property.
   *
   * @param value - the `target` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTarget(value: GraphDefinitionLinkTargetComponent[] | undefined): this {
    if (isDefinedList<GraphDefinitionLinkTargetComponent>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link.target; Provided value array has an element that is not an instance of GraphDefinitionLinkTargetComponent.`;
      assertFhirTypeList<GraphDefinitionLinkTargetComponent>(value, GraphDefinitionLinkTargetComponent, optErrMsg);
      this.target = value;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * Add the provided GraphDefinitionLinkTargetComponent value to the `target` array property.
   *
   * @param value - the `target` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTarget(value: GraphDefinitionLinkTargetComponent | undefined): this {
    if (isDefined<GraphDefinitionLinkTargetComponent>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link.target; Provided element is not an instance of GraphDefinitionLinkTargetComponent.`;
      assertFhirType<GraphDefinitionLinkTargetComponent>(value, GraphDefinitionLinkTargetComponent, optErrMsg);
      this.initTarget();
      this.target?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return isDefinedList<GraphDefinitionLinkTargetComponent>(this.target) && this.target.some((item: GraphDefinitionLinkTargetComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `target` property
   */
  private initTarget(): void {
    if(!this.hasTarget()) {
      this.target = [] as GraphDefinitionLinkTargetComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'GraphDefinition.link';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.path,
      this.sliceName,
      this.min,
      this.max,
      this.description,
      this.target,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GraphDefinitionLinkComponent {
    const dest = new GraphDefinitionLinkComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GraphDefinitionLinkComponent): void {
    super.copyValues(dest);
    dest.path = this.path?.copy();
    dest.sliceName = this.sliceName?.copy();
    dest.min = this.min?.copy();
    dest.max = this.max?.copy();
    dest.description = this.description?.copy();
    const targetList = copyListValues<GraphDefinitionLinkTargetComponent>(this.target);
    dest.target = targetList.length === 0 ? undefined : targetList;
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

    if (this.hasPathElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPathElement(), 'path', jsonObj);
    }

    if (this.hasSliceNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSliceNameElement(), 'sliceName', jsonObj);
    }

    if (this.hasMinElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getMinElement(), 'min', jsonObj);
    }

    if (this.hasMaxElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMaxElement(), 'max', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasTarget()) {
      setFhirBackboneElementListJson(this.getTarget(), 'target', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * GraphDefinitionLinkTargetComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Potential target for the link
 * - **Definition:** Potential target for the link.
 *
 * @category Data Models: Resource
 * @see [FHIR GraphDefinition](http://hl7.org/fhir/StructureDefinition/GraphDefinition)
 */
export class GraphDefinitionLinkTargetComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.resourceTypesEnum = new ResourceTypesEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<ResourceTypesEnum>(
      type_,
      ResourceTypesEnum,
      this.resourceTypesEnum,
      'GraphDefinition.link.target.type',
    );
  }

  /**
   * Parse the provided `GraphDefinitionLinkTargetComponent` JSON to instantiate the GraphDefinitionLinkTargetComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `GraphDefinitionLinkTargetComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GraphDefinitionLinkTargetComponent
   * @returns GraphDefinitionLinkTargetComponent data model or undefined for `GraphDefinitionLinkTargetComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): GraphDefinitionLinkTargetComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GraphDefinitionLinkTargetComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GraphDefinitionLinkTargetComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'params';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setParamsElement(datatype);
    }

    fieldName = 'profile';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setProfileElement(datatype);
    }

    fieldName = 'compartment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: GraphDefinitionLinkTargetCompartmentComponent | undefined = GraphDefinitionLinkTargetCompartmentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCompartment(component);
        }
      });
    }

    fieldName = 'link';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: GraphDefinitionLinkComponent | undefined = GraphDefinitionLinkComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addLink(component);
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
   * FHIR CodeSystem: ResourceTypes
   *
   * @see {@link ResourceTypesEnum }
   */
  private readonly resourceTypesEnum: ResourceTypesEnum;

  /**
   * GraphDefinition.link.target.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of resource this link refers to
   * - **Definition:** Type of resource this link refers to.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * GraphDefinition.link.target.params Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Criteria for reverse lookup
   * - **Definition:** A set of parameters to look up.
   * - **Comment:** At least one of the parameters must have the value {ref} which identifies the focus resource.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private params?: StringType | undefined;

  /**
   * GraphDefinition.link.target.profile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Profile for the target resource
   * - **Definition:** Profile for the target resource.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private profile?: CanonicalType | undefined;

  /**
   * GraphDefinition.link.target.compartment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Compartment Consistency Rules
   * - **Definition:** Compartment Consistency Rules.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private compartment?: GraphDefinitionLinkTargetCompartmentComponent[] | undefined;

  /**
   * GraphDefinition.link.target.link Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional links from target resource
   * - **Definition:** Additional links from target resource.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private link?: GraphDefinitionLinkComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
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
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `GraphDefinition.link.target.type is required`);
    const errMsgPrefix = `Invalid GraphDefinition.link.target.type`;
    assertEnumCodeType<ResourceTypesEnum>(enumType, ResourceTypesEnum, errMsgPrefix);
    this.type_ = enumType;
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
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
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
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setTypeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `GraphDefinition.link.target.type is required`);
    const optErrMsg = `Invalid GraphDefinition.link.target.type; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.type_ = new EnumCodeType(element, this.resourceTypesEnum);
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
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
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
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setType(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `GraphDefinition.link.target.type is required`);
    const optErrMsg = `Invalid GraphDefinition.link.target.type (${String(value)})`;
    this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.resourceTypesEnum);
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `params` property value as a StringType object if defined; else an empty StringType object
   */
  public getParamsElement(): StringType {
    return this.params ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `params` property.
   *
   * @param element - the `params` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParamsElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid GraphDefinition.link.target.params; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.params = element;
    } else {
      this.params = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `params` property exists and has a value; `false` otherwise
   */
  public hasParamsElement(): boolean {
    return isDefined<StringType>(this.params) && !this.params.isEmpty();
  }

  /**
   * @returns the `params` property value as a fhirString if defined; else undefined
   */
  public getParams(): fhirString | undefined {
    return this.params?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `params` property.
   *
   * @param value - the `params` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParams(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link.target.params (${String(value)})`;
      this.params = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.params = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `params` property exists and has a value; `false` otherwise
   */
  public hasParams(): boolean {
    return this.hasParamsElement();
  }

  /**
   * @returns the `profile` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getProfileElement(): CanonicalType {
    return this.profile ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `profile` property.
   *
   * @param element - the `profile` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProfileElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid GraphDefinition.link.target.profile; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.profile = element;
    } else {
      this.profile = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfileElement(): boolean {
    return isDefined<CanonicalType>(this.profile) && !this.profile.isEmpty();
  }

  /**
   * @returns the `profile` property value as a fhirCanonical if defined; else undefined
   */
  public getProfile(): fhirCanonical | undefined {
    return this.profile?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `profile` property.
   *
   * @param value - the `profile` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProfile(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link.target.profile (${String(value)})`;
      this.profile = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.profile = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfile(): boolean {
    return this.hasProfileElement();
  }

  /**
   * @returns the `compartment` property value as a GraphDefinitionLinkTargetCompartmentComponent array
   */
  public getCompartment(): GraphDefinitionLinkTargetCompartmentComponent[] {
    return this.compartment ?? ([] as GraphDefinitionLinkTargetCompartmentComponent[]);
  }

  /**
   * Assigns the provided GraphDefinitionLinkTargetCompartmentComponent array value to the `compartment` property.
   *
   * @param value - the `compartment` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCompartment(value: GraphDefinitionLinkTargetCompartmentComponent[] | undefined): this {
    if (isDefinedList<GraphDefinitionLinkTargetCompartmentComponent>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link.target.compartment; Provided value array has an element that is not an instance of GraphDefinitionLinkTargetCompartmentComponent.`;
      assertFhirTypeList<GraphDefinitionLinkTargetCompartmentComponent>(value, GraphDefinitionLinkTargetCompartmentComponent, optErrMsg);
      this.compartment = value;
    } else {
      this.compartment = undefined;
    }
    return this;
  }

  /**
   * Add the provided GraphDefinitionLinkTargetCompartmentComponent value to the `compartment` array property.
   *
   * @param value - the `compartment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCompartment(value: GraphDefinitionLinkTargetCompartmentComponent | undefined): this {
    if (isDefined<GraphDefinitionLinkTargetCompartmentComponent>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link.target.compartment; Provided element is not an instance of GraphDefinitionLinkTargetCompartmentComponent.`;
      assertFhirType<GraphDefinitionLinkTargetCompartmentComponent>(value, GraphDefinitionLinkTargetCompartmentComponent, optErrMsg);
      this.initCompartment();
      this.compartment?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `compartment` property exists and has a value; `false` otherwise
   */
  public hasCompartment(): boolean {
    return isDefinedList<GraphDefinitionLinkTargetCompartmentComponent>(this.compartment) && this.compartment.some((item: GraphDefinitionLinkTargetCompartmentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `compartment` property
   */
  private initCompartment(): void {
    if(!this.hasCompartment()) {
      this.compartment = [] as GraphDefinitionLinkTargetCompartmentComponent[];
    }
  }

  /**
   * @returns the `link` property value as a GraphDefinitionLinkComponent array
   */
  public getLink(): GraphDefinitionLinkComponent[] {
    return this.link ?? ([] as GraphDefinitionLinkComponent[]);
  }

  /**
   * Assigns the provided GraphDefinitionLinkComponent array value to the `link` property.
   *
   * @param value - the `link` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLink(value: GraphDefinitionLinkComponent[] | undefined): this {
    if (isDefinedList<GraphDefinitionLinkComponent>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link.target.link; Provided value array has an element that is not an instance of GraphDefinitionLinkComponent.`;
      assertFhirTypeList<GraphDefinitionLinkComponent>(value, GraphDefinitionLinkComponent, optErrMsg);
      this.link = value;
    } else {
      this.link = undefined;
    }
    return this;
  }

  /**
   * Add the provided GraphDefinitionLinkComponent value to the `link` array property.
   *
   * @param value - the `link` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLink(value: GraphDefinitionLinkComponent | undefined): this {
    if (isDefined<GraphDefinitionLinkComponent>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link.target.link; Provided element is not an instance of GraphDefinitionLinkComponent.`;
      assertFhirType<GraphDefinitionLinkComponent>(value, GraphDefinitionLinkComponent, optErrMsg);
      this.initLink();
      this.link?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `link` property exists and has a value; `false` otherwise
   */
  public hasLink(): boolean {
    return isDefinedList<GraphDefinitionLinkComponent>(this.link) && this.link.some((item: GraphDefinitionLinkComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `link` property
   */
  private initLink(): void {
    if(!this.hasLink()) {
      this.link = [] as GraphDefinitionLinkComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'GraphDefinition.link.target';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.params,
      this.profile,
      this.compartment,
      this.link,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GraphDefinitionLinkTargetComponent {
    const dest = new GraphDefinitionLinkTargetComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GraphDefinitionLinkTargetComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.params = this.params?.copy();
    dest.profile = this.profile?.copy();
    const compartmentList = copyListValues<GraphDefinitionLinkTargetCompartmentComponent>(this.compartment);
    dest.compartment = compartmentList.length === 0 ? undefined : compartmentList;
    const linkList = copyListValues<GraphDefinitionLinkComponent>(this.link);
    dest.link = linkList.length === 0 ? undefined : linkList;
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`GraphDefinition.link.target.type`);
    }

    if (this.hasParamsElement()) {
      setFhirPrimitiveJson<fhirString>(this.getParamsElement(), 'params', jsonObj);
    }

    if (this.hasProfileElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getProfileElement(), 'profile', jsonObj);
    }

    if (this.hasCompartment()) {
      setFhirBackboneElementListJson(this.getCompartment(), 'compartment', jsonObj);
    }

    if (this.hasLink()) {
      setFhirBackboneElementListJson(this.getLink(), 'link', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * GraphDefinitionLinkTargetCompartmentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Compartment Consistency Rules
 * - **Definition:** Compartment Consistency Rules.
 *
 * @category Data Models: Resource
 * @see [FHIR GraphDefinition](http://hl7.org/fhir/StructureDefinition/GraphDefinition)
 */
export class GraphDefinitionLinkTargetCompartmentComponent extends BackboneElement implements IBackboneElement {
  constructor(use: EnumCodeType | CodeType | fhirCode | null = null, code: EnumCodeType | CodeType | fhirCode | null = null, rule: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.graphCompartmentUseEnum = new GraphCompartmentUseEnum();
    this.compartmentTypeEnum = new CompartmentTypeEnum();
    this.graphCompartmentRuleEnum = new GraphCompartmentRuleEnum();

    this.use = constructorCodeValueAsEnumCodeType<GraphCompartmentUseEnum>(
      use,
      GraphCompartmentUseEnum,
      this.graphCompartmentUseEnum,
      'GraphDefinition.link.target.compartment.use',
    );

    this.code = constructorCodeValueAsEnumCodeType<CompartmentTypeEnum>(
      code,
      CompartmentTypeEnum,
      this.compartmentTypeEnum,
      'GraphDefinition.link.target.compartment.code',
    );

    this.rule = constructorCodeValueAsEnumCodeType<GraphCompartmentRuleEnum>(
      rule,
      GraphCompartmentRuleEnum,
      this.graphCompartmentRuleEnum,
      'GraphDefinition.link.target.compartment.rule',
    );
  }

  /**
   * Parse the provided `GraphDefinitionLinkTargetCompartmentComponent` JSON to instantiate the GraphDefinitionLinkTargetCompartmentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `GraphDefinitionLinkTargetCompartmentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GraphDefinitionLinkTargetCompartmentComponent
   * @returns GraphDefinitionLinkTargetCompartmentComponent data model or undefined for `GraphDefinitionLinkTargetCompartmentComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): GraphDefinitionLinkTargetCompartmentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GraphDefinitionLinkTargetCompartmentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GraphDefinitionLinkTargetCompartmentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'use';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setUseElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCodeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'rule';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setRuleElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setExpressionElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * FHIR CodeSystem: GraphCompartmentUse
   *
   * @see {@link GraphCompartmentUseEnum }
   */
  private readonly graphCompartmentUseEnum: GraphCompartmentUseEnum;

  /**
   * GraphDefinition.link.target.compartment.use Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** condition | requirement
   * - **Definition:** Defines how the compartment rule is used - whether it it is used to test whether resources are subject to the rule, or whether it is a rule that must be followed.
   * - **Comment:** All conditional rules are evaluated; if they are true, then the rules are evaluated.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentUseEnum }
   */
  private use: EnumCodeType | null;

  /**
   * FHIR CodeSystem: CompartmentType
   *
   * @see {@link CompartmentTypeEnum }
   */
  private readonly compartmentTypeEnum: CompartmentTypeEnum;

  /**
   * GraphDefinition.link.target.compartment.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient | Encounter | RelatedPerson | Practitioner | Device
   * - **Definition:** Identifies the compartment.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link CompartmentTypeEnum }
   */
  private code: EnumCodeType | null;

  /**
   * FHIR CodeSystem: GraphCompartmentRule
   *
   * @see {@link GraphCompartmentRuleEnum }
   */
  private readonly graphCompartmentRuleEnum: GraphCompartmentRuleEnum;

  /**
   * GraphDefinition.link.target.compartment.rule Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** identical | matching | different | custom
   * - **Definition:** identical | matching | different | no-rule | custom.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentRuleEnum }
   */
  private rule: EnumCodeType | null;

  /**
   * GraphDefinition.link.target.compartment.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Custom rule, as a FHIRPath expression
   * - **Definition:** Custom rule, as a FHIRPath expression.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expression?: StringType | undefined;

  /**
   * GraphDefinition.link.target.compartment.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Documentation for FHIRPath expression
   * - **Definition:** Documentation for FHIRPath expression.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `use` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentUseEnum }
   */
  public getUseEnumType(): EnumCodeType | null {
    return this.use;
  }

  /**
   * Assigns the provided EnumCodeType value to the `use` property.
   *
   * @param enumType - the `use` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentUseEnum }
   */
  public setUseEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `GraphDefinition.link.target.compartment.use is required`);
    const errMsgPrefix = `Invalid GraphDefinition.link.target.compartment.use`;
    assertEnumCodeType<GraphCompartmentUseEnum>(enumType, GraphCompartmentUseEnum, errMsgPrefix);
    this.use = enumType;
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUseEnumType(): boolean {
    return isDefined<EnumCodeType>(this.use) && !this.use.isEmpty() && this.use.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `use` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentUseEnum }
   */
  public getUseElement(): CodeType | null {
    if (this.use === null) {
      return null;
    }
    return this.use as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `use` property.
   *
   * @param element - the `use` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentUseEnum }
   */
  public setUseElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `GraphDefinition.link.target.compartment.use is required`);
    const optErrMsg = `Invalid GraphDefinition.link.target.compartment.use; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.use = new EnumCodeType(element, this.graphCompartmentUseEnum);
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUseElement(): boolean {
    return this.hasUseEnumType();
  }

  /**
   * @returns the `use` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentUseEnum }
   */
  public getUse(): fhirCode | null {
    if (this.use === null) {
      return null;
    }
    return this.use.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `use` property.
   *
   * @param value - the `use` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentUseEnum }
   */
  public setUse(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `GraphDefinition.link.target.compartment.use is required`);
    const optErrMsg = `Invalid GraphDefinition.link.target.compartment.use (${String(value)})`;
    this.use = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.graphCompartmentUseEnum);
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUse(): boolean {
    return this.hasUseEnumType();
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
  public setCodeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `GraphDefinition.link.target.compartment.code is required`);
    const errMsgPrefix = `Invalid GraphDefinition.link.target.compartment.code`;
    assertEnumCodeType<CompartmentTypeEnum>(enumType, CompartmentTypeEnum, errMsgPrefix);
    this.code = enumType;
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
  public setCodeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `GraphDefinition.link.target.compartment.code is required`);
    const optErrMsg = `Invalid GraphDefinition.link.target.compartment.code; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.code = new EnumCodeType(element, this.compartmentTypeEnum);
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
  public setCode(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `GraphDefinition.link.target.compartment.code is required`);
    const optErrMsg = `Invalid GraphDefinition.link.target.compartment.code (${String(value)})`;
    this.code = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.compartmentTypeEnum);
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return this.hasCodeEnumType();
  }

  /**
   * @returns the `rule` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentRuleEnum }
   */
  public getRuleEnumType(): EnumCodeType | null {
    return this.rule;
  }

  /**
   * Assigns the provided EnumCodeType value to the `rule` property.
   *
   * @param enumType - the `rule` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentRuleEnum }
   */
  public setRuleEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `GraphDefinition.link.target.compartment.rule is required`);
    const errMsgPrefix = `Invalid GraphDefinition.link.target.compartment.rule`;
    assertEnumCodeType<GraphCompartmentRuleEnum>(enumType, GraphCompartmentRuleEnum, errMsgPrefix);
    this.rule = enumType;
    return this;
  }

  /**
   * @returns `true` if the `rule` property exists and has a value; `false` otherwise
   */
  public hasRuleEnumType(): boolean {
    return isDefined<EnumCodeType>(this.rule) && !this.rule.isEmpty() && this.rule.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `rule` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentRuleEnum }
   */
  public getRuleElement(): CodeType | null {
    if (this.rule === null) {
      return null;
    }
    return this.rule as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `rule` property.
   *
   * @param element - the `rule` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentRuleEnum }
   */
  public setRuleElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `GraphDefinition.link.target.compartment.rule is required`);
    const optErrMsg = `Invalid GraphDefinition.link.target.compartment.rule; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.rule = new EnumCodeType(element, this.graphCompartmentRuleEnum);
    return this;
  }

  /**
   * @returns `true` if the `rule` property exists and has a value; `false` otherwise
   */
  public hasRuleElement(): boolean {
    return this.hasRuleEnumType();
  }

  /**
   * @returns the `rule` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentRuleEnum }
   */
  public getRule(): fhirCode | null {
    if (this.rule === null) {
      return null;
    }
    return this.rule.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `rule` property.
   *
   * @param value - the `rule` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link GraphCompartmentRuleEnum }
   */
  public setRule(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `GraphDefinition.link.target.compartment.rule is required`);
    const optErrMsg = `Invalid GraphDefinition.link.target.compartment.rule (${String(value)})`;
    this.rule = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.graphCompartmentRuleEnum);
    return this;
  }

  /**
   * @returns `true` if the `rule` property exists and has a value; `false` otherwise
   */
  public hasRule(): boolean {
    return this.hasRuleEnumType();
  }

  /**
   * @returns the `expression` property value as a StringType object if defined; else an empty StringType object
   */
  public getExpressionElement(): StringType {
    return this.expression ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `expression` property.
   *
   * @param element - the `expression` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpressionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid GraphDefinition.link.target.compartment.expression; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.expression = element;
    } else {
      this.expression = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpressionElement(): boolean {
    return isDefined<StringType>(this.expression) && !this.expression.isEmpty();
  }

  /**
   * @returns the `expression` property value as a fhirString if defined; else undefined
   */
  public getExpression(): fhirString | undefined {
    return this.expression?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `expression` property.
   *
   * @param value - the `expression` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpression(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid GraphDefinition.link.target.compartment.expression (${String(value)})`;
      this.expression = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.expression = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpression(): boolean {
    return this.hasExpressionElement();
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
      const optErrMsg = `Invalid GraphDefinition.link.target.compartment.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid GraphDefinition.link.target.compartment.description (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'GraphDefinition.link.target.compartment';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.use,
      this.code,
      this.rule,
      this.expression,
      this.description,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GraphDefinitionLinkTargetCompartmentComponent {
    const dest = new GraphDefinitionLinkTargetCompartmentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GraphDefinitionLinkTargetCompartmentComponent): void {
    super.copyValues(dest);
    dest.use = this.use ? this.use.copy() : null;
    dest.code = this.code ? this.code.copy() : null;
    dest.rule = this.rule ? this.rule.copy() : null;
    dest.expression = this.expression?.copy();
    dest.description = this.description?.copy();
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

    if (this.hasUseElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getUseElement()!, 'use', jsonObj);
    } else {
      missingReqdProperties.push(`GraphDefinition.link.target.compartment.use`);
    }

    if (this.hasCodeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`GraphDefinition.link.target.compartment.code`);
    }

    if (this.hasRuleElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getRuleElement()!, 'rule', jsonObj);
    } else {
      missingReqdProperties.push(`GraphDefinition.link.target.compartment.rule`);
    }

    if (this.hasExpressionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getExpressionElement(), 'expression', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
