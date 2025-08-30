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
 * ConceptMap Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ConceptMap
 * StructureDefinition.name: ConceptMap
 * StructureDefinition.description: A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 * StructureDefinition.fhirVersion: 4.3.0
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
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveType,
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
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, UsageContext } from '../complex-types/complex-datatypes';
import { ConceptMapEquivalenceEnum } from '../code-systems/ConceptMapEquivalenceEnum';
import { ConceptmapUnmappedModeEnum } from '../code-systems/ConceptmapUnmappedModeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ConceptMap Class
 *
 * @remarks
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 *
 * **FHIR Specification**
 * - **Short:** A map from one set of concepts to one or more other concepts
 * - **Definition:** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR ConceptMap](http://hl7.org/fhir/StructureDefinition/ConceptMap)
 */
export class ConceptMap extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'ConceptMap.status',
    );
  }

  /**
   * Parse the provided `ConceptMap` JSON to instantiate the ConceptMap data model.
   *
   * @param sourceJson - JSON representing FHIR `ConceptMap`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConceptMap
   * @returns ConceptMap data model or undefined for `ConceptMap`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ConceptMap | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConceptMap';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConceptMap();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ConceptMap');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ConceptMap[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ConceptMap`;
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
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

    fieldName = 'source[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const source: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setSource(source);

    fieldName = 'target[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const target: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setTarget(target);

    fieldName = 'group';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConceptMapGroupComponent | undefined = ConceptMapGroupComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addGroup(component);
        }
      });
    }

    return instance;
  }

  /**
   * ConceptMap.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this concept map, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this concept map when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this concept map is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the concept map is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the concept map to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * ConceptMap.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the concept map
   * - **Definition:** A formal identifier that is used to identify this concept map when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this concept map outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * ConceptMap.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the concept map
   * - **Definition:** The identifier that is used to identify this version of the concept map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the concept map author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different concept map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the concept map with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * ConceptMap.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this concept map (computer friendly)
   * - **Definition:** A natural language name identifying the concept map. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * ConceptMap.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this concept map (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the concept map.
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
   * ConceptMap.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this concept map. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of concept maps that are appropriate for use versus not.
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
   * ConceptMap.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this concept map is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of concept maps that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level concept map.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * ConceptMap.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the concept map was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the concept map changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the concept map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * ConceptMap.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the concept map.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the concept map is the organization or individual primarily responsible for the maintenance and upkeep of the concept map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the concept map. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the concept map.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * ConceptMap.contact Element
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
   * ConceptMap.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the concept map
   * - **Definition:** A free text natural language description of the concept map from a consumer\'s perspective.
   * - **Comment:** The description is not intended to describe the semantics of the concept map. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * ConceptMap.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate concept map instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * ConceptMap.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for concept map (if applicable)
   * - **Definition:** A legal or geographic region in which the concept map is intended to be used.
   * - **Comment:** It may be possible for the concept map to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * ConceptMap.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this concept map is defined
   * - **Definition:** Explanation of why this concept map is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the concept map. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this concept map.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * ConceptMap.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the concept map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the concept map.
   * - **Comment:** Frequently the copyright differs between the concept map and codes that are included. The copyright statement should clearly differentiate between these when required.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the concept map and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * ConceptMap.source[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ConceptMap.source[x]', ['uri','canonical',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The source value set that contains the concepts that are being mapped
   * - **Definition:** Identifier for the source value set that contains the concepts that are being mapped and provides context for the mappings.
   * - **Comment:** Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
   * - **FHIR Types:**
   *     'uri',
   *     'canonical',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('ConceptMap.source[x]',[
    'uri',
    'canonical',
  ])
  private source?: IDataType | undefined;

  /**
   * ConceptMap.target[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ConceptMap.target[x]', ['uri','canonical',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The target value set which provides context for the mappings
   * - **Definition:** The target value set provides context for the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
   * - **Comment:** Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
   * - **FHIR Types:**
   *     'uri',
   *     'canonical',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('ConceptMap.target[x]',[
    'uri',
    'canonical',
  ])
  private target?: IDataType | undefined;

  /**
   * ConceptMap.group Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Same source and target systems
   * - **Definition:** A group of mappings that all have the same source and target system.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private group?: ConceptMapGroupComponent[] | undefined;

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
      const optErrMsg = `Invalid ConceptMap.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid ConceptMap.url (${String(value)})`;
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
      const optErrMsg = `Invalid ConceptMap.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ConceptMap.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConceptMap.version (${String(value)})`;
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
      const optErrMsg = `Invalid ConceptMap.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConceptMap.name (${String(value)})`;
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
      const optErrMsg = `Invalid ConceptMap.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConceptMap.title (${String(value)})`;
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
      const errMsgPrefix = `Invalid ConceptMap.status`;
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
      const optErrMsg = `Invalid ConceptMap.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid ConceptMap.status (${String(value)})`;
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
      const optErrMsg = `Invalid ConceptMap.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid ConceptMap.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid ConceptMap.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ConceptMap.date (${String(value)})`;
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
      const optErrMsg = `Invalid ConceptMap.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConceptMap.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid ConceptMap.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ConceptMap.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ConceptMap.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ConceptMap.description (${String(value)})`;
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
      const optErrMsg = `Invalid ConceptMap.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ConceptMap.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ConceptMap.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ConceptMap.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ConceptMap.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ConceptMap.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid ConceptMap.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ConceptMap.copyright (${String(value)})`;
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
   * @returns the `source` property value as a DataType object if defined; else undefined
   */
  public getSource(): IDataType | undefined {
    return this.source;
  }

  /**
   * Assigns the provided DataType object value to the `source` property.
   *
   * @decorator `@ChoiceDataTypes('ConceptMap.source[x]')`
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ConceptMap.source[x]')
  public setSource(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.source) && !this.source.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `source` property value as a UriType object if defined; else undefined
   */
  public getSourceUriType(): UriType | undefined {
    if (!isDefined<IDataType | undefined>(this.source)) {
      return undefined;
    }
    if (!(this.source instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ConceptMap.source[x]: Expected UriType but encountered ${this.source.fhirType()}`,
      );
    }
    return this.source;
  }

  /**
   * @returns `true` if the `source` property exists as a UriType and has a value; `false` otherwise
   */
  public hasSourceUriType(): boolean {
    return this.hasSource() && this.source instanceof UriType;
  }

  /**
   * @returns the `source` property value as a CanonicalType object if defined; else undefined
   */
  public getSourceCanonicalType(): CanonicalType | undefined {
    if (!isDefined<IDataType | undefined>(this.source)) {
      return undefined;
    }
    if (!(this.source instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ConceptMap.source[x]: Expected CanonicalType but encountered ${this.source.fhirType()}`,
      );
    }
    return this.source;
  }

  /**
   * @returns `true` if the `source` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasSourceCanonicalType(): boolean {
    return this.hasSource() && this.source instanceof CanonicalType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `target` property value as a DataType object if defined; else undefined
   */
  public getTarget(): IDataType | undefined {
    return this.target;
  }

  /**
   * Assigns the provided DataType object value to the `target` property.
   *
   * @decorator `@ChoiceDataTypes('ConceptMap.target[x]')`
   *
   * @param value - the `target` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ConceptMap.target[x]')
  public setTarget(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.target = value;
    } else {
      this.target = undefined;
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
   * @returns the `target` property value as a UriType object if defined; else undefined
   */
  public getTargetUriType(): UriType | undefined {
    if (!isDefined<IDataType | undefined>(this.target)) {
      return undefined;
    }
    if (!(this.target instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ConceptMap.target[x]: Expected UriType but encountered ${this.target.fhirType()}`,
      );
    }
    return this.target;
  }

  /**
   * @returns `true` if the `target` property exists as a UriType and has a value; `false` otherwise
   */
  public hasTargetUriType(): boolean {
    return this.hasTarget() && this.target instanceof UriType;
  }

  /**
   * @returns the `target` property value as a CanonicalType object if defined; else undefined
   */
  public getTargetCanonicalType(): CanonicalType | undefined {
    if (!isDefined<IDataType | undefined>(this.target)) {
      return undefined;
    }
    if (!(this.target instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ConceptMap.target[x]: Expected CanonicalType but encountered ${this.target.fhirType()}`,
      );
    }
    return this.target;
  }

  /**
   * @returns `true` if the `target` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasTargetCanonicalType(): boolean {
    return this.hasTarget() && this.target instanceof CanonicalType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `group` property value as a ConceptMapGroupComponent array
   */
  public getGroup(): ConceptMapGroupComponent[] {
    return this.group ?? ([] as ConceptMapGroupComponent[]);
  }

  /**
   * Assigns the provided ConceptMapGroupComponent array value to the `group` property.
   *
   * @param value - the `group` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGroup(value: ConceptMapGroupComponent[] | undefined): this {
    if (isDefinedList<ConceptMapGroupComponent>(value)) {
      const optErrMsg = `Invalid ConceptMap.group; Provided value array has an element that is not an instance of ConceptMapGroupComponent.`;
      assertFhirTypeList<ConceptMapGroupComponent>(value, ConceptMapGroupComponent, optErrMsg);
      this.group = value;
    } else {
      this.group = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConceptMapGroupComponent value to the `group` array property.
   *
   * @param value - the `group` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addGroup(value: ConceptMapGroupComponent | undefined): this {
    if (isDefined<ConceptMapGroupComponent>(value)) {
      const optErrMsg = `Invalid ConceptMap.group; Provided element is not an instance of ConceptMapGroupComponent.`;
      assertFhirType<ConceptMapGroupComponent>(value, ConceptMapGroupComponent, optErrMsg);
      this.initGroup();
      this.group?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `group` property exists and has a value; `false` otherwise
   */
  public hasGroup(): boolean {
    return isDefinedList<ConceptMapGroupComponent>(this.group) && this.group.some((item: ConceptMapGroupComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `group` property
   */
  private initGroup(): void {
    if(!this.hasGroup()) {
      this.group = [] as ConceptMapGroupComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ConceptMap';
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
      this.source,
      this.target,
      this.group,
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
  public override copy(): ConceptMap {
    const dest = new ConceptMap();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConceptMap): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    dest.identifier = this.identifier?.copy();
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
    dest.source = this.source?.copy() as IDataType;
    dest.target = this.target?.copy() as IDataType;
    const groupList = copyListValues<ConceptMapGroupComponent>(this.group);
    dest.group = groupList.length === 0 ? undefined : groupList;
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
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
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

    if (this.hasSource()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getSource()!, 'source', jsonObj);
    }

    if (this.hasTarget()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTarget()!, 'target', jsonObj);
    }

    if (this.hasGroup()) {
      setFhirBackboneElementListJson(this.getGroup(), 'group', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ConceptMapGroupComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Same source and target systems
 * - **Definition:** A group of mappings that all have the same source and target system.
 *
 * @category Data Models: Resource
 * @see [FHIR ConceptMap](http://hl7.org/fhir/StructureDefinition/ConceptMap)
 */
export class ConceptMapGroupComponent extends BackboneElement implements IBackboneElement {
  constructor(element: ConceptMapGroupElementComponent[] | null = null) {
    super();

    this.element = null;
    if (isDefinedList<ConceptMapGroupElementComponent>(element)) {
      this.setElement(element);
    }
  }

  /**
   * Parse the provided `ConceptMapGroupComponent` JSON to instantiate the ConceptMapGroupComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConceptMapGroupComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConceptMapGroupComponent
   * @returns ConceptMapGroupComponent data model or undefined for `ConceptMapGroupComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConceptMapGroupComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConceptMapGroupComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConceptMapGroupComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setSourceElement(datatype);
    }

    fieldName = 'sourceVersion';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSourceVersionElement(datatype);
    }

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setTargetElement(datatype);
    }

    fieldName = 'targetVersion';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTargetVersionElement(datatype);
    }

    fieldName = 'element';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConceptMapGroupElementComponent | undefined = ConceptMapGroupElementComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setElement(null);
        } else {
          instance.addElement(component);
        }
      });
    } else {
      instance.setElement(null);
    }

    fieldName = 'unmapped';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ConceptMapGroupUnmappedComponent | undefined = ConceptMapGroupUnmappedComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnmapped(component);
    }

    return instance;
  }

  /**
   * ConceptMap.group.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Source system where concepts to be mapped are defined
   * - **Definition:** An absolute URI that identifies the source system where the concepts to be mapped are defined.
   * - **Comment:** This is not needed if the source value set is specified and it contains concepts from only a single system.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private source?: UriType | undefined;

  /**
   * ConceptMap.group.sourceVersion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific version of the  code system
   * - **Definition:** The specific version of the code system, as determined by the code system authority.
   * - **Comment:** The specification of a particular code system version may be required for code systems which lack concept permanence.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sourceVersion?: StringType | undefined;

  /**
   * ConceptMap.group.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Target system that the concepts are to be mapped to
   * - **Definition:** An absolute URI that identifies the target system that the concepts will be mapped to.
   * - **Comment:** This is not needed if the target value set is specified and it contains concepts from only a single system. The group target may also be omitted if all of the target element equivalence values are \'unmatched\'.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private target?: UriType | undefined;

  /**
   * ConceptMap.group.targetVersion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific version of the  code system
   * - **Definition:** The specific version of the code system, as determined by the code system authority.
   * - **Comment:** The specification of a particular code system version may be required for code systems which lack concept permanence.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private targetVersion?: StringType | undefined;

  /**
   * ConceptMap.group.element Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Mappings for a concept from the source set
   * - **Definition:** Mappings for an individual concept in the source to one or more concepts in the target.
   * - **Comment:** Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private element: ConceptMapGroupElementComponent[] | null;

  /**
   * ConceptMap.group.unmapped Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What to do when there is no mapping for the source concept
   * - **Definition:** What to do when there is no mapping for the source concept. "Unmapped" does not include codes that are unmatched, and the unmapped element is ignored in a code is specified to have equivalence = unmatched.
   * - **Comment:** This only applies if the source code has a system value that matches the system defined for the group.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private unmapped?: ConceptMapGroupUnmappedComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `source` property value as a UriType object if defined; else an empty UriType object
   */
  public getSourceElement(): UriType {
    return this.source ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `source` property.
   *
   * @param element - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid ConceptMap.group.source; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.source = element;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSourceElement(): boolean {
    return isDefined<UriType>(this.source) && !this.source.isEmpty();
  }

  /**
   * @returns the `source` property value as a fhirUri if defined; else undefined
   */
  public getSource(): fhirUri | undefined {
    return this.source?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `source` property.
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSource(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.source (${String(value)})`;
      this.source = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return this.hasSourceElement();
  }

  /**
   * @returns the `sourceVersion` property value as a StringType object if defined; else an empty StringType object
   */
  public getSourceVersionElement(): StringType {
    return this.sourceVersion ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sourceVersion` property.
   *
   * @param element - the `sourceVersion` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceVersionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ConceptMap.group.sourceVersion; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.sourceVersion = element;
    } else {
      this.sourceVersion = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceVersion` property exists and has a value; `false` otherwise
   */
  public hasSourceVersionElement(): boolean {
    return isDefined<StringType>(this.sourceVersion) && !this.sourceVersion.isEmpty();
  }

  /**
   * @returns the `sourceVersion` property value as a fhirString if defined; else undefined
   */
  public getSourceVersion(): fhirString | undefined {
    return this.sourceVersion?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `sourceVersion` property.
   *
   * @param value - the `sourceVersion` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceVersion(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.sourceVersion (${String(value)})`;
      this.sourceVersion = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.sourceVersion = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceVersion` property exists and has a value; `false` otherwise
   */
  public hasSourceVersion(): boolean {
    return this.hasSourceVersionElement();
  }

  /**
   * @returns the `target` property value as a UriType object if defined; else an empty UriType object
   */
  public getTargetElement(): UriType {
    return this.target ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `target` property.
   *
   * @param element - the `target` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTargetElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid ConceptMap.group.target; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.target = element;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTargetElement(): boolean {
    return isDefined<UriType>(this.target) && !this.target.isEmpty();
  }

  /**
   * @returns the `target` property value as a fhirUri if defined; else undefined
   */
  public getTarget(): fhirUri | undefined {
    return this.target?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `target` property.
   *
   * @param value - the `target` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTarget(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.target (${String(value)})`;
      this.target = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return this.hasTargetElement();
  }

  /**
   * @returns the `targetVersion` property value as a StringType object if defined; else an empty StringType object
   */
  public getTargetVersionElement(): StringType {
    return this.targetVersion ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `targetVersion` property.
   *
   * @param element - the `targetVersion` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTargetVersionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ConceptMap.group.targetVersion; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.targetVersion = element;
    } else {
      this.targetVersion = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `targetVersion` property exists and has a value; `false` otherwise
   */
  public hasTargetVersionElement(): boolean {
    return isDefined<StringType>(this.targetVersion) && !this.targetVersion.isEmpty();
  }

  /**
   * @returns the `targetVersion` property value as a fhirString if defined; else undefined
   */
  public getTargetVersion(): fhirString | undefined {
    return this.targetVersion?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `targetVersion` property.
   *
   * @param value - the `targetVersion` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTargetVersion(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.targetVersion (${String(value)})`;
      this.targetVersion = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.targetVersion = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `targetVersion` property exists and has a value; `false` otherwise
   */
  public hasTargetVersion(): boolean {
    return this.hasTargetVersionElement();
  }

  /**
   * @returns the `element` property value as a ConceptMapGroupElementComponent array
   */
  public getElement(): ConceptMapGroupElementComponent[] {
    return this.element ?? ([] as ConceptMapGroupElementComponent[]);
  }

  /**
   * Assigns the provided ConceptMapGroupElementComponent array value to the `element` property.
   *
   * @param value - the `element` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setElement(value: ConceptMapGroupElementComponent[] | undefined | null): this {
    if (isDefinedList<ConceptMapGroupElementComponent>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.element; Provided value array has an element that is not an instance of ConceptMapGroupElementComponent.`;
      assertFhirTypeList<ConceptMapGroupElementComponent>(value, ConceptMapGroupElementComponent, optErrMsg);
      this.element = value;
    } else {
      this.element = null;
    }
    return this;
  }

  /**
   * Add the provided ConceptMapGroupElementComponent value to the `element` array property.
   *
   * @param value - the `element` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addElement(value: ConceptMapGroupElementComponent | undefined): this {
    if (isDefined<ConceptMapGroupElementComponent>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.element; Provided element is not an instance of ConceptMapGroupElementComponent.`;
      assertFhirType<ConceptMapGroupElementComponent>(value, ConceptMapGroupElementComponent, optErrMsg);
      this.initElement();
      this.element?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `element` property exists and has a value; `false` otherwise
   */
  public hasElement(): boolean {
    return isDefinedList<ConceptMapGroupElementComponent>(this.element) && this.element.some((item: ConceptMapGroupElementComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `element` property
   */
  private initElement(): void {
    if(!this.hasElement()) {
      this.element = [] as ConceptMapGroupElementComponent[];
    }
  }

  /**
   * @returns the `unmapped` property value as a ConceptMapGroupUnmappedComponent object if defined; else an empty ConceptMapGroupUnmappedComponent object
   */
  public getUnmapped(): ConceptMapGroupUnmappedComponent {
    return this.unmapped ?? new ConceptMapGroupUnmappedComponent();
  }

  /**
   * Assigns the provided Unmapped object value to the `unmapped` property.
   *
   * @param value - the `unmapped` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUnmapped(value: ConceptMapGroupUnmappedComponent | undefined): this {
    if (isDefined<ConceptMapGroupUnmappedComponent>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.unmapped; Provided element is not an instance of ConceptMapGroupUnmappedComponent.`;
      assertFhirType<ConceptMapGroupUnmappedComponent>(value, ConceptMapGroupUnmappedComponent, optErrMsg);
      this.unmapped = value;
    } else {
      this.unmapped = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unmapped` property exists and has a value; `false` otherwise
   */
  public hasUnmapped(): boolean {
    return isDefined<ConceptMapGroupUnmappedComponent>(this.unmapped) && !this.unmapped.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ConceptMap.group';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.source,
      this.sourceVersion,
      this.target,
      this.targetVersion,
      this.element,
      this.unmapped,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConceptMapGroupComponent {
    const dest = new ConceptMapGroupComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConceptMapGroupComponent): void {
    super.copyValues(dest);
    dest.source = this.source?.copy();
    dest.sourceVersion = this.sourceVersion?.copy();
    dest.target = this.target?.copy();
    dest.targetVersion = this.targetVersion?.copy();
    const elementList = copyListValues<ConceptMapGroupElementComponent>(this.element);
    dest.element = elementList.length === 0 ? null : elementList;
    dest.unmapped = this.unmapped?.copy();
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

    if (this.hasSourceElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getSourceElement(), 'source', jsonObj);
    }

    if (this.hasSourceVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSourceVersionElement(), 'sourceVersion', jsonObj);
    }

    if (this.hasTargetElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getTargetElement(), 'target', jsonObj);
    }

    if (this.hasTargetVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTargetVersionElement(), 'targetVersion', jsonObj);
    }

    if (this.hasElement()) {
      setFhirBackboneElementListJson(this.getElement(), 'element', jsonObj);
    } else {
      jsonObj['element'] = null;
    }

    if (this.hasUnmapped()) {
      setFhirBackboneElementJson(this.getUnmapped(), 'unmapped', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConceptMapGroupElementComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Mappings for a concept from the source set
 * - **Definition:** Mappings for an individual concept in the source to one or more concepts in the target.
 * - **Comment:** Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
 *
 * @category Data Models: Resource
 * @see [FHIR ConceptMap](http://hl7.org/fhir/StructureDefinition/ConceptMap)
 */
export class ConceptMapGroupElementComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ConceptMapGroupElementComponent` JSON to instantiate the ConceptMapGroupElementComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConceptMapGroupElementComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConceptMapGroupElementComponent
   * @returns ConceptMapGroupElementComponent data model or undefined for `ConceptMapGroupElementComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConceptMapGroupElementComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConceptMapGroupElementComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConceptMapGroupElementComponent();

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

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConceptMapGroupElementTargetComponent | undefined = ConceptMapGroupElementTargetComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTarget(component);
        }
      });
    }

    return instance;
  }

  /**
   * ConceptMap.group.element.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifies element being mapped
   * - **Definition:** Identity (code or path) or the element/item being mapped.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeType | undefined;

  /**
   * ConceptMap.group.element.display Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Display for the code
   * - **Definition:** The display for the code. The display is only provided to help editors when editing the concept map.
   * - **Comment:** The display is ignored when processing the map.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private display?: StringType | undefined;

  /**
   * ConceptMap.group.element.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Concept in target system for element
   * - **Definition:** A concept from the target value set that this concept maps to.
   * - **Comment:** Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private target?: ConceptMapGroupElementTargetComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid ConceptMap.group.element.code; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid ConceptMap.group.element.code (${String(value)})`;
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
      const optErrMsg = `Invalid ConceptMap.group.element.display; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConceptMap.group.element.display (${String(value)})`;
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
   * @returns the `target` property value as a ConceptMapGroupElementTargetComponent array
   */
  public getTarget(): ConceptMapGroupElementTargetComponent[] {
    return this.target ?? ([] as ConceptMapGroupElementTargetComponent[]);
  }

  /**
   * Assigns the provided ConceptMapGroupElementTargetComponent array value to the `target` property.
   *
   * @param value - the `target` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTarget(value: ConceptMapGroupElementTargetComponent[] | undefined): this {
    if (isDefinedList<ConceptMapGroupElementTargetComponent>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target; Provided value array has an element that is not an instance of ConceptMapGroupElementTargetComponent.`;
      assertFhirTypeList<ConceptMapGroupElementTargetComponent>(value, ConceptMapGroupElementTargetComponent, optErrMsg);
      this.target = value;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConceptMapGroupElementTargetComponent value to the `target` array property.
   *
   * @param value - the `target` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTarget(value: ConceptMapGroupElementTargetComponent | undefined): this {
    if (isDefined<ConceptMapGroupElementTargetComponent>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target; Provided element is not an instance of ConceptMapGroupElementTargetComponent.`;
      assertFhirType<ConceptMapGroupElementTargetComponent>(value, ConceptMapGroupElementTargetComponent, optErrMsg);
      this.initTarget();
      this.target?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return isDefinedList<ConceptMapGroupElementTargetComponent>(this.target) && this.target.some((item: ConceptMapGroupElementTargetComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `target` property
   */
  private initTarget(): void {
    if(!this.hasTarget()) {
      this.target = [] as ConceptMapGroupElementTargetComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ConceptMap.group.element';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.display,
      this.target,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConceptMapGroupElementComponent {
    const dest = new ConceptMapGroupElementComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConceptMapGroupElementComponent): void {
    super.copyValues(dest);
    dest.code = this.code?.copy();
    dest.display = this.display?.copy();
    const targetList = copyListValues<ConceptMapGroupElementTargetComponent>(this.target);
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

    if (this.hasCodeElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement(), 'code', jsonObj);
    }

    if (this.hasDisplayElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDisplayElement(), 'display', jsonObj);
    }

    if (this.hasTarget()) {
      setFhirBackboneElementListJson(this.getTarget(), 'target', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConceptMapGroupElementTargetComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Concept in target system for element
 * - **Definition:** A concept from the target value set that this concept maps to.
 * - **Comment:** Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
 *
 * @category Data Models: Resource
 * @see [FHIR ConceptMap](http://hl7.org/fhir/StructureDefinition/ConceptMap)
 */
export class ConceptMapGroupElementTargetComponent extends BackboneElement implements IBackboneElement {
  constructor(equivalence: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.conceptMapEquivalenceEnum = new ConceptMapEquivalenceEnum();

    this.equivalence = constructorCodeValueAsEnumCodeType<ConceptMapEquivalenceEnum>(
      equivalence,
      ConceptMapEquivalenceEnum,
      this.conceptMapEquivalenceEnum,
      'ConceptMap.group.element.target.equivalence',
    );
  }

  /**
   * Parse the provided `ConceptMapGroupElementTargetComponent` JSON to instantiate the ConceptMapGroupElementTargetComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConceptMapGroupElementTargetComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConceptMapGroupElementTargetComponent
   * @returns ConceptMapGroupElementTargetComponent data model or undefined for `ConceptMapGroupElementTargetComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConceptMapGroupElementTargetComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConceptMapGroupElementTargetComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConceptMapGroupElementTargetComponent();

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

    fieldName = 'equivalence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setEquivalence(null);
      } else {
        instance.setEquivalenceElement(datatype);
      }
    } else {
      instance.setEquivalence(null);
    }

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    fieldName = 'dependsOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConceptMapGroupElementTargetDependsOnComponent | undefined = ConceptMapGroupElementTargetDependsOnComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDependsOn(component);
        }
      });
    }

    fieldName = 'product';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConceptMapGroupElementTargetDependsOnComponent | undefined = ConceptMapGroupElementTargetDependsOnComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProduct(component);
        }
      });
    }

    return instance;
  }

  /**
   * ConceptMap.group.element.target.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code that identifies the target element
   * - **Definition:** Identity (code or path) or the element/item that the map refers to.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeType | undefined;

  /**
   * ConceptMap.group.element.target.display Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Display for the code
   * - **Definition:** The display for the code. The display is only provided to help editors when editing the concept map.
   * - **Comment:** The display is ignored when processing the map.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private display?: StringType | undefined;

  /**
   * FHIR CodeSystem: ConceptMapEquivalence
   *
   * @see {@link ConceptMapEquivalenceEnum }
   */
  private readonly conceptMapEquivalenceEnum: ConceptMapEquivalenceEnum;

  /**
   * ConceptMap.group.element.target.equivalence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint
   * - **Definition:** The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is \'wider\' than the source).
   * - **Comment:** This element is labeled as a modifier because it may indicate that a target does not apply.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** Some of the values mean that there is no mapping from the source to the target, particularly \&#x27;disjoint\&#x27;, and the mapping cannot be interpreted without knowing this value as it could mean the elements are equivalent, totally mismatched or anything in between
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ConceptMapEquivalenceEnum }
   */
  private equivalence: EnumCodeType | null;

  /**
   * ConceptMap.group.element.target.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of status/issues in mapping
   * - **Definition:** A description of status/issues in mapping that conveys additional information not represented in  the structured data.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private comment?: StringType | undefined;

  /**
   * ConceptMap.group.element.target.dependsOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Other elements required for this mapping (from context)
   * - **Definition:** A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dependsOn?: ConceptMapGroupElementTargetDependsOnComponent[] | undefined;

  /**
   * ConceptMap.group.element.target.product Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Other concepts that this mapping also produces
   * - **Definition:** A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private product?: ConceptMapGroupElementTargetDependsOnComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid ConceptMap.group.element.target.code; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid ConceptMap.group.element.target.code (${String(value)})`;
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
      const optErrMsg = `Invalid ConceptMap.group.element.target.display; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConceptMap.group.element.target.display (${String(value)})`;
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
   * @returns the `equivalence` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConceptMapEquivalenceEnum }
   */
  public getEquivalenceEnumType(): EnumCodeType | null {
    return this.equivalence;
  }

  /**
   * Assigns the provided EnumCodeType value to the `equivalence` property.
   *
   * @param enumType - the `equivalence` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConceptMapEquivalenceEnum }
   */
  public setEquivalenceEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ConceptMap.group.element.target.equivalence`;
      assertEnumCodeType<ConceptMapEquivalenceEnum>(enumType, ConceptMapEquivalenceEnum, errMsgPrefix);
      this.equivalence = enumType;
    } else {
      this.equivalence = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `equivalence` property exists and has a value; `false` otherwise
   */
  public hasEquivalenceEnumType(): boolean {
    return isDefined<EnumCodeType>(this.equivalence) && !this.equivalence.isEmpty() && this.equivalence.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `equivalence` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConceptMapEquivalenceEnum }
   */
  public getEquivalenceElement(): CodeType | null {
    if (this.equivalence === null) {
      return null;
    }
    return this.equivalence as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `equivalence` property.
   *
   * @param element - the `equivalence` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConceptMapEquivalenceEnum }
   */
  public setEquivalenceElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target.equivalence; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.equivalence = new EnumCodeType(element, this.conceptMapEquivalenceEnum);
    } else {
      this.equivalence = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `equivalence` property exists and has a value; `false` otherwise
   */
  public hasEquivalenceElement(): boolean {
    return this.hasEquivalenceEnumType();
  }

  /**
   * @returns the `equivalence` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConceptMapEquivalenceEnum }
   */
  public getEquivalence(): fhirCode | null {
    if (this.equivalence === null) {
      return null;
    }
    return this.equivalence.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `equivalence` property.
   *
   * @param value - the `equivalence` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ConceptMapEquivalenceEnum }
   */
  public setEquivalence(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target.equivalence (${String(value)})`;
      this.equivalence = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.conceptMapEquivalenceEnum);
    } else {
      this.equivalence = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `equivalence` property exists and has a value; `false` otherwise
   */
  public hasEquivalence(): boolean {
    return this.hasEquivalenceEnumType();
  }

  /**
   * @returns the `comment` property value as a StringType object if defined; else an empty StringType object
   */
  public getCommentElement(): StringType {
    return this.comment ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `comment` property.
   *
   * @param element - the `comment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCommentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target.comment; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.comment = element;
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasCommentElement(): boolean {
    return isDefined<StringType>(this.comment) && !this.comment.isEmpty();
  }

  /**
   * @returns the `comment` property value as a fhirString if defined; else undefined
   */
  public getComment(): fhirString | undefined {
    return this.comment?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `comment` property.
   *
   * @param value - the `comment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComment(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target.comment (${String(value)})`;
      this.comment = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasComment(): boolean {
    return this.hasCommentElement();
  }

  /**
   * @returns the `dependsOn` property value as a ConceptMapGroupElementTargetDependsOnComponent array
   */
  public getDependsOn(): ConceptMapGroupElementTargetDependsOnComponent[] {
    return this.dependsOn ?? ([] as ConceptMapGroupElementTargetDependsOnComponent[]);
  }

  /**
   * Assigns the provided ConceptMapGroupElementTargetDependsOnComponent array value to the `dependsOn` property.
   *
   * @param value - the `dependsOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDependsOn(value: ConceptMapGroupElementTargetDependsOnComponent[] | undefined): this {
    if (isDefinedList<ConceptMapGroupElementTargetDependsOnComponent>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target.dependsOn; Provided value array has an element that is not an instance of ConceptMapGroupElementTargetDependsOnComponent.`;
      assertFhirTypeList<ConceptMapGroupElementTargetDependsOnComponent>(value, ConceptMapGroupElementTargetDependsOnComponent, optErrMsg);
      this.dependsOn = value;
    } else {
      this.dependsOn = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConceptMapGroupElementTargetDependsOnComponent value to the `dependsOn` array property.
   *
   * @param value - the `dependsOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDependsOn(value: ConceptMapGroupElementTargetDependsOnComponent | undefined): this {
    if (isDefined<ConceptMapGroupElementTargetDependsOnComponent>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target.dependsOn; Provided element is not an instance of ConceptMapGroupElementTargetDependsOnComponent.`;
      assertFhirType<ConceptMapGroupElementTargetDependsOnComponent>(value, ConceptMapGroupElementTargetDependsOnComponent, optErrMsg);
      this.initDependsOn();
      this.dependsOn?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dependsOn` property exists and has a value; `false` otherwise
   */
  public hasDependsOn(): boolean {
    return isDefinedList<ConceptMapGroupElementTargetDependsOnComponent>(this.dependsOn) && this.dependsOn.some((item: ConceptMapGroupElementTargetDependsOnComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `dependsOn` property
   */
  private initDependsOn(): void {
    if(!this.hasDependsOn()) {
      this.dependsOn = [] as ConceptMapGroupElementTargetDependsOnComponent[];
    }
  }

  /**
   * @returns the `product` property value as a ConceptMapGroupElementTargetDependsOnComponent array
   */
  public getProduct(): ConceptMapGroupElementTargetDependsOnComponent[] {
    return this.product ?? ([] as ConceptMapGroupElementTargetDependsOnComponent[]);
  }

  /**
   * Assigns the provided ConceptMapGroupElementTargetDependsOnComponent array value to the `product` property.
   *
   * @param value - the `product` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProduct(value: ConceptMapGroupElementTargetDependsOnComponent[] | undefined): this {
    if (isDefinedList<ConceptMapGroupElementTargetDependsOnComponent>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target.product; Provided value array has an element that is not an instance of ConceptMapGroupElementTargetDependsOnComponent.`;
      assertFhirTypeList<ConceptMapGroupElementTargetDependsOnComponent>(value, ConceptMapGroupElementTargetDependsOnComponent, optErrMsg);
      this.product = value;
    } else {
      this.product = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConceptMapGroupElementTargetDependsOnComponent value to the `product` array property.
   *
   * @param value - the `product` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProduct(value: ConceptMapGroupElementTargetDependsOnComponent | undefined): this {
    if (isDefined<ConceptMapGroupElementTargetDependsOnComponent>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target.product; Provided element is not an instance of ConceptMapGroupElementTargetDependsOnComponent.`;
      assertFhirType<ConceptMapGroupElementTargetDependsOnComponent>(value, ConceptMapGroupElementTargetDependsOnComponent, optErrMsg);
      this.initProduct();
      this.product?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `product` property exists and has a value; `false` otherwise
   */
  public hasProduct(): boolean {
    return isDefinedList<ConceptMapGroupElementTargetDependsOnComponent>(this.product) && this.product.some((item: ConceptMapGroupElementTargetDependsOnComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `product` property
   */
  private initProduct(): void {
    if(!this.hasProduct()) {
      this.product = [] as ConceptMapGroupElementTargetDependsOnComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ConceptMap.group.element.target';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.display,
      this.equivalence,
      this.comment,
      this.dependsOn,
      this.product,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.equivalence, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConceptMapGroupElementTargetComponent {
    const dest = new ConceptMapGroupElementTargetComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConceptMapGroupElementTargetComponent): void {
    super.copyValues(dest);
    dest.code = this.code?.copy();
    dest.display = this.display?.copy();
    dest.equivalence = this.equivalence ? this.equivalence.copy() : null;
    dest.comment = this.comment?.copy();
    const dependsOnList = copyListValues<ConceptMapGroupElementTargetDependsOnComponent>(this.dependsOn);
    dest.dependsOn = dependsOnList.length === 0 ? undefined : dependsOnList;
    const productList = copyListValues<ConceptMapGroupElementTargetDependsOnComponent>(this.product);
    dest.product = productList.length === 0 ? undefined : productList;
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
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement(), 'code', jsonObj);
    }

    if (this.hasDisplayElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDisplayElement(), 'display', jsonObj);
    }

    if (this.hasEquivalenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getEquivalenceElement()!, 'equivalence', jsonObj);
    } else {
      jsonObj['equivalence'] = null;
    }

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCommentElement(), 'comment', jsonObj);
    }

    if (this.hasDependsOn()) {
      setFhirBackboneElementListJson(this.getDependsOn(), 'dependsOn', jsonObj);
    }

    if (this.hasProduct()) {
      setFhirBackboneElementListJson(this.getProduct(), 'product', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConceptMapGroupElementTargetDependsOnComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Other elements required for this mapping (from context)
 * - **Definition:** A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
 *
 * @category Data Models: Resource
 * @see [FHIR ConceptMap](http://hl7.org/fhir/StructureDefinition/ConceptMap)
 */
export class ConceptMapGroupElementTargetDependsOnComponent extends BackboneElement implements IBackboneElement {
  constructor(property: UriType | fhirUri | null = null, value: StringType | fhirString | null = null) {
    super();

    this.property = null;
    if (isDefined<UriType | fhirUri>(property)) {
      if (property instanceof PrimitiveType) {
        this.setPropertyElement(property);
      } else {
        this.setProperty(property);
      }
    }

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
   * Parse the provided `ConceptMapGroupElementTargetDependsOnComponent` JSON to instantiate the ConceptMapGroupElementTargetDependsOnComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConceptMapGroupElementTargetDependsOnComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConceptMapGroupElementTargetDependsOnComponent
   * @returns ConceptMapGroupElementTargetDependsOnComponent data model or undefined for `ConceptMapGroupElementTargetDependsOnComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConceptMapGroupElementTargetDependsOnComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConceptMapGroupElementTargetDependsOnComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConceptMapGroupElementTargetDependsOnComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'property';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setProperty(null);
      } else {
        instance.setPropertyElement(datatype);
      }
    } else {
      instance.setProperty(null);
    }

    fieldName = 'system';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setSystemElement(datatype);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
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

    fieldName = 'display';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDisplayElement(datatype);
    }

    return instance;
  }

  /**
   * ConceptMap.group.element.target.dependsOn.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to property mapping depends on
   * - **Definition:** A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private property: UriType | null;

  /**
   * ConceptMap.group.element.target.dependsOn.system Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code System (if necessary)
   * - **Definition:** An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CodeSystem',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private system?: CanonicalType | undefined;

  /**
   * ConceptMap.group.element.target.dependsOn.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value of the referenced element
   * - **Definition:** Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value: StringType | null;

  /**
   * ConceptMap.group.element.target.dependsOn.display Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Display for the code (if value is a code)
   * - **Definition:** The display for the code. The display is only provided to help editors when editing the concept map.
   * - **Comment:** The display is ignored when processing the map.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private display?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `property` property value as a UriType object if defined; else an empty UriType object
   */
  public getPropertyElement(): UriType {
    return this.property ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `property` property.
   *
   * @param element - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPropertyElement(element: UriType | undefined | null): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target.dependsOn.property; Provided value is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.property = element;
    } else {
      this.property = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasPropertyElement(): boolean {
    return isDefined<UriType>(this.property) && !this.property.isEmpty();
  }

  /**
   * @returns the `property` property value as a fhirUri if defined; else null
   */
  public getProperty(): fhirUri | null {
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
  public setProperty(value: fhirUri | undefined | null): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target.dependsOn.property (${String(value)})`;
      this.property = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.property = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return this.hasPropertyElement();
  }

  /**
   * @returns the `system` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getSystemElement(): CanonicalType {
    return this.system ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `system` property.
   *
   * @param element - the `system` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSystemElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target.dependsOn.system; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
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
    return isDefined<CanonicalType>(this.system) && !this.system.isEmpty();
  }

  /**
   * @returns the `system` property value as a fhirCanonical if defined; else undefined
   */
  public getSystem(): fhirCanonical | undefined {
    return this.system?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `system` property.
   *
   * @param value - the `system` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSystem(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.element.target.dependsOn.system (${String(value)})`;
      this.system = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
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
      const optErrMsg = `Invalid ConceptMap.group.element.target.dependsOn.value; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConceptMap.group.element.target.dependsOn.value (${String(value)})`;
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
      const optErrMsg = `Invalid ConceptMap.group.element.target.dependsOn.display; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConceptMap.group.element.target.dependsOn.display (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ConceptMap.group.element.target.dependsOn';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.property,
      this.system,
      this.value,
      this.display,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.property, this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConceptMapGroupElementTargetDependsOnComponent {
    const dest = new ConceptMapGroupElementTargetDependsOnComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConceptMapGroupElementTargetDependsOnComponent): void {
    super.copyValues(dest);
    dest.property = this.property ? this.property.copy() : null;
    dest.system = this.system?.copy();
    dest.value = this.value ? this.value.copy() : null;
    dest.display = this.display?.copy();
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

    if (this.hasPropertyElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getPropertyElement(), 'property', jsonObj);
    } else {
      jsonObj['property'] = null;
    }

    if (this.hasSystemElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getSystemElement(), 'system', jsonObj);
    }

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getValueElement(), 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    if (this.hasDisplayElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDisplayElement(), 'display', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConceptMapGroupUnmappedComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** What to do when there is no mapping for the source concept
 * - **Definition:** What to do when there is no mapping for the source concept. "Unmapped" does not include codes that are unmatched, and the unmapped element is ignored in a code is specified to have equivalence = unmatched.
 * - **Comment:** This only applies if the source code has a system value that matches the system defined for the group.
 *
 * @category Data Models: Resource
 * @see [FHIR ConceptMap](http://hl7.org/fhir/StructureDefinition/ConceptMap)
 */
export class ConceptMapGroupUnmappedComponent extends BackboneElement implements IBackboneElement {
  constructor(mode: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.conceptmapUnmappedModeEnum = new ConceptmapUnmappedModeEnum();

    this.mode = constructorCodeValueAsEnumCodeType<ConceptmapUnmappedModeEnum>(
      mode,
      ConceptmapUnmappedModeEnum,
      this.conceptmapUnmappedModeEnum,
      'ConceptMap.group.unmapped.mode',
    );
  }

  /**
   * Parse the provided `ConceptMapGroupUnmappedComponent` JSON to instantiate the ConceptMapGroupUnmappedComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConceptMapGroupUnmappedComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConceptMapGroupUnmappedComponent
   * @returns ConceptMapGroupUnmappedComponent data model or undefined for `ConceptMapGroupUnmappedComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConceptMapGroupUnmappedComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConceptMapGroupUnmappedComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConceptMapGroupUnmappedComponent();

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

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setUrlElement(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ConceptmapUnmappedMode
   *
   * @see {@link ConceptmapUnmappedModeEnum }
   */
  private readonly conceptmapUnmappedModeEnum: ConceptmapUnmappedModeEnum;

  /**
   * ConceptMap.group.unmapped.mode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** provided | fixed | other-map
   * - **Definition:** Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ConceptmapUnmappedModeEnum }
   */
  private mode: EnumCodeType | null;

  /**
   * ConceptMap.group.unmapped.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fixed code when mode = fixed
   * - **Definition:** The fixed code to use when the mode = \'fixed\'  - all unmapped codes are mapped to a single fixed code.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeType | undefined;

  /**
   * ConceptMap.group.unmapped.display Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Display for the code
   * - **Definition:** The display for the code. The display is only provided to help editors when editing the concept map.
   * - **Comment:** The display is ignored when processing the map.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private display?: StringType | undefined;

  /**
   * ConceptMap.group.unmapped.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped
   * - **Definition:** The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ConceptMap',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private url?: CanonicalType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `mode` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConceptmapUnmappedModeEnum }
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
   * @see CodeSystem Enumeration: {@link ConceptmapUnmappedModeEnum }
   */
  public setModeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ConceptMap.group.unmapped.mode`;
      assertEnumCodeType<ConceptmapUnmappedModeEnum>(enumType, ConceptmapUnmappedModeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ConceptmapUnmappedModeEnum }
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
   * @see CodeSystem Enumeration: {@link ConceptmapUnmappedModeEnum }
   */
  public setModeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ConceptMap.group.unmapped.mode; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.mode = new EnumCodeType(element, this.conceptmapUnmappedModeEnum);
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
   * @see CodeSystem Enumeration: {@link ConceptmapUnmappedModeEnum }
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
   * @see CodeSystem Enumeration: {@link ConceptmapUnmappedModeEnum }
   */
  public setMode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.unmapped.mode (${String(value)})`;
      this.mode = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.conceptmapUnmappedModeEnum);
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
      const optErrMsg = `Invalid ConceptMap.group.unmapped.code; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid ConceptMap.group.unmapped.code (${String(value)})`;
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
      const optErrMsg = `Invalid ConceptMap.group.unmapped.display; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConceptMap.group.unmapped.display (${String(value)})`;
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
   * @returns the `url` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getUrlElement(): CanonicalType {
    return this.url ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `url` property.
   *
   * @param element - the `url` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrlElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid ConceptMap.group.unmapped.url; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
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
    return isDefined<CanonicalType>(this.url) && !this.url.isEmpty();
  }

  /**
   * @returns the `url` property value as a fhirCanonical if defined; else undefined
   */
  public getUrl(): fhirCanonical | undefined {
    return this.url?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `url` property.
   *
   * @param value - the `url` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrl(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid ConceptMap.group.unmapped.url (${String(value)})`;
      this.url = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
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
    return 'ConceptMap.group.unmapped';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.mode,
      this.code,
      this.display,
      this.url,
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
  public override copy(): ConceptMapGroupUnmappedComponent {
    const dest = new ConceptMapGroupUnmappedComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConceptMapGroupUnmappedComponent): void {
    super.copyValues(dest);
    dest.mode = this.mode ? this.mode.copy() : null;
    dest.code = this.code?.copy();
    dest.display = this.display?.copy();
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

    if (this.hasModeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getModeElement()!, 'mode', jsonObj);
    } else {
      jsonObj['mode'] = null;
    }

    if (this.hasCodeElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement(), 'code', jsonObj);
    }

    if (this.hasDisplayElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDisplayElement(), 'display', jsonObj);
    }

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getUrlElement(), 'url', jsonObj);
    }

    return jsonObj;
  }
}
