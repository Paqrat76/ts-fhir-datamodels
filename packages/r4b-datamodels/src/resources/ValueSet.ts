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
 * ValueSet Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ValueSet
 * StructureDefinition.name: ValueSet
 * StructureDefinition.description: A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](https://hl7.org/fhir/terminologies.html).
 * StructureDefinition.fhirVersion: 4.3.0
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
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DateType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  IntegerType,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveType,
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  StringType,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  assertIsDefinedList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCanonical,
  fhirCanonicalSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDate,
  fhirDateSchema,
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
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, UsageContext } from '../complex-types/complex-datatypes';
import { FilterOperatorEnum } from '../code-systems/FilterOperatorEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ValueSet Class
 *
 * @remarks
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](https://hl7.org/fhir/terminologies.html).
 *
 * **FHIR Specification**
 * - **Short:** A set of codes drawn from one or more code systems
 * - **Definition:** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](https://hl7.org/fhir/codesystem.html) definitions and their use in [coded elements](https://hl7.org/fhir/terminologies.html).
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR ValueSet](http://hl7.org/fhir/StructureDefinition/ValueSet)
 */
export class ValueSet extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'ValueSet.status',
    );
  }

  /**
   * Parse the provided `ValueSet` JSON to instantiate the ValueSet data model.
   *
   * @param sourceJson - JSON representing FHIR `ValueSet`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ValueSet
   * @returns ValueSet data model or undefined for `ValueSet`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ValueSet | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ValueSet';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ValueSet();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ValueSet');
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

    fieldName = 'immutable';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setImmutableElement(datatype);
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

    fieldName = 'compose';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ValueSetComposeComponent | undefined = ValueSetComposeComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCompose(component);
    }

    fieldName = 'expansion';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ValueSetExpansionComponent | undefined = ValueSetExpansionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setExpansion(component);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ValueSet.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this value set, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this value set when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this value set is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the value set is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the value set to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * ValueSet.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the value set (business identifier)
   * - **Definition:** A formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this value set outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * ValueSet.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the value set
   * - **Definition:** The identifier that is used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the value set author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different value set instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the value set with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * ValueSet.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this value set (computer friendly)
   * - **Definition:** A natural language name identifying the value set. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.A name should be provided unless the value set is a contained resource (e.g. an anonymous value set in a profile). Most registries will require a name.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * ValueSet.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this value set (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the value set.
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
   * ValueSet.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this value set. Enables tracking the life-cycle of the content. The status of the value set applies to the value set definition (ValueSet.compose) and the associated ValueSet metadata. Expansions do not have a state.
   * - **Comment:** Allows filtering of value sets that are appropriate for use versus not.See also the [valueset-workflowStatus](https://hl7.org/fhir/extension-valueset-workflowstatus.html) extension for additional status information related to the editorial process.
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
   * ValueSet.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this value set is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of value sets that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level value set.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * ValueSet.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date (and optionally time) when the value set was created or revised (e.g. the \'content logical definition\').
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the value set. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * ValueSet.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the value set.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the value set is the organization or individual primarily responsible for the maintenance and upkeep of the value set. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the value set. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the value set.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * ValueSet.contact Element
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
   * ValueSet.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the value set
   * - **Definition:** A free text natural language description of the value set from a consumer\'s perspective. The textual description specifies the span of meanings for concepts to be included within the Value Set Expansion, and also may specify the intended use and limitations of the Value Set.
   * - **Comment:** This description can be used to capture details such as why the value set was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the value set as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the value set is presumed to be the predominant language in the place the value set was created).The description is not intended to describe the semantics of the Value Set - there are no intrinsic semantics separate from the codes contained in its expansion. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes. A description should be provided unless the value set is a contained resource (e.g. an anonymous value set in a profile). Most registries will require a description.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * ValueSet.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate value set instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * ValueSet.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for value set (if applicable)
   * - **Definition:** A legal or geographic region in which the value set is intended to be used.
   * - **Comment:** It may be possible for the value set to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * ValueSet.immutable Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates whether or not any change to the content logical definition may occur
   * - **Definition:** If this is set to \'true\', then no new versions of the content logical definition can be created.  Note: Other metadata might still change.
   * - **Comment:** Normally immutability is set to \'false\', which is the default assumption if it is not populated.  Note that the implication is that if this is set to \'true\', there may be only one ValueSet version for this definition. Immutability tends to be set to \'true\' in one of two cases: - Where the value set, by the nature of its usage, cannot change.  For example "All specializations of ACT in ActClassCode" - Where there\'s no safe way to express the "Purpose" such that someone else could safely make changes to the value set definition. Source workflow control must guarantee that the same URI always yields the same definition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private immutable?: BooleanType | undefined;

  /**
   * ValueSet.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this value set is defined
   * - **Definition:** Explanation of why this value set is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the value set. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this value set.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * ValueSet.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set.
   * - **Comment:** nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the value set and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * ValueSet.compose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Content logical definition of the value set (CLD)
   * - **Definition:** A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private compose?: ValueSetComposeComponent | undefined;

  /**
   * ValueSet.expansion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used when the value set is "expanded"
   * - **Definition:** A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.
   * - **Comment:** Expansion is performed to produce a collection of codes that are ready to use for data entry or validation. Value set expansions are always considered to be stateless - they are a record of the set of codes in the value set at a point in time under a given set of conditions, and are not subject to ongoing maintenance. Expansion.parameter is  a simplified list of parameters - a subset of the features of the [Parameters](https://hl7.org/fhir/parameters.html) resource.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expansion?: ValueSetExpansionComponent | undefined;

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
      const optErrMsg = `Invalid ValueSet.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid ValueSet.url (${String(value)})`;
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
      const optErrMsg = `Invalid ValueSet.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ValueSet.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ValueSet.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ValueSet.version (${String(value)})`;
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
      const optErrMsg = `Invalid ValueSet.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ValueSet.name (${String(value)})`;
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
      const optErrMsg = `Invalid ValueSet.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ValueSet.title (${String(value)})`;
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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `ValueSet.status is required`);
    const errMsgPrefix = `Invalid ValueSet.status`;
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
    assertIsDefined<CodeType>(element, `ValueSet.status is required`);
    const optErrMsg = `Invalid ValueSet.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `ValueSet.status is required`);
    const optErrMsg = `Invalid ValueSet.status (${String(value)})`;
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
      const optErrMsg = `Invalid ValueSet.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid ValueSet.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid ValueSet.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ValueSet.date (${String(value)})`;
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
      const optErrMsg = `Invalid ValueSet.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ValueSet.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid ValueSet.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ValueSet.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ValueSet.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ValueSet.description (${String(value)})`;
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
      const optErrMsg = `Invalid ValueSet.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ValueSet.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ValueSet.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ValueSet.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `immutable` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getImmutableElement(): BooleanType {
    return this.immutable ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `immutable` property.
   *
   * @param element - the `immutable` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setImmutableElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ValueSet.immutable; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.immutable = element;
    } else {
      this.immutable = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `immutable` property exists and has a value; `false` otherwise
   */
  public hasImmutableElement(): boolean {
    return isDefined<BooleanType>(this.immutable) && !this.immutable.isEmpty();
  }

  /**
   * @returns the `immutable` property value as a fhirBoolean if defined; else undefined
   */
  public getImmutable(): fhirBoolean | undefined {
    return this.immutable?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `immutable` property.
   *
   * @param value - the `immutable` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setImmutable(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ValueSet.immutable (${String(value)})`;
      this.immutable = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.immutable = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `immutable` property exists and has a value; `false` otherwise
   */
  public hasImmutable(): boolean {
    return this.hasImmutableElement();
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
      const optErrMsg = `Invalid ValueSet.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ValueSet.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid ValueSet.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ValueSet.copyright (${String(value)})`;
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
   * @returns the `compose` property value as a ValueSetComposeComponent object if defined; else an empty ValueSetComposeComponent object
   */
  public getCompose(): ValueSetComposeComponent {
    return this.compose ?? new ValueSetComposeComponent();
  }

  /**
   * Assigns the provided Compose object value to the `compose` property.
   *
   * @param value - the `compose` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCompose(value: ValueSetComposeComponent | undefined): this {
    if (isDefined<ValueSetComposeComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.compose; Provided element is not an instance of ValueSetComposeComponent.`;
      assertFhirType<ValueSetComposeComponent>(value, ValueSetComposeComponent, optErrMsg);
      this.compose = value;
    } else {
      this.compose = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `compose` property exists and has a value; `false` otherwise
   */
  public hasCompose(): boolean {
    return isDefined<ValueSetComposeComponent>(this.compose) && !this.compose.isEmpty();
  }

  /**
   * @returns the `expansion` property value as a ValueSetExpansionComponent object if defined; else an empty ValueSetExpansionComponent object
   */
  public getExpansion(): ValueSetExpansionComponent {
    return this.expansion ?? new ValueSetExpansionComponent();
  }

  /**
   * Assigns the provided Expansion object value to the `expansion` property.
   *
   * @param value - the `expansion` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExpansion(value: ValueSetExpansionComponent | undefined): this {
    if (isDefined<ValueSetExpansionComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion; Provided element is not an instance of ValueSetExpansionComponent.`;
      assertFhirType<ValueSetExpansionComponent>(value, ValueSetExpansionComponent, optErrMsg);
      this.expansion = value;
    } else {
      this.expansion = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expansion` property exists and has a value; `false` otherwise
   */
  public hasExpansion(): boolean {
    return isDefined<ValueSetExpansionComponent>(this.expansion) && !this.expansion.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ValueSet';
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
      this.immutable,
      this.purpose,
      this.copyright,
      this.compose,
      this.expansion,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ValueSet {
    const dest = new ValueSet();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ValueSet): void {
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
    dest.immutable = this.immutable?.copy();
    dest.purpose = this.purpose?.copy();
    dest.copyright = this.copyright?.copy();
    dest.compose = this.compose?.copy();
    dest.expansion = this.expansion?.copy();
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
      missingReqdProperties.push(`ValueSet.status`);
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

    if (this.hasImmutableElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getImmutableElement(), 'immutable', jsonObj);
    }

    if (this.hasPurposeElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getPurposeElement(), 'purpose', jsonObj);
    }

    if (this.hasCopyrightElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getCopyrightElement(), 'copyright', jsonObj);
    }

    if (this.hasCompose()) {
      setFhirBackboneElementJson(this.getCompose(), 'compose', jsonObj);
    }

    if (this.hasExpansion()) {
      setFhirBackboneElementJson(this.getExpansion(), 'expansion', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * ValueSetComposeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Content logical definition of the value set (CLD)
 * - **Definition:** A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD).
 *
 * @category Data Models: Resource
 * @see [FHIR ValueSet](http://hl7.org/fhir/StructureDefinition/ValueSet)
 */
export class ValueSetComposeComponent extends BackboneElement implements IBackboneElement {
  constructor(include: ValueSetComposeIncludeComponent[] | null = null) {
    super();

    this.include = null;
    if (isDefinedList<ValueSetComposeIncludeComponent>(include)) {
      this.setInclude(include);
    }
  }

  /**
   * Parse the provided `ValueSetComposeComponent` JSON to instantiate the ValueSetComposeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ValueSetComposeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ValueSetComposeComponent
   * @returns ValueSetComposeComponent data model or undefined for `ValueSetComposeComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ValueSetComposeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ValueSetComposeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ValueSetComposeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'lockedDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setLockedDateElement(datatype);
    }

    fieldName = 'inactive';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setInactiveElement(datatype);
    }

    fieldName = 'include';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ValueSetComposeIncludeComponent | undefined = ValueSetComposeIncludeComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addInclude(component);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'exclude';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ValueSetComposeIncludeComponent | undefined = ValueSetComposeIncludeComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addExclude(component);
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
   * ValueSet.compose.lockedDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fixed date for references with no specified version (transitive)
   * - **Definition:** The Locked Date is  the effective date that is used to determine the version of all referenced Code Systems and Value Set Definitions included in the compose that are not already tied to a specific version.
   * - **Comment:** With a defined lockedDate the value set is considered "Locked". Otherwise, the value set may have different expansions as underlying code systems and/or value sets evolve.  The interpretation of lockedDate is often dependent on the context - e.g. a SNOMED CT derived value set with a lockedDate will have a different expansion in USA than in UK.  If a value set specifies a version for include and exclude statements, and also specifies a locked date, the specified versions need to be available that date, or the value set will not be usable.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private lockedDate?: DateType | undefined;

  /**
   * ValueSet.compose.inactive Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether inactive codes are in the value set
   * - **Definition:** Whether inactive codes - codes that are not approved for current use - are in the value set. If inactive = true, inactive codes are to be included in the expansion, if inactive = false, the inactive codes will not be included in the expansion. If absent, the behavior is determined by the implementation, or by the applicable $expand parameters (but generally, inactive codes would be expected to be included).
   * - **Comment:** Note that in the FHIR terminology framework, "deprecated" does not mean inactive, but in some code systems, e.g. LOINC, "deprecated" does mean inactive. Code systems should define what codes are considered to be inactive. If this is not clearly defined (including in the FHIR code system resource), then all codes are assumed to be active. The Value Set Definition specification defines an ActiveOnly element, which is the reverse of this element e.g. (ValueSet.compose.inactive=FALSE) is the same as (VSD.ActiveOnly=TRUE).
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private inactive?: BooleanType | undefined;

  /**
   * ValueSet.compose.include Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Include one or more codes from a code system or other value set(s)
   * - **Definition:** Include one or more codes from a code system or other value set(s).
   * - **Comment:** All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is \'include all the codes that meet all these conditions\'.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private include: ValueSetComposeIncludeComponent[] | null;

  /**
   * ValueSet.compose.exclude Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Explicitly exclude codes from a code system or other value sets
   * - **Definition:** Exclude one or more codes from the value set based on code system filters and/or other value sets.
   * - **Comment:** Usually this is used to selectively exclude codes that were included by subsumption in the inclusions. Any display names specified for the codes are ignored.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private exclude?: ValueSetComposeIncludeComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `lockedDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getLockedDateElement(): DateType {
    return this.lockedDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lockedDate` property.
   *
   * @param element - the `lockedDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLockedDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid ValueSet.compose.lockedDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.lockedDate = element;
    } else {
      this.lockedDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lockedDate` property exists and has a value; `false` otherwise
   */
  public hasLockedDateElement(): boolean {
    return isDefined<DateType>(this.lockedDate) && !this.lockedDate.isEmpty();
  }

  /**
   * @returns the `lockedDate` property value as a fhirDate if defined; else undefined
   */
  public getLockedDate(): fhirDate | undefined {
    return this.lockedDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lockedDate` property.
   *
   * @param value - the `lockedDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLockedDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.lockedDate (${String(value)})`;
      this.lockedDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.lockedDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lockedDate` property exists and has a value; `false` otherwise
   */
  public hasLockedDate(): boolean {
    return this.hasLockedDateElement();
  }

  /**
   * @returns the `inactive` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getInactiveElement(): BooleanType {
    return this.inactive ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `inactive` property.
   *
   * @param element - the `inactive` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInactiveElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ValueSet.compose.inactive; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.inactive = element;
    } else {
      this.inactive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `inactive` property exists and has a value; `false` otherwise
   */
  public hasInactiveElement(): boolean {
    return isDefined<BooleanType>(this.inactive) && !this.inactive.isEmpty();
  }

  /**
   * @returns the `inactive` property value as a fhirBoolean if defined; else undefined
   */
  public getInactive(): fhirBoolean | undefined {
    return this.inactive?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `inactive` property.
   *
   * @param value - the `inactive` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInactive(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.inactive (${String(value)})`;
      this.inactive = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.inactive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `inactive` property exists and has a value; `false` otherwise
   */
  public hasInactive(): boolean {
    return this.hasInactiveElement();
  }

  /**
   * @returns the `include` property value as a ValueSetComposeIncludeComponent array
   */
  public getInclude(): ValueSetComposeIncludeComponent[] {
    return this.include ?? ([] as ValueSetComposeIncludeComponent[]);
  }

  /**
   * Assigns the provided ValueSetComposeIncludeComponent array value to the `include` property.
   *
   * @param value - the `include` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInclude(value: ValueSetComposeIncludeComponent[]): this {
    assertIsDefinedList<ValueSetComposeIncludeComponent>(value, `ValueSet.compose.include is required`);
    const optErrMsg = `Invalid ValueSet.compose.include; Provided value array has an element that is not an instance of ValueSetComposeIncludeComponent.`;
    assertFhirTypeList<ValueSetComposeIncludeComponent>(value, ValueSetComposeIncludeComponent, optErrMsg);
    this.include = value;
    return this;
  }

  /**
   * Add the provided ValueSetComposeIncludeComponent value to the `include` array property.
   *
   * @param value - the `include` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInclude(value: ValueSetComposeIncludeComponent | undefined): this {
    if (isDefined<ValueSetComposeIncludeComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.include; Provided element is not an instance of ValueSetComposeIncludeComponent.`;
      assertFhirType<ValueSetComposeIncludeComponent>(value, ValueSetComposeIncludeComponent, optErrMsg);
      this.initInclude();
      this.include?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `include` property exists and has a value; `false` otherwise
   */
  public hasInclude(): boolean {
    return isDefinedList<ValueSetComposeIncludeComponent>(this.include) && this.include.some((item: ValueSetComposeIncludeComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `include` property
   */
  private initInclude(): void {
    if(!this.hasInclude()) {
      this.include = [] as ValueSetComposeIncludeComponent[];
    }
  }

  /**
   * @returns the `exclude` property value as a ValueSetComposeIncludeComponent array
   */
  public getExclude(): ValueSetComposeIncludeComponent[] {
    return this.exclude ?? ([] as ValueSetComposeIncludeComponent[]);
  }

  /**
   * Assigns the provided ValueSetComposeIncludeComponent array value to the `exclude` property.
   *
   * @param value - the `exclude` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExclude(value: ValueSetComposeIncludeComponent[] | undefined): this {
    if (isDefinedList<ValueSetComposeIncludeComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.exclude; Provided value array has an element that is not an instance of ValueSetComposeIncludeComponent.`;
      assertFhirTypeList<ValueSetComposeIncludeComponent>(value, ValueSetComposeIncludeComponent, optErrMsg);
      this.exclude = value;
    } else {
      this.exclude = undefined;
    }
    return this;
  }

  /**
   * Add the provided ValueSetComposeIncludeComponent value to the `exclude` array property.
   *
   * @param value - the `exclude` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addExclude(value: ValueSetComposeIncludeComponent | undefined): this {
    if (isDefined<ValueSetComposeIncludeComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.exclude; Provided element is not an instance of ValueSetComposeIncludeComponent.`;
      assertFhirType<ValueSetComposeIncludeComponent>(value, ValueSetComposeIncludeComponent, optErrMsg);
      this.initExclude();
      this.exclude?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `exclude` property exists and has a value; `false` otherwise
   */
  public hasExclude(): boolean {
    return isDefinedList<ValueSetComposeIncludeComponent>(this.exclude) && this.exclude.some((item: ValueSetComposeIncludeComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `exclude` property
   */
  private initExclude(): void {
    if(!this.hasExclude()) {
      this.exclude = [] as ValueSetComposeIncludeComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ValueSet.compose';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.lockedDate,
      this.inactive,
      this.include,
      this.exclude,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ValueSetComposeComponent {
    const dest = new ValueSetComposeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ValueSetComposeComponent): void {
    super.copyValues(dest);
    dest.lockedDate = this.lockedDate?.copy();
    dest.inactive = this.inactive?.copy();
    const includeList = copyListValues<ValueSetComposeIncludeComponent>(this.include);
    dest.include = includeList.length === 0 ? null : includeList;
    const excludeList = copyListValues<ValueSetComposeIncludeComponent>(this.exclude);
    dest.exclude = excludeList.length === 0 ? undefined : excludeList;
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

    if (this.hasLockedDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getLockedDateElement(), 'lockedDate', jsonObj);
    }

    if (this.hasInactiveElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getInactiveElement(), 'inactive', jsonObj);
    }

    if (this.hasInclude()) {
      setFhirBackboneElementListJson(this.getInclude(), 'include', jsonObj);
    } else {
      missingReqdProperties.push(`ValueSet.compose.include`);
    }

    if (this.hasExclude()) {
      setFhirBackboneElementListJson(this.getExclude(), 'exclude', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ValueSetComposeIncludeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Include one or more codes from a code system or other value set(s)
 * - **Definition:** Include one or more codes from a code system or other value set(s).
 * - **Comment:** All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is \'include all the codes that meet all these conditions\'.
 *
 * @category Data Models: Resource
 * @see [FHIR ValueSet](http://hl7.org/fhir/StructureDefinition/ValueSet)
 */
export class ValueSetComposeIncludeComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ValueSetComposeIncludeComponent` JSON to instantiate the ValueSetComposeIncludeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ValueSetComposeIncludeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ValueSetComposeIncludeComponent
   * @returns ValueSetComposeIncludeComponent data model or undefined for `ValueSetComposeIncludeComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ValueSetComposeIncludeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ValueSetComposeIncludeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ValueSetComposeIncludeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'system';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setSystemElement(datatype);
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
    }

    fieldName = 'concept';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ValueSetComposeIncludeConceptComponent | undefined = ValueSetComposeIncludeConceptComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addConcept(component);
        }
      });
    }

    fieldName = 'filter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ValueSetComposeIncludeFilterComponent | undefined = ValueSetComposeIncludeFilterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addFilter(component);
        }
      });
    }

    fieldName = 'valueSet';
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
        const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addValueSetElement(datatype);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ValueSet.compose.include.system Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The system the codes come from
   * - **Definition:** An absolute URI which is the code system from which the selected codes come from.
   * - **Comment:** If there are no codes or filters, the entire code system is included. Note that the set of codes that are included may contain abstract codes. See \'\'Coding.system\'\' for further documentation about the correct value for the system element.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private system?: UriType | undefined;

  /**
   * ValueSet.compose.include.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific version of the code system referred to
   * - **Definition:** The version of the code system that the codes are selected from, or the special version \'*\' for all versions.
   * - **Comment:** This is used when selecting the descendants of a concept - they may change between versions. If no version is specified, then the exact contents of the value set might not be known until a context of use binds it to a particular version. The special value \'*\' means all versions; It is at server discretion regarding expansions and which versions must be supported.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * ValueSet.compose.include.concept Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A concept defined in the system
   * - **Definition:** Specifies a concept to be included or excluded.
   * - **Comment:** The list of concepts is considered ordered, though the order might not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private concept?: ValueSetComposeIncludeConceptComponent[] | undefined;

  /**
   * ValueSet.compose.include.filter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Select codes/concepts by their properties (including relationships)
   * - **Definition:** Select concepts by specify a matching criterion based on the properties (including relationships) defined by the system, or on filters defined by the system. If multiple filters are specified, they SHALL all be true.
   * - **Comment:** Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private filter?: ValueSetComposeIncludeFilterComponent[] | undefined;

  /**
   * ValueSet.compose.include.valueSet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Select the contents included in this value set
   * - **Definition:** Selects the concepts found in this value set (based on its value set definition). This is an absolute URI that is a reference to ValueSet.url.  If multiple value sets are specified this includes the union of the contents of all of the referenced value sets.
   * - **Comment:** The value set URI is either a logical reference to a defined value set such as a [SNOMED CT reference set](https://hl7.org/fhir/snomedct.html#implicit), or a direct reference to a value set definition using ValueSet.url. The reference might not refer to an actual FHIR ValueSet resource; in this case, whatever is referred to is an implicit definition of a value set that needs to be clear about how versions are resolved.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ValueSet',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private valueSet?: CanonicalType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `system` property value as a UriType object if defined; else an empty UriType object
   */
  public getSystemElement(): UriType {
    return this.system ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `system` property.
   *
   * @param element - the `system` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSystemElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid ValueSet.compose.include.system; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.system = element;
    } else {
      this.system = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `system` property exists and has a value; `false` otherwise
   */
  public hasSystemElement(): boolean {
    return isDefined<UriType>(this.system) && !this.system.isEmpty();
  }

  /**
   * @returns the `system` property value as a fhirUri if defined; else undefined
   */
  public getSystem(): fhirUri | undefined {
    return this.system?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `system` property.
   *
   * @param value - the `system` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSystem(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.include.system (${String(value)})`;
      this.system = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.system = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `system` property exists and has a value; `false` otherwise
   */
  public hasSystem(): boolean {
    return this.hasSystemElement();
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
      const optErrMsg = `Invalid ValueSet.compose.include.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ValueSet.compose.include.version (${String(value)})`;
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
   * @returns the `concept` property value as a ValueSetComposeIncludeConceptComponent array
   */
  public getConcept(): ValueSetComposeIncludeConceptComponent[] {
    return this.concept ?? ([] as ValueSetComposeIncludeConceptComponent[]);
  }

  /**
   * Assigns the provided ValueSetComposeIncludeConceptComponent array value to the `concept` property.
   *
   * @param value - the `concept` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConcept(value: ValueSetComposeIncludeConceptComponent[] | undefined): this {
    if (isDefinedList<ValueSetComposeIncludeConceptComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.include.concept; Provided value array has an element that is not an instance of ValueSetComposeIncludeConceptComponent.`;
      assertFhirTypeList<ValueSetComposeIncludeConceptComponent>(value, ValueSetComposeIncludeConceptComponent, optErrMsg);
      this.concept = value;
    } else {
      this.concept = undefined;
    }
    return this;
  }

  /**
   * Add the provided ValueSetComposeIncludeConceptComponent value to the `concept` array property.
   *
   * @param value - the `concept` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addConcept(value: ValueSetComposeIncludeConceptComponent | undefined): this {
    if (isDefined<ValueSetComposeIncludeConceptComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.include.concept; Provided element is not an instance of ValueSetComposeIncludeConceptComponent.`;
      assertFhirType<ValueSetComposeIncludeConceptComponent>(value, ValueSetComposeIncludeConceptComponent, optErrMsg);
      this.initConcept();
      this.concept?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `concept` property exists and has a value; `false` otherwise
   */
  public hasConcept(): boolean {
    return isDefinedList<ValueSetComposeIncludeConceptComponent>(this.concept) && this.concept.some((item: ValueSetComposeIncludeConceptComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `concept` property
   */
  private initConcept(): void {
    if(!this.hasConcept()) {
      this.concept = [] as ValueSetComposeIncludeConceptComponent[];
    }
  }

  /**
   * @returns the `filter` property value as a ValueSetComposeIncludeFilterComponent array
   */
  public getFilter(): ValueSetComposeIncludeFilterComponent[] {
    return this.filter ?? ([] as ValueSetComposeIncludeFilterComponent[]);
  }

  /**
   * Assigns the provided ValueSetComposeIncludeFilterComponent array value to the `filter` property.
   *
   * @param value - the `filter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFilter(value: ValueSetComposeIncludeFilterComponent[] | undefined): this {
    if (isDefinedList<ValueSetComposeIncludeFilterComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.include.filter; Provided value array has an element that is not an instance of ValueSetComposeIncludeFilterComponent.`;
      assertFhirTypeList<ValueSetComposeIncludeFilterComponent>(value, ValueSetComposeIncludeFilterComponent, optErrMsg);
      this.filter = value;
    } else {
      this.filter = undefined;
    }
    return this;
  }

  /**
   * Add the provided ValueSetComposeIncludeFilterComponent value to the `filter` array property.
   *
   * @param value - the `filter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFilter(value: ValueSetComposeIncludeFilterComponent | undefined): this {
    if (isDefined<ValueSetComposeIncludeFilterComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.include.filter; Provided element is not an instance of ValueSetComposeIncludeFilterComponent.`;
      assertFhirType<ValueSetComposeIncludeFilterComponent>(value, ValueSetComposeIncludeFilterComponent, optErrMsg);
      this.initFilter();
      this.filter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `filter` property exists and has a value; `false` otherwise
   */
  public hasFilter(): boolean {
    return isDefinedList<ValueSetComposeIncludeFilterComponent>(this.filter) && this.filter.some((item: ValueSetComposeIncludeFilterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `filter` property
   */
  private initFilter(): void {
    if(!this.hasFilter()) {
      this.filter = [] as ValueSetComposeIncludeFilterComponent[];
    }
  }

  /**
   * @returns the `valueSet` property value as a CanonicalType array
   */
  public getValueSetElement(): CanonicalType[] {
    return this.valueSet ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `valueSet` property.
   *
   * @param element - the `valueSet` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueSetElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid ValueSet.compose.include.valueSet; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.valueSet = element;
    } else {
      this.valueSet = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `valueSet` array property.
   *
   * @param element - the `valueSet` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addValueSetElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid ValueSet.compose.include.valueSet; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initValueSet();
      this.valueSet?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `valueSet` property exists and has a value; `false` otherwise
   */
  public hasValueSetElement(): boolean {
    return isDefinedList<CanonicalType>(this.valueSet) && this.valueSet.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `valueSet` property value as a fhirCanonical array
   */
  public getValueSet(): fhirCanonical[] {
    this.initValueSet();
    const valueSetValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.valueSet!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        valueSetValues.push(value);
      }
    }
    return valueSetValues;
  }

  /**
   * Assigns the provided primitive value array to the `valueSet` property.
   *
   * @param value - the `valueSet` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueSet(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const valueSetElements = [] as CanonicalType[];
      for (const valueSetValue of value) {
        const optErrMsg = `Invalid ValueSet.compose.include.valueSet array item (${String(valueSetValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(valueSetValue, fhirCanonicalSchema, optErrMsg));
        valueSetElements.push(element);
      }
      this.valueSet = valueSetElements;
    } else {
      this.valueSet = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `valueSet` array property.
   *
   * @param value - the `valueSet` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addValueSet(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.include.valueSet array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initValueSet();
      this.addValueSetElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `valueSet` property exists and has a value; `false` otherwise
   */
  public hasValueSet(): boolean {
    return this.hasValueSetElement();
  }

  /**
   * Initialize the `valueSet` property
   */
  private initValueSet(): void {
    if (!this.hasValueSet()) {
      this.valueSet = [] as CanonicalType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ValueSet.compose.include';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.system,
      this.version,
      this.concept,
      this.filter,
      this.valueSet,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ValueSetComposeIncludeComponent {
    const dest = new ValueSetComposeIncludeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ValueSetComposeIncludeComponent): void {
    super.copyValues(dest);
    dest.system = this.system?.copy();
    dest.version = this.version?.copy();
    const conceptList = copyListValues<ValueSetComposeIncludeConceptComponent>(this.concept);
    dest.concept = conceptList.length === 0 ? undefined : conceptList;
    const filterList = copyListValues<ValueSetComposeIncludeFilterComponent>(this.filter);
    dest.filter = filterList.length === 0 ? undefined : filterList;
    const valueSetList = copyListValues<CanonicalType>(this.valueSet);
    dest.valueSet = valueSetList.length === 0 ? undefined : valueSetList;
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

    if (this.hasSystemElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getSystemElement(), 'system', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasConcept()) {
      setFhirBackboneElementListJson(this.getConcept(), 'concept', jsonObj);
    }

    if (this.hasFilter()) {
      setFhirBackboneElementListJson(this.getFilter(), 'filter', jsonObj);
    }

    if (this.hasValueSet()) {
      setFhirPrimitiveListJson(this.getValueSetElement(), 'valueSet', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ValueSetComposeIncludeConceptComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A concept defined in the system
 * - **Definition:** Specifies a concept to be included or excluded.
 * - **Comment:** The list of concepts is considered ordered, though the order might not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
 *
 * @category Data Models: Resource
 * @see [FHIR ValueSet](http://hl7.org/fhir/StructureDefinition/ValueSet)
 */
export class ValueSetComposeIncludeConceptComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeType | fhirCode | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeType | fhirCode>(code)) {
      if (code instanceof PrimitiveType) {
        this.setCodeElement(code);
      } else {
        this.setCode(code);
      }
    }
  }

  /**
   * Parse the provided `ValueSetComposeIncludeConceptComponent` JSON to instantiate the ValueSetComposeIncludeConceptComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ValueSetComposeIncludeConceptComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ValueSetComposeIncludeConceptComponent
   * @returns ValueSetComposeIncludeConceptComponent data model or undefined for `ValueSetComposeIncludeConceptComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ValueSetComposeIncludeConceptComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ValueSetComposeIncludeConceptComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ValueSetComposeIncludeConceptComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

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

    fieldName = 'display';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDisplayElement(datatype);
    }

    fieldName = 'designation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ValueSetComposeIncludeConceptDesignationComponent | undefined = ValueSetComposeIncludeConceptDesignationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDesignation(component);
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
   * ValueSet.compose.include.concept.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code or expression from system
   * - **Definition:** Specifies a code for the concept to be included or excluded.
   * - **Comment:** Expressions are allowed if defined by the underlying code system.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeType | null;

  /**
   * ValueSet.compose.include.concept.display Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text to display for this code for this value set in this valueset
   * - **Definition:** The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system.
   * - **Comment:** The value set resource allows for an alternative display to be specified for when this concept is used in this particular value set. See notes in the value set narrative about the correct use of this element.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private display?: StringType | undefined;

  /**
   * ValueSet.compose.include.concept.designation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional representations for this concept
   * - **Definition:** Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.
   * - **Comment:** Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](https://hl7.org/fhir/resource.html#language).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private designation?: ValueSetComposeIncludeConceptDesignationComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeType object if defined; else null
   */
  public getCodeElement(): CodeType | null {
    return this.code;
  }

  /**
   * Assigns the provided PrimitiveType value to the `code` property.
   *
   * @param element - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCodeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `ValueSet.compose.include.concept.code is required`);
    const optErrMsg = `Invalid ValueSet.compose.include.concept.code; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.code = element;
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCodeElement(): boolean {
    return isDefined<CodeType>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `code` property value as a fhirCode if defined; else null
   */
  public getCode(): fhirCode | null {
    if (this.code?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.code.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `code` property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCode(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `ValueSet.compose.include.concept.code is required`);
    const optErrMsg = `Invalid ValueSet.compose.include.concept.code (${String(value)})`;
    this.code = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return this.hasCodeElement();
  }

  /**
   * @returns the `display` property value as a StringType object if defined; else an empty StringType object
   */
  public getDisplayElement(): StringType {
    return this.display ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `display` property.
   *
   * @param element - the `display` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisplayElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ValueSet.compose.include.concept.display; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.display = element;
    } else {
      this.display = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  public hasDisplayElement(): boolean {
    return isDefined<StringType>(this.display) && !this.display.isEmpty();
  }

  /**
   * @returns the `display` property value as a fhirString if defined; else undefined
   */
  public getDisplay(): fhirString | undefined {
    return this.display?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `display` property.
   *
   * @param value - the `display` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisplay(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.include.concept.display (${String(value)})`;
      this.display = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.display = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  public hasDisplay(): boolean {
    return this.hasDisplayElement();
  }

  /**
   * @returns the `designation` property value as a ValueSetComposeIncludeConceptDesignationComponent array
   */
  public getDesignation(): ValueSetComposeIncludeConceptDesignationComponent[] {
    return this.designation ?? ([] as ValueSetComposeIncludeConceptDesignationComponent[]);
  }

  /**
   * Assigns the provided ValueSetComposeIncludeConceptDesignationComponent array value to the `designation` property.
   *
   * @param value - the `designation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDesignation(value: ValueSetComposeIncludeConceptDesignationComponent[] | undefined): this {
    if (isDefinedList<ValueSetComposeIncludeConceptDesignationComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.include.concept.designation; Provided value array has an element that is not an instance of ValueSetComposeIncludeConceptDesignationComponent.`;
      assertFhirTypeList<ValueSetComposeIncludeConceptDesignationComponent>(value, ValueSetComposeIncludeConceptDesignationComponent, optErrMsg);
      this.designation = value;
    } else {
      this.designation = undefined;
    }
    return this;
  }

  /**
   * Add the provided ValueSetComposeIncludeConceptDesignationComponent value to the `designation` array property.
   *
   * @param value - the `designation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDesignation(value: ValueSetComposeIncludeConceptDesignationComponent | undefined): this {
    if (isDefined<ValueSetComposeIncludeConceptDesignationComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.include.concept.designation; Provided element is not an instance of ValueSetComposeIncludeConceptDesignationComponent.`;
      assertFhirType<ValueSetComposeIncludeConceptDesignationComponent>(value, ValueSetComposeIncludeConceptDesignationComponent, optErrMsg);
      this.initDesignation();
      this.designation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `designation` property exists and has a value; `false` otherwise
   */
  public hasDesignation(): boolean {
    return isDefinedList<ValueSetComposeIncludeConceptDesignationComponent>(this.designation) && this.designation.some((item: ValueSetComposeIncludeConceptDesignationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `designation` property
   */
  private initDesignation(): void {
    if(!this.hasDesignation()) {
      this.designation = [] as ValueSetComposeIncludeConceptDesignationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ValueSet.compose.include.concept';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.display,
      this.designation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ValueSetComposeIncludeConceptComponent {
    const dest = new ValueSetComposeIncludeConceptComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ValueSetComposeIncludeConceptComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.display = this.display?.copy();
    const designationList = copyListValues<ValueSetComposeIncludeConceptDesignationComponent>(this.designation);
    dest.designation = designationList.length === 0 ? undefined : designationList;
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

    if (this.hasCodeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`ValueSet.compose.include.concept.code`);
    }

    if (this.hasDisplayElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDisplayElement(), 'display', jsonObj);
    }

    if (this.hasDesignation()) {
      setFhirBackboneElementListJson(this.getDesignation(), 'designation', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ValueSetComposeIncludeConceptDesignationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Additional representations for this concept
 * - **Definition:** Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.
 * - **Comment:** Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](https://hl7.org/fhir/resource.html#language).
 *
 * @category Data Models: Resource
 * @see [FHIR ValueSet](http://hl7.org/fhir/StructureDefinition/ValueSet)
 */
export class ValueSetComposeIncludeConceptDesignationComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `ValueSetComposeIncludeConceptDesignationComponent` JSON to instantiate the ValueSetComposeIncludeConceptDesignationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ValueSetComposeIncludeConceptDesignationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ValueSetComposeIncludeConceptDesignationComponent
   * @returns ValueSetComposeIncludeConceptDesignationComponent data model or undefined for `ValueSetComposeIncludeConceptDesignationComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ValueSetComposeIncludeConceptDesignationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ValueSetComposeIncludeConceptDesignationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ValueSetComposeIncludeConceptDesignationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setLanguageElement(datatype);
    }

    fieldName = 'use';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUse(datatype);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setValueElement(datatype);
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
   * ValueSet.compose.include.concept.designation.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human language of the designation
   * - **Definition:** The language this designation is defined for.
   * - **Comment:** In the absence of a language, the resource language applies.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private language?: CodeType | undefined;

  /**
   * ValueSet.compose.include.concept.designation.use Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Types of uses of designations
   * - **Definition:** A code that represents types of uses of designations.
   * - **Comment:** If no use is provided, the designation can be assumed to be suitable for general display to a human user.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private use?: Coding | undefined;

  /**
   * ValueSet.compose.include.concept.designation.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The text value for this designation
   * - **Definition:** The text value for this designation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value: StringType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `language` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getLanguageElement(): CodeType {
    return this.language ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `language` property.
   *
   * @param element - the `language` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLanguageElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ValueSet.compose.include.concept.designation.language; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.language = element;
    } else {
      this.language = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguageElement(): boolean {
    return isDefined<CodeType>(this.language) && !this.language.isEmpty();
  }

  /**
   * @returns the `language` property value as a fhirCode if defined; else undefined
   */
  public getLanguage(): fhirCode | undefined {
    return this.language?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `language` property.
   *
   * @param value - the `language` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLanguage(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.include.concept.designation.language (${String(value)})`;
      this.language = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.language = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguage(): boolean {
    return this.hasLanguageElement();
  }

  /**
   * @returns the `use` property value as a Coding object if defined; else an empty Coding object
   */
  public getUse(): Coding {
    return this.use ?? new Coding();
  }

  /**
   * Assigns the provided Use object value to the `use` property.
   *
   * @param value - the `use` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUse(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid ValueSet.compose.include.concept.designation.use; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.use = value;
    } else {
      this.use = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUse(): boolean {
    return isDefined<Coding>(this.use) && !this.use.isEmpty();
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueElement(): StringType | null {
    return this.value;
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: StringType): this {
    assertIsDefined<StringType>(element, `ValueSet.compose.include.concept.designation.value is required`);
    const optErrMsg = `Invalid ValueSet.compose.include.concept.designation.value; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.value = element;
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
  public setValue(value: fhirString): this {
    assertIsDefined<fhirString>(value, `ValueSet.compose.include.concept.designation.value is required`);
    const optErrMsg = `Invalid ValueSet.compose.include.concept.designation.value (${String(value)})`;
    this.value = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
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
    return 'ValueSet.compose.include.concept.designation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.language,
      this.use,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ValueSetComposeIncludeConceptDesignationComponent {
    const dest = new ValueSetComposeIncludeConceptDesignationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ValueSetComposeIncludeConceptDesignationComponent): void {
    super.copyValues(dest);
    dest.language = this.language?.copy();
    dest.use = this.use?.copy();
    dest.value = this.value ? this.value.copy() : null;
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

    if (this.hasLanguageElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getLanguageElement(), 'language', jsonObj);
    }

    if (this.hasUse()) {
      setFhirComplexJson(this.getUse(), 'use', jsonObj);
    }

    if (this.hasValueElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getValueElement()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`ValueSet.compose.include.concept.designation.value`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ValueSetComposeIncludeFilterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Select codes/concepts by their properties (including relationships)
 * - **Definition:** Select concepts by specify a matching criterion based on the properties (including relationships) defined by the system, or on filters defined by the system. If multiple filters are specified, they SHALL all be true.
 * - **Comment:** Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
 *
 * @category Data Models: Resource
 * @see [FHIR ValueSet](http://hl7.org/fhir/StructureDefinition/ValueSet)
 */
export class ValueSetComposeIncludeFilterComponent extends BackboneElement implements IBackboneElement {
  constructor(property: CodeType | fhirCode | null = null, op: EnumCodeType | CodeType | fhirCode | null = null, value: StringType | fhirString | null = null) {
    super();

    this.filterOperatorEnum = new FilterOperatorEnum();

    this.property = null;
    if (isDefined<CodeType | fhirCode>(property)) {
      if (property instanceof PrimitiveType) {
        this.setPropertyElement(property);
      } else {
        this.setProperty(property);
      }
    }

    this.op = constructorCodeValueAsEnumCodeType<FilterOperatorEnum>(
      op,
      FilterOperatorEnum,
      this.filterOperatorEnum,
      'ValueSet.compose.include.filter.op',
    );

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
   * Parse the provided `ValueSetComposeIncludeFilterComponent` JSON to instantiate the ValueSetComposeIncludeFilterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ValueSetComposeIncludeFilterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ValueSetComposeIncludeFilterComponent
   * @returns ValueSetComposeIncludeFilterComponent data model or undefined for `ValueSetComposeIncludeFilterComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ValueSetComposeIncludeFilterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ValueSetComposeIncludeFilterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ValueSetComposeIncludeFilterComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'property';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPropertyElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'op';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setOpElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setValueElement(datatype);
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
   * ValueSet.compose.include.filter.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A property/filter defined by the code system
   * - **Definition:** A code that identifies a property or a filter defined in the code system.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private property: CodeType | null;

  /**
   * FHIR CodeSystem: FilterOperator
   *
   * @see {@link FilterOperatorEnum }
   */
  private readonly filterOperatorEnum: FilterOperatorEnum;

  /**
   * ValueSet.compose.include.filter.op Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists
   * - **Definition:** The kind of operation to perform as a part of the filter criteria.
   * - **Comment:** In case filter.property represents a property of the system, the operation applies to the selected property. In case filter.property represents a filter of the system, the operation SHALL match one of the CodeSystem.filter.operator values.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  private op: EnumCodeType | null;

  /**
   * ValueSet.compose.include.filter.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code from the system, or regex criteria, or boolean value for exists
   * - **Definition:** The match value may be either a code defined by the system, or a string value, which is a regex match on the literal string of the property value  (if the filter represents a property defined in CodeSystem) or of the system filter value (if the filter represents a filter defined in CodeSystem) when the operation is \'regex\', or one of the values (true and false), when the operation is \'exists\'.
   * - **Comment:** Use regex matching with care - full regex matching on every SNOMED CT term is prohibitive, for example.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private value: StringType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `property` property value as a CodeType object if defined; else null
   */
  public getPropertyElement(): CodeType | null {
    return this.property;
  }

  /**
   * Assigns the provided PrimitiveType value to the `property` property.
   *
   * @param element - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPropertyElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `ValueSet.compose.include.filter.property is required`);
    const optErrMsg = `Invalid ValueSet.compose.include.filter.property; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.property = element;
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasPropertyElement(): boolean {
    return isDefined<CodeType>(this.property) && !this.property.isEmpty();
  }

  /**
   * @returns the `property` property value as a fhirCode if defined; else null
   */
  public getProperty(): fhirCode | null {
    if (this.property?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.property.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `property` property.
   *
   * @param value - the `property` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProperty(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `ValueSet.compose.include.filter.property is required`);
    const optErrMsg = `Invalid ValueSet.compose.include.filter.property (${String(value)})`;
    this.property = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return this.hasPropertyElement();
  }

  /**
   * @returns the `op` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public getOpEnumType(): EnumCodeType | null {
    return this.op;
  }

  /**
   * Assigns the provided EnumCodeType value to the `op` property.
   *
   * @param enumType - the `op` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public setOpEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `ValueSet.compose.include.filter.op is required`);
    const errMsgPrefix = `Invalid ValueSet.compose.include.filter.op`;
    assertEnumCodeType<FilterOperatorEnum>(enumType, FilterOperatorEnum, errMsgPrefix);
    this.op = enumType;
    return this;
  }

  /**
   * @returns `true` if the `op` property exists and has a value; `false` otherwise
   */
  public hasOpEnumType(): boolean {
    return isDefined<EnumCodeType>(this.op) && !this.op.isEmpty() && this.op.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `op` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public getOpElement(): CodeType | null {
    if (this.op === null) {
      return null;
    }
    return this.op as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `op` property.
   *
   * @param element - the `op` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public setOpElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `ValueSet.compose.include.filter.op is required`);
    const optErrMsg = `Invalid ValueSet.compose.include.filter.op; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.op = new EnumCodeType(element, this.filterOperatorEnum);
    return this;
  }

  /**
   * @returns `true` if the `op` property exists and has a value; `false` otherwise
   */
  public hasOpElement(): boolean {
    return this.hasOpEnumType();
  }

  /**
   * @returns the `op` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public getOp(): fhirCode | null {
    if (this.op === null) {
      return null;
    }
    return this.op.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `op` property.
   *
   * @param value - the `op` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public setOp(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `ValueSet.compose.include.filter.op is required`);
    const optErrMsg = `Invalid ValueSet.compose.include.filter.op (${String(value)})`;
    this.op = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.filterOperatorEnum);
    return this;
  }

  /**
   * @returns `true` if the `op` property exists and has a value; `false` otherwise
   */
  public hasOp(): boolean {
    return this.hasOpEnumType();
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueElement(): StringType | null {
    return this.value;
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: StringType): this {
    assertIsDefined<StringType>(element, `ValueSet.compose.include.filter.value is required`);
    const optErrMsg = `Invalid ValueSet.compose.include.filter.value; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.value = element;
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
  public setValue(value: fhirString): this {
    assertIsDefined<fhirString>(value, `ValueSet.compose.include.filter.value is required`);
    const optErrMsg = `Invalid ValueSet.compose.include.filter.value (${String(value)})`;
    this.value = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
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
    return 'ValueSet.compose.include.filter';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.property,
      this.op,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ValueSetComposeIncludeFilterComponent {
    const dest = new ValueSetComposeIncludeFilterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ValueSetComposeIncludeFilterComponent): void {
    super.copyValues(dest);
    dest.property = this.property ? this.property.copy() : null;
    dest.op = this.op ? this.op.copy() : null;
    dest.value = this.value ? this.value.copy() : null;
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

    if (this.hasPropertyElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPropertyElement()!, 'property', jsonObj);
    } else {
      missingReqdProperties.push(`ValueSet.compose.include.filter.property`);
    }

    if (this.hasOpElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getOpElement()!, 'op', jsonObj);
    } else {
      missingReqdProperties.push(`ValueSet.compose.include.filter.op`);
    }

    if (this.hasValueElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getValueElement()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`ValueSet.compose.include.filter.value`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ValueSetExpansionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Used when the value set is "expanded"
 * - **Definition:** A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.
 * - **Comment:** Expansion is performed to produce a collection of codes that are ready to use for data entry or validation. Value set expansions are always considered to be stateless - they are a record of the set of codes in the value set at a point in time under a given set of conditions, and are not subject to ongoing maintenance. Expansion.parameter is  a simplified list of parameters - a subset of the features of the [Parameters](https://hl7.org/fhir/parameters.html) resource.
 *
 * @category Data Models: Resource
 * @see [FHIR ValueSet](http://hl7.org/fhir/StructureDefinition/ValueSet)
 */
export class ValueSetExpansionComponent extends BackboneElement implements IBackboneElement {
  constructor(timestamp: DateTimeType | fhirDateTime | null = null) {
    super();

    this.timestamp = null;
    if (isDefined<DateTimeType | fhirDateTime>(timestamp)) {
      if (timestamp instanceof PrimitiveType) {
        this.setTimestampElement(timestamp);
      } else {
        this.setTimestamp(timestamp);
      }
    }
  }

  /**
   * Parse the provided `ValueSetExpansionComponent` JSON to instantiate the ValueSetExpansionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ValueSetExpansionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ValueSetExpansionComponent
   * @returns ValueSetExpansionComponent data model or undefined for `ValueSetExpansionComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ValueSetExpansionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ValueSetExpansionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ValueSetExpansionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setIdentifierElement(datatype);
    }

    fieldName = 'timestamp';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTimestampElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'total';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setTotalElement(datatype);
    }

    fieldName = 'offset';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setOffsetElement(datatype);
    }

    fieldName = 'parameter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ValueSetExpansionParameterComponent | undefined = ValueSetExpansionParameterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addParameter(component);
        }
      });
    }

    fieldName = 'contains';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ValueSetExpansionContainsComponent | undefined = ValueSetExpansionContainsComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addContains(component);
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
   * ValueSet.expansion.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifies the value set expansion (business identifier)
   * - **Definition:** An identifier that uniquely identifies this expansion of the valueset, based on a unique combination of the provided parameters, the system default parameters, and the underlying system code system versions etc. Systems may re-use the same identifier as long as those factors remain the same, and the expansion is the same, but are not required to do so. This is a business identifier.
   * - **Comment:** Typically, this uri is a UUID (e.g. urn:uuid:8230ff20-c97a-4167-a59d-dc2cb9df16dd).
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: UriType | undefined;

  /**
   * ValueSet.expansion.timestamp Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time ValueSet expansion happened
   * - **Definition:** The time at which the expansion was produced by the expanding system.
   * - **Comment:** This SHOULD be a fully populated instant, but in some circumstances, value sets are expanded by hand, and the expansion is published without that precision.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private timestamp: DateTimeType | null;

  /**
   * ValueSet.expansion.total Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total number of codes in the expansion
   * - **Definition:** The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.
   * - **Comment:** Paging only applies to flat expansions.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private total?: IntegerType | undefined;

  /**
   * ValueSet.expansion.offset Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Offset at which this resource starts
   * - **Definition:** If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL NOT be present.
   * - **Comment:** Paging only applies to flat expansions. If a filter is applied, the count is the number of concepts that matched the filter, not the number of concepts in an unfiltered view of the expansion.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private offset?: IntegerType | undefined;

  /**
   * ValueSet.expansion.parameter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Parameter that controlled the expansion process
   * - **Definition:** A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.
   * - **Comment:** The server decides which parameters to include here, but at a minimum, the list SHOULD include all of the parameters that affect the $expand operation. If the expansion will be persisted all of these parameters SHALL be included. If the codeSystem on the server has a specified version then this version SHALL be provided as a parameter in the expansion (note that not all code systems have a version).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private parameter?: ValueSetExpansionParameterComponent[] | undefined;

  /**
   * ValueSet.expansion.contains Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Codes in the value set
   * - **Definition:** The codes that are contained in the value set expansion.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contains?: ValueSetExpansionContainsComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `identifier` property value as a UriType object if defined; else an empty UriType object
   */
  public getIdentifierElement(): UriType {
    return this.identifier ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `identifier` property.
   *
   * @param element - the `identifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIdentifierElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid ValueSet.expansion.identifier; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.identifier = element;
    } else {
      this.identifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identifier` property exists and has a value; `false` otherwise
   */
  public hasIdentifierElement(): boolean {
    return isDefined<UriType>(this.identifier) && !this.identifier.isEmpty();
  }

  /**
   * @returns the `identifier` property value as a fhirUri if defined; else undefined
   */
  public getIdentifier(): fhirUri | undefined {
    return this.identifier?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `identifier` property.
   *
   * @param value - the `identifier` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIdentifier(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.identifier (${String(value)})`;
      this.identifier = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.identifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identifier` property exists and has a value; `false` otherwise
   */
  public hasIdentifier(): boolean {
    return this.hasIdentifierElement();
  }

  /**
   * @returns the `timestamp` property value as a DateTimeType object if defined; else null
   */
  public getTimestampElement(): DateTimeType | null {
    return this.timestamp;
  }

  /**
   * Assigns the provided PrimitiveType value to the `timestamp` property.
   *
   * @param element - the `timestamp` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimestampElement(element: DateTimeType): this {
    assertIsDefined<DateTimeType>(element, `ValueSet.expansion.timestamp is required`);
    const optErrMsg = `Invalid ValueSet.expansion.timestamp; Provided value is not an instance of DateTimeType.`;
    assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
    this.timestamp = element;
    return this;
  }

  /**
   * @returns `true` if the `timestamp` property exists and has a value; `false` otherwise
   */
  public hasTimestampElement(): boolean {
    return isDefined<DateTimeType>(this.timestamp) && !this.timestamp.isEmpty();
  }

  /**
   * @returns the `timestamp` property value as a fhirDateTime if defined; else null
   */
  public getTimestamp(): fhirDateTime | null {
    if (this.timestamp?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.timestamp.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `timestamp` property.
   *
   * @param value - the `timestamp` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimestamp(value: fhirDateTime): this {
    assertIsDefined<fhirDateTime>(value, `ValueSet.expansion.timestamp is required`);
    const optErrMsg = `Invalid ValueSet.expansion.timestamp (${String(value)})`;
    this.timestamp = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `timestamp` property exists and has a value; `false` otherwise
   */
  public hasTimestamp(): boolean {
    return this.hasTimestampElement();
  }

  /**
   * @returns the `total` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getTotalElement(): IntegerType {
    return this.total ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `total` property.
   *
   * @param element - the `total` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTotalElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid ValueSet.expansion.total; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.total = element;
    } else {
      this.total = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `total` property exists and has a value; `false` otherwise
   */
  public hasTotalElement(): boolean {
    return isDefined<IntegerType>(this.total) && !this.total.isEmpty();
  }

  /**
   * @returns the `total` property value as a fhirInteger if defined; else undefined
   */
  public getTotal(): fhirInteger | undefined {
    return this.total?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `total` property.
   *
   * @param value - the `total` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTotal(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.total (${String(value)})`;
      this.total = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.total = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `total` property exists and has a value; `false` otherwise
   */
  public hasTotal(): boolean {
    return this.hasTotalElement();
  }

  /**
   * @returns the `offset` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getOffsetElement(): IntegerType {
    return this.offset ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `offset` property.
   *
   * @param element - the `offset` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOffsetElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid ValueSet.expansion.offset; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.offset = element;
    } else {
      this.offset = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `offset` property exists and has a value; `false` otherwise
   */
  public hasOffsetElement(): boolean {
    return isDefined<IntegerType>(this.offset) && !this.offset.isEmpty();
  }

  /**
   * @returns the `offset` property value as a fhirInteger if defined; else undefined
   */
  public getOffset(): fhirInteger | undefined {
    return this.offset?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `offset` property.
   *
   * @param value - the `offset` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOffset(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.offset (${String(value)})`;
      this.offset = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.offset = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `offset` property exists and has a value; `false` otherwise
   */
  public hasOffset(): boolean {
    return this.hasOffsetElement();
  }

  /**
   * @returns the `parameter` property value as a ValueSetExpansionParameterComponent array
   */
  public getParameter(): ValueSetExpansionParameterComponent[] {
    return this.parameter ?? ([] as ValueSetExpansionParameterComponent[]);
  }

  /**
   * Assigns the provided ValueSetExpansionParameterComponent array value to the `parameter` property.
   *
   * @param value - the `parameter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParameter(value: ValueSetExpansionParameterComponent[] | undefined): this {
    if (isDefinedList<ValueSetExpansionParameterComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.parameter; Provided value array has an element that is not an instance of ValueSetExpansionParameterComponent.`;
      assertFhirTypeList<ValueSetExpansionParameterComponent>(value, ValueSetExpansionParameterComponent, optErrMsg);
      this.parameter = value;
    } else {
      this.parameter = undefined;
    }
    return this;
  }

  /**
   * Add the provided ValueSetExpansionParameterComponent value to the `parameter` array property.
   *
   * @param value - the `parameter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParameter(value: ValueSetExpansionParameterComponent | undefined): this {
    if (isDefined<ValueSetExpansionParameterComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.parameter; Provided element is not an instance of ValueSetExpansionParameterComponent.`;
      assertFhirType<ValueSetExpansionParameterComponent>(value, ValueSetExpansionParameterComponent, optErrMsg);
      this.initParameter();
      this.parameter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `parameter` property exists and has a value; `false` otherwise
   */
  public hasParameter(): boolean {
    return isDefinedList<ValueSetExpansionParameterComponent>(this.parameter) && this.parameter.some((item: ValueSetExpansionParameterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `parameter` property
   */
  private initParameter(): void {
    if(!this.hasParameter()) {
      this.parameter = [] as ValueSetExpansionParameterComponent[];
    }
  }

  /**
   * @returns the `contains` property value as a ValueSetExpansionContainsComponent array
   */
  public getContains(): ValueSetExpansionContainsComponent[] {
    return this.contains ?? ([] as ValueSetExpansionContainsComponent[]);
  }

  /**
   * Assigns the provided ValueSetExpansionContainsComponent array value to the `contains` property.
   *
   * @param value - the `contains` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContains(value: ValueSetExpansionContainsComponent[] | undefined): this {
    if (isDefinedList<ValueSetExpansionContainsComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains; Provided value array has an element that is not an instance of ValueSetExpansionContainsComponent.`;
      assertFhirTypeList<ValueSetExpansionContainsComponent>(value, ValueSetExpansionContainsComponent, optErrMsg);
      this.contains = value;
    } else {
      this.contains = undefined;
    }
    return this;
  }

  /**
   * Add the provided ValueSetExpansionContainsComponent value to the `contains` array property.
   *
   * @param value - the `contains` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContains(value: ValueSetExpansionContainsComponent | undefined): this {
    if (isDefined<ValueSetExpansionContainsComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains; Provided element is not an instance of ValueSetExpansionContainsComponent.`;
      assertFhirType<ValueSetExpansionContainsComponent>(value, ValueSetExpansionContainsComponent, optErrMsg);
      this.initContains();
      this.contains?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contains` property exists and has a value; `false` otherwise
   */
  public hasContains(): boolean {
    return isDefinedList<ValueSetExpansionContainsComponent>(this.contains) && this.contains.some((item: ValueSetExpansionContainsComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `contains` property
   */
  private initContains(): void {
    if(!this.hasContains()) {
      this.contains = [] as ValueSetExpansionContainsComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ValueSet.expansion';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.timestamp,
      this.total,
      this.offset,
      this.parameter,
      this.contains,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ValueSetExpansionComponent {
    const dest = new ValueSetExpansionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ValueSetExpansionComponent): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.timestamp = this.timestamp ? this.timestamp.copy() : null;
    dest.total = this.total?.copy();
    dest.offset = this.offset?.copy();
    const parameterList = copyListValues<ValueSetExpansionParameterComponent>(this.parameter);
    dest.parameter = parameterList.length === 0 ? undefined : parameterList;
    const containsList = copyListValues<ValueSetExpansionContainsComponent>(this.contains);
    dest.contains = containsList.length === 0 ? undefined : containsList;
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

    if (this.hasIdentifierElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getIdentifierElement(), 'identifier', jsonObj);
    }

    if (this.hasTimestampElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirDateTime>(this.getTimestampElement()!, 'timestamp', jsonObj);
    } else {
      missingReqdProperties.push(`ValueSet.expansion.timestamp`);
    }

    if (this.hasTotalElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getTotalElement(), 'total', jsonObj);
    }

    if (this.hasOffsetElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getOffsetElement(), 'offset', jsonObj);
    }

    if (this.hasParameter()) {
      setFhirBackboneElementListJson(this.getParameter(), 'parameter', jsonObj);
    }

    if (this.hasContains()) {
      setFhirBackboneElementListJson(this.getContains(), 'contains', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ValueSetExpansionParameterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Parameter that controlled the expansion process
 * - **Definition:** A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.
 * - **Comment:** The server decides which parameters to include here, but at a minimum, the list SHOULD include all of the parameters that affect the $expand operation. If the expansion will be persisted all of these parameters SHALL be included. If the codeSystem on the server has a specified version then this version SHALL be provided as a parameter in the expansion (note that not all code systems have a version).
 *
 * @category Data Models: Resource
 * @see [FHIR ValueSet](http://hl7.org/fhir/StructureDefinition/ValueSet)
 */
export class ValueSetExpansionParameterComponent extends BackboneElement implements IBackboneElement {
  constructor(name: StringType | fhirString | null = null) {
    super();

    this.name = null;
    if (isDefined<StringType | fhirString>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }
  }

  /**
   * Parse the provided `ValueSetExpansionParameterComponent` JSON to instantiate the ValueSetExpansionParameterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ValueSetExpansionParameterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ValueSetExpansionParameterComponent
   * @returns ValueSetExpansionParameterComponent data model or undefined for `ValueSetExpansionParameterComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ValueSetExpansionParameterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ValueSetExpansionParameterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ValueSetExpansionParameterComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = ValueSetExpansionParameterComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ValueSetExpansionParameterComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setValue(value);

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ValueSet.expansion.parameter.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name as assigned by the client or server
   * - **Definition:** Name of the input parameter to the $expand operation; may be a server-assigned name for additional default or other server-supplied parameters used to control the expansion process.
   * - **Comment:** The names are assigned at the discretion of the server.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name: StringType | null;

  /**
   * ValueSet.expansion.parameter.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ValueSet.expansion.parameter.value[x]', ['string','boolean','integer','decimal','uri','code','dateTime',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value of the named parameter
   * - **Definition:** The value of the parameter.
   * - **FHIR Types:**
   *     'string',
   *     'boolean',
   *     'integer',
   *     'decimal',
   *     'uri',
   *     'code',
   *     'dateTime',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ValueSet.expansion.parameter.value[x]',[
    'string',
    'boolean',
    'integer',
    'decimal',
    'uri',
    'code',
    'dateTime',
  ])
  private value?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
    assertIsDefined<StringType>(element, `ValueSet.expansion.parameter.name is required`);
    const optErrMsg = `Invalid ValueSet.expansion.parameter.name; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `ValueSet.expansion.parameter.name is required`);
    const optErrMsg = `Invalid ValueSet.expansion.parameter.name (${String(value)})`;
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
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('ValueSet.expansion.parameter.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ValueSet.expansion.parameter.value[x]')
  public setValue(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.value = value;
    } else {
      this.value = undefined;
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
   * @returns the `value` property value as a StringType object if defined; else undefined
   */
  public getValueStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ValueSet.expansion.parameter.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && this.value instanceof StringType;
  }

  /**
   * @returns the `value` property value as a BooleanType object if defined; else undefined
   */
  public getValueBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ValueSet.expansion.parameter.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && this.value instanceof BooleanType;
  }

  /**
   * @returns the `value` property value as a IntegerType object if defined; else undefined
   */
  public getValueIntegerType(): IntegerType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ValueSet.expansion.parameter.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && this.value instanceof IntegerType;
  }

  /**
   * @returns the `value` property value as a DecimalType object if defined; else undefined
   */
  public getValueDecimalType(): DecimalType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ValueSet.expansion.parameter.value[x]: Expected DecimalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a DecimalType and has a value; `false` otherwise
   */
  public hasValueDecimalType(): boolean {
    return this.hasValue() && this.value instanceof DecimalType;
  }

  /**
   * @returns the `value` property value as a UriType object if defined; else undefined
   */
  public getValueUriType(): UriType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ValueSet.expansion.parameter.value[x]: Expected UriType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a UriType and has a value; `false` otherwise
   */
  public hasValueUriType(): boolean {
    return this.hasValue() && this.value instanceof UriType;
  }

  /**
   * @returns the `value` property value as a CodeType object if defined; else undefined
   */
  public getValueCodeType(): CodeType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof CodeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ValueSet.expansion.parameter.value[x]: Expected CodeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a CodeType and has a value; `false` otherwise
   */
  public hasValueCodeType(): boolean {
    return this.hasValue() && this.value instanceof CodeType;
  }

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else undefined
   */
  public getValueDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ValueSet.expansion.parameter.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasValueDateTimeType(): boolean {
    return this.hasValue() && this.value instanceof DateTimeType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ValueSet.expansion.parameter';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ValueSetExpansionParameterComponent {
    const dest = new ValueSetExpansionParameterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ValueSetExpansionParameterComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.value = this.value?.copy() as IDataType;
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

    if (this.hasNameElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`ValueSet.expansion.parameter.name`);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ValueSetExpansionContainsComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Codes in the value set
 * - **Definition:** The codes that are contained in the value set expansion.
 *
 * @category Data Models: Resource
 * @see [FHIR ValueSet](http://hl7.org/fhir/StructureDefinition/ValueSet)
 */
export class ValueSetExpansionContainsComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ValueSetExpansionContainsComponent` JSON to instantiate the ValueSetExpansionContainsComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ValueSetExpansionContainsComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ValueSetExpansionContainsComponent
   * @returns ValueSetExpansionContainsComponent data model or undefined for `ValueSetExpansionContainsComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ValueSetExpansionContainsComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ValueSetExpansionContainsComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ValueSetExpansionContainsComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'system';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setSystemElement(datatype);
    }

    fieldName = 'abstract';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAbstractElement(datatype);
    }

    fieldName = 'inactive';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setInactiveElement(datatype);
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setCodeElement(datatype);
    }

    fieldName = 'display';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDisplayElement(datatype);
    }

    fieldName = 'designation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ValueSetComposeIncludeConceptDesignationComponent | undefined = ValueSetComposeIncludeConceptDesignationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDesignation(component);
        }
      });
    }

    fieldName = 'contains';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ValueSetExpansionContainsComponent | undefined = ValueSetExpansionContainsComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addContains(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ValueSet.expansion.contains.system Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** System value for the code
   * - **Definition:** An absolute URI which is the code system in which the code for this item in the expansion is defined.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private system?: UriType | undefined;

  /**
   * ValueSet.expansion.contains.abstract Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If user cannot select this entry
   * - **Definition:** If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.
   * - **Comment:** This should not be understood to exclude its use for searching (e.g. by subsumption testing). The client should know whether it is appropriate for the user to select an abstract code or not.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private abstract_?: BooleanType | undefined;

  /**
   * ValueSet.expansion.contains.inactive Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If concept is inactive in the code system
   * - **Definition:** If the concept is inactive in the code system that defines it. Inactive codes are those that are no longer to be used, but are maintained by the code system for understanding legacy data. It might not be known or specified whether an concept is inactive (and it may depend on the context of use).
   * - **Comment:** This should only have a value if the concept is inactive.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private inactive?: BooleanType | undefined;

  /**
   * ValueSet.expansion.contains.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Version in which this code/display is defined
   * - **Definition:** The version of the code system from this code was taken. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
   * - **Comment:** The exact value of the version string is specified by the system from which the code is derived.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private version?: StringType | undefined;

  /**
   * ValueSet.expansion.contains.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code - if blank, this is not a selectable code
   * - **Definition:** The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeType | undefined;

  /**
   * ValueSet.expansion.contains.display Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** User display for the concept
   * - **Definition:** The recommended display for this item in the expansion.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private display?: StringType | undefined;

  /**
   * ValueSet.expansion.contains.designation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional representations for this item
   * - **Definition:** Additional representations for this item - other languages, aliases, specialized purposes, used for particular purposes, etc. These are relevant when the conditions of the expansion do not fix to a single correct representation.
   * - **Comment:** The designations provided must be based on the value set and code system definitions.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private designation?: ValueSetComposeIncludeConceptDesignationComponent[] | undefined;

  /**
   * ValueSet.expansion.contains.contains Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Codes contained under this entry
   * - **Definition:** Other codes and entries contained under this entry in the hierarchy.
   * - **Comment:** If the expansion uses this element, there is  no implication about the logical relationship between them, and the  structure cannot be used for logical inferencing. The structure  exists to provide navigational assistance for helping human users to  locate codes in the expansion.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contains?: ValueSetExpansionContainsComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `system` property value as a UriType object if defined; else an empty UriType object
   */
  public getSystemElement(): UriType {
    return this.system ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `system` property.
   *
   * @param element - the `system` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSystemElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.system; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.system = element;
    } else {
      this.system = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `system` property exists and has a value; `false` otherwise
   */
  public hasSystemElement(): boolean {
    return isDefined<UriType>(this.system) && !this.system.isEmpty();
  }

  /**
   * @returns the `system` property value as a fhirUri if defined; else undefined
   */
  public getSystem(): fhirUri | undefined {
    return this.system?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `system` property.
   *
   * @param value - the `system` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSystem(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.system (${String(value)})`;
      this.system = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.system = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `system` property exists and has a value; `false` otherwise
   */
  public hasSystem(): boolean {
    return this.hasSystemElement();
  }

  /**
   * @returns the `abstract_` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAbstractElement(): BooleanType {
    return this.abstract_ ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `abstract_` property.
   *
   * @param element - the `abstract_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAbstractElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.abstract; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.abstract_ = element;
    } else {
      this.abstract_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `abstract_` property exists and has a value; `false` otherwise
   */
  public hasAbstractElement(): boolean {
    return isDefined<BooleanType>(this.abstract_) && !this.abstract_.isEmpty();
  }

  /**
   * @returns the `abstract_` property value as a fhirBoolean if defined; else undefined
   */
  public getAbstract(): fhirBoolean | undefined {
    return this.abstract_?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `abstract_` property.
   *
   * @param value - the `abstract_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAbstract(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.abstract (${String(value)})`;
      this.abstract_ = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.abstract_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `abstract_` property exists and has a value; `false` otherwise
   */
  public hasAbstract(): boolean {
    return this.hasAbstractElement();
  }

  /**
   * @returns the `inactive` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getInactiveElement(): BooleanType {
    return this.inactive ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `inactive` property.
   *
   * @param element - the `inactive` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInactiveElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.inactive; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.inactive = element;
    } else {
      this.inactive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `inactive` property exists and has a value; `false` otherwise
   */
  public hasInactiveElement(): boolean {
    return isDefined<BooleanType>(this.inactive) && !this.inactive.isEmpty();
  }

  /**
   * @returns the `inactive` property value as a fhirBoolean if defined; else undefined
   */
  public getInactive(): fhirBoolean | undefined {
    return this.inactive?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `inactive` property.
   *
   * @param value - the `inactive` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInactive(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.inactive (${String(value)})`;
      this.inactive = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.inactive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `inactive` property exists and has a value; `false` otherwise
   */
  public hasInactive(): boolean {
    return this.hasInactiveElement();
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
      const optErrMsg = `Invalid ValueSet.expansion.contains.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ValueSet.expansion.contains.version (${String(value)})`;
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
   * @returns the `code` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getCodeElement(): CodeType {
    return this.code ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `code` property.
   *
   * @param element - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCodeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.code; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = element;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCodeElement(): boolean {
    return isDefined<CodeType>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `code` property value as a fhirCode if defined; else undefined
   */
  public getCode(): fhirCode | undefined {
    return this.code?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `code` property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCode(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.code (${String(value)})`;
      this.code = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return this.hasCodeElement();
  }

  /**
   * @returns the `display` property value as a StringType object if defined; else an empty StringType object
   */
  public getDisplayElement(): StringType {
    return this.display ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `display` property.
   *
   * @param element - the `display` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisplayElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.display; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.display = element;
    } else {
      this.display = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  public hasDisplayElement(): boolean {
    return isDefined<StringType>(this.display) && !this.display.isEmpty();
  }

  /**
   * @returns the `display` property value as a fhirString if defined; else undefined
   */
  public getDisplay(): fhirString | undefined {
    return this.display?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `display` property.
   *
   * @param value - the `display` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisplay(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.display (${String(value)})`;
      this.display = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.display = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  public hasDisplay(): boolean {
    return this.hasDisplayElement();
  }

  /**
   * @returns the `designation` property value as a ValueSetComposeIncludeConceptDesignationComponent array
   */
  public getDesignation(): ValueSetComposeIncludeConceptDesignationComponent[] {
    return this.designation ?? ([] as ValueSetComposeIncludeConceptDesignationComponent[]);
  }

  /**
   * Assigns the provided ValueSetComposeIncludeConceptDesignationComponent array value to the `designation` property.
   *
   * @param value - the `designation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDesignation(value: ValueSetComposeIncludeConceptDesignationComponent[] | undefined): this {
    if (isDefinedList<ValueSetComposeIncludeConceptDesignationComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.designation; Provided value array has an element that is not an instance of ValueSetComposeIncludeConceptDesignationComponent.`;
      assertFhirTypeList<ValueSetComposeIncludeConceptDesignationComponent>(value, ValueSetComposeIncludeConceptDesignationComponent, optErrMsg);
      this.designation = value;
    } else {
      this.designation = undefined;
    }
    return this;
  }

  /**
   * Add the provided ValueSetComposeIncludeConceptDesignationComponent value to the `designation` array property.
   *
   * @param value - the `designation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDesignation(value: ValueSetComposeIncludeConceptDesignationComponent | undefined): this {
    if (isDefined<ValueSetComposeIncludeConceptDesignationComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.designation; Provided element is not an instance of ValueSetComposeIncludeConceptDesignationComponent.`;
      assertFhirType<ValueSetComposeIncludeConceptDesignationComponent>(value, ValueSetComposeIncludeConceptDesignationComponent, optErrMsg);
      this.initDesignation();
      this.designation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `designation` property exists and has a value; `false` otherwise
   */
  public hasDesignation(): boolean {
    return isDefinedList<ValueSetComposeIncludeConceptDesignationComponent>(this.designation) && this.designation.some((item: ValueSetComposeIncludeConceptDesignationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `designation` property
   */
  private initDesignation(): void {
    if(!this.hasDesignation()) {
      this.designation = [] as ValueSetComposeIncludeConceptDesignationComponent[];
    }
  }

  /**
   * @returns the `contains` property value as a ValueSetExpansionContainsComponent array
   */
  public getContains(): ValueSetExpansionContainsComponent[] {
    return this.contains ?? ([] as ValueSetExpansionContainsComponent[]);
  }

  /**
   * Assigns the provided ValueSetExpansionContainsComponent array value to the `contains` property.
   *
   * @param value - the `contains` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContains(value: ValueSetExpansionContainsComponent[] | undefined): this {
    if (isDefinedList<ValueSetExpansionContainsComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.contains; Provided value array has an element that is not an instance of ValueSetExpansionContainsComponent.`;
      assertFhirTypeList<ValueSetExpansionContainsComponent>(value, ValueSetExpansionContainsComponent, optErrMsg);
      this.contains = value;
    } else {
      this.contains = undefined;
    }
    return this;
  }

  /**
   * Add the provided ValueSetExpansionContainsComponent value to the `contains` array property.
   *
   * @param value - the `contains` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContains(value: ValueSetExpansionContainsComponent | undefined): this {
    if (isDefined<ValueSetExpansionContainsComponent>(value)) {
      const optErrMsg = `Invalid ValueSet.expansion.contains.contains; Provided element is not an instance of ValueSetExpansionContainsComponent.`;
      assertFhirType<ValueSetExpansionContainsComponent>(value, ValueSetExpansionContainsComponent, optErrMsg);
      this.initContains();
      this.contains?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contains` property exists and has a value; `false` otherwise
   */
  public hasContains(): boolean {
    return isDefinedList<ValueSetExpansionContainsComponent>(this.contains) && this.contains.some((item: ValueSetExpansionContainsComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `contains` property
   */
  private initContains(): void {
    if(!this.hasContains()) {
      this.contains = [] as ValueSetExpansionContainsComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ValueSet.expansion.contains';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.system,
      this.abstract_,
      this.inactive,
      this.version,
      this.code,
      this.display,
      this.designation,
      this.contains,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ValueSetExpansionContainsComponent {
    const dest = new ValueSetExpansionContainsComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ValueSetExpansionContainsComponent): void {
    super.copyValues(dest);
    dest.system = this.system?.copy();
    dest.abstract_ = this.abstract_?.copy();
    dest.inactive = this.inactive?.copy();
    dest.version = this.version?.copy();
    dest.code = this.code?.copy();
    dest.display = this.display?.copy();
    const designationList = copyListValues<ValueSetComposeIncludeConceptDesignationComponent>(this.designation);
    dest.designation = designationList.length === 0 ? undefined : designationList;
    const containsList = copyListValues<ValueSetExpansionContainsComponent>(this.contains);
    dest.contains = containsList.length === 0 ? undefined : containsList;
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

    if (this.hasSystemElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getSystemElement(), 'system', jsonObj);
    }

    if (this.hasAbstractElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAbstractElement(), 'abstract', jsonObj);
    }

    if (this.hasInactiveElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getInactiveElement(), 'inactive', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasCodeElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement(), 'code', jsonObj);
    }

    if (this.hasDisplayElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDisplayElement(), 'display', jsonObj);
    }

    if (this.hasDesignation()) {
      setFhirBackboneElementListJson(this.getDesignation(), 'designation', jsonObj);
    }

    if (this.hasContains()) {
      setFhirBackboneElementListJson(this.getContains(), 'contains', jsonObj);
    }

    return jsonObj;
  }
}
